(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-progress-progress"],{"28d3":function(t,s,e){"use strict";e.r(s);var r=e("62b4"),n=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(s,t,function(){return r[t]})}(i);s["default"]=n.a},"493f":function(t,s,e){"use strict";var r=e("813c"),n=e.n(r);n.a},"62b4":function(t,s,e){"use strict";var r=e("288e");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var n=r(e("56a7")),i={data:function(){return{title:"progress",pgList:[0,0,0,0]}},components:{uniIcons:n.default},methods:{setProgress:function(){this.pgList=[20,40,60,80]},clearProgress:function(){this.pgList=[0,0,0,0]}}};s.default=i},"813c":function(t,s,e){var r=e("df49");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=e("4f06").default;n("044355bd",r,!0,{sourceMap:!1,shadowMode:!1})},"8ecd":function(t,s,e){"use strict";var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-uni-view",[e("page-head",{attrs:{title:t.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",{staticClass:"progress-box"},[e("v-uni-progress",{attrs:{percent:t.pgList[0],"show-info":"","stroke-width":"3"}})],1),e("v-uni-view",{staticClass:"progress-box"},[e("v-uni-progress",{attrs:{percent:t.pgList[1],"stroke-width":"3"}}),e("uni-icons",{staticClass:"progress-cancel",attrs:{type:"close",color:"#dd524d"}})],1),e("v-uni-view",{staticClass:"progress-box"},[e("v-uni-progress",{attrs:{percent:t.pgList[2],"stroke-width":"3"}})],1),e("v-uni-view",{staticClass:"progress-box"},[e("v-uni-progress",{attrs:{percent:t.pgList[3],activeColor:"#10AEFF","stroke-width":"3"}})],1),e("v-uni-view",{staticClass:"progress-control"},[e("v-uni-button",{attrs:{type:"primary"},on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.setProgress.apply(void 0,arguments)}}},[t._v("设置进度")]),e("v-uni-button",{attrs:{type:"warn"},on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.clearProgress.apply(void 0,arguments)}}},[t._v("清除进度")])],1)],1)],1)},n=[];e.d(s,"a",function(){return r}),e.d(s,"b",function(){return n})},df49:function(t,s,e){s=t.exports=e("2350")(!1),s.push([t.i,".progress-box[data-v-421b7bf4]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?50?%;margin-bottom:%?60?%}.uni-icon[data-v-421b7bf4]{line-height:1.5}.progress-cancel[data-v-421b7bf4]{margin-left:%?40?%}.progress-control uni-button[data-v-421b7bf4]{margin-top:%?20?%}",""])},e02d:function(t,s,e){"use strict";e.r(s);var r=e("8ecd"),n=e("28d3");for(var i in n)"default"!==i&&function(t){e.d(s,t,function(){return n[t]})}(i);e("493f");var o=e("2877"),a=Object(o["a"])(n["default"],r["a"],r["b"],!1,null,"421b7bf4",null);s["default"]=a.exports}}]);