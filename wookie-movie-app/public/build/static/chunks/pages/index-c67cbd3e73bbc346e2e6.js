_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"20a2":function(e,t,n){e.exports=n("nOHt")},"23aj":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n("q1tI"),a=n.n(r),o=n("T1Xd"),i=n("LvDl"),l=n("IP2g"),c=n("wHSu");function s({iconType:e,onClick:t,position:n}){return a.a.createElement("div",{className:`flex items-center self-center absolute ${n}-0 top-16 w-1 p-4 mr-5 w-20 z-10 opacity-100 cursor-pointer transform hover:scale-125`,onClick:()=>t()},a.a.createElement(l.a,{icon:"next"===e?c.a:c.b,size:"2x",style:{color:"#a9a9a9"}}))}var u=n("20a2"),d=n("U3PU");function f({movie:e,transform:t}){const n=Object(u.useRouter)(),r=Object(o.e)(d.b);return a.a.createElement("div",{className:"box-border h-52 w-80 border-1 duration-500 shadow-xl cursor-pointer",style:t,onClick:()=>{r({data:e,loading:!1,error:void 0}),n.push(`/detail/${e.id}`)}},a.a.createElement("img",{className:"min-w-full max-h-full",src:e.poster}))}const m=300;function h({movies:e,genre:t}){const[n,o]=Object(r.useState)(0),[i,l]=Object(r.useState)(0),[c,u]=Object(r.useState)(0);Object(r.useEffect)((()=>{l(Math.ceil(e.length-window.innerWidth/m)),u(Math.floor(window.innerWidth/m)),addEventListener("resize",(function(){l(Math.ceil(e.length-window.innerWidth/m)),u(Math.floor(window.innerWidth/m))}))}),[]);return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"mb-16 mt-10 overflow-x-hidden"},a.a.createElement("div",{className:"font-mono font-semibold text-xl ml-2"},t.split(",").join("/")),a.a.createElement("div",{className:"relative w-full ml-2 mr-2"},a.a.createElement(s,{onClick:()=>{const t=Math.floor(window.innerWidth/m);c!==Math.floor(window.innerWidth/m)&&(c-t<t?(o(n+68+m*(t-(c-t))),l(Math.ceil(e.length-window.innerWidth/m)),u(Math.round(window.innerWidth/m))):(o(n+68+m*t),l(i+t),u(c-t)))},iconType:"previous",position:"left"}),a.a.createElement(s,{onClick:()=>{if(i<=0)return;const e=Math.floor(window.innerWidth/m);i>e?(o(-Math.abs(Math.abs(n)+68+m*e)),l(i-e),u(c+e)):(o(-Math.abs(Math.abs(n)+68+m*i)),u(c+i),l(0))},iconType:"next",position:"right"}),a.a.createElement("div",{className:"grid grid-flow-col no-wrap auto-cols-max overflow-visible"},e.length>0?e.map(((e,t)=>{return a.a.createElement(f,{key:e.id,movie:e,transform:(r=n,{transform:`translate(${r}px)`})});var r})):a.a.createElement("div",null,"No Movies")))))}var w=n("MJt5");function p(){const e=Object(o.d)(d.a),t=[];return e.loading?a.a.createElement(w.a,null):a.a.createElement("div",null,(()=>{if(e.data.length>0)for(const[n,r]of Object.entries((e=>Object(i.groupBy)(e,"genres"))(e.data)))t.push(a.a.createElement(h,{key:n,movies:r,genre:n}));return t})())}function b(){return a.a.createElement("div",null,a.a.createElement(p,null))}},LY0y:function(e,t){(function(t){e.exports=function(){var e={880:function(e){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}},n={};function r(t){if(n[t])return n[t].exports;var a=n[t]={exports:{}},o=!0;try{e[t](a,a.exports,r),o=!1}finally{o&&delete n[t]}return a.exports}return r.ab=t+"/",r(880)}()}).call(this,"/")},MJt5:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI"),a=n.n(r);function o(){return a.a.createElement("div",{className:"bg-rose-600 fixed left-1/2 top-1/2 w-full h-full center"},"Loading...")}}},[["/EDR",0,1,5,3,6,2,4]]]);