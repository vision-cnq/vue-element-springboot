import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from '../components/home/AppIndex'
import AppJotter from '../components/jotter/AppJotter'
import AppLibrary from '../components/library/AppLibrary'
import AppAdmin from '../components/admin/AppAdmin'
import Login from '../components/Login'
import Home from '../components/Home'

Vue.use(Router)

export default new Router({
  // 启动History前端路由，则URL中不需要添加#号
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // home页面不需要被访问，被拦截转定向到index页面
      // redirect: '/index',
      // 存放导航栏的请求
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/jotter',
          name: 'AppJotter',
          component: AppJotter,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/library',
          name: 'AppLibrary',
          component: AppLibrary,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/admin',
          name: 'AppAdmin',
          component: AppAdmin,
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    // 使用组件，写法是一致的
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})
