//create a play game button with onclick attribute to call function and load dynamically to prompt using getelemid and use innerhtml
document.getElementById('prompt').innerHTML = "<button onClick='playGame()'>PlayGame</button>";

/* Question Multi-dimensional array */
var questions = [
   ["What is the color of the sky?", 0 , "Blue", "Green", "Yellow"],
   ["What domestic animal has 4 legs and rhymes with fog?", 1 , "Cat", "Dog", "Goldfish"],
   ["What season comes after fall and before spring?", 2 , "Spring", "Fall", "Winter"]
];

//create a counter to track the questions and set it to zero
var counter = 0;

//create a playGame functionthat will provide user with a trivia question and three answers from the questions array
function playGame() {
    var question = questions[counter];
    document.getElementById('question').innerHTML = question[0];
    question.shift();
    var correctAnswer = question[0];
    question.shift();

    var answerChoices = "";
    question.forEach(createAnswerChoices);

    function createAnswerChoices(value, index) {
        answerChoices += "<li><h href='#' onClick='checkAnswer(" + index + ',' + correctAnswer + ")'>" + value + "</a><li>";
    }
    
    document.getElementById('answers').innerHTML = answerChoices;
}

function checkAnswer(index, correctAnswer) {
    if (index == correctAnswer) {
        document.getElementById('answers').innerHTML = "<li>You are correct!</li>";
        document.getElementById('question').innerHTML = "";
    } else {
        document.getElementById('answers').innerHTML = "<li>Nope! Incorrect.</li>";
        document.getElementById('question').innerHTML = "";
    }

    counter++;
    if (counter < questions.length) {
        document.getElementById('prompt').innerHTML = "<button onClick='playGame()'>Play Game</button>";
    } else {
         document.getElementById('prompt').innerHTML = "<button onClick='playGame()'>Replay Game</button>";
    }
}

