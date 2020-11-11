import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Buy from '../views/Buy.vue'
import Shop from '../views/Shop.vue'
import Status from '../views/Status.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/buy/', //결제 페이지
		name: 'Buy',
		component: Buy
	},
	{
		path: '/shop/', //물건 페이지
		name: 'Shop',
		component: Shop
	},
	{
		path: '/status/:id', //배송 조회
		name: 'Status',
		component: Status
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
