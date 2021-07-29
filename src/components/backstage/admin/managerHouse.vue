<template>
  <div class="bg">
   
    <div class="TheNotice">
        <div class="list1">房子</div>
        <div class="list1">状态</div>
        <div class="list1">介绍</div>
        <div class="list1">位置</div>
        <div class="list1">年份</div>
        <div class="list1">价格</div>
        <div class="list1">设置</div>
    </div>
    <div style=" clear:both;"></div>
    <div
      class="TheNotice"
      v-for="item in manaHouseList.slice(minNum, MaxNum)"
      
      :key="item.noticeid"
    >
        <div class="list">{{item.title}}</div>
        <div  class="list">{{item.status}}</div>
        <div class="list">{{item.introduce}}</div>
        <div class="list">{{item.location}}</div>
        <div class="list">{{item.year}}</div>
        <div class="list">{{item.price}}</div>
        <el-button class="chance" @click="onSubmit(item.houseid)" >查看</el-button>
        <el-button class="chance" @click="onSubmit2(item.houseid)" >审批</el-button>

    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      layout="prev, pager, next"
      :page-size="TheitemNum"
      class="page"
      :total="num"
    >
    </el-pagination>


    <el-dialog title="查看信息" :visible.sync="dialogFormVisible">
        <el-form ref="form" :model="manaHouse" label-width="80px">
            <el-form-item label="图片">
            <el-image
                style="width: 100px; height: 100px"
                :src="manaHouse.img"></el-image>
            </el-form-item>
            <el-form-item label="标题">
            <el-input v-model="manaHouse.title"></el-input>
            </el-form-item>
            <el-form-item label="楼层">
            <el-input v-model="manaHouse.floor"></el-input>
            </el-form-item>
            <el-form-item label="创建日期">
            <el-input v-model="manaHouse.buliddate"></el-input>
            </el-form-item>
            <el-form-item label="年份">
            <el-input v-model="manaHouse.year"></el-input>
            </el-form-item>
            <el-form-item label="状态">
            <el-input v-model="manaHouse.status"></el-input>
            </el-form-item>
                <el-form-item label="介绍">
                <el-input v-model="manaHouse.introduce"></el-input>
            </el-form-item>
            <el-form-item label="方位">
            <el-input v-model="manaHouse.location"></el-input>
            </el-form-item>
            <el-form-item label="布局">
            <el-input v-model="manaHouse.orientation"></el-input>
            </el-form-item>
            <el-form-item label="价格">
            <el-input v-model="manaHouse.price"></el-input>
            </el-form-item>
            <el-form-item label="地区">
            <el-input v-model="manaHouse.area"></el-input>
            </el-form-item>
        </el-form>
      

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>


    <el-dialog title="确认信息" :visible.sync="dialogFormVisible2">
        
        是否让该房子通过审核

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="update1">确 定</el-button>
        <el-button type="primary" @click="update2">退回</el-button>
      </div>
    </el-dialog>

  </div>
</template> 


<script>
import $qs from 'qs'
export default {
  name: "AdminPerson",
  data() {
    return {
      // 用户登录状态，已登录为1，未登录为0
      successLogin: 1,
      manaHouseList:[],
      num: 0, //总条数
      minNum: 0,//最小
      MaxNum: 0,//最大
      TheitemNum: 4,//分页条数
      dialogFormVisible: false,
      dialogFormVisible2: false,
      manaHouse:{},
      ChanceUpateid:0,
    };
  },
    async created() {
        const res = await  this.$http.get("selectHousemanagerIdList?managerId="+this.successLogin)
        // console.log(res.data)
        for(var i=0;i<res.data.length;i++){
            if(res.data[i].status!="已出售"){
                 console.log(res.data[i].status)
                this.manaHouseList.push(res.data[i]);
                this.num++;
            }
        }
        this.minNum = 0;
        this.MaxNum = this.minNum + 4;
    },
  methods: {
    // 提交通知
    async update1(){
        const res = await  this.$http.get("updateHouseStatustoYes?id="+this.ChanceUpateid)
        location.reload();
    },
    async update2(){
        const res = await  this.$http.get("updateHouseStatustoNo?id="+this.ChanceUpateid)
        location.reload();
    },
   async onSubmit(id) {
       for (var i=0;i<this.num;i++){
            if(this.manaHouseList[i].houseid==id){
                this.manaHouse=this.manaHouseList[i];
            }
        }
        this.dialogFormVisible = true;
    },
    async onSubmit2(id) {
        this.ChanceUpateid=id;
        console.log(this.ChanceUpateid)
        this.dialogFormVisible2 = true;
    },
    handleSizeChange(val) {
    },
    handleCurrentChange(val) {
      this.MaxNum = val * 4;
      if (this.MaxNum > this.num) {
        this.MaxNum = this.num + 1;
      }
      this.minNum = this.MaxNum - 4;
    },
  },
};
</script>

<style scoped>
.page{
    margin-top: 60px;
}
.list1{
    margin-top: -10px;
    float: left;
    width: 230px;
    width: 180px;   
}
.list{
    margin-top: 10px;
    float: left;
    width: 180px;

}
.chance {
  background-color: rgb(38, 150, 83);
  border: none;
  color: white;
  padding: 8px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 10px;
}
.TheNotice {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  /* margin-bottom: 32px; */
  width: 1350px;
  margin-left: 10px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>