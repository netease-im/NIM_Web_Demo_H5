import store from '../'
import config from '../../configs'
import util from '../../utils'

export function onChatroomMsgs (msgs) {
  if (!Array.isArray(msgs)) {
    msgs = [msgs]
  }
  if (store.state.currChatroomId) {
    store.commit('updateCurrChatroomMsgs', {
      type: 'put',
      msgs
    })
  }
}

function onSendMsgDone (error, msg) {
  store.dispatch('hideLoading')
  if (error) {
    alert(error.message)
    return
  }
  onChatroomMsgs([msg])
}

export function sendChatroomMsg ({state, commit}, obj) {
  const chatroom = state.currChatroom
  obj = obj || {}
  let type = obj.type || ''
  store.dispatch('showLoading')
  switch (type) {
    case 'text':
      chatroom.sendText({
        text: obj.text,
        done: onSendMsgDone
      })
      break
    case 'custom':
      chatroom.sendCustomMsg({
        content: JSON.stringify(obj.content),
        pushContent: obj.pushContent,
        done: onSendMsgDone
      })
  }
}

export function sendChatroomFileMsg ({state, commit}, obj) {
  const chatroom = state.currChatroom
  let {fileInput} = Object.assign({}, obj)
  let type = 'file'
  if (/\.(png|jpg|bmp|jpeg|gif)$/i.test(fileInput.value)) {
    type = 'image'
  } else if (/\.(mov|mp4|ogg|webm)$/i.test(fileInput.value)) {
    type = 'video'
  }
  store.dispatch('showLoading')
  chatroom.sendFile({
    type,
    fileInput,
    uploadprogress: function (data) {
      // console.log(data.percentageText)
    },
    uploaderror: function () {
      console && console.log('上传失败')
    },
    uploaddone: function(error, file) {
      // console.log(error);
      // console.log(file);
    },
    beforesend: function (msg) {
      // console && console.log('正在发送消息, id=', msg);
    },
    done: function (error, msg) {
      onSendMsgDone (error, msg)
    }
  })
}


export function getChatroomHistoryMsgs ({state, commit}, obj) {
  const chatroom = state.currChatroom
  if (chatroom) {
    let {timetag} = Object.assign({}, obj)
    let options = {
      timetag,
      limit: config.localMsglimit || 20,
      done: function getChatroomHistoryMsgsDone (error, obj) {
        if (obj.msgs) {
          if (obj.msgs.length === 0) {
            commit('setNoMoreHistoryMsgs')
          } else {
            commit('updateCurrChatroomMsgs', {
              type: 'concat',
              msgs: obj.msgs
            })
          }
        }
        store.dispatch('hideLoading')
      }
    }
    store.dispatch('showLoading')
    nim.getHistoryMsgs(options)
  }
}
