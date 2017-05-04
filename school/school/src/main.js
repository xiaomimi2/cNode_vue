// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import routes from './router/index'
import VueRouter from 'vue-router'
import store from './vuex/user'
import $ from 'webpack-zepto'
Vue.use(VueRouter)

$.ajaxSettings.crossDomain = true

Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

// 未登录的页面直接跳转登录页
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.state.userInfo.userId) {
            next()
        } else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        }
    } else {
        next()
    }
})

new Vue({
    router,
    store
}).$mount('#app')
