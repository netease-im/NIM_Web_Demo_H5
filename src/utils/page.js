import config from '../configs'

const pageMap = {
  'login': config.loginUrl,
  'regist': config.registUrl,
}

var scrollTimer = null

var page = {
  turnPage: function (message, url) {
    if (message) {
      alert(message)
    }
    if (url) {
      if (pageMap[url]) {
        url = pageMap[url]
      }
      window.location.href = url
    }
  },
  scrollChatListDown: function (pos, initCount) {
    let dom = document.getElementById('chat-list')
    if (!dom) {
      return
    }
    let maxCount = 5
    initCount = initCount || 1
    if (typeof pos !== 'number') {
      pos = Math.max(dom.scrollHeight - dom.clientHeight, 888888)
    }
    dom.scrollTop = pos
    if ((dom.scrollTop < pos) && (initCount < maxCount)) {
      clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => {
        initCount++
        page.scrollChatListDown(pos, initCount)
      }, 200)
    }
  },
  getChatListHeight: function () {
    return document.getElementById('chat-list').scrollHeight
  },
  getChatListScroll: function () {
    return document.getElementById('chat-list').scrollTop
  },
}

export default page