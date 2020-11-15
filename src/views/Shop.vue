<template>
	<div>
		<div id="header"><h2>RulerPlane</h2></div>
		<div id="nav" class="menuBtn-group">
			<button class="menuBtn Btn0" onclick="clickKinds(0)">음료</button>
			<button class="menuBtn Btn1" onclick="clickKinds(1)">치킨</button>
			<button class="menuBtn Btn2" onclick="clickKinds(2)">햄버거</button>
			<button class="menuBtn Btn3" onclick="clickKinds(3)">케이크</button>
			<button class="menuBtn Btn4" onclick="clickKinds(4)">밥</button>
		</div>
		<div id="section">
		</div>

		<div id="basket">
		</div>
		<div id="payment">
			<div id="total">
				합계 : 0원<br>
			</div>
			<button id="paymentBtn" @click="buy">결제</button>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: "Shop",
	methods: {
		async buy() {
			let array = [];
			for (let i = 0; i < goodsList.length; i++) {
				for (let j = 0; j < goodsList[i].length; j++) {
					if (!goodsChoice[i][j]) continue;
					array.push({
						name: goodsList[i][j],
						price: goodsPrice[i][j] * goodsChoice[i][j],
						cnt: goodsChoice[i][j]
					});
				}
			}

			let ret = (await axios.get(`${location.origin}/api/buy`, {
				params: {
					buy: JSON.stringify(array)
				}
			})).data.result;

			alert("결제하였습니다.\n결제 ID : " + ret);
			await this.refresh();
			await this.$router.push('/status/' + ret);
		}
	},
	created() {
	},
	beforeRouteEnter(to, from, next) {
		goodsChoice = [ // 상품 선택 갯수
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0]
		];

		sum = 0;
		next();
	}
}
</script>

<style scoped>

</style>