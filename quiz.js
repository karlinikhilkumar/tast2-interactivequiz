const questions = [
    {
        question: "name the capital of india?",
        options: ["kerala", "up", "telangana", "new delhi"],
        correctAnswer: "new delhi",
    },
    {
        question: " who is cm of telanaga?",
        options: ["kcr", "cbn", "ys", "srinivas goud"],
        correctAnswer: "kcr",
    },
    {
        question:"which animal is king of forest?",
        options: ["elephant","horse","lion","dog"],
        correctAnswer: "lion",
    },
    {
        question:"where is the raimona reserve forest situated?",
        options: ["andhra","bihar","assam","telangana"],
        correctAnswer: "assam",
    }
];

const questionContainer = document.getElementById("question-container");
const submitButton = document.getElementById("submit-button");
const resultContainer = document.getElementById("result-container");

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const optionsHTML = currentQuestion.options.map((option, index) => `
        <label>
            <input type="radio" name="answer" value="${option}" />
            ${option}
        </label>
    `).join("");

    questionContainer.innerHTML = `
        <h2>Question ${currentQuestionIndex + 1}:</h2>
        <p>${currentQuestion.question}</p>
        ${optionsHTML}
    `;
}

function selectAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const userAnswer = selectedOption.value;
        const correctAnswer = questions[currentQuestionIndex].correctAnswer;

        if (userAnswer === correctAnswer) {
            score++;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }
}

function showResult() {
    questionContainer.style.display = "none";
    submitButton.style.display = "none";
    resultContainer.textContent = `Your Score: ${score} out of ${questions.length}`;
}

loadQuestion();

submitButton.addEventListener("click", selectAnswer);
