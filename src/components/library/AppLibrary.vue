<template>
  <el-container>
    <el-aside style="width: 200px;margin-top: 20px">
      <switch></switch>
      <sideMenu></sideMenu>
    </el-aside>
    <el-main>
      <books class="books-area"></books>
    </el-main>
  </el-container>
</template>

<script>
  import SideMenu from './SideMenu'
  import Books from './Books'
    export default {
      name: "AppLibrary",
      components: {SideMenu,Books}
    }
</script>

<style scoped>

</style>
