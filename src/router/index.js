import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home/home'
import detail from '@/page/detail/detail'
import car from '@/page/car/car'


Vue.use(Router)
export default new Router({
	routes: [
		{
			path: '',
			component: home
		},
		{
			path: '/home',
			component: home
		},
		{
			path: '/detail',
			component: detail
		},
		{
			path: '/car',
			component: car
		}
	]
})
