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
    this.createCards();
    this.createDeck();
    this.createRound();

    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  createCards() {
    this.cards = prototypeQuestions.map(question => {
      return new Card(question.id, question.question, question.answers, question.correctAnswer);
    });
  }
  
  createDeck() {
    this.deck = new Deck(this.cards);
  }

  createRound() {
    this.currentRound = new Round(this.deck);
  }
}

module.exports = Game;