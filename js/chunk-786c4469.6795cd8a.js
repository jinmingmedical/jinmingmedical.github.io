(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-786c4469"],{"0b7b":function(e,t,n){e.exports=n.p+"img/banner02.e98399c7.jpg"},3170:function(e,t,n){},ad74:function(e,t,n){"use strict";n("3170")},b34e:function(e,t,n){e.exports=n.p+"img/banner01.fc57d7ab.jpg"},bb51:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{},[i("Header"),i("Nav"),i("swiper",{staticClass:"bannerSwiper",attrs:{options:e.bannerSwiperOption}},[i("swiper-slide",[i("img",{attrs:{src:n("b34e")}})]),i("swiper-slide",[i("img",{attrs:{src:n("0b7b")}})]),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1),e._m(0),e._l(e.products,(function(t,n){return i("div",{key:n},[i("h1",{staticClass:"category1"},[e.hasLangCN&&t.cn_name?i("span",[e._v(e._s(t.cn_name)+" ")]):e._e(),e.hasLangTW&&t.tw_name?i("span",[e._v(e._s(t.tw_name)+" ")]):e._e(),t.en_name?i("span",[e._v(e._s(t.en_name))]):e._e()]),e._l(t.child,(function(t,a){return i("div",{key:a,staticClass:"category2"},[i("div",{staticClass:"product"},[i("div",{staticClass:"info"},[i("div",{staticClass:"name"},[e.hasLangCN&&t.cn_name?i("h2",[e._v(e._s(t.cn_name))]):e._e(),e.hasLangTW&&t.tw_name?i("h2",[e._v(e._s(t.tw_name))]):e._e(),t.en_name?i("h3",[e._v(e._s(t.en_name))]):e._e()])]),i("div",{staticClass:"img"},[t.imgs.length>1?[i("swiper",{attrs:{options:e.level2SwiperOption}},[e._l(t.imgs,(function(e,t){return i("swiper-slide",{key:t,attrs:{level1Index:n,level2Index:a}},[i("img",{attrs:{src:e.url}})])})),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2),e._l(t.imgs,(function(e,s){return i("img",{key:s,ref:"$SwiperPreviewImg"+n+a,refInFor:!0,staticClass:"previewImg",attrs:{src:e.url,preview:1,"preview-text":t.en_name}})}))]:e._l(t.imgs,(function(e,n){return i("img",{key:n,attrs:{src:e.url,preview:1,"preview-text":t.en_name}})}))],2)]),i("ul",{staticClass:"productList"},e._l(t.child,(function(t,s){return i("li",{key:s},[i("div",{staticClass:"product"},[i("div",{staticClass:"img"},[t.imgs.length>1?[i("swiper",{attrs:{options:e.level3SwiperOption}},[e._l(t.imgs,(function(e,t){return i("swiper-slide",{key:t,attrs:{level1Index:n,level2Index:a,level3Index:s}},[i("img",{attrs:{src:e.url}})])})),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2),e._l(t.imgs,(function(e,r){return i("img",{key:r,ref:"$SwiperPreviewImg"+n+a+s,refInFor:!0,staticClass:"previewImg",attrs:{src:e.url,preview:1,"preview-text":t.en_name}})}))]:e._l(t.imgs,(function(e,n){return i("img",{key:n,attrs:{src:e.url,preview:1,"preview-text":t.en_name}})}))],2),i("div",{staticClass:"info"},[e.hasLangCN&&t.cn_name?i("h3",{staticClass:"name"},[e._v(e._s(t.cn_name))]):e._e(),e.hasLangTW&&t.tw_name?i("h3",{staticClass:"name"},[e._v(e._s(t.tw_name))]):e._e(),(e.hasLangCN||e.hasLangTW)&&t.en_name?i("h4",{staticClass:"name"},[e._v(e._s(t.en_name))]):e._e(),e.hasLangCN||e.hasLangTW||!t.en_name?e._e():i("h3",{staticClass:"name"},[e._v(e._s(t.en_name))]),e._l(t,(function(t,n,a){return["cn_name","tw_name","en_name","imgs"].includes(n)?e._e():i("div",{key:n,staticClass:"attr"},[i("label",[e._v(e._s(n.charAt(0).toUpperCase()+n.slice(1))+": ")]),i("var",[e._v(e._s(t))])])}))],2)])])})),0)])}))],2)}))],2)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"intro"},[e._v(" We specialize in surgical instrument set for 15 years, with great quality and convincing price, we also have our own professional R&D team to meet any of your requirements. "),n("h3",{staticClass:"section-title",staticStyle:{"margin-top":".3rem"}},[n("strong",[e._v("Main Products")])])])}],s=(n("d3b7"),n("3ca3"),n("ddb0"),n("bf88")),r=null,l={components:{Header:function(){return n.e("chunk-1337060f").then(n.bind(null,"0418"))},Nav:function(){return n.e("chunk-63e4c9be").then(n.bind(null,"216c"))}},data:function(){return{products:s["a"],bannerSwiperOption:{speed:800,autoplay:{disableOnInteraction:!1,delay:5e3},loop:!0,pagination:{el:".swiper-pagination",paginationType:"progress"},on:{}},level2SwiperOption:{speed:800,autoplay:{disableOnInteraction:!1,delay:5e3},loop:!0,effect:"cube",cubeEffect:{slideShadows:!1,shadow:!1,shadowScale:.6},pagination:{el:".swiper-pagination",paginationType:"progress"},on:{tap:function(){if(!this.clickedSlide)return!1;r.swiperPreviewImg(""+this.clickedSlide.attributes["level1Index"].nodeValue+this.clickedSlide.attributes["level2Index"].nodeValue,this.realIndex)}}},level3SwiperOption:{speed:800,autoplay:{disableOnInteraction:!1,delay:5e3},loop:!0,pagination:{el:".swiper-pagination",paginationType:"progress"},on:{tap:function(){if(!this.clickedSlide)return!1;r.swiperPreviewImg(""+this.clickedSlide.attributes["level1Index"].nodeValue+this.clickedSlide.attributes["level2Index"].nodeValue+this.clickedSlide.attributes["level3Index"].nodeValue,this.realIndex)}}}}},created:function(){r=this},mounted:function(){},methods:{swiperPreviewImg:function(e,t){this.$refs["$SwiperPreviewImg"+e][t].click()}}},c=l,o=(n("ad74"),n("2877")),p=Object(o["a"])(c,i,a,!1,null,"30432c42",null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-786c4469.6795cd8a.js.map