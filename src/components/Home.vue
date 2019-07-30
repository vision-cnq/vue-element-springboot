<template>
  <div>
    <nav-menu></nav-menu>
    <!-- 建立路由的父子关系，在一个组件中导入了其它组件，称为父子组件。但想通过router-view控制子组件的显示，则需要进行路由的相关配置 -->
    <router-view/>
  </div>
</template>

<script>
  import NavMenu from './common/NavMenu'
  export default {
    name: "Home",
    components: { NavMenu }
  }
</script>

<style scoped>

</style>
