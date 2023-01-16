
let choicesEl = document.querySelector("#choices")
let questionTitle = document.querySelector("#question-title")
let currentQuestion = 0;
let scores = 0;
let timer = 0;


    
function getQuestion(){
    currentQuestion = questions[i];
    
}




choicesEl.addEventListener("click", function(event){
    
    if(event.target.matches("button")){
        console.log(event.target.getAttribute("data-index"))
    }
});