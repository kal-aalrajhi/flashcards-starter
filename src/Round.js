class Round {
    constructor(guess, currentDeck) {
        this.currentCard = currentDeck[0];
        this.currentGuess = guess;
    }
}

module.exports = Round;
