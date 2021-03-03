import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '@/utils/storage'

Vue.use(Vuex)

const TOUTIAO_KEY = 'TOUTIAO_USER'

export default new Vuex.Store({
  state: {
    // 存储本地后 user数据从本地存储中获取
    // user: JSON.parse(localStorage.getItem(TOUTIAO_KEY))
    user: getItem(TOUTIAO_KEY)
  },
  mutations: {
    setUser(state, data) {
      state.user = data
      // 为了防止数据刷新丢失，需要存储到本地
      // localStorage.setItem(TOUTIAO_KEY, JSON.stringify(state.user))
      setItem(TOUTIAO_KEY, state.user)
    }
  },
  actions: {},
  modules: {}
})
