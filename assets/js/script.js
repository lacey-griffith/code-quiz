//when start button is clicked
// a timer starts
//and question appears on screen
//when answered correctly, another question appears
//when incorrect, time is deducted from timer
//when all questions are answered or timer is 0
//quiz is over
//when over, score is shown
//type initials and score is saved

//array of questions
var quizQuestions = [
    {
        number:1,
        question: "Which method would you use before saving an object to localStorage?",
        A: "JSON.stringify(arrayName)",
        B: "words",
        C: "words",
        D: "words",
    },
    {
        number:2,
        question: "How would you style an element to have pink font?",
        A: "words",
        B: "elementToStyle.setAttribute('style', 'color: pink')",
        C: "words",
        D: "words"
    }
];

//timer created, when start button is clicked, countdown begins
var timeLeft = 5
timer.textContent = "Time Left:" + timeLeft;

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

//create button to start the quiz
    var startButton = document.createElement("button");
    startButton = document.querySelector("#start-button");
    startButton.className = "start-button";
    startButton.textContent = "Click to start";

//when start button is clicked , create questions
function startQuiz() {
    createQuestions();
}

function createQuestions() {
    for (var i = 0; i < quizQuestions.length; i++) {
    //ref div to hold questions and add to div quiz content
    var quizQuestion = document.querySelector("#quiz-questions");
    quizQuestion.className = "quiz-questions";

    //display questions from array
    quizQuestion.textContent = quizQuestions[i].number +". " + quizQuestions[i].question;

    //ref div to hold answer buttons
    var quizAnswers = document.querySelector("#quiz-answers");
    quizAnswers.className = "quiz-answers";

    //create answer buttons
    var quizAnswer1 = document.querySelector("#quiz-answer1");
    quizAnswer1.className = "quiz-answers";
    quizAnswer1.textContent = quizQuestions[i].A;
    
    var quizAnswer2 = document.createElement("button");
    quizAnswer2 = document.querySelector("#quiz-answer2");
    quizAnswer2.className = "quiz-answers";
    quizAnswer2.textContent = quizQuestions[i].B;

    var quizAnswer3 = document.createElement("button");
    quizAnswer3 = document.querySelector("#quiz-answer3");
    quizAnswer3.className = "quiz-answers";
    quizAnswer3.textContent = quizQuestions[i].C;

    var quizAnswer4 = document.createElement("button");
    quizAnswer4 = document.querySelector("#quiz-answer4");
    quizAnswer4.className = "quiz-answers";
    quizAnswer4.textContent = quizQuestions[i].D;
    }
    checkAnswers();
}

//if correct answer is chosen, go to next questions, 
//if incorrect answer is chosen, deduct time from timer
function checkAnswers() {
    if (quizQuestions[0] === quizQuestions.B) {
    }
}


//when timer === 0 or no questions left
//function endQuiz() {}

//display score

//prompt user for initals

//save initals and score to localStorage

//on submit, show highscores


//eventlistener for start button
startButton.addEventListener("click",runTimer);
startButton.addEventListener("click",startQuiz);

//event listeners for answer buttons
