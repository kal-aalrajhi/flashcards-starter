const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Game', function() {
    let card1, card2, card3;
    let deckSet1, deckSet2;
    let round1, round2;
    let game;

    beforeEach(function() {
        card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?',
        ['object', 'array', 'function'], 'object');
        card2 = new Card(2, 'What is a comma-separated list of related values?', 
        ['array', 'object', 'function'], 'array');
        card3 = new Card(3, 'What type of prototype method directly modifies the existing array?',
        ['mutator method', 'accessor method', 'iteration method'], 'mutator method');

        deckSet1 = new Deck([card1, card2, card3]);
        deckSet2 = new Deck([card1, card2]);
        round1 = new Round(deckSet1.cards);
        round2 = new Round(deckSet2.cards);
    });

    it('should be a function', function() {
        expect(Game).to.be.a('function');
    });

    it('should be an instance of Game', function() {
        expect(game).to.be.an.instanceof(Game);
    });
});