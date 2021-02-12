import Vue from "vue";
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Login from '../components/login.vue'
import Cards from '../components/Cards.vue'
import Modals from '../components/Modals.vue'
import Access from '../views/Access.vue'
import Catalogs from '../views/Catalogs.vue'
import store from "../store";

Vue.use(Router);

const routes = [
    {path:'/', redirect: { name: 'home' }},
    {path:'/home',name:"home", component:HelloWorld,   meta: {
      requiresAuth: true
    }},
    {path:'/catalogs', component:Catalogs,   meta: {
      requiresAuth: true
    }},
    {path:'/login', name:'login',component:Login,
    beforeEnter: (to, from, next) => {
      if(store.getters.isLoggedIn){
        next(from.path)
      }else{
        next()
      }
    }},
    {path:'/cards', component:Cards,   meta: {
      requiresAuth: true
    }},
    {path:'/modals', component:Modals,   meta: {
      requiresAuth: true
    }},
    {path:'/access', component:Access,   meta: {
      requiresAuth: true
    }},
    {
      path:'/register',    
      meta: {requiresAuth: true},
      component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue' )
    },
  ]
  
  let router = new Router({
    mode: 'history',
    routes
  })

  router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.isLoggedIn) {
        next()
        return
      }
      next({ name: 'login' })
    } else {
      next()
    }
  })

  export default router

