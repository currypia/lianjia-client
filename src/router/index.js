import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import loginregister from '../views/loginregister.vue'
import headercomponent from '../components/headercomponent.vue'
import Exhibition from '../views/Exhibition.vue'
import businesscenter from '../views/businesscenter.vue'
import PersonalCenter from '../views/PersonalCenter.vue'
import areacomponent from '../components/areacomponent.vue'
import pricecomponent from '../components/pricecomponent.vue'
import pushcomponent from '../components/pushcomponent.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:"首页"
    }
  },
  {
    path:'/l',
    name:"loginregister",
    component:loginregister,
    meta:{
      title:"登录注册"
    }
  },
  {
    path:'/h',
    name:'headercomponent',
    component:headercomponent,
    meta:{
      title:"header组件"
    }
  },
  {
    path:'/e',
    name:'Exhibition',
    component:Exhibition,
    children:[
      {
        path:'/price',
        name:'price',
        component:pricecomponent
      },{
        path:'/area',
        name:'area',
        component:areacomponent
      },
    ],
    meta:{
      title:"展览中心"
    }
  },
  {
    path:'/b',
    name:'businesscenter',
    component:businesscenter,
    children:[
      {
        path:'/push',
        name:'push',
        component:pushcomponent
      }
    ],
    meta:{
      title:"业务中心"
    }
  },
  {
    path:'/p',
    name:"PersonalCenter",
    component:PersonalCenter,
    meta:{
      title:"个人中心"
    }
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
