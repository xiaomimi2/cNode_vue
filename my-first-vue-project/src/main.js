// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Tab from './components/Tab'
import SearchByPeople from './components/SearchByPeople.vue'
import List from './components/List.vue'
import Detail from './components/Detail.vue'

var bus=new Vue();


//注册两个插件
Vue.use(VueResource)
Vue.use(VueRouter)

//路由map
const routes=[{
	path:'/',
	component:Tab
	
},{
	path:'/search',
	component:SearchByPeople
},{
	path:'/list',
	component:List
},{
	path:'/detail',
	component:Detail
}]

const router=new VueRouter({
	routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App,
  template:'<App/>'
})
