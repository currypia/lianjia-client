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
import singlexhibition from '../views/singlexhibition.vue'
import sidebar from '../views/backstage/sidebar.vue' 
import Header from '../components/backstage/Header.vue'
import Likestar from '../views/backstage/Likestar.vue'
import HouseStatus from '../views/backstage/HouseStatus.vue'
import ChanceHouse from '../views/backstage/ChanceHouse.vue'
import SeeSell from '../views/backstage/SeeSell.vue'
import admin from '../views/backstage/admin.vue'
import notice from '../views/backstage/notice.vue'
import insertnotice from '../components/backstage/admin/insertnotice.vue'
import Setnotice from '../components/backstage/admin/Setnotice.vue'

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
  },
  {
    path:'/single',
    name:"singlexhibition",
    component:singlexhibition,
    meta:{
      title:"房子展示"
    }
  },
  {
    path:'/sidebar',
    name:"sidebar",
    component:sidebar,
    meta:{
      title:"后台中心"
    },
    children:[
      {
        path:'/Likestar',
        name:"Likestar",
        component:Likestar,
        meta:{
          title:"查看收藏"
        }
      },
      {
        path:'/HouseStatus',
        name:"HouseStatus",
        component:HouseStatus,
        meta:{
          title:"房子状态"
        }
      },
      {
        path:'/ChanceHouse',
        name:"ChanceHouse",
        component:ChanceHouse,
        meta:{
          title:"查看房子"
        }
      },
      {
        path:'/SeeSell',
        name:"SeeSell",
        component:SeeSell,
        meta:{
          title:"查看订单"
        }
      },
      {
        path:'/admin',
        name:"admin",
        component:admin,
        meta:{
          title:"管理员功能"
        }
      },
      {
        path:'/notice',
        name:"notice",
        component:notice,
        meta:{
          title:"通知管理"
        }
      },
    ]
  },

  {
    path:'/Header',
    name:"Header",
    component:Header,
    meta:{
      title:"后台头部"
    }
  },
  {
    path:'/insertnotice',
    name:"insertnotice",
    component:insertnotice,
    meta:{
      title:"插入通知"
    }
  },
  {
    path:'/Setnotice',
    name:"Setnotice",
    component:Setnotice,
    meta:{
      title:"设置通知"
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
  // base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
      document.title = to.meta.title
  }
  next()
})


export default router
