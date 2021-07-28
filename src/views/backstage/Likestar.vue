<template>
  <div class="about">
    <h1>收藏页面</h1>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        Repack:{
            id:this.$route.params.id,
            name:this.$route.params.name,
            address:this.$route.params.address,
            num:this.$route.params.num,
        },
      }
    },
    beforeCreate: function () {
                
                 
    },
    methods:{
        Delete(scope){
            var index=scope.id;
            
            console.log(scope.id);
            
            // this.tableData.splice(index-1, 1);
        },
    },
    mounted() {}
  }
</script>
<style scoped>
</style>