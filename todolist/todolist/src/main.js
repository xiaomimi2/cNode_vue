// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import $ from 'webpack-zepto'
import store from './vuex/user.js'
import filters from './filters.js'
import Alert from './lib/alert.js'

Vue.use(VueRouter)
Vue.use(Alert)

$.ajaxSettings.crossDomain = true

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));
// Vue.config.productionTip = false
const router = new VueRouter({
  mode: 'history',
  routes
})

/*这里控制了路由必须经过meta登录成功，才可以进入个别的页面*/
router.beforeEach((to, from, next) => {
  $('html, body, #page').removeClass('scroll-hide');
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.userInfo.userId) {
      next();
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()//确保这里一定要调用next
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app')
