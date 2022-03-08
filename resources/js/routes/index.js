import guards from '../guards'

export default [
    {
        path: '/',
        name: 'login',
        meta: {
            title: 'Login'
        },
        component: () => import('../components/auth/Login.vue'),
        beforeEnter: guards.authenticate
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
            title: 'Dashboard',
        },
        component: () => import('../components/Dashboard.vue'),
        beforeEnter: guards.accessApp
    },
]
