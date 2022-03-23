const Turn = require("./Turn");

class Round {
    constructor(currentDeck) {
        this.currentDeck = currentDeck;
        this.currentCard = currentDeck[0];
        this.turns = 0;
        this.currentGuess = '';
        this.currentTurn = '';
        this.incorrectGuesses = 0;
    }

    returnCurrentCard() {
        return this.currentCard;
    }

    takeTurn(guess) {
        this.currentTurn = new Turn(guess, this.currentCard);
        this.currentGuess = this.currentTurn.returnGuess;
        this.turns++;
        this.currentCard = this.currentDeck[this.turns];
        
        // guess is evaluated/recorded
            // incorrect guesses are stored via id in an array of incorrectGuesses
        // feedback is returned whether the guess is incorrect or correct
    }
}

module.exports = Round;
