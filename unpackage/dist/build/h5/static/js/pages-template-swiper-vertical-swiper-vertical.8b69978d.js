(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-swiper-vertical-swiper-vertical"],{"2e72":function(n,t,e){t=n.exports=e("2350")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nuni-page-body[data-v-3c097a2f]{width:100%;min-height:100%;display:-webkit-box;display:-webkit-flex;display:flex}\n.page[data-v-3c097a2f]{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:%?750?%}.swiper[data-v-3c097a2f]{-webkit-box-flex:1;-webkit-flex:1;flex:1;background-color:#007aff}.swiper-item[data-v-3c097a2f]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.video[data-v-3c097a2f]{-webkit-box-flex:1;-webkit-flex:1;flex:1;\nwidth:100%\n}",""])},"38e8":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=[{src:"https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-01.mp4"},{src:"https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-02.mp4"},{src:"https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-03.mp4"},{src:"https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-01.mp4"},{src:"https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-02.mp4"},{src:"https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-03.mp4"}],s={data:function(){return{circular:!0,videoList:[{id:"video0",src:"",img:""},{id:"video1",src:"",img:""},{id:"video2",src:"",img:""}],videoDataList:[]}},onLoad:function(n){},onReady:function(){this.init(),this.getData()},methods:{init:function(){this._videoIndex=0,this._videoContextList=[];for(var n=0;n<this.videoList.length;n++)this._videoContextList.push(uni.createVideoContext("video"+n,this));this._videoDataIndex=0},getData:function(n){var t=this;this.videoDataList=i,setTimeout(function(){t.updateVideo(!0)},200)},onSwiperChange:function(n){var t=this,e=n.detail.current;if(e!==this._videoIndex){var i=!1;0===e&&this._videoIndex===this.videoList.length-1?i=!0:e===this.videoList.length-1&&0===this._videoIndex?i=!1:e>this._videoIndex&&(i=!0),i?this._videoDataIndex++:this._videoDataIndex--,this._videoDataIndex<0?this._videoDataIndex=this.videoDataList.length-1:this._videoDataIndex>=this.videoDataList.length&&(this._videoDataIndex=0),this.circular=0!=this._videoDataIndex,this._videoIndex>=0&&(this._videoContextList[this._videoIndex].pause(),this._videoContextList[this._videoIndex].seek(0)),this._videoIndex=e,setTimeout(function(){t.updateVideo(i)},200)}},getNextIndex:function(n){var t=this._videoIndex+(n?1:-1);return t<0?this.videoList.length-1:t>=this.videoList.length?0:t},getNextDataIndex:function(n){var t=this._videoDataIndex+(n?1:-1);return t<0?this.videoDataList.length-1:t>=this.videoDataList.length?0:t},updateVideo:function(n){var t=this;this.$set(this.videoList[this._videoIndex],"src",this.videoDataList[this._videoDataIndex].src),this.$set(this.videoList[this.getNextIndex(n)],"src",this.videoDataList[this.getNextDataIndex(n)].src),setTimeout(function(){t._videoContextList[t._videoIndex].play()},200),console.log("v:"+this._videoIndex+" d:"+this._videoDataIndex+"; next v:"+this.getNextIndex(n)+" next d:"+this.getNextDataIndex(n))}}};t.default=s},"47e7":function(n,t,e){"use strict";e.r(t);var i=e("38e8"),s=e.n(i);for(var d in i)"default"!==d&&function(n){e.d(t,n,function(){return i[n]})}(d);t["default"]=s.a},"7b48":function(n,t,e){var i=e("2e72");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var s=e("4f06").default;s("989cc43a",i,!0,{sourceMap:!1,shadowMode:!1})},"9f7c":function(n,t,e){"use strict";e.r(t);var i=e("ee7b"),s=e("47e7");for(var d in s)"default"!==d&&function(n){e.d(t,n,function(){return s[n]})}(d);e("e6a2");var a=e("2877"),o=Object(a["a"])(s["default"],i["a"],i["b"],!1,null,"3c097a2f",null);t["default"]=o.exports},e6a2:function(n,t,e){"use strict";var i=e("7b48"),s=e.n(i);s.a},ee7b:function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"page"},[e("v-uni-swiper",{staticClass:"swiper",attrs:{circular:n.circular,vertical:!0},on:{change:function(t){arguments[0]=t=n.$handleEvent(t),n.onSwiperChange.apply(void 0,arguments)}}},n._l(n.videoList,function(n){return e("v-uni-swiper-item",{key:n.id},[e("v-uni-video",{ref:n.id,refInFor:!0,staticClass:"video",attrs:{id:n.id,src:n.src,controls:!1,loop:!0,"show-center-play-btn":!1}})],1)}),1)],1)},s=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return s})}}]);