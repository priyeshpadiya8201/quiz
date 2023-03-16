// quiz logic...
const htmlquizData = [{
    question: "Q.1 Which type of JavaScript language is ___",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Assembly-language",
    d: "High-level",
    correct: "b",
},
{
    question: "Q.2 Which one of the following also known as Conditional Expression:",
    a: "Alternative to if-else",
    b: "Switch statement",
    c: "If-then-else statement",
    d: "immediate if",
    correct: "d",
},
{
    question: "Q.3  When interpreter encounters an empty statements, what it will do:",
    a: "Shows a warning",
    b: "Prompts to complete the statement",
    c: "Throws an error",
    d: "Ignores the statements",
    correct: "a",
},
{
    question: "Q.4 The function and var are known a",
    a: "Keywords",
    b: "Data types",
    c: "Declaration statements",
    d: "Prototypes",
    correct: "c",
},
{
    question: "Q.5 Which one of the following is the correct way for calling the JavaScript code?",
    a: "Preprocessor",
    b: "Triggering Event",
    c: "RMI",
    d: "Function/Method",
    correct: "d ",
},
{
    question: "Q.6 Which of the following type of a variable is volatile?",
    a: "Mutable variable",
    b: "Dynamic variable",
    c: "Volatile variable",
    d: "Immutable variable",
    correct: "a",
},
{
    question: "Q.7  Which of the following option is used as hexadecimal literal beginning?",
    a: "00",
    b: "0x",
    c: "0X",
    d: "Both 0x and 0X    ",
    correct: "d",
},
{
    question: "Q.8 In the JavaScript, which one of the following is not considered as an error:",
    a: "Syntax error    ",
    b: "Missing of semicolons   ",
    c: "Division by zero",
    d: "Missing of Bracket",
    correct: "c",
},
{
    question: "Q.9 n JavaScript the x===y statement implies that:",
    a: "Both x and y are equal in value, type and reference address as well.",
    b: "Both are x and y are equal in value only.",
    c: "Both are equal in the value and data type.",
    d: "Both are not same at all.",
    correct: "c",
},
{
    question: "Q.10 Which one of the following is an ternary operator:",
    a: "?",
    b: ":",
    c: "-",
    d: "+",
    correct: "a",
},
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) {
            answer = answerElement.id;
        }
    });
    return answer;
};
const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = htmlquizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === htmlquizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < htmlquizData.length) loadQuiz();
        else {
            quiz.innerHTML = ` <center style="margin-top:20%;"><h2>You answered ${score}/${htmlquizData.length} questions correctly</h2> 
            <button onclick="history.go(0)" style="padding:10px ; border: none ; background-color:#020917 ; border:3px solid white;border-radius:10px;color:white; ">Play Again</button> </center>`
           
        }
    }
});