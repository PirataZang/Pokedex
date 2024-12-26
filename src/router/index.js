// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
const routes = [
    {
        path: '/teste',
        name: 'Home',
        component: Home
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
