import {formatUserInfo} from './userInfo'

export function resetSearchResult ({state, commit}) {
  commit('updateSearchlist', {
    type: 'user',
    list: []
  })
  commit('updateSearchlist', {
    type: 'team',
    list: []
  })
}

export function searchUsers ({state, commit}, obj) {
  let {accounts, done} = obj
  const nim = state.nim
  if (!Array.isArray(accounts)) {
    accounts = [accounts]
  }
  nim.getUsers({
    accounts,
    done: function searchUsersDone (error, users) {
      if (error) {
        alert(error)
        return
      }
      commit('updateSearchlist', {
        type: 'user',
        list: users
      })
      let updateUsers = users.filter(item => {
        let account = item.account
        if (item.account === state.userUID) {
          return false
        }
        let userInfo = state.userInfos[account] || {}
        if (userInfo.isFriend) {
          return false
        }
        return true
      })
      updateUsers = updateUsers.map(item => {
        return formatUserInfo(item)
      })
      commit('updateUserInfo', updateUsers)
      if (done instanceof Function) {
        done(users)
      }
    }
  })
}