<template>
	<div>
		<pre style="font-size: 1.5em; font-weight: bold;">{{ status_message }}</pre>
		<h4>조회 ID : {{ pay_id }}</h4>
		<md-progress-bar :md-buffer="66" :md-value="34 * status" md-mode="buffer"></md-progress-bar>

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
export default {
	name: "Status",
	computed: {
		pay_id() {
			return this.$route.params.id;
		},
		status_message() {
			let status = this.status;
			if (status === 0) return "배송 준비 중입니다.";
			else if (status === 1) return "배송 중입니다.";
			else if (status === 2) return "배송하였습니다.\n버튼을 눌러 물건을 수령하세요.";
			else if (status === 3) return "배송하였습니다.";
			else throw new Error("Invalid value");
		},
		item() {
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

			return data[num].list;
		}
	},
	data() {
		return {
			status: 2, //0 : 준비, 1 : 배송, 2, 3 : 승인 대기, 4 : 끝
			search: '',
			searched: []
		}
	},
	methods: {
		searchOnTable(text) {
			this.searched = this.item.filter(obj => obj.name.toLowerCase().indexOf(text.toLowerCase()) > -1 || text === '');
		}
	},
	created() {
		this.searched = this.item;
	}
}
</script>

<style scoped>

</style>