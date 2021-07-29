<template>
  <div class="bg">
   
    <div class="TheNotice">
        <div class="list1">姓名</div>
        <div class="list1">账号</div>
        <div class="list1">身份</div>
        <div class="list1">电话</div>
        <div class="list1">年龄</div>
        <div class="list1">性别</div>
        <div class="list1">设置</div>
    </div>
    <div style=" clear:both;"></div>
    <div
      class="TheNotice"
      v-for="item in PersonList.slice(minNum, MaxNum)"
      :key="item.noticeid"
    >
    
    <div class="list">{{item.name}}</div>
    <div  class="list">{{item.account}}</div>
    <div class="list">{{item.status}}</div>
    <div class="list">{{item.phone}}</div>
    <div class="list">{{item.age}}</div>
    <div class="list">{{item.sex}}</div>
    <el-button class="chance" @click="onSubmit(item.userid)">查看</el-button>
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


    <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
        
      <el-form ref="form" :model="Person" label-width="80px">
          <el-form-item label="头像">
          <el-image
            style="width: 100px; height: 100px"
            :src="Person.img"></el-image>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="Person.name"></el-input>
        </el-form-item>
        <el-form-item label="账号">
          <el-input v-model="Person.account"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="Person.password"></el-input>
        </el-form-item>
        <el-form-item label="手机">
          <el-input v-model="Person.phone"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-input v-model="Person.status"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="Person.sex"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="SubmitChance"
          >确 定</el-button
        >
      </div>
    </el-dialog>

  </div>
</template> 


<script>
export default {
  name: "AdminPerson",
  data() {
    return {
      // 用户登录状态，已登录为1，未登录为0
      successLogin: 1,
      PersonList:[],
      num: 0, //总条数
      minNum: 0,//最小
      MaxNum: 0,//最大
      TheitemNum: 4,//分页条数
      dialogFormVisible: false,
      Person:{},
    };
  },
    async created() {
        const res = await  this.$http.get("personList")        
        this.PersonList=res.data;
        console.log(res.data)
        this.num = this.PersonList.length;
        this.minNum = 0;
        this.MaxNum = this.minNum + 4;
    },
  methods: {
    // 提交通知
    async SubmitChance(){

    },
   async onSubmit(id) {
       console.log(`当前内容: ${id}`);
       for (var i=0;i<this.num;i++){
            if(this.PersonList[i].userid==id){
                this.Person=this.PersonList[i];
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