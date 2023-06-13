var timeLeft = 75;
var timer = document.querySelector("#timer");
var startPage = document.querySelector("#startPage");
var startButton = document.querySelector("#startButton");
var quiz = document.querySelector("#quiz");
var question = document.querySelector("#question");
var optionOne = document.querySelector("#option-one");
var optionTwo = document.querySelector("#option-two");
var optionThree = document.querySelector("#option-three");
var optionFour = document.querySelector("#option-four");
const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        optionOne: "strings",
        optionTwo: "booleans",
        optionThree: "alerts",
        optionFour: "numbers",
        correctOption: "optionThree"
    },
    {
        question: "The condition if an if / else statement is enclosed within _____.",
        optionOne: "quotes",
        optionTwo: "curly brackets",
        optionThree: "parentheses",
        optionFour: "square brackets",
        correctOption: "optionThree"
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        optionOne: "numbers and strings",
        optionTwo: "other arrays",
        optionThree: "booleans",
        optionFour: "all of the above",
        correctOption: "optionFour"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        optionOne: "commas",
        optionTwo: "curly brackets",
        optionThree: "quotes",
        optionFour: "parentheses",
        correctOption: "optionFour"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        optionOne: "JavaScript",
        optionTwo: "terminal / bash",
        optionThree: "for loops",
        optionFour: "console.log",
        correctOption: "optionFour"
    }
];

function startTimer() {
    var timeInterval = setInterval(function(){
        if (timeLeft >= 0) {
            timer.textContent = "Time: " + timeLeft;
            timeLeft--;
        } else {
            clearInterval(timeInterval);
        }
    }, 1000);
}

function startQuiz() {
    startPage.style.display = "none";
    quiz.style.display = "block";
    startTimer();

    for (let i = 0; i < questions.length; i++){
        question.textContent = questions[i].question;
        optionOne.textContent = questions[i].optionOne;
        optionTwo.textContent = questions[i].optionTwo;
        optionThree.textContent = questions[i].optionThree;
        optionFour.textContent = questions[i].optionFour;
    }
}

startButton.addEventListener("click", function() {
    startQuiz();
});