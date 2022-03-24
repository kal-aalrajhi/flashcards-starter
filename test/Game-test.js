const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const data = require('../src/data');

describe('Game', function() {
    let prototypeQuestions;
    let game;

    beforeEach(function() {
        prototypeQuestions = data.prototypeData;
        game = new Game();
        game.createCards();
        game.createDeck();
        game.createRound();
    });

    it('should be a function', function() {
        expect(Game).to.be.a('function');
    });

    it('should be an instance of Game', function() {
        expect(game).to.be.an.instanceof(Game);
    });
    
    it('should have a start method that creates cards', function() {
        expect(game.cards).to.have.length(prototypeQuestions.length);
    });

    it('should put cards in a deck', function() {
        expect(game.deck.countCards()).to.equal(prototypeQuestions.length);
    });

    it('should create a new round', function() {
        expect(game.currentRound).to.be.an.instanceOf(Round);
    });
});