import Vue from 'vue'
import Vuex from 'vuex'
//vuex用来存储整个vue项目可以共享的变量
//状态
Vue.use(Vuex)

const store= new Vuex.Store({
  //变量
  state: {
    baseURL:'http://119.23.110.93:8080/'   //后台API根路径
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
//抛出，外面可以引用
export default store