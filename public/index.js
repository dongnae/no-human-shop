let goodsList = [   // 상품 목록
	["콜라", "사이다", "환타"],
	["후라이드", "치킨", "반반"],
	["햄버거 1", "햄버거 2", "햄버거 3"],
	["케이크 1", "케이크 2", "케이크 3"],
	["밥 1", "밥 2", "밥 3"]
];
let goodsChoice = [ // 상품 선택 갯수
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0]
];
let goodsPrice = [  // 상품 가격
	[10, 20, 30],
	[40, 50, 60],
	[70, 80, 90],
	[100, 110, 120],
	[130, 140, 150]
];
let sum = 0;    // 결제 가격

// section 구성
function ClickGoods(Kinds, num, add) {  // 상품 선택 (추가, 제거)
	if (add === '+') {
		goodsChoice[Kinds][num]++;
		sum += goodsPrice[Kinds][num];
	} else if (add === '-') {
		if (goodsChoice[Kinds][num] !== 0) {
			goodsChoice[Kinds][num]--;
			sum -= goodsPrice[Kinds][num];
		}
	}
	document.getElementById("basket").innerHTML = ``;
	for (let i = 0; i < goodsList.length; i++) {
		for (let j = 0; j < goodsList[i].length; j++) {
			if (goodsChoice[i][j] > 0) {
				document.getElementById("basket").innerHTML += `
                <div class="basketBtnSet" style="border-bottom: 1px solid #ff9100; display: flex; justify-content: space-between">
                    <div>
                        ${goodsList[i][j]}
                    </div>
                    <div style="width: 50%; display:flex; justify-content: space-between">
                        <button class="basketBtn" onclick="ClickGoods(${i}, ${j}, '+')">+</button>
                        &nbsp;&nbsp;${goodsChoice[i][j]}&nbsp;&nbsp;
                        <button class="basketBtn" onclick="ClickGoods(${i}, ${j}, '-')">-</button>
                    <div>
                    <br>
                </div>`;
			}
		}
	}
	document.getElementById("total").innerHTML = `합계 : ${sum}원`;
}

function clickKinds(Kinds) {    // 카테고리 선택
	document.querySelector(".Btn0").style.backgroundColor = "#ff9100";
	document.querySelector(".Btn1").style.backgroundColor = "#ff9100";
	document.querySelector(".Btn2").style.backgroundColor = "#ff9100";
	document.querySelector(".Btn3").style.backgroundColor = "#ff9100";
	document.querySelector(".Btn4").style.backgroundColor = "#ff9100";
	document.querySelector(".Btn0").style.color = "white";
	document.querySelector(".Btn1").style.color = "white";
	document.querySelector(".Btn2").style.color = "white";
	document.querySelector(".Btn3").style.color = "white";
	document.querySelector(".Btn4").style.color = "white";
	switch (Kinds) {
		case 0:
			document.querySelector(".Btn0").style.backgroundColor = "#ffc880";
			document.querySelector(".Btn0").style.color = "#1B1F2A";
			break;
		case 1:
			document.querySelector(".Btn1").style.backgroundColor = "#ffc880";
			document.querySelector(".Btn1").style.color = "#1B1F2A";
			break;
		case 2:
			document.querySelector(".Btn2").style.backgroundColor = "#ffc880";
			document.querySelector(".Btn2").style.color = "#1B1F2A";
			break;
		case 3:
			document.querySelector(".Btn3").style.backgroundColor = "#ffc880";
			document.querySelector(".Btn3").style.color = "#1B1F2A";
			break;
		case 4:
			document.querySelector(".Btn4").style.backgroundColor = "#ffc880";
			document.querySelector(".Btn4").style.color = "#1B1F2A";
			break;
	}
	document.getElementById("section").innerHTML = ``;
	for (let i = 0; i < goodsList[Kinds].length; i++) {
		document.getElementById("section").innerHTML += `
        <div class="goods">
            <img id="image" onclick="ClickGoods(${Kinds}, ${i}, '+')" src="/images/${goodsList[Kinds][i]}.PNG">
            ${goodsPrice[Kinds][i]}원
        </div>
        `;
	}
}

// 결제
let payment = function () {
	alert(`${sum}원이 결제됩니다.`);

	let array = [];
	for (let i = 0; i < goodsList.length; i++) {
		for (let j = 0; j < goodsList[i].length; j++) {
			if (!goodsChoice[i][j]) continue;
			array.push({
				name: goodsList[i][j],
				price: goodsPrice[i][j],
				cnt: goodsChoice[i][j]
			});
		}
	}

	//console.log(array);
}