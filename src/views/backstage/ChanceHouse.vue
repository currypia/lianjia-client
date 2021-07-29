<template>
  <div class="about">
    <h1>房产经理</h1>
     <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="房子审批" name="first">
      <div class="test"><managerHouse></managerHouse></div>
    </el-tab-pane>
    <el-tab-pane label="房产销售视图" name="second">
      <div class="test"><managerHouseView></managerHouseView></div>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
import managerHouse from "../../components/backstage/admin/managerHouse.vue"
import managerHouseView from "../../components/backstage/admin/managerHouseView.vue"
  export default {
    components: {
      managerHouse, //相当于top:top
      managerHouseView
    },
    data() {
      return {
        activeName: 'second',
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
