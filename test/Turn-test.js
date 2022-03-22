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
    ['object', 'array', 'function'], 'array');

    const turn = new Turn('object', card);
      
    expect(turn.guess).to.equal('object');
    expect(turn.card).to.be.an.instanceof(Card);
  });

  it('should return a guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?',
    ['object', 'array', 'function'], 'array');

    const turn = new Turn('object', card);
      
    expect(turn.returnGuess()).to.equal('object');
  });

});