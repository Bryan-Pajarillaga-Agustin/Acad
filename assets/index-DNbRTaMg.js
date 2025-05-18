(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var vg={exports:{}},nc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0;function PN(){if(L0)return nc;L0=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(i,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:n,type:i,key:c,ref:a!==void 0?a:null,props:l}}return nc.Fragment=e,nc.jsx=t,nc.jsxs=t,nc}var U0;function MN(){return U0||(U0=1,vg.exports=PN()),vg.exports}var v=MN(),Eg={exports:{}},Ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V0;function LN(){if(V0)return Ue;V0=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),S=Symbol.iterator;function A(b){return b===null||typeof b!="object"?null:(b=S&&b[S]||b["@@iterator"],typeof b=="function"?b:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,G={};function M(b,Z,ve){this.props=b,this.context=Z,this.refs=G,this.updater=ve||D}M.prototype.isReactComponent={},M.prototype.setState=function(b,Z){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,Z,"setState")},M.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function B(){}B.prototype=M.prototype;function H(b,Z,ve){this.props=b,this.context=Z,this.refs=G,this.updater=ve||D}var $=H.prototype=new B;$.constructor=H,V($,M.prototype),$.isPureReactComponent=!0;var F=Array.isArray,re={H:null,A:null,T:null,S:null},_e=Object.prototype.hasOwnProperty;function P(b,Z,ve,fe,Q,oe){return ve=oe.ref,{$$typeof:n,type:b,key:Z,ref:ve!==void 0?ve:null,props:oe}}function R(b,Z){return P(b.type,Z,void 0,void 0,void 0,b.props)}function I(b){return typeof b=="object"&&b!==null&&b.$$typeof===n}function N(b){var Z={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(ve){return Z[ve]})}var k=/\/+/g;function L(b,Z){return typeof b=="object"&&b!==null&&b.key!=null?N(""+b.key):Z.toString(36)}function x(){}function je(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(x,x):(b.status="pending",b.then(function(Z){b.status==="pending"&&(b.status="fulfilled",b.value=Z)},function(Z){b.status==="pending"&&(b.status="rejected",b.reason=Z)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function qe(b,Z,ve,fe,Q){var oe=typeof b;(oe==="undefined"||oe==="boolean")&&(b=null);var ne=!1;if(b===null)ne=!0;else switch(oe){case"bigint":case"string":case"number":ne=!0;break;case"object":switch(b.$$typeof){case n:case e:ne=!0;break;case y:return ne=b._init,qe(ne(b._payload),Z,ve,fe,Q)}}if(ne)return Q=Q(b),ne=fe===""?"."+L(b,0):fe,F(Q)?(ve="",ne!=null&&(ve=ne.replace(k,"$&/")+"/"),qe(Q,Z,ve,"",function(pe){return pe})):Q!=null&&(I(Q)&&(Q=R(Q,ve+(Q.key==null||b&&b.key===Q.key?"":(""+Q.key).replace(k,"$&/")+"/")+ne)),Z.push(Q)),1;ne=0;var xe=fe===""?".":fe+":";if(F(b))for(var ye=0;ye<b.length;ye++)fe=b[ye],oe=xe+L(fe,ye),ne+=qe(fe,Z,ve,oe,Q);else if(ye=A(b),typeof ye=="function")for(b=ye.call(b),ye=0;!(fe=b.next()).done;)fe=fe.value,oe=xe+L(fe,ye++),ne+=qe(fe,Z,ve,oe,Q);else if(oe==="object"){if(typeof b.then=="function")return qe(je(b),Z,ve,fe,Q);throw Z=String(b),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return ne}function ce(b,Z,ve){if(b==null)return b;var fe=[],Q=0;return qe(b,fe,"","",function(oe){return Z.call(ve,oe,Q++)}),fe}function Se(b){if(b._status===-1){var Z=b._result;Z=Z(),Z.then(function(ve){(b._status===0||b._status===-1)&&(b._status=1,b._result=ve)},function(ve){(b._status===0||b._status===-1)&&(b._status=2,b._result=ve)}),b._status===-1&&(b._status=0,b._result=Z)}if(b._status===1)return b._result.default;throw b._result}var he=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)};function be(){}return Ue.Children={map:ce,forEach:function(b,Z,ve){ce(b,function(){Z.apply(this,arguments)},ve)},count:function(b){var Z=0;return ce(b,function(){Z++}),Z},toArray:function(b){return ce(b,function(Z){return Z})||[]},only:function(b){if(!I(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},Ue.Component=M,Ue.Fragment=t,Ue.Profiler=a,Ue.PureComponent=H,Ue.StrictMode=i,Ue.Suspense=p,Ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=re,Ue.act=function(){throw Error("act(...) is not supported in production builds of React.")},Ue.cache=function(b){return function(){return b.apply(null,arguments)}},Ue.cloneElement=function(b,Z,ve){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var fe=V({},b.props),Q=b.key,oe=void 0;if(Z!=null)for(ne in Z.ref!==void 0&&(oe=void 0),Z.key!==void 0&&(Q=""+Z.key),Z)!_e.call(Z,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&Z.ref===void 0||(fe[ne]=Z[ne]);var ne=arguments.length-2;if(ne===1)fe.children=ve;else if(1<ne){for(var xe=Array(ne),ye=0;ye<ne;ye++)xe[ye]=arguments[ye+2];fe.children=xe}return P(b.type,Q,void 0,void 0,oe,fe)},Ue.createContext=function(b){return b={$$typeof:c,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:l,_context:b},b},Ue.createElement=function(b,Z,ve){var fe,Q={},oe=null;if(Z!=null)for(fe in Z.key!==void 0&&(oe=""+Z.key),Z)_e.call(Z,fe)&&fe!=="key"&&fe!=="__self"&&fe!=="__source"&&(Q[fe]=Z[fe]);var ne=arguments.length-2;if(ne===1)Q.children=ve;else if(1<ne){for(var xe=Array(ne),ye=0;ye<ne;ye++)xe[ye]=arguments[ye+2];Q.children=xe}if(b&&b.defaultProps)for(fe in ne=b.defaultProps,ne)Q[fe]===void 0&&(Q[fe]=ne[fe]);return P(b,oe,void 0,void 0,null,Q)},Ue.createRef=function(){return{current:null}},Ue.forwardRef=function(b){return{$$typeof:d,render:b}},Ue.isValidElement=I,Ue.lazy=function(b){return{$$typeof:y,_payload:{_status:-1,_result:b},_init:Se}},Ue.memo=function(b,Z){return{$$typeof:m,type:b,compare:Z===void 0?null:Z}},Ue.startTransition=function(b){var Z=re.T,ve={};re.T=ve;try{var fe=b(),Q=re.S;Q!==null&&Q(ve,fe),typeof fe=="object"&&fe!==null&&typeof fe.then=="function"&&fe.then(be,he)}catch(oe){he(oe)}finally{re.T=Z}},Ue.unstable_useCacheRefresh=function(){return re.H.useCacheRefresh()},Ue.use=function(b){return re.H.use(b)},Ue.useActionState=function(b,Z,ve){return re.H.useActionState(b,Z,ve)},Ue.useCallback=function(b,Z){return re.H.useCallback(b,Z)},Ue.useContext=function(b){return re.H.useContext(b)},Ue.useDebugValue=function(){},Ue.useDeferredValue=function(b,Z){return re.H.useDeferredValue(b,Z)},Ue.useEffect=function(b,Z){return re.H.useEffect(b,Z)},Ue.useId=function(){return re.H.useId()},Ue.useImperativeHandle=function(b,Z,ve){return re.H.useImperativeHandle(b,Z,ve)},Ue.useInsertionEffect=function(b,Z){return re.H.useInsertionEffect(b,Z)},Ue.useLayoutEffect=function(b,Z){return re.H.useLayoutEffect(b,Z)},Ue.useMemo=function(b,Z){return re.H.useMemo(b,Z)},Ue.useOptimistic=function(b,Z){return re.H.useOptimistic(b,Z)},Ue.useReducer=function(b,Z,ve){return re.H.useReducer(b,Z,ve)},Ue.useRef=function(b){return re.H.useRef(b)},Ue.useState=function(b){return re.H.useState(b)},Ue.useSyncExternalStore=function(b,Z,ve){return re.H.useSyncExternalStore(b,Z,ve)},Ue.useTransition=function(){return re.H.useTransition()},Ue.version="19.0.0",Ue}var j0;function ey(){return j0||(j0=1,Eg.exports=LN()),Eg.exports}var te=ey(),Tg={exports:{}},ic={},Sg={exports:{}},bg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0;function UN(){return B0||(B0=1,function(n){function e(ce,Se){var he=ce.length;ce.push(Se);e:for(;0<he;){var be=he-1>>>1,b=ce[be];if(0<a(b,Se))ce[be]=Se,ce[he]=b,he=be;else break e}}function t(ce){return ce.length===0?null:ce[0]}function i(ce){if(ce.length===0)return null;var Se=ce[0],he=ce.pop();if(he!==Se){ce[0]=he;e:for(var be=0,b=ce.length,Z=b>>>1;be<Z;){var ve=2*(be+1)-1,fe=ce[ve],Q=ve+1,oe=ce[Q];if(0>a(fe,he))Q<b&&0>a(oe,fe)?(ce[be]=oe,ce[Q]=he,be=Q):(ce[be]=fe,ce[ve]=he,be=ve);else if(Q<b&&0>a(oe,he))ce[be]=oe,ce[Q]=he,be=Q;else break e}}return Se}function a(ce,Se){var he=ce.sortIndex-Se.sortIndex;return he!==0?he:ce.id-Se.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],m=[],y=1,S=null,A=3,D=!1,V=!1,G=!1,M=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function $(ce){for(var Se=t(m);Se!==null;){if(Se.callback===null)i(m);else if(Se.startTime<=ce)i(m),Se.sortIndex=Se.expirationTime,e(p,Se);else break;Se=t(m)}}function F(ce){if(G=!1,$(ce),!V)if(t(p)!==null)V=!0,je();else{var Se=t(m);Se!==null&&qe(F,Se.startTime-ce)}}var re=!1,_e=-1,P=5,R=-1;function I(){return!(n.unstable_now()-R<P)}function N(){if(re){var ce=n.unstable_now();R=ce;var Se=!0;try{e:{V=!1,G&&(G=!1,B(_e),_e=-1),D=!0;var he=A;try{t:{for($(ce),S=t(p);S!==null&&!(S.expirationTime>ce&&I());){var be=S.callback;if(typeof be=="function"){S.callback=null,A=S.priorityLevel;var b=be(S.expirationTime<=ce);if(ce=n.unstable_now(),typeof b=="function"){S.callback=b,$(ce),Se=!0;break t}S===t(p)&&i(p),$(ce)}else i(p);S=t(p)}if(S!==null)Se=!0;else{var Z=t(m);Z!==null&&qe(F,Z.startTime-ce),Se=!1}}break e}finally{S=null,A=he,D=!1}Se=void 0}}finally{Se?k():re=!1}}}var k;if(typeof H=="function")k=function(){H(N)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,x=L.port2;L.port1.onmessage=N,k=function(){x.postMessage(null)}}else k=function(){M(N,0)};function je(){re||(re=!0,k())}function qe(ce,Se){_e=M(function(){ce(n.unstable_now())},Se)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ce){ce.callback=null},n.unstable_continueExecution=function(){V||D||(V=!0,je())},n.unstable_forceFrameRate=function(ce){0>ce||125<ce?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<ce?Math.floor(1e3/ce):5},n.unstable_getCurrentPriorityLevel=function(){return A},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(ce){switch(A){case 1:case 2:case 3:var Se=3;break;default:Se=A}var he=A;A=Se;try{return ce()}finally{A=he}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ce,Se){switch(ce){case 1:case 2:case 3:case 4:case 5:break;default:ce=3}var he=A;A=ce;try{return Se()}finally{A=he}},n.unstable_scheduleCallback=function(ce,Se,he){var be=n.unstable_now();switch(typeof he=="object"&&he!==null?(he=he.delay,he=typeof he=="number"&&0<he?be+he:be):he=be,ce){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=he+b,ce={id:y++,callback:Se,priorityLevel:ce,startTime:he,expirationTime:b,sortIndex:-1},he>be?(ce.sortIndex=he,e(m,ce),t(p)===null&&ce===t(m)&&(G?(B(_e),_e=-1):G=!0,qe(F,he-be))):(ce.sortIndex=b,e(p,ce),V||D||(V=!0,je())),ce},n.unstable_shouldYield=I,n.unstable_wrapCallback=function(ce){var Se=A;return function(){var he=A;A=Se;try{return ce.apply(this,arguments)}finally{A=he}}}}(bg)),bg}var z0;function VN(){return z0||(z0=1,Sg.exports=UN()),Sg.exports}var Ag={exports:{}},Tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0;function jN(){if(F0)return Tn;F0=1;var n=ey();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var i={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,m,y){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:S==null?null:""+S,children:p,containerInfo:m,implementation:y}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Tn.createPortal=function(p,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return l(p,m,null,y)},Tn.flushSync=function(p){var m=c.T,y=i.p;try{if(c.T=null,i.p=2,p)return p()}finally{c.T=m,i.p=y,i.d.f()}},Tn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,i.d.C(p,m))},Tn.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},Tn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var y=m.as,S=d(y,m.crossOrigin),A=typeof m.integrity=="string"?m.integrity:void 0,D=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?i.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:S,integrity:A,fetchPriority:D}):y==="script"&&i.d.X(p,{crossOrigin:S,integrity:A,fetchPriority:D,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Tn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=d(m.as,m.crossOrigin);i.d.M(p,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&i.d.M(p)},Tn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,S=d(y,m.crossOrigin);i.d.L(p,y,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Tn.preloadModule=function(p,m){if(typeof p=="string")if(m){var y=d(m.as,m.crossOrigin);i.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else i.d.m(p)},Tn.requestFormReset=function(p){i.d.r(p)},Tn.unstable_batchedUpdates=function(p,m){return p(m)},Tn.useFormState=function(p,m,y){return c.H.useFormState(p,m,y)},Tn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Tn.version="19.0.0",Tn}var H0;function MA(){if(H0)return Ag.exports;H0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Ag.exports=jN(),Ag.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0;function BN(){if(q0)return ic;q0=1;var n=VN(),e=ey(),t=MA();function i(s){var r="https://react.dev/errors/"+s;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+s+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11)}var l=Symbol.for("react.element"),c=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),A=Symbol.for("react.consumer"),D=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),F=Symbol.for("react.memo_cache_sentinel"),re=Symbol.iterator;function _e(s){return s===null||typeof s!="object"?null:(s=re&&s[re]||s["@@iterator"],typeof s=="function"?s:null)}var P=Symbol.for("react.client.reference");function R(s){if(s==null)return null;if(typeof s=="function")return s.$$typeof===P?null:s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case p:return"Fragment";case d:return"Portal";case y:return"Profiler";case m:return"StrictMode";case G:return"Suspense";case M:return"SuspenseList"}if(typeof s=="object")switch(s.$$typeof){case D:return(s.displayName||"Context")+".Provider";case A:return(s._context.displayName||"Context")+".Consumer";case V:var r=s.render;return s=s.displayName,s||(s=r.displayName||r.name||"",s=s!==""?"ForwardRef("+s+")":"ForwardRef"),s;case B:return r=s.displayName||null,r!==null?r:R(s.type)||"Memo";case H:r=s._payload,s=s._init;try{return R(s(r))}catch{}}return null}var I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=Object.assign,k,L;function x(s){if(k===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);k=r&&r[1]||"",L=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+k+s+L}var je=!1;function qe(s,r){if(!s||je)return"";je=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var ae=function(){throw Error()};if(Object.defineProperty(ae.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ae,[])}catch(J){var K=J}Reflect.construct(s,[],ae)}else{try{ae.call()}catch(J){K=J}s.call(ae.prototype)}}else{try{throw Error()}catch(J){K=J}(ae=s())&&typeof ae.catch=="function"&&ae.catch(function(){})}}catch(J){if(J&&K&&typeof J.stack=="string")return[J.stack,K.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=u.DetermineComponentFrameRoot(),T=g[0],w=g[1];if(T&&w){var O=T.split(`
`),j=w.split(`
`);for(f=u=0;u<O.length&&!O[u].includes("DetermineComponentFrameRoot");)u++;for(;f<j.length&&!j[f].includes("DetermineComponentFrameRoot");)f++;if(u===O.length||f===j.length)for(u=O.length-1,f=j.length-1;1<=u&&0<=f&&O[u]!==j[f];)f--;for(;1<=u&&0<=f;u--,f--)if(O[u]!==j[f]){if(u!==1||f!==1)do if(u--,f--,0>f||O[u]!==j[f]){var ee=`
`+O[u].replace(" at new "," at ");return s.displayName&&ee.includes("<anonymous>")&&(ee=ee.replace("<anonymous>",s.displayName)),ee}while(1<=u&&0<=f);break}}}finally{je=!1,Error.prepareStackTrace=o}return(o=s?s.displayName||s.name:"")?x(o):""}function ce(s){switch(s.tag){case 26:case 27:case 5:return x(s.type);case 16:return x("Lazy");case 13:return x("Suspense");case 19:return x("SuspenseList");case 0:case 15:return s=qe(s.type,!1),s;case 11:return s=qe(s.type.render,!1),s;case 1:return s=qe(s.type,!0),s;default:return""}}function Se(s){try{var r="";do r+=ce(s),s=s.return;while(s);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function he(s){var r=s,o=s;if(s.alternate)for(;r.return;)r=r.return;else{s=r;do r=s,(r.flags&4098)!==0&&(o=r.return),s=r.return;while(s)}return r.tag===3?o:null}function be(s){if(s.tag===13){var r=s.memoizedState;if(r===null&&(s=s.alternate,s!==null&&(r=s.memoizedState)),r!==null)return r.dehydrated}return null}function b(s){if(he(s)!==s)throw Error(i(188))}function Z(s){var r=s.alternate;if(!r){if(r=he(s),r===null)throw Error(i(188));return r!==s?null:s}for(var o=s,u=r;;){var f=o.return;if(f===null)break;var g=f.alternate;if(g===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===o)return b(f),s;if(g===u)return b(f),r;g=g.sibling}throw Error(i(188))}if(o.return!==u.return)o=f,u=g;else{for(var T=!1,w=f.child;w;){if(w===o){T=!0,o=f,u=g;break}if(w===u){T=!0,u=f,o=g;break}w=w.sibling}if(!T){for(w=g.child;w;){if(w===o){T=!0,o=g,u=f;break}if(w===u){T=!0,u=g,o=f;break}w=w.sibling}if(!T)throw Error(i(189))}}if(o.alternate!==u)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?s:r}function ve(s){var r=s.tag;if(r===5||r===26||r===27||r===6)return s;for(s=s.child;s!==null;){if(r=ve(s),r!==null)return r;s=s.sibling}return null}var fe=Array.isArray,Q=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},ne=[],xe=-1;function ye(s){return{current:s}}function pe(s){0>xe||(s.current=ne[xe],ne[xe]=null,xe--)}function Re(s,r){xe++,ne[xe]=s.current,s.current=r}var wt=ye(null),Xt=ye(null),Zt=ye(null),Dn=ye(null);function ri(s,r){switch(Re(Zt,r),Re(Xt,s),Re(wt,null),s=r.nodeType,s){case 9:case 11:r=(r=r.documentElement)&&(r=r.namespaceURI)?h0(r):0;break;default:if(s=s===8?r.parentNode:r,r=s.tagName,s=s.namespaceURI)s=h0(s),r=f0(s,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}pe(wt),Re(wt,r)}function zn(){pe(wt),pe(Xt),pe(Zt)}function Bi(s){s.memoizedState!==null&&Re(Dn,s);var r=wt.current,o=f0(r,s.type);r!==o&&(Re(Xt,s),Re(wt,o))}function X(s){Xt.current===s&&(pe(wt),pe(Xt)),Dn.current===s&&(pe(Dn),Xu._currentValue=oe)}var Ge=Object.prototype.hasOwnProperty,kt=n.unstable_scheduleCallback,Ut=n.unstable_cancelCallback,_s=n.unstable_shouldYield,ai=n.unstable_requestPaint,un=n.unstable_now,Ta=n.unstable_getCurrentPriorityLevel,vt=n.unstable_ImmediatePriority,Vt=n.unstable_UserBlockingPriority,ys=n.unstable_NormalPriority,dh=n.unstable_LowPriority,Jl=n.unstable_IdlePriority,Sp=n.log,Sa=n.unstable_setDisableYieldValue,lr=null,vn=null;function eu(s){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(lr,s,void 0,(s.current.flags&128)===128)}catch{}}function zi(s){if(typeof Sp=="function"&&Sa(s),vn&&typeof vn.setStrictMode=="function")try{vn.setStrictMode(lr,s)}catch{}}var kn=Math.clz32?Math.clz32:mh,tu=Math.log,ph=Math.LN2;function mh(s){return s>>>=0,s===0?32:31-(tu(s)/ph|0)|0}var Fi=128,ur=4194304;function Ii(s){var r=s&42;if(r!==0)return r;switch(s&-s){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return s&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return s}}function oi(s,r){var o=s.pendingLanes;if(o===0)return 0;var u=0,f=s.suspendedLanes,g=s.pingedLanes,T=s.warmLanes;s=s.finishedLanes!==0;var w=o&134217727;return w!==0?(o=w&~f,o!==0?u=Ii(o):(g&=w,g!==0?u=Ii(g):s||(T=w&~T,T!==0&&(u=Ii(T))))):(w=o&~f,w!==0?u=Ii(w):g!==0?u=Ii(g):s||(T=o&~T,T!==0&&(u=Ii(T)))),u===0?0:r!==0&&r!==u&&(r&f)===0&&(f=u&-u,T=r&-r,f>=T||f===32&&(T&4194176)!==0)?r:u}function cr(s,r){return(s.pendingLanes&~(s.suspendedLanes&~s.pingedLanes)&r)===0}function Ao(s,r){switch(s){case 1:case 2:case 4:case 8:return r+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nu(){var s=Fi;return Fi<<=1,(Fi&4194176)===0&&(Fi=128),s}function hr(){var s=ur;return ur<<=1,(ur&62914560)===0&&(ur=4194304),s}function wo(s){for(var r=[],o=0;31>o;o++)r.push(s);return r}function Pt(s,r){s.pendingLanes|=r,r!==268435456&&(s.suspendedLanes=0,s.pingedLanes=0,s.warmLanes=0)}function gh(s,r,o,u,f,g){var T=s.pendingLanes;s.pendingLanes=o,s.suspendedLanes=0,s.pingedLanes=0,s.warmLanes=0,s.expiredLanes&=o,s.entangledLanes&=o,s.errorRecoveryDisabledLanes&=o,s.shellSuspendCounter=0;var w=s.entanglements,O=s.expirationTimes,j=s.hiddenUpdates;for(o=T&~o;0<o;){var ee=31-kn(o),ae=1<<ee;w[ee]=0,O[ee]=-1;var K=j[ee];if(K!==null)for(j[ee]=null,ee=0;ee<K.length;ee++){var J=K[ee];J!==null&&(J.lane&=-536870913)}o&=~ae}u!==0&&fr(s,u,0),g!==0&&f===0&&s.tag!==0&&(s.suspendedLanes|=g&~(T&~r))}function fr(s,r,o){s.pendingLanes|=r,s.suspendedLanes&=~r;var u=31-kn(r);s.entangledLanes|=r,s.entanglements[u]=s.entanglements[u]|1073741824|o&4194218}function dr(s,r){var o=s.entangledLanes|=r;for(s=s.entanglements;o;){var u=31-kn(o),f=1<<u;f&r|s[u]&r&&(s[u]|=r),o&=~f}}function _h(s){return s&=-s,2<s?8<s?(s&134217727)!==0?32:268435456:8:2}function yh(){var s=Q.p;return s!==0?s:(s=window.event,s===void 0?32:x0(s.type))}function pr(s,r){var o=Q.p;try{return Q.p=s,r()}finally{Q.p=o}}var Hi=Math.random().toString(36).slice(2),Jt="__reactFiber$"+Hi,Ht="__reactProps$"+Hi,vs="__reactContainer$"+Hi,ba="__reactEvents$"+Hi,Co="__reactListeners$"+Hi,qi="__reactHandles$"+Hi,iu="__reactResources$"+Hi,mr="__reactMarker$"+Hi;function Aa(s){delete s[Jt],delete s[Ht],delete s[ba],delete s[Co],delete s[qi]}function Ni(s){var r=s[Jt];if(r)return r;for(var o=s.parentNode;o;){if(r=o[vs]||o[Jt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(s=m0(s);s!==null;){if(o=s[Jt])return o;s=m0(s)}return r}s=o,o=s.parentNode}return null}function Es(s){if(s=s[Jt]||s[vs]){var r=s.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return s}return null}function gr(s){var r=s.tag;if(r===5||r===26||r===27||r===6)return s.stateNode;throw Error(i(33))}function _r(s){var r=s[iu];return r||(r=s[iu]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Et(s){s[mr]=!0}var su=new Set,Ro={};function Kn(s,r){Fn(s,r),Fn(s+"Capture",r)}function Fn(s,r){for(Ro[s]=r,s=0;s<r.length;s++)su.add(r[s])}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ru={},au={};function vh(s){return Ge.call(au,s)?!0:Ge.call(ru,s)?!1:bp.test(s)?au[s]=!0:(ru[s]=!0,!1)}function yr(s,r,o){if(vh(r))if(o===null)s.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":s.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){s.removeAttribute(r);return}}s.setAttribute(r,""+o)}}function vr(s,r,o){if(o===null)s.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":s.removeAttribute(r);return}s.setAttribute(r,""+o)}}function li(s,r,o,u){if(u===null)s.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":s.removeAttribute(o);return}s.setAttributeNS(r,o,""+u)}}function Pn(s){switch(typeof s){case"bigint":case"boolean":case"number":case"string":case"undefined":return s;case"object":return s;default:return""}}function Eh(s){var r=s.type;return(s=s.nodeName)&&s.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ap(s){var r=Eh(s)?"checked":"value",o=Object.getOwnPropertyDescriptor(s.constructor.prototype,r),u=""+s[r];if(!s.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,g=o.set;return Object.defineProperty(s,r,{configurable:!0,get:function(){return f.call(this)},set:function(T){u=""+T,g.call(this,T)}}),Object.defineProperty(s,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){s._valueTracker=null,delete s[r]}}}}function wa(s){s._valueTracker||(s._valueTracker=Ap(s))}function ou(s){if(!s)return!1;var r=s._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return s&&(u=Eh(s)?s.checked?"true":"false":s.value),s=u,s!==o?(r.setValue(s),!0):!1}function Io(s){if(s=s||(typeof document<"u"?document:void 0),typeof s>"u")return null;try{return s.activeElement||s.body}catch{return s.body}}var Ts=/[\n"\\]/g;function Ct(s){return s.replace(Ts,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Er(s,r,o,u,f,g,T,w){s.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?s.type=T:s.removeAttribute("type"),r!=null?T==="number"?(r===0&&s.value===""||s.value!=r)&&(s.value=""+Pn(r)):s.value!==""+Pn(r)&&(s.value=""+Pn(r)):T!=="submit"&&T!=="reset"||s.removeAttribute("value"),r!=null?No(s,T,Pn(r)):o!=null?No(s,T,Pn(o)):u!=null&&s.removeAttribute("value"),f==null&&g!=null&&(s.defaultChecked=!!g),f!=null&&(s.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?s.name=""+Pn(w):s.removeAttribute("name")}function Ca(s,r,o,u,f,g,T,w){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(s.type=g),r!=null||o!=null){if(!(g!=="submit"&&g!=="reset"||r!=null))return;o=o!=null?""+Pn(o):"",r=r!=null?""+Pn(r):o,w||r===s.value||(s.value=r),s.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,s.checked=w?s.checked:!!u,s.defaultChecked=!!u,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(s.name=T)}function No(s,r,o){r==="number"&&Io(s.ownerDocument)===s||s.defaultValue===""+o||(s.defaultValue=""+o)}function nt(s,r,o,u){if(s=s.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<s.length;o++)f=r.hasOwnProperty("$"+s[o].value),s[o].selected!==f&&(s[o].selected=f),f&&u&&(s[o].defaultSelected=!0)}else{for(o=""+Pn(o),r=null,f=0;f<s.length;f++){if(s[f].value===o){s[f].selected=!0,u&&(s[f].defaultSelected=!0);return}r!==null||s[f].disabled||(r=s[f])}r!==null&&(r.selected=!0)}}function Ra(s,r,o){if(r!=null&&(r=""+Pn(r),r!==s.value&&(s.value=r),o==null)){s.defaultValue!==r&&(s.defaultValue=r);return}s.defaultValue=o!=null?""+Pn(o):""}function Tr(s,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(i(92));if(fe(u)){if(1<u.length)throw Error(i(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=Pn(r),s.defaultValue=o,u=s.textContent,u===o&&u!==""&&u!==null&&(s.value=u)}function ui(s,r){if(r){var o=s.firstChild;if(o&&o===s.lastChild&&o.nodeType===3){o.nodeValue=r;return}}s.textContent=r}var wp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function lu(s,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?s.setProperty(r,""):r==="float"?s.cssFloat="":s[r]="":u?s.setProperty(r,o):typeof o!="number"||o===0||wp.has(r)?r==="float"?s.cssFloat=o:s[r]=(""+o).trim():s[r]=o+"px"}function Th(s,r,o){if(r!=null&&typeof r!="object")throw Error(i(62));if(s=s.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?s.setProperty(u,""):u==="float"?s.cssFloat="":s[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&lu(s,f,u)}else for(var g in r)r.hasOwnProperty(g)&&lu(s,g,r[g])}function uu(s){if(s.indexOf("-")===-1)return!1;switch(s){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Rp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gi(s){return Rp.test(""+s)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":s}var ci=null;function xo(s){return s=s.target||s.srcElement||window,s.correspondingUseElement&&(s=s.correspondingUseElement),s.nodeType===3?s.parentNode:s}var Ss=null,bs=null;function As(s){var r=Es(s);if(r&&(s=r.stateNode)){var o=s[Ht]||null;e:switch(s=r.stateNode,r.type){case"input":if(Er(s,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=s;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Ct(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==s&&u.form===s.form){var f=u[Ht]||null;if(!f)throw Error(i(90));Er(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===s.form&&ou(u)}break e;case"textarea":Ra(s,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&nt(s,!!o.multiple,r,!1)}}}var cu=!1;function Sh(s,r,o){if(cu)return s(r,o);cu=!0;try{var u=s(r);return u}finally{if(cu=!1,(Ss!==null||bs!==null)&&(pf(),Ss&&(r=Ss,s=bs,bs=Ss=null,As(r),s)))for(r=0;r<s.length;r++)As(s[r])}}function Ia(s,r){var o=s.stateNode;if(o===null)return null;var u=o[Ht]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(s=s.type,u=!(s==="button"||s==="input"||s==="select"||s==="textarea")),s=!u;break e;default:s=!1}if(s)return null;if(o&&typeof o!="function")throw Error(i(231,r,typeof o));return o}var hi=!1;if($n)try{var Na={};Object.defineProperty(Na,"passive",{get:function(){hi=!0}}),window.addEventListener("test",Na,Na),window.removeEventListener("test",Na,Na)}catch{hi=!1}var Wi=null,Sr=null,ws=null;function hu(){if(ws)return ws;var s,r=Sr,o=r.length,u,f="value"in Wi?Wi.value:Wi.textContent,g=f.length;for(s=0;s<o&&r[s]===f[s];s++);var T=o-s;for(u=1;u<=T&&r[o-u]===f[g-u];u++);return ws=f.slice(s,1<u?1-u:void 0)}function Ki(s){var r=s.keyCode;return"charCode"in s?(s=s.charCode,s===0&&r===13&&(s=13)):s=r,s===10&&(s=13),32<=s||s===13?s:0}function $i(){return!0}function fu(){return!1}function en(s){function r(o,u,f,g,T){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var w in s)s.hasOwnProperty(w)&&(o=s[w],this[w]=o?o(g):g[w]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?$i:fu,this.isPropagationStopped=fu,this}return N(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=$i)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=$i)},persist:function(){},isPersistent:$i}),r}var rt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(s){return s.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oo=en(rt),xa=N({},rt,{view:0,detail:0}),bh=en(xa),Do,ko,Yi,Oa=N({},xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pa,button:0,buttons:0,relatedTarget:function(s){return s.relatedTarget===void 0?s.fromElement===s.srcElement?s.toElement:s.fromElement:s.relatedTarget},movementX:function(s){return"movementX"in s?s.movementX:(s!==Yi&&(Yi&&s.type==="mousemove"?(Do=s.screenX-Yi.screenX,ko=s.screenY-Yi.screenY):ko=Do=0,Yi=s),Do)},movementY:function(s){return"movementY"in s?s.movementY:ko}}),fi=en(Oa),Ah=N({},Oa,{dataTransfer:0}),Ip=en(Ah),Da=N({},xa,{relatedTarget:0}),Po=en(Da),du=N({},rt,{animationName:0,elapsedTime:0,pseudoElement:0}),Mo=en(du),wh=N({},rt,{clipboardData:function(s){return"clipboardData"in s?s.clipboardData:window.clipboardData}}),Lo=en(wh),Np=N({},rt,{data:0}),pu=en(Np),ka={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ch={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mu(s){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(s):(s=Rh[s])?!!r[s]:!1}function Pa(){return mu}var Ih=N({},xa,{key:function(s){if(s.key){var r=ka[s.key]||s.key;if(r!=="Unidentified")return r}return s.type==="keypress"?(s=Ki(s),s===13?"Enter":String.fromCharCode(s)):s.type==="keydown"||s.type==="keyup"?Ch[s.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pa,charCode:function(s){return s.type==="keypress"?Ki(s):0},keyCode:function(s){return s.type==="keydown"||s.type==="keyup"?s.keyCode:0},which:function(s){return s.type==="keypress"?Ki(s):s.type==="keydown"||s.type==="keyup"?s.keyCode:0}}),Uo=en(Ih),Nh=N({},Oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gu=en(Nh),Cs=N({},xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pa}),xh=en(Cs),Oh=N({},rt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dh=en(Oh),kh=N({},Oa,{deltaX:function(s){return"deltaX"in s?s.deltaX:"wheelDeltaX"in s?-s.wheelDeltaX:0},deltaY:function(s){return"deltaY"in s?s.deltaY:"wheelDeltaY"in s?-s.wheelDeltaY:"wheelDelta"in s?-s.wheelDelta:0},deltaZ:0,deltaMode:0}),Vo=en(kh),Mn=N({},rt,{newState:0,oldState:0}),Ph=en(Mn),Mh=[9,13,27,32],Qi=$n&&"CompositionEvent"in window,h=null;$n&&"documentMode"in document&&(h=document.documentMode);var _=$n&&"TextEvent"in window&&!h,E=$n&&(!Qi||h&&8<h&&11>=h),C=" ",q=!1;function Y(s,r){switch(s){case"keyup":return Mh.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function de(s){return s=s.detail,typeof s=="object"&&"data"in s?s.data:null}var Qe=!1;function qt(s,r){switch(s){case"compositionend":return de(r);case"keypress":return r.which!==32?null:(q=!0,C);case"textInput":return s=r.data,s===C&&q?null:s;default:return null}}function Xe(s,r){if(Qe)return s==="compositionend"||!Qi&&Y(s,r)?(s=hu(),ws=Sr=Wi=null,Qe=!1,s):null;switch(s){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return E&&r.locale!=="ko"?null:r.data;default:return null}}var tn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gt(s){var r=s&&s.nodeName&&s.nodeName.toLowerCase();return r==="input"?!!tn[s.type]:r==="textarea"}function Rs(s,r,o,u){Ss?bs?bs.push(u):bs=[u]:Ss=u,r=vf(r,"onChange"),0<r.length&&(o=new Oo("onChange","change",null,o,u),s.push({event:o,listeners:r}))}var cn=null,Xi=null;function _u(s){a0(s,0)}function Lh(s){var r=gr(s);if(ou(r))return s}function Mv(s,r){if(s==="change")return r}var Lv=!1;if($n){var xp;if($n){var Op="oninput"in document;if(!Op){var Uv=document.createElement("div");Uv.setAttribute("oninput","return;"),Op=typeof Uv.oninput=="function"}xp=Op}else xp=!1;Lv=xp&&(!document.documentMode||9<document.documentMode)}function Vv(){cn&&(cn.detachEvent("onpropertychange",jv),Xi=cn=null)}function jv(s){if(s.propertyName==="value"&&Lh(Xi)){var r=[];Rs(r,Xi,s,xo(s)),Sh(_u,r)}}function cI(s,r,o){s==="focusin"?(Vv(),cn=r,Xi=o,cn.attachEvent("onpropertychange",jv)):s==="focusout"&&Vv()}function hI(s){if(s==="selectionchange"||s==="keyup"||s==="keydown")return Lh(Xi)}function fI(s,r){if(s==="click")return Lh(r)}function dI(s,r){if(s==="input"||s==="change")return Lh(r)}function pI(s,r){return s===r&&(s!==0||1/s===1/r)||s!==s&&r!==r}var Yn=typeof Object.is=="function"?Object.is:pI;function yu(s,r){if(Yn(s,r))return!0;if(typeof s!="object"||s===null||typeof r!="object"||r===null)return!1;var o=Object.keys(s),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!Ge.call(r,f)||!Yn(s[f],r[f]))return!1}return!0}function Bv(s){for(;s&&s.firstChild;)s=s.firstChild;return s}function zv(s,r){var o=Bv(s);s=0;for(var u;o;){if(o.nodeType===3){if(u=s+o.textContent.length,s<=r&&u>=r)return{node:o,offset:r-s};s=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Bv(o)}}function Fv(s,r){return s&&r?s===r?!0:s&&s.nodeType===3?!1:r&&r.nodeType===3?Fv(s,r.parentNode):"contains"in s?s.contains(r):s.compareDocumentPosition?!!(s.compareDocumentPosition(r)&16):!1:!1}function Hv(s){s=s!=null&&s.ownerDocument!=null&&s.ownerDocument.defaultView!=null?s.ownerDocument.defaultView:window;for(var r=Io(s.document);r instanceof s.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)s=r.contentWindow;else break;r=Io(s.document)}return r}function Dp(s){var r=s&&s.nodeName&&s.nodeName.toLowerCase();return r&&(r==="input"&&(s.type==="text"||s.type==="search"||s.type==="tel"||s.type==="url"||s.type==="password")||r==="textarea"||s.contentEditable==="true")}function mI(s,r){var o=Hv(r);r=s.focusedElem;var u=s.selectionRange;if(o!==r&&r&&r.ownerDocument&&Fv(r.ownerDocument.documentElement,r)){if(u!==null&&Dp(r)){if(s=u.start,o=u.end,o===void 0&&(o=s),"selectionStart"in r)r.selectionStart=s,r.selectionEnd=Math.min(o,r.value.length);else if(o=(s=r.ownerDocument||document)&&s.defaultView||window,o.getSelection){o=o.getSelection();var f=r.textContent.length,g=Math.min(u.start,f);u=u.end===void 0?g:Math.min(u.end,f),!o.extend&&g>u&&(f=u,u=g,g=f),f=zv(r,g);var T=zv(r,u);f&&T&&(o.rangeCount!==1||o.anchorNode!==f.node||o.anchorOffset!==f.offset||o.focusNode!==T.node||o.focusOffset!==T.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),o.removeAllRanges(),g>u?(o.addRange(s),o.extend(T.node,T.offset)):(s.setEnd(T.node,T.offset),o.addRange(s)))}}for(s=[],o=r;o=o.parentNode;)o.nodeType===1&&s.push({element:o,left:o.scrollLeft,top:o.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<s.length;r++)o=s[r],o.element.scrollLeft=o.left,o.element.scrollTop=o.top}}var gI=$n&&"documentMode"in document&&11>=document.documentMode,jo=null,kp=null,vu=null,Pp=!1;function qv(s,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Pp||jo==null||jo!==Io(u)||(u=jo,"selectionStart"in u&&Dp(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),vu&&yu(vu,u)||(vu=u,u=vf(kp,"onSelect"),0<u.length&&(r=new Oo("onSelect","select",null,r,o),s.push({event:r,listeners:u}),r.target=jo)))}function Ma(s,r){var o={};return o[s.toLowerCase()]=r.toLowerCase(),o["Webkit"+s]="webkit"+r,o["Moz"+s]="moz"+r,o}var Bo={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionrun:Ma("Transition","TransitionRun"),transitionstart:Ma("Transition","TransitionStart"),transitioncancel:Ma("Transition","TransitionCancel"),transitionend:Ma("Transition","TransitionEnd")},Mp={},Gv={};$n&&(Gv=document.createElement("div").style,"AnimationEvent"in window||(delete Bo.animationend.animation,delete Bo.animationiteration.animation,delete Bo.animationstart.animation),"TransitionEvent"in window||delete Bo.transitionend.transition);function La(s){if(Mp[s])return Mp[s];if(!Bo[s])return s;var r=Bo[s],o;for(o in r)if(r.hasOwnProperty(o)&&o in Gv)return Mp[s]=r[o];return s}var Wv=La("animationend"),Kv=La("animationiteration"),$v=La("animationstart"),_I=La("transitionrun"),yI=La("transitionstart"),vI=La("transitioncancel"),Yv=La("transitionend"),Qv=new Map,Xv="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function xi(s,r){Qv.set(s,r),Kn(r,[s])}var di=[],zo=0,Lp=0;function Uh(){for(var s=zo,r=Lp=zo=0;r<s;){var o=di[r];di[r++]=null;var u=di[r];di[r++]=null;var f=di[r];di[r++]=null;var g=di[r];if(di[r++]=null,u!==null&&f!==null){var T=u.pending;T===null?f.next=f:(f.next=T.next,T.next=f),u.pending=f}g!==0&&Zv(o,f,g)}}function Vh(s,r,o,u){di[zo++]=s,di[zo++]=r,di[zo++]=o,di[zo++]=u,Lp|=u,s.lanes|=u,s=s.alternate,s!==null&&(s.lanes|=u)}function Up(s,r,o,u){return Vh(s,r,o,u),jh(s)}function br(s,r){return Vh(s,null,null,r),jh(s)}function Zv(s,r,o){s.lanes|=o;var u=s.alternate;u!==null&&(u.lanes|=o);for(var f=!1,g=s.return;g!==null;)g.childLanes|=o,u=g.alternate,u!==null&&(u.childLanes|=o),g.tag===22&&(s=g.stateNode,s===null||s._visibility&1||(f=!0)),s=g,g=g.return;f&&r!==null&&s.tag===3&&(g=s.stateNode,f=31-kn(o),g=g.hiddenUpdates,s=g[f],s===null?g[f]=[r]:s.push(r),r.lane=o|536870912)}function jh(s){if(50<qu)throw qu=0,Hm=null,Error(i(185));for(var r=s.return;r!==null;)s=r,r=s.return;return s.tag===3?s.stateNode:null}var Fo={},Jv=new WeakMap;function pi(s,r){if(typeof s=="object"&&s!==null){var o=Jv.get(s);return o!==void 0?o:(r={value:s,source:r,stack:Se(r)},Jv.set(s,r),r)}return{value:s,source:r,stack:Se(r)}}var Ho=[],qo=0,Bh=null,zh=0,mi=[],gi=0,Ua=null,Is=1,Ns="";function Va(s,r){Ho[qo++]=zh,Ho[qo++]=Bh,Bh=s,zh=r}function eE(s,r,o){mi[gi++]=Is,mi[gi++]=Ns,mi[gi++]=Ua,Ua=s;var u=Is;s=Ns;var f=32-kn(u)-1;u&=~(1<<f),o+=1;var g=32-kn(r)+f;if(30<g){var T=f-f%5;g=(u&(1<<T)-1).toString(32),u>>=T,f-=T,Is=1<<32-kn(r)+f|o<<f|u,Ns=g+s}else Is=1<<g|o<<f|u,Ns=s}function Vp(s){s.return!==null&&(Va(s,1),eE(s,1,0))}function jp(s){for(;s===Bh;)Bh=Ho[--qo],Ho[qo]=null,zh=Ho[--qo],Ho[qo]=null;for(;s===Ua;)Ua=mi[--gi],mi[gi]=null,Ns=mi[--gi],mi[gi]=null,Is=mi[--gi],mi[gi]=null}var Ln=null,hn=null,it=!1,Oi=null,Zi=!1,Bp=Error(i(519));function ja(s){var r=Error(i(418,""));throw Su(pi(r,s)),Bp}function tE(s){var r=s.stateNode,o=s.type,u=s.memoizedProps;switch(r[Jt]=s,r[Ht]=u,o){case"dialog":Ke("cancel",r),Ke("close",r);break;case"iframe":case"object":case"embed":Ke("load",r);break;case"video":case"audio":for(o=0;o<Wu.length;o++)Ke(Wu[o],r);break;case"source":Ke("error",r);break;case"img":case"image":case"link":Ke("error",r),Ke("load",r);break;case"details":Ke("toggle",r);break;case"input":Ke("invalid",r),Ca(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),wa(r);break;case"select":Ke("invalid",r);break;case"textarea":Ke("invalid",r),Tr(r,u.value,u.defaultValue,u.children),wa(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||c0(r.textContent,o)?(u.popover!=null&&(Ke("beforetoggle",r),Ke("toggle",r)),u.onScroll!=null&&Ke("scroll",r),u.onScrollEnd!=null&&Ke("scrollend",r),u.onClick!=null&&(r.onclick=Ef),r=!0):r=!1,r||ja(s)}function nE(s){for(Ln=s.return;Ln;)switch(Ln.tag){case 3:case 27:Zi=!0;return;case 5:case 13:Zi=!1;return;default:Ln=Ln.return}}function Eu(s){if(s!==Ln)return!1;if(!it)return nE(s),it=!0,!1;var r=!1,o;if((o=s.tag!==3&&s.tag!==27)&&((o=s.tag===5)&&(o=s.type,o=!(o!=="form"&&o!=="button")||ag(s.type,s.memoizedProps)),o=!o),o&&(r=!0),r&&hn&&ja(s),nE(s),s.tag===13){if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(i(317));e:{for(s=s.nextSibling,r=0;s;){if(s.nodeType===8)if(o=s.data,o==="/$"){if(r===0){hn=ki(s.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;s=s.nextSibling}hn=null}}else hn=Ln?ki(s.stateNode.nextSibling):null;return!0}function Tu(){hn=Ln=null,it=!1}function Su(s){Oi===null?Oi=[s]:Oi.push(s)}var bu=Error(i(460)),iE=Error(i(474)),zp={then:function(){}};function sE(s){return s=s.status,s==="fulfilled"||s==="rejected"}function Fh(){}function rE(s,r,o){switch(o=s[o],o===void 0?s.push(r):o!==r&&(r.then(Fh,Fh),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw s=r.reason,s===bu?Error(i(483)):s;default:if(typeof r.status=="string")r.then(Fh,Fh);else{if(s=dt,s!==null&&100<s.shellSuspendCounter)throw Error(i(482));s=r,s.status="pending",s.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw s=r.reason,s===bu?Error(i(483)):s}throw Au=r,bu}}var Au=null;function aE(){if(Au===null)throw Error(i(459));var s=Au;return Au=null,s}var Go=null,wu=0;function Hh(s){var r=wu;return wu+=1,Go===null&&(Go=[]),rE(Go,s,r)}function Cu(s,r){r=r.props.ref,s.ref=r!==void 0?r:null}function qh(s,r){throw r.$$typeof===l?Error(i(525)):(s=Object.prototype.toString.call(r),Error(i(31,s==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":s)))}function oE(s){var r=s._init;return r(s._payload)}function lE(s){function r(z,U){if(s){var W=z.deletions;W===null?(z.deletions=[U],z.flags|=16):W.push(U)}}function o(z,U){if(!s)return null;for(;U!==null;)r(z,U),U=U.sibling;return null}function u(z){for(var U=new Map;z!==null;)z.key!==null?U.set(z.key,z):U.set(z.index,z),z=z.sibling;return U}function f(z,U){return z=Mr(z,U),z.index=0,z.sibling=null,z}function g(z,U,W){return z.index=W,s?(W=z.alternate,W!==null?(W=W.index,W<U?(z.flags|=33554434,U):W):(z.flags|=33554434,U)):(z.flags|=1048576,U)}function T(z){return s&&z.alternate===null&&(z.flags|=33554434),z}function w(z,U,W,ie){return U===null||U.tag!==6?(U=Mm(W,z.mode,ie),U.return=z,U):(U=f(U,W),U.return=z,U)}function O(z,U,W,ie){var Te=W.type;return Te===p?ee(z,U,W.props.children,ie,W.key):U!==null&&(U.elementType===Te||typeof Te=="object"&&Te!==null&&Te.$$typeof===H&&oE(Te)===U.type)?(U=f(U,W.props),Cu(U,W),U.return=z,U):(U=uf(W.type,W.key,W.props,null,z.mode,ie),Cu(U,W),U.return=z,U)}function j(z,U,W,ie){return U===null||U.tag!==4||U.stateNode.containerInfo!==W.containerInfo||U.stateNode.implementation!==W.implementation?(U=Lm(W,z.mode,ie),U.return=z,U):(U=f(U,W.children||[]),U.return=z,U)}function ee(z,U,W,ie,Te){return U===null||U.tag!==7?(U=Ya(W,z.mode,ie,Te),U.return=z,U):(U=f(U,W),U.return=z,U)}function ae(z,U,W){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return U=Mm(""+U,z.mode,W),U.return=z,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case c:return W=uf(U.type,U.key,U.props,null,z.mode,W),Cu(W,U),W.return=z,W;case d:return U=Lm(U,z.mode,W),U.return=z,U;case H:var ie=U._init;return U=ie(U._payload),ae(z,U,W)}if(fe(U)||_e(U))return U=Ya(U,z.mode,W,null),U.return=z,U;if(typeof U.then=="function")return ae(z,Hh(U),W);if(U.$$typeof===D)return ae(z,af(z,U),W);qh(z,U)}return null}function K(z,U,W,ie){var Te=U!==null?U.key:null;if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return Te!==null?null:w(z,U,""+W,ie);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case c:return W.key===Te?O(z,U,W,ie):null;case d:return W.key===Te?j(z,U,W,ie):null;case H:return Te=W._init,W=Te(W._payload),K(z,U,W,ie)}if(fe(W)||_e(W))return Te!==null?null:ee(z,U,W,ie,null);if(typeof W.then=="function")return K(z,U,Hh(W),ie);if(W.$$typeof===D)return K(z,U,af(z,W),ie);qh(z,W)}return null}function J(z,U,W,ie,Te){if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return z=z.get(W)||null,w(U,z,""+ie,Te);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case c:return z=z.get(ie.key===null?W:ie.key)||null,O(U,z,ie,Te);case d:return z=z.get(ie.key===null?W:ie.key)||null,j(U,z,ie,Te);case H:var Be=ie._init;return ie=Be(ie._payload),J(z,U,W,ie,Te)}if(fe(ie)||_e(ie))return z=z.get(W)||null,ee(U,z,ie,Te,null);if(typeof ie.then=="function")return J(z,U,W,Hh(ie),Te);if(ie.$$typeof===D)return J(z,U,W,af(U,ie),Te);qh(U,ie)}return null}function Ae(z,U,W,ie){for(var Te=null,Be=null,Ce=U,Oe=U=0,rn=null;Ce!==null&&Oe<W.length;Oe++){Ce.index>Oe?(rn=Ce,Ce=null):rn=Ce.sibling;var st=K(z,Ce,W[Oe],ie);if(st===null){Ce===null&&(Ce=rn);break}s&&Ce&&st.alternate===null&&r(z,Ce),U=g(st,U,Oe),Be===null?Te=st:Be.sibling=st,Be=st,Ce=rn}if(Oe===W.length)return o(z,Ce),it&&Va(z,Oe),Te;if(Ce===null){for(;Oe<W.length;Oe++)Ce=ae(z,W[Oe],ie),Ce!==null&&(U=g(Ce,U,Oe),Be===null?Te=Ce:Be.sibling=Ce,Be=Ce);return it&&Va(z,Oe),Te}for(Ce=u(Ce);Oe<W.length;Oe++)rn=J(Ce,z,Oe,W[Oe],ie),rn!==null&&(s&&rn.alternate!==null&&Ce.delete(rn.key===null?Oe:rn.key),U=g(rn,U,Oe),Be===null?Te=rn:Be.sibling=rn,Be=rn);return s&&Ce.forEach(function(Fr){return r(z,Fr)}),it&&Va(z,Oe),Te}function Me(z,U,W,ie){if(W==null)throw Error(i(151));for(var Te=null,Be=null,Ce=U,Oe=U=0,rn=null,st=W.next();Ce!==null&&!st.done;Oe++,st=W.next()){Ce.index>Oe?(rn=Ce,Ce=null):rn=Ce.sibling;var Fr=K(z,Ce,st.value,ie);if(Fr===null){Ce===null&&(Ce=rn);break}s&&Ce&&Fr.alternate===null&&r(z,Ce),U=g(Fr,U,Oe),Be===null?Te=Fr:Be.sibling=Fr,Be=Fr,Ce=rn}if(st.done)return o(z,Ce),it&&Va(z,Oe),Te;if(Ce===null){for(;!st.done;Oe++,st=W.next())st=ae(z,st.value,ie),st!==null&&(U=g(st,U,Oe),Be===null?Te=st:Be.sibling=st,Be=st);return it&&Va(z,Oe),Te}for(Ce=u(Ce);!st.done;Oe++,st=W.next())st=J(Ce,z,Oe,st.value,ie),st!==null&&(s&&st.alternate!==null&&Ce.delete(st.key===null?Oe:st.key),U=g(st,U,Oe),Be===null?Te=st:Be.sibling=st,Be=st);return s&&Ce.forEach(function(kN){return r(z,kN)}),it&&Va(z,Oe),Te}function Nt(z,U,W,ie){if(typeof W=="object"&&W!==null&&W.type===p&&W.key===null&&(W=W.props.children),typeof W=="object"&&W!==null){switch(W.$$typeof){case c:e:{for(var Te=W.key;U!==null;){if(U.key===Te){if(Te=W.type,Te===p){if(U.tag===7){o(z,U.sibling),ie=f(U,W.props.children),ie.return=z,z=ie;break e}}else if(U.elementType===Te||typeof Te=="object"&&Te!==null&&Te.$$typeof===H&&oE(Te)===U.type){o(z,U.sibling),ie=f(U,W.props),Cu(ie,W),ie.return=z,z=ie;break e}o(z,U);break}else r(z,U);U=U.sibling}W.type===p?(ie=Ya(W.props.children,z.mode,ie,W.key),ie.return=z,z=ie):(ie=uf(W.type,W.key,W.props,null,z.mode,ie),Cu(ie,W),ie.return=z,z=ie)}return T(z);case d:e:{for(Te=W.key;U!==null;){if(U.key===Te)if(U.tag===4&&U.stateNode.containerInfo===W.containerInfo&&U.stateNode.implementation===W.implementation){o(z,U.sibling),ie=f(U,W.children||[]),ie.return=z,z=ie;break e}else{o(z,U);break}else r(z,U);U=U.sibling}ie=Lm(W,z.mode,ie),ie.return=z,z=ie}return T(z);case H:return Te=W._init,W=Te(W._payload),Nt(z,U,W,ie)}if(fe(W))return Ae(z,U,W,ie);if(_e(W)){if(Te=_e(W),typeof Te!="function")throw Error(i(150));return W=Te.call(W),Me(z,U,W,ie)}if(typeof W.then=="function")return Nt(z,U,Hh(W),ie);if(W.$$typeof===D)return Nt(z,U,af(z,W),ie);qh(z,W)}return typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint"?(W=""+W,U!==null&&U.tag===6?(o(z,U.sibling),ie=f(U,W),ie.return=z,z=ie):(o(z,U),ie=Mm(W,z.mode,ie),ie.return=z,z=ie),T(z)):o(z,U)}return function(z,U,W,ie){try{wu=0;var Te=Nt(z,U,W,ie);return Go=null,Te}catch(Ce){if(Ce===bu)throw Ce;var Be=Ei(29,Ce,null,z.mode);return Be.lanes=ie,Be.return=z,Be}finally{}}}var Ba=lE(!0),uE=lE(!1),Wo=ye(null),Gh=ye(0);function cE(s,r){s=Bs,Re(Gh,s),Re(Wo,r),Bs=s|r.baseLanes}function Fp(){Re(Gh,Bs),Re(Wo,Wo.current)}function Hp(){Bs=Gh.current,pe(Wo),pe(Gh)}var _i=ye(null),Ji=null;function Ar(s){var r=s.alternate;Re(Wt,Wt.current&1),Re(_i,s),Ji===null&&(r===null||Wo.current!==null||r.memoizedState!==null)&&(Ji=s)}function hE(s){if(s.tag===22){if(Re(Wt,Wt.current),Re(_i,s),Ji===null){var r=s.alternate;r!==null&&r.memoizedState!==null&&(Ji=s)}}else wr()}function wr(){Re(Wt,Wt.current),Re(_i,_i.current)}function xs(s){pe(_i),Ji===s&&(Ji=null),pe(Wt)}var Wt=ye(0);function Wh(s){for(var r=s;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break;for(;r.sibling===null;){if(r.return===null||r.return===s)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var EI=typeof AbortController<"u"?AbortController:function(){var s=[],r=this.signal={aborted:!1,addEventListener:function(o,u){s.push(u)}};this.abort=function(){r.aborted=!0,s.forEach(function(o){return o()})}},TI=n.unstable_scheduleCallback,SI=n.unstable_NormalPriority,Kt={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qp(){return{controller:new EI,data:new Map,refCount:0}}function Ru(s){s.refCount--,s.refCount===0&&TI(SI,function(){s.controller.abort()})}var Iu=null,Gp=0,Ko=0,$o=null;function bI(s,r){if(Iu===null){var o=Iu=[];Gp=0,Ko=Xm(),$o={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Gp++,r.then(fE,fE),r}function fE(){if(--Gp===0&&Iu!==null){$o!==null&&($o.status="fulfilled");var s=Iu;Iu=null,Ko=0,$o=null;for(var r=0;r<s.length;r++)(0,s[r])()}}function AI(s,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return s.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var dE=I.S;I.S=function(s,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&bI(s,r),dE!==null&&dE(s,r)};var za=ye(null);function Wp(){var s=za.current;return s!==null?s:dt.pooledCache}function Kh(s,r){r===null?Re(za,za.current):Re(za,r.pool)}function pE(){var s=Wp();return s===null?null:{parent:Kt._currentValue,pool:s}}var Cr=0,Ve=null,lt=null,jt=null,$h=!1,Yo=!1,Fa=!1,Yh=0,Nu=0,Qo=null,wI=0;function Mt(){throw Error(i(321))}function Kp(s,r){if(r===null)return!1;for(var o=0;o<r.length&&o<s.length;o++)if(!Yn(s[o],r[o]))return!1;return!0}function $p(s,r,o,u,f,g){return Cr=g,Ve=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,I.H=s===null||s.memoizedState===null?Ha:Rr,Fa=!1,g=o(u,f),Fa=!1,Yo&&(g=gE(r,o,u,f)),mE(s),g}function mE(s){I.H=es;var r=lt!==null&&lt.next!==null;if(Cr=0,jt=lt=Ve=null,$h=!1,Nu=0,Qo=null,r)throw Error(i(300));s===null||nn||(s=s.dependencies,s!==null&&rf(s)&&(nn=!0))}function gE(s,r,o,u){Ve=s;var f=0;do{if(Yo&&(Qo=null),Nu=0,Yo=!1,25<=f)throw Error(i(301));if(f+=1,jt=lt=null,s.updateQueue!=null){var g=s.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}I.H=qa,g=r(o,u)}while(Yo);return g}function CI(){var s=I.H,r=s.useState()[0];return r=typeof r.then=="function"?xu(r):r,s=s.useState()[0],(lt!==null?lt.memoizedState:null)!==s&&(Ve.flags|=1024),r}function Yp(){var s=Yh!==0;return Yh=0,s}function Qp(s,r,o){r.updateQueue=s.updateQueue,r.flags&=-2053,s.lanes&=~o}function Xp(s){if($h){for(s=s.memoizedState;s!==null;){var r=s.queue;r!==null&&(r.pending=null),s=s.next}$h=!1}Cr=0,jt=lt=Ve=null,Yo=!1,Nu=Yh=0,Qo=null}function Hn(){var s={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?Ve.memoizedState=jt=s:jt=jt.next=s,jt}function Bt(){if(lt===null){var s=Ve.alternate;s=s!==null?s.memoizedState:null}else s=lt.next;var r=jt===null?Ve.memoizedState:jt.next;if(r!==null)jt=r,lt=s;else{if(s===null)throw Ve.alternate===null?Error(i(467)):Error(i(310));lt=s,s={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},jt===null?Ve.memoizedState=jt=s:jt=jt.next=s}return jt}var Qh;Qh=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function xu(s){var r=Nu;return Nu+=1,Qo===null&&(Qo=[]),s=rE(Qo,s,r),r=Ve,(jt===null?r.memoizedState:jt.next)===null&&(r=r.alternate,I.H=r===null||r.memoizedState===null?Ha:Rr),s}function Xh(s){if(s!==null&&typeof s=="object"){if(typeof s.then=="function")return xu(s);if(s.$$typeof===D)return En(s)}throw Error(i(438,String(s)))}function Zp(s){var r=null,o=Ve.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Ve.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Qh(),Ve.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(s),u=0;u<s;u++)o[u]=F;return r.index++,o}function Os(s,r){return typeof r=="function"?r(s):r}function Zh(s){var r=Bt();return Jp(r,lt,s)}function Jp(s,r,o){var u=s.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=o;var f=s.baseQueue,g=u.pending;if(g!==null){if(f!==null){var T=f.next;f.next=g.next,g.next=T}r.baseQueue=f=g,u.pending=null}if(g=s.baseState,f===null)s.memoizedState=g;else{r=f.next;var w=T=null,O=null,j=r,ee=!1;do{var ae=j.lane&-536870913;if(ae!==j.lane?(Ze&ae)===ae:(Cr&ae)===ae){var K=j.revertLane;if(K===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),ae===Ko&&(ee=!0);else if((Cr&K)===K){j=j.next,K===Ko&&(ee=!0);continue}else ae={lane:0,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},O===null?(w=O=ae,T=g):O=O.next=ae,Ve.lanes|=K,Lr|=K;ae=j.action,Fa&&o(g,ae),g=j.hasEagerState?j.eagerState:o(g,ae)}else K={lane:ae,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},O===null?(w=O=K,T=g):O=O.next=K,Ve.lanes|=ae,Lr|=ae;j=j.next}while(j!==null&&j!==r);if(O===null?T=g:O.next=w,!Yn(g,s.memoizedState)&&(nn=!0,ee&&(o=$o,o!==null)))throw o;s.memoizedState=g,s.baseState=T,s.baseQueue=O,u.lastRenderedState=g}return f===null&&(u.lanes=0),[s.memoizedState,u.dispatch]}function em(s){var r=Bt(),o=r.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=s;var u=o.dispatch,f=o.pending,g=r.memoizedState;if(f!==null){o.pending=null;var T=f=f.next;do g=s(g,T.action),T=T.next;while(T!==f);Yn(g,r.memoizedState)||(nn=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),o.lastRenderedState=g}return[g,u]}function _E(s,r,o){var u=Ve,f=Bt(),g=it;if(g){if(o===void 0)throw Error(i(407));o=o()}else o=r();var T=!Yn((lt||f).memoizedState,o);if(T&&(f.memoizedState=o,nn=!0),f=f.queue,im(EE.bind(null,u,f,s),[s]),f.getSnapshot!==r||T||jt!==null&&jt.memoizedState.tag&1){if(u.flags|=2048,Xo(9,vE.bind(null,u,f,o,r),{destroy:void 0},null),dt===null)throw Error(i(349));g||(Cr&60)!==0||yE(u,r,o)}return o}function yE(s,r,o){s.flags|=16384,s={getSnapshot:r,value:o},r=Ve.updateQueue,r===null?(r=Qh(),Ve.updateQueue=r,r.stores=[s]):(o=r.stores,o===null?r.stores=[s]:o.push(s))}function vE(s,r,o,u){r.value=o,r.getSnapshot=u,TE(r)&&SE(s)}function EE(s,r,o){return o(function(){TE(r)&&SE(s)})}function TE(s){var r=s.getSnapshot;s=s.value;try{var o=r();return!Yn(s,o)}catch{return!0}}function SE(s){var r=br(s,2);r!==null&&Un(r,s,2)}function tm(s){var r=Hn();if(typeof s=="function"){var o=s;if(s=o(),Fa){zi(!0);try{o()}finally{zi(!1)}}}return r.memoizedState=r.baseState=s,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Os,lastRenderedState:s},r}function bE(s,r,o,u){return s.baseState=o,Jp(s,lt,typeof u=="function"?u:Os)}function RI(s,r,o,u,f){if(tf(s))throw Error(i(485));if(s=r.action,s!==null){var g={payload:f,action:s,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){g.listeners.push(T)}};I.T!==null?o(!0):g.isTransition=!1,u(g),o=r.pending,o===null?(g.next=r.pending=g,AE(r,g)):(g.next=o.next,r.pending=o.next=g)}}function AE(s,r){var o=r.action,u=r.payload,f=s.state;if(r.isTransition){var g=I.T,T={};I.T=T;try{var w=o(f,u),O=I.S;O!==null&&O(T,w),wE(s,r,w)}catch(j){nm(s,r,j)}finally{I.T=g}}else try{g=o(f,u),wE(s,r,g)}catch(j){nm(s,r,j)}}function wE(s,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){CE(s,r,u)},function(u){return nm(s,r,u)}):CE(s,r,o)}function CE(s,r,o){r.status="fulfilled",r.value=o,RE(r),s.state=o,r=s.pending,r!==null&&(o=r.next,o===r?s.pending=null:(o=o.next,r.next=o,AE(s,o)))}function nm(s,r,o){var u=s.pending;if(s.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,RE(r),r=r.next;while(r!==u)}s.action=null}function RE(s){s=s.listeners;for(var r=0;r<s.length;r++)(0,s[r])()}function IE(s,r){return r}function NE(s,r){if(it){var o=dt.formState;if(o!==null){e:{var u=Ve;if(it){if(hn){t:{for(var f=hn,g=Zi;f.nodeType!==8;){if(!g){f=null;break t}if(f=ki(f.nextSibling),f===null){f=null;break t}}g=f.data,f=g==="F!"||g==="F"?f:null}if(f){hn=ki(f.nextSibling),u=f.data==="F!";break e}}ja(u)}u=!1}u&&(r=o[0])}}return o=Hn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:IE,lastRenderedState:r},o.queue=u,o=KE.bind(null,Ve,u),u.dispatch=o,u=tm(!1),g=lm.bind(null,Ve,!1,u.queue),u=Hn(),f={state:r,dispatch:null,action:s,pending:null},u.queue=f,o=RI.bind(null,Ve,f,g,o),f.dispatch=o,u.memoizedState=s,[r,o,!1]}function xE(s){var r=Bt();return OE(r,lt,s)}function OE(s,r,o){r=Jp(s,r,IE)[0],s=Zh(Os)[0],r=typeof r=="object"&&r!==null&&typeof r.then=="function"?xu(r):r;var u=Bt(),f=u.queue,g=f.dispatch;return o!==u.memoizedState&&(Ve.flags|=2048,Xo(9,II.bind(null,f,o),{destroy:void 0},null)),[r,g,s]}function II(s,r){s.action=r}function DE(s){var r=Bt(),o=lt;if(o!==null)return OE(r,o,s);Bt(),r=r.memoizedState,o=Bt();var u=o.queue.dispatch;return o.memoizedState=s,[r,u,!1]}function Xo(s,r,o,u){return s={tag:s,create:r,inst:o,deps:u,next:null},r=Ve.updateQueue,r===null&&(r=Qh(),Ve.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=s.next=s:(u=o.next,o.next=s,s.next=u,r.lastEffect=s),s}function kE(){return Bt().memoizedState}function Jh(s,r,o,u){var f=Hn();Ve.flags|=s,f.memoizedState=Xo(1|r,o,{destroy:void 0},u===void 0?null:u)}function ef(s,r,o,u){var f=Bt();u=u===void 0?null:u;var g=f.memoizedState.inst;lt!==null&&u!==null&&Kp(u,lt.memoizedState.deps)?f.memoizedState=Xo(r,o,g,u):(Ve.flags|=s,f.memoizedState=Xo(1|r,o,g,u))}function PE(s,r){Jh(8390656,8,s,r)}function im(s,r){ef(2048,8,s,r)}function ME(s,r){return ef(4,2,s,r)}function LE(s,r){return ef(4,4,s,r)}function UE(s,r){if(typeof r=="function"){s=s();var o=r(s);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return s=s(),r.current=s,function(){r.current=null}}function VE(s,r,o){o=o!=null?o.concat([s]):null,ef(4,4,UE.bind(null,r,s),o)}function sm(){}function jE(s,r){var o=Bt();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&Kp(r,u[1])?u[0]:(o.memoizedState=[s,r],s)}function BE(s,r){var o=Bt();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&Kp(r,u[1]))return u[0];if(u=s(),Fa){zi(!0);try{s()}finally{zi(!1)}}return o.memoizedState=[u,r],u}function rm(s,r,o){return o===void 0||(Cr&1073741824)!==0?s.memoizedState=r:(s.memoizedState=o,s=FT(),Ve.lanes|=s,Lr|=s,o)}function zE(s,r,o,u){return Yn(o,r)?o:Wo.current!==null?(s=rm(s,o,u),Yn(s,r)||(nn=!0),s):(Cr&42)===0?(nn=!0,s.memoizedState=o):(s=FT(),Ve.lanes|=s,Lr|=s,r)}function FE(s,r,o,u,f){var g=Q.p;Q.p=g!==0&&8>g?g:8;var T=I.T,w={};I.T=w,lm(s,!1,r,o);try{var O=f(),j=I.S;if(j!==null&&j(w,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var ee=AI(O,u);Ou(s,r,ee,Jn(s))}else Ou(s,r,u,Jn(s))}catch(ae){Ou(s,r,{then:function(){},status:"rejected",reason:ae},Jn())}finally{Q.p=g,I.T=T}}function NI(){}function am(s,r,o,u){if(s.tag!==5)throw Error(i(476));var f=HE(s).queue;FE(s,f,r,oe,o===null?NI:function(){return qE(s),o(u)})}function HE(s){var r=s.memoizedState;if(r!==null)return r;r={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Os,lastRenderedState:oe},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Os,lastRenderedState:o},next:null},s.memoizedState=r,s=s.alternate,s!==null&&(s.memoizedState=r),r}function qE(s){var r=HE(s).next.queue;Ou(s,r,{},Jn())}function om(){return En(Xu)}function GE(){return Bt().memoizedState}function WE(){return Bt().memoizedState}function xI(s){for(var r=s.return;r!==null;){switch(r.tag){case 24:case 3:var o=Jn();s=xr(o);var u=Or(r,s,o);u!==null&&(Un(u,r,o),Pu(u,r,o)),r={cache:qp()},s.payload=r;return}r=r.return}}function OI(s,r,o){var u=Jn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},tf(s)?$E(r,o):(o=Up(s,r,o,u),o!==null&&(Un(o,s,u),YE(o,r,u)))}function KE(s,r,o){var u=Jn();Ou(s,r,o,u)}function Ou(s,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(tf(s))$E(r,f);else{var g=s.alternate;if(s.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var T=r.lastRenderedState,w=g(T,o);if(f.hasEagerState=!0,f.eagerState=w,Yn(w,T))return Vh(s,r,f,0),dt===null&&Uh(),!1}catch{}finally{}if(o=Up(s,r,f,u),o!==null)return Un(o,s,u),YE(o,r,u),!0}return!1}function lm(s,r,o,u){if(u={lane:2,revertLane:Xm(),action:u,hasEagerState:!1,eagerState:null,next:null},tf(s)){if(r)throw Error(i(479))}else r=Up(s,o,u,2),r!==null&&Un(r,s,2)}function tf(s){var r=s.alternate;return s===Ve||r!==null&&r===Ve}function $E(s,r){Yo=$h=!0;var o=s.pending;o===null?r.next=r:(r.next=o.next,o.next=r),s.pending=r}function YE(s,r,o){if((o&4194176)!==0){var u=r.lanes;u&=s.pendingLanes,o|=u,r.lanes=o,dr(s,o)}}var es={readContext:En,use:Xh,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useLayoutEffect:Mt,useInsertionEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useSyncExternalStore:Mt,useId:Mt};es.useCacheRefresh=Mt,es.useMemoCache=Mt,es.useHostTransitionStatus=Mt,es.useFormState=Mt,es.useActionState=Mt,es.useOptimistic=Mt;var Ha={readContext:En,use:Xh,useCallback:function(s,r){return Hn().memoizedState=[s,r===void 0?null:r],s},useContext:En,useEffect:PE,useImperativeHandle:function(s,r,o){o=o!=null?o.concat([s]):null,Jh(4194308,4,UE.bind(null,r,s),o)},useLayoutEffect:function(s,r){return Jh(4194308,4,s,r)},useInsertionEffect:function(s,r){Jh(4,2,s,r)},useMemo:function(s,r){var o=Hn();r=r===void 0?null:r;var u=s();if(Fa){zi(!0);try{s()}finally{zi(!1)}}return o.memoizedState=[u,r],u},useReducer:function(s,r,o){var u=Hn();if(o!==void 0){var f=o(r);if(Fa){zi(!0);try{o(r)}finally{zi(!1)}}}else f=r;return u.memoizedState=u.baseState=f,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:s,lastRenderedState:f},u.queue=s,s=s.dispatch=OI.bind(null,Ve,s),[u.memoizedState,s]},useRef:function(s){var r=Hn();return s={current:s},r.memoizedState=s},useState:function(s){s=tm(s);var r=s.queue,o=KE.bind(null,Ve,r);return r.dispatch=o,[s.memoizedState,o]},useDebugValue:sm,useDeferredValue:function(s,r){var o=Hn();return rm(o,s,r)},useTransition:function(){var s=tm(!1);return s=FE.bind(null,Ve,s.queue,!0,!1),Hn().memoizedState=s,[!1,s]},useSyncExternalStore:function(s,r,o){var u=Ve,f=Hn();if(it){if(o===void 0)throw Error(i(407));o=o()}else{if(o=r(),dt===null)throw Error(i(349));(Ze&60)!==0||yE(u,r,o)}f.memoizedState=o;var g={value:o,getSnapshot:r};return f.queue=g,PE(EE.bind(null,u,g,s),[s]),u.flags|=2048,Xo(9,vE.bind(null,u,g,o,r),{destroy:void 0},null),o},useId:function(){var s=Hn(),r=dt.identifierPrefix;if(it){var o=Ns,u=Is;o=(u&~(1<<32-kn(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=Yh++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=wI++,r=":"+r+"r"+o.toString(32)+":";return s.memoizedState=r},useCacheRefresh:function(){return Hn().memoizedState=xI.bind(null,Ve)}};Ha.useMemoCache=Zp,Ha.useHostTransitionStatus=om,Ha.useFormState=NE,Ha.useActionState=NE,Ha.useOptimistic=function(s){var r=Hn();r.memoizedState=r.baseState=s;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=lm.bind(null,Ve,!0,o),o.dispatch=r,[s,r]};var Rr={readContext:En,use:Xh,useCallback:jE,useContext:En,useEffect:im,useImperativeHandle:VE,useInsertionEffect:ME,useLayoutEffect:LE,useMemo:BE,useReducer:Zh,useRef:kE,useState:function(){return Zh(Os)},useDebugValue:sm,useDeferredValue:function(s,r){var o=Bt();return zE(o,lt.memoizedState,s,r)},useTransition:function(){var s=Zh(Os)[0],r=Bt().memoizedState;return[typeof s=="boolean"?s:xu(s),r]},useSyncExternalStore:_E,useId:GE};Rr.useCacheRefresh=WE,Rr.useMemoCache=Zp,Rr.useHostTransitionStatus=om,Rr.useFormState=xE,Rr.useActionState=xE,Rr.useOptimistic=function(s,r){var o=Bt();return bE(o,lt,s,r)};var qa={readContext:En,use:Xh,useCallback:jE,useContext:En,useEffect:im,useImperativeHandle:VE,useInsertionEffect:ME,useLayoutEffect:LE,useMemo:BE,useReducer:em,useRef:kE,useState:function(){return em(Os)},useDebugValue:sm,useDeferredValue:function(s,r){var o=Bt();return lt===null?rm(o,s,r):zE(o,lt.memoizedState,s,r)},useTransition:function(){var s=em(Os)[0],r=Bt().memoizedState;return[typeof s=="boolean"?s:xu(s),r]},useSyncExternalStore:_E,useId:GE};qa.useCacheRefresh=WE,qa.useMemoCache=Zp,qa.useHostTransitionStatus=om,qa.useFormState=DE,qa.useActionState=DE,qa.useOptimistic=function(s,r){var o=Bt();return lt!==null?bE(o,lt,s,r):(o.baseState=s,[s,o.queue.dispatch])};function um(s,r,o,u){r=s.memoizedState,o=o(u,r),o=o==null?r:N({},r,o),s.memoizedState=o,s.lanes===0&&(s.updateQueue.baseState=o)}var cm={isMounted:function(s){return(s=s._reactInternals)?he(s)===s:!1},enqueueSetState:function(s,r,o){s=s._reactInternals;var u=Jn(),f=xr(u);f.payload=r,o!=null&&(f.callback=o),r=Or(s,f,u),r!==null&&(Un(r,s,u),Pu(r,s,u))},enqueueReplaceState:function(s,r,o){s=s._reactInternals;var u=Jn(),f=xr(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=Or(s,f,u),r!==null&&(Un(r,s,u),Pu(r,s,u))},enqueueForceUpdate:function(s,r){s=s._reactInternals;var o=Jn(),u=xr(o);u.tag=2,r!=null&&(u.callback=r),r=Or(s,u,o),r!==null&&(Un(r,s,o),Pu(r,s,o))}};function QE(s,r,o,u,f,g,T){return s=s.stateNode,typeof s.shouldComponentUpdate=="function"?s.shouldComponentUpdate(u,g,T):r.prototype&&r.prototype.isPureReactComponent?!yu(o,u)||!yu(f,g):!0}function XE(s,r,o,u){s=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==s&&cm.enqueueReplaceState(r,r.state,null)}function Ga(s,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(s=s.defaultProps){o===r&&(o=N({},o));for(var f in s)o[f]===void 0&&(o[f]=s[f])}return o}var nf=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)};function ZE(s){nf(s)}function JE(s){console.error(s)}function eT(s){nf(s)}function sf(s,r){try{var o=s.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function tT(s,r,o){try{var u=s.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function hm(s,r,o){return o=xr(o),o.tag=3,o.payload={element:null},o.callback=function(){sf(s,r)},o}function nT(s){return s=xr(s),s.tag=3,s}function iT(s,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var g=u.value;s.payload=function(){return f(g)},s.callback=function(){tT(r,o,u)}}var T=o.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(s.callback=function(){tT(r,o,u),typeof f!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var w=u.stack;this.componentDidCatch(u.value,{componentStack:w!==null?w:""})})}function DI(s,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&ku(r,o,f,!0),o=_i.current,o!==null){switch(o.tag){case 13:return Ji===null?Wm():o.alternate===null&&It===0&&(It=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===zp?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),$m(s,u,f)),!1;case 22:return o.flags|=65536,u===zp?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),$m(s,u,f)),!1}throw Error(i(435,o.tag))}return $m(s,u,f),Wm(),!1}if(it)return r=_i.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==Bp&&(s=Error(i(422),{cause:u}),Su(pi(s,o)))):(u!==Bp&&(r=Error(i(423),{cause:u}),Su(pi(r,o))),s=s.current.alternate,s.flags|=65536,f&=-f,s.lanes|=f,u=pi(u,o),f=hm(s.stateNode,u,f),Cm(s,f),It!==4&&(It=2)),!1;var g=Error(i(520),{cause:u});if(g=pi(g,o),Fu===null?Fu=[g]:Fu.push(g),It!==4&&(It=2),r===null)return!0;u=pi(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,s=f&-f,o.lanes|=s,s=hm(o.stateNode,u,s),Cm(o,s),!1;case 1:if(r=o.type,g=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ur===null||!Ur.has(g))))return o.flags|=65536,f&=-f,o.lanes|=f,f=nT(f),iT(f,s,o,u),Cm(o,f),!1}o=o.return}while(o!==null);return!1}var sT=Error(i(461)),nn=!1;function fn(s,r,o,u){r.child=s===null?uE(r,null,o,u):Ba(r,s.child,o,u)}function rT(s,r,o,u,f){o=o.render;var g=r.ref;if("ref"in u){var T={};for(var w in u)w!=="ref"&&(T[w]=u[w])}else T=u;return Ka(r),u=$p(s,r,o,T,g,f),w=Yp(),s!==null&&!nn?(Qp(s,r,f),Ds(s,r,f)):(it&&w&&Vp(r),r.flags|=1,fn(s,r,u,f),r.child)}function aT(s,r,o,u,f){if(s===null){var g=o.type;return typeof g=="function"&&!Pm(g)&&g.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=g,oT(s,r,g,u,f)):(s=uf(o.type,null,u,r,r.mode,f),s.ref=r.ref,s.return=r,r.child=s)}if(g=s.child,!Em(s,f)){var T=g.memoizedProps;if(o=o.compare,o=o!==null?o:yu,o(T,u)&&s.ref===r.ref)return Ds(s,r,f)}return r.flags|=1,s=Mr(g,u),s.ref=r.ref,s.return=r,r.child=s}function oT(s,r,o,u,f){if(s!==null){var g=s.memoizedProps;if(yu(g,u)&&s.ref===r.ref)if(nn=!1,r.pendingProps=u=g,Em(s,f))(s.flags&131072)!==0&&(nn=!0);else return r.lanes=s.lanes,Ds(s,r,f)}return fm(s,r,o,u,f)}function lT(s,r,o){var u=r.pendingProps,f=u.children,g=(r.stateNode._pendingVisibility&2)!==0,T=s!==null?s.memoizedState:null;if(Du(s,r),u.mode==="hidden"||g){if((r.flags&128)!==0){if(u=T!==null?T.baseLanes|o:o,s!==null){for(f=r.child=s.child,g=0;f!==null;)g=g|f.lanes|f.childLanes,f=f.sibling;r.childLanes=g&~u}else r.childLanes=0,r.child=null;return uT(s,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},s!==null&&Kh(r,T!==null?T.cachePool:null),T!==null?cE(r,T):Fp(),hE(r);else return r.lanes=r.childLanes=536870912,uT(s,r,T!==null?T.baseLanes|o:o,o)}else T!==null?(Kh(r,T.cachePool),cE(r,T),wr(),r.memoizedState=null):(s!==null&&Kh(r,null),Fp(),wr());return fn(s,r,f,o),r.child}function uT(s,r,o,u){var f=Wp();return f=f===null?null:{parent:Kt._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},s!==null&&Kh(r,null),Fp(),hE(r),s!==null&&ku(s,r,u,!0),null}function Du(s,r){var o=r.ref;if(o===null)s!==null&&s.ref!==null&&(r.flags|=2097664);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(s===null||s.ref!==o)&&(r.flags|=2097664)}}function fm(s,r,o,u,f){return Ka(r),o=$p(s,r,o,u,void 0,f),u=Yp(),s!==null&&!nn?(Qp(s,r,f),Ds(s,r,f)):(it&&u&&Vp(r),r.flags|=1,fn(s,r,o,f),r.child)}function cT(s,r,o,u,f,g){return Ka(r),r.updateQueue=null,o=gE(r,u,o,f),mE(s),u=Yp(),s!==null&&!nn?(Qp(s,r,g),Ds(s,r,g)):(it&&u&&Vp(r),r.flags|=1,fn(s,r,o,g),r.child)}function hT(s,r,o,u,f){if(Ka(r),r.stateNode===null){var g=Fo,T=o.contextType;typeof T=="object"&&T!==null&&(g=En(T)),g=new o(u,g),r.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=cm,r.stateNode=g,g._reactInternals=r,g=r.stateNode,g.props=u,g.state=r.memoizedState,g.refs={},Am(r),T=o.contextType,g.context=typeof T=="object"&&T!==null?En(T):Fo,g.state=r.memoizedState,T=o.getDerivedStateFromProps,typeof T=="function"&&(um(r,o,T,u),g.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(T=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),T!==g.state&&cm.enqueueReplaceState(g,g.state,null),Lu(r,u,g,f),Mu(),g.state=r.memoizedState),typeof g.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(s===null){g=r.stateNode;var w=r.memoizedProps,O=Ga(o,w);g.props=O;var j=g.context,ee=o.contextType;T=Fo,typeof ee=="object"&&ee!==null&&(T=En(ee));var ae=o.getDerivedStateFromProps;ee=typeof ae=="function"||typeof g.getSnapshotBeforeUpdate=="function",w=r.pendingProps!==w,ee||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w||j!==T)&&XE(r,g,u,T),Nr=!1;var K=r.memoizedState;g.state=K,Lu(r,u,g,f),Mu(),j=r.memoizedState,w||K!==j||Nr?(typeof ae=="function"&&(um(r,o,ae,u),j=r.memoizedState),(O=Nr||QE(r,o,O,u,K,j,T))?(ee||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(r.flags|=4194308)):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=j),g.props=u,g.state=j,g.context=T,u=O):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{g=r.stateNode,wm(s,r),T=r.memoizedProps,ee=Ga(o,T),g.props=ee,ae=r.pendingProps,K=g.context,j=o.contextType,O=Fo,typeof j=="object"&&j!==null&&(O=En(j)),w=o.getDerivedStateFromProps,(j=typeof w=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(T!==ae||K!==O)&&XE(r,g,u,O),Nr=!1,K=r.memoizedState,g.state=K,Lu(r,u,g,f),Mu();var J=r.memoizedState;T!==ae||K!==J||Nr||s!==null&&s.dependencies!==null&&rf(s.dependencies)?(typeof w=="function"&&(um(r,o,w,u),J=r.memoizedState),(ee=Nr||QE(r,o,ee,u,K,J,O)||s!==null&&s.dependencies!==null&&rf(s.dependencies))?(j||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,J,O),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,J,O)),typeof g.componentDidUpdate=="function"&&(r.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof g.componentDidUpdate!="function"||T===s.memoizedProps&&K===s.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===s.memoizedProps&&K===s.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=J),g.props=u,g.state=J,g.context=O,u=ee):(typeof g.componentDidUpdate!="function"||T===s.memoizedProps&&K===s.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===s.memoizedProps&&K===s.memoizedState||(r.flags|=1024),u=!1)}return g=u,Du(s,r),u=(r.flags&128)!==0,g||u?(g=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:g.render(),r.flags|=1,s!==null&&u?(r.child=Ba(r,s.child,null,f),r.child=Ba(r,null,o,f)):fn(s,r,o,f),r.memoizedState=g.state,s=r.child):s=Ds(s,r,f),s}function fT(s,r,o,u){return Tu(),r.flags|=256,fn(s,r,o,u),r.child}var dm={dehydrated:null,treeContext:null,retryLane:0};function pm(s){return{baseLanes:s,cachePool:pE()}}function mm(s,r,o){return s=s!==null?s.childLanes&~o:0,r&&(s|=Ti),s}function dT(s,r,o){var u=r.pendingProps,f=!1,g=(r.flags&128)!==0,T;if((T=g)||(T=s!==null&&s.memoizedState===null?!1:(Wt.current&2)!==0),T&&(f=!0,r.flags&=-129),T=(r.flags&32)!==0,r.flags&=-33,s===null){if(it){if(f?Ar(r):wr(),it){var w=hn,O;if(O=w){e:{for(O=w,w=Zi;O.nodeType!==8;){if(!w){w=null;break e}if(O=ki(O.nextSibling),O===null){w=null;break e}}w=O}w!==null?(r.memoizedState={dehydrated:w,treeContext:Ua!==null?{id:Is,overflow:Ns}:null,retryLane:536870912},O=Ei(18,null,null,0),O.stateNode=w,O.return=r,r.child=O,Ln=r,hn=null,O=!0):O=!1}O||ja(r)}if(w=r.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return w.data==="$!"?r.lanes=16:r.lanes=536870912,null;xs(r)}return w=u.children,u=u.fallback,f?(wr(),f=r.mode,w=_m({mode:"hidden",children:w},f),u=Ya(u,f,o,null),w.return=r,u.return=r,w.sibling=u,r.child=w,f=r.child,f.memoizedState=pm(o),f.childLanes=mm(s,T,o),r.memoizedState=dm,u):(Ar(r),gm(r,w))}if(O=s.memoizedState,O!==null&&(w=O.dehydrated,w!==null)){if(g)r.flags&256?(Ar(r),r.flags&=-257,r=ym(s,r,o)):r.memoizedState!==null?(wr(),r.child=s.child,r.flags|=128,r=null):(wr(),f=u.fallback,w=r.mode,u=_m({mode:"visible",children:u.children},w),f=Ya(f,w,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,Ba(r,s.child,null,o),u=r.child,u.memoizedState=pm(o),u.childLanes=mm(s,T,o),r.memoizedState=dm,r=f);else if(Ar(r),w.data==="$!"){if(T=w.nextSibling&&w.nextSibling.dataset,T)var j=T.dgst;T=j,u=Error(i(419)),u.stack="",u.digest=T,Su({value:u,source:null,stack:null}),r=ym(s,r,o)}else if(nn||ku(s,r,o,!1),T=(o&s.childLanes)!==0,nn||T){if(T=dt,T!==null){if(u=o&-o,(u&42)!==0)u=1;else switch(u){case 2:u=1;break;case 8:u=4;break;case 32:u=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:u=64;break;case 268435456:u=134217728;break;default:u=0}if(u=(u&(T.suspendedLanes|o))!==0?0:u,u!==0&&u!==O.retryLane)throw O.retryLane=u,br(s,u),Un(T,s,u),sT}w.data==="$?"||Wm(),r=ym(s,r,o)}else w.data==="$?"?(r.flags|=128,r.child=s.child,r=KI.bind(null,s),w._reactRetry=r,r=null):(s=O.treeContext,hn=ki(w.nextSibling),Ln=r,it=!0,Oi=null,Zi=!1,s!==null&&(mi[gi++]=Is,mi[gi++]=Ns,mi[gi++]=Ua,Is=s.id,Ns=s.overflow,Ua=r),r=gm(r,u.children),r.flags|=4096);return r}return f?(wr(),f=u.fallback,w=r.mode,O=s.child,j=O.sibling,u=Mr(O,{mode:"hidden",children:u.children}),u.subtreeFlags=O.subtreeFlags&31457280,j!==null?f=Mr(j,f):(f=Ya(f,w,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,w=s.child.memoizedState,w===null?w=pm(o):(O=w.cachePool,O!==null?(j=Kt._currentValue,O=O.parent!==j?{parent:j,pool:j}:O):O=pE(),w={baseLanes:w.baseLanes|o,cachePool:O}),f.memoizedState=w,f.childLanes=mm(s,T,o),r.memoizedState=dm,u):(Ar(r),o=s.child,s=o.sibling,o=Mr(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,s!==null&&(T=r.deletions,T===null?(r.deletions=[s],r.flags|=16):T.push(s)),r.child=o,r.memoizedState=null,o)}function gm(s,r){return r=_m({mode:"visible",children:r},s.mode),r.return=s,s.child=r}function _m(s,r){return jT(s,r,0,null)}function ym(s,r,o){return Ba(r,s.child,null,o),s=gm(r,r.pendingProps.children),s.flags|=2,r.memoizedState=null,s}function pT(s,r,o){s.lanes|=r;var u=s.alternate;u!==null&&(u.lanes|=r),Sm(s.return,r,o)}function vm(s,r,o,u,f){var g=s.memoizedState;g===null?s.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=o,g.tailMode=f)}function mT(s,r,o){var u=r.pendingProps,f=u.revealOrder,g=u.tail;if(fn(s,r,u.children,o),u=Wt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(s!==null&&(s.flags&128)!==0)e:for(s=r.child;s!==null;){if(s.tag===13)s.memoizedState!==null&&pT(s,o,r);else if(s.tag===19)pT(s,o,r);else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}u&=1}switch(Re(Wt,u),f){case"forwards":for(o=r.child,f=null;o!==null;)s=o.alternate,s!==null&&Wh(s)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),vm(r,!1,f,o,g);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(s=f.alternate,s!==null&&Wh(s)===null){r.child=f;break}s=f.sibling,f.sibling=o,o=f,f=s}vm(r,!0,o,null,g);break;case"together":vm(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ds(s,r,o){if(s!==null&&(r.dependencies=s.dependencies),Lr|=r.lanes,(o&r.childLanes)===0)if(s!==null){if(ku(s,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(s!==null&&r.child!==s.child)throw Error(i(153));if(r.child!==null){for(s=r.child,o=Mr(s,s.pendingProps),r.child=o,o.return=r;s.sibling!==null;)s=s.sibling,o=o.sibling=Mr(s,s.pendingProps),o.return=r;o.sibling=null}return r.child}function Em(s,r){return(s.lanes&r)!==0?!0:(s=s.dependencies,!!(s!==null&&rf(s)))}function kI(s,r,o){switch(r.tag){case 3:ri(r,r.stateNode.containerInfo),Ir(r,Kt,s.memoizedState.cache),Tu();break;case 27:case 5:Bi(r);break;case 4:ri(r,r.stateNode.containerInfo);break;case 10:Ir(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(Ar(r),r.flags|=128,null):(o&r.child.childLanes)!==0?dT(s,r,o):(Ar(r),s=Ds(s,r,o),s!==null?s.sibling:null);Ar(r);break;case 19:var f=(s.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(ku(s,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return mT(s,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Re(Wt,Wt.current),u)break;return null;case 22:case 23:return r.lanes=0,lT(s,r,o);case 24:Ir(r,Kt,s.memoizedState.cache)}return Ds(s,r,o)}function gT(s,r,o){if(s!==null)if(s.memoizedProps!==r.pendingProps)nn=!0;else{if(!Em(s,o)&&(r.flags&128)===0)return nn=!1,kI(s,r,o);nn=(s.flags&131072)!==0}else nn=!1,it&&(r.flags&1048576)!==0&&eE(r,zh,r.index);switch(r.lanes=0,r.tag){case 16:e:{s=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")Pm(u)?(s=Ga(u,s),r.tag=1,r=hT(null,r,u,s,o)):(r.tag=0,r=fm(null,r,u,s,o));else{if(u!=null){if(f=u.$$typeof,f===V){r.tag=11,r=rT(null,r,u,s,o);break e}else if(f===B){r.tag=14,r=aT(null,r,u,s,o);break e}}throw r=R(u)||u,Error(i(306,r,""))}}return r;case 0:return fm(s,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=Ga(u,r.pendingProps),hT(s,r,u,f,o);case 3:e:{if(ri(r,r.stateNode.containerInfo),s===null)throw Error(i(387));var g=r.pendingProps;f=r.memoizedState,u=f.element,wm(s,r),Lu(r,g,null,o);var T=r.memoizedState;if(g=T.cache,Ir(r,Kt,g),g!==f.cache&&bm(r,[Kt],o,!0),Mu(),g=T.element,f.isDehydrated)if(f={element:g,isDehydrated:!1,cache:T.cache},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){r=fT(s,r,g,o);break e}else if(g!==u){u=pi(Error(i(424)),r),Su(u),r=fT(s,r,g,o);break e}else for(hn=ki(r.stateNode.containerInfo.firstChild),Ln=r,it=!0,Oi=null,Zi=!0,o=uE(r,null,g,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Tu(),g===u){r=Ds(s,r,o);break e}fn(s,r,g,o)}r=r.child}return r;case 26:return Du(s,r),s===null?(o=v0(r.type,null,r.pendingProps,null))?r.memoizedState=o:it||(o=r.type,s=r.pendingProps,u=Tf(Zt.current).createElement(o),u[Jt]=r,u[Ht]=s,dn(u,o,s),Et(u),r.stateNode=u):r.memoizedState=v0(r.type,s.memoizedProps,r.pendingProps,s.memoizedState),null;case 27:return Bi(r),s===null&&it&&(u=r.stateNode=g0(r.type,r.pendingProps,Zt.current),Ln=r,Zi=!0,hn=ki(u.firstChild)),u=r.pendingProps.children,s!==null||it?fn(s,r,u,o):r.child=Ba(r,null,u,o),Du(s,r),r.child;case 5:return s===null&&it&&((f=u=hn)&&(u=uN(u,r.type,r.pendingProps,Zi),u!==null?(r.stateNode=u,Ln=r,hn=ki(u.firstChild),Zi=!1,f=!0):f=!1),f||ja(r)),Bi(r),f=r.type,g=r.pendingProps,T=s!==null?s.memoizedProps:null,u=g.children,ag(f,g)?u=null:T!==null&&ag(f,T)&&(r.flags|=32),r.memoizedState!==null&&(f=$p(s,r,CI,null,null,o),Xu._currentValue=f),Du(s,r),fn(s,r,u,o),r.child;case 6:return s===null&&it&&((s=o=hn)&&(o=cN(o,r.pendingProps,Zi),o!==null?(r.stateNode=o,Ln=r,hn=null,s=!0):s=!1),s||ja(r)),null;case 13:return dT(s,r,o);case 4:return ri(r,r.stateNode.containerInfo),u=r.pendingProps,s===null?r.child=Ba(r,null,u,o):fn(s,r,u,o),r.child;case 11:return rT(s,r,r.type,r.pendingProps,o);case 7:return fn(s,r,r.pendingProps,o),r.child;case 8:return fn(s,r,r.pendingProps.children,o),r.child;case 12:return fn(s,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,Ir(r,r.type,u.value),fn(s,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,Ka(r),f=En(f),u=u(f),r.flags|=1,fn(s,r,u,o),r.child;case 14:return aT(s,r,r.type,r.pendingProps,o);case 15:return oT(s,r,r.type,r.pendingProps,o);case 19:return mT(s,r,o);case 22:return lT(s,r,o);case 24:return Ka(r),u=En(Kt),s===null?(f=Wp(),f===null&&(f=dt,g=qp(),f.pooledCache=g,g.refCount++,g!==null&&(f.pooledCacheLanes|=o),f=g),r.memoizedState={parent:u,cache:f},Am(r),Ir(r,Kt,f)):((s.lanes&o)!==0&&(wm(s,r),Lu(r,null,null,o),Mu()),f=s.memoizedState,g=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),Ir(r,Kt,u)):(u=g.cache,Ir(r,Kt,u),u!==f.cache&&bm(r,[Kt],o,!0))),fn(s,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(i(156,r.tag))}var Tm=ye(null),Wa=null,ks=null;function Ir(s,r,o){Re(Tm,r._currentValue),r._currentValue=o}function Ps(s){s._currentValue=Tm.current,pe(Tm)}function Sm(s,r,o){for(;s!==null;){var u=s.alternate;if((s.childLanes&r)!==r?(s.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),s===o)break;s=s.return}}function bm(s,r,o,u){var f=s.child;for(f!==null&&(f.return=s);f!==null;){var g=f.dependencies;if(g!==null){var T=f.child;g=g.firstContext;e:for(;g!==null;){var w=g;g=f;for(var O=0;O<r.length;O++)if(w.context===r[O]){g.lanes|=o,w=g.alternate,w!==null&&(w.lanes|=o),Sm(g.return,o,s),u||(T=null);break e}g=w.next}}else if(f.tag===18){if(T=f.return,T===null)throw Error(i(341));T.lanes|=o,g=T.alternate,g!==null&&(g.lanes|=o),Sm(T,o,s),T=null}else T=f.child;if(T!==null)T.return=f;else for(T=f;T!==null;){if(T===s){T=null;break}if(f=T.sibling,f!==null){f.return=T.return,T=f;break}T=T.return}f=T}}function ku(s,r,o,u){s=null;for(var f=r,g=!1;f!==null;){if(!g){if((f.flags&524288)!==0)g=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var T=f.alternate;if(T===null)throw Error(i(387));if(T=T.memoizedProps,T!==null){var w=f.type;Yn(f.pendingProps.value,T.value)||(s!==null?s.push(w):s=[w])}}else if(f===Dn.current){if(T=f.alternate,T===null)throw Error(i(387));T.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(s!==null?s.push(Xu):s=[Xu])}f=f.return}s!==null&&bm(r,s,o,u),r.flags|=262144}function rf(s){for(s=s.firstContext;s!==null;){if(!Yn(s.context._currentValue,s.memoizedValue))return!0;s=s.next}return!1}function Ka(s){Wa=s,ks=null,s=s.dependencies,s!==null&&(s.firstContext=null)}function En(s){return _T(Wa,s)}function af(s,r){return Wa===null&&Ka(s),_T(s,r)}function _T(s,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},ks===null){if(s===null)throw Error(i(308));ks=r,s.dependencies={lanes:0,firstContext:r},s.flags|=524288}else ks=ks.next=r;return o}var Nr=!1;function Am(s){s.updateQueue={baseState:s.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wm(s,r){s=s.updateQueue,r.updateQueue===s&&(r.updateQueue={baseState:s.baseState,firstBaseUpdate:s.firstBaseUpdate,lastBaseUpdate:s.lastBaseUpdate,shared:s.shared,callbacks:null})}function xr(s){return{lane:s,tag:0,payload:null,callback:null,next:null}}function Or(s,r,o){var u=s.updateQueue;if(u===null)return null;if(u=u.shared,(St&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=jh(s),Zv(s,null,o),r}return Vh(s,u,r,o),jh(s)}function Pu(s,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194176)!==0)){var u=r.lanes;u&=s.pendingLanes,o|=u,r.lanes=o,dr(s,o)}}function Cm(s,r){var o=s.updateQueue,u=s.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var T={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};g===null?f=g=T:g=g.next=T,o=o.next}while(o!==null);g===null?f=g=r:g=g.next=r}else f=g=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:u.shared,callbacks:u.callbacks},s.updateQueue=o;return}s=o.lastBaseUpdate,s===null?o.firstBaseUpdate=r:s.next=r,o.lastBaseUpdate=r}var Rm=!1;function Mu(){if(Rm){var s=$o;if(s!==null)throw s}}function Lu(s,r,o,u){Rm=!1;var f=s.updateQueue;Nr=!1;var g=f.firstBaseUpdate,T=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var O=w,j=O.next;O.next=null,T===null?g=j:T.next=j,T=O;var ee=s.alternate;ee!==null&&(ee=ee.updateQueue,w=ee.lastBaseUpdate,w!==T&&(w===null?ee.firstBaseUpdate=j:w.next=j,ee.lastBaseUpdate=O))}if(g!==null){var ae=f.baseState;T=0,ee=j=O=null,w=g;do{var K=w.lane&-536870913,J=K!==w.lane;if(J?(Ze&K)===K:(u&K)===K){K!==0&&K===Ko&&(Rm=!0),ee!==null&&(ee=ee.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Ae=s,Me=w;K=r;var Nt=o;switch(Me.tag){case 1:if(Ae=Me.payload,typeof Ae=="function"){ae=Ae.call(Nt,ae,K);break e}ae=Ae;break e;case 3:Ae.flags=Ae.flags&-65537|128;case 0:if(Ae=Me.payload,K=typeof Ae=="function"?Ae.call(Nt,ae,K):Ae,K==null)break e;ae=N({},ae,K);break e;case 2:Nr=!0}}K=w.callback,K!==null&&(s.flags|=64,J&&(s.flags|=8192),J=f.callbacks,J===null?f.callbacks=[K]:J.push(K))}else J={lane:K,tag:w.tag,payload:w.payload,callback:w.callback,next:null},ee===null?(j=ee=J,O=ae):ee=ee.next=J,T|=K;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;J=w,w=J.next,J.next=null,f.lastBaseUpdate=J,f.shared.pending=null}}while(!0);ee===null&&(O=ae),f.baseState=O,f.firstBaseUpdate=j,f.lastBaseUpdate=ee,g===null&&(f.shared.lanes=0),Lr|=T,s.lanes=T,s.memoizedState=ae}}function yT(s,r){if(typeof s!="function")throw Error(i(191,s));s.call(r)}function vT(s,r){var o=s.callbacks;if(o!==null)for(s.callbacks=null,s=0;s<o.length;s++)yT(o[s],r)}function Uu(s,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&s)===s){u=void 0;var g=o.create,T=o.inst;u=g(),T.destroy=u}o=o.next}while(o!==f)}}catch(w){ht(r,r.return,w)}}function Dr(s,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var g=f.next;u=g;do{if((u.tag&s)===s){var T=u.inst,w=T.destroy;if(w!==void 0){T.destroy=void 0,f=r;var O=o;try{w()}catch(j){ht(f,O,j)}}}u=u.next}while(u!==g)}}catch(j){ht(r,r.return,j)}}function ET(s){var r=s.updateQueue;if(r!==null){var o=s.stateNode;try{vT(r,o)}catch(u){ht(s,s.return,u)}}}function TT(s,r,o){o.props=Ga(s.type,s.memoizedProps),o.state=s.memoizedState;try{o.componentWillUnmount()}catch(u){ht(s,r,u)}}function $a(s,r){try{var o=s.ref;if(o!==null){var u=s.stateNode;switch(s.tag){case 26:case 27:case 5:var f=u;break;default:f=u}typeof o=="function"?s.refCleanup=o(f):o.current=f}}catch(g){ht(s,r,g)}}function Qn(s,r){var o=s.ref,u=s.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){ht(s,r,f)}finally{s.refCleanup=null,s=s.alternate,s!=null&&(s.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){ht(s,r,f)}else o.current=null}function ST(s){var r=s.type,o=s.memoizedProps,u=s.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){ht(s,s.return,f)}}function bT(s,r,o){try{var u=s.stateNode;sN(u,s.type,o,r),u[Ht]=r}catch(f){ht(s,s.return,f)}}function AT(s){return s.tag===5||s.tag===3||s.tag===26||s.tag===27||s.tag===4}function Im(s){e:for(;;){for(;s.sibling===null;){if(s.return===null||AT(s.return))return null;s=s.return}for(s.sibling.return=s.return,s=s.sibling;s.tag!==5&&s.tag!==6&&s.tag!==27&&s.tag!==18;){if(s.flags&2||s.child===null||s.tag===4)continue e;s.child.return=s,s=s.child}if(!(s.flags&2))return s.stateNode}}function Nm(s,r,o){var u=s.tag;if(u===5||u===6)s=s.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(s,r):o.insertBefore(s,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(s,o)):(r=o,r.appendChild(s)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Ef));else if(u!==4&&u!==27&&(s=s.child,s!==null))for(Nm(s,r,o),s=s.sibling;s!==null;)Nm(s,r,o),s=s.sibling}function of(s,r,o){var u=s.tag;if(u===5||u===6)s=s.stateNode,r?o.insertBefore(s,r):o.appendChild(s);else if(u!==4&&u!==27&&(s=s.child,s!==null))for(of(s,r,o),s=s.sibling;s!==null;)of(s,r,o),s=s.sibling}var Ms=!1,Rt=!1,xm=!1,wT=typeof WeakSet=="function"?WeakSet:Set,sn=null,CT=!1;function PI(s,r){if(s=s.containerInfo,sg=Rf,s=Hv(s),Dp(s)){if("selectionStart"in s)var o={start:s.selectionStart,end:s.selectionEnd};else e:{o=(o=s.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var T=0,w=-1,O=-1,j=0,ee=0,ae=s,K=null;t:for(;;){for(var J;ae!==o||f!==0&&ae.nodeType!==3||(w=T+f),ae!==g||u!==0&&ae.nodeType!==3||(O=T+u),ae.nodeType===3&&(T+=ae.nodeValue.length),(J=ae.firstChild)!==null;)K=ae,ae=J;for(;;){if(ae===s)break t;if(K===o&&++j===f&&(w=T),K===g&&++ee===u&&(O=T),(J=ae.nextSibling)!==null)break;ae=K,K=ae.parentNode}ae=J}o=w===-1||O===-1?null:{start:w,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(rg={focusedElem:s,selectionRange:o},Rf=!1,sn=r;sn!==null;)if(r=sn,s=r.child,(r.subtreeFlags&1028)!==0&&s!==null)s.return=r,sn=s;else for(;sn!==null;){switch(r=sn,g=r.alternate,s=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((s&1024)!==0&&g!==null){s=void 0,o=r,f=g.memoizedProps,g=g.memoizedState,u=o.stateNode;try{var Ae=Ga(o.type,f,o.elementType===o.type);s=u.getSnapshotBeforeUpdate(Ae,g),u.__reactInternalSnapshotBeforeUpdate=s}catch(Me){ht(o,o.return,Me)}}break;case 3:if((s&1024)!==0){if(s=r.stateNode.containerInfo,o=s.nodeType,o===9)ug(s);else if(o===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":ug(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((s&1024)!==0)throw Error(i(163))}if(s=r.sibling,s!==null){s.return=r.return,sn=s;break}sn=r.return}return Ae=CT,CT=!1,Ae}function RT(s,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Us(s,o),u&4&&Uu(5,o);break;case 1:if(Us(s,o),u&4)if(s=o.stateNode,r===null)try{s.componentDidMount()}catch(w){ht(o,o.return,w)}else{var f=Ga(o.type,r.memoizedProps);r=r.memoizedState;try{s.componentDidUpdate(f,r,s.__reactInternalSnapshotBeforeUpdate)}catch(w){ht(o,o.return,w)}}u&64&&ET(o),u&512&&$a(o,o.return);break;case 3:if(Us(s,o),u&64&&(u=o.updateQueue,u!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{vT(u,s)}catch(w){ht(o,o.return,w)}}break;case 26:Us(s,o),u&512&&$a(o,o.return);break;case 27:case 5:Us(s,o),r===null&&u&4&&ST(o),u&512&&$a(o,o.return);break;case 12:Us(s,o);break;case 13:Us(s,o),u&4&&xT(s,o);break;case 22:if(f=o.memoizedState!==null||Ms,!f){r=r!==null&&r.memoizedState!==null||Rt;var g=Ms,T=Rt;Ms=f,(Rt=r)&&!T?kr(s,o,(o.subtreeFlags&8772)!==0):Us(s,o),Ms=g,Rt=T}u&512&&(o.memoizedProps.mode==="manual"?$a(o,o.return):Qn(o,o.return));break;default:Us(s,o)}}function IT(s){var r=s.alternate;r!==null&&(s.alternate=null,IT(r)),s.child=null,s.deletions=null,s.sibling=null,s.tag===5&&(r=s.stateNode,r!==null&&Aa(r)),s.stateNode=null,s.return=null,s.dependencies=null,s.memoizedProps=null,s.memoizedState=null,s.pendingProps=null,s.stateNode=null,s.updateQueue=null}var zt=null,Xn=!1;function Ls(s,r,o){for(o=o.child;o!==null;)NT(s,r,o),o=o.sibling}function NT(s,r,o){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(lr,o)}catch{}switch(o.tag){case 26:Rt||Qn(o,r),Ls(s,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Rt||Qn(o,r);var u=zt,f=Xn;for(zt=o.stateNode,Ls(s,r,o),o=o.stateNode,r=o.attributes;r.length;)o.removeAttributeNode(r[0]);Aa(o),zt=u,Xn=f;break;case 5:Rt||Qn(o,r);case 6:f=zt;var g=Xn;if(zt=null,Ls(s,r,o),zt=f,Xn=g,zt!==null)if(Xn)try{s=zt,u=o.stateNode,s.nodeType===8?s.parentNode.removeChild(u):s.removeChild(u)}catch(T){ht(o,r,T)}else try{zt.removeChild(o.stateNode)}catch(T){ht(o,r,T)}break;case 18:zt!==null&&(Xn?(r=zt,o=o.stateNode,r.nodeType===8?lg(r.parentNode,o):r.nodeType===1&&lg(r,o),tc(r)):lg(zt,o.stateNode));break;case 4:u=zt,f=Xn,zt=o.stateNode.containerInfo,Xn=!0,Ls(s,r,o),zt=u,Xn=f;break;case 0:case 11:case 14:case 15:Rt||Dr(2,o,r),Rt||Dr(4,o,r),Ls(s,r,o);break;case 1:Rt||(Qn(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&TT(o,r,u)),Ls(s,r,o);break;case 21:Ls(s,r,o);break;case 22:Rt||Qn(o,r),Rt=(u=Rt)||o.memoizedState!==null,Ls(s,r,o),Rt=u;break;default:Ls(s,r,o)}}function xT(s,r){if(r.memoizedState===null&&(s=r.alternate,s!==null&&(s=s.memoizedState,s!==null&&(s=s.dehydrated,s!==null))))try{tc(s)}catch(o){ht(r,r.return,o)}}function MI(s){switch(s.tag){case 13:case 19:var r=s.stateNode;return r===null&&(r=s.stateNode=new wT),r;case 22:return s=s.stateNode,r=s._retryCache,r===null&&(r=s._retryCache=new wT),r;default:throw Error(i(435,s.tag))}}function Om(s,r){var o=MI(s);r.forEach(function(u){var f=$I.bind(null,s,u);o.has(u)||(o.add(u),u.then(f,f))})}function yi(s,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],g=s,T=r,w=T;e:for(;w!==null;){switch(w.tag){case 27:case 5:zt=w.stateNode,Xn=!1;break e;case 3:zt=w.stateNode.containerInfo,Xn=!0;break e;case 4:zt=w.stateNode.containerInfo,Xn=!0;break e}w=w.return}if(zt===null)throw Error(i(160));NT(g,T,f),zt=null,Xn=!1,g=f.alternate,g!==null&&(g.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)OT(r,s),r=r.sibling}var Di=null;function OT(s,r){var o=s.alternate,u=s.flags;switch(s.tag){case 0:case 11:case 14:case 15:yi(r,s),vi(s),u&4&&(Dr(3,s,s.return),Uu(3,s),Dr(5,s,s.return));break;case 1:yi(r,s),vi(s),u&512&&(Rt||o===null||Qn(o,o.return)),u&64&&Ms&&(s=s.updateQueue,s!==null&&(u=s.callbacks,u!==null&&(o=s.shared.hiddenCallbacks,s.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=Di;if(yi(r,s),vi(s),u&512&&(Rt||o===null||Qn(o,o.return)),u&4){var g=o!==null?o.memoizedState:null;if(u=s.memoizedState,o===null)if(u===null)if(s.stateNode===null){e:{u=s.type,o=s.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":g=f.getElementsByTagName("title")[0],(!g||g[mr]||g[Jt]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=f.createElement(u),f.head.insertBefore(g,f.querySelector("head > title"))),dn(g,u,o),g[Jt]=s,Et(g),u=g;break e;case"link":var T=S0("link","href",f).get(u+(o.href||""));if(T){for(var w=0;w<T.length;w++)if(g=T[w],g.getAttribute("href")===(o.href==null?null:o.href)&&g.getAttribute("rel")===(o.rel==null?null:o.rel)&&g.getAttribute("title")===(o.title==null?null:o.title)&&g.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){T.splice(w,1);break t}}g=f.createElement(u),dn(g,u,o),f.head.appendChild(g);break;case"meta":if(T=S0("meta","content",f).get(u+(o.content||""))){for(w=0;w<T.length;w++)if(g=T[w],g.getAttribute("content")===(o.content==null?null:""+o.content)&&g.getAttribute("name")===(o.name==null?null:o.name)&&g.getAttribute("property")===(o.property==null?null:o.property)&&g.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&g.getAttribute("charset")===(o.charSet==null?null:o.charSet)){T.splice(w,1);break t}}g=f.createElement(u),dn(g,u,o),f.head.appendChild(g);break;default:throw Error(i(468,u))}g[Jt]=s,Et(g),u=g}s.stateNode=u}else b0(f,s.type,s.stateNode);else s.stateNode=T0(f,u,s.memoizedProps);else g!==u?(g===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):g.count--,u===null?b0(f,s.type,s.stateNode):T0(f,u,s.memoizedProps)):u===null&&s.stateNode!==null&&bT(s,s.memoizedProps,o.memoizedProps)}break;case 27:if(u&4&&s.alternate===null){f=s.stateNode,g=s.memoizedProps;try{for(var O=f.firstChild;O;){var j=O.nextSibling,ee=O.nodeName;O[mr]||ee==="HEAD"||ee==="BODY"||ee==="SCRIPT"||ee==="STYLE"||ee==="LINK"&&O.rel.toLowerCase()==="stylesheet"||f.removeChild(O),O=j}for(var ae=s.type,K=f.attributes;K.length;)f.removeAttributeNode(K[0]);dn(f,ae,g),f[Jt]=s,f[Ht]=g}catch(Ae){ht(s,s.return,Ae)}}case 5:if(yi(r,s),vi(s),u&512&&(Rt||o===null||Qn(o,o.return)),s.flags&32){f=s.stateNode;try{ui(f,"")}catch(Ae){ht(s,s.return,Ae)}}u&4&&s.stateNode!=null&&(f=s.memoizedProps,bT(s,f,o!==null?o.memoizedProps:f)),u&1024&&(xm=!0);break;case 6:if(yi(r,s),vi(s),u&4){if(s.stateNode===null)throw Error(i(162));u=s.memoizedProps,o=s.stateNode;try{o.nodeValue=u}catch(Ae){ht(s,s.return,Ae)}}break;case 3:if(Af=null,f=Di,Di=Sf(r.containerInfo),yi(r,s),Di=f,vi(s),u&4&&o!==null&&o.memoizedState.isDehydrated)try{tc(r.containerInfo)}catch(Ae){ht(s,s.return,Ae)}xm&&(xm=!1,DT(s));break;case 4:u=Di,Di=Sf(s.stateNode.containerInfo),yi(r,s),vi(s),Di=u;break;case 12:yi(r,s),vi(s);break;case 13:yi(r,s),vi(s),s.child.flags&8192&&s.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Bm=un()),u&4&&(u=s.updateQueue,u!==null&&(s.updateQueue=null,Om(s,u)));break;case 22:if(u&512&&(Rt||o===null||Qn(o,o.return)),O=s.memoizedState!==null,j=o!==null&&o.memoizedState!==null,ee=Ms,ae=Rt,Ms=ee||O,Rt=ae||j,yi(r,s),Rt=ae,Ms=ee,vi(s),r=s.stateNode,r._current=s,r._visibility&=-3,r._visibility|=r._pendingVisibility&2,u&8192&&(r._visibility=O?r._visibility&-2:r._visibility|1,O&&(r=Ms||Rt,o===null||j||r||Zo(s)),s.memoizedProps===null||s.memoizedProps.mode!=="manual"))e:for(o=null,r=s;;){if(r.tag===5||r.tag===26||r.tag===27){if(o===null){j=o=r;try{if(f=j.stateNode,O)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=j.stateNode,w=j.memoizedProps.style;var J=w!=null&&w.hasOwnProperty("display")?w.display:null;T.style.display=J==null||typeof J=="boolean"?"":(""+J).trim()}}catch(Ae){ht(j,j.return,Ae)}}}else if(r.tag===6){if(o===null){j=r;try{j.stateNode.nodeValue=O?"":j.memoizedProps}catch(Ae){ht(j,j.return,Ae)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===s)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=s.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,Om(s,o))));break;case 19:yi(r,s),vi(s),u&4&&(u=s.updateQueue,u!==null&&(s.updateQueue=null,Om(s,u)));break;case 21:break;default:yi(r,s),vi(s)}}function vi(s){var r=s.flags;if(r&2){try{if(s.tag!==27){e:{for(var o=s.return;o!==null;){if(AT(o)){var u=o;break e}o=o.return}throw Error(i(160))}switch(u.tag){case 27:var f=u.stateNode,g=Im(s);of(s,g,f);break;case 5:var T=u.stateNode;u.flags&32&&(ui(T,""),u.flags&=-33);var w=Im(s);of(s,w,T);break;case 3:case 4:var O=u.stateNode.containerInfo,j=Im(s);Nm(s,j,O);break;default:throw Error(i(161))}}}catch(ee){ht(s,s.return,ee)}s.flags&=-3}r&4096&&(s.flags&=-4097)}function DT(s){if(s.subtreeFlags&1024)for(s=s.child;s!==null;){var r=s;DT(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),s=s.sibling}}function Us(s,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)RT(s,r.alternate,r),r=r.sibling}function Zo(s){for(s=s.child;s!==null;){var r=s;switch(r.tag){case 0:case 11:case 14:case 15:Dr(4,r,r.return),Zo(r);break;case 1:Qn(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&TT(r,r.return,o),Zo(r);break;case 26:case 27:case 5:Qn(r,r.return),Zo(r);break;case 22:Qn(r,r.return),r.memoizedState===null&&Zo(r);break;default:Zo(r)}s=s.sibling}}function kr(s,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=s,g=r,T=g.flags;switch(g.tag){case 0:case 11:case 15:kr(f,g,o),Uu(4,g);break;case 1:if(kr(f,g,o),u=g,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(j){ht(u,u.return,j)}if(u=g,f=u.updateQueue,f!==null){var w=u.stateNode;try{var O=f.shared.hiddenCallbacks;if(O!==null)for(f.shared.hiddenCallbacks=null,f=0;f<O.length;f++)yT(O[f],w)}catch(j){ht(u,u.return,j)}}o&&T&64&&ET(g),$a(g,g.return);break;case 26:case 27:case 5:kr(f,g,o),o&&u===null&&T&4&&ST(g),$a(g,g.return);break;case 12:kr(f,g,o);break;case 13:kr(f,g,o),o&&T&4&&xT(f,g);break;case 22:g.memoizedState===null&&kr(f,g,o),$a(g,g.return);break;default:kr(f,g,o)}r=r.sibling}}function Dm(s,r){var o=null;s!==null&&s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(o=s.memoizedState.cachePool.pool),s=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(s=r.memoizedState.cachePool.pool),s!==o&&(s!=null&&s.refCount++,o!=null&&Ru(o))}function km(s,r){s=null,r.alternate!==null&&(s=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==s&&(r.refCount++,s!=null&&Ru(s))}function Pr(s,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)kT(s,r,o,u),r=r.sibling}function kT(s,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:Pr(s,r,o,u),f&2048&&Uu(9,r);break;case 3:Pr(s,r,o,u),f&2048&&(s=null,r.alternate!==null&&(s=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==s&&(r.refCount++,s!=null&&Ru(s)));break;case 12:if(f&2048){Pr(s,r,o,u),s=r.stateNode;try{var g=r.memoizedProps,T=g.id,w=g.onPostCommit;typeof w=="function"&&w(T,r.alternate===null?"mount":"update",s.passiveEffectDuration,-0)}catch(O){ht(r,r.return,O)}}else Pr(s,r,o,u);break;case 23:break;case 22:g=r.stateNode,r.memoizedState!==null?g._visibility&4?Pr(s,r,o,u):Vu(s,r):g._visibility&4?Pr(s,r,o,u):(g._visibility|=4,Jo(s,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&Dm(r.alternate,r);break;case 24:Pr(s,r,o,u),f&2048&&km(r.alternate,r);break;default:Pr(s,r,o,u)}}function Jo(s,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var g=s,T=r,w=o,O=u,j=T.flags;switch(T.tag){case 0:case 11:case 15:Jo(g,T,w,O,f),Uu(8,T);break;case 23:break;case 22:var ee=T.stateNode;T.memoizedState!==null?ee._visibility&4?Jo(g,T,w,O,f):Vu(g,T):(ee._visibility|=4,Jo(g,T,w,O,f)),f&&j&2048&&Dm(T.alternate,T);break;case 24:Jo(g,T,w,O,f),f&&j&2048&&km(T.alternate,T);break;default:Jo(g,T,w,O,f)}r=r.sibling}}function Vu(s,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=s,u=r,f=u.flags;switch(u.tag){case 22:Vu(o,u),f&2048&&Dm(u.alternate,u);break;case 24:Vu(o,u),f&2048&&km(u.alternate,u);break;default:Vu(o,u)}r=r.sibling}}var ju=8192;function el(s){if(s.subtreeFlags&ju)for(s=s.child;s!==null;)PT(s),s=s.sibling}function PT(s){switch(s.tag){case 26:el(s),s.flags&ju&&s.memoizedState!==null&&bN(Di,s.memoizedState,s.memoizedProps);break;case 5:el(s);break;case 3:case 4:var r=Di;Di=Sf(s.stateNode.containerInfo),el(s),Di=r;break;case 22:s.memoizedState===null&&(r=s.alternate,r!==null&&r.memoizedState!==null?(r=ju,ju=16777216,el(s),ju=r):el(s));break;default:el(s)}}function MT(s){var r=s.alternate;if(r!==null&&(s=r.child,s!==null)){r.child=null;do r=s.sibling,s.sibling=null,s=r;while(s!==null)}}function Bu(s){var r=s.deletions;if((s.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];sn=u,UT(u,s)}MT(s)}if(s.subtreeFlags&10256)for(s=s.child;s!==null;)LT(s),s=s.sibling}function LT(s){switch(s.tag){case 0:case 11:case 15:Bu(s),s.flags&2048&&Dr(9,s,s.return);break;case 3:Bu(s);break;case 12:Bu(s);break;case 22:var r=s.stateNode;s.memoizedState!==null&&r._visibility&4&&(s.return===null||s.return.tag!==13)?(r._visibility&=-5,lf(s)):Bu(s);break;default:Bu(s)}}function lf(s){var r=s.deletions;if((s.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];sn=u,UT(u,s)}MT(s)}for(s=s.child;s!==null;){switch(r=s,r.tag){case 0:case 11:case 15:Dr(8,r,r.return),lf(r);break;case 22:o=r.stateNode,o._visibility&4&&(o._visibility&=-5,lf(r));break;default:lf(r)}s=s.sibling}}function UT(s,r){for(;sn!==null;){var o=sn;switch(o.tag){case 0:case 11:case 15:Dr(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Ru(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,sn=u;else e:for(o=s;sn!==null;){u=sn;var f=u.sibling,g=u.return;if(IT(u),u===o){sn=null;break e}if(f!==null){f.return=g,sn=f;break e}sn=g}}}function LI(s,r,o,u){this.tag=s,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ei(s,r,o,u){return new LI(s,r,o,u)}function Pm(s){return s=s.prototype,!(!s||!s.isReactComponent)}function Mr(s,r){var o=s.alternate;return o===null?(o=Ei(s.tag,r,s.key,s.mode),o.elementType=s.elementType,o.type=s.type,o.stateNode=s.stateNode,o.alternate=s,s.alternate=o):(o.pendingProps=r,o.type=s.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=s.flags&31457280,o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,r=s.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=s.sibling,o.index=s.index,o.ref=s.ref,o.refCleanup=s.refCleanup,o}function VT(s,r){s.flags&=31457282;var o=s.alternate;return o===null?(s.childLanes=0,s.lanes=r,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,r=o.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),s}function uf(s,r,o,u,f,g){var T=0;if(u=s,typeof s=="function")Pm(s)&&(T=1);else if(typeof s=="string")T=TN(s,o,wt.current)?26:s==="html"||s==="head"||s==="body"?27:5;else e:switch(s){case p:return Ya(o.children,f,g,r);case m:T=8,f|=24;break;case y:return s=Ei(12,o,r,f|2),s.elementType=y,s.lanes=g,s;case G:return s=Ei(13,o,r,f),s.elementType=G,s.lanes=g,s;case M:return s=Ei(19,o,r,f),s.elementType=M,s.lanes=g,s;case $:return jT(o,f,g,r);default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case S:case D:T=10;break e;case A:T=9;break e;case V:T=11;break e;case B:T=14;break e;case H:T=16,u=null;break e}T=29,o=Error(i(130,s===null?"null":typeof s,"")),u=null}return r=Ei(T,o,r,f),r.elementType=s,r.type=u,r.lanes=g,r}function Ya(s,r,o,u){return s=Ei(7,s,u,r),s.lanes=o,s}function jT(s,r,o,u){s=Ei(22,s,u,r),s.elementType=$,s.lanes=o;var f={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var g=f._current;if(g===null)throw Error(i(456));if((f._pendingVisibility&2)===0){var T=br(g,2);T!==null&&(f._pendingVisibility|=2,Un(T,g,2))}},attach:function(){var g=f._current;if(g===null)throw Error(i(456));if((f._pendingVisibility&2)!==0){var T=br(g,2);T!==null&&(f._pendingVisibility&=-3,Un(T,g,2))}}};return s.stateNode=f,s}function Mm(s,r,o){return s=Ei(6,s,null,r),s.lanes=o,s}function Lm(s,r,o){return r=Ei(4,s.children!==null?s.children:[],s.key,r),r.lanes=o,r.stateNode={containerInfo:s.containerInfo,pendingChildren:null,implementation:s.implementation},r}function Vs(s){s.flags|=4}function BT(s,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)s.flags&=-16777217;else if(s.flags|=16777216,!A0(r)){if(r=_i.current,r!==null&&((Ze&4194176)===Ze?Ji!==null:(Ze&62914560)!==Ze&&(Ze&536870912)===0||r!==Ji))throw Au=zp,iE;s.flags|=8192}}function cf(s,r){r!==null&&(s.flags|=4),s.flags&16384&&(r=s.tag!==22?hr():536870912,s.lanes|=r,nl|=r)}function zu(s,r){if(!it)switch(s.tailMode){case"hidden":r=s.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?s.tail=null:o.sibling=null;break;case"collapsed":o=s.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||s.tail===null?s.tail=null:s.tail.sibling=null:u.sibling=null}}function Tt(s){var r=s.alternate!==null&&s.alternate.child===s.child,o=0,u=0;if(r)for(var f=s.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&31457280,u|=f.flags&31457280,f.return=s,f=f.sibling;else for(f=s.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=s,f=f.sibling;return s.subtreeFlags|=u,s.childLanes=o,r}function UI(s,r,o){var u=r.pendingProps;switch(jp(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(r),null;case 1:return Tt(r),null;case 3:return o=r.stateNode,u=null,s!==null&&(u=s.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),Ps(Kt),zn(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(s===null||s.child===null)&&(Eu(r)?Vs(r):s===null||s.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Oi!==null&&(qm(Oi),Oi=null))),Tt(r),null;case 26:return o=r.memoizedState,s===null?(Vs(r),o!==null?(Tt(r),BT(r,o)):(Tt(r),r.flags&=-16777217)):o?o!==s.memoizedState?(Vs(r),Tt(r),BT(r,o)):(Tt(r),r.flags&=-16777217):(s.memoizedProps!==u&&Vs(r),Tt(r),r.flags&=-16777217),null;case 27:X(r),o=Zt.current;var f=r.type;if(s!==null&&r.stateNode!=null)s.memoizedProps!==u&&Vs(r);else{if(!u){if(r.stateNode===null)throw Error(i(166));return Tt(r),null}s=wt.current,Eu(r)?tE(r):(s=g0(f,u,o),r.stateNode=s,Vs(r))}return Tt(r),null;case 5:if(X(r),o=r.type,s!==null&&r.stateNode!=null)s.memoizedProps!==u&&Vs(r);else{if(!u){if(r.stateNode===null)throw Error(i(166));return Tt(r),null}if(s=wt.current,Eu(r))tE(r);else{switch(f=Tf(Zt.current),s){case 1:s=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:s=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":s=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":s=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":s=f.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?s.multiple=!0:u.size&&(s.size=u.size);break;default:s=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}s[Jt]=r,s[Ht]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)s.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=s;e:switch(dn(s,o,u),o){case"button":case"input":case"select":case"textarea":s=!!u.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Vs(r)}}return Tt(r),r.flags&=-16777217,null;case 6:if(s&&r.stateNode!=null)s.memoizedProps!==u&&Vs(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(i(166));if(s=Zt.current,Eu(r)){if(s=r.stateNode,o=r.memoizedProps,u=null,f=Ln,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}s[Jt]=r,s=!!(s.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||c0(s.nodeValue,o)),s||ja(r)}else s=Tf(s).createTextNode(u),s[Jt]=r,r.stateNode=s}return Tt(r),null;case 13:if(u=r.memoizedState,s===null||s.memoizedState!==null&&s.memoizedState.dehydrated!==null){if(f=Eu(r),u!==null&&u.dehydrated!==null){if(s===null){if(!f)throw Error(i(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[Jt]=r}else Tu(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Tt(r),f=!1}else Oi!==null&&(qm(Oi),Oi=null),f=!0;if(!f)return r.flags&256?(xs(r),r):(xs(r),null)}if(xs(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,s=s!==null&&s.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var g=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(g=u.memoizedState.cachePool.pool),g!==f&&(u.flags|=2048)}return o!==s&&o&&(r.child.flags|=8192),cf(r,r.updateQueue),Tt(r),null;case 4:return zn(),s===null&&tg(r.stateNode.containerInfo),Tt(r),null;case 10:return Ps(r.type),Tt(r),null;case 19:if(pe(Wt),f=r.memoizedState,f===null)return Tt(r),null;if(u=(r.flags&128)!==0,g=f.rendering,g===null)if(u)zu(f,!1);else{if(It!==0||s!==null&&(s.flags&128)!==0)for(s=r.child;s!==null;){if(g=Wh(s),g!==null){for(r.flags|=128,zu(f,!1),s=g.updateQueue,r.updateQueue=s,cf(r,s),r.subtreeFlags=0,s=o,o=r.child;o!==null;)VT(o,s),o=o.sibling;return Re(Wt,Wt.current&1|2),r.child}s=s.sibling}f.tail!==null&&un()>hf&&(r.flags|=128,u=!0,zu(f,!1),r.lanes=4194304)}else{if(!u)if(s=Wh(g),s!==null){if(r.flags|=128,u=!0,s=s.updateQueue,r.updateQueue=s,cf(r,s),zu(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!it)return Tt(r),null}else 2*un()-f.renderingStartTime>hf&&o!==536870912&&(r.flags|=128,u=!0,zu(f,!1),r.lanes=4194304);f.isBackwards?(g.sibling=r.child,r.child=g):(s=f.last,s!==null?s.sibling=g:r.child=g,f.last=g)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=un(),r.sibling=null,s=Wt.current,Re(Wt,u?s&1|2:s&1),r):(Tt(r),null);case 22:case 23:return xs(r),Hp(),u=r.memoizedState!==null,s!==null?s.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(Tt(r),r.subtreeFlags&6&&(r.flags|=8192)):Tt(r),o=r.updateQueue,o!==null&&cf(r,o.retryQueue),o=null,s!==null&&s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(o=s.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),s!==null&&pe(za),null;case 24:return o=null,s!==null&&(o=s.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),Ps(Kt),Tt(r),null;case 25:return null}throw Error(i(156,r.tag))}function VI(s,r){switch(jp(r),r.tag){case 1:return s=r.flags,s&65536?(r.flags=s&-65537|128,r):null;case 3:return Ps(Kt),zn(),s=r.flags,(s&65536)!==0&&(s&128)===0?(r.flags=s&-65537|128,r):null;case 26:case 27:case 5:return X(r),null;case 13:if(xs(r),s=r.memoizedState,s!==null&&s.dehydrated!==null){if(r.alternate===null)throw Error(i(340));Tu()}return s=r.flags,s&65536?(r.flags=s&-65537|128,r):null;case 19:return pe(Wt),null;case 4:return zn(),null;case 10:return Ps(r.type),null;case 22:case 23:return xs(r),Hp(),s!==null&&pe(za),s=r.flags,s&65536?(r.flags=s&-65537|128,r):null;case 24:return Ps(Kt),null;case 25:return null;default:return null}}function zT(s,r){switch(jp(r),r.tag){case 3:Ps(Kt),zn();break;case 26:case 27:case 5:X(r);break;case 4:zn();break;case 13:xs(r);break;case 19:pe(Wt);break;case 10:Ps(r.type);break;case 22:case 23:xs(r),Hp(),s!==null&&pe(za);break;case 24:Ps(Kt)}}var jI={getCacheForType:function(s){var r=En(Kt),o=r.data.get(s);return o===void 0&&(o=s(),r.data.set(s,o)),o}},BI=typeof WeakMap=="function"?WeakMap:Map,St=0,dt=null,Fe=null,Ze=0,pt=0,Zn=null,js=!1,tl=!1,Um=!1,Bs=0,It=0,Lr=0,Qa=0,Vm=0,Ti=0,nl=0,Fu=null,ts=null,jm=!1,Bm=0,hf=1/0,ff=null,Ur=null,df=!1,Xa=null,Hu=0,zm=0,Fm=null,qu=0,Hm=null;function Jn(){if((St&2)!==0&&Ze!==0)return Ze&-Ze;if(I.T!==null){var s=Ko;return s!==0?s:Xm()}return yh()}function FT(){Ti===0&&(Ti=(Ze&536870912)===0||it?nu():536870912);var s=_i.current;return s!==null&&(s.flags|=32),Ti}function Un(s,r,o){(s===dt&&pt===2||s.cancelPendingCommit!==null)&&(il(s,0),zs(s,Ze,Ti,!1)),Pt(s,o),((St&2)===0||s!==dt)&&(s===dt&&((St&2)===0&&(Qa|=o),It===4&&zs(s,Ze,Ti,!1)),ns(s))}function HT(s,r,o){if((St&6)!==0)throw Error(i(327));var u=!o&&(r&60)===0&&(r&s.expiredLanes)===0||cr(s,r),f=u?HI(s,r):Km(s,r,!0),g=u;do{if(f===0){tl&&!u&&zs(s,r,0,!1);break}else if(f===6)zs(s,r,0,!js);else{if(o=s.current.alternate,g&&!zI(o)){f=Km(s,r,!1),g=!1;continue}if(f===2){if(g=r,s.errorRecoveryDisabledLanes&g)var T=0;else T=s.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){r=T;e:{var w=s;f=Fu;var O=w.current.memoizedState.isDehydrated;if(O&&(il(w,T).flags|=256),T=Km(w,T,!1),T!==2){if(Um&&!O){w.errorRecoveryDisabledLanes|=g,Qa|=g,f=4;break e}g=ts,ts=f,g!==null&&qm(g)}f=T}if(g=!1,f!==2)continue}}if(f===1){il(s,0),zs(s,r,0,!0);break}e:{switch(u=s,f){case 0:case 1:throw Error(i(345));case 4:if((r&4194176)===r){zs(u,r,Ti,!js);break e}break;case 2:ts=null;break;case 3:case 5:break;default:throw Error(i(329))}if(u.finishedWork=o,u.finishedLanes=r,(r&62914560)===r&&(g=Bm+300-un(),10<g)){if(zs(u,r,Ti,!js),oi(u,0)!==0)break e;u.timeoutHandle=d0(qT.bind(null,u,o,ts,ff,jm,r,Ti,Qa,nl,js,2,-0,0),g);break e}qT(u,o,ts,ff,jm,r,Ti,Qa,nl,js,0,-0,0)}}break}while(!0);ns(s)}function qm(s){ts===null?ts=s:ts.push.apply(ts,s)}function qT(s,r,o,u,f,g,T,w,O,j,ee,ae,K){var J=r.subtreeFlags;if((J&8192||(J&16785408)===16785408)&&(Qu={stylesheets:null,count:0,unsuspend:SN},PT(r),r=AN(),r!==null)){s.cancelPendingCommit=r(XT.bind(null,s,o,u,f,T,w,O,1,ae,K)),zs(s,g,T,!j);return}XT(s,o,u,f,T,w,O,ee,ae,K)}function zI(s){for(var r=s;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],g=f.getSnapshot;f=f.value;try{if(!Yn(g(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===s)break;for(;r.sibling===null;){if(r.return===null||r.return===s)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function zs(s,r,o,u){r&=~Vm,r&=~Qa,s.suspendedLanes|=r,s.pingedLanes&=~r,u&&(s.warmLanes|=r),u=s.expirationTimes;for(var f=r;0<f;){var g=31-kn(f),T=1<<g;u[g]=-1,f&=~T}o!==0&&fr(s,o,r)}function pf(){return(St&6)===0?(Gu(0),!1):!0}function Gm(){if(Fe!==null){if(pt===0)var s=Fe.return;else s=Fe,ks=Wa=null,Xp(s),Go=null,wu=0,s=Fe;for(;s!==null;)zT(s.alternate,s),s=s.return;Fe=null}}function il(s,r){s.finishedWork=null,s.finishedLanes=0;var o=s.timeoutHandle;o!==-1&&(s.timeoutHandle=-1,aN(o)),o=s.cancelPendingCommit,o!==null&&(s.cancelPendingCommit=null,o()),Gm(),dt=s,Fe=o=Mr(s.current,null),Ze=r,pt=0,Zn=null,js=!1,tl=cr(s,r),Um=!1,nl=Ti=Vm=Qa=Lr=It=0,ts=Fu=null,jm=!1,(r&8)!==0&&(r|=r&32);var u=s.entangledLanes;if(u!==0)for(s=s.entanglements,u&=r;0<u;){var f=31-kn(u),g=1<<f;r|=s[f],u&=~g}return Bs=r,Uh(),o}function GT(s,r){Ve=null,I.H=es,r===bu?(r=aE(),pt=3):r===iE?(r=aE(),pt=4):pt=r===sT?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Zn=r,Fe===null&&(It=1,sf(s,pi(r,s.current)))}function WT(){var s=I.H;return I.H=es,s===null?es:s}function KT(){var s=I.A;return I.A=jI,s}function Wm(){It=4,js||(Ze&4194176)!==Ze&&_i.current!==null||(tl=!0),(Lr&134217727)===0&&(Qa&134217727)===0||dt===null||zs(dt,Ze,Ti,!1)}function Km(s,r,o){var u=St;St|=2;var f=WT(),g=KT();(dt!==s||Ze!==r)&&(ff=null,il(s,r)),r=!1;var T=It;e:do try{if(pt!==0&&Fe!==null){var w=Fe,O=Zn;switch(pt){case 8:Gm(),T=6;break e;case 3:case 2:case 6:_i.current===null&&(r=!0);var j=pt;if(pt=0,Zn=null,sl(s,w,O,j),o&&tl){T=0;break e}break;default:j=pt,pt=0,Zn=null,sl(s,w,O,j)}}FI(),T=It;break}catch(ee){GT(s,ee)}while(!0);return r&&s.shellSuspendCounter++,ks=Wa=null,St=u,I.H=f,I.A=g,Fe===null&&(dt=null,Ze=0,Uh()),T}function FI(){for(;Fe!==null;)$T(Fe)}function HI(s,r){var o=St;St|=2;var u=WT(),f=KT();dt!==s||Ze!==r?(ff=null,hf=un()+500,il(s,r)):tl=cr(s,r);e:do try{if(pt!==0&&Fe!==null){r=Fe;var g=Zn;t:switch(pt){case 1:pt=0,Zn=null,sl(s,r,g,1);break;case 2:if(sE(g)){pt=0,Zn=null,YT(r);break}r=function(){pt===2&&dt===s&&(pt=7),ns(s)},g.then(r,r);break e;case 3:pt=7;break e;case 4:pt=5;break e;case 7:sE(g)?(pt=0,Zn=null,YT(r)):(pt=0,Zn=null,sl(s,r,g,7));break;case 5:var T=null;switch(Fe.tag){case 26:T=Fe.memoizedState;case 5:case 27:var w=Fe;if(!T||A0(T)){pt=0,Zn=null;var O=w.sibling;if(O!==null)Fe=O;else{var j=w.return;j!==null?(Fe=j,mf(j)):Fe=null}break t}}pt=0,Zn=null,sl(s,r,g,5);break;case 6:pt=0,Zn=null,sl(s,r,g,6);break;case 8:Gm(),It=6;break e;default:throw Error(i(462))}}qI();break}catch(ee){GT(s,ee)}while(!0);return ks=Wa=null,I.H=u,I.A=f,St=o,Fe!==null?0:(dt=null,Ze=0,Uh(),It)}function qI(){for(;Fe!==null&&!_s();)$T(Fe)}function $T(s){var r=gT(s.alternate,s,Bs);s.memoizedProps=s.pendingProps,r===null?mf(s):Fe=r}function YT(s){var r=s,o=r.alternate;switch(r.tag){case 15:case 0:r=cT(o,r,r.pendingProps,r.type,void 0,Ze);break;case 11:r=cT(o,r,r.pendingProps,r.type.render,r.ref,Ze);break;case 5:Xp(r);default:zT(o,r),r=Fe=VT(r,Bs),r=gT(o,r,Bs)}s.memoizedProps=s.pendingProps,r===null?mf(s):Fe=r}function sl(s,r,o,u){ks=Wa=null,Xp(r),Go=null,wu=0;var f=r.return;try{if(DI(s,f,r,o,Ze)){It=1,sf(s,pi(o,s.current)),Fe=null;return}}catch(g){if(f!==null)throw Fe=f,g;It=1,sf(s,pi(o,s.current)),Fe=null;return}r.flags&32768?(it||u===1?s=!0:tl||(Ze&536870912)!==0?s=!1:(js=s=!0,(u===2||u===3||u===6)&&(u=_i.current,u!==null&&u.tag===13&&(u.flags|=16384))),QT(r,s)):mf(r)}function mf(s){var r=s;do{if((r.flags&32768)!==0){QT(r,js);return}s=r.return;var o=UI(r.alternate,r,Bs);if(o!==null){Fe=o;return}if(r=r.sibling,r!==null){Fe=r;return}Fe=r=s}while(r!==null);It===0&&(It=5)}function QT(s,r){do{var o=VI(s.alternate,s);if(o!==null){o.flags&=32767,Fe=o;return}if(o=s.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(s=s.sibling,s!==null)){Fe=s;return}Fe=s=o}while(s!==null);It=6,Fe=null}function XT(s,r,o,u,f,g,T,w,O,j){var ee=I.T,ae=Q.p;try{Q.p=2,I.T=null,GI(s,r,o,u,ae,f,g,T,w,O,j)}finally{I.T=ee,Q.p=ae}}function GI(s,r,o,u,f,g,T,w){do rl();while(Xa!==null);if((St&6)!==0)throw Error(i(327));var O=s.finishedWork;if(u=s.finishedLanes,O===null)return null;if(s.finishedWork=null,s.finishedLanes=0,O===s.current)throw Error(i(177));s.callbackNode=null,s.callbackPriority=0,s.cancelPendingCommit=null;var j=O.lanes|O.childLanes;if(j|=Lp,gh(s,u,j,g,T,w),s===dt&&(Fe=dt=null,Ze=0),(O.subtreeFlags&10256)===0&&(O.flags&10256)===0||df||(df=!0,zm=j,Fm=o,YI(ys,function(){return rl(),null})),o=(O.flags&15990)!==0,(O.subtreeFlags&15990)!==0||o?(o=I.T,I.T=null,g=Q.p,Q.p=2,T=St,St|=4,PI(s,O),OT(O,s),mI(rg,s.containerInfo),Rf=!!sg,rg=sg=null,s.current=O,RT(s,O.alternate,O),ai(),St=T,Q.p=g,I.T=o):s.current=O,df?(df=!1,Xa=s,Hu=u):ZT(s,j),j=s.pendingLanes,j===0&&(Ur=null),eu(O.stateNode),ns(s),r!==null)for(f=s.onRecoverableError,O=0;O<r.length;O++)j=r[O],f(j.value,{componentStack:j.stack});return(Hu&3)!==0&&rl(),j=s.pendingLanes,(u&4194218)!==0&&(j&42)!==0?s===Hm?qu++:(qu=0,Hm=s):qu=0,Gu(0),null}function ZT(s,r){(s.pooledCacheLanes&=r)===0&&(r=s.pooledCache,r!=null&&(s.pooledCache=null,Ru(r)))}function rl(){if(Xa!==null){var s=Xa,r=zm;zm=0;var o=_h(Hu),u=I.T,f=Q.p;try{if(Q.p=32>o?32:o,I.T=null,Xa===null)var g=!1;else{o=Fm,Fm=null;var T=Xa,w=Hu;if(Xa=null,Hu=0,(St&6)!==0)throw Error(i(331));var O=St;if(St|=4,LT(T.current),kT(T,T.current,w,o),St=O,Gu(0,!1),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(lr,T)}catch{}g=!0}return g}finally{Q.p=f,I.T=u,ZT(s,r)}}return!1}function JT(s,r,o){r=pi(o,r),r=hm(s.stateNode,r,2),s=Or(s,r,2),s!==null&&(Pt(s,2),ns(s))}function ht(s,r,o){if(s.tag===3)JT(s,s,o);else for(;r!==null;){if(r.tag===3){JT(r,s,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Ur===null||!Ur.has(u))){s=pi(o,s),o=nT(2),u=Or(r,o,2),u!==null&&(iT(o,u,r,s),Pt(u,2),ns(u));break}}r=r.return}}function $m(s,r,o){var u=s.pingCache;if(u===null){u=s.pingCache=new BI;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(Um=!0,f.add(o),s=WI.bind(null,s,r,o),r.then(s,s))}function WI(s,r,o){var u=s.pingCache;u!==null&&u.delete(r),s.pingedLanes|=s.suspendedLanes&o,s.warmLanes&=~o,dt===s&&(Ze&o)===o&&(It===4||It===3&&(Ze&62914560)===Ze&&300>un()-Bm?(St&2)===0&&il(s,0):Vm|=o,nl===Ze&&(nl=0)),ns(s)}function e0(s,r){r===0&&(r=hr()),s=br(s,r),s!==null&&(Pt(s,r),ns(s))}function KI(s){var r=s.memoizedState,o=0;r!==null&&(o=r.retryLane),e0(s,o)}function $I(s,r){var o=0;switch(s.tag){case 13:var u=s.stateNode,f=s.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=s.stateNode;break;case 22:u=s.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(r),e0(s,o)}function YI(s,r){return kt(s,r)}var gf=null,al=null,Ym=!1,_f=!1,Qm=!1,Za=0;function ns(s){s!==al&&s.next===null&&(al===null?gf=al=s:al=al.next=s),_f=!0,Ym||(Ym=!0,XI(QI))}function Gu(s,r){if(!Qm&&_f){Qm=!0;do for(var o=!1,u=gf;u!==null;){if(s!==0){var f=u.pendingLanes;if(f===0)var g=0;else{var T=u.suspendedLanes,w=u.pingedLanes;g=(1<<31-kn(42|s)+1)-1,g&=f&~(T&~w),g=g&201326677?g&201326677|1:g?g|2:0}g!==0&&(o=!0,i0(u,g))}else g=Ze,g=oi(u,u===dt?g:0),(g&3)===0||cr(u,g)||(o=!0,i0(u,g));u=u.next}while(o);Qm=!1}}function QI(){_f=Ym=!1;var s=0;Za!==0&&(rN()&&(s=Za),Za=0);for(var r=un(),o=null,u=gf;u!==null;){var f=u.next,g=t0(u,r);g===0?(u.next=null,o===null?gf=f:o.next=f,f===null&&(al=o)):(o=u,(s!==0||(g&3)!==0)&&(_f=!0)),u=f}Gu(s)}function t0(s,r){for(var o=s.suspendedLanes,u=s.pingedLanes,f=s.expirationTimes,g=s.pendingLanes&-62914561;0<g;){var T=31-kn(g),w=1<<T,O=f[T];O===-1?((w&o)===0||(w&u)!==0)&&(f[T]=Ao(w,r)):O<=r&&(s.expiredLanes|=w),g&=~w}if(r=dt,o=Ze,o=oi(s,s===r?o:0),u=s.callbackNode,o===0||s===r&&pt===2||s.cancelPendingCommit!==null)return u!==null&&u!==null&&Ut(u),s.callbackNode=null,s.callbackPriority=0;if((o&3)===0||cr(s,o)){if(r=o&-o,r===s.callbackPriority)return r;switch(u!==null&&Ut(u),_h(o)){case 2:case 8:o=Vt;break;case 32:o=ys;break;case 268435456:o=Jl;break;default:o=ys}return u=n0.bind(null,s),o=kt(o,u),s.callbackPriority=r,s.callbackNode=o,r}return u!==null&&u!==null&&Ut(u),s.callbackPriority=2,s.callbackNode=null,2}function n0(s,r){var o=s.callbackNode;if(rl()&&s.callbackNode!==o)return null;var u=Ze;return u=oi(s,s===dt?u:0),u===0?null:(HT(s,u,r),t0(s,un()),s.callbackNode!=null&&s.callbackNode===o?n0.bind(null,s):null)}function i0(s,r){if(rl())return null;HT(s,r,!0)}function XI(s){oN(function(){(St&6)!==0?kt(vt,s):s()})}function Xm(){return Za===0&&(Za=nu()),Za}function s0(s){return s==null||typeof s=="symbol"||typeof s=="boolean"?null:typeof s=="function"?s:Gi(""+s)}function r0(s,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,s.id&&o.setAttribute("form",s.id),r.parentNode.insertBefore(o,r),s=new FormData(s),o.parentNode.removeChild(o),s}function ZI(s,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var g=s0((f[Ht]||null).action),T=u.submitter;T&&(r=(r=T[Ht]||null)?s0(r.formAction):T.getAttribute("formAction"),r!==null&&(g=r,T=null));var w=new Oo("action","action",null,u,f);s.push({event:w,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Za!==0){var O=T?r0(f,T):new FormData(f);am(o,{pending:!0,data:O,method:f.method,action:g},null,O)}}else typeof g=="function"&&(w.preventDefault(),O=T?r0(f,T):new FormData(f),am(o,{pending:!0,data:O,method:f.method,action:g},g,O))},currentTarget:f}]})}}for(var Zm=0;Zm<Xv.length;Zm++){var Jm=Xv[Zm],JI=Jm.toLowerCase(),eN=Jm[0].toUpperCase()+Jm.slice(1);xi(JI,"on"+eN)}xi(Wv,"onAnimationEnd"),xi(Kv,"onAnimationIteration"),xi($v,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(_I,"onTransitionRun"),xi(yI,"onTransitionStart"),xi(vI,"onTransitionCancel"),xi(Yv,"onTransitionEnd"),Fn("onMouseEnter",["mouseout","mouseover"]),Fn("onMouseLeave",["mouseout","mouseover"]),Fn("onPointerEnter",["pointerout","pointerover"]),Fn("onPointerLeave",["pointerout","pointerover"]),Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tN=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wu));function a0(s,r){r=(r&4)!==0;for(var o=0;o<s.length;o++){var u=s[o],f=u.event;u=u.listeners;e:{var g=void 0;if(r)for(var T=u.length-1;0<=T;T--){var w=u[T],O=w.instance,j=w.currentTarget;if(w=w.listener,O!==g&&f.isPropagationStopped())break e;g=w,f.currentTarget=j;try{g(f)}catch(ee){nf(ee)}f.currentTarget=null,g=O}else for(T=0;T<u.length;T++){if(w=u[T],O=w.instance,j=w.currentTarget,w=w.listener,O!==g&&f.isPropagationStopped())break e;g=w,f.currentTarget=j;try{g(f)}catch(ee){nf(ee)}f.currentTarget=null,g=O}}}}function Ke(s,r){var o=r[ba];o===void 0&&(o=r[ba]=new Set);var u=s+"__bubble";o.has(u)||(o0(r,s,2,!1),o.add(u))}function eg(s,r,o){var u=0;r&&(u|=4),o0(o,s,u,r)}var yf="_reactListening"+Math.random().toString(36).slice(2);function tg(s){if(!s[yf]){s[yf]=!0,su.forEach(function(o){o!=="selectionchange"&&(tN.has(o)||eg(o,!1,s),eg(o,!0,s))});var r=s.nodeType===9?s:s.ownerDocument;r===null||r[yf]||(r[yf]=!0,eg("selectionchange",!1,r))}}function o0(s,r,o,u){switch(x0(r)){case 2:var f=RN;break;case 8:f=IN;break;default:f=pg}o=f.bind(null,r,o,s),f=void 0,!hi||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?s.addEventListener(r,o,{capture:!0,passive:f}):s.addEventListener(r,o,!0):f!==void 0?s.addEventListener(r,o,{passive:f}):s.addEventListener(r,o,!1)}function ng(s,r,o,u,f){var g=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var w=u.stateNode.containerInfo;if(w===f||w.nodeType===8&&w.parentNode===f)break;if(T===4)for(T=u.return;T!==null;){var O=T.tag;if((O===3||O===4)&&(O=T.stateNode.containerInfo,O===f||O.nodeType===8&&O.parentNode===f))return;T=T.return}for(;w!==null;){if(T=Ni(w),T===null)return;if(O=T.tag,O===5||O===6||O===26||O===27){u=g=T;continue e}w=w.parentNode}}u=u.return}Sh(function(){var j=g,ee=xo(o),ae=[];e:{var K=Qv.get(s);if(K!==void 0){var J=Oo,Ae=s;switch(s){case"keypress":if(Ki(o)===0)break e;case"keydown":case"keyup":J=Uo;break;case"focusin":Ae="focus",J=Po;break;case"focusout":Ae="blur",J=Po;break;case"beforeblur":case"afterblur":J=Po;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=fi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=Ip;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=xh;break;case Wv:case Kv:case $v:J=Mo;break;case Yv:J=Dh;break;case"scroll":case"scrollend":J=bh;break;case"wheel":J=Vo;break;case"copy":case"cut":case"paste":J=Lo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=gu;break;case"toggle":case"beforetoggle":J=Ph}var Me=(r&4)!==0,Nt=!Me&&(s==="scroll"||s==="scrollend"),z=Me?K!==null?K+"Capture":null:K;Me=[];for(var U=j,W;U!==null;){var ie=U;if(W=ie.stateNode,ie=ie.tag,ie!==5&&ie!==26&&ie!==27||W===null||z===null||(ie=Ia(U,z),ie!=null&&Me.push(Ku(U,ie,W))),Nt)break;U=U.return}0<Me.length&&(K=new J(K,Ae,null,o,ee),ae.push({event:K,listeners:Me}))}}if((r&7)===0){e:{if(K=s==="mouseover"||s==="pointerover",J=s==="mouseout"||s==="pointerout",K&&o!==ci&&(Ae=o.relatedTarget||o.fromElement)&&(Ni(Ae)||Ae[vs]))break e;if((J||K)&&(K=ee.window===ee?ee:(K=ee.ownerDocument)?K.defaultView||K.parentWindow:window,J?(Ae=o.relatedTarget||o.toElement,J=j,Ae=Ae?Ni(Ae):null,Ae!==null&&(Nt=he(Ae),Me=Ae.tag,Ae!==Nt||Me!==5&&Me!==27&&Me!==6)&&(Ae=null)):(J=null,Ae=j),J!==Ae)){if(Me=fi,ie="onMouseLeave",z="onMouseEnter",U="mouse",(s==="pointerout"||s==="pointerover")&&(Me=gu,ie="onPointerLeave",z="onPointerEnter",U="pointer"),Nt=J==null?K:gr(J),W=Ae==null?K:gr(Ae),K=new Me(ie,U+"leave",J,o,ee),K.target=Nt,K.relatedTarget=W,ie=null,Ni(ee)===j&&(Me=new Me(z,U+"enter",Ae,o,ee),Me.target=W,Me.relatedTarget=Nt,ie=Me),Nt=ie,J&&Ae)t:{for(Me=J,z=Ae,U=0,W=Me;W;W=ol(W))U++;for(W=0,ie=z;ie;ie=ol(ie))W++;for(;0<U-W;)Me=ol(Me),U--;for(;0<W-U;)z=ol(z),W--;for(;U--;){if(Me===z||z!==null&&Me===z.alternate)break t;Me=ol(Me),z=ol(z)}Me=null}else Me=null;J!==null&&l0(ae,K,J,Me,!1),Ae!==null&&Nt!==null&&l0(ae,Nt,Ae,Me,!0)}}e:{if(K=j?gr(j):window,J=K.nodeName&&K.nodeName.toLowerCase(),J==="select"||J==="input"&&K.type==="file")var Te=Mv;else if(Gt(K))if(Lv)Te=dI;else{Te=hI;var Be=cI}else J=K.nodeName,!J||J.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?j&&uu(j.elementType)&&(Te=Mv):Te=fI;if(Te&&(Te=Te(s,j))){Rs(ae,Te,o,ee);break e}Be&&Be(s,K,j),s==="focusout"&&j&&K.type==="number"&&j.memoizedProps.value!=null&&No(K,"number",K.value)}switch(Be=j?gr(j):window,s){case"focusin":(Gt(Be)||Be.contentEditable==="true")&&(jo=Be,kp=j,vu=null);break;case"focusout":vu=kp=jo=null;break;case"mousedown":Pp=!0;break;case"contextmenu":case"mouseup":case"dragend":Pp=!1,qv(ae,o,ee);break;case"selectionchange":if(gI)break;case"keydown":case"keyup":qv(ae,o,ee)}var Ce;if(Qi)e:{switch(s){case"compositionstart":var Oe="onCompositionStart";break e;case"compositionend":Oe="onCompositionEnd";break e;case"compositionupdate":Oe="onCompositionUpdate";break e}Oe=void 0}else Qe?Y(s,o)&&(Oe="onCompositionEnd"):s==="keydown"&&o.keyCode===229&&(Oe="onCompositionStart");Oe&&(E&&o.locale!=="ko"&&(Qe||Oe!=="onCompositionStart"?Oe==="onCompositionEnd"&&Qe&&(Ce=hu()):(Wi=ee,Sr="value"in Wi?Wi.value:Wi.textContent,Qe=!0)),Be=vf(j,Oe),0<Be.length&&(Oe=new pu(Oe,s,null,o,ee),ae.push({event:Oe,listeners:Be}),Ce?Oe.data=Ce:(Ce=de(o),Ce!==null&&(Oe.data=Ce)))),(Ce=_?qt(s,o):Xe(s,o))&&(Oe=vf(j,"onBeforeInput"),0<Oe.length&&(Be=new pu("onBeforeInput","beforeinput",null,o,ee),ae.push({event:Be,listeners:Oe}),Be.data=Ce)),ZI(ae,s,j,o,ee)}a0(ae,r)})}function Ku(s,r,o){return{instance:s,listener:r,currentTarget:o}}function vf(s,r){for(var o=r+"Capture",u=[];s!==null;){var f=s,g=f.stateNode;f=f.tag,f!==5&&f!==26&&f!==27||g===null||(f=Ia(s,o),f!=null&&u.unshift(Ku(s,f,g)),f=Ia(s,r),f!=null&&u.push(Ku(s,f,g))),s=s.return}return u}function ol(s){if(s===null)return null;do s=s.return;while(s&&s.tag!==5&&s.tag!==27);return s||null}function l0(s,r,o,u,f){for(var g=r._reactName,T=[];o!==null&&o!==u;){var w=o,O=w.alternate,j=w.stateNode;if(w=w.tag,O!==null&&O===u)break;w!==5&&w!==26&&w!==27||j===null||(O=j,f?(j=Ia(o,g),j!=null&&T.unshift(Ku(o,j,O))):f||(j=Ia(o,g),j!=null&&T.push(Ku(o,j,O)))),o=o.return}T.length!==0&&s.push({event:r,listeners:T})}var nN=/\r\n?/g,iN=/\u0000|\uFFFD/g;function u0(s){return(typeof s=="string"?s:""+s).replace(nN,`
`).replace(iN,"")}function c0(s,r){return r=u0(r),u0(s)===r}function Ef(){}function ut(s,r,o,u,f,g){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||ui(s,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&ui(s,""+u);break;case"className":vr(s,"class",u);break;case"tabIndex":vr(s,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":vr(s,o,u);break;case"style":Th(s,u,g);break;case"data":if(r!=="object"){vr(s,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){s.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){s.removeAttribute(o);break}u=Gi(""+u),s.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){s.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(o==="formAction"?(r!=="input"&&ut(s,r,"name",f.name,f,null),ut(s,r,"formEncType",f.formEncType,f,null),ut(s,r,"formMethod",f.formMethod,f,null),ut(s,r,"formTarget",f.formTarget,f,null)):(ut(s,r,"encType",f.encType,f,null),ut(s,r,"method",f.method,f,null),ut(s,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){s.removeAttribute(o);break}u=Gi(""+u),s.setAttribute(o,u);break;case"onClick":u!=null&&(s.onclick=Ef);break;case"onScroll":u!=null&&Ke("scroll",s);break;case"onScrollEnd":u!=null&&Ke("scrollend",s);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(i(60));s.innerHTML=o}}break;case"multiple":s.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":s.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){s.removeAttribute("xlink:href");break}o=Gi(""+u),s.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?s.setAttribute(o,""+u):s.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?s.setAttribute(o,""):s.removeAttribute(o);break;case"capture":case"download":u===!0?s.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?s.setAttribute(o,u):s.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?s.setAttribute(o,u):s.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?s.removeAttribute(o):s.setAttribute(o,u);break;case"popover":Ke("beforetoggle",s),Ke("toggle",s),yr(s,"popover",u);break;case"xlinkActuate":li(s,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":li(s,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":li(s,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":li(s,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":li(s,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":li(s,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":li(s,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":li(s,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":li(s,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":yr(s,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Cp.get(o)||o,yr(s,o,u))}}function ig(s,r,o,u,f,g){switch(o){case"style":Th(s,u,g);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(i(60));s.innerHTML=o}}break;case"children":typeof u=="string"?ui(s,u):(typeof u=="number"||typeof u=="bigint")&&ui(s,""+u);break;case"onScroll":u!=null&&Ke("scroll",s);break;case"onScrollEnd":u!=null&&Ke("scrollend",s);break;case"onClick":u!=null&&(s.onclick=Ef);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ro.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),g=s[Ht]||null,g=g!=null?g[o]:null,typeof g=="function"&&s.removeEventListener(r,g,f),typeof u=="function")){typeof g!="function"&&g!==null&&(o in s?s[o]=null:s.hasAttribute(o)&&s.removeAttribute(o)),s.addEventListener(r,u,f);break e}o in s?s[o]=u:u===!0?s.setAttribute(o,""):yr(s,o,u)}}}function dn(s,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ke("error",s),Ke("load",s);var u=!1,f=!1,g;for(g in o)if(o.hasOwnProperty(g)){var T=o[g];if(T!=null)switch(g){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:ut(s,r,g,T,o,null)}}f&&ut(s,r,"srcSet",o.srcSet,o,null),u&&ut(s,r,"src",o.src,o,null);return;case"input":Ke("invalid",s);var w=g=T=f=null,O=null,j=null;for(u in o)if(o.hasOwnProperty(u)){var ee=o[u];if(ee!=null)switch(u){case"name":f=ee;break;case"type":T=ee;break;case"checked":O=ee;break;case"defaultChecked":j=ee;break;case"value":g=ee;break;case"defaultValue":w=ee;break;case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(i(137,r));break;default:ut(s,r,u,ee,o,null)}}Ca(s,g,w,O,j,T,f,!1),wa(s);return;case"select":Ke("invalid",s),u=T=g=null;for(f in o)if(o.hasOwnProperty(f)&&(w=o[f],w!=null))switch(f){case"value":g=w;break;case"defaultValue":T=w;break;case"multiple":u=w;default:ut(s,r,f,w,o,null)}r=g,o=T,s.multiple=!!u,r!=null?nt(s,!!u,r,!1):o!=null&&nt(s,!!u,o,!0);return;case"textarea":Ke("invalid",s),g=f=u=null;for(T in o)if(o.hasOwnProperty(T)&&(w=o[T],w!=null))switch(T){case"value":u=w;break;case"defaultValue":f=w;break;case"children":g=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(i(91));break;default:ut(s,r,T,w,o,null)}Tr(s,u,f,g),wa(s);return;case"option":for(O in o)if(o.hasOwnProperty(O)&&(u=o[O],u!=null))switch(O){case"selected":s.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:ut(s,r,O,u,o,null)}return;case"dialog":Ke("cancel",s),Ke("close",s);break;case"iframe":case"object":Ke("load",s);break;case"video":case"audio":for(u=0;u<Wu.length;u++)Ke(Wu[u],s);break;case"image":Ke("error",s),Ke("load",s);break;case"details":Ke("toggle",s);break;case"embed":case"source":case"link":Ke("error",s),Ke("load",s);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in o)if(o.hasOwnProperty(j)&&(u=o[j],u!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:ut(s,r,j,u,o,null)}return;default:if(uu(r)){for(ee in o)o.hasOwnProperty(ee)&&(u=o[ee],u!==void 0&&ig(s,r,ee,u,o,void 0));return}}for(w in o)o.hasOwnProperty(w)&&(u=o[w],u!=null&&ut(s,r,w,u,o,null))}function sN(s,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,g=null,T=null,w=null,O=null,j=null,ee=null;for(J in o){var ae=o[J];if(o.hasOwnProperty(J)&&ae!=null)switch(J){case"checked":break;case"value":break;case"defaultValue":O=ae;default:u.hasOwnProperty(J)||ut(s,r,J,null,u,ae)}}for(var K in u){var J=u[K];if(ae=o[K],u.hasOwnProperty(K)&&(J!=null||ae!=null))switch(K){case"type":g=J;break;case"name":f=J;break;case"checked":j=J;break;case"defaultChecked":ee=J;break;case"value":T=J;break;case"defaultValue":w=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(i(137,r));break;default:J!==ae&&ut(s,r,K,J,u,ae)}}Er(s,T,w,O,j,ee,g,f);return;case"select":J=T=w=K=null;for(g in o)if(O=o[g],o.hasOwnProperty(g)&&O!=null)switch(g){case"value":break;case"multiple":J=O;default:u.hasOwnProperty(g)||ut(s,r,g,null,u,O)}for(f in u)if(g=u[f],O=o[f],u.hasOwnProperty(f)&&(g!=null||O!=null))switch(f){case"value":K=g;break;case"defaultValue":w=g;break;case"multiple":T=g;default:g!==O&&ut(s,r,f,g,u,O)}r=w,o=T,u=J,K!=null?nt(s,!!o,K,!1):!!u!=!!o&&(r!=null?nt(s,!!o,r,!0):nt(s,!!o,o?[]:"",!1));return;case"textarea":J=K=null;for(w in o)if(f=o[w],o.hasOwnProperty(w)&&f!=null&&!u.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:ut(s,r,w,null,u,f)}for(T in u)if(f=u[T],g=o[T],u.hasOwnProperty(T)&&(f!=null||g!=null))switch(T){case"value":K=f;break;case"defaultValue":J=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(i(91));break;default:f!==g&&ut(s,r,T,f,u,g)}Ra(s,K,J);return;case"option":for(var Ae in o)if(K=o[Ae],o.hasOwnProperty(Ae)&&K!=null&&!u.hasOwnProperty(Ae))switch(Ae){case"selected":s.selected=!1;break;default:ut(s,r,Ae,null,u,K)}for(O in u)if(K=u[O],J=o[O],u.hasOwnProperty(O)&&K!==J&&(K!=null||J!=null))switch(O){case"selected":s.selected=K&&typeof K!="function"&&typeof K!="symbol";break;default:ut(s,r,O,K,u,J)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Me in o)K=o[Me],o.hasOwnProperty(Me)&&K!=null&&!u.hasOwnProperty(Me)&&ut(s,r,Me,null,u,K);for(j in u)if(K=u[j],J=o[j],u.hasOwnProperty(j)&&K!==J&&(K!=null||J!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(i(137,r));break;default:ut(s,r,j,K,u,J)}return;default:if(uu(r)){for(var Nt in o)K=o[Nt],o.hasOwnProperty(Nt)&&K!==void 0&&!u.hasOwnProperty(Nt)&&ig(s,r,Nt,void 0,u,K);for(ee in u)K=u[ee],J=o[ee],!u.hasOwnProperty(ee)||K===J||K===void 0&&J===void 0||ig(s,r,ee,K,u,J);return}}for(var z in o)K=o[z],o.hasOwnProperty(z)&&K!=null&&!u.hasOwnProperty(z)&&ut(s,r,z,null,u,K);for(ae in u)K=u[ae],J=o[ae],!u.hasOwnProperty(ae)||K===J||K==null&&J==null||ut(s,r,ae,K,u,J)}var sg=null,rg=null;function Tf(s){return s.nodeType===9?s:s.ownerDocument}function h0(s){switch(s){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function f0(s,r){if(s===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return s===1&&r==="foreignObject"?0:s}function ag(s,r){return s==="textarea"||s==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var og=null;function rN(){var s=window.event;return s&&s.type==="popstate"?s===og?!1:(og=s,!0):(og=null,!1)}var d0=typeof setTimeout=="function"?setTimeout:void 0,aN=typeof clearTimeout=="function"?clearTimeout:void 0,p0=typeof Promise=="function"?Promise:void 0,oN=typeof queueMicrotask=="function"?queueMicrotask:typeof p0<"u"?function(s){return p0.resolve(null).then(s).catch(lN)}:d0;function lN(s){setTimeout(function(){throw s})}function lg(s,r){var o=r,u=0;do{var f=o.nextSibling;if(s.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(u===0){s.removeChild(f),tc(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=f}while(o);tc(r)}function ug(s){var r=s.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":ug(o),Aa(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}s.removeChild(o)}}function uN(s,r,o,u){for(;s.nodeType===1;){var f=o;if(s.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(s.nodeName!=="INPUT"||s.type!=="hidden"))break}else if(u){if(!s[mr])switch(r){case"meta":if(!s.hasAttribute("itemprop"))break;return s;case"link":if(g=s.getAttribute("rel"),g==="stylesheet"&&s.hasAttribute("data-precedence"))break;if(g!==f.rel||s.getAttribute("href")!==(f.href==null?null:f.href)||s.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||s.getAttribute("title")!==(f.title==null?null:f.title))break;return s;case"style":if(s.hasAttribute("data-precedence"))break;return s;case"script":if(g=s.getAttribute("src"),(g!==(f.src==null?null:f.src)||s.getAttribute("type")!==(f.type==null?null:f.type)||s.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&g&&s.hasAttribute("async")&&!s.hasAttribute("itemprop"))break;return s;default:return s}}else if(r==="input"&&s.type==="hidden"){var g=f.name==null?null:""+f.name;if(f.type==="hidden"&&s.getAttribute("name")===g)return s}else return s;if(s=ki(s.nextSibling),s===null)break}return null}function cN(s,r,o){if(r==="")return null;for(;s.nodeType!==3;)if((s.nodeType!==1||s.nodeName!=="INPUT"||s.type!=="hidden")&&!o||(s=ki(s.nextSibling),s===null))return null;return s}function ki(s){for(;s!=null;s=s.nextSibling){var r=s.nodeType;if(r===1||r===3)break;if(r===8){if(r=s.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return s}function m0(s){s=s.previousSibling;for(var r=0;s;){if(s.nodeType===8){var o=s.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return s;r--}else o==="/$"&&r++}s=s.previousSibling}return null}function g0(s,r,o){switch(r=Tf(o),s){case"html":if(s=r.documentElement,!s)throw Error(i(452));return s;case"head":if(s=r.head,!s)throw Error(i(453));return s;case"body":if(s=r.body,!s)throw Error(i(454));return s;default:throw Error(i(451))}}var Si=new Map,_0=new Set;function Sf(s){return typeof s.getRootNode=="function"?s.getRootNode():s.ownerDocument}var Fs=Q.d;Q.d={f:hN,r:fN,D:dN,C:pN,L:mN,m:gN,X:yN,S:_N,M:vN};function hN(){var s=Fs.f(),r=pf();return s||r}function fN(s){var r=Es(s);r!==null&&r.tag===5&&r.type==="form"?qE(r):Fs.r(s)}var ll=typeof document>"u"?null:document;function y0(s,r,o){var u=ll;if(u&&typeof r=="string"&&r){var f=Ct(r);f='link[rel="'+s+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),_0.has(f)||(_0.add(f),s={rel:s,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),dn(r,"link",s),Et(r),u.head.appendChild(r)))}}function dN(s){Fs.D(s),y0("dns-prefetch",s,null)}function pN(s,r){Fs.C(s,r),y0("preconnect",s,r)}function mN(s,r,o){Fs.L(s,r,o);var u=ll;if(u&&s&&r){var f='link[rel="preload"][as="'+Ct(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Ct(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Ct(o.imageSizes)+'"]')):f+='[href="'+Ct(s)+'"]';var g=f;switch(r){case"style":g=ul(s);break;case"script":g=cl(s)}Si.has(g)||(s=N({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:s,as:r},o),Si.set(g,s),u.querySelector(f)!==null||r==="style"&&u.querySelector($u(g))||r==="script"&&u.querySelector(Yu(g))||(r=u.createElement("link"),dn(r,"link",s),Et(r),u.head.appendChild(r)))}}function gN(s,r){Fs.m(s,r);var o=ll;if(o&&s){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+Ct(u)+'"][href="'+Ct(s)+'"]',g=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=cl(s)}if(!Si.has(g)&&(s=N({rel:"modulepreload",href:s},r),Si.set(g,s),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Yu(g)))return}u=o.createElement("link"),dn(u,"link",s),Et(u),o.head.appendChild(u)}}}function _N(s,r,o){Fs.S(s,r,o);var u=ll;if(u&&s){var f=_r(u).hoistableStyles,g=ul(s);r=r||"default";var T=f.get(g);if(!T){var w={loading:0,preload:null};if(T=u.querySelector($u(g)))w.loading=5;else{s=N({rel:"stylesheet",href:s,"data-precedence":r},o),(o=Si.get(g))&&cg(s,o);var O=T=u.createElement("link");Et(O),dn(O,"link",s),O._p=new Promise(function(j,ee){O.onload=j,O.onerror=ee}),O.addEventListener("load",function(){w.loading|=1}),O.addEventListener("error",function(){w.loading|=2}),w.loading|=4,bf(T,r,u)}T={type:"stylesheet",instance:T,count:1,state:w},f.set(g,T)}}}function yN(s,r){Fs.X(s,r);var o=ll;if(o&&s){var u=_r(o).hoistableScripts,f=cl(s),g=u.get(f);g||(g=o.querySelector(Yu(f)),g||(s=N({src:s,async:!0},r),(r=Si.get(f))&&hg(s,r),g=o.createElement("script"),Et(g),dn(g,"link",s),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(f,g))}}function vN(s,r){Fs.M(s,r);var o=ll;if(o&&s){var u=_r(o).hoistableScripts,f=cl(s),g=u.get(f);g||(g=o.querySelector(Yu(f)),g||(s=N({src:s,async:!0,type:"module"},r),(r=Si.get(f))&&hg(s,r),g=o.createElement("script"),Et(g),dn(g,"link",s),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(f,g))}}function v0(s,r,o,u){var f=(f=Zt.current)?Sf(f):null;if(!f)throw Error(i(446));switch(s){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=ul(o.href),o=_r(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){s=ul(o.href);var g=_r(f).hoistableStyles,T=g.get(s);if(T||(f=f.ownerDocument||f,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(s,T),(g=f.querySelector($u(s)))&&!g._p&&(T.instance=g,T.state.loading=5),Si.has(s)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Si.set(s,o),g||EN(f,s,o,T.state))),r&&u===null)throw Error(i(528,""));return T}if(r&&u!==null)throw Error(i(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=cl(o),o=_r(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,s))}}function ul(s){return'href="'+Ct(s)+'"'}function $u(s){return'link[rel="stylesheet"]['+s+"]"}function E0(s){return N({},s,{"data-precedence":s.precedence,precedence:null})}function EN(s,r,o,u){s.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=s.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),dn(r,"link",o),Et(r),s.head.appendChild(r))}function cl(s){return'[src="'+Ct(s)+'"]'}function Yu(s){return"script[async]"+s}function T0(s,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=s.querySelector('style[data-href~="'+Ct(o.href)+'"]');if(u)return r.instance=u,Et(u),u;var f=N({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(s.ownerDocument||s).createElement("style"),Et(u),dn(u,"style",f),bf(u,o.precedence,s),r.instance=u;case"stylesheet":f=ul(o.href);var g=s.querySelector($u(f));if(g)return r.state.loading|=4,r.instance=g,Et(g),g;u=E0(o),(f=Si.get(f))&&cg(u,f),g=(s.ownerDocument||s).createElement("link"),Et(g);var T=g;return T._p=new Promise(function(w,O){T.onload=w,T.onerror=O}),dn(g,"link",u),r.state.loading|=4,bf(g,o.precedence,s),r.instance=g;case"script":return g=cl(o.src),(f=s.querySelector(Yu(g)))?(r.instance=f,Et(f),f):(u=o,(f=Si.get(g))&&(u=N({},o),hg(u,f)),s=s.ownerDocument||s,f=s.createElement("script"),Et(f),dn(f,"link",u),s.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(i(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,bf(u,o.precedence,s));return r.instance}function bf(s,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,g=f,T=0;T<u.length;T++){var w=u[T];if(w.dataset.precedence===r)g=w;else if(g!==f)break}g?g.parentNode.insertBefore(s,g.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(s,r.firstChild))}function cg(s,r){s.crossOrigin==null&&(s.crossOrigin=r.crossOrigin),s.referrerPolicy==null&&(s.referrerPolicy=r.referrerPolicy),s.title==null&&(s.title=r.title)}function hg(s,r){s.crossOrigin==null&&(s.crossOrigin=r.crossOrigin),s.referrerPolicy==null&&(s.referrerPolicy=r.referrerPolicy),s.integrity==null&&(s.integrity=r.integrity)}var Af=null;function S0(s,r,o){if(Af===null){var u=new Map,f=Af=new Map;f.set(o,u)}else f=Af,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(s))return u;for(u.set(s,null),o=o.getElementsByTagName(s),f=0;f<o.length;f++){var g=o[f];if(!(g[mr]||g[Jt]||s==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var T=g.getAttribute(r)||"";T=s+T;var w=u.get(T);w?w.push(g):u.set(T,[g])}}return u}function b0(s,r,o){s=s.ownerDocument||s,s.head.insertBefore(o,r==="title"?s.querySelector("head > title"):null)}function TN(s,r,o){if(o===1||r.itemProp!=null)return!1;switch(s){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return s=r.disabled,typeof r.precedence=="string"&&s==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function A0(s){return!(s.type==="stylesheet"&&(s.state.loading&3)===0)}var Qu=null;function SN(){}function bN(s,r,o){if(Qu===null)throw Error(i(475));var u=Qu;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=ul(o.href),g=s.querySelector($u(f));if(g){s=g._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(u.count++,u=wf.bind(u),s.then(u,u)),r.state.loading|=4,r.instance=g,Et(g);return}g=s.ownerDocument||s,o=E0(o),(f=Si.get(f))&&cg(o,f),g=g.createElement("link"),Et(g);var T=g;T._p=new Promise(function(w,O){T.onload=w,T.onerror=O}),dn(g,"link",o),r.instance=g}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,s),(s=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=wf.bind(u),s.addEventListener("load",r),s.addEventListener("error",r))}}function AN(){if(Qu===null)throw Error(i(475));var s=Qu;return s.stylesheets&&s.count===0&&fg(s,s.stylesheets),0<s.count?function(r){var o=setTimeout(function(){if(s.stylesheets&&fg(s,s.stylesheets),s.unsuspend){var u=s.unsuspend;s.unsuspend=null,u()}},6e4);return s.unsuspend=r,function(){s.unsuspend=null,clearTimeout(o)}}:null}function wf(){if(this.count--,this.count===0){if(this.stylesheets)fg(this,this.stylesheets);else if(this.unsuspend){var s=this.unsuspend;this.unsuspend=null,s()}}}var Cf=null;function fg(s,r){s.stylesheets=null,s.unsuspend!==null&&(s.count++,Cf=new Map,r.forEach(wN,s),Cf=null,wf.call(s))}function wN(s,r){if(!(r.state.loading&4)){var o=Cf.get(s);if(o)var u=o.get(null);else{o=new Map,Cf.set(s,o);for(var f=s.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<f.length;g++){var T=f[g];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(o.set(T.dataset.precedence,T),u=T)}u&&o.set(null,u)}f=r.instance,T=f.getAttribute("data-precedence"),g=o.get(T)||u,g===u&&o.set(null,f),o.set(T,f),this.count++,u=wf.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),g?g.parentNode.insertBefore(f,g.nextSibling):(s=s.nodeType===9?s.head:s,s.insertBefore(f,s.firstChild)),r.state.loading|=4}}var Xu={$$typeof:D,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function CN(s,r,o,u,f,g,T,w){this.tag=1,this.containerInfo=s,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wo(0),this.hiddenUpdates=wo(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=g,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function w0(s,r,o,u,f,g,T,w,O,j,ee,ae){return s=new CN(s,r,o,T,w,O,j,ae),r=1,g===!0&&(r|=24),g=Ei(3,null,null,r),s.current=g,g.stateNode=s,r=qp(),r.refCount++,s.pooledCache=r,r.refCount++,g.memoizedState={element:u,isDehydrated:o,cache:r},Am(g),s}function C0(s){return s?(s=Fo,s):Fo}function R0(s,r,o,u,f,g){f=C0(f),u.context===null?u.context=f:u.pendingContext=f,u=xr(r),u.payload={element:o},g=g===void 0?null:g,g!==null&&(u.callback=g),o=Or(s,u,r),o!==null&&(Un(o,s,r),Pu(o,s,r))}function I0(s,r){if(s=s.memoizedState,s!==null&&s.dehydrated!==null){var o=s.retryLane;s.retryLane=o!==0&&o<r?o:r}}function dg(s,r){I0(s,r),(s=s.alternate)&&I0(s,r)}function N0(s){if(s.tag===13){var r=br(s,67108864);r!==null&&Un(r,s,67108864),dg(s,67108864)}}var Rf=!0;function RN(s,r,o,u){var f=I.T;I.T=null;var g=Q.p;try{Q.p=2,pg(s,r,o,u)}finally{Q.p=g,I.T=f}}function IN(s,r,o,u){var f=I.T;I.T=null;var g=Q.p;try{Q.p=8,pg(s,r,o,u)}finally{Q.p=g,I.T=f}}function pg(s,r,o,u){if(Rf){var f=mg(u);if(f===null)ng(s,r,u,If,o),O0(s,u);else if(xN(f,s,r,o,u))u.stopPropagation();else if(O0(s,u),r&4&&-1<NN.indexOf(s)){for(;f!==null;){var g=Es(f);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var T=Ii(g.pendingLanes);if(T!==0){var w=g;for(w.pendingLanes|=2,w.entangledLanes|=2;T;){var O=1<<31-kn(T);w.entanglements[1]|=O,T&=~O}ns(g),(St&6)===0&&(hf=un()+500,Gu(0))}}break;case 13:w=br(g,2),w!==null&&Un(w,g,2),pf(),dg(g,2)}if(g=mg(u),g===null&&ng(s,r,u,If,o),g===f)break;f=g}f!==null&&u.stopPropagation()}else ng(s,r,u,null,o)}}function mg(s){return s=xo(s),gg(s)}var If=null;function gg(s){if(If=null,s=Ni(s),s!==null){var r=he(s);if(r===null)s=null;else{var o=r.tag;if(o===13){if(s=be(r),s!==null)return s;s=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;s=null}else r!==s&&(s=null)}}return If=s,null}function x0(s){switch(s){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ta()){case vt:return 2;case Vt:return 8;case ys:case dh:return 32;case Jl:return 268435456;default:return 32}default:return 32}}var _g=!1,Vr=null,jr=null,Br=null,Zu=new Map,Ju=new Map,zr=[],NN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function O0(s,r){switch(s){case"focusin":case"focusout":Vr=null;break;case"dragenter":case"dragleave":jr=null;break;case"mouseover":case"mouseout":Br=null;break;case"pointerover":case"pointerout":Zu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ju.delete(r.pointerId)}}function ec(s,r,o,u,f,g){return s===null||s.nativeEvent!==g?(s={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[f]},r!==null&&(r=Es(r),r!==null&&N0(r)),s):(s.eventSystemFlags|=u,r=s.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),s)}function xN(s,r,o,u,f){switch(r){case"focusin":return Vr=ec(Vr,s,r,o,u,f),!0;case"dragenter":return jr=ec(jr,s,r,o,u,f),!0;case"mouseover":return Br=ec(Br,s,r,o,u,f),!0;case"pointerover":var g=f.pointerId;return Zu.set(g,ec(Zu.get(g)||null,s,r,o,u,f)),!0;case"gotpointercapture":return g=f.pointerId,Ju.set(g,ec(Ju.get(g)||null,s,r,o,u,f)),!0}return!1}function D0(s){var r=Ni(s.target);if(r!==null){var o=he(r);if(o!==null){if(r=o.tag,r===13){if(r=be(o),r!==null){s.blockedOn=r,pr(s.priority,function(){if(o.tag===13){var u=Jn(),f=br(o,u);f!==null&&Un(f,o,u),dg(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){s.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}s.blockedOn=null}function Nf(s){if(s.blockedOn!==null)return!1;for(var r=s.targetContainers;0<r.length;){var o=mg(s.nativeEvent);if(o===null){o=s.nativeEvent;var u=new o.constructor(o.type,o);ci=u,o.target.dispatchEvent(u),ci=null}else return r=Es(o),r!==null&&N0(r),s.blockedOn=o,!1;r.shift()}return!0}function k0(s,r,o){Nf(s)&&o.delete(r)}function ON(){_g=!1,Vr!==null&&Nf(Vr)&&(Vr=null),jr!==null&&Nf(jr)&&(jr=null),Br!==null&&Nf(Br)&&(Br=null),Zu.forEach(k0),Ju.forEach(k0)}function xf(s,r){s.blockedOn===r&&(s.blockedOn=null,_g||(_g=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,ON)))}var Of=null;function P0(s){Of!==s&&(Of=s,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Of===s&&(Of=null);for(var r=0;r<s.length;r+=3){var o=s[r],u=s[r+1],f=s[r+2];if(typeof u!="function"){if(gg(u||o)===null)continue;break}var g=Es(o);g!==null&&(s.splice(r,3),r-=3,am(g,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function tc(s){function r(O){return xf(O,s)}Vr!==null&&xf(Vr,s),jr!==null&&xf(jr,s),Br!==null&&xf(Br,s),Zu.forEach(r),Ju.forEach(r);for(var o=0;o<zr.length;o++){var u=zr[o];u.blockedOn===s&&(u.blockedOn=null)}for(;0<zr.length&&(o=zr[0],o.blockedOn===null);)D0(o),o.blockedOn===null&&zr.shift();if(o=(s.ownerDocument||s).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],g=o[u+1],T=f[Ht]||null;if(typeof g=="function")T||P0(o);else if(T){var w=null;if(g&&g.hasAttribute("formAction")){if(f=g,T=g[Ht]||null)w=T.formAction;else if(gg(f)!==null)continue}else w=T.action;typeof w=="function"?o[u+1]=w:(o.splice(u,3),u-=3),P0(o)}}}function yg(s){this._internalRoot=s}Df.prototype.render=yg.prototype.render=function(s){var r=this._internalRoot;if(r===null)throw Error(i(409));var o=r.current,u=Jn();R0(o,u,s,r,null,null)},Df.prototype.unmount=yg.prototype.unmount=function(){var s=this._internalRoot;if(s!==null){this._internalRoot=null;var r=s.containerInfo;s.tag===0&&rl(),R0(s.current,2,null,s,null,null),pf(),r[vs]=null}};function Df(s){this._internalRoot=s}Df.prototype.unstable_scheduleHydration=function(s){if(s){var r=yh();s={blockedOn:null,target:s,priority:r};for(var o=0;o<zr.length&&r!==0&&r<zr[o].priority;o++);zr.splice(o,0,s),o===0&&D0(s)}};var M0=e.version;if(M0!=="19.0.0")throw Error(i(527,M0,"19.0.0"));Q.findDOMNode=function(s){var r=s._reactInternals;if(r===void 0)throw typeof s.render=="function"?Error(i(188)):(s=Object.keys(s).join(","),Error(i(268,s)));return s=Z(r),s=s!==null?ve(s):null,s=s===null?null:s.stateNode,s};var DN={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:I,findFiberByHostInstance:Ni,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kf.isDisabled&&kf.supportsFiber)try{lr=kf.inject(DN),vn=kf}catch{}}return ic.createRoot=function(s,r){if(!a(s))throw Error(i(299));var o=!1,u="",f=ZE,g=JE,T=eT,w=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(g=r.onCaughtError),r.onRecoverableError!==void 0&&(T=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(w=r.unstable_transitionCallbacks)),r=w0(s,1,!1,null,null,o,u,f,g,T,w,null),s[vs]=r.current,tg(s.nodeType===8?s.parentNode:s),new yg(r)},ic.hydrateRoot=function(s,r,o){if(!a(s))throw Error(i(299));var u=!1,f="",g=ZE,T=JE,w=eT,O=null,j=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(g=o.onUncaughtError),o.onCaughtError!==void 0&&(T=o.onCaughtError),o.onRecoverableError!==void 0&&(w=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(O=o.unstable_transitionCallbacks),o.formState!==void 0&&(j=o.formState)),r=w0(s,1,!0,r,o??null,u,f,g,T,w,O,j),r.context=C0(null),o=r.current,u=Jn(),f=xr(u),f.callback=null,Or(o,f,u),r.current.lanes=u,Pt(r,u),ns(r),s[vs]=r.current,tg(s),new Df(r)},ic.version="19.0.0",ic}var G0;function zN(){if(G0)return Tg.exports;G0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Tg.exports=BN(),Tg.exports}var FN=zN();const HN="_hideHome_1sau2_19",qN="_home_wrapper_1sau2_27",GN="_left_1sau2_43",WN="_wrapTop_1sau2_61",KN="_wrapBottom_1sau2_141",$N="_orange_1sau2_171",YN="_purple_1sau2_177",QN="_blue_1sau2_183",XN="_right_1sau2_193",Hs={hideHome:HN,home_wrapper:qN,left:GN,wrapTop:WN,wrapBottom:KN,orange:$N,purple:YN,blue:QN,right:XN},ZN="_animateLeft_1cea5_1",JN="_animateImg_1cea5_11",W0={animateLeft:ZN,animateImg:JN},me=({className:n,content:e,func:t,submit:i,icon:a,change:l,element:c})=>v.jsxs("button",{className:`${n}`,onSubmit:d=>{i(d)},onClick:()=>{t()},children:[a,e,c]}),ex="_nav_ym7as_47",tx="_hideNav_ym7as_55",nx="_left_ym7as_101",ix="_middle_ym7as_129",sx="_NavLinks_ym7as_129",rx="_indicated_ym7as_167",ax="_indication_ym7as_177",ox="_right_ym7as_195",lx="_HamburgerButt_ym7as_207",ux="_SignInButt_ym7as_253",cx="_SignUpButt_ym7as_287",hx="_sidebar_ym7as_319",fx="_hideSideBar_ym7as_329",dx="_User_Button_ym7as_547",ft={nav:ex,hideNav:tx,left:nx,middle:ix,NavLinks:sx,indicated:rx,indication:ax,right:ox,HamburgerButt:lx,SignInButt:ux,SignUpButt:cx,sidebar:hx,hideSideBar:fx,User_Button:dx},px=()=>{};var K0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge=function(n,e){if(!n)throw Fl(e)},Fl=function(n){return new Error("Firebase Database ("+LA.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let a=n.charCodeAt(i);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},mx=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const a=n[t++];if(a<128)e[i++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[i++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],c=n[t++],d=n[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},ty={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let a=0;a<n.length;a+=3){const l=n[a],c=a+1<n.length,d=c?n[a+1]:0,p=a+2<n.length,m=p?n[a+2]:0,y=l>>2,S=(l&3)<<4|d>>4;let A=(d&15)<<2|m>>6,D=m&63;p||(D=64,c||(A=64)),i.push(t[y],t[S],t[A],t[D])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(UA(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):mx(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const m=a<n.length?t[n.charAt(a)]:64;++a;const S=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||d==null||m==null||S==null)throw new gx;const A=l<<2|d>>4;if(i.push(A),m!==64){const D=d<<4&240|m>>2;if(i.push(D),S!==64){const V=m<<6&192|S;i.push(V)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class gx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const VA=function(n){const e=UA(n);return ty.encodeByteArray(e,!0)},ld=function(n){return VA(n).replace(/\./g,"")},ud=function(n){try{return ty.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _x(n){return jA(void 0,n)}function jA(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!yx(t)||(n[t]=jA(n[t],e[t]));return n}function yx(n){return n!=="__proto__"}/**
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
 */function vx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ex=()=>vx().__FIREBASE_DEFAULTS__,Tx=()=>{if(typeof process>"u"||typeof K0>"u")return;const n=K0.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Sx=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ud(n[1]);return e&&JSON.parse(e)},Bd=()=>{try{return px()||Ex()||Tx()||Sx()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},BA=n=>{var e,t;return(t=(e=Bd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},zA=n=>{const e=BA(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},FA=()=>{var n;return(n=Bd())===null||n===void 0?void 0:n.config},HA=n=>{var e;return(e=Bd())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function qA(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ld(JSON.stringify(t)),ld(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function iy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xn())}function bx(){var n;const e=(n=Bd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ax(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function wx(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function GA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cx(){const n=xn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Rx(){return LA.NODE_ADMIN===!0}function Ix(){return!bx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Nx(){try{return typeof indexedDB=="object"}catch{return!1}}function xx(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(i);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox="FirebaseError";class gs extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Ox,Object.setPrototypeOf(this,gs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$c.prototype.create)}}class $c{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?Dx(l,i):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new gs(a,d,i)}}function Dx(n,e){return n.replace(kx,(t,i)=>{const a=e[i];return a!=null?String(a):`<${i}?>`})}const kx=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(n){return JSON.parse(n)}function gn(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=function(n){let e={},t={},i={},a="";try{const l=n.split(".");e=Pc(ud(l[0])||""),t=Pc(ud(l[1])||""),a=l[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:a}},Px=function(n){const e=WA(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Mx=function(n){const e=WA(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function xl(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Zg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function cd(n,e,t){const i={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=e.call(t,n[a],a,n));return i}function ia(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const a of t){if(!i.includes(a))return!1;const l=n[a],c=e[a];if($0(l)&&$0(c)){if(!ia(l,c))return!1}else if(l!==c)return!1}for(const a of i)if(!t.includes(a))return!1;return!0}function $0(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function mc(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[a,l]=i.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function gc(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let S=0;S<16;S++)i[S]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let S=0;S<16;S++)i[S]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let S=16;S<80;S++){const A=i[S-3]^i[S-8]^i[S-14]^i[S-16];i[S]=(A<<1|A>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],p=this.chain_[4],m,y;for(let S=0;S<80;S++){S<40?S<20?(m=d^l&(c^d),y=1518500249):(m=l^c^d,y=1859775393):S<60?(m=l&c|d&(l|c),y=2400959708):(m=l^c^d,y=3395469782);const A=(a<<5|a>>>27)+m+p+y+i[S]&4294967295;p=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=A}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=i;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[i]=this.chain_[a]>>l&255,++i;return e}}function Ux(n,e){const t=new Vx(n,e);return t.subscribe.bind(t)}class Vx{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let a;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");jx(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:i},a.next===void 0&&(a.next=wg),a.error===void 0&&(a.error=wg),a.complete===void 0&&(a.complete=wg);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jx(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function wg(){}function Bx(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let a=n.charCodeAt(i);if(a>=55296&&a<=56319){const l=a-55296;i++,ge(i<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(i)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},zd=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function bt(n){return n&&n._delegate?n._delegate:n}class Js{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const eo="[DEFAULT]";/**
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
 */class Fx{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new ny;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&i.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qx(e))try{this.getOrInitializeService({instanceIdentifier:eo})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});i.resolve(l)}catch{}}}}clearInstance(e=eo){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=eo){return this.instances.has(e)}getOptions(e=eo){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&c.resolve(a)}return a}onInit(e,t){var i;const a=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(a))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const a of i)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Hx(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=eo){return this.component?this.component.multipleInstances?e:eo:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hx(n){return n===eo?void 0:n}function qx(n){return n.instantiationMode==="EAGER"}/**
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
 */class Gx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Fx(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(He||(He={}));const Wx={debug:He.DEBUG,verbose:He.VERBOSE,info:He.INFO,warn:He.WARN,error:He.ERROR,silent:He.SILENT},Kx=He.INFO,$x={[He.DEBUG]:"log",[He.VERBOSE]:"log",[He.INFO]:"info",[He.WARN]:"warn",[He.ERROR]:"error"},Yx=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),a=$x[e];if(a)console[a](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fd{constructor(e){this.name=e,this._logLevel=Kx,this._logHandler=Yx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in He))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,He.DEBUG,...e),this._logHandler(this,He.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,He.VERBOSE,...e),this._logHandler(this,He.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,He.INFO,...e),this._logHandler(this,He.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,He.WARN,...e),this._logHandler(this,He.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,He.ERROR,...e),this._logHandler(this,He.ERROR,...e)}}const Qx=(n,e)=>e.some(t=>n instanceof t);let Y0,Q0;function Xx(){return Y0||(Y0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zx(){return Q0||(Q0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const KA=new WeakMap,Jg=new WeakMap,$A=new WeakMap,Cg=new WeakMap,sy=new WeakMap;function Jx(n){const e=new Promise((t,i)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Zr(n.result)),a()},c=()=>{i(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&KA.set(t,n)}).catch(()=>{}),sy.set(e,n),e}function eO(n){if(Jg.has(n))return;const e=new Promise((t,i)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Jg.set(n,e)}let e_={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Jg.get(n);if(e==="objectStoreNames")return n.objectStoreNames||$A.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Zr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function tO(n){e_=n(e_)}function nO(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Rg(this),e,...t);return $A.set(i,e.sort?e.sort():[e]),Zr(i)}:Zx().includes(n)?function(...e){return n.apply(Rg(this),e),Zr(KA.get(this))}:function(...e){return Zr(n.apply(Rg(this),e))}}function iO(n){return typeof n=="function"?nO(n):(n instanceof IDBTransaction&&eO(n),Qx(n,Xx())?new Proxy(n,e_):n)}function Zr(n){if(n instanceof IDBRequest)return Jx(n);if(Cg.has(n))return Cg.get(n);const e=iO(n);return e!==n&&(Cg.set(n,e),sy.set(e,n)),e}const Rg=n=>sy.get(n);function sO(n,e,{blocked:t,upgrade:i,blocking:a,terminated:l}={}){const c=indexedDB.open(n,e),d=Zr(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Zr(c.result),p.oldVersion,p.newVersion,Zr(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",m=>a(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const rO=["get","getKey","getAll","getAllKeys","count"],aO=["put","add","delete","clear"],Ig=new Map;function X0(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ig.get(e))return Ig.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,a=aO.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(a||rO.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let m=p.store;return i&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),a&&p.done]))[0]};return Ig.set(e,l),l}tO(n=>({...n,get:(e,t,i)=>X0(e,t)||n.get(e,t,i),has:(e,t)=>!!X0(e,t)||n.has(e,t)}));/**
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
 */class oO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(lO(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function lO(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const t_="@firebase/app",Z0="0.11.2";/**
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
 */const er=new Fd("@firebase/app"),uO="@firebase/app-compat",cO="@firebase/analytics-compat",hO="@firebase/analytics",fO="@firebase/app-check-compat",dO="@firebase/app-check",pO="@firebase/auth",mO="@firebase/auth-compat",gO="@firebase/database",_O="@firebase/data-connect",yO="@firebase/database-compat",vO="@firebase/functions",EO="@firebase/functions-compat",TO="@firebase/installations",SO="@firebase/installations-compat",bO="@firebase/messaging",AO="@firebase/messaging-compat",wO="@firebase/performance",CO="@firebase/performance-compat",RO="@firebase/remote-config",IO="@firebase/remote-config-compat",NO="@firebase/storage",xO="@firebase/storage-compat",OO="@firebase/firestore",DO="@firebase/vertexai",kO="@firebase/firestore-compat",PO="firebase",MO="11.4.0";/**
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
 */const n_="[DEFAULT]",LO={[t_]:"fire-core",[uO]:"fire-core-compat",[hO]:"fire-analytics",[cO]:"fire-analytics-compat",[dO]:"fire-app-check",[fO]:"fire-app-check-compat",[pO]:"fire-auth",[mO]:"fire-auth-compat",[gO]:"fire-rtdb",[_O]:"fire-data-connect",[yO]:"fire-rtdb-compat",[vO]:"fire-fn",[EO]:"fire-fn-compat",[TO]:"fire-iid",[SO]:"fire-iid-compat",[bO]:"fire-fcm",[AO]:"fire-fcm-compat",[wO]:"fire-perf",[CO]:"fire-perf-compat",[RO]:"fire-rc",[IO]:"fire-rc-compat",[NO]:"fire-gcs",[xO]:"fire-gcs-compat",[OO]:"fire-fst",[kO]:"fire-fst-compat",[DO]:"fire-vertex","fire-js":"fire-js",[PO]:"fire-js-all"};/**
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
 */const hd=new Map,UO=new Map,i_=new Map;function J0(n,e){try{n.container.addComponent(e)}catch(t){er.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function sa(n){const e=n.name;if(i_.has(e))return er.debug(`There were multiple attempts to register component ${e}.`),!1;i_.set(e,n);for(const t of hd.values())J0(t,n);for(const t of UO.values())J0(t,n);return!0}function Hd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function jn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const VO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jr=new $c("app","Firebase",VO);/**
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
 */class jO{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Js("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jr.create("app-deleted",{appName:this._name})}}/**
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
 */const ma=MO;function ry(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:n_,automaticDataCollectionEnabled:!1},e),a=i.name;if(typeof a!="string"||!a)throw Jr.create("bad-app-name",{appName:String(a)});if(t||(t=FA()),!t)throw Jr.create("no-options");const l=hd.get(a);if(l){if(ia(t,l.options)&&ia(i,l.config))return l;throw Jr.create("duplicate-app",{appName:a})}const c=new Gx(a);for(const p of i_.values())c.addComponent(p);const d=new jO(t,i,c);return hd.set(a,d),d}function ay(n=n_){const e=hd.get(n);if(!e&&n===n_&&FA())return ry();if(!e)throw Jr.create("no-app",{appName:n});return e}function wi(n,e,t){var i;let a=(i=LO[n])!==null&&i!==void 0?i:n;t&&(a+=`-${t}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${a}" with version "${e}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),er.warn(d.join(" "));return}sa(new Js(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const BO="firebase-heartbeat-database",zO=1,Mc="firebase-heartbeat-store";let Ng=null;function YA(){return Ng||(Ng=sO(BO,zO,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Mc)}catch(t){console.warn(t)}}}}).catch(n=>{throw Jr.create("idb-open",{originalErrorMessage:n.message})})),Ng}async function FO(n){try{const t=(await YA()).transaction(Mc),i=await t.objectStore(Mc).get(QA(n));return await t.done,i}catch(e){if(e instanceof gs)er.warn(e.message);else{const t=Jr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});er.warn(t.message)}}}async function eS(n,e){try{const i=(await YA()).transaction(Mc,"readwrite");await i.objectStore(Mc).put(e,QA(n)),await i.done}catch(t){if(t instanceof gs)er.warn(t.message);else{const i=Jr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});er.warn(i.message)}}}function QA(n){return`${n.name}!${n.options.appId}`}/**
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
 */const HO=1024,qO=30;class GO{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new KO(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=tS();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>qO){const c=$O(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){er.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=tS(),{heartbeatsToSend:i,unsentEntries:a}=WO(this._heartbeatsCache.heartbeats),l=ld(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return er.warn(t),""}}}function tS(){return new Date().toISOString().substring(0,10)}function WO(n,e=HO){const t=[];let i=n.slice();for(const a of n){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),nS(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),nS(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class KO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nx()?xx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await FO(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return eS(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return eS(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function nS(n){return ld(JSON.stringify({version:2,heartbeats:n})).length}function $O(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function YO(n){sa(new Js("platform-logger",e=>new oO(e),"PRIVATE")),sa(new Js("heartbeat",e=>new GO(e),"PRIVATE")),wi(t_,Z0,n),wi(t_,Z0,"esm2017"),wi("fire-js","")}YO("");function oy(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,i=Object.getOwnPropertySymbols(n);a<i.length;a++)e.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(n,i[a])&&(t[i[a]]=n[i[a]]);return t}function XA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QO=XA,ZA=new $c("auth","Firebase",XA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd=new Fd("@firebase/auth");function XO(n,...e){fd.logLevel<=He.WARN&&fd.warn(`Auth (${ma}): ${n}`,...e)}function Qf(n,...e){fd.logLevel<=He.ERROR&&fd.error(`Auth (${ma}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(n,...e){throw uy(n,...e)}function Li(n,...e){return uy(n,...e)}function ly(n,e,t){const i=Object.assign(Object.assign({},QO()),{[e]:t});return new $c("auth","Firebase",i).create(e,{appName:n.name})}function Xs(n){return ly(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ZO(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Ci(n,"argument-error"),ly(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function uy(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return ZA.create(n,...e)}function De(n,e,...t){if(!n)throw uy(e,...t)}function Ks(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Qf(e),new Error(e)}function tr(n,e){n||Ks(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function JO(){return iS()==="http:"||iS()==="https:"}function iS(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JO()||wx()||"connection"in navigator)?navigator.onLine:!0}function tD(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,t){this.shortDelay=e,this.longDelay=t,tr(t>e,"Short delay should be less than long delay!"),this.isMobile=iy()||GA()}get(){return eD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(n,e){tr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ks("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ks("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ks("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD=new Yc(3e4,6e4);function ga(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function _a(n,e,t,i,a={}){return ew(n,a,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const d=Hl(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:p},l);return Ax()||(m.referrerPolicy="no-referrer"),JA.fetch()(tw(n,n.config.apiHost,t,d),m)})}async function ew(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},nD),e);try{const a=new rD(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Pf(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,m]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pf(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Pf(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw Pf(n,"user-disabled",c);const y=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw ly(n,y,m);Ci(n,y)}}catch(a){if(a instanceof gs)throw a;Ci(n,"network-request-failed",{message:String(a)})}}async function Qc(n,e,t,i,a={}){const l=await _a(n,e,t,i,a);return"mfaPendingCredential"in l&&Ci(n,"multi-factor-auth-required",{_serverResponse:l}),l}function tw(n,e,t,i){const a=`${e}${t}?${i}`;return n.config.emulator?cy(n.config,a):`${n.config.apiScheme}://${a}`}function sD(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class rD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Li(this.auth,"network-request-failed")),iD.get())})}}function Pf(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const a=Li(n,e,i);return a.customData._tokenResponse=t,a}function sS(n){return n!==void 0&&n.enterprise!==void 0}class aD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return sD(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function oD(n,e){return _a(n,"GET","/v2/recaptchaConfig",ga(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lD(n,e){return _a(n,"POST","/v1/accounts:delete",e)}async function nw(n,e){return _a(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uD(n,e=!1){const t=bt(n),i=await t.getIdToken(e),a=hy(i);De(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:i,authTime:Sc(xg(a.auth_time)),issuedAtTime:Sc(xg(a.iat)),expirationTime:Sc(xg(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function xg(n){return Number(n)*1e3}function hy(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Qf("JWT malformed, contained fewer than 3 sections"),null;try{const a=ud(t);return a?JSON.parse(a):(Qf("Failed to decode base64 JWT payload"),null)}catch(a){return Qf("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function rS(n){const e=hy(n);return De(e,"internal-error"),De(typeof e.exp<"u","internal-error"),De(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lc(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof gs&&cD(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function cD({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sc(this.lastLoginAt),this.creationTime=Sc(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function dd(n){var e;const t=n.auth,i=await n.getIdToken(),a=await Lc(n,nw(t,{idToken:i}));De(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?iw(l.providerUserInfo):[],d=dD(n.providerData,c),p=n.isAnonymous,m=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),y=p?m:!1,S={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new r_(l.createdAt,l.lastLoginAt),isAnonymous:y};Object.assign(n,S)}async function fD(n){const e=bt(n);await dd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dD(n,e){return[...n.filter(i=>!e.some(a=>a.providerId===i.providerId)),...e]}function iw(n){return n.map(e=>{var{providerId:t}=e,i=oy(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pD(n,e){const t=await ew(n,{},async()=>{const i=Hl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,c=tw(n,a,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",JA.fetch()(c,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function mD(n,e){return _a(n,"POST","/v2/accounts:revokeToken",ga(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){De(e.idToken,"internal-error"),De(typeof e.idToken<"u","internal-error"),De(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){De(e.length!==0,"internal-error");const t=rS(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(De(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:a,expiresIn:l}=await pD(e,t);this.updateTokensAndExpiration(i,a,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:a,expirationTime:l}=t,c=new bl;return i&&(De(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),a&&(De(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(De(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bl,this.toJSON())}_performRefresh(){return Ks("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(n,e){De(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class $s{constructor(e){var{uid:t,auth:i,stsTokenManager:a}=e,l=oy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new r_(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Lc(this,this.stsTokenManager.getToken(this.auth,e));return De(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return uD(this,e)}reload(){return fD(this)}_assign(e){this!==e&&(De(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new $s(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){De(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await dd(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jn(this.auth.app))return Promise.reject(Xs(this.auth));const e=await this.getIdToken();return await Lc(this,lD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,a,l,c,d,p,m,y;const S=(i=t.displayName)!==null&&i!==void 0?i:void 0,A=(a=t.email)!==null&&a!==void 0?a:void 0,D=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,V=(c=t.photoURL)!==null&&c!==void 0?c:void 0,G=(d=t.tenantId)!==null&&d!==void 0?d:void 0,M=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,B=(m=t.createdAt)!==null&&m!==void 0?m:void 0,H=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:$,emailVerified:F,isAnonymous:re,providerData:_e,stsTokenManager:P}=t;De($&&P,e,"internal-error");const R=bl.fromJSON(this.name,P);De(typeof $=="string",e,"internal-error"),Hr(S,e.name),Hr(A,e.name),De(typeof F=="boolean",e,"internal-error"),De(typeof re=="boolean",e,"internal-error"),Hr(D,e.name),Hr(V,e.name),Hr(G,e.name),Hr(M,e.name),Hr(B,e.name),Hr(H,e.name);const I=new $s({uid:$,auth:e,email:A,emailVerified:F,displayName:S,isAnonymous:re,photoURL:V,phoneNumber:D,tenantId:G,stsTokenManager:R,createdAt:B,lastLoginAt:H});return _e&&Array.isArray(_e)&&(I.providerData=_e.map(N=>Object.assign({},N))),M&&(I._redirectEventId=M),I}static async _fromIdTokenResponse(e,t,i=!1){const a=new bl;a.updateFromServerResponse(t);const l=new $s({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:i});return await dd(l),l}static async _fromGetAccountInfoResponse(e,t,i){const a=t.users[0];De(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?iw(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),d=new bl;d.updateFromIdToken(i);const p=new $s({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),m={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new r_(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,m),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=new Map;function Ys(n){tr(n instanceof Function,"Expected a class definition");let e=aS.get(n);return e?(tr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,aS.set(n,e),e)}/**
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
 */class sw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}sw.type="NONE";const oS=sw;/**
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
 */function Xf(n,e,t){return`firebase:${n}:${e}:${t}`}class Al{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:a,name:l}=this.auth;this.fullUserKey=Xf(this.userKey,a.apiKey,l),this.fullPersistenceKey=Xf("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$s._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Al(Ys(oS),e,i);const a=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let l=a[0]||Ys(oS);const c=Xf(i,e.config.apiKey,e.name);let d=null;for(const m of t)try{const y=await m._get(c);if(y){const S=$s._fromJSON(e,y);m!==l&&(d=S),l=m;break}}catch{}const p=a.filter(m=>m._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Al(l,e,i):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==l)try{await m._remove(c)}catch{}})),new Al(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cw(e))return"Blackberry";if(hw(e))return"Webos";if(aw(e))return"Safari";if((e.includes("chrome/")||ow(e))&&!e.includes("edge/"))return"Chrome";if(uw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function rw(n=xn()){return/firefox\//i.test(n)}function aw(n=xn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ow(n=xn()){return/crios\//i.test(n)}function lw(n=xn()){return/iemobile/i.test(n)}function uw(n=xn()){return/android/i.test(n)}function cw(n=xn()){return/blackberry/i.test(n)}function hw(n=xn()){return/webos/i.test(n)}function fy(n=xn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function gD(n=xn()){var e;return fy(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _D(){return Cx()&&document.documentMode===10}function fw(n=xn()){return fy(n)||uw(n)||hw(n)||cw(n)||/windows phone/i.test(n)||lw(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(n,e=[]){let t;switch(n){case"Browser":t=lS(xn());break;case"Worker":t=`${lS(xn())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ma}/${i}`}/**
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
 */class yD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function vD(n,e={}){return _a(n,"GET","/v2/passwordPolicy",ga(n,e))}/**
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
 */const ED=6;class TD{constructor(e){var t,i,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:ED,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,a,l,c,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let a=0;a<e.length;a++)i=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(e,t,i,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uS(this),this.idTokenSubscription=new uS(this),this.beforeStateQueue=new yD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ZA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ys(t)),this._initializationPromise=this.queue(async()=>{var i,a;if(!this._deleted&&(this.persistenceManager=await Al.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await nw(this,{idToken:e}),i=await $s._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(jn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let a=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(a=p.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return De(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await dd(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(jn(this.app))return Promise.reject(Xs(this));const t=e?bt(e):null;return t&&De(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&De(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return jn(this.app)?Promise.reject(Xs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return jn(this.app)?Promise.reject(Xs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ys(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vD(this),t=new TD(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $c("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await mD(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ys(e)||this._popupRedirectResolver;De(t,this,"argument-error"),this.redirectPersistenceManager=await Al.create(this,[Ys(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(De(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return De(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(jn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&XO(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ya(n){return bt(n)}class uS{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ux(t=>this.observer=t)}get next(){return De(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bD(n){qd=n}function pw(n){return qd.loadJS(n)}function AD(){return qd.recaptchaEnterpriseScript}function wD(){return qd.gapiScript}function CD(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class RD{constructor(){this.enterprise=new ID}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class ID{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const ND="recaptcha-enterprise",mw="NO_RECAPTCHA";class xD{constructor(e){this.type=ND,this.auth=ya(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{oD(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new aD(p);return l.tenantId==null?l._agentRecaptchaConfig=m:l._tenantRecaptchaConfigs[l.tenantId]=m,c(m.siteKey)}}).catch(p=>{d(p)})})}function a(l,c,d){const p=window.grecaptcha;sS(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(m=>{c(m)}).catch(()=>{c(mw)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new RD().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(d=>{if(!t&&sS(window.grecaptcha))a(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=AD();p.length!==0&&(p+=d),pw(p).then(()=>{a(d,l,c)}).catch(m=>{c(m)})}}).catch(d=>{c(d)})})}}async function cS(n,e,t,i=!1,a=!1){const l=new xD(n);let c;if(a)c=mw;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function a_(n,e,t,i,a){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await cS(n,e,t,t==="getOobCode");return i(n,c)}else return i(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await cS(n,e,t,t==="getOobCode");return i(n,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OD(n,e){const t=Hd(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(ia(l,e??{}))return a;Ci(a,"already-initialized")}return t.initialize({options:e})}function DD(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Ys);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function kD(n,e,t){const i=ya(n);De(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const a=!1,l=gw(e),{host:c,port:d}=PD(e),p=d===null?"":`:${d}`,m={url:`${l}//${c}${p}/`},y=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!i._canInitEmulator){De(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),De(ia(m,i.config.emulator)&&ia(y,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=m,i.emulatorConfig=y,i.settings.appVerificationDisabledForTesting=!0,MD()}function gw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function PD(n){const e=gw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){const l=a[1];return{host:l,port:hS(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:hS(c)}}}function hS(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function MD(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ks("not implemented")}_getIdTokenResponse(e){return Ks("not implemented")}_linkToIdToken(e,t){return Ks("not implemented")}_getReauthenticationResolver(e){return Ks("not implemented")}}async function LD(n,e){return _a(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UD(n,e){return Qc(n,"POST","/v1/accounts:signInWithPassword",ga(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VD(n,e){return Qc(n,"POST","/v1/accounts:signInWithEmailLink",ga(n,e))}async function jD(n,e){return Qc(n,"POST","/v1/accounts:signInWithEmailLink",ga(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc extends dy{constructor(e,t,i,a=null){super("password",i),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Uc(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Uc(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return a_(e,t,"signInWithPassword",UD);case"emailLink":return VD(e,{email:this._email,oobCode:this._password});default:Ci(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return a_(e,i,"signUpPassword",LD);case"emailLink":return jD(e,{idToken:t,email:this._email,oobCode:this._password});default:Ci(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wl(n,e){return Qc(n,"POST","/v1/accounts:signInWithIdp",ga(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BD="http://localhost";class oo extends dy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new oo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ci("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:a}=t,l=oy(t,["providerId","signInMethod"]);if(!i||!a)return null;const c=new oo(i,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return wl(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,wl(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,wl(e,t)}buildRequest(){const e={requestUri:BD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Hl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zD(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FD(n){const e=mc(gc(n)).link,t=e?mc(gc(e)).deep_link_id:null,i=mc(gc(n)).deep_link_id;return(i?mc(gc(i)).link:null)||i||t||e||n}class py{constructor(e){var t,i,a,l,c,d;const p=mc(gc(e)),m=(t=p.apiKey)!==null&&t!==void 0?t:null,y=(i=p.oobCode)!==null&&i!==void 0?i:null,S=zD((a=p.mode)!==null&&a!==void 0?a:null);De(m&&y&&S,"argument-error"),this.apiKey=m,this.operation=S,this.code=y,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=FD(e);try{return new py(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(){this.providerId=ql.PROVIDER_ID}static credential(e,t){return Uc._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=py.parseLink(t);return De(i,"argument-error"),Uc._fromEmailAndCode(e,i.code,i.tenantId)}}ql.PROVIDER_ID="password";ql.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ql.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xc extends my{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends Xc{constructor(){super("facebook.com")}static credential(e){return oo._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kr.credential(e.oauthAccessToken)}catch{return null}}}Kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws extends Xc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return oo._fromParams({providerId:Ws.PROVIDER_ID,signInMethod:Ws.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ws.credentialFromTaggedObject(e)}static credentialFromError(e){return Ws.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ws.credential(t,i)}catch{return null}}}Ws.GOOGLE_SIGN_IN_METHOD="google.com";Ws.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends Xc{constructor(){super("github.com")}static credential(e){return oo._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $r.credential(e.oauthAccessToken)}catch{return null}}}$r.GITHUB_SIGN_IN_METHOD="github.com";$r.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends Xc{constructor(){super("twitter.com")}static credential(e,t){return oo._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Yr.credential(t,i)}catch{return null}}}Yr.TWITTER_SIGN_IN_METHOD="twitter.com";Yr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HD(n,e){return Qc(n,"POST","/v1/accounts:signUp",ga(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,a=!1){const l=await $s._fromIdTokenResponse(e,i,a),c=fS(i);return new lo({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const a=fS(i);return new lo({user:e,providerId:a,_tokenResponse:i,operationType:t})}}function fS(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd extends gs{constructor(e,t,i,a){var l;super(t.code,t.message),this.operationType=i,this.user=a,Object.setPrototypeOf(this,pd.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,a){return new pd(e,t,i,a)}}function _w(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?pd._fromErrorAndOperation(n,l,e,i):l})}async function qD(n,e,t=!1){const i=await Lc(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return lo._forOperation(n,"link",i)}/**
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
 */async function GD(n,e,t=!1){const{auth:i}=n;if(jn(i.app))return Promise.reject(Xs(i));const a="reauthenticate";try{const l=await Lc(n,_w(i,a,e,n),t);De(l.idToken,i,"internal-error");const c=hy(l.idToken);De(c,i,"internal-error");const{sub:d}=c;return De(n.uid===d,i,"user-mismatch"),lo._forOperation(n,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Ci(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yw(n,e,t=!1){if(jn(n.app))return Promise.reject(Xs(n));const i="signIn",a=await _w(n,i,e),l=await lo._fromIdTokenResponse(n,i,a);return t||await n._updateCurrentUser(l.user),l}async function WD(n,e){return yw(ya(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vw(n){const e=ya(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function KD(n,e,t){if(jn(n.app))return Promise.reject(Xs(n));const i=ya(n),c=await a_(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",HD).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&vw(n),p}),d=await lo._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(d.user),d}function $D(n,e,t){return jn(n.app)?Promise.reject(Xs(n)):WD(bt(n),ql.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&vw(n),i})}function YD(n,e,t,i){return bt(n).onIdTokenChanged(e,t,i)}function QD(n,e,t){return bt(n).beforeAuthStateChanged(e,t)}function XD(n,e,t,i){return bt(n).onAuthStateChanged(e,t,i)}function Ew(n){return bt(n).signOut()}const md="__sak";/**
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
 */class Tw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(md,"1"),this.storage.removeItem(md),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD=1e3,JD=10;class Sw extends Tw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),a=this.localCache[t];i!==a&&e(t,a,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);_D()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,JD):a()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},ZD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sw.type="LOCAL";const e2=Sw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw extends Tw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bw.type="SESSION";const Aw=bw;/**
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
 */function t2(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Gd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const i=new Gd(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:a});const d=Array.from(c).map(async m=>m(t.origin,l)),p=await t2(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class n2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const m=gy("",20);a.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:a,onMessage(S){const A=S;if(A.data.eventId===m)switch(A.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(A.data.response);break;default:clearTimeout(y),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(){return window}function i2(n){cs().location.href=n}/**
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
 */function ww(){return typeof cs().WorkerGlobalScope<"u"&&typeof cs().importScripts=="function"}async function s2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function r2(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function a2(){return ww()?self:null}/**
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
 */const Cw="firebaseLocalStorageDb",o2=1,gd="firebaseLocalStorage",Rw="fbase_key";class Zc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Wd(n,e){return n.transaction([gd],e?"readwrite":"readonly").objectStore(gd)}function l2(){const n=indexedDB.deleteDatabase(Cw);return new Zc(n).toPromise()}function o_(){const n=indexedDB.open(Cw,o2);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(gd,{keyPath:Rw})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(gd)?e(i):(i.close(),await l2(),e(await o_()))})})}async function dS(n,e,t){const i=Wd(n,!0).put({[Rw]:e,value:t});return new Zc(i).toPromise()}async function u2(n,e){const t=Wd(n,!1).get(e),i=await new Zc(t).toPromise();return i===void 0?null:i.value}function pS(n,e){const t=Wd(n,!0).delete(e);return new Zc(t).toPromise()}const c2=800,h2=3;class Iw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await o_(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>h2)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ww()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gd._getInstance(a2()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await s2(),!this.activeServiceWorker)return;this.sender=new n2(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||r2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await o_();return await dS(e,md,"1"),await pS(e,md),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>dS(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>u2(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>pS(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Wd(a,!1).getAll();return new Zc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)i.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!i.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),c2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Iw.type="LOCAL";const f2=Iw;new Yc(3e4,6e4);/**
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
 */function Nw(n,e){return e?Ys(e):(De(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class _y extends dy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wl(e,this._buildIdpRequest())}_linkToIdToken(e,t){return wl(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return wl(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function d2(n){return yw(n.auth,new _y(n),n.bypassAuthState)}function p2(n){const{auth:e,user:t}=n;return De(t,e,"internal-error"),GD(t,new _y(n),n.bypassAuthState)}async function m2(n){const{auth:e,user:t}=n;return De(t,e,"internal-error"),qD(t,new _y(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e,t,i,a,l=!1){this.auth=e,this.resolver=i,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return d2;case"linkViaPopup":case"linkViaRedirect":return m2;case"reauthViaPopup":case"reauthViaRedirect":return p2;default:Ci(this.auth,"internal-error")}}resolve(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2=new Yc(2e3,1e4);async function _2(n,e,t){if(jn(n.app))return Promise.reject(Li(n,"operation-not-supported-in-this-environment"));const i=ya(n);ZO(n,e,my);const a=Nw(i,t);return new no(i,"signInViaPopup",e,a).executeNotNull()}class no extends xw{constructor(e,t,i,a,l){super(e,t,a,l),this.provider=i,this.authWindow=null,this.pollId=null,no.currentPopupAction&&no.currentPopupAction.cancel(),no.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return De(e,this.auth,"internal-error"),e}async onExecution(){tr(this.filter.length===1,"Popup operations only handle one event");const e=gy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Li(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Li(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,no.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Li(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,g2.get())};e()}}no.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2="pendingRedirect",Zf=new Map;class v2 extends xw{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Zf.get(this.auth._key());if(!e){try{const i=await E2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Zf.set(this.auth._key(),e)}return this.bypassAuthState||Zf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function E2(n,e){const t=b2(e),i=S2(n);if(!await i._isAvailable())return!1;const a=await i._get(t)==="true";return await i._remove(t),a}function T2(n,e){Zf.set(n._key(),e)}function S2(n){return Ys(n._redirectPersistence)}function b2(n){return Xf(y2,n.config.apiKey,n.name)}async function A2(n,e,t=!1){if(jn(n.app))return Promise.reject(Xs(n));const i=ya(n),a=Nw(i,e),c=await new v2(i,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2=10*60*1e3;class C2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!R2(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Ow(e)){const a=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Li(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=w2&&this.cachedEventUids.clear(),this.cachedEventUids.has(mS(e))}saveEventToCache(e){this.cachedEventUids.add(mS(e)),this.lastProcessedEventTime=Date.now()}}function mS(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ow({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function R2(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ow(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I2(n,e={}){return _a(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,x2=/^https?/;async function O2(n){if(n.config.emulator)return;const{authorizedDomains:e}=await I2(n);for(const t of e)try{if(D2(t))return}catch{}Ci(n,"unauthorized-domain")}function D2(n){const e=s_(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!x2.test(t))return!1;if(N2.test(n))return i===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}/**
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
 */const k2=new Yc(3e4,6e4);function gS(){const n=cs().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function P2(n){return new Promise((e,t)=>{var i,a,l;function c(){gS(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gS(),t(Li(n,"network-request-failed"))},timeout:k2.get()})}if(!((a=(i=cs().gapi)===null||i===void 0?void 0:i.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=cs().gapi)===null||l===void 0)&&l.load)c();else{const d=CD("iframefcb");return cs()[d]=()=>{gapi.load?c():t(Li(n,"network-request-failed"))},pw(`${wD()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw Jf=null,e})}let Jf=null;function M2(n){return Jf=Jf||P2(n),Jf}/**
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
 */const L2=new Yc(5e3,15e3),U2="__/auth/iframe",V2="emulator/auth/iframe",j2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},B2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function z2(n){const e=n.config;De(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?cy(e,V2):`https://${n.config.authDomain}/${U2}`,i={apiKey:e.apiKey,appName:n.name,v:ma},a=B2.get(n.config.apiHost);a&&(i.eid=a);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${Hl(i).slice(1)}`}async function F2(n){const e=await M2(n),t=cs().gapi;return De(t,n,"internal-error"),e.open({where:document.body,url:z2(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:j2,dontclear:!0},i=>new Promise(async(a,l)=>{await i.restyle({setHideOnLeave:!1});const c=Li(n,"network-request-failed"),d=cs().setTimeout(()=>{l(c)},L2.get());function p(){cs().clearTimeout(d),a(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const H2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},q2=500,G2=600,W2="_blank",K2="http://localhost";class _S{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $2(n,e,t,i=q2,a=G2){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},H2),{width:i.toString(),height:a.toString(),top:l,left:c}),m=xn().toLowerCase();t&&(d=ow(m)?W2:t),rw(m)&&(e=e||K2,p.scrollbars="yes");const y=Object.entries(p).reduce((A,[D,V])=>`${A}${D}=${V},`,"");if(gD(m)&&d!=="_self")return Y2(e||"",d),new _S(null);const S=window.open(e||"",d,y);De(S,n,"popup-blocked");try{S.focus()}catch{}return new _S(S)}function Y2(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const Q2="__/auth/handler",X2="emulator/auth/handler",Z2=encodeURIComponent("fac");async function yS(n,e,t,i,a,l){De(n.config.authDomain,n,"auth-domain-config-required"),De(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:ma,eventId:a};if(e instanceof my){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Zg(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,S]of Object.entries({}))c[y]=S}if(e instanceof Xc){const y=e.getScopes().filter(S=>S!=="");y.length>0&&(c.scopes=y.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const p=await n._getAppCheckToken(),m=p?`#${Z2}=${encodeURIComponent(p)}`:"";return`${J2(n)}?${Hl(d).slice(1)}${m}`}function J2({config:n}){return n.emulator?cy(n,X2):`https://${n.authDomain}/${Q2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="webStorageSupport";class ek{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Aw,this._completeRedirectFn=A2,this._overrideRedirectResult=T2}async _openPopup(e,t,i,a){var l;tr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await yS(e,t,i,s_(),a);return $2(e,c,gy())}async _openRedirect(e,t,i,a){await this._originValidation(e);const l=await yS(e,t,i,s_(),a);return i2(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(tr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await F2(e),i=new C2(e);return t.register("authEvent",a=>(De(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:i.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Og,{type:Og},a=>{var l;const c=(l=a==null?void 0:a[0])===null||l===void 0?void 0:l[Og];c!==void 0&&t(!!c),Ci(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=O2(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fw()||aw()||fy()}}const tk=ek;var vS="@firebase/auth",ES="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){De(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sk(n){sa(new Js("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;De(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dw(n)},m=new SD(i,a,l,p);return DD(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),sa(new Js("auth-internal",e=>{const t=ya(e.getProvider("auth").getImmediate());return(i=>new nk(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),wi(vS,ES,ik(n)),wi(vS,ES,"esm2017")}/**
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
 */const rk=5*60,ak=HA("authIdTokenMaxAge")||rk;let TS=null;const ok=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>ak)return;const a=t==null?void 0:t.token;TS!==a&&(TS=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function lk(n=ay()){const e=Hd(n,"auth");if(e.isInitialized())return e.getImmediate();const t=OD(n,{popupRedirectResolver:tk,persistence:[f2,e2,Aw]}),i=HA("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=ok(l.toString());QD(t,c,()=>c(t.currentUser)),YD(t,d=>c(d))}}const a=BA("auth");return a&&kD(t,`http://${a}`),t}function uk(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}bD({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=a=>{const l=Li("internal-error");l.customData=a,t(l)},i.type="text/javascript",i.charset="UTF-8",uk().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sk("Browser");var ck="firebase",hk="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wi(ck,hk,"app");var SS={};const bS="@firebase/database",AS="1.0.13";/**
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
 */let Dw="";function fk(n){Dw=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),gn(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Pc(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ar(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new dk(e)}}catch{}return new pk},io=kw("localStorage"),mk=kw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl=new Fd("@firebase/database"),gk=function(){let n=1;return function(){return n++}}(),Pw=function(n){const e=zx(n),t=new Lx;t.update(e);const i=t.digest();return ty.encodeByteArray(i)},Jc=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Jc.apply(null,i):typeof i=="object"?e+=gn(i):e+=i,e+=" "}return e};let bc=null,wS=!0;const _k=function(n,e){ge(!0,"Can't turn on custom loggers persistently."),Cl.logLevel=He.VERBOSE,bc=Cl.log.bind(Cl)},wn=function(...n){if(wS===!0&&(wS=!1,bc===null&&mk.get("logging_enabled")===!0&&_k()),bc){const e=Jc.apply(null,n);bc(e)}},eh=function(n){return function(...e){wn(n,...e)}},l_=function(...n){const e="FIREBASE INTERNAL ERROR: "+Jc(...n);Cl.error(e)},uo=function(...n){const e=`FIREBASE FATAL ERROR: ${Jc(...n)}`;throw Cl.error(e),new Error(e)},ni=function(...n){const e="FIREBASE WARNING: "+Jc(...n);Cl.warn(e)},yk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ni("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Mw=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},vk=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ol="[MIN_NAME]",co="[MAX_NAME]",Gl=function(n,e){if(n===e)return 0;if(n===Ol||e===co)return-1;if(e===Ol||n===co)return 1;{const t=CS(n),i=CS(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Ek=function(n,e){return n===e?0:n<e?-1:1},sc=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+gn(e))},yy=function(n){if(typeof n!="object"||n===null)return gn(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=gn(e[i]),t+=":",t+=yy(n[e[i]]);return t+="}",t},Lw=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let a=0;a<t;a+=e)a+e>t?i.push(n.substring(a,t)):i.push(n.substring(a,a+e));return i};function Ri(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Uw=function(n){ge(!Mw(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let a,l,c,d,p;n===0?(l=0,c=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),i),l=d+i,c=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(n/Math.pow(2,1-i-t))));const m=[];for(p=t;p;p-=1)m.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)m.push(l%2?1:0),l=Math.floor(l/2);m.push(a?1:0),m.reverse();const y=m.join("");let S="";for(p=0;p<64;p+=8){let A=parseInt(y.substr(p,8),2).toString(16);A.length===1&&(A="0"+A),S=S+A}return S.toLowerCase()},Tk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Sk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},bk=new RegExp("^-?(0*)\\d{1,10}$"),Ak=-2147483648,wk=2147483647,CS=function(n){if(bk.test(n)){const e=Number(n);if(e>=Ak&&e<=wk)return e}return null},th=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ni("Exception was thrown by user callback.",t),e},Math.floor(0))}},Ck=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ac=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Rk{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,jn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ni(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(wn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ni(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy="5",Vw="v",jw="s",Bw="r",zw="f",Fw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Hw="ls",qw="p",u_="ac",Gw="websocket",Ww="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e,t,i,a,l=!1,c="",d=!1,p=!1,m=null){this.secure=t,this.namespace=i,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=io.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&io.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function xk(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Kw(n,e,t){ge(typeof e=="string","typeof type must == string"),ge(typeof t=="object","typeof params must == object");let i;if(e===Gw)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Ww)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);xk(n)&&(t.ns=n.namespace);const a=[];return Ri(t,(l,c)=>{a.push(l+"="+c)}),i+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(){this.counters_={}}incrementCounter(e,t=1){ar(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return _x(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg={},kg={};function Ey(n){const e=n.toString();return Dg[e]||(Dg[e]=new Ok),Dg[e]}function Dk(n,e){const t=n.toString();return kg[t]||(kg[t]=e()),kg[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<i.length;++a)i[a]&&th(()=>{this.onMessage_(i[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS="start",Pk="close",Mk="pLPCommand",Lk="pRTLPCB",$w="id",Yw="pw",Qw="ser",Uk="cb",Vk="seg",jk="ts",Bk="d",zk="dframe",Xw=1870,Zw=30,Fk=Xw-Zw,Hk=25e3,qk=3e4;class El{constructor(e,t,i,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=eh(e),this.stats_=Ey(t),this.urlFn=p=>(this.appCheckToken&&(p[u_]=this.appCheckToken),Kw(t,Ww,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new kk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(qk)),vk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ty((...l)=>{const[c,d,p,m,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===RS)this.id=d,this.password=p;else if(c===Pk)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const i={};i[RS]="t",i[Qw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Uk]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Vw]=vy,this.transportSessionId&&(i[jw]=this.transportSessionId),this.lastSessionId&&(i[Hw]=this.lastSessionId),this.applicationId&&(i[qw]=this.applicationId),this.appCheckToken&&(i[u_]=this.appCheckToken),typeof location<"u"&&location.hostname&&Fw.test(location.hostname)&&(i[Bw]=zw);const a=this.urlFn(i);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){El.forceAllow_=!0}static forceDisallow(){El.forceDisallow_=!0}static isAvailable(){return El.forceAllow_?!0:!El.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Tk()&&!Sk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=gn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=VA(t),a=Lw(i,Fk);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[zk]="t",i[$w]=e,i[Yw]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=gn(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ty{constructor(e,t,i,a){this.onDisconnect=i,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=gk(),window[Mk+this.uniqueCallbackIdentifier]=e,window[Lk+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ty.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){wn("frame writing exception"),d.stack&&wn(d.stack),wn(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||wn("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[$w]=this.myID,e[Yw]=this.myPW,e[Qw]=this.currentSerial;let t=this.urlFn(e),i="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Zw+i.length<=Xw;){const c=this.pendingSegs.shift();i=i+"&"+Vk+a+"="+c.seg+"&"+jk+a+"="+c.ts+"&"+Bk+a+"="+c.d,a++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(i,Math.floor(Hk)),l=()=>{clearTimeout(a),i()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const a=i.readyState;(!a||a==="loaded"||a==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{wn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk=16384,Wk=45e3;let _d=null;typeof MozWebSocket<"u"?_d=MozWebSocket:typeof WebSocket<"u"&&(_d=WebSocket);class Pi{constructor(e,t,i,a,l,c,d){this.connId=e,this.applicationId=i,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=eh(this.connId),this.stats_=Ey(t),this.connURL=Pi.connectionURL_(t,c,d,a,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,a,l){const c={};return c[Vw]=vy,typeof location<"u"&&location.hostname&&Fw.test(location.hostname)&&(c[Bw]=zw),t&&(c[jw]=t),i&&(c[Hw]=i),a&&(c[u_]=a),l&&(c[qw]=l),Kw(e,Gw,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,io.set("previous_websocket_failure",!0);try{let i;Rx(),this.mySock=new _d(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const a=i.message||i.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const a=i.message||i.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){Pi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&_d!==null&&!Pi.forceDisallow_}static previouslyFailed(){return io.isInMemoryStorage||io.get("previous_websocket_failure")===!0}markConnectionHealthy(){io.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Pc(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ge(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=gn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Lw(t,Gk);i.length>1&&this.sendString_(String(i.length));for(let a=0;a<i.length;a++)this.sendString_(i[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Wk))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Pi.responsesRequiredToBeHealthy=2;Pi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{static get ALL_TRANSPORTS(){return[El,Pi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Pi&&Pi.isAvailable();let i=t&&!Pi.previouslyFailed();if(e.webSocketOnly&&(t||ni("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Pi];else{const a=this.transports_=[];for(const l of Vc.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);Vc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vc.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk=6e4,$k=5e3,Yk=10*1024,Qk=100*1024,Pg="t",IS="d",Xk="s",NS="r",Zk="e",xS="o",OS="a",DS="n",kS="p",Jk="h";class eP{constructor(e,t,i,a,l,c,d,p,m,y){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=p,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=eh("c:"+this.id+":"),this.transportManager_=new Vc(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=Ac(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Qk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Yk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Pg in e){const t=e[Pg];t===OS?this.upgradeIfSecondaryHealthy_():t===NS?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===xS&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=sc("t",e),i=sc("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:kS,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:OS,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:DS,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=sc("t",e),i=sc("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=sc(Pg,e);if(IS in e){const i=e[IS];if(t===Jk){const a=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===DS){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Xk?this.onConnectionShutdown_(i):t===NS?this.onReset_(i):t===Zk?l_("Server Error: "+i):t===xS?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):l_("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),vy!==i&&ni("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Ac(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Kk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ac(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor($k))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:kS,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(io.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{put(e,t,i,a){}merge(e,t,i,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e){this.allowedEvents_=e,this.listeners_={},ge(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let a=0;a<i.length;a++)i[a].callback.apply(i[a].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const a=this.getInitialEvent(e);a&&t.apply(i,a)}off(e,t,i){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!i||i===a[l].context)){a.splice(l,1);return}}validateEventType_(e){ge(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd extends e1{static getInstance(){return new yd}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!iy()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ge(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=32,MS=768;class yt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[i]=this.pieces_[a],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ct(){return new yt("")}function et(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ra(n){return n.pieces_.length-n.pieceNum_}function gt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new yt(n.pieces_,e)}function t1(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function tP(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function n1(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function i1(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new yt(e,0)}function ln(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof yt)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let a=0;a<i.length;a++)i[a].length>0&&t.push(i[a])}return new yt(t,0)}function Ye(n){return n.pieceNum_>=n.pieces_.length}function Ai(n,e){const t=et(n),i=et(e);if(t===null)return e;if(t===i)return Ai(gt(n),gt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function s1(n,e){if(ra(n)!==ra(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function Mi(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(ra(n)>ra(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class nP{constructor(e,t){this.errorPrefix_=t,this.parts_=n1(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=zd(this.parts_[i]);r1(this)}}function iP(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=zd(e),r1(n)}function sP(n){const e=n.parts_.pop();n.byteLength_-=zd(e),n.parts_.length>0&&(n.byteLength_-=1)}function r1(n){if(n.byteLength_>MS)throw new Error(n.errorPrefix_+"has a key path longer than "+MS+" bytes ("+n.byteLength_+").");if(n.parts_.length>PS)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+PS+") or object contains a cycle "+to(n))}function to(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy extends e1{static getInstance(){return new Sy}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return ge(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=1e3,rP=60*5*1e3,LS=30*1e3,aP=1.3,oP=3e4,lP="server_kill",US=3;class Zs extends Jw{constructor(e,t,i,a,l,c,d,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=Zs.nextPersistentConnectionId_++,this.log_=eh("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=rc,this.maxReconnectDelay_=rP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Sy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&yd.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(gn(l)),ge(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),i&&(this.requestCBHash_[a]=i)}get(e){this.initConnection_();const t=new ny,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,i,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),ge(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ge(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:i};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+i+" for "+a);const l={p:i},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const p=d.d,m=d.s;Zs.warnOnListenWarnings_(p,t),(this.listens.get(i)&&this.listens.get(i).get(a))===e&&(this.log_("listen response",d),m!=="ok"&&this.removeListen_(i,a),e.onComplete&&e.onComplete(m,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ar(e,"w")){const i=xl(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();ni(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Mx(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=LS)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Px(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+a),ge(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,a)&&this.connected_&&this.sendUnlisten_(i,a,e._queryObject,t)}sendUnlisten_(e,t,i,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=i,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,a){const l={p:t,d:i};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,i,a){this.putInternal("p",e,t,i,a)}merge(e,t,i,a){this.putInternal("m",e,t,i,a)}putInternal(e,t,i,a,l){this.initConnection_();const c={p:t,d:i};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const l=i.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+gn(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):l_("Unrecognized action received from server: "+gn(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ge(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=rc,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=rc,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>oP&&(this.reconnectDelay_=rc),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*aP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+Zs.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const p=function(){d?d.close():(c=!0,i())},m=function(S){ge(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(S)};this.realtime_={close:p,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[S,A]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);c?wn("getToken() completed but was canceled"):(wn("getToken() completed. Creating connection."),this.authToken_=S&&S.accessToken,this.appCheckToken_=A&&A.token,d=new eP(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,D=>{ni(D+" ("+this.repoInfo_.toString()+")"),this.interrupt(lP)},l))}catch(S){this.log_("Failed to get token: "+S),c||(this.repoInfo_.nodeAdmin&&ni(S),p())}}}interrupt(e){wn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){wn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Zg(this.interruptReasons_)&&(this.reconnectDelay_=rc,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(l=>yy(l)).join("$"):i="default";const a=this.removeListen_(e,i);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const i=new yt(e).toString();let a;if(this.listens.has(i)){const l=this.listens.get(i);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(i)}else a=void 0;return a}onAuthRevoked_(e,t){wn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=US&&(this.reconnectDelay_=LS,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){wn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=US&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Dw.replace(/\./g,"-")]=1,iy()?e["framework.cordova"]=1:GA()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=yd.getInstance().currentlyOnline();return Zg(this.interruptReasons_)&&e}}Zs.nextPersistentConnectionId_=0;Zs.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Kd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new tt(Ol,e),a=new tt(Ol,t);return this.compare(i,a)!==0}minPost(){return tt.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mf;class a1 extends Kd{static get __EMPTY_NODE(){return Mf}static set __EMPTY_NODE(e){Mf=e}compare(e,t){return Gl(e.name,t.name)}isDefinedOn(e){throw Fl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return tt.MIN}maxPost(){return new tt(co,Mf)}makePost(e,t){return ge(typeof e=="string","KeyIndex indexValue must always be a string."),new tt(e,Mf)}toString(){return".key"}}const Rl=new a1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lf=class{constructor(e,t,i,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?i(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},ei=class _c{constructor(e,t,i,a,l){this.key=e,this.value=t,this.color=i??_c.RED,this.left=a??rs.EMPTY_NODE,this.right=l??rs.EMPTY_NODE}copy(e,t,i,a,l){return new _c(e??this.key,t??this.value,i??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let a=this;const l=i(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,i),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,i)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return rs.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,a;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return rs.EMPTY_NODE;a=i.right.min_(),i=i.copy(a.key,a.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_c.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_c.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};ei.RED=!0;ei.BLACK=!1;class uP{copy(e,t,i,a,l){return this}insert(e,t,i){return new ei(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let rs=class ed{constructor(e,t=ed.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ed(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ei.BLACK,null,null))}remove(e){return new ed(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ei.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,a=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return a?a.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(a=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Lf(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Lf(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Lf(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Lf(this.root_,null,this.comparator_,!0,e)}};rs.EMPTY_NODE=new uP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(n,e){return Gl(n.name,e.name)}function by(n,e){return Gl(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let c_;function hP(n){c_=n}const o1=function(n){return typeof n=="number"?"number:"+Uw(n):"string:"+n},l1=function(n){if(n.isLeafNode()){const e=n.val();ge(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ar(e,".sv"),"Priority must be a string or number.")}else ge(n===c_||n.isEmpty(),"priority of unexpected type.");ge(n===c_||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let VS;class an{static set __childrenNodeConstructor(e){VS=e}static get __childrenNodeConstructor(){return VS}constructor(e,t=an.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ge(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),l1(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new an(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:an.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ye(e)?this:et(e)===".priority"?this.priorityNode_:an.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:an.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=et(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(ge(i!==".priority"||ra(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,an.__childrenNodeConstructor.EMPTY_NODE.updateChild(gt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+o1(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Uw(this.value_):e+=this.value_,this.lazyHash_=Pw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===an.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof an.__childrenNodeConstructor?-1:(ge(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,a=an.VALUE_TYPE_ORDER.indexOf(t),l=an.VALUE_TYPE_ORDER.indexOf(i);return ge(a>=0,"Unknown leaf type: "+t),ge(l>=0,"Unknown leaf type: "+i),a===l?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}an.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let u1,c1;function fP(n){u1=n}function dP(n){c1=n}class pP extends Kd{compare(e,t){const i=e.node.getPriority(),a=t.node.getPriority(),l=i.compareTo(a);return l===0?Gl(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return tt.MIN}maxPost(){return new tt(co,new an("[PRIORITY-POST]",c1))}makePost(e,t){const i=u1(e);return new tt(t,new an("[PRIORITY-POST]",i))}toString(){return".priority"}}const Nn=new pP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP=Math.log(2);class gP{constructor(e){const t=l=>parseInt(Math.log(l)/mP,10),i=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=i(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const vd=function(n,e,t,i){n.sort(e);const a=function(p,m){const y=m-p;let S,A;if(y===0)return null;if(y===1)return S=n[p],A=t?t(S):S,new ei(A,S.node,ei.BLACK,null,null);{const D=parseInt(y/2,10)+p,V=a(p,D),G=a(D+1,m);return S=n[D],A=t?t(S):S,new ei(A,S.node,ei.BLACK,V,G)}},l=function(p){let m=null,y=null,S=n.length;const A=function(V,G){const M=S-V,B=S;S-=V;const H=a(M+1,B),$=n[M],F=t?t($):$;D(new ei(F,$.node,G,null,H))},D=function(V){m?(m.left=V,m=V):(y=V,m=V)};for(let V=0;V<p.count;++V){const G=p.nextBitIsOne(),M=Math.pow(2,p.count-(V+1));G?A(M,ei.BLACK):(A(M,ei.BLACK),A(M,ei.RED))}return y},c=new gP(n.length),d=l(c);return new rs(i||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mg;const hl={};class Qs{static get Default(){return ge(hl&&Nn,"ChildrenNode.ts has not been loaded"),Mg=Mg||new Qs({".priority":hl},{".priority":Nn}),Mg}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=xl(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof rs?t:null}hasIndex(e){return ar(this.indexSet_,e.toString())}addIndex(e,t){ge(e!==Rl,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let a=!1;const l=t.getIterator(tt.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),i.push(c),c=l.getNext();let d;a?d=vd(i,e.getCompare()):d=hl;const p=e.toString(),m=Object.assign({},this.indexSet_);m[p]=e;const y=Object.assign({},this.indexes_);return y[p]=d,new Qs(y,m)}addToIndexes(e,t){const i=cd(this.indexes_,(a,l)=>{const c=xl(this.indexSet_,l);if(ge(c,"Missing index implementation for "+l),a===hl)if(c.isDefinedOn(e.node)){const d=[],p=t.getIterator(tt.Wrap);let m=p.getNext();for(;m;)m.name!==e.name&&d.push(m),m=p.getNext();return d.push(e),vd(d,c.getCompare())}else return hl;else{const d=t.get(e.name);let p=a;return d&&(p=p.remove(new tt(e.name,d))),p.insert(e,e.node)}});return new Qs(i,this.indexSet_)}removeFromIndexes(e,t){const i=cd(this.indexes_,a=>{if(a===hl)return a;{const l=t.get(e.name);return l?a.remove(new tt(e.name,l)):a}});return new Qs(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ac;class at{static get EMPTY_NODE(){return ac||(ac=new at(new rs(by),null,Qs.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&l1(this.priorityNode_),this.children_.isEmpty()&&ge(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ac}updatePriority(e){return this.children_.isEmpty()?this:new at(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ac:t}}getChild(e){const t=et(e);return t===null?this:this.getImmediateChild(t).getChild(gt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ge(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new tt(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(i,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(i,this.children_));const c=a.isEmpty()?ac:this.priorityNode_;return new at(a,c,l)}}updateChild(e,t){const i=et(e);if(i===null)return t;{ge(et(e)!==".priority"||ra(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(i).updateChild(gt(e),t);return this.updateImmediateChild(i,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,a=0,l=!0;if(this.forEachChild(Nn,(c,d)=>{t[c]=d.val(e),i++,l&&at.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*i){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+o1(this.getPriority().val())+":"),this.forEachChild(Nn,(t,i)=>{const a=i.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":Pw(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const a=this.resolveIndex_(i);if(a){const l=a.getPredecessorKey(new tt(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new tt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new tt(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,tt.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,tt.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===nh?-1:0}withIndex(e){if(e===Rl||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new at(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Rl||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(Nn),a=t.getIterator(Nn);let l=i.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=i.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Rl?null:this.indexMap_.get(e.toString())}}at.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class _P extends at{constructor(){super(new rs(by),at.EMPTY_NODE,Qs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return at.EMPTY_NODE}isEmpty(){return!1}}const nh=new _P;Object.defineProperties(tt,{MIN:{value:new tt(Ol,at.EMPTY_NODE)},MAX:{value:new tt(co,nh)}});a1.__EMPTY_NODE=at.EMPTY_NODE;an.__childrenNodeConstructor=at;hP(nh);dP(nh);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP=!0;function Cn(n,e=null){if(n===null)return at.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ge(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new an(t,Cn(e))}if(!(n instanceof Array)&&yP){const t=[];let i=!1;if(Ri(n,(c,d)=>{if(c.substring(0,1)!=="."){const p=Cn(d);p.isEmpty()||(i=i||!p.getPriority().isEmpty(),t.push(new tt(c,p)))}}),t.length===0)return at.EMPTY_NODE;const l=vd(t,cP,c=>c.name,by);if(i){const c=vd(t,Nn.getCompare());return new at(l,Cn(e),new Qs({".priority":c},{".priority":Nn}))}else return new at(l,Cn(e),Qs.Default)}else{let t=at.EMPTY_NODE;return Ri(n,(i,a)=>{if(ar(n,i)&&i.substring(0,1)!=="."){const l=Cn(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(i,l))}}),t.updatePriority(Cn(e))}}fP(Cn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP extends Kd{constructor(e){super(),this.indexPath_=e,ge(!Ye(e)&&et(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),a=this.extractChild(t.node),l=i.compareTo(a);return l===0?Gl(e.name,t.name):l}makePost(e,t){const i=Cn(e),a=at.EMPTY_NODE.updateChild(this.indexPath_,i);return new tt(t,a)}maxPost(){const e=at.EMPTY_NODE.updateChild(this.indexPath_,nh);return new tt(co,e)}toString(){return n1(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP extends Kd{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Gl(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return tt.MIN}maxPost(){return tt.MAX}makePost(e,t){const i=Cn(e);return new tt(t,i)}toString(){return".value"}}const TP=new EP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(n){return{type:"value",snapshotNode:n}}function bP(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function AP(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function jS(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function wP(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Nn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ge(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ge(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ol}hasEnd(){return this.endSet_}getIndexEndValue(){return ge(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ge(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:co}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ge(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Nn}copy(){const e=new Ay;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function BS(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Nn?t="$priority":n.index_===TP?t="$value":n.index_===Rl?t="$key":(ge(n.index_ instanceof vP,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=gn(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=gn(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+gn(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=gn(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+gn(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function zS(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Nn&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed extends Jw{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ge(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=a,this.log_=eh("p:rest:"),this.listens_={}}listen(e,t,i,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=Ed.getListenId_(e,i),d={};this.listens_[c]=d;const p=BS(e._queryParams);this.restRequest_(l+".json",p,(m,y)=>{let S=y;if(m===404&&(S=null,m=null),m===null&&this.onDataUpdate_(l,S,!1,i),xl(this.listens_,c)===d){let A;m?m===401?A="permission_denied":A="rest_error:"+m:A="ok",a(A,null)}})}unlisten(e,t){const i=Ed.getListenId_(e,t);delete this.listens_[i]}get(e){const t=BS(e._queryParams),i=e._path.toString(),a=new ny;return this.restRequest_(i+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(i,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Hl(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(i&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=Pc(d.responseText)}catch{ni("Failed to parse JSON response for "+c+": "+d.responseText)}i(null,p)}else d.status!==401&&d.status!==404&&ni("Got unsuccessful REST response for "+c+" Status: "+d.status),i(d.status);i=null}},d.open("GET",c,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(){this.rootNode_=at.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(){return{value:null,children:new Map}}function h1(n,e,t){if(Ye(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=et(e);n.children.has(i)||n.children.set(i,Td());const a=n.children.get(i);e=gt(e),h1(a,e,t)}}function h_(n,e,t){n.value!==null?t(e,n.value):RP(n,(i,a)=>{const l=new yt(e.toString()+"/"+i);h_(a,l,t)})}function RP(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ri(this.last_,(i,a)=>{t[i]=t[i]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=10*1e3,NP=30*1e3,xP=5*60*1e3;class OP{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new IP(e);const i=FS+(NP-FS)*Math.random();Ac(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Ri(e,(a,l)=>{l>0&&ar(this.statsToReport_,a)&&(t[a]=l,i=!0)}),i&&this.server_.reportStats(t),Ac(this.reportStats_.bind(this),Math.floor(Math.random()*2*xP))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var as;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(as||(as={}));function f1(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function d1(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function p1(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=as.ACK_USER_WRITE,this.source=f1()}operationForChild(e){if(Ye(this.path)){if(this.affectedTree.value!=null)return ge(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new yt(e));return new Sd(ct(),t,this.revert)}}else return ge(et(this.path)===e,"operationForChild called for unrelated child."),new Sd(gt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=as.OVERWRITE}operationForChild(e){return Ye(this.path)?new ho(this.source,ct(),this.snap.getImmediateChild(e)):new ho(this.source,gt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=as.MERGE}operationForChild(e){if(Ye(this.path)){const t=this.children.subtree(new yt(e));return t.isEmpty()?null:t.value?new ho(this.source,ct(),t.value):new jc(this.source,ct(),t)}else return ge(et(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new jc(this.source,gt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ye(e))return this.isFullyInitialized()&&!this.filtered_;const t=et(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function DP(n,e,t,i){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(wP(c.childName,c.snapshotNode))}),oc(n,a,"child_removed",e,i,t),oc(n,a,"child_added",e,i,t),oc(n,a,"child_moved",l,i,t),oc(n,a,"child_changed",e,i,t),oc(n,a,"value",e,i,t),a}function oc(n,e,t,i,a,l){const c=i.filter(d=>d.type===t);c.sort((d,p)=>PP(n,d,p)),c.forEach(d=>{const p=kP(n,d,l);a.forEach(m=>{m.respondsTo(d.type)&&e.push(m.createEvent(p,n.query_))})})}function kP(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function PP(n,e,t){if(e.childName==null||t.childName==null)throw Fl("Should only compare child_ events.");const i=new tt(e.childName,e.snapshotNode),a=new tt(t.childName,t.snapshotNode);return n.index_.compare(i,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(n,e){return{eventCache:n,serverCache:e}}function wc(n,e,t,i){return m1(new wy(e,t,i),n.serverCache)}function g1(n,e,t,i){return m1(n.eventCache,new wy(e,t,i))}function f_(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function fo(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lg;const MP=()=>(Lg||(Lg=new rs(Ek)),Lg);class mt{static fromObject(e){let t=new mt(null);return Ri(e,(i,a)=>{t=t.set(new yt(i),a)}),t}constructor(e,t=MP()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ct(),value:this.value};if(Ye(e))return null;{const i=et(e),a=this.children.get(i);if(a!==null){const l=a.findRootMostMatchingPathAndValue(gt(e),t);return l!=null?{path:ln(new yt(i),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ye(e))return this;{const t=et(e),i=this.children.get(t);return i!==null?i.subtree(gt(e)):new mt(null)}}set(e,t){if(Ye(e))return new mt(t,this.children);{const i=et(e),l=(this.children.get(i)||new mt(null)).set(gt(e),t),c=this.children.insert(i,l);return new mt(this.value,c)}}remove(e){if(Ye(e))return this.children.isEmpty()?new mt(null):new mt(null,this.children);{const t=et(e),i=this.children.get(t);if(i){const a=i.remove(gt(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new mt(null):new mt(this.value,l)}else return this}}get(e){if(Ye(e))return this.value;{const t=et(e),i=this.children.get(t);return i?i.get(gt(e)):null}}setTree(e,t){if(Ye(e))return t;{const i=et(e),l=(this.children.get(i)||new mt(null)).setTree(gt(e),t);let c;return l.isEmpty()?c=this.children.remove(i):c=this.children.insert(i,l),new mt(this.value,c)}}fold(e){return this.fold_(ct(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((a,l)=>{i[a]=l.fold_(ln(e,a),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,ct(),t)}findOnPath_(e,t,i){const a=this.value?i(t,this.value):!1;if(a)return a;if(Ye(e))return null;{const l=et(e),c=this.children.get(l);return c?c.findOnPath_(gt(e),ln(t,l),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ct(),t)}foreachOnPath_(e,t,i){if(Ye(e))return this;{this.value&&i(t,this.value);const a=et(e),l=this.children.get(a);return l?l.foreachOnPath_(gt(e),ln(t,a),i):new mt(null)}}foreach(e){this.foreach_(ct(),e)}foreach_(e,t){this.children.inorderTraversal((i,a)=>{a.foreach_(ln(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this.writeTree_=e}static empty(){return new Ui(new mt(null))}}function Cc(n,e,t){if(Ye(e))return new Ui(new mt(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const a=i.path;let l=i.value;const c=Ai(a,e);return l=l.updateChild(c,t),new Ui(n.writeTree_.set(a,l))}else{const a=new mt(t),l=n.writeTree_.setTree(e,a);return new Ui(l)}}}function HS(n,e,t){let i=n;return Ri(t,(a,l)=>{i=Cc(i,ln(e,a),l)}),i}function qS(n,e){if(Ye(e))return Ui.empty();{const t=n.writeTree_.setTree(e,new mt(null));return new Ui(t)}}function d_(n,e){return Eo(n,e)!=null}function Eo(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Ai(t.path,e)):null}function GS(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Nn,(i,a)=>{e.push(new tt(i,a))}):n.writeTree_.children.inorderTraversal((i,a)=>{a.value!=null&&e.push(new tt(i,a.value))}),e}function ea(n,e){if(Ye(e))return n;{const t=Eo(n,e);return t!=null?new Ui(new mt(t)):new Ui(n.writeTree_.subtree(e))}}function p_(n){return n.writeTree_.isEmpty()}function Dl(n,e){return _1(ct(),n.writeTree_,e)}function _1(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(ge(l.value!==null,"Priority writes must always be leaf nodes"),i=l.value):t=_1(ln(n,a),l,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(ln(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(n,e){return b1(e,n)}function LP(n,e,t,i,a){ge(i>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:a}),a&&(n.visibleWrites=Cc(n.visibleWrites,e,t)),n.lastWriteId=i}function UP(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function VP(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);ge(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let a=i.visible,l=!1,c=n.allWrites.length-1;for(;a&&c>=0;){const d=n.allWrites[c];d.visible&&(c>=t&&jP(d,i.path)?a=!1:Mi(i.path,d.path)&&(l=!0)),c--}if(a){if(l)return BP(n),!0;if(i.snap)n.visibleWrites=qS(n.visibleWrites,i.path);else{const d=i.children;Ri(d,p=>{n.visibleWrites=qS(n.visibleWrites,ln(i.path,p))})}return!0}else return!1}function jP(n,e){if(n.snap)return Mi(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Mi(ln(n.path,t),e))return!0;return!1}function BP(n){n.visibleWrites=v1(n.allWrites,zP,ct()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function zP(n){return n.visible}function v1(n,e,t){let i=Ui.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const c=l.path;let d;if(l.snap)Mi(t,c)?(d=Ai(t,c),i=Cc(i,d,l.snap)):Mi(c,t)&&(d=Ai(c,t),i=Cc(i,ct(),l.snap.getChild(d)));else if(l.children){if(Mi(t,c))d=Ai(t,c),i=HS(i,d,l.children);else if(Mi(c,t))if(d=Ai(c,t),Ye(d))i=HS(i,ct(),l.children);else{const p=xl(l.children,et(d));if(p){const m=p.getChild(gt(d));i=Cc(i,ct(),m)}}}else throw Fl("WriteRecord should have .snap or .children")}}return i}function E1(n,e,t,i,a){if(!i&&!a){const l=Eo(n.visibleWrites,e);if(l!=null)return l;{const c=ea(n.visibleWrites,e);if(p_(c))return t;if(t==null&&!d_(c,ct()))return null;{const d=t||at.EMPTY_NODE;return Dl(c,d)}}}else{const l=ea(n.visibleWrites,e);if(!a&&p_(l))return t;if(!a&&t==null&&!d_(l,ct()))return null;{const c=function(m){return(m.visible||a)&&(!i||!~i.indexOf(m.writeId))&&(Mi(m.path,e)||Mi(e,m.path))},d=v1(n.allWrites,c,e),p=t||at.EMPTY_NODE;return Dl(d,p)}}}function FP(n,e,t){let i=at.EMPTY_NODE;const a=Eo(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(Nn,(l,c)=>{i=i.updateImmediateChild(l,c)}),i;if(t){const l=ea(n.visibleWrites,e);return t.forEachChild(Nn,(c,d)=>{const p=Dl(ea(l,new yt(c)),d);i=i.updateImmediateChild(c,p)}),GS(l).forEach(c=>{i=i.updateImmediateChild(c.name,c.node)}),i}else{const l=ea(n.visibleWrites,e);return GS(l).forEach(c=>{i=i.updateImmediateChild(c.name,c.node)}),i}}function HP(n,e,t,i,a){ge(i||a,"Either existingEventSnap or existingServerSnap must exist");const l=ln(e,t);if(d_(n.visibleWrites,l))return null;{const c=ea(n.visibleWrites,l);return p_(c)?a.getChild(t):Dl(c,a.getChild(t))}}function qP(n,e,t,i){const a=ln(e,t),l=Eo(n.visibleWrites,a);if(l!=null)return l;if(i.isCompleteForChild(t)){const c=ea(n.visibleWrites,a);return Dl(c,i.getNode().getImmediateChild(t))}else return null}function GP(n,e){return Eo(n.visibleWrites,e)}function WP(n,e,t,i,a,l,c){let d;const p=ea(n.visibleWrites,e),m=Eo(p,ct());if(m!=null)d=m;else if(t!=null)d=Dl(p,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const y=[],S=c.getCompare(),A=l?d.getReverseIteratorFrom(i,c):d.getIteratorFrom(i,c);let D=A.getNext();for(;D&&y.length<a;)S(D,i)!==0&&y.push(D),D=A.getNext();return y}else return[]}function KP(){return{visibleWrites:Ui.empty(),allWrites:[],lastWriteId:-1}}function m_(n,e,t,i){return E1(n.writeTree,n.treePath,e,t,i)}function T1(n,e){return FP(n.writeTree,n.treePath,e)}function WS(n,e,t,i){return HP(n.writeTree,n.treePath,e,t,i)}function bd(n,e){return GP(n.writeTree,ln(n.treePath,e))}function $P(n,e,t,i,a,l){return WP(n.writeTree,n.treePath,e,t,i,a,l)}function Cy(n,e,t){return qP(n.writeTree,n.treePath,e,t)}function S1(n,e){return b1(ln(n.treePath,e),n.writeTree)}function b1(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;ge(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ge(i!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(i);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(i,jS(i,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(i,AP(i,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(i,bP(i,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(i,jS(i,e.snapshotNode,a.oldSnap));else throw Fl("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const A1=new QP;class Ry{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new wy(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Cy(this.writes_,e,i)}}getChildAfterChild(e,t,i){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:fo(this.viewCache_),l=$P(this.writes_,a,t,1,i,e);return l.length===0?null:l[0]}}function XP(n,e){ge(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ge(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function ZP(n,e,t,i,a){const l=new YP;let c,d;if(t.type===as.OVERWRITE){const m=t;m.source.fromUser?c=g_(n,e,m.path,m.snap,i,a,l):(ge(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered()&&!Ye(m.path),c=Ad(n,e,m.path,m.snap,i,a,d,l))}else if(t.type===as.MERGE){const m=t;m.source.fromUser?c=eM(n,e,m.path,m.children,i,a,l):(ge(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered(),c=__(n,e,m.path,m.children,i,a,d,l))}else if(t.type===as.ACK_USER_WRITE){const m=t;m.revert?c=iM(n,e,m.path,i,a,l):c=tM(n,e,m.path,m.affectedTree,i,a,l)}else if(t.type===as.LISTEN_COMPLETE)c=nM(n,e,t.path,i,l);else throw Fl("Unknown operation type: "+t.type);const p=l.getChanges();return JP(e,c,p),{viewCache:c,changes:p}}function JP(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const a=i.getNode().isLeafNode()||i.getNode().isEmpty(),l=f_(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!i.getNode().equals(l)||!i.getNode().getPriority().equals(l.getPriority()))&&t.push(SP(f_(e)))}}function w1(n,e,t,i,a,l){const c=e.eventCache;if(bd(i,t)!=null)return e;{let d,p;if(Ye(t))if(ge(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=fo(e),y=m instanceof at?m:at.EMPTY_NODE,S=T1(i,y);d=n.filter.updateFullNode(e.eventCache.getNode(),S,l)}else{const m=m_(i,fo(e));d=n.filter.updateFullNode(e.eventCache.getNode(),m,l)}else{const m=et(t);if(m===".priority"){ge(ra(t)===1,"Can't have a priority with additional path components");const y=c.getNode();p=e.serverCache.getNode();const S=WS(i,t,y,p);S!=null?d=n.filter.updatePriority(y,S):d=c.getNode()}else{const y=gt(t);let S;if(c.isCompleteForChild(m)){p=e.serverCache.getNode();const A=WS(i,t,c.getNode(),p);A!=null?S=c.getNode().getImmediateChild(m).updateChild(y,A):S=c.getNode().getImmediateChild(m)}else S=Cy(i,m,e.serverCache);S!=null?d=n.filter.updateChild(c.getNode(),m,S,y,a,l):d=c.getNode()}}return wc(e,d,c.isFullyInitialized()||Ye(t),n.filter.filtersNodes())}}function Ad(n,e,t,i,a,l,c,d){const p=e.serverCache;let m;const y=c?n.filter:n.filter.getIndexedFilter();if(Ye(t))m=y.updateFullNode(p.getNode(),i,null);else if(y.filtersNodes()&&!p.isFiltered()){const D=p.getNode().updateChild(t,i);m=y.updateFullNode(p.getNode(),D,null)}else{const D=et(t);if(!p.isCompleteForPath(t)&&ra(t)>1)return e;const V=gt(t),M=p.getNode().getImmediateChild(D).updateChild(V,i);D===".priority"?m=y.updatePriority(p.getNode(),M):m=y.updateChild(p.getNode(),D,M,V,A1,null)}const S=g1(e,m,p.isFullyInitialized()||Ye(t),y.filtersNodes()),A=new Ry(a,S,l);return w1(n,S,t,a,A,d)}function g_(n,e,t,i,a,l,c){const d=e.eventCache;let p,m;const y=new Ry(a,e,l);if(Ye(t))m=n.filter.updateFullNode(e.eventCache.getNode(),i,c),p=wc(e,m,!0,n.filter.filtersNodes());else{const S=et(t);if(S===".priority")m=n.filter.updatePriority(e.eventCache.getNode(),i),p=wc(e,m,d.isFullyInitialized(),d.isFiltered());else{const A=gt(t),D=d.getNode().getImmediateChild(S);let V;if(Ye(A))V=i;else{const G=y.getCompleteChild(S);G!=null?t1(A)===".priority"&&G.getChild(i1(A)).isEmpty()?V=G:V=G.updateChild(A,i):V=at.EMPTY_NODE}if(D.equals(V))p=e;else{const G=n.filter.updateChild(d.getNode(),S,V,A,y,c);p=wc(e,G,d.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function KS(n,e){return n.eventCache.isCompleteForChild(e)}function eM(n,e,t,i,a,l,c){let d=e;return i.foreach((p,m)=>{const y=ln(t,p);KS(e,et(y))&&(d=g_(n,d,y,m,a,l,c))}),i.foreach((p,m)=>{const y=ln(t,p);KS(e,et(y))||(d=g_(n,d,y,m,a,l,c))}),d}function $S(n,e,t){return t.foreach((i,a)=>{e=e.updateChild(i,a)}),e}function __(n,e,t,i,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,m;Ye(t)?m=i:m=new mt(null).setTree(t,i);const y=e.serverCache.getNode();return m.children.inorderTraversal((S,A)=>{if(y.hasChild(S)){const D=e.serverCache.getNode().getImmediateChild(S),V=$S(n,D,A);p=Ad(n,p,new yt(S),V,a,l,c,d)}}),m.children.inorderTraversal((S,A)=>{const D=!e.serverCache.isCompleteForChild(S)&&A.value===null;if(!y.hasChild(S)&&!D){const V=e.serverCache.getNode().getImmediateChild(S),G=$S(n,V,A);p=Ad(n,p,new yt(S),G,a,l,c,d)}}),p}function tM(n,e,t,i,a,l,c){if(bd(a,t)!=null)return e;const d=e.serverCache.isFiltered(),p=e.serverCache;if(i.value!=null){if(Ye(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return Ad(n,e,t,p.getNode().getChild(t),a,l,d,c);if(Ye(t)){let m=new mt(null);return p.getNode().forEachChild(Rl,(y,S)=>{m=m.set(new yt(y),S)}),__(n,e,t,m,a,l,d,c)}else return e}else{let m=new mt(null);return i.foreach((y,S)=>{const A=ln(t,y);p.isCompleteForPath(A)&&(m=m.set(y,p.getNode().getChild(A)))}),__(n,e,t,m,a,l,d,c)}}function nM(n,e,t,i,a){const l=e.serverCache,c=g1(e,l.getNode(),l.isFullyInitialized()||Ye(t),l.isFiltered());return w1(n,c,t,i,A1,a)}function iM(n,e,t,i,a,l){let c;if(bd(i,t)!=null)return e;{const d=new Ry(i,e,a),p=e.eventCache.getNode();let m;if(Ye(t)||et(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=m_(i,fo(e));else{const S=e.serverCache.getNode();ge(S instanceof at,"serverChildren would be complete if leaf node"),y=T1(i,S)}y=y,m=n.filter.updateFullNode(p,y,l)}else{const y=et(t);let S=Cy(i,y,e.serverCache);S==null&&e.serverCache.isCompleteForChild(y)&&(S=p.getImmediateChild(y)),S!=null?m=n.filter.updateChild(p,y,S,gt(t),d,l):e.eventCache.getNode().hasChild(y)?m=n.filter.updateChild(p,y,at.EMPTY_NODE,gt(t),d,l):m=p,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=m_(i,fo(e)),c.isLeafNode()&&(m=n.filter.updateFullNode(m,c,l)))}return c=e.serverCache.isFullyInitialized()||bd(i,ct())!=null,wc(e,m,c,n.filter.filtersNodes())}}function sM(n,e){const t=fo(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Ye(e)&&!t.getImmediateChild(et(e)).isEmpty())?t.getChild(e):null}function YS(n,e,t,i){e.type===as.MERGE&&e.source.queryId!==null&&(ge(fo(n.viewCache_),"We should always have a full cache before handling merges"),ge(f_(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=ZP(n.processor_,a,e,t,i);return XP(n.processor_,l.viewCache),ge(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,rM(n,l.changes,l.viewCache.eventCache.getNode())}function rM(n,e,t,i){const a=n.eventRegistrations_;return DP(n.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let QS;function aM(n){ge(!QS,"__referenceConstructor has already been defined"),QS=n}function Iy(n,e,t,i){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return ge(l!=null,"SyncTree gave us an op for an invalid query."),YS(l,e,t,i)}else{let l=[];for(const c of n.views.values())l=l.concat(YS(c,e,t,i));return l}}function Ny(n,e){let t=null;for(const i of n.views.values())t=t||sM(i,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let XS;function oM(n){ge(!XS,"__referenceConstructor has already been defined"),XS=n}class ZS{constructor(e){this.listenProvider_=e,this.syncPointTree_=new mt(null),this.pendingWriteTree_=KP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function lM(n,e,t,i,a){return LP(n.pendingWriteTree_,e,t,i,a),a?Yd(n,new ho(f1(),e,t)):[]}function Tl(n,e,t=!1){const i=UP(n.pendingWriteTree_,e);if(VP(n.pendingWriteTree_,e)){let l=new mt(null);return i.snap!=null?l=l.set(ct(),!0):Ri(i.children,c=>{l=l.set(new yt(c),!0)}),Yd(n,new Sd(i.path,l,t))}else return[]}function $d(n,e,t){return Yd(n,new ho(d1(),e,t))}function uM(n,e,t){const i=mt.fromObject(t);return Yd(n,new jc(d1(),e,i))}function cM(n,e,t,i){const a=N1(n,i);if(a!=null){const l=x1(a),c=l.path,d=l.queryId,p=Ai(c,e),m=new ho(p1(d),p,t);return O1(n,c,m)}else return[]}function hM(n,e,t,i){const a=N1(n,i);if(a){const l=x1(a),c=l.path,d=l.queryId,p=Ai(c,e),m=mt.fromObject(t),y=new jc(p1(d),p,m);return O1(n,c,y)}else return[]}function C1(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(c,d)=>{const p=Ai(c,e),m=Ny(d,p);if(m)return m});return E1(a,e,l,t,!0)}function Yd(n,e){return R1(e,n.syncPointTree_,null,y1(n.pendingWriteTree_,ct()))}function R1(n,e,t,i){if(Ye(n.path))return I1(n,e,t,i);{const a=e.get(ct());t==null&&a!=null&&(t=Ny(a,ct()));let l=[];const c=et(n.path),d=n.operationForChild(c),p=e.children.get(c);if(p&&d){const m=t?t.getImmediateChild(c):null,y=S1(i,c);l=l.concat(R1(d,p,m,y))}return a&&(l=l.concat(Iy(a,n,i,t))),l}}function I1(n,e,t,i){const a=e.get(ct());t==null&&a!=null&&(t=Ny(a,ct()));let l=[];return e.children.inorderTraversal((c,d)=>{const p=t?t.getImmediateChild(c):null,m=S1(i,c),y=n.operationForChild(c);y&&(l=l.concat(I1(y,d,p,m)))}),a&&(l=l.concat(Iy(a,n,i,t))),l}function N1(n,e){return n.tagToQueryMap.get(e)}function x1(n){const e=n.indexOf("$");return ge(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new yt(n.substr(0,e))}}function O1(n,e,t){const i=n.syncPointTree_.get(e);ge(i,"Missing sync point for query tag that we're tracking");const a=y1(n.pendingWriteTree_,e);return Iy(i,t,a,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new xy(t)}node(){return this.node_}}class Oy{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ln(this.path_,e);return new Oy(this.syncTree_,t)}node(){return C1(this.syncTree_,this.path_)}}const fM=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},JS=function(n,e,t){if(!n||typeof n!="object")return n;if(ge(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return dM(n[".sv"],e,t);if(typeof n[".sv"]=="object")return pM(n[".sv"],e);ge(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},dM=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ge(!1,"Unexpected server value: "+n)}},pM=function(n,e,t){n.hasOwnProperty("increment")||ge(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&ge(!1,"Unexpected increment value: "+i);const a=e.node();if(ge(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return i;const c=a.getValue();return typeof c!="number"?i:c+i},mM=function(n,e,t,i){return Dy(e,new Oy(t,n),i)},gM=function(n,e,t){return Dy(n,new xy(e),t)};function Dy(n,e,t){const i=n.getPriority().val(),a=JS(i,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const c=n,d=JS(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new an(d,Cn(a)):n}else{const c=n;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new an(a))),c.forEachChild(Nn,(d,p)=>{const m=Dy(p,e.getImmediateChild(d),t);m!==p&&(l=l.updateImmediateChild(d,m))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Py(n,e){let t=e instanceof yt?e:new yt(e),i=n,a=et(t);for(;a!==null;){const l=xl(i.node.children,a)||{children:{},childCount:0};i=new ky(a,i,l),t=gt(t),a=et(t)}return i}function Wl(n){return n.node.value}function D1(n,e){n.node.value=e,y_(n)}function k1(n){return n.node.childCount>0}function _M(n){return Wl(n)===void 0&&!k1(n)}function Qd(n,e){Ri(n.node.children,(t,i)=>{e(new ky(t,n,i))})}function P1(n,e,t,i){t&&e(n),Qd(n,a=>{P1(a,e,!0)})}function yM(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ih(n){return new yt(n.parent===null?n.name:ih(n.parent)+"/"+n.name)}function y_(n){n.parent!==null&&vM(n.parent,n.name,n)}function vM(n,e,t){const i=_M(t),a=ar(n.node.children,e);i&&a?(delete n.node.children[e],n.node.childCount--,y_(n)):!i&&!a&&(n.node.children[e]=t.node,n.node.childCount++,y_(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EM=/[\[\].#$\/\u0000-\u001F\u007F]/,TM=/[\[\].#$\u0000-\u001F\u007F]/,Ug=10*1024*1024,M1=function(n){return typeof n=="string"&&n.length!==0&&!EM.test(n)},SM=function(n){return typeof n=="string"&&n.length!==0&&!TM.test(n)},bM=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),SM(n)},L1=function(n,e,t){const i=t instanceof yt?new nP(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+to(i));if(typeof e=="function")throw new Error(n+"contains a function "+to(i)+" with contents = "+e.toString());if(Mw(e))throw new Error(n+"contains "+e.toString()+" "+to(i));if(typeof e=="string"&&e.length>Ug/3&&zd(e)>Ug)throw new Error(n+"contains a string greater than "+Ug+" utf8 bytes "+to(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(Ri(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!M1(c)))throw new Error(n+" contains an invalid key ("+c+") "+to(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);iP(i,c),L1(n,d,i),sP(i)}),a&&l)throw new Error(n+' contains ".value" child '+to(i)+" in addition to actual children.")}},AM=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!M1(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!bM(t))throw new Error(Bx(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wM{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function CM(n,e){let t=null;for(let i=0;i<e.length;i++){const a=e[i],l=a.getPath();t!==null&&!s1(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function To(n,e,t){CM(n,t),RM(n,i=>Mi(i,e)||Mi(e,i))}function RM(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const a=n.eventLists_[i];if(a){const l=a.path;e(l)?(IM(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function IM(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();bc&&wn("event: "+t.toString()),th(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NM="repo_interrupt",xM=25;class OM{constructor(e,t,i,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new wM,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Td(),this.transactionQueueTree_=new ky,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function DM(n,e,t){if(n.stats_=Ey(n.repoInfo_),n.forceRestClient_||Ck())n.server_=new Ed(n.repoInfo_,(i,a,l,c)=>{eb(n,i,a,l,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>tb(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{gn(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Zs(n.repoInfo_,e,(i,a,l,c)=>{eb(n,i,a,l,c)},i=>{tb(n,i)},i=>{PM(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Dk(n.repoInfo_,()=>new OP(n.stats_,n.server_)),n.infoData_=new CP,n.infoSyncTree_=new ZS({startListening:(i,a,l,c)=>{let d=[];const p=n.infoData_.getNode(i._path);return p.isEmpty()||(d=$d(n.infoSyncTree_,i._path,p),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),My(n,"connected",!1),n.serverSyncTree_=new ZS({startListening:(i,a,l,c)=>(n.server_.listen(i,l,a,(d,p)=>{const m=c(d,p);To(n.eventQueue_,i._path,m)}),[]),stopListening:(i,a)=>{n.server_.unlisten(i,a)}})}function kM(n){const t=n.infoData_.getNode(new yt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function U1(n){return fM({timestamp:kM(n)})}function eb(n,e,t,i,a){n.dataUpdateCount++;const l=new yt(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(i){const p=cd(t,m=>Cn(m));c=hM(n.serverSyncTree_,l,p,a)}else{const p=Cn(t);c=cM(n.serverSyncTree_,l,p,a)}else if(i){const p=cd(t,m=>Cn(m));c=uM(n.serverSyncTree_,l,p)}else{const p=Cn(t);c=$d(n.serverSyncTree_,l,p)}let d=l;c.length>0&&(d=Uy(n,l)),To(n.eventQueue_,d,c)}function tb(n,e){My(n,"connected",e),e===!1&&LM(n)}function PM(n,e){Ri(e,(t,i)=>{My(n,t,i)})}function My(n,e,t){const i=new yt("/.info/"+e),a=Cn(t);n.infoData_.updateSnapshot(i,a);const l=$d(n.infoSyncTree_,i,a);To(n.eventQueue_,i,l)}function MM(n){return n.nextWriteId_++}function LM(n){V1(n,"onDisconnectEvents");const e=U1(n),t=Td();h_(n.onDisconnect_,ct(),(a,l)=>{const c=mM(a,l,n.serverSyncTree_,e);h1(t,a,c)});let i=[];h_(t,ct(),(a,l)=>{i=i.concat($d(n.serverSyncTree_,a,l));const c=BM(n,a);Uy(n,c)}),n.onDisconnect_=Td(),To(n.eventQueue_,ct(),i)}function UM(n){n.persistentConnection_&&n.persistentConnection_.interrupt(NM)}function V1(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),wn(t,...e)}function j1(n,e,t){return C1(n.serverSyncTree_,e,t)||at.EMPTY_NODE}function Ly(n,e=n.transactionQueueTree_){if(e||Xd(n,e),Wl(e)){const t=z1(n,e);ge(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&VM(n,ih(e),t)}else k1(e)&&Qd(e,t=>{Ly(n,t)})}function VM(n,e,t){const i=t.map(m=>m.currentWriteId),a=j1(n,e,i);let l=a;const c=a.hash();for(let m=0;m<t.length;m++){const y=t[m];ge(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const S=Ai(e,y.path);l=l.updateChild(S,y.currentOutputSnapshotRaw)}const d=l.val(!0),p=e;n.server_.put(p.toString(),d,m=>{V1(n,"transaction put response",{path:p.toString(),status:m});let y=[];if(m==="ok"){const S=[];for(let A=0;A<t.length;A++)t[A].status=2,y=y.concat(Tl(n.serverSyncTree_,t[A].currentWriteId)),t[A].onComplete&&S.push(()=>t[A].onComplete(null,!0,t[A].currentOutputSnapshotResolved)),t[A].unwatcher();Xd(n,Py(n.transactionQueueTree_,e)),Ly(n,n.transactionQueueTree_),To(n.eventQueue_,e,y);for(let A=0;A<S.length;A++)th(S[A])}else{if(m==="datastale")for(let S=0;S<t.length;S++)t[S].status===3?t[S].status=4:t[S].status=0;else{ni("transaction at "+p.toString()+" failed: "+m);for(let S=0;S<t.length;S++)t[S].status=4,t[S].abortReason=m}Uy(n,e)}},c)}function Uy(n,e){const t=B1(n,e),i=ih(t),a=z1(n,t);return jM(n,a,i),i}function jM(n,e,t){if(e.length===0)return;const i=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const p=e[d],m=Ai(t,p.path);let y=!1,S;if(ge(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,S=p.abortReason,a=a.concat(Tl(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=xM)y=!0,S="maxretry",a=a.concat(Tl(n.serverSyncTree_,p.currentWriteId,!0));else{const A=j1(n,p.path,c);p.currentInputSnapshot=A;const D=e[d].update(A.val());if(D!==void 0){L1("transaction failed: Data returned ",D,p.path);let V=Cn(D);typeof D=="object"&&D!=null&&ar(D,".priority")||(V=V.updatePriority(A.getPriority()));const M=p.currentWriteId,B=U1(n),H=gM(V,A,B);p.currentOutputSnapshotRaw=V,p.currentOutputSnapshotResolved=H,p.currentWriteId=MM(n),c.splice(c.indexOf(M),1),a=a.concat(lM(n.serverSyncTree_,p.path,H,p.currentWriteId,p.applyLocally)),a=a.concat(Tl(n.serverSyncTree_,M,!0))}else y=!0,S="nodata",a=a.concat(Tl(n.serverSyncTree_,p.currentWriteId,!0))}To(n.eventQueue_,t,a),a=[],y&&(e[d].status=2,function(A){setTimeout(A,Math.floor(0))}(e[d].unwatcher),e[d].onComplete&&(S==="nodata"?i.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):i.push(()=>e[d].onComplete(new Error(S),!1,null))))}Xd(n,n.transactionQueueTree_);for(let d=0;d<i.length;d++)th(i[d]);Ly(n,n.transactionQueueTree_)}function B1(n,e){let t,i=n.transactionQueueTree_;for(t=et(e);t!==null&&Wl(i)===void 0;)i=Py(i,t),e=gt(e),t=et(e);return i}function z1(n,e){const t=[];return F1(n,e,t),t.sort((i,a)=>i.order-a.order),t}function F1(n,e,t){const i=Wl(e);if(i)for(let a=0;a<i.length;a++)t.push(i[a]);Qd(e,a=>{F1(n,a,t)})}function Xd(n,e){const t=Wl(e);if(t){let i=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[i]=t[a],i++);t.length=i,D1(e,t.length>0?t:void 0)}Qd(e,i=>{Xd(n,i)})}function BM(n,e){const t=ih(B1(n,e)),i=Py(n.transactionQueueTree_,e);return yM(i,a=>{Vg(n,a)}),Vg(n,i),P1(i,a=>{Vg(n,a)}),t}function Vg(n,e){const t=Wl(e);if(t){const i=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(ge(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(ge(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(Tl(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&i.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?D1(e,void 0):t.length=l+1,To(n.eventQueue_,ih(e),a);for(let c=0;c<i.length;c++)th(i[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zM(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let a=t[i];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function FM(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ni(`Invalid query segment '${t}' in query '${n}'`)}return e}const nb=function(n,e){const t=HM(n),i=t.namespace;t.domain==="firebase.com"&&uo(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&uo("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||yk();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Nk(t.host,t.secure,i,a,e,"",i!==t.subdomain),path:new yt(t.pathString)}},HM=function(n){let e="",t="",i="",a="",l="",c=!0,d="https",p=443;if(typeof n=="string"){let m=n.indexOf("//");m>=0&&(d=n.substring(0,m-1),n=n.substring(m+2));let y=n.indexOf("/");y===-1&&(y=n.length);let S=n.indexOf("?");S===-1&&(S=n.length),e=n.substring(0,Math.min(y,S)),y<S&&(a=zM(n.substring(y,S)));const A=FM(n.substring(Math.min(n.length,S)));m=e.indexOf(":"),m>=0?(c=d==="https"||d==="wss",p=parseInt(e.substring(m+1),10)):m=e.length;const D=e.slice(0,m);if(D.toLowerCase()==="localhost")t="localhost";else if(D.split(".").length<=2)t=D;else{const V=e.indexOf(".");i=e.substring(0,V).toLowerCase(),t=e.substring(V+1),l=i}"ns"in A&&(l=A.ns)}return{host:e,port:p,domain:t,subdomain:i,secure:c,scheme:d,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,t,i,a){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=a}get key(){return Ye(this._path)?null:t1(this._path)}get ref(){return new Kl(this._repo,this._path)}get _queryIdentifier(){const e=zS(this._queryParams),t=yy(e);return t==="{}"?"default":t}get _queryObject(){return zS(this._queryParams)}isEqual(e){if(e=bt(e),!(e instanceof Vy))return!1;const t=this._repo===e._repo,i=s1(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&i&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+tP(this._path)}}class Kl extends Vy{constructor(e,t){super(e,t,new Ay,!1)}get parent(){const e=i1(this._path);return e===null?null:new Kl(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}aM(Kl);oM(Kl);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qM="FIREBASE_DATABASE_EMULATOR_HOST",v_={};let GM=!1;function WM(n,e,t,i,a){let l=i||n.options.databaseURL;l===void 0&&(n.options.projectId||uo("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),wn("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=nb(l,a),d=c.repoInfo,p;typeof process<"u"&&SS&&(p=SS[qM]),p?(l=`http://${p}?ns=${d.namespace}`,c=nb(l,a),d=c.repoInfo):c.repoInfo.secure;const m=new Ik(n.name,n.options,e);AM("Invalid Firebase Database URL",c),Ye(c.path)||uo("Database URL must point to the root of a Firebase Database (not including a child path).");const y=$M(d,n,m,new Rk(n,t));return new YM(y,n)}function KM(n,e){const t=v_[e];(!t||t[n.key]!==n)&&uo(`Database ${e}(${n.repoInfo_}) has already been deleted.`),UM(n),delete t[n.key]}function $M(n,e,t,i){let a=v_[e.name];a||(a={},v_[e.name]=a);let l=a[n.toURLString()];return l&&uo("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new OM(n,GM,t,i),a[n.toURLString()]=l,l}class YM{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(DM(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Kl(this._repo,ct())),this._rootInternal}_delete(){return this._rootInternal!==null&&(KM(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&uo("Cannot call "+e+" on a deleted database.")}}/**
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
 */function QM(n){fk(ma),sa(new Js("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return WM(i,a,l,t)},"PUBLIC").setMultipleInstances(!0)),wi(bS,AS,n),wi(bS,AS,"esm2017")}Zs.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Zs.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};QM();var ib=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ta,H1;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,R){function I(){}I.prototype=R.prototype,P.D=R.prototype,P.prototype=new I,P.prototype.constructor=P,P.C=function(N,k,L){for(var x=Array(arguments.length-2),je=2;je<arguments.length;je++)x[je-2]=arguments[je];return R.prototype[k].apply(N,x)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(P,R,I){I||(I=0);var N=Array(16);if(typeof R=="string")for(var k=0;16>k;++k)N[k]=R.charCodeAt(I++)|R.charCodeAt(I++)<<8|R.charCodeAt(I++)<<16|R.charCodeAt(I++)<<24;else for(k=0;16>k;++k)N[k]=R[I++]|R[I++]<<8|R[I++]<<16|R[I++]<<24;R=P.g[0],I=P.g[1],k=P.g[2];var L=P.g[3],x=R+(L^I&(k^L))+N[0]+3614090360&4294967295;R=I+(x<<7&4294967295|x>>>25),x=L+(k^R&(I^k))+N[1]+3905402710&4294967295,L=R+(x<<12&4294967295|x>>>20),x=k+(I^L&(R^I))+N[2]+606105819&4294967295,k=L+(x<<17&4294967295|x>>>15),x=I+(R^k&(L^R))+N[3]+3250441966&4294967295,I=k+(x<<22&4294967295|x>>>10),x=R+(L^I&(k^L))+N[4]+4118548399&4294967295,R=I+(x<<7&4294967295|x>>>25),x=L+(k^R&(I^k))+N[5]+1200080426&4294967295,L=R+(x<<12&4294967295|x>>>20),x=k+(I^L&(R^I))+N[6]+2821735955&4294967295,k=L+(x<<17&4294967295|x>>>15),x=I+(R^k&(L^R))+N[7]+4249261313&4294967295,I=k+(x<<22&4294967295|x>>>10),x=R+(L^I&(k^L))+N[8]+1770035416&4294967295,R=I+(x<<7&4294967295|x>>>25),x=L+(k^R&(I^k))+N[9]+2336552879&4294967295,L=R+(x<<12&4294967295|x>>>20),x=k+(I^L&(R^I))+N[10]+4294925233&4294967295,k=L+(x<<17&4294967295|x>>>15),x=I+(R^k&(L^R))+N[11]+2304563134&4294967295,I=k+(x<<22&4294967295|x>>>10),x=R+(L^I&(k^L))+N[12]+1804603682&4294967295,R=I+(x<<7&4294967295|x>>>25),x=L+(k^R&(I^k))+N[13]+4254626195&4294967295,L=R+(x<<12&4294967295|x>>>20),x=k+(I^L&(R^I))+N[14]+2792965006&4294967295,k=L+(x<<17&4294967295|x>>>15),x=I+(R^k&(L^R))+N[15]+1236535329&4294967295,I=k+(x<<22&4294967295|x>>>10),x=R+(k^L&(I^k))+N[1]+4129170786&4294967295,R=I+(x<<5&4294967295|x>>>27),x=L+(I^k&(R^I))+N[6]+3225465664&4294967295,L=R+(x<<9&4294967295|x>>>23),x=k+(R^I&(L^R))+N[11]+643717713&4294967295,k=L+(x<<14&4294967295|x>>>18),x=I+(L^R&(k^L))+N[0]+3921069994&4294967295,I=k+(x<<20&4294967295|x>>>12),x=R+(k^L&(I^k))+N[5]+3593408605&4294967295,R=I+(x<<5&4294967295|x>>>27),x=L+(I^k&(R^I))+N[10]+38016083&4294967295,L=R+(x<<9&4294967295|x>>>23),x=k+(R^I&(L^R))+N[15]+3634488961&4294967295,k=L+(x<<14&4294967295|x>>>18),x=I+(L^R&(k^L))+N[4]+3889429448&4294967295,I=k+(x<<20&4294967295|x>>>12),x=R+(k^L&(I^k))+N[9]+568446438&4294967295,R=I+(x<<5&4294967295|x>>>27),x=L+(I^k&(R^I))+N[14]+3275163606&4294967295,L=R+(x<<9&4294967295|x>>>23),x=k+(R^I&(L^R))+N[3]+4107603335&4294967295,k=L+(x<<14&4294967295|x>>>18),x=I+(L^R&(k^L))+N[8]+1163531501&4294967295,I=k+(x<<20&4294967295|x>>>12),x=R+(k^L&(I^k))+N[13]+2850285829&4294967295,R=I+(x<<5&4294967295|x>>>27),x=L+(I^k&(R^I))+N[2]+4243563512&4294967295,L=R+(x<<9&4294967295|x>>>23),x=k+(R^I&(L^R))+N[7]+1735328473&4294967295,k=L+(x<<14&4294967295|x>>>18),x=I+(L^R&(k^L))+N[12]+2368359562&4294967295,I=k+(x<<20&4294967295|x>>>12),x=R+(I^k^L)+N[5]+4294588738&4294967295,R=I+(x<<4&4294967295|x>>>28),x=L+(R^I^k)+N[8]+2272392833&4294967295,L=R+(x<<11&4294967295|x>>>21),x=k+(L^R^I)+N[11]+1839030562&4294967295,k=L+(x<<16&4294967295|x>>>16),x=I+(k^L^R)+N[14]+4259657740&4294967295,I=k+(x<<23&4294967295|x>>>9),x=R+(I^k^L)+N[1]+2763975236&4294967295,R=I+(x<<4&4294967295|x>>>28),x=L+(R^I^k)+N[4]+1272893353&4294967295,L=R+(x<<11&4294967295|x>>>21),x=k+(L^R^I)+N[7]+4139469664&4294967295,k=L+(x<<16&4294967295|x>>>16),x=I+(k^L^R)+N[10]+3200236656&4294967295,I=k+(x<<23&4294967295|x>>>9),x=R+(I^k^L)+N[13]+681279174&4294967295,R=I+(x<<4&4294967295|x>>>28),x=L+(R^I^k)+N[0]+3936430074&4294967295,L=R+(x<<11&4294967295|x>>>21),x=k+(L^R^I)+N[3]+3572445317&4294967295,k=L+(x<<16&4294967295|x>>>16),x=I+(k^L^R)+N[6]+76029189&4294967295,I=k+(x<<23&4294967295|x>>>9),x=R+(I^k^L)+N[9]+3654602809&4294967295,R=I+(x<<4&4294967295|x>>>28),x=L+(R^I^k)+N[12]+3873151461&4294967295,L=R+(x<<11&4294967295|x>>>21),x=k+(L^R^I)+N[15]+530742520&4294967295,k=L+(x<<16&4294967295|x>>>16),x=I+(k^L^R)+N[2]+3299628645&4294967295,I=k+(x<<23&4294967295|x>>>9),x=R+(k^(I|~L))+N[0]+4096336452&4294967295,R=I+(x<<6&4294967295|x>>>26),x=L+(I^(R|~k))+N[7]+1126891415&4294967295,L=R+(x<<10&4294967295|x>>>22),x=k+(R^(L|~I))+N[14]+2878612391&4294967295,k=L+(x<<15&4294967295|x>>>17),x=I+(L^(k|~R))+N[5]+4237533241&4294967295,I=k+(x<<21&4294967295|x>>>11),x=R+(k^(I|~L))+N[12]+1700485571&4294967295,R=I+(x<<6&4294967295|x>>>26),x=L+(I^(R|~k))+N[3]+2399980690&4294967295,L=R+(x<<10&4294967295|x>>>22),x=k+(R^(L|~I))+N[10]+4293915773&4294967295,k=L+(x<<15&4294967295|x>>>17),x=I+(L^(k|~R))+N[1]+2240044497&4294967295,I=k+(x<<21&4294967295|x>>>11),x=R+(k^(I|~L))+N[8]+1873313359&4294967295,R=I+(x<<6&4294967295|x>>>26),x=L+(I^(R|~k))+N[15]+4264355552&4294967295,L=R+(x<<10&4294967295|x>>>22),x=k+(R^(L|~I))+N[6]+2734768916&4294967295,k=L+(x<<15&4294967295|x>>>17),x=I+(L^(k|~R))+N[13]+1309151649&4294967295,I=k+(x<<21&4294967295|x>>>11),x=R+(k^(I|~L))+N[4]+4149444226&4294967295,R=I+(x<<6&4294967295|x>>>26),x=L+(I^(R|~k))+N[11]+3174756917&4294967295,L=R+(x<<10&4294967295|x>>>22),x=k+(R^(L|~I))+N[2]+718787259&4294967295,k=L+(x<<15&4294967295|x>>>17),x=I+(L^(k|~R))+N[9]+3951481745&4294967295,P.g[0]=P.g[0]+R&4294967295,P.g[1]=P.g[1]+(k+(x<<21&4294967295|x>>>11))&4294967295,P.g[2]=P.g[2]+k&4294967295,P.g[3]=P.g[3]+L&4294967295}i.prototype.u=function(P,R){R===void 0&&(R=P.length);for(var I=R-this.blockSize,N=this.B,k=this.h,L=0;L<R;){if(k==0)for(;L<=I;)a(this,P,L),L+=this.blockSize;if(typeof P=="string"){for(;L<R;)if(N[k++]=P.charCodeAt(L++),k==this.blockSize){a(this,N),k=0;break}}else for(;L<R;)if(N[k++]=P[L++],k==this.blockSize){a(this,N),k=0;break}}this.h=k,this.o+=R},i.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var R=1;R<P.length-8;++R)P[R]=0;var I=8*this.o;for(R=P.length-8;R<P.length;++R)P[R]=I&255,I/=256;for(this.u(P),P=Array(16),R=I=0;4>R;++R)for(var N=0;32>N;N+=8)P[I++]=this.g[R]>>>N&255;return P};function l(P,R){var I=d;return Object.prototype.hasOwnProperty.call(I,P)?I[P]:I[P]=R(P)}function c(P,R){this.h=R;for(var I=[],N=!0,k=P.length-1;0<=k;k--){var L=P[k]|0;N&&L==R||(I[k]=L,N=!1)}this.g=I}var d={};function p(P){return-128<=P&&128>P?l(P,function(R){return new c([R|0],0>R?-1:0)}):new c([P|0],0>P?-1:0)}function m(P){if(isNaN(P)||!isFinite(P))return S;if(0>P)return M(m(-P));for(var R=[],I=1,N=0;P>=I;N++)R[N]=P/I|0,I*=4294967296;return new c(R,0)}function y(P,R){if(P.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(P.charAt(0)=="-")return M(y(P.substring(1),R));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=m(Math.pow(R,8)),N=S,k=0;k<P.length;k+=8){var L=Math.min(8,P.length-k),x=parseInt(P.substring(k,k+L),R);8>L?(L=m(Math.pow(R,L)),N=N.j(L).add(m(x))):(N=N.j(I),N=N.add(m(x)))}return N}var S=p(0),A=p(1),D=p(16777216);n=c.prototype,n.m=function(){if(G(this))return-M(this).m();for(var P=0,R=1,I=0;I<this.g.length;I++){var N=this.i(I);P+=(0<=N?N:4294967296+N)*R,R*=4294967296}return P},n.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(V(this))return"0";if(G(this))return"-"+M(this).toString(P);for(var R=m(Math.pow(P,6)),I=this,N="";;){var k=F(I,R).g;I=B(I,k.j(R));var L=((0<I.g.length?I.g[0]:I.h)>>>0).toString(P);if(I=k,V(I))return L+N;for(;6>L.length;)L="0"+L;N=L+N}},n.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function V(P){if(P.h!=0)return!1;for(var R=0;R<P.g.length;R++)if(P.g[R]!=0)return!1;return!0}function G(P){return P.h==-1}n.l=function(P){return P=B(this,P),G(P)?-1:V(P)?0:1};function M(P){for(var R=P.g.length,I=[],N=0;N<R;N++)I[N]=~P.g[N];return new c(I,~P.h).add(A)}n.abs=function(){return G(this)?M(this):this},n.add=function(P){for(var R=Math.max(this.g.length,P.g.length),I=[],N=0,k=0;k<=R;k++){var L=N+(this.i(k)&65535)+(P.i(k)&65535),x=(L>>>16)+(this.i(k)>>>16)+(P.i(k)>>>16);N=x>>>16,L&=65535,x&=65535,I[k]=x<<16|L}return new c(I,I[I.length-1]&-2147483648?-1:0)};function B(P,R){return P.add(M(R))}n.j=function(P){if(V(this)||V(P))return S;if(G(this))return G(P)?M(this).j(M(P)):M(M(this).j(P));if(G(P))return M(this.j(M(P)));if(0>this.l(D)&&0>P.l(D))return m(this.m()*P.m());for(var R=this.g.length+P.g.length,I=[],N=0;N<2*R;N++)I[N]=0;for(N=0;N<this.g.length;N++)for(var k=0;k<P.g.length;k++){var L=this.i(N)>>>16,x=this.i(N)&65535,je=P.i(k)>>>16,qe=P.i(k)&65535;I[2*N+2*k]+=x*qe,H(I,2*N+2*k),I[2*N+2*k+1]+=L*qe,H(I,2*N+2*k+1),I[2*N+2*k+1]+=x*je,H(I,2*N+2*k+1),I[2*N+2*k+2]+=L*je,H(I,2*N+2*k+2)}for(N=0;N<R;N++)I[N]=I[2*N+1]<<16|I[2*N];for(N=R;N<2*R;N++)I[N]=0;return new c(I,0)};function H(P,R){for(;(P[R]&65535)!=P[R];)P[R+1]+=P[R]>>>16,P[R]&=65535,R++}function $(P,R){this.g=P,this.h=R}function F(P,R){if(V(R))throw Error("division by zero");if(V(P))return new $(S,S);if(G(P))return R=F(M(P),R),new $(M(R.g),M(R.h));if(G(R))return R=F(P,M(R)),new $(M(R.g),R.h);if(30<P.g.length){if(G(P)||G(R))throw Error("slowDivide_ only works with positive integers.");for(var I=A,N=R;0>=N.l(P);)I=re(I),N=re(N);var k=_e(I,1),L=_e(N,1);for(N=_e(N,2),I=_e(I,2);!V(N);){var x=L.add(N);0>=x.l(P)&&(k=k.add(I),L=x),N=_e(N,1),I=_e(I,1)}return R=B(P,k.j(R)),new $(k,R)}for(k=S;0<=P.l(R);){for(I=Math.max(1,Math.floor(P.m()/R.m())),N=Math.ceil(Math.log(I)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),L=m(I),x=L.j(R);G(x)||0<x.l(P);)I-=N,L=m(I),x=L.j(R);V(L)&&(L=A),k=k.add(L),P=B(P,x)}return new $(k,P)}n.A=function(P){return F(this,P).h},n.and=function(P){for(var R=Math.max(this.g.length,P.g.length),I=[],N=0;N<R;N++)I[N]=this.i(N)&P.i(N);return new c(I,this.h&P.h)},n.or=function(P){for(var R=Math.max(this.g.length,P.g.length),I=[],N=0;N<R;N++)I[N]=this.i(N)|P.i(N);return new c(I,this.h|P.h)},n.xor=function(P){for(var R=Math.max(this.g.length,P.g.length),I=[],N=0;N<R;N++)I[N]=this.i(N)^P.i(N);return new c(I,this.h^P.h)};function re(P){for(var R=P.g.length+1,I=[],N=0;N<R;N++)I[N]=P.i(N)<<1|P.i(N-1)>>>31;return new c(I,P.h)}function _e(P,R){var I=R>>5;R%=32;for(var N=P.g.length-I,k=[],L=0;L<N;L++)k[L]=0<R?P.i(L+I)>>>R|P.i(L+I+1)<<32-R:P.i(L+I);return new c(k,P.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,H1=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=m,c.fromString=y,ta=c}).apply(typeof ib<"u"?ib:typeof self<"u"?self:typeof window<"u"?window:{});var Uf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var q1,yc,G1,td,E_,W1,K1,$1;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,E){return h==Array.prototype||h==Object.prototype||(h[_]=E.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Uf=="object"&&Uf];for(var _=0;_<h.length;++_){var E=h[_];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var i=t(this);function a(h,_){if(_)e:{var E=i;h=h.split(".");for(var C=0;C<h.length-1;C++){var q=h[C];if(!(q in E))break e;E=E[q]}h=h[h.length-1],C=E[h],_=_(C),_!=C&&_!=null&&e(E,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var E=0,C=!1,q={next:function(){if(!C&&E<h.length){var Y=E++;return{value:_(Y,h[Y]),done:!1}}return C=!0,{done:!0,value:void 0}}};return q[Symbol.iterator]=function(){return q},q}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function m(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,E){return h.call.apply(h.bind,arguments)}function S(h,_,E){if(!h)throw Error();if(2<arguments.length){var C=Array.prototype.slice.call(arguments,2);return function(){var q=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(q,C),h.apply(_,q)}}return function(){return h.apply(_,arguments)}}function A(h,_,E){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:S,A.apply(null,arguments)}function D(h,_){var E=Array.prototype.slice.call(arguments,1);return function(){var C=E.slice();return C.push.apply(C,arguments),h.apply(this,C)}}function V(h,_){function E(){}E.prototype=_.prototype,h.aa=_.prototype,h.prototype=new E,h.prototype.constructor=h,h.Qb=function(C,q,Y){for(var de=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)de[Qe-2]=arguments[Qe];return _.prototype[q].apply(C,de)}}function G(h){const _=h.length;if(0<_){const E=Array(_);for(let C=0;C<_;C++)E[C]=h[C];return E}return[]}function M(h,_){for(let E=1;E<arguments.length;E++){const C=arguments[E];if(p(C)){const q=h.length||0,Y=C.length||0;h.length=q+Y;for(let de=0;de<Y;de++)h[q+de]=C[de]}else h.push(C)}}class B{constructor(_,E){this.i=_,this.j=E,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function H(h){return/^[\s\xa0]*$/.test(h)}function $(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function F(h){return F[" "](h),h}F[" "]=function(){};var re=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function _e(h,_,E){for(const C in h)_.call(E,h[C],C,h)}function P(h,_){for(const E in h)_.call(void 0,h[E],E,h)}function R(h){const _={};for(const E in h)_[E]=h[E];return _}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(h,_){let E,C;for(let q=1;q<arguments.length;q++){C=arguments[q];for(E in C)h[E]=C[E];for(let Y=0;Y<I.length;Y++)E=I[Y],Object.prototype.hasOwnProperty.call(C,E)&&(h[E]=C[E])}}function k(h){var _=1;h=h.split(":");const E=[];for(;0<_&&h.length;)E.push(h.shift()),_--;return h.length&&E.push(h.join(":")),E}function L(h){d.setTimeout(()=>{throw h},0)}function x(){var h=be;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class je{constructor(){this.h=this.g=null}add(_,E){const C=qe.get();C.set(_,E),this.h?this.h.next=C:this.g=C,this.h=C}}var qe=new B(()=>new ce,h=>h.reset());class ce{constructor(){this.next=this.g=this.h=null}set(_,E){this.h=_,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let Se,he=!1,be=new je,b=()=>{const h=d.Promise.resolve(void 0);Se=()=>{h.then(Z)}};var Z=()=>{for(var h;h=x();){try{h.h.call(h.g)}catch(E){L(E)}var _=qe;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}he=!1};function ve(){this.s=this.s,this.C=this.C}ve.prototype.s=!1,ve.prototype.ma=function(){this.s||(this.s=!0,this.N())},ve.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Q=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const E=()=>{};d.addEventListener("test",E,_),d.removeEventListener("test",E,_)}catch{}return h}();function oe(h,_){if(fe.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var E=this.type=h.type,C=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(re){e:{try{F(_.nodeName);var q=!0;break e}catch{}q=!1}q||(_=null)}}else E=="mouseover"?_=h.fromElement:E=="mouseout"&&(_=h.toElement);this.relatedTarget=_,C?(this.clientX=C.clientX!==void 0?C.clientX:C.pageX,this.clientY=C.clientY!==void 0?C.clientY:C.pageY,this.screenX=C.screenX||0,this.screenY=C.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:ne[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&oe.aa.h.call(this)}}V(oe,fe);var ne={2:"touch",3:"pen",4:"mouse"};oe.prototype.h=function(){oe.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var xe="closure_listenable_"+(1e6*Math.random()|0),ye=0;function pe(h,_,E,C,q){this.listener=h,this.proxy=null,this.src=_,this.type=E,this.capture=!!C,this.ha=q,this.key=++ye,this.da=this.fa=!1}function Re(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function wt(h){this.src=h,this.g={},this.h=0}wt.prototype.add=function(h,_,E,C,q){var Y=h.toString();h=this.g[Y],h||(h=this.g[Y]=[],this.h++);var de=Zt(h,_,C,q);return-1<de?(_=h[de],E||(_.fa=!1)):(_=new pe(_,this.src,Y,!!C,q),_.fa=E,h.push(_)),_};function Xt(h,_){var E=_.type;if(E in h.g){var C=h.g[E],q=Array.prototype.indexOf.call(C,_,void 0),Y;(Y=0<=q)&&Array.prototype.splice.call(C,q,1),Y&&(Re(_),h.g[E].length==0&&(delete h.g[E],h.h--))}}function Zt(h,_,E,C){for(var q=0;q<h.length;++q){var Y=h[q];if(!Y.da&&Y.listener==_&&Y.capture==!!E&&Y.ha==C)return q}return-1}var Dn="closure_lm_"+(1e6*Math.random()|0),ri={};function zn(h,_,E,C,q){if(Array.isArray(_)){for(var Y=0;Y<_.length;Y++)zn(h,_[Y],E,C,q);return null}return E=Ta(E),h&&h[xe]?h.K(_,E,m(C)?!!C.capture:!1,q):Bi(h,_,E,!1,C,q)}function Bi(h,_,E,C,q,Y){if(!_)throw Error("Invalid event type");var de=m(q)?!!q.capture:!!q,Qe=ai(h);if(Qe||(h[Dn]=Qe=new wt(h)),E=Qe.add(_,E,C,de,Y),E.proxy)return E;if(C=X(),E.proxy=C,C.src=h,C.listener=E,h.addEventListener)Q||(q=de),q===void 0&&(q=!1),h.addEventListener(_.toString(),C,q);else if(h.attachEvent)h.attachEvent(Ut(_.toString()),C);else if(h.addListener&&h.removeListener)h.addListener(C);else throw Error("addEventListener and attachEvent are unavailable.");return E}function X(){function h(E){return _.call(h.src,h.listener,E)}const _=_s;return h}function Ge(h,_,E,C,q){if(Array.isArray(_))for(var Y=0;Y<_.length;Y++)Ge(h,_[Y],E,C,q);else C=m(C)?!!C.capture:!!C,E=Ta(E),h&&h[xe]?(h=h.i,_=String(_).toString(),_ in h.g&&(Y=h.g[_],E=Zt(Y,E,C,q),-1<E&&(Re(Y[E]),Array.prototype.splice.call(Y,E,1),Y.length==0&&(delete h.g[_],h.h--)))):h&&(h=ai(h))&&(_=h.g[_.toString()],h=-1,_&&(h=Zt(_,E,C,q)),(E=-1<h?_[h]:null)&&kt(E))}function kt(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[xe])Xt(_.i,h);else{var E=h.type,C=h.proxy;_.removeEventListener?_.removeEventListener(E,C,h.capture):_.detachEvent?_.detachEvent(Ut(E),C):_.addListener&&_.removeListener&&_.removeListener(C),(E=ai(_))?(Xt(E,h),E.h==0&&(E.src=null,_[Dn]=null)):Re(h)}}}function Ut(h){return h in ri?ri[h]:ri[h]="on"+h}function _s(h,_){if(h.da)h=!0;else{_=new oe(_,this);var E=h.listener,C=h.ha||h.src;h.fa&&kt(h),h=E.call(C,_)}return h}function ai(h){return h=h[Dn],h instanceof wt?h:null}var un="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ta(h){return typeof h=="function"?h:(h[un]||(h[un]=function(_){return h.handleEvent(_)}),h[un])}function vt(){ve.call(this),this.i=new wt(this),this.M=this,this.F=null}V(vt,ve),vt.prototype[xe]=!0,vt.prototype.removeEventListener=function(h,_,E,C){Ge(this,h,_,E,C)};function Vt(h,_){var E,C=h.F;if(C)for(E=[];C;C=C.F)E.push(C);if(h=h.M,C=_.type||_,typeof _=="string")_=new fe(_,h);else if(_ instanceof fe)_.target=_.target||h;else{var q=_;_=new fe(C,h),N(_,q)}if(q=!0,E)for(var Y=E.length-1;0<=Y;Y--){var de=_.g=E[Y];q=ys(de,C,!0,_)&&q}if(de=_.g=h,q=ys(de,C,!0,_)&&q,q=ys(de,C,!1,_)&&q,E)for(Y=0;Y<E.length;Y++)de=_.g=E[Y],q=ys(de,C,!1,_)&&q}vt.prototype.N=function(){if(vt.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var E=h.g[_],C=0;C<E.length;C++)Re(E[C]);delete h.g[_],h.h--}}this.F=null},vt.prototype.K=function(h,_,E,C){return this.i.add(String(h),_,!1,E,C)},vt.prototype.L=function(h,_,E,C){return this.i.add(String(h),_,!0,E,C)};function ys(h,_,E,C){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var q=!0,Y=0;Y<_.length;++Y){var de=_[Y];if(de&&!de.da&&de.capture==E){var Qe=de.listener,qt=de.ha||de.src;de.fa&&Xt(h.i,de),q=Qe.call(qt,C)!==!1&&q}}return q&&!C.defaultPrevented}function dh(h,_,E){if(typeof h=="function")E&&(h=A(h,E));else if(h&&typeof h.handleEvent=="function")h=A(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function Jl(h){h.g=dh(()=>{h.g=null,h.i&&(h.i=!1,Jl(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class Sp extends ve{constructor(_,E){super(),this.m=_,this.l=E,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Jl(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sa(h){ve.call(this),this.h=h,this.g={}}V(Sa,ve);var lr=[];function vn(h){_e(h.g,function(_,E){this.g.hasOwnProperty(E)&&kt(_)},h),h.g={}}Sa.prototype.N=function(){Sa.aa.N.call(this),vn(this)},Sa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var eu=d.JSON.stringify,zi=d.JSON.parse,kn=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function tu(){}tu.prototype.h=null;function ph(h){return h.h||(h.h=h.i())}function mh(){}var Fi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ur(){fe.call(this,"d")}V(ur,fe);function Ii(){fe.call(this,"c")}V(Ii,fe);var oi={},cr=null;function Ao(){return cr=cr||new vt}oi.La="serverreachability";function nu(h){fe.call(this,oi.La,h)}V(nu,fe);function hr(h){const _=Ao();Vt(_,new nu(_))}oi.STAT_EVENT="statevent";function wo(h,_){fe.call(this,oi.STAT_EVENT,h),this.stat=_}V(wo,fe);function Pt(h){const _=Ao();Vt(_,new wo(_,h))}oi.Ma="timingevent";function gh(h,_){fe.call(this,oi.Ma,h),this.size=_}V(gh,fe);function fr(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function dr(){this.g=!0}dr.prototype.xa=function(){this.g=!1};function _h(h,_,E,C,q,Y){h.info(function(){if(h.g)if(Y)for(var de="",Qe=Y.split("&"),qt=0;qt<Qe.length;qt++){var Xe=Qe[qt].split("=");if(1<Xe.length){var tn=Xe[0];Xe=Xe[1];var Gt=tn.split("_");de=2<=Gt.length&&Gt[1]=="type"?de+(tn+"="+Xe+"&"):de+(tn+"=redacted&")}}else de=null;else de=Y;return"XMLHTTP REQ ("+C+") [attempt "+q+"]: "+_+`
`+E+`
`+de})}function yh(h,_,E,C,q,Y,de){h.info(function(){return"XMLHTTP RESP ("+C+") [ attempt "+q+"]: "+_+`
`+E+`
`+Y+" "+de})}function pr(h,_,E,C){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+Jt(h,E)+(C?" "+C:"")})}function Hi(h,_){h.info(function(){return"TIMEOUT: "+_})}dr.prototype.info=function(){};function Jt(h,_){if(!h.g)return _;if(!_)return null;try{var E=JSON.parse(_);if(E){for(h=0;h<E.length;h++)if(Array.isArray(E[h])){var C=E[h];if(!(2>C.length)){var q=C[1];if(Array.isArray(q)&&!(1>q.length)){var Y=q[0];if(Y!="noop"&&Y!="stop"&&Y!="close")for(var de=1;de<q.length;de++)q[de]=""}}}}return eu(E)}catch{return _}}var Ht={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vs={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ba;function Co(){}V(Co,tu),Co.prototype.g=function(){return new XMLHttpRequest},Co.prototype.i=function(){return{}},ba=new Co;function qi(h,_,E,C){this.j=h,this.i=_,this.l=E,this.R=C||1,this.U=new Sa(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new iu}function iu(){this.i=null,this.g="",this.h=!1}var mr={},Aa={};function Ni(h,_,E){h.L=1,h.v=Ra(Ct(_)),h.m=E,h.P=!0,Es(h,null)}function Es(h,_){h.F=Date.now(),Et(h),h.A=Ct(h.v);var E=h.A,C=h.R;Array.isArray(C)||(C=[String(C)]),bs(E.i,"t",C),h.C=0,E=h.j.J,h.h=new iu,h.g=Dh(h.j,E?_:null,!h.m),0<h.O&&(h.M=new Sp(A(h.Y,h,h.g),h.O)),_=h.U,E=h.g,C=h.ca;var q="readystatechange";Array.isArray(q)||(q&&(lr[0]=q.toString()),q=lr);for(var Y=0;Y<q.length;Y++){var de=zn(E,q[Y],C||_.handleEvent,!1,_.h||_);if(!de)break;_.g[de.key]=de}_=h.H?R(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),hr(),_h(h.i,h.u,h.A,h.l,h.R,h.m)}qi.prototype.ca=function(h){h=h.target;const _=this.M;_&&fi(h)==3?_.j():this.Y(h)},qi.prototype.Y=function(h){try{if(h==this.g)e:{const Gt=fi(this.g);var _=this.g.Ba();const Rs=this.g.Z();if(!(3>Gt)&&(Gt!=3||this.g&&(this.h.h||this.g.oa()||Ah(this.g)))){this.J||Gt!=4||_==7||(_==8||0>=Rs?hr(3):hr(2)),Ro(this);var E=this.g.Z();this.X=E;t:if(gr(this)){var C=Ah(this.g);h="";var q=C.length,Y=fi(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fn(this),Kn(this);var de="";break t}this.h.i=new d.TextDecoder}for(_=0;_<q;_++)this.h.h=!0,h+=this.h.i.decode(C[_],{stream:!(Y&&_==q-1)});C.length=0,this.h.g+=h,this.C=0,de=this.h.g}else de=this.g.oa();if(this.o=E==200,yh(this.i,this.u,this.A,this.l,this.R,Gt,E),this.o){if(this.T&&!this.K){t:{if(this.g){var Qe,qt=this.g;if((Qe=qt.g?qt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(Qe)){var Xe=Qe;break t}}Xe=null}if(E=Xe)pr(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$n(this,E);else{this.o=!1,this.s=3,Pt(12),Fn(this),Kn(this);break e}}if(this.P){E=!0;let cn;for(;!this.J&&this.C<de.length;)if(cn=_r(this,de),cn==Aa){Gt==4&&(this.s=4,Pt(14),E=!1),pr(this.i,this.l,null,"[Incomplete Response]");break}else if(cn==mr){this.s=4,Pt(15),pr(this.i,this.l,de,"[Invalid Chunk]"),E=!1;break}else pr(this.i,this.l,cn,null),$n(this,cn);if(gr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Gt!=4||de.length!=0||this.h.h||(this.s=1,Pt(16),E=!1),this.o=this.o&&E,!E)pr(this.i,this.l,de,"[Invalid Chunked Response]"),Fn(this),Kn(this);else if(0<de.length&&!this.W){this.W=!0;var tn=this.j;tn.g==this&&tn.ba&&!tn.M&&(tn.j.info("Great, no buffering proxy detected. Bytes received: "+de.length),Pa(tn),tn.M=!0,Pt(11))}}else pr(this.i,this.l,de,null),$n(this,de);Gt==4&&Fn(this),this.o&&!this.J&&(Gt==4?Nh(this.j,this):(this.o=!1,Et(this)))}else Ip(this.g),E==400&&0<de.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),Fn(this),Kn(this)}}}catch{}finally{}};function gr(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function _r(h,_){var E=h.C,C=_.indexOf(`
`,E);return C==-1?Aa:(E=Number(_.substring(E,C)),isNaN(E)?mr:(C+=1,C+E>_.length?Aa:(_=_.slice(C,C+E),h.C=C+E,_)))}qi.prototype.cancel=function(){this.J=!0,Fn(this)};function Et(h){h.S=Date.now()+h.I,su(h,h.I)}function su(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=fr(A(h.ba,h),_)}function Ro(h){h.B&&(d.clearTimeout(h.B),h.B=null)}qi.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Hi(this.i,this.A),this.L!=2&&(hr(),Pt(17)),Fn(this),this.s=2,Kn(this)):su(this,this.S-h)};function Kn(h){h.j.G==0||h.J||Nh(h.j,h)}function Fn(h){Ro(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,vn(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function $n(h,_){try{var E=h.j;if(E.G!=0&&(E.g==h||yr(E.h,h))){if(!h.K&&yr(E.h,h)&&E.G==3){try{var C=E.Da.g.parse(_)}catch{C=null}if(Array.isArray(C)&&C.length==3){var q=C;if(q[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<h.F)Uo(E),Mo(E);else break e;mu(E),Pt(18)}}else E.za=q[1],0<E.za-E.T&&37500>q[2]&&E.F&&E.v==0&&!E.C&&(E.C=fr(A(E.Za,E),6e3));if(1>=vh(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Cs(E,11)}else if((h.K||E.g==h)&&Uo(E),!H(_))for(q=E.Da.g.parse(_),_=0;_<q.length;_++){let Xe=q[_];if(E.T=Xe[0],Xe=Xe[1],E.G==2)if(Xe[0]=="c"){E.K=Xe[1],E.ia=Xe[2];const tn=Xe[3];tn!=null&&(E.la=tn,E.j.info("VER="+E.la));const Gt=Xe[4];Gt!=null&&(E.Aa=Gt,E.j.info("SVER="+E.Aa));const Rs=Xe[5];Rs!=null&&typeof Rs=="number"&&0<Rs&&(C=1.5*Rs,E.L=C,E.j.info("backChannelRequestTimeoutMs_="+C)),C=E;const cn=h.g;if(cn){const Xi=cn.g?cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xi){var Y=C.h;Y.g||Xi.indexOf("spdy")==-1&&Xi.indexOf("quic")==-1&&Xi.indexOf("h2")==-1||(Y.j=Y.l,Y.g=new Set,Y.h&&(vr(Y,Y.h),Y.h=null))}if(C.D){const _u=cn.g?cn.g.getResponseHeader("X-HTTP-Session-Id"):null;_u&&(C.ya=_u,nt(C.I,C.D,_u))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-h.F,E.j.info("Handshake RTT: "+E.R+"ms")),C=E;var de=h;if(C.qa=Oh(C,C.J?C.ia:null,C.W),de.K){li(C.h,de);var Qe=de,qt=C.L;qt&&(Qe.I=qt),Qe.B&&(Ro(Qe),Et(Qe)),C.g=de}else Rh(C);0<E.i.length&&Lo(E)}else Xe[0]!="stop"&&Xe[0]!="close"||Cs(E,7);else E.G==3&&(Xe[0]=="stop"||Xe[0]=="close"?Xe[0]=="stop"?Cs(E,7):du(E):Xe[0]!="noop"&&E.l&&E.l.ta(Xe),E.v=0)}}hr(4)}catch{}}var bp=class{constructor(h,_){this.g=h,this.map=_}};function ru(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function au(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function vh(h){return h.h?1:h.g?h.g.size:0}function yr(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function vr(h,_){h.g?h.g.add(_):h.h=_}function li(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}ru.prototype.cancel=function(){if(this.i=Pn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Pn(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const E of h.g.values())_=_.concat(E.D);return _}return G(h.i)}function Eh(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],E=h.length,C=0;C<E;C++)_.push(h[C]);return _}_=[],E=0;for(C in h)_[E++]=h[C];return _}function Ap(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var E=0;E<h;E++)_.push(E);return _}_=[],E=0;for(const C in h)_[E++]=C;return _}}}function wa(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var E=Ap(h),C=Eh(h),q=C.length,Y=0;Y<q;Y++)_.call(void 0,C[Y],E&&E[Y],h)}var ou=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Io(h,_){if(h){h=h.split("&");for(var E=0;E<h.length;E++){var C=h[E].indexOf("="),q=null;if(0<=C){var Y=h[E].substring(0,C);q=h[E].substring(C+1)}else Y=h[E];_(Y,q?decodeURIComponent(q.replace(/\+/g," ")):"")}}}function Ts(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Ts){this.h=h.h,Er(this,h.j),this.o=h.o,this.g=h.g,Ca(this,h.s),this.l=h.l;var _=h.i,E=new Gi;E.i=_.i,_.g&&(E.g=new Map(_.g),E.h=_.h),No(this,E),this.m=h.m}else h&&(_=String(h).match(ou))?(this.h=!1,Er(this,_[1]||"",!0),this.o=Tr(_[2]||""),this.g=Tr(_[3]||"",!0),Ca(this,_[4]),this.l=Tr(_[5]||"",!0),No(this,_[6]||"",!0),this.m=Tr(_[7]||"")):(this.h=!1,this.i=new Gi(null,this.h))}Ts.prototype.toString=function(){var h=[],_=this.j;_&&h.push(ui(_,lu,!0),":");var E=this.g;return(E||_=="file")&&(h.push("//"),(_=this.o)&&h.push(ui(_,lu,!0),"@"),h.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&h.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&h.push("/"),h.push(ui(E,E.charAt(0)=="/"?uu:Th,!0))),(E=this.i.toString())&&h.push("?",E),(E=this.m)&&h.push("#",ui(E,Rp)),h.join("")};function Ct(h){return new Ts(h)}function Er(h,_,E){h.j=E?Tr(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Ca(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function No(h,_,E){_ instanceof Gi?(h.i=_,cu(h.i,h.h)):(E||(_=ui(_,Cp)),h.i=new Gi(_,h.h))}function nt(h,_,E){h.i.set(_,E)}function Ra(h){return nt(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Tr(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function ui(h,_,E){return typeof h=="string"?(h=encodeURI(h).replace(_,wp),E&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function wp(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var lu=/[#\/\?@]/g,Th=/[#\?:]/g,uu=/[#\?]/g,Cp=/[#\?@]/g,Rp=/#/g;function Gi(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function ci(h){h.g||(h.g=new Map,h.h=0,h.i&&Io(h.i,function(_,E){h.add(decodeURIComponent(_.replace(/\+/g," ")),E)}))}n=Gi.prototype,n.add=function(h,_){ci(this),this.i=null,h=As(this,h);var E=this.g.get(h);return E||this.g.set(h,E=[]),E.push(_),this.h+=1,this};function xo(h,_){ci(h),_=As(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function Ss(h,_){return ci(h),_=As(h,_),h.g.has(_)}n.forEach=function(h,_){ci(this),this.g.forEach(function(E,C){E.forEach(function(q){h.call(_,q,C,this)},this)},this)},n.na=function(){ci(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),E=[];for(let C=0;C<_.length;C++){const q=h[C];for(let Y=0;Y<q.length;Y++)E.push(_[C])}return E},n.V=function(h){ci(this);let _=[];if(typeof h=="string")Ss(this,h)&&(_=_.concat(this.g.get(As(this,h))));else{h=Array.from(this.g.values());for(let E=0;E<h.length;E++)_=_.concat(h[E])}return _},n.set=function(h,_){return ci(this),this.i=null,h=As(this,h),Ss(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function bs(h,_,E){xo(h,_),0<E.length&&(h.i=null,h.g.set(As(h,_),G(E)),h.h+=E.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var E=0;E<_.length;E++){var C=_[E];const Y=encodeURIComponent(String(C)),de=this.V(C);for(C=0;C<de.length;C++){var q=Y;de[C]!==""&&(q+="="+encodeURIComponent(String(de[C]))),h.push(q)}}return this.i=h.join("&")};function As(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function cu(h,_){_&&!h.j&&(ci(h),h.i=null,h.g.forEach(function(E,C){var q=C.toLowerCase();C!=q&&(xo(this,C),bs(this,q,E))},h)),h.j=_}function Sh(h,_){const E=new dr;if(d.Image){const C=new Image;C.onload=D(hi,E,"TestLoadImage: loaded",!0,_,C),C.onerror=D(hi,E,"TestLoadImage: error",!1,_,C),C.onabort=D(hi,E,"TestLoadImage: abort",!1,_,C),C.ontimeout=D(hi,E,"TestLoadImage: timeout",!1,_,C),d.setTimeout(function(){C.ontimeout&&C.ontimeout()},1e4),C.src=h}else _(!1)}function Ia(h,_){const E=new dr,C=new AbortController,q=setTimeout(()=>{C.abort(),hi(E,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:C.signal}).then(Y=>{clearTimeout(q),Y.ok?hi(E,"TestPingServer: ok",!0,_):hi(E,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(q),hi(E,"TestPingServer: error",!1,_)})}function hi(h,_,E,C,q){try{q&&(q.onload=null,q.onerror=null,q.onabort=null,q.ontimeout=null),C(E)}catch{}}function Na(){this.g=new kn}function Wi(h,_,E){const C=E||"";try{wa(h,function(q,Y){let de=q;m(q)&&(de=eu(q)),_.push(C+Y+"="+encodeURIComponent(de))})}catch(q){throw _.push(C+"type="+encodeURIComponent("_badmap")),q}}function Sr(h){this.l=h.Ub||null,this.j=h.eb||!1}V(Sr,tu),Sr.prototype.g=function(){return new ws(this.l,this.j)},Sr.prototype.i=function(h){return function(){return h}}({});function ws(h,_){vt.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(ws,vt),n=ws.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,$i(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ki(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,$i(this)),this.g&&(this.readyState=3,$i(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hu(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function hu(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Ki(this):$i(this),this.readyState==3&&hu(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Ki(this))},n.Qa=function(h){this.g&&(this.response=h,Ki(this))},n.ga=function(){this.g&&Ki(this)};function Ki(h){h.readyState=4,h.l=null,h.j=null,h.v=null,$i(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var E=_.next();!E.done;)E=E.value,h.push(E[0]+": "+E[1]),E=_.next();return h.join(`\r
`)};function $i(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(ws.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function fu(h){let _="";return _e(h,function(E,C){_+=C,_+=":",_+=E,_+=`\r
`}),_}function en(h,_,E){e:{for(C in E){var C=!1;break e}C=!0}C||(E=fu(E),typeof h=="string"?E!=null&&encodeURIComponent(String(E)):nt(h,_,E))}function rt(h){vt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(rt,vt);var Oo=/^https?$/i,xa=["POST","PUT"];n=rt.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,E,C){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ba.g(),this.v=this.o?ph(this.o):ph(ba),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(Y){bh(this,Y);return}if(h=E||"",E=new Map(this.headers),C)if(Object.getPrototypeOf(C)===Object.prototype)for(var q in C)E.set(q,C[q]);else if(typeof C.keys=="function"&&typeof C.get=="function")for(const Y of C.keys())E.set(Y,C.get(Y));else throw Error("Unknown input type for opt_headers: "+String(C));C=Array.from(E.keys()).find(Y=>Y.toLowerCase()=="content-type"),q=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(xa,_,void 0))||C||q||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Y,de]of E)this.g.setRequestHeader(Y,de);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Oa(this),this.u=!0,this.g.send(h),this.u=!1}catch(Y){bh(this,Y)}};function bh(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,Do(h),Yi(h)}function Do(h){h.A||(h.A=!0,Vt(h,"complete"),Vt(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Vt(this,"complete"),Vt(this,"abort"),Yi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yi(this,!0)),rt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ko(this):this.bb())},n.bb=function(){ko(this)};function ko(h){if(h.h&&typeof c<"u"&&(!h.v[1]||fi(h)!=4||h.Z()!=2)){if(h.u&&fi(h)==4)dh(h.Ea,0,h);else if(Vt(h,"readystatechange"),fi(h)==4){h.h=!1;try{const de=h.Z();e:switch(de){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var E;if(!(E=_)){var C;if(C=de===0){var q=String(h.D).match(ou)[1]||null;!q&&d.self&&d.self.location&&(q=d.self.location.protocol.slice(0,-1)),C=!Oo.test(q?q.toLowerCase():"")}E=C}if(E)Vt(h,"complete"),Vt(h,"success");else{h.m=6;try{var Y=2<fi(h)?h.g.statusText:""}catch{Y=""}h.l=Y+" ["+h.Z()+"]",Do(h)}}finally{Yi(h)}}}}function Yi(h,_){if(h.g){Oa(h);const E=h.g,C=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||Vt(h,"ready");try{E.onreadystatechange=C}catch{}}}function Oa(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function fi(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<fi(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),zi(_)}};function Ah(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function Ip(h){const _={};h=(h.g&&2<=fi(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let C=0;C<h.length;C++){if(H(h[C]))continue;var E=k(h[C]);const q=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const Y=_[q]||[];_[q]=Y,Y.push(E)}P(_,function(C){return C.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Da(h,_,E){return E&&E.internalChannelParams&&E.internalChannelParams[h]||_}function Po(h){this.Aa=0,this.i=[],this.j=new dr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Da("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Da("baseRetryDelayMs",5e3,h),this.cb=Da("retryDelaySeedMs",1e4,h),this.Wa=Da("forwardChannelMaxRetries",2,h),this.wa=Da("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new ru(h&&h.concurrentRequestLimit),this.Da=new Na,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Po.prototype,n.la=8,n.G=1,n.connect=function(h,_,E,C){Pt(0),this.W=h,this.H=_||{},E&&C!==void 0&&(this.H.OSID=E,this.H.OAID=C),this.F=this.X,this.I=Oh(this,null,this.W),Lo(this)};function du(h){if(wh(h),h.G==3){var _=h.U++,E=Ct(h.I);if(nt(E,"SID",h.K),nt(E,"RID",_),nt(E,"TYPE","terminate"),ka(h,E),_=new qi(h,h.j,_),_.L=2,_.v=Ra(Ct(E)),E=!1,d.navigator&&d.navigator.sendBeacon)try{E=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!E&&d.Image&&(new Image().src=_.v,E=!0),E||(_.g=Dh(_.j,null),_.g.ea(_.v)),_.F=Date.now(),Et(_)}xh(h)}function Mo(h){h.g&&(Pa(h),h.g.cancel(),h.g=null)}function wh(h){Mo(h),h.u&&(d.clearTimeout(h.u),h.u=null),Uo(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function Lo(h){if(!au(h.h)&&!h.s){h.s=!0;var _=h.Ga;Se||b(),he||(Se(),he=!0),be.add(_,h),h.B=0}}function Np(h,_){return vh(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=fr(A(h.Ga,h,_),gu(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const q=new qi(this,this.j,h);let Y=this.o;if(this.S&&(Y?(Y=R(Y),N(Y,this.S)):Y=this.S),this.m!==null||this.O||(q.H=Y,Y=null),this.P)e:{for(var _=0,E=0;E<this.i.length;E++){t:{var C=this.i[E];if("__data__"in C.map&&(C=C.map.__data__,typeof C=="string")){C=C.length;break t}C=void 0}if(C===void 0)break;if(_+=C,4096<_){_=E;break e}if(_===4096||E===this.i.length-1){_=E+1;break e}}_=1e3}else _=1e3;_=Ch(this,q,_),E=Ct(this.I),nt(E,"RID",h),nt(E,"CVER",22),this.D&&nt(E,"X-HTTP-Session-Id",this.D),ka(this,E),Y&&(this.O?_="headers="+encodeURIComponent(String(fu(Y)))+"&"+_:this.m&&en(E,this.m,Y)),vr(this.h,q),this.Ua&&nt(E,"TYPE","init"),this.P?(nt(E,"$req",_),nt(E,"SID","null"),q.T=!0,Ni(q,E,null)):Ni(q,E,_),this.G=2}}else this.G==3&&(h?pu(this,h):this.i.length==0||au(this.h)||pu(this))};function pu(h,_){var E;_?E=_.l:E=h.U++;const C=Ct(h.I);nt(C,"SID",h.K),nt(C,"RID",E),nt(C,"AID",h.T),ka(h,C),h.m&&h.o&&en(C,h.m,h.o),E=new qi(h,h.j,E,h.B+1),h.m===null&&(E.H=h.o),_&&(h.i=_.D.concat(h.i)),_=Ch(h,E,1e3),E.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),vr(h.h,E),Ni(E,C,_)}function ka(h,_){h.H&&_e(h.H,function(E,C){nt(_,C,E)}),h.l&&wa({},function(E,C){nt(_,C,E)})}function Ch(h,_,E){E=Math.min(h.i.length,E);var C=h.l?A(h.l.Na,h.l,h):null;e:{var q=h.i;let Y=-1;for(;;){const de=["count="+E];Y==-1?0<E?(Y=q[0].g,de.push("ofs="+Y)):Y=0:de.push("ofs="+Y);let Qe=!0;for(let qt=0;qt<E;qt++){let Xe=q[qt].g;const tn=q[qt].map;if(Xe-=Y,0>Xe)Y=Math.max(0,q[qt].g-100),Qe=!1;else try{Wi(tn,de,"req"+Xe+"_")}catch{C&&C(tn)}}if(Qe){C=de.join("&");break e}}}return h=h.i.splice(0,E),_.D=h,C}function Rh(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;Se||b(),he||(Se(),he=!0),be.add(_,h),h.v=0}}function mu(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=fr(A(h.Fa,h),gu(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,Ih(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=fr(A(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),Mo(this),Ih(this))};function Pa(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function Ih(h){h.g=new qi(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=Ct(h.qa);nt(_,"RID","rpc"),nt(_,"SID",h.K),nt(_,"AID",h.T),nt(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&nt(_,"TO",h.ja),nt(_,"TYPE","xmlhttp"),ka(h,_),h.m&&h.o&&en(_,h.m,h.o),h.L&&(h.g.I=h.L);var E=h.g;h=h.ia,E.L=1,E.v=Ra(Ct(_)),E.m=null,E.P=!0,Es(E,h)}n.Za=function(){this.C!=null&&(this.C=null,Mo(this),mu(this),Pt(19))};function Uo(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function Nh(h,_){var E=null;if(h.g==_){Uo(h),Pa(h),h.g=null;var C=2}else if(yr(h.h,_))E=_.D,li(h.h,_),C=1;else return;if(h.G!=0){if(_.o)if(C==1){E=_.m?_.m.length:0,_=Date.now()-_.F;var q=h.B;C=Ao(),Vt(C,new gh(C,E)),Lo(h)}else Rh(h);else if(q=_.s,q==3||q==0&&0<_.X||!(C==1&&Np(h,_)||C==2&&mu(h)))switch(E&&0<E.length&&(_=h.h,_.i=_.i.concat(E)),q){case 1:Cs(h,5);break;case 4:Cs(h,10);break;case 3:Cs(h,6);break;default:Cs(h,2)}}}function gu(h,_){let E=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(E*=2),E*_}function Cs(h,_){if(h.j.info("Error code "+_),_==2){var E=A(h.fb,h),C=h.Xa;const q=!C;C=new Ts(C||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Er(C,"https"),Ra(C),q?Sh(C.toString(),E):Ia(C.toString(),E)}else Pt(2);h.G=0,h.l&&h.l.sa(_),xh(h),wh(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function xh(h){if(h.G=0,h.ka=[],h.l){const _=Pn(h.h);(_.length!=0||h.i.length!=0)&&(M(h.ka,_),M(h.ka,h.i),h.h.i.length=0,G(h.i),h.i.length=0),h.l.ra()}}function Oh(h,_,E){var C=E instanceof Ts?Ct(E):new Ts(E);if(C.g!="")_&&(C.g=_+"."+C.g),Ca(C,C.s);else{var q=d.location;C=q.protocol,_=_?_+"."+q.hostname:q.hostname,q=+q.port;var Y=new Ts(null);C&&Er(Y,C),_&&(Y.g=_),q&&Ca(Y,q),E&&(Y.l=E),C=Y}return E=h.D,_=h.ya,E&&_&&nt(C,E,_),nt(C,"VER",h.la),ka(h,C),C}function Dh(h,_,E){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new rt(new Sr({eb:E})):new rt(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function kh(){}n=kh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Vo(){}Vo.prototype.g=function(h,_){return new Mn(h,_)};function Mn(h,_){vt.call(this),this.g=new Po(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!H(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!H(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Qi(this)}V(Mn,vt),Mn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Mn.prototype.close=function(){du(this.g)},Mn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var E={};E.__data__=h,h=E}else this.u&&(E={},E.__data__=eu(h),h=E);_.i.push(new bp(_.Ya++,h)),_.G==3&&Lo(_)},Mn.prototype.N=function(){this.g.l=null,delete this.j,du(this.g),delete this.g,Mn.aa.N.call(this)};function Ph(h){ur.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const E in _){h=E;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}V(Ph,ur);function Mh(){Ii.call(this),this.status=1}V(Mh,Ii);function Qi(h){this.g=h}V(Qi,kh),Qi.prototype.ua=function(){Vt(this.g,"a")},Qi.prototype.ta=function(h){Vt(this.g,new Ph(h))},Qi.prototype.sa=function(h){Vt(this.g,new Mh)},Qi.prototype.ra=function(){Vt(this.g,"b")},Vo.prototype.createWebChannel=Vo.prototype.g,Mn.prototype.send=Mn.prototype.o,Mn.prototype.open=Mn.prototype.m,Mn.prototype.close=Mn.prototype.close,$1=function(){return new Vo},K1=function(){return Ao()},W1=oi,E_={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ht.NO_ERROR=0,Ht.TIMEOUT=8,Ht.HTTP_ERROR=6,td=Ht,vs.COMPLETE="complete",G1=vs,mh.EventType=Fi,Fi.OPEN="a",Fi.CLOSE="b",Fi.ERROR="c",Fi.MESSAGE="d",vt.prototype.listen=vt.prototype.K,yc=mh,rt.prototype.listenOnce=rt.prototype.L,rt.prototype.getLastError=rt.prototype.Ka,rt.prototype.getLastErrorCode=rt.prototype.Ba,rt.prototype.getStatus=rt.prototype.Z,rt.prototype.getResponseJson=rt.prototype.Oa,rt.prototype.getResponseText=rt.prototype.oa,rt.prototype.send=rt.prototype.ea,rt.prototype.setWithCredentials=rt.prototype.Ha,q1=rt}).apply(typeof Uf<"u"?Uf:typeof self<"u"?self:typeof window<"u"?window:{});const sb="@firebase/firestore",rb="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let $l="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=new Fd("@firebase/firestore");function gl(){return po.logLevel}function Ee(n,...e){if(po.logLevel<=He.DEBUG){const t=e.map(jy);po.debug(`Firestore (${$l}): ${n}`,...t)}}function nr(n,...e){if(po.logLevel<=He.ERROR){const t=e.map(jy);po.error(`Firestore (${$l}): ${n}`,...t)}}function kl(n,...e){if(po.logLevel<=He.WARN){const t=e.map(jy);po.warn(`Firestore (${$l}): ${n}`,...t)}}function jy(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ke(n="Unexpected state"){const e=`FIRESTORE (${$l}) INTERNAL ASSERTION FAILED: `+n;throw nr(e),new Error(e)}function ot(n,e){n||ke()}function Le(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ie extends gs{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class XM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(An.UNAUTHENTICATED))}shutdown(){}}class ZM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class JM{constructor(e){this.t=e,this.currentUser=An.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ot(this.o===void 0);let i=this.i;const a=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new na;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new na,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},d=p=>{Ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(Ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new na)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(Ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ot(typeof i.accessToken=="string"),new Y1(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ot(e===null||typeof e=="string"),new An(e)}}class eL{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=An.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class tL{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new eL(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(An.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ab{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nL{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,jn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){ot(this.o===void 0);const i=l=>{l.error!=null&&Ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.R;return this.R=l.token,Ee("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const a=l=>{Ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?a(l):Ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new ab(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ot(typeof t.token=="string"),this.R=t.token,new ab(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iL(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const a=iL(40);for(let l=0;l<a.length;++l)i.length<20&&a[l]<t&&(i+=e.charAt(a[l]%62))}return i}}function $e(n,e){return n<e?-1:n>e?1:0}function Pl(n,e,t){return n.length===e.length&&n.every((i,a)=>t(i,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob=-62135596800,lb=1e6;class Yt{static now(){return Yt.fromMillis(Date.now())}static fromDate(e){return Yt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*lb);return new Yt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Ie(le.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Ie(le.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ob)throw new Ie(le.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ie(le.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/lb}_compareTo(e){return this.seconds===e.seconds?$e(this.nanoseconds,e.nanoseconds):$e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-ob;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ub="__name__";class ss{constructor(e,t,i){t===void 0?t=0:t>e.length&&ke(),i===void 0?i=e.length-t:i>e.length-t&&ke(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ss.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ss?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let a=0;a<i;a++){const l=ss.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Math.sign(e.length-t.length)}static compareSegments(e,t){const i=ss.isNumericId(e),a=ss.isNumericId(t);return i&&!a?-1:!i&&a?1:i&&a?ss.extractNumericId(e).compare(ss.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ta.fromString(e.substring(4,e.length-2))}}class xt extends ss{construct(e,t,i){return new xt(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new Ie(le.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(a=>a.length>0))}return new xt(t)}static emptyPath(){return new xt([])}}const sL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _n extends ss{construct(e,t,i){return new _n(e,t,i)}static isValidIdentifier(e){return sL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ub}static keyField(){return new _n([ub])}static fromServerFormat(e){const t=[];let i="",a=0;const l=()=>{if(i.length===0)throw new Ie(le.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new Ie(le.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new Ie(le.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(i+=d,a++):(l(),a++)}if(l(),c)throw new Ie(le.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _n(t)}static emptyPath(){return new _n([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Bc=-1;function rL(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,a=Pe.fromTimestamp(i===1e9?new Yt(t+1,0):new Yt(t,i));return new aa(a,Ne.empty(),e)}function aL(n){return new aa(n.readTime,n.key,Bc)}class aa{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new aa(Pe.min(),Ne.empty(),Bc)}static max(){return new aa(Pe.max(),Ne.empty(),Bc)}}function oL(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Ne.comparator(n.documentKey,e.documentKey),t!==0?t:$e(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yl(n){if(n.code!==le.FAILED_PRECONDITION||n.message!==lL)throw n;Ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ke(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new se((i,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof se?t:se.resolve(t)}catch(t){return se.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):se.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):se.reject(t)}static resolve(e){return new se((t,i)=>{t(e)})}static reject(e){return new se((t,i)=>{i(e)})}static waitFor(e){return new se((t,i)=>{let a=0,l=0,c=!1;e.forEach(d=>{++a,d.next(()=>{++l,c&&l===a&&t()},p=>i(p))}),c=!0,l===a&&t()})}static or(e){let t=se.resolve(!1);for(const i of e)t=t.next(a=>a?se.resolve(a):i());return t}static forEach(e,t){const i=[];return e.forEach((a,l)=>{i.push(t.call(this,a,l))}),this.waitFor(i)}static mapArray(e,t){return new se((i,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const m=p;t(e[m]).next(y=>{c[m]=y,++d,d===l&&i(c)},y=>a(y))}})}static doWhile(e,t){return new se((i,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):i()};l()})}}function cL(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ql(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Zd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.oe(i),this._e=i=>t.writeSequenceNumber(i))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Zd.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=-1;function Jd(n){return n==null}function wd(n){return n===0&&1/n==-1/0}function hL(n){return typeof n=="number"&&Number.isInteger(n)&&!wd(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1="";function fL(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=cb(e)),e=dL(n.get(t),e);return cb(e)}function dL(n,e){let t=e;const i=n.length;for(let a=0;a<i;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case X1:t+="";break;default:t+=l}}return t}function cb(n){return n+X1+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function va(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Z1(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,t){this.comparator=e,this.root=t||mn.EMPTY}insert(e,t){return new At(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,mn.BLACK,null,null))}remove(e){return new At(this.comparator,this.root.remove(e,this.comparator).copy(null,null,mn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const a=this.comparator(e,i.key);if(a===0)return t+i.left.size;a<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vf(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vf(this.root,e,this.comparator,!0)}}class Vf{constructor(e,t,i,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class mn{constructor(e,t,i,a,l){this.key=e,this.value=t,this.color=i??mn.RED,this.left=a??mn.EMPTY,this.right=l??mn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,a,l){return new mn(e??this.key,t??this.value,i??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let a=this;const l=i(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,i),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,i)),a.fixUp()}removeMin(){if(this.left.isEmpty())return mn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return mn.EMPTY;i=a.right.min(),a=a.copy(i.key,i.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ke();const e=this.left.check();if(e!==this.right.check())throw ke();return e+(this.isRed()?0:1)}}mn.EMPTY=null,mn.RED=!0,mn.BLACK=!1;mn.EMPTY=new class{constructor(){this.size=0}get key(){throw ke()}get value(){throw ke()}get color(){throw ke()}get left(){throw ke()}get right(){throw ke()}copy(e,t,i,a,l){return this}insert(e,t,i){return new mn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.comparator=e,this.data=new At(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const a=i.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new fb(this.data.getIterator())}getIteratorFrom(e){return new fb(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Qt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=i.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Qt(this.comparator);return t.data=e,t}}class fb{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.fields=e,e.sort(_n.comparator)}static empty(){return new ti([])}unionWith(e){let t=new Qt(_n.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new ti(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Pl(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class J1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new J1("Invalid base64 string: "+l):l}}(e);return new yn(t)}static fromUint8Array(e){const t=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new yn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let a=0;a<t.length;a++)i[a]=t.charCodeAt(a);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yn.EMPTY_BYTE_STRING=new yn("");const pL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function oa(n){if(ot(!!n),typeof n=="string"){let e=0;const t=pL.exec(n);if(ot(!!t),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Lt(n.seconds),nanos:Lt(n.nanos)}}function Lt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function la(n){return typeof n=="string"?yn.fromBase64String(n):yn.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC="server_timestamp",tC="__type__",nC="__previous_value__",iC="__local_write_time__";function zy(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[tC])===null||t===void 0?void 0:t.stringValue)===eC}function ep(n){const e=n.mapValue.fields[nC];return zy(e)?ep(e):e}function zc(n){const e=oa(n.mapValue.fields[iC].timestampValue);return new Yt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mL{constructor(e,t,i,a,l,c,d,p,m){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=m}}const Cd="(default)";class Fc{constructor(e,t){this.projectId=e,this.database=t||Cd}static empty(){return new Fc("","")}get isDefaultDatabase(){return this.database===Cd}isEqual(e){return e instanceof Fc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC="__type__",gL="__max__",jf={mapValue:{}},rC="__vector__",Rd="value";function ua(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?zy(n)?4:yL(n)?9007199254740991:_L(n)?10:11:ke()}function ps(n,e){if(n===e)return!0;const t=ua(n);if(t!==ua(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return zc(n).isEqual(zc(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=oa(a.timestampValue),d=oa(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(a,l){return la(a.bytesValue).isEqual(la(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(a,l){return Lt(a.geoPointValue.latitude)===Lt(l.geoPointValue.latitude)&&Lt(a.geoPointValue.longitude)===Lt(l.geoPointValue.longitude)}(n,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return Lt(a.integerValue)===Lt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=Lt(a.doubleValue),d=Lt(l.doubleValue);return c===d?wd(c)===wd(d):isNaN(c)&&isNaN(d)}return!1}(n,e);case 9:return Pl(n.arrayValue.values||[],e.arrayValue.values||[],ps);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(hb(c)!==hb(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!ps(c[p],d[p])))return!1;return!0}(n,e);default:return ke()}}function Hc(n,e){return(n.values||[]).find(t=>ps(t,e))!==void 0}function Ml(n,e){if(n===e)return 0;const t=ua(n),i=ua(e);if(t!==i)return $e(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return $e(n.booleanValue,e.booleanValue);case 2:return function(l,c){const d=Lt(l.integerValue||l.doubleValue),p=Lt(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return db(n.timestampValue,e.timestampValue);case 4:return db(zc(n),zc(e));case 5:return $e(n.stringValue,e.stringValue);case 6:return function(l,c){const d=la(l),p=la(c);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let m=0;m<d.length&&m<p.length;m++){const y=$e(d[m],p[m]);if(y!==0)return y}return $e(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,c){const d=$e(Lt(l.latitude),Lt(c.latitude));return d!==0?d:$e(Lt(l.longitude),Lt(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return pb(n.arrayValue,e.arrayValue);case 10:return function(l,c){var d,p,m,y;const S=l.fields||{},A=c.fields||{},D=(d=S[Rd])===null||d===void 0?void 0:d.arrayValue,V=(p=A[Rd])===null||p===void 0?void 0:p.arrayValue,G=$e(((m=D==null?void 0:D.values)===null||m===void 0?void 0:m.length)||0,((y=V==null?void 0:V.values)===null||y===void 0?void 0:y.length)||0);return G!==0?G:pb(D,V)}(n.mapValue,e.mapValue);case 11:return function(l,c){if(l===jf.mapValue&&c===jf.mapValue)return 0;if(l===jf.mapValue)return 1;if(c===jf.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),m=c.fields||{},y=Object.keys(m);p.sort(),y.sort();for(let S=0;S<p.length&&S<y.length;++S){const A=$e(p[S],y[S]);if(A!==0)return A;const D=Ml(d[p[S]],m[y[S]]);if(D!==0)return D}return $e(p.length,y.length)}(n.mapValue,e.mapValue);default:throw ke()}}function db(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return $e(n,e);const t=oa(n),i=oa(e),a=$e(t.seconds,i.seconds);return a!==0?a:$e(t.nanos,i.nanos)}function pb(n,e){const t=n.values||[],i=e.values||[];for(let a=0;a<t.length&&a<i.length;++a){const l=Ml(t[a],i[a]);if(l)return l}return $e(t.length,i.length)}function Ll(n){return T_(n)}function T_(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=oa(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return la(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Ne.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",a=!0;for(const l of t.values||[])a?a=!1:i+=",",i+=T_(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of i)l?l=!1:a+=",",a+=`${c}:${T_(t.fields[c])}`;return a+"}"}(n.mapValue):ke()}function nd(n){switch(ua(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ep(n);return e?16+nd(e):16;case 5:return 2*n.stringValue.length;case 6:return la(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((a,l)=>a+nd(l),0)}(n.arrayValue);case 10:case 11:return function(i){let a=0;return va(i.fields,(l,c)=>{a+=l.length+nd(c)}),a}(n.mapValue);default:throw ke()}}function S_(n){return!!n&&"integerValue"in n}function Fy(n){return!!n&&"arrayValue"in n}function mb(n){return!!n&&"nullValue"in n}function gb(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function id(n){return!!n&&"mapValue"in n}function _L(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[sC])===null||t===void 0?void 0:t.stringValue)===rC}function Rc(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return va(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Rc(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Rc(n.arrayValue.values[t]);return e}return Object.assign({},n)}function yL(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===gL}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.value=e}static empty(){return new Wn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!id(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Rc(t)}setAll(e){let t=_n.emptyPath(),i={},a=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,a),i={},a=[],t=d.popLast()}c?i[d.lastSegment()]=Rc(c):a.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,a)}delete(e){const t=this.field(e.popLast());id(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ps(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let a=t.mapValue.fields[e.get(i)];id(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,i){va(t,(a,l)=>e[a]=l);for(const a of i)delete e[a]}clone(){return new Wn(Rc(this.value))}}function aC(n){const e=[];return va(n.fields,(t,i)=>{const a=new _n([t]);if(id(i)){const l=aC(i.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new ti(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,t,i,a,l,c,d){this.key=e,this.documentType=t,this.version=i,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new Rn(e,0,Pe.min(),Pe.min(),Pe.min(),Wn.empty(),0)}static newFoundDocument(e,t,i,a){return new Rn(e,1,t,Pe.min(),i,a,0)}static newNoDocument(e,t){return new Rn(e,2,t,Pe.min(),Pe.min(),Wn.empty(),0)}static newUnknownDocument(e,t){return new Rn(e,3,t,Pe.min(),Pe.min(),Wn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Rn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Rn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Id{constructor(e,t){this.position=e,this.inclusive=t}}function _b(n,e,t){let i=0;for(let a=0;a<n.position.length;a++){const l=e[a],c=n.position[a];if(l.field.isKeyField()?i=Ne.comparator(Ne.fromName(c.referenceValue),t.key):i=Ml(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function yb(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ps(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Nd{constructor(e,t="asc"){this.field=e,this.dir=t}}function vL(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class oC{}class $t extends oC{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new TL(e,t,i):t==="array-contains"?new AL(e,i):t==="in"?new wL(e,i):t==="not-in"?new CL(e,i):t==="array-contains-any"?new RL(e,i):new $t(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new SL(e,i):new bL(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ml(t,this.value)):t!==null&&ua(this.value)===ua(t)&&this.matchesComparison(Ml(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ke()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ms extends oC{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new ms(e,t)}matches(e){return lC(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function lC(n){return n.op==="and"}function uC(n){return EL(n)&&lC(n)}function EL(n){for(const e of n.filters)if(e instanceof ms)return!1;return!0}function b_(n){if(n instanceof $t)return n.field.canonicalString()+n.op.toString()+Ll(n.value);if(uC(n))return n.filters.map(e=>b_(e)).join(",");{const e=n.filters.map(t=>b_(t)).join(",");return`${n.op}(${e})`}}function cC(n,e){return n instanceof $t?function(i,a){return a instanceof $t&&i.op===a.op&&i.field.isEqual(a.field)&&ps(i.value,a.value)}(n,e):n instanceof ms?function(i,a){return a instanceof ms&&i.op===a.op&&i.filters.length===a.filters.length?i.filters.reduce((l,c,d)=>l&&cC(c,a.filters[d]),!0):!1}(n,e):void ke()}function hC(n){return n instanceof $t?function(t){return`${t.field.canonicalString()} ${t.op} ${Ll(t.value)}`}(n):n instanceof ms?function(t){return t.op.toString()+" {"+t.getFilters().map(hC).join(" ,")+"}"}(n):"Filter"}class TL extends $t{constructor(e,t,i){super(e,t,i),this.key=Ne.fromName(i.referenceValue)}matches(e){const t=Ne.comparator(e.key,this.key);return this.matchesComparison(t)}}class SL extends $t{constructor(e,t){super(e,"in",t),this.keys=fC("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class bL extends $t{constructor(e,t){super(e,"not-in",t),this.keys=fC("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function fC(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>Ne.fromName(i.referenceValue))}class AL extends $t{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Fy(t)&&Hc(t.arrayValue,this.value)}}class wL extends $t{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Hc(this.value.arrayValue,t)}}class CL extends $t{constructor(e,t){super(e,"not-in",t)}matches(e){if(Hc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Hc(this.value.arrayValue,t)}}class RL extends $t{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Fy(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Hc(this.value.arrayValue,i))}}/**
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
 */class IL{constructor(e,t=null,i=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.le=null}}function vb(n,e=null,t=[],i=[],a=null,l=null,c=null){return new IL(n,e,t,i,a,l,c)}function Hy(n){const e=Le(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>b_(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Jd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Ll(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Ll(i)).join(",")),e.le=t}return e.le}function qy(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!vL(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!cC(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!yb(n.startAt,e.startAt)&&yb(n.endAt,e.endAt)}function A_(n){return Ne.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,t=null,i=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function NL(n,e,t,i,a,l,c,d){return new tp(n,e,t,i,a,l,c,d)}function Gy(n){return new tp(n)}function Eb(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function xL(n){return n.collectionGroup!==null}function Ic(n){const e=Le(n);if(e.he===null){e.he=[];const t=new Set;for(const l of e.explicitOrderBy)e.he.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Qt(_n.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(m=>{m.isInequality()&&(d=d.add(m.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.he.push(new Nd(l,i))}),t.has(_n.keyField().canonicalString())||e.he.push(new Nd(_n.keyField(),i))}return e.he}function hs(n){const e=Le(n);return e.Pe||(e.Pe=OL(e,Ic(n))),e.Pe}function OL(n,e){if(n.limitType==="F")return vb(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new Nd(a.field,l)});const t=n.endAt?new Id(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Id(n.startAt.position,n.startAt.inclusive):null;return vb(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function w_(n,e,t){return new tp(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function np(n,e){return qy(hs(n),hs(e))&&n.limitType===e.limitType}function dC(n){return`${Hy(hs(n))}|lt:${n.limitType}`}function _l(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(a=>hC(a)).join(", ")}]`),Jd(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(a=>Ll(a)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(a=>Ll(a)).join(",")),`Target(${i})`}(hs(n))}; limitType=${n.limitType})`}function ip(n,e){return e.isFoundDocument()&&function(i,a){const l=a.key.path;return i.collectionGroup!==null?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):Ne.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,a){for(const l of Ic(i))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,a){for(const l of i.filters)if(!l.matches(a))return!1;return!0}(n,e)&&function(i,a){return!(i.startAt&&!function(c,d,p){const m=_b(c,d,p);return c.inclusive?m<=0:m<0}(i.startAt,Ic(i),a)||i.endAt&&!function(c,d,p){const m=_b(c,d,p);return c.inclusive?m>=0:m>0}(i.endAt,Ic(i),a))}(n,e)}function DL(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function pC(n){return(e,t)=>{let i=!1;for(const a of Ic(n)){const l=kL(a,e,t);if(l!==0)return l;i=i||a.field.isKeyField()}return 0}}function kL(n,e,t){const i=n.field.isKeyField()?Ne.comparator(e.key,t.key):function(l,c,d){const p=c.data.field(l),m=d.data.field(l);return p!==null&&m!==null?Ml(p,m):ke()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return ke()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[a,l]of i)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),a=this.inner[i];if(a===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return i.length===1?delete this.inner[t]:i.splice(a,1),this.innerSize--,!0;return!1}forEach(e){va(this.inner,(t,i)=>{for(const[a,l]of i)e(a,l)})}isEmpty(){return Z1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PL=new At(Ne.comparator);function ir(){return PL}const mC=new At(Ne.comparator);function vc(...n){let e=mC;for(const t of n)e=e.insert(t.key,t);return e}function gC(n){let e=mC;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function so(){return Nc()}function _C(){return Nc()}function Nc(){return new So(n=>n.toString(),(n,e)=>n.isEqual(e))}const ML=new At(Ne.comparator),LL=new Qt(Ne.comparator);function We(...n){let e=LL;for(const t of n)e=e.add(t);return e}const UL=new Qt($e);function VL(){return UL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wd(e)?"-0":e}}function yC(n){return{integerValue:""+n}}function jL(n,e){return hL(e)?yC(e):Wy(n,e)}/**
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
 */class sp{constructor(){this._=void 0}}function BL(n,e,t){return n instanceof xd?function(a,l){const c={fields:{[tC]:{stringValue:eC},[iC]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&zy(l)&&(l=ep(l)),l&&(c.fields[nC]=l),{mapValue:c}}(t,e):n instanceof Ul?EC(n,e):n instanceof qc?TC(n,e):function(a,l){const c=vC(a,l),d=Tb(c)+Tb(a.Ie);return S_(c)&&S_(a.Ie)?yC(d):Wy(a.serializer,d)}(n,e)}function zL(n,e,t){return n instanceof Ul?EC(n,e):n instanceof qc?TC(n,e):t}function vC(n,e){return n instanceof Od?function(i){return S_(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class xd extends sp{}class Ul extends sp{constructor(e){super(),this.elements=e}}function EC(n,e){const t=SC(e);for(const i of n.elements)t.some(a=>ps(a,i))||t.push(i);return{arrayValue:{values:t}}}class qc extends sp{constructor(e){super(),this.elements=e}}function TC(n,e){let t=SC(e);for(const i of n.elements)t=t.filter(a=>!ps(a,i));return{arrayValue:{values:t}}}class Od extends sp{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Tb(n){return Lt(n.integerValue||n.doubleValue)}function SC(n){return Fy(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(e,t){this.field=e,this.transform=t}}function HL(n,e){return n.field.isEqual(e.field)&&function(i,a){return i instanceof Ul&&a instanceof Ul||i instanceof qc&&a instanceof qc?Pl(i.elements,a.elements,ps):i instanceof Od&&a instanceof Od?ps(i.Ie,a.Ie):i instanceof xd&&a instanceof xd}(n.transform,e.transform)}class qL{constructor(e,t){this.version=e,this.transformResults=t}}class fs{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new fs}static exists(e){return new fs(void 0,e)}static updateTime(e){return new fs(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sd(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class rp{}function bC(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new wC(n.key,fs.none()):new sh(n.key,n.data,fs.none());{const t=n.data,i=Wn.empty();let a=new Qt(_n.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),a=a.add(l)}return new Ea(n.key,i,new ti(a.toArray()),fs.none())}}function GL(n,e,t){n instanceof sh?function(a,l,c){const d=a.value.clone(),p=bb(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Ea?function(a,l,c){if(!sd(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=bb(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(AC(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(n,e,t):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function xc(n,e,t,i){return n instanceof sh?function(l,c,d,p){if(!sd(l.precondition,c))return d;const m=l.value.clone(),y=Ab(l.fieldTransforms,p,c);return m.setAll(y),c.convertToFoundDocument(c.version,m).setHasLocalMutations(),null}(n,e,t,i):n instanceof Ea?function(l,c,d,p){if(!sd(l.precondition,c))return d;const m=Ab(l.fieldTransforms,p,c),y=c.data;return y.setAll(AC(l)),y.setAll(m),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(S=>S.field))}(n,e,t,i):function(l,c,d){return sd(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(n,e,t)}function WL(n,e){let t=null;for(const i of n.fieldTransforms){const a=e.data.field(i.field),l=vC(i.transform,a||null);l!=null&&(t===null&&(t=Wn.empty()),t.set(i.field,l))}return t||null}function Sb(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,a){return i===void 0&&a===void 0||!(!i||!a)&&Pl(i,a,(l,c)=>HL(l,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class sh extends rp{constructor(e,t,i,a=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Ea extends rp{constructor(e,t,i,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function AC(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function bb(n,e,t){const i=new Map;ot(n.length===t.length);for(let a=0;a<t.length;a++){const l=n[a],c=l.transform,d=e.data.field(l.field);i.set(l.field,zL(c,d,t[a]))}return i}function Ab(n,e,t){const i=new Map;for(const a of n){const l=a.transform,c=t.data.field(a.field);i.set(a.field,BL(l,c,e))}return i}class wC extends rp{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class KL extends rp{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $L{constructor(e,t,i,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=a}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&GL(l,e,i[a])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=xc(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=xc(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=_C();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const p=bC(c,d);p!==null&&i.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(Pe.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),We())}isEqual(e){return this.batchId===e.batchId&&Pl(this.mutations,e.mutations,(t,i)=>Sb(t,i))&&Pl(this.baseMutations,e.baseMutations,(t,i)=>Sb(t,i))}}class Ky{constructor(e,t,i,a){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=a}static from(e,t,i){ot(e.mutations.length===i.length);let a=function(){return ML}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,i[c].version);return new Ky(e,t,i,a)}}/**
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
 */class YL{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class QL{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ft,Je;function XL(n){switch(n){case le.OK:return ke();case le.CANCELLED:case le.UNKNOWN:case le.DEADLINE_EXCEEDED:case le.RESOURCE_EXHAUSTED:case le.INTERNAL:case le.UNAVAILABLE:case le.UNAUTHENTICATED:return!1;case le.INVALID_ARGUMENT:case le.NOT_FOUND:case le.ALREADY_EXISTS:case le.PERMISSION_DENIED:case le.FAILED_PRECONDITION:case le.ABORTED:case le.OUT_OF_RANGE:case le.UNIMPLEMENTED:case le.DATA_LOSS:return!0;default:return ke()}}function CC(n){if(n===void 0)return nr("GRPC error has no .code"),le.UNKNOWN;switch(n){case Ft.OK:return le.OK;case Ft.CANCELLED:return le.CANCELLED;case Ft.UNKNOWN:return le.UNKNOWN;case Ft.DEADLINE_EXCEEDED:return le.DEADLINE_EXCEEDED;case Ft.RESOURCE_EXHAUSTED:return le.RESOURCE_EXHAUSTED;case Ft.INTERNAL:return le.INTERNAL;case Ft.UNAVAILABLE:return le.UNAVAILABLE;case Ft.UNAUTHENTICATED:return le.UNAUTHENTICATED;case Ft.INVALID_ARGUMENT:return le.INVALID_ARGUMENT;case Ft.NOT_FOUND:return le.NOT_FOUND;case Ft.ALREADY_EXISTS:return le.ALREADY_EXISTS;case Ft.PERMISSION_DENIED:return le.PERMISSION_DENIED;case Ft.FAILED_PRECONDITION:return le.FAILED_PRECONDITION;case Ft.ABORTED:return le.ABORTED;case Ft.OUT_OF_RANGE:return le.OUT_OF_RANGE;case Ft.UNIMPLEMENTED:return le.UNIMPLEMENTED;case Ft.DATA_LOSS:return le.DATA_LOSS;default:return ke()}}(Je=Ft||(Ft={}))[Je.OK=0]="OK",Je[Je.CANCELLED=1]="CANCELLED",Je[Je.UNKNOWN=2]="UNKNOWN",Je[Je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Je[Je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Je[Je.NOT_FOUND=5]="NOT_FOUND",Je[Je.ALREADY_EXISTS=6]="ALREADY_EXISTS",Je[Je.PERMISSION_DENIED=7]="PERMISSION_DENIED",Je[Je.UNAUTHENTICATED=16]="UNAUTHENTICATED",Je[Je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Je[Je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Je[Je.ABORTED=10]="ABORTED",Je[Je.OUT_OF_RANGE=11]="OUT_OF_RANGE",Je[Je.UNIMPLEMENTED=12]="UNIMPLEMENTED",Je[Je.INTERNAL=13]="INTERNAL",Je[Je.UNAVAILABLE=14]="UNAVAILABLE",Je[Je.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ZL(){return new TextEncoder}/**
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
 */const JL=new ta([4294967295,4294967295],0);function wb(n){const e=ZL().encode(n),t=new H1;return t.update(e),new Uint8Array(t.digest())}function Cb(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new ta([t,i],0),new ta([a,l],0)]}class $y{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ec(`Invalid padding: ${t}`);if(i<0)throw new Ec(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ec(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ec(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=ta.fromNumber(this.Ee)}Ae(e,t,i){let a=e.add(t.multiply(ta.fromNumber(i)));return a.compare(JL)===1&&(a=new ta([a.getBits(0),a.getBits(1)],0)),a.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=wb(e),[i,a]=Cb(t);for(let l=0;l<this.hashCount;l++){const c=this.Ae(i,a,l);if(!this.Re(c))return!1}return!0}static create(e,t,i){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new $y(l,a,t);return i.forEach(d=>c.insert(d)),c}insert(e){if(this.Ee===0)return;const t=wb(e),[i,a]=Cb(t);for(let l=0;l<this.hashCount;l++){const c=this.Ae(i,a,l);this.Ve(c)}}Ve(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ec extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,t,i,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const a=new Map;return a.set(e,rh.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new ap(Pe.min(),a,new At($e),ir(),We())}}class rh{constructor(e,t,i,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new rh(i,t,We(),We(),We())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,t,i,a){this.me=e,this.removedTargetIds=t,this.key=i,this.fe=a}}class RC{constructor(e,t){this.targetId=e,this.ge=t}}class IC{constructor(e,t,i=yn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=a}}class Rb{constructor(){this.pe=0,this.ye=Ib(),this.we=yn.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=We(),t=We(),i=We();return this.ye.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:i=i.add(a);break;default:ke()}}),new rh(this.we,this.be,e,t,i)}Me(){this.Se=!1,this.ye=Ib()}xe(e,t){this.Se=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,ot(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class eU{constructor(e){this.ke=e,this.qe=new Map,this.Qe=ir(),this.$e=Bf(),this.Ke=Bf(),this.Ue=new At($e)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const i=this.He(t);switch(e.state){case 0:this.Je(t)&&i.Ce(e.resumeToken);break;case 1:i.Be(),i.De||i.Me(),i.Ce(e.resumeToken);break;case 2:i.Be(),i.De||this.removeTarget(t);break;case 3:this.Je(t)&&(i.Le(),i.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),i.Ce(e.resumeToken));break;default:ke()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((i,a)=>{this.Je(a)&&t(a)})}Ze(e){const t=e.targetId,i=e.ge.count,a=this.Xe(t);if(a){const l=a.target;if(A_(l))if(i===0){const c=new Ne(l.path);this.ze(t,c,Rn.newNoDocument(c,Pe.min()))}else ot(i===1);else{const c=this.et(t);if(c!==i){const d=this.tt(e),p=d?this.nt(d,e,c):1;if(p!==0){this.Ye(t);const m=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(t,m)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=la(i).toUint8Array()}catch(p){if(p instanceof J1)return kl("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new $y(c,a,l)}catch(p){return kl(p instanceof Ec?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Ee===0?null:d}nt(e,t,i){return t.ge.count===i-this.st(e,t.targetId)?0:2}st(e,t){const i=this.ke.getRemoteKeysForTarget(t);let a=0;return i.forEach(l=>{const c=this.ke.it(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.ze(t,l,null),a++)}),a}ot(e){const t=new Map;this.qe.forEach((l,c)=>{const d=this.Xe(c);if(d){if(l.current&&A_(d.target)){const p=new Ne(d.target.path);this._t(p).has(c)||this.ut(c,p)||this.ze(c,p,Rn.newNoDocument(p,e))}l.ve&&(t.set(c,l.Fe()),l.Me())}});let i=We();this.Ke.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const m=this.Xe(p);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.Qe.forEach((l,c)=>c.setReadTime(e));const a=new ap(e,t,this.Ue,this.Qe,i);return this.Qe=ir(),this.$e=Bf(),this.Ke=Bf(),this.Ue=new At($e),a}Ge(e,t){if(!this.Je(e))return;const i=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,i),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,i){if(!this.Je(e))return;const a=this.He(e);this.ut(e,t)?a.xe(t,1):a.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),i&&(this.Qe=this.Qe.insert(t,i))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new Rb,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new Qt($e),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Qt($e),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||Ee("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Rb),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function Bf(){return new At(Ne.comparator)}function Ib(){return new At(Ne.comparator)}const tU={asc:"ASCENDING",desc:"DESCENDING"},nU={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iU={and:"AND",or:"OR"};class sU{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function C_(n,e){return n.useProto3Json||Jd(e)?e:{value:e}}function Dd(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function NC(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function rU(n,e){return Dd(n,e.toTimestamp())}function ds(n){return ot(!!n),Pe.fromTimestamp(function(t){const i=oa(t);return new Yt(i.seconds,i.nanos)}(n))}function Yy(n,e){return R_(n,e).canonicalString()}function R_(n,e){const t=function(a){return new xt(["projects",a.projectId,"databases",a.database])}(n).child("documents");return e===void 0?t:t.child(e)}function xC(n){const e=xt.fromString(n);return ot(MC(e)),e}function I_(n,e){return Yy(n.databaseId,e.path)}function jg(n,e){const t=xC(e);if(t.get(1)!==n.databaseId.projectId)throw new Ie(le.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Ie(le.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Ne(DC(t))}function OC(n,e){return Yy(n.databaseId,e)}function aU(n){const e=xC(n);return e.length===4?xt.emptyPath():DC(e)}function N_(n){return new xt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function DC(n){return ot(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Nb(n,e,t){return{name:I_(n,e),fields:t.value.mapValue.fields}}function oU(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:ke()}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(m,y){return m.useProto3Json?(ot(y===void 0||typeof y=="string"),yn.fromBase64String(y||"")):(ot(y===void 0||y instanceof Buffer||y instanceof Uint8Array),yn.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(m){const y=m.code===void 0?le.UNKNOWN:CC(m.code);return new Ie(y,m.message||"")}(c);t=new IC(i,a,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const a=jg(n,i.document.name),l=ds(i.document.updateTime),c=i.document.createTime?ds(i.document.createTime):Pe.min(),d=new Wn({mapValue:{fields:i.document.fields}}),p=Rn.newFoundDocument(a,l,c,d),m=i.targetIds||[],y=i.removedTargetIds||[];t=new rd(m,y,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const a=jg(n,i.document),l=i.readTime?ds(i.readTime):Pe.min(),c=Rn.newNoDocument(a,l),d=i.removedTargetIds||[];t=new rd([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const a=jg(n,i.document),l=i.removedTargetIds||[];t=new rd([],l,a,null)}else{if(!("filter"in e))return ke();{e.filter;const i=e.filter;i.targetId;const{count:a=0,unchangedNames:l}=i,c=new QL(a,l),d=i.targetId;t=new RC(d,c)}}return t}function lU(n,e){let t;if(e instanceof sh)t={update:Nb(n,e.key,e.value)};else if(e instanceof wC)t={delete:I_(n,e.key)};else if(e instanceof Ea)t={update:Nb(n,e.key,e.data),updateMask:_U(e.fieldMask)};else{if(!(e instanceof KL))return ke();t={verify:I_(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,c){const d=c.transform;if(d instanceof xd)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Ul)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof qc)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Od)return{fieldPath:c.field.canonicalString(),increment:d.Ie};throw ke()}(0,i))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:rU(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ke()}(n,e.precondition)),t}function uU(n,e){return n&&n.length>0?(ot(e!==void 0),n.map(t=>function(a,l){let c=a.updateTime?ds(a.updateTime):ds(l);return c.isEqual(Pe.min())&&(c=ds(l)),new qL(c,a.transformResults||[])}(t,e))):[]}function cU(n,e){return{documents:[OC(n,e.path)]}}function hU(n,e){const t={structuredQuery:{}},i=e.path;let a;e.collectionGroup!==null?(a=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=OC(n,a);const l=function(m){if(m.length!==0)return PC(ms.create(m,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(m){if(m.length!==0)return m.map(y=>function(A){return{field:yl(A.field),direction:pU(A.dir)}}(y))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=C_(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{ht:t,parent:a}}function fU(n){let e=aU(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let a=null;if(i>0){ot(i===1);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let l=[];t.where&&(l=function(S){const A=kC(S);return A instanceof ms&&uC(A)?A.getFilters():[A]}(t.where));let c=[];t.orderBy&&(c=function(S){return S.map(A=>function(V){return new Nd(vl(V.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(A))}(t.orderBy));let d=null;t.limit&&(d=function(S){let A;return A=typeof S=="object"?S.value:S,Jd(A)?null:A}(t.limit));let p=null;t.startAt&&(p=function(S){const A=!!S.before,D=S.values||[];return new Id(D,A)}(t.startAt));let m=null;return t.endAt&&(m=function(S){const A=!S.before,D=S.values||[];return new Id(D,A)}(t.endAt)),NL(e,a,c,l,d,"F",p,m)}function dU(n,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ke()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function kC(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=vl(t.unaryFilter.field);return $t.create(i,"==",{doubleValue:NaN});case"IS_NULL":const a=vl(t.unaryFilter.field);return $t.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=vl(t.unaryFilter.field);return $t.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=vl(t.unaryFilter.field);return $t.create(c,"!=",{nullValue:"NULL_VALUE"});default:return ke()}}(n):n.fieldFilter!==void 0?function(t){return $t.create(vl(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ke()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ms.create(t.compositeFilter.filters.map(i=>kC(i)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return ke()}}(t.compositeFilter.op))}(n):ke()}function pU(n){return tU[n]}function mU(n){return nU[n]}function gU(n){return iU[n]}function yl(n){return{fieldPath:n.canonicalString()}}function vl(n){return _n.fromServerFormat(n.fieldPath)}function PC(n){return n instanceof $t?function(t){if(t.op==="=="){if(gb(t.value))return{unaryFilter:{field:yl(t.field),op:"IS_NAN"}};if(mb(t.value))return{unaryFilter:{field:yl(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(gb(t.value))return{unaryFilter:{field:yl(t.field),op:"IS_NOT_NAN"}};if(mb(t.value))return{unaryFilter:{field:yl(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yl(t.field),op:mU(t.op),value:t.value}}}(n):n instanceof ms?function(t){const i=t.getFilters().map(a=>PC(a));return i.length===1?i[0]:{compositeFilter:{op:gU(t.op),filters:i}}}(n):ke()}function _U(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function MC(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,t,i,a,l=Pe.min(),c=Pe.min(),d=yn.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Xr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yU{constructor(e){this.Tt=e}}function vU(n){const e=fU({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?w_(e,e.limit,"L"):e}/**
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
 */class EU{constructor(){this.Tn=new TU}addToCollectionParentIndex(e,t){return this.Tn.add(t),se.resolve()}getCollectionParents(e,t){return se.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return se.resolve()}deleteFieldIndex(e,t){return se.resolve()}deleteAllFieldIndexes(e){return se.resolve()}createTargetIndexes(e,t){return se.resolve()}getDocumentsMatchingTarget(e,t){return se.resolve(null)}getIndexType(e,t){return se.resolve(0)}getFieldIndexes(e,t){return se.resolve([])}getNextCollectionGroupToUpdate(e){return se.resolve(null)}getMinOffset(e,t){return se.resolve(aa.min())}getMinOffsetFromCollectionGroup(e,t){return se.resolve(aa.min())}updateCollectionGroup(e,t,i){return se.resolve()}updateIndexEntries(e,t){return se.resolve()}}class TU{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),a=this.index[t]||new Qt(xt.comparator),l=!a.has(i);return this.index[t]=a.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),a=this.index[t];return a&&a.has(i)}getEntries(e){return(this.index[e]||new Qt(xt.comparator)).toArray()}}/**
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
 */const xb={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},LC=41943040;class Gn{static withCacheSize(e){return new Gn(e,Gn.DEFAULT_COLLECTION_PERCENTILE,Gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gn.DEFAULT_COLLECTION_PERCENTILE=10,Gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Gn.DEFAULT=new Gn(LC,Gn.DEFAULT_COLLECTION_PERCENTILE,Gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Gn.DISABLED=new Gn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new Vl(0)}static Un(){return new Vl(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob="LruGarbageCollector",SU=1048576;function Db([n,e],[t,i]){const a=$e(n,t);return a===0?$e(e,i):a}class bU{constructor(e){this.Hn=e,this.buffer=new Qt(Db),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Db(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class AU{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){Ee(Ob,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ql(t)?Ee(Ob,"Ignoring IndexedDB error during garbage collection: ",t):await Yl(t)}await this.er(3e5)})}}class wU{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return se.resolve(Zd.ae);const i=new bU(t);return this.tr.forEachTarget(e,a=>i.Zn(a.sequenceNumber)).next(()=>this.tr.rr(e,a=>i.Zn(a))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.tr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(Ee("LruGarbageCollector","Garbage collection skipped; disabled"),se.resolve(xb)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(Ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),xb):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let i,a,l,c,d,p,m;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(S=>(S>this.params.maximumSequenceNumbersToCollect?(Ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),a=this.params.maximumSequenceNumbersToCollect):a=S,c=Date.now(),this.nthSequenceNumber(e,a))).next(S=>(i=S,d=Date.now(),this.removeTargets(e,i,t))).next(S=>(l=S,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(S=>(m=Date.now(),gl()<=He.DEBUG&&Ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${S} documents in `+(m-p)+`ms
Total Duration: ${m-y}ms`),se.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:S})))}}function CU(n,e){return new wU(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RU{constructor(){this.changes=new So(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Rn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?se.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class IU{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NU{constructor(e,t,i,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=a}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(i=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(i!==null&&xc(i.mutation,a,ti.empty(),Yt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,We()).next(()=>i))}getLocalViewOfDocuments(e,t,i=We()){const a=so();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,i).next(l=>{let c=vc();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const i=so();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,We()))}populateOverlays(e,t,i){const a=[];return i.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,i,a){let l=ir();const c=Nc(),d=function(){return Nc()}();return t.forEach((p,m)=>{const y=i.get(m.key);a.has(m.key)&&(y===void 0||y.mutation instanceof Ea)?l=l.insert(m.key,m):y!==void 0?(c.set(m.key,y.mutation.getFieldMask()),xc(y.mutation,m,y.mutation.getFieldMask(),Yt.now())):c.set(m.key,ti.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((m,y)=>c.set(m,y)),t.forEach((m,y)=>{var S;return d.set(m,new IU(y,(S=c.get(m))!==null&&S!==void 0?S:null))}),d))}recalculateAndSaveOverlays(e,t){const i=Nc();let a=new At((c,d)=>c-d),l=We();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(p=>{const m=t.get(p);if(m===null)return;let y=i.get(p)||ti.empty();y=d.applyToLocalView(m,y),i.set(p,y);const S=(a.get(d.batchId)||We()).add(p);a=a.insert(d.batchId,S)})}).next(()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),m=p.key,y=p.value,S=_C();y.forEach(A=>{if(!l.has(A)){const D=bC(t.get(A),i.get(A));D!==null&&S.set(A,D),l=l.add(A)}}),c.push(this.documentOverlayCache.saveOverlays(e,m,S))}return se.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,a){return function(c){return Ne.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):xL(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,a):this.getDocumentsMatchingCollectionQuery(e,t,i,a)}getNextDocuments(e,t,i,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,a-l.size):se.resolve(so());let d=Bc,p=l;return c.next(m=>se.forEach(m,(y,S)=>(d<S.largestBatchId&&(d=S.largestBatchId),l.get(y)?se.resolve():this.remoteDocumentCache.getEntry(e,y).next(A=>{p=p.insert(y,A)}))).next(()=>this.populateOverlays(e,m,l)).next(()=>this.computeViews(e,p,m,We())).next(y=>({batchId:d,changes:gC(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ne(t)).next(i=>{let a=vc();return i.isFoundDocument()&&(a=a.insert(i.key,i)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,i,a){const l=t.collectionGroup;let c=vc();return this.indexManager.getCollectionParents(e,l).next(d=>se.forEach(d,p=>{const m=function(S,A){return new tp(A,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,m,i,a).next(y=>{y.forEach((S,A)=>{c=c.insert(S,A)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,i,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,a))).next(c=>{l.forEach((p,m)=>{const y=m.getKey();c.get(y)===null&&(c=c.insert(y,Rn.newInvalidDocument(y)))});let d=vc();return c.forEach((p,m)=>{const y=l.get(p);y!==void 0&&xc(y.mutation,m,ti.empty(),Yt.now()),ip(t,m)&&(d=d.insert(p,m))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xU{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return se.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:ds(a.createTime)}}(t)),se.resolve()}getNamedQuery(e,t){return se.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(a){return{name:a.name,query:vU(a.bundledQuery),readTime:ds(a.readTime)}}(t)),se.resolve()}}/**
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
 */class OU{constructor(){this.overlays=new At(Ne.comparator),this.Rr=new Map}getOverlay(e,t){return se.resolve(this.overlays.get(t))}getOverlays(e,t){const i=so();return se.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&i.set(a,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((a,l)=>{this.Et(e,t,l)}),se.resolve()}removeOverlaysForBatchId(e,t,i){const a=this.Rr.get(i);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.Rr.delete(i)),se.resolve()}getOverlaysForCollection(e,t,i){const a=so(),l=t.length+1,c=new Ne(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,m=p.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===l&&p.largestBatchId>i&&a.set(p.getKey(),p)}return se.resolve(a)}getOverlaysForCollectionGroup(e,t,i,a){let l=new At((m,y)=>m-y);const c=this.overlays.getIterator();for(;c.hasNext();){const m=c.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>i){let y=l.get(m.largestBatchId);y===null&&(y=so(),l=l.insert(m.largestBatchId,y)),y.set(m.getKey(),m)}}const d=so(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((m,y)=>d.set(m,y)),!(d.size()>=a)););return se.resolve(d)}Et(e,t,i){const a=this.overlays.get(i.key);if(a!==null){const c=this.Rr.get(a.largestBatchId).delete(i.key);this.Rr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new YL(t,i));let l=this.Rr.get(t);l===void 0&&(l=We(),this.Rr.set(t,l)),this.Rr.set(t,l.add(i.key))}}/**
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
 */class Qy{constructor(){this.Vr=new Qt(on.mr),this.gr=new Qt(on.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const i=new on(e,t);this.Vr=this.Vr.add(i),this.gr=this.gr.add(i)}yr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.wr(new on(e,t))}br(e,t){e.forEach(i=>this.removeReference(i,t))}Sr(e){const t=new Ne(new xt([])),i=new on(t,e),a=new on(t,e+1),l=[];return this.gr.forEachInRange([i,a],c=>{this.wr(c),l.push(c.key)}),l}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new Ne(new xt([])),i=new on(t,e),a=new on(t,e+1);let l=We();return this.gr.forEachInRange([i,a],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new on(e,0),i=this.Vr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class on{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return Ne.comparator(e.key,t.key)||$e(e.Cr,t.Cr)}static pr(e,t){return $e(e.Cr,t.Cr)||Ne.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kU{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new Qt(on.mr)}checkEmpty(e){return se.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,a){const l=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new $L(l,t,i,a);this.mutationQueue.push(c);for(const d of a)this.Mr=this.Mr.add(new on(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return se.resolve(c)}lookupMutationBatch(e,t){return se.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,a=this.Nr(i),l=a<0?0:a;return se.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return se.resolve(this.mutationQueue.length===0?By:this.Fr-1)}getAllMutationBatches(e){return se.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new on(t,0),a=new on(t,Number.POSITIVE_INFINITY),l=[];return this.Mr.forEachInRange([i,a],c=>{const d=this.Or(c.Cr);l.push(d)}),se.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Qt($e);return t.forEach(a=>{const l=new on(a,0),c=new on(a,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([l,c],d=>{i=i.add(d.Cr)})}),se.resolve(this.Br(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,a=i.length+1;let l=i;Ne.isDocumentKey(l)||(l=l.child(""));const c=new on(new Ne(l),0);let d=new Qt($e);return this.Mr.forEachWhile(p=>{const m=p.key.path;return!!i.isPrefixOf(m)&&(m.length===a&&(d=d.add(p.Cr)),!0)},c),se.resolve(this.Br(d))}Br(e){const t=[];return e.forEach(i=>{const a=this.Or(i);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){ot(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Mr;return se.forEach(t.mutations,a=>{const l=new on(a.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Mr=i})}qn(e){}containsKey(e,t){const i=new on(t,0),a=this.Mr.firstAfterOrEqual(i);return se.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,se.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PU{constructor(e){this.kr=e,this.docs=function(){return new At(Ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,a=this.docs.get(i),l=a?a.size:0,c=this.kr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return se.resolve(i?i.document.mutableCopy():Rn.newInvalidDocument(t))}getEntries(e,t){let i=ir();return t.forEach(a=>{const l=this.docs.get(a);i=i.insert(a,l?l.document.mutableCopy():Rn.newInvalidDocument(a))}),se.resolve(i)}getDocumentsMatchingQuery(e,t,i,a){let l=ir();const c=t.path,d=new Ne(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:m,value:{document:y}}=p.getNext();if(!c.isPrefixOf(m.path))break;m.path.length>c.length+1||oL(aL(y),i)<=0||(a.has(y.key)||ip(t,y))&&(l=l.insert(y.key,y.mutableCopy()))}return se.resolve(l)}getAllFromCollectionGroup(e,t,i,a){ke()}qr(e,t){return se.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new MU(this)}getSize(e){return se.resolve(this.size)}}class MU extends RU{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((i,a)=>{a.isValidDocument()?t.push(this.Ir.addEntry(e,a)):this.Ir.removeEntry(i)}),se.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LU{constructor(e){this.persistence=e,this.Qr=new So(t=>Hy(t),qy),this.lastRemoteSnapshotVersion=Pe.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Qy,this.targetCount=0,this.Ur=Vl.Kn()}forEachTarget(e,t){return this.Qr.forEach((i,a)=>t(a)),se.resolve()}getLastRemoteSnapshotVersion(e){return se.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return se.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),se.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.$r&&(this.$r=t),se.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new Vl(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,se.resolve()}updateTargetData(e,t){return this.zn(t),se.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.Sr(t.targetId),this.targetCount-=1,se.resolve()}removeTargets(e,t,i){let a=0;const l=[];return this.Qr.forEach((c,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Qr.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),se.waitFor(l).next(()=>a)}getTargetCount(e){return se.resolve(this.targetCount)}getTargetData(e,t){const i=this.Qr.get(t)||null;return se.resolve(i)}addMatchingKeys(e,t,i){return this.Kr.yr(t,i),se.resolve()}removeMatchingKeys(e,t,i){this.Kr.br(t,i);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),se.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Kr.Sr(t),se.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Kr.vr(t);return se.resolve(i)}containsKey(e,t){return se.resolve(this.Kr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Zd(0),this.zr=!1,this.zr=!0,this.jr=new DU,this.referenceDelegate=e(this),this.Hr=new LU(this),this.indexManager=new EU,this.remoteDocumentCache=function(a){return new PU(a)}(i=>this.referenceDelegate.Jr(i)),this.serializer=new yU(t),this.Yr=new xU(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new OU,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Wr[e.toKey()];return i||(i=new kU(t,this.referenceDelegate),this.Wr[e.toKey()]=i),i}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,i){Ee("MemoryPersistence","Starting transaction:",e);const a=new UU(this.Gr.next());return this.referenceDelegate.Zr(),i(a).next(l=>this.referenceDelegate.Xr(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}ei(e,t){return se.or(Object.values(this.Wr).map(i=>()=>i.containsKey(e,t)))}}class UU extends uL{constructor(e){super(),this.currentSequenceNumber=e}}class Xy{constructor(e){this.persistence=e,this.ti=new Qy,this.ni=null}static ri(e){return new Xy(e)}get ii(){if(this.ni)return this.ni;throw ke()}addReference(e,t,i){return this.ti.addReference(i,t),this.ii.delete(i.toString()),se.resolve()}removeReference(e,t,i){return this.ti.removeReference(i,t),this.ii.add(i.toString()),se.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),se.resolve()}removeTarget(e,t){this.ti.Sr(t.targetId).forEach(a=>this.ii.add(a.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.ii.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return se.forEach(this.ii,i=>{const a=Ne.fromPath(i);return this.si(e,a).next(l=>{l||t.removeEntry(a,Pe.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(i=>{i?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return se.or([()=>se.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class kd{constructor(e,t){this.persistence=e,this.oi=new So(i=>fL(i.path),(i,a)=>i.isEqual(a)),this.garbageCollector=CU(this,t)}static ri(e,t){return new kd(e,t)}Zr(){}Xr(e){return se.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(a=>i+a))}sr(e){let t=0;return this.rr(e,i=>{t++}).next(()=>t)}rr(e,t){return se.forEach(this.oi,(i,a)=>this.ar(e,i,a).next(l=>l?se.resolve():t(a)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.qr(e,c=>this.ar(e,c,t).next(d=>{d||(i++,l.removeEntry(c,Pe.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),se.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.oi.set(i,e.currentSequenceNumber),se.resolve()}removeReference(e,t,i){return this.oi.set(i,e.currentSequenceNumber),se.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),se.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=nd(e.data.value)),t}ar(e,t,i){return se.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.oi.get(t);return se.resolve(a!==void 0&&a>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,t,i,a){this.targetId=e,this.fromCache=t,this.Hi=i,this.Ji=a}static Yi(e,t){let i=We(),a=We();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new Zy(e,t.fromCache,i,a)}}/**
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
 */class VU{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class jU{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Ix()?8:cL(xn())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,i,a){const l={result:null};return this.rs(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.ss(e,t,a,i).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new VU;return this._s(e,t,c).next(d=>{if(l.result=d,this.Xi)return this.us(e,t,c,d.size)})}).next(()=>l.result)}us(e,t,i,a){return i.documentReadCount<this.es?(gl()<=He.DEBUG&&Ee("QueryEngine","SDK will not create cache indexes for query:",_l(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),se.resolve()):(gl()<=He.DEBUG&&Ee("QueryEngine","Query:",_l(t),"scans",i.documentReadCount,"local documents and returns",a,"documents as results."),i.documentReadCount>this.ts*a?(gl()<=He.DEBUG&&Ee("QueryEngine","The SDK decides to create cache indexes for query:",_l(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hs(t))):se.resolve())}rs(e,t){if(Eb(t))return se.resolve(null);let i=hs(t);return this.indexManager.getIndexType(e,i).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=w_(t,null,"F"),i=hs(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const c=We(...l);return this.ns.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const m=this.cs(t,d);return this.ls(t,m,c,p.readTime)?this.rs(e,w_(t,null,"F")):this.hs(e,m,t,p)}))})))}ss(e,t,i,a){return Eb(t)||a.isEqual(Pe.min())?se.resolve(null):this.ns.getDocuments(e,i).next(l=>{const c=this.cs(t,l);return this.ls(t,c,i,a)?se.resolve(null):(gl()<=He.DEBUG&&Ee("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),_l(t)),this.hs(e,c,t,rL(a,Bc)).next(d=>d))})}cs(e,t){let i=new Qt(pC(e));return t.forEach((a,l)=>{ip(e,l)&&(i=i.add(l))}),i}ls(e,t,i,a){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}_s(e,t,i){return gl()<=He.DEBUG&&Ee("QueryEngine","Using full collection scan to execute query:",_l(t)),this.ns.getDocumentsMatchingQuery(e,t,aa.min(),i)}hs(e,t,i,a){return this.ns.getDocumentsMatchingQuery(e,i,a).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy="LocalStore",BU=3e8;class zU{constructor(e,t,i,a){this.persistence=e,this.Ps=t,this.serializer=a,this.Ts=new At($e),this.Is=new So(l=>Hy(l),qy),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(i)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NU(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function FU(n,e,t,i){return new zU(n,e,t,i)}async function VC(n,e){const t=Le(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let a;return t.mutationQueue.getAllMutationBatches(i).next(l=>(a=l,t.As(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const c=[],d=[];let p=We();for(const m of a){c.push(m.batchId);for(const y of m.mutations)p=p.add(y.key)}for(const m of l){d.push(m.batchId);for(const y of m.mutations)p=p.add(y.key)}return t.localDocuments.getDocuments(i,p).next(m=>({Rs:m,removedBatchIds:c,addedBatchIds:d}))})})}function HU(n,e){const t=Le(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const a=e.batch.keys(),l=t.ds.newChangeBuffer({trackRemovals:!0});return function(d,p,m,y){const S=m.batch,A=S.keys();let D=se.resolve();return A.forEach(V=>{D=D.next(()=>y.getEntry(p,V)).next(G=>{const M=m.docVersions.get(V);ot(M!==null),G.version.compareTo(M)<0&&(S.applyToRemoteDocument(G,m),G.isValidDocument()&&(G.setReadTime(m.commitVersion),y.addEntry(G)))})}),D.next(()=>d.mutationQueue.removeMutationBatch(p,S))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=We();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(p=p.add(d.batch.mutations[m].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,a))})}function jC(n){const e=Le(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function qU(n,e){const t=Le(n),i=e.snapshotVersion;let a=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.ds.newChangeBuffer({trackRemovals:!0});a=t.Ts;const d=[];e.targetChanges.forEach((y,S)=>{const A=a.get(S);if(!A)return;d.push(t.Hr.removeMatchingKeys(l,y.removedDocuments,S).next(()=>t.Hr.addMatchingKeys(l,y.addedDocuments,S)));let D=A.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(S)!==null?D=D.withResumeToken(yn.EMPTY_BYTE_STRING,Pe.min()).withLastLimboFreeSnapshotVersion(Pe.min()):y.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(y.resumeToken,i)),a=a.insert(S,D),function(G,M,B){return G.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-G.snapshotVersion.toMicroseconds()>=BU?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(A,D,y)&&d.push(t.Hr.updateTargetData(l,D))});let p=ir(),m=We();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,y))}),d.push(GU(l,c,e.documentUpdates).next(y=>{p=y.Vs,m=y.fs})),!i.isEqual(Pe.min())){const y=t.Hr.getLastRemoteSnapshotVersion(l).next(S=>t.Hr.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(y)}return se.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,m)).next(()=>p)}).then(l=>(t.Ts=a,l))}function GU(n,e,t){let i=We(),a=We();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let c=ir();return t.forEach((d,p)=>{const m=l.get(d);p.isFoundDocument()!==m.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Pe.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!m.isValidDocument()||p.version.compareTo(m.version)>0||p.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):Ee(Jy,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",p.version)}),{Vs:c,fs:a}})}function WU(n,e){const t=Le(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=By),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function KU(n,e){const t=Le(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let a;return t.Hr.getTargetData(i,e).next(l=>l?(a=l,se.resolve(a)):t.Hr.allocateTargetId(i).next(c=>(a=new Xr(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Hr.addTargetData(i,a).next(()=>a))))}).then(i=>{const a=t.Ts.get(i.targetId);return(a===null||i.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(i.targetId,i),t.Is.set(e,i.targetId)),i})}async function x_(n,e,t){const i=Le(n),a=i.Ts.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,c=>i.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!Ql(c))throw c;Ee(Jy,`Failed to update sequence numbers for target ${e}: ${c}`)}i.Ts=i.Ts.remove(e),i.Is.delete(a.target)}function kb(n,e,t){const i=Le(n);let a=Pe.min(),l=We();return i.persistence.runTransaction("Execute query","readwrite",c=>function(p,m,y){const S=Le(p),A=S.Is.get(y);return A!==void 0?se.resolve(S.Ts.get(A)):S.Hr.getTargetData(m,y)}(i,c,hs(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,i.Hr.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>i.Ps.getDocumentsMatchingQuery(c,e,t?a:Pe.min(),t?l:We())).next(d=>($U(i,DL(e),d),{documents:d,gs:l})))}function $U(n,e,t){let i=n.Es.get(e)||Pe.min();t.forEach((a,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.Es.set(e,i)}class Pb{constructor(){this.activeTargetIds=VL()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class YU{constructor(){this.ho=new Pb,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,i){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Pb,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class QU{To(e){}shutdown(){}}/**
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
 */const Mb="ConnectivityMonitor";class Lb{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){Ee(Mb,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){Ee(Mb,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zf=null;function O_(){return zf===null?zf=function(){return 268435456+Math.round(2147483648*Math.random())}():zf++,"0x"+zf.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg="RestConnection",XU={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ZU{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${i}/databases/${a}`,this.wo=this.databaseId.database===Cd?`project_id=${i}`:`project_id=${i}&database_id=${a}`}bo(e,t,i,a,l){const c=O_(),d=this.So(e,t.toUriEncodedString());Ee(Bg,`Sending RPC '${e}' ${c}:`,d,i);const p={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(p,a,l),this.vo(e,d,p,i).then(m=>(Ee(Bg,`Received RPC '${e}' ${c}: `,m),m),m=>{throw kl(Bg,`RPC '${e}' ${c} failed with error: `,m,"url: ",d,"request:",i),m})}Co(e,t,i,a,l,c){return this.bo(e,t,i,a,l)}Do(e,t,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+$l}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),i&&i.headers.forEach((a,l)=>e[l]=a)}So(e,t){const i=XU[e];return`${this.po}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JU{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="WebChannelConnection";class e4 extends ZU{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,i,a){const l=O_();return new Promise((c,d)=>{const p=new q1;p.setWithCredentials(!0),p.listenOnce(G1.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case td.NO_ERROR:const y=p.getResponseJson();Ee(Sn,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(y)),c(y);break;case td.TIMEOUT:Ee(Sn,`RPC '${e}' ${l} timed out`),d(new Ie(le.DEADLINE_EXCEEDED,"Request time out"));break;case td.HTTP_ERROR:const S=p.getStatus();if(Ee(Sn,`RPC '${e}' ${l} failed with status:`,S,"response text:",p.getResponseText()),S>0){let A=p.getResponseJson();Array.isArray(A)&&(A=A[0]);const D=A==null?void 0:A.error;if(D&&D.status&&D.message){const V=function(M){const B=M.toLowerCase().replace(/_/g,"-");return Object.values(le).indexOf(B)>=0?B:le.UNKNOWN}(D.status);d(new Ie(V,D.message))}else d(new Ie(le.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new Ie(le.UNAVAILABLE,"Connection failed."));break;default:ke()}}finally{Ee(Sn,`RPC '${e}' ${l} completed.`)}});const m=JSON.stringify(a);Ee(Sn,`RPC '${e}' ${l} sending request:`,a),p.send(t,"POST",m,i,15)})}Wo(e,t,i){const a=O_(),l=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=$1(),d=K1(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(p.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Do(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const y=l.join("");Ee(Sn,`Creating RPC '${e}' stream ${a}: ${y}`,p);const S=c.createWebChannel(y,p);let A=!1,D=!1;const V=new JU({Fo:M=>{D?Ee(Sn,`Not sending because RPC '${e}' stream ${a} is closed:`,M):(A||(Ee(Sn,`Opening RPC '${e}' stream ${a} transport.`),S.open(),A=!0),Ee(Sn,`RPC '${e}' stream ${a} sending:`,M),S.send(M))},Mo:()=>S.close()}),G=(M,B,H)=>{M.listen(B,$=>{try{H($)}catch(F){setTimeout(()=>{throw F},0)}})};return G(S,yc.EventType.OPEN,()=>{D||(Ee(Sn,`RPC '${e}' stream ${a} transport opened.`),V.Qo())}),G(S,yc.EventType.CLOSE,()=>{D||(D=!0,Ee(Sn,`RPC '${e}' stream ${a} transport closed`),V.Ko())}),G(S,yc.EventType.ERROR,M=>{D||(D=!0,kl(Sn,`RPC '${e}' stream ${a} transport errored:`,M),V.Ko(new Ie(le.UNAVAILABLE,"The operation could not be completed")))}),G(S,yc.EventType.MESSAGE,M=>{var B;if(!D){const H=M.data[0];ot(!!H);const $=H,F=($==null?void 0:$.error)||((B=$[0])===null||B===void 0?void 0:B.error);if(F){Ee(Sn,`RPC '${e}' stream ${a} received error:`,F);const re=F.status;let _e=function(I){const N=Ft[I];if(N!==void 0)return CC(N)}(re),P=F.message;_e===void 0&&(_e=le.INTERNAL,P="Unknown error status: "+re+" with message "+F.message),D=!0,V.Ko(new Ie(_e,P)),S.close()}else Ee(Sn,`RPC '${e}' stream ${a} received:`,H),V.Uo(H)}}),G(d,W1.STAT_EVENT,M=>{M.stat===E_.PROXY?Ee(Sn,`RPC '${e}' stream ${a} detected buffering proxy`):M.stat===E_.NOPROXY&&Ee(Sn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{V.$o()},0),V}}function zg(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(n){return new sU(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e,t,i=1e3,a=1.5,l=6e4){this.Ti=e,this.timerId=t,this.Go=i,this.zo=a,this.jo=l,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),i=Math.max(0,Date.now()-this.Yo),a=Math.max(0,t-i);a>0&&Ee("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,a,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub="PersistentStream";class zC{constructor(e,t,i,a,l,c,d,p){this.Ti=e,this.n_=i,this.r_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new BC(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===le.RESOURCE_EXHAUSTED?(nr(t.toString()),nr("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===le.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,a])=>{this.i_===t&&this.V_(i,a)},i=>{e(()=>{const a=new Ie(le.UNKNOWN,"Fetching auth token failed: "+i.message);return this.m_(a)})})}V_(e,t){const i=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{i(()=>this.listener.xo())}),this.stream.No(()=>{i(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(a=>{i(()=>this.m_(a))}),this.stream.onMessage(a=>{i(()=>++this.__==1?this.g_(a):this.onNext(a))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return Ee(Ub,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(Ee(Ub,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class t4 extends zC{constructor(e,t,i,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,a,c),this.serializer=l}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=oU(this.serializer,e),i=function(l){if(!("targetChange"in l))return Pe.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Pe.min():c.readTime?ds(c.readTime):Pe.min()}(e);return this.listener.p_(t,i)}y_(e){const t={};t.database=N_(this.serializer),t.addTarget=function(l,c){let d;const p=c.target;if(d=A_(p)?{documents:cU(l,p)}:{query:hU(l,p).ht},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=NC(l,c.resumeToken);const m=C_(l,c.expectedCount);m!==null&&(d.expectedCount=m)}else if(c.snapshotVersion.compareTo(Pe.min())>0){d.readTime=Dd(l,c.snapshotVersion.toTimestamp());const m=C_(l,c.expectedCount);m!==null&&(d.expectedCount=m)}return d}(this.serializer,e);const i=dU(this.serializer,e);i&&(t.labels=i),this.I_(t)}w_(e){const t={};t.database=N_(this.serializer),t.removeTarget=e,this.I_(t)}}class n4 extends zC{constructor(e,t,i,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,a,c),this.serializer=l}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return ot(!!e.streamToken),this.lastStreamToken=e.streamToken,ot(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){ot(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=uU(e.writeResults,e.commitTime),i=ds(e.commitTime);return this.listener.v_(i,t)}C_(){const e={};e.database=N_(this.serializer),this.I_(e)}S_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>lU(this.serializer,i))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{}class s4 extends i4{constructor(e,t,i,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=a,this.F_=!1}M_(){if(this.F_)throw new Ie(le.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,i,a){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.bo(e,R_(t,i),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===le.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new Ie(le.UNKNOWN,l.toString())})}Co(e,t,i,a,l){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Co(e,R_(t,i),a,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===le.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new Ie(le.UNKNOWN,c.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class r4{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(nr(t),this.N_=!1):Ee("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo="RemoteStore";class a4{constructor(e,t,i,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=l,this.z_.To(c=>{i.enqueueAndForget(async()=>{bo(this)&&(Ee(mo,"Restarting streams for network reachability change."),await async function(p){const m=Le(p);m.W_.add(4),await ah(m),m.j_.set("Unknown"),m.W_.delete(4),await lp(m)}(this))})}),this.j_=new r4(i,a)}}async function lp(n){if(bo(n))for(const e of n.G_)await e(!0)}async function ah(n){for(const e of n.G_)await e(!1)}function FC(n,e){const t=Le(n);t.U_.has(e.targetId)||(t.U_.set(e.targetId,e),iv(t)?nv(t):Xl(t).c_()&&tv(t,e))}function ev(n,e){const t=Le(n),i=Xl(t);t.U_.delete(e),i.c_()&&HC(t,e),t.U_.size===0&&(i.c_()?i.P_():bo(t)&&t.j_.set("Unknown"))}function tv(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Pe.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Xl(n).y_(e)}function HC(n,e){n.H_.Ne(e),Xl(n).w_(e)}function nv(n){n.H_=new eU({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.U_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),Xl(n).start(),n.j_.B_()}function iv(n){return bo(n)&&!Xl(n).u_()&&n.U_.size>0}function bo(n){return Le(n).W_.size===0}function qC(n){n.H_=void 0}async function o4(n){n.j_.set("Online")}async function l4(n){n.U_.forEach((e,t)=>{tv(n,e)})}async function u4(n,e){qC(n),iv(n)?(n.j_.q_(e),nv(n)):n.j_.set("Unknown")}async function c4(n,e,t){if(n.j_.set("Online"),e instanceof IC&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const d of l.targetIds)a.U_.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.U_.delete(d),a.H_.removeTarget(d))}(n,e)}catch(i){Ee(mo,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Pd(n,i)}else if(e instanceof rd?n.H_.We(e):e instanceof RC?n.H_.Ze(e):n.H_.je(e),!t.isEqual(Pe.min()))try{const i=await jC(n.localStore);t.compareTo(i)>=0&&await function(l,c){const d=l.H_.ot(c);return d.targetChanges.forEach((p,m)=>{if(p.resumeToken.approximateByteSize()>0){const y=l.U_.get(m);y&&l.U_.set(m,y.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,m)=>{const y=l.U_.get(p);if(!y)return;l.U_.set(p,y.withResumeToken(yn.EMPTY_BYTE_STRING,y.snapshotVersion)),HC(l,p);const S=new Xr(y.target,p,m,y.sequenceNumber);tv(l,S)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){Ee(mo,"Failed to raise snapshot:",i),await Pd(n,i)}}async function Pd(n,e,t){if(!Ql(e))throw e;n.W_.add(1),await ah(n),n.j_.set("Offline"),t||(t=()=>jC(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{Ee(mo,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await lp(n)})}function GC(n,e){return e().catch(t=>Pd(n,t,e))}async function up(n){const e=Le(n),t=ca(e);let i=e.K_.length>0?e.K_[e.K_.length-1].batchId:By;for(;h4(e);)try{const a=await WU(e.localStore,i);if(a===null){e.K_.length===0&&t.P_();break}i=a.batchId,f4(e,a)}catch(a){await Pd(e,a)}WC(e)&&KC(e)}function h4(n){return bo(n)&&n.K_.length<10}function f4(n,e){n.K_.push(e);const t=ca(n);t.c_()&&t.b_&&t.S_(e.mutations)}function WC(n){return bo(n)&&!ca(n).u_()&&n.K_.length>0}function KC(n){ca(n).start()}async function d4(n){ca(n).C_()}async function p4(n){const e=ca(n);for(const t of n.K_)e.S_(t.mutations)}async function m4(n,e,t){const i=n.K_.shift(),a=Ky.from(i,e,t);await GC(n,()=>n.remoteSyncer.applySuccessfulWrite(a)),await up(n)}async function g4(n,e){e&&ca(n).b_&&await async function(i,a){if(function(c){return XL(c)&&c!==le.ABORTED}(a.code)){const l=i.K_.shift();ca(i).h_(),await GC(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,a)),await up(i)}}(n,e),WC(n)&&KC(n)}async function Vb(n,e){const t=Le(n);t.asyncQueue.verifyOperationInProgress(),Ee(mo,"RemoteStore received new credentials");const i=bo(t);t.W_.add(3),await ah(t),i&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await lp(t)}async function _4(n,e){const t=Le(n);e?(t.W_.delete(2),await lp(t)):e||(t.W_.add(2),await ah(t),t.j_.set("Unknown"))}function Xl(n){return n.J_||(n.J_=function(t,i,a){const l=Le(t);return l.M_(),new t4(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(n.datastore,n.asyncQueue,{xo:o4.bind(null,n),No:l4.bind(null,n),Lo:u4.bind(null,n),p_:c4.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),iv(n)?nv(n):n.j_.set("Unknown")):(await n.J_.stop(),qC(n))})),n.J_}function ca(n){return n.Y_||(n.Y_=function(t,i,a){const l=Le(t);return l.M_(),new n4(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:d4.bind(null,n),Lo:g4.bind(null,n),D_:p4.bind(null,n),v_:m4.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await up(n)):(await n.Y_.stop(),n.K_.length>0&&(Ee(mo,`Stopping write stream with ${n.K_.length} pending writes`),n.K_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e,t,i,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=a,this.removalCallback=l,this.deferred=new na,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,a,l){const c=Date.now()+i,d=new sv(e,t,c,a,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ie(le.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rv(n,e){if(nr("AsyncQueue",`${e}: ${n}`),Ql(n))return new Ie(le.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{static emptySet(e){return new Il(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||Ne.comparator(t.key,i.key):(t,i)=>Ne.comparator(t.key,i.key),this.keyedMap=vc(),this.sortedSet=new At(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Il)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=i.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Il;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(){this.Z_=new At(Ne.comparator)}track(e){const t=e.doc.key,i=this.Z_.get(t);i?e.type!==0&&i.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&i.type!==1?this.Z_=this.Z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Z_=this.Z_.remove(t):e.type===1&&i.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):ke():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class jl{constructor(e,t,i,a,l,c,d,p,m){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=m}static fromInitialDocuments(e,t,i,a,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new jl(e,t,Il.emptySet(t),c,i,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&np(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==i[a].type||!t[a].doc.isEqual(i[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y4{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class v4{constructor(){this.queries=Bb(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,i){const a=Le(t),l=a.queries;a.queries=Bb(),l.forEach((c,d)=>{for(const p of d.ta)p.onError(i)})})(this,new Ie(le.ABORTED,"Firestore shutting down"))}}function Bb(){return new So(n=>dC(n),np)}async function E4(n,e){const t=Le(n);let i=3;const a=e.query;let l=t.queries.get(a);l?!l.na()&&e.ra()&&(i=2):(l=new y4,i=e.ra()?0:1);try{switch(i){case 0:l.ea=await t.onListen(a,!0);break;case 1:l.ea=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=rv(c,`Initialization of query '${_l(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.ta.push(e),e.sa(t.onlineState),l.ea&&e.oa(l.ea)&&av(t)}async function T4(n,e){const t=Le(n),i=e.query;let a=3;const l=t.queries.get(i);if(l){const c=l.ta.indexOf(e);c>=0&&(l.ta.splice(c,1),l.ta.length===0?a=e.ra()?0:1:!l.na()&&e.ra()&&(a=2))}switch(a){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function S4(n,e){const t=Le(n);let i=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.ta)d.oa(a)&&(i=!0);c.ea=a}}i&&av(t)}function b4(n,e,t){const i=Le(n),a=i.queries.get(e);if(a)for(const l of a.ta)l.onError(t);i.queries.delete(e)}function av(n){n.ia.forEach(e=>{e.next()})}var D_,zb;(zb=D_||(D_={}))._a="default",zb.Cache="cache";class A4{constructor(e,t,i){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=i||{}}oa(e){if(!this.options.includeMetadataChanges){const i=[];for(const a of e.docChanges)a.type!==3&&i.push(a);e=new jl(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const i=t!=="Offline";return(!this.options.Ta||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=jl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==D_.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e){this.key=e}}class YC{constructor(e){this.key=e}}class w4{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=We(),this.mutatedKeys=We(),this.ya=pC(e),this.wa=new Il(this.ya)}get ba(){return this.fa}Sa(e,t){const i=t?t.Da:new jb,a=t?t.wa:this.wa;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,m=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((y,S)=>{const A=a.get(y),D=ip(this.query,S)?S:null,V=!!A&&this.mutatedKeys.has(A.key),G=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let M=!1;A&&D?A.data.isEqual(D.data)?V!==G&&(i.track({type:3,doc:D}),M=!0):this.va(A,D)||(i.track({type:2,doc:D}),M=!0,(p&&this.ya(D,p)>0||m&&this.ya(D,m)<0)&&(d=!0)):!A&&D?(i.track({type:0,doc:D}),M=!0):A&&!D&&(i.track({type:1,doc:A}),M=!0,(p||m)&&(d=!0)),M&&(D?(c=c.add(D),l=G?l.add(y):l.delete(y)):(c=c.delete(y),l=l.delete(y)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),l=l.delete(y.key),i.track({type:1,doc:y})}return{wa:c,Da:i,ls:d,mutatedKeys:l}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,a){const l=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const c=e.Da.X_();c.sort((y,S)=>function(D,V){const G=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ke()}};return G(D)-G(V)}(y.type,S.type)||this.ya(y.doc,S.doc)),this.Ca(i),a=a!=null&&a;const d=t&&!a?this.Fa():[],p=this.pa.size===0&&this.current&&!a?1:0,m=p!==this.ga;return this.ga=p,c.length!==0||m?{snapshot:new jl(this.query,e.wa,l,c,e.mutatedKeys,p===0,m,!1,!!i&&i.resumeToken.approximateByteSize()>0),Ma:d}:{Ma:d}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new jb,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=We(),this.wa.forEach(i=>{this.xa(i.key)&&(this.pa=this.pa.add(i.key))});const t=[];return e.forEach(i=>{this.pa.has(i)||t.push(new YC(i))}),this.pa.forEach(i=>{e.has(i)||t.push(new $C(i))}),t}Oa(e){this.fa=e.gs,this.pa=We();const t=this.Sa(e.documents);return this.applyChanges(t,!0)}Na(){return jl.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const ov="SyncEngine";class C4{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class R4{constructor(e){this.key=e,this.Ba=!1}}class I4{constructor(e,t,i,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.La={},this.ka=new So(d=>dC(d),np),this.qa=new Map,this.Qa=new Set,this.$a=new At(Ne.comparator),this.Ka=new Map,this.Ua=new Qy,this.Wa={},this.Ga=new Map,this.za=Vl.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function N4(n,e,t=!0){const i=tR(n);let a;const l=i.ka.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.Na()):a=await QC(i,e,t,!0),a}async function x4(n,e){const t=tR(n);await QC(t,e,!0,!1)}async function QC(n,e,t,i){const a=await KU(n.localStore,hs(e)),l=a.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return i&&(d=await O4(n,e,l,c==="current",a.resumeToken)),n.isPrimaryClient&&t&&FC(n.remoteStore,a),d}async function O4(n,e,t,i,a){n.Ha=(S,A,D)=>async function(G,M,B,H){let $=M.view.Sa(B);$.ls&&($=await kb(G.localStore,M.query,!1).then(({documents:P})=>M.view.Sa(P,$)));const F=H&&H.targetChanges.get(M.targetId),re=H&&H.targetMismatches.get(M.targetId)!=null,_e=M.view.applyChanges($,G.isPrimaryClient,F,re);return Hb(G,M.targetId,_e.Ma),_e.snapshot}(n,S,A,D);const l=await kb(n.localStore,e,!0),c=new w4(e,l.gs),d=c.Sa(l.documents),p=rh.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",a),m=c.applyChanges(d,n.isPrimaryClient,p);Hb(n,t,m.Ma);const y=new C4(e,t,c);return n.ka.set(e,y),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),m.snapshot}async function D4(n,e,t){const i=Le(n),a=i.ka.get(e),l=i.qa.get(a.targetId);if(l.length>1)return i.qa.set(a.targetId,l.filter(c=>!np(c,e))),void i.ka.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(a.targetId),i.sharedClientState.isActiveQueryTarget(a.targetId)||await x_(i.localStore,a.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(a.targetId),t&&ev(i.remoteStore,a.targetId),k_(i,a.targetId)}).catch(Yl)):(k_(i,a.targetId),await x_(i.localStore,a.targetId,!0))}async function k4(n,e){const t=Le(n),i=t.ka.get(e),a=t.qa.get(i.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),ev(t.remoteStore,i.targetId))}async function P4(n,e,t){const i=z4(n);try{const a=await function(c,d){const p=Le(c),m=Yt.now(),y=d.reduce((D,V)=>D.add(V.key),We());let S,A;return p.persistence.runTransaction("Locally write mutations","readwrite",D=>{let V=ir(),G=We();return p.ds.getEntries(D,y).next(M=>{V=M,V.forEach((B,H)=>{H.isValidDocument()||(G=G.add(B))})}).next(()=>p.localDocuments.getOverlayedDocuments(D,V)).next(M=>{S=M;const B=[];for(const H of d){const $=WL(H,S.get(H.key).overlayedDocument);$!=null&&B.push(new Ea(H.key,$,aC($.value.mapValue),fs.exists(!0)))}return p.mutationQueue.addMutationBatch(D,m,B,d)}).next(M=>{A=M;const B=M.applyToLocalDocumentSet(S,G);return p.documentOverlayCache.saveOverlays(D,M.batchId,B)})}).then(()=>({batchId:A.batchId,changes:gC(S)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(a.batchId),function(c,d,p){let m=c.Wa[c.currentUser.toKey()];m||(m=new At($e)),m=m.insert(d,p),c.Wa[c.currentUser.toKey()]=m}(i,a.batchId,t),await oh(i,a.changes),await up(i.remoteStore)}catch(a){const l=rv(a,"Failed to persist write");t.reject(l)}}async function XC(n,e){const t=Le(n);try{const i=await qU(t.localStore,e);e.targetChanges.forEach((a,l)=>{const c=t.Ka.get(l);c&&(ot(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?c.Ba=!0:a.modifiedDocuments.size>0?ot(c.Ba):a.removedDocuments.size>0&&(ot(c.Ba),c.Ba=!1))}),await oh(t,i,e)}catch(i){await Yl(i)}}function Fb(n,e,t){const i=Le(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const a=[];i.ka.forEach((l,c)=>{const d=c.view.sa(e);d.snapshot&&a.push(d.snapshot)}),function(c,d){const p=Le(c);p.onlineState=d;let m=!1;p.queries.forEach((y,S)=>{for(const A of S.ta)A.sa(d)&&(m=!0)}),m&&av(p)}(i.eventManager,e),a.length&&i.La.p_(a),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function M4(n,e,t){const i=Le(n);i.sharedClientState.updateQueryState(e,"rejected",t);const a=i.Ka.get(e),l=a&&a.key;if(l){let c=new At(Ne.comparator);c=c.insert(l,Rn.newNoDocument(l,Pe.min()));const d=We().add(l),p=new ap(Pe.min(),new Map,new At($e),c,d);await XC(i,p),i.$a=i.$a.remove(l),i.Ka.delete(e),lv(i)}else await x_(i.localStore,e,!1).then(()=>k_(i,e,t)).catch(Yl)}async function L4(n,e){const t=Le(n),i=e.batch.batchId;try{const a=await HU(t.localStore,e);JC(t,i,null),ZC(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await oh(t,a)}catch(a){await Yl(a)}}async function U4(n,e,t){const i=Le(n);try{const a=await function(c,d){const p=Le(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let y;return p.mutationQueue.lookupMutationBatch(m,d).next(S=>(ot(S!==null),y=S.keys(),p.mutationQueue.removeMutationBatch(m,S))).next(()=>p.mutationQueue.performConsistencyCheck(m)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(m,y,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,y)).next(()=>p.localDocuments.getDocuments(m,y))})}(i.localStore,e);JC(i,e,t),ZC(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await oh(i,a)}catch(a){await Yl(a)}}function ZC(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function JC(n,e,t){const i=Le(n);let a=i.Wa[i.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),i.Wa[i.currentUser.toKey()]=a}}function k_(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.qa.get(e))n.ka.delete(i),t&&n.La.Ja(i,t);n.qa.delete(e),n.isPrimaryClient&&n.Ua.Sr(e).forEach(i=>{n.Ua.containsKey(i)||eR(n,i)})}function eR(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(ev(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ka.delete(t),lv(n))}function Hb(n,e,t){for(const i of t)i instanceof $C?(n.Ua.addReference(i.key,e),V4(n,i)):i instanceof YC?(Ee(ov,"Document no longer in limbo: "+i.key),n.Ua.removeReference(i.key,e),n.Ua.containsKey(i.key)||eR(n,i.key)):ke()}function V4(n,e){const t=e.key,i=t.path.canonicalString();n.$a.get(t)||n.Qa.has(i)||(Ee(ov,"New document in limbo: "+t),n.Qa.add(i),lv(n))}function lv(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new Ne(xt.fromString(e)),i=n.za.next();n.Ka.set(i,new R4(t)),n.$a=n.$a.insert(t,i),FC(n.remoteStore,new Xr(hs(Gy(t.path)),i,"TargetPurposeLimboResolution",Zd.ae))}}async function oh(n,e,t){const i=Le(n),a=[],l=[],c=[];i.ka.isEmpty()||(i.ka.forEach((d,p)=>{c.push(i.Ha(p,e,t).then(m=>{var y;if((m||t)&&i.isPrimaryClient){const S=m?!m.fromCache:(y=t==null?void 0:t.targetChanges.get(p.targetId))===null||y===void 0?void 0:y.current;i.sharedClientState.updateQueryState(p.targetId,S?"current":"not-current")}if(m){a.push(m);const S=Zy.Yi(p.targetId,m);l.push(S)}}))}),await Promise.all(c),i.La.p_(a),await async function(p,m){const y=Le(p);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",S=>se.forEach(m,A=>se.forEach(A.Hi,D=>y.persistence.referenceDelegate.addReference(S,A.targetId,D)).next(()=>se.forEach(A.Ji,D=>y.persistence.referenceDelegate.removeReference(S,A.targetId,D)))))}catch(S){if(!Ql(S))throw S;Ee(Jy,"Failed to update sequence numbers: "+S)}for(const S of m){const A=S.targetId;if(!S.fromCache){const D=y.Ts.get(A),V=D.snapshotVersion,G=D.withLastLimboFreeSnapshotVersion(V);y.Ts=y.Ts.insert(A,G)}}}(i.localStore,l))}async function j4(n,e){const t=Le(n);if(!t.currentUser.isEqual(e)){Ee(ov,"User change. New user:",e.toKey());const i=await VC(t.localStore,e);t.currentUser=e,function(l,c){l.Ga.forEach(d=>{d.forEach(p=>{p.reject(new Ie(le.CANCELLED,c))})}),l.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await oh(t,i.Rs)}}function B4(n,e){const t=Le(n),i=t.Ka.get(e);if(i&&i.Ba)return We().add(i.key);{let a=We();const l=t.qa.get(e);if(!l)return a;for(const c of l){const d=t.ka.get(c);a=a.unionWith(d.view.ba)}return a}}function tR(n){const e=Le(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=XC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=B4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=M4.bind(null,e),e.La.p_=S4.bind(null,e.eventManager),e.La.Ja=b4.bind(null,e.eventManager),e}function z4(n){const e=Le(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=L4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=U4.bind(null,e),e}class Md{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=op(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return FU(this.persistence,new jU,e.initialUser,this.serializer)}Xa(e){return new UC(Xy.ri,this.serializer)}Za(e){return new YU}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Md.provider={build:()=>new Md};class F4 extends Md{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){ot(this.persistence.referenceDelegate instanceof kd);const i=this.persistence.referenceDelegate.garbageCollector;return new AU(i,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?Gn.withCacheSize(this.cacheSizeBytes):Gn.DEFAULT;return new UC(i=>kd.ri(i,t),this.serializer)}}class P_{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Fb(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=j4.bind(null,this.syncEngine),await _4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new v4}()}createDatastore(e){const t=op(e.databaseInfo.databaseId),i=function(l){return new e4(l)}(e.databaseInfo);return function(l,c,d,p){return new s4(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,a,l,c,d){return new a4(i,a,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>Fb(this.syncEngine,t,0),function(){return Lb.D()?new Lb:new QU}())}createSyncEngine(e,t){return function(a,l,c,d,p,m,y){const S=new I4(a,l,c,d,p,m);return y&&(S.ja=!0),S}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=Le(a);Ee(mo,"RemoteStore shutting down."),l.W_.add(5),await ah(l),l.z_.shutdown(),l.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}P_.provider={build:()=>new P_};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class H4{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):nr("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha="FirestoreClient";class q4{constructor(e,t,i,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=a,this.user=An.UNAUTHENTICATED,this.clientId=Q1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async c=>{Ee(ha,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(Ee(ha,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new na;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=rv(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Fg(n,e){n.asyncQueue.verifyOperationInProgress(),Ee(ha,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async a=>{i.isEqual(a)||(await VC(e.localStore,a),i=a)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function qb(n,e){n.asyncQueue.verifyOperationInProgress();const t=await G4(n);Ee(ha,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>Vb(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,a)=>Vb(e.remoteStore,a)),n._onlineComponents=e}async function G4(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Ee(ha,"Using user provided OfflineComponentProvider");try{await Fg(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===le.FAILED_PRECONDITION||a.code===le.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;kl("Error using user provided cache. Falling back to memory cache: "+t),await Fg(n,new Md)}}else Ee(ha,"Using default OfflineComponentProvider"),await Fg(n,new F4(void 0));return n._offlineComponents}async function nR(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(Ee(ha,"Using user provided OnlineComponentProvider"),await qb(n,n._uninitializedComponentsProvider._online)):(Ee(ha,"Using default OnlineComponentProvider"),await qb(n,new P_))),n._onlineComponents}function W4(n){return nR(n).then(e=>e.syncEngine)}async function K4(n){const e=await nR(n),t=e.eventManager;return t.onListen=N4.bind(null,e.syncEngine),t.onUnlisten=D4.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=x4.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=k4.bind(null,e.syncEngine),t}function $4(n,e,t={}){const i=new na;return n.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,m){const y=new H4({next:A=>{y.su(),c.enqueueAndForget(()=>T4(l,S));const D=A.docs.has(d);!D&&A.fromCache?m.reject(new Ie(le.UNAVAILABLE,"Failed to get document because the client is offline.")):D&&A.fromCache&&p&&p.source==="server"?m.reject(new Ie(le.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(A)},error:A=>m.reject(A)}),S=new A4(Gy(d.path),y,{includeMetadataChanges:!0,Ta:!0});return E4(l,S)}(await K4(n),n.asyncQueue,e,t,i)),i.promise}/**
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
 */function iR(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y4(n,e,t){if(!t)throw new Ie(le.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Q4(n,e,t,i){if(e===!0&&i===!0)throw new Ie(le.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Wb(n){if(!Ne.isDocumentKey(n))throw new Ie(le.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function uv(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ke()}function go(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Ie(le.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=uv(n);throw new Ie(le.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR="firestore.googleapis.com",Kb=!0;class $b{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new Ie(le.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=sR,this.ssl=Kb}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Kb;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=LC;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<SU)throw new Ie(le.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Q4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iR((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new Ie(le.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new Ie(le.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new Ie(le.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,a){return i.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cv{constructor(e,t,i,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $b({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ie(le.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Ie(le.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $b(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new XM;switch(i.type){case"firstParty":return new tL(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new Ie(le.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=Gb.get(t);i&&(Ee("ComponentProvider","Removing Datastore"),Gb.delete(t),i.terminate())}(this),Promise.resolve()}}function X4(n,e,t,i={}){var a;const l=(n=go(n,cv))._getSettings(),c=Object.assign(Object.assign({},l),{emulatorOptions:n._getEmulatorOptions()}),d=`${e}:${t}`;l.host!==sR&&l.host!==d&&kl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},l),{host:d,ssl:!1,emulatorOptions:i});if(!ia(p,c)&&(n._setSettings(p),i.mockUserToken)){let m,y;if(typeof i.mockUserToken=="string")m=i.mockUserToken,y=An.MOCK_USER;else{m=qA(i.mockUserToken,(a=n._app)===null||a===void 0?void 0:a.options.projectId);const S=i.mockUserToken.sub||i.mockUserToken.user_id;if(!S)throw new Ie(le.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new An(S)}n._authCredentials=new ZM(new Y1(m,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new hv(this.firestore,e,this._query)}}class ii{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ii(this.firestore,e,this._key)}}class Gc extends hv{constructor(e,t,i){super(e,t,Gy(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ii(this.firestore,null,new Ne(e))}withConverter(e){return new Gc(this.firestore,e,this._path)}}function Vi(n,e,...t){if(n=bt(n),arguments.length===1&&(e=Q1.newId()),Y4("doc","path",e),n instanceof cv){const i=xt.fromString(e,...t);return Wb(i),new ii(n,null,new Ne(i))}{if(!(n instanceof ii||n instanceof Gc))throw new Ie(le.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(xt.fromString(e,...t));return Wb(i),new ii(n.firestore,n instanceof Gc?n.converter:null,new Ne(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb="AsyncQueue";class Qb{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new BC(this,"async_queue_retry"),this.bu=()=>{const i=zg();i&&Ee(Yb,"Visibility state changed to "+i.visibilityState),this.a_.t_()},this.Su=e;const t=zg();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=zg();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new na;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Ql(e))throw e;Ee(Yb,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.Su.then(()=>(this.pu=!0,e().catch(i=>{this.gu=i,this.pu=!1;const a=function(c){let d=c.message||"";return c.stack&&(d=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),d}(i);throw nr("INTERNAL UNHANDLED ERROR: ",a),i}).then(i=>(this.pu=!1,i))));return this.Su=t,t}enqueueAfterDelay(e,t,i){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const a=sv.createAndSchedule(this,e,t,i,l=>this.Fu(l));return this.fu.push(a),a}Du(){this.gu&&ke()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class cp extends cv{constructor(e,t,i,a){super(e,t,i,a),this.type="firestore",this._queue=new Qb,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qb(e),this._firestoreClient=void 0,await e}}}function Z4(n,e){const t=typeof n=="object"?n:ay(),i=typeof n=="string"?n:Cd,a=Hd(t,"firestore").getImmediate({identifier:i});if(!a._initialized){const l=zA("firestore");l&&X4(a,...l)}return a}function rR(n){if(n._terminated)throw new Ie(le.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||J4(n),n._firestoreClient}function J4(n){var e,t,i;const a=n._freezeSettings(),l=function(d,p,m,y){return new mL(d,p,m,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,iR(y.experimentalLongPollingOptions),y.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,a);n._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=a.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),n._firestoreClient=new q4(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bl(yn.fromBase64String(e))}catch(t){throw new Ie(le.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Bl(yn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Ie(le.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _n(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Ie(le.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Ie(le.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return $e(this._lat,e._lat)||$e(this._long,e._long)}}/**
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
 */class dv{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,a){if(i.length!==a.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==a[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eV=/^__.*__$/;class tV{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Ea(e,this.data,this.fieldMask,t,this.fieldTransforms):new sh(e,this.data,t,this.fieldTransforms)}}class aR{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Ea(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function oR(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ke()}}class dp{constructor(e,t,i,a,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=a,l===void 0&&this.Bu(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new dp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:i,Qu:!1});return a.$u(e),a}Ku(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:i,Qu:!1});return a.Bu(),a}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Ld(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(oR(this.Lu)&&eV.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class nV{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||op(e)}ju(e,t,i,a=!1){return new dp({Lu:e,methodName:t,zu:i,path:_n.emptyPath(),Qu:!1,Gu:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lR(n){const e=n._freezeSettings(),t=op(n._databaseId);return new nV(n._databaseId,!!e.ignoreUndefinedProperties,t)}function iV(n,e,t,i,a,l={}){const c=n.ju(l.merge||l.mergeFields?2:0,e,t,a);mv("Data must be an object, but it was:",c,i);const d=uR(i,c);let p,m;if(l.merge)p=new ti(c.fieldMask),m=c.fieldTransforms;else if(l.mergeFields){const y=[];for(const S of l.mergeFields){const A=M_(e,S,t);if(!c.contains(A))throw new Ie(le.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);hR(y,A)||y.push(A)}p=new ti(y),m=c.fieldTransforms.filter(S=>p.covers(S.field))}else p=null,m=c.fieldTransforms;return new tV(new Wn(d),p,m)}class pp extends fp{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pp}}function sV(n,e,t){return new dp({Lu:3,zu:e.settings.zu,methodName:n._methodName,Qu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class pv extends fp{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=sV(this,e,!0),i=this.Hu.map(l=>lh(l,t)),a=new Ul(i);return new FL(e.path,a)}isEqual(e){return e instanceof pv&&ia(this.Hu,e.Hu)}}function rV(n,e,t,i){const a=n.ju(1,e,t);mv("Data must be an object, but it was:",a,i);const l=[],c=Wn.empty();va(i,(p,m)=>{const y=gv(e,p,t);m=bt(m);const S=a.Ku(y);if(m instanceof pp)l.push(y);else{const A=lh(m,S);A!=null&&(l.push(y),c.set(y,A))}});const d=new ti(l);return new aR(c,d,a.fieldTransforms)}function aV(n,e,t,i,a,l){const c=n.ju(1,e,t),d=[M_(e,i,t)],p=[a];if(l.length%2!=0)throw new Ie(le.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<l.length;A+=2)d.push(M_(e,l[A])),p.push(l[A+1]);const m=[],y=Wn.empty();for(let A=d.length-1;A>=0;--A)if(!hR(m,d[A])){const D=d[A];let V=p[A];V=bt(V);const G=c.Ku(D);if(V instanceof pp)m.push(D);else{const M=lh(V,G);M!=null&&(m.push(D),y.set(D,M))}}const S=new ti(m);return new aR(y,S,c.fieldTransforms)}function lh(n,e){if(cR(n=bt(n)))return mv("Unsupported field value:",e,n),uR(n,e);if(n instanceof fp)return function(i,a){if(!oR(a.Lu))throw a.Wu(`${i._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Wu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(i,a){const l=[];let c=0;for(const d of i){let p=lh(d,a.Uu(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(n,e)}return function(i,a){if((i=bt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return jL(a.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Yt.fromDate(i);return{timestampValue:Dd(a.serializer,l)}}if(i instanceof Yt){const l=new Yt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Dd(a.serializer,l)}}if(i instanceof fv)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Bl)return{bytesValue:NC(a.serializer,i._byteString)};if(i instanceof ii){const l=a.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw a.Wu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Yy(i.firestore._databaseId||a.databaseId,i._key.path)}}if(i instanceof dv)return function(c,d){return{mapValue:{fields:{[sC]:{stringValue:rC},[Rd]:{arrayValue:{values:c.toArray().map(m=>{if(typeof m!="number")throw d.Wu("VectorValues must only contain numeric values.");return Wy(d.serializer,m)})}}}}}}(i,a);throw a.Wu(`Unsupported field value: ${uv(i)}`)}(n,e)}function uR(n,e){const t={};return Z1(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):va(n,(i,a)=>{const l=lh(a,e.qu(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function cR(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Yt||n instanceof fv||n instanceof Bl||n instanceof ii||n instanceof fp||n instanceof dv)}function mv(n,e,t){if(!cR(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const i=uv(t);throw i==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+i)}}function M_(n,e,t){if((e=bt(e))instanceof hp)return e._internalPath;if(typeof e=="string")return gv(n,e);throw Ld("Field path arguments must be of type string or ",n,!1,void 0,t)}const oV=new RegExp("[~\\*/\\[\\]]");function gv(n,e,t){if(e.search(oV)>=0)throw Ld(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new hp(...e.split("."))._internalPath}catch{throw Ld(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ld(n,e,t,i,a){const l=i&&!i.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${a}`),p+=")"),new Ie(le.INVALID_ARGUMENT,d+n+p)}function hR(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e,t,i,a,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ii(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(dR("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class lV extends fR{data(){return super.data()}}function dR(n,e){return typeof e=="string"?gv(n,e):e instanceof hp?e._internalPath:e._delegate._internalPath}class uV{convertValue(e,t="none"){switch(ua(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(la(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ke()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return va(e,(a,l)=>{i[a]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,a;const l=(a=(i=(t=e.fields)===null||t===void 0?void 0:t[Rd].arrayValue)===null||i===void 0?void 0:i.values)===null||a===void 0?void 0:a.map(c=>Lt(c.doubleValue));return new dv(l)}convertGeoPoint(e){return new fv(Lt(e.latitude),Lt(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=ep(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(zc(e));default:return null}}convertTimestamp(e){const t=oa(e);return new Yt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=xt.fromString(e);ot(MC(i));const a=new Fc(i.get(1),i.get(3)),l=new Ne(i.popFirst(5));return a.isEqual(t)||nr(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cV(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hV{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pR extends fR{constructor(e,t,i,a,l,c){super(e,t,i,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new fV(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(dR("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class fV extends pR{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(n){n=go(n,ii);const e=go(n.firestore,cp);return $4(rR(e),n._key).then(t=>pV(e,n,t))}class dV extends uV{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bl(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ii(this.firestore,null,t)}}function Xb(n,e,t){n=go(n,ii);const i=go(n.firestore,cp),a=cV(n.converter,e);return mR(i,[iV(lR(i),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,fs.none())])}function uh(n,e,t,...i){n=go(n,ii);const a=go(n.firestore,cp),l=lR(a);let c;return c=typeof(e=bt(e))=="string"||e instanceof hp?aV(l,"updateDoc",n._key,e,t,i):rV(l,"updateDoc",n._key,e),mR(a,[c.toMutation(n._key,fs.exists(!0))])}function mR(n,e){return function(i,a){const l=new na;return i.asyncQueue.enqueueAndForget(async()=>P4(await W4(i),a,l)),l.promise}(rR(n),e)}function pV(n,e,t){const i=t.docs.get(e._key),a=new dV(n);return new pR(n,a,e._key,i,new hV(t.hasPendingWrites,t.fromCache),e.converter)}function mV(...n){return new pv("arrayUnion",n)}(function(e,t=!0){(function(a){$l=a})(ma),sa(new Js("firestore",(i,{instanceIdentifier:a,options:l})=>{const c=i.getProvider("app").getImmediate(),d=new cp(new JM(i.getProvider("auth-internal")),new nL(c,i.getProvider("app-check-internal")),function(m,y){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new Ie(le.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fc(m.options.projectId,y)}(c,a),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),wi(sb,rb,e),wi(sb,rb,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR="firebasestorage.googleapis.com",_R="storageBucket",gV=2*60*1e3,_V=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends gs{constructor(e,t,i=0){super(Hg(e),`Firebase Storage: ${t} (${Hg(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Dt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Hg(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ot;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ot||(Ot={}));function Hg(n){return"storage/"+n}function _v(){const n="An unknown error occurred, please check the error payload for server response.";return new Dt(Ot.UNKNOWN,n)}function yV(n){return new Dt(Ot.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function vV(n){return new Dt(Ot.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function EV(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Dt(Ot.UNAUTHENTICATED,n)}function TV(){return new Dt(Ot.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function SV(n){return new Dt(Ot.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function bV(){return new Dt(Ot.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function AV(){return new Dt(Ot.CANCELED,"User canceled the upload/download.")}function wV(n){return new Dt(Ot.INVALID_URL,"Invalid URL '"+n+"'.")}function CV(n){return new Dt(Ot.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function RV(){return new Dt(Ot.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+_R+"' property when initializing the app?")}function IV(){return new Dt(Ot.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function NV(){return new Dt(Ot.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function xV(n){return new Dt(Ot.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function L_(n){return new Dt(Ot.INVALID_ARGUMENT,n)}function yR(){return new Dt(Ot.APP_DELETED,"The Firebase app was deleted.")}function OV(n){return new Dt(Ot.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Oc(n,e){return new Dt(Ot.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function lc(n){throw new Dt(Ot.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Bn.makeFromUrl(e,t)}catch{return new Bn(e,"")}if(i.path==="")return i;throw CV(e)}static makeFromUrl(e,t){let i=null;const a="([A-Za-z0-9.\\-_]+)";function l(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const c="(/(.*))?$",d=new RegExp("^gs://"+a+c,"i"),p={bucket:1,path:3};function m(F){F.path_=decodeURIComponent(F.path)}const y="v[A-Za-z0-9_]+",S=t.replace(/[.]/g,"\\."),A="(/([^?#]*).*)?$",D=new RegExp(`^https?://${S}/${y}/b/${a}/o${A}`,"i"),V={bucket:1,path:3},G=t===gR?"(?:storage.googleapis.com|storage.cloud.google.com)":t,M="([^?#]*)",B=new RegExp(`^https?://${G}/${a}/${M}`,"i"),$=[{regex:d,indices:p,postModify:l},{regex:D,indices:V,postModify:m},{regex:B,indices:{bucket:1,path:2},postModify:m}];for(let F=0;F<$.length;F++){const re=$[F],_e=re.regex.exec(e);if(_e){const P=_e[re.indices.bucket];let R=_e[re.indices.path];R||(R=""),i=new Bn(P,R),re.postModify(i);break}}if(i==null)throw wV(e);return i}}class DV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kV(n,e,t){let i=1,a=null,l=null,c=!1,d=0;function p(){return d===2}let m=!1;function y(...M){m||(m=!0,e.apply(null,M))}function S(M){a=setTimeout(()=>{a=null,n(D,p())},M)}function A(){l&&clearTimeout(l)}function D(M,...B){if(m){A();return}if(M){A(),y.call(null,M,...B);return}if(p()||c){A(),y.call(null,M,...B);return}i<64&&(i*=2);let $;d===1?(d=2,$=0):$=(i+Math.random())*1e3,S($)}let V=!1;function G(M){V||(V=!0,A(),!m&&(a!==null?(M||(d=2),clearTimeout(a),S(0)):M||(d=1)))}return S(0),l=setTimeout(()=>{c=!0,G(!0)},t),G}function PV(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MV(n){return n!==void 0}function LV(n){return typeof n=="object"&&!Array.isArray(n)}function yv(n){return typeof n=="string"||n instanceof String}function Zb(n){return vv()&&n instanceof Blob}function vv(){return typeof Blob<"u"}function U_(n,e,t,i){if(i<e)throw L_(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw L_(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function vR(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const a=e(i)+"="+e(n[i]);t=t+a+"&"}return t=t.slice(0,-1),t}var ao;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ao||(ao={}));/**
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
 */function UV(n,e){const t=n>=500&&n<600,a=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||a||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VV{constructor(e,t,i,a,l,c,d,p,m,y,S,A=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=a,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=d,this.errorCallback_=p,this.timeout_=m,this.progressCallback_=y,this.connectionFactory_=S,this.retry=A,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((D,V)=>{this.resolve_=D,this.reject_=V,this.start_()})}start_(){const e=(i,a)=>{if(a){i(!1,new Ff(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=d=>{const p=d.loaded,m=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,m)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const d=l.getErrorCode()===ao.NO_ERROR,p=l.getStatus();if(!d||UV(p,this.additionalRetryCodes_)&&this.retry){const y=l.getErrorCode()===ao.ABORT;i(!1,new Ff(!1,null,y));return}const m=this.successCodes_.indexOf(p)!==-1;i(!0,new Ff(m,l))})},t=(i,a)=>{const l=this.resolve_,c=this.reject_,d=a.connection;if(a.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());MV(p)?l(p):l()}catch(p){c(p)}else if(d!==null){const p=_v();p.serverResponse=d.getErrorText(),this.errorCallback_?c(this.errorCallback_(d,p)):c(p)}else if(a.canceled){const p=this.appDelete_?yR():AV();c(p)}else{const p=bV();c(p)}};this.canceled_?t(!1,new Ff(!1,null,!0)):this.backoffId_=kV(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&PV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ff{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function jV(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function BV(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function zV(n,e){e&&(n["X-Firebase-GMPID"]=e)}function FV(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function HV(n,e,t,i,a,l,c=!0){const d=vR(n.urlParams),p=n.url+d,m=Object.assign({},n.headers);return zV(m,e),jV(m,t),BV(m,l),FV(m,i),new VV(p,n.method,m,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,a,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qV(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function GV(...n){const e=qV();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(vv())return new Blob(n);throw new Dt(Ot.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function WV(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function KV(n){if(typeof atob>"u")throw xV("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class qg{constructor(e,t){this.data=e,this.contentType=t||null}}function $V(n,e){switch(n){case os.RAW:return new qg(ER(e));case os.BASE64:case os.BASE64URL:return new qg(TR(n,e));case os.DATA_URL:return new qg(QV(e),XV(e))}throw _v()}function ER(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=i,c=n.charCodeAt(++t);i=65536|(l&1023)<<10|c&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function YV(n){let e;try{e=decodeURIComponent(n)}catch{throw Oc(os.DATA_URL,"Malformed data URL.")}return ER(e)}function TR(n,e){switch(n){case os.BASE64:{const a=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(a||l)throw Oc(n,"Invalid character '"+(a?"-":"_")+"' found: is it base64url encoded?");break}case os.BASE64URL:{const a=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(a||l)throw Oc(n,"Invalid character '"+(a?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=KV(e)}catch(a){throw a.message.includes("polyfill")?a:Oc(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let a=0;a<t.length;a++)i[a]=t.charCodeAt(a);return i}class SR{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Oc(os.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=ZV(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function QV(n){const e=new SR(n);return e.base64?TR(os.BASE64,e.rest):YV(e.rest)}function XV(n){return new SR(n).contentType}function ZV(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,t){let i=0,a="";Zb(e)?(this.data_=e,i=e.size,a=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=a}size(){return this.size_}type(){return this.type_}slice(e,t){if(Zb(this.data_)){const i=this.data_,a=WV(i,e,t);return a===null?null:new Qr(a)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new Qr(i,!0)}}static getBlob(...e){if(vv()){const t=e.map(i=>i instanceof Qr?i.data_:i);return new Qr(GV.apply(null,t))}else{const t=e.map(c=>yv(c)?$V(os.RAW,c).data:c.data_);let i=0;t.forEach(c=>{i+=c.byteLength});const a=new Uint8Array(i);let l=0;return t.forEach(c=>{for(let d=0;d<c.length;d++)a[l++]=c[d]}),new Qr(a,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(n){let e;try{e=JSON.parse(n)}catch{return null}return LV(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JV(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function ej(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function bR(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tj(n,e){return e}class Vn{constructor(e,t,i,a){this.server=e,this.local=t||e,this.writable=!!i,this.xform=a||tj}}let Hf=null;function nj(n){return!yv(n)||n.length<2?n:bR(n)}function AR(){if(Hf)return Hf;const n=[];n.push(new Vn("bucket")),n.push(new Vn("generation")),n.push(new Vn("metageneration")),n.push(new Vn("name","fullPath",!0));function e(l,c){return nj(c)}const t=new Vn("name");t.xform=e,n.push(t);function i(l,c){return c!==void 0?Number(c):c}const a=new Vn("size");return a.xform=i,n.push(a),n.push(new Vn("timeCreated")),n.push(new Vn("updated")),n.push(new Vn("md5Hash",null,!0)),n.push(new Vn("cacheControl",null,!0)),n.push(new Vn("contentDisposition",null,!0)),n.push(new Vn("contentEncoding",null,!0)),n.push(new Vn("contentLanguage",null,!0)),n.push(new Vn("contentType",null,!0)),n.push(new Vn("metadata","customMetadata",!0)),Hf=n,Hf}function ij(n,e){function t(){const i=n.bucket,a=n.fullPath,l=new Bn(i,a);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function sj(n,e,t){const i={};i.type="file";const a=t.length;for(let l=0;l<a;l++){const c=t[l];i[c.local]=c.xform(i,e[c.server])}return ij(i,n),i}function wR(n,e,t){const i=Ev(e);return i===null?null:sj(n,i,t)}function rj(n,e,t,i){const a=Ev(e);if(a===null||!yv(a.downloadTokens))return null;const l=a.downloadTokens;if(l.length===0)return null;const c=encodeURIComponent;return l.split(",").map(m=>{const y=n.bucket,S=n.fullPath,A="/b/"+c(y)+"/o/"+c(S),D=ch(A,t,i),V=vR({alt:"media",token:m});return D+V})[0]}function aj(n,e){const t={},i=e.length;for(let a=0;a<i;a++){const l=e[a];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}/**
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
 */const Jb="prefixes",eA="items";function oj(n,e,t){const i={prefixes:[],items:[],nextPageToken:t.nextPageToken};if(t[Jb])for(const a of t[Jb]){const l=a.replace(/\/$/,""),c=n._makeStorageReference(new Bn(e,l));i.prefixes.push(c)}if(t[eA])for(const a of t[eA]){const l=n._makeStorageReference(new Bn(e,a.name));i.items.push(l)}return i}function lj(n,e,t){const i=Ev(t);return i===null?null:oj(n,e,i)}class mp{constructor(e,t,i,a){this.url=e,this.method=t,this.handler=i,this.timeout=a,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(n){if(!n)throw _v()}function uj(n,e){function t(i,a){const l=wR(n,a,e);return Tv(l!==null),l}return t}function cj(n,e){function t(i,a){const l=lj(n,e,a);return Tv(l!==null),l}return t}function hj(n,e){function t(i,a){const l=wR(n,a,e);return Tv(l!==null),rj(l,a,n.host,n._protocol)}return t}function Sv(n){function e(t,i){let a;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?a=TV():a=EV():t.getStatus()===402?a=vV(n.bucket):t.getStatus()===403?a=SV(n.path):a=i,a.status=t.getStatus(),a.serverResponse=i.serverResponse,a}return e}function CR(n){const e=Sv(n);function t(i,a){let l=e(i,a);return i.getStatus()===404&&(l=yV(n.path)),l.serverResponse=a.serverResponse,l}return t}function fj(n,e,t,i,a){const l={};e.isRoot?l.prefix="":l.prefix=e.path+"/",t.length>0&&(l.delimiter=t),i&&(l.pageToken=i),a&&(l.maxResults=a);const c=e.bucketOnlyServerUrl(),d=ch(c,n.host,n._protocol),p="GET",m=n.maxOperationRetryTime,y=new mp(d,p,cj(n,e.bucket),m);return y.urlParams=l,y.errorHandler=Sv(e),y}function dj(n,e,t){const i=e.fullServerUrl(),a=ch(i,n.host,n._protocol),l="GET",c=n.maxOperationRetryTime,d=new mp(a,l,hj(n,t),c);return d.errorHandler=CR(e),d}function pj(n,e){const t=e.fullServerUrl(),i=ch(t,n.host,n._protocol),a="DELETE",l=n.maxOperationRetryTime;function c(p,m){}const d=new mp(i,a,c,l);return d.successCodes=[200,204],d.errorHandler=CR(e),d}function mj(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function gj(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=mj(null,e)),i}function _j(n,e,t,i,a){const l=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function d(){let $="";for(let F=0;F<2;F++)$=$+Math.random().toString().slice(2);return $}const p=d();c["Content-Type"]="multipart/related; boundary="+p;const m=gj(e,i,a),y=aj(m,t),S="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+y+`\r
--`+p+`\r
Content-Type: `+m.contentType+`\r
\r
`,A=`\r
--`+p+"--",D=Qr.getBlob(S,i,A);if(D===null)throw IV();const V={name:m.fullPath},G=ch(l,n.host,n._protocol),M="POST",B=n.maxUploadRetryTime,H=new mp(G,M,uj(n,t),B);return H.urlParams=V,H.headers=c,H.body=D.uploadData(),H.errorHandler=Sv(e),H}class yj{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ao.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ao.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ao.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,a){if(this.sent_)throw lc("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),a!==void 0)for(const l in a)a.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,a[l].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw lc("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw lc("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw lc("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw lc("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class vj extends yj{initXhr(){this.xhr_.responseType="text"}}function gp(){return new vj}/**
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
 */class _o{constructor(e,t){this._service=e,t instanceof Bn?this._location=t:this._location=Bn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new _o(e,t)}get root(){const e=new Bn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return bR(this._location.path)}get storage(){return this._service}get parent(){const e=JV(this._location.path);if(e===null)return null;const t=new Bn(this._location.bucket,e);return new _o(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw OV(e)}}function Ej(n,e,t){n._throwIfRoot("uploadBytes");const i=_j(n.storage,n._location,AR(),new Qr(e,!0),t);return n.storage.makeRequestWithTokens(i,gp).then(a=>({metadata:a,ref:n}))}function Tj(n){const e={prefixes:[],items:[]};return RR(n,e).then(()=>e)}async function RR(n,e,t){const a=await Sj(n,{pageToken:t});e.prefixes.push(...a.prefixes),e.items.push(...a.items),a.nextPageToken!=null&&await RR(n,e,a.nextPageToken)}function Sj(n,e){e!=null&&typeof e.maxResults=="number"&&U_("options.maxResults",1,1e3,e.maxResults);const t=e||{},i=fj(n.storage,n._location,"/",t.pageToken,t.maxResults);return n.storage.makeRequestWithTokens(i,gp)}function bj(n){n._throwIfRoot("getDownloadURL");const e=dj(n.storage,n._location,AR());return n.storage.makeRequestWithTokens(e,gp).then(t=>{if(t===null)throw NV();return t})}function Aj(n){n._throwIfRoot("deleteObject");const e=pj(n.storage,n._location);return n.storage.makeRequestWithTokens(e,gp)}function wj(n,e){const t=ej(n._location.path,e),i=new Bn(n._location.bucket,t);return new _o(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cj(n){return/^[A-Za-z]+:\/\//.test(n)}function Rj(n,e){return new _o(n,e)}function IR(n,e){if(n instanceof bv){const t=n;if(t._bucket==null)throw RV();const i=new _o(t,t._bucket);return e!=null?IR(i,e):i}else return e!==void 0?wj(n,e):n}function Ij(n,e){if(e&&Cj(e)){if(n instanceof bv)return Rj(n,e);throw L_("To use ref(service, url), the first argument must be a Storage instance.")}else return IR(n,e)}function tA(n,e){const t=e==null?void 0:e[_R];return t==null?null:Bn.makeFromBucketSpec(t,n)}function Nj(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:a}=i;a&&(n._overrideAuthToken=typeof a=="string"?a:qA(a,n.app.options.projectId))}class bv{constructor(e,t,i,a,l){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=a,this._firebaseVersion=l,this._bucket=null,this._host=gR,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gV,this._maxUploadRetryTime=_V,this._requests=new Set,a!=null?this._bucket=Bn.makeFromBucketSpec(a,this._host):this._bucket=tA(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Bn.makeFromBucketSpec(this._url,e):this._bucket=tA(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){U_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){U_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(jn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new _o(this,e)}_makeRequest(e,t,i,a,l=!0){if(this._deleted)return new DV(yR());{const c=HV(e,this._appId,i,a,t,this._firebaseVersion,l);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[i,a]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,a).getPromise()}}const nA="@firebase/storage",iA="0.13.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR="storage";function xj(n,e,t){return n=bt(n),Ej(n,e,t)}function Oj(n){return n=bt(n),Tj(n)}function sA(n){return n=bt(n),bj(n)}function Dj(n){return n=bt(n),Aj(n)}function Gg(n,e){return n=bt(n),Ij(n,e)}function kj(n=ay(),e){n=bt(n);const i=Hd(n,NR).getImmediate({identifier:e}),a=zA("storage");return a&&Pj(i,...a),i}function Pj(n,e,t,i={}){Nj(n,e,t,i)}function Mj(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),a=n.getProvider("app-check-internal");return new bv(t,i,a,e,ma)}function Lj(){sa(new Js(NR,Mj,"PUBLIC").setMultipleInstances(!0)),wi(nA,iA,""),wi(nA,iA,"esm2017")}Lj();const Uj={apiKey:"AIzaSyDWN5GCnrhUqKZlOt8Rxb0n748lhPf9B58",authDomain:"to-do-list-9cf11.firebaseapp.com",databaseURL:"https://to-do-list-9cf11-default-rtdb.firebaseio.com",projectId:"to-do-list-9cf11",storageBucket:"to-do-list-9cf11.firebasestorage.app",messagingSenderId:"44862500438",appId:"1:44862500438:web:ccb0f012d9c8e7cfe215f7",measurementId:"G-HB8NT8L1FD"},Vj={apiKey:"AIzaSyC_SdildU9oD7BID8i4GdReOYM0_qlguN0",authDomain:"databased-react.firebaseapp.com",databaseURL:"https://databased-react-default-rtdb.firebaseio.com",projectId:"databased-react",storageBucket:"databased-react.appspot.com",messagingSenderId:"82890993147",appId:"1:82890993147:web:77b68d26108894eeeaef5e",measurementId:"G-Y0JTK4KL1P"},xR=ry(Uj,"FIRST_APP"),ji=Z4(xR),In=lk(xR),jj=ry(Vj,"SECOND_APP"),Wg=kj(jj),Bj=({setPaging:n,editing:e,setPage:t,indicated:i,setIndicated:a,showTaskPrompt:l,url:c,setUrl:d,showSignInPrompt:p,showSignUpPrompt:m,setShowSignInPrompt:y,setShowSignUpPrompt:S,user:A,continueAs:D,setIsSigningOut:V,showNavBar:G,showSaveChanges:M,setShowSaveChanges:B,setShowNavbar:H,setShowMakeUserSignIn:$,getAccountInformation:F,setShowPersonalInformation:re})=>{const[_e,P]=te.useState(!1),R=[{content:"Home",link:"#Home",icon:()=>v.jsx("i",{className:"fa fa-home"}),paging:1},{content:"Tasks",link:"#Tasks",icon:()=>v.jsx("i",{className:"fa fa-book"}),paging:2},{content:"About",link:"#About",icon:()=>v.jsx("i",{className:"fa fa-user"}),paging:3},{content:"Contacts",link:"#Contacts",icon:()=>v.jsx("i",{className:"fa fa-phone"}),paging:4}],I=k=>{let L=window.location.href;L.toLowerCase();let x=L.search("/Acad/");L=L.slice(0,x+6),d(L.concat(k))},N=(k,L)=>{const x=JSON.parse(localStorage.getItem("Changes"));A!=null?x==null?(a(0),t(k.paging),I(k.link)):(B(!0),H(!1),P(!1),n({link:k.link,page:k.paging})):(x==null&&k.paging!=2&&(a(0),t(k.paging),I(k.link)),k.paging==2&&($(!0),P(!1))),console.log(k)};return v.jsxs(v.Fragment,{children:[v.jsxs("nav",{className:!p&&!m&&!l&&!e&&!D&&G?ft.nav:ft.hideNav,children:[v.jsxs("div",{className:ft.left,children:[v.jsx("img",{src:"./web-icon.png",className:ft.icon}),v.jsx("h1",{children:"ACAD"})]}),v.jsx("div",{className:ft.middle,children:v.jsx("ul",{className:ft.NavLinks,children:R.map((k,L)=>v.jsx("li",{onClick:()=>{N(k)},className:i===L?ft.indicated:ft.notIndicated,children:v.jsxs("a",{href:M?null:k.link,children:[k.icon()," ",v.jsxs("span",{children:[k.content,v.jsx("span",{className:ft.indication})]})]})},k.link))})}),A?v.jsxs("div",{className:`${ft.right} ${ft.LoggedIn}`,children:[v.jsx(me,{icon:v.jsx("i",{className:"fa fa-user"}),className:`${ft.User_Button}`,content:"Account",func:()=>{F(),re(!0)}}),v.jsx(me,{content:"Sign Out",func:()=>{V(!0)},className:ft.SignUpButt}),v.jsx(me,{className:ft.HamburgerButt,func:()=>{P(!0)},content:v.jsx("i",{className:"fa fa-list-ul"})})]}):v.jsxs("div",{className:`${ft.right} ${ft.notLoggedIn}`,children:[v.jsx(me,{content:"Sign In",func:()=>{y(!0)},className:ft.SignInButt}),v.jsx(me,{content:"Sign Up",func:()=>{S(!0)},className:ft.SignUpButt}),v.jsx(me,{className:ft.HamburgerButt,func:()=>{P(!0)},content:v.jsx("i",{className:"fa fa-list-ul"})})]})]}),v.jsx("div",{className:_e&&!M?ft.sidebar:ft.hideSideBar,children:v.jsxs("ul",{className:_e?ft.NavLinks:ft.hideNavLinks,children:[v.jsx(me,{className:ft.HamburgerButt,func:()=>{P(!_e)},content:v.jsx("i",{className:"fa fa-list-ul"})}),R.map((k,L)=>v.jsx("li",{onClick:()=>{N(k)},className:i===L?ft.indicated:ft.notIndicated,children:v.jsxs("a",{href:M?null:k.link,children:[k.icon()," ",v.jsxs("span",{children:[k.content,v.jsx("span",{className:ft.indication})]})]})},k.link))]})})]})},zj=({page:n,setPage:e,setIndicated:t,indicated:i})=>v.jsxs("div",{className:n==1?Hs.home_wrapper:Hs.hideHome,id:"Home",children:[v.jsxs("div",{className:`${Hs.left} ${W0.animateLeft}`,children:[v.jsxs("div",{className:Hs.wrapTop,children:[v.jsx("h1",{children:"Welcome User!"}),v.jsx("p",{children:"Write, read and document your work and studies using the Acad Web App for free!"}),v.jsx("a",{href:"#Tasks",children:v.jsx(me,{content:"Get Started",func:()=>{e(2),t(1)}})})]}),v.jsxs("div",{className:Hs.wrapBottom,children:[v.jsx(me,{className:Hs.orange}),v.jsx(me,{className:Hs.purple}),v.jsx(me,{className:Hs.blue})]})]}),v.jsx("div",{className:Hs.right,children:v.jsx("img",{src:"./StartingPage/Working.png",className:W0.animateImg})})]}),Fj="_Task_Container_efcfg_1",Hj="_tasks_efcfg_47",qj="_Finished_efcfg_71",Gj="_unchecked_efcfg_95",Wj="_checked_efcfg_103",Kj="_col_efcfg_111",$j="_br_efcfg_119",Yj="_fs_efcfg_127",Qj="_bgC_efcfg_135",Xj="_fW_efcfg_143",qn={Task_Container:Fj,tasks:Hj,Finished:qj,unchecked:Gj,checked:Wj,col:Kj,br:$j,fs:Yj,bgC:Qj,fW:Xj},Zj=({handleSelectedTasks:n,selectTask:e,tasks:t,setTasks:i,searching:a,filteredTask:l,setFilteredTask:c,setOpenedTask:d,setEditing:p,type:m,sorting:y,sortOptions:S})=>{const[A,D]=te.useState(t.map(B=>({...B,isChecked:!1})));function V(B){let H=t,$=[];H=H.map(F=>F.id===B?{...F,isChecked:!F.isChecked}:F);for(let F=0;F<H.length;F++)H[F].isChecked&&$.push({id:H[F].id,index:F}),F==H.length-1&&(n($),$=[]);i(F=>F.map(re=>re.id===B?{...re,isChecked:!re.isChecked}:re)),a&&c(F=>F.map(re=>re.id===B?{...re,isChecked:!re.isChecked}:re))}te.useEffect(()=>{D([...t])},[t]);const G=()=>{if(a&&l!=null)return v.jsx("div",{className:qn.Task_Container,children:l.map((B,H)=>{if(B.type==="pending"&&m==="Pending")return v.jsx(M,{task:B,i:H},B.id);if(B.type==="finished"&&m==="Finished")return v.jsx(M,{task:B,i:H},B.id);if(m==="All Tasks")return v.jsx(M,{task:B,i:H},B.id)})},"Task_Container");if(y&&!a){let B=A;for(let H in S)H==0&&S[H].state==!0?B=B.sort(($,F)=>F.dateCreated.time-$.dateCreated.time):H==1&&S[H].state==!0?B=B.sort(($,F)=>$.dateCreated.time-F.dateCreated.time):H==2&&S[H].state==!0?B=B.sort(($,F)=>$.task.localeCompare(F.task)):H==3&&S[H].state==!0&&(B=B.sort(($,F)=>F.task.localeCompare($.task)));return v.jsx("div",{className:qn.Task_Container,children:B.map((H,$)=>{if(H.type==="pending"&&m==="Pending")return v.jsx(M,{task:H,i:$},H.id);if(H.type==="finished"&&m==="Finished")return v.jsx(M,{task:H,i:$},H.id);if(m==="All Tasks")return v.jsx(M,{task:H,i:$},H.id)})})}else if(!y&&!a)return v.jsx("div",{className:qn.Task_Container,children:A.map((B,H)=>{if(B.type==="pending"&&m==="Pending")return v.jsx(M,{task:B,i:H},B.id);if(B.type==="finished"&&m==="Finished")return v.jsx(M,{task:B,i:H},B.id);if(m==="All Tasks")return v.jsx(M,{task:B,i:H},B.id)})})},M=({task:B,i:H})=>v.jsxs("label",{htmlFor:"task"+B.id,style:B.style!="default"?{...B.style}:null,className:B.type=="pending"?`${qn.Pending} ${B.cName.map($=>JSON.parse($)).join(" ")} ${qn.tasks}`:`${qn.Finished} ${B.cName.map($=>JSON.parse($)).join(" ")} ${qn.tasks}`,onDoubleClick:()=>{p(!0),d({id:B.id,isOpened:!0})},children:[v.jsx("i",{style:e==!1?{display:"none"}:{display:"block"},className:`fa fa-check-square ${B.isChecked===!0?qn.checked:qn.unchecked}`}),v.jsx("input",{style:{display:"none"},type:"checkbox",id:"task"+B.id,onChange:()=>{e&&V(B.id)}}),B.task]},B.id);if(A!=null)return v.jsx(v.Fragment,{children:v.jsx(G,{})})},Jj="_Bottom_Options_14lht_1",e9="_toLeft_14lht_31",t9="_toRight_14lht_31",n9="_Unchecked_14lht_57",i9="_hide_14lht_105",qr={Bottom_Options:Jj,toLeft:e9,toRight:t9,Unchecked:n9,hide:i9},s9=({handleSelectedTasks:n,selectedTask:e,selectTask:t,setSelectTask:i,unselectAll:a,tasks:l,setTasks:c,searching:d,updateTasks:p,setUpdateTasks:m,filteredTasks:y,setFilteredTasks:S,handleMarking:A})=>{const D=()=>{let M=l,B=y,H=[],$=[];if(d){B=B.map(F=>({...F,isChecked:!0}));for(let F=0;F<B.length;F++)B[F].isChecked&&$.push({id:B[F].id,index:F});n([...$])}else{M=M.map(F=>({...F,isChecked:!0}));for(let F=0;F<M.length;F++)M[F].isChecked&&H.push({id:M[F].id,index:F});n([...H])}d?S([...B]):m(F=>F.map(re=>({...re,isChecked:!0})))};function V(){let M=l,B=y;for(let H in B)for(let $ in e)B[H].id===e[$].id&&B.splice(H,1);for(let H in l)for(let $ in e)M[H].id===e[$].id&&M.splice(H,1);A(B,[...M]),n(null)}const G=()=>t==!0?v.jsx(v.Fragment,{children:v.jsxs("div",{className:qr.toLeft,children:[v.jsx(me,{content:v.jsx("span",{children:" Select All"}),icon:v.jsx("i",{className:"fa fa-check"}),className:qr.SelectAllButton,func:()=>{D()}}),v.jsx(me,{content:v.jsx("span",{children:" Unselect All"}),icon:v.jsx("i",{className:`fas fa fa-check ${qr.Unchecked}`}),className:qr.UnselectAllButton,func:()=>{a()}})]})}):v.jsx(v.Fragment,{children:v.jsx(me,{content:"Select",icon:v.jsx("i",{className:"fa fa-hand-o-up"}),className:qr.SelectButton,func:()=>i(!0)})});return v.jsx(v.Fragment,{children:v.jsxs("div",{className:qr.Bottom_Options,children:[v.jsx(G,{}),v.jsxs("div",{className:t==!0?qr.toRight:qr.hide,children:[v.jsx(me,{icon:v.jsx("i",{className:"fa fa-trash"}),content:" Delete",func:M=>{t?V():console.log("No update")}}),v.jsx(me,{icon:v.jsx("i",{className:"fa fa-close"}),content:" Cancel",func:()=>{i(!1),a()}})]})]})})},r9="_DropDown_Body_1ouwm_1",a9="_Hide_DropDown_Body_1ouwm_1",o9="_Dropdown_Wrapper_1ouwm_27",l9="_Not_Indicated_1ouwm_59",u9="_Indicated_1ouwm_69",uc={DropDown_Body:r9,Hide_DropDown_Body:a9,Dropdown_Wrapper:o9,Not_Indicated:l9,Indicated:u9},c9=({setType:n,showDropDown:e,handleType:t,unselectAll:i})=>{const a=["Pending","Finished","All Tasks"],[l,c]=te.useState(0);return v.jsx(v.Fragment,{children:v.jsx("div",{className:e?uc.DropDown_Body:uc.Hide_DropDown_Body,onClick:()=>{t()},children:v.jsx("ul",{className:uc.Dropdown_Wrapper,children:a.map((d,p)=>v.jsx("li",{className:l==p?uc.Indicated:uc.Not_Indicated,onClick:()=>{n(a[p]),c(p),i()},children:d},a[p]))})})})},h9="_Options_tab_yd1ph_1",f9="_Prompt_Box_yd1ph_21",d9="_Close_Button_yd1ph_63",p9="_colorPicker_yd1ph_145",m9="_Hide_BG_Color_Prompt_yd1ph_177",g9="_Hide_Color_Prompt_yd1ph_179",_9="_Hide_Border_Color_Prompt_yd1ph_181",y9="_Hide_Font_Weight_Prompt_yd1ph_183",v9="_Hide_Italic_Prompt_yd1ph_185",E9="_BG_Color_Prompt_yd1ph_193",T9="_Color_Prompt_yd1ph_195",S9="_Border_Color_Prompt_yd1ph_197",b9="_Font_Weight_Prompt_yd1ph_199",A9="_Italic_Prompt_yd1ph_201",w9="_Wrap_Options_Tab_yd1ph_209",C9="_createTask_yd1ph_299",R9="_notWorking_yd1ph_321",ze={Options_tab:h9,Prompt_Box:f9,Close_Button:d9,colorPicker:p9,Hide_BG_Color_Prompt:m9,Hide_Color_Prompt:g9,Hide_Border_Color_Prompt:_9,Hide_Font_Weight_Prompt:y9,Hide_Italic_Prompt:v9,BG_Color_Prompt:E9,Color_Prompt:T9,Border_Color_Prompt:S9,Font_Weight_Prompt:b9,Italic_Prompt:A9,Wrap_Options_Tab:w9,createTask:C9,notWorking:R9},I9=({selectedTask:n,filteredTasks:e,updateTasks:t,searching:i,optionTabNumber:a,handleMarking:l,unselectAll:c,setShowTaskPrompt:d,setShowSortPrompt:p,numberOfChanges:m,setNumberOfChanges:y,user:S,setUpdateTask:A,setLoading:D,setShowNavbar:V})=>{var Se;const[G,M]=te.useState(a),[B,H]=te.useState(!1),[$,F]=te.useState(!1),[re,_e]=te.useState(!1),[P,R]=te.useState(!1),[I,N]=te.useState(!1),[k,L]=te.useState(!1);function x(he,be,b,Z,ve,fe){if(n.length>=1){let Q=t,oe=t,ne=e,xe=[];for(let ye in n)if(i)for(let pe in ne)ne[pe].id==n[ye].id?(he!=!1&&(ne[n[ye].index].type=he,xe.push(ne[n[ye].index])),he==!1&&((ne[pe].style=="default"||ne[pe].style==null)&&(ne[pe].style={color:"default",border:"default",fontStyle:"default",backgroundColor:"default",fontWeight:"default"}),be&&(ne[pe].style.color=be,xe.push(ne[pe])),b&&(ne[pe].style.backgroundColor=b,xe.push(ne[pe])),Z&&(ne[pe].style.fontWeight=Z,xe.push(ne[pe])),ve&&(ne[pe].style.fontStyle=ve,xe.push(ne[pe])),fe&&(ne[pe].style.borderColor=fe,xe.push(ne[pe])))):xe.push(ne[n[ye].index]);for(let ye in n)oe=oe.map(pe=>{if(n[ye].id==pe.id){let Re={...pe};return Re.style=Re.style==="default"?{color:"default",border:"default",fontStyle:"default",backgroundColor:"default",fontWeight:"default"}:{...Re.style},he!==!1&&(Re.type=he),be&&(Re.style={...Re.style,color:be}),b&&(Re.style={...Re.style,backgroundColor:b}),Z&&(Re.style={...Re.style,fontWeight:Z}),ve&&(Re.style={...Re.style,fontStyle:ve}),fe&&(Re.style={...Re.style,borderColor:fe}),Re.isChecked=!0,Re}else return{...pe}});i?l([...ne],[...oe],Q):l(ne,[...oe],Q)}}function je(){let he=m+1,be=JSON.parse(localStorage.getItem("Changes"));be=be[he],A([...be]),y(he),console.log(JSON.parse(localStorage.getItem("Changes")))}function qe(){let he=m-1,be=JSON.parse(localStorage.getItem("Changes"));be=be[he],A([...be]),y(he),console.log(JSON.parse(localStorage.getItem("Changes")))}const ce=async()=>{D(!0),V(!1);let he=JSON.parse(localStorage.getItem("Changes"));he=[...he[m]],he=he.map(Z=>({...Z,isChecked:!1}));const be=S==null?void 0:S.uid.toString(),b=Vi(ji,`Users/${be}`);try{await uh(b,{tasks:he}),y(null),A([...he]),localStorage.removeItem("Changes")}catch(Z){alert(Z.message)}V(!0),D(!1)};return te.useEffect(()=>{M(a)},[a]),te.useEffect(()=>{console.log(n)},[n]),v.jsxs("div",{className:ze.Options_tab,children:[v.jsxs("div",{className:$?`${ze.BG_Color_Prompt} ${ze.Prompt_Box}`:`${ze.Hide_BG_Color_Prompt} ${ze.Prompt_Box}`,children:[v.jsx(me,{icon:v.jsx("i",{className:"fa fa-close"}),className:`${ze.Close_Button}`,func:()=>{F(!1)}}),v.jsx("h1",{children:"Change BG Color"}),v.jsxs("label",{htmlFor:"colorPicker",className:ze.colorPicker,children:[v.jsx("input",{type:"color",id:"colorPicker",onBlur:he=>{x(!1,!1,he.target.value,!1,!1)}}),v.jsx("span",{children:"Choose BG Color"})]}),v.jsx(me,{content:"Default",func:()=>{x(!1,!1,"#f09c2e",!1,!1)}})]}),v.jsxs("div",{className:re?`${ze.Color_Prompt} ${ze.Prompt_Box}`:`${ze.Hide_Color_Prompt} ${ze.Prompt_Box}`,children:[v.jsx("h1",{children:"Change Font Color"}),v.jsx(me,{icon:v.jsx("i",{className:"fa fa-close"}),className:`${ze.Close_Button}`,func:()=>{_e(!1)}}),v.jsxs("label",{htmlFor:"bgColorPicker",className:`${ze.bgColorPicker} ${ze.colorPicker}`,children:[v.jsx("input",{type:"color",id:"bgColorPicker",onBlur:he=>{x(!1,he.target.value,!1,!1,!1)}}),v.jsx("span",{children:"Choose Font Color"})]}),v.jsx(me,{content:"Default",func:()=>{x(!1,"white",!1,!1,!1)}})]}),v.jsxs("div",{className:P?`${ze.Border_Color_Prompt} ${ze.Prompt_Box}`:`${ze.Hide_Border_Color_Prompt} ${ze.Prompt_Box}`,children:[v.jsx("h1",{children:"Change Border Color"}),v.jsx(me,{icon:v.jsx("i",{className:"fa fa-close"}),className:`${ze.Close_Button}`,func:()=>{R(!1)}}),v.jsxs("label",{htmlFor:"borderColorPicker",className:`${ze.borderColorPicker} ${ze.colorPicker}`,children:[v.jsx("input",{type:"color",id:"borderColorPicker",onBlur:he=>{x(!1,!1,!1,!1,!1,he.target.value)}}),v.jsx("span",{children:"Choose Border Color"})]}),v.jsx(me,{content:"Default",func:()=>{x(!1,!1,!1,!1,!1,"#d16c06")}})]}),v.jsxs("div",{className:I?`${ze.Font_Weight_Prompt} ${ze.Prompt_Box}`:`${ze.Hide_Font_Weight_Prompt} ${ze.Prompt_Box}`,children:[v.jsx("h1",{children:"Change Font Weight"}),v.jsx(me,{icon:v.jsx("i",{className:"fa fa-close"}),className:`${ze.Close_Button}`,func:()=>{N(!1)}}),v.jsx(me,{content:"Normal",func:()=>{x(!1,!1,!1,"Normal",!1,!1)}}),v.jsx(me,{content:"Bold",func:()=>{x(!1,!1,!1,"Bold",!1,!1)}}),v.jsx(me,{content:"Bolder",func:()=>{x(!1,!1,!1,"Bolder",!1,!1)}})]}),v.jsxs("div",{className:k?`${ze.Italic_Prompt} ${ze.Prompt_Box}`:`${ze.Hide_Italic_Prompt} ${ze.Prompt_Box}`,children:[v.jsx("h1",{children:"Change Italization"}),v.jsx(me,{icon:v.jsx("i",{className:"fa fa-close"}),className:`${ze.Close_Button}`,func:()=>{L(!1)}}),v.jsx(me,{content:"Normal",func:()=>{x(!1,!1,!1,!1,"Normal",!1)}}),v.jsx(me,{content:"Italic",func:()=>{x(!1,!1,!1,!1,"Italic",!1)}})]}),v.jsxs("div",{className:ze.Wrap_Options_Tab,children:[v.jsx(me,{icon:v.jsx("i",{className:"fa fa-save"}),content:"Save Changes",className:m==null?`${ze.notWorking}`:null,func:()=>{m!=null&&ce()}}),v.jsx(me,{icon:v.jsx("i",{className:"material-icons",children:"undo"}),content:"Undo",className:m==null||m==0?`${ze.notWorking}`:null,func:()=>{m>0&&qe()}}),v.jsx(me,{icon:v.jsx("i",{className:"material-icons",children:"redo"}),content:"Redo",className:m<((Se=JSON.parse(localStorage.getItem("Changes")))==null?void 0:Se.length)-1&&m!=null?null:`${ze.notWorking}`,func:()=>{var he;m<((he=JSON.parse(localStorage.getItem("Changes")))==null?void 0:he.length)-1&&m!=null&&je()}}),v.jsx(me,{icon:v.jsx("i",{className:"fa fa-plus"}),content:v.jsx("span",{children:" Create New Task"}),className:ze.createTask,func:()=>{d(!0),V(!1)}}),v.jsx(me,{icon:v.jsx("i",{className:"fa fa-edit"}),content:v.jsx("span",{children:" Mark As Finished"}),func:()=>{x("finished","white","#51af0f",!1,!1,"rgb(8, 97, 20)")}}),v.jsx(me,{icon:v.jsx("i",{className:"fa fa-edit"}),content:v.jsx("span",{children:" Mark As Pending"}),func:()=>{x("pending","white","#f09c2e",!1,!1,"rgb(209, 108, 6)")}}),v.jsx(me,{icon:v.jsx("i",{className:"fa fa-sort"}),content:v.jsx("span",{children:" Sort"}),func:()=>{p(!0),V(!1)}}),v.jsx(me,{icon:v.jsx("i",{className:"material-icons",children:"format_color_fill"}),content:v.jsx("span",{children:" BG Color "}),func:()=>{F(!0),_e(!1),R(!1),N(!1),L(!1)}}),v.jsx(me,{icon:v.jsx("i",{className:"material-icons",children:"format_color_text"}),content:v.jsx("span",{children:" Font Color"}),func:()=>{_e(!0),F(!1),R(!1),N(!1,L(!1))}}),v.jsx(me,{icon:v.jsx("i",{className:"material-icons",children:"border_color"}),content:v.jsx("span",{children:" Border Color"}),func:()=>{R(!0),F(!1),_e(!1),N(!1),L(!1)}}),v.jsx(me,{icon:v.jsx("i",{className:"fa fa-bold"}),content:" Bold",className:`${ze.green} ${ze.black}`,func:()=>{R(!1),F(!1),_e(!1),N(!0),L(!1)}}),v.jsx(me,{icon:v.jsx("i",{className:"fa fa-italic"}),content:" Italic",func:()=>{R(!1),F(!1),_e(!1),N(!1),L(!0)}})]})]})},N9="_Task_View_19nr4_1",x9="_Hide_Task_View_19nr4_19",O9="_nav_19nr4_57",D9="_content_19nr4_127",k9="_submitButton_19nr4_173",cc={Task_View:N9,Hide_Task_View:x9,nav:O9,content:D9,submitButton:k9},P9=({openedTask:n,setOpenedTask:e,tasks:t,filteredTasks:i,setEditing:a,editing:l,user:c,handleMarking:d,setShowNavbar:p,setLoading:m})=>{const y=te.useRef(null);function S(){let A=[...t],D=i;for(let V in A)A[V].id===n.id&&(A[V].task=y.current.innerText);for(let V in D)D[V].id===n.id&&(D[V].task=y.current.innerText);d(D,[...A]),p(!0)}if(n.id!=null)return v.jsxs("div",{className:l?cc.Task_View:cc.Hide_Task_View,children:[v.jsxs("div",{className:cc.nav,children:[v.jsxs("h3",{children:[v.jsx("i",{className:"fa fa-edit"})," ",v.jsx("span",{children:"Edit Task"})]}),v.jsx(me,{icon:v.jsx("i",{className:"fa fa-times"}),func:()=>{e({index:null,isOpened:!1}),a(!1),p(!0)}})]}),v.jsx("div",{className:cc.content,children:v.jsx("p",{ref:y,contentEditable:l,children:t.map((A,D)=>{if(A.id===n.id)return A.task})})}),v.jsx(me,{content:"Save Changes",className:cc.submitButton,func:()=>{S(),a(!1)}})]})},M9="_Task_prompt_wrapper_hoxzz_1",L9="_Hide_task_prompt_wrapper_hoxzz_1",U9="_nav_hoxzz_41",V9="_content_hoxzz_111",j9="_submitButton_hoxzz_157",hc={Task_prompt_wrapper:M9,Hide_task_prompt_wrapper:L9,nav:U9,content:V9,submitButton:j9},B9=({showTaskPrompt:n,setShowTaskPrompt:e,writeTask:t,setShowNavbar:i})=>{const a=te.useRef(null),l=te.useRef(null),[c,d]=te.useState(!1);function p(){d(Math.random()*1)}function m(){t(l.current.innerText)}function y(){l.current.innerHTML="<br>",S()}function S(){l.current.innerText==`
`||l.current.innerHTML=="<br>"?a.current.style.display="block":a.current.style.display="none"}return te.useEffect(()=>{},[c]),v.jsx(v.Fragment,{children:v.jsxs("div",{className:n?hc.Task_prompt_wrapper:hc.Hide_task_prompt_wrapper,children:[v.jsxs("div",{className:hc.nav,children:[v.jsxs("h3",{children:[v.jsx("i",{className:"fa fa-edit"})," ",v.jsx("span",{children:"Task Prompt"})]}),v.jsx(me,{icon:v.jsx("i",{className:"fa fa-times"}),func:()=>{e(!1),y(),i(!0)}})]}),v.jsxs("div",{className:hc.content,children:[v.jsx("span",{ref:a,children:"Type Any Task..."}),v.jsx("p",{ref:l,contentEditable:"true",onInput:()=>{p(),S()}})]}),v.jsx(me,{content:"Submit",className:hc.submitButton,func:()=>{m(),e(!1),y(),i(!0)}})]})})},z9="_Sort_Wrapper_1nnq2_17",F9="_Hide_Sort_Wrapper_1nnq2_19",H9="_Sort_Box_1nnq2_51",q9="_Hide_Sort_Box_Button_1nnq2_75",G9="_Sort_Options_1nnq2_105",W9="_checked_1nnq2_153",K9="_unchecked_1nnq2_153",Gr={Sort_Wrapper:z9,Hide_Sort_Wrapper:F9,Sort_Box:H9,Hide_Sort_Box_Button:q9,Sort_Options:G9,checked:W9,unchecked:K9},$9=({setShowSortPrompt:n,showSortPrompt:e,sortOptions:t,setSortOptions:i,setSorting:a,setShowNavbar:l,showSaveChanges:c})=>{function d(p){let m=t;m=m.map((y,S)=>m[S]===m[p]?{...y,state:!y.state}:{...y,state:!1});for(let y in m){if(m[y].state==!0){a(!0);break}y==m.length-1&&!m[y].state&&a(!1)}i([...m])}return v.jsx("div",{className:e?Gr.Sort_Wrapper:Gr.Hide_Sort_Wrapper,children:v.jsxs("div",{className:e?Gr.Sort_Box:Gr.Hide_Sort_Box,children:[v.jsx("h2",{children:"Sort Settings"}),v.jsx(me,{icon:v.jsx("i",{className:"fa fa-close"}),className:Gr.Hide_Sort_Box_Button,func:()=>{n(!1),l(!0)}}),v.jsx("div",{className:Gr.Sort_Options,children:t.map((p,m)=>v.jsx(me,{icon:v.jsx("i",{className:`fa fa-check-square ${p.state==!0?Gr.checked:Gr.unchecked}`}),content:p.description,func:()=>{d(m),l(!1)}},p.description))})]})})},Y9="_Changes_Wrapper_26idq_1",Q9="_Changes_Box_26idq_27",X9="_Top_26idq_55",Z9="_Options_26idq_107",qf={Changes_Wrapper:Y9,Changes_Box:Q9,Top:X9,Options:Z9},J9=({showSaveChanges:n,setShowSaveChanges:e,setUpdateTask:t,setNumberOfChanges:i,numberOfChanges:a,user:l,paging:c,setPage:d,setShowNavbar:p,setLoading:m})=>{const y=async()=>{var V;let S=JSON.parse(localStorage.getItem("Changes"));S=[...S[a]],S=S.map(G=>({...G,isChecked:!1}));const A=(V=l==null?void 0:l.uid)==null?void 0:V.toString(),D=Vi(ji,`Users/${A}`);m(!0);try{if(await uh(D,{tasks:S}),i(null),t([...S]),localStorage.removeItem("Changes"),c){let G=window.location.href;G.toLowerCase();let M=G.search("/Acad/");G=G.slice(0,M+6),G=G.concat(c==null?void 0:c.link),window.location.href=G,d(c.page),m(fase)}}catch(G){alert("Error Saving Your Changes"),e(!1),console.log("Error writing task:",G),m(!1)}p(!0)};if(n)return v.jsx("div",{className:qf.Changes_Wrapper,children:v.jsxs("div",{className:qf.Changes_Box,children:[v.jsxs("div",{className:qf.Top,children:[v.jsx("i",{className:"fa fa-warning"}),v.jsx("h3",{children:"Would You Save Your Previous Changes?"})]}),v.jsxs("div",{className:qf.Options,children:[v.jsx(me,{content:"No",func:()=>{e(!1),localStorage.removeItem("Changes"),window.location.reload()}}),v.jsx(me,{content:"Yes",func:()=>{e(!1),y()}})]})]})})},e6="_Hide_Task_Wrapper_1397q_5",t6="_Task_Wrapper_1397q_13",n6="_Tasks_Editor_1397q_33",i6="_Search_wrapper_1397q_103",fl={Hide_Task_Wrapper:e6,Task_Wrapper:t6,Tasks_Editor:n6,Search_wrapper:i6},s6="_Loading_Wrapper_infip_25",r6="_Loading_Bar_infip_59",rA={Loading_Wrapper:s6,Loading_Bar:r6},a6=({loading:n})=>{if(n)return v.jsxs("div",{className:rA.Loading_Wrapper,children:[v.jsx("div",{className:rA.Loading_Bar}),"Loading..."]})},o6=({page:n,paging:e,setPage:t,setPaging:i,setEditing:a,editing:l,user:c,getTask:d,setShowNavbar:p,setShowSaveChanges:m,showSaveChanges:y,setLoading:S})=>{const A=JSON.parse(localStorage.getItem("Changes")),D=te.useRef(null),[V,G]=te.useState(!1),[M,B]=te.useState(!1),[H,$]=te.useState(!1),[F,re]=te.useState(!1),[_e,P]=te.useState(!1),[R,I]=te.useState(!1),[N,k]=te.useState([]),[L,x]=te.useState(1),[je,qe]=te.useState("Pending"),[ce,Se]=te.useState(d),[he,be]=te.useState(A?A.length-1:null),[b,Z]=te.useState(ce.map(X=>({...X,isChecked:!1}))),[ve,fe]=te.useState(null),[Q,oe]=te.useState({index:null,isOpened:!1}),[ne,xe]=te.useState(null),[ye,pe]=te.useState([{description:"Newest to Oldest",state:!1},{description:"Oldest to Newest",state:!1},{description:"From A-Z",state:!1},{description:"From Z-A",state:!1}]);function Re(){$(!1)}const wt=async X=>{var Ta;let Ge=[...ce];const kt=(Ta=c.uid)==null?void 0:Ta.toString(),Ut=Vi(ji,"Users",kt);let _s="qwertyuiopasdfghjklzxcvbnm",ai="";for(let vt=0;vt<10;vt++){let Vt=Math.floor(Math.random()*_s.length);ai=ai.concat(_s[Vt])}let un={id:ai,task:X,dateCreated:{fullDate:new Date,time:Date.now()},selected:!1,style:"default",cName:[JSON.stringify(qn.col),JSON.stringify(qn.br),JSON.stringify(qn.fs),JSON.stringify(qn.bgC),JSON.stringify(qn.fW)],isChecked:!1,type:"pending"};Ge.unshift(un);try{await uh(Ut,{tasks:mV(un)}),I(!1),Z([...Ge])}catch(vt){console.log("Error writing task:",vt)}};function Xt(X,Ge,kt){const Ut=JSON.parse(localStorage.getItem("Changes"))!=null?JSON.parse(localStorage.getItem("Changes")):[];Ut.length==0&&Ut.push(b),Ut.length>=1&&Ut.push(Ge),localStorage.setItem("Changes",JSON.stringify(Ut)),be(Ut.length-1),N.length>=1&&(M&&fe([...X]),Z([...Ge]))}function Zt(){D.current.value==""?B(!1):(B(!0),fe(ce.filter(X=>X.task.toLowerCase().includes(D.current.value.toLowerCase()))),re(!1))}function Dn(X){k(X==null?[]:[...X])}function ri(X){oe(X)}function zn(){let X=ye;for(let Ge=0;Ge<ye.length;Ge++)if(X[Ge].state==!0){re(!0);break}else Ge==ye.length-1&&ye[Ge].state==!1&&re(!1)}const Bi=()=>{let X=ce,Ge=ve;M?(Ge=Ge.map(kt=>({...kt,isChecked:!1})),Dn(null)):(X=X.map(kt=>({...kt,isChecked:!1})),Dn(null)),Z(kt=>kt.map(Ut=>({...Ut,isChecked:!1}))),M&&fe([...Ge])};if(te.useEffect(()=>{Se([...b]),fe([...b.filter(X=>{var Ge;return X.task.toLowerCase().includes((Ge=D.current)==null?void 0:Ge.value.toLowerCase())})])},[b]),te.useEffect(()=>{d!=null&&d.tasks?Z(d.tasks):Z([])},[d]),te.useEffect(()=>{const X=JSON.parse(localStorage.getItem("Changes"));(X==null?void 0:X.length)>=2&&(m(!0),p(!1))},[]),n==2)return v.jsx(v.Fragment,{children:v.jsxs("div",{className:n==2?fl.Task_Wrapper:fl.Hide_Task_Wrapper,id:"Tasks",children:[v.jsx(B9,{showTaskPrompt:R,setShowTaskPrompt:I,writeTask:X=>{wt(X)},setShowNavbar:X=>p(X)}),v.jsxs("div",{className:fl.Tasks_Editor,children:[v.jsxs("h2",{className:fl.Title_wrapper,children:["Tasks",v.jsx("i",{className:"fa fa-bars",onClick:()=>{$(!H)}}),v.jsx(c9,{type:je,setType:X=>{qe(X)},showDropDown:H,handleType:X=>{Re()},unselectAll:X=>{Bi()},setSortOptions:X=>{pe(X)},setSorting:X=>{re(X)}})]}),v.jsx(I9,{optionTabNumber:L,updateTasks:b,filteredTasks:ve,setShowTaskPrompt:X=>{I(X)},searching:M,setSearching:X=>B(X),handleSearch:()=>{Zt()},selectedTask:N,handleMarking:(X,Ge,kt)=>{Xt(X,Ge)},markAsPending:X=>{markAsPending(X)},unselectAll:()=>Bi(),setBgColor:X=>setBgColor(X),setColor:X=>setColor(X),setShowSortPrompt:X=>{P(X)},numberOfChanges:he,setNumberOfChanges:X=>be(X),user:c,setUpdateTask:X=>{Z(X)},setShowNavbar:X=>p(X),setLoading:X=>S(X)}),v.jsx("div",{className:fl.Search_wrapper,children:v.jsxs("div",{children:[v.jsx("label",{htmlFor:"search-bar",children:v.jsx("i",{className:"fa fa-search"})}),v.jsx("input",{ref:D,id:"search-bar",type:"text",placeholder:"Type Task...",onChange:()=>{D.current.value==""&&(zn(),Zt())}}),v.jsx(me,{content:"Search",className:fl.Search_button,func:()=>{Zt(),zn()}})]})}),v.jsx(s9,{selectedTask:N,handleSelectedTasks:X=>Dn(X),selectTask:V,setSelectTask:G,unselectAll:()=>{Bi()},tasks:ce,setTasks:X=>{Z(X)},filteredTasks:ve,setFilteredTasks:X=>{fe(X)},searching:M,setUpdateTasks:X=>Z(X),updateTasks:b,handleMarking:(X,Ge,kt)=>{Xt(X,Ge)}}),v.jsx(Zj,{selectedTasks:N,setSelectedTasks:()=>k(),selectTask:V,tasks:ce,setTasks:X=>{Se(X)},del:X=>{del(X)},handleSelectedTasks:X=>Dn(X),filteredTask:ve,setFilteredTask:X=>{fe(X)},searching:M,handleOpenedTask:X=>{ri(X)},openedTask:Q,setShowTaskPrompt:X=>{I(X)},editing:l,setEditing:X=>{a(X)},setOpenedTask:X=>{oe(X)},type:je,setSorting:X=>{re(X)},sorting:F,sortOptions:ye}),v.jsx(P9,{openedTask:Q,setOpenedTask:X=>{oe(X)},tasks:ce,filteredTasks:ve,saveChanges:(X,Ge)=>{saveChanges(X,Ge)},editing:l,searching:M,setEditing:X=>{a(X)},editedValue:ne,user:c,setUpdateTask:X=>{Z(X)},setShowNavbar:X=>{p(X)},setLoading:X=>S(X),handleMarking:(X,Ge)=>Xt(X,Ge)}),v.jsx($9,{showSortPrompt:_e,setShowSortPrompt:X=>{P(X)},sortOptions:ye,setSortOptions:X=>{pe(X)},setSorting:X=>{re(X)},sorting:F,setShowNavbar:X=>{p(X)}}),v.jsx(J9,{showSaveChanges:y,numberOfChanges:he,setNumberOfChanges:X=>be(X),user:c,setUpdateTask:X=>{Z(X)},setPaging:X=>{i(X)},paging:e,setPage:X=>{t(X)},setShowSaveChanges:X=>{m(X)},setShowNavbar:X=>{p(X)},setLoading:X=>S(X)})]})]})})},l6="_Account_Information_Wrapper_9sx46_1",u6="_Hide_Account_Information_Wrapper_9sx46_1",c6="_navBar_9sx46_41",h6="_Account_Information_Box_9sx46_71",f6="_left_9sx46_105",d6="_right_9sx46_129",qs={Account_Information_Wrapper:l6,Hide_Account_Information_Wrapper:u6,navBar:c6,Account_Information_Box:h6,left:f6,right:d6},p6="_Actions_Tab_Wrapper_f5cg2_1",m6="_editButt_f5cg2_13",g6="_Hide_Prompt_Button_f5cg2_59",Gf={Actions_Tab_Wrapper:p6,editButt:m6,Hide_Prompt_Button:g6},_6=({editAccount:n,setEditAccount:e,saveAccountChanges:t,setShowPersonalInformation:i,setShowChanges:a})=>{function l(){n?a(!0):(i(!1),e(!1))}const c=()=>n?v.jsx(v.Fragment,{children:v.jsx(me,{icon:v.jsx("i",{className:"fa fa-save"}),content:"SaveChanges",className:Gf.editButt,func:()=>{t(),e(!1)}})}):v.jsx(v.Fragment,{children:v.jsx(me,{icon:v.jsx("i",{className:"fa fa-edit"}),content:"Edit Information",className:Gf.editButt,func:()=>{e(!0)}})});return v.jsxs("div",{className:Gf.Actions_Tab_Wrapper,children:[v.jsx(c,{}),v.jsx(me,{icon:v.jsx("i",{className:"fa fa-close"}),className:Gf.Hide_Prompt_Button,func:()=>{l()}})]})},y6="_Profile_Img_Wrapper_n1umg_1",v6="_profPic_n1umg_17",E6="_uploadPictureWrapper_n1umg_39",T6="_showUploadedPictures_n1umg_89",S6="_hideUploadedPictures_n1umg_89",b6="_uploadedPicBox_n1umg_129",A6="_bottom_n1umg_181",w6="_clearButt_n1umg_199",C6="_hidePromptButt_n1umg_281",Gs={Profile_Img_Wrapper:y6,profPic:v6,uploadPictureWrapper:E6,showUploadedPictures:T6,hideUploadedPictures:S6,uploadedPicBox:b6,bottom:A6,clearButt:w6,hidePromptButt:C6};MA();const R6=({accInformation:n,editAccount:e,user:t,setLoading:i})=>{const a=te.useRef(),[l,c]=te.useState(!1),[d,p]=te.useState([]),[m,y]=te.useState([]),S=async()=>{var G;i(!0);try{let M=[];const B=await Oj(Gg(Wg,(G=In.currentUser)==null?void 0:G.uid));for(let H in B.items){const $=await sA(B.items[H]);M.unshift({img:$,id:Math.random()*1,fileName:B.items[H].name})}p([...M])}catch(M){console.log(M)}i(!1)},A=async G=>{i(!0);const M=G;if(M){let B="qwertyuiopasdfghjklzxcvbnm",H="";for(let F=0;F<15;F++){let re=Math.floor(Math.random()*B.length);H=H.concat(B[re])}const $=Gg(Wg,In.currentUser.uid+`/${M.name+"_"+H}`);await xj($,M),sA($).then(F=>{p(re=>[{img:F,id:Math.random()*1,fileName:M.name+"_"+H},...re])})}else console.log("No file selected.");i(!1)},D=async G=>{var M;i(!0);try{await uh(Vi(ji,"Users",(M=In.currentUser)==null?void 0:M.uid),{profPic:G}),a.current.style.backgroundImage=`url(${G})`}catch(B){console.log(B)}i(!1)},V=async G=>{var M;i(!0);try{await Dj(Gg(Wg,`/${(M=In.currentUser)==null?void 0:M.uid}/${G}`)),S()}catch(B){console.log(B)}i(!1)};return te.useEffect(()=>{S()},[t]),v.jsxs("div",{className:Gs.Profile_Img_Wrapper,children:[v.jsx("div",{ref:a,className:Gs.profPic,style:n!=null&&n.profPic?{backgroundImage:`url(${n.profPic})`}:{backgroundImage:"url(./blue-circle-with-white-user.png)"}}),v.jsxs("div",{className:Gs.uploadPictureWrapper,children:[e?v.jsx(me,{content:"Change Profile",func:()=>{c(!l)}}):v.jsx("h2",{children:"Profile Picture"}),v.jsx("div",{className:l?Gs.showUploadedPictures:Gs.hideUploadedPictures,children:v.jsxs("div",{className:Gs.uploadedPicBox,children:[v.jsx(me,{icon:v.jsx("i",{className:"fa fa-close"}),className:Gs.hidePromptButt,func:()=>{c(!1)}}),v.jsx("h2",{children:"Upload Task"}),v.jsxs("div",{className:Gs.bottom,children:[v.jsx("label",{htmlFor:"imgInput",children:v.jsx("i",{className:"fa fa-plus"})}),v.jsx("input",{type:"file",accept:"image/*",id:"imgInput",onChange:G=>{A(G.target.files[0])},style:{display:"none"}}),d==null?void 0:d.map(G=>v.jsxs("div",{children:[v.jsx(me,{icon:v.jsx("i",{className:"fa fa-close"}),className:Gs.clearButt,func:()=>V(G==null?void 0:G.fileName)}),v.jsx("img",{src:G==null?void 0:G.img,onClick:()=>{D(G==null?void 0:G.img)}})]},G==null?void 0:G.id))]})]})})]})]})},I6="_Contacts_Wrapper_d9iqp_1",N6="_Contacts_Box_d9iqp_27",aA={Contacts_Wrapper:I6,Contacts_Box:N6},x6=({contacts:n,setContacts:e,editAccount:t})=>{const[i,a]=te.useState(null),[l,c]=te.useState(null),[d,p]=te.useState(n);function m(y,S){S.key!="Enter"?(a(y),c(S.target.value),p(A=>A.map((D,V)=>V==y?{...D,content:S.target.value}:{...D}))):(a(null),e([...d]))}return te.useEffect(()=>{p(n),console.log(n)},[n]),v.jsxs("div",{className:aA.Contacts_Wrapper,children:[v.jsx("h3",{children:"Contacts:"}),v.jsx("div",{className:aA.Contacts_Box,children:n==null?void 0:n.map((y,S)=>v.jsxs("li",{children:[v.jsx("i",{className:"material-icons",children:y.icon}),v.jsx("input",{rows:1,type:"text",value:S==i?l:y.content,style:t?{borderBottom:".2rem solid #EAAE2C"}:{borderBottom:"none"},contentEditable:!!t,onFocus:A=>{c(A.target.value),a(S),e([...d])},onChange:A=>{t&&m(S,A)},onBlur:A=>{c(A.target.value),a(S),e([...d])}},y.content)]},y.content))})]})},O6="_Skills_Wrapper_18hwh_1",D6="_Add_Skills_Wrapper_18hwh_19",k6="_Skills_Box_18hwh_55",P6="_hideInput_18hwh_135",M6="_showInput_18hwh_143",dl={Skills_Wrapper:O6,Add_Skills_Wrapper:D6,Skills_Box:k6,hideInput:P6,showInput:M6},L6=({skills:n,addSkill:e,editAccount:t,setSkills:i,skillRef:a})=>{const[l,c]=te.useState(!1);function d(){var m;((m=n==null?void 0:n.current)==null?void 0:m.value)==""||e(),c(!1),a.current.value=""}function p(m){let y=n;for(let S in y)m==S&&y.splice(S,1);i([...y])}return v.jsxs("form",{className:dl.Skills_Wrapper,onSubmit:m=>{m.preventDefault()},children:[v.jsxs("div",{className:dl.Add_Skills_Wrapper,children:[v.jsx("h3",{children:"Skills:"}),v.jsx("label",{htmlFor:"blankSkill",style:t?{display:"flex"}:{display:"none"},onClick:()=>c(!0),children:v.jsx("i",{className:"fa fa-plus"})})]}),v.jsxs("div",{className:dl.Skills_Box,children:[n==null?void 0:n.map((m,y)=>v.jsxs("li",{children:[v.jsx("span",{children:v.jsx("input",{type:"text",value:m,readOnly:!0})}),t?v.jsx(me,{icon:v.jsx("i",{className:"fa fa-close"}),className:dl.Hide_Prompt_Button,func:()=>{p(y)}}):null]},m)),v.jsxs("div",{className:l?dl.showInput:dl.hideInput,children:[v.jsx("input",{type:"text",id:"blankSkill",ref:a}),v.jsx(me,{content:"Submit",func:()=>{d()}})]})]})]})},U6="_Forms_Wrapper_cer17_1",V6="_accountInfoWrapper_cer17_15",j6="_inputWrapper_cer17_29",bi={Forms_Wrapper:U6,accountInfoWrapper:V6,inputWrapper:j6},B6=({editAccount:n,accInformation:e,uName:t,setUName:i,school:a,setSchool:l,pBirth:c,setPBirth:d,age:p,setAge:m,bDay:y,setBDay:S,gender:A,setGender:D,hobbies:V,setHobbies:G,grSec:M,setGrSec:B,usingAs:H,setUsingAs:$})=>v.jsxs("div",{className:bi.Forms_Wrapper,children:[v.jsxs("div",{className:bi.accountInfoWrapper,children:[v.jsxs("div",{className:bi.inputWrapper,children:[v.jsx("h4",{children:"Username:"}),v.jsx("input",{onChange:F=>{n&&i(F.target.value)},type:"text",placeholder:"Ex. Peter M. Dela Cruz",value:t||""})]}),v.jsxs("div",{className:bi.inputWrapper,children:[v.jsx("h4",{children:"School:"}),v.jsx("input",{onChange:F=>{n&&l(F.target.value)},type:"text",placeholder:"Ex. Lolomboy National High School",value:a||""})]}),v.jsxs("div",{className:bi.inputWrapper,children:[v.jsx("h4",{children:"Gr/Section:"}),v.jsx("input",{onChange:F=>{n&&B(F.target.value)},type:"text",placeholder:"Ex. 10-Rizal",value:M||""})]})]}),v.jsxs("div",{className:bi.accountInfoWrapper,children:[v.jsxs("div",{className:bi.inputWrapper,children:[v.jsx("h4",{children:"Place of Birth:"}),v.jsx("input",{onChange:F=>{n&&d(F.target.value)},type:"text",placeholder:"Ex. Marilao, Bulacan",value:c||""})]}),v.jsxs("div",{className:bi.inputWrapper,children:[v.jsx("h4",{children:"Age:"}),v.jsx("input",{onChange:F=>{n&&m(F.target.value)},type:"text",placeholder:"Ex. 26",value:p||""})]}),v.jsxs("div",{className:bi.inputWrapper,children:[v.jsx("h4",{children:"Birthday:"}),v.jsx("input",{onChange:F=>{n&&S(F.target.value)},type:"text",placeholder:"Ex. December 31, 2007",value:y||""})]})]}),v.jsxs("div",{className:bi.accountInfoWrapper,children:[v.jsxs("div",{className:bi.inputWrapper,children:[v.jsx("h4",{children:"Gender:"}),v.jsx("input",{onChange:F=>{n&&D(F.target.value)},type:"text",placeholder:"Ex. Male",value:A||""})]}),v.jsxs("div",{className:bi.inputWrapper,children:[v.jsx("h4",{children:"Hobbies:"}),v.jsx("input",{onChange:F=>{n&&G(F.target.value)},type:"text",placeholder:"Ex. Eating, Coding",value:V||""})]})]})]}),z6="_Selections_Wrapper_1ig0i_1",F6="_top_1ig0i_13",H6="_Subjects_Wrapper_1ig0i_83",q6="_makeSubjectButt_1ig0i_97",G6="_IndicatedButt_1ig0i_125",W6="_notIndicatedButt_1ig0i_135",K6="_hideMakeSubjectButt_1ig0i_145",$6="_bottom_1ig0i_173",is={Selections_Wrapper:z6,top:F6,Subjects_Wrapper:H6,makeSubjectButt:q6,IndicatedButt:G6,notIndicatedButt:W6,hideMakeSubjectButt:K6,bottom:$6},Y6=({accInformation:n,editAccount:e,setFavSubjects:t,purpose:i,setPurpose:a,usingAs:l,setUsingAs:c})=>{const d=te.useRef(),[p,m]=te.useState(null),[y,S]=te.useState(!1),[A,D]=te.useState(0);function V(B){const H=B==null?void 0:B.target;(H==null?void 0:H.value)!=""&&(B==null?void 0:B.key)=="Enter"&&A==0?(D($=>$+1),S(!1),m($=>{var F;return[{content:(F=d.current)==null?void 0:F.value,testClass:!0},...$]})):(H==null?void 0:H.value)==""&&(B==null?void 0:B.key)=="Enter"&&(H.value="",S(!1))}function G(B){m(H=>H.map(($,F)=>F==B?{...$,testClass:$.testClass!=!0}:{...$}))}function M(){let B=p,H=[];for(let $ in p)B[$].testClass==!0&&H.push(B[$]);m([...H])}return te.useEffect(()=>{p&&t([...p])},[p]),te.useEffect(()=>{n!=null&&n.favSubjects&&m([...n.favSubjects])},[n]),v.jsxs("div",{className:is.Selections_Wrapper,children:[v.jsxs("div",{className:is.top,children:[v.jsxs("h3",{children:[v.jsx("span",{children:"Favourite Subjects"}),v.jsxs("label",{htmlFor:y?"makesubject":"",style:e?{display:"flex"}:{display:"none"},children:[v.jsx("i",{className:"fa fa-plus",onClick:()=>{S(!0),D(0),d.current.value=""}}),v.jsx("i",{className:"fa fa-trash",onClick:()=>{M()}})]})]}),v.jsxs("div",{className:is.Subjects_Wrapper,children:[v.jsx(me,{element:v.jsx("input",{type:"text",id:"makesubject",ref:d,onKeyDown:B=>{V(B)},onBlur:B=>{d.current.value!=""&&(console.log(d.current.value),m(H=>H.filter($=>$.content.toLowerCase()!==d.current.value.toLowerCase())),m(H=>{var $;return[{content:($=d.current)==null?void 0:$.value,testClass:!0},...H]}),D(H=>H+1)),S(!1)}}),className:y?is.makeSubjectButt:is.hideMakeSubjectButt}),p==null?void 0:p.map((B,H)=>v.jsx(me,{func:()=>{e&&G(H)},className:B.testClass==!0?is.IndicatedButt:is.notIndicatedButt,content:p[H].content},B+H.toString()))]})]}),v.jsxs("div",{className:is.bottom,children:[v.jsxs("div",{className:is.Purpose_Wrapper,children:[v.jsx("h3",{children:v.jsx("span",{children:"Using As:"})}),e?v.jsx("textarea",{type:"text",contentEditable:!!e,onChange:B=>{c(B.target.value)},rows:"1",value:l}):v.jsx("p",{children:l})]}),v.jsxs("div",{className:is.Using_As_Wrapper,children:[v.jsx("h3",{children:v.jsx("span",{children:"Purpose"})}),e?v.jsx("textarea",{type:"text",contentEditable:!!e,onChange:B=>{a(B.target.value)},value:i}):v.jsx("p",{children:i})]})]})]})},Q6="_bioWrapper_dzyxs_1",X6={bioWrapper:Q6},Z6=({editAccount:n,desc:e,setDesc:t})=>v.jsxs("div",{className:X6.bioWrapper,children:[v.jsx("h3",{children:v.jsx("span",{children:"Bio"})}),n?v.jsx("textarea",{rows:4,contentEditable:!!n,onChange:i=>{t(i.target.value)},value:e}):v.jsx("p",{children:e})]}),J6="_Changes_Wrapper_1t1ha_1",e3="_Changes_Box_1t1ha_29",t3="_Top_1t1ha_57",n3="_Options_1t1ha_109",Wf={Changes_Wrapper:J6,Changes_Box:e3,Top:t3,Options:n3},i3=({showChanges:n,setShowChanges:e,setShowPersonalInfo:t,saveAccountChanges:i,setEditAccount:a})=>{if(n)return v.jsx("div",{className:Wf.Changes_Wrapper,children:v.jsxs("div",{className:Wf.Changes_Box,children:[v.jsxs("div",{className:Wf.Top,children:[v.jsx("i",{className:"fa fa-warning"}),v.jsx("h3",{children:"Would You Save Your Previous Changes?"})]}),v.jsxs("div",{className:Wf.Options,children:[v.jsx(me,{content:"No",func:()=>{window.location.reload()}}),v.jsx(me,{content:"Yes",func:()=>{e(!1),i(),t(!1),a(!1)}})]})]})})};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function s3(n,e,t){return(e=a3(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function oA(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,i)}return t}function ue(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?oA(Object(t),!0).forEach(function(i){s3(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):oA(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function r3(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function a3(n){var e=r3(n,"string");return typeof e=="symbol"?e:e+""}const lA=()=>{};let Av={},OR={},DR=null,kR={mark:lA,measure:lA};try{typeof window<"u"&&(Av=window),typeof document<"u"&&(OR=document),typeof MutationObserver<"u"&&(DR=MutationObserver),typeof performance<"u"&&(kR=performance)}catch{}const{userAgent:uA=""}=Av.navigator||{},fa=Av,_t=OR,cA=DR,Kf=kR;fa.document;const or=!!_t.documentElement&&!!_t.head&&typeof _t.addEventListener=="function"&&typeof _t.createElement=="function",PR=~uA.indexOf("MSIE")||~uA.indexOf("Trident/");var o3=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,l3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,MR={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},u3={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},LR=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],On="classic",_p="duotone",c3="sharp",h3="sharp-duotone",UR=[On,_p,c3,h3],f3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},d3={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},p3=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),m3={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},g3=["fak","fa-kit","fakd","fa-kit-duotone"],hA={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},_3=["kit"],y3={kit:{"fa-kit":"fak"}},v3=["fak","fakd"],E3={kit:{fak:"fa-kit"}},fA={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},$f={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},T3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],S3=["fak","fa-kit","fakd","fa-kit-duotone"],b3={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},A3={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},w3={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},V_={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},C3=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],j_=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...T3,...C3],R3=["solid","regular","light","thin","duotone","brands"],VR=[1,2,3,4,5,6,7,8,9,10],I3=VR.concat([11,12,13,14,15,16,17,18,19,20]),N3=[...Object.keys(w3),...R3,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",$f.GROUP,$f.SWAP_OPACITY,$f.PRIMARY,$f.SECONDARY].concat(VR.map(n=>"".concat(n,"x"))).concat(I3.map(n=>"w-".concat(n))),x3={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const sr="___FONT_AWESOME___",B_=16,jR="fa",BR="svg-inline--fa",yo="data-fa-i2svg",z_="data-fa-pseudo-element",O3="data-fa-pseudo-element-pending",wv="data-prefix",Cv="data-icon",dA="fontawesome-i2svg",D3="async",k3=["HTML","HEAD","STYLE","SCRIPT"],zR=(()=>{try{return!0}catch{return!1}})();function hh(n){return new Proxy(n,{get(e,t){return t in e?e[t]:e[On]}})}const FR=ue({},MR);FR[On]=ue(ue(ue(ue({},{"fa-duotone":"duotone"}),MR[On]),hA.kit),hA["kit-duotone"]);const P3=hh(FR),F_=ue({},m3);F_[On]=ue(ue(ue(ue({},{duotone:"fad"}),F_[On]),fA.kit),fA["kit-duotone"]);const pA=hh(F_),H_=ue({},V_);H_[On]=ue(ue({},H_[On]),E3.kit);const Rv=hh(H_),q_=ue({},A3);q_[On]=ue(ue({},q_[On]),y3.kit);hh(q_);const M3=o3,HR="fa-layers-text",L3=l3,U3=ue({},f3);hh(U3);const V3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Kg=u3,j3=[..._3,...N3],Dc=fa.FontAwesomeConfig||{};function B3(n){var e=_t.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function z3(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}_t&&typeof _t.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[t,i]=e;const a=z3(B3(t));a!=null&&(Dc[i]=a)});const qR={styleDefault:"solid",familyDefault:On,cssPrefix:jR,replacementClass:BR,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Dc.familyPrefix&&(Dc.cssPrefix=Dc.familyPrefix);const zl=ue(ue({},qR),Dc);zl.autoReplaceSvg||(zl.observeMutations=!1);const we={};Object.keys(qR).forEach(n=>{Object.defineProperty(we,n,{enumerable:!0,set:function(e){zl[n]=e,kc.forEach(t=>t(we))},get:function(){return zl[n]}})});Object.defineProperty(we,"familyPrefix",{enumerable:!0,set:function(n){zl.cssPrefix=n,kc.forEach(e=>e(we))},get:function(){return zl.cssPrefix}});fa.FontAwesomeConfig=we;const kc=[];function F3(n){return kc.push(n),()=>{kc.splice(kc.indexOf(n),1)}}const Wr=B_,ls={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function H3(n){if(!n||!or)return;const e=_t.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;const t=_t.head.childNodes;let i=null;for(let a=t.length-1;a>-1;a--){const l=t[a],c=(l.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(c)>-1&&(i=l)}return _t.head.insertBefore(e,i),n}const q3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Wc(){let n=12,e="";for(;n-- >0;)e+=q3[Math.random()*62|0];return e}function Zl(n){const e=[];for(let t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function Iv(n){return n.classList?Zl(n.classList):(n.getAttribute("class")||"").split(" ").filter(e=>e)}function GR(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function G3(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,'="').concat(GR(n[t]),'" '),"").trim()}function yp(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,": ").concat(n[t].trim(),";"),"")}function Nv(n){return n.size!==ls.size||n.x!==ls.x||n.y!==ls.y||n.rotate!==ls.rotate||n.flipX||n.flipY}function W3(n){let{transform:e,containerWidth:t,iconWidth:i}=n;const a={transform:"translate(".concat(t/2," 256)")},l="translate(".concat(e.x*32,", ").concat(e.y*32,") "),c="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),d="rotate(".concat(e.rotate," 0 0)"),p={transform:"".concat(l," ").concat(c," ").concat(d)},m={transform:"translate(".concat(i/2*-1," -256)")};return{outer:a,inner:p,path:m}}function K3(n){let{transform:e,width:t=B_,height:i=B_,startCentered:a=!1}=n,l="";return a&&PR?l+="translate(".concat(e.x/Wr-t/2,"em, ").concat(e.y/Wr-i/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Wr,"em), calc(-50% + ").concat(e.y/Wr,"em)) "):l+="translate(".concat(e.x/Wr,"em, ").concat(e.y/Wr,"em) "),l+="scale(".concat(e.size/Wr*(e.flipX?-1:1),", ").concat(e.size/Wr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var $3=`:root, :host {
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
}`;function WR(){const n=jR,e=BR,t=we.cssPrefix,i=we.replacementClass;let a=$3;if(t!==n||i!==e){const l=new RegExp("\\.".concat(n,"\\-"),"g"),c=new RegExp("\\--".concat(n,"\\-"),"g"),d=new RegExp("\\.".concat(e),"g");a=a.replace(l,".".concat(t,"-")).replace(c,"--".concat(t,"-")).replace(d,".".concat(i))}return a}let mA=!1;function $g(){we.autoAddCss&&!mA&&(H3(WR()),mA=!0)}var Y3={mixout(){return{dom:{css:WR,insertCss:$g}}},hooks(){return{beforeDOMElementCreation(){$g()},beforeI2svg(){$g()}}}};const rr=fa||{};rr[sr]||(rr[sr]={});rr[sr].styles||(rr[sr].styles={});rr[sr].hooks||(rr[sr].hooks={});rr[sr].shims||(rr[sr].shims=[]);var us=rr[sr];const KR=[],$R=function(){_t.removeEventListener("DOMContentLoaded",$R),Vd=1,KR.map(n=>n())};let Vd=!1;or&&(Vd=(_t.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(_t.readyState),Vd||_t.addEventListener("DOMContentLoaded",$R));function Q3(n){or&&(Vd?setTimeout(n,0):KR.push(n))}function fh(n){const{tag:e,attributes:t={},children:i=[]}=n;return typeof n=="string"?GR(n):"<".concat(e," ").concat(G3(t),">").concat(i.map(fh).join(""),"</").concat(e,">")}function gA(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var Yg=function(e,t,i,a){var l=Object.keys(e),c=l.length,d=t,p,m,y;for(i===void 0?(p=1,y=e[l[0]]):(p=0,y=i);p<c;p++)m=l[p],y=d(y,e[m],m,e);return y};function X3(n){const e=[];let t=0;const i=n.length;for(;t<i;){const a=n.charCodeAt(t++);if(a>=55296&&a<=56319&&t<i){const l=n.charCodeAt(t++);(l&64512)==56320?e.push(((a&1023)<<10)+(l&1023)+65536):(e.push(a),t--)}else e.push(a)}return e}function G_(n){const e=X3(n);return e.length===1?e[0].toString(16):null}function Z3(n,e){const t=n.length;let i=n.charCodeAt(e),a;return i>=55296&&i<=56319&&t>e+1&&(a=n.charCodeAt(e+1),a>=56320&&a<=57343)?(i-55296)*1024+a-56320+65536:i}function _A(n){return Object.keys(n).reduce((e,t)=>{const i=n[t];return!!i.icon?e[i.iconName]=i.icon:e[t]=i,e},{})}function W_(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=t,a=_A(e);typeof us.hooks.addPack=="function"&&!i?us.hooks.addPack(n,_A(e)):us.styles[n]=ue(ue({},us.styles[n]||{}),a),n==="fas"&&W_("fa",e)}const{styles:Kc,shims:J3}=us,YR=Object.keys(Rv),e5=YR.reduce((n,e)=>(n[e]=Object.keys(Rv[e]),n),{});let xv=null,QR={},XR={},ZR={},JR={},eI={};function t5(n){return~j3.indexOf(n)}function n5(n,e){const t=e.split("-"),i=t[0],a=t.slice(1).join("-");return i===n&&a!==""&&!t5(a)?a:null}const tI=()=>{const n=i=>Yg(Kc,(a,l,c)=>(a[c]=Yg(l,i,{}),a),{});QR=n((i,a,l)=>(a[3]&&(i[a[3]]=l),a[2]&&a[2].filter(d=>typeof d=="number").forEach(d=>{i[d.toString(16)]=l}),i)),XR=n((i,a,l)=>(i[l]=l,a[2]&&a[2].filter(d=>typeof d=="string").forEach(d=>{i[d]=l}),i)),eI=n((i,a,l)=>{const c=a[2];return i[l]=l,c.forEach(d=>{i[d]=l}),i});const e="far"in Kc||we.autoFetchSvg,t=Yg(J3,(i,a)=>{const l=a[0];let c=a[1];const d=a[2];return c==="far"&&!e&&(c="fas"),typeof l=="string"&&(i.names[l]={prefix:c,iconName:d}),typeof l=="number"&&(i.unicodes[l.toString(16)]={prefix:c,iconName:d}),i},{names:{},unicodes:{}});ZR=t.names,JR=t.unicodes,xv=vp(we.styleDefault,{family:we.familyDefault})};F3(n=>{xv=vp(n.styleDefault,{family:we.familyDefault})});tI();function Ov(n,e){return(QR[n]||{})[e]}function i5(n,e){return(XR[n]||{})[e]}function ro(n,e){return(eI[n]||{})[e]}function nI(n){return ZR[n]||{prefix:null,iconName:null}}function s5(n){const e=JR[n],t=Ov("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function da(){return xv}const iI=()=>({prefix:null,iconName:null,rest:[]});function r5(n){let e=On;const t=YR.reduce((i,a)=>(i[a]="".concat(we.cssPrefix,"-").concat(a),i),{});return UR.forEach(i=>{(n.includes(t[i])||n.some(a=>e5[i].includes(a)))&&(e=i)}),e}function vp(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:t=On}=e,i=P3[t][n];if(t===_p&&!n)return"fad";const a=pA[t][n]||pA[t][i],l=n in us.styles?n:null;return a||l||null}function a5(n){let e=[],t=null;return n.forEach(i=>{const a=n5(we.cssPrefix,i);a?t=a:i&&e.push(i)}),{iconName:t,rest:e}}function yA(n){return n.sort().filter((e,t,i)=>i.indexOf(e)===t)}function Ep(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:t=!1}=e;let i=null;const a=j_.concat(S3),l=yA(n.filter(S=>a.includes(S))),c=yA(n.filter(S=>!j_.includes(S))),d=l.filter(S=>(i=S,!LR.includes(S))),[p=null]=d,m=r5(l),y=ue(ue({},a5(c)),{},{prefix:vp(p,{family:m})});return ue(ue(ue({},y),c5({values:n,family:m,styles:Kc,config:we,canonical:y,givenPrefix:i})),o5(t,i,y))}function o5(n,e,t){let{prefix:i,iconName:a}=t;if(n||!i||!a)return{prefix:i,iconName:a};const l=e==="fa"?nI(a):{},c=ro(i,a);return a=l.iconName||c||a,i=l.prefix||i,i==="far"&&!Kc.far&&Kc.fas&&!we.autoFetchSvg&&(i="fas"),{prefix:i,iconName:a}}const l5=UR.filter(n=>n!==On||n!==_p),u5=Object.keys(V_).filter(n=>n!==On).map(n=>Object.keys(V_[n])).flat();function c5(n){const{values:e,family:t,canonical:i,givenPrefix:a="",styles:l={},config:c={}}=n,d=t===_p,p=e.includes("fa-duotone")||e.includes("fad"),m=c.familyDefault==="duotone",y=i.prefix==="fad"||i.prefix==="fa-duotone";if(!d&&(p||m||y)&&(i.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(i.prefix="fab"),!i.prefix&&l5.includes(t)&&(Object.keys(l).find(A=>u5.includes(A))||c.autoFetchSvg)){const A=p3.get(t).defaultShortPrefixId;i.prefix=A,i.iconName=ro(i.prefix,i.iconName)||i.iconName}return(i.prefix==="fa"||a==="fa")&&(i.prefix=da()||"fas"),i}class h5{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];const a=t.reduce(this._pullDefinitions,{});Object.keys(a).forEach(l=>{this.definitions[l]=ue(ue({},this.definitions[l]||{}),a[l]),W_(l,a[l]);const c=Rv[On][l];c&&W_(c,a[l]),tI()})}reset(){this.definitions={}}_pullDefinitions(e,t){const i=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(i).map(a=>{const{prefix:l,iconName:c,icon:d}=i[a],p=d[2];e[l]||(e[l]={}),p.length>0&&p.forEach(m=>{typeof m=="string"&&(e[l][m]=d)}),e[l][c]=d}),e}}let vA=[],Sl={};const Nl={},f5=Object.keys(Nl);function d5(n,e){let{mixoutsTo:t}=e;return vA=n,Sl={},Object.keys(Nl).forEach(i=>{f5.indexOf(i)===-1&&delete Nl[i]}),vA.forEach(i=>{const a=i.mixout?i.mixout():{};if(Object.keys(a).forEach(l=>{typeof a[l]=="function"&&(t[l]=a[l]),typeof a[l]=="object"&&Object.keys(a[l]).forEach(c=>{t[l]||(t[l]={}),t[l][c]=a[l][c]})}),i.hooks){const l=i.hooks();Object.keys(l).forEach(c=>{Sl[c]||(Sl[c]=[]),Sl[c].push(l[c])})}i.provides&&i.provides(Nl)}),t}function K_(n,e){for(var t=arguments.length,i=new Array(t>2?t-2:0),a=2;a<t;a++)i[a-2]=arguments[a];return(Sl[n]||[]).forEach(c=>{e=c.apply(null,[e,...i])}),e}function vo(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];(Sl[n]||[]).forEach(l=>{l.apply(null,t)})}function pa(){const n=arguments[0],e=Array.prototype.slice.call(arguments,1);return Nl[n]?Nl[n].apply(null,e):void 0}function $_(n){n.prefix==="fa"&&(n.prefix="fas");let{iconName:e}=n;const t=n.prefix||da();if(e)return e=ro(t,e)||e,gA(sI.definitions,t,e)||gA(us.styles,t,e)}const sI=new h5,p5=()=>{we.autoReplaceSvg=!1,we.observeMutations=!1,vo("noAuto")},m5={i2svg:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return or?(vo("beforeI2svg",n),pa("pseudoElements2svg",n),pa("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=n;we.autoReplaceSvg===!1&&(we.autoReplaceSvg=!0),we.observeMutations=!0,Q3(()=>{_5({autoReplaceSvgRoot:e}),vo("watch",n)})}},g5={icon:n=>{if(n===null)return null;if(typeof n=="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:ro(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){const e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],t=vp(n[0]);return{prefix:t,iconName:ro(t,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(we.cssPrefix,"-"))>-1||n.match(M3))){const e=Ep(n.split(" "),{skipLookups:!0});return{prefix:e.prefix||da(),iconName:ro(e.prefix,e.iconName)||e.iconName}}if(typeof n=="string"){const e=da();return{prefix:e,iconName:ro(e,n)||n}}}},si={noAuto:p5,config:we,dom:m5,parse:g5,library:sI,findIconDefinition:$_,toHtml:fh},_5=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=_t}=n;(Object.keys(us.styles).length>0||we.autoFetchSvg)&&or&&we.autoReplaceSvg&&si.dom.i2svg({node:e})};function Tp(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(t=>fh(t))}}),Object.defineProperty(n,"node",{get:function(){if(!or)return;const t=_t.createElement("div");return t.innerHTML=n.html,t.children}}),n}function y5(n){let{children:e,main:t,mask:i,attributes:a,styles:l,transform:c}=n;if(Nv(c)&&t.found&&!i.found){const{width:d,height:p}=t,m={x:d/p/2,y:.5};a.style=yp(ue(ue({},l),{},{"transform-origin":"".concat(m.x+c.x/16,"em ").concat(m.y+c.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function v5(n){let{prefix:e,iconName:t,children:i,attributes:a,symbol:l}=n;const c=l===!0?"".concat(e,"-").concat(we.cssPrefix,"-").concat(t):l;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:ue(ue({},a),{},{id:c}),children:i}]}]}function Dv(n){const{icons:{main:e,mask:t},prefix:i,iconName:a,transform:l,symbol:c,title:d,maskId:p,titleId:m,extra:y,watchable:S=!1}=n,{width:A,height:D}=t.found?t:e,V=v3.includes(i),G=[we.replacementClass,a?"".concat(we.cssPrefix,"-").concat(a):""].filter(re=>y.classes.indexOf(re)===-1).filter(re=>re!==""||!!re).concat(y.classes).join(" ");let M={children:[],attributes:ue(ue({},y.attributes),{},{"data-prefix":i,"data-icon":a,class:G,role:y.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(A," ").concat(D)})};const B=V&&!~y.classes.indexOf("fa-fw")?{width:"".concat(A/D*16*.0625,"em")}:{};S&&(M.attributes[yo]=""),d&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(m||Wc())},children:[d]}),delete M.attributes.title);const H=ue(ue({},M),{},{prefix:i,iconName:a,main:e,mask:t,maskId:p,transform:l,symbol:c,styles:ue(ue({},B),y.styles)}),{children:$,attributes:F}=t.found&&e.found?pa("generateAbstractMask",H)||{children:[],attributes:{}}:pa("generateAbstractIcon",H)||{children:[],attributes:{}};return H.children=$,H.attributes=F,c?v5(H):y5(H)}function EA(n){const{content:e,width:t,height:i,transform:a,title:l,extra:c,watchable:d=!1}=n,p=ue(ue(ue({},c.attributes),l?{title:l}:{}),{},{class:c.classes.join(" ")});d&&(p[yo]="");const m=ue({},c.styles);Nv(a)&&(m.transform=K3({transform:a,startCentered:!0,width:t,height:i}),m["-webkit-transform"]=m.transform);const y=yp(m);y.length>0&&(p.style=y);const S=[];return S.push({tag:"span",attributes:p,children:[e]}),l&&S.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),S}function E5(n){const{content:e,title:t,extra:i}=n,a=ue(ue(ue({},i.attributes),t?{title:t}:{}),{},{class:i.classes.join(" ")}),l=yp(i.styles);l.length>0&&(a.style=l);const c=[];return c.push({tag:"span",attributes:a,children:[e]}),t&&c.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),c}const{styles:Qg}=us;function Y_(n){const e=n[0],t=n[1],[i]=n.slice(4);let a=null;return Array.isArray(i)?a={tag:"g",attributes:{class:"".concat(we.cssPrefix,"-").concat(Kg.GROUP)},children:[{tag:"path",attributes:{class:"".concat(we.cssPrefix,"-").concat(Kg.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(we.cssPrefix,"-").concat(Kg.PRIMARY),fill:"currentColor",d:i[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:t,icon:a}}const T5={found:!1,width:512,height:512};function S5(n,e){!zR&&!we.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function Q_(n,e){let t=e;return e==="fa"&&we.styleDefault!==null&&(e=da()),new Promise((i,a)=>{if(t==="fa"){const l=nI(n)||{};n=l.iconName||n,e=l.prefix||e}if(n&&e&&Qg[e]&&Qg[e][n]){const l=Qg[e][n];return i(Y_(l))}S5(n,e),i(ue(ue({},T5),{},{icon:we.showMissingIcons&&n?pa("missingIconAbstract")||{}:{}}))})}const TA=()=>{},X_=we.measurePerformance&&Kf&&Kf.mark&&Kf.measure?Kf:{mark:TA,measure:TA},Tc='FA "6.7.2"',b5=n=>(X_.mark("".concat(Tc," ").concat(n," begins")),()=>rI(n)),rI=n=>{X_.mark("".concat(Tc," ").concat(n," ends")),X_.measure("".concat(Tc," ").concat(n),"".concat(Tc," ").concat(n," begins"),"".concat(Tc," ").concat(n," ends"))};var kv={begin:b5,end:rI};const ad=()=>{};function SA(n){return typeof(n.getAttribute?n.getAttribute(yo):null)=="string"}function A5(n){const e=n.getAttribute?n.getAttribute(wv):null,t=n.getAttribute?n.getAttribute(Cv):null;return e&&t}function w5(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(we.replacementClass)}function C5(){return we.autoReplaceSvg===!0?od.replace:od[we.autoReplaceSvg]||od.replace}function R5(n){return _t.createElementNS("http://www.w3.org/2000/svg",n)}function I5(n){return _t.createElement(n)}function aI(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:t=n.tag==="svg"?R5:I5}=e;if(typeof n=="string")return _t.createTextNode(n);const i=t(n.tag);return Object.keys(n.attributes||[]).forEach(function(l){i.setAttribute(l,n.attributes[l])}),(n.children||[]).forEach(function(l){i.appendChild(aI(l,{ceFn:t}))}),i}function N5(n){let e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const od={replace:function(n){const e=n[0];if(e.parentNode)if(n[1].forEach(t=>{e.parentNode.insertBefore(aI(t),e)}),e.getAttribute(yo)===null&&we.keepOriginalSource){let t=_t.createComment(N5(e));e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(n){const e=n[0],t=n[1];if(~Iv(e).indexOf(we.replacementClass))return od.replace(n);const i=new RegExp("".concat(we.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){const l=t[0].attributes.class.split(" ").reduce((c,d)=>(d===we.replacementClass||d.match(i)?c.toSvg.push(d):c.toNode.push(d),c),{toNode:[],toSvg:[]});t[0].attributes.class=l.toSvg.join(" "),l.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",l.toNode.join(" "))}const a=t.map(l=>fh(l)).join(`
`);e.setAttribute(yo,""),e.innerHTML=a}};function bA(n){n()}function oI(n,e){const t=typeof e=="function"?e:ad;if(n.length===0)t();else{let i=bA;we.mutateApproach===D3&&(i=fa.requestAnimationFrame||bA),i(()=>{const a=C5(),l=kv.begin("mutate");n.map(a),l(),t()})}}let Pv=!1;function lI(){Pv=!0}function Z_(){Pv=!1}let jd=null;function AA(n){if(!cA||!we.observeMutations)return;const{treeCallback:e=ad,nodeCallback:t=ad,pseudoElementsCallback:i=ad,observeMutationsRoot:a=_t}=n;jd=new cA(l=>{if(Pv)return;const c=da();Zl(l).forEach(d=>{if(d.type==="childList"&&d.addedNodes.length>0&&!SA(d.addedNodes[0])&&(we.searchPseudoElements&&i(d.target),e(d.target)),d.type==="attributes"&&d.target.parentNode&&we.searchPseudoElements&&i(d.target.parentNode),d.type==="attributes"&&SA(d.target)&&~V3.indexOf(d.attributeName))if(d.attributeName==="class"&&A5(d.target)){const{prefix:p,iconName:m}=Ep(Iv(d.target));d.target.setAttribute(wv,p||c),m&&d.target.setAttribute(Cv,m)}else w5(d.target)&&t(d.target)})}),or&&jd.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function x5(){jd&&jd.disconnect()}function O5(n){const e=n.getAttribute("style");let t=[];return e&&(t=e.split(";").reduce((i,a)=>{const l=a.split(":"),c=l[0],d=l.slice(1);return c&&d.length>0&&(i[c]=d.join(":").trim()),i},{})),t}function D5(n){const e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),i=n.innerText!==void 0?n.innerText.trim():"";let a=Ep(Iv(n));return a.prefix||(a.prefix=da()),e&&t&&(a.prefix=e,a.iconName=t),a.iconName&&a.prefix||(a.prefix&&i.length>0&&(a.iconName=i5(a.prefix,n.innerText)||Ov(a.prefix,G_(n.innerText))),!a.iconName&&we.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=n.firstChild.data)),a}function k5(n){const e=Zl(n.attributes).reduce((a,l)=>(a.name!=="class"&&a.name!=="style"&&(a[l.name]=l.value),a),{}),t=n.getAttribute("title"),i=n.getAttribute("data-fa-title-id");return we.autoA11y&&(t?e["aria-labelledby"]="".concat(we.replacementClass,"-title-").concat(i||Wc()):(e["aria-hidden"]="true",e.focusable="false")),e}function P5(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ls,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function wA(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:t,prefix:i,rest:a}=D5(n),l=k5(n),c=K_("parseNodeAttributes",{},n);let d=e.styleParser?O5(n):[];return ue({iconName:t,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:i,transform:ls,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:d,attributes:l}},c)}const{styles:M5}=us;function uI(n){const e=we.autoReplaceSvg==="nest"?wA(n,{styleParser:!1}):wA(n);return~e.extra.classes.indexOf(HR)?pa("generateLayersText",n,e):pa("generateSvgReplacementMutation",n,e)}function L5(){return[...g3,...j_]}function CA(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!or)return Promise.resolve();const t=_t.documentElement.classList,i=y=>t.add("".concat(dA,"-").concat(y)),a=y=>t.remove("".concat(dA,"-").concat(y)),l=we.autoFetchSvg?L5():LR.concat(Object.keys(M5));l.includes("fa")||l.push("fa");const c=[".".concat(HR,":not([").concat(yo,"])")].concat(l.map(y=>".".concat(y,":not([").concat(yo,"])"))).join(", ");if(c.length===0)return Promise.resolve();let d=[];try{d=Zl(n.querySelectorAll(c))}catch{}if(d.length>0)i("pending"),a("complete");else return Promise.resolve();const p=kv.begin("onTree"),m=d.reduce((y,S)=>{try{const A=uI(S);A&&y.push(A)}catch(A){zR||A.name==="MissingIcon"&&console.error(A)}return y},[]);return new Promise((y,S)=>{Promise.all(m).then(A=>{oI(A,()=>{i("active"),i("complete"),a("pending"),typeof e=="function"&&e(),p(),y()})}).catch(A=>{p(),S(A)})})}function U5(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;uI(n).then(t=>{t&&oI([t],e)})}function V5(n){return function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(e||{}).icon?e:$_(e||{});let{mask:a}=t;return a&&(a=(a||{}).icon?a:$_(a||{})),n(i,ue(ue({},t),{},{mask:a}))}}const j5=function(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=ls,symbol:i=!1,mask:a=null,maskId:l=null,title:c=null,titleId:d=null,classes:p=[],attributes:m={},styles:y={}}=e;if(!n)return;const{prefix:S,iconName:A,icon:D}=n;return Tp(ue({type:"icon"},n),()=>(vo("beforeDOMElementCreation",{iconDefinition:n,params:e}),we.autoA11y&&(c?m["aria-labelledby"]="".concat(we.replacementClass,"-title-").concat(d||Wc()):(m["aria-hidden"]="true",m.focusable="false")),Dv({icons:{main:Y_(D),mask:a?Y_(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:A,transform:ue(ue({},ls),t),symbol:i,title:c,maskId:l,titleId:d,extra:{attributes:m,styles:y,classes:p}})))};var B5={mixout(){return{icon:V5(j5)}},hooks(){return{mutationObserverCallbacks(n){return n.treeCallback=CA,n.nodeCallback=U5,n}}},provides(n){n.i2svg=function(e){const{node:t=_t,callback:i=()=>{}}=e;return CA(t,i)},n.generateSvgReplacementMutation=function(e,t){const{iconName:i,title:a,titleId:l,prefix:c,transform:d,symbol:p,mask:m,maskId:y,extra:S}=t;return new Promise((A,D)=>{Promise.all([Q_(i,c),m.iconName?Q_(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(V=>{let[G,M]=V;A([e,Dv({icons:{main:G,mask:M},prefix:c,iconName:i,transform:d,symbol:p,maskId:y,title:a,titleId:l,extra:S,watchable:!0})])}).catch(D)})},n.generateAbstractIcon=function(e){let{children:t,attributes:i,main:a,transform:l,styles:c}=e;const d=yp(c);d.length>0&&(i.style=d);let p;return Nv(l)&&(p=pa("generateAbstractTransformGrouping",{main:a,transform:l,containerWidth:a.width,iconWidth:a.width})),t.push(p||a.icon),{children:t,attributes:i}}}},z5={mixout(){return{layer(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:t=[]}=e;return Tp({type:"layer"},()=>{vo("beforeDOMElementCreation",{assembler:n,params:e});let i=[];return n(a=>{Array.isArray(a)?a.map(l=>{i=i.concat(l.abstract)}):i=i.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(we.cssPrefix,"-layers"),...t].join(" ")},children:i}]})}}}},F5={mixout(){return{counter(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:t=null,classes:i=[],attributes:a={},styles:l={}}=e;return Tp({type:"counter",content:n},()=>(vo("beforeDOMElementCreation",{content:n,params:e}),E5({content:n.toString(),title:t,extra:{attributes:a,styles:l,classes:["".concat(we.cssPrefix,"-layers-counter"),...i]}})))}}}},H5={mixout(){return{text(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=ls,title:i=null,classes:a=[],attributes:l={},styles:c={}}=e;return Tp({type:"text",content:n},()=>(vo("beforeDOMElementCreation",{content:n,params:e}),EA({content:n,transform:ue(ue({},ls),t),title:i,extra:{attributes:l,styles:c,classes:["".concat(we.cssPrefix,"-layers-text"),...a]}})))}}},provides(n){n.generateLayersText=function(e,t){const{title:i,transform:a,extra:l}=t;let c=null,d=null;if(PR){const p=parseInt(getComputedStyle(e).fontSize,10),m=e.getBoundingClientRect();c=m.width/p,d=m.height/p}return we.autoA11y&&!i&&(l.attributes["aria-hidden"]="true"),Promise.resolve([e,EA({content:e.innerHTML,width:c,height:d,transform:a,title:i,extra:l,watchable:!0})])}}};const q5=new RegExp('"',"ug"),RA=[1105920,1112319],IA=ue(ue(ue(ue({},{FontAwesome:{normal:"fas",400:"fas"}}),d3),x3),b3),J_=Object.keys(IA).reduce((n,e)=>(n[e.toLowerCase()]=IA[e],n),{}),G5=Object.keys(J_).reduce((n,e)=>{const t=J_[e];return n[e]=t[900]||[...Object.entries(t)][0][1],n},{});function W5(n){const e=n.replace(q5,""),t=Z3(e,0),i=t>=RA[0]&&t<=RA[1],a=e.length===2?e[0]===e[1]:!1;return{value:G_(a?e[0]:e),isSecondary:i||a}}function K5(n,e){const t=n.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),a=isNaN(i)?"normal":i;return(J_[t]||{})[a]||G5[t]}function NA(n,e){const t="".concat(O3).concat(e.replace(":","-"));return new Promise((i,a)=>{if(n.getAttribute(t)!==null)return i();const c=Zl(n.children).filter(A=>A.getAttribute(z_)===e)[0],d=fa.getComputedStyle(n,e),p=d.getPropertyValue("font-family"),m=p.match(L3),y=d.getPropertyValue("font-weight"),S=d.getPropertyValue("content");if(c&&!m)return n.removeChild(c),i();if(m&&S!=="none"&&S!==""){const A=d.getPropertyValue("content");let D=K5(p,y);const{value:V,isSecondary:G}=W5(A),M=m[0].startsWith("FontAwesome");let B=Ov(D,V),H=B;if(M){const $=s5(V);$.iconName&&$.prefix&&(B=$.iconName,D=$.prefix)}if(B&&!G&&(!c||c.getAttribute(wv)!==D||c.getAttribute(Cv)!==H)){n.setAttribute(t,H),c&&n.removeChild(c);const $=P5(),{extra:F}=$;F.attributes[z_]=e,Q_(B,D).then(re=>{const _e=Dv(ue(ue({},$),{},{icons:{main:re,mask:iI()},prefix:D,iconName:H,extra:F,watchable:!0})),P=_t.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?n.insertBefore(P,n.firstChild):n.appendChild(P),P.outerHTML=_e.map(R=>fh(R)).join(`
`),n.removeAttribute(t),i()}).catch(a)}else i()}else i()})}function $5(n){return Promise.all([NA(n,"::before"),NA(n,"::after")])}function Y5(n){return n.parentNode!==document.head&&!~k3.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(z_)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function xA(n){if(or)return new Promise((e,t)=>{const i=Zl(n.querySelectorAll("*")).filter(Y5).map($5),a=kv.begin("searchPseudoElements");lI(),Promise.all(i).then(()=>{a(),Z_(),e()}).catch(()=>{a(),Z_(),t()})})}var Q5={hooks(){return{mutationObserverCallbacks(n){return n.pseudoElementsCallback=xA,n}}},provides(n){n.pseudoElements2svg=function(e){const{node:t=_t}=e;we.searchPseudoElements&&xA(t)}}};let OA=!1;var X5={mixout(){return{dom:{unwatch(){lI(),OA=!0}}}},hooks(){return{bootstrap(){AA(K_("mutationObserverCallbacks",{}))},noAuto(){x5()},watch(n){const{observeMutationsRoot:e}=n;OA?Z_():AA(K_("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const DA=n=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce((t,i)=>{const a=i.toLowerCase().split("-"),l=a[0];let c=a.slice(1).join("-");if(l&&c==="h")return t.flipX=!0,t;if(l&&c==="v")return t.flipY=!0,t;if(c=parseFloat(c),isNaN(c))return t;switch(l){case"grow":t.size=t.size+c;break;case"shrink":t.size=t.size-c;break;case"left":t.x=t.x-c;break;case"right":t.x=t.x+c;break;case"up":t.y=t.y-c;break;case"down":t.y=t.y+c;break;case"rotate":t.rotate=t.rotate+c;break}return t},e)};var Z5={mixout(){return{parse:{transform:n=>DA(n)}}},hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-transform");return t&&(n.transform=DA(t)),n}}},provides(n){n.generateAbstractTransformGrouping=function(e){let{main:t,transform:i,containerWidth:a,iconWidth:l}=e;const c={transform:"translate(".concat(a/2," 256)")},d="translate(".concat(i.x*32,", ").concat(i.y*32,") "),p="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),m="rotate(".concat(i.rotate," 0 0)"),y={transform:"".concat(d," ").concat(p," ").concat(m)},S={transform:"translate(".concat(l/2*-1," -256)")},A={outer:c,inner:y,path:S};return{tag:"g",attributes:ue({},A.outer),children:[{tag:"g",attributes:ue({},A.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:ue(ue({},t.icon.attributes),A.path)}]}]}}}};const Xg={x:0,y:0,width:"100%",height:"100%"};function kA(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function J5(n){return n.tag==="g"?n.children:[n]}var eB={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-mask"),i=t?Ep(t.split(" ").map(a=>a.trim())):iI();return i.prefix||(i.prefix=da()),n.mask=i,n.maskId=e.getAttribute("data-fa-mask-id"),n}}},provides(n){n.generateAbstractMask=function(e){let{children:t,attributes:i,main:a,mask:l,maskId:c,transform:d}=e;const{width:p,icon:m}=a,{width:y,icon:S}=l,A=W3({transform:d,containerWidth:y,iconWidth:p}),D={tag:"rect",attributes:ue(ue({},Xg),{},{fill:"white"})},V=m.children?{children:m.children.map(kA)}:{},G={tag:"g",attributes:ue({},A.inner),children:[kA(ue({tag:m.tag,attributes:ue(ue({},m.attributes),A.path)},V))]},M={tag:"g",attributes:ue({},A.outer),children:[G]},B="mask-".concat(c||Wc()),H="clip-".concat(c||Wc()),$={tag:"mask",attributes:ue(ue({},Xg),{},{id:B,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[D,M]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:H},children:J5(S)},$]};return t.push(F,{tag:"rect",attributes:ue({fill:"currentColor","clip-path":"url(#".concat(H,")"),mask:"url(#".concat(B,")")},Xg)}),{children:t,attributes:i}}}},tB={provides(n){let e=!1;fa.matchMedia&&(e=fa.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){const t=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:ue(ue({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const l=ue(ue({},a),{},{attributeName:"opacity"}),c={tag:"circle",attributes:ue(ue({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||c.children.push({tag:"animate",attributes:ue(ue({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:ue(ue({},l),{},{values:"1;0;1;1;0;1;"})}),t.push(c),t.push({tag:"path",attributes:ue(ue({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:ue(ue({},l),{},{values:"1;0;0;0;0;1;"})}]}),e||t.push({tag:"path",attributes:ue(ue({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:ue(ue({},l),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},nB={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-symbol"),i=t===null?!1:t===""?!0:t;return n.symbol=i,n}}}},iB=[Y3,B5,z5,F5,H5,Q5,X5,Z5,eB,tB,nB];d5(iB,{mixoutsTo:si});si.noAuto;si.config;si.library;si.dom;si.parse;si.findIconDefinition;si.toHtml;si.icon;si.layer;si.text;si.counter;const sB=({showPersonalInformation:n,setShowPersonalInformation:e,accInformation:t,user:i,setLoading:a})=>{const l=te.useRef(),[c,d]=te.useState(),[p,m]=te.useState(),[y,S]=te.useState(),[A,D]=te.useState(),[V,G]=te.useState(),[M,B]=te.useState(),[H,$]=te.useState(),[F,re]=te.useState(),[_e,P]=te.useState(),[R,I]=te.useState(),[N,k]=te.useState(),[L,x]=te.useState([]),[je,qe]=te.useState(!1),[ce,Se]=te.useState(!1),[he,be]=te.useState([]),[b,Z]=te.useState([]);function ve(){var Q;((Q=l.current)==null?void 0:Q.value)!=""&&be(oe=>{var ne;return[...oe,(ne=l.current)==null?void 0:ne.value]})}const fe=async()=>{a(!0);try{await uh(Vi(ji,"Users",i==null?void 0:i.uid),{perInfo:{school:p,name:c,grSec:F,age:A,bDay:V,gender:M,hobbies:H,placeOfBirth:y,purpose:_e},usingAs:R,favSubjects:L,description:N,contacts:b,skills:he})}catch(Q){console.log(Q)}a(!1)};return te.useEffect(()=>{var Q,oe,ne,xe,ye,pe,Re,wt,Xt;t&&(d((Q=t.perInfo)==null?void 0:Q.name),m((oe=t.perInfo)==null?void 0:oe.school),S((ne=t.perInfo)==null?void 0:ne.placeOfBirth),D((xe=t.perInfo)==null?void 0:xe.age),G((ye=t.perInfo)==null?void 0:ye.bDay),B((pe=t.perInfo)==null?void 0:pe.gender),$((Re=t.perInfo)==null?void 0:Re.hobbies),re((wt=t.perInfo)==null?void 0:wt.grSec),I(t==null?void 0:t.usingAs),P((Xt=t==null?void 0:t.perInfo)==null?void 0:Xt.purpose),k(t==null?void 0:t.description),Z(t!=null&&t.contacts?t==null?void 0:t.contacts:[]),be(t!=null&&t.skills?t==null?void 0:t.skills:[]))},[t]),v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:n?qs.Account_Information_Wrapper:qs.Hide_Account_Information_Wrapper,children:[v.jsxs("nav",{className:qs.navBar,children:[v.jsx("h1",{children:"PERSONAL INFORMATIONS"}),v.jsx(_6,{editAccount:je,setEditAccount:Q=>qe(Q),saveAccountChanges:()=>fe(),setShowPersonalInformation:Q=>e(Q),setShowChanges:Q=>Se(Q)})]}),v.jsxs("div",{className:qs.Account_Information_Box,children:[v.jsxs("div",{className:qs.left,children:[v.jsx(R6,{editAccount:je,setEditAccount:Q=>{qe(Q)},user:i,accInformation:t,setLoading:Q=>a(Q)}),v.jsx(L6,{skills:he,setSkills:Q=>{be(Q)},addSkill:()=>{ve()},skillRef:l,editAccount:je,setEditAccount:Q=>{qe(Q)},setLoading:Q=>a(Q)}),v.jsx(x6,{contacts:b,setContacts:Q=>Z(Q),editAccount:je})]}),v.jsxs("div",{className:qs.right,children:[v.jsx("div",{className:qs.top,children:v.jsx(B6,{editAccount:je,accInformation:t,uName:c,setUName:Q=>{d(Q)},school:p,setSchool:Q=>{m(Q)},pBirth:y,setPBirth:Q=>{S(Q)},age:A,setAge:Q=>{D(Q)},bDay:V,setBDay:Q=>{G(Q)},gender:M,setGender:Q=>{B(Q)},hobbies:H,setHobbies:Q=>{$(Q)},grSec:F,setGrSec:Q=>{re(Q)},usingAs:R,setUsingAs:Q=>{I(Q)}})}),v.jsx("div",{className:qs.mid,children:v.jsx(Y6,{accInformation:t,editAccount:je,setFavSubjects:Q=>{x(Q)},usingAs:R,setUsingAs:Q=>{I(Q)},purpose:_e,setPurpose:Q=>{P(Q)}})}),v.jsx("div",{className:qs.bottom,children:v.jsx(Z6,{editAccount:je,desc:N,setDesc:Q=>{k(Q)}})})]})]})]}),v.jsx(i3,{editAccount:je,setEditAccount:Q=>qe(Q),setShowPersonalInfo:Q=>e(Q),saveAccountChanges:()=>fe(),showChanges:ce,setShowChanges:Q=>Se(Q)})]})},rB="_Continue_As_Wrapper_n7qjc_5",aB="_Continue_As_Box_n7qjc_47",oB="_Top_n7qjc_75",lB="_Options_n7qjc_135",Yf={Continue_As_Wrapper:rB,Continue_As_Box:aB,Top:oB,Options:lB},uB=({continueAs:n,setContinueAs:e,user:t,setUser:i,setLoading:a})=>{const[l,c]=te.useState(null),d=async()=>{a(!0);try{await Ew(In),i(null),a(!1),e(!1)}catch(m){a(!1),e(!1),console.log(m)}},p=async()=>{if((t==null?void 0:t.uid)!=null)try{const m=Vi(ji,"Users",t==null?void 0:t.uid),y=await Ud(m);y.exists&&c(y.data().perInfo)}catch(m){console.log(m)}};if(te.useEffect(()=>{t!=null&&p()},[n,t]),n)return v.jsx("div",{className:Yf.Continue_As_Wrapper,children:v.jsxs("div",{className:Yf.Continue_As_Box,children:[v.jsxs("div",{className:Yf.Top,children:[v.jsx("i",{className:"fa fa-user"}),v.jsx("h3",{children:"Continue As: "}),v.jsxs("h3",{children:[l==null?void 0:l.name," ?"]})]}),v.jsxs("div",{className:Yf.Options,children:[v.jsx(me,{content:"No",func:()=>{d()}}),v.jsx(me,{content:"Yes",func:()=>{e(!1)}})]})]})})},cB="_sign_up_container_1bwio_19",hB="_goToStartingPage_1bwio_41",fB="_top_arc_1bwio_65",dB="_form_1bwio_91",pB="_username_con_1bwio_105",mB="_password_con_1bwio_107",gB="_more_actions_1bwio_121",_B="_sign_in_button_1bwio_233",yB="_other_platforms_container_1bwio_265",vB="_icon_wrapper_1bwio_287",EB="_wrapper_1bwio_299",pn={sign_up_container:cB,goToStartingPage:hB,top_arc:fB,form:dB,username_con:pB,password_con:mB,more_actions:gB,sign_in_button:_B,other_platforms_container:yB,icon_wrapper:vB,wrapper:EB};function TB({setPage:n,setUser:e,showSignInPrompt:t,setShowSignInPrompt:i,setShowSignUpPrompt:a,setLoading:l,setContinueAs:c,getAccountInformation:d}){const[p,m]=te.useState(!1),y=te.useRef(null),S=te.useRef(null),A=te.useRef(null),D=te.useRef(null),V=()=>{const F=A==null?void 0:A.current.value,re=D==null?void 0:D.current.value,_e=y.current,P=S.current;return{email:F,pass:re,warning1:_e,warning2:P}},G=()=>{const F=V();F.email&&(F.email=""),F.pass&&(F.pass=""),F.warning1.innerText="",F.warning2.innerText=""},M=F=>{const re=V();return(F==null?void 0:F.target.value)==""||re.email==""?y.current.textContent="The input field is blank!":y.current.textContent="",!1},B=F=>{const re=V();return(F==null?void 0:F.target.value)==""||re.pass==""?S.current.textContent="The input field is blank!":S.current.textContent="",!1},H=async()=>{M(),B();{l(!0);try{await $D(In,A.current.value,D.current.value),G(),e(In.currentUser),i(!1),c(!0),d()}catch(F){console.log(F.code),F.code=="auth/invalid-email"&&(y.current.textContent="Invalid email/Email doesn't exist."),F.code=="auth/invalid-credential"&&(S.current.textContent="Password does not match."),F.code=="auth/network-request-failed"&&alert("Network Error, unable to sign in. Please try again.")}l(!1)}},$=async()=>{var re;const F=new Ws;l(!0);try{await _2(In,F),G(),e(In.currentUser);const _e=Vi(ji,"Users",(re=In.currentUser)==null?void 0:re.uid);(await Ud(_e)).exists()?i(!1):a(!0),c(!0),d()}catch(_e){console.log(_e)}l(!1)};if(t==!0)return v.jsx(v.Fragment,{children:v.jsxs("div",{className:pn.sign_up_container,children:[v.jsx(me,{func:()=>{i(!1),G(),n(1)},content:"X",className:pn.goToStartingPage}),v.jsx("div",{className:pn.top_arc,children:"SIGN IN"}),v.jsxs("div",{className:pn.form,children:[v.jsxs("div",{className:pn.username_con,children:[v.jsx("h3",{children:"Username :"}),v.jsx("input",{className:"emailInput",ref:A,onInput:F=>{M(F)}}),v.jsx("span",{ref:y})]}),v.jsxs("div",{className:pn.password_con,children:[v.jsx("h3",{children:"Password :"}),v.jsx("input",{type:p?"text":"password",ref:D,onInput:F=>{B(F)},className:pn.Password}),v.jsx("span",{ref:S}),v.jsx("img",{src:p?"./password/visible.png":"./password/unsee.png",className:pn.see_password,onClick:()=>{m(!p)}})]}),v.jsxs("div",{className:pn.more_actions,children:[v.jsx("span",{className:pn.forgot_pass,children:"Forgot Password"}),v.jsx("span",{className:pn.create_acc,onClick:()=>{i(!1),a(!0)},children:"Doesn't Have An Account?"})]}),v.jsx(me,{className:pn.sign_in_button,func:()=>{H()},content:"SIGN IN"})]}),v.jsxs("div",{className:pn.other_platforms_container,children:[v.jsxs("div",{className:pn.icon_wrapper,children:[v.jsx("div",{className:pn.wrapper,onClick:()=>{$()},children:v.jsx("img",{src:"./platforms/GG.png "})}),v.jsx("div",{className:pn.wrapper,children:v.jsx("img",{src:"./platforms/facebook.png"})}),v.jsx("div",{className:pn.wrapper,children:v.jsx("img",{src:"./platforms/Instagram.png"})})]}),v.jsx("h3",{children:"SIGN IN WITH DIFFERENT PLATFORMS"})]})]})})}const SB="_hide_1xp6t_1",bB="_inputs_1_1xp6t_7",Ja={hide:SB,inputs_1:bB},AB=({show:n,indicated:e,showConfirm:t,setShow:i,setShowConfirm:a,passwordInput:l,confirmPasswordInput:c,emailInput:d,passWarning:p,confirmWarning:m,emailWarning:y})=>v.jsxs("div",{className:e==0?Ja.inputs_1:Ja.hide,children:[v.jsxs("div",{className:Ja.email,children:[v.jsx("h4",{children:"Email"}),v.jsx("input",{type:"text",ref:d}),v.jsx("span",{ref:y})]}),v.jsxs("div",{className:Ja.password,children:[v.jsx("h4",{children:"Password"}),v.jsx("input",{type:n?"text":"password",ref:l}),v.jsx("img",{src:n?"./password/visible.png":"./password/unsee.png",className:Ja.see_password,onClick:()=>{i(!n)}}),v.jsx("span",{ref:p})]}),v.jsxs("div",{className:Ja.confirm,children:[v.jsx("h4",{children:"Confirm Password"}),v.jsx("input",{type:t?"text":"password",ref:c}),v.jsx("img",{src:t?"./password/visible.png":"./password/unsee.png",className:Ja.see_confirm,onClick:()=>{a(!t)}}),v.jsx("span",{ref:m})]})]}),wB="_hide_d4ubt_1",CB="_inputs_2_d4ubt_11",RB="_top_d4ubt_31",IB="_notIndicated_d4ubt_81",NB="_indicated_d4ubt_91",fc={hide:wB,inputs_2:CB,top:RB,notIndicated:IB,indicated:NB},xB=({indicated:n,usingAsInput:e,usageOptions:t,handleUsageOptions:i})=>v.jsxs("div",{className:n==1?fc.inputs_2:fc.hide,children:[v.jsx("h3",{children:"I am using the Web Application as?"}),v.jsx("div",{children:v.jsxs("div",{className:fc.top,children:[t.map((a,l)=>v.jsx(me,{content:a.content,className:a.isIndicated?fc.indicated:fc.notIndicated,func:()=>{i(l)}},a.content)),v.jsx("h3",{children:"What is your purpose?"}),v.jsx("textarea",{type:"text",placeholder:"Other reason...",ref:e})]})})]}),OB="_hide_1650p_1",DB="_inputs_3_1650p_9",dc={hide:OB,inputs_3:DB},kB=({indicated:n,nickNameInput:e,schoolInput:t,grSecInput:i,nameWarning:a,schoolWarning:l,grSecWarning:c})=>v.jsxs("div",{className:n==2?dc.inputs_3:dc.hide,children:[v.jsxs("div",{className:dc.username,children:[v.jsx("h4",{children:"Name"}),v.jsx("input",{type:"text",ref:e}),v.jsx("span",{ref:a})]}),v.jsxs("div",{className:dc.password,children:[v.jsx("h4",{children:"School"}),v.jsx("input",{type:"text",ref:t}),v.jsx("span",{ref:l})]}),v.jsxs("div",{className:dc.confirm,children:[v.jsx("h4",{children:"Grade & Section"}),v.jsx("input",{type:"text",ref:i}),v.jsx("span",{ref:c})]})]}),PB="_hide_j48mp_15",MB="_inputs_4_j48mp_23",LB="_wrapper_j48mp_85",UB="_IndicatedButt_j48mp_125",VB="_notIndicatedButt_j48mp_145",pl={hide:PB,inputs_4:MB,wrapper:LB,IndicatedButt:UB,notIndicatedButt:VB},jB=({indicated:n,subjects:e,handleSubjects:t})=>{if(e!=null)return v.jsx("div",{className:n==3?pl.inputs_4:pl.hide,children:v.jsxs("div",{className:pl.wrapper,children:[v.jsx("h4",{children:"What is your favorite subject?"}),v.jsx("div",{className:pl.buttons,children:e.map((i,a)=>v.jsx(me,{func:()=>{t(a)},className:i.testClass==!0?pl.IndicatedButt:pl.notIndicatedButt,content:e[a].content},i+a.toString()))})]})})},BB="_sign_up_wrapper_6gch2_23",zB="_form_1_6gch2_53",FB="_to_bottom_6gch2_75",HB="_bottom_6gch2_113",qB="_buttons_6gch2_125",GB="_indicator_6gch2_169",WB="_indicated_6gch2_197",KB="_not_indicated_6gch2_205",$B="_goToStartingPage_6gch2_259",bn={sign_up_wrapper:BB,form_1:zB,to_bottom:FB,bottom:HB,buttons:qB,indicator:GB,indicated:WB,not_indicated:KB,goToStartingPage:$B},YB=({setShowSignInPrompt:n,showSignUpPrompt:e,setShowSignUpPrompt:t,setLoading:i,setContinueAs:a,setUser:l,setPage:c})=>{te.useRef(null),te.useRef(null);const d=te.useRef(null),p=te.useRef(null),m=te.useRef(null),y=te.useRef(null),S=te.useRef(null),A=te.useRef(null),D=te.useRef(null),V=te.useRef(null),G=te.useRef(null),M=te.useRef(null),B=te.useRef(null),H=te.useRef(null),$=te.useRef(null),[F,re]=te.useState(!1),[_e,P]=te.useState(!1),[R,I]=te.useState(0),[N,k]=te.useState([]),[L,x]=te.useState([]),[je,qe]=te.useState([{content:"As a Student",isIndicated:!1},{content:"As a Teacher",isIndicated:!1},{content:"As a Employee",isIndicated:!1},{content:"I Am Just Using It.",isIndicated:!1}]),[ce,Se]=te.useState([{content:"TLE",testClass:!1},{content:"Mathematics",testClass:!1},{content:"Science",testClass:!1},{content:"English",testClass:!1},{content:"Colloquium",testClass:!1},{content:"Filipino",testClass:!1},{content:"Mapeh",testClass:!1},{content:"AP",testClass:!1},{content:"ESP",testClass:!1}]),he=()=>{var X,Ge,kt,Ut,_s,ai;const oe=(X=m.current)==null?void 0:X.value,ne=(Ge=d.current)==null?void 0:Ge.value,xe=(kt=S.current)==null?void 0:kt.value,ye=(Ut=D.current)==null?void 0:Ut.value,pe=(_s=G.current)==null?void 0:_s.value,Re=(ai=B.current)==null?void 0:ai.value,wt=y.current,Xt=p.current,Zt=A.current,Dn=V.current,ri=M.current,zn=H.current;return[[oe,ne,xe,ye,pe,Re],[wt,Xt,Zt,Dn,ri,zn]]},be=async oe=>{var ye;const ne=he();let xe;if(R==0){if(xe=b(ne[0],ne[1],R),!xe){i(!0);try{await KD(In,ne[0][0],ne[0][1]),l(In.currentUser),await Xb(Vi(ji,"Users",(ye=In.currentUser)==null?void 0:ye.uid),{email:ne[0][0]}),I(R+1)}catch(pe){console.log(pe),pe.code=="auth/email-already-in-use"&&(ne[1][0].innerText="Email is already taken.")}i(!1)}}else R==1||R==2?xe=b(ne[0],ne[1],R):R==3&&oe=="Submit"&&fe(ne[0]);oe=="next"&&R!=3&&!xe?I(R+1):oe=="back"&&R!=1&&I(R-1)},b=(oe,ne,xe)=>{let ye=!1;for(let pe in oe)xe==0&&pe<3?(oe[pe]==""&&(ne[pe].innerText="The input field is blank.",ye=!0),pe==0?oe[pe].includes("@gmail.com")||oe[pe].includes("@email.com")?ne[pe].innerText="":(ne[pe].innerText="This is not an email!",ye=!0):pe==1?oe[pe].length<=7?(ne[pe].innerText="The password is too short(maximum of 8 characters).",ye=!0):ne[pe].innerText="":pe==2&&(oe[pe]!=oe[pe-1]?(ne[pe].innerText="The password isn't match.",ye=!0):ne[pe].innerText="")):xe==2&&pe>2&&(oe[pe]==""?(ne[pe].innerText="The input field is blank.",ye=!0):(ne[pe].innerText="",ye=!1));return!!ye},Z=oe=>{let ne=je;for(let xe in ne)if(xe==oe){ne=ne[oe].content;break}k(ne),qe(xe=>xe.map((ye,pe)=>oe==pe?{...ye,isIndicated:!0}:{...ye,isIndicated:!1}))},ve=oe=>{let ne=ce,xe=[];ne=ne.map((ye,pe)=>oe==pe?{...ye,testClass:ye.testClass!=!0}:{...ye});for(let ye in ne)ne[ye].testClass==!0&&xe.push(ne[ye]);x([...xe]),Se(ye=>ye.map((pe,Re)=>oe==Re?{...pe,testClass:pe.testClass!=!0}:{...pe}))},fe=async oe=>{i(!0);try{const ne=In.currentUser;await Xb(Vi(ji,"Users",ne.uid),{favSubjects:L,usingAs:N,perInfo:{school:oe[4],name:oe[3],grSec:oe[5],age:"",bDay:"",gender:"",hobbies:"",placeOfBirth:"",skills:"",contacts:{gMail:"",number:"",faceBook:""},purpose:$==null?void 0:$.current.value}}),t(!1),Q(),a(!0)}catch(ne){console.log(ne.message)}i(!1)};function Q(){d.current.value="",p.current.value="",m.current.value="",y.current.value="",S.current.value="",A.current.value="",D.current.value="",V.current.value="",G.current.value="",M.current.value="",B.current.value="",H.current.value="",$.current.value="",Se(oe=>oe.map(ne=>({...ne,testClass:!1}))),qe(oe=>oe.map(ne=>({...ne,isIndicated:!1}))),k(null),x([]),I(0)}if(e==!0)return v.jsx(v.Fragment,{children:v.jsxs("div",{className:bn.sign_up_wrapper,children:[v.jsx(me,{func:()=>{t(!1),Q(),c(1)},content:"X",className:bn.goToStartingPage}),v.jsxs("form",{onSubmit:oe=>{oe.preventDefault()},className:bn.form_1,children:[v.jsx("header",{children:"SIGN UP"}),v.jsxs("div",{className:bn.to_bottom,children:[v.jsx(AB,{indicated:R,show:F,showConfirm:_e,setShowConfirm:oe=>{P(oe)},setShow:oe=>{re(oe)},passwordInput:d,confirmPasswordInput:S,emailInput:m,passWarning:p,confirmWarning:A,emailWarning:y}),v.jsx(xB,{indicated:R,usageOptions:je,setUsageOptions:oe=>{qe(oe)},handleUsageOptions:oe=>{Z(oe)},usingAsInput:$}),v.jsx(kB,{indicated:R,schoolInput:G,schoolWarning:M,grSecInput:B,grSecWarning:H,nickNameInput:D,nameWarning:V}),v.jsx(jB,{indicated:R,subjects:ce,handleSubjects:oe=>{ve(oe)}}),v.jsxs("div",{className:bn.bottom,children:[v.jsxs("div",{className:bn.buttons,children:[v.jsx(me,{content:"BACK",func:()=>{be("back")}}),v.jsx(me,{content:R==3||R==0?"SUBMIT":"NEXT",func:()=>{R==3||R==0?be("Submit"):be("next")}})]}),v.jsxs("div",{className:bn.indicator,children:[v.jsx("div",{className:R==0?bn.indicated:bn.not_indicated}),v.jsx("div",{className:R==1?bn.indicated:bn.not_indicated}),v.jsx("div",{className:R==2?bn.indicated:bn.not_indicated}),v.jsx("div",{className:R==3?bn.indicated:bn.not_indicated})]}),v.jsxs("h4",{id:bn.SignUp,onClick:()=>{n(!0),t(!1),Q()},children:[" ",v.jsx("a",{children:"Already Have an Account?"})," "]})]})]})]})]})})},QB="_Signing_Out_Wrapper_dvflz_5",XB="_Hide_Signing_Out_Wrapper_dvflz_5",ZB="_Signing_Out_Box_dvflz_47",JB="_Top_dvflz_75",ez="_Options_dvflz_137",pc={Signing_Out_Wrapper:QB,Hide_Signing_Out_Wrapper:XB,Signing_Out_Box:ZB,Top:JB,Options:ez},tz=({isSigningOut:n,setIsSigningOut:e,setLoading:t,setUser:i})=>{const a=async()=>{t(!0);try{await Ew(In),i(null),t(!1),e(!1)}catch(l){t(!1),e(!1),console.log(l)}};if(n)return v.jsx("div",{className:n?pc.Signing_Out_Wrapper:pc.Hide_Signing_Out_Wrapper,children:v.jsxs("div",{className:pc.Signing_Out_Box,children:[v.jsxs("div",{className:pc.Top,children:[v.jsx("i",{className:"fa fa-user"}),v.jsx("h3",{children:"Would You Like To Sign Out?"})]}),v.jsxs("div",{className:pc.Options,children:[v.jsx(me,{content:"No",func:()=>{e(!1)}}),v.jsx(me,{content:"Yes",func:()=>{a()}})]})]})})},nz="_Make_User_Sign_In_Wrapper_27ajl_1",iz="_Hide_Make_User_Sign_In_Wrapper_27ajl_1",sz="_Make_User_Sign_In_Box_27ajl_43",rz="_Images_27ajl_93",az="_Buttons_27ajl_161",oz="_Hide_Prompt_Button_27ajl_205",ml={Make_User_Sign_In_Wrapper:nz,Hide_Make_User_Sign_In_Wrapper:iz,Make_User_Sign_In_Box:sz,Images:rz,Buttons:az,Hide_Prompt_Button:oz},lz=({showMakeUserSignIn:n,setShowMakeUserSignIn:e,setPage:t,setShowSignInPrompt:i,setShowSignUpPrompt:a,user:l})=>{function c(){e(!1),t(1);let d=window.location.href;d.toLowerCase();let p=d.search("/Acad/");d=d.slice(0,p+6).concat("#Home"),window.location.href=d}return v.jsx(v.Fragment,{children:v.jsx("div",{className:n&&!l?ml.Make_User_Sign_In_Wrapper:ml.Hide_Make_User_Sign_In_Wrapper,children:v.jsxs("div",{className:ml.Make_User_Sign_In_Box,children:[v.jsx(me,{icon:v.jsx("i",{className:"fa fa-close"}),className:ml.Hide_Prompt_Button,func:()=>{c()}}),v.jsxs("div",{className:ml.Images,children:[v.jsx("img",{src:"./cat.png"}),v.jsx("img",{src:"./!.png"})]}),v.jsx("h1",{children:"You're not Signed In !"}),v.jsx("p",{children:"Create an account, log in and get free access to the advanced To-Do List Web Application"}),v.jsxs("div",{className:ml.Buttons,children:[v.jsx(me,{content:"Sign Up",func:()=>{a(!0),e(!1)}}),v.jsx(me,{content:"Sign In",func:()=>{i(!0),e(!1)}})]})]})})})},uz="_Pages_1x53v_25",cz="_Hide_Pages_1x53v_31",PA={Pages:uz,Hide_Pages:cz};function hz(){const[n,e]=te.useState(!0),[t,i]=te.useState(!1),[a,l]=te.useState(window.location.href),[c,d]=te.useState(!1),[p,m]=te.useState(!1),[y,S]=te.useState(!1),[A,D]=te.useState(!1),[V,G]=te.useState(!1),[M,B]=te.useState(!1),[H,$]=te.useState(!1),[F,re]=te.useState(!1),[_e,P]=te.useState(1),[R,I]=te.useState(0),[N,k]=te.useState(null),[L,x]=te.useState(null),[je,qe]=te.useState([]),[ce,Se]=te.useState(null),he=async()=>{if(N){const b=Vi(ji,"Users",N==null?void 0:N.uid);try{const Z=await Ud(b);Z.exists&&qe(Z.data())}catch(Z){console.log(Z)}}},be=async()=>{try{const b=await Ud(Vi(ji,"Users",N==null?void 0:N.uid));b&&Se(b.data())}catch(b){console.log(b)}};return XD(In,b=>{(b==null?void 0:b.uid)!=null?k(b):qe(null)}),te.useEffect(()=>{N!=null&&N.uid&&(he(),be())},[N]),te.useEffect(()=>{a&&(a.includes("#Home")?P(1):a.includes("#Tasks")?(console.log(a),(N==null?void 0:N.uid)!=null?(P(2),re(!1)):re(!0)):a.includes("#About")?P(3):a.includes("#Contacts")&&P(4)),N!=null&&N.uid&&be()},[N]),te.useEffect(()=>{let b=window.location.href;b.toLowerCase();let Z=b.search("/Acad/");switch(b=b.slice(0,Z+6),_e){case 1:b=b.concat("#Home"),l(b),I(0);break;case 2:N?(b=b.concat("#Tasks"),l(b),I(1)):re(!0);break;case 3:b=b.concat("#About"),l(b),I(2);break;case 4:b=b.concat("#Contacts"),l(b),I(3);break}},[_e]),v.jsxs("div",{children:[v.jsx(Bj,{setPage:b=>{P(b)},page:_e,setIndicated:b=>{I(b)},indicated:R,editing:t,url:a,setUrl:b=>{l(b)},showSignInPrompt:c,setShowSignInPrompt:b=>{d(b)},showSignUpPrompt:p,setShowSignUpPrompt:b=>{m(b)},user:N,continueAs:A,setIsSigningOut:b=>{B(b)},setPaging:b=>{x(b)},showNavBar:n,setShowNavbar:b=>{e(b)},setShowSaveChanges:b=>{$(b)},setShowMakeUserSignIn:b=>re(b),getAccountInformation:()=>be(),showPersonalInformation:V,setShowPersonalInformation:b=>G(b)}),v.jsxs("div",{className:!c&&!p&&!V?PA.Pages:PA.Hide_Pages,children:[v.jsx(zj,{page:_e,setPage:b=>{P(b)},setIndicated:b=>{I(b)},indicated:R,user:N}),v.jsx(o6,{setPage:b=>P(b),page:_e,getTask:je,editing:t,setEditing:b=>{i(b)},user:N,setUser:b=>{k(b)},loading:y,setLoading:b=>S(b),paging:L,setPaging:b=>{x(b)},showNavBar:n,setShowNavbar:b=>{e(b)},showSaveChanges:H,setShowSaveChanges:b=>$(b)})]}),v.jsx(sB,{showPersonalInformation:V,setShowPersonalInformation:b=>G(b),accInformation:ce,setAccInformation:Se,user:N,setLoading:b=>S(b)}),v.jsx(TB,{page:_e,setPage:b=>P(b),showSignInPrompt:c,setShowSignUpPrompt:b=>{m(b)},setShowSignInPrompt:b=>{d(b)},user:N,setUser:b=>{k(b)},setLoading:b=>S(b),setContinueAs:b=>D(b),loading:y,getAccountInformation:()=>be()}),v.jsx(YB,{page:_e,setPage:b=>P(b),showSignUpPrompt:p,setShowSignInPrompt:b=>{d(b)},setShowSignUpPrompt:b=>{m(b)},user:N,setUser:b=>{k(b)},setLoading:b=>S(b),setContinueAs:b=>D(b),loading:y}),v.jsx(a6,{loading:y}),v.jsx(uB,{continueAs:A,setContinueAs:b=>{D(b)},user:N,setUser:b=>k(b),setLoading:b=>S(b)}),v.jsx(tz,{isSigningOut:M,setIsSigningOut:b=>{B(b)},setLoading:b=>{S(b)},setUser:b=>{k(b)}}),v.jsx(lz,{showMakeUserSignIn:F,setShowMakeUserSignIn:b=>re(b),setPage:b=>P(b),setShowSignUpPrompt:b=>{m(b)},setShowSignInPrompt:b=>{d(b)},user:N==null?void 0:N.uid})]})}FN.createRoot(document.getElementById("root")).render(v.jsx(te.StrictMode,{children:v.jsx(hz,{})}));
