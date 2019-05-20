import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import ProductList from './components/ProductsList.vue';
import Product from './components/Product.vue';
import Cart from './components/Cart.vue';
import Checkout from './components/Checkout.vue';
import E404 from './components/E404.vue';

const routes = [
	{
		path: '',
		redirect: {name: 'products'}
	},
	{
		name: 'products',
		path: '/products',
		component: ProductList
	},
	{
		path: '/products/:id',
		component: Product
	},
	{
		path: '/cart',
		component: Cart
	},
	{
		path: '/checkout',
		component: Checkout
	},
	{
		path: '*',
		component: E404
	}
];

export const router = new VueRouter({
	routes,
	mode: 'history'
});