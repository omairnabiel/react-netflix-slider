(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[2],{"/jkW":function(t,e,r){"use strict";e.__esModule=!0,e.isDynamicRoute=function(t){return n.test(t)};const n=/\/\[[^/]+?\](?=\/|$)/},"0Bsm":function(t,e,r){"use strict";var n=r("AroE");e.__esModule=!0,e.default=function(t){function e(e){return o.default.createElement(t,Object.assign({router:(0,s.useRouter)()},e))}e.getInitialProps=t.getInitialProps,e.origGetInitialProps=t.origGetInitialProps,!1;return e};var o=n(r("q1tI")),s=r("nOHt")},"0G5g":function(t,e,r){"use strict";e.__esModule=!0,e.default=void 0;var n="undefined"!==typeof self&&self.requestIdleCallback||function(t){let e=Date.now();return setTimeout((function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})}),1)};e.default=n},"3WeD":function(t,e,r){"use strict";function n(t){return"string"===typeof t||"number"===typeof t&&!isNaN(t)||"boolean"===typeof t?String(t):""}e.__esModule=!0,e.searchParamsToUrlQuery=function(t){const e={};return t.forEach(((t,r)=>{"undefined"===typeof e[r]?e[r]=t:Array.isArray(e[r])?e[r].push(t):e[r]=[e[r],t]})),e},e.urlQueryToSearchParams=function(t){const e=new URLSearchParams;return Object.entries(t).forEach((([t,r])=>{Array.isArray(r)?r.forEach((r=>e.append(t,n(r)))):e.set(t,n(r))})),e},e.assign=function(t,...e){return e.forEach((e=>{Array.from(e.keys()).forEach((e=>t.delete(e))),e.forEach(((e,r)=>t.append(r,e)))})),t}},"3wub":function(t,e,r){"use strict";e.__esModule=!0,e.normalizeLocalePath=function(t,e){let r;const n=t.split("/");return(e||[]).some((e=>n[1].toLowerCase()===e.toLowerCase()&&(r=e,n.splice(1,1),t=n.join("/")||"/",!0))),{pathname:t,detectedLocale:r}}},"6D7l":function(t,e,r){"use strict";e.__esModule=!0,e.formatUrl=function(t){let{auth:e,hostname:r}=t,o=t.protocol||"",a=t.pathname||"",i=t.hash||"",c=t.query||"",l=!1;e=e?encodeURIComponent(e).replace(/%3A/i,":")+"@":"",t.host?l=e+t.host:r&&(l=e+(~r.indexOf(":")?`[${r}]`:r),t.port&&(l+=":"+t.port));c&&"object"===typeof c&&(c=String(n.urlQueryToSearchParams(c)));let u=t.search||c&&`?${c}`||"";o&&":"!==o.substr(-1)&&(o+=":");t.slashes||(!o||s.test(o))&&!1!==l?(l="//"+(l||""),a&&"/"!==a[0]&&(a="/"+a)):l||(l="");i&&"#"!==i[0]&&(i="#"+i);u&&"?"!==u[0]&&(u="?"+u);return a=a.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${o}${l}${a}${u}${i}`};var n=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=o();if(e&&e.has(t))return e.get(t);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){var a=n?Object.getOwnPropertyDescriptor(t,s):null;a&&(a.get||a.set)?Object.defineProperty(r,s,a):r[s]=t[s]}r.default=t,e&&e.set(t,r);return r}(r("3WeD"));function o(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return o=function(){return t},t}const s=/https?|ftp|gopher|file/},"7KCV":function(t,e,r){var n=r("C+bE");function o(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return o=function(){return t},t}t.exports=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==n(t)&&"function"!==typeof t)return{default:t};var e=o();if(e&&e.has(t))return e.get(t);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var i=s?Object.getOwnPropertyDescriptor(t,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=t[a]}return r.default=t,e&&e.set(t,r),r}},AroE:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},"C+bE":function(t,e){function r(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=r=function(t){return typeof t}:t.exports=r=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(e)}t.exports=r},GXs3:function(t,e,r){"use strict";e.__esModule=!0,e.default=function(){}},Lab5:function(t,e,r){"use strict";e.__esModule=!0,e.default=function(t,e=""){return("/"===t?"/index":/^\/index(\/|$)/.test(t)?`/index${t}`:`${t}`)+e}},Nh2W:function(t,e,r){"use strict";var n=r("AroE");e.__esModule=!0,e.markAssetError=c,e.isAssetError=function(t){return t&&i in t},e.getClientBuildManifest=u,e.default=void 0;n(r("Lab5"));var o=n(r("0G5g"));function s(t,e,r){let n,o=e.get(t);if(o)return"future"in o?o.future:Promise.resolve(o);const s=new Promise((t=>{n=t}));return e.set(t,o={resolve:n,future:s}),r?r().then((t=>(n(t),t))):s}const a=function(t){try{return t=document.createElement("link"),!!window.MSInputMethodContext&&!!document.documentMode||t.relList.supports("prefetch")}catch(e){return!1}}();const i=Symbol("ASSET_LOAD_ERROR");function c(t){return Object.defineProperty(t,i,{})}function l(t,e){return new Promise(((r,n)=>(0,o.default)((()=>setTimeout((()=>n(e)),t)))))}function u(){if(self.__BUILD_MANIFEST)return Promise.resolve(self.__BUILD_MANIFEST);const t=new Promise((t=>{const e=self.__BUILD_MANIFEST_CB;self.__BUILD_MANIFEST_CB=()=>{t(self.__BUILD_MANIFEST),e&&e()}}));return Promise.race([t,l(3800,c(new Error("Failed to load client build manifest")))])}function h(t,e){return u().then((r=>{if(!(e in r))throw c(new Error(`Failed to lookup route: ${e}`));const n=r[e].map((e=>t+"/_next/"+encodeURI(e)));return{scripts:n.filter((t=>t.endsWith(".js"))),css:n.filter((t=>t.endsWith(".css")))}}))}var p=function(t){const e=new Map,r=new Map,n=new Map,i=new Map;function u(t){let e=r.get(t);return e||(document.querySelector(`script[src^="${t}"]`)?Promise.resolve():(r.set(t,e=function(t,e){return new Promise(((r,n)=>{(e=document.createElement("script")).onload=r,e.onerror=()=>n(c(new Error(`Failed to load script: ${t}`))),e.crossOrigin=void 0,e.src=t,document.body.appendChild(e)}))}(t)),e))}function p(t){let e=n.get(t);return e||(n.set(t,e=fetch(t).then((e=>{if(!e.ok)throw new Error(`Failed to load stylesheet: ${t}`);return e.text().then((e=>({href:t,content:e})))})).catch((t=>{throw c(t)}))),e)}return{whenEntrypoint:t=>s(t,e),onEntrypoint(t,r){Promise.resolve(r).then((t=>t())).then((t=>({component:t&&t.default||t,exports:t})),(t=>({error:t}))).then((r=>{const n=e.get(t);e.set(t,r),n&&"resolve"in n&&n.resolve(r)}))},loadRoute(r){return s(r,i,(async()=>{try{const{scripts:n,css:o}=await h(t,r),[,s]=await Promise.all([e.has(r)?[]:Promise.all(n.map(u)),Promise.all(o.map(p))]),a=await Promise.race([this.whenEntrypoint(r),l(3800,c(new Error(`Route did not complete loading: ${r}`)))]),i=Object.assign({styles:s},a);return"error"in a?a:i}catch(n){return{error:n}}}))},prefetch(e){let r;return(r=navigator.connection)&&(r.saveData||/2g/.test(r.effectiveType))?Promise.resolve():h(t,e).then((t=>Promise.all(a?t.scripts.map((t=>{return e=t,r="script",new Promise(((t,o)=>{if(document.querySelector(`link[rel="prefetch"][href^="${e}"]`))return t();n=document.createElement("link"),r&&(n.as=r),n.rel="prefetch",n.crossOrigin=void 0,n.onload=t,n.onerror=o,n.href=e,document.head.appendChild(n)}));var e,r,n})):[]))).then((()=>{(0,o.default)((()=>this.loadRoute(e)))})).catch((()=>{}))}}};e.default=p},Qetd:function(t,e,r){"use strict";var n=Object.assign.bind(Object);t.exports=n,t.exports.default=t.exports},"X24+":function(t,e,r){"use strict";function n(t){return t.endsWith("/")&&"/"!==t?t.slice(0,-1):t}e.__esModule=!0,e.removePathTrailingSlash=n,e.normalizePathTrailingSlash=void 0;const o=n;e.normalizePathTrailingSlash=o},YTqd:function(t,e,r){"use strict";e.__esModule=!0,e.getRouteRegex=function(t){const e=(t.replace(/\/$/,"")||"/").slice(1).split("/"),r={};let n=1;const o=e.map((t=>{if(t.startsWith("[")&&t.endsWith("]")){const{key:e,optional:o,repeat:s}=function(t){const e=t.startsWith("[")&&t.endsWith("]");e&&(t=t.slice(1,-1));const r=t.startsWith("...");r&&(t=t.slice(3));return{key:t,repeat:r,optional:e}}(t.slice(1,-1));return r[e]={pos:n++,repeat:s,optional:o},s?o?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}return`/${e=t,e.replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")}`;var e})).join("");0;return{re:new RegExp(`^${o}(?:/)?$`),groups:r}}},dZ6Y:function(t,e,r){"use strict";e.__esModule=!0,e.default=function(){const t=Object.create(null);return{on(e,r){(t[e]||(t[e]=[])).push(r)},off(e,r){t[e]&&t[e].splice(t[e].indexOf(r)>>>0,1)},emit(e,...r){(t[e]||[]).slice().map((t=>{t(...r)}))}}}},elyg:function(t,e,r){"use strict";e.__esModule=!0,e.getDomainLocale=function(t,e,r,n){0;return!1},e.addLocale=m,e.delLocale=g,e.hasBasePath=y,e.addBasePath=w,e.delBasePath=v,e.isLocalURL=P,e.interpolateAs=S,e.resolveHref=R,e.default=void 0;var n=r("X24+"),o=r("Nh2W"),s=r("wkBG"),a=(r("3wub"),f(r("dZ6Y"))),i=r("g/15"),c=r("/jkW"),l=r("hS4m"),u=r("3WeD"),h=(f(r("GXs3")),r("gguc")),p=r("YTqd");function f(t){return t&&t.__esModule?t:{default:t}}function d(){return Object.assign(new Error("Route Cancelled"),{cancelled:!0})}function m(t,e,r){return t}function g(t,e){return t}function _(t){const e=t.indexOf("?"),r=t.indexOf("#");return(e>-1||r>-1)&&(t=t.substring(0,e>-1?e:r)),t}function y(t){return""===(t=_(t))||t.startsWith("/")}function w(t){return function(t,e){return e&&t.startsWith("/")?"/"===t?(0,n.normalizePathTrailingSlash)(e):`${e}${"/"===_(t)?t.substring(1):t}`:t}(t,"")}function v(t){return(t=t.slice("".length)).startsWith("/")||(t=`/${t}`),t}function P(t){if(t.startsWith("/")||t.startsWith("#"))return!0;try{const e=(0,i.getLocationOrigin)(),r=new URL(t,e);return r.origin===e&&y(r.pathname)}catch(e){return!1}}function S(t,e,r){let n="";const o=(0,p.getRouteRegex)(t),s=o.groups,a=(e!==t?(0,h.getRouteMatcher)(o)(e):"")||r;n=t;const i=Object.keys(s);return i.every((t=>{let e=a[t]||"";const{repeat:r,optional:o}=s[t];let i=`[${r?"...":""}${t}]`;return o&&(i=`${e?"":"/"}[${i}]`),r&&!Array.isArray(e)&&(e=[e]),(o||t in a)&&(n=n.replace(i,r?e.map((t=>encodeURIComponent(t))).join("/"):encodeURIComponent(e))||"/")}))||(n=""),{params:i,result:n}}function b(t,e){const r={};return Object.keys(t).forEach((n=>{e.includes(n)||(r[n]=t[n])})),r}function R(t,e,r){const o=new URL(t,"http://n"),s="string"===typeof e?e:(0,i.formatWithValidation)(e);if(!P(s))return r?[s]:s;try{const t=new URL(s,o);t.pathname=(0,n.normalizePathTrailingSlash)(t.pathname);let e="";if((0,c.isDynamicRoute)(t.pathname)&&t.searchParams&&r){const r=(0,u.searchParamsToUrlQuery)(t.searchParams),{result:n,params:o}=S(t.pathname,t.pathname,r);n&&(e=(0,i.formatWithValidation)({pathname:n,hash:t.hash,query:b(r,o)}))}const a=t.origin===o.origin?t.href.slice(t.origin.length):t.href;return r?[a,e||a]:a}catch(a){return r?[s]:s}}function E(t){const e=(0,i.getLocationOrigin)();return t.startsWith(e)?t.substring(e.length):t}function C(t,e,r){let[n,o]=R(t.pathname,e,!0);const s=(0,i.getLocationOrigin)(),a=n.startsWith(s),c=o&&o.startsWith(s);n=E(n),o=o?E(o):o;const l=a?n:w(n),u=r?E(R(t.pathname,r)):o||n;return{url:l,as:c?u:w(u)}}const L=Symbol("SSG_DATA_NOT_FOUND");function O(t,e){return fetch(t,{credentials:"same-origin"}).then((r=>{if(!r.ok){if(e>1&&r.status>=500)return O(t,e-1);if(404===r.status)return r.json().then((t=>{if(t.notFound)return{notFound:L};throw new Error("Failed to load static props")}));throw new Error("Failed to load static props")}return r.json()}))}function x(t,e){return O(t,e?3:1).catch((t=>{throw e||(0,o.markAssetError)(t),t}))}class I{constructor(t,e,r,{initialProps:o,pageLoader:s,App:a,wrapApp:u,Component:h,err:p,subscription:f,isFallback:d,locale:m,locales:g,defaultLocale:_,domainLocales:y}){this.route=void 0,this.pathname=void 0,this.query=void 0,this.asPath=void 0,this.basePath=void 0,this.components=void 0,this.sdc={},this.sub=void 0,this.clc=void 0,this.pageLoader=void 0,this._bps=void 0,this.events=void 0,this._wrapApp=void 0,this.isSsr=void 0,this.isFallback=void 0,this._inFlightRoute=void 0,this._shallow=void 0,this.locale=void 0,this.locales=void 0,this.defaultLocale=void 0,this.domainLocales=void 0,this.isReady=void 0,this._idx=0,this.onPopState=t=>{const e=t.state;if(!e){const{pathname:t,query:e}=this;return void this.changeState("replaceState",(0,i.formatWithValidation)({pathname:w(t),query:e}),(0,i.getURL)())}if(!e.__N)return;const{url:r,as:n,options:o,idx:s}=e;this._idx=s;const{pathname:a}=(0,l.parseRelativeUrl)(r);this.isSsr&&n===this.asPath&&a===this.pathname||this._bps&&!this._bps(e)||this.change("replaceState",r,n,Object.assign({},o,{shallow:o.shallow&&this._shallow,locale:o.locale||this.defaultLocale}),undefined)},this.route=(0,n.removePathTrailingSlash)(t),this.components={},"/_error"!==t&&(this.components[this.route]={Component:h,initial:!0,props:o,err:p,__N_SSG:o&&o.__N_SSG,__N_SSP:o&&o.__N_SSP}),this.components["/_app"]={Component:a,styleSheets:[]},this.events=I.events,this.pageLoader=s,this.pathname=t,this.query=e;const v=(0,c.isDynamicRoute)(t)&&self.__NEXT_DATA__.autoExport;this.asPath=v?t:r,this.basePath="",this.sub=f,this.clc=null,this._wrapApp=u,this.isSsr=!0,this.isFallback=d,this.isReady=!(!self.__NEXT_DATA__.gssp&&!self.__NEXT_DATA__.gip&&(v||self.location.search)),"//"!==r.substr(0,2)&&this.changeState("replaceState",(0,i.formatWithValidation)({pathname:w(t),query:e}),(0,i.getURL)(),{locale:m}),window.addEventListener("popstate",this.onPopState)}reload(){window.location.reload()}back(){window.history.back()}push(t,e,r={}){return({url:t,as:e}=C(this,t,e)),this.change("pushState",t,e,r)}replace(t,e,r={}){return({url:t,as:e}=C(this,t,e)),this.change("replaceState",t,e,r)}async change(t,e,r,s,a){var u;if(!P(e))return window.location.href=e,!1;s._h&&(this.isReady=!0),s.scroll=!(null!=(u=s.scroll)&&!u);let f=s.locale!==this.locale;s._h||(this.isSsr=!1),i.ST&&performance.mark("routeChange");const{shallow:d=!1}=s,_={shallow:d};this._inFlightRoute&&this.abortComponentLoad(this._inFlightRoute,_),r=w(m(y(r)?v(r):r,s.locale,this.defaultLocale));const R=g(y(r)?v(r):r,this.locale);if(this._inFlightRoute=r,!s._h&&this.onlyAHashChange(R))return this.asPath=R,I.events.emit("hashChangeStart",r,_),this.changeState(t,e,r,s),this.scrollToHash(R),this.notify(this.components[this.route],null),I.events.emit("hashChangeComplete",r,_),!0;let E,O,x=(0,l.parseRelativeUrl)(e),{pathname:T,query:A}=x;try{E=await this.pageLoader.getPageList(),({__rewrites:O}=await(0,o.getClientBuildManifest)())}catch(j){return window.location.href=r,!1}x=this._resolveHref(x,E),x.pathname!==T&&(T=x.pathname,e=(0,i.formatWithValidation)(x)),T=T?(0,n.removePathTrailingSlash)(v(T)):T,this.urlIsNew(R)||f||(t="replaceState");let M=(0,n.removePathTrailingSlash)(T),$=r;if(!P(r))return window.location.href=r,!1;if($=g(v($),this.locale),(0,c.isDynamicRoute)(M)){const t=(0,l.parseRelativeUrl)($),n=t.pathname,o=(0,p.getRouteRegex)(M),s=(0,h.getRouteMatcher)(o)(n),a=M===n,c=a?S(M,n,A):{};if(!s||a&&!c.result){const t=Object.keys(o.groups).filter((t=>!A[t]));if(t.length>0)throw new Error((a?`The provided \`href\` (${e}) value is missing query values (${t.join(", ")}) to be interpolated properly. `:`The provided \`as\` value (${n}) is incompatible with the \`href\` value (${M}). `)+"Read more: https://err.sh/vercel/next.js/"+(a?"href-interpolation-failed":"incompatible-href-as"))}else a?r=(0,i.formatWithValidation)(Object.assign({},t,{pathname:c.result,query:b(A,c.params)})):Object.assign(A,s)}I.events.emit("routeChangeStart",r,_);try{let n=await this.getRouteInfo(M,T,A,r,$,_),{error:o,props:i,__N_SSG:c,__N_SSP:u}=n;if((c||u)&&i){if(i.pageProps&&i.pageProps.__N_REDIRECT){const e=i.pageProps.__N_REDIRECT;if(e.startsWith("/")){const r=(0,l.parseRelativeUrl)(e);if(this._resolveHref(r,E,!1),E.includes(r.pathname)){const{url:r,as:n}=C(this,e,e);return this.change(t,r,n,s)}}return window.location.href=e,new Promise((()=>{}))}if(i.notFound===L){let t;try{await this.fetchComponent("/404"),t="/404"}catch(D){t="/_error"}n=await this.getRouteInfo(t,t,A,r,$,{shallow:!1})}}I.events.emit("beforeHistoryChange",r,_),this.changeState(t,e,r,s);const h=s.shallow&&this.route===M;if(await this.set(M,T,A,R,n,a||(h||!s.scroll?null:{x:0,y:0})).catch((t=>{if(!t.cancelled)throw t;o=o||t})),o)throw I.events.emit("routeChangeError",o,R,_),o;return I.events.emit("routeChangeComplete",r,_),!0}catch(j){if(j.cancelled)return!1;throw j}}changeState(t,e,r,n={}){"pushState"===t&&(0,i.getURL)()===r||(this._shallow=n.shallow,window.history[t]({url:e,as:r,options:n,__N:!0,idx:this._idx="pushState"!==t?this._idx:this._idx+1},"",r))}async handleRouteInfoError(t,e,r,n,s,a){if(t.cancelled)throw t;if((0,o.isAssetError)(t)||a)throw I.events.emit("routeChangeError",t,n,s),window.location.href=n,d();try{let n,o,s;"undefined"!==typeof n&&"undefined"!==typeof o||({page:n,styleSheets:o}=await this.fetchComponent("/_error"));const a={props:s,Component:n,styleSheets:o,err:t,error:t};if(!a.props)try{a.props=await this.getInitialProps(n,{err:t,pathname:e,query:r})}catch(i){console.error("Error in error page `getInitialProps`: ",i),a.props={}}return a}catch(c){return this.handleRouteInfoError(c,e,r,n,s,!0)}}async getRouteInfo(t,e,r,n,o,s){try{const a=this.components[t];if(s.shallow&&a&&this.route===t)return a;const c=a&&"initial"in a?void 0:a,l=c||await this.fetchComponent(t).then((t=>({Component:t.page,styleSheets:t.styleSheets,__N_SSG:t.mod.__N_SSG,__N_SSP:t.mod.__N_SSP}))),{Component:u,__N_SSG:h,__N_SSP:p}=l;let f;0,(h||p)&&(f=this.pageLoader.getDataHref((0,i.formatWithValidation)({pathname:e,query:r}),o,h,this.locale));const d=await this._getData((()=>h?this._getStaticData(f):p?this._getServerData(f):this.getInitialProps(u,{pathname:e,query:r,asPath:n})));return l.props=d,this.components[t]=l,l}catch(a){return this.handleRouteInfoError(a,e,r,n,s)}}set(t,e,r,n,o,s){return this.isFallback=!1,this.route=t,this.pathname=e,this.query=r,this.asPath=n,this.notify(o,s)}beforePopState(t){this._bps=t}onlyAHashChange(t){if(!this.asPath)return!1;const[e,r]=this.asPath.split("#"),[n,o]=t.split("#");return!(!o||e!==n||r!==o)||e===n&&r!==o}scrollToHash(t){const[,e]=t.split("#");if(""===e)return void window.scrollTo(0,0);const r=document.getElementById(e);if(r)return void r.scrollIntoView();const n=document.getElementsByName(e)[0];n&&n.scrollIntoView()}urlIsNew(t){return this.asPath!==t}_resolveHref(t,e,r=!0){const{pathname:o}=t,a=(0,n.removePathTrailingSlash)((0,s.denormalizePagePath)(r?v(o):o));return"/404"===a||"/_error"===a||(e.includes(a)||e.some((e=>{if((0,c.isDynamicRoute)(e)&&(0,p.getRouteRegex)(e).re.test(a))return t.pathname=r?w(e):e,!0})),t.pathname=(0,n.removePathTrailingSlash)(t.pathname)),t}async prefetch(t,e=t,r={}){let o=(0,l.parseRelativeUrl)(t),{pathname:s}=o;const a=await this.pageLoader.getPageList();o=this._resolveHref(o,a,!1),o.pathname!==s&&(s=o.pathname,t=(0,i.formatWithValidation)(o));const c=(0,n.removePathTrailingSlash)(s);await Promise.all([this.pageLoader._isSsg(t).then((n=>!!n&&this._getStaticData(this.pageLoader.getDataHref(t,e,!0,"undefined"!==typeof r.locale?r.locale:this.locale)))),this.pageLoader[r.priority?"loadPage":"prefetch"](c)])}async fetchComponent(t){let e=!1;const r=this.clc=()=>{e=!0},n=await this.pageLoader.loadPage(t);if(e){const e=new Error(`Abort fetching component for route: "${t}"`);throw e.cancelled=!0,e}return r===this.clc&&(this.clc=null),n}_getData(t){let e=!1;const r=()=>{e=!0};return this.clc=r,t().then((t=>{if(r===this.clc&&(this.clc=null),e){const t=new Error("Loading initial props cancelled");throw t.cancelled=!0,t}return t}))}_getStaticData(t){const{href:e}=new URL(t,window.location.href);return this.sdc[e]?Promise.resolve(this.sdc[e]):x(t,this.isSsr).then((t=>(this.sdc[e]=t,t)))}_getServerData(t){return x(t,this.isSsr)}getInitialProps(t,e){const{Component:r}=this.components["/_app"],n=this._wrapApp(r);return e.AppTree=n,(0,i.loadGetInitialProps)(r,{AppTree:n,Component:t,router:this,ctx:e})}abortComponentLoad(t,e){this.clc&&(I.events.emit("routeChangeError",d(),t,e),this.clc(),this.clc=null)}notify(t,e){return this.sub(t,this.components["/_app"].Component,e)}}e.default=I,I.events=(0,a.default)()},"g/15":function(t,e,r){"use strict";e.__esModule=!0,e.execOnce=function(t){let e,r=!1;return(...n)=>(r||(r=!0,e=t(...n)),e)},e.getLocationOrigin=o,e.getURL=function(){const{href:t}=window.location,e=o();return t.substring(e.length)},e.getDisplayName=s,e.isResSent=a,e.loadGetInitialProps=async function t(e,r){0;const n=r.res||r.ctx&&r.ctx.res;if(!e.getInitialProps)return r.ctx&&r.Component?{pageProps:await t(r.Component,r.ctx)}:{};const o=await e.getInitialProps(r);if(n&&a(n))return o;if(!o){const t=`"${s(e)}.getInitialProps()" should resolve to an object. But found "${o}" instead.`;throw new Error(t)}0;return o},e.formatWithValidation=function(t){0;return(0,n.formatUrl)(t)},e.ST=e.SP=e.urlObjectKeys=void 0;var n=r("6D7l");function o(){const{protocol:t,hostname:e,port:r}=window.location;return`${t}//${e}${r?":"+r:""}`}function s(t){return"string"===typeof t?t:t.displayName||t.name||"Unknown"}function a(t){return t.finished||t.headersSent}e.urlObjectKeys=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];const i="undefined"!==typeof performance;e.SP=i;const c=i&&"function"===typeof performance.mark&&"function"===typeof performance.measure;e.ST=c},gguc:function(t,e,r){"use strict";e.__esModule=!0,e.getRouteMatcher=function(t){const{re:e,groups:r}=t;return t=>{const n=e.exec(t);if(!n)return!1;const o=t=>{try{return decodeURIComponent(t)}catch(e){const t=new Error("failed to decode param");throw t.code="DECODE_FAILED",t}},s={};return Object.keys(r).forEach((t=>{const e=r[t],a=n[e.pos];void 0!==a&&(s[t]=~a.indexOf("/")?a.split("/").map((t=>o(t))):e.repeat?[o(a)]:o(a))})),s}}},hS4m:function(t,e,r){"use strict";e.__esModule=!0,e.parseRelativeUrl=function(t,e){const r=new URL((0,n.getLocationOrigin)()),s=e?new URL(e,r):r,{pathname:a,searchParams:i,search:c,hash:l,href:u,origin:h}=new URL(t,s);if(h!==r.origin)throw new Error(`invariant: invalid relative URL, router received ${t}`);return{pathname:a,query:(0,o.searchParamsToUrlQuery)(i),search:c,hash:l,href:u.slice(r.origin.length)}};var n=r("g/15"),o=r("3WeD")},nOHt:function(t,e,r){"use strict";var n=r("7KCV"),o=r("AroE");e.__esModule=!0,e.useRouter=function(){return s.default.useContext(i.RouterContext)},e.makePublicRouterInstance=function(t){const e=t,r={};for(const n of u)"object"!==typeof e[n]?r[n]=e[n]:r[n]=Object.assign(Array.isArray(e[n])?[]:{},e[n]);return r.events=a.default.events,h.forEach((t=>{r[t]=(...r)=>e[t](...r)})),r},e.createRouter=e.withRouter=e.default=void 0;var s=o(r("q1tI")),a=n(r("elyg"));e.Router=a.default,e.NextRouter=a.NextRouter;var i=r("qOIg"),c=o(r("0Bsm"));e.withRouter=c.default;const l={router:null,readyCallbacks:[],ready(t){if(this.router)return t();this.readyCallbacks.push(t)}},u=["pathname","route","query","asPath","components","isFallback","basePath","locale","locales","defaultLocale","isReady"],h=["push","replace","reload","back","prefetch","beforePopState"];function p(){if(!l.router){throw new Error('No router instance found.\nYou should only use "next/router" inside the client side of your app.\n')}return l.router}Object.defineProperty(l,"events",{get:()=>a.default.events}),u.forEach((t=>{Object.defineProperty(l,t,{get:()=>p()[t]})})),h.forEach((t=>{l[t]=(...e)=>p()[t](...e)})),["routeChangeStart","beforeHistoryChange","routeChangeComplete","routeChangeError","hashChangeStart","hashChangeComplete"].forEach((t=>{l.ready((()=>{a.default.events.on(t,((...e)=>{const r=`on${t.charAt(0).toUpperCase()}${t.substring(1)}`,n=l;if(n[r])try{n[r](...e)}catch(o){console.error(`Error when running the Router event: ${r}`),console.error(`${o.message}\n${o.stack}`)}}))}))}));var f=l;e.default=f;e.createRouter=(...t)=>(l.router=new a.default(...t),l.readyCallbacks.forEach((t=>t())),l.readyCallbacks=[],l.router)},qOIg:function(t,e,r){"use strict";var n;e.__esModule=!0,e.RouterContext=void 0;const o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext(null);e.RouterContext=o},wkBG:function(t,e,r){"use strict";function n(t){return t.replace(/\\/g,"/")}e.__esModule=!0,e.normalizePathSep=n,e.denormalizePagePath=function(t){(t=n(t)).startsWith("/index/")?t=t.slice(6):"/index"===t&&(t="/");return t}}}]);