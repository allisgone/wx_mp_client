(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-nav-dot-nav-dot"],{2096:function(t,n,e){"use strict";e.r(n);var i=e("c787"),a=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);n["default"]=a.a},c787:function(t,n,e){"use strict";var i=e("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("56a7")),u={data:function(){return{title:"nav-dot"}},onReady:function(){this.setStyle(0,!0),this.setStyle(1,!0,"9")},methods:{setStyle:function(t,n,e){var i=getCurrentPages();i[i.length-1]}},onNavigationBarButtonTap:function(t){uni.showToast({title:0===t.index?"你点了消息按钮":"你点了关注按钮",icon:"none"}),this.setStyle(t.index,!1)},components:{uniIcons:a.default}};n.default=u},d848:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("page-head",{attrs:{title:t.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",{staticClass:"uni-title"},[e("uni-icons",{attrs:{size:"16",type:"info"}}),t._v("说明 :")],1),e("v-uni-view",{staticClass:"uni-helllo-text"},[e("v-uni-view",[t._v("在App端可在pages.json里配置buttons，暂不支持动态改变buttons的样式，使用onNavigationBarButtonTap可监听红点按钮的点击事件。")])],1)],1)],1)},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},fd0f:function(t,n,e){"use strict";e.r(n);var i=e("d848"),a=e("2096");for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);var o=e("2877"),s=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"22611fc2",null);n["default"]=s.exports}}]);