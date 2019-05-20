export default {
	namespaced: true,
	state: {
		info: [
			{
				name: 'Name',
				value: '',
				placeholder: 'Name',
				pattern: /^[a-zA-Z ]{3,30}$/
			},
			{
				name: 'Phone',
				value: '',
				placeholder: '+7 (000) 000-00-00',
				pattern: /[\+]?\d?[\s|-]?[(]?\d{0,3}[)]?[\s|-]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}/g
			}
		],
		orderState: null,
		done: 0
	},
	getters: {
		getInfo(state) {
			return state.info;
		},
		getOrderState(state) {
			return state.orderState;
		},
		getDone(state) {
			return state.done;
		}
	},
	mutations: {
		setInfo(state, data) {
			state.info[data.index].value = data.value;
		},
		setDone(state, value) {
			state.done = value;
		},
		orderSend(state) {
			state.orderState = 'panding';
		},
		orderDone(state) {
			state.orderState = 'done';
		},
	},
	actions: {
		setInfo(store, data) {
			store.commit('setInfo', data);
		},

		setDone(store,value) {
			store.commit('setDone', value);
		},

		sendOrder(store, data) {
			store.commit('orderSend');

			setTimeout(() => {
				store.commit('orderDone');
			},1000);
		}
	},
}