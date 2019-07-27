import Vue from 'vue'
import Router from 'vue-router'
// 导入刚才写的组件
import AppIndex from '../components/home/AppIndex'
import Login from '../components/Login'

Vue.use(Router)

export default new Router({

  routes: [
    // 设置默认打开路径,根据路径重定向到Login
    {
      path: '/',
      redirect: 'login'
    },
    // 使用组件，写法是一致的
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'AppIndex',
      component: AppIndex
    }
  ]
})
