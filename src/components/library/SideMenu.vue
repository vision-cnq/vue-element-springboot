<template>
  <el-menu
    class="categories"
    default-active="0"
    @select="handleSelect"
    active-text-color="red"
    >
    <el-menu-item v-for="(item,i) in sideList" :key="i" :index="i" >
      <i class="el-icon-menu"></i>
      <span slot="title"> {{ item.sideItem }} </span>
    </el-menu-item>
  </el-menu>
</template>

<script>
    export default {
      name: "SideMenu",
      data(){
        return {
          sideList: [
            {sideItem: '全部'},
            {sideItem: '文学'},
            {sideItem: '流行'},
            {sideItem: '文化'},
            {sideItem: '生活'},
            {sideItem: '经营'},
            {sideItem: '科技'}
          ]
        }
      }
    }
</script>

<style scoped>
  .categories {
    position: fixed;
    /*margin-left: 20%;
    left: 1%;*/
    top: 20%;
    width: 150px;
    background-color: #f8c969;
  }
</style>
