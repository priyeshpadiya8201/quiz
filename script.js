// quiz logic...
const htmlquizData = [{
    question: "Q.1 What does HTML stand for?",
    a: "Home text Markup langage",
    b: "Hyper text Markup langage",
    c: "HyperLink text Markup langage",
    d: "Hyper text langage",
    correct: "b",
},
{
    question: "Q.2 Who is making the Web standards?",
    a: "Google",
    b: "the World Wide Web Consortium",
    c: "Mozila",
    d: "Edge",
    correct: "b",
},
{
    question: "Q.3 Choose the correct HTML element for the largest heading:",
    a: "<h1>",
    b: "<h2>",
    c: "<h3>",
    d: "<head>",
    correct: "a",
},
{
    question: "Q.4 What is the correct HTML element for inserting a line break?",
    a: "<br>",
    b: "<break>",
    c: "<bl>",
    d: "braek",
    correct: "a",
},
{
    question: "Q.5 What is the correct HTML for adding a background color?",
    a: "<background>red</background>",
    b: "<background style=	&ldquo;red &rdquo;></background>",
    c: "<body style=	&ldquo;red &rdquo;></body>",
    d: "color:red",
    correct: "c",
},
{
    question: "Q.6 Choose the correct HTML element to define important text",
    a: "<li>",
    b: "<strong>",
    c: "<sub>",
    d: "<imp>",
    correct: "b",
},
{
    question: "Q.7 Which character is used to indicate an end tag?",
    a: "*",
    b: "/",
    c: "^",
    d: "<",
    correct: "b",
},
{
    question: "Q.8 Which of these elements are all <table> elements?",
    a: "<th><head><tfoot>",
    b: "<th><thead><tfoot>",
    c: "<table><th><td>",
    d: "<tr><td><tt>",
    correct: "c",
},
{
    question: "Q.9 Inline elements are normally displayed without starting a new line.",
    a: "true",
    b: "false",
    correct: "b",
},
{
    question: "Q.10 How can you make a numbered list?",
    a: "<ol>",
    b: "<ul>",
    c: "<li>",
    d: "<list>",
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
            quiz.innerHTML = ` <center style="margin-top:20%; color:white;"><h2>You answered ${score}/${htmlquizData.length} questions correctly</h2> 
                <button onclick="history.go(0)" style="padding:10px;border: none;background-color:#020917;border:3px solid white;border-radius:10px;color:white; ">Play Again</button> </center>`
           
        }
    }
});