<template>
  <div class="bg">
   
    <div class="TheNotice">
        <div class="list1">购买者</div>
        <div class="list1">房子</div>
        <div class="list1">购买时间</div>
        <div class="list1">购买日期</div>
        <div class="list1">购买合同</div>
        <div class="list1">购买状态</div>
    </div>
    <div style=" clear:both;"></div>
    <div
      class="TheNotice"
      v-for="item in SellList.slice(minNum, MaxNum)"
      :key="item.noticeid"
    >
    
    <div class="list">{{item.sellerid}}</div>
    <div  class="list">{{item.title}}</div>
    <div class="list">{{item.builddate}}</div>
    <div class="list">{{item.contract}}</div>
    <div class="list">{{item.thestatus}}</div>
    <el-button class="chance" @click="onSubmit(item.sellid)">查看</el-button>
    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      layout="prev, pager, next"
      :page-size="TheitemNum"
      class="page"
      :total="num">
    </el-pagination>


    <el-dialog title="查看信息" :visible.sync="dialogFormVisible">
        
        
        <el-form ref="form" :model="Sell" label-width="80px">
          <el-form-item label="房子">
            <el-input v-model="Sell.title"></el-input>
          </el-form-item>
          <el-form-item label="房产经理">
            <el-input v-model="Sell.managerid"></el-input>
          </el-form-item>
          <el-form-item label="创建日期">
            <el-input v-model="Sell.builddate"></el-input>
          </el-form-item>
          <el-form-item label="合同">
            <el-input v-model="Sell.contract"></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-input v-model="Sell.thestatus"></el-input>
          </el-form-item>
      </el-form>
      

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="SubmitChance">确 定</el-button
        >
      </div>
    </el-dialog>

  </div>
</template> 


<script>
import $qs from 'qs'
export default {
  name: "SeelSell",
  data() {
    return {
      // 用户登录状态，已登录为1，未登录为0
      successLogin: 1,
      buyderId:1,
      SellList:[],
      num: 0, //总条数
      minNum: 0,//最小
      MaxNum: 0,//最大
      TheitemNum: 4,//分页条数
      dialogFormVisible: false,
      Sell:{},
    };
  },
    async created() {
        this.buyderId=sessionStorage.getItem('userId');
        console.log('在created中获取到的userId:'+this.buyderId)

        const res = await  this.$http.post("selectSellbuyderId?buyderId="+this.buyderId)        
        this.SellList=res.data;
        // console.log(res.data)
        this.num = this.SellList.length;
        this.minNum = 0;
        this.MaxNum = this.minNum + 4;
    },
  methods: {
    // 提交通知
    async SubmitChance(){
      this.dialogFormVisible = false;
    },
   async onSubmit(id) {
       console.log(`当前内容: ${id}`);
       for (var i=0;i<this.num;i++){
            if(this.SellList[i].sellid==id){
                this.Sell=this.SellList[i];
                // console.log(Person.name);
            }
        }
        this.dialogFormVisible = true;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.MaxNum = val * 4;
      if (this.MaxNum > this.num) {
        this.MaxNum = this.num + 1;
        console.log(`触发`);
      }
      this.minNum = this.MaxNum - 4;
      console.log(`minNum:` + this.minNum +`  MaxNum:` +this.MaxNum +`  num:` +this.num);
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
    width: 160px;   
}
.list{
    margin-top: 10px;
    float: left;
    width: 160px;

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
  width: 1150px;
  margin-left: 10px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>