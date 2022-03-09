import store from '../store'

export default {
  userAuthenticate: (to, from, next) => {
    if (store.getters['login/isAuthenticated'])
      return next({ name: 'users.dashboard' })

    return next()
  },
  customerAuthenticate: (to, from, next) => {
    if (store.getters['customerLogin/isAuthenticated'])
      return next({ name: 'customers.dashboard' })

    return next()
  },
  accessUserDashboard: (to, from, next) => {
    if (! store.getters['login/isAuthenticated'])
      return next({ name: 'users.login' })

    return next()
  },
  accessCustomerDashboard: (to, from, next) => {
    if (! store.getters['customerLogin/isAuthenticated'])
      return next({ name: 'customers.login' })

    return next()
  },
}
