const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('./Round');
const Card = require('./Card');
const Deck = require('./Deck');

class Game {
  constructor() {
    this.currentRound = '';
    this.cards = [];
    this.deck = '';
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
    -----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    this.cards = prototypeQuestions.map(question => {
      return new Card(question.id, question.question, question.answers, question.correctAnswer);
    });

    this.deck = new Deck(this.cards);

    this.currentRound = new Round(this.deck);

    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }
}

module.exports = Game;