import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home/home'
import detail from '@/page/detail/detail'

Vue.use(Router)
export default new Router({
	routes: [
		{
			path: '',
			name: 'home',
			component: home
		},
		{
			path: '/home',
			name: 'home',
			component: home
		},
		{
			path: '/detail',
			name: 'detail',
			component: detail
		}
	]
})
