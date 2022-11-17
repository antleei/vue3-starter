import type { RouteRecordRaw } from 'vue-router';

const homeRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('~/views/home/index.vue')
    },
    {
        path: '/detail',
        name: 'Detail',
        component: () => import('~/views/home/detail.vue')
    }
];

export default homeRoutes;
