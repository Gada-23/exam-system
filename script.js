// ===============================
// Variables
// ===============================
let examQuestions = [];
let userAnswers = {};
let currentQuestion = 0;

let timeLeft = 60 * 60; // 1 hour
let timerInterval;


// ===============================
// Helpers
// ===============================
function showPage(id) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}


// ===============================
// Start Exam
// ===============================
document.getElementById("startBtn").addEventListener("click", () => {
    examQuestions = [...allQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 100);

    showPage("exam");
    loadQuestion();
    startTimer();
});


// ===============================
// Load One Question
// ===============================
function loadQuestion() {
    const q = examQuestions[currentQuestion];
    const box = document.getElementById("questionBox");

    document.getElementById("progress").textContent =
        `Question ${currentQuestion + 1} of ${examQuestions.length}`;

    box.innerHTML = `
        <p><b>${currentQuestion + 1}. ${q.question}</b></p>
        ${q.options.map((opt, i) => `
            <div class="option">
                <label>
                    <input type="radio" name="answer" value="${i}"
                        ${userAnswers[currentQuestion] === i ? "checked" : ""}>
                    ${opt}
                </label>
            </div>
        `).join("")}
    `;

    // save answer when clicked
    document.querySelectorAll('input[name="answer"]').forEach(radio => {
        radio.addEventListener("change", (e) => {
            userAnswers[currentQuestion] = Number(e.target.value);
        });
    });

    updateNavButtons();
}


// ===============================
// Navigation Buttons
// ===============================
document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentQuestion < examQuestions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
});

document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
});

function updateNavButtons() {
    document.getElementById("prevBtn").disabled = currentQuestion === 0;
    document.getElementById("nextBtn").disabled =
        currentQuestion === examQuestions.length - 1;
}


// ===============================
// Timer
// ===============================
function startTimer() {
    updateTimer();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft <= 0) {
            submitExam();
        }
    }, 1000);
}

function updateTimer() {
    const min = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const sec = String(timeLeft % 60).padStart(2, "0");
    document.getElementById("timer").textContent = `${min}:${sec}`;
}


// ===============================
// Submit Exam
// ===============================
document.getElementById("submitBtn").addEventListener("click", () => {
    submitExam();
});

function submitExam() {
    clearInterval(timerInterval);

    let score = 0;
    examQuestions.forEach((q, i) => {
        if (userAnswers[i] === q.answer) score++;
    });

    document.getElementById("scoreText").textContent =
        `You scored ${score} out of ${examQuestions.length}`;

    showPage("result");
}


// ===============================
// Review
// ===============================
document.getElementById("reviewBtn").addEventListener("click", () => {
    loadReview();
    showPage("review");
});

function loadReview() {
    const container = document.getElementById("reviewContainer");
    container.innerHTML = "";

    examQuestions.forEach((q, i) => {
        const user = userAnswers[i];
        const correct = q.answer;

        const div = document.createElement("div");
        div.className = "question-card";

        div.innerHTML = `
            <p><b>${i + 1}. ${q.question}</b></p>
            <p>Your answer:
                <span class="${user === correct ? "correct" : "wrong"}">
                    ${user !== undefined ? q.options[user] : "Not answered"}
                </span>
            </p>
            <p class="correct">Correct answer: ${q.options[correct]}</p>
            <p><i>Explanation: ${q.explanation}</i></p>
        `;

        container.appendChild(div);
    });
}
