(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Zn(e,t){const n=new Set(e.split(","));return s=>n.has(s)}const J={},gt=[],Re=()=>{},_o=()=>!1,cn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Qn=e=>e.startsWith("onUpdate:"),re=Object.assign,es=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},So=Object.prototype.hasOwnProperty,W=(e,t)=>So.call(e,t),D=Array.isArray,vt=e=>Ht(e)==="[object Map]",un=e=>Ht(e)==="[object Set]",bs=e=>Ht(e)==="[object Date]",x=e=>typeof e=="function",oe=e=>typeof e=="string",Ve=e=>typeof e=="symbol",q=e=>e!==null&&typeof e=="object",pr=e=>(q(e)||x(e))&&x(e.then)&&x(e.catch),mr=Object.prototype.toString,Ht=e=>mr.call(e),Ao=e=>Ht(e).slice(8,-1),gr=e=>Ht(e)==="[object Object]",ts=e=>oe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Lt=Zn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},bo=/-(\w)/g,He=fn(e=>e.replace(bo,(t,n)=>n?n.toUpperCase():"")),Ro=/\B([A-Z])/g,Ct=fn(e=>e.replace(Ro,"-$1").toLowerCase()),dn=fn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Rn=fn(e=>e?`on${dn(e)}`:""),ht=(e,t)=>!Object.is(e,t),jt=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},vr=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},tn=e=>{const t=parseFloat(e);return isNaN(t)?e:t},wo=e=>{const t=oe(e)?Number(e):NaN;return isNaN(t)?e:t};let Rs;const yr=()=>Rs||(Rs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _t(e){if(D(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=oe(s)?Mo(s):_t(s);if(r)for(const o in r)t[o]=r[o]}return t}else if(oe(e)||q(e))return e}const Lo=/;(?![^(]*\))/g,Do=/:([^]+)/,Eo=/\/\*[^]*?\*\//g;function Mo(e){const t={};return e.replace(Eo,"").split(Lo).forEach(n=>{if(n){const s=n.split(Do);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Te(e){let t="";if(oe(e))t=e;else if(D(e))for(let n=0;n<e.length;n++){const s=Te(e[n]);s&&(t+=s+" ")}else if(q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const xo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ko=Zn(xo);function Tr(e){return!!e||e===""}function Fo(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=hn(e[s],t[s]);return n}function hn(e,t){if(e===t)return!0;let n=bs(e),s=bs(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=Ve(e),s=Ve(t),n||s)return e===t;if(n=D(e),s=D(t),n||s)return n&&s?Fo(e,t):!1;if(n=q(e),s=q(t),n||s){if(!n||!s)return!1;const r=Object.keys(e).length,o=Object.keys(t).length;if(r!==o)return!1;for(const i in e){const l=e.hasOwnProperty(i),c=t.hasOwnProperty(i);if(l&&!c||!l&&c||!hn(e[i],t[i]))return!1}}return String(e)===String(t)}function Io(e,t){return e.findIndex(n=>hn(n,t))}const se=e=>oe(e)?e:e==null?"":D(e)||q(e)&&(e.toString===mr||!x(e.toString))?JSON.stringify(e,Cr,2):String(e),Cr=(e,t)=>t&&t.__v_isRef?Cr(e,t.value):vt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],o)=>(n[wn(s,o)+" =>"]=r,n),{})}:un(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>wn(n))}:Ve(t)?wn(t):q(t)&&!D(t)&&!gr(t)?String(t):t,wn=(e,t="")=>{var n;return Ve(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ee;class Oo{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ee,!t&&Ee&&(this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ee;try{return Ee=this,t()}finally{Ee=n}}}on(){Ee=this}off(){Ee=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Po(e,t=Ee){t&&t.active&&t.effects.push(e)}function Ho(){return Ee}let ft;class ns{constructor(t,n,s,r){this.fn=t,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Po(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Qe();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Bo(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),et()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Ye,n=ft;try{return Ye=!0,ft=this,this._runnings++,ws(this),this.fn()}finally{Ls(this),this._runnings--,ft=n,Ye=t}}stop(){this.active&&(ws(this),Ls(this),this.onStop&&this.onStop(),this.active=!1)}}function Bo(e){return e.value}function ws(e){e._trackId++,e._depsLength=0}function Ls(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)_r(e.deps[t],e);e.deps.length=e._depsLength}}function _r(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let Ye=!0,Hn=0;const Sr=[];function Qe(){Sr.push(Ye),Ye=!1}function et(){const e=Sr.pop();Ye=e===void 0?!0:e}function ss(){Hn++}function rs(){for(Hn--;!Hn&&Bn.length;)Bn.shift()()}function Ar(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const s=e.deps[e._depsLength];s!==t?(s&&_r(s,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Bn=[];function br(e,t,n){ss();for(const s of e.keys()){let r;s._dirtyLevel<t&&(r??(r=e.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=t),s._shouldSchedule&&(r??(r=e.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&Bn.push(s.scheduler)))}rs()}const Rr=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},$n=new WeakMap,dt=Symbol(""),Vn=Symbol("");function Ce(e,t,n){if(Ye&&ft){let s=$n.get(e);s||$n.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=Rr(()=>s.delete(n))),Ar(ft,r)}}function $e(e,t,n,s,r,o){const i=$n.get(e);if(!i)return;let l=[];if(t==="clear")l=[...i.values()];else if(n==="length"&&D(e)){const c=Number(s);i.forEach((f,d)=>{(d==="length"||!Ve(d)&&d>=c)&&l.push(f)})}else switch(n!==void 0&&l.push(i.get(n)),t){case"add":D(e)?ts(n)&&l.push(i.get("length")):(l.push(i.get(dt)),vt(e)&&l.push(i.get(Vn)));break;case"delete":D(e)||(l.push(i.get(dt)),vt(e)&&l.push(i.get(Vn)));break;case"set":vt(e)&&l.push(i.get(dt));break}ss();for(const c of l)c&&br(c,4);rs()}const $o=Zn("__proto__,__v_isRef,__isVue"),wr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ve)),Ds=Vo();function Vo(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=K(this);for(let o=0,i=this.length;o<i;o++)Ce(s,"get",o+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(K)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Qe(),ss();const s=K(this)[t].apply(this,n);return rs(),et(),s}}),e}function Wo(e){Ve(e)||(e=String(e));const t=K(this);return Ce(t,"has",e),t.hasOwnProperty(e)}class Lr{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){const r=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw")return s===(r?o?ei:xr:o?Mr:Er).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const i=D(t);if(!r){if(i&&W(Ds,n))return Reflect.get(Ds,n,s);if(n==="hasOwnProperty")return Wo}const l=Reflect.get(t,n,s);return(Ve(n)?wr.has(n):$o(n))||(r||Ce(t,"get",n),o)?l:Ae(l)?i&&ts(n)?l:l.value:q(l)?r?kr(l):mn(l):l}}class Dr extends Lr{constructor(t=!1){super(!1,t)}set(t,n,s,r){let o=t[n];if(!this._isShallow){const c=nn(o);if(!Wn(s)&&!nn(s)&&(o=K(o),s=K(s)),!D(t)&&Ae(o)&&!Ae(s))return c?!1:(o.value=s,!0)}const i=D(t)&&ts(n)?Number(n)<t.length:W(t,n),l=Reflect.set(t,n,s,r);return t===K(r)&&(i?ht(s,o)&&$e(t,"set",n,s):$e(t,"add",n,s)),l}deleteProperty(t,n){const s=W(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&$e(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!Ve(n)||!wr.has(n))&&Ce(t,"has",n),s}ownKeys(t){return Ce(t,"iterate",D(t)?"length":dt),Reflect.ownKeys(t)}}class No extends Lr{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ko=new Dr,Uo=new No,qo=new Dr(!0);const os=e=>e,pn=e=>Reflect.getPrototypeOf(e);function Wt(e,t,n=!1,s=!1){e=e.__v_raw;const r=K(e),o=K(t);n||(ht(t,o)&&Ce(r,"get",t),Ce(r,"get",o));const{has:i}=pn(r),l=s?os:n?cs:as;if(i.call(r,t))return l(e.get(t));if(i.call(r,o))return l(e.get(o));e!==r&&e.get(t)}function Nt(e,t=!1){const n=this.__v_raw,s=K(n),r=K(e);return t||(ht(e,r)&&Ce(s,"has",e),Ce(s,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function Kt(e,t=!1){return e=e.__v_raw,!t&&Ce(K(e),"iterate",dt),Reflect.get(e,"size",e)}function Es(e){e=K(e);const t=K(this);return pn(t).has.call(t,e)||(t.add(e),$e(t,"add",e,e)),this}function Ms(e,t){t=K(t);const n=K(this),{has:s,get:r}=pn(n);let o=s.call(n,e);o||(e=K(e),o=s.call(n,e));const i=r.call(n,e);return n.set(e,t),o?ht(t,i)&&$e(n,"set",e,t):$e(n,"add",e,t),this}function xs(e){const t=K(this),{has:n,get:s}=pn(t);let r=n.call(t,e);r||(e=K(e),r=n.call(t,e)),s&&s.call(t,e);const o=t.delete(e);return r&&$e(t,"delete",e,void 0),o}function ks(){const e=K(this),t=e.size!==0,n=e.clear();return t&&$e(e,"clear",void 0,void 0),n}function Ut(e,t){return function(s,r){const o=this,i=o.__v_raw,l=K(i),c=t?os:e?cs:as;return!e&&Ce(l,"iterate",dt),i.forEach((f,d)=>s.call(r,c(f),c(d),o))}}function qt(e,t,n){return function(...s){const r=this.__v_raw,o=K(r),i=vt(o),l=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,f=r[e](...s),d=n?os:t?cs:as;return!t&&Ce(o,"iterate",c?Vn:dt),{next(){const{value:m,done:p}=f.next();return p?{value:m,done:p}:{value:l?[d(m[0]),d(m[1])]:d(m),done:p}},[Symbol.iterator](){return this}}}}function Ke(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Go(){const e={get(o){return Wt(this,o)},get size(){return Kt(this)},has:Nt,add:Es,set:Ms,delete:xs,clear:ks,forEach:Ut(!1,!1)},t={get(o){return Wt(this,o,!1,!0)},get size(){return Kt(this)},has:Nt,add:Es,set:Ms,delete:xs,clear:ks,forEach:Ut(!1,!0)},n={get(o){return Wt(this,o,!0)},get size(){return Kt(this,!0)},has(o){return Nt.call(this,o,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:Ut(!0,!1)},s={get(o){return Wt(this,o,!0,!0)},get size(){return Kt(this,!0)},has(o){return Nt.call(this,o,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:Ut(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=qt(o,!1,!1),n[o]=qt(o,!0,!1),t[o]=qt(o,!1,!0),s[o]=qt(o,!0,!0)}),[e,n,t,s]}const[zo,jo,Jo,Yo]=Go();function is(e,t){const n=t?e?Yo:Jo:e?jo:zo;return(s,r,o)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(W(n,r)&&r in s?n:s,r,o)}const Xo={get:is(!1,!1)},Zo={get:is(!1,!0)},Qo={get:is(!0,!1)};const Er=new WeakMap,Mr=new WeakMap,xr=new WeakMap,ei=new WeakMap;function ti(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ni(e){return e.__v_skip||!Object.isExtensible(e)?0:ti(Ao(e))}function mn(e){return nn(e)?e:ls(e,!1,Ko,Xo,Er)}function si(e){return ls(e,!1,qo,Zo,Mr)}function kr(e){return ls(e,!0,Uo,Qo,xr)}function ls(e,t,n,s,r){if(!q(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=r.get(e);if(o)return o;const i=ni(e);if(i===0)return e;const l=new Proxy(e,i===2?s:n);return r.set(e,l),l}function Dt(e){return nn(e)?Dt(e.__v_raw):!!(e&&e.__v_isReactive)}function nn(e){return!!(e&&e.__v_isReadonly)}function Wn(e){return!!(e&&e.__v_isShallow)}function Fr(e){return e?!!e.__v_raw:!1}function K(e){const t=e&&e.__v_raw;return t?K(t):e}function ri(e){return Object.isExtensible(e)&&vr(e,"__v_skip",!0),e}const as=e=>q(e)?mn(e):e,cs=e=>q(e)?kr(e):e;class Ir{constructor(t,n,s,r){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ns(()=>t(this._value),()=>Ln(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=K(this);return(!t._cacheable||t.effect.dirty)&&ht(t._value,t._value=t.effect.run())&&Ln(t,4),ii(t),t.effect._dirtyLevel>=2&&Ln(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function oi(e,t,n=!1){let s,r;const o=x(e);return o?(s=e,r=Re):(s=e.get,r=e.set),new Ir(s,r,o||!r,n)}function ii(e){var t;Ye&&ft&&(e=K(e),Ar(ft,(t=e.dep)!=null?t:e.dep=Rr(()=>e.dep=void 0,e instanceof Ir?e:void 0)))}function Ln(e,t=4,n){e=K(e);const s=e.dep;s&&br(s,t)}function Ae(e){return!!(e&&e.__v_isRef===!0)}function li(e){return Ae(e)?e.value:e}const ai={get:(e,t,n)=>li(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return Ae(r)&&!Ae(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Or(e){return Dt(e)?e:new Proxy(e,ai)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Xe(e,t,n,s){try{return s?e(...s):e()}catch(r){gn(r,t,n)}}function Le(e,t,n,s){if(x(e)){const r=Xe(e,t,n,s);return r&&pr(r)&&r.catch(o=>{gn(o,t,n)}),r}if(D(e)){const r=[];for(let o=0;o<e.length;o++)r.push(Le(e[o],t,n,s));return r}}function gn(e,t,n,s=!0){const r=t?t.vnode:null;if(t){let o=t.parent;const i=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const f=o.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,i,l)===!1)return}o=o.parent}const c=t.appContext.config.errorHandler;if(c){Qe(),Xe(c,null,10,[e,i,l]),et();return}}ci(e,n,r,s)}function ci(e,t,n,s=!0){console.error(e)}let kt=!1,Nn=!1;const pe=[];let Pe=0;const yt=[];let Ge=null,lt=0;const Pr=Promise.resolve();let us=null;function Hr(e){const t=us||Pr;return e?t.then(this?e.bind(this):e):t}function ui(e){let t=Pe+1,n=pe.length;for(;t<n;){const s=t+n>>>1,r=pe[s],o=Ft(r);o<e||o===e&&r.pre?t=s+1:n=s}return t}function fs(e){(!pe.length||!pe.includes(e,kt&&e.allowRecurse?Pe+1:Pe))&&(e.id==null?pe.push(e):pe.splice(ui(e.id),0,e),Br())}function Br(){!kt&&!Nn&&(Nn=!0,us=Pr.then(Vr))}function fi(e){const t=pe.indexOf(e);t>Pe&&pe.splice(t,1)}function di(e){D(e)?yt.push(...e):(!Ge||!Ge.includes(e,e.allowRecurse?lt+1:lt))&&yt.push(e),Br()}function Fs(e,t,n=kt?Pe+1:0){for(;n<pe.length;n++){const s=pe[n];if(s&&s.pre){if(e&&s.id!==e.uid)continue;pe.splice(n,1),n--,s()}}}function $r(e){if(yt.length){const t=[...new Set(yt)].sort((n,s)=>Ft(n)-Ft(s));if(yt.length=0,Ge){Ge.push(...t);return}for(Ge=t,lt=0;lt<Ge.length;lt++)Ge[lt]();Ge=null,lt=0}}const Ft=e=>e.id==null?1/0:e.id,hi=(e,t)=>{const n=Ft(e)-Ft(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Vr(e){Nn=!1,kt=!0,pe.sort(hi);try{for(Pe=0;Pe<pe.length;Pe++){const t=pe[Pe];t&&t.active!==!1&&Xe(t,null,14)}}finally{Pe=0,pe.length=0,$r(),kt=!1,us=null,(pe.length||yt.length)&&Vr()}}function pi(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||J;let r=n;const o=t.startsWith("update:"),i=o&&t.slice(7);if(i&&i in s){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:m,trim:p}=s[d]||J;p&&(r=n.map(R=>oe(R)?R.trim():R)),m&&(r=n.map(tn))}let l,c=s[l=Rn(t)]||s[l=Rn(He(t))];!c&&o&&(c=s[l=Rn(Ct(t))]),c&&Le(c,e,6,r);const f=s[l+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Le(f,e,6,r)}}function Wr(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const o=e.emits;let i={},l=!1;if(!x(e)){const c=f=>{const d=Wr(f,t,!0);d&&(l=!0,re(i,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!o&&!l?(q(e)&&s.set(e,null),null):(D(o)?o.forEach(c=>i[c]=null):re(i,o),q(e)&&s.set(e,i),i)}function vn(e,t){return!e||!cn(t)?!1:(t=t.slice(2).replace(/Once$/,""),W(e,t[0].toLowerCase()+t.slice(1))||W(e,Ct(t))||W(e,t))}let ve=null,Nr=null;function sn(e){const t=ve;return ve=e,Nr=e&&e.type.__scopeId||null,t}function Kr(e,t=ve,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&Gs(-1);const o=sn(t);let i;try{i=e(...r)}finally{sn(o),s._d&&Gs(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function Dn(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[o],slots:i,attrs:l,emit:c,render:f,renderCache:d,props:m,data:p,setupState:R,ctx:B,inheritAttrs:O}=e,ee=sn(e);let G,Y;try{if(n.shapeFlag&4){const $=r||s,te=$;G=Oe(f.call(te,$,d,m,R,p,B)),Y=l}else{const $=t;G=Oe($.length>1?$(m,{attrs:l,slots:i,emit:c}):$(m,null)),Y=t.props?l:mi(l)}}catch($){xt.length=0,gn($,e,1),G=N(we)}let V=G;if(Y&&O!==!1){const $=Object.keys(Y),{shapeFlag:te}=V;$.length&&te&7&&(o&&$.some(Qn)&&(Y=gi(Y,o)),V=Ze(V,Y,!1,!0))}return n.dirs&&(V=Ze(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),G=V,sn(ee),G}const mi=e=>{let t;for(const n in e)(n==="class"||n==="style"||cn(n))&&((t||(t={}))[n]=e[n]);return t},gi=(e,t)=>{const n={};for(const s in e)(!Qn(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function vi(e,t,n){const{props:s,children:r,component:o}=e,{props:i,children:l,patchFlag:c}=t,f=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Is(s,i,f):!!i;if(c&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const p=d[m];if(i[p]!==s[p]&&!vn(f,p))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===i?!1:s?i?Is(s,i,f):!0:!!i;return!1}function Is(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const o=s[r];if(t[o]!==e[o]&&!vn(n,o))return!0}return!1}function yi({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ti="components";function ue(e,t){return _i(Ti,e,!0,t)||e}const Ci=Symbol.for("v-ndc");function _i(e,t,n=!0,s=!1){const r=ve||fe;if(r){const o=r.type;{const l=yl(o,!1);if(l&&(l===t||l===He(t)||l===dn(He(t))))return o}const i=Os(r[e]||o[e],t)||Os(r.appContext[e],t);return!i&&s?o:i}}function Os(e,t){return e&&(e[t]||e[He(t)]||e[dn(He(t))])}const Si=e=>e.__isSuspense;function Ai(e,t){t&&t.pendingBranch?D(e)?t.effects.push(...e):t.effects.push(e):di(e)}const bi=Symbol.for("v-scx"),Ri=()=>Yt(bi),Gt={};function En(e,t,n){return Ur(e,t,n)}function Ur(e,t,{immediate:n,deep:s,flush:r,once:o,onTrack:i,onTrigger:l}=J){if(t&&o){const P=t;t=(...me)=>{P(...me),te()}}const c=fe,f=P=>s===!0?P:ut(P,s===!1?1:void 0);let d,m=!1,p=!1;if(Ae(e)?(d=()=>e.value,m=Wn(e)):Dt(e)?(d=()=>f(e),m=!0):D(e)?(p=!0,m=e.some(P=>Dt(P)||Wn(P)),d=()=>e.map(P=>{if(Ae(P))return P.value;if(Dt(P))return f(P);if(x(P))return Xe(P,c,2)})):x(e)?t?d=()=>Xe(e,c,2):d=()=>(R&&R(),Le(e,c,3,[B])):d=Re,t&&s){const P=d;d=()=>ut(P())}let R,B=P=>{R=V.onStop=()=>{Xe(P,c,4),R=V.onStop=void 0}},O;if(_n)if(B=Re,t?n&&Le(t,c,3,[d(),p?[]:void 0,B]):d(),r==="sync"){const P=Ri();O=P.__watcherHandles||(P.__watcherHandles=[])}else return Re;let ee=p?new Array(e.length).fill(Gt):Gt;const G=()=>{if(!(!V.active||!V.dirty))if(t){const P=V.run();(s||m||(p?P.some((me,k)=>ht(me,ee[k])):ht(P,ee)))&&(R&&R(),Le(t,c,3,[P,ee===Gt?void 0:p&&ee[0]===Gt?[]:ee,B]),ee=P)}else V.run()};G.allowRecurse=!!t;let Y;r==="sync"?Y=G:r==="post"?Y=()=>ye(G,c&&c.suspense):(G.pre=!0,c&&(G.id=c.uid),Y=()=>fs(G));const V=new ns(d,Re,Y),$=Ho(),te=()=>{V.stop(),$&&es($.effects,V)};return t?n?G():ee=V.run():r==="post"?ye(V.run.bind(V),c&&c.suspense):V.run(),O&&O.push(te),te}function wi(e,t,n){const s=this.proxy,r=oe(e)?e.includes(".")?qr(s,e):()=>s[e]:e.bind(s,s);let o;x(t)?o=t:(o=t.handler,n=t);const i=Bt(this),l=Ur(r,o.bind(s),n);return i(),l}function qr(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function ut(e,t=1/0,n){if(t<=0||!q(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Ae(e))ut(e.value,t,n);else if(D(e))for(let s=0;s<e.length;s++)ut(e[s],t,n);else if(un(e)||vt(e))e.forEach(s=>{ut(s,t,n)});else if(gr(e))for(const s in e)ut(e[s],t,n);return e}function Ps(e,t){if(ve===null)return e;const n=Sn(ve)||ve.proxy,s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[o,i,l,c=J]=t[r];o&&(x(o)&&(o={mounted:o,updated:o}),o.deep&&ut(i),s.push({dir:o,instance:n,value:i,oldValue:void 0,arg:l,modifiers:c}))}return e}function st(e,t,n,s){const r=e.dirs,o=t&&t.dirs;for(let i=0;i<r.length;i++){const l=r[i];o&&(l.oldValue=o[i].value);let c=l.dir[s];c&&(Qe(),Le(c,n,8,[e.el,l,e,t]),et())}}const ze=Symbol("_leaveCb"),zt=Symbol("_enterCb");function Li(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Yr(()=>{e.isMounted=!0}),Xr(()=>{e.isUnmounting=!0}),e}const be=[Function,Array],Gr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:be,onEnter:be,onAfterEnter:be,onEnterCancelled:be,onBeforeLeave:be,onLeave:be,onAfterLeave:be,onLeaveCancelled:be,onBeforeAppear:be,onAppear:be,onAfterAppear:be,onAppearCancelled:be},Di={name:"BaseTransition",props:Gr,setup(e,{slots:t}){const n=hl(),s=Li();return()=>{const r=t.default&&jr(t.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const p of r)if(p.type!==we){o=p;break}}const i=K(e),{mode:l}=i;if(s.isLeaving)return Mn(o);const c=Hs(o);if(!c)return Mn(o);const f=Kn(c,i,s,n);Un(c,f);const d=n.subTree,m=d&&Hs(d);if(m&&m.type!==we&&!at(c,m)){const p=Kn(m,i,s,n);if(Un(m,p),l==="out-in"&&c.type!==we)return s.isLeaving=!0,p.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Mn(o);l==="in-out"&&c.type!==we&&(p.delayLeave=(R,B,O)=>{const ee=zr(s,m);ee[String(m.key)]=m,R[ze]=()=>{B(),R[ze]=void 0,delete f.delayedLeave},f.delayedLeave=O})}return o}}},Ei=Di;function zr(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Kn(e,t,n,s){const{appear:r,mode:o,persisted:i=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:m,onLeave:p,onAfterLeave:R,onLeaveCancelled:B,onBeforeAppear:O,onAppear:ee,onAfterAppear:G,onAppearCancelled:Y}=t,V=String(e.key),$=zr(n,e),te=(k,ne)=>{k&&Le(k,s,9,ne)},P=(k,ne)=>{const j=ne[1];te(k,ne),D(k)?k.every(he=>he.length<=1)&&j():k.length<=1&&j()},me={mode:o,persisted:i,beforeEnter(k){let ne=l;if(!n.isMounted)if(r)ne=O||l;else return;k[ze]&&k[ze](!0);const j=$[V];j&&at(e,j)&&j.el[ze]&&j.el[ze](),te(ne,[k])},enter(k){let ne=c,j=f,he=d;if(!n.isMounted)if(r)ne=ee||c,j=G||f,he=Y||d;else return;let w=!1;const Z=k[zt]=_e=>{w||(w=!0,_e?te(he,[k]):te(j,[k]),me.delayedLeave&&me.delayedLeave(),k[zt]=void 0)};ne?P(ne,[k,Z]):Z()},leave(k,ne){const j=String(e.key);if(k[zt]&&k[zt](!0),n.isUnmounting)return ne();te(m,[k]);let he=!1;const w=k[ze]=Z=>{he||(he=!0,ne(),Z?te(B,[k]):te(R,[k]),k[ze]=void 0,$[j]===e&&delete $[j])};$[j]=e,p?P(p,[k,w]):w()},clone(k){return Kn(k,t,n,s)}};return me}function Mn(e){if(yn(e))return e=Ze(e),e.children=null,e}function Hs(e){if(!yn(e))return e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&x(n.default))return n.default()}}function Un(e,t){e.shapeFlag&6&&e.component?Un(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function jr(e,t=!1,n){let s=[],r=0;for(let o=0;o<e.length;o++){let i=e[o];const l=n==null?i.key:String(n)+String(i.key!=null?i.key:o);i.type===ie?(i.patchFlag&128&&r++,s=s.concat(jr(i.children,t,l))):(t||i.type!==we)&&s.push(l!=null?Ze(i,{key:l}):i)}if(r>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function We(e,t){return x(e)?re({name:e.name},t,{setup:e}):e}const Jt=e=>!!e.type.__asyncLoader,yn=e=>e.type.__isKeepAlive;function Mi(e,t){Jr(e,"a",t)}function xi(e,t){Jr(e,"da",t)}function Jr(e,t,n=fe){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Tn(t,s,n),n){let r=n.parent;for(;r&&r.parent;)yn(r.parent.vnode)&&ki(s,t,n,r),r=r.parent}}function ki(e,t,n,s){const r=Tn(t,e,s,!0);Zr(()=>{es(s[t],r)},n)}function Tn(e,t,n=fe,s=!1){if(n){const r=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;Qe();const l=Bt(n),c=Le(t,n,e,i);return l(),et(),c});return s?r.unshift(o):r.push(o),o}}const Ne=e=>(t,n=fe)=>(!_n||e==="sp")&&Tn(e,(...s)=>t(...s),n),Fi=Ne("bm"),Yr=Ne("m"),Ii=Ne("bu"),Oi=Ne("u"),Xr=Ne("bum"),Zr=Ne("um"),Pi=Ne("sp"),Hi=Ne("rtg"),Bi=Ne("rtc");function $i(e,t=fe){Tn("ec",e,t)}function It(e,t,n,s){let r;const o=n;if(D(e)||oe(e)){r=new Array(e.length);for(let i=0,l=e.length;i<l;i++)r[i]=t(e[i],i,void 0,o)}else if(typeof e=="number"){r=new Array(e);for(let i=0;i<e;i++)r[i]=t(i+1,i,void 0,o)}else if(q(e))if(e[Symbol.iterator])r=Array.from(e,(i,l)=>t(i,l,void 0,o));else{const i=Object.keys(e);r=new Array(i.length);for(let l=0,c=i.length;l<c;l++){const f=i[l];r[l]=t(e[f],f,l,o)}}else r=[];return r}const qn=e=>e?mo(e)?Sn(e)||e.proxy:qn(e.parent):null,Et=re(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>qn(e.parent),$root:e=>qn(e.root),$emit:e=>e.emit,$options:e=>ds(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,fs(e.update)}),$nextTick:e=>e.n||(e.n=Hr.bind(e.proxy)),$watch:e=>wi.bind(e)}),xn=(e,t)=>e!==J&&!e.__isScriptSetup&&W(e,t),Vi={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:o,accessCache:i,type:l,appContext:c}=e;let f;if(t[0]!=="$"){const R=i[t];if(R!==void 0)switch(R){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return o[t]}else{if(xn(s,t))return i[t]=1,s[t];if(r!==J&&W(r,t))return i[t]=2,r[t];if((f=e.propsOptions[0])&&W(f,t))return i[t]=3,o[t];if(n!==J&&W(n,t))return i[t]=4,n[t];Gn&&(i[t]=0)}}const d=Et[t];let m,p;if(d)return t==="$attrs"&&Ce(e.attrs,"get",""),d(e);if((m=l.__cssModules)&&(m=m[t]))return m;if(n!==J&&W(n,t))return i[t]=4,n[t];if(p=c.config.globalProperties,W(p,t))return p[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:o}=e;return xn(r,t)?(r[t]=n,!0):s!==J&&W(s,t)?(s[t]=n,!0):W(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:o}},i){let l;return!!n[i]||e!==J&&W(e,i)||xn(t,i)||(l=o[0])&&W(l,i)||W(s,i)||W(Et,i)||W(r.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:W(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Bs(e){return D(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Gn=!0;function Wi(e){const t=ds(e),n=e.proxy,s=e.ctx;Gn=!1,t.beforeCreate&&$s(t.beforeCreate,e,"bc");const{data:r,computed:o,methods:i,watch:l,provide:c,inject:f,created:d,beforeMount:m,mounted:p,beforeUpdate:R,updated:B,activated:O,deactivated:ee,beforeDestroy:G,beforeUnmount:Y,destroyed:V,unmounted:$,render:te,renderTracked:P,renderTriggered:me,errorCaptured:k,serverPrefetch:ne,expose:j,inheritAttrs:he,components:w,directives:Z,filters:_e}=t;if(f&&Ni(f,s,null),i)for(const Q in i){const z=i[Q];x(z)&&(s[Q]=z.bind(n))}if(r){const Q=r.call(n,n);q(Q)&&(e.data=mn(Q))}if(Gn=!0,o)for(const Q in o){const z=o[Q],tt=x(z)?z.bind(n,n):x(z.get)?z.get.bind(n,n):Re,$t=!x(z)&&x(z.set)?z.set.bind(n):Re,nt=Cl({get:tt,set:$t});Object.defineProperty(s,Q,{enumerable:!0,configurable:!0,get:()=>nt.value,set:xe=>nt.value=xe})}if(l)for(const Q in l)Qr(l[Q],s,n,Q);if(c){const Q=x(c)?c.call(n):c;Reflect.ownKeys(Q).forEach(z=>{ji(z,Q[z])})}d&&$s(d,e,"c");function le(Q,z){D(z)?z.forEach(tt=>Q(tt.bind(n))):z&&Q(z.bind(n))}if(le(Fi,m),le(Yr,p),le(Ii,R),le(Oi,B),le(Mi,O),le(xi,ee),le($i,k),le(Bi,P),le(Hi,me),le(Xr,Y),le(Zr,$),le(Pi,ne),D(j))if(j.length){const Q=e.exposed||(e.exposed={});j.forEach(z=>{Object.defineProperty(Q,z,{get:()=>n[z],set:tt=>n[z]=tt})})}else e.exposed||(e.exposed={});te&&e.render===Re&&(e.render=te),he!=null&&(e.inheritAttrs=he),w&&(e.components=w),Z&&(e.directives=Z)}function Ni(e,t,n=Re){D(e)&&(e=zn(e));for(const s in e){const r=e[s];let o;q(r)?"default"in r?o=Yt(r.from||s,r.default,!0):o=Yt(r.from||s):o=Yt(r),Ae(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[s]=o}}function $s(e,t,n){Le(D(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Qr(e,t,n,s){const r=s.includes(".")?qr(n,s):()=>n[s];if(oe(e)){const o=t[e];x(o)&&En(r,o)}else if(x(e))En(r,e.bind(n));else if(q(e))if(D(e))e.forEach(o=>Qr(o,t,n,s));else{const o=x(e.handler)?e.handler.bind(n):t[e.handler];x(o)&&En(r,o,e)}}function ds(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,l=o.get(t);let c;return l?c=l:!r.length&&!n&&!s?c=t:(c={},r.length&&r.forEach(f=>rn(c,f,i,!0)),rn(c,t,i)),q(t)&&o.set(t,c),c}function rn(e,t,n,s=!1){const{mixins:r,extends:o}=t;o&&rn(e,o,n,!0),r&&r.forEach(i=>rn(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const l=Ki[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const Ki={data:Vs,props:Ws,emits:Ws,methods:wt,computed:wt,beforeCreate:ge,created:ge,beforeMount:ge,mounted:ge,beforeUpdate:ge,updated:ge,beforeDestroy:ge,beforeUnmount:ge,destroyed:ge,unmounted:ge,activated:ge,deactivated:ge,errorCaptured:ge,serverPrefetch:ge,components:wt,directives:wt,watch:qi,provide:Vs,inject:Ui};function Vs(e,t){return t?e?function(){return re(x(e)?e.call(this,this):e,x(t)?t.call(this,this):t)}:t:e}function Ui(e,t){return wt(zn(e),zn(t))}function zn(e){if(D(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ge(e,t){return e?[...new Set([].concat(e,t))]:t}function wt(e,t){return e?re(Object.create(null),e,t):t}function Ws(e,t){return e?D(e)&&D(t)?[...new Set([...e,...t])]:re(Object.create(null),Bs(e),Bs(t??{})):t}function qi(e,t){if(!e)return t;if(!t)return e;const n=re(Object.create(null),e);for(const s in t)n[s]=ge(e[s],t[s]);return n}function eo(){return{app:null,config:{isNativeTag:_o,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gi=0;function zi(e,t){return function(s,r=null){x(s)||(s=re({},s)),r!=null&&!q(r)&&(r=null);const o=eo(),i=new WeakSet;let l=!1;const c=o.app={_uid:Gi++,_component:s,_props:r,_container:null,_context:o,_instance:null,version:Sl,get config(){return o.config},set config(f){},use(f,...d){return i.has(f)||(f&&x(f.install)?(i.add(f),f.install(c,...d)):x(f)&&(i.add(f),f(c,...d))),c},mixin(f){return o.mixins.includes(f)||o.mixins.push(f),c},component(f,d){return d?(o.components[f]=d,c):o.components[f]},directive(f,d){return d?(o.directives[f]=d,c):o.directives[f]},mount(f,d,m){if(!l){const p=N(s,r);return p.appContext=o,m===!0?m="svg":m===!1&&(m=void 0),d&&t?t(p,f):e(p,f,m),l=!0,c._container=f,f.__vue_app__=c,Sn(p.component)||p.component.proxy}},unmount(){l&&(e(null,c._container),delete c._container.__vue_app__)},provide(f,d){return o.provides[f]=d,c},runWithContext(f){const d=Mt;Mt=c;try{return f()}finally{Mt=d}}};return c}}let Mt=null;function ji(e,t){if(fe){let n=fe.provides;const s=fe.parent&&fe.parent.provides;s===n&&(n=fe.provides=Object.create(s)),n[e]=t}}function Yt(e,t,n=!1){const s=fe||ve;if(s||Mt){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Mt._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&x(t)?t.call(s&&s.proxy):t}}const to={},no=()=>Object.create(to),so=e=>Object.getPrototypeOf(e)===to;function Ji(e,t,n,s=!1){const r={},o=no();e.propsDefaults=Object.create(null),ro(e,t,r,o);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);n?e.props=s?r:si(r):e.type.props?e.props=r:e.props=o,e.attrs=o}function Yi(e,t,n,s){const{props:r,attrs:o,vnode:{patchFlag:i}}=e,l=K(r),[c]=e.propsOptions;let f=!1;if((s||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let p=d[m];if(vn(e.emitsOptions,p))continue;const R=t[p];if(c)if(W(o,p))R!==o[p]&&(o[p]=R,f=!0);else{const B=He(p);r[B]=jn(c,l,B,R,e,!1)}else R!==o[p]&&(o[p]=R,f=!0)}}}else{ro(e,t,r,o)&&(f=!0);let d;for(const m in l)(!t||!W(t,m)&&((d=Ct(m))===m||!W(t,d)))&&(c?n&&(n[m]!==void 0||n[d]!==void 0)&&(r[m]=jn(c,l,m,void 0,e,!0)):delete r[m]);if(o!==l)for(const m in o)(!t||!W(t,m))&&(delete o[m],f=!0)}f&&$e(e.attrs,"set","")}function ro(e,t,n,s){const[r,o]=e.propsOptions;let i=!1,l;if(t)for(let c in t){if(Lt(c))continue;const f=t[c];let d;r&&W(r,d=He(c))?!o||!o.includes(d)?n[d]=f:(l||(l={}))[d]=f:vn(e.emitsOptions,c)||(!(c in s)||f!==s[c])&&(s[c]=f,i=!0)}if(o){const c=K(n),f=l||J;for(let d=0;d<o.length;d++){const m=o[d];n[m]=jn(r,c,m,f[m],e,!W(f,m))}}return i}function jn(e,t,n,s,r,o){const i=e[n];if(i!=null){const l=W(i,"default");if(l&&s===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&x(c)){const{propsDefaults:f}=r;if(n in f)s=f[n];else{const d=Bt(r);s=f[n]=c.call(null,t),d()}}else s=c}i[0]&&(o&&!l?s=!1:i[1]&&(s===""||s===Ct(n))&&(s=!0))}return s}function oo(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const o=e.props,i={},l=[];let c=!1;if(!x(e)){const d=m=>{c=!0;const[p,R]=oo(m,t,!0);re(i,p),R&&l.push(...R)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!o&&!c)return q(e)&&s.set(e,gt),gt;if(D(o))for(let d=0;d<o.length;d++){const m=He(o[d]);Ns(m)&&(i[m]=J)}else if(o)for(const d in o){const m=He(d);if(Ns(m)){const p=o[d],R=i[m]=D(p)||x(p)?{type:p}:re({},p);if(R){const B=qs(Boolean,R.type),O=qs(String,R.type);R[0]=B>-1,R[1]=O<0||B<O,(B>-1||W(R,"default"))&&l.push(m)}}}const f=[i,l];return q(e)&&s.set(e,f),f}function Ns(e){return e[0]!=="$"&&!Lt(e)}function Ks(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Us(e,t){return Ks(e)===Ks(t)}function qs(e,t){return D(t)?t.findIndex(n=>Us(n,e)):x(t)&&Us(t,e)?0:-1}const io=e=>e[0]==="_"||e==="$stable",hs=e=>D(e)?e.map(Oe):[Oe(e)],Xi=(e,t,n)=>{if(t._n)return t;const s=Kr((...r)=>hs(t(...r)),n);return s._c=!1,s},lo=(e,t,n)=>{const s=e._ctx;for(const r in e){if(io(r))continue;const o=e[r];if(x(o))t[r]=Xi(r,o,s);else if(o!=null){const i=hs(o);t[r]=()=>i}}},ao=(e,t)=>{const n=hs(t);e.slots.default=()=>n},Zi=(e,t)=>{const n=e.slots=no();if(e.vnode.shapeFlag&32){const s=t._;s?(re(n,t),vr(n,"_",s,!0)):lo(t,n)}else t&&ao(e,t)},Qi=(e,t,n)=>{const{vnode:s,slots:r}=e;let o=!0,i=J;if(s.shapeFlag&32){const l=t._;l?n&&l===1?o=!1:(re(r,t),!n&&l===1&&delete r._):(o=!t.$stable,lo(t,r)),i=t}else t&&(ao(e,t),i={default:1});if(o)for(const l in r)!io(l)&&i[l]==null&&delete r[l]};function Jn(e,t,n,s,r=!1){if(D(e)){e.forEach((p,R)=>Jn(p,t&&(D(t)?t[R]:t),n,s,r));return}if(Jt(s)&&!r)return;const o=s.shapeFlag&4?Sn(s.component)||s.component.proxy:s.el,i=r?null:o,{i:l,r:c}=e,f=t&&t.r,d=l.refs===J?l.refs={}:l.refs,m=l.setupState;if(f!=null&&f!==c&&(oe(f)?(d[f]=null,W(m,f)&&(m[f]=null)):Ae(f)&&(f.value=null)),x(c))Xe(c,l,12,[i,d]);else{const p=oe(c),R=Ae(c);if(p||R){const B=()=>{if(e.f){const O=p?W(m,c)?m[c]:d[c]:c.value;r?D(O)&&es(O,o):D(O)?O.includes(o)||O.push(o):p?(d[c]=[o],W(m,c)&&(m[c]=d[c])):(c.value=[o],e.k&&(d[e.k]=c.value))}else p?(d[c]=i,W(m,c)&&(m[c]=i)):R&&(c.value=i,e.k&&(d[e.k]=i))};i?(B.id=-1,ye(B,n)):B()}}}const ye=Ai;function el(e){return tl(e)}function tl(e,t){const n=yr();n.__VUE__=!0;const{insert:s,remove:r,patchProp:o,createElement:i,createText:l,createComment:c,setText:f,setElementText:d,parentNode:m,nextSibling:p,setScopeId:R=Re,insertStaticContent:B}=e,O=(a,u,h,g=null,v=null,C=null,A=void 0,T=null,_=!!u.dynamicChildren)=>{if(a===u)return;a&&!at(a,u)&&(g=Vt(a),xe(a,v,C,!0),a=null),u.patchFlag===-2&&(_=!1,u.dynamicChildren=null);const{type:y,ref:b,shapeFlag:E}=u;switch(y){case Cn:ee(a,u,h,g);break;case we:G(a,u,h,g);break;case Xt:a==null&&Y(u,h,g,A);break;case ie:w(a,u,h,g,v,C,A,T,_);break;default:E&1?te(a,u,h,g,v,C,A,T,_):E&6?Z(a,u,h,g,v,C,A,T,_):(E&64||E&128)&&y.process(a,u,h,g,v,C,A,T,_,At)}b!=null&&v&&Jn(b,a&&a.ref,C,u||a,!u)},ee=(a,u,h,g)=>{if(a==null)s(u.el=l(u.children),h,g);else{const v=u.el=a.el;u.children!==a.children&&f(v,u.children)}},G=(a,u,h,g)=>{a==null?s(u.el=c(u.children||""),h,g):u.el=a.el},Y=(a,u,h,g)=>{[a.el,a.anchor]=B(a.children,u,h,g,a.el,a.anchor)},V=({el:a,anchor:u},h,g)=>{let v;for(;a&&a!==u;)v=p(a),s(a,h,g),a=v;s(u,h,g)},$=({el:a,anchor:u})=>{let h;for(;a&&a!==u;)h=p(a),r(a),a=h;r(u)},te=(a,u,h,g,v,C,A,T,_)=>{u.type==="svg"?A="svg":u.type==="math"&&(A="mathml"),a==null?P(u,h,g,v,C,A,T,_):ne(a,u,v,C,A,T,_)},P=(a,u,h,g,v,C,A,T)=>{let _,y;const{props:b,shapeFlag:E,transition:L,dirs:M}=a;if(_=a.el=i(a.type,C,b&&b.is,b),E&8?d(_,a.children):E&16&&k(a.children,_,null,g,v,kn(a,C),A,T),M&&st(a,null,g,"created"),me(_,a,a.scopeId,A,g),b){for(const U in b)U!=="value"&&!Lt(U)&&o(_,U,null,b[U],C,a.children,g,v,Be);"value"in b&&o(_,"value",null,b.value,C),(y=b.onVnodeBeforeMount)&&Fe(y,g,a)}M&&st(a,null,g,"beforeMount");const H=nl(v,L);H&&L.beforeEnter(_),s(_,u,h),((y=b&&b.onVnodeMounted)||H||M)&&ye(()=>{y&&Fe(y,g,a),H&&L.enter(_),M&&st(a,null,g,"mounted")},v)},me=(a,u,h,g,v)=>{if(h&&R(a,h),g)for(let C=0;C<g.length;C++)R(a,g[C]);if(v){let C=v.subTree;if(u===C){const A=v.vnode;me(a,A,A.scopeId,A.slotScopeIds,v.parent)}}},k=(a,u,h,g,v,C,A,T,_=0)=>{for(let y=_;y<a.length;y++){const b=a[y]=T?je(a[y]):Oe(a[y]);O(null,b,u,h,g,v,C,A,T)}},ne=(a,u,h,g,v,C,A)=>{const T=u.el=a.el;let{patchFlag:_,dynamicChildren:y,dirs:b}=u;_|=a.patchFlag&16;const E=a.props||J,L=u.props||J;let M;if(h&&rt(h,!1),(M=L.onVnodeBeforeUpdate)&&Fe(M,h,u,a),b&&st(u,a,h,"beforeUpdate"),h&&rt(h,!0),y?j(a.dynamicChildren,y,T,h,g,kn(u,v),C):A||z(a,u,T,null,h,g,kn(u,v),C,!1),_>0){if(_&16)he(T,u,E,L,h,g,v);else if(_&2&&E.class!==L.class&&o(T,"class",null,L.class,v),_&4&&o(T,"style",E.style,L.style,v),_&8){const H=u.dynamicProps;for(let U=0;U<H.length;U++){const X=H[U],ae=E[X],De=L[X];(De!==ae||X==="value")&&o(T,X,ae,De,v,a.children,h,g,Be)}}_&1&&a.children!==u.children&&d(T,u.children)}else!A&&y==null&&he(T,u,E,L,h,g,v);((M=L.onVnodeUpdated)||b)&&ye(()=>{M&&Fe(M,h,u,a),b&&st(u,a,h,"updated")},g)},j=(a,u,h,g,v,C,A)=>{for(let T=0;T<u.length;T++){const _=a[T],y=u[T],b=_.el&&(_.type===ie||!at(_,y)||_.shapeFlag&70)?m(_.el):h;O(_,y,b,null,g,v,C,A,!0)}},he=(a,u,h,g,v,C,A)=>{if(h!==g){if(h!==J)for(const T in h)!Lt(T)&&!(T in g)&&o(a,T,h[T],null,A,u.children,v,C,Be);for(const T in g){if(Lt(T))continue;const _=g[T],y=h[T];_!==y&&T!=="value"&&o(a,T,y,_,A,u.children,v,C,Be)}"value"in g&&o(a,"value",h.value,g.value,A)}},w=(a,u,h,g,v,C,A,T,_)=>{const y=u.el=a?a.el:l(""),b=u.anchor=a?a.anchor:l("");let{patchFlag:E,dynamicChildren:L,slotScopeIds:M}=u;M&&(T=T?T.concat(M):M),a==null?(s(y,h,g),s(b,h,g),k(u.children||[],h,b,v,C,A,T,_)):E>0&&E&64&&L&&a.dynamicChildren?(j(a.dynamicChildren,L,h,v,C,A,T),(u.key!=null||v&&u===v.subTree)&&co(a,u,!0)):z(a,u,h,b,v,C,A,T,_)},Z=(a,u,h,g,v,C,A,T,_)=>{u.slotScopeIds=T,a==null?u.shapeFlag&512?v.ctx.activate(u,h,g,A,_):_e(u,h,g,v,C,A,_):St(a,u,_)},_e=(a,u,h,g,v,C,A)=>{const T=a.component=dl(a,g,v);if(yn(a)&&(T.ctx.renderer=At),pl(T),T.asyncDep){if(v&&v.registerDep(T,le),!a.el){const _=T.subTree=N(we);G(null,_,u,h)}}else le(T,a,u,h,v,C,A)},St=(a,u,h)=>{const g=u.component=a.component;if(vi(a,u,h))if(g.asyncDep&&!g.asyncResolved){Q(g,u,h);return}else g.next=u,fi(g.update),g.effect.dirty=!0,g.update();else u.el=a.el,g.vnode=u},le=(a,u,h,g,v,C,A)=>{const T=()=>{if(a.isMounted){let{next:b,bu:E,u:L,parent:M,vnode:H}=a;{const mt=uo(a);if(mt){b&&(b.el=H.el,Q(a,b,A)),mt.asyncDep.then(()=>{a.isUnmounted||T()});return}}let U=b,X;rt(a,!1),b?(b.el=H.el,Q(a,b,A)):b=H,E&&jt(E),(X=b.props&&b.props.onVnodeBeforeUpdate)&&Fe(X,M,b,H),rt(a,!0);const ae=Dn(a),De=a.subTree;a.subTree=ae,O(De,ae,m(De.el),Vt(De),a,v,C),b.el=ae.el,U===null&&yi(a,ae.el),L&&ye(L,v),(X=b.props&&b.props.onVnodeUpdated)&&ye(()=>Fe(X,M,b,H),v)}else{let b;const{el:E,props:L}=u,{bm:M,m:H,parent:U}=a,X=Jt(u);if(rt(a,!1),M&&jt(M),!X&&(b=L&&L.onVnodeBeforeMount)&&Fe(b,U,u),rt(a,!0),E&&Cs){const ae=()=>{a.subTree=Dn(a),Cs(E,a.subTree,a,v,null)};X?u.type.__asyncLoader().then(()=>!a.isUnmounted&&ae()):ae()}else{const ae=a.subTree=Dn(a);O(null,ae,h,g,a,v,C),u.el=ae.el}if(H&&ye(H,v),!X&&(b=L&&L.onVnodeMounted)){const ae=u;ye(()=>Fe(b,U,ae),v)}(u.shapeFlag&256||U&&Jt(U.vnode)&&U.vnode.shapeFlag&256)&&a.a&&ye(a.a,v),a.isMounted=!0,u=h=g=null}},_=a.effect=new ns(T,Re,()=>fs(y),a.scope),y=a.update=()=>{_.dirty&&_.run()};y.id=a.uid,rt(a,!0),y()},Q=(a,u,h)=>{u.component=a;const g=a.vnode.props;a.vnode=u,a.next=null,Yi(a,u.props,g,h),Qi(a,u.children,h),Qe(),Fs(a),et()},z=(a,u,h,g,v,C,A,T,_=!1)=>{const y=a&&a.children,b=a?a.shapeFlag:0,E=u.children,{patchFlag:L,shapeFlag:M}=u;if(L>0){if(L&128){$t(y,E,h,g,v,C,A,T,_);return}else if(L&256){tt(y,E,h,g,v,C,A,T,_);return}}M&8?(b&16&&Be(y,v,C),E!==y&&d(h,E)):b&16?M&16?$t(y,E,h,g,v,C,A,T,_):Be(y,v,C,!0):(b&8&&d(h,""),M&16&&k(E,h,g,v,C,A,T,_))},tt=(a,u,h,g,v,C,A,T,_)=>{a=a||gt,u=u||gt;const y=a.length,b=u.length,E=Math.min(y,b);let L;for(L=0;L<E;L++){const M=u[L]=_?je(u[L]):Oe(u[L]);O(a[L],M,h,null,v,C,A,T,_)}y>b?Be(a,v,C,!0,!1,E):k(u,h,g,v,C,A,T,_,E)},$t=(a,u,h,g,v,C,A,T,_)=>{let y=0;const b=u.length;let E=a.length-1,L=b-1;for(;y<=E&&y<=L;){const M=a[y],H=u[y]=_?je(u[y]):Oe(u[y]);if(at(M,H))O(M,H,h,null,v,C,A,T,_);else break;y++}for(;y<=E&&y<=L;){const M=a[E],H=u[L]=_?je(u[L]):Oe(u[L]);if(at(M,H))O(M,H,h,null,v,C,A,T,_);else break;E--,L--}if(y>E){if(y<=L){const M=L+1,H=M<b?u[M].el:g;for(;y<=L;)O(null,u[y]=_?je(u[y]):Oe(u[y]),h,H,v,C,A,T,_),y++}}else if(y>L)for(;y<=E;)xe(a[y],v,C,!0),y++;else{const M=y,H=y,U=new Map;for(y=H;y<=L;y++){const Se=u[y]=_?je(u[y]):Oe(u[y]);Se.key!=null&&U.set(Se.key,y)}let X,ae=0;const De=L-H+1;let mt=!1,_s=0;const bt=new Array(De);for(y=0;y<De;y++)bt[y]=0;for(y=M;y<=E;y++){const Se=a[y];if(ae>=De){xe(Se,v,C,!0);continue}let ke;if(Se.key!=null)ke=U.get(Se.key);else for(X=H;X<=L;X++)if(bt[X-H]===0&&at(Se,u[X])){ke=X;break}ke===void 0?xe(Se,v,C,!0):(bt[ke-H]=y+1,ke>=_s?_s=ke:mt=!0,O(Se,u[ke],h,null,v,C,A,T,_),ae++)}const Ss=mt?sl(bt):gt;for(X=Ss.length-1,y=De-1;y>=0;y--){const Se=H+y,ke=u[Se],As=Se+1<b?u[Se+1].el:g;bt[y]===0?O(null,ke,h,As,v,C,A,T,_):mt&&(X<0||y!==Ss[X]?nt(ke,h,As,2):X--)}}},nt=(a,u,h,g,v=null)=>{const{el:C,type:A,transition:T,children:_,shapeFlag:y}=a;if(y&6){nt(a.component.subTree,u,h,g);return}if(y&128){a.suspense.move(u,h,g);return}if(y&64){A.move(a,u,h,At);return}if(A===ie){s(C,u,h);for(let E=0;E<_.length;E++)nt(_[E],u,h,g);s(a.anchor,u,h);return}if(A===Xt){V(a,u,h);return}if(g!==2&&y&1&&T)if(g===0)T.beforeEnter(C),s(C,u,h),ye(()=>T.enter(C),v);else{const{leave:E,delayLeave:L,afterLeave:M}=T,H=()=>s(C,u,h),U=()=>{E(C,()=>{H(),M&&M()})};L?L(C,H,U):U()}else s(C,u,h)},xe=(a,u,h,g=!1,v=!1)=>{const{type:C,props:A,ref:T,children:_,dynamicChildren:y,shapeFlag:b,patchFlag:E,dirs:L}=a;if(T!=null&&Jn(T,null,h,a,!0),b&256){u.ctx.deactivate(a);return}const M=b&1&&L,H=!Jt(a);let U;if(H&&(U=A&&A.onVnodeBeforeUnmount)&&Fe(U,u,a),b&6)Co(a.component,h,g);else{if(b&128){a.suspense.unmount(h,g);return}M&&st(a,null,u,"beforeUnmount"),b&64?a.type.remove(a,u,h,v,At,g):y&&(C!==ie||E>0&&E&64)?Be(y,u,h,!1,!0):(C===ie&&E&384||!v&&b&16)&&Be(_,u,h),g&&vs(a)}(H&&(U=A&&A.onVnodeUnmounted)||M)&&ye(()=>{U&&Fe(U,u,a),M&&st(a,null,u,"unmounted")},h)},vs=a=>{const{type:u,el:h,anchor:g,transition:v}=a;if(u===ie){To(h,g);return}if(u===Xt){$(a);return}const C=()=>{r(h),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(a.shapeFlag&1&&v&&!v.persisted){const{leave:A,delayLeave:T}=v,_=()=>A(h,C);T?T(a.el,C,_):_()}else C()},To=(a,u)=>{let h;for(;a!==u;)h=p(a),r(a),a=h;r(u)},Co=(a,u,h)=>{const{bum:g,scope:v,update:C,subTree:A,um:T}=a;g&&jt(g),v.stop(),C&&(C.active=!1,xe(A,a,u,h)),T&&ye(T,u),ye(()=>{a.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&a.asyncDep&&!a.asyncResolved&&a.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Be=(a,u,h,g=!1,v=!1,C=0)=>{for(let A=C;A<a.length;A++)xe(a[A],u,h,g,v)},Vt=a=>a.shapeFlag&6?Vt(a.component.subTree):a.shapeFlag&128?a.suspense.next():p(a.anchor||a.el);let bn=!1;const ys=(a,u,h)=>{a==null?u._vnode&&xe(u._vnode,null,null,!0):O(u._vnode||null,a,u,null,null,null,h),bn||(bn=!0,Fs(),$r(),bn=!1),u._vnode=a},At={p:O,um:xe,m:nt,r:vs,mt:_e,mc:k,pc:z,pbc:j,n:Vt,o:e};let Ts,Cs;return{render:ys,hydrate:Ts,createApp:zi(ys,Ts)}}function kn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function rt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function nl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function co(e,t,n=!1){const s=e.children,r=t.children;if(D(s)&&D(r))for(let o=0;o<s.length;o++){const i=s[o];let l=r[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[o]=je(r[o]),l.el=i.el),n||co(i,l)),l.type===Cn&&(l.el=i.el)}}function sl(e){const t=e.slice(),n=[0];let s,r,o,i,l;const c=e.length;for(s=0;s<c;s++){const f=e[s];if(f!==0){if(r=n[n.length-1],e[r]<f){t[s]=r,n.push(s);continue}for(o=0,i=n.length-1;o<i;)l=o+i>>1,e[n[l]]<f?o=l+1:i=l;f<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}function uo(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:uo(t)}const rl=e=>e.__isTeleport,ie=Symbol.for("v-fgt"),Cn=Symbol.for("v-txt"),we=Symbol.for("v-cmt"),Xt=Symbol.for("v-stc"),xt=[];let Me=null;function F(e=!1){xt.push(Me=e?null:[])}function ol(){xt.pop(),Me=xt[xt.length-1]||null}let Ot=1;function Gs(e){Ot+=e}function fo(e){return e.dynamicChildren=Ot>0?Me||gt:null,ol(),Ot>0&&Me&&Me.push(e),e}function I(e,t,n,s,r,o){return fo(S(e,t,n,s,r,o,!0))}function ho(e,t,n,s,r){return fo(N(e,t,n,s,r,!0))}function Yn(e){return e?e.__v_isVNode===!0:!1}function at(e,t){return e.type===t.type&&e.key===t.key}const po=({key:e})=>e??null,Zt=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?oe(e)||Ae(e)||x(e)?{i:ve,r:e,k:t,f:!!n}:e:null);function S(e,t=null,n=null,s=0,r=null,o=e===ie?0:1,i=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&po(t),ref:t&&Zt(t),scopeId:Nr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ve};return l?(ps(c,n),o&128&&e.normalize(c)):n&&(c.shapeFlag|=oe(n)?8:16),Ot>0&&!i&&Me&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&Me.push(c),c}const N=il;function il(e,t=null,n=null,s=0,r=null,o=!1){if((!e||e===Ci)&&(e=we),Yn(e)){const l=Ze(e,t,!0);return n&&ps(l,n),Ot>0&&!o&&Me&&(l.shapeFlag&6?Me[Me.indexOf(e)]=l:Me.push(l)),l.patchFlag|=-2,l}if(Tl(e)&&(e=e.__vccOpts),t){t=ll(t);let{class:l,style:c}=t;l&&!oe(l)&&(t.class=Te(l)),q(c)&&(Fr(c)&&!D(c)&&(c=re({},c)),t.style=_t(c))}const i=oe(e)?1:Si(e)?128:rl(e)?64:q(e)?4:x(e)?2:0;return S(e,t,n,s,r,i,o,!0)}function ll(e){return e?Fr(e)||so(e)?re({},e):e:null}function Ze(e,t,n=!1,s=!1){const{props:r,ref:o,patchFlag:i,children:l,transition:c}=e,f=t?cl(r||{},t):r,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&po(f),ref:t&&t.ref?n&&o?D(o)?o.concat(Zt(t)):[o,Zt(t)]:Zt(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ie?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ze(e.ssContent),ssFallback:e.ssFallback&&Ze(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&(d.transition=c.clone(d)),d}function pt(e=" ",t=0){return N(Cn,null,e,t)}function al(e,t){const n=N(Xt,null,e);return n.staticCount=t,n}function Ie(e="",t=!1){return t?(F(),ho(we,null,e)):N(we,null,e)}function Oe(e){return e==null||typeof e=="boolean"?N(we):D(e)?N(ie,null,e.slice()):typeof e=="object"?je(e):N(Cn,null,String(e))}function je(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ze(e)}function ps(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(D(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),ps(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!so(t)?t._ctx=ve:r===3&&ve&&(ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else x(t)?(t={default:t,_ctx:ve},n=32):(t=String(t),s&64?(n=16,t=[pt(t)]):n=8);e.children=t,e.shapeFlag|=n}function cl(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Te([t.class,s.class]));else if(r==="style")t.style=_t([t.style,s.style]);else if(cn(r)){const o=t[r],i=s[r];i&&o!==i&&!(D(o)&&o.includes(i))&&(t[r]=o?[].concat(o,i):i)}else r!==""&&(t[r]=s[r])}return t}function Fe(e,t,n,s=null){Le(e,t,7,[n,s])}const ul=eo();let fl=0;function dl(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||ul,o={uid:fl++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Oo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:oo(s,r),emitsOptions:Wr(s,r),emit:null,emitted:null,propsDefaults:J,inheritAttrs:s.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=pi.bind(null,o),e.ce&&e.ce(o),o}let fe=null;const hl=()=>fe||ve;let on,Xn;{const e=yr(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),o=>{r.length>1?r.forEach(i=>i(o)):r[0](o)}};on=t("__VUE_INSTANCE_SETTERS__",n=>fe=n),Xn=t("__VUE_SSR_SETTERS__",n=>_n=n)}const Bt=e=>{const t=fe;return on(e),e.scope.on(),()=>{e.scope.off(),on(t)}},zs=()=>{fe&&fe.scope.off(),on(null)};function mo(e){return e.vnode.shapeFlag&4}let _n=!1;function pl(e,t=!1){t&&Xn(t);const{props:n,children:s}=e.vnode,r=mo(e);Ji(e,n,r,t),Zi(e,s);const o=r?ml(e,t):void 0;return t&&Xn(!1),o}function ml(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Vi);const{setup:s}=n;if(s){const r=e.setupContext=s.length>1?vl(e):null,o=Bt(e);Qe();const i=Xe(s,e,0,[e.props,r]);if(et(),o(),pr(i)){if(i.then(zs,zs),t)return i.then(l=>{js(e,l,t)}).catch(l=>{gn(l,e,0)});e.asyncDep=i}else js(e,i,t)}else go(e,t)}function js(e,t,n){x(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:q(t)&&(e.setupState=Or(t)),go(e,n)}let Js;function go(e,t,n){const s=e.type;if(!e.render){if(!t&&Js&&!s.render){const r=s.template||ds(e).template;if(r){const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:c}=s,f=re(re({isCustomElement:o,delimiters:l},i),c);s.render=Js(r,f)}}e.render=s.render||Re}{const r=Bt(e);Qe();try{Wi(e)}finally{et(),r()}}}const gl={get(e,t){return Ce(e,"get",""),e[t]}};function vl(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,gl),slots:e.slots,emit:e.emit,expose:t}}function Sn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Or(ri(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Et)return Et[n](e)},has(t,n){return n in t||n in Et}}))}function yl(e,t=!0){return x(e)?e.displayName||e.name:e.name||t&&e.__name}function Tl(e){return x(e)&&"__vccOpts"in e}const Cl=(e,t)=>oi(e,t,_n);function _l(e,t,n){const s=arguments.length;return s===2?q(t)&&!D(t)?Yn(t)?N(e,null,[t]):N(e,t):N(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Yn(n)&&(n=[n]),N(e,t,n))}const Sl="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Al="http://www.w3.org/2000/svg",bl="http://www.w3.org/1998/Math/MathML",Je=typeof document<"u"?document:null,Ys=Je&&Je.createElement("template"),Rl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?Je.createElementNS(Al,e):t==="mathml"?Je.createElementNS(bl,e):Je.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Je.createTextNode(e),createComment:e=>Je.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Je.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,o){const i=n?n.previousSibling:t.lastChild;if(r&&(r===o||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{Ys.innerHTML=s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e;const l=Ys.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ue="transition",Rt="animation",Pt=Symbol("_vtc"),ms=(e,{slots:t})=>_l(Ei,wl(e),t);ms.displayName="Transition";const vo={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ms.props=re({},Gr,vo);const ot=(e,t=[])=>{D(e)?e.forEach(n=>n(...t)):e&&e(...t)},Xs=e=>e?D(e)?e.some(t=>t.length>1):e.length>1:!1;function wl(e){const t={};for(const w in e)w in vo||(t[w]=e[w]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:o=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=o,appearActiveClass:f=i,appearToClass:d=l,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:R=`${n}-leave-to`}=e,B=Ll(r),O=B&&B[0],ee=B&&B[1],{onBeforeEnter:G,onEnter:Y,onEnterCancelled:V,onLeave:$,onLeaveCancelled:te,onBeforeAppear:P=G,onAppear:me=Y,onAppearCancelled:k=V}=t,ne=(w,Z,_e)=>{it(w,Z?d:l),it(w,Z?f:i),_e&&_e()},j=(w,Z)=>{w._isLeaving=!1,it(w,m),it(w,R),it(w,p),Z&&Z()},he=w=>(Z,_e)=>{const St=w?me:Y,le=()=>ne(Z,w,_e);ot(St,[Z,le]),Zs(()=>{it(Z,w?c:o),qe(Z,w?d:l),Xs(St)||Qs(Z,s,O,le)})};return re(t,{onBeforeEnter(w){ot(G,[w]),qe(w,o),qe(w,i)},onBeforeAppear(w){ot(P,[w]),qe(w,c),qe(w,f)},onEnter:he(!1),onAppear:he(!0),onLeave(w,Z){w._isLeaving=!0;const _e=()=>j(w,Z);qe(w,m),qe(w,p),Ml(),Zs(()=>{w._isLeaving&&(it(w,m),qe(w,R),Xs($)||Qs(w,s,ee,_e))}),ot($,[w,_e])},onEnterCancelled(w){ne(w,!1),ot(V,[w])},onAppearCancelled(w){ne(w,!0),ot(k,[w])},onLeaveCancelled(w){j(w),ot(te,[w])}})}function Ll(e){if(e==null)return null;if(q(e))return[Fn(e.enter),Fn(e.leave)];{const t=Fn(e);return[t,t]}}function Fn(e){return wo(e)}function qe(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Pt]||(e[Pt]=new Set)).add(t)}function it(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[Pt];n&&(n.delete(t),n.size||(e[Pt]=void 0))}function Zs(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Dl=0;function Qs(e,t,n,s){const r=e._endId=++Dl,o=()=>{r===e._endId&&s()};if(n)return setTimeout(o,n);const{type:i,timeout:l,propCount:c}=El(e,t);if(!i)return s();const f=i+"end";let d=0;const m=()=>{e.removeEventListener(f,p),o()},p=R=>{R.target===e&&++d>=c&&m()};setTimeout(()=>{d<c&&m()},l+1),e.addEventListener(f,p)}function El(e,t){const n=window.getComputedStyle(e),s=B=>(n[B]||"").split(", "),r=s(`${Ue}Delay`),o=s(`${Ue}Duration`),i=er(r,o),l=s(`${Rt}Delay`),c=s(`${Rt}Duration`),f=er(l,c);let d=null,m=0,p=0;t===Ue?i>0&&(d=Ue,m=i,p=o.length):t===Rt?f>0&&(d=Rt,m=f,p=c.length):(m=Math.max(i,f),d=m>0?i>f?Ue:Rt:null,p=d?d===Ue?o.length:c.length:0);const R=d===Ue&&/\b(transform|all)(,|$)/.test(s(`${Ue}Property`).toString());return{type:d,timeout:m,propCount:p,hasTransform:R}}function er(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>tr(n)+tr(e[s])))}function tr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ml(){return document.body.offsetHeight}function xl(e,t,n){const s=e[Pt];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const nr=Symbol("_vod"),kl=Symbol("_vsh"),Fl=Symbol(""),Il=/(^|;)\s*display\s*:/;function Ol(e,t,n){const s=e.style,r=oe(n);let o=!1;if(n&&!r){if(t)if(oe(t))for(const i of t.split(";")){const l=i.slice(0,i.indexOf(":")).trim();n[l]==null&&Qt(s,l,"")}else for(const i in t)n[i]==null&&Qt(s,i,"");for(const i in n)i==="display"&&(o=!0),Qt(s,i,n[i])}else if(r){if(t!==n){const i=s[Fl];i&&(n+=";"+i),s.cssText=n,o=Il.test(n)}}else t&&e.removeAttribute("style");nr in e&&(e[nr]=o?s.display:"",e[kl]&&(s.display="none"))}const sr=/\s*!important$/;function Qt(e,t,n){if(D(n))n.forEach(s=>Qt(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Pl(e,t);sr.test(n)?e.setProperty(Ct(s),n.replace(sr,""),"important"):e[s]=n}}const rr=["Webkit","Moz","ms"],In={};function Pl(e,t){const n=In[t];if(n)return n;let s=He(t);if(s!=="filter"&&s in e)return In[t]=s;s=dn(s);for(let r=0;r<rr.length;r++){const o=rr[r]+s;if(o in e)return In[t]=o}return t}const or="http://www.w3.org/1999/xlink";function Hl(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(or,t.slice(6,t.length)):e.setAttributeNS(or,t,n);else{const o=ko(t);n==null||o&&!Tr(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function Bl(e,t,n,s,r,o,i){if(t==="innerHTML"||t==="textContent"){s&&i(s,r,o),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const f=l==="OPTION"?e.getAttribute("value")||"":e.value,d=n??"";(f!==d||!("_value"in e))&&(e.value=d),n==null&&e.removeAttribute(t),e._value=n;return}let c=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=Tr(n):n==null&&f==="string"?(n="",c=!0):f==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function ct(e,t,n,s){e.addEventListener(t,n,s)}function $l(e,t,n,s){e.removeEventListener(t,n,s)}const ir=Symbol("_vei");function Vl(e,t,n,s,r=null){const o=e[ir]||(e[ir]={}),i=o[t];if(s&&i)i.value=s;else{const[l,c]=Wl(t);if(s){const f=o[t]=Ul(s,r);ct(e,l,f,c)}else i&&($l(e,l,i,c),o[t]=void 0)}}const lr=/(?:Once|Passive|Capture)$/;function Wl(e){let t;if(lr.test(e)){t={};let s;for(;s=e.match(lr);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ct(e.slice(2)),t]}let On=0;const Nl=Promise.resolve(),Kl=()=>On||(Nl.then(()=>On=0),On=Date.now());function Ul(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Le(ql(s,n.value),t,5,[s])};return n.value=e,n.attached=Kl(),n}function ql(e,t){if(D(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const ar=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Gl=(e,t,n,s,r,o,i,l,c)=>{const f=r==="svg";t==="class"?xl(e,s,f):t==="style"?Ol(e,n,s):cn(t)?Qn(t)||Vl(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):zl(e,t,s,f))?Bl(e,t,s,o,i,l,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Hl(e,t,s,f))};function zl(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&ar(t)&&x(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ar(t)&&oe(n)?!1:t in e}const ln=e=>{const t=e.props["onUpdate:modelValue"]||!1;return D(t)?n=>jt(t,n):t};function jl(e){e.target.composing=!0}function cr(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Tt=Symbol("_assign"),Jl={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e[Tt]=ln(r);const o=s||r.props&&r.props.type==="number";ct(e,t?"change":"input",i=>{if(i.target.composing)return;let l=e.value;n&&(l=l.trim()),o&&(l=tn(l)),e[Tt](l)}),n&&ct(e,"change",()=>{e.value=e.value.trim()}),t||(ct(e,"compositionstart",jl),ct(e,"compositionend",cr),ct(e,"change",cr))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:r}},o){if(e[Tt]=ln(o),e.composing)return;const i=(r||e.type==="number")&&!/^0\d/.test(e.value)?tn(e.value):e.value,l=t??"";i!==l&&(document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===l)||(e.value=l))}},Yl={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const r=un(t);ct(e,"change",()=>{const o=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>n?tn(an(i)):an(i));e[Tt](e.multiple?r?new Set(o):o:o[0]),e._assigning=!0,Hr(()=>{e._assigning=!1})}),e[Tt]=ln(s)},mounted(e,{value:t,modifiers:{number:n}}){ur(e,t)},beforeUpdate(e,t,n){e[Tt]=ln(n)},updated(e,{value:t,modifiers:{number:n}}){e._assigning||ur(e,t)}};function ur(e,t,n){const s=e.multiple,r=D(t);if(!(s&&!r&&!un(t))){for(let o=0,i=e.options.length;o<i;o++){const l=e.options[o],c=an(l);if(s)if(r){const f=typeof c;f==="string"||f==="number"?l.selected=t.some(d=>String(d)===String(c)):l.selected=Io(t,c)>-1}else l.selected=t.has(c);else if(hn(an(l),t)){e.selectedIndex!==o&&(e.selectedIndex=o);return}}!s&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function an(e){return"_value"in e?e._value:e.value}const Xl=["ctrl","shift","alt","meta"],Zl={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Xl.some(n=>e[`${n}Key`]&&!t.includes(n))},gs=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=(r,...o)=>{for(let i=0;i<t.length;i++){const l=Zl[t[i]];if(l&&l(r,t))return}return e(r,...o)})},Ql=re({patchProp:Gl},Rl);let fr;function ea(){return fr||(fr=el(Ql))}const ta=(...e)=>{const t=ea().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=sa(s);if(!r)return;const o=t._component;!x(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.innerHTML="";const i=n(r,!1,na(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};function na(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function sa(e){return oe(e)?document.querySelector(e):e}const ra={class:"markdown-body"},oa=al('<h2>What is it?</h2><p>The Runewizard lets you check easily what runewords you can make with the runes you have found.</p><p>Click on the runes to mark which ones you have found. The available runewords will be highlighted automatically.</p><p>The table can be sorted : try clicking on the table headings, you may find it useful!</p><h2>Runes</h2><p>The runes are listed in order of rarity, from top to bottom, and left to right. Each vertical group of rune represents roughly <strong>Common</strong>, <strong>Semi-Rare</strong>, and <strong>Extremely Rare</strong> runes. Note that the order is consistent with the <a href="http://classic.battle.net/diablo2exp/items/cube.shtml">rune upgrade formulas</a> for the Horadric Cube. For example: 3 x Tal = 1 x Ral rune.</p><h2>Runewords</h2><p><strong>Ladder-only runewords</strong> have a small <span class="rw-Md-ladder">L</span> icon next to the name.</p><h2>Note about storage</h2><p>Your selection of runes is saved in the browser’s <em>local storage</em>. Keep in mind that manually clearing your browser cache may reset the selected runes.</p>',10),ia=[oa],la={__name:"HelpText",setup(e,{expose:t}){return t({frontmatter:{}}),(s,r)=>(F(),I("div",ra,ia))}},aa=We({name:"HelpBox",components:{HelpText:la}}),de=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},ca={class:"rw-Help text-md"};function ua(e,t,n,s,r,o){const i=ue("HelpText");return F(),I("div",ca,[N(i,{class:""})])}const fa=de(aa,[["render",ua]]),da={name:"PhChatsBold"},ha={width:"1em",height:"1em",viewBox:"0 0 256 256"},pa=S("path",{d:"M236 96a20.023 20.023 0 0 0-20-20h-27.999V48a20.023 20.023 0 0 0-20-20h-128a20.023 20.023 0 0 0-20 20v128a12 12 0 0 0 19.544 9.332L68 162.328V184a20.023 20.023 0 0 0 20 20h92.173l36.283 29.332A12 12 0 0 0 236.001 224zM44.001 150.868V52h120v35.981l-.001.02l.001.019V132H71.583a11.999 11.999 0 0 0-7.544 2.668zm147.96 31.8a11.999 11.999 0 0 0-7.543-2.668H92.001v-24h76a20.023 20.023 0 0 0 20-20v-36H212l.001 98.868z",fill:"currentColor"},null,-1),ma=[pa];function ga(e,t,n,s,r,o){return F(),I("svg",ha,ma)}const va=de(da,[["render",ga]]),ya={name:"FaSolidChevronDown"},Ta={width:"0.88em",height:"1em",viewBox:"0 0 448 512"},Ca=S("path",{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z",fill:"currentColor"},null,-1),_a=[Ca];function Sa(e,t,n,s,r,o){return F(),I("svg",Ta,_a)}const Aa=de(ya,[["render",Sa]]),ba=We({name:"AppHeader",components:{HelpBox:fa,IconChat:va,IconChevronDown:Aa},data(){return{isHelpVisible:!1,envGameName:"Diablo II LoD & Resurrected",envGameVersion:"2.6",envGithubRepoUrl:"https://github.com/tosenzzz/diablo2-runewizard",envPatchNotesUrl:"https://news.blizzard.com/en-us/diablo2/23899624/diablo-ii-resurrected-ladder-season-three-now-live"}}}),Ra="/diablo2-runewizard/assets/logo-rune-CI8Fl1wU.png",wa="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS0AAAAgCAMAAABw1N62AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFdQTFRFt6+XAAAAubOWubGWurGXubCXurCXu7GXv6+furGXurCWurGYu6+XurCWubGXurGWurCXubGXurKXuq+Vu7KWurKWu7KYurCXubGXubCWurCWubGWubGW27u9qQAAAB10Uk5TIABQoP/fv38QkO9vQOCAwJ+wYDBwP0/w0K/Pj19U6DckAAAF80lEQVR4nO2a63ajOAyAHTAJoQQKpANN9v2fcyUbX3RxmnTndOfsWf1KAFvyJ1mWDcYc/penxVS13aU5ntp/25w/XCC0zjZK9/YzWvs/rqPnBGhV1l6GYahH5PX+I1qn39XR8NxsqH6TOqDVWzu63y1G2Uxut8MJZeHNru5yMKJ3/7J5XLn/V9LE9+Tk3YbuT7F7438a3r2/3BcUDc2JCVW6N+sUqG0w6O1D3u2zHn+l2zktsBImI0v7QHBUdEFArunJ9mLtOb9tVmuZQ20usSFmTe8LM8HPoAl+rzuhzdotTjhUVGedDpaLRmu0g3I1S0EyYaOiKJ9BP6UF/fJBwl1VVdbIW01TyJiIxAYKLffgHs7tFsAdDsfUX2PXLLTPVJGglRsVZIEVTBsCDO0yjuOKK5woDUDRNu53rT16nIzWVbB5mhZ1qkYr9tOv6bKx9pZUHeOvEEEz1c/cMgzZMNsu4c6lFgmGmoQBfuP3oiJTYQw2rmNGqxfeeZoWNfQhrUM+mc5pKFOwEEIrUIDQyqcJp5VrmHRTwR+rHlzxeeFsqmiBqO9ccqWEZpZ/XqHV5bge08rH36ahmD24+mQFCy055YmlF22JrO1aiQTDTLqIKUwVgUtxpWC0zt+fiRTXY1rcrhBctTfxFuOpbezlwSBygUfVWzA/z0DjqI4hmDTZTlqV9za53EBpQT60LN89TWskuF6gJYIri6eBZ5wyLbijlnEDDmlWmyU9Z2EuUwRGwn9Cy9zo+ozy/JpY5+UHo2VaQovmYh5cKVVBXNDQKtMCR6/aPIQucEirhjKZNNqN3eOKKkSTaLUfd1hTNq7xhQoCl5bQnNHq52KWF8H1KLTKtEa91ApRNYhJc8hoLTJKhCI00tOKIt3zSr2V4eK0mjfYVX14ebuzlDokHRigD0KrSOuql1oxf7eSR6JlGslSqyAXQmtVtl0vVadjxMVpPa4hLzbsTTA/xCAZ5FJWoFUqtTC0fHTWSnB5B/7COSXqMaEIL3hasKuGkkLFUqaVJ4K9byzHPa7XaNHJF+LJKPFSoFUotXDfdImdiSeSQbJ4FYrmSGv0A1UrXlGBOWn1Eht7cccYnNaGWbLfZRAQUnANaZtSK2R0WqVSC2+EQB2t2FsHVpNyJCoUXXNaRVx6Quh1WhHX4ywv+Mfgwim1W6GFlk6rVGqhGTETK5PEOXDL1qZHimpCq4TrIkqRvbOK/t37xsTzLmi1tIKQvgzB5crcJpr39SD2i/qJ2ZJPjIvY/jiTWh2XUASP0fMtFddZzZ9TOl1hfS8O1wvVqZM9uAysgvumTQ0tlVap1GKpfRaD8zp1XFxRix4h1amKK50M0IvEm2QPCriGV2mh64wb3tz6ODuqXtJolUotBJ6XDWJvHc4gNFxc0YRk6M5HxaUYIxIF6Rtxda/Scoc0Pp5cnPVagaTSKpZafC6LgiQmSwUXU1S5pZrtqjVcvTxQrbmBtO+FnfgR00oCTjH78DC4jlrxrdEqllo4ebr8EPrOZ0k0ScFFFUGGQNKMlooLF3Wyw7yLBZsNYv6ClnZ8gjN+twSaf+qhpdBipZZZ8meFkMappcRFFFXdnlb5CaCGCw8f77GvHqbhyrzJBzE/psW3sE7GNBp3KK6+Fxa0eKk1pDN82EKNVFi2zUwSuDJFLbjO+86/IcunlcPFXpQhrub+1wJb7xM25bCeO5c/hlc+N60mcfX+bshsC6Ellypw3Wc22Y7p9lXm25H4gJT3HBcoesNN7emzsXEz5t++krVCwzWvZOMi1tuaJ9CNVhiH4lsMOpbgha1UE0xM0dlyiRHRyT7o+l4RlzhcieWU9xmKfVNhrNjb6UDbQSgRPe0QXxlNYgnv79ggf5/4DheO9MX317RMMr7Xl4RdURrTUspMfd1p4QmDaM6+eXvCoLmnweCwu7u/2b/H/i7jNc4kNTnobl0GlOq730pktht+DrNLnbn2m2ra6Mu+Vja42zqoI35Sfu4TG/Ke58unv/39SpWCxUy8dJye/BKgJP/tD5I4m3862r8BDNFq5mSmfvcAAAAASUVORK5CYII=",La={class:"rw-Layout-rowContainer h-[106px] flex"},Da=S("div",{class:"pr-[20px] pt-[17px]"},[S("img",{src:Ra,alt:"Rune icon original art (c) BLIZZARD ENTERTAINMENT",class:"w-[69px] h-[67px]"})],-1),Ea={class:"flex-1"},Ma=S("h1",{class:"text-black text-[0px] mt-[19px] mb-[5px] w-[301px] h-[32px]"},[S("img",{src:wa,alt:"Runewizard",class:"block w-full h-full"})],-1),xa={class:"flex justify-between items-center"},ka={class:"text-lg ux-color-gray"},Fa={class:"ux-color-gold"},Ia={class:"ml-2 ux-color-green"},Oa={class:"text-xs"},Pa=["href"],Ha=S("span",{class:"text-lg"},[S("a",{class:"ml-2 underline hover:underline ux-color-link-blue",target:"blank",href:"https://fabd.github.io/diablo2/"},"Diablo 2")],-1),Ba={class:"flex items-center text-[#514f4a]"},$a=S("span",{class:"ml-1"},se("Help"),-1),Va=["href"],Wa=S("span",null,se("Feedback"),-1),Na=S("div",{class:"rw-Layout-goldBarSeparator mb-2"},null,-1),Ka={key:0,class:"rw-Layout-rowContainer mb-4"};function Ua(e,t,n,s,r,o){const i=ue("icon-chevron-down"),l=ue("icon-chat"),c=ue("help-box");return F(),I("header",null,[S("div",La,[Da,S("div",Ea,[Ma,S("div",xa,[S("div",ka,[pt(" for "),S("span",Fa,se(e.envGameName),1),S("span",Ia,"Patch "+se(e.envGameVersion),1),S("span",Oa,[S("a",{class:"ml-2 underline hover:underline ux-color-link-blue",target:"blank",href:e.envPatchNotesUrl},"Update Notes",8,Pa)]),Ha]),S("div",Ba,[S("a",{href:"#",class:"rw-HelpLink mr-6",onClick:t[0]||(t[0]=gs(f=>e.isHelpVisible=!e.isHelpVisible,["prevent"]))},[N(i,{class:Te(["ux-icon ux-icon--fw",{"transform rotate-180":e.isHelpVisible}])},null,8,["class"]),$a]),S("a",{href:`${e.envGithubRepoUrl}/discussions`,class:"rw-Header-link"},[N(l,{class:"ux-icon ux-icon--fw ux-icon--lg mr-1"}),Wa],8,Va)])])])]),Na,N(ms,{name:"fadein"},{default:Kr(()=>[e.isHelpVisible?(F(),I("div",Ka,[N(c)])):Ie("",!0)]),_:1})])}const qa=de(ba,[["render",Ua]]),Ga={name:"FaGithub"},za={width:"1.03em",height:"1em",viewBox:"0 0 1536 1504"},ja=S("path",{d:"M768 0q209 0 385.5 103T1433 382.5T1536 768q0 251-146.5 451.5T1011 1497q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142q57-6 102.5-18t94-39t81-66.5t53-105T1258 728q0-119-79-206q37-91-8-204q-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27T450 331.5T365 318q-45 113-8 204q-79 87-79 206q0 85 20.5 150T351 983t80.5 67t94 39t102.5 18q-39 36-49 103q-21 10-45 15t-57 5t-65.5-21.5T356 1146q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5t9 14t13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30t69.5 7t55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5T0 768q0-209 103-385.5T382.5 103T768 0zM291 1103q3-7-7-12q-10-3-13 2q-3 7 7 12q9 6 13-2zm31 34q7-5-2-16q-10-9-16-3q-7 5 2 16q10 10 16 3zm30 45q9-7 0-19q-8-13-17-6q-9 5 0 18t17 7zm42 42q8-8-4-19q-12-12-20-3q-9 8 4 19q12 12 20 3zm57 25q3-11-13-16q-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11q-16 0-16 11q0 13 17 11q16 0 16-11zm58-10q-2-11-18-9q-16 3-14 15t18 8t14-14z",fill:"currentColor"},null,-1),Ja=[ja];function Ya(e,t,n,s,r,o){return F(),I("svg",za,Ja)}const Xa=de(Ga,[["render",Ya]]),Za=We({name:"AppFooter",components:{IconGithub:Xa},data(){return{envGithubRepoUrl:"https://github.com/tosenzzz/diablo2-runewizard",envMainSiteUrl:"https://fabd.github.io/diablo2"}}}),Qa={class:"rw-Footer min-h-[200px]"},ec=S("div",{class:"rw-Layout-goldBarSeparator opacity-50 mb-6"},null,-1),tc={class:"text-center text-lg text-gold leading-1"},nc={key:0,class:"mb-2"},sc=["href"],rc=["href"],oc=S("span",{class:""},se("tosenzzz/diablo2-runewizard"),-1);function ic(e,t,n,s,r,o){const i=ue("icon-github");return F(),I("footer",Qa,[ec,S("div",tc,[e.envMainSiteUrl?(F(),I("div",nc,[pt(" Also check out "),S("a",{href:e.envMainSiteUrl,class:"rw-Footer-link ml-2"},se("The Tankazon Resource"),8,sc)])):Ie("",!0),S("div",null,[pt(" Development "),S("a",{href:e.envGithubRepoUrl,class:"rw-Footer-link ml-2"},[N(i,{class:"ux-icon ux-icon--fw mr-1 mt-[-0.2em]"}),oc],8,rc)])])])}const lc=de(Za,[["render",ic]]);var en=(e=>(e[e.COMMON=1]="COMMON",e[e.SEMIRARE=2]="SEMIRARE",e[e.RARE=3]="RARE",e))(en||{});const An=[{name:"El",fname:"El (1)",tier:1},{name:"Eld",fname:"Eld (2)",tier:1},{name:"Tir",fname:"Tir (3)",tier:1},{name:"Nef",fname:"Nef (4)",tier:1},{name:"Eth",fname:"Eth (5)",tier:1},{name:"Ith",fname:"Ith (6)",tier:1},{name:"Tal",fname:"Tal (7)",tier:1},{name:"Ral",fname:"Ral (8)",tier:1},{name:"Ort",fname:"Ort (9)",tier:1},{name:"Thul",fname:"Thul (10)",tier:1},{name:"Amn",fname:"Amn (11)",tier:1},{name:"Sol",fname:"Sol (12)",tier:2},{name:"Shael",fname:"Shael (13)",tier:2},{name:"Dol",fname:"Dol (14)",tier:2},{name:"Hel",fname:"Hel (15)",tier:2},{name:"Io",fname:"Io (16)",tier:2},{name:"Lum",fname:"Lum (17)",tier:2},{name:"Ko",fname:"Ko (18)",tier:2},{name:"Fal",fname:"Fal (19)",tier:2},{name:"Lem",fname:"Lem (20)",tier:2},{name:"Pul",fname:"Pul (21)",tier:2},{name:"Um",fname:"Um (22)",tier:2},{name:"Mal",fname:"Mal (23)",tier:3},{name:"Ist",fname:"Ist (24)",tier:3},{name:"Gul",fname:"Gul (25)",tier:3},{name:"Vex",fname:"Vex (26)",tier:3},{name:"Ohm",fname:"Ohm (27)",tier:3},{name:"Lo",fname:"Lo (28)",tier:3},{name:"Sur",fname:"Sur (29)",tier:3},{name:"Ber",fname:"Ber (30)",tier:3},{name:"Jah",fname:"Jah (31)",tier:3},{name:"Cham",fname:"Cham (32)",tier:3},{name:"Zod",fname:"Zod (33)",tier:3}];function ac(){return An.map(e=>e.name)}const dr="runewizard",ce={state:mn({haveRunes:[],pinned:new Set}),storage:null,initialize(){this.storage=window.localStorage,ce.reset()},clearRunes(){this.setRunes(ac(),!1)},getRunes(){const e=[];for(const t of Object.keys(this.state.haveRunes))this.state.haveRunes[t]&&e.push(t);return e},setRunes(e,t=!0){for(const n of e)this.state.haveRunes[n]=t},hasRune(e){return this.state.haveRunes[e]||!1},reset(){this.clearRunes()},getPinned(){return Array.from(this.state.pinned.values())},isPinned(e){return this.state.pinned.has(e)},setPinned(e,t=!0){const n=t?"add":"delete";e.forEach(s=>{this.state.pinned[n](s)})},loadState(){if(!this.storage)return;const e=this.storage.getItem(dr);if(!e)return;const t=JSON.parse(e);this.setRunes(t.selectedRunes),this.setPinned(t.pinnedRunewords||[])},saveState(){let e="";if(!this.storage)return;const t={selectedRunes:this.getRunes(),pinnedRunewords:this.getPinned()};try{e=JSON.stringify(t)}catch{}this.storage.setItem(dr,e)}},cc={name:"TopcoatCancel"},uc={width:"1em",height:"1em",viewBox:"0 0 42 42"},fc=S("path",{fillRule:"evenodd",d:"M21.002 26.588l10.357 10.604c1.039 1.072 1.715 1.083 2.773 0l2.078-2.128c1.018-1.042 1.087-1.726 0-2.839L25.245 21L36.211 9.775c1.027-1.055 1.047-1.767 0-2.84l-2.078-2.127c-1.078-1.104-1.744-1.053-2.773 0L21.002 15.412L10.645 4.809c-1.029-1.053-1.695-1.104-2.773 0L5.794 6.936c-1.048 1.073-1.029 1.785 0 2.84L16.759 21L5.794 32.225c-1.087 1.113-1.029 1.797 0 2.839l2.077 2.128c1.049 1.083 1.725 1.072 2.773 0l10.358-10.604z",fill:"currentColor"},null,-1),dc=[fc];function hc(e,t,n,s,r,o){return F(),I("svg",uc,dc)}const yo=de(cc,[["render",hc]]),pc={El:`
  `,Eld:`
  3 x El
  `,Tir:`
  3 x Eld
  `,Nef:`
  3 x Tir
  `,Eth:`
  3 x Nef
  `,Ith:`
  3 x Eth
  `,Tal:`
  3 x Ith
  `,Ral:`
  3 x Tal
  `,Ort:`
  3 x Ral
  `,Thul:`
  3 x Ort
  `,Amn:`
  3 x Thul
  1 Chipped Topaz
  `,Sol:`
  3 x Amn
  1 Chipped Amethyst
  `,Shael:`
  3 x Sol
  1 Chipped Sapphire
  `,Dol:`
  3 x Shael
  1 Chipped Ruby
  `,Hel:`
  3 x Dol
  1 Chipped Emerald
  `,Io:`
  3 x Hel
  1 Chipped Diamond
  `,Lum:`
  3 x Io
  1 Flawed Topaz
  `,Ko:`
  3 x Lum
  1 Flawed Amethyst
  `,Fal:`
  3 x Ko
  1 Flawed Sapphire
  `,Lem:`
  3 x Fal
  1 Flawed Ruby
  `,Pul:`
  3 x Lem
  1 Flawed Emerald
  `,Um:`
  2 x Pul
  1 Flawed Diamond
  `,Mal:`
  2 x Um
  1 Topaz
  `,Ist:`
  2 x Mal
  1 Amethyst
  `,Gul:`
  2 x Ist
  1 Sapphire
  `,Vex:`
  2 x Gul
  1 Ruby
  `,Ohm:`
  2 x Vex
  1 Emerald
  `,Lo:`
  2 x Ohm
  1 Diamond
  `,Sur:`
  2 x Lo
  1 Flawless Topaz
  `,Ber:`
  2 x Sur
  1 Flawless Amethyst
  `,Jah:`
  2 x Ber
  1 Flawless Sapphire
  `,Cham:`
  2 x Jah
  1 Flawless Ruby
  `,Zod:`
  2 x Cham
  1 Flawless Emerald
  `},mc=We({name:"RunePopup",data(){return{isVisible:!1,position:{x:0,y:0},rune:""}},computed:{runesDataMap(){const e=new Map;return An.forEach(t=>{e.set(t.name,t)}),e},formatBody(){const e=this.rune;let t=e&&pc[e]||"--( invalid runeword id )--";return t=t.trim(),t=t.replace(/<\/h4>\n*/g,"</h4>"),t=t.replace(/\n/g,"<br/>"),t=t.replace(/\+?[0-9-]+%?/g,'<span class="is-mod">$&</span>'),t}},methods:{unitPx(e){return`${e}px`},moveTo(e){let{x:n,y:s}=e.getBoundingClientRect();n=n+50,s=s+window.pageYOffset+e.offsetHeight+4;const o=this.$refs.root.offsetHeight,i=s+o,l=document.documentElement.clientHeight;let c=window.scrollY+l;c-=10,i>c&&(s=c-o,s=Math.max(window.scrollY+10,s)),this.position={x:n,y:s}},showRune(e,t){this.rune=e,this.$nextTick(()=>{this.moveTo(t),this.isVisible=!0})},setVisible(e){this.isVisible=e}}}),gc={class:"rw-RunewordPopup-title"},vc=["innerHTML"];function yc(e,t,n,s,r,o){var i;return F(),I("div",{ref:"root",class:"rw-RunewordPopup absolute",style:_t({visibility:e.isVisible?"visible":"hidden",left:e.unitPx(e.position.x),top:e.unitPx(e.position.y)}),onClick:t[0]||(t[0]=l=>e.setVisible(!1))},[S("h3",gc,se((i=e.runesDataMap.get(e.rune))==null?void 0:i.fname),1),S("div",{class:"rw-RunewordPopup-body",innerHTML:e.formatBody},null,8,vc)],4)}const Tc=de(mc,[["render",yc]]),Cc=We({name:"Runes",components:{IconCancel:yo,RunePopup:Tc},data(){return{haveRunes:ce.state.haveRunes,runes:An}},computed:{isAnyRuneSelected(){return ce.getRunes().length>0},runesByTier(){return[this.runes.filter(t=>t.tier===en.COMMON),this.runes.filter(t=>t.tier===en.SEMIRARE),this.runes.filter(t=>t.tier===en.RARE)]},runePopup(){return this.$refs.runePopup}},methods:{onClearRunes(){ce.clearRunes(),ce.saveState()},onEnterRune(e,t){e.target&&this.runePopup.showRune(t.toString(),e.target)},onLeaveRune(){this.runePopup.setVisible(!1)},onToggleRune(e){const t=ce.hasRune(e);ce.setRunes([e],!t),ce.saveState()}}}),_c={class:"relative"},Sc={class:"flex justify-between items-center mb-2"},Ac=S("h2",{class:"rw-Title-h2 mb-0"},"Runes",-1),bc={key:0,class:"-mt-2px"},Rc={class:"rw-Runes flex justify-between w-[130px] select-none"},wc=["onClick","onMouseenter"],Lc={class:"mx-auto my-auto"};function Dc(e,t,n,s,r,o){const i=ue("rune-popup"),l=ue("icon-cancel");return F(),I(ie,null,[N(i,{ref:"runePopup"},null,512),S("div",_c,[S("div",Sc,[Ac,e.isAnyRuneSelected?(F(),I("div",bc,[S("a",{class:"rw-Runes-clear",href:"#",onClick:t[0]||(t[0]=gs((...c)=>e.onClearRunes&&e.onClearRunes(...c),["prevent"]))},[N(l,{class:"ux-icon ux-icon--fw rw-Runes-clearIcon text-[#da0000] mr-1"}),pt("clear ")])])):Ie("",!0)]),S("div",Rc,[(F(!0),I(ie,null,It(e.runesByTier,(c,f)=>(F(),I("div",{key:f,class:"w-1/3"},[(F(!0),I(ie,null,It(c,d=>(F(),I("div",{key:d.name,class:Te(["rw-Rune mx-auto",{"is-selected":e.haveRunes[d.name]}]),onClick:m=>e.onToggleRune(d.name),onMouseenter:m=>e.onEnterRune(m,d.name),onMouseleave:t[1]||(t[1]=m=>e.onLeaveRune())},[S("span",Lc,se(d.name),1)],42,wc))),128))]))),128))])])],64)}const Ec=de(Cc,[["render",Dc]]),Mc=[{title:"Ancient's Pledge",runes:["Ral","Ort","Tal"],level:21,ttypes:["Shields"]},{title:"Black",runes:["Thul","Io","Nef"],level:35,ttypes:["Clubs","Hammers","Maces"]},{title:"Fury",runes:["Jah","Gul","Eth"],level:65,ttypes:["Melee Weapons"]},{title:"Holy Thunder",runes:["Eth","Ral","Ort","Tal"],level:21,ttypes:["Scepters"]},{title:"Honor",runes:["Amn","El","Ith","Tir","Sol"],level:27,ttypes:["Melee Weapons"]},{title:"King's Grace",runes:["Amn","Ral","Thul"],level:25,ttypes:["Swords","Scepters"]},{title:"Leaf",runes:["Tir","Ral"],level:19,ttypes:["Staves"],tinfos:"(Not Orbs/Wands)"},{title:"Lionheart",runes:["Hel","Lum","Fal"],level:41,ttypes:["Body Armors"]},{title:"Lore",runes:["Ort","Sol"],level:27,ttypes:["Helms"]},{title:"Malice",runes:["Ith","El","Eth"],level:15,ttypes:["Melee Weapons"]},{title:"Melody",runes:["Shael","Ko","Nef"],level:39,ttypes:["Missile Weapons"]},{title:"Memory",runes:["Lum","Io","Sol","Eth"],level:37,ttypes:["Staves"],tinfos:"(Not Orbs/Wands)"},{title:"Nadir",runes:["Nef","Tir"],level:13,ttypes:["Helms"]},{title:"Radiance",runes:["Nef","Sol","Ith"],level:27,ttypes:["Helms"]},{title:"Rhyme",runes:["Shael","Eth"],level:29,ttypes:["Shields"]},{title:"Silence",runes:["Dol","Eld","Hel","Ist","Tir","Vex"],level:55,ttypes:["Weapons"]},{title:"Smoke",runes:["Nef","Lum"],level:37,ttypes:["Body Armors"]},{title:"Stealth",runes:["Tal","Eth"],level:17,ttypes:["Body Armors"]},{title:"Steel",runes:["Tir","El"],level:13,ttypes:["Swords","Axes","Maces"]},{title:"Strength",runes:["Amn","Tir"],level:25,ttypes:["Melee Weapons"]},{title:"Venom",runes:["Tal","Dol","Mal"],level:49,ttypes:["Weapons"]},{title:"Wealth",runes:["Lem","Ko","Tir"],level:43,ttypes:["Body Armors"]},{title:"White",runes:["Dol","Io"],level:35,ttypes:["Wands"],tinfos:"(Necromancer)"},{title:"Zephyr",runes:["Ort","Eth"],level:21,ttypes:["Missile Weapons"]},{title:"Beast",runes:["Ber","Tir","Um","Mal","Lum"],level:63,ttypes:["Axes","Scepters","Hammers"],version:"1.10"},{title:"Bramble",runes:["Ral","Ohm","Sur","Eth"],level:61,ttypes:["Body Armors"],version:"1.10"},{title:"Breath of the Dying",runes:["Vex","Hel","El","Eld","Zod","Eth"],level:69,ttypes:["Weapons"],version:"1.10"},{title:"Call to Arms",runes:["Amn","Ral","Mal","Ist","Ohm"],level:57,ttypes:["Weapons"],version:"1.10"},{title:"Chaos",runes:["Fal","Ohm","Um"],level:57,ttypes:["Claws"],tinfos:"(Assassin)",version:"1.10"},{title:"Chains of Honor",runes:["Dol","Um","Ber","Ist"],level:63,ttypes:["Body Armors"],version:"1.10"},{title:"Crescent Moon",runes:["Shael","Um","Tir"],level:47,ttypes:["Axes","Swords","Polearms"],version:"1.10"},{title:"Delirium",runes:["Lem","Ist","Io"],level:51,ttypes:["Helms"],version:"1.10"},{title:"Doom",runes:["Hel","Ohm","Um","Lo","Cham"],level:67,ttypes:["Axes","Polearms","Hammers"],version:"1.10"},{title:"Duress",runes:["Shael","Um","Thul"],level:47,ttypes:["Body Armors"],version:"1.10"},{title:"Enigma",runes:["Jah","Ith","Ber"],level:65,ttypes:["Body Armors"],version:"1.10"},{title:"Eternity",runes:["Amn","Ber","Ist","Sol","Sur"],level:63,ttypes:["Melee Weapons"],version:"1.10"},{title:"Exile",runes:["Vex","Ohm","Ist","Dol"],level:57,ttypes:["Paladin Shields"],tinfos:"(Paladin)",version:"1.10"},{title:"Famine",runes:["Fal","Ohm","Ort","Jah"],level:65,ttypes:["Axes","Hammers"],version:"1.10"},{title:"Gloom",runes:["Fal","Um","Pul"],level:47,ttypes:["Body Armors"],version:"1.10"},{title:"Hand of Justice",runes:["Sur","Cham","Amn","Lo"],level:67,ttypes:["Weapons"],version:"1.10"},{title:"Heart of the Oak",runes:["Ko","Vex","Pul","Thul"],level:55,ttypes:["Staves","Maces"],version:"1.10"},{title:"Kingslayer",runes:["Mal","Um","Gul","Fal"],level:53,ttypes:["Swords","Axes"],version:"1.10"},{title:"Passion",runes:["Dol","Ort","Eld","Lem"],level:43,ttypes:["Weapons"],version:"1.10"},{title:"Prudence",runes:["Mal","Tir"],level:49,ttypes:["Body Armors"],version:"1.10"},{title:"Sanctuary",runes:["Ko","Ko","Mal"],level:49,ttypes:["Shields"],version:"1.10"},{title:"Splendor",runes:["Eth","Lum"],level:37,ttypes:["Shields"],version:"1.10"},{title:"Stone",runes:["Shael","Um","Pul","Lum"],level:47,ttypes:["Body Armors"],version:"1.10"},{title:"Wind",runes:["Sur","El"],level:61,ttypes:["Melee Weapons"],version:"1.10"},{title:"Brand",runes:["Jah","Lo","Mal","Gul"],level:65,ttypes:["Missile Weapons"],version:"1.10"},{title:"Death",runes:["Hel","El","Vex","Ort","Gul"],level:55,ttypes:["Swords","Axes"],version:"1.10"},{title:"Destruction",runes:["Vex","Lo","Ber","Jah","Ko"],level:65,ttypes:["Polearms","Swords"],version:"1.10"},{title:"Dragon",runes:["Sur","Lo","Sol"],level:61,ttypes:["Body Armors","Shields"],version:"1.10"},{title:"Dream",runes:["Io","Jah","Pul"],level:65,ttypes:["Helms","Shields"]},{title:"Edge",runes:["Tir","Tal","Amn"],level:25,ttypes:["Missile Weapons"],version:"1.10"},{title:"Faith",runes:["Ohm","Jah","Lem","Eld"],level:65,ttypes:["Missile Weapons"],version:"1.10"},{title:"Fortitude",runes:["El","Sol","Dol","Lo"],level:59,ttypes:["Weapons","Body Armors"],version:"1.10"},{title:"Grief",runes:["Eth","Tir","Lo","Mal","Ral"],level:59,ttypes:["Swords","Axes"],version:"1.10"},{title:"Harmony",runes:["Tir","Ith","Sol","Ko"],level:39,ttypes:["Missile Weapons"],version:"1.10"},{title:"Ice",runes:["Amn","Shael","Jah","Lo"],level:65,ttypes:["Missile Weapons"],version:"1.10"},{title:"Infinity",runes:["Ber","Mal","Ber","Ist"],level:63,ttypes:["Polearms","Spears"],version:"1.10"},{title:"Insight",runes:["Ral","Tir","Tal","Sol"],level:27,ttypes:["Missile Weapons","Polearms","Staves"],version:"1.10"},{title:"Last Wish",runes:["Jah","Mal","Jah","Sur","Jah","Ber"],level:65,ttypes:["Swords","Hammers","Axes"],version:"1.10"},{title:"Lawbringer",runes:["Amn","Lem","Ko"],level:43,ttypes:["Swords","Hammers","Scepters"],version:"1.10"},{title:"Oath",runes:["Shael","Pul","Mal","Lum"],level:49,ttypes:["Swords","Axes","Maces"],version:"1.10"},{title:"Obedience",runes:["Hel","Ko","Thul","Eth","Fal"],level:41,ttypes:["Polearms","Spears"],version:"1.10"},{title:"Phoenix",runes:["Vex","Vex","Lo","Jah"],level:65,ttypes:["Weapons","Shields"],version:"1.10"},{title:"Pride",runes:["Cham","Sur","Io","Lo"],level:67,ttypes:["Polearms","Spears"],version:"1.10"},{title:"Rift",runes:["Hel","Ko","Lem","Gul"],level:53,ttypes:["Polearms","Scepters"],version:"1.10"},{title:"Spirit",runes:["Tal","Thul","Ort","Amn"],level:25,ttypes:["Swords","Shields"],version:"1.10"},{title:"Voice of Reason",runes:["Lem","Ko","El","Eld"],level:43,ttypes:["Swords","Maces"],version:"1.10"},{title:"Wrath",runes:["Pul","Lum","Ber","Mal"],level:63,ttypes:["Missile Weapons"],version:"1.10"},{title:"Bone",runes:["Sol","Um","Um"],level:47,ttypes:["Body Armors"],tinfos:"(Necromancer)",version:"1.11"},{title:"Enlightenment",runes:["Pul","Ral","Sol"],level:45,ttypes:["Body Armors"],tinfos:"(Sorceress)",version:"1.11"},{title:"Myth",runes:["Hel","Amn","Nef"],level:25,ttypes:["Body Armors"],tinfos:"(Barbarian)",version:"1.11"},{title:"Peace",runes:["Shael","Thul","Amn"],level:29,ttypes:["Body Armors"],tinfos:"(Amazon)",version:"1.11"},{title:"Principle",runes:["Ral","Gul","Eld"],level:53,ttypes:["Body Armors"],tinfos:"(Paladin)",version:"1.11"},{title:"Rain",runes:["Ort","Mal","Ith"],level:49,ttypes:["Body Armors"],tinfos:"(Druid)",version:"1.11"},{title:"Treachery",runes:["Shael","Thul","Lem"],level:43,ttypes:["Body Armors"],tinfos:"(Assassin)",version:"1.11"},{title:"Plague",runes:["Cham","Shael","Um"],level:67,ttypes:["Swords","Claws","Daggers"],version:"2.4"},{title:"Pattern",runes:["Tal","Ort","Thul"],level:23,ttypes:["Claws"],tinfos:"(Assassin)",version:"2.4"},{title:"Unbending Will",runes:["Fal","Io","Ith","Eld","El","Hel"],level:41,ttypes:["Swords"],version:"2.4"},{title:"Wisdom",runes:["Pul","Ith","Eld"],level:45,ttypes:["Helms"],version:"2.4"},{title:"Obsession",runes:["Zod","Ist","Lem","Lum","Io","Nef"],level:69,ttypes:["Staves"],version:"2.4"},{title:"Flickering Flame",runes:["Nef","Pul","Vex"],level:55,ttypes:["Helms"],version:"2.4"},{title:"Mist",runes:["Cham","Shael","Gul","Thul","Ith"],level:67,ttypes:["Missile Weapons"],version:"2.4"},{title:"Bulwark",runes:["Shael","Io","Sol"],level:35,ttypes:["Helms"],ladder:!0,version:"2.6"},{title:"Cure",runes:["Shael","Io","Tal"],level:35,ttypes:["Helms"],ladder:!0,version:"2.6"},{title:"Ground",runes:["Shael","Io","Ort"],level:35,ttypes:["Helms"],ladder:!0,version:"2.6"},{title:"Hearth",runes:["Shael","Io","Thul"],level:35,ttypes:["Helms"],ladder:!0,version:"2.6"},{title:"Temper",runes:["Shael","Io","Ral"],level:35,ttypes:["Helms"],ladder:!0,version:"2.6"},{title:"Hustle",runes:["Shael","Ko","Eld"],level:39,ttypes:["Weapons","Body Armors"],ladder:!0,version:"2.6"},{title:"Mosaic",runes:["Mal","Gul","Amn"],level:53,ttypes:["Claws"],tinfos:"(Assassin)",ladder:!0,version:"2.6"},{title:"Metamorphosis",runes:["Io","Cham","Fal"],level:67,ttypes:["Helms"],ladder:!0,tinfos:"(Druid)",version:"2.6"}],Pn={LOD:["","1.10","1.11"],RES:["2.4","2.6"]},hr={Axes:{url:"https://diablo2.diablowiki.net/Axes"},"Body Armors":{url:"https://diablo2.diablowiki.net/Body_Armor"},Claws:{url:"https://diablo2.diablowiki.net/Assassin_Items"},Clubs:{url:"https://diablo2.diablowiki.net/Clubs"},Daggers:{url:"https://diablo2.diablowiki.net/Daggers"},Hammers:{url:"https://diablo2.diablowiki.net/Hammers"},Helms:{url:"https://diablo2.diablowiki.net/Helms"},Maces:{url:"https://diablo2.diablowiki.net/Maces"},"Melee Weapons":{},"Missile Weapons":{},"Paladin Shields":{url:"https://diablo2.diablowiki.net/Paladin_Items"},Polearms:{url:"https://diablo2.diablowiki.net/Polearms"},Scepters:{url:"https://diablo2.diablowiki.net/Scepters"},Shields:{url:"https://diablo2.diablowiki.net/Shields"},Spears:{url:"https://diablo2.diablowiki.net/Spears"},Staves:{url:"https://diablo2.diablowiki.net/Staves"},Swords:{url:"https://diablo2.diablowiki.net/Swords"},Wands:{url:"https://diablo2.diablowiki.net/Wands"},Weapons:{}},xc={name:"FaSolidLongArrowAltUp"},kc={width:"0.5em",height:"1em",viewBox:"0 0 256 512"},Fc=S("path",{d:"M88 166.059V468c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12V166.059h46.059c21.382 0 32.09-25.851 16.971-40.971l-86.059-86.059c-9.373-9.373-24.569-9.373-33.941 0l-86.059 86.059c-15.119 15.119-4.411 40.971 16.971 40.971H88z",fill:"currentColor"},null,-1),Ic=[Fc];function Oc(e,t,n,s,r,o){return F(),I("svg",kc,Ic)}const Pc=de(xc,[["render",Oc]]),Hc={name:"FaSolidLongArrowAltDown"},Bc={width:"0.5em",height:"1em",viewBox:"0 0 256 512"},$c=S("path",{d:"M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z",fill:"currentColor"},null,-1),Vc=[$c];function Wc(e,t,n,s,r,o){return F(),I("svg",Bc,Vc)}const Nc=de(Hc,[["render",Wc]]),Kc={name:"PhDiamondFill"},Uc={width:"1em",height:"1em",viewBox:"0 0 256 256"},qc=S("path",{d:"M236 139.3L139.3 236a15.9 15.9 0 0 1-22.6 0L20 139.3a16.1 16.1 0 0 1 0-22.6L116.7 20a16.1 16.1 0 0 1 22.6 0l96.7 96.7a16.1 16.1 0 0 1 0 22.6z",fill:"currentColor"},null,-1),Gc=[qc];function zc(e,t,n,s,r,o){return F(),I("svg",Uc,Gc)}const jc=de(Kc,[["render",zc]]),Jc={name:"PhDiamondBold"},Yc={width:"1em",height:"1em",viewBox:"0 0 256 256"},Xc=S("path",{d:"M238.8 113.9l-96.7-96.7a19.8 19.8 0 0 0-28.2 0l-96.7 96.7a19.8 19.8 0 0 0 0 28.2l96.7 96.7a19.8 19.8 0 0 0 28.2 0l96.7-96.7a19.8 19.8 0 0 0 0-28.2zM128 219l-91-91l91-91l91 91z",fill:"currentColor"},null,-1),Zc=[Xc];function Qc(e,t,n,s,r,o){return F(),I("svg",Yc,Zc)}const eu=de(Jc,[["render",Qc]]),tu={"Ancient's Pledge":`
  +50% Enhanced Defense
  Cold Resist +43%
  Fire Resist +48%
  Lightning Resist +48%
  Poison Resist +48%
  10% Damage Goes To Mana
  `,Black:`
  +120% Enhanced Damage
  40% Chance Of Crushing Blow
  +200 To Attack Rating
  Adds 3-14 Cold Damage - Cold Duration 3 Seconds
  +10 To Vitality
  15% Increased Attack Speed
  Knockback
  Magic Damage Reduced By 2
  Level 4 Corpse Explosion (12 Charges)
  `,Fury:`
  +209% Enhanced Damage
  40% Increased Attack Speed
  Prevent Monster Heal
  66% Chance Of Open Wounds
  33% Deadly Strike
  Ignore Target's Defense
  -25% Target Defense
  20% Bonus To Attack Rating
  6% Life Stolen Per Hit
  +5 To Frenzy (Barbarian Only)
  `,"Holy Thunder":`
  +60% Enhanced Damage
  -25% Target Defense
  Adds 5-30 Fire Damage
  Adds 21-110 Lightning Damage
  +75 Poison Damage Over 5 Seconds
  +10 To Maximum Damage
  Lightning Resistance +60%
  +5 To Maximum Lightning Resistance
  +3 To Holy Shock (Paladin Only)
  Level 7 Chain Lightning (60 Charges)
  `,Honor:`
  +160% Enhanced Damage
  +9 To Minimum Damage
  +9 To Maximum Damage
  25% Deadly Strike
  +250 To Attack Rating
  +1 to All Skills
  7% Life Stolen Per Hit
  Replenish Life +10
  +10 To Strength
  +1 To Light Radius
  +2 To Mana After Each Kill
  `,"King's Grace":`
  +100% Enhanced Damage
  +100% Damage To Demons
  +50% Damage To Undead
  Adds 5-30 Fire Damage
  Adds 3-14 Cold Damage - 3 Second Duration
  +150 To Attack Rating
  +100 To Attack Rating Against Demons
  +100 To Attack Rating Against Undead
  7% Life Stolen Per Hit
  `,Leaf:`
  Adds 5-30 Fire Damage
  +3 To Fire Skills
  +3 To Fire Bolt (Sorceress Only)
  +3 To Inferno (Sorceress Only)
  +3 To Warmth (Sorceress Only)
  +2 To Mana After Each Kill
  + (2 Per Character Level) +2-198 To Defense (Based On Character Level)
  Cold Resist +33%
  `,Lionheart:`
  +20% Enhanced Damage
  Requirements -15%
  +25 To Strength
  +10 To Energy
  +20 To Vitality
  +15 To Dexterity
  +50 To Life
  All Resistances +30
  `,Lore:`
  +1 To All Skill Levels
  +10 To Energy
  +2 To Mana After Each Kill
  Lightning Resist +30%
  Damage Reduced By 7
  +2 To Light Radius
  `,Malice:`
  +33% Enhanced Damage
  +9 To Maximum Damage
  100% Chance Of Open Wounds
  -25% Target Defense
  -100 To Monster Defense Per Hit
  Prevent Monster Heal
  +50 To Attack Rating
  Drain Life -5
  `,Melody:`
  +50% Enhanced Damage
  +300% Damage To Undead
  +3 To Bow and Crossbow Skills (Amazon Only)
  +3 To Critical Strike (Amazon Only)
  +3 To Dodge (Amazon Only)
  +3 To Slow Missiles (Amazon Only)
  20% Increased Attack Speed
  +10 To Dexterity
  Knockback
  `,Memory:`
  +3 to Sorceress Skill Levels
  33% Faster Cast Rate
  Increase Maximum Mana 20%
  +3 Energy Shield (Sorceress Only)
  +2 Static Field (Sorceress Only)
  +10 To Energy
  +10 To Vitality
  +9 To Minimum Damage
  -25% Target Defense
  Magic Damage Reduced By 7
  +50% Enhanced Defense
  `,Nadir:`
  +50% Enhanced Defense
  +10 Defense
  +30 Defense vs. Missile
  Level 13 Cloak of Shadows (9 Charges)
  +2 To Mana After Each Kill
  +5 To Strength
  -33% Extra Gold From Monsters
  -3 To Light Radius
  `,Radiance:`
  +75% Enhanced Defense
  +30 Defense Vs. Missile
  +10 To Energy
  +10 To Vitality
  15% Damage Goes To Mana
  Magic Damage Reduced By 3
  +33 To Mana
  Damage Reduced By 7
  +5 To Light Radius
  `,Rhyme:`
  20% Increased Chance of Blocking
  40% Faster Block Rate
  All Resistances +25
  Regenerate Mana 15%
  Cannot Be Frozen
  50% Extra Gold From Monsters
  25% Better Chance Of Getting Magic Items
  `,Silence:`
  200% Enhanced Damage
  +75% Damage To Undead
  Requirements -20%
  20% Increased Attack Speed
  +50 To Attack Rating Against Undead
  +2 To All Skills
  All Resistances +75
  20% Faster Hit Recovery
  11% Mana Stolen Per Hit
  Hit Causes Monster To Flee 25%
  Hit Blinds Target +33
  +2 To Mana After Each Kill
  30% Better Chance Of Getting Magic Items
  `,Smoke:`
  +75% Enhanced Defense
  +280 Defense Vs. Missile
  All Resistances +50
  20% Faster Hit Recovery
  Level 6 Weaken (18 Charges)
  +10 To Energy
  -1 To Light Radius
  `,Stealth:`
  Magic Damage Reduced By 3
  +6 To Dexterity
  +15 To Maximum Stamina
  Poison Resist +30%
  Regenerate Mana 15%
  25% Faster Run/Walk
  25% Faster Cast Rate
  25% Faster Hit Recovery
  `,Steel:`
  20% Enhanced Damage
  +3 To Minimum Damage
  +3 To Maximum Damage
  +50 To Attack Rating
  50% Chance Of Open Wounds
  25% Increased Attack Speed
  +2 To Mana After Each Kill
  +1 To Light Radius
  `,Strength:`
  35% Enhanced Damage
  25% Chance Of Crushing Blow
  7% Life Stolen Per Hit
  +2 To Mana After Each Kill
  +20 To Strength
  +10 To Vitality
  `,Venom:`
  Hit Causes Monster To Flee 25%
  Prevent Monster Heal
  Ignore Target's Defense
  7% Mana Stolen Per Hit
  Level 15 Poison Explosion (27 Charges)
  Level 13 Poison Nova (11 Charges)
  +273 Poison Damage Over 6 seconds
  `,Wealth:`
  300% Extra Gold From Monsters
  100% Better Chance Of Getting Magic Items
  +2 To Mana After Each Kill
  +10 To Dexterity
  `,White:`
  Hit Causes Monster To Flee 25%
  +10 To Vitality
  +3 To Poison And Bone Skills (Necromancer Only)
  +3 To Bone Armor (Necromancer Only)
  +2 To Bone Spear (Necromancer Only)
  +4 To Skeleton Mastery (Necromancer Only)
  Magic Damage Reduced By 4
  20% Faster Cast Rate
  +13 To Mana
  `,Zephyr:`
  +33% Enhanced Damage
  +66 To Attack Rating
  Adds 1-50 Lightning Damage
  -25% Target Defense
  +25 Defense
  25% Faster Run/Walk
  25% Increased Attack Speed
  7% Chance To Cast Level 1 Twister When Struck
  `,Beast:`
  Level 9 Fanaticism Aura When Equipped
  +40% Increased Attack Speed
  +240-270% Enhanced Damage (varies)
  20% Chance of Crushing Blow
  25% Chance of Open Wounds
  +3 To Werebear
  +3 To Lycanthropy
  Prevent Monster Heal
  +25-40 To Strength (varies)
  +10 To Energy
  +2 To Mana After Each Kill
  Level 13 Summon Grizzly (5 Charges)
  `,Bramble:`
  Level 15-21 Thorns Aura When Equipped (varies)
  +50% Faster Hit Recovery
  +25-50% To Poison Skill Damage (varies)
  +300 Defense
  Increase Maximum Mana 5%
  Regenerate Mana 15%
  +5% To Maximum Cold Resist
  Fire Resist +30%
  Poison Resist +100%
  +13 Life After Each Kill
  Level 13 Spirit of Barbs (33 Charges)
  `,"Breath of the Dying":`
  50% Chance To Cast Level 20 Poison Nova When You Kill An Enemy
  Indestructible
  +60% Increased Attack Speed
  +350-400% Enhanced Damage (varies)
  +200% Damage To Undead
  -25% Target Defense
  +50 To Attack Rating
  +50 To Attack Rating Against Undead
  7% Mana Stolen Per Hit
  12-15% Life Stolen Per Hit (varies)
  Prevent Monster Heal
<U>+30 To All Attributes</U>
  +1 To Light Radius
  Requirements -20%
  `,"Call to Arms":`
  +1 To All Skills
  +40% Increased Attack Speed
  +250-290% Enhanced Damage (varies)
  Adds 5-30 Fire Damage
  7% Life Stolen Per Hit
  +2-6 To Battle Command (varies)*
  +1-6 To Battle Orders (varies)*
  +1-4 To Battle Cry (varies)*
  Prevent Monster Heal
  Replenish Life +12
  30% Better Chance of Getting Magic Items
  `,Chaos:`
  9% Chance To Cast Level 11 Frozen Orb On Striking
  11% Chance To Cast Level 9 Charged Bolt On Striking
  +35% Increased Attack Speed
  +290-340% Enhanced Damage (varies)
  Adds 216-471 Magic Damage
  25% Chance of Open Wounds
  +1 To Whirlwind
  +10 To Strength
  +15 Life After Each Demon Kill
  `,"Chains of Honor":`
  +2 To All Skills
  +200% Damage To Demons
  +100% Damage To Undead
  8% Life Stolen Per Hit
  +70% Enhanced Defense
  +20 To Strength
  Replenish Life +7
  All Resistances +65
  Damage Reduced By 8%
  25% Better Chance of Getting Magic Items
  `,"Crescent Moon":`
  10% Chance To Cast Level 17 Chain Lightning On Striking
  7% Chance To Cast Level 13 Static Field On Striking
  +20% Increased Attack Speed
  +180-220% Enhanced Damage (varies)
  Ignore Target's Defense
  -35% To Enemy Lightning Resistance
  25% Chance of Open Wounds
  +9-11 Magic Absorb (varies)
  +2 To Mana After Each Kill
  Level 18 Summon Spirit Wolf (30 Charges)
  `,Delirium:`
  1% Chance To Cast Level 50 Delirium* (morph) When Struck
  6% Chance To Cast Level 14 Mind Blast When Struck
  14% Chance To Cast Level 13 Terror When Struck
  11% Chance To Cast Level 18 Confuse On Striking
  +2 To All Skills
  +261 Defense
  +10 To Vitality
  50% Extra Gold From Monsters
  25% Better Chance of Getting Magic Items
  Level 17 Attract (60 Charges)
  `,Doom:`
  5% Chance To Cast Level 18 Volcano On Striking
  Level 12 Holy Freeze Aura When Equipped
  +2 To All Skills
  +45% Increased Attack Speed
  +330-370% Enhanced Damage (varies)
  -(40-60)% To Enemy Cold Resistance (varies)
  20% Deadly Strike
  25% Chance of Open Wounds
  Prevent Monster Heal
  Freezes Target +3
  Requirements -20%
  `,Duress:`
  +40% Faster Hit Recovery
  +10-20% Enhanced Damage (varies)
  Adds 37-133 Cold Damage 2 sec. Duration (Normal)
  15% Chance of Crushing Blow
  33% Chance of Open Wounds
  +150-200% Enhanced Defense (varies)
  -20% Slower Stamina Drain
  Cold Resist +45%
  Lightning Resist +15%
  Fire Resist +15%
  Poison Resist +15%
  `,Enigma:`
  +2 To All Skills
  +45% Faster Run/Walk
  +1 To Teleport
  +750-775 Defense (varies)
  + (0.75 Per Character Level) +0-74 To Strength (Based On Character Level)
  Increase Maximum Life 5%
  Damage Reduced By 8%
  +14 Life After Each Kill
  15% Damage Taken Goes To Mana
  + (1 Per Character Level) +1-99% Better Chance of Getting Magic Items (Based On Character Level)
  `,Eternity:`
  Indestructible
  +260-310% Enhanced Damage (varies)
  +9 To Minimum Damage
  7% Life Stolen Per Hit
  20% Chance of Crushing Blow
  Hit Blinds Target
  Slows Target By 33%
  Regenerate Mana 16%
  Replenish Life +16
  Cannot Be Frozen
  30% Better Chance Of Getting Magic Items
  Level 8 Revive (88 Charges)
  `,Exile:`
  15% Chance To Cast Level 5 Life Tap On Striking
  Level 13-16 Defiance Aura When Equipped (varies)
  +2 To Offensive Auras (Paladin Only)
  +30% Faster Block Rate
  Freezes Target
  +220-260% Enhanced Defense (varies)
  Replenish Life +7
  +5% To Maximum Cold Resist
  +5% To Maximum Fire Resist
  25% Better Chance Of Getting Magic Items
  Repairs 1 Durability in 4 Seconds
  `,Famine:`
  +30% Increased Attack Speed
  +320-370% Enhanced Damage (varies)
  Ignore Target's Defense
  Adds 180-200 Magic Damage
  Adds 50-200 Fire Damage
  Adds 51-250 Lightning Damage
  Adds 50-200 Cold Damage
  12% Life Stolen Per Hit
  Prevent Monster Heal
  +10 To Strength
  `,Gloom:`
  15% Chance To Cast Level 3 Dim Vision When Struck
  +10% Faster Hit Recovery
  +200-260% Enhanced Defense (varies)
  +10 To Strength
  All Resistances +45
  Half Freeze Duration
  5% Damage Taken Goes To Mana
  -3 To Light Radius
  `,"Hand of Justice":`
  100% Chance To Cast Level 36 Blaze When You Level-Up
  100% Chance To Cast Level 48 Meteor When You Die
  Level 16 Holy Fire Aura When Equipped
  +33% Increased Attack Speed
  +280-330% Enhanced Damage (varies)
  Ignore Target's Defense
  7% Life Stolen Per Hit
  -20% To Enemy Fire Resistance
  20% Deadly Strike
  Hit Blinds Target
  Freezes Target +3
  `,"Heart of the Oak":`
  +3 To All Skills
  +40% Faster Cast Rate
  +75% Damage To Demons
  +100 To Attack Rating Against Demons
  Adds 3-14 Cold Damage, 3 sec. Duration (Normal)
  7% Mana Stolen Per Hit
  +10 To Dexterity
  Replenish Life +20
  Increase Maximum Mana 15%
  All Resistances +30-40 (varies)
  Level 4 Oak Sage (25 Charges)
  Level 14 Raven (60 Charges)
  `,Kingslayer:`
  +30% Increased Attack Speed
  +230-270% Enhanced Damage (varies)
  -25% Target Defense
  20% Bonus To Attack Rating
  33% Chance of Crushing Blow
  50% Chance of Open Wounds
  +1 To Vengeance
  Prevent Monster Heal
  +10 To Strength
  40% Extra Gold From Monsters
  `,Passion:`
  +25% Increased Attack Speed
  +160-210% Enhanced Damage (varies)
  50-80% Bonus To Attack Rating (varies)
  +75% Damage To Undead
  +50 To Attack Rating Against Undead
  Adds 1-50 Lightning Damage
  +1 To Berserk
  +1 To Zeal
  Hit Blinds Target +10
  Hit Causes Monster To Flee 25%
  75% Extra Gold From Monsters
  Level 3 Heart of Wolverine (12 Charges)
  `,Prudence:`
  +25% Faster Hit Recovery
  +140-170% Enhanced Defense (varies)
  All Resistances +25-35 (varies)
  Damage Reduced by 3
  Magic Damage Reduced by 17
  +2 To Mana After Each Kill
  +1 To Light Radius
  Repairs Durability 1 In 4 Seconds
  `,Sanctuary:`
  +20% Faster Hit Recovery
  +20% Faster Block Rate
  20% Increased Chance of Blocking
  +130-160% Enhanced Defense (varies)
  +250 Defense vs. Missile
  +20 To Dexterity
  All Resistances +50-70 (varies)
  Magic Damage Reduced By 7
  Level 12 Slow Missiles (60 Charges)
  `,Splendor:`
  +1 To All Skills
  +10% Faster Cast Rate
  +20% Faster Block Rate
  +60-100% Enhanced Defense (varies)
  +10 To Energy
  Regenerate Mana 15%
  50% Extra Gold From Monsters
  20% Better Chance of Getting Magic Items
  +3 To Light Radius
  `,Stone:`
  +60% Faster Hit Recovery
  +250-290% Enhanced Defense (varies)
  +300 Defense Vs. Missile
  +16 To Strength
  +16 To Vitality
  +10 To Energy
  All Resistances +15
  Level 16 Molten Boulder (80 Charges)
  Level 16 Clay Golem (16 Charges)
  `,Wind:`
  10% Chance To Cast Level 9 Tornado On Striking
  +20% Faster Run/Walk
  +40% Increased Attack Speed
  +15% Faster Hit Recovery
  +120-160% Enhanced Damage (varies)
  -50% Target Defense
  +50 To Attack Rating
  Hit Blinds Target
  +1 To Light Radius
  Level 13 Twister (127 Charges)
  `,Brand:`
  35% Chance To Cast Level 14 Amplify Damage When Struck
  100% Chance To Cast Level 18 Bone Spear On Striking
  +260-340% Enhanced Damage (varies)
  Ignore Target's Defense
  20% Bonus to Attack Rating
  +280-330% Damage To Demons (varies)

  20% Deadly Strike
  Prevent Monster Heal
  Knockback
  Fires Explosive Arrows or Bolts (15)
  `,Death:`
  100% Chance To Cast Level 44 Chain Lightning When You Die
  25% Chance To Cast Level 18 Glacial Spike On Attack
  Indestructible
  +300-385% Enhanced Damage (varies)*
  20% Bonus To Attack Rating
  +50 To Attack Rating
  Adds 1-50 Lightning Damage
  7% Mana Stolen Per Hit
  50% Chance of Crushing Blow
  +(0.5 per Character Level) 0.5-49.5% Deadly Strike (Based on Character Level)
  +1 To Light Radius
  Level 22 Blood Golem  (15 Charges)
  Requirements -20%
  `,Destruction:`
  23% Chance To Cast Level 12 Volcano On Striking
  5% Chance To Cast Level 23 Molten Boulder On Striking
  100% Chance To Cast level 45 Meteor When You Die
  15% Chance To Cast Level 22 Nova On Attack
  +350% Enhanced Damage
  Ignore Target's Defense
  Adds 100-180 Magic Damage
  7% Mana Stolen Per Hit
  20% Chance Of Crushing Blow
  20% Deadly Strike
  Prevent Monster Heal
  +10 To Dexterity
  `,Dragon:`
  20% Chance to Cast Level 18 Venom When Struck
  12% Chance To Cast Level 15 Hydra On Striking
  Level 14 Holy Fire Aura When Equipped
  +360 Defense
  +230 Defense Vs. Missile
  +3-5 To All Attributes (varies)
  +0.375-37.125 To Strength (Based on Character Level)
  Increase Maximum Mana 5% (Armor Only)
  +50 To Mana (Shields Only)
  +5% To Maximum Lightning Resist
  Damage Reduced by 7
  `,Dream:`
  10% Chance To Cast Level 15 Confuse When Struck
  Level 15 Holy Shock Aura When Equipped
  +20-30% Faster Hit Recovery (varies)
  +30% Enhanced Defense
  +150-220 Defense (varies)
  +10 To Vitality
  Increase Maximum Life 5% (Helms Only)
  +50 To Life (Shields Only)
  +0.625-61.875 To Mana (Based On Character Level)
  All Resistances +5-20 (varies)
  12-25% Better Chance of Getting Magic Items (varies)
  `,Edge:`
  Level 15 Thorns Aura When Equipped
  +35% Increased Attack Speed
  +320-380% Damage To Demons (varies)
  +280% Damage To Undead
  +75 Poison Damage Over 5 Seconds
  7% Life Stolen Per Hit
  Prevent Monster Heal
  +5-10 To All Attributes (varies)
  +2 To Mana After Each Kill
  Reduces All Vendor Prices 15%!!!
  `,Faith:`
  Level 12-15 Fanaticism Aura When Equipped (varies)
  +1-2 To All Skills (varies)
  +330% Enhanced Damage
  Ignore Target's Defense
  300% Bonus To Attack Rating
  +75% Damage To Undead
  +50 To Attack Rating Against Undead
  +120 Fire Damage
  All Resistances +15
  10% Reanimate As: Returned
  75% Extra Gold From Monsters
  `,Fortitude:`
  #### Weapons
  20% Chance To Cast Level 15 Chilling Armor when Struck
  +25% Faster Cast Rate
  +300% Enhanced Damage
  +9 To Minimum Damage
  +50 To Attack Rating
  20% Deadly Strike
  Hit Causes Monster To Flee 25%
  +200% Enhanced Defense
  +X To Life (Based on Character Level)*
  All Resistances +25-30 (varies)
  12% Damage Taken Goes To Mana
  +1 To Light Radius

  #### Body Armor
  20% Chance To Cast Level 15 Chilling Armor when Struck
  +25% Faster Cast Rate
  +300% Enhanced Damage
  +200% Enhanced Defense
  +15 Defense
  +X To Life (Based on Character Level)*
  Replenish Life +7
  +5% To Maximum Lightning Resist
  All Resistances +25-30 (varies)
  Damage Reduced By 7
  12% Damage Taken Goes To Mana
  +1 To Light Radius
  `,Grief:`
  35% Chance To Cast Level 15 Venom On Striking
  +30-40% Increased Attack Speed (varies)
  Damage +340-400 (varies)
  Ignore Target's Defense
  -25% Target Defense
  +(1.875 per character level) 1.875-185.625% Damage To Demons (Based on Character Level) 
  Adds 5-30 Fire Damage
  -20-25% To Enemy Poison Resistance (varies)
  20% Deadly Strike
  Prevent Monster Heal
  +2 To Mana After Each Kill
  +10-15 Life After Each Kill (varies)
  `,Harmony:`
  Level 10 Vigor Aura When Equipped
  +200-275% Enhanced Damage (varies)
  +9 To Minimum Damage
  +9 To Maximum Damage
  Adds 55-160 Lightning Damage
  Adds 55-160 Fire Damage
  Adds 55-160 Cold Damage
  +2-6 To Valkyrie (varies)
  +10 To Dexterity
  Regenerate Mana 20%
  +2 To Mana After Each Kill
  +2 To Light Radius
  Level 20 Revive (25 Charges)
  `,Ice:`
  100% Chance To Cast Level 40 Blizzard When You Level-up
  25% Chance To Cast Level 22 Frost Nova On Striking
  Level 18 Holy Freeze Aura When Equipped
  +20% Increased Attack Speed
  +140-210% Enhanced Damage (varies)
  Ignore Target's Defense
  +25-30% To Cold Skill Damage (varies)
  -20% To Enemy Cold Resistance
  7% Life Stolen Per Hit
  20% Deadly Strike
  3.125-309.375 Extra Gold From Monsters (Based on Character Level)
  `,Infinity:`
  50% Chance To Cast Level 20 Chain Lightning When You Kill An Enemy
  Level 12 Conviction Aura When Equipped
  +35% Faster Run/Walk
  +255-325% Enhanced Damage (varies)
  -(45-55)% To Enemy Lightning Resistance (varies)
  40% Chance of Crushing Blow
  Prevent Monster Heal
  0.5-49.5 To Vitality (Based on Character Level)
  30% Better Chance of Getting Magic Items
  Level 21 Cyclone Armor (30 Charges)
  `,Insight:`
  Level 12-17 Meditation Aura When Equipped (varies)
  +35% Faster Cast Rate
  +200-260% Enhanced Damage (varies)
  +9 To Minimum Damage
  180-250% Bonus to Attack Rating (varies)
  Adds 5-30 Fire Damage
  +75 Poison Damage Over 5 Seconds
  +1-6 To Critical Strike (varies)
  +5 To All Attributes
  +2 To Mana After Each Kill
  23% Better Chance of Getting Magic Items
  `,"Last Wish":`
  6% Chance To Cast Level 11 Fade When Struck
  10% Chance To Cast Level 18 Life Tap On Striking
  20% Chance To Cast Level 20 Charged Bolt On Attack
  Level 17 Might Aura When Equipped
  +330-375% Enhanced Damage (varies)
  Ignore Target's Defense
  60-70% Chance of Crushing Blow (varies)
  Prevent Monster Heal
  Hit Blinds Target
  +(0.5 per character level) 0.5-49.5% Chance of Getting Magic Items (Based on Character Level) 
  `,Lawbringer:`
  20% Chance To Cast Level 15 Decrepify On Striking
  Level 16-18 Sanctuary Aura When Equipped (varies)
  -50% Target Defense
  Adds 150-210 Fire Damage
  Adds 130-180 Cold Damage
  7% Life Stolen Per Hit
  Slain Monsters Rest In Peace
  +200-250 Defense Vs. Missile (varies)
  +10 To Dexterity
  75% Extra Gold From Monsters
  `,Oath:`
  30% Chance To Cast Level 20 Bone Spirit On Striking
  Indestructible
  +50% Increased Attack Speed
  +210-340% Enhanced Damage (varies)
  +75% Damage To Demons
  +100 To Attack Rating Against Demons
  Prevent Monster Heal
  +10 To Energy
  +10-15 Magic Absorb (varies)
  Level 16 Heart Of Wolverine (20 Charges)
  Level 17 Iron Golem (14 Charges)
  `,Obedience:`
  30% Chance To Cast Level 21 Enchant When You Kill An Enemy
  40% Faster Hit Recovery
  +370% Enhanced Damage
  -25% Target Defense
  Adds 3-14 Cold Damage 3 Second Duration (Normal)
  -25% To Enemy Fire Resistance
  40% Chance of Crushing Blow
  +200-300 Defense (varies)
  +10 To Strength
  +10 To Dexterity
  All Resistances +20-30 (varies)
  Requirements -20%
  `,Phoenix:`
  #### Weapons
  100% Chance To Cast level 40 Blaze When You Level-up
  40% Chance To Cast Level 22 Firestorm On Striking
  Level 10-15 Redemption Aura When Equipped (varies)
  +350-400% Enhanced Damage (varies)
  Ignores Target's Defense
  14% Mana Stolen Per Hit
  -28% To Enemy Fire Resistance
  20% Deadly Strike
  +350-400 Defense Vs. Missile (varies)
  +15-21 Fire Absorb (varies)

  #### Shields
  100% Chance To Cast level 40 Blaze When You Level-up
  40% Chance To Cast Level 22 Firestorm On Striking
  Level 10-15 Redemption Aura When Equipped (varies)
  +350-400 Defense Vs. Missile (varies)
  +350-400% Enhanced Damage (varies)
  -28% To Enemy Fire Resistance
  +50 To Life
  +5% To Maximum Lightning Resist
  +10% To Maximum Fire Resist
  +15-21 Fire Absorb (varies)
  `,Pride:`
  25% Chance To Cast Level 17 Fire Wall When Struck
  Level 16-20 Concentration Aura When Equipped (varies)
  260-300% Bonus To Attack Rating (varies)
  +1-99% Damage To Demons (Based on Character Level)
  Adds 50-280 Lightning Damage
  20% Deadly Strike
  Hit Blinds Target
  Freezes Target +3
  +10 To Vitality
  Replenish Life +8
  1.875-185.625% Extra Gold From Monsters (Based on Character Level)
  `,Rift:`
  20% Chance To Cast Level 16 Tornado On Striking
  16% Chance To Cast Level 21 Frozen Orb On Attack
  20% Bonus To Attack Rating
  Adds 160-250 Magic Damage
  Adds 60-180 Fire Damage
  +5-10 To All Stats (varies)
  +10 To Dexterity
  38% Damage Taken Goes To Mana
  75% Extra Gold From Monsters
  Level 15 Iron Maiden (40 Charges)
  Requirements -20%
  `,Spirit:`
  #### Swords
  +2 To All Skills
  +25-35% Faster Cast Rate (varies)
  +55% Faster Hit Recovery
  Adds 1-50 Lightning Damage
  Adds 3-14 Cold Damage 3 Second Duration (Normal)
  +75 Poison Damage Over 5 Seconds
  7% Life Stolen Per Hit
  +250 Defense Vs. Missile
  +22 To Vitality
  +89-112 To Mana (varies)
  +3-8 Magic Absorb (varies)

  #### Shields
  +2 To All Skills
  +25-35% Faster Cast Rate (varies)
  +55% Faster Hit Recovery
  +250 Defense Vs. Missile
  +22 To Vitality
  +89-112 To Mana (varies)
  Cold Resist +35%
  Lightning Resist +35%
  Poison Resist +35%
  +3-8 Magic Absorb (varies)
  Attacker Takes Damage of 14
  `,"Voice of Reason":`
  15% Chance To Cast Level 13 Frozen Orb On Striking
  18% Chance To Cast Level 20 Ice Blast On Striking
  +50 To Attack Rating
  +220-350% Damage To Demons
  +355-375% Damage To Undead (varies)
  +50 To Attack Rating Against Undead
  Adds 100-220 Cold Damage
  -24% To Enemy Cold Resistance
  +10 To Dexterity
  Cannot Be Frozen
  75% Extra Gold From Monsters
  +1 To Light Radius
  `,Wrath:`
  30% Chance To Cast Level 1 Decrepify On Striking
  5% Chance To Cast Level 10 Life Tap On Striking
  +375% Damage To Demons
  +100 To Attack Rating Against Demons
  +250-300% Damage To Undead (varies)
  Adds 85-120 Magic Damage
  Adds 41-240 Lightning Damage
  20% Chance of Crushing Blow
  Prevent Monster Heal
  +10 To Energy
  Cannot Be Frozen
  `,Bone:`
  15% Chance To Cast level 10 Bone Armor When Struck
  15% Chance To Cast level 10 Bone Spear On Striking
  +2 To Necromancer Skill Levels
  +100-150 To Mana (varies)
  All Resistances +30
  Damage Reduced By 7
  `,Enlightenment:`
  5% Chance To Cast Level 15 Blaze When Struck
  5% Chance To Cast level 15 Fire Ball On Striking
  +2 To Sorceress Skill Levels
  +1 To Warmth
  +30% Enhanced Defense
  Fire Resist +30%
  Damage Reduced By 7
  `,Myth:`
  3% Chance To Cast Level 1 Howl When Struck
  10% Chance To Cast Level 1 Taunt On Striking
  +2 To Barbarian Skill Levels
  +30 Defense Vs. Missile
  Replenish Life +10
  Attacker Takes Damage of 14
  Requirements -15%
  `,Peace:`
  4% Chance To Cast Level 5 Slow Missiles When Struck
  2% Chance To Cast level 15 Valkyrie On Striking
  +2 To Amazon Skill Levels
  +20% Faster Hit Recovery
  +2 To Critical Strike
  Cold Resist +30%
  Attacker Takes Damage of 14
  `,Principle:`
  100% Chance To Cast Level 5 Holy Bolt On Striking
  +2 To Paladin Skill Levels
  15% Slower Stamina Drain
  +5% To Maximum Poison Resist
  Fire Resist +30%
  `,Rain:`
  5% Chance To Cast Level 15 Cyclone Armor When Struck
  5% Chance To Cast Level 15 Twister On Striking
  +2 To Druid Skills
  +100-150 To Mana (varies)
  Lightning Resist +30%
  Magic Damage Reduced By 7
  15% Damage Taken Goes to Mana
  `,Treachery:`
  5% Chance To Cast Level 15 Fade When Struck
  25% Chance To Cast level 15 Venom On Striking
  +2 To Assassin Skills
  +45% Increased Attack Speed
  +20% Faster Hit Recovery
  Cold Resist +30%
  50% Extra Gold From Monsters
  `,Plague:`
  20% Chance to Cast level 12 Lower Resist when struck
  25% Chance to Cast level 15 Poison Nova on striking
  Level 13-17 Cleansing Aura When Equipped (varies)
  +1-2 All Skills
  +20% Increased Attack Speed
  +220-320% Enhanced Damage (varies)
  -23% To Enemy Poison Resistance
  0.3% (0-29.7) Deadly Strike (Based on Character Level)
  +25% Chance of Open Wounds
  Freezes Target +3
  `,Pattern:`
  +30% Faster Block Rate
  +40-80% Enhanced Damage (varies)
  10% Bonus to Attack Rating
  Adds 17-62 Fire Damage
  Adds 1-50 Lightning Damage
  Adds 3-14 Cold Damage
  +75 Poison Damage Over 5 Seconds
  +6 to Strength
  +6 to Dexterity
  All Resistances +15
  `,"Unbending Will":`
  18% Chance to cast Level 18 Taunt on striking
  +3 To Combat Skills (Barbarian Only)
  +20-30% Increased Attack Speed (varies)
  +300-350% Enhanced Damage (varies)
  +9 To Maximum Damage
  +50 To Attack Rating
  +75% Damage to Undead
  +50 Attack Rating Against Undead
  8-10% Life Stolen Per Hit (varies)
  Prevent Monster Heal
  +10 To Strength
  +10 To Vitality
  Damage Reduced By 8
  +1 Light Radius
  Requirements -20%
  `,Wisdom:`
  +33% Piercing Attack
  +15-25% Bonus to Attack Rating (varies)
  4-8% Mana Stolen Per Hit (varies)
  +30% Enhanced Defense
  +10 Energy
  15% Slower Stamina Drain
  Cannot Be Frozen
  +5 Mana After Each Kill
  15% Damage Taken Goes to Mana
  `,Obsession:`
  Indestructible
  24% Chance to cast level 10 Weaken when struck
  +4 To All Skills
  +65% Faster Cast Rate
  +60% Faster Hit Recovery
  Knockback
  +10 To Vitality
  +10 To Energy
  Increase Maximum Life 15-25% (varies)
  Regenerate Mana 15-30% (varies)
  All Resistances +60-70 (varies)
  75% Extra Gold from Monsters
  30% Better Chance of Getting Magic Items
  `,"Flickering Flame":`
  Level 4-8 Resist Fire Aura When Equipped (varies)
  +3 To Fire Skills
  -10-15% to Enemy Fire Resistance (varies)
  +30% Enhanced Defense
  +30 Defense Vs. Missile
  +50-75 To Mana (varies)
  Half Freeze Duration
  +5% To Maximum Fire Resist
  Poison Length Reduced by 50%
  `,Mist:`
  Level 8-12 Concentration Aura When Equipped (varies)
  +3 To All Skills
  20% Increased Attack Speed
  +100% Piercing Attack
  +325-375% Enhanced Damage (varies)
  +9 To Maximum Damage
  20% Bonus to Attack Rating
  Adds 3-14 Cold Damage
  Freeze Target +3
  +24 Vitality
  All Resistances +40
  `,Bulwark:`
  +20% Faster Hit Recovery
  +4-6% Life stolen per hit
  +75-100% Enhanced Defense
  +10 to Vitality
  Increase Maximum Life 5%
  Replenish Life +30
  Damage Reduced by 7
  Physical Damage Received Reduced by 10-15%
  `,Cure:`
  Level 1 Cleansing Aura when Equipped
  +20% Faster Hit Recovery
  +75-100% Enhanced Defense
  +10 to Vitality
  Increase Maximum Life 5%
  Poison Resist +40-60%
  Poison Length Reduced by 50%
  `,Ground:`
  +20% Faster Hit Recovery
  +75-100% Enhanced Defense
  +10 to Vitality
  Increase Maximum Life 5%
  Lightning Resist +40-60%
  Lightning Absorb +10-15%
  `,Hearth:`
  +20% Faster Hit Recovery
  +75-100% Enhanced Defense
  +10 to Vitality
  Increase Maximum Life 5%
  Cold Resist +40-60%
  Cold Absorb +10-15%
  Cannot be Frozen
  `,Temper:`
  +20% Faster Hit Recovery
  +75-100% Enhanced Defense
  +10 to Vitality
  Increase Maximum Life 5%
  Fire Resist +40-60%
  Fire Absorb +10-15%
  `,Hustle:`
  #### Weapons
  5% Chance to cast level 1 Burst of Speed on striking
  Level 1 Fanaticism Aura
  +30% Increased Attack Speed
  +180-200% Enhanced Damage
  +75% Damage to Undead
  +50 to Attack Rating against Undead
  +10 to Dexterity

  #### Body Armors
  +65% Faster Run/Walk
  +40% Increased Attack Speed
  +20% Faster Hit Recovery
  +6 to Evade
  +10 to Dexterity
  50% Slower Stamina Drain
  +All Resistances +10
  `,Mosaic:`
  +50% chance for finishing moves to not consume charges
  +2 to Martial Arts (Assassin only)
  +20% Increased Attack Speed
  +200-250% Enhanced Damage
  +20% Bonus to Attack Rating
  7% Life Steal
  +8-15% to Cold Skill Damage
  +8-15% to Lightning Skill Damage
  +8-15% to Fire Skill Damage
  Prevent Monster Heal
  `,Metamorphosis:`
  100% Chance to cast level 1 Mark of the Wolf on striking
  100% Chance to cast level 1 Mark of the Bear on striking
  +5 to Shape Shifting Skills (Druid only)
  +25% Chance of Crushing Blow
  +50-80% Enhanced Defense
  +10 to Strength
  +10 to Vitality
  All Resistances +10
  Cannot be Frozen
  `},nu=We({name:"RunewordPopup",data(){return{isVisible:!1,position:{x:0,y:0},runeword:{title:"",ttypes:[],level:0}}},computed:{formatBody(){const e=this.runeword.title;let t=e&&tu[e]||"---";return t=t.trim(),t=t.replace(/\+?[0-9]+(-[0-9]+)?%?/g,'<span class="is-mod">$&</span>'),t=t.replace(/####\s(.*)\n+/g,'<h4 class="is-title">$1</h4>'),t=t.replace(/\n/g,"<br/>"),t}},methods:{unitPx(e){return`${e}px`},moveTo(e){let{x:n,y:s}=e.getBoundingClientRect();n=n+50,s=s+window.pageYOffset+e.offsetHeight+4;const o=this.$refs.root.offsetHeight,i=s+o,l=document.documentElement.clientHeight;let c=window.scrollY+l;c-=10,i>c&&(s=c-o,s=Math.max(window.scrollY+10,s)),this.position={x:n,y:s}},showRuneword(e,t){this.runeword=e,this.$nextTick(()=>{this.moveTo(t),this.isVisible=!0})},setVisible(e){this.isVisible=e}}}),su={class:"rw-RunewordPopup-title"},ru=["innerHTML"],ou=["innerHTML"];function iu(e,t,n,s,r,o){return F(),I("div",{ref:"root",class:"rw-RunewordPopup absolute",style:_t({visibility:e.isVisible?"visible":"hidden",left:e.unitPx(e.position.x),top:e.unitPx(e.position.y)}),onClick:t[0]||(t[0]=i=>e.setVisible(!1))},[S("h3",su,se(e.runeword.title),1),S("div",{class:"rw-RunewordPopup-type",innerHTML:e.runeword.ttypes},null,8,ru),S("div",{class:"rw-RunewordPopup-body",innerHTML:e.formatBody},null,8,ou)],4)}const lu=de(nu,[["render",iu]]),au=We({name:"RunewordsTable",components:{IconArrowDown:Nc,IconArrowUp:Pc,IconCancel:yo,IconCheckOn:jc,IconCheckOff:eu,RunewordPopup:lu},props:{items:{type:Array,required:!0}},data(){return{haveRunes:ce.state.haveRunes,pinnedRunewords:ce.state.pinned,sortKey:"level",sortAsc:!0,tableHeads:[{key:"title",label:"Runeword",textLeft:!0},{key:"rune0",label:"Rune"},{key:"rune1",label:"Rune"},{key:"rune2",label:"Rune"},{key:"rune3",label:"Rune"},{key:"rune4",label:"Rune"},{key:"rune5",label:"Rune"},{key:"ttypes",label:"Item Types"},{key:"level",label:"Level"}],envGameVersion:"2.6"}},computed:{runewordIsComplete(){const e=new Map;return this.items.forEach(t=>{e.set(t.title,t.runes.every(n=>this.haveRunes[n]))}),e},runesData(){const e=new Map;return An.forEach(t=>{e.set(t.name,t)}),e},itemsBySort(){const e=this.items.slice();let t;if(this.sortKey==="title")t=({title:r},{title:o})=>r===o?0:r>o?1:-1;else if(this.sortKey==="level")t=({level:r},{level:o})=>r===o?0:r>o?1:-1;else if(this.sortKey==="ttypes")t=({ttypes:r},{ttypes:o})=>r[0]===o[0]?0:r[0]>o[0]?1:-1;else if(/rune(\d)/.test(this.sortKey)){const r=parseInt(RegExp.$1);t=({runes:o},{runes:i})=>{const l=o[r],c=i[r];return l===c?0:l>c?1:-1}}t&&e.sort(t),!this.sortAsc&&e.reverse();const n=[...e.filter(r=>this.runewordIsComplete.get(r.title)),...e.filter(r=>!this.runewordIsComplete.get(r.title))];return[...n.filter(r=>this.pinnedRunewords.has(r.title)),...n.filter(r=>!this.pinnedRunewords.has(r.title))]},refPopup(){return this.$refs.popup}},methods:{cssActiveRune(e){return this.haveRunes[e]?"is-active":""},cssCompleteRuneword(e){return this.runewordIsComplete.get(e.title)?"is-complete":""},getTypeCellHtml(e){let t=e.ttypes.map(n=>{const s=n.replace(" ","&nbsp;");return hr[n].url?`<a href="${hr[n].url}" target="_blank">${s}</a>`:s}).join("&nbsp;/&nbsp;");return e.tinfos&&(t+=`<br><span class="rw-Table-tdTypeClass">${e.tinfos}</span>`),t},isSortKey(e){return e===this.sortKey},onEnterRuneword(e,t){e.target&&this.refPopup.showRuneword(t,e.target)},onLeaveRuneword(){this.refPopup.setVisible(!1)},onSortBy(e){this.sortAsc=this.sortKey===e?!this.sortAsc:!0,this.sortKey=e},onTogglePin(e){const t=ce.isPinned(e);ce.setPinned([e],!t),ce.saveState()},unpinAll(){const e=ce.getPinned();ce.setPinned(e,!1),ce.saveState()}}}),cu={class:"rw-Table w-full"},uu=["onClick"],fu={key:0,class:"rw-Table-thIcon"},du={key:1,class:"rw-Table-thIcon"},hu={key:0,class:"rw-Table-tr"},pu={class:"rw-Table-td",colspan:"9"},mu={class:"text-center mt-6 py-2 relative"},gu=S("span",{class:"text-md text-gold tracking-[.2em]"},"PINNED RUNEWORDS",-1),vu={key:1,class:"rw-Table-tr"},yu=S("td",{class:"rw-Table-td",colspan:"9"},[S("div",{class:"text-center text-md text-gold tracking-[.2em] mt-6 py-2"},"ALL RUNEWORDS")],-1),Tu=[yu],Cu={class:"rw-Table-td rw-Table-tdTitle p-0 text-left relative min-w-[10em]"},_u=["onMouseenter","onClick"],Su={key:0,class:"rw-Md-ladder",title:"Ladder Only"},Au=["onClick"],bu=["onClick"],Ru=["innerHTML"],wu={class:"rw-Table-td"};function Lu(e,t,n,s,r,o){const i=ue("runeword-popup"),l=ue("icon-arrow-down"),c=ue("icon-arrow-up"),f=ue("icon-cancel"),d=ue("icon-check-on"),m=ue("icon-check-off");return F(),I(ie,null,[N(i,{ref:"popup"},null,512),S("table",cu,[S("thead",null,[S("tr",null,[(F(!0),I(ie,null,It(e.tableHeads,p=>(F(),I("th",{key:p.key,class:Te(["rw-Table-th cursor-pointer",{"is-sortCol":e.isSortKey(p.key),"text-left":p.textLeft}]),onClick:R=>e.onSortBy(p.key)},[pt(se(p.label)+" ",1),e.isSortKey(p.key)&&e.sortAsc?(F(),I("span",fu,[N(l,{class:"ux-icon ux-icon--fw"})])):Ie("",!0),e.isSortKey(p.key)&&!e.sortAsc?(F(),I("span",du,[N(c,{class:"ux-icon ux-icon--fw"})])):Ie("",!0)],10,uu))),128))])]),S("tbody",null,[(F(!0),I(ie,null,It(e.itemsBySort,(p,R)=>{var B,O,ee,G,Y,V;return F(),I(ie,{key:R},[e.pinnedRunewords.size&&R===0?(F(),I("tr",hu,[S("td",pu,[S("div",mu,[gu,S("a",{class:"rw-Runes-clear absolute right-0 top-1",href:"#",onClick:t[0]||(t[0]=gs((...$)=>e.unpinAll&&e.unpinAll(...$),["prevent"]))},[N(f,{class:"ux-icon ux-icon--fw rw-Runes-clearIcon text-[#da0000] mr-1"}),pt("unpin all ")])])])])):Ie("",!0),e.pinnedRunewords.size&&R===e.pinnedRunewords.size?(F(),I("tr",vu,Tu)):Ie("",!0),S("tr",{class:Te(["rw-Table-tr",e.cssCompleteRuneword(p)]),style:_t({display:p.filterMatch?"":"none"})},[S("td",Cu,[S("span",{class:"rw-Table-tdTitleSpan cursor-pointer",onMouseenter:$=>e.onEnterRuneword($,p),onMouseleave:t[1]||(t[1]=$=>e.onLeaveRuneword()),onClick:$=>e.onEnterRuneword($,p)},se(p.title),41,_u),p.ladder?(F(),I("span",Su,"L")):Ie("",!0),p.version?(F(),I("span",{key:1,class:Te(["rw-Table-tdTitlePatch",{"is-new":p.version===e.envGameVersion}]),title:"Patch version"},se(p.version),3)):Ie("",!0),e.pinnedRunewords.has(p.title)?(F(),I("div",{key:2,class:"rw-Table-pin is-pinned",onClick:$=>e.onTogglePin(p.title)},[N(d,{class:"rw-Table-pinIcon"})],8,Au)):(F(),I("div",{key:3,class:"rw-Table-pin",onClick:$=>e.onTogglePin(p.title)},[N(m,{class:"rw-Table-pinIcon"})],8,bu))]),S("td",{class:Te(["rw-Table-td is-rune",e.cssActiveRune(p.runes[0])])},se((B=e.runesData.get(p.runes[0]))==null?void 0:B.fname),3),S("td",{class:Te(["rw-Table-td is-rune",e.cssActiveRune(p.runes[1])])},se((O=e.runesData.get(p.runes[1]))==null?void 0:O.fname),3),S("td",{class:Te(["rw-Table-td is-rune",e.cssActiveRune(p.runes[2])])},se((ee=e.runesData.get(p.runes[2]))==null?void 0:ee.fname),3),S("td",{class:Te(["rw-Table-td is-rune",e.cssActiveRune(p.runes[3])])},se((G=e.runesData.get(p.runes[3]))==null?void 0:G.fname),3),S("td",{class:Te(["rw-Table-td is-rune",e.cssActiveRune(p.runes[4])])},se((Y=e.runesData.get(p.runes[4]))==null?void 0:Y.fname),3),S("td",{class:Te(["rw-Table-td is-rune",e.cssActiveRune(p.runes[5])])},se((V=e.runesData.get(p.runes[5]))==null?void 0:V.fname),3),S("td",{class:"rw-Table-td rw-Table-tdType min-w-[10em]",innerHTML:e.getTypeCellHtml(p)},null,8,Ru),S("td",wu,se(p.level),1)],6)],64)}),128))])])],64)}const Du=de(au,[["render",Lu]]),Eu=We({name:"Runewords",components:{RunewordsTable:Du},data(){return{isHelpVisible:!1,runewordsList:[],searchText:"",version:"LOD"}},computed:{VerList(){let e=Object.keys(Pn);return e.push("ALL"),e},Vers(){return Pn[this.version]}},created(){this.runewordsList=Mc.slice(),this.updateFilter(this.searchText,this.version)},methods:{onSearchInput(){this.updateFilter(this.searchText,this.version)},updateFilter(e,t){const n=Pn[t]||[],s=e.toLowerCase(),r=o=>{const i=o.title.toLowerCase().includes(s),l=o.ttypes.some(f=>f.toLowerCase().includes(s)),c=n.includes(o.version||"");return(t=="ALL"||c)&&(s===""||i||l)};this.runewordsList.forEach(o=>{o.filterMatch=r(o)})}}}),Mu={class:"rw-Search flex items-center mb-8"},xu=S("label",{class:"text-gold whitespace-nowrap mr-4"},se("Search"),-1),ku=S("span",{class:"mr-4"},null,-1),Fu=S("label",{class:"text-gold whitespace-nowrap"},se("Version"),-1),Iu=["value"];function Ou(e,t,n,s,r,o){const i=ue("runewords-table");return F(),I("div",null,[S("div",Mu,[xu,Ps(S("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>e.searchText=l),type:"text",class:"rw-Search-input",onInput:t[1]||(t[1]=(...l)=>e.onSearchInput&&e.onSearchInput(...l))},null,544),[[Jl,e.searchText]]),ku,Fu,Ps(S("select",{"onUpdate:modelValue":t[2]||(t[2]=l=>e.version=l),class:"rw-Search-select",onChange:t[3]||(t[3]=(...l)=>e.onSearchInput&&e.onSearchInput(...l))},[(F(!0),I(ie,null,It(e.VerList,l=>(F(),I("option",{key:l,value:l},se(l),9,Iu))),128))],544),[[Yl,e.version]])]),S("div",null,[N(i,{items:e.runewordsList},null,8,["items"])])])}const Pu=de(Eu,[["render",Ou]]),Hu=We({name:"App",components:{AppHeader:qa,AppFooter:lc,Runes:Ec,Runewords:Pu},computed:{useLayoutHeader(){return!0}}}),Bu={class:"rw-Layout-rowContainer rw-Main py-4 flex mb-24"},$u={class:"mr-16"},Vu={class:"overflow-auto flex-1"};function Wu(e,t,n,s,r,o){const i=ue("app-header"),l=ue("runes"),c=ue("runewords"),f=ue("app-footer");return F(),I(ie,null,[e.useLayoutHeader?(F(),ho(i,{key:0})):Ie("",!0),S("main",Bu,[S("div",$u,[N(l)]),S("div",Vu,[N(c)])]),N(f)],64)}const Nu=de(Hu,[["render",Wu]]),Ku=()=>{ce.initialize(),ce.loadState()};Ku();ta(Nu).mount("#app");
