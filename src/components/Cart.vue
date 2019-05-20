<template>
	<div>
		<h1>Cart</h1>
		<hr>
		<div v-if="empty"
				class="alert alert-warning">
			Your cart is empty!
		</div>
		<template v-else>
			<table class="table table-bordered table-hover">
				<thead>
					<tr>
						<td>Title</td>
						<td>Price</td>
					</tr>
					
				</thead>
				<tbody>
					<tr v-for="product in products">
						<td>{{product.title}}</td>
						<td>{{product.price}}</td>
					</tr>
					
				</tbody>
			</table>
			<button @click="onOrder"
					class="btn btn-success">
				Order now
			</button>
		</template>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';

	export default {
		computed: {
			...mapGetters('products',{
				productsAll: 'items',
			}),
			...mapGetters('cart',{
				productsIdInCart: 'productsId'
			}),
			products() {
				return this.productsAll.filter((item)=>{
						return this.productsIdInCart.indexOf(item.id_product) !== -1
					});
			},
			empty() {
				return this.productsIdInCart.length === 0;
			}
		},
		methods: {
			onOrder() {
				this.$router.push('/checkout');
			}
		}
	}
</script>

<style>

</style>
