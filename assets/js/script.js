//when start button is clicked
// a timer starts
//and question appears on screen
//when answered correctly, another question appears
//when incorrect, time is deducted from timer
//when all questions are answered or timer is 0
//quiz is over
//when over, score is shown
//type initials and score is saved

var answerContainerEl = document.querySelector("#quiz-answers");
var answerContainerHideEl = document.querySelector("#hide");

//create button to start the quiz
var startButton = document.createElement("button");
startButton = document.querySelector("#start-button");
startButton.className = "start-btn";
startButton.textContent = "Click to start";

//multiple choice buttons


var score = 15;

var timeLeft = 10
timer.textContent = "Time Left:" + timeLeft;

//array of questions
var questionsArray = [{
        number: 1,
        question: "Which method would you use before saving an object to localStorage?",
        answers: [{
                text: "JSON.stringify(arrayName) (this is correct)",
                correct: true
            },
            {
                text: "Wrong answer",
                correct: false
            },
            {
                text: "Wrong Again",
                correct: false
            },
            {
                text: "And wrong again",
                correct: false
            }
        ]
    },
    {
        number: 2,
        question: "How would you style an element to have pink font?",
        answers: [{
                text: "this is an inccorrect answer",
                correct: false
            },
            {
                text: "Wrong answer",
                correct: false
            },
            {
                text: "Wrong Again",
                correct: false
            },
            {
                text: "And correct!",
                correct: true
            }
        ]
    },
];

answers = [];

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

//when start button is clicked , create questions
function startQuiz() {
    startButton.remove();
    buttonA = document.querySelector("#buttonA").removeAttribute("hide");
    buttonB = document.querySelector("#buttonB").removeAttribute("hide");
    buttonC = document.querySelector("#buttonC").removeAttribute("hide");
    buttonD = document.querySelector("#buttonD").removeAttribute("hide");

    for (var i = 0; i < questionsArray.length; i++) {
        var createQuestion = document.querySelector("#quiz-questions");
        createQuestion.textContent = questionsArray[i].number + ". " + questionsArray[i].question
        answers.push(questionsArray[i].answers);

        var buttonA = document.querySelector("#buttonA");
        buttonA.className = "btn";
        buttonA.textContent = "A) " + answers[0][0].text;

        var buttonB = document.querySelector("#buttonB");
        buttonB.className = "btn";
        buttonB.textContent = "B) " + answers[0][1].text;

        var buttonC = document.querySelector("#buttonC");
        buttonC.className = "btn";
        buttonC.textContent= "C) " + answers[0][2].text;

        var buttonD = document.querySelector("#buttonD");
        buttonD.className = "btn";
        buttonD.textContent = "D) " + answers[0][3].text;

}
}



//if incorrect answer is chosen, deduct time from timer


//display score

//prompt user for initals

//save initals and score to localStorage

//on submit, show highscores


//eventlistener for start button
startButton.addEventListener("click", runTimer);
startButton.addEventListener("click", startQuiz);

//event listeners for answer buttons