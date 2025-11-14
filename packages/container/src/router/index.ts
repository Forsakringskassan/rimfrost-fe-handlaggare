import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    { path: '/', component: () => import ('../components/IngetArendeValt.vue') },
    {
        path: '/items/:id',
        name: 'item',
        component: ()  => import ('../components/Huvudyta.vue'),
        props: true,
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})