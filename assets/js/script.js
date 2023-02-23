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

// Get DOM elements by using query selector
const quizArea = document.queryselector(".quiz-game-area")
const choices = document.queryselector(".choices")
const questionElement = document.queryselector(".questions-text")
const nextQ = document.queryselector(".next-q")
const ScoreArea = document.queryselector(".score-Area")
const finalResult = document.queryselector(".final-result")
const restartBtn = document.queryselector(".restart")