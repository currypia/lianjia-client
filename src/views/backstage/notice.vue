<template>
  <div class="bg">
    <div class="TheNotice"
         v-for="item in Noticelist.slice(minNum, MaxNum)"
         :key="item.noticeid">
      <div>
        {{ item.title }}- - - - {{item.buliddate}}
      </div>
      <el-divider></el-divider>
      <div>{{ item.context }}</div>
    </div>
    <el-pagination class="page"
                   @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   layout="prev, pager, next"
                   :page-size="TheitemNum"
                   :total="num">
    </el-pagination>

  </div>
</template>

<script>
import $qs from 'qs'
export default {
  name: "Setnotice",
  data () {
    return {
      Noticelist: [],
      num: 0, //总条数
      minNum: 0,//最小
      MaxNum: 0,//最大
      TheitemNum: 4,//分页条数
      dialogFormVisible: false,
      noticeFrom: {
        context: "",
        noticeId: "",
        title: "",
      }
    };
  },
  async created () {
    const res = await this.$http.get(
      "selectNoticeList"
    );
    this.Noticelist = res.data;
    this.num = this.Noticelist.length;
    this.minNum = 0;
    this.MaxNum = this.minNum + 4;
  },
  mounted () { },
  methods: {
    handleSizeChange (val) {
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      this.MaxNum = val * 4;
      if (this.MaxNum > this.num) {
        this.MaxNum = this.num + 1;
        // console.log(`触发`);
      }
      this.minNum = this.MaxNum - 4;
      // console.log(`minNum:` + this.minNum +`  MaxNum:` +this.MaxNum +`  num:` +this.num);
    },
  },
};
</script>

<style scoped>
.page {
  margin-top: 20px;
}
.TheNotice {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  /* margin-bottom: 15px; */
  width: 1200px;
  margin-left: 10px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  padding-bottom: 30px;
}
</style>