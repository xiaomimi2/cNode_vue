// import Vue from 'vue'
// import Router from 'vue-router'
// import Hello from '@/components/Hello'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       component: Hello
//     }
//   ]
// })
const Home = resolve => {
  require.ensure(['../views/index.vue'], () => {
    resolve(require('../views/index.vue'))
  })
}

const routers = [{
  path: '/',
  name: 'home',
  component: Home
}, {
  path: '/list',
  name: 'list',
  component (resolve) {
    require.ensure(['../views/list.vue'], () => {
      resolve(require('../views/list.vue'))
    })
  }
}, {
  path: '/topic/:id',
  name: 'topic',
  component (resolve) {
    require.ensure(['../views/topic.vue'], () => {
      resolve(require('../views/topic.vue'))
    })
  }
}, {
  path: '/add',
  name: 'add',
  component (resolve) {
    require.ensure(['../views/new.vue'], () => {
      resolve(require('../views/new.vue'))
    })
  },
  meta: {requiresAuth: true}
}, {
  path: '/message',
  name: 'message',
  component (resolve) {
    require.ensure(['../views/message.vue'], () => {
      resolve(require('../views/message.vue'))
    })
  },
  meta: {requiresAuth: true}
}, {
  path: '/user/:loginname',
  name: 'user',
  component (resolve) {
    require.ensure(['../views/user.vue'], () => {
      resolve(require('../views/user.vue'))
    })
  }
}, {
  path: '/about',
  name: 'about',
  component (resolve) {
    require.ensure(['../views/about.vue'], () => {
      resolve(require('../views/about.vue'))
    })
  }
}, {
  path: '/login',
  name: 'login',
  component (resolve) {
    require.ensure(['../views/login.vue'], () => {
      resolve(require('../views/login.vue'))
    })
  }
}, {
  path: '*',
  component: Home
}]

export default routers
