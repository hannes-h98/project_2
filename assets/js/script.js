// The quiz questions made as an array 
const QUESTIONS = [
    {
    question: "wich movie has the highest imdb score?",
    answers: {
        a: "The Shawshank Redemption",
        b: "The Pianist",
        c: "Saving Private Ryan",
        d: "The Shining"
    },
    rightanswer: "a"
},
{
    question: "Wich one of these movies are not a Christopher Nolan movie",
    answers: {
        a: "The Dark Knight",
        b: "Inception",
        c: "Interstellar",
        d: "Django Unchained"
    },
    rightanswer: "d"
},
{
    question: "Who won the Oscar for best actor 2022",
    answers: {
        a: "Denzel Washington",
        b: "Will Smith",
        c: "Andrew Garfield",
        d: "Benedict Cumberbatch"
    },
    rightanswer: "b"
},
{
    question: "In wich of the first Harry Potter movies does Harry first encounter a dementor",
    answers: {
        a: "The first one",
        b: "The second one",
        c: "The third one",
        d: "The fourth one"
    },
    rightanswer: "c"
}
]

// Get DOM elements by using class name selector 
const quizArea = document.getElementsByClassName("quiz-game-area")[0];
const choices = document.getElementsByClassName("choices")[0];
const questionElement = document.getElementsByClassName("questions-text")[0];
const nextQ = document.getElementsByClassName("next-q")[0];
const scoreArea = document.getElementsByClassName("score-area")[0];
const finalResult = document.getElementsByClassName("final-result")[0];
const restartBtn = document.getElementsByClassName("restart")[0];

// Event listeners for the buttons
nextQ.addEventListener("click", nextQuestion)
restartBtn.addEventListener("click", restartQuiz)

// Track current question and score
let currentQuestion = 0;
let score = 0;

// Call the getQuestion function
getQuestion();

/* Function to show the first question from the array, update the question-text div 
* with the text content of the first question and clear the answer choices so it doesnt overlapp with the next question and answers.
*/

function getQuestion () {
    const question = QUESTIONS[currentQuestion];
    questionElement.textContent = question.question;
    choices.innerHTML = "";

// A for loop to the answers and create radio buttons with labels for each answer
    for (const [key, value] of Object.entries(question.answers)) {
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = key;
        const label = document.createElement("label");
        label.textContent = value;

// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild        
        choices.appendChild(input);
        choices.appendChild(label);
        choices.appendChild(document.createElement("br"));
    }
}

// Function to get the selected answer using a query selector, if no answer is selected you can not continue
function nextQuestion () {
    const selectedAnswer = document.querySelector("input[name='answer']:checked");
    if (!selectedAnswer) {
        return;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return        
    }
if (selectedAnswer.value === QUESTIONS[currentQuestion].rightanswer) {
    score += 100;
}

currentQuestion++;
// This statement checks if all questions has been answered and then displays the final score in the score area
if (currentQuestion >= QUESTIONS.length) {
    quizArea.style.display = "none";
    scoreArea.style.display = "block";
    finalResult.textContent = `You got ${score} out of ${QUESTIONS.length * 100} Points!`;
} 
else {
    getQuestion();
}
}

// Function to restart the quiz by setting score and current question to 0 and hide the score area
function restartQuiz() {
    score = 0
    currentQuestion = 0
    quizArea.style.display ="block";
    scoreArea.style.display ="none";
}
