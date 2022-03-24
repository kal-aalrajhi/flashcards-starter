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
    // Creates cards
    prototypeQuestions.forEach(question => {
      let card = new Card(question.id, question.question, question.answers, question.correctAnswer);
      this.cards.push(card);
    });

    // Puts cards in a deck
    this.deck = new Deck(this.cards);

    // Creates a new round
    this.currentRound = new Round(this.deck);
    
  }
}

module.exports = Game;