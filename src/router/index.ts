import { createRouter, createWebHistory } from 'vue-router';

import HomeRoutes from './modules/home';

// 创建layout路由
const routes = [...HomeRoutes];

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition;
        else return { top: 0 };
    }
});

// 创建路由守卫
// createRouteGuard(router);

export default router;
