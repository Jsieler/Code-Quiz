var quizHeaderEl = document.querySelector(".secondary-header");
var quizContentEl = document.querySelector(".quiz-content");
var startButtonEl = document.querySelector("#start");
var submitFormEl = document.querySelector(".submit-score");
var submitButtonEl = document.querySelector("#submit");
var showHighScoresEl = document.querySelector("#showHighScores");
var answerCorrectEl = document.querySelector("#answer-correct");
var answerIncorrectEl = document.querySelector("#answer-incorrect");

const questions = [
    {
        question: 'JQuery is a ___ Library.',
        answers: {
            A: "JavaScript",
            B: "HTML",
            C: "Java",
            D: "CSS"
        },
        correctAnswer: "A"
    },
    {
        question: "Arrays in JavaScript can be used to store _____?",
        answers: {
            A: "other arrays",
            B: "booleans",
            C: "numbers and strings",
            D: "all of the above"
        },
        correctAnswer: "D"
    },
    {
        question: "How do you make a comment in Javascript?",
        answers: {
            A: "'This is a comment",
            B: "//This is a comment",
            C: "<!--This is a comment-->",
            D: "Var Comment"
        },
        correctAnswer: "B"
    },
    {
        question: "When a web page is loaded, the browser creates a _____ of the page?",
        answers: {
            A: "Document Oriented Object",
            B: "Document Tree",
            C: "Document Object Model",
            D: "Document Model"
        },
        correctAnswer: "C"
    },
    {
        question: "Javascript uses the ___ keyword to declare a variable?",
        answers: {
            A: "var",
            B: "variable",
            C: "Variable",
            D: "vari"
        },
        correctAnswer: "A"
    }
]

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



