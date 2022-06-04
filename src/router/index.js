import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
  },
  {
    path: '/videoKnows',
    name: 'videoKnows',
    component: () => import('../views/videoKnows.vue')
  },
  {
    path: '/aeInterface',
    name: 'aeInterface',
    component: () => import('../views/aeInterface.vue')
  },
  {
    path: '/mainInterface',
    name: 'mainInterface',
    component: () => import('../views/mainInterface.vue')
  },
  {
    path: '/Keyframe',
    name: 'Keyframe',
    component: () => import('../views/Keyframe.vue')
  },
  {
    path: '/effect',
    name: 'effect',
    component: () => import('../views/effect.vue')
  },
  {
    path: '/Advanced',
    name: 'Advanced',
    component: () => import('../views/Advanced.vue')
  },
  {
    path: '/Render',
    name: 'Render',
    component: () => import('../views/Render.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/searchRes.vue')
  },
  {
    path: '/testPage',
    name: 'testPage',
    component: () => import('../views/testPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
