(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-navigator-new-page-new-vue-page-2"],{"0936":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,"uni-page-body[data-v-98ca424e]{display:-webkit-box;display:-webkit-flex;display:flex;min-height:100%}.new-page__text[data-v-98ca424e]{font-size:14px;color:#666}.root[data-v-98ca424e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.page-body[data-v-98ca424e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-top:50px}.new-page__text-box[data-v-98ca424e]{padding:20px}.new-page__color[data-v-98ca424e]{display:-webkit-box;display:-webkit-flex;display:flex;width:200px;height:100px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.new-page__color-text[data-v-98ca424e]{font-size:14px;color:#fff;line-height:30px;text-align:center}.new-page__button-item[data-v-98ca424e]{margin-top:15px;width:300px}",""])},1772:function(e,t,i){"use strict";var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("cebc")),o=i("2f62"),c={data:function(){return{}},computed:(0,a.default)({},(0,o.mapState)(["colorIndex","colorList"]),(0,o.mapGetters)(["currentColor"])),methods:(0,a.default)({},(0,o.mapMutations)(["setColorIndex"]),{emitMsg:function(){uni.$emit("postMsg",{msg:"From: Vue Page"})}})};t.default=c},"38cb":function(e,t,i){"use strict";var n=i("d859"),a=i.n(n);a.a},"444a":function(e,t,i){"use strict";i.r(t);var n=i("5c85"),a=i("70676");for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);i("38cb");var c=i("2877"),l=Object(c["a"])(a["default"],n["a"],n["b"],!1,null,"98ca424e",null);t["default"]=l.exports},"5c85":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"root"},[i("v-uni-view",{staticClass:"page-body"},[i("v-uni-view",{staticClass:"new-page__color",style:{backgroundColor:e.currentColor},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.setColorIndex(e.colorIndex>1?0:e.colorIndex+1)}}},[i("v-uni-text",{staticClass:"new-page__color-text"},[e._v("点击改变颜色")])],1),i("v-uni-view",{staticClass:"new-page__text-box"},[i("v-uni-text",{staticClass:"new-page__text"},[e._v("点击上方色块使用vuex在页面之间进行通讯")])],1),i("v-uni-view",{staticClass:"new-page__button"},[i("v-uni-button",{staticClass:"new-page__button-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.emitMsg.apply(void 0,arguments)}}},[e._v("向上一页面传递数据")])],1)],1)],1)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},70676:function(e,t,i){"use strict";i.r(t);var n=i("1772"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=a.a},d859:function(e,t,i){var n=i("0936");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("58ff27e5",n,!0,{sourceMap:!1,shadowMode:!1})}}]);