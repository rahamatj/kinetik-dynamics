export default {
    namespaced: true,
    state: {
      token: null,
      user: null,
      isLoggingOut: false
    },
    getters: {
      isAuthenticated (state) {
        return !!state.token
      },
      user (state) {
        return state.user
      },
      isLoggingOut (state) {
        return state.isLoggingOut
      }
    },
    mutations: {
      SET_TOKEN (state, token) {
        state.token = token
      },
      SET_USER (state, user) {
        state.user = user
      },
      SET_IS_LOGGING_OUT (state, isLoggingOut) {
        state.isLoggingOut = isLoggingOut
      }
    },
    actions: {
      authenticate ({ commit }, form) {
        return new Promise((resolve, reject) => {
          form.post('/api/login')
              .then(data => {
                commit('SET_TOKEN', data.token)
                commit('SET_USER', data.user)

                resolve(data)
              })
              .catch(data => reject(data))
        })
      },
      unauthenticate({ commit }) {
        return new Promise((resolve, reject) => {
          commit('SET_IS_LOGGING_OUT', true)

          axios.post('/api/logout')
              .then(() => {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
                commit('SET_IS_LOGGING_OUT', false)

                resolve()
              })
              .catch(error => {
                commit('SET_IS_LOGGING_OUT', false)

                reject(error)
              })
        })
      },
      check({ commit }) {
        return new Promise((resolve, reject) => {
          commit('SET_TOKEN', localStorage.getItem('token'))
          commit('SET_USER', JSON.parse(localStorage.getItem('user')))

          axios.get('/api/auth/check')
              .then(response => resolve(response.data))
              .catch(error => {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)

                reject(error.response.data)
              })
        })
      }
    }
  }
