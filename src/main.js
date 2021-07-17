import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//数据请求，导入axios，先安装   npm install axios   
import axios from 'axios'
Vue.config.productionTip = false




// 导入 自定义全局 css  
import './assets/css/global.css'


//使用
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
