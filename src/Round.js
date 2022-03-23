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
        this.turns++;
        this.currentCard = this.currentDeck[this.turns];
        
        if(this.currentTurn.evaluateGuess()) {
            this.incorrectGuesses.push(this.currentCard.id);
        }
        // guess is evaluated/recorded
            // incorrect guesses are stored via id in an array of incorrectGuesses
        // feedback is returned whether the guess is incorrect or correct
    }
}

module.exports = Round;
