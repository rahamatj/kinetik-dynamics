/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import Datatable from './utils/Datatable/Datatable.vue';
import UserDashboard from './layouts/UserDashboard';
import PageTitle from './components/PageTitle'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

window.Vue = require('vue').default;

// router
import router from './routes.js';
window.router = router;

// store
import store from './store';
import Vue from 'vue';
window.store = store;

require('./store/subscriber');

store.dispatch('login/check')
    .catch(data => console.error(data.message))

store.dispatch('customerLogin/check')
    .catch(data => console.error(data.message))

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
Vue.component('datatable', Datatable);
Vue.component('user-dashboard', UserDashboard);
Vue.component('page-title', PageTitle);
// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

router.beforeEach((to, from, next) => {
    let title = 'Kinetik Dynamics'

    if (to.meta.title)
        title += ' - ' + to.meta.title

    document.title = title
    next()
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
    store
});
