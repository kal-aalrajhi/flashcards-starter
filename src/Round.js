const Card = require("./Card");

class Round {
    constructor(currentDeck) {
        this.currentCard = currentDeck[0];
        this.currentGuess = " ";
    }

    returnCurrentCard() {
        return this.currentCard;
    }

    takeTurn() {

    }
}

module.exports = Round;
