import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import router from './router'
import store from './store'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import axios from "axios";

Vue.config.productionTip = false

Vue.use(VueMaterial);

Vue.mixin({
	methods: {
		getStatusMessage(status) {
			if (status === 0) return "배송 준비 중입니다.";
			else if (status === 1) return "배송 중입니다.";
			else if (status === 2) return "배송하였습니다.\n버튼을 눌러 물건을 수령하세요.";
			else if (status === 3) return "배송하였습니다.\n물건을 수령한 뒤 버튼을 눌러 문을 닫아주세요.";
			else if (status === 4) return "배송하였습니다.";
			else throw new Error("Invalid value");
		},
		async refresh() {
			let ret = await axios.get(location.origin + "/api/list");
			await this.$store.dispatch('setList', ret.data.result);

			this.show = true;
		}
	}
})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
