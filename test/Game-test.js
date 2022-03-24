const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const data = require('../src/data');

describe('Game', function() {
    let prototypeQuestions;
    let game;

    beforeEach(function() {
        prototypeQuestions = data.prototypeData;
        game = new Game();
    });

    it('should be a function', function() {
        expect(Game).to.be.a('function');
    });

    it('should be an instance of Game', function() {
        expect(game).to.be.an.instanceof(Game);
    });
    
    it('should keep track of the current round', function() {
        expect(game.currentRound).to.equal('');
    });
    
    it('should have a start method that creates cards', function() {
        game.start();
        expect(game.cards).to.have.length(prototypeQuestions.length);
    });

    it('should put cards in a deck', function() {
        game.start();
        expect(game.deck.countCards()).to.equal(prototypeQuestions.length);
    });

    it('should create a new round', function() {
        game.start();
        expect(game.currentRound).to.be.an.instanceOf(Round);
    });
});