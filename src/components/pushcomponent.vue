<template>
  <div>
    <div id="contain2">
      <el-form ref="form"
               :model="form"
               :rules="houseFormRules"
               label-width="80px"
               class="wall"
               prop='form'>
        <el-form-item label="发布名称"
                      prop='title'>
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="所在区域"
                      prop='location'>
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
        <el-form-item label="所在楼层"
                      prop='floor'>
          <el-input v-model="form.floor"></el-input>
        </el-form-item>
        <el-form-item label="房产价格"
                      prop='price'>
          <el-input v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item label="房产面积"
                      prop='area'>
          <el-input v-model="form.area"></el-input>
        </el-form-item>
        <el-form-item label="指定经理"
                      prop='managerid'>
          <el-select v-model="form.managerid"
                     placeholder="请选择经理">
            <el-option label="curry"
                       value="curry"></el-option>
            <el-option label="whale"
                       value="whale"></el-option>
            <el-option label="Tom"
                       value="Tom"></el-option>
            <el-option label="bhots"
                       value="bhots"></el-option>

          </el-select>

        </el-form-item>
        <el-form-item label="建造年份"
                      prop='year'>
          <el-input v-model="form.year"></el-input>
        </el-form-item>
        <el-form-item label="房屋走向"
                      prop='orientation'>
          <el-input v-model="form.orientation"></el-input>
        </el-form-item>
        <el-form-item label="简要介绍"
                      prop='introduce'>
          <el-input v-model="form.introduce"></el-input>
        </el-form-item>
        <div class="upload">
          <el-upload class="upload-demo"
                     v-model="form.img"
                     action="https://jsonplaceholder.typicode.com/posts/">
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
        sellerid: null,
        // 已发送 未通过 已通过 已出售
        status: '未通过',
        img: 'https://javaeeshixun.oss-cn-shenzhen.aliyuncs.com/touxiangimg/4ee2a1e9-da1c-44db-b155-e9e37df12a4f_house1.png'
      },
      houseFormRules: {
        title: [
          {
            required: true,
            message: "请输入发布名称",
            trigger: "blur",
          },
          {
            min: 3,
            max: 15,
            message: "名称长度在 3 到 10 个字符",
            trigger: "blur",
          }
        ],
        location: [
          {
            required: true,
            message: "选择房屋所在区域",
            trigger: "blur",
          }
        ],
        floor: [
          {
            required: true,
            message: "请输入房屋所在楼层",
            trigger: "blur",
          },
          // {
          //   type: "number", 
          //   message: '楼层必须为数字',
          // }
        ],
        price: [{
          required: true,
        }
        ],
        area: [{
          required: true,
        }
        ],
         managerid: [{
          required: true,
        }
        ],
         year: [{
          required: true,
        }
        ],
         orientation: [{
          required: true,
        }
        ],
         introduce: [{
          required: true,
        }
        ],
      }
    }
  },
  methods: {
    onSubmit () {
      this.form.sellerid = sessionStorage.getItem("userId");
      console.log('form:' + JSON.stringify(this.form));
      for (let key in this.form) {
        console.log(key + ":" + this.form[key]);
        if (this.form[key] == null) {
          return alert("请输入完成信息");
        }
      }
      this.uploadForm();
    },
    async uploadForm () {
      // this.floor="第"+this.floor+"层";
      console.log("floor:" + this.floor);
      const { data: res } = await this.$http.post("insertHouse", $qs.stringify(this.form));
      if (res !== 1) {
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