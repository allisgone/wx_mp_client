(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-upload-file-upload-file"],{2681:function(e,a,t){"use strict";var i=t("cf53"),n=t.n(i);n.a},"333d":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{title:"uploadFile",imageSrc:""}},onUnload:function(){this.imageSrc=""},methods:{chooseImage:function(){var e=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(a){console.log("chooseImage success, temp path is",a.tempFilePaths[0]);var t=a.tempFilePaths[0];uni.uploadFile({url:"https://unidemo.dcloud.net.cn/upload",filePath:t,fileType:"image",name:"data",success:function(a){console.log("uploadImage success, res is:",a),uni.showToast({title:"上传成功",icon:"success",duration:1e3}),e.imageSrc=t},fail:function(e){console.log("uploadImage fail",e),uni.showModal({content:e.errMsg,showCancel:!1})}})},fail:function(e){console.log("chooseImage fail",e)}})}}};a.default=i},5751:function(e,a,t){a=e.exports=t("2350")(!1),a.push([e.i,".image[data-v-5c7320fa]{width:100%}.demo[data-v-5c7320fa]{background:#fff;padding:%?50?%}",""])},7471:function(e,a,t){"use strict";t.r(a);var i=t("a865"),n=t("8a89");for(var o in n)"default"!==o&&function(e){t.d(a,e,function(){return n[e]})}(o);t("2681");var s=t("2877"),c=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"5c7320fa",null);a["default"]=c.exports},"8a89":function(e,a,t){"use strict";t.r(a);var i=t("333d"),n=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(a,e,function(){return i[e]})}(o);a["default"]=n.a},a865:function(e,a,t){"use strict";var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",[t("page-head",{attrs:{title:e.title}}),t("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[t("v-uni-view",{staticClass:"demo"},[e.imageSrc?[t("v-uni-image",{staticClass:"image",attrs:{src:e.imageSrc,mode:"widthFix"}})]:[t("v-uni-view",{staticClass:"uni-hello-addfile",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.chooseImage.apply(void 0,arguments)}}},[e._v("+ 选择图片")])]],2)],1)],1)},n=[];t.d(a,"a",function(){return i}),t.d(a,"b",function(){return n})},cf53:function(e,a,t){var i=t("5751");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=t("4f06").default;n("11b24f9a",i,!0,{sourceMap:!1,shadowMode:!1})}}]);