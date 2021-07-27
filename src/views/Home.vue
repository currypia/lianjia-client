<template>
  <div class="manage">
    <div>
      <el-backtop></el-backtop>
    </div>
    <div class="container1">
      <headercomponent></headercomponent>
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
              <a href="#"
                 class="ios"></a>
              <a href="#"
                 class="android"></a>
            </div>
            <div class="erweima">
              <img src="../assets/images/erweima.png"
                   alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container3">
      <div class="f1">
        <div class="name"></div>
        <div class="message">
          <p>好房源那么多，我们为你精选，丛家会越来越懂你
            <a href="/e">更多广州二手房</a>
          </p>
        </div>
        <div class="ershoufangli">
          <ul v-for="item,i in secondHandHouse"
              :key="i">
            <li :id="i==3?'removeclass':''">
              <a href="#">
                <div class="wra">
                  <img :src="require(`../assets/images/${item.photo}.jpg`)">
                  <div class="bottom">
                    <p class="position">{{item.name}}</p>
                    <p class="position"> {{item.place}} </p>
                    <p class="tips">
                      <span>{{item.tips}}</span>
                      <span class="tips-price">{{item.tipsPrice}}</span>
                    </p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="newHouse">
      <div class="wrapper">
        <div class="f1">
          <div class="name"></div>
          <p>
            真实信息准确同步，楼盘动态一手掌握
            <a href="#">更多新房</a>
          </p>
        </div>
        <div class="newhouselist">
          <ul>

            <li v-for="(item,i) in newHouse"
                :key="i"
                :id="i==2?'removeclass':''">
              <a id="nha"
                 href="#">
                <div class="bg"></div>
                <img id="nh"
                     :src="require(`../assets/images/${item.photo}.jpg`)"
                     alt="">
                <!-- <img id="nh" src="../assets/images/nhouse1.jpg"> -->
                <div class="title">
                  {{item.title}}
                  <span>
                    <label>{{item.price}}</label>元/平
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- footer -->
    <footerComponent></footerComponent>
  </div>
</template>


