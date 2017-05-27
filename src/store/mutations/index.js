// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
// this.$store.commit(method, params)

import store from '../'
import cookie from '../../utils/cookie'
import util from '../../utils'
import config from '../../configs'

export default {
  updateRefreshState (state) {
    state.isRefresh = false
  },
  updateLoading (state, status) {
    clearTimeout(state.loadingTimer)
    state.loadingTimer = setTimeout(() => {
      state.isLoading = status
    }, 20)
  },
  updateFullscreenImage (state, obj) {
    obj = obj || {}
    if (obj.src && obj.type === 'show') {
      state.fullscreenImgSrc = obj.src
      state.isFullscreenImgShow = true
    } else if (obj.type === 'hide') {
      state.fullscreenImgSrc = ' '
      state.isFullscreenImgShow = false
    }
  },
  updateUserUID (state, loginInfo) {
    state.userUID = loginInfo.uid
    state.sdktoken = loginInfo.sdktoken
    cookie.setCookie('uid', loginInfo.uid)
    cookie.setCookie('sdktoken', loginInfo.sdktoken)
  },
  updateMyInfo (state, myInfo) {
    state.myInfo = util.mergeObject(state.myInfo, myInfo)
  },
  updateUserInfo (state, users) {
    let userInfos = state.userInfos
    users.forEach(user => {
      let account = user.account
      if (account) {
        userInfos[account] = util.mergeObject(userInfos[account], user)
      }
    })
    state.userInfos = util.mergeObject(state.userInfos, userInfos)
  },
  updateFriends (state, friends, cutFriends = []) {
    const nim = state.nim
    state.friendslist = nim.mergeFriends(state.friendslist, friends)
    // state.friendslist = nim.cutFriends(state.friendslist, cutFriends)
    state.friendslist = nim.cutFriends(state.friendslist, friends.invalid)
  },
  updateBlacklist (state, blacks) {
    const nim = state.nim
    state.blacklist = nim.cutFriends(state.blacklist, blacks.invalid)
    let addBlacks = blacks.filter(item => {
      return item.isBlack === true
    })
    let remBlacks = blacks.filter(item => {
      return item.isBlack === false
    })
    // 添加黑名单
    state.blacklist = nim.mergeFriends(state.blacklist, addBlacks)
    // 解除黑名单
    state.blacklist = nim.cutFriends(state.blacklist, remBlacks)
  },
  updateSearchlist (state, obj) {
    const type = obj.type
    switch (type) {
      case 'user':
        if (obj.list.length !== 0 || state.searchedUsers.length !== 0) {
          state.searchedUsers = obj.list
        } else {
          state.searchedUsers = []
        }
        break
      case 'team':
        if (obj.list.length !== 0 || state.searchedTeams.length !== 0) {
          state.searchedTeams = obj.list
        } else {
          state.searchedTeams = []
        }
        break
    }
  },
  updateSessions (state, sessions) {
    const nim = state.nim
    state.sessionlist = nim.mergeSessions(state.sessionlist, sessions)
    state.sessionlist = state.sessionlist.filter(item => {
      if (/^team-/.test(item.id)) {
        return false
      }
      return true
    })
    state.sessionlist.sort((a, b) => {
      return b.updateTime - a.updateTime
    })
    state.sessionlist.forEach(item => {
      state.sessionMap[item.id] = item
    })
  },
  deleteSessions (state, sessionIds) {
    const nim = state.nim
    state.sessionlist = nim.cutSessionsByIds(state.sessionlist, sessionIds)
  },
  // 初始化，收到离线漫游消息时调用
  updateMsgs (state, msgs) {
    const nim = state.nim
    let tempSessionMap = {}
    msgs.forEach(msg => {
      let sessionId = msg.sessionId
      tempSessionMap[sessionId] = true
      if (!state.msgs[sessionId]) {
        state.msgs[sessionId] = []
      }
      // sdk会做消息去重
      state.msgs[sessionId] = nim.mergeMsgs(state.msgs[sessionId], [msg])
      // state.msgs[sessionId].push(msg)
    })
    store.commit('updateMsgByIdClient', msgs)
    for (let sessionId in tempSessionMap) {
      state.msgs[sessionId].sort((a, b) => {
        return a.time - b.time
      })
      if (sessionId === state.currSessionId) {
        store.commit('updateCurrSessionMsgs', {
          type: 'init'
        })
      }
    }
  },
  // 更新追加消息，追加一条消息
  putMsg (state, msg) {
    let sessionId = msg.sessionId
    if (!state.msgs[sessionId]) {
      state.msgs[sessionId] = []
    }
    store.commit('updateMsgByIdClient', msg)
    let tempMsgs = state.msgs[sessionId]
    let lastMsgIndex = tempMsgs.length  - 1
    if (tempMsgs.length === 0 || msg.time >= tempMsgs[lastMsgIndex].time) {
      tempMsgs.push(msg)
    } else {
      for (let i = lastMsgIndex; i >= 0; i--) {
        let currMsg = tempMsgs[i]
        if (msg.time >= currMsg.time) {
          state.msgs[sessionId].splice(i, 0, msg)
          break
        }
      }
    }
  },
  // 删除消息列表消息
  deleteMsg (state, msg) {
    let sessionId = msg.sessionId
    let tempMsgs = state.msgs[sessionId]
    if (!tempMsgs || tempMsgs.length === 0) {
      return
    }
    let lastMsgIndex = tempMsgs.length  - 1
    for (let i = lastMsgIndex; i >= 0; i--) {
      let currMsg = tempMsgs[i]
      if (msg.idClient === currMsg.idClient) {
        state.msgs[sessionId].splice(i, 1)
        break
      }
    }
  },
  // 替换消息列表消息，如消息撤回
  replaceMsg (state, obj) {
    let {sessionId, idClient, msg} = obj
    let tempMsgs = state.msgs[sessionId]
    if (!tempMsgs || tempMsgs.length === 0) {
      return
    }
    let lastMsgIndex = tempMsgs.length  - 1
    for (let i = lastMsgIndex; i >= 0; i--) {
      let currMsg = tempMsgs[i]
      console.log(idClient, currMsg.idClient, currMsg.text)
      if (idClient === currMsg.idClient) {
        state.msgs[sessionId].splice(i, 1, msg)
        break
      }
    }
  },
  // 用idClient 更新消息，目前用于消息撤回
  updateMsgByIdClient (state, msgs) {
    if (!Array.isArray(msgs)) {
      msgs = [msgs]
    }
    let tempTime = (new Date()).getTime()
    msgs.forEach(msg => {
      // 有idClient 且 5分钟以内的消息
      if (msg.idClient && (tempTime - msg.time < 1000 * 300)) {
        state.msgsMap[msg.idClient] = msg
      }
    })
  },
  // 更新当前会话id，用于唯一判定是否在current session状态
  updateCurrSessionId (state, obj) {
    let type = obj.type || ''
    if (type === 'destroy') {
      state.currSessionId = null
    } else if (type === 'init') {
      if (obj.sessionId && (obj.sessionId !== state.currSessionId)) {
        state.currSessionId = obj.sessionId
      }
    }
  },
  // 更新当前会话列表的聊天记录，包括历史消息、单聊消息等，不包括聊天室消息
  // replace: 替换idClient的消息
  updateCurrSessionMsgs (state, obj) {
    let type = obj.type || ''
    if (type === 'destroy') { // 清空会话消息
      state.currSessionMsgs = []
      state.currSessionLastMsg = null
      store.commit('updateCurrSessionId', {
        type: 'destroy'
      })
    } else if (type === 'init') { // 初始化会话消息列表
      if (state.currSessionId) {
        let sessionId = state.currSessionId
        let currSessionMsgs = [].concat(state.msgs[sessionId] || [])
        // 做消息截断
        let limit = config.localMsglimit
        let msgLen = currSessionMsgs.length
        if (msgLen - limit > 0) {
          state.currSessionLastMsg = currSessionMsgs[msgLen - limit]
          currSessionMsgs = currSessionMsgs.slice(msgLen - limit, msgLen)
        } else if (msgLen > 0) {
          state.currSessionLastMsg = currSessionMsgs[0]
        } else {
          state.currSessionLastMsg = null
        }
        state.currSessionMsgs = []
        let lastMsgTime = 0
        currSessionMsgs.forEach(msg => {
          if ((msg.time - lastMsgTime) > 1000 * 60 * 5) {
            lastMsgTime = msg.time
            state.currSessionMsgs.push({
              type: 'timeTag',
              text: util.formatDate(msg.time, false)
            })
          }
          state.currSessionMsgs.push(msg)
        })
      }
    } else if (type === 'put') { // 追加一条消息
      let newMsg = obj.msg
      let lastMsgTime = 0
      let lenCurrMsgs = state.currSessionMsgs.length
      if (lenCurrMsgs > 0) {
        lastMsgTime = state.currSessionMsgs[lenCurrMsgs - 1].time
      }
      if (newMsg) {
        if ((newMsg.time - lastMsgTime) > 1000 * 60 * 5) {
          state.currSessionMsgs.push({
            type: 'timeTag',
            text: util.formatDate(newMsg.time, false)
          })
        }
        state.currSessionMsgs.push(newMsg)
      }
    } else if (type === 'concat') {
      // 一般用于历史消息拼接
      let currSessionMsgs = []
      let lastMsgTime = 0
      obj.msgs.forEach(msg => {
        if ((msg.time - lastMsgTime) > 1000 * 60 * 5) {
          lastMsgTime = msg.time
          currSessionMsgs.push({
            type: 'timeTag',
            text: util.formatDate(msg.time, false)
          })
        }
        currSessionMsgs.push(msg)
      })
      currSessionMsgs.reverse()
      currSessionMsgs.forEach(msg => {
        state.currSessionMsgs.unshift(msg)
      })
      if (obj.msgs[0]) {
        state.currSessionLastMsg = obj.msgs[0]
      }
    } else if (type === 'replace') {
      let msgLen = state.currSessionMsgs.length
      let lastMsgIndex = msgLen - 1
      if (msgLen > 0) {
        for (let i = lastMsgIndex; i >= 0; i--) {
          if (state.currSessionMsgs[i].idClient === obj.idClient) {
            state.currSessionMsgs.splice(i, 1, obj.msg)
            break
          }
        }
      }
    }
  },
  updateSysMsgs (state, sysMsgs) {
    const nim = state.nim
    if (!Array.isArray(sysMsgs)) {
      sysMsgs = [sysMsgs]
    }
    sysMsgs = sysMsgs.map(msg => {
      msg.showTime = util.formatDate(msg.time, false)
      return msg
    })
    // state.sysMsgs = nim.mergeSysMsgs(state.sysMsgs, sysMsgs)
    state.sysMsgs = [].concat(nim.mergeSysMsgs(state.sysMsgs, sysMsgs))
  },
  updateSysMsgUnread (state, obj) {
    state.sysMsgUnread = obj
  },
  updateCustomSysMsgs (state, sysMsgs) {
    const nim = state.nim
    if (!Array.isArray(sysMsgs)) {
      sysMsgs = [sysMsgs]
    }
    sysMsgs = sysMsgs.map(msg => {
      msg.showTime = util.formatDate(msg.time, false)
      return msg
    })
    // state.customSysMsgs = nim.mergeSysMsgs(state.customSysMsgs, sysMsgs)
    state.customSysMsgs = state.customSysMsgs.concat(sysMsgs)
    store.commit('updateCustomSysMsgUnread', {
      type: 'add',
      unread: sysMsgs.length
    })
  },
  updateCustomSysMsgUnread (state, obj) {
    let {type, unread} = obj
    switch (type) {
      case 'reset':
        state.customSysMsgUnread = unread || 0
        break
      case 'add':
        state.customSysMsgUnread += unread
        break
    }
  },
  resetSysMsgs (state, obj) {
    let type = obj.type
    switch (type) {
      case 0:
        state.sysMsgs = []
        break
      case 1:
        state.customSysMsgs = []
        store.commit('updateCustomSysMsgUnread', {
          type: 'reset'
        })
        break
    }
  },
  setNoMoreHistoryMsgs (state) {
    state.noMoreHistoryMsgs = true
  },
  resetNoMoreHistoryMsgs (state) {
    state.noMoreHistoryMsgs = false
  },

  initChatroomInfos (state, obj) {
    state.chatroomInfos = obj
  },
  setCurrChatroom (state, chatroomId) {
    state.currChatroomId = chatroomId
    state.currChatroom = state.chatroomInsts[chatroomId]
    state.currChatroomMsgs = []
    state.currChatroomInfo = {}
    state.currChatroomMembers = []
  },
  resetCurrChatroom (state) {
    state.currChatroomId = null
    state.currChatroom = null
    state.currChatroomMsgs = []
    state.currChatroomInfo = {}
    state.currChatroomMembers = []
  },
  // 聊天室相关逻辑
  updateChatroomInfo (state, obj) {
    state.currChatroomInfo = Object.assign(state.currChatroomInfo, obj)
  },
  updateCurrChatroomMsgs (state, obj) {
    let {type, msgs} = Object.assign({}, obj)
    if (type === 'put') {
      msgs.forEach(msg => {
        let chatroomId = msg.chatroomId
        if (chatroomId === state.currChatroomId) {
          msgs.forEach(msg => {
            state.currChatroomMsgs.push(msg)
          })
        }
      })
    } else if (type === 'concat') {
      // 一般用于历史消息拼接
      let currSessionMsgs = obj.msgs
      currSessionMsgs.reverse()
      currSessionMsgs.forEach(msg => {
        state.currSessionMsgs.unshift(msg)
      })
      if (obj.msgs[0]) {
        state.currSessionLastMsg = obj.msgs[0]
      }
    }
  },
  getChatroomInfo (state, obj) {
    state.currChatroomInfo = obj
  },
  updateChatroomMembers (state, obj) {
    let {type, members} = obj
    if (type === 'destroy') {
      state.currChatroomMembers = []
    } else if (type === 'put') {
      members.forEach(member => {
        if (member.online) {
          state.currChatroomMembers.push(member)
        }
      })
    }
  }
}