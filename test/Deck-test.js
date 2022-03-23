const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
    let deck;
    let deckSet1, deckSet2;
    let card1, card2, card3;
    beforeEach(function() {
        deck = new Deck();
        deckSet1 = new Deck([card1, card2, card3]);
        deckSet2 = new Deck([card1, card2]);

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
        expect(deck).to.be.an.instanceof(Deck);
    });

    it('should have a default value of an empty array', function() {
        expect(deck.cards).to.be.a('array');
        expect(deck.cards).to.have.length(0);
    });

    it('should take in any set of cards', function() {
        expect(deckSet1.cards).to.be.a('array');
        expect(deckSet1.cards).to.have.length(3);

        expect(deckSet2.cards).to.be.a('array');
        expect(deckSet2.cards).to.have.length(2);
    });

    it('should count cards', function() {
        expect(deck.countCards()).to.equal(0);
        expect(deckSet1.countCards()).to.equal(3);
        expect(deckSet2.countCards()).to.equal(2);
    });
});