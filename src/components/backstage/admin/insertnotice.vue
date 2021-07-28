<template>
  <div class="bg">
    <div class="title">发布通知</div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="通知标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="通知内容">
        <el-input v-model="form.context"></el-input>
      </el-form-item>
      <el-form-item label="发布日期">
        <el-input v-model="form.buliddate"></el-input>
      </el-form-item>
      <el-button class="Submit" @click="onSubmit">提交</el-button>
    </el-form>
  </div>
</template> 


<script>
export default {
  name: "insertnotice",
  data() {
    return {
      // 用户登录状态，已登录为1，未登录为0
      successLogin: 1,
      url:"http://119.23.110.93:8080",
      form: {
        title: "",
        context: "",
        buliddate: ""
      },
    };
  },
  mounted() {},
  methods: {
    // 提交通知
   async onSubmit() {
     const res = await  this.$http.post("insertNotice", this.$qs.stringify(this.form))
    //  console.log(res)
    },
  },
};
</script>

<style scoped>
.bg {
  margin-top: 20px;
  /* background-color: antiquewhite; */
  width: 600px;
}
.title {
  margin-left: 13px;
  margin-bottom: 30px;
  font-weight: bold;
}
.Submit {
  background-color: rgb(38, 150, 83);
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: 500px;
}
</style>