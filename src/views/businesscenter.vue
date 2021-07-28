<template>
  <div class="contain3">
    <div>
      <el-backtop></el-backtop>
    </div>
    <!-- 导航栏 -->
    <headercomponent> </headercomponent>
    <div class="main">
      <!-- 又一个导航栏 -->
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
      <router-view></router-view>
      <div ref="default">
        <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                  style="width: 100%">
          <el-table-column label="发布标题"
                           prop="title">
          </el-table-column>
          <el-table-column label="发布价格"
                           prop="price">
          </el-table-column>
          <el-table-column label="所在区域"
                           prop="location">
          </el-table-column>
          <el-table-column label="经理名称"
                           prop="managerid">
          </el-table-column>
          <el-table-column label="出售状态"
                           prop="status">
          </el-table-column>
          <el-table-column align="right">
            <template slot="header"
                      slot-scope="scope">
              <el-input v-model="search"
                        size="mini"
                        placeholder="输入关键字搜索" />
            </template>
            <template slot-scope="scope">
              <el-button size="mini"
                         @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
              <el-button size="mini"
                         type="danger"
                         @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <!-- <footercomponent></footercomponent> -->
  </div>
</template>

<script>
import headercomponent from '../components/headercomponent.vue'
import footercomponent from '../components/footercomponent.vue'

export default {
  components: {
    headercomponent,
    footercomponent
  },
  data () {
    return {
      ulList: [
        {
          name: '已发布的房产',
          path: '/b'
        },
        {
          name: '发布房产',
          path: '/push'
        }
      ],
      // 选择的li
      chooesedliIndex: 0,
      tableData: [
        {
          houseid: 302,
          title: "4",
          price: "4",
          location: "凤凰城",
          area: "4",
          managerid: 'curry',
          sellerid: 7,
          introduce: "4",
          floor: "4",
          orientation: "4",
          img: "https://javaeeshixun.oss-cn-shenzhen.aliyuncs.com/touxiangimg/4ee2a1e9-da1c-44db-b155-e9e37df12a4f_house1.png",
          year: "4",
          status: "未出售",
          buliddate: null
        }
      ],
      search: '',
      SellerId: null
    }
  },
  watch: {
    // 路由地址监听
    $route (to, from) {
      console.log("url:" + to.name);
      this.$refs.default.style.display = 'block';
      this.getSellerid();

      if (to.name == "push") {
        this.$refs.default.style.display = 'none';
      }
    }
  },
  create () {
    this.getSellerid();
  },
  methods: {
    getSellerid () {
      this.SellerId = sessionStorage.getItem("userId");
      console.log('SellerId:' + this.SellerId);
    },
    chooesMenu: function (index) {
      this.chooesedliIndex = index;
    },
    handleEdit (index, row) {
      console.log(index, row);
    },
    handleDelete (index, row) {
      console.log(index, row);
    },
    // 获得当前用户发布的房产列表
    async gethouselist () {
      const { data: res } = await this.$http.post('selectHouseSellerIdList',)
    }


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
/* .contain3 {
  height: 100%;
} */
.main {
  width: 1150px;
  height: 800px;
  max-height: 1100px;
  margin: auto;
  background-color: white;
  position: relative;
  top: -540px;
  border-radius: 20px;
  overflow: hidden;
  margin-top: 26px;
  line-height: 1;
}
.main .orderTag {
  height: 49px;
  border-bottom: 2px solid #00ae66;
}

.main .orderTag ul {
  display: inline-block;
  width: 90%;
}
.main .orderTag ul li {
  display: inline-block;
  height: 49px;
}
.main .orderTag ul li.selected {
  background-color: #00ae66;
}
.main .orderTag ul li.selected a {
  color: white;
  width: 110px;
  height: 19.2px;
}

.main .orderTag ul li a {
  text-align: center;
  line-height: 1px;
  vertical-align: middle;
  padding: 0 25px;
  font-size: 15px;
  color: black;
  font-weight: 200;
}
</style>