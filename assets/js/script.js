var quizHeaderEl = document.querySelector(".secondary-header");
var quizContentEl = document.querySelector(".quiz-content");
var startButtonEl = document.querySelector("#start");
var submitFormEl = document.querySelector(".submit-score");
var submitButtonEl = document.querySelector("#submit");
var showHighScoresEl = document.querySelector("#showHighScores");
var answerCorrectEl = document.querySelector("#answer-correct");
var answerIncorrectEl = document.querySelector("#answer-incorrect");

// Questions 
var questions = [
    {
        question: 'JQuery is a ___ Library.',
        answers: ['1. JavaScript', '2. HTML', '3. Java', '4. CSS'],
        correctAnswer: '1. JavaScript'
    },
    {
        question: 'Arrays in JavaScript can be used to store _____.',
        answers: ['1. other arrays', '2. booleans', '3. numbers and strings', '4. all of the above'],
        correctAnswer: '4. all of the above'
    },
    {
        question: 'When a web page is loaded, the browser creates a _____ of the page.',
        answers: ['1. Document Oriented Object', '2. Document Object Model', '3. Document Tree', '4. Document Model'],
        correctAnswer: '2. Document Object Model'
    },
    {
        question: 'Javascript uses the ___ keyword to declare a variable.',
        answers: ['1. variable', '2. vari', '3. var', '4. Variable'],
        correctAnswer: '3. var'
    },
    {
        question: 'Which of the following is NOT a Javascript logical operator?',
        answers: ['1. &&', '2. ||', '3. !', '4. +='],
        correctAnswer: '4. +='
    }
];


// Start function on click
var startQuiz = function(){

};

// timer
var timeLeft = 75;
var score = 0;
var questionIndex = 0;
highScores = [];

// timer function
var timer = function(){

};

// function to clear and populate next question and answers to lift 
var nextQuestion = function(){

};

// function to check answers
var checkAnswer = function(){

};

// function to end quiz if timer is 0
var endQuiz = function(){

};



