let timerEl = document.querySelector(".timer")
let choicesEl = document.querySelector("#choices")
let questionTitle = document.querySelector("#question-title")
let startScreen = document.querySelector("#start-screen")
let startBtn = document.querySelector("#start")
let endScreen = document.querySelector("#end-screen")
let endBtn = document.querySelector("#submit")

let currentQuestion = 0;


// how do we keep track of what question we SHOW/HIDE/etc ... (CURRENT QUESTION --> taht we are looking at / displaying )


startBtn.addEventListener("click", function(event){
    let startEl = startScreen.getAttribute("class");
    console.log(startEl)
    startScreen.setAttribute("class", "hide");  // --> this methods OVERWITES the data
    //startScreen.a("class", "hide");  // --> this methods ADD or REMOVE the data
    
    verifyQuestion();
});


choicesEl.addEventListener("click", () => {
    console.log("Choices selected");

    nextQuestion()
}); 


// create function to findout what question we are on
function verifyQuestion() {
    // we have an ARRAY of DATA
    // hwo do we access the Question TITLE (?)

    // test to seee if we still have questions left 
    if(currentQuestion >= questions.length) {
        // we end our game
        endScreen = "visible";
        container.setAttribute("class", "visible");
        console.log(endScreen);
    } else {
        // ask next questions
        showQuestions()
    }
}


function showQuestions() {
    console.log("Show Question")
    // show the question TITLE
    questionTitle.textContent = questions[currentQuestion].question;

    // create answer buttons/p tags to load text content into

    // we need to grab reference to the container

    // create elements to attach DATA to 
    let btn = document.createElement('button');
    // we need to add DATA or attributes to the ELEMENT
    btn.setAttribute("class", "user-choice")
    btn.textContent = questions[currentQuestion].answers[0];

    let btn2 = document.createElement('button');
    // we need to add DATA or attributes to the ELEMENT
    btn2.setAttribute("class", "user-choice")
    btn2.textContent = questions[currentQuestion].answers[1];

    let btn3 = document.createElement('button');
    // we need to add DATA or attributes to the ELEMENT
    btn3.setAttribute("class", "user-choice")
    btn3.textContent = questions[currentQuestion].answers[2];

    let btn4 = document.createElement('button');
    // we need to add DATA or attributes to the ELEMENT
    btn4.setAttribute("class", "user-choice")
    btn4.textContent = questions[currentQuestion].answers[3];

    // ADD / APPEND the new element to the DOM
    choicesEl.append(btn, btn2, btn3, btn4);

    // WHEN THE USER clicks an answer choice --> update the currentQuestion variable --> show next question

    // check that the user choice is correct ( checkAnswer() )
        // increase user score
        // take time away from the counter

    // CALL THE NEXT QUESTION FUNCTION
}

function nextQuestion() {
    // update teh value in cureentQuestion
    currentQuestion = currentQuestion + 1;

    showQuestions()
}

