(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-API-API"],{3067:function(e,t,a){"use strict";a.r(t);var n=a("7dda"),i=a("c26e");for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);a("4036");var r=a("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"71dea2e8",null);t["default"]=s.exports},4036:function(e,t,a){"use strict";var n=a("6b83"),i=a.n(n);i.a},4551:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{title:"tababr",hasSetTabBarBadge:!1,hasShownTabBarRedDot:!1,hasCustomedStyle:!1,hasCustomedItem:!1,hasHiddenTabBar:!1}},destroyed:function(){if(this.hasSetTabBarBadge&&uni.removeTabBarBadge({index:1}),this.hasShownTabBarRedDot&&uni.hideTabBarRedDot({index:1}),this.hasHiddenTabBar&&uni.showTabBar(),this.hasCustomedStyle&&uni.setTabBarStyle({color:"#7A7E83",selectedColor:"#007AFF",backgroundColor:"#F8F8F8",borderStyle:"black"}),this.hasCustomedItem){var e={index:1,text:"接口",iconPath:"/static/api.png",selectedIconPath:"/static/apiHL.png"};uni.setTabBarItem(e)}},methods:{navigateBack:function(){this.$emit("unmount")},setTabBarBadge:function(){this.hasShownTabBarRedDot&&(uni.hideTabBarRedDot({index:1}),this.hasShownTabBarRedDot=!this.hasShownTabBarRedDot),this.hasSetTabBarBadge?uni.removeTabBarBadge({index:1}):uni.setTabBarBadge({index:1,text:"1"}),this.hasSetTabBarBadge=!this.hasSetTabBarBadge},showTabBarRedDot:function(){this.hasSetTabBarBadge&&(uni.removeTabBarBadge({index:1}),this.hasSetTabBarBadge=!this.hasSetTabBarBadge),this.hasShownTabBarRedDot?uni.hideTabBarRedDot({index:1}):uni.showTabBarRedDot({index:1}),this.hasShownTabBarRedDot=!this.hasShownTabBarRedDot},hideTabBar:function(){this.hasHiddenTabBar?uni.showTabBar():uni.hideTabBar(),this.hasHiddenTabBar=!this.hasHiddenTabBar},customStyle:function(){this.hasCustomedStyle?uni.setTabBarStyle({color:"#7A7E83",selectedColor:"#007AFF",backgroundColor:"#F8F8F8",borderStyle:"black"}):uni.setTabBarStyle({color:"#FFF",selectedColor:"#007AFF",backgroundColor:"#000000",borderStyle:"black"}),this.hasCustomedStyle=!this.hasCustomedStyle},customItem:function(){var e={index:1,text:"接口",iconPath:"/static/api.png",selectedIconPath:"/static/apiHL.png"};this.hasCustomedItem?uni.setTabBarItem(e):(e.text="API",uni.setTabBarItem(e)),this.hasCustomedItem=!this.hasCustomedItem}}};t.default=n},"614e":function(e,t,a){"use strict";var n=a("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("8116")),o=n(a("bb33")),r={components:{uLink:i.default,setTabBar:o.default},data:function(){var e=[{name:"图片",url:"image"},{name:"视频",url:"video"}],t=[{id:"page",name:"界面",open:!1,pages:[{name:"设置导航条",url:"set-navigation-bar-title"},{name:"页面跳转",url:"navigator"},{name:"设置TabBar",url:"set-tabbar"},{name:"下拉刷新",url:"pull-down-refresh"},{name:"创建动画",url:"animation"},{name:"创建绘画",url:"canvas"},{name:"节点信息",url:"get-node-info"},{name:"节点布局交互状态",url:"intersection-observer"},{name:"显示操作菜单",url:"action-sheet"},{name:"显示模态弹窗",url:"modal"},{name:"显示加载提示框",url:"show-loading"},{name:"显示消息提示框",url:"toast"}]},{id:"device",name:"设备",open:!1,pages:[{name:"获取手机网络状态",url:"get-network-type"},{name:"获取手机系统信息",url:"get-system-info"},{name:"打电话",url:"make-phone-call"},{name:"监听加速度传感器",url:"on-accelerometer-change"},{name:"监听罗盘数据",url:"on-compass-change"}]},{id:"network",name:"网络",open:!1,pages:[{name:"发起一个请求",url:"request"},{name:"上传文件",url:"upload-file"},{name:"下载文件",url:"download-file"}]},{id:"websocket",name:"websocket",open:!1,pages:[{name:"socketTask",url:"websocket-socketTask"},{name:"全局websocket",url:"websocket-global"}]},{id:"media",name:"媒体",open:!1,pages:e},{id:"location",name:"位置",open:!1,pages:[{name:"获取当前位置",url:"get-location"},{name:"使用地图查看位置",url:"open-location"},{name:"使用地图选择位置",url:"choose-location"},{name:"地图控制",url:"map"}]},{id:"storage",name:"数据",open:!1,pages:[{name:"数据存储（key-value）",url:"storage"}]}];return{showSetTabBarPage:!1,list:t,navigateFlag:!1}},onShareAppMessage:function(){return{title:"欢迎体验uni-app",path:"/pages/tabBar/API/API"}},onNavigationBarButtonTap:function(e){uni.navigateTo({url:"/pages/about/about"})},onLoad:function(){},onReady:function(){},onShow:function(){this.navigateFlag=!1,this.leaveSetTabBarPage()},onHide:function(){this.leaveSetTabBarPage()},methods:{triggerCollapse:function(e){if(this.list[e].pages)for(var t=0;t<this.list.length;++t)this.list[t].open=e===t&&!this.list[e].open;else this.goDetailPage(this.list[e].url)},goDetailPage:function(e){if(!this.navigateFlag)if(this.navigateFlag=!0,"set-tabbar"!==e){var t=~e.indexOf("platform")?e:"/pages/API/"+e+"/"+e;uni.navigateTo({url:t})}else this.showSetTabBarPage=!0},leaveSetTabBarPage:function(){var e=this;setTimeout(function(){e.navigateFlag=!1},200),this.showSetTabBarPage=!1}}};t.default=r},"6b83":function(e,t,a){var n=a("71e9");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("34cc552c",n,!0,{sourceMap:!1,shadowMode:!1})},"71e9":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"uni-page-body[data-v-71dea2e8]{min-height:100%;height:auto}\r\n\r\n/* 解决头条小程序字体图标不显示问题，因为头条运行时自动插入了span标签，且有全局字体 */\r\n.uni-icon[data-v-71dea2e8]{font-family:uniicons;font-weight:400}.uni-container[data-v-71dea2e8]{padding:15px;background-color:#f8f8f8}.uni-header-logo[data-v-71dea2e8]{padding:15px 15px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?10?%}.uni-header-image[data-v-71dea2e8]{width:80px;height:80px}.uni-hello-text[data-v-71dea2e8]{margin-bottom:20px}.hello-text[data-v-71dea2e8]{color:#7a7e83;font-size:14px;line-height:20px}.hello-link[data-v-71dea2e8]{color:#7a7e83;font-size:14px;line-height:20px}.uni-panel[data-v-71dea2e8]{margin-bottom:12px}.uni-panel-h[data-v-71dea2e8]{background-color:#fff;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:12px}\r\n/*\r\n.uni-panel-h:active {\r\n    background-color: #f8f8f8;\r\n}\r\n */.uni-panel-h-on[data-v-71dea2e8]{background-color:#f0f0f0}.uni-panel-text[data-v-71dea2e8]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#000;font-size:14px;font-weight:400}.uni-panel-icon[data-v-71dea2e8]{margin-left:15px;color:#999;font-size:14px;font-weight:400;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition-duration:0s;transition-duration:0s;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.uni-panel-icon-on[data-v-71dea2e8]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.uni-navigate-item[data-v-71dea2e8]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;border-top-style:solid;border-top-color:#f0f0f0;border-top-width:1px;padding:12px}.uni-navigate-item[data-v-71dea2e8]:active{background-color:#f8f8f8}.uni-navigate-text[data-v-71dea2e8]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#000;font-size:14px;font-weight:400}.uni-navigate-icon[data-v-71dea2e8]{margin-left:15px;color:#999;font-size:14px;font-weight:400}",""])},"7dda":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"uni-container"},[e.showSetTabBarPage?[a("set-tab-bar",{on:{unmount:function(t){arguments[0]=t=e.$handleEvent(t),e.leaveSetTabBarPage.apply(void 0,arguments)}}})]:[a("v-uni-view",{staticClass:"uni-header-logo"},[a("v-uni-image",{staticClass:"uni-header-image",attrs:{src:"/static/apiIndex.png"}})],1),a("v-uni-view",{staticClass:"uni-hello-text"},[a("v-uni-text",{staticClass:"hello-text"},[e._v("以下将演示uni-app接口能力，详细文档见：")]),a("u-link",{staticClass:"hello-link",attrs:{href:"https://uniapp.dcloud.io/api/",text:"https://uniapp.dcloud.io/api/",inWhiteList:!0}})],1),e._l(e.list,function(t,n){return a("v-uni-view",{key:t.id,staticClass:"uni-panel"},[a("v-uni-view",{staticClass:"uni-panel-h",class:t.open?"uni-panel-h-on":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.triggerCollapse(n)}}},[a("v-uni-text",{staticClass:"uni-panel-text"},[e._v(e._s(t.name))]),a("v-uni-text",{staticClass:"uni-panel-icon uni-icon",class:t.open?"uni-panel-icon-on":""},[e._v("")])],1),t.open?a("v-uni-view",{staticClass:"uni-panel-c"},e._l(t.pages,function(n,i){return a("v-uni-view",{key:i,staticClass:"uni-navigate-item",attrs:{url:t.url},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goDetailPage(n.url)}}},[a("v-uni-text",{staticClass:"uni-navigate-text"},[e._v(e._s(n.name?n.name:n))]),a("v-uni-text",{staticClass:"uni-navigate-icon uni-icon"},[e._v("")])],1)}),1):e._e()],1)})]],2)},i=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})},8627:function(e,t,a){"use strict";a.r(t);var n=a("4551"),i=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);t["default"]=i.a},ae08:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,".button[data-v-3a050dcc]{margin-top:%?30?%;margin-left:0;margin-right:0}.btn-area[data-v-3a050dcc]{padding-top:%?30?%}",""])},bb33:function(e,t,a){"use strict";a.r(t);var n=a("c087"),i=a("8627");for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);a("cd47");var r=a("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"3a050dcc",null);t["default"]=s.exports},c087:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"uni-padding-wrap"},[a("page-head",{attrs:{title:e.title}}),a("v-uni-button",{staticClass:"button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.setTabBarBadge.apply(void 0,arguments)}}},[e._v(e._s(e.hasSetTabBarBadge?"移除tab徽标":"设置tab徽标"))]),a("v-uni-button",{staticClass:"button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showTabBarRedDot.apply(void 0,arguments)}}},[e._v(e._s(e.hasShownTabBarRedDot?"移除红点":"显示红点"))]),a("v-uni-button",{staticClass:"button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.customStyle.apply(void 0,arguments)}}},[e._v(e._s(e.hasCustomedStyle?"移除自定义样式":"自定义Tab样式"))]),a("v-uni-button",{staticClass:"button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.customItem.apply(void 0,arguments)}}},[e._v(e._s(e.hasCustomedItem?"移除自定义信息":"自定义Tab信息"))]),a("v-uni-button",{staticClass:"button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.hideTabBar.apply(void 0,arguments)}}},[e._v(e._s(e.hasHiddenTabBar?"显示TabBar":"隐藏TabBar"))]),a("v-uni-view",{staticClass:"btn-area"},[a("v-uni-button",{staticClass:"button",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navigateBack.apply(void 0,arguments)}}},[e._v("返回上一级")])],1)],1)},i=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})},c26e:function(e,t,a){"use strict";a.r(t);var n=a("614e"),i=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);t["default"]=i.a},cd47:function(e,t,a){"use strict";var n=a("e9ee"),i=a.n(n);i.a},e9ee:function(e,t,a){var n=a("ae08");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("420b812c",n,!0,{sourceMap:!1,shadowMode:!1})}}]);