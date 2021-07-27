<template>
  <div>
    <headercomponent></headercomponent>
    <div class="singlecontain">
      <!-- 頭部 標題+關注 -->
      <div class="sellDetailHeader">
        <div class="title-wrapper">
          <div class="content">
            <div class="title">
              <!-- this.$route.query.houseid 获取url中的参数 -->
              <h1 class="main">{{house.title}}</h1>
              <div class="sub">此房已出证，采光充足，视野开阔，户型方正，业主诚心出售</div>
            </div>
            <div class="btnContainer">
              <div class="action">
                <button id="follow"
                        class="followbtn">关注房源</button>
                <span id="favCount"
                      class="count">24</span>人关注
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="intro">
        <div class="container">
          <div class="txt">
            <a href="/">广州房产网</a>
            <span class="stp">&nbsp;>&nbsp;</span>
            <a href="/e/">广州二手房</a>
            <span class="stp">&nbsp;>&nbsp;</span>
            <a href="#">当前房源</a>
          </div>
        </div>
      </div>
      <div class="overview">
        <div class="imageUrl fl">
          <div class="block">
            <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
            <el-carousel height="400px">
              <el-carousel-item v-for="item,i in imgitems"
                                :key="i">
                <el-row>
                  <img :src="item.imgurl"
                       alt="">
                </el-row>

              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="introduce fr">
          <div class="price">
            <span class="total">{{house.price}}</span>
            <span class="unit">万</span>
            <div class="text">
              <div class="unitPrice">
                <span class="unitPriceValue">
                  14221
                  <i>元/平米</i>
                </span>
              </div>
            </div>
          </div>
          <div class="houseInfo">
            <div class="room">
              <div class="mainInfo">{{house.introduce}}</div>
              <div class="subInfo">{{house.floor}}</div>
            </div>
            <div class="type">
              <div class="mainInfo">{{house.orientation}}</div>
              <div class="subInfo">平层/毛坯</div>
            </div>
            <div class="area">
              <div class="mainInfo">{{house.area}}</div>
              <div class="subInfo">{{house.year}}/板楼</div>
            </div>
          </div>
          <div class="aroundInfo">
            <div class="communityName">
              <span class="label">小区名字</span>
              <span>水木年华</span>
            </div>
            <div class="areaName">
              <span class="label">所在区域</span>
              <span>{{house.location}}</span>
            </div>
            <div class="visitTime">
              <span class="label">看房时间</span>
              <span>提前预约 随时可看</span>
            </div>
            <div class="houseRecord">
              <span class="label">风险提示</span>
              <span>无</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import headercomponent from '../components/headercomponent.vue'
export default {
  components: {
    headercomponent
  },
  data () {
    return {
      house: [
        {
          houseId: 0,
          title: "水木年华 3房2厅2卫出售 随时看房 满五唯一只有契税",
          price: 0,
          location: '',
          area: '',
          managerId: 0,
          sellerId: 0,
          introduce: '',
          floor: '',
          orientation: '',
          img: [],
          year: '',
          status: ''
        }
      ],
      imgitems: [
        {
          imgid: 1,
          imgurl: require('../assets/images/nhouse1.jpg')
        },
        {
          imgid: 2,
          imgurl: require('../assets/images/nhouse2.jpg')
        }, {
          imgid: 3,
          imgurl: require('../assets/images/nhouse3.jpg')
        },
      ],
      houseId: 0
    }
  },
  created () {
    // this.houseId=this.$route.query.houseid;
    this.selectHouseById();
  },
  methods: {
    async selectHouseById () {
      const { data: res } = await this.$http.get('selectHouseById?houseid=' + this.$route.query.houseid);
      this.house = res;
      console.log("house:" + this.house);
    }
  }
}
</script>

