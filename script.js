const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

import questions from "./questions.js"

let currentIndex = 0;
let questionsCorrect = 0;

function loadQuestions() {
    spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
    const item = questions[currentIndex];
    answers.innerHTML = "";
    question.innerHTML = item.questions;

    item.answers.forEach((answer) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <button class="answer" data-correct="${answer.correct}">
        ${answer.opition}
        </button>
        `;
        answers.appendChild(div);
    });
}

loadQuestions();