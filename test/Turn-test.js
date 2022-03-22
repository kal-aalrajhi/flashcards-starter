const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should be instantiated with a user\'s guess and current flash card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?',
    ['object', 'array', 'function'], 'object');

    const turn = new Turn('object', card);
      
    expect(turn.guess).to.equal('object');
    expect(turn.card).to.be.an.instanceof(Card);
  });

  it('should return a guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?',
    ['object', 'array', 'function'], 'object');

    const turn = new Turn('object', card);
      
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should return a card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?',
    ['object', 'array', 'function'], 'object');

    const turn = new Turn('object', card);
      
    expect(turn.returnCard()).to.equal({
        'id': 1,
        'question': 'What allows you to define a set of related information using key-value pairs?',
        'answers': ['object', 'array', 'function'],
        'correctAnswer': 'object'
      });
  });

  it('should evalute the guess', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?',
    ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?',
    ['array', 'object', 'function'], 'array');

    const turn1 = new Turn('object', card1);
    const turn2 = new Turn('function', card2);
      
    expect(turn1.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

});