<template>
  <div class="bg">
    <div
      class="TheNotice"
      v-for="item in Noticelist.slice(minNum, MaxNum)"
      :key="item.noticeid"
    >
      <div>
        {{ item.title }}- - - -  {{item.buliddate}}
      </div>
      <div>{{ item.context }}</div>
      <span>
          <el-button class="chance" @click="onSubmit(item.noticeid)">修改</el-button>
      </span>
    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      layout="prev, pager, next"
      :page-size="TheitemNum"
      :total="num"
    >
    </el-pagination>

    <el-dialog title="修改信息" :visible.sync="dialogFormVisible">

      <el-form ref="form" :model="noticeFrom" label-width="80px">
        <el-form-item label="通知标题">
          <el-input v-model="noticeFrom.title"></el-input>
        </el-form-item>
        <el-form-item label="通知内容">
          <el-input v-model="noticeFrom.context"></el-input>
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
import $qs from 'qs'
export default {
  name: "Setnotice",
  data() {
    return {
      Noticelist: [],
      num: 0, //总条数
      minNum: 0,//最小
      MaxNum: 0,//最大
      TheitemNum: 4,//分页条数
      dialogFormVisible: false,
      noticeFrom:{
          context:"",
          noticeId:"",
          title:"",
      }
    };
  },
  async created() {
    const res = await this.$http.get(
      "selectNoticeList"
    );
    this.Noticelist = res.data;
    this.num = this.Noticelist.length;
    this.minNum = 0;
    this.MaxNum = this.minNum + 4;
  },
  mounted() {},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.MaxNum = val * 4;
      if (this.MaxNum > this.num) {
        this.MaxNum =this.num + 1;
        console.log(`触发`);
      }
      this.minNum = this.MaxNum - 4;
      console.log(`minNum:` + this.minNum +`  MaxNum:` +this.MaxNum +`  num:` +this.num);
    },
    async onSubmit(id) {
        // console.log(`当前id: ${id}`);
        for (var i=0;i<this.num;i++){
            if(this.Noticelist[i].noticeid==id){
                this.noticeFrom.title=this.Noticelist[i].title;
                this.noticeFrom.context=this.Noticelist[i].context;
                this.noticeFrom.noticeId=this.Noticelist[i].noticeid;
            }
        }
        this.dialogFormVisible = true;
      
    },
    async SubmitChance() {
        console.log(this.noticeFrom)
      const res = await  this.$http.post("updateNotice", $qs.stringify(this.noticeFrom))
      console.log(res)
      this.dialogFormVisible = false;
      if(res!=""){
          location.reload();
      }
      
    }, 
  },
};
</script>

<style scoped>
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
  margin-bottom: 32px;
  width: 1200px;
  margin-left: 10px;
  padding-left: 15px;
  padding-right: 15px;
}
</style>