(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],f=0,l=[];f<i.length;f++)a=i[f],o[a]&&l.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({search:"search"}[e]||e)+"."+{search:"1d2e9b8f"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={search:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({search:"search"}[e]||e)+"."+{search:"69efc541"}[e]+".css",o=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===o))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],f=s.getAttribute("data-href");if(f===r||f===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),n(c)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=c);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=i(e),s=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:f})},12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vuedvice/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"188c":function(e,t,n){"use strict";var r=n("b75b"),a=n.n(r);a.a},"4e26":function(e,t,n){"use strict";var r=n("a3c8"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("14c6"),n("08c1"),n("4842"),n("d9fc");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/random"}},[e._v("Random")]),n("router-link",{attrs:{to:"/search"}},[e._v("Search")])],1),n("router-view")],1)},o=[],c=(n("034f"),n("2877")),i={},u=Object(c["a"])(i,a,o,!1,null,null,null),s=u.exports,f=n("8c4f"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"random"},[e.fetching?n("p",{staticClass:"emoji"},[e._v("🤔")]):n("p",{staticClass:"emoji"},[e._v("🧐")]),n("Advice",{attrs:{msg:e.message}}),n("button",{attrs:{disabled:e.fetching},on:{click:e.getAdvice}},[e._v("Get Advice")])],1)},d=[],p=n("d8cf"),h=n("ef8f"),v={name:"random",components:{Advice:p["a"]},data:function(){return{message:"Click the button bellow to get an advice",fetching:!1}},methods:{getAdvice:function(){var e=this;e.fetching=!0,e.message="Thinking...",fetch("".concat(h["a"],"?timestamp=").concat((new Date).getTime())).then(function(e){return e.json()}).then(function(t){var n=t.slip;e.message=n.advice}).catch(function(t){return e.message="Error fetching API: ".concat(t)}).finally(function(){return e.fetching=!1})}}},m=v,g=(n("188c"),Object(c["a"])(m,l,d,!1,null,"2a9550a5",null)),b=g.exports;r["a"].use(f["a"]);var y=new f["a"]({routes:[{path:"/",redirect:"/random"},{path:"/random",name:"random",component:b},{path:"/search",name:"search",component:function(){return n.e("search").then(n.bind(null,"2d3b"))}}]});r["a"].config.productionTip=!1,new r["a"]({router:y,render:function(e){return e(s)}}).$mount("#app")},"64a9":function(e,t,n){},a3c8:function(e,t,n){},b75b:function(e,t,n){},d8cf:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"advice"},[n("h1",[e._v(e._s(e.msg))])])},a=[],o={name:"Advice",props:{msg:String}},c=o,i=(n("4e26"),n("2877")),u=Object(i["a"])(c,r,a,!1,null,"78badeb2",null);t["a"]=u.exports},ef8f:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a});var r="https://api.adviceslip.com/advice",a="".concat(r,"/search")}});
//# sourceMappingURL=app.eb3b6072.js.map