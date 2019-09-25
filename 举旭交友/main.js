import Vue from 'vue'
import App from './App'
import './static/css/iconfont.css'
import './static/css/basic.scss'

Vue.config.productionTip = false

import cuCustom from './components/colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

import cuTab from './components/colorui/components/cu-tab.vue'
Vue.component('cu-tab',cuTab)

Vue.prototype.global = {
	// baseUrl:'http://jxdating.mozile.cn:8081/'
	// baseUrl:'http://www.daichen.club/'
	
	baseUrl:'http://192.168.1.7:8080/Jxdating/'
}
Vue.prototype.GetTime = function (nS) {
    return new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/, ' ');
},
Vue.prototype.jumpToLogin = function(){
	uni.showToast({
		title:'请登录后操作!',
		icon:'none'
	})
	setTimeout(()=>{
		uni.navigateTo({
			url:'../login/login'
		})
	},1000)
}

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
