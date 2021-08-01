<template>
  <div>
    <div id="search">
      <div class="container">
        <div class="leftside">
          <img src="../assets/images/search.png" @click='search'>
        </div>
        <input style="border:0px;outline:none;cursor:pointer;"
               id="searchside"
               v-model="input"
               placeholder="请输入搜索内容" />
        <div class="rightside">
          <img src="../assets/images/talk.png"
               alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $qs from 'qs'
export default {
  name: 'Search',
  data () {
    return {
      // 搜索词条
      input: '',
      searchdata: {
          location:'',
          title:''
      }
    }
  },
  methods: {
    search(){
      console.log("搜索内容："+this.input);
      this.searchdata.location=this.input;
      this.searchdata.title=this.input;
      this.searchfun();
    },
    async searchfun(){
      const {data:res} = await this.$http.get('slectByConcat?location='+this.searchdata.location+"&title="+this.searchdata.title);
      console.log('模糊查询，res:'+JSON.stringify(res));
      if(res==null){
        alert("没有对应的房产")
      }
      this.$router.push('/e');
      sessionStorage.setItem('searchResult',res);
      console.log('在搜索准备传值过去，res:'+JSON.stringify(sessionStorage.getItem('searchResult')));
    }
  }
}
</script>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
}
#search {
  height: 40px;
  width: 600px;
  /* background-color: brown; */
  /* position: absolute; */
  /* left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto; */
}
.container {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  box-shadow: 3px 3px 6px #000;
  display: flex;
  transition: box-shadow 1s;
  background-color: white;
}

.container:hover {
  box-shadow: 1px 1px 1px #000;
}

.leftside {
  width: 60px;
  height: 40px;
  background: white;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  position: relative;
}
.leftside img,
.rightside img {
  width: 30px;
  height: 30px;
  position: absolute;
  right: 10px;
  top: 5px;
}
.leftside img:hover,
.rightside img:hover {
  width: 32px;
  height: 32px;
  cursor: pointer;
}

#searchside {
  width: 480px;
  height: 40px;
  outline: none; 
}
.container /deep/#searchside{
    border: 0;
}
#searchside:focus {
  border: none;
}
.rightside {
  width: 60px;
  height: 40px;
  background: white;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  position: relative;
}
</style>