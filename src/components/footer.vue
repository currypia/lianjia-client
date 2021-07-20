<template>
  <div class="jiange">
    <div class="sfake">
      <div class="wrapper">
        <div class="f1">
          <div class="text"></div>
        </div>
        <div class="faketext">
          <p>虚拟存在，虚拟在售，虚拟价格，虚拟图片！<br/>丛家郑重向用户承诺：虚拟房源，真一赔百元！</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="wrapper">
        <div class="f-title">
          <div class="fl">
            <ul>
              <li v-for="item,i in list" :key="i"><p>{{item}}</p></li>
            </ul>
          </div>
          <div class="fr">
            官方客服 1010 9666
          </div>
        </div>
        <div class="bottom">
          <div class="copyright">
            <ul>
              <li>
                贝壳找房（北京）科技有限公司 | 网络经营许可证 
                <a href="#" target="_blank">京ICP备16057509号</a>
              </li>
              <li>
                违法和不良信息举报电话：010-86440676 违法和不良信息举报邮箱：jubaoyouxiang@lianjia.com
              </li>
              <li>
                京公网安备 11010802024019号网上有害信息举报专区
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'footer',
  data(){
    return{
      list:["关于链家","联系我们","加入我们","隐私声明","网站地图","友情链接"],
      middlelist:['上海创意园区','上海货代公司','中山装修','内蒙古人事考试网','中山律师','中山律师咨询企业黄页','中山律师','杭州别墅装修','深圳房产','儿童学习编程','中山家装整体橱柜加盟','免费信息发布网','南京写字楼出租','中山兼职常熟房产网','中山兼职网','中山分类信息网','中山信息港','中山装修公司', '灌云房产网成都二手房', '中山装修网中山装修']
      
    }
  }
}
</script>

<style scoped>
li{
  list-style: none;
}
.jiange{
  margin-top: 80px;
}
.sfake {
  height: 180px;
  width: 100%;
  padding-top: 60px;
  background: url("../assets/images/truth-bgV2.jpg") no-repeat center top;
}
.sfake .wrapper {
  width: 1150px;
  margin: 0 auto;
}
.sfake .wrapper .f1{
  float: left;
}
.sfake .wrapper .f1 .text{
  background-image: -webkit-image-set(url('../assets/images/bigphoto.png') 1x,url('../assets/images/bigphoto.png') 2x);
  background-position: -19px -254px;
  width: 501px;
  height: 115px;
  margin-top: 4px;
}
.sfake .wrapper .faketext{
  float: right;
  width: 550px;
}
.sfake .wrapper .faketext p{
  color: aliceblue;
}
.footer{
  width: 100%;
  height: 426px;
  background: url('../assets/images/footer-bg.jpg')no-repeat center top #222;
  clear: both;
  margin-top: 0px;
}
.footer .wrapper{
  width: 1150px;
  margin: 0 auto;
}
.footer .wrapper .f-title{
  height: 75px;
  border-bottom: 1px solid #393939;
  line-height: 75px;
  margin: 0;
}
.footer .wrapper .f-title .fl{
  float: left;
}
.footer .wrapper .f-title .fl ul{
  width: 100%;
  height: 100%;
}
.footer .wrapper .f-title .fl li{
  float: left;
  padding-right: 10px;
  margin-top: -11px;
}
.footer .wrapper .f-title .fl p{
  display: inline;
  color: white;
}
.footer .wrapper .f-title .fr{
  float: right;
  color: #7dcfa0;
}
.footer .bottom{
  height: 83px;
  width: 1150px;
}
.footer .bottom .copyright{
  color: #888c8e;
  font-size: 12px;
  line-height: 20px;
  margin-top: 50px;
  text-align: center;
}
</style>