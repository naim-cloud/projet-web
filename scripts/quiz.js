
const questions = [
    {
        question: "Which attributes are mandatory for an `<img>` tag in HTML?",
        answers: ["src", "alt", "title", "id"],
        correct: ["src", "alt"],
        time: 20
    },
    {
        question: "Which HTML attribute is used to define a hyperlink?",
        answers: ["href", "src", "link", "url"],
        correct: ["href"],
        time: 20
    },
    {
        question: "In CSS, which property is used to horizontally center an element in a flex container?",
        answers: ["justify-content", "align-items", "text-align", "flex-direction"],
        correct: ["justify-content"],
        time: 20
    },
    {
        question: "What is the result of the expression `typeof null` in JavaScript?",
        answers: ["null", "object", "undefined", "string"],
        correct: ["object"],
        time: 20
    },
    {
        question: "Which HTML tag is used to include a JavaScript file?",
        answers: ["<script>", "<link>", "<js>", "<style>"],
        correct: ["<script>"],
        time: 20
    },
    {
        question: "Which CSS properties can be used to position an element?",
        answers: ["position", "top", "left", "margin", "display"],
        correct: ["position", "top", "left"],
        time: 20
    },
    {
        question: "Which CSS selector targets an element with the ID 'header'?",
        answers: ["#header", ".header", "header", "[header]"],
        correct: ["#header"],
        time: 20
    },
    {
        question: "Which data types are available in JavaScript?",
        answers: ["string", "number", "boolean", "object", "float"],
        correct: ["string", "number", "boolean", "object"],
        time: 20
    },
    {
        question: "Which CSS properties are used to manage the inner and outer spacing of elements?",
        answers: ["padding", "margin", "border", "spacing", "content"],
        correct: ["padding", "margin"],
        time: 20
    },
    {
        question: "Which JavaScript events can be used to interact with users?",
        answers: ["onclick", "onhover", "onload", "onchange", "onsubmit"],
        correct: ["onclick", "onload", "onchange", "onsubmit"],
        time: 20
    },
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let selectedAnswers = [];

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const timerElement = document.getElementById('time-left');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const emojiElement = document.getElementById('emoji');
const restartButton = document.getElementById('restart-button');
const viewAnswersButton = document.getElementById('view-answers');
const warningElement = document.getElementById('multi-answer-warning');
const answersContainer = document.getElementById('answers-container');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    questionContainer.classList.remove('hidden');
    scoreContainer.classList.add('hidden');
    document.getElementById('start-quiz-button').classList.add('hidden');
    nextButton.disabled = true;
    showQuestion();
}

function showQuestion() {
    clearInterval(timer);
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
    selectedAnswers = [];
    nextButton.disabled = true;

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.classList.add('option');
        button.addEventListener('click', () => selectAnswer(button, index));
        optionsElement.appendChild(button);
    });

    warningElement.classList.toggle('hidden', currentQuestion.correct.length <= 1);
    startTimer(currentQuestion.time);
}

function selectAnswer(button, index) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswers.length < currentQuestion.correct.length && !selectedAnswers.includes(index)) {
        selectedAnswers.push(index);
        button.classList.add('selected');
        if (currentQuestion.correct.includes(button.textContent)) {
            button.classList.add('correct');
        } else {
            button.classList.add('incorrect');
        }
        button.disabled = true;
        if (selectedAnswers.length === currentQuestion.correct.length) {
            nextButton.disabled = false;
        }
    }
}

function startTimer(time) {
    timerElement.textContent = time;
    timer = setInterval(() => {
        time--;
        timerElement.textContent = time;
        if (time <= 0) {
            clearInterval(timer);
            showNextQuestion();
        }
    }, 1000);
}

function showNextQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswers = currentQuestion.correct.map(answer => currentQuestion.answers.indexOf(answer));
    if (selectedAnswers.sort().toString() === correctAnswers.sort().toString()) {
        score++;
    }
    warningElement.classList.add('hidden');
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        questionContainer.classList.remove('visible');
        setTimeout(() => {
            showQuestion();
        }, 500);
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.classList.add('hidden');
    scoreContainer.classList.remove('hidden');
    scoreElement.textContent = score;
    emojiElement.textContent = score >= 8 ? 'Exelent <br> 😃' : score >= 5 ? ' Good <br>😊' : ' Try Again <br>😢';
}

function viewAnswers() {
    // Générer le contenu des réponses
    const answersHtml = questions.map(q => {
        const correctAnswers = q.correct.join(', ');
        return `<div class="answer-item">
                   <p> ${q.question}</p>
                   <p> <span class="correct-answer">${correctAnswers}</span></p>
                </div>`;
    }).join('');
    
    // Injecter le contenu dans le conteneur
    const answersElement = document.getElementById('answers');
    answersElement.innerHTML = answersHtml;
    
    // Afficher le conteneur
    const answersContainer = document.getElementById('answers-container');
    answersContainer.classList.remove('hidden');
    answersContainer.style.maxHeight = '300px'; // Définir une hauteur maximale
    answersContainer.style.overflowY = 'scroll'; // Activer le défilement vertical
}
restartButton.addEventListener('click', startQuiz);
viewAnswersButton.addEventListener('click', viewAnswers);

const startQuizButton = document.getElementById('start-quiz-button');
const quizContainer = document.getElementById('quiz-container');

startQuizButton.addEventListener('click', () => {
    startQuizButton.parentElement.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    startQuiz();
});

nextButton.addEventListener('click', () => {
    showNextQuestion();
});