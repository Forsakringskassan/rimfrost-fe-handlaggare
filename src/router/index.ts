import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    { path: '/', redirect: '/items/1' },
    {
        path: '/items/:id',
        name: 'item',
        component: ()  => import ('../components/ItemView.vue'),
        props: true,
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})