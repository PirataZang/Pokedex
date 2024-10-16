// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../components/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/teste',
    name: 'Home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
