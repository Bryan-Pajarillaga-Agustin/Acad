(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Eg={exports:{}},iu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0;function MN(){if(U0)return iu;U0=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(i,a,l){var u=null;if(l!==void 0&&(u=""+l),a.key!==void 0&&(u=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:n,type:i,key:u,ref:a!==void 0?a:null,props:l}}return iu.Fragment=e,iu.jsx=t,iu.jsxs=t,iu}var V0;function LN(){return V0||(V0=1,Eg.exports=MN()),Eg.exports}var y=LN(),Tg={exports:{}},Ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0;function UN(){if(j0)return Ue;j0=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function b(A){return A===null||typeof A!="object"?null:(A=S&&A[S]||A["@@iterator"],typeof A=="function"?A:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,W={};function V(A,J,ve){this.props=A,this.context=J,this.refs=W,this.updater=ve||k}V.prototype.isReactComponent={},V.prototype.setState=function(A,J){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,J,"setState")},V.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function F(){}F.prototype=V.prototype;function B(A,J,ve){this.props=A,this.context=J,this.refs=W,this.updater=ve||k}var K=B.prototype=new F;K.constructor=B,M(K,V.prototype),K.isPureReactComponent=!0;var z=Array.isArray,re={H:null,A:null,T:null,S:null},ge=Object.prototype.hasOwnProperty;function P(A,J,ve,fe,Q,oe){return ve=oe.ref,{$$typeof:n,type:A,key:J,ref:ve!==void 0?ve:null,props:oe}}function R(A,J){return P(A.type,J,void 0,void 0,void 0,A.props)}function I(A){return typeof A=="object"&&A!==null&&A.$$typeof===n}function N(A){var J={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(ve){return J[ve]})}var D=/\/+/g;function L(A,J){return typeof A=="object"&&A!==null&&A.key!=null?N(""+A.key):J.toString(36)}function x(){}function je(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(x,x):(A.status="pending",A.then(function(J){A.status==="pending"&&(A.status="fulfilled",A.value=J)},function(J){A.status==="pending"&&(A.status="rejected",A.reason=J)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function qe(A,J,ve,fe,Q){var oe=typeof A;(oe==="undefined"||oe==="boolean")&&(A=null);var ne=!1;if(A===null)ne=!0;else switch(oe){case"bigint":case"string":case"number":ne=!0;break;case"object":switch(A.$$typeof){case n:case e:ne=!0;break;case v:return ne=A._init,qe(ne(A._payload),J,ve,fe,Q)}}if(ne)return Q=Q(A),ne=fe===""?"."+L(A,0):fe,z(Q)?(ve="",ne!=null&&(ve=ne.replace(D,"$&/")+"/"),qe(Q,J,ve,"",function(pe){return pe})):Q!=null&&(I(Q)&&(Q=R(Q,ve+(Q.key==null||A&&A.key===Q.key?"":(""+Q.key).replace(D,"$&/")+"/")+ne)),J.push(Q)),1;ne=0;var xe=fe===""?".":fe+":";if(z(A))for(var ye=0;ye<A.length;ye++)fe=A[ye],oe=xe+L(fe,ye),ne+=qe(fe,J,ve,oe,Q);else if(ye=b(A),typeof ye=="function")for(A=ye.call(A),ye=0;!(fe=A.next()).done;)fe=fe.value,oe=xe+L(fe,ye++),ne+=qe(fe,J,ve,oe,Q);else if(oe==="object"){if(typeof A.then=="function")return qe(je(A),J,ve,fe,Q);throw J=String(A),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return ne}function ce(A,J,ve){if(A==null)return A;var fe=[],Q=0;return qe(A,fe,"","",function(oe){return J.call(ve,oe,Q++)}),fe}function Se(A){if(A._status===-1){var J=A._result;J=J(),J.then(function(ve){(A._status===0||A._status===-1)&&(A._status=1,A._result=ve)},function(ve){(A._status===0||A._status===-1)&&(A._status=2,A._result=ve)}),A._status===-1&&(A._status=0,A._result=J)}if(A._status===1)return A._result.default;throw A._result}var he=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function be(){}return Ue.Children={map:ce,forEach:function(A,J,ve){ce(A,function(){J.apply(this,arguments)},ve)},count:function(A){var J=0;return ce(A,function(){J++}),J},toArray:function(A){return ce(A,function(J){return J})||[]},only:function(A){if(!I(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},Ue.Component=V,Ue.Fragment=t,Ue.Profiler=a,Ue.PureComponent=B,Ue.StrictMode=i,Ue.Suspense=p,Ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=re,Ue.act=function(){throw Error("act(...) is not supported in production builds of React.")},Ue.cache=function(A){return function(){return A.apply(null,arguments)}},Ue.cloneElement=function(A,J,ve){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var fe=M({},A.props),Q=A.key,oe=void 0;if(J!=null)for(ne in J.ref!==void 0&&(oe=void 0),J.key!==void 0&&(Q=""+J.key),J)!ge.call(J,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&J.ref===void 0||(fe[ne]=J[ne]);var ne=arguments.length-2;if(ne===1)fe.children=ve;else if(1<ne){for(var xe=Array(ne),ye=0;ye<ne;ye++)xe[ye]=arguments[ye+2];fe.children=xe}return P(A.type,Q,void 0,void 0,oe,fe)},Ue.createContext=function(A){return A={$$typeof:u,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:l,_context:A},A},Ue.createElement=function(A,J,ve){var fe,Q={},oe=null;if(J!=null)for(fe in J.key!==void 0&&(oe=""+J.key),J)ge.call(J,fe)&&fe!=="key"&&fe!=="__self"&&fe!=="__source"&&(Q[fe]=J[fe]);var ne=arguments.length-2;if(ne===1)Q.children=ve;else if(1<ne){for(var xe=Array(ne),ye=0;ye<ne;ye++)xe[ye]=arguments[ye+2];Q.children=xe}if(A&&A.defaultProps)for(fe in ne=A.defaultProps,ne)Q[fe]===void 0&&(Q[fe]=ne[fe]);return P(A,oe,void 0,void 0,null,Q)},Ue.createRef=function(){return{current:null}},Ue.forwardRef=function(A){return{$$typeof:d,render:A}},Ue.isValidElement=I,Ue.lazy=function(A){return{$$typeof:v,_payload:{_status:-1,_result:A},_init:Se}},Ue.memo=function(A,J){return{$$typeof:m,type:A,compare:J===void 0?null:J}},Ue.startTransition=function(A){var J=re.T,ve={};re.T=ve;try{var fe=A(),Q=re.S;Q!==null&&Q(ve,fe),typeof fe=="object"&&fe!==null&&typeof fe.then=="function"&&fe.then(be,he)}catch(oe){he(oe)}finally{re.T=J}},Ue.unstable_useCacheRefresh=function(){return re.H.useCacheRefresh()},Ue.use=function(A){return re.H.use(A)},Ue.useActionState=function(A,J,ve){return re.H.useActionState(A,J,ve)},Ue.useCallback=function(A,J){return re.H.useCallback(A,J)},Ue.useContext=function(A){return re.H.useContext(A)},Ue.useDebugValue=function(){},Ue.useDeferredValue=function(A,J){return re.H.useDeferredValue(A,J)},Ue.useEffect=function(A,J){return re.H.useEffect(A,J)},Ue.useId=function(){return re.H.useId()},Ue.useImperativeHandle=function(A,J,ve){return re.H.useImperativeHandle(A,J,ve)},Ue.useInsertionEffect=function(A,J){return re.H.useInsertionEffect(A,J)},Ue.useLayoutEffect=function(A,J){return re.H.useLayoutEffect(A,J)},Ue.useMemo=function(A,J){return re.H.useMemo(A,J)},Ue.useOptimistic=function(A,J){return re.H.useOptimistic(A,J)},Ue.useReducer=function(A,J,ve){return re.H.useReducer(A,J,ve)},Ue.useRef=function(A){return re.H.useRef(A)},Ue.useState=function(A){return re.H.useState(A)},Ue.useSyncExternalStore=function(A,J,ve){return re.H.useSyncExternalStore(A,J,ve)},Ue.useTransition=function(){return re.H.useTransition()},Ue.version="19.0.0",Ue}var B0;function ty(){return B0||(B0=1,Tg.exports=UN()),Tg.exports}var Z=ty(),Sg={exports:{}},su={},bg={exports:{}},Ag={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0;function VN(){return F0||(F0=1,function(n){function e(ce,Se){var he=ce.length;ce.push(Se);e:for(;0<he;){var be=he-1>>>1,A=ce[be];if(0<a(A,Se))ce[be]=Se,ce[he]=A,he=be;else break e}}function t(ce){return ce.length===0?null:ce[0]}function i(ce){if(ce.length===0)return null;var Se=ce[0],he=ce.pop();if(he!==Se){ce[0]=he;e:for(var be=0,A=ce.length,J=A>>>1;be<J;){var ve=2*(be+1)-1,fe=ce[ve],Q=ve+1,oe=ce[Q];if(0>a(fe,he))Q<A&&0>a(oe,fe)?(ce[be]=oe,ce[Q]=he,be=Q):(ce[be]=fe,ce[ve]=he,be=ve);else if(Q<A&&0>a(oe,he))ce[be]=oe,ce[Q]=he,be=Q;else break e}}return Se}function a(ce,Se){var he=ce.sortIndex-Se.sortIndex;return he!==0?he:ce.id-Se.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var p=[],m=[],v=1,S=null,b=3,k=!1,M=!1,W=!1,V=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function K(ce){for(var Se=t(m);Se!==null;){if(Se.callback===null)i(m);else if(Se.startTime<=ce)i(m),Se.sortIndex=Se.expirationTime,e(p,Se);else break;Se=t(m)}}function z(ce){if(W=!1,K(ce),!M)if(t(p)!==null)M=!0,je();else{var Se=t(m);Se!==null&&qe(z,Se.startTime-ce)}}var re=!1,ge=-1,P=5,R=-1;function I(){return!(n.unstable_now()-R<P)}function N(){if(re){var ce=n.unstable_now();R=ce;var Se=!0;try{e:{M=!1,W&&(W=!1,F(ge),ge=-1),k=!0;var he=b;try{t:{for(K(ce),S=t(p);S!==null&&!(S.expirationTime>ce&&I());){var be=S.callback;if(typeof be=="function"){S.callback=null,b=S.priorityLevel;var A=be(S.expirationTime<=ce);if(ce=n.unstable_now(),typeof A=="function"){S.callback=A,K(ce),Se=!0;break t}S===t(p)&&i(p),K(ce)}else i(p);S=t(p)}if(S!==null)Se=!0;else{var J=t(m);J!==null&&qe(z,J.startTime-ce),Se=!1}}break e}finally{S=null,b=he,k=!1}Se=void 0}}finally{Se?D():re=!1}}}var D;if(typeof B=="function")D=function(){B(N)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,x=L.port2;L.port1.onmessage=N,D=function(){x.postMessage(null)}}else D=function(){V(N,0)};function je(){re||(re=!0,D())}function qe(ce,Se){ge=V(function(){ce(n.unstable_now())},Se)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ce){ce.callback=null},n.unstable_continueExecution=function(){M||k||(M=!0,je())},n.unstable_forceFrameRate=function(ce){0>ce||125<ce?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<ce?Math.floor(1e3/ce):5},n.unstable_getCurrentPriorityLevel=function(){return b},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(ce){switch(b){case 1:case 2:case 3:var Se=3;break;default:Se=b}var he=b;b=Se;try{return ce()}finally{b=he}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ce,Se){switch(ce){case 1:case 2:case 3:case 4:case 5:break;default:ce=3}var he=b;b=ce;try{return Se()}finally{b=he}},n.unstable_scheduleCallback=function(ce,Se,he){var be=n.unstable_now();switch(typeof he=="object"&&he!==null?(he=he.delay,he=typeof he=="number"&&0<he?be+he:be):he=be,ce){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=he+A,ce={id:v++,callback:Se,priorityLevel:ce,startTime:he,expirationTime:A,sortIndex:-1},he>be?(ce.sortIndex=he,e(m,ce),t(p)===null&&ce===t(m)&&(W?(F(ge),ge=-1):W=!0,qe(z,he-be))):(ce.sortIndex=A,e(p,ce),M||k||(M=!0,je())),ce},n.unstable_shouldYield=I,n.unstable_wrapCallback=function(ce){var Se=b;return function(){var he=b;b=Se;try{return ce.apply(this,arguments)}finally{b=he}}}}(Ag)),Ag}var z0;function jN(){return z0||(z0=1,bg.exports=VN()),bg.exports}var wg={exports:{}},Tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H0;function BN(){if(H0)return Tn;H0=1;var n=ty();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var i={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,m,v){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:S==null?null:""+S,children:p,containerInfo:m,implementation:v}}var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Tn.createPortal=function(p,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return l(p,m,null,v)},Tn.flushSync=function(p){var m=u.T,v=i.p;try{if(u.T=null,i.p=2,p)return p()}finally{u.T=m,i.p=v,i.d.f()}},Tn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,i.d.C(p,m))},Tn.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},Tn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var v=m.as,S=d(v,m.crossOrigin),b=typeof m.integrity=="string"?m.integrity:void 0,k=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?i.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:S,integrity:b,fetchPriority:k}):v==="script"&&i.d.X(p,{crossOrigin:S,integrity:b,fetchPriority:k,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Tn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=d(m.as,m.crossOrigin);i.d.M(p,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&i.d.M(p)},Tn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,S=d(v,m.crossOrigin);i.d.L(p,v,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Tn.preloadModule=function(p,m){if(typeof p=="string")if(m){var v=d(m.as,m.crossOrigin);i.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else i.d.m(p)},Tn.requestFormReset=function(p){i.d.r(p)},Tn.unstable_batchedUpdates=function(p,m){return p(m)},Tn.useFormState=function(p,m,v){return u.H.useFormState(p,m,v)},Tn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Tn.version="19.0.0",Tn}var q0;function LA(){if(q0)return wg.exports;q0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),wg.exports=BN(),wg.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0;function FN(){if(G0)return su;G0=1;var n=jN(),e=ty(),t=LA();function i(s){var r="https://react.dev/errors/"+s;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+s+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11)}var l=Symbol.for("react.element"),u=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),b=Symbol.for("react.consumer"),k=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),z=Symbol.for("react.memo_cache_sentinel"),re=Symbol.iterator;function ge(s){return s===null||typeof s!="object"?null:(s=re&&s[re]||s["@@iterator"],typeof s=="function"?s:null)}var P=Symbol.for("react.client.reference");function R(s){if(s==null)return null;if(typeof s=="function")return s.$$typeof===P?null:s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case p:return"Fragment";case d:return"Portal";case v:return"Profiler";case m:return"StrictMode";case W:return"Suspense";case V:return"SuspenseList"}if(typeof s=="object")switch(s.$$typeof){case k:return(s.displayName||"Context")+".Provider";case b:return(s._context.displayName||"Context")+".Consumer";case M:var r=s.render;return s=s.displayName,s||(s=r.displayName||r.name||"",s=s!==""?"ForwardRef("+s+")":"ForwardRef"),s;case F:return r=s.displayName||null,r!==null?r:R(s.type)||"Memo";case B:r=s._payload,s=s._init;try{return R(s(r))}catch{}}return null}var I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=Object.assign,D,L;function x(s){if(D===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);D=r&&r[1]||"",L=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+D+s+L}var je=!1;function qe(s,r){if(!s||je)return"";je=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(r){var ae=function(){throw Error()};if(Object.defineProperty(ae.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ae,[])}catch(ee){var $=ee}Reflect.construct(s,[],ae)}else{try{ae.call()}catch(ee){$=ee}s.call(ae.prototype)}}else{try{throw Error()}catch(ee){$=ee}(ae=s())&&typeof ae.catch=="function"&&ae.catch(function(){})}}catch(ee){if(ee&&$&&typeof ee.stack=="string")return[ee.stack,$.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),T=g[0],w=g[1];if(T&&w){var O=T.split(`
`),j=w.split(`
`);for(f=c=0;c<O.length&&!O[c].includes("DetermineComponentFrameRoot");)c++;for(;f<j.length&&!j[f].includes("DetermineComponentFrameRoot");)f++;if(c===O.length||f===j.length)for(c=O.length-1,f=j.length-1;1<=c&&0<=f&&O[c]!==j[f];)f--;for(;1<=c&&0<=f;c--,f--)if(O[c]!==j[f]){if(c!==1||f!==1)do if(c--,f--,0>f||O[c]!==j[f]){var te=`
`+O[c].replace(" at new "," at ");return s.displayName&&te.includes("<anonymous>")&&(te=te.replace("<anonymous>",s.displayName)),te}while(1<=c&&0<=f);break}}}finally{je=!1,Error.prepareStackTrace=o}return(o=s?s.displayName||s.name:"")?x(o):""}function ce(s){switch(s.tag){case 26:case 27:case 5:return x(s.type);case 16:return x("Lazy");case 13:return x("Suspense");case 19:return x("SuspenseList");case 0:case 15:return s=qe(s.type,!1),s;case 11:return s=qe(s.type.render,!1),s;case 1:return s=qe(s.type,!0),s;default:return""}}function Se(s){try{var r="";do r+=ce(s),s=s.return;while(s);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function he(s){var r=s,o=s;if(s.alternate)for(;r.return;)r=r.return;else{s=r;do r=s,(r.flags&4098)!==0&&(o=r.return),s=r.return;while(s)}return r.tag===3?o:null}function be(s){if(s.tag===13){var r=s.memoizedState;if(r===null&&(s=s.alternate,s!==null&&(r=s.memoizedState)),r!==null)return r.dehydrated}return null}function A(s){if(he(s)!==s)throw Error(i(188))}function J(s){var r=s.alternate;if(!r){if(r=he(s),r===null)throw Error(i(188));return r!==s?null:s}for(var o=s,c=r;;){var f=o.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===o)return A(f),s;if(g===c)return A(f),r;g=g.sibling}throw Error(i(188))}if(o.return!==c.return)o=f,c=g;else{for(var T=!1,w=f.child;w;){if(w===o){T=!0,o=f,c=g;break}if(w===c){T=!0,c=f,o=g;break}w=w.sibling}if(!T){for(w=g.child;w;){if(w===o){T=!0,o=g,c=f;break}if(w===c){T=!0,c=g,o=f;break}w=w.sibling}if(!T)throw Error(i(189))}}if(o.alternate!==c)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?s:r}function ve(s){var r=s.tag;if(r===5||r===26||r===27||r===6)return s;for(s=s.child;s!==null;){if(r=ve(s),r!==null)return r;s=s.sibling}return null}var fe=Array.isArray,Q=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},ne=[],xe=-1;function ye(s){return{current:s}}function pe(s){0>xe||(s.current=ne[xe],ne[xe]=null,xe--)}function Re(s,r){xe++,ne[xe]=s.current,s.current=r}var wt=ye(null),Xt=ye(null),Zt=ye(null),kn=ye(null);function ri(s,r){switch(Re(Zt,r),Re(Xt,s),Re(wt,null),s=r.nodeType,s){case 9:case 11:r=(r=r.documentElement)&&(r=r.namespaceURI)?f0(r):0;break;default:if(s=s===8?r.parentNode:r,r=s.tagName,s=s.namespaceURI)s=f0(s),r=d0(s,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}pe(wt),Re(wt,r)}function Fn(){pe(wt),pe(Xt),pe(Zt)}function Fi(s){s.memoizedState!==null&&Re(kn,s);var r=wt.current,o=d0(r,s.type);r!==o&&(Re(Xt,s),Re(wt,o))}function X(s){Xt.current===s&&(pe(wt),pe(Xt)),kn.current===s&&(pe(kn),Zc._currentValue=oe)}var Ge=Object.prototype.hasOwnProperty,Dt=n.unstable_scheduleCallback,Ut=n.unstable_cancelCallback,ys=n.unstable_shouldYield,ai=n.unstable_requestPaint,cn=n.unstable_now,Sa=n.unstable_getCurrentPriorityLevel,vt=n.unstable_ImmediatePriority,Vt=n.unstable_UserBlockingPriority,vs=n.unstable_NormalPriority,ph=n.unstable_LowPriority,ec=n.unstable_IdlePriority,bp=n.log,ba=n.unstable_setDisableYieldValue,cr=null,vn=null;function tc(s){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(cr,s,void 0,(s.current.flags&128)===128)}catch{}}function zi(s){if(typeof bp=="function"&&ba(s),vn&&typeof vn.setStrictMode=="function")try{vn.setStrictMode(cr,s)}catch{}}var Dn=Math.clz32?Math.clz32:gh,nc=Math.log,mh=Math.LN2;function gh(s){return s>>>=0,s===0?32:31-(nc(s)/mh|0)|0}var Hi=128,ur=4194304;function Ni(s){var r=s&42;if(r!==0)return r;switch(s&-s){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return s&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return s}}function oi(s,r){var o=s.pendingLanes;if(o===0)return 0;var c=0,f=s.suspendedLanes,g=s.pingedLanes,T=s.warmLanes;s=s.finishedLanes!==0;var w=o&134217727;return w!==0?(o=w&~f,o!==0?c=Ni(o):(g&=w,g!==0?c=Ni(g):s||(T=w&~T,T!==0&&(c=Ni(T))))):(w=o&~f,w!==0?c=Ni(w):g!==0?c=Ni(g):s||(T=o&~T,T!==0&&(c=Ni(T)))),c===0?0:r!==0&&r!==c&&(r&f)===0&&(f=c&-c,T=r&-r,f>=T||f===32&&(T&4194176)!==0)?r:c}function hr(s,r){return(s.pendingLanes&~(s.suspendedLanes&~s.pingedLanes)&r)===0}function wo(s,r){switch(s){case 1:case 2:case 4:case 8:return r+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ic(){var s=Hi;return Hi<<=1,(Hi&4194176)===0&&(Hi=128),s}function fr(){var s=ur;return ur<<=1,(ur&62914560)===0&&(ur=4194304),s}function Co(s){for(var r=[],o=0;31>o;o++)r.push(s);return r}function Pt(s,r){s.pendingLanes|=r,r!==268435456&&(s.suspendedLanes=0,s.pingedLanes=0,s.warmLanes=0)}function _h(s,r,o,c,f,g){var T=s.pendingLanes;s.pendingLanes=o,s.suspendedLanes=0,s.pingedLanes=0,s.warmLanes=0,s.expiredLanes&=o,s.entangledLanes&=o,s.errorRecoveryDisabledLanes&=o,s.shellSuspendCounter=0;var w=s.entanglements,O=s.expirationTimes,j=s.hiddenUpdates;for(o=T&~o;0<o;){var te=31-Dn(o),ae=1<<te;w[te]=0,O[te]=-1;var $=j[te];if($!==null)for(j[te]=null,te=0;te<$.length;te++){var ee=$[te];ee!==null&&(ee.lane&=-536870913)}o&=~ae}c!==0&&dr(s,c,0),g!==0&&f===0&&s.tag!==0&&(s.suspendedLanes|=g&~(T&~r))}function dr(s,r,o){s.pendingLanes|=r,s.suspendedLanes&=~r;var c=31-Dn(r);s.entangledLanes|=r,s.entanglements[c]=s.entanglements[c]|1073741824|o&4194218}function pr(s,r){var o=s.entangledLanes|=r;for(s=s.entanglements;o;){var c=31-Dn(o),f=1<<c;f&r|s[c]&r&&(s[c]|=r),o&=~f}}function yh(s){return s&=-s,2<s?8<s?(s&134217727)!==0?32:268435456:8:2}function vh(){var s=Q.p;return s!==0?s:(s=window.event,s===void 0?32:O0(s.type))}function mr(s,r){var o=Q.p;try{return Q.p=s,r()}finally{Q.p=o}}var qi=Math.random().toString(36).slice(2),Jt="__reactFiber$"+qi,Ht="__reactProps$"+qi,Es="__reactContainer$"+qi,Aa="__reactEvents$"+qi,Ro="__reactListeners$"+qi,Gi="__reactHandles$"+qi,sc="__reactResources$"+qi,gr="__reactMarker$"+qi;function wa(s){delete s[Jt],delete s[Ht],delete s[Aa],delete s[Ro],delete s[Gi]}function xi(s){var r=s[Jt];if(r)return r;for(var o=s.parentNode;o;){if(r=o[Es]||o[Jt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(s=g0(s);s!==null;){if(o=s[Jt])return o;s=g0(s)}return r}s=o,o=s.parentNode}return null}function Ts(s){if(s=s[Jt]||s[Es]){var r=s.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return s}return null}function _r(s){var r=s.tag;if(r===5||r===26||r===27||r===6)return s.stateNode;throw Error(i(33))}function yr(s){var r=s[sc];return r||(r=s[sc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Et(s){s[gr]=!0}var rc=new Set,Io={};function Kn(s,r){zn(s,r),zn(s+"Capture",r)}function zn(s,r){for(Io[s]=r,s=0;s<r.length;s++)rc.add(r[s])}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ap=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ac={},oc={};function Eh(s){return Ge.call(oc,s)?!0:Ge.call(ac,s)?!1:Ap.test(s)?oc[s]=!0:(ac[s]=!0,!1)}function vr(s,r,o){if(Eh(r))if(o===null)s.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":s.removeAttribute(r);return;case"boolean":var c=r.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){s.removeAttribute(r);return}}s.setAttribute(r,""+o)}}function Er(s,r,o){if(o===null)s.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":s.removeAttribute(r);return}s.setAttribute(r,""+o)}}function li(s,r,o,c){if(c===null)s.removeAttribute(o);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":s.removeAttribute(o);return}s.setAttributeNS(r,o,""+c)}}function Pn(s){switch(typeof s){case"bigint":case"boolean":case"number":case"string":case"undefined":return s;case"object":return s;default:return""}}function Th(s){var r=s.type;return(s=s.nodeName)&&s.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function wp(s){var r=Th(s)?"checked":"value",o=Object.getOwnPropertyDescriptor(s.constructor.prototype,r),c=""+s[r];if(!s.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,g=o.set;return Object.defineProperty(s,r,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,g.call(this,T)}}),Object.defineProperty(s,r,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){s._valueTracker=null,delete s[r]}}}}function Ca(s){s._valueTracker||(s._valueTracker=wp(s))}function lc(s){if(!s)return!1;var r=s._valueTracker;if(!r)return!0;var o=r.getValue(),c="";return s&&(c=Th(s)?s.checked?"true":"false":s.value),s=c,s!==o?(r.setValue(s),!0):!1}function No(s){if(s=s||(typeof document<"u"?document:void 0),typeof s>"u")return null;try{return s.activeElement||s.body}catch{return s.body}}var Ss=/[\n"\\]/g;function Ct(s){return s.replace(Ss,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Tr(s,r,o,c,f,g,T,w){s.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?s.type=T:s.removeAttribute("type"),r!=null?T==="number"?(r===0&&s.value===""||s.value!=r)&&(s.value=""+Pn(r)):s.value!==""+Pn(r)&&(s.value=""+Pn(r)):T!=="submit"&&T!=="reset"||s.removeAttribute("value"),r!=null?xo(s,T,Pn(r)):o!=null?xo(s,T,Pn(o)):c!=null&&s.removeAttribute("value"),f==null&&g!=null&&(s.defaultChecked=!!g),f!=null&&(s.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?s.name=""+Pn(w):s.removeAttribute("name")}function Ra(s,r,o,c,f,g,T,w){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(s.type=g),r!=null||o!=null){if(!(g!=="submit"&&g!=="reset"||r!=null))return;o=o!=null?""+Pn(o):"",r=r!=null?""+Pn(r):o,w||r===s.value||(s.value=r),s.defaultValue=r}c=c??f,c=typeof c!="function"&&typeof c!="symbol"&&!!c,s.checked=w?s.checked:!!c,s.defaultChecked=!!c,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(s.name=T)}function xo(s,r,o){r==="number"&&No(s.ownerDocument)===s||s.defaultValue===""+o||(s.defaultValue=""+o)}function nt(s,r,o,c){if(s=s.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<s.length;o++)f=r.hasOwnProperty("$"+s[o].value),s[o].selected!==f&&(s[o].selected=f),f&&c&&(s[o].defaultSelected=!0)}else{for(o=""+Pn(o),r=null,f=0;f<s.length;f++){if(s[f].value===o){s[f].selected=!0,c&&(s[f].defaultSelected=!0);return}r!==null||s[f].disabled||(r=s[f])}r!==null&&(r.selected=!0)}}function Ia(s,r,o){if(r!=null&&(r=""+Pn(r),r!==s.value&&(s.value=r),o==null)){s.defaultValue!==r&&(s.defaultValue=r);return}s.defaultValue=o!=null?""+Pn(o):""}function Sr(s,r,o,c){if(r==null){if(c!=null){if(o!=null)throw Error(i(92));if(fe(c)){if(1<c.length)throw Error(i(93));c=c[0]}o=c}o==null&&(o=""),r=o}o=Pn(r),s.defaultValue=o,c=s.textContent,c===o&&c!==""&&c!==null&&(s.value=c)}function ci(s,r){if(r){var o=s.firstChild;if(o&&o===s.lastChild&&o.nodeType===3){o.nodeValue=r;return}}s.textContent=r}var Cp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cc(s,r,o){var c=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?c?s.setProperty(r,""):r==="float"?s.cssFloat="":s[r]="":c?s.setProperty(r,o):typeof o!="number"||o===0||Cp.has(r)?r==="float"?s.cssFloat=o:s[r]=(""+o).trim():s[r]=o+"px"}function Sh(s,r,o){if(r!=null&&typeof r!="object")throw Error(i(62));if(s=s.style,o!=null){for(var c in o)!o.hasOwnProperty(c)||r!=null&&r.hasOwnProperty(c)||(c.indexOf("--")===0?s.setProperty(c,""):c==="float"?s.cssFloat="":s[c]="");for(var f in r)c=r[f],r.hasOwnProperty(f)&&o[f]!==c&&cc(s,f,c)}else for(var g in r)r.hasOwnProperty(g)&&cc(s,g,r[g])}function uc(s){if(s.indexOf("-")===-1)return!1;switch(s){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ip=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wi(s){return Ip.test(""+s)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":s}var ui=null;function Oo(s){return s=s.target||s.srcElement||window,s.correspondingUseElement&&(s=s.correspondingUseElement),s.nodeType===3?s.parentNode:s}var bs=null,As=null;function ws(s){var r=Ts(s);if(r&&(s=r.stateNode)){var o=s[Ht]||null;e:switch(s=r.stateNode,r.type){case"input":if(Tr(s,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=s;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Ct(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var c=o[r];if(c!==s&&c.form===s.form){var f=c[Ht]||null;if(!f)throw Error(i(90));Tr(c,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)c=o[r],c.form===s.form&&lc(c)}break e;case"textarea":Ia(s,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&nt(s,!!o.multiple,r,!1)}}}var hc=!1;function bh(s,r,o){if(hc)return s(r,o);hc=!0;try{var c=s(r);return c}finally{if(hc=!1,(bs!==null||As!==null)&&(mf(),bs&&(r=bs,s=As,As=bs=null,ws(r),s)))for(r=0;r<s.length;r++)ws(s[r])}}function Na(s,r){var o=s.stateNode;if(o===null)return null;var c=o[Ht]||null;if(c===null)return null;o=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(s=s.type,c=!(s==="button"||s==="input"||s==="select"||s==="textarea")),s=!c;break e;default:s=!1}if(s)return null;if(o&&typeof o!="function")throw Error(i(231,r,typeof o));return o}var hi=!1;if($n)try{var xa={};Object.defineProperty(xa,"passive",{get:function(){hi=!0}}),window.addEventListener("test",xa,xa),window.removeEventListener("test",xa,xa)}catch{hi=!1}var Ki=null,br=null,Cs=null;function fc(){if(Cs)return Cs;var s,r=br,o=r.length,c,f="value"in Ki?Ki.value:Ki.textContent,g=f.length;for(s=0;s<o&&r[s]===f[s];s++);var T=o-s;for(c=1;c<=T&&r[o-c]===f[g-c];c++);return Cs=f.slice(s,1<c?1-c:void 0)}function $i(s){var r=s.keyCode;return"charCode"in s?(s=s.charCode,s===0&&r===13&&(s=13)):s=r,s===10&&(s=13),32<=s||s===13?s:0}function Yi(){return!0}function dc(){return!1}function en(s){function r(o,c,f,g,T){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var w in s)s.hasOwnProperty(w)&&(o=s[w],this[w]=o?o(g):g[w]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Yi:dc,this.isPropagationStopped=dc,this}return N(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Yi)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Yi)},persist:function(){},isPersistent:Yi}),r}var rt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(s){return s.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ko=en(rt),Oa=N({},rt,{view:0,detail:0}),Ah=en(Oa),Do,Po,Qi,ka=N({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ma,button:0,buttons:0,relatedTarget:function(s){return s.relatedTarget===void 0?s.fromElement===s.srcElement?s.toElement:s.fromElement:s.relatedTarget},movementX:function(s){return"movementX"in s?s.movementX:(s!==Qi&&(Qi&&s.type==="mousemove"?(Do=s.screenX-Qi.screenX,Po=s.screenY-Qi.screenY):Po=Do=0,Qi=s),Do)},movementY:function(s){return"movementY"in s?s.movementY:Po}}),fi=en(ka),wh=N({},ka,{dataTransfer:0}),Np=en(wh),Da=N({},Oa,{relatedTarget:0}),Mo=en(Da),pc=N({},rt,{animationName:0,elapsedTime:0,pseudoElement:0}),Lo=en(pc),Ch=N({},rt,{clipboardData:function(s){return"clipboardData"in s?s.clipboardData:window.clipboardData}}),Uo=en(Ch),xp=N({},rt,{data:0}),mc=en(xp),Pa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ih={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gc(s){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(s):(s=Ih[s])?!!r[s]:!1}function Ma(){return gc}var Nh=N({},Oa,{key:function(s){if(s.key){var r=Pa[s.key]||s.key;if(r!=="Unidentified")return r}return s.type==="keypress"?(s=$i(s),s===13?"Enter":String.fromCharCode(s)):s.type==="keydown"||s.type==="keyup"?Rh[s.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ma,charCode:function(s){return s.type==="keypress"?$i(s):0},keyCode:function(s){return s.type==="keydown"||s.type==="keyup"?s.keyCode:0},which:function(s){return s.type==="keypress"?$i(s):s.type==="keydown"||s.type==="keyup"?s.keyCode:0}}),Vo=en(Nh),xh=N({},ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_c=en(xh),Rs=N({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ma}),Oh=en(Rs),kh=N({},rt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dh=en(kh),Ph=N({},ka,{deltaX:function(s){return"deltaX"in s?s.deltaX:"wheelDeltaX"in s?-s.wheelDeltaX:0},deltaY:function(s){return"deltaY"in s?s.deltaY:"wheelDeltaY"in s?-s.wheelDeltaY:"wheelDelta"in s?-s.wheelDelta:0},deltaZ:0,deltaMode:0}),jo=en(Ph),Mn=N({},rt,{newState:0,oldState:0}),Mh=en(Mn),Lh=[9,13,27,32],Xi=$n&&"CompositionEvent"in window,h=null;$n&&"documentMode"in document&&(h=document.documentMode);var _=$n&&"TextEvent"in window&&!h,E=$n&&(!Xi||h&&8<h&&11>=h),C=" ",q=!1;function Y(s,r){switch(s){case"keyup":return Lh.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function de(s){return s=s.detail,typeof s=="object"&&"data"in s?s.data:null}var Qe=!1;function qt(s,r){switch(s){case"compositionend":return de(r);case"keypress":return r.which!==32?null:(q=!0,C);case"textInput":return s=r.data,s===C&&q?null:s;default:return null}}function Xe(s,r){if(Qe)return s==="compositionend"||!Xi&&Y(s,r)?(s=fc(),Cs=br=Ki=null,Qe=!1,s):null;switch(s){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return E&&r.locale!=="ko"?null:r.data;default:return null}}var tn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gt(s){var r=s&&s.nodeName&&s.nodeName.toLowerCase();return r==="input"?!!tn[s.type]:r==="textarea"}function Is(s,r,o,c){bs?As?As.push(c):As=[c]:bs=c,r=Ef(r,"onChange"),0<r.length&&(o=new ko("onChange","change",null,o,c),s.push({event:o,listeners:r}))}var un=null,Zi=null;function yc(s){o0(s,0)}function Uh(s){var r=_r(s);if(lc(r))return s}function Lv(s,r){if(s==="change")return r}var Uv=!1;if($n){var Op;if($n){var kp="oninput"in document;if(!kp){var Vv=document.createElement("div");Vv.setAttribute("oninput","return;"),kp=typeof Vv.oninput=="function"}Op=kp}else Op=!1;Uv=Op&&(!document.documentMode||9<document.documentMode)}function jv(){un&&(un.detachEvent("onpropertychange",Bv),Zi=un=null)}function Bv(s){if(s.propertyName==="value"&&Uh(Zi)){var r=[];Is(r,Zi,s,Oo(s)),bh(yc,r)}}function hI(s,r,o){s==="focusin"?(jv(),un=r,Zi=o,un.attachEvent("onpropertychange",Bv)):s==="focusout"&&jv()}function fI(s){if(s==="selectionchange"||s==="keyup"||s==="keydown")return Uh(Zi)}function dI(s,r){if(s==="click")return Uh(r)}function pI(s,r){if(s==="input"||s==="change")return Uh(r)}function mI(s,r){return s===r&&(s!==0||1/s===1/r)||s!==s&&r!==r}var Yn=typeof Object.is=="function"?Object.is:mI;function vc(s,r){if(Yn(s,r))return!0;if(typeof s!="object"||s===null||typeof r!="object"||r===null)return!1;var o=Object.keys(s),c=Object.keys(r);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!Ge.call(r,f)||!Yn(s[f],r[f]))return!1}return!0}function Fv(s){for(;s&&s.firstChild;)s=s.firstChild;return s}function zv(s,r){var o=Fv(s);s=0;for(var c;o;){if(o.nodeType===3){if(c=s+o.textContent.length,s<=r&&c>=r)return{node:o,offset:r-s};s=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Fv(o)}}function Hv(s,r){return s&&r?s===r?!0:s&&s.nodeType===3?!1:r&&r.nodeType===3?Hv(s,r.parentNode):"contains"in s?s.contains(r):s.compareDocumentPosition?!!(s.compareDocumentPosition(r)&16):!1:!1}function qv(s){s=s!=null&&s.ownerDocument!=null&&s.ownerDocument.defaultView!=null?s.ownerDocument.defaultView:window;for(var r=No(s.document);r instanceof s.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)s=r.contentWindow;else break;r=No(s.document)}return r}function Dp(s){var r=s&&s.nodeName&&s.nodeName.toLowerCase();return r&&(r==="input"&&(s.type==="text"||s.type==="search"||s.type==="tel"||s.type==="url"||s.type==="password")||r==="textarea"||s.contentEditable==="true")}function gI(s,r){var o=qv(r);r=s.focusedElem;var c=s.selectionRange;if(o!==r&&r&&r.ownerDocument&&Hv(r.ownerDocument.documentElement,r)){if(c!==null&&Dp(r)){if(s=c.start,o=c.end,o===void 0&&(o=s),"selectionStart"in r)r.selectionStart=s,r.selectionEnd=Math.min(o,r.value.length);else if(o=(s=r.ownerDocument||document)&&s.defaultView||window,o.getSelection){o=o.getSelection();var f=r.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!o.extend&&g>c&&(f=c,c=g,g=f),f=zv(r,g);var T=zv(r,c);f&&T&&(o.rangeCount!==1||o.anchorNode!==f.node||o.anchorOffset!==f.offset||o.focusNode!==T.node||o.focusOffset!==T.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),o.removeAllRanges(),g>c?(o.addRange(s),o.extend(T.node,T.offset)):(s.setEnd(T.node,T.offset),o.addRange(s)))}}for(s=[],o=r;o=o.parentNode;)o.nodeType===1&&s.push({element:o,left:o.scrollLeft,top:o.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<s.length;r++)o=s[r],o.element.scrollLeft=o.left,o.element.scrollTop=o.top}}var _I=$n&&"documentMode"in document&&11>=document.documentMode,Bo=null,Pp=null,Ec=null,Mp=!1;function Gv(s,r,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Mp||Bo==null||Bo!==No(c)||(c=Bo,"selectionStart"in c&&Dp(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ec&&vc(Ec,c)||(Ec=c,c=Ef(Pp,"onSelect"),0<c.length&&(r=new ko("onSelect","select",null,r,o),s.push({event:r,listeners:c}),r.target=Bo)))}function La(s,r){var o={};return o[s.toLowerCase()]=r.toLowerCase(),o["Webkit"+s]="webkit"+r,o["Moz"+s]="moz"+r,o}var Fo={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionrun:La("Transition","TransitionRun"),transitionstart:La("Transition","TransitionStart"),transitioncancel:La("Transition","TransitionCancel"),transitionend:La("Transition","TransitionEnd")},Lp={},Wv={};$n&&(Wv=document.createElement("div").style,"AnimationEvent"in window||(delete Fo.animationend.animation,delete Fo.animationiteration.animation,delete Fo.animationstart.animation),"TransitionEvent"in window||delete Fo.transitionend.transition);function Ua(s){if(Lp[s])return Lp[s];if(!Fo[s])return s;var r=Fo[s],o;for(o in r)if(r.hasOwnProperty(o)&&o in Wv)return Lp[s]=r[o];return s}var Kv=Ua("animationend"),$v=Ua("animationiteration"),Yv=Ua("animationstart"),yI=Ua("transitionrun"),vI=Ua("transitionstart"),EI=Ua("transitioncancel"),Qv=Ua("transitionend"),Xv=new Map,Zv="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Oi(s,r){Xv.set(s,r),Kn(r,[s])}var di=[],zo=0,Up=0;function Vh(){for(var s=zo,r=Up=zo=0;r<s;){var o=di[r];di[r++]=null;var c=di[r];di[r++]=null;var f=di[r];di[r++]=null;var g=di[r];if(di[r++]=null,c!==null&&f!==null){var T=c.pending;T===null?f.next=f:(f.next=T.next,T.next=f),c.pending=f}g!==0&&Jv(o,f,g)}}function jh(s,r,o,c){di[zo++]=s,di[zo++]=r,di[zo++]=o,di[zo++]=c,Up|=c,s.lanes|=c,s=s.alternate,s!==null&&(s.lanes|=c)}function Vp(s,r,o,c){return jh(s,r,o,c),Bh(s)}function Ar(s,r){return jh(s,null,null,r),Bh(s)}function Jv(s,r,o){s.lanes|=o;var c=s.alternate;c!==null&&(c.lanes|=o);for(var f=!1,g=s.return;g!==null;)g.childLanes|=o,c=g.alternate,c!==null&&(c.childLanes|=o),g.tag===22&&(s=g.stateNode,s===null||s._visibility&1||(f=!0)),s=g,g=g.return;f&&r!==null&&s.tag===3&&(g=s.stateNode,f=31-Dn(o),g=g.hiddenUpdates,s=g[f],s===null?g[f]=[r]:s.push(r),r.lane=o|536870912)}function Bh(s){if(50<Gc)throw Gc=0,qm=null,Error(i(185));for(var r=s.return;r!==null;)s=r,r=s.return;return s.tag===3?s.stateNode:null}var Ho={},eE=new WeakMap;function pi(s,r){if(typeof s=="object"&&s!==null){var o=eE.get(s);return o!==void 0?o:(r={value:s,source:r,stack:Se(r)},eE.set(s,r),r)}return{value:s,source:r,stack:Se(r)}}var qo=[],Go=0,Fh=null,zh=0,mi=[],gi=0,Va=null,Ns=1,xs="";function ja(s,r){qo[Go++]=zh,qo[Go++]=Fh,Fh=s,zh=r}function tE(s,r,o){mi[gi++]=Ns,mi[gi++]=xs,mi[gi++]=Va,Va=s;var c=Ns;s=xs;var f=32-Dn(c)-1;c&=~(1<<f),o+=1;var g=32-Dn(r)+f;if(30<g){var T=f-f%5;g=(c&(1<<T)-1).toString(32),c>>=T,f-=T,Ns=1<<32-Dn(r)+f|o<<f|c,xs=g+s}else Ns=1<<g|o<<f|c,xs=s}function jp(s){s.return!==null&&(ja(s,1),tE(s,1,0))}function Bp(s){for(;s===Fh;)Fh=qo[--Go],qo[Go]=null,zh=qo[--Go],qo[Go]=null;for(;s===Va;)Va=mi[--gi],mi[gi]=null,xs=mi[--gi],mi[gi]=null,Ns=mi[--gi],mi[gi]=null}var Ln=null,hn=null,it=!1,ki=null,Ji=!1,Fp=Error(i(519));function Ba(s){var r=Error(i(418,""));throw bc(pi(r,s)),Fp}function nE(s){var r=s.stateNode,o=s.type,c=s.memoizedProps;switch(r[Jt]=s,r[Ht]=c,o){case"dialog":Ke("cancel",r),Ke("close",r);break;case"iframe":case"object":case"embed":Ke("load",r);break;case"video":case"audio":for(o=0;o<Kc.length;o++)Ke(Kc[o],r);break;case"source":Ke("error",r);break;case"img":case"image":case"link":Ke("error",r),Ke("load",r);break;case"details":Ke("toggle",r);break;case"input":Ke("invalid",r),Ra(r,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Ca(r);break;case"select":Ke("invalid",r);break;case"textarea":Ke("invalid",r),Sr(r,c.value,c.defaultValue,c.children),Ca(r)}o=c.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||c.suppressHydrationWarning===!0||h0(r.textContent,o)?(c.popover!=null&&(Ke("beforetoggle",r),Ke("toggle",r)),c.onScroll!=null&&Ke("scroll",r),c.onScrollEnd!=null&&Ke("scrollend",r),c.onClick!=null&&(r.onclick=Tf),r=!0):r=!1,r||Ba(s)}function iE(s){for(Ln=s.return;Ln;)switch(Ln.tag){case 3:case 27:Ji=!0;return;case 5:case 13:Ji=!1;return;default:Ln=Ln.return}}function Tc(s){if(s!==Ln)return!1;if(!it)return iE(s),it=!0,!1;var r=!1,o;if((o=s.tag!==3&&s.tag!==27)&&((o=s.tag===5)&&(o=s.type,o=!(o!=="form"&&o!=="button")||og(s.type,s.memoizedProps)),o=!o),o&&(r=!0),r&&hn&&Ba(s),iE(s),s.tag===13){if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(i(317));e:{for(s=s.nextSibling,r=0;s;){if(s.nodeType===8)if(o=s.data,o==="/$"){if(r===0){hn=Pi(s.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;s=s.nextSibling}hn=null}}else hn=Ln?Pi(s.stateNode.nextSibling):null;return!0}function Sc(){hn=Ln=null,it=!1}function bc(s){ki===null?ki=[s]:ki.push(s)}var Ac=Error(i(460)),sE=Error(i(474)),zp={then:function(){}};function rE(s){return s=s.status,s==="fulfilled"||s==="rejected"}function Hh(){}function aE(s,r,o){switch(o=s[o],o===void 0?s.push(r):o!==r&&(r.then(Hh,Hh),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw s=r.reason,s===Ac?Error(i(483)):s;default:if(typeof r.status=="string")r.then(Hh,Hh);else{if(s=dt,s!==null&&100<s.shellSuspendCounter)throw Error(i(482));s=r,s.status="pending",s.then(function(c){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=c}},function(c){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=c}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw s=r.reason,s===Ac?Error(i(483)):s}throw wc=r,Ac}}var wc=null;function oE(){if(wc===null)throw Error(i(459));var s=wc;return wc=null,s}var Wo=null,Cc=0;function qh(s){var r=Cc;return Cc+=1,Wo===null&&(Wo=[]),aE(Wo,s,r)}function Rc(s,r){r=r.props.ref,s.ref=r!==void 0?r:null}function Gh(s,r){throw r.$$typeof===l?Error(i(525)):(s=Object.prototype.toString.call(r),Error(i(31,s==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":s)))}function lE(s){var r=s._init;return r(s._payload)}function cE(s){function r(H,U){if(s){var G=H.deletions;G===null?(H.deletions=[U],H.flags|=16):G.push(U)}}function o(H,U){if(!s)return null;for(;U!==null;)r(H,U),U=U.sibling;return null}function c(H){for(var U=new Map;H!==null;)H.key!==null?U.set(H.key,H):U.set(H.index,H),H=H.sibling;return U}function f(H,U){return H=Lr(H,U),H.index=0,H.sibling=null,H}function g(H,U,G){return H.index=G,s?(G=H.alternate,G!==null?(G=G.index,G<U?(H.flags|=33554434,U):G):(H.flags|=33554434,U)):(H.flags|=1048576,U)}function T(H){return s&&H.alternate===null&&(H.flags|=33554434),H}function w(H,U,G,ie){return U===null||U.tag!==6?(U=Lm(G,H.mode,ie),U.return=H,U):(U=f(U,G),U.return=H,U)}function O(H,U,G,ie){var Te=G.type;return Te===p?te(H,U,G.props.children,ie,G.key):U!==null&&(U.elementType===Te||typeof Te=="object"&&Te!==null&&Te.$$typeof===B&&lE(Te)===U.type)?(U=f(U,G.props),Rc(U,G),U.return=H,U):(U=uf(G.type,G.key,G.props,null,H.mode,ie),Rc(U,G),U.return=H,U)}function j(H,U,G,ie){return U===null||U.tag!==4||U.stateNode.containerInfo!==G.containerInfo||U.stateNode.implementation!==G.implementation?(U=Um(G,H.mode,ie),U.return=H,U):(U=f(U,G.children||[]),U.return=H,U)}function te(H,U,G,ie,Te){return U===null||U.tag!==7?(U=Qa(G,H.mode,ie,Te),U.return=H,U):(U=f(U,G),U.return=H,U)}function ae(H,U,G){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return U=Lm(""+U,H.mode,G),U.return=H,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case u:return G=uf(U.type,U.key,U.props,null,H.mode,G),Rc(G,U),G.return=H,G;case d:return U=Um(U,H.mode,G),U.return=H,U;case B:var ie=U._init;return U=ie(U._payload),ae(H,U,G)}if(fe(U)||ge(U))return U=Qa(U,H.mode,G,null),U.return=H,U;if(typeof U.then=="function")return ae(H,qh(U),G);if(U.$$typeof===k)return ae(H,of(H,U),G);Gh(H,U)}return null}function $(H,U,G,ie){var Te=U!==null?U.key:null;if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return Te!==null?null:w(H,U,""+G,ie);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case u:return G.key===Te?O(H,U,G,ie):null;case d:return G.key===Te?j(H,U,G,ie):null;case B:return Te=G._init,G=Te(G._payload),$(H,U,G,ie)}if(fe(G)||ge(G))return Te!==null?null:te(H,U,G,ie,null);if(typeof G.then=="function")return $(H,U,qh(G),ie);if(G.$$typeof===k)return $(H,U,of(H,G),ie);Gh(H,G)}return null}function ee(H,U,G,ie,Te){if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return H=H.get(G)||null,w(U,H,""+ie,Te);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case u:return H=H.get(ie.key===null?G:ie.key)||null,O(U,H,ie,Te);case d:return H=H.get(ie.key===null?G:ie.key)||null,j(U,H,ie,Te);case B:var Be=ie._init;return ie=Be(ie._payload),ee(H,U,G,ie,Te)}if(fe(ie)||ge(ie))return H=H.get(G)||null,te(U,H,ie,Te,null);if(typeof ie.then=="function")return ee(H,U,G,qh(ie),Te);if(ie.$$typeof===k)return ee(H,U,G,of(U,ie),Te);Gh(U,ie)}return null}function Ae(H,U,G,ie){for(var Te=null,Be=null,Ce=U,Oe=U=0,rn=null;Ce!==null&&Oe<G.length;Oe++){Ce.index>Oe?(rn=Ce,Ce=null):rn=Ce.sibling;var st=$(H,Ce,G[Oe],ie);if(st===null){Ce===null&&(Ce=rn);break}s&&Ce&&st.alternate===null&&r(H,Ce),U=g(st,U,Oe),Be===null?Te=st:Be.sibling=st,Be=st,Ce=rn}if(Oe===G.length)return o(H,Ce),it&&ja(H,Oe),Te;if(Ce===null){for(;Oe<G.length;Oe++)Ce=ae(H,G[Oe],ie),Ce!==null&&(U=g(Ce,U,Oe),Be===null?Te=Ce:Be.sibling=Ce,Be=Ce);return it&&ja(H,Oe),Te}for(Ce=c(Ce);Oe<G.length;Oe++)rn=ee(Ce,H,Oe,G[Oe],ie),rn!==null&&(s&&rn.alternate!==null&&Ce.delete(rn.key===null?Oe:rn.key),U=g(rn,U,Oe),Be===null?Te=rn:Be.sibling=rn,Be=rn);return s&&Ce.forEach(function(Hr){return r(H,Hr)}),it&&ja(H,Oe),Te}function Me(H,U,G,ie){if(G==null)throw Error(i(151));for(var Te=null,Be=null,Ce=U,Oe=U=0,rn=null,st=G.next();Ce!==null&&!st.done;Oe++,st=G.next()){Ce.index>Oe?(rn=Ce,Ce=null):rn=Ce.sibling;var Hr=$(H,Ce,st.value,ie);if(Hr===null){Ce===null&&(Ce=rn);break}s&&Ce&&Hr.alternate===null&&r(H,Ce),U=g(Hr,U,Oe),Be===null?Te=Hr:Be.sibling=Hr,Be=Hr,Ce=rn}if(st.done)return o(H,Ce),it&&ja(H,Oe),Te;if(Ce===null){for(;!st.done;Oe++,st=G.next())st=ae(H,st.value,ie),st!==null&&(U=g(st,U,Oe),Be===null?Te=st:Be.sibling=st,Be=st);return it&&ja(H,Oe),Te}for(Ce=c(Ce);!st.done;Oe++,st=G.next())st=ee(Ce,H,Oe,st.value,ie),st!==null&&(s&&st.alternate!==null&&Ce.delete(st.key===null?Oe:st.key),U=g(st,U,Oe),Be===null?Te=st:Be.sibling=st,Be=st);return s&&Ce.forEach(function(PN){return r(H,PN)}),it&&ja(H,Oe),Te}function Nt(H,U,G,ie){if(typeof G=="object"&&G!==null&&G.type===p&&G.key===null&&(G=G.props.children),typeof G=="object"&&G!==null){switch(G.$$typeof){case u:e:{for(var Te=G.key;U!==null;){if(U.key===Te){if(Te=G.type,Te===p){if(U.tag===7){o(H,U.sibling),ie=f(U,G.props.children),ie.return=H,H=ie;break e}}else if(U.elementType===Te||typeof Te=="object"&&Te!==null&&Te.$$typeof===B&&lE(Te)===U.type){o(H,U.sibling),ie=f(U,G.props),Rc(ie,G),ie.return=H,H=ie;break e}o(H,U);break}else r(H,U);U=U.sibling}G.type===p?(ie=Qa(G.props.children,H.mode,ie,G.key),ie.return=H,H=ie):(ie=uf(G.type,G.key,G.props,null,H.mode,ie),Rc(ie,G),ie.return=H,H=ie)}return T(H);case d:e:{for(Te=G.key;U!==null;){if(U.key===Te)if(U.tag===4&&U.stateNode.containerInfo===G.containerInfo&&U.stateNode.implementation===G.implementation){o(H,U.sibling),ie=f(U,G.children||[]),ie.return=H,H=ie;break e}else{o(H,U);break}else r(H,U);U=U.sibling}ie=Um(G,H.mode,ie),ie.return=H,H=ie}return T(H);case B:return Te=G._init,G=Te(G._payload),Nt(H,U,G,ie)}if(fe(G))return Ae(H,U,G,ie);if(ge(G)){if(Te=ge(G),typeof Te!="function")throw Error(i(150));return G=Te.call(G),Me(H,U,G,ie)}if(typeof G.then=="function")return Nt(H,U,qh(G),ie);if(G.$$typeof===k)return Nt(H,U,of(H,G),ie);Gh(H,G)}return typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint"?(G=""+G,U!==null&&U.tag===6?(o(H,U.sibling),ie=f(U,G),ie.return=H,H=ie):(o(H,U),ie=Lm(G,H.mode,ie),ie.return=H,H=ie),T(H)):o(H,U)}return function(H,U,G,ie){try{Cc=0;var Te=Nt(H,U,G,ie);return Wo=null,Te}catch(Ce){if(Ce===Ac)throw Ce;var Be=Ei(29,Ce,null,H.mode);return Be.lanes=ie,Be.return=H,Be}finally{}}}var Fa=cE(!0),uE=cE(!1),Ko=ye(null),Wh=ye(0);function hE(s,r){s=Fs,Re(Wh,s),Re(Ko,r),Fs=s|r.baseLanes}function Hp(){Re(Wh,Fs),Re(Ko,Ko.current)}function qp(){Fs=Wh.current,pe(Ko),pe(Wh)}var _i=ye(null),es=null;function wr(s){var r=s.alternate;Re(Wt,Wt.current&1),Re(_i,s),es===null&&(r===null||Ko.current!==null||r.memoizedState!==null)&&(es=s)}function fE(s){if(s.tag===22){if(Re(Wt,Wt.current),Re(_i,s),es===null){var r=s.alternate;r!==null&&r.memoizedState!==null&&(es=s)}}else Cr()}function Cr(){Re(Wt,Wt.current),Re(_i,_i.current)}function Os(s){pe(_i),es===s&&(es=null),pe(Wt)}var Wt=ye(0);function Kh(s){for(var r=s;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break;for(;r.sibling===null;){if(r.return===null||r.return===s)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var TI=typeof AbortController<"u"?AbortController:function(){var s=[],r=this.signal={aborted:!1,addEventListener:function(o,c){s.push(c)}};this.abort=function(){r.aborted=!0,s.forEach(function(o){return o()})}},SI=n.unstable_scheduleCallback,bI=n.unstable_NormalPriority,Kt={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gp(){return{controller:new TI,data:new Map,refCount:0}}function Ic(s){s.refCount--,s.refCount===0&&SI(bI,function(){s.controller.abort()})}var Nc=null,Wp=0,$o=0,Yo=null;function AI(s,r){if(Nc===null){var o=Nc=[];Wp=0,$o=Zm(),Yo={status:"pending",value:void 0,then:function(c){o.push(c)}}}return Wp++,r.then(dE,dE),r}function dE(){if(--Wp===0&&Nc!==null){Yo!==null&&(Yo.status="fulfilled");var s=Nc;Nc=null,$o=0,Yo=null;for(var r=0;r<s.length;r++)(0,s[r])()}}function wI(s,r){var o=[],c={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return s.then(function(){c.status="fulfilled",c.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(c.status="rejected",c.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),c}var pE=I.S;I.S=function(s,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&AI(s,r),pE!==null&&pE(s,r)};var za=ye(null);function Kp(){var s=za.current;return s!==null?s:dt.pooledCache}function $h(s,r){r===null?Re(za,za.current):Re(za,r.pool)}function mE(){var s=Kp();return s===null?null:{parent:Kt._currentValue,pool:s}}var Rr=0,Ve=null,lt=null,jt=null,Yh=!1,Qo=!1,Ha=!1,Qh=0,xc=0,Xo=null,CI=0;function Mt(){throw Error(i(321))}function $p(s,r){if(r===null)return!1;for(var o=0;o<r.length&&o<s.length;o++)if(!Yn(s[o],r[o]))return!1;return!0}function Yp(s,r,o,c,f,g){return Rr=g,Ve=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,I.H=s===null||s.memoizedState===null?qa:Ir,Ha=!1,g=o(c,f),Ha=!1,Qo&&(g=_E(r,o,c,f)),gE(s),g}function gE(s){I.H=ts;var r=lt!==null&&lt.next!==null;if(Rr=0,jt=lt=Ve=null,Yh=!1,xc=0,Xo=null,r)throw Error(i(300));s===null||nn||(s=s.dependencies,s!==null&&af(s)&&(nn=!0))}function _E(s,r,o,c){Ve=s;var f=0;do{if(Qo&&(Xo=null),xc=0,Qo=!1,25<=f)throw Error(i(301));if(f+=1,jt=lt=null,s.updateQueue!=null){var g=s.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}I.H=Ga,g=r(o,c)}while(Qo);return g}function RI(){var s=I.H,r=s.useState()[0];return r=typeof r.then=="function"?Oc(r):r,s=s.useState()[0],(lt!==null?lt.memoizedState:null)!==s&&(Ve.flags|=1024),r}function Qp(){var s=Qh!==0;return Qh=0,s}function Xp(s,r,o){r.updateQueue=s.updateQueue,r.flags&=-2053,s.lanes&=~o}function Zp(s){if(Yh){for(s=s.memoizedState;s!==null;){var r=s.queue;r!==null&&(r.pending=null),s=s.next}Yh=!1}Rr=0,jt=lt=Ve=null,Qo=!1,xc=Qh=0,Xo=null}function Hn(){var s={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?Ve.memoizedState=jt=s:jt=jt.next=s,jt}function Bt(){if(lt===null){var s=Ve.alternate;s=s!==null?s.memoizedState:null}else s=lt.next;var r=jt===null?Ve.memoizedState:jt.next;if(r!==null)jt=r,lt=s;else{if(s===null)throw Ve.alternate===null?Error(i(467)):Error(i(310));lt=s,s={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},jt===null?Ve.memoizedState=jt=s:jt=jt.next=s}return jt}var Xh;Xh=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Oc(s){var r=xc;return xc+=1,Xo===null&&(Xo=[]),s=aE(Xo,s,r),r=Ve,(jt===null?r.memoizedState:jt.next)===null&&(r=r.alternate,I.H=r===null||r.memoizedState===null?qa:Ir),s}function Zh(s){if(s!==null&&typeof s=="object"){if(typeof s.then=="function")return Oc(s);if(s.$$typeof===k)return En(s)}throw Error(i(438,String(s)))}function Jp(s){var r=null,o=Ve.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var c=Ve.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(r={data:c.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Xh(),Ve.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(s),c=0;c<s;c++)o[c]=z;return r.index++,o}function ks(s,r){return typeof r=="function"?r(s):r}function Jh(s){var r=Bt();return em(r,lt,s)}function em(s,r,o){var c=s.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=o;var f=s.baseQueue,g=c.pending;if(g!==null){if(f!==null){var T=f.next;f.next=g.next,g.next=T}r.baseQueue=f=g,c.pending=null}if(g=s.baseState,f===null)s.memoizedState=g;else{r=f.next;var w=T=null,O=null,j=r,te=!1;do{var ae=j.lane&-536870913;if(ae!==j.lane?(Ze&ae)===ae:(Rr&ae)===ae){var $=j.revertLane;if($===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),ae===$o&&(te=!0);else if((Rr&$)===$){j=j.next,$===$o&&(te=!0);continue}else ae={lane:0,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},O===null?(w=O=ae,T=g):O=O.next=ae,Ve.lanes|=$,Ur|=$;ae=j.action,Ha&&o(g,ae),g=j.hasEagerState?j.eagerState:o(g,ae)}else $={lane:ae,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},O===null?(w=O=$,T=g):O=O.next=$,Ve.lanes|=ae,Ur|=ae;j=j.next}while(j!==null&&j!==r);if(O===null?T=g:O.next=w,!Yn(g,s.memoizedState)&&(nn=!0,te&&(o=Yo,o!==null)))throw o;s.memoizedState=g,s.baseState=T,s.baseQueue=O,c.lastRenderedState=g}return f===null&&(c.lanes=0),[s.memoizedState,c.dispatch]}function tm(s){var r=Bt(),o=r.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=s;var c=o.dispatch,f=o.pending,g=r.memoizedState;if(f!==null){o.pending=null;var T=f=f.next;do g=s(g,T.action),T=T.next;while(T!==f);Yn(g,r.memoizedState)||(nn=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),o.lastRenderedState=g}return[g,c]}function yE(s,r,o){var c=Ve,f=Bt(),g=it;if(g){if(o===void 0)throw Error(i(407));o=o()}else o=r();var T=!Yn((lt||f).memoizedState,o);if(T&&(f.memoizedState=o,nn=!0),f=f.queue,sm(TE.bind(null,c,f,s),[s]),f.getSnapshot!==r||T||jt!==null&&jt.memoizedState.tag&1){if(c.flags|=2048,Zo(9,EE.bind(null,c,f,o,r),{destroy:void 0},null),dt===null)throw Error(i(349));g||(Rr&60)!==0||vE(c,r,o)}return o}function vE(s,r,o){s.flags|=16384,s={getSnapshot:r,value:o},r=Ve.updateQueue,r===null?(r=Xh(),Ve.updateQueue=r,r.stores=[s]):(o=r.stores,o===null?r.stores=[s]:o.push(s))}function EE(s,r,o,c){r.value=o,r.getSnapshot=c,SE(r)&&bE(s)}function TE(s,r,o){return o(function(){SE(r)&&bE(s)})}function SE(s){var r=s.getSnapshot;s=s.value;try{var o=r();return!Yn(s,o)}catch{return!0}}function bE(s){var r=Ar(s,2);r!==null&&Un(r,s,2)}function nm(s){var r=Hn();if(typeof s=="function"){var o=s;if(s=o(),Ha){zi(!0);try{o()}finally{zi(!1)}}}return r.memoizedState=r.baseState=s,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:s},r}function AE(s,r,o,c){return s.baseState=o,em(s,lt,typeof c=="function"?c:ks)}function II(s,r,o,c,f){if(nf(s))throw Error(i(485));if(s=r.action,s!==null){var g={payload:f,action:s,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){g.listeners.push(T)}};I.T!==null?o(!0):g.isTransition=!1,c(g),o=r.pending,o===null?(g.next=r.pending=g,wE(r,g)):(g.next=o.next,r.pending=o.next=g)}}function wE(s,r){var o=r.action,c=r.payload,f=s.state;if(r.isTransition){var g=I.T,T={};I.T=T;try{var w=o(f,c),O=I.S;O!==null&&O(T,w),CE(s,r,w)}catch(j){im(s,r,j)}finally{I.T=g}}else try{g=o(f,c),CE(s,r,g)}catch(j){im(s,r,j)}}function CE(s,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(c){RE(s,r,c)},function(c){return im(s,r,c)}):RE(s,r,o)}function RE(s,r,o){r.status="fulfilled",r.value=o,IE(r),s.state=o,r=s.pending,r!==null&&(o=r.next,o===r?s.pending=null:(o=o.next,r.next=o,wE(s,o)))}function im(s,r,o){var c=s.pending;if(s.pending=null,c!==null){c=c.next;do r.status="rejected",r.reason=o,IE(r),r=r.next;while(r!==c)}s.action=null}function IE(s){s=s.listeners;for(var r=0;r<s.length;r++)(0,s[r])()}function NE(s,r){return r}function xE(s,r){if(it){var o=dt.formState;if(o!==null){e:{var c=Ve;if(it){if(hn){t:{for(var f=hn,g=Ji;f.nodeType!==8;){if(!g){f=null;break t}if(f=Pi(f.nextSibling),f===null){f=null;break t}}g=f.data,f=g==="F!"||g==="F"?f:null}if(f){hn=Pi(f.nextSibling),c=f.data==="F!";break e}}Ba(c)}c=!1}c&&(r=o[0])}}return o=Hn(),o.memoizedState=o.baseState=r,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:NE,lastRenderedState:r},o.queue=c,o=$E.bind(null,Ve,c),c.dispatch=o,c=nm(!1),g=cm.bind(null,Ve,!1,c.queue),c=Hn(),f={state:r,dispatch:null,action:s,pending:null},c.queue=f,o=II.bind(null,Ve,f,g,o),f.dispatch=o,c.memoizedState=s,[r,o,!1]}function OE(s){var r=Bt();return kE(r,lt,s)}function kE(s,r,o){r=em(s,r,NE)[0],s=Jh(ks)[0],r=typeof r=="object"&&r!==null&&typeof r.then=="function"?Oc(r):r;var c=Bt(),f=c.queue,g=f.dispatch;return o!==c.memoizedState&&(Ve.flags|=2048,Zo(9,NI.bind(null,f,o),{destroy:void 0},null)),[r,g,s]}function NI(s,r){s.action=r}function DE(s){var r=Bt(),o=lt;if(o!==null)return kE(r,o,s);Bt(),r=r.memoizedState,o=Bt();var c=o.queue.dispatch;return o.memoizedState=s,[r,c,!1]}function Zo(s,r,o,c){return s={tag:s,create:r,inst:o,deps:c,next:null},r=Ve.updateQueue,r===null&&(r=Xh(),Ve.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=s.next=s:(c=o.next,o.next=s,s.next=c,r.lastEffect=s),s}function PE(){return Bt().memoizedState}function ef(s,r,o,c){var f=Hn();Ve.flags|=s,f.memoizedState=Zo(1|r,o,{destroy:void 0},c===void 0?null:c)}function tf(s,r,o,c){var f=Bt();c=c===void 0?null:c;var g=f.memoizedState.inst;lt!==null&&c!==null&&$p(c,lt.memoizedState.deps)?f.memoizedState=Zo(r,o,g,c):(Ve.flags|=s,f.memoizedState=Zo(1|r,o,g,c))}function ME(s,r){ef(8390656,8,s,r)}function sm(s,r){tf(2048,8,s,r)}function LE(s,r){return tf(4,2,s,r)}function UE(s,r){return tf(4,4,s,r)}function VE(s,r){if(typeof r=="function"){s=s();var o=r(s);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return s=s(),r.current=s,function(){r.current=null}}function jE(s,r,o){o=o!=null?o.concat([s]):null,tf(4,4,VE.bind(null,r,s),o)}function rm(){}function BE(s,r){var o=Bt();r=r===void 0?null:r;var c=o.memoizedState;return r!==null&&$p(r,c[1])?c[0]:(o.memoizedState=[s,r],s)}function FE(s,r){var o=Bt();r=r===void 0?null:r;var c=o.memoizedState;if(r!==null&&$p(r,c[1]))return c[0];if(c=s(),Ha){zi(!0);try{s()}finally{zi(!1)}}return o.memoizedState=[c,r],c}function am(s,r,o){return o===void 0||(Rr&1073741824)!==0?s.memoizedState=r:(s.memoizedState=o,s=HT(),Ve.lanes|=s,Ur|=s,o)}function zE(s,r,o,c){return Yn(o,r)?o:Ko.current!==null?(s=am(s,o,c),Yn(s,r)||(nn=!0),s):(Rr&42)===0?(nn=!0,s.memoizedState=o):(s=HT(),Ve.lanes|=s,Ur|=s,r)}function HE(s,r,o,c,f){var g=Q.p;Q.p=g!==0&&8>g?g:8;var T=I.T,w={};I.T=w,cm(s,!1,r,o);try{var O=f(),j=I.S;if(j!==null&&j(w,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var te=wI(O,c);kc(s,r,te,Jn(s))}else kc(s,r,c,Jn(s))}catch(ae){kc(s,r,{then:function(){},status:"rejected",reason:ae},Jn())}finally{Q.p=g,I.T=T}}function xI(){}function om(s,r,o,c){if(s.tag!==5)throw Error(i(476));var f=qE(s).queue;HE(s,f,r,oe,o===null?xI:function(){return GE(s),o(c)})}function qE(s){var r=s.memoizedState;if(r!==null)return r;r={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:oe},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:o},next:null},s.memoizedState=r,s=s.alternate,s!==null&&(s.memoizedState=r),r}function GE(s){var r=qE(s).next.queue;kc(s,r,{},Jn())}function lm(){return En(Zc)}function WE(){return Bt().memoizedState}function KE(){return Bt().memoizedState}function OI(s){for(var r=s.return;r!==null;){switch(r.tag){case 24:case 3:var o=Jn();s=Or(o);var c=kr(r,s,o);c!==null&&(Un(c,r,o),Mc(c,r,o)),r={cache:Gp()},s.payload=r;return}r=r.return}}function kI(s,r,o){var c=Jn();o={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},nf(s)?YE(r,o):(o=Vp(s,r,o,c),o!==null&&(Un(o,s,c),QE(o,r,c)))}function $E(s,r,o){var c=Jn();kc(s,r,o,c)}function kc(s,r,o,c){var f={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(nf(s))YE(r,f);else{var g=s.alternate;if(s.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var T=r.lastRenderedState,w=g(T,o);if(f.hasEagerState=!0,f.eagerState=w,Yn(w,T))return jh(s,r,f,0),dt===null&&Vh(),!1}catch{}finally{}if(o=Vp(s,r,f,c),o!==null)return Un(o,s,c),QE(o,r,c),!0}return!1}function cm(s,r,o,c){if(c={lane:2,revertLane:Zm(),action:c,hasEagerState:!1,eagerState:null,next:null},nf(s)){if(r)throw Error(i(479))}else r=Vp(s,o,c,2),r!==null&&Un(r,s,2)}function nf(s){var r=s.alternate;return s===Ve||r!==null&&r===Ve}function YE(s,r){Qo=Yh=!0;var o=s.pending;o===null?r.next=r:(r.next=o.next,o.next=r),s.pending=r}function QE(s,r,o){if((o&4194176)!==0){var c=r.lanes;c&=s.pendingLanes,o|=c,r.lanes=o,pr(s,o)}}var ts={readContext:En,use:Zh,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useLayoutEffect:Mt,useInsertionEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useSyncExternalStore:Mt,useId:Mt};ts.useCacheRefresh=Mt,ts.useMemoCache=Mt,ts.useHostTransitionStatus=Mt,ts.useFormState=Mt,ts.useActionState=Mt,ts.useOptimistic=Mt;var qa={readContext:En,use:Zh,useCallback:function(s,r){return Hn().memoizedState=[s,r===void 0?null:r],s},useContext:En,useEffect:ME,useImperativeHandle:function(s,r,o){o=o!=null?o.concat([s]):null,ef(4194308,4,VE.bind(null,r,s),o)},useLayoutEffect:function(s,r){return ef(4194308,4,s,r)},useInsertionEffect:function(s,r){ef(4,2,s,r)},useMemo:function(s,r){var o=Hn();r=r===void 0?null:r;var c=s();if(Ha){zi(!0);try{s()}finally{zi(!1)}}return o.memoizedState=[c,r],c},useReducer:function(s,r,o){var c=Hn();if(o!==void 0){var f=o(r);if(Ha){zi(!0);try{o(r)}finally{zi(!1)}}}else f=r;return c.memoizedState=c.baseState=f,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:s,lastRenderedState:f},c.queue=s,s=s.dispatch=kI.bind(null,Ve,s),[c.memoizedState,s]},useRef:function(s){var r=Hn();return s={current:s},r.memoizedState=s},useState:function(s){s=nm(s);var r=s.queue,o=$E.bind(null,Ve,r);return r.dispatch=o,[s.memoizedState,o]},useDebugValue:rm,useDeferredValue:function(s,r){var o=Hn();return am(o,s,r)},useTransition:function(){var s=nm(!1);return s=HE.bind(null,Ve,s.queue,!0,!1),Hn().memoizedState=s,[!1,s]},useSyncExternalStore:function(s,r,o){var c=Ve,f=Hn();if(it){if(o===void 0)throw Error(i(407));o=o()}else{if(o=r(),dt===null)throw Error(i(349));(Ze&60)!==0||vE(c,r,o)}f.memoizedState=o;var g={value:o,getSnapshot:r};return f.queue=g,ME(TE.bind(null,c,g,s),[s]),c.flags|=2048,Zo(9,EE.bind(null,c,g,o,r),{destroy:void 0},null),o},useId:function(){var s=Hn(),r=dt.identifierPrefix;if(it){var o=xs,c=Ns;o=(c&~(1<<32-Dn(c)-1)).toString(32)+o,r=":"+r+"R"+o,o=Qh++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=CI++,r=":"+r+"r"+o.toString(32)+":";return s.memoizedState=r},useCacheRefresh:function(){return Hn().memoizedState=OI.bind(null,Ve)}};qa.useMemoCache=Jp,qa.useHostTransitionStatus=lm,qa.useFormState=xE,qa.useActionState=xE,qa.useOptimistic=function(s){var r=Hn();r.memoizedState=r.baseState=s;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=cm.bind(null,Ve,!0,o),o.dispatch=r,[s,r]};var Ir={readContext:En,use:Zh,useCallback:BE,useContext:En,useEffect:sm,useImperativeHandle:jE,useInsertionEffect:LE,useLayoutEffect:UE,useMemo:FE,useReducer:Jh,useRef:PE,useState:function(){return Jh(ks)},useDebugValue:rm,useDeferredValue:function(s,r){var o=Bt();return zE(o,lt.memoizedState,s,r)},useTransition:function(){var s=Jh(ks)[0],r=Bt().memoizedState;return[typeof s=="boolean"?s:Oc(s),r]},useSyncExternalStore:yE,useId:WE};Ir.useCacheRefresh=KE,Ir.useMemoCache=Jp,Ir.useHostTransitionStatus=lm,Ir.useFormState=OE,Ir.useActionState=OE,Ir.useOptimistic=function(s,r){var o=Bt();return AE(o,lt,s,r)};var Ga={readContext:En,use:Zh,useCallback:BE,useContext:En,useEffect:sm,useImperativeHandle:jE,useInsertionEffect:LE,useLayoutEffect:UE,useMemo:FE,useReducer:tm,useRef:PE,useState:function(){return tm(ks)},useDebugValue:rm,useDeferredValue:function(s,r){var o=Bt();return lt===null?am(o,s,r):zE(o,lt.memoizedState,s,r)},useTransition:function(){var s=tm(ks)[0],r=Bt().memoizedState;return[typeof s=="boolean"?s:Oc(s),r]},useSyncExternalStore:yE,useId:WE};Ga.useCacheRefresh=KE,Ga.useMemoCache=Jp,Ga.useHostTransitionStatus=lm,Ga.useFormState=DE,Ga.useActionState=DE,Ga.useOptimistic=function(s,r){var o=Bt();return lt!==null?AE(o,lt,s,r):(o.baseState=s,[s,o.queue.dispatch])};function um(s,r,o,c){r=s.memoizedState,o=o(c,r),o=o==null?r:N({},r,o),s.memoizedState=o,s.lanes===0&&(s.updateQueue.baseState=o)}var hm={isMounted:function(s){return(s=s._reactInternals)?he(s)===s:!1},enqueueSetState:function(s,r,o){s=s._reactInternals;var c=Jn(),f=Or(c);f.payload=r,o!=null&&(f.callback=o),r=kr(s,f,c),r!==null&&(Un(r,s,c),Mc(r,s,c))},enqueueReplaceState:function(s,r,o){s=s._reactInternals;var c=Jn(),f=Or(c);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=kr(s,f,c),r!==null&&(Un(r,s,c),Mc(r,s,c))},enqueueForceUpdate:function(s,r){s=s._reactInternals;var o=Jn(),c=Or(o);c.tag=2,r!=null&&(c.callback=r),r=kr(s,c,o),r!==null&&(Un(r,s,o),Mc(r,s,o))}};function XE(s,r,o,c,f,g,T){return s=s.stateNode,typeof s.shouldComponentUpdate=="function"?s.shouldComponentUpdate(c,g,T):r.prototype&&r.prototype.isPureReactComponent?!vc(o,c)||!vc(f,g):!0}function ZE(s,r,o,c){s=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,c),r.state!==s&&hm.enqueueReplaceState(r,r.state,null)}function Wa(s,r){var o=r;if("ref"in r){o={};for(var c in r)c!=="ref"&&(o[c]=r[c])}if(s=s.defaultProps){o===r&&(o=N({},o));for(var f in s)o[f]===void 0&&(o[f]=s[f])}return o}var sf=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)};function JE(s){sf(s)}function eT(s){console.error(s)}function tT(s){sf(s)}function rf(s,r){try{var o=s.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(c){setTimeout(function(){throw c})}}function nT(s,r,o){try{var c=s.onCaughtError;c(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function fm(s,r,o){return o=Or(o),o.tag=3,o.payload={element:null},o.callback=function(){rf(s,r)},o}function iT(s){return s=Or(s),s.tag=3,s}function sT(s,r,o,c){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var g=c.value;s.payload=function(){return f(g)},s.callback=function(){nT(r,o,c)}}var T=o.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(s.callback=function(){nT(r,o,c),typeof f!="function"&&(Vr===null?Vr=new Set([this]):Vr.add(this));var w=c.stack;this.componentDidCatch(c.value,{componentStack:w!==null?w:""})})}function DI(s,r,o,c,f){if(o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(r=o.alternate,r!==null&&Pc(r,o,f,!0),o=_i.current,o!==null){switch(o.tag){case 13:return es===null?Km():o.alternate===null&&It===0&&(It=3),o.flags&=-257,o.flags|=65536,o.lanes=f,c===zp?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([c]):r.add(c),Ym(s,c,f)),!1;case 22:return o.flags|=65536,c===zp?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([c])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([c]):o.add(c)),Ym(s,c,f)),!1}throw Error(i(435,o.tag))}return Ym(s,c,f),Km(),!1}if(it)return r=_i.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,c!==Fp&&(s=Error(i(422),{cause:c}),bc(pi(s,o)))):(c!==Fp&&(r=Error(i(423),{cause:c}),bc(pi(r,o))),s=s.current.alternate,s.flags|=65536,f&=-f,s.lanes|=f,c=pi(c,o),f=fm(s.stateNode,c,f),Rm(s,f),It!==4&&(It=2)),!1;var g=Error(i(520),{cause:c});if(g=pi(g,o),Hc===null?Hc=[g]:Hc.push(g),It!==4&&(It=2),r===null)return!0;c=pi(c,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,s=f&-f,o.lanes|=s,s=fm(o.stateNode,c,s),Rm(o,s),!1;case 1:if(r=o.type,g=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Vr===null||!Vr.has(g))))return o.flags|=65536,f&=-f,o.lanes|=f,f=iT(f),sT(f,s,o,c),Rm(o,f),!1}o=o.return}while(o!==null);return!1}var rT=Error(i(461)),nn=!1;function fn(s,r,o,c){r.child=s===null?uE(r,null,o,c):Fa(r,s.child,o,c)}function aT(s,r,o,c,f){o=o.render;var g=r.ref;if("ref"in c){var T={};for(var w in c)w!=="ref"&&(T[w]=c[w])}else T=c;return $a(r),c=Yp(s,r,o,T,g,f),w=Qp(),s!==null&&!nn?(Xp(s,r,f),Ds(s,r,f)):(it&&w&&jp(r),r.flags|=1,fn(s,r,c,f),r.child)}function oT(s,r,o,c,f){if(s===null){var g=o.type;return typeof g=="function"&&!Mm(g)&&g.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=g,lT(s,r,g,c,f)):(s=uf(o.type,null,c,r,r.mode,f),s.ref=r.ref,s.return=r,r.child=s)}if(g=s.child,!Tm(s,f)){var T=g.memoizedProps;if(o=o.compare,o=o!==null?o:vc,o(T,c)&&s.ref===r.ref)return Ds(s,r,f)}return r.flags|=1,s=Lr(g,c),s.ref=r.ref,s.return=r,r.child=s}function lT(s,r,o,c,f){if(s!==null){var g=s.memoizedProps;if(vc(g,c)&&s.ref===r.ref)if(nn=!1,r.pendingProps=c=g,Tm(s,f))(s.flags&131072)!==0&&(nn=!0);else return r.lanes=s.lanes,Ds(s,r,f)}return dm(s,r,o,c,f)}function cT(s,r,o){var c=r.pendingProps,f=c.children,g=(r.stateNode._pendingVisibility&2)!==0,T=s!==null?s.memoizedState:null;if(Dc(s,r),c.mode==="hidden"||g){if((r.flags&128)!==0){if(c=T!==null?T.baseLanes|o:o,s!==null){for(f=r.child=s.child,g=0;f!==null;)g=g|f.lanes|f.childLanes,f=f.sibling;r.childLanes=g&~c}else r.childLanes=0,r.child=null;return uT(s,r,c,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},s!==null&&$h(r,T!==null?T.cachePool:null),T!==null?hE(r,T):Hp(),fE(r);else return r.lanes=r.childLanes=536870912,uT(s,r,T!==null?T.baseLanes|o:o,o)}else T!==null?($h(r,T.cachePool),hE(r,T),Cr(),r.memoizedState=null):(s!==null&&$h(r,null),Hp(),Cr());return fn(s,r,f,o),r.child}function uT(s,r,o,c){var f=Kp();return f=f===null?null:{parent:Kt._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},s!==null&&$h(r,null),Hp(),fE(r),s!==null&&Pc(s,r,c,!0),null}function Dc(s,r){var o=r.ref;if(o===null)s!==null&&s.ref!==null&&(r.flags|=2097664);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(s===null||s.ref!==o)&&(r.flags|=2097664)}}function dm(s,r,o,c,f){return $a(r),o=Yp(s,r,o,c,void 0,f),c=Qp(),s!==null&&!nn?(Xp(s,r,f),Ds(s,r,f)):(it&&c&&jp(r),r.flags|=1,fn(s,r,o,f),r.child)}function hT(s,r,o,c,f,g){return $a(r),r.updateQueue=null,o=_E(r,c,o,f),gE(s),c=Qp(),s!==null&&!nn?(Xp(s,r,g),Ds(s,r,g)):(it&&c&&jp(r),r.flags|=1,fn(s,r,o,g),r.child)}function fT(s,r,o,c,f){if($a(r),r.stateNode===null){var g=Ho,T=o.contextType;typeof T=="object"&&T!==null&&(g=En(T)),g=new o(c,g),r.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=hm,r.stateNode=g,g._reactInternals=r,g=r.stateNode,g.props=c,g.state=r.memoizedState,g.refs={},wm(r),T=o.contextType,g.context=typeof T=="object"&&T!==null?En(T):Ho,g.state=r.memoizedState,T=o.getDerivedStateFromProps,typeof T=="function"&&(um(r,o,T,c),g.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(T=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),T!==g.state&&hm.enqueueReplaceState(g,g.state,null),Uc(r,c,g,f),Lc(),g.state=r.memoizedState),typeof g.componentDidMount=="function"&&(r.flags|=4194308),c=!0}else if(s===null){g=r.stateNode;var w=r.memoizedProps,O=Wa(o,w);g.props=O;var j=g.context,te=o.contextType;T=Ho,typeof te=="object"&&te!==null&&(T=En(te));var ae=o.getDerivedStateFromProps;te=typeof ae=="function"||typeof g.getSnapshotBeforeUpdate=="function",w=r.pendingProps!==w,te||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w||j!==T)&&ZE(r,g,c,T),xr=!1;var $=r.memoizedState;g.state=$,Uc(r,c,g,f),Lc(),j=r.memoizedState,w||$!==j||xr?(typeof ae=="function"&&(um(r,o,ae,c),j=r.memoizedState),(O=xr||XE(r,o,O,c,$,j,T))?(te||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(r.flags|=4194308)):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=j),g.props=c,g.state=j,g.context=T,c=O):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{g=r.stateNode,Cm(s,r),T=r.memoizedProps,te=Wa(o,T),g.props=te,ae=r.pendingProps,$=g.context,j=o.contextType,O=Ho,typeof j=="object"&&j!==null&&(O=En(j)),w=o.getDerivedStateFromProps,(j=typeof w=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(T!==ae||$!==O)&&ZE(r,g,c,O),xr=!1,$=r.memoizedState,g.state=$,Uc(r,c,g,f),Lc();var ee=r.memoizedState;T!==ae||$!==ee||xr||s!==null&&s.dependencies!==null&&af(s.dependencies)?(typeof w=="function"&&(um(r,o,w,c),ee=r.memoizedState),(te=xr||XE(r,o,te,c,$,ee,O)||s!==null&&s.dependencies!==null&&af(s.dependencies))?(j||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,ee,O),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,ee,O)),typeof g.componentDidUpdate=="function"&&(r.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof g.componentDidUpdate!="function"||T===s.memoizedProps&&$===s.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===s.memoizedProps&&$===s.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=ee),g.props=c,g.state=ee,g.context=O,c=te):(typeof g.componentDidUpdate!="function"||T===s.memoizedProps&&$===s.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===s.memoizedProps&&$===s.memoizedState||(r.flags|=1024),c=!1)}return g=c,Dc(s,r),c=(r.flags&128)!==0,g||c?(g=r.stateNode,o=c&&typeof o.getDerivedStateFromError!="function"?null:g.render(),r.flags|=1,s!==null&&c?(r.child=Fa(r,s.child,null,f),r.child=Fa(r,null,o,f)):fn(s,r,o,f),r.memoizedState=g.state,s=r.child):s=Ds(s,r,f),s}function dT(s,r,o,c){return Sc(),r.flags|=256,fn(s,r,o,c),r.child}var pm={dehydrated:null,treeContext:null,retryLane:0};function mm(s){return{baseLanes:s,cachePool:mE()}}function gm(s,r,o){return s=s!==null?s.childLanes&~o:0,r&&(s|=Ti),s}function pT(s,r,o){var c=r.pendingProps,f=!1,g=(r.flags&128)!==0,T;if((T=g)||(T=s!==null&&s.memoizedState===null?!1:(Wt.current&2)!==0),T&&(f=!0,r.flags&=-129),T=(r.flags&32)!==0,r.flags&=-33,s===null){if(it){if(f?wr(r):Cr(),it){var w=hn,O;if(O=w){e:{for(O=w,w=Ji;O.nodeType!==8;){if(!w){w=null;break e}if(O=Pi(O.nextSibling),O===null){w=null;break e}}w=O}w!==null?(r.memoizedState={dehydrated:w,treeContext:Va!==null?{id:Ns,overflow:xs}:null,retryLane:536870912},O=Ei(18,null,null,0),O.stateNode=w,O.return=r,r.child=O,Ln=r,hn=null,O=!0):O=!1}O||Ba(r)}if(w=r.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return w.data==="$!"?r.lanes=16:r.lanes=536870912,null;Os(r)}return w=c.children,c=c.fallback,f?(Cr(),f=r.mode,w=ym({mode:"hidden",children:w},f),c=Qa(c,f,o,null),w.return=r,c.return=r,w.sibling=c,r.child=w,f=r.child,f.memoizedState=mm(o),f.childLanes=gm(s,T,o),r.memoizedState=pm,c):(wr(r),_m(r,w))}if(O=s.memoizedState,O!==null&&(w=O.dehydrated,w!==null)){if(g)r.flags&256?(wr(r),r.flags&=-257,r=vm(s,r,o)):r.memoizedState!==null?(Cr(),r.child=s.child,r.flags|=128,r=null):(Cr(),f=c.fallback,w=r.mode,c=ym({mode:"visible",children:c.children},w),f=Qa(f,w,o,null),f.flags|=2,c.return=r,f.return=r,c.sibling=f,r.child=c,Fa(r,s.child,null,o),c=r.child,c.memoizedState=mm(o),c.childLanes=gm(s,T,o),r.memoizedState=pm,r=f);else if(wr(r),w.data==="$!"){if(T=w.nextSibling&&w.nextSibling.dataset,T)var j=T.dgst;T=j,c=Error(i(419)),c.stack="",c.digest=T,bc({value:c,source:null,stack:null}),r=vm(s,r,o)}else if(nn||Pc(s,r,o,!1),T=(o&s.childLanes)!==0,nn||T){if(T=dt,T!==null){if(c=o&-o,(c&42)!==0)c=1;else switch(c){case 2:c=1;break;case 8:c=4;break;case 32:c=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:c=64;break;case 268435456:c=134217728;break;default:c=0}if(c=(c&(T.suspendedLanes|o))!==0?0:c,c!==0&&c!==O.retryLane)throw O.retryLane=c,Ar(s,c),Un(T,s,c),rT}w.data==="$?"||Km(),r=vm(s,r,o)}else w.data==="$?"?(r.flags|=128,r.child=s.child,r=$I.bind(null,s),w._reactRetry=r,r=null):(s=O.treeContext,hn=Pi(w.nextSibling),Ln=r,it=!0,ki=null,Ji=!1,s!==null&&(mi[gi++]=Ns,mi[gi++]=xs,mi[gi++]=Va,Ns=s.id,xs=s.overflow,Va=r),r=_m(r,c.children),r.flags|=4096);return r}return f?(Cr(),f=c.fallback,w=r.mode,O=s.child,j=O.sibling,c=Lr(O,{mode:"hidden",children:c.children}),c.subtreeFlags=O.subtreeFlags&31457280,j!==null?f=Lr(j,f):(f=Qa(f,w,o,null),f.flags|=2),f.return=r,c.return=r,c.sibling=f,r.child=c,c=f,f=r.child,w=s.child.memoizedState,w===null?w=mm(o):(O=w.cachePool,O!==null?(j=Kt._currentValue,O=O.parent!==j?{parent:j,pool:j}:O):O=mE(),w={baseLanes:w.baseLanes|o,cachePool:O}),f.memoizedState=w,f.childLanes=gm(s,T,o),r.memoizedState=pm,c):(wr(r),o=s.child,s=o.sibling,o=Lr(o,{mode:"visible",children:c.children}),o.return=r,o.sibling=null,s!==null&&(T=r.deletions,T===null?(r.deletions=[s],r.flags|=16):T.push(s)),r.child=o,r.memoizedState=null,o)}function _m(s,r){return r=ym({mode:"visible",children:r},s.mode),r.return=s,s.child=r}function ym(s,r){return BT(s,r,0,null)}function vm(s,r,o){return Fa(r,s.child,null,o),s=_m(r,r.pendingProps.children),s.flags|=2,r.memoizedState=null,s}function mT(s,r,o){s.lanes|=r;var c=s.alternate;c!==null&&(c.lanes|=r),bm(s.return,r,o)}function Em(s,r,o,c,f){var g=s.memoizedState;g===null?s.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=o,g.tailMode=f)}function gT(s,r,o){var c=r.pendingProps,f=c.revealOrder,g=c.tail;if(fn(s,r,c.children,o),c=Wt.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(s!==null&&(s.flags&128)!==0)e:for(s=r.child;s!==null;){if(s.tag===13)s.memoizedState!==null&&mT(s,o,r);else if(s.tag===19)mT(s,o,r);else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}c&=1}switch(Re(Wt,c),f){case"forwards":for(o=r.child,f=null;o!==null;)s=o.alternate,s!==null&&Kh(s)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),Em(r,!1,f,o,g);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(s=f.alternate,s!==null&&Kh(s)===null){r.child=f;break}s=f.sibling,f.sibling=o,o=f,f=s}Em(r,!0,o,null,g);break;case"together":Em(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ds(s,r,o){if(s!==null&&(r.dependencies=s.dependencies),Ur|=r.lanes,(o&r.childLanes)===0)if(s!==null){if(Pc(s,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(s!==null&&r.child!==s.child)throw Error(i(153));if(r.child!==null){for(s=r.child,o=Lr(s,s.pendingProps),r.child=o,o.return=r;s.sibling!==null;)s=s.sibling,o=o.sibling=Lr(s,s.pendingProps),o.return=r;o.sibling=null}return r.child}function Tm(s,r){return(s.lanes&r)!==0?!0:(s=s.dependencies,!!(s!==null&&af(s)))}function PI(s,r,o){switch(r.tag){case 3:ri(r,r.stateNode.containerInfo),Nr(r,Kt,s.memoizedState.cache),Sc();break;case 27:case 5:Fi(r);break;case 4:ri(r,r.stateNode.containerInfo);break;case 10:Nr(r,r.type,r.memoizedProps.value);break;case 13:var c=r.memoizedState;if(c!==null)return c.dehydrated!==null?(wr(r),r.flags|=128,null):(o&r.child.childLanes)!==0?pT(s,r,o):(wr(r),s=Ds(s,r,o),s!==null?s.sibling:null);wr(r);break;case 19:var f=(s.flags&128)!==0;if(c=(o&r.childLanes)!==0,c||(Pc(s,r,o,!1),c=(o&r.childLanes)!==0),f){if(c)return gT(s,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Re(Wt,Wt.current),c)break;return null;case 22:case 23:return r.lanes=0,cT(s,r,o);case 24:Nr(r,Kt,s.memoizedState.cache)}return Ds(s,r,o)}function _T(s,r,o){if(s!==null)if(s.memoizedProps!==r.pendingProps)nn=!0;else{if(!Tm(s,o)&&(r.flags&128)===0)return nn=!1,PI(s,r,o);nn=(s.flags&131072)!==0}else nn=!1,it&&(r.flags&1048576)!==0&&tE(r,zh,r.index);switch(r.lanes=0,r.tag){case 16:e:{s=r.pendingProps;var c=r.elementType,f=c._init;if(c=f(c._payload),r.type=c,typeof c=="function")Mm(c)?(s=Wa(c,s),r.tag=1,r=fT(null,r,c,s,o)):(r.tag=0,r=dm(null,r,c,s,o));else{if(c!=null){if(f=c.$$typeof,f===M){r.tag=11,r=aT(null,r,c,s,o);break e}else if(f===F){r.tag=14,r=oT(null,r,c,s,o);break e}}throw r=R(c)||c,Error(i(306,r,""))}}return r;case 0:return dm(s,r,r.type,r.pendingProps,o);case 1:return c=r.type,f=Wa(c,r.pendingProps),fT(s,r,c,f,o);case 3:e:{if(ri(r,r.stateNode.containerInfo),s===null)throw Error(i(387));var g=r.pendingProps;f=r.memoizedState,c=f.element,Cm(s,r),Uc(r,g,null,o);var T=r.memoizedState;if(g=T.cache,Nr(r,Kt,g),g!==f.cache&&Am(r,[Kt],o,!0),Lc(),g=T.element,f.isDehydrated)if(f={element:g,isDehydrated:!1,cache:T.cache},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){r=dT(s,r,g,o);break e}else if(g!==c){c=pi(Error(i(424)),r),bc(c),r=dT(s,r,g,o);break e}else for(hn=Pi(r.stateNode.containerInfo.firstChild),Ln=r,it=!0,ki=null,Ji=!0,o=uE(r,null,g,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Sc(),g===c){r=Ds(s,r,o);break e}fn(s,r,g,o)}r=r.child}return r;case 26:return Dc(s,r),s===null?(o=E0(r.type,null,r.pendingProps,null))?r.memoizedState=o:it||(o=r.type,s=r.pendingProps,c=Sf(Zt.current).createElement(o),c[Jt]=r,c[Ht]=s,dn(c,o,s),Et(c),r.stateNode=c):r.memoizedState=E0(r.type,s.memoizedProps,r.pendingProps,s.memoizedState),null;case 27:return Fi(r),s===null&&it&&(c=r.stateNode=_0(r.type,r.pendingProps,Zt.current),Ln=r,Ji=!0,hn=Pi(c.firstChild)),c=r.pendingProps.children,s!==null||it?fn(s,r,c,o):r.child=Fa(r,null,c,o),Dc(s,r),r.child;case 5:return s===null&&it&&((f=c=hn)&&(c=uN(c,r.type,r.pendingProps,Ji),c!==null?(r.stateNode=c,Ln=r,hn=Pi(c.firstChild),Ji=!1,f=!0):f=!1),f||Ba(r)),Fi(r),f=r.type,g=r.pendingProps,T=s!==null?s.memoizedProps:null,c=g.children,og(f,g)?c=null:T!==null&&og(f,T)&&(r.flags|=32),r.memoizedState!==null&&(f=Yp(s,r,RI,null,null,o),Zc._currentValue=f),Dc(s,r),fn(s,r,c,o),r.child;case 6:return s===null&&it&&((s=o=hn)&&(o=hN(o,r.pendingProps,Ji),o!==null?(r.stateNode=o,Ln=r,hn=null,s=!0):s=!1),s||Ba(r)),null;case 13:return pT(s,r,o);case 4:return ri(r,r.stateNode.containerInfo),c=r.pendingProps,s===null?r.child=Fa(r,null,c,o):fn(s,r,c,o),r.child;case 11:return aT(s,r,r.type,r.pendingProps,o);case 7:return fn(s,r,r.pendingProps,o),r.child;case 8:return fn(s,r,r.pendingProps.children,o),r.child;case 12:return fn(s,r,r.pendingProps.children,o),r.child;case 10:return c=r.pendingProps,Nr(r,r.type,c.value),fn(s,r,c.children,o),r.child;case 9:return f=r.type._context,c=r.pendingProps.children,$a(r),f=En(f),c=c(f),r.flags|=1,fn(s,r,c,o),r.child;case 14:return oT(s,r,r.type,r.pendingProps,o);case 15:return lT(s,r,r.type,r.pendingProps,o);case 19:return gT(s,r,o);case 22:return cT(s,r,o);case 24:return $a(r),c=En(Kt),s===null?(f=Kp(),f===null&&(f=dt,g=Gp(),f.pooledCache=g,g.refCount++,g!==null&&(f.pooledCacheLanes|=o),f=g),r.memoizedState={parent:c,cache:f},wm(r),Nr(r,Kt,f)):((s.lanes&o)!==0&&(Cm(s,r),Uc(r,null,null,o),Lc()),f=s.memoizedState,g=r.memoizedState,f.parent!==c?(f={parent:c,cache:c},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),Nr(r,Kt,c)):(c=g.cache,Nr(r,Kt,c),c!==f.cache&&Am(r,[Kt],o,!0))),fn(s,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(i(156,r.tag))}var Sm=ye(null),Ka=null,Ps=null;function Nr(s,r,o){Re(Sm,r._currentValue),r._currentValue=o}function Ms(s){s._currentValue=Sm.current,pe(Sm)}function bm(s,r,o){for(;s!==null;){var c=s.alternate;if((s.childLanes&r)!==r?(s.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),s===o)break;s=s.return}}function Am(s,r,o,c){var f=s.child;for(f!==null&&(f.return=s);f!==null;){var g=f.dependencies;if(g!==null){var T=f.child;g=g.firstContext;e:for(;g!==null;){var w=g;g=f;for(var O=0;O<r.length;O++)if(w.context===r[O]){g.lanes|=o,w=g.alternate,w!==null&&(w.lanes|=o),bm(g.return,o,s),c||(T=null);break e}g=w.next}}else if(f.tag===18){if(T=f.return,T===null)throw Error(i(341));T.lanes|=o,g=T.alternate,g!==null&&(g.lanes|=o),bm(T,o,s),T=null}else T=f.child;if(T!==null)T.return=f;else for(T=f;T!==null;){if(T===s){T=null;break}if(f=T.sibling,f!==null){f.return=T.return,T=f;break}T=T.return}f=T}}function Pc(s,r,o,c){s=null;for(var f=r,g=!1;f!==null;){if(!g){if((f.flags&524288)!==0)g=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var T=f.alternate;if(T===null)throw Error(i(387));if(T=T.memoizedProps,T!==null){var w=f.type;Yn(f.pendingProps.value,T.value)||(s!==null?s.push(w):s=[w])}}else if(f===kn.current){if(T=f.alternate,T===null)throw Error(i(387));T.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(s!==null?s.push(Zc):s=[Zc])}f=f.return}s!==null&&Am(r,s,o,c),r.flags|=262144}function af(s){for(s=s.firstContext;s!==null;){if(!Yn(s.context._currentValue,s.memoizedValue))return!0;s=s.next}return!1}function $a(s){Ka=s,Ps=null,s=s.dependencies,s!==null&&(s.firstContext=null)}function En(s){return yT(Ka,s)}function of(s,r){return Ka===null&&$a(s),yT(s,r)}function yT(s,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},Ps===null){if(s===null)throw Error(i(308));Ps=r,s.dependencies={lanes:0,firstContext:r},s.flags|=524288}else Ps=Ps.next=r;return o}var xr=!1;function wm(s){s.updateQueue={baseState:s.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cm(s,r){s=s.updateQueue,r.updateQueue===s&&(r.updateQueue={baseState:s.baseState,firstBaseUpdate:s.firstBaseUpdate,lastBaseUpdate:s.lastBaseUpdate,shared:s.shared,callbacks:null})}function Or(s){return{lane:s,tag:0,payload:null,callback:null,next:null}}function kr(s,r,o){var c=s.updateQueue;if(c===null)return null;if(c=c.shared,(St&2)!==0){var f=c.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),c.pending=r,r=Bh(s),Jv(s,null,o),r}return jh(s,c,r,o),Bh(s)}function Mc(s,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194176)!==0)){var c=r.lanes;c&=s.pendingLanes,o|=c,r.lanes=o,pr(s,o)}}function Rm(s,r){var o=s.updateQueue,c=s.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var T={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};g===null?f=g=T:g=g.next=T,o=o.next}while(o!==null);g===null?f=g=r:g=g.next=r}else f=g=r;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},s.updateQueue=o;return}s=o.lastBaseUpdate,s===null?o.firstBaseUpdate=r:s.next=r,o.lastBaseUpdate=r}var Im=!1;function Lc(){if(Im){var s=Yo;if(s!==null)throw s}}function Uc(s,r,o,c){Im=!1;var f=s.updateQueue;xr=!1;var g=f.firstBaseUpdate,T=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var O=w,j=O.next;O.next=null,T===null?g=j:T.next=j,T=O;var te=s.alternate;te!==null&&(te=te.updateQueue,w=te.lastBaseUpdate,w!==T&&(w===null?te.firstBaseUpdate=j:w.next=j,te.lastBaseUpdate=O))}if(g!==null){var ae=f.baseState;T=0,te=j=O=null,w=g;do{var $=w.lane&-536870913,ee=$!==w.lane;if(ee?(Ze&$)===$:(c&$)===$){$!==0&&$===$o&&(Im=!0),te!==null&&(te=te.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Ae=s,Me=w;$=r;var Nt=o;switch(Me.tag){case 1:if(Ae=Me.payload,typeof Ae=="function"){ae=Ae.call(Nt,ae,$);break e}ae=Ae;break e;case 3:Ae.flags=Ae.flags&-65537|128;case 0:if(Ae=Me.payload,$=typeof Ae=="function"?Ae.call(Nt,ae,$):Ae,$==null)break e;ae=N({},ae,$);break e;case 2:xr=!0}}$=w.callback,$!==null&&(s.flags|=64,ee&&(s.flags|=8192),ee=f.callbacks,ee===null?f.callbacks=[$]:ee.push($))}else ee={lane:$,tag:w.tag,payload:w.payload,callback:w.callback,next:null},te===null?(j=te=ee,O=ae):te=te.next=ee,T|=$;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;ee=w,w=ee.next,ee.next=null,f.lastBaseUpdate=ee,f.shared.pending=null}}while(!0);te===null&&(O=ae),f.baseState=O,f.firstBaseUpdate=j,f.lastBaseUpdate=te,g===null&&(f.shared.lanes=0),Ur|=T,s.lanes=T,s.memoizedState=ae}}function vT(s,r){if(typeof s!="function")throw Error(i(191,s));s.call(r)}function ET(s,r){var o=s.callbacks;if(o!==null)for(s.callbacks=null,s=0;s<o.length;s++)vT(o[s],r)}function Vc(s,r){try{var o=r.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&s)===s){c=void 0;var g=o.create,T=o.inst;c=g(),T.destroy=c}o=o.next}while(o!==f)}}catch(w){ht(r,r.return,w)}}function Dr(s,r,o){try{var c=r.updateQueue,f=c!==null?c.lastEffect:null;if(f!==null){var g=f.next;c=g;do{if((c.tag&s)===s){var T=c.inst,w=T.destroy;if(w!==void 0){T.destroy=void 0,f=r;var O=o;try{w()}catch(j){ht(f,O,j)}}}c=c.next}while(c!==g)}}catch(j){ht(r,r.return,j)}}function TT(s){var r=s.updateQueue;if(r!==null){var o=s.stateNode;try{ET(r,o)}catch(c){ht(s,s.return,c)}}}function ST(s,r,o){o.props=Wa(s.type,s.memoizedProps),o.state=s.memoizedState;try{o.componentWillUnmount()}catch(c){ht(s,r,c)}}function Ya(s,r){try{var o=s.ref;if(o!==null){var c=s.stateNode;switch(s.tag){case 26:case 27:case 5:var f=c;break;default:f=c}typeof o=="function"?s.refCleanup=o(f):o.current=f}}catch(g){ht(s,r,g)}}function Qn(s,r){var o=s.ref,c=s.refCleanup;if(o!==null)if(typeof c=="function")try{c()}catch(f){ht(s,r,f)}finally{s.refCleanup=null,s=s.alternate,s!=null&&(s.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){ht(s,r,f)}else o.current=null}function bT(s){var r=s.type,o=s.memoizedProps,c=s.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&c.focus();break e;case"img":o.src?c.src=o.src:o.srcSet&&(c.srcset=o.srcSet)}}catch(f){ht(s,s.return,f)}}function AT(s,r,o){try{var c=s.stateNode;rN(c,s.type,o,r),c[Ht]=r}catch(f){ht(s,s.return,f)}}function wT(s){return s.tag===5||s.tag===3||s.tag===26||s.tag===27||s.tag===4}function Nm(s){e:for(;;){for(;s.sibling===null;){if(s.return===null||wT(s.return))return null;s=s.return}for(s.sibling.return=s.return,s=s.sibling;s.tag!==5&&s.tag!==6&&s.tag!==27&&s.tag!==18;){if(s.flags&2||s.child===null||s.tag===4)continue e;s.child.return=s,s=s.child}if(!(s.flags&2))return s.stateNode}}function xm(s,r,o){var c=s.tag;if(c===5||c===6)s=s.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(s,r):o.insertBefore(s,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(s,o)):(r=o,r.appendChild(s)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Tf));else if(c!==4&&c!==27&&(s=s.child,s!==null))for(xm(s,r,o),s=s.sibling;s!==null;)xm(s,r,o),s=s.sibling}function lf(s,r,o){var c=s.tag;if(c===5||c===6)s=s.stateNode,r?o.insertBefore(s,r):o.appendChild(s);else if(c!==4&&c!==27&&(s=s.child,s!==null))for(lf(s,r,o),s=s.sibling;s!==null;)lf(s,r,o),s=s.sibling}var Ls=!1,Rt=!1,Om=!1,CT=typeof WeakSet=="function"?WeakSet:Set,sn=null,RT=!1;function MI(s,r){if(s=s.containerInfo,rg=If,s=qv(s),Dp(s)){if("selectionStart"in s)var o={start:s.selectionStart,end:s.selectionEnd};else e:{o=(o=s.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var T=0,w=-1,O=-1,j=0,te=0,ae=s,$=null;t:for(;;){for(var ee;ae!==o||f!==0&&ae.nodeType!==3||(w=T+f),ae!==g||c!==0&&ae.nodeType!==3||(O=T+c),ae.nodeType===3&&(T+=ae.nodeValue.length),(ee=ae.firstChild)!==null;)$=ae,ae=ee;for(;;){if(ae===s)break t;if($===o&&++j===f&&(w=T),$===g&&++te===c&&(O=T),(ee=ae.nextSibling)!==null)break;ae=$,$=ae.parentNode}ae=ee}o=w===-1||O===-1?null:{start:w,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(ag={focusedElem:s,selectionRange:o},If=!1,sn=r;sn!==null;)if(r=sn,s=r.child,(r.subtreeFlags&1028)!==0&&s!==null)s.return=r,sn=s;else for(;sn!==null;){switch(r=sn,g=r.alternate,s=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((s&1024)!==0&&g!==null){s=void 0,o=r,f=g.memoizedProps,g=g.memoizedState,c=o.stateNode;try{var Ae=Wa(o.type,f,o.elementType===o.type);s=c.getSnapshotBeforeUpdate(Ae,g),c.__reactInternalSnapshotBeforeUpdate=s}catch(Me){ht(o,o.return,Me)}}break;case 3:if((s&1024)!==0){if(s=r.stateNode.containerInfo,o=s.nodeType,o===9)ug(s);else if(o===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":ug(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((s&1024)!==0)throw Error(i(163))}if(s=r.sibling,s!==null){s.return=r.return,sn=s;break}sn=r.return}return Ae=RT,RT=!1,Ae}function IT(s,r,o){var c=o.flags;switch(o.tag){case 0:case 11:case 15:Vs(s,o),c&4&&Vc(5,o);break;case 1:if(Vs(s,o),c&4)if(s=o.stateNode,r===null)try{s.componentDidMount()}catch(w){ht(o,o.return,w)}else{var f=Wa(o.type,r.memoizedProps);r=r.memoizedState;try{s.componentDidUpdate(f,r,s.__reactInternalSnapshotBeforeUpdate)}catch(w){ht(o,o.return,w)}}c&64&&TT(o),c&512&&Ya(o,o.return);break;case 3:if(Vs(s,o),c&64&&(c=o.updateQueue,c!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{ET(c,s)}catch(w){ht(o,o.return,w)}}break;case 26:Vs(s,o),c&512&&Ya(o,o.return);break;case 27:case 5:Vs(s,o),r===null&&c&4&&bT(o),c&512&&Ya(o,o.return);break;case 12:Vs(s,o);break;case 13:Vs(s,o),c&4&&OT(s,o);break;case 22:if(f=o.memoizedState!==null||Ls,!f){r=r!==null&&r.memoizedState!==null||Rt;var g=Ls,T=Rt;Ls=f,(Rt=r)&&!T?Pr(s,o,(o.subtreeFlags&8772)!==0):Vs(s,o),Ls=g,Rt=T}c&512&&(o.memoizedProps.mode==="manual"?Ya(o,o.return):Qn(o,o.return));break;default:Vs(s,o)}}function NT(s){var r=s.alternate;r!==null&&(s.alternate=null,NT(r)),s.child=null,s.deletions=null,s.sibling=null,s.tag===5&&(r=s.stateNode,r!==null&&wa(r)),s.stateNode=null,s.return=null,s.dependencies=null,s.memoizedProps=null,s.memoizedState=null,s.pendingProps=null,s.stateNode=null,s.updateQueue=null}var Ft=null,Xn=!1;function Us(s,r,o){for(o=o.child;o!==null;)xT(s,r,o),o=o.sibling}function xT(s,r,o){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(cr,o)}catch{}switch(o.tag){case 26:Rt||Qn(o,r),Us(s,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Rt||Qn(o,r);var c=Ft,f=Xn;for(Ft=o.stateNode,Us(s,r,o),o=o.stateNode,r=o.attributes;r.length;)o.removeAttributeNode(r[0]);wa(o),Ft=c,Xn=f;break;case 5:Rt||Qn(o,r);case 6:f=Ft;var g=Xn;if(Ft=null,Us(s,r,o),Ft=f,Xn=g,Ft!==null)if(Xn)try{s=Ft,c=o.stateNode,s.nodeType===8?s.parentNode.removeChild(c):s.removeChild(c)}catch(T){ht(o,r,T)}else try{Ft.removeChild(o.stateNode)}catch(T){ht(o,r,T)}break;case 18:Ft!==null&&(Xn?(r=Ft,o=o.stateNode,r.nodeType===8?cg(r.parentNode,o):r.nodeType===1&&cg(r,o),nu(r)):cg(Ft,o.stateNode));break;case 4:c=Ft,f=Xn,Ft=o.stateNode.containerInfo,Xn=!0,Us(s,r,o),Ft=c,Xn=f;break;case 0:case 11:case 14:case 15:Rt||Dr(2,o,r),Rt||Dr(4,o,r),Us(s,r,o);break;case 1:Rt||(Qn(o,r),c=o.stateNode,typeof c.componentWillUnmount=="function"&&ST(o,r,c)),Us(s,r,o);break;case 21:Us(s,r,o);break;case 22:Rt||Qn(o,r),Rt=(c=Rt)||o.memoizedState!==null,Us(s,r,o),Rt=c;break;default:Us(s,r,o)}}function OT(s,r){if(r.memoizedState===null&&(s=r.alternate,s!==null&&(s=s.memoizedState,s!==null&&(s=s.dehydrated,s!==null))))try{nu(s)}catch(o){ht(r,r.return,o)}}function LI(s){switch(s.tag){case 13:case 19:var r=s.stateNode;return r===null&&(r=s.stateNode=new CT),r;case 22:return s=s.stateNode,r=s._retryCache,r===null&&(r=s._retryCache=new CT),r;default:throw Error(i(435,s.tag))}}function km(s,r){var o=LI(s);r.forEach(function(c){var f=YI.bind(null,s,c);o.has(c)||(o.add(c),c.then(f,f))})}function yi(s,r){var o=r.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c],g=s,T=r,w=T;e:for(;w!==null;){switch(w.tag){case 27:case 5:Ft=w.stateNode,Xn=!1;break e;case 3:Ft=w.stateNode.containerInfo,Xn=!0;break e;case 4:Ft=w.stateNode.containerInfo,Xn=!0;break e}w=w.return}if(Ft===null)throw Error(i(160));xT(g,T,f),Ft=null,Xn=!1,g=f.alternate,g!==null&&(g.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)kT(r,s),r=r.sibling}var Di=null;function kT(s,r){var o=s.alternate,c=s.flags;switch(s.tag){case 0:case 11:case 14:case 15:yi(r,s),vi(s),c&4&&(Dr(3,s,s.return),Vc(3,s),Dr(5,s,s.return));break;case 1:yi(r,s),vi(s),c&512&&(Rt||o===null||Qn(o,o.return)),c&64&&Ls&&(s=s.updateQueue,s!==null&&(c=s.callbacks,c!==null&&(o=s.shared.hiddenCallbacks,s.shared.hiddenCallbacks=o===null?c:o.concat(c))));break;case 26:var f=Di;if(yi(r,s),vi(s),c&512&&(Rt||o===null||Qn(o,o.return)),c&4){var g=o!==null?o.memoizedState:null;if(c=s.memoizedState,o===null)if(c===null)if(s.stateNode===null){e:{c=s.type,o=s.memoizedProps,f=f.ownerDocument||f;t:switch(c){case"title":g=f.getElementsByTagName("title")[0],(!g||g[gr]||g[Jt]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=f.createElement(c),f.head.insertBefore(g,f.querySelector("head > title"))),dn(g,c,o),g[Jt]=s,Et(g),c=g;break e;case"link":var T=b0("link","href",f).get(c+(o.href||""));if(T){for(var w=0;w<T.length;w++)if(g=T[w],g.getAttribute("href")===(o.href==null?null:o.href)&&g.getAttribute("rel")===(o.rel==null?null:o.rel)&&g.getAttribute("title")===(o.title==null?null:o.title)&&g.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){T.splice(w,1);break t}}g=f.createElement(c),dn(g,c,o),f.head.appendChild(g);break;case"meta":if(T=b0("meta","content",f).get(c+(o.content||""))){for(w=0;w<T.length;w++)if(g=T[w],g.getAttribute("content")===(o.content==null?null:""+o.content)&&g.getAttribute("name")===(o.name==null?null:o.name)&&g.getAttribute("property")===(o.property==null?null:o.property)&&g.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&g.getAttribute("charset")===(o.charSet==null?null:o.charSet)){T.splice(w,1);break t}}g=f.createElement(c),dn(g,c,o),f.head.appendChild(g);break;default:throw Error(i(468,c))}g[Jt]=s,Et(g),c=g}s.stateNode=c}else A0(f,s.type,s.stateNode);else s.stateNode=S0(f,c,s.memoizedProps);else g!==c?(g===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):g.count--,c===null?A0(f,s.type,s.stateNode):S0(f,c,s.memoizedProps)):c===null&&s.stateNode!==null&&AT(s,s.memoizedProps,o.memoizedProps)}break;case 27:if(c&4&&s.alternate===null){f=s.stateNode,g=s.memoizedProps;try{for(var O=f.firstChild;O;){var j=O.nextSibling,te=O.nodeName;O[gr]||te==="HEAD"||te==="BODY"||te==="SCRIPT"||te==="STYLE"||te==="LINK"&&O.rel.toLowerCase()==="stylesheet"||f.removeChild(O),O=j}for(var ae=s.type,$=f.attributes;$.length;)f.removeAttributeNode($[0]);dn(f,ae,g),f[Jt]=s,f[Ht]=g}catch(Ae){ht(s,s.return,Ae)}}case 5:if(yi(r,s),vi(s),c&512&&(Rt||o===null||Qn(o,o.return)),s.flags&32){f=s.stateNode;try{ci(f,"")}catch(Ae){ht(s,s.return,Ae)}}c&4&&s.stateNode!=null&&(f=s.memoizedProps,AT(s,f,o!==null?o.memoizedProps:f)),c&1024&&(Om=!0);break;case 6:if(yi(r,s),vi(s),c&4){if(s.stateNode===null)throw Error(i(162));c=s.memoizedProps,o=s.stateNode;try{o.nodeValue=c}catch(Ae){ht(s,s.return,Ae)}}break;case 3:if(wf=null,f=Di,Di=bf(r.containerInfo),yi(r,s),Di=f,vi(s),c&4&&o!==null&&o.memoizedState.isDehydrated)try{nu(r.containerInfo)}catch(Ae){ht(s,s.return,Ae)}Om&&(Om=!1,DT(s));break;case 4:c=Di,Di=bf(s.stateNode.containerInfo),yi(r,s),vi(s),Di=c;break;case 12:yi(r,s),vi(s);break;case 13:yi(r,s),vi(s),s.child.flags&8192&&s.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Fm=cn()),c&4&&(c=s.updateQueue,c!==null&&(s.updateQueue=null,km(s,c)));break;case 22:if(c&512&&(Rt||o===null||Qn(o,o.return)),O=s.memoizedState!==null,j=o!==null&&o.memoizedState!==null,te=Ls,ae=Rt,Ls=te||O,Rt=ae||j,yi(r,s),Rt=ae,Ls=te,vi(s),r=s.stateNode,r._current=s,r._visibility&=-3,r._visibility|=r._pendingVisibility&2,c&8192&&(r._visibility=O?r._visibility&-2:r._visibility|1,O&&(r=Ls||Rt,o===null||j||r||Jo(s)),s.memoizedProps===null||s.memoizedProps.mode!=="manual"))e:for(o=null,r=s;;){if(r.tag===5||r.tag===26||r.tag===27){if(o===null){j=o=r;try{if(f=j.stateNode,O)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=j.stateNode,w=j.memoizedProps.style;var ee=w!=null&&w.hasOwnProperty("display")?w.display:null;T.style.display=ee==null||typeof ee=="boolean"?"":(""+ee).trim()}}catch(Ae){ht(j,j.return,Ae)}}}else if(r.tag===6){if(o===null){j=r;try{j.stateNode.nodeValue=O?"":j.memoizedProps}catch(Ae){ht(j,j.return,Ae)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===s)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}c&4&&(c=s.updateQueue,c!==null&&(o=c.retryQueue,o!==null&&(c.retryQueue=null,km(s,o))));break;case 19:yi(r,s),vi(s),c&4&&(c=s.updateQueue,c!==null&&(s.updateQueue=null,km(s,c)));break;case 21:break;default:yi(r,s),vi(s)}}function vi(s){var r=s.flags;if(r&2){try{if(s.tag!==27){e:{for(var o=s.return;o!==null;){if(wT(o)){var c=o;break e}o=o.return}throw Error(i(160))}switch(c.tag){case 27:var f=c.stateNode,g=Nm(s);lf(s,g,f);break;case 5:var T=c.stateNode;c.flags&32&&(ci(T,""),c.flags&=-33);var w=Nm(s);lf(s,w,T);break;case 3:case 4:var O=c.stateNode.containerInfo,j=Nm(s);xm(s,j,O);break;default:throw Error(i(161))}}}catch(te){ht(s,s.return,te)}s.flags&=-3}r&4096&&(s.flags&=-4097)}function DT(s){if(s.subtreeFlags&1024)for(s=s.child;s!==null;){var r=s;DT(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),s=s.sibling}}function Vs(s,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)IT(s,r.alternate,r),r=r.sibling}function Jo(s){for(s=s.child;s!==null;){var r=s;switch(r.tag){case 0:case 11:case 14:case 15:Dr(4,r,r.return),Jo(r);break;case 1:Qn(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&ST(r,r.return,o),Jo(r);break;case 26:case 27:case 5:Qn(r,r.return),Jo(r);break;case 22:Qn(r,r.return),r.memoizedState===null&&Jo(r);break;default:Jo(r)}s=s.sibling}}function Pr(s,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var c=r.alternate,f=s,g=r,T=g.flags;switch(g.tag){case 0:case 11:case 15:Pr(f,g,o),Vc(4,g);break;case 1:if(Pr(f,g,o),c=g,f=c.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(j){ht(c,c.return,j)}if(c=g,f=c.updateQueue,f!==null){var w=c.stateNode;try{var O=f.shared.hiddenCallbacks;if(O!==null)for(f.shared.hiddenCallbacks=null,f=0;f<O.length;f++)vT(O[f],w)}catch(j){ht(c,c.return,j)}}o&&T&64&&TT(g),Ya(g,g.return);break;case 26:case 27:case 5:Pr(f,g,o),o&&c===null&&T&4&&bT(g),Ya(g,g.return);break;case 12:Pr(f,g,o);break;case 13:Pr(f,g,o),o&&T&4&&OT(f,g);break;case 22:g.memoizedState===null&&Pr(f,g,o),Ya(g,g.return);break;default:Pr(f,g,o)}r=r.sibling}}function Dm(s,r){var o=null;s!==null&&s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(o=s.memoizedState.cachePool.pool),s=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(s=r.memoizedState.cachePool.pool),s!==o&&(s!=null&&s.refCount++,o!=null&&Ic(o))}function Pm(s,r){s=null,r.alternate!==null&&(s=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==s&&(r.refCount++,s!=null&&Ic(s))}function Mr(s,r,o,c){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)PT(s,r,o,c),r=r.sibling}function PT(s,r,o,c){var f=r.flags;switch(r.tag){case 0:case 11:case 15:Mr(s,r,o,c),f&2048&&Vc(9,r);break;case 3:Mr(s,r,o,c),f&2048&&(s=null,r.alternate!==null&&(s=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==s&&(r.refCount++,s!=null&&Ic(s)));break;case 12:if(f&2048){Mr(s,r,o,c),s=r.stateNode;try{var g=r.memoizedProps,T=g.id,w=g.onPostCommit;typeof w=="function"&&w(T,r.alternate===null?"mount":"update",s.passiveEffectDuration,-0)}catch(O){ht(r,r.return,O)}}else Mr(s,r,o,c);break;case 23:break;case 22:g=r.stateNode,r.memoizedState!==null?g._visibility&4?Mr(s,r,o,c):jc(s,r):g._visibility&4?Mr(s,r,o,c):(g._visibility|=4,el(s,r,o,c,(r.subtreeFlags&10256)!==0)),f&2048&&Dm(r.alternate,r);break;case 24:Mr(s,r,o,c),f&2048&&Pm(r.alternate,r);break;default:Mr(s,r,o,c)}}function el(s,r,o,c,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var g=s,T=r,w=o,O=c,j=T.flags;switch(T.tag){case 0:case 11:case 15:el(g,T,w,O,f),Vc(8,T);break;case 23:break;case 22:var te=T.stateNode;T.memoizedState!==null?te._visibility&4?el(g,T,w,O,f):jc(g,T):(te._visibility|=4,el(g,T,w,O,f)),f&&j&2048&&Dm(T.alternate,T);break;case 24:el(g,T,w,O,f),f&&j&2048&&Pm(T.alternate,T);break;default:el(g,T,w,O,f)}r=r.sibling}}function jc(s,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=s,c=r,f=c.flags;switch(c.tag){case 22:jc(o,c),f&2048&&Dm(c.alternate,c);break;case 24:jc(o,c),f&2048&&Pm(c.alternate,c);break;default:jc(o,c)}r=r.sibling}}var Bc=8192;function tl(s){if(s.subtreeFlags&Bc)for(s=s.child;s!==null;)MT(s),s=s.sibling}function MT(s){switch(s.tag){case 26:tl(s),s.flags&Bc&&s.memoizedState!==null&&AN(Di,s.memoizedState,s.memoizedProps);break;case 5:tl(s);break;case 3:case 4:var r=Di;Di=bf(s.stateNode.containerInfo),tl(s),Di=r;break;case 22:s.memoizedState===null&&(r=s.alternate,r!==null&&r.memoizedState!==null?(r=Bc,Bc=16777216,tl(s),Bc=r):tl(s));break;default:tl(s)}}function LT(s){var r=s.alternate;if(r!==null&&(s=r.child,s!==null)){r.child=null;do r=s.sibling,s.sibling=null,s=r;while(s!==null)}}function Fc(s){var r=s.deletions;if((s.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var c=r[o];sn=c,VT(c,s)}LT(s)}if(s.subtreeFlags&10256)for(s=s.child;s!==null;)UT(s),s=s.sibling}function UT(s){switch(s.tag){case 0:case 11:case 15:Fc(s),s.flags&2048&&Dr(9,s,s.return);break;case 3:Fc(s);break;case 12:Fc(s);break;case 22:var r=s.stateNode;s.memoizedState!==null&&r._visibility&4&&(s.return===null||s.return.tag!==13)?(r._visibility&=-5,cf(s)):Fc(s);break;default:Fc(s)}}function cf(s){var r=s.deletions;if((s.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var c=r[o];sn=c,VT(c,s)}LT(s)}for(s=s.child;s!==null;){switch(r=s,r.tag){case 0:case 11:case 15:Dr(8,r,r.return),cf(r);break;case 22:o=r.stateNode,o._visibility&4&&(o._visibility&=-5,cf(r));break;default:cf(r)}s=s.sibling}}function VT(s,r){for(;sn!==null;){var o=sn;switch(o.tag){case 0:case 11:case 15:Dr(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var c=o.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Ic(o.memoizedState.cache)}if(c=o.child,c!==null)c.return=o,sn=c;else e:for(o=s;sn!==null;){c=sn;var f=c.sibling,g=c.return;if(NT(c),c===o){sn=null;break e}if(f!==null){f.return=g,sn=f;break e}sn=g}}}function UI(s,r,o,c){this.tag=s,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ei(s,r,o,c){return new UI(s,r,o,c)}function Mm(s){return s=s.prototype,!(!s||!s.isReactComponent)}function Lr(s,r){var o=s.alternate;return o===null?(o=Ei(s.tag,r,s.key,s.mode),o.elementType=s.elementType,o.type=s.type,o.stateNode=s.stateNode,o.alternate=s,s.alternate=o):(o.pendingProps=r,o.type=s.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=s.flags&31457280,o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,r=s.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=s.sibling,o.index=s.index,o.ref=s.ref,o.refCleanup=s.refCleanup,o}function jT(s,r){s.flags&=31457282;var o=s.alternate;return o===null?(s.childLanes=0,s.lanes=r,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,r=o.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),s}function uf(s,r,o,c,f,g){var T=0;if(c=s,typeof s=="function")Mm(s)&&(T=1);else if(typeof s=="string")T=SN(s,o,wt.current)?26:s==="html"||s==="head"||s==="body"?27:5;else e:switch(s){case p:return Qa(o.children,f,g,r);case m:T=8,f|=24;break;case v:return s=Ei(12,o,r,f|2),s.elementType=v,s.lanes=g,s;case W:return s=Ei(13,o,r,f),s.elementType=W,s.lanes=g,s;case V:return s=Ei(19,o,r,f),s.elementType=V,s.lanes=g,s;case K:return BT(o,f,g,r);default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case S:case k:T=10;break e;case b:T=9;break e;case M:T=11;break e;case F:T=14;break e;case B:T=16,c=null;break e}T=29,o=Error(i(130,s===null?"null":typeof s,"")),c=null}return r=Ei(T,o,r,f),r.elementType=s,r.type=c,r.lanes=g,r}function Qa(s,r,o,c){return s=Ei(7,s,c,r),s.lanes=o,s}function BT(s,r,o,c){s=Ei(22,s,c,r),s.elementType=K,s.lanes=o;var f={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var g=f._current;if(g===null)throw Error(i(456));if((f._pendingVisibility&2)===0){var T=Ar(g,2);T!==null&&(f._pendingVisibility|=2,Un(T,g,2))}},attach:function(){var g=f._current;if(g===null)throw Error(i(456));if((f._pendingVisibility&2)!==0){var T=Ar(g,2);T!==null&&(f._pendingVisibility&=-3,Un(T,g,2))}}};return s.stateNode=f,s}function Lm(s,r,o){return s=Ei(6,s,null,r),s.lanes=o,s}function Um(s,r,o){return r=Ei(4,s.children!==null?s.children:[],s.key,r),r.lanes=o,r.stateNode={containerInfo:s.containerInfo,pendingChildren:null,implementation:s.implementation},r}function js(s){s.flags|=4}function FT(s,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)s.flags&=-16777217;else if(s.flags|=16777216,!w0(r)){if(r=_i.current,r!==null&&((Ze&4194176)===Ze?es!==null:(Ze&62914560)!==Ze&&(Ze&536870912)===0||r!==es))throw wc=zp,sE;s.flags|=8192}}function hf(s,r){r!==null&&(s.flags|=4),s.flags&16384&&(r=s.tag!==22?fr():536870912,s.lanes|=r,il|=r)}function zc(s,r){if(!it)switch(s.tailMode){case"hidden":r=s.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?s.tail=null:o.sibling=null;break;case"collapsed":o=s.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?r||s.tail===null?s.tail=null:s.tail.sibling=null:c.sibling=null}}function Tt(s){var r=s.alternate!==null&&s.alternate.child===s.child,o=0,c=0;if(r)for(var f=s.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&31457280,c|=f.flags&31457280,f.return=s,f=f.sibling;else for(f=s.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=s,f=f.sibling;return s.subtreeFlags|=c,s.childLanes=o,r}function VI(s,r,o){var c=r.pendingProps;switch(Bp(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(r),null;case 1:return Tt(r),null;case 3:return o=r.stateNode,c=null,s!==null&&(c=s.memoizedState.cache),r.memoizedState.cache!==c&&(r.flags|=2048),Ms(Kt),Fn(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(s===null||s.child===null)&&(Tc(r)?js(r):s===null||s.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,ki!==null&&(Gm(ki),ki=null))),Tt(r),null;case 26:return o=r.memoizedState,s===null?(js(r),o!==null?(Tt(r),FT(r,o)):(Tt(r),r.flags&=-16777217)):o?o!==s.memoizedState?(js(r),Tt(r),FT(r,o)):(Tt(r),r.flags&=-16777217):(s.memoizedProps!==c&&js(r),Tt(r),r.flags&=-16777217),null;case 27:X(r),o=Zt.current;var f=r.type;if(s!==null&&r.stateNode!=null)s.memoizedProps!==c&&js(r);else{if(!c){if(r.stateNode===null)throw Error(i(166));return Tt(r),null}s=wt.current,Tc(r)?nE(r):(s=_0(f,c,o),r.stateNode=s,js(r))}return Tt(r),null;case 5:if(X(r),o=r.type,s!==null&&r.stateNode!=null)s.memoizedProps!==c&&js(r);else{if(!c){if(r.stateNode===null)throw Error(i(166));return Tt(r),null}if(s=wt.current,Tc(r))nE(r);else{switch(f=Sf(Zt.current),s){case 1:s=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:s=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":s=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":s=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":s=f.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof c.is=="string"?f.createElement("select",{is:c.is}):f.createElement("select"),c.multiple?s.multiple=!0:c.size&&(s.size=c.size);break;default:s=typeof c.is=="string"?f.createElement(o,{is:c.is}):f.createElement(o)}}s[Jt]=r,s[Ht]=c;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)s.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=s;e:switch(dn(s,o,c),o){case"button":case"input":case"select":case"textarea":s=!!c.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&js(r)}}return Tt(r),r.flags&=-16777217,null;case 6:if(s&&r.stateNode!=null)s.memoizedProps!==c&&js(r);else{if(typeof c!="string"&&r.stateNode===null)throw Error(i(166));if(s=Zt.current,Tc(r)){if(s=r.stateNode,o=r.memoizedProps,c=null,f=Ln,f!==null)switch(f.tag){case 27:case 5:c=f.memoizedProps}s[Jt]=r,s=!!(s.nodeValue===o||c!==null&&c.suppressHydrationWarning===!0||h0(s.nodeValue,o)),s||Ba(r)}else s=Sf(s).createTextNode(c),s[Jt]=r,r.stateNode=s}return Tt(r),null;case 13:if(c=r.memoizedState,s===null||s.memoizedState!==null&&s.memoizedState.dehydrated!==null){if(f=Tc(r),c!==null&&c.dehydrated!==null){if(s===null){if(!f)throw Error(i(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[Jt]=r}else Sc(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Tt(r),f=!1}else ki!==null&&(Gm(ki),ki=null),f=!0;if(!f)return r.flags&256?(Os(r),r):(Os(r),null)}if(Os(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=c!==null,s=s!==null&&s.memoizedState!==null,o){c=r.child,f=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(f=c.alternate.memoizedState.cachePool.pool);var g=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==f&&(c.flags|=2048)}return o!==s&&o&&(r.child.flags|=8192),hf(r,r.updateQueue),Tt(r),null;case 4:return Fn(),s===null&&ng(r.stateNode.containerInfo),Tt(r),null;case 10:return Ms(r.type),Tt(r),null;case 19:if(pe(Wt),f=r.memoizedState,f===null)return Tt(r),null;if(c=(r.flags&128)!==0,g=f.rendering,g===null)if(c)zc(f,!1);else{if(It!==0||s!==null&&(s.flags&128)!==0)for(s=r.child;s!==null;){if(g=Kh(s),g!==null){for(r.flags|=128,zc(f,!1),s=g.updateQueue,r.updateQueue=s,hf(r,s),r.subtreeFlags=0,s=o,o=r.child;o!==null;)jT(o,s),o=o.sibling;return Re(Wt,Wt.current&1|2),r.child}s=s.sibling}f.tail!==null&&cn()>ff&&(r.flags|=128,c=!0,zc(f,!1),r.lanes=4194304)}else{if(!c)if(s=Kh(g),s!==null){if(r.flags|=128,c=!0,s=s.updateQueue,r.updateQueue=s,hf(r,s),zc(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!it)return Tt(r),null}else 2*cn()-f.renderingStartTime>ff&&o!==536870912&&(r.flags|=128,c=!0,zc(f,!1),r.lanes=4194304);f.isBackwards?(g.sibling=r.child,r.child=g):(s=f.last,s!==null?s.sibling=g:r.child=g,f.last=g)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=cn(),r.sibling=null,s=Wt.current,Re(Wt,c?s&1|2:s&1),r):(Tt(r),null);case 22:case 23:return Os(r),qp(),c=r.memoizedState!==null,s!==null?s.memoizedState!==null!==c&&(r.flags|=8192):c&&(r.flags|=8192),c?(o&536870912)!==0&&(r.flags&128)===0&&(Tt(r),r.subtreeFlags&6&&(r.flags|=8192)):Tt(r),o=r.updateQueue,o!==null&&hf(r,o.retryQueue),o=null,s!==null&&s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(o=s.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==o&&(r.flags|=2048),s!==null&&pe(za),null;case 24:return o=null,s!==null&&(o=s.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),Ms(Kt),Tt(r),null;case 25:return null}throw Error(i(156,r.tag))}function jI(s,r){switch(Bp(r),r.tag){case 1:return s=r.flags,s&65536?(r.flags=s&-65537|128,r):null;case 3:return Ms(Kt),Fn(),s=r.flags,(s&65536)!==0&&(s&128)===0?(r.flags=s&-65537|128,r):null;case 26:case 27:case 5:return X(r),null;case 13:if(Os(r),s=r.memoizedState,s!==null&&s.dehydrated!==null){if(r.alternate===null)throw Error(i(340));Sc()}return s=r.flags,s&65536?(r.flags=s&-65537|128,r):null;case 19:return pe(Wt),null;case 4:return Fn(),null;case 10:return Ms(r.type),null;case 22:case 23:return Os(r),qp(),s!==null&&pe(za),s=r.flags,s&65536?(r.flags=s&-65537|128,r):null;case 24:return Ms(Kt),null;case 25:return null;default:return null}}function zT(s,r){switch(Bp(r),r.tag){case 3:Ms(Kt),Fn();break;case 26:case 27:case 5:X(r);break;case 4:Fn();break;case 13:Os(r);break;case 19:pe(Wt);break;case 10:Ms(r.type);break;case 22:case 23:Os(r),qp(),s!==null&&pe(za);break;case 24:Ms(Kt)}}var BI={getCacheForType:function(s){var r=En(Kt),o=r.data.get(s);return o===void 0&&(o=s(),r.data.set(s,o)),o}},FI=typeof WeakMap=="function"?WeakMap:Map,St=0,dt=null,ze=null,Ze=0,pt=0,Zn=null,Bs=!1,nl=!1,Vm=!1,Fs=0,It=0,Ur=0,Xa=0,jm=0,Ti=0,il=0,Hc=null,ns=null,Bm=!1,Fm=0,ff=1/0,df=null,Vr=null,pf=!1,Za=null,qc=0,zm=0,Hm=null,Gc=0,qm=null;function Jn(){if((St&2)!==0&&Ze!==0)return Ze&-Ze;if(I.T!==null){var s=$o;return s!==0?s:Zm()}return vh()}function HT(){Ti===0&&(Ti=(Ze&536870912)===0||it?ic():536870912);var s=_i.current;return s!==null&&(s.flags|=32),Ti}function Un(s,r,o){(s===dt&&pt===2||s.cancelPendingCommit!==null)&&(sl(s,0),zs(s,Ze,Ti,!1)),Pt(s,o),((St&2)===0||s!==dt)&&(s===dt&&((St&2)===0&&(Xa|=o),It===4&&zs(s,Ze,Ti,!1)),is(s))}function qT(s,r,o){if((St&6)!==0)throw Error(i(327));var c=!o&&(r&60)===0&&(r&s.expiredLanes)===0||hr(s,r),f=c?qI(s,r):$m(s,r,!0),g=c;do{if(f===0){nl&&!c&&zs(s,r,0,!1);break}else if(f===6)zs(s,r,0,!Bs);else{if(o=s.current.alternate,g&&!zI(o)){f=$m(s,r,!1),g=!1;continue}if(f===2){if(g=r,s.errorRecoveryDisabledLanes&g)var T=0;else T=s.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){r=T;e:{var w=s;f=Hc;var O=w.current.memoizedState.isDehydrated;if(O&&(sl(w,T).flags|=256),T=$m(w,T,!1),T!==2){if(Vm&&!O){w.errorRecoveryDisabledLanes|=g,Xa|=g,f=4;break e}g=ns,ns=f,g!==null&&Gm(g)}f=T}if(g=!1,f!==2)continue}}if(f===1){sl(s,0),zs(s,r,0,!0);break}e:{switch(c=s,f){case 0:case 1:throw Error(i(345));case 4:if((r&4194176)===r){zs(c,r,Ti,!Bs);break e}break;case 2:ns=null;break;case 3:case 5:break;default:throw Error(i(329))}if(c.finishedWork=o,c.finishedLanes=r,(r&62914560)===r&&(g=Fm+300-cn(),10<g)){if(zs(c,r,Ti,!Bs),oi(c,0)!==0)break e;c.timeoutHandle=p0(GT.bind(null,c,o,ns,df,Bm,r,Ti,Xa,il,Bs,2,-0,0),g);break e}GT(c,o,ns,df,Bm,r,Ti,Xa,il,Bs,0,-0,0)}}break}while(!0);is(s)}function Gm(s){ns===null?ns=s:ns.push.apply(ns,s)}function GT(s,r,o,c,f,g,T,w,O,j,te,ae,$){var ee=r.subtreeFlags;if((ee&8192||(ee&16785408)===16785408)&&(Xc={stylesheets:null,count:0,unsuspend:bN},MT(r),r=wN(),r!==null)){s.cancelPendingCommit=r(ZT.bind(null,s,o,c,f,T,w,O,1,ae,$)),zs(s,g,T,!j);return}ZT(s,o,c,f,T,w,O,te,ae,$)}function zI(s){for(var r=s;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var c=0;c<o.length;c++){var f=o[c],g=f.getSnapshot;f=f.value;try{if(!Yn(g(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===s)break;for(;r.sibling===null;){if(r.return===null||r.return===s)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function zs(s,r,o,c){r&=~jm,r&=~Xa,s.suspendedLanes|=r,s.pingedLanes&=~r,c&&(s.warmLanes|=r),c=s.expirationTimes;for(var f=r;0<f;){var g=31-Dn(f),T=1<<g;c[g]=-1,f&=~T}o!==0&&dr(s,o,r)}function mf(){return(St&6)===0?(Wc(0),!1):!0}function Wm(){if(ze!==null){if(pt===0)var s=ze.return;else s=ze,Ps=Ka=null,Zp(s),Wo=null,Cc=0,s=ze;for(;s!==null;)zT(s.alternate,s),s=s.return;ze=null}}function sl(s,r){s.finishedWork=null,s.finishedLanes=0;var o=s.timeoutHandle;o!==-1&&(s.timeoutHandle=-1,oN(o)),o=s.cancelPendingCommit,o!==null&&(s.cancelPendingCommit=null,o()),Wm(),dt=s,ze=o=Lr(s.current,null),Ze=r,pt=0,Zn=null,Bs=!1,nl=hr(s,r),Vm=!1,il=Ti=jm=Xa=Ur=It=0,ns=Hc=null,Bm=!1,(r&8)!==0&&(r|=r&32);var c=s.entangledLanes;if(c!==0)for(s=s.entanglements,c&=r;0<c;){var f=31-Dn(c),g=1<<f;r|=s[f],c&=~g}return Fs=r,Vh(),o}function WT(s,r){Ve=null,I.H=ts,r===Ac?(r=oE(),pt=3):r===sE?(r=oE(),pt=4):pt=r===rT?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Zn=r,ze===null&&(It=1,rf(s,pi(r,s.current)))}function KT(){var s=I.H;return I.H=ts,s===null?ts:s}function $T(){var s=I.A;return I.A=BI,s}function Km(){It=4,Bs||(Ze&4194176)!==Ze&&_i.current!==null||(nl=!0),(Ur&134217727)===0&&(Xa&134217727)===0||dt===null||zs(dt,Ze,Ti,!1)}function $m(s,r,o){var c=St;St|=2;var f=KT(),g=$T();(dt!==s||Ze!==r)&&(df=null,sl(s,r)),r=!1;var T=It;e:do try{if(pt!==0&&ze!==null){var w=ze,O=Zn;switch(pt){case 8:Wm(),T=6;break e;case 3:case 2:case 6:_i.current===null&&(r=!0);var j=pt;if(pt=0,Zn=null,rl(s,w,O,j),o&&nl){T=0;break e}break;default:j=pt,pt=0,Zn=null,rl(s,w,O,j)}}HI(),T=It;break}catch(te){WT(s,te)}while(!0);return r&&s.shellSuspendCounter++,Ps=Ka=null,St=c,I.H=f,I.A=g,ze===null&&(dt=null,Ze=0,Vh()),T}function HI(){for(;ze!==null;)YT(ze)}function qI(s,r){var o=St;St|=2;var c=KT(),f=$T();dt!==s||Ze!==r?(df=null,ff=cn()+500,sl(s,r)):nl=hr(s,r);e:do try{if(pt!==0&&ze!==null){r=ze;var g=Zn;t:switch(pt){case 1:pt=0,Zn=null,rl(s,r,g,1);break;case 2:if(rE(g)){pt=0,Zn=null,QT(r);break}r=function(){pt===2&&dt===s&&(pt=7),is(s)},g.then(r,r);break e;case 3:pt=7;break e;case 4:pt=5;break e;case 7:rE(g)?(pt=0,Zn=null,QT(r)):(pt=0,Zn=null,rl(s,r,g,7));break;case 5:var T=null;switch(ze.tag){case 26:T=ze.memoizedState;case 5:case 27:var w=ze;if(!T||w0(T)){pt=0,Zn=null;var O=w.sibling;if(O!==null)ze=O;else{var j=w.return;j!==null?(ze=j,gf(j)):ze=null}break t}}pt=0,Zn=null,rl(s,r,g,5);break;case 6:pt=0,Zn=null,rl(s,r,g,6);break;case 8:Wm(),It=6;break e;default:throw Error(i(462))}}GI();break}catch(te){WT(s,te)}while(!0);return Ps=Ka=null,I.H=c,I.A=f,St=o,ze!==null?0:(dt=null,Ze=0,Vh(),It)}function GI(){for(;ze!==null&&!ys();)YT(ze)}function YT(s){var r=_T(s.alternate,s,Fs);s.memoizedProps=s.pendingProps,r===null?gf(s):ze=r}function QT(s){var r=s,o=r.alternate;switch(r.tag){case 15:case 0:r=hT(o,r,r.pendingProps,r.type,void 0,Ze);break;case 11:r=hT(o,r,r.pendingProps,r.type.render,r.ref,Ze);break;case 5:Zp(r);default:zT(o,r),r=ze=jT(r,Fs),r=_T(o,r,Fs)}s.memoizedProps=s.pendingProps,r===null?gf(s):ze=r}function rl(s,r,o,c){Ps=Ka=null,Zp(r),Wo=null,Cc=0;var f=r.return;try{if(DI(s,f,r,o,Ze)){It=1,rf(s,pi(o,s.current)),ze=null;return}}catch(g){if(f!==null)throw ze=f,g;It=1,rf(s,pi(o,s.current)),ze=null;return}r.flags&32768?(it||c===1?s=!0:nl||(Ze&536870912)!==0?s=!1:(Bs=s=!0,(c===2||c===3||c===6)&&(c=_i.current,c!==null&&c.tag===13&&(c.flags|=16384))),XT(r,s)):gf(r)}function gf(s){var r=s;do{if((r.flags&32768)!==0){XT(r,Bs);return}s=r.return;var o=VI(r.alternate,r,Fs);if(o!==null){ze=o;return}if(r=r.sibling,r!==null){ze=r;return}ze=r=s}while(r!==null);It===0&&(It=5)}function XT(s,r){do{var o=jI(s.alternate,s);if(o!==null){o.flags&=32767,ze=o;return}if(o=s.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(s=s.sibling,s!==null)){ze=s;return}ze=s=o}while(s!==null);It=6,ze=null}function ZT(s,r,o,c,f,g,T,w,O,j){var te=I.T,ae=Q.p;try{Q.p=2,I.T=null,WI(s,r,o,c,ae,f,g,T,w,O,j)}finally{I.T=te,Q.p=ae}}function WI(s,r,o,c,f,g,T,w){do al();while(Za!==null);if((St&6)!==0)throw Error(i(327));var O=s.finishedWork;if(c=s.finishedLanes,O===null)return null;if(s.finishedWork=null,s.finishedLanes=0,O===s.current)throw Error(i(177));s.callbackNode=null,s.callbackPriority=0,s.cancelPendingCommit=null;var j=O.lanes|O.childLanes;if(j|=Up,_h(s,c,j,g,T,w),s===dt&&(ze=dt=null,Ze=0),(O.subtreeFlags&10256)===0&&(O.flags&10256)===0||pf||(pf=!0,zm=j,Hm=o,QI(vs,function(){return al(),null})),o=(O.flags&15990)!==0,(O.subtreeFlags&15990)!==0||o?(o=I.T,I.T=null,g=Q.p,Q.p=2,T=St,St|=4,MI(s,O),kT(O,s),gI(ag,s.containerInfo),If=!!rg,ag=rg=null,s.current=O,IT(s,O.alternate,O),ai(),St=T,Q.p=g,I.T=o):s.current=O,pf?(pf=!1,Za=s,qc=c):JT(s,j),j=s.pendingLanes,j===0&&(Vr=null),tc(O.stateNode),is(s),r!==null)for(f=s.onRecoverableError,O=0;O<r.length;O++)j=r[O],f(j.value,{componentStack:j.stack});return(qc&3)!==0&&al(),j=s.pendingLanes,(c&4194218)!==0&&(j&42)!==0?s===qm?Gc++:(Gc=0,qm=s):Gc=0,Wc(0),null}function JT(s,r){(s.pooledCacheLanes&=r)===0&&(r=s.pooledCache,r!=null&&(s.pooledCache=null,Ic(r)))}function al(){if(Za!==null){var s=Za,r=zm;zm=0;var o=yh(qc),c=I.T,f=Q.p;try{if(Q.p=32>o?32:o,I.T=null,Za===null)var g=!1;else{o=Hm,Hm=null;var T=Za,w=qc;if(Za=null,qc=0,(St&6)!==0)throw Error(i(331));var O=St;if(St|=4,UT(T.current),PT(T,T.current,w,o),St=O,Wc(0,!1),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(cr,T)}catch{}g=!0}return g}finally{Q.p=f,I.T=c,JT(s,r)}}return!1}function e0(s,r,o){r=pi(o,r),r=fm(s.stateNode,r,2),s=kr(s,r,2),s!==null&&(Pt(s,2),is(s))}function ht(s,r,o){if(s.tag===3)e0(s,s,o);else for(;r!==null;){if(r.tag===3){e0(r,s,o);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Vr===null||!Vr.has(c))){s=pi(o,s),o=iT(2),c=kr(r,o,2),c!==null&&(sT(o,c,r,s),Pt(c,2),is(c));break}}r=r.return}}function Ym(s,r,o){var c=s.pingCache;if(c===null){c=s.pingCache=new FI;var f=new Set;c.set(r,f)}else f=c.get(r),f===void 0&&(f=new Set,c.set(r,f));f.has(o)||(Vm=!0,f.add(o),s=KI.bind(null,s,r,o),r.then(s,s))}function KI(s,r,o){var c=s.pingCache;c!==null&&c.delete(r),s.pingedLanes|=s.suspendedLanes&o,s.warmLanes&=~o,dt===s&&(Ze&o)===o&&(It===4||It===3&&(Ze&62914560)===Ze&&300>cn()-Fm?(St&2)===0&&sl(s,0):jm|=o,il===Ze&&(il=0)),is(s)}function t0(s,r){r===0&&(r=fr()),s=Ar(s,r),s!==null&&(Pt(s,r),is(s))}function $I(s){var r=s.memoizedState,o=0;r!==null&&(o=r.retryLane),t0(s,o)}function YI(s,r){var o=0;switch(s.tag){case 13:var c=s.stateNode,f=s.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=s.stateNode;break;case 22:c=s.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(r),t0(s,o)}function QI(s,r){return Dt(s,r)}var _f=null,ol=null,Qm=!1,yf=!1,Xm=!1,Ja=0;function is(s){s!==ol&&s.next===null&&(ol===null?_f=ol=s:ol=ol.next=s),yf=!0,Qm||(Qm=!0,ZI(XI))}function Wc(s,r){if(!Xm&&yf){Xm=!0;do for(var o=!1,c=_f;c!==null;){if(s!==0){var f=c.pendingLanes;if(f===0)var g=0;else{var T=c.suspendedLanes,w=c.pingedLanes;g=(1<<31-Dn(42|s)+1)-1,g&=f&~(T&~w),g=g&201326677?g&201326677|1:g?g|2:0}g!==0&&(o=!0,s0(c,g))}else g=Ze,g=oi(c,c===dt?g:0),(g&3)===0||hr(c,g)||(o=!0,s0(c,g));c=c.next}while(o);Xm=!1}}function XI(){yf=Qm=!1;var s=0;Ja!==0&&(aN()&&(s=Ja),Ja=0);for(var r=cn(),o=null,c=_f;c!==null;){var f=c.next,g=n0(c,r);g===0?(c.next=null,o===null?_f=f:o.next=f,f===null&&(ol=o)):(o=c,(s!==0||(g&3)!==0)&&(yf=!0)),c=f}Wc(s)}function n0(s,r){for(var o=s.suspendedLanes,c=s.pingedLanes,f=s.expirationTimes,g=s.pendingLanes&-62914561;0<g;){var T=31-Dn(g),w=1<<T,O=f[T];O===-1?((w&o)===0||(w&c)!==0)&&(f[T]=wo(w,r)):O<=r&&(s.expiredLanes|=w),g&=~w}if(r=dt,o=Ze,o=oi(s,s===r?o:0),c=s.callbackNode,o===0||s===r&&pt===2||s.cancelPendingCommit!==null)return c!==null&&c!==null&&Ut(c),s.callbackNode=null,s.callbackPriority=0;if((o&3)===0||hr(s,o)){if(r=o&-o,r===s.callbackPriority)return r;switch(c!==null&&Ut(c),yh(o)){case 2:case 8:o=Vt;break;case 32:o=vs;break;case 268435456:o=ec;break;default:o=vs}return c=i0.bind(null,s),o=Dt(o,c),s.callbackPriority=r,s.callbackNode=o,r}return c!==null&&c!==null&&Ut(c),s.callbackPriority=2,s.callbackNode=null,2}function i0(s,r){var o=s.callbackNode;if(al()&&s.callbackNode!==o)return null;var c=Ze;return c=oi(s,s===dt?c:0),c===0?null:(qT(s,c,r),n0(s,cn()),s.callbackNode!=null&&s.callbackNode===o?i0.bind(null,s):null)}function s0(s,r){if(al())return null;qT(s,r,!0)}function ZI(s){lN(function(){(St&6)!==0?Dt(vt,s):s()})}function Zm(){return Ja===0&&(Ja=ic()),Ja}function r0(s){return s==null||typeof s=="symbol"||typeof s=="boolean"?null:typeof s=="function"?s:Wi(""+s)}function a0(s,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,s.id&&o.setAttribute("form",s.id),r.parentNode.insertBefore(o,r),s=new FormData(s),o.parentNode.removeChild(o),s}function JI(s,r,o,c,f){if(r==="submit"&&o&&o.stateNode===f){var g=r0((f[Ht]||null).action),T=c.submitter;T&&(r=(r=T[Ht]||null)?r0(r.formAction):T.getAttribute("formAction"),r!==null&&(g=r,T=null));var w=new ko("action","action",null,c,f);s.push({event:w,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Ja!==0){var O=T?a0(f,T):new FormData(f);om(o,{pending:!0,data:O,method:f.method,action:g},null,O)}}else typeof g=="function"&&(w.preventDefault(),O=T?a0(f,T):new FormData(f),om(o,{pending:!0,data:O,method:f.method,action:g},g,O))},currentTarget:f}]})}}for(var Jm=0;Jm<Zv.length;Jm++){var eg=Zv[Jm],eN=eg.toLowerCase(),tN=eg[0].toUpperCase()+eg.slice(1);Oi(eN,"on"+tN)}Oi(Kv,"onAnimationEnd"),Oi($v,"onAnimationIteration"),Oi(Yv,"onAnimationStart"),Oi("dblclick","onDoubleClick"),Oi("focusin","onFocus"),Oi("focusout","onBlur"),Oi(yI,"onTransitionRun"),Oi(vI,"onTransitionStart"),Oi(EI,"onTransitionCancel"),Oi(Qv,"onTransitionEnd"),zn("onMouseEnter",["mouseout","mouseover"]),zn("onMouseLeave",["mouseout","mouseover"]),zn("onPointerEnter",["pointerout","pointerover"]),zn("onPointerLeave",["pointerout","pointerover"]),Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nN=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Kc));function o0(s,r){r=(r&4)!==0;for(var o=0;o<s.length;o++){var c=s[o],f=c.event;c=c.listeners;e:{var g=void 0;if(r)for(var T=c.length-1;0<=T;T--){var w=c[T],O=w.instance,j=w.currentTarget;if(w=w.listener,O!==g&&f.isPropagationStopped())break e;g=w,f.currentTarget=j;try{g(f)}catch(te){sf(te)}f.currentTarget=null,g=O}else for(T=0;T<c.length;T++){if(w=c[T],O=w.instance,j=w.currentTarget,w=w.listener,O!==g&&f.isPropagationStopped())break e;g=w,f.currentTarget=j;try{g(f)}catch(te){sf(te)}f.currentTarget=null,g=O}}}}function Ke(s,r){var o=r[Aa];o===void 0&&(o=r[Aa]=new Set);var c=s+"__bubble";o.has(c)||(l0(r,s,2,!1),o.add(c))}function tg(s,r,o){var c=0;r&&(c|=4),l0(o,s,c,r)}var vf="_reactListening"+Math.random().toString(36).slice(2);function ng(s){if(!s[vf]){s[vf]=!0,rc.forEach(function(o){o!=="selectionchange"&&(nN.has(o)||tg(o,!1,s),tg(o,!0,s))});var r=s.nodeType===9?s:s.ownerDocument;r===null||r[vf]||(r[vf]=!0,tg("selectionchange",!1,r))}}function l0(s,r,o,c){switch(O0(r)){case 2:var f=IN;break;case 8:f=NN;break;default:f=mg}o=f.bind(null,r,o,s),f=void 0,!hi||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),c?f!==void 0?s.addEventListener(r,o,{capture:!0,passive:f}):s.addEventListener(r,o,!0):f!==void 0?s.addEventListener(r,o,{passive:f}):s.addEventListener(r,o,!1)}function ig(s,r,o,c,f){var g=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var w=c.stateNode.containerInfo;if(w===f||w.nodeType===8&&w.parentNode===f)break;if(T===4)for(T=c.return;T!==null;){var O=T.tag;if((O===3||O===4)&&(O=T.stateNode.containerInfo,O===f||O.nodeType===8&&O.parentNode===f))return;T=T.return}for(;w!==null;){if(T=xi(w),T===null)return;if(O=T.tag,O===5||O===6||O===26||O===27){c=g=T;continue e}w=w.parentNode}}c=c.return}bh(function(){var j=g,te=Oo(o),ae=[];e:{var $=Xv.get(s);if($!==void 0){var ee=ko,Ae=s;switch(s){case"keypress":if($i(o)===0)break e;case"keydown":case"keyup":ee=Vo;break;case"focusin":Ae="focus",ee=Mo;break;case"focusout":Ae="blur",ee=Mo;break;case"beforeblur":case"afterblur":ee=Mo;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=fi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=Np;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=Oh;break;case Kv:case $v:case Yv:ee=Lo;break;case Qv:ee=Dh;break;case"scroll":case"scrollend":ee=Ah;break;case"wheel":ee=jo;break;case"copy":case"cut":case"paste":ee=Uo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=_c;break;case"toggle":case"beforetoggle":ee=Mh}var Me=(r&4)!==0,Nt=!Me&&(s==="scroll"||s==="scrollend"),H=Me?$!==null?$+"Capture":null:$;Me=[];for(var U=j,G;U!==null;){var ie=U;if(G=ie.stateNode,ie=ie.tag,ie!==5&&ie!==26&&ie!==27||G===null||H===null||(ie=Na(U,H),ie!=null&&Me.push($c(U,ie,G))),Nt)break;U=U.return}0<Me.length&&($=new ee($,Ae,null,o,te),ae.push({event:$,listeners:Me}))}}if((r&7)===0){e:{if($=s==="mouseover"||s==="pointerover",ee=s==="mouseout"||s==="pointerout",$&&o!==ui&&(Ae=o.relatedTarget||o.fromElement)&&(xi(Ae)||Ae[Es]))break e;if((ee||$)&&($=te.window===te?te:($=te.ownerDocument)?$.defaultView||$.parentWindow:window,ee?(Ae=o.relatedTarget||o.toElement,ee=j,Ae=Ae?xi(Ae):null,Ae!==null&&(Nt=he(Ae),Me=Ae.tag,Ae!==Nt||Me!==5&&Me!==27&&Me!==6)&&(Ae=null)):(ee=null,Ae=j),ee!==Ae)){if(Me=fi,ie="onMouseLeave",H="onMouseEnter",U="mouse",(s==="pointerout"||s==="pointerover")&&(Me=_c,ie="onPointerLeave",H="onPointerEnter",U="pointer"),Nt=ee==null?$:_r(ee),G=Ae==null?$:_r(Ae),$=new Me(ie,U+"leave",ee,o,te),$.target=Nt,$.relatedTarget=G,ie=null,xi(te)===j&&(Me=new Me(H,U+"enter",Ae,o,te),Me.target=G,Me.relatedTarget=Nt,ie=Me),Nt=ie,ee&&Ae)t:{for(Me=ee,H=Ae,U=0,G=Me;G;G=ll(G))U++;for(G=0,ie=H;ie;ie=ll(ie))G++;for(;0<U-G;)Me=ll(Me),U--;for(;0<G-U;)H=ll(H),G--;for(;U--;){if(Me===H||H!==null&&Me===H.alternate)break t;Me=ll(Me),H=ll(H)}Me=null}else Me=null;ee!==null&&c0(ae,$,ee,Me,!1),Ae!==null&&Nt!==null&&c0(ae,Nt,Ae,Me,!0)}}e:{if($=j?_r(j):window,ee=$.nodeName&&$.nodeName.toLowerCase(),ee==="select"||ee==="input"&&$.type==="file")var Te=Lv;else if(Gt($))if(Uv)Te=pI;else{Te=fI;var Be=hI}else ee=$.nodeName,!ee||ee.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?j&&uc(j.elementType)&&(Te=Lv):Te=dI;if(Te&&(Te=Te(s,j))){Is(ae,Te,o,te);break e}Be&&Be(s,$,j),s==="focusout"&&j&&$.type==="number"&&j.memoizedProps.value!=null&&xo($,"number",$.value)}switch(Be=j?_r(j):window,s){case"focusin":(Gt(Be)||Be.contentEditable==="true")&&(Bo=Be,Pp=j,Ec=null);break;case"focusout":Ec=Pp=Bo=null;break;case"mousedown":Mp=!0;break;case"contextmenu":case"mouseup":case"dragend":Mp=!1,Gv(ae,o,te);break;case"selectionchange":if(_I)break;case"keydown":case"keyup":Gv(ae,o,te)}var Ce;if(Xi)e:{switch(s){case"compositionstart":var Oe="onCompositionStart";break e;case"compositionend":Oe="onCompositionEnd";break e;case"compositionupdate":Oe="onCompositionUpdate";break e}Oe=void 0}else Qe?Y(s,o)&&(Oe="onCompositionEnd"):s==="keydown"&&o.keyCode===229&&(Oe="onCompositionStart");Oe&&(E&&o.locale!=="ko"&&(Qe||Oe!=="onCompositionStart"?Oe==="onCompositionEnd"&&Qe&&(Ce=fc()):(Ki=te,br="value"in Ki?Ki.value:Ki.textContent,Qe=!0)),Be=Ef(j,Oe),0<Be.length&&(Oe=new mc(Oe,s,null,o,te),ae.push({event:Oe,listeners:Be}),Ce?Oe.data=Ce:(Ce=de(o),Ce!==null&&(Oe.data=Ce)))),(Ce=_?qt(s,o):Xe(s,o))&&(Oe=Ef(j,"onBeforeInput"),0<Oe.length&&(Be=new mc("onBeforeInput","beforeinput",null,o,te),ae.push({event:Be,listeners:Oe}),Be.data=Ce)),JI(ae,s,j,o,te)}o0(ae,r)})}function $c(s,r,o){return{instance:s,listener:r,currentTarget:o}}function Ef(s,r){for(var o=r+"Capture",c=[];s!==null;){var f=s,g=f.stateNode;f=f.tag,f!==5&&f!==26&&f!==27||g===null||(f=Na(s,o),f!=null&&c.unshift($c(s,f,g)),f=Na(s,r),f!=null&&c.push($c(s,f,g))),s=s.return}return c}function ll(s){if(s===null)return null;do s=s.return;while(s&&s.tag!==5&&s.tag!==27);return s||null}function c0(s,r,o,c,f){for(var g=r._reactName,T=[];o!==null&&o!==c;){var w=o,O=w.alternate,j=w.stateNode;if(w=w.tag,O!==null&&O===c)break;w!==5&&w!==26&&w!==27||j===null||(O=j,f?(j=Na(o,g),j!=null&&T.unshift($c(o,j,O))):f||(j=Na(o,g),j!=null&&T.push($c(o,j,O)))),o=o.return}T.length!==0&&s.push({event:r,listeners:T})}var iN=/\r\n?/g,sN=/\u0000|\uFFFD/g;function u0(s){return(typeof s=="string"?s:""+s).replace(iN,`
`).replace(sN,"")}function h0(s,r){return r=u0(r),u0(s)===r}function Tf(){}function ct(s,r,o,c,f,g){switch(o){case"children":typeof c=="string"?r==="body"||r==="textarea"&&c===""||ci(s,c):(typeof c=="number"||typeof c=="bigint")&&r!=="body"&&ci(s,""+c);break;case"className":Er(s,"class",c);break;case"tabIndex":Er(s,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Er(s,o,c);break;case"style":Sh(s,c,g);break;case"data":if(r!=="object"){Er(s,"data",c);break}case"src":case"href":if(c===""&&(r!=="a"||o!=="href")){s.removeAttribute(o);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){s.removeAttribute(o);break}c=Wi(""+c),s.setAttribute(o,c);break;case"action":case"formAction":if(typeof c=="function"){s.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(o==="formAction"?(r!=="input"&&ct(s,r,"name",f.name,f,null),ct(s,r,"formEncType",f.formEncType,f,null),ct(s,r,"formMethod",f.formMethod,f,null),ct(s,r,"formTarget",f.formTarget,f,null)):(ct(s,r,"encType",f.encType,f,null),ct(s,r,"method",f.method,f,null),ct(s,r,"target",f.target,f,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){s.removeAttribute(o);break}c=Wi(""+c),s.setAttribute(o,c);break;case"onClick":c!=null&&(s.onclick=Tf);break;case"onScroll":c!=null&&Ke("scroll",s);break;case"onScrollEnd":c!=null&&Ke("scrollend",s);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(o=c.__html,o!=null){if(f.children!=null)throw Error(i(60));s.innerHTML=o}}break;case"multiple":s.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":s.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){s.removeAttribute("xlink:href");break}o=Wi(""+c),s.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?s.setAttribute(o,""+c):s.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?s.setAttribute(o,""):s.removeAttribute(o);break;case"capture":case"download":c===!0?s.setAttribute(o,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?s.setAttribute(o,c):s.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?s.setAttribute(o,c):s.removeAttribute(o);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?s.removeAttribute(o):s.setAttribute(o,c);break;case"popover":Ke("beforetoggle",s),Ke("toggle",s),vr(s,"popover",c);break;case"xlinkActuate":li(s,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":li(s,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":li(s,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":li(s,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":li(s,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":li(s,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":li(s,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":li(s,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":li(s,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":vr(s,"is",c);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Rp.get(o)||o,vr(s,o,c))}}function sg(s,r,o,c,f,g){switch(o){case"style":Sh(s,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(o=c.__html,o!=null){if(f.children!=null)throw Error(i(60));s.innerHTML=o}}break;case"children":typeof c=="string"?ci(s,c):(typeof c=="number"||typeof c=="bigint")&&ci(s,""+c);break;case"onScroll":c!=null&&Ke("scroll",s);break;case"onScrollEnd":c!=null&&Ke("scrollend",s);break;case"onClick":c!=null&&(s.onclick=Tf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Io.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),g=s[Ht]||null,g=g!=null?g[o]:null,typeof g=="function"&&s.removeEventListener(r,g,f),typeof c=="function")){typeof g!="function"&&g!==null&&(o in s?s[o]=null:s.hasAttribute(o)&&s.removeAttribute(o)),s.addEventListener(r,c,f);break e}o in s?s[o]=c:c===!0?s.setAttribute(o,""):vr(s,o,c)}}}function dn(s,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ke("error",s),Ke("load",s);var c=!1,f=!1,g;for(g in o)if(o.hasOwnProperty(g)){var T=o[g];if(T!=null)switch(g){case"src":c=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:ct(s,r,g,T,o,null)}}f&&ct(s,r,"srcSet",o.srcSet,o,null),c&&ct(s,r,"src",o.src,o,null);return;case"input":Ke("invalid",s);var w=g=T=f=null,O=null,j=null;for(c in o)if(o.hasOwnProperty(c)){var te=o[c];if(te!=null)switch(c){case"name":f=te;break;case"type":T=te;break;case"checked":O=te;break;case"defaultChecked":j=te;break;case"value":g=te;break;case"defaultValue":w=te;break;case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(i(137,r));break;default:ct(s,r,c,te,o,null)}}Ra(s,g,w,O,j,T,f,!1),Ca(s);return;case"select":Ke("invalid",s),c=T=g=null;for(f in o)if(o.hasOwnProperty(f)&&(w=o[f],w!=null))switch(f){case"value":g=w;break;case"defaultValue":T=w;break;case"multiple":c=w;default:ct(s,r,f,w,o,null)}r=g,o=T,s.multiple=!!c,r!=null?nt(s,!!c,r,!1):o!=null&&nt(s,!!c,o,!0);return;case"textarea":Ke("invalid",s),g=f=c=null;for(T in o)if(o.hasOwnProperty(T)&&(w=o[T],w!=null))switch(T){case"value":c=w;break;case"defaultValue":f=w;break;case"children":g=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(i(91));break;default:ct(s,r,T,w,o,null)}Sr(s,c,f,g),Ca(s);return;case"option":for(O in o)if(o.hasOwnProperty(O)&&(c=o[O],c!=null))switch(O){case"selected":s.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:ct(s,r,O,c,o,null)}return;case"dialog":Ke("cancel",s),Ke("close",s);break;case"iframe":case"object":Ke("load",s);break;case"video":case"audio":for(c=0;c<Kc.length;c++)Ke(Kc[c],s);break;case"image":Ke("error",s),Ke("load",s);break;case"details":Ke("toggle",s);break;case"embed":case"source":case"link":Ke("error",s),Ke("load",s);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in o)if(o.hasOwnProperty(j)&&(c=o[j],c!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:ct(s,r,j,c,o,null)}return;default:if(uc(r)){for(te in o)o.hasOwnProperty(te)&&(c=o[te],c!==void 0&&sg(s,r,te,c,o,void 0));return}}for(w in o)o.hasOwnProperty(w)&&(c=o[w],c!=null&&ct(s,r,w,c,o,null))}function rN(s,r,o,c){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,g=null,T=null,w=null,O=null,j=null,te=null;for(ee in o){var ae=o[ee];if(o.hasOwnProperty(ee)&&ae!=null)switch(ee){case"checked":break;case"value":break;case"defaultValue":O=ae;default:c.hasOwnProperty(ee)||ct(s,r,ee,null,c,ae)}}for(var $ in c){var ee=c[$];if(ae=o[$],c.hasOwnProperty($)&&(ee!=null||ae!=null))switch($){case"type":g=ee;break;case"name":f=ee;break;case"checked":j=ee;break;case"defaultChecked":te=ee;break;case"value":T=ee;break;case"defaultValue":w=ee;break;case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(i(137,r));break;default:ee!==ae&&ct(s,r,$,ee,c,ae)}}Tr(s,T,w,O,j,te,g,f);return;case"select":ee=T=w=$=null;for(g in o)if(O=o[g],o.hasOwnProperty(g)&&O!=null)switch(g){case"value":break;case"multiple":ee=O;default:c.hasOwnProperty(g)||ct(s,r,g,null,c,O)}for(f in c)if(g=c[f],O=o[f],c.hasOwnProperty(f)&&(g!=null||O!=null))switch(f){case"value":$=g;break;case"defaultValue":w=g;break;case"multiple":T=g;default:g!==O&&ct(s,r,f,g,c,O)}r=w,o=T,c=ee,$!=null?nt(s,!!o,$,!1):!!c!=!!o&&(r!=null?nt(s,!!o,r,!0):nt(s,!!o,o?[]:"",!1));return;case"textarea":ee=$=null;for(w in o)if(f=o[w],o.hasOwnProperty(w)&&f!=null&&!c.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:ct(s,r,w,null,c,f)}for(T in c)if(f=c[T],g=o[T],c.hasOwnProperty(T)&&(f!=null||g!=null))switch(T){case"value":$=f;break;case"defaultValue":ee=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(i(91));break;default:f!==g&&ct(s,r,T,f,c,g)}Ia(s,$,ee);return;case"option":for(var Ae in o)if($=o[Ae],o.hasOwnProperty(Ae)&&$!=null&&!c.hasOwnProperty(Ae))switch(Ae){case"selected":s.selected=!1;break;default:ct(s,r,Ae,null,c,$)}for(O in c)if($=c[O],ee=o[O],c.hasOwnProperty(O)&&$!==ee&&($!=null||ee!=null))switch(O){case"selected":s.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:ct(s,r,O,$,c,ee)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Me in o)$=o[Me],o.hasOwnProperty(Me)&&$!=null&&!c.hasOwnProperty(Me)&&ct(s,r,Me,null,c,$);for(j in c)if($=c[j],ee=o[j],c.hasOwnProperty(j)&&$!==ee&&($!=null||ee!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(i(137,r));break;default:ct(s,r,j,$,c,ee)}return;default:if(uc(r)){for(var Nt in o)$=o[Nt],o.hasOwnProperty(Nt)&&$!==void 0&&!c.hasOwnProperty(Nt)&&sg(s,r,Nt,void 0,c,$);for(te in c)$=c[te],ee=o[te],!c.hasOwnProperty(te)||$===ee||$===void 0&&ee===void 0||sg(s,r,te,$,c,ee);return}}for(var H in o)$=o[H],o.hasOwnProperty(H)&&$!=null&&!c.hasOwnProperty(H)&&ct(s,r,H,null,c,$);for(ae in c)$=c[ae],ee=o[ae],!c.hasOwnProperty(ae)||$===ee||$==null&&ee==null||ct(s,r,ae,$,c,ee)}var rg=null,ag=null;function Sf(s){return s.nodeType===9?s:s.ownerDocument}function f0(s){switch(s){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function d0(s,r){if(s===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return s===1&&r==="foreignObject"?0:s}function og(s,r){return s==="textarea"||s==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var lg=null;function aN(){var s=window.event;return s&&s.type==="popstate"?s===lg?!1:(lg=s,!0):(lg=null,!1)}var p0=typeof setTimeout=="function"?setTimeout:void 0,oN=typeof clearTimeout=="function"?clearTimeout:void 0,m0=typeof Promise=="function"?Promise:void 0,lN=typeof queueMicrotask=="function"?queueMicrotask:typeof m0<"u"?function(s){return m0.resolve(null).then(s).catch(cN)}:p0;function cN(s){setTimeout(function(){throw s})}function cg(s,r){var o=r,c=0;do{var f=o.nextSibling;if(s.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(c===0){s.removeChild(f),nu(r);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=f}while(o);nu(r)}function ug(s){var r=s.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":ug(o),wa(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}s.removeChild(o)}}function uN(s,r,o,c){for(;s.nodeType===1;){var f=o;if(s.nodeName.toLowerCase()!==r.toLowerCase()){if(!c&&(s.nodeName!=="INPUT"||s.type!=="hidden"))break}else if(c){if(!s[gr])switch(r){case"meta":if(!s.hasAttribute("itemprop"))break;return s;case"link":if(g=s.getAttribute("rel"),g==="stylesheet"&&s.hasAttribute("data-precedence"))break;if(g!==f.rel||s.getAttribute("href")!==(f.href==null?null:f.href)||s.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||s.getAttribute("title")!==(f.title==null?null:f.title))break;return s;case"style":if(s.hasAttribute("data-precedence"))break;return s;case"script":if(g=s.getAttribute("src"),(g!==(f.src==null?null:f.src)||s.getAttribute("type")!==(f.type==null?null:f.type)||s.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&g&&s.hasAttribute("async")&&!s.hasAttribute("itemprop"))break;return s;default:return s}}else if(r==="input"&&s.type==="hidden"){var g=f.name==null?null:""+f.name;if(f.type==="hidden"&&s.getAttribute("name")===g)return s}else return s;if(s=Pi(s.nextSibling),s===null)break}return null}function hN(s,r,o){if(r==="")return null;for(;s.nodeType!==3;)if((s.nodeType!==1||s.nodeName!=="INPUT"||s.type!=="hidden")&&!o||(s=Pi(s.nextSibling),s===null))return null;return s}function Pi(s){for(;s!=null;s=s.nextSibling){var r=s.nodeType;if(r===1||r===3)break;if(r===8){if(r=s.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return s}function g0(s){s=s.previousSibling;for(var r=0;s;){if(s.nodeType===8){var o=s.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return s;r--}else o==="/$"&&r++}s=s.previousSibling}return null}function _0(s,r,o){switch(r=Sf(o),s){case"html":if(s=r.documentElement,!s)throw Error(i(452));return s;case"head":if(s=r.head,!s)throw Error(i(453));return s;case"body":if(s=r.body,!s)throw Error(i(454));return s;default:throw Error(i(451))}}var Si=new Map,y0=new Set;function bf(s){return typeof s.getRootNode=="function"?s.getRootNode():s.ownerDocument}var Hs=Q.d;Q.d={f:fN,r:dN,D:pN,C:mN,L:gN,m:_N,X:vN,S:yN,M:EN};function fN(){var s=Hs.f(),r=mf();return s||r}function dN(s){var r=Ts(s);r!==null&&r.tag===5&&r.type==="form"?GE(r):Hs.r(s)}var cl=typeof document>"u"?null:document;function v0(s,r,o){var c=cl;if(c&&typeof r=="string"&&r){var f=Ct(r);f='link[rel="'+s+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),y0.has(f)||(y0.add(f),s={rel:s,crossOrigin:o,href:r},c.querySelector(f)===null&&(r=c.createElement("link"),dn(r,"link",s),Et(r),c.head.appendChild(r)))}}function pN(s){Hs.D(s),v0("dns-prefetch",s,null)}function mN(s,r){Hs.C(s,r),v0("preconnect",s,r)}function gN(s,r,o){Hs.L(s,r,o);var c=cl;if(c&&s&&r){var f='link[rel="preload"][as="'+Ct(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Ct(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Ct(o.imageSizes)+'"]')):f+='[href="'+Ct(s)+'"]';var g=f;switch(r){case"style":g=ul(s);break;case"script":g=hl(s)}Si.has(g)||(s=N({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:s,as:r},o),Si.set(g,s),c.querySelector(f)!==null||r==="style"&&c.querySelector(Yc(g))||r==="script"&&c.querySelector(Qc(g))||(r=c.createElement("link"),dn(r,"link",s),Et(r),c.head.appendChild(r)))}}function _N(s,r){Hs.m(s,r);var o=cl;if(o&&s){var c=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+Ct(c)+'"][href="'+Ct(s)+'"]',g=f;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=hl(s)}if(!Si.has(g)&&(s=N({rel:"modulepreload",href:s},r),Si.set(g,s),o.querySelector(f)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Qc(g)))return}c=o.createElement("link"),dn(c,"link",s),Et(c),o.head.appendChild(c)}}}function yN(s,r,o){Hs.S(s,r,o);var c=cl;if(c&&s){var f=yr(c).hoistableStyles,g=ul(s);r=r||"default";var T=f.get(g);if(!T){var w={loading:0,preload:null};if(T=c.querySelector(Yc(g)))w.loading=5;else{s=N({rel:"stylesheet",href:s,"data-precedence":r},o),(o=Si.get(g))&&hg(s,o);var O=T=c.createElement("link");Et(O),dn(O,"link",s),O._p=new Promise(function(j,te){O.onload=j,O.onerror=te}),O.addEventListener("load",function(){w.loading|=1}),O.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Af(T,r,c)}T={type:"stylesheet",instance:T,count:1,state:w},f.set(g,T)}}}function vN(s,r){Hs.X(s,r);var o=cl;if(o&&s){var c=yr(o).hoistableScripts,f=hl(s),g=c.get(f);g||(g=o.querySelector(Qc(f)),g||(s=N({src:s,async:!0},r),(r=Si.get(f))&&fg(s,r),g=o.createElement("script"),Et(g),dn(g,"link",s),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(f,g))}}function EN(s,r){Hs.M(s,r);var o=cl;if(o&&s){var c=yr(o).hoistableScripts,f=hl(s),g=c.get(f);g||(g=o.querySelector(Qc(f)),g||(s=N({src:s,async:!0,type:"module"},r),(r=Si.get(f))&&fg(s,r),g=o.createElement("script"),Et(g),dn(g,"link",s),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(f,g))}}function E0(s,r,o,c){var f=(f=Zt.current)?bf(f):null;if(!f)throw Error(i(446));switch(s){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=ul(o.href),o=yr(f).hoistableStyles,c=o.get(r),c||(c={type:"style",instance:null,count:0,state:null},o.set(r,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){s=ul(o.href);var g=yr(f).hoistableStyles,T=g.get(s);if(T||(f=f.ownerDocument||f,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(s,T),(g=f.querySelector(Yc(s)))&&!g._p&&(T.instance=g,T.state.loading=5),Si.has(s)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Si.set(s,o),g||TN(f,s,o,T.state))),r&&c===null)throw Error(i(528,""));return T}if(r&&c!==null)throw Error(i(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=hl(o),o=yr(f).hoistableScripts,c=o.get(r),c||(c={type:"script",instance:null,count:0,state:null},o.set(r,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,s))}}function ul(s){return'href="'+Ct(s)+'"'}function Yc(s){return'link[rel="stylesheet"]['+s+"]"}function T0(s){return N({},s,{"data-precedence":s.precedence,precedence:null})}function TN(s,r,o,c){s.querySelector('link[rel="preload"][as="style"]['+r+"]")?c.loading=1:(r=s.createElement("link"),c.preload=r,r.addEventListener("load",function(){return c.loading|=1}),r.addEventListener("error",function(){return c.loading|=2}),dn(r,"link",o),Et(r),s.head.appendChild(r))}function hl(s){return'[src="'+Ct(s)+'"]'}function Qc(s){return"script[async]"+s}function S0(s,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var c=s.querySelector('style[data-href~="'+Ct(o.href)+'"]');if(c)return r.instance=c,Et(c),c;var f=N({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return c=(s.ownerDocument||s).createElement("style"),Et(c),dn(c,"style",f),Af(c,o.precedence,s),r.instance=c;case"stylesheet":f=ul(o.href);var g=s.querySelector(Yc(f));if(g)return r.state.loading|=4,r.instance=g,Et(g),g;c=T0(o),(f=Si.get(f))&&hg(c,f),g=(s.ownerDocument||s).createElement("link"),Et(g);var T=g;return T._p=new Promise(function(w,O){T.onload=w,T.onerror=O}),dn(g,"link",c),r.state.loading|=4,Af(g,o.precedence,s),r.instance=g;case"script":return g=hl(o.src),(f=s.querySelector(Qc(g)))?(r.instance=f,Et(f),f):(c=o,(f=Si.get(g))&&(c=N({},o),fg(c,f)),s=s.ownerDocument||s,f=s.createElement("script"),Et(f),dn(f,"link",c),s.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(i(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(c=r.instance,r.state.loading|=4,Af(c,o.precedence,s));return r.instance}function Af(s,r,o){for(var c=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=c.length?c[c.length-1]:null,g=f,T=0;T<c.length;T++){var w=c[T];if(w.dataset.precedence===r)g=w;else if(g!==f)break}g?g.parentNode.insertBefore(s,g.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(s,r.firstChild))}function hg(s,r){s.crossOrigin==null&&(s.crossOrigin=r.crossOrigin),s.referrerPolicy==null&&(s.referrerPolicy=r.referrerPolicy),s.title==null&&(s.title=r.title)}function fg(s,r){s.crossOrigin==null&&(s.crossOrigin=r.crossOrigin),s.referrerPolicy==null&&(s.referrerPolicy=r.referrerPolicy),s.integrity==null&&(s.integrity=r.integrity)}var wf=null;function b0(s,r,o){if(wf===null){var c=new Map,f=wf=new Map;f.set(o,c)}else f=wf,c=f.get(o),c||(c=new Map,f.set(o,c));if(c.has(s))return c;for(c.set(s,null),o=o.getElementsByTagName(s),f=0;f<o.length;f++){var g=o[f];if(!(g[gr]||g[Jt]||s==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var T=g.getAttribute(r)||"";T=s+T;var w=c.get(T);w?w.push(g):c.set(T,[g])}}return c}function A0(s,r,o){s=s.ownerDocument||s,s.head.insertBefore(o,r==="title"?s.querySelector("head > title"):null)}function SN(s,r,o){if(o===1||r.itemProp!=null)return!1;switch(s){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return s=r.disabled,typeof r.precedence=="string"&&s==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function w0(s){return!(s.type==="stylesheet"&&(s.state.loading&3)===0)}var Xc=null;function bN(){}function AN(s,r,o){if(Xc===null)throw Error(i(475));var c=Xc;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=ul(o.href),g=s.querySelector(Yc(f));if(g){s=g._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(c.count++,c=Cf.bind(c),s.then(c,c)),r.state.loading|=4,r.instance=g,Et(g);return}g=s.ownerDocument||s,o=T0(o),(f=Si.get(f))&&hg(o,f),g=g.createElement("link"),Et(g);var T=g;T._p=new Promise(function(w,O){T.onload=w,T.onerror=O}),dn(g,"link",o),r.instance=g}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(r,s),(s=r.state.preload)&&(r.state.loading&3)===0&&(c.count++,r=Cf.bind(c),s.addEventListener("load",r),s.addEventListener("error",r))}}function wN(){if(Xc===null)throw Error(i(475));var s=Xc;return s.stylesheets&&s.count===0&&dg(s,s.stylesheets),0<s.count?function(r){var o=setTimeout(function(){if(s.stylesheets&&dg(s,s.stylesheets),s.unsuspend){var c=s.unsuspend;s.unsuspend=null,c()}},6e4);return s.unsuspend=r,function(){s.unsuspend=null,clearTimeout(o)}}:null}function Cf(){if(this.count--,this.count===0){if(this.stylesheets)dg(this,this.stylesheets);else if(this.unsuspend){var s=this.unsuspend;this.unsuspend=null,s()}}}var Rf=null;function dg(s,r){s.stylesheets=null,s.unsuspend!==null&&(s.count++,Rf=new Map,r.forEach(CN,s),Rf=null,Cf.call(s))}function CN(s,r){if(!(r.state.loading&4)){var o=Rf.get(s);if(o)var c=o.get(null);else{o=new Map,Rf.set(s,o);for(var f=s.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<f.length;g++){var T=f[g];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(o.set(T.dataset.precedence,T),c=T)}c&&o.set(null,c)}f=r.instance,T=f.getAttribute("data-precedence"),g=o.get(T)||c,g===c&&o.set(null,f),o.set(T,f),this.count++,c=Cf.bind(this),f.addEventListener("load",c),f.addEventListener("error",c),g?g.parentNode.insertBefore(f,g.nextSibling):(s=s.nodeType===9?s.head:s,s.insertBefore(f,s.firstChild)),r.state.loading|=4}}var Zc={$$typeof:k,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function RN(s,r,o,c,f,g,T,w){this.tag=1,this.containerInfo=s,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Co(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Co(0),this.hiddenUpdates=Co(null),this.identifierPrefix=c,this.onUncaughtError=f,this.onCaughtError=g,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function C0(s,r,o,c,f,g,T,w,O,j,te,ae){return s=new RN(s,r,o,T,w,O,j,ae),r=1,g===!0&&(r|=24),g=Ei(3,null,null,r),s.current=g,g.stateNode=s,r=Gp(),r.refCount++,s.pooledCache=r,r.refCount++,g.memoizedState={element:c,isDehydrated:o,cache:r},wm(g),s}function R0(s){return s?(s=Ho,s):Ho}function I0(s,r,o,c,f,g){f=R0(f),c.context===null?c.context=f:c.pendingContext=f,c=Or(r),c.payload={element:o},g=g===void 0?null:g,g!==null&&(c.callback=g),o=kr(s,c,r),o!==null&&(Un(o,s,r),Mc(o,s,r))}function N0(s,r){if(s=s.memoizedState,s!==null&&s.dehydrated!==null){var o=s.retryLane;s.retryLane=o!==0&&o<r?o:r}}function pg(s,r){N0(s,r),(s=s.alternate)&&N0(s,r)}function x0(s){if(s.tag===13){var r=Ar(s,67108864);r!==null&&Un(r,s,67108864),pg(s,67108864)}}var If=!0;function IN(s,r,o,c){var f=I.T;I.T=null;var g=Q.p;try{Q.p=2,mg(s,r,o,c)}finally{Q.p=g,I.T=f}}function NN(s,r,o,c){var f=I.T;I.T=null;var g=Q.p;try{Q.p=8,mg(s,r,o,c)}finally{Q.p=g,I.T=f}}function mg(s,r,o,c){if(If){var f=gg(c);if(f===null)ig(s,r,c,Nf,o),k0(s,c);else if(ON(f,s,r,o,c))c.stopPropagation();else if(k0(s,c),r&4&&-1<xN.indexOf(s)){for(;f!==null;){var g=Ts(f);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var T=Ni(g.pendingLanes);if(T!==0){var w=g;for(w.pendingLanes|=2,w.entangledLanes|=2;T;){var O=1<<31-Dn(T);w.entanglements[1]|=O,T&=~O}is(g),(St&6)===0&&(ff=cn()+500,Wc(0))}}break;case 13:w=Ar(g,2),w!==null&&Un(w,g,2),mf(),pg(g,2)}if(g=gg(c),g===null&&ig(s,r,c,Nf,o),g===f)break;f=g}f!==null&&c.stopPropagation()}else ig(s,r,c,null,o)}}function gg(s){return s=Oo(s),_g(s)}var Nf=null;function _g(s){if(Nf=null,s=xi(s),s!==null){var r=he(s);if(r===null)s=null;else{var o=r.tag;if(o===13){if(s=be(r),s!==null)return s;s=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;s=null}else r!==s&&(s=null)}}return Nf=s,null}function O0(s){switch(s){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Sa()){case vt:return 2;case Vt:return 8;case vs:case ph:return 32;case ec:return 268435456;default:return 32}default:return 32}}var yg=!1,jr=null,Br=null,Fr=null,Jc=new Map,eu=new Map,zr=[],xN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function k0(s,r){switch(s){case"focusin":case"focusout":jr=null;break;case"dragenter":case"dragleave":Br=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":Jc.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":eu.delete(r.pointerId)}}function tu(s,r,o,c,f,g){return s===null||s.nativeEvent!==g?(s={blockedOn:r,domEventName:o,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},r!==null&&(r=Ts(r),r!==null&&x0(r)),s):(s.eventSystemFlags|=c,r=s.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),s)}function ON(s,r,o,c,f){switch(r){case"focusin":return jr=tu(jr,s,r,o,c,f),!0;case"dragenter":return Br=tu(Br,s,r,o,c,f),!0;case"mouseover":return Fr=tu(Fr,s,r,o,c,f),!0;case"pointerover":var g=f.pointerId;return Jc.set(g,tu(Jc.get(g)||null,s,r,o,c,f)),!0;case"gotpointercapture":return g=f.pointerId,eu.set(g,tu(eu.get(g)||null,s,r,o,c,f)),!0}return!1}function D0(s){var r=xi(s.target);if(r!==null){var o=he(r);if(o!==null){if(r=o.tag,r===13){if(r=be(o),r!==null){s.blockedOn=r,mr(s.priority,function(){if(o.tag===13){var c=Jn(),f=Ar(o,c);f!==null&&Un(f,o,c),pg(o,c)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){s.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}s.blockedOn=null}function xf(s){if(s.blockedOn!==null)return!1;for(var r=s.targetContainers;0<r.length;){var o=gg(s.nativeEvent);if(o===null){o=s.nativeEvent;var c=new o.constructor(o.type,o);ui=c,o.target.dispatchEvent(c),ui=null}else return r=Ts(o),r!==null&&x0(r),s.blockedOn=o,!1;r.shift()}return!0}function P0(s,r,o){xf(s)&&o.delete(r)}function kN(){yg=!1,jr!==null&&xf(jr)&&(jr=null),Br!==null&&xf(Br)&&(Br=null),Fr!==null&&xf(Fr)&&(Fr=null),Jc.forEach(P0),eu.forEach(P0)}function Of(s,r){s.blockedOn===r&&(s.blockedOn=null,yg||(yg=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,kN)))}var kf=null;function M0(s){kf!==s&&(kf=s,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){kf===s&&(kf=null);for(var r=0;r<s.length;r+=3){var o=s[r],c=s[r+1],f=s[r+2];if(typeof c!="function"){if(_g(c||o)===null)continue;break}var g=Ts(o);g!==null&&(s.splice(r,3),r-=3,om(g,{pending:!0,data:f,method:o.method,action:c},c,f))}}))}function nu(s){function r(O){return Of(O,s)}jr!==null&&Of(jr,s),Br!==null&&Of(Br,s),Fr!==null&&Of(Fr,s),Jc.forEach(r),eu.forEach(r);for(var o=0;o<zr.length;o++){var c=zr[o];c.blockedOn===s&&(c.blockedOn=null)}for(;0<zr.length&&(o=zr[0],o.blockedOn===null);)D0(o),o.blockedOn===null&&zr.shift();if(o=(s.ownerDocument||s).$$reactFormReplay,o!=null)for(c=0;c<o.length;c+=3){var f=o[c],g=o[c+1],T=f[Ht]||null;if(typeof g=="function")T||M0(o);else if(T){var w=null;if(g&&g.hasAttribute("formAction")){if(f=g,T=g[Ht]||null)w=T.formAction;else if(_g(f)!==null)continue}else w=T.action;typeof w=="function"?o[c+1]=w:(o.splice(c,3),c-=3),M0(o)}}}function vg(s){this._internalRoot=s}Df.prototype.render=vg.prototype.render=function(s){var r=this._internalRoot;if(r===null)throw Error(i(409));var o=r.current,c=Jn();I0(o,c,s,r,null,null)},Df.prototype.unmount=vg.prototype.unmount=function(){var s=this._internalRoot;if(s!==null){this._internalRoot=null;var r=s.containerInfo;s.tag===0&&al(),I0(s.current,2,null,s,null,null),mf(),r[Es]=null}};function Df(s){this._internalRoot=s}Df.prototype.unstable_scheduleHydration=function(s){if(s){var r=vh();s={blockedOn:null,target:s,priority:r};for(var o=0;o<zr.length&&r!==0&&r<zr[o].priority;o++);zr.splice(o,0,s),o===0&&D0(s)}};var L0=e.version;if(L0!=="19.0.0")throw Error(i(527,L0,"19.0.0"));Q.findDOMNode=function(s){var r=s._reactInternals;if(r===void 0)throw typeof s.render=="function"?Error(i(188)):(s=Object.keys(s).join(","),Error(i(268,s)));return s=J(r),s=s!==null?ve(s):null,s=s===null?null:s.stateNode,s};var DN={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:I,findFiberByHostInstance:xi,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pf.isDisabled&&Pf.supportsFiber)try{cr=Pf.inject(DN),vn=Pf}catch{}}return su.createRoot=function(s,r){if(!a(s))throw Error(i(299));var o=!1,c="",f=JE,g=eT,T=tT,w=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(g=r.onCaughtError),r.onRecoverableError!==void 0&&(T=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(w=r.unstable_transitionCallbacks)),r=C0(s,1,!1,null,null,o,c,f,g,T,w,null),s[Es]=r.current,ng(s.nodeType===8?s.parentNode:s),new vg(r)},su.hydrateRoot=function(s,r,o){if(!a(s))throw Error(i(299));var c=!1,f="",g=JE,T=eT,w=tT,O=null,j=null;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(g=o.onUncaughtError),o.onCaughtError!==void 0&&(T=o.onCaughtError),o.onRecoverableError!==void 0&&(w=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(O=o.unstable_transitionCallbacks),o.formState!==void 0&&(j=o.formState)),r=C0(s,1,!0,r,o??null,c,f,g,T,w,O,j),r.context=R0(null),o=r.current,c=Jn(),f=Or(c),f.callback=null,kr(o,f,c),r.current.lanes=c,Pt(r,c),is(r),s[Es]=r.current,ng(s),new Df(r)},su.version="19.0.0",su}var W0;function zN(){if(W0)return Sg.exports;W0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Sg.exports=FN(),Sg.exports}var HN=zN();const qN="_hideHome_1sau2_19",GN="_home_wrapper_1sau2_27",WN="_left_1sau2_43",KN="_wrapTop_1sau2_61",$N="_wrapBottom_1sau2_141",YN="_orange_1sau2_171",QN="_purple_1sau2_177",XN="_blue_1sau2_183",ZN="_right_1sau2_193",qs={hideHome:qN,home_wrapper:GN,left:WN,wrapTop:KN,wrapBottom:$N,orange:YN,purple:QN,blue:XN,right:ZN},JN="_animateLeft_1cea5_1",ex="_animateImg_1cea5_11",K0={animateLeft:JN,animateImg:ex},me=({className:n,content:e,func:t,submit:i,icon:a,change:l,element:u})=>y.jsxs("button",{className:`${n}`,onSubmit:d=>{i(d)},onClick:()=>{t()},children:[a,e,u]}),tx="_nav_ym7as_47",nx="_hideNav_ym7as_55",ix="_left_ym7as_101",sx="_middle_ym7as_129",rx="_NavLinks_ym7as_129",ax="_indicated_ym7as_167",ox="_indication_ym7as_177",lx="_right_ym7as_195",cx="_HamburgerButt_ym7as_207",ux="_SignInButt_ym7as_253",hx="_SignUpButt_ym7as_287",fx="_sidebar_ym7as_319",dx="_hideSideBar_ym7as_329",px="_User_Button_ym7as_547",ft={nav:tx,hideNav:nx,left:ix,middle:sx,NavLinks:rx,indicated:ax,indication:ox,right:lx,HamburgerButt:cx,SignInButt:ux,SignUpButt:hx,sidebar:fx,hideSideBar:dx,User_Button:px},mx=()=>{};var $0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e=function(n,e){if(!n)throw Hl(e)},Hl=function(n){return new Error("Firebase Database ("+UA.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let a=n.charCodeAt(i);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},gx=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const a=n[t++];if(a<128)e[i++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[i++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],u=n[t++],d=n[t++],p=((a&7)<<18|(l&63)<<12|(u&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],u=n[t++];e[i++]=String.fromCharCode((a&15)<<12|(l&63)<<6|u&63)}}return e.join("")},ny={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let a=0;a<n.length;a+=3){const l=n[a],u=a+1<n.length,d=u?n[a+1]:0,p=a+2<n.length,m=p?n[a+2]:0,v=l>>2,S=(l&3)<<4|d>>4;let b=(d&15)<<2|m>>6,k=m&63;p||(k=64,u||(b=64)),i.push(t[v],t[S],t[b],t[k])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(VA(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):gx(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const m=a<n.length?t[n.charAt(a)]:64;++a;const S=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||d==null||m==null||S==null)throw new _x;const b=l<<2|d>>4;if(i.push(b),m!==64){const k=d<<4&240|m>>2;if(i.push(k),S!==64){const M=m<<6&192|S;i.push(M)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class _x extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jA=function(n){const e=VA(n);return ny.encodeByteArray(e,!0)},cd=function(n){return jA(n).replace(/\./g,"")},ud=function(n){try{return ny.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yx(n){return BA(void 0,n)}function BA(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!vx(t)||(n[t]=BA(n[t],e[t]));return n}function vx(n){return n!=="__proto__"}/**
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
 */function Ex(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Tx=()=>Ex().__FIREBASE_DEFAULTS__,Sx=()=>{if(typeof process>"u"||typeof $0>"u")return;const n=$0.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},bx=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ud(n[1]);return e&&JSON.parse(e)},Fd=()=>{try{return mx()||Tx()||Sx()||bx()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},FA=n=>{var e,t;return(t=(e=Fd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},zA=n=>{const e=FA(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},HA=()=>{var n;return(n=Fd())===null||n===void 0?void 0:n.config},qA=n=>{var e;return(e=Fd())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function GA(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[cd(JSON.stringify(t)),cd(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xn())}function Ax(){var n;const e=(n=Fd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Cx(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function WA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Rx(){const n=xn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ix(){return UA.NODE_ADMIN===!0}function Nx(){return!Ax()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xx(){try{return typeof indexedDB=="object"}catch{return!1}}function Ox(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(i);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx="FirebaseError";class _s extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=kx,Object.setPrototypeOf(this,_s.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yu.prototype.create)}}class Yu{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],u=l?Dx(l,i):"Error",d=`${this.serviceName}: ${u} (${a}).`;return new _s(a,d,i)}}function Dx(n,e){return n.replace(Px,(t,i)=>{const a=e[i];return a!=null?String(a):`<${i}?>`})}const Px=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(n){return JSON.parse(n)}function gn(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA=function(n){let e={},t={},i={},a="";try{const l=n.split(".");e=Mu(ud(l[0])||""),t=Mu(ud(l[1])||""),a=l[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:a}},Mx=function(n){const e=KA(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Lx=function(n){const e=KA(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ol(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Jg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function hd(n,e,t){const i={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=e.call(t,n[a],a,n));return i}function sa(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const a of t){if(!i.includes(a))return!1;const l=n[a],u=e[a];if(Y0(l)&&Y0(u)){if(!sa(l,u))return!1}else if(l!==u)return!1}for(const a of i)if(!t.includes(a))return!1;return!0}function Y0(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function gu(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[a,l]=i.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function _u(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let S=0;S<16;S++)i[S]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let S=0;S<16;S++)i[S]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let S=16;S<80;S++){const b=i[S-3]^i[S-8]^i[S-14]^i[S-16];i[S]=(b<<1|b>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],u=this.chain_[2],d=this.chain_[3],p=this.chain_[4],m,v;for(let S=0;S<80;S++){S<40?S<20?(m=d^l&(u^d),v=1518500249):(m=l^u^d,v=1859775393):S<60?(m=l&u|d&(l|u),v=2400959708):(m=l^u^d,v=3395469782);const b=(a<<5|a>>>27)+m+p+v+i[S]&4294967295;p=d,d=u,u=(l<<30|l>>>2)&4294967295,l=a,a=b}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let a=0;const l=this.buf_;let u=this.inbuf_;for(;a<t;){if(u===0)for(;a<=i;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[u]=e.charCodeAt(a),++u,++a,u===this.blockSize){this.compress_(l),u=0;break}}else for(;a<t;)if(l[u]=e[a],++u,++a,u===this.blockSize){this.compress_(l),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[i]=this.chain_[a]>>l&255,++i;return e}}function Vx(n,e){const t=new jx(n,e);return t.subscribe.bind(t)}class jx{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let a;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Bx(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:i},a.next===void 0&&(a.next=Cg),a.error===void 0&&(a.error=Cg),a.complete===void 0&&(a.complete=Cg);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bx(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Cg(){}function Fx(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let a=n.charCodeAt(i);if(a>=55296&&a<=56319){const l=a-55296;i++,_e(i<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(i)-56320;a=65536+(l<<10)+u}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},zd=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function bt(n){return n&&n._delegate?n._delegate:n}class er{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const to="[DEFAULT]";/**
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
 */class Hx{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new iy;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&i.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gx(e))try{this.getOrInitializeService({instanceIdentifier:to})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});i.resolve(l)}catch{}}}}clearInstance(e=to){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=to){return this.instances.has(e)}getOptions(e=to){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&u.resolve(a)}return a}onInit(e,t){var i;const a=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(a))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(a,l);const u=this.instances.get(a);return u&&e(u,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const a of i)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:qx(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=to){return this.component?this.component.multipleInstances?e:to:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qx(n){return n===to?void 0:n}function Gx(n){return n.instantiationMode==="EAGER"}/**
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
 */class Wx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Hx(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(He||(He={}));const Kx={debug:He.DEBUG,verbose:He.VERBOSE,info:He.INFO,warn:He.WARN,error:He.ERROR,silent:He.SILENT},$x=He.INFO,Yx={[He.DEBUG]:"log",[He.VERBOSE]:"log",[He.INFO]:"info",[He.WARN]:"warn",[He.ERROR]:"error"},Qx=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),a=Yx[e];if(a)console[a](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hd{constructor(e){this.name=e,this._logLevel=$x,this._logHandler=Qx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in He))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Kx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,He.DEBUG,...e),this._logHandler(this,He.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,He.VERBOSE,...e),this._logHandler(this,He.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,He.INFO,...e),this._logHandler(this,He.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,He.WARN,...e),this._logHandler(this,He.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,He.ERROR,...e),this._logHandler(this,He.ERROR,...e)}}const Xx=(n,e)=>e.some(t=>n instanceof t);let Q0,X0;function Zx(){return Q0||(Q0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jx(){return X0||(X0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $A=new WeakMap,e_=new WeakMap,YA=new WeakMap,Rg=new WeakMap,ry=new WeakMap;function eO(n){const e=new Promise((t,i)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",u)},l=()=>{t(Jr(n.result)),a()},u=()=>{i(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&$A.set(t,n)}).catch(()=>{}),ry.set(e,n),e}function tO(n){if(e_.has(n))return;const e=new Promise((t,i)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",u),n.removeEventListener("abort",u)},l=()=>{t(),a()},u=()=>{i(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",u),n.addEventListener("abort",u)});e_.set(n,e)}let t_={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return e_.get(n);if(e==="objectStoreNames")return n.objectStoreNames||YA.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Jr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function nO(n){t_=n(t_)}function iO(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Ig(this),e,...t);return YA.set(i,e.sort?e.sort():[e]),Jr(i)}:Jx().includes(n)?function(...e){return n.apply(Ig(this),e),Jr($A.get(this))}:function(...e){return Jr(n.apply(Ig(this),e))}}function sO(n){return typeof n=="function"?iO(n):(n instanceof IDBTransaction&&tO(n),Xx(n,Zx())?new Proxy(n,t_):n)}function Jr(n){if(n instanceof IDBRequest)return eO(n);if(Rg.has(n))return Rg.get(n);const e=sO(n);return e!==n&&(Rg.set(n,e),ry.set(e,n)),e}const Ig=n=>ry.get(n);function rO(n,e,{blocked:t,upgrade:i,blocking:a,terminated:l}={}){const u=indexedDB.open(n,e),d=Jr(u);return i&&u.addEventListener("upgradeneeded",p=>{i(Jr(u.result),p.oldVersion,p.newVersion,Jr(u.transaction),p)}),t&&u.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",m=>a(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const aO=["get","getKey","getAll","getAllKeys","count"],oO=["put","add","delete","clear"],Ng=new Map;function Z0(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ng.get(e))return Ng.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,a=oO.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(a||aO.includes(t)))return;const l=async function(u,...d){const p=this.transaction(u,a?"readwrite":"readonly");let m=p.store;return i&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),a&&p.done]))[0]};return Ng.set(e,l),l}nO(n=>({...n,get:(e,t,i)=>Z0(e,t)||n.get(e,t,i),has:(e,t)=>!!Z0(e,t)||n.has(e,t)}));/**
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
 */class lO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(cO(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function cO(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const n_="@firebase/app",J0="0.11.2";/**
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
 */const tr=new Hd("@firebase/app"),uO="@firebase/app-compat",hO="@firebase/analytics-compat",fO="@firebase/analytics",dO="@firebase/app-check-compat",pO="@firebase/app-check",mO="@firebase/auth",gO="@firebase/auth-compat",_O="@firebase/database",yO="@firebase/data-connect",vO="@firebase/database-compat",EO="@firebase/functions",TO="@firebase/functions-compat",SO="@firebase/installations",bO="@firebase/installations-compat",AO="@firebase/messaging",wO="@firebase/messaging-compat",CO="@firebase/performance",RO="@firebase/performance-compat",IO="@firebase/remote-config",NO="@firebase/remote-config-compat",xO="@firebase/storage",OO="@firebase/storage-compat",kO="@firebase/firestore",DO="@firebase/vertexai",PO="@firebase/firestore-compat",MO="firebase",LO="11.4.0";/**
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
 */const i_="[DEFAULT]",UO={[n_]:"fire-core",[uO]:"fire-core-compat",[fO]:"fire-analytics",[hO]:"fire-analytics-compat",[pO]:"fire-app-check",[dO]:"fire-app-check-compat",[mO]:"fire-auth",[gO]:"fire-auth-compat",[_O]:"fire-rtdb",[yO]:"fire-data-connect",[vO]:"fire-rtdb-compat",[EO]:"fire-fn",[TO]:"fire-fn-compat",[SO]:"fire-iid",[bO]:"fire-iid-compat",[AO]:"fire-fcm",[wO]:"fire-fcm-compat",[CO]:"fire-perf",[RO]:"fire-perf-compat",[IO]:"fire-rc",[NO]:"fire-rc-compat",[xO]:"fire-gcs",[OO]:"fire-gcs-compat",[kO]:"fire-fst",[PO]:"fire-fst-compat",[DO]:"fire-vertex","fire-js":"fire-js",[MO]:"fire-js-all"};/**
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
 */const fd=new Map,VO=new Map,s_=new Map;function eS(n,e){try{n.container.addComponent(e)}catch(t){tr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ra(n){const e=n.name;if(s_.has(e))return tr.debug(`There were multiple attempts to register component ${e}.`),!1;s_.set(e,n);for(const t of fd.values())eS(t,n);for(const t of VO.values())eS(t,n);return!0}function qd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function jn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const jO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ea=new Yu("app","Firebase",jO);/**
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
 */class BO{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ea.create("app-deleted",{appName:this._name})}}/**
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
 */const ga=LO;function ay(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:i_,automaticDataCollectionEnabled:!1},e),a=i.name;if(typeof a!="string"||!a)throw ea.create("bad-app-name",{appName:String(a)});if(t||(t=HA()),!t)throw ea.create("no-options");const l=fd.get(a);if(l){if(sa(t,l.options)&&sa(i,l.config))return l;throw ea.create("duplicate-app",{appName:a})}const u=new Wx(a);for(const p of s_.values())u.addComponent(p);const d=new BO(t,i,u);return fd.set(a,d),d}function oy(n=i_){const e=fd.get(n);if(!e&&n===i_&&HA())return ay();if(!e)throw ea.create("no-app",{appName:n});return e}function Ci(n,e,t){var i;let a=(i=UO[n])!==null&&i!==void 0?i:n;t&&(a+=`-${t}`);const l=a.match(/\s|\//),u=e.match(/\s|\//);if(l||u){const d=[`Unable to register library "${a}" with version "${e}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tr.warn(d.join(" "));return}ra(new er(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const FO="firebase-heartbeat-database",zO=1,Lu="firebase-heartbeat-store";let xg=null;function QA(){return xg||(xg=rO(FO,zO,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Lu)}catch(t){console.warn(t)}}}}).catch(n=>{throw ea.create("idb-open",{originalErrorMessage:n.message})})),xg}async function HO(n){try{const t=(await QA()).transaction(Lu),i=await t.objectStore(Lu).get(XA(n));return await t.done,i}catch(e){if(e instanceof _s)tr.warn(e.message);else{const t=ea.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tr.warn(t.message)}}}async function tS(n,e){try{const i=(await QA()).transaction(Lu,"readwrite");await i.objectStore(Lu).put(e,XA(n)),await i.done}catch(t){if(t instanceof _s)tr.warn(t.message);else{const i=ea.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});tr.warn(i.message)}}}function XA(n){return`${n.name}!${n.options.appId}`}/**
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
 */const qO=1024,GO=30;class WO{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $O(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=nS();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(u=>u.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>GO){const u=YO(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){tr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=nS(),{heartbeatsToSend:i,unsentEntries:a}=KO(this._heartbeatsCache.heartbeats),l=cd(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return tr.warn(t),""}}}function nS(){return new Date().toISOString().substring(0,10)}function KO(n,e=qO){const t=[];let i=n.slice();for(const a of n){const l=t.find(u=>u.agent===a.agent);if(l){if(l.dates.push(a.date),iS(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),iS(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class $O{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xx()?Ox().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await HO(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return tS(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return tS(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function iS(n){return cd(JSON.stringify({version:2,heartbeats:n})).length}function YO(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function QO(n){ra(new er("platform-logger",e=>new lO(e),"PRIVATE")),ra(new er("heartbeat",e=>new WO(e),"PRIVATE")),Ci(n_,J0,n),Ci(n_,J0,"esm2017"),Ci("fire-js","")}QO("");function ly(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,i=Object.getOwnPropertySymbols(n);a<i.length;a++)e.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(n,i[a])&&(t[i[a]]=n[i[a]]);return t}function ZA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const XO=ZA,JA=new Yu("auth","Firebase",ZA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd=new Hd("@firebase/auth");function ZO(n,...e){dd.logLevel<=He.WARN&&dd.warn(`Auth (${ga}): ${n}`,...e)}function Xf(n,...e){dd.logLevel<=He.ERROR&&dd.error(`Auth (${ga}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(n,...e){throw uy(n,...e)}function Ui(n,...e){return uy(n,...e)}function cy(n,e,t){const i=Object.assign(Object.assign({},XO()),{[e]:t});return new Yu("auth","Firebase",i).create(e,{appName:n.name})}function Zs(n){return cy(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function JO(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Ri(n,"argument-error"),cy(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function uy(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return JA.create(n,...e)}function ke(n,e,...t){if(!n)throw uy(e,...t)}function $s(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Xf(e),new Error(e)}function nr(n,e){n||$s(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ek(){return sS()==="http:"||sS()==="https:"}function sS(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ek()||Cx()||"connection"in navigator)?navigator.onLine:!0}function nk(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t){this.shortDelay=e,this.longDelay=t,nr(t>e,"Short delay should be less than long delay!"),this.isMobile=sy()||WA()}get(){return tk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(n,e){nr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$s("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$s("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$s("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk=new Qu(3e4,6e4);function _a(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ya(n,e,t,i,a={}){return tw(n,a,async()=>{let l={},u={};i&&(e==="GET"?u=i:l={body:JSON.stringify(i)});const d=ql(Object.assign({key:n.config.apiKey},u)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:p},l);return wx()||(m.referrerPolicy="no-referrer"),ew.fetch()(nw(n,n.config.apiHost,t,d),m)})}async function tw(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},ik),e);try{const a=new ak(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const u=await l.json();if("needConfirmation"in u)throw Mf(n,"account-exists-with-different-credential",u);if(l.ok&&!("errorMessage"in u))return u;{const d=l.ok?u.errorMessage:u.error.message,[p,m]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mf(n,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw Mf(n,"email-already-in-use",u);if(p==="USER_DISABLED")throw Mf(n,"user-disabled",u);const v=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw cy(n,v,m);Ri(n,v)}}catch(a){if(a instanceof _s)throw a;Ri(n,"network-request-failed",{message:String(a)})}}async function Xu(n,e,t,i,a={}){const l=await ya(n,e,t,i,a);return"mfaPendingCredential"in l&&Ri(n,"multi-factor-auth-required",{_serverResponse:l}),l}function nw(n,e,t,i){const a=`${e}${t}?${i}`;return n.config.emulator?hy(n.config,a):`${n.config.apiScheme}://${a}`}function rk(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ak{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Ui(this.auth,"network-request-failed")),sk.get())})}}function Mf(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const a=Ui(n,e,i);return a.customData._tokenResponse=t,a}function rS(n){return n!==void 0&&n.enterprise!==void 0}class ok{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return rk(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function lk(n,e){return ya(n,"GET","/v2/recaptchaConfig",_a(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ck(n,e){return ya(n,"POST","/v1/accounts:delete",e)}async function iw(n,e){return ya(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uk(n,e=!1){const t=bt(n),i=await t.getIdToken(e),a=fy(i);ke(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,u=l==null?void 0:l.sign_in_provider;return{claims:a,token:i,authTime:bu(Og(a.auth_time)),issuedAtTime:bu(Og(a.iat)),expirationTime:bu(Og(a.exp)),signInProvider:u||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Og(n){return Number(n)*1e3}function fy(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Xf("JWT malformed, contained fewer than 3 sections"),null;try{const a=ud(t);return a?JSON.parse(a):(Xf("Failed to decode base64 JWT payload"),null)}catch(a){return Xf("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function aS(n){const e=fy(n);return ke(e,"internal-error"),ke(typeof e.exp<"u","internal-error"),ke(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uu(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof _s&&hk(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function hk({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=bu(this.lastLoginAt),this.creationTime=bu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pd(n){var e;const t=n.auth,i=await n.getIdToken(),a=await Uu(n,iw(t,{idToken:i}));ke(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];n._notifyReloadListener(l);const u=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?sw(l.providerUserInfo):[],d=pk(n.providerData,u),p=n.isAnonymous,m=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),v=p?m:!1,S={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new a_(l.createdAt,l.lastLoginAt),isAnonymous:v};Object.assign(n,S)}async function dk(n){const e=bt(n);await pd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pk(n,e){return[...n.filter(i=>!e.some(a=>a.providerId===i.providerId)),...e]}function sw(n){return n.map(e=>{var{providerId:t}=e,i=ly(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mk(n,e){const t=await tw(n,{},async()=>{const i=ql({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,u=nw(n,a,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",ew.fetch()(u,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function gk(n,e){return ya(n,"POST","/v2/accounts:revokeToken",_a(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ke(e.idToken,"internal-error"),ke(typeof e.idToken<"u","internal-error"),ke(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):aS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ke(e.length!==0,"internal-error");const t=aS(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ke(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:a,expiresIn:l}=await mk(e,t);this.updateTokensAndExpiration(i,a,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:a,expirationTime:l}=t,u=new Al;return i&&(ke(typeof i=="string","internal-error",{appName:e}),u.refreshToken=i),a&&(ke(typeof a=="string","internal-error",{appName:e}),u.accessToken=a),l&&(ke(typeof l=="number","internal-error",{appName:e}),u.expirationTime=l),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Al,this.toJSON())}_performRefresh(){return $s("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(n,e){ke(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ys{constructor(e){var{uid:t,auth:i,stsTokenManager:a}=e,l=ly(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new a_(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Uu(this,this.stsTokenManager.getToken(this.auth,e));return ke(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return uk(this,e)}reload(){return dk(this)}_assign(e){this!==e&&(ke(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ys(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ke(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await pd(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jn(this.auth.app))return Promise.reject(Zs(this.auth));const e=await this.getIdToken();return await Uu(this,ck(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,a,l,u,d,p,m,v;const S=(i=t.displayName)!==null&&i!==void 0?i:void 0,b=(a=t.email)!==null&&a!==void 0?a:void 0,k=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,M=(u=t.photoURL)!==null&&u!==void 0?u:void 0,W=(d=t.tenantId)!==null&&d!==void 0?d:void 0,V=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,F=(m=t.createdAt)!==null&&m!==void 0?m:void 0,B=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:K,emailVerified:z,isAnonymous:re,providerData:ge,stsTokenManager:P}=t;ke(K&&P,e,"internal-error");const R=Al.fromJSON(this.name,P);ke(typeof K=="string",e,"internal-error"),qr(S,e.name),qr(b,e.name),ke(typeof z=="boolean",e,"internal-error"),ke(typeof re=="boolean",e,"internal-error"),qr(k,e.name),qr(M,e.name),qr(W,e.name),qr(V,e.name),qr(F,e.name),qr(B,e.name);const I=new Ys({uid:K,auth:e,email:b,emailVerified:z,displayName:S,isAnonymous:re,photoURL:M,phoneNumber:k,tenantId:W,stsTokenManager:R,createdAt:F,lastLoginAt:B});return ge&&Array.isArray(ge)&&(I.providerData=ge.map(N=>Object.assign({},N))),V&&(I._redirectEventId=V),I}static async _fromIdTokenResponse(e,t,i=!1){const a=new Al;a.updateFromServerResponse(t);const l=new Ys({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:i});return await pd(l),l}static async _fromGetAccountInfoResponse(e,t,i){const a=t.users[0];ke(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?sw(a.providerUserInfo):[],u=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),d=new Al;d.updateFromIdToken(i);const p=new Ys({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:u}),m={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new a_(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,m),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS=new Map;function Qs(n){nr(n instanceof Function,"Expected a class definition");let e=oS.get(n);return e?(nr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,oS.set(n,e),e)}/**
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
 */class rw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rw.type="NONE";const lS=rw;/**
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
 */function Zf(n,e,t){return`firebase:${n}:${e}:${t}`}class wl{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:a,name:l}=this.auth;this.fullUserKey=Zf(this.userKey,a.apiKey,l),this.fullPersistenceKey=Zf("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ys._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new wl(Qs(lS),e,i);const a=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let l=a[0]||Qs(lS);const u=Zf(i,e.config.apiKey,e.name);let d=null;for(const m of t)try{const v=await m._get(u);if(v){const S=Ys._fromJSON(e,v);m!==l&&(d=S),l=m;break}}catch{}const p=a.filter(m=>m._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new wl(l,e,i):(l=p[0],d&&await l._set(u,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==l)try{await m._remove(u)}catch{}})),new wl(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(aw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hw(e))return"Blackberry";if(fw(e))return"Webos";if(ow(e))return"Safari";if((e.includes("chrome/")||lw(e))&&!e.includes("edge/"))return"Chrome";if(uw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function aw(n=xn()){return/firefox\//i.test(n)}function ow(n=xn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lw(n=xn()){return/crios\//i.test(n)}function cw(n=xn()){return/iemobile/i.test(n)}function uw(n=xn()){return/android/i.test(n)}function hw(n=xn()){return/blackberry/i.test(n)}function fw(n=xn()){return/webos/i.test(n)}function dy(n=xn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function _k(n=xn()){var e;return dy(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yk(){return Rx()&&document.documentMode===10}function dw(n=xn()){return dy(n)||uw(n)||fw(n)||hw(n)||/windows phone/i.test(n)||cw(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(n,e=[]){let t;switch(n){case"Browser":t=cS(xn());break;case"Worker":t=`${cS(xn())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ga}/${i}`}/**
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
 */class vk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((u,d)=>{try{const p=e(l);u(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function Ek(n,e={}){return ya(n,"GET","/v2/passwordPolicy",_a(n,e))}/**
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
 */const Tk=6;class Sk{constructor(e){var t,i,a,l;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:Tk,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,a,l,u,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(u=p.containsNumericCharacter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let a=0;a<e.length;a++)i=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e,t,i,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uS(this),this.idTokenSubscription=new uS(this),this.beforeStateQueue=new vk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=JA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Qs(t)),this._initializationPromise=this.queue(async()=>{var i,a;if(!this._deleted&&(this.persistenceManager=await wl.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await iw(this,{idToken:e}),i=await Ys._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(jn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let a=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===d)&&(p!=null&&p.user)&&(a=p.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(u){a=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return ke(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await pd(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(jn(this.app))return Promise.reject(Zs(this));const t=e?bt(e):null;return t&&ke(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ke(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return jn(this.app)?Promise.reject(Zs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return jn(this.app)?Promise.reject(Zs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qs(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ek(this),t=new Sk(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yu("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await gk(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Qs(e)||this._popupRedirectResolver;ke(t,this,"argument-error"),this.redirectPersistenceManager=await wl.create(this,[Qs(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(ke(d,this,"internal-error"),d.then(()=>{u||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,a);return()=>{u=!0,p()}}else{const p=e.addObserver(t);return()=>{u=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ke(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(jn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&ZO(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function va(n){return bt(n)}class uS{constructor(e){this.auth=e,this.observer=null,this.addObserver=Vx(t=>this.observer=t)}get next(){return ke(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ak(n){Gd=n}function mw(n){return Gd.loadJS(n)}function wk(){return Gd.recaptchaEnterpriseScript}function Ck(){return Gd.gapiScript}function Rk(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Ik{constructor(){this.enterprise=new Nk}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Nk{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const xk="recaptcha-enterprise",gw="NO_RECAPTCHA";class Ok{constructor(e){this.type=xk,this.auth=va(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(u,d)=>{lk(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new ok(p);return l.tenantId==null?l._agentRecaptchaConfig=m:l._tenantRecaptchaConfigs[l.tenantId]=m,u(m.siteKey)}}).catch(p=>{d(p)})})}function a(l,u,d){const p=window.grecaptcha;rS(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(m=>{u(m)}).catch(()=>{u(gw)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Ik().execute("siteKey",{action:"verify"}):new Promise((l,u)=>{i(this.auth).then(d=>{if(!t&&rS(window.grecaptcha))a(d,l,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let p=wk();p.length!==0&&(p+=d),mw(p).then(()=>{a(d,l,u)}).catch(m=>{u(m)})}}).catch(d=>{u(d)})})}}async function hS(n,e,t,i=!1,a=!1){const l=new Ok(n);let u;if(a)u=gw;else try{u=await l.verify(t)}catch{u=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function o_(n,e,t,i,a){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await hS(n,e,t,t==="getOobCode");return i(n,u)}else return i(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await hS(n,e,t,t==="getOobCode");return i(n,d)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(n,e){const t=qd(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(sa(l,e??{}))return a;Ri(a,"already-initialized")}return t.initialize({options:e})}function Dk(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Qs);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Pk(n,e,t){const i=va(n);ke(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const a=!1,l=_w(e),{host:u,port:d}=Mk(e),p=d===null?"":`:${d}`,m={url:`${l}//${u}${p}/`},v=Object.freeze({host:u,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!i._canInitEmulator){ke(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),ke(sa(m,i.config.emulator)&&sa(v,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=m,i.emulatorConfig=v,i.settings.appVerificationDisabledForTesting=!0,Lk()}function _w(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Mk(n){const e=_w(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){const l=a[1];return{host:l,port:fS(i.substr(l.length+1))}}else{const[l,u]=i.split(":");return{host:l,port:fS(u)}}}function fS(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Lk(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return $s("not implemented")}_getIdTokenResponse(e){return $s("not implemented")}_linkToIdToken(e,t){return $s("not implemented")}_getReauthenticationResolver(e){return $s("not implemented")}}async function Uk(n,e){return ya(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vk(n,e){return Xu(n,"POST","/v1/accounts:signInWithPassword",_a(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jk(n,e){return Xu(n,"POST","/v1/accounts:signInWithEmailLink",_a(n,e))}async function Bk(n,e){return Xu(n,"POST","/v1/accounts:signInWithEmailLink",_a(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu extends py{constructor(e,t,i,a=null){super("password",i),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Vu(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Vu(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return o_(e,t,"signInWithPassword",Vk);case"emailLink":return jk(e,{email:this._email,oobCode:this._password});default:Ri(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return o_(e,i,"signUpPassword",Uk);case"emailLink":return Bk(e,{idToken:t,email:this._email,oobCode:this._password});default:Ri(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cl(n,e){return Xu(n,"POST","/v1/accounts:signInWithIdp",_a(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk="http://localhost";class lo extends py{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new lo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ri("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:a}=t,l=ly(t,["providerId","signInMethod"]);if(!i||!a)return null;const u=new lo(i,a);return u.idToken=l.idToken||void 0,u.accessToken=l.accessToken||void 0,u.secret=l.secret,u.nonce=l.nonce,u.pendingToken=l.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Cl(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Cl(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Cl(e,t)}buildRequest(){const e={requestUri:Fk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ql(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zk(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Hk(n){const e=gu(_u(n)).link,t=e?gu(_u(e)).deep_link_id:null,i=gu(_u(n)).deep_link_id;return(i?gu(_u(i)).link:null)||i||t||e||n}class my{constructor(e){var t,i,a,l,u,d;const p=gu(_u(e)),m=(t=p.apiKey)!==null&&t!==void 0?t:null,v=(i=p.oobCode)!==null&&i!==void 0?i:null,S=zk((a=p.mode)!==null&&a!==void 0?a:null);ke(m&&v&&S,"argument-error"),this.apiKey=m,this.operation=S,this.code=v,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(u=p.languageCode)!==null&&u!==void 0?u:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=Hk(e);try{return new my(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(){this.providerId=Gl.PROVIDER_ID}static credential(e,t){return Vu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=my.parseLink(t);return ke(i,"argument-error"),Vu._fromEmailAndCode(e,i.code,i.tenantId)}}Gl.PROVIDER_ID="password";Gl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zu extends gy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends Zu{constructor(){super("facebook.com")}static credential(e){return lo._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $r.credential(e.oauthAccessToken)}catch{return null}}}$r.FACEBOOK_SIGN_IN_METHOD="facebook.com";$r.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks extends Zu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return lo._fromParams({providerId:Ks.PROVIDER_ID,signInMethod:Ks.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ks.credentialFromTaggedObject(e)}static credentialFromError(e){return Ks.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ks.credential(t,i)}catch{return null}}}Ks.GOOGLE_SIGN_IN_METHOD="google.com";Ks.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends Zu{constructor(){super("github.com")}static credential(e){return lo._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yr.credential(e.oauthAccessToken)}catch{return null}}}Yr.GITHUB_SIGN_IN_METHOD="github.com";Yr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends Zu{constructor(){super("twitter.com")}static credential(e,t){return lo._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Qr.credential(t,i)}catch{return null}}}Qr.TWITTER_SIGN_IN_METHOD="twitter.com";Qr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qk(n,e){return Xu(n,"POST","/v1/accounts:signUp",_a(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,a=!1){const l=await Ys._fromIdTokenResponse(e,i,a),u=dS(i);return new co({user:l,providerId:u,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const a=dS(i);return new co({user:e,providerId:a,_tokenResponse:i,operationType:t})}}function dS(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md extends _s{constructor(e,t,i,a){var l;super(t.code,t.message),this.operationType=i,this.user=a,Object.setPrototypeOf(this,md.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,a){return new md(e,t,i,a)}}function yw(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?md._fromErrorAndOperation(n,l,e,i):l})}async function Gk(n,e,t=!1){const i=await Uu(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return co._forOperation(n,"link",i)}/**
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
 */async function Wk(n,e,t=!1){const{auth:i}=n;if(jn(i.app))return Promise.reject(Zs(i));const a="reauthenticate";try{const l=await Uu(n,yw(i,a,e,n),t);ke(l.idToken,i,"internal-error");const u=fy(l.idToken);ke(u,i,"internal-error");const{sub:d}=u;return ke(n.uid===d,i,"user-mismatch"),co._forOperation(n,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Ri(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vw(n,e,t=!1){if(jn(n.app))return Promise.reject(Zs(n));const i="signIn",a=await yw(n,i,e),l=await co._fromIdTokenResponse(n,i,a);return t||await n._updateCurrentUser(l.user),l}async function Kk(n,e){return vw(va(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ew(n){const e=va(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $k(n,e,t){if(jn(n.app))return Promise.reject(Zs(n));const i=va(n),u=await o_(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",qk).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&Ew(n),p}),d=await co._fromIdTokenResponse(i,"signIn",u);return await i._updateCurrentUser(d.user),d}function Yk(n,e,t){return jn(n.app)?Promise.reject(Zs(n)):Kk(bt(n),Gl.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Ew(n),i})}function Qk(n,e,t,i){return bt(n).onIdTokenChanged(e,t,i)}function Xk(n,e,t){return bt(n).beforeAuthStateChanged(e,t)}function Zk(n,e,t,i){return bt(n).onAuthStateChanged(e,t,i)}function Tw(n){return bt(n).signOut()}const gd="__sak";/**
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
 */class Sw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gd,"1"),this.storage.removeItem(gd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=1e3,eD=10;class bw extends Sw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),a=this.localCache[t];i!==a&&e(t,a,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,p)=>{this.notifyListeners(u,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const u=this.storage.getItem(i);!t&&this.localCache[i]===u||this.notifyListeners(i,u)},l=this.storage.getItem(i);yk()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,eD):a()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Jk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}bw.type="LOCAL";const tD=bw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw extends Sw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Aw.type="SESSION";const ww=Aw;/**
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
 */function nD(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Wd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const i=new Wd(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:a,data:l}=t.data,u=this.handlersMap[a];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:a});const d=Array.from(u).map(async m=>m(t.origin,l)),p=await nD(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class iD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,u;return new Promise((d,p)=>{const m=_y("",20);a.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},i);u={messageChannel:a,onMessage(S){const b=S;if(b.data.eventId===m)switch(b.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(b.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(u),a.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[a.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(){return window}function sD(n){hs().location.href=n}/**
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
 */function Cw(){return typeof hs().WorkerGlobalScope<"u"&&typeof hs().importScripts=="function"}async function rD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aD(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function oD(){return Cw()?self:null}/**
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
 */const Rw="firebaseLocalStorageDb",lD=1,_d="firebaseLocalStorage",Iw="fbase_key";class Ju{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Kd(n,e){return n.transaction([_d],e?"readwrite":"readonly").objectStore(_d)}function cD(){const n=indexedDB.deleteDatabase(Rw);return new Ju(n).toPromise()}function l_(){const n=indexedDB.open(Rw,lD);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(_d,{keyPath:Iw})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(_d)?e(i):(i.close(),await cD(),e(await l_()))})})}async function pS(n,e,t){const i=Kd(n,!0).put({[Iw]:e,value:t});return new Ju(i).toPromise()}async function uD(n,e){const t=Kd(n,!1).get(e),i=await new Ju(t).toPromise();return i===void 0?null:i.value}function mS(n,e){const t=Kd(n,!0).delete(e);return new Ju(t).toPromise()}const hD=800,fD=3;class Nw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await l_(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>fD)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wd._getInstance(oD()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await rD(),!this.activeServiceWorker)return;this.sender=new iD(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await l_();return await pS(e,gd,"1"),await mS(e,gd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>pS(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>uD(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>mS(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Kd(a,!1).getAll();return new Ju(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)i.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!i.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nw.type="LOCAL";const dD=Nw;new Qu(3e4,6e4);/**
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
 */function xw(n,e){return e?Qs(e):(ke(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class yy extends py{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cl(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Cl(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Cl(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function pD(n){return vw(n.auth,new yy(n),n.bypassAuthState)}function mD(n){const{auth:e,user:t}=n;return ke(t,e,"internal-error"),Wk(t,new yy(n),n.bypassAuthState)}async function gD(n){const{auth:e,user:t}=n;return ke(t,e,"internal-error"),Gk(t,new yy(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e,t,i,a,l=!1){this.auth=e,this.resolver=i,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:a,tenantId:l,error:u,type:d}=e;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pD;case"linkViaPopup":case"linkViaRedirect":return gD;case"reauthViaPopup":case"reauthViaRedirect":return mD;default:Ri(this.auth,"internal-error")}}resolve(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D=new Qu(2e3,1e4);async function yD(n,e,t){if(jn(n.app))return Promise.reject(Ui(n,"operation-not-supported-in-this-environment"));const i=va(n);JO(n,e,gy);const a=xw(i,t);return new io(i,"signInViaPopup",e,a).executeNotNull()}class io extends Ow{constructor(e,t,i,a,l){super(e,t,a,l),this.provider=i,this.authWindow=null,this.pollId=null,io.currentPopupAction&&io.currentPopupAction.cancel(),io.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ke(e,this.auth,"internal-error"),e}async onExecution(){nr(this.filter.length===1,"Popup operations only handle one event");const e=_y();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ui(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ui(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,io.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ui(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_D.get())};e()}}io.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD="pendingRedirect",Jf=new Map;class ED extends Ow{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Jf.get(this.auth._key());if(!e){try{const i=await TD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Jf.set(this.auth._key(),e)}return this.bypassAuthState||Jf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TD(n,e){const t=AD(e),i=bD(n);if(!await i._isAvailable())return!1;const a=await i._get(t)==="true";return await i._remove(t),a}function SD(n,e){Jf.set(n._key(),e)}function bD(n){return Qs(n._redirectPersistence)}function AD(n){return Zf(vD,n.config.apiKey,n.name)}async function wD(n,e,t=!1){if(jn(n.app))return Promise.reject(Zs(n));const i=va(n),a=xw(i,e),u=await new ED(i,a,t).execute();return u&&!t&&(delete u.user._redirectEventId,await i._persistUserIfCurrent(u.user),await i._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD=10*60*1e3;class RD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ID(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!kw(e)){const a=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Ui(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CD&&this.cachedEventUids.clear(),this.cachedEventUids.has(gS(e))}saveEventToCache(e){this.cachedEventUids.add(gS(e)),this.lastProcessedEventTime=Date.now()}}function gS(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function kw({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ID(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kw(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ND(n,e={}){return ya(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OD=/^https?/;async function kD(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ND(n);for(const t of e)try{if(DD(t))return}catch{}Ri(n,"unauthorized-domain")}function DD(n){const e=r_(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===i}if(!OD.test(t))return!1;if(xD.test(n))return i===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}/**
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
 */const PD=new Qu(3e4,6e4);function _S(){const n=hs().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function MD(n){return new Promise((e,t)=>{var i,a,l;function u(){_S(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_S(),t(Ui(n,"network-request-failed"))},timeout:PD.get()})}if(!((a=(i=hs().gapi)===null||i===void 0?void 0:i.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=hs().gapi)===null||l===void 0)&&l.load)u();else{const d=Rk("iframefcb");return hs()[d]=()=>{gapi.load?u():t(Ui(n,"network-request-failed"))},mw(`${Ck()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw ed=null,e})}let ed=null;function LD(n){return ed=ed||MD(n),ed}/**
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
 */const UD=new Qu(5e3,15e3),VD="__/auth/iframe",jD="emulator/auth/iframe",BD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zD(n){const e=n.config;ke(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?hy(e,jD):`https://${n.config.authDomain}/${VD}`,i={apiKey:e.apiKey,appName:n.name,v:ga},a=FD.get(n.config.apiHost);a&&(i.eid=a);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${ql(i).slice(1)}`}async function HD(n){const e=await LD(n),t=hs().gapi;return ke(t,n,"internal-error"),e.open({where:document.body,url:zD(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BD,dontclear:!0},i=>new Promise(async(a,l)=>{await i.restyle({setHideOnLeave:!1});const u=Ui(n,"network-request-failed"),d=hs().setTimeout(()=>{l(u)},UD.get());function p(){hs().clearTimeout(d),a(i)}i.ping(p).then(p,()=>{l(u)})}))}/**
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
 */const qD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GD=500,WD=600,KD="_blank",$D="http://localhost";class yS{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YD(n,e,t,i=GD,a=WD){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),u=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},qD),{width:i.toString(),height:a.toString(),top:l,left:u}),m=xn().toLowerCase();t&&(d=lw(m)?KD:t),aw(m)&&(e=e||$D,p.scrollbars="yes");const v=Object.entries(p).reduce((b,[k,M])=>`${b}${k}=${M},`,"");if(_k(m)&&d!=="_self")return QD(e||"",d),new yS(null);const S=window.open(e||"",d,v);ke(S,n,"popup-blocked");try{S.focus()}catch{}return new yS(S)}function QD(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const XD="__/auth/handler",ZD="emulator/auth/handler",JD=encodeURIComponent("fac");async function vS(n,e,t,i,a,l){ke(n.config.authDomain,n,"auth-domain-config-required"),ke(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:ga,eventId:a};if(e instanceof gy){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",Jg(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,S]of Object.entries({}))u[v]=S}if(e instanceof Zu){const v=e.getScopes().filter(S=>S!=="");v.length>0&&(u.scopes=v.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await n._getAppCheckToken(),m=p?`#${JD}=${encodeURIComponent(p)}`:"";return`${e2(n)}?${ql(d).slice(1)}${m}`}function e2({config:n}){return n.emulator?hy(n,ZD):`https://${n.authDomain}/${XD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg="webStorageSupport";class t2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ww,this._completeRedirectFn=wD,this._overrideRedirectResult=SD}async _openPopup(e,t,i,a){var l;nr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const u=await vS(e,t,i,r_(),a);return YD(e,u,_y())}async _openRedirect(e,t,i,a){await this._originValidation(e);const l=await vS(e,t,i,r_(),a);return sD(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(nr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await HD(e),i=new RD(e);return t.register("authEvent",a=>(ke(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:i.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(kg,{type:kg},a=>{var l;const u=(l=a==null?void 0:a[0])===null||l===void 0?void 0:l[kg];u!==void 0&&t(!!u),Ri(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=kD(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return dw()||ow()||dy()}}const n2=t2;var ES="@firebase/auth",TS="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ke(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s2(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function r2(n){ra(new er("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=i.options;ke(u&&!u.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pw(n)},m=new bk(i,a,l,p);return Dk(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ra(new er("auth-internal",e=>{const t=va(e.getProvider("auth").getImmediate());return(i=>new i2(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ci(ES,TS,s2(n)),Ci(ES,TS,"esm2017")}/**
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
 */const a2=5*60,o2=qA("authIdTokenMaxAge")||a2;let SS=null;const l2=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>o2)return;const a=t==null?void 0:t.token;SS!==a&&(SS=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function c2(n=oy()){const e=qd(n,"auth");if(e.isInitialized())return e.getImmediate();const t=kk(n,{popupRedirectResolver:n2,persistence:[dD,tD,ww]}),i=qA("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const u=l2(l.toString());Xk(t,u,()=>u(t.currentUser)),Qk(t,d=>u(d))}}const a=FA("auth");return a&&Pk(t,`http://${a}`),t}function u2(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Ak({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=a=>{const l=Ui("internal-error");l.customData=a,t(l)},i.type="text/javascript",i.charset="UTF-8",u2().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});r2("Browser");var h2="firebase",f2="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ci(h2,f2,"app");var bS={};const AS="@firebase/database",wS="1.0.13";/**
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
 */let Dw="";function d2(n){Dw=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),gn(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Mu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return or(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new p2(e)}}catch{}return new m2},so=Pw("localStorage"),g2=Pw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl=new Hd("@firebase/database"),_2=function(){let n=1;return function(){return n++}}(),Mw=function(n){const e=zx(n),t=new Ux;t.update(e);const i=t.digest();return ny.encodeByteArray(i)},eh=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=eh.apply(null,i):typeof i=="object"?e+=gn(i):e+=i,e+=" "}return e};let Au=null,CS=!0;const y2=function(n,e){_e(!0,"Can't turn on custom loggers persistently."),Rl.logLevel=He.VERBOSE,Au=Rl.log.bind(Rl)},wn=function(...n){if(CS===!0&&(CS=!1,Au===null&&g2.get("logging_enabled")===!0&&y2()),Au){const e=eh.apply(null,n);Au(e)}},th=function(n){return function(...e){wn(n,...e)}},c_=function(...n){const e="FIREBASE INTERNAL ERROR: "+eh(...n);Rl.error(e)},uo=function(...n){const e=`FIREBASE FATAL ERROR: ${eh(...n)}`;throw Rl.error(e),new Error(e)},ni=function(...n){const e="FIREBASE WARNING: "+eh(...n);Rl.warn(e)},v2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ni("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Lw=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},E2=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},kl="[MIN_NAME]",ho="[MAX_NAME]",Wl=function(n,e){if(n===e)return 0;if(n===kl||e===ho)return-1;if(e===kl||n===ho)return 1;{const t=RS(n),i=RS(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},T2=function(n,e){return n===e?0:n<e?-1:1},ru=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+gn(e))},vy=function(n){if(typeof n!="object"||n===null)return gn(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=gn(e[i]),t+=":",t+=vy(n[e[i]]);return t+="}",t},Uw=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let a=0;a<t;a+=e)a+e>t?i.push(n.substring(a,t)):i.push(n.substring(a,a+e));return i};function Ii(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Vw=function(n){_e(!Lw(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let a,l,u,d,p;n===0?(l=0,u=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),i),l=d+i,u=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,u=Math.round(n/Math.pow(2,1-i-t))));const m=[];for(p=t;p;p-=1)m.push(u%2?1:0),u=Math.floor(u/2);for(p=e;p;p-=1)m.push(l%2?1:0),l=Math.floor(l/2);m.push(a?1:0),m.reverse();const v=m.join("");let S="";for(p=0;p<64;p+=8){let b=parseInt(v.substr(p,8),2).toString(16);b.length===1&&(b="0"+b),S=S+b}return S.toLowerCase()},S2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},b2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},A2=new RegExp("^-?(0*)\\d{1,10}$"),w2=-2147483648,C2=2147483647,RS=function(n){if(A2.test(n)){const e=Number(n);if(e>=w2&&e<=C2)return e}return null},nh=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ni("Exception was thrown by user callback.",t),e},Math.floor(0))}},R2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},wu=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class I2{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,jn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ni(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(wn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ni(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey="5",jw="v",Bw="s",Fw="r",zw="f",Hw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,qw="ls",Gw="p",u_="ac",Ww="websocket",Kw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(e,t,i,a,l=!1,u="",d=!1,p=!1,m=null){this.secure=t,this.namespace=i,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=u,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=so.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&so.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function O2(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function $w(n,e,t){_e(typeof e=="string","typeof type must == string"),_e(typeof t=="object","typeof params must == object");let i;if(e===Ww)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Kw)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);O2(n)&&(t.ns=n.namespace);const a=[];return Ii(t,(l,u)=>{a.push(l+"="+u)}),i+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(){this.counters_={}}incrementCounter(e,t=1){or(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return yx(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg={},Pg={};function Ty(n){const e=n.toString();return Dg[e]||(Dg[e]=new k2),Dg[e]}function D2(n,e){const t=n.toString();return Pg[t]||(Pg[t]=e()),Pg[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<i.length;++a)i[a]&&nh(()=>{this.onMessage_(i[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS="start",M2="close",L2="pLPCommand",U2="pRTLPCB",Yw="id",Qw="pw",Xw="ser",V2="cb",j2="seg",B2="ts",F2="d",z2="dframe",Zw=1870,Jw=30,H2=Zw-Jw,q2=25e3,G2=3e4;class Tl{constructor(e,t,i,a,l,u,d){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=a,this.authToken=l,this.transportSessionId=u,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=th(e),this.stats_=Ty(t),this.urlFn=p=>(this.appCheckToken&&(p[u_]=this.appCheckToken),$w(t,Kw,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new P2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(G2)),E2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Sy((...l)=>{const[u,d,p,m,v]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===IS)this.id=d,this.password=p;else if(u===M2)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...l)=>{const[u,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(u,d)},()=>{this.onClosed_()},this.urlFn);const i={};i[IS]="t",i[Xw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[V2]=this.scriptTagHolder.uniqueCallbackIdentifier),i[jw]=Ey,this.transportSessionId&&(i[Bw]=this.transportSessionId),this.lastSessionId&&(i[qw]=this.lastSessionId),this.applicationId&&(i[Gw]=this.applicationId),this.appCheckToken&&(i[u_]=this.appCheckToken),typeof location<"u"&&location.hostname&&Hw.test(location.hostname)&&(i[Fw]=zw);const a=this.urlFn(i);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Tl.forceAllow_=!0}static forceDisallow(){Tl.forceDisallow_=!0}static isAvailable(){return Tl.forceAllow_?!0:!Tl.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!S2()&&!b2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=gn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=jA(t),a=Uw(i,H2);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[z2]="t",i[Yw]=e,i[Qw]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=gn(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Sy{constructor(e,t,i,a){this.onDisconnect=i,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=_2(),window[L2+this.uniqueCallbackIdentifier]=e,window[U2+this.uniqueCallbackIdentifier]=t,this.myIFrame=Sy.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(d){wn("frame writing exception"),d.stack&&wn(d.stack),wn(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||wn("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Yw]=this.myID,e[Qw]=this.myPW,e[Xw]=this.currentSerial;let t=this.urlFn(e),i="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Jw+i.length<=Zw;){const u=this.pendingSegs.shift();i=i+"&"+j2+a+"="+u.seg+"&"+B2+a+"="+u.ts+"&"+F2+a+"="+u.d,a++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(i,Math.floor(q2)),l=()=>{clearTimeout(a),i()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const a=i.readyState;(!a||a==="loaded"||a==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{wn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W2=16384,K2=45e3;let yd=null;typeof MozWebSocket<"u"?yd=MozWebSocket:typeof WebSocket<"u"&&(yd=WebSocket);class Mi{constructor(e,t,i,a,l,u,d){this.connId=e,this.applicationId=i,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=th(this.connId),this.stats_=Ty(t),this.connURL=Mi.connectionURL_(t,u,d,a,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,a,l){const u={};return u[jw]=Ey,typeof location<"u"&&location.hostname&&Hw.test(location.hostname)&&(u[Fw]=zw),t&&(u[Bw]=t),i&&(u[qw]=i),a&&(u[u_]=a),l&&(u[Gw]=l),$w(e,Ww,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,so.set("previous_websocket_failure",!0);try{let i;Ix(),this.mySock=new yd(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const a=i.message||i.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const a=i.message||i.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){Mi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&yd!==null&&!Mi.forceDisallow_}static previouslyFailed(){return so.isInMemoryStorage||so.get("previous_websocket_failure")===!0}markConnectionHealthy(){so.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Mu(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(_e(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=gn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Uw(t,W2);i.length>1&&this.sendString_(String(i.length));for(let a=0;a<i.length;a++)this.sendString_(i[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(K2))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Mi.responsesRequiredToBeHealthy=2;Mi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{static get ALL_TRANSPORTS(){return[Tl,Mi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Mi&&Mi.isAvailable();let i=t&&!Mi.previouslyFailed();if(e.webSocketOnly&&(t||ni("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Mi];else{const a=this.transports_=[];for(const l of ju.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);ju.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ju.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2=6e4,Y2=5e3,Q2=10*1024,X2=100*1024,Mg="t",NS="d",Z2="s",xS="r",J2="e",OS="o",kS="a",DS="n",PS="p",eP="h";class tP{constructor(e,t,i,a,l,u,d,p,m,v){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=u,this.onReady_=d,this.onDisconnect_=p,this.onKill_=m,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=th("c:"+this.id+":"),this.transportManager_=new ju(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=wu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>X2?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Q2?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Mg in e){const t=e[Mg];t===kS?this.upgradeIfSecondaryHealthy_():t===xS?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===OS&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ru("t",e),i=ru("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:PS,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:kS,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:DS,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ru("t",e),i=ru("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ru(Mg,e);if(NS in e){const i=e[NS];if(t===eP){const a=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===DS){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Z2?this.onConnectionShutdown_(i):t===xS?this.onReset_(i):t===J2?c_("Server Error: "+i):t===OS?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):c_("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ey!==i&&ni("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),wu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor($2))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):wu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Y2))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:PS,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(so.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{put(e,t,i,a){}merge(e,t,i,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e){this.allowedEvents_=e,this.listeners_={},_e(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let a=0;a<i.length;a++)i[a].callback.apply(i[a].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const a=this.getInitialEvent(e);a&&t.apply(i,a)}off(e,t,i){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!i||i===a[l].context)){a.splice(l,1);return}}validateEventType_(e){_e(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd extends t1{static getInstance(){return new vd}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!sy()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return _e(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS=32,LS=768;class yt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[i]=this.pieces_[a],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ut(){return new yt("")}function et(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function aa(n){return n.pieces_.length-n.pieceNum_}function gt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new yt(n.pieces_,e)}function n1(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function nP(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function i1(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function s1(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new yt(e,0)}function ln(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof yt)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let a=0;a<i.length;a++)i[a].length>0&&t.push(i[a])}return new yt(t,0)}function Ye(n){return n.pieceNum_>=n.pieces_.length}function wi(n,e){const t=et(n),i=et(e);if(t===null)return e;if(t===i)return wi(gt(n),gt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function r1(n,e){if(aa(n)!==aa(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function Li(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(aa(n)>aa(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class iP{constructor(e,t){this.errorPrefix_=t,this.parts_=i1(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=zd(this.parts_[i]);a1(this)}}function sP(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=zd(e),a1(n)}function rP(n){const e=n.parts_.pop();n.byteLength_-=zd(e),n.parts_.length>0&&(n.byteLength_-=1)}function a1(n){if(n.byteLength_>LS)throw new Error(n.errorPrefix_+"has a key path longer than "+LS+" bytes ("+n.byteLength_+").");if(n.parts_.length>MS)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+MS+") or object contains a cycle "+no(n))}function no(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by extends t1{static getInstance(){return new by}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return _e(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au=1e3,aP=60*5*1e3,US=30*1e3,oP=1.3,lP=3e4,cP="server_kill",VS=3;class Js extends e1{constructor(e,t,i,a,l,u,d,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=u,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=Js.nextPersistentConnectionId_++,this.log_=th("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=au,this.maxReconnectDelay_=aP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");by.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&vd.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(gn(l)),_e(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),i&&(this.requestCBHash_[a]=i)}get(e){this.initConnection_();const t=new iy,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const d=u.d;u.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,i,a){this.initConnection_();const l=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+l),this.listens.has(u)||this.listens.set(u,new Map),_e(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),_e(!this.listens.get(u).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:i};this.listens.get(u).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+i+" for "+a);const l={p:i},u="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(u,l,d=>{const p=d.d,m=d.s;Js.warnOnListenWarnings_(p,t),(this.listens.get(i)&&this.listens.get(i).get(a))===e&&(this.log_("listen response",d),m!=="ok"&&this.removeListen_(i,a),e.onComplete&&e.onComplete(m,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&or(e,"w")){const i=Ol(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();ni(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Lx(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=US)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Mx(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,a=>{const l=a.s,u=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+a),_e(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,a)&&this.connected_&&this.sendUnlisten_(i,a,e._queryObject,t)}sendUnlisten_(e,t,i,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},u="n";a&&(l.q=i,l.t=a),this.sendRequest(u,l)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,a){const l={p:t,d:i};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,u=>{a&&setTimeout(()=>{a(u.s,u.d)},Math.floor(0))})}put(e,t,i,a){this.putInternal("p",e,t,i,a)}merge(e,t,i,a){this.putInternal("m",e,t,i,a)}putInternal(e,t,i,a,l){this.initConnection_();const u={p:t,d:i};l!==void 0&&(u.h=l),this.outstandingPuts_.push({action:e,request:u,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const l=i.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+gn(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):c_("Unrecognized action received from server: "+gn(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){_e(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=au,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=au,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>lP&&(this.reconnectDelay_=au),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*oP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+Js.nextConnectionId_++,l=this.lastSessionId;let u=!1,d=null;const p=function(){d?d.close():(u=!0,i())},m=function(S){_e(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(S)};this.realtime_={close:p,sendRequest:m};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[S,b]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);u?wn("getToken() completed but was canceled"):(wn("getToken() completed. Creating connection."),this.authToken_=S&&S.accessToken,this.appCheckToken_=b&&b.token,d=new tP(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,k=>{ni(k+" ("+this.repoInfo_.toString()+")"),this.interrupt(cP)},l))}catch(S){this.log_("Failed to get token: "+S),u||(this.repoInfo_.nodeAdmin&&ni(S),p())}}}interrupt(e){wn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){wn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Jg(this.interruptReasons_)&&(this.reconnectDelay_=au,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(l=>vy(l)).join("$"):i="default";const a=this.removeListen_(e,i);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const i=new yt(e).toString();let a;if(this.listens.has(i)){const l=this.listens.get(i);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(i)}else a=void 0;return a}onAuthRevoked_(e,t){wn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=VS&&(this.reconnectDelay_=US,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){wn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=VS&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Dw.replace(/\./g,"-")]=1,sy()?e["framework.cordova"]=1:WA()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=vd.getInstance().currentlyOnline();return Jg(this.interruptReasons_)&&e}}Js.nextPersistentConnectionId_=0;Js.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new tt(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new tt(kl,e),a=new tt(kl,t);return this.compare(i,a)!==0}minPost(){return tt.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lf;class o1 extends $d{static get __EMPTY_NODE(){return Lf}static set __EMPTY_NODE(e){Lf=e}compare(e,t){return Wl(e.name,t.name)}isDefinedOn(e){throw Hl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return tt.MIN}maxPost(){return new tt(ho,Lf)}makePost(e,t){return _e(typeof e=="string","KeyIndex indexValue must always be a string."),new tt(e,Lf)}toString(){return".key"}}const Il=new o1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uf=class{constructor(e,t,i,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?i(e.key,t):1,a&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},ei=class yu{constructor(e,t,i,a,l){this.key=e,this.value=t,this.color=i??yu.RED,this.left=a??as.EMPTY_NODE,this.right=l??as.EMPTY_NODE}copy(e,t,i,a,l){return new yu(e??this.key,t??this.value,i??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let a=this;const l=i(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,i),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,i)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return as.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,a;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return as.EMPTY_NODE;a=i.right.min_(),i=i.copy(a.key,a.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,yu.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,yu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};ei.RED=!0;ei.BLACK=!1;class uP{copy(e,t,i,a,l){return this}insert(e,t,i){return new ei(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let as=class td{constructor(e,t=td.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new td(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ei.BLACK,null,null))}remove(e){return new td(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ei.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,a=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return a?a.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(a=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Uf(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Uf(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Uf(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Uf(this.root_,null,this.comparator_,!0,e)}};as.EMPTY_NODE=new uP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(n,e){return Wl(n.name,e.name)}function Ay(n,e){return Wl(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let h_;function fP(n){h_=n}const l1=function(n){return typeof n=="number"?"number:"+Vw(n):"string:"+n},c1=function(n){if(n.isLeafNode()){const e=n.val();_e(typeof e=="string"||typeof e=="number"||typeof e=="object"&&or(e,".sv"),"Priority must be a string or number.")}else _e(n===h_||n.isEmpty(),"priority of unexpected type.");_e(n===h_||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jS;class an{static set __childrenNodeConstructor(e){jS=e}static get __childrenNodeConstructor(){return jS}constructor(e,t=an.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,_e(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),c1(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new an(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:an.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ye(e)?this:et(e)===".priority"?this.priorityNode_:an.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:an.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=et(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(_e(i!==".priority"||aa(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,an.__childrenNodeConstructor.EMPTY_NODE.updateChild(gt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+l1(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Vw(this.value_):e+=this.value_,this.lazyHash_=Mw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===an.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof an.__childrenNodeConstructor?-1:(_e(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,a=an.VALUE_TYPE_ORDER.indexOf(t),l=an.VALUE_TYPE_ORDER.indexOf(i);return _e(a>=0,"Unknown leaf type: "+t),_e(l>=0,"Unknown leaf type: "+i),a===l?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}an.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let u1,h1;function dP(n){u1=n}function pP(n){h1=n}class mP extends $d{compare(e,t){const i=e.node.getPriority(),a=t.node.getPriority(),l=i.compareTo(a);return l===0?Wl(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return tt.MIN}maxPost(){return new tt(ho,new an("[PRIORITY-POST]",h1))}makePost(e,t){const i=u1(e);return new tt(t,new an("[PRIORITY-POST]",i))}toString(){return".priority"}}const Nn=new mP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP=Math.log(2);class _P{constructor(e){const t=l=>parseInt(Math.log(l)/gP,10),i=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=i(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ed=function(n,e,t,i){n.sort(e);const a=function(p,m){const v=m-p;let S,b;if(v===0)return null;if(v===1)return S=n[p],b=t?t(S):S,new ei(b,S.node,ei.BLACK,null,null);{const k=parseInt(v/2,10)+p,M=a(p,k),W=a(k+1,m);return S=n[k],b=t?t(S):S,new ei(b,S.node,ei.BLACK,M,W)}},l=function(p){let m=null,v=null,S=n.length;const b=function(M,W){const V=S-M,F=S;S-=M;const B=a(V+1,F),K=n[V],z=t?t(K):K;k(new ei(z,K.node,W,null,B))},k=function(M){m?(m.left=M,m=M):(v=M,m=M)};for(let M=0;M<p.count;++M){const W=p.nextBitIsOne(),V=Math.pow(2,p.count-(M+1));W?b(V,ei.BLACK):(b(V,ei.BLACK),b(V,ei.RED))}return v},u=new _P(n.length),d=l(u);return new as(i||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lg;const fl={};class Xs{static get Default(){return _e(fl&&Nn,"ChildrenNode.ts has not been loaded"),Lg=Lg||new Xs({".priority":fl},{".priority":Nn}),Lg}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Ol(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof as?t:null}hasIndex(e){return or(this.indexSet_,e.toString())}addIndex(e,t){_e(e!==Il,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let a=!1;const l=t.getIterator(tt.Wrap);let u=l.getNext();for(;u;)a=a||e.isDefinedOn(u.node),i.push(u),u=l.getNext();let d;a?d=Ed(i,e.getCompare()):d=fl;const p=e.toString(),m=Object.assign({},this.indexSet_);m[p]=e;const v=Object.assign({},this.indexes_);return v[p]=d,new Xs(v,m)}addToIndexes(e,t){const i=hd(this.indexes_,(a,l)=>{const u=Ol(this.indexSet_,l);if(_e(u,"Missing index implementation for "+l),a===fl)if(u.isDefinedOn(e.node)){const d=[],p=t.getIterator(tt.Wrap);let m=p.getNext();for(;m;)m.name!==e.name&&d.push(m),m=p.getNext();return d.push(e),Ed(d,u.getCompare())}else return fl;else{const d=t.get(e.name);let p=a;return d&&(p=p.remove(new tt(e.name,d))),p.insert(e,e.node)}});return new Xs(i,this.indexSet_)}removeFromIndexes(e,t){const i=hd(this.indexes_,a=>{if(a===fl)return a;{const l=t.get(e.name);return l?a.remove(new tt(e.name,l)):a}});return new Xs(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ou;class at{static get EMPTY_NODE(){return ou||(ou=new at(new as(Ay),null,Xs.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&c1(this.priorityNode_),this.children_.isEmpty()&&_e(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ou}updatePriority(e){return this.children_.isEmpty()?this:new at(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ou:t}}getChild(e){const t=et(e);return t===null?this:this.getImmediateChild(t).getChild(gt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(_e(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new tt(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(i,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(i,this.children_));const u=a.isEmpty()?ou:this.priorityNode_;return new at(a,u,l)}}updateChild(e,t){const i=et(e);if(i===null)return t;{_e(et(e)!==".priority"||aa(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(i).updateChild(gt(e),t);return this.updateImmediateChild(i,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,a=0,l=!0;if(this.forEachChild(Nn,(u,d)=>{t[u]=d.val(e),i++,l&&at.INTEGER_REGEXP_.test(u)?a=Math.max(a,Number(u)):l=!1}),!e&&l&&a<2*i){const u=[];for(const d in t)u[d]=t[d];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+l1(this.getPriority().val())+":"),this.forEachChild(Nn,(t,i)=>{const a=i.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":Mw(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const a=this.resolveIndex_(i);if(a){const l=a.getPredecessorKey(new tt(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new tt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new tt(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,tt.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,tt.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ih?-1:0}withIndex(e){if(e===Il||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new at(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Il||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(Nn),a=t.getIterator(Nn);let l=i.getNext(),u=a.getNext();for(;l&&u;){if(l.name!==u.name||!l.node.equals(u.node))return!1;l=i.getNext(),u=a.getNext()}return l===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===Il?null:this.indexMap_.get(e.toString())}}at.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class yP extends at{constructor(){super(new as(Ay),at.EMPTY_NODE,Xs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return at.EMPTY_NODE}isEmpty(){return!1}}const ih=new yP;Object.defineProperties(tt,{MIN:{value:new tt(kl,at.EMPTY_NODE)},MAX:{value:new tt(ho,ih)}});o1.__EMPTY_NODE=at.EMPTY_NODE;an.__childrenNodeConstructor=at;fP(ih);pP(ih);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP=!0;function Cn(n,e=null){if(n===null)return at.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),_e(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new an(t,Cn(e))}if(!(n instanceof Array)&&vP){const t=[];let i=!1;if(Ii(n,(u,d)=>{if(u.substring(0,1)!=="."){const p=Cn(d);p.isEmpty()||(i=i||!p.getPriority().isEmpty(),t.push(new tt(u,p)))}}),t.length===0)return at.EMPTY_NODE;const l=Ed(t,hP,u=>u.name,Ay);if(i){const u=Ed(t,Nn.getCompare());return new at(l,Cn(e),new Xs({".priority":u},{".priority":Nn}))}else return new at(l,Cn(e),Xs.Default)}else{let t=at.EMPTY_NODE;return Ii(n,(i,a)=>{if(or(n,i)&&i.substring(0,1)!=="."){const l=Cn(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(i,l))}}),t.updatePriority(Cn(e))}}dP(Cn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP extends $d{constructor(e){super(),this.indexPath_=e,_e(!Ye(e)&&et(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),a=this.extractChild(t.node),l=i.compareTo(a);return l===0?Wl(e.name,t.name):l}makePost(e,t){const i=Cn(e),a=at.EMPTY_NODE.updateChild(this.indexPath_,i);return new tt(t,a)}maxPost(){const e=at.EMPTY_NODE.updateChild(this.indexPath_,ih);return new tt(ho,e)}toString(){return i1(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP extends $d{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Wl(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return tt.MIN}maxPost(){return tt.MAX}makePost(e,t){const i=Cn(e);return new tt(t,i)}toString(){return".value"}}const SP=new TP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bP(n){return{type:"value",snapshotNode:n}}function AP(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function wP(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function BS(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function CP(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Nn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return _e(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return _e(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:kl}hasEnd(){return this.endSet_}getIndexEndValue(){return _e(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return _e(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ho}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return _e(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Nn}copy(){const e=new wy;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function FS(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Nn?t="$priority":n.index_===SP?t="$value":n.index_===Il?t="$key":(_e(n.index_ instanceof EP,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=gn(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=gn(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+gn(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=gn(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+gn(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function zS(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Nn&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td extends e1{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(_e(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=a,this.log_=th("p:rest:"),this.listens_={}}listen(e,t,i,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const u=Td.getListenId_(e,i),d={};this.listens_[u]=d;const p=FS(e._queryParams);this.restRequest_(l+".json",p,(m,v)=>{let S=v;if(m===404&&(S=null,m=null),m===null&&this.onDataUpdate_(l,S,!1,i),Ol(this.listens_,u)===d){let b;m?m===401?b="permission_denied":b="rest_error:"+m:b="ok",a(b,null)}})}unlisten(e,t){const i=Td.getListenId_(e,t);delete this.listens_[i]}get(e){const t=FS(e._queryParams),i=e._path.toString(),a=new iy;return this.restRequest_(i+".json",t,(l,u)=>{let d=u;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(i,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ql(t);this.log_("Sending REST request for "+u);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(i&&d.readyState===4){this.log_("REST Response for "+u+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=Mu(d.responseText)}catch{ni("Failed to parse JSON response for "+u+": "+d.responseText)}i(null,p)}else d.status!==401&&d.status!==404&&ni("Got unsuccessful REST response for "+u+" Status: "+d.status),i(d.status);i=null}},d.open("GET",u,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(){this.rootNode_=at.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(){return{value:null,children:new Map}}function f1(n,e,t){if(Ye(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=et(e);n.children.has(i)||n.children.set(i,Sd());const a=n.children.get(i);e=gt(e),f1(a,e,t)}}function f_(n,e,t){n.value!==null?t(e,n.value):IP(n,(i,a)=>{const l=new yt(e.toString()+"/"+i);f_(a,l,t)})}function IP(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ii(this.last_,(i,a)=>{t[i]=t[i]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=10*1e3,xP=30*1e3,OP=5*60*1e3;class kP{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new NP(e);const i=HS+(xP-HS)*Math.random();wu(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Ii(e,(a,l)=>{l>0&&or(this.statsToReport_,a)&&(t[a]=l,i=!0)}),i&&this.server_.reportStats(t),wu(this.reportStats_.bind(this),Math.floor(Math.random()*2*OP))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var os;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(os||(os={}));function d1(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function p1(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function m1(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=os.ACK_USER_WRITE,this.source=d1()}operationForChild(e){if(Ye(this.path)){if(this.affectedTree.value!=null)return _e(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new yt(e));return new bd(ut(),t,this.revert)}}else return _e(et(this.path)===e,"operationForChild called for unrelated child."),new bd(gt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=os.OVERWRITE}operationForChild(e){return Ye(this.path)?new fo(this.source,ut(),this.snap.getImmediateChild(e)):new fo(this.source,gt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=os.MERGE}operationForChild(e){if(Ye(this.path)){const t=this.children.subtree(new yt(e));return t.isEmpty()?null:t.value?new fo(this.source,ut(),t.value):new Bu(this.source,ut(),t)}else return _e(et(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Bu(this.source,gt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ye(e))return this.isFullyInitialized()&&!this.filtered_;const t=et(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function DP(n,e,t,i){const a=[],l=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&l.push(CP(u.childName,u.snapshotNode))}),lu(n,a,"child_removed",e,i,t),lu(n,a,"child_added",e,i,t),lu(n,a,"child_moved",l,i,t),lu(n,a,"child_changed",e,i,t),lu(n,a,"value",e,i,t),a}function lu(n,e,t,i,a,l){const u=i.filter(d=>d.type===t);u.sort((d,p)=>MP(n,d,p)),u.forEach(d=>{const p=PP(n,d,l);a.forEach(m=>{m.respondsTo(d.type)&&e.push(m.createEvent(p,n.query_))})})}function PP(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function MP(n,e,t){if(e.childName==null||t.childName==null)throw Hl("Should only compare child_ events.");const i=new tt(e.childName,e.snapshotNode),a=new tt(t.childName,t.snapshotNode);return n.index_.compare(i,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g1(n,e){return{eventCache:n,serverCache:e}}function Cu(n,e,t,i){return g1(new Cy(e,t,i),n.serverCache)}function _1(n,e,t,i){return g1(n.eventCache,new Cy(e,t,i))}function d_(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function po(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ug;const LP=()=>(Ug||(Ug=new as(T2)),Ug);class mt{static fromObject(e){let t=new mt(null);return Ii(e,(i,a)=>{t=t.set(new yt(i),a)}),t}constructor(e,t=LP()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ut(),value:this.value};if(Ye(e))return null;{const i=et(e),a=this.children.get(i);if(a!==null){const l=a.findRootMostMatchingPathAndValue(gt(e),t);return l!=null?{path:ln(new yt(i),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ye(e))return this;{const t=et(e),i=this.children.get(t);return i!==null?i.subtree(gt(e)):new mt(null)}}set(e,t){if(Ye(e))return new mt(t,this.children);{const i=et(e),l=(this.children.get(i)||new mt(null)).set(gt(e),t),u=this.children.insert(i,l);return new mt(this.value,u)}}remove(e){if(Ye(e))return this.children.isEmpty()?new mt(null):new mt(null,this.children);{const t=et(e),i=this.children.get(t);if(i){const a=i.remove(gt(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new mt(null):new mt(this.value,l)}else return this}}get(e){if(Ye(e))return this.value;{const t=et(e),i=this.children.get(t);return i?i.get(gt(e)):null}}setTree(e,t){if(Ye(e))return t;{const i=et(e),l=(this.children.get(i)||new mt(null)).setTree(gt(e),t);let u;return l.isEmpty()?u=this.children.remove(i):u=this.children.insert(i,l),new mt(this.value,u)}}fold(e){return this.fold_(ut(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((a,l)=>{i[a]=l.fold_(ln(e,a),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,ut(),t)}findOnPath_(e,t,i){const a=this.value?i(t,this.value):!1;if(a)return a;if(Ye(e))return null;{const l=et(e),u=this.children.get(l);return u?u.findOnPath_(gt(e),ln(t,l),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ut(),t)}foreachOnPath_(e,t,i){if(Ye(e))return this;{this.value&&i(t,this.value);const a=et(e),l=this.children.get(a);return l?l.foreachOnPath_(gt(e),ln(t,a),i):new mt(null)}}foreach(e){this.foreach_(ut(),e)}foreach_(e,t){this.children.inorderTraversal((i,a)=>{a.foreach_(ln(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.writeTree_=e}static empty(){return new Vi(new mt(null))}}function Ru(n,e,t){if(Ye(e))return new Vi(new mt(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const a=i.path;let l=i.value;const u=wi(a,e);return l=l.updateChild(u,t),new Vi(n.writeTree_.set(a,l))}else{const a=new mt(t),l=n.writeTree_.setTree(e,a);return new Vi(l)}}}function qS(n,e,t){let i=n;return Ii(t,(a,l)=>{i=Ru(i,ln(e,a),l)}),i}function GS(n,e){if(Ye(e))return Vi.empty();{const t=n.writeTree_.setTree(e,new mt(null));return new Vi(t)}}function p_(n,e){return To(n,e)!=null}function To(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(wi(t.path,e)):null}function WS(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Nn,(i,a)=>{e.push(new tt(i,a))}):n.writeTree_.children.inorderTraversal((i,a)=>{a.value!=null&&e.push(new tt(i,a.value))}),e}function ta(n,e){if(Ye(e))return n;{const t=To(n,e);return t!=null?new Vi(new mt(t)):new Vi(n.writeTree_.subtree(e))}}function m_(n){return n.writeTree_.isEmpty()}function Dl(n,e){return y1(ut(),n.writeTree_,e)}function y1(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(_e(l.value!==null,"Priority writes must always be leaf nodes"),i=l.value):t=y1(ln(n,a),l,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(ln(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v1(n,e){return A1(e,n)}function UP(n,e,t,i,a){_e(i>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:a}),a&&(n.visibleWrites=Ru(n.visibleWrites,e,t)),n.lastWriteId=i}function VP(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function jP(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);_e(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let a=i.visible,l=!1,u=n.allWrites.length-1;for(;a&&u>=0;){const d=n.allWrites[u];d.visible&&(u>=t&&BP(d,i.path)?a=!1:Li(i.path,d.path)&&(l=!0)),u--}if(a){if(l)return FP(n),!0;if(i.snap)n.visibleWrites=GS(n.visibleWrites,i.path);else{const d=i.children;Ii(d,p=>{n.visibleWrites=GS(n.visibleWrites,ln(i.path,p))})}return!0}else return!1}function BP(n,e){if(n.snap)return Li(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Li(ln(n.path,t),e))return!0;return!1}function FP(n){n.visibleWrites=E1(n.allWrites,zP,ut()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function zP(n){return n.visible}function E1(n,e,t){let i=Vi.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const u=l.path;let d;if(l.snap)Li(t,u)?(d=wi(t,u),i=Ru(i,d,l.snap)):Li(u,t)&&(d=wi(u,t),i=Ru(i,ut(),l.snap.getChild(d)));else if(l.children){if(Li(t,u))d=wi(t,u),i=qS(i,d,l.children);else if(Li(u,t))if(d=wi(u,t),Ye(d))i=qS(i,ut(),l.children);else{const p=Ol(l.children,et(d));if(p){const m=p.getChild(gt(d));i=Ru(i,ut(),m)}}}else throw Hl("WriteRecord should have .snap or .children")}}return i}function T1(n,e,t,i,a){if(!i&&!a){const l=To(n.visibleWrites,e);if(l!=null)return l;{const u=ta(n.visibleWrites,e);if(m_(u))return t;if(t==null&&!p_(u,ut()))return null;{const d=t||at.EMPTY_NODE;return Dl(u,d)}}}else{const l=ta(n.visibleWrites,e);if(!a&&m_(l))return t;if(!a&&t==null&&!p_(l,ut()))return null;{const u=function(m){return(m.visible||a)&&(!i||!~i.indexOf(m.writeId))&&(Li(m.path,e)||Li(e,m.path))},d=E1(n.allWrites,u,e),p=t||at.EMPTY_NODE;return Dl(d,p)}}}function HP(n,e,t){let i=at.EMPTY_NODE;const a=To(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(Nn,(l,u)=>{i=i.updateImmediateChild(l,u)}),i;if(t){const l=ta(n.visibleWrites,e);return t.forEachChild(Nn,(u,d)=>{const p=Dl(ta(l,new yt(u)),d);i=i.updateImmediateChild(u,p)}),WS(l).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}else{const l=ta(n.visibleWrites,e);return WS(l).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}}function qP(n,e,t,i,a){_e(i||a,"Either existingEventSnap or existingServerSnap must exist");const l=ln(e,t);if(p_(n.visibleWrites,l))return null;{const u=ta(n.visibleWrites,l);return m_(u)?a.getChild(t):Dl(u,a.getChild(t))}}function GP(n,e,t,i){const a=ln(e,t),l=To(n.visibleWrites,a);if(l!=null)return l;if(i.isCompleteForChild(t)){const u=ta(n.visibleWrites,a);return Dl(u,i.getNode().getImmediateChild(t))}else return null}function WP(n,e){return To(n.visibleWrites,e)}function KP(n,e,t,i,a,l,u){let d;const p=ta(n.visibleWrites,e),m=To(p,ut());if(m!=null)d=m;else if(t!=null)d=Dl(p,t);else return[];if(d=d.withIndex(u),!d.isEmpty()&&!d.isLeafNode()){const v=[],S=u.getCompare(),b=l?d.getReverseIteratorFrom(i,u):d.getIteratorFrom(i,u);let k=b.getNext();for(;k&&v.length<a;)S(k,i)!==0&&v.push(k),k=b.getNext();return v}else return[]}function $P(){return{visibleWrites:Vi.empty(),allWrites:[],lastWriteId:-1}}function g_(n,e,t,i){return T1(n.writeTree,n.treePath,e,t,i)}function S1(n,e){return HP(n.writeTree,n.treePath,e)}function KS(n,e,t,i){return qP(n.writeTree,n.treePath,e,t,i)}function Ad(n,e){return WP(n.writeTree,ln(n.treePath,e))}function YP(n,e,t,i,a,l){return KP(n.writeTree,n.treePath,e,t,i,a,l)}function Ry(n,e,t){return GP(n.writeTree,n.treePath,e,t)}function b1(n,e){return A1(ln(n.treePath,e),n.writeTree)}function A1(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;_e(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),_e(i!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(i);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(i,BS(i,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(i,wP(i,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(i,AP(i,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(i,BS(i,e.snapshotNode,a.oldSnap));else throw Hl("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const w1=new XP;class Iy{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Cy(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ry(this.writes_,e,i)}}getChildAfterChild(e,t,i){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:po(this.viewCache_),l=YP(this.writes_,a,t,1,i,e);return l.length===0?null:l[0]}}function ZP(n,e){_e(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),_e(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function JP(n,e,t,i,a){const l=new QP;let u,d;if(t.type===os.OVERWRITE){const m=t;m.source.fromUser?u=__(n,e,m.path,m.snap,i,a,l):(_e(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered()&&!Ye(m.path),u=wd(n,e,m.path,m.snap,i,a,d,l))}else if(t.type===os.MERGE){const m=t;m.source.fromUser?u=tM(n,e,m.path,m.children,i,a,l):(_e(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered(),u=y_(n,e,m.path,m.children,i,a,d,l))}else if(t.type===os.ACK_USER_WRITE){const m=t;m.revert?u=sM(n,e,m.path,i,a,l):u=nM(n,e,m.path,m.affectedTree,i,a,l)}else if(t.type===os.LISTEN_COMPLETE)u=iM(n,e,t.path,i,l);else throw Hl("Unknown operation type: "+t.type);const p=l.getChanges();return eM(e,u,p),{viewCache:u,changes:p}}function eM(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const a=i.getNode().isLeafNode()||i.getNode().isEmpty(),l=d_(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!i.getNode().equals(l)||!i.getNode().getPriority().equals(l.getPriority()))&&t.push(bP(d_(e)))}}function C1(n,e,t,i,a,l){const u=e.eventCache;if(Ad(i,t)!=null)return e;{let d,p;if(Ye(t))if(_e(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=po(e),v=m instanceof at?m:at.EMPTY_NODE,S=S1(i,v);d=n.filter.updateFullNode(e.eventCache.getNode(),S,l)}else{const m=g_(i,po(e));d=n.filter.updateFullNode(e.eventCache.getNode(),m,l)}else{const m=et(t);if(m===".priority"){_e(aa(t)===1,"Can't have a priority with additional path components");const v=u.getNode();p=e.serverCache.getNode();const S=KS(i,t,v,p);S!=null?d=n.filter.updatePriority(v,S):d=u.getNode()}else{const v=gt(t);let S;if(u.isCompleteForChild(m)){p=e.serverCache.getNode();const b=KS(i,t,u.getNode(),p);b!=null?S=u.getNode().getImmediateChild(m).updateChild(v,b):S=u.getNode().getImmediateChild(m)}else S=Ry(i,m,e.serverCache);S!=null?d=n.filter.updateChild(u.getNode(),m,S,v,a,l):d=u.getNode()}}return Cu(e,d,u.isFullyInitialized()||Ye(t),n.filter.filtersNodes())}}function wd(n,e,t,i,a,l,u,d){const p=e.serverCache;let m;const v=u?n.filter:n.filter.getIndexedFilter();if(Ye(t))m=v.updateFullNode(p.getNode(),i,null);else if(v.filtersNodes()&&!p.isFiltered()){const k=p.getNode().updateChild(t,i);m=v.updateFullNode(p.getNode(),k,null)}else{const k=et(t);if(!p.isCompleteForPath(t)&&aa(t)>1)return e;const M=gt(t),V=p.getNode().getImmediateChild(k).updateChild(M,i);k===".priority"?m=v.updatePriority(p.getNode(),V):m=v.updateChild(p.getNode(),k,V,M,w1,null)}const S=_1(e,m,p.isFullyInitialized()||Ye(t),v.filtersNodes()),b=new Iy(a,S,l);return C1(n,S,t,a,b,d)}function __(n,e,t,i,a,l,u){const d=e.eventCache;let p,m;const v=new Iy(a,e,l);if(Ye(t))m=n.filter.updateFullNode(e.eventCache.getNode(),i,u),p=Cu(e,m,!0,n.filter.filtersNodes());else{const S=et(t);if(S===".priority")m=n.filter.updatePriority(e.eventCache.getNode(),i),p=Cu(e,m,d.isFullyInitialized(),d.isFiltered());else{const b=gt(t),k=d.getNode().getImmediateChild(S);let M;if(Ye(b))M=i;else{const W=v.getCompleteChild(S);W!=null?n1(b)===".priority"&&W.getChild(s1(b)).isEmpty()?M=W:M=W.updateChild(b,i):M=at.EMPTY_NODE}if(k.equals(M))p=e;else{const W=n.filter.updateChild(d.getNode(),S,M,b,v,u);p=Cu(e,W,d.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function $S(n,e){return n.eventCache.isCompleteForChild(e)}function tM(n,e,t,i,a,l,u){let d=e;return i.foreach((p,m)=>{const v=ln(t,p);$S(e,et(v))&&(d=__(n,d,v,m,a,l,u))}),i.foreach((p,m)=>{const v=ln(t,p);$S(e,et(v))||(d=__(n,d,v,m,a,l,u))}),d}function YS(n,e,t){return t.foreach((i,a)=>{e=e.updateChild(i,a)}),e}function y_(n,e,t,i,a,l,u,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,m;Ye(t)?m=i:m=new mt(null).setTree(t,i);const v=e.serverCache.getNode();return m.children.inorderTraversal((S,b)=>{if(v.hasChild(S)){const k=e.serverCache.getNode().getImmediateChild(S),M=YS(n,k,b);p=wd(n,p,new yt(S),M,a,l,u,d)}}),m.children.inorderTraversal((S,b)=>{const k=!e.serverCache.isCompleteForChild(S)&&b.value===null;if(!v.hasChild(S)&&!k){const M=e.serverCache.getNode().getImmediateChild(S),W=YS(n,M,b);p=wd(n,p,new yt(S),W,a,l,u,d)}}),p}function nM(n,e,t,i,a,l,u){if(Ad(a,t)!=null)return e;const d=e.serverCache.isFiltered(),p=e.serverCache;if(i.value!=null){if(Ye(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return wd(n,e,t,p.getNode().getChild(t),a,l,d,u);if(Ye(t)){let m=new mt(null);return p.getNode().forEachChild(Il,(v,S)=>{m=m.set(new yt(v),S)}),y_(n,e,t,m,a,l,d,u)}else return e}else{let m=new mt(null);return i.foreach((v,S)=>{const b=ln(t,v);p.isCompleteForPath(b)&&(m=m.set(v,p.getNode().getChild(b)))}),y_(n,e,t,m,a,l,d,u)}}function iM(n,e,t,i,a){const l=e.serverCache,u=_1(e,l.getNode(),l.isFullyInitialized()||Ye(t),l.isFiltered());return C1(n,u,t,i,w1,a)}function sM(n,e,t,i,a,l){let u;if(Ad(i,t)!=null)return e;{const d=new Iy(i,e,a),p=e.eventCache.getNode();let m;if(Ye(t)||et(t)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=g_(i,po(e));else{const S=e.serverCache.getNode();_e(S instanceof at,"serverChildren would be complete if leaf node"),v=S1(i,S)}v=v,m=n.filter.updateFullNode(p,v,l)}else{const v=et(t);let S=Ry(i,v,e.serverCache);S==null&&e.serverCache.isCompleteForChild(v)&&(S=p.getImmediateChild(v)),S!=null?m=n.filter.updateChild(p,v,S,gt(t),d,l):e.eventCache.getNode().hasChild(v)?m=n.filter.updateChild(p,v,at.EMPTY_NODE,gt(t),d,l):m=p,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=g_(i,po(e)),u.isLeafNode()&&(m=n.filter.updateFullNode(m,u,l)))}return u=e.serverCache.isFullyInitialized()||Ad(i,ut())!=null,Cu(e,m,u,n.filter.filtersNodes())}}function rM(n,e){const t=po(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Ye(e)&&!t.getImmediateChild(et(e)).isEmpty())?t.getChild(e):null}function QS(n,e,t,i){e.type===os.MERGE&&e.source.queryId!==null&&(_e(po(n.viewCache_),"We should always have a full cache before handling merges"),_e(d_(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=JP(n.processor_,a,e,t,i);return ZP(n.processor_,l.viewCache),_e(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,aM(n,l.changes,l.viewCache.eventCache.getNode())}function aM(n,e,t,i){const a=n.eventRegistrations_;return DP(n.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let XS;function oM(n){_e(!XS,"__referenceConstructor has already been defined"),XS=n}function Ny(n,e,t,i){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return _e(l!=null,"SyncTree gave us an op for an invalid query."),QS(l,e,t,i)}else{let l=[];for(const u of n.views.values())l=l.concat(QS(u,e,t,i));return l}}function xy(n,e){let t=null;for(const i of n.views.values())t=t||rM(i,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ZS;function lM(n){_e(!ZS,"__referenceConstructor has already been defined"),ZS=n}class JS{constructor(e){this.listenProvider_=e,this.syncPointTree_=new mt(null),this.pendingWriteTree_=$P(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function cM(n,e,t,i,a){return UP(n.pendingWriteTree_,e,t,i,a),a?Qd(n,new fo(d1(),e,t)):[]}function Sl(n,e,t=!1){const i=VP(n.pendingWriteTree_,e);if(jP(n.pendingWriteTree_,e)){let l=new mt(null);return i.snap!=null?l=l.set(ut(),!0):Ii(i.children,u=>{l=l.set(new yt(u),!0)}),Qd(n,new bd(i.path,l,t))}else return[]}function Yd(n,e,t){return Qd(n,new fo(p1(),e,t))}function uM(n,e,t){const i=mt.fromObject(t);return Qd(n,new Bu(p1(),e,i))}function hM(n,e,t,i){const a=x1(n,i);if(a!=null){const l=O1(a),u=l.path,d=l.queryId,p=wi(u,e),m=new fo(m1(d),p,t);return k1(n,u,m)}else return[]}function fM(n,e,t,i){const a=x1(n,i);if(a){const l=O1(a),u=l.path,d=l.queryId,p=wi(u,e),m=mt.fromObject(t),v=new Bu(m1(d),p,m);return k1(n,u,v)}else return[]}function R1(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(u,d)=>{const p=wi(u,e),m=xy(d,p);if(m)return m});return T1(a,e,l,t,!0)}function Qd(n,e){return I1(e,n.syncPointTree_,null,v1(n.pendingWriteTree_,ut()))}function I1(n,e,t,i){if(Ye(n.path))return N1(n,e,t,i);{const a=e.get(ut());t==null&&a!=null&&(t=xy(a,ut()));let l=[];const u=et(n.path),d=n.operationForChild(u),p=e.children.get(u);if(p&&d){const m=t?t.getImmediateChild(u):null,v=b1(i,u);l=l.concat(I1(d,p,m,v))}return a&&(l=l.concat(Ny(a,n,i,t))),l}}function N1(n,e,t,i){const a=e.get(ut());t==null&&a!=null&&(t=xy(a,ut()));let l=[];return e.children.inorderTraversal((u,d)=>{const p=t?t.getImmediateChild(u):null,m=b1(i,u),v=n.operationForChild(u);v&&(l=l.concat(N1(v,d,p,m)))}),a&&(l=l.concat(Ny(a,n,i,t))),l}function x1(n,e){return n.tagToQueryMap.get(e)}function O1(n){const e=n.indexOf("$");return _e(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new yt(n.substr(0,e))}}function k1(n,e,t){const i=n.syncPointTree_.get(e);_e(i,"Missing sync point for query tag that we're tracking");const a=v1(n.pendingWriteTree_,e);return Ny(i,t,a,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Oy(t)}node(){return this.node_}}class ky{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ln(this.path_,e);return new ky(this.syncTree_,t)}node(){return R1(this.syncTree_,this.path_)}}const dM=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},eb=function(n,e,t){if(!n||typeof n!="object")return n;if(_e(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return pM(n[".sv"],e,t);if(typeof n[".sv"]=="object")return mM(n[".sv"],e);_e(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},pM=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:_e(!1,"Unexpected server value: "+n)}},mM=function(n,e,t){n.hasOwnProperty("increment")||_e(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&_e(!1,"Unexpected increment value: "+i);const a=e.node();if(_e(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return i;const u=a.getValue();return typeof u!="number"?i:u+i},gM=function(n,e,t,i){return Dy(e,new ky(t,n),i)},_M=function(n,e,t){return Dy(n,new Oy(e),t)};function Dy(n,e,t){const i=n.getPriority().val(),a=eb(i,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const u=n,d=eb(u.getValue(),e,t);return d!==u.getValue()||a!==u.getPriority().val()?new an(d,Cn(a)):n}else{const u=n;return l=u,a!==u.getPriority().val()&&(l=l.updatePriority(new an(a))),u.forEachChild(Nn,(d,p)=>{const m=Dy(p,e.getImmediateChild(d),t);m!==p&&(l=l.updateImmediateChild(d,m))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function My(n,e){let t=e instanceof yt?e:new yt(e),i=n,a=et(t);for(;a!==null;){const l=Ol(i.node.children,a)||{children:{},childCount:0};i=new Py(a,i,l),t=gt(t),a=et(t)}return i}function Kl(n){return n.node.value}function D1(n,e){n.node.value=e,v_(n)}function P1(n){return n.node.childCount>0}function yM(n){return Kl(n)===void 0&&!P1(n)}function Xd(n,e){Ii(n.node.children,(t,i)=>{e(new Py(t,n,i))})}function M1(n,e,t,i){t&&e(n),Xd(n,a=>{M1(a,e,!0)})}function vM(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function sh(n){return new yt(n.parent===null?n.name:sh(n.parent)+"/"+n.name)}function v_(n){n.parent!==null&&EM(n.parent,n.name,n)}function EM(n,e,t){const i=yM(t),a=or(n.node.children,e);i&&a?(delete n.node.children[e],n.node.childCount--,v_(n)):!i&&!a&&(n.node.children[e]=t.node,n.node.childCount++,v_(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TM=/[\[\].#$\/\u0000-\u001F\u007F]/,SM=/[\[\].#$\u0000-\u001F\u007F]/,Vg=10*1024*1024,L1=function(n){return typeof n=="string"&&n.length!==0&&!TM.test(n)},bM=function(n){return typeof n=="string"&&n.length!==0&&!SM.test(n)},AM=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),bM(n)},U1=function(n,e,t){const i=t instanceof yt?new iP(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+no(i));if(typeof e=="function")throw new Error(n+"contains a function "+no(i)+" with contents = "+e.toString());if(Lw(e))throw new Error(n+"contains "+e.toString()+" "+no(i));if(typeof e=="string"&&e.length>Vg/3&&zd(e)>Vg)throw new Error(n+"contains a string greater than "+Vg+" utf8 bytes "+no(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(Ii(e,(u,d)=>{if(u===".value")a=!0;else if(u!==".priority"&&u!==".sv"&&(l=!0,!L1(u)))throw new Error(n+" contains an invalid key ("+u+") "+no(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);sP(i,u),U1(n,d,i),rP(i)}),a&&l)throw new Error(n+' contains ".value" child '+no(i)+" in addition to actual children.")}},wM=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!L1(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!AM(t))throw new Error(Fx(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function RM(n,e){let t=null;for(let i=0;i<e.length;i++){const a=e[i],l=a.getPath();t!==null&&!r1(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function So(n,e,t){RM(n,t),IM(n,i=>Li(i,e)||Li(e,i))}function IM(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const a=n.eventLists_[i];if(a){const l=a.path;e(l)?(NM(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function NM(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Au&&wn("event: "+t.toString()),nh(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xM="repo_interrupt",OM=25;class kM{constructor(e,t,i,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new CM,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Sd(),this.transactionQueueTree_=new Py,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function DM(n,e,t){if(n.stats_=Ty(n.repoInfo_),n.forceRestClient_||R2())n.server_=new Td(n.repoInfo_,(i,a,l,u)=>{tb(n,i,a,l,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>nb(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{gn(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Js(n.repoInfo_,e,(i,a,l,u)=>{tb(n,i,a,l,u)},i=>{nb(n,i)},i=>{MM(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=D2(n.repoInfo_,()=>new kP(n.stats_,n.server_)),n.infoData_=new RP,n.infoSyncTree_=new JS({startListening:(i,a,l,u)=>{let d=[];const p=n.infoData_.getNode(i._path);return p.isEmpty()||(d=Yd(n.infoSyncTree_,i._path,p),setTimeout(()=>{u("ok")},0)),d},stopListening:()=>{}}),Ly(n,"connected",!1),n.serverSyncTree_=new JS({startListening:(i,a,l,u)=>(n.server_.listen(i,l,a,(d,p)=>{const m=u(d,p);So(n.eventQueue_,i._path,m)}),[]),stopListening:(i,a)=>{n.server_.unlisten(i,a)}})}function PM(n){const t=n.infoData_.getNode(new yt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function V1(n){return dM({timestamp:PM(n)})}function tb(n,e,t,i,a){n.dataUpdateCount++;const l=new yt(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(a)if(i){const p=hd(t,m=>Cn(m));u=fM(n.serverSyncTree_,l,p,a)}else{const p=Cn(t);u=hM(n.serverSyncTree_,l,p,a)}else if(i){const p=hd(t,m=>Cn(m));u=uM(n.serverSyncTree_,l,p)}else{const p=Cn(t);u=Yd(n.serverSyncTree_,l,p)}let d=l;u.length>0&&(d=Vy(n,l)),So(n.eventQueue_,d,u)}function nb(n,e){Ly(n,"connected",e),e===!1&&UM(n)}function MM(n,e){Ii(e,(t,i)=>{Ly(n,t,i)})}function Ly(n,e,t){const i=new yt("/.info/"+e),a=Cn(t);n.infoData_.updateSnapshot(i,a);const l=Yd(n.infoSyncTree_,i,a);So(n.eventQueue_,i,l)}function LM(n){return n.nextWriteId_++}function UM(n){j1(n,"onDisconnectEvents");const e=V1(n),t=Sd();f_(n.onDisconnect_,ut(),(a,l)=>{const u=gM(a,l,n.serverSyncTree_,e);f1(t,a,u)});let i=[];f_(t,ut(),(a,l)=>{i=i.concat(Yd(n.serverSyncTree_,a,l));const u=FM(n,a);Vy(n,u)}),n.onDisconnect_=Sd(),So(n.eventQueue_,ut(),i)}function VM(n){n.persistentConnection_&&n.persistentConnection_.interrupt(xM)}function j1(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),wn(t,...e)}function B1(n,e,t){return R1(n.serverSyncTree_,e,t)||at.EMPTY_NODE}function Uy(n,e=n.transactionQueueTree_){if(e||Zd(n,e),Kl(e)){const t=z1(n,e);_e(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&jM(n,sh(e),t)}else P1(e)&&Xd(e,t=>{Uy(n,t)})}function jM(n,e,t){const i=t.map(m=>m.currentWriteId),a=B1(n,e,i);let l=a;const u=a.hash();for(let m=0;m<t.length;m++){const v=t[m];_e(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const S=wi(e,v.path);l=l.updateChild(S,v.currentOutputSnapshotRaw)}const d=l.val(!0),p=e;n.server_.put(p.toString(),d,m=>{j1(n,"transaction put response",{path:p.toString(),status:m});let v=[];if(m==="ok"){const S=[];for(let b=0;b<t.length;b++)t[b].status=2,v=v.concat(Sl(n.serverSyncTree_,t[b].currentWriteId)),t[b].onComplete&&S.push(()=>t[b].onComplete(null,!0,t[b].currentOutputSnapshotResolved)),t[b].unwatcher();Zd(n,My(n.transactionQueueTree_,e)),Uy(n,n.transactionQueueTree_),So(n.eventQueue_,e,v);for(let b=0;b<S.length;b++)nh(S[b])}else{if(m==="datastale")for(let S=0;S<t.length;S++)t[S].status===3?t[S].status=4:t[S].status=0;else{ni("transaction at "+p.toString()+" failed: "+m);for(let S=0;S<t.length;S++)t[S].status=4,t[S].abortReason=m}Vy(n,e)}},u)}function Vy(n,e){const t=F1(n,e),i=sh(t),a=z1(n,t);return BM(n,a,i),i}function BM(n,e,t){if(e.length===0)return;const i=[];let a=[];const u=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const p=e[d],m=wi(t,p.path);let v=!1,S;if(_e(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)v=!0,S=p.abortReason,a=a.concat(Sl(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=OM)v=!0,S="maxretry",a=a.concat(Sl(n.serverSyncTree_,p.currentWriteId,!0));else{const b=B1(n,p.path,u);p.currentInputSnapshot=b;const k=e[d].update(b.val());if(k!==void 0){U1("transaction failed: Data returned ",k,p.path);let M=Cn(k);typeof k=="object"&&k!=null&&or(k,".priority")||(M=M.updatePriority(b.getPriority()));const V=p.currentWriteId,F=V1(n),B=_M(M,b,F);p.currentOutputSnapshotRaw=M,p.currentOutputSnapshotResolved=B,p.currentWriteId=LM(n),u.splice(u.indexOf(V),1),a=a.concat(cM(n.serverSyncTree_,p.path,B,p.currentWriteId,p.applyLocally)),a=a.concat(Sl(n.serverSyncTree_,V,!0))}else v=!0,S="nodata",a=a.concat(Sl(n.serverSyncTree_,p.currentWriteId,!0))}So(n.eventQueue_,t,a),a=[],v&&(e[d].status=2,function(b){setTimeout(b,Math.floor(0))}(e[d].unwatcher),e[d].onComplete&&(S==="nodata"?i.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):i.push(()=>e[d].onComplete(new Error(S),!1,null))))}Zd(n,n.transactionQueueTree_);for(let d=0;d<i.length;d++)nh(i[d]);Uy(n,n.transactionQueueTree_)}function F1(n,e){let t,i=n.transactionQueueTree_;for(t=et(e);t!==null&&Kl(i)===void 0;)i=My(i,t),e=gt(e),t=et(e);return i}function z1(n,e){const t=[];return H1(n,e,t),t.sort((i,a)=>i.order-a.order),t}function H1(n,e,t){const i=Kl(e);if(i)for(let a=0;a<i.length;a++)t.push(i[a]);Xd(e,a=>{H1(n,a,t)})}function Zd(n,e){const t=Kl(e);if(t){let i=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[i]=t[a],i++);t.length=i,D1(e,t.length>0?t:void 0)}Xd(e,i=>{Zd(n,i)})}function FM(n,e){const t=sh(F1(n,e)),i=My(n.transactionQueueTree_,e);return vM(i,a=>{jg(n,a)}),jg(n,i),M1(i,a=>{jg(n,a)}),t}function jg(n,e){const t=Kl(e);if(t){const i=[];let a=[],l=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(_e(l===u-1,"All SENT items should be at beginning of queue."),l=u,t[u].status=3,t[u].abortReason="set"):(_e(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),a=a.concat(Sl(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&i.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));l===-1?D1(e,void 0):t.length=l+1,So(n.eventQueue_,sh(e),a);for(let u=0;u<i.length;u++)nh(i[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zM(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let a=t[i];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function HM(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ni(`Invalid query segment '${t}' in query '${n}'`)}return e}const ib=function(n,e){const t=qM(n),i=t.namespace;t.domain==="firebase.com"&&uo(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&uo("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||v2();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new x2(t.host,t.secure,i,a,e,"",i!==t.subdomain),path:new yt(t.pathString)}},qM=function(n){let e="",t="",i="",a="",l="",u=!0,d="https",p=443;if(typeof n=="string"){let m=n.indexOf("//");m>=0&&(d=n.substring(0,m-1),n=n.substring(m+2));let v=n.indexOf("/");v===-1&&(v=n.length);let S=n.indexOf("?");S===-1&&(S=n.length),e=n.substring(0,Math.min(v,S)),v<S&&(a=zM(n.substring(v,S)));const b=HM(n.substring(Math.min(n.length,S)));m=e.indexOf(":"),m>=0?(u=d==="https"||d==="wss",p=parseInt(e.substring(m+1),10)):m=e.length;const k=e.slice(0,m);if(k.toLowerCase()==="localhost")t="localhost";else if(k.split(".").length<=2)t=k;else{const M=e.indexOf(".");i=e.substring(0,M).toLowerCase(),t=e.substring(M+1),l=i}"ns"in b&&(l=b.ns)}return{host:e,port:p,domain:t,subdomain:i,secure:u,scheme:d,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,t,i,a){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=a}get key(){return Ye(this._path)?null:n1(this._path)}get ref(){return new $l(this._repo,this._path)}get _queryIdentifier(){const e=zS(this._queryParams),t=vy(e);return t==="{}"?"default":t}get _queryObject(){return zS(this._queryParams)}isEqual(e){if(e=bt(e),!(e instanceof jy))return!1;const t=this._repo===e._repo,i=r1(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&i&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+nP(this._path)}}class $l extends jy{constructor(e,t){super(e,t,new wy,!1)}get parent(){const e=s1(this._path);return e===null?null:new $l(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}oM($l);lM($l);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GM="FIREBASE_DATABASE_EMULATOR_HOST",E_={};let WM=!1;function KM(n,e,t,i,a){let l=i||n.options.databaseURL;l===void 0&&(n.options.projectId||uo("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),wn("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=ib(l,a),d=u.repoInfo,p;typeof process<"u"&&bS&&(p=bS[GM]),p?(l=`http://${p}?ns=${d.namespace}`,u=ib(l,a),d=u.repoInfo):u.repoInfo.secure;const m=new N2(n.name,n.options,e);wM("Invalid Firebase Database URL",u),Ye(u.path)||uo("Database URL must point to the root of a Firebase Database (not including a child path).");const v=YM(d,n,m,new I2(n,t));return new QM(v,n)}function $M(n,e){const t=E_[e];(!t||t[n.key]!==n)&&uo(`Database ${e}(${n.repoInfo_}) has already been deleted.`),VM(n),delete t[n.key]}function YM(n,e,t,i){let a=E_[e.name];a||(a={},E_[e.name]=a);let l=a[n.toURLString()];return l&&uo("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new kM(n,WM,t,i),a[n.toURLString()]=l,l}class QM{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(DM(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new $l(this._repo,ut())),this._rootInternal}_delete(){return this._rootInternal!==null&&($M(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&uo("Cannot call "+e+" on a deleted database.")}}/**
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
 */function XM(n){d2(ga),ra(new er("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return KM(i,a,l,t)},"PUBLIC").setMultipleInstances(!0)),Ci(AS,wS,n),Ci(AS,wS,"esm2017")}Js.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Js.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};XM();var sb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var na,q1;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,R){function I(){}I.prototype=R.prototype,P.D=R.prototype,P.prototype=new I,P.prototype.constructor=P,P.C=function(N,D,L){for(var x=Array(arguments.length-2),je=2;je<arguments.length;je++)x[je-2]=arguments[je];return R.prototype[D].apply(N,x)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(P,R,I){I||(I=0);var N=Array(16);if(typeof R=="string")for(var D=0;16>D;++D)N[D]=R.charCodeAt(I++)|R.charCodeAt(I++)<<8|R.charCodeAt(I++)<<16|R.charCodeAt(I++)<<24;else for(D=0;16>D;++D)N[D]=R[I++]|R[I++]<<8|R[I++]<<16|R[I++]<<24;R=P.g[0],I=P.g[1],D=P.g[2];var L=P.g[3],x=R+(L^I&(D^L))+N[0]+3614090360&4294967295;R=I+(x<<7&4294967295|x>>>25),x=L+(D^R&(I^D))+N[1]+3905402710&4294967295,L=R+(x<<12&4294967295|x>>>20),x=D+(I^L&(R^I))+N[2]+606105819&4294967295,D=L+(x<<17&4294967295|x>>>15),x=I+(R^D&(L^R))+N[3]+3250441966&4294967295,I=D+(x<<22&4294967295|x>>>10),x=R+(L^I&(D^L))+N[4]+4118548399&4294967295,R=I+(x<<7&4294967295|x>>>25),x=L+(D^R&(I^D))+N[5]+1200080426&4294967295,L=R+(x<<12&4294967295|x>>>20),x=D+(I^L&(R^I))+N[6]+2821735955&4294967295,D=L+(x<<17&4294967295|x>>>15),x=I+(R^D&(L^R))+N[7]+4249261313&4294967295,I=D+(x<<22&4294967295|x>>>10),x=R+(L^I&(D^L))+N[8]+1770035416&4294967295,R=I+(x<<7&4294967295|x>>>25),x=L+(D^R&(I^D))+N[9]+2336552879&4294967295,L=R+(x<<12&4294967295|x>>>20),x=D+(I^L&(R^I))+N[10]+4294925233&4294967295,D=L+(x<<17&4294967295|x>>>15),x=I+(R^D&(L^R))+N[11]+2304563134&4294967295,I=D+(x<<22&4294967295|x>>>10),x=R+(L^I&(D^L))+N[12]+1804603682&4294967295,R=I+(x<<7&4294967295|x>>>25),x=L+(D^R&(I^D))+N[13]+4254626195&4294967295,L=R+(x<<12&4294967295|x>>>20),x=D+(I^L&(R^I))+N[14]+2792965006&4294967295,D=L+(x<<17&4294967295|x>>>15),x=I+(R^D&(L^R))+N[15]+1236535329&4294967295,I=D+(x<<22&4294967295|x>>>10),x=R+(D^L&(I^D))+N[1]+4129170786&4294967295,R=I+(x<<5&4294967295|x>>>27),x=L+(I^D&(R^I))+N[6]+3225465664&4294967295,L=R+(x<<9&4294967295|x>>>23),x=D+(R^I&(L^R))+N[11]+643717713&4294967295,D=L+(x<<14&4294967295|x>>>18),x=I+(L^R&(D^L))+N[0]+3921069994&4294967295,I=D+(x<<20&4294967295|x>>>12),x=R+(D^L&(I^D))+N[5]+3593408605&4294967295,R=I+(x<<5&4294967295|x>>>27),x=L+(I^D&(R^I))+N[10]+38016083&4294967295,L=R+(x<<9&4294967295|x>>>23),x=D+(R^I&(L^R))+N[15]+3634488961&4294967295,D=L+(x<<14&4294967295|x>>>18),x=I+(L^R&(D^L))+N[4]+3889429448&4294967295,I=D+(x<<20&4294967295|x>>>12),x=R+(D^L&(I^D))+N[9]+568446438&4294967295,R=I+(x<<5&4294967295|x>>>27),x=L+(I^D&(R^I))+N[14]+3275163606&4294967295,L=R+(x<<9&4294967295|x>>>23),x=D+(R^I&(L^R))+N[3]+4107603335&4294967295,D=L+(x<<14&4294967295|x>>>18),x=I+(L^R&(D^L))+N[8]+1163531501&4294967295,I=D+(x<<20&4294967295|x>>>12),x=R+(D^L&(I^D))+N[13]+2850285829&4294967295,R=I+(x<<5&4294967295|x>>>27),x=L+(I^D&(R^I))+N[2]+4243563512&4294967295,L=R+(x<<9&4294967295|x>>>23),x=D+(R^I&(L^R))+N[7]+1735328473&4294967295,D=L+(x<<14&4294967295|x>>>18),x=I+(L^R&(D^L))+N[12]+2368359562&4294967295,I=D+(x<<20&4294967295|x>>>12),x=R+(I^D^L)+N[5]+4294588738&4294967295,R=I+(x<<4&4294967295|x>>>28),x=L+(R^I^D)+N[8]+2272392833&4294967295,L=R+(x<<11&4294967295|x>>>21),x=D+(L^R^I)+N[11]+1839030562&4294967295,D=L+(x<<16&4294967295|x>>>16),x=I+(D^L^R)+N[14]+4259657740&4294967295,I=D+(x<<23&4294967295|x>>>9),x=R+(I^D^L)+N[1]+2763975236&4294967295,R=I+(x<<4&4294967295|x>>>28),x=L+(R^I^D)+N[4]+1272893353&4294967295,L=R+(x<<11&4294967295|x>>>21),x=D+(L^R^I)+N[7]+4139469664&4294967295,D=L+(x<<16&4294967295|x>>>16),x=I+(D^L^R)+N[10]+3200236656&4294967295,I=D+(x<<23&4294967295|x>>>9),x=R+(I^D^L)+N[13]+681279174&4294967295,R=I+(x<<4&4294967295|x>>>28),x=L+(R^I^D)+N[0]+3936430074&4294967295,L=R+(x<<11&4294967295|x>>>21),x=D+(L^R^I)+N[3]+3572445317&4294967295,D=L+(x<<16&4294967295|x>>>16),x=I+(D^L^R)+N[6]+76029189&4294967295,I=D+(x<<23&4294967295|x>>>9),x=R+(I^D^L)+N[9]+3654602809&4294967295,R=I+(x<<4&4294967295|x>>>28),x=L+(R^I^D)+N[12]+3873151461&4294967295,L=R+(x<<11&4294967295|x>>>21),x=D+(L^R^I)+N[15]+530742520&4294967295,D=L+(x<<16&4294967295|x>>>16),x=I+(D^L^R)+N[2]+3299628645&4294967295,I=D+(x<<23&4294967295|x>>>9),x=R+(D^(I|~L))+N[0]+4096336452&4294967295,R=I+(x<<6&4294967295|x>>>26),x=L+(I^(R|~D))+N[7]+1126891415&4294967295,L=R+(x<<10&4294967295|x>>>22),x=D+(R^(L|~I))+N[14]+2878612391&4294967295,D=L+(x<<15&4294967295|x>>>17),x=I+(L^(D|~R))+N[5]+4237533241&4294967295,I=D+(x<<21&4294967295|x>>>11),x=R+(D^(I|~L))+N[12]+1700485571&4294967295,R=I+(x<<6&4294967295|x>>>26),x=L+(I^(R|~D))+N[3]+2399980690&4294967295,L=R+(x<<10&4294967295|x>>>22),x=D+(R^(L|~I))+N[10]+4293915773&4294967295,D=L+(x<<15&4294967295|x>>>17),x=I+(L^(D|~R))+N[1]+2240044497&4294967295,I=D+(x<<21&4294967295|x>>>11),x=R+(D^(I|~L))+N[8]+1873313359&4294967295,R=I+(x<<6&4294967295|x>>>26),x=L+(I^(R|~D))+N[15]+4264355552&4294967295,L=R+(x<<10&4294967295|x>>>22),x=D+(R^(L|~I))+N[6]+2734768916&4294967295,D=L+(x<<15&4294967295|x>>>17),x=I+(L^(D|~R))+N[13]+1309151649&4294967295,I=D+(x<<21&4294967295|x>>>11),x=R+(D^(I|~L))+N[4]+4149444226&4294967295,R=I+(x<<6&4294967295|x>>>26),x=L+(I^(R|~D))+N[11]+3174756917&4294967295,L=R+(x<<10&4294967295|x>>>22),x=D+(R^(L|~I))+N[2]+718787259&4294967295,D=L+(x<<15&4294967295|x>>>17),x=I+(L^(D|~R))+N[9]+3951481745&4294967295,P.g[0]=P.g[0]+R&4294967295,P.g[1]=P.g[1]+(D+(x<<21&4294967295|x>>>11))&4294967295,P.g[2]=P.g[2]+D&4294967295,P.g[3]=P.g[3]+L&4294967295}i.prototype.u=function(P,R){R===void 0&&(R=P.length);for(var I=R-this.blockSize,N=this.B,D=this.h,L=0;L<R;){if(D==0)for(;L<=I;)a(this,P,L),L+=this.blockSize;if(typeof P=="string"){for(;L<R;)if(N[D++]=P.charCodeAt(L++),D==this.blockSize){a(this,N),D=0;break}}else for(;L<R;)if(N[D++]=P[L++],D==this.blockSize){a(this,N),D=0;break}}this.h=D,this.o+=R},i.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var R=1;R<P.length-8;++R)P[R]=0;var I=8*this.o;for(R=P.length-8;R<P.length;++R)P[R]=I&255,I/=256;for(this.u(P),P=Array(16),R=I=0;4>R;++R)for(var N=0;32>N;N+=8)P[I++]=this.g[R]>>>N&255;return P};function l(P,R){var I=d;return Object.prototype.hasOwnProperty.call(I,P)?I[P]:I[P]=R(P)}function u(P,R){this.h=R;for(var I=[],N=!0,D=P.length-1;0<=D;D--){var L=P[D]|0;N&&L==R||(I[D]=L,N=!1)}this.g=I}var d={};function p(P){return-128<=P&&128>P?l(P,function(R){return new u([R|0],0>R?-1:0)}):new u([P|0],0>P?-1:0)}function m(P){if(isNaN(P)||!isFinite(P))return S;if(0>P)return V(m(-P));for(var R=[],I=1,N=0;P>=I;N++)R[N]=P/I|0,I*=4294967296;return new u(R,0)}function v(P,R){if(P.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(P.charAt(0)=="-")return V(v(P.substring(1),R));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=m(Math.pow(R,8)),N=S,D=0;D<P.length;D+=8){var L=Math.min(8,P.length-D),x=parseInt(P.substring(D,D+L),R);8>L?(L=m(Math.pow(R,L)),N=N.j(L).add(m(x))):(N=N.j(I),N=N.add(m(x)))}return N}var S=p(0),b=p(1),k=p(16777216);n=u.prototype,n.m=function(){if(W(this))return-V(this).m();for(var P=0,R=1,I=0;I<this.g.length;I++){var N=this.i(I);P+=(0<=N?N:4294967296+N)*R,R*=4294967296}return P},n.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(M(this))return"0";if(W(this))return"-"+V(this).toString(P);for(var R=m(Math.pow(P,6)),I=this,N="";;){var D=z(I,R).g;I=F(I,D.j(R));var L=((0<I.g.length?I.g[0]:I.h)>>>0).toString(P);if(I=D,M(I))return L+N;for(;6>L.length;)L="0"+L;N=L+N}},n.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function M(P){if(P.h!=0)return!1;for(var R=0;R<P.g.length;R++)if(P.g[R]!=0)return!1;return!0}function W(P){return P.h==-1}n.l=function(P){return P=F(this,P),W(P)?-1:M(P)?0:1};function V(P){for(var R=P.g.length,I=[],N=0;N<R;N++)I[N]=~P.g[N];return new u(I,~P.h).add(b)}n.abs=function(){return W(this)?V(this):this},n.add=function(P){for(var R=Math.max(this.g.length,P.g.length),I=[],N=0,D=0;D<=R;D++){var L=N+(this.i(D)&65535)+(P.i(D)&65535),x=(L>>>16)+(this.i(D)>>>16)+(P.i(D)>>>16);N=x>>>16,L&=65535,x&=65535,I[D]=x<<16|L}return new u(I,I[I.length-1]&-2147483648?-1:0)};function F(P,R){return P.add(V(R))}n.j=function(P){if(M(this)||M(P))return S;if(W(this))return W(P)?V(this).j(V(P)):V(V(this).j(P));if(W(P))return V(this.j(V(P)));if(0>this.l(k)&&0>P.l(k))return m(this.m()*P.m());for(var R=this.g.length+P.g.length,I=[],N=0;N<2*R;N++)I[N]=0;for(N=0;N<this.g.length;N++)for(var D=0;D<P.g.length;D++){var L=this.i(N)>>>16,x=this.i(N)&65535,je=P.i(D)>>>16,qe=P.i(D)&65535;I[2*N+2*D]+=x*qe,B(I,2*N+2*D),I[2*N+2*D+1]+=L*qe,B(I,2*N+2*D+1),I[2*N+2*D+1]+=x*je,B(I,2*N+2*D+1),I[2*N+2*D+2]+=L*je,B(I,2*N+2*D+2)}for(N=0;N<R;N++)I[N]=I[2*N+1]<<16|I[2*N];for(N=R;N<2*R;N++)I[N]=0;return new u(I,0)};function B(P,R){for(;(P[R]&65535)!=P[R];)P[R+1]+=P[R]>>>16,P[R]&=65535,R++}function K(P,R){this.g=P,this.h=R}function z(P,R){if(M(R))throw Error("division by zero");if(M(P))return new K(S,S);if(W(P))return R=z(V(P),R),new K(V(R.g),V(R.h));if(W(R))return R=z(P,V(R)),new K(V(R.g),R.h);if(30<P.g.length){if(W(P)||W(R))throw Error("slowDivide_ only works with positive integers.");for(var I=b,N=R;0>=N.l(P);)I=re(I),N=re(N);var D=ge(I,1),L=ge(N,1);for(N=ge(N,2),I=ge(I,2);!M(N);){var x=L.add(N);0>=x.l(P)&&(D=D.add(I),L=x),N=ge(N,1),I=ge(I,1)}return R=F(P,D.j(R)),new K(D,R)}for(D=S;0<=P.l(R);){for(I=Math.max(1,Math.floor(P.m()/R.m())),N=Math.ceil(Math.log(I)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),L=m(I),x=L.j(R);W(x)||0<x.l(P);)I-=N,L=m(I),x=L.j(R);M(L)&&(L=b),D=D.add(L),P=F(P,x)}return new K(D,P)}n.A=function(P){return z(this,P).h},n.and=function(P){for(var R=Math.max(this.g.length,P.g.length),I=[],N=0;N<R;N++)I[N]=this.i(N)&P.i(N);return new u(I,this.h&P.h)},n.or=function(P){for(var R=Math.max(this.g.length,P.g.length),I=[],N=0;N<R;N++)I[N]=this.i(N)|P.i(N);return new u(I,this.h|P.h)},n.xor=function(P){for(var R=Math.max(this.g.length,P.g.length),I=[],N=0;N<R;N++)I[N]=this.i(N)^P.i(N);return new u(I,this.h^P.h)};function re(P){for(var R=P.g.length+1,I=[],N=0;N<R;N++)I[N]=P.i(N)<<1|P.i(N-1)>>>31;return new u(I,P.h)}function ge(P,R){var I=R>>5;R%=32;for(var N=P.g.length-I,D=[],L=0;L<N;L++)D[L]=0<R?P.i(L+I)>>>R|P.i(L+I+1)<<32-R:P.i(L+I);return new u(D,P.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,q1=i,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=v,na=u}).apply(typeof sb<"u"?sb:typeof self<"u"?self:typeof window<"u"?window:{});var Vf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var G1,vu,W1,nd,T_,K1,$1,Y1;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,E){return h==Array.prototype||h==Object.prototype||(h[_]=E.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vf=="object"&&Vf];for(var _=0;_<h.length;++_){var E=h[_];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var i=t(this);function a(h,_){if(_)e:{var E=i;h=h.split(".");for(var C=0;C<h.length-1;C++){var q=h[C];if(!(q in E))break e;E=E[q]}h=h[h.length-1],C=E[h],_=_(C),_!=C&&_!=null&&e(E,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var E=0,C=!1,q={next:function(){if(!C&&E<h.length){var Y=E++;return{value:_(Y,h[Y]),done:!1}}return C=!0,{done:!0,value:void 0}}};return q[Symbol.iterator]=function(){return q},q}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function m(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function v(h,_,E){return h.call.apply(h.bind,arguments)}function S(h,_,E){if(!h)throw Error();if(2<arguments.length){var C=Array.prototype.slice.call(arguments,2);return function(){var q=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(q,C),h.apply(_,q)}}return function(){return h.apply(_,arguments)}}function b(h,_,E){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:S,b.apply(null,arguments)}function k(h,_){var E=Array.prototype.slice.call(arguments,1);return function(){var C=E.slice();return C.push.apply(C,arguments),h.apply(this,C)}}function M(h,_){function E(){}E.prototype=_.prototype,h.aa=_.prototype,h.prototype=new E,h.prototype.constructor=h,h.Qb=function(C,q,Y){for(var de=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)de[Qe-2]=arguments[Qe];return _.prototype[q].apply(C,de)}}function W(h){const _=h.length;if(0<_){const E=Array(_);for(let C=0;C<_;C++)E[C]=h[C];return E}return[]}function V(h,_){for(let E=1;E<arguments.length;E++){const C=arguments[E];if(p(C)){const q=h.length||0,Y=C.length||0;h.length=q+Y;for(let de=0;de<Y;de++)h[q+de]=C[de]}else h.push(C)}}class F{constructor(_,E){this.i=_,this.j=E,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function B(h){return/^[\s\xa0]*$/.test(h)}function K(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function z(h){return z[" "](h),h}z[" "]=function(){};var re=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function ge(h,_,E){for(const C in h)_.call(E,h[C],C,h)}function P(h,_){for(const E in h)_.call(void 0,h[E],E,h)}function R(h){const _={};for(const E in h)_[E]=h[E];return _}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(h,_){let E,C;for(let q=1;q<arguments.length;q++){C=arguments[q];for(E in C)h[E]=C[E];for(let Y=0;Y<I.length;Y++)E=I[Y],Object.prototype.hasOwnProperty.call(C,E)&&(h[E]=C[E])}}function D(h){var _=1;h=h.split(":");const E=[];for(;0<_&&h.length;)E.push(h.shift()),_--;return h.length&&E.push(h.join(":")),E}function L(h){d.setTimeout(()=>{throw h},0)}function x(){var h=be;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class je{constructor(){this.h=this.g=null}add(_,E){const C=qe.get();C.set(_,E),this.h?this.h.next=C:this.g=C,this.h=C}}var qe=new F(()=>new ce,h=>h.reset());class ce{constructor(){this.next=this.g=this.h=null}set(_,E){this.h=_,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let Se,he=!1,be=new je,A=()=>{const h=d.Promise.resolve(void 0);Se=()=>{h.then(J)}};var J=()=>{for(var h;h=x();){try{h.h.call(h.g)}catch(E){L(E)}var _=qe;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}he=!1};function ve(){this.s=this.s,this.C=this.C}ve.prototype.s=!1,ve.prototype.ma=function(){this.s||(this.s=!0,this.N())},ve.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Q=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const E=()=>{};d.addEventListener("test",E,_),d.removeEventListener("test",E,_)}catch{}return h}();function oe(h,_){if(fe.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var E=this.type=h.type,C=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(re){e:{try{z(_.nodeName);var q=!0;break e}catch{}q=!1}q||(_=null)}}else E=="mouseover"?_=h.fromElement:E=="mouseout"&&(_=h.toElement);this.relatedTarget=_,C?(this.clientX=C.clientX!==void 0?C.clientX:C.pageX,this.clientY=C.clientY!==void 0?C.clientY:C.pageY,this.screenX=C.screenX||0,this.screenY=C.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:ne[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&oe.aa.h.call(this)}}M(oe,fe);var ne={2:"touch",3:"pen",4:"mouse"};oe.prototype.h=function(){oe.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var xe="closure_listenable_"+(1e6*Math.random()|0),ye=0;function pe(h,_,E,C,q){this.listener=h,this.proxy=null,this.src=_,this.type=E,this.capture=!!C,this.ha=q,this.key=++ye,this.da=this.fa=!1}function Re(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function wt(h){this.src=h,this.g={},this.h=0}wt.prototype.add=function(h,_,E,C,q){var Y=h.toString();h=this.g[Y],h||(h=this.g[Y]=[],this.h++);var de=Zt(h,_,C,q);return-1<de?(_=h[de],E||(_.fa=!1)):(_=new pe(_,this.src,Y,!!C,q),_.fa=E,h.push(_)),_};function Xt(h,_){var E=_.type;if(E in h.g){var C=h.g[E],q=Array.prototype.indexOf.call(C,_,void 0),Y;(Y=0<=q)&&Array.prototype.splice.call(C,q,1),Y&&(Re(_),h.g[E].length==0&&(delete h.g[E],h.h--))}}function Zt(h,_,E,C){for(var q=0;q<h.length;++q){var Y=h[q];if(!Y.da&&Y.listener==_&&Y.capture==!!E&&Y.ha==C)return q}return-1}var kn="closure_lm_"+(1e6*Math.random()|0),ri={};function Fn(h,_,E,C,q){if(Array.isArray(_)){for(var Y=0;Y<_.length;Y++)Fn(h,_[Y],E,C,q);return null}return E=Sa(E),h&&h[xe]?h.K(_,E,m(C)?!!C.capture:!1,q):Fi(h,_,E,!1,C,q)}function Fi(h,_,E,C,q,Y){if(!_)throw Error("Invalid event type");var de=m(q)?!!q.capture:!!q,Qe=ai(h);if(Qe||(h[kn]=Qe=new wt(h)),E=Qe.add(_,E,C,de,Y),E.proxy)return E;if(C=X(),E.proxy=C,C.src=h,C.listener=E,h.addEventListener)Q||(q=de),q===void 0&&(q=!1),h.addEventListener(_.toString(),C,q);else if(h.attachEvent)h.attachEvent(Ut(_.toString()),C);else if(h.addListener&&h.removeListener)h.addListener(C);else throw Error("addEventListener and attachEvent are unavailable.");return E}function X(){function h(E){return _.call(h.src,h.listener,E)}const _=ys;return h}function Ge(h,_,E,C,q){if(Array.isArray(_))for(var Y=0;Y<_.length;Y++)Ge(h,_[Y],E,C,q);else C=m(C)?!!C.capture:!!C,E=Sa(E),h&&h[xe]?(h=h.i,_=String(_).toString(),_ in h.g&&(Y=h.g[_],E=Zt(Y,E,C,q),-1<E&&(Re(Y[E]),Array.prototype.splice.call(Y,E,1),Y.length==0&&(delete h.g[_],h.h--)))):h&&(h=ai(h))&&(_=h.g[_.toString()],h=-1,_&&(h=Zt(_,E,C,q)),(E=-1<h?_[h]:null)&&Dt(E))}function Dt(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[xe])Xt(_.i,h);else{var E=h.type,C=h.proxy;_.removeEventListener?_.removeEventListener(E,C,h.capture):_.detachEvent?_.detachEvent(Ut(E),C):_.addListener&&_.removeListener&&_.removeListener(C),(E=ai(_))?(Xt(E,h),E.h==0&&(E.src=null,_[kn]=null)):Re(h)}}}function Ut(h){return h in ri?ri[h]:ri[h]="on"+h}function ys(h,_){if(h.da)h=!0;else{_=new oe(_,this);var E=h.listener,C=h.ha||h.src;h.fa&&Dt(h),h=E.call(C,_)}return h}function ai(h){return h=h[kn],h instanceof wt?h:null}var cn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sa(h){return typeof h=="function"?h:(h[cn]||(h[cn]=function(_){return h.handleEvent(_)}),h[cn])}function vt(){ve.call(this),this.i=new wt(this),this.M=this,this.F=null}M(vt,ve),vt.prototype[xe]=!0,vt.prototype.removeEventListener=function(h,_,E,C){Ge(this,h,_,E,C)};function Vt(h,_){var E,C=h.F;if(C)for(E=[];C;C=C.F)E.push(C);if(h=h.M,C=_.type||_,typeof _=="string")_=new fe(_,h);else if(_ instanceof fe)_.target=_.target||h;else{var q=_;_=new fe(C,h),N(_,q)}if(q=!0,E)for(var Y=E.length-1;0<=Y;Y--){var de=_.g=E[Y];q=vs(de,C,!0,_)&&q}if(de=_.g=h,q=vs(de,C,!0,_)&&q,q=vs(de,C,!1,_)&&q,E)for(Y=0;Y<E.length;Y++)de=_.g=E[Y],q=vs(de,C,!1,_)&&q}vt.prototype.N=function(){if(vt.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var E=h.g[_],C=0;C<E.length;C++)Re(E[C]);delete h.g[_],h.h--}}this.F=null},vt.prototype.K=function(h,_,E,C){return this.i.add(String(h),_,!1,E,C)},vt.prototype.L=function(h,_,E,C){return this.i.add(String(h),_,!0,E,C)};function vs(h,_,E,C){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var q=!0,Y=0;Y<_.length;++Y){var de=_[Y];if(de&&!de.da&&de.capture==E){var Qe=de.listener,qt=de.ha||de.src;de.fa&&Xt(h.i,de),q=Qe.call(qt,C)!==!1&&q}}return q&&!C.defaultPrevented}function ph(h,_,E){if(typeof h=="function")E&&(h=b(h,E));else if(h&&typeof h.handleEvent=="function")h=b(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function ec(h){h.g=ph(()=>{h.g=null,h.i&&(h.i=!1,ec(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class bp extends ve{constructor(_,E){super(),this.m=_,this.l=E,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:ec(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ba(h){ve.call(this),this.h=h,this.g={}}M(ba,ve);var cr=[];function vn(h){ge(h.g,function(_,E){this.g.hasOwnProperty(E)&&Dt(_)},h),h.g={}}ba.prototype.N=function(){ba.aa.N.call(this),vn(this)},ba.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tc=d.JSON.stringify,zi=d.JSON.parse,Dn=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function nc(){}nc.prototype.h=null;function mh(h){return h.h||(h.h=h.i())}function gh(){}var Hi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ur(){fe.call(this,"d")}M(ur,fe);function Ni(){fe.call(this,"c")}M(Ni,fe);var oi={},hr=null;function wo(){return hr=hr||new vt}oi.La="serverreachability";function ic(h){fe.call(this,oi.La,h)}M(ic,fe);function fr(h){const _=wo();Vt(_,new ic(_))}oi.STAT_EVENT="statevent";function Co(h,_){fe.call(this,oi.STAT_EVENT,h),this.stat=_}M(Co,fe);function Pt(h){const _=wo();Vt(_,new Co(_,h))}oi.Ma="timingevent";function _h(h,_){fe.call(this,oi.Ma,h),this.size=_}M(_h,fe);function dr(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function pr(){this.g=!0}pr.prototype.xa=function(){this.g=!1};function yh(h,_,E,C,q,Y){h.info(function(){if(h.g)if(Y)for(var de="",Qe=Y.split("&"),qt=0;qt<Qe.length;qt++){var Xe=Qe[qt].split("=");if(1<Xe.length){var tn=Xe[0];Xe=Xe[1];var Gt=tn.split("_");de=2<=Gt.length&&Gt[1]=="type"?de+(tn+"="+Xe+"&"):de+(tn+"=redacted&")}}else de=null;else de=Y;return"XMLHTTP REQ ("+C+") [attempt "+q+"]: "+_+`
`+E+`
`+de})}function vh(h,_,E,C,q,Y,de){h.info(function(){return"XMLHTTP RESP ("+C+") [ attempt "+q+"]: "+_+`
`+E+`
`+Y+" "+de})}function mr(h,_,E,C){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+Jt(h,E)+(C?" "+C:"")})}function qi(h,_){h.info(function(){return"TIMEOUT: "+_})}pr.prototype.info=function(){};function Jt(h,_){if(!h.g)return _;if(!_)return null;try{var E=JSON.parse(_);if(E){for(h=0;h<E.length;h++)if(Array.isArray(E[h])){var C=E[h];if(!(2>C.length)){var q=C[1];if(Array.isArray(q)&&!(1>q.length)){var Y=q[0];if(Y!="noop"&&Y!="stop"&&Y!="close")for(var de=1;de<q.length;de++)q[de]=""}}}}return tc(E)}catch{return _}}var Ht={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Es={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Aa;function Ro(){}M(Ro,nc),Ro.prototype.g=function(){return new XMLHttpRequest},Ro.prototype.i=function(){return{}},Aa=new Ro;function Gi(h,_,E,C){this.j=h,this.i=_,this.l=E,this.R=C||1,this.U=new ba(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new sc}function sc(){this.i=null,this.g="",this.h=!1}var gr={},wa={};function xi(h,_,E){h.L=1,h.v=Ia(Ct(_)),h.m=E,h.P=!0,Ts(h,null)}function Ts(h,_){h.F=Date.now(),Et(h),h.A=Ct(h.v);var E=h.A,C=h.R;Array.isArray(C)||(C=[String(C)]),As(E.i,"t",C),h.C=0,E=h.j.J,h.h=new sc,h.g=Dh(h.j,E?_:null,!h.m),0<h.O&&(h.M=new bp(b(h.Y,h,h.g),h.O)),_=h.U,E=h.g,C=h.ca;var q="readystatechange";Array.isArray(q)||(q&&(cr[0]=q.toString()),q=cr);for(var Y=0;Y<q.length;Y++){var de=Fn(E,q[Y],C||_.handleEvent,!1,_.h||_);if(!de)break;_.g[de.key]=de}_=h.H?R(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),fr(),yh(h.i,h.u,h.A,h.l,h.R,h.m)}Gi.prototype.ca=function(h){h=h.target;const _=this.M;_&&fi(h)==3?_.j():this.Y(h)},Gi.prototype.Y=function(h){try{if(h==this.g)e:{const Gt=fi(this.g);var _=this.g.Ba();const Is=this.g.Z();if(!(3>Gt)&&(Gt!=3||this.g&&(this.h.h||this.g.oa()||wh(this.g)))){this.J||Gt!=4||_==7||(_==8||0>=Is?fr(3):fr(2)),Io(this);var E=this.g.Z();this.X=E;t:if(_r(this)){var C=wh(this.g);h="";var q=C.length,Y=fi(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zn(this),Kn(this);var de="";break t}this.h.i=new d.TextDecoder}for(_=0;_<q;_++)this.h.h=!0,h+=this.h.i.decode(C[_],{stream:!(Y&&_==q-1)});C.length=0,this.h.g+=h,this.C=0,de=this.h.g}else de=this.g.oa();if(this.o=E==200,vh(this.i,this.u,this.A,this.l,this.R,Gt,E),this.o){if(this.T&&!this.K){t:{if(this.g){var Qe,qt=this.g;if((Qe=qt.g?qt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Qe)){var Xe=Qe;break t}}Xe=null}if(E=Xe)mr(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$n(this,E);else{this.o=!1,this.s=3,Pt(12),zn(this),Kn(this);break e}}if(this.P){E=!0;let un;for(;!this.J&&this.C<de.length;)if(un=yr(this,de),un==wa){Gt==4&&(this.s=4,Pt(14),E=!1),mr(this.i,this.l,null,"[Incomplete Response]");break}else if(un==gr){this.s=4,Pt(15),mr(this.i,this.l,de,"[Invalid Chunk]"),E=!1;break}else mr(this.i,this.l,un,null),$n(this,un);if(_r(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Gt!=4||de.length!=0||this.h.h||(this.s=1,Pt(16),E=!1),this.o=this.o&&E,!E)mr(this.i,this.l,de,"[Invalid Chunked Response]"),zn(this),Kn(this);else if(0<de.length&&!this.W){this.W=!0;var tn=this.j;tn.g==this&&tn.ba&&!tn.M&&(tn.j.info("Great, no buffering proxy detected. Bytes received: "+de.length),Ma(tn),tn.M=!0,Pt(11))}}else mr(this.i,this.l,de,null),$n(this,de);Gt==4&&zn(this),this.o&&!this.J&&(Gt==4?xh(this.j,this):(this.o=!1,Et(this)))}else Np(this.g),E==400&&0<de.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),zn(this),Kn(this)}}}catch{}finally{}};function _r(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function yr(h,_){var E=h.C,C=_.indexOf(`
`,E);return C==-1?wa:(E=Number(_.substring(E,C)),isNaN(E)?gr:(C+=1,C+E>_.length?wa:(_=_.slice(C,C+E),h.C=C+E,_)))}Gi.prototype.cancel=function(){this.J=!0,zn(this)};function Et(h){h.S=Date.now()+h.I,rc(h,h.I)}function rc(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=dr(b(h.ba,h),_)}function Io(h){h.B&&(d.clearTimeout(h.B),h.B=null)}Gi.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(qi(this.i,this.A),this.L!=2&&(fr(),Pt(17)),zn(this),this.s=2,Kn(this)):rc(this,this.S-h)};function Kn(h){h.j.G==0||h.J||xh(h.j,h)}function zn(h){Io(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,vn(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function $n(h,_){try{var E=h.j;if(E.G!=0&&(E.g==h||vr(E.h,h))){if(!h.K&&vr(E.h,h)&&E.G==3){try{var C=E.Da.g.parse(_)}catch{C=null}if(Array.isArray(C)&&C.length==3){var q=C;if(q[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<h.F)Vo(E),Lo(E);else break e;gc(E),Pt(18)}}else E.za=q[1],0<E.za-E.T&&37500>q[2]&&E.F&&E.v==0&&!E.C&&(E.C=dr(b(E.Za,E),6e3));if(1>=Eh(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Rs(E,11)}else if((h.K||E.g==h)&&Vo(E),!B(_))for(q=E.Da.g.parse(_),_=0;_<q.length;_++){let Xe=q[_];if(E.T=Xe[0],Xe=Xe[1],E.G==2)if(Xe[0]=="c"){E.K=Xe[1],E.ia=Xe[2];const tn=Xe[3];tn!=null&&(E.la=tn,E.j.info("VER="+E.la));const Gt=Xe[4];Gt!=null&&(E.Aa=Gt,E.j.info("SVER="+E.Aa));const Is=Xe[5];Is!=null&&typeof Is=="number"&&0<Is&&(C=1.5*Is,E.L=C,E.j.info("backChannelRequestTimeoutMs_="+C)),C=E;const un=h.g;if(un){const Zi=un.g?un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zi){var Y=C.h;Y.g||Zi.indexOf("spdy")==-1&&Zi.indexOf("quic")==-1&&Zi.indexOf("h2")==-1||(Y.j=Y.l,Y.g=new Set,Y.h&&(Er(Y,Y.h),Y.h=null))}if(C.D){const yc=un.g?un.g.getResponseHeader("X-HTTP-Session-Id"):null;yc&&(C.ya=yc,nt(C.I,C.D,yc))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-h.F,E.j.info("Handshake RTT: "+E.R+"ms")),C=E;var de=h;if(C.qa=kh(C,C.J?C.ia:null,C.W),de.K){li(C.h,de);var Qe=de,qt=C.L;qt&&(Qe.I=qt),Qe.B&&(Io(Qe),Et(Qe)),C.g=de}else Ih(C);0<E.i.length&&Uo(E)}else Xe[0]!="stop"&&Xe[0]!="close"||Rs(E,7);else E.G==3&&(Xe[0]=="stop"||Xe[0]=="close"?Xe[0]=="stop"?Rs(E,7):pc(E):Xe[0]!="noop"&&E.l&&E.l.ta(Xe),E.v=0)}}fr(4)}catch{}}var Ap=class{constructor(h,_){this.g=h,this.map=_}};function ac(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function oc(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Eh(h){return h.h?1:h.g?h.g.size:0}function vr(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function Er(h,_){h.g?h.g.add(_):h.h=_}function li(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}ac.prototype.cancel=function(){if(this.i=Pn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Pn(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const E of h.g.values())_=_.concat(E.D);return _}return W(h.i)}function Th(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],E=h.length,C=0;C<E;C++)_.push(h[C]);return _}_=[],E=0;for(C in h)_[E++]=h[C];return _}function wp(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var E=0;E<h;E++)_.push(E);return _}_=[],E=0;for(const C in h)_[E++]=C;return _}}}function Ca(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var E=wp(h),C=Th(h),q=C.length,Y=0;Y<q;Y++)_.call(void 0,C[Y],E&&E[Y],h)}var lc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function No(h,_){if(h){h=h.split("&");for(var E=0;E<h.length;E++){var C=h[E].indexOf("="),q=null;if(0<=C){var Y=h[E].substring(0,C);q=h[E].substring(C+1)}else Y=h[E];_(Y,q?decodeURIComponent(q.replace(/\+/g," ")):"")}}}function Ss(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Ss){this.h=h.h,Tr(this,h.j),this.o=h.o,this.g=h.g,Ra(this,h.s),this.l=h.l;var _=h.i,E=new Wi;E.i=_.i,_.g&&(E.g=new Map(_.g),E.h=_.h),xo(this,E),this.m=h.m}else h&&(_=String(h).match(lc))?(this.h=!1,Tr(this,_[1]||"",!0),this.o=Sr(_[2]||""),this.g=Sr(_[3]||"",!0),Ra(this,_[4]),this.l=Sr(_[5]||"",!0),xo(this,_[6]||"",!0),this.m=Sr(_[7]||"")):(this.h=!1,this.i=new Wi(null,this.h))}Ss.prototype.toString=function(){var h=[],_=this.j;_&&h.push(ci(_,cc,!0),":");var E=this.g;return(E||_=="file")&&(h.push("//"),(_=this.o)&&h.push(ci(_,cc,!0),"@"),h.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&h.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&h.push("/"),h.push(ci(E,E.charAt(0)=="/"?uc:Sh,!0))),(E=this.i.toString())&&h.push("?",E),(E=this.m)&&h.push("#",ci(E,Ip)),h.join("")};function Ct(h){return new Ss(h)}function Tr(h,_,E){h.j=E?Sr(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Ra(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function xo(h,_,E){_ instanceof Wi?(h.i=_,hc(h.i,h.h)):(E||(_=ci(_,Rp)),h.i=new Wi(_,h.h))}function nt(h,_,E){h.i.set(_,E)}function Ia(h){return nt(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Sr(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function ci(h,_,E){return typeof h=="string"?(h=encodeURI(h).replace(_,Cp),E&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Cp(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var cc=/[#\/\?@]/g,Sh=/[#\?:]/g,uc=/[#\?]/g,Rp=/[#\?@]/g,Ip=/#/g;function Wi(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function ui(h){h.g||(h.g=new Map,h.h=0,h.i&&No(h.i,function(_,E){h.add(decodeURIComponent(_.replace(/\+/g," ")),E)}))}n=Wi.prototype,n.add=function(h,_){ui(this),this.i=null,h=ws(this,h);var E=this.g.get(h);return E||this.g.set(h,E=[]),E.push(_),this.h+=1,this};function Oo(h,_){ui(h),_=ws(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function bs(h,_){return ui(h),_=ws(h,_),h.g.has(_)}n.forEach=function(h,_){ui(this),this.g.forEach(function(E,C){E.forEach(function(q){h.call(_,q,C,this)},this)},this)},n.na=function(){ui(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),E=[];for(let C=0;C<_.length;C++){const q=h[C];for(let Y=0;Y<q.length;Y++)E.push(_[C])}return E},n.V=function(h){ui(this);let _=[];if(typeof h=="string")bs(this,h)&&(_=_.concat(this.g.get(ws(this,h))));else{h=Array.from(this.g.values());for(let E=0;E<h.length;E++)_=_.concat(h[E])}return _},n.set=function(h,_){return ui(this),this.i=null,h=ws(this,h),bs(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function As(h,_,E){Oo(h,_),0<E.length&&(h.i=null,h.g.set(ws(h,_),W(E)),h.h+=E.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var E=0;E<_.length;E++){var C=_[E];const Y=encodeURIComponent(String(C)),de=this.V(C);for(C=0;C<de.length;C++){var q=Y;de[C]!==""&&(q+="="+encodeURIComponent(String(de[C]))),h.push(q)}}return this.i=h.join("&")};function ws(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function hc(h,_){_&&!h.j&&(ui(h),h.i=null,h.g.forEach(function(E,C){var q=C.toLowerCase();C!=q&&(Oo(this,C),As(this,q,E))},h)),h.j=_}function bh(h,_){const E=new pr;if(d.Image){const C=new Image;C.onload=k(hi,E,"TestLoadImage: loaded",!0,_,C),C.onerror=k(hi,E,"TestLoadImage: error",!1,_,C),C.onabort=k(hi,E,"TestLoadImage: abort",!1,_,C),C.ontimeout=k(hi,E,"TestLoadImage: timeout",!1,_,C),d.setTimeout(function(){C.ontimeout&&C.ontimeout()},1e4),C.src=h}else _(!1)}function Na(h,_){const E=new pr,C=new AbortController,q=setTimeout(()=>{C.abort(),hi(E,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:C.signal}).then(Y=>{clearTimeout(q),Y.ok?hi(E,"TestPingServer: ok",!0,_):hi(E,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(q),hi(E,"TestPingServer: error",!1,_)})}function hi(h,_,E,C,q){try{q&&(q.onload=null,q.onerror=null,q.onabort=null,q.ontimeout=null),C(E)}catch{}}function xa(){this.g=new Dn}function Ki(h,_,E){const C=E||"";try{Ca(h,function(q,Y){let de=q;m(q)&&(de=tc(q)),_.push(C+Y+"="+encodeURIComponent(de))})}catch(q){throw _.push(C+"type="+encodeURIComponent("_badmap")),q}}function br(h){this.l=h.Ub||null,this.j=h.eb||!1}M(br,nc),br.prototype.g=function(){return new Cs(this.l,this.j)},br.prototype.i=function(h){return function(){return h}}({});function Cs(h,_){vt.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}M(Cs,vt),n=Cs.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Yi(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$i(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Yi(this)),this.g&&(this.readyState=3,Yi(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;fc(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function fc(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?$i(this):Yi(this),this.readyState==3&&fc(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,$i(this))},n.Qa=function(h){this.g&&(this.response=h,$i(this))},n.ga=function(){this.g&&$i(this)};function $i(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Yi(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var E=_.next();!E.done;)E=E.value,h.push(E[0]+": "+E[1]),E=_.next();return h.join(`\r
`)};function Yi(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Cs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function dc(h){let _="";return ge(h,function(E,C){_+=C,_+=":",_+=E,_+=`\r
`}),_}function en(h,_,E){e:{for(C in E){var C=!1;break e}C=!0}C||(E=dc(E),typeof h=="string"?E!=null&&encodeURIComponent(String(E)):nt(h,_,E))}function rt(h){vt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}M(rt,vt);var ko=/^https?$/i,Oa=["POST","PUT"];n=rt.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,E,C){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Aa.g(),this.v=this.o?mh(this.o):mh(Aa),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(Y){Ah(this,Y);return}if(h=E||"",E=new Map(this.headers),C)if(Object.getPrototypeOf(C)===Object.prototype)for(var q in C)E.set(q,C[q]);else if(typeof C.keys=="function"&&typeof C.get=="function")for(const Y of C.keys())E.set(Y,C.get(Y));else throw Error("Unknown input type for opt_headers: "+String(C));C=Array.from(E.keys()).find(Y=>Y.toLowerCase()=="content-type"),q=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Oa,_,void 0))||C||q||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Y,de]of E)this.g.setRequestHeader(Y,de);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ka(this),this.u=!0,this.g.send(h),this.u=!1}catch(Y){Ah(this,Y)}};function Ah(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,Do(h),Qi(h)}function Do(h){h.A||(h.A=!0,Vt(h,"complete"),Vt(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Vt(this,"complete"),Vt(this,"abort"),Qi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qi(this,!0)),rt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Po(this):this.bb())},n.bb=function(){Po(this)};function Po(h){if(h.h&&typeof u<"u"&&(!h.v[1]||fi(h)!=4||h.Z()!=2)){if(h.u&&fi(h)==4)ph(h.Ea,0,h);else if(Vt(h,"readystatechange"),fi(h)==4){h.h=!1;try{const de=h.Z();e:switch(de){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var E;if(!(E=_)){var C;if(C=de===0){var q=String(h.D).match(lc)[1]||null;!q&&d.self&&d.self.location&&(q=d.self.location.protocol.slice(0,-1)),C=!ko.test(q?q.toLowerCase():"")}E=C}if(E)Vt(h,"complete"),Vt(h,"success");else{h.m=6;try{var Y=2<fi(h)?h.g.statusText:""}catch{Y=""}h.l=Y+" ["+h.Z()+"]",Do(h)}}finally{Qi(h)}}}}function Qi(h,_){if(h.g){ka(h);const E=h.g,C=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||Vt(h,"ready");try{E.onreadystatechange=C}catch{}}}function ka(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function fi(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<fi(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),zi(_)}};function wh(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function Np(h){const _={};h=(h.g&&2<=fi(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let C=0;C<h.length;C++){if(B(h[C]))continue;var E=D(h[C]);const q=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const Y=_[q]||[];_[q]=Y,Y.push(E)}P(_,function(C){return C.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Da(h,_,E){return E&&E.internalChannelParams&&E.internalChannelParams[h]||_}function Mo(h){this.Aa=0,this.i=[],this.j=new pr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Da("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Da("baseRetryDelayMs",5e3,h),this.cb=Da("retryDelaySeedMs",1e4,h),this.Wa=Da("forwardChannelMaxRetries",2,h),this.wa=Da("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new ac(h&&h.concurrentRequestLimit),this.Da=new xa,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Mo.prototype,n.la=8,n.G=1,n.connect=function(h,_,E,C){Pt(0),this.W=h,this.H=_||{},E&&C!==void 0&&(this.H.OSID=E,this.H.OAID=C),this.F=this.X,this.I=kh(this,null,this.W),Uo(this)};function pc(h){if(Ch(h),h.G==3){var _=h.U++,E=Ct(h.I);if(nt(E,"SID",h.K),nt(E,"RID",_),nt(E,"TYPE","terminate"),Pa(h,E),_=new Gi(h,h.j,_),_.L=2,_.v=Ia(Ct(E)),E=!1,d.navigator&&d.navigator.sendBeacon)try{E=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!E&&d.Image&&(new Image().src=_.v,E=!0),E||(_.g=Dh(_.j,null),_.g.ea(_.v)),_.F=Date.now(),Et(_)}Oh(h)}function Lo(h){h.g&&(Ma(h),h.g.cancel(),h.g=null)}function Ch(h){Lo(h),h.u&&(d.clearTimeout(h.u),h.u=null),Vo(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function Uo(h){if(!oc(h.h)&&!h.s){h.s=!0;var _=h.Ga;Se||A(),he||(Se(),he=!0),be.add(_,h),h.B=0}}function xp(h,_){return Eh(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=dr(b(h.Ga,h,_),_c(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const q=new Gi(this,this.j,h);let Y=this.o;if(this.S&&(Y?(Y=R(Y),N(Y,this.S)):Y=this.S),this.m!==null||this.O||(q.H=Y,Y=null),this.P)e:{for(var _=0,E=0;E<this.i.length;E++){t:{var C=this.i[E];if("__data__"in C.map&&(C=C.map.__data__,typeof C=="string")){C=C.length;break t}C=void 0}if(C===void 0)break;if(_+=C,4096<_){_=E;break e}if(_===4096||E===this.i.length-1){_=E+1;break e}}_=1e3}else _=1e3;_=Rh(this,q,_),E=Ct(this.I),nt(E,"RID",h),nt(E,"CVER",22),this.D&&nt(E,"X-HTTP-Session-Id",this.D),Pa(this,E),Y&&(this.O?_="headers="+encodeURIComponent(String(dc(Y)))+"&"+_:this.m&&en(E,this.m,Y)),Er(this.h,q),this.Ua&&nt(E,"TYPE","init"),this.P?(nt(E,"$req",_),nt(E,"SID","null"),q.T=!0,xi(q,E,null)):xi(q,E,_),this.G=2}}else this.G==3&&(h?mc(this,h):this.i.length==0||oc(this.h)||mc(this))};function mc(h,_){var E;_?E=_.l:E=h.U++;const C=Ct(h.I);nt(C,"SID",h.K),nt(C,"RID",E),nt(C,"AID",h.T),Pa(h,C),h.m&&h.o&&en(C,h.m,h.o),E=new Gi(h,h.j,E,h.B+1),h.m===null&&(E.H=h.o),_&&(h.i=_.D.concat(h.i)),_=Rh(h,E,1e3),E.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Er(h.h,E),xi(E,C,_)}function Pa(h,_){h.H&&ge(h.H,function(E,C){nt(_,C,E)}),h.l&&Ca({},function(E,C){nt(_,C,E)})}function Rh(h,_,E){E=Math.min(h.i.length,E);var C=h.l?b(h.l.Na,h.l,h):null;e:{var q=h.i;let Y=-1;for(;;){const de=["count="+E];Y==-1?0<E?(Y=q[0].g,de.push("ofs="+Y)):Y=0:de.push("ofs="+Y);let Qe=!0;for(let qt=0;qt<E;qt++){let Xe=q[qt].g;const tn=q[qt].map;if(Xe-=Y,0>Xe)Y=Math.max(0,q[qt].g-100),Qe=!1;else try{Ki(tn,de,"req"+Xe+"_")}catch{C&&C(tn)}}if(Qe){C=de.join("&");break e}}}return h=h.i.splice(0,E),_.D=h,C}function Ih(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;Se||A(),he||(Se(),he=!0),be.add(_,h),h.v=0}}function gc(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=dr(b(h.Fa,h),_c(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,Nh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=dr(b(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),Lo(this),Nh(this))};function Ma(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function Nh(h){h.g=new Gi(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=Ct(h.qa);nt(_,"RID","rpc"),nt(_,"SID",h.K),nt(_,"AID",h.T),nt(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&nt(_,"TO",h.ja),nt(_,"TYPE","xmlhttp"),Pa(h,_),h.m&&h.o&&en(_,h.m,h.o),h.L&&(h.g.I=h.L);var E=h.g;h=h.ia,E.L=1,E.v=Ia(Ct(_)),E.m=null,E.P=!0,Ts(E,h)}n.Za=function(){this.C!=null&&(this.C=null,Lo(this),gc(this),Pt(19))};function Vo(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function xh(h,_){var E=null;if(h.g==_){Vo(h),Ma(h),h.g=null;var C=2}else if(vr(h.h,_))E=_.D,li(h.h,_),C=1;else return;if(h.G!=0){if(_.o)if(C==1){E=_.m?_.m.length:0,_=Date.now()-_.F;var q=h.B;C=wo(),Vt(C,new _h(C,E)),Uo(h)}else Ih(h);else if(q=_.s,q==3||q==0&&0<_.X||!(C==1&&xp(h,_)||C==2&&gc(h)))switch(E&&0<E.length&&(_=h.h,_.i=_.i.concat(E)),q){case 1:Rs(h,5);break;case 4:Rs(h,10);break;case 3:Rs(h,6);break;default:Rs(h,2)}}}function _c(h,_){let E=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(E*=2),E*_}function Rs(h,_){if(h.j.info("Error code "+_),_==2){var E=b(h.fb,h),C=h.Xa;const q=!C;C=new Ss(C||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Tr(C,"https"),Ia(C),q?bh(C.toString(),E):Na(C.toString(),E)}else Pt(2);h.G=0,h.l&&h.l.sa(_),Oh(h),Ch(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function Oh(h){if(h.G=0,h.ka=[],h.l){const _=Pn(h.h);(_.length!=0||h.i.length!=0)&&(V(h.ka,_),V(h.ka,h.i),h.h.i.length=0,W(h.i),h.i.length=0),h.l.ra()}}function kh(h,_,E){var C=E instanceof Ss?Ct(E):new Ss(E);if(C.g!="")_&&(C.g=_+"."+C.g),Ra(C,C.s);else{var q=d.location;C=q.protocol,_=_?_+"."+q.hostname:q.hostname,q=+q.port;var Y=new Ss(null);C&&Tr(Y,C),_&&(Y.g=_),q&&Ra(Y,q),E&&(Y.l=E),C=Y}return E=h.D,_=h.ya,E&&_&&nt(C,E,_),nt(C,"VER",h.la),Pa(h,C),C}function Dh(h,_,E){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new rt(new br({eb:E})):new rt(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ph(){}n=Ph.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function jo(){}jo.prototype.g=function(h,_){return new Mn(h,_)};function Mn(h,_){vt.call(this),this.g=new Mo(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!B(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!B(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Xi(this)}M(Mn,vt),Mn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Mn.prototype.close=function(){pc(this.g)},Mn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var E={};E.__data__=h,h=E}else this.u&&(E={},E.__data__=tc(h),h=E);_.i.push(new Ap(_.Ya++,h)),_.G==3&&Uo(_)},Mn.prototype.N=function(){this.g.l=null,delete this.j,pc(this.g),delete this.g,Mn.aa.N.call(this)};function Mh(h){ur.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const E in _){h=E;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}M(Mh,ur);function Lh(){Ni.call(this),this.status=1}M(Lh,Ni);function Xi(h){this.g=h}M(Xi,Ph),Xi.prototype.ua=function(){Vt(this.g,"a")},Xi.prototype.ta=function(h){Vt(this.g,new Mh(h))},Xi.prototype.sa=function(h){Vt(this.g,new Lh)},Xi.prototype.ra=function(){Vt(this.g,"b")},jo.prototype.createWebChannel=jo.prototype.g,Mn.prototype.send=Mn.prototype.o,Mn.prototype.open=Mn.prototype.m,Mn.prototype.close=Mn.prototype.close,Y1=function(){return new jo},$1=function(){return wo()},K1=oi,T_={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ht.NO_ERROR=0,Ht.TIMEOUT=8,Ht.HTTP_ERROR=6,nd=Ht,Es.COMPLETE="complete",W1=Es,gh.EventType=Hi,Hi.OPEN="a",Hi.CLOSE="b",Hi.ERROR="c",Hi.MESSAGE="d",vt.prototype.listen=vt.prototype.K,vu=gh,rt.prototype.listenOnce=rt.prototype.L,rt.prototype.getLastError=rt.prototype.Ka,rt.prototype.getLastErrorCode=rt.prototype.Ba,rt.prototype.getStatus=rt.prototype.Z,rt.prototype.getResponseJson=rt.prototype.Oa,rt.prototype.getResponseText=rt.prototype.oa,rt.prototype.send=rt.prototype.ea,rt.prototype.setWithCredentials=rt.prototype.Ha,G1=rt}).apply(typeof Vf<"u"?Vf:typeof self<"u"?self:typeof window<"u"?window:{});const rb="@firebase/firestore",ab="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}An.UNAUTHENTICATED=new An(null),An.GOOGLE_CREDENTIALS=new An("google-credentials-uid"),An.FIRST_PARTY=new An("first-party-uid"),An.MOCK_USER=new An("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yl="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=new Hd("@firebase/firestore");function _l(){return mo.logLevel}function Ee(n,...e){if(mo.logLevel<=He.DEBUG){const t=e.map(By);mo.debug(`Firestore (${Yl}): ${n}`,...t)}}function ir(n,...e){if(mo.logLevel<=He.ERROR){const t=e.map(By);mo.error(`Firestore (${Yl}): ${n}`,...t)}}function Pl(n,...e){if(mo.logLevel<=He.WARN){const t=e.map(By);mo.warn(`Firestore (${Yl}): ${n}`,...t)}}function By(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(n="Unexpected state"){const e=`FIRESTORE (${Yl}) INTERNAL ASSERTION FAILED: `+n;throw ir(e),new Error(e)}function ot(n,e){n||De()}function Le(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ie extends _s{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ZM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(An.UNAUTHENTICATED))}shutdown(){}}class JM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class eL{constructor(e){this.t=e,this.currentUser=An.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ot(this.o===void 0);let i=this.i;const a=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new ia;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new ia,e.enqueueRetryable(()=>a(this.currentUser))};const u=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},d=p=>{Ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(Ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new ia)}},0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(Ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ot(typeof i.accessToken=="string"),new Q1(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ot(e===null||typeof e=="string"),new An(e)}}class tL{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=An.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class nL{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new tL(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(An.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ob{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iL{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,jn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){ot(this.o===void 0);const i=l=>{l.error!=null&&Ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const u=l.token!==this.R;return this.R=l.token,Ee("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const a=l=>{Ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?a(l):Ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new ob(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ot(typeof t.token=="string"),this.R=t.token,new ob(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sL(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const a=sL(40);for(let l=0;l<a.length;++l)i.length<20&&a[l]<t&&(i+=e.charAt(a[l]%62))}return i}}function $e(n,e){return n<e?-1:n>e?1:0}function Ml(n,e,t){return n.length===e.length&&n.every((i,a)=>t(i,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb=-62135596800,cb=1e6;class Yt{static now(){return Yt.fromMillis(Date.now())}static fromDate(e){return Yt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*cb);return new Yt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Ie(le.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Ie(le.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<lb)throw new Ie(le.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ie(le.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/cb}_compareTo(e){return this.seconds===e.seconds?$e(this.nanoseconds,e.nanoseconds):$e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-lb;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{static fromTimestamp(e){return new Pe(e)}static min(){return new Pe(new Yt(0,0))}static max(){return new Pe(new Yt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub="__name__";class rs{constructor(e,t,i){t===void 0?t=0:t>e.length&&De(),i===void 0?i=e.length-t:i>e.length-t&&De(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return rs.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof rs?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let a=0;a<i;a++){const l=rs.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Math.sign(e.length-t.length)}static compareSegments(e,t){const i=rs.isNumericId(e),a=rs.isNumericId(t);return i&&!a?-1:!i&&a?1:i&&a?rs.extractNumericId(e).compare(rs.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return na.fromString(e.substring(4,e.length-2))}}class xt extends rs{construct(e,t,i){return new xt(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new Ie(le.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(a=>a.length>0))}return new xt(t)}static emptyPath(){return new xt([])}}const rL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _n extends rs{construct(e,t,i){return new _n(e,t,i)}static isValidIdentifier(e){return rL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ub}static keyField(){return new _n([ub])}static fromServerFormat(e){const t=[];let i="",a=0;const l=()=>{if(i.length===0)throw new Ie(le.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let u=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new Ie(le.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new Ie(le.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,a+=2}else d==="`"?(u=!u,a++):d!=="."||u?(i+=d,a++):(l(),a++)}if(l(),u)throw new Ie(le.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _n(t)}static emptyPath(){return new _n([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.path=e}static fromPath(e){return new Ne(xt.fromString(e))}static fromName(e){return new Ne(xt.fromString(e).popFirst(5))}static empty(){return new Ne(xt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return xt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ne(new xt(e.slice()))}}/**
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
 */const Fu=-1;function aL(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,a=Pe.fromTimestamp(i===1e9?new Yt(t+1,0):new Yt(t,i));return new oa(a,Ne.empty(),e)}function oL(n){return new oa(n.readTime,n.key,Fu)}class oa{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new oa(Pe.min(),Ne.empty(),Fu)}static max(){return new oa(Pe.max(),Ne.empty(),Fu)}}function lL(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Ne.comparator(n.documentKey,e.documentKey),t!==0?t:$e(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ql(n){if(n.code!==le.FAILED_PRECONDITION||n.message!==cL)throw n;Ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&De(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new se((i,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof se?t:se.resolve(t)}catch(t){return se.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):se.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):se.reject(t)}static resolve(e){return new se((t,i)=>{t(e)})}static reject(e){return new se((t,i)=>{i(e)})}static waitFor(e){return new se((t,i)=>{let a=0,l=0,u=!1;e.forEach(d=>{++a,d.next(()=>{++l,u&&l===a&&t()},p=>i(p))}),u=!0,l===a&&t()})}static or(e){let t=se.resolve(!1);for(const i of e)t=t.next(a=>a?se.resolve(a):i());return t}static forEach(e,t){const i=[];return e.forEach((a,l)=>{i.push(t.call(this,a,l))}),this.waitFor(i)}static mapArray(e,t){return new se((i,a)=>{const l=e.length,u=new Array(l);let d=0;for(let p=0;p<l;p++){const m=p;t(e[m]).next(v=>{u[m]=v,++d,d===l&&i(u)},v=>a(v))}})}static doWhile(e,t){return new se((i,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):i()};l()})}}function hL(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Xl(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Jd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.oe(i),this._e=i=>t.writeSequenceNumber(i))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Jd.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy=-1;function ep(n){return n==null}function Cd(n){return n===0&&1/n==-1/0}function fL(n){return typeof n=="number"&&Number.isInteger(n)&&!Cd(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1="";function dL(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=hb(e)),e=pL(n.get(t),e);return hb(e)}function pL(n,e){let t=e;const i=n.length;for(let a=0;a<i;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case Z1:t+="";break;default:t+=l}}return t}function hb(n){return n+Z1+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ea(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function J1(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,t){this.comparator=e,this.root=t||mn.EMPTY}insert(e,t){return new At(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,mn.BLACK,null,null))}remove(e){return new At(this.comparator,this.root.remove(e,this.comparator).copy(null,null,mn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const a=this.comparator(e,i.key);if(a===0)return t+i.left.size;a<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new jf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new jf(this.root,e,this.comparator,!1)}getReverseIterator(){return new jf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new jf(this.root,e,this.comparator,!0)}}class jf{constructor(e,t,i,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class mn{constructor(e,t,i,a,l){this.key=e,this.value=t,this.color=i??mn.RED,this.left=a??mn.EMPTY,this.right=l??mn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,a,l){return new mn(e??this.key,t??this.value,i??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let a=this;const l=i(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,i),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,i)),a.fixUp()}removeMin(){if(this.left.isEmpty())return mn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return mn.EMPTY;i=a.right.min(),a=a.copy(i.key,i.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw De();const e=this.left.check();if(e!==this.right.check())throw De();return e+(this.isRed()?0:1)}}mn.EMPTY=null,mn.RED=!0,mn.BLACK=!1;mn.EMPTY=new class{constructor(){this.size=0}get key(){throw De()}get value(){throw De()}get color(){throw De()}get left(){throw De()}get right(){throw De()}copy(e,t,i,a,l){return this}insert(e,t,i){return new mn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.comparator=e,this.data=new At(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const a=i.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new db(this.data.getIterator())}getIteratorFrom(e){return new db(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Qt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=i.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Qt(this.comparator);return t.data=e,t}}class db{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.fields=e,e.sort(_n.comparator)}static empty(){return new ti([])}unionWith(e){let t=new Qt(_n.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new ti(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ml(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class eC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new eC("Invalid base64 string: "+l):l}}(e);return new yn(t)}static fromUint8Array(e){const t=function(a){let l="";for(let u=0;u<a.length;++u)l+=String.fromCharCode(a[u]);return l}(e);return new yn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let a=0;a<t.length;a++)i[a]=t.charCodeAt(a);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yn.EMPTY_BYTE_STRING=new yn("");const mL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function la(n){if(ot(!!n),typeof n=="string"){let e=0;const t=mL.exec(n);if(ot(!!t),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Lt(n.seconds),nanos:Lt(n.nanos)}}function Lt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ca(n){return typeof n=="string"?yn.fromBase64String(n):yn.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC="server_timestamp",nC="__type__",iC="__previous_value__",sC="__local_write_time__";function zy(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[nC])===null||t===void 0?void 0:t.stringValue)===tC}function tp(n){const e=n.mapValue.fields[iC];return zy(e)?tp(e):e}function zu(n){const e=la(n.mapValue.fields[sC].timestampValue);return new Yt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{constructor(e,t,i,a,l,u,d,p,m){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=a,this.ssl=l,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=m}}const Rd="(default)";class Hu{constructor(e,t){this.projectId=e,this.database=t||Rd}static empty(){return new Hu("","")}get isDefaultDatabase(){return this.database===Rd}isEqual(e){return e instanceof Hu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC="__type__",_L="__max__",Bf={mapValue:{}},aC="__vector__",Id="value";function ua(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?zy(n)?4:vL(n)?9007199254740991:yL(n)?10:11:De()}function ms(n,e){if(n===e)return!0;const t=ua(n);if(t!==ua(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return zu(n).isEqual(zu(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const u=la(a.timestampValue),d=la(l.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(a,l){return ca(a.bytesValue).isEqual(ca(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(a,l){return Lt(a.geoPointValue.latitude)===Lt(l.geoPointValue.latitude)&&Lt(a.geoPointValue.longitude)===Lt(l.geoPointValue.longitude)}(n,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return Lt(a.integerValue)===Lt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const u=Lt(a.doubleValue),d=Lt(l.doubleValue);return u===d?Cd(u)===Cd(d):isNaN(u)&&isNaN(d)}return!1}(n,e);case 9:return Ml(n.arrayValue.values||[],e.arrayValue.values||[],ms);case 10:case 11:return function(a,l){const u=a.mapValue.fields||{},d=l.mapValue.fields||{};if(fb(u)!==fb(d))return!1;for(const p in u)if(u.hasOwnProperty(p)&&(d[p]===void 0||!ms(u[p],d[p])))return!1;return!0}(n,e);default:return De()}}function qu(n,e){return(n.values||[]).find(t=>ms(t,e))!==void 0}function Ll(n,e){if(n===e)return 0;const t=ua(n),i=ua(e);if(t!==i)return $e(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return $e(n.booleanValue,e.booleanValue);case 2:return function(l,u){const d=Lt(l.integerValue||l.doubleValue),p=Lt(u.integerValue||u.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return pb(n.timestampValue,e.timestampValue);case 4:return pb(zu(n),zu(e));case 5:return $e(n.stringValue,e.stringValue);case 6:return function(l,u){const d=ca(l),p=ca(u);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,u){const d=l.split("/"),p=u.split("/");for(let m=0;m<d.length&&m<p.length;m++){const v=$e(d[m],p[m]);if(v!==0)return v}return $e(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,u){const d=$e(Lt(l.latitude),Lt(u.latitude));return d!==0?d:$e(Lt(l.longitude),Lt(u.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return mb(n.arrayValue,e.arrayValue);case 10:return function(l,u){var d,p,m,v;const S=l.fields||{},b=u.fields||{},k=(d=S[Id])===null||d===void 0?void 0:d.arrayValue,M=(p=b[Id])===null||p===void 0?void 0:p.arrayValue,W=$e(((m=k==null?void 0:k.values)===null||m===void 0?void 0:m.length)||0,((v=M==null?void 0:M.values)===null||v===void 0?void 0:v.length)||0);return W!==0?W:mb(k,M)}(n.mapValue,e.mapValue);case 11:return function(l,u){if(l===Bf.mapValue&&u===Bf.mapValue)return 0;if(l===Bf.mapValue)return 1;if(u===Bf.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),m=u.fields||{},v=Object.keys(m);p.sort(),v.sort();for(let S=0;S<p.length&&S<v.length;++S){const b=$e(p[S],v[S]);if(b!==0)return b;const k=Ll(d[p[S]],m[v[S]]);if(k!==0)return k}return $e(p.length,v.length)}(n.mapValue,e.mapValue);default:throw De()}}function pb(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return $e(n,e);const t=la(n),i=la(e),a=$e(t.seconds,i.seconds);return a!==0?a:$e(t.nanos,i.nanos)}function mb(n,e){const t=n.values||[],i=e.values||[];for(let a=0;a<t.length&&a<i.length;++a){const l=Ll(t[a],i[a]);if(l)return l}return $e(t.length,i.length)}function Ul(n){return S_(n)}function S_(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=la(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return ca(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Ne.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",a=!0;for(const l of t.values||[])a?a=!1:i+=",",i+=S_(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const u of i)l?l=!1:a+=",",a+=`${u}:${S_(t.fields[u])}`;return a+"}"}(n.mapValue):De()}function id(n){switch(ua(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=tp(n);return e?16+id(e):16;case 5:return 2*n.stringValue.length;case 6:return ca(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((a,l)=>a+id(l),0)}(n.arrayValue);case 10:case 11:return function(i){let a=0;return Ea(i.fields,(l,u)=>{a+=l.length+id(u)}),a}(n.mapValue);default:throw De()}}function b_(n){return!!n&&"integerValue"in n}function Hy(n){return!!n&&"arrayValue"in n}function gb(n){return!!n&&"nullValue"in n}function _b(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function sd(n){return!!n&&"mapValue"in n}function yL(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[rC])===null||t===void 0?void 0:t.stringValue)===aC}function Iu(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ea(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Iu(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Iu(n.arrayValue.values[t]);return e}return Object.assign({},n)}function vL(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===_L}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.value=e}static empty(){return new Wn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!sd(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Iu(t)}setAll(e){let t=_n.emptyPath(),i={},a=[];e.forEach((u,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,a),i={},a=[],t=d.popLast()}u?i[d.lastSegment()]=Iu(u):a.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,a)}delete(e){const t=this.field(e.popLast());sd(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ms(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let a=t.mapValue.fields[e.get(i)];sd(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,i){Ea(t,(a,l)=>e[a]=l);for(const a of i)delete e[a]}clone(){return new Wn(Iu(this.value))}}function oC(n){const e=[];return Ea(n.fields,(t,i)=>{const a=new _n([t]);if(sd(i)){const l=oC(i.mapValue).fields;if(l.length===0)e.push(a);else for(const u of l)e.push(a.child(u))}else e.push(a)}),new ti(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,t,i,a,l,u,d){this.key=e,this.documentType=t,this.version=i,this.readTime=a,this.createTime=l,this.data=u,this.documentState=d}static newInvalidDocument(e){return new Rn(e,0,Pe.min(),Pe.min(),Pe.min(),Wn.empty(),0)}static newFoundDocument(e,t,i,a){return new Rn(e,1,t,Pe.min(),i,a,0)}static newNoDocument(e,t){return new Rn(e,2,t,Pe.min(),Pe.min(),Wn.empty(),0)}static newUnknownDocument(e,t){return new Rn(e,3,t,Pe.min(),Pe.min(),Wn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Rn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Rn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Nd{constructor(e,t){this.position=e,this.inclusive=t}}function yb(n,e,t){let i=0;for(let a=0;a<n.position.length;a++){const l=e[a],u=n.position[a];if(l.field.isKeyField()?i=Ne.comparator(Ne.fromName(u.referenceValue),t.key):i=Ll(u,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function vb(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ms(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class xd{constructor(e,t="asc"){this.field=e,this.dir=t}}function EL(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class lC{}class $t extends lC{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new SL(e,t,i):t==="array-contains"?new wL(e,i):t==="in"?new CL(e,i):t==="not-in"?new RL(e,i):t==="array-contains-any"?new IL(e,i):new $t(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new bL(e,i):new AL(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ll(t,this.value)):t!==null&&ua(this.value)===ua(t)&&this.matchesComparison(Ll(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return De()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gs extends lC{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new gs(e,t)}matches(e){return cC(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function cC(n){return n.op==="and"}function uC(n){return TL(n)&&cC(n)}function TL(n){for(const e of n.filters)if(e instanceof gs)return!1;return!0}function A_(n){if(n instanceof $t)return n.field.canonicalString()+n.op.toString()+Ul(n.value);if(uC(n))return n.filters.map(e=>A_(e)).join(",");{const e=n.filters.map(t=>A_(t)).join(",");return`${n.op}(${e})`}}function hC(n,e){return n instanceof $t?function(i,a){return a instanceof $t&&i.op===a.op&&i.field.isEqual(a.field)&&ms(i.value,a.value)}(n,e):n instanceof gs?function(i,a){return a instanceof gs&&i.op===a.op&&i.filters.length===a.filters.length?i.filters.reduce((l,u,d)=>l&&hC(u,a.filters[d]),!0):!1}(n,e):void De()}function fC(n){return n instanceof $t?function(t){return`${t.field.canonicalString()} ${t.op} ${Ul(t.value)}`}(n):n instanceof gs?function(t){return t.op.toString()+" {"+t.getFilters().map(fC).join(" ,")+"}"}(n):"Filter"}class SL extends $t{constructor(e,t,i){super(e,t,i),this.key=Ne.fromName(i.referenceValue)}matches(e){const t=Ne.comparator(e.key,this.key);return this.matchesComparison(t)}}class bL extends $t{constructor(e,t){super(e,"in",t),this.keys=dC("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class AL extends $t{constructor(e,t){super(e,"not-in",t),this.keys=dC("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function dC(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>Ne.fromName(i.referenceValue))}class wL extends $t{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Hy(t)&&qu(t.arrayValue,this.value)}}class CL extends $t{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&qu(this.value.arrayValue,t)}}class RL extends $t{constructor(e,t){super(e,"not-in",t)}matches(e){if(qu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!qu(this.value.arrayValue,t)}}class IL extends $t{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Hy(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>qu(this.value.arrayValue,i))}}/**
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
 */class NL{constructor(e,t=null,i=[],a=[],l=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=a,this.limit=l,this.startAt=u,this.endAt=d,this.le=null}}function Eb(n,e=null,t=[],i=[],a=null,l=null,u=null){return new NL(n,e,t,i,a,l,u)}function qy(n){const e=Le(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>A_(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),ep(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Ul(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Ul(i)).join(",")),e.le=t}return e.le}function Gy(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!EL(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!hC(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!vb(n.startAt,e.startAt)&&vb(n.endAt,e.endAt)}function w_(n){return Ne.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,t=null,i=[],a=[],l=null,u="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=a,this.limit=l,this.limitType=u,this.startAt=d,this.endAt=p,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function xL(n,e,t,i,a,l,u,d){return new np(n,e,t,i,a,l,u,d)}function Wy(n){return new np(n)}function Tb(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function OL(n){return n.collectionGroup!==null}function Nu(n){const e=Le(n);if(e.he===null){e.he=[];const t=new Set;for(const l of e.explicitOrderBy)e.he.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new Qt(_n.comparator);return u.filters.forEach(p=>{p.getFlattenedFilters().forEach(m=>{m.isInequality()&&(d=d.add(m.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.he.push(new xd(l,i))}),t.has(_n.keyField().canonicalString())||e.he.push(new xd(_n.keyField(),i))}return e.he}function fs(n){const e=Le(n);return e.Pe||(e.Pe=kL(e,Nu(n))),e.Pe}function kL(n,e){if(n.limitType==="F")return Eb(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new xd(a.field,l)});const t=n.endAt?new Nd(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Nd(n.startAt.position,n.startAt.inclusive):null;return Eb(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function C_(n,e,t){return new np(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ip(n,e){return Gy(fs(n),fs(e))&&n.limitType===e.limitType}function pC(n){return`${qy(fs(n))}|lt:${n.limitType}`}function yl(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(a=>fC(a)).join(", ")}]`),ep(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(a=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(a)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(a=>Ul(a)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(a=>Ul(a)).join(",")),`Target(${i})`}(fs(n))}; limitType=${n.limitType})`}function sp(n,e){return e.isFoundDocument()&&function(i,a){const l=a.key.path;return i.collectionGroup!==null?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):Ne.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,a){for(const l of Nu(i))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,a){for(const l of i.filters)if(!l.matches(a))return!1;return!0}(n,e)&&function(i,a){return!(i.startAt&&!function(u,d,p){const m=yb(u,d,p);return u.inclusive?m<=0:m<0}(i.startAt,Nu(i),a)||i.endAt&&!function(u,d,p){const m=yb(u,d,p);return u.inclusive?m>=0:m>0}(i.endAt,Nu(i),a))}(n,e)}function DL(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function mC(n){return(e,t)=>{let i=!1;for(const a of Nu(n)){const l=PL(a,e,t);if(l!==0)return l;i=i||a.field.isKeyField()}return 0}}function PL(n,e,t){const i=n.field.isKeyField()?Ne.comparator(e.key,t.key):function(l,u,d){const p=u.data.field(l),m=d.data.field(l);return p!==null&&m!==null?Ll(p,m):De()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return De()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[a,l]of i)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),a=this.inner[i];if(a===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return i.length===1?delete this.inner[t]:i.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Ea(this.inner,(t,i)=>{for(const[a,l]of i)e(a,l)})}isEmpty(){return J1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ML=new At(Ne.comparator);function sr(){return ML}const gC=new At(Ne.comparator);function Eu(...n){let e=gC;for(const t of n)e=e.insert(t.key,t);return e}function _C(n){let e=gC;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function ro(){return xu()}function yC(){return xu()}function xu(){return new bo(n=>n.toString(),(n,e)=>n.isEqual(e))}const LL=new At(Ne.comparator),UL=new Qt(Ne.comparator);function We(...n){let e=UL;for(const t of n)e=e.add(t);return e}const VL=new Qt($e);function jL(){return VL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cd(e)?"-0":e}}function vC(n){return{integerValue:""+n}}function BL(n,e){return fL(e)?vC(e):Ky(n,e)}/**
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
 */class rp{constructor(){this._=void 0}}function FL(n,e,t){return n instanceof Od?function(a,l){const u={fields:{[nC]:{stringValue:tC},[sC]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&zy(l)&&(l=tp(l)),l&&(u.fields[iC]=l),{mapValue:u}}(t,e):n instanceof Vl?TC(n,e):n instanceof Gu?SC(n,e):function(a,l){const u=EC(a,l),d=Sb(u)+Sb(a.Ie);return b_(u)&&b_(a.Ie)?vC(d):Ky(a.serializer,d)}(n,e)}function zL(n,e,t){return n instanceof Vl?TC(n,e):n instanceof Gu?SC(n,e):t}function EC(n,e){return n instanceof kd?function(i){return b_(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class Od extends rp{}class Vl extends rp{constructor(e){super(),this.elements=e}}function TC(n,e){const t=bC(e);for(const i of n.elements)t.some(a=>ms(a,i))||t.push(i);return{arrayValue:{values:t}}}class Gu extends rp{constructor(e){super(),this.elements=e}}function SC(n,e){let t=bC(e);for(const i of n.elements)t=t.filter(a=>!ms(a,i));return{arrayValue:{values:t}}}class kd extends rp{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Sb(n){return Lt(n.integerValue||n.doubleValue)}function bC(n){return Hy(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HL{constructor(e,t){this.field=e,this.transform=t}}function qL(n,e){return n.field.isEqual(e.field)&&function(i,a){return i instanceof Vl&&a instanceof Vl||i instanceof Gu&&a instanceof Gu?Ml(i.elements,a.elements,ms):i instanceof kd&&a instanceof kd?ms(i.Ie,a.Ie):i instanceof Od&&a instanceof Od}(n.transform,e.transform)}class GL{constructor(e,t){this.version=e,this.transformResults=t}}class ds{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ds}static exists(e){return new ds(void 0,e)}static updateTime(e){return new ds(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rd(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ap{}function AC(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new CC(n.key,ds.none()):new rh(n.key,n.data,ds.none());{const t=n.data,i=Wn.empty();let a=new Qt(_n.comparator);for(let l of e.fields)if(!a.has(l)){let u=t.field(l);u===null&&l.length>1&&(l=l.popLast(),u=t.field(l)),u===null?i.delete(l):i.set(l,u),a=a.add(l)}return new Ta(n.key,i,new ti(a.toArray()),ds.none())}}function WL(n,e,t){n instanceof rh?function(a,l,u){const d=a.value.clone(),p=Ab(a.fieldTransforms,l,u.transformResults);d.setAll(p),l.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Ta?function(a,l,u){if(!rd(a.precondition,l))return void l.convertToUnknownDocument(u.version);const d=Ab(a.fieldTransforms,l,u.transformResults),p=l.data;p.setAll(wC(a)),p.setAll(d),l.convertToFoundDocument(u.version,p).setHasCommittedMutations()}(n,e,t):function(a,l,u){l.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,t)}function Ou(n,e,t,i){return n instanceof rh?function(l,u,d,p){if(!rd(l.precondition,u))return d;const m=l.value.clone(),v=wb(l.fieldTransforms,p,u);return m.setAll(v),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null}(n,e,t,i):n instanceof Ta?function(l,u,d,p){if(!rd(l.precondition,u))return d;const m=wb(l.fieldTransforms,p,u),v=u.data;return v.setAll(wC(l)),v.setAll(m),u.convertToFoundDocument(u.version,v).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(S=>S.field))}(n,e,t,i):function(l,u,d){return rd(l.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d}(n,e,t)}function KL(n,e){let t=null;for(const i of n.fieldTransforms){const a=e.data.field(i.field),l=EC(i.transform,a||null);l!=null&&(t===null&&(t=Wn.empty()),t.set(i.field,l))}return t||null}function bb(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,a){return i===void 0&&a===void 0||!(!i||!a)&&Ml(i,a,(l,u)=>qL(l,u))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class rh extends ap{constructor(e,t,i,a=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Ta extends ap{constructor(e,t,i,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function wC(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Ab(n,e,t){const i=new Map;ot(n.length===t.length);for(let a=0;a<t.length;a++){const l=n[a],u=l.transform,d=e.data.field(l.field);i.set(l.field,zL(u,d,t[a]))}return i}function wb(n,e,t){const i=new Map;for(const a of n){const l=a.transform,u=t.data.field(a.field);i.set(a.field,FL(l,u,e))}return i}class CC extends ap{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $L extends ap{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(e,t,i,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=a}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&WL(l,e,i[a])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ou(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ou(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=yC();return this.mutations.forEach(a=>{const l=e.get(a.key),u=l.overlayedDocument;let d=this.applyToLocalView(u,l.mutatedFields);d=t.has(a.key)?null:d;const p=AC(u,d);p!==null&&i.set(a.key,p),u.isValidDocument()||u.convertToNoDocument(Pe.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),We())}isEqual(e){return this.batchId===e.batchId&&Ml(this.mutations,e.mutations,(t,i)=>bb(t,i))&&Ml(this.baseMutations,e.baseMutations,(t,i)=>bb(t,i))}}class $y{constructor(e,t,i,a){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=a}static from(e,t,i){ot(e.mutations.length===i.length);let a=function(){return LL}();const l=e.mutations;for(let u=0;u<l.length;u++)a=a.insert(l[u].key,i[u].version);return new $y(e,t,i,a)}}/**
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
 */class QL{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class XL{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zt,Je;function ZL(n){switch(n){case le.OK:return De();case le.CANCELLED:case le.UNKNOWN:case le.DEADLINE_EXCEEDED:case le.RESOURCE_EXHAUSTED:case le.INTERNAL:case le.UNAVAILABLE:case le.UNAUTHENTICATED:return!1;case le.INVALID_ARGUMENT:case le.NOT_FOUND:case le.ALREADY_EXISTS:case le.PERMISSION_DENIED:case le.FAILED_PRECONDITION:case le.ABORTED:case le.OUT_OF_RANGE:case le.UNIMPLEMENTED:case le.DATA_LOSS:return!0;default:return De()}}function RC(n){if(n===void 0)return ir("GRPC error has no .code"),le.UNKNOWN;switch(n){case zt.OK:return le.OK;case zt.CANCELLED:return le.CANCELLED;case zt.UNKNOWN:return le.UNKNOWN;case zt.DEADLINE_EXCEEDED:return le.DEADLINE_EXCEEDED;case zt.RESOURCE_EXHAUSTED:return le.RESOURCE_EXHAUSTED;case zt.INTERNAL:return le.INTERNAL;case zt.UNAVAILABLE:return le.UNAVAILABLE;case zt.UNAUTHENTICATED:return le.UNAUTHENTICATED;case zt.INVALID_ARGUMENT:return le.INVALID_ARGUMENT;case zt.NOT_FOUND:return le.NOT_FOUND;case zt.ALREADY_EXISTS:return le.ALREADY_EXISTS;case zt.PERMISSION_DENIED:return le.PERMISSION_DENIED;case zt.FAILED_PRECONDITION:return le.FAILED_PRECONDITION;case zt.ABORTED:return le.ABORTED;case zt.OUT_OF_RANGE:return le.OUT_OF_RANGE;case zt.UNIMPLEMENTED:return le.UNIMPLEMENTED;case zt.DATA_LOSS:return le.DATA_LOSS;default:return De()}}(Je=zt||(zt={}))[Je.OK=0]="OK",Je[Je.CANCELLED=1]="CANCELLED",Je[Je.UNKNOWN=2]="UNKNOWN",Je[Je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Je[Je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Je[Je.NOT_FOUND=5]="NOT_FOUND",Je[Je.ALREADY_EXISTS=6]="ALREADY_EXISTS",Je[Je.PERMISSION_DENIED=7]="PERMISSION_DENIED",Je[Je.UNAUTHENTICATED=16]="UNAUTHENTICATED",Je[Je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Je[Je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Je[Je.ABORTED=10]="ABORTED",Je[Je.OUT_OF_RANGE=11]="OUT_OF_RANGE",Je[Je.UNIMPLEMENTED=12]="UNIMPLEMENTED",Je[Je.INTERNAL=13]="INTERNAL",Je[Je.UNAVAILABLE=14]="UNAVAILABLE",Je[Je.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function JL(){return new TextEncoder}/**
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
 */const eU=new na([4294967295,4294967295],0);function Cb(n){const e=JL().encode(n),t=new q1;return t.update(e),new Uint8Array(t.digest())}function Rb(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new na([t,i],0),new na([a,l],0)]}class Yy{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Tu(`Invalid padding: ${t}`);if(i<0)throw new Tu(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Tu(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Tu(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=na.fromNumber(this.Ee)}Ae(e,t,i){let a=e.add(t.multiply(na.fromNumber(i)));return a.compare(eU)===1&&(a=new na([a.getBits(0),a.getBits(1)],0)),a.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=Cb(e),[i,a]=Rb(t);for(let l=0;l<this.hashCount;l++){const u=this.Ae(i,a,l);if(!this.Re(u))return!1}return!0}static create(e,t,i){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),u=new Yy(l,a,t);return i.forEach(d=>u.insert(d)),u}insert(e){if(this.Ee===0)return;const t=Cb(e),[i,a]=Rb(t);for(let l=0;l<this.hashCount;l++){const u=this.Ae(i,a,l);this.Ve(u)}}Ve(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Tu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,t,i,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const a=new Map;return a.set(e,ah.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new op(Pe.min(),a,new At($e),sr(),We())}}class ah{constructor(e,t,i,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new ah(i,t,We(),We(),We())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,t,i,a){this.me=e,this.removedTargetIds=t,this.key=i,this.fe=a}}class IC{constructor(e,t){this.targetId=e,this.ge=t}}class NC{constructor(e,t,i=yn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=a}}class Ib{constructor(){this.pe=0,this.ye=Nb(),this.we=yn.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=We(),t=We(),i=We();return this.ye.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:i=i.add(a);break;default:De()}}),new ah(this.we,this.be,e,t,i)}Me(){this.Se=!1,this.ye=Nb()}xe(e,t){this.Se=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,ot(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class tU{constructor(e){this.ke=e,this.qe=new Map,this.Qe=sr(),this.$e=Ff(),this.Ke=Ff(),this.Ue=new At($e)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const i=this.He(t);switch(e.state){case 0:this.Je(t)&&i.Ce(e.resumeToken);break;case 1:i.Be(),i.De||i.Me(),i.Ce(e.resumeToken);break;case 2:i.Be(),i.De||this.removeTarget(t);break;case 3:this.Je(t)&&(i.Le(),i.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),i.Ce(e.resumeToken));break;default:De()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((i,a)=>{this.Je(a)&&t(a)})}Ze(e){const t=e.targetId,i=e.ge.count,a=this.Xe(t);if(a){const l=a.target;if(w_(l))if(i===0){const u=new Ne(l.path);this.ze(t,u,Rn.newNoDocument(u,Pe.min()))}else ot(i===1);else{const u=this.et(t);if(u!==i){const d=this.tt(e),p=d?this.nt(d,e,u):1;if(p!==0){this.Ye(t);const m=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(t,m)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:a=0},hashCount:l=0}=t;let u,d;try{u=ca(i).toUint8Array()}catch(p){if(p instanceof eC)return Pl("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Yy(u,a,l)}catch(p){return Pl(p instanceof Tu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Ee===0?null:d}nt(e,t,i){return t.ge.count===i-this.st(e,t.targetId)?0:2}st(e,t){const i=this.ke.getRemoteKeysForTarget(t);let a=0;return i.forEach(l=>{const u=this.ke.it(),d=`projects/${u.projectId}/databases/${u.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.ze(t,l,null),a++)}),a}ot(e){const t=new Map;this.qe.forEach((l,u)=>{const d=this.Xe(u);if(d){if(l.current&&w_(d.target)){const p=new Ne(d.target.path);this._t(p).has(u)||this.ut(u,p)||this.ze(u,p,Rn.newNoDocument(p,e))}l.ve&&(t.set(u,l.Fe()),l.Me())}});let i=We();this.Ke.forEach((l,u)=>{let d=!0;u.forEachWhile(p=>{const m=this.Xe(p);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.Qe.forEach((l,u)=>u.setReadTime(e));const a=new op(e,t,this.Ue,this.Qe,i);return this.Qe=sr(),this.$e=Ff(),this.Ke=Ff(),this.Ue=new At($e),a}Ge(e,t){if(!this.Je(e))return;const i=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,i),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,i){if(!this.Je(e))return;const a=this.He(e);this.ut(e,t)?a.xe(t,1):a.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),i&&(this.Qe=this.Qe.insert(t,i))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new Ib,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new Qt($e),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Qt($e),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||Ee("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Ib),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function Ff(){return new At(Ne.comparator)}function Nb(){return new At(Ne.comparator)}const nU={asc:"ASCENDING",desc:"DESCENDING"},iU={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sU={and:"AND",or:"OR"};class rU{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function R_(n,e){return n.useProto3Json||ep(e)?e:{value:e}}function Dd(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xC(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function aU(n,e){return Dd(n,e.toTimestamp())}function ps(n){return ot(!!n),Pe.fromTimestamp(function(t){const i=la(t);return new Yt(i.seconds,i.nanos)}(n))}function Qy(n,e){return I_(n,e).canonicalString()}function I_(n,e){const t=function(a){return new xt(["projects",a.projectId,"databases",a.database])}(n).child("documents");return e===void 0?t:t.child(e)}function OC(n){const e=xt.fromString(n);return ot(LC(e)),e}function N_(n,e){return Qy(n.databaseId,e.path)}function Bg(n,e){const t=OC(e);if(t.get(1)!==n.databaseId.projectId)throw new Ie(le.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Ie(le.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Ne(DC(t))}function kC(n,e){return Qy(n.databaseId,e)}function oU(n){const e=OC(n);return e.length===4?xt.emptyPath():DC(e)}function x_(n){return new xt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function DC(n){return ot(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function xb(n,e,t){return{name:N_(n,e),fields:t.value.mapValue.fields}}function lU(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:De()}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(m,v){return m.useProto3Json?(ot(v===void 0||typeof v=="string"),yn.fromBase64String(v||"")):(ot(v===void 0||v instanceof Buffer||v instanceof Uint8Array),yn.fromUint8Array(v||new Uint8Array))}(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&function(m){const v=m.code===void 0?le.UNKNOWN:RC(m.code);return new Ie(v,m.message||"")}(u);t=new NC(i,a,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const a=Bg(n,i.document.name),l=ps(i.document.updateTime),u=i.document.createTime?ps(i.document.createTime):Pe.min(),d=new Wn({mapValue:{fields:i.document.fields}}),p=Rn.newFoundDocument(a,l,u,d),m=i.targetIds||[],v=i.removedTargetIds||[];t=new ad(m,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const a=Bg(n,i.document),l=i.readTime?ps(i.readTime):Pe.min(),u=Rn.newNoDocument(a,l),d=i.removedTargetIds||[];t=new ad([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const a=Bg(n,i.document),l=i.removedTargetIds||[];t=new ad([],l,a,null)}else{if(!("filter"in e))return De();{e.filter;const i=e.filter;i.targetId;const{count:a=0,unchangedNames:l}=i,u=new XL(a,l),d=i.targetId;t=new IC(d,u)}}return t}function cU(n,e){let t;if(e instanceof rh)t={update:xb(n,e.key,e.value)};else if(e instanceof CC)t={delete:N_(n,e.key)};else if(e instanceof Ta)t={update:xb(n,e.key,e.data),updateMask:yU(e.fieldMask)};else{if(!(e instanceof $L))return De();t={verify:N_(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,u){const d=u.transform;if(d instanceof Od)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Vl)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Gu)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof kd)return{fieldPath:u.field.canonicalString(),increment:d.Ie};throw De()}(0,i))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:aU(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:De()}(n,e.precondition)),t}function uU(n,e){return n&&n.length>0?(ot(e!==void 0),n.map(t=>function(a,l){let u=a.updateTime?ps(a.updateTime):ps(l);return u.isEqual(Pe.min())&&(u=ps(l)),new GL(u,a.transformResults||[])}(t,e))):[]}function hU(n,e){return{documents:[kC(n,e.path)]}}function fU(n,e){const t={structuredQuery:{}},i=e.path;let a;e.collectionGroup!==null?(a=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=kC(n,a);const l=function(m){if(m.length!==0)return MC(gs.create(m,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const u=function(m){if(m.length!==0)return m.map(v=>function(b){return{field:vl(b.field),direction:mU(b.dir)}}(v))}(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=R_(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{ht:t,parent:a}}function dU(n){let e=oU(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let a=null;if(i>0){ot(i===1);const v=t.from[0];v.allDescendants?a=v.collectionId:e=e.child(v.collectionId)}let l=[];t.where&&(l=function(S){const b=PC(S);return b instanceof gs&&uC(b)?b.getFilters():[b]}(t.where));let u=[];t.orderBy&&(u=function(S){return S.map(b=>function(M){return new xd(El(M.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(M.direction))}(b))}(t.orderBy));let d=null;t.limit&&(d=function(S){let b;return b=typeof S=="object"?S.value:S,ep(b)?null:b}(t.limit));let p=null;t.startAt&&(p=function(S){const b=!!S.before,k=S.values||[];return new Nd(k,b)}(t.startAt));let m=null;return t.endAt&&(m=function(S){const b=!S.before,k=S.values||[];return new Nd(k,b)}(t.endAt)),xL(e,a,u,l,d,"F",p,m)}function pU(n,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return De()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function PC(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=El(t.unaryFilter.field);return $t.create(i,"==",{doubleValue:NaN});case"IS_NULL":const a=El(t.unaryFilter.field);return $t.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=El(t.unaryFilter.field);return $t.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=El(t.unaryFilter.field);return $t.create(u,"!=",{nullValue:"NULL_VALUE"});default:return De()}}(n):n.fieldFilter!==void 0?function(t){return $t.create(El(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return De()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return gs.create(t.compositeFilter.filters.map(i=>PC(i)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return De()}}(t.compositeFilter.op))}(n):De()}function mU(n){return nU[n]}function gU(n){return iU[n]}function _U(n){return sU[n]}function vl(n){return{fieldPath:n.canonicalString()}}function El(n){return _n.fromServerFormat(n.fieldPath)}function MC(n){return n instanceof $t?function(t){if(t.op==="=="){if(_b(t.value))return{unaryFilter:{field:vl(t.field),op:"IS_NAN"}};if(gb(t.value))return{unaryFilter:{field:vl(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(_b(t.value))return{unaryFilter:{field:vl(t.field),op:"IS_NOT_NAN"}};if(gb(t.value))return{unaryFilter:{field:vl(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vl(t.field),op:gU(t.op),value:t.value}}}(n):n instanceof gs?function(t){const i=t.getFilters().map(a=>MC(a));return i.length===1?i[0]:{compositeFilter:{op:_U(t.op),filters:i}}}(n):De()}function yU(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function LC(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,t,i,a,l=Pe.min(),u=Pe.min(),d=yn.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Zr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vU{constructor(e){this.Tt=e}}function EU(n){const e=dU({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?C_(e,e.limit,"L"):e}/**
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
 */class TU{constructor(){this.Tn=new SU}addToCollectionParentIndex(e,t){return this.Tn.add(t),se.resolve()}getCollectionParents(e,t){return se.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return se.resolve()}deleteFieldIndex(e,t){return se.resolve()}deleteAllFieldIndexes(e){return se.resolve()}createTargetIndexes(e,t){return se.resolve()}getDocumentsMatchingTarget(e,t){return se.resolve(null)}getIndexType(e,t){return se.resolve(0)}getFieldIndexes(e,t){return se.resolve([])}getNextCollectionGroupToUpdate(e){return se.resolve(null)}getMinOffset(e,t){return se.resolve(oa.min())}getMinOffsetFromCollectionGroup(e,t){return se.resolve(oa.min())}updateCollectionGroup(e,t,i){return se.resolve()}updateIndexEntries(e,t){return se.resolve()}}class SU{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),a=this.index[t]||new Qt(xt.comparator),l=!a.has(i);return this.index[t]=a.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),a=this.index[t];return a&&a.has(i)}getEntries(e){return(this.index[e]||new Qt(xt.comparator)).toArray()}}/**
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
 */const Ob={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},UC=41943040;class Gn{static withCacheSize(e){return new Gn(e,Gn.DEFAULT_COLLECTION_PERCENTILE,Gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gn.DEFAULT_COLLECTION_PERCENTILE=10,Gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Gn.DEFAULT=new Gn(UC,Gn.DEFAULT_COLLECTION_PERCENTILE,Gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Gn.DISABLED=new Gn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new jl(0)}static Un(){return new jl(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb="LruGarbageCollector",bU=1048576;function Db([n,e],[t,i]){const a=$e(n,t);return a===0?$e(e,i):a}class AU{constructor(e){this.Hn=e,this.buffer=new Qt(Db),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Db(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class wU{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){Ee(kb,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Xl(t)?Ee(kb,"Ignoring IndexedDB error during garbage collection: ",t):await Ql(t)}await this.er(3e5)})}}class CU{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return se.resolve(Jd.ae);const i=new AU(t);return this.tr.forEachTarget(e,a=>i.Zn(a.sequenceNumber)).next(()=>this.tr.rr(e,a=>i.Zn(a))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.tr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(Ee("LruGarbageCollector","Garbage collection skipped; disabled"),se.resolve(Ob)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(Ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ob):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let i,a,l,u,d,p,m;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(S=>(S>this.params.maximumSequenceNumbersToCollect?(Ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),a=this.params.maximumSequenceNumbersToCollect):a=S,u=Date.now(),this.nthSequenceNumber(e,a))).next(S=>(i=S,d=Date.now(),this.removeTargets(e,i,t))).next(S=>(l=S,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(S=>(m=Date.now(),_l()<=He.DEBUG&&Ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-v}ms
	Determined least recently used ${a} in `+(d-u)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${S} documents in `+(m-p)+`ms
Total Duration: ${m-v}ms`),se.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:S})))}}function RU(n,e){return new CU(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IU{constructor(){this.changes=new bo(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Rn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?se.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class NU{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xU{constructor(e,t,i,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=a}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(i=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(i!==null&&Ou(i.mutation,a,ti.empty(),Yt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,We()).next(()=>i))}getLocalViewOfDocuments(e,t,i=We()){const a=ro();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,i).next(l=>{let u=Eu();return l.forEach((d,p)=>{u=u.insert(d,p.overlayedDocument)}),u}))}getOverlayedDocuments(e,t){const i=ro();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,We()))}populateOverlays(e,t,i){const a=[];return i.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((u,d)=>{t.set(u,d)})})}computeViews(e,t,i,a){let l=sr();const u=xu(),d=function(){return xu()}();return t.forEach((p,m)=>{const v=i.get(m.key);a.has(m.key)&&(v===void 0||v.mutation instanceof Ta)?l=l.insert(m.key,m):v!==void 0?(u.set(m.key,v.mutation.getFieldMask()),Ou(v.mutation,m,v.mutation.getFieldMask(),Yt.now())):u.set(m.key,ti.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((m,v)=>u.set(m,v)),t.forEach((m,v)=>{var S;return d.set(m,new NU(v,(S=u.get(m))!==null&&S!==void 0?S:null))}),d))}recalculateAndSaveOverlays(e,t){const i=xu();let a=new At((u,d)=>u-d),l=We();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(u=>{for(const d of u)d.keys().forEach(p=>{const m=t.get(p);if(m===null)return;let v=i.get(p)||ti.empty();v=d.applyToLocalView(m,v),i.set(p,v);const S=(a.get(d.batchId)||We()).add(p);a=a.insert(d.batchId,S)})}).next(()=>{const u=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),m=p.key,v=p.value,S=yC();v.forEach(b=>{if(!l.has(b)){const k=AC(t.get(b),i.get(b));k!==null&&S.set(b,k),l=l.add(b)}}),u.push(this.documentOverlayCache.saveOverlays(e,m,S))}return se.waitFor(u)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,a){return function(u){return Ne.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):OL(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,a):this.getDocumentsMatchingCollectionQuery(e,t,i,a)}getNextDocuments(e,t,i,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,a).next(l=>{const u=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,a-l.size):se.resolve(ro());let d=Fu,p=l;return u.next(m=>se.forEach(m,(v,S)=>(d<S.largestBatchId&&(d=S.largestBatchId),l.get(v)?se.resolve():this.remoteDocumentCache.getEntry(e,v).next(b=>{p=p.insert(v,b)}))).next(()=>this.populateOverlays(e,m,l)).next(()=>this.computeViews(e,p,m,We())).next(v=>({batchId:d,changes:_C(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ne(t)).next(i=>{let a=Eu();return i.isFoundDocument()&&(a=a.insert(i.key,i)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,i,a){const l=t.collectionGroup;let u=Eu();return this.indexManager.getCollectionParents(e,l).next(d=>se.forEach(d,p=>{const m=function(S,b){return new np(b,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,m,i,a).next(v=>{v.forEach((S,b)=>{u=u.insert(S,b)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,t,i,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(u=>(l=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,a))).next(u=>{l.forEach((p,m)=>{const v=m.getKey();u.get(v)===null&&(u=u.insert(v,Rn.newInvalidDocument(v)))});let d=Eu();return u.forEach((p,m)=>{const v=l.get(p);v!==void 0&&Ou(v.mutation,m,ti.empty(),Yt.now()),sp(t,m)&&(d=d.insert(p,m))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OU{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return se.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:ps(a.createTime)}}(t)),se.resolve()}getNamedQuery(e,t){return se.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(a){return{name:a.name,query:EU(a.bundledQuery),readTime:ps(a.readTime)}}(t)),se.resolve()}}/**
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
 */class kU{constructor(){this.overlays=new At(Ne.comparator),this.Rr=new Map}getOverlay(e,t){return se.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ro();return se.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&i.set(a,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((a,l)=>{this.Et(e,t,l)}),se.resolve()}removeOverlaysForBatchId(e,t,i){const a=this.Rr.get(i);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.Rr.delete(i)),se.resolve()}getOverlaysForCollection(e,t,i){const a=ro(),l=t.length+1,u=new Ne(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const p=d.getNext().value,m=p.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===l&&p.largestBatchId>i&&a.set(p.getKey(),p)}return se.resolve(a)}getOverlaysForCollectionGroup(e,t,i,a){let l=new At((m,v)=>m-v);const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>i){let v=l.get(m.largestBatchId);v===null&&(v=ro(),l=l.insert(m.largestBatchId,v)),v.set(m.getKey(),m)}}const d=ro(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((m,v)=>d.set(m,v)),!(d.size()>=a)););return se.resolve(d)}Et(e,t,i){const a=this.overlays.get(i.key);if(a!==null){const u=this.Rr.get(a.largestBatchId).delete(i.key);this.Rr.set(a.largestBatchId,u)}this.overlays=this.overlays.insert(i.key,new QL(t,i));let l=this.Rr.get(t);l===void 0&&(l=We(),this.Rr.set(t,l)),this.Rr.set(t,l.add(i.key))}}/**
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
 */class DU{constructor(){this.sessionToken=yn.EMPTY_BYTE_STRING}getSessionToken(e){return se.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,se.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(){this.Vr=new Qt(on.mr),this.gr=new Qt(on.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const i=new on(e,t);this.Vr=this.Vr.add(i),this.gr=this.gr.add(i)}yr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.wr(new on(e,t))}br(e,t){e.forEach(i=>this.removeReference(i,t))}Sr(e){const t=new Ne(new xt([])),i=new on(t,e),a=new on(t,e+1),l=[];return this.gr.forEachInRange([i,a],u=>{this.wr(u),l.push(u.key)}),l}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new Ne(new xt([])),i=new on(t,e),a=new on(t,e+1);let l=We();return this.gr.forEachInRange([i,a],u=>{l=l.add(u.key)}),l}containsKey(e){const t=new on(e,0),i=this.Vr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class on{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return Ne.comparator(e.key,t.key)||$e(e.Cr,t.Cr)}static pr(e,t){return $e(e.Cr,t.Cr)||Ne.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PU{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new Qt(on.mr)}checkEmpty(e){return se.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,a){const l=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new YL(l,t,i,a);this.mutationQueue.push(u);for(const d of a)this.Mr=this.Mr.add(new on(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return se.resolve(u)}lookupMutationBatch(e,t){return se.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,a=this.Nr(i),l=a<0?0:a;return se.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return se.resolve(this.mutationQueue.length===0?Fy:this.Fr-1)}getAllMutationBatches(e){return se.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new on(t,0),a=new on(t,Number.POSITIVE_INFINITY),l=[];return this.Mr.forEachInRange([i,a],u=>{const d=this.Or(u.Cr);l.push(d)}),se.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Qt($e);return t.forEach(a=>{const l=new on(a,0),u=new on(a,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([l,u],d=>{i=i.add(d.Cr)})}),se.resolve(this.Br(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,a=i.length+1;let l=i;Ne.isDocumentKey(l)||(l=l.child(""));const u=new on(new Ne(l),0);let d=new Qt($e);return this.Mr.forEachWhile(p=>{const m=p.key.path;return!!i.isPrefixOf(m)&&(m.length===a&&(d=d.add(p.Cr)),!0)},u),se.resolve(this.Br(d))}Br(e){const t=[];return e.forEach(i=>{const a=this.Or(i);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){ot(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Mr;return se.forEach(t.mutations,a=>{const l=new on(a.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Mr=i})}qn(e){}containsKey(e,t){const i=new on(t,0),a=this.Mr.firstAfterOrEqual(i);return se.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,se.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MU{constructor(e){this.kr=e,this.docs=function(){return new At(Ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,a=this.docs.get(i),l=a?a.size:0,u=this.kr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:u}),this.size+=u-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return se.resolve(i?i.document.mutableCopy():Rn.newInvalidDocument(t))}getEntries(e,t){let i=sr();return t.forEach(a=>{const l=this.docs.get(a);i=i.insert(a,l?l.document.mutableCopy():Rn.newInvalidDocument(a))}),se.resolve(i)}getDocumentsMatchingQuery(e,t,i,a){let l=sr();const u=t.path,d=new Ne(u.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:m,value:{document:v}}=p.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||lL(oL(v),i)<=0||(a.has(v.key)||sp(t,v))&&(l=l.insert(v.key,v.mutableCopy()))}return se.resolve(l)}getAllFromCollectionGroup(e,t,i,a){De()}qr(e,t){return se.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new LU(this)}getSize(e){return se.resolve(this.size)}}class LU extends IU{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((i,a)=>{a.isValidDocument()?t.push(this.Ir.addEntry(e,a)):this.Ir.removeEntry(i)}),se.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UU{constructor(e){this.persistence=e,this.Qr=new bo(t=>qy(t),Gy),this.lastRemoteSnapshotVersion=Pe.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Xy,this.targetCount=0,this.Ur=jl.Kn()}forEachTarget(e,t){return this.Qr.forEach((i,a)=>t(a)),se.resolve()}getLastRemoteSnapshotVersion(e){return se.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return se.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),se.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.$r&&(this.$r=t),se.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new jl(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,se.resolve()}updateTargetData(e,t){return this.zn(t),se.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.Sr(t.targetId),this.targetCount-=1,se.resolve()}removeTargets(e,t,i){let a=0;const l=[];return this.Qr.forEach((u,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Qr.delete(u),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),se.waitFor(l).next(()=>a)}getTargetCount(e){return se.resolve(this.targetCount)}getTargetData(e,t){const i=this.Qr.get(t)||null;return se.resolve(i)}addMatchingKeys(e,t,i){return this.Kr.yr(t,i),se.resolve()}removeMatchingKeys(e,t,i){this.Kr.br(t,i);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(u=>{l.push(a.markPotentiallyOrphaned(e,u))}),se.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Kr.Sr(t),se.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Kr.vr(t);return se.resolve(i)}containsKey(e,t){return se.resolve(this.Kr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Jd(0),this.zr=!1,this.zr=!0,this.jr=new DU,this.referenceDelegate=e(this),this.Hr=new UU(this),this.indexManager=new TU,this.remoteDocumentCache=function(a){return new MU(a)}(i=>this.referenceDelegate.Jr(i)),this.serializer=new vU(t),this.Yr=new OU(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new kU,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Wr[e.toKey()];return i||(i=new PU(t,this.referenceDelegate),this.Wr[e.toKey()]=i),i}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,i){Ee("MemoryPersistence","Starting transaction:",e);const a=new VU(this.Gr.next());return this.referenceDelegate.Zr(),i(a).next(l=>this.referenceDelegate.Xr(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}ei(e,t){return se.or(Object.values(this.Wr).map(i=>()=>i.containsKey(e,t)))}}class VU extends uL{constructor(e){super(),this.currentSequenceNumber=e}}class Zy{constructor(e){this.persistence=e,this.ti=new Xy,this.ni=null}static ri(e){return new Zy(e)}get ii(){if(this.ni)return this.ni;throw De()}addReference(e,t,i){return this.ti.addReference(i,t),this.ii.delete(i.toString()),se.resolve()}removeReference(e,t,i){return this.ti.removeReference(i,t),this.ii.add(i.toString()),se.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),se.resolve()}removeTarget(e,t){this.ti.Sr(t.targetId).forEach(a=>this.ii.add(a.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.ii.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return se.forEach(this.ii,i=>{const a=Ne.fromPath(i);return this.si(e,a).next(l=>{l||t.removeEntry(a,Pe.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(i=>{i?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return se.or([()=>se.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Pd{constructor(e,t){this.persistence=e,this.oi=new bo(i=>dL(i.path),(i,a)=>i.isEqual(a)),this.garbageCollector=RU(this,t)}static ri(e,t){return new Pd(e,t)}Zr(){}Xr(e){return se.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(a=>i+a))}sr(e){let t=0;return this.rr(e,i=>{t++}).next(()=>t)}rr(e,t){return se.forEach(this.oi,(i,a)=>this.ar(e,i,a).next(l=>l?se.resolve():t(a)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.qr(e,u=>this.ar(e,u,t).next(d=>{d||(i++,l.removeEntry(u,Pe.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),se.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.oi.set(i,e.currentSequenceNumber),se.resolve()}removeReference(e,t,i){return this.oi.set(i,e.currentSequenceNumber),se.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),se.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=id(e.data.value)),t}ar(e,t,i){return se.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.oi.get(t);return se.resolve(a!==void 0&&a>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e,t,i,a){this.targetId=e,this.fromCache=t,this.Hi=i,this.Ji=a}static Yi(e,t){let i=We(),a=We();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new Jy(e,t.fromCache,i,a)}}/**
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
 */class jU{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class BU{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Nx()?8:hL(xn())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,i,a){const l={result:null};return this.rs(e,t).next(u=>{l.result=u}).next(()=>{if(!l.result)return this.ss(e,t,a,i).next(u=>{l.result=u})}).next(()=>{if(l.result)return;const u=new jU;return this._s(e,t,u).next(d=>{if(l.result=d,this.Xi)return this.us(e,t,u,d.size)})}).next(()=>l.result)}us(e,t,i,a){return i.documentReadCount<this.es?(_l()<=He.DEBUG&&Ee("QueryEngine","SDK will not create cache indexes for query:",yl(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),se.resolve()):(_l()<=He.DEBUG&&Ee("QueryEngine","Query:",yl(t),"scans",i.documentReadCount,"local documents and returns",a,"documents as results."),i.documentReadCount>this.ts*a?(_l()<=He.DEBUG&&Ee("QueryEngine","The SDK decides to create cache indexes for query:",yl(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fs(t))):se.resolve())}rs(e,t){if(Tb(t))return se.resolve(null);let i=fs(t);return this.indexManager.getIndexType(e,i).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=C_(t,null,"F"),i=fs(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const u=We(...l);return this.ns.getDocuments(e,u).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const m=this.cs(t,d);return this.ls(t,m,u,p.readTime)?this.rs(e,C_(t,null,"F")):this.hs(e,m,t,p)}))})))}ss(e,t,i,a){return Tb(t)||a.isEqual(Pe.min())?se.resolve(null):this.ns.getDocuments(e,i).next(l=>{const u=this.cs(t,l);return this.ls(t,u,i,a)?se.resolve(null):(_l()<=He.DEBUG&&Ee("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),yl(t)),this.hs(e,u,t,aL(a,Fu)).next(d=>d))})}cs(e,t){let i=new Qt(mC(e));return t.forEach((a,l)=>{sp(e,l)&&(i=i.add(l))}),i}ls(e,t,i,a){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}_s(e,t,i){return _l()<=He.DEBUG&&Ee("QueryEngine","Using full collection scan to execute query:",yl(t)),this.ns.getDocumentsMatchingQuery(e,t,oa.min(),i)}hs(e,t,i,a){return this.ns.getDocumentsMatchingQuery(e,i,a).next(l=>(t.forEach(u=>{l=l.insert(u.key,u)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev="LocalStore",FU=3e8;class zU{constructor(e,t,i,a){this.persistence=e,this.Ps=t,this.serializer=a,this.Ts=new At($e),this.Is=new bo(l=>qy(l),Gy),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(i)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xU(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function HU(n,e,t,i){return new zU(n,e,t,i)}async function jC(n,e){const t=Le(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let a;return t.mutationQueue.getAllMutationBatches(i).next(l=>(a=l,t.As(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const u=[],d=[];let p=We();for(const m of a){u.push(m.batchId);for(const v of m.mutations)p=p.add(v.key)}for(const m of l){d.push(m.batchId);for(const v of m.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(i,p).next(m=>({Rs:m,removedBatchIds:u,addedBatchIds:d}))})})}function qU(n,e){const t=Le(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const a=e.batch.keys(),l=t.ds.newChangeBuffer({trackRemovals:!0});return function(d,p,m,v){const S=m.batch,b=S.keys();let k=se.resolve();return b.forEach(M=>{k=k.next(()=>v.getEntry(p,M)).next(W=>{const V=m.docVersions.get(M);ot(V!==null),W.version.compareTo(V)<0&&(S.applyToRemoteDocument(W,m),W.isValidDocument()&&(W.setReadTime(m.commitVersion),v.addEntry(W)))})}),k.next(()=>d.mutationQueue.removeMutationBatch(p,S))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=We();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(p=p.add(d.batch.mutations[m].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,a))})}function BC(n){const e=Le(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function GU(n,e){const t=Le(n),i=e.snapshotVersion;let a=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const u=t.ds.newChangeBuffer({trackRemovals:!0});a=t.Ts;const d=[];e.targetChanges.forEach((v,S)=>{const b=a.get(S);if(!b)return;d.push(t.Hr.removeMatchingKeys(l,v.removedDocuments,S).next(()=>t.Hr.addMatchingKeys(l,v.addedDocuments,S)));let k=b.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(S)!==null?k=k.withResumeToken(yn.EMPTY_BYTE_STRING,Pe.min()).withLastLimboFreeSnapshotVersion(Pe.min()):v.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(v.resumeToken,i)),a=a.insert(S,k),function(W,V,F){return W.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-W.snapshotVersion.toMicroseconds()>=FU?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(b,k,v)&&d.push(t.Hr.updateTargetData(l,k))});let p=sr(),m=We();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,v))}),d.push(WU(l,u,e.documentUpdates).next(v=>{p=v.Vs,m=v.fs})),!i.isEqual(Pe.min())){const v=t.Hr.getLastRemoteSnapshotVersion(l).next(S=>t.Hr.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(v)}return se.waitFor(d).next(()=>u.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,m)).next(()=>p)}).then(l=>(t.Ts=a,l))}function WU(n,e,t){let i=We(),a=We();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let u=sr();return t.forEach((d,p)=>{const m=l.get(d);p.isFoundDocument()!==m.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Pe.min())?(e.removeEntry(d,p.readTime),u=u.insert(d,p)):!m.isValidDocument()||p.version.compareTo(m.version)>0||p.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(p),u=u.insert(d,p)):Ee(ev,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",p.version)}),{Vs:u,fs:a}})}function KU(n,e){const t=Le(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=Fy),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function $U(n,e){const t=Le(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let a;return t.Hr.getTargetData(i,e).next(l=>l?(a=l,se.resolve(a)):t.Hr.allocateTargetId(i).next(u=>(a=new Zr(e,u,"TargetPurposeListen",i.currentSequenceNumber),t.Hr.addTargetData(i,a).next(()=>a))))}).then(i=>{const a=t.Ts.get(i.targetId);return(a===null||i.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(i.targetId,i),t.Is.set(e,i.targetId)),i})}async function O_(n,e,t){const i=Le(n),a=i.Ts.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,u=>i.persistence.referenceDelegate.removeTarget(u,a))}catch(u){if(!Xl(u))throw u;Ee(ev,`Failed to update sequence numbers for target ${e}: ${u}`)}i.Ts=i.Ts.remove(e),i.Is.delete(a.target)}function Pb(n,e,t){const i=Le(n);let a=Pe.min(),l=We();return i.persistence.runTransaction("Execute query","readwrite",u=>function(p,m,v){const S=Le(p),b=S.Is.get(v);return b!==void 0?se.resolve(S.Ts.get(b)):S.Hr.getTargetData(m,v)}(i,u,fs(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,i.Hr.getMatchingKeysForTargetId(u,d.targetId).next(p=>{l=p})}).next(()=>i.Ps.getDocumentsMatchingQuery(u,e,t?a:Pe.min(),t?l:We())).next(d=>(YU(i,DL(e),d),{documents:d,gs:l})))}function YU(n,e,t){let i=n.Es.get(e)||Pe.min();t.forEach((a,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.Es.set(e,i)}class Mb{constructor(){this.activeTargetIds=jL()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class QU{constructor(){this.ho=new Mb,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,i){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Mb,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class XU{To(e){}shutdown(){}}/**
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
 */const Lb="ConnectivityMonitor";class Ub{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){Ee(Lb,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){Ee(Lb,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zf=null;function k_(){return zf===null?zf=function(){return 268435456+Math.round(2147483648*Math.random())}():zf++,"0x"+zf.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg="RestConnection",ZU={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class JU{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${i}/databases/${a}`,this.wo=this.databaseId.database===Rd?`project_id=${i}`:`project_id=${i}&database_id=${a}`}bo(e,t,i,a,l){const u=k_(),d=this.So(e,t.toUriEncodedString());Ee(Fg,`Sending RPC '${e}' ${u}:`,d,i);const p={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(p,a,l),this.vo(e,d,p,i).then(m=>(Ee(Fg,`Received RPC '${e}' ${u}: `,m),m),m=>{throw Pl(Fg,`RPC '${e}' ${u} failed with error: `,m,"url: ",d,"request:",i),m})}Co(e,t,i,a,l,u){return this.bo(e,t,i,a,l)}Do(e,t,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Yl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),i&&i.headers.forEach((a,l)=>e[l]=a)}So(e,t){const i=ZU[e];return`${this.po}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e4{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="WebChannelConnection";class t4 extends JU{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,i,a){const l=k_();return new Promise((u,d)=>{const p=new G1;p.setWithCredentials(!0),p.listenOnce(W1.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case nd.NO_ERROR:const v=p.getResponseJson();Ee(Sn,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(v)),u(v);break;case nd.TIMEOUT:Ee(Sn,`RPC '${e}' ${l} timed out`),d(new Ie(le.DEADLINE_EXCEEDED,"Request time out"));break;case nd.HTTP_ERROR:const S=p.getStatus();if(Ee(Sn,`RPC '${e}' ${l} failed with status:`,S,"response text:",p.getResponseText()),S>0){let b=p.getResponseJson();Array.isArray(b)&&(b=b[0]);const k=b==null?void 0:b.error;if(k&&k.status&&k.message){const M=function(V){const F=V.toLowerCase().replace(/_/g,"-");return Object.values(le).indexOf(F)>=0?F:le.UNKNOWN}(k.status);d(new Ie(M,k.message))}else d(new Ie(le.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new Ie(le.UNAVAILABLE,"Connection failed."));break;default:De()}}finally{Ee(Sn,`RPC '${e}' ${l} completed.`)}});const m=JSON.stringify(a);Ee(Sn,`RPC '${e}' ${l} sending request:`,a),p.send(t,"POST",m,i,15)})}Wo(e,t,i){const a=k_(),l=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=Y1(),d=$1(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(p.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Do(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const v=l.join("");Ee(Sn,`Creating RPC '${e}' stream ${a}: ${v}`,p);const S=u.createWebChannel(v,p);let b=!1,k=!1;const M=new e4({Fo:V=>{k?Ee(Sn,`Not sending because RPC '${e}' stream ${a} is closed:`,V):(b||(Ee(Sn,`Opening RPC '${e}' stream ${a} transport.`),S.open(),b=!0),Ee(Sn,`RPC '${e}' stream ${a} sending:`,V),S.send(V))},Mo:()=>S.close()}),W=(V,F,B)=>{V.listen(F,K=>{try{B(K)}catch(z){setTimeout(()=>{throw z},0)}})};return W(S,vu.EventType.OPEN,()=>{k||(Ee(Sn,`RPC '${e}' stream ${a} transport opened.`),M.Qo())}),W(S,vu.EventType.CLOSE,()=>{k||(k=!0,Ee(Sn,`RPC '${e}' stream ${a} transport closed`),M.Ko())}),W(S,vu.EventType.ERROR,V=>{k||(k=!0,Pl(Sn,`RPC '${e}' stream ${a} transport errored:`,V),M.Ko(new Ie(le.UNAVAILABLE,"The operation could not be completed")))}),W(S,vu.EventType.MESSAGE,V=>{var F;if(!k){const B=V.data[0];ot(!!B);const K=B,z=(K==null?void 0:K.error)||((F=K[0])===null||F===void 0?void 0:F.error);if(z){Ee(Sn,`RPC '${e}' stream ${a} received error:`,z);const re=z.status;let ge=function(I){const N=zt[I];if(N!==void 0)return RC(N)}(re),P=z.message;ge===void 0&&(ge=le.INTERNAL,P="Unknown error status: "+re+" with message "+z.message),k=!0,M.Ko(new Ie(ge,P)),S.close()}else Ee(Sn,`RPC '${e}' stream ${a} received:`,B),M.Uo(B)}}),W(d,K1.STAT_EVENT,V=>{V.stat===T_.PROXY?Ee(Sn,`RPC '${e}' stream ${a} detected buffering proxy`):V.stat===T_.NOPROXY&&Ee(Sn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{M.$o()},0),M}}function zg(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(n){return new rU(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e,t,i=1e3,a=1.5,l=6e4){this.Ti=e,this.timerId=t,this.Go=i,this.zo=a,this.jo=l,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),i=Math.max(0,Date.now()-this.Yo),a=Math.max(0,t-i);a>0&&Ee("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,a,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb="PersistentStream";class zC{constructor(e,t,i,a,l,u,d,p){this.Ti=e,this.n_=i,this.r_=a,this.connection=l,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new FC(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===le.RESOURCE_EXHAUSTED?(ir(t.toString()),ir("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===le.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,a])=>{this.i_===t&&this.V_(i,a)},i=>{e(()=>{const a=new Ie(le.UNKNOWN,"Fetching auth token failed: "+i.message);return this.m_(a)})})}V_(e,t){const i=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{i(()=>this.listener.xo())}),this.stream.No(()=>{i(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(a=>{i(()=>this.m_(a))}),this.stream.onMessage(a=>{i(()=>++this.__==1?this.g_(a):this.onNext(a))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return Ee(Vb,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(Ee(Vb,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class n4 extends zC{constructor(e,t,i,a,l,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,a,u),this.serializer=l}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=lU(this.serializer,e),i=function(l){if(!("targetChange"in l))return Pe.min();const u=l.targetChange;return u.targetIds&&u.targetIds.length?Pe.min():u.readTime?ps(u.readTime):Pe.min()}(e);return this.listener.p_(t,i)}y_(e){const t={};t.database=x_(this.serializer),t.addTarget=function(l,u){let d;const p=u.target;if(d=w_(p)?{documents:hU(l,p)}:{query:fU(l,p).ht},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=xC(l,u.resumeToken);const m=R_(l,u.expectedCount);m!==null&&(d.expectedCount=m)}else if(u.snapshotVersion.compareTo(Pe.min())>0){d.readTime=Dd(l,u.snapshotVersion.toTimestamp());const m=R_(l,u.expectedCount);m!==null&&(d.expectedCount=m)}return d}(this.serializer,e);const i=pU(this.serializer,e);i&&(t.labels=i),this.I_(t)}w_(e){const t={};t.database=x_(this.serializer),t.removeTarget=e,this.I_(t)}}class i4 extends zC{constructor(e,t,i,a,l,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,a,u),this.serializer=l}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return ot(!!e.streamToken),this.lastStreamToken=e.streamToken,ot(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){ot(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=uU(e.writeResults,e.commitTime),i=ps(e.commitTime);return this.listener.v_(i,t)}C_(){const e={};e.database=x_(this.serializer),this.I_(e)}S_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>cU(this.serializer,i))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{}class r4 extends s4{constructor(e,t,i,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=a,this.F_=!1}M_(){if(this.F_)throw new Ie(le.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,i,a){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,u])=>this.connection.bo(e,I_(t,i),a,l,u)).catch(l=>{throw l.name==="FirebaseError"?(l.code===le.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new Ie(le.UNKNOWN,l.toString())})}Co(e,t,i,a,l){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,d])=>this.connection.Co(e,I_(t,i),a,u,d,l)).catch(u=>{throw u.name==="FirebaseError"?(u.code===le.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new Ie(le.UNKNOWN,u.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class a4{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(ir(t),this.N_=!1):Ee("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go="RemoteStore";class o4{constructor(e,t,i,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=l,this.z_.To(u=>{i.enqueueAndForget(async()=>{Ao(this)&&(Ee(go,"Restarting streams for network reachability change."),await async function(p){const m=Le(p);m.W_.add(4),await oh(m),m.j_.set("Unknown"),m.W_.delete(4),await cp(m)}(this))})}),this.j_=new a4(i,a)}}async function cp(n){if(Ao(n))for(const e of n.G_)await e(!0)}async function oh(n){for(const e of n.G_)await e(!1)}function HC(n,e){const t=Le(n);t.U_.has(e.targetId)||(t.U_.set(e.targetId,e),sv(t)?iv(t):Zl(t).c_()&&nv(t,e))}function tv(n,e){const t=Le(n),i=Zl(t);t.U_.delete(e),i.c_()&&qC(t,e),t.U_.size===0&&(i.c_()?i.P_():Ao(t)&&t.j_.set("Unknown"))}function nv(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Pe.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Zl(n).y_(e)}function qC(n,e){n.H_.Ne(e),Zl(n).w_(e)}function iv(n){n.H_=new tU({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.U_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),Zl(n).start(),n.j_.B_()}function sv(n){return Ao(n)&&!Zl(n).u_()&&n.U_.size>0}function Ao(n){return Le(n).W_.size===0}function GC(n){n.H_=void 0}async function l4(n){n.j_.set("Online")}async function c4(n){n.U_.forEach((e,t)=>{nv(n,e)})}async function u4(n,e){GC(n),sv(n)?(n.j_.q_(e),iv(n)):n.j_.set("Unknown")}async function h4(n,e,t){if(n.j_.set("Online"),e instanceof NC&&e.state===2&&e.cause)try{await async function(a,l){const u=l.cause;for(const d of l.targetIds)a.U_.has(d)&&(await a.remoteSyncer.rejectListen(d,u),a.U_.delete(d),a.H_.removeTarget(d))}(n,e)}catch(i){Ee(go,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Md(n,i)}else if(e instanceof ad?n.H_.We(e):e instanceof IC?n.H_.Ze(e):n.H_.je(e),!t.isEqual(Pe.min()))try{const i=await BC(n.localStore);t.compareTo(i)>=0&&await function(l,u){const d=l.H_.ot(u);return d.targetChanges.forEach((p,m)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.U_.get(m);v&&l.U_.set(m,v.withResumeToken(p.resumeToken,u))}}),d.targetMismatches.forEach((p,m)=>{const v=l.U_.get(p);if(!v)return;l.U_.set(p,v.withResumeToken(yn.EMPTY_BYTE_STRING,v.snapshotVersion)),qC(l,p);const S=new Zr(v.target,p,m,v.sequenceNumber);nv(l,S)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){Ee(go,"Failed to raise snapshot:",i),await Md(n,i)}}async function Md(n,e,t){if(!Xl(e))throw e;n.W_.add(1),await oh(n),n.j_.set("Offline"),t||(t=()=>BC(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{Ee(go,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await cp(n)})}function WC(n,e){return e().catch(t=>Md(n,t,e))}async function up(n){const e=Le(n),t=ha(e);let i=e.K_.length>0?e.K_[e.K_.length-1].batchId:Fy;for(;f4(e);)try{const a=await KU(e.localStore,i);if(a===null){e.K_.length===0&&t.P_();break}i=a.batchId,d4(e,a)}catch(a){await Md(e,a)}KC(e)&&$C(e)}function f4(n){return Ao(n)&&n.K_.length<10}function d4(n,e){n.K_.push(e);const t=ha(n);t.c_()&&t.b_&&t.S_(e.mutations)}function KC(n){return Ao(n)&&!ha(n).u_()&&n.K_.length>0}function $C(n){ha(n).start()}async function p4(n){ha(n).C_()}async function m4(n){const e=ha(n);for(const t of n.K_)e.S_(t.mutations)}async function g4(n,e,t){const i=n.K_.shift(),a=$y.from(i,e,t);await WC(n,()=>n.remoteSyncer.applySuccessfulWrite(a)),await up(n)}async function _4(n,e){e&&ha(n).b_&&await async function(i,a){if(function(u){return ZL(u)&&u!==le.ABORTED}(a.code)){const l=i.K_.shift();ha(i).h_(),await WC(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,a)),await up(i)}}(n,e),KC(n)&&$C(n)}async function jb(n,e){const t=Le(n);t.asyncQueue.verifyOperationInProgress(),Ee(go,"RemoteStore received new credentials");const i=Ao(t);t.W_.add(3),await oh(t),i&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await cp(t)}async function y4(n,e){const t=Le(n);e?(t.W_.delete(2),await cp(t)):e||(t.W_.add(2),await oh(t),t.j_.set("Unknown"))}function Zl(n){return n.J_||(n.J_=function(t,i,a){const l=Le(t);return l.M_(),new n4(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(n.datastore,n.asyncQueue,{xo:l4.bind(null,n),No:c4.bind(null,n),Lo:u4.bind(null,n),p_:h4.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),sv(n)?iv(n):n.j_.set("Unknown")):(await n.J_.stop(),GC(n))})),n.J_}function ha(n){return n.Y_||(n.Y_=function(t,i,a){const l=Le(t);return l.M_(),new i4(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:p4.bind(null,n),Lo:_4.bind(null,n),D_:m4.bind(null,n),v_:g4.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await up(n)):(await n.Y_.stop(),n.K_.length>0&&(Ee(go,`Stopping write stream with ${n.K_.length} pending writes`),n.K_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e,t,i,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=a,this.removalCallback=l,this.deferred=new ia,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,a,l){const u=Date.now()+i,d=new rv(e,t,u,a,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ie(le.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function av(n,e){if(ir("AsyncQueue",`${e}: ${n}`),Xl(n))return new Ie(le.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{static emptySet(e){return new Nl(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||Ne.comparator(t.key,i.key):(t,i)=>Ne.comparator(t.key,i.key),this.keyedMap=Eu(),this.sortedSet=new At(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Nl)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=i.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Nl;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(){this.Z_=new At(Ne.comparator)}track(e){const t=e.doc.key,i=this.Z_.get(t);i?e.type!==0&&i.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&i.type!==1?this.Z_=this.Z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Z_=this.Z_.remove(t):e.type===1&&i.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):De():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class Bl{constructor(e,t,i,a,l,u,d,p,m){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=a,this.mutatedKeys=l,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=m}static fromInitialDocuments(e,t,i,a,l){const u=[];return t.forEach(d=>{u.push({type:0,doc:d})}),new Bl(e,t,Nl.emptySet(t),u,i,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ip(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==i[a].type||!t[a].doc.isEqual(i[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v4{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class E4{constructor(){this.queries=Fb(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,i){const a=Le(t),l=a.queries;a.queries=Fb(),l.forEach((u,d)=>{for(const p of d.ta)p.onError(i)})})(this,new Ie(le.ABORTED,"Firestore shutting down"))}}function Fb(){return new bo(n=>pC(n),ip)}async function T4(n,e){const t=Le(n);let i=3;const a=e.query;let l=t.queries.get(a);l?!l.na()&&e.ra()&&(i=2):(l=new v4,i=e.ra()?0:1);try{switch(i){case 0:l.ea=await t.onListen(a,!0);break;case 1:l.ea=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(u){const d=av(u,`Initialization of query '${yl(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.ta.push(e),e.sa(t.onlineState),l.ea&&e.oa(l.ea)&&ov(t)}async function S4(n,e){const t=Le(n),i=e.query;let a=3;const l=t.queries.get(i);if(l){const u=l.ta.indexOf(e);u>=0&&(l.ta.splice(u,1),l.ta.length===0?a=e.ra()?0:1:!l.na()&&e.ra()&&(a=2))}switch(a){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function b4(n,e){const t=Le(n);let i=!1;for(const a of e){const l=a.query,u=t.queries.get(l);if(u){for(const d of u.ta)d.oa(a)&&(i=!0);u.ea=a}}i&&ov(t)}function A4(n,e,t){const i=Le(n),a=i.queries.get(e);if(a)for(const l of a.ta)l.onError(t);i.queries.delete(e)}function ov(n){n.ia.forEach(e=>{e.next()})}var D_,zb;(zb=D_||(D_={}))._a="default",zb.Cache="cache";class w4{constructor(e,t,i){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=i||{}}oa(e){if(!this.options.includeMetadataChanges){const i=[];for(const a of e.docChanges)a.type!==3&&i.push(a);e=new Bl(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const i=t!=="Offline";return(!this.options.Ta||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=Bl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==D_.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e){this.key=e}}class QC{constructor(e){this.key=e}}class C4{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=We(),this.mutatedKeys=We(),this.ya=mC(e),this.wa=new Nl(this.ya)}get ba(){return this.fa}Sa(e,t){const i=t?t.Da:new Bb,a=t?t.wa:this.wa;let l=t?t.mutatedKeys:this.mutatedKeys,u=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,m=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((v,S)=>{const b=a.get(v),k=sp(this.query,S)?S:null,M=!!b&&this.mutatedKeys.has(b.key),W=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let V=!1;b&&k?b.data.isEqual(k.data)?M!==W&&(i.track({type:3,doc:k}),V=!0):this.va(b,k)||(i.track({type:2,doc:k}),V=!0,(p&&this.ya(k,p)>0||m&&this.ya(k,m)<0)&&(d=!0)):!b&&k?(i.track({type:0,doc:k}),V=!0):b&&!k&&(i.track({type:1,doc:b}),V=!0,(p||m)&&(d=!0)),V&&(k?(u=u.add(k),l=W?l.add(v):l.delete(v)):(u=u.delete(v),l=l.delete(v)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const v=this.query.limitType==="F"?u.last():u.first();u=u.delete(v.key),l=l.delete(v.key),i.track({type:1,doc:v})}return{wa:u,Da:i,ls:d,mutatedKeys:l}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,a){const l=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const u=e.Da.X_();u.sort((v,S)=>function(k,M){const W=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return De()}};return W(k)-W(M)}(v.type,S.type)||this.ya(v.doc,S.doc)),this.Ca(i),a=a!=null&&a;const d=t&&!a?this.Fa():[],p=this.pa.size===0&&this.current&&!a?1:0,m=p!==this.ga;return this.ga=p,u.length!==0||m?{snapshot:new Bl(this.query,e.wa,l,u,e.mutatedKeys,p===0,m,!1,!!i&&i.resumeToken.approximateByteSize()>0),Ma:d}:{Ma:d}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Bb,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=We(),this.wa.forEach(i=>{this.xa(i.key)&&(this.pa=this.pa.add(i.key))});const t=[];return e.forEach(i=>{this.pa.has(i)||t.push(new QC(i))}),this.pa.forEach(i=>{e.has(i)||t.push(new YC(i))}),t}Oa(e){this.fa=e.gs,this.pa=We();const t=this.Sa(e.documents);return this.applyChanges(t,!0)}Na(){return Bl.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const lv="SyncEngine";class R4{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class I4{constructor(e){this.key=e,this.Ba=!1}}class N4{constructor(e,t,i,a,l,u){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=u,this.La={},this.ka=new bo(d=>pC(d),ip),this.qa=new Map,this.Qa=new Set,this.$a=new At(Ne.comparator),this.Ka=new Map,this.Ua=new Xy,this.Wa={},this.Ga=new Map,this.za=jl.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function x4(n,e,t=!0){const i=nR(n);let a;const l=i.ka.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.Na()):a=await XC(i,e,t,!0),a}async function O4(n,e){const t=nR(n);await XC(t,e,!0,!1)}async function XC(n,e,t,i){const a=await $U(n.localStore,fs(e)),l=a.targetId,u=n.sharedClientState.addLocalQueryTarget(l,t);let d;return i&&(d=await k4(n,e,l,u==="current",a.resumeToken)),n.isPrimaryClient&&t&&HC(n.remoteStore,a),d}async function k4(n,e,t,i,a){n.Ha=(S,b,k)=>async function(W,V,F,B){let K=V.view.Sa(F);K.ls&&(K=await Pb(W.localStore,V.query,!1).then(({documents:P})=>V.view.Sa(P,K)));const z=B&&B.targetChanges.get(V.targetId),re=B&&B.targetMismatches.get(V.targetId)!=null,ge=V.view.applyChanges(K,W.isPrimaryClient,z,re);return qb(W,V.targetId,ge.Ma),ge.snapshot}(n,S,b,k);const l=await Pb(n.localStore,e,!0),u=new C4(e,l.gs),d=u.Sa(l.documents),p=ah.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",a),m=u.applyChanges(d,n.isPrimaryClient,p);qb(n,t,m.Ma);const v=new R4(e,t,u);return n.ka.set(e,v),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),m.snapshot}async function D4(n,e,t){const i=Le(n),a=i.ka.get(e),l=i.qa.get(a.targetId);if(l.length>1)return i.qa.set(a.targetId,l.filter(u=>!ip(u,e))),void i.ka.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(a.targetId),i.sharedClientState.isActiveQueryTarget(a.targetId)||await O_(i.localStore,a.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(a.targetId),t&&tv(i.remoteStore,a.targetId),P_(i,a.targetId)}).catch(Ql)):(P_(i,a.targetId),await O_(i.localStore,a.targetId,!0))}async function P4(n,e){const t=Le(n),i=t.ka.get(e),a=t.qa.get(i.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),tv(t.remoteStore,i.targetId))}async function M4(n,e,t){const i=z4(n);try{const a=await function(u,d){const p=Le(u),m=Yt.now(),v=d.reduce((k,M)=>k.add(M.key),We());let S,b;return p.persistence.runTransaction("Locally write mutations","readwrite",k=>{let M=sr(),W=We();return p.ds.getEntries(k,v).next(V=>{M=V,M.forEach((F,B)=>{B.isValidDocument()||(W=W.add(F))})}).next(()=>p.localDocuments.getOverlayedDocuments(k,M)).next(V=>{S=V;const F=[];for(const B of d){const K=KL(B,S.get(B.key).overlayedDocument);K!=null&&F.push(new Ta(B.key,K,oC(K.value.mapValue),ds.exists(!0)))}return p.mutationQueue.addMutationBatch(k,m,F,d)}).next(V=>{b=V;const F=V.applyToLocalDocumentSet(S,W);return p.documentOverlayCache.saveOverlays(k,V.batchId,F)})}).then(()=>({batchId:b.batchId,changes:_C(S)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(a.batchId),function(u,d,p){let m=u.Wa[u.currentUser.toKey()];m||(m=new At($e)),m=m.insert(d,p),u.Wa[u.currentUser.toKey()]=m}(i,a.batchId,t),await lh(i,a.changes),await up(i.remoteStore)}catch(a){const l=av(a,"Failed to persist write");t.reject(l)}}async function ZC(n,e){const t=Le(n);try{const i=await GU(t.localStore,e);e.targetChanges.forEach((a,l)=>{const u=t.Ka.get(l);u&&(ot(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?u.Ba=!0:a.modifiedDocuments.size>0?ot(u.Ba):a.removedDocuments.size>0&&(ot(u.Ba),u.Ba=!1))}),await lh(t,i,e)}catch(i){await Ql(i)}}function Hb(n,e,t){const i=Le(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const a=[];i.ka.forEach((l,u)=>{const d=u.view.sa(e);d.snapshot&&a.push(d.snapshot)}),function(u,d){const p=Le(u);p.onlineState=d;let m=!1;p.queries.forEach((v,S)=>{for(const b of S.ta)b.sa(d)&&(m=!0)}),m&&ov(p)}(i.eventManager,e),a.length&&i.La.p_(a),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function L4(n,e,t){const i=Le(n);i.sharedClientState.updateQueryState(e,"rejected",t);const a=i.Ka.get(e),l=a&&a.key;if(l){let u=new At(Ne.comparator);u=u.insert(l,Rn.newNoDocument(l,Pe.min()));const d=We().add(l),p=new op(Pe.min(),new Map,new At($e),u,d);await ZC(i,p),i.$a=i.$a.remove(l),i.Ka.delete(e),cv(i)}else await O_(i.localStore,e,!1).then(()=>P_(i,e,t)).catch(Ql)}async function U4(n,e){const t=Le(n),i=e.batch.batchId;try{const a=await qU(t.localStore,e);eR(t,i,null),JC(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await lh(t,a)}catch(a){await Ql(a)}}async function V4(n,e,t){const i=Le(n);try{const a=await function(u,d){const p=Le(u);return p.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let v;return p.mutationQueue.lookupMutationBatch(m,d).next(S=>(ot(S!==null),v=S.keys(),p.mutationQueue.removeMutationBatch(m,S))).next(()=>p.mutationQueue.performConsistencyCheck(m)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(m,v,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,v)).next(()=>p.localDocuments.getDocuments(m,v))})}(i.localStore,e);eR(i,e,t),JC(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await lh(i,a)}catch(a){await Ql(a)}}function JC(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function eR(n,e,t){const i=Le(n);let a=i.Wa[i.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),i.Wa[i.currentUser.toKey()]=a}}function P_(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.qa.get(e))n.ka.delete(i),t&&n.La.Ja(i,t);n.qa.delete(e),n.isPrimaryClient&&n.Ua.Sr(e).forEach(i=>{n.Ua.containsKey(i)||tR(n,i)})}function tR(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(tv(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ka.delete(t),cv(n))}function qb(n,e,t){for(const i of t)i instanceof YC?(n.Ua.addReference(i.key,e),j4(n,i)):i instanceof QC?(Ee(lv,"Document no longer in limbo: "+i.key),n.Ua.removeReference(i.key,e),n.Ua.containsKey(i.key)||tR(n,i.key)):De()}function j4(n,e){const t=e.key,i=t.path.canonicalString();n.$a.get(t)||n.Qa.has(i)||(Ee(lv,"New document in limbo: "+t),n.Qa.add(i),cv(n))}function cv(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new Ne(xt.fromString(e)),i=n.za.next();n.Ka.set(i,new I4(t)),n.$a=n.$a.insert(t,i),HC(n.remoteStore,new Zr(fs(Wy(t.path)),i,"TargetPurposeLimboResolution",Jd.ae))}}async function lh(n,e,t){const i=Le(n),a=[],l=[],u=[];i.ka.isEmpty()||(i.ka.forEach((d,p)=>{u.push(i.Ha(p,e,t).then(m=>{var v;if((m||t)&&i.isPrimaryClient){const S=m?!m.fromCache:(v=t==null?void 0:t.targetChanges.get(p.targetId))===null||v===void 0?void 0:v.current;i.sharedClientState.updateQueryState(p.targetId,S?"current":"not-current")}if(m){a.push(m);const S=Jy.Yi(p.targetId,m);l.push(S)}}))}),await Promise.all(u),i.La.p_(a),await async function(p,m){const v=Le(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",S=>se.forEach(m,b=>se.forEach(b.Hi,k=>v.persistence.referenceDelegate.addReference(S,b.targetId,k)).next(()=>se.forEach(b.Ji,k=>v.persistence.referenceDelegate.removeReference(S,b.targetId,k)))))}catch(S){if(!Xl(S))throw S;Ee(ev,"Failed to update sequence numbers: "+S)}for(const S of m){const b=S.targetId;if(!S.fromCache){const k=v.Ts.get(b),M=k.snapshotVersion,W=k.withLastLimboFreeSnapshotVersion(M);v.Ts=v.Ts.insert(b,W)}}}(i.localStore,l))}async function B4(n,e){const t=Le(n);if(!t.currentUser.isEqual(e)){Ee(lv,"User change. New user:",e.toKey());const i=await jC(t.localStore,e);t.currentUser=e,function(l,u){l.Ga.forEach(d=>{d.forEach(p=>{p.reject(new Ie(le.CANCELLED,u))})}),l.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await lh(t,i.Rs)}}function F4(n,e){const t=Le(n),i=t.Ka.get(e);if(i&&i.Ba)return We().add(i.key);{let a=We();const l=t.qa.get(e);if(!l)return a;for(const u of l){const d=t.ka.get(u);a=a.unionWith(d.view.ba)}return a}}function nR(n){const e=Le(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ZC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=F4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=L4.bind(null,e),e.La.p_=b4.bind(null,e.eventManager),e.La.Ja=A4.bind(null,e.eventManager),e}function z4(n){const e=Le(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=U4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=V4.bind(null,e),e}class Ld{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=lp(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return HU(this.persistence,new BU,e.initialUser,this.serializer)}Xa(e){return new VC(Zy.ri,this.serializer)}Za(e){return new QU}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ld.provider={build:()=>new Ld};class H4 extends Ld{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){ot(this.persistence.referenceDelegate instanceof Pd);const i=this.persistence.referenceDelegate.garbageCollector;return new wU(i,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?Gn.withCacheSize(this.cacheSizeBytes):Gn.DEFAULT;return new VC(i=>Pd.ri(i,t),this.serializer)}}class M_{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Hb(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=B4.bind(null,this.syncEngine),await y4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new E4}()}createDatastore(e){const t=lp(e.databaseInfo.databaseId),i=function(l){return new t4(l)}(e.databaseInfo);return function(l,u,d,p){return new r4(l,u,d,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,a,l,u,d){return new o4(i,a,l,u,d)}(this.localStore,this.datastore,e.asyncQueue,t=>Hb(this.syncEngine,t,0),function(){return Ub.D()?new Ub:new XU}())}createSyncEngine(e,t){return function(a,l,u,d,p,m,v){const S=new N4(a,l,u,d,p,m);return v&&(S.ja=!0),S}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=Le(a);Ee(go,"RemoteStore shutting down."),l.W_.add(5),await oh(l),l.z_.shutdown(),l.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}M_.provider={build:()=>new M_};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class q4{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):ir("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa="FirestoreClient";class G4{constructor(e,t,i,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=a,this.user=An.UNAUTHENTICATED,this.clientId=X1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async u=>{Ee(fa,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(i,u=>(Ee(fa,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ia;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=av(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Hg(n,e){n.asyncQueue.verifyOperationInProgress(),Ee(fa,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async a=>{i.isEqual(a)||(await jC(e.localStore,a),i=a)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Gb(n,e){n.asyncQueue.verifyOperationInProgress();const t=await W4(n);Ee(fa,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>jb(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,a)=>jb(e.remoteStore,a)),n._onlineComponents=e}async function W4(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Ee(fa,"Using user provided OfflineComponentProvider");try{await Hg(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===le.FAILED_PRECONDITION||a.code===le.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;Pl("Error using user provided cache. Falling back to memory cache: "+t),await Hg(n,new Ld)}}else Ee(fa,"Using default OfflineComponentProvider"),await Hg(n,new H4(void 0));return n._offlineComponents}async function iR(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(Ee(fa,"Using user provided OnlineComponentProvider"),await Gb(n,n._uninitializedComponentsProvider._online)):(Ee(fa,"Using default OnlineComponentProvider"),await Gb(n,new M_))),n._onlineComponents}function K4(n){return iR(n).then(e=>e.syncEngine)}async function $4(n){const e=await iR(n),t=e.eventManager;return t.onListen=x4.bind(null,e.syncEngine),t.onUnlisten=D4.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=O4.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=P4.bind(null,e.syncEngine),t}function Y4(n,e,t={}){const i=new ia;return n.asyncQueue.enqueueAndForget(async()=>function(l,u,d,p,m){const v=new q4({next:b=>{v.su(),u.enqueueAndForget(()=>S4(l,S));const k=b.docs.has(d);!k&&b.fromCache?m.reject(new Ie(le.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&b.fromCache&&p&&p.source==="server"?m.reject(new Ie(le.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(b)},error:b=>m.reject(b)}),S=new w4(Wy(d.path),v,{includeMetadataChanges:!0,Ta:!0});return T4(l,S)}(await $4(n),n.asyncQueue,e,t,i)),i.promise}/**
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
 */function sR(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q4(n,e,t){if(!t)throw new Ie(le.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function X4(n,e,t,i){if(e===!0&&i===!0)throw new Ie(le.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Kb(n){if(!Ne.isDocumentKey(n))throw new Ie(le.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function uv(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":De()}function _o(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Ie(le.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=uv(n);throw new Ie(le.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR="firestore.googleapis.com",$b=!0;class Yb{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new Ie(le.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=rR,this.ssl=$b}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:$b;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=UC;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<bU)throw new Ie(le.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}X4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sR((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new Ie(le.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new Ie(le.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new Ie(le.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,a){return i.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hv{constructor(e,t,i,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yb({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ie(le.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Ie(le.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yb(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new ZM;switch(i.type){case"firstParty":return new nL(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new Ie(le.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=Wb.get(t);i&&(Ee("ComponentProvider","Removing Datastore"),Wb.delete(t),i.terminate())}(this),Promise.resolve()}}function Z4(n,e,t,i={}){var a;const l=(n=_o(n,hv))._getSettings(),u=Object.assign(Object.assign({},l),{emulatorOptions:n._getEmulatorOptions()}),d=`${e}:${t}`;l.host!==rR&&l.host!==d&&Pl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},l),{host:d,ssl:!1,emulatorOptions:i});if(!sa(p,u)&&(n._setSettings(p),i.mockUserToken)){let m,v;if(typeof i.mockUserToken=="string")m=i.mockUserToken,v=An.MOCK_USER;else{m=GA(i.mockUserToken,(a=n._app)===null||a===void 0?void 0:a.options.projectId);const S=i.mockUserToken.sub||i.mockUserToken.user_id;if(!S)throw new Ie(le.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new An(S)}n._authCredentials=new JM(new Q1(m,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new fv(this.firestore,e,this._query)}}class ii{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wu(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ii(this.firestore,e,this._key)}}class Wu extends fv{constructor(e,t,i){super(e,t,Wy(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ii(this.firestore,null,new Ne(e))}withConverter(e){return new Wu(this.firestore,e,this._path)}}function ji(n,e,...t){if(n=bt(n),arguments.length===1&&(e=X1.newId()),Q4("doc","path",e),n instanceof hv){const i=xt.fromString(e,...t);return Kb(i),new ii(n,null,new Ne(i))}{if(!(n instanceof ii||n instanceof Wu))throw new Ie(le.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(xt.fromString(e,...t));return Kb(i),new ii(n.firestore,n instanceof Wu?n.converter:null,new Ne(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb="AsyncQueue";class Xb{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new FC(this,"async_queue_retry"),this.bu=()=>{const i=zg();i&&Ee(Qb,"Visibility state changed to "+i.visibilityState),this.a_.t_()},this.Su=e;const t=zg();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=zg();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new ia;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Xl(e))throw e;Ee(Qb,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.Su.then(()=>(this.pu=!0,e().catch(i=>{this.gu=i,this.pu=!1;const a=function(u){let d=u.message||"";return u.stack&&(d=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),d}(i);throw ir("INTERNAL UNHANDLED ERROR: ",a),i}).then(i=>(this.pu=!1,i))));return this.Su=t,t}enqueueAfterDelay(e,t,i){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const a=rv.createAndSchedule(this,e,t,i,l=>this.Fu(l));return this.fu.push(a),a}Du(){this.gu&&De()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class hp extends hv{constructor(e,t,i,a){super(e,t,i,a),this.type="firestore",this._queue=new Xb,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xb(e),this._firestoreClient=void 0,await e}}}function J4(n,e){const t=typeof n=="object"?n:oy(),i=typeof n=="string"?n:Rd,a=qd(t,"firestore").getImmediate({identifier:i});if(!a._initialized){const l=zA("firestore");l&&Z4(a,...l)}return a}function aR(n){if(n._terminated)throw new Ie(le.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||eV(n),n._firestoreClient}function eV(n){var e,t,i;const a=n._freezeSettings(),l=function(d,p,m,v){return new gL(d,p,m,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,sR(v.experimentalLongPollingOptions),v.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,a);n._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=a.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),n._firestoreClient=new G4(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fl(yn.fromBase64String(e))}catch(t){throw new Ie(le.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Fl(yn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Ie(le.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _n(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Ie(le.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Ie(le.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return $e(this._lat,e._lat)||$e(this._long,e._long)}}/**
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
 */class pv{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,a){if(i.length!==a.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==a[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tV=/^__.*__$/;class nV{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Ta(e,this.data,this.fieldMask,t,this.fieldTransforms):new rh(e,this.data,t,this.fieldTransforms)}}class oR{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Ta(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function lR(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw De()}}class pp{constructor(e,t,i,a,l,u){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=a,l===void 0&&this.Bu(),this.fieldTransforms=l||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new pp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:i,Qu:!1});return a.$u(e),a}Ku(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:i,Qu:!1});return a.Bu(),a}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Ud(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(lR(this.Lu)&&tV.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class iV{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||lp(e)}ju(e,t,i,a=!1){return new pp({Lu:e,methodName:t,zu:i,path:_n.emptyPath(),Qu:!1,Gu:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cR(n){const e=n._freezeSettings(),t=lp(n._databaseId);return new iV(n._databaseId,!!e.ignoreUndefinedProperties,t)}function sV(n,e,t,i,a,l={}){const u=n.ju(l.merge||l.mergeFields?2:0,e,t,a);gv("Data must be an object, but it was:",u,i);const d=uR(i,u);let p,m;if(l.merge)p=new ti(u.fieldMask),m=u.fieldTransforms;else if(l.mergeFields){const v=[];for(const S of l.mergeFields){const b=L_(e,S,t);if(!u.contains(b))throw new Ie(le.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);fR(v,b)||v.push(b)}p=new ti(v),m=u.fieldTransforms.filter(S=>p.covers(S.field))}else p=null,m=u.fieldTransforms;return new nV(new Wn(d),p,m)}class mp extends dp{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mp}}function rV(n,e,t){return new pp({Lu:3,zu:e.settings.zu,methodName:n._methodName,Qu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class mv extends dp{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=rV(this,e,!0),i=this.Hu.map(l=>ch(l,t)),a=new Vl(i);return new HL(e.path,a)}isEqual(e){return e instanceof mv&&sa(this.Hu,e.Hu)}}function aV(n,e,t,i){const a=n.ju(1,e,t);gv("Data must be an object, but it was:",a,i);const l=[],u=Wn.empty();Ea(i,(p,m)=>{const v=_v(e,p,t);m=bt(m);const S=a.Ku(v);if(m instanceof mp)l.push(v);else{const b=ch(m,S);b!=null&&(l.push(v),u.set(v,b))}});const d=new ti(l);return new oR(u,d,a.fieldTransforms)}function oV(n,e,t,i,a,l){const u=n.ju(1,e,t),d=[L_(e,i,t)],p=[a];if(l.length%2!=0)throw new Ie(le.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<l.length;b+=2)d.push(L_(e,l[b])),p.push(l[b+1]);const m=[],v=Wn.empty();for(let b=d.length-1;b>=0;--b)if(!fR(m,d[b])){const k=d[b];let M=p[b];M=bt(M);const W=u.Ku(k);if(M instanceof mp)m.push(k);else{const V=ch(M,W);V!=null&&(m.push(k),v.set(k,V))}}const S=new ti(m);return new oR(v,S,u.fieldTransforms)}function ch(n,e){if(hR(n=bt(n)))return gv("Unsupported field value:",e,n),uR(n,e);if(n instanceof dp)return function(i,a){if(!lR(a.Lu))throw a.Wu(`${i._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Wu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(i,a){const l=[];let u=0;for(const d of i){let p=ch(d,a.Uu(u));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),u++}return{arrayValue:{values:l}}}(n,e)}return function(i,a){if((i=bt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return BL(a.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Yt.fromDate(i);return{timestampValue:Dd(a.serializer,l)}}if(i instanceof Yt){const l=new Yt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Dd(a.serializer,l)}}if(i instanceof dv)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Fl)return{bytesValue:xC(a.serializer,i._byteString)};if(i instanceof ii){const l=a.databaseId,u=i.firestore._databaseId;if(!u.isEqual(l))throw a.Wu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Qy(i.firestore._databaseId||a.databaseId,i._key.path)}}if(i instanceof pv)return function(u,d){return{mapValue:{fields:{[rC]:{stringValue:aC},[Id]:{arrayValue:{values:u.toArray().map(m=>{if(typeof m!="number")throw d.Wu("VectorValues must only contain numeric values.");return Ky(d.serializer,m)})}}}}}}(i,a);throw a.Wu(`Unsupported field value: ${uv(i)}`)}(n,e)}function uR(n,e){const t={};return J1(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ea(n,(i,a)=>{const l=ch(a,e.qu(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function hR(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Yt||n instanceof dv||n instanceof Fl||n instanceof ii||n instanceof dp||n instanceof pv)}function gv(n,e,t){if(!hR(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const i=uv(t);throw i==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+i)}}function L_(n,e,t){if((e=bt(e))instanceof fp)return e._internalPath;if(typeof e=="string")return _v(n,e);throw Ud("Field path arguments must be of type string or ",n,!1,void 0,t)}const lV=new RegExp("[~\\*/\\[\\]]");function _v(n,e,t){if(e.search(lV)>=0)throw Ud(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new fp(...e.split("."))._internalPath}catch{throw Ud(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ud(n,e,t,i,a){const l=i&&!i.isEmpty(),u=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||u)&&(p+=" (found",l&&(p+=` in field ${i}`),u&&(p+=` in document ${a}`),p+=")"),new Ie(le.INVALID_ARGUMENT,d+n+p)}function fR(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e,t,i,a,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ii(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(pR("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class cV extends dR{data(){return super.data()}}function pR(n,e){return typeof e=="string"?_v(n,e):e instanceof fp?e._internalPath:e._delegate._internalPath}class uV{convertValue(e,t="none"){switch(ua(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ca(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw De()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Ea(e,(a,l)=>{i[a]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,a;const l=(a=(i=(t=e.fields)===null||t===void 0?void 0:t[Id].arrayValue)===null||i===void 0?void 0:i.values)===null||a===void 0?void 0:a.map(u=>Lt(u.doubleValue));return new pv(l)}convertGeoPoint(e){return new dv(Lt(e.latitude),Lt(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=tp(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(zu(e));default:return null}}convertTimestamp(e){const t=la(e);return new Yt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=xt.fromString(e);ot(LC(i));const a=new Hu(i.get(1),i.get(3)),l=new Ne(i.popFirst(5));return a.isEqual(t)||ir(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hV(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fV{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mR extends dR{constructor(e,t,i,a,l,u){super(e,t,i,a,u),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new dV(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(pR("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class dV extends mR{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(n){n=_o(n,ii);const e=_o(n.firestore,hp);return Y4(aR(e),n._key).then(t=>mV(e,n,t))}class pV extends uV{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fl(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ii(this.firestore,null,t)}}function Zb(n,e,t){n=_o(n,ii);const i=_o(n.firestore,hp),a=hV(n.converter,e);return gR(i,[sV(cR(i),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,ds.none())])}function uh(n,e,t,...i){n=_o(n,ii);const a=_o(n.firestore,hp),l=cR(a);let u;return u=typeof(e=bt(e))=="string"||e instanceof fp?oV(l,"updateDoc",n._key,e,t,i):aV(l,"updateDoc",n._key,e),gR(a,[u.toMutation(n._key,ds.exists(!0))])}function gR(n,e){return function(i,a){const l=new ia;return i.asyncQueue.enqueueAndForget(async()=>M4(await K4(i),a,l)),l.promise}(aR(n),e)}function mV(n,e,t){const i=t.docs.get(e._key),a=new pV(n);return new mR(n,a,e._key,i,new fV(t.hasPendingWrites,t.fromCache),e.converter)}function gV(...n){return new mv("arrayUnion",n)}(function(e,t=!0){(function(a){Yl=a})(ga),ra(new er("firestore",(i,{instanceIdentifier:a,options:l})=>{const u=i.getProvider("app").getImmediate(),d=new hp(new eL(i.getProvider("auth-internal")),new iL(u,i.getProvider("app-check-internal")),function(m,v){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new Ie(le.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hu(m.options.projectId,v)}(u,a),u);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),Ci(rb,ab,e),Ci(rb,ab,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R="firebasestorage.googleapis.com",yR="storageBucket",_V=2*60*1e3,yV=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends _s{constructor(e,t,i=0){super(qg(e),`Firebase Storage: ${t} (${qg(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,kt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return qg(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ot;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ot||(Ot={}));function qg(n){return"storage/"+n}function yv(){const n="An unknown error occurred, please check the error payload for server response.";return new kt(Ot.UNKNOWN,n)}function vV(n){return new kt(Ot.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function EV(n){return new kt(Ot.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function TV(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new kt(Ot.UNAUTHENTICATED,n)}function SV(){return new kt(Ot.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function bV(n){return new kt(Ot.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function AV(){return new kt(Ot.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function wV(){return new kt(Ot.CANCELED,"User canceled the upload/download.")}function CV(n){return new kt(Ot.INVALID_URL,"Invalid URL '"+n+"'.")}function RV(n){return new kt(Ot.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function IV(){return new kt(Ot.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+yR+"' property when initializing the app?")}function NV(){return new kt(Ot.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function xV(){return new kt(Ot.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function OV(n){return new kt(Ot.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function U_(n){return new kt(Ot.INVALID_ARGUMENT,n)}function vR(){return new kt(Ot.APP_DELETED,"The Firebase app was deleted.")}function kV(n){return new kt(Ot.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ku(n,e){return new kt(Ot.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function cu(n){throw new kt(Ot.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Bn.makeFromUrl(e,t)}catch{return new Bn(e,"")}if(i.path==="")return i;throw RV(e)}static makeFromUrl(e,t){let i=null;const a="([A-Za-z0-9.\\-_]+)";function l(z){z.path.charAt(z.path.length-1)==="/"&&(z.path_=z.path_.slice(0,-1))}const u="(/(.*))?$",d=new RegExp("^gs://"+a+u,"i"),p={bucket:1,path:3};function m(z){z.path_=decodeURIComponent(z.path)}const v="v[A-Za-z0-9_]+",S=t.replace(/[.]/g,"\\."),b="(/([^?#]*).*)?$",k=new RegExp(`^https?://${S}/${v}/b/${a}/o${b}`,"i"),M={bucket:1,path:3},W=t===_R?"(?:storage.googleapis.com|storage.cloud.google.com)":t,V="([^?#]*)",F=new RegExp(`^https?://${W}/${a}/${V}`,"i"),K=[{regex:d,indices:p,postModify:l},{regex:k,indices:M,postModify:m},{regex:F,indices:{bucket:1,path:2},postModify:m}];for(let z=0;z<K.length;z++){const re=K[z],ge=re.regex.exec(e);if(ge){const P=ge[re.indices.bucket];let R=ge[re.indices.path];R||(R=""),i=new Bn(P,R),re.postModify(i);break}}if(i==null)throw CV(e);return i}}class DV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PV(n,e,t){let i=1,a=null,l=null,u=!1,d=0;function p(){return d===2}let m=!1;function v(...V){m||(m=!0,e.apply(null,V))}function S(V){a=setTimeout(()=>{a=null,n(k,p())},V)}function b(){l&&clearTimeout(l)}function k(V,...F){if(m){b();return}if(V){b(),v.call(null,V,...F);return}if(p()||u){b(),v.call(null,V,...F);return}i<64&&(i*=2);let K;d===1?(d=2,K=0):K=(i+Math.random())*1e3,S(K)}let M=!1;function W(V){M||(M=!0,b(),!m&&(a!==null?(V||(d=2),clearTimeout(a),S(0)):V||(d=1)))}return S(0),l=setTimeout(()=>{u=!0,W(!0)},t),W}function MV(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LV(n){return n!==void 0}function UV(n){return typeof n=="object"&&!Array.isArray(n)}function vv(n){return typeof n=="string"||n instanceof String}function Jb(n){return Ev()&&n instanceof Blob}function Ev(){return typeof Blob<"u"}function V_(n,e,t,i){if(i<e)throw U_(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw U_(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function ER(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const a=e(i)+"="+e(n[i]);t=t+a+"&"}return t=t.slice(0,-1),t}var oo;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(oo||(oo={}));/**
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
 */function VV(n,e){const t=n>=500&&n<600,a=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||a||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jV{constructor(e,t,i,a,l,u,d,p,m,v,S,b=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=a,this.successCodes_=l,this.additionalRetryCodes_=u,this.callback_=d,this.errorCallback_=p,this.timeout_=m,this.progressCallback_=v,this.connectionFactory_=S,this.retry=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,M)=>{this.resolve_=k,this.reject_=M,this.start_()})}start_(){const e=(i,a)=>{if(a){i(!1,new Hf(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const u=d=>{const p=d.loaded,m=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,m)};this.progressCallback_!==null&&l.addUploadProgressListener(u),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(u),this.pendingConnection_=null;const d=l.getErrorCode()===oo.NO_ERROR,p=l.getStatus();if(!d||VV(p,this.additionalRetryCodes_)&&this.retry){const v=l.getErrorCode()===oo.ABORT;i(!1,new Hf(!1,null,v));return}const m=this.successCodes_.indexOf(p)!==-1;i(!0,new Hf(m,l))})},t=(i,a)=>{const l=this.resolve_,u=this.reject_,d=a.connection;if(a.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());LV(p)?l(p):l()}catch(p){u(p)}else if(d!==null){const p=yv();p.serverResponse=d.getErrorText(),this.errorCallback_?u(this.errorCallback_(d,p)):u(p)}else if(a.canceled){const p=this.appDelete_?vR():wV();u(p)}else{const p=AV();u(p)}};this.canceled_?t(!1,new Hf(!1,null,!0)):this.backoffId_=PV(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&MV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Hf{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function BV(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function FV(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function zV(n,e){e&&(n["X-Firebase-GMPID"]=e)}function HV(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function qV(n,e,t,i,a,l,u=!0){const d=ER(n.urlParams),p=n.url+d,m=Object.assign({},n.headers);return zV(m,e),BV(m,t),FV(m,l),HV(m,i),new jV(p,n.method,m,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,a,u)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GV(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function WV(...n){const e=GV();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(Ev())return new Blob(n);throw new kt(Ot.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function KV(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function $V(n){if(typeof atob>"u")throw OV("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Gg{constructor(e,t){this.data=e,this.contentType=t||null}}function YV(n,e){switch(n){case ls.RAW:return new Gg(TR(e));case ls.BASE64:case ls.BASE64URL:return new Gg(SR(n,e));case ls.DATA_URL:return new Gg(XV(e),ZV(e))}throw yv()}function TR(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=i,u=n.charCodeAt(++t);i=65536|(l&1023)<<10|u&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function QV(n){let e;try{e=decodeURIComponent(n)}catch{throw ku(ls.DATA_URL,"Malformed data URL.")}return TR(e)}function SR(n,e){switch(n){case ls.BASE64:{const a=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(a||l)throw ku(n,"Invalid character '"+(a?"-":"_")+"' found: is it base64url encoded?");break}case ls.BASE64URL:{const a=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(a||l)throw ku(n,"Invalid character '"+(a?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=$V(e)}catch(a){throw a.message.includes("polyfill")?a:ku(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let a=0;a<t.length;a++)i[a]=t.charCodeAt(a);return i}class bR{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw ku(ls.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=JV(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function XV(n){const e=new bR(n);return e.base64?SR(ls.BASE64,e.rest):QV(e.rest)}function ZV(n){return new bR(n).contentType}function JV(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,t){let i=0,a="";Jb(e)?(this.data_=e,i=e.size,a=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=a}size(){return this.size_}type(){return this.type_}slice(e,t){if(Jb(this.data_)){const i=this.data_,a=KV(i,e,t);return a===null?null:new Xr(a)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new Xr(i,!0)}}static getBlob(...e){if(Ev()){const t=e.map(i=>i instanceof Xr?i.data_:i);return new Xr(WV.apply(null,t))}else{const t=e.map(u=>vv(u)?YV(ls.RAW,u).data:u.data_);let i=0;t.forEach(u=>{i+=u.byteLength});const a=new Uint8Array(i);let l=0;return t.forEach(u=>{for(let d=0;d<u.length;d++)a[l++]=u[d]}),new Xr(a,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(n){let e;try{e=JSON.parse(n)}catch{return null}return UV(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ej(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function tj(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function AR(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nj(n,e){return e}class Vn{constructor(e,t,i,a){this.server=e,this.local=t||e,this.writable=!!i,this.xform=a||nj}}let qf=null;function ij(n){return!vv(n)||n.length<2?n:AR(n)}function wR(){if(qf)return qf;const n=[];n.push(new Vn("bucket")),n.push(new Vn("generation")),n.push(new Vn("metageneration")),n.push(new Vn("name","fullPath",!0));function e(l,u){return ij(u)}const t=new Vn("name");t.xform=e,n.push(t);function i(l,u){return u!==void 0?Number(u):u}const a=new Vn("size");return a.xform=i,n.push(a),n.push(new Vn("timeCreated")),n.push(new Vn("updated")),n.push(new Vn("md5Hash",null,!0)),n.push(new Vn("cacheControl",null,!0)),n.push(new Vn("contentDisposition",null,!0)),n.push(new Vn("contentEncoding",null,!0)),n.push(new Vn("contentLanguage",null,!0)),n.push(new Vn("contentType",null,!0)),n.push(new Vn("metadata","customMetadata",!0)),qf=n,qf}function sj(n,e){function t(){const i=n.bucket,a=n.fullPath,l=new Bn(i,a);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function rj(n,e,t){const i={};i.type="file";const a=t.length;for(let l=0;l<a;l++){const u=t[l];i[u.local]=u.xform(i,e[u.server])}return sj(i,n),i}function CR(n,e,t){const i=Tv(e);return i===null?null:rj(n,i,t)}function aj(n,e,t,i){const a=Tv(e);if(a===null||!vv(a.downloadTokens))return null;const l=a.downloadTokens;if(l.length===0)return null;const u=encodeURIComponent;return l.split(",").map(m=>{const v=n.bucket,S=n.fullPath,b="/b/"+u(v)+"/o/"+u(S),k=hh(b,t,i),M=ER({alt:"media",token:m});return k+M})[0]}function oj(n,e){const t={},i=e.length;for(let a=0;a<i;a++){const l=e[a];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}/**
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
 */const eA="prefixes",tA="items";function lj(n,e,t){const i={prefixes:[],items:[],nextPageToken:t.nextPageToken};if(t[eA])for(const a of t[eA]){const l=a.replace(/\/$/,""),u=n._makeStorageReference(new Bn(e,l));i.prefixes.push(u)}if(t[tA])for(const a of t[tA]){const l=n._makeStorageReference(new Bn(e,a.name));i.items.push(l)}return i}function cj(n,e,t){const i=Tv(t);return i===null?null:lj(n,e,i)}class gp{constructor(e,t,i,a){this.url=e,this.method=t,this.handler=i,this.timeout=a,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(n){if(!n)throw yv()}function uj(n,e){function t(i,a){const l=CR(n,a,e);return Sv(l!==null),l}return t}function hj(n,e){function t(i,a){const l=cj(n,e,a);return Sv(l!==null),l}return t}function fj(n,e){function t(i,a){const l=CR(n,a,e);return Sv(l!==null),aj(l,a,n.host,n._protocol)}return t}function bv(n){function e(t,i){let a;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?a=SV():a=TV():t.getStatus()===402?a=EV(n.bucket):t.getStatus()===403?a=bV(n.path):a=i,a.status=t.getStatus(),a.serverResponse=i.serverResponse,a}return e}function RR(n){const e=bv(n);function t(i,a){let l=e(i,a);return i.getStatus()===404&&(l=vV(n.path)),l.serverResponse=a.serverResponse,l}return t}function dj(n,e,t,i,a){const l={};e.isRoot?l.prefix="":l.prefix=e.path+"/",t.length>0&&(l.delimiter=t),i&&(l.pageToken=i),a&&(l.maxResults=a);const u=e.bucketOnlyServerUrl(),d=hh(u,n.host,n._protocol),p="GET",m=n.maxOperationRetryTime,v=new gp(d,p,hj(n,e.bucket),m);return v.urlParams=l,v.errorHandler=bv(e),v}function pj(n,e,t){const i=e.fullServerUrl(),a=hh(i,n.host,n._protocol),l="GET",u=n.maxOperationRetryTime,d=new gp(a,l,fj(n,t),u);return d.errorHandler=RR(e),d}function mj(n,e){const t=e.fullServerUrl(),i=hh(t,n.host,n._protocol),a="DELETE",l=n.maxOperationRetryTime;function u(p,m){}const d=new gp(i,a,u,l);return d.successCodes=[200,204],d.errorHandler=RR(e),d}function gj(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function _j(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=gj(null,e)),i}function yj(n,e,t,i,a){const l=e.bucketOnlyServerUrl(),u={"X-Goog-Upload-Protocol":"multipart"};function d(){let K="";for(let z=0;z<2;z++)K=K+Math.random().toString().slice(2);return K}const p=d();u["Content-Type"]="multipart/related; boundary="+p;const m=_j(e,i,a),v=oj(m,t),S="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+p+`\r
Content-Type: `+m.contentType+`\r
\r
`,b=`\r
--`+p+"--",k=Xr.getBlob(S,i,b);if(k===null)throw NV();const M={name:m.fullPath},W=hh(l,n.host,n._protocol),V="POST",F=n.maxUploadRetryTime,B=new gp(W,V,uj(n,t),F);return B.urlParams=M,B.headers=u,B.body=k.uploadData(),B.errorHandler=bv(e),B}class vj{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=oo.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=oo.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=oo.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,a){if(this.sent_)throw cu("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),a!==void 0)for(const l in a)a.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,a[l].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw cu("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw cu("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw cu("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw cu("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Ej extends vj{initXhr(){this.xhr_.responseType="text"}}function _p(){return new Ej}/**
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
 */class yo{constructor(e,t){this._service=e,t instanceof Bn?this._location=t:this._location=Bn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new yo(e,t)}get root(){const e=new Bn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return AR(this._location.path)}get storage(){return this._service}get parent(){const e=ej(this._location.path);if(e===null)return null;const t=new Bn(this._location.bucket,e);return new yo(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw kV(e)}}function Tj(n,e,t){n._throwIfRoot("uploadBytes");const i=yj(n.storage,n._location,wR(),new Xr(e,!0),t);return n.storage.makeRequestWithTokens(i,_p).then(a=>({metadata:a,ref:n}))}function Sj(n){const e={prefixes:[],items:[]};return IR(n,e).then(()=>e)}async function IR(n,e,t){const a=await bj(n,{pageToken:t});e.prefixes.push(...a.prefixes),e.items.push(...a.items),a.nextPageToken!=null&&await IR(n,e,a.nextPageToken)}function bj(n,e){e!=null&&typeof e.maxResults=="number"&&V_("options.maxResults",1,1e3,e.maxResults);const t=e||{},i=dj(n.storage,n._location,"/",t.pageToken,t.maxResults);return n.storage.makeRequestWithTokens(i,_p)}function Aj(n){n._throwIfRoot("getDownloadURL");const e=pj(n.storage,n._location,wR());return n.storage.makeRequestWithTokens(e,_p).then(t=>{if(t===null)throw xV();return t})}function wj(n){n._throwIfRoot("deleteObject");const e=mj(n.storage,n._location);return n.storage.makeRequestWithTokens(e,_p)}function Cj(n,e){const t=tj(n._location.path,e),i=new Bn(n._location.bucket,t);return new yo(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rj(n){return/^[A-Za-z]+:\/\//.test(n)}function Ij(n,e){return new yo(n,e)}function NR(n,e){if(n instanceof Av){const t=n;if(t._bucket==null)throw IV();const i=new yo(t,t._bucket);return e!=null?NR(i,e):i}else return e!==void 0?Cj(n,e):n}function Nj(n,e){if(e&&Rj(e)){if(n instanceof Av)return Ij(n,e);throw U_("To use ref(service, url), the first argument must be a Storage instance.")}else return NR(n,e)}function nA(n,e){const t=e==null?void 0:e[yR];return t==null?null:Bn.makeFromBucketSpec(t,n)}function xj(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:a}=i;a&&(n._overrideAuthToken=typeof a=="string"?a:GA(a,n.app.options.projectId))}class Av{constructor(e,t,i,a,l){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=a,this._firebaseVersion=l,this._bucket=null,this._host=_R,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=_V,this._maxUploadRetryTime=yV,this._requests=new Set,a!=null?this._bucket=Bn.makeFromBucketSpec(a,this._host):this._bucket=nA(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Bn.makeFromBucketSpec(this._url,e):this._bucket=nA(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){V_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){V_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(jn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new yo(this,e)}_makeRequest(e,t,i,a,l=!0){if(this._deleted)return new DV(vR());{const u=qV(e,this._appId,i,a,t,this._firebaseVersion,l);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(e,t){const[i,a]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,a).getPromise()}}const iA="@firebase/storage",sA="0.13.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR="storage";function Oj(n,e,t){return n=bt(n),Tj(n,e,t)}function kj(n){return n=bt(n),Sj(n)}function rA(n){return n=bt(n),Aj(n)}function Dj(n){return n=bt(n),wj(n)}function Wg(n,e){return n=bt(n),Nj(n,e)}function Pj(n=oy(),e){n=bt(n);const i=qd(n,xR).getImmediate({identifier:e}),a=zA("storage");return a&&Mj(i,...a),i}function Mj(n,e,t,i={}){xj(n,e,t,i)}function Lj(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),a=n.getProvider("app-check-internal");return new Av(t,i,a,e,ga)}function Uj(){ra(new er(xR,Lj,"PUBLIC").setMultipleInstances(!0)),Ci(iA,sA,""),Ci(iA,sA,"esm2017")}Uj();const Vj={apiKey:"AIzaSyDWN5GCnrhUqKZlOt8Rxb0n748lhPf9B58",authDomain:"to-do-list-9cf11.firebaseapp.com",databaseURL:"https://to-do-list-9cf11-default-rtdb.firebaseio.com",projectId:"to-do-list-9cf11",storageBucket:"to-do-list-9cf11.firebasestorage.app",messagingSenderId:"44862500438",appId:"1:44862500438:web:ccb0f012d9c8e7cfe215f7",measurementId:"G-HB8NT8L1FD"},jj={apiKey:"AIzaSyC_SdildU9oD7BID8i4GdReOYM0_qlguN0",authDomain:"databased-react.firebaseapp.com",databaseURL:"https://databased-react-default-rtdb.firebaseio.com",projectId:"databased-react",storageBucket:"databased-react.appspot.com",messagingSenderId:"82890993147",appId:"1:82890993147:web:77b68d26108894eeeaef5e",measurementId:"G-Y0JTK4KL1P"},OR=ay(Vj,"FIRST_APP"),Bi=J4(OR),In=c2(OR),Bj=ay(jj,"SECOND_APP"),Kg=Pj(Bj),Fj=({setPaging:n,editing:e,setPage:t,indicated:i,setIndicated:a,showTaskPrompt:l,url:u,setUrl:d,showSignInPrompt:p,showSignUpPrompt:m,setShowSignInPrompt:v,setShowSignUpPrompt:S,user:b,continueAs:k,setIsSigningOut:M,showNavBar:W,showSaveChanges:V,setShowSaveChanges:F,setShowNavbar:B,setShowMakeUserSignIn:K,getAccountInformation:z,setShowPersonalInformation:re})=>{const[ge,P]=Z.useState(!1),R=[{content:"Home",link:"#Home",icon:()=>y.jsx("i",{className:"fa fa-home"}),paging:1},{content:"Tasks",link:"#Tasks",icon:()=>y.jsx("i",{className:"fa fa-book"}),paging:2},{content:"Folders",link:"#Folders",icon:()=>y.jsx("i",{className:"fa fa-folder"}),paging:3},{content:"Contacts",link:"#Contacts",icon:()=>y.jsx("i",{className:"fa fa-phone"}),paging:4}],I=D=>{let L=window.location.href;L.toLowerCase();let x=L.search("/Acad/");L=L.slice(0,x+6),d(L.concat(D))},N=(D,L)=>{const x=JSON.parse(localStorage.getItem("Changes"));b!=null?x==null?(a(0),t(D.paging),I(D.link)):(F(!0),B(!1),P(!1),n({link:D.link,page:D.paging})):(x==null&&D.paging!=2&&(a(0),t(D.paging),I(D.link)),D.paging==2&&(K(!0),P(!1))),console.log(D)};return y.jsxs(y.Fragment,{children:[y.jsxs("nav",{className:!p&&!m&&!l&&!e&&!k&&W?ft.nav:ft.hideNav,children:[y.jsxs("div",{className:ft.left,children:[y.jsx("img",{src:"./web-icon.png",className:ft.icon}),y.jsx("h1",{children:"ACAD"})]}),y.jsx("div",{className:ft.middle,children:y.jsx("ul",{className:ft.NavLinks,children:R.map((D,L)=>y.jsx("li",{onClick:()=>{N(D)},className:i===L?ft.indicated:ft.notIndicated,children:y.jsxs("a",{href:V?null:D.link,children:[D.icon()," ",y.jsxs("span",{children:[D.content,y.jsx("span",{className:ft.indication})]})]})},D.link))})}),b?y.jsxs("div",{className:`${ft.right} ${ft.LoggedIn}`,children:[y.jsx(me,{icon:y.jsx("i",{className:"fa fa-user"}),className:`${ft.User_Button}`,content:"Account",func:()=>{z(),re(!0)}}),y.jsx(me,{content:"Sign Out",func:()=>{M(!0)},className:ft.SignUpButt}),y.jsx(me,{className:ft.HamburgerButt,func:()=>{P(!0)},content:y.jsx("i",{className:"fa fa-list-ul"})})]}):y.jsxs("div",{className:`${ft.right} ${ft.notLoggedIn}`,children:[y.jsx(me,{content:"Sign In",func:()=>{v(!0)},className:ft.SignInButt}),y.jsx(me,{content:"Sign Up",func:()=>{S(!0)},className:ft.SignUpButt}),y.jsx(me,{className:ft.HamburgerButt,func:()=>{P(!0)},content:y.jsx("i",{className:"fa fa-list-ul"})})]})]}),y.jsx("div",{className:ge&&!V?ft.sidebar:ft.hideSideBar,children:y.jsxs("ul",{className:ge?ft.NavLinks:ft.hideNavLinks,children:[y.jsx(me,{className:ft.HamburgerButt,func:()=>{P(!ge)},content:y.jsx("i",{className:"fa fa-list-ul"})}),R.map((D,L)=>y.jsx("li",{onClick:()=>{N(D)},className:i===L?ft.indicated:ft.notIndicated,children:y.jsxs("a",{href:V?null:D.link,children:[D.icon()," ",y.jsxs("span",{children:[D.content,y.jsx("span",{className:ft.indication})]})]})},D.link))]})})]})},zj=({page:n,setPage:e,setIndicated:t,indicated:i})=>y.jsxs("div",{className:n==1?qs.home_wrapper:qs.hideHome,id:"Home",children:[y.jsxs("div",{className:`${qs.left} ${K0.animateLeft}`,children:[y.jsxs("div",{className:qs.wrapTop,children:[y.jsx("h1",{children:"Welcome User!"}),y.jsx("p",{children:"Write, read and document your work and studies using the Acad Web App for free!"}),y.jsx("a",{href:"#Tasks",children:y.jsx(me,{content:"Get Started",func:()=>{e(2),t(1)}})})]}),y.jsxs("div",{className:qs.wrapBottom,children:[y.jsx(me,{className:qs.orange}),y.jsx(me,{className:qs.purple}),y.jsx(me,{className:qs.blue})]})]}),y.jsx("div",{className:qs.right,children:y.jsx("img",{src:"./StartingPage/Working.png",className:K0.animateImg})})]}),Hj="_Task_Container_efcfg_1",qj="_tasks_efcfg_47",Gj="_Finished_efcfg_71",Wj="_unchecked_efcfg_95",Kj="_checked_efcfg_103",$j="_col_efcfg_111",Yj="_br_efcfg_119",Qj="_fs_efcfg_127",Xj="_bgC_efcfg_135",Zj="_fW_efcfg_143",qn={Task_Container:Hj,tasks:qj,Finished:Gj,unchecked:Wj,checked:Kj,col:$j,br:Yj,fs:Qj,bgC:Xj,fW:Zj},Jj=({handleSelectedTasks:n,selectTask:e,tasks:t,setTasks:i,searching:a,filteredTask:l,setFilteredTask:u,setOpenedTask:d,setEditing:p,type:m,sorting:v,sortOptions:S})=>{const[b,k]=Z.useState(t.map(F=>({...F,isChecked:!1})));function M(F){let B=t,K=[];B=B.map(z=>z.id===F?{...z,isChecked:!z.isChecked}:z);for(let z=0;z<B.length;z++)B[z].isChecked&&K.push({id:B[z].id,index:z}),z==B.length-1&&(n(K),K=[]);i(z=>z.map(re=>re.id===F?{...re,isChecked:!re.isChecked}:re)),a&&u(z=>z.map(re=>re.id===F?{...re,isChecked:!re.isChecked}:re))}Z.useEffect(()=>{k([...t])},[t]);const W=()=>{if(a&&l!=null)return y.jsx("div",{className:qn.Task_Container,children:l.map((F,B)=>{if(F.type==="pending"&&m==="Pending")return y.jsx(V,{task:F,i:B},F.id);if(F.type==="finished"&&m==="Finished")return y.jsx(V,{task:F,i:B},F.id);if(m==="All Tasks")return y.jsx(V,{task:F,i:B},F.id)})},"Task_Container");if(v&&!a){let F=b;for(let B in S)B==0&&S[B].state==!0?F=F.sort((K,z)=>z.dateCreated.time-K.dateCreated.time):B==1&&S[B].state==!0?F=F.sort((K,z)=>K.dateCreated.time-z.dateCreated.time):B==2&&S[B].state==!0?F=F.sort((K,z)=>K.task.localeCompare(z.task)):B==3&&S[B].state==!0&&(F=F.sort((K,z)=>z.task.localeCompare(K.task)));return y.jsx("div",{className:qn.Task_Container,children:F.map((B,K)=>{if(B.type==="pending"&&m==="Pending")return y.jsx(V,{task:B,i:K},B.id);if(B.type==="finished"&&m==="Finished")return y.jsx(V,{task:B,i:K},B.id);if(m==="All Tasks")return y.jsx(V,{task:B,i:K},B.id)})})}else if(!v&&!a)return y.jsx("div",{className:qn.Task_Container,children:b.map((F,B)=>{if(F.type==="pending"&&m==="Pending")return y.jsx(V,{task:F,i:B},F.id);if(F.type==="finished"&&m==="Finished")return y.jsx(V,{task:F,i:B},F.id);if(m==="All Tasks")return y.jsx(V,{task:F,i:B},F.id)})})},V=({task:F,i:B})=>y.jsxs("label",{htmlFor:"task"+F.id,style:F.style!="default"?{...F.style}:null,className:F.type=="pending"?`${qn.Pending} ${F.cName.map(K=>JSON.parse(K)).join(" ")} ${qn.tasks}`:`${qn.Finished} ${F.cName.map(K=>JSON.parse(K)).join(" ")} ${qn.tasks}`,onDoubleClick:()=>{p(!0),d({id:F.id,isOpened:!0})},children:[y.jsx("i",{style:e==!1?{display:"none"}:{display:"block"},className:`fa fa-check-square ${F.isChecked===!0?qn.checked:qn.unchecked}`}),y.jsx("input",{style:{display:"none"},type:"checkbox",id:"task"+F.id,onChange:()=>{e&&M(F.id)}}),F.task]},F.id);if(b!=null)return y.jsx(y.Fragment,{children:y.jsx(W,{})})},e9="_Bottom_Options_14lht_1",t9="_toLeft_14lht_31",n9="_toRight_14lht_31",i9="_Unchecked_14lht_57",s9="_hide_14lht_105",Gr={Bottom_Options:e9,toLeft:t9,toRight:n9,Unchecked:i9,hide:s9},r9=({handleSelectedTasks:n,selectedTask:e,selectTask:t,setSelectTask:i,unselectAll:a,tasks:l,setTasks:u,searching:d,updateTasks:p,setUpdateTasks:m,filteredTasks:v,setFilteredTasks:S,handleMarking:b})=>{const k=()=>{let V=l,F=v,B=[],K=[];if(d){F=F.map(z=>({...z,isChecked:!0}));for(let z=0;z<F.length;z++)F[z].isChecked&&K.push({id:F[z].id,index:z});n([...K])}else{V=V.map(z=>({...z,isChecked:!0}));for(let z=0;z<V.length;z++)V[z].isChecked&&B.push({id:V[z].id,index:z});n([...B])}d?S([...F]):m(z=>z.map(re=>({...re,isChecked:!0})))};function M(){let V=l,F=v;for(let B in F)for(let K in e)F[B].id===e[K].id&&F.splice(B,1);for(let B in l)for(let K in e)V[B].id===e[K].id&&V.splice(B,1);b(F,[...V]),n(null)}const W=()=>t==!0?y.jsx(y.Fragment,{children:y.jsxs("div",{className:Gr.toLeft,children:[y.jsx(me,{content:y.jsx("span",{children:" Select All"}),icon:y.jsx("i",{className:"fa fa-check"}),className:Gr.SelectAllButton,func:()=>{k()}}),y.jsx(me,{content:y.jsx("span",{children:" Unselect All"}),icon:y.jsx("i",{className:`fas fa fa-check ${Gr.Unchecked}`}),className:Gr.UnselectAllButton,func:()=>{a()}})]})}):y.jsx(y.Fragment,{children:y.jsx(me,{content:"Select",icon:y.jsx("i",{className:"fa fa-hand-o-up"}),className:Gr.SelectButton,func:()=>i(!0)})});return y.jsx(y.Fragment,{children:y.jsxs("div",{className:Gr.Bottom_Options,children:[y.jsx(W,{}),y.jsxs("div",{className:t==!0?Gr.toRight:Gr.hide,children:[y.jsx(me,{icon:y.jsx("i",{className:"fa fa-trash"}),content:" Delete",func:V=>{t?M():console.log("No update")}}),y.jsx(me,{icon:y.jsx("i",{className:"fa fa-close"}),content:" Cancel",func:()=>{i(!1),a()}})]})]})})},a9="_DropDown_Body_1ouwm_1",o9="_Hide_DropDown_Body_1ouwm_1",l9="_Dropdown_Wrapper_1ouwm_27",c9="_Not_Indicated_1ouwm_59",u9="_Indicated_1ouwm_69",uu={DropDown_Body:a9,Hide_DropDown_Body:o9,Dropdown_Wrapper:l9,Not_Indicated:c9,Indicated:u9},h9=({setType:n,showDropDown:e,handleType:t,unselectAll:i})=>{const a=["Pending","Finished","All Tasks"],[l,u]=Z.useState(0);return y.jsx(y.Fragment,{children:y.jsx("div",{className:e?uu.DropDown_Body:uu.Hide_DropDown_Body,onClick:()=>{t()},children:y.jsx("ul",{className:uu.Dropdown_Wrapper,children:a.map((d,p)=>y.jsx("li",{className:l==p?uu.Indicated:uu.Not_Indicated,onClick:()=>{n(a[p]),u(p),i()},children:d},a[p]))})})})},f9="_Options_tab_yd1ph_1",d9="_Prompt_Box_yd1ph_21",p9="_Close_Button_yd1ph_63",m9="_colorPicker_yd1ph_145",g9="_Hide_BG_Color_Prompt_yd1ph_177",_9="_Hide_Color_Prompt_yd1ph_179",y9="_Hide_Border_Color_Prompt_yd1ph_181",v9="_Hide_Font_Weight_Prompt_yd1ph_183",E9="_Hide_Italic_Prompt_yd1ph_185",T9="_BG_Color_Prompt_yd1ph_193",S9="_Color_Prompt_yd1ph_195",b9="_Border_Color_Prompt_yd1ph_197",A9="_Font_Weight_Prompt_yd1ph_199",w9="_Italic_Prompt_yd1ph_201",C9="_Wrap_Options_Tab_yd1ph_209",R9="_createTask_yd1ph_299",I9="_notWorking_yd1ph_321",Fe={Options_tab:f9,Prompt_Box:d9,Close_Button:p9,colorPicker:m9,Hide_BG_Color_Prompt:g9,Hide_Color_Prompt:_9,Hide_Border_Color_Prompt:y9,Hide_Font_Weight_Prompt:v9,Hide_Italic_Prompt:E9,BG_Color_Prompt:T9,Color_Prompt:S9,Border_Color_Prompt:b9,Font_Weight_Prompt:A9,Italic_Prompt:w9,Wrap_Options_Tab:C9,createTask:R9,notWorking:I9},N9=({selectedTask:n,filteredTasks:e,updateTasks:t,searching:i,optionTabNumber:a,handleMarking:l,unselectAll:u,setShowTaskPrompt:d,setShowSortPrompt:p,numberOfChanges:m,setNumberOfChanges:v,user:S,setUpdateTask:b,setLoading:k,setShowNavbar:M})=>{var Se;const[W,V]=Z.useState(a),[F,B]=Z.useState(!1),[K,z]=Z.useState(!1),[re,ge]=Z.useState(!1),[P,R]=Z.useState(!1),[I,N]=Z.useState(!1),[D,L]=Z.useState(!1);function x(he,be,A,J,ve,fe){if(n.length>=1){let Q=t,oe=t,ne=e,xe=[];for(let ye in n)if(i)for(let pe in ne)ne[pe].id==n[ye].id?(he!=!1&&(ne[n[ye].index].type=he,xe.push(ne[n[ye].index])),he==!1&&((ne[pe].style=="default"||ne[pe].style==null)&&(ne[pe].style={color:"default",border:"default",fontStyle:"default",backgroundColor:"default",fontWeight:"default"}),be&&(ne[pe].style.color=be,xe.push(ne[pe])),A&&(ne[pe].style.backgroundColor=A,xe.push(ne[pe])),J&&(ne[pe].style.fontWeight=J,xe.push(ne[pe])),ve&&(ne[pe].style.fontStyle=ve,xe.push(ne[pe])),fe&&(ne[pe].style.borderColor=fe,xe.push(ne[pe])))):xe.push(ne[n[ye].index]);for(let ye in n)oe=oe.map(pe=>{if(n[ye].id==pe.id){let Re={...pe};return Re.style=Re.style==="default"?{color:"default",border:"default",fontStyle:"default",backgroundColor:"default",fontWeight:"default"}:{...Re.style},he!==!1&&(Re.type=he),be&&(Re.style={...Re.style,color:be}),A&&(Re.style={...Re.style,backgroundColor:A}),J&&(Re.style={...Re.style,fontWeight:J}),ve&&(Re.style={...Re.style,fontStyle:ve}),fe&&(Re.style={...Re.style,borderColor:fe}),Re.isChecked=!0,Re}else return{...pe}});i?l([...ne],[...oe],Q):l(ne,[...oe],Q)}}function je(){let he=m+1,be=JSON.parse(localStorage.getItem("Changes"));be=be[he],b([...be]),v(he),console.log(JSON.parse(localStorage.getItem("Changes")))}function qe(){let he=m-1,be=JSON.parse(localStorage.getItem("Changes"));be=be[he],b([...be]),v(he),console.log(JSON.parse(localStorage.getItem("Changes")))}const ce=async()=>{k(!0),M(!1);let he=JSON.parse(localStorage.getItem("Changes"));he=[...he[m]],he=he.map(J=>({...J,isChecked:!1}));const be=S==null?void 0:S.uid.toString(),A=ji(Bi,`Users/${be}`);try{await uh(A,{tasks:he}),v(null),b([...he]),localStorage.removeItem("Changes")}catch(J){alert(J.message)}M(!0),k(!1)};return Z.useEffect(()=>{V(a)},[a]),Z.useEffect(()=>{console.log(n)},[n]),y.jsxs("div",{className:Fe.Options_tab,children:[y.jsxs("div",{className:K?`${Fe.BG_Color_Prompt} ${Fe.Prompt_Box}`:`${Fe.Hide_BG_Color_Prompt} ${Fe.Prompt_Box}`,children:[y.jsx(me,{icon:y.jsx("i",{className:"fa fa-close"}),className:`${Fe.Close_Button}`,func:()=>{z(!1)}}),y.jsx("h1",{children:"Change BG Color"}),y.jsxs("label",{htmlFor:"colorPicker",className:Fe.colorPicker,children:[y.jsx("input",{type:"color",id:"colorPicker",onBlur:he=>{x(!1,!1,he.target.value,!1,!1)}}),y.jsx("span",{children:"Choose BG Color"})]}),y.jsx(me,{content:"Default",func:()=>{x(!1,!1,"#f09c2e",!1,!1)}})]}),y.jsxs("div",{className:re?`${Fe.Color_Prompt} ${Fe.Prompt_Box}`:`${Fe.Hide_Color_Prompt} ${Fe.Prompt_Box}`,children:[y.jsx("h1",{children:"Change Font Color"}),y.jsx(me,{icon:y.jsx("i",{className:"fa fa-close"}),className:`${Fe.Close_Button}`,func:()=>{ge(!1)}}),y.jsxs("label",{htmlFor:"bgColorPicker",className:`${Fe.bgColorPicker} ${Fe.colorPicker}`,children:[y.jsx("input",{type:"color",id:"bgColorPicker",onBlur:he=>{x(!1,he.target.value,!1,!1,!1)}}),y.jsx("span",{children:"Choose Font Color"})]}),y.jsx(me,{content:"Default",func:()=>{x(!1,"white",!1,!1,!1)}})]}),y.jsxs("div",{className:P?`${Fe.Border_Color_Prompt} ${Fe.Prompt_Box}`:`${Fe.Hide_Border_Color_Prompt} ${Fe.Prompt_Box}`,children:[y.jsx("h1",{children:"Change Border Color"}),y.jsx(me,{icon:y.jsx("i",{className:"fa fa-close"}),className:`${Fe.Close_Button}`,func:()=>{R(!1)}}),y.jsxs("label",{htmlFor:"borderColorPicker",className:`${Fe.borderColorPicker} ${Fe.colorPicker}`,children:[y.jsx("input",{type:"color",id:"borderColorPicker",onBlur:he=>{x(!1,!1,!1,!1,!1,he.target.value)}}),y.jsx("span",{children:"Choose Border Color"})]}),y.jsx(me,{content:"Default",func:()=>{x(!1,!1,!1,!1,!1,"#d16c06")}})]}),y.jsxs("div",{className:I?`${Fe.Font_Weight_Prompt} ${Fe.Prompt_Box}`:`${Fe.Hide_Font_Weight_Prompt} ${Fe.Prompt_Box}`,children:[y.jsx("h1",{children:"Change Font Weight"}),y.jsx(me,{icon:y.jsx("i",{className:"fa fa-close"}),className:`${Fe.Close_Button}`,func:()=>{N(!1)}}),y.jsx(me,{content:"Normal",func:()=>{x(!1,!1,!1,"Normal",!1,!1)}}),y.jsx(me,{content:"Bold",func:()=>{x(!1,!1,!1,"Bold",!1,!1)}}),y.jsx(me,{content:"Bolder",func:()=>{x(!1,!1,!1,"Bolder",!1,!1)}})]}),y.jsxs("div",{className:D?`${Fe.Italic_Prompt} ${Fe.Prompt_Box}`:`${Fe.Hide_Italic_Prompt} ${Fe.Prompt_Box}`,children:[y.jsx("h1",{children:"Change Italization"}),y.jsx(me,{icon:y.jsx("i",{className:"fa fa-close"}),className:`${Fe.Close_Button}`,func:()=>{L(!1)}}),y.jsx(me,{content:"Normal",func:()=>{x(!1,!1,!1,!1,"Normal",!1)}}),y.jsx(me,{content:"Italic",func:()=>{x(!1,!1,!1,!1,"Italic",!1)}})]}),y.jsxs("div",{className:Fe.Wrap_Options_Tab,children:[y.jsx(me,{icon:y.jsx("i",{className:"fa fa-save"}),content:"Save Changes",className:m==null?`${Fe.notWorking}`:null,func:()=>{m!=null&&ce()}}),y.jsx(me,{icon:y.jsx("i",{className:"material-icons",children:"undo"}),content:"Undo",className:m==null||m==0?`${Fe.notWorking}`:null,func:()=>{m>0&&qe()}}),y.jsx(me,{icon:y.jsx("i",{className:"material-icons",children:"redo"}),content:"Redo",className:m<((Se=JSON.parse(localStorage.getItem("Changes")))==null?void 0:Se.length)-1&&m!=null?null:`${Fe.notWorking}`,func:()=>{var he;m<((he=JSON.parse(localStorage.getItem("Changes")))==null?void 0:he.length)-1&&m!=null&&je()}}),y.jsx(me,{icon:y.jsx("i",{className:"fa fa-plus"}),content:y.jsx("span",{children:" Create New Task"}),className:Fe.createTask,func:()=>{d(!0),M(!1)}}),y.jsx(me,{icon:y.jsx("i",{className:"fa fa-edit"}),content:y.jsx("span",{children:" Mark As Finished"}),func:()=>{x("finished","white","#51af0f",!1,!1,"rgb(8, 97, 20)")}}),y.jsx(me,{icon:y.jsx("i",{className:"fa fa-edit"}),content:y.jsx("span",{children:" Mark As Pending"}),func:()=>{x("pending","white","#f09c2e",!1,!1,"rgb(209, 108, 6)")}}),y.jsx(me,{icon:y.jsx("i",{className:"fa fa-sort"}),content:y.jsx("span",{children:" Sort"}),func:()=>{p(!0),M(!1)}}),y.jsx(me,{icon:y.jsx("i",{className:"material-icons",children:"format_color_fill"}),content:y.jsx("span",{children:" BG Color "}),func:()=>{z(!0),ge(!1),R(!1),N(!1),L(!1)}}),y.jsx(me,{icon:y.jsx("i",{className:"material-icons",children:"format_color_text"}),content:y.jsx("span",{children:" Font Color"}),func:()=>{ge(!0),z(!1),R(!1),N(!1,L(!1))}}),y.jsx(me,{icon:y.jsx("i",{className:"material-icons",children:"border_color"}),content:y.jsx("span",{children:" Border Color"}),func:()=>{R(!0),z(!1),ge(!1),N(!1),L(!1)}}),y.jsx(me,{icon:y.jsx("i",{className:"fa fa-bold"}),content:" Bold",className:`${Fe.green} ${Fe.black}`,func:()=>{R(!1),z(!1),ge(!1),N(!0),L(!1)}}),y.jsx(me,{icon:y.jsx("i",{className:"fa fa-italic"}),content:" Italic",func:()=>{R(!1),z(!1),ge(!1),N(!1),L(!0)}})]})]})},x9="_Task_View_19nr4_1",O9="_Hide_Task_View_19nr4_19",k9="_nav_19nr4_57",D9="_content_19nr4_127",P9="_submitButton_19nr4_173",hu={Task_View:x9,Hide_Task_View:O9,nav:k9,content:D9,submitButton:P9},M9=({openedTask:n,setOpenedTask:e,tasks:t,filteredTasks:i,setEditing:a,editing:l,user:u,handleMarking:d,setShowNavbar:p,setLoading:m})=>{const v=Z.useRef(null);function S(){let b=[...t],k=i;for(let M in b)b[M].id===n.id&&(b[M].task=v.current.innerText);for(let M in k)k[M].id===n.id&&(k[M].task=v.current.innerText);d(k,[...b]),p(!0)}if(n.id!=null)return y.jsxs("div",{className:l?hu.Task_View:hu.Hide_Task_View,children:[y.jsxs("div",{className:hu.nav,children:[y.jsxs("h3",{children:[y.jsx("i",{className:"fa fa-edit"})," ",y.jsx("span",{children:"Edit Task"})]}),y.jsx(me,{icon:y.jsx("i",{className:"fa fa-times"}),func:()=>{e({index:null,isOpened:!1}),a(!1),p(!0)}})]}),y.jsx("div",{className:hu.content,children:y.jsx("p",{ref:v,contentEditable:l,children:t.map((b,k)=>{if(b.id===n.id)return b.task})})}),y.jsx(me,{content:"Save Changes",className:hu.submitButton,func:()=>{S(),a(!1)}})]})},L9="_Task_prompt_wrapper_hoxzz_1",U9="_Hide_task_prompt_wrapper_hoxzz_1",V9="_nav_hoxzz_41",j9="_content_hoxzz_111",B9="_submitButton_hoxzz_157",fu={Task_prompt_wrapper:L9,Hide_task_prompt_wrapper:U9,nav:V9,content:j9,submitButton:B9},F9=({showTaskPrompt:n,setShowTaskPrompt:e,writeTask:t,setShowNavbar:i})=>{const a=Z.useRef(null),l=Z.useRef(null),[u,d]=Z.useState(!1);function p(){d(Math.random()*1)}function m(){t(l.current.innerText)}function v(){l.current.innerHTML="<br>",S()}function S(){l.current.innerText==`
`||l.current.innerHTML=="<br>"?a.current.style.display="block":a.current.style.display="none"}return Z.useEffect(()=>{},[u]),y.jsx(y.Fragment,{children:y.jsxs("div",{className:n?fu.Task_prompt_wrapper:fu.Hide_task_prompt_wrapper,children:[y.jsxs("div",{className:fu.nav,children:[y.jsxs("h3",{children:[y.jsx("i",{className:"fa fa-edit"})," ",y.jsx("span",{children:"Task Prompt"})]}),y.jsx(me,{icon:y.jsx("i",{className:"fa fa-times"}),func:()=>{e(!1),v(),i(!0)}})]}),y.jsxs("div",{className:fu.content,children:[y.jsx("span",{ref:a,children:"Type Any Task..."}),y.jsx("p",{ref:l,contentEditable:"true",onInput:()=>{p(),S()}})]}),y.jsx(me,{content:"Submit",className:fu.submitButton,func:()=>{m(),e(!1),v(),i(!0)}})]})})},z9="_Sort_Wrapper_1nnq2_17",H9="_Hide_Sort_Wrapper_1nnq2_19",q9="_Sort_Box_1nnq2_51",G9="_Hide_Sort_Box_Button_1nnq2_75",W9="_Sort_Options_1nnq2_105",K9="_checked_1nnq2_153",$9="_unchecked_1nnq2_153",Wr={Sort_Wrapper:z9,Hide_Sort_Wrapper:H9,Sort_Box:q9,Hide_Sort_Box_Button:G9,Sort_Options:W9,checked:K9,unchecked:$9},Y9=({setShowSortPrompt:n,showSortPrompt:e,sortOptions:t,setSortOptions:i,setSorting:a,setShowNavbar:l,showSaveChanges:u})=>{function d(p){let m=t;m=m.map((v,S)=>m[S]===m[p]?{...v,state:!v.state}:{...v,state:!1});for(let v in m){if(m[v].state==!0){a(!0);break}v==m.length-1&&!m[v].state&&a(!1)}i([...m])}return y.jsx("div",{className:e?Wr.Sort_Wrapper:Wr.Hide_Sort_Wrapper,children:y.jsxs("div",{className:e?Wr.Sort_Box:Wr.Hide_Sort_Box,children:[y.jsx("h2",{children:"Sort Settings"}),y.jsx(me,{icon:y.jsx("i",{className:"fa fa-close"}),className:Wr.Hide_Sort_Box_Button,func:()=>{n(!1),l(!0)}}),y.jsx("div",{className:Wr.Sort_Options,children:t.map((p,m)=>y.jsx(me,{icon:y.jsx("i",{className:`fa fa-check-square ${p.state==!0?Wr.checked:Wr.unchecked}`}),content:p.description,func:()=>{d(m),l(!1)}},p.description))})]})})},Q9="_Changes_Wrapper_26idq_1",X9="_Changes_Box_26idq_27",Z9="_Top_26idq_55",J9="_Options_26idq_107",Gf={Changes_Wrapper:Q9,Changes_Box:X9,Top:Z9,Options:J9},e6=({showSaveChanges:n,setShowSaveChanges:e,setUpdateTask:t,setNumberOfChanges:i,numberOfChanges:a,user:l,paging:u,setPage:d,setShowNavbar:p,setLoading:m})=>{const v=async()=>{var M;let S=JSON.parse(localStorage.getItem("Changes"));S=[...S[a]],S=S.map(W=>({...W,isChecked:!1}));const b=(M=l==null?void 0:l.uid)==null?void 0:M.toString(),k=ji(Bi,`Users/${b}`);m(!0);try{if(await uh(k,{tasks:S}),i(null),t([...S]),localStorage.removeItem("Changes"),u){let W=window.location.href;W.toLowerCase();let V=W.search("/Acad/");W=W.slice(0,V+6),W=W.concat(u==null?void 0:u.link),window.location.href=W,d(u.page),m(fase)}}catch(W){alert("Error Saving Your Changes"),e(!1),console.log("Error writing task:",W),m(!1)}p(!0)};if(n)return y.jsx("div",{className:Gf.Changes_Wrapper,children:y.jsxs("div",{className:Gf.Changes_Box,children:[y.jsxs("div",{className:Gf.Top,children:[y.jsx("i",{className:"fa fa-warning"}),y.jsx("h3",{children:"Would You Save Your Previous Changes?"})]}),y.jsxs("div",{className:Gf.Options,children:[y.jsx(me,{content:"No",func:()=>{e(!1),localStorage.removeItem("Changes"),window.location.reload()}}),y.jsx(me,{content:"Yes",func:()=>{e(!1),v()}})]})]})})},t6="_Hide_Task_Wrapper_1397q_5",n6="_Task_Wrapper_1397q_13",i6="_Tasks_Editor_1397q_33",s6="_Search_wrapper_1397q_103",dl={Hide_Task_Wrapper:t6,Task_Wrapper:n6,Tasks_Editor:i6,Search_wrapper:s6},r6="_Loading_Wrapper_infip_25",a6="_Loading_Bar_infip_59",aA={Loading_Wrapper:r6,Loading_Bar:a6},o6=({loading:n})=>{if(n)return y.jsxs("div",{className:aA.Loading_Wrapper,children:[y.jsx("div",{className:aA.Loading_Bar}),"Loading..."]})},l6=({page:n,paging:e,setPage:t,setPaging:i,setEditing:a,editing:l,user:u,getTask:d,setShowNavbar:p,setShowSaveChanges:m,showSaveChanges:v,setLoading:S})=>{const b=JSON.parse(localStorage.getItem("Changes")),k=Z.useRef(null),[M,W]=Z.useState(!1),[V,F]=Z.useState(!1),[B,K]=Z.useState(!1),[z,re]=Z.useState(!1),[ge,P]=Z.useState(!1),[R,I]=Z.useState(!1),[N,D]=Z.useState([]),[L,x]=Z.useState(1),[je,qe]=Z.useState("Pending"),[ce,Se]=Z.useState(d),[he,be]=Z.useState(b?b.length-1:null),[A,J]=Z.useState(ce.map(X=>({...X,isChecked:!1}))),[ve,fe]=Z.useState(null),[Q,oe]=Z.useState({index:null,isOpened:!1}),[ne,xe]=Z.useState(null),[ye,pe]=Z.useState([{description:"Newest to Oldest",state:!1},{description:"Oldest to Newest",state:!1},{description:"From A-Z",state:!1},{description:"From Z-A",state:!1}]);function Re(){K(!1)}const wt=async X=>{var Sa;let Ge=[...ce];const Dt=(Sa=u.uid)==null?void 0:Sa.toString(),Ut=ji(Bi,"Users",Dt);let ys="qwertyuiopasdfghjklzxcvbnm",ai="";for(let vt=0;vt<10;vt++){let Vt=Math.floor(Math.random()*ys.length);ai=ai.concat(ys[Vt])}let cn={id:ai,task:X,dateCreated:{fullDate:new Date,time:Date.now()},selected:!1,style:"default",cName:[JSON.stringify(qn.col),JSON.stringify(qn.br),JSON.stringify(qn.fs),JSON.stringify(qn.bgC),JSON.stringify(qn.fW)],isChecked:!1,type:"pending"};Ge.unshift(cn);try{await uh(Ut,{tasks:gV(cn)}),I(!1),J([...Ge])}catch(vt){console.log("Error writing task:",vt)}};function Xt(X,Ge,Dt){const Ut=JSON.parse(localStorage.getItem("Changes"))!=null?JSON.parse(localStorage.getItem("Changes")):[];Ut.length==0&&Ut.push(A),Ut.length>=1&&Ut.push(Ge),localStorage.setItem("Changes",JSON.stringify(Ut)),be(Ut.length-1),N.length>=1&&(V&&fe([...X]),J([...Ge]))}function Zt(){k.current.value==""?F(!1):(F(!0),fe(ce.filter(X=>X.task.toLowerCase().includes(k.current.value.toLowerCase()))),re(!1))}function kn(X){D(X==null?[]:[...X])}function ri(X){oe(X)}function Fn(){let X=ye;for(let Ge=0;Ge<ye.length;Ge++)if(X[Ge].state==!0){re(!0);break}else Ge==ye.length-1&&ye[Ge].state==!1&&re(!1)}const Fi=()=>{let X=ce,Ge=ve;V?(Ge=Ge.map(Dt=>({...Dt,isChecked:!1})),kn(null)):(X=X.map(Dt=>({...Dt,isChecked:!1})),kn(null)),J(Dt=>Dt.map(Ut=>({...Ut,isChecked:!1}))),V&&fe([...Ge])};if(Z.useEffect(()=>{Se([...A]),fe([...A.filter(X=>{var Ge;return X.task.toLowerCase().includes((Ge=k.current)==null?void 0:Ge.value.toLowerCase())})])},[A]),Z.useEffect(()=>{d!=null&&d.tasks?J(d.tasks):J([])},[d]),Z.useEffect(()=>{const X=JSON.parse(localStorage.getItem("Changes"));(X==null?void 0:X.length)>=2&&(m(!0),p(!1))},[]),n==2)return y.jsx(y.Fragment,{children:y.jsxs("div",{className:n==2?dl.Task_Wrapper:dl.Hide_Task_Wrapper,id:"Tasks",children:[y.jsx(F9,{showTaskPrompt:R,setShowTaskPrompt:I,writeTask:X=>{wt(X)},setShowNavbar:X=>p(X)}),y.jsxs("div",{className:dl.Tasks_Editor,children:[y.jsxs("h2",{className:dl.Title_wrapper,children:["Tasks",y.jsx("i",{className:"fa fa-bars",onClick:()=>{K(!B)}}),y.jsx(h9,{type:je,setType:X=>{qe(X)},showDropDown:B,handleType:X=>{Re()},unselectAll:X=>{Fi()},setSortOptions:X=>{pe(X)},setSorting:X=>{re(X)}})]}),y.jsx(N9,{optionTabNumber:L,updateTasks:A,filteredTasks:ve,setShowTaskPrompt:X=>{I(X)},searching:V,setSearching:X=>F(X),handleSearch:()=>{Zt()},selectedTask:N,handleMarking:(X,Ge,Dt)=>{Xt(X,Ge)},markAsPending:X=>{markAsPending(X)},unselectAll:()=>Fi(),setBgColor:X=>setBgColor(X),setColor:X=>setColor(X),setShowSortPrompt:X=>{P(X)},numberOfChanges:he,setNumberOfChanges:X=>be(X),user:u,setUpdateTask:X=>{J(X)},setShowNavbar:X=>p(X),setLoading:X=>S(X)}),y.jsx("div",{className:dl.Search_wrapper,children:y.jsxs("div",{children:[y.jsx("label",{htmlFor:"search-bar",children:y.jsx("i",{className:"fa fa-search"})}),y.jsx("input",{ref:k,id:"search-bar",type:"text",placeholder:"Type Task...",onChange:()=>{k.current.value==""&&(Fn(),Zt())}}),y.jsx(me,{content:"Search",className:dl.Search_button,func:()=>{Zt(),Fn()}})]})}),y.jsx(r9,{selectedTask:N,handleSelectedTasks:X=>kn(X),selectTask:M,setSelectTask:W,unselectAll:()=>{Fi()},tasks:ce,setTasks:X=>{J(X)},filteredTasks:ve,setFilteredTasks:X=>{fe(X)},searching:V,setUpdateTasks:X=>J(X),updateTasks:A,handleMarking:(X,Ge,Dt)=>{Xt(X,Ge)}}),y.jsx(Jj,{selectedTasks:N,setSelectedTasks:()=>D(),selectTask:M,tasks:ce,setTasks:X=>{Se(X)},del:X=>{del(X)},handleSelectedTasks:X=>kn(X),filteredTask:ve,setFilteredTask:X=>{fe(X)},searching:V,handleOpenedTask:X=>{ri(X)},openedTask:Q,setShowTaskPrompt:X=>{I(X)},editing:l,setEditing:X=>{a(X)},setOpenedTask:X=>{oe(X)},type:je,setSorting:X=>{re(X)},sorting:z,sortOptions:ye}),y.jsx(M9,{openedTask:Q,setOpenedTask:X=>{oe(X)},tasks:ce,filteredTasks:ve,saveChanges:(X,Ge)=>{saveChanges(X,Ge)},editing:l,searching:V,setEditing:X=>{a(X)},editedValue:ne,user:u,setUpdateTask:X=>{J(X)},setShowNavbar:X=>{p(X)},setLoading:X=>S(X),handleMarking:(X,Ge)=>Xt(X,Ge)}),y.jsx(Y9,{showSortPrompt:ge,setShowSortPrompt:X=>{P(X)},sortOptions:ye,setSortOptions:X=>{pe(X)},setSorting:X=>{re(X)},sorting:z,setShowNavbar:X=>{p(X)}}),y.jsx(e6,{showSaveChanges:v,numberOfChanges:he,setNumberOfChanges:X=>be(X),user:u,setUpdateTask:X=>{J(X)},setPaging:X=>{i(X)},paging:e,setPage:X=>{t(X)},setShowSaveChanges:X=>{m(X)},setShowNavbar:X=>{p(X)},setLoading:X=>S(X)})]})]})})},c6="_Account_Information_Wrapper_12voy_1",u6="_Hide_Account_Information_Wrapper_12voy_1",h6="_navBar_12voy_41",f6="_Account_Information_Box_12voy_71",d6="_left_12voy_105",p6="_right_12voy_129",Gs={Account_Information_Wrapper:c6,Hide_Account_Information_Wrapper:u6,navBar:h6,Account_Information_Box:f6,left:d6,right:p6},m6="_Actions_Tab_Wrapper_f5cg2_1",g6="_editButt_f5cg2_13",_6="_Hide_Prompt_Button_f5cg2_59",Wf={Actions_Tab_Wrapper:m6,editButt:g6,Hide_Prompt_Button:_6},y6=({editAccount:n,setEditAccount:e,saveAccountChanges:t,setShowPersonalInformation:i,setShowChanges:a})=>{function l(){n?a(!0):(i(!1),e(!1))}const u=()=>n?y.jsx(y.Fragment,{children:y.jsx(me,{icon:y.jsx("i",{className:"fa fa-save"}),content:"SaveChanges",className:Wf.editButt,func:()=>{t(),e(!1)}})}):y.jsx(y.Fragment,{children:y.jsx(me,{icon:y.jsx("i",{className:"fa fa-edit"}),content:"Edit Information",className:Wf.editButt,func:()=>{e(!0)}})});return y.jsxs("div",{className:Wf.Actions_Tab_Wrapper,children:[y.jsx(u,{}),y.jsx(me,{icon:y.jsx("i",{className:"fa fa-close"}),className:Wf.Hide_Prompt_Button,func:()=>{l()}})]})},v6="_Profile_Img_Wrapper_1nr9l_1",E6="_profPic_1nr9l_17",T6="_uploadPictureWrapper_1nr9l_39",S6="_showUploadedPictures_1nr9l_89",b6="_hideUploadedPictures_1nr9l_89",A6="_uploadedPicBox_1nr9l_127",w6="_bottom_1nr9l_189",C6="_clearButt_1nr9l_207",R6="_hidePromptButt_1nr9l_295",I6="_Picture_Wrapper_1nr9l_335",N6="_Picture_Box_1nr9l_361",bi={Profile_Img_Wrapper:v6,profPic:E6,uploadPictureWrapper:T6,showUploadedPictures:S6,hideUploadedPictures:b6,uploadedPicBox:A6,bottom:w6,clearButt:C6,hidePromptButt:R6,Picture_Wrapper:I6,Picture_Box:N6};LA();const x6=({accInformation:n,editAccount:e,user:t,setLoading:i})=>{const a=Z.useRef(),[l,u]=Z.useState(null),[d,p]=Z.useState(!1),[m,v]=Z.useState([]),[S,b]=Z.useState([]),k=async()=>{var B;i(!0);try{let K=[];const z=await kj(Wg(Kg,(B=In.currentUser)==null?void 0:B.uid));for(let re in z.items){const ge=await rA(z.items[re]);K.unshift({img:ge,id:Math.random()*1,fileName:z.items[re].name})}v([...K])}catch(K){console.log(K)}i(!1)},M=async B=>{i(!0);const K=B;if(K){let z="qwertyuiopasdfghjklzxcvbnm",re="";for(let P=0;P<15;P++){let R=Math.floor(Math.random()*z.length);re=re.concat(z[R])}const ge=Wg(Kg,In.currentUser.uid+`/${K.name+"_"+re}`);await Oj(ge,K),rA(ge).then(P=>{v(R=>[{img:P,id:Math.random()*1,fileName:K.name+"_"+re},...R])})}else console.log("No file selected.");i(!1)},W=async B=>{var K;i(!0);try{await uh(ji(Bi,"Users",(K=In.currentUser)==null?void 0:K.uid),{profPic:B}),a.current.style.backgroundImage=`url(${B})`}catch(z){console.log(z)}i(!1)},V=async B=>{var K;i(!0);try{await Dj(Wg(Kg,`/${(K=In.currentUser)==null?void 0:K.uid}/${B}`)),k()}catch(z){console.log(z)}i(!1)};Z.useEffect(()=>{k()},[t]);const F=()=>{if(l)return y.jsx("div",{className:bi.Picture_Wrapper,children:y.jsxs("div",{className:bi.Picture_Box,children:[y.jsx(me,{icon:y.jsx("i",{className:"fa fa-close"}),className:bi.hidePromptButt,func:()=>{u(!1)}}),y.jsx("img",{src:l})]})})};return y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:bi.Profile_Img_Wrapper,children:[y.jsx("div",{ref:a,className:bi.profPic,style:n!=null&&n.profPic?{backgroundImage:`url(${n.profPic})`}:{backgroundImage:"url(./blue-circle-with-white-user.png)"},onClick:()=>{u(n.profPic)}}),y.jsxs("div",{className:bi.uploadPictureWrapper,children:[e?y.jsx(me,{content:"Change Profile",func:()=>{p(!d)}}):y.jsx("h2",{children:"Profile Picture"}),y.jsx("div",{className:d?bi.showUploadedPictures:bi.hideUploadedPictures,children:y.jsxs("div",{className:bi.uploadedPicBox,children:[y.jsx(me,{icon:y.jsx("i",{className:"fa fa-close"}),className:bi.hidePromptButt,func:()=>{p(!1)}}),y.jsx("h2",{children:"Upload Task"}),y.jsxs("div",{className:bi.bottom,children:[y.jsx("label",{htmlFor:"imgInput",children:y.jsx("i",{className:"fa fa-plus"})}),y.jsx("input",{type:"file",accept:"image/*",id:"imgInput",onChange:B=>{M(B.target.files[0])},style:{display:"none"}}),m==null?void 0:m.map(B=>y.jsxs("div",{children:[y.jsx(me,{icon:y.jsx("i",{className:"fa fa-close"}),className:bi.clearButt,func:()=>V(B==null?void 0:B.fileName)}),y.jsx("div",{style:{backgroundImage:`url(${B.img})`},onClick:()=>{W(B==null?void 0:B.img)}})]},B==null?void 0:B.id))]})]})})]})]}),y.jsx(F,{})]})},O6="_Contacts_Wrapper_d9iqp_1",k6="_Contacts_Box_d9iqp_27",oA={Contacts_Wrapper:O6,Contacts_Box:k6},D6=({contacts:n,setContacts:e,editAccount:t})=>{const[i,a]=Z.useState(null),[l,u]=Z.useState(null),[d,p]=Z.useState(n);function m(v,S){S.key!="Enter"?(a(v),u(S.target.value),p(b=>b.map((k,M)=>M==v?{...k,content:S.target.value}:{...k}))):(a(null),e([...d]))}return Z.useEffect(()=>{p(n),console.log(n)},[n]),y.jsxs("div",{className:oA.Contacts_Wrapper,children:[y.jsx("h3",{children:"Contacts:"}),y.jsx("div",{className:oA.Contacts_Box,children:n==null?void 0:n.map((v,S)=>y.jsxs("li",{children:[y.jsx("i",{className:"material-icons",children:v.icon}),y.jsx("input",{rows:1,type:"text",value:S==i?l:v.content,style:t?{borderBottom:".2rem solid #EAAE2C"}:{borderBottom:"none"},contentEditable:!!t,onFocus:b=>{u(b.target.value),a(S),e([...d])},onChange:b=>{t&&m(S,b)},onBlur:b=>{u(b.target.value),a(S),e([...d])}},v.content)]},v.content))})]})},P6="_Skills_Wrapper_18hwh_1",M6="_Add_Skills_Wrapper_18hwh_19",L6="_Skills_Box_18hwh_55",U6="_hideInput_18hwh_135",V6="_showInput_18hwh_143",pl={Skills_Wrapper:P6,Add_Skills_Wrapper:M6,Skills_Box:L6,hideInput:U6,showInput:V6},j6=({skills:n,addSkill:e,editAccount:t,setSkills:i,skillRef:a})=>{const[l,u]=Z.useState(!1);function d(){var m;((m=n==null?void 0:n.current)==null?void 0:m.value)==""||e(),u(!1),a.current.value=""}function p(m){let v=n;for(let S in v)m==S&&v.splice(S,1);i([...v])}return y.jsxs("form",{className:pl.Skills_Wrapper,onSubmit:m=>{m.preventDefault()},children:[y.jsxs("div",{className:pl.Add_Skills_Wrapper,children:[y.jsx("h3",{children:"Skills:"}),y.jsx("label",{htmlFor:"blankSkill",style:t?{display:"flex"}:{display:"none"},onClick:()=>u(!0),children:y.jsx("i",{className:"fa fa-plus"})})]}),y.jsxs("div",{className:pl.Skills_Box,children:[n==null?void 0:n.map((m,v)=>y.jsxs("li",{children:[y.jsx("span",{children:y.jsx("input",{type:"text",value:m,readOnly:!0})}),t?y.jsx(me,{icon:y.jsx("i",{className:"fa fa-close"}),className:pl.Hide_Prompt_Button,func:()=>{p(v)}}):null]},m)),y.jsxs("div",{className:l?pl.showInput:pl.hideInput,children:[y.jsx("input",{type:"text",id:"blankSkill",ref:a}),y.jsx(me,{content:"Submit",func:()=>{d()}})]})]})]})},B6="_Forms_Wrapper_cer17_1",F6="_accountInfoWrapper_cer17_15",z6="_inputWrapper_cer17_29",Ai={Forms_Wrapper:B6,accountInfoWrapper:F6,inputWrapper:z6},H6=({editAccount:n,accInformation:e,uName:t,setUName:i,school:a,setSchool:l,pBirth:u,setPBirth:d,age:p,setAge:m,bDay:v,setBDay:S,gender:b,setGender:k,hobbies:M,setHobbies:W,grSec:V,setGrSec:F,usingAs:B,setUsingAs:K})=>y.jsxs("div",{className:Ai.Forms_Wrapper,children:[y.jsxs("div",{className:Ai.accountInfoWrapper,children:[y.jsxs("div",{className:Ai.inputWrapper,children:[y.jsx("h4",{children:"Username:"}),y.jsx("input",{onChange:z=>{n&&i(z.target.value)},type:"text",placeholder:"Ex. Peter M. Dela Cruz",value:t||""})]}),y.jsxs("div",{className:Ai.inputWrapper,children:[y.jsx("h4",{children:"School:"}),y.jsx("input",{onChange:z=>{n&&l(z.target.value)},type:"text",placeholder:"Ex. Lolomboy National High School",value:a||""})]}),y.jsxs("div",{className:Ai.inputWrapper,children:[y.jsx("h4",{children:"Gr/Section:"}),y.jsx("input",{onChange:z=>{n&&F(z.target.value)},type:"text",placeholder:"Ex. 10-Rizal",value:V||""})]})]}),y.jsxs("div",{className:Ai.accountInfoWrapper,children:[y.jsxs("div",{className:Ai.inputWrapper,children:[y.jsx("h4",{children:"Place of Birth:"}),y.jsx("input",{onChange:z=>{n&&d(z.target.value)},type:"text",placeholder:"Ex. Marilao, Bulacan",value:u||""})]}),y.jsxs("div",{className:Ai.inputWrapper,children:[y.jsx("h4",{children:"Age:"}),y.jsx("input",{onChange:z=>{n&&m(z.target.value)},type:"text",placeholder:"Ex. 26",value:p||""})]}),y.jsxs("div",{className:Ai.inputWrapper,children:[y.jsx("h4",{children:"Birthday:"}),y.jsx("input",{onChange:z=>{n&&S(z.target.value)},type:"text",placeholder:"Ex. December 31, 2007",value:v||""})]})]}),y.jsxs("div",{className:Ai.accountInfoWrapper,children:[y.jsxs("div",{className:Ai.inputWrapper,children:[y.jsx("h4",{children:"Gender:"}),y.jsx("input",{onChange:z=>{n&&k(z.target.value)},type:"text",placeholder:"Ex. Male",value:b||""})]}),y.jsxs("div",{className:Ai.inputWrapper,children:[y.jsx("h4",{children:"Hobbies:"}),y.jsx("input",{onChange:z=>{n&&W(z.target.value)},type:"text",placeholder:"Ex. Eating, Coding",value:M||""})]})]})]}),q6="_Selections_Wrapper_dqfno_1",G6="_top_dqfno_13",W6="_Subjects_Wrapper_dqfno_81",K6="_makeSubjectButt_dqfno_95",$6="_IndicatedButt_dqfno_123",Y6="_notIndicatedButt_dqfno_133",Q6="_hideMakeSubjectButt_dqfno_143",X6="_bottom_dqfno_171",ss={Selections_Wrapper:q6,top:G6,Subjects_Wrapper:W6,makeSubjectButt:K6,IndicatedButt:$6,notIndicatedButt:Y6,hideMakeSubjectButt:Q6,bottom:X6},Z6=({accInformation:n,editAccount:e,setFavSubjects:t,purpose:i,setPurpose:a,usingAs:l,setUsingAs:u})=>{const d=Z.useRef(),[p,m]=Z.useState(null),[v,S]=Z.useState(!1),[b,k]=Z.useState(0);function M(F){const B=F==null?void 0:F.target;(B==null?void 0:B.value)!=""&&(F==null?void 0:F.key)=="Enter"&&b==0?(k(K=>K+1),S(!1),m(K=>{var z;return[{content:(z=d.current)==null?void 0:z.value,testClass:!0},...K]})):(B==null?void 0:B.value)==""&&(F==null?void 0:F.key)=="Enter"&&(B.value="",S(!1))}function W(F){m(B=>B.map((K,z)=>z==F?{...K,testClass:K.testClass!=!0}:{...K}))}function V(){let F=p,B=[];for(let K in p)F[K].testClass==!0&&B.push(F[K]);m([...B])}return Z.useEffect(()=>{p&&t([...p])},[p]),Z.useEffect(()=>{n!=null&&n.favSubjects&&m([...n.favSubjects])},[n]),y.jsxs("div",{className:ss.Selections_Wrapper,children:[y.jsxs("div",{className:ss.top,children:[y.jsxs("h3",{children:[y.jsx("span",{children:"Favourite Subjects"}),y.jsxs("label",{htmlFor:v?"makesubject":"",style:e?{display:"flex"}:{display:"none"},children:[y.jsx("i",{className:"fa fa-plus",onClick:()=>{S(!0),k(0),d.current.value=""}}),y.jsx("i",{className:"fa fa-trash",onClick:()=>{V()}})]})]}),y.jsxs("div",{className:ss.Subjects_Wrapper,children:[y.jsx(me,{element:y.jsx("input",{type:"text",id:"makesubject",ref:d,onKeyDown:F=>{M(F)},onBlur:F=>{d.current.value!=""&&(console.log(d.current.value),m(B=>B.filter(K=>K.content.toLowerCase()!==d.current.value.toLowerCase())),m(B=>{var K;return[{content:(K=d.current)==null?void 0:K.value,testClass:!0},...B]}),k(B=>B+1)),S(!1)}}),className:v?ss.makeSubjectButt:ss.hideMakeSubjectButt}),p==null?void 0:p.map((F,B)=>y.jsx(me,{func:()=>{e&&W(B)},className:F.testClass==!0?ss.IndicatedButt:ss.notIndicatedButt,content:p[B].content},F+B.toString()))]})]}),y.jsxs("div",{className:ss.bottom,children:[y.jsxs("div",{className:ss.Purpose_Wrapper,children:[y.jsx("h3",{children:y.jsx("span",{children:"Using As:"})}),e?y.jsx("textarea",{type:"text",contentEditable:!!e,onChange:F=>{u(F.target.value)},rows:"1",value:l}):y.jsx("p",{children:l})]}),y.jsxs("div",{className:ss.Using_As_Wrapper,children:[y.jsx("h3",{children:y.jsx("span",{children:"Purpose"})}),e?y.jsx("textarea",{type:"text",contentEditable:!!e,onChange:F=>{a(F.target.value)},value:i}):y.jsx("p",{children:i})]})]})]})},J6="_bioWrapper_dzyxs_1",e3={bioWrapper:J6},t3=({editAccount:n,desc:e,setDesc:t})=>y.jsxs("div",{className:e3.bioWrapper,children:[y.jsx("h3",{children:y.jsx("span",{children:"Bio"})}),n?y.jsx("textarea",{rows:4,contentEditable:!!n,onChange:i=>{t(i.target.value)},value:e}):y.jsx("p",{children:e})]}),n3="_Changes_Wrapper_1t1ha_1",i3="_Changes_Box_1t1ha_29",s3="_Top_1t1ha_57",r3="_Options_1t1ha_109",Kf={Changes_Wrapper:n3,Changes_Box:i3,Top:s3,Options:r3},a3=({showChanges:n,setShowChanges:e,setShowPersonalInfo:t,saveAccountChanges:i,setEditAccount:a})=>{if(n)return y.jsx("div",{className:Kf.Changes_Wrapper,children:y.jsxs("div",{className:Kf.Changes_Box,children:[y.jsxs("div",{className:Kf.Top,children:[y.jsx("i",{className:"fa fa-warning"}),y.jsx("h3",{children:"Would You Save Your Previous Changes?"})]}),y.jsxs("div",{className:Kf.Options,children:[y.jsx(me,{content:"No",func:()=>{window.location.reload()}}),y.jsx(me,{content:"Yes",func:()=>{e(!1),i(),t(!1),a(!1)}})]})]})})};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function o3(n,e,t){return(e=c3(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function lA(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,i)}return t}function ue(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?lA(Object(t),!0).forEach(function(i){o3(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):lA(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function l3(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function c3(n){var e=l3(n,"string");return typeof e=="symbol"?e:e+""}const cA=()=>{};let wv={},kR={},DR=null,PR={mark:cA,measure:cA};try{typeof window<"u"&&(wv=window),typeof document<"u"&&(kR=document),typeof MutationObserver<"u"&&(DR=MutationObserver),typeof performance<"u"&&(PR=performance)}catch{}const{userAgent:uA=""}=wv.navigator||{},da=wv,_t=kR,hA=DR,$f=PR;da.document;const lr=!!_t.documentElement&&!!_t.head&&typeof _t.addEventListener=="function"&&typeof _t.createElement=="function",MR=~uA.indexOf("MSIE")||~uA.indexOf("Trident/");var u3=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,h3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,LR={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},f3={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},UR=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],On="classic",yp="duotone",d3="sharp",p3="sharp-duotone",VR=[On,yp,d3,p3],m3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},g3={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},_3=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),y3={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},v3=["fak","fa-kit","fakd","fa-kit-duotone"],fA={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},E3=["kit"],T3={kit:{"fa-kit":"fak"}},S3=["fak","fakd"],b3={kit:{fak:"fa-kit"}},dA={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Yf={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},A3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],w3=["fak","fa-kit","fakd","fa-kit-duotone"],C3={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},R3={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},I3={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},j_={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},N3=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],B_=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...A3,...N3],x3=["solid","regular","light","thin","duotone","brands"],jR=[1,2,3,4,5,6,7,8,9,10],O3=jR.concat([11,12,13,14,15,16,17,18,19,20]),k3=[...Object.keys(I3),...x3,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Yf.GROUP,Yf.SWAP_OPACITY,Yf.PRIMARY,Yf.SECONDARY].concat(jR.map(n=>"".concat(n,"x"))).concat(O3.map(n=>"w-".concat(n))),D3={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const rr="___FONT_AWESOME___",F_=16,BR="fa",FR="svg-inline--fa",vo="data-fa-i2svg",z_="data-fa-pseudo-element",P3="data-fa-pseudo-element-pending",Cv="data-prefix",Rv="data-icon",pA="fontawesome-i2svg",M3="async",L3=["HTML","HEAD","STYLE","SCRIPT"],zR=(()=>{try{return!0}catch{return!1}})();function fh(n){return new Proxy(n,{get(e,t){return t in e?e[t]:e[On]}})}const HR=ue({},LR);HR[On]=ue(ue(ue(ue({},{"fa-duotone":"duotone"}),LR[On]),fA.kit),fA["kit-duotone"]);const U3=fh(HR),H_=ue({},y3);H_[On]=ue(ue(ue(ue({},{duotone:"fad"}),H_[On]),dA.kit),dA["kit-duotone"]);const mA=fh(H_),q_=ue({},j_);q_[On]=ue(ue({},q_[On]),b3.kit);const Iv=fh(q_),G_=ue({},R3);G_[On]=ue(ue({},G_[On]),T3.kit);fh(G_);const V3=u3,qR="fa-layers-text",j3=h3,B3=ue({},m3);fh(B3);const F3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],$g=f3,z3=[...E3,...k3],Du=da.FontAwesomeConfig||{};function H3(n){var e=_t.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function q3(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}_t&&typeof _t.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[t,i]=e;const a=q3(H3(t));a!=null&&(Du[i]=a)});const GR={styleDefault:"solid",familyDefault:On,cssPrefix:BR,replacementClass:FR,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Du.familyPrefix&&(Du.cssPrefix=Du.familyPrefix);const zl=ue(ue({},GR),Du);zl.autoReplaceSvg||(zl.observeMutations=!1);const we={};Object.keys(GR).forEach(n=>{Object.defineProperty(we,n,{enumerable:!0,set:function(e){zl[n]=e,Pu.forEach(t=>t(we))},get:function(){return zl[n]}})});Object.defineProperty(we,"familyPrefix",{enumerable:!0,set:function(n){zl.cssPrefix=n,Pu.forEach(e=>e(we))},get:function(){return zl.cssPrefix}});da.FontAwesomeConfig=we;const Pu=[];function G3(n){return Pu.push(n),()=>{Pu.splice(Pu.indexOf(n),1)}}const Kr=F_,cs={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function W3(n){if(!n||!lr)return;const e=_t.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;const t=_t.head.childNodes;let i=null;for(let a=t.length-1;a>-1;a--){const l=t[a],u=(l.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(u)>-1&&(i=l)}return _t.head.insertBefore(e,i),n}const K3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ku(){let n=12,e="";for(;n-- >0;)e+=K3[Math.random()*62|0];return e}function Jl(n){const e=[];for(let t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function Nv(n){return n.classList?Jl(n.classList):(n.getAttribute("class")||"").split(" ").filter(e=>e)}function WR(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function $3(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,'="').concat(WR(n[t]),'" '),"").trim()}function vp(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,": ").concat(n[t].trim(),";"),"")}function xv(n){return n.size!==cs.size||n.x!==cs.x||n.y!==cs.y||n.rotate!==cs.rotate||n.flipX||n.flipY}function Y3(n){let{transform:e,containerWidth:t,iconWidth:i}=n;const a={transform:"translate(".concat(t/2," 256)")},l="translate(".concat(e.x*32,", ").concat(e.y*32,") "),u="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),d="rotate(".concat(e.rotate," 0 0)"),p={transform:"".concat(l," ").concat(u," ").concat(d)},m={transform:"translate(".concat(i/2*-1," -256)")};return{outer:a,inner:p,path:m}}function Q3(n){let{transform:e,width:t=F_,height:i=F_,startCentered:a=!1}=n,l="";return a&&MR?l+="translate(".concat(e.x/Kr-t/2,"em, ").concat(e.y/Kr-i/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Kr,"em), calc(-50% + ").concat(e.y/Kr,"em)) "):l+="translate(".concat(e.x/Kr,"em, ").concat(e.y/Kr,"em) "),l+="scale(".concat(e.size/Kr*(e.flipX?-1:1),", ").concat(e.size/Kr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var X3=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function KR(){const n=BR,e=FR,t=we.cssPrefix,i=we.replacementClass;let a=X3;if(t!==n||i!==e){const l=new RegExp("\\.".concat(n,"\\-"),"g"),u=new RegExp("\\--".concat(n,"\\-"),"g"),d=new RegExp("\\.".concat(e),"g");a=a.replace(l,".".concat(t,"-")).replace(u,"--".concat(t,"-")).replace(d,".".concat(i))}return a}let gA=!1;function Yg(){we.autoAddCss&&!gA&&(W3(KR()),gA=!0)}var Z3={mixout(){return{dom:{css:KR,insertCss:Yg}}},hooks(){return{beforeDOMElementCreation(){Yg()},beforeI2svg(){Yg()}}}};const ar=da||{};ar[rr]||(ar[rr]={});ar[rr].styles||(ar[rr].styles={});ar[rr].hooks||(ar[rr].hooks={});ar[rr].shims||(ar[rr].shims=[]);var us=ar[rr];const $R=[],YR=function(){_t.removeEventListener("DOMContentLoaded",YR),jd=1,$R.map(n=>n())};let jd=!1;lr&&(jd=(_t.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(_t.readyState),jd||_t.addEventListener("DOMContentLoaded",YR));function J3(n){lr&&(jd?setTimeout(n,0):$R.push(n))}function dh(n){const{tag:e,attributes:t={},children:i=[]}=n;return typeof n=="string"?WR(n):"<".concat(e," ").concat($3(t),">").concat(i.map(dh).join(""),"</").concat(e,">")}function _A(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var Qg=function(e,t,i,a){var l=Object.keys(e),u=l.length,d=t,p,m,v;for(i===void 0?(p=1,v=e[l[0]]):(p=0,v=i);p<u;p++)m=l[p],v=d(v,e[m],m,e);return v};function e5(n){const e=[];let t=0;const i=n.length;for(;t<i;){const a=n.charCodeAt(t++);if(a>=55296&&a<=56319&&t<i){const l=n.charCodeAt(t++);(l&64512)==56320?e.push(((a&1023)<<10)+(l&1023)+65536):(e.push(a),t--)}else e.push(a)}return e}function W_(n){const e=e5(n);return e.length===1?e[0].toString(16):null}function t5(n,e){const t=n.length;let i=n.charCodeAt(e),a;return i>=55296&&i<=56319&&t>e+1&&(a=n.charCodeAt(e+1),a>=56320&&a<=57343)?(i-55296)*1024+a-56320+65536:i}function yA(n){return Object.keys(n).reduce((e,t)=>{const i=n[t];return!!i.icon?e[i.iconName]=i.icon:e[t]=i,e},{})}function K_(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=t,a=yA(e);typeof us.hooks.addPack=="function"&&!i?us.hooks.addPack(n,yA(e)):us.styles[n]=ue(ue({},us.styles[n]||{}),a),n==="fas"&&K_("fa",e)}const{styles:$u,shims:n5}=us,QR=Object.keys(Iv),i5=QR.reduce((n,e)=>(n[e]=Object.keys(Iv[e]),n),{});let Ov=null,XR={},ZR={},JR={},eI={},tI={};function s5(n){return~z3.indexOf(n)}function r5(n,e){const t=e.split("-"),i=t[0],a=t.slice(1).join("-");return i===n&&a!==""&&!s5(a)?a:null}const nI=()=>{const n=i=>Qg($u,(a,l,u)=>(a[u]=Qg(l,i,{}),a),{});XR=n((i,a,l)=>(a[3]&&(i[a[3]]=l),a[2]&&a[2].filter(d=>typeof d=="number").forEach(d=>{i[d.toString(16)]=l}),i)),ZR=n((i,a,l)=>(i[l]=l,a[2]&&a[2].filter(d=>typeof d=="string").forEach(d=>{i[d]=l}),i)),tI=n((i,a,l)=>{const u=a[2];return i[l]=l,u.forEach(d=>{i[d]=l}),i});const e="far"in $u||we.autoFetchSvg,t=Qg(n5,(i,a)=>{const l=a[0];let u=a[1];const d=a[2];return u==="far"&&!e&&(u="fas"),typeof l=="string"&&(i.names[l]={prefix:u,iconName:d}),typeof l=="number"&&(i.unicodes[l.toString(16)]={prefix:u,iconName:d}),i},{names:{},unicodes:{}});JR=t.names,eI=t.unicodes,Ov=Ep(we.styleDefault,{family:we.familyDefault})};G3(n=>{Ov=Ep(n.styleDefault,{family:we.familyDefault})});nI();function kv(n,e){return(XR[n]||{})[e]}function a5(n,e){return(ZR[n]||{})[e]}function ao(n,e){return(tI[n]||{})[e]}function iI(n){return JR[n]||{prefix:null,iconName:null}}function o5(n){const e=eI[n],t=kv("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function pa(){return Ov}const sI=()=>({prefix:null,iconName:null,rest:[]});function l5(n){let e=On;const t=QR.reduce((i,a)=>(i[a]="".concat(we.cssPrefix,"-").concat(a),i),{});return VR.forEach(i=>{(n.includes(t[i])||n.some(a=>i5[i].includes(a)))&&(e=i)}),e}function Ep(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:t=On}=e,i=U3[t][n];if(t===yp&&!n)return"fad";const a=mA[t][n]||mA[t][i],l=n in us.styles?n:null;return a||l||null}function c5(n){let e=[],t=null;return n.forEach(i=>{const a=r5(we.cssPrefix,i);a?t=a:i&&e.push(i)}),{iconName:t,rest:e}}function vA(n){return n.sort().filter((e,t,i)=>i.indexOf(e)===t)}function Tp(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:t=!1}=e;let i=null;const a=B_.concat(w3),l=vA(n.filter(S=>a.includes(S))),u=vA(n.filter(S=>!B_.includes(S))),d=l.filter(S=>(i=S,!UR.includes(S))),[p=null]=d,m=l5(l),v=ue(ue({},c5(u)),{},{prefix:Ep(p,{family:m})});return ue(ue(ue({},v),d5({values:n,family:m,styles:$u,config:we,canonical:v,givenPrefix:i})),u5(t,i,v))}function u5(n,e,t){let{prefix:i,iconName:a}=t;if(n||!i||!a)return{prefix:i,iconName:a};const l=e==="fa"?iI(a):{},u=ao(i,a);return a=l.iconName||u||a,i=l.prefix||i,i==="far"&&!$u.far&&$u.fas&&!we.autoFetchSvg&&(i="fas"),{prefix:i,iconName:a}}const h5=VR.filter(n=>n!==On||n!==yp),f5=Object.keys(j_).filter(n=>n!==On).map(n=>Object.keys(j_[n])).flat();function d5(n){const{values:e,family:t,canonical:i,givenPrefix:a="",styles:l={},config:u={}}=n,d=t===yp,p=e.includes("fa-duotone")||e.includes("fad"),m=u.familyDefault==="duotone",v=i.prefix==="fad"||i.prefix==="fa-duotone";if(!d&&(p||m||v)&&(i.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(i.prefix="fab"),!i.prefix&&h5.includes(t)&&(Object.keys(l).find(b=>f5.includes(b))||u.autoFetchSvg)){const b=_3.get(t).defaultShortPrefixId;i.prefix=b,i.iconName=ao(i.prefix,i.iconName)||i.iconName}return(i.prefix==="fa"||a==="fa")&&(i.prefix=pa()||"fas"),i}class p5{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];const a=t.reduce(this._pullDefinitions,{});Object.keys(a).forEach(l=>{this.definitions[l]=ue(ue({},this.definitions[l]||{}),a[l]),K_(l,a[l]);const u=Iv[On][l];u&&K_(u,a[l]),nI()})}reset(){this.definitions={}}_pullDefinitions(e,t){const i=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(i).map(a=>{const{prefix:l,iconName:u,icon:d}=i[a],p=d[2];e[l]||(e[l]={}),p.length>0&&p.forEach(m=>{typeof m=="string"&&(e[l][m]=d)}),e[l][u]=d}),e}}let EA=[],bl={};const xl={},m5=Object.keys(xl);function g5(n,e){let{mixoutsTo:t}=e;return EA=n,bl={},Object.keys(xl).forEach(i=>{m5.indexOf(i)===-1&&delete xl[i]}),EA.forEach(i=>{const a=i.mixout?i.mixout():{};if(Object.keys(a).forEach(l=>{typeof a[l]=="function"&&(t[l]=a[l]),typeof a[l]=="object"&&Object.keys(a[l]).forEach(u=>{t[l]||(t[l]={}),t[l][u]=a[l][u]})}),i.hooks){const l=i.hooks();Object.keys(l).forEach(u=>{bl[u]||(bl[u]=[]),bl[u].push(l[u])})}i.provides&&i.provides(xl)}),t}function $_(n,e){for(var t=arguments.length,i=new Array(t>2?t-2:0),a=2;a<t;a++)i[a-2]=arguments[a];return(bl[n]||[]).forEach(u=>{e=u.apply(null,[e,...i])}),e}function Eo(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];(bl[n]||[]).forEach(l=>{l.apply(null,t)})}function ma(){const n=arguments[0],e=Array.prototype.slice.call(arguments,1);return xl[n]?xl[n].apply(null,e):void 0}function Y_(n){n.prefix==="fa"&&(n.prefix="fas");let{iconName:e}=n;const t=n.prefix||pa();if(e)return e=ao(t,e)||e,_A(rI.definitions,t,e)||_A(us.styles,t,e)}const rI=new p5,_5=()=>{we.autoReplaceSvg=!1,we.observeMutations=!1,Eo("noAuto")},y5={i2svg:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return lr?(Eo("beforeI2svg",n),ma("pseudoElements2svg",n),ma("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=n;we.autoReplaceSvg===!1&&(we.autoReplaceSvg=!0),we.observeMutations=!0,J3(()=>{E5({autoReplaceSvgRoot:e}),Eo("watch",n)})}},v5={icon:n=>{if(n===null)return null;if(typeof n=="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:ao(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){const e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],t=Ep(n[0]);return{prefix:t,iconName:ao(t,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(we.cssPrefix,"-"))>-1||n.match(V3))){const e=Tp(n.split(" "),{skipLookups:!0});return{prefix:e.prefix||pa(),iconName:ao(e.prefix,e.iconName)||e.iconName}}if(typeof n=="string"){const e=pa();return{prefix:e,iconName:ao(e,n)||n}}}},si={noAuto:_5,config:we,dom:y5,parse:v5,library:rI,findIconDefinition:Y_,toHtml:dh},E5=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=_t}=n;(Object.keys(us.styles).length>0||we.autoFetchSvg)&&lr&&we.autoReplaceSvg&&si.dom.i2svg({node:e})};function Sp(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(t=>dh(t))}}),Object.defineProperty(n,"node",{get:function(){if(!lr)return;const t=_t.createElement("div");return t.innerHTML=n.html,t.children}}),n}function T5(n){let{children:e,main:t,mask:i,attributes:a,styles:l,transform:u}=n;if(xv(u)&&t.found&&!i.found){const{width:d,height:p}=t,m={x:d/p/2,y:.5};a.style=vp(ue(ue({},l),{},{"transform-origin":"".concat(m.x+u.x/16,"em ").concat(m.y+u.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function S5(n){let{prefix:e,iconName:t,children:i,attributes:a,symbol:l}=n;const u=l===!0?"".concat(e,"-").concat(we.cssPrefix,"-").concat(t):l;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:ue(ue({},a),{},{id:u}),children:i}]}]}function Dv(n){const{icons:{main:e,mask:t},prefix:i,iconName:a,transform:l,symbol:u,title:d,maskId:p,titleId:m,extra:v,watchable:S=!1}=n,{width:b,height:k}=t.found?t:e,M=S3.includes(i),W=[we.replacementClass,a?"".concat(we.cssPrefix,"-").concat(a):""].filter(re=>v.classes.indexOf(re)===-1).filter(re=>re!==""||!!re).concat(v.classes).join(" ");let V={children:[],attributes:ue(ue({},v.attributes),{},{"data-prefix":i,"data-icon":a,class:W,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(k)})};const F=M&&!~v.classes.indexOf("fa-fw")?{width:"".concat(b/k*16*.0625,"em")}:{};S&&(V.attributes[vo]=""),d&&(V.children.push({tag:"title",attributes:{id:V.attributes["aria-labelledby"]||"title-".concat(m||Ku())},children:[d]}),delete V.attributes.title);const B=ue(ue({},V),{},{prefix:i,iconName:a,main:e,mask:t,maskId:p,transform:l,symbol:u,styles:ue(ue({},F),v.styles)}),{children:K,attributes:z}=t.found&&e.found?ma("generateAbstractMask",B)||{children:[],attributes:{}}:ma("generateAbstractIcon",B)||{children:[],attributes:{}};return B.children=K,B.attributes=z,u?S5(B):T5(B)}function TA(n){const{content:e,width:t,height:i,transform:a,title:l,extra:u,watchable:d=!1}=n,p=ue(ue(ue({},u.attributes),l?{title:l}:{}),{},{class:u.classes.join(" ")});d&&(p[vo]="");const m=ue({},u.styles);xv(a)&&(m.transform=Q3({transform:a,startCentered:!0,width:t,height:i}),m["-webkit-transform"]=m.transform);const v=vp(m);v.length>0&&(p.style=v);const S=[];return S.push({tag:"span",attributes:p,children:[e]}),l&&S.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),S}function b5(n){const{content:e,title:t,extra:i}=n,a=ue(ue(ue({},i.attributes),t?{title:t}:{}),{},{class:i.classes.join(" ")}),l=vp(i.styles);l.length>0&&(a.style=l);const u=[];return u.push({tag:"span",attributes:a,children:[e]}),t&&u.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),u}const{styles:Xg}=us;function Q_(n){const e=n[0],t=n[1],[i]=n.slice(4);let a=null;return Array.isArray(i)?a={tag:"g",attributes:{class:"".concat(we.cssPrefix,"-").concat($g.GROUP)},children:[{tag:"path",attributes:{class:"".concat(we.cssPrefix,"-").concat($g.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(we.cssPrefix,"-").concat($g.PRIMARY),fill:"currentColor",d:i[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:t,icon:a}}const A5={found:!1,width:512,height:512};function w5(n,e){!zR&&!we.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function X_(n,e){let t=e;return e==="fa"&&we.styleDefault!==null&&(e=pa()),new Promise((i,a)=>{if(t==="fa"){const l=iI(n)||{};n=l.iconName||n,e=l.prefix||e}if(n&&e&&Xg[e]&&Xg[e][n]){const l=Xg[e][n];return i(Q_(l))}w5(n,e),i(ue(ue({},A5),{},{icon:we.showMissingIcons&&n?ma("missingIconAbstract")||{}:{}}))})}const SA=()=>{},Z_=we.measurePerformance&&$f&&$f.mark&&$f.measure?$f:{mark:SA,measure:SA},Su='FA "6.7.2"',C5=n=>(Z_.mark("".concat(Su," ").concat(n," begins")),()=>aI(n)),aI=n=>{Z_.mark("".concat(Su," ").concat(n," ends")),Z_.measure("".concat(Su," ").concat(n),"".concat(Su," ").concat(n," begins"),"".concat(Su," ").concat(n," ends"))};var Pv={begin:C5,end:aI};const od=()=>{};function bA(n){return typeof(n.getAttribute?n.getAttribute(vo):null)=="string"}function R5(n){const e=n.getAttribute?n.getAttribute(Cv):null,t=n.getAttribute?n.getAttribute(Rv):null;return e&&t}function I5(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(we.replacementClass)}function N5(){return we.autoReplaceSvg===!0?ld.replace:ld[we.autoReplaceSvg]||ld.replace}function x5(n){return _t.createElementNS("http://www.w3.org/2000/svg",n)}function O5(n){return _t.createElement(n)}function oI(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:t=n.tag==="svg"?x5:O5}=e;if(typeof n=="string")return _t.createTextNode(n);const i=t(n.tag);return Object.keys(n.attributes||[]).forEach(function(l){i.setAttribute(l,n.attributes[l])}),(n.children||[]).forEach(function(l){i.appendChild(oI(l,{ceFn:t}))}),i}function k5(n){let e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const ld={replace:function(n){const e=n[0];if(e.parentNode)if(n[1].forEach(t=>{e.parentNode.insertBefore(oI(t),e)}),e.getAttribute(vo)===null&&we.keepOriginalSource){let t=_t.createComment(k5(e));e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(n){const e=n[0],t=n[1];if(~Nv(e).indexOf(we.replacementClass))return ld.replace(n);const i=new RegExp("".concat(we.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){const l=t[0].attributes.class.split(" ").reduce((u,d)=>(d===we.replacementClass||d.match(i)?u.toSvg.push(d):u.toNode.push(d),u),{toNode:[],toSvg:[]});t[0].attributes.class=l.toSvg.join(" "),l.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",l.toNode.join(" "))}const a=t.map(l=>dh(l)).join(`
`);e.setAttribute(vo,""),e.innerHTML=a}};function AA(n){n()}function lI(n,e){const t=typeof e=="function"?e:od;if(n.length===0)t();else{let i=AA;we.mutateApproach===M3&&(i=da.requestAnimationFrame||AA),i(()=>{const a=N5(),l=Pv.begin("mutate");n.map(a),l(),t()})}}let Mv=!1;function cI(){Mv=!0}function J_(){Mv=!1}let Bd=null;function wA(n){if(!hA||!we.observeMutations)return;const{treeCallback:e=od,nodeCallback:t=od,pseudoElementsCallback:i=od,observeMutationsRoot:a=_t}=n;Bd=new hA(l=>{if(Mv)return;const u=pa();Jl(l).forEach(d=>{if(d.type==="childList"&&d.addedNodes.length>0&&!bA(d.addedNodes[0])&&(we.searchPseudoElements&&i(d.target),e(d.target)),d.type==="attributes"&&d.target.parentNode&&we.searchPseudoElements&&i(d.target.parentNode),d.type==="attributes"&&bA(d.target)&&~F3.indexOf(d.attributeName))if(d.attributeName==="class"&&R5(d.target)){const{prefix:p,iconName:m}=Tp(Nv(d.target));d.target.setAttribute(Cv,p||u),m&&d.target.setAttribute(Rv,m)}else I5(d.target)&&t(d.target)})}),lr&&Bd.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function D5(){Bd&&Bd.disconnect()}function P5(n){const e=n.getAttribute("style");let t=[];return e&&(t=e.split(";").reduce((i,a)=>{const l=a.split(":"),u=l[0],d=l.slice(1);return u&&d.length>0&&(i[u]=d.join(":").trim()),i},{})),t}function M5(n){const e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),i=n.innerText!==void 0?n.innerText.trim():"";let a=Tp(Nv(n));return a.prefix||(a.prefix=pa()),e&&t&&(a.prefix=e,a.iconName=t),a.iconName&&a.prefix||(a.prefix&&i.length>0&&(a.iconName=a5(a.prefix,n.innerText)||kv(a.prefix,W_(n.innerText))),!a.iconName&&we.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=n.firstChild.data)),a}function L5(n){const e=Jl(n.attributes).reduce((a,l)=>(a.name!=="class"&&a.name!=="style"&&(a[l.name]=l.value),a),{}),t=n.getAttribute("title"),i=n.getAttribute("data-fa-title-id");return we.autoA11y&&(t?e["aria-labelledby"]="".concat(we.replacementClass,"-title-").concat(i||Ku()):(e["aria-hidden"]="true",e.focusable="false")),e}function U5(){return{iconName:null,title:null,titleId:null,prefix:null,transform:cs,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function CA(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:t,prefix:i,rest:a}=M5(n),l=L5(n),u=$_("parseNodeAttributes",{},n);let d=e.styleParser?P5(n):[];return ue({iconName:t,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:i,transform:cs,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:d,attributes:l}},u)}const{styles:V5}=us;function uI(n){const e=we.autoReplaceSvg==="nest"?CA(n,{styleParser:!1}):CA(n);return~e.extra.classes.indexOf(qR)?ma("generateLayersText",n,e):ma("generateSvgReplacementMutation",n,e)}function j5(){return[...v3,...B_]}function RA(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!lr)return Promise.resolve();const t=_t.documentElement.classList,i=v=>t.add("".concat(pA,"-").concat(v)),a=v=>t.remove("".concat(pA,"-").concat(v)),l=we.autoFetchSvg?j5():UR.concat(Object.keys(V5));l.includes("fa")||l.push("fa");const u=[".".concat(qR,":not([").concat(vo,"])")].concat(l.map(v=>".".concat(v,":not([").concat(vo,"])"))).join(", ");if(u.length===0)return Promise.resolve();let d=[];try{d=Jl(n.querySelectorAll(u))}catch{}if(d.length>0)i("pending"),a("complete");else return Promise.resolve();const p=Pv.begin("onTree"),m=d.reduce((v,S)=>{try{const b=uI(S);b&&v.push(b)}catch(b){zR||b.name==="MissingIcon"&&console.error(b)}return v},[]);return new Promise((v,S)=>{Promise.all(m).then(b=>{lI(b,()=>{i("active"),i("complete"),a("pending"),typeof e=="function"&&e(),p(),v()})}).catch(b=>{p(),S(b)})})}function B5(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;uI(n).then(t=>{t&&lI([t],e)})}function F5(n){return function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(e||{}).icon?e:Y_(e||{});let{mask:a}=t;return a&&(a=(a||{}).icon?a:Y_(a||{})),n(i,ue(ue({},t),{},{mask:a}))}}const z5=function(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=cs,symbol:i=!1,mask:a=null,maskId:l=null,title:u=null,titleId:d=null,classes:p=[],attributes:m={},styles:v={}}=e;if(!n)return;const{prefix:S,iconName:b,icon:k}=n;return Sp(ue({type:"icon"},n),()=>(Eo("beforeDOMElementCreation",{iconDefinition:n,params:e}),we.autoA11y&&(u?m["aria-labelledby"]="".concat(we.replacementClass,"-title-").concat(d||Ku()):(m["aria-hidden"]="true",m.focusable="false")),Dv({icons:{main:Q_(k),mask:a?Q_(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:b,transform:ue(ue({},cs),t),symbol:i,title:u,maskId:l,titleId:d,extra:{attributes:m,styles:v,classes:p}})))};var H5={mixout(){return{icon:F5(z5)}},hooks(){return{mutationObserverCallbacks(n){return n.treeCallback=RA,n.nodeCallback=B5,n}}},provides(n){n.i2svg=function(e){const{node:t=_t,callback:i=()=>{}}=e;return RA(t,i)},n.generateSvgReplacementMutation=function(e,t){const{iconName:i,title:a,titleId:l,prefix:u,transform:d,symbol:p,mask:m,maskId:v,extra:S}=t;return new Promise((b,k)=>{Promise.all([X_(i,u),m.iconName?X_(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(M=>{let[W,V]=M;b([e,Dv({icons:{main:W,mask:V},prefix:u,iconName:i,transform:d,symbol:p,maskId:v,title:a,titleId:l,extra:S,watchable:!0})])}).catch(k)})},n.generateAbstractIcon=function(e){let{children:t,attributes:i,main:a,transform:l,styles:u}=e;const d=vp(u);d.length>0&&(i.style=d);let p;return xv(l)&&(p=ma("generateAbstractTransformGrouping",{main:a,transform:l,containerWidth:a.width,iconWidth:a.width})),t.push(p||a.icon),{children:t,attributes:i}}}},q5={mixout(){return{layer(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:t=[]}=e;return Sp({type:"layer"},()=>{Eo("beforeDOMElementCreation",{assembler:n,params:e});let i=[];return n(a=>{Array.isArray(a)?a.map(l=>{i=i.concat(l.abstract)}):i=i.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(we.cssPrefix,"-layers"),...t].join(" ")},children:i}]})}}}},G5={mixout(){return{counter(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:t=null,classes:i=[],attributes:a={},styles:l={}}=e;return Sp({type:"counter",content:n},()=>(Eo("beforeDOMElementCreation",{content:n,params:e}),b5({content:n.toString(),title:t,extra:{attributes:a,styles:l,classes:["".concat(we.cssPrefix,"-layers-counter"),...i]}})))}}}},W5={mixout(){return{text(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=cs,title:i=null,classes:a=[],attributes:l={},styles:u={}}=e;return Sp({type:"text",content:n},()=>(Eo("beforeDOMElementCreation",{content:n,params:e}),TA({content:n,transform:ue(ue({},cs),t),title:i,extra:{attributes:l,styles:u,classes:["".concat(we.cssPrefix,"-layers-text"),...a]}})))}}},provides(n){n.generateLayersText=function(e,t){const{title:i,transform:a,extra:l}=t;let u=null,d=null;if(MR){const p=parseInt(getComputedStyle(e).fontSize,10),m=e.getBoundingClientRect();u=m.width/p,d=m.height/p}return we.autoA11y&&!i&&(l.attributes["aria-hidden"]="true"),Promise.resolve([e,TA({content:e.innerHTML,width:u,height:d,transform:a,title:i,extra:l,watchable:!0})])}}};const K5=new RegExp('"',"ug"),IA=[1105920,1112319],NA=ue(ue(ue(ue({},{FontAwesome:{normal:"fas",400:"fas"}}),g3),D3),C3),ey=Object.keys(NA).reduce((n,e)=>(n[e.toLowerCase()]=NA[e],n),{}),$5=Object.keys(ey).reduce((n,e)=>{const t=ey[e];return n[e]=t[900]||[...Object.entries(t)][0][1],n},{});function Y5(n){const e=n.replace(K5,""),t=t5(e,0),i=t>=IA[0]&&t<=IA[1],a=e.length===2?e[0]===e[1]:!1;return{value:W_(a?e[0]:e),isSecondary:i||a}}function Q5(n,e){const t=n.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),a=isNaN(i)?"normal":i;return(ey[t]||{})[a]||$5[t]}function xA(n,e){const t="".concat(P3).concat(e.replace(":","-"));return new Promise((i,a)=>{if(n.getAttribute(t)!==null)return i();const u=Jl(n.children).filter(b=>b.getAttribute(z_)===e)[0],d=da.getComputedStyle(n,e),p=d.getPropertyValue("font-family"),m=p.match(j3),v=d.getPropertyValue("font-weight"),S=d.getPropertyValue("content");if(u&&!m)return n.removeChild(u),i();if(m&&S!=="none"&&S!==""){const b=d.getPropertyValue("content");let k=Q5(p,v);const{value:M,isSecondary:W}=Y5(b),V=m[0].startsWith("FontAwesome");let F=kv(k,M),B=F;if(V){const K=o5(M);K.iconName&&K.prefix&&(F=K.iconName,k=K.prefix)}if(F&&!W&&(!u||u.getAttribute(Cv)!==k||u.getAttribute(Rv)!==B)){n.setAttribute(t,B),u&&n.removeChild(u);const K=U5(),{extra:z}=K;z.attributes[z_]=e,X_(F,k).then(re=>{const ge=Dv(ue(ue({},K),{},{icons:{main:re,mask:sI()},prefix:k,iconName:B,extra:z,watchable:!0})),P=_t.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?n.insertBefore(P,n.firstChild):n.appendChild(P),P.outerHTML=ge.map(R=>dh(R)).join(`
`),n.removeAttribute(t),i()}).catch(a)}else i()}else i()})}function X5(n){return Promise.all([xA(n,"::before"),xA(n,"::after")])}function Z5(n){return n.parentNode!==document.head&&!~L3.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(z_)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function OA(n){if(lr)return new Promise((e,t)=>{const i=Jl(n.querySelectorAll("*")).filter(Z5).map(X5),a=Pv.begin("searchPseudoElements");cI(),Promise.all(i).then(()=>{a(),J_(),e()}).catch(()=>{a(),J_(),t()})})}var J5={hooks(){return{mutationObserverCallbacks(n){return n.pseudoElementsCallback=OA,n}}},provides(n){n.pseudoElements2svg=function(e){const{node:t=_t}=e;we.searchPseudoElements&&OA(t)}}};let kA=!1;var eB={mixout(){return{dom:{unwatch(){cI(),kA=!0}}}},hooks(){return{bootstrap(){wA($_("mutationObserverCallbacks",{}))},noAuto(){D5()},watch(n){const{observeMutationsRoot:e}=n;kA?J_():wA($_("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const DA=n=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce((t,i)=>{const a=i.toLowerCase().split("-"),l=a[0];let u=a.slice(1).join("-");if(l&&u==="h")return t.flipX=!0,t;if(l&&u==="v")return t.flipY=!0,t;if(u=parseFloat(u),isNaN(u))return t;switch(l){case"grow":t.size=t.size+u;break;case"shrink":t.size=t.size-u;break;case"left":t.x=t.x-u;break;case"right":t.x=t.x+u;break;case"up":t.y=t.y-u;break;case"down":t.y=t.y+u;break;case"rotate":t.rotate=t.rotate+u;break}return t},e)};var tB={mixout(){return{parse:{transform:n=>DA(n)}}},hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-transform");return t&&(n.transform=DA(t)),n}}},provides(n){n.generateAbstractTransformGrouping=function(e){let{main:t,transform:i,containerWidth:a,iconWidth:l}=e;const u={transform:"translate(".concat(a/2," 256)")},d="translate(".concat(i.x*32,", ").concat(i.y*32,") "),p="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),m="rotate(".concat(i.rotate," 0 0)"),v={transform:"".concat(d," ").concat(p," ").concat(m)},S={transform:"translate(".concat(l/2*-1," -256)")},b={outer:u,inner:v,path:S};return{tag:"g",attributes:ue({},b.outer),children:[{tag:"g",attributes:ue({},b.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:ue(ue({},t.icon.attributes),b.path)}]}]}}}};const Zg={x:0,y:0,width:"100%",height:"100%"};function PA(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function nB(n){return n.tag==="g"?n.children:[n]}var iB={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-mask"),i=t?Tp(t.split(" ").map(a=>a.trim())):sI();return i.prefix||(i.prefix=pa()),n.mask=i,n.maskId=e.getAttribute("data-fa-mask-id"),n}}},provides(n){n.generateAbstractMask=function(e){let{children:t,attributes:i,main:a,mask:l,maskId:u,transform:d}=e;const{width:p,icon:m}=a,{width:v,icon:S}=l,b=Y3({transform:d,containerWidth:v,iconWidth:p}),k={tag:"rect",attributes:ue(ue({},Zg),{},{fill:"white"})},M=m.children?{children:m.children.map(PA)}:{},W={tag:"g",attributes:ue({},b.inner),children:[PA(ue({tag:m.tag,attributes:ue(ue({},m.attributes),b.path)},M))]},V={tag:"g",attributes:ue({},b.outer),children:[W]},F="mask-".concat(u||Ku()),B="clip-".concat(u||Ku()),K={tag:"mask",attributes:ue(ue({},Zg),{},{id:F,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,V]},z={tag:"defs",children:[{tag:"clipPath",attributes:{id:B},children:nB(S)},K]};return t.push(z,{tag:"rect",attributes:ue({fill:"currentColor","clip-path":"url(#".concat(B,")"),mask:"url(#".concat(F,")")},Zg)}),{children:t,attributes:i}}}},sB={provides(n){let e=!1;da.matchMedia&&(e=da.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){const t=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:ue(ue({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const l=ue(ue({},a),{},{attributeName:"opacity"}),u={tag:"circle",attributes:ue(ue({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||u.children.push({tag:"animate",attributes:ue(ue({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:ue(ue({},l),{},{values:"1;0;1;1;0;1;"})}),t.push(u),t.push({tag:"path",attributes:ue(ue({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:ue(ue({},l),{},{values:"1;0;0;0;0;1;"})}]}),e||t.push({tag:"path",attributes:ue(ue({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:ue(ue({},l),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},rB={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-symbol"),i=t===null?!1:t===""?!0:t;return n.symbol=i,n}}}},aB=[Z3,H5,q5,G5,W5,J5,eB,tB,iB,sB,rB];g5(aB,{mixoutsTo:si});si.noAuto;si.config;si.library;si.dom;si.parse;si.findIconDefinition;si.toHtml;si.icon;si.layer;si.text;si.counter;const oB=({showPersonalInformation:n,setShowPersonalInformation:e,accInformation:t,user:i,setLoading:a})=>{const l=Z.useRef(),[u,d]=Z.useState(),[p,m]=Z.useState(),[v,S]=Z.useState(),[b,k]=Z.useState(),[M,W]=Z.useState(),[V,F]=Z.useState(),[B,K]=Z.useState(),[z,re]=Z.useState(),[ge,P]=Z.useState(),[R,I]=Z.useState(),[N,D]=Z.useState(),[L,x]=Z.useState([]),[je,qe]=Z.useState(!1),[ce,Se]=Z.useState(!1),[he,be]=Z.useState([]),[A,J]=Z.useState([]);function ve(){var Q;((Q=l.current)==null?void 0:Q.value)!=""&&be(oe=>{var ne;return[...oe,(ne=l.current)==null?void 0:ne.value]})}const fe=async()=>{a(!0);try{await uh(ji(Bi,"Users",i==null?void 0:i.uid),{perInfo:{school:p,name:u,grSec:z,age:b,bDay:M,gender:V,hobbies:B,placeOfBirth:v,purpose:ge},usingAs:R,favSubjects:L,description:N,contacts:A,skills:he})}catch(Q){console.log(Q)}a(!1)};return Z.useEffect(()=>{var Q,oe,ne,xe,ye,pe,Re,wt,Xt;t&&(d((Q=t.perInfo)==null?void 0:Q.name),m((oe=t.perInfo)==null?void 0:oe.school),S((ne=t.perInfo)==null?void 0:ne.placeOfBirth),k((xe=t.perInfo)==null?void 0:xe.age),W((ye=t.perInfo)==null?void 0:ye.bDay),F((pe=t.perInfo)==null?void 0:pe.gender),K((Re=t.perInfo)==null?void 0:Re.hobbies),re((wt=t.perInfo)==null?void 0:wt.grSec),I(t==null?void 0:t.usingAs),P((Xt=t==null?void 0:t.perInfo)==null?void 0:Xt.purpose),D(t==null?void 0:t.description),J(t!=null&&t.contacts?t==null?void 0:t.contacts:[]),be(t!=null&&t.skills?t==null?void 0:t.skills:[]))},[t]),y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:n?Gs.Account_Information_Wrapper:Gs.Hide_Account_Information_Wrapper,children:[y.jsxs("nav",{className:Gs.navBar,children:[y.jsx("h1",{children:"PERSONAL INFORMATIONS"}),y.jsx(y6,{editAccount:je,setEditAccount:Q=>qe(Q),saveAccountChanges:()=>fe(),setShowPersonalInformation:Q=>e(Q),setShowChanges:Q=>Se(Q)})]}),y.jsxs("div",{className:Gs.Account_Information_Box,children:[y.jsxs("div",{className:Gs.left,children:[y.jsx(x6,{editAccount:je,setEditAccount:Q=>{qe(Q)},user:i,accInformation:t,setLoading:Q=>a(Q)}),y.jsx(j6,{skills:he,setSkills:Q=>{be(Q)},addSkill:()=>{ve()},skillRef:l,editAccount:je,setEditAccount:Q=>{qe(Q)},setLoading:Q=>a(Q)}),y.jsx(D6,{contacts:A,setContacts:Q=>J(Q),editAccount:je})]}),y.jsxs("div",{className:Gs.right,children:[y.jsx("div",{className:Gs.top,children:y.jsx(H6,{editAccount:je,accInformation:t,uName:u,setUName:Q=>{d(Q)},school:p,setSchool:Q=>{m(Q)},pBirth:v,setPBirth:Q=>{S(Q)},age:b,setAge:Q=>{k(Q)},bDay:M,setBDay:Q=>{W(Q)},gender:V,setGender:Q=>{F(Q)},hobbies:B,setHobbies:Q=>{K(Q)},grSec:z,setGrSec:Q=>{re(Q)},usingAs:R,setUsingAs:Q=>{I(Q)}})}),y.jsx("div",{className:Gs.mid,children:y.jsx(Z6,{accInformation:t,editAccount:je,setFavSubjects:Q=>{x(Q)},usingAs:R,setUsingAs:Q=>{I(Q)},purpose:ge,setPurpose:Q=>{P(Q)}})}),y.jsx("div",{className:Gs.bottom,children:y.jsx(t3,{editAccount:je,desc:N,setDesc:Q=>{D(Q)}})})]})]})]}),y.jsx(a3,{editAccount:je,setEditAccount:Q=>qe(Q),setShowPersonalInfo:Q=>e(Q),saveAccountChanges:()=>fe(),showChanges:ce,setShowChanges:Q=>Se(Q)})]})},Ws={},lB=({page:n,accountInformation:e})=>{const[t,i]=Z.useState(!1),[a,l]=Z.useState(),[u,d]=Z.useState(""),[p,m]=Z.useState(e==null?void 0:e.folders),[v,S]=Z.useState([]);function b(W){m(V=>V==null?void 0:V.map((F,B)=>W==B?{...F,isChecked:!F.isChecked}:{...F}))}const k=({isChecked:W,pos:V,name:F})=>y.jsxs("li",{children:[y.jsx("input",{type:"text",checked:!!W,onChange:()=>{b(V)}}),a?y.jsx("input",{type:"text",value:F,onChange:B=>{d(B.target.value)}}):y.jsx("p",{onDoubleClick:()=>{d(F)},children:F})]}),M=()=>{const W=()=>v?y.jsx(me,{icon:y.jsx("i",{className:"fa fa-hand-o-up"})}):y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:Ws.leftOptions,children:[y.jsx(me,{element:y.jsx("span",{children:" Select All"}),icon:y.jsx("i",{className:"fa fa-check"}),className:Ws.SelectAllButton,func:()=>{}}),y.jsx(me,{element:y.jsx("span",{children:" Unselect All"}),icon:y.jsx("i",{className:`fas fa fa-check ${Ws.Unchecked}`}),className:Ws.UnselectAllButton,func:()=>{}})]}),y.jsx("div",{className:Ws.rightOptions})]});return y.jsx("div",{className:Ws.Options,children:y.jsx(W,{})})};return y.jsx(y.Fragment,{children:y.jsx("div",{className:n===3,children:y.jsxs("div",{className:Ws.Folder_Box,children:[y.jsxs("nav",{className:Ws.Folders_Nav,children:[y.jsx("h1",{children:"Folders"}),y.jsx(me,{icon:y.jsx("i",{className:"fa fa-plus"})})]}),y.jsx(M,{}),y.jsx("div",{className:Ws.Folders,children:p==null?void 0:p.map((W,V)=>y.jsx(k,{isChecked:p==null?void 0:p.isChecked,pos:V,content:W==null?void 0:W.name}))})]})})})},cB="_Continue_As_Wrapper_n7qjc_5",uB="_Continue_As_Box_n7qjc_47",hB="_Top_n7qjc_75",fB="_Options_n7qjc_135",Qf={Continue_As_Wrapper:cB,Continue_As_Box:uB,Top:hB,Options:fB},dB=({continueAs:n,setContinueAs:e,user:t,setUser:i,setLoading:a})=>{const[l,u]=Z.useState(null),d=async()=>{a(!0);try{await Tw(In),i(null),a(!1),e(!1)}catch(m){a(!1),e(!1),console.log(m)}},p=async()=>{if((t==null?void 0:t.uid)!=null)try{const m=ji(Bi,"Users",t==null?void 0:t.uid),v=await Vd(m);v.exists&&u(v.data().perInfo)}catch(m){console.log(m)}};if(Z.useEffect(()=>{t!=null&&p()},[n,t]),n)return y.jsx("div",{className:Qf.Continue_As_Wrapper,children:y.jsxs("div",{className:Qf.Continue_As_Box,children:[y.jsxs("div",{className:Qf.Top,children:[y.jsx("i",{className:"fa fa-user"}),y.jsx("h3",{children:"Continue As: "}),y.jsxs("h3",{children:[l==null?void 0:l.name," ?"]})]}),y.jsxs("div",{className:Qf.Options,children:[y.jsx(me,{content:"No",func:()=>{d()}}),y.jsx(me,{content:"Yes",func:()=>{e(!1)}})]})]})})},pB="_sign_up_container_1bwio_19",mB="_goToStartingPage_1bwio_41",gB="_top_arc_1bwio_65",_B="_form_1bwio_91",yB="_username_con_1bwio_105",vB="_password_con_1bwio_107",EB="_more_actions_1bwio_121",TB="_sign_in_button_1bwio_233",SB="_other_platforms_container_1bwio_265",bB="_icon_wrapper_1bwio_287",AB="_wrapper_1bwio_299",pn={sign_up_container:pB,goToStartingPage:mB,top_arc:gB,form:_B,username_con:yB,password_con:vB,more_actions:EB,sign_in_button:TB,other_platforms_container:SB,icon_wrapper:bB,wrapper:AB};function wB({setPage:n,setUser:e,showSignInPrompt:t,setShowSignInPrompt:i,setShowSignUpPrompt:a,setLoading:l,setContinueAs:u,getAccountInformation:d}){const[p,m]=Z.useState(!1),v=Z.useRef(null),S=Z.useRef(null),b=Z.useRef(null),k=Z.useRef(null),M=()=>{const z=b==null?void 0:b.current.value,re=k==null?void 0:k.current.value,ge=v.current,P=S.current;return{email:z,pass:re,warning1:ge,warning2:P}},W=()=>{const z=M();z.email&&(z.email=""),z.pass&&(z.pass=""),z.warning1.innerText="",z.warning2.innerText=""},V=z=>{const re=M();return(z==null?void 0:z.target.value)==""||re.email==""?v.current.textContent="The input field is blank!":v.current.textContent="",!1},F=z=>{const re=M();return(z==null?void 0:z.target.value)==""||re.pass==""?S.current.textContent="The input field is blank!":S.current.textContent="",!1},B=async()=>{V(),F();{l(!0);try{await Yk(In,b.current.value,k.current.value),W(),e(In.currentUser),i(!1),u(!0),d()}catch(z){console.log(z.code),z.code=="auth/invalid-email"&&(v.current.textContent="Invalid email/Email doesn't exist."),z.code=="auth/invalid-credential"&&(S.current.textContent="Password does not match."),z.code=="auth/network-request-failed"&&alert("Network Error, unable to sign in. Please try again.")}l(!1)}},K=async()=>{var re;const z=new Ks;l(!0);try{await yD(In,z),W(),e(In.currentUser);const ge=ji(Bi,"Users",(re=In.currentUser)==null?void 0:re.uid);(await Vd(ge)).exists()?i(!1):a(!0),u(!0),d()}catch(ge){console.log(ge)}l(!1)};if(t==!0)return y.jsx(y.Fragment,{children:y.jsxs("div",{className:pn.sign_up_container,children:[y.jsx(me,{func:()=>{i(!1),W(),n(1)},content:"X",className:pn.goToStartingPage}),y.jsx("div",{className:pn.top_arc,children:"SIGN IN"}),y.jsxs("div",{className:pn.form,children:[y.jsxs("div",{className:pn.username_con,children:[y.jsx("h3",{children:"Username :"}),y.jsx("input",{className:"emailInput",ref:b,onInput:z=>{V(z)}}),y.jsx("span",{ref:v})]}),y.jsxs("div",{className:pn.password_con,children:[y.jsx("h3",{children:"Password :"}),y.jsx("input",{type:p?"text":"password",ref:k,onInput:z=>{F(z)},className:pn.Password}),y.jsx("span",{ref:S}),y.jsx("img",{src:p?"./password/visible.png":"./password/unsee.png",className:pn.see_password,onClick:()=>{m(!p)}})]}),y.jsxs("div",{className:pn.more_actions,children:[y.jsx("span",{className:pn.forgot_pass,children:"Forgot Password"}),y.jsx("span",{className:pn.create_acc,onClick:()=>{i(!1),a(!0)},children:"Doesn't Have An Account?"})]}),y.jsx(me,{className:pn.sign_in_button,func:()=>{B()},content:"SIGN IN"})]}),y.jsxs("div",{className:pn.other_platforms_container,children:[y.jsxs("div",{className:pn.icon_wrapper,children:[y.jsx("div",{className:pn.wrapper,onClick:()=>{K()},children:y.jsx("img",{src:"./platforms/GG.png "})}),y.jsx("div",{className:pn.wrapper,children:y.jsx("img",{src:"./platforms/facebook.png"})}),y.jsx("div",{className:pn.wrapper,children:y.jsx("img",{src:"./platforms/Instagram.png"})})]}),y.jsx("h3",{children:"SIGN IN WITH DIFFERENT PLATFORMS"})]})]})})}const CB="_hide_1xp6t_1",RB="_inputs_1_1xp6t_7",eo={hide:CB,inputs_1:RB},IB=({show:n,indicated:e,showConfirm:t,setShow:i,setShowConfirm:a,passwordInput:l,confirmPasswordInput:u,emailInput:d,passWarning:p,confirmWarning:m,emailWarning:v})=>y.jsxs("div",{className:e==0?eo.inputs_1:eo.hide,children:[y.jsxs("div",{className:eo.email,children:[y.jsx("h4",{children:"Email"}),y.jsx("input",{type:"text",ref:d}),y.jsx("span",{ref:v})]}),y.jsxs("div",{className:eo.password,children:[y.jsx("h4",{children:"Password"}),y.jsx("input",{type:n?"text":"password",ref:l}),y.jsx("img",{src:n?"./password/visible.png":"./password/unsee.png",className:eo.see_password,onClick:()=>{i(!n)}}),y.jsx("span",{ref:p})]}),y.jsxs("div",{className:eo.confirm,children:[y.jsx("h4",{children:"Confirm Password"}),y.jsx("input",{type:t?"text":"password",ref:u}),y.jsx("img",{src:t?"./password/visible.png":"./password/unsee.png",className:eo.see_confirm,onClick:()=>{a(!t)}}),y.jsx("span",{ref:m})]})]}),NB="_hide_d4ubt_1",xB="_inputs_2_d4ubt_11",OB="_top_d4ubt_31",kB="_notIndicated_d4ubt_81",DB="_indicated_d4ubt_91",du={hide:NB,inputs_2:xB,top:OB,notIndicated:kB,indicated:DB},PB=({indicated:n,usingAsInput:e,usageOptions:t,handleUsageOptions:i})=>y.jsxs("div",{className:n==1?du.inputs_2:du.hide,children:[y.jsx("h3",{children:"I am using the Web Application as?"}),y.jsx("div",{children:y.jsxs("div",{className:du.top,children:[t.map((a,l)=>y.jsx(me,{content:a.content,className:a.isIndicated?du.indicated:du.notIndicated,func:()=>{i(l)}},a.content)),y.jsx("h3",{children:"What is your purpose?"}),y.jsx("textarea",{type:"text",placeholder:"Other reason...",ref:e})]})})]}),MB="_hide_1650p_1",LB="_inputs_3_1650p_9",pu={hide:MB,inputs_3:LB},UB=({indicated:n,nickNameInput:e,schoolInput:t,grSecInput:i,nameWarning:a,schoolWarning:l,grSecWarning:u})=>y.jsxs("div",{className:n==2?pu.inputs_3:pu.hide,children:[y.jsxs("div",{className:pu.username,children:[y.jsx("h4",{children:"Name"}),y.jsx("input",{type:"text",ref:e}),y.jsx("span",{ref:a})]}),y.jsxs("div",{className:pu.password,children:[y.jsx("h4",{children:"School"}),y.jsx("input",{type:"text",ref:t}),y.jsx("span",{ref:l})]}),y.jsxs("div",{className:pu.confirm,children:[y.jsx("h4",{children:"Grade & Section"}),y.jsx("input",{type:"text",ref:i}),y.jsx("span",{ref:u})]})]}),VB="_hide_j48mp_15",jB="_inputs_4_j48mp_23",BB="_wrapper_j48mp_85",FB="_IndicatedButt_j48mp_125",zB="_notIndicatedButt_j48mp_145",ml={hide:VB,inputs_4:jB,wrapper:BB,IndicatedButt:FB,notIndicatedButt:zB},HB=({indicated:n,subjects:e,handleSubjects:t})=>{if(e!=null)return y.jsx("div",{className:n==3?ml.inputs_4:ml.hide,children:y.jsxs("div",{className:ml.wrapper,children:[y.jsx("h4",{children:"What is your favorite subject?"}),y.jsx("div",{className:ml.buttons,children:e.map((i,a)=>y.jsx(me,{func:()=>{t(a)},className:i.testClass==!0?ml.IndicatedButt:ml.notIndicatedButt,content:e[a].content},i+a.toString()))})]})})},qB="_sign_up_wrapper_6gch2_23",GB="_form_1_6gch2_53",WB="_to_bottom_6gch2_75",KB="_bottom_6gch2_113",$B="_buttons_6gch2_125",YB="_indicator_6gch2_169",QB="_indicated_6gch2_197",XB="_not_indicated_6gch2_205",ZB="_goToStartingPage_6gch2_259",bn={sign_up_wrapper:qB,form_1:GB,to_bottom:WB,bottom:KB,buttons:$B,indicator:YB,indicated:QB,not_indicated:XB,goToStartingPage:ZB},JB=({setShowSignInPrompt:n,showSignUpPrompt:e,setShowSignUpPrompt:t,setLoading:i,setContinueAs:a,setUser:l,setPage:u})=>{Z.useRef(null),Z.useRef(null);const d=Z.useRef(null),p=Z.useRef(null),m=Z.useRef(null),v=Z.useRef(null),S=Z.useRef(null),b=Z.useRef(null),k=Z.useRef(null),M=Z.useRef(null),W=Z.useRef(null),V=Z.useRef(null),F=Z.useRef(null),B=Z.useRef(null),K=Z.useRef(null),[z,re]=Z.useState(!1),[ge,P]=Z.useState(!1),[R,I]=Z.useState(0),[N,D]=Z.useState([]),[L,x]=Z.useState([]),[je,qe]=Z.useState([{content:"As a Student",isIndicated:!1},{content:"As a Teacher",isIndicated:!1},{content:"As a Employee",isIndicated:!1},{content:"I Am Just Using It.",isIndicated:!1}]),[ce,Se]=Z.useState([{content:"TLE",testClass:!1},{content:"Mathematics",testClass:!1},{content:"Science",testClass:!1},{content:"English",testClass:!1},{content:"Colloquium",testClass:!1},{content:"Filipino",testClass:!1},{content:"Mapeh",testClass:!1},{content:"AP",testClass:!1},{content:"ESP",testClass:!1}]),he=()=>{var X,Ge,Dt,Ut,ys,ai;const oe=(X=m.current)==null?void 0:X.value,ne=(Ge=d.current)==null?void 0:Ge.value,xe=(Dt=S.current)==null?void 0:Dt.value,ye=(Ut=k.current)==null?void 0:Ut.value,pe=(ys=W.current)==null?void 0:ys.value,Re=(ai=F.current)==null?void 0:ai.value,wt=v.current,Xt=p.current,Zt=b.current,kn=M.current,ri=V.current,Fn=B.current;return[[oe,ne,xe,ye,pe,Re],[wt,Xt,Zt,kn,ri,Fn]]},be=async oe=>{var ye;const ne=he();let xe;if(R==0){if(xe=A(ne[0],ne[1],R),!xe){i(!0);try{await $k(In,ne[0][0],ne[0][1]),l(In.currentUser),await Zb(ji(Bi,"Users",(ye=In.currentUser)==null?void 0:ye.uid),{email:ne[0][0]}),I(R+1)}catch(pe){console.log(pe),pe.code=="auth/email-already-in-use"&&(ne[1][0].innerText="Email is already taken.")}i(!1)}}else R==1||R==2?xe=A(ne[0],ne[1],R):R==3&&oe=="Submit"&&fe(ne[0]);oe=="next"&&R!=3&&!xe?I(R+1):oe=="back"&&R!=1&&I(R-1)},A=(oe,ne,xe)=>{let ye=!1;for(let pe in oe)xe==0&&pe<3?(oe[pe]==""&&(ne[pe].innerText="The input field is blank.",ye=!0),pe==0?oe[pe].includes("@gmail.com")||oe[pe].includes("@email.com")?ne[pe].innerText="":(ne[pe].innerText="This is not an email!",ye=!0):pe==1?oe[pe].length<=7?(ne[pe].innerText="The password is too short(maximum of 8 characters).",ye=!0):ne[pe].innerText="":pe==2&&(oe[pe]!=oe[pe-1]?(ne[pe].innerText="The password isn't match.",ye=!0):ne[pe].innerText="")):xe==2&&pe>2&&(oe[pe]==""?(ne[pe].innerText="The input field is blank.",ye=!0):(ne[pe].innerText="",ye=!1));return!!ye},J=oe=>{let ne=je;for(let xe in ne)if(xe==oe){ne=ne[oe].content;break}D(ne),qe(xe=>xe.map((ye,pe)=>oe==pe?{...ye,isIndicated:!0}:{...ye,isIndicated:!1}))},ve=oe=>{let ne=ce,xe=[];ne=ne.map((ye,pe)=>oe==pe?{...ye,testClass:ye.testClass!=!0}:{...ye});for(let ye in ne)ne[ye].testClass==!0&&xe.push(ne[ye]);x([...xe]),Se(ye=>ye.map((pe,Re)=>oe==Re?{...pe,testClass:pe.testClass!=!0}:{...pe}))},fe=async oe=>{i(!0);try{const ne=In.currentUser;await Zb(ji(Bi,"Users",ne.uid),{favSubjects:L,usingAs:N,perInfo:{school:oe[4],name:oe[3],grSec:oe[5],age:"",bDay:"",gender:"",hobbies:"",placeOfBirth:"",skills:"",contacts:{gMail:"",number:"",faceBook:""},purpose:K==null?void 0:K.current.value}}),t(!1),Q(),a(!0)}catch(ne){console.log(ne.message)}i(!1)};function Q(){d.current.value="",p.current.value="",m.current.value="",v.current.value="",S.current.value="",b.current.value="",k.current.value="",M.current.value="",W.current.value="",V.current.value="",F.current.value="",B.current.value="",K.current.value="",Se(oe=>oe.map(ne=>({...ne,testClass:!1}))),qe(oe=>oe.map(ne=>({...ne,isIndicated:!1}))),D(null),x([]),I(0)}if(e==!0)return y.jsx(y.Fragment,{children:y.jsxs("div",{className:bn.sign_up_wrapper,children:[y.jsx(me,{func:()=>{t(!1),Q(),u(1)},content:"X",className:bn.goToStartingPage}),y.jsxs("form",{onSubmit:oe=>{oe.preventDefault()},className:bn.form_1,children:[y.jsx("header",{children:"SIGN UP"}),y.jsxs("div",{className:bn.to_bottom,children:[y.jsx(IB,{indicated:R,show:z,showConfirm:ge,setShowConfirm:oe=>{P(oe)},setShow:oe=>{re(oe)},passwordInput:d,confirmPasswordInput:S,emailInput:m,passWarning:p,confirmWarning:b,emailWarning:v}),y.jsx(PB,{indicated:R,usageOptions:je,setUsageOptions:oe=>{qe(oe)},handleUsageOptions:oe=>{J(oe)},usingAsInput:K}),y.jsx(UB,{indicated:R,schoolInput:W,schoolWarning:V,grSecInput:F,grSecWarning:B,nickNameInput:k,nameWarning:M}),y.jsx(HB,{indicated:R,subjects:ce,handleSubjects:oe=>{ve(oe)}}),y.jsxs("div",{className:bn.bottom,children:[y.jsxs("div",{className:bn.buttons,children:[y.jsx(me,{content:"BACK",func:()=>{be("back")}}),y.jsx(me,{content:R==3||R==0?"SUBMIT":"NEXT",func:()=>{R==3||R==0?be("Submit"):be("next")}})]}),y.jsxs("div",{className:bn.indicator,children:[y.jsx("div",{className:R==0?bn.indicated:bn.not_indicated}),y.jsx("div",{className:R==1?bn.indicated:bn.not_indicated}),y.jsx("div",{className:R==2?bn.indicated:bn.not_indicated}),y.jsx("div",{className:R==3?bn.indicated:bn.not_indicated})]}),y.jsxs("h4",{id:bn.SignUp,onClick:()=>{n(!0),t(!1),Q()},children:[" ",y.jsx("a",{children:"Already Have an Account?"})," "]})]})]})]})]})})},eF="_Signing_Out_Wrapper_dvflz_5",tF="_Hide_Signing_Out_Wrapper_dvflz_5",nF="_Signing_Out_Box_dvflz_47",iF="_Top_dvflz_75",sF="_Options_dvflz_137",mu={Signing_Out_Wrapper:eF,Hide_Signing_Out_Wrapper:tF,Signing_Out_Box:nF,Top:iF,Options:sF},rF=({isSigningOut:n,setIsSigningOut:e,setLoading:t,setUser:i})=>{const a=async()=>{t(!0);try{await Tw(In),i(null),t(!1),e(!1)}catch(l){t(!1),e(!1),console.log(l)}};if(n)return y.jsx("div",{className:n?mu.Signing_Out_Wrapper:mu.Hide_Signing_Out_Wrapper,children:y.jsxs("div",{className:mu.Signing_Out_Box,children:[y.jsxs("div",{className:mu.Top,children:[y.jsx("i",{className:"fa fa-user"}),y.jsx("h3",{children:"Would You Like To Sign Out?"})]}),y.jsxs("div",{className:mu.Options,children:[y.jsx(me,{content:"No",func:()=>{e(!1)}}),y.jsx(me,{content:"Yes",func:()=>{a()}})]})]})})},aF="_Make_User_Sign_In_Wrapper_27ajl_1",oF="_Hide_Make_User_Sign_In_Wrapper_27ajl_1",lF="_Make_User_Sign_In_Box_27ajl_43",cF="_Images_27ajl_93",uF="_Buttons_27ajl_161",hF="_Hide_Prompt_Button_27ajl_205",gl={Make_User_Sign_In_Wrapper:aF,Hide_Make_User_Sign_In_Wrapper:oF,Make_User_Sign_In_Box:lF,Images:cF,Buttons:uF,Hide_Prompt_Button:hF},fF=({showMakeUserSignIn:n,setShowMakeUserSignIn:e,setPage:t,setShowSignInPrompt:i,setShowSignUpPrompt:a,user:l})=>{function u(){e(!1),t(1);let d=window.location.href;d.toLowerCase();let p=d.search("/Acad/");d=d.slice(0,p+6).concat("#Home"),window.location.href=d}return y.jsx(y.Fragment,{children:y.jsx("div",{className:n&&!l?gl.Make_User_Sign_In_Wrapper:gl.Hide_Make_User_Sign_In_Wrapper,children:y.jsxs("div",{className:gl.Make_User_Sign_In_Box,children:[y.jsx(me,{icon:y.jsx("i",{className:"fa fa-close"}),className:gl.Hide_Prompt_Button,func:()=>{u()}}),y.jsxs("div",{className:gl.Images,children:[y.jsx("img",{src:"./cat.png"}),y.jsx("img",{src:"./!.png"})]}),y.jsx("h1",{children:"You're not Signed In !"}),y.jsx("p",{children:"Create an account, log in and get free access to the advanced To-Do List Web Application"}),y.jsxs("div",{className:gl.Buttons,children:[y.jsx(me,{content:"Sign Up",func:()=>{a(!0),e(!1)}}),y.jsx(me,{content:"Sign In",func:()=>{i(!0),e(!1)}})]})]})})})},dF="_Pages_1x53v_25",pF="_Hide_Pages_1x53v_31",MA={Pages:dF,Hide_Pages:pF};function mF(){const[n,e]=Z.useState(!0),[t,i]=Z.useState(!1),[a,l]=Z.useState(window.location.href),[u,d]=Z.useState(!1),[p,m]=Z.useState(!1),[v,S]=Z.useState(!1),[b,k]=Z.useState(!1),[M,W]=Z.useState(!1),[V,F]=Z.useState(!1),[B,K]=Z.useState(!1),[z,re]=Z.useState(!1),[ge,P]=Z.useState(1),[R,I]=Z.useState(0),[N,D]=Z.useState(null),[L,x]=Z.useState(null),[je,qe]=Z.useState([]),[ce,Se]=Z.useState(null),he=async()=>{if(N){const A=ji(Bi,"Users",N==null?void 0:N.uid);try{const J=await Vd(A);J.exists&&qe(J.data())}catch(J){console.log(J)}}},be=async()=>{try{const A=await Vd(ji(Bi,"Users",N==null?void 0:N.uid));A&&Se(A.data())}catch(A){console.log(A)}};return Zk(In,A=>{(A==null?void 0:A.uid)!=null?D(A):qe(null)}),Z.useEffect(()=>{N!=null&&N.uid&&(he(),be())},[N]),Z.useEffect(()=>{a&&(a.includes("#Home")?P(1):a.includes("#Tasks")?(console.log(a),(N==null?void 0:N.uid)!=null?(P(2),re(!1)):re(!0)):a.includes("#About")?P(3):a.includes("#Contacts")&&P(4)),N!=null&&N.uid&&be()},[N]),Z.useEffect(()=>{let A=window.location.href;A.toLowerCase();let J=A.search("/Acad/");switch(A=A.slice(0,J+6),ge){case 1:A=A.concat("#Home"),l(A),I(0);break;case 2:N?(A=A.concat("#Tasks"),l(A),I(1)):re(!0);break;case 3:A=A.concat("#Folders"),l(A),I(2);break;case 4:A=A.concat("#Contacts"),l(A),I(3);break}},[ge]),y.jsxs("div",{children:[y.jsx(Fj,{setPage:A=>{P(A)},page:ge,setIndicated:A=>{I(A)},indicated:R,editing:t,url:a,setUrl:A=>{l(A)},showSignInPrompt:u,setShowSignInPrompt:A=>{d(A)},showSignUpPrompt:p,setShowSignUpPrompt:A=>{m(A)},user:N,continueAs:b,setIsSigningOut:A=>{F(A)},setPaging:A=>{x(A)},showNavBar:n,setShowNavbar:A=>{e(A)},setShowSaveChanges:A=>{K(A)},setShowMakeUserSignIn:A=>re(A),getAccountInformation:()=>be(),showPersonalInformation:M,setShowPersonalInformation:A=>W(A)}),y.jsxs("div",{className:!u&&!p&&!M?MA.Pages:MA.Hide_Pages,children:[y.jsx(zj,{page:ge,setPage:A=>{P(A)},setIndicated:A=>{I(A)},indicated:R,user:N}),y.jsx(l6,{setPage:A=>P(A),page:ge,getTask:je,editing:t,setEditing:A=>{i(A)},user:N,setUser:A=>{D(A)},loading:v,setLoading:A=>S(A),paging:L,setPaging:A=>{x(A)},showNavBar:n,setShowNavbar:A=>{e(A)},showSaveChanges:B,setShowSaveChanges:A=>K(A)}),y.jsx(lB,{page:ge,accountInformation:ce})]}),y.jsx(oB,{showPersonalInformation:M,setShowPersonalInformation:A=>W(A),accInformation:ce,setAccInformation:Se,user:N,setLoading:A=>S(A)}),y.jsx(wB,{page:ge,setPage:A=>P(A),showSignInPrompt:u,setShowSignUpPrompt:A=>{m(A)},setShowSignInPrompt:A=>{d(A)},user:N,setUser:A=>{D(A)},setLoading:A=>S(A),setContinueAs:A=>k(A),loading:v,getAccountInformation:()=>be()}),y.jsx(JB,{page:ge,setPage:A=>P(A),showSignUpPrompt:p,setShowSignInPrompt:A=>{d(A)},setShowSignUpPrompt:A=>{m(A)},user:N,setUser:A=>{D(A)},setLoading:A=>S(A),setContinueAs:A=>k(A),loading:v}),y.jsx(o6,{loading:v}),y.jsx(dB,{continueAs:b,setContinueAs:A=>{k(A)},user:N,setUser:A=>D(A),setLoading:A=>S(A)}),y.jsx(rF,{isSigningOut:V,setIsSigningOut:A=>{F(A)},setLoading:A=>{S(A)},setUser:A=>{D(A)}}),y.jsx(fF,{showMakeUserSignIn:z,setShowMakeUserSignIn:A=>re(A),setPage:A=>P(A),setShowSignUpPrompt:A=>{m(A)},setShowSignInPrompt:A=>{d(A)},user:N==null?void 0:N.uid})]})}HN.createRoot(document.getElementById("root")).render(y.jsx(Z.StrictMode,{children:y.jsx(mF,{})}));
