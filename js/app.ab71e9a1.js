(function(e){function n(n){for(var u,c,o=n[0],d=n[1],l=n[2],i=0,h=[];i<o.length;i++)c=o[i],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&h.push(r[c][0]),r[c]=0;for(u in d)Object.prototype.hasOwnProperty.call(d,u)&&(e[u]=d[u]);f&&f(n);while(h.length)h.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],u=!0,c=1;c<t.length;c++){var o=t[c];0!==r[o]&&(u=!1)}u&&(a.splice(n--,1),e=d(d.s=t[0]))}return e}var u={},c={app:0},r={app:0},a=[];function o(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-2953a1ef":"35403799","chunk-2d0a387a":"ecfd9145","chunk-30389516":"ecd7dd9c","chunk-1742f2a4":"f8956992","chunk-202f8a48":"6590941b","chunk-23da1018":"c6734832","chunk-2e234b56":"0b2837a2","chunk-3f6173fc":"7d24a185","chunk-4d60cc19":"b86fc0c5","chunk-51663488":"462a4d4d","chunk-57b6ab70":"b1e0c1b8","chunk-57d41938":"1e20c48c","chunk-5a81e37e":"243bc333","chunk-786c4469":"6795cd8a","chunk-80e10fa8":"e832fe25","chunk-d74d476a":"24942905","chunk-ee7143d6":"14f74df0","chunk-1337060f":"b0b8b036","chunk-63e4c9be":"2ab22673"}[e]+".js"}function d(n){if(u[n])return u[n].exports;var t=u[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var n=[],t={"chunk-2953a1ef":1,"chunk-1742f2a4":1,"chunk-202f8a48":1,"chunk-23da1018":1,"chunk-2e234b56":1,"chunk-3f6173fc":1,"chunk-4d60cc19":1,"chunk-51663488":1,"chunk-57b6ab70":1,"chunk-57d41938":1,"chunk-5a81e37e":1,"chunk-786c4469":1,"chunk-80e10fa8":1,"chunk-d74d476a":1,"chunk-ee7143d6":1,"chunk-1337060f":1,"chunk-63e4c9be":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var u="css/"+({}[e]||e)+"."+{"chunk-2953a1ef":"f5b2a5b6","chunk-2d0a387a":"31d6cfe0","chunk-30389516":"31d6cfe0","chunk-1742f2a4":"528fa24f","chunk-202f8a48":"38bd9db2","chunk-23da1018":"9dff6ab0","chunk-2e234b56":"1aaae94a","chunk-3f6173fc":"65b5afba","chunk-4d60cc19":"71610f0a","chunk-51663488":"18d5e00a","chunk-57b6ab70":"eadfa869","chunk-57d41938":"c0a06f6e","chunk-5a81e37e":"10c7ac3d","chunk-786c4469":"bc21ccfa","chunk-80e10fa8":"90b5a494","chunk-d74d476a":"881a076d","chunk-ee7143d6":"d5e783f5","chunk-1337060f":"26f2cefe","chunk-63e4c9be":"602e390d"}[e]+".css",r=d.p+u,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var l=a[o],i=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(i===u||i===r))return n()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){l=h[o],i=l.getAttribute("data-href");if(i===u||i===r)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var u=n&&n.target&&n.target.src||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=u,delete c[e],f.parentNode.removeChild(f),t(a)},f.href=r;var s=document.getElementsByTagName("head")[0];s.appendChild(f)})).then((function(){c[e]=0})));var u=r[e];if(0!==u)if(u)n.push(u[2]);else{var a=new Promise((function(n,t){u=r[e]=[n,t]}));n.push(u[2]=a);var l,i=document.createElement("script");i.charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.src=o(e);var h=new Error;l=function(n){i.onerror=i.onload=null,clearTimeout(f);var t=r[e];if(0!==t){if(t){var u=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+u+": "+c+")",h.name="ChunkLoadError",h.type=u,h.request=c,t[1](h)}r[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:i})}),12e4);i.onerror=i.onload=l,document.head.appendChild(i)}return Promise.all(n)},d.m=e,d.c=u,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var u in e)d.d(t,u,function(n){return e[n]}.bind(null,u));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="/",d.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=n,l=l.slice();for(var h=0;h<l.length;h++)n(l[h]);var f=i;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"4dcb":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var u=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],a=t("2877"),o={},d=Object(a["a"])(o,c,r,!1,null,null,null),l=d.exports,i=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f"));u["default"].use(i["a"]);var h=[{path:"/",name:"Home",meta:{title:"Home"},component:function(){return Promise.all([t.e("chunk-30389516"),t.e("chunk-786c4469")]).then(t.bind(null,"bb51"))}},{path:"/AboutUs",name:"AboutUs",meta:{title:"About Us"},component:function(){return t.e("chunk-2953a1ef").then(t.bind(null,"2664"))}},{path:"/products",name:"products",meta:{title:"Products"},redirect:{name:"product1"},component:function(){return t.e("chunk-2d0a387a").then(t.bind(null,"0323"))},children:[{path:"product1",name:"product1",meta:{title:"Product1"},component:function(){return Promise.all([t.e("chunk-30389516"),t.e("chunk-2e234b56")]).then(t.bind(null,"40db"))}},{path:"product2",name:"product2",meta:{title:"Product2"},component:function(){return Promise.all([t.e("chunk-30389516"),t.e("chunk-51663488")]).then(t.bind(null,"69d4"))}},{path:"product3",name:"product3",meta:{title:"Product3"},component:function(){return Promise.all([t.e("chunk-30389516"),t.e("chunk-d74d476a")]).then(t.bind(null,"6ec9"))}},{path:"product4",name:"product4",meta:{title:"Product4"},component:function(){return Promise.all([t.e("chunk-30389516"),t.e("chunk-202f8a48")]).then(t.bind(null,"e2de"))}},{path:"product5",name:"product5",meta:{title:"Product5"},component:function(){return Promise.all([t.e("chunk-30389516"),t.e("chunk-ee7143d6")]).then(t.bind(null,"8841"))}},{path:"product6",name:"product6",meta:{title:"Product6"},component:function(){return Promise.all([t.e("chunk-30389516"),t.e("chunk-80e10fa8")]).then(t.bind(null,"c3c0"))}},{path:"product7",name:"product7",meta:{title:"Product7"},component:function(){return Promise.all([t.e("chunk-30389516"),t.e("chunk-57d41938")]).then(t.bind(null,"6d0e"))}},{path:"product8",name:"product8",meta:{title:"Product8"},component:function(){return Promise.all([t.e("chunk-30389516"),t.e("chunk-23da1018")]).then(t.bind(null,"35c0"))}},{path:"product9",name:"product9",meta:{title:"Product9"},component:function(){return Promise.all([t.e("chunk-30389516"),t.e("chunk-1742f2a4")]).then(t.bind(null,"a93a"))}},{path:"product10",name:"product10",meta:{title:"product10"},component:function(){return Promise.all([t.e("chunk-30389516"),t.e("chunk-4d60cc19")]).then(t.bind(null,"f2b8"))}},{path:"product11",name:"product11",meta:{title:"product11"},component:function(){return Promise.all([t.e("chunk-30389516"),t.e("chunk-5a81e37e")]).then(t.bind(null,"27e9"))}},{path:"product12",name:"product12",meta:{title:"product12"},component:function(){return Promise.all([t.e("chunk-30389516"),t.e("chunk-3f6173fc")]).then(t.bind(null,"6453"))}},{path:"product13",name:"product13",meta:{title:"product13"},component:function(){return Promise.all([t.e("chunk-30389516"),t.e("chunk-57b6ab70")]).then(t.bind(null,"5cf2"))}}]}],f=new i["a"]({mode:"history",base:"/",routes:h}),s=f,p=t("2f62");u["default"].use(p["a"]);var m=new p["a"].Store({state:{},mutations:{},actions:{},modules:{}}),k=(t("4dcb"),t("d1d4")),b=t.n(k);t("394c");u["default"].use(b.a);var v=t("7212"),g=t.n(v);t("455b");u["default"].use(g.a);t("caad"),t("2532");var y={data:function(){return{}},computed:{hasLangCN:function(){return this.$route.query.lang&&this.$route.query.lang.includes("cn")},hasLangTW:function(){return this.$route.query.lang&&this.$route.query.lang.includes("tw")}}},P=(t("ac1f"),t("466d"),t("4d63"),t("25f0"),t("498a"),t("5319"),{hasClass:function(e,n){return!!e.className.match(new RegExp("(\\s|^)"+n+"(\\s|$)"))},addClass:function(e,n){P.hasClass(e,n)||(e.className=e.className.trim()+" "+n)},removeClass:function(e,n){if(P.hasClass(e,n)){var t=new RegExp("(\\s|^)"+n+"(\\s|$)");e.className=e.className.replace(t," ").trim()}}}),w=P,C=new u["default"];u["default"].prototype.$eventBus=C;u["default"].mixin(y),u["default"].prototype.$utils=w,u["default"].config.productionTip=!1,new u["default"]({router:s,store:m,render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=app.ab71e9a1.js.map