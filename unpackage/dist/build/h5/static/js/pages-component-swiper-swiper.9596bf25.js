(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-swiper-swiper"],{"08a1":function(i,t,a){"use strict";var n=function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("v-uni-view",[a("page-head",{attrs:{title:"swiper,可滑动视图"}}),a("v-uni-view",{staticClass:"uni-margin-wrap"},[a("v-uni-swiper",{staticClass:"swiper",attrs:{circular:"","indicator-dots":i.indicatorDots,autoplay:i.autoplay,interval:i.interval,duration:i.duration}},[a("v-uni-swiper-item",[a("v-uni-view",{staticClass:"swiper-item uni-bg-red"},[i._v("A")])],1),a("v-uni-swiper-item",[a("v-uni-view",{staticClass:"swiper-item uni-bg-green"},[i._v("B")])],1),a("v-uni-swiper-item",[a("v-uni-view",{staticClass:"swiper-item uni-bg-blue"},[i._v("C")])],1)],1)],1),a("v-uni-view",{staticClass:"swiper-list"},[a("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[a("v-uni-view",{staticClass:"uni-list-cell-db"},[i._v("指示点")]),a("v-uni-switch",{attrs:{checked:i.indicatorDots},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.changeIndicatorDots.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[a("v-uni-view",{staticClass:"uni-list-cell-db"},[i._v("自动播放")]),a("v-uni-switch",{attrs:{checked:i.autoplay},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.changeAutoplay.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"uni-padding-wrap"},[a("v-uni-view",{staticClass:"uni-common-mt"},[a("v-uni-text",[i._v("幻灯片切换时长(ms)")]),a("v-uni-text",{staticClass:"info"},[i._v(i._s(i.duration))])],1),a("v-uni-slider",{attrs:{value:i.duration,min:"500",max:"2000"},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.durationChange.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"uni-common-mt"},[a("v-uni-text",[i._v("自动播放间隔时长(ms)")]),a("v-uni-text",{staticClass:"info"},[i._v(i._s(i.interval))])],1),a("v-uni-slider",{attrs:{value:i.interval,min:"2000",max:"10000"},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.intervalChange.apply(void 0,arguments)}}})],1)],1)},e=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return e})},1431:function(i,t,a){"use strict";var n=a("612b"),e=a.n(n);e.a},"4cf6":function(i,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{background:["color1","color2","color3"],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500}},methods:{changeIndicatorDots:function(i){this.indicatorDots=!this.indicatorDots},changeAutoplay:function(i){this.autoplay=!this.autoplay},intervalChange:function(i){this.interval=i.target.value},durationChange:function(i){this.duration=i.target.value}}};t.default=n},"612b":function(i,t,a){var n=a("a88c");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var e=a("4f06").default;e("3bf870e8",n,!0,{sourceMap:!1,shadowMode:!1})},a88c:function(i,t,a){t=i.exports=a("2350")(!1),t.push([i.i,".uni-margin-wrap[data-v-622faee5]{width:%?690?%;margin:0 %?30?%}.swiper[data-v-622faee5]{height:%?300?%}.swiper-item[data-v-622faee5]{display:block;height:%?300?%;line-height:%?300?%;text-align:center}.swiper-list[data-v-622faee5]{margin-top:%?40?%;margin-bottom:0}.uni-common-mt[data-v-622faee5]{margin-top:%?60?%;position:relative}.info[data-v-622faee5]{position:absolute;right:%?20?%}.uni-padding-wrap[data-v-622faee5]{width:%?550?%;padding:0 %?100?%}",""])},f5d9:function(i,t,a){"use strict";a.r(t);var n=a("08a1"),e=a("ff52");for(var s in e)"default"!==s&&function(i){a.d(t,i,function(){return e[i]})}(s);a("1431");var u=a("2877"),o=Object(u["a"])(e["default"],n["a"],n["b"],!1,null,"622faee5",null);t["default"]=o.exports},ff52:function(i,t,a){"use strict";a.r(t);var n=a("4cf6"),e=a.n(n);for(var s in n)"default"!==s&&function(i){a.d(t,i,function(){return n[i]})}(s);t["default"]=e.a}}]);