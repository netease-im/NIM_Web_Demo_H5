import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 定义路由
// 每个路由应该映射一个组件。 其中"component"是一个组件配置对象。
const routes = [
  // 设置聊天列表页面为首页
  { 
    path: '/', 
    redirect: {
      name: 'session'
    }
  },
  // 最近消息列表（会话）
  {
    path: '/session',
    name: 'session',
    component (resolve) {
      require(['../pages/Session'], resolve)
    }
  },
  // 系统消息
  {
    path: '/sysmsgs',
    name: 'sysmsgs',
    component (resolve) {
      require(['../pages/SysMsgs'], resolve)
    }
  },
  // 聊天记录
  {
    path: '/chat/:sessionId',
    name: 'chat',
    component (resolve) {
      require(['../pages/Chat'], resolve)
    }
  },
  // 聊天历史记录
  {
    path: '/chathistory/:sessionId',
    name: 'chathistory',
    component (resolve) {
      require(['../pages/ChatHistory'], resolve)
    }
  },
  // 直播间
  {
    path: '/room',
    name: 'room',
    component (resolve) {
      require(['../pages/Room'], resolve)
    }
  },
  // 直播聊天页
  {
    path: '/roomChat/:chatroomId',
    name: 'roomChat',
    component (resolve) {
      require(['../pages/RoomChat'], resolve)
    }
  },
  // 通讯录
  {
    path: '/contacts',
    name: 'contacts',
    component (resolve) {
      require(['../pages/Contacts'], resolve)
    }
  },
  // 好友名片
  {
    path: '/namecard/:userId',
    name: 'namecard',
    component (resolve) {
      require(['../pages/NameCard'], resolve)
    }
  },
  // 好友名片-设置备注
  {
    path: '/namecardremark/:userId',
    name: 'namecardremark',
    component (resolve) {
      require(['../pages/NameCardRemark'], resolve)
    }
  },
  // 好友名片-搜索好友/群
  {
    path: '/searchuser/:searchType',
    name: 'searchuser',
    component (resolve) {
      require(['../pages/SearchUser'], resolve)
    }
  },
  // 通用页面
  {
    path: '/general',
    name: 'general',
    component (resolve) {
      require(['../pages/General'], resolve)
    }
  }
]

let router = new VueRouter({
  history: true,
  routes
})

export default router
