// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'           // vue模块在node_modules
import App from './App'         // App.vue文件中的组件
import router from './router'   // router文件夹中定义的路由
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

// import store from './store'

// 设置反向代理，前端请求默认发送到http:localhost:8443/api
axios.defaults.baseURL = 'http://localhost:8443/api'

// 全局注册，之后可再其他组件通过this.$axios发送请求
Vue.prototype.$axios = axios
Vue.config.productionTip = false    // 作用是阻止vue启动时生成生产提示

Vue.use(ElementUI)
Vue.use(mavonEditor)


// 钩子函数：在某些时机会被调用的函数，需要添加对store的引用
// 使用router.beforeEach()，则表示访问每一个路由前调用。
router.beforeEach((to, from, next) => {
    // 判断访问的路径是否需要登录，如果需要则判断store中是否存在user的信息
    if (to.meta.requireAuth) {
      if (store.state.user.username) {    // 存在则放行
        console.log(store.state.user.username)
        next()
      } else {    // 不存在则跳转到登录页面，并且存储当前的页面，登录成功后返回当前页面
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