<style scoped>
div {
  height: 100%;
  width: 100%;
}
a {
  text-decoration: none;
  outline: none;
}
.singlecontain {
  height: 100%;
  width: 1150px;
  margin: auto;
  background-color: rgb(255, 255, 255);
  position: relative;
  top: -520px;
}
.sellDetailHeader {
  padding: 37px 0 26px;
  height: 100px;
  background-color: #f5f5f6;
  position: relative;
}
.title-wrapper {
  text-align: center;
  position: relative;
}
.sellDetailHeader .title-wrapper .content {
  display: inline-block;
  width: 1150px;
  vertical-align: middle;
  line-height: 1;
  text-align: left;
}
.title {
  width: 787px;
  height: 76px;
  /* display: table-cell; */
  margin-left: 20px;
  vertical-align: top;
}
.sellDetailHeader .title-wrapper .content .btnContainer {
  /* display: table-cell; */
  position: absolute;
  top: 26px;
  right: 60px;
  vertical-align: top;
  width: 114px;
  height: 63px;
  text-align: right;
}
.sellDetailHeader .title-wrapper .content .btnContainer .action {
  display: inline-block;
  text-align: center;
  color: #b0b3b4;
  font-size: 12px;
  position: relative;
}
.sellDetailHeader .title-wrapper .content .title .main {
  max-width: 790px;
  line-height: 29px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 26px;
  color: #333333;
  font-weight: bold;
}
.sellDetailHeader .title-wrapper .content .title .sub {
  max-width: 790px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 15px;
  font-size: 14px;
  color: #aaaaaa;
  line-height: 1.2;
  height: 16px;
}

.sellDetailHeader .title-wrapper .content .btnContainer button {
  display: block;
  width: 113px;
  height: 45px;
  margin-bottom: 4px;
  background-color: #ffffff;
  border-radius: 2px;
  color: #394043;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
  -webkit-box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  -o-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  -ms-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}
.intro {
  width: 500px;
  height: 67px;
  line-height: 66px;
  background: #ffffff;
  border-top: 0;
  margin: 0 auto;
  margin-left: 20px;
}
.intro .container {
  width: 710px;
  margin-left: 0;
}
.intro .container .txt,
.intro .container .txt a {
  font-size: 12px;
  color: #aaaaaa;
}
.overview {
  width: 1150px;
  height: 500px;
  background-color: #fff;
  margin: 0 auto;
  position: relative;
}

.imageUrl {
  width: 710px;
  height: 400px;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.introduce {
  width: 380px;
  height: 400px;
}
.introduce .price {
  width: 380px;
  height: 54px;
  position: relative;
}
.overview .price .total {
  display: inline-block;
  font-family: Tahoma;
  font-size: 46px;
  line-height: 46px;
  color: #e4393c;
  font-weight: bold;
  letter-spacing: -1px;
  max-width: 165px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 2px;
}
.overview .price .unit {
  display: inline-block;
  font-size: 16px;
  color: #e4393c;
  height: 37px;
  vertical-align: 6px;
}
.overview .price .text {
  font-size: 12px;
  color: #333333;
  display: inline-block;
  margin-left: 15px;
  vertical-align: 6px;
  width: 110px;
  height: 22px;
}
.overview .price .text .unitPrice {
  font-size: 16px;
  color: #394043;
}
.overview .price .text .unitPrice .unitPriceValue {
  font-weight: bold;
  color: #394043;
  white-space: nowrap;
}
.overview .price .text .unitPrice .unitPriceValue i {
  font-weight: normal;
}
.overview .houseInfo {
  box-sizing: border-box;
  margin-top: 22px;
  height: 120px;
  width: 100%;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  padding: 30px 0;
}
.overview .houseInfo .room,
.overview .houseInfo .type,
.overview .houseInfo .area {
  width: 33%;
  height: 50px;
  float: left;
}
.overview .houseInfo .mainInfo {
  height: 22px;
  font-size: 20px;
  font-weight: bold;
  color: #333333;
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  white-space: nowrap;
}
.overview .houseInfo .subInfo {
  height: 14px;
  margin-top: 8px;
  font-size: 12px;
  color: #394043;
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  white-space: nowrap;
}
.aroundInfo {
  width: 100%;
  height: 156px;
  padding: 24px 0;
  line-height: 18px;
  border-bottom: 1px solid #eeeeee;
  font-size: 14px;
}
.communityName,
.areaName,
.visitTime,
.houseRecord {
  height: 16px;
}
.overview .aroundInfo .label {
  color: #aeb0b1;
  margin-right: 24px;
}
.overview .aroundInfo .areaName,
.visitTime,
.houseRecord {
  margin-top: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.imageUrl .block img {
  width: 100%;
  height: 100%;
}
</style>