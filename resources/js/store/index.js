import Vue from 'vue'
import Vuex from 'vuex'

import login from './modules/auth/login'
import customerLogin from './modules/customers/auth/login'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        login,
        customerLogin
    }
})
