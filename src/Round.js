const Turn = require("./Turn");

class Round {
    constructor(currentDeck) {
        this.currentDeck = currentDeck;
        this.currentCard = currentDeck[0];
        this.turns = 0;
        this.currentGuess = '';
        this.currentTurn = '';
        this.incorrectGuesses = [];
    }

    returnCurrentCard() {
        return this.currentCard;
    }

    takeTurn(guess) {
        this.currentTurn = new Turn(guess, this.currentCard);
        this.currentGuess = this.currentTurn.returnGuess;
        
        if(!this.currentTurn.evaluateGuess()) {
            this.incorrectGuesses.push(this.currentCard.id);
        }

        this.turns++;
        this.currentCard = this.currentDeck[this.turns];

        return this.currentTurn.giveFeedback();
    }
}

module.exports = Round;
