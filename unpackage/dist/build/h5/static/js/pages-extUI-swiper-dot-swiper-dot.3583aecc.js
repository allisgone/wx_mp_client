(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-swiper-dot-swiper-dot"],{"0cb7":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".uni-swiper__warp[data-v-00b40e70]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:relative;overflow:hidden}.uni-swiper__dots-box[data-v-00b40e70]{position:absolute;bottom:10px;left:0;right:0;\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-swiper__dots-item[data-v-00b40e70]{width:8px;border-radius:100px;margin-left:6px;background-color:rgba(0,0,0,.4)\n\t\t/* transition: width 0.2s linear;  不要取消注释，不然会不能变色\n */}.uni-swiper__dots-item[data-v-00b40e70]:first-child{margin:0}.uni-swiper__dots-default[data-v-00b40e70]{border-radius:100px}.uni-swiper__dots-long[data-v-00b40e70]{border-radius:50px}.uni-swiper__dots-bar[data-v-00b40e70]{border-radius:50px}.uni-swiper__dots-nav[data-v-00b40e70]{bottom:0;height:40px;\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:rgba(0,0,0,.2)}.uni-swiper__dots-nav-item[data-v-00b40e70]{\n\t\t/* overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; */font-size:%?28?%;color:#fff;margin:0 15px}.uni-swiper__dots-indexes[data-v-00b40e70]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t\n\t\t/* flex: 1;\n */-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-swiper__dots-indexes-text[data-v-00b40e70]{color:#fff;font-size:%?24?%}",""])},"162b":function(e,t,i){"use strict";i.r(t);var n=i("578b"),o=i("2d91");for(var r in o)"default"!==r&&function(e){i.d(t,e,function(){return o[e]})}(r);i("819b");var a=i("2877"),d=Object(a["a"])(o["default"],n["a"],n["b"],!1,null,"341e1472",null);t["default"]=d.exports},"1b2d":function(e,t,i){"use strict";var n=i("760f"),o=i.n(n);o.a},"1e77":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("uni-swiper-dot",{attrs:{info:e.info,current:e.current,mode:e.mode,"dots-styles":e.dotsStyles,field:"content"}},[i("v-uni-swiper",{staticClass:"swiper-box",on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.change.apply(void 0,arguments)}}},e._l(e.info,function(e,t){return i("v-uni-swiper-item",{key:t},[i("v-uni-view",{staticClass:"swiper-item",class:e.colorClass},[i("v-uni-image",{staticClass:"image",attrs:{src:e.url,mode:"aspectFill"}})],1)],1)}),1)],1),i("uni-section",{attrs:{title:"模式选择",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("v-uni-view",{staticClass:"example-body-item",class:{active:0===e.modeIndex},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectMode("default",0)}}},[i("v-uni-text",{staticClass:"example-body-item-text"},[e._v("default")])],1),i("v-uni-view",{staticClass:"example-body-item",class:{active:1===e.modeIndex},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectMode("dot",1)}}},[i("v-uni-text",{staticClass:"example-body-item-text"},[e._v("dot")])],1),i("v-uni-view",{staticClass:"example-body-item",class:{active:2===e.modeIndex},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectMode("round",2)}}},[i("v-uni-text",{staticClass:"example-body-item-text"},[e._v("round")])],1),i("v-uni-view",{staticClass:"example-body-item",class:{active:3===e.modeIndex},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectMode("nav",3)}}},[i("v-uni-text",{staticClass:"example-body-item-text"},[e._v("nav")])],1),i("v-uni-view",{staticClass:"example-body-item",class:{active:4===e.modeIndex},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectMode("indexes",4)}}},[i("v-uni-text",{staticClass:"example-body-item-text"},[e._v("indexes")])],1)],1),i("uni-section",{attrs:{title:"颜色样式选择",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},["nav"!==e.mode?e._l(e.dotStyle,function(t,n){return i("v-uni-view",{key:n,staticClass:"example-body-item",class:{active:e.styleIndex===n},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectStyle(n)}}},[i("v-uni-view",{staticClass:"example-body-dots",style:{"background-color":t.selectedBackgroundColor,border:t.selectedBorder}}),i("v-uni-view",{staticClass:"example-body-dots",style:{"background-color":t.backgroundColor,border:t.border}}),i("v-uni-view",{staticClass:"example-body-dots",style:{"background-color":t.backgroundColor,border:t.border}})],1)}):e._e(),"nav"===e.mode?e._l(e.dotStyle,function(t,n){return i("v-uni-view",{key:n,staticClass:"example-body-item",class:{active:e.styleIndex===n},style:{"background-color":t.selectedBackgroundColor},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectStyle(n)}}},[i("v-uni-text",{staticClass:"example-body-item-text",style:{color:t.color}},[e._v("内容")])],1)}):e._e()],2)],1)},o=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o})},"298a":function(e,t,i){"use strict";var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(i("5176"));i("c5f6");var r={name:"UniSwiperDot",props:{info:{type:Array,default:function(){return[]}},current:{type:Number,default:0},dotsStyles:{type:Object,default:function(){return{}}},mode:{type:String,default:"default"},field:{type:String,default:""}},data:function(){return{dots:{width:8,height:8,bottom:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",selectedBackgroundColor:"#333",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}},watch:{dotsStyles:function(e){this.dots=(0,o.default)(this.dots,this.dotsStyles)},mode:function(e){"indexes"===e?(this.dots.width=20,this.dots.height=20):(this.dots.width=8,this.dots.height=8)}},created:function(){"indexes"===this.mode&&(this.dots.width=20,this.dots.height=20),this.dots=(0,o.default)(this.dots,this.dotsStyles)}};t.default=r},"2d91":function(e,t,i){"use strict";i.r(t);var n=i("bcec"),o=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,function(){return n[e]})}(r);t["default"]=o.a},"430e":function(e,t,i){var n=i("0cb7");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("389f9362",n,!0,{sourceMap:!1,shadowMode:!1})},"501a":function(e,t,i){"use strict";i.r(t);var n=i("ed19"),o=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,function(){return n[e]})}(r);t["default"]=o.a},"578b":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-section"},[e.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:e.type})],1):e._e(),i("v-uni-view",{staticClass:"uni-section__content"},[i("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!e.subTitle}},[e._v(e._s(e.title))]),e.subTitle?i("v-uni-text",{staticClass:"uni-section__content-sub"},[e._v(e._s(e.subTitle))]):e._e()],1),e._t("default")],2)},o=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o})},"614f":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'.uni-section[data-v-341e1472]{position:relative;\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\tmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\tfont-weight:400}\n\n.uni-section[data-v-341e1472]:after{position:absolute;bottom:0;right:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}\n\n.uni-section__head[data-v-341e1472]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-341e1472]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-341e1472]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-341e1472]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-section__content-title[data-v-341e1472]{font-size:%?28?%;color:#333}.distraction[data-v-341e1472]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-section__content-sub[data-v-341e1472]{font-size:%?24?%;color:#999}',""])},"651b":function(e,t,i){"use strict";i.r(t);var n=i("298a"),o=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,function(){return n[e]})}(r);t["default"]=o.a},6879:function(e,t,i){var n=i("614f");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("07ddb9a2",n,!0,{sourceMap:!1,shadowMode:!1})},"760f":function(e,t,i){var n=i("a86f");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("22f98d88",n,!0,{sourceMap:!1,shadowMode:!1})},"79da":function(e,t,i){"use strict";i.r(t);var n=i("1e77"),o=i("501a");for(var r in o)"default"!==r&&function(e){i.d(t,e,function(){return o[e]})}(r);i("1b2d");var a=i("2877"),d=Object(a["a"])(o["default"],n["a"],n["b"],!1,null,"44ee8a9f",null);t["default"]=d.exports},"819b":function(e,t,i){"use strict";var n=i("6879"),o=i.n(n);o.a},"81f4":function(e,t,i){"use strict";var n=i("430e"),o=i.n(n);o.a},a86f:function(e,t,i){i("b041");t=e.exports=i("2350")(!1),t.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头条小程序组件内不能引入字体 */\n\nuni-page-body[data-v-44ee8a9f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-44ee8a9f]{font-size:14px;line-height:inherit}.example[data-v-44ee8a9f]{padding:0 15px 15px}.example-info[data-v-44ee8a9f]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-44ee8a9f]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-44ee8a9f]{padding:0 15px}.example-info[data-v-44ee8a9f]{\n\tdisplay:block;\n\tpadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-44ee8a9f]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-44ee8a9f]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-44ee8a9f]{font-size:18px;color:#fff}.word-btn[data-v-44ee8a9f]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-44ee8a9f]{background-color:#4ca2ff}.swiper-box[data-v-44ee8a9f]{height:200px}.swiper-item[data-v-44ee8a9f]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#999;color:#fff}.image[data-v-44ee8a9f]{width:%?750?%}.uni-bg-red[data-v-44ee8a9f]{background-color:#ff5a5f}.uni-bg-green[data-v-44ee8a9f]{background-color:#09bb07}.uni-bg-blue[data-v-44ee8a9f]{background-color:#007aff}.example-body[data-v-44ee8a9f]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;padding:%?20?%}.example-body-item[data-v-44ee8a9f]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:%?15?%;padding:%?15?%;height:%?60?%;\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;padding:0 %?15?%;\n\t-webkit-box-flex:1;-webkit-flex:1;flex:1;border-color:#e5e5e5;border-style:solid;border-width:1px;border-radius:5px}.example-body-item-text[data-v-44ee8a9f]{font-size:%?28?%;color:#333}.example-body-dots[data-v-44ee8a9f]{width:%?16?%;height:%?16?%;border-radius:50px;background-color:#333;margin-left:%?10?%}.active[data-v-44ee8a9f]{border-style:solid;border-color:#007aff;border-width:1px}body.?%PAGE?%[data-v-44ee8a9f]{background-color:#efeff4}",""])},bcec:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(e){uni.report&&""!==e&&uni.report("title",e)}},methods:{onClick:function(){this.$emit("click")}}};t.default=n},bfdd:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-swiper__warp"},[e._t("default"),"default"===e.mode?i("v-uni-view",{key:"default",staticClass:"uni-swiper__dots-box",style:{bottom:e.dots.bottom+"px"}},e._l(e.info,function(t,n){return i("v-uni-view",{key:n,staticClass:"uni-swiper__dots-item uni-swiper__dots-bar",style:{width:(n===e.current?2*e.dots.width:e.dots.width)+"px",height:e.dots.width/3+"px","background-color":n!==e.current?e.dots.backgroundColor:e.dots.selectedBackgroundColor,"border-radius":"0px"}})}),1):e._e(),"dot"===e.mode?i("v-uni-view",{key:"dot",staticClass:"uni-swiper__dots-box",style:{bottom:e.dots.bottom+"px"}},e._l(e.info,function(t,n){return i("v-uni-view",{key:n,staticClass:"uni-swiper__dots-item",style:{width:e.dots.width+"px",height:e.dots.height+"px","background-color":n!==e.current?e.dots.backgroundColor:e.dots.selectedBackgroundColor,border:n!==e.current?e.dots.border:e.dots.selectedBorder}})}),1):e._e(),"round"===e.mode?i("v-uni-view",{key:"round",staticClass:"uni-swiper__dots-box",style:{bottom:e.dots.bottom+"px"}},e._l(e.info,function(t,n){return i("v-uni-view",{key:n,staticClass:"uni-swiper__dots-item ",class:[n===e.current&&"uni-swiper__dots-long"],style:{width:(n===e.current?3*e.dots.width:e.dots.width)+"px",height:e.dots.height+"px","background-color":n!==e.current?e.dots.backgroundColor:e.dots.selectedBackgroundColor,border:n!==e.current?e.dots.border:e.dots.selectedBorder}})}),1):e._e(),"nav"===e.mode?i("v-uni-view",{key:"nav",staticClass:"uni-swiper__dots-box uni-swiper__dots-nav",style:{"background-color":e.dotsStyles.backgroundColor,bottom:"0"}},[i("v-uni-text",{staticClass:"uni-swiper__dots-nav-item",style:{color:e.dotsStyles.color}},[e._v(e._s(e.current+1+"/"+e.info.length+" "+e.info[e.current][e.field]))])],1):e._e(),"indexes"===e.mode?i("v-uni-view",{key:"indexes",staticClass:"uni-swiper__dots-box",style:{bottom:e.dots.bottom+"px"}},e._l(e.info,function(t,n){return i("v-uni-view",{key:n,staticClass:"uni-swiper__dots-item uni-swiper__dots-indexes",style:{width:e.dots.width+"px",height:e.dots.height+"px",color:n===e.current?e.dots.selectedColor:e.dots.color,"background-color":n!==e.current?e.dots.backgroundColor:e.dots.selectedBackgroundColor,border:n!==e.current?e.dots.border:e.dots.selectedBorder}},[i("v-uni-text",{staticClass:"uni-swiper__dots-indexes-text"},[e._v(e._s(n+1))])],1)}),1):e._e()],2)},o=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o})},e149:function(e,t,i){"use strict";i.r(t);var n=i("bfdd"),o=i("651b");for(var r in o)"default"!==r&&function(e){i.d(t,e,function(){return o[e]})}(r);i("81f4");var a=i("2877"),d=Object(a["a"])(o["default"],n["a"],n["b"],!1,null,"00b40e70",null);t["default"]=d.exports},ed19:function(e,t,i){"use strict";var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(i("162b")),r=n(i("e149")),a={components:{uniSection:o.default,uniSwiperDot:r.default},data:function(){return{info:[{colorClass:"uni-bg-red",url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg",content:"内容 A"},{colorClass:"uni-bg-green",url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg",content:"内容 B"},{colorClass:"uni-bg-blue",url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg",content:"内容 C"}],dotStyle:[{backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",color:"#fff",selectedBackgroundColor:"rgba(0, 0, 0, .9)",selectedBorder:"1px rgba(0, 0, 0, .9) solid"},{backgroundColor:"rgba(255, 90, 95,0.3)",border:"1px rgba(255, 90, 95,0.3) solid",color:"#fff",selectedBackgroundColor:"rgba(255, 90, 95,0.9)",selectedBorder:"1px rgba(255, 90, 95,0.9) solid"},{backgroundColor:"rgba(83, 200, 249,0.3)",border:"1px rgba(83, 200, 249,0.3) solid",color:"#fff",selectedBackgroundColor:"rgba(83, 200, 249,0.9)",selectedBorder:"1px rgba(83, 200, 249,0.9) solid"}],modeIndex:-1,styleIndex:-1,current:0,mode:"default",dotsStyles:{}}},onLoad:function(){},methods:{change:function(e){this.current=e.detail.current},selectStyle:function(e){this.dotsStyles=this.dotStyle[e],this.styleIndex=e},selectMode:function(e,t){this.mode=e,this.modeIndex=t,this.styleIndex=-1,this.dotsStyles=this.dotStyle[0]}}};t.default=a}}]);