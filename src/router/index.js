import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import loginregister from '../views/loginregister.vue'
import headercomponent from '../components/headercomponent.vue'
import Exhibition from '../views/Exhibition.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/l',
    name:"loginregister",
    component:loginregister
  },
  {
    path:'/h',
    name:'headercomponent',
    component:headercomponent
  },
  {
    path:'/e',
    name:'Exhibition',
    component:Exhibition
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
