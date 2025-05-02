(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Jp={exports:{}},_u={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TE;function qC(){if(TE)return _u;TE=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:i,type:s,key:c,ref:a!==void 0?a:null,props:l}}return _u.Fragment=e,_u.jsx=t,_u.jsxs=t,_u}var SE;function GC(){return SE||(SE=1,Jp.exports=qC()),Jp.exports}var T=GC(),e_={exports:{}},ke={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AE;function KC(){if(AE)return ke;AE=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),S=Symbol.iterator;function I(k){return k===null||typeof k!="object"?null:(k=S&&k[S]||k["@@iterator"],typeof k=="function"?k:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,Y={};function z(k,ee,ae){this.props=k,this.context=ee,this.refs=Y,this.updater=ae||L}z.prototype.isReactComponent={},z.prototype.setState=function(k,ee){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,ee,"setState")},z.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function W(){}W.prototype=z.prototype;function Q(k,ee,ae){this.props=k,this.context=ee,this.refs=Y,this.updater=ae||L}var te=Q.prototype=new W;te.constructor=Q,F(te,z.prototype),te.isPureReactComponent=!0;var ce=Array.isArray,me={H:null,A:null,T:null,S:null},Te=Object.prototype.hasOwnProperty;function O(k,ee,ae,se,ue,ye){return ae=ye.ref,{$$typeof:i,type:k,key:ee,ref:ae!==void 0?ae:null,props:ye}}function C(k,ee){return O(k.type,ee,void 0,void 0,void 0,k.props)}function b(k){return typeof k=="object"&&k!==null&&k.$$typeof===i}function D(k){var ee={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(ae){return ee[ae]})}var x=/\/+/g;function P(k,ee){return typeof k=="object"&&k!==null&&k.key!=null?D(""+k.key):ee.toString(36)}function N(){}function ie(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(N,N):(k.status="pending",k.then(function(ee){k.status==="pending"&&(k.status="fulfilled",k.value=ee)},function(ee){k.status==="pending"&&(k.status="rejected",k.reason=ee)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function Ie(k,ee,ae,se,ue){var ye=typeof k;(ye==="undefined"||ye==="boolean")&&(k=null);var Ae=!1;if(k===null)Ae=!0;else switch(ye){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(k.$$typeof){case i:case e:Ae=!0;break;case E:return Ae=k._init,Ie(Ae(k._payload),ee,ae,se,ue)}}if(Ae)return ue=ue(k),Ae=se===""?"."+P(k,0):se,ce(ue)?(ae="",Ae!=null&&(ae=Ae.replace(x,"$&/")+"/"),Ie(ue,ee,ae,"",function(lt){return lt})):ue!=null&&(b(ue)&&(ue=C(ue,ae+(ue.key==null||k&&k.key===ue.key?"":(""+ue.key).replace(x,"$&/")+"/")+Ae)),ee.push(ue)),1;Ae=0;var ht=se===""?".":se+":";if(ce(k))for(var Ge=0;Ge<k.length;Ge++)se=k[Ge],ye=ht+P(se,Ge),Ae+=Ie(se,ee,ae,ye,ue);else if(Ge=I(k),typeof Ge=="function")for(k=Ge.call(k),Ge=0;!(se=k.next()).done;)se=se.value,ye=ht+P(se,Ge++),Ae+=Ie(se,ee,ae,ye,ue);else if(ye==="object"){if(typeof k.then=="function")return Ie(ie(k),ee,ae,se,ue);throw ee=String(k),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function re(k,ee,ae){if(k==null)return k;var se=[],ue=0;return Ie(k,se,"","",function(ye){return ee.call(ae,ye,ue++)}),se}function fe(k){if(k._status===-1){var ee=k._result;ee=ee(),ee.then(function(ae){(k._status===0||k._status===-1)&&(k._status=1,k._result=ae)},function(ae){(k._status===0||k._status===-1)&&(k._status=2,k._result=ae)}),k._status===-1&&(k._status=0,k._result=ee)}if(k._status===1)return k._result.default;throw k._result}var de=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)};function Se(){}return ke.Children={map:re,forEach:function(k,ee,ae){re(k,function(){ee.apply(this,arguments)},ae)},count:function(k){var ee=0;return re(k,function(){ee++}),ee},toArray:function(k){return re(k,function(ee){return ee})||[]},only:function(k){if(!b(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},ke.Component=z,ke.Fragment=t,ke.Profiler=a,ke.PureComponent=Q,ke.StrictMode=s,ke.Suspense=_,ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=me,ke.act=function(){throw Error("act(...) is not supported in production builds of React.")},ke.cache=function(k){return function(){return k.apply(null,arguments)}},ke.cloneElement=function(k,ee,ae){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var se=F({},k.props),ue=k.key,ye=void 0;if(ee!=null)for(Ae in ee.ref!==void 0&&(ye=void 0),ee.key!==void 0&&(ue=""+ee.key),ee)!Te.call(ee,Ae)||Ae==="key"||Ae==="__self"||Ae==="__source"||Ae==="ref"&&ee.ref===void 0||(se[Ae]=ee[Ae]);var Ae=arguments.length-2;if(Ae===1)se.children=ae;else if(1<Ae){for(var ht=Array(Ae),Ge=0;Ge<Ae;Ge++)ht[Ge]=arguments[Ge+2];se.children=ht}return O(k.type,ue,void 0,void 0,ye,se)},ke.createContext=function(k){return k={$$typeof:c,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:l,_context:k},k},ke.createElement=function(k,ee,ae){var se,ue={},ye=null;if(ee!=null)for(se in ee.key!==void 0&&(ye=""+ee.key),ee)Te.call(ee,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(ue[se]=ee[se]);var Ae=arguments.length-2;if(Ae===1)ue.children=ae;else if(1<Ae){for(var ht=Array(Ae),Ge=0;Ge<Ae;Ge++)ht[Ge]=arguments[Ge+2];ue.children=ht}if(k&&k.defaultProps)for(se in Ae=k.defaultProps,Ae)ue[se]===void 0&&(ue[se]=Ae[se]);return O(k,ye,void 0,void 0,null,ue)},ke.createRef=function(){return{current:null}},ke.forwardRef=function(k){return{$$typeof:d,render:k}},ke.isValidElement=b,ke.lazy=function(k){return{$$typeof:E,_payload:{_status:-1,_result:k},_init:fe}},ke.memo=function(k,ee){return{$$typeof:m,type:k,compare:ee===void 0?null:ee}},ke.startTransition=function(k){var ee=me.T,ae={};me.T=ae;try{var se=k(),ue=me.S;ue!==null&&ue(ae,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(Se,de)}catch(ye){de(ye)}finally{me.T=ee}},ke.unstable_useCacheRefresh=function(){return me.H.useCacheRefresh()},ke.use=function(k){return me.H.use(k)},ke.useActionState=function(k,ee,ae){return me.H.useActionState(k,ee,ae)},ke.useCallback=function(k,ee){return me.H.useCallback(k,ee)},ke.useContext=function(k){return me.H.useContext(k)},ke.useDebugValue=function(){},ke.useDeferredValue=function(k,ee){return me.H.useDeferredValue(k,ee)},ke.useEffect=function(k,ee){return me.H.useEffect(k,ee)},ke.useId=function(){return me.H.useId()},ke.useImperativeHandle=function(k,ee,ae){return me.H.useImperativeHandle(k,ee,ae)},ke.useInsertionEffect=function(k,ee){return me.H.useInsertionEffect(k,ee)},ke.useLayoutEffect=function(k,ee){return me.H.useLayoutEffect(k,ee)},ke.useMemo=function(k,ee){return me.H.useMemo(k,ee)},ke.useOptimistic=function(k,ee){return me.H.useOptimistic(k,ee)},ke.useReducer=function(k,ee,ae){return me.H.useReducer(k,ee,ae)},ke.useRef=function(k){return me.H.useRef(k)},ke.useState=function(k){return me.H.useState(k)},ke.useSyncExternalStore=function(k,ee,ae){return me.H.useSyncExternalStore(k,ee,ae)},ke.useTransition=function(){return me.H.useTransition()},ke.version="19.0.0",ke}var wE;function am(){return wE||(wE=1,e_.exports=KC()),e_.exports}var le=am(),t_={exports:{}},mu={},n_={exports:{}},i_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bE;function WC(){return bE||(bE=1,function(i){function e(re,fe){var de=re.length;re.push(fe);e:for(;0<de;){var Se=de-1>>>1,k=re[Se];if(0<a(k,fe))re[Se]=fe,re[de]=k,de=Se;else break e}}function t(re){return re.length===0?null:re[0]}function s(re){if(re.length===0)return null;var fe=re[0],de=re.pop();if(de!==fe){re[0]=de;e:for(var Se=0,k=re.length,ee=k>>>1;Se<ee;){var ae=2*(Se+1)-1,se=re[ae],ue=ae+1,ye=re[ue];if(0>a(se,de))ue<k&&0>a(ye,se)?(re[Se]=ye,re[ue]=de,Se=ue):(re[Se]=se,re[ae]=de,Se=ae);else if(ue<k&&0>a(ye,de))re[Se]=ye,re[ue]=de,Se=ue;else break e}}return fe}function a(re,fe){var de=re.sortIndex-fe.sortIndex;return de!==0?de:re.id-fe.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();i.unstable_now=function(){return c.now()-d}}var _=[],m=[],E=1,S=null,I=3,L=!1,F=!1,Y=!1,z=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function te(re){for(var fe=t(m);fe!==null;){if(fe.callback===null)s(m);else if(fe.startTime<=re)s(m),fe.sortIndex=fe.expirationTime,e(_,fe);else break;fe=t(m)}}function ce(re){if(Y=!1,te(re),!F)if(t(_)!==null)F=!0,ie();else{var fe=t(m);fe!==null&&Ie(ce,fe.startTime-re)}}var me=!1,Te=-1,O=5,C=-1;function b(){return!(i.unstable_now()-C<O)}function D(){if(me){var re=i.unstable_now();C=re;var fe=!0;try{e:{F=!1,Y&&(Y=!1,W(Te),Te=-1),L=!0;var de=I;try{t:{for(te(re),S=t(_);S!==null&&!(S.expirationTime>re&&b());){var Se=S.callback;if(typeof Se=="function"){S.callback=null,I=S.priorityLevel;var k=Se(S.expirationTime<=re);if(re=i.unstable_now(),typeof k=="function"){S.callback=k,te(re),fe=!0;break t}S===t(_)&&s(_),te(re)}else s(_);S=t(_)}if(S!==null)fe=!0;else{var ee=t(m);ee!==null&&Ie(ce,ee.startTime-re),fe=!1}}break e}finally{S=null,I=de,L=!1}fe=void 0}}finally{fe?x():me=!1}}}var x;if(typeof Q=="function")x=function(){Q(D)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,N=P.port2;P.port1.onmessage=D,x=function(){N.postMessage(null)}}else x=function(){z(D,0)};function ie(){me||(me=!0,x())}function Ie(re,fe){Te=z(function(){re(i.unstable_now())},fe)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(re){re.callback=null},i.unstable_continueExecution=function(){F||L||(F=!0,ie())},i.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<re?Math.floor(1e3/re):5},i.unstable_getCurrentPriorityLevel=function(){return I},i.unstable_getFirstCallbackNode=function(){return t(_)},i.unstable_next=function(re){switch(I){case 1:case 2:case 3:var fe=3;break;default:fe=I}var de=I;I=fe;try{return re()}finally{I=de}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(re,fe){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var de=I;I=re;try{return fe()}finally{I=de}},i.unstable_scheduleCallback=function(re,fe,de){var Se=i.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?Se+de:Se):de=Se,re){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=de+k,re={id:E++,callback:fe,priorityLevel:re,startTime:de,expirationTime:k,sortIndex:-1},de>Se?(re.sortIndex=de,e(m,re),t(_)===null&&re===t(m)&&(Y?(W(Te),Te=-1):Y=!0,Ie(ce,de-Se))):(re.sortIndex=k,e(_,re),F||L||(F=!0,ie())),re},i.unstable_shouldYield=b,i.unstable_wrapCallback=function(re){var fe=I;return function(){var de=I;I=fe;try{return re.apply(this,arguments)}finally{I=de}}}}(i_)),i_}var CE;function QC(){return CE||(CE=1,n_.exports=WC()),n_.exports}var s_={exports:{}},cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RE;function YC(){if(RE)return cn;RE=1;var i=am();function e(_){var m="https://react.dev/errors/"+_;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)m+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+_+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(_,m,E){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:S==null?null:""+S,children:_,containerInfo:m,implementation:E}}var c=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(_,m){if(_==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,cn.createPortal=function(_,m){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return l(_,m,null,E)},cn.flushSync=function(_){var m=c.T,E=s.p;try{if(c.T=null,s.p=2,_)return _()}finally{c.T=m,s.p=E,s.d.f()}},cn.preconnect=function(_,m){typeof _=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(_,m))},cn.prefetchDNS=function(_){typeof _=="string"&&s.d.D(_)},cn.preinit=function(_,m){if(typeof _=="string"&&m&&typeof m.as=="string"){var E=m.as,S=d(E,m.crossOrigin),I=typeof m.integrity=="string"?m.integrity:void 0,L=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;E==="style"?s.d.S(_,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:S,integrity:I,fetchPriority:L}):E==="script"&&s.d.X(_,{crossOrigin:S,integrity:I,fetchPriority:L,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},cn.preinitModule=function(_,m){if(typeof _=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var E=d(m.as,m.crossOrigin);s.d.M(_,{crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(_)},cn.preload=function(_,m){if(typeof _=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var E=m.as,S=d(E,m.crossOrigin);s.d.L(_,E,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},cn.preloadModule=function(_,m){if(typeof _=="string")if(m){var E=d(m.as,m.crossOrigin);s.d.m(_,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(_)},cn.requestFormReset=function(_){s.d.r(_)},cn.unstable_batchedUpdates=function(_,m){return _(m)},cn.useFormState=function(_,m,E){return c.H.useFormState(_,m,E)},cn.useFormStatus=function(){return c.H.useHostTransitionStatus()},cn.version="19.0.0",cn}var IE;function $C(){if(IE)return s_.exports;IE=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),s_.exports=YC(),s_.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NE;function XC(){if(NE)return mu;NE=1;var i=QC(),e=am(),t=$C();function s(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}var l=Symbol.for("react.element"),c=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),I=Symbol.for("react.consumer"),L=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),te=Symbol.for("react.offscreen"),ce=Symbol.for("react.memo_cache_sentinel"),me=Symbol.iterator;function Te(n){return n===null||typeof n!="object"?null:(n=me&&n[me]||n["@@iterator"],typeof n=="function"?n:null)}var O=Symbol.for("react.client.reference");function C(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===O?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case _:return"Fragment";case d:return"Portal";case E:return"Profiler";case m:return"StrictMode";case Y:return"Suspense";case z:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case L:return(n.displayName||"Context")+".Provider";case I:return(n._context.displayName||"Context")+".Consumer";case F:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case W:return r=n.displayName||null,r!==null?r:C(n.type)||"Memo";case Q:r=n._payload,n=n._init;try{return C(n(r))}catch{}}return null}var b=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=Object.assign,x,P;function N(n){if(x===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);x=r&&r[1]||"",P=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+x+n+P}var ie=!1;function Ie(n,r){if(!n||ie)return"";ie=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(G){var H=G}Reflect.construct(n,[],J)}else{try{J.call()}catch(G){H=G}n.call(J.prototype)}}else{try{throw Error()}catch(G){H=G}(J=n())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(G){if(G&&H&&typeof G.stack=="string")return[G.stack,H.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=u.DetermineComponentFrameRoot(),v=p[0],A=p[1];if(v&&A){var R=v.split(`
`),V=A.split(`
`);for(f=u=0;u<R.length&&!R[u].includes("DetermineComponentFrameRoot");)u++;for(;f<V.length&&!V[f].includes("DetermineComponentFrameRoot");)f++;if(u===R.length||f===V.length)for(u=R.length-1,f=V.length-1;1<=u&&0<=f&&R[u]!==V[f];)f--;for(;1<=u&&0<=f;u--,f--)if(R[u]!==V[f]){if(u!==1||f!==1)do if(u--,f--,0>f||R[u]!==V[f]){var K=`
`+R[u].replace(" at new "," at ");return n.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",n.displayName)),K}while(1<=u&&0<=f);break}}}finally{ie=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?N(o):""}function re(n){switch(n.tag){case 26:case 27:case 5:return N(n.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 15:return n=Ie(n.type,!1),n;case 11:return n=Ie(n.type.render,!1),n;case 1:return n=Ie(n.type,!0),n;default:return""}}function fe(n){try{var r="";do r+=re(n),n=n.return;while(n);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function de(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function Se(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function k(n){if(de(n)!==n)throw Error(s(188))}function ee(n){var r=n.alternate;if(!r){if(r=de(n),r===null)throw Error(s(188));return r!==n?null:n}for(var o=n,u=r;;){var f=o.return;if(f===null)break;var p=f.alternate;if(p===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===o)return k(f),n;if(p===u)return k(f),r;p=p.sibling}throw Error(s(188))}if(o.return!==u.return)o=f,u=p;else{for(var v=!1,A=f.child;A;){if(A===o){v=!0,o=f,u=p;break}if(A===u){v=!0,u=f,o=p;break}A=A.sibling}if(!v){for(A=p.child;A;){if(A===o){v=!0,o=p,u=f;break}if(A===u){v=!0,u=p,o=f;break}A=A.sibling}if(!v)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?n:r}function ae(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=ae(n),r!==null)return r;n=n.sibling}return null}var se=Array.isArray,ue=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ye={pending:!1,data:null,method:null,action:null},Ae=[],ht=-1;function Ge(n){return{current:n}}function lt(n){0>ht||(n.current=Ae[ht],Ae[ht]=null,ht--)}function $(n,r){ht++,Ae[ht]=n.current,n.current=r}var Me=Ge(null),Bt=Ge(null),zt=Ge(null),vi=Ge(null);function ai(n,r){switch($(zt,r),$(Bt,n),$(Me,null),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)&&(r=r.namespaceURI)?$v(r):0;break;default:if(n=n===8?r.parentNode:r,r=n.tagName,n=n.namespaceURI)n=$v(n),r=Xv(n,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}lt(Me),$(Me,r)}function oi(){lt(Me),lt(Bt),lt(zt)}function cl(n){n.memoizedState!==null&&$(vi,n);var r=Me.current,o=Xv(r,n.type);r!==o&&($(Bt,n),$(Me,o))}function La(n){Bt.current===n&&(lt(Me),lt(Bt)),vi.current===n&&(lt(vi),cu._currentValue=ye)}var Ua=Object.prototype.hasOwnProperty,Pr=i.unstable_scheduleCallback,ja=i.unstable_cancelCallback,td=i.unstable_shouldYield,hl=i.unstable_requestPaint,wn=i.unstable_now,mc=i.unstable_getCurrentPriorityLevel,Ot=i.unstable_ImmediatePriority,Ht=i.unstable_UserBlockingPriority,Ki=i.unstable_NormalPriority,gc=i.unstable_LowPriority,fl=i.unstable_IdlePriority,nd=i.log,Vr=i.unstable_setDisableYieldValue,Os=null,ln=null;function dl(n){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(Os,n,void 0,(n.current.flags&128)===128)}catch{}}function Ei(n){if(typeof nd=="function"&&Vr(n),ln&&typeof ln.setStrictMode=="function")try{ln.setStrictMode(Os,n)}catch{}}var vn=Math.clz32?Math.clz32:vc,pl=Math.log,yc=Math.LN2;function vc(n){return n>>>=0,n===0?32:31-(pl(n)/yc|0)|0}var Ti=128,xs=4194304;function li(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Bn(n,r){var o=n.pendingLanes;if(o===0)return 0;var u=0,f=n.suspendedLanes,p=n.pingedLanes,v=n.warmLanes;n=n.finishedLanes!==0;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=li(o):(p&=A,p!==0?u=li(p):n||(v=A&~v,v!==0&&(u=li(v))))):(A=o&~f,A!==0?u=li(A):p!==0?u=li(p):n||(v=o&~v,v!==0&&(u=li(v)))),u===0?0:r!==0&&r!==u&&(r&f)===0&&(f=u&-u,v=r&-r,f>=v||f===32&&(v&4194176)!==0)?r:u}function ks(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function Ba(n,r){switch(n){case 1:case 2:case 4:case 8:return r+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _l(){var n=Ti;return Ti<<=1,(Ti&4194176)===0&&(Ti=128),n}function Ms(){var n=xs;return xs<<=1,(xs&62914560)===0&&(xs=4194304),n}function za(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function wt(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Ec(n,r,o,u,f,p){var v=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var A=n.entanglements,R=n.expirationTimes,V=n.hiddenUpdates;for(o=v&~o;0<o;){var K=31-vn(o),J=1<<K;A[K]=0,R[K]=-1;var H=V[K];if(H!==null)for(V[K]=null,K=0;K<H.length;K++){var G=H[K];G!==null&&(G.lane&=-536870913)}o&=~J}u!==0&&Ps(n,u,0),p!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=p&~(v&~r))}function Ps(n,r,o){n.pendingLanes|=r,n.suspendedLanes&=~r;var u=31-vn(r);n.entangledLanes|=r,n.entanglements[u]=n.entanglements[u]|1073741824|o&4194218}function Vs(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-vn(o),f=1<<u;f&r|n[u]&r&&(n[u]|=r),o&=~f}}function Tc(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Sc(){var n=ue.p;return n!==0?n:(n=window.event,n===void 0?32:_E(n.type))}function Ls(n,r){var o=ue.p;try{return ue.p=n,r()}finally{ue.p=o}}var Si=Math.random().toString(36).slice(2),Ft="__reactFiber$"+Si,xt="__reactProps$"+Si,Wi="__reactContainer$"+Si,Lr="__reactEvents$"+Si,Ha="__reactListeners$"+Si,Ai="__reactHandles$"+Si,ml="__reactResources$"+Si,Us="__reactMarker$"+Si;function Ur(n){delete n[Ft],delete n[xt],delete n[Lr],delete n[Ha],delete n[Ai]}function ui(n){var r=n[Ft];if(r)return r;for(var o=n.parentNode;o;){if(r=o[Wi]||o[Ft]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=eE(n);n!==null;){if(o=n[Ft])return o;n=eE(n)}return r}n=o,o=n.parentNode}return null}function Qi(n){if(n=n[Ft]||n[Wi]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function js(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(s(33))}function Bs(n){var r=n[ml];return r||(r=n[ml]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function _t(n){n[Us]=!0}var gl=new Set,Fa={};function Dn(n,r){bn(n,r),bn(n+"Capture",r)}function bn(n,r){for(Fa[n]=r,n=0;n<r.length;n++)gl.add(r[n])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),id=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yl={},vl={};function Ac(n){return Ua.call(vl,n)?!0:Ua.call(yl,n)?!1:id.test(n)?vl[n]=!0:(yl[n]=!0,!1)}function zs(n,r,o){if(Ac(r))if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+o)}}function Hs(n,r,o){if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+o)}}function zn(n,r,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(r,o,""+u)}}function En(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function wc(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function sd(n){var r=wc(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,p=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return f.call(this)},set:function(v){u=""+v,p.call(this,v)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(v){u=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function jr(n){n._valueTracker||(n._valueTracker=sd(n))}function El(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=wc(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function qa(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Yi=/[\n"\\]/g;function vt(n){return n.replace(Yi,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Fs(n,r,o,u,f,p,v,A){n.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?n.type=v:n.removeAttribute("type"),r!=null?v==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+En(r)):n.value!==""+En(r)&&(n.value=""+En(r)):v!=="submit"&&v!=="reset"||n.removeAttribute("value"),r!=null?Ga(n,v,En(r)):o!=null?Ga(n,v,En(o)):u!=null&&n.removeAttribute("value"),f==null&&p!=null&&(n.defaultChecked=!!p),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?n.name=""+En(A):n.removeAttribute("name")}function Br(n,r,o,u,f,p,v,A){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(n.type=p),r!=null||o!=null){if(!(p!=="submit"&&p!=="reset"||r!=null))return;o=o!=null?""+En(o):"",r=r!=null?""+En(r):o,A||r===n.value||(n.value=r),n.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=A?n.checked:!!u,n.defaultChecked=!!u,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(n.name=v)}function Ga(n,r,o){r==="number"&&qa(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function Ze(n,r,o,u){if(n=n.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=r.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&u&&(n[o].defaultSelected=!0)}else{for(o=""+En(o),r=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}r!==null||n[f].disabled||(r=n[f])}r!==null&&(r.selected=!0)}}function zr(n,r,o){if(r!=null&&(r=""+En(r),r!==n.value&&(n.value=r),o==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=o!=null?""+En(o):""}function qs(n,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(se(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=En(r),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u)}function Hn(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var rd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tl(n,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":u?n.setProperty(r,o):typeof o!="number"||o===0||rd.has(r)?r==="float"?n.cssFloat=o:n[r]=(""+o).trim():n[r]=o+"px"}function bc(n,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&Tl(n,f,u)}else for(var p in r)r.hasOwnProperty(p)&&Tl(n,p,r[p])}function Sl(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ad=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),od=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wi(n){return od.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Fn=null;function Ka(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var $i=null,Xi=null;function Zi(n){var r=Qi(n);if(r&&(n=r.stateNode)){var o=n[xt]||null;e:switch(n=r.stateNode,r.type){case"input":if(Fs(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+vt(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var f=u[xt]||null;if(!f)throw Error(s(90));Fs(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===n.form&&El(u)}break e;case"textarea":zr(n,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&Ze(n,!!o.multiple,r,!1)}}}var Al=!1;function Cc(n,r,o){if(Al)return n(r,o);Al=!0;try{var u=n(r);return u}finally{if(Al=!1,($i!==null||Xi!==null)&&(gh(),$i&&(r=$i,n=Xi,Xi=$i=null,Zi(r),n)))for(r=0;r<n.length;r++)Zi(n[r])}}function Hr(n,r){var o=n.stateNode;if(o===null)return null;var u=o[xt]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var qn=!1;if(On)try{var Fr={};Object.defineProperty(Fr,"passive",{get:function(){qn=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{qn=!1}var bi=null,Gs=null,Ji=null;function wl(){if(Ji)return Ji;var n,r=Gs,o=r.length,u,f="value"in bi?bi.value:bi.textContent,p=f.length;for(n=0;n<o&&r[n]===f[n];n++);var v=o-n;for(u=1;u<=v&&r[o-u]===f[p-u];u++);return Ji=f.slice(n,1<u?1-u:void 0)}function Ci(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Ri(){return!0}function bl(){return!1}function qt(n){function r(o,u,f,p,v){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var A in n)n.hasOwnProperty(A)&&(o=n[A],this[A]=o?o(p):p[A]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Ri:bl,this.isPropagationStopped=bl,this}return D(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ri)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ri)},persist:function(){},isPersistent:Ri}),r}var tt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wa=qt(tt),qr=D({},tt,{view:0,detail:0}),Rc=qt(qr),Qa,Ya,Ii,Gr=D({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qr,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ii&&(Ii&&n.type==="mousemove"?(Qa=n.screenX-Ii.screenX,Ya=n.screenY-Ii.screenY):Ya=Qa=0,Ii=n),Qa)},movementY:function(n){return"movementY"in n?n.movementY:Ya}}),Gn=qt(Gr),Ic=D({},Gr,{dataTransfer:0}),ld=qt(Ic),Kr=D({},qr,{relatedTarget:0}),$a=qt(Kr),Cl=D({},tt,{animationName:0,elapsedTime:0,pseudoElement:0}),Xa=qt(Cl),Nc=D({},tt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Za=qt(Nc),ud=D({},tt,{data:0}),Rl=qt(ud),Wr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Oc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Il(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Oc[n])?!!r[n]:!1}function Qr(){return Il}var xc=D({},qr,{key:function(n){if(n.key){var r=Wr[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ci(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Dc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qr,charCode:function(n){return n.type==="keypress"?Ci(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ci(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ja=qt(xc),kc=D({},Gr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nl=qt(kc),es=D({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qr}),Mc=qt(es),Pc=D({},tt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vc=qt(Pc),Lc=D({},Gr,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),eo=qt(Lc),Tn=D({},tt,{newState:0,oldState:0}),Uc=qt(Tn),jc=[9,13,27,32],Ni=On&&"CompositionEvent"in window,h=null;On&&"documentMode"in document&&(h=document.documentMode);var g=On&&"TextEvent"in window&&!h,y=On&&(!Ni||h&&8<h&&11>=h),w=" ",j=!1;function q(n,r){switch(n){case"keyup":return jc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oe(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ke=!1;function kt(n,r){switch(n){case"compositionend":return oe(r);case"keypress":return r.which!==32?null:(j=!0,w);case"textInput":return n=r.data,n===w&&j?null:n;default:return null}}function We(n,r){if(Ke)return n==="compositionend"||!Ni&&q(n,r)?(n=wl(),Ji=Gs=bi=null,Ke=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return y&&r.locale!=="ko"?null:r.data;default:return null}}var Gt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mt(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Gt[n.type]:r==="textarea"}function ts(n,r,o,u){$i?Xi?Xi.push(u):Xi=[u]:$i=u,r=Sh(r,"onChange"),0<r.length&&(o=new Wa("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var Zt=null,Di=null;function Dl(n){Gv(n,0)}function Bc(n){var r=js(n);if(El(r))return n}function Eg(n,r){if(n==="change")return r}var Tg=!1;if(On){var cd;if(On){var hd="oninput"in document;if(!hd){var Sg=document.createElement("div");Sg.setAttribute("oninput","return;"),hd=typeof Sg.oninput=="function"}cd=hd}else cd=!1;Tg=cd&&(!document.documentMode||9<document.documentMode)}function Ag(){Zt&&(Zt.detachEvent("onpropertychange",wg),Di=Zt=null)}function wg(n){if(n.propertyName==="value"&&Bc(Di)){var r=[];ts(r,Di,n,Ka(n)),Cc(Dl,r)}}function Eb(n,r,o){n==="focusin"?(Ag(),Zt=r,Di=o,Zt.attachEvent("onpropertychange",wg)):n==="focusout"&&Ag()}function Tb(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Bc(Di)}function Sb(n,r){if(n==="click")return Bc(r)}function Ab(n,r){if(n==="input"||n==="change")return Bc(r)}function wb(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var xn=typeof Object.is=="function"?Object.is:wb;function Ol(n,r){if(xn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!Ua.call(r,f)||!xn(n[f],r[f]))return!1}return!0}function bg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Cg(n,r){var o=bg(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=bg(o)}}function Rg(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Rg(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Ig(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=qa(n.document);r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=qa(n.document)}return r}function fd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function bb(n,r){var o=Ig(r);r=n.focusedElem;var u=n.selectionRange;if(o!==r&&r&&r.ownerDocument&&Rg(r.ownerDocument.documentElement,r)){if(u!==null&&fd(r)){if(n=u.start,o=u.end,o===void 0&&(o=n),"selectionStart"in r)r.selectionStart=n,r.selectionEnd=Math.min(o,r.value.length);else if(o=(n=r.ownerDocument||document)&&n.defaultView||window,o.getSelection){o=o.getSelection();var f=r.textContent.length,p=Math.min(u.start,f);u=u.end===void 0?p:Math.min(u.end,f),!o.extend&&p>u&&(f=u,u=p,p=f),f=Cg(r,p);var v=Cg(r,u);f&&v&&(o.rangeCount!==1||o.anchorNode!==f.node||o.anchorOffset!==f.offset||o.focusNode!==v.node||o.focusOffset!==v.offset)&&(n=n.createRange(),n.setStart(f.node,f.offset),o.removeAllRanges(),p>u?(o.addRange(n),o.extend(v.node,v.offset)):(n.setEnd(v.node,v.offset),o.addRange(n)))}}for(n=[],o=r;o=o.parentNode;)o.nodeType===1&&n.push({element:o,left:o.scrollLeft,top:o.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<n.length;r++)o=n[r],o.element.scrollLeft=o.left,o.element.scrollTop=o.top}}var Cb=On&&"documentMode"in document&&11>=document.documentMode,to=null,dd=null,xl=null,pd=!1;function Ng(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;pd||to==null||to!==qa(u)||(u=to,"selectionStart"in u&&fd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),xl&&Ol(xl,u)||(xl=u,u=Sh(dd,"onSelect"),0<u.length&&(r=new Wa("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=to)))}function Yr(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var no={animationend:Yr("Animation","AnimationEnd"),animationiteration:Yr("Animation","AnimationIteration"),animationstart:Yr("Animation","AnimationStart"),transitionrun:Yr("Transition","TransitionRun"),transitionstart:Yr("Transition","TransitionStart"),transitioncancel:Yr("Transition","TransitionCancel"),transitionend:Yr("Transition","TransitionEnd")},_d={},Dg={};On&&(Dg=document.createElement("div").style,"AnimationEvent"in window||(delete no.animationend.animation,delete no.animationiteration.animation,delete no.animationstart.animation),"TransitionEvent"in window||delete no.transitionend.transition);function $r(n){if(_d[n])return _d[n];if(!no[n])return n;var r=no[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in Dg)return _d[n]=r[o];return n}var Og=$r("animationend"),xg=$r("animationiteration"),kg=$r("animationstart"),Rb=$r("transitionrun"),Ib=$r("transitionstart"),Nb=$r("transitioncancel"),Mg=$r("transitionend"),Pg=new Map,Vg="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function ci(n,r){Pg.set(n,r),Dn(r,[n])}var Kn=[],io=0,md=0;function zc(){for(var n=io,r=md=io=0;r<n;){var o=Kn[r];Kn[r++]=null;var u=Kn[r];Kn[r++]=null;var f=Kn[r];Kn[r++]=null;var p=Kn[r];if(Kn[r++]=null,u!==null&&f!==null){var v=u.pending;v===null?f.next=f:(f.next=v.next,v.next=f),u.pending=f}p!==0&&Lg(o,f,p)}}function Hc(n,r,o,u){Kn[io++]=n,Kn[io++]=r,Kn[io++]=o,Kn[io++]=u,md|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function gd(n,r,o,u){return Hc(n,r,o,u),Fc(n)}function Ks(n,r){return Hc(n,null,null,r),Fc(n)}function Lg(n,r,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var f=!1,p=n.return;p!==null;)p.childLanes|=o,u=p.alternate,u!==null&&(u.childLanes|=o),p.tag===22&&(n=p.stateNode,n===null||n._visibility&1||(f=!0)),n=p,p=p.return;f&&r!==null&&n.tag===3&&(p=n.stateNode,f=31-vn(o),p=p.hiddenUpdates,n=p[f],n===null?p[f]=[r]:n.push(r),r.lane=o|536870912)}function Fc(n){if(50<iu)throw iu=0,Ap=null,Error(s(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var so={},Ug=new WeakMap;function Wn(n,r){if(typeof n=="object"&&n!==null){var o=Ug.get(n);return o!==void 0?o:(r={value:n,source:r,stack:fe(r)},Ug.set(n,r),r)}return{value:n,source:r,stack:fe(r)}}var ro=[],ao=0,qc=null,Gc=0,Qn=[],Yn=0,Xr=null,ns=1,is="";function Zr(n,r){ro[ao++]=Gc,ro[ao++]=qc,qc=n,Gc=r}function jg(n,r,o){Qn[Yn++]=ns,Qn[Yn++]=is,Qn[Yn++]=Xr,Xr=n;var u=ns;n=is;var f=32-vn(u)-1;u&=~(1<<f),o+=1;var p=32-vn(r)+f;if(30<p){var v=f-f%5;p=(u&(1<<v)-1).toString(32),u>>=v,f-=v,ns=1<<32-vn(r)+f|o<<f|u,is=p+n}else ns=1<<p|o<<f|u,is=n}function yd(n){n.return!==null&&(Zr(n,1),jg(n,1,0))}function vd(n){for(;n===qc;)qc=ro[--ao],ro[ao]=null,Gc=ro[--ao],ro[ao]=null;for(;n===Xr;)Xr=Qn[--Yn],Qn[Yn]=null,is=Qn[--Yn],Qn[Yn]=null,ns=Qn[--Yn],Qn[Yn]=null}var Sn=null,Jt=null,Je=!1,hi=null,Oi=!1,Ed=Error(s(519));function Jr(n){var r=Error(s(418,""));throw Pl(Wn(r,n)),Ed}function Bg(n){var r=n.stateNode,o=n.type,u=n.memoizedProps;switch(r[Ft]=n,r[xt]=u,o){case"dialog":ze("cancel",r),ze("close",r);break;case"iframe":case"object":case"embed":ze("load",r);break;case"video":case"audio":for(o=0;o<ru.length;o++)ze(ru[o],r);break;case"source":ze("error",r);break;case"img":case"image":case"link":ze("error",r),ze("load",r);break;case"details":ze("toggle",r);break;case"input":ze("invalid",r),Br(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),jr(r);break;case"select":ze("invalid",r);break;case"textarea":ze("invalid",r),qs(r,u.value,u.defaultValue,u.children),jr(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||Yv(r.textContent,o)?(u.popover!=null&&(ze("beforetoggle",r),ze("toggle",r)),u.onScroll!=null&&ze("scroll",r),u.onScrollEnd!=null&&ze("scrollend",r),u.onClick!=null&&(r.onclick=Ah),r=!0):r=!1,r||Jr(n)}function zg(n){for(Sn=n.return;Sn;)switch(Sn.tag){case 3:case 27:Oi=!0;return;case 5:case 13:Oi=!1;return;default:Sn=Sn.return}}function kl(n){if(n!==Sn)return!1;if(!Je)return zg(n),Je=!0,!1;var r=!1,o;if((o=n.tag!==3&&n.tag!==27)&&((o=n.tag===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||Bp(n.type,n.memoizedProps)),o=!o),o&&(r=!0),r&&Jt&&Jr(n),zg(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(r===0){Jt=di(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;n=n.nextSibling}Jt=null}}else Jt=Sn?di(n.stateNode.nextSibling):null;return!0}function Ml(){Jt=Sn=null,Je=!1}function Pl(n){hi===null?hi=[n]:hi.push(n)}var Vl=Error(s(460)),Hg=Error(s(474)),Td={then:function(){}};function Fg(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Kc(){}function qg(n,r,o){switch(o=n[o],o===void 0?n.push(r):o!==r&&(r.then(Kc,Kc),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,n===Vl?Error(s(483)):n;default:if(typeof r.status=="string")r.then(Kc,Kc);else{if(n=ut,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=r,n.status="pending",n.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,n===Vl?Error(s(483)):n}throw Ll=r,Vl}}var Ll=null;function Gg(){if(Ll===null)throw Error(s(459));var n=Ll;return Ll=null,n}var oo=null,Ul=0;function Wc(n){var r=Ul;return Ul+=1,oo===null&&(oo=[]),qg(oo,n,r)}function jl(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function Qc(n,r){throw r.$$typeof===l?Error(s(525)):(n=Object.prototype.toString.call(r),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function Kg(n){var r=n._init;return r(n._payload)}function Wg(n){function r(U,M){if(n){var B=U.deletions;B===null?(U.deletions=[M],U.flags|=16):B.push(M)}}function o(U,M){if(!n)return null;for(;M!==null;)r(U,M),M=M.sibling;return null}function u(U){for(var M=new Map;U!==null;)U.key!==null?M.set(U.key,U):M.set(U.index,U),U=U.sibling;return M}function f(U,M){return U=sr(U,M),U.index=0,U.sibling=null,U}function p(U,M,B){return U.index=B,n?(B=U.alternate,B!==null?(B=B.index,B<M?(U.flags|=33554434,M):B):(U.flags|=33554434,M)):(U.flags|=1048576,M)}function v(U){return n&&U.alternate===null&&(U.flags|=33554434),U}function A(U,M,B,X){return M===null||M.tag!==6?(M=_p(B,U.mode,X),M.return=U,M):(M=f(M,B),M.return=U,M)}function R(U,M,B,X){var _e=B.type;return _e===_?K(U,M,B.props.children,X,B.key):M!==null&&(M.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===Q&&Kg(_e)===M.type)?(M=f(M,B.props),jl(M,B),M.return=U,M):(M=fh(B.type,B.key,B.props,null,U.mode,X),jl(M,B),M.return=U,M)}function V(U,M,B,X){return M===null||M.tag!==4||M.stateNode.containerInfo!==B.containerInfo||M.stateNode.implementation!==B.implementation?(M=mp(B,U.mode,X),M.return=U,M):(M=f(M,B.children||[]),M.return=U,M)}function K(U,M,B,X,_e){return M===null||M.tag!==7?(M=ua(B,U.mode,X,_e),M.return=U,M):(M=f(M,B),M.return=U,M)}function J(U,M,B){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=_p(""+M,U.mode,B),M.return=U,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case c:return B=fh(M.type,M.key,M.props,null,U.mode,B),jl(B,M),B.return=U,B;case d:return M=mp(M,U.mode,B),M.return=U,M;case Q:var X=M._init;return M=X(M._payload),J(U,M,B)}if(se(M)||Te(M))return M=ua(M,U.mode,B,null),M.return=U,M;if(typeof M.then=="function")return J(U,Wc(M),B);if(M.$$typeof===L)return J(U,uh(U,M),B);Qc(U,M)}return null}function H(U,M,B,X){var _e=M!==null?M.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return _e!==null?null:A(U,M,""+B,X);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case c:return B.key===_e?R(U,M,B,X):null;case d:return B.key===_e?V(U,M,B,X):null;case Q:return _e=B._init,B=_e(B._payload),H(U,M,B,X)}if(se(B)||Te(B))return _e!==null?null:K(U,M,B,X,null);if(typeof B.then=="function")return H(U,M,Wc(B),X);if(B.$$typeof===L)return H(U,M,uh(U,B),X);Qc(U,B)}return null}function G(U,M,B,X,_e){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return U=U.get(B)||null,A(M,U,""+X,_e);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case c:return U=U.get(X.key===null?B:X.key)||null,R(M,U,X,_e);case d:return U=U.get(X.key===null?B:X.key)||null,V(M,U,X,_e);case Q:var Le=X._init;return X=Le(X._payload),G(U,M,B,X,_e)}if(se(X)||Te(X))return U=U.get(B)||null,K(M,U,X,_e,null);if(typeof X.then=="function")return G(U,M,B,Wc(X),_e);if(X.$$typeof===L)return G(U,M,B,uh(M,X),_e);Qc(M,X)}return null}function ge(U,M,B,X){for(var _e=null,Le=null,ve=M,Ce=M=0,Qt=null;ve!==null&&Ce<B.length;Ce++){ve.index>Ce?(Qt=ve,ve=null):Qt=ve.sibling;var et=H(U,ve,B[Ce],X);if(et===null){ve===null&&(ve=Qt);break}n&&ve&&et.alternate===null&&r(U,ve),M=p(et,M,Ce),Le===null?_e=et:Le.sibling=et,Le=et,ve=Qt}if(Ce===B.length)return o(U,ve),Je&&Zr(U,Ce),_e;if(ve===null){for(;Ce<B.length;Ce++)ve=J(U,B[Ce],X),ve!==null&&(M=p(ve,M,Ce),Le===null?_e=ve:Le.sibling=ve,Le=ve);return Je&&Zr(U,Ce),_e}for(ve=u(ve);Ce<B.length;Ce++)Qt=G(ve,U,Ce,B[Ce],X),Qt!==null&&(n&&Qt.alternate!==null&&ve.delete(Qt.key===null?Ce:Qt.key),M=p(Qt,M,Ce),Le===null?_e=Qt:Le.sibling=Qt,Le=Qt);return n&&ve.forEach(function(hr){return r(U,hr)}),Je&&Zr(U,Ce),_e}function Oe(U,M,B,X){if(B==null)throw Error(s(151));for(var _e=null,Le=null,ve=M,Ce=M=0,Qt=null,et=B.next();ve!==null&&!et.done;Ce++,et=B.next()){ve.index>Ce?(Qt=ve,ve=null):Qt=ve.sibling;var hr=H(U,ve,et.value,X);if(hr===null){ve===null&&(ve=Qt);break}n&&ve&&hr.alternate===null&&r(U,ve),M=p(hr,M,Ce),Le===null?_e=hr:Le.sibling=hr,Le=hr,ve=Qt}if(et.done)return o(U,ve),Je&&Zr(U,Ce),_e;if(ve===null){for(;!et.done;Ce++,et=B.next())et=J(U,et.value,X),et!==null&&(M=p(et,M,Ce),Le===null?_e=et:Le.sibling=et,Le=et);return Je&&Zr(U,Ce),_e}for(ve=u(ve);!et.done;Ce++,et=B.next())et=G(ve,U,Ce,et.value,X),et!==null&&(n&&et.alternate!==null&&ve.delete(et.key===null?Ce:et.key),M=p(et,M,Ce),Le===null?_e=et:Le.sibling=et,Le=et);return n&&ve.forEach(function(FC){return r(U,FC)}),Je&&Zr(U,Ce),_e}function St(U,M,B,X){if(typeof B=="object"&&B!==null&&B.type===_&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case c:e:{for(var _e=B.key;M!==null;){if(M.key===_e){if(_e=B.type,_e===_){if(M.tag===7){o(U,M.sibling),X=f(M,B.props.children),X.return=U,U=X;break e}}else if(M.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===Q&&Kg(_e)===M.type){o(U,M.sibling),X=f(M,B.props),jl(X,B),X.return=U,U=X;break e}o(U,M);break}else r(U,M);M=M.sibling}B.type===_?(X=ua(B.props.children,U.mode,X,B.key),X.return=U,U=X):(X=fh(B.type,B.key,B.props,null,U.mode,X),jl(X,B),X.return=U,U=X)}return v(U);case d:e:{for(_e=B.key;M!==null;){if(M.key===_e)if(M.tag===4&&M.stateNode.containerInfo===B.containerInfo&&M.stateNode.implementation===B.implementation){o(U,M.sibling),X=f(M,B.children||[]),X.return=U,U=X;break e}else{o(U,M);break}else r(U,M);M=M.sibling}X=mp(B,U.mode,X),X.return=U,U=X}return v(U);case Q:return _e=B._init,B=_e(B._payload),St(U,M,B,X)}if(se(B))return ge(U,M,B,X);if(Te(B)){if(_e=Te(B),typeof _e!="function")throw Error(s(150));return B=_e.call(B),Oe(U,M,B,X)}if(typeof B.then=="function")return St(U,M,Wc(B),X);if(B.$$typeof===L)return St(U,M,uh(U,B),X);Qc(U,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,M!==null&&M.tag===6?(o(U,M.sibling),X=f(M,B),X.return=U,U=X):(o(U,M),X=_p(B,U.mode,X),X.return=U,U=X),v(U)):o(U,M)}return function(U,M,B,X){try{Ul=0;var _e=St(U,M,B,X);return oo=null,_e}catch(ve){if(ve===Vl)throw ve;var Le=Jn(29,ve,null,U.mode);return Le.lanes=X,Le.return=U,Le}finally{}}}var ea=Wg(!0),Qg=Wg(!1),lo=Ge(null),Yc=Ge(0);function Yg(n,r){n=ps,$(Yc,n),$(lo,r),ps=n|r.baseLanes}function Sd(){$(Yc,ps),$(lo,lo.current)}function Ad(){ps=Yc.current,lt(lo),lt(Yc)}var $n=Ge(null),xi=null;function Ws(n){var r=n.alternate;$(Pt,Pt.current&1),$($n,n),xi===null&&(r===null||lo.current!==null||r.memoizedState!==null)&&(xi=n)}function $g(n){if(n.tag===22){if($(Pt,Pt.current),$($n,n),xi===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&(xi=n)}}else Qs()}function Qs(){$(Pt,Pt.current),$($n,$n.current)}function ss(n){lt($n),xi===n&&(xi=null),lt(Pt)}var Pt=Ge(0);function $c(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Db=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){r.aborted=!0,n.forEach(function(o){return o()})}},Ob=i.unstable_scheduleCallback,xb=i.unstable_NormalPriority,Vt={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wd(){return{controller:new Db,data:new Map,refCount:0}}function Bl(n){n.refCount--,n.refCount===0&&Ob(xb,function(){n.controller.abort()})}var zl=null,bd=0,uo=0,co=null;function kb(n,r){if(zl===null){var o=zl=[];bd=0,uo=Op(),co={status:"pending",value:void 0,then:function(u){o.push(u)}}}return bd++,r.then(Xg,Xg),r}function Xg(){if(--bd===0&&zl!==null){co!==null&&(co.status="fulfilled");var n=zl;zl=null,uo=0,co=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function Mb(n,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return n.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var Zg=b.S;b.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&kb(n,r),Zg!==null&&Zg(n,r)};var ta=Ge(null);function Cd(){var n=ta.current;return n!==null?n:ut.pooledCache}function Xc(n,r){r===null?$(ta,ta.current):$(ta,r.pool)}function Jg(){var n=Cd();return n===null?null:{parent:Vt._currentValue,pool:n}}var Ys=0,Pe=null,st=null,Rt=null,Zc=!1,ho=!1,na=!1,Jc=0,Hl=0,fo=null,Pb=0;function bt(){throw Error(s(321))}function Rd(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!xn(n[o],r[o]))return!1;return!0}function Id(n,r,o,u,f,p){return Ys=p,Pe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,b.H=n===null||n.memoizedState===null?ia:$s,na=!1,p=o(u,f),na=!1,ho&&(p=ty(r,o,u,f)),ey(n),p}function ey(n){b.H=ki;var r=st!==null&&st.next!==null;if(Ys=0,Rt=st=Pe=null,Zc=!1,Hl=0,fo=null,r)throw Error(s(300));n===null||Kt||(n=n.dependencies,n!==null&&lh(n)&&(Kt=!0))}function ty(n,r,o,u){Pe=n;var f=0;do{if(ho&&(fo=null),Hl=0,ho=!1,25<=f)throw Error(s(301));if(f+=1,Rt=st=null,n.updateQueue!=null){var p=n.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}b.H=sa,p=r(o,u)}while(ho);return p}function Vb(){var n=b.H,r=n.useState()[0];return r=typeof r.then=="function"?Fl(r):r,n=n.useState()[0],(st!==null?st.memoizedState:null)!==n&&(Pe.flags|=1024),r}function Nd(){var n=Jc!==0;return Jc=0,n}function Dd(n,r,o){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~o}function Od(n){if(Zc){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Zc=!1}Ys=0,Rt=st=Pe=null,ho=!1,Hl=Jc=0,fo=null}function Cn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?Pe.memoizedState=Rt=n:Rt=Rt.next=n,Rt}function It(){if(st===null){var n=Pe.alternate;n=n!==null?n.memoizedState:null}else n=st.next;var r=Rt===null?Pe.memoizedState:Rt.next;if(r!==null)Rt=r,st=n;else{if(n===null)throw Pe.alternate===null?Error(s(467)):Error(s(310));st=n,n={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},Rt===null?Pe.memoizedState=Rt=n:Rt=Rt.next=n}return Rt}var eh;eh=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Fl(n){var r=Hl;return Hl+=1,fo===null&&(fo=[]),n=qg(fo,n,r),r=Pe,(Rt===null?r.memoizedState:Rt.next)===null&&(r=r.alternate,b.H=r===null||r.memoizedState===null?ia:$s),n}function th(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Fl(n);if(n.$$typeof===L)return un(n)}throw Error(s(438,String(n)))}function xd(n){var r=null,o=Pe.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Pe.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=eh(),Pe.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(n),u=0;u<n;u++)o[u]=ce;return r.index++,o}function rs(n,r){return typeof r=="function"?r(n):r}function nh(n){var r=It();return kd(r,st,n)}function kd(n,r,o){var u=n.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var f=n.baseQueue,p=u.pending;if(p!==null){if(f!==null){var v=f.next;f.next=p.next,p.next=v}r.baseQueue=f=p,u.pending=null}if(p=n.baseState,f===null)n.memoizedState=p;else{r=f.next;var A=v=null,R=null,V=r,K=!1;do{var J=V.lane&-536870913;if(J!==V.lane?(Qe&J)===J:(Ys&J)===J){var H=V.revertLane;if(H===0)R!==null&&(R=R.next={lane:0,revertLane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),J===uo&&(K=!0);else if((Ys&H)===H){V=V.next,H===uo&&(K=!0);continue}else J={lane:0,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},R===null?(A=R=J,v=p):R=R.next=J,Pe.lanes|=H,rr|=H;J=V.action,na&&o(p,J),p=V.hasEagerState?V.eagerState:o(p,J)}else H={lane:J,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},R===null?(A=R=H,v=p):R=R.next=H,Pe.lanes|=J,rr|=J;V=V.next}while(V!==null&&V!==r);if(R===null?v=p:R.next=A,!xn(p,n.memoizedState)&&(Kt=!0,K&&(o=co,o!==null)))throw o;n.memoizedState=p,n.baseState=v,n.baseQueue=R,u.lastRenderedState=p}return f===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function Md(n){var r=It(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=n;var u=o.dispatch,f=o.pending,p=r.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do p=n(p,v.action),v=v.next;while(v!==f);xn(p,r.memoizedState)||(Kt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),o.lastRenderedState=p}return[p,u]}function ny(n,r,o){var u=Pe,f=It(),p=Je;if(p){if(o===void 0)throw Error(s(407));o=o()}else o=r();var v=!xn((st||f).memoizedState,o);if(v&&(f.memoizedState=o,Kt=!0),f=f.queue,Ld(ry.bind(null,u,f,n),[n]),f.getSnapshot!==r||v||Rt!==null&&Rt.memoizedState.tag&1){if(u.flags|=2048,po(9,sy.bind(null,u,f,o,r),{destroy:void 0},null),ut===null)throw Error(s(349));p||(Ys&60)!==0||iy(u,r,o)}return o}function iy(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Pe.updateQueue,r===null?(r=eh(),Pe.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function sy(n,r,o,u){r.value=o,r.getSnapshot=u,ay(r)&&oy(n)}function ry(n,r,o){return o(function(){ay(r)&&oy(n)})}function ay(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!xn(n,o)}catch{return!0}}function oy(n){var r=Ks(n,2);r!==null&&An(r,n,2)}function Pd(n){var r=Cn();if(typeof n=="function"){var o=n;if(n=o(),na){Ei(!0);try{o()}finally{Ei(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:n},r}function ly(n,r,o,u){return n.baseState=o,kd(n,st,typeof u=="function"?u:rs)}function Lb(n,r,o,u,f){if(rh(n))throw Error(s(485));if(n=r.action,n!==null){var p={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){p.listeners.push(v)}};b.T!==null?o(!0):p.isTransition=!1,u(p),o=r.pending,o===null?(p.next=r.pending=p,uy(r,p)):(p.next=o.next,r.pending=o.next=p)}}function uy(n,r){var o=r.action,u=r.payload,f=n.state;if(r.isTransition){var p=b.T,v={};b.T=v;try{var A=o(f,u),R=b.S;R!==null&&R(v,A),cy(n,r,A)}catch(V){Vd(n,r,V)}finally{b.T=p}}else try{p=o(f,u),cy(n,r,p)}catch(V){Vd(n,r,V)}}function cy(n,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){hy(n,r,u)},function(u){return Vd(n,r,u)}):hy(n,r,o)}function hy(n,r,o){r.status="fulfilled",r.value=o,fy(r),n.state=o,r=n.pending,r!==null&&(o=r.next,o===r?n.pending=null:(o=o.next,r.next=o,uy(n,o)))}function Vd(n,r,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,fy(r),r=r.next;while(r!==u)}n.action=null}function fy(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function dy(n,r){return r}function py(n,r){if(Je){var o=ut.formState;if(o!==null){e:{var u=Pe;if(Je){if(Jt){t:{for(var f=Jt,p=Oi;f.nodeType!==8;){if(!p){f=null;break t}if(f=di(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){Jt=di(f.nextSibling),u=f.data==="F!";break e}}Jr(u)}u=!1}u&&(r=o[0])}}return o=Cn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dy,lastRenderedState:r},o.queue=u,o=xy.bind(null,Pe,u),u.dispatch=o,u=Pd(!1),p=Hd.bind(null,Pe,!1,u.queue),u=Cn(),f={state:r,dispatch:null,action:n,pending:null},u.queue=f,o=Lb.bind(null,Pe,f,p,o),f.dispatch=o,u.memoizedState=n,[r,o,!1]}function _y(n){var r=It();return my(r,st,n)}function my(n,r,o){r=kd(n,r,dy)[0],n=nh(rs)[0],r=typeof r=="object"&&r!==null&&typeof r.then=="function"?Fl(r):r;var u=It(),f=u.queue,p=f.dispatch;return o!==u.memoizedState&&(Pe.flags|=2048,po(9,Ub.bind(null,f,o),{destroy:void 0},null)),[r,p,n]}function Ub(n,r){n.action=r}function gy(n){var r=It(),o=st;if(o!==null)return my(r,o,n);It(),r=r.memoizedState,o=It();var u=o.queue.dispatch;return o.memoizedState=n,[r,u,!1]}function po(n,r,o,u){return n={tag:n,create:r,inst:o,deps:u,next:null},r=Pe.updateQueue,r===null&&(r=eh(),Pe.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n),n}function yy(){return It().memoizedState}function ih(n,r,o,u){var f=Cn();Pe.flags|=n,f.memoizedState=po(1|r,o,{destroy:void 0},u===void 0?null:u)}function sh(n,r,o,u){var f=It();u=u===void 0?null:u;var p=f.memoizedState.inst;st!==null&&u!==null&&Rd(u,st.memoizedState.deps)?f.memoizedState=po(r,o,p,u):(Pe.flags|=n,f.memoizedState=po(1|r,o,p,u))}function vy(n,r){ih(8390656,8,n,r)}function Ld(n,r){sh(2048,8,n,r)}function Ey(n,r){return sh(4,2,n,r)}function Ty(n,r){return sh(4,4,n,r)}function Sy(n,r){if(typeof r=="function"){n=n();var o=r(n);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Ay(n,r,o){o=o!=null?o.concat([n]):null,sh(4,4,Sy.bind(null,r,n),o)}function Ud(){}function wy(n,r){var o=It();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&Rd(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function by(n,r){var o=It();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&Rd(r,u[1]))return u[0];if(u=n(),na){Ei(!0);try{n()}finally{Ei(!1)}}return o.memoizedState=[u,r],u}function jd(n,r,o){return o===void 0||(Ys&1073741824)!==0?n.memoizedState=r:(n.memoizedState=o,n=Rv(),Pe.lanes|=n,rr|=n,o)}function Cy(n,r,o,u){return xn(o,r)?o:lo.current!==null?(n=jd(n,o,u),xn(n,r)||(Kt=!0),n):(Ys&42)===0?(Kt=!0,n.memoizedState=o):(n=Rv(),Pe.lanes|=n,rr|=n,r)}function Ry(n,r,o,u,f){var p=ue.p;ue.p=p!==0&&8>p?p:8;var v=b.T,A={};b.T=A,Hd(n,!1,r,o);try{var R=f(),V=b.S;if(V!==null&&V(A,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var K=Mb(R,u);ql(n,r,K,Vn(n))}else ql(n,r,u,Vn(n))}catch(J){ql(n,r,{then:function(){},status:"rejected",reason:J},Vn())}finally{ue.p=p,b.T=v}}function jb(){}function Bd(n,r,o,u){if(n.tag!==5)throw Error(s(476));var f=Iy(n).queue;Ry(n,f,r,ye,o===null?jb:function(){return Ny(n),o(u)})}function Iy(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:ye,baseState:ye,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:ye},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:o},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function Ny(n){var r=Iy(n).next.queue;ql(n,r,{},Vn())}function zd(){return un(cu)}function Dy(){return It().memoizedState}function Oy(){return It().memoizedState}function Bb(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var o=Vn();n=Js(o);var u=er(r,n,o);u!==null&&(An(u,r,o),Wl(u,r,o)),r={cache:wd()},n.payload=r;return}r=r.return}}function zb(n,r,o){var u=Vn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},rh(n)?ky(r,o):(o=gd(n,r,o,u),o!==null&&(An(o,n,u),My(o,r,u)))}function xy(n,r,o){var u=Vn();ql(n,r,o,u)}function ql(n,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(rh(n))ky(r,f);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var v=r.lastRenderedState,A=p(v,o);if(f.hasEagerState=!0,f.eagerState=A,xn(A,v))return Hc(n,r,f,0),ut===null&&zc(),!1}catch{}finally{}if(o=gd(n,r,f,u),o!==null)return An(o,n,u),My(o,r,u),!0}return!1}function Hd(n,r,o,u){if(u={lane:2,revertLane:Op(),action:u,hasEagerState:!1,eagerState:null,next:null},rh(n)){if(r)throw Error(s(479))}else r=gd(n,o,u,2),r!==null&&An(r,n,2)}function rh(n){var r=n.alternate;return n===Pe||r!==null&&r===Pe}function ky(n,r){ho=Zc=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function My(n,r,o){if((o&4194176)!==0){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,Vs(n,o)}}var ki={readContext:un,use:th,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useLayoutEffect:bt,useInsertionEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useSyncExternalStore:bt,useId:bt};ki.useCacheRefresh=bt,ki.useMemoCache=bt,ki.useHostTransitionStatus=bt,ki.useFormState=bt,ki.useActionState=bt,ki.useOptimistic=bt;var ia={readContext:un,use:th,useCallback:function(n,r){return Cn().memoizedState=[n,r===void 0?null:r],n},useContext:un,useEffect:vy,useImperativeHandle:function(n,r,o){o=o!=null?o.concat([n]):null,ih(4194308,4,Sy.bind(null,r,n),o)},useLayoutEffect:function(n,r){return ih(4194308,4,n,r)},useInsertionEffect:function(n,r){ih(4,2,n,r)},useMemo:function(n,r){var o=Cn();r=r===void 0?null:r;var u=n();if(na){Ei(!0);try{n()}finally{Ei(!1)}}return o.memoizedState=[u,r],u},useReducer:function(n,r,o){var u=Cn();if(o!==void 0){var f=o(r);if(na){Ei(!0);try{o(r)}finally{Ei(!1)}}}else f=r;return u.memoizedState=u.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},u.queue=n,n=n.dispatch=zb.bind(null,Pe,n),[u.memoizedState,n]},useRef:function(n){var r=Cn();return n={current:n},r.memoizedState=n},useState:function(n){n=Pd(n);var r=n.queue,o=xy.bind(null,Pe,r);return r.dispatch=o,[n.memoizedState,o]},useDebugValue:Ud,useDeferredValue:function(n,r){var o=Cn();return jd(o,n,r)},useTransition:function(){var n=Pd(!1);return n=Ry.bind(null,Pe,n.queue,!0,!1),Cn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,o){var u=Pe,f=Cn();if(Je){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),ut===null)throw Error(s(349));(Qe&60)!==0||iy(u,r,o)}f.memoizedState=o;var p={value:o,getSnapshot:r};return f.queue=p,vy(ry.bind(null,u,p,n),[n]),u.flags|=2048,po(9,sy.bind(null,u,p,o,r),{destroy:void 0},null),o},useId:function(){var n=Cn(),r=ut.identifierPrefix;if(Je){var o=is,u=ns;o=(u&~(1<<32-vn(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=Jc++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=Pb++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},useCacheRefresh:function(){return Cn().memoizedState=Bb.bind(null,Pe)}};ia.useMemoCache=xd,ia.useHostTransitionStatus=zd,ia.useFormState=py,ia.useActionState=py,ia.useOptimistic=function(n){var r=Cn();r.memoizedState=r.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=Hd.bind(null,Pe,!0,o),o.dispatch=r,[n,r]};var $s={readContext:un,use:th,useCallback:wy,useContext:un,useEffect:Ld,useImperativeHandle:Ay,useInsertionEffect:Ey,useLayoutEffect:Ty,useMemo:by,useReducer:nh,useRef:yy,useState:function(){return nh(rs)},useDebugValue:Ud,useDeferredValue:function(n,r){var o=It();return Cy(o,st.memoizedState,n,r)},useTransition:function(){var n=nh(rs)[0],r=It().memoizedState;return[typeof n=="boolean"?n:Fl(n),r]},useSyncExternalStore:ny,useId:Dy};$s.useCacheRefresh=Oy,$s.useMemoCache=xd,$s.useHostTransitionStatus=zd,$s.useFormState=_y,$s.useActionState=_y,$s.useOptimistic=function(n,r){var o=It();return ly(o,st,n,r)};var sa={readContext:un,use:th,useCallback:wy,useContext:un,useEffect:Ld,useImperativeHandle:Ay,useInsertionEffect:Ey,useLayoutEffect:Ty,useMemo:by,useReducer:Md,useRef:yy,useState:function(){return Md(rs)},useDebugValue:Ud,useDeferredValue:function(n,r){var o=It();return st===null?jd(o,n,r):Cy(o,st.memoizedState,n,r)},useTransition:function(){var n=Md(rs)[0],r=It().memoizedState;return[typeof n=="boolean"?n:Fl(n),r]},useSyncExternalStore:ny,useId:Dy};sa.useCacheRefresh=Oy,sa.useMemoCache=xd,sa.useHostTransitionStatus=zd,sa.useFormState=gy,sa.useActionState=gy,sa.useOptimistic=function(n,r){var o=It();return st!==null?ly(o,st,n,r):(o.baseState=n,[n,o.queue.dispatch])};function Fd(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:D({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var qd={isMounted:function(n){return(n=n._reactInternals)?de(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var u=Vn(),f=Js(u);f.payload=r,o!=null&&(f.callback=o),r=er(n,f,u),r!==null&&(An(r,n,u),Wl(r,n,u))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=Vn(),f=Js(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=er(n,f,u),r!==null&&(An(r,n,u),Wl(r,n,u))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=Vn(),u=Js(o);u.tag=2,r!=null&&(u.callback=r),r=er(n,u,o),r!==null&&(An(r,n,o),Wl(r,n,o))}};function Py(n,r,o,u,f,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,p,v):r.prototype&&r.prototype.isPureReactComponent?!Ol(o,u)||!Ol(f,p):!0}function Vy(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&qd.enqueueReplaceState(r,r.state,null)}function ra(n,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(n=n.defaultProps){o===r&&(o=D({},o));for(var f in n)o[f]===void 0&&(o[f]=n[f])}return o}var ah=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Ly(n){ah(n)}function Uy(n){console.error(n)}function jy(n){ah(n)}function oh(n,r){try{var o=n.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function By(n,r,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Gd(n,r,o){return o=Js(o),o.tag=3,o.payload={element:null},o.callback=function(){oh(n,r)},o}function zy(n){return n=Js(n),n.tag=3,n}function Hy(n,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var p=u.value;n.payload=function(){return f(p)},n.callback=function(){By(r,o,u)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(n.callback=function(){By(r,o,u),typeof f!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var A=u.stack;this.componentDidCatch(u.value,{componentStack:A!==null?A:""})})}function Hb(n,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&Kl(r,o,f,!0),o=$n.current,o!==null){switch(o.tag){case 13:return xi===null?Cp():o.alternate===null&&Tt===0&&(Tt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Td?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),Ip(n,u,f)),!1;case 22:return o.flags|=65536,u===Td?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),Ip(n,u,f)),!1}throw Error(s(435,o.tag))}return Ip(n,u,f),Cp(),!1}if(Je)return r=$n.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==Ed&&(n=Error(s(422),{cause:u}),Pl(Wn(n,o)))):(u!==Ed&&(r=Error(s(423),{cause:u}),Pl(Wn(r,o))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,u=Wn(u,o),f=Gd(n.stateNode,u,f),ap(n,f),Tt!==4&&(Tt=2)),!1;var p=Error(s(520),{cause:u});if(p=Wn(p,o),tu===null?tu=[p]:tu.push(p),Tt!==4&&(Tt=2),r===null)return!0;u=Wn(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,n=f&-f,o.lanes|=n,n=Gd(o.stateNode,u,n),ap(o,n),!1;case 1:if(r=o.type,p=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ar===null||!ar.has(p))))return o.flags|=65536,f&=-f,o.lanes|=f,f=zy(f),Hy(f,n,o,u),ap(o,f),!1}o=o.return}while(o!==null);return!1}var Fy=Error(s(461)),Kt=!1;function en(n,r,o,u){r.child=n===null?Qg(r,null,o,u):ea(r,n.child,o,u)}function qy(n,r,o,u,f){o=o.render;var p=r.ref;if("ref"in u){var v={};for(var A in u)A!=="ref"&&(v[A]=u[A])}else v=u;return oa(r),u=Id(n,r,o,v,p,f),A=Nd(),n!==null&&!Kt?(Dd(n,r,f),as(n,r,f)):(Je&&A&&yd(r),r.flags|=1,en(n,r,u,f),r.child)}function Gy(n,r,o,u,f){if(n===null){var p=o.type;return typeof p=="function"&&!pp(p)&&p.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=p,Ky(n,r,p,u,f)):(n=fh(o.type,null,u,r,r.mode,f),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,!ep(n,f)){var v=p.memoizedProps;if(o=o.compare,o=o!==null?o:Ol,o(v,u)&&n.ref===r.ref)return as(n,r,f)}return r.flags|=1,n=sr(p,u),n.ref=r.ref,n.return=r,r.child=n}function Ky(n,r,o,u,f){if(n!==null){var p=n.memoizedProps;if(Ol(p,u)&&n.ref===r.ref)if(Kt=!1,r.pendingProps=u=p,ep(n,f))(n.flags&131072)!==0&&(Kt=!0);else return r.lanes=n.lanes,as(n,r,f)}return Kd(n,r,o,u,f)}function Wy(n,r,o){var u=r.pendingProps,f=u.children,p=(r.stateNode._pendingVisibility&2)!==0,v=n!==null?n.memoizedState:null;if(Gl(n,r),u.mode==="hidden"||p){if((r.flags&128)!==0){if(u=v!==null?v.baseLanes|o:o,n!==null){for(f=r.child=n.child,p=0;f!==null;)p=p|f.lanes|f.childLanes,f=f.sibling;r.childLanes=p&~u}else r.childLanes=0,r.child=null;return Qy(n,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&Xc(r,v!==null?v.cachePool:null),v!==null?Yg(r,v):Sd(),$g(r);else return r.lanes=r.childLanes=536870912,Qy(n,r,v!==null?v.baseLanes|o:o,o)}else v!==null?(Xc(r,v.cachePool),Yg(r,v),Qs(),r.memoizedState=null):(n!==null&&Xc(r,null),Sd(),Qs());return en(n,r,f,o),r.child}function Qy(n,r,o,u){var f=Cd();return f=f===null?null:{parent:Vt._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},n!==null&&Xc(r,null),Sd(),$g(r),n!==null&&Kl(n,r,u,!0),null}function Gl(n,r){var o=r.ref;if(o===null)n!==null&&n.ref!==null&&(r.flags|=2097664);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(n===null||n.ref!==o)&&(r.flags|=2097664)}}function Kd(n,r,o,u,f){return oa(r),o=Id(n,r,o,u,void 0,f),u=Nd(),n!==null&&!Kt?(Dd(n,r,f),as(n,r,f)):(Je&&u&&yd(r),r.flags|=1,en(n,r,o,f),r.child)}function Yy(n,r,o,u,f,p){return oa(r),r.updateQueue=null,o=ty(r,u,o,f),ey(n),u=Nd(),n!==null&&!Kt?(Dd(n,r,p),as(n,r,p)):(Je&&u&&yd(r),r.flags|=1,en(n,r,o,p),r.child)}function $y(n,r,o,u,f){if(oa(r),r.stateNode===null){var p=so,v=o.contextType;typeof v=="object"&&v!==null&&(p=un(v)),p=new o(u,p),r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=qd,r.stateNode=p,p._reactInternals=r,p=r.stateNode,p.props=u,p.state=r.memoizedState,p.refs={},sp(r),v=o.contextType,p.context=typeof v=="object"&&v!==null?un(v):so,p.state=r.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Fd(r,o,v,u),p.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(v=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),v!==p.state&&qd.enqueueReplaceState(p,p.state,null),Yl(r,u,p,f),Ql(),p.state=r.memoizedState),typeof p.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(n===null){p=r.stateNode;var A=r.memoizedProps,R=ra(o,A);p.props=R;var V=p.context,K=o.contextType;v=so,typeof K=="object"&&K!==null&&(v=un(K));var J=o.getDerivedStateFromProps;K=typeof J=="function"||typeof p.getSnapshotBeforeUpdate=="function",A=r.pendingProps!==A,K||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(A||V!==v)&&Vy(r,p,u,v),Zs=!1;var H=r.memoizedState;p.state=H,Yl(r,u,p,f),Ql(),V=r.memoizedState,A||H!==V||Zs?(typeof J=="function"&&(Fd(r,o,J,u),V=r.memoizedState),(R=Zs||Py(r,o,R,u,H,V,v))?(K||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(r.flags|=4194308)):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=V),p.props=u,p.state=V,p.context=v,u=R):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{p=r.stateNode,rp(n,r),v=r.memoizedProps,K=ra(o,v),p.props=K,J=r.pendingProps,H=p.context,V=o.contextType,R=so,typeof V=="object"&&V!==null&&(R=un(V)),A=o.getDerivedStateFromProps,(V=typeof A=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(v!==J||H!==R)&&Vy(r,p,u,R),Zs=!1,H=r.memoizedState,p.state=H,Yl(r,u,p,f),Ql();var G=r.memoizedState;v!==J||H!==G||Zs||n!==null&&n.dependencies!==null&&lh(n.dependencies)?(typeof A=="function"&&(Fd(r,o,A,u),G=r.memoizedState),(K=Zs||Py(r,o,K,u,H,G,R)||n!==null&&n.dependencies!==null&&lh(n.dependencies))?(V||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(u,G,R),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(u,G,R)),typeof p.componentDidUpdate=="function"&&(r.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof p.componentDidUpdate!="function"||v===n.memoizedProps&&H===n.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||v===n.memoizedProps&&H===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=G),p.props=u,p.state=G,p.context=R,u=K):(typeof p.componentDidUpdate!="function"||v===n.memoizedProps&&H===n.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||v===n.memoizedProps&&H===n.memoizedState||(r.flags|=1024),u=!1)}return p=u,Gl(n,r),u=(r.flags&128)!==0,p||u?(p=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:p.render(),r.flags|=1,n!==null&&u?(r.child=ea(r,n.child,null,f),r.child=ea(r,null,o,f)):en(n,r,o,f),r.memoizedState=p.state,n=r.child):n=as(n,r,f),n}function Xy(n,r,o,u){return Ml(),r.flags|=256,en(n,r,o,u),r.child}var Wd={dehydrated:null,treeContext:null,retryLane:0};function Qd(n){return{baseLanes:n,cachePool:Jg()}}function Yd(n,r,o){return n=n!==null?n.childLanes&~o:0,r&&(n|=ei),n}function Zy(n,r,o){var u=r.pendingProps,f=!1,p=(r.flags&128)!==0,v;if((v=p)||(v=n!==null&&n.memoizedState===null?!1:(Pt.current&2)!==0),v&&(f=!0,r.flags&=-129),v=(r.flags&32)!==0,r.flags&=-33,n===null){if(Je){if(f?Ws(r):Qs(),Je){var A=Jt,R;if(R=A){e:{for(R=A,A=Oi;R.nodeType!==8;){if(!A){A=null;break e}if(R=di(R.nextSibling),R===null){A=null;break e}}A=R}A!==null?(r.memoizedState={dehydrated:A,treeContext:Xr!==null?{id:ns,overflow:is}:null,retryLane:536870912},R=Jn(18,null,null,0),R.stateNode=A,R.return=r,r.child=R,Sn=r,Jt=null,R=!0):R=!1}R||Jr(r)}if(A=r.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return A.data==="$!"?r.lanes=16:r.lanes=536870912,null;ss(r)}return A=u.children,u=u.fallback,f?(Qs(),f=r.mode,A=Xd({mode:"hidden",children:A},f),u=ua(u,f,o,null),A.return=r,u.return=r,A.sibling=u,r.child=A,f=r.child,f.memoizedState=Qd(o),f.childLanes=Yd(n,v,o),r.memoizedState=Wd,u):(Ws(r),$d(r,A))}if(R=n.memoizedState,R!==null&&(A=R.dehydrated,A!==null)){if(p)r.flags&256?(Ws(r),r.flags&=-257,r=Zd(n,r,o)):r.memoizedState!==null?(Qs(),r.child=n.child,r.flags|=128,r=null):(Qs(),f=u.fallback,A=r.mode,u=Xd({mode:"visible",children:u.children},A),f=ua(f,A,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,ea(r,n.child,null,o),u=r.child,u.memoizedState=Qd(o),u.childLanes=Yd(n,v,o),r.memoizedState=Wd,r=f);else if(Ws(r),A.data==="$!"){if(v=A.nextSibling&&A.nextSibling.dataset,v)var V=v.dgst;v=V,u=Error(s(419)),u.stack="",u.digest=v,Pl({value:u,source:null,stack:null}),r=Zd(n,r,o)}else if(Kt||Kl(n,r,o,!1),v=(o&n.childLanes)!==0,Kt||v){if(v=ut,v!==null){if(u=o&-o,(u&42)!==0)u=1;else switch(u){case 2:u=1;break;case 8:u=4;break;case 32:u=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:u=64;break;case 268435456:u=134217728;break;default:u=0}if(u=(u&(v.suspendedLanes|o))!==0?0:u,u!==0&&u!==R.retryLane)throw R.retryLane=u,Ks(n,u),An(v,n,u),Fy}A.data==="$?"||Cp(),r=Zd(n,r,o)}else A.data==="$?"?(r.flags|=128,r.child=n.child,r=iC.bind(null,n),A._reactRetry=r,r=null):(n=R.treeContext,Jt=di(A.nextSibling),Sn=r,Je=!0,hi=null,Oi=!1,n!==null&&(Qn[Yn++]=ns,Qn[Yn++]=is,Qn[Yn++]=Xr,ns=n.id,is=n.overflow,Xr=r),r=$d(r,u.children),r.flags|=4096);return r}return f?(Qs(),f=u.fallback,A=r.mode,R=n.child,V=R.sibling,u=sr(R,{mode:"hidden",children:u.children}),u.subtreeFlags=R.subtreeFlags&31457280,V!==null?f=sr(V,f):(f=ua(f,A,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,A=n.child.memoizedState,A===null?A=Qd(o):(R=A.cachePool,R!==null?(V=Vt._currentValue,R=R.parent!==V?{parent:V,pool:V}:R):R=Jg(),A={baseLanes:A.baseLanes|o,cachePool:R}),f.memoizedState=A,f.childLanes=Yd(n,v,o),r.memoizedState=Wd,u):(Ws(r),o=n.child,n=o.sibling,o=sr(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,n!==null&&(v=r.deletions,v===null?(r.deletions=[n],r.flags|=16):v.push(n)),r.child=o,r.memoizedState=null,o)}function $d(n,r){return r=Xd({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function Xd(n,r){return wv(n,r,0,null)}function Zd(n,r,o){return ea(r,n.child,null,o),n=$d(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Jy(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),np(n.return,r,o)}function Jd(n,r,o,u,f){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=f)}function ev(n,r,o){var u=r.pendingProps,f=u.revealOrder,p=u.tail;if(en(n,r,u.children,o),u=Pt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Jy(n,o,r);else if(n.tag===19)Jy(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch($(Pt,u),f){case"forwards":for(o=r.child,f=null;o!==null;)n=o.alternate,n!==null&&$c(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),Jd(r,!1,f,o,p);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(n=f.alternate,n!==null&&$c(n)===null){r.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}Jd(r,!0,o,null,p);break;case"together":Jd(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function as(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),rr|=r.lanes,(o&r.childLanes)===0)if(n!==null){if(Kl(n,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(s(153));if(r.child!==null){for(n=r.child,o=sr(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=sr(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function ep(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&lh(n)))}function Fb(n,r,o){switch(r.tag){case 3:ai(r,r.stateNode.containerInfo),Xs(r,Vt,n.memoizedState.cache),Ml();break;case 27:case 5:cl(r);break;case 4:ai(r,r.stateNode.containerInfo);break;case 10:Xs(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(Ws(r),r.flags|=128,null):(o&r.child.childLanes)!==0?Zy(n,r,o):(Ws(r),n=as(n,r,o),n!==null?n.sibling:null);Ws(r);break;case 19:var f=(n.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(Kl(n,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return ev(n,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),$(Pt,Pt.current),u)break;return null;case 22:case 23:return r.lanes=0,Wy(n,r,o);case 24:Xs(r,Vt,n.memoizedState.cache)}return as(n,r,o)}function tv(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps)Kt=!0;else{if(!ep(n,o)&&(r.flags&128)===0)return Kt=!1,Fb(n,r,o);Kt=(n.flags&131072)!==0}else Kt=!1,Je&&(r.flags&1048576)!==0&&jg(r,Gc,r.index);switch(r.lanes=0,r.tag){case 16:e:{n=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")pp(u)?(n=ra(u,n),r.tag=1,r=$y(null,r,u,n,o)):(r.tag=0,r=Kd(null,r,u,n,o));else{if(u!=null){if(f=u.$$typeof,f===F){r.tag=11,r=qy(null,r,u,n,o);break e}else if(f===W){r.tag=14,r=Gy(null,r,u,n,o);break e}}throw r=C(u)||u,Error(s(306,r,""))}}return r;case 0:return Kd(n,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=ra(u,r.pendingProps),$y(n,r,u,f,o);case 3:e:{if(ai(r,r.stateNode.containerInfo),n===null)throw Error(s(387));var p=r.pendingProps;f=r.memoizedState,u=f.element,rp(n,r),Yl(r,p,null,o);var v=r.memoizedState;if(p=v.cache,Xs(r,Vt,p),p!==f.cache&&ip(r,[Vt],o,!0),Ql(),p=v.element,f.isDehydrated)if(f={element:p,isDehydrated:!1,cache:v.cache},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){r=Xy(n,r,p,o);break e}else if(p!==u){u=Wn(Error(s(424)),r),Pl(u),r=Xy(n,r,p,o);break e}else for(Jt=di(r.stateNode.containerInfo.firstChild),Sn=r,Je=!0,hi=null,Oi=!0,o=Qg(r,null,p,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ml(),p===u){r=as(n,r,o);break e}en(n,r,p,o)}r=r.child}return r;case 26:return Gl(n,r),n===null?(o=sE(r.type,null,r.pendingProps,null))?r.memoizedState=o:Je||(o=r.type,n=r.pendingProps,u=wh(zt.current).createElement(o),u[Ft]=r,u[xt]=n,tn(u,o,n),_t(u),r.stateNode=u):r.memoizedState=sE(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return cl(r),n===null&&Je&&(u=r.stateNode=tE(r.type,r.pendingProps,zt.current),Sn=r,Oi=!0,Jt=di(u.firstChild)),u=r.pendingProps.children,n!==null||Je?en(n,r,u,o):r.child=ea(r,null,u,o),Gl(n,r),r.child;case 5:return n===null&&Je&&((f=u=Jt)&&(u=vC(u,r.type,r.pendingProps,Oi),u!==null?(r.stateNode=u,Sn=r,Jt=di(u.firstChild),Oi=!1,f=!0):f=!1),f||Jr(r)),cl(r),f=r.type,p=r.pendingProps,v=n!==null?n.memoizedProps:null,u=p.children,Bp(f,p)?u=null:v!==null&&Bp(f,v)&&(r.flags|=32),r.memoizedState!==null&&(f=Id(n,r,Vb,null,null,o),cu._currentValue=f),Gl(n,r),en(n,r,u,o),r.child;case 6:return n===null&&Je&&((n=o=Jt)&&(o=EC(o,r.pendingProps,Oi),o!==null?(r.stateNode=o,Sn=r,Jt=null,n=!0):n=!1),n||Jr(r)),null;case 13:return Zy(n,r,o);case 4:return ai(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=ea(r,null,u,o):en(n,r,u,o),r.child;case 11:return qy(n,r,r.type,r.pendingProps,o);case 7:return en(n,r,r.pendingProps,o),r.child;case 8:return en(n,r,r.pendingProps.children,o),r.child;case 12:return en(n,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,Xs(r,r.type,u.value),en(n,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,oa(r),f=un(f),u=u(f),r.flags|=1,en(n,r,u,o),r.child;case 14:return Gy(n,r,r.type,r.pendingProps,o);case 15:return Ky(n,r,r.type,r.pendingProps,o);case 19:return ev(n,r,o);case 22:return Wy(n,r,o);case 24:return oa(r),u=un(Vt),n===null?(f=Cd(),f===null&&(f=ut,p=wd(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=o),f=p),r.memoizedState={parent:u,cache:f},sp(r),Xs(r,Vt,f)):((n.lanes&o)!==0&&(rp(n,r),Yl(r,null,null,o),Ql()),f=n.memoizedState,p=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),Xs(r,Vt,u)):(u=p.cache,Xs(r,Vt,u),u!==f.cache&&ip(r,[Vt],o,!0))),en(n,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}var tp=Ge(null),aa=null,os=null;function Xs(n,r,o){$(tp,r._currentValue),r._currentValue=o}function ls(n){n._currentValue=tp.current,lt(tp)}function np(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function ip(n,r,o,u){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var p=f.dependencies;if(p!==null){var v=f.child;p=p.firstContext;e:for(;p!==null;){var A=p;p=f;for(var R=0;R<r.length;R++)if(A.context===r[R]){p.lanes|=o,A=p.alternate,A!==null&&(A.lanes|=o),np(p.return,o,n),u||(v=null);break e}p=A.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(s(341));v.lanes|=o,p=v.alternate,p!==null&&(p.lanes|=o),np(v,o,n),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===n){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function Kl(n,r,o,u){n=null;for(var f=r,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var A=f.type;xn(f.pendingProps.value,v.value)||(n!==null?n.push(A):n=[A])}}else if(f===vi.current){if(v=f.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(cu):n=[cu])}f=f.return}n!==null&&ip(r,n,o,u),r.flags|=262144}function lh(n){for(n=n.firstContext;n!==null;){if(!xn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function oa(n){aa=n,os=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function un(n){return nv(aa,n)}function uh(n,r){return aa===null&&oa(n),nv(n,r)}function nv(n,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},os===null){if(n===null)throw Error(s(308));os=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else os=os.next=r;return o}var Zs=!1;function sp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function rp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Js(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function er(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(gt&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=Fc(n),Lg(n,null,o),r}return Hc(n,u,r,o),Fc(n)}function Wl(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194176)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,Vs(n,o)}}function ap(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};p===null?f=p=v:p=p.next=v,o=o.next}while(o!==null);p===null?f=p=r:p=p.next=r}else f=p=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}var op=!1;function Ql(){if(op){var n=co;if(n!==null)throw n}}function Yl(n,r,o,u){op=!1;var f=n.updateQueue;Zs=!1;var p=f.firstBaseUpdate,v=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var R=A,V=R.next;R.next=null,v===null?p=V:v.next=V,v=R;var K=n.alternate;K!==null&&(K=K.updateQueue,A=K.lastBaseUpdate,A!==v&&(A===null?K.firstBaseUpdate=V:A.next=V,K.lastBaseUpdate=R))}if(p!==null){var J=f.baseState;v=0,K=V=R=null,A=p;do{var H=A.lane&-536870913,G=H!==A.lane;if(G?(Qe&H)===H:(u&H)===H){H!==0&&H===uo&&(op=!0),K!==null&&(K=K.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var ge=n,Oe=A;H=r;var St=o;switch(Oe.tag){case 1:if(ge=Oe.payload,typeof ge=="function"){J=ge.call(St,J,H);break e}J=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=Oe.payload,H=typeof ge=="function"?ge.call(St,J,H):ge,H==null)break e;J=D({},J,H);break e;case 2:Zs=!0}}H=A.callback,H!==null&&(n.flags|=64,G&&(n.flags|=8192),G=f.callbacks,G===null?f.callbacks=[H]:G.push(H))}else G={lane:H,tag:A.tag,payload:A.payload,callback:A.callback,next:null},K===null?(V=K=G,R=J):K=K.next=G,v|=H;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;G=A,A=G.next,G.next=null,f.lastBaseUpdate=G,f.shared.pending=null}}while(!0);K===null&&(R=J),f.baseState=R,f.firstBaseUpdate=V,f.lastBaseUpdate=K,p===null&&(f.shared.lanes=0),rr|=v,n.lanes=v,n.memoizedState=J}}function iv(n,r){if(typeof n!="function")throw Error(s(191,n));n.call(r)}function sv(n,r){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)iv(o[n],r)}function $l(n,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&n)===n){u=void 0;var p=o.create,v=o.inst;u=p(),v.destroy=u}o=o.next}while(o!==f)}}catch(A){ot(r,r.return,A)}}function tr(n,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var p=f.next;u=p;do{if((u.tag&n)===n){var v=u.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,f=r;var R=o;try{A()}catch(V){ot(f,R,V)}}}u=u.next}while(u!==p)}}catch(V){ot(r,r.return,V)}}function rv(n){var r=n.updateQueue;if(r!==null){var o=n.stateNode;try{sv(r,o)}catch(u){ot(n,n.return,u)}}}function av(n,r,o){o.props=ra(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){ot(n,r,u)}}function la(n,r){try{var o=n.ref;if(o!==null){var u=n.stateNode;switch(n.tag){case 26:case 27:case 5:var f=u;break;default:f=u}typeof o=="function"?n.refCleanup=o(f):o.current=f}}catch(p){ot(n,r,p)}}function kn(n,r){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){ot(n,r,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){ot(n,r,f)}else o.current=null}function ov(n){var r=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){ot(n,n.return,f)}}function lv(n,r,o){try{var u=n.stateNode;pC(u,n.type,o,r),u[xt]=r}catch(f){ot(n,n.return,f)}}function uv(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27||n.tag===4}function lp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||uv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==27&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function up(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Ah));else if(u!==4&&u!==27&&(n=n.child,n!==null))for(up(n,r,o),n=n.sibling;n!==null;)up(n,r,o),n=n.sibling}function ch(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&u!==27&&(n=n.child,n!==null))for(ch(n,r,o),n=n.sibling;n!==null;)ch(n,r,o),n=n.sibling}var us=!1,Et=!1,cp=!1,cv=typeof WeakSet=="function"?WeakSet:Set,Wt=null,hv=!1;function qb(n,r){if(n=n.containerInfo,Up=Dh,n=Ig(n),fd(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var v=0,A=-1,R=-1,V=0,K=0,J=n,H=null;t:for(;;){for(var G;J!==o||f!==0&&J.nodeType!==3||(A=v+f),J!==p||u!==0&&J.nodeType!==3||(R=v+u),J.nodeType===3&&(v+=J.nodeValue.length),(G=J.firstChild)!==null;)H=J,J=G;for(;;){if(J===n)break t;if(H===o&&++V===f&&(A=v),H===p&&++K===u&&(R=v),(G=J.nextSibling)!==null)break;J=H,H=J.parentNode}J=G}o=A===-1||R===-1?null:{start:A,end:R}}else o=null}o=o||{start:0,end:0}}else o=null;for(jp={focusedElem:n,selectionRange:o},Dh=!1,Wt=r;Wt!==null;)if(r=Wt,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Wt=n;else for(;Wt!==null;){switch(r=Wt,p=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&p!==null){n=void 0,o=r,f=p.memoizedProps,p=p.memoizedState,u=o.stateNode;try{var ge=ra(o.type,f,o.elementType===o.type);n=u.getSnapshotBeforeUpdate(ge,p),u.__reactInternalSnapshotBeforeUpdate=n}catch(Oe){ot(o,o.return,Oe)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,o=n.nodeType,o===9)Fp(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Fp(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=r.sibling,n!==null){n.return=r.return,Wt=n;break}Wt=r.return}return ge=hv,hv=!1,ge}function fv(n,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:hs(n,o),u&4&&$l(5,o);break;case 1:if(hs(n,o),u&4)if(n=o.stateNode,r===null)try{n.componentDidMount()}catch(A){ot(o,o.return,A)}else{var f=ra(o.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(f,r,n.__reactInternalSnapshotBeforeUpdate)}catch(A){ot(o,o.return,A)}}u&64&&rv(o),u&512&&la(o,o.return);break;case 3:if(hs(n,o),u&64&&(u=o.updateQueue,u!==null)){if(n=null,o.child!==null)switch(o.child.tag){case 27:case 5:n=o.child.stateNode;break;case 1:n=o.child.stateNode}try{sv(u,n)}catch(A){ot(o,o.return,A)}}break;case 26:hs(n,o),u&512&&la(o,o.return);break;case 27:case 5:hs(n,o),r===null&&u&4&&ov(o),u&512&&la(o,o.return);break;case 12:hs(n,o);break;case 13:hs(n,o),u&4&&_v(n,o);break;case 22:if(f=o.memoizedState!==null||us,!f){r=r!==null&&r.memoizedState!==null||Et;var p=us,v=Et;us=f,(Et=r)&&!v?nr(n,o,(o.subtreeFlags&8772)!==0):hs(n,o),us=p,Et=v}u&512&&(o.memoizedProps.mode==="manual"?la(o,o.return):kn(o,o.return));break;default:hs(n,o)}}function dv(n){var r=n.alternate;r!==null&&(n.alternate=null,dv(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&Ur(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Nt=null,Mn=!1;function cs(n,r,o){for(o=o.child;o!==null;)pv(n,r,o),o=o.sibling}function pv(n,r,o){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(Os,o)}catch{}switch(o.tag){case 26:Et||kn(o,r),cs(n,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Et||kn(o,r);var u=Nt,f=Mn;for(Nt=o.stateNode,cs(n,r,o),o=o.stateNode,r=o.attributes;r.length;)o.removeAttributeNode(r[0]);Ur(o),Nt=u,Mn=f;break;case 5:Et||kn(o,r);case 6:f=Nt;var p=Mn;if(Nt=null,cs(n,r,o),Nt=f,Mn=p,Nt!==null)if(Mn)try{n=Nt,u=o.stateNode,n.nodeType===8?n.parentNode.removeChild(u):n.removeChild(u)}catch(v){ot(o,r,v)}else try{Nt.removeChild(o.stateNode)}catch(v){ot(o,r,v)}break;case 18:Nt!==null&&(Mn?(r=Nt,o=o.stateNode,r.nodeType===8?Hp(r.parentNode,o):r.nodeType===1&&Hp(r,o),pu(r)):Hp(Nt,o.stateNode));break;case 4:u=Nt,f=Mn,Nt=o.stateNode.containerInfo,Mn=!0,cs(n,r,o),Nt=u,Mn=f;break;case 0:case 11:case 14:case 15:Et||tr(2,o,r),Et||tr(4,o,r),cs(n,r,o);break;case 1:Et||(kn(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&av(o,r,u)),cs(n,r,o);break;case 21:cs(n,r,o);break;case 22:Et||kn(o,r),Et=(u=Et)||o.memoizedState!==null,cs(n,r,o),Et=u;break;default:cs(n,r,o)}}function _v(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{pu(n)}catch(o){ot(r,r.return,o)}}function Gb(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new cv),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new cv),r;default:throw Error(s(435,n.tag))}}function hp(n,r){var o=Gb(n);r.forEach(function(u){var f=sC.bind(null,n,u);o.has(u)||(o.add(u),u.then(f,f))})}function Xn(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],p=n,v=r,A=v;e:for(;A!==null;){switch(A.tag){case 27:case 5:Nt=A.stateNode,Mn=!1;break e;case 3:Nt=A.stateNode.containerInfo,Mn=!0;break e;case 4:Nt=A.stateNode.containerInfo,Mn=!0;break e}A=A.return}if(Nt===null)throw Error(s(160));pv(p,v,f),Nt=null,Mn=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)mv(r,n),r=r.sibling}var fi=null;function mv(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Xn(r,n),Zn(n),u&4&&(tr(3,n,n.return),$l(3,n),tr(5,n,n.return));break;case 1:Xn(r,n),Zn(n),u&512&&(Et||o===null||kn(o,o.return)),u&64&&us&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=fi;if(Xn(r,n),Zn(n),u&512&&(Et||o===null||kn(o,o.return)),u&4){var p=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":p=f.getElementsByTagName("title")[0],(!p||p[Us]||p[Ft]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(u),f.head.insertBefore(p,f.querySelector("head > title"))),tn(p,u,o),p[Ft]=n,_t(p),u=p;break e;case"link":var v=oE("link","href",f).get(u+(o.href||""));if(v){for(var A=0;A<v.length;A++)if(p=v[A],p.getAttribute("href")===(o.href==null?null:o.href)&&p.getAttribute("rel")===(o.rel==null?null:o.rel)&&p.getAttribute("title")===(o.title==null?null:o.title)&&p.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(A,1);break t}}p=f.createElement(u),tn(p,u,o),f.head.appendChild(p);break;case"meta":if(v=oE("meta","content",f).get(u+(o.content||""))){for(A=0;A<v.length;A++)if(p=v[A],p.getAttribute("content")===(o.content==null?null:""+o.content)&&p.getAttribute("name")===(o.name==null?null:o.name)&&p.getAttribute("property")===(o.property==null?null:o.property)&&p.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&p.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(A,1);break t}}p=f.createElement(u),tn(p,u,o),f.head.appendChild(p);break;default:throw Error(s(468,u))}p[Ft]=n,_t(p),u=p}n.stateNode=u}else lE(f,n.type,n.stateNode);else n.stateNode=aE(f,u,n.memoizedProps);else p!==u?(p===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):p.count--,u===null?lE(f,n.type,n.stateNode):aE(f,u,n.memoizedProps)):u===null&&n.stateNode!==null&&lv(n,n.memoizedProps,o.memoizedProps)}break;case 27:if(u&4&&n.alternate===null){f=n.stateNode,p=n.memoizedProps;try{for(var R=f.firstChild;R;){var V=R.nextSibling,K=R.nodeName;R[Us]||K==="HEAD"||K==="BODY"||K==="SCRIPT"||K==="STYLE"||K==="LINK"&&R.rel.toLowerCase()==="stylesheet"||f.removeChild(R),R=V}for(var J=n.type,H=f.attributes;H.length;)f.removeAttributeNode(H[0]);tn(f,J,p),f[Ft]=n,f[xt]=p}catch(ge){ot(n,n.return,ge)}}case 5:if(Xn(r,n),Zn(n),u&512&&(Et||o===null||kn(o,o.return)),n.flags&32){f=n.stateNode;try{Hn(f,"")}catch(ge){ot(n,n.return,ge)}}u&4&&n.stateNode!=null&&(f=n.memoizedProps,lv(n,f,o!==null?o.memoizedProps:f)),u&1024&&(cp=!0);break;case 6:if(Xn(r,n),Zn(n),u&4){if(n.stateNode===null)throw Error(s(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(ge){ot(n,n.return,ge)}}break;case 3:if(Rh=null,f=fi,fi=bh(r.containerInfo),Xn(r,n),fi=f,Zn(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{pu(r.containerInfo)}catch(ge){ot(n,n.return,ge)}cp&&(cp=!1,gv(n));break;case 4:u=fi,fi=bh(n.stateNode.containerInfo),Xn(r,n),Zn(n),fi=u;break;case 12:Xn(r,n),Zn(n);break;case 13:Xn(r,n),Zn(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Ep=wn()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,hp(n,u)));break;case 22:if(u&512&&(Et||o===null||kn(o,o.return)),R=n.memoizedState!==null,V=o!==null&&o.memoizedState!==null,K=us,J=Et,us=K||R,Et=J||V,Xn(r,n),Et=J,us=K,Zn(n),r=n.stateNode,r._current=n,r._visibility&=-3,r._visibility|=r._pendingVisibility&2,u&8192&&(r._visibility=R?r._visibility&-2:r._visibility|1,R&&(r=us||Et,o===null||V||r||_o(n)),n.memoizedProps===null||n.memoizedProps.mode!=="manual"))e:for(o=null,r=n;;){if(r.tag===5||r.tag===26||r.tag===27){if(o===null){V=o=r;try{if(f=V.stateNode,R)p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{v=V.stateNode,A=V.memoizedProps.style;var G=A!=null&&A.hasOwnProperty("display")?A.display:null;v.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(ge){ot(V,V.return,ge)}}}else if(r.tag===6){if(o===null){V=r;try{V.stateNode.nodeValue=R?"":V.memoizedProps}catch(ge){ot(V,V.return,ge)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,hp(n,o))));break;case 19:Xn(r,n),Zn(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,hp(n,u)));break;case 21:break;default:Xn(r,n),Zn(n)}}function Zn(n){var r=n.flags;if(r&2){try{if(n.tag!==27){e:{for(var o=n.return;o!==null;){if(uv(o)){var u=o;break e}o=o.return}throw Error(s(160))}switch(u.tag){case 27:var f=u.stateNode,p=lp(n);ch(n,p,f);break;case 5:var v=u.stateNode;u.flags&32&&(Hn(v,""),u.flags&=-33);var A=lp(n);ch(n,A,v);break;case 3:case 4:var R=u.stateNode.containerInfo,V=lp(n);up(n,V,R);break;default:throw Error(s(161))}}}catch(K){ot(n,n.return,K)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function gv(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;gv(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function hs(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)fv(n,r.alternate,r),r=r.sibling}function _o(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:tr(4,r,r.return),_o(r);break;case 1:kn(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&av(r,r.return,o),_o(r);break;case 26:case 27:case 5:kn(r,r.return),_o(r);break;case 22:kn(r,r.return),r.memoizedState===null&&_o(r);break;default:_o(r)}n=n.sibling}}function nr(n,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=n,p=r,v=p.flags;switch(p.tag){case 0:case 11:case 15:nr(f,p,o),$l(4,p);break;case 1:if(nr(f,p,o),u=p,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(V){ot(u,u.return,V)}if(u=p,f=u.updateQueue,f!==null){var A=u.stateNode;try{var R=f.shared.hiddenCallbacks;if(R!==null)for(f.shared.hiddenCallbacks=null,f=0;f<R.length;f++)iv(R[f],A)}catch(V){ot(u,u.return,V)}}o&&v&64&&rv(p),la(p,p.return);break;case 26:case 27:case 5:nr(f,p,o),o&&u===null&&v&4&&ov(p),la(p,p.return);break;case 12:nr(f,p,o);break;case 13:nr(f,p,o),o&&v&4&&_v(f,p);break;case 22:p.memoizedState===null&&nr(f,p,o),la(p,p.return);break;default:nr(f,p,o)}r=r.sibling}}function fp(n,r){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&Bl(o))}function dp(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Bl(n))}function ir(n,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)yv(n,r,o,u),r=r.sibling}function yv(n,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:ir(n,r,o,u),f&2048&&$l(9,r);break;case 3:ir(n,r,o,u),f&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Bl(n)));break;case 12:if(f&2048){ir(n,r,o,u),n=r.stateNode;try{var p=r.memoizedProps,v=p.id,A=p.onPostCommit;typeof A=="function"&&A(v,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(R){ot(r,r.return,R)}}else ir(n,r,o,u);break;case 23:break;case 22:p=r.stateNode,r.memoizedState!==null?p._visibility&4?ir(n,r,o,u):Xl(n,r):p._visibility&4?ir(n,r,o,u):(p._visibility|=4,mo(n,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&fp(r.alternate,r);break;case 24:ir(n,r,o,u),f&2048&&dp(r.alternate,r);break;default:ir(n,r,o,u)}}function mo(n,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var p=n,v=r,A=o,R=u,V=v.flags;switch(v.tag){case 0:case 11:case 15:mo(p,v,A,R,f),$l(8,v);break;case 23:break;case 22:var K=v.stateNode;v.memoizedState!==null?K._visibility&4?mo(p,v,A,R,f):Xl(p,v):(K._visibility|=4,mo(p,v,A,R,f)),f&&V&2048&&fp(v.alternate,v);break;case 24:mo(p,v,A,R,f),f&&V&2048&&dp(v.alternate,v);break;default:mo(p,v,A,R,f)}r=r.sibling}}function Xl(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=n,u=r,f=u.flags;switch(u.tag){case 22:Xl(o,u),f&2048&&fp(u.alternate,u);break;case 24:Xl(o,u),f&2048&&dp(u.alternate,u);break;default:Xl(o,u)}r=r.sibling}}var Zl=8192;function go(n){if(n.subtreeFlags&Zl)for(n=n.child;n!==null;)vv(n),n=n.sibling}function vv(n){switch(n.tag){case 26:go(n),n.flags&Zl&&n.memoizedState!==null&&kC(fi,n.memoizedState,n.memoizedProps);break;case 5:go(n);break;case 3:case 4:var r=fi;fi=bh(n.stateNode.containerInfo),go(n),fi=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=Zl,Zl=16777216,go(n),Zl=r):go(n));break;default:go(n)}}function Ev(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function Jl(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Wt=u,Sv(u,n)}Ev(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Tv(n),n=n.sibling}function Tv(n){switch(n.tag){case 0:case 11:case 15:Jl(n),n.flags&2048&&tr(9,n,n.return);break;case 3:Jl(n);break;case 12:Jl(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&4&&(n.return===null||n.return.tag!==13)?(r._visibility&=-5,hh(n)):Jl(n);break;default:Jl(n)}}function hh(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Wt=u,Sv(u,n)}Ev(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:tr(8,r,r.return),hh(r);break;case 22:o=r.stateNode,o._visibility&4&&(o._visibility&=-5,hh(r));break;default:hh(r)}n=n.sibling}}function Sv(n,r){for(;Wt!==null;){var o=Wt;switch(o.tag){case 0:case 11:case 15:tr(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Bl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Wt=u;else e:for(o=n;Wt!==null;){u=Wt;var f=u.sibling,p=u.return;if(dv(u),u===o){Wt=null;break e}if(f!==null){f.return=p,Wt=f;break e}Wt=p}}}function Kb(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(n,r,o,u){return new Kb(n,r,o,u)}function pp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function sr(n,r){var o=n.alternate;return o===null?(o=Jn(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&31457280,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function Av(n,r){n.flags&=31457282;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,r=o.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function fh(n,r,o,u,f,p){var v=0;if(u=n,typeof n=="function")pp(n)&&(v=1);else if(typeof n=="string")v=OC(n,o,Me.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case _:return ua(o.children,f,p,r);case m:v=8,f|=24;break;case E:return n=Jn(12,o,r,f|2),n.elementType=E,n.lanes=p,n;case Y:return n=Jn(13,o,r,f),n.elementType=Y,n.lanes=p,n;case z:return n=Jn(19,o,r,f),n.elementType=z,n.lanes=p,n;case te:return wv(o,f,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case S:case L:v=10;break e;case I:v=9;break e;case F:v=11;break e;case W:v=14;break e;case Q:v=16,u=null;break e}v=29,o=Error(s(130,n===null?"null":typeof n,"")),u=null}return r=Jn(v,o,r,f),r.elementType=n,r.type=u,r.lanes=p,r}function ua(n,r,o,u){return n=Jn(7,n,u,r),n.lanes=o,n}function wv(n,r,o,u){n=Jn(22,n,u,r),n.elementType=te,n.lanes=o;var f={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var p=f._current;if(p===null)throw Error(s(456));if((f._pendingVisibility&2)===0){var v=Ks(p,2);v!==null&&(f._pendingVisibility|=2,An(v,p,2))}},attach:function(){var p=f._current;if(p===null)throw Error(s(456));if((f._pendingVisibility&2)!==0){var v=Ks(p,2);v!==null&&(f._pendingVisibility&=-3,An(v,p,2))}}};return n.stateNode=f,n}function _p(n,r,o){return n=Jn(6,n,null,r),n.lanes=o,n}function mp(n,r,o){return r=Jn(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function fs(n){n.flags|=4}function bv(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!uE(r)){if(r=$n.current,r!==null&&((Qe&4194176)===Qe?xi!==null:(Qe&62914560)!==Qe&&(Qe&536870912)===0||r!==xi))throw Ll=Td,Hg;n.flags|=8192}}function dh(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?Ms():536870912,n.lanes|=r,vo|=r)}function eu(n,r){if(!Je)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function mt(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&31457280,u|=f.flags&31457280,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function Wb(n,r,o){var u=r.pendingProps;switch(vd(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(r),null;case 1:return mt(r),null;case 3:return o=r.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),ls(Vt),oi(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(kl(r)?fs(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,hi!==null&&(wp(hi),hi=null))),mt(r),null;case 26:return o=r.memoizedState,n===null?(fs(r),o!==null?(mt(r),bv(r,o)):(mt(r),r.flags&=-16777217)):o?o!==n.memoizedState?(fs(r),mt(r),bv(r,o)):(mt(r),r.flags&=-16777217):(n.memoizedProps!==u&&fs(r),mt(r),r.flags&=-16777217),null;case 27:La(r),o=zt.current;var f=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==u&&fs(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return mt(r),null}n=Me.current,kl(r)?Bg(r):(n=tE(f,u,o),r.stateNode=n,fs(r))}return mt(r),null;case 5:if(La(r),o=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==u&&fs(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return mt(r),null}if(n=Me.current,kl(r))Bg(r);else{switch(f=wh(zt.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}n[Ft]=r,n[xt]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=n;e:switch(tn(n,o,u),o){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&fs(r)}}return mt(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==u&&fs(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(n=zt.current,kl(r)){if(n=r.stateNode,o=r.memoizedProps,u=null,f=Sn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}n[Ft]=r,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||Yv(n.nodeValue,o)),n||Jr(r)}else n=wh(n).createTextNode(u),n[Ft]=r,r.stateNode=n}return mt(r),null;case 13:if(u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=kl(r),u!==null&&u.dehydrated!==null){if(n===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Ft]=r}else Ml(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;mt(r),f=!1}else hi!==null&&(wp(hi),hi=null),f=!0;if(!f)return r.flags&256?(ss(r),r):(ss(r),null)}if(ss(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,n=n!==null&&n.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var p=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(p=u.memoizedState.cachePool.pool),p!==f&&(u.flags|=2048)}return o!==n&&o&&(r.child.flags|=8192),dh(r,r.updateQueue),mt(r),null;case 4:return oi(),n===null&&Pp(r.stateNode.containerInfo),mt(r),null;case 10:return ls(r.type),mt(r),null;case 19:if(lt(Pt),f=r.memoizedState,f===null)return mt(r),null;if(u=(r.flags&128)!==0,p=f.rendering,p===null)if(u)eu(f,!1);else{if(Tt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(p=$c(n),p!==null){for(r.flags|=128,eu(f,!1),n=p.updateQueue,r.updateQueue=n,dh(r,n),r.subtreeFlags=0,n=o,o=r.child;o!==null;)Av(o,n),o=o.sibling;return $(Pt,Pt.current&1|2),r.child}n=n.sibling}f.tail!==null&&wn()>ph&&(r.flags|=128,u=!0,eu(f,!1),r.lanes=4194304)}else{if(!u)if(n=$c(p),n!==null){if(r.flags|=128,u=!0,n=n.updateQueue,r.updateQueue=n,dh(r,n),eu(f,!0),f.tail===null&&f.tailMode==="hidden"&&!p.alternate&&!Je)return mt(r),null}else 2*wn()-f.renderingStartTime>ph&&o!==536870912&&(r.flags|=128,u=!0,eu(f,!1),r.lanes=4194304);f.isBackwards?(p.sibling=r.child,r.child=p):(n=f.last,n!==null?n.sibling=p:r.child=p,f.last=p)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=wn(),r.sibling=null,n=Pt.current,$(Pt,u?n&1|2:n&1),r):(mt(r),null);case 22:case 23:return ss(r),Ad(),u=r.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(mt(r),r.subtreeFlags&6&&(r.flags|=8192)):mt(r),o=r.updateQueue,o!==null&&dh(r,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),n!==null&&lt(ta),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),ls(Vt),mt(r),null;case 25:return null}throw Error(s(156,r.tag))}function Qb(n,r){switch(vd(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return ls(Vt),oi(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return La(r),null;case 13:if(ss(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(s(340));Ml()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return lt(Pt),null;case 4:return oi(),null;case 10:return ls(r.type),null;case 22:case 23:return ss(r),Ad(),n!==null&&lt(ta),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return ls(Vt),null;case 25:return null;default:return null}}function Cv(n,r){switch(vd(r),r.tag){case 3:ls(Vt),oi();break;case 26:case 27:case 5:La(r);break;case 4:oi();break;case 13:ss(r);break;case 19:lt(Pt);break;case 10:ls(r.type);break;case 22:case 23:ss(r),Ad(),n!==null&&lt(ta);break;case 24:ls(Vt)}}var Yb={getCacheForType:function(n){var r=un(Vt),o=r.data.get(n);return o===void 0&&(o=n(),r.data.set(n,o)),o}},$b=typeof WeakMap=="function"?WeakMap:Map,gt=0,ut=null,Ue=null,Qe=0,ct=0,Pn=null,ds=!1,yo=!1,gp=!1,ps=0,Tt=0,rr=0,ca=0,yp=0,ei=0,vo=0,tu=null,Mi=null,vp=!1,Ep=0,ph=1/0,_h=null,ar=null,mh=!1,ha=null,nu=0,Tp=0,Sp=null,iu=0,Ap=null;function Vn(){if((gt&2)!==0&&Qe!==0)return Qe&-Qe;if(b.T!==null){var n=uo;return n!==0?n:Op()}return Sc()}function Rv(){ei===0&&(ei=(Qe&536870912)===0||Je?_l():536870912);var n=$n.current;return n!==null&&(n.flags|=32),ei}function An(n,r,o){(n===ut&&ct===2||n.cancelPendingCommit!==null)&&(Eo(n,0),_s(n,Qe,ei,!1)),wt(n,o),((gt&2)===0||n!==ut)&&(n===ut&&((gt&2)===0&&(ca|=o),Tt===4&&_s(n,Qe,ei,!1)),Pi(n))}function Iv(n,r,o){if((gt&6)!==0)throw Error(s(327));var u=!o&&(r&60)===0&&(r&n.expiredLanes)===0||ks(n,r),f=u?Jb(n,r):Rp(n,r,!0),p=u;do{if(f===0){yo&&!u&&_s(n,r,0,!1);break}else if(f===6)_s(n,r,0,!ds);else{if(o=n.current.alternate,p&&!Xb(o)){f=Rp(n,r,!1),p=!1;continue}if(f===2){if(p=r,n.errorRecoveryDisabledLanes&p)var v=0;else v=n.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){r=v;e:{var A=n;f=tu;var R=A.current.memoizedState.isDehydrated;if(R&&(Eo(A,v).flags|=256),v=Rp(A,v,!1),v!==2){if(gp&&!R){A.errorRecoveryDisabledLanes|=p,ca|=p,f=4;break e}p=Mi,Mi=f,p!==null&&wp(p)}f=v}if(p=!1,f!==2)continue}}if(f===1){Eo(n,0),_s(n,r,0,!0);break}e:{switch(u=n,f){case 0:case 1:throw Error(s(345));case 4:if((r&4194176)===r){_s(u,r,ei,!ds);break e}break;case 2:Mi=null;break;case 3:case 5:break;default:throw Error(s(329))}if(u.finishedWork=o,u.finishedLanes=r,(r&62914560)===r&&(p=Ep+300-wn(),10<p)){if(_s(u,r,ei,!ds),Bn(u,0)!==0)break e;u.timeoutHandle=Zv(Nv.bind(null,u,o,Mi,_h,vp,r,ei,ca,vo,ds,2,-0,0),p);break e}Nv(u,o,Mi,_h,vp,r,ei,ca,vo,ds,0,-0,0)}}break}while(!0);Pi(n)}function wp(n){Mi===null?Mi=n:Mi.push.apply(Mi,n)}function Nv(n,r,o,u,f,p,v,A,R,V,K,J,H){var G=r.subtreeFlags;if((G&8192||(G&16785408)===16785408)&&(uu={stylesheets:null,count:0,unsuspend:xC},vv(r),r=MC(),r!==null)){n.cancelPendingCommit=r(Vv.bind(null,n,o,u,f,v,A,R,1,J,H)),_s(n,p,v,!V);return}Vv(n,o,u,f,v,A,R,K,J,H)}function Xb(n){for(var r=n;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],p=f.getSnapshot;f=f.value;try{if(!xn(p(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function _s(n,r,o,u){r&=~yp,r&=~ca,n.suspendedLanes|=r,n.pingedLanes&=~r,u&&(n.warmLanes|=r),u=n.expirationTimes;for(var f=r;0<f;){var p=31-vn(f),v=1<<p;u[p]=-1,f&=~v}o!==0&&Ps(n,o,r)}function gh(){return(gt&6)===0?(su(0),!1):!0}function bp(){if(Ue!==null){if(ct===0)var n=Ue.return;else n=Ue,os=aa=null,Od(n),oo=null,Ul=0,n=Ue;for(;n!==null;)Cv(n.alternate,n),n=n.return;Ue=null}}function Eo(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,mC(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),bp(),ut=n,Ue=o=sr(n.current,null),Qe=r,ct=0,Pn=null,ds=!1,yo=ks(n,r),gp=!1,vo=ei=yp=ca=rr=Tt=0,Mi=tu=null,vp=!1,(r&8)!==0&&(r|=r&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=r;0<u;){var f=31-vn(u),p=1<<f;r|=n[f],u&=~p}return ps=r,zc(),o}function Dv(n,r){Pe=null,b.H=ki,r===Vl?(r=Gg(),ct=3):r===Hg?(r=Gg(),ct=4):ct=r===Fy?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Pn=r,Ue===null&&(Tt=1,oh(n,Wn(r,n.current)))}function Ov(){var n=b.H;return b.H=ki,n===null?ki:n}function xv(){var n=b.A;return b.A=Yb,n}function Cp(){Tt=4,ds||(Qe&4194176)!==Qe&&$n.current!==null||(yo=!0),(rr&134217727)===0&&(ca&134217727)===0||ut===null||_s(ut,Qe,ei,!1)}function Rp(n,r,o){var u=gt;gt|=2;var f=Ov(),p=xv();(ut!==n||Qe!==r)&&(_h=null,Eo(n,r)),r=!1;var v=Tt;e:do try{if(ct!==0&&Ue!==null){var A=Ue,R=Pn;switch(ct){case 8:bp(),v=6;break e;case 3:case 2:case 6:$n.current===null&&(r=!0);var V=ct;if(ct=0,Pn=null,To(n,A,R,V),o&&yo){v=0;break e}break;default:V=ct,ct=0,Pn=null,To(n,A,R,V)}}Zb(),v=Tt;break}catch(K){Dv(n,K)}while(!0);return r&&n.shellSuspendCounter++,os=aa=null,gt=u,b.H=f,b.A=p,Ue===null&&(ut=null,Qe=0,zc()),v}function Zb(){for(;Ue!==null;)kv(Ue)}function Jb(n,r){var o=gt;gt|=2;var u=Ov(),f=xv();ut!==n||Qe!==r?(_h=null,ph=wn()+500,Eo(n,r)):yo=ks(n,r);e:do try{if(ct!==0&&Ue!==null){r=Ue;var p=Pn;t:switch(ct){case 1:ct=0,Pn=null,To(n,r,p,1);break;case 2:if(Fg(p)){ct=0,Pn=null,Mv(r);break}r=function(){ct===2&&ut===n&&(ct=7),Pi(n)},p.then(r,r);break e;case 3:ct=7;break e;case 4:ct=5;break e;case 7:Fg(p)?(ct=0,Pn=null,Mv(r)):(ct=0,Pn=null,To(n,r,p,7));break;case 5:var v=null;switch(Ue.tag){case 26:v=Ue.memoizedState;case 5:case 27:var A=Ue;if(!v||uE(v)){ct=0,Pn=null;var R=A.sibling;if(R!==null)Ue=R;else{var V=A.return;V!==null?(Ue=V,yh(V)):Ue=null}break t}}ct=0,Pn=null,To(n,r,p,5);break;case 6:ct=0,Pn=null,To(n,r,p,6);break;case 8:bp(),Tt=6;break e;default:throw Error(s(462))}}eC();break}catch(K){Dv(n,K)}while(!0);return os=aa=null,b.H=u,b.A=f,gt=o,Ue!==null?0:(ut=null,Qe=0,zc(),Tt)}function eC(){for(;Ue!==null&&!td();)kv(Ue)}function kv(n){var r=tv(n.alternate,n,ps);n.memoizedProps=n.pendingProps,r===null?yh(n):Ue=r}function Mv(n){var r=n,o=r.alternate;switch(r.tag){case 15:case 0:r=Yy(o,r,r.pendingProps,r.type,void 0,Qe);break;case 11:r=Yy(o,r,r.pendingProps,r.type.render,r.ref,Qe);break;case 5:Od(r);default:Cv(o,r),r=Ue=Av(r,ps),r=tv(o,r,ps)}n.memoizedProps=n.pendingProps,r===null?yh(n):Ue=r}function To(n,r,o,u){os=aa=null,Od(r),oo=null,Ul=0;var f=r.return;try{if(Hb(n,f,r,o,Qe)){Tt=1,oh(n,Wn(o,n.current)),Ue=null;return}}catch(p){if(f!==null)throw Ue=f,p;Tt=1,oh(n,Wn(o,n.current)),Ue=null;return}r.flags&32768?(Je||u===1?n=!0:yo||(Qe&536870912)!==0?n=!1:(ds=n=!0,(u===2||u===3||u===6)&&(u=$n.current,u!==null&&u.tag===13&&(u.flags|=16384))),Pv(r,n)):yh(r)}function yh(n){var r=n;do{if((r.flags&32768)!==0){Pv(r,ds);return}n=r.return;var o=Wb(r.alternate,r,ps);if(o!==null){Ue=o;return}if(r=r.sibling,r!==null){Ue=r;return}Ue=r=n}while(r!==null);Tt===0&&(Tt=5)}function Pv(n,r){do{var o=Qb(n.alternate,n);if(o!==null){o.flags&=32767,Ue=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(n=n.sibling,n!==null)){Ue=n;return}Ue=n=o}while(n!==null);Tt=6,Ue=null}function Vv(n,r,o,u,f,p,v,A,R,V){var K=b.T,J=ue.p;try{ue.p=2,b.T=null,tC(n,r,o,u,J,f,p,v,A,R,V)}finally{b.T=K,ue.p=J}}function tC(n,r,o,u,f,p,v,A){do So();while(ha!==null);if((gt&6)!==0)throw Error(s(327));var R=n.finishedWork;if(u=n.finishedLanes,R===null)return null;if(n.finishedWork=null,n.finishedLanes=0,R===n.current)throw Error(s(177));n.callbackNode=null,n.callbackPriority=0,n.cancelPendingCommit=null;var V=R.lanes|R.childLanes;if(V|=md,Ec(n,u,V,p,v,A),n===ut&&(Ue=ut=null,Qe=0),(R.subtreeFlags&10256)===0&&(R.flags&10256)===0||mh||(mh=!0,Tp=V,Sp=o,rC(Ki,function(){return So(),null})),o=(R.flags&15990)!==0,(R.subtreeFlags&15990)!==0||o?(o=b.T,b.T=null,p=ue.p,ue.p=2,v=gt,gt|=4,qb(n,R),mv(R,n),bb(jp,n.containerInfo),Dh=!!Up,jp=Up=null,n.current=R,fv(n,R.alternate,R),hl(),gt=v,ue.p=p,b.T=o):n.current=R,mh?(mh=!1,ha=n,nu=u):Lv(n,V),V=n.pendingLanes,V===0&&(ar=null),dl(R.stateNode),Pi(n),r!==null)for(f=n.onRecoverableError,R=0;R<r.length;R++)V=r[R],f(V.value,{componentStack:V.stack});return(nu&3)!==0&&So(),V=n.pendingLanes,(u&4194218)!==0&&(V&42)!==0?n===Ap?iu++:(iu=0,Ap=n):iu=0,su(0),null}function Lv(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,Bl(r)))}function So(){if(ha!==null){var n=ha,r=Tp;Tp=0;var o=Tc(nu),u=b.T,f=ue.p;try{if(ue.p=32>o?32:o,b.T=null,ha===null)var p=!1;else{o=Sp,Sp=null;var v=ha,A=nu;if(ha=null,nu=0,(gt&6)!==0)throw Error(s(331));var R=gt;if(gt|=4,Tv(v.current),yv(v,v.current,A,o),gt=R,su(0,!1),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(Os,v)}catch{}p=!0}return p}finally{ue.p=f,b.T=u,Lv(n,r)}}return!1}function Uv(n,r,o){r=Wn(o,r),r=Gd(n.stateNode,r,2),n=er(n,r,2),n!==null&&(wt(n,2),Pi(n))}function ot(n,r,o){if(n.tag===3)Uv(n,n,o);else for(;r!==null;){if(r.tag===3){Uv(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ar===null||!ar.has(u))){n=Wn(o,n),o=zy(2),u=er(r,o,2),u!==null&&(Hy(o,u,r,n),wt(u,2),Pi(u));break}}r=r.return}}function Ip(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new $b;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(gp=!0,f.add(o),n=nC.bind(null,n,r,o),r.then(n,n))}function nC(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,ut===n&&(Qe&o)===o&&(Tt===4||Tt===3&&(Qe&62914560)===Qe&&300>wn()-Ep?(gt&2)===0&&Eo(n,0):yp|=o,vo===Qe&&(vo=0)),Pi(n)}function jv(n,r){r===0&&(r=Ms()),n=Ks(n,r),n!==null&&(wt(n,r),Pi(n))}function iC(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),jv(n,o)}function sC(n,r){var o=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),jv(n,o)}function rC(n,r){return Pr(n,r)}var vh=null,Ao=null,Np=!1,Eh=!1,Dp=!1,fa=0;function Pi(n){n!==Ao&&n.next===null&&(Ao===null?vh=Ao=n:Ao=Ao.next=n),Eh=!0,Np||(Np=!0,oC(aC))}function su(n,r){if(!Dp&&Eh){Dp=!0;do for(var o=!1,u=vh;u!==null;){if(n!==0){var f=u.pendingLanes;if(f===0)var p=0;else{var v=u.suspendedLanes,A=u.pingedLanes;p=(1<<31-vn(42|n)+1)-1,p&=f&~(v&~A),p=p&201326677?p&201326677|1:p?p|2:0}p!==0&&(o=!0,Hv(u,p))}else p=Qe,p=Bn(u,u===ut?p:0),(p&3)===0||ks(u,p)||(o=!0,Hv(u,p));u=u.next}while(o);Dp=!1}}function aC(){Eh=Np=!1;var n=0;fa!==0&&(_C()&&(n=fa),fa=0);for(var r=wn(),o=null,u=vh;u!==null;){var f=u.next,p=Bv(u,r);p===0?(u.next=null,o===null?vh=f:o.next=f,f===null&&(Ao=o)):(o=u,(n!==0||(p&3)!==0)&&(Eh=!0)),u=f}su(n)}function Bv(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,p=n.pendingLanes&-62914561;0<p;){var v=31-vn(p),A=1<<v,R=f[v];R===-1?((A&o)===0||(A&u)!==0)&&(f[v]=Ba(A,r)):R<=r&&(n.expiredLanes|=A),p&=~A}if(r=ut,o=Qe,o=Bn(n,n===r?o:0),u=n.callbackNode,o===0||n===r&&ct===2||n.cancelPendingCommit!==null)return u!==null&&u!==null&&ja(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||ks(n,o)){if(r=o&-o,r===n.callbackPriority)return r;switch(u!==null&&ja(u),Tc(o)){case 2:case 8:o=Ht;break;case 32:o=Ki;break;case 268435456:o=fl;break;default:o=Ki}return u=zv.bind(null,n),o=Pr(o,u),n.callbackPriority=r,n.callbackNode=o,r}return u!==null&&u!==null&&ja(u),n.callbackPriority=2,n.callbackNode=null,2}function zv(n,r){var o=n.callbackNode;if(So()&&n.callbackNode!==o)return null;var u=Qe;return u=Bn(n,n===ut?u:0),u===0?null:(Iv(n,u,r),Bv(n,wn()),n.callbackNode!=null&&n.callbackNode===o?zv.bind(null,n):null)}function Hv(n,r){if(So())return null;Iv(n,r,!0)}function oC(n){gC(function(){(gt&6)!==0?Pr(Ot,n):n()})}function Op(){return fa===0&&(fa=_l()),fa}function Fv(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:wi(""+n)}function qv(n,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,n.id&&o.setAttribute("form",n.id),r.parentNode.insertBefore(o,r),n=new FormData(n),o.parentNode.removeChild(o),n}function lC(n,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var p=Fv((f[xt]||null).action),v=u.submitter;v&&(r=(r=v[xt]||null)?Fv(r.formAction):v.getAttribute("formAction"),r!==null&&(p=r,v=null));var A=new Wa("action","action",null,u,f);n.push({event:A,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(fa!==0){var R=v?qv(f,v):new FormData(f);Bd(o,{pending:!0,data:R,method:f.method,action:p},null,R)}}else typeof p=="function"&&(A.preventDefault(),R=v?qv(f,v):new FormData(f),Bd(o,{pending:!0,data:R,method:f.method,action:p},p,R))},currentTarget:f}]})}}for(var xp=0;xp<Vg.length;xp++){var kp=Vg[xp],uC=kp.toLowerCase(),cC=kp[0].toUpperCase()+kp.slice(1);ci(uC,"on"+cC)}ci(Og,"onAnimationEnd"),ci(xg,"onAnimationIteration"),ci(kg,"onAnimationStart"),ci("dblclick","onDoubleClick"),ci("focusin","onFocus"),ci("focusout","onBlur"),ci(Rb,"onTransitionRun"),ci(Ib,"onTransitionStart"),ci(Nb,"onTransitionCancel"),ci(Mg,"onTransitionEnd"),bn("onMouseEnter",["mouseout","mouseover"]),bn("onMouseLeave",["mouseout","mouseover"]),bn("onPointerEnter",["pointerout","pointerover"]),bn("onPointerLeave",["pointerout","pointerover"]),Dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Dn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ru="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ru));function Gv(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],f=u.event;u=u.listeners;e:{var p=void 0;if(r)for(var v=u.length-1;0<=v;v--){var A=u[v],R=A.instance,V=A.currentTarget;if(A=A.listener,R!==p&&f.isPropagationStopped())break e;p=A,f.currentTarget=V;try{p(f)}catch(K){ah(K)}f.currentTarget=null,p=R}else for(v=0;v<u.length;v++){if(A=u[v],R=A.instance,V=A.currentTarget,A=A.listener,R!==p&&f.isPropagationStopped())break e;p=A,f.currentTarget=V;try{p(f)}catch(K){ah(K)}f.currentTarget=null,p=R}}}}function ze(n,r){var o=r[Lr];o===void 0&&(o=r[Lr]=new Set);var u=n+"__bubble";o.has(u)||(Kv(r,n,2,!1),o.add(u))}function Mp(n,r,o){var u=0;r&&(u|=4),Kv(o,n,u,r)}var Th="_reactListening"+Math.random().toString(36).slice(2);function Pp(n){if(!n[Th]){n[Th]=!0,gl.forEach(function(o){o!=="selectionchange"&&(hC.has(o)||Mp(o,!1,n),Mp(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Th]||(r[Th]=!0,Mp("selectionchange",!1,r))}}function Kv(n,r,o,u){switch(_E(r)){case 2:var f=LC;break;case 8:f=UC;break;default:f=Qp}o=f.bind(null,r,o,n),f=void 0,!qn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(r,o,{capture:!0,passive:f}):n.addEventListener(r,o,!0):f!==void 0?n.addEventListener(r,o,{passive:f}):n.addEventListener(r,o,!1)}function Vp(n,r,o,u,f){var p=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var v=u.tag;if(v===3||v===4){var A=u.stateNode.containerInfo;if(A===f||A.nodeType===8&&A.parentNode===f)break;if(v===4)for(v=u.return;v!==null;){var R=v.tag;if((R===3||R===4)&&(R=v.stateNode.containerInfo,R===f||R.nodeType===8&&R.parentNode===f))return;v=v.return}for(;A!==null;){if(v=ui(A),v===null)return;if(R=v.tag,R===5||R===6||R===26||R===27){u=p=v;continue e}A=A.parentNode}}u=u.return}Cc(function(){var V=p,K=Ka(o),J=[];e:{var H=Pg.get(n);if(H!==void 0){var G=Wa,ge=n;switch(n){case"keypress":if(Ci(o)===0)break e;case"keydown":case"keyup":G=Ja;break;case"focusin":ge="focus",G=$a;break;case"focusout":ge="blur",G=$a;break;case"beforeblur":case"afterblur":G=$a;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=Gn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=ld;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=Mc;break;case Og:case xg:case kg:G=Xa;break;case Mg:G=Vc;break;case"scroll":case"scrollend":G=Rc;break;case"wheel":G=eo;break;case"copy":case"cut":case"paste":G=Za;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Nl;break;case"toggle":case"beforetoggle":G=Uc}var Oe=(r&4)!==0,St=!Oe&&(n==="scroll"||n==="scrollend"),U=Oe?H!==null?H+"Capture":null:H;Oe=[];for(var M=V,B;M!==null;){var X=M;if(B=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||B===null||U===null||(X=Hr(M,U),X!=null&&Oe.push(au(M,X,B))),St)break;M=M.return}0<Oe.length&&(H=new G(H,ge,null,o,K),J.push({event:H,listeners:Oe}))}}if((r&7)===0){e:{if(H=n==="mouseover"||n==="pointerover",G=n==="mouseout"||n==="pointerout",H&&o!==Fn&&(ge=o.relatedTarget||o.fromElement)&&(ui(ge)||ge[Wi]))break e;if((G||H)&&(H=K.window===K?K:(H=K.ownerDocument)?H.defaultView||H.parentWindow:window,G?(ge=o.relatedTarget||o.toElement,G=V,ge=ge?ui(ge):null,ge!==null&&(St=de(ge),Oe=ge.tag,ge!==St||Oe!==5&&Oe!==27&&Oe!==6)&&(ge=null)):(G=null,ge=V),G!==ge)){if(Oe=Gn,X="onMouseLeave",U="onMouseEnter",M="mouse",(n==="pointerout"||n==="pointerover")&&(Oe=Nl,X="onPointerLeave",U="onPointerEnter",M="pointer"),St=G==null?H:js(G),B=ge==null?H:js(ge),H=new Oe(X,M+"leave",G,o,K),H.target=St,H.relatedTarget=B,X=null,ui(K)===V&&(Oe=new Oe(U,M+"enter",ge,o,K),Oe.target=B,Oe.relatedTarget=St,X=Oe),St=X,G&&ge)t:{for(Oe=G,U=ge,M=0,B=Oe;B;B=wo(B))M++;for(B=0,X=U;X;X=wo(X))B++;for(;0<M-B;)Oe=wo(Oe),M--;for(;0<B-M;)U=wo(U),B--;for(;M--;){if(Oe===U||U!==null&&Oe===U.alternate)break t;Oe=wo(Oe),U=wo(U)}Oe=null}else Oe=null;G!==null&&Wv(J,H,G,Oe,!1),ge!==null&&St!==null&&Wv(J,St,ge,Oe,!0)}}e:{if(H=V?js(V):window,G=H.nodeName&&H.nodeName.toLowerCase(),G==="select"||G==="input"&&H.type==="file")var _e=Eg;else if(Mt(H))if(Tg)_e=Ab;else{_e=Tb;var Le=Eb}else G=H.nodeName,!G||G.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?V&&Sl(V.elementType)&&(_e=Eg):_e=Sb;if(_e&&(_e=_e(n,V))){ts(J,_e,o,K);break e}Le&&Le(n,H,V),n==="focusout"&&V&&H.type==="number"&&V.memoizedProps.value!=null&&Ga(H,"number",H.value)}switch(Le=V?js(V):window,n){case"focusin":(Mt(Le)||Le.contentEditable==="true")&&(to=Le,dd=V,xl=null);break;case"focusout":xl=dd=to=null;break;case"mousedown":pd=!0;break;case"contextmenu":case"mouseup":case"dragend":pd=!1,Ng(J,o,K);break;case"selectionchange":if(Cb)break;case"keydown":case"keyup":Ng(J,o,K)}var ve;if(Ni)e:{switch(n){case"compositionstart":var Ce="onCompositionStart";break e;case"compositionend":Ce="onCompositionEnd";break e;case"compositionupdate":Ce="onCompositionUpdate";break e}Ce=void 0}else Ke?q(n,o)&&(Ce="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(Ce="onCompositionStart");Ce&&(y&&o.locale!=="ko"&&(Ke||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&Ke&&(ve=wl()):(bi=K,Gs="value"in bi?bi.value:bi.textContent,Ke=!0)),Le=Sh(V,Ce),0<Le.length&&(Ce=new Rl(Ce,n,null,o,K),J.push({event:Ce,listeners:Le}),ve?Ce.data=ve:(ve=oe(o),ve!==null&&(Ce.data=ve)))),(ve=g?kt(n,o):We(n,o))&&(Ce=Sh(V,"onBeforeInput"),0<Ce.length&&(Le=new Rl("onBeforeInput","beforeinput",null,o,K),J.push({event:Le,listeners:Ce}),Le.data=ve)),lC(J,n,V,o,K)}Gv(J,r)})}function au(n,r,o){return{instance:n,listener:r,currentTarget:o}}function Sh(n,r){for(var o=r+"Capture",u=[];n!==null;){var f=n,p=f.stateNode;f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=Hr(n,o),f!=null&&u.unshift(au(n,f,p)),f=Hr(n,r),f!=null&&u.push(au(n,f,p))),n=n.return}return u}function wo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Wv(n,r,o,u,f){for(var p=r._reactName,v=[];o!==null&&o!==u;){var A=o,R=A.alternate,V=A.stateNode;if(A=A.tag,R!==null&&R===u)break;A!==5&&A!==26&&A!==27||V===null||(R=V,f?(V=Hr(o,p),V!=null&&v.unshift(au(o,V,R))):f||(V=Hr(o,p),V!=null&&v.push(au(o,V,R)))),o=o.return}v.length!==0&&n.push({event:r,listeners:v})}var fC=/\r\n?/g,dC=/\u0000|\uFFFD/g;function Qv(n){return(typeof n=="string"?n:""+n).replace(fC,`
`).replace(dC,"")}function Yv(n,r){return r=Qv(r),Qv(n)===r}function Ah(){}function rt(n,r,o,u,f,p){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||Hn(n,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&Hn(n,""+u);break;case"className":Hs(n,"class",u);break;case"tabIndex":Hs(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Hs(n,o,u);break;case"style":bc(n,u,p);break;case"data":if(r!=="object"){Hs(n,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=wi(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(o==="formAction"?(r!=="input"&&rt(n,r,"name",f.name,f,null),rt(n,r,"formEncType",f.formEncType,f,null),rt(n,r,"formMethod",f.formMethod,f,null),rt(n,r,"formTarget",f.formTarget,f,null)):(rt(n,r,"encType",f.encType,f,null),rt(n,r,"method",f.method,f,null),rt(n,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=wi(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=Ah);break;case"onScroll":u!=null&&ze("scroll",n);break;case"onScrollEnd":u!=null&&ze("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=wi(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":ze("beforetoggle",n),ze("toggle",n),zs(n,"popover",u);break;case"xlinkActuate":zn(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":zn(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":zn(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":zn(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":zn(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":zn(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":zn(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":zn(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":zn(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":zs(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=ad.get(o)||o,zs(n,o,u))}}function Lp(n,r,o,u,f,p){switch(o){case"style":bc(n,u,p);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=o}}break;case"children":typeof u=="string"?Hn(n,u):(typeof u=="number"||typeof u=="bigint")&&Hn(n,""+u);break;case"onScroll":u!=null&&ze("scroll",n);break;case"onScrollEnd":u!=null&&ze("scrollend",n);break;case"onClick":u!=null&&(n.onclick=Ah);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fa.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),p=n[xt]||null,p=p!=null?p[o]:null,typeof p=="function"&&n.removeEventListener(r,p,f),typeof u=="function")){typeof p!="function"&&p!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(r,u,f);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):zs(n,o,u)}}}function tn(n,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ze("error",n),ze("load",n);var u=!1,f=!1,p;for(p in o)if(o.hasOwnProperty(p)){var v=o[p];if(v!=null)switch(p){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:rt(n,r,p,v,o,null)}}f&&rt(n,r,"srcSet",o.srcSet,o,null),u&&rt(n,r,"src",o.src,o,null);return;case"input":ze("invalid",n);var A=p=v=f=null,R=null,V=null;for(u in o)if(o.hasOwnProperty(u)){var K=o[u];if(K!=null)switch(u){case"name":f=K;break;case"type":v=K;break;case"checked":R=K;break;case"defaultChecked":V=K;break;case"value":p=K;break;case"defaultValue":A=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,r));break;default:rt(n,r,u,K,o,null)}}Br(n,p,A,R,V,v,f,!1),jr(n);return;case"select":ze("invalid",n),u=v=p=null;for(f in o)if(o.hasOwnProperty(f)&&(A=o[f],A!=null))switch(f){case"value":p=A;break;case"defaultValue":v=A;break;case"multiple":u=A;default:rt(n,r,f,A,o,null)}r=p,o=v,n.multiple=!!u,r!=null?Ze(n,!!u,r,!1):o!=null&&Ze(n,!!u,o,!0);return;case"textarea":ze("invalid",n),p=f=u=null;for(v in o)if(o.hasOwnProperty(v)&&(A=o[v],A!=null))switch(v){case"value":u=A;break;case"defaultValue":f=A;break;case"children":p=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:rt(n,r,v,A,o,null)}qs(n,u,f,p),jr(n);return;case"option":for(R in o)if(o.hasOwnProperty(R)&&(u=o[R],u!=null))switch(R){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:rt(n,r,R,u,o,null)}return;case"dialog":ze("cancel",n),ze("close",n);break;case"iframe":case"object":ze("load",n);break;case"video":case"audio":for(u=0;u<ru.length;u++)ze(ru[u],n);break;case"image":ze("error",n),ze("load",n);break;case"details":ze("toggle",n);break;case"embed":case"source":case"link":ze("error",n),ze("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in o)if(o.hasOwnProperty(V)&&(u=o[V],u!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:rt(n,r,V,u,o,null)}return;default:if(Sl(r)){for(K in o)o.hasOwnProperty(K)&&(u=o[K],u!==void 0&&Lp(n,r,K,u,o,void 0));return}}for(A in o)o.hasOwnProperty(A)&&(u=o[A],u!=null&&rt(n,r,A,u,o,null))}function pC(n,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,v=null,A=null,R=null,V=null,K=null;for(G in o){var J=o[G];if(o.hasOwnProperty(G)&&J!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":R=J;default:u.hasOwnProperty(G)||rt(n,r,G,null,u,J)}}for(var H in u){var G=u[H];if(J=o[H],u.hasOwnProperty(H)&&(G!=null||J!=null))switch(H){case"type":p=G;break;case"name":f=G;break;case"checked":V=G;break;case"defaultChecked":K=G;break;case"value":v=G;break;case"defaultValue":A=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,r));break;default:G!==J&&rt(n,r,H,G,u,J)}}Fs(n,v,A,R,V,K,p,f);return;case"select":G=v=A=H=null;for(p in o)if(R=o[p],o.hasOwnProperty(p)&&R!=null)switch(p){case"value":break;case"multiple":G=R;default:u.hasOwnProperty(p)||rt(n,r,p,null,u,R)}for(f in u)if(p=u[f],R=o[f],u.hasOwnProperty(f)&&(p!=null||R!=null))switch(f){case"value":H=p;break;case"defaultValue":A=p;break;case"multiple":v=p;default:p!==R&&rt(n,r,f,p,u,R)}r=A,o=v,u=G,H!=null?Ze(n,!!o,H,!1):!!u!=!!o&&(r!=null?Ze(n,!!o,r,!0):Ze(n,!!o,o?[]:"",!1));return;case"textarea":G=H=null;for(A in o)if(f=o[A],o.hasOwnProperty(A)&&f!=null&&!u.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:rt(n,r,A,null,u,f)}for(v in u)if(f=u[v],p=o[v],u.hasOwnProperty(v)&&(f!=null||p!=null))switch(v){case"value":H=f;break;case"defaultValue":G=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==p&&rt(n,r,v,f,u,p)}zr(n,H,G);return;case"option":for(var ge in o)if(H=o[ge],o.hasOwnProperty(ge)&&H!=null&&!u.hasOwnProperty(ge))switch(ge){case"selected":n.selected=!1;break;default:rt(n,r,ge,null,u,H)}for(R in u)if(H=u[R],G=o[R],u.hasOwnProperty(R)&&H!==G&&(H!=null||G!=null))switch(R){case"selected":n.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:rt(n,r,R,H,u,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Oe in o)H=o[Oe],o.hasOwnProperty(Oe)&&H!=null&&!u.hasOwnProperty(Oe)&&rt(n,r,Oe,null,u,H);for(V in u)if(H=u[V],G=o[V],u.hasOwnProperty(V)&&H!==G&&(H!=null||G!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,r));break;default:rt(n,r,V,H,u,G)}return;default:if(Sl(r)){for(var St in o)H=o[St],o.hasOwnProperty(St)&&H!==void 0&&!u.hasOwnProperty(St)&&Lp(n,r,St,void 0,u,H);for(K in u)H=u[K],G=o[K],!u.hasOwnProperty(K)||H===G||H===void 0&&G===void 0||Lp(n,r,K,H,u,G);return}}for(var U in o)H=o[U],o.hasOwnProperty(U)&&H!=null&&!u.hasOwnProperty(U)&&rt(n,r,U,null,u,H);for(J in u)H=u[J],G=o[J],!u.hasOwnProperty(J)||H===G||H==null&&G==null||rt(n,r,J,H,u,G)}var Up=null,jp=null;function wh(n){return n.nodeType===9?n:n.ownerDocument}function $v(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xv(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function Bp(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var zp=null;function _C(){var n=window.event;return n&&n.type==="popstate"?n===zp?!1:(zp=n,!0):(zp=null,!1)}var Zv=typeof setTimeout=="function"?setTimeout:void 0,mC=typeof clearTimeout=="function"?clearTimeout:void 0,Jv=typeof Promise=="function"?Promise:void 0,gC=typeof queueMicrotask=="function"?queueMicrotask:typeof Jv<"u"?function(n){return Jv.resolve(null).then(n).catch(yC)}:Zv;function yC(n){setTimeout(function(){throw n})}function Hp(n,r){var o=r,u=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(u===0){n.removeChild(f),pu(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=f}while(o);pu(r)}function Fp(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Fp(o),Ur(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function vC(n,r,o,u){for(;n.nodeType===1;){var f=o;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[Us])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(p=n.getAttribute("rel"),p==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(p!==f.rel||n.getAttribute("href")!==(f.href==null?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(p=n.getAttribute("src"),(p!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===p)return n}else return n;if(n=di(n.nextSibling),n===null)break}return null}function EC(n,r,o){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=di(n.nextSibling),n===null))return null;return n}function di(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}function eE(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}function tE(n,r,o){switch(r=wh(o),n){case"html":if(n=r.documentElement,!n)throw Error(s(452));return n;case"head":if(n=r.head,!n)throw Error(s(453));return n;case"body":if(n=r.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}var ti=new Map,nE=new Set;function bh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.ownerDocument}var ms=ue.d;ue.d={f:TC,r:SC,D:AC,C:wC,L:bC,m:CC,X:IC,S:RC,M:NC};function TC(){var n=ms.f(),r=gh();return n||r}function SC(n){var r=Qi(n);r!==null&&r.tag===5&&r.type==="form"?Ny(r):ms.r(n)}var bo=typeof document>"u"?null:document;function iE(n,r,o){var u=bo;if(u&&typeof r=="string"&&r){var f=vt(r);f='link[rel="'+n+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),nE.has(f)||(nE.add(f),n={rel:n,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),tn(r,"link",n),_t(r),u.head.appendChild(r)))}}function AC(n){ms.D(n),iE("dns-prefetch",n,null)}function wC(n,r){ms.C(n,r),iE("preconnect",n,r)}function bC(n,r,o){ms.L(n,r,o);var u=bo;if(u&&n&&r){var f='link[rel="preload"][as="'+vt(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+vt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+vt(o.imageSizes)+'"]')):f+='[href="'+vt(n)+'"]';var p=f;switch(r){case"style":p=Co(n);break;case"script":p=Ro(n)}ti.has(p)||(n=D({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:n,as:r},o),ti.set(p,n),u.querySelector(f)!==null||r==="style"&&u.querySelector(ou(p))||r==="script"&&u.querySelector(lu(p))||(r=u.createElement("link"),tn(r,"link",n),_t(r),u.head.appendChild(r)))}}function CC(n,r){ms.m(n,r);var o=bo;if(o&&n){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+vt(u)+'"][href="'+vt(n)+'"]',p=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=Ro(n)}if(!ti.has(p)&&(n=D({rel:"modulepreload",href:n},r),ti.set(p,n),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(lu(p)))return}u=o.createElement("link"),tn(u,"link",n),_t(u),o.head.appendChild(u)}}}function RC(n,r,o){ms.S(n,r,o);var u=bo;if(u&&n){var f=Bs(u).hoistableStyles,p=Co(n);r=r||"default";var v=f.get(p);if(!v){var A={loading:0,preload:null};if(v=u.querySelector(ou(p)))A.loading=5;else{n=D({rel:"stylesheet",href:n,"data-precedence":r},o),(o=ti.get(p))&&qp(n,o);var R=v=u.createElement("link");_t(R),tn(R,"link",n),R._p=new Promise(function(V,K){R.onload=V,R.onerror=K}),R.addEventListener("load",function(){A.loading|=1}),R.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Ch(v,r,u)}v={type:"stylesheet",instance:v,count:1,state:A},f.set(p,v)}}}function IC(n,r){ms.X(n,r);var o=bo;if(o&&n){var u=Bs(o).hoistableScripts,f=Ro(n),p=u.get(f);p||(p=o.querySelector(lu(f)),p||(n=D({src:n,async:!0},r),(r=ti.get(f))&&Gp(n,r),p=o.createElement("script"),_t(p),tn(p,"link",n),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(f,p))}}function NC(n,r){ms.M(n,r);var o=bo;if(o&&n){var u=Bs(o).hoistableScripts,f=Ro(n),p=u.get(f);p||(p=o.querySelector(lu(f)),p||(n=D({src:n,async:!0,type:"module"},r),(r=ti.get(f))&&Gp(n,r),p=o.createElement("script"),_t(p),tn(p,"link",n),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(f,p))}}function sE(n,r,o,u){var f=(f=zt.current)?bh(f):null;if(!f)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=Co(o.href),o=Bs(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=Co(o.href);var p=Bs(f).hoistableStyles,v=p.get(n);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(n,v),(p=f.querySelector(ou(n)))&&!p._p&&(v.instance=p,v.state.loading=5),ti.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},ti.set(n,o),p||DC(f,n,o,v.state))),r&&u===null)throw Error(s(528,""));return v}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Ro(o),o=Bs(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function Co(n){return'href="'+vt(n)+'"'}function ou(n){return'link[rel="stylesheet"]['+n+"]"}function rE(n){return D({},n,{"data-precedence":n.precedence,precedence:null})}function DC(n,r,o,u){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=n.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),tn(r,"link",o),_t(r),n.head.appendChild(r))}function Ro(n){return'[src="'+vt(n)+'"]'}function lu(n){return"script[async]"+n}function aE(n,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=n.querySelector('style[data-href~="'+vt(o.href)+'"]');if(u)return r.instance=u,_t(u),u;var f=D({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),_t(u),tn(u,"style",f),Ch(u,o.precedence,n),r.instance=u;case"stylesheet":f=Co(o.href);var p=n.querySelector(ou(f));if(p)return r.state.loading|=4,r.instance=p,_t(p),p;u=rE(o),(f=ti.get(f))&&qp(u,f),p=(n.ownerDocument||n).createElement("link"),_t(p);var v=p;return v._p=new Promise(function(A,R){v.onload=A,v.onerror=R}),tn(p,"link",u),r.state.loading|=4,Ch(p,o.precedence,n),r.instance=p;case"script":return p=Ro(o.src),(f=n.querySelector(lu(p)))?(r.instance=f,_t(f),f):(u=o,(f=ti.get(p))&&(u=D({},o),Gp(u,f)),n=n.ownerDocument||n,f=n.createElement("script"),_t(f),tn(f,"link",u),n.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,Ch(u,o.precedence,n));return r.instance}function Ch(n,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,p=f,v=0;v<u.length;v++){var A=u[v];if(A.dataset.precedence===r)p=A;else if(p!==f)break}p?p.parentNode.insertBefore(n,p.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(n,r.firstChild))}function qp(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function Gp(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var Rh=null;function oE(n,r,o){if(Rh===null){var u=new Map,f=Rh=new Map;f.set(o,u)}else f=Rh,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),f=0;f<o.length;f++){var p=o[f];if(!(p[Us]||p[Ft]||n==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var v=p.getAttribute(r)||"";v=n+v;var A=u.get(v);A?A.push(p):u.set(v,[p])}}return u}function lE(n,r,o){n=n.ownerDocument||n,n.head.insertBefore(o,r==="title"?n.querySelector("head > title"):null)}function OC(n,r,o){if(o===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function uE(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var uu=null;function xC(){}function kC(n,r,o){if(uu===null)throw Error(s(475));var u=uu;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Co(o.href),p=n.querySelector(ou(f));if(p){n=p._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=Ih.bind(u),n.then(u,u)),r.state.loading|=4,r.instance=p,_t(p);return}p=n.ownerDocument||n,o=rE(o),(f=ti.get(f))&&qp(o,f),p=p.createElement("link"),_t(p);var v=p;v._p=new Promise(function(A,R){v.onload=A,v.onerror=R}),tn(p,"link",o),r.instance=p}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=Ih.bind(u),n.addEventListener("load",r),n.addEventListener("error",r))}}function MC(){if(uu===null)throw Error(s(475));var n=uu;return n.stylesheets&&n.count===0&&Kp(n,n.stylesheets),0<n.count?function(r){var o=setTimeout(function(){if(n.stylesheets&&Kp(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(o)}}:null}function Ih(){if(this.count--,this.count===0){if(this.stylesheets)Kp(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Nh=null;function Kp(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Nh=new Map,r.forEach(PC,n),Nh=null,Ih.call(n))}function PC(n,r){if(!(r.state.loading&4)){var o=Nh.get(n);if(o)var u=o.get(null);else{o=new Map,Nh.set(n,o);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var v=f[p];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),u=v)}u&&o.set(null,u)}f=r.instance,v=f.getAttribute("data-precedence"),p=o.get(v)||u,p===u&&o.set(null,f),o.set(v,f),this.count++,u=Ih.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),p?p.parentNode.insertBefore(f,p.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),r.state.loading|=4}}var cu={$$typeof:L,Provider:null,Consumer:null,_currentValue:ye,_currentValue2:ye,_threadCount:0};function VC(n,r,o,u,f,p,v,A){this.tag=1,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=za(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=za(0),this.hiddenUpdates=za(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function cE(n,r,o,u,f,p,v,A,R,V,K,J){return n=new VC(n,r,o,v,A,R,V,J),r=1,p===!0&&(r|=24),p=Jn(3,null,null,r),n.current=p,p.stateNode=n,r=wd(),r.refCount++,n.pooledCache=r,r.refCount++,p.memoizedState={element:u,isDehydrated:o,cache:r},sp(p),n}function hE(n){return n?(n=so,n):so}function fE(n,r,o,u,f,p){f=hE(f),u.context===null?u.context=f:u.pendingContext=f,u=Js(r),u.payload={element:o},p=p===void 0?null:p,p!==null&&(u.callback=p),o=er(n,u,r),o!==null&&(An(o,n,r),Wl(o,n,r))}function dE(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function Wp(n,r){dE(n,r),(n=n.alternate)&&dE(n,r)}function pE(n){if(n.tag===13){var r=Ks(n,67108864);r!==null&&An(r,n,67108864),Wp(n,67108864)}}var Dh=!0;function LC(n,r,o,u){var f=b.T;b.T=null;var p=ue.p;try{ue.p=2,Qp(n,r,o,u)}finally{ue.p=p,b.T=f}}function UC(n,r,o,u){var f=b.T;b.T=null;var p=ue.p;try{ue.p=8,Qp(n,r,o,u)}finally{ue.p=p,b.T=f}}function Qp(n,r,o,u){if(Dh){var f=Yp(u);if(f===null)Vp(n,r,u,Oh,o),mE(n,u);else if(BC(f,n,r,o,u))u.stopPropagation();else if(mE(n,u),r&4&&-1<jC.indexOf(n)){for(;f!==null;){var p=Qi(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var v=li(p.pendingLanes);if(v!==0){var A=p;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var R=1<<31-vn(v);A.entanglements[1]|=R,v&=~R}Pi(p),(gt&6)===0&&(ph=wn()+500,su(0))}}break;case 13:A=Ks(p,2),A!==null&&An(A,p,2),gh(),Wp(p,2)}if(p=Yp(u),p===null&&Vp(n,r,u,Oh,o),p===f)break;f=p}f!==null&&u.stopPropagation()}else Vp(n,r,u,null,o)}}function Yp(n){return n=Ka(n),$p(n)}var Oh=null;function $p(n){if(Oh=null,n=ui(n),n!==null){var r=de(n);if(r===null)n=null;else{var o=r.tag;if(o===13){if(n=Se(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return Oh=n,null}function _E(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(mc()){case Ot:return 2;case Ht:return 8;case Ki:case gc:return 32;case fl:return 268435456;default:return 32}default:return 32}}var Xp=!1,or=null,lr=null,ur=null,hu=new Map,fu=new Map,cr=[],jC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mE(n,r){switch(n){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":hu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":fu.delete(r.pointerId)}}function du(n,r,o,u,f,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[f]},r!==null&&(r=Qi(r),r!==null&&pE(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),n)}function BC(n,r,o,u,f){switch(r){case"focusin":return or=du(or,n,r,o,u,f),!0;case"dragenter":return lr=du(lr,n,r,o,u,f),!0;case"mouseover":return ur=du(ur,n,r,o,u,f),!0;case"pointerover":var p=f.pointerId;return hu.set(p,du(hu.get(p)||null,n,r,o,u,f)),!0;case"gotpointercapture":return p=f.pointerId,fu.set(p,du(fu.get(p)||null,n,r,o,u,f)),!0}return!1}function gE(n){var r=ui(n.target);if(r!==null){var o=de(r);if(o!==null){if(r=o.tag,r===13){if(r=Se(o),r!==null){n.blockedOn=r,Ls(n.priority,function(){if(o.tag===13){var u=Vn(),f=Ks(o,u);f!==null&&An(f,o,u),Wp(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function xh(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=Yp(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Fn=u,o.target.dispatchEvent(u),Fn=null}else return r=Qi(o),r!==null&&pE(r),n.blockedOn=o,!1;r.shift()}return!0}function yE(n,r,o){xh(n)&&o.delete(r)}function zC(){Xp=!1,or!==null&&xh(or)&&(or=null),lr!==null&&xh(lr)&&(lr=null),ur!==null&&xh(ur)&&(ur=null),hu.forEach(yE),fu.forEach(yE)}function kh(n,r){n.blockedOn===r&&(n.blockedOn=null,Xp||(Xp=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,zC)))}var Mh=null;function vE(n){Mh!==n&&(Mh=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Mh===n&&(Mh=null);for(var r=0;r<n.length;r+=3){var o=n[r],u=n[r+1],f=n[r+2];if(typeof u!="function"){if($p(u||o)===null)continue;break}var p=Qi(o);p!==null&&(n.splice(r,3),r-=3,Bd(p,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function pu(n){function r(R){return kh(R,n)}or!==null&&kh(or,n),lr!==null&&kh(lr,n),ur!==null&&kh(ur,n),hu.forEach(r),fu.forEach(r);for(var o=0;o<cr.length;o++){var u=cr[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<cr.length&&(o=cr[0],o.blockedOn===null);)gE(o),o.blockedOn===null&&cr.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],p=o[u+1],v=f[xt]||null;if(typeof p=="function")v||vE(o);else if(v){var A=null;if(p&&p.hasAttribute("formAction")){if(f=p,v=p[xt]||null)A=v.formAction;else if($p(f)!==null)continue}else A=v.action;typeof A=="function"?o[u+1]=A:(o.splice(u,3),u-=3),vE(o)}}}function Zp(n){this._internalRoot=n}Ph.prototype.render=Zp.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=Vn();fE(o,u,n,r,null,null)},Ph.prototype.unmount=Zp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;n.tag===0&&So(),fE(n.current,2,null,n,null,null),gh(),r[Wi]=null}};function Ph(n){this._internalRoot=n}Ph.prototype.unstable_scheduleHydration=function(n){if(n){var r=Sc();n={blockedOn:null,target:n,priority:r};for(var o=0;o<cr.length&&r!==0&&r<cr[o].priority;o++);cr.splice(o,0,n),o===0&&gE(n)}};var EE=e.version;if(EE!=="19.0.0")throw Error(s(527,EE,"19.0.0"));ue.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=ee(r),n=n!==null?ae(n):null,n=n===null?null:n.stateNode,n};var HC={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:b,findFiberByHostInstance:ui,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vh.isDisabled&&Vh.supportsFiber)try{Os=Vh.inject(HC),ln=Vh}catch{}}return mu.createRoot=function(n,r){if(!a(n))throw Error(s(299));var o=!1,u="",f=Ly,p=Uy,v=jy,A=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(p=r.onCaughtError),r.onRecoverableError!==void 0&&(v=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(A=r.unstable_transitionCallbacks)),r=cE(n,1,!1,null,null,o,u,f,p,v,A,null),n[Wi]=r.current,Pp(n.nodeType===8?n.parentNode:n),new Zp(r)},mu.hydrateRoot=function(n,r,o){if(!a(n))throw Error(s(299));var u=!1,f="",p=Ly,v=Uy,A=jy,R=null,V=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(p=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(A=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(R=o.unstable_transitionCallbacks),o.formState!==void 0&&(V=o.formState)),r=cE(n,1,!0,r,o??null,u,f,p,v,A,R,V),r.context=hE(null),o=r.current,u=Vn(),f=Js(u),f.callback=null,er(o,f,u),r.current.lanes=u,wt(r,u),Pi(r),n[Wi]=r.current,Pp(n),new Ph(r)},mu.version="19.0.0",mu}var DE;function ZC(){if(DE)return t_.exports;DE=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),t_.exports=XC(),t_.exports}var JC=ZC();const eR="_hideHome_1wz9r_19",tR="_home_wrapper_1wz9r_27",nR="_left_1wz9r_41",iR="_wrapTop_1wz9r_59",sR="_wrapBottom_1wz9r_125",rR="_orange_1wz9r_155",aR="_purple_1wz9r_161",oR="_blue_1wz9r_167",lR="_right_1wz9r_177",gs={hideHome:eR,home_wrapper:tR,left:nR,wrapTop:iR,wrapBottom:sR,orange:rR,purple:aR,blue:oR,right:lR},Ee=({className:i,content:e,func:t,submit:s,icon:a,change:l,element:c})=>T.jsxs("button",{className:`${i}`,onChange:()=>{l()},onSubmit:d=>{s(d)},onClick:()=>{t()},children:[a,e,c]}),uR="_nav_11pvi_45",cR="_hideNav_11pvi_53",hR="_left_11pvi_99",fR="_middle_11pvi_127",dR="_NavLinks_11pvi_127",pR="_indicated_11pvi_173",_R="_indication_11pvi_183",mR="_right_11pvi_201",gR="_HamburgerButt_11pvi_231",yR="_SignInButt_11pvi_247",vR="_SignUpButt_11pvi_281",ER="_sidebar_11pvi_313",TR="_hideSideBar_11pvi_323",SR="_User_Button_11pvi_541",Ve={nav:uR,hideNav:cR,left:hR,middle:fR,NavLinks:dR,indicated:pR,indication:_R,right:mR,HamburgerButt:gR,SignInButt:yR,SignUpButt:vR,sidebar:ER,hideSideBar:TR,User_Button:SR},AR=()=>{};var OE={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=function(i,e){if(!i)throw el(e)},el=function(i){return new Error("Firebase Database ("+LS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},wR=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const a=i[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=i[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=i[t++],c=i[t++],d=i[t++],_=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(_>>10)),e[s++]=String.fromCharCode(56320+(_&1023))}else{const l=i[t++],c=i[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},om={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const l=i[a],c=a+1<i.length,d=c?i[a+1]:0,_=a+2<i.length,m=_?i[a+2]:0,E=l>>2,S=(l&3)<<4|d>>4;let I=(d&15)<<2|m>>6,L=m&63;_||(L=64,c||(I=64)),s.push(t[E],t[S],t[I],t[L])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(US(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):wR(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const l=t[i.charAt(a++)],d=a<i.length?t[i.charAt(a)]:0;++a;const m=a<i.length?t[i.charAt(a)]:64;++a;const S=a<i.length?t[i.charAt(a)]:64;if(++a,l==null||d==null||m==null||S==null)throw new bR;const I=l<<2|d>>4;if(s.push(I),m!==64){const L=d<<4&240|m>>2;if(s.push(L),S!==64){const F=m<<6&192|S;s.push(F)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class bR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jS=function(i){const e=US(i);return om.encodeByteArray(e,!0)},nf=function(i){return jS(i).replace(/\./g,"")},sf=function(i){try{return om.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CR(i){return BS(void 0,i)}function BS(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!RR(t)||(i[t]=BS(i[t],e[t]));return i}function RR(i){return i!=="__proto__"}/**
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
 */function IR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const NR=()=>IR().__FIREBASE_DEFAULTS__,DR=()=>{if(typeof process>"u"||typeof OE>"u")return;const i=OE.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},OR=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&sf(i[1]);return e&&JSON.parse(e)},xf=()=>{try{return AR()||NR()||DR()||OR()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},zS=i=>{var e,t;return(t=(e=xf())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},xR=i=>{const e=zS(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},HS=()=>{var i;return(i=xf())===null||i===void 0?void 0:i.config},FS=i=>{var e;return(e=xf())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function kR(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,l=i.sub||i.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},i);return[nf(JSON.stringify(t)),nf(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function um(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yn())}function MR(){var i;const e=(i=xf())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function PR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function VR(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function qS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LR(){const i=yn();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function UR(){return LS.NODE_ADMIN===!0}function jR(){return!MR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function BR(){try{return typeof indexedDB=="object"}catch{return!1}}function zR(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR="FirebaseError";class Ns extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=HR,Object.setPrototypeOf(this,Ns.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nc.prototype.create)}}class nc{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?FR(l,s):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new Ns(a,d,s)}}function FR(i,e){return i.replace(qR,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const qR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(i){return JSON.parse(i)}function rn(i){return JSON.stringify(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS=function(i){let e={},t={},s={},a="";try{const l=i.split(".");e=Hu(sf(l[0])||""),t=Hu(sf(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},GR=function(i){const e=GS(i),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},KR=function(i){const e=GS(i).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function qo(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function A_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function rf(i,e,t){const s={};for(const a in i)Object.prototype.hasOwnProperty.call(i,a)&&(s[a]=e.call(t,i[a],a,i));return s}function ya(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=i[a],c=e[a];if(xE(l)&&xE(c)){if(!ya(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function xE(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ru(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,l]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function Iu(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let S=0;S<16;S++)s[S]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let S=0;S<16;S++)s[S]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let S=16;S<80;S++){const I=s[S-3]^s[S-8]^s[S-14]^s[S-16];s[S]=(I<<1|I>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],_=this.chain_[4],m,E;for(let S=0;S<80;S++){S<40?S<20?(m=d^l&(c^d),E=1518500249):(m=l^c^d,E=1859775393):S<60?(m=l&c|d&(l|c),E=2400959708):(m=l^c^d,E=3395469782);const I=(a<<5|a>>>27)+m+_+E+s[S]&4294967295;_=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=I}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+_&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function QR(i,e){const t=new YR(i,e);return t.subscribe.bind(t)}class YR{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");$R(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=r_),a.error===void 0&&(a.error=r_),a.complete===void 0&&(a.complete=r_);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $R(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function r_(){}function XR(i,e){return`${i} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,he(s<i.length,"Surrogate pair missing trail surrogate.");const c=i.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},kf=function(i){let e=0;for(let t=0;t<i.length;t++){const s=i.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Nn(i){return i&&i._delegate?i._delegate:i}class br{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const pa="[DEFAULT]";/**
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
 */class JR{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new lm;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tI(e))try{this.getOrInitializeService({instanceIdentifier:pa})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=pa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pa){return this.instances.has(e)}getOptions(e=pa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&c.resolve(a)}return a}onInit(e,t){var s;const a=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:eI(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=pa){return this.component?this.component.multipleInstances?e:pa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eI(i){return i===pa?void 0:i}function tI(i){return i.instantiationMode==="EAGER"}/**
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
 */class nI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new JR(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(je||(je={}));const iI={debug:je.DEBUG,verbose:je.VERBOSE,info:je.INFO,warn:je.WARN,error:je.ERROR,silent:je.SILENT},sI=je.INFO,rI={[je.DEBUG]:"log",[je.VERBOSE]:"log",[je.INFO]:"info",[je.WARN]:"warn",[je.ERROR]:"error"},aI=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=rI[e];if(a)console[a](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mf{constructor(e){this.name=e,this._logLevel=sI,this._logHandler=aI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in je))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,je.DEBUG,...e),this._logHandler(this,je.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,je.VERBOSE,...e),this._logHandler(this,je.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,je.INFO,...e),this._logHandler(this,je.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,je.WARN,...e),this._logHandler(this,je.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,je.ERROR,...e),this._logHandler(this,je.ERROR,...e)}}const oI=(i,e)=>e.some(t=>i instanceof t);let kE,ME;function lI(){return kE||(kE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uI(){return ME||(ME=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const KS=new WeakMap,w_=new WeakMap,WS=new WeakMap,a_=new WeakMap,cm=new WeakMap;function cI(i){const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("success",l),i.removeEventListener("error",c)},l=()=>{t(Er(i.result)),a()},c=()=>{s(i.error),a()};i.addEventListener("success",l),i.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&KS.set(t,i)}).catch(()=>{}),cm.set(e,i),e}function hI(i){if(w_.has(i))return;const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("complete",l),i.removeEventListener("error",c),i.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",l),i.addEventListener("error",c),i.addEventListener("abort",c)});w_.set(i,e)}let b_={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return w_.get(i);if(e==="objectStoreNames")return i.objectStoreNames||WS.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Er(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function fI(i){b_=i(b_)}function dI(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(o_(this),e,...t);return WS.set(s,e.sort?e.sort():[e]),Er(s)}:uI().includes(i)?function(...e){return i.apply(o_(this),e),Er(KS.get(this))}:function(...e){return Er(i.apply(o_(this),e))}}function pI(i){return typeof i=="function"?dI(i):(i instanceof IDBTransaction&&hI(i),oI(i,lI())?new Proxy(i,b_):i)}function Er(i){if(i instanceof IDBRequest)return cI(i);if(a_.has(i))return a_.get(i);const e=pI(i);return e!==i&&(a_.set(i,e),cm.set(e,i)),e}const o_=i=>cm.get(i);function _I(i,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(i,e),d=Er(c);return s&&c.addEventListener("upgradeneeded",_=>{s(Er(c.result),_.oldVersion,_.newVersion,Er(c.transaction),_)}),t&&c.addEventListener("blocked",_=>t(_.oldVersion,_.newVersion,_)),d.then(_=>{l&&_.addEventListener("close",()=>l()),a&&_.addEventListener("versionchange",m=>a(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const mI=["get","getKey","getAll","getAllKeys","count"],gI=["put","add","delete","clear"],l_=new Map;function PE(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(l_.get(e))return l_.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=gI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||mI.includes(t)))return;const l=async function(c,...d){const _=this.transaction(c,a?"readwrite":"readonly");let m=_.store;return s&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),a&&_.done]))[0]};return l_.set(e,l),l}fI(i=>({...i,get:(e,t,s)=>PE(e,t)||i.get(e,t,s),has:(e,t)=>!!PE(e,t)||i.has(e,t)}));/**
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
 */class yI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(vI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function vI(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const C_="@firebase/app",VE="0.11.2";/**
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
 */const bs=new Mf("@firebase/app"),EI="@firebase/app-compat",TI="@firebase/analytics-compat",SI="@firebase/analytics",AI="@firebase/app-check-compat",wI="@firebase/app-check",bI="@firebase/auth",CI="@firebase/auth-compat",RI="@firebase/database",II="@firebase/data-connect",NI="@firebase/database-compat",DI="@firebase/functions",OI="@firebase/functions-compat",xI="@firebase/installations",kI="@firebase/installations-compat",MI="@firebase/messaging",PI="@firebase/messaging-compat",VI="@firebase/performance",LI="@firebase/performance-compat",UI="@firebase/remote-config",jI="@firebase/remote-config-compat",BI="@firebase/storage",zI="@firebase/storage-compat",HI="@firebase/firestore",FI="@firebase/vertexai",qI="@firebase/firestore-compat",GI="firebase",KI="11.4.0";/**
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
 */const R_="[DEFAULT]",WI={[C_]:"fire-core",[EI]:"fire-core-compat",[SI]:"fire-analytics",[TI]:"fire-analytics-compat",[wI]:"fire-app-check",[AI]:"fire-app-check-compat",[bI]:"fire-auth",[CI]:"fire-auth-compat",[RI]:"fire-rtdb",[II]:"fire-data-connect",[NI]:"fire-rtdb-compat",[DI]:"fire-fn",[OI]:"fire-fn-compat",[xI]:"fire-iid",[kI]:"fire-iid-compat",[MI]:"fire-fcm",[PI]:"fire-fcm-compat",[VI]:"fire-perf",[LI]:"fire-perf-compat",[UI]:"fire-rc",[jI]:"fire-rc-compat",[BI]:"fire-gcs",[zI]:"fire-gcs-compat",[HI]:"fire-fst",[qI]:"fire-fst-compat",[FI]:"fire-vertex","fire-js":"fire-js",[GI]:"fire-js-all"};/**
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
 */const af=new Map,QI=new Map,I_=new Map;function LE(i,e){try{i.container.addComponent(e)}catch(t){bs.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function va(i){const e=i.name;if(I_.has(e))return bs.debug(`There were multiple attempts to register component ${e}.`),!1;I_.set(e,i);for(const t of af.values())LE(t,i);for(const t of QI.values())LE(t,i);return!0}function hm(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Un(i){return i==null?!1:i.settings!==void 0}/**
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
 */const YI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tr=new nc("app","Firebase",YI);/**
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
 */class $I{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new br("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tr.create("app-deleted",{appName:this._name})}}/**
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
 */const Na=KI;function QS(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:R_,automaticDataCollectionEnabled:!1},e),a=s.name;if(typeof a!="string"||!a)throw Tr.create("bad-app-name",{appName:String(a)});if(t||(t=HS()),!t)throw Tr.create("no-options");const l=af.get(a);if(l){if(ya(t,l.options)&&ya(s,l.config))return l;throw Tr.create("duplicate-app",{appName:a})}const c=new nI(a);for(const _ of I_.values())c.addComponent(_);const d=new $I(t,s,c);return af.set(a,d),d}function YS(i=R_){const e=af.get(i);if(!e&&i===R_&&HS())return QS();if(!e)throw Tr.create("no-app",{appName:i});return e}function ji(i,e,t){var s;let a=(s=WI[i])!==null&&s!==void 0?s:i;t&&(a+=`-${t}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${a}" with version "${e}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bs.warn(d.join(" "));return}va(new br(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const XI="firebase-heartbeat-database",ZI=1,Fu="firebase-heartbeat-store";let u_=null;function $S(){return u_||(u_=_I(XI,ZI,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Fu)}catch(t){console.warn(t)}}}}).catch(i=>{throw Tr.create("idb-open",{originalErrorMessage:i.message})})),u_}async function JI(i){try{const t=(await $S()).transaction(Fu),s=await t.objectStore(Fu).get(XS(i));return await t.done,s}catch(e){if(e instanceof Ns)bs.warn(e.message);else{const t=Tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bs.warn(t.message)}}}async function UE(i,e){try{const s=(await $S()).transaction(Fu,"readwrite");await s.objectStore(Fu).put(e,XS(i)),await s.done}catch(t){if(t instanceof Ns)bs.warn(t.message);else{const s=Tr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});bs.warn(s.message)}}}function XS(i){return`${i.name}!${i.options.appId}`}/**
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
 */const e1=1024,t1=30;class n1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new s1(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=jE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>t1){const c=r1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){bs.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=jE(),{heartbeatsToSend:s,unsentEntries:a}=i1(this._heartbeatsCache.heartbeats),l=nf(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return bs.warn(t),""}}}function jE(){return new Date().toISOString().substring(0,10)}function i1(i,e=e1){const t=[];let s=i.slice();for(const a of i){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),BE(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),BE(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class s1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return BR()?zR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await JI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return UE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return UE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function BE(i){return nf(JSON.stringify({version:2,heartbeats:i})).length}function r1(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function a1(i){va(new br("platform-logger",e=>new yI(e),"PRIVATE")),va(new br("heartbeat",e=>new n1(e),"PRIVATE")),ji(C_,VE,i),ji(C_,VE,"esm2017"),ji("fire-js","")}a1("");function fm(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(i);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(i,s[a])&&(t[s[a]]=i[s[a]]);return t}function ZS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const o1=ZS,JS=new nc("auth","Firebase",ZS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of=new Mf("@firebase/auth");function l1(i,...e){of.logLevel<=je.WARN&&of.warn(`Auth (${Na}): ${i}`,...e)}function Kh(i,...e){of.logLevel<=je.ERROR&&of.error(`Auth (${Na}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(i,...e){throw dm(i,...e)}function Bi(i,...e){return dm(i,...e)}function e0(i,e,t){const s=Object.assign(Object.assign({},o1()),{[e]:t});return new nc("auth","Firebase",s).create(e,{appName:i.name})}function Ss(i){return e0(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dm(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return JS.create(i,...e)}function Re(i,e,...t){if(!i)throw dm(e,...t)}function ys(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Kh(e),new Error(e)}function Cs(i,e){i||ys(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function u1(){return zE()==="http:"||zE()==="https:"}function zE(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(u1()||VR()||"connection"in navigator)?navigator.onLine:!0}function h1(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,t){this.shortDelay=e,this.longDelay=t,Cs(t>e,"Short delay should be less than long delay!"),this.isMobile=um()||qS()}get(){return c1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(i,e){Cs(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ys("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ys("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ys("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1=new ic(3e4,6e4);function kr(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Mr(i,e,t,s,a={}){return n0(i,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const d=tl(Object.assign({key:i.config.apiKey},c)).slice(1),_=await i._getAdditionalHeaders();_["Content-Type"]="application/json",i.languageCode&&(_["X-Firebase-Locale"]=i.languageCode);const m=Object.assign({method:e,headers:_},l);return PR()||(m.referrerPolicy="no-referrer"),t0.fetch()(i0(i,i.config.apiHost,t,d),m)})}async function n0(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},f1),e);try{const a=new _1(i),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Lh(i,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[_,m]=d.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lh(i,"credential-already-in-use",c);if(_==="EMAIL_EXISTS")throw Lh(i,"email-already-in-use",c);if(_==="USER_DISABLED")throw Lh(i,"user-disabled",c);const E=s[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw e0(i,E,m);yi(i,E)}}catch(a){if(a instanceof Ns)throw a;yi(i,"network-request-failed",{message:String(a)})}}async function sc(i,e,t,s,a={}){const l=await Mr(i,e,t,s,a);return"mfaPendingCredential"in l&&yi(i,"multi-factor-auth-required",{_serverResponse:l}),l}function i0(i,e,t,s){const a=`${e}${t}?${s}`;return i.config.emulator?pm(i.config,a):`${i.config.apiScheme}://${a}`}function p1(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Bi(this.auth,"network-request-failed")),d1.get())})}}function Lh(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=Bi(i,e,s);return a.customData._tokenResponse=t,a}function HE(i){return i!==void 0&&i.enterprise!==void 0}class m1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return p1(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function g1(i,e){return Mr(i,"GET","/v2/recaptchaConfig",kr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y1(i,e){return Mr(i,"POST","/v1/accounts:delete",e)}async function s0(i,e){return Mr(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function v1(i,e=!1){const t=Nn(i),s=await t.getIdToken(e),a=_m(s);Re(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:s,authTime:ku(c_(a.auth_time)),issuedAtTime:ku(c_(a.iat)),expirationTime:ku(c_(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function c_(i){return Number(i)*1e3}function _m(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Kh("JWT malformed, contained fewer than 3 sections"),null;try{const a=sf(t);return a?JSON.parse(a):(Kh("Failed to decode base64 JWT payload"),null)}catch(a){return Kh("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function FE(i){const e=_m(i);return Re(e,"internal-error"),Re(typeof e.exp<"u","internal-error"),Re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qu(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ns&&E1(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function E1({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ku(this.lastLoginAt),this.creationTime=ku(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function lf(i){var e;const t=i.auth,s=await i.getIdToken(),a=await qu(i,s0(t,{idToken:s}));Re(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];i._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?r0(l.providerUserInfo):[],d=A1(i.providerData,c),_=i.isAnonymous,m=!(i.email&&l.passwordHash)&&!(d!=null&&d.length),E=_?m:!1,S={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new D_(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(i,S)}async function S1(i){const e=Nn(i);await lf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function A1(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function r0(i){return i.map(e=>{var{providerId:t}=e,s=fm(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w1(i,e){const t=await n0(i,{},async()=>{const s=tl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=i.config,c=i0(i,a,"/v1/token",`key=${l}`),d=await i._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",t0.fetch()(c,{method:"POST",headers:d,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function b1(i,e){return Mr(i,"POST","/v2/accounts:revokeToken",kr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Re(e.idToken,"internal-error"),Re(typeof e.idToken<"u","internal-error"),Re(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):FE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Re(e.length!==0,"internal-error");const t=FE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await w1(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new Uo;return s&&(Re(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(Re(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Re(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Uo,this.toJSON())}_performRefresh(){return ys("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(i,e){Re(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class vs{constructor(e){var{uid:t,auth:s,stsTokenManager:a}=e,l=fm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new T1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new D_(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await qu(this,this.stsTokenManager.getToken(this.auth,e));return Re(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return v1(this,e)}reload(){return S1(this)}_assign(e){this!==e&&(Re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new vs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await lf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Un(this.auth.app))return Promise.reject(Ss(this.auth));const e=await this.getIdToken();return await qu(this,y1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,a,l,c,d,_,m,E;const S=(s=t.displayName)!==null&&s!==void 0?s:void 0,I=(a=t.email)!==null&&a!==void 0?a:void 0,L=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,F=(c=t.photoURL)!==null&&c!==void 0?c:void 0,Y=(d=t.tenantId)!==null&&d!==void 0?d:void 0,z=(_=t._redirectEventId)!==null&&_!==void 0?_:void 0,W=(m=t.createdAt)!==null&&m!==void 0?m:void 0,Q=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:te,emailVerified:ce,isAnonymous:me,providerData:Te,stsTokenManager:O}=t;Re(te&&O,e,"internal-error");const C=Uo.fromJSON(this.name,O);Re(typeof te=="string",e,"internal-error"),fr(S,e.name),fr(I,e.name),Re(typeof ce=="boolean",e,"internal-error"),Re(typeof me=="boolean",e,"internal-error"),fr(L,e.name),fr(F,e.name),fr(Y,e.name),fr(z,e.name),fr(W,e.name),fr(Q,e.name);const b=new vs({uid:te,auth:e,email:I,emailVerified:ce,displayName:S,isAnonymous:me,photoURL:F,phoneNumber:L,tenantId:Y,stsTokenManager:C,createdAt:W,lastLoginAt:Q});return Te&&Array.isArray(Te)&&(b.providerData=Te.map(D=>Object.assign({},D))),z&&(b._redirectEventId=z),b}static async _fromIdTokenResponse(e,t,s=!1){const a=new Uo;a.updateFromServerResponse(t);const l=new vs({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await lf(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];Re(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?r0(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),d=new Uo;d.updateFromIdToken(s);const _=new vs({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),m={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new D_(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(_,m),_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=new Map;function Es(i){Cs(i instanceof Function,"Expected a class definition");let e=qE.get(i);return e?(Cs(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,qE.set(i,e),e)}/**
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
 */class a0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}a0.type="NONE";const GE=a0;/**
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
 */function Wh(i,e,t){return`firebase:${i}:${e}:${t}`}class jo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=Wh(this.userKey,a.apiKey,l),this.fullPersistenceKey=Wh("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new jo(Es(GE),e,s);const a=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let l=a[0]||Es(GE);const c=Wh(s,e.config.apiKey,e.name);let d=null;for(const m of t)try{const E=await m._get(c);if(E){const S=vs._fromJSON(e,E);m!==l&&(d=S),l=m;break}}catch{}const _=a.filter(m=>m._shouldAllowMigration);return!l._shouldAllowMigration||!_.length?new jo(l,e,s):(l=_[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==l)try{await m._remove(c)}catch{}})),new jo(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(c0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(o0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(f0(e))return"Blackberry";if(d0(e))return"Webos";if(l0(e))return"Safari";if((e.includes("chrome/")||u0(e))&&!e.includes("edge/"))return"Chrome";if(h0(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function o0(i=yn()){return/firefox\//i.test(i)}function l0(i=yn()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function u0(i=yn()){return/crios\//i.test(i)}function c0(i=yn()){return/iemobile/i.test(i)}function h0(i=yn()){return/android/i.test(i)}function f0(i=yn()){return/blackberry/i.test(i)}function d0(i=yn()){return/webos/i.test(i)}function mm(i=yn()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function C1(i=yn()){var e;return mm(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function R1(){return LR()&&document.documentMode===10}function p0(i=yn()){return mm(i)||h0(i)||d0(i)||f0(i)||/windows phone/i.test(i)||c0(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(i,e=[]){let t;switch(i){case"Browser":t=KE(yn());break;case"Worker":t=`${KE(yn())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Na}/${s}`}/**
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
 */class I1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,d)=>{try{const _=e(l);c(_)}catch(_){d(_)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function N1(i,e={}){return Mr(i,"GET","/v2/passwordPolicy",kr(i,e))}/**
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
 */const D1=6;class O1{constructor(e){var t,s,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:D1,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,a,l,c,d;const _={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,_),this.validatePasswordCharacterOptions(e,_),_.isValid&&(_.isValid=(t=_.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),_.isValid&&(_.isValid=(s=_.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),_.isValid&&(_.isValid=(a=_.containsLowercaseLetter)!==null&&a!==void 0?a:!0),_.isValid&&(_.isValid=(l=_.containsUppercaseLetter)!==null&&l!==void 0?l:!0),_.isValid&&(_.isValid=(c=_.containsNumericCharacter)!==null&&c!==void 0?c:!0),_.isValid&&(_.isValid=(d=_.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),_}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new WE(this),this.idTokenSubscription=new WE(this),this.beforeStateQueue=new I1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=JS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Es(t)),this._initializationPromise=this.queue(async()=>{var s,a;if(!this._deleted&&(this.persistenceManager=await jo.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await s0(this,{idToken:e}),s=await vs._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Un(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a==null?void 0:a._redirectEventId,_=await this.tryRedirectSignIn(e);(!c||c===d)&&(_!=null&&_.user)&&(a=_.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await lf(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=h1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Un(this.app))return Promise.reject(Ss(this));const t=e?Nn(e):null;return t&&Re(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Un(this.app)?Promise.reject(Ss(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Un(this.app)?Promise.reject(Ss(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Es(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await N1(this),t=new O1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new nc("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await b1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Es(e)||this._popupRedirectResolver;Re(t,this,"argument-error"),this.redirectPersistenceManager=await jo.create(this,[Es(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Re(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const _=e.addObserver(t,s,a);return()=>{c=!0,_()}}else{const _=e.addObserver(t);return()=>{c=!0,_()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(Un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&l1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Da(i){return Nn(i)}class WE{constructor(e){this.auth=e,this.observer=null,this.addObserver=QR(t=>this.observer=t)}get next(){return Re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function k1(i){Pf=i}function m0(i){return Pf.loadJS(i)}function M1(){return Pf.recaptchaEnterpriseScript}function P1(){return Pf.gapiScript}function V1(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class L1{constructor(){this.enterprise=new U1}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class U1{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const j1="recaptcha-enterprise",g0="NO_RECAPTCHA";class B1{constructor(e){this.type=j1,this.auth=Da(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{g1(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(_=>{if(_.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new m1(_);return l.tenantId==null?l._agentRecaptchaConfig=m:l._tenantRecaptchaConfigs[l.tenantId]=m,c(m.siteKey)}}).catch(_=>{d(_)})})}function a(l,c,d){const _=window.grecaptcha;HE(_)?_.enterprise.ready(()=>{_.enterprise.execute(l,{action:e}).then(m=>{c(m)}).catch(()=>{c(g0)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new L1().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{s(this.auth).then(d=>{if(!t&&HE(window.grecaptcha))a(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let _=M1();_.length!==0&&(_+=d),m0(_).then(()=>{a(d,l,c)}).catch(m=>{c(m)})}}).catch(d=>{c(d)})})}}async function QE(i,e,t,s=!1,a=!1){const l=new B1(i);let c;if(a)c=g0;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const _=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:_,recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const _=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:_,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return s?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function O_(i,e,t,s,a){var l;if(!((l=i._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await QE(i,e,t,t==="getOobCode");return s(i,c)}else return s(i,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await QE(i,e,t,t==="getOobCode");return s(i,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1(i,e){const t=hm(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(ya(l,e??{}))return a;yi(a,"already-initialized")}return t.initialize({options:e})}function H1(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Es);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function F1(i,e,t){const s=Da(i);Re(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=y0(e),{host:c,port:d}=q1(e),_=d===null?"":`:${d}`,m={url:`${l}//${c}${_}/`},E=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Re(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Re(ya(m,s.config.emulator)&&ya(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=m,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,G1()}function y0(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function q1(i){const e=y0(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:YE(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:YE(c)}}}function YE(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function G1(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ys("not implemented")}_getIdTokenResponse(e){return ys("not implemented")}_linkToIdToken(e,t){return ys("not implemented")}_getReauthenticationResolver(e){return ys("not implemented")}}async function K1(i,e){return Mr(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W1(i,e){return sc(i,"POST","/v1/accounts:signInWithPassword",kr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q1(i,e){return sc(i,"POST","/v1/accounts:signInWithEmailLink",kr(i,e))}async function Y1(i,e){return sc(i,"POST","/v1/accounts:signInWithEmailLink",kr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu extends gm{constructor(e,t,s,a=null){super("password",s),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Gu(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Gu(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return O_(e,t,"signInWithPassword",W1);case"emailLink":return Q1(e,{email:this._email,oobCode:this._password});default:yi(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return O_(e,s,"signUpPassword",K1);case"emailLink":return Y1(e,{idToken:t,email:this._email,oobCode:this._password});default:yi(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(i,e){return sc(i,"POST","/v1/accounts:signInWithIdp",kr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1="http://localhost";class Ea extends gm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ea(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):yi("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=t,l=fm(t,["providerId","signInMethod"]);if(!s||!a)return null;const c=new Ea(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Bo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Bo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Bo(e,t)}buildRequest(){const e={requestUri:$1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=tl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X1(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Z1(i){const e=Ru(Iu(i)).link,t=e?Ru(Iu(e)).deep_link_id:null,s=Ru(Iu(i)).deep_link_id;return(s?Ru(Iu(s)).link:null)||s||t||e||i}class ym{constructor(e){var t,s,a,l,c,d;const _=Ru(Iu(e)),m=(t=_.apiKey)!==null&&t!==void 0?t:null,E=(s=_.oobCode)!==null&&s!==void 0?s:null,S=X1((a=_.mode)!==null&&a!==void 0?a:null);Re(m&&E&&S,"argument-error"),this.apiKey=m,this.operation=S,this.code=E,this.continueUrl=(l=_.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=_.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(d=_.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=Z1(e);try{return new ym(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.providerId=nl.PROVIDER_ID}static credential(e,t){return Gu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=ym.parseLink(t);return Re(s,"argument-error"),Gu._fromEmailAndCode(e,s.code,s.tenantId)}}nl.PROVIDER_ID="password";nl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";nl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class rc extends v0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends rc{constructor(){super("facebook.com")}static credential(e){return Ea._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _r.credential(e.oauthAccessToken)}catch{return null}}}_r.FACEBOOK_SIGN_IN_METHOD="facebook.com";_r.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends rc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ea._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return mr.credential(t,s)}catch{return null}}}mr.GOOGLE_SIGN_IN_METHOD="google.com";mr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends rc{constructor(){super("github.com")}static credential(e){return Ea._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.GITHUB_SIGN_IN_METHOD="github.com";gr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends rc{constructor(){super("twitter.com")}static credential(e,t){return Ea._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return yr.credential(t,s)}catch{return null}}}yr.TWITTER_SIGN_IN_METHOD="twitter.com";yr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J1(i,e){return sc(i,"POST","/v1/accounts:signUp",kr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await vs._fromIdTokenResponse(e,s,a),c=$E(s);return new Ta({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=$E(s);return new Ta({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function $E(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf extends Ns{constructor(e,t,s,a){var l;super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,uf.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new uf(e,t,s,a)}}function E0(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?uf._fromErrorAndOperation(i,l,e,s):l})}async function eN(i,e,t=!1){const s=await qu(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Ta._forOperation(i,"link",s)}/**
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
 */async function tN(i,e,t=!1){const{auth:s}=i;if(Un(s.app))return Promise.reject(Ss(s));const a="reauthenticate";try{const l=await qu(i,E0(s,a,e,i),t);Re(l.idToken,s,"internal-error");const c=_m(l.idToken);Re(c,s,"internal-error");const{sub:d}=c;return Re(i.uid===d,s,"user-mismatch"),Ta._forOperation(i,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&yi(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T0(i,e,t=!1){if(Un(i.app))return Promise.reject(Ss(i));const s="signIn",a=await E0(i,s,e),l=await Ta._fromIdTokenResponse(i,s,a);return t||await i._updateCurrentUser(l.user),l}async function nN(i,e){return T0(Da(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S0(i){const e=Da(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function iN(i,e,t){if(Un(i.app))return Promise.reject(Ss(i));const s=Da(i),c=await O_(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",J1).catch(_=>{throw _.code==="auth/password-does-not-meet-requirements"&&S0(i),_}),d=await Ta._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(d.user),d}function sN(i,e,t){return Un(i.app)?Promise.reject(Ss(i)):nN(Nn(i),nl.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&S0(i),s})}function rN(i,e,t,s){return Nn(i).onIdTokenChanged(e,t,s)}function aN(i,e,t){return Nn(i).beforeAuthStateChanged(e,t)}function oN(i,e,t,s){return Nn(i).onAuthStateChanged(e,t,s)}function A0(i){return Nn(i).signOut()}const cf="__sak";/**
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
 */class w0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(cf,"1"),this.storage.removeItem(cf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN=1e3,uN=10;class b0 extends w0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=p0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,_)=>{this.notifyListeners(c,_)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);R1()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,uN):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},lN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}b0.type="LOCAL";const cN=b0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0 extends w0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}C0.type="SESSION";const R0=C0;/**
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
 */function hN(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Vf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new Vf(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const d=Array.from(c).map(async m=>m(t.origin,l)),_=await hN(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:_})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class fN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,_)=>{const m=vm("",20);a.port1.start();const E=setTimeout(()=>{_(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(S){const I=S;if(I.data.eventId===m)switch(I.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(I.data.response);break;default:clearTimeout(E),clearTimeout(l),_(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(){return window}function dN(i){zi().location.href=i}/**
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
 */function I0(){return typeof zi().WorkerGlobalScope<"u"&&typeof zi().importScripts=="function"}async function pN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _N(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function mN(){return I0()?self:null}/**
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
 */const N0="firebaseLocalStorageDb",gN=1,hf="firebaseLocalStorage",D0="fbase_key";class ac{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Lf(i,e){return i.transaction([hf],e?"readwrite":"readonly").objectStore(hf)}function yN(){const i=indexedDB.deleteDatabase(N0);return new ac(i).toPromise()}function x_(){const i=indexedDB.open(N0,gN);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(hf,{keyPath:D0})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(hf)?e(s):(s.close(),await yN(),e(await x_()))})})}async function XE(i,e,t){const s=Lf(i,!0).put({[D0]:e,value:t});return new ac(s).toPromise()}async function vN(i,e){const t=Lf(i,!1).get(e),s=await new ac(t).toPromise();return s===void 0?null:s.value}function ZE(i,e){const t=Lf(i,!0).delete(e);return new ac(t).toPromise()}const EN=800,TN=3;class O0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await x_(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>TN)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return I0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vf._getInstance(mN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await pN(),!this.activeServiceWorker)return;this.sender=new fN(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_N()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await x_();return await XE(e,cf,"1"),await ZE(e,cf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>XE(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>vN(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ZE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Lf(a,!1).getAll();return new ac(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),EN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}O0.type="LOCAL";const SN=O0;new ic(3e4,6e4);/**
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
 */function AN(i,e){return e?Es(e):(Re(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Em extends gm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Bo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Bo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function wN(i){return T0(i.auth,new Em(i),i.bypassAuthState)}function bN(i){const{auth:e,user:t}=i;return Re(t,e,"internal-error"),tN(t,new Em(i),i.bypassAuthState)}async function CN(i){const{auth:e,user:t}=i;return Re(t,e,"internal-error"),eN(t,new Em(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const _={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(_))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wN;case"linkViaPopup":case"linkViaRedirect":return CN;case"reauthViaPopup":case"reauthViaRedirect":return bN;default:yi(this.auth,"internal-error")}}resolve(e){Cs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN=new ic(2e3,1e4);class Po extends x0{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,Po.currentPopupAction&&Po.currentPopupAction.cancel(),Po.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Re(e,this.auth,"internal-error"),e}async onExecution(){Cs(this.filter.length===1,"Popup operations only handle one event");const e=vm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Bi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Po.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RN.get())};e()}}Po.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN="pendingRedirect",Qh=new Map;class NN extends x0{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Qh.get(this.auth._key());if(!e){try{const s=await DN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Qh.set(this.auth._key(),e)}return this.bypassAuthState||Qh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DN(i,e){const t=kN(e),s=xN(i);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function ON(i,e){Qh.set(i._key(),e)}function xN(i){return Es(i._redirectPersistence)}function kN(i){return Wh(IN,i.config.apiKey,i.name)}async function MN(i,e,t=!1){if(Un(i.app))return Promise.reject(Ss(i));const s=Da(i),a=AN(s,e),c=await new NN(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN=10*60*1e3;class VN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LN(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!k0(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Bi(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PN&&this.cachedEventUids.clear(),this.cachedEventUids.has(JE(e))}saveEventToCache(e){this.cachedEventUids.add(JE(e)),this.lastProcessedEventTime=Date.now()}}function JE(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function k0({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LN(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return k0(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UN(i,e={}){return Mr(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BN=/^https?/;async function zN(i){if(i.config.emulator)return;const{authorizedDomains:e}=await UN(i);for(const t of e)try{if(HN(t))return}catch{}yi(i,"unauthorized-domain")}function HN(i){const e=N_(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const c=new URL(i);return c.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!BN.test(t))return!1;if(jN.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const FN=new ic(3e4,6e4);function eT(){const i=zi().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function qN(i){return new Promise((e,t)=>{var s,a,l;function c(){eT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{eT(),t(Bi(i,"network-request-failed"))},timeout:FN.get()})}if(!((a=(s=zi().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=zi().gapi)===null||l===void 0)&&l.load)c();else{const d=V1("iframefcb");return zi()[d]=()=>{gapi.load?c():t(Bi(i,"network-request-failed"))},m0(`${P1()}?onload=${d}`).catch(_=>t(_))}}).catch(e=>{throw Yh=null,e})}let Yh=null;function GN(i){return Yh=Yh||qN(i),Yh}/**
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
 */const KN=new ic(5e3,15e3),WN="__/auth/iframe",QN="emulator/auth/iframe",YN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$N=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XN(i){const e=i.config;Re(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?pm(e,QN):`https://${i.config.authDomain}/${WN}`,s={apiKey:e.apiKey,appName:i.name,v:Na},a=$N.get(i.config.apiHost);a&&(s.eid=a);const l=i._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${tl(s).slice(1)}`}async function ZN(i){const e=await GN(i),t=zi().gapi;return Re(t,i,"internal-error"),e.open({where:document.body,url:XN(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YN,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=Bi(i,"network-request-failed"),d=zi().setTimeout(()=>{l(c)},KN.get());function _(){zi().clearTimeout(d),a(s)}s.ping(_).then(_,()=>{l(c)})}))}/**
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
 */const JN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eD=500,tD=600,nD="_blank",iD="http://localhost";class tT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sD(i,e,t,s=eD,a=tD){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const _=Object.assign(Object.assign({},JN),{width:s.toString(),height:a.toString(),top:l,left:c}),m=yn().toLowerCase();t&&(d=u0(m)?nD:t),o0(m)&&(e=e||iD,_.scrollbars="yes");const E=Object.entries(_).reduce((I,[L,F])=>`${I}${L}=${F},`,"");if(C1(m)&&d!=="_self")return rD(e||"",d),new tT(null);const S=window.open(e||"",d,E);Re(S,i,"popup-blocked");try{S.focus()}catch{}return new tT(S)}function rD(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const aD="__/auth/handler",oD="emulator/auth/handler",lD=encodeURIComponent("fac");async function nT(i,e,t,s,a,l){Re(i.config.authDomain,i,"auth-domain-config-required"),Re(i.config.apiKey,i,"invalid-api-key");const c={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Na,eventId:a};if(e instanceof v0){e.setDefaultLanguage(i.languageCode),c.providerId=e.providerId||"",A_(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,S]of Object.entries({}))c[E]=S}if(e instanceof rc){const E=e.getScopes().filter(S=>S!=="");E.length>0&&(c.scopes=E.join(","))}i.tenantId&&(c.tid=i.tenantId);const d=c;for(const E of Object.keys(d))d[E]===void 0&&delete d[E];const _=await i._getAppCheckToken(),m=_?`#${lD}=${encodeURIComponent(_)}`:"";return`${uD(i)}?${tl(d).slice(1)}${m}`}function uD({config:i}){return i.emulator?pm(i,oD):`https://${i.authDomain}/${aD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_="webStorageSupport";class cD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=R0,this._completeRedirectFn=MN,this._overrideRedirectResult=ON}async _openPopup(e,t,s,a){var l;Cs((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await nT(e,t,s,N_(),a);return sD(e,c,vm())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await nT(e,t,s,N_(),a);return dN(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Cs(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await ZN(e),s=new VN(e);return t.register("authEvent",a=>(Re(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(h_,{type:h_},a=>{var l;const c=(l=a==null?void 0:a[0])===null||l===void 0?void 0:l[h_];c!==void 0&&t(!!c),yi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=zN(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return p0()||l0()||mm()}}const hD=cD;var iT="@firebase/auth",sT="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dD(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pD(i){va(new br("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=s.options;Re(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const _={apiKey:c,authDomain:d,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_0(i)},m=new x1(s,a,l,_);return H1(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),va(new br("auth-internal",e=>{const t=Da(e.getProvider("auth").getImmediate());return(s=>new fD(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ji(iT,sT,dD(i)),ji(iT,sT,"esm2017")}/**
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
 */const _D=5*60,mD=FS("authIdTokenMaxAge")||_D;let rT=null;const gD=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>mD)return;const a=t==null?void 0:t.token;rT!==a&&(rT=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function yD(i=YS()){const e=hm(i,"auth");if(e.isInitialized())return e.getImmediate();const t=z1(i,{popupRedirectResolver:hD,persistence:[SN,cN,R0]}),s=FS("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=gD(l.toString());aN(t,c,()=>c(t.currentUser)),rN(t,d=>c(d))}}const a=zS("auth");return a&&F1(t,`http://${a}`),t}function vD(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}k1({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const l=Bi("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",vD().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pD("Browser");var ED="firebase",TD="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ji(ED,TD,"app");var aT={};const oT="@firebase/database",lT="1.0.13";/**
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
 */let M0="";function SD(i){M0=i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),rn(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Hu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ds(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new AD(e)}}catch{}return new wD},ma=P0("localStorage"),bD=P0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=new Mf("@firebase/database"),CD=function(){let i=1;return function(){return i++}}(),V0=function(i){const e=ZR(i),t=new WR;t.update(e);const s=t.digest();return om.encodeByteArray(s)},oc=function(...i){let e="";for(let t=0;t<i.length;t++){const s=i[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=oc.apply(null,s):typeof s=="object"?e+=rn(s):e+=s,e+=" "}return e};let Mu=null,uT=!0;const RD=function(i,e){he(!0,"Can't turn on custom loggers persistently."),zo.logLevel=je.VERBOSE,Mu=zo.log.bind(zo)},pn=function(...i){if(uT===!0&&(uT=!1,Mu===null&&bD.get("logging_enabled")===!0&&RD()),Mu){const e=oc.apply(null,i);Mu(e)}},lc=function(i){return function(...e){pn(i,...e)}},k_=function(...i){const e="FIREBASE INTERNAL ERROR: "+oc(...i);zo.error(e)},Sa=function(...i){const e=`FIREBASE FATAL ERROR: ${oc(...i)}`;throw zo.error(e),new Error(e)},jn=function(...i){const e="FIREBASE WARNING: "+oc(...i);zo.warn(e)},ID=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&jn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},L0=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},ND=function(i){if(document.readyState==="complete")i();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Go="[MIN_NAME]",Aa="[MAX_NAME]",il=function(i,e){if(i===e)return 0;if(i===Go||e===Aa)return-1;if(e===Go||i===Aa)return 1;{const t=cT(i),s=cT(e);return t!==null?s!==null?t-s===0?i.length-e.length:t-s:-1:s!==null?1:i<e?-1:1}},DD=function(i,e){return i===e?0:i<e?-1:1},gu=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+rn(e))},Tm=function(i){if(typeof i!="object"||i===null)return rn(i);const e=[];for(const s in i)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=rn(e[s]),t+=":",t+=Tm(i[e[s]]);return t+="}",t},U0=function(i,e){const t=i.length;if(t<=e)return[i];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(i.substring(a,t)):s.push(i.substring(a,a+e));return s};function ri(i,e){for(const t in i)i.hasOwnProperty(t)&&e(t,i[t])}const j0=function(i){he(!L0(i),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,d,_;i===0?(l=0,c=0,a=1/i===-1/0?1:0):(a=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(i)/Math.LN2),s),l=d+s,c=Math.round(i*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(i/Math.pow(2,1-s-t))));const m=[];for(_=t;_;_-=1)m.push(c%2?1:0),c=Math.floor(c/2);for(_=e;_;_-=1)m.push(l%2?1:0),l=Math.floor(l/2);m.push(a?1:0),m.reverse();const E=m.join("");let S="";for(_=0;_<64;_+=8){let I=parseInt(E.substr(_,8),2).toString(16);I.length===1&&(I="0"+I),S=S+I}return S.toLowerCase()},OD=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},xD=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},kD=new RegExp("^-?(0*)\\d{1,10}$"),MD=-2147483648,PD=2147483647,cT=function(i){if(kD.test(i)){const e=Number(i);if(e>=MD&&e<=PD)return e}return null},uc=function(i){try{i()}catch(e){setTimeout(()=>{const t=e.stack||"";throw jn("Exception was thrown by user callback.",t),e},Math.floor(0))}},VD=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Pu=function(i,e){const t=setTimeout(i,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class LD{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Un(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){jn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(pn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',jn(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm="5",B0="v",z0="s",H0="r",F0="f",q0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,G0="ls",K0="p",M_="ac",W0="websocket",Q0="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(e,t,s,a,l=!1,c="",d=!1,_=!1,m=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=_,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ma.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ma.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function BD(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function Y0(i,e,t){he(typeof e=="string","typeof type must == string"),he(typeof t=="object","typeof params must == object");let s;if(e===W0)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===Q0)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);BD(i)&&(t.ns=i.namespace);const a=[];return ri(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(){this.counters_={}}incrementCounter(e,t=1){Ds(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return CR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_={},d_={};function Am(i){const e=i.toString();return f_[e]||(f_[e]=new zD),f_[e]}function HD(i,e){const t=i.toString();return d_[t]||(d_[t]=e()),d_[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&uc(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT="start",qD="close",GD="pLPCommand",KD="pRTLPCB",$0="id",X0="pw",Z0="ser",WD="cb",QD="seg",YD="ts",$D="d",XD="dframe",J0=1870,eA=30,ZD=J0-eA,JD=25e3,eO=3e4;class Vo{constructor(e,t,s,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=lc(e),this.stats_=Am(t),this.urlFn=_=>(this.appCheckToken&&(_[M_]=this.appCheckToken),Y0(t,Q0,_))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new FD(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(eO)),ND(()=>{if(this.isClosed_)return;this.scriptTagHolder=new wm((...l)=>{const[c,d,_,m,E]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===hT)this.id=d,this.password=_;else if(c===qD)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[hT]="t",s[Z0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[WD]=this.scriptTagHolder.uniqueCallbackIdentifier),s[B0]=Sm,this.transportSessionId&&(s[z0]=this.transportSessionId),this.lastSessionId&&(s[G0]=this.lastSessionId),this.applicationId&&(s[K0]=this.applicationId),this.appCheckToken&&(s[M_]=this.appCheckToken),typeof location<"u"&&location.hostname&&q0.test(location.hostname)&&(s[H0]=F0);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Vo.forceAllow_=!0}static forceDisallow(){Vo.forceDisallow_=!0}static isAvailable(){return Vo.forceAllow_?!0:!Vo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!OD()&&!xD()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=rn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=jS(t),a=U0(s,ZD);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[XD]="t",s[$0]=e,s[X0]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=rn(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class wm{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=CD(),window[GD+this.uniqueCallbackIdentifier]=e,window[KD+this.uniqueCallbackIdentifier]=t,this.myIFrame=wm.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){pn("frame writing exception"),d.stack&&pn(d.stack),pn(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||pn("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[$0]=this.myID,e[X0]=this.myPW,e[Z0]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+eA+s.length<=J0;){const c=this.pendingSegs.shift();s=s+"&"+QD+a+"="+c.seg+"&"+YD+a+"="+c.ts+"&"+$D+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(JD)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{pn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO=16384,nO=45e3;let ff=null;typeof MozWebSocket<"u"?ff=MozWebSocket:typeof WebSocket<"u"&&(ff=WebSocket);class pi{constructor(e,t,s,a,l,c,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=lc(this.connId),this.stats_=Am(t),this.connURL=pi.connectionURL_(t,c,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[B0]=Sm,typeof location<"u"&&location.hostname&&q0.test(location.hostname)&&(c[H0]=F0),t&&(c[z0]=t),s&&(c[G0]=s),a&&(c[M_]=a),l&&(c[K0]=l),Y0(e,W0,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ma.set("previous_websocket_failure",!0);try{let s;UR(),this.mySock=new ff(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){pi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ff!==null&&!pi.forceDisallow_}static previouslyFailed(){return ma.isInMemoryStorage||ma.get("previous_websocket_failure")===!0}markConnectionHealthy(){ma.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Hu(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(he(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=rn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=U0(t,tO);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(nO))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}pi.responsesRequiredToBeHealthy=2;pi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{static get ALL_TRANSPORTS(){return[Vo,pi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=pi&&pi.isAvailable();let s=t&&!pi.previouslyFailed();if(e.webSocketOnly&&(t||jn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[pi];else{const a=this.transports_=[];for(const l of Ku.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);Ku.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ku.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO=6e4,sO=5e3,rO=10*1024,aO=100*1024,p_="t",fT="d",oO="s",dT="r",lO="e",pT="o",_T="a",mT="n",gT="p",uO="h";class cO{constructor(e,t,s,a,l,c,d,_,m,E){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=_,this.onKill_=m,this.lastSessionId=E,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=lc("c:"+this.id+":"),this.transportManager_=new Ku(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=Pu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>aO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>rO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(p_ in e){const t=e[p_];t===_T?this.upgradeIfSecondaryHealthy_():t===dT?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===pT&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=gu("t",e),s=gu("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gT,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:_T,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:mT,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=gu("t",e),s=gu("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=gu(p_,e);if(fT in e){const s=e[fT];if(t===uO){const a=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===mT){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===oO?this.onConnectionShutdown_(s):t===dT?this.onReset_(s):t===lO?k_("Server Error: "+s):t===pT?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):k_("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Sm!==s&&jn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Pu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(iO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Pu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(sO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gT,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ma.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.allowedEvents_=e,this.listeners_={},he(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){he(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df extends nA{static getInstance(){return new df}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!um()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return he(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT=32,vT=768;class pt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function at(){return new pt("")}function $e(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function Cr(i){return i.pieces_.length-i.pieceNum_}function dt(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new pt(i.pieces_,e)}function iA(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function hO(i){let e="";for(let t=i.pieceNum_;t<i.pieces_.length;t++)i.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[t])));return e||"/"}function sA(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function rA(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let t=i.pieceNum_;t<i.pieces_.length-1;t++)e.push(i.pieces_[t]);return new pt(e,0)}function Xt(i,e){const t=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)t.push(i.pieces_[s]);if(e instanceof pt)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new pt(t,0)}function qe(i){return i.pieceNum_>=i.pieces_.length}function ii(i,e){const t=$e(i),s=$e(e);if(t===null)return e;if(t===s)return ii(dt(i),dt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function aA(i,e){if(Cr(i)!==Cr(e))return!1;for(let t=i.pieceNum_,s=e.pieceNum_;t<=i.pieces_.length;t++,s++)if(i.pieces_[t]!==e.pieces_[s])return!1;return!0}function _i(i,e){let t=i.pieceNum_,s=e.pieceNum_;if(Cr(i)>Cr(e))return!1;for(;t<i.pieces_.length;){if(i.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class fO{constructor(e,t){this.errorPrefix_=t,this.parts_=sA(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=kf(this.parts_[s]);oA(this)}}function dO(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=kf(e),oA(i)}function pO(i){const e=i.parts_.pop();i.byteLength_-=kf(e),i.parts_.length>0&&(i.byteLength_-=1)}function oA(i){if(i.byteLength_>vT)throw new Error(i.errorPrefix_+"has a key path longer than "+vT+" bytes ("+i.byteLength_+").");if(i.parts_.length>yT)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+yT+") or object contains a cycle "+_a(i))}function _a(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm extends nA{static getInstance(){return new bm}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return he(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=1e3,_O=60*5*1e3,ET=30*1e3,mO=1.3,gO=3e4,yO="server_kill",TT=3;class As extends tA{constructor(e,t,s,a,l,c,d,_){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=_,this.id=As.nextPersistentConnectionId_++,this.log_=lc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=yu,this.maxReconnectDelay_=_O,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,_)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");bm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&df.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(rn(l)),he(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new lm,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),he(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),he(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const _=d.d,m=d.s;As.warnOnListenWarnings_(_,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),m!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(m,_))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ds(e,"w")){const s=qo(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();jn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||KR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ET)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=GR(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),he(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+rn(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):k_("Unrecognized action received from server: "+rn(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){he(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=yu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=yu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>gO&&(this.reconnectDelay_=yu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*mO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+As.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const _=function(){d?d.close():(c=!0,s())},m=function(S){he(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(S)};this.realtime_={close:_,sendRequest:m};const E=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[S,I]=await Promise.all([this.authTokenProvider_.getToken(E),this.appCheckTokenProvider_.getToken(E)]);c?pn("getToken() completed but was canceled"):(pn("getToken() completed. Creating connection."),this.authToken_=S&&S.accessToken,this.appCheckToken_=I&&I.token,d=new cO(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,L=>{jn(L+" ("+this.repoInfo_.toString()+")"),this.interrupt(yO)},l))}catch(S){this.log_("Failed to get token: "+S),c||(this.repoInfo_.nodeAdmin&&jn(S),_())}}}interrupt(e){pn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){pn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],A_(this.interruptReasons_)&&(this.reconnectDelay_=yu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>Tm(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new pt(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){pn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=TT&&(this.reconnectDelay_=ET,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){pn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=TT&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+M0.replace(/\./g,"-")]=1,um()?e["framework.cordova"]=1:qS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=df.getInstance().currentlyOnline();return A_(this.interruptReasons_)&&e}}As.nextPersistentConnectionId_=0;As.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Xe(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Xe(Go,e),a=new Xe(Go,t);return this.compare(s,a)!==0}minPost(){return Xe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uh;class lA extends Uf{static get __EMPTY_NODE(){return Uh}static set __EMPTY_NODE(e){Uh=e}compare(e,t){return il(e.name,t.name)}isDefinedOn(e){throw el("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Xe.MIN}maxPost(){return new Xe(Aa,Uh)}makePost(e,t){return he(typeof e=="string","KeyIndex indexValue must always be a string."),new Xe(e,Uh)}toString(){return".key"}}const Ho=new lA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jh=class{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Ln=class Nu{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Nu.RED,this.left=a??Li.EMPTY_NODE,this.right=l??Li.EMPTY_NODE}copy(e,t,s,a,l){return new Nu(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return Li.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Li.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Nu.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Nu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Ln.RED=!0;Ln.BLACK=!1;class vO{copy(e,t,s,a,l){return this}insert(e,t,s){return new Ln(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Li=class $h{constructor(e,t=$h.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new $h(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ln.BLACK,null,null))}remove(e){return new $h(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ln.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new jh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new jh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new jh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new jh(this.root_,null,this.comparator_,!0,e)}};Li.EMPTY_NODE=new vO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EO(i,e){return il(i.name,e.name)}function Cm(i,e){return il(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let P_;function TO(i){P_=i}const uA=function(i){return typeof i=="number"?"number:"+j0(i):"string:"+i},cA=function(i){if(i.isLeafNode()){const e=i.val();he(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ds(e,".sv"),"Priority must be a string or number.")}else he(i===P_||i.isEmpty(),"priority of unexpected type.");he(i===P_||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ST;class Yt{static set __childrenNodeConstructor(e){ST=e}static get __childrenNodeConstructor(){return ST}constructor(e,t=Yt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,he(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),cA(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Yt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Yt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return qe(e)?this:$e(e)===".priority"?this.priorityNode_:Yt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Yt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=$e(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(he(s!==".priority"||Cr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Yt.__childrenNodeConstructor.EMPTY_NODE.updateChild(dt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+uA(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=j0(this.value_):e+=this.value_,this.lazyHash_=V0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Yt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Yt.__childrenNodeConstructor?-1:(he(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=Yt.VALUE_TYPE_ORDER.indexOf(t),l=Yt.VALUE_TYPE_ORDER.indexOf(s);return he(a>=0,"Unknown leaf type: "+t),he(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Yt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hA,fA;function SO(i){hA=i}function AO(i){fA=i}class wO extends Uf{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?il(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Xe.MIN}maxPost(){return new Xe(Aa,new Yt("[PRIORITY-POST]",fA))}makePost(e,t){const s=hA(e);return new Xe(t,new Yt("[PRIORITY-POST]",s))}toString(){return".priority"}}const gn=new wO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bO=Math.log(2);class CO{constructor(e){const t=l=>parseInt(Math.log(l)/bO,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pf=function(i,e,t,s){i.sort(e);const a=function(_,m){const E=m-_;let S,I;if(E===0)return null;if(E===1)return S=i[_],I=t?t(S):S,new Ln(I,S.node,Ln.BLACK,null,null);{const L=parseInt(E/2,10)+_,F=a(_,L),Y=a(L+1,m);return S=i[L],I=t?t(S):S,new Ln(I,S.node,Ln.BLACK,F,Y)}},l=function(_){let m=null,E=null,S=i.length;const I=function(F,Y){const z=S-F,W=S;S-=F;const Q=a(z+1,W),te=i[z],ce=t?t(te):te;L(new Ln(ce,te.node,Y,null,Q))},L=function(F){m?(m.left=F,m=F):(E=F,m=F)};for(let F=0;F<_.count;++F){const Y=_.nextBitIsOne(),z=Math.pow(2,_.count-(F+1));Y?I(z,Ln.BLACK):(I(z,Ln.BLACK),I(z,Ln.RED))}return E},c=new CO(i.length),d=l(c);return new Li(s||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __;const Io={};class Ts{static get Default(){return he(Io&&gn,"ChildrenNode.ts has not been loaded"),__=__||new Ts({".priority":Io},{".priority":gn}),__}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=qo(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Li?t:null}hasIndex(e){return Ds(this.indexSet_,e.toString())}addIndex(e,t){he(e!==Ho,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(Xe.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let d;a?d=pf(s,e.getCompare()):d=Io;const _=e.toString(),m=Object.assign({},this.indexSet_);m[_]=e;const E=Object.assign({},this.indexes_);return E[_]=d,new Ts(E,m)}addToIndexes(e,t){const s=rf(this.indexes_,(a,l)=>{const c=qo(this.indexSet_,l);if(he(c,"Missing index implementation for "+l),a===Io)if(c.isDefinedOn(e.node)){const d=[],_=t.getIterator(Xe.Wrap);let m=_.getNext();for(;m;)m.name!==e.name&&d.push(m),m=_.getNext();return d.push(e),pf(d,c.getCompare())}else return Io;else{const d=t.get(e.name);let _=a;return d&&(_=_.remove(new Xe(e.name,d))),_.insert(e,e.node)}});return new Ts(s,this.indexSet_)}removeFromIndexes(e,t){const s=rf(this.indexes_,a=>{if(a===Io)return a;{const l=t.get(e.name);return l?a.remove(new Xe(e.name,l)):a}});return new Ts(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vu;class nt{static get EMPTY_NODE(){return vu||(vu=new nt(new Li(Cm),null,Ts.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&cA(this.priorityNode_),this.children_.isEmpty()&&he(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||vu}updatePriority(e){return this.children_.isEmpty()?this:new nt(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?vu:t}}getChild(e){const t=$e(e);return t===null?this:this.getImmediateChild(t).getChild(dt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(he(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Xe(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?vu:this.priorityNode_;return new nt(a,c,l)}}updateChild(e,t){const s=$e(e);if(s===null)return t;{he($e(e)!==".priority"||Cr(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(dt(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(gn,(c,d)=>{t[c]=d.val(e),s++,l&&nt.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+uA(this.getPriority().val())+":"),this.forEachChild(gn,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":V0(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new Xe(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Xe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Xe(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,Xe.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,Xe.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===cc?-1:0}withIndex(e){if(e===Ho||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new nt(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ho||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(gn),a=t.getIterator(gn);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Ho?null:this.indexMap_.get(e.toString())}}nt.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class RO extends nt{constructor(){super(new Li(Cm),nt.EMPTY_NODE,Ts.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return nt.EMPTY_NODE}isEmpty(){return!1}}const cc=new RO;Object.defineProperties(Xe,{MIN:{value:new Xe(Go,nt.EMPTY_NODE)},MAX:{value:new Xe(Aa,cc)}});lA.__EMPTY_NODE=nt.EMPTY_NODE;Yt.__childrenNodeConstructor=nt;TO(cc);AO(cc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO=!0;function _n(i,e=null){if(i===null)return nt.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),he(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const t=i;return new Yt(t,_n(e))}if(!(i instanceof Array)&&IO){const t=[];let s=!1;if(ri(i,(c,d)=>{if(c.substring(0,1)!=="."){const _=_n(d);_.isEmpty()||(s=s||!_.getPriority().isEmpty(),t.push(new Xe(c,_)))}}),t.length===0)return nt.EMPTY_NODE;const l=pf(t,EO,c=>c.name,Cm);if(s){const c=pf(t,gn.getCompare());return new nt(l,_n(e),new Ts({".priority":c},{".priority":gn}))}else return new nt(l,_n(e),Ts.Default)}else{let t=nt.EMPTY_NODE;return ri(i,(s,a)=>{if(Ds(i,s)&&s.substring(0,1)!=="."){const l=_n(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(_n(e))}}SO(_n);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO extends Uf{constructor(e){super(),this.indexPath_=e,he(!qe(e)&&$e(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?il(e.name,t.name):l}makePost(e,t){const s=_n(e),a=nt.EMPTY_NODE.updateChild(this.indexPath_,s);return new Xe(t,a)}maxPost(){const e=nt.EMPTY_NODE.updateChild(this.indexPath_,cc);return new Xe(Aa,e)}toString(){return sA(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO extends Uf{compare(e,t){const s=e.node.compareTo(t.node);return s===0?il(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Xe.MIN}maxPost(){return Xe.MAX}makePost(e,t){const s=_n(e);return new Xe(t,s)}toString(){return".value"}}const OO=new DO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xO(i){return{type:"value",snapshotNode:i}}function kO(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function MO(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function AT(i,e,t){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:t}}function PO(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=gn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return he(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return he(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Go}hasEnd(){return this.endSet_}getIndexEndValue(){return he(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return he(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Aa}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return he(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===gn}copy(){const e=new Rm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function wT(i){const e={};if(i.isDefault())return e;let t;if(i.index_===gn?t="$priority":i.index_===OO?t="$value":i.index_===Ho?t="$key":(he(i.index_ instanceof NO,"Unrecognized index type!"),t=i.index_.toString()),e.orderBy=rn(t),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=rn(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+rn(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=rn(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+rn(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function bT(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let t=i.viewFrom_;t===""&&(i.isViewFromLeft()?t="l":t="r"),e.vf=t}return i.index_!==gn&&(e.i=i.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f extends tA{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(he(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=lc("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=_f.getListenId_(e,s),d={};this.listens_[c]=d;const _=wT(e._queryParams);this.restRequest_(l+".json",_,(m,E)=>{let S=E;if(m===404&&(S=null,m=null),m===null&&this.onDataUpdate_(l,S,!1,s),qo(this.listens_,c)===d){let I;m?m===401?I="permission_denied":I="rest_error:"+m:I="ok",a(I,null)}})}unlisten(e,t){const s=_f.getListenId_(e,t);delete this.listens_[s]}get(e){const t=wT(e._queryParams),s=e._path.toString(),a=new lm;return this.restRequest_(s+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+tl(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let _=null;if(d.status>=200&&d.status<300){try{_=Hu(d.responseText)}catch{jn("Failed to parse JSON response for "+c+": "+d.responseText)}s(null,_)}else d.status!==401&&d.status!==404&&jn("Got unsuccessful REST response for "+c+" Status: "+d.status),s(d.status);s=null}},d.open("GET",c,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(){this.rootNode_=nt.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(){return{value:null,children:new Map}}function dA(i,e,t){if(qe(e))i.value=t,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,t);else{const s=$e(e);i.children.has(s)||i.children.set(s,mf());const a=i.children.get(s);e=dt(e),dA(a,e,t)}}function V_(i,e,t){i.value!==null?t(e,i.value):LO(i,(s,a)=>{const l=new pt(e.toString()+"/"+s);V_(a,l,t)})}function LO(i,e){i.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ri(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=10*1e3,jO=30*1e3,BO=5*60*1e3;class zO{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new UO(e);const s=CT+(jO-CT)*Math.random();Pu(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;ri(e,(a,l)=>{l>0&&Ds(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),Pu(this.reportStats_.bind(this),Math.floor(Math.random()*2*BO))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ui;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ui||(Ui={}));function pA(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function _A(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function mA(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Ui.ACK_USER_WRITE,this.source=pA()}operationForChild(e){if(qe(this.path)){if(this.affectedTree.value!=null)return he(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new pt(e));return new gf(at(),t,this.revert)}}else return he($e(this.path)===e,"operationForChild called for unrelated child."),new gf(dt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Ui.OVERWRITE}operationForChild(e){return qe(this.path)?new wa(this.source,at(),this.snap.getImmediateChild(e)):new wa(this.source,dt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Ui.MERGE}operationForChild(e){if(qe(this.path)){const t=this.children.subtree(new pt(e));return t.isEmpty()?null:t.value?new wa(this.source,at(),t.value):new Wu(this.source,at(),t)}else return he($e(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wu(this.source,dt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(qe(e))return this.isFullyInitialized()&&!this.filtered_;const t=$e(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function HO(i,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&i.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(PO(c.childName,c.snapshotNode))}),Eu(i,a,"child_removed",e,s,t),Eu(i,a,"child_added",e,s,t),Eu(i,a,"child_moved",l,s,t),Eu(i,a,"child_changed",e,s,t),Eu(i,a,"value",e,s,t),a}function Eu(i,e,t,s,a,l){const c=s.filter(d=>d.type===t);c.sort((d,_)=>qO(i,d,_)),c.forEach(d=>{const _=FO(i,d,l);a.forEach(m=>{m.respondsTo(d.type)&&e.push(m.createEvent(_,i.query_))})})}function FO(i,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function qO(i,e,t){if(e.childName==null||t.childName==null)throw el("Should only compare child_ events.");const s=new Xe(e.childName,e.snapshotNode),a=new Xe(t.childName,t.snapshotNode);return i.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(i,e){return{eventCache:i,serverCache:e}}function Vu(i,e,t,s){return gA(new Im(e,t,s),i.serverCache)}function yA(i,e,t,s){return gA(i.eventCache,new Im(e,t,s))}function L_(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function ba(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let m_;const GO=()=>(m_||(m_=new Li(DD)),m_);class ft{static fromObject(e){let t=new ft(null);return ri(e,(s,a)=>{t=t.set(new pt(s),a)}),t}constructor(e,t=GO()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:at(),value:this.value};if(qe(e))return null;{const s=$e(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(dt(e),t);return l!=null?{path:Xt(new pt(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(qe(e))return this;{const t=$e(e),s=this.children.get(t);return s!==null?s.subtree(dt(e)):new ft(null)}}set(e,t){if(qe(e))return new ft(t,this.children);{const s=$e(e),l=(this.children.get(s)||new ft(null)).set(dt(e),t),c=this.children.insert(s,l);return new ft(this.value,c)}}remove(e){if(qe(e))return this.children.isEmpty()?new ft(null):new ft(null,this.children);{const t=$e(e),s=this.children.get(t);if(s){const a=s.remove(dt(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new ft(null):new ft(this.value,l)}else return this}}get(e){if(qe(e))return this.value;{const t=$e(e),s=this.children.get(t);return s?s.get(dt(e)):null}}setTree(e,t){if(qe(e))return t;{const s=$e(e),l=(this.children.get(s)||new ft(null)).setTree(dt(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new ft(this.value,c)}}fold(e){return this.fold_(at(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Xt(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,at(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(qe(e))return null;{const l=$e(e),c=this.children.get(l);return c?c.findOnPath_(dt(e),Xt(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,at(),t)}foreachOnPath_(e,t,s){if(qe(e))return this;{this.value&&s(t,this.value);const a=$e(e),l=this.children.get(a);return l?l.foreachOnPath_(dt(e),Xt(t,a),s):new ft(null)}}foreach(e){this.foreach_(at(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Xt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.writeTree_=e}static empty(){return new gi(new ft(null))}}function Lu(i,e,t){if(qe(e))return new gi(new ft(t));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=ii(a,e);return l=l.updateChild(c,t),new gi(i.writeTree_.set(a,l))}else{const a=new ft(t),l=i.writeTree_.setTree(e,a);return new gi(l)}}}function RT(i,e,t){let s=i;return ri(t,(a,l)=>{s=Lu(s,Xt(e,a),l)}),s}function IT(i,e){if(qe(e))return gi.empty();{const t=i.writeTree_.setTree(e,new ft(null));return new gi(t)}}function U_(i,e){return Oa(i,e)!=null}function Oa(i,e){const t=i.writeTree_.findRootMostValueAndPath(e);return t!=null?i.writeTree_.get(t.path).getChild(ii(t.path,e)):null}function NT(i){const e=[],t=i.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(gn,(s,a)=>{e.push(new Xe(s,a))}):i.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new Xe(s,a.value))}),e}function Sr(i,e){if(qe(e))return i;{const t=Oa(i,e);return t!=null?new gi(new ft(t)):new gi(i.writeTree_.subtree(e))}}function j_(i){return i.writeTree_.isEmpty()}function Ko(i,e){return vA(at(),i.writeTree_,e)}function vA(i,e,t){if(e.value!=null)return t.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(he(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=vA(Xt(i,a),l,t)}),!t.getChild(i).isEmpty()&&s!==null&&(t=t.updateChild(Xt(i,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(i,e){return bA(e,i)}function KO(i,e,t,s,a){he(s>i.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),i.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(i.visibleWrites=Lu(i.visibleWrites,e,t)),i.lastWriteId=s}function WO(i,e){for(let t=0;t<i.allWrites.length;t++){const s=i.allWrites[t];if(s.writeId===e)return s}return null}function QO(i,e){const t=i.allWrites.findIndex(d=>d.writeId===e);he(t>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[t];i.allWrites.splice(t,1);let a=s.visible,l=!1,c=i.allWrites.length-1;for(;a&&c>=0;){const d=i.allWrites[c];d.visible&&(c>=t&&YO(d,s.path)?a=!1:_i(s.path,d.path)&&(l=!0)),c--}if(a){if(l)return $O(i),!0;if(s.snap)i.visibleWrites=IT(i.visibleWrites,s.path);else{const d=s.children;ri(d,_=>{i.visibleWrites=IT(i.visibleWrites,Xt(s.path,_))})}return!0}else return!1}function YO(i,e){if(i.snap)return _i(i.path,e);for(const t in i.children)if(i.children.hasOwnProperty(t)&&_i(Xt(i.path,t),e))return!0;return!1}function $O(i){i.visibleWrites=TA(i.allWrites,XO,at()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function XO(i){return i.visible}function TA(i,e,t){let s=gi.empty();for(let a=0;a<i.length;++a){const l=i[a];if(e(l)){const c=l.path;let d;if(l.snap)_i(t,c)?(d=ii(t,c),s=Lu(s,d,l.snap)):_i(c,t)&&(d=ii(c,t),s=Lu(s,at(),l.snap.getChild(d)));else if(l.children){if(_i(t,c))d=ii(t,c),s=RT(s,d,l.children);else if(_i(c,t))if(d=ii(c,t),qe(d))s=RT(s,at(),l.children);else{const _=qo(l.children,$e(d));if(_){const m=_.getChild(dt(d));s=Lu(s,at(),m)}}}else throw el("WriteRecord should have .snap or .children")}}return s}function SA(i,e,t,s,a){if(!s&&!a){const l=Oa(i.visibleWrites,e);if(l!=null)return l;{const c=Sr(i.visibleWrites,e);if(j_(c))return t;if(t==null&&!U_(c,at()))return null;{const d=t||nt.EMPTY_NODE;return Ko(c,d)}}}else{const l=Sr(i.visibleWrites,e);if(!a&&j_(l))return t;if(!a&&t==null&&!U_(l,at()))return null;{const c=function(m){return(m.visible||a)&&(!s||!~s.indexOf(m.writeId))&&(_i(m.path,e)||_i(e,m.path))},d=TA(i.allWrites,c,e),_=t||nt.EMPTY_NODE;return Ko(d,_)}}}function ZO(i,e,t){let s=nt.EMPTY_NODE;const a=Oa(i.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(gn,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=Sr(i.visibleWrites,e);return t.forEachChild(gn,(c,d)=>{const _=Ko(Sr(l,new pt(c)),d);s=s.updateImmediateChild(c,_)}),NT(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=Sr(i.visibleWrites,e);return NT(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function JO(i,e,t,s,a){he(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Xt(e,t);if(U_(i.visibleWrites,l))return null;{const c=Sr(i.visibleWrites,l);return j_(c)?a.getChild(t):Ko(c,a.getChild(t))}}function ex(i,e,t,s){const a=Xt(e,t),l=Oa(i.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=Sr(i.visibleWrites,a);return Ko(c,s.getNode().getImmediateChild(t))}else return null}function tx(i,e){return Oa(i.visibleWrites,e)}function nx(i,e,t,s,a,l,c){let d;const _=Sr(i.visibleWrites,e),m=Oa(_,at());if(m!=null)d=m;else if(t!=null)d=Ko(_,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const E=[],S=c.getCompare(),I=l?d.getReverseIteratorFrom(s,c):d.getIteratorFrom(s,c);let L=I.getNext();for(;L&&E.length<a;)S(L,s)!==0&&E.push(L),L=I.getNext();return E}else return[]}function ix(){return{visibleWrites:gi.empty(),allWrites:[],lastWriteId:-1}}function B_(i,e,t,s){return SA(i.writeTree,i.treePath,e,t,s)}function AA(i,e){return ZO(i.writeTree,i.treePath,e)}function DT(i,e,t,s){return JO(i.writeTree,i.treePath,e,t,s)}function yf(i,e){return tx(i.writeTree,Xt(i.treePath,e))}function sx(i,e,t,s,a,l){return nx(i.writeTree,i.treePath,e,t,s,a,l)}function Nm(i,e,t){return ex(i.writeTree,i.treePath,e,t)}function wA(i,e){return bA(Xt(i.treePath,e),i.writeTree)}function bA(i,e){return{treePath:i,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;he(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),he(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,AT(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,MO(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,kO(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,AT(s,e.snapshotNode,a.oldSnap));else throw el("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const CA=new ax;class Dm{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Im(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Nm(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ba(this.viewCache_),l=sx(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}function ox(i,e){he(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),he(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function lx(i,e,t,s,a){const l=new rx;let c,d;if(t.type===Ui.OVERWRITE){const m=t;m.source.fromUser?c=z_(i,e,m.path,m.snap,s,a,l):(he(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered()&&!qe(m.path),c=vf(i,e,m.path,m.snap,s,a,d,l))}else if(t.type===Ui.MERGE){const m=t;m.source.fromUser?c=cx(i,e,m.path,m.children,s,a,l):(he(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered(),c=H_(i,e,m.path,m.children,s,a,d,l))}else if(t.type===Ui.ACK_USER_WRITE){const m=t;m.revert?c=dx(i,e,m.path,s,a,l):c=hx(i,e,m.path,m.affectedTree,s,a,l)}else if(t.type===Ui.LISTEN_COMPLETE)c=fx(i,e,t.path,s,l);else throw el("Unknown operation type: "+t.type);const _=l.getChanges();return ux(e,c,_),{viewCache:c,changes:_}}function ux(i,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=L_(i);(t.length>0||!i.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(xO(L_(e)))}}function RA(i,e,t,s,a,l){const c=e.eventCache;if(yf(s,t)!=null)return e;{let d,_;if(qe(t))if(he(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=ba(e),E=m instanceof nt?m:nt.EMPTY_NODE,S=AA(s,E);d=i.filter.updateFullNode(e.eventCache.getNode(),S,l)}else{const m=B_(s,ba(e));d=i.filter.updateFullNode(e.eventCache.getNode(),m,l)}else{const m=$e(t);if(m===".priority"){he(Cr(t)===1,"Can't have a priority with additional path components");const E=c.getNode();_=e.serverCache.getNode();const S=DT(s,t,E,_);S!=null?d=i.filter.updatePriority(E,S):d=c.getNode()}else{const E=dt(t);let S;if(c.isCompleteForChild(m)){_=e.serverCache.getNode();const I=DT(s,t,c.getNode(),_);I!=null?S=c.getNode().getImmediateChild(m).updateChild(E,I):S=c.getNode().getImmediateChild(m)}else S=Nm(s,m,e.serverCache);S!=null?d=i.filter.updateChild(c.getNode(),m,S,E,a,l):d=c.getNode()}}return Vu(e,d,c.isFullyInitialized()||qe(t),i.filter.filtersNodes())}}function vf(i,e,t,s,a,l,c,d){const _=e.serverCache;let m;const E=c?i.filter:i.filter.getIndexedFilter();if(qe(t))m=E.updateFullNode(_.getNode(),s,null);else if(E.filtersNodes()&&!_.isFiltered()){const L=_.getNode().updateChild(t,s);m=E.updateFullNode(_.getNode(),L,null)}else{const L=$e(t);if(!_.isCompleteForPath(t)&&Cr(t)>1)return e;const F=dt(t),z=_.getNode().getImmediateChild(L).updateChild(F,s);L===".priority"?m=E.updatePriority(_.getNode(),z):m=E.updateChild(_.getNode(),L,z,F,CA,null)}const S=yA(e,m,_.isFullyInitialized()||qe(t),E.filtersNodes()),I=new Dm(a,S,l);return RA(i,S,t,a,I,d)}function z_(i,e,t,s,a,l,c){const d=e.eventCache;let _,m;const E=new Dm(a,e,l);if(qe(t))m=i.filter.updateFullNode(e.eventCache.getNode(),s,c),_=Vu(e,m,!0,i.filter.filtersNodes());else{const S=$e(t);if(S===".priority")m=i.filter.updatePriority(e.eventCache.getNode(),s),_=Vu(e,m,d.isFullyInitialized(),d.isFiltered());else{const I=dt(t),L=d.getNode().getImmediateChild(S);let F;if(qe(I))F=s;else{const Y=E.getCompleteChild(S);Y!=null?iA(I)===".priority"&&Y.getChild(rA(I)).isEmpty()?F=Y:F=Y.updateChild(I,s):F=nt.EMPTY_NODE}if(L.equals(F))_=e;else{const Y=i.filter.updateChild(d.getNode(),S,F,I,E,c);_=Vu(e,Y,d.isFullyInitialized(),i.filter.filtersNodes())}}}return _}function OT(i,e){return i.eventCache.isCompleteForChild(e)}function cx(i,e,t,s,a,l,c){let d=e;return s.foreach((_,m)=>{const E=Xt(t,_);OT(e,$e(E))&&(d=z_(i,d,E,m,a,l,c))}),s.foreach((_,m)=>{const E=Xt(t,_);OT(e,$e(E))||(d=z_(i,d,E,m,a,l,c))}),d}function xT(i,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function H_(i,e,t,s,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let _=e,m;qe(t)?m=s:m=new ft(null).setTree(t,s);const E=e.serverCache.getNode();return m.children.inorderTraversal((S,I)=>{if(E.hasChild(S)){const L=e.serverCache.getNode().getImmediateChild(S),F=xT(i,L,I);_=vf(i,_,new pt(S),F,a,l,c,d)}}),m.children.inorderTraversal((S,I)=>{const L=!e.serverCache.isCompleteForChild(S)&&I.value===null;if(!E.hasChild(S)&&!L){const F=e.serverCache.getNode().getImmediateChild(S),Y=xT(i,F,I);_=vf(i,_,new pt(S),Y,a,l,c,d)}}),_}function hx(i,e,t,s,a,l,c){if(yf(a,t)!=null)return e;const d=e.serverCache.isFiltered(),_=e.serverCache;if(s.value!=null){if(qe(t)&&_.isFullyInitialized()||_.isCompleteForPath(t))return vf(i,e,t,_.getNode().getChild(t),a,l,d,c);if(qe(t)){let m=new ft(null);return _.getNode().forEachChild(Ho,(E,S)=>{m=m.set(new pt(E),S)}),H_(i,e,t,m,a,l,d,c)}else return e}else{let m=new ft(null);return s.foreach((E,S)=>{const I=Xt(t,E);_.isCompleteForPath(I)&&(m=m.set(E,_.getNode().getChild(I)))}),H_(i,e,t,m,a,l,d,c)}}function fx(i,e,t,s,a){const l=e.serverCache,c=yA(e,l.getNode(),l.isFullyInitialized()||qe(t),l.isFiltered());return RA(i,c,t,s,CA,a)}function dx(i,e,t,s,a,l){let c;if(yf(s,t)!=null)return e;{const d=new Dm(s,e,a),_=e.eventCache.getNode();let m;if(qe(t)||$e(t)===".priority"){let E;if(e.serverCache.isFullyInitialized())E=B_(s,ba(e));else{const S=e.serverCache.getNode();he(S instanceof nt,"serverChildren would be complete if leaf node"),E=AA(s,S)}E=E,m=i.filter.updateFullNode(_,E,l)}else{const E=$e(t);let S=Nm(s,E,e.serverCache);S==null&&e.serverCache.isCompleteForChild(E)&&(S=_.getImmediateChild(E)),S!=null?m=i.filter.updateChild(_,E,S,dt(t),d,l):e.eventCache.getNode().hasChild(E)?m=i.filter.updateChild(_,E,nt.EMPTY_NODE,dt(t),d,l):m=_,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=B_(s,ba(e)),c.isLeafNode()&&(m=i.filter.updateFullNode(m,c,l)))}return c=e.serverCache.isFullyInitialized()||yf(s,at())!=null,Vu(e,m,c,i.filter.filtersNodes())}}function px(i,e){const t=ba(i.viewCache_);return t&&(i.query._queryParams.loadsAllData()||!qe(e)&&!t.getImmediateChild($e(e)).isEmpty())?t.getChild(e):null}function kT(i,e,t,s){e.type===Ui.MERGE&&e.source.queryId!==null&&(he(ba(i.viewCache_),"We should always have a full cache before handling merges"),he(L_(i.viewCache_),"Missing event cache, even though we have a server cache"));const a=i.viewCache_,l=lx(i.processor_,a,e,t,s);return ox(i.processor_,l.viewCache),he(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=l.viewCache,_x(i,l.changes,l.viewCache.eventCache.getNode())}function _x(i,e,t,s){const a=i.eventRegistrations_;return HO(i.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let MT;function mx(i){he(!MT,"__referenceConstructor has already been defined"),MT=i}function Om(i,e,t,s){const a=e.source.queryId;if(a!==null){const l=i.views.get(a);return he(l!=null,"SyncTree gave us an op for an invalid query."),kT(l,e,t,s)}else{let l=[];for(const c of i.views.values())l=l.concat(kT(c,e,t,s));return l}}function xm(i,e){let t=null;for(const s of i.views.values())t=t||px(s,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PT;function gx(i){he(!PT,"__referenceConstructor has already been defined"),PT=i}class VT{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ft(null),this.pendingWriteTree_=ix(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function yx(i,e,t,s,a){return KO(i.pendingWriteTree_,e,t,s,a),a?Bf(i,new wa(pA(),e,t)):[]}function Lo(i,e,t=!1){const s=WO(i.pendingWriteTree_,e);if(QO(i.pendingWriteTree_,e)){let l=new ft(null);return s.snap!=null?l=l.set(at(),!0):ri(s.children,c=>{l=l.set(new pt(c),!0)}),Bf(i,new gf(s.path,l,t))}else return[]}function jf(i,e,t){return Bf(i,new wa(_A(),e,t))}function vx(i,e,t){const s=ft.fromObject(t);return Bf(i,new Wu(_A(),e,s))}function Ex(i,e,t,s){const a=OA(i,s);if(a!=null){const l=xA(a),c=l.path,d=l.queryId,_=ii(c,e),m=new wa(mA(d),_,t);return kA(i,c,m)}else return[]}function Tx(i,e,t,s){const a=OA(i,s);if(a){const l=xA(a),c=l.path,d=l.queryId,_=ii(c,e),m=ft.fromObject(t),E=new Wu(mA(d),_,m);return kA(i,c,E)}else return[]}function IA(i,e,t){const a=i.pendingWriteTree_,l=i.syncPointTree_.findOnPath(e,(c,d)=>{const _=ii(c,e),m=xm(d,_);if(m)return m});return SA(a,e,l,t,!0)}function Bf(i,e){return NA(e,i.syncPointTree_,null,EA(i.pendingWriteTree_,at()))}function NA(i,e,t,s){if(qe(i.path))return DA(i,e,t,s);{const a=e.get(at());t==null&&a!=null&&(t=xm(a,at()));let l=[];const c=$e(i.path),d=i.operationForChild(c),_=e.children.get(c);if(_&&d){const m=t?t.getImmediateChild(c):null,E=wA(s,c);l=l.concat(NA(d,_,m,E))}return a&&(l=l.concat(Om(a,i,s,t))),l}}function DA(i,e,t,s){const a=e.get(at());t==null&&a!=null&&(t=xm(a,at()));let l=[];return e.children.inorderTraversal((c,d)=>{const _=t?t.getImmediateChild(c):null,m=wA(s,c),E=i.operationForChild(c);E&&(l=l.concat(DA(E,d,_,m)))}),a&&(l=l.concat(Om(a,i,s,t))),l}function OA(i,e){return i.tagToQueryMap.get(e)}function xA(i){const e=i.indexOf("$");return he(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new pt(i.substr(0,e))}}function kA(i,e,t){const s=i.syncPointTree_.get(e);he(s,"Missing sync point for query tag that we're tracking");const a=EA(i.pendingWriteTree_,e);return Om(s,t,a,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new km(t)}node(){return this.node_}}class Mm{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Xt(this.path_,e);return new Mm(this.syncTree_,t)}node(){return IA(this.syncTree_,this.path_)}}const Sx=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},LT=function(i,e,t){if(!i||typeof i!="object")return i;if(he(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return Ax(i[".sv"],e,t);if(typeof i[".sv"]=="object")return wx(i[".sv"],e);he(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},Ax=function(i,e,t){switch(i){case"timestamp":return t.timestamp;default:he(!1,"Unexpected server value: "+i)}},wx=function(i,e,t){i.hasOwnProperty("increment")||he(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&he(!1,"Unexpected increment value: "+s);const a=e.node();if(he(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},bx=function(i,e,t,s){return Pm(e,new Mm(t,i),s)},Cx=function(i,e,t){return Pm(i,new km(e),t)};function Pm(i,e,t){const s=i.getPriority().val(),a=LT(s,e.getImmediateChild(".priority"),t);let l;if(i.isLeafNode()){const c=i,d=LT(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new Yt(d,_n(a)):i}else{const c=i;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new Yt(a))),c.forEachChild(gn,(d,_)=>{const m=Pm(_,e.getImmediateChild(d),t);m!==_&&(l=l.updateImmediateChild(d,m))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Lm(i,e){let t=e instanceof pt?e:new pt(e),s=i,a=$e(t);for(;a!==null;){const l=qo(s.node.children,a)||{children:{},childCount:0};s=new Vm(a,s,l),t=dt(t),a=$e(t)}return s}function sl(i){return i.node.value}function MA(i,e){i.node.value=e,F_(i)}function PA(i){return i.node.childCount>0}function Rx(i){return sl(i)===void 0&&!PA(i)}function zf(i,e){ri(i.node.children,(t,s)=>{e(new Vm(t,i,s))})}function VA(i,e,t,s){t&&e(i),zf(i,a=>{VA(a,e,!0)})}function Ix(i,e,t){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function hc(i){return new pt(i.parent===null?i.name:hc(i.parent)+"/"+i.name)}function F_(i){i.parent!==null&&Nx(i.parent,i.name,i)}function Nx(i,e,t){const s=Rx(t),a=Ds(i.node.children,e);s&&a?(delete i.node.children[e],i.node.childCount--,F_(i)):!s&&!a&&(i.node.children[e]=t.node,i.node.childCount++,F_(i))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dx=/[\[\].#$\/\u0000-\u001F\u007F]/,Ox=/[\[\].#$\u0000-\u001F\u007F]/,g_=10*1024*1024,LA=function(i){return typeof i=="string"&&i.length!==0&&!Dx.test(i)},xx=function(i){return typeof i=="string"&&i.length!==0&&!Ox.test(i)},kx=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),xx(i)},UA=function(i,e,t){const s=t instanceof pt?new fO(t,i):t;if(e===void 0)throw new Error(i+"contains undefined "+_a(s));if(typeof e=="function")throw new Error(i+"contains a function "+_a(s)+" with contents = "+e.toString());if(L0(e))throw new Error(i+"contains "+e.toString()+" "+_a(s));if(typeof e=="string"&&e.length>g_/3&&kf(e)>g_)throw new Error(i+"contains a string greater than "+g_+" utf8 bytes "+_a(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(ri(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!LA(c)))throw new Error(i+" contains an invalid key ("+c+") "+_a(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);dO(s,c),UA(i,d,s),pO(s)}),a&&l)throw new Error(i+' contains ".value" child '+_a(s)+" in addition to actual children.")}},Mx=function(i,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!LA(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!kx(t))throw new Error(XR(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Vx(i,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!aA(l,t.path)&&(i.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&i.eventLists_.push(t)}function xa(i,e,t){Vx(i,t),Lx(i,s=>_i(s,e)||_i(e,s))}function Lx(i,e){i.recursionDepth_++;let t=!0;for(let s=0;s<i.eventLists_.length;s++){const a=i.eventLists_[s];if(a){const l=a.path;e(l)?(Ux(i.eventLists_[s]),i.eventLists_[s]=null):t=!1}}t&&(i.eventLists_=[]),i.recursionDepth_--}function Ux(i){for(let e=0;e<i.events.length;e++){const t=i.events[e];if(t!==null){i.events[e]=null;const s=t.getEventRunner();Mu&&pn("event: "+t.toString()),uc(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx="repo_interrupt",Bx=25;class zx{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Px,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=mf(),this.transactionQueueTree_=new Vm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Hx(i,e,t){if(i.stats_=Am(i.repoInfo_),i.forceRestClient_||VD())i.server_=new _f(i.repoInfo_,(s,a,l,c)=>{UT(i,s,a,l,c)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>jT(i,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{rn(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new As(i.repoInfo_,e,(s,a,l,c)=>{UT(i,s,a,l,c)},s=>{jT(i,s)},s=>{qx(i,s)},i.authTokenProvider_,i.appCheckProvider_,t),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=HD(i.repoInfo_,()=>new zO(i.stats_,i.server_)),i.infoData_=new VO,i.infoSyncTree_=new VT({startListening:(s,a,l,c)=>{let d=[];const _=i.infoData_.getNode(s._path);return _.isEmpty()||(d=jf(i.infoSyncTree_,s._path,_),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),Um(i,"connected",!1),i.serverSyncTree_=new VT({startListening:(s,a,l,c)=>(i.server_.listen(s,l,a,(d,_)=>{const m=c(d,_);xa(i.eventQueue_,s._path,m)}),[]),stopListening:(s,a)=>{i.server_.unlisten(s,a)}})}function Fx(i){const t=i.infoData_.getNode(new pt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function jA(i){return Sx({timestamp:Fx(i)})}function UT(i,e,t,s,a){i.dataUpdateCount++;const l=new pt(e);t=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const _=rf(t,m=>_n(m));c=Tx(i.serverSyncTree_,l,_,a)}else{const _=_n(t);c=Ex(i.serverSyncTree_,l,_,a)}else if(s){const _=rf(t,m=>_n(m));c=vx(i.serverSyncTree_,l,_)}else{const _=_n(t);c=jf(i.serverSyncTree_,l,_)}let d=l;c.length>0&&(d=Bm(i,l)),xa(i.eventQueue_,d,c)}function jT(i,e){Um(i,"connected",e),e===!1&&Kx(i)}function qx(i,e){ri(e,(t,s)=>{Um(i,t,s)})}function Um(i,e,t){const s=new pt("/.info/"+e),a=_n(t);i.infoData_.updateSnapshot(s,a);const l=jf(i.infoSyncTree_,s,a);xa(i.eventQueue_,s,l)}function Gx(i){return i.nextWriteId_++}function Kx(i){BA(i,"onDisconnectEvents");const e=jA(i),t=mf();V_(i.onDisconnect_,at(),(a,l)=>{const c=bx(a,l,i.serverSyncTree_,e);dA(t,a,c)});let s=[];V_(t,at(),(a,l)=>{s=s.concat(jf(i.serverSyncTree_,a,l));const c=$x(i,a);Bm(i,c)}),i.onDisconnect_=mf(),xa(i.eventQueue_,at(),s)}function Wx(i){i.persistentConnection_&&i.persistentConnection_.interrupt(jx)}function BA(i,...e){let t="";i.persistentConnection_&&(t=i.persistentConnection_.id+":"),pn(t,...e)}function zA(i,e,t){return IA(i.serverSyncTree_,e,t)||nt.EMPTY_NODE}function jm(i,e=i.transactionQueueTree_){if(e||Hf(i,e),sl(e)){const t=FA(i,e);he(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&Qx(i,hc(e),t)}else PA(e)&&zf(e,t=>{jm(i,t)})}function Qx(i,e,t){const s=t.map(m=>m.currentWriteId),a=zA(i,e,s);let l=a;const c=a.hash();for(let m=0;m<t.length;m++){const E=t[m];he(E.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),E.status=1,E.retryCount++;const S=ii(e,E.path);l=l.updateChild(S,E.currentOutputSnapshotRaw)}const d=l.val(!0),_=e;i.server_.put(_.toString(),d,m=>{BA(i,"transaction put response",{path:_.toString(),status:m});let E=[];if(m==="ok"){const S=[];for(let I=0;I<t.length;I++)t[I].status=2,E=E.concat(Lo(i.serverSyncTree_,t[I].currentWriteId)),t[I].onComplete&&S.push(()=>t[I].onComplete(null,!0,t[I].currentOutputSnapshotResolved)),t[I].unwatcher();Hf(i,Lm(i.transactionQueueTree_,e)),jm(i,i.transactionQueueTree_),xa(i.eventQueue_,e,E);for(let I=0;I<S.length;I++)uc(S[I])}else{if(m==="datastale")for(let S=0;S<t.length;S++)t[S].status===3?t[S].status=4:t[S].status=0;else{jn("transaction at "+_.toString()+" failed: "+m);for(let S=0;S<t.length;S++)t[S].status=4,t[S].abortReason=m}Bm(i,e)}},c)}function Bm(i,e){const t=HA(i,e),s=hc(t),a=FA(i,t);return Yx(i,a,s),s}function Yx(i,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const _=e[d],m=ii(t,_.path);let E=!1,S;if(he(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),_.status===4)E=!0,S=_.abortReason,a=a.concat(Lo(i.serverSyncTree_,_.currentWriteId,!0));else if(_.status===0)if(_.retryCount>=Bx)E=!0,S="maxretry",a=a.concat(Lo(i.serverSyncTree_,_.currentWriteId,!0));else{const I=zA(i,_.path,c);_.currentInputSnapshot=I;const L=e[d].update(I.val());if(L!==void 0){UA("transaction failed: Data returned ",L,_.path);let F=_n(L);typeof L=="object"&&L!=null&&Ds(L,".priority")||(F=F.updatePriority(I.getPriority()));const z=_.currentWriteId,W=jA(i),Q=Cx(F,I,W);_.currentOutputSnapshotRaw=F,_.currentOutputSnapshotResolved=Q,_.currentWriteId=Gx(i),c.splice(c.indexOf(z),1),a=a.concat(yx(i.serverSyncTree_,_.path,Q,_.currentWriteId,_.applyLocally)),a=a.concat(Lo(i.serverSyncTree_,z,!0))}else E=!0,S="nodata",a=a.concat(Lo(i.serverSyncTree_,_.currentWriteId,!0))}xa(i.eventQueue_,t,a),a=[],E&&(e[d].status=2,function(I){setTimeout(I,Math.floor(0))}(e[d].unwatcher),e[d].onComplete&&(S==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(S),!1,null))))}Hf(i,i.transactionQueueTree_);for(let d=0;d<s.length;d++)uc(s[d]);jm(i,i.transactionQueueTree_)}function HA(i,e){let t,s=i.transactionQueueTree_;for(t=$e(e);t!==null&&sl(s)===void 0;)s=Lm(s,t),e=dt(e),t=$e(e);return s}function FA(i,e){const t=[];return qA(i,e,t),t.sort((s,a)=>s.order-a.order),t}function qA(i,e,t){const s=sl(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);zf(e,a=>{qA(i,a,t)})}function Hf(i,e){const t=sl(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,MA(e,t.length>0?t:void 0)}zf(e,s=>{Hf(i,s)})}function $x(i,e){const t=hc(HA(i,e)),s=Lm(i.transactionQueueTree_,e);return Ix(s,a=>{y_(i,a)}),y_(i,s),VA(s,a=>{y_(i,a)}),t}function y_(i,e){const t=sl(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(he(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(he(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(Lo(i.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?MA(e,void 0):t.length=l+1,xa(i.eventQueue_,hc(e),a);for(let c=0;c<s.length;c++)uc(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xx(i){let e="";const t=i.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function Zx(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const t of i.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):jn(`Invalid query segment '${t}' in query '${i}'`)}return e}const BT=function(i,e){const t=Jx(i),s=t.namespace;t.domain==="firebase.com"&&Sa(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Sa("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||ID();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new jD(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new pt(t.pathString)}},Jx=function(i){let e="",t="",s="",a="",l="",c=!0,d="https",_=443;if(typeof i=="string"){let m=i.indexOf("//");m>=0&&(d=i.substring(0,m-1),i=i.substring(m+2));let E=i.indexOf("/");E===-1&&(E=i.length);let S=i.indexOf("?");S===-1&&(S=i.length),e=i.substring(0,Math.min(E,S)),E<S&&(a=Xx(i.substring(E,S)));const I=Zx(i.substring(Math.min(i.length,S)));m=e.indexOf(":"),m>=0?(c=d==="https"||d==="wss",_=parseInt(e.substring(m+1),10)):m=e.length;const L=e.slice(0,m);if(L.toLowerCase()==="localhost")t="localhost";else if(L.split(".").length<=2)t=L;else{const F=e.indexOf(".");s=e.substring(0,F).toLowerCase(),t=e.substring(F+1),l=s}"ns"in I&&(l=I.ns)}return{host:e,port:_,domain:t,subdomain:s,secure:c,scheme:d,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return qe(this._path)?null:iA(this._path)}get ref(){return new rl(this._repo,this._path)}get _queryIdentifier(){const e=bT(this._queryParams),t=Tm(e);return t==="{}"?"default":t}get _queryObject(){return bT(this._queryParams)}isEqual(e){if(e=Nn(e),!(e instanceof zm))return!1;const t=this._repo===e._repo,s=aA(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+hO(this._path)}}class rl extends zm{constructor(e,t){super(e,t,new Rm,!1)}get parent(){const e=rA(this._path);return e===null?null:new rl(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}mx(rl);gx(rl);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek="FIREBASE_DATABASE_EMULATOR_HOST",q_={};let tk=!1;function nk(i,e,t,s,a){let l=s||i.options.databaseURL;l===void 0&&(i.options.projectId||Sa("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),pn("Using default host for project ",i.options.projectId),l=`${i.options.projectId}-default-rtdb.firebaseio.com`);let c=BT(l,a),d=c.repoInfo,_;typeof process<"u"&&aT&&(_=aT[ek]),_?(l=`http://${_}?ns=${d.namespace}`,c=BT(l,a),d=c.repoInfo):c.repoInfo.secure;const m=new UD(i.name,i.options,e);Mx("Invalid Firebase Database URL",c),qe(c.path)||Sa("Database URL must point to the root of a Firebase Database (not including a child path).");const E=sk(d,i,m,new LD(i,t));return new rk(E,i)}function ik(i,e){const t=q_[e];(!t||t[i.key]!==i)&&Sa(`Database ${e}(${i.repoInfo_}) has already been deleted.`),Wx(i),delete t[i.key]}function sk(i,e,t,s){let a=q_[e.name];a||(a={},q_[e.name]=a);let l=a[i.toURLString()];return l&&Sa("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new zx(i,tk,t,s),a[i.toURLString()]=l,l}class rk{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Hx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new rl(this._repo,at())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ik(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Sa("Cannot call "+e+" on a deleted database.")}}/**
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
 */function ak(i){SD(Na),va(new br("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return nk(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),ji(oT,lT,i),ji(oT,lT,"esm2017")}As.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};As.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};ak();var zT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ar,GA;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(O,C){function b(){}b.prototype=C.prototype,O.D=C.prototype,O.prototype=new b,O.prototype.constructor=O,O.C=function(D,x,P){for(var N=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)N[ie-2]=arguments[ie];return C.prototype[x].apply(D,N)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(O,C,b){b||(b=0);var D=Array(16);if(typeof C=="string")for(var x=0;16>x;++x)D[x]=C.charCodeAt(b++)|C.charCodeAt(b++)<<8|C.charCodeAt(b++)<<16|C.charCodeAt(b++)<<24;else for(x=0;16>x;++x)D[x]=C[b++]|C[b++]<<8|C[b++]<<16|C[b++]<<24;C=O.g[0],b=O.g[1],x=O.g[2];var P=O.g[3],N=C+(P^b&(x^P))+D[0]+3614090360&4294967295;C=b+(N<<7&4294967295|N>>>25),N=P+(x^C&(b^x))+D[1]+3905402710&4294967295,P=C+(N<<12&4294967295|N>>>20),N=x+(b^P&(C^b))+D[2]+606105819&4294967295,x=P+(N<<17&4294967295|N>>>15),N=b+(C^x&(P^C))+D[3]+3250441966&4294967295,b=x+(N<<22&4294967295|N>>>10),N=C+(P^b&(x^P))+D[4]+4118548399&4294967295,C=b+(N<<7&4294967295|N>>>25),N=P+(x^C&(b^x))+D[5]+1200080426&4294967295,P=C+(N<<12&4294967295|N>>>20),N=x+(b^P&(C^b))+D[6]+2821735955&4294967295,x=P+(N<<17&4294967295|N>>>15),N=b+(C^x&(P^C))+D[7]+4249261313&4294967295,b=x+(N<<22&4294967295|N>>>10),N=C+(P^b&(x^P))+D[8]+1770035416&4294967295,C=b+(N<<7&4294967295|N>>>25),N=P+(x^C&(b^x))+D[9]+2336552879&4294967295,P=C+(N<<12&4294967295|N>>>20),N=x+(b^P&(C^b))+D[10]+4294925233&4294967295,x=P+(N<<17&4294967295|N>>>15),N=b+(C^x&(P^C))+D[11]+2304563134&4294967295,b=x+(N<<22&4294967295|N>>>10),N=C+(P^b&(x^P))+D[12]+1804603682&4294967295,C=b+(N<<7&4294967295|N>>>25),N=P+(x^C&(b^x))+D[13]+4254626195&4294967295,P=C+(N<<12&4294967295|N>>>20),N=x+(b^P&(C^b))+D[14]+2792965006&4294967295,x=P+(N<<17&4294967295|N>>>15),N=b+(C^x&(P^C))+D[15]+1236535329&4294967295,b=x+(N<<22&4294967295|N>>>10),N=C+(x^P&(b^x))+D[1]+4129170786&4294967295,C=b+(N<<5&4294967295|N>>>27),N=P+(b^x&(C^b))+D[6]+3225465664&4294967295,P=C+(N<<9&4294967295|N>>>23),N=x+(C^b&(P^C))+D[11]+643717713&4294967295,x=P+(N<<14&4294967295|N>>>18),N=b+(P^C&(x^P))+D[0]+3921069994&4294967295,b=x+(N<<20&4294967295|N>>>12),N=C+(x^P&(b^x))+D[5]+3593408605&4294967295,C=b+(N<<5&4294967295|N>>>27),N=P+(b^x&(C^b))+D[10]+38016083&4294967295,P=C+(N<<9&4294967295|N>>>23),N=x+(C^b&(P^C))+D[15]+3634488961&4294967295,x=P+(N<<14&4294967295|N>>>18),N=b+(P^C&(x^P))+D[4]+3889429448&4294967295,b=x+(N<<20&4294967295|N>>>12),N=C+(x^P&(b^x))+D[9]+568446438&4294967295,C=b+(N<<5&4294967295|N>>>27),N=P+(b^x&(C^b))+D[14]+3275163606&4294967295,P=C+(N<<9&4294967295|N>>>23),N=x+(C^b&(P^C))+D[3]+4107603335&4294967295,x=P+(N<<14&4294967295|N>>>18),N=b+(P^C&(x^P))+D[8]+1163531501&4294967295,b=x+(N<<20&4294967295|N>>>12),N=C+(x^P&(b^x))+D[13]+2850285829&4294967295,C=b+(N<<5&4294967295|N>>>27),N=P+(b^x&(C^b))+D[2]+4243563512&4294967295,P=C+(N<<9&4294967295|N>>>23),N=x+(C^b&(P^C))+D[7]+1735328473&4294967295,x=P+(N<<14&4294967295|N>>>18),N=b+(P^C&(x^P))+D[12]+2368359562&4294967295,b=x+(N<<20&4294967295|N>>>12),N=C+(b^x^P)+D[5]+4294588738&4294967295,C=b+(N<<4&4294967295|N>>>28),N=P+(C^b^x)+D[8]+2272392833&4294967295,P=C+(N<<11&4294967295|N>>>21),N=x+(P^C^b)+D[11]+1839030562&4294967295,x=P+(N<<16&4294967295|N>>>16),N=b+(x^P^C)+D[14]+4259657740&4294967295,b=x+(N<<23&4294967295|N>>>9),N=C+(b^x^P)+D[1]+2763975236&4294967295,C=b+(N<<4&4294967295|N>>>28),N=P+(C^b^x)+D[4]+1272893353&4294967295,P=C+(N<<11&4294967295|N>>>21),N=x+(P^C^b)+D[7]+4139469664&4294967295,x=P+(N<<16&4294967295|N>>>16),N=b+(x^P^C)+D[10]+3200236656&4294967295,b=x+(N<<23&4294967295|N>>>9),N=C+(b^x^P)+D[13]+681279174&4294967295,C=b+(N<<4&4294967295|N>>>28),N=P+(C^b^x)+D[0]+3936430074&4294967295,P=C+(N<<11&4294967295|N>>>21),N=x+(P^C^b)+D[3]+3572445317&4294967295,x=P+(N<<16&4294967295|N>>>16),N=b+(x^P^C)+D[6]+76029189&4294967295,b=x+(N<<23&4294967295|N>>>9),N=C+(b^x^P)+D[9]+3654602809&4294967295,C=b+(N<<4&4294967295|N>>>28),N=P+(C^b^x)+D[12]+3873151461&4294967295,P=C+(N<<11&4294967295|N>>>21),N=x+(P^C^b)+D[15]+530742520&4294967295,x=P+(N<<16&4294967295|N>>>16),N=b+(x^P^C)+D[2]+3299628645&4294967295,b=x+(N<<23&4294967295|N>>>9),N=C+(x^(b|~P))+D[0]+4096336452&4294967295,C=b+(N<<6&4294967295|N>>>26),N=P+(b^(C|~x))+D[7]+1126891415&4294967295,P=C+(N<<10&4294967295|N>>>22),N=x+(C^(P|~b))+D[14]+2878612391&4294967295,x=P+(N<<15&4294967295|N>>>17),N=b+(P^(x|~C))+D[5]+4237533241&4294967295,b=x+(N<<21&4294967295|N>>>11),N=C+(x^(b|~P))+D[12]+1700485571&4294967295,C=b+(N<<6&4294967295|N>>>26),N=P+(b^(C|~x))+D[3]+2399980690&4294967295,P=C+(N<<10&4294967295|N>>>22),N=x+(C^(P|~b))+D[10]+4293915773&4294967295,x=P+(N<<15&4294967295|N>>>17),N=b+(P^(x|~C))+D[1]+2240044497&4294967295,b=x+(N<<21&4294967295|N>>>11),N=C+(x^(b|~P))+D[8]+1873313359&4294967295,C=b+(N<<6&4294967295|N>>>26),N=P+(b^(C|~x))+D[15]+4264355552&4294967295,P=C+(N<<10&4294967295|N>>>22),N=x+(C^(P|~b))+D[6]+2734768916&4294967295,x=P+(N<<15&4294967295|N>>>17),N=b+(P^(x|~C))+D[13]+1309151649&4294967295,b=x+(N<<21&4294967295|N>>>11),N=C+(x^(b|~P))+D[4]+4149444226&4294967295,C=b+(N<<6&4294967295|N>>>26),N=P+(b^(C|~x))+D[11]+3174756917&4294967295,P=C+(N<<10&4294967295|N>>>22),N=x+(C^(P|~b))+D[2]+718787259&4294967295,x=P+(N<<15&4294967295|N>>>17),N=b+(P^(x|~C))+D[9]+3951481745&4294967295,O.g[0]=O.g[0]+C&4294967295,O.g[1]=O.g[1]+(x+(N<<21&4294967295|N>>>11))&4294967295,O.g[2]=O.g[2]+x&4294967295,O.g[3]=O.g[3]+P&4294967295}s.prototype.u=function(O,C){C===void 0&&(C=O.length);for(var b=C-this.blockSize,D=this.B,x=this.h,P=0;P<C;){if(x==0)for(;P<=b;)a(this,O,P),P+=this.blockSize;if(typeof O=="string"){for(;P<C;)if(D[x++]=O.charCodeAt(P++),x==this.blockSize){a(this,D),x=0;break}}else for(;P<C;)if(D[x++]=O[P++],x==this.blockSize){a(this,D),x=0;break}}this.h=x,this.o+=C},s.prototype.v=function(){var O=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);O[0]=128;for(var C=1;C<O.length-8;++C)O[C]=0;var b=8*this.o;for(C=O.length-8;C<O.length;++C)O[C]=b&255,b/=256;for(this.u(O),O=Array(16),C=b=0;4>C;++C)for(var D=0;32>D;D+=8)O[b++]=this.g[C]>>>D&255;return O};function l(O,C){var b=d;return Object.prototype.hasOwnProperty.call(b,O)?b[O]:b[O]=C(O)}function c(O,C){this.h=C;for(var b=[],D=!0,x=O.length-1;0<=x;x--){var P=O[x]|0;D&&P==C||(b[x]=P,D=!1)}this.g=b}var d={};function _(O){return-128<=O&&128>O?l(O,function(C){return new c([C|0],0>C?-1:0)}):new c([O|0],0>O?-1:0)}function m(O){if(isNaN(O)||!isFinite(O))return S;if(0>O)return z(m(-O));for(var C=[],b=1,D=0;O>=b;D++)C[D]=O/b|0,b*=4294967296;return new c(C,0)}function E(O,C){if(O.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(O.charAt(0)=="-")return z(E(O.substring(1),C));if(0<=O.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=m(Math.pow(C,8)),D=S,x=0;x<O.length;x+=8){var P=Math.min(8,O.length-x),N=parseInt(O.substring(x,x+P),C);8>P?(P=m(Math.pow(C,P)),D=D.j(P).add(m(N))):(D=D.j(b),D=D.add(m(N)))}return D}var S=_(0),I=_(1),L=_(16777216);i=c.prototype,i.m=function(){if(Y(this))return-z(this).m();for(var O=0,C=1,b=0;b<this.g.length;b++){var D=this.i(b);O+=(0<=D?D:4294967296+D)*C,C*=4294967296}return O},i.toString=function(O){if(O=O||10,2>O||36<O)throw Error("radix out of range: "+O);if(F(this))return"0";if(Y(this))return"-"+z(this).toString(O);for(var C=m(Math.pow(O,6)),b=this,D="";;){var x=ce(b,C).g;b=W(b,x.j(C));var P=((0<b.g.length?b.g[0]:b.h)>>>0).toString(O);if(b=x,F(b))return P+D;for(;6>P.length;)P="0"+P;D=P+D}},i.i=function(O){return 0>O?0:O<this.g.length?this.g[O]:this.h};function F(O){if(O.h!=0)return!1;for(var C=0;C<O.g.length;C++)if(O.g[C]!=0)return!1;return!0}function Y(O){return O.h==-1}i.l=function(O){return O=W(this,O),Y(O)?-1:F(O)?0:1};function z(O){for(var C=O.g.length,b=[],D=0;D<C;D++)b[D]=~O.g[D];return new c(b,~O.h).add(I)}i.abs=function(){return Y(this)?z(this):this},i.add=function(O){for(var C=Math.max(this.g.length,O.g.length),b=[],D=0,x=0;x<=C;x++){var P=D+(this.i(x)&65535)+(O.i(x)&65535),N=(P>>>16)+(this.i(x)>>>16)+(O.i(x)>>>16);D=N>>>16,P&=65535,N&=65535,b[x]=N<<16|P}return new c(b,b[b.length-1]&-2147483648?-1:0)};function W(O,C){return O.add(z(C))}i.j=function(O){if(F(this)||F(O))return S;if(Y(this))return Y(O)?z(this).j(z(O)):z(z(this).j(O));if(Y(O))return z(this.j(z(O)));if(0>this.l(L)&&0>O.l(L))return m(this.m()*O.m());for(var C=this.g.length+O.g.length,b=[],D=0;D<2*C;D++)b[D]=0;for(D=0;D<this.g.length;D++)for(var x=0;x<O.g.length;x++){var P=this.i(D)>>>16,N=this.i(D)&65535,ie=O.i(x)>>>16,Ie=O.i(x)&65535;b[2*D+2*x]+=N*Ie,Q(b,2*D+2*x),b[2*D+2*x+1]+=P*Ie,Q(b,2*D+2*x+1),b[2*D+2*x+1]+=N*ie,Q(b,2*D+2*x+1),b[2*D+2*x+2]+=P*ie,Q(b,2*D+2*x+2)}for(D=0;D<C;D++)b[D]=b[2*D+1]<<16|b[2*D];for(D=C;D<2*C;D++)b[D]=0;return new c(b,0)};function Q(O,C){for(;(O[C]&65535)!=O[C];)O[C+1]+=O[C]>>>16,O[C]&=65535,C++}function te(O,C){this.g=O,this.h=C}function ce(O,C){if(F(C))throw Error("division by zero");if(F(O))return new te(S,S);if(Y(O))return C=ce(z(O),C),new te(z(C.g),z(C.h));if(Y(C))return C=ce(O,z(C)),new te(z(C.g),C.h);if(30<O.g.length){if(Y(O)||Y(C))throw Error("slowDivide_ only works with positive integers.");for(var b=I,D=C;0>=D.l(O);)b=me(b),D=me(D);var x=Te(b,1),P=Te(D,1);for(D=Te(D,2),b=Te(b,2);!F(D);){var N=P.add(D);0>=N.l(O)&&(x=x.add(b),P=N),D=Te(D,1),b=Te(b,1)}return C=W(O,x.j(C)),new te(x,C)}for(x=S;0<=O.l(C);){for(b=Math.max(1,Math.floor(O.m()/C.m())),D=Math.ceil(Math.log(b)/Math.LN2),D=48>=D?1:Math.pow(2,D-48),P=m(b),N=P.j(C);Y(N)||0<N.l(O);)b-=D,P=m(b),N=P.j(C);F(P)&&(P=I),x=x.add(P),O=W(O,N)}return new te(x,O)}i.A=function(O){return ce(this,O).h},i.and=function(O){for(var C=Math.max(this.g.length,O.g.length),b=[],D=0;D<C;D++)b[D]=this.i(D)&O.i(D);return new c(b,this.h&O.h)},i.or=function(O){for(var C=Math.max(this.g.length,O.g.length),b=[],D=0;D<C;D++)b[D]=this.i(D)|O.i(D);return new c(b,this.h|O.h)},i.xor=function(O){for(var C=Math.max(this.g.length,O.g.length),b=[],D=0;D<C;D++)b[D]=this.i(D)^O.i(D);return new c(b,this.h^O.h)};function me(O){for(var C=O.g.length+1,b=[],D=0;D<C;D++)b[D]=O.i(D)<<1|O.i(D-1)>>>31;return new c(b,O.h)}function Te(O,C){var b=C>>5;C%=32;for(var D=O.g.length-b,x=[],P=0;P<D;P++)x[P]=0<C?O.i(P+b)>>>C|O.i(P+b+1)<<32-C:O.i(P+b);return new c(x,O.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,GA=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=m,c.fromString=E,Ar=c}).apply(typeof zT<"u"?zT:typeof self<"u"?self:typeof window<"u"?window:{});var Bh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var KA,Du,WA,Xh,G_,QA,YA,$A;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,g,y){return h==Array.prototype||h==Object.prototype||(h[g]=y.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bh=="object"&&Bh];for(var g=0;g<h.length;++g){var y=h[g];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function a(h,g){if(g)e:{var y=s;h=h.split(".");for(var w=0;w<h.length-1;w++){var j=h[w];if(!(j in y))break e;y=y[j]}h=h[h.length-1],w=y[h],g=g(w),g!=w&&g!=null&&e(y,h,{configurable:!0,writable:!0,value:g})}}function l(h,g){h instanceof String&&(h+="");var y=0,w=!1,j={next:function(){if(!w&&y<h.length){var q=y++;return{value:g(q,h[q]),done:!1}}return w=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}a("Array.prototype.values",function(h){return h||function(){return l(this,function(g,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function _(h){var g=typeof h;return g=g!="object"?g:h?Array.isArray(h)?"array":g:"null",g=="array"||g=="object"&&typeof h.length=="number"}function m(h){var g=typeof h;return g=="object"&&h!=null||g=="function"}function E(h,g,y){return h.call.apply(h.bind,arguments)}function S(h,g,y){if(!h)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,w),h.apply(g,j)}}return function(){return h.apply(g,arguments)}}function I(h,g,y){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:S,I.apply(null,arguments)}function L(h,g){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),h.apply(this,w)}}function F(h,g){function y(){}y.prototype=g.prototype,h.aa=g.prototype,h.prototype=new y,h.prototype.constructor=h,h.Qb=function(w,j,q){for(var oe=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)oe[Ke-2]=arguments[Ke];return g.prototype[j].apply(w,oe)}}function Y(h){const g=h.length;if(0<g){const y=Array(g);for(let w=0;w<g;w++)y[w]=h[w];return y}return[]}function z(h,g){for(let y=1;y<arguments.length;y++){const w=arguments[y];if(_(w)){const j=h.length||0,q=w.length||0;h.length=j+q;for(let oe=0;oe<q;oe++)h[j+oe]=w[oe]}else h.push(w)}}class W{constructor(g,y){this.i=g,this.j=y,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function Q(h){return/^[\s\xa0]*$/.test(h)}function te(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function ce(h){return ce[" "](h),h}ce[" "]=function(){};var me=te().indexOf("Gecko")!=-1&&!(te().toLowerCase().indexOf("webkit")!=-1&&te().indexOf("Edge")==-1)&&!(te().indexOf("Trident")!=-1||te().indexOf("MSIE")!=-1)&&te().indexOf("Edge")==-1;function Te(h,g,y){for(const w in h)g.call(y,h[w],w,h)}function O(h,g){for(const y in h)g.call(void 0,h[y],y,h)}function C(h){const g={};for(const y in h)g[y]=h[y];return g}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(h,g){let y,w;for(let j=1;j<arguments.length;j++){w=arguments[j];for(y in w)h[y]=w[y];for(let q=0;q<b.length;q++)y=b[q],Object.prototype.hasOwnProperty.call(w,y)&&(h[y]=w[y])}}function x(h){var g=1;h=h.split(":");const y=[];for(;0<g&&h.length;)y.push(h.shift()),g--;return h.length&&y.push(h.join(":")),y}function P(h){d.setTimeout(()=>{throw h},0)}function N(){var h=Se;let g=null;return h.g&&(g=h.g,h.g=h.g.next,h.g||(h.h=null),g.next=null),g}class ie{constructor(){this.h=this.g=null}add(g,y){const w=Ie.get();w.set(g,y),this.h?this.h.next=w:this.g=w,this.h=w}}var Ie=new W(()=>new re,h=>h.reset());class re{constructor(){this.next=this.g=this.h=null}set(g,y){this.h=g,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let fe,de=!1,Se=new ie,k=()=>{const h=d.Promise.resolve(void 0);fe=()=>{h.then(ee)}};var ee=()=>{for(var h;h=N();){try{h.h.call(h.g)}catch(y){P(y)}var g=Ie;g.j(h),100>g.h&&(g.h++,h.next=g.g,g.g=h)}de=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(h,g){this.type=h,this.g=this.target=g,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var ue=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,g=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const y=()=>{};d.addEventListener("test",y,g),d.removeEventListener("test",y,g)}catch{}return h}();function ye(h,g){if(se.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var y=this.type=h.type,w=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=g,g=h.relatedTarget){if(me){e:{try{ce(g.nodeName);var j=!0;break e}catch{}j=!1}j||(g=null)}}else y=="mouseover"?g=h.fromElement:y=="mouseout"&&(g=h.toElement);this.relatedTarget=g,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Ae[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&ye.aa.h.call(this)}}F(ye,se);var Ae={2:"touch",3:"pen",4:"mouse"};ye.prototype.h=function(){ye.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var ht="closure_listenable_"+(1e6*Math.random()|0),Ge=0;function lt(h,g,y,w,j){this.listener=h,this.proxy=null,this.src=g,this.type=y,this.capture=!!w,this.ha=j,this.key=++Ge,this.da=this.fa=!1}function $(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Me(h){this.src=h,this.g={},this.h=0}Me.prototype.add=function(h,g,y,w,j){var q=h.toString();h=this.g[q],h||(h=this.g[q]=[],this.h++);var oe=zt(h,g,w,j);return-1<oe?(g=h[oe],y||(g.fa=!1)):(g=new lt(g,this.src,q,!!w,j),g.fa=y,h.push(g)),g};function Bt(h,g){var y=g.type;if(y in h.g){var w=h.g[y],j=Array.prototype.indexOf.call(w,g,void 0),q;(q=0<=j)&&Array.prototype.splice.call(w,j,1),q&&($(g),h.g[y].length==0&&(delete h.g[y],h.h--))}}function zt(h,g,y,w){for(var j=0;j<h.length;++j){var q=h[j];if(!q.da&&q.listener==g&&q.capture==!!y&&q.ha==w)return j}return-1}var vi="closure_lm_"+(1e6*Math.random()|0),ai={};function oi(h,g,y,w,j){if(Array.isArray(g)){for(var q=0;q<g.length;q++)oi(h,g[q],y,w,j);return null}return y=mc(y),h&&h[ht]?h.K(g,y,m(w)?!!w.capture:!1,j):cl(h,g,y,!1,w,j)}function cl(h,g,y,w,j,q){if(!g)throw Error("Invalid event type");var oe=m(j)?!!j.capture:!!j,Ke=hl(h);if(Ke||(h[vi]=Ke=new Me(h)),y=Ke.add(g,y,w,oe,q),y.proxy)return y;if(w=La(),y.proxy=w,w.src=h,w.listener=y,h.addEventListener)ue||(j=oe),j===void 0&&(j=!1),h.addEventListener(g.toString(),w,j);else if(h.attachEvent)h.attachEvent(ja(g.toString()),w);else if(h.addListener&&h.removeListener)h.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function La(){function h(y){return g.call(h.src,h.listener,y)}const g=td;return h}function Ua(h,g,y,w,j){if(Array.isArray(g))for(var q=0;q<g.length;q++)Ua(h,g[q],y,w,j);else w=m(w)?!!w.capture:!!w,y=mc(y),h&&h[ht]?(h=h.i,g=String(g).toString(),g in h.g&&(q=h.g[g],y=zt(q,y,w,j),-1<y&&($(q[y]),Array.prototype.splice.call(q,y,1),q.length==0&&(delete h.g[g],h.h--)))):h&&(h=hl(h))&&(g=h.g[g.toString()],h=-1,g&&(h=zt(g,y,w,j)),(y=-1<h?g[h]:null)&&Pr(y))}function Pr(h){if(typeof h!="number"&&h&&!h.da){var g=h.src;if(g&&g[ht])Bt(g.i,h);else{var y=h.type,w=h.proxy;g.removeEventListener?g.removeEventListener(y,w,h.capture):g.detachEvent?g.detachEvent(ja(y),w):g.addListener&&g.removeListener&&g.removeListener(w),(y=hl(g))?(Bt(y,h),y.h==0&&(y.src=null,g[vi]=null)):$(h)}}}function ja(h){return h in ai?ai[h]:ai[h]="on"+h}function td(h,g){if(h.da)h=!0;else{g=new ye(g,this);var y=h.listener,w=h.ha||h.src;h.fa&&Pr(h),h=y.call(w,g)}return h}function hl(h){return h=h[vi],h instanceof Me?h:null}var wn="__closure_events_fn_"+(1e9*Math.random()>>>0);function mc(h){return typeof h=="function"?h:(h[wn]||(h[wn]=function(g){return h.handleEvent(g)}),h[wn])}function Ot(){ae.call(this),this.i=new Me(this),this.M=this,this.F=null}F(Ot,ae),Ot.prototype[ht]=!0,Ot.prototype.removeEventListener=function(h,g,y,w){Ua(this,h,g,y,w)};function Ht(h,g){var y,w=h.F;if(w)for(y=[];w;w=w.F)y.push(w);if(h=h.M,w=g.type||g,typeof g=="string")g=new se(g,h);else if(g instanceof se)g.target=g.target||h;else{var j=g;g=new se(w,h),D(g,j)}if(j=!0,y)for(var q=y.length-1;0<=q;q--){var oe=g.g=y[q];j=Ki(oe,w,!0,g)&&j}if(oe=g.g=h,j=Ki(oe,w,!0,g)&&j,j=Ki(oe,w,!1,g)&&j,y)for(q=0;q<y.length;q++)oe=g.g=y[q],j=Ki(oe,w,!1,g)&&j}Ot.prototype.N=function(){if(Ot.aa.N.call(this),this.i){var h=this.i,g;for(g in h.g){for(var y=h.g[g],w=0;w<y.length;w++)$(y[w]);delete h.g[g],h.h--}}this.F=null},Ot.prototype.K=function(h,g,y,w){return this.i.add(String(h),g,!1,y,w)},Ot.prototype.L=function(h,g,y,w){return this.i.add(String(h),g,!0,y,w)};function Ki(h,g,y,w){if(g=h.i.g[String(g)],!g)return!0;g=g.concat();for(var j=!0,q=0;q<g.length;++q){var oe=g[q];if(oe&&!oe.da&&oe.capture==y){var Ke=oe.listener,kt=oe.ha||oe.src;oe.fa&&Bt(h.i,oe),j=Ke.call(kt,w)!==!1&&j}}return j&&!w.defaultPrevented}function gc(h,g,y){if(typeof h=="function")y&&(h=I(h,y));else if(h&&typeof h.handleEvent=="function")h=I(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:d.setTimeout(h,g||0)}function fl(h){h.g=gc(()=>{h.g=null,h.i&&(h.i=!1,fl(h))},h.l);const g=h.h;h.h=null,h.m.apply(null,g)}class nd extends ae{constructor(g,y){super(),this.m=g,this.l=y,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:fl(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vr(h){ae.call(this),this.h=h,this.g={}}F(Vr,ae);var Os=[];function ln(h){Te(h.g,function(g,y){this.g.hasOwnProperty(y)&&Pr(g)},h),h.g={}}Vr.prototype.N=function(){Vr.aa.N.call(this),ln(this)},Vr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dl=d.JSON.stringify,Ei=d.JSON.parse,vn=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function pl(){}pl.prototype.h=null;function yc(h){return h.h||(h.h=h.i())}function vc(){}var Ti={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xs(){se.call(this,"d")}F(xs,se);function li(){se.call(this,"c")}F(li,se);var Bn={},ks=null;function Ba(){return ks=ks||new Ot}Bn.La="serverreachability";function _l(h){se.call(this,Bn.La,h)}F(_l,se);function Ms(h){const g=Ba();Ht(g,new _l(g))}Bn.STAT_EVENT="statevent";function za(h,g){se.call(this,Bn.STAT_EVENT,h),this.stat=g}F(za,se);function wt(h){const g=Ba();Ht(g,new za(g,h))}Bn.Ma="timingevent";function Ec(h,g){se.call(this,Bn.Ma,h),this.size=g}F(Ec,se);function Ps(h,g){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},g)}function Vs(){this.g=!0}Vs.prototype.xa=function(){this.g=!1};function Tc(h,g,y,w,j,q){h.info(function(){if(h.g)if(q)for(var oe="",Ke=q.split("&"),kt=0;kt<Ke.length;kt++){var We=Ke[kt].split("=");if(1<We.length){var Gt=We[0];We=We[1];var Mt=Gt.split("_");oe=2<=Mt.length&&Mt[1]=="type"?oe+(Gt+"="+We+"&"):oe+(Gt+"=redacted&")}}else oe=null;else oe=q;return"XMLHTTP REQ ("+w+") [attempt "+j+"]: "+g+`
`+y+`
`+oe})}function Sc(h,g,y,w,j,q,oe){h.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+j+"]: "+g+`
`+y+`
`+q+" "+oe})}function Ls(h,g,y,w){h.info(function(){return"XMLHTTP TEXT ("+g+"): "+Ft(h,y)+(w?" "+w:"")})}function Si(h,g){h.info(function(){return"TIMEOUT: "+g})}Vs.prototype.info=function(){};function Ft(h,g){if(!h.g)return g;if(!g)return null;try{var y=JSON.parse(g);if(y){for(h=0;h<y.length;h++)if(Array.isArray(y[h])){var w=y[h];if(!(2>w.length)){var j=w[1];if(Array.isArray(j)&&!(1>j.length)){var q=j[0];if(q!="noop"&&q!="stop"&&q!="close")for(var oe=1;oe<j.length;oe++)j[oe]=""}}}}return dl(y)}catch{return g}}var xt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Wi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Lr;function Ha(){}F(Ha,pl),Ha.prototype.g=function(){return new XMLHttpRequest},Ha.prototype.i=function(){return{}},Lr=new Ha;function Ai(h,g,y,w){this.j=h,this.i=g,this.l=y,this.R=w||1,this.U=new Vr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ml}function ml(){this.i=null,this.g="",this.h=!1}var Us={},Ur={};function ui(h,g,y){h.L=1,h.v=zr(vt(g)),h.m=y,h.P=!0,Qi(h,null)}function Qi(h,g){h.F=Date.now(),_t(h),h.A=vt(h.v);var y=h.A,w=h.R;Array.isArray(w)||(w=[String(w)]),Xi(y.i,"t",w),h.C=0,y=h.j.J,h.h=new ml,h.g=Vc(h.j,y?g:null,!h.m),0<h.O&&(h.M=new nd(I(h.Y,h,h.g),h.O)),g=h.U,y=h.g,w=h.ca;var j="readystatechange";Array.isArray(j)||(j&&(Os[0]=j.toString()),j=Os);for(var q=0;q<j.length;q++){var oe=oi(y,j[q],w||g.handleEvent,!1,g.h||g);if(!oe)break;g.g[oe.key]=oe}g=h.H?C(h.H):{},h.m?(h.u||(h.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,g)):(h.u="GET",h.g.ea(h.A,h.u,null,g)),Ms(),Tc(h.i,h.u,h.A,h.l,h.R,h.m)}Ai.prototype.ca=function(h){h=h.target;const g=this.M;g&&Gn(h)==3?g.j():this.Y(h)},Ai.prototype.Y=function(h){try{if(h==this.g)e:{const Mt=Gn(this.g);var g=this.g.Ba();const ts=this.g.Z();if(!(3>Mt)&&(Mt!=3||this.g&&(this.h.h||this.g.oa()||Ic(this.g)))){this.J||Mt!=4||g==7||(g==8||0>=ts?Ms(3):Ms(2)),Fa(this);var y=this.g.Z();this.X=y;t:if(js(this)){var w=Ic(this.g);h="";var j=w.length,q=Gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bn(this),Dn(this);var oe="";break t}this.h.i=new d.TextDecoder}for(g=0;g<j;g++)this.h.h=!0,h+=this.h.i.decode(w[g],{stream:!(q&&g==j-1)});w.length=0,this.h.g+=h,this.C=0,oe=this.h.g}else oe=this.g.oa();if(this.o=y==200,Sc(this.i,this.u,this.A,this.l,this.R,Mt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Ke,kt=this.g;if((Ke=kt.g?kt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(Ke)){var We=Ke;break t}}We=null}if(y=We)Ls(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,On(this,y);else{this.o=!1,this.s=3,wt(12),bn(this),Dn(this);break e}}if(this.P){y=!0;let Zt;for(;!this.J&&this.C<oe.length;)if(Zt=Bs(this,oe),Zt==Ur){Mt==4&&(this.s=4,wt(14),y=!1),Ls(this.i,this.l,null,"[Incomplete Response]");break}else if(Zt==Us){this.s=4,wt(15),Ls(this.i,this.l,oe,"[Invalid Chunk]"),y=!1;break}else Ls(this.i,this.l,Zt,null),On(this,Zt);if(js(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Mt!=4||oe.length!=0||this.h.h||(this.s=1,wt(16),y=!1),this.o=this.o&&y,!y)Ls(this.i,this.l,oe,"[Invalid Chunked Response]"),bn(this),Dn(this);else if(0<oe.length&&!this.W){this.W=!0;var Gt=this.j;Gt.g==this&&Gt.ba&&!Gt.M&&(Gt.j.info("Great, no buffering proxy detected. Bytes received: "+oe.length),Qr(Gt),Gt.M=!0,wt(11))}}else Ls(this.i,this.l,oe,null),On(this,oe);Mt==4&&bn(this),this.o&&!this.J&&(Mt==4?kc(this.j,this):(this.o=!1,_t(this)))}else ld(this.g),y==400&&0<oe.indexOf("Unknown SID")?(this.s=3,wt(12)):(this.s=0,wt(13)),bn(this),Dn(this)}}}catch{}finally{}};function js(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Bs(h,g){var y=h.C,w=g.indexOf(`
`,y);return w==-1?Ur:(y=Number(g.substring(y,w)),isNaN(y)?Us:(w+=1,w+y>g.length?Ur:(g=g.slice(w,w+y),h.C=w+y,g)))}Ai.prototype.cancel=function(){this.J=!0,bn(this)};function _t(h){h.S=Date.now()+h.I,gl(h,h.I)}function gl(h,g){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Ps(I(h.ba,h),g)}function Fa(h){h.B&&(d.clearTimeout(h.B),h.B=null)}Ai.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Si(this.i,this.A),this.L!=2&&(Ms(),wt(17)),bn(this),this.s=2,Dn(this)):gl(this,this.S-h)};function Dn(h){h.j.G==0||h.J||kc(h.j,h)}function bn(h){Fa(h);var g=h.M;g&&typeof g.ma=="function"&&g.ma(),h.M=null,ln(h.U),h.g&&(g=h.g,h.g=null,g.abort(),g.ma())}function On(h,g){try{var y=h.j;if(y.G!=0&&(y.g==h||zs(y.h,h))){if(!h.K&&zs(y.h,h)&&y.G==3){try{var w=y.Da.g.parse(g)}catch{w=null}if(Array.isArray(w)&&w.length==3){var j=w;if(j[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<h.F)Ja(y),Xa(y);else break e;Il(y),wt(18)}}else y.za=j[1],0<y.za-y.T&&37500>j[2]&&y.F&&y.v==0&&!y.C&&(y.C=Ps(I(y.Za,y),6e3));if(1>=Ac(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else es(y,11)}else if((h.K||y.g==h)&&Ja(y),!Q(g))for(j=y.Da.g.parse(g),g=0;g<j.length;g++){let We=j[g];if(y.T=We[0],We=We[1],y.G==2)if(We[0]=="c"){y.K=We[1],y.ia=We[2];const Gt=We[3];Gt!=null&&(y.la=Gt,y.j.info("VER="+y.la));const Mt=We[4];Mt!=null&&(y.Aa=Mt,y.j.info("SVER="+y.Aa));const ts=We[5];ts!=null&&typeof ts=="number"&&0<ts&&(w=1.5*ts,y.L=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const Zt=h.g;if(Zt){const Di=Zt.g?Zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Di){var q=w.h;q.g||Di.indexOf("spdy")==-1&&Di.indexOf("quic")==-1&&Di.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Hs(q,q.h),q.h=null))}if(w.D){const Dl=Zt.g?Zt.g.getResponseHeader("X-HTTP-Session-Id"):null;Dl&&(w.ya=Dl,Ze(w.I,w.D,Dl))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-h.F,y.j.info("Handshake RTT: "+y.R+"ms")),w=y;var oe=h;if(w.qa=Pc(w,w.J?w.ia:null,w.W),oe.K){zn(w.h,oe);var Ke=oe,kt=w.L;kt&&(Ke.I=kt),Ke.B&&(Fa(Ke),_t(Ke)),w.g=oe}else Oc(w);0<y.i.length&&Za(y)}else We[0]!="stop"&&We[0]!="close"||es(y,7);else y.G==3&&(We[0]=="stop"||We[0]=="close"?We[0]=="stop"?es(y,7):Cl(y):We[0]!="noop"&&y.l&&y.l.ta(We),y.v=0)}}Ms(4)}catch{}}var id=class{constructor(h,g){this.g=h,this.map=g}};function yl(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function vl(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Ac(h){return h.h?1:h.g?h.g.size:0}function zs(h,g){return h.h?h.h==g:h.g?h.g.has(g):!1}function Hs(h,g){h.g?h.g.add(g):h.h=g}function zn(h,g){h.h&&h.h==g?h.h=null:h.g&&h.g.has(g)&&h.g.delete(g)}yl.prototype.cancel=function(){if(this.i=En(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function En(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let g=h.i;for(const y of h.g.values())g=g.concat(y.D);return g}return Y(h.i)}function wc(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(_(h)){for(var g=[],y=h.length,w=0;w<y;w++)g.push(h[w]);return g}g=[],y=0;for(w in h)g[y++]=h[w];return g}function sd(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(_(h)||typeof h=="string"){var g=[];h=h.length;for(var y=0;y<h;y++)g.push(y);return g}g=[],y=0;for(const w in h)g[y++]=w;return g}}}function jr(h,g){if(h.forEach&&typeof h.forEach=="function")h.forEach(g,void 0);else if(_(h)||typeof h=="string")Array.prototype.forEach.call(h,g,void 0);else for(var y=sd(h),w=wc(h),j=w.length,q=0;q<j;q++)g.call(void 0,w[q],y&&y[q],h)}var El=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qa(h,g){if(h){h=h.split("&");for(var y=0;y<h.length;y++){var w=h[y].indexOf("="),j=null;if(0<=w){var q=h[y].substring(0,w);j=h[y].substring(w+1)}else q=h[y];g(q,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Yi(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Yi){this.h=h.h,Fs(this,h.j),this.o=h.o,this.g=h.g,Br(this,h.s),this.l=h.l;var g=h.i,y=new wi;y.i=g.i,g.g&&(y.g=new Map(g.g),y.h=g.h),Ga(this,y),this.m=h.m}else h&&(g=String(h).match(El))?(this.h=!1,Fs(this,g[1]||"",!0),this.o=qs(g[2]||""),this.g=qs(g[3]||"",!0),Br(this,g[4]),this.l=qs(g[5]||"",!0),Ga(this,g[6]||"",!0),this.m=qs(g[7]||"")):(this.h=!1,this.i=new wi(null,this.h))}Yi.prototype.toString=function(){var h=[],g=this.j;g&&h.push(Hn(g,Tl,!0),":");var y=this.g;return(y||g=="file")&&(h.push("//"),(g=this.o)&&h.push(Hn(g,Tl,!0),"@"),h.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&h.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&h.push("/"),h.push(Hn(y,y.charAt(0)=="/"?Sl:bc,!0))),(y=this.i.toString())&&h.push("?",y),(y=this.m)&&h.push("#",Hn(y,od)),h.join("")};function vt(h){return new Yi(h)}function Fs(h,g,y){h.j=y?qs(g,!0):g,h.j&&(h.j=h.j.replace(/:$/,""))}function Br(h,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);h.s=g}else h.s=null}function Ga(h,g,y){g instanceof wi?(h.i=g,Al(h.i,h.h)):(y||(g=Hn(g,ad)),h.i=new wi(g,h.h))}function Ze(h,g,y){h.i.set(g,y)}function zr(h){return Ze(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function qs(h,g){return h?g?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Hn(h,g,y){return typeof h=="string"?(h=encodeURI(h).replace(g,rd),y&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function rd(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Tl=/[#\/\?@]/g,bc=/[#\?:]/g,Sl=/[#\?]/g,ad=/[#\?@]/g,od=/#/g;function wi(h,g){this.h=this.g=null,this.i=h||null,this.j=!!g}function Fn(h){h.g||(h.g=new Map,h.h=0,h.i&&qa(h.i,function(g,y){h.add(decodeURIComponent(g.replace(/\+/g," ")),y)}))}i=wi.prototype,i.add=function(h,g){Fn(this),this.i=null,h=Zi(this,h);var y=this.g.get(h);return y||this.g.set(h,y=[]),y.push(g),this.h+=1,this};function Ka(h,g){Fn(h),g=Zi(h,g),h.g.has(g)&&(h.i=null,h.h-=h.g.get(g).length,h.g.delete(g))}function $i(h,g){return Fn(h),g=Zi(h,g),h.g.has(g)}i.forEach=function(h,g){Fn(this),this.g.forEach(function(y,w){y.forEach(function(j){h.call(g,j,w,this)},this)},this)},i.na=function(){Fn(this);const h=Array.from(this.g.values()),g=Array.from(this.g.keys()),y=[];for(let w=0;w<g.length;w++){const j=h[w];for(let q=0;q<j.length;q++)y.push(g[w])}return y},i.V=function(h){Fn(this);let g=[];if(typeof h=="string")$i(this,h)&&(g=g.concat(this.g.get(Zi(this,h))));else{h=Array.from(this.g.values());for(let y=0;y<h.length;y++)g=g.concat(h[y])}return g},i.set=function(h,g){return Fn(this),this.i=null,h=Zi(this,h),$i(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[g]),this.h+=1,this},i.get=function(h,g){return h?(h=this.V(h),0<h.length?String(h[0]):g):g};function Xi(h,g,y){Ka(h,g),0<y.length&&(h.i=null,h.g.set(Zi(h,g),Y(y)),h.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],g=Array.from(this.g.keys());for(var y=0;y<g.length;y++){var w=g[y];const q=encodeURIComponent(String(w)),oe=this.V(w);for(w=0;w<oe.length;w++){var j=q;oe[w]!==""&&(j+="="+encodeURIComponent(String(oe[w]))),h.push(j)}}return this.i=h.join("&")};function Zi(h,g){return g=String(g),h.j&&(g=g.toLowerCase()),g}function Al(h,g){g&&!h.j&&(Fn(h),h.i=null,h.g.forEach(function(y,w){var j=w.toLowerCase();w!=j&&(Ka(this,w),Xi(this,j,y))},h)),h.j=g}function Cc(h,g){const y=new Vs;if(d.Image){const w=new Image;w.onload=L(qn,y,"TestLoadImage: loaded",!0,g,w),w.onerror=L(qn,y,"TestLoadImage: error",!1,g,w),w.onabort=L(qn,y,"TestLoadImage: abort",!1,g,w),w.ontimeout=L(qn,y,"TestLoadImage: timeout",!1,g,w),d.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=h}else g(!1)}function Hr(h,g){const y=new Vs,w=new AbortController,j=setTimeout(()=>{w.abort(),qn(y,"TestPingServer: timeout",!1,g)},1e4);fetch(h,{signal:w.signal}).then(q=>{clearTimeout(j),q.ok?qn(y,"TestPingServer: ok",!0,g):qn(y,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(j),qn(y,"TestPingServer: error",!1,g)})}function qn(h,g,y,w,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),w(y)}catch{}}function Fr(){this.g=new vn}function bi(h,g,y){const w=y||"";try{jr(h,function(j,q){let oe=j;m(j)&&(oe=dl(j)),g.push(w+q+"="+encodeURIComponent(oe))})}catch(j){throw g.push(w+"type="+encodeURIComponent("_badmap")),j}}function Gs(h){this.l=h.Ub||null,this.j=h.eb||!1}F(Gs,pl),Gs.prototype.g=function(){return new Ji(this.l,this.j)},Gs.prototype.i=function(h){return function(){return h}}({});function Ji(h,g){Ot.call(this),this.D=h,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}F(Ji,Ot),i=Ji.prototype,i.open=function(h,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=g,this.readyState=1,Ri(this)},i.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(g.body=h),(this.D||d).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ci(this)),this.readyState=0},i.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Ri(this)),this.g&&(this.readyState=3,Ri(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function wl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}i.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var g=h.value?h.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!h.done}))&&(this.response=this.responseText+=g)}h.done?Ci(this):Ri(this),this.readyState==3&&wl(this)}},i.Ra=function(h){this.g&&(this.response=this.responseText=h,Ci(this))},i.Qa=function(h){this.g&&(this.response=h,Ci(this))},i.ga=function(){this.g&&Ci(this)};function Ci(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Ri(h)}i.setRequestHeader=function(h,g){this.u.append(h,g)},i.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],g=this.h.entries();for(var y=g.next();!y.done;)y=y.value,h.push(y[0]+": "+y[1]),y=g.next();return h.join(`\r
`)};function Ri(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function bl(h){let g="";return Te(h,function(y,w){g+=w,g+=":",g+=y,g+=`\r
`}),g}function qt(h,g,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=bl(y),typeof h=="string"?y!=null&&encodeURIComponent(String(y)):Ze(h,g,y))}function tt(h){Ot.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}F(tt,Ot);var Wa=/^https?$/i,qr=["POST","PUT"];i=tt.prototype,i.Ha=function(h){this.J=h},i.ea=function(h,g,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);g=g?g.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Lr.g(),this.v=this.o?yc(this.o):yc(Lr),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(g,String(h),!0),this.B=!1}catch(q){Rc(this,q);return}if(h=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var j in w)y.set(j,w[j]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const q of w.keys())y.set(q,w.get(q));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(q=>q.toLowerCase()=="content-type"),j=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(qr,g,void 0))||w||j||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,oe]of y)this.g.setRequestHeader(q,oe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gr(this),this.u=!0,this.g.send(h),this.u=!1}catch(q){Rc(this,q)}};function Rc(h,g){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=g,h.m=5,Qa(h),Ii(h)}function Qa(h){h.A||(h.A=!0,Ht(h,"complete"),Ht(h,"error"))}i.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Ht(this,"complete"),Ht(this,"abort"),Ii(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ii(this,!0)),tt.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Ya(this):this.bb())},i.bb=function(){Ya(this)};function Ya(h){if(h.h&&typeof c<"u"&&(!h.v[1]||Gn(h)!=4||h.Z()!=2)){if(h.u&&Gn(h)==4)gc(h.Ea,0,h);else if(Ht(h,"readystatechange"),Gn(h)==4){h.h=!1;try{const oe=h.Z();e:switch(oe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var y;if(!(y=g)){var w;if(w=oe===0){var j=String(h.D).match(El)[1]||null;!j&&d.self&&d.self.location&&(j=d.self.location.protocol.slice(0,-1)),w=!Wa.test(j?j.toLowerCase():"")}y=w}if(y)Ht(h,"complete"),Ht(h,"success");else{h.m=6;try{var q=2<Gn(h)?h.g.statusText:""}catch{q=""}h.l=q+" ["+h.Z()+"]",Qa(h)}}finally{Ii(h)}}}}function Ii(h,g){if(h.g){Gr(h);const y=h.g,w=h.v[0]?()=>{}:null;h.g=null,h.v=null,g||Ht(h,"ready");try{y.onreadystatechange=w}catch{}}}function Gr(h){h.I&&(d.clearTimeout(h.I),h.I=null)}i.isActive=function(){return!!this.g};function Gn(h){return h.g?h.g.readyState:0}i.Z=function(){try{return 2<Gn(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(h){if(this.g){var g=this.g.responseText;return h&&g.indexOf(h)==0&&(g=g.substring(h.length)),Ei(g)}};function Ic(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function ld(h){const g={};h=(h.g&&2<=Gn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<h.length;w++){if(Q(h[w]))continue;var y=x(h[w]);const j=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const q=g[j]||[];g[j]=q,q.push(y)}O(g,function(w){return w.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Kr(h,g,y){return y&&y.internalChannelParams&&y.internalChannelParams[h]||g}function $a(h){this.Aa=0,this.i=[],this.j=new Vs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Kr("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Kr("baseRetryDelayMs",5e3,h),this.cb=Kr("retryDelaySeedMs",1e4,h),this.Wa=Kr("forwardChannelMaxRetries",2,h),this.wa=Kr("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new yl(h&&h.concurrentRequestLimit),this.Da=new Fr,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=$a.prototype,i.la=8,i.G=1,i.connect=function(h,g,y,w){wt(0),this.W=h,this.H=g||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.I=Pc(this,null,this.W),Za(this)};function Cl(h){if(Nc(h),h.G==3){var g=h.U++,y=vt(h.I);if(Ze(y,"SID",h.K),Ze(y,"RID",g),Ze(y,"TYPE","terminate"),Wr(h,y),g=new Ai(h,h.j,g),g.L=2,g.v=zr(vt(y)),y=!1,d.navigator&&d.navigator.sendBeacon)try{y=d.navigator.sendBeacon(g.v.toString(),"")}catch{}!y&&d.Image&&(new Image().src=g.v,y=!0),y||(g.g=Vc(g.j,null),g.g.ea(g.v)),g.F=Date.now(),_t(g)}Mc(h)}function Xa(h){h.g&&(Qr(h),h.g.cancel(),h.g=null)}function Nc(h){Xa(h),h.u&&(d.clearTimeout(h.u),h.u=null),Ja(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function Za(h){if(!vl(h.h)&&!h.s){h.s=!0;var g=h.Ga;fe||k(),de||(fe(),de=!0),Se.add(g,h),h.B=0}}function ud(h,g){return Ac(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=g.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Ps(I(h.Ga,h,g),Nl(h,h.B)),h.B++,!0)}i.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const j=new Ai(this,this.j,h);let q=this.o;if(this.S&&(q?(q=C(q),D(q,this.S)):q=this.S),this.m!==null||this.O||(j.H=q,q=null),this.P)e:{for(var g=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(g+=w,4096<g){g=y;break e}if(g===4096||y===this.i.length-1){g=y+1;break e}}g=1e3}else g=1e3;g=Dc(this,j,g),y=vt(this.I),Ze(y,"RID",h),Ze(y,"CVER",22),this.D&&Ze(y,"X-HTTP-Session-Id",this.D),Wr(this,y),q&&(this.O?g="headers="+encodeURIComponent(String(bl(q)))+"&"+g:this.m&&qt(y,this.m,q)),Hs(this.h,j),this.Ua&&Ze(y,"TYPE","init"),this.P?(Ze(y,"$req",g),Ze(y,"SID","null"),j.T=!0,ui(j,y,null)):ui(j,y,g),this.G=2}}else this.G==3&&(h?Rl(this,h):this.i.length==0||vl(this.h)||Rl(this))};function Rl(h,g){var y;g?y=g.l:y=h.U++;const w=vt(h.I);Ze(w,"SID",h.K),Ze(w,"RID",y),Ze(w,"AID",h.T),Wr(h,w),h.m&&h.o&&qt(w,h.m,h.o),y=new Ai(h,h.j,y,h.B+1),h.m===null&&(y.H=h.o),g&&(h.i=g.D.concat(h.i)),g=Dc(h,y,1e3),y.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Hs(h.h,y),ui(y,w,g)}function Wr(h,g){h.H&&Te(h.H,function(y,w){Ze(g,w,y)}),h.l&&jr({},function(y,w){Ze(g,w,y)})}function Dc(h,g,y){y=Math.min(h.i.length,y);var w=h.l?I(h.l.Na,h.l,h):null;e:{var j=h.i;let q=-1;for(;;){const oe=["count="+y];q==-1?0<y?(q=j[0].g,oe.push("ofs="+q)):q=0:oe.push("ofs="+q);let Ke=!0;for(let kt=0;kt<y;kt++){let We=j[kt].g;const Gt=j[kt].map;if(We-=q,0>We)q=Math.max(0,j[kt].g-100),Ke=!1;else try{bi(Gt,oe,"req"+We+"_")}catch{w&&w(Gt)}}if(Ke){w=oe.join("&");break e}}}return h=h.i.splice(0,y),g.D=h,w}function Oc(h){if(!h.g&&!h.u){h.Y=1;var g=h.Fa;fe||k(),de||(fe(),de=!0),Se.add(g,h),h.v=0}}function Il(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Ps(I(h.Fa,h),Nl(h,h.v)),h.v++,!0)}i.Fa=function(){if(this.u=null,xc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Ps(I(this.ab,this),h)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,wt(10),Xa(this),xc(this))};function Qr(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function xc(h){h.g=new Ai(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var g=vt(h.qa);Ze(g,"RID","rpc"),Ze(g,"SID",h.K),Ze(g,"AID",h.T),Ze(g,"CI",h.F?"0":"1"),!h.F&&h.ja&&Ze(g,"TO",h.ja),Ze(g,"TYPE","xmlhttp"),Wr(h,g),h.m&&h.o&&qt(g,h.m,h.o),h.L&&(h.g.I=h.L);var y=h.g;h=h.ia,y.L=1,y.v=zr(vt(g)),y.m=null,y.P=!0,Qi(y,h)}i.Za=function(){this.C!=null&&(this.C=null,Xa(this),Il(this),wt(19))};function Ja(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function kc(h,g){var y=null;if(h.g==g){Ja(h),Qr(h),h.g=null;var w=2}else if(zs(h.h,g))y=g.D,zn(h.h,g),w=1;else return;if(h.G!=0){if(g.o)if(w==1){y=g.m?g.m.length:0,g=Date.now()-g.F;var j=h.B;w=Ba(),Ht(w,new Ec(w,y)),Za(h)}else Oc(h);else if(j=g.s,j==3||j==0&&0<g.X||!(w==1&&ud(h,g)||w==2&&Il(h)))switch(y&&0<y.length&&(g=h.h,g.i=g.i.concat(y)),j){case 1:es(h,5);break;case 4:es(h,10);break;case 3:es(h,6);break;default:es(h,2)}}}function Nl(h,g){let y=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(y*=2),y*g}function es(h,g){if(h.j.info("Error code "+g),g==2){var y=I(h.fb,h),w=h.Xa;const j=!w;w=new Yi(w||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Fs(w,"https"),zr(w),j?Cc(w.toString(),y):Hr(w.toString(),y)}else wt(2);h.G=0,h.l&&h.l.sa(g),Mc(h),Nc(h)}i.fb=function(h){h?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function Mc(h){if(h.G=0,h.ka=[],h.l){const g=En(h.h);(g.length!=0||h.i.length!=0)&&(z(h.ka,g),z(h.ka,h.i),h.h.i.length=0,Y(h.i),h.i.length=0),h.l.ra()}}function Pc(h,g,y){var w=y instanceof Yi?vt(y):new Yi(y);if(w.g!="")g&&(w.g=g+"."+w.g),Br(w,w.s);else{var j=d.location;w=j.protocol,g=g?g+"."+j.hostname:j.hostname,j=+j.port;var q=new Yi(null);w&&Fs(q,w),g&&(q.g=g),j&&Br(q,j),y&&(q.l=y),w=q}return y=h.D,g=h.ya,y&&g&&Ze(w,y,g),Ze(w,"VER",h.la),Wr(h,w),w}function Vc(h,g,y){if(g&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=h.Ca&&!h.pa?new tt(new Gs({eb:y})):new tt(h.pa),g.Ha(h.J),g}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lc(){}i=Lc.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function eo(){}eo.prototype.g=function(h,g){return new Tn(h,g)};function Tn(h,g){Ot.call(this),this.g=new $a(g),this.l=h,this.h=g&&g.messageUrlParams||null,h=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(h?h["X-WebChannel-Content-Type"]=g.messageContentType:h={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(h?h["X-WebChannel-Client-Profile"]=g.va:h={"X-WebChannel-Client-Profile":g.va}),this.g.S=h,(h=g&&g.Sb)&&!Q(h)&&(this.g.m=h),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!Q(g)&&(this.g.D=g,h=this.h,h!==null&&g in h&&(h=this.h,g in h&&delete h[g])),this.j=new Ni(this)}F(Tn,Ot),Tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tn.prototype.close=function(){Cl(this.g)},Tn.prototype.o=function(h){var g=this.g;if(typeof h=="string"){var y={};y.__data__=h,h=y}else this.u&&(y={},y.__data__=dl(h),h=y);g.i.push(new id(g.Ya++,h)),g.G==3&&Za(g)},Tn.prototype.N=function(){this.g.l=null,delete this.j,Cl(this.g),delete this.g,Tn.aa.N.call(this)};function Uc(h){xs.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var g=h.__sm__;if(g){e:{for(const y in g){h=y;break e}h=void 0}(this.i=h)&&(h=this.i,g=g!==null&&h in g?g[h]:void 0),this.data=g}else this.data=h}F(Uc,xs);function jc(){li.call(this),this.status=1}F(jc,li);function Ni(h){this.g=h}F(Ni,Lc),Ni.prototype.ua=function(){Ht(this.g,"a")},Ni.prototype.ta=function(h){Ht(this.g,new Uc(h))},Ni.prototype.sa=function(h){Ht(this.g,new jc)},Ni.prototype.ra=function(){Ht(this.g,"b")},eo.prototype.createWebChannel=eo.prototype.g,Tn.prototype.send=Tn.prototype.o,Tn.prototype.open=Tn.prototype.m,Tn.prototype.close=Tn.prototype.close,$A=function(){return new eo},YA=function(){return Ba()},QA=Bn,G_={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},xt.NO_ERROR=0,xt.TIMEOUT=8,xt.HTTP_ERROR=6,Xh=xt,Wi.COMPLETE="complete",WA=Wi,vc.EventType=Ti,Ti.OPEN="a",Ti.CLOSE="b",Ti.ERROR="c",Ti.MESSAGE="d",Ot.prototype.listen=Ot.prototype.K,Du=vc,tt.prototype.listenOnce=tt.prototype.L,tt.prototype.getLastError=tt.prototype.Ka,tt.prototype.getLastErrorCode=tt.prototype.Ba,tt.prototype.getStatus=tt.prototype.Z,tt.prototype.getResponseJson=tt.prototype.Oa,tt.prototype.getResponseText=tt.prototype.oa,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Ha,KA=tt}).apply(typeof Bh<"u"?Bh:typeof self<"u"?self:typeof window<"u"?window:{});const HT="@firebase/firestore",FT="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dn.UNAUTHENTICATED=new dn(null),dn.GOOGLE_CREDENTIALS=new dn("google-credentials-uid"),dn.FIRST_PARTY=new dn("first-party-uid"),dn.MOCK_USER=new dn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let al="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=new Mf("@firebase/firestore");function Oo(){return Ca.logLevel}function pe(i,...e){if(Ca.logLevel<=je.DEBUG){const t=e.map(Hm);Ca.debug(`Firestore (${al}): ${i}`,...t)}}function Rs(i,...e){if(Ca.logLevel<=je.ERROR){const t=e.map(Hm);Ca.error(`Firestore (${al}): ${i}`,...t)}}function Wo(i,...e){if(Ca.logLevel<=je.WARN){const t=e.map(Hm);Ca.warn(`Firestore (${al}): ${i}`,...t)}}function Hm(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Ne(i="Unexpected state"){const e=`FIRESTORE (${al}) INTERNAL ASSERTION FAILED: `+i;throw Rs(e),new Error(e)}function it(i,e){i||Ne()}function xe(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class we extends Ns{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ok{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(dn.UNAUTHENTICATED))}shutdown(){}}class lk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class uk{constructor(e){this.t=e,this.currentUser=dn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){it(this.o===void 0);let s=this.i;const a=_=>this.i!==s?(s=this.i,t(_)):Promise.resolve();let l=new wr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new wr,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const _=l;e.enqueueRetryable(async()=>{await _.promise,await a(this.currentUser)})},d=_=>{pe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(_=>d(_)),setTimeout(()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?d(_):(pe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new wr)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(pe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(it(typeof s.accessToken=="string"),new XA(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return it(e===null||typeof e=="string"),new dn(e)}}class ck{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=dn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class hk{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new ck(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(dn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fk{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Un(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){it(this.o===void 0);const s=l=>{l.error!=null&&pe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.R;return this.R=l.token,pe("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const a=l=>{pe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?a(l):pe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new qT(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(it(typeof t.token=="string"),this.R=t.token,new qT(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=dk(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Fe(i,e){return i<e?-1:i>e?1:0}function Qo(i,e,t){return i.length===e.length&&i.every((s,a)=>t(s,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=-62135596800,KT=1e6;class Ut{static now(){return Ut.fromMillis(Date.now())}static fromDate(e){return Ut.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*KT);return new Ut(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new we(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new we(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<GT)throw new we(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new we(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/KT}_compareTo(e){return this.seconds===e.seconds?Fe(this.nanoseconds,e.nanoseconds):Fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-GT;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{static fromTimestamp(e){return new De(e)}static min(){return new De(new Ut(0,0))}static max(){return new De(new Ut(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT="__name__";class Vi{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ne(),s===void 0?s=e.length-t:s>e.length-t&&Ne(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Vi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Vi?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Vi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Math.sign(e.length-t.length)}static compareSegments(e,t){const s=Vi.isNumericId(e),a=Vi.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Vi.extractNumericId(e).compare(Vi.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ar.fromString(e.substring(4,e.length-2))}}class At extends Vi{construct(e,t,s){return new At(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new we(ne.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(a=>a.length>0))}return new At(t)}static emptyPath(){return new At([])}}const pk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class an extends Vi{construct(e,t,s){return new an(e,t,s)}static isValidIdentifier(e){return pk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),an.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===WT}static keyField(){return new an([WT])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new we(ne.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new we(ne.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const _=e[a+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new we(ne.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=_,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(s+=d,a++):(l(),a++)}if(l(),c)throw new we(ne.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new an(t)}static emptyPath(){return new an([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.path=e}static fromPath(e){return new be(At.fromString(e))}static fromName(e){return new be(At.fromString(e).popFirst(5))}static empty(){return new be(At.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&At.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return At.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new be(new At(e.slice()))}}/**
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
 */const Qu=-1;function _k(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,a=De.fromTimestamp(s===1e9?new Ut(t+1,0):new Ut(t,s));return new Rr(a,be.empty(),e)}function mk(i){return new Rr(i.readTime,i.key,Qu)}class Rr{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Rr(De.min(),be.empty(),Qu)}static max(){return new Rr(De.max(),be.empty(),Qu)}}function gk(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=be.comparator(i.documentKey,e.documentKey),t!==0?t:Fe(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ol(i){if(i.code!==ne.FAILED_PRECONDITION||i.message!==yk)throw i;pe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Z((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Z?t:Z.resolve(t)}catch(t){return Z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.reject(t)}static resolve(e){return new Z((t,s)=>{t(e)})}static reject(e){return new Z((t,s)=>{s(e)})}static waitFor(e){return new Z((t,s)=>{let a=0,l=0,c=!1;e.forEach(d=>{++a,d.next(()=>{++l,c&&l===a&&t()},_=>s(_))}),c=!0,l===a&&t()})}static or(e){let t=Z.resolve(!1);for(const s of e)t=t.next(a=>a?Z.resolve(a):s());return t}static forEach(e,t){const s=[];return e.forEach((a,l)=>{s.push(t.call(this,a,l))}),this.waitFor(s)}static mapArray(e,t){return new Z((s,a)=>{const l=e.length,c=new Array(l);let d=0;for(let _=0;_<l;_++){const m=_;t(e[m]).next(E=>{c[m]=E,++d,d===l&&s(c)},E=>a(E))}})}static doWhile(e,t){return new Z((s,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):s()};l()})}}function Ek(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ll(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class Ff{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.oe(s),this._e=s=>t.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Ff.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=-1;function qf(i){return i==null}function Ef(i){return i===0&&1/i==-1/0}function Tk(i){return typeof i=="number"&&Number.isInteger(i)&&!Ef(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA="";function Sk(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=QT(e)),e=Ak(i.get(t),e);return QT(e)}function Ak(i,e){let t=e;const s=i.length;for(let a=0;a<s;a++){const l=i.charAt(a);switch(l){case"\0":t+="";break;case JA:t+="";break;default:t+=l}}return t}function QT(i){return i+JA+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function ka(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function ew(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,t){this.comparator=e,this.root=t||sn.EMPTY}insert(e,t){return new yt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,sn.BLACK,null,null))}remove(e){return new yt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,sn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zh(this.root,e,this.comparator,!1)}getReverseIterator(){return new zh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zh(this.root,e,this.comparator,!0)}}class zh{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class sn{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??sn.RED,this.left=a??sn.EMPTY,this.right=l??sn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new sn(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return sn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return sn.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,sn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,sn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ne();const e=this.left.check();if(e!==this.right.check())throw Ne();return e+(this.isRed()?0:1)}}sn.EMPTY=null,sn.RED=!0,sn.BLACK=!1;sn.EMPTY=new class{constructor(){this.size=0}get key(){throw Ne()}get value(){throw Ne()}get color(){throw Ne()}get left(){throw Ne()}get right(){throw Ne()}copy(e,t,s,a,l){return this}insert(e,t,s){return new sn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.comparator=e,this.data=new yt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new $T(this.data.getIterator())}getIteratorFrom(e){return new $T(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof jt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new jt(this.comparator);return t.data=e,t}}class $T{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.fields=e,e.sort(an.comparator)}static empty(){return new mi([])}unionWith(e){let t=new jt(an.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new mi(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Qo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class tw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new tw("Invalid base64 string: "+l):l}}(e);return new on(t)}static fromUint8Array(e){const t=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new on(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}on.EMPTY_BYTE_STRING=new on("");const wk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ir(i){if(it(!!i),typeof i=="string"){let e=0;const t=wk.exec(i);if(it(!!t),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ct(i.seconds),nanos:Ct(i.nanos)}}function Ct(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Nr(i){return typeof i=="string"?on.fromBase64String(i):on.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw="server_timestamp",iw="__type__",sw="__previous_value__",rw="__local_write_time__";function qm(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[iw])===null||t===void 0?void 0:t.stringValue)===nw}function Gf(i){const e=i.mapValue.fields[sw];return qm(e)?Gf(e):e}function Yu(i){const e=Ir(i.mapValue.fields[rw].timestampValue);return new Ut(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e,t,s,a,l,c,d,_,m){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=_,this.useFetchStreams=m}}const Tf="(default)";class $u{constructor(e,t){this.projectId=e,this.database=t||Tf}static empty(){return new $u("","")}get isDefaultDatabase(){return this.database===Tf}isEqual(e){return e instanceof $u&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw="__type__",Ck="__max__",Hh={mapValue:{}},ow="__vector__",Sf="value";function Dr(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?qm(i)?4:Ik(i)?9007199254740991:Rk(i)?10:11:Ne()}function qi(i,e){if(i===e)return!0;const t=Dr(i);if(t!==Dr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Yu(i).isEqual(Yu(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Ir(a.timestampValue),d=Ir(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(a,l){return Nr(a.bytesValue).isEqual(Nr(l.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(a,l){return Ct(a.geoPointValue.latitude)===Ct(l.geoPointValue.latitude)&&Ct(a.geoPointValue.longitude)===Ct(l.geoPointValue.longitude)}(i,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return Ct(a.integerValue)===Ct(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=Ct(a.doubleValue),d=Ct(l.doubleValue);return c===d?Ef(c)===Ef(d):isNaN(c)&&isNaN(d)}return!1}(i,e);case 9:return Qo(i.arrayValue.values||[],e.arrayValue.values||[],qi);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(YT(c)!==YT(d))return!1;for(const _ in c)if(c.hasOwnProperty(_)&&(d[_]===void 0||!qi(c[_],d[_])))return!1;return!0}(i,e);default:return Ne()}}function Xu(i,e){return(i.values||[]).find(t=>qi(t,e))!==void 0}function Yo(i,e){if(i===e)return 0;const t=Dr(i),s=Dr(e);if(t!==s)return Fe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Fe(i.booleanValue,e.booleanValue);case 2:return function(l,c){const d=Ct(l.integerValue||l.doubleValue),_=Ct(c.integerValue||c.doubleValue);return d<_?-1:d>_?1:d===_?0:isNaN(d)?isNaN(_)?0:-1:1}(i,e);case 3:return XT(i.timestampValue,e.timestampValue);case 4:return XT(Yu(i),Yu(e));case 5:return Fe(i.stringValue,e.stringValue);case 6:return function(l,c){const d=Nr(l),_=Nr(c);return d.compareTo(_)}(i.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),_=c.split("/");for(let m=0;m<d.length&&m<_.length;m++){const E=Fe(d[m],_[m]);if(E!==0)return E}return Fe(d.length,_.length)}(i.referenceValue,e.referenceValue);case 8:return function(l,c){const d=Fe(Ct(l.latitude),Ct(c.latitude));return d!==0?d:Fe(Ct(l.longitude),Ct(c.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return ZT(i.arrayValue,e.arrayValue);case 10:return function(l,c){var d,_,m,E;const S=l.fields||{},I=c.fields||{},L=(d=S[Sf])===null||d===void 0?void 0:d.arrayValue,F=(_=I[Sf])===null||_===void 0?void 0:_.arrayValue,Y=Fe(((m=L==null?void 0:L.values)===null||m===void 0?void 0:m.length)||0,((E=F==null?void 0:F.values)===null||E===void 0?void 0:E.length)||0);return Y!==0?Y:ZT(L,F)}(i.mapValue,e.mapValue);case 11:return function(l,c){if(l===Hh.mapValue&&c===Hh.mapValue)return 0;if(l===Hh.mapValue)return 1;if(c===Hh.mapValue)return-1;const d=l.fields||{},_=Object.keys(d),m=c.fields||{},E=Object.keys(m);_.sort(),E.sort();for(let S=0;S<_.length&&S<E.length;++S){const I=Fe(_[S],E[S]);if(I!==0)return I;const L=Yo(d[_[S]],m[E[S]]);if(L!==0)return L}return Fe(_.length,E.length)}(i.mapValue,e.mapValue);default:throw Ne()}}function XT(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Fe(i,e);const t=Ir(i),s=Ir(e),a=Fe(t.seconds,s.seconds);return a!==0?a:Fe(t.nanos,s.nanos)}function ZT(i,e){const t=i.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=Yo(t[a],s[a]);if(l)return l}return Fe(t.length,s.length)}function $o(i){return K_(i)}function K_(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=Ir(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return Nr(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return be.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=K_(l);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${K_(t.fields[c])}`;return a+"}"}(i.mapValue):Ne()}function Zh(i){switch(Dr(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Gf(i);return e?16+Zh(e):16;case 5:return 2*i.stringValue.length;case 6:return Nr(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((a,l)=>a+Zh(l),0)}(i.arrayValue);case 10:case 11:return function(s){let a=0;return ka(s.fields,(l,c)=>{a+=l.length+Zh(c)}),a}(i.mapValue);default:throw Ne()}}function W_(i){return!!i&&"integerValue"in i}function Gm(i){return!!i&&"arrayValue"in i}function JT(i){return!!i&&"nullValue"in i}function eS(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Jh(i){return!!i&&"mapValue"in i}function Rk(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[aw])===null||t===void 0?void 0:t.stringValue)===ow}function Uu(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return ka(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Uu(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Uu(i.arrayValue.values[t]);return e}return Object.assign({},i)}function Ik(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===Ck}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this.value=e}static empty(){return new ni({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Jh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Uu(t)}setAll(e){let t=an.emptyPath(),s={},a=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const _=this.getFieldsMap(t);this.applyChanges(_,s,a),s={},a=[],t=d.popLast()}c?s[d.lastSegment()]=Uu(c):a.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());Jh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return qi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];Jh(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){ka(t,(a,l)=>e[a]=l);for(const a of s)delete e[a]}clone(){return new ni(Uu(this.value))}}function lw(i){const e=[];return ka(i.fields,(t,s)=>{const a=new an([t]);if(Jh(s)){const l=lw(s.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new mi(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t,s,a,l,c,d){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new mn(e,0,De.min(),De.min(),De.min(),ni.empty(),0)}static newFoundDocument(e,t,s,a){return new mn(e,1,t,De.min(),s,a,0)}static newNoDocument(e,t){return new mn(e,2,t,De.min(),De.min(),ni.empty(),0)}static newUnknownDocument(e,t){return new mn(e,3,t,De.min(),De.min(),ni.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(De.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ni.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ni.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=De.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Af{constructor(e,t){this.position=e,this.inclusive=t}}function tS(i,e,t){let s=0;for(let a=0;a<i.position.length;a++){const l=e[a],c=i.position[a];if(l.field.isKeyField()?s=be.comparator(be.fromName(c.referenceValue),t.key):s=Yo(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function nS(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!qi(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class wf{constructor(e,t="asc"){this.field=e,this.dir=t}}function Nk(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class uw{}class Lt extends uw{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Ok(e,t,s):t==="array-contains"?new Mk(e,s):t==="in"?new Pk(e,s):t==="not-in"?new Vk(e,s):t==="array-contains-any"?new Lk(e,s):new Lt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new xk(e,s):new kk(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Yo(t,this.value)):t!==null&&Dr(this.value)===Dr(t)&&this.matchesComparison(Yo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gi extends uw{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Gi(e,t)}matches(e){return cw(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function cw(i){return i.op==="and"}function hw(i){return Dk(i)&&cw(i)}function Dk(i){for(const e of i.filters)if(e instanceof Gi)return!1;return!0}function Q_(i){if(i instanceof Lt)return i.field.canonicalString()+i.op.toString()+$o(i.value);if(hw(i))return i.filters.map(e=>Q_(e)).join(",");{const e=i.filters.map(t=>Q_(t)).join(",");return`${i.op}(${e})`}}function fw(i,e){return i instanceof Lt?function(s,a){return a instanceof Lt&&s.op===a.op&&s.field.isEqual(a.field)&&qi(s.value,a.value)}(i,e):i instanceof Gi?function(s,a){return a instanceof Gi&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce((l,c,d)=>l&&fw(c,a.filters[d]),!0):!1}(i,e):void Ne()}function dw(i){return i instanceof Lt?function(t){return`${t.field.canonicalString()} ${t.op} ${$o(t.value)}`}(i):i instanceof Gi?function(t){return t.op.toString()+" {"+t.getFilters().map(dw).join(" ,")+"}"}(i):"Filter"}class Ok extends Lt{constructor(e,t,s){super(e,t,s),this.key=be.fromName(s.referenceValue)}matches(e){const t=be.comparator(e.key,this.key);return this.matchesComparison(t)}}class xk extends Lt{constructor(e,t){super(e,"in",t),this.keys=pw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class kk extends Lt{constructor(e,t){super(e,"not-in",t),this.keys=pw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function pw(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>be.fromName(s.referenceValue))}class Mk extends Lt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Gm(t)&&Xu(t.arrayValue,this.value)}}class Pk extends Lt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Xu(this.value.arrayValue,t)}}class Vk extends Lt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Xu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Xu(this.value.arrayValue,t)}}class Lk extends Lt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Gm(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Xu(this.value.arrayValue,s))}}/**
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
 */class Uk{constructor(e,t=null,s=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.le=null}}function iS(i,e=null,t=[],s=[],a=null,l=null,c=null){return new Uk(i,e,t,s,a,l,c)}function Km(i){const e=xe(i);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Q_(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),qf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>$o(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>$o(s)).join(",")),e.le=t}return e.le}function Wm(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!Nk(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!fw(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!nS(i.startAt,e.startAt)&&nS(i.endAt,e.endAt)}function Y_(i){return be.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,t=null,s=[],a=[],l=null,c="F",d=null,_=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=_,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function jk(i,e,t,s,a,l,c,d){return new Kf(i,e,t,s,a,l,c,d)}function Qm(i){return new Kf(i)}function sS(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function Bk(i){return i.collectionGroup!==null}function ju(i){const e=xe(i);if(e.he===null){e.he=[];const t=new Set;for(const l of e.explicitOrderBy)e.he.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new jt(an.comparator);return c.filters.forEach(_=>{_.getFlattenedFilters().forEach(m=>{m.isInequality()&&(d=d.add(m.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.he.push(new wf(l,s))}),t.has(an.keyField().canonicalString())||e.he.push(new wf(an.keyField(),s))}return e.he}function Hi(i){const e=xe(i);return e.Pe||(e.Pe=zk(e,ju(i))),e.Pe}function zk(i,e){if(i.limitType==="F")return iS(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new wf(a.field,l)});const t=i.endAt?new Af(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Af(i.startAt.position,i.startAt.inclusive):null;return iS(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function $_(i,e,t){return new Kf(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Wf(i,e){return Wm(Hi(i),Hi(e))&&i.limitType===e.limitType}function _w(i){return`${Km(Hi(i))}|lt:${i.limitType}`}function xo(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(a=>dw(a)).join(", ")}]`),qf(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(a=>$o(a)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(a=>$o(a)).join(",")),`Target(${s})`}(Hi(i))}; limitType=${i.limitType})`}function Qf(i,e){return e.isFoundDocument()&&function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):be.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(i,e)&&function(s,a){for(const l of ju(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(i,e)&&function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0}(i,e)&&function(s,a){return!(s.startAt&&!function(c,d,_){const m=tS(c,d,_);return c.inclusive?m<=0:m<0}(s.startAt,ju(s),a)||s.endAt&&!function(c,d,_){const m=tS(c,d,_);return c.inclusive?m>=0:m>0}(s.endAt,ju(s),a))}(i,e)}function Hk(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function mw(i){return(e,t)=>{let s=!1;for(const a of ju(i)){const l=Fk(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function Fk(i,e,t){const s=i.field.isKeyField()?be.comparator(e.key,t.key):function(l,c,d){const _=c.data.field(l),m=d.data.field(l);return _!==null&&m!==null?Yo(_,m):Ne()}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return Ne()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){ka(this.inner,(t,s)=>{for(const[a,l]of s)e(a,l)})}isEmpty(){return ew(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=new yt(be.comparator);function Is(){return qk}const gw=new yt(be.comparator);function Ou(...i){let e=gw;for(const t of i)e=e.insert(t.key,t);return e}function yw(i){let e=gw;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function ga(){return Bu()}function vw(){return Bu()}function Bu(){return new Ma(i=>i.toString(),(i,e)=>i.isEqual(e))}const Gk=new yt(be.comparator),Kk=new jt(be.comparator);function Be(...i){let e=Kk;for(const t of i)e=e.add(t);return e}const Wk=new jt(Fe);function Qk(){return Wk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ef(e)?"-0":e}}function Ew(i){return{integerValue:""+i}}function Yk(i,e){return Tk(e)?Ew(e):Ym(i,e)}/**
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
 */class Yf{constructor(){this._=void 0}}function $k(i,e,t){return i instanceof bf?function(a,l){const c={fields:{[iw]:{stringValue:nw},[rw]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&qm(l)&&(l=Gf(l)),l&&(c.fields[sw]=l),{mapValue:c}}(t,e):i instanceof Zu?Sw(i,e):i instanceof Ju?Aw(i,e):function(a,l){const c=Tw(a,l),d=rS(c)+rS(a.Ie);return W_(c)&&W_(a.Ie)?Ew(d):Ym(a.serializer,d)}(i,e)}function Xk(i,e,t){return i instanceof Zu?Sw(i,e):i instanceof Ju?Aw(i,e):t}function Tw(i,e){return i instanceof Cf?function(s){return W_(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class bf extends Yf{}class Zu extends Yf{constructor(e){super(),this.elements=e}}function Sw(i,e){const t=ww(e);for(const s of i.elements)t.some(a=>qi(a,s))||t.push(s);return{arrayValue:{values:t}}}class Ju extends Yf{constructor(e){super(),this.elements=e}}function Aw(i,e){let t=ww(e);for(const s of i.elements)t=t.filter(a=>!qi(a,s));return{arrayValue:{values:t}}}class Cf extends Yf{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function rS(i){return Ct(i.integerValue||i.doubleValue)}function ww(i){return Gm(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function Zk(i,e){return i.field.isEqual(e.field)&&function(s,a){return s instanceof Zu&&a instanceof Zu||s instanceof Ju&&a instanceof Ju?Qo(s.elements,a.elements,qi):s instanceof Cf&&a instanceof Cf?qi(s.Ie,a.Ie):s instanceof bf&&a instanceof bf}(i.transform,e.transform)}class Jk{constructor(e,t){this.version=e,this.transformResults=t}}class ws{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ws}static exists(e){return new ws(void 0,e)}static updateTime(e){return new ws(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ef(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class $f{}function bw(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Rw(i.key,ws.none()):new fc(i.key,i.data,ws.none());{const t=i.data,s=ni.empty();let a=new jt(an.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new Pa(i.key,s,new mi(a.toArray()),ws.none())}}function e2(i,e,t){i instanceof fc?function(a,l,c){const d=a.value.clone(),_=oS(a.fieldTransforms,l,c.transformResults);d.setAll(_),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(i,e,t):i instanceof Pa?function(a,l,c){if(!ef(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=oS(a.fieldTransforms,l,c.transformResults),_=l.data;_.setAll(Cw(a)),_.setAll(d),l.convertToFoundDocument(c.version,_).setHasCommittedMutations()}(i,e,t):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function zu(i,e,t,s){return i instanceof fc?function(l,c,d,_){if(!ef(l.precondition,c))return d;const m=l.value.clone(),E=lS(l.fieldTransforms,_,c);return m.setAll(E),c.convertToFoundDocument(c.version,m).setHasLocalMutations(),null}(i,e,t,s):i instanceof Pa?function(l,c,d,_){if(!ef(l.precondition,c))return d;const m=lS(l.fieldTransforms,_,c),E=c.data;return E.setAll(Cw(l)),E.setAll(m),c.convertToFoundDocument(c.version,E).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(S=>S.field))}(i,e,t,s):function(l,c,d){return ef(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(i,e,t)}function t2(i,e){let t=null;for(const s of i.fieldTransforms){const a=e.data.field(s.field),l=Tw(s.transform,a||null);l!=null&&(t===null&&(t=ni.empty()),t.set(s.field,l))}return t||null}function aS(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&Qo(s,a,(l,c)=>Zk(l,c))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class fc extends $f{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Pa extends $f{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Cw(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function oS(i,e,t){const s=new Map;it(i.length===t.length);for(let a=0;a<t.length;a++){const l=i[a],c=l.transform,d=e.data.field(l.field);s.set(l.field,Xk(c,d,t[a]))}return s}function lS(i,e,t){const s=new Map;for(const a of i){const l=a.transform,c=t.data.field(a.field);s.set(a.field,$k(l,c,e))}return s}class Rw extends $f{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class n2 extends $f{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&e2(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=zu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=zu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=vw();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const _=bw(c,d);_!==null&&s.set(a.key,_),c.isValidDocument()||c.convertToNoDocument(De.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Be())}isEqual(e){return this.batchId===e.batchId&&Qo(this.mutations,e.mutations,(t,s)=>aS(t,s))&&Qo(this.baseMutations,e.baseMutations,(t,s)=>aS(t,s))}}class $m{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){it(e.mutations.length===s.length);let a=function(){return Gk}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,s[c].version);return new $m(e,t,s,a)}}/**
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
 */class s2{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class r2{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dt,Ye;function a2(i){switch(i){case ne.OK:return Ne();case ne.CANCELLED:case ne.UNKNOWN:case ne.DEADLINE_EXCEEDED:case ne.RESOURCE_EXHAUSTED:case ne.INTERNAL:case ne.UNAVAILABLE:case ne.UNAUTHENTICATED:return!1;case ne.INVALID_ARGUMENT:case ne.NOT_FOUND:case ne.ALREADY_EXISTS:case ne.PERMISSION_DENIED:case ne.FAILED_PRECONDITION:case ne.ABORTED:case ne.OUT_OF_RANGE:case ne.UNIMPLEMENTED:case ne.DATA_LOSS:return!0;default:return Ne()}}function Iw(i){if(i===void 0)return Rs("GRPC error has no .code"),ne.UNKNOWN;switch(i){case Dt.OK:return ne.OK;case Dt.CANCELLED:return ne.CANCELLED;case Dt.UNKNOWN:return ne.UNKNOWN;case Dt.DEADLINE_EXCEEDED:return ne.DEADLINE_EXCEEDED;case Dt.RESOURCE_EXHAUSTED:return ne.RESOURCE_EXHAUSTED;case Dt.INTERNAL:return ne.INTERNAL;case Dt.UNAVAILABLE:return ne.UNAVAILABLE;case Dt.UNAUTHENTICATED:return ne.UNAUTHENTICATED;case Dt.INVALID_ARGUMENT:return ne.INVALID_ARGUMENT;case Dt.NOT_FOUND:return ne.NOT_FOUND;case Dt.ALREADY_EXISTS:return ne.ALREADY_EXISTS;case Dt.PERMISSION_DENIED:return ne.PERMISSION_DENIED;case Dt.FAILED_PRECONDITION:return ne.FAILED_PRECONDITION;case Dt.ABORTED:return ne.ABORTED;case Dt.OUT_OF_RANGE:return ne.OUT_OF_RANGE;case Dt.UNIMPLEMENTED:return ne.UNIMPLEMENTED;case Dt.DATA_LOSS:return ne.DATA_LOSS;default:return Ne()}}(Ye=Dt||(Dt={}))[Ye.OK=0]="OK",Ye[Ye.CANCELLED=1]="CANCELLED",Ye[Ye.UNKNOWN=2]="UNKNOWN",Ye[Ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ye[Ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ye[Ye.NOT_FOUND=5]="NOT_FOUND",Ye[Ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ye[Ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ye[Ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ye[Ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ye[Ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ye[Ye.ABORTED=10]="ABORTED",Ye[Ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ye[Ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ye[Ye.INTERNAL=13]="INTERNAL",Ye[Ye.UNAVAILABLE=14]="UNAVAILABLE",Ye[Ye.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function o2(){return new TextEncoder}/**
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
 */const l2=new Ar([4294967295,4294967295],0);function uS(i){const e=o2().encode(i),t=new GA;return t.update(e),new Uint8Array(t.digest())}function cS(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ar([t,s],0),new Ar([a,l],0)]}class Xm{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new xu(`Invalid padding: ${t}`);if(s<0)throw new xu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new xu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new xu(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=Ar.fromNumber(this.Ee)}Ae(e,t,s){let a=e.add(t.multiply(Ar.fromNumber(s)));return a.compare(l2)===1&&(a=new Ar([a.getBits(0),a.getBits(1)],0)),a.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=uS(e),[s,a]=cS(t);for(let l=0;l<this.hashCount;l++){const c=this.Ae(s,a,l);if(!this.Re(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new Xm(l,a,t);return s.forEach(d=>c.insert(d)),c}insert(e){if(this.Ee===0)return;const t=uS(e),[s,a]=cS(t);for(let l=0;l<this.hashCount;l++){const c=this.Ae(s,a,l);this.Ve(c)}}Ve(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class xu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,dc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Xf(De.min(),a,new yt(Fe),Is(),Be())}}class dc{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new dc(s,t,Be(),Be(),Be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,t,s,a){this.me=e,this.removedTargetIds=t,this.key=s,this.fe=a}}class Nw{constructor(e,t){this.targetId=e,this.ge=t}}class Dw{constructor(e,t,s=on.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class hS{constructor(){this.pe=0,this.ye=fS(),this.we=on.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=Be(),t=Be(),s=Be();return this.ye.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:Ne()}}),new dc(this.we,this.be,e,t,s)}Me(){this.Se=!1,this.ye=fS()}xe(e,t){this.Se=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,it(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class u2{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Is(),this.$e=Fh(),this.Ke=Fh(),this.Ue=new yt(Fe)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const s=this.He(t);switch(e.state){case 0:this.Je(t)&&s.Ce(e.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(e.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(t);break;case 3:this.Je(t)&&(s.Le(),s.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),s.Ce(e.resumeToken));break;default:Ne()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((s,a)=>{this.Je(a)&&t(a)})}Ze(e){const t=e.targetId,s=e.ge.count,a=this.Xe(t);if(a){const l=a.target;if(Y_(l))if(s===0){const c=new be(l.path);this.ze(t,c,mn.newNoDocument(c,De.min()))}else it(s===1);else{const c=this.et(t);if(c!==s){const d=this.tt(e),_=d?this.nt(d,e,c):1;if(_!==0){this.Ye(t);const m=_===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(t,m)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=Nr(s).toUint8Array()}catch(_){if(_ instanceof tw)return Wo("Decoding the base64 bloom filter in existence filter failed ("+_.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw _}try{d=new Xm(c,a,l)}catch(_){return Wo(_ instanceof xu?"BloomFilter error: ":"Applying bloom filter failed: ",_),null}return d.Ee===0?null:d}nt(e,t,s){return t.ge.count===s-this.st(e,t.targetId)?0:2}st(e,t){const s=this.ke.getRemoteKeysForTarget(t);let a=0;return s.forEach(l=>{const c=this.ke.it(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.ze(t,l,null),a++)}),a}ot(e){const t=new Map;this.qe.forEach((l,c)=>{const d=this.Xe(c);if(d){if(l.current&&Y_(d.target)){const _=new be(d.target.path);this._t(_).has(c)||this.ut(c,_)||this.ze(c,_,mn.newNoDocument(_,e))}l.ve&&(t.set(c,l.Fe()),l.Me())}});let s=Be();this.Ke.forEach((l,c)=>{let d=!0;c.forEachWhile(_=>{const m=this.Xe(_);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(s=s.add(l))}),this.Qe.forEach((l,c)=>c.setReadTime(e));const a=new Xf(e,t,this.Ue,this.Qe,s);return this.Qe=Is(),this.$e=Fh(),this.Ke=Fh(),this.Ue=new yt(Fe),a}Ge(e,t){if(!this.Je(e))return;const s=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,s),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,s){if(!this.Je(e))return;const a=this.He(e);this.ut(e,t)?a.xe(t,1):a.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),s&&(this.Qe=this.Qe.insert(t,s))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new hS,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new jt(Fe),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new jt(Fe),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||pe("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new hS),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function Fh(){return new yt(be.comparator)}function fS(){return new yt(be.comparator)}const c2={asc:"ASCENDING",desc:"DESCENDING"},h2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},f2={and:"AND",or:"OR"};class d2{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function X_(i,e){return i.useProto3Json||qf(e)?e:{value:e}}function Rf(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ow(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function p2(i,e){return Rf(i,e.toTimestamp())}function Fi(i){return it(!!i),De.fromTimestamp(function(t){const s=Ir(t);return new Ut(s.seconds,s.nanos)}(i))}function Zm(i,e){return Z_(i,e).canonicalString()}function Z_(i,e){const t=function(a){return new At(["projects",a.projectId,"databases",a.database])}(i).child("documents");return e===void 0?t:t.child(e)}function xw(i){const e=At.fromString(i);return it(Lw(e)),e}function J_(i,e){return Zm(i.databaseId,e.path)}function v_(i,e){const t=xw(e);if(t.get(1)!==i.databaseId.projectId)throw new we(ne.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new we(ne.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new be(Mw(t))}function kw(i,e){return Zm(i.databaseId,e)}function _2(i){const e=xw(i);return e.length===4?At.emptyPath():Mw(e)}function em(i){return new At(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Mw(i){return it(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function dS(i,e,t){return{name:J_(i,e),fields:t.value.mapValue.fields}}function m2(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:Ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(m,E){return m.useProto3Json?(it(E===void 0||typeof E=="string"),on.fromBase64String(E||"")):(it(E===void 0||E instanceof Buffer||E instanceof Uint8Array),on.fromUint8Array(E||new Uint8Array))}(i,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(m){const E=m.code===void 0?ne.UNKNOWN:Iw(m.code);return new we(E,m.message||"")}(c);t=new Dw(s,a,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=v_(i,s.document.name),l=Fi(s.document.updateTime),c=s.document.createTime?Fi(s.document.createTime):De.min(),d=new ni({mapValue:{fields:s.document.fields}}),_=mn.newFoundDocument(a,l,c,d),m=s.targetIds||[],E=s.removedTargetIds||[];t=new tf(m,E,_.key,_)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=v_(i,s.document),l=s.readTime?Fi(s.readTime):De.min(),c=mn.newNoDocument(a,l),d=s.removedTargetIds||[];t=new tf([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=v_(i,s.document),l=s.removedTargetIds||[];t=new tf([],l,a,null)}else{if(!("filter"in e))return Ne();{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new r2(a,l),d=s.targetId;t=new Nw(d,c)}}return t}function g2(i,e){let t;if(e instanceof fc)t={update:dS(i,e.key,e.value)};else if(e instanceof Rw)t={delete:J_(i,e.key)};else if(e instanceof Pa)t={update:dS(i,e.key,e.data),updateMask:C2(e.fieldMask)};else{if(!(e instanceof n2))return Ne();t={verify:J_(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(l,c){const d=c.transform;if(d instanceof bf)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Zu)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Ju)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Cf)return{fieldPath:c.field.canonicalString(),increment:d.Ie};throw Ne()}(0,s))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:p2(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ne()}(i,e.precondition)),t}function y2(i,e){return i&&i.length>0?(it(e!==void 0),i.map(t=>function(a,l){let c=a.updateTime?Fi(a.updateTime):Fi(l);return c.isEqual(De.min())&&(c=Fi(l)),new Jk(c,a.transformResults||[])}(t,e))):[]}function v2(i,e){return{documents:[kw(i,e.path)]}}function E2(i,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=kw(i,a);const l=function(m){if(m.length!==0)return Vw(Gi.create(m,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(m){if(m.length!==0)return m.map(E=>function(I){return{field:ko(I.field),direction:A2(I.dir)}}(E))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=X_(i,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{ht:t,parent:a}}function T2(i){let e=_2(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){it(s===1);const E=t.from[0];E.allDescendants?a=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=function(S){const I=Pw(S);return I instanceof Gi&&hw(I)?I.getFilters():[I]}(t.where));let c=[];t.orderBy&&(c=function(S){return S.map(I=>function(F){return new wf(Mo(F.field),function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(F.direction))}(I))}(t.orderBy));let d=null;t.limit&&(d=function(S){let I;return I=typeof S=="object"?S.value:S,qf(I)?null:I}(t.limit));let _=null;t.startAt&&(_=function(S){const I=!!S.before,L=S.values||[];return new Af(L,I)}(t.startAt));let m=null;return t.endAt&&(m=function(S){const I=!S.before,L=S.values||[];return new Af(L,I)}(t.endAt)),jk(e,a,c,l,d,"F",_,m)}function S2(i,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ne()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Pw(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Mo(t.unaryFilter.field);return Lt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Mo(t.unaryFilter.field);return Lt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Mo(t.unaryFilter.field);return Lt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Mo(t.unaryFilter.field);return Lt.create(c,"!=",{nullValue:"NULL_VALUE"});default:return Ne()}}(i):i.fieldFilter!==void 0?function(t){return Lt.create(Mo(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ne()}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Gi.create(t.compositeFilter.filters.map(s=>Pw(s)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Ne()}}(t.compositeFilter.op))}(i):Ne()}function A2(i){return c2[i]}function w2(i){return h2[i]}function b2(i){return f2[i]}function ko(i){return{fieldPath:i.canonicalString()}}function Mo(i){return an.fromServerFormat(i.fieldPath)}function Vw(i){return i instanceof Lt?function(t){if(t.op==="=="){if(eS(t.value))return{unaryFilter:{field:ko(t.field),op:"IS_NAN"}};if(JT(t.value))return{unaryFilter:{field:ko(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(eS(t.value))return{unaryFilter:{field:ko(t.field),op:"IS_NOT_NAN"}};if(JT(t.value))return{unaryFilter:{field:ko(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ko(t.field),op:w2(t.op),value:t.value}}}(i):i instanceof Gi?function(t){const s=t.getFilters().map(a=>Vw(a));return s.length===1?s[0]:{compositeFilter:{op:b2(t.op),filters:s}}}(i):Ne()}function C2(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Lw(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,t,s,a,l=De.min(),c=De.min(),d=on.EMPTY_BYTE_STRING,_=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=_}withSequenceNumber(e){return new vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(e){this.Tt=e}}function I2(i){const e=T2({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?$_(e,e.limit,"L"):e}/**
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
 */class N2{constructor(){this.Tn=new D2}addToCollectionParentIndex(e,t){return this.Tn.add(t),Z.resolve()}getCollectionParents(e,t){return Z.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return Z.resolve()}deleteFieldIndex(e,t){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,t){return Z.resolve()}getDocumentsMatchingTarget(e,t){return Z.resolve(null)}getIndexType(e,t){return Z.resolve(0)}getFieldIndexes(e,t){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,t){return Z.resolve(Rr.min())}getMinOffsetFromCollectionGroup(e,t){return Z.resolve(Rr.min())}updateCollectionGroup(e,t,s){return Z.resolve()}updateIndexEntries(e,t){return Z.resolve()}}class D2{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new jt(At.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new jt(At.comparator)).toArray()}}/**
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
 */const pS={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Uw=41943040;class In{static withCacheSize(e){return new In(e,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In.DEFAULT_COLLECTION_PERCENTILE=10,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,In.DEFAULT=new In(Uw,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),In.DISABLED=new In(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new Xo(0)}static Un(){return new Xo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S="LruGarbageCollector",O2=1048576;function mS([i,e],[t,s]){const a=Fe(i,t);return a===0?Fe(e,s):a}class x2{constructor(e){this.Hn=e,this.buffer=new jt(mS),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();mS(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class k2{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){pe(_S,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ll(t)?pe(_S,"Ignoring IndexedDB error during garbage collection: ",t):await ol(t)}await this.er(3e5)})}}class M2{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return Z.resolve(Ff.ae);const s=new x2(t);return this.tr.forEachTarget(e,a=>s.Zn(a.sequenceNumber)).next(()=>this.tr.rr(e,a=>s.Zn(a))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.tr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(pe("LruGarbageCollector","Garbage collection skipped; disabled"),Z.resolve(pS)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(pe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pS):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let s,a,l,c,d,_,m;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(S=>(S>this.params.maximumSequenceNumbersToCollect?(pe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),a=this.params.maximumSequenceNumbersToCollect):a=S,c=Date.now(),this.nthSequenceNumber(e,a))).next(S=>(s=S,d=Date.now(),this.removeTargets(e,s,t))).next(S=>(l=S,_=Date.now(),this.removeOrphanedDocuments(e,s))).next(S=>(m=Date.now(),Oo()<=je.DEBUG&&pe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-E}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(_-d)+`ms
	Removed ${S} documents in `+(m-_)+`ms
Total Duration: ${m-E}ms`),Z.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:S})))}}function P2(i,e){return new M2(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(){this.changes=new Ma(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,mn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?Z.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class L2{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(s=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(s!==null&&zu(s.mutation,a,mi.empty(),Ut.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Be()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Be()){const a=ga();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,s).next(l=>{let c=Ou();return l.forEach((d,_)=>{c=c.insert(d,_.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const s=ga();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Be()))}populateOverlays(e,t,s){const a=[];return s.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,s,a){let l=Is();const c=Bu(),d=function(){return Bu()}();return t.forEach((_,m)=>{const E=s.get(m.key);a.has(m.key)&&(E===void 0||E.mutation instanceof Pa)?l=l.insert(m.key,m):E!==void 0?(c.set(m.key,E.mutation.getFieldMask()),zu(E.mutation,m,E.mutation.getFieldMask(),Ut.now())):c.set(m.key,mi.empty())}),this.recalculateAndSaveOverlays(e,l).next(_=>(_.forEach((m,E)=>c.set(m,E)),t.forEach((m,E)=>{var S;return d.set(m,new L2(E,(S=c.get(m))!==null&&S!==void 0?S:null))}),d))}recalculateAndSaveOverlays(e,t){const s=Bu();let a=new yt((c,d)=>c-d),l=Be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(_=>{const m=t.get(_);if(m===null)return;let E=s.get(_)||mi.empty();E=d.applyToLocalView(m,E),s.set(_,E);const S=(a.get(d.batchId)||Be()).add(_);a=a.insert(d.batchId,S)})}).next(()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const _=d.getNext(),m=_.key,E=_.value,S=vw();E.forEach(I=>{if(!l.has(I)){const L=bw(t.get(I),s.get(I));L!==null&&S.set(I,L),l=l.add(I)}}),c.push(this.documentOverlayCache.saveOverlays(e,m,S))}return Z.waitFor(c)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,a){return function(c){return be.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Bk(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):Z.resolve(ga());let d=Qu,_=l;return c.next(m=>Z.forEach(m,(E,S)=>(d<S.largestBatchId&&(d=S.largestBatchId),l.get(E)?Z.resolve():this.remoteDocumentCache.getEntry(e,E).next(I=>{_=_.insert(E,I)}))).next(()=>this.populateOverlays(e,m,l)).next(()=>this.computeViews(e,_,m,Be())).next(E=>({batchId:d,changes:yw(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new be(t)).next(s=>{let a=Ou();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=Ou();return this.indexManager.getCollectionParents(e,l).next(d=>Z.forEach(d,_=>{const m=function(S,I){return new Kf(I,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)}(t,_.child(l));return this.getDocumentsMatchingCollectionQuery(e,m,s,a).next(E=>{E.forEach((S,I)=>{c=c.insert(S,I)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a))).next(c=>{l.forEach((_,m)=>{const E=m.getKey();c.get(E)===null&&(c=c.insert(E,mn.newInvalidDocument(E)))});let d=Ou();return c.forEach((_,m)=>{const E=l.get(_);E!==void 0&&zu(E.mutation,m,mi.empty(),Ut.now()),Qf(t,m)&&(d=d.insert(_,m))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return Z.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Fi(a.createTime)}}(t)),Z.resolve()}getNamedQuery(e,t){return Z.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(a){return{name:a.name,query:I2(a.bundledQuery),readTime:Fi(a.readTime)}}(t)),Z.resolve()}}/**
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
 */class B2{constructor(){this.overlays=new yt(be.comparator),this.Rr=new Map}getOverlay(e,t){return Z.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ga();return Z.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&s.set(a,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((a,l)=>{this.Et(e,t,l)}),Z.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.Rr.get(s);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.Rr.delete(s)),Z.resolve()}getOverlaysForCollection(e,t,s){const a=ga(),l=t.length+1,c=new be(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const _=d.getNext().value,m=_.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===l&&_.largestBatchId>s&&a.set(_.getKey(),_)}return Z.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new yt((m,E)=>m-E);const c=this.overlays.getIterator();for(;c.hasNext();){const m=c.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>s){let E=l.get(m.largestBatchId);E===null&&(E=ga(),l=l.insert(m.largestBatchId,E)),E.set(m.getKey(),m)}}const d=ga(),_=l.getIterator();for(;_.hasNext()&&(_.getNext().value.forEach((m,E)=>d.set(m,E)),!(d.size()>=a)););return Z.resolve(d)}Et(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.Rr.get(a.largestBatchId).delete(s.key);this.Rr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new s2(t,s));let l=this.Rr.get(t);l===void 0&&(l=Be(),this.Rr.set(t,l)),this.Rr.set(t,l.add(s.key))}}/**
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
 */class z2{constructor(){this.sessionToken=on.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(){this.Vr=new jt($t.mr),this.gr=new jt($t.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const s=new $t(e,t);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.wr(new $t(e,t))}br(e,t){e.forEach(s=>this.removeReference(s,t))}Sr(e){const t=new be(new At([])),s=new $t(t,e),a=new $t(t,e+1),l=[];return this.gr.forEachInRange([s,a],c=>{this.wr(c),l.push(c.key)}),l}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new be(new At([])),s=new $t(t,e),a=new $t(t,e+1);let l=Be();return this.gr.forEachInRange([s,a],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new $t(e,0),s=this.Vr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class $t{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return be.comparator(e.key,t.key)||Fe(e.Cr,t.Cr)}static pr(e,t){return Fe(e.Cr,t.Cr)||be.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new jt($t.mr)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new i2(l,t,s,a);this.mutationQueue.push(c);for(const d of a)this.Mr=this.Mr.add(new $t(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return Z.resolve(c)}lookupMutationBatch(e,t){return Z.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.Nr(s),l=a<0?0:a;return Z.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?Fm:this.Fr-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new $t(t,0),a=new $t(t,Number.POSITIVE_INFINITY),l=[];return this.Mr.forEachInRange([s,a],c=>{const d=this.Or(c.Cr);l.push(d)}),Z.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new jt(Fe);return t.forEach(a=>{const l=new $t(a,0),c=new $t(a,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([l,c],d=>{s=s.add(d.Cr)})}),Z.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;be.isDocumentKey(l)||(l=l.child(""));const c=new $t(new be(l),0);let d=new jt(Fe);return this.Mr.forEachWhile(_=>{const m=_.key.path;return!!s.isPrefixOf(m)&&(m.length===a&&(d=d.add(_.Cr)),!0)},c),Z.resolve(this.Br(d))}Br(e){const t=[];return e.forEach(s=>{const a=this.Or(s);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){it(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return Z.forEach(t.mutations,a=>{const l=new $t(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Mr=s})}qn(e){}containsKey(e,t){const s=new $t(t,0),a=this.Mr.firstAfterOrEqual(s);return Z.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e){this.kr=e,this.docs=function(){return new yt(be.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.kr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return Z.resolve(s?s.document.mutableCopy():mn.newInvalidDocument(t))}getEntries(e,t){let s=Is();return t.forEach(a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():mn.newInvalidDocument(a))}),Z.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=Is();const c=t.path,d=new be(c.child("__id-9223372036854775808__")),_=this.docs.getIteratorFrom(d);for(;_.hasNext();){const{key:m,value:{document:E}}=_.getNext();if(!c.isPrefixOf(m.path))break;m.path.length>c.length+1||gk(mk(E),s)<=0||(a.has(E.key)||Qf(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return Z.resolve(l)}getAllFromCollectionGroup(e,t,s,a){Ne()}qr(e,t){return Z.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new q2(this)}getSize(e){return Z.resolve(this.size)}}class q2 extends V2{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((s,a)=>{a.isValidDocument()?t.push(this.Ir.addEntry(e,a)):this.Ir.removeEntry(s)}),Z.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(e){this.persistence=e,this.Qr=new Ma(t=>Km(t),Wm),this.lastRemoteSnapshotVersion=De.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Jm,this.targetCount=0,this.Ur=Xo.Kn()}forEachTarget(e,t){return this.Qr.forEach((s,a)=>t(a)),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.$r&&(this.$r=t),Z.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new Xo(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,Z.resolve()}updateTargetData(e,t){return this.zn(t),Z.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.Sr(t.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.Qr.forEach((c,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.Qr.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),Z.waitFor(l).next(()=>a)}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,t){const s=this.Qr.get(t)||null;return Z.resolve(s)}addMatchingKeys(e,t,s){return this.Kr.yr(t,s),Z.resolve()}removeMatchingKeys(e,t,s){this.Kr.br(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),Z.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Kr.Sr(t),Z.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Kr.vr(t);return Z.resolve(s)}containsKey(e,t){return Z.resolve(this.Kr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Ff(0),this.zr=!1,this.zr=!0,this.jr=new z2,this.referenceDelegate=e(this),this.Hr=new G2(this),this.indexManager=new N2,this.remoteDocumentCache=function(a){return new F2(a)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new R2(t),this.Yr=new j2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new B2,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Wr[e.toKey()];return s||(s=new H2(t,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,s){pe("MemoryPersistence","Starting transaction:",e);const a=new K2(this.Gr.next());return this.referenceDelegate.Zr(),s(a).next(l=>this.referenceDelegate.Xr(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}ei(e,t){return Z.or(Object.values(this.Wr).map(s=>()=>s.containsKey(e,t)))}}class K2 extends vk{constructor(e){super(),this.currentSequenceNumber=e}}class eg{constructor(e){this.persistence=e,this.ti=new Jm,this.ni=null}static ri(e){return new eg(e)}get ii(){if(this.ni)return this.ni;throw Ne()}addReference(e,t,s){return this.ti.addReference(s,t),this.ii.delete(s.toString()),Z.resolve()}removeReference(e,t,s){return this.ti.removeReference(s,t),this.ii.add(s.toString()),Z.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),Z.resolve()}removeTarget(e,t){this.ti.Sr(t.targetId).forEach(a=>this.ii.add(a.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.ii.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.ii,s=>{const a=be.fromPath(s);return this.si(e,a).next(l=>{l||t.removeEntry(a,De.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(s=>{s?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return Z.or([()=>Z.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class If{constructor(e,t){this.persistence=e,this.oi=new Ma(s=>Sk(s.path),(s,a)=>s.isEqual(a)),this.garbageCollector=P2(this,t)}static ri(e,t){return new If(e,t)}Zr(){}Xr(e){return Z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(a=>s+a))}sr(e){let t=0;return this.rr(e,s=>{t++}).next(()=>t)}rr(e,t){return Z.forEach(this.oi,(s,a)=>this.ar(e,s,a).next(l=>l?Z.resolve():t(a)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.qr(e,c=>this.ar(e,c,t).next(d=>{d||(s++,l.removeEntry(c,De.min()))})).next(()=>l.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),Z.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),Z.resolve()}removeReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),Z.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),Z.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Zh(e.data.value)),t}ar(e,t,s){return Z.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.oi.get(t);return Z.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Hi=s,this.Ji=a}static Yi(e,t){let s=Be(),a=Be();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new tg(e,t.fromCache,s,a)}}/**
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
 */class W2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Q2{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return jR()?8:Ek(yn())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.rs(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.ss(e,t,a,s).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new W2;return this._s(e,t,c).next(d=>{if(l.result=d,this.Xi)return this.us(e,t,c,d.size)})}).next(()=>l.result)}us(e,t,s,a){return s.documentReadCount<this.es?(Oo()<=je.DEBUG&&pe("QueryEngine","SDK will not create cache indexes for query:",xo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),Z.resolve()):(Oo()<=je.DEBUG&&pe("QueryEngine","Query:",xo(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.ts*a?(Oo()<=je.DEBUG&&pe("QueryEngine","The SDK decides to create cache indexes for query:",xo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Hi(t))):Z.resolve())}rs(e,t){if(sS(t))return Z.resolve(null);let s=Hi(t);return this.indexManager.getIndexType(e,s).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=$_(t,null,"F"),s=Hi(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const c=Be(...l);return this.ns.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,s).next(_=>{const m=this.cs(t,d);return this.ls(t,m,c,_.readTime)?this.rs(e,$_(t,null,"F")):this.hs(e,m,t,_)}))})))}ss(e,t,s,a){return sS(t)||a.isEqual(De.min())?Z.resolve(null):this.ns.getDocuments(e,s).next(l=>{const c=this.cs(t,l);return this.ls(t,c,s,a)?Z.resolve(null):(Oo()<=je.DEBUG&&pe("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),xo(t)),this.hs(e,c,t,_k(a,Qu)).next(d=>d))})}cs(e,t){let s=new jt(mw(e));return t.forEach((a,l)=>{Qf(e,l)&&(s=s.add(l))}),s}ls(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}_s(e,t,s){return Oo()<=je.DEBUG&&pe("QueryEngine","Using full collection scan to execute query:",xo(t)),this.ns.getDocumentsMatchingQuery(e,t,Rr.min(),s)}hs(e,t,s,a){return this.ns.getDocumentsMatchingQuery(e,s,a).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng="LocalStore",Y2=3e8;class $2{constructor(e,t,s,a){this.persistence=e,this.Ps=t,this.serializer=a,this.Ts=new yt(Fe),this.Is=new Ma(l=>Km(l),Wm),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new U2(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function X2(i,e,t,s){return new $2(i,e,t,s)}async function Bw(i,e){const t=xe(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next(l=>(a=l,t.As(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const c=[],d=[];let _=Be();for(const m of a){c.push(m.batchId);for(const E of m.mutations)_=_.add(E.key)}for(const m of l){d.push(m.batchId);for(const E of m.mutations)_=_.add(E.key)}return t.localDocuments.getDocuments(s,_).next(m=>({Rs:m,removedBatchIds:c,addedBatchIds:d}))})})}function Z2(i,e){const t=xe(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const a=e.batch.keys(),l=t.ds.newChangeBuffer({trackRemovals:!0});return function(d,_,m,E){const S=m.batch,I=S.keys();let L=Z.resolve();return I.forEach(F=>{L=L.next(()=>E.getEntry(_,F)).next(Y=>{const z=m.docVersions.get(F);it(z!==null),Y.version.compareTo(z)<0&&(S.applyToRemoteDocument(Y,m),Y.isValidDocument()&&(Y.setReadTime(m.commitVersion),E.addEntry(Y)))})}),L.next(()=>d.mutationQueue.removeMutationBatch(_,S))}(t,s,e,l).next(()=>l.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(d){let _=Be();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(_=_.add(d.batch.mutations[m].key));return _}(e))).next(()=>t.localDocuments.getDocuments(s,a))})}function zw(i){const e=xe(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function J2(i,e){const t=xe(i),s=e.snapshotVersion;let a=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.ds.newChangeBuffer({trackRemovals:!0});a=t.Ts;const d=[];e.targetChanges.forEach((E,S)=>{const I=a.get(S);if(!I)return;d.push(t.Hr.removeMatchingKeys(l,E.removedDocuments,S).next(()=>t.Hr.addMatchingKeys(l,E.addedDocuments,S)));let L=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(S)!==null?L=L.withResumeToken(on.EMPTY_BYTE_STRING,De.min()).withLastLimboFreeSnapshotVersion(De.min()):E.resumeToken.approximateByteSize()>0&&(L=L.withResumeToken(E.resumeToken,s)),a=a.insert(S,L),function(Y,z,W){return Y.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=Y2?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(I,L,E)&&d.push(t.Hr.updateTargetData(l,L))});let _=Is(),m=Be();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))}),d.push(eM(l,c,e.documentUpdates).next(E=>{_=E.Vs,m=E.fs})),!s.isEqual(De.min())){const E=t.Hr.getLastRemoteSnapshotVersion(l).next(S=>t.Hr.setTargetsMetadata(l,l.currentSequenceNumber,s));d.push(E)}return Z.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,_,m)).next(()=>_)}).then(l=>(t.Ts=a,l))}function eM(i,e,t){let s=Be(),a=Be();return t.forEach(l=>s=s.add(l)),e.getEntries(i,s).next(l=>{let c=Is();return t.forEach((d,_)=>{const m=l.get(d);_.isFoundDocument()!==m.isFoundDocument()&&(a=a.add(d)),_.isNoDocument()&&_.version.isEqual(De.min())?(e.removeEntry(d,_.readTime),c=c.insert(d,_)):!m.isValidDocument()||_.version.compareTo(m.version)>0||_.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(_),c=c.insert(d,_)):pe(ng,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",_.version)}),{Vs:c,fs:a}})}function tM(i,e){const t=xe(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Fm),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function nM(i,e){const t=xe(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let a;return t.Hr.getTargetData(s,e).next(l=>l?(a=l,Z.resolve(a)):t.Hr.allocateTargetId(s).next(c=>(a=new vr(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.Hr.addTargetData(s,a).next(()=>a))))}).then(s=>{const a=t.Ts.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(s.targetId,s),t.Is.set(e,s.targetId)),s})}async function tm(i,e,t){const s=xe(i),a=s.Ts.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,c=>s.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!ll(c))throw c;pe(ng,`Failed to update sequence numbers for target ${e}: ${c}`)}s.Ts=s.Ts.remove(e),s.Is.delete(a.target)}function gS(i,e,t){const s=xe(i);let a=De.min(),l=Be();return s.persistence.runTransaction("Execute query","readwrite",c=>function(_,m,E){const S=xe(_),I=S.Is.get(E);return I!==void 0?Z.resolve(S.Ts.get(I)):S.Hr.getTargetData(m,E)}(s,c,Hi(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(c,d.targetId).next(_=>{l=_})}).next(()=>s.Ps.getDocumentsMatchingQuery(c,e,t?a:De.min(),t?l:Be())).next(d=>(iM(s,Hk(e),d),{documents:d,gs:l})))}function iM(i,e,t){let s=i.Es.get(e)||De.min();t.forEach((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)}),i.Es.set(e,s)}class yS{constructor(){this.activeTargetIds=Qk()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sM{constructor(){this.ho=new yS,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,s){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new yS,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class rM{To(e){}shutdown(){}}/**
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
 */const vS="ConnectivityMonitor";class ES{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){pe(vS,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){pe(vS,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let qh=null;function nm(){return qh===null?qh=function(){return 268435456+Math.round(2147483648*Math.random())}():qh++,"0x"+qh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_="RestConnection",aM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class oM{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${s}/databases/${a}`,this.wo=this.databaseId.database===Tf?`project_id=${s}`:`project_id=${s}&database_id=${a}`}bo(e,t,s,a,l){const c=nm(),d=this.So(e,t.toUriEncodedString());pe(E_,`Sending RPC '${e}' ${c}:`,d,s);const _={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(_,a,l),this.vo(e,d,_,s).then(m=>(pe(E_,`Received RPC '${e}' ${c}: `,m),m),m=>{throw Wo(E_,`RPC '${e}' ${c} failed with error: `,m,"url: ",d,"request:",s),m})}Co(e,t,s,a,l,c){return this.bo(e,t,s,a,l)}Do(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+al}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),s&&s.headers.forEach((a,l)=>e[l]=a)}So(e,t){const s=aM[e];return`${this.po}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn="WebChannelConnection";class uM extends oM{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,s,a){const l=nm();return new Promise((c,d)=>{const _=new KA;_.setWithCredentials(!0),_.listenOnce(WA.COMPLETE,()=>{try{switch(_.getLastErrorCode()){case Xh.NO_ERROR:const E=_.getResponseJson();pe(hn,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(E)),c(E);break;case Xh.TIMEOUT:pe(hn,`RPC '${e}' ${l} timed out`),d(new we(ne.DEADLINE_EXCEEDED,"Request time out"));break;case Xh.HTTP_ERROR:const S=_.getStatus();if(pe(hn,`RPC '${e}' ${l} failed with status:`,S,"response text:",_.getResponseText()),S>0){let I=_.getResponseJson();Array.isArray(I)&&(I=I[0]);const L=I==null?void 0:I.error;if(L&&L.status&&L.message){const F=function(z){const W=z.toLowerCase().replace(/_/g,"-");return Object.values(ne).indexOf(W)>=0?W:ne.UNKNOWN}(L.status);d(new we(F,L.message))}else d(new we(ne.UNKNOWN,"Server responded with status "+_.getStatus()))}else d(new we(ne.UNAVAILABLE,"Connection failed."));break;default:Ne()}}finally{pe(hn,`RPC '${e}' ${l} completed.`)}});const m=JSON.stringify(a);pe(hn,`RPC '${e}' ${l} sending request:`,a),_.send(t,"POST",m,s,15)})}Wo(e,t,s){const a=nm(),l=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=$A(),d=YA(),_={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(_.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(_.useFetchStreams=!0),this.Do(_.initMessageHeaders,t,s),_.encodeInitMessageHeaders=!0;const E=l.join("");pe(hn,`Creating RPC '${e}' stream ${a}: ${E}`,_);const S=c.createWebChannel(E,_);let I=!1,L=!1;const F=new lM({Fo:z=>{L?pe(hn,`Not sending because RPC '${e}' stream ${a} is closed:`,z):(I||(pe(hn,`Opening RPC '${e}' stream ${a} transport.`),S.open(),I=!0),pe(hn,`RPC '${e}' stream ${a} sending:`,z),S.send(z))},Mo:()=>S.close()}),Y=(z,W,Q)=>{z.listen(W,te=>{try{Q(te)}catch(ce){setTimeout(()=>{throw ce},0)}})};return Y(S,Du.EventType.OPEN,()=>{L||(pe(hn,`RPC '${e}' stream ${a} transport opened.`),F.Qo())}),Y(S,Du.EventType.CLOSE,()=>{L||(L=!0,pe(hn,`RPC '${e}' stream ${a} transport closed`),F.Ko())}),Y(S,Du.EventType.ERROR,z=>{L||(L=!0,Wo(hn,`RPC '${e}' stream ${a} transport errored:`,z),F.Ko(new we(ne.UNAVAILABLE,"The operation could not be completed")))}),Y(S,Du.EventType.MESSAGE,z=>{var W;if(!L){const Q=z.data[0];it(!!Q);const te=Q,ce=(te==null?void 0:te.error)||((W=te[0])===null||W===void 0?void 0:W.error);if(ce){pe(hn,`RPC '${e}' stream ${a} received error:`,ce);const me=ce.status;let Te=function(b){const D=Dt[b];if(D!==void 0)return Iw(D)}(me),O=ce.message;Te===void 0&&(Te=ne.INTERNAL,O="Unknown error status: "+me+" with message "+ce.message),L=!0,F.Ko(new we(Te,O)),S.close()}else pe(hn,`RPC '${e}' stream ${a} received:`,Q),F.Uo(Q)}}),Y(d,QA.STAT_EVENT,z=>{z.stat===G_.PROXY?pe(hn,`RPC '${e}' stream ${a} detected buffering proxy`):z.stat===G_.NOPROXY&&pe(hn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{F.$o()},0),F}}function T_(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(i){return new d2(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Ti=e,this.timerId=t,this.Go=s,this.zo=a,this.jo=l,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),a=Math.max(0,t-s);a>0&&pe("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,a,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS="PersistentStream";class Fw{constructor(e,t,s,a,l,c,d,_){this.Ti=e,this.n_=s,this.r_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=_,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Hw(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===ne.RESOURCE_EXHAUSTED?(Rs(t.toString()),Rs("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===ne.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,a])=>{this.i_===t&&this.V_(s,a)},s=>{e(()=>{const a=new we(ne.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(a)})})}V_(e,t){const s=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(a=>{s(()=>this.m_(a))}),this.stream.onMessage(a=>{s(()=>++this.__==1?this.g_(a):this.onNext(a))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return pe(TS,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(pe(TS,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cM extends Fw{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=m2(this.serializer,e),s=function(l){if(!("targetChange"in l))return De.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?De.min():c.readTime?Fi(c.readTime):De.min()}(e);return this.listener.p_(t,s)}y_(e){const t={};t.database=em(this.serializer),t.addTarget=function(l,c){let d;const _=c.target;if(d=Y_(_)?{documents:v2(l,_)}:{query:E2(l,_).ht},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=Ow(l,c.resumeToken);const m=X_(l,c.expectedCount);m!==null&&(d.expectedCount=m)}else if(c.snapshotVersion.compareTo(De.min())>0){d.readTime=Rf(l,c.snapshotVersion.toTimestamp());const m=X_(l,c.expectedCount);m!==null&&(d.expectedCount=m)}return d}(this.serializer,e);const s=S2(this.serializer,e);s&&(t.labels=s),this.I_(t)}w_(e){const t={};t.database=em(this.serializer),t.removeTarget=e,this.I_(t)}}class hM extends Fw{constructor(e,t,s,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return it(!!e.streamToken),this.lastStreamToken=e.streamToken,it(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){it(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=y2(e.writeResults,e.commitTime),s=Fi(e.commitTime);return this.listener.v_(s,t)}C_(){const e={};e.database=em(this.serializer),this.I_(e)}S_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>g2(this.serializer,s))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fM{}class dM extends fM{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.F_=!1}M_(){if(this.F_)throw new we(ne.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,s,a){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.bo(e,Z_(t,s),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new we(ne.UNKNOWN,l.toString())})}Co(e,t,s,a,l){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Co(e,Z_(t,s),a,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new we(ne.UNKNOWN,c.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class pM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Rs(t),this.N_=!1):pe("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="RemoteStore";class _M{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=l,this.z_.To(c=>{s.enqueueAndForget(async()=>{Va(this)&&(pe(Ra,"Restarting streams for network reachability change."),await async function(_){const m=xe(_);m.W_.add(4),await pc(m),m.j_.set("Unknown"),m.W_.delete(4),await Jf(m)}(this))})}),this.j_=new pM(s,a)}}async function Jf(i){if(Va(i))for(const e of i.G_)await e(!0)}async function pc(i){for(const e of i.G_)await e(!1)}function qw(i,e){const t=xe(i);t.U_.has(e.targetId)||(t.U_.set(e.targetId,e),ag(t)?rg(t):ul(t).c_()&&sg(t,e))}function ig(i,e){const t=xe(i),s=ul(t);t.U_.delete(e),s.c_()&&Gw(t,e),t.U_.size===0&&(s.c_()?s.P_():Va(t)&&t.j_.set("Unknown"))}function sg(i,e){if(i.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(De.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ul(i).y_(e)}function Gw(i,e){i.H_.Ne(e),ul(i).w_(e)}function rg(i){i.H_=new u2({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>i.U_.get(e)||null,it:()=>i.datastore.serializer.databaseId}),ul(i).start(),i.j_.B_()}function ag(i){return Va(i)&&!ul(i).u_()&&i.U_.size>0}function Va(i){return xe(i).W_.size===0}function Kw(i){i.H_=void 0}async function mM(i){i.j_.set("Online")}async function gM(i){i.U_.forEach((e,t)=>{sg(i,e)})}async function yM(i,e){Kw(i),ag(i)?(i.j_.q_(e),rg(i)):i.j_.set("Unknown")}async function vM(i,e,t){if(i.j_.set("Online"),e instanceof Dw&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const d of l.targetIds)a.U_.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.U_.delete(d),a.H_.removeTarget(d))}(i,e)}catch(s){pe(Ra,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Nf(i,s)}else if(e instanceof tf?i.H_.We(e):e instanceof Nw?i.H_.Ze(e):i.H_.je(e),!t.isEqual(De.min()))try{const s=await zw(i.localStore);t.compareTo(s)>=0&&await function(l,c){const d=l.H_.ot(c);return d.targetChanges.forEach((_,m)=>{if(_.resumeToken.approximateByteSize()>0){const E=l.U_.get(m);E&&l.U_.set(m,E.withResumeToken(_.resumeToken,c))}}),d.targetMismatches.forEach((_,m)=>{const E=l.U_.get(_);if(!E)return;l.U_.set(_,E.withResumeToken(on.EMPTY_BYTE_STRING,E.snapshotVersion)),Gw(l,_);const S=new vr(E.target,_,m,E.sequenceNumber);sg(l,S)}),l.remoteSyncer.applyRemoteEvent(d)}(i,t)}catch(s){pe(Ra,"Failed to raise snapshot:",s),await Nf(i,s)}}async function Nf(i,e,t){if(!ll(e))throw e;i.W_.add(1),await pc(i),i.j_.set("Offline"),t||(t=()=>zw(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{pe(Ra,"Retrying IndexedDB access"),await t(),i.W_.delete(1),await Jf(i)})}function Ww(i,e){return e().catch(t=>Nf(i,t,e))}async function ed(i){const e=xe(i),t=Or(e);let s=e.K_.length>0?e.K_[e.K_.length-1].batchId:Fm;for(;EM(e);)try{const a=await tM(e.localStore,s);if(a===null){e.K_.length===0&&t.P_();break}s=a.batchId,TM(e,a)}catch(a){await Nf(e,a)}Qw(e)&&Yw(e)}function EM(i){return Va(i)&&i.K_.length<10}function TM(i,e){i.K_.push(e);const t=Or(i);t.c_()&&t.b_&&t.S_(e.mutations)}function Qw(i){return Va(i)&&!Or(i).u_()&&i.K_.length>0}function Yw(i){Or(i).start()}async function SM(i){Or(i).C_()}async function AM(i){const e=Or(i);for(const t of i.K_)e.S_(t.mutations)}async function wM(i,e,t){const s=i.K_.shift(),a=$m.from(s,e,t);await Ww(i,()=>i.remoteSyncer.applySuccessfulWrite(a)),await ed(i)}async function bM(i,e){e&&Or(i).b_&&await async function(s,a){if(function(c){return a2(c)&&c!==ne.ABORTED}(a.code)){const l=s.K_.shift();Or(s).h_(),await Ww(s,()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a)),await ed(s)}}(i,e),Qw(i)&&Yw(i)}async function SS(i,e){const t=xe(i);t.asyncQueue.verifyOperationInProgress(),pe(Ra,"RemoteStore received new credentials");const s=Va(t);t.W_.add(3),await pc(t),s&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await Jf(t)}async function CM(i,e){const t=xe(i);e?(t.W_.delete(2),await Jf(t)):e||(t.W_.add(2),await pc(t),t.j_.set("Unknown"))}function ul(i){return i.J_||(i.J_=function(t,s,a){const l=xe(t);return l.M_(),new cM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{xo:mM.bind(null,i),No:gM.bind(null,i),Lo:yM.bind(null,i),p_:vM.bind(null,i)}),i.G_.push(async e=>{e?(i.J_.h_(),ag(i)?rg(i):i.j_.set("Unknown")):(await i.J_.stop(),Kw(i))})),i.J_}function Or(i){return i.Y_||(i.Y_=function(t,s,a){const l=xe(t);return l.M_(),new hM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{xo:()=>Promise.resolve(),No:SM.bind(null,i),Lo:bM.bind(null,i),D_:AM.bind(null,i),v_:wM.bind(null,i)}),i.G_.push(async e=>{e?(i.Y_.h_(),await ed(i)):(await i.Y_.stop(),i.K_.length>0&&(pe(Ra,`Stopping write stream with ${i.K_.length} pending writes`),i.K_=[]))})),i.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new wr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,d=new og(e,t,c,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new we(ne.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lg(i,e){if(Rs("AsyncQueue",`${e}: ${i}`),ll(i))return new we(ne.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{static emptySet(e){return new Fo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||be.comparator(t.key,s.key):(t,s)=>be.comparator(t.key,s.key),this.keyedMap=Ou(),this.sortedSet=new yt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Fo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Fo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(){this.Z_=new yt(be.comparator)}track(e){const t=e.doc.key,s=this.Z_.get(t);s?e.type!==0&&s.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&s.type!==1?this.Z_=this.Z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Z_=this.Z_.remove(t):e.type===1&&s.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):Ne():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class Zo{constructor(e,t,s,a,l,c,d,_,m){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=_,this.hasCachedResults=m}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new Zo(e,t,Fo.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RM{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class IM{constructor(){this.queries=wS(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,s){const a=xe(t),l=a.queries;a.queries=wS(),l.forEach((c,d)=>{for(const _ of d.ta)_.onError(s)})})(this,new we(ne.ABORTED,"Firestore shutting down"))}}function wS(){return new Ma(i=>_w(i),Wf)}async function NM(i,e){const t=xe(i);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.na()&&e.ra()&&(s=2):(l=new RM,s=e.ra()?0:1);try{switch(s){case 0:l.ea=await t.onListen(a,!0);break;case 1:l.ea=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=lg(c,`Initialization of query '${xo(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.ta.push(e),e.sa(t.onlineState),l.ea&&e.oa(l.ea)&&ug(t)}async function DM(i,e){const t=xe(i),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.ta.indexOf(e);c>=0&&(l.ta.splice(c,1),l.ta.length===0?a=e.ra()?0:1:!l.na()&&e.ra()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function OM(i,e){const t=xe(i);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.ta)d.oa(a)&&(s=!0);c.ea=a}}s&&ug(t)}function xM(i,e,t){const s=xe(i),a=s.queries.get(e);if(a)for(const l of a.ta)l.onError(t);s.queries.delete(e)}function ug(i){i.ia.forEach(e=>{e.next()})}var im,bS;(bS=im||(im={}))._a="default",bS.Cache="cache";class kM{constructor(e,t,s){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new Zo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const s=t!=="Offline";return(!this.options.Ta||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=Zo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==im.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e){this.key=e}}class Xw{constructor(e){this.key=e}}class MM{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Be(),this.mutatedKeys=Be(),this.ya=mw(e),this.wa=new Fo(this.ya)}get ba(){return this.fa}Sa(e,t){const s=t?t.Da:new AS,a=t?t.wa:this.wa;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const _=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,m=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((E,S)=>{const I=a.get(E),L=Qf(this.query,S)?S:null,F=!!I&&this.mutatedKeys.has(I.key),Y=!!L&&(L.hasLocalMutations||this.mutatedKeys.has(L.key)&&L.hasCommittedMutations);let z=!1;I&&L?I.data.isEqual(L.data)?F!==Y&&(s.track({type:3,doc:L}),z=!0):this.va(I,L)||(s.track({type:2,doc:L}),z=!0,(_&&this.ya(L,_)>0||m&&this.ya(L,m)<0)&&(d=!0)):!I&&L?(s.track({type:0,doc:L}),z=!0):I&&!L&&(s.track({type:1,doc:I}),z=!0,(_||m)&&(d=!0)),z&&(L?(c=c.add(L),l=Y?l.add(E):l.delete(E)):(c=c.delete(E),l=l.delete(E)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const E=this.query.limitType==="F"?c.last():c.first();c=c.delete(E.key),l=l.delete(E.key),s.track({type:1,doc:E})}return{wa:c,Da:s,ls:d,mutatedKeys:l}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const c=e.Da.X_();c.sort((E,S)=>function(L,F){const Y=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ne()}};return Y(L)-Y(F)}(E.type,S.type)||this.ya(E.doc,S.doc)),this.Ca(s),a=a!=null&&a;const d=t&&!a?this.Fa():[],_=this.pa.size===0&&this.current&&!a?1:0,m=_!==this.ga;return this.ga=_,c.length!==0||m?{snapshot:new Zo(this.query,e.wa,l,c,e.mutatedKeys,_===0,m,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:d}:{Ma:d}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new AS,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Be(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const t=[];return e.forEach(s=>{this.pa.has(s)||t.push(new Xw(s))}),this.pa.forEach(s=>{e.has(s)||t.push(new $w(s))}),t}Oa(e){this.fa=e.gs,this.pa=Be();const t=this.Sa(e.documents);return this.applyChanges(t,!0)}Na(){return Zo.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const cg="SyncEngine";class PM{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class VM{constructor(e){this.key=e,this.Ba=!1}}class LM{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.La={},this.ka=new Ma(d=>_w(d),Wf),this.qa=new Map,this.Qa=new Set,this.$a=new yt(be.comparator),this.Ka=new Map,this.Ua=new Jm,this.Wa={},this.Ga=new Map,this.za=Xo.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function UM(i,e,t=!0){const s=ib(i);let a;const l=s.ka.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.Na()):a=await Zw(s,e,t,!0),a}async function jM(i,e){const t=ib(i);await Zw(t,e,!0,!1)}async function Zw(i,e,t,s){const a=await nM(i.localStore,Hi(e)),l=a.targetId,c=i.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await BM(i,e,l,c==="current",a.resumeToken)),i.isPrimaryClient&&t&&qw(i.remoteStore,a),d}async function BM(i,e,t,s,a){i.Ha=(S,I,L)=>async function(Y,z,W,Q){let te=z.view.Sa(W);te.ls&&(te=await gS(Y.localStore,z.query,!1).then(({documents:O})=>z.view.Sa(O,te)));const ce=Q&&Q.targetChanges.get(z.targetId),me=Q&&Q.targetMismatches.get(z.targetId)!=null,Te=z.view.applyChanges(te,Y.isPrimaryClient,ce,me);return RS(Y,z.targetId,Te.Ma),Te.snapshot}(i,S,I,L);const l=await gS(i.localStore,e,!0),c=new MM(e,l.gs),d=c.Sa(l.documents),_=dc.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",a),m=c.applyChanges(d,i.isPrimaryClient,_);RS(i,t,m.Ma);const E=new PM(e,t,c);return i.ka.set(e,E),i.qa.has(t)?i.qa.get(t).push(e):i.qa.set(t,[e]),m.snapshot}async function zM(i,e,t){const s=xe(i),a=s.ka.get(e),l=s.qa.get(a.targetId);if(l.length>1)return s.qa.set(a.targetId,l.filter(c=>!Wf(c,e))),void s.ka.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await tm(s.localStore,a.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(a.targetId),t&&ig(s.remoteStore,a.targetId),sm(s,a.targetId)}).catch(ol)):(sm(s,a.targetId),await tm(s.localStore,a.targetId,!0))}async function HM(i,e){const t=xe(i),s=t.ka.get(e),a=t.qa.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),ig(t.remoteStore,s.targetId))}async function FM(i,e,t){const s=$M(i);try{const a=await function(c,d){const _=xe(c),m=Ut.now(),E=d.reduce((L,F)=>L.add(F.key),Be());let S,I;return _.persistence.runTransaction("Locally write mutations","readwrite",L=>{let F=Is(),Y=Be();return _.ds.getEntries(L,E).next(z=>{F=z,F.forEach((W,Q)=>{Q.isValidDocument()||(Y=Y.add(W))})}).next(()=>_.localDocuments.getOverlayedDocuments(L,F)).next(z=>{S=z;const W=[];for(const Q of d){const te=t2(Q,S.get(Q.key).overlayedDocument);te!=null&&W.push(new Pa(Q.key,te,lw(te.value.mapValue),ws.exists(!0)))}return _.mutationQueue.addMutationBatch(L,m,W,d)}).next(z=>{I=z;const W=z.applyToLocalDocumentSet(S,Y);return _.documentOverlayCache.saveOverlays(L,z.batchId,W)})}).then(()=>({batchId:I.batchId,changes:yw(S)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),function(c,d,_){let m=c.Wa[c.currentUser.toKey()];m||(m=new yt(Fe)),m=m.insert(d,_),c.Wa[c.currentUser.toKey()]=m}(s,a.batchId,t),await _c(s,a.changes),await ed(s.remoteStore)}catch(a){const l=lg(a,"Failed to persist write");t.reject(l)}}async function Jw(i,e){const t=xe(i);try{const s=await J2(t.localStore,e);e.targetChanges.forEach((a,l)=>{const c=t.Ka.get(l);c&&(it(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?c.Ba=!0:a.modifiedDocuments.size>0?it(c.Ba):a.removedDocuments.size>0&&(it(c.Ba),c.Ba=!1))}),await _c(t,s,e)}catch(s){await ol(s)}}function CS(i,e,t){const s=xe(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.ka.forEach((l,c)=>{const d=c.view.sa(e);d.snapshot&&a.push(d.snapshot)}),function(c,d){const _=xe(c);_.onlineState=d;let m=!1;_.queries.forEach((E,S)=>{for(const I of S.ta)I.sa(d)&&(m=!0)}),m&&ug(_)}(s.eventManager,e),a.length&&s.La.p_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function qM(i,e,t){const s=xe(i);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Ka.get(e),l=a&&a.key;if(l){let c=new yt(be.comparator);c=c.insert(l,mn.newNoDocument(l,De.min()));const d=Be().add(l),_=new Xf(De.min(),new Map,new yt(Fe),c,d);await Jw(s,_),s.$a=s.$a.remove(l),s.Ka.delete(e),hg(s)}else await tm(s.localStore,e,!1).then(()=>sm(s,e,t)).catch(ol)}async function GM(i,e){const t=xe(i),s=e.batch.batchId;try{const a=await Z2(t.localStore,e);tb(t,s,null),eb(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await _c(t,a)}catch(a){await ol(a)}}async function KM(i,e,t){const s=xe(i);try{const a=await function(c,d){const _=xe(c);return _.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let E;return _.mutationQueue.lookupMutationBatch(m,d).next(S=>(it(S!==null),E=S.keys(),_.mutationQueue.removeMutationBatch(m,S))).next(()=>_.mutationQueue.performConsistencyCheck(m)).next(()=>_.documentOverlayCache.removeOverlaysForBatchId(m,E,d)).next(()=>_.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,E)).next(()=>_.localDocuments.getDocuments(m,E))})}(s.localStore,e);tb(s,e,t),eb(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await _c(s,a)}catch(a){await ol(a)}}function eb(i,e){(i.Ga.get(e)||[]).forEach(t=>{t.resolve()}),i.Ga.delete(e)}function tb(i,e,t){const s=xe(i);let a=s.Wa[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Wa[s.currentUser.toKey()]=a}}function sm(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.qa.get(e))i.ka.delete(s),t&&i.La.Ja(s,t);i.qa.delete(e),i.isPrimaryClient&&i.Ua.Sr(e).forEach(s=>{i.Ua.containsKey(s)||nb(i,s)})}function nb(i,e){i.Qa.delete(e.path.canonicalString());const t=i.$a.get(e);t!==null&&(ig(i.remoteStore,t),i.$a=i.$a.remove(e),i.Ka.delete(t),hg(i))}function RS(i,e,t){for(const s of t)s instanceof $w?(i.Ua.addReference(s.key,e),WM(i,s)):s instanceof Xw?(pe(cg,"Document no longer in limbo: "+s.key),i.Ua.removeReference(s.key,e),i.Ua.containsKey(s.key)||nb(i,s.key)):Ne()}function WM(i,e){const t=e.key,s=t.path.canonicalString();i.$a.get(t)||i.Qa.has(s)||(pe(cg,"New document in limbo: "+t),i.Qa.add(s),hg(i))}function hg(i){for(;i.Qa.size>0&&i.$a.size<i.maxConcurrentLimboResolutions;){const e=i.Qa.values().next().value;i.Qa.delete(e);const t=new be(At.fromString(e)),s=i.za.next();i.Ka.set(s,new VM(t)),i.$a=i.$a.insert(t,s),qw(i.remoteStore,new vr(Hi(Qm(t.path)),s,"TargetPurposeLimboResolution",Ff.ae))}}async function _c(i,e,t){const s=xe(i),a=[],l=[],c=[];s.ka.isEmpty()||(s.ka.forEach((d,_)=>{c.push(s.Ha(_,e,t).then(m=>{var E;if((m||t)&&s.isPrimaryClient){const S=m?!m.fromCache:(E=t==null?void 0:t.targetChanges.get(_.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(_.targetId,S?"current":"not-current")}if(m){a.push(m);const S=tg.Yi(_.targetId,m);l.push(S)}}))}),await Promise.all(c),s.La.p_(a),await async function(_,m){const E=xe(_);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",S=>Z.forEach(m,I=>Z.forEach(I.Hi,L=>E.persistence.referenceDelegate.addReference(S,I.targetId,L)).next(()=>Z.forEach(I.Ji,L=>E.persistence.referenceDelegate.removeReference(S,I.targetId,L)))))}catch(S){if(!ll(S))throw S;pe(ng,"Failed to update sequence numbers: "+S)}for(const S of m){const I=S.targetId;if(!S.fromCache){const L=E.Ts.get(I),F=L.snapshotVersion,Y=L.withLastLimboFreeSnapshotVersion(F);E.Ts=E.Ts.insert(I,Y)}}}(s.localStore,l))}async function QM(i,e){const t=xe(i);if(!t.currentUser.isEqual(e)){pe(cg,"User change. New user:",e.toKey());const s=await Bw(t.localStore,e);t.currentUser=e,function(l,c){l.Ga.forEach(d=>{d.forEach(_=>{_.reject(new we(ne.CANCELLED,c))})}),l.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await _c(t,s.Rs)}}function YM(i,e){const t=xe(i),s=t.Ka.get(e);if(s&&s.Ba)return Be().add(s.key);{let a=Be();const l=t.qa.get(e);if(!l)return a;for(const c of l){const d=t.ka.get(c);a=a.unionWith(d.view.ba)}return a}}function ib(i){const e=xe(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=Jw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qM.bind(null,e),e.La.p_=OM.bind(null,e.eventManager),e.La.Ja=xM.bind(null,e.eventManager),e}function $M(i){const e=xe(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=GM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KM.bind(null,e),e}class Df{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Zf(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return X2(this.persistence,new Q2,e.initialUser,this.serializer)}Xa(e){return new jw(eg.ri,this.serializer)}Za(e){return new sM}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Df.provider={build:()=>new Df};class XM extends Df{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){it(this.persistence.referenceDelegate instanceof If);const s=this.persistence.referenceDelegate.garbageCollector;return new k2(s,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new jw(s=>If.ri(s,t),this.serializer)}}class rm{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>CS(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=QM.bind(null,this.syncEngine),await CM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new IM}()}createDatastore(e){const t=Zf(e.databaseInfo.databaseId),s=function(l){return new uM(l)}(e.databaseInfo);return function(l,c,d,_){return new dM(l,c,d,_)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,a,l,c,d){return new _M(s,a,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>CS(this.syncEngine,t,0),function(){return ES.D()?new ES:new rM}())}createSyncEngine(e,t){return function(a,l,c,d,_,m,E){const S=new LM(a,l,c,d,_,m);return E&&(S.ja=!0),S}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=xe(a);pe(Ra,"RemoteStore shutting down."),l.W_.add(5),await pc(l),l.z_.shutdown(),l.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}rm.provider={build:()=>new rm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ZM{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Rs("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="FirestoreClient";class JM{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=dn.UNAUTHENTICATED,this.clientId=ZA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async c=>{pe(xr,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(s,c=>(pe(xr,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=lg(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function S_(i,e){i.asyncQueue.verifyOperationInProgress(),pe(xr,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async a=>{s.isEqual(a)||(await Bw(e.localStore,a),s=a)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function IS(i,e){i.asyncQueue.verifyOperationInProgress();const t=await eP(i);pe(xr,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>SS(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,a)=>SS(e.remoteStore,a)),i._onlineComponents=e}async function eP(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){pe(xr,"Using user provided OfflineComponentProvider");try{await S_(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===ne.FAILED_PRECONDITION||a.code===ne.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;Wo("Error using user provided cache. Falling back to memory cache: "+t),await S_(i,new Df)}}else pe(xr,"Using default OfflineComponentProvider"),await S_(i,new XM(void 0));return i._offlineComponents}async function sb(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(pe(xr,"Using user provided OnlineComponentProvider"),await IS(i,i._uninitializedComponentsProvider._online)):(pe(xr,"Using default OnlineComponentProvider"),await IS(i,new rm))),i._onlineComponents}function tP(i){return sb(i).then(e=>e.syncEngine)}async function nP(i){const e=await sb(i),t=e.eventManager;return t.onListen=UM.bind(null,e.syncEngine),t.onUnlisten=zM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=jM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=HM.bind(null,e.syncEngine),t}function iP(i,e,t={}){const s=new wr;return i.asyncQueue.enqueueAndForget(async()=>function(l,c,d,_,m){const E=new ZM({next:I=>{E.su(),c.enqueueAndForget(()=>DM(l,S));const L=I.docs.has(d);!L&&I.fromCache?m.reject(new we(ne.UNAVAILABLE,"Failed to get document because the client is offline.")):L&&I.fromCache&&_&&_.source==="server"?m.reject(new we(ne.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(I)},error:I=>m.reject(I)}),S=new kM(Qm(d.path),E,{includeMetadataChanges:!0,Ta:!0});return NM(l,S)}(await nP(i),i.asyncQueue,e,t,s)),s.promise}/**
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
 */function rb(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sP(i,e,t){if(!t)throw new we(ne.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function rP(i,e,t,s){if(e===!0&&s===!0)throw new we(ne.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function DS(i){if(!be.isDocumentKey(i))throw new we(ne.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function fg(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Ne()}function ec(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new we(ne.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=fg(i);throw new we(ne.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab="firestore.googleapis.com",OS=!0;class xS{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new we(ne.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ab,this.ssl=OS}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:OS;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Uw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<O2)throw new we(ne.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rb((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new we(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new we(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new we(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class dg{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new we(ne.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new we(ne.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new ok;switch(s.type){case"firstParty":return new hk(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new we(ne.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=NS.get(t);s&&(pe("ComponentProvider","Removing Datastore"),NS.delete(t),s.terminate())}(this),Promise.resolve()}}function aP(i,e,t,s={}){var a;const l=(i=ec(i,dg))._getSettings(),c=Object.assign(Object.assign({},l),{emulatorOptions:i._getEmulatorOptions()}),d=`${e}:${t}`;l.host!==ab&&l.host!==d&&Wo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},l),{host:d,ssl:!1,emulatorOptions:s});if(!ya(_,c)&&(i._setSettings(_),s.mockUserToken)){let m,E;if(typeof s.mockUserToken=="string")m=s.mockUserToken,E=dn.MOCK_USER;else{m=kR(s.mockUserToken,(a=i._app)===null||a===void 0?void 0:a.options.projectId);const S=s.mockUserToken.sub||s.mockUserToken.user_id;if(!S)throw new we(ne.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new dn(S)}i._authCredentials=new lk(new XA(m,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new pg(this.firestore,e,this._query)}}class si{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new tc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new si(this.firestore,e,this._key)}}class tc extends pg{constructor(e,t,s){super(e,t,Qm(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new si(this.firestore,null,new be(e))}withConverter(e){return new tc(this.firestore,e,this._path)}}function ob(i,e,...t){if(i=Nn(i),arguments.length===1&&(e=ZA.newId()),sP("doc","path",e),i instanceof dg){const s=At.fromString(e,...t);return DS(s),new si(i,null,new be(s))}{if(!(i instanceof si||i instanceof tc))throw new we(ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(At.fromString(e,...t));return DS(s),new si(i.firestore,i instanceof tc?i.converter:null,new be(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS="AsyncQueue";class MS{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Hw(this,"async_queue_retry"),this.bu=()=>{const s=T_();s&&pe(kS,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.Su=e;const t=T_();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=T_();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new wr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!ll(e))throw e;pe(kS,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.Su.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const a=function(c){let d=c.message||"";return c.stack&&(d=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),d}(s);throw Rs("INTERNAL UNHANDLED ERROR: ",a),s}).then(s=>(this.pu=!1,s))));return this.Su=t,t}enqueueAfterDelay(e,t,s){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const a=og.createAndSchedule(this,e,t,s,l=>this.Fu(l));return this.fu.push(a),a}Du(){this.gu&&Ne()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class _g extends dg{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new MS,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new MS(e),this._firestoreClient=void 0,await e}}}function oP(i,e){const t=YS(),s=Tf,a=hm(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=xR("firestore");l&&aP(a,...l)}return a}function lb(i){if(i._terminated)throw new we(ne.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||lP(i),i._firestoreClient}function lP(i){var e,t,s;const a=i._freezeSettings(),l=function(d,_,m,E){return new bk(d,_,m,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,rb(E.experimentalLongPollingOptions),E.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,a);i._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),i._firestoreClient=new JM(i._authCredentials,i._appCheckCredentials,i._queue,l,i._componentsProvider&&function(d){const _=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(_),_online:_}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jo(on.fromBase64String(e))}catch(t){throw new we(ne.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Jo(on.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new we(ne.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new an(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new we(ne.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new we(ne.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Fe(this._lat,e._lat)||Fe(this._long,e._long)}}/**
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
 */class yg{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP=/^__.*__$/;class cP{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Pa(e,this.data,this.fieldMask,t,this.fieldTransforms):new fc(e,this.data,t,this.fieldTransforms)}}function cb(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ne()}}class vg{constructor(e,t,s,a,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Bu(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new vg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:s,Qu:!1});return a.$u(e),a}Ku(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:s,Qu:!1});return a.Bu(),a}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Of(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(cb(this.Lu)&&uP.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class hP{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Zf(e)}ju(e,t,s,a=!1){return new vg({Lu:e,methodName:t,zu:s,path:an.emptyPath(),Qu:!1,Gu:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fP(i){const e=i._freezeSettings(),t=Zf(i._databaseId);return new hP(i._databaseId,!!e.ignoreUndefinedProperties,t)}function dP(i,e,t,s,a,l={}){const c=i.ju(l.merge||l.mergeFields?2:0,e,t,a);pb("Data must be an object, but it was:",c,s);const d=fb(s,c);let _,m;if(l.merge)_=new mi(c.fieldMask),m=c.fieldTransforms;else if(l.mergeFields){const E=[];for(const S of l.mergeFields){const I=pP(e,S,t);if(!c.contains(I))throw new we(ne.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);mP(E,I)||E.push(I)}_=new mi(E),m=c.fieldTransforms.filter(S=>_.covers(S.field))}else _=null,m=c.fieldTransforms;return new cP(new ni(d),_,m)}function hb(i,e){if(db(i=Nn(i)))return pb("Unsupported field value:",e,i),fb(i,e);if(i instanceof ub)return function(s,a){if(!cb(a.Lu))throw a.Wu(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Wu(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(s,a){const l=[];let c=0;for(const d of s){let _=hb(d,a.Uu(c));_==null&&(_={nullValue:"NULL_VALUE"}),l.push(_),c++}return{arrayValue:{values:l}}}(i,e)}return function(s,a){if((s=Nn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Yk(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Ut.fromDate(s);return{timestampValue:Rf(a.serializer,l)}}if(s instanceof Ut){const l=new Ut(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Rf(a.serializer,l)}}if(s instanceof gg)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Jo)return{bytesValue:Ow(a.serializer,s._byteString)};if(s instanceof si){const l=a.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw a.Wu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Zm(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof yg)return function(c,d){return{mapValue:{fields:{[aw]:{stringValue:ow},[Sf]:{arrayValue:{values:c.toArray().map(m=>{if(typeof m!="number")throw d.Wu("VectorValues must only contain numeric values.");return Ym(d.serializer,m)})}}}}}}(s,a);throw a.Wu(`Unsupported field value: ${fg(s)}`)}(i,e)}function fb(i,e){const t={};return ew(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ka(i,(s,a)=>{const l=hb(a,e.qu(s));l!=null&&(t[s]=l)}),{mapValue:{fields:t}}}function db(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Ut||i instanceof gg||i instanceof Jo||i instanceof si||i instanceof ub||i instanceof yg)}function pb(i,e,t){if(!db(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const s=fg(t);throw s==="an object"?e.Wu(i+" a custom object"):e.Wu(i+" "+s)}}function pP(i,e,t){if((e=Nn(e))instanceof mg)return e._internalPath;if(typeof e=="string")return _b(i,e);throw Of("Field path arguments must be of type string or ",i,!1,void 0,t)}const _P=new RegExp("[~\\*/\\[\\]]");function _b(i,e,t){if(e.search(_P)>=0)throw Of(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new mg(...e.split("."))._internalPath}catch{throw Of(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Of(i,e,t,s,a){const l=s&&!s.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let _="";return(l||c)&&(_+=" (found",l&&(_+=` in field ${s}`),c&&(_+=` in document ${a}`),_+=")"),new we(ne.INVALID_ARGUMENT,d+i+_)}function mP(i,e){return i.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new si(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(gb("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class gP extends mb{data(){return super.data()}}function gb(i,e){return typeof e=="string"?_b(i,e):e instanceof mg?e._internalPath:e._delegate._internalPath}class yP{convertValue(e,t="none"){switch(Dr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Nr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ne()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ka(e,(a,l)=>{s[a]=this.convertValue(l,t)}),s}convertVectorValue(e){var t,s,a;const l=(a=(s=(t=e.fields)===null||t===void 0?void 0:t[Sf].arrayValue)===null||s===void 0?void 0:s.values)===null||a===void 0?void 0:a.map(c=>Ct(c.doubleValue));return new yg(l)}convertGeoPoint(e){return new gg(Ct(e.latitude),Ct(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Gf(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Yu(e));default:return null}}convertTimestamp(e){const t=Ir(e);return new Ut(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=At.fromString(e);it(Lw(s));const a=new $u(s.get(1),s.get(3)),l=new be(s.popFirst(5));return a.isEqual(t)||Rs(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(i,e,t){let s;return s=i?i.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yb extends mb{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new TP(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(gb("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class TP extends yb{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(i){i=ec(i,si);const e=ec(i.firestore,_g);return iP(lb(e),i._key).then(t=>CP(e,i,t))}class AP extends yP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new si(this.firestore,null,t)}}function wP(i,e,t){i=ec(i,si);const s=ec(i.firestore,_g),a=vP(i.converter,e);return bP(s,[dP(fP(s),"setDoc",i._key,a,i.converter!==null,t).toMutation(i._key,ws.none())])}function bP(i,e){return function(s,a){const l=new wr;return s.asyncQueue.enqueueAndForget(async()=>FM(await tP(s),a,l)),l.promise}(lb(i),e)}function CP(i,e,t){const s=t.docs.get(e._key),a=new AP(i);return new yb(i,a,e._key,s,new EP(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(a){al=a})(Na),va(new br("firestore",(s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),d=new _g(new uk(s.getProvider("auth-internal")),new fk(c,s.getProvider("app-check-internal")),function(m,E){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new we(ne.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $u(m.options.projectId,E)}(c,a),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),ji(HT,FT,e),ji(HT,FT,"esm2017")})();const RP={apiKey:"AIzaSyDWN5GCnrhUqKZlOt8Rxb0n748lhPf9B58",authDomain:"to-do-list-9cf11.firebaseapp.com",databaseURL:"https://to-do-list-9cf11-default-rtdb.firebaseio.com",projectId:"to-do-list-9cf11",storageBucket:"to-do-list-9cf11.firebasestorage.app",messagingSenderId:"44862500438",appId:"1:44862500438:web:ccb0f012d9c8e7cfe215f7",measurementId:"G-HB8NT8L1FD"};QS(RP);const vb=oP(),Ia=yD(),IP=({editing:i,setPage:e,indicated:t,setIndicated:s,showTaskPrompt:a,url:l,setUrl:c,showSignInPrompt:d,showSignUpPrompt:_,setShowSignInPrompt:m,setShowSignUpPrompt:E,showSortPrompt:S,user:I,setShowPersonalInformation:L,continueAs:F,setIsSigningOut:Y})=>{const[z,W]=le.useState(!1),Q=te=>{let ce=window.location.href;ce.toLowerCase();let me=ce.search("/Acad/");ce=ce.slice(0,me+6),console.log(ce.concat(te)),c(ce.concat(te))};return le.useEffect(()=>{l.includes("#Home")?s(0):l.includes("#Tasks")?s(1):l.includes("#About")?s(2):l.includes("#Contacts")&&s(3)},[l]),T.jsxs(T.Fragment,{children:[T.jsxs("nav",{className:!d&&!_&&!a&&!i&&!S&&!F?Ve.nav:Ve.hideNav,children:[T.jsxs("div",{className:Ve.left,children:[T.jsx("img",{src:"./web-icon.png",className:Ve.icon}),T.jsx("h1",{children:"ACAD"})]}),T.jsx("div",{className:Ve.middle,children:T.jsxs("ul",{className:Ve.NavLinks,children:[T.jsx("li",{onClick:()=>{s(0),e(1),Q("#Home")},className:t===0?Ve.indicated:Ve.notIndicated,children:T.jsxs("a",{href:"#Home",children:[T.jsx("img",{src:"./icons/house.svg"})," ",T.jsxs("span",{children:["Home",T.jsx("span",{className:Ve.indication})]})]})}),T.jsxs("li",{onClick:()=>{s(1),e(2),Q("#Tasks")},className:t===1?Ve.indicated:Ve.notIndicated,children:[T.jsxs("a",{href:"#Tasks",children:[T.jsx("img",{src:"./icons/book-solid.svg"})," ",T.jsxs("span",{children:["Tasks",T.jsx("span",{className:Ve.indication})]})]})," "]}),T.jsx("li",{onClick:()=>{s(2),e(3),Q()},className:t===2?Ve.indicated:Ve.notIndicated,children:T.jsxs("a",{href:"",children:[T.jsx("img",{src:"./icons/circle-info-solid.svg"}),T.jsxs("span",{children:["Help",T.jsx("span",{className:Ve.indication})]})]})})]})}),I?T.jsxs("div",{className:`${Ve.right} ${Ve.LoggedIn}`,children:[T.jsx(Ee,{icon:T.jsx("i",{className:"fa fa-user"}),className:`${Ve.User_Button}`,content:"Account",func:()=>L(!0)}),T.jsx(Ee,{content:"Sign Out",func:()=>{Y(!0)},className:Ve.SignUpButt}),T.jsx(Ee,{className:Ve.HamburgerButt,func:()=>{W(!0)},content:T.jsx("i",{className:"fa fa-list-ul"})})]}):T.jsxs("div",{className:`${Ve.right} ${Ve.notLoggedIn}`,children:[T.jsx(Ee,{content:"Sign In",func:()=>{m(!0)},className:Ve.SignInButt}),T.jsx(Ee,{content:"Sign Up",func:()=>{E(!0)},className:Ve.SignUpButt}),T.jsx(Ee,{className:Ve.HamburgerButt,func:()=>{W(!0)},content:T.jsx("i",{className:"fa fa-list-ul"})})]})]}),T.jsx("div",{className:z?Ve.sidebar:Ve.hideSideBar,children:T.jsxs("ul",{className:z?Ve.NavLinks:Ve.hideNavLinks,children:[T.jsx(Ee,{className:Ve.HamburgerButt,func:()=>{W(!z)},content:T.jsx("i",{className:"fa fa-list-ul"})}),T.jsxs("li",{onClick:()=>{s(0),e(1)},className:t===0?Ve.indicated:Ve.notIndicated,children:[" ",T.jsxs("a",{href:"#Home",children:[T.jsx("img",{src:"./icons/house.svg"})," ",T.jsxs("span",{children:["Home",T.jsx("span",{className:Ve.indication})]})]})," "]}),T.jsxs("li",{onClick:()=>{s(1),e(2)},className:t===1?Ve.indicated:Ve.notIndicated,children:[" ",T.jsxs("a",{href:"#Tasks",children:[T.jsx("img",{src:"./icons/book-solid.svg"})," ",T.jsxs("span",{children:["Tasks",T.jsx("span",{className:Ve.indication})]})]})," "]}),T.jsxs("li",{onClick:()=>{s(2),e(3)},className:t===2?Ve.indicated:Ve.notIndicated,children:[" ",T.jsxs("a",{href:"",children:[T.jsx("img",{src:"./icons/circle-info-solid.svg"}),T.jsxs("span",{children:["Help",T.jsx("span",{className:Ve.indication})]})]})]})]})})]})},NP=({page:i,setPage:e,setIndicated:t,indicated:s})=>T.jsxs("div",{className:i==1?gs.home_wrapper:gs.hideHome,id:"Home",children:[T.jsxs("div",{className:gs.left,children:[T.jsxs("div",{className:gs.wrapTop,children:[T.jsx("h1",{children:"Welcome User"}),T.jsxs("p",{children:["Write, read and document your work ",T.jsx("br",{})," and studies"]}),T.jsx("a",{href:"#Tasks",children:T.jsx(Ee,{content:"Get Started",func:()=>{e(2),t(1)}})})]}),T.jsxs("div",{className:gs.wrapBottom,children:[T.jsx(Ee,{className:gs.orange}),T.jsx(Ee,{className:gs.purple}),T.jsx(Ee,{className:gs.blue})]})]}),T.jsx("div",{className:gs.right,children:T.jsx("img",{src:"./StartingPage/Working.png"})})]}),DP="_Task_Container_jr2xj_1",OP="_tasks_jr2xj_45",xP="_Finished_jr2xj_69",kP="_unchecked_jr2xj_93",MP="_checked_jr2xj_101",PP="_col_jr2xj_109",VP="_br_jr2xj_117",LP="_fs_jr2xj_125",UP="_bgC_jr2xj_133",jP="_fW_jr2xj_141",Rn={Task_Container:DP,tasks:OP,Finished:xP,unchecked:kP,checked:MP,col:PP,br:VP,fs:LP,bgC:UP,fW:jP},BP=({handleSelectedTasks:i,selectTask:e,tasks:t,setTasks:s,searching:a,filteredTask:l,setFilteredTask:c,setOpenedTask:d,setEditing:_,type:m,sorting:E,sortOptions:S})=>{const[I,L]=le.useState(t.map(W=>({...W,isChecked:!1})));function F(W){let Q=t,te=[];Q=Q.map(ce=>ce.id===W?{...ce,isChecked:!ce.isChecked}:ce);for(let ce=0;ce<Q.length;ce++)Q[ce].isChecked&&te.push({id:Q[ce].id,index:ce}),ce==Q.length-1&&(console.log(Q),i(te),te=[]);s(ce=>ce.map(me=>me.id===W?{...me,isChecked:!me.isChecked}:me)),a&&c(ce=>ce.map(me=>me.id===W?{...me,isChecked:!me.isChecked}:me))}le.useEffect(()=>{L([...t])},[t]);const Y=()=>{if(a&&l!=null)return T.jsx("div",{className:Rn.Task_Container,children:l.map((W,Q)=>{if(W.type==="pending"&&m==="Pending")return T.jsx(z,{task:W,i:Q},W.id);if(W.type==="finished"&&m==="Finished")return T.jsx(z,{task:W,i:Q},W.id);if(m==="All Tasks")return T.jsx(z,{task:W,i:Q},W.id)})},"Task_Container");if(E&&!a){let W=I;for(let Q in S)Q==0&&S[Q].state==!0?W=W.sort((te,ce)=>ce.dateCreated.time-te.dateCreated.time):Q==1&&S[Q].state==!0?W=W.sort((te,ce)=>te.dateCreated.time-ce.dateCreated.time):Q==2&&S[Q].state==!0?W=W.sort((te,ce)=>te.task.localeCompare(ce.task)):Q==3&&S[Q].state==!0&&(W=W.sort((te,ce)=>ce.task.localeCompare(te.task)));return T.jsx("div",{className:Rn.Task_Container,children:W.map((Q,te)=>{if(Q.type==="pending"&&m==="Pending")return T.jsx(z,{task:Q,i:te},Q.id);if(Q.type==="finished"&&m==="Finished")return T.jsx(z,{task:Q,i:te},Q.id);if(m==="All Tasks")return T.jsx(z,{task:Q,i:te},Q.id)})})}else if(!E&&!a)return T.jsx("div",{className:Rn.Task_Container,children:I.map((W,Q)=>{if(W.type==="pending"&&m==="Pending")return T.jsx(z,{task:W,i:Q},W.id);if(W.type==="finished"&&m==="Finished")return T.jsx(z,{task:W,i:Q},W.id);if(m==="All Tasks")return T.jsx(z,{task:W,i:Q},W.id)})})},z=({task:W,i:Q})=>T.jsxs("label",{htmlFor:"task"+W.id,style:W.style!="default"?{...W.style}:null,className:W.type=="pending"?`${Rn.Pending} ${W.cName.map(te=>JSON.parse(te)).join(" ")} ${Rn.tasks}`:`${Rn.Finished} ${W.cName.map(te=>JSON.parse(te)).join(" ")} ${Rn.tasks}`,onDoubleClick:()=>{_(!0),d({id:W.id,isOpened:!0})},children:[T.jsx("i",{style:e==!1?{display:"none"}:{display:"block"},className:`fa fa-check-square ${W.isChecked===!0?Rn.checked:Rn.unchecked}`}),T.jsx("input",{style:{display:"none"},type:"checkbox",id:"task"+W.id,onChange:()=>{e&&F(W.id)}}),W.task]},W.id);if(I!=null)return T.jsx(T.Fragment,{children:T.jsx(Y,{})})},zP="_Bottom_Options_14lht_1",HP="_toLeft_14lht_31",FP="_toRight_14lht_31",qP="_Unchecked_14lht_57",GP="_hide_14lht_105",dr={Bottom_Options:zP,toLeft:HP,toRight:FP,Unchecked:qP,hide:GP},KP=({handleSelectedTasks:i,selectedTask:e,selectTask:t,setSelectTask:s,unselectAll:a,tasks:l,setTasks:c,searching:d,updateTasks:_,setUpdateTasks:m,filteredTasks:E,setFilteredTasks:S})=>{le.useEffect(()=>{_&&console.log(_)},[_]);const I=()=>{let Y=l,z=E,W=[],Q=[];if(d){z=z.map(te=>({...te,isChecked:!0}));for(let te=0;te<z.length;te++)z[te].isChecked&&Q.push({id:z[te].id,index:te});i([...Q])}else{Y=Y.map(te=>({...te,isChecked:!0}));for(let te=0;te<Y.length;te++)Y[te].isChecked&&W.push({id:Y[te].id,index:te});i([...W])}d?S([...z]):m(te=>te.map(ce=>({...ce,isChecked:!0})))};function L(){let Y=l,z=E;for(let W in z)for(let Q in e)z[W].id===e[Q].id&&z.splice(W,1);for(let W in l)for(let Q in e)Y[W].id===e[Q].id&&Y.splice(W,1);localStorage.setItem("dataTask",JSON.stringify(Y)),c([...Y]),d&&S([...z]),i(null)}const F=()=>t==!0?T.jsx(T.Fragment,{children:T.jsxs("div",{className:dr.toLeft,children:[T.jsx(Ee,{content:T.jsx("span",{children:" Select All"}),icon:T.jsx("i",{className:"fa fa-check"}),className:dr.SelectAllButton,func:()=>{I()}}),T.jsx(Ee,{content:T.jsx("span",{children:" Unselect All"}),icon:T.jsx("i",{className:`fas fa fa-check ${dr.Unchecked}`}),className:dr.UnselectAllButton,func:()=>{a()}})]})}):T.jsx(T.Fragment,{children:T.jsx(Ee,{content:"Select",icon:T.jsx("i",{className:"fa fa-hand-o-up"}),className:dr.SelectButton,func:()=>s(!0)})});return T.jsx(T.Fragment,{children:T.jsxs("div",{className:dr.Bottom_Options,children:[T.jsx(F,{}),T.jsxs("div",{className:t==!0?dr.toRight:dr.hide,children:[T.jsx(Ee,{icon:T.jsx("i",{className:"fa fa-trash"}),content:" Delete",func:Y=>{t?L():console.log("No update")}}),T.jsx(Ee,{icon:T.jsx("i",{className:"fa fa-close"}),content:" Cancel",func:()=>{s(!1),a()}})]})]})})},WP="_DropDown_Body_1fdho_1",QP="_Hide_DropDown_Body_1fdho_1",YP="_Dropdown_Wrapper_1fdho_27",$P="_Not_Indicated_1fdho_59",XP="_Indicated_1fdho_69",Tu={DropDown_Body:WP,Hide_DropDown_Body:QP,Dropdown_Wrapper:YP,Not_Indicated:$P,Indicated:XP},ZP=({setType:i,showDropDown:e,handleType:t,unselectAll:s})=>{const a=["Pending","Finished","All Tasks"],[l,c]=le.useState(0);return T.jsx(T.Fragment,{children:T.jsx("div",{className:e?Tu.DropDown_Body:Tu.Hide_DropDown_Body,onClick:()=>{t()},children:T.jsx("ul",{className:Tu.Dropdown_Wrapper,children:a.map((d,_)=>T.jsx("li",{className:l==_?Tu.Indicated:Tu.Not_Indicated,onClick:()=>{i(a[_]),c(_),s()},children:d},a[_]))})})})},JP="_Options_tab_1yztu_1",eV="_Color_Wrapper_1yztu_19",tV="_Close_Button_1yztu_49",nV="_colorPicker_1yztu_139",iV="_Hide_BG_Color_Prompt_1yztu_171",sV="_Hide_Color_Prompt_1yztu_173",rV="_Hide_Border_Color_Prompt_1yztu_175",aV="_Hide_Font_Weight_Prompt_1yztu_177",oV="_Hide_Italic_Prompt_1yztu_179",lV="_BG_Color_Prompt_1yztu_187",uV="_Color_Prompt_1yztu_189",cV="_Border_Color_Prompt_1yztu_191",hV="_Wrap_Options_Tab_1yztu_199",fV="_createTask_1yztu_293",He={Options_tab:JP,Color_Wrapper:eV,Close_Button:tV,colorPicker:nV,Hide_BG_Color_Prompt:iV,Hide_Color_Prompt:sV,Hide_Border_Color_Prompt:rV,Hide_Font_Weight_Prompt:aV,Hide_Italic_Prompt:oV,BG_Color_Prompt:lV,Color_Prompt:uV,Border_Color_Prompt:cV,Wrap_Options_Tab:hV,createTask:fV},dV=({selectedTask:i,filteredTasks:e,updateTasks:t,searching:s,optionTabNumber:a,handleMarking:l,unselectAll:c,setShowTaskPrompt:d,setShowSortPrompt:_})=>{const[m,E]=le.useState(a),[S,I]=le.useState(!1),[L,F]=le.useState(!1),[Y,z]=le.useState(!1),[W,Q]=le.useState(!1),[te,ce]=le.useState(!1),[me,Te]=le.useState(!1);function O(C,b,D,x,P,N){let ie=t,Ie=e,re=[];for(let fe in i)if(s)for(let de in Ie)de==i[fe].index?(Ie[de].isChecked=!0,C!=!1&&(Ie[i[fe].index].type=C,re.push(Ie[i[fe].index])),C==!1&&((Ie[i[fe].index].style=="default"||Ie[i[fe].index].style==null)&&(Ie[i[fe].index].style={color:"default",border:"default",fontStyle:"default",backgroundColor:"default",fontWeight:"default"}),b&&(Ie[i[fe].index].style.color=b,re.push(Ie[i[fe].index])),D&&(Ie[i[fe].index].style.backgroundColor=D,re.push(Ie[i[fe].index])),x&&(Ie[i[fe].index].style.fontWeight=x,re.push(Ie[i[fe].index])),P&&(Ie[i[fe].index].style.fontStyle=P,re.push(Ie[i[fe].index])),N&&(Ie[i[fe].index].style.borderColor=N,re.push(Ie[i[fe].index])))):re.push(Ie[i[fe].index]);for(let fe in i)ie=ie.map(de=>{if(i[fe].id==de.id){let Se={...de};return Se.style=Se.style==="default"?{color:"default",border:"default",fontStyle:"default",backgroundColor:"default",fontWeight:"default"}:{...Se.style},C!==!1&&(Se.type=C),b&&(Se.style={...Se.style,color:b}),D&&(Se.style={...Se.style,backgroundColor:D}),x&&(Se.style={...Se.style,fontWeight:x}),P&&(Se.style={...Se.style,fontStyle:P}),N&&(Se.style={...Se.style,borderColor:N}),Se.isChecked=!0,Se}else return{...de}});s?l([...Ie],[...ie]):l(Ie,[...ie])}return le.useEffect(()=>{E(a)},[a]),le.useEffect(()=>{console.log(s,e)},[s,e]),T.jsxs("div",{className:He.Options_tab,children:[T.jsxs("div",{className:L?`${He.BG_Color_Prompt} ${He.Color_Wrapper}`:`${He.Hide_BG_Color_Prompt} ${He.Color_Wrapper}`,children:[T.jsx(Ee,{icon:T.jsx("i",{className:"fa fa-close"}),className:`${He.Close_Button}`,func:()=>{F(!1)}}),T.jsx("h1",{children:"Change BG Color"}),T.jsxs("label",{htmlFor:"colorPicker",className:He.colorPicker,children:[T.jsx("input",{type:"color",id:"colorPicker",onBlur:C=>{O(!1,!1,C.target.value,!1,!1)}}),T.jsx("span",{children:"Choose BG Color"})]}),T.jsx(Ee,{content:"Default",func:()=>{O(!1,!1,"#f09c2e",!1,!1)}})]}),T.jsxs("div",{className:Y?`${He.Color_Prompt} ${He.Color_Wrapper}`:`${He.Hide_Color_Prompt} ${He.Color_Wrapper}`,children:[T.jsx("h1",{children:"Change Font Color"}),T.jsx(Ee,{icon:T.jsx("i",{className:"fa fa-close"}),className:`${He.Close_Button}`,func:()=>{z(!1)}}),T.jsxs("label",{htmlFor:"bgColorPicker",className:`${He.bgColorPicker} ${He.colorPicker}`,children:[T.jsx("input",{type:"color",id:"bgColorPicker",onBlur:C=>{O(!1,C.target.value,!1,!1,!1)}}),T.jsx("span",{children:"Choose Font Color"})]}),T.jsx(Ee,{content:"Default",func:()=>{O(!1,"white",!1,!1,!1)}})]}),T.jsxs("div",{className:W?`${He.Border_Color_Prompt} ${He.Color_Wrapper}`:`${He.Hide_Border_Color_Prompt} ${He.Color_Wrapper}`,children:[T.jsx("h1",{children:"Change Border Color"}),T.jsx(Ee,{icon:T.jsx("i",{className:"fa fa-close"}),className:`${He.Close_Button}`,func:()=>{Q(!1)}}),T.jsxs("label",{htmlFor:"borderColorPicker",className:`${He.borderColorPicker} ${He.colorPicker}`,children:[T.jsx("input",{type:"color",id:"borderColorPicker",onBlur:C=>{O(!1,!1,!1,!1,!1,C.target.value)}}),T.jsx("span",{children:"Choose Border Color"})]}),T.jsx(Ee,{content:"Default",func:()=>{O(!1,!1,!1,!1,!1,"#d16c06")}})]}),T.jsxs("div",{className:te?`${He.Font_Weight_Prompt} ${He.Color_Wrapper}`:`${He.Hide_Font_Weight_Prompt} ${He.Color_Wrapper}`,children:[T.jsx("h1",{children:"Change Font Weight"}),T.jsx(Ee,{icon:T.jsx("i",{className:"fa fa-close"}),className:`${He.Close_Button}`,func:()=>{ce(!1)}}),T.jsx(Ee,{content:"Normal",func:()=>{O(!1,!1,!1,"Normal",!1,!1)}}),T.jsx(Ee,{content:"Bold",func:()=>{O(!1,!1,!1,"Bold",!1,!1)}}),T.jsx(Ee,{content:"Bolder",func:()=>{O(!1,!1,!1,"Bolder",!1,!1)}})]}),T.jsxs("div",{className:me?`${He.Italic_Prompt} ${He.Color_Wrapper}`:`${He.Hide_Italic_Prompt} ${He.Color_Wrapper}`,children:[T.jsx("h1",{children:"Change Italization"}),T.jsx(Ee,{icon:T.jsx("i",{className:"fa fa-close"}),className:`${He.Close_Button}`,func:()=>{Te(!1)}}),T.jsx(Ee,{content:"Normal",func:()=>{O(!1,!1,!1,!1,"Normal",!1)}}),T.jsx(Ee,{content:"Italic",func:()=>{O(!1,!1,!1,!1,"Italic",!1)}})]}),T.jsxs("div",{className:He.Wrap_Options_Tab,children:[T.jsx(Ee,{icon:T.jsx("i",{className:"fa fa-plus"}),content:T.jsx("span",{children:" Create New Task"}),className:He.createTask,func:()=>d(!0)}),T.jsx(Ee,{icon:T.jsx("i",{className:"fa fa-edit"}),content:T.jsx("span",{children:" Mark As Finished"}),func:()=>{O("finished",!1,!1,!1,!1),c()}}),T.jsx(Ee,{icon:T.jsx("i",{className:"fa fa-edit"}),content:T.jsx("span",{children:" Mark As Pending"}),func:()=>{O("pending",!1,!1,!1,!1),c()}}),T.jsx(Ee,{icon:T.jsx("i",{className:"fa fa-sort"}),content:T.jsx("span",{children:" Sort"}),func:()=>{_(!0)}}),T.jsx(Ee,{icon:T.jsx("i",{className:"material-icons",children:"format_color_fill"}),content:T.jsx("span",{children:" BG Color "}),func:()=>{F(!0),z(!1),Q(!1),ce(!1),Te(!1)}}),T.jsx(Ee,{icon:T.jsx("i",{className:"material-icons",children:"format_color_text"}),content:T.jsx("span",{children:" Font Color"}),func:()=>{z(!0),F(!1),Q(!1),ce(!1,Te(!1))}}),T.jsx(Ee,{icon:T.jsx("i",{className:"material-icons",children:"border_color"}),content:T.jsx("span",{children:" Border Color"}),func:()=>{Q(!0),F(!1),z(!1),ce(!1),Te(!1)}}),T.jsx(Ee,{icon:T.jsx("i",{className:"fa fa-bold"}),content:" Bold",className:`${He.green} ${He.black}`,func:()=>{Q(!1),F(!1),z(!1),ce(!0),Te(!1)}}),T.jsx(Ee,{icon:T.jsx("i",{className:"fa fa-italic"}),content:" Italic",func:()=>{Q(!1),F(!1),z(!1),ce(!1),Te(!0)}})]})]})},pV="_Task_View_19nr4_1",_V="_Hide_Task_View_19nr4_19",mV="_nav_19nr4_57",gV="_content_19nr4_127",yV="_submitButton_19nr4_173",Su={Task_View:pV,Hide_Task_View:_V,nav:mV,content:gV,submitButton:yV},vV=({openedTask:i,setOpenedTask:e,filteredTask:t,searching:s,tasks:a,taskEditingP:l,saveChanges:c,handleEditing:d,setEditing:_,editing:m})=>T.jsxs("div",{className:m?Su.Task_View:Su.Hide_Task_View,children:[T.jsxs("div",{className:Su.nav,children:[T.jsxs("h3",{children:[T.jsx("i",{className:"fa fa-edit"})," ",T.jsx("span",{children:"Edit Task"})]}),T.jsx(Ee,{icon:T.jsx("i",{className:"fa fa-times"}),func:()=>{e({index:null,isOpened:!1}),_(!1)}})]}),T.jsx("div",{className:Su.content,children:T.jsx("p",{ref:l,onInput:E=>{d(E)},contentEditable:m,children:a.map((E,S)=>{if(E.id===i.id)return E.task})})}),T.jsx(Ee,{content:"Save Changes",className:Su.submitButton,func:()=>{c(i.index),_(!1)}})]}),EV="_Task_prompt_wrapper_hoxzz_1",TV="_Hide_task_prompt_wrapper_hoxzz_1",SV="_nav_hoxzz_41",AV="_content_hoxzz_111",wV="_submitButton_hoxzz_157",Au={Task_prompt_wrapper:EV,Hide_task_prompt_wrapper:TV,nav:SV,content:AV,submitButton:wV},bV=({showTaskPrompt:i,setShowTaskPrompt:e,writeTask:t})=>{const s=le.useRef(null),a=le.useRef(null),[l,c]=le.useState(!1);function d(){c(Math.random()*1)}function _(){t(a.current.innerText)}function m(){a.current.innerHTML="<br>",E()}function E(){a.current.innerText==`
`||a.current.innerHTML=="<br>"?s.current.style.display="block":s.current.style.display="none"}return le.useEffect(()=>{},[l]),T.jsx(T.Fragment,{children:T.jsxs("div",{className:i?Au.Task_prompt_wrapper:Au.Hide_task_prompt_wrapper,children:[T.jsxs("div",{className:Au.nav,children:[T.jsxs("h3",{children:[T.jsx("i",{className:"fa fa-edit"})," ",T.jsx("span",{children:"Task Prompt"})]}),T.jsx(Ee,{icon:T.jsx("i",{className:"fa fa-times"}),func:()=>{e(!1),m()}})]}),T.jsxs("div",{className:Au.content,children:[T.jsx("span",{ref:s,children:"Type Any Task..."}),T.jsx("p",{ref:a,contentEditable:"true",onInput:()=>{d(),E()}})]}),T.jsx(Ee,{content:"Submit",className:Au.submitButton,func:()=>{_(),e(!1),m()}})]})})},CV="_Sort_Wrapper_1nnq2_17",RV="_Hide_Sort_Wrapper_1nnq2_19",IV="_Sort_Box_1nnq2_51",NV="_Hide_Sort_Box_Button_1nnq2_75",DV="_Sort_Options_1nnq2_105",OV="_checked_1nnq2_153",xV="_unchecked_1nnq2_153",pr={Sort_Wrapper:CV,Hide_Sort_Wrapper:RV,Sort_Box:IV,Hide_Sort_Box_Button:NV,Sort_Options:DV,checked:OV,unchecked:xV},kV=({setShowSortPrompt:i,showSortPrompt:e,sortOptions:t,setSortOptions:s,setSorting:a,sorting:l})=>{function c(d){let _=t;_=_.map((m,E)=>_[E]===_[d]?{...m,state:!m.state}:{...m,state:!1});for(let m in _){if(_[m].state==!0){a(!0);break}m==_.length-1&&!_[m].state&&a(!1)}s([..._])}return T.jsx("div",{className:e?pr.Sort_Wrapper:pr.Hide_Sort_Wrapper,children:T.jsxs("div",{className:e?pr.Sort_Box:pr.Hide_Sort_Box,children:[T.jsx("h2",{children:"Sort Settings"}),T.jsx(Ee,{icon:T.jsx("i",{className:"fa fa-close"}),className:pr.Hide_Sort_Box_Button,func:()=>{i(!1)}}),T.jsx("div",{className:pr.Sort_Options,children:t.map((d,_)=>T.jsx(Ee,{icon:T.jsx("i",{className:`fa fa-check-square ${d.state==!0?pr.checked:pr.unchecked}`}),content:d.description,func:()=>{c(_)}},d.description))})]})})},MV="_Hide_Task_Wrapper_1r76k_5",PV="_Task_Wrapper_1r76k_13",VV="_Tasks_Editor_1r76k_33",LV="_Search_wrapper_1r76k_103",No={Hide_Task_Wrapper:MV,Task_Wrapper:PV,Tasks_Editor:VV,Search_wrapper:LV},UV=({page:i,showTaskPrompt:e,setShowTaskPrompt:t,setEditing:s,editing:a,showSortPrompt:l,setShowSortPrompt:c,user:d})=>{const _=le.useRef(null),m=le.useRef(null),[E,S]=le.useState(!1),[I,L]=le.useState(!1),[F,Y]=le.useState(!1),[z,W]=le.useState(!1),[Q,te]=le.useState([]),[ce,me]=le.useState(1),[Te,O]=le.useState("Pending"),[C,b]=le.useState(JSON.parse(localStorage.getItem("dataTask"))!=null?JSON.parse(localStorage.getItem("dataTask")):[]),[D,x]=le.useState(C.map($=>({...$,isChecked:!1}))),[P,N]=le.useState(null),[ie,Ie]=le.useState({index:null,isOpened:!1}),[re,fe]=le.useState(null),[de,Se]=le.useState([{description:"Newest to Oldest",state:!1},{description:"Oldest to Newest",state:!1},{description:"From A-Z",state:!1},{description:"From Z-A",state:!1}]);function k(){Y(!1)}function ee($){let Me=C,Bt="qwertyuiopasdfghjklzxcvbnm",zt="";for(let ai=0;ai<10;ai++){let oi=Math.floor(Math.random()*(Bt.length-1));zt=zt.concat(Bt[oi])}let vi={id:zt,task:$,dateCreated:{fullDate:new Date,time:Date.now()},selected:!1,style:"default",cName:[JSON.stringify(Rn.col),JSON.stringify(Rn.br),JSON.stringify(Rn.fs),JSON.stringify(Rn.bgC),JSON.stringify(Rn.fW)],isChecked:!1,type:"pending"};Me.unshift(vi),localStorage.setItem("dataTask",JSON.stringify(Me)),x([...Me])}function ae($,Me){Q.length>=1&&(I&&N([...$]),x([...Me]))}function se($){fe($.target.innerText)}const ue=$=>{_.current.value==""?L(!1):(L(!0),N(C.filter(Me=>Me.task.toLowerCase().includes(_.current.value.toLowerCase()))),W(!1))};function ye($){te($==null?[]:[...$])}function Ae($){Ie($)}function ht(){let $=de;for(let Me=0;Me<de.length;Me++)if($[Me].state==!0){W(!0);break}else Me==de.length-1&&de[Me].state==!1&&W(!1)}function Ge($){let Me=C;Me[$].task=re,x([...Me])}const lt=()=>{let $=C,Me=P;I?(Me=Me.map(Bt=>({...Bt,isChecked:!1})),ye(null)):($=$.map(Bt=>({...Bt,isChecked:!1})),ye(null)),I?N([...Me]):x(Bt=>Bt.map(zt=>({...zt,isChecked:!1})))};return le.useEffect(()=>{b([...D]),localStorage.setItem("dataTask",JSON.stringify(D))},[P,D]),le.useEffect(()=>{},[d]),T.jsx(T.Fragment,{children:T.jsxs("div",{className:i==2?No.Task_Wrapper:No.Hide_Task_Wrapper,id:"Tasks",children:[T.jsx(bV,{showTaskPrompt:e,setShowTaskPrompt:t,writeTask:$=>{ee($)}}),T.jsxs("div",{className:No.Tasks_Editor,children:[T.jsxs("h2",{className:No.Title_wrapper,children:["Tasks",T.jsx("i",{className:"fa fa-bars",onClick:()=>{Y(!F)}}),T.jsx(ZP,{type:Te,setType:$=>{O($)},showDropDown:F,handleType:$=>{k()},unselectAll:$=>{lt()},setSortOptions:$=>{Se($)},setSorting:$=>{W($)}})]}),T.jsx(dV,{optionTabNumber:ce,updateTasks:D,filteredTasks:P,setShowTaskPrompt:$=>{t($)},searching:I,setSearching:$=>L($),handleSearch:()=>{ue()},selectedTask:Q,handleMarking:($,Me)=>{ae($,Me)},markAsPending:$=>{markAsPending($)},unselectAll:()=>lt(),setBgColor:$=>setBgColor($),setColor:$=>setColor($),setShowSortPrompt:$=>{c($)}}),T.jsx("div",{className:No.Search_wrapper,children:T.jsxs("div",{children:[T.jsx("label",{htmlFor:"search-bar",children:T.jsx("i",{className:"fa fa-search"})}),T.jsx("input",{ref:_,id:"search-bar",type:"text",placeholder:"Type Task...",onChange:()=>{_.current.value==""&&(ht(),ue())}}),T.jsx(Ee,{content:"Search",className:No.Search_button,func:()=>{ue(),ht()}})]})}),T.jsx(KP,{selectedTask:Q,handleSelectedTasks:$=>ye($),selectTask:E,setSelectTask:S,unselectAll:()=>{lt()},tasks:C,setTasks:$=>{x($)},filteredTasks:P,setFilteredTasks:$=>{N($)},searching:I,setUpdateTasks:$=>x($),updateTasks:D}),T.jsx(BP,{selectedTasks:Q,setSelectedTasks:()=>te(),selectTask:E,tasks:C,setTasks:$=>{b($)},del:$=>{del($)},handleSelectedTasks:$=>ye($),filteredTask:P,setFilteredTask:$=>{N($)},searching:I,handleOpenedTask:$=>{Ae($)},openedTask:ie,setShowTaskPrompt:$=>{t($)},editing:a,setEditing:$=>{s($)},setOpenedTask:$=>{Ie($)},type:Te,setSorting:$=>{W($)},sorting:z,sortOptions:de}),T.jsx(vV,{openedTask:ie,setOpenedTask:$=>{Ie($)},tasks:C,taskEditingP:m,saveChanges:($,Me)=>{Ge($)},editing:a,filteredTask:P,searching:I,setEditing:$=>{s($)},handleEditing:$=>{se($)},editedValue:re}),T.jsx(kV,{showSortPrompt:l,setShowSortPrompt:$=>{c($)},sortOptions:de,setSortOptions:$=>{Se($)},setSorting:$=>{W($)},sorting:z})]})]})})},jV="_sign_up_container_mvskv_19",BV="_goToStartingPage_mvskv_41",zV="_top_arc_mvskv_65",HV="_form_mvskv_91",FV="_username_con_mvskv_105",qV="_password_con_mvskv_107",GV="_more_actions_mvskv_121",KV="_sign_in_button_mvskv_219",WV="_other_platforms_container_mvskv_251",QV="_icon_wrapper_mvskv_273",YV="_wrapper_mvskv_285",nn={sign_up_container:jV,goToStartingPage:BV,top_arc:zV,form:HV,username_con:FV,password_con:qV,more_actions:GV,sign_in_button:KV,other_platforms_container:WV,icon_wrapper:QV,wrapper:YV};function $V({user:i,setUser:e,showSignInPrompt:t,setShowSignInPrompt:s,setShowSignUpPrompt:a,setLoading:l,setContinueAs:c}){const[d,_]=le.useState(!1),m=le.useRef(null),E=le.useRef(null),S=le.useRef(null),I=le.useRef(null),L=z=>{(z.target.value==null||z.target.value!=null)&&(m.current.textContent="")},F=z=>{(z.target.value==null||z.target.value!=null)&&(E.current.textContent="")},Y=async()=>{l(!0);try{await sN(Ia,S.current.value,I.current.value),e(Ia.currentUser),l(!1),s(!1),c(!0)}catch(z){console.log(z)}};if(t==!0)return T.jsx(T.Fragment,{children:T.jsxs("div",{className:nn.sign_up_container,children:[T.jsx(Ee,{func:()=>{s(!1)},content:"X",className:nn.goToStartingPage}),T.jsx("div",{className:nn.top_arc,children:"SIGN IN"}),T.jsxs("div",{className:nn.form,children:[T.jsxs("div",{className:nn.username_con,children:[T.jsx("h3",{children:"Username :"}),T.jsx("input",{className:"emailInput",ref:S,onInput:z=>{L(z)}}),T.jsx("span",{ref:m})]}),T.jsxs("div",{className:nn.password_con,children:[T.jsx("h3",{children:"Password :"}),T.jsx("input",{type:d?"text":"password",ref:I,onInput:z=>{F(z)},className:nn.Password}),T.jsx("span",{ref:E}),T.jsx("img",{src:d?"./password/visible.png":"./password/unsee.png",className:nn.see_password,onClick:()=>{_(!d)}})]}),T.jsxs("div",{className:nn.more_actions,children:[T.jsx("span",{className:nn.forgot_pass,children:"Forgot Password"}),T.jsx("span",{className:nn.create_acc,onClick:()=>{s(!1),a(!0)},children:"Doesn't Have An Account?"})]}),T.jsx(Ee,{className:nn.sign_in_button,func:()=>{Y()},content:"SIGN IN"})]}),T.jsxs("div",{className:nn.other_platforms_container,children:[T.jsxs("div",{className:nn.icon_wrapper,children:[T.jsx("div",{className:nn.wrapper,children:T.jsx("img",{src:"./platforms/GG.png "})}),T.jsx("div",{className:nn.wrapper,children:T.jsx("img",{src:"./platforms/facebook.png"})}),T.jsx("div",{className:nn.wrapper,children:T.jsx("img",{src:"./platforms/Instagram.png"})})]}),T.jsx("h3",{children:"SIGN IN WITH DIFFERENT PLATFORMS"})]})]})})}const XV="_hide_fc9cy_1",ZV="_inputs_1_fc9cy_7",da={hide:XV,inputs_1:ZV},JV=({show:i,indicated:e,showConfirm:t,setShow:s,setShowConfirm:a,passwordInput:l,confirmPasswordInput:c,emailInput:d,passWarning:_,confirmWarning:m,emailWarning:E})=>T.jsxs("div",{className:e==0?da.inputs_1:da.hide,children:[T.jsxs("div",{className:da.email,children:[T.jsx("h4",{children:"Email"}),T.jsx("input",{type:"text",ref:d}),T.jsx("span",{ref:E})]}),T.jsxs("div",{className:da.password,children:[T.jsx("h4",{children:"Password"}),T.jsx("input",{type:i?"text":"password",ref:l}),T.jsx("img",{src:i?"./password/visible.png":"./password/unsee.png",className:da.see_password,onClick:()=>{s(!i)}}),T.jsx("span",{ref:_})]}),T.jsxs("div",{className:da.confirm,children:[T.jsx("h4",{children:"Confirm Password"}),T.jsx("input",{type:t?"text":"password",ref:c}),T.jsx("img",{src:t?"./password/visible.png":"./password/unsee.png",className:da.see_confirm,onClick:()=>{a(!t)}}),T.jsx("span",{ref:m})]})]}),eL="_hide_6obhl_1",tL="_inputs_2_6obhl_11",nL="_top_6obhl_31",iL="_notIndicated_6obhl_71",sL="_indicated_6obhl_81",wu={hide:eL,inputs_2:tL,top:nL,notIndicated:iL,indicated:sL},rL=({indicated:i,usingAsInput:e,usageOptions:t,handleUsageOptions:s})=>T.jsxs("div",{className:i==1?wu.inputs_2:wu.hide,children:[T.jsx("h3",{children:"Why am I using the To-Do List Web App?"}),T.jsx("div",{children:T.jsxs("div",{className:wu.top,children:[t.map((a,l)=>T.jsx(Ee,{content:a.content,className:a.isIndicated?wu.indicated:wu.notIndicated,func:()=>{s(l)}},a.content)),T.jsx("input",{type:"text",placeholder:"Other reason...",ref:e})]})})]}),aL="_hide_r58tk_1",oL="_inputs_3_r58tk_9",bu={hide:aL,inputs_3:oL},lL=({show:i,indicated:e,showConfirm:t,nickNameInput:s,schoolInput:a,grSecInput:l,nameWarning:c,schoolWarning:d,grSecWarning:_})=>T.jsxs("div",{className:e==2?bu.inputs_3:bu.hide,children:[T.jsxs("div",{className:bu.username,children:[T.jsx("h4",{children:"Name"}),T.jsx("input",{type:"text",ref:s}),T.jsx("span",{ref:c})]}),T.jsxs("div",{className:bu.password,children:[T.jsx("h4",{children:"School"}),T.jsx("input",{type:"text",ref:a}),T.jsx("span",{ref:d})]}),T.jsxs("div",{className:bu.confirm,children:[T.jsx("h4",{children:"Grade & Section"}),T.jsx("input",{type:"text",ref:l}),T.jsx("span",{ref:_})]})]}),uL="_hide_j48mp_15",cL="_inputs_4_j48mp_23",hL="_wrapper_j48mp_85",fL="_IndicatedButt_j48mp_125",dL="_notIndicatedButt_j48mp_145",Do={hide:uL,inputs_4:cL,wrapper:hL,IndicatedButt:fL,notIndicatedButt:dL},pL=({indicated:i,subjects:e,handleSubjects:t})=>{if(e!=null)return T.jsx("div",{className:i==3?Do.inputs_4:Do.hide,children:T.jsxs("div",{className:Do.wrapper,children:[T.jsx("h4",{children:"What is your favorite subject?"}),T.jsx("div",{className:Do.buttons,children:e.map((s,a)=>T.jsx(Ee,{func:()=>{t(a)},className:s.testClass==!0?Do.IndicatedButt:Do.notIndicatedButt,content:e[a].content},s+a.toString()))})]})})},_L="_sign_up_wrapper_6gch2_23",mL="_form_1_6gch2_53",gL="_to_bottom_6gch2_75",yL="_bottom_6gch2_113",vL="_buttons_6gch2_125",EL="_indicator_6gch2_169",TL="_indicated_6gch2_197",SL="_not_indicated_6gch2_205",AL="_goToStartingPage_6gch2_259",fn={sign_up_wrapper:_L,form_1:mL,to_bottom:gL,bottom:yL,buttons:vL,indicator:EL,indicated:TL,not_indicated:SL,goToStartingPage:AL},wL=({setUsers:i,setShowSignInPrompt:e,showSignUpPrompt:t,setShowSignUpPrompt:s,setLoading:a,setContinueAs:l})=>{le.useRef(null),le.useRef(null);const c=le.useRef(null),d=le.useRef(null),_=le.useRef(null),m=le.useRef(null),E=le.useRef(null),S=le.useRef(null),I=le.useRef(null),L=le.useRef(null),F=le.useRef(null),Y=le.useRef(null),z=le.useRef(null),W=le.useRef(null),Q=le.useRef(null),[te,ce]=le.useState(!1),[me,Te]=le.useState(!1),[O,C]=le.useState(0),[b,D]=le.useState(),[x,P]=le.useState([]),[N,ie]=le.useState([{content:"For Studies",isIndicated:!1},{content:"For Teaching Purposes",isIndicated:!1},{content:"For My Job",isIndicated:!1},{content:"Just for Fun",isIndicated:!1}]),[Ie,re]=le.useState([{content:"TLE",testClass:!1},{content:"Mathematics",testClass:!1},{content:"Science",testClass:!1},{content:"English",testClass:!1},{content:"Colloquium",testClass:!1},{content:"Filipino",testClass:!1},{content:"Mapeh",testClass:!1},{content:"AP",testClass:!1},{content:"ESP",testClass:!1}]),fe=ae=>{ae=="next"&&O!=3?C(O+1):ae=="back"&&O!=0&&C(O-1)},de=ae=>{let se=N;for(let ue in se)if(ue==ae){se=se[ae].content;break}D(se),ie(ue=>ue.map((ye,Ae)=>ae==Ae?{...ye,isIndicated:!0}:{...ye,isIndicated:!1}))},Se=ae=>{let se=Ie,ue=[];se=se.map((ye,Ae)=>ae==Ae?{...ye,testClass:ye.testClass!=!0}:{...ye});for(let ye in se)se[ye].testClass==!0&&ue.push(se[ye]);P([...ue]),re(ye=>ye.map((Ae,ht)=>ae==ht?{...Ae,testClass:Ae.testClass!=!0}:{...Ae}))},k=async()=>{const ae={password:c.current.value,email:_.current.value,school:F.current.value,grSec:z.current.value,favSubjects:x};try{await iN(Ia,_.current.value,c.current.value);const se=Ia.currentUser;a(!0),s(!1),se&&await wP(ob(vb,"Users",se.uid),{email:_.current.value,school:F.current.value,name:I.current.value,grSec:z.current.value,favSubjects:x,usingAs:Q==null?void 0:Q.current.value,purpose:b}),i(ue=>[...ue,ae]),a(!1),l(!0)}catch(se){console.log(se)}};function ee(){c.current.value="",d.current.value="",_.current.value="",m.current.value="",E.current.value="",S.current.value="",I.current.value="",L.current.value="",F.current.value="",Y.current.value="",z.current.value="",W.current.value="",Q.current.value="",re(ae=>ae.map(se=>({...se,testClass:!1}))),ie(ae=>ae.map(se=>({...se,isIndicated:!1}))),D(null),P([])}if(t==!0)return T.jsx(T.Fragment,{children:T.jsxs("div",{className:fn.sign_up_wrapper,children:[T.jsx(Ee,{func:()=>{s(!1),ee()},content:"X",className:fn.goToStartingPage}),T.jsxs("form",{onSubmit:ae=>{ae.preventDefault()},className:fn.form_1,children:[T.jsx("header",{children:"SIGN UP"}),T.jsxs("div",{className:fn.to_bottom,children:[T.jsx(JV,{indicated:O,show:te,showConfirm:me,setShowConfirm:ae=>{Te(ae)},setShow:ae=>{ce(ae)},passwordInput:c,confirmPasswordInput:E,emailInput:_,passWarning:d,confirmWarning:S,emailWarning:m}),T.jsx(rL,{indicated:O,usageOptions:N,setUsageOptions:ae=>{ie(ae)},handleUsageOptions:ae=>{de(ae)},usingAsInput:Q}),T.jsx(lL,{indicated:O,schoolInput:F,schoolWarning:Y,grSecInput:z,grSecWarning:W,nickNameInput:I,nameWarning:L}),T.jsx(pL,{indicated:O,subjects:Ie,handleSubjects:ae=>{Se(ae)}}),T.jsxs("div",{className:fn.bottom,children:[T.jsxs("div",{className:fn.buttons,children:[T.jsx(Ee,{content:"BACK",func:()=>{fe("back")}}),T.jsx(Ee,{content:O==3?"SUBMIT":"NEXT",func:()=>{O==3?k():fe("next")}})]}),T.jsxs("div",{className:fn.indicator,children:[T.jsx("div",{className:O==0?fn.indicated:fn.not_indicated}),T.jsx("div",{className:O==1?fn.indicated:fn.not_indicated}),T.jsx("div",{className:O==2?fn.indicated:fn.not_indicated}),T.jsx("div",{className:O==3?fn.indicated:fn.not_indicated})]}),T.jsxs("h4",{id:fn.SignUp,onClick:()=>{e(!0),s(!1),ee()},children:[" ",T.jsx("a",{children:"Already Have an Account?"})," "]})]})]})]})]})})},bL="_Loading_Wrapper_fw8ew_25",CL="_Loading_Bar_fw8ew_59",PS={Loading_Wrapper:bL,Loading_Bar:CL},RL=({loading:i})=>{if(i)return T.jsxs("div",{className:PS.Loading_Wrapper,children:[T.jsx("div",{className:PS.Loading_Bar}),"Loading..."]})},IL="_Continue_As_Wrapper_1tx42_5",NL="_Continue_As_Box_1tx42_47",DL="_Top_1tx42_75",OL="_Options_1tx42_135",Gh={Continue_As_Wrapper:IL,Continue_As_Box:NL,Top:DL,Options:OL},xL=({continueAs:i,setContinueAs:e,user:t,setLoading:s})=>{const[a,l]=le.useState(null),c=async()=>{s(!0);try{await A0(Ia),setUser(null),s(!1),e(!1)}catch(_){s(!1),e(!1),console.log(_)}},d=async()=>{const _=t.uid;console.log(_);const m=ob(vb,"Users",_==null?void 0:_.toLocaleString());try{const E=await SP(m);E.exists&&l(E.data())}catch{}};if(le.useEffect(()=>{t!=null&&d()},[i,t]),i)return T.jsx("div",{className:Gh.Continue_As_Wrapper,children:T.jsxs("div",{className:Gh.Continue_As_Box,children:[T.jsxs("div",{className:Gh.Top,children:[T.jsx("i",{className:"fa fa-user"}),T.jsx("h3",{children:"Continue As: "}),T.jsxs("h3",{children:[a==null?void 0:a.name," ?"]})]}),T.jsxs("div",{className:Gh.Options,children:[T.jsx(Ee,{content:"No",func:()=>{c()}}),T.jsx(Ee,{content:"Yes",func:()=>{e(!1)}})]})]})})},kL="_Signing_Out_Wrapper_d1gt7_5",ML="_Hide_Signing_Out_Wrapper_d1gt7_5",PL="_Signing_Out_Box_d1gt7_47",VL="_Top_d1gt7_75",LL="_Options_d1gt7_137",Cu={Signing_Out_Wrapper:kL,Hide_Signing_Out_Wrapper:ML,Signing_Out_Box:PL,Top:VL,Options:LL},UL=({isSigningOut:i,setIsSigningOut:e,setLoading:t,setUser:s})=>{const a=async()=>{t(!0);try{await A0(Ia),s({}),t(!1),e(!1)}catch(l){t(!1),e(!1),console.log(l)}};if(i)return T.jsx("div",{className:i?Cu.Signing_Out_Wrapper:Cu.Hide_Signing_Out_Wrapper,children:T.jsxs("div",{className:Cu.Signing_Out_Box,children:[T.jsxs("div",{className:Cu.Top,children:[T.jsx("i",{className:"fa fa-user"}),T.jsx("h3",{children:"Would You Like To Sign Out?"})]}),T.jsxs("div",{className:Cu.Options,children:[T.jsx(Ee,{content:"No",func:()=>{e(!1)}}),T.jsx(Ee,{content:"Yes",func:()=>{a()}})]})]})})},jL="_Pages_1x53v_25",BL="_Hide_Pages_1x53v_31",VS={Pages:jL,Hide_Pages:BL};function zL(){const[i,e]=le.useState(!1),[t,s]=le.useState(!1),[a,l]=le.useState(!1),[c,d]=le.useState(window.location.href),[_,m]=le.useState(!1),[E,S]=le.useState(!1),[I,L]=le.useState(!1),[F,Y]=le.useState(!1),[z,W]=le.useState(!1),[Q,te]=le.useState(!1),[ce,me]=le.useState(0),[Te,O]=le.useState(1),[C,b]=le.useState(0),[D,x]=le.useState(JSON.parse(localStorage.getItem("Users"))!=null?JSON.parse(localStorage.getItem("Users")):[]),[P,N]=le.useState({});return le.useEffect(()=>{c.includes("#Home")?O(1):c.includes("#Tasks")?O(2):c.includes("#About")?O(3):c.includes("#Contacts")&&O(4)},[c]),oN(Ia,ie=>{N(ie)}),T.jsx(T.Fragment,{children:T.jsxs("div",{children:[T.jsx(IP,{setPage:ie=>{O(ie)},page:Te,setIndicated:ie=>{b(ie)},indicated:C,showTaskPrompt:i,editing:a,url:c,setUrl:ie=>{d(ie)},showSignInPrompt:_,setShowSignInPrompt:ie=>{m(ie)},showSignUpPrompt:E,setShowSignUpPrompt:ie=>{S(ie)},showSortPrompt:t,user:P,continueAs:F,setIsSigningOut:ie=>{te(ie)}}),T.jsxs("div",{className:!_&&!E?VS.Pages:VS.Hide_Pages,children:[T.jsx(NP,{page:Te,setPage:ie=>{O(ie)},setIndicated:ie=>{b(ie)},indicated:C,user:P}),T.jsx(UV,{page:Te,setShowTaskPrompt:ie=>{e(ie)},showTaskPrompt:i,editing:a,setEditing:ie=>{l(ie)},showSortPrompt:t,setShowSortPrompt:ie=>s(ie),user:P,setUser:ie=>{N(ie)}})]}),T.jsx($V,{page:Te,setPage:ie=>O(ie),showSignInPrompt:_,setShowSignUpPrompt:ie=>{S(ie)},setShowSignInPrompt:ie=>{m(ie)},user:P,setUser:ie=>{N(ie)},setLoading:ie=>L(ie),setContinueAs:ie=>Y(ie)}),T.jsx(wL,{page:Te,setPage:ie=>O(ie),showSignUpPrompt:E,setShowSignInPrompt:ie=>{m(ie)},setShowSignUpPrompt:ie=>{S(ie)},users:D,setUsers:ie=>{x(ie)},user:P,setUser:ie=>{N(ie)},setLoading:ie=>L(ie),setContinueAs:ie=>Y(ie)}),T.jsx(RL,{loading:I}),T.jsx(xL,{continueAs:F,setContinueAs:ie=>{Y(ie)},user:P,setLoading:ie=>L(ie)}),T.jsx(UL,{isSigningOut:Q,setIsSigningOut:ie=>{te(ie)},setLoading:ie=>{L(ie)},setUser:ie=>{N(ie)}})]})})}JC.createRoot(document.getElementById("root")).render(T.jsx(le.StrictMode,{children:T.jsx(zL,{})}));
