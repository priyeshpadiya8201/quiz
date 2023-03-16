// quiz logic...
const htmlquizData = [{
    question: "Q.1 CSS stands for",
    a: "Cascade style sheets",
    b: "Color and style sheets",
    c: "Cascading style sheets",
    d: "None of the above",
    correct: "c",
},
{
    question: "Q.2 How to select the elements with the class name example?",
    a: "example",
    b: "#example ",
    c: ".example",
    d: "Class example",
    correct: "c",
},
{
    question: "Q.3 The property in CSS used to change the background color of an element is",
    a: "bgcolor",
    b: "color    ",
    c: "background-color",
    d: "All of the above",
    correct: "c",
},
{
    question: "Q.4 The property in CSS used to change the text color of an element is",
    a: "bgcolor",
    b: "color    ",
    c: "background-color",
    d: "All of the above",
    correct: "b",
},
{
    question: "Q.5 The CSS property used to control the element's font-size is",
    a: "text-style  ",
    b: "text-size",
    c: "font-size",
    d: "None of the above",
    correct: "c",
},
{
    question: "Q.6 The HTML attribute used to define the inline styles is",
    a: "style",
    b: "styles",
    c: "class",
    d: "None of the above",
    correct: "a",
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
    question: "Q.8 The HTML attribute used to define the internal stylesheet is",
    a: "<style>",
    b: "style",
    c: "<link>",
    d: "<script>",
    correct: "a",
},
{
    question: "Q.9 The CSS property used to make the text bold is",
    a: "font-weight : bold",
    b: "weight: bold",
    c: "font: bold",
    d: "style: bold",
    correct: "a",
},
{
    question: "Q.10 Are the negative values allowed in padding property?",
    a: "yes",
    b: "no",
    c: "can't say",
    d: "may be",
    correct: "b",
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