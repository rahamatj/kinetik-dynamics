import store from '../store'

export default {
  authenticate: (to, from, next) => {
    if (store.getters['login/isAuthenticated'])
      return next({ name: 'dashboard' })

    return next()
  },
}