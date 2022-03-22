const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let card1, card2;
  let turn1, turn2;

  beforeEach(function() {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?',
    ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What is a comma-separated list of related values?',
    ['array', 'object', 'function'], 'array');
    turn1 = new Turn('object', card1);
    turn2 = new Turn('function', card2);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn1).to.be.an.instanceof(Turn);
  }); 

  it('should be instantiated with a user\'s guess and current flash card', function() {
    expect(turn1.guess).to.equal('object');
    expect(turn1.card).to.be.an.instanceof(Card);
  });

  it('should return a guess', function() {  
    expect(turn1.returnGuess()).to.equal('object');
  });

  it('should return a card', function() {
    expect(turn1.returnCard()).to.be.an.instanceof(Card);
  });

  it('should evalute the guess', function() {  
    expect(turn1.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should give feedback', function() {   
    expect(turn1.giveFeedback()).to.equal('correct!');
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });
});