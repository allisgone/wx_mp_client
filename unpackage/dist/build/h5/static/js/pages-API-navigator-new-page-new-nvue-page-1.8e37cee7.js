(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-navigator-new-page-new-nvue-page-1"],{"01b7":function(e,t,n){"use strict";var a=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("cebc")),o=n("2f62"),c={data:function(){return{}},computed:(0,i.default)({},(0,o.mapState)(["colorIndex","colorList"]),(0,o.mapGetters)(["currentColor"])),methods:(0,i.default)({},(0,o.mapMutations)(["setColorIndex"]),{navToNvue:function(){uni.navigateTo({url:"new-nvue-page-2"})},navToVue:function(){uni.navigateTo({url:"new-vue-page-2"})}})};t.default=c},"5ddc":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"root"},[n("v-uni-view",{staticClass:"page-body"},[n("v-uni-view",{staticClass:"new-page__color",style:{backgroundColor:e.currentColor},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.setColorIndex(e.colorIndex>1?0:e.colorIndex+1)}}},[n("v-uni-text",{staticClass:"new-page__color-text"},[e._v("点击改变颜色")])],1),n("v-uni-view",{staticClass:"new-page__text-box"},[n("v-uni-text",{staticClass:"new-page__text"},[e._v("点击上方色块使用vuex在页面之间进行通讯")])],1),n("v-uni-view",{staticClass:"new-page__button"},[n("v-uni-button",{staticClass:"new-page__button-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navToNvue.apply(void 0,arguments)}}},[e._v("跳转NVUE页面")]),n("v-uni-button",{staticClass:"new-page__button-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navToVue.apply(void 0,arguments)}}},[e._v("跳转VUE页面")])],1)],1)],1)},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},"66c4":function(e,t,n){var a=n("b6e1");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("195064f2",a,!0,{sourceMap:!1,shadowMode:!1})},"6db0":function(e,t,n){"use strict";n.r(t);var a=n("01b7"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=i.a},a299:function(e,t,n){"use strict";var a=n("66c4"),i=n.n(a);i.a},a6ee:function(e,t,n){"use strict";n.r(t);var a=n("5ddc"),i=n("6db0");for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);n("a299");var c=n("2877"),r=Object(c["a"])(i["default"],a["a"],a["b"],!1,null,"bdbed17e",null);t["default"]=r.exports},b6e1:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".new-page__text[data-v-bdbed17e]{font-size:14px;color:#666}.root[data-v-bdbed17e]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.page-body[data-v-bdbed17e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-top:50px}.new-page__text-box[data-v-bdbed17e]{padding:20px}.new-page__color[data-v-bdbed17e]{width:200px;height:100px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.new-page__color-text[data-v-bdbed17e]{font-size:14px;color:#fff;line-height:30px;text-align:center}.new-page__button-item[data-v-bdbed17e]{margin-top:15px;width:300px}",""])}}]);