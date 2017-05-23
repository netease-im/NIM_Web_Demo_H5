<template>
  <div class="g-window">
    <nav-bar v-show="showNav"></nav-bar>
    <!-- 切页动画设置 -->
    <transition name="slide">
      <router-view></router-view>
    </transition>
    <fullscreen-img></fullscreen-img>
    <loading></loading>
  </div>
</template>

<script>
import Vue from 'vue'
import {Group, Cell, XHeader, XInput, XButton, XSwitch, Datetime, ViewBox, Search, ButtonTab, ButtonTabItem, Divider, AlertPlugin, ConfirmPlugin} from 'vux'
import Loading from './pages/components/Loading'
import FullscreenImg from './pages/components/FullscreenImg'

// 全局注册vux的组件
Vue.component('Group', Group)
Vue.component('Cell', Cell)
Vue.component('Datetime', Datetime)
Vue.component('ButtonTab', ButtonTab)
Vue.component('ButtonTabItem', ButtonTabItem)
Vue.component('Divider', Divider)
Vue.component('Search', Search)
Vue.component('XInput', XInput)
Vue.component('XButton', XButton)
Vue.component('XHeader', XHeader)
Vue.component('XSwitch', XSwitch)

Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)

import NavBar from './pages/components/NavBar'
import cookie from './utils/cookie'

export default {
  // 所有页面更新都会触发此函数
  updated () {
    // 提交sdk连接请求
    this.$store.dispatch('connect')
    this.$store.dispatch('updateRefreshState')
  },
  components: {
    NavBar,
    ViewBox,
    Loading,
    FullscreenImg
  },
  computed: {
    // 是否显示导航条
    showNav () {
      const path = this.$route.path
      switch (path) {
        case '/':
          return true
        case '/session':
          return true
        case '/contacts':
          return true
        case '/room':
          return true
        case '/general':
          return true
        default:
          return false
      }
    }
  }
}
</script>

