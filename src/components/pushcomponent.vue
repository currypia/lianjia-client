<template>
  <div>
    <div id="contain2">
      <el-form ref="form"
               :model="form"
               label-width="80px"
               class="wall">
        <el-form-item label="发布名称">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="所在区域">
          <el-select v-model="form.location"
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
        <el-form-item label="所在楼层">
          <el-input v-model="form.floor"></el-input>
        </el-form-item>
        <el-form-item label="房产价格">
          <el-input v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item label="房产面积">
          <el-input v-model="form.area"></el-input>
        </el-form-item>
        <el-form-item label="指定经理" >
          <el-select v-model="form.managerid"
                     placeholder="请选择经理">
            <el-option label="1"
                       value="1"></el-option>
           
          </el-select>

        </el-form-item>
        <el-form-item label="建造年份">
          <el-input v-model="form.year"></el-input>
        </el-form-item>
        <el-form-item label="房屋走向">
          <el-input v-model="form.orientation"></el-input>
        </el-form-item>
        <el-form-item label="简要介绍">
          <el-input v-model="form.introduce"></el-input>
        </el-form-item>
        <div class="upload">
          <el-upload class="upload-demo" v-model="form.img" action="https://jsonplaceholder.typicode.com/posts/">
            <el-button size="small"
                       type="primary"
                       id="uploadbutton"
                       >点击上传</el-button>
            <div slot="tip"
                 class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
        <el-button type="primary"
                   @click="onSubmit"
                   id="submitbutton">立即创建</el-button>

      </el-form>
    </div>
  </div>
</template>
<script>
import $qs from 'qs'
export default {
  data () {
    return {
      form: {
        title: null,
        location: null,
        floor: null,
        price: null,
        area: null,
        managerid: null,
        year: null,
        orientation: null,
        introduce: null,
        sellerid:null,
        status:'未出售',
        img: 'https://javaeeshixun.oss-cn-shenzhen.aliyuncs.com/touxiangimg/4ee2a1e9-da1c-44db-b155-e9e37df12a4f_house1.png'
      },
    }
  },
  methods: {
    onSubmit () {
      this.form.sellerid=sessionStorage.getItem("userId");
      console.log('form:'+JSON.stringify(this.form));
      for(let key in this.form){
        console.log(key+":"+this.form[key]);
        if(this.form[key]==null){
          return alert("请输入完成信息");
        }
      }
      this.uploadForm();
    },
    async uploadForm(){
      const {data:res} = await this.$http.post("insertHouse",$qs.stringify(this.form));
      if(res!==1){
        return alert('提交失败！');
      }
      alert('提交成功！');
    }
    // async uploadphoto(){
    //   const {data:res} = await this.$http.post("ossupFile",$qs.stringify(this.form.img));
    // }
  }
}
</script>

<style scoped>
#contain2 {
  width: 70%;
  height: 800px;
  margin: 0 auto;
}
#contain2 .wall {
  margin-top: 30px;
}
#uploadbutton {
  margin-top: 20px;
}
#submitbutton {
  margin-top: -20px;
}
#submitbutton,
#uploadbutton {
  float: right;
  background-color: #00ae66;
  border: #3b9e75;
}
</style>