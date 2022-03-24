const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('./Round');
const Card = require('./Card');

class Game {
  constructor() {
    this.currentRound = '';
    this.cards = [];
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
  }
}

module.exports = Game;