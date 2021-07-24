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
            <img src="../assets/images/conglogo.png">
          </a>
        </el-menu-item>
        <el-menu-item index="/e">展览中心</el-menu-item>
        <el-menu-item index="/b">业务中心</el-menu-item>
        <el-menu-item index="/p"
                      v-if="successLogin==1">个人中心</el-menu-item>
        <el-menu-item index="/l"
                      v-if="successLogin==0">登录</el-menu-item>
        <el-menu-item 
                      v-if="successLogin==1" @click="signout">登出</el-menu-item>
      </el-menu>
      <div class="header-warp">
          <div class="wrap-ico"></div>
          <div class="fakerhouse">
            <ul>
              <li style="heigit:35px">中山虚拟房产中介</li>
              <!-- <li style="heigit:35px">中山虚拟在售{{this.onsalehouse}}</li> -->
            </ul>
          </div>
          <div class="Search">
            <Search></Search>
          </div>
        </div>
    </div>
</template>


<script>
import Search from "@/components/SearchComponent.vue"

export default {
  name:"headercomponent",
  components:{
    Search
  },
  data(){
    return{
      // 用户登录状态，已登录为1，未登录为0
      successLogin:1
    }
  },
  mounted(){
    console.log("successLogin:"+this.successLogin);
    this.successLogin=localStorage.getItem("successLogin");
  },
  methods:{
    // 退出登录
    signout(){
      localStorage.setItem("successLogin",0);
      this.successLogin=0;
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
  height: 640px;
  width: 100%;
  background: url("../assets/images/bannerV2.jpg") no-repeat;
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
    url("../assets/images/banner-text.png") 2x
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