<script>
import Search from "@/components/SearchComponent.vue"
import footerComponent from "@/components/footercomponent.vue"
import headercomponent from "@/components/headercomponent.vue"
export default {
  components: {
    Search,
    footerComponent,
    headercomponent
  },
  data () {
    return {
      // 用户登录状态，已登录为1，未登录为0
      // successLogin: 0,
      //在售房产数量
      onsalehouse: 15687,
      //二手房信息
      secondHandHouse: [
        {
          id: 1,
          photo: 'esf1',
          name: '南朗镇·南朗镇',
          place: '锦绣海湾城六期红树邻',
          tips: '3室2厅·103平米',
          tipsPrice: '132万',
          marRight: true
        },
        {
          id: 2,
          photo: "esf2",
          name: "火炬·华佗山公园",
          place: "君华新城",
          tips: "3室2厅·118平米",
          tipsPrice: "155万",
          marRight: true
        },
        {
          id: 3,
          photo: "esf3",
          name: "火炬·中职院",
          place: "水木年华",
          tips: "3室2厅·109平米",
          tipsPrice: "155万",
          marRight: true
        },
        {
          id: 4,
          photo: "esf4",
          name: "坦洲镇·坦洲镇",
          place: "誉峯名门",
          tips: "3室2厅·99.26平米",
          tipsPrice: "150万",
          marRight: false
        }
      ],
      //新房信息
      newHouse: [
        {
          id: 1,
          photo: 'nhouse1',
          title: '锦绣海湾城九期',
          price: '19500',
        },
        {
          id: 2,
          photo: 'nhouse2',
          title: '远洋山水',
          price: '14500',
        },
        {
          id: 3,
          photo: 'nhouse3',
          title: '天基叠彩领峰',
          price: '12000',
        },
      ]
    };
  },
  mounted () {
    console.log("在Home中得到的successLogin：" + localStorage.getItem("successLogin"));
    if (localStorage.getItem("successLogin") == null) {
      localStorage.setItem("successLogin", 0);
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
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
  /* 防止页面宽度溢出 */
  width: calc(100% - 60px);
  padding: 0 30px;
  height: 100%;
  opacity: 0.8;
  font-size: 12px;
  line-height: 12px;
  position: absolute;
  /* left: 20px; */
}
.warp-video .pen a {
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
  position: relative;
}
.c2-wapper {
  /* width:1330px; */
  height: 524px;
  padding-top: 40px;
}
.c2-wapper .f1 {
  width: 479px;
  padding-top: 50px;
  padding-left: 190px;
}
.c2-wapper .f1 .title {
  background: -webkit-image-set(url("../assets/images/bigphoto.png") 2x);
  background-position: -448px -379px;
  width: 286px;
  height: 118px;
}
.c2-wapper .f1 p {
  margin-top: 20px;
  font-size: 14px;
  line-height: 22px;
  font-family: "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    微软雅黑, "Segoe UI", Tahoma, 宋体b8b体, SimSun, sans-serif;
}
.c2-wapper .f1 .download {
  width: 479px;
  height: 104px;
}
.c2-wapper .f1 .download .hand-app {
  float: left;
  width: 134px;
  margin-right: 15px;
}
.c2-wapper .f1 .download .hand-app a {
  text-decoration: none;
  outline: none;
  background-image: -webkit-image-set(
    url("../assets/images/bigphoto.png") 1x,
    url("../assets/images/bigphoto.png") 2x
  );
  display: inline-block;
  width: 134px;
  height: 44px;
}
.c2-wapper .f1 .download .hand-app .ios {
  /* background-position: -20px -139px; */
  background-image: url("../assets/images/ios.png");
  background-size: 100% 100%;
}
.c2-wapper .f1 .download .hand-app .android {
  margin-top: 8px;
  /* background-position: -20px -197px;
   */
  background-image: url("../assets/images/android.png");
  background-size: 100% 100%;
}
.c2-wapper .f1 .download .erweima img {
  width: 102px;
  height: 102px;
}
.container3 {
  height: 528px;
  width: 1150px;
  margin: auto;
}
.container3 .f1 {
  /* width: calc(100%-190px); */
  /* padding-left: 190px; */
  margin-top: 60px;
  /* float: left; */
}
.container3 .f1 .name {
  /* background-image: -webkit-image-set(
    url("../assets/images/bigphoto.png") 1x
  );
  background-position: -19px -94px; */
  background-image: url("../assets/images/ershoufang.png");
  background-size: 100% 100%;
  width: 248px;
  height: 30px;
}
.container3 .f1 .message {
  height: 50px;
}
.container3 .f1 .message p,
.newHouse .wrapper .f1 p {
  color: black;
  margin-top: 10px;
  color: #888;
}
.container3 .f1 p a,
.newHouse .wrapper .f1 p a {
  float: right;
  color: #888;
}
.container3 .f1 .ershoufangli {
  height: 323px;
}
.container3 .f1 .ershoufangli ul {
  margin-top: 30px;
  /* padding-inline-start: 1px; */
}
.ershoufangli ul li {
  position: relative;
  width: 265px;
  height: 323px;
  float: left;
  margin-right: 29px;
  padding: 0px;
}
/* .container3 .f1 .ershoufangli ul li:nth-child(4){
  margin-right: 0px;
} */
#removeclass {
  margin-right: 0px;
}
.container3 .f1 .ershoufangli ul li a {
  display: block;
}
.container3 .f1 .ershoufangli ul li img {
  width: 265px;
  border-radius: 4px;
  margin-bottom: 10px;
}
.container3 .f1 .ershoufangli ul li .position {
  font-size: 18px;
  color: #101d37;
  line-height: 18px;
}
.container3 .f1 .ershoufangli ul li .tips {
  color: #999;
  font-size: 12px;
  /* position: absolute; */
  bottom: 0;
  left: 0;
}
.container3 .f1 .ershoufangli ul li .tips-price {
  position: absolute;
  right: 0;
  /* bottom:0; */
  font-family: "HiraginoSansGB-W6";
  font-size: 16px;
  color: #fa5741;
}
.newHouse {
  width: 100%;
  height: 422px;
  padding-top: 50px;
}
.newHouse .wrapper {
  width: 1150px;
  height: 368px;
  margin: auto;
}
.newHouse .wrapper .f1 {
  width: 1150px;
  height: 62px;
}
.newHouse .wrapper .f1 .name {
  width: 161px;
  height: 35px;
  background-image: url("../assets/images/newhouse.png");
}
.newHouse .wrapper .f1 p {
  margin-top: 8px;
}
.newHouse .wrapper .newhouselist {
  width: 1150px;
  height: 300px;
  top: 41px;
  position: relative;
}
.newHouse .wrapper .newhouselist ul {
  height: 260px;
  width: 1150px;
  position: absolute;
  top: 0px;
  left: 0px;
  float: left;
}
.newHouse .wrapper .newhouselist ul li {
  position: relative;
  float: left;
  width: 350px;
  height: 260px;
  margin-right: 50px;
}
.newHouse .wrapper .newhouselist ul a {
  width: 350px;
  height: 260px;
  overflow: hidden;
  display: block;
  position: relative;
  margin-right: 50px;
}

.newHouse .wrapper .newhouselist ul img {
  width: 360px;
  height: 260px;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: scale(1);
  transition: transform 1s ease 0s;
  z-index: 0;
}
/* 鼠标停留在a标签上时，改变图片的大小 ps:该关系为父子，直接空格。若为兄弟关系，则+相连 。*/
#nha:hover #nh {
  /* 图片放大1.05倍 */
  transform: scale(1.05);
}
.newHouse .wrapper .newhouselist ul li a .bg {
  width: 350px;
  height: 260px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 20;
  transform: scale(1);
  transition: transform 1s ease 0s;
}
.newHouse .wrapper .newhouselist ul li .title {
  width: 220px;
  height: 66px;
  position: absolute;
  z-index: 30;
  top: 50%;
  left: 50%;
  margin-top: -33px;
  margin-left: -110px;
  color: white;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  text-shadow: 0 1px 4px rgb(0 0 0 / 60%);
}
.newHouse .wrapper .newhouselist ul li .title span {
  color: #fff2ab;
  font-size: 17px;
  font-weight: normal;
}
.newHouse .wrapper .newhouselist ul li .title label {
  font-weight: 700;
  font-size: 20px;
  font-family: tahoma;
  position: relative;
  top: 1px;
}
.el-menu /deep/.el-submenu_title:hover {
  background-color: rgba(255,  255,  255, 0.226) portant;
}
.el-menu /deep/.el-menu-item:hover  {
  background-color: rgba(60, 94, 128, 0.226) !important;
}
.el-menu /deep/.el-submenu_title:focus {
  background-color: rgba(255,  255,  255,  0) portant;
}
.el-menu /deep/.el-menu-item:focus  {
  background-color: rgba(194, 62, 62, 0.226) !important;
}
</style>