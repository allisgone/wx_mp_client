(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-textarea-textarea"],{"02a6":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-title uni-common-pl"},[t._v("输入区域高度自适应，不会出现滚动条")]),n("v-uni-view",{staticClass:"uni-textarea"},[n("v-uni-textarea",{attrs:{"auto-height":""},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.bindTextAreaBlur.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"uni-title uni-common-pl"},[t._v("占位符字体是红色的textarea")]),n("v-uni-view",{staticClass:"uni-textarea"},[n("v-uni-textarea",{attrs:{"placeholder-style":"color:#F76260",placeholder:"占位符字体是红色的"}})],1)],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},"3d8e":function(t,e,n){"use strict";n.r(e);var a=n("02a6"),i=n("c97c");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);var r=n("2877"),c=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"57b4c01a",null);e["default"]=c.exports},c710:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{title:"textarea",focus:!1}},methods:{bindTextAreaBlur:function(t){console.log(t.detail.value)}}};e.default=a},c97c:function(t,e,n){"use strict";n.r(e);var a=n("c710"),i=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=i.a}}]);