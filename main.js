import Vue from 'vue'
import App from './App'

import pageHead from './components/page-head.vue'
import pageFoot from './components/page-foot.vue'
import uLink from '@/components/uLink.vue'
import store from './store'
import { http } from '@/components/luch-request/index.js' // 全局挂载引入，配置相关在该index.js文件里修改
import { createSocket,sendWSPush } from '@/components/yj-analytics/websocket.js' // 全局挂载websocket链接
Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}
Vue.prototype.$http = http
Vue.prototype.$sendWSPush = sendWSPush

Vue.component('page-head', pageHead)
Vue.component('page-foot', pageFoot)
Vue.component('uLink', uLink)

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()

createSocket('ws://10.10.2.162:9000/demo')