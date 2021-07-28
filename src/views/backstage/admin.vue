<template>
  <div class="about">
    <h1>管理员页面</h1>
     <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="通知发布" name="first">
      通知发布
      <div class="test"><insertnotice></insertnotice></div>
    </el-tab-pane>
    <el-tab-pane label="通知设置" name="second">
      通知设置
      <div class="test"><Setnotice></Setnotice></div>
    </el-tab-pane>
    <el-tab-pane label="人员管理" name="third">
      人员管理
    </el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
import insertnotice from "../../components/backstage/admin/insertnotice.vue"
import Setnotice from "../../components/backstage/admin/Setnotice.vue"
import headers from '../../components/backstage/Header.vue'
  export default {
    components: {
      insertnotice, //相当于top:top
      Setnotice,
      headers
    },
    data() {
      return {
        activeName: 'first',
        Repack:{
            id:this.$route.params.id,
            name:this.$route.params.name,
            address:this.$route.params.address,
            num:this.$route.params.num,
        },
      }
    },
    beforeCreate: function () {
      console.log("管理员控制器");                 
    },
    methods:{
      Delete(scope){
          var index=scope.id;
          console.log(scope.id);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
    },
    mounted() {}
  }
</script>
<style scoped>
.test{
  width: 100px;
  height: 200px;
}
</style>
