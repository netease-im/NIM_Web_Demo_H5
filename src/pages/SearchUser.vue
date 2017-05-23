<template>
  <div class="g-inherit m-article p-search-user">
    <x-header class="m-tab" :left-options="{backText: ' '}">
      <button-tab class="m-tab-top" v-model="searchType">
        <button-tab-item class="u-tab-top">搜索用户</button-tab-item>
        <button-tab-item class="u-tab-top">搜索群</button-tab-item>
      </button-tab>
      <a slot="left"></a>
    </x-header>
    <group class="u-search">
      <search
        class="u-ipt-default"
        type="text"
        :required="false"
        :auto-fixed="false"
        v-model="searchText"
        placeholder="请输入搜索内容">
        <span slot="label">搜索：</span>
      </search>
    </group>
    <div>
      <x-button type="primary" action-type="button" @click.native="searchUser">搜索</x-button>
    </div>
    <group class="u-card u-list">
      <cell
        v-for="(user, index) in searchList"
        class="u-list-item"
        :title="user.nick"
        :inline-desc="user.account"
        :key="user.account"
        :userId="index"
        is-link
        :link="user.link">
        <img class="icon" slot="icon" width="20" :src="user.avatar">
      </cell>
    </group>
    <div class="u-card">
      <h3>{{errMsg}}</h3>
    </div>
  </div>
</template>

<script>
import config from '../configs'

export default {
  mounted () {
    this.$nextTick(() => {
      this.searchType = parseInt(this.$route.params.searchType)
      this.$store.dispatch('resetSearchResult')
    })
  },
  data () {
    return {
      searchType: 0, // 用户 0 群 1
      searchText: '',
      searchList: [],
      errMsg: '',
      // 首次加载标志，因为mount和watch会有时序问题，首次加载不显示errMsg
      firstEntry: true
    }
  },
  watch: {
    searchResult (val, oldVal) {
      if (this.searchType === 1) {
        this.errMsg = '群功能DEMO待开发'
        return
      }
      if ((val.length === 0) && (!this.firstEntry)) {
        this.errMsg = '无记录'
      } else {
        this.errMsg = ''
      }
      this.searchList = val
    }
  },
  computed: {
    searchResult () {
      let result = []
      if (this.searchType === 1) {
        return result
        // result = this.$store.state.searchedTeams
      } else if (this.searchType === 0) {
        result = this.$store.state.searchedUsers.map(item => {
          item.nick = item.nick || item.account
          item.link = `/namecard/${item.account}`
          item.avatar = item.avatar || config.defaultUserIcon
          return item
        })
      }
      return result
    }
  },
  methods: {
    searchUser () {
      this.firstEntry = false
      if (this.searchType === 1) {
        this.$vux.alert.show({
          title: '群功能DEMO待开发'
        })
      } else if (this.searchType === 0) {
        if (this.searchText === this.$store.state.userUID) {
          this.searchList = []
          this.errMsg = '别看了，就是你自己！'
        } else {
          this.$store.dispatch('searchUsers', {
            accounts: [this.searchText]
          })
        }
      }
    }
  }
}
</script>
