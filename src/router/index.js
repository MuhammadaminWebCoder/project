import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/epam',
    name: 'Epam',
    component: () => import('../views/Epam.vue')
  },
  {
    path: '/profil',
    name: 'Profil',
    component: () => import('../views/Profil.vue')
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import('../views/Map.vue')
  },
  {
    path: '/logIn',
    name: 'SignIn',
    component: () => import('../views/SignIn.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
