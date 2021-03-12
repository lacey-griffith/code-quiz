//when start button is clicked
// a timer starts
//and question appears on screen
//when answered correctly, another question appears
//when incorrect, time is deducted from timer
//when all questions are answered or timer is 0
//quiz is over
//when over, score is shown
//type initials and score is saved

var displayQuestion = document.querySelector("#quiz-questions");
//create button to start the quiz
var startButton = document.createElement("button");
startButton = document.querySelector("#start-button");
startButton.className = "start-btn";
startButton.textContent = "Click to start";

//multiple choice buttons

var answers = [];
var score = 15;

var timeLeft = 10
timer.textContent = "Time Left:" + timeLeft;

var currentQuestion = 0;
//array of questions
var questionsArray = [{
        number: 1,
        question: "Which method would you use before saving an array to localStorage?",
        answers: [{
                text: "JSON.stringify(arrayName)",
                correct: true
            },
            {
                text: "localStorage.setItem(arrayName)",
                correct: false
            },
            {
                text: "JSON.parse(arrayName)",
                correct: false
            },
            {
                text: "save.localStorage(arrayName)",
                correct: false
            }
        ]
    },
    {
        number: 2,
        question: "How would you dynamically style an element to have pink font?",
        answers: [{
                text: "setAttribute = 'style', 'pink'",
                correct: false
            },
            {
                text: "elementToStyle {color:pink;}",
                correct: false
            },
            {
                text: "elementToStyle.Color('pink')",
                correct: false
            },
            {
                text: "elementToStyle.setAttribute('style','color:pink');",
                correct: true
            }
        ]
    },
    {
        number: 3,
        question: "How do you locate the element that triggers an event?",
        answers: [{
                text: "elementEl.addEventListener('click', functionName)",
                correct: false
            },
            {
                text: "eventListener.target",
                correct: false
            },
            {
                text: "locate.event",
                correct: false
            },
            {
                text: "event.target",
                correct: true
            }
        ]
    },
];

//timer created, when start button is clicked, countdown begins
function runTimer() {
    var timer = document.querySelector("#timer")
    timeLeft--;
    if (timeLeft > 0) {
        setTimeout(runTimer, 1000)
    } else if (timeLeft === 0) {
        alert("You ran out of time!");
        //endquiz();
    }
    timer.textContent = "Time Left:" + timeLeft;
    console.log(timeLeft);
}

function startQuiz() {
    createQuestion();
}

//when start button is clicked , create questions
function createQuestion() {
    if (currentQuestion < questionsArray.length) {
        startButton.remove();
        buttonA = document.querySelector("#buttonA").removeAttribute("hide");
        buttonB = document.querySelector("#buttonB").removeAttribute("hide");
        buttonC = document.querySelector("#buttonC").removeAttribute("hide");
        buttonD = document.querySelector("#buttonD").removeAttribute("hide");

        answers = [];
        //displayQuestion = document.querySelector("#quiz-questions");
        displayQuestion.textContent = questionsArray[currentQuestion].number + ". " + questionsArray[currentQuestion].question
        answers.push(questionsArray[currentQuestion].answers);

        var buttonA = document.querySelector("#buttonA");
        buttonA.className = "btn";
        buttonA.textContent = "A) " + answers[0][0].text;
        buttonA.value = answers[0][0].correct

        var buttonB = document.querySelector("#buttonB");
        buttonB.className = "btn";
        buttonB.textContent = "B) " + answers[0][1].text;
        buttonB.value = answers[0][1].correct

        var buttonC = document.querySelector("#buttonC");
        buttonC.className = "btn";
        buttonC.textContent = "C) " + answers[0][2].text;
        buttonC.value = answers[0][2].correct;

        var buttonD = document.querySelector("#buttonD");
        buttonD.className = "btn";
        buttonD.textContent = "D) " + answers[0][3].text;
        buttonD.value = answers[0][3].correct;
        currentQuestion++
    } else if (currentQuestion >= questionsArray.length) {
        alert("quiz is over! Your score is");
        displayScore();
    }

};

function displayScore() {
    displayQuestion.remove();
    buttonA.remove();
    buttonB.remove();
    buttonC.remove();
    buttonD.remove();

    var name = prompt("Enter your intials to save your score!")

    var viewScore = document.querySelector("#view-score")
    viewScore.textContent = name + "   " + score;
    localStorage.setItem("name", name);
    localStorage.setItem("score", score);
}


function checkAnswerA(event) {
    if (
        buttonA.value === "true") {
        var feedBack = document.querySelector("#question-feedback")
        feedBack.textContent = "Correct!";
        score = score + 5;
        createQuestion();

    } else if (
        buttonA.value === "false") {
        alert("Wrong!");
        timeLeft = timeLeft - 2;
        createQuestion();
    }
}

function checkAnswerB(event) {
    if (
        buttonB.value === "true") {
        var feedBack = document.querySelector("#question-feedback")
        feedBack.textContent = "Correct!";
        score = score + 5;
        createQuestion();

    } else if (
        buttonB.value === "false") {
        alert("Wrong!");
        timeLeft = timeLeft - 2;
        createQuestion();
    }
}

function checkAnswerC(event) {
    if (
        buttonC.value === "true") {
        var feedBack = document.querySelector("#question-feedback")
        feedBack.textContent = "Correct!";
        score = score + 5;
        createQuestion();

    } else if (
        buttonC.value === "false") {
        alert("Wrong!");
        timeLeft = timeLeft - 2;
        createQuestion();
    }
}

function checkAnswerD(event) {
    if (
        buttonD.value === "true") {
        var feedBack = document.querySelector("#question-feedback")
        feedBack.textContent = "Correct!";
        score = score + 5;
        createQuestion();

    } else if (
        buttonD.value === "false") {
        alert("Wrong!");
        timeLeft = timeLeft - 2;
        createQuestion();
    }
}
//display score

//prompt user for initals

//save initals and score to localStorage

//on submit, show highscores


//eventlistener for start button
startButton.addEventListener("click", runTimer);
startButton.addEventListener("click", startQuiz);


//checkout the console logs for this mess
buttonA.addEventListener("click", checkAnswerA);
buttonB.addEventListener("click", checkAnswerB);
buttonC.addEventListener("click", checkAnswerC);
buttonD.addEventListener("click", checkAnswerD);

//event listeners for answer buttons