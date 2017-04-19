import Vue from 'vue'
import App from './App.vue'

import './assets/css/base.css'
import './assets/css/mintUI.css'

import './assets/js/fixScreen.js'
import mintUI from 'mint-ui';
import VueRouter from 'vue-router'
import routes from './router.config.js'
import axios from 'axios'
import store from './store/'
console.log(store)
Vue.use(mintUI)
Vue.use(VueRouter)



Vue.prototype.$http = axios;

var router = new VueRouter({
	routes:routes,
	mode: 'history', //切换路径模式，变成history模式
  	scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
})

new Vue({

  el: '#app',
  router,
  store,
  render: h => h(App)
})
