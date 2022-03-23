const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Deck', function() {
    let deck1, deck2;
    beforeEach(function() {
        deck1 = new Deck();
        deck2 = new Deck();
    });

    it('should be a function', function() {
        expect(Deck).to.be.a('function');
    });

    it('should be an instance of Deck', function() {
        expect(deck1).to.be.an.instanceof(Deck);
    });

});