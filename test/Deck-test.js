const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Deck', function() {
    let card1, card2, card3;
    beforeEach(function() {
        card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?',
        ['object', 'array', 'function'], 'object');
        card2 = new Card(2, 'What is a comma-separated list of related values?', 
        ['array', 'object', 'function'], 'array');
        card3 = new Card(3, 'What type of prototype method directly modifies the existing array?',
        ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    });

    it('should be a function', function() {
        expect(Deck).to.be.a('function');
    });

    it('should be an instance of Deck', function() {
        let deck = new Deck();

        expect(deck).to.be.an.instanceof(Deck);
    });

    it('should have a default value of an empty array', function() {
        let deck = new Deck();

        expect(deck.cards).to.be.a('array');
        expect(deck.cards).to.have.length(0);
    });

    it('should take in a set of cards', function() {
        let deck = new Deck([card1, card2, card3]);

        expect(deck.cards).to.be.a('array');
        expect(deck.cards).to.have.length(3);
    });

    it('should count cards', function() {
        let deck = new Deck([card1, card2, card3]);
        expect(deck.countCards()).to.equal(3);
    })
});