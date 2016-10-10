console.log("JS file is connected to HTML! Woo!");
//Making four cards
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var gameBoard = document.getElementById("game-board");

function createCards() {
	for (var i = 0; i < cards.length; i++) {
		var newCard = document.createElement('div');
		newCard.className = "card";
		newCard.setAttribute('data-card', cards[i]);
		newCard.addEventListener('click', isTwoCards);
		gameBoard.appendChild(newCard);
	}	
}

function isTwoCards() {
	var cardImage,
	cardType = this.getAttribute('data-card');
	if (cardType === "king") {
		cardImage = "king.png";
	}
	else {
		cardImage = "queen.jpg";
	}
	this.innerHTML = '<img src="'+cardImage+'" alt="'+cardType+'">';
	cardsInPlay.push(cardType);

  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }

}

function isMatch(cardsInPlay) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You've found a match!");
	}
	else {
		alert("Sorry, try again!");
	}
	var allCards = document.querySelectorAll(".card");
	for (var i = 0; i < allCards.length; i++) {
		console.log(allCards[i]);
		allCards[i].innerHTML = "";
	}
}

createCards();
