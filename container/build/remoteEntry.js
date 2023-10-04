var container;!function(){"use strict";var n={4317:function(n,e,t){var r={"./utils":function(){return t.e(47).then((function(){return function(){return t(47)}}))}},o=function(n,e){return t.R=e,e=t.o(r,n)?r[n]():Promise.resolve().then((function(){throw new Error('Module "'+n+'" does not exist in container.')})),t.R=void 0,e},u=function(n,e){if(t.S){var r="default",o=t.S[r];if(o&&o!==n)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[r]=n,t.I(r,e)}};t.d(e,{get:function(){return o},init:function(){return u}})}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var u=e[r]={exports:{}};return n[r].call(u.exports,u,u.exports,t),u.exports}t.m=n,t.c=e,t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,{a:e}),e},t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,r){return t.f[r](n,e),e}),[]))},t.u=function(n){return"static/js/"+n+"."+{47:"414ae9d1",51:"f21c052e",152:"d61b095d",164:"ac715fef",192:"9ebc5a8f",416:"edb82ba5",565:"d0429bf0",787:"2ed01b9d",791:"fd53f3e3",847:"d2c93d51",942:"94223c85"}[n]+".chunk.js"},t.miniCssF=function(n){},t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}(),t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},function(){var n={},e="container:";t.l=function(r,o,u,i){if(n[r])n[r].push(o);else{var f,c;if(void 0!==u)for(var a=document.getElementsByTagName("script"),l=0;l<a.length;l++){var s=a[l];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==e+u){f=s;break}}f||(c=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,t.nc&&f.setAttribute("nonce",t.nc),f.setAttribute("data-webpack",e+u),f.src=r),n[r]=[o];var d=function(e,t){f.onerror=f.onload=null,clearTimeout(p);var o=n[r];if(delete n[r],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((function(n){return n(t)})),e)return e(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=d.bind(null,f.onerror),f.onload=d.bind(null,f.onload),c&&document.head.appendChild(f)}}}(),t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},function(){var n={},e={};t.f.remotes=function(r,o){t.o(n,r)&&n[r].forEach((function(n){var r=t.R;r||(r=[]);var u=e[n];if(!(r.indexOf(u)>=0)){if(r.push(u),u.p)return o.push(u.p);var i=function(e){e||(e=new Error("Container missing")),"string"===typeof e.message&&(e.message+='\nwhile loading "'+u[1]+'" from '+u[2]),t.m[n]=function(){throw e},u.p=0},f=function(n,e,t,r,f,c){try{var a=n(e,t);if(!a||!a.then)return f(a,r,c);var l=a.then((function(n){return f(n,r)}),i);if(!c)return l;o.push(u.p=l)}catch(s){i(s)}},c=function(n,e,t){return f(e.get,u[1],r,0,a,t)},a=function(e){u.p=1,t.m[n]=function(n){n.exports=e()}};f(t,u[2],0,0,(function(n,e,r){return n?f(t.I,u[0],0,n,c,r):i()}),1)}}))}}(),function(){t.S={};var n={},e={};t.I=function(r,o){o||(o=[]);var u=e[r];if(u||(u=e[r]={}),!(o.indexOf(u)>=0)){if(o.push(u),n[r])return n[r];t.o(t.S,r)||(t.S[r]={});var i=t.S[r],f="container",c=function(n,e,t,r){var o=i[n]=i[n]||{},u=o[e];(!u||!u.loaded&&(!r!=!u.eager?r:f>u.from))&&(o[e]={get:t,from:f,eager:!!r})},a=[];if("default"===r)c("antd","5.9.4",(function(){return Promise.all([t.e(192),t.e(416),t.e(51),t.e(152)]).then((function(){return function(){return t(1192)}}))})),c("react-dom","18.2.0",(function(){return Promise.all([t.e(164),t.e(416)]).then((function(){return function(){return t(4164)}}))})),c("react-router-dom","6.16.0",(function(){return Promise.all([t.e(565),t.e(416),t.e(942)]).then((function(){return function(){return t(9565)}}))})),c("react","18.2.0",(function(){return t.e(791).then((function(){return function(){return t(2791)}}))})),c("web-vitals","2.1.4",(function(){return t.e(787).then((function(){return function(){return t(787)}}))})),c("zustand","4.4.2",(function(){return Promise.all([t.e(416),t.e(847)]).then((function(){return function(){return t(5847)}}))}));return a.length?n[r]=Promise.all(a).then((function(){return n[r]=1})):n[r]=1}}}(),function(){var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n}(),function(){var n=function(n){var e=function(n){return n.split(".").map((function(n){return+n==n?+n:n}))},t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(n),r=t[1]?e(t[1]):[];return t[2]&&(r.length++,r.push.apply(r,e(t[2]))),t[3]&&(r.push([]),r.push.apply(r,e(t[3]))),r},e=function(e,t){e=n(e),t=n(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var o=e[r],u=(typeof o)[0];if(r>=t.length)return"u"==u;var i=t[r],f=(typeof i)[0];if(u!=f)return"o"==u&&"n"==f||"s"==f||"u"==u;if("o"!=u&&"u"!=u&&o!=i)return o<i;r++}},r=function(n){var e=n[0],t="";if(1===n.length)return"*";if(e+.5){t+=0==e?">=":-1==e?"<":1==e?"^":2==e?"~":e>0?"=":"!=";for(var o=1,u=1;u<n.length;u++)o--,t+="u"==(typeof(f=n[u]))[0]?"-":(o>0?".":"")+(o=2,f);return t}var i=[];for(u=1;u<n.length;u++){var f=n[u];i.push(0===f?"not("+c()+")":1===f?"("+c()+" || "+c()+")":2===f?i.pop()+" "+i.pop():r(f))}return c();function c(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=function(e,t){if(0 in e){t=n(t);var r=e[0],u=r<0;u&&(r=-r-1);for(var i=0,f=1,c=!0;;f++,i++){var a,l,s=f<e.length?(typeof e[f])[0]:"";if(i>=t.length||"o"==(l=(typeof(a=t[i]))[0]))return!c||("u"==s?f>r&&!u:""==s!=u);if("u"==l){if(!c||"u"!=s)return!1}else if(c)if(s==l)if(f<=r){if(a!=e[f])return!1}else{if(u?a>e[f]:a<e[f])return!1;a!=e[f]&&(c=!1)}else if("s"!=s&&"n"!=s){if(u||f<=r)return!1;c=!1,f--}else{if(f<=r||l<s!=u)return!1;c=!1}else"s"!=s&&"n"!=s&&(c=!1,f--)}}var d=[],p=d.pop.bind(d);for(i=1;i<e.length;i++){var h=e[i];d.push(1==h?p()|p():2==h?p()&p():h?o(h,t):!p())}return!!p()},u=function(n,t){var r=n[t];return Object.keys(r).reduce((function(n,t){return!n||!r[n].loaded&&e(n,t)?t:n}),0)},i=function(n,e,t,o){return"Unsatisfied version "+t+" from "+(t&&n[e][t].from)+" of shared singleton module "+e+" (required "+r(o)+")"},f=function(n,e,t,r){var f=u(n,t);return o(r,f)||c(i(n,t,f,r)),a(n[t][f])},c=function(n){"undefined"!==typeof console&&console.warn&&console.warn(n)},a=function(n){return n.loaded=1,n.get()},l=function(n){return function(e,r,o,u){var i=t.I(e);return i&&i.then?i.then(n.bind(n,e,t.S[e],r,o,u)):n(e,t.S[e],r,o,u)}},s=l((function(n,e,r,o,u){return e&&t.o(e,r)?f(e,0,r,o):u()})),d={},p={8416:function(){return s("default","react",[1,18,2,0],(function(){return t.e(791).then((function(){return function(){return t(2791)}}))}))},1051:function(){return s("default","react-dom",[1,18,2,0],(function(){return t.e(164).then((function(){return function(){return t(4164)}}))}))}},h={51:[1051],416:[8416]};t.f.consumes=function(n,e){t.o(h,n)&&h[n].forEach((function(n){if(t.o(d,n))return e.push(d[n]);var r=function(e){d[n]=0,t.m[n]=function(r){delete t.c[n],r.exports=e()}},o=function(e){delete d[n],t.m[n]=function(r){throw delete t.c[n],e}};try{var u=p[n]();u.then?e.push(d[n]=u.then(r).catch(o)):r(u)}catch(i){o(i)}}))}}(),function(){var n={413:0};t.f.j=function(e,r){var o=t.o(n,e)?n[e]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(416|51)$/.test(e))n[e]=0;else{var u=new Promise((function(t,r){o=n[e]=[t,r]}));r.push(o[2]=u);var i=t.p+t.u(e),f=new Error;t.l(i,(function(r){if(t.o(n,e)&&(0!==(o=n[e])&&(n[e]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;f.message="Loading chunk "+e+" failed.\n("+u+": "+i+")",f.name="ChunkLoadError",f.type=u,f.request=i,o[1](f)}}),"chunk-"+e,e)}};var e=function(e,r){var o,u,i=r[0],f=r[1],c=r[2],a=0;if(i.some((function(e){return 0!==n[e]}))){for(o in f)t.o(f,o)&&(t.m[o]=f[o]);if(c)c(t)}for(e&&e(r);a<i.length;a++)u=i[a],t.o(n,u)&&n[u]&&n[u][0](),n[u]=0},r=self.webpackChunkcontainer=self.webpackChunkcontainer||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t(4317);container=r}();
//# sourceMappingURL=remoteEntry.js.map