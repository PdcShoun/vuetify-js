import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomePage.vue'
import PropsView from '../views/PropsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/props',
    name: 'props',
    component: PropsView
  },
  {
    path: '/slot',
    name: 'slot',
    component: () => import('../views/SlotView.vue')
  },
  {
    path: '/emit',
    name: 'emit',
    component: () => import('../views/EmitView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
