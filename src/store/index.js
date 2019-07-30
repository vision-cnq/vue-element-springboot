import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 前端登录拦截器
export default new Vuex.Store({
  state: {
    user: {
      // localStorage即本地存储，判断本地存储中是否有user这个对象，有则将username取出来，没有设置为空
      // name: window.localStorage.getItem('user' || '[]') == null ? '未登录' : JSON.parse(window.localStorage.getItem('user' || '[]')).name,
      // userface: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).userface,
      username: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username
      // roles: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).roles
    },
    routes: []
  },
  mutations: {
    initMenu (state, menus) {
      state.routes = menus
    },
    login (state, user) {
      state.user = user
      window.localStorage.setItem('user', JSON.stringify(user))
    },
    logout (state) {
      window.localStorage.removeItem('user')
      state.routes = []
    }
  },
  actions: {
  }
})
