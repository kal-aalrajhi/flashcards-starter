class Turn {
    constructor(guess, card) {
        this.guess = guess;
        this.card = card;
    }

    returnGuess() {
        return this.guess;
    }

    returnCard() {
        return this.card;
    }

    evaluateGuess() {
        return this.guess === this.card.correctAnswer;
    }

    giveFeedback() {
        if(this.evaluateGuess()) {
            return 'correct!';
        }
        return 'incorrect!';
    }
}
module.exports = Turn;