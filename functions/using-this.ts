(function() {
	"use strict";
	var deck = {
		suits: ["hearts", "spades", "clubs", "diamonds"],
		cards: Array(52),
		//要想在函数内使用“this”，内层使用箭头函数，外层使用正常函数
		createCardPicker: function() {
			return () => {
				var pickedCard = Math.floor(Math.random() * 52);
				var pickedSuit = Math.floor(pickedCard / 13);
				return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
			}
		}
	}
	var cardPicker = deck.createCardPicker();
	var pickedCard = cardPicker();
	console.log(`card: ${pickedCard.card} of ${pickedCard.suit}`);
})();