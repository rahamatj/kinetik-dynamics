import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes/index';

Vue.use(VueRouter);
export default new VueRouter({
    scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
    routes: [
        ...routes,
    ],
});
