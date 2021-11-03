import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'
import firebase from 'firebase'
import Users from '@/views/Users.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      autenticado:true,
    }
  },
  {
    path:'/login',
    name:'Login',
    component: Login
  },
  {
    path:'*',
    redirect:'/login'
  },
  {
    path:'/users',
    name: 'users',
    component: Users,
    meta:{
      autenticado:true,
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  let user=firebase.auth().currentUser;
  let private_rute= to.meta.autenticado;
  if(private_rute && !user){
    next('/login');
  } 
  else if (private_rute == undefined && user){
    next('/'); 
  }
  else{
    next();
  }
})

export default router
