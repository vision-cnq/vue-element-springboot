// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'           // vue模块在node_modules
import App from './App'         // App.vue文件中的组件
import router from './router'   // router文件夹中定义的路由
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import store from './store'

// import store from './store'

// 设置反向代理，前端请求默认发送到http:localhost:8443/api
axios.defaults.baseURL = 'http://localhost:8443/api'

// 全局注册，之后可再其他组件通过this.$axios发送请求
Vue.prototype.$axios = axios
Vue.config.productionTip = false    // 作用是阻止vue启动时生成生产提示

Vue.use(ElementUI)
Vue.use(mavonEditor)



router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
      if (store.state.user.username) {
        console.log(store.state.user.username)
        next()
      } else {
        next({
          path: 'login',
          query: {redirect: to.fullPath}
        })
      }
    } else {
      next()
    }
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  components: { App },
  template: '<App/>'
})
