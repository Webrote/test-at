<template>
	<div class="container">
	
		<div>
			<h1>Order now</h1>
			<hr>
			
			<div class="row">

				<div class="col col-sm-7">

					<form @submit.prevent="onOrder">

						<app-input
							v-for="(item, index) in fields"
							:key="index"
							:name="item.name"
							:value="item.value"
							:placeholder="item.placeholder"
							:pattern="item.pattern"
							@onchildinput="onChildInput(index, $event)"
						>
							
						</app-input>


						<button :disabled="btnDisabled"
								class="btn btn-primary">
							Send Order
						</button>

					</form>
				</div>
				<div class="col col-sm-5">
					<h3>Products in Cart</h3>
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

					
				</div>
				
			</div>
			<div class="alert alert-success mt-4"
				 v-if="showAlert">

				Your order is done!
				
			</div>

		</div>
	</div>
</template>

<script>

	import AppInput from './Input.vue'
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';

	export default {
		data() {
			return {
				controls: [],
			}
		},
		computed: {
			...mapGetters('checkout', {
				fields: 'getInfo',
				orderState: 'getOrderState',
				getDone: 'getDone'
			}),
			...mapGetters('products',{
				productsAll: 'items',
			}),
			...mapGetters('cart', {
				productsIdInCart: 'productsId'
			}),
			products() {
				return this.productsAll.filter((item)=>{
						return this.productsIdInCart.indexOf(item.id_product) !== -1
					});
			},
			btnDisabled(){
				return (this.products.length === 0) || (this.getDone < this.fields.length) || (this.orderState !== null);
			},
			showAlert() {
				return this.orderState === 'done';
			}
		},
		methods: {
			...mapActions('checkout', {
				setInfo: 'setInfo',
				sendOrder: 'sendOrder',
				setDone: 'setDone'
			}),
			onChildInput(index, data) {

				this.setInfo({index: index, value: data.value});
				this.controls[index] = data.valid;

				let done = 0;
				for(let i = 0; i < this.controls.length; i++) {
					if (this.controls[i]) {
						done++
					}
				}
				this.setDone(done);
			},
			onOrder(e) {
				let formData = new FormData(e.target);
				this.sendOrder({
					order: this.productsIdInCart,
					form: formData,
				})
			}

		},
		beforeMount() {
			for(let i = 0; i < this.fields.length; i++) {
				this.controls.push(false)
			}
		},
		components: {
			AppInput
		}

	}
</script>

<style>

</style>
