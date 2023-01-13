let questionsDiv = document.querySelector("#questions")
let choicesElement = document.querySelector("#choices")
let currentQuestion = 0;
// let timer = 10;

// Structure questions defined as an array of objects
let questions = [
    
    {questionTitle: "What is the maximum size of local storage?", answers:["5MB", "10MB", "15MB", "20MB"], correctAnswer: 0},
    
    {questionTitle: "What method do I use to read data from localStorage?", answers:["returnItem()", "giveItem()", "getItem()", "storageItem()"], correctAnswer: 3},
    
    {questionTitle: "Which of this is not a JavaScript data type?", answers:["Number", "Alphabet", "String", "Boolean"], correctAnswer: 1},
    
    {questionTitle: "What does NaN mean in JavaScript?", answers:["Not-array-Note", "No-answer-Needed", "Need-a-Nap", "Not-a-Number"], correctAnswer: 3},
    
]




let timerId = setInterval(function() {
    timer--
    console.log(timer);
}, );


questionsDiv.addEventListener("click", function() {
    
});

choicesElement.addEventListener("click", function(event){
    
    if(event.target.matches("button")){
        console.log(event.target.getAttribute("data-index"))
    }
})

// Create an index structure tracking the questions we are currently on
// Put questionTitle into h2 from index.html (id = "question-title")
// Create a way to display the text for the answers inside a button  (generate a block element for each item of the answer)
// Loop over the answer options and when a user selects a button it's linked to the index number - review activity on data-index
// Create an event listener hooked into the choices div


// OFFICE HOUR JOINT PSEUDO CODING
// Pseudo Code for Code Quiz
// *
// * Part 1 - setting the questions (logic.js)
// *   - Create an array of objects with all the questions and answers
// *      - let questions = [{ question: "", answers: ["a","b","c","d"], correctAns: answers[i]},{},{}]
// *
// *
// * Part 2 - getting score (logic.js)
// * Start button presented to the screen upon loading the website
// *      - let score = 0;
// *   - When clicked timer starts and first question appears
// *    - startBtn.addEventListener("click", function())
// *      - setTime function to keep track of the time
// *         - setInterval function(func(what to happen), time(in ms))
// *         - func(what to happen)
// *            - clear the display
// *              - add the hide class to the parent div
// *            - display the question and answers
// *              - remove the hide class from the div
// *              - loop through the questions array in sequence
// *                - for loop, for each
// *                  - if answer is correct score++
// *                    - play sound for correct answer(look up how to play sounds/add sounds in js)
// *                    - go to next question
// *                  - else the timer reduces
// *                    - go to next question
// *                - end game when all questions have answered
// *                  - call gameEnd()
// *
// * gameEnd function
// *    - Show end game screen
// *      - remove the hide class from the end-screen div
// *    - display score
// *      - textContent to the #final-score span = score
// *    - Get user initials from #initials input value
// *    - user can save their initials and score
// *      - localStorage.setItem("userInitials", JSON.stringify(userInitials))
// *      - localStorage.setItem("userScore", JSON.stringify(score))
// *
// *
// * Part 2 - high score record (scores.js)
// * Grab the scores saved from local storage
// *  - let storedScores = JSON.parse(localStorage.getItem("scores")) || "No scores"
// * Display the scores
// *  - exercise 6 of 03-client-side-storage lesson
// * Btn to go back and restart the game (event listener)
// *  - initialise game function
// *    - score = 0
// *    - game starts
// * Btn to clear the high score from local storage (event listener)









