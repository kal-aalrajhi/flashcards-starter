# FlashCards

<img width="150" alt="FlashCards" src="https://cpb-us-e1.wpmucdn.com/blogs.uoregon.edu/dist/0/11988/files/2015/10/flashcards-12d2f4w.png">

## Table of Contents

  - [Introduction](#introduction)
  - [Technologies](#technologies)
  - [Features](#features)
  - [Page Demo](#page-demo)
  - [Possible Future Extensions](#possible-future-extensions)
  - [Set Up](#set-up)
  - [Contributors](#contributors)
  - [Project Specs](#project-specs)
  - [Project GitHub Repo](#project-github-repo)

## Introduction 
Users who need to brush up on their JavaScript terms are encouraged to try out **FlashCards!**. Why waste paper when you can study on your own terminal! *What does the callback function for the map() method take in?* who knows!? Well, **FlashCards** do and they'll help you know it as well! Run through 30 pre-written flash cards with multiple choices to keep you from overburdening your memory. Also, if you got your answer correct/incorrect - you'll know immediately with our automatic feedback feature! When you've finally made it through the deck, you'll be given a percent score of questions you got correct. Keep practicing, and you'll get better *or your money back!*.

This project was assigned as a part of Turing School of Software and Design's Front-End program, students had about 4 days to complete it. We were challenged to use TDD via Mocha/Chai. The process began by developing a test suite of failing tests (red) for each feature, making sure both happy and sad paths were accounted for. Then we moved on to making the tests pass (green) by building out features bit-by-bit. Finally, we had to refactor our code to make sure everything came together and the code was clean/readable. 

## Technologies
  - Javascript 
  - Mocha
  - Chai
  - GitProjects

## Features
- Terminal based user interface that displays a set of questions and possible answers, one-by-one, and then prompts the user to answer the question
- Evalutes the guess and provides immediate feedback as either *correct* or *incorrect*
- Stores incorrect answers by id
- Calculates percent correct and displays it to user at the end of game
- Test suite with 39 different tests


## Page Demo
![Example of game functionality](https://media.giphy.com/media/tIv3e6vbGwIHGQcK5s/giphy.gif)

## Possible Future Extensions
- The ability to review incorrect answers
- Timer to report how long it took to complete a study deck
- Have the option to study other decks

## Set Up
Clone down the forked repo (from your GitHub). 

```bash
git clone [remote-address] [what you want to name the repo]
```

Once you have cloned the repo, change into the directory and install the library dependencies. Run:

```bash
npm install
```

To verify that it is setup correctly, run `npm test` in your terminal. You should have many completed tests show up.

To run through the question deck run `node index.js` from the root of your project, which should result in the first question being presented.

## Contributors
- Kal Al-Rajhi (GitHub: kal-aalrajhi)

## Project Specs
- The spec for this project can be found [here](https://frontend.turing.edu/projects/flash-cards.html).

## Project GitHub Repo
- The project repo can be found [here](https://github.com/kal-aalrajhi/flashcards).
