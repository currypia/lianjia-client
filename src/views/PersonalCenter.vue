<template>
  <div class="contain4">
    <!-- 导航栏 -->
    <headercomponent> </headercomponent>
    <div class="main">
      <div class="modify">
        <div class="title">
          个人信息修改
        </div>
        <el-divider></el-divider>
        <div class="modifyside">
          <el-form ref="form"
                   :model="form"
                   label-width="80px">
            <el-form-item label="修改密码">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import headercomponent from '../components/headercomponent.vue'
import footercomponent from '../components/footercomponent.vue'

export default {
  components: {
    headercomponent,
    footercomponent
  },
  data(){
    return{
      form:[
        {
          name:''
        }
      ]
    }
  }
}
</script>

<style scoped>
dl,
dt,
dd,
ul,
ol,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.contain4 {
  height: 100%;
}
.main {
  width: 1150px;
  height: 510px;
  max-height: 700px;
  margin: auto;
  background-color: white;
  position: relative;
  top: -540px;
  border-radius: 20px;
  overflow: hidden;
  margin-top: 26px;
  line-height: 1;
}
.modify {
  width: 80%;
  margin: 40px auto;
}
.title {
  font-size: 18px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  text-align: center;
}
.modifyside {
  margin: auto;
  width: 80%;
}
</style>