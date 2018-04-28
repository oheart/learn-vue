import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router'

import './assets/style/reset.css'
import './assets/style/index.less'
import './utils/fontSize'

// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

new Vue({
  router
}).$mount('#app')
