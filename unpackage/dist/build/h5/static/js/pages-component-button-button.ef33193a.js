(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-button-button"],{"1df1":function(t,n,i){n=t.exports=i("2350")(!1),n.push([t.i,"uni-button[data-v-d96e0b04]{margin-top:%?30?%;margin-bottom:%?30?%}.button-sp-area[data-v-d96e0b04]{margin:0 auto;width:60%}.mini-btn[data-v-d96e0b04]{margin-right:%?10?%}",""])},"2dbd":function(t,n,i){var a=i("1df1");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=i("4f06").default;e("14c5b0d0",a,!0,{sourceMap:!1,shadowMode:!1})},"3f17":function(t,n,i){"use strict";i.r(n);var a=i("8034"),e=i("e8f9");for(var r in e)"default"!==r&&function(t){i.d(n,t,function(){return e[t]})}(r);i("4337");var u=i("2877"),o=Object(u["a"])(e["default"],a["a"],a["b"],!1,null,"d96e0b04",null);n["default"]=o.exports},4337:function(t,n,i){"use strict";var a=i("2dbd"),e=i.n(a);e.a},"57f3":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{title:"button",loading:!1}},onLoad:function(){this._timer=null},onShow:function(){var t=this;this.clearTimer(),this._timer=setTimeout(function(){t.loading=!0},300)},onUnload:function(){this.clearTimer(),this.loading=!1},methods:{openTypeError:function(t){console.error("open-type error:",t)},clearTimer:function(){null!=this._timer&&clearTimeout(this._timer)}}};n.default=a},8034:function(t,n,i){"use strict";var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[i("v-uni-button",{attrs:{type:"primary"}},[t._v("页面主操作 Normal")]),i("v-uni-button",{attrs:{type:"primary",loading:t.loading}},[t._v("页面主操作 Loading")]),i("v-uni-button",{attrs:{type:"primary",disabled:"true"}},[t._v("页面主操作 Disabled")]),i("v-uni-button",{attrs:{type:"default"}},[t._v("页面次要操作 Normal")]),i("v-uni-button",{attrs:{type:"default",disabled:"true"}},[t._v("页面次要操作 Disabled")]),i("v-uni-button",{attrs:{type:"warn"}},[t._v("警告类操作 Normal")]),i("v-uni-button",{attrs:{type:"warn",disabled:"true"}},[t._v("警告类操作 Disabled")]),i("v-uni-view",{staticClass:"button-sp-area"},[i("v-uni-button",{attrs:{type:"primary",plain:"true"}},[t._v("按钮")]),i("v-uni-button",{attrs:{type:"primary",disabled:"true",plain:"true"}},[t._v("不可点击的按钮")]),i("v-uni-button",{attrs:{type:"default",plain:"true"}},[t._v("按钮")]),i("v-uni-button",{attrs:{type:"default",disabled:"true",plain:"true"}},[t._v("按钮")]),i("v-uni-button",{staticClass:"mini-btn",attrs:{type:"primary",size:"mini"}},[t._v("按钮")]),i("v-uni-button",{staticClass:"mini-btn",attrs:{type:"default",size:"mini"}},[t._v("按钮")]),i("v-uni-button",{staticClass:"mini-btn",attrs:{type:"warn",size:"mini"}},[t._v("按钮")])],1)],1)],1)},e=[];i.d(n,"a",function(){return a}),i.d(n,"b",function(){return e})},e8f9:function(t,n,i){"use strict";i.r(n);var a=i("57f3"),e=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(n,t,function(){return a[t]})}(r);n["default"]=e.a}}]);