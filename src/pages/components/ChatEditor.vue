<template>
  <div class="m-chat-editor">
    <chat-emoji
      v-bind:type="type"
      v-bind:scene="scene"
      v-bind:to="to"
      v-show="isEmojiShown"
      v-on:add-emoji="addEmoji"
      v-on:hide-emoji="hideEmoji"
    ></chat-emoji>
    <div class="m-chat-editor-main">
      <span class="u-editor-input">
        <textarea v-model="msgToSent"></textarea>
      </span>
      <span class="u-editor-icons">
        <span class="u-editor-icon" @click.stop="showEmoji">
          <i class="u-icon-img"><img :src="icon1"></i>
        </span>
        <span v-if="type==='session'" class="u-editor-icon" @change="sendFileMsg">
          <i class="u-icon-img"><img :src="icon2"></i>
          <input type="file" ref="fileToSent">
        </span>
        <span class="u-editor-icon" @click.stop="sendPlayMsg">
          <i class="u-icon-img"><img :src="icon3"></i>
        </span>
        <span class="u-editor-send" @click="sendTextMsg">发 送</span>
      </span>
    </div>
  </div>
</template>

<script>
import ChatEmoji from './ChatEmoji'
import util from '../../utils'
import config from '../../configs'

export default {
  components: {
    ChatEmoji
  },
  updated () {
    window.document.body.addEventListener('click', () => {
      this.isEmojiShown = false
    })
  },
  props: {
    type: String,
    scene: String,
    to: String
  },
  data () {
    return {
      isEmojiShown: false,
      msgToSent: '',
      icon1: `${config.resourceUrl}/im/chat-editor-1.png`,
      icon2: `${config.resourceUrl}/im/chat-editor-2.png`,
      icon3: `${config.resourceUrl}/im/chat-editor-3.png`,
    }
  },
  methods: {
    sendTextMsg () {
      if (/^\s*$/.test(this.msgToSent)) {
        this.$vux.alert.show({
          title: '请不要刷屏'
        })
        return
      } else if (this.msgToSent.length > 800) {
        this.$vux.alert.show({
          title: '请不要超过800个字'
        })
        return
      }
      if (this.type === 'session') {
        this.$store.dispatch('sendMsg', {
          type: 'text',
          scene: this.scene,
          to: this.to,
          text: this.msgToSent
        })
      } else if (this.type === 'chatroom') {
        this.$store.dispatch('sendChatroomMsg', {
          type: 'text',
          text: this.msgToSent
        })
      }
      this.msgToSent = ''
    },
    sendPlayMsg () {
      // 发送猜拳消息
      if (this.type === 'session') {
        this.$store.dispatch('sendMsg', {
          type: 'custom',
          scene: this.scene,
          to: this.to,
          pushContent: '[猜拳]',
          content: {
            type: 1,
            data: {
              value: Math.ceil(Math.random()*3)
            }
          }
        })
      } else if (this.type === 'chatroom') {
        this.$store.dispatch('sendChatroomMsg', {
          type: 'custom',
          pushContent: '[猜拳]',
          content: {
            type: 1,
            data: {
              value: Math.ceil(Math.random()*3)
            }
          }
        })
      }
    },
    sendFileMsg () {
      let ipt = this.$refs.fileToSent
      if (ipt.value) {
        if (this.type === 'session') {
          this.$store.dispatch('sendFileMsg', {
            scene: this.scene,
            to: this.to,
            fileInput: ipt
          })
        } else if (this.type === 'chatroom') {
          this.$store.dispatch('sendChatroomFileMsg', {
            fileInput: ipt
          })
        }
      }
    },
    showEmoji () {
      this.isEmojiShown = true
    },
    hideEmoji () {
      this.isEmojiShown = false
    },
    addEmoji (emojiName) {
      this.msgToSent += emojiName
      this.hideEmoji()
    }
  }
}
</script>
