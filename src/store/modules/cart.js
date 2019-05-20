export default {
	namespaced: true,
	state: {
		productsId:[]
	},
	getters: {
		productsId(state) {
			return state.productsId;
		},
		cnt(state) {
			return state.productsId.length;
		}
	},
	mutations: {
		add(state,id_product) {
			if (state.productsId.indexOf(id_product) === -1) {
				state.productsId.push(id_product)
			}
		},
		remove(state,id_product) {
			let  pos = state.productsId.indexOf(id_product);
			if (pos !== -1) {
				state.productsId.splice(pos,1);
			}
		},
	},
	actions: {
		add(store, id_product) {
			store.commit('add', id_product);
		},
		remove(store, id_product) {
			store.commit('remove', id_product);
		}
	}
}