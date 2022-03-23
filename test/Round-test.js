const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {
    let card1, card2, card3;
    let deckSet1, deckSet2;
    let round1, round2;
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
        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', function() {
        expect(round1).to.be.an.instanceof(Round);
    });

    it('should have a card ready when created', function() {
        expect(round1.currentCard).to.be.an.instanceof(Card);
    });

    it('should not have a guess when created', function() {
        expect(round1.currentGuess).to.equal('');
    });

    it('should store the first card as the current card', function() {
        expect(round1.currentCard).to.deep.equal({
            id: 1,
            question: 'What allows you to define a set of related information using key-value pairs?',
            answers: [ 'object', 'array', 'function' ],
            correctAnswer: 'object'
        });

        expect(round2.currentCard).to.deep.equal({  
            id: 1,
            question: 'What allows you to define a set of related information using key-value pairs?',
            answers: [ 'object', 'array', 'function' ],
            correctAnswer: 'object'
        });
    });

    it('should return the current card', function() {
        expect(round1.returnCurrentCard()).to.deep.equal({
            id: 1,
            question: 'What allows you to define a set of related information using key-value pairs?',
            answers: [ 'object', 'array', 'function' ],
            correctAnswer: 'object'
        });

        expect(round2.returnCurrentCard()).to.deep.equal({  
            id: 1,
            question: 'What allows you to define a set of related information using key-value pairs?',
            answers: [ 'object', 'array', 'function' ],
            correctAnswer: 'object'
        });
    });

    it('number of turns should initially be 0', function() {
        expect(round1.turns).to.equal(0);
    });

    it('should create a new Turn instance when a guess is made', function() {
        round1.takeTurn('object');
        expect(round1.currentTurn).to.be.an.instanceof(Turn);
    });

    it('should update turn count by 1 for each turn', function() {
        round1.takeTurn('object');
        round1.takeTurn('function');
        round1.takeTurn('array');
        expect(round1.turns).to.equal(3);
    });

    it('should update current card after a turn is taken', function() {
        round1.takeTurn('object');
        expect(round1.currentCard).to.deep.equal({
            id: 2,
            question: "What is a comma-separated list of related values?",
            answers: ["array", "object", "function"],
            correctAnswer: "array"
        });
    });

    it('should not have initial incorrect guesses', function() {
        expect(round1.incorrectGuesses).to.have.length(0);
    });

    it('should record incorrect guesses', function() {
        round1.takeTurn('pineapple');
        expect(round1.incorrectGuesses).to.have.length(1);
        expect(round1.incorrectGuesses[0]).to.equal(1);

        round1.takeTurn('bagel');
        round1.takeTurn('potato');
        expect(round1.incorrectGuesses).to.have.length(3);
        expect(round1.incorrectGuesses[1]).to.equal(2);
        expect(round1.incorrectGuesses[2]).to.equal(3);
    });

    it('should not record correct guesses', function() {
        round1.takeTurn('object');
        expect(round1.incorrectGuesses).to.have.length(0);
        round1.takeTurn('array');
        expect(round1.incorrectGuesses).to.have.length(0);
    });

    it('should give feedback for correct guesses', function() {
        expect(round1.takeTurn('object')).to.equal('correct!');
    });
    
    it('should give feedback for incorrect guesses', function() {
        expect(round1.takeTurn('array')).to.equal('incorrect!');
    });
});