<template>
  <div class="manage">
    <div class="container1">
      <div class="c1-wapper">
        <el-menu class="el-menu"
                 mode="horizontal"
                 @select="handleSelect"
                 text-color="#fff"
                 active-text-color="#ffd04b">
          <el-menu-item index="1">
            <a href="#" class="logo">
              <img src="../assets/images/conglogo.png" alt="">
            </a>
          </el-menu-item>
          <el-menu-item index="2">展览中心</el-menu-item>
          <el-menu-item index="3">处理中心</el-menu-item>
          <el-menu-item index="5"
                        v-if="userState==1">个人中心</el-menu-item>
          <el-menu-item index="9"
                        v-if="userState==0">登录</el-menu-item>
          <el-menu-item index="10"
                        v-if="userState==1">登出</el-menu-item>
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
      <!-- 声明 -->
      <div class="warp-video">
        <div class="pen">
          <a href="https://page.lianjia.com/subject/11276.html"
             style="color:#FFF"
             target="_blank">
            <img src="../assets/images/警示.png"
                 alt="">
            仿冒链家网进行不正当竞争行为的郑重声明
          </a>
          <a href="https://page.lianjia.com/subject/8334.html"
             style="color:#FFF"
             target="_blank">
            <img src="../assets/images/警示.png">
            房地产中介诚信服务承诺及保证书
          </a>
        </div>
      </div>
    </div>
    <div class="container2">
      <div class="c2-wapper">
        <div class="f1">
           <div class="title"></div>
           <p>集二手、新房、租房功能于一体，随时随地任性找房。IM匿名咨询让您放心，消息动态推送让您省心，服务承诺让您安心，数据百科锦囊让您感受贴心漫漫找房路，我们努力为您想更多。</p>
           <div class="download">
             <div class="hand-app">
                <a href="#" class="ios"></a>
                <a href="#" class="android"></a>
             </div>
             <div class="erweima">
              <img src="../assets/images/erweima.png" alt="">
             </div>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Search from "@/components/SearchComponent.vue"

export default {
  components: {
    Search
  },
  data () {
    return {
      // 用户登录状态，已登录为1，未登录为0
      userState: 1,
      //在售房产数量
      onsalehouse: 15687
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.manage {
  padding: 0px;
  margin: 0px;
  height: 100%;
  width: 100%;
}
.container1 {
  width: 100%;
  height: 640px;
  background: url("../assets/images/bannerV2.jpg") no-repeat;
  background-attachment: fixed;
  position: relative;
}
.c1-wapper {
  height: 422px;
  width: 100%;
  padding-top: 40px;
}
.el-menu {
  background-color: rgba(0, 0, 0, 0) !important; /*实现FF背景透明，文字不透明*/
  background: #000;
  filter: alpha(opacity=10);
  border-bottom: 0px;
}
/* 去除导航下边框 */
.el-menu.el-menu--horizontal {
  border: none;
}
.el-menu .logo img{
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
.Search {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%);
}
.warp-video {
  height: 40px;
  width: 100%;
  position: absolute;
  bottom: 50px;
  line-height: 12px;
}
.warp-video .pen {
  width: 100%;
  height: 100%;
  opacity: 0.8;
  padding: 20px;
  float: left;
  font-size: 12px;
  line-height: 12px;
  
}
.warp-video .pen a{
  margin-right: 18px;
}
.warp-video .pen img {
  width: 12px;
  height: 12px;
  /* 图片居中 */
  vertical-align: middle;
  margin-right: 5px;
}
.container2 {
  width: 100%;
  height: 524px;
  background: url("../assets/images/bg-app.jpg") no-repeat;
}
.c2-wapper{
  width:1330PX;
  height: 524px;
  padding-top: 40px;
}
.c2-wapper .f1{
  width: 479px;
  padding-top: 50px;
  padding-left: 190px;
}
.c2-wapper .f1 .title{
  background: -webkit-image-set(url("../assets/images/bigphoto.png") 2x );
  background-position: -448px -379px;
  width: 286px;
  height: 118px;
}
.c2-wapper .f1 p{
  margin-top: 20px;
  font-size: 14px;
  line-height: 22px;
  font-family: "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei", 微软雅黑, "Segoe UI", Tahoma, 宋体b8b体, SimSun, sans-serif;
}
.c2-wapper .f1 .download{
  width: 479px;
  height: 104px;
}
.c2-wapper .f1 .download .hand-app{
  float: left;
  width: 134px;
  margin-right: 15px;
}
.c2-wapper .f1 .download .hand-app a{
  text-decoration: none;
  outline: none;
  background-image: -webkit-image-set(url("../assets/images/bigphoto.png") 1x,url("../assets/images/bigphoto.png") 2x);
  display: inline-block;
  width: 134px;
  height: 44px;
}
.c2-wapper .f1 .download .hand-app .ios{
      background-position: -20px -139px;
}
.c2-wapper .f1 .download .hand-app .android{
    margin-top: 8px;
    background-position: -20px -197px;
}
.c2-wapper .f1 .download .erweima img{
  width: 102px;
  height: 102px;
}
</style>