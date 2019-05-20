<template>
	<div>
		<h1>{{product.title}}</h1>
		<router-link :to="{name: 'products'}">Back to products</router-link>
		<hr>
		<div class="alert alert-success">
			{{ product.price }}
		</div>

		

		<hr>
		<button @click="addToCart(product.id_product)"
				class="btn btn-primary">
			Add to cart
		</button>
	</div>
</template>

<script>

	import {mapActions} from 'vuex';

	export default {
		computed: {
			id() {
				return this.$route.params.id;
			},
			product() {
				return this.$store.getters['products/item'](this.id);
			}
		},
		methods: {
			...mapActions('cart', {
				addToCart: 'add'
			})
		}
	}
</script>

<style>

</style>
