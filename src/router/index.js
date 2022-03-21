import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main',
    redirect: "/alef-form"
    // component: () => import('../views/alef-form.vue'),
  },
  {
    path: '/alef-form',
    name: 'alef-form',
    component: () => import('../views/alef-form.vue'),
    props: true
  },
  {
    path: '/alef-preview',
    name: 'alef-preview',
    component: () => import('../views/alef-preview.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
