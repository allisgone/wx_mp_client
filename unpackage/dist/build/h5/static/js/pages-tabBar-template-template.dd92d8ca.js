(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-template-template"],{"06dc":function(t,e,n){"use strict";var i=n("e418"),a=n.n(i);a.a},"39c7":function(t,e,n){"use strict";n.r(e);var i=n("67d7"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"67d7":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("8116")),o={components:{uLink:a.default},data:function(){return{list:[{id:"navbar",name:"顶部原生导航标题栏",open:!1,pages:[{name:"导航栏带自定义按钮",url:"nav-button"},{name:"导航栏带红点和角标",url:"nav-dot"},{name:"导航栏带城市选择",url:"nav-city-dropdown"},{name:"导航栏带搜索框",url:"nav-search-input"},{name:"透明渐变样式",url:"nav-transparent"},{name:"导航栏带图片",url:"nav-image"}]},{name:"顶部选项卡",url:"tabbar"},{name:"组件通讯",url:"component-communication"},{name:"uCharts 图表",url:"ucharts"},{name:"列表到详情示例",url:"list2detail-list"},{name:"上下滑动切换视频",url:"swiper-vertical"},{name:"GlobalData和vuex",url:"global"}],navigateFlag:!1}},onLoad:function(){},onReady:function(){},onShareAppMessage:function(){return{title:"欢迎体验uni-app",path:"/pages/tabBar/template/template"}},onNavigationBarButtonTap:function(t){uni.navigateTo({url:"/pages/about/about"})},methods:{triggerCollapse:function(t){if(this.list[t].pages)for(var e=0;e<this.list.length;++e)this.list[e].open=t===e&&!this.list[t].open;else this.goDetailPage(this.list[t].url)},goDetailPage:function(t){var e=this;if(!this.navigateFlag){this.navigateFlag=!0;var n=t.url?t.url:t,i=~n.indexOf("platform")?n:"/pages/template/"+n+"/"+n;return uni.navigateTo({url:i}),setTimeout(function(){e.navigateFlag=!1},200),!1}}}};e.default=o},"686c":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"uni-page-body[data-v-b61e13b4]{min-height:100%;height:auto}\r\n\r\n/* 解决头条小程序字体图标不显示问题，因为头条运行时自动插入了span标签，且有全局字体 */\r\n.uni-icon[data-v-b61e13b4]{font-family:uniicons;font-weight:400}.uni-container[data-v-b61e13b4]{padding:15px;background-color:#f8f8f8}.uni-header-logo[data-v-b61e13b4]{padding:15px 15px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?10?%}.uni-header-image[data-v-b61e13b4]{width:80px;height:80px}.uni-hello-text[data-v-b61e13b4]{margin-bottom:20px}.hello-text[data-v-b61e13b4]{color:#7a7e83;font-size:14px;line-height:20px}.hello-link[data-v-b61e13b4]{color:#7a7e83;font-size:14px;line-height:20px}.uni-panel[data-v-b61e13b4]{margin-bottom:12px}.uni-panel-h[data-v-b61e13b4]{background-color:#fff;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:12px}\r\n/*\r\n.uni-panel-h:active {\r\n    background-color: #f8f8f8;\r\n}\r\n */.uni-panel-h-on[data-v-b61e13b4]{background-color:#f0f0f0}.uni-panel-text[data-v-b61e13b4]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#000;font-size:14px;font-weight:400}.uni-panel-icon[data-v-b61e13b4]{margin-left:15px;color:#999;font-size:14px;font-weight:400;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition-duration:0s;transition-duration:0s;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.uni-panel-icon-on[data-v-b61e13b4]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.uni-navigate-item[data-v-b61e13b4]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;border-top-style:solid;border-top-color:#f0f0f0;border-top-width:1px;padding:12px}.uni-navigate-item[data-v-b61e13b4]:active{background-color:#f8f8f8}.uni-navigate-text[data-v-b61e13b4]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#000;font-size:14px;font-weight:400}.uni-navigate-icon[data-v-b61e13b4]{margin-left:15px;color:#999;font-size:14px;font-weight:400}",""])},"854f":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-container"},[n("v-uni-view",{staticClass:"uni-header-logo"},[n("v-uni-image",{staticClass:"uni-header-image",attrs:{src:"/static/templateIndex.png"}})],1),n("v-uni-view",{staticClass:"uni-hello-text"},[n("v-uni-text",{staticClass:"hello-text"},[t._v("以下是部分模板示例，更多模板见插件市场：")]),n("u-link",{staticClass:"hello-link",attrs:{href:"https://ext.dcloud.net.cn",text:"https://ext.dcloud.net.cn",inWhiteList:!0}})],1),t._l(t.list,function(e,i){return n("v-uni-view",{key:e.id,staticClass:"uni-panel"},[n("v-uni-view",{staticClass:"uni-panel-h",class:e.open?"uni-panel-h-on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.triggerCollapse(i)}}},[n("v-uni-text",{staticClass:"uni-panel-text"},[t._v(t._s(e.name))]),n("v-uni-text",{staticClass:"uni-panel-icon uni-icon",class:e.open?"uni-panel-icon-on":""},[t._v(t._s(e.pages?"":""))])],1),e.open?n("v-uni-view",{staticClass:"uni-panel-c"},t._l(e.pages,function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-navigate-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goDetailPage(e)}}},[n("v-uni-text",{staticClass:"uni-navigate-text"},[t._v(t._s(e.name?e.name:e))]),n("v-uni-text",{staticClass:"uni-navigate-icon uni-icon"},[t._v("")])],1)}),1):t._e()],1)})],2)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},a57a:function(t,e,n){"use strict";n.r(e);var i=n("854f"),a=n("39c7");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("06dc");var r=n("2877"),l=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"b61e13b4",null);e["default"]=l.exports},e418:function(t,e,n){var i=n("686c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("1d78d751",i,!0,{sourceMap:!1,shadowMode:!1})}}]);