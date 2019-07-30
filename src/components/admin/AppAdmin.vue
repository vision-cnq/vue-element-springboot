<template>
  <el-container style="width: 100%;">
    <el-aside style="width: 15%;margin-top: 20px;">
      <switch></switch>
    </el-aside>
    <el-main style="width: 20;">
      <timeline></timeline>
    </el-main>
  </el-container>
</template>

<script>
  import Timeline from './Timeline'
    export default {
        name: "AppAdmin",
        components:{Timeline}

    }
</script>

<style scoped>

</style>
