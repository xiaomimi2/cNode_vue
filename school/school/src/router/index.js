const Home = resolve => {
    require.ensure(['../views/index.vue'], () => {
        resolve(require('../views/index.vue'))
    })
}

const routers = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/login',
    name: 'login',
    component (resolve) {
        require.ensure(['../views/login.vue'], () => {
            resolve(require('../views/login.vue'))
        })
    }
}, {
    path: '/mycourse',
    name: 'mycourse',
    component (resolve) {
        require.ensure('../views/mycourse.vue', () => {
            resolve(require('../views/mycourse.vue'))
        })
    },
    meta: {requiresAuth: true}
}, {
    path: '/course/:id',
    component (resolve) {
        require.ensure('../views/course.vue', () => {
            resolve(require('../views/course.vue'))
        })
    },
    meta: {requiresAuth: true},
    children: [{
        path: '',
        component (resolve) {
            require.ensure('../components/members.vue', () => {
                resolve(require('../components/members.vue'))
            })
        }
    }, {
        path: 'comments/:commentsId',
        component (resolve) {
            require.ensure('../components/comments.vue', () => {
                resolve(require('../components/comments.vue'))
            })
        }
    }, {
        path: 'notes',
        component (resolve) {
            require.ensure('../components/notes.vue', () => {
                resolve(require('../components/notes.vue'))
            })
        }
    }, {
        path: 'upload',
        component (resolve) {
            require.ensure('../components/upload.vue', () => {
                resolve(require('../components/upload.vue'))
            })
        }
    }]
}, {
    path: '/navSearch',
    name: 'navSearch',
    component (resolve) {
        require.ensure('../views/searchBynav.vue', () => {
            resolve(require('../views/searchBynav.vue'))
        })
    },
    meta: {requiresAuth: true}
}, {
    path: '*',
    component: Home
}]

export default routers
