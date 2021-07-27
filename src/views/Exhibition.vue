<template>
  <div class="bigcontain">
    <div>
      <el-backtop></el-backtop>
    </div>
    <!-- 导航栏 -->
    <headercomponent> </headercomponent>
    <div class="main">
      <div class="classifiedQuery">
        <div class="position">
          <el-form>
            <el-form-item label="热门地区：">
              <el-checkbox-group v-model="form.xqtype"
                                 @change="handleCheckDatasChange1">
                <!-- form.xqtype 存储的是label对应的值 -->
                <el-checkbox v-for="item in xqcheckboxName"
                             :key="item.key"
                             :label="item.key"
                             name="xqname">{{item.label}}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="面积大小：">
              <el-checkbox-group v-model="form.areaSize"
                                 @change="handleCheckDatasChange2">
                <!-- v-model存储的是label对应的值 -->
                <el-checkbox v-for="item in areaSizecheckName"
                             :key="item.key"
                             :label="item.key"
                             name="areaSize">{{item.label}}</el-checkbox>

              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="售价：">
              <el-checkbox-group v-model="form.price"
                                 @change="handleCheckDatasChange3">
                <!-- v-model存储的是label对应的值 -->
                <el-checkbox v-for="item in pricecheckName"
                             :key="item.key"
                             :label="item.key"
                             name="areaSize">{{item.label}}</el-checkbox>

              </el-checkbox-group>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="content">
        <!-- 左侧内容 -->
        <div class="leftcontent">
          <div class="orderFilter">
            <div class="orderTag">
              <ul>
                <li v-for="item,index in ulList"
                    :key="index"
                    ref="ulList"
                    @click="chooesMenu(index)"
                    :class="{'selected':chooesedliIndex===index}">
                  <h3>
                    <router-link :to="{path:item.path}">{{item.name}}</router-link>
                  </h3>
                </li>
              </ul>
            </div>
          </div>

          <div class="resultDes">
            <div class="total fl">共找到<span>30</span>套广州房</div>
            <div class="clearbutton fr">
              <a href="/e/">
                <span></span>清空条件
              </a>
            </div>
          </div>
          <router-view></router-view>
          <!-- :notice="sellList" -->
          <sellList></sellList>

        </div>
      </div>
      <div></div>
    </div>
    <footercomponent></footercomponent>
  </div>

</template>

<script>
import headercomponent from '../components/headercomponent.vue'
import footercomponent from '../components/footercomponent.vue'
import sellList from '../components/sellListcomponent.vue'


export default {
  components: {
    headercomponent,
    footercomponent,
    sellList
  },
  data () {
    return {
      type: [],
      form: {
        // 存储选中的小区
        xqtype: [],
        // 存储选中的面积大小
        areaSize: [],
        // 选中的价格区间
        price: []
      },
      // 小区复选框List
      xqcheckboxName: [
        {
          key: 1,
          label: "凤凰城"
        },
        {
          key: 2,
          label: "罗冲围"
        }, {
          key: 3,
          label: "江南大道中"
        },
      ],
      // 面积复选框List
      areaSizecheckName: [
        {
          key: 1,
          label: "40㎡以下"
        },
        {
          key: 2,
          label: "40-60㎡"
        }, {
          key: 3,
          label: "60-80㎡"
        },
        {
          key: 4,
          label: "80-100㎡"
        }, {
          key: 5,
          label: "100-150㎡"
        }, {
          key: 6,
          label: "150-200㎡"
        },
      ],
      // 售价复选框List
      pricecheckName: [
        {
          key: 1,
          label: "50万以下"
        },
        {
          key: 2,
          label: "50-80万"
        },
        {
          key: 3,
          label: "80-100万"
        },
        {
          key: 4,
          label: "100-150万"
        }, {
          key: 5,
          label: "150-200万"
        }, {
          key: 6,
          label: "200-300万"
        },
      ],
      // ulList: ['默认排序', '房屋总价', '房屋面积'],
      ulList: [
        {
          name: '默认排序',
          path: '/e'
        },
        {
          name: '房屋总价',
          path: '/price'
        }, {
          name: '房屋面积',
          path: '/area'
        },
      ],
      // 选择的li
      chooesedliIndex: 0,


    }
  },
  created () {

  },
  watch: {
    // 路由地址监听
    // $route (to, from) {
    //   this.$refs.default.style.display = 'block';
    //   if (to.name == "price" || to.name == "area") {
    //     this.$refs.default.style.display = 'none';
    //   }
    // }
  },
  methods: {
    handleCheckDatasChange1 () {
      console.log("选中的小区名称" + this.form.xqtype);
    },
    handleCheckDatasChange2 () {
      console.log("选中的面积大小" + this.form.areaSize);
    },
    handleCheckDatasChange3 () {
      console.log("选中的小区名称" + this.form.price);
    },
    chooesMenu: function (index) {
      this.chooesedliIndex = index;
    },

  }
}
</script>

