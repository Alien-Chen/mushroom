import { createRouter, createWebHistory } from 'vue-router'
import MallHome from '@/views/mall/home.vue'

const routes = [
  {
    path: '/mall/home',
    name: 'MallHome',
    component: MallHome
  },
  {
    path: '/mall/shop',
    name: 'MallShop',
    component: () => import('../views/mall/shop.vue')
  },
  {
    path: '/promotion/fast-buy',
    name: 'PromotionFastBuy',
    component: () => import('../views/promotion/fast-buy.vue')
  },
  {
     path: '/live/list',
     name: 'LiveList',
     component: () => import('../views/live/list.vue')
  },
  {
    path: '/live/detail',
    name: 'LiveDetail',
    component: () => import('../views/live/detail.vue')
  },
  {
    path: '/animation',
    name: 'Animation',
    component: () => import('../views/animation/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
