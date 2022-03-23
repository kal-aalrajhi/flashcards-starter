const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {
    let card1, card2, card3;
    let deckSet1, deckSet2;
    let round;
    beforeEach(function() {
        card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?',
        ['object', 'array', 'function'], 'object');
        card2 = new Card(2, 'What is a comma-separated list of related values?', 
        ['array', 'object', 'function'], 'array');
        card3 = new Card(3, 'What type of prototype method directly modifies the existing array?',
        ['mutator method', 'accessor method', 'iteration method'], 'mutator method');

        deckSet1 = new Deck([card1, card2, card3]);
        deckSet2 = new Deck([card1, card2]);
        round = new Round();
    });

    it('should be a function', function() {
        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', function() {
        expect(round).to.be.an.instanceof(Round);
    });

    it('should take in a guess', function() {
        
    });

    // it('should take in a deck', function() {

    // });

    // it('should have a card ready', function() {

    // });

    // it('should return the current card', function() {

    // });
});