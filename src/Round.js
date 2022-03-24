const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.cards = deck.cards;
        this.currentCard = deck.cards[0];
        this.turns = 0;
        this.currentTurn = '';
        this.incorrectGuesses = [];
    }

    returnCurrentCard() {
        return this.currentCard;
    }

    takeTurn(guess) {
        if (this.turns < this.cards.length) {
            this.currentTurn = new Turn(guess, this.currentCard);
            this.turns++;

            if(!this.currentTurn.evaluateGuess()) {
                this.incorrectGuesses.push(this.currentCard.id);
            }

            this.currentCard = this.cards[this.turns];
            return this.currentTurn.giveFeedback();
        }
        this.endRound();
    }

    calculatePercentCorrect() {
        let totalGuessesCount = this.cards.length;  
        let correctGuessesCount = totalGuessesCount - this.incorrectGuesses.length;
        return Math.round((correctGuessesCount / totalGuessesCount) * 100);
    }

    endRound() {
        console.log(`\n\n** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!\n\n`);
        return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    }
}

module.exports = Round;