<style scoped>
dl,
dt,
dd,
ul,
ol,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
/* 设置带边框的checkbox，选中后边框的颜色 */
.bigcontain
  .main
  .classifiedQuery
  .position
  /deep/.el-checkbox__input.is-checked
  .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  border-color: rgb(74, 139, 74);
  background-color: rgb(74, 139, 74);
}
/* 设置鼠标悬浮时边框的颜色以及复选框恢复默认边框颜色 */
.bigcontain .main .classifiedQuery .position /deep/.el-checkbox__inner:hover,
.bigcontain
  .main
  .classifiedQuery
  .position
  /deep/.el-checkbox__input.is-focus
  .el-checkbox__inner {
  border-color: rgb(74, 139, 74);
}
/* 设置选中后的文字颜色 */
.bigcontain
  .main
  .classifiedQuery
  .position
  /deep/.el-checkbox__input.is-checked
  + .el-checkbox__label {
  color: rgb(74, 139, 74);
}
.main {
  width: 1150px;
  margin: auto;
  background-color: white;
  position: relative;
  top: -140px;
  border-radius: 20px;
  overflow: hidden;
}
.classifiedQuery {
  width: 1150px;
  height: 260px;
  padding-left: 30px;
  padding-right: 30px;
  box-shadow: 0 1px 2px -1px rgb(0 0 0 / 20%);
}

.classifiedQuery .position {
  width: 1150px;
  height: 109px;
  position: absolute;
  top: 50px;
}
.main .content {
  width: 1150px;
  /* height: 500px; */
  margin-top: 26px;
  line-height: 1;
}
.main .content .leftcontent {
  width: 910px;
  float: left;
}
.main .content .leftcontent .orderTag {
  height: 49px;
  border-bottom: 2px solid #00ae66;
}

.main .content .leftcontent .orderTag ul {
  display: inline-block;
  width: 90%;
}
.main .content .leftcontent .orderTag ul li {
  display: inline-block;
  height: 49px;
}
.main .content .leftcontent .orderTag ul li.selected {
  background-color: #00ae66;
}
.main .content .leftcontent .orderTag ul li.selected a {
  color: white;
  width: 110px;
  height: 19.2px;
}

