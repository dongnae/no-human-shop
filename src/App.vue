<template>
	<md-content class="page-container" md-theme="primary">
		<md-app md-mode="overlap" md-waterfall>
			<md-app-toolbar class="md-primary md-large">
				<div class="md-toolbar-row">
					<md-button class="md-icon-button" @click="menuVisible = !menuVisible">
						<md-icon>menu</md-icon>
					</md-button>

					<span class="md-title" @click="$router.push({name: 'Home'}).catch(() => {});" style="cursor: pointer;">자율 주행 매점</span>
				</div>
			</md-app-toolbar>

			<md-app-drawer :md-active.sync="menuVisible">
				<md-toolbar class="md-transparent" md-elevation="1">
					<h3>메뉴</h3>
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

					<md-list-item @click="$router.push('/status/').catch(() => {})">
						<md-icon>info</md-icon>
						<span class="md-list-item-text">주문 조회</span>
					</md-list-item>
				</md-list>
			</md-app-drawer>

			<md-app-content>
				<router-view v-if="show"></router-view>
			</md-app-content>
		</md-app>
	</md-content>
</template>

<script>
import axios from "axios";

export default {
	data: () => ({
		menuVisible: false,
		show: false
	}),
	methods: {
	},
	async created() {
		await this.refresh();
		setInterval(() => {
			this.refresh();
		}, 1000 * 10);
	}
};
</script>

<style lang="scss">
@import "~vue-material/dist/theme/engine";

@include md-register-theme("primary", (
		primary: #ff9100,
		accent: #ff9100
));

@import "~vue-material/dist/theme/all";
</style>

<style>
@import url('https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css');

* {
	font-family: 'NanumSquareRound', sans-serif;
	line-height: 30px;
}

.page-container > div {
	min-height: 100vh;
}
</style>