import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/home.vue')
    },
    {
      path: '/show',
      name: 'show',
      component: () => import('../views/show.vue')
    },
    {
      path: '/join',
      name: 'join',
      component: () => import('../views/join.vue')
    }
  ]
})

export default router
