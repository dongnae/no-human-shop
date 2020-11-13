<template>
	<div>
		<h2>{{ status === 1 ? "배송 준비 중입니다." : (status === 2 ? "배송 중입니다" : "배송하였습니다.") }}</h2>
		<h4>조회 ID : {{ pay_id }}</h4>
		<md-progress-bar md-mode="buffer" :md-value="34 * status" :md-buffer="66"></md-progress-bar>

		<div style="margin-top: 50px;"></div>
		<md-divider></md-divider>
		<div style="margin-top: 50px;"></div>

		<md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card md-fixed-header
		          style="width: 100%; margin: 0;">
			<md-table-toolbar>
				<div class="md-toolbar-section-start">
					<h1 class="md-title">주문 목록</h1>
				</div>

				<md-field md-clearable class="md-toolbar-section-end">
					<md-input placeholder="상품명으로 검색..." v-model="search" @input="searchOnTable"/>
				</md-field>
			</md-table-toolbar>

			<md-table-empty-state
					md-label="검색 결과가 없습니다."
					:md-description="`'${search}'에 대한 검색 결과가 없습니다.`">
			</md-table-empty-state>

			<md-table-row slot="md-table-row" slot-scope="{ item }">
				<md-table-cell md-label="상품명" md-sort-by="name">{{ item.name }}</md-table-cell>
				<md-table-cell md-label="수량" md-sort-by="cnt" md-numeric>{{ item.cnt }}</md-table-cell>
				<md-table-cell md-label="가격" md-sort-by="price" md-numeric>{{ item.price }}</md-table-cell>
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
	},
	data() {
		return {
			status: 1, //1 : 준비, 2 : 배송, 3 : 끝
			search: '',
			searched: [],
			item: [
				{name: '과자', cnt: 1, price: 1000},
				{name: '음료수', cnt: 2, price: 2000},
				{name: '1', cnt: 3, price: 14000},
				{name: '2', cnt: 5, price: 4000},
			]
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