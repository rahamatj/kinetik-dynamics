import guards from '../guards'

export default [
    {
        path: '/',
        name: 'login',
        meta: {
            title: 'Login'
        },
        component: () => import('../components/users/auth/Login.vue'),
        beforeEnter: guards.authenticate
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
            title: 'Dashboard',
        },
        component: () => import('../components/users/Dashboard.vue'),
        beforeEnter: guards.accessApp
    },
    {
        path: '/customers',
        name: 'customers',
        meta: {
            title: 'Customers',
        },
        component: () => import('../components/users/customers/Customers.vue'),
        beforeEnter: guards.accessApp
    },
    {
        path: '/customers/:customerId/bills',
        name: 'bills',
        meta: {
            title: 'Bills',
        },
        component: () => import('../components/users/customers/bills/Bills.vue'),
        beforeEnter: guards.accessApp
    },
]
