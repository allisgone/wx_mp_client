(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-download-file-download-file"],{"0aa4":function(n,t,i){"use strict";var a=i("6a8e"),e=i.n(a);e.a},"2f64":function(n,t,i){"use strict";i.r(t);var a=i("ba66"),e=i("353f");for(var o in e)"default"!==o&&function(n){i.d(t,n,function(){return e[n]})}(o);i("0aa4");var u=i("2877"),r=Object(u["a"])(e["default"],a["a"],a["b"],!1,null,"06a55e07",null);t["default"]=r.exports},"353f":function(n,t,i){"use strict";i.r(t);var a=i("9eba"),e=i.n(a);for(var o in a)"default"!==o&&function(n){i.d(t,n,function(){return a[n]})}(o);t["default"]=e.a},"6a8e":function(n,t,i){var a=i("d20e");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var e=i("4f06").default;e("7187a092",a,!0,{sourceMap:!1,shadowMode:!1})},"9eba":function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{title:"downloadFile",imageSrc:""}},onUnload:function(){this.imageSrc=""},methods:{downloadImage:function(){uni.showLoading({title:"下载中"});var n=this;uni.downloadFile({url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",success:function(t){console.log("downloadFile success, res is",t),n.imageSrc=t.tempFilePath,uni.hideLoading()},fail:function(n){console.log("downloadFile fail, err is:",n)}})}}};t.default=a},ba66:function(n,t,i){"use strict";var a=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",[i("page-head",{attrs:{title:n.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n.imageSrc?i("v-uni-image",{staticClass:"img",attrs:{src:n.imageSrc,mode:"center"}}):[i("v-uni-view",{staticClass:"uni-hello-text"},[n._v("点击按钮下载服务端示例图片（下载网络文件到本地临时目录）")]),i("v-uni-view",{staticClass:"uni-btn-v"},[i("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.downloadImage.apply(void 0,arguments)}}},[n._v("下载")])],1)]],2)],1)},e=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return e})},d20e:function(n,t,i){t=n.exports=i("2350")(!1),t.push([n.i,".img[data-v-06a55e07]{width:%?500?%;height:%?500?%;margin:0 %?95?%}",""])}}]);