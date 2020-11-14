import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		list: []
	},
	mutations: {
		setList(state, list) {
			state.list = list;
		}
	},
	actions: {
		setList({commit}, list) {
			commit("setList", list);
		}
	},
	getters: {
		list(state) {
			return state.list;
		}
	},
})