.main .content .leftcontent .orderTag ul li a {
  text-align: center;
  line-height: 1px;
  vertical-align: middle;
  padding: 0 25px;
  font-size: 15px;
  color: black;
  font-weight: 200;
}
.resultDes {
  height: 55px;
  line-height: 55px;
  display: block;
  border-bottom: 1px solid #f1f1f1;
}
.resultDes .total {
  font-weight: bold;
  font-size: 22px;
  color: black;
}
.resultDes .total span {
  color: #00ae66;
  font-family: "tahoma";
  margin-left: 5px;
  margin-right: 5px;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.clearbutton {
  font-size: 12px;
}
.clearbutton a {
  color: #394043;
}
.clearbutton span {
  display: inline-block;
  width: 15px;
  height: 17px;
  background: url("../assets/images/clear.png") no-repeat;
  vertical-align: middle;
  margin-right: 5px;
}
.sellListContent {
  /* line-height: 1; */
  font-size: 0;
  margin-bottom: 36px;
}
.sellListContent li {
  position: relative;
  width: 910px;
  height: 209px;
  padding: 35px 0px;
  border-bottom: 1px solid #f1f1f1;
}
.sellListContent .info {
  float: right;
  width: 640px;
  height: 170px;
  font-size: 14px;
  color: #616669;
  vertical-align: top;
}
.sellListContent img {
  width: 232px;
  height: 174px;
}
.sellListContent a {
  width: 232px;
  height: 174px;
  float: left;
}
.clear {
  display: block;
}
.sellListContent .info .title {
  height: 22px;
  width: 640px;
  font-weight: bold;
  color: #394043;
  overflow: hidden;
}
.sellListContent li .info .title a {
  float: left;
  max-width: 420px;
  height: 22px;
  text-decoration: none;
  font-size: 22px;
  color: #394043;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.sellListContent li .info .title .tagBlock.goodhouse_tag {
  background-color: #d53c3c;
}
.sellListContent li .info .title .tagBlock {
  float: left;
  margin-left: 5px;
  padding: 0 5px;
  text-align: center;
  color: #fff;
  font-size: 12px;
  line-height: 21px;

  height: 27px;
  vertical-align: top;
}
.sellListContent .info .flood {
  margin-top: 18px;
}
.sellListContent .info .flood .positionInfo {
  width: 80%;
  height: 15px;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.sellListContent .info .flood .positionInfo .positionIcon {
  float: left;
  width: 13px;
  height: 15px;
  background: url("../assets/images/spaceInco.png") no-repeat;
  vertical-align: -1px;
  margin-right: 12px;
}
.sellListContent .info .flood .positionInfo a {
  color: #394043;
}
.sellListContent .info .address {
  margin-top: 20px;
}
.sellListContent .info .address .houseInfo {
  width: 510px;
  height: 15px;
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sellListContent .info .address .houseInfo .houseIcon {
  float: left;
  width: 14px;
  height: 14px;
  background: url("../assets/images/houseIcon.png") no-repeat;
  background-size: cover;
  margin-right: 5px;
  vertical-align: -1px;
  margin-right: 12px;
}
.sellListContent .info .followInfo {
  margin-top: 18px;
}
.sellListContent .info .followInfo .starIcon {
  float: left;
  width: 15px;
  height: 14px;
  background: url("../assets/images/starIcon.png") no-repeat;
  background-size: cover;
  margin-right: 5px;
  vertical-align: -1px;
  margin-right: 12px;
}
.sellListContent .info .tag {
  margin-top: 18px;
}
.sellListContent .info .tag .haskey {
  width: 70px;
  height: 30px;
  background: #e1f5ed;
  color: #33be85;
  display: inline-block;
  font-size: 12px;
  line-height: 30px;
  padding: 0 11px;
  text-align: center;
}
.sellListContent .info .priceInfo {
  position: absolute;
  right: 0;
  top: 30%;
}
.sellListContent .info .priceInfo .totalPrice {
  color: #db4c3f;
  font-size: 14px;
}
.sellListContent .info .priceInfo .totalPrice span {
  font-weight: bold;
  font-size: 26px;
  font-family: "tahoma";
}
.listButtonContainer {
  position: absolute;
  width: 40px;
  height: 23px;
  top: 33px;
  right: 0px;
  line-height: 23px;
  border: 1px solid #ddd;
  border-radius: 2px;
  color: #a9abab;
  font-size: 12px;
  cursor: pointer;
  text-align: center;
}
</style>