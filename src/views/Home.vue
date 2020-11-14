<template>
	<div class="card-list">
		<md-card class="card" md-with-hover>
			<md-card-header>
				<div class="md-title">주문하기</div>
			</md-card-header>

			<md-card-content>

			</md-card-content>

			<md-card-actions>
				<router-link to="/shop/">
					<md-button>상품 목록</md-button>
				</router-link>
			</md-card-actions>
		</md-card>
		<md-card class="card" md-with-hover>
			<md-card-header>
				<div class="md-title">주문 조회</div>
			</md-card-header>

			<md-card-content>
				<!--<p>
					<router-link to="/status/111-222-333">111-222-333 | 도착함</router-link>
				</p>
				<p>
					<router-link to="/status/222-333-444">222-333-444 | 배송 중</router-link>
				</p>
				<p>
					<router-link to="/status/333-444-555">333-444-555 | 대기 중</router-link>
				</p>-->
				<p v-for="obj in list">
					<router-link :to="`/status/${obj.id}`">{{ obj.id.substr(0, 16) }} | 대기 중</router-link>
				</p>
			</md-card-content>
		</md-card>
	</div>
</template>

<script>
export default {
	name: 'Home',
	data: () => ({}),
	computed: {
		list() {
			return this.$store.getters.list;
		}
	}
}
</script>

<style scoped>
.card-list {
	display: flex;
	justify-content: space-evenly;
}

.card {
	flex: 0.4;
	cursor: default !important;

	display: flex;
	justify-content: space-between;
	flex-direction: column;
}

@media (max-width: 500px) {
	.card-list {
		flex-direction: column;
	}

	.card {
		flex: 1;
		margin-top: 20px;
	}
}
</style>
