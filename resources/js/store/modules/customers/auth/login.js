export default {
    namespaced: true,
    state: {
        customer_token: null,
        customer: null,
        isLoggingOut: false
    },
    getters: {
        isAuthenticated(state) {
            return !!state.customer_token
        },
        customer(state) {
            return state.customer
        },
        isLoggingOut(state) {
            return state.isLoggingOut
        }
    },
    mutations: {
        SET_CUSTOMER_TOKEN(state, customer_token) {
            state.customer_token = customer_token
        },
        SET_CUSTOMER(state, customer) {
            state.customer = customer
        },
        SET_IS_LOGGING_OUT(state, isLoggingOut) {
            state.isLoggingOut = isLoggingOut
        }
    },
    actions: {
        authenticate({ commit }, form) {
            return new Promise((resolve, reject) => {
                form.post('/api/customers/login')
                    .then(data => {
                        commit('SET_CUSTOMER_TOKEN', data.customer_token)
                        commit('SET_CUSTOMER', data.customer)

                        resolve(data)
                    })
                    .catch(data => reject(data))
            })
        },
        unauthenticate({ commit }) {
            return new Promise((resolve, reject) => {
                commit('SET_IS_LOGGING_OUT', true)

                axios.post('/api/customers/logout')
                    .then(() => {
                        commit('SET_CUSTOMER_TOKEN', null)
                        commit('SET_CUSTOMER', null)
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
                commit('SET_CUSTOMER_TOKEN', localStorage.getItem('customer_token'))
                commit('SET_CUSTOMER', JSON.parse(localStorage.getItem('customer')))

                axios.get('/api/customers/auth/check')
                    .then(response => resolve(response.data))
                    .catch(error => {
                        commit('SET_CUSTOMER_TOKEN', null)
                        commit('SET_CUSTOMER', null)

                        reject(error.response.data)
                    })
            })
        }
    }
}
