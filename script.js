// ===============================
// Variables
// ===============================
let examQuestions = [];
let userAnswers = {};
let currentQuestion = 0;

let timeLeft = 60 * 60 * 2; // 2 hours
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

    document.getElementById("questionNum").textContent =
        `${currentQuestion + 1} / ${examQuestions.length}`;

    box.innerHTML = `
        <p><b>${currentQuestion + 1}. ${q.question}</b></p>
        ${q.options.map((opt, i) => `
            <div class="option">
                <input type="radio" name="answer" value="${i}" id="opt-${i}"
                    ${userAnswers[currentQuestion] === i ? "checked" : ""}>
                <label for="opt-${i}">${opt}</label>
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
    const timerBox = document.getElementById("timer");
    timerBox.textContent = `${min}:${sec}`;
    
    // Add warning style when time is running out
    if (timeLeft <= 300) { // 5 minutes
        timerBox.classList.add("warning");
    } else {
        timerBox.classList.remove("warning");
    }
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

    const percentage = Math.round((score / examQuestions.length) * 100);
    const performanceText = percentage >= 80 ? "Excellent!" : 
                           percentage >= 60 ? "Good Job!" : 
                           percentage >= 40 ? "Keep Practicing!" : "Study More!";

    document.getElementById("scoreText").innerHTML =
        `<div><strong>${performanceText}</strong></div>
         <div style="font-size: 36px; font-weight: 700; margin: 15px 0; color: #667eea;">
            ${score} / ${examQuestions.length}
         </div>
         <div style="font-size: 18px; color: #666;">
            Score: ${percentage}%
         </div>`;

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

        const statusIcon = user === correct ? 
            '<i class="fas fa-check-circle" style="color: #22c55e; margin-right: 8px;"></i>' : 
            '<i class="fas fa-times-circle" style="color: #f5576c; margin-right: 8px;"></i>';

        div.innerHTML = `
            <p><b>${statusIcon}${i + 1}. ${q.question}</b></p>
            <p><strong>Your answer:</strong>
                <span class="${user === correct ? "correct" : "wrong"}">
                    ${user !== undefined ? q.options[user] : "Not answered"}
                </span>
            </p>
            <p><strong style="color: #22c55e;">✓ Correct answer:</strong> ${q.options[correct]}</p>
            <i style="display: block; margin-top: 15px; padding-top: 15px; border-top: 1px solid #eee; color: #666;">
                <strong>📚 Explanation:</strong> ${q.explanation}
            </i>
        `;

        container.appendChild(div);
    });
}
