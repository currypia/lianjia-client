<template>
  <div class="about">
    <h1>管理员页面</h1>
     <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="通知发布" name="first">
      <div class="test"><insertnotice></insertnotice></div>
    </el-tab-pane>
    <el-tab-pane label="通知设置" name="second">
      <div class="test"><Setnotice></Setnotice></div>
    </el-tab-pane>
    <el-tab-pane label="人员管理" name="third">
      <AdminPerson></AdminPerson>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
import insertnotice from "../../components/backstage/admin/insertnotice.vue"
import Setnotice from "../../components/backstage/admin/Setnotice.vue"
import AdminPerson from "../../components/backstage/admin/AdminPerson.vue"
  export default {
    components: {
      insertnotice, //相当于top:top
      Setnotice,
      AdminPerson
    },
    data() {
      return {
        activeName: 'first',
        Repack:{
        },
      }
    },
    beforeCreate: function () {
      console.log("管理员控制器");                 
    },
    methods:{
      handleClick(tab, event) {
        // console.log(tab, event);
      },
    },
    mounted() {}
  }
</script>
<style scoped>
.test{
  width: 100%;
}
</style>
