import {createRouter, createWebHashHistory} from 'vue-router';
import HomeView from '@/views/HomeView';
import Register from '@/views/Register';
import Login from '@/views/Login';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/add-article',
        name: 'createArticle',
        component: Login,
    },
    {
        path: '/settings',
        name: 'settings',
        component: Login,
    },
    {
        path: '/profile',
        name: 'userProfile',
        component: Login,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
