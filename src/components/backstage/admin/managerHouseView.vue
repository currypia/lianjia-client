<template>
  <div class="bg">
   <div id="myChart" class="echarts" style="width: 400px;height:300px;"></div>

  </div>
</template> 


<script>
export default {
  name: "AdminPerson",
  data() {
    return {
      // 用户登录状态，已登录为1，未登录为0
      successLogin: 1,
      PersonList:[],
      TheSellnum: 0, //已出售
      TheNoNum:0,//未通过 
      TheSellingNum: 0,// 已通过
      ToNum:0,//已发送
      dialogFormVisible: false,
      Person:{},
    };
  },
    async created() {
        const res = await  this.$http.get("selectHousemanagerIdList?managerId="+this.successLogin)
        console.log(res.data)
        for(var i=0; i<res.data.length;i++){
            switch(res.data[i].status){
                case "已出售":this.TheSellnum++;break;
                case "已通过":this.TheSellingNum++;break;
                case "未通过":this.TheNoNum++;break;
                case "已发送":this.ToNum++;break;
                default:break;
            }
        }
        this.drawLine();
        
    },
    mounted(){
  },
  methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        
        // 绘制图表
        myChart.setOption({
            series : [
                {
                    name: '房产出售比例',
                    type: 'pie',    // 设置图表类型为饼图
                    radius: '60%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
                    data:[          // 数据数组，name 为数据项名称，value 为数据项值
                        {value:this.TheSellnum, name:'已经售出'},
                        {value:this.TheNoNum, name:'未通过审核'},
                        {value:this.TheSellingNum, name:'已通过发布房产'},
                        {value:this.ToNum, name:'已接收房产资料未审核'}
                    ]
                }
            ]
        });
    }
  },
};
</script>

<style scoped>
.echarts{}
</style>