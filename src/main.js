// import 'babel-polyfill'
import Vue from 'vue'
import App from './App'

// // 添加Fastclick移除移动端点击延迟
// import FastClick from 'fastclick'
// FastClick.attach(document.body)

// 添加手势触摸事件，使用方法如 v-touch:swipeleft
import VueTouch from './plugins/touchEvent'
Vue.use(VueTouch)

// 同步单页路由与数据中心
import store from './store'
import router from './router'

// 单页应用模拟页面浏览历史记录
let history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

