<template>
  <!-- 房屋列表组件 -->
  <div ref="moren">
    <ul class="sellListContent">
      <li v-for="(item,i) in sellList"
          :key="i"
          @click="selectSingle(item.houseid)">

        <a href="#"
           target="_blank">

          <img :src="item.img"
               style="display:block"
               :key="item.img">

        </a>
        <div class="info clear">
          <div class="title">
            <a target="_blank">
              {{item.title}}
            </a>
            <span class="goodhouse_tag tagBlock">必看好房</span>
          </div>
          <div class="flood">
            <div class="positionInfo">
              <span class="positionIcon"></span>
              <a href="javascript:; "
                 class="no-resblock_a">{{item.location}} </a>
            </div>
          </div>
          <div class="address">
            <div class="houseInfo">
              <span class="houseIcon">
              </span>
              {{item.introduce}} | {{item.area}} | {{item.orientation}} | 其他 | {{item.floor}} | {{item.year}} | 板塔结合
            </div>
          </div>
          <div class="followInfo">
            <span class="starIcon"></span>
            2人关注 / 6天以前发布
          </div>
          <div class="tag">
            <span class="haskey">随时看房</span>
          </div>
          <div class="priceInfo">
            <div class="totalPrice"><span>{{item.price}}</span>万</div>
          </div>
        </div>
        <div class="listButtonContainer">
          <span class="follow-text">关注</span>
        </div>
      </li>
    </ul>
    <div style="float:right">
      <div class="block">
        <el-pagination layout="prev, pager, next"
                       :total="30"
                       :page-size="5"
                       @current-change="handleCurrentChange">
        </el-pagination>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "sellList",
  props: ['selectedItem'],
  data () {
    return {
      page: 1,
      cout: 5,
      sellList: [],
      paramss: {
        location: null,
        minarea: null,
        maxarea: null,
        minprice: null,
        maxprice: null
      }
    }
  },

  created () {
    this.morenDisplay = 1;
    this.getHouseList();
  },
  methods: {
    chooesMenu: function (index) {
      this.chooesedliIndex = index;
    },
    // 获得默认序列
    async getHouseList () {
      // selectHouseList?count=" + this.cout + "&page=" + this.page
      const { data: res } = await this.$http.get("selectHouseList?count=" + this.cout + "&page=" + this.page);
      this.sellList = res.list;
    },
    // 获得价格从小到大排序
    async getAscPrice () {
      const { data: res } = await this.$http.get("selectHouseOrderByPriceASC");
      this.sellList = res;
      console.log("价格从小到大排序的sellList:" + this.sellList);
    },
    // 获得面积从小到大排序
    async getAscArea () {
      const { data: res } = await this.$http.get("selectHouseOrderByAreaASC");
      this.sellList = res;
      console.log("价格从小到大排序的sellList:" + this.sellList);
    },
    // 实时查询
    async getonlineList () {
      // const { data: res } = await this.$http.get('selectByCondtion?location=' + this.paramss.location+"&minarea="+this.paramss.minarea);
      const {data:res} =await this.$http.get('selectByCondtion?location='+this.paramss.location+'&minarea='+this.paramss.minarea+'&maxarea='+this.paramss.maxarea+'&minprice='+this.paramss.minprice+'&maxprice='+this.paramss.maxprice);
      this.sellList = res;
      console.log('实时查询：'+this.sellList);
    },
    handleCurrentChange (val) {
      this.page = val;
      this.getHouseList();
    },

    selectSingle (id) {
      console.log("id:" + id);
      // 路由跳转+id
      this.$router.push({ path: '/single?houseid=' + id });
    }
  },

  watch: {
    // 路由地址监听
    $route (to, from) {
      console.log("to.name:" + to.name);
      if (to.name == "Exhibition") {
        this.getHouseList();
      }
      // this.$refs.moren.style.display = 'block';
      if (to.name == "price") {
        // this.$refs.moren.style.display = 'none';
        this.getAscPrice();
      }
      if (to.name == "area") {
        // this.$refs.moren.style.display = 'none';
        this.getAscArea();
      }
    },

    selectedItem: {
      handler (newValue, oldValue) {
        this.paramss = newValue;
        this.getonlineList();
        console.log("监听成功,val:" + JSON.stringify(this.paramss));
      }, deep: true
    }
  },
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