export default {
    namespaced: true,
    state: {
        loggedInAs: null,
    },
    getters: {
        loggedInAs(state) {
            return state.loggedInAs
        }
    },
    mutations: {
        SET_LOGGED_IN_AS(state, loggedInAs) {
            state.loggedInAs = loggedInAs
        },
    },
}
