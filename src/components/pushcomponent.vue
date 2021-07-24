<template>
  <div>
    <div id="contain2">
      <el-form ref="form"
               :model="form"
               label-width="80px"
               class="wall">
        <el-form-item label="发布名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="所在区域">
          <el-select v-model="form.region"
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
        <el-form-item label="房产价格">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="房产面积">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="指定经理">
          <el-select v-model="form.region"
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
          <div class="upload">
            <el-upload class="upload-demo"
                       action="https://jsonplaceholder.typicode.com/posts/"
                       :on-change="handleChange"
                       :file-list="fileList">
              <el-button size="small"
                         type="primary"
                         id="uploadbutton">点击上传</el-button>
              <div slot="tip"
                   class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </div>
          <el-button type="primary"
                     @click="onSubmit"
                     id="submitbutton">立即创建</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!');
    }
  }
}
</script>

<style scoped>
#contain2 {
  width: 70%;
  height: 640px;
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