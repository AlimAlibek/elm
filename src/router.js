import Vue from 'vue';
import Router from 'vue-router';
//import store from './store/store.js';

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/auth/login'),
            meta: {
                layout: 'main',
                requiresAuth: false
            }
        },
        {
            path: '/',
            name: 'index',
            component: () => import('./views/index'),
            meta: {
                layout: 'main',
                requiresAuth: true
            }
        },
    ]
})

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (store.getters.isLoggedIn) {
//             next()
//             return
//         }
//         next('/login')
//     } else {
//         next()
//     }
// });

export default router
