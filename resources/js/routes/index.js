import guards from '../guards'

export default [
    {
        path: '/',
        name: 'users.login',
        meta: {
            title: 'Login'
        },
        component: () => import('../components/users/auth/Login.vue'),
        beforeEnter: guards.userAuthenticate
    },
    {
        path: '/customers/login',
        name: 'customers.login',
        meta: {
            title: 'Customer Login'
        },
        component: () => import('../components/customers/auth/Login.vue'),
        beforeEnter: guards.customerAuthenticate
    },
    {
        path: '/customers/dashboard',
        name: 'customers.dashboard',
        meta: {
            title: 'Customer Dashboard',
        },
        component: () => import('../components/customers/Dashboard.vue'),
        beforeEnter: guards.accessCustomerDashboard
    },
    {
        path: '/customers/bills',
        name: 'customers.bills',
        meta: {
            title: 'Customer Bills',
        },
        component: () => import('../components/customers/bills/Bills.vue'),
        beforeEnter: guards.accessCustomerDashboard
    },
    {
        path: '/customers/bills/monthly',
        name: 'customers.bills.monthly',
        meta: {
            title: 'Customer Monthly Bills',
        },
        component: () => import('../components/customers/bills/MonthlyBills.vue'),
        beforeEnter: guards.accessCustomerDashboard
    },
    {
        path: '/dashboard',
        name: 'users.dashboard',
        meta: {
            title: 'Dashboard',
        },
        component: () => import('../components/users/Dashboard.vue'),
        beforeEnter: guards.accessUserDashboard
    },
    {
        path: '/customers',
        name: 'customers',
        meta: {
            title: 'Customers',
        },
        component: () => import('../components/users/customers/Customers.vue'),
        beforeEnter: guards.accessUserDashboard
    },
    {
        path: '/customers/:customerId/bills',
        name: 'bills',
        meta: {
            title: 'Bills',
        },
        component: () => import('../components/users/customers/bills/Bills.vue'),
        beforeEnter: guards.accessUserDashboard
    },
]
