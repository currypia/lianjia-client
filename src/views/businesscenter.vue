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
          <el-table-column label="状态"
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
              <el-button size="mini" :disabled="scope.row.status!=='未通过'"
                         @click="Submit(scope.$index, scope.row)">发送</el-button>
                         
              <el-button size="mini"
                         @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="mini"
                         type="danger"
                         @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- 对话框 -->
    <el-dialog title="修改房屋信息"
               :visible.sync="dialogvisible">
      <el-form :model="dialogform">
        <el-form-item label="发布名称"
                      :label-width="formLabelWidth">
          <el-input v-model="dialogform.title"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="所在区域"
                      :label-width="formLabelWidth">
          <el-select v-model="dialogform.location"
                     placeholder="请选择区域">
            <el-option label="凤凰城"
                       value="凤凰城"></el-option>
            <el-option label="罗冲围"
                       value="罗冲围"></el-option>
            <el-option label="江南大道中"
                       value="江南大道中"></el-option>
            <el-option label="江南西"
                       value="江南西"></el-option>
            <el-option label="市桥"
                       value="市桥"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所在楼层"
                      :label-width="formLabelWidth">
          <el-input v-model="dialogform.floor"></el-input>
        </el-form-item>
        <el-form-item label="房产价格"
                      :label-width="formLabelWidth">
          <el-input v-model="dialogform.price"></el-input>
        </el-form-item>
        <el-form-item label="房产面积"
                      :label-width="formLabelWidth">
          <el-input v-model="dialogform.area"></el-input>
        </el-form-item>
        <el-form-item label="指定经理"
                      :label-width="formLabelWidth">
          <el-select v-model="dialogform.managerid"
                     placeholder="请选择经理">
            <el-option label="1"
                       value="1"></el-option>

          </el-select>
        </el-form-item>
        <el-form-item label="建造年份"
                      :label-width="formLabelWidth">
          <el-input v-model="dialogform.year"></el-input>
        </el-form-item>
        <el-form-item label="房屋走向"
                      :label-width="formLabelWidth">
          <el-input v-model="dialogform.orientation"></el-input>
        </el-form-item>
        <el-form-item label="简要介绍"
                      :label-width="formLabelWidth">
          <el-input v-model="dialogform.introduce"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click=cancelUpload>取 消</el-button>
        <el-button type="primary"
                   @click=EditUpload>确 定</el-button>
      </div>
    </el-dialog>
    <!-- <footercomponent></footercomponent> -->
  </div>
</template>

<script>
import headercomponent from '../components/headercomponent.vue'
import footercomponent from '../components/footercomponent.vue'
import $qs from 'qs'
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
          // houseid: 302,
          // title: "默认",
          // price: "默认",
          // location: "凤凰城",
          // area: "4",
          // managerid: 'curry',
          // sellerid: 7,
          // introduce: "4",
          // floor: "4",
          // orientation: "4",
          // img: "https://javaeeshixun.oss-cn-shenzhen.aliyuncs.com/touxiangimg/4ee2a1e9-da1c-44db-b155-e9e37df12a4f_house1.png",
          // year: "4",
          // status: "未出售",
          // buliddate: null
        }
      ],
      dialogform: {
        // "area": "string",
        // "buliddate": "string",
        // "floor": "string",
        // "houseid": 0,
        // "img": "string",
        // "introduce": "string",
        // "location": "string",
        // "managerid": 0,
        // "orientation": "string",
        // "price": "string",
        // "sellerid": 0,
        // "status": "string",
        // "title": "string",
        // "year": "string"
      },
      formLabelWidth: '100px',
      search: '',
      form: {
        SellerId: null
      },
      deletehouseid: {
        houseid: null
      },
      dialogvisible: false,
      currentHouse: {},
      sendDta:{
        houseid:null,
        huousestatus:'已发送'
      }
    }
  },
  watch: {
    // 路由地址监听
    $route (to, from) {
      console.log("url:" + to.name);
      this.$refs.default.style.display = 'block';
      if (from.name == "push" && to.name == 'businesscenter') {
        this.$router.go(0);
      }
      if (to.name == "push") {
        this.$refs.default.style.display = 'none';
      }
    }
  },
  mounted () {
    this.getSellerid();
    this.gethouselist();
  },
  methods: {
    getSellerid () {
      this.form.SellerId = sessionStorage.getItem("userId");
      console.log('SellerId:' + this.form.SellerId);
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
      const { data: res } = await this.$http.post('selectHouseSellerIdList', $qs.stringify(this.form));
      // console.log('获得的房屋列表:'+JSON.stringify(res));
      this.tableData = res;
    },
    // 根据id删除房子
    async deletehouse () {
      const { data: res } = await this.$http.post('deleteHouseById', $qs.stringify(this.deletehouseid));
      if (res !== 1) {
        return alert("删除失败");
      }
      alert("删除成功");
    },
    handleEdit (index, row) {
      console.log("index:" + index + "," + "row:" + JSON.stringify(row));
      this.dialogvisible = true;
      this.dialogform = row;
    },
    handleDelete (index, row) {
      console.log("houseid:" + row.houseid);
      this.deletehouseid.houseid = row.houseid;
      this.deletehouse();
      this.$router.go(0);
    },
    // 编辑后修改房子信息
    EditUpload () {
      this.dialogvisible = false;
      // console.log("提交修改，currentHouseId：" + this.currentHouseId)
      this.updatehouse()
    },
    async updatehouse () {
      const { data: res } = await this.$http.post('updateHouse', $qs.stringify(this.dialogform));
      console.log('updatehouse:' + res);
      if (res !== 1) {
        return alert('修改失败');
      }
      this.$router.go(0);
      alert('修改成功');
    },
    // 取消编辑按钮
    cancelUpload () {
      this.dialogvisible = false;
      this.$router.go(0);
    },
    // 发送按钮
    Submit(index,row){
      console.log('houseid:'+row.houseid);
      this.sendDta.houseid=row.houseid;
      this.submitasy();
    },
    async submitasy(){
      const {data:res} = await this.$http.post('ChanceStatus',$qs.stringify(this.sendDta));
      if(res!==1){
        return alert("发送失败");
      }
      alert("发送成功");
      this.$router.go(0);
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
.el-button--mini,
.el-button--mini.is-round {
  padding: 7px 12px;
}
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