<!-- 登录界面 -->
<template xmlns:v-on="">
  <body id="paper">
  <el-form :rules="rules" class="login-container" label-position="left"
           label-width="0px" v-loading="loading">
    <h3 class="login_title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="loginForm.username"
                auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="loginForm.password"
                auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox class="login_remember" v-model="checked"
                 label-position="left"><span style="color: #505458">记住密码</span></el-checkbox>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="login">登录</el-button>
    </el-form-item>
  </el-form>
  </body>
</template>

<script>
    export default {
      name: "Login",
      data() {
        return {
          rules: {
            account: [{required: true, message: '请输入正确的用户名', trigger: 'blur'}],
            checkPass: [{required: true, message: '请输入正确的密码', trigger: 'blur'}]
          },
          checked: true,
          loginForm: {
            username: 'admin',
            password: '123456'
          },
          loading: false
        }
      },
      methods:{
        // 点击登录按钮操作
        login() {
          var _this = this
          this.$axios
            // 向后端/login接口发送数据，实际请求是http://localhost:8443/api/login
            .post('/login', {
              username: this.loginForm.username,
              password: this.loginForm.password
            })
            // 成功跳转到/index页面
            .then(resp => {
              if (resp.data.code === 200) {
                var data = resp.data
                _this.$store.commit('login', _this.loginForm)
                var path = _this.$route.query.redirect
                _this.$router.replace({path: path === '/' || path === undefined ? '/index' : path})
              }
            })
            // 失败
            .catch(failResponse => {})
        }
      }
    }
</script>

<style>
  #paper {
    /* background:url("../assets/img/bg/eva1.jpg") no-repeat; */
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  body{
    margin: 0px;
  }
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .login_remember {
    margin: 0px 0px 35px 0px;
    text-align: left;
  }
</style>

