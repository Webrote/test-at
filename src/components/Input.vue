<template>
	<div class="form-group">
		<label for="">{{ name }}</label>
		<i class="fas"
			v-if="isIcon"
			:class="validClass"
			:style="validStyle">
		</i>
		<input 	type="text" 
				id=""
				class="form-control"
				:value="value"
				:placeholder="placeholder"
				@input="onInput">
	</div>
</template>

<script>
	export default {

		props: ['name','value','pattern', 'placeholder'],
		
		data() {
			return {
				isIcon: this.value !== '',
			}
		},
		methods: {
			onInput(e) {
				this.isIcon = true;
				this.$emit('onchildinput', {
					value: e.target.value,
					valid: this.pattern.test(e.target.value)
				});
			}
		},
		computed: {
			validClass() {
				return this.pattern.test(this.value) ? 
						'fa-check-circle' :
						'fa-exclamation-circle';
			},
			validStyle() {
				return this.pattern.test(this.value) ? 
						'color:green' :
						'color:red';
			}
		}

	}
</script>

<style>

</style>