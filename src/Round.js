const Card = require("./Card");

class Round {
    constructor(currentDeck) {
        this.currentCard = currentDeck[0];
        // this.currentGuess = guess;
    }

    returnCurrentCard() {
        return this.currentCard;
    }
}

module.exports = Round;
