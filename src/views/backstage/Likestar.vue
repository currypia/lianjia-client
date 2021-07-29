<template>
  <div class="bg">
   
    <div class="TheNotice">
        <div class="list1">房子名称</div>
        <div class="list1">收藏日期</div>
        <div class="list1">设置</div>
    </div>
    <div style=" clear:both;"></div>
    <div
      class="TheNotice"
      v-for="item in LikeStarList.slice(minNum, MaxNum)"
      :key="item.noticeid"
    >
    
   
    <div  class="list">{{item.houseId}}</div>
    <div class="list">{{item.builddate}}</div>
    <el-button class="chance" @click="onSubmit(item.houseId)">查看</el-button>
    <el-button class="chance1" @click="ondetele(item.likeid)">删除</el-button>
    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      layout="prev, pager, next"
      :page-size="TheitemNum"
      class="page"
      :total="num">
    </el-pagination>

  </div>
</template> 


<script>
import $qs from 'qs'
export default {
  name: "Likestar",
  data() {
    return {
      // 用户登录状态，已登录为1，未登录为0
      successLogin: 1,
      buyderId:1,
      LikeStarList:[],
      num: 0, //总条数
      minNum: 0,//最小
      MaxNum: 0,//最大
      TheitemNum: 6,//分页条数
      dialogFormVisible: false,
      LikeStar:{},
    };
  },
    async created() {
        // var buyderId=1
        this.buyderId=sessionStorage.getItem('userId');
        console.log('在created中获取到的userId:'+this.buyderId)
        const res = await  this.$http.post("selectLikeList?buyderId="+this.buyderId)        
        this.LikeStarList=res.data;
        console.log(res.data)
        this.num = this.LikeStarList.length;
        this.minNum = 0;
        this.MaxNum = this.minNum + 6;
    },
  methods: {
    // 提交通知
    async SubmitChance(){
      this.dialogFormVisible = false;
    },
   async onSubmit(id) {
       console.log(`当前内容: ${id}`);
        this.$router.push({path:'/single',query:{houseid:id}});
    },
    async detele(id) {
        const res = await this.$http.post("deleteLikeById?likeId="+id)
        
    },
    ondetele(id) {
       this.$confirm('是否删除收藏?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'info '
        }).then(() => {

          this.detele(id)
          
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            location.reload();
          
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });


       
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.MaxNum = val * 6;
      if (this.MaxNum > this.num) {
        this.MaxNum = this.num + 1;
        console.log(`触发`);
      }
      this.minNum = this.MaxNum - 6;
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
.chance1{
  background-color: red;
  border: none;
  color: white;
  padding: 8px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 10px;
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
  width: 550px;
  margin-left: 10px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>