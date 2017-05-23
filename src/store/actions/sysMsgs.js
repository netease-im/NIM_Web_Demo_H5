import store from '../'
import {onUpdateFriend, onDeleteFriend} from './friends'
import {onRevocateMsg} from './msgs'

export function onSysMsgs (sysMsgs) {
  store.commit('updateSysMsgs', sysMsgs)
}

export function onSysMsg (sysMsg) {
  switch (sysMsg.type) {
    // 在其他端添加或删除好友
    case 'addFriend':
      onUpdateFriend(null, {
        account: sysMsg.from
      })
      store.commit('updateSysMsgs', [sysMsg])
      break
    case 'deleteFriend':
      onDeleteFriend(null, {
        account: sysMsg.from
      })
      break
    // 对方消息撤回
    case 'deleteMsg':
      sysMsg.sessionId = `${sysMsg.scene}-${sysMsg.from}`
      onRevocateMsg(null, sysMsg)
      break
  }
}

export function onSysMsgUnread (obj) {
  store.commit('updateSysMsgUnread', obj)
}

export function onCustomSysMsgs (customSysMsgs) {
  if (!Array.isArray(customSysMsgs)) {
    customSysMsgs = [customSysMsgs]
  }
  customSysMsgs = customSysMsgs.filter(msg => {
    if (msg.type === 'custom') {
      if (msg.content) {
        try {
          let content = JSON.parse(msg.content)
          // 消息正在输入中
          if (content.id === 1) {
            return false
          }
        } catch (e) {}
      }
    }
    return true
  })
  if (customSysMsgs.length > 0) {
    store.commit('updateCustomSysMsgs', customSysMsgs)
  }
}

// 不传obj则全部重置
export function markSysMsgRead ({state, commit}, obj) {
  const nim = state.nim
  let sysMsgs = []
  if (obj && obj.sysMsgs) {
    sysMsgs = obj.sysMsgs
  } else {
    sysMsgs = state.sysMsgs
  }
  if (Array.isArray(sysMsgs) && sysMsgs.length > 0) {
    nim.markSysMsgRead({
      sysMsgs,
      done: function (error, obj) {
      }
    })
  }
}

export function markCustomSysMsgRead ({state, commit}) {
  commit('updateCustomSysMsgUnread', {
    type: 'reset'
  })
}

export function resetSysMsgs ({state, commit}, obj) {
  commit('resetSysMsgs', obj)
}