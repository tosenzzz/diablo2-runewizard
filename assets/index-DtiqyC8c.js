(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Qn(e,t){const n=new Set(e.split(","));return s=>n.has(s)}const J={},gt=[],be=()=>{},Ro=()=>!1,cn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),es=e=>e.startsWith("onUpdate:"),ie=Object.assign,ts=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},_o=Object.prototype.hasOwnProperty,V=(e,t)=>_o.call(e,t),L=Array.isArray,vt=e=>Ot(e)==="[object Map]",un=e=>Ot(e)==="[object Set]",bs=e=>Ot(e)==="[object Date]",k=e=>typeof e=="function",le=e=>typeof e=="string",We=e=>typeof e=="symbol",U=e=>e!==null&&typeof e=="object",mr=e=>(U(e)||k(e))&&k(e.then)&&k(e.catch),gr=Object.prototype.toString,Ot=e=>gr.call(e),bo=e=>Ot(e).slice(8,-1),vr=e=>Ot(e)==="[object Object]",ns=e=>le(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Lt=Qn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},wo=/-(\w)/g,Oe=fn(e=>e.replace(wo,(t,n)=>n?n.toUpperCase():"")),Do=/\B([A-Z])/g,St=fn(e=>e.replace(Do,"-$1").toLowerCase()),dn=fn(e=>e.charAt(0).toUpperCase()+e.slice(1)),bn=fn(e=>e?`on${dn(e)}`:""),ht=(e,t)=>!Object.is(e,t),jt=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},yr=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},tn=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Lo=e=>{const t=le(e)?Number(e):NaN;return isNaN(t)?e:t};let ws;const Tr=()=>ws||(ws=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function At(e){if(L(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=le(s)?ko(s):At(s);if(r)for(const o in r)t[o]=r[o]}return t}else if(le(e)||U(e))return e}const Mo=/;(?![^(]*\))/g,Eo=/:([^]+)/,xo=/\/\*[^]*?\*\//g;function ko(e){const t={};return e.replace(xo,"").split(Mo).forEach(n=>{if(n){const s=n.split(Eo);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Te(e){let t="";if(le(e))t=e;else if(L(e))for(let n=0;n<e.length;n++){const s=Te(e[n]);s&&(t+=s+" ")}else if(U(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ho="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fo=Qn(Ho);function Cr(e){return!!e||e===""}function Io(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=hn(e[s],t[s]);return n}function hn(e,t){if(e===t)return!0;let n=bs(e),s=bs(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=We(e),s=We(t),n||s)return e===t;if(n=L(e),s=L(t),n||s)return n&&s?Io(e,t):!1;if(n=U(e),s=U(t),n||s){if(!n||!s)return!1;const r=Object.keys(e).length,o=Object.keys(t).length;if(r!==o)return!1;for(const i in e){const l=e.hasOwnProperty(i),c=t.hasOwnProperty(i);if(l&&!c||!l&&c||!hn(e[i],t[i]))return!1}}return String(e)===String(t)}function Bo(e,t){return e.findIndex(n=>hn(n,t))}const ee=e=>le(e)?e:e==null?"":L(e)||U(e)&&(e.toString===gr||!k(e.toString))?JSON.stringify(e,Sr,2):String(e),Sr=(e,t)=>t&&t.__v_isRef?Sr(e,t.value):vt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],o)=>(n[wn(s,o)+" =>"]=r,n),{})}:un(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>wn(n))}:We(t)?wn(t):U(t)&&!L(t)&&!vr(t)?String(t):t,wn=(e,t="")=>{var n;return We(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Me;class Oo{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Me,!t&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Me;try{return Me=this,t()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Po(e,t=Me){t&&t.active&&t.effects.push(e)}function $o(){return Me}let ft;class ss{constructor(t,n,s,r){this.fn=t,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Po(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Qe();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Wo(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),et()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Ye,n=ft;try{return Ye=!0,ft=this,this._runnings++,Ds(this),this.fn()}finally{Ls(this),this._runnings--,ft=n,Ye=t}}stop(){this.active&&(Ds(this),Ls(this),this.onStop&&this.onStop(),this.active=!1)}}function Wo(e){return e.value}function Ds(e){e._trackId++,e._depsLength=0}function Ls(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Ar(e.deps[t],e);e.deps.length=e._depsLength}}function Ar(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let Ye=!0,Pn=0;const Rr=[];function Qe(){Rr.push(Ye),Ye=!1}function et(){const e=Rr.pop();Ye=e===void 0?!0:e}function rs(){Pn++}function os(){for(Pn--;!Pn&&$n.length;)$n.shift()()}function _r(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const s=e.deps[e._depsLength];s!==t?(s&&Ar(s,e),e.deps[e._depsLength++]=t):e._depsLength++}}const $n=[];function br(e,t,n){rs();for(const s of e.keys()){let r;s._dirtyLevel<t&&(r??(r=e.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=t),s._shouldSchedule&&(r??(r=e.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&$n.push(s.scheduler)))}os()}const wr=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Wn=new WeakMap,dt=Symbol(""),Vn=Symbol("");function Ce(e,t,n){if(Ye&&ft){let s=Wn.get(e);s||Wn.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=wr(()=>s.delete(n))),_r(ft,r)}}function $e(e,t,n,s,r,o){const i=Wn.get(e);if(!i)return;let l=[];if(t==="clear")l=[...i.values()];else if(n==="length"&&L(e)){const c=Number(s);i.forEach((f,d)=>{(d==="length"||!We(d)&&d>=c)&&l.push(f)})}else switch(n!==void 0&&l.push(i.get(n)),t){case"add":L(e)?ns(n)&&l.push(i.get("length")):(l.push(i.get(dt)),vt(e)&&l.push(i.get(Vn)));break;case"delete":L(e)||(l.push(i.get(dt)),vt(e)&&l.push(i.get(Vn)));break;case"set":vt(e)&&l.push(i.get(dt));break}rs();for(const c of l)c&&br(c,4);os()}const Vo=Qn("__proto__,__v_isRef,__isVue"),Dr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(We)),Ms=No();function No(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=q(this);for(let o=0,i=this.length;o<i;o++)Ce(s,"get",o+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(q)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Qe(),rs();const s=q(this)[t].apply(this,n);return os(),et(),s}}),e}function qo(e){We(e)||(e=String(e));const t=q(this);return Ce(t,"has",e),t.hasOwnProperty(e)}class Lr{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){const r=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw")return s===(r?o?ni:kr:o?xr:Er).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const i=L(t);if(!r){if(i&&V(Ms,n))return Reflect.get(Ms,n,s);if(n==="hasOwnProperty")return qo}const l=Reflect.get(t,n,s);return(We(n)?Dr.has(n):Vo(n))||(r||Ce(t,"get",n),o)?l:Re(l)?i&&ns(n)?l:l.value:U(l)?r?Hr(l):mn(l):l}}class Mr extends Lr{constructor(t=!1){super(!1,t)}set(t,n,s,r){let o=t[n];if(!this._isShallow){const c=nn(o);if(!Nn(s)&&!nn(s)&&(o=q(o),s=q(s)),!L(t)&&Re(o)&&!Re(s))return c?!1:(o.value=s,!0)}const i=L(t)&&ns(n)?Number(n)<t.length:V(t,n),l=Reflect.set(t,n,s,r);return t===q(r)&&(i?ht(s,o)&&$e(t,"set",n,s):$e(t,"add",n,s)),l}deleteProperty(t,n){const s=V(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&$e(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!We(n)||!Dr.has(n))&&Ce(t,"has",n),s}ownKeys(t){return Ce(t,"iterate",L(t)?"length":dt),Reflect.ownKeys(t)}}class Ko extends Lr{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Uo=new Mr,Go=new Ko,zo=new Mr(!0);const is=e=>e,pn=e=>Reflect.getPrototypeOf(e);function Vt(e,t,n=!1,s=!1){e=e.__v_raw;const r=q(e),o=q(t);n||(ht(t,o)&&Ce(r,"get",t),Ce(r,"get",o));const{has:i}=pn(r),l=s?is:n?us:cs;if(i.call(r,t))return l(e.get(t));if(i.call(r,o))return l(e.get(o));e!==r&&e.get(t)}function Nt(e,t=!1){const n=this.__v_raw,s=q(n),r=q(e);return t||(ht(e,r)&&Ce(s,"has",e),Ce(s,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function qt(e,t=!1){return e=e.__v_raw,!t&&Ce(q(e),"iterate",dt),Reflect.get(e,"size",e)}function Es(e){e=q(e);const t=q(this);return pn(t).has.call(t,e)||(t.add(e),$e(t,"add",e,e)),this}function xs(e,t){t=q(t);const n=q(this),{has:s,get:r}=pn(n);let o=s.call(n,e);o||(e=q(e),o=s.call(n,e));const i=r.call(n,e);return n.set(e,t),o?ht(t,i)&&$e(n,"set",e,t):$e(n,"add",e,t),this}function ks(e){const t=q(this),{has:n,get:s}=pn(t);let r=n.call(t,e);r||(e=q(e),r=n.call(t,e)),s&&s.call(t,e);const o=t.delete(e);return r&&$e(t,"delete",e,void 0),o}function Hs(){const e=q(this),t=e.size!==0,n=e.clear();return t&&$e(e,"clear",void 0,void 0),n}function Kt(e,t){return function(s,r){const o=this,i=o.__v_raw,l=q(i),c=t?is:e?us:cs;return!e&&Ce(l,"iterate",dt),i.forEach((f,d)=>s.call(r,c(f),c(d),o))}}function Ut(e,t,n){return function(...s){const r=this.__v_raw,o=q(r),i=vt(o),l=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,f=r[e](...s),d=n?is:t?us:cs;return!t&&Ce(o,"iterate",c?Vn:dt),{next(){const{value:m,done:p}=f.next();return p?{value:m,done:p}:{value:l?[d(m[0]),d(m[1])]:d(m),done:p}},[Symbol.iterator](){return this}}}}function qe(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function jo(){const e={get(o){return Vt(this,o)},get size(){return qt(this)},has:Nt,add:Es,set:xs,delete:ks,clear:Hs,forEach:Kt(!1,!1)},t={get(o){return Vt(this,o,!1,!0)},get size(){return qt(this)},has:Nt,add:Es,set:xs,delete:ks,clear:Hs,forEach:Kt(!1,!0)},n={get(o){return Vt(this,o,!0)},get size(){return qt(this,!0)},has(o){return Nt.call(this,o,!0)},add:qe("add"),set:qe("set"),delete:qe("delete"),clear:qe("clear"),forEach:Kt(!0,!1)},s={get(o){return Vt(this,o,!0,!0)},get size(){return qt(this,!0)},has(o){return Nt.call(this,o,!0)},add:qe("add"),set:qe("set"),delete:qe("delete"),clear:qe("clear"),forEach:Kt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=Ut(o,!1,!1),n[o]=Ut(o,!0,!1),t[o]=Ut(o,!1,!0),s[o]=Ut(o,!0,!0)}),[e,n,t,s]}const[Jo,Yo,Xo,Zo]=jo();function ls(e,t){const n=t?e?Zo:Xo:e?Yo:Jo;return(s,r,o)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(V(n,r)&&r in s?n:s,r,o)}const Qo={get:ls(!1,!1)},ei={get:ls(!1,!0)},ti={get:ls(!0,!1)};const Er=new WeakMap,xr=new WeakMap,kr=new WeakMap,ni=new WeakMap;function si(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ri(e){return e.__v_skip||!Object.isExtensible(e)?0:si(bo(e))}function mn(e){return nn(e)?e:as(e,!1,Uo,Qo,Er)}function oi(e){return as(e,!1,zo,ei,xr)}function Hr(e){return as(e,!0,Go,ti,kr)}function as(e,t,n,s,r){if(!U(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=r.get(e);if(o)return o;const i=ri(e);if(i===0)return e;const l=new Proxy(e,i===2?s:n);return r.set(e,l),l}function Mt(e){return nn(e)?Mt(e.__v_raw):!!(e&&e.__v_isReactive)}function nn(e){return!!(e&&e.__v_isReadonly)}function Nn(e){return!!(e&&e.__v_isShallow)}function Fr(e){return e?!!e.__v_raw:!1}function q(e){const t=e&&e.__v_raw;return t?q(t):e}function ii(e){return Object.isExtensible(e)&&yr(e,"__v_skip",!0),e}const cs=e=>U(e)?mn(e):e,us=e=>U(e)?Hr(e):e;class Ir{constructor(t,n,s,r){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ss(()=>t(this._value),()=>Dn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=q(this);return(!t._cacheable||t.effect.dirty)&&ht(t._value,t._value=t.effect.run())&&Dn(t,4),ai(t),t.effect._dirtyLevel>=2&&Dn(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function li(e,t,n=!1){let s,r;const o=k(e);return o?(s=e,r=be):(s=e.get,r=e.set),new Ir(s,r,o||!r,n)}function ai(e){var t;Ye&&ft&&(e=q(e),_r(ft,(t=e.dep)!=null?t:e.dep=wr(()=>e.dep=void 0,e instanceof Ir?e:void 0)))}function Dn(e,t=4,n){e=q(e);const s=e.dep;s&&br(s,t)}function Re(e){return!!(e&&e.__v_isRef===!0)}function ci(e){return Re(e)?e.value:e}const ui={get:(e,t,n)=>ci(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return Re(r)&&!Re(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Br(e){return Mt(e)?e:new Proxy(e,ui)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Xe(e,t,n,s){try{return s?e(...s):e()}catch(r){gn(r,t,n)}}function De(e,t,n,s){if(k(e)){const r=Xe(e,t,n,s);return r&&mr(r)&&r.catch(o=>{gn(o,t,n)}),r}if(L(e)){const r=[];for(let o=0;o<e.length;o++)r.push(De(e[o],t,n,s));return r}}function gn(e,t,n,s=!0){const r=t?t.vnode:null;if(t){let o=t.parent;const i=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const f=o.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,i,l)===!1)return}o=o.parent}const c=t.appContext.config.errorHandler;if(c){Qe(),Xe(c,null,10,[e,i,l]),et();return}}fi(e,n,r,s)}function fi(e,t,n,s=!0){console.error(e)}let Ht=!1,qn=!1;const pe=[];let Be=0;const yt=[];let Ge=null,lt=0;const Or=Promise.resolve();let fs=null;function Pr(e){const t=fs||Or;return e?t.then(this?e.bind(this):e):t}function di(e){let t=Be+1,n=pe.length;for(;t<n;){const s=t+n>>>1,r=pe[s],o=Ft(r);o<e||o===e&&r.pre?t=s+1:n=s}return t}function ds(e){(!pe.length||!pe.includes(e,Ht&&e.allowRecurse?Be+1:Be))&&(e.id==null?pe.push(e):pe.splice(di(e.id),0,e),$r())}function $r(){!Ht&&!qn&&(qn=!0,fs=Or.then(Vr))}function hi(e){const t=pe.indexOf(e);t>Be&&pe.splice(t,1)}function pi(e){L(e)?yt.push(...e):(!Ge||!Ge.includes(e,e.allowRecurse?lt+1:lt))&&yt.push(e),$r()}function Fs(e,t,n=Ht?Be+1:0){for(;n<pe.length;n++){const s=pe[n];if(s&&s.pre){if(e&&s.id!==e.uid)continue;pe.splice(n,1),n--,s()}}}function Wr(e){if(yt.length){const t=[...new Set(yt)].sort((n,s)=>Ft(n)-Ft(s));if(yt.length=0,Ge){Ge.push(...t);return}for(Ge=t,lt=0;lt<Ge.length;lt++)Ge[lt]();Ge=null,lt=0}}const Ft=e=>e.id==null?1/0:e.id,mi=(e,t)=>{const n=Ft(e)-Ft(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Vr(e){qn=!1,Ht=!0,pe.sort(mi);try{for(Be=0;Be<pe.length;Be++){const t=pe[Be];t&&t.active!==!1&&Xe(t,null,14)}}finally{Be=0,pe.length=0,Wr(),Ht=!1,fs=null,(pe.length||yt.length)&&Vr()}}function gi(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||J;let r=n;const o=t.startsWith("update:"),i=o&&t.slice(7);if(i&&i in s){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:m,trim:p}=s[d]||J;p&&(r=n.map(b=>le(b)?b.trim():b)),m&&(r=n.map(tn))}let l,c=s[l=bn(t)]||s[l=bn(Oe(t))];!c&&o&&(c=s[l=bn(St(t))]),c&&De(c,e,6,r);const f=s[l+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,De(f,e,6,r)}}function Nr(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const o=e.emits;let i={},l=!1;if(!k(e)){const c=f=>{const d=Nr(f,t,!0);d&&(l=!0,ie(i,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!o&&!l?(U(e)&&s.set(e,null),null):(L(o)?o.forEach(c=>i[c]=null):ie(i,o),U(e)&&s.set(e,i),i)}function vn(e,t){return!e||!cn(t)?!1:(t=t.slice(2).replace(/Once$/,""),V(e,t[0].toLowerCase()+t.slice(1))||V(e,St(t))||V(e,t))}let ve=null,qr=null;function sn(e){const t=ve;return ve=e,qr=e&&e.type.__scopeId||null,t}function Kr(e,t=ve,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&Gs(-1);const o=sn(t);let i;try{i=e(...r)}finally{sn(o),s._d&&Gs(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function Ln(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[o],slots:i,attrs:l,emit:c,render:f,renderCache:d,props:m,data:p,setupState:b,ctx:P,inheritAttrs:I}=e,te=sn(e);let G,Y;try{if(n.shapeFlag&4){const $=r||s,ne=$;G=Ie(f.call(ne,$,d,m,b,p,P)),Y=l}else{const $=t;G=Ie($.length>1?$(m,{attrs:l,slots:i,emit:c}):$(m,null)),Y=t.props?l:vi(l)}}catch($){kt.length=0,gn($,e,1),G=N(we)}let W=G;if(Y&&I!==!1){const $=Object.keys(Y),{shapeFlag:ne}=W;$.length&&ne&7&&(o&&$.some(es)&&(Y=yi(Y,o)),W=Ze(W,Y,!1,!0))}return n.dirs&&(W=Ze(W,null,!1,!0),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&(W.transition=n.transition),G=W,sn(te),G}const vi=e=>{let t;for(const n in e)(n==="class"||n==="style"||cn(n))&&((t||(t={}))[n]=e[n]);return t},yi=(e,t)=>{const n={};for(const s in e)(!es(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Ti(e,t,n){const{props:s,children:r,component:o}=e,{props:i,children:l,patchFlag:c}=t,f=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Is(s,i,f):!!i;if(c&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const p=d[m];if(i[p]!==s[p]&&!vn(f,p))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===i?!1:s?i?Is(s,i,f):!0:!!i;return!1}function Is(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const o=s[r];if(t[o]!==e[o]&&!vn(n,o))return!0}return!1}function Ci({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Si="components";function ue(e,t){return Ri(Si,e,!0,t)||e}const Ai=Symbol.for("v-ndc");function Ri(e,t,n=!0,s=!1){const r=ve||fe;if(r){const o=r.type;{const l=Cl(o,!1);if(l&&(l===t||l===Oe(t)||l===dn(Oe(t))))return o}const i=Bs(r[e]||o[e],t)||Bs(r.appContext[e],t);return!i&&s?o:i}}function Bs(e,t){return e&&(e[t]||e[Oe(t)]||e[dn(Oe(t))])}const _i=e=>e.__isSuspense;function bi(e,t){t&&t.pendingBranch?L(e)?t.effects.push(...e):t.effects.push(e):pi(e)}const wi=Symbol.for("v-scx"),Di=()=>Yt(wi),Gt={};function Mn(e,t,n){return Ur(e,t,n)}function Ur(e,t,{immediate:n,deep:s,flush:r,once:o,onTrack:i,onTrigger:l}=J){if(t&&o){const B=t;t=(...me)=>{B(...me),ne()}}const c=fe,f=B=>s===!0?B:ut(B,s===!1?1:void 0);let d,m=!1,p=!1;if(Re(e)?(d=()=>e.value,m=Nn(e)):Mt(e)?(d=()=>f(e),m=!0):L(e)?(p=!0,m=e.some(B=>Mt(B)||Nn(B)),d=()=>e.map(B=>{if(Re(B))return B.value;if(Mt(B))return f(B);if(k(B))return Xe(B,c,2)})):k(e)?t?d=()=>Xe(e,c,2):d=()=>(b&&b(),De(e,c,3,[P])):d=be,t&&s){const B=d;d=()=>ut(B())}let b,P=B=>{b=W.onStop=()=>{Xe(B,c,4),b=W.onStop=void 0}},I;if(Sn)if(P=be,t?n&&De(t,c,3,[d(),p?[]:void 0,P]):d(),r==="sync"){const B=Di();I=B.__watcherHandles||(B.__watcherHandles=[])}else return be;let te=p?new Array(e.length).fill(Gt):Gt;const G=()=>{if(!(!W.active||!W.dirty))if(t){const B=W.run();(s||m||(p?B.some((me,H)=>ht(me,te[H])):ht(B,te)))&&(b&&b(),De(t,c,3,[B,te===Gt?void 0:p&&te[0]===Gt?[]:te,P]),te=B)}else W.run()};G.allowRecurse=!!t;let Y;r==="sync"?Y=G:r==="post"?Y=()=>ye(G,c&&c.suspense):(G.pre=!0,c&&(G.id=c.uid),Y=()=>ds(G));const W=new ss(d,be,Y),$=$o(),ne=()=>{W.stop(),$&&ts($.effects,W)};return t?n?G():te=W.run():r==="post"?ye(W.run.bind(W),c&&c.suspense):W.run(),I&&I.push(ne),ne}function Li(e,t,n){const s=this.proxy,r=le(e)?e.includes(".")?Gr(s,e):()=>s[e]:e.bind(s,s);let o;k(t)?o=t:(o=t.handler,n=t);const i=Pt(this),l=Ur(r,o.bind(s),n);return i(),l}function Gr(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function ut(e,t=1/0,n){if(t<=0||!U(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Re(e))ut(e.value,t,n);else if(L(e))for(let s=0;s<e.length;s++)ut(e[s],t,n);else if(un(e)||vt(e))e.forEach(s=>{ut(s,t,n)});else if(vr(e))for(const s in e)ut(e[s],t,n);return e}function En(e,t){if(ve===null)return e;const n=An(ve)||ve.proxy,s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[o,i,l,c=J]=t[r];o&&(k(o)&&(o={mounted:o,updated:o}),o.deep&&ut(i),s.push({dir:o,instance:n,value:i,oldValue:void 0,arg:l,modifiers:c}))}return e}function st(e,t,n,s){const r=e.dirs,o=t&&t.dirs;for(let i=0;i<r.length;i++){const l=r[i];o&&(l.oldValue=o[i].value);let c=l.dir[s];c&&(Qe(),De(c,n,8,[e.el,l,e,t]),et())}}const ze=Symbol("_leaveCb"),zt=Symbol("_enterCb");function Mi(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Xr(()=>{e.isMounted=!0}),Zr(()=>{e.isUnmounting=!0}),e}const _e=[Function,Array],zr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:_e,onEnter:_e,onAfterEnter:_e,onEnterCancelled:_e,onBeforeLeave:_e,onLeave:_e,onAfterLeave:_e,onLeaveCancelled:_e,onBeforeAppear:_e,onAppear:_e,onAfterAppear:_e,onAppearCancelled:_e},Ei={name:"BaseTransition",props:zr,setup(e,{slots:t}){const n=ml(),s=Mi();return()=>{const r=t.default&&Jr(t.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const p of r)if(p.type!==we){o=p;break}}const i=q(e),{mode:l}=i;if(s.isLeaving)return xn(o);const c=Os(o);if(!c)return xn(o);const f=Kn(c,i,s,n);Un(c,f);const d=n.subTree,m=d&&Os(d);if(m&&m.type!==we&&!at(c,m)){const p=Kn(m,i,s,n);if(Un(m,p),l==="out-in"&&c.type!==we)return s.isLeaving=!0,p.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},xn(o);l==="in-out"&&c.type!==we&&(p.delayLeave=(b,P,I)=>{const te=jr(s,m);te[String(m.key)]=m,b[ze]=()=>{P(),b[ze]=void 0,delete f.delayedLeave},f.delayedLeave=I})}return o}}},xi=Ei;function jr(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Kn(e,t,n,s){const{appear:r,mode:o,persisted:i=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:m,onLeave:p,onAfterLeave:b,onLeaveCancelled:P,onBeforeAppear:I,onAppear:te,onAfterAppear:G,onAppearCancelled:Y}=t,W=String(e.key),$=jr(n,e),ne=(H,se)=>{H&&De(H,s,9,se)},B=(H,se)=>{const j=se[1];ne(H,se),L(H)?H.every(he=>he.length<=1)&&j():H.length<=1&&j()},me={mode:o,persisted:i,beforeEnter(H){let se=l;if(!n.isMounted)if(r)se=I||l;else return;H[ze]&&H[ze](!0);const j=$[W];j&&at(e,j)&&j.el[ze]&&j.el[ze](),ne(se,[H])},enter(H){let se=c,j=f,he=d;if(!n.isMounted)if(r)se=te||c,j=G||f,he=Y||d;else return;let w=!1;const Z=H[zt]=Se=>{w||(w=!0,Se?ne(he,[H]):ne(j,[H]),me.delayedLeave&&me.delayedLeave(),H[zt]=void 0)};se?B(se,[H,Z]):Z()},leave(H,se){const j=String(e.key);if(H[zt]&&H[zt](!0),n.isUnmounting)return se();ne(m,[H]);let he=!1;const w=H[ze]=Z=>{he||(he=!0,se(),Z?ne(P,[H]):ne(b,[H]),H[ze]=void 0,$[j]===e&&delete $[j])};$[j]=e,p?B(p,[H,w]):w()},clone(H){return Kn(H,t,n,s)}};return me}function xn(e){if(yn(e))return e=Ze(e),e.children=null,e}function Os(e){if(!yn(e))return e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&k(n.default))return n.default()}}function Un(e,t){e.shapeFlag&6&&e.component?Un(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Jr(e,t=!1,n){let s=[],r=0;for(let o=0;o<e.length;o++){let i=e[o];const l=n==null?i.key:String(n)+String(i.key!=null?i.key:o);i.type===oe?(i.patchFlag&128&&r++,s=s.concat(Jr(i.children,t,l))):(t||i.type!==we)&&s.push(l!=null?Ze(i,{key:l}):i)}if(r>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function Ve(e,t){return k(e)?ie({name:e.name},t,{setup:e}):e}const Jt=e=>!!e.type.__asyncLoader,yn=e=>e.type.__isKeepAlive;function ki(e,t){Yr(e,"a",t)}function Hi(e,t){Yr(e,"da",t)}function Yr(e,t,n=fe){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Tn(t,s,n),n){let r=n.parent;for(;r&&r.parent;)yn(r.parent.vnode)&&Fi(s,t,n,r),r=r.parent}}function Fi(e,t,n,s){const r=Tn(t,e,s,!0);Qr(()=>{ts(s[t],r)},n)}function Tn(e,t,n=fe,s=!1){if(n){const r=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;Qe();const l=Pt(n),c=De(t,n,e,i);return l(),et(),c});return s?r.unshift(o):r.push(o),o}}const Ne=e=>(t,n=fe)=>(!Sn||e==="sp")&&Tn(e,(...s)=>t(...s),n),Ii=Ne("bm"),Xr=Ne("m"),Bi=Ne("bu"),Oi=Ne("u"),Zr=Ne("bum"),Qr=Ne("um"),Pi=Ne("sp"),$i=Ne("rtg"),Wi=Ne("rtc");function Vi(e,t=fe){Tn("ec",e,t)}function Ct(e,t,n,s){let r;const o=n;if(L(e)||le(e)){r=new Array(e.length);for(let i=0,l=e.length;i<l;i++)r[i]=t(e[i],i,void 0,o)}else if(typeof e=="number"){r=new Array(e);for(let i=0;i<e;i++)r[i]=t(i+1,i,void 0,o)}else if(U(e))if(e[Symbol.iterator])r=Array.from(e,(i,l)=>t(i,l,void 0,o));else{const i=Object.keys(e);r=new Array(i.length);for(let l=0,c=i.length;l<c;l++){const f=i[l];r[l]=t(e[f],f,l,o)}}else r=[];return r}const Gn=e=>e?go(e)?An(e)||e.proxy:Gn(e.parent):null,Et=ie(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Gn(e.parent),$root:e=>Gn(e.root),$emit:e=>e.emit,$options:e=>hs(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,ds(e.update)}),$nextTick:e=>e.n||(e.n=Pr.bind(e.proxy)),$watch:e=>Li.bind(e)}),kn=(e,t)=>e!==J&&!e.__isScriptSetup&&V(e,t),Ni={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:o,accessCache:i,type:l,appContext:c}=e;let f;if(t[0]!=="$"){const b=i[t];if(b!==void 0)switch(b){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return o[t]}else{if(kn(s,t))return i[t]=1,s[t];if(r!==J&&V(r,t))return i[t]=2,r[t];if((f=e.propsOptions[0])&&V(f,t))return i[t]=3,o[t];if(n!==J&&V(n,t))return i[t]=4,n[t];zn&&(i[t]=0)}}const d=Et[t];let m,p;if(d)return t==="$attrs"&&Ce(e.attrs,"get",""),d(e);if((m=l.__cssModules)&&(m=m[t]))return m;if(n!==J&&V(n,t))return i[t]=4,n[t];if(p=c.config.globalProperties,V(p,t))return p[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:o}=e;return kn(r,t)?(r[t]=n,!0):s!==J&&V(s,t)?(s[t]=n,!0):V(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:o}},i){let l;return!!n[i]||e!==J&&V(e,i)||kn(t,i)||(l=o[0])&&V(l,i)||V(s,i)||V(Et,i)||V(r.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:V(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ps(e){return L(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let zn=!0;function qi(e){const t=hs(e),n=e.proxy,s=e.ctx;zn=!1,t.beforeCreate&&$s(t.beforeCreate,e,"bc");const{data:r,computed:o,methods:i,watch:l,provide:c,inject:f,created:d,beforeMount:m,mounted:p,beforeUpdate:b,updated:P,activated:I,deactivated:te,beforeDestroy:G,beforeUnmount:Y,destroyed:W,unmounted:$,render:ne,renderTracked:B,renderTriggered:me,errorCaptured:H,serverPrefetch:se,expose:j,inheritAttrs:he,components:w,directives:Z,filters:Se}=t;if(f&&Ki(f,s,null),i)for(const Q in i){const z=i[Q];k(z)&&(s[Q]=z.bind(n))}if(r){const Q=r.call(n,n);U(Q)&&(e.data=mn(Q))}if(zn=!0,o)for(const Q in o){const z=o[Q],tt=k(z)?z.bind(n,n):k(z.get)?z.get.bind(n,n):be,$t=!k(z)&&k(z.set)?z.set.bind(n):be,nt=Al({get:tt,set:$t});Object.defineProperty(s,Q,{enumerable:!0,configurable:!0,get:()=>nt.value,set:xe=>nt.value=xe})}if(l)for(const Q in l)eo(l[Q],s,n,Q);if(c){const Q=k(c)?c.call(n):c;Reflect.ownKeys(Q).forEach(z=>{Yi(z,Q[z])})}d&&$s(d,e,"c");function ae(Q,z){L(z)?z.forEach(tt=>Q(tt.bind(n))):z&&Q(z.bind(n))}if(ae(Ii,m),ae(Xr,p),ae(Bi,b),ae(Oi,P),ae(ki,I),ae(Hi,te),ae(Vi,H),ae(Wi,B),ae($i,me),ae(Zr,Y),ae(Qr,$),ae(Pi,se),L(j))if(j.length){const Q=e.exposed||(e.exposed={});j.forEach(z=>{Object.defineProperty(Q,z,{get:()=>n[z],set:tt=>n[z]=tt})})}else e.exposed||(e.exposed={});ne&&e.render===be&&(e.render=ne),he!=null&&(e.inheritAttrs=he),w&&(e.components=w),Z&&(e.directives=Z)}function Ki(e,t,n=be){L(e)&&(e=jn(e));for(const s in e){const r=e[s];let o;U(r)?"default"in r?o=Yt(r.from||s,r.default,!0):o=Yt(r.from||s):o=Yt(r),Re(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[s]=o}}function $s(e,t,n){De(L(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function eo(e,t,n,s){const r=s.includes(".")?Gr(n,s):()=>n[s];if(le(e)){const o=t[e];k(o)&&Mn(r,o)}else if(k(e))Mn(r,e.bind(n));else if(U(e))if(L(e))e.forEach(o=>eo(o,t,n,s));else{const o=k(e.handler)?e.handler.bind(n):t[e.handler];k(o)&&Mn(r,o,e)}}function hs(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,l=o.get(t);let c;return l?c=l:!r.length&&!n&&!s?c=t:(c={},r.length&&r.forEach(f=>rn(c,f,i,!0)),rn(c,t,i)),U(t)&&o.set(t,c),c}function rn(e,t,n,s=!1){const{mixins:r,extends:o}=t;o&&rn(e,o,n,!0),r&&r.forEach(i=>rn(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const l=Ui[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const Ui={data:Ws,props:Vs,emits:Vs,methods:Dt,computed:Dt,beforeCreate:ge,created:ge,beforeMount:ge,mounted:ge,beforeUpdate:ge,updated:ge,beforeDestroy:ge,beforeUnmount:ge,destroyed:ge,unmounted:ge,activated:ge,deactivated:ge,errorCaptured:ge,serverPrefetch:ge,components:Dt,directives:Dt,watch:zi,provide:Ws,inject:Gi};function Ws(e,t){return t?e?function(){return ie(k(e)?e.call(this,this):e,k(t)?t.call(this,this):t)}:t:e}function Gi(e,t){return Dt(jn(e),jn(t))}function jn(e){if(L(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ge(e,t){return e?[...new Set([].concat(e,t))]:t}function Dt(e,t){return e?ie(Object.create(null),e,t):t}function Vs(e,t){return e?L(e)&&L(t)?[...new Set([...e,...t])]:ie(Object.create(null),Ps(e),Ps(t??{})):t}function zi(e,t){if(!e)return t;if(!t)return e;const n=ie(Object.create(null),e);for(const s in t)n[s]=ge(e[s],t[s]);return n}function to(){return{app:null,config:{isNativeTag:Ro,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ji=0;function Ji(e,t){return function(s,r=null){k(s)||(s=ie({},s)),r!=null&&!U(r)&&(r=null);const o=to(),i=new WeakSet;let l=!1;const c=o.app={_uid:ji++,_component:s,_props:r,_container:null,_context:o,_instance:null,version:_l,get config(){return o.config},set config(f){},use(f,...d){return i.has(f)||(f&&k(f.install)?(i.add(f),f.install(c,...d)):k(f)&&(i.add(f),f(c,...d))),c},mixin(f){return o.mixins.includes(f)||o.mixins.push(f),c},component(f,d){return d?(o.components[f]=d,c):o.components[f]},directive(f,d){return d?(o.directives[f]=d,c):o.directives[f]},mount(f,d,m){if(!l){const p=N(s,r);return p.appContext=o,m===!0?m="svg":m===!1&&(m=void 0),d&&t?t(p,f):e(p,f,m),l=!0,c._container=f,f.__vue_app__=c,An(p.component)||p.component.proxy}},unmount(){l&&(e(null,c._container),delete c._container.__vue_app__)},provide(f,d){return o.provides[f]=d,c},runWithContext(f){const d=xt;xt=c;try{return f()}finally{xt=d}}};return c}}let xt=null;function Yi(e,t){if(fe){let n=fe.provides;const s=fe.parent&&fe.parent.provides;s===n&&(n=fe.provides=Object.create(s)),n[e]=t}}function Yt(e,t,n=!1){const s=fe||ve;if(s||xt){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:xt._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&k(t)?t.call(s&&s.proxy):t}}const no={},so=()=>Object.create(no),ro=e=>Object.getPrototypeOf(e)===no;function Xi(e,t,n,s=!1){const r={},o=so();e.propsDefaults=Object.create(null),oo(e,t,r,o);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);n?e.props=s?r:oi(r):e.type.props?e.props=r:e.props=o,e.attrs=o}function Zi(e,t,n,s){const{props:r,attrs:o,vnode:{patchFlag:i}}=e,l=q(r),[c]=e.propsOptions;let f=!1;if((s||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let p=d[m];if(vn(e.emitsOptions,p))continue;const b=t[p];if(c)if(V(o,p))b!==o[p]&&(o[p]=b,f=!0);else{const P=Oe(p);r[P]=Jn(c,l,P,b,e,!1)}else b!==o[p]&&(o[p]=b,f=!0)}}}else{oo(e,t,r,o)&&(f=!0);let d;for(const m in l)(!t||!V(t,m)&&((d=St(m))===m||!V(t,d)))&&(c?n&&(n[m]!==void 0||n[d]!==void 0)&&(r[m]=Jn(c,l,m,void 0,e,!0)):delete r[m]);if(o!==l)for(const m in o)(!t||!V(t,m))&&(delete o[m],f=!0)}f&&$e(e.attrs,"set","")}function oo(e,t,n,s){const[r,o]=e.propsOptions;let i=!1,l;if(t)for(let c in t){if(Lt(c))continue;const f=t[c];let d;r&&V(r,d=Oe(c))?!o||!o.includes(d)?n[d]=f:(l||(l={}))[d]=f:vn(e.emitsOptions,c)||(!(c in s)||f!==s[c])&&(s[c]=f,i=!0)}if(o){const c=q(n),f=l||J;for(let d=0;d<o.length;d++){const m=o[d];n[m]=Jn(r,c,m,f[m],e,!V(f,m))}}return i}function Jn(e,t,n,s,r,o){const i=e[n];if(i!=null){const l=V(i,"default");if(l&&s===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&k(c)){const{propsDefaults:f}=r;if(n in f)s=f[n];else{const d=Pt(r);s=f[n]=c.call(null,t),d()}}else s=c}i[0]&&(o&&!l?s=!1:i[1]&&(s===""||s===St(n))&&(s=!0))}return s}function io(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const o=e.props,i={},l=[];let c=!1;if(!k(e)){const d=m=>{c=!0;const[p,b]=io(m,t,!0);ie(i,p),b&&l.push(...b)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!o&&!c)return U(e)&&s.set(e,gt),gt;if(L(o))for(let d=0;d<o.length;d++){const m=Oe(o[d]);Ns(m)&&(i[m]=J)}else if(o)for(const d in o){const m=Oe(d);if(Ns(m)){const p=o[d],b=i[m]=L(p)||k(p)?{type:p}:ie({},p);if(b){const P=Us(Boolean,b.type),I=Us(String,b.type);b[0]=P>-1,b[1]=I<0||P<I,(P>-1||V(b,"default"))&&l.push(m)}}}const f=[i,l];return U(e)&&s.set(e,f),f}function Ns(e){return e[0]!=="$"&&!Lt(e)}function qs(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Ks(e,t){return qs(e)===qs(t)}function Us(e,t){return L(t)?t.findIndex(n=>Ks(n,e)):k(t)&&Ks(t,e)?0:-1}const lo=e=>e[0]==="_"||e==="$stable",ps=e=>L(e)?e.map(Ie):[Ie(e)],Qi=(e,t,n)=>{if(t._n)return t;const s=Kr((...r)=>ps(t(...r)),n);return s._c=!1,s},ao=(e,t,n)=>{const s=e._ctx;for(const r in e){if(lo(r))continue;const o=e[r];if(k(o))t[r]=Qi(r,o,s);else if(o!=null){const i=ps(o);t[r]=()=>i}}},co=(e,t)=>{const n=ps(t);e.slots.default=()=>n},el=(e,t)=>{const n=e.slots=so();if(e.vnode.shapeFlag&32){const s=t._;s?(ie(n,t),yr(n,"_",s,!0)):ao(t,n)}else t&&co(e,t)},tl=(e,t,n)=>{const{vnode:s,slots:r}=e;let o=!0,i=J;if(s.shapeFlag&32){const l=t._;l?n&&l===1?o=!1:(ie(r,t),!n&&l===1&&delete r._):(o=!t.$stable,ao(t,r)),i=t}else t&&(co(e,t),i={default:1});if(o)for(const l in r)!lo(l)&&i[l]==null&&delete r[l]};function Yn(e,t,n,s,r=!1){if(L(e)){e.forEach((p,b)=>Yn(p,t&&(L(t)?t[b]:t),n,s,r));return}if(Jt(s)&&!r)return;const o=s.shapeFlag&4?An(s.component)||s.component.proxy:s.el,i=r?null:o,{i:l,r:c}=e,f=t&&t.r,d=l.refs===J?l.refs={}:l.refs,m=l.setupState;if(f!=null&&f!==c&&(le(f)?(d[f]=null,V(m,f)&&(m[f]=null)):Re(f)&&(f.value=null)),k(c))Xe(c,l,12,[i,d]);else{const p=le(c),b=Re(c);if(p||b){const P=()=>{if(e.f){const I=p?V(m,c)?m[c]:d[c]:c.value;r?L(I)&&ts(I,o):L(I)?I.includes(o)||I.push(o):p?(d[c]=[o],V(m,c)&&(m[c]=d[c])):(c.value=[o],e.k&&(d[e.k]=c.value))}else p?(d[c]=i,V(m,c)&&(m[c]=i)):b&&(c.value=i,e.k&&(d[e.k]=i))};i?(P.id=-1,ye(P,n)):P()}}}const ye=bi;function nl(e){return sl(e)}function sl(e,t){const n=Tr();n.__VUE__=!0;const{insert:s,remove:r,patchProp:o,createElement:i,createText:l,createComment:c,setText:f,setElementText:d,parentNode:m,nextSibling:p,setScopeId:b=be,insertStaticContent:P}=e,I=(a,u,h,g=null,v=null,C=null,R=void 0,T=null,A=!!u.dynamicChildren)=>{if(a===u)return;a&&!at(a,u)&&(g=Wt(a),xe(a,v,C,!0),a=null),u.patchFlag===-2&&(A=!1,u.dynamicChildren=null);const{type:y,ref:_,shapeFlag:M}=u;switch(y){case Cn:te(a,u,h,g);break;case we:G(a,u,h,g);break;case Xt:a==null&&Y(u,h,g,R);break;case oe:w(a,u,h,g,v,C,R,T,A);break;default:M&1?ne(a,u,h,g,v,C,R,T,A):M&6?Z(a,u,h,g,v,C,R,T,A):(M&64||M&128)&&y.process(a,u,h,g,v,C,R,T,A,_t)}_!=null&&v&&Yn(_,a&&a.ref,C,u||a,!u)},te=(a,u,h,g)=>{if(a==null)s(u.el=l(u.children),h,g);else{const v=u.el=a.el;u.children!==a.children&&f(v,u.children)}},G=(a,u,h,g)=>{a==null?s(u.el=c(u.children||""),h,g):u.el=a.el},Y=(a,u,h,g)=>{[a.el,a.anchor]=P(a.children,u,h,g,a.el,a.anchor)},W=({el:a,anchor:u},h,g)=>{let v;for(;a&&a!==u;)v=p(a),s(a,h,g),a=v;s(u,h,g)},$=({el:a,anchor:u})=>{let h;for(;a&&a!==u;)h=p(a),r(a),a=h;r(u)},ne=(a,u,h,g,v,C,R,T,A)=>{u.type==="svg"?R="svg":u.type==="math"&&(R="mathml"),a==null?B(u,h,g,v,C,R,T,A):se(a,u,v,C,R,T,A)},B=(a,u,h,g,v,C,R,T)=>{let A,y;const{props:_,shapeFlag:M,transition:D,dirs:E}=a;if(A=a.el=i(a.type,C,_&&_.is,_),M&8?d(A,a.children):M&16&&H(a.children,A,null,g,v,Hn(a,C),R,T),E&&st(a,null,g,"created"),me(A,a,a.scopeId,R,g),_){for(const K in _)K!=="value"&&!Lt(K)&&o(A,K,null,_[K],C,a.children,g,v,Pe);"value"in _&&o(A,"value",null,_.value,C),(y=_.onVnodeBeforeMount)&&He(y,g,a)}E&&st(a,null,g,"beforeMount");const O=rl(v,D);O&&D.beforeEnter(A),s(A,u,h),((y=_&&_.onVnodeMounted)||O||E)&&ye(()=>{y&&He(y,g,a),O&&D.enter(A),E&&st(a,null,g,"mounted")},v)},me=(a,u,h,g,v)=>{if(h&&b(a,h),g)for(let C=0;C<g.length;C++)b(a,g[C]);if(v){let C=v.subTree;if(u===C){const R=v.vnode;me(a,R,R.scopeId,R.slotScopeIds,v.parent)}}},H=(a,u,h,g,v,C,R,T,A=0)=>{for(let y=A;y<a.length;y++){const _=a[y]=T?je(a[y]):Ie(a[y]);I(null,_,u,h,g,v,C,R,T)}},se=(a,u,h,g,v,C,R)=>{const T=u.el=a.el;let{patchFlag:A,dynamicChildren:y,dirs:_}=u;A|=a.patchFlag&16;const M=a.props||J,D=u.props||J;let E;if(h&&rt(h,!1),(E=D.onVnodeBeforeUpdate)&&He(E,h,u,a),_&&st(u,a,h,"beforeUpdate"),h&&rt(h,!0),y?j(a.dynamicChildren,y,T,h,g,Hn(u,v),C):R||z(a,u,T,null,h,g,Hn(u,v),C,!1),A>0){if(A&16)he(T,u,M,D,h,g,v);else if(A&2&&M.class!==D.class&&o(T,"class",null,D.class,v),A&4&&o(T,"style",M.style,D.style,v),A&8){const O=u.dynamicProps;for(let K=0;K<O.length;K++){const X=O[K],ce=M[X],Le=D[X];(Le!==ce||X==="value")&&o(T,X,ce,Le,v,a.children,h,g,Pe)}}A&1&&a.children!==u.children&&d(T,u.children)}else!R&&y==null&&he(T,u,M,D,h,g,v);((E=D.onVnodeUpdated)||_)&&ye(()=>{E&&He(E,h,u,a),_&&st(u,a,h,"updated")},g)},j=(a,u,h,g,v,C,R)=>{for(let T=0;T<u.length;T++){const A=a[T],y=u[T],_=A.el&&(A.type===oe||!at(A,y)||A.shapeFlag&70)?m(A.el):h;I(A,y,_,null,g,v,C,R,!0)}},he=(a,u,h,g,v,C,R)=>{if(h!==g){if(h!==J)for(const T in h)!Lt(T)&&!(T in g)&&o(a,T,h[T],null,R,u.children,v,C,Pe);for(const T in g){if(Lt(T))continue;const A=g[T],y=h[T];A!==y&&T!=="value"&&o(a,T,y,A,R,u.children,v,C,Pe)}"value"in g&&o(a,"value",h.value,g.value,R)}},w=(a,u,h,g,v,C,R,T,A)=>{const y=u.el=a?a.el:l(""),_=u.anchor=a?a.anchor:l("");let{patchFlag:M,dynamicChildren:D,slotScopeIds:E}=u;E&&(T=T?T.concat(E):E),a==null?(s(y,h,g),s(_,h,g),H(u.children||[],h,_,v,C,R,T,A)):M>0&&M&64&&D&&a.dynamicChildren?(j(a.dynamicChildren,D,h,v,C,R,T),(u.key!=null||v&&u===v.subTree)&&uo(a,u,!0)):z(a,u,h,_,v,C,R,T,A)},Z=(a,u,h,g,v,C,R,T,A)=>{u.slotScopeIds=T,a==null?u.shapeFlag&512?v.ctx.activate(u,h,g,R,A):Se(u,h,g,v,C,R,A):Rt(a,u,A)},Se=(a,u,h,g,v,C,R)=>{const T=a.component=pl(a,g,v);if(yn(a)&&(T.ctx.renderer=_t),gl(T),T.asyncDep){if(v&&v.registerDep(T,ae),!a.el){const A=T.subTree=N(we);G(null,A,u,h)}}else ae(T,a,u,h,v,C,R)},Rt=(a,u,h)=>{const g=u.component=a.component;if(Ti(a,u,h))if(g.asyncDep&&!g.asyncResolved){Q(g,u,h);return}else g.next=u,hi(g.update),g.effect.dirty=!0,g.update();else u.el=a.el,g.vnode=u},ae=(a,u,h,g,v,C,R)=>{const T=()=>{if(a.isMounted){let{next:_,bu:M,u:D,parent:E,vnode:O}=a;{const mt=fo(a);if(mt){_&&(_.el=O.el,Q(a,_,R)),mt.asyncDep.then(()=>{a.isUnmounted||T()});return}}let K=_,X;rt(a,!1),_?(_.el=O.el,Q(a,_,R)):_=O,M&&jt(M),(X=_.props&&_.props.onVnodeBeforeUpdate)&&He(X,E,_,O),rt(a,!0);const ce=Ln(a),Le=a.subTree;a.subTree=ce,I(Le,ce,m(Le.el),Wt(Le),a,v,C),_.el=ce.el,K===null&&Ci(a,ce.el),D&&ye(D,v),(X=_.props&&_.props.onVnodeUpdated)&&ye(()=>He(X,E,_,O),v)}else{let _;const{el:M,props:D}=u,{bm:E,m:O,parent:K}=a,X=Jt(u);if(rt(a,!1),E&&jt(E),!X&&(_=D&&D.onVnodeBeforeMount)&&He(_,K,u),rt(a,!0),M&&Ss){const ce=()=>{a.subTree=Ln(a),Ss(M,a.subTree,a,v,null)};X?u.type.__asyncLoader().then(()=>!a.isUnmounted&&ce()):ce()}else{const ce=a.subTree=Ln(a);I(null,ce,h,g,a,v,C),u.el=ce.el}if(O&&ye(O,v),!X&&(_=D&&D.onVnodeMounted)){const ce=u;ye(()=>He(_,K,ce),v)}(u.shapeFlag&256||K&&Jt(K.vnode)&&K.vnode.shapeFlag&256)&&a.a&&ye(a.a,v),a.isMounted=!0,u=h=g=null}},A=a.effect=new ss(T,be,()=>ds(y),a.scope),y=a.update=()=>{A.dirty&&A.run()};y.id=a.uid,rt(a,!0),y()},Q=(a,u,h)=>{u.component=a;const g=a.vnode.props;a.vnode=u,a.next=null,Zi(a,u.props,g,h),tl(a,u.children,h),Qe(),Fs(a),et()},z=(a,u,h,g,v,C,R,T,A=!1)=>{const y=a&&a.children,_=a?a.shapeFlag:0,M=u.children,{patchFlag:D,shapeFlag:E}=u;if(D>0){if(D&128){$t(y,M,h,g,v,C,R,T,A);return}else if(D&256){tt(y,M,h,g,v,C,R,T,A);return}}E&8?(_&16&&Pe(y,v,C),M!==y&&d(h,M)):_&16?E&16?$t(y,M,h,g,v,C,R,T,A):Pe(y,v,C,!0):(_&8&&d(h,""),E&16&&H(M,h,g,v,C,R,T,A))},tt=(a,u,h,g,v,C,R,T,A)=>{a=a||gt,u=u||gt;const y=a.length,_=u.length,M=Math.min(y,_);let D;for(D=0;D<M;D++){const E=u[D]=A?je(u[D]):Ie(u[D]);I(a[D],E,h,null,v,C,R,T,A)}y>_?Pe(a,v,C,!0,!1,M):H(u,h,g,v,C,R,T,A,M)},$t=(a,u,h,g,v,C,R,T,A)=>{let y=0;const _=u.length;let M=a.length-1,D=_-1;for(;y<=M&&y<=D;){const E=a[y],O=u[y]=A?je(u[y]):Ie(u[y]);if(at(E,O))I(E,O,h,null,v,C,R,T,A);else break;y++}for(;y<=M&&y<=D;){const E=a[M],O=u[D]=A?je(u[D]):Ie(u[D]);if(at(E,O))I(E,O,h,null,v,C,R,T,A);else break;M--,D--}if(y>M){if(y<=D){const E=D+1,O=E<_?u[E].el:g;for(;y<=D;)I(null,u[y]=A?je(u[y]):Ie(u[y]),h,O,v,C,R,T,A),y++}}else if(y>D)for(;y<=M;)xe(a[y],v,C,!0),y++;else{const E=y,O=y,K=new Map;for(y=O;y<=D;y++){const Ae=u[y]=A?je(u[y]):Ie(u[y]);Ae.key!=null&&K.set(Ae.key,y)}let X,ce=0;const Le=D-O+1;let mt=!1,As=0;const bt=new Array(Le);for(y=0;y<Le;y++)bt[y]=0;for(y=E;y<=M;y++){const Ae=a[y];if(ce>=Le){xe(Ae,v,C,!0);continue}let ke;if(Ae.key!=null)ke=K.get(Ae.key);else for(X=O;X<=D;X++)if(bt[X-O]===0&&at(Ae,u[X])){ke=X;break}ke===void 0?xe(Ae,v,C,!0):(bt[ke-O]=y+1,ke>=As?As=ke:mt=!0,I(Ae,u[ke],h,null,v,C,R,T,A),ce++)}const Rs=mt?ol(bt):gt;for(X=Rs.length-1,y=Le-1;y>=0;y--){const Ae=O+y,ke=u[Ae],_s=Ae+1<_?u[Ae+1].el:g;bt[y]===0?I(null,ke,h,_s,v,C,R,T,A):mt&&(X<0||y!==Rs[X]?nt(ke,h,_s,2):X--)}}},nt=(a,u,h,g,v=null)=>{const{el:C,type:R,transition:T,children:A,shapeFlag:y}=a;if(y&6){nt(a.component.subTree,u,h,g);return}if(y&128){a.suspense.move(u,h,g);return}if(y&64){R.move(a,u,h,_t);return}if(R===oe){s(C,u,h);for(let M=0;M<A.length;M++)nt(A[M],u,h,g);s(a.anchor,u,h);return}if(R===Xt){W(a,u,h);return}if(g!==2&&y&1&&T)if(g===0)T.beforeEnter(C),s(C,u,h),ye(()=>T.enter(C),v);else{const{leave:M,delayLeave:D,afterLeave:E}=T,O=()=>s(C,u,h),K=()=>{M(C,()=>{O(),E&&E()})};D?D(C,O,K):K()}else s(C,u,h)},xe=(a,u,h,g=!1,v=!1)=>{const{type:C,props:R,ref:T,children:A,dynamicChildren:y,shapeFlag:_,patchFlag:M,dirs:D}=a;if(T!=null&&Yn(T,null,h,a,!0),_&256){u.ctx.deactivate(a);return}const E=_&1&&D,O=!Jt(a);let K;if(O&&(K=R&&R.onVnodeBeforeUnmount)&&He(K,u,a),_&6)Ao(a.component,h,g);else{if(_&128){a.suspense.unmount(h,g);return}E&&st(a,null,u,"beforeUnmount"),_&64?a.type.remove(a,u,h,v,_t,g):y&&(C!==oe||M>0&&M&64)?Pe(y,u,h,!1,!0):(C===oe&&M&384||!v&&_&16)&&Pe(A,u,h),g&&ys(a)}(O&&(K=R&&R.onVnodeUnmounted)||E)&&ye(()=>{K&&He(K,u,a),E&&st(a,null,u,"unmounted")},h)},ys=a=>{const{type:u,el:h,anchor:g,transition:v}=a;if(u===oe){So(h,g);return}if(u===Xt){$(a);return}const C=()=>{r(h),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(a.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:T}=v,A=()=>R(h,C);T?T(a.el,C,A):A()}else C()},So=(a,u)=>{let h;for(;a!==u;)h=p(a),r(a),a=h;r(u)},Ao=(a,u,h)=>{const{bum:g,scope:v,update:C,subTree:R,um:T}=a;g&&jt(g),v.stop(),C&&(C.active=!1,xe(R,a,u,h)),T&&ye(T,u),ye(()=>{a.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&a.asyncDep&&!a.asyncResolved&&a.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Pe=(a,u,h,g=!1,v=!1,C=0)=>{for(let R=C;R<a.length;R++)xe(a[R],u,h,g,v)},Wt=a=>a.shapeFlag&6?Wt(a.component.subTree):a.shapeFlag&128?a.suspense.next():p(a.anchor||a.el);let _n=!1;const Ts=(a,u,h)=>{a==null?u._vnode&&xe(u._vnode,null,null,!0):I(u._vnode||null,a,u,null,null,null,h),_n||(_n=!0,Fs(),Wr(),_n=!1),u._vnode=a},_t={p:I,um:xe,m:nt,r:ys,mt:Se,mc:H,pc:z,pbc:j,n:Wt,o:e};let Cs,Ss;return{render:Ts,hydrate:Cs,createApp:Ji(Ts,Cs)}}function Hn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function rt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function rl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function uo(e,t,n=!1){const s=e.children,r=t.children;if(L(s)&&L(r))for(let o=0;o<s.length;o++){const i=s[o];let l=r[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[o]=je(r[o]),l.el=i.el),n||uo(i,l)),l.type===Cn&&(l.el=i.el)}}function ol(e){const t=e.slice(),n=[0];let s,r,o,i,l;const c=e.length;for(s=0;s<c;s++){const f=e[s];if(f!==0){if(r=n[n.length-1],e[r]<f){t[s]=r,n.push(s);continue}for(o=0,i=n.length-1;o<i;)l=o+i>>1,e[n[l]]<f?o=l+1:i=l;f<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}function fo(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:fo(t)}const il=e=>e.__isTeleport,oe=Symbol.for("v-fgt"),Cn=Symbol.for("v-txt"),we=Symbol.for("v-cmt"),Xt=Symbol.for("v-stc"),kt=[];let Ee=null;function x(e=!1){kt.push(Ee=e?null:[])}function ll(){kt.pop(),Ee=kt[kt.length-1]||null}let It=1;function Gs(e){It+=e}function ho(e){return e.dynamicChildren=It>0?Ee||gt:null,ll(),It>0&&Ee&&Ee.push(e),e}function F(e,t,n,s,r,o){return ho(S(e,t,n,s,r,o,!0))}function po(e,t,n,s,r){return ho(N(e,t,n,s,r,!0))}function Xn(e){return e?e.__v_isVNode===!0:!1}function at(e,t){return e.type===t.type&&e.key===t.key}const mo=({key:e})=>e??null,Zt=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?le(e)||Re(e)||k(e)?{i:ve,r:e,k:t,f:!!n}:e:null);function S(e,t=null,n=null,s=0,r=null,o=e===oe?0:1,i=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&mo(t),ref:t&&Zt(t),scopeId:qr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ve};return l?(ms(c,n),o&128&&e.normalize(c)):n&&(c.shapeFlag|=le(n)?8:16),It>0&&!i&&Ee&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&Ee.push(c),c}const N=al;function al(e,t=null,n=null,s=0,r=null,o=!1){if((!e||e===Ai)&&(e=we),Xn(e)){const l=Ze(e,t,!0);return n&&ms(l,n),It>0&&!o&&Ee&&(l.shapeFlag&6?Ee[Ee.indexOf(e)]=l:Ee.push(l)),l.patchFlag|=-2,l}if(Sl(e)&&(e=e.__vccOpts),t){t=cl(t);let{class:l,style:c}=t;l&&!le(l)&&(t.class=Te(l)),U(c)&&(Fr(c)&&!L(c)&&(c=ie({},c)),t.style=At(c))}const i=le(e)?1:_i(e)?128:il(e)?64:U(e)?4:k(e)?2:0;return S(e,t,n,s,r,i,o,!0)}function cl(e){return e?Fr(e)||ro(e)?ie({},e):e:null}function Ze(e,t,n=!1,s=!1){const{props:r,ref:o,patchFlag:i,children:l,transition:c}=e,f=t?fl(r||{},t):r,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&mo(f),ref:t&&t.ref?n&&o?L(o)?o.concat(Zt(t)):[o,Zt(t)]:Zt(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==oe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ze(e.ssContent),ssFallback:e.ssFallback&&Ze(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&(d.transition=c.clone(d)),d}function pt(e=" ",t=0){return N(Cn,null,e,t)}function ul(e,t){const n=N(Xt,null,e);return n.staticCount=t,n}function Fe(e="",t=!1){return t?(x(),po(we,null,e)):N(we,null,e)}function Ie(e){return e==null||typeof e=="boolean"?N(we):L(e)?N(oe,null,e.slice()):typeof e=="object"?je(e):N(Cn,null,String(e))}function je(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ze(e)}function ms(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(L(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),ms(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!ro(t)?t._ctx=ve:r===3&&ve&&(ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else k(t)?(t={default:t,_ctx:ve},n=32):(t=String(t),s&64?(n=16,t=[pt(t)]):n=8);e.children=t,e.shapeFlag|=n}function fl(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Te([t.class,s.class]));else if(r==="style")t.style=At([t.style,s.style]);else if(cn(r)){const o=t[r],i=s[r];i&&o!==i&&!(L(o)&&o.includes(i))&&(t[r]=o?[].concat(o,i):i)}else r!==""&&(t[r]=s[r])}return t}function He(e,t,n,s=null){De(e,t,7,[n,s])}const dl=to();let hl=0;function pl(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||dl,o={uid:hl++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Oo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:io(s,r),emitsOptions:Nr(s,r),emit:null,emitted:null,propsDefaults:J,inheritAttrs:s.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=gi.bind(null,o),e.ce&&e.ce(o),o}let fe=null;const ml=()=>fe||ve;let on,Zn;{const e=Tr(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),o=>{r.length>1?r.forEach(i=>i(o)):r[0](o)}};on=t("__VUE_INSTANCE_SETTERS__",n=>fe=n),Zn=t("__VUE_SSR_SETTERS__",n=>Sn=n)}const Pt=e=>{const t=fe;return on(e),e.scope.on(),()=>{e.scope.off(),on(t)}},zs=()=>{fe&&fe.scope.off(),on(null)};function go(e){return e.vnode.shapeFlag&4}let Sn=!1;function gl(e,t=!1){t&&Zn(t);const{props:n,children:s}=e.vnode,r=go(e);Xi(e,n,r,t),el(e,s);const o=r?vl(e,t):void 0;return t&&Zn(!1),o}function vl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ni);const{setup:s}=n;if(s){const r=e.setupContext=s.length>1?Tl(e):null,o=Pt(e);Qe();const i=Xe(s,e,0,[e.props,r]);if(et(),o(),mr(i)){if(i.then(zs,zs),t)return i.then(l=>{js(e,l,t)}).catch(l=>{gn(l,e,0)});e.asyncDep=i}else js(e,i,t)}else vo(e,t)}function js(e,t,n){k(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:U(t)&&(e.setupState=Br(t)),vo(e,n)}let Js;function vo(e,t,n){const s=e.type;if(!e.render){if(!t&&Js&&!s.render){const r=s.template||hs(e).template;if(r){const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:c}=s,f=ie(ie({isCustomElement:o,delimiters:l},i),c);s.render=Js(r,f)}}e.render=s.render||be}{const r=Pt(e);Qe();try{qi(e)}finally{et(),r()}}}const yl={get(e,t){return Ce(e,"get",""),e[t]}};function Tl(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,yl),slots:e.slots,emit:e.emit,expose:t}}function An(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Br(ii(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Et)return Et[n](e)},has(t,n){return n in t||n in Et}}))}function Cl(e,t=!0){return k(e)?e.displayName||e.name:e.name||t&&e.__name}function Sl(e){return k(e)&&"__vccOpts"in e}const Al=(e,t)=>li(e,t,Sn);function Rl(e,t,n){const s=arguments.length;return s===2?U(t)&&!L(t)?Xn(t)?N(e,null,[t]):N(e,t):N(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Xn(n)&&(n=[n]),N(e,t,n))}const _l="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const bl="http://www.w3.org/2000/svg",wl="http://www.w3.org/1998/Math/MathML",Je=typeof document<"u"?document:null,Ys=Je&&Je.createElement("template"),Dl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?Je.createElementNS(bl,e):t==="mathml"?Je.createElementNS(wl,e):Je.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Je.createTextNode(e),createComment:e=>Je.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Je.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,o){const i=n?n.previousSibling:t.lastChild;if(r&&(r===o||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{Ys.innerHTML=s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e;const l=Ys.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ke="transition",wt="animation",Bt=Symbol("_vtc"),gs=(e,{slots:t})=>Rl(xi,Ll(e),t);gs.displayName="Transition";const yo={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};gs.props=ie({},zr,yo);const ot=(e,t=[])=>{L(e)?e.forEach(n=>n(...t)):e&&e(...t)},Xs=e=>e?L(e)?e.some(t=>t.length>1):e.length>1:!1;function Ll(e){const t={};for(const w in e)w in yo||(t[w]=e[w]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:o=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=o,appearActiveClass:f=i,appearToClass:d=l,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:b=`${n}-leave-to`}=e,P=Ml(r),I=P&&P[0],te=P&&P[1],{onBeforeEnter:G,onEnter:Y,onEnterCancelled:W,onLeave:$,onLeaveCancelled:ne,onBeforeAppear:B=G,onAppear:me=Y,onAppearCancelled:H=W}=t,se=(w,Z,Se)=>{it(w,Z?d:l),it(w,Z?f:i),Se&&Se()},j=(w,Z)=>{w._isLeaving=!1,it(w,m),it(w,b),it(w,p),Z&&Z()},he=w=>(Z,Se)=>{const Rt=w?me:Y,ae=()=>se(Z,w,Se);ot(Rt,[Z,ae]),Zs(()=>{it(Z,w?c:o),Ue(Z,w?d:l),Xs(Rt)||Qs(Z,s,I,ae)})};return ie(t,{onBeforeEnter(w){ot(G,[w]),Ue(w,o),Ue(w,i)},onBeforeAppear(w){ot(B,[w]),Ue(w,c),Ue(w,f)},onEnter:he(!1),onAppear:he(!0),onLeave(w,Z){w._isLeaving=!0;const Se=()=>j(w,Z);Ue(w,m),Ue(w,p),kl(),Zs(()=>{w._isLeaving&&(it(w,m),Ue(w,b),Xs($)||Qs(w,s,te,Se))}),ot($,[w,Se])},onEnterCancelled(w){se(w,!1),ot(W,[w])},onAppearCancelled(w){se(w,!0),ot(H,[w])},onLeaveCancelled(w){j(w),ot(ne,[w])}})}function Ml(e){if(e==null)return null;if(U(e))return[Fn(e.enter),Fn(e.leave)];{const t=Fn(e);return[t,t]}}function Fn(e){return Lo(e)}function Ue(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Bt]||(e[Bt]=new Set)).add(t)}function it(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[Bt];n&&(n.delete(t),n.size||(e[Bt]=void 0))}function Zs(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let El=0;function Qs(e,t,n,s){const r=e._endId=++El,o=()=>{r===e._endId&&s()};if(n)return setTimeout(o,n);const{type:i,timeout:l,propCount:c}=xl(e,t);if(!i)return s();const f=i+"end";let d=0;const m=()=>{e.removeEventListener(f,p),o()},p=b=>{b.target===e&&++d>=c&&m()};setTimeout(()=>{d<c&&m()},l+1),e.addEventListener(f,p)}function xl(e,t){const n=window.getComputedStyle(e),s=P=>(n[P]||"").split(", "),r=s(`${Ke}Delay`),o=s(`${Ke}Duration`),i=er(r,o),l=s(`${wt}Delay`),c=s(`${wt}Duration`),f=er(l,c);let d=null,m=0,p=0;t===Ke?i>0&&(d=Ke,m=i,p=o.length):t===wt?f>0&&(d=wt,m=f,p=c.length):(m=Math.max(i,f),d=m>0?i>f?Ke:wt:null,p=d?d===Ke?o.length:c.length:0);const b=d===Ke&&/\b(transform|all)(,|$)/.test(s(`${Ke}Property`).toString());return{type:d,timeout:m,propCount:p,hasTransform:b}}function er(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>tr(n)+tr(e[s])))}function tr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function kl(){return document.body.offsetHeight}function Hl(e,t,n){const s=e[Bt];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const nr=Symbol("_vod"),Fl=Symbol("_vsh"),Il=Symbol(""),Bl=/(^|;)\s*display\s*:/;function Ol(e,t,n){const s=e.style,r=le(n);let o=!1;if(n&&!r){if(t)if(le(t))for(const i of t.split(";")){const l=i.slice(0,i.indexOf(":")).trim();n[l]==null&&Qt(s,l,"")}else for(const i in t)n[i]==null&&Qt(s,i,"");for(const i in n)i==="display"&&(o=!0),Qt(s,i,n[i])}else if(r){if(t!==n){const i=s[Il];i&&(n+=";"+i),s.cssText=n,o=Bl.test(n)}}else t&&e.removeAttribute("style");nr in e&&(e[nr]=o?s.display:"",e[Fl]&&(s.display="none"))}const sr=/\s*!important$/;function Qt(e,t,n){if(L(n))n.forEach(s=>Qt(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Pl(e,t);sr.test(n)?e.setProperty(St(s),n.replace(sr,""),"important"):e[s]=n}}const rr=["Webkit","Moz","ms"],In={};function Pl(e,t){const n=In[t];if(n)return n;let s=Oe(t);if(s!=="filter"&&s in e)return In[t]=s;s=dn(s);for(let r=0;r<rr.length;r++){const o=rr[r]+s;if(o in e)return In[t]=o}return t}const or="http://www.w3.org/1999/xlink";function $l(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(or,t.slice(6,t.length)):e.setAttributeNS(or,t,n);else{const o=Fo(t);n==null||o&&!Cr(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function Wl(e,t,n,s,r,o,i){if(t==="innerHTML"||t==="textContent"){s&&i(s,r,o),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const f=l==="OPTION"?e.getAttribute("value")||"":e.value,d=n??"";(f!==d||!("_value"in e))&&(e.value=d),n==null&&e.removeAttribute(t),e._value=n;return}let c=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=Cr(n):n==null&&f==="string"?(n="",c=!0):f==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function ct(e,t,n,s){e.addEventListener(t,n,s)}function Vl(e,t,n,s){e.removeEventListener(t,n,s)}const ir=Symbol("_vei");function Nl(e,t,n,s,r=null){const o=e[ir]||(e[ir]={}),i=o[t];if(s&&i)i.value=s;else{const[l,c]=ql(t);if(s){const f=o[t]=Gl(s,r);ct(e,l,f,c)}else i&&(Vl(e,l,i,c),o[t]=void 0)}}const lr=/(?:Once|Passive|Capture)$/;function ql(e){let t;if(lr.test(e)){t={};let s;for(;s=e.match(lr);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):St(e.slice(2)),t]}let Bn=0;const Kl=Promise.resolve(),Ul=()=>Bn||(Kl.then(()=>Bn=0),Bn=Date.now());function Gl(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;De(zl(s,n.value),t,5,[s])};return n.value=e,n.attached=Ul(),n}function zl(e,t){if(L(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const ar=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,jl=(e,t,n,s,r,o,i,l,c)=>{const f=r==="svg";t==="class"?Hl(e,s,f):t==="style"?Ol(e,n,s):cn(t)?es(t)||Nl(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Jl(e,t,s,f))?Wl(e,t,s,o,i,l,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),$l(e,t,s,f))};function Jl(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&ar(t)&&k(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ar(t)&&le(n)?!1:t in e}const ln=e=>{const t=e.props["onUpdate:modelValue"]||!1;return L(t)?n=>jt(t,n):t};function Yl(e){e.target.composing=!0}function cr(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Tt=Symbol("_assign"),Xl={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e[Tt]=ln(r);const o=s||r.props&&r.props.type==="number";ct(e,t?"change":"input",i=>{if(i.target.composing)return;let l=e.value;n&&(l=l.trim()),o&&(l=tn(l)),e[Tt](l)}),n&&ct(e,"change",()=>{e.value=e.value.trim()}),t||(ct(e,"compositionstart",Yl),ct(e,"compositionend",cr),ct(e,"change",cr))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:r}},o){if(e[Tt]=ln(o),e.composing)return;const i=(r||e.type==="number")&&!/^0\d/.test(e.value)?tn(e.value):e.value,l=t??"";i!==l&&(document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===l)||(e.value=l))}},ur={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const r=un(t);ct(e,"change",()=>{const o=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>n?tn(an(i)):an(i));e[Tt](e.multiple?r?new Set(o):o:o[0]),e._assigning=!0,Pr(()=>{e._assigning=!1})}),e[Tt]=ln(s)},mounted(e,{value:t,modifiers:{number:n}}){fr(e,t)},beforeUpdate(e,t,n){e[Tt]=ln(n)},updated(e,{value:t,modifiers:{number:n}}){e._assigning||fr(e,t)}};function fr(e,t,n){const s=e.multiple,r=L(t);if(!(s&&!r&&!un(t))){for(let o=0,i=e.options.length;o<i;o++){const l=e.options[o],c=an(l);if(s)if(r){const f=typeof c;f==="string"||f==="number"?l.selected=t.some(d=>String(d)===String(c)):l.selected=Bo(t,c)>-1}else l.selected=t.has(c);else if(hn(an(l),t)){e.selectedIndex!==o&&(e.selectedIndex=o);return}}!s&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function an(e){return"_value"in e?e._value:e.value}const Zl=["ctrl","shift","alt","meta"],Ql={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Zl.some(n=>e[`${n}Key`]&&!t.includes(n))},vs=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=(r,...o)=>{for(let i=0;i<t.length;i++){const l=Ql[t[i]];if(l&&l(r,t))return}return e(r,...o)})},ea=ie({patchProp:jl},Dl);let dr;function ta(){return dr||(dr=nl(ea))}const na=(...e)=>{const t=ta().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=ra(s);if(!r)return;const o=t._component;!k(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.innerHTML="";const i=n(r,!1,sa(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};function sa(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function ra(e){return le(e)?document.querySelector(e):e}const oa={class:"markdown-body"},ia=ul('<h2>What is it?</h2><p>The Runewizard lets you check easily what runewords you can make with the runes you have found.</p><p>Click on the runes to mark which ones you have found. The available runewords will be highlighted automatically.</p><p>The table can be sorted : try clicking on the table headings, you may find it useful!</p><h2>Runes</h2><p>The runes are listed in order of rarity, from top to bottom, and left to right. Each vertical group of rune represents roughly <strong>Common</strong>, <strong>Semi-Rare</strong>, and <strong>Extremely Rare</strong> runes. Note that the order is consistent with the <a href="http://classic.battle.net/diablo2exp/items/cube.shtml">rune upgrade formulas</a> for the Horadric Cube. For example: 3 x Tal = 1 x Ral rune.</p><h2>Runewords</h2><p><strong>Ladder-only runewords</strong> have a small <span class="rw-Md-ladder">L</span> icon next to the name.</p><h2>Note about storage</h2><p>Your selection of runes is saved in the browser’s <em>local storage</em>. Keep in mind that manually clearing your browser cache may reset the selected runes.</p>',10),la=[ia],aa={__name:"HelpText",setup(e,{expose:t}){return t({frontmatter:{}}),(s,r)=>(x(),F("div",oa,la))}},ca=Ve({name:"HelpBox",components:{HelpText:aa}}),de=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},ua={class:"rw-Help text-md"};function fa(e,t,n,s,r,o){const i=ue("HelpText");return x(),F("div",ua,[N(i,{class:""})])}const da=de(ca,[["render",fa]]),ha={name:"PhChatsBold"},pa={width:"1em",height:"1em",viewBox:"0 0 256 256"},ma=S("path",{d:"M236 96a20.023 20.023 0 0 0-20-20h-27.999V48a20.023 20.023 0 0 0-20-20h-128a20.023 20.023 0 0 0-20 20v128a12 12 0 0 0 19.544 9.332L68 162.328V184a20.023 20.023 0 0 0 20 20h92.173l36.283 29.332A12 12 0 0 0 236.001 224zM44.001 150.868V52h120v35.981l-.001.02l.001.019V132H71.583a11.999 11.999 0 0 0-7.544 2.668zm147.96 31.8a11.999 11.999 0 0 0-7.543-2.668H92.001v-24h76a20.023 20.023 0 0 0 20-20v-36H212l.001 98.868z",fill:"currentColor"},null,-1),ga=[ma];function va(e,t,n,s,r,o){return x(),F("svg",pa,ga)}const ya=de(ha,[["render",va]]),Ta={name:"FaSolidChevronDown"},Ca={width:"0.88em",height:"1em",viewBox:"0 0 448 512"},Sa=S("path",{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z",fill:"currentColor"},null,-1),Aa=[Sa];function Ra(e,t,n,s,r,o){return x(),F("svg",Ca,Aa)}const _a=de(Ta,[["render",Ra]]),ba=Ve({name:"AppHeader",components:{HelpBox:da,IconChat:ya,IconChevronDown:_a},data(){return{isHelpVisible:!1,envGameName:"Diablo II LoD & Resurrected",envGameVersion:"2.6",envGithubRepoUrl:"https://github.com/tosenzzz/diablo2-runewizard",envPatchNotesUrl:"https://news.blizzard.com/en-us/diablo2/23899624/diablo-ii-resurrected-ladder-season-three-now-live"}}}),wa="/diablo2-runewizard/assets/logo-rune-CI8Fl1wU.png",Da="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS0AAAAgCAMAAABw1N62AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFdQTFRFt6+XAAAAubOWubGWurGXubCXurCXu7GXv6+furGXurCWurGYu6+XurCWubGXurGWurCXubGXurKXuq+Vu7KWurKWu7KYurCXubGXubCWurCWubGWubGW27u9qQAAAB10Uk5TIABQoP/fv38QkO9vQOCAwJ+wYDBwP0/w0K/Pj19U6DckAAAF80lEQVR4nO2a63ajOAyAHTAJoQQKpANN9v2fcyUbX3RxmnTndOfsWf1KAFvyJ1mWDcYc/penxVS13aU5ntp/25w/XCC0zjZK9/YzWvs/rqPnBGhV1l6GYahH5PX+I1qn39XR8NxsqH6TOqDVWzu63y1G2Uxut8MJZeHNru5yMKJ3/7J5XLn/V9LE9+Tk3YbuT7F7438a3r2/3BcUDc2JCVW6N+sUqG0w6O1D3u2zHn+l2zktsBImI0v7QHBUdEFArunJ9mLtOb9tVmuZQ20usSFmTe8LM8HPoAl+rzuhzdotTjhUVGedDpaLRmu0g3I1S0EyYaOiKJ9BP6UF/fJBwl1VVdbIW01TyJiIxAYKLffgHs7tFsAdDsfUX2PXLLTPVJGglRsVZIEVTBsCDO0yjuOKK5woDUDRNu53rT16nIzWVbB5mhZ1qkYr9tOv6bKx9pZUHeOvEEEz1c/cMgzZMNsu4c6lFgmGmoQBfuP3oiJTYQw2rmNGqxfeeZoWNfQhrUM+mc5pKFOwEEIrUIDQyqcJp5VrmHRTwR+rHlzxeeFsqmiBqO9ccqWEZpZ/XqHV5bge08rH36ahmD24+mQFCy055YmlF22JrO1aiQTDTLqIKUwVgUtxpWC0zt+fiRTXY1rcrhBctTfxFuOpbezlwSBygUfVWzA/z0DjqI4hmDTZTlqV9za53EBpQT60LN89TWskuF6gJYIri6eBZ5wyLbijlnEDDmlWmyU9Z2EuUwRGwn9Cy9zo+ozy/JpY5+UHo2VaQovmYh5cKVVBXNDQKtMCR6/aPIQucEirhjKZNNqN3eOKKkSTaLUfd1hTNq7xhQoCl5bQnNHq52KWF8H1KLTKtEa91ApRNYhJc8hoLTJKhCI00tOKIt3zSr2V4eK0mjfYVX14ebuzlDokHRigD0KrSOuql1oxf7eSR6JlGslSqyAXQmtVtl0vVadjxMVpPa4hLzbsTTA/xCAZ5FJWoFUqtTC0fHTWSnB5B/7COSXqMaEIL3hasKuGkkLFUqaVJ4K9byzHPa7XaNHJF+LJKPFSoFUotXDfdImdiSeSQbJ4FYrmSGv0A1UrXlGBOWn1Eht7cccYnNaGWbLfZRAQUnANaZtSK2R0WqVSC2+EQB2t2FsHVpNyJCoUXXNaRVx6Quh1WhHX4ywv+Mfgwim1W6GFlk6rVGqhGTETK5PEOXDL1qZHimpCq4TrIkqRvbOK/t37xsTzLmi1tIKQvgzB5crcJpr39SD2i/qJ2ZJPjIvY/jiTWh2XUASP0fMtFddZzZ9TOl1hfS8O1wvVqZM9uAysgvumTQ0tlVap1GKpfRaD8zp1XFxRix4h1amKK50M0IvEm2QPCriGV2mh64wb3tz6ODuqXtJolUotBJ6XDWJvHc4gNFxc0YRk6M5HxaUYIxIF6Rtxda/Scoc0Pp5cnPVagaTSKpZafC6LgiQmSwUXU1S5pZrtqjVcvTxQrbmBtO+FnfgR00oCTjH78DC4jlrxrdEqllo4ebr8EPrOZ0k0ScFFFUGGQNKMlooLF3Wyw7yLBZsNYv6ClnZ8gjN+twSaf+qhpdBipZZZ8meFkMappcRFFFXdnlb5CaCGCw8f77GvHqbhyrzJBzE/psW3sE7GNBp3KK6+Fxa0eKk1pDN82EKNVFi2zUwSuDJFLbjO+86/IcunlcPFXpQhrub+1wJb7xM25bCeO5c/hlc+N60mcfX+bshsC6Ellypw3Wc22Y7p9lXm25H4gJT3HBcoesNN7emzsXEz5t++krVCwzWvZOMi1tuaJ9CNVhiH4lsMOpbgha1UE0xM0dlyiRHRyT7o+l4RlzhcieWU9xmKfVNhrNjb6UDbQSgRPe0QXxlNYgnv79ggf5/4DheO9MX317RMMr7Xl4RdURrTUspMfd1p4QmDaM6+eXvCoLmnweCwu7u/2b/H/i7jNc4kNTnobl0GlOq730pktht+DrNLnbn2m2ra6Mu+Vja42zqoI35Sfu4TG/Ke58unv/39SpWCxUy8dJye/BKgJP/tD5I4m3862r8BDNFq5mSmfvcAAAAASUVORK5CYII=",La={class:"rw-Layout-rowContainer h-[106px] flex"},Ma=S("div",{class:"pr-[20px] pt-[17px]"},[S("img",{src:wa,alt:"Rune icon original art (c) BLIZZARD ENTERTAINMENT",class:"w-[69px] h-[67px]"})],-1),Ea={class:"flex-1"},xa=S("h1",{class:"text-black text-[0px] mt-[19px] mb-[5px] w-[301px] h-[32px]"},[S("img",{src:Da,alt:"Runewizard",class:"block w-full h-full"})],-1),ka={class:"flex justify-between items-center"},Ha={class:"text-lg ux-color-gray"},Fa={class:"ux-color-gold"},Ia={class:"ml-2 ux-color-green"},Ba={class:"text-xs"},Oa=["href"],Pa=S("span",{class:"text-lg"},[S("a",{class:"ml-2 underline hover:underline ux-color-link-blue",target:"blank",href:"https://fabd.github.io/diablo2/"},"Diablo 2")],-1),$a={class:"flex items-center text-[#514f4a]"},Wa=S("span",{class:"ml-1"},ee("Help"),-1),Va=["href"],Na=S("span",null,ee("Feedback"),-1),qa=S("div",{class:"rw-Layout-goldBarSeparator mb-2"},null,-1),Ka={key:0,class:"rw-Layout-rowContainer mb-4"};function Ua(e,t,n,s,r,o){const i=ue("icon-chevron-down"),l=ue("icon-chat"),c=ue("help-box");return x(),F("header",null,[S("div",La,[Ma,S("div",Ea,[xa,S("div",ka,[S("div",Ha,[pt(" for "),S("span",Fa,ee(e.envGameName),1),S("span",Ia,"Patch "+ee(e.envGameVersion),1),S("span",Ba,[S("a",{class:"ml-2 underline hover:underline ux-color-link-blue",target:"blank",href:e.envPatchNotesUrl},"Update Notes",8,Oa)]),Pa]),S("div",$a,[S("a",{href:"#",class:"rw-HelpLink mr-6",onClick:t[0]||(t[0]=vs(f=>e.isHelpVisible=!e.isHelpVisible,["prevent"]))},[N(i,{class:Te(["ux-icon ux-icon--fw",{"transform rotate-180":e.isHelpVisible}])},null,8,["class"]),Wa]),S("a",{href:`${e.envGithubRepoUrl}/discussions`,class:"rw-Header-link"},[N(l,{class:"ux-icon ux-icon--fw ux-icon--lg mr-1"}),Na],8,Va)])])])]),qa,N(gs,{name:"fadein"},{default:Kr(()=>[e.isHelpVisible?(x(),F("div",Ka,[N(c)])):Fe("",!0)]),_:1})])}const Ga=de(ba,[["render",Ua]]),za={name:"FaGithub"},ja={width:"1.03em",height:"1em",viewBox:"0 0 1536 1504"},Ja=S("path",{d:"M768 0q209 0 385.5 103T1433 382.5T1536 768q0 251-146.5 451.5T1011 1497q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142q57-6 102.5-18t94-39t81-66.5t53-105T1258 728q0-119-79-206q37-91-8-204q-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27T450 331.5T365 318q-45 113-8 204q-79 87-79 206q0 85 20.5 150T351 983t80.5 67t94 39t102.5 18q-39 36-49 103q-21 10-45 15t-57 5t-65.5-21.5T356 1146q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5t9 14t13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30t69.5 7t55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5T0 768q0-209 103-385.5T382.5 103T768 0zM291 1103q3-7-7-12q-10-3-13 2q-3 7 7 12q9 6 13-2zm31 34q7-5-2-16q-10-9-16-3q-7 5 2 16q10 10 16 3zm30 45q9-7 0-19q-8-13-17-6q-9 5 0 18t17 7zm42 42q8-8-4-19q-12-12-20-3q-9 8 4 19q12 12 20 3zm57 25q3-11-13-16q-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11q-16 0-16 11q0 13 17 11q16 0 16-11zm58-10q-2-11-18-9q-16 3-14 15t18 8t14-14z",fill:"currentColor"},null,-1),Ya=[Ja];function Xa(e,t,n,s,r,o){return x(),F("svg",ja,Ya)}const Za=de(za,[["render",Xa]]),Qa=Ve({name:"AppFooter",components:{IconGithub:Za},data(){return{envGithubRepoUrl:"https://github.com/tosenzzz/diablo2-runewizard",envMainSiteUrl:"https://fabd.github.io/diablo2"}}}),ec={class:"rw-Footer min-h-[200px]"},tc=S("div",{class:"rw-Layout-goldBarSeparator opacity-50 mb-6"},null,-1),nc={class:"text-center text-lg text-gold leading-1"},sc={key:0,class:"mb-2"},rc=["href"],oc=["href"],ic=S("span",{class:""},ee("tosenzzz/diablo2-runewizard"),-1);function lc(e,t,n,s,r,o){const i=ue("icon-github");return x(),F("footer",ec,[tc,S("div",nc,[e.envMainSiteUrl?(x(),F("div",sc,[pt(" Also check out "),S("a",{href:e.envMainSiteUrl,class:"rw-Footer-link ml-2"},ee("The Tankazon Resource"),8,rc)])):Fe("",!0),S("div",null,[pt(" Development "),S("a",{href:e.envGithubRepoUrl,class:"rw-Footer-link ml-2"},[N(i,{class:"ux-icon ux-icon--fw mr-1 mt-[-0.2em]"}),ic],8,oc)])])])}const ac=de(Qa,[["render",lc]]);var en=(e=>(e[e.COMMON=1]="COMMON",e[e.SEMIRARE=2]="SEMIRARE",e[e.RARE=3]="RARE",e))(en||{});const Rn=[{name:"El",fname:"El (1)",tier:1},{name:"Eld",fname:"Eld (2)",tier:1},{name:"Tir",fname:"Tir (3)",tier:1},{name:"Nef",fname:"Nef (4)",tier:1},{name:"Eth",fname:"Eth (5)",tier:1},{name:"Ith",fname:"Ith (6)",tier:1},{name:"Tal",fname:"Tal (7)",tier:1},{name:"Ral",fname:"Ral (8)",tier:1},{name:"Ort",fname:"Ort (9)",tier:1},{name:"Thul",fname:"Thul (10)",tier:1},{name:"Amn",fname:"Amn (11)",tier:1},{name:"Sol",fname:"Sol (12)",tier:2},{name:"Shael",fname:"Shael (13)",tier:2},{name:"Dol",fname:"Dol (14)",tier:2},{name:"Hel",fname:"Hel (15)",tier:2},{name:"Io",fname:"Io (16)",tier:2},{name:"Lum",fname:"Lum (17)",tier:2},{name:"Ko",fname:"Ko (18)",tier:2},{name:"Fal",fname:"Fal (19)",tier:2},{name:"Lem",fname:"Lem (20)",tier:2},{name:"Pul",fname:"Pul (21)",tier:2},{name:"Um",fname:"Um (22)",tier:2},{name:"Mal",fname:"Mal (23)",tier:3},{name:"Ist",fname:"Ist (24)",tier:3},{name:"Gul",fname:"Gul (25)",tier:3},{name:"Vex",fname:"Vex (26)",tier:3},{name:"Ohm",fname:"Ohm (27)",tier:3},{name:"Lo",fname:"Lo (28)",tier:3},{name:"Sur",fname:"Sur (29)",tier:3},{name:"Ber",fname:"Ber (30)",tier:3},{name:"Jah",fname:"Jah (31)",tier:3},{name:"Cham",fname:"Cham (32)",tier:3},{name:"Zod",fname:"Zod (33)",tier:3}];function cc(){return Rn.map(e=>e.name)}const hr="runewizard",re={state:mn({haveRunes:[],pinned:new Set,hideIfNotHave:!0}),storage:null,initialize(){this.storage=window.localStorage,re.reset()},clearRunes(){this.setRunes(cc(),!1)},getRunes(){const e=[];for(const t of Object.keys(this.state.haveRunes))this.state.haveRunes[t]&&e.push(t);return e},setRunes(e,t=!0){for(const n of e)this.state.haveRunes[n]=t},hasRune(e){return this.state.haveRunes[e]||!1},setHideIfNotHave(e){return this.state.hideIfNotHave=e},reset(){this.clearRunes()},getPinned(){return Array.from(this.state.pinned.values())},isPinned(e){return this.state.pinned.has(e)},setPinned(e,t=!0){const n=t?"add":"delete";e.forEach(s=>{this.state.pinned[n](s)})},loadState(){if(!this.storage)return;const e=this.storage.getItem(hr);if(!e)return;const t=JSON.parse(e);this.setRunes(t.selectedRunes),this.setPinned(t.pinnedRunewords||[])},saveState(){let e="";if(!this.storage)return;const t={selectedRunes:this.getRunes(),pinnedRunewords:this.getPinned()};try{e=JSON.stringify(t)}catch{}this.storage.setItem(hr,e)}},uc={name:"TopcoatCancel"},fc={width:"1em",height:"1em",viewBox:"0 0 42 42"},dc=S("path",{fillRule:"evenodd",d:"M21.002 26.588l10.357 10.604c1.039 1.072 1.715 1.083 2.773 0l2.078-2.128c1.018-1.042 1.087-1.726 0-2.839L25.245 21L36.211 9.775c1.027-1.055 1.047-1.767 0-2.84l-2.078-2.127c-1.078-1.104-1.744-1.053-2.773 0L21.002 15.412L10.645 4.809c-1.029-1.053-1.695-1.104-2.773 0L5.794 6.936c-1.048 1.073-1.029 1.785 0 2.84L16.759 21L5.794 32.225c-1.087 1.113-1.029 1.797 0 2.839l2.077 2.128c1.049 1.083 1.725 1.072 2.773 0l10.358-10.604z",fill:"currentColor"},null,-1),hc=[dc];function pc(e,t,n,s,r,o){return x(),F("svg",fc,hc)}const To=de(uc,[["render",pc]]),mc={El:`
  #### Bonus
  Weapon: +50 AR, +1 Light Radius
  Armor/Helm/Shield: +1 Light Radius, +15 Defense
  Clvl Required: 11
  `,Eld:`
  3 x El
  #### Bonus
  Weapon: +75% Damage vs. Undead, +50 AR vs. Undead
  Armor/Helm: -15% Stamina Drain
  Shield: +7% Blocking
  Clvl Required: 11
  `,Tir:`
  3 x Eld
  #### Bonus
  Weapon: +2 Mana Per Kill
  Armor/Helm/Shield: +2 Mana Per Kill
  Clvl Required: 13
  `,Nef:`
  3 x Tir
  #### Bonus
  Weapon: Knockback
  Armor/Helm/Shield: +30 Defense vs. Missile
  Clvl Required: 13
  `,Eth:`
  3 x Nef
  #### Bonus
  Weapon: -25% Target Defense
  Armor/Helm/Shield: Regenerate Mana 15%
  Clvl Required: 15
  `,Ith:`
  3 x Eth
  #### Bonus
  Weapon: +9 to Maximum Damage
  Armor/Helm/Shield: 15% Damage Taken Goes to Mana
  Clvl Required: 15
  `,Tal:`
  3 x Ith
  #### Bonus
  Weapon: 75 Poison Damage over 5 seconds
  Armor/Helm: +30% Poison Resist
  Shield: +35% Poison Resist
  Clvl Required: 17
  `,Ral:`
  3 x Tal
  #### Bonus
  Weapon: +5-30 Fire Damage
  Armor/Helm: +30% Fire Resist
  Shield: +35% Fire Resist
  Clvl Required: 19
  `,Ort:`
  3 x Ral
  #### Bonus
  Weapon: +1-50 Lightning Damage
  Armor/Helm: +30% Lightning Resist
  Shield: +35% Lightning Resist
  Clvl Required: 21
  `,Thul:`
  3 x Ort
  #### Bonus
  Weapon: +3-14 Cold Damage (3 sec)
  Armor/Helm: +30% Cold Resist
  Shield: +35% Cold Resist
  Clvl Required: 23
  `,Amn:`
  3 x Thul
  1 Chipped Topaz
  #### Bonus
  Weapon: 7% Life Stolen Per Hit
  Armor/Helm/Shield: Attacker Takes Damage of 14
  Clvl Required: 25
  `,Sol:`
  3 x Amn
  1 Chipped Amethyst
  #### Bonus
  Weapon: +9 to Minimum Damage
  Armor/Helm/Shield: -7 Damage Taken
  Clvl Required: 27
  `,Shael:`
  3 x Sol
  1 Chipped Sapphire
  #### Bonus
  Weapon: +20% Increased Attack Speed
  Armor/Helm: +20% Faster Hit Recovery
  Shield: +20% Faster Block Rate
  Clvl Required: 29
  `,Dol:`
  3 x Shael
  1 Chipped Ruby
  #### Bonus
  Weapon: 25% Chance Hit Causes Monster to Flee
  Armor/Helm/Shield: +7 Replenish Life
  Clvl Required: 31
  `,Hel:`
  3 x Dol
  1 Chipped Emerald
  #### Bonus
  Weapon: -20% Requirements
  Armor/Helm/Shield: -15% Requirements
  Clvl Required: None
  `,Io:`
  3 x Hel
  1 Chipped Diamond
  #### Bonus
  Weapon: +10 Vitality
  Armor/Helm/Shield: +10 Vitality
  Clvl Required: 35
  `,Lum:`
  3 x Io
  1 Flawed Topaz
  #### Bonus
  Weapon: +10 Energy
  Armor/Helm/Shield: +10 Energy
  Clvl Required: 37
  `,Ko:`
  3 x Lum
  1 Flawed Amethyst
  #### Bonus
  Weapon: +10 Dexterity
  Armor/Helm/Shield: +10 Dexterity
  Clvl Required: 39
  `,Fal:`
  3 x Ko
  1 Flawed Sapphire
  #### Bonus
  Weapon: +10 Strength
  Armor/Helm/Shield: +10 Strength
  Clvl Required: 41
  `,Lem:`
  3 x Fal
  1 Flawed Ruby
  #### Bonus
  Weapon: +75% Extra Gold from Monsters
  Armor/Helm/Shield: +50% Extra Gold from Monsters
  Clvl Required: 43
  `,Pul:`
  3 x Lem
  1 Flawed Emerald
  #### Bonus
  Weapon: +75% Damage to Demons, +100 AR vs. Demons
  Armor/Helm/Shield: +30% Defense
  Clvl Required: 45
  `,Um:`
  2 x Pul
  1 Flawed Diamond
  #### Bonus
  Weapon: 25% Chance of Open Wounds
  Armor/Helm: +15% Resist All
  Shield: +22% Resist All
  Clvl Required: 47
  `,Mal:`
  2 x Um
  1 Topaz
  #### Bonus
  Weapon: Prevent Monster Heal
  Armor/Helm/Shield: Magic Damage Reduced by 7
  Clvl Required: 49
  `,Ist:`
  2 x Mal
  1 Amethyst
  #### Bonus
  Weapon: +30% Better Chance of Finding Magic Items
  Armor/Helm/Shield: +25% Better Chance of Finding Magic Items
  Clvl Required: 51
  `,Gul:`
  2 x Ist
  1 Sapphire
  #### Bonus
  Weapon: +20% Attack Rating
  Armor/Helm/Shield: +5% Max Poison Resist
  Clvl Required: 53
  `,Vex:`
  2 x Gul
  1 Ruby
  #### Bonus
  Weapon: 7% Mana Leech
  Armor/Helm/Shield: +5% Max Fire Resist
  Clvl Required: 55
  `,Ohm:`
  2 x Vex
  1 Emerald
  #### Bonus
  Weapon: +50% Enhanced Damage
  Armor/Helm/Shield: +5% Max Cold Resist
  Clvl Required: 57
  `,Lo:`
  2 x Ohm
  1 Diamond
  #### Bonus
  Weapon: 20% Deadly Strike
  Armor/Helm/Shield: +5% Max Lightning Resist
  Clvl Required: 59
  `,Sur:`
  2 x Lo
  1 Flawless Topaz
  #### Bonus
  Weapon: 20% Chance to Blind Target
  Armor/Helm: +5% Max Mana
  Shield: +50 Mana
  Clvl Required: 61
  `,Ber:`
  2 x Sur
  1 Flawless Amethyst
  #### Bonus
  Weapon: 20% Chance of Crushing Blow
  Armor/Helm/Shield: Damage Reduced by 8%
  Clvl Required: 63
  `,Jah:`
  2 x Ber
  1 Flawless Sapphire
  #### Bonus
  Weapon: Ignores Target Defense
  Armor/Helm: +5% Max Life
  Shield: +50 Life
  Clvl Required: 65
  `,Cham:`
  2 x Jah
  1 Flawless Ruby
  #### Bonus
  Weapon: 32% Chance to Freeze Target
  Armor/Helm/Shield: Cannot Be Frozen
  Clvl Required: 67
  `,Zod:`
  2 x Cham
  1 Flawless Emerald
  #### Bonus
  Weapon: Indestructible
  Armor/Helm/Shield: Indestructible
  Clvl Required: 69
  `},gc=Ve({name:"RunePopup",data(){return{isVisible:!1,position:{x:0,y:0},rune:""}},computed:{runesDataMap(){const e=new Map;return Rn.forEach(t=>{e.set(t.name,t)}),e},formatBody(){const e=this.rune;let t=e&&mc[e]||"--( invalid runeword id )--";return t=t.trim(),t=t.replace(/<\/h4>\n*/g,"</h4>"),t=t.replace(/\+?[0-9-]+%?/g,'<span class="is-mod">$&</span>'),t=t.replace(/####\s(.*)\n+/g,'<h4 class="is-title2">$1</h4>'),t=t.replace(/\n/g,"<br/>"),t}},methods:{unitPx(e){return`${e}px`},moveTo(e){let{x:n,y:s}=e.getBoundingClientRect();n=n+50,s=s+window.pageYOffset+e.offsetHeight+4;const o=this.$refs.root.offsetHeight,i=s+o,l=document.documentElement.clientHeight;let c=window.scrollY+l;c-=10,i>c&&(s=c-o,s=Math.max(window.scrollY+10,s)),this.position={x:n,y:s}},showRune(e,t){this.rune=e,this.$nextTick(()=>{this.moveTo(t),this.isVisible=!0})},setVisible(e){this.isVisible=e}}}),vc={class:"rw-RunewordPopup-title"},yc=["innerHTML"];function Tc(e,t,n,s,r,o){var i;return x(),F("div",{ref:"root",class:"rw-RunewordPopup absolute",style:At({visibility:e.isVisible?"visible":"hidden",left:e.unitPx(e.position.x),top:e.unitPx(e.position.y)}),onClick:t[0]||(t[0]=l=>e.setVisible(!1))},[S("h3",vc,ee((i=e.runesDataMap.get(e.rune))==null?void 0:i.fname),1),S("div",{class:"rw-RunewordPopup-body",innerHTML:e.formatBody},null,8,yc)],4)}const Cc=de(gc,[["render",Tc]]),Sc=Ve({name:"Runes",components:{IconCancel:To,RunePopup:Cc},data(){return{haveRunes:re.state.haveRunes,runes:Rn}},computed:{isAnyRuneSelected(){return re.getRunes().length>0},runesByTier(){return[this.runes.filter(t=>t.tier===en.COMMON),this.runes.filter(t=>t.tier===en.SEMIRARE),this.runes.filter(t=>t.tier===en.RARE)]},runePopup(){return this.$refs.runePopup}},methods:{onClearRunes(){re.clearRunes(),re.saveState()},onEnterRune(e,t){e.target&&this.runePopup.showRune(t.toString(),e.target)},onLeaveRune(){this.runePopup.setVisible(!1)},onToggleRune(e){const t=re.hasRune(e);re.setRunes([e],!t),re.saveState()},onCheckHideIfNotHave(e){const t=e.target;re.setHideIfNotHave(t.checked),re.saveState()}}}),Ac={class:"relative"},Rc={class:"flex justify-between items-center mb-2"},_c=S("h2",{class:"rw-Title-h2 mb-0"},"Runes",-1),bc={key:0,class:"-mt-2px"},wc={class:"rw-Title-h2 mb-2"},Dc=S("label",{class:"cursor-pointer",for:"hiRW"}," Hide RWs without runes",-1),Lc={class:"rw-Runes flex justify-between w-[130px] select-none"},Mc=["onClick","onMouseenter"],Ec={class:"mx-auto my-auto"};function xc(e,t,n,s,r,o){const i=ue("rune-popup"),l=ue("icon-cancel");return x(),F(oe,null,[N(i,{ref:"runePopup"},null,512),S("div",Ac,[S("div",Rc,[_c,e.isAnyRuneSelected?(x(),F("div",bc,[S("a",{class:"rw-Runes-clear",href:"#",onClick:t[0]||(t[0]=vs((...c)=>e.onClearRunes&&e.onClearRunes(...c),["prevent"]))},[N(l,{class:"ux-icon ux-icon--fw rw-Runes-clearIcon text-[#da0000] mr-1"}),pt("clear ")])])):Fe("",!0)]),S("h3",wc,[S("input",{class:"cursor-pointer",type:"checkbox",id:"hiRW",checked:"",onClick:t[1]||(t[1]=(...c)=>e.onCheckHideIfNotHave&&e.onCheckHideIfNotHave(...c))}),Dc]),S("div",Lc,[(x(!0),F(oe,null,Ct(e.runesByTier,(c,f)=>(x(),F("div",{key:f,class:"w-1/3"},[(x(!0),F(oe,null,Ct(c,d=>(x(),F("div",{key:d.name,class:Te(["rw-Rune mx-auto",{"is-selected":e.haveRunes[d.name]}]),onClick:m=>e.onToggleRune(d.name),onMouseenter:m=>e.onEnterRune(m,d.name),onMouseleave:t[2]||(t[2]=m=>e.onLeaveRune())},[S("span",Ec,ee(d.name),1)],42,Mc))),128))]))),128))])])],64)}const kc=de(Sc,[["render",xc]]),Co=[{title:"Ancient's Pledge",runes:["Ral","Ort","Tal"],level:21,ttypes:["Shields"]},{title:"Black",runes:["Thul","Io","Nef"],level:35,ttypes:["Clubs","Hammers","Maces"]},{title:"Fury",runes:["Jah","Gul","Eth"],level:65,ttypes:["Melee Weapons"]},{title:"Holy Thunder",runes:["Eth","Ral","Ort","Tal"],level:21,ttypes:["Scepters"]},{title:"Honor",runes:["Amn","El","Ith","Tir","Sol"],level:27,ttypes:["Melee Weapons"]},{title:"King's Grace",runes:["Amn","Ral","Thul"],level:25,ttypes:["Swords","Scepters"]},{title:"Leaf",runes:["Tir","Ral"],level:19,ttypes:["Staves"],tinfos:"(Not Orbs/Wands)"},{title:"Lionheart",runes:["Hel","Lum","Fal"],level:41,ttypes:["Body Armors"]},{title:"Lore",runes:["Ort","Sol"],level:27,ttypes:["Helms"]},{title:"Malice",runes:["Ith","El","Eth"],level:15,ttypes:["Melee Weapons"]},{title:"Melody",runes:["Shael","Ko","Nef"],level:39,ttypes:["Missile Weapons"]},{title:"Memory",runes:["Lum","Io","Sol","Eth"],level:37,ttypes:["Staves"],tinfos:"(Not Orbs/Wands)"},{title:"Nadir",runes:["Nef","Tir"],level:13,ttypes:["Helms"]},{title:"Radiance",runes:["Nef","Sol","Ith"],level:27,ttypes:["Helms"]},{title:"Rhyme",runes:["Shael","Eth"],level:29,ttypes:["Shields"]},{title:"Silence",runes:["Dol","Eld","Hel","Ist","Tir","Vex"],level:55,ttypes:["Weapons"]},{title:"Smoke",runes:["Nef","Lum"],level:37,ttypes:["Body Armors"]},{title:"Stealth",runes:["Tal","Eth"],level:17,ttypes:["Body Armors"]},{title:"Steel",runes:["Tir","El"],level:13,ttypes:["Swords","Axes","Maces"]},{title:"Strength",runes:["Amn","Tir"],level:25,ttypes:["Melee Weapons"]},{title:"Venom",runes:["Tal","Dol","Mal"],level:49,ttypes:["Weapons"]},{title:"Wealth",runes:["Lem","Ko","Tir"],level:43,ttypes:["Body Armors"]},{title:"White",runes:["Dol","Io"],level:35,ttypes:["Wands"],tinfos:"(Necromancer)"},{title:"Zephyr",runes:["Ort","Eth"],level:21,ttypes:["Missile Weapons"]},{title:"Beast",runes:["Ber","Tir","Um","Mal","Lum"],level:63,ttypes:["Axes","Scepters","Hammers"],version:"1.10"},{title:"Bramble",runes:["Ral","Ohm","Sur","Eth"],level:61,ttypes:["Body Armors"],version:"1.10"},{title:"Breath of the Dying",runes:["Vex","Hel","El","Eld","Zod","Eth"],level:69,ttypes:["Weapons"],version:"1.10"},{title:"Call to Arms",runes:["Amn","Ral","Mal","Ist","Ohm"],level:57,ttypes:["Weapons"],version:"1.10"},{title:"Chaos",runes:["Fal","Ohm","Um"],level:57,ttypes:["Claws"],tinfos:"(Assassin)",version:"1.10"},{title:"Chains of Honor",runes:["Dol","Um","Ber","Ist"],level:63,ttypes:["Body Armors"],version:"1.10"},{title:"Crescent Moon",runes:["Shael","Um","Tir"],level:47,ttypes:["Axes","Swords","Polearms"],version:"1.10"},{title:"Delirium",runes:["Lem","Ist","Io"],level:51,ttypes:["Helms"],version:"1.10"},{title:"Doom",runes:["Hel","Ohm","Um","Lo","Cham"],level:67,ttypes:["Axes","Polearms","Hammers"],version:"1.10"},{title:"Duress",runes:["Shael","Um","Thul"],level:47,ttypes:["Body Armors"],version:"1.10"},{title:"Enigma",runes:["Jah","Ith","Ber"],level:65,ttypes:["Body Armors"],version:"1.10"},{title:"Eternity",runes:["Amn","Ber","Ist","Sol","Sur"],level:63,ttypes:["Melee Weapons"],version:"1.10"},{title:"Exile",runes:["Vex","Ohm","Ist","Dol"],level:57,ttypes:["Paladin Shields"],tinfos:"(Paladin)",version:"1.10"},{title:"Famine",runes:["Fal","Ohm","Ort","Jah"],level:65,ttypes:["Axes","Hammers"],version:"1.10"},{title:"Gloom",runes:["Fal","Um","Pul"],level:47,ttypes:["Body Armors"],version:"1.10"},{title:"Hand of Justice",runes:["Sur","Cham","Amn","Lo"],level:67,ttypes:["Weapons"],version:"1.10"},{title:"Heart of the Oak",runes:["Ko","Vex","Pul","Thul"],level:55,ttypes:["Staves","Maces"],version:"1.10"},{title:"Kingslayer",runes:["Mal","Um","Gul","Fal"],level:53,ttypes:["Swords","Axes"],version:"1.10"},{title:"Passion",runes:["Dol","Ort","Eld","Lem"],level:43,ttypes:["Weapons"],version:"1.10"},{title:"Prudence",runes:["Mal","Tir"],level:49,ttypes:["Body Armors"],version:"1.10"},{title:"Sanctuary",runes:["Ko","Ko","Mal"],level:49,ttypes:["Shields"],version:"1.10"},{title:"Splendor",runes:["Eth","Lum"],level:37,ttypes:["Shields"],version:"1.10"},{title:"Stone",runes:["Shael","Um","Pul","Lum"],level:47,ttypes:["Body Armors"],version:"1.10"},{title:"Wind",runes:["Sur","El"],level:61,ttypes:["Melee Weapons"],version:"1.10"},{title:"Brand",runes:["Jah","Lo","Mal","Gul"],level:65,ttypes:["Missile Weapons"],version:"1.10"},{title:"Death",runes:["Hel","El","Vex","Ort","Gul"],level:55,ttypes:["Swords","Axes"],version:"1.10"},{title:"Destruction",runes:["Vex","Lo","Ber","Jah","Ko"],level:65,ttypes:["Polearms","Swords"],version:"1.10"},{title:"Dragon",runes:["Sur","Lo","Sol"],level:61,ttypes:["Body Armors","Shields"],version:"1.10"},{title:"Dream",runes:["Io","Jah","Pul"],level:65,ttypes:["Helms","Shields"]},{title:"Edge",runes:["Tir","Tal","Amn"],level:25,ttypes:["Missile Weapons"],version:"1.10"},{title:"Faith",runes:["Ohm","Jah","Lem","Eld"],level:65,ttypes:["Missile Weapons"],version:"1.10"},{title:"Fortitude",runes:["El","Sol","Dol","Lo"],level:59,ttypes:["Weapons","Body Armors"],version:"1.10"},{title:"Grief",runes:["Eth","Tir","Lo","Mal","Ral"],level:59,ttypes:["Swords","Axes"],version:"1.10"},{title:"Harmony",runes:["Tir","Ith","Sol","Ko"],level:39,ttypes:["Missile Weapons"],version:"1.10"},{title:"Ice",runes:["Amn","Shael","Jah","Lo"],level:65,ttypes:["Missile Weapons"],version:"1.10"},{title:"Infinity",runes:["Ber","Mal","Ber","Ist"],level:63,ttypes:["Polearms","Spears"],version:"1.10"},{title:"Insight",runes:["Ral","Tir","Tal","Sol"],level:27,ttypes:["Missile Weapons","Polearms","Staves"],version:"1.10"},{title:"Last Wish",runes:["Jah","Mal","Jah","Sur","Jah","Ber"],level:65,ttypes:["Swords","Hammers","Axes"],version:"1.10"},{title:"Lawbringer",runes:["Amn","Lem","Ko"],level:43,ttypes:["Swords","Hammers","Scepters"],version:"1.10"},{title:"Oath",runes:["Shael","Pul","Mal","Lum"],level:49,ttypes:["Swords","Axes","Maces"],version:"1.10"},{title:"Obedience",runes:["Hel","Ko","Thul","Eth","Fal"],level:41,ttypes:["Polearms","Spears"],version:"1.10"},{title:"Phoenix",runes:["Vex","Vex","Lo","Jah"],level:65,ttypes:["Weapons","Shields"],version:"1.10"},{title:"Pride",runes:["Cham","Sur","Io","Lo"],level:67,ttypes:["Polearms","Spears"],version:"1.10"},{title:"Rift",runes:["Hel","Ko","Lem","Gul"],level:53,ttypes:["Polearms","Scepters"],version:"1.10"},{title:"Spirit",runes:["Tal","Thul","Ort","Amn"],level:25,ttypes:["Swords","Shields"],version:"1.10"},{title:"Voice of Reason",runes:["Lem","Ko","El","Eld"],level:43,ttypes:["Swords","Maces"],version:"1.10"},{title:"Wrath",runes:["Pul","Lum","Ber","Mal"],level:63,ttypes:["Missile Weapons"],version:"1.10"},{title:"Bone",runes:["Sol","Um","Um"],level:47,ttypes:["Body Armors"],tinfos:"(Necromancer)",version:"1.11"},{title:"Enlightenment",runes:["Pul","Ral","Sol"],level:45,ttypes:["Body Armors"],tinfos:"(Sorceress)",version:"1.11"},{title:"Myth",runes:["Hel","Amn","Nef"],level:25,ttypes:["Body Armors"],tinfos:"(Barbarian)",version:"1.11"},{title:"Peace",runes:["Shael","Thul","Amn"],level:29,ttypes:["Body Armors"],tinfos:"(Amazon)",version:"1.11"},{title:"Principle",runes:["Ral","Gul","Eld"],level:53,ttypes:["Body Armors"],tinfos:"(Paladin)",version:"1.11"},{title:"Rain",runes:["Ort","Mal","Ith"],level:49,ttypes:["Body Armors"],tinfos:"(Druid)",version:"1.11"},{title:"Treachery",runes:["Shael","Thul","Lem"],level:43,ttypes:["Body Armors"],tinfos:"(Assassin)",version:"1.11"},{title:"Plague",runes:["Cham","Shael","Um"],level:67,ttypes:["Swords","Claws","Daggers"],version:"2.4"},{title:"Pattern",runes:["Tal","Ort","Thul"],level:23,ttypes:["Claws"],tinfos:"(Assassin)",version:"2.4"},{title:"Unbending Will",runes:["Fal","Io","Ith","Eld","El","Hel"],level:41,ttypes:["Swords"],version:"2.4"},{title:"Wisdom",runes:["Pul","Ith","Eld"],level:45,ttypes:["Helms"],version:"2.4"},{title:"Obsession",runes:["Zod","Ist","Lem","Lum","Io","Nef"],level:69,ttypes:["Staves"],version:"2.4"},{title:"Flickering Flame",runes:["Nef","Pul","Vex"],level:55,ttypes:["Helms"],version:"2.4"},{title:"Mist",runes:["Cham","Shael","Gul","Thul","Ith"],level:67,ttypes:["Missile Weapons"],version:"2.4"},{title:"Bulwark",runes:["Shael","Io","Sol"],level:35,ttypes:["Helms"],ladder:!0,version:"2.6"},{title:"Cure",runes:["Shael","Io","Tal"],level:35,ttypes:["Helms"],ladder:!0,version:"2.6"},{title:"Ground",runes:["Shael","Io","Ort"],level:35,ttypes:["Helms"],ladder:!0,version:"2.6"},{title:"Hearth",runes:["Shael","Io","Thul"],level:35,ttypes:["Helms"],ladder:!0,version:"2.6"},{title:"Temper",runes:["Shael","Io","Ral"],level:35,ttypes:["Helms"],ladder:!0,version:"2.6"},{title:"Hustle",runes:["Shael","Ko","Eld"],level:39,ttypes:["Weapons","Body Armors"],ladder:!0,version:"2.6"},{title:"Mosaic",runes:["Mal","Gul","Amn"],level:53,ttypes:["Claws"],tinfos:"(Assassin)",ladder:!0,version:"2.6"},{title:"Metamorphosis",runes:["Io","Cham","Fal"],level:67,ttypes:["Helms"],ladder:!0,tinfos:"(Druid)",version:"2.6"}],On={LOD:["","1.10","1.11"],RES:["2.4","2.6"]};function Hc(){let e=[];return Co.forEach(t=>{t.ttypes&&t.ttypes.forEach(n=>{e.includes(n)||e.push(n)})}),e.sort()}const pr={Axes:{url:"https://diablo2.diablowiki.net/Axes"},"Body Armors":{url:"https://diablo2.diablowiki.net/Body_Armor"},Claws:{url:"https://diablo2.diablowiki.net/Assassin_Items"},Clubs:{url:"https://diablo2.diablowiki.net/Clubs"},Daggers:{url:"https://diablo2.diablowiki.net/Daggers"},Hammers:{url:"https://diablo2.diablowiki.net/Hammers"},Helms:{url:"https://diablo2.diablowiki.net/Helms"},Maces:{url:"https://diablo2.diablowiki.net/Maces"},"Melee Weapons":{},"Missile Weapons":{},"Paladin Shields":{url:"https://diablo2.diablowiki.net/Paladin_Items"},Polearms:{url:"https://diablo2.diablowiki.net/Polearms"},Scepters:{url:"https://diablo2.diablowiki.net/Scepters"},Shields:{url:"https://diablo2.diablowiki.net/Shields"},Spears:{url:"https://diablo2.diablowiki.net/Spears"},Staves:{url:"https://diablo2.diablowiki.net/Staves"},Swords:{url:"https://diablo2.diablowiki.net/Swords"},Wands:{url:"https://diablo2.diablowiki.net/Wands"},Weapons:{}},Fc={name:"FaSolidLongArrowAltUp"},Ic={width:"0.5em",height:"1em",viewBox:"0 0 256 512"},Bc=S("path",{d:"M88 166.059V468c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12V166.059h46.059c21.382 0 32.09-25.851 16.971-40.971l-86.059-86.059c-9.373-9.373-24.569-9.373-33.941 0l-86.059 86.059c-15.119 15.119-4.411 40.971 16.971 40.971H88z",fill:"currentColor"},null,-1),Oc=[Bc];function Pc(e,t,n,s,r,o){return x(),F("svg",Ic,Oc)}const $c=de(Fc,[["render",Pc]]),Wc={name:"FaSolidLongArrowAltDown"},Vc={width:"0.5em",height:"1em",viewBox:"0 0 256 512"},Nc=S("path",{d:"M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z",fill:"currentColor"},null,-1),qc=[Nc];function Kc(e,t,n,s,r,o){return x(),F("svg",Vc,qc)}const Uc=de(Wc,[["render",Kc]]),Gc={name:"PhDiamondFill"},zc={width:"1em",height:"1em",viewBox:"0 0 256 256"},jc=S("path",{d:"M236 139.3L139.3 236a15.9 15.9 0 0 1-22.6 0L20 139.3a16.1 16.1 0 0 1 0-22.6L116.7 20a16.1 16.1 0 0 1 22.6 0l96.7 96.7a16.1 16.1 0 0 1 0 22.6z",fill:"currentColor"},null,-1),Jc=[jc];function Yc(e,t,n,s,r,o){return x(),F("svg",zc,Jc)}const Xc=de(Gc,[["render",Yc]]),Zc={name:"PhDiamondBold"},Qc={width:"1em",height:"1em",viewBox:"0 0 256 256"},eu=S("path",{d:"M238.8 113.9l-96.7-96.7a19.8 19.8 0 0 0-28.2 0l-96.7 96.7a19.8 19.8 0 0 0 0 28.2l96.7 96.7a19.8 19.8 0 0 0 28.2 0l96.7-96.7a19.8 19.8 0 0 0 0-28.2zM128 219l-91-91l91-91l91 91z",fill:"currentColor"},null,-1),tu=[eu];function nu(e,t,n,s,r,o){return x(),F("svg",Qc,tu)}const su=de(Zc,[["render",nu]]),ru={"Ancient's Pledge":`
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
  `},ou=Ve({name:"RunewordPopup",data(){return{isVisible:!1,position:{x:0,y:0},runeword:{title:"",ttypes:[],level:0}}},computed:{formatBody(){const e=this.runeword.title;let t=e&&ru[e]||"---";return t=t.trim(),t=t.replace(/\+?[0-9]+(-[0-9]+)?%?/g,'<span class="is-mod">$&</span>'),t=t.replace(/####\s(.*)\n+/g,'<h4 class="is-title">$1</h4>'),t=t.replace(/\n/g,"<br/>"),t}},methods:{unitPx(e){return`${e}px`},moveTo(e){let{x:n,y:s}=e.getBoundingClientRect();n=n+50,s=s+window.pageYOffset+e.offsetHeight+4;const o=this.$refs.root.offsetHeight,i=s+o,l=document.documentElement.clientHeight;let c=window.scrollY+l;c-=10,i>c&&(s=c-o,s=Math.max(window.scrollY+10,s)),this.position={x:n,y:s}},showRuneword(e,t){this.runeword=e,this.$nextTick(()=>{this.moveTo(t),this.isVisible=!0})},setVisible(e){this.isVisible=e}}}),iu={class:"rw-RunewordPopup-title"},lu=["innerHTML"],au=["innerHTML"];function cu(e,t,n,s,r,o){return x(),F("div",{ref:"root",class:"rw-RunewordPopup absolute",style:At({visibility:e.isVisible?"visible":"hidden",left:e.unitPx(e.position.x),top:e.unitPx(e.position.y)}),onClick:t[0]||(t[0]=i=>e.setVisible(!1))},[S("h3",iu,ee(e.runeword.title),1),S("div",{class:"rw-RunewordPopup-type",innerHTML:e.runeword.ttypes},null,8,lu),S("div",{class:"rw-RunewordPopup-body",innerHTML:e.formatBody},null,8,au)],4)}const uu=de(ou,[["render",cu]]),fu=Ve({name:"RunewordsTable",components:{IconArrowDown:Uc,IconArrowUp:$c,IconCancel:To,IconCheckOn:Xc,IconCheckOff:su,RunewordPopup:uu},props:{items:{type:Array,required:!0}},data(){return{haveRunes:re.state.haveRunes,pinnedRunewords:re.state.pinned,sortKey:"level",sortAsc:!0,tableHeads:[{key:"title",label:"Runeword",textLeft:!0},{key:"rune0",label:"Rune"},{key:"rune1",label:"Rune"},{key:"rune2",label:"Rune"},{key:"rune3",label:"Rune"},{key:"rune4",label:"Rune"},{key:"rune5",label:"Rune"},{key:"ttypes",label:"Item Types"},{key:"level",label:"Level"}],envGameVersion:"2.6"}},computed:{runewordIsComplete(){const e=new Map;return this.items.forEach(t=>{e.set(t.title,t.runes.every(n=>this.haveRunes[n]))}),e},runesData(){const e=new Map;return Rn.forEach(t=>{e.set(t.name,t)}),e},itemsBySort(){const e=this.items.slice();let t;if(this.sortKey==="title")t=({title:r},{title:o})=>r===o?0:r>o?1:-1;else if(this.sortKey==="level")t=({level:r},{level:o})=>r===o?0:r>o?1:-1;else if(this.sortKey==="ttypes")t=({ttypes:r},{ttypes:o})=>r[0]===o[0]?0:r[0]>o[0]?1:-1;else if(/rune(\d)/.test(this.sortKey)){const r=parseInt(RegExp.$1);t=({runes:o},{runes:i})=>{const l=o[r],c=i[r];return l===c?0:l>c?1:-1}}t&&e.sort(t),!this.sortAsc&&e.reverse();const n=[...e.filter(r=>this.runewordIsComplete.get(r.title)),...e.filter(r=>!this.runewordIsComplete.get(r.title))];return[...n.filter(r=>this.pinnedRunewords.has(r.title)),...n.filter(r=>!this.pinnedRunewords.has(r.title))]},refPopup(){return this.$refs.popup}},methods:{cssActiveRune(e){return this.haveRunes[e]?"is-active":""},isActiveRuneWord(e){if(!re.state.hideIfNotHave)return!0;const t=Object.keys(this.haveRunes).filter(n=>this.haveRunes[n]);return t.length==0||t.some(n=>e.runes.includes(n))},cssCompleteRuneword(e){return this.runewordIsComplete.get(e.title)?"is-complete":""},getTypeCellHtml(e){let t=e.ttypes.map(n=>{var r;const s=n.replace(" ","&nbsp;");return(r=pr[n])!=null&&r.url?`<a href="${pr[n].url}" target="_blank">${s}</a>`:s}).join("&nbsp;/&nbsp;");return e.tinfos&&(t+=`<br><span class="rw-Table-tdTypeClass">${e.tinfos}</span>`),t},isSortKey(e){return e===this.sortKey},onEnterRuneword(e,t){e.target&&this.refPopup.showRuneword(t,e.target)},onLeaveRuneword(){this.refPopup.setVisible(!1)},onSortBy(e){this.sortAsc=this.sortKey===e?!this.sortAsc:!0,this.sortKey=e},onTogglePin(e){const t=re.isPinned(e);re.setPinned([e],!t),re.saveState()},unpinAll(){const e=re.getPinned();re.setPinned(e,!1),re.saveState()}}}),du={class:"rw-Table w-full"},hu=["onClick"],pu={key:0,class:"rw-Table-thIcon"},mu={key:1,class:"rw-Table-thIcon"},gu={key:0,class:"rw-Table-tr"},vu={class:"rw-Table-td",colspan:"9"},yu={class:"text-center mt-6 py-2 relative"},Tu=S("span",{class:"text-md text-gold tracking-[.2em]"},"PINNED RUNEWORDS",-1),Cu={key:1,class:"rw-Table-tr"},Su=S("td",{class:"rw-Table-td",colspan:"9"},[S("div",{class:"text-center text-md text-gold tracking-[.2em] mt-6 py-2"},"ALL RUNEWORDS")],-1),Au=[Su],Ru={class:"rw-Table-td rw-Table-tdTitle p-0 text-left relative min-w-[10em]"},_u=["onMouseenter","onClick"],bu={key:0,class:"rw-Md-ladder",title:"Ladder Only"},wu=["onClick"],Du=["onClick"],Lu=["innerHTML"],Mu={class:"rw-Table-td"};function Eu(e,t,n,s,r,o){const i=ue("runeword-popup"),l=ue("icon-arrow-down"),c=ue("icon-arrow-up"),f=ue("icon-cancel"),d=ue("icon-check-on"),m=ue("icon-check-off");return x(),F(oe,null,[N(i,{ref:"popup"},null,512),S("table",du,[S("thead",null,[S("tr",null,[(x(!0),F(oe,null,Ct(e.tableHeads,p=>(x(),F("th",{key:p.key,class:Te(["rw-Table-th cursor-pointer",{"is-sortCol":e.isSortKey(p.key),"text-left":p.textLeft}]),onClick:b=>e.onSortBy(p.key)},[pt(ee(p.label)+" ",1),e.isSortKey(p.key)&&e.sortAsc?(x(),F("span",pu,[N(l,{class:"ux-icon ux-icon--fw"})])):Fe("",!0),e.isSortKey(p.key)&&!e.sortAsc?(x(),F("span",mu,[N(c,{class:"ux-icon ux-icon--fw"})])):Fe("",!0)],10,hu))),128))])]),S("tbody",null,[(x(!0),F(oe,null,Ct(e.itemsBySort,(p,b)=>{var P,I,te,G,Y,W;return x(),F(oe,{key:b},[e.pinnedRunewords.size&&b===0?(x(),F("tr",gu,[S("td",vu,[S("div",yu,[Tu,S("a",{class:"rw-Runes-clear absolute right-0 top-1",href:"#",onClick:t[0]||(t[0]=vs((...$)=>e.unpinAll&&e.unpinAll(...$),["prevent"]))},[N(f,{class:"ux-icon ux-icon--fw rw-Runes-clearIcon text-[#da0000] mr-1"}),pt("unpin all ")])])])])):Fe("",!0),e.pinnedRunewords.size&&b===e.pinnedRunewords.size?(x(),F("tr",Cu,Au)):Fe("",!0),S("tr",{class:Te(["rw-Table-tr",e.cssCompleteRuneword(p)]),style:At({display:p.filterMatch&&e.isActiveRuneWord(p)?"":"none"})},[S("td",Ru,[S("span",{class:"rw-Table-tdTitleSpan cursor-pointer",onMouseenter:$=>e.onEnterRuneword($,p),onMouseleave:t[1]||(t[1]=$=>e.onLeaveRuneword()),onClick:$=>e.onEnterRuneword($,p)},ee(p.title),41,_u),p.ladder?(x(),F("span",bu,"L")):Fe("",!0),p.version?(x(),F("span",{key:1,class:Te(["rw-Table-tdTitlePatch",{"is-new":p.version===e.envGameVersion}]),title:"Patch version"},ee(p.version),3)):Fe("",!0),e.pinnedRunewords.has(p.title)?(x(),F("div",{key:2,class:"rw-Table-pin is-pinned",onClick:$=>e.onTogglePin(p.title)},[N(d,{class:"rw-Table-pinIcon"})],8,wu)):(x(),F("div",{key:3,class:"rw-Table-pin",onClick:$=>e.onTogglePin(p.title)},[N(m,{class:"rw-Table-pinIcon"})],8,Du))]),S("td",{class:Te(["rw-Table-td is-rune",e.cssActiveRune(p.runes[0])])},ee((P=e.runesData.get(p.runes[0]))==null?void 0:P.fname),3),S("td",{class:Te(["rw-Table-td is-rune",e.cssActiveRune(p.runes[1])])},ee((I=e.runesData.get(p.runes[1]))==null?void 0:I.fname),3),S("td",{class:Te(["rw-Table-td is-rune",e.cssActiveRune(p.runes[2])])},ee((te=e.runesData.get(p.runes[2]))==null?void 0:te.fname),3),S("td",{class:Te(["rw-Table-td is-rune",e.cssActiveRune(p.runes[3])])},ee((G=e.runesData.get(p.runes[3]))==null?void 0:G.fname),3),S("td",{class:Te(["rw-Table-td is-rune",e.cssActiveRune(p.runes[4])])},ee((Y=e.runesData.get(p.runes[4]))==null?void 0:Y.fname),3),S("td",{class:Te(["rw-Table-td is-rune",e.cssActiveRune(p.runes[5])])},ee((W=e.runesData.get(p.runes[5]))==null?void 0:W.fname),3),S("td",{class:"rw-Table-td rw-Table-tdType min-w-[10em]",innerHTML:e.getTypeCellHtml(p)},null,8,Lu),S("td",Mu,ee(p.level),1)],6)],64)}),128))])])],64)}const xu=de(fu,[["render",Eu]]),ku=Ve({name:"Runewords",components:{RunewordsTable:xu},data(){return{isHelpVisible:!1,runewordsList:[],searchText:"",version:"LOD",itype:"ALL"}},computed:{ITypes(){const e=Hc();return e.unshift("ALL"),e},VerList(){let e=Object.keys(On);return e.unshift("ALL"),e},Vers(){return On[this.version]}},created(){this.runewordsList=Co.slice(),this.updateFilter(this.searchText,this.version)},methods:{onSearchInput(){this.updateFilter(this.searchText,this.version)},updateFilter(e,t){const n=On[t]||[],s=e.toLowerCase(),r=o=>{const i=o.title.toLowerCase().includes(s),l=o.ttypes.some(d=>d.toLowerCase().includes(s)),c=t=="ALL"||n.includes(o.version||""),f=this.itype==="ALL"||o.ttypes.includes(this.itype);return c&&f&&(s===""||i||l)};this.runewordsList.forEach(o=>{o.filterMatch=r(o)})}}}),Hu={class:"rw-Search flex items-center mb-4"},Fu=S("label",{class:"text-gold whitespace-nowrap mr-4"},ee("Search"),-1),Iu={class:"rw-Search flex items-center mb-8 justify-right"},Bu=S("label",{class:"text-gold whitespace-nowrap"},"Item type",-1),Ou=["value"],Pu=S("label",{class:"text-gold whitespace-nowrap"},ee("Version"),-1),$u=["value"];function Wu(e,t,n,s,r,o){const i=ue("runewords-table");return x(),F("div",null,[S("div",Hu,[Fu,En(S("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>e.searchText=l),type:"text",class:"rw-Search-input",onInput:t[1]||(t[1]=(...l)=>e.onSearchInput&&e.onSearchInput(...l))},null,544),[[Xl,e.searchText]])]),S("div",Iu,[Bu,En(S("select",{"onUpdate:modelValue":t[2]||(t[2]=l=>e.itype=l),class:"rw-Search-select mr-4",onChange:t[3]||(t[3]=(...l)=>e.onSearchInput&&e.onSearchInput(...l))},[(x(!0),F(oe,null,Ct(e.ITypes,l=>(x(),F("option",{key:l,value:l},ee(l),9,Ou))),128))],544),[[ur,e.itype]]),Pu,En(S("select",{"onUpdate:modelValue":t[4]||(t[4]=l=>e.version=l),class:"rw-Search-select",onChange:t[5]||(t[5]=(...l)=>e.onSearchInput&&e.onSearchInput(...l))},[(x(!0),F(oe,null,Ct(e.VerList,l=>(x(),F("option",{key:l,value:l},ee(l),9,$u))),128))],544),[[ur,e.version]])]),S("div",null,[N(i,{items:e.runewordsList},null,8,["items"])])])}const Vu=de(ku,[["render",Wu]]),Nu=Ve({name:"App",components:{AppHeader:Ga,AppFooter:ac,Runes:kc,Runewords:Vu},computed:{useLayoutHeader(){return!0}}}),qu={class:"rw-Layout-rowContainer rw-Main py-4 flex mb-24"},Ku={class:"mr-16"},Uu={class:"overflow-auto flex-1"};function Gu(e,t,n,s,r,o){const i=ue("app-header"),l=ue("runes"),c=ue("runewords"),f=ue("app-footer");return x(),F(oe,null,[e.useLayoutHeader?(x(),po(i,{key:0})):Fe("",!0),S("main",qu,[S("div",Ku,[N(l)]),S("div",Uu,[N(c)])]),N(f)],64)}const zu=de(Nu,[["render",Gu]]),ju=()=>{re.initialize(),re.loadState()};ju();na(zu).mount("#app");
