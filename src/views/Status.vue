<template>
	<div>
		<div style="display: flex; justify-content: space-between;">
			<pre style="font-size: 1.5em; font-weight: bold;">{{ getStatusMessage(this.status) }}</pre>
			<div style="display: flex; align-items: center;">
				<md-button v-if="status === 2" class="md-dense md-primary" @click="increaseStatus">수령하기</md-button>
				<md-button v-if="status === 3" class="md-dense md-primary" @click="increaseStatus">문 닫기</md-button>
			</div>
		</div>
		<h4>조회 ID : {{ pay_id }}</h4>
		<md-progress-bar :md-buffer="34 * status" :md-value="Math.max(0, 34 * (status))" md-mode="buffer"></md-progress-bar>

		<div style="margin-top: 50px;"></div>
		<md-divider></md-divider>
		<div style="margin-top: 50px;"></div>

		<md-table v-model="searched" md-card md-fixed-header md-sort="name" md-sort-order="asc">
			<md-table-toolbar>
				<div class="md-toolbar-section-start">
					<h1 class="md-title">주문 목록</h1>
				</div>

				<md-field class="md-toolbar-section-end" md-clearable>
					<md-input v-model="search" placeholder="상품명으로 검색..." @input="searchOnTable"/>
				</md-field>
			</md-table-toolbar>

			<md-table-empty-state
					:md-description="`'${search}'에 대한 검색 결과가 없습니다.`"
					md-label="검색 결과가 없습니다.">
			</md-table-empty-state>

			<md-table-row slot="md-table-row" slot-scope="{ item }">
				<md-table-cell md-label="상품명" md-sort-by="name">{{ item.name }}</md-table-cell>
				<md-table-cell md-label="수량" md-numeric md-sort-by="cnt">{{ item.cnt }}</md-table-cell>
				<md-table-cell md-label="가격" md-numeric md-sort-by="price">{{ item.price }}</md-table-cell>
			</md-table-row>
		</md-table>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "Status",
	computed: {
		pay_id() {
			return this.$route.params.id;
		},
		pay_data() {
			let data = this.$store.getters.list, num = -1;
			for (let i = 0; i < data.length; i++)
				if (data[i].id === this.pay_id) {
					num = i;
					break;
				}

			if (num < 0) {
				this.$router.push('/');
				return;
			}

			return data[num];
		},
		item() {
			return JSON.parse(this.pay_data.list);
		},
		status() {  //0 : 준비, 1 : 배송 중, 2 : 승인 대기, 3 : 수령 + 닫기, 4 : 닫은 상태(수령 완료)
			return this.pay_data.status;
		}
	},
	data() {
		return {
			search: '',
			searched: []
		}
	},
	methods: {
		searchOnTable(text) {
			this.searched = this.item.filter(obj => obj.name.toLowerCase().indexOf(text.toLowerCase()) > -1 || text === '');
		},
		async increaseStatus() {
			await axios.get(`http://127.0.0.1/api/update`, {
				params: {
					id: this.pay_id
				}
			});
			await this.refresh();
		}
	},
	created() {
		this.searched = this.item;
	}
}
</script>

<style scoped>

</style>