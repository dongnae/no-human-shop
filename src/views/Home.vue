<template>
	<md-content class="page-container" md-theme="primary">
		<md-app md-waterfall md-mode="overlap">
			<md-app-toolbar class="md-primary md-large">
				<div class="md-toolbar-row">
					<md-button class="md-icon-button" @click="menuVisible = !menuVisible">
						<md-icon>menu</md-icon>
					</md-button>

					<span class="md-title">자율 주행 매점</span>
				</div>
			</md-app-toolbar>

			<md-app-drawer :md-active.sync="menuVisible">
				<md-toolbar class="md-transparent" md-elevation="0">
					메뉴
				</md-toolbar>

				<md-list>
					<md-list-item @click="$router.push({name: 'Home'}).catch(() => {})">
						<md-icon>home</md-icon>
						<span class="md-list-item-text">홈</span>
					</md-list-item>

					<md-list-item @click="$router.push({name: 'Shop'}).catch(() => {})">
						<md-icon>reorder</md-icon>
						<span class="md-list-item-text">상품 목록</span>
					</md-list-item>

					<md-list-item @click="$router.push({name: 'Buy'}).catch(() => {})">
						<md-icon>check_circle_outline</md-icon>
						<span class="md-list-item-text">주문하기</span>
					</md-list-item>

					<md-list-item @click="$router.push({name: 'Status'}).catch(() => {})">
						<md-icon>info</md-icon>
						<span class="md-list-item-text">주문 조회</span>
					</md-list-item>
				</md-list>
			</md-app-drawer>

			<md-app-content>
				<div class="card-list">
					<md-card md-with-hover class="card">
						<md-card-header>
							<div class="md-title">주문하기</div>
						</md-card-header>

						<md-card-content>

						</md-card-content>

						<md-card-actions>
							<router-link to="/shop/">
								<md-button>상품 목록</md-button>
							</router-link>
							<router-link to="/buy/">
								<md-button>결제하기</md-button>
							</router-link>
						</md-card-actions>
					</md-card>
					<md-card md-with-hover class="card">
						<md-card-header>
							<div class="md-title">주문 조회</div>
						</md-card-header>

						<md-card-content>
							<p>
								<router-link to="/status/111-222-333">111-222-333 | 도착함</router-link>
							</p>
							<p>
								<router-link to="/status/222-333-444">222-333-444 | 배송 중</router-link>
							</p>
							<p>
								<router-link to="/status/333-444-555">333-444-555 | 대기 중</router-link>
							</p>
						</md-card-content>
					</md-card>
				</div>
			</md-app-content>
		</md-app>
	</md-content>
</template>

<script>
export default {
	name: 'Home',
	data: () => ({
		menuVisible: false
	})
}
</script>

<style scoped>
.page-container > div {
	min-height: 100vh;
}

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
