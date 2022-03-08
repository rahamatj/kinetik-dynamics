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
    {
        path: '/customers',
        name: 'customers',
        meta: {
            title: 'Customers',
        },
        component: () => import('../components/customers/Customers.vue'),
        beforeEnter: guards.accessApp
    },
    {
        path: '/customers/:customerId/bills',
        name: 'bills',
        meta: {
            title: 'Bills',
        },
        component: () => import('../components/bills/Bills.vue'),
        beforeEnter: guards.accessApp
    },
]
