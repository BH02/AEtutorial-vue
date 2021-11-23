import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/selectArticle',
    name: 'selectArticle',
    component: () => import('../views/selectArticle.vue')
  },
  {
    path: '/showArticle',
    name: 'showArticle',
    component: () => import('../views/showArticle.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
