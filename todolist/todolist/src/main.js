// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import $ from 'webpack-zepto'
import store from './vuex/user.js'

Vue.use(VueRouter)

$.ajaxSettings.crossDomain = true

// Vue.config.productionTip = false
const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  $('html, body, #page').removeClass('scroll-hide')
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

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app')
