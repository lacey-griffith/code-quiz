//when start button is clicked
// a timer starts
//and question appears on screen
//when answered correctly, another question appears
//when incorrect, time is deducted from timer
//when all questions are answered or timer is 0
//quiz is over
//when over, score is shown
//type initials and score is saved

//create button to start the quiz
var startButton = document.createElement("button");
startButton = document.querySelector("#start-button");
startButton.className = "btn";
startButton.textContent = "Click to start";

var answerContainerEl = document.getElementById("quiz-answers");


var score = 15;

var timeLeft = 50
timer.textContent = "Time Left:" + timeLeft;

//array of questions
var questionsArray = [
    {
        number: 1,
        question: "Which method would you use before saving an object to localStorage?",
        answers: [
            {text: "JSON.stringify(arrayName)", correct: true},
            {text: "Wrong answer", correct: false},
            {text: "Wrong Again", correct: false},
            {text: "And wrong again", correct: false}
        ]
    },
    {
        number: 2,
        question: "How would you style an element to have pink font?",
        answers: [
            {text: "sdfsfsdf", correct: false},
            {text: "Wrong answer", correct: false},
            {text: "Wrong Again", correct: false},
            {text: "And correct!", correct: true}
        ]
    },
];

//timer created, when start button is clicked, countdown begins
function runTimer() {
    var timer = document.querySelector("#timer")
    timeLeft--;
    if (timeLeft > 0) {
        setTimeout(runTimer, 1000)
    }
    else if (timeLeft === 0) {
        alert("You ran out of time!");
        //endquiz();
    }
    timer.textContent = "Time Left:" + timeLeft;
    console.log(timeLeft);
}

//when start button is clicked , create questions
function startQuiz() {
    startButton.remove();
    answerContainerEl.classList.remove("hide");
    createQuestion(questionsArray);
}

function createQuestion (questionsArray) {
    //ref div to hold questions and add to div quiz content
    const quizQuestion = document.querySelector("#quiz-questions");
    quizQuestion.className = "quiz-questions";

    for(var i = 0; i < questionsArray.length; i++) {
    const answerButton = document.createElement("button");
    answerButton.className = "btn";
    answerButton.textContent = answers.text; //showing as undefined
    }


    for (var i = 0; i < questionsArray.length; i++) {
        quizQuestion.textContent = questionsArray[i].number +". " + questionsArray[i].question;
        //if correct answer is chosen, go to next question and award points
        //if incorrect answer is chosen, deduct time from timer
        if(true) {
            score = score + 5;
        } 
        else {
            timeLeft= timeLeft - 10;
            score = score - 5;
        }
    }
}


//display score

//prompt user for initals

//save initals and score to localStorage

//on submit, show highscores


//eventlistener for start button
startButton.addEventListener("click",runTimer);
startButton.addEventListener("click", startQuiz);

//event listeners for answer buttons
