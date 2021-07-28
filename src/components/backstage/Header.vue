<template>
  <div class="bg">
    <el-menu class="el-menu"
             mode="horizontal"
             text-color="#fff"
             router
             active-text-color="#ffd04b">
      <el-menu-item index="/">
        <a href="#"
           class="logo">
          <img src="../../assets/images/conglogo.png">
        </a>
      </el-menu-item>
      <el-menu-item index="/e">展览中心</el-menu-item>
      <el-menu-item index="/b">业务中心</el-menu-item>
      <el-menu-item index="/p"
                    v-if="successLogin!=0">个人中心</el-menu-item>
      <el-menu-item index="/l"
                    v-if="successLogin=0">登录</el-menu-item>
      <el-menu-item index="/sidebar">后台中心</el-menu-item>
      <el-menu-item v-if="successLogin!=0"
                    @click="signout">登出</el-menu-item>
    </el-menu>
  </div>
</template>


<script>

export default {
  name: "headercomponent",
  data () {
    return {
      // 用户登录状态，已登录为1，未登录为0
      successLogin: 1
    }
  },
  mounted () {
    console.log("successLogin:" + this.successLogin);
    this.successLogin = localStorage.getItem("successLogin");
  },
  methods: {
    // 退出登录
    signout () {
      localStorage.setItem("successLogin", 0);
      this.successLogin = 0;
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
}
a {
  text-decoration: none;
  outline: none;
}
.bg {
  height: 130px;
  background: url("../../assets/images/bannerV2.jpg");
  background-size: cover;
  background-attachment: fixed;
  position: relative;
}
.el-menu {
  height: 60px;
  width: 100%;
  padding-top: 40px;
  background-color: rgba(0, 0, 0, 0) !important; /*实现FF背景透明，文字不透明*/
  background: #000;
  filter: alpha(opacity=10);
  border-bottom: 0px;
}
/*  menu hover&focus  star */ 
.el-submenu_title:hover {
  border-color: rgba(255, 255, 255, 0) portant;
}
.el-menu-item:hover {
  background-color: rgba(253, 254, 255, 0.266) !important;
}

.el-submenu_title:focus {
  background-color: rgba(255, 255, 255, 0) portant;
}
.el-menu-item:focus {
  background-color: rgba(255, 255, 255, 0) !important;
}
/* menu hover&focus  end */
/* 去除导航下边框 */
.el-menu.el-menu--horizontal {
  border: none;
}
.el-menu .logo img {
  height: 30px;
  vertical-align: middle;
  margin-top: -5px;
}
.header-warp {
  height: 241px;
}
.wrap-ico {
  margin: 120px auto 0 auto;
  background-image: -webkit-image-set(
    url("../../assets/images/banner-text.png") 2x
  );
  background-repeat: no-repeat;
  background-size: 100%;
  text-align: center;
  height: 69px;
  width: 540px;
}

.fakerhouse {
  text-align: center;
  color: #fff;
  font-size: 20px;
  margin-top: 4px;
  margin-bottom: 20px;
  height: 35px;
  line-height: 35px;
}
.fakerhouse ul li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.header-warp {
  height: 241px;
}
.Search {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%);
}
</style>