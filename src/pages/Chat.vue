<template>
  <div class="g-inherit m-article">
    <x-header class="m-tab" :left-options="leftBtnOptions" @on-click-back = "onClickBack">
      <h1 class="m-tab-top" @click="enterNameCard">{{sessionName}}</h1>
      <a slot="left"></a>
      <group class="m-tab-right" slot="right">
        <a :href="'#/chathistory/'+sessionId">历史消息</a>
      </group>
    </x-header>
    <div class="m-chat-main">
      <chat-list
        type="session"
        :msglist="msglist"
        :userInfos="userInfos"
        :myInfo="myInfo"
        @msgs-loaded="msgsLoaded"
      ></chat-list>
      <chat-editor
        type="session"
        :scene="scene"
        :to="to"
      ></chat-editor>
    </div>
  </div>
</template>

<script>
import ChatEditor from './components/ChatEditor'
import ChatList from './components/ChatList'
import util from '../utils'
import pageUtil from '../utils/page'


export default {
  components: {
    ChatEditor,
    ChatList
  },
  // 进入该页面，文档被挂载
  mounted () {
    this.$store.dispatch('showLoading')
    // 此时设置当前会话
    this.$store.dispatch('setCurrSession', this.sessionId)
    pageUtil.scrollChatListDown()
    setTimeout(() => {
      this.$store.dispatch('hideLoading')
    }, 1000)
  },
  updated () {
    pageUtil.scrollChatListDown()
  },
  // 离开该页面，此时重置当前会话
  destroyed () {
    this.$store.dispatch('resetCurrSession')
  },
  data () {
    return {
      leftBtnOptions: {
        backText: ' ',
        preventGoBack: true,
      }
    }
  },
  computed: {
    sessionId () {
      let sessionId = this.$route.params.sessionId
      return sessionId
    },
    sessionName () {
      let sessionId = this.sessionId
      let user = null
      if (/^p2p-/.test(sessionId)) {
        user = sessionId.replace(/^p2p-/, '')
        if (user === this.$store.state.userUID) {
          return '我的手机'
        }
        let userInfo = this.userInfos[user] || {}
        return util.getFriendAlias(userInfo)
      } else if (/^team-/.test(sessionId)) {
        return '群'
      }
    },
    scene () {
      return util.parseSession(this.sessionId).scene
    },
    to () {
      return util.parseSession(this.sessionId).to
    },
    myInfo () {
      return this.$store.state.myInfo
    },
    userInfos () {
      return this.$store.state.userInfos
    },
    msglist () {
      let msgs = this.$store.state.currSessionMsgs
      return msgs
    }
  },
  methods: {
    onClickBack () {
      // location.href = '#/contacts'
      window.history.go(-1)
    },
    msgsLoaded () {
      pageUtil.scrollChatListDown()
    },
    enterNameCard () {
      if (/^p2p-/.test(this.sessionId)) {
        let account = this.sessionId.replace(/^p2p-/, '')
        if (account === this.$store.state.userUID) {
          location.href = `#/general`
          return
        }
        location.href = `#/namecard/${account}`
      }
    }
  }
}
</script>
