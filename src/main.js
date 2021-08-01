import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex'
import qs from 'qs'
import * as echarts from 'echarts'
import ElementUI from 'element-ui'
import $ from 'jquery'
import 'element-ui/lib/theme-chalk/index.css' 
import axios from 'axios'


Vue.prototype.$echarts = echarts

Vue.config.productionTip = false;
Vue.prototype.$=$;

axios.defaults.baseURL = store.state.baseURL;

Vue.prototype.$http = axios;
Vue.prototype.$qs=qs;

// 导入 自定义全局 css  
import './assets/css/global.css'
axios.defaults.timeout=30000;

//使用
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


