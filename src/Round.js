const Turn = require("./Turn");

class Round {
    constructor(currentDeck) {
        this.currentDeck = currentDeck;
        this.currentCard = currentDeck[0];
        this.turns = 0;
        this.currentTurn = '';
        this.incorrectGuesses = [];
    }

    returnCurrentCard() {
        return this.currentCard;
    }

    takeTurn(guess) {
        if (this.turns < this.currentDeck.length) {
            this.currentTurn = new Turn(guess, this.currentCard);
            this.turns++;
            if(!this.currentTurn.evaluateGuess()) {
                this.incorrectGuesses.push(this.currentCard.id);
            }
            this.currentCard = this.currentDeck[this.turns];
            return this.currentTurn.giveFeedback();
        } else {
            console.log("end");
            return 'WOW';
        }
    }
}

module.exports = Round;
