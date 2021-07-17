<template>
  <div>
    <div id="search">
      <div class="container">
        <div class="leftside">
          <img src="../assets/images/search.png"
               alt="">
        </div>
        <input style="border:0px;outline:none;cursor:pointer;"
               class="searchside"
               v-model="input"
               placeholder="请输入内容" />
        <div class="rightside">
          <img src="../assets/images/talk.png"
               alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      // 搜索词条
      input: ''
    }
  },
  methods: {

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

.searchside {
  width: 480px;
  height: 40px;
  border: 0px;
}
.searchside:focus {
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