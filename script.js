// ===============================
// Variables
// ===============================
let examQuestions = [];
let userAnswers = {};
let currentQuestion = 0;
let currentExamMode = 'random'; // 'random' or 'course'
let selectedCourse = null;
let selectedQuantity = 20; // Default quantity

let timeLeft = 60 * 60 * 2; // 2 hours in seconds (7200 seconds)
let timerInterval;

// Available quantity options
const quantityOptions = [10, 20, 30, 40, 50];

// Available courses (will be extracted from questions)
let availableCourses = [];

// ===============================
// Initialize
// ===============================
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, initializing app...");
    
    // Show loading state
    showLoadingState();
    
    // Check if questions are already loaded
    if (window.questionsLoaded) {
        initializeApp();
    } else {
        // Wait for questions to load
        window.addEventListener('questionsLoaded', function() {
            console.log("Questions loaded event received");
            initializeApp();
        });
        
        // Fallback timeout
        setTimeout(function() {
            if (typeof window.allQuestions !== 'undefined' && window.allQuestions.length > 0) {
                console.log("Questions available via timeout");
                initializeApp();
            } else {
                console.error("Questions still not loaded after timeout");
                showError("Failed to load questions. Please refresh the page.");
            }
        }, 5000);
    }
});

function showLoadingState() {
    const homeStats = document.getElementById('homeStats');
    if (homeStats) {
        homeStats.innerHTML = `
            <div style="padding: 20px; text-align: center;">
                <i class="fas fa-circle-notch fa-spin" style="font-size: 30px; color: #667eea;"></i>
                <p style="margin-top: 10px;">Loading questions...</p>
            </div>
        `;
    }
}

function initializeApp() {
    // Check if allQuestions exists
    if (typeof window.allQuestions === 'undefined' || window.allQuestions.length === 0) {
        console.error("allQuestions is not defined or empty! Check questions.js file.");
        showError("Error loading questions. Please refresh the page.");
        return;
    }
    
    console.log(`✅ Loaded ${window.allQuestions.length} questions successfully`);
    
    // Extract unique courses from questions
    extractCourses();
    
    // Populate course grid
    populateCourseGrid();
    
    // Update home stats
    updateHomeStats();
    
    // Setup quantity options
    setupQuantityOptions();
    
    // Add event listeners
    setupEventListeners();
    
    // Update total questions count in modal
    updateTotalQuestionsCount();
}

// ... rest of your script.js code remains the same ...

// ===============================
// Error Handling
// ===============================
function showError(message) {
    const homeStats = document.getElementById('homeStats');
    if (homeStats) {
        homeStats.innerHTML = `
            <div style="color: #f5576c; padding: 20px; text-align: center;">
                <i class="fas fa-exclamation-triangle"></i>
                <p>${message}</p>
            </div>
        `;
    }
    
    // Also show error in course grid
    const courseGrid = document.getElementById('courseGrid');
    if (courseGrid) {
        courseGrid.innerHTML = `
            <div class="no-courses">
                <i class="fas fa-exclamation-triangle" style="color: #f5576c;"></i>
                <p>${message}</p>
            </div>
        `;
    }
}

// ===============================
// Extract unique courses from questions
// ===============================
function extractCourses() {
    const courses = new Set();
    let questionsWithCourse = 0;
    let questionsWithoutCourse = 0;
    
    allQuestions.forEach((q, index) => {
        if (q.course) {
            courses.add(q.course);
            questionsWithCourse++;
        } else {
            questionsWithoutCourse++;
            console.warn(`⚠️ Question ${index + 1} missing course:`, q.question.substring(0, 50) + "...");
        }
    });
    
    availableCourses = Array.from(courses).sort();
    
    console.log("📚 Course extraction complete:");
    console.log(`   - Total questions: ${allQuestions.length}`);
    console.log(`   - Questions with course: ${questionsWithCourse}`);
    console.log(`   - Questions without course: ${questionsWithoutCourse}`);
    console.log(`   - Unique courses found: ${availableCourses.length}`);
    console.log("   - Courses:", availableCourses);
    
    if (availableCourses.length === 0) {
        console.error("❌ No courses found! Check that questions have a 'course' property.");
        
        // Try to debug by looking at the first question
        if (allQuestions.length > 0) {
            console.log("First question structure:", Object.keys(allQuestions[0]));
            console.log("First question course value:", allQuestions[0].course);
        }
    }
}

// ===============================
// Setup Quantity Options
// ===============================
function setupQuantityOptions() {
    const quantityOptionsContainer = document.getElementById('quantityOptions');
    if (!quantityOptionsContainer) return;
    
    // Clear existing options
    quantityOptionsContainer.innerHTML = '';
    
    // Create quantity options
    quantityOptions.forEach(qty => {
        const option = document.createElement('div');
        option.className = 'quantity-option';
        if (qty === 20) option.classList.add('selected'); // Default to 20
        option.dataset.quantity = qty;
        option.textContent = qty;
        
        option.addEventListener('click', function() {
            selectQuantity(this, qty);
        });
        
        quantityOptionsContainer.appendChild(option);
    });
}

// ===============================
// Select Quantity
// ===============================
function selectQuantity(element, quantity) {
    // Deselect all other quantity options
    document.querySelectorAll('.quantity-option').forEach(q => {
        q.classList.remove('selected');
    });
    
    // Select this quantity
    element.classList.add('selected');
    selectedQuantity = quantity;
    
    console.log("📊 Selected quantity:", selectedQuantity);
}

// ===============================
// Populate Course Grid
// ===============================
function populateCourseGrid() {
    const courseGrid = document.getElementById('courseGrid');
    if (!courseGrid) {
        console.error("Course grid element not found!");
        return;
    }
    
    if (availableCourses.length === 0) {
        courseGrid.innerHTML = `
            <div class="no-courses">
                <i class="fas fa-frown"></i>
                <p>No courses found. Please check that questions have a 'course' property.</p>
                <p style="font-size: 12px; margin-top: 10px;">Expected courses: Computer Programming, Database Systems, Object Oriented Programming, etc.</p>
            </div>
        `;
        return;
    }
    
    courseGrid.innerHTML = '';
    
    availableCourses.forEach(course => {
        // Count questions for this course
        const count = allQuestions.filter(q => q.course === course).length;
        
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.dataset.course = course;
        courseCard.innerHTML = `
            <div class="course-check">
                <i class="far fa-circle"></i>
            </div>
            <div class="course-info">
                <h4>${course}</h4>
                <div class="course-meta">
                    <span class="course-count">
                        <i class="fas fa-question-circle"></i> ${count} questions
                    </span>
                </div>
            </div>
        `;
        
        courseCard.addEventListener('click', function() {
            selectCourse(this, course);
        });
        
        courseGrid.appendChild(courseCard);
    });
    
    // Update total stats
    updateTotalStats();
}

// ===============================
// Update Total Stats
// ===============================
function updateTotalStats() {
    const totalStats = document.getElementById('totalStats');
    if (!totalStats) return;
    
    const totalQuestions = allQuestions.length;
    const totalCourses = availableCourses.length;
    
    totalStats.innerHTML = `
        <div class="total-stat-item">
            <div class="total-stat-value">${totalQuestions}</div>
            <div class="total-stat-label">Total Questions</div>
        </div>
        <div class="total-stat-item">
            <div class="total-stat-value">${totalCourses}</div>
            <div class="total-stat-label">Courses</div>
        </div>
    `;
}

// ===============================
// Update Total Questions Count
// ===============================
function updateTotalQuestionsCount() {
    const totalQuestionsSpan = document.getElementById('totalQuestionsCount');
    if (totalQuestionsSpan) {
        totalQuestionsSpan.textContent = `${allQuestions.length} Total Questions`;
    }
}

// ===============================
// Select Course
// ===============================
function selectCourse(element, course) {
    // Deselect all other courses
    document.querySelectorAll('.course-card').forEach(c => {
        c.classList.remove('selected');
        const icon = c.querySelector('.course-check i');
        if (icon) icon.className = 'far fa-circle';
    });
    
    // Deselect random mode if selected
    const randomModeCard = document.getElementById('randomModeCard');
    if (randomModeCard) {
        randomModeCard.classList.remove('selected');
    }
    
    // Select this course
    element.classList.add('selected');
    const icon = element.querySelector('.course-check i');
    if (icon) icon.className = 'fas fa-check-circle';
    
    // Update selected course
    selectedCourse = course;
    
    // Show selected course info
    showSelectedCourseInfo(course);
    
    // Show quantity section
    document.getElementById('quantitySection').style.display = 'block';
    
    // Enable start button
    document.getElementById('startSelectedBtn').disabled = false;
    
    console.log("✅ Selected course:", course);
}

// ===============================
// Show Selected Course Info
// ===============================
function showSelectedCourseInfo(course) {
    const infoDiv = document.getElementById('selectedCourseInfo');
    const nameSpan = document.getElementById('selectedCourseName');
    const totalSpan = document.getElementById('selectedCourseTotal');
    
    if (!infoDiv || !nameSpan || !totalSpan) return;
    
    const totalQuestions = allQuestions.filter(q => q.course === course).length;
    
    nameSpan.textContent = course;
    totalSpan.textContent = totalQuestions;
    
    infoDiv.style.display = 'flex';
    
    // Update quantity options max based on available questions
    updateQuantityOptionsMax(totalQuestions);
}

// ===============================
// Update Quantity Options Max
// ===============================
function updateQuantityOptionsMax(maxQuestions) {
    const quantityOptions = document.querySelectorAll('.quantity-option');
    
    quantityOptions.forEach(option => {
        const qty = parseInt(option.dataset.quantity);
        if (qty > maxQuestions) {
            option.style.opacity = '0.5';
            option.style.cursor = 'not-allowed';
            option.classList.remove('selected');
            option.title = `Only ${maxQuestions} questions available`;
        } else {
            option.style.opacity = '1';
            option.style.cursor = 'pointer';
            option.title = '';
        }
    });
    
    // If current selected quantity is greater than max, reset to max
    if (selectedQuantity > maxQuestions) {
        // Find the largest available quantity that's <= maxQuestions
        const availableOptions = Array.from(quantityOptions)
            .map(opt => parseInt(opt.dataset.quantity))
            .filter(qty => qty <= maxQuestions);
        
        if (availableOptions.length > 0) {
            const availableQty = Math.max(...availableOptions);
            selectedQuantity = availableQty;
            
            // Update UI to select this quantity
            document.querySelectorAll('.quantity-option').forEach(opt => {
                if (parseInt(opt.dataset.quantity) === availableQty) {
                    opt.classList.add('selected');
                } else {
                    opt.classList.remove('selected');
                }
            });
        }
    }
}

// ===============================
// Modal Functions
// ===============================
function showCourseModal() {
    const modal = document.getElementById('courseModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function hideCourseModal() {
    const modal = document.getElementById('courseModal');
    if (modal) {
        modal.style.display = 'none';
    }
    
    // Reset selections
    resetModalSelections();
}

function resetModalSelections() {
    document.querySelectorAll('.course-card').forEach(c => {
        c.classList.remove('selected');
        const icon = c.querySelector('.course-check i');
        if (icon) icon.className = 'far fa-circle';
    });
    
    const randomModeCard = document.getElementById('randomModeCard');
    if (randomModeCard) {
        randomModeCard.classList.remove('selected');
    }
    
    // Hide selected course info
    const selectedCourseInfo = document.getElementById('selectedCourseInfo');
    if (selectedCourseInfo) {
        selectedCourseInfo.style.display = 'none';
    }
    
    // Hide quantity section
    const quantitySection = document.getElementById('quantitySection');
    if (quantitySection) {
        quantitySection.style.display = 'none';
    }
    
    // Reset quantity options opacity
    document.querySelectorAll('.quantity-option').forEach(opt => {
        opt.style.opacity = '1';
        opt.style.cursor = 'pointer';
        opt.title = '';
    });
    
    // Reset quantity selection to default
    document.querySelectorAll('.quantity-option').forEach(q => {
        q.classList.remove('selected');
        if (q.dataset.quantity == 20) {
            q.classList.add('selected');
        }
    });
    selectedQuantity = 20;
    
    const startBtn = document.getElementById('startSelectedBtn');
    if (startBtn) {
        startBtn.disabled = true;
    }
    
    selectedCourse = null;
}

// ===============================
// Update Home Stats
// ===============================
function updateHomeStats() {
    const statsDiv = document.getElementById('homeStats');
    if (!statsDiv) return;
    
    const totalQuestions = allQuestions.length;
    const totalCourses = availableCourses.length;
    
    statsDiv.innerHTML = `
        <div class="home-stats-grid">
            <div class="stat-item">
                <i class="fas fa-database"></i>
                <span>${totalQuestions} Questions</span>
            </div>
            <div class="stat-item">
                <i class="fas fa-book"></i>
                <span>${totalCourses} Courses</span>
            </div>
            <div class="stat-item">
                <i class="fas fa-clock"></i>
                <span>2 Hours</span>
            </div>
        </div>
    `;
}

// ===============================
// Setup Event Listeners
// ===============================
function setupEventListeners() {
    // Start button - show modal
    const startBtn = document.getElementById('startBtn');
    if (startBtn) {
        startBtn.addEventListener('click', showCourseModal);
    }
    
    // Random mode selection
    const randomModeCard = document.getElementById('randomModeCard');
    if (randomModeCard) {
        randomModeCard.addEventListener('click', function() {
            selectRandomMode(this);
        });
    }
    
    // Start selected exam
    const startSelectedBtn = document.getElementById('startSelectedBtn');
    if (startSelectedBtn) {
        startSelectedBtn.addEventListener('click', startSelectedExam);
    }
    
    // Cancel modal
    const cancelModalBtn = document.getElementById('cancelModalBtn');
    if (cancelModalBtn) {
        cancelModalBtn.addEventListener('click', hideCourseModal);
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('courseModal');
        if (event.target === modal) {
            hideCourseModal();
        }
    });
    
    // Navigation buttons
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.addEventListener('click', nextQuestion);
    }
    
    const prevBtn = document.getElementById('prevBtn');
    if (prevBtn) {
        prevBtn.addEventListener('click', prevQuestion);
    }
    
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', submitExam);
    }
    
    const reviewBtn = document.getElementById('reviewBtn');
    if (reviewBtn) {
        reviewBtn.addEventListener('click', function() {
            loadReview();
            showPage('review');
        });
    }
}

// ===============================
// Select Random Mode
// ===============================
function selectRandomMode(element) {
    // Deselect all courses
    document.querySelectorAll('.course-card').forEach(c => {
        c.classList.remove('selected');
        const icon = c.querySelector('.course-check i');
        if (icon) icon.className = 'far fa-circle';
    });
    
    // Hide selected course info
    const selectedCourseInfo = document.getElementById('selectedCourseInfo');
    if (selectedCourseInfo) {
        selectedCourseInfo.style.display = 'none';
    }
    
    // Hide quantity section
    const quantitySection = document.getElementById('quantitySection');
    if (quantitySection) {
        quantitySection.style.display = 'none';
    }
    
    // Select random mode
    document.querySelectorAll('.mode-card').forEach(m => m.classList.remove('selected'));
    element.classList.add('selected');
    
    // Enable start button
    document.getElementById('startSelectedBtn').disabled = false;
    
    // Clear selected course
    selectedCourse = null;
    
    console.log("🎲 Selected random mode");
}

// ===============================
// Start Selected Exam
// ===============================
function startSelectedExam() {
    if (selectedCourse) {
        // Course-specific mode
        currentExamMode = 'course';
        
        // Get all questions for this course
        const courseQuestions = allQuestions.filter(q => q.course === selectedCourse);
        
        if (courseQuestions.length === 0) {
            alert(`No questions found for ${selectedCourse}. Please try another course.`);
            return;
        }
        
        // Shuffle and select requested quantity
        examQuestions = shuffleArray(courseQuestions);
        
        // Limit to selected quantity (but not more than available)
        const availableCount = examQuestions.length;
        const requestedCount = Math.min(selectedQuantity, availableCount);
        
        if (requestedCount < selectedQuantity) {
            alert(`Note: Only ${availableCount} questions available for ${selectedCourse}. You'll get ${availableCount} questions.`);
        }
        
        examQuestions = examQuestions.slice(0, requestedCount);
        
        // Update exam title
        const examTitle = document.getElementById('examModeTitle');
        if (examTitle) {
            examTitle.innerHTML = `${selectedCourse} <span>${requestedCount} Questions</span>`;
        }
        
        console.log(`📝 Starting ${selectedCourse} exam with ${examQuestions.length} questions`);
    } else {
        // Random mode - 100 questions from all courses
        currentExamMode = 'random';
        
        // Shuffle all questions and take 100
        examQuestions = shuffleArray([...allQuestions]).slice(0, 100);
        
        // Update exam title
        const examTitle = document.getElementById('examModeTitle');
        if (examTitle) {
            examTitle.innerHTML = `Comprehensive Exam <span>100 Questions</span>`;
        }
        
        console.log(`📝 Starting comprehensive exam with ${examQuestions.length} questions`);
    }
    
    // Reset user answers and current question
    userAnswers = {};
    currentQuestion = 0;
    
    // Reset timer to 2 hours
    timeLeft = 60 * 60 * 2;
    
    hideCourseModal();
    showPage('exam');
    loadQuestion();
    startTimer();
}

// ===============================
// Helper Functions
// ===============================
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showPage(id) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    const page = document.getElementById(id);
    if (page) {
        page.classList.add("active");
    }
}

// ===============================
// Load One Question
// ===============================
function loadQuestion() {
    if (!examQuestions || examQuestions.length === 0) {
        console.error("No questions available");
        return;
    }
    
    const q = examQuestions[currentQuestion];
    const box = document.getElementById("questionBox");
    
    if (!box) return;
    
    const progress = document.getElementById("progress");
    if (progress) {
        progress.textContent = `Question ${currentQuestion + 1} of ${examQuestions.length}`;
    }
    
    const questionNum = document.getElementById("questionNum");
    if (questionNum) {
        questionNum.textContent = `${currentQuestion + 1} / ${examQuestions.length}`;
    }
    
    // Build options HTML
    let optionsHtml = '';
    q.options.forEach((opt, i) => {
        const checked = userAnswers[currentQuestion] === i ? 'checked' : '';
        optionsHtml += `
            <div class="option">
                <input type="radio" name="answer" value="${i}" id="opt-${i}" ${checked}>
                <label for="opt-${i}">${opt}</label>
            </div>
        `;
    });
    
    // Show course tag if in random mode
    const courseTag = currentExamMode === 'random' && q.course ? 
        `<small><i class="fas fa-tag"></i> ${q.course}</small>` : '';
    
    box.innerHTML = `
        <p><b>${currentQuestion + 1}. ${q.question}</b></p>
        ${courseTag}
        ${optionsHtml}
    `;
    
    // Save answer when clicked
    document.querySelectorAll('input[name="answer"]').forEach(radio => {
        radio.addEventListener("change", (e) => {
            userAnswers[currentQuestion] = Number(e.target.value);
            console.log(`✅ Answer saved for Q${currentQuestion + 1}: Option ${Number(e.target.value) + 1}`);
        });
    });
    
    updateNavButtons();
}

// ===============================
// Navigation
// ===============================
function nextQuestion() {
    if (currentQuestion < examQuestions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function updateNavButtons() {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    
    if (prevBtn) {
        prevBtn.disabled = currentQuestion === 0;
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentQuestion === examQuestions.length - 1;
    }
}

// ===============================
// Timer
// ===============================
function startTimer() {
    updateTimer();
    
    // Clear any existing timer
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitExam();
        }
    }, 1000);
}

function updateTimer() {
    const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");
    
    const timerBox = document.getElementById("timer");
    if (timerBox) {
        timerBox.textContent = `${hours}:${minutes}:${seconds}`;
        
        // Add warning style when time is running out (last 5 minutes)
        if (timeLeft <= 300) {
            timerBox.classList.add("warning");
        } else {
            timerBox.classList.remove("warning");
        }
    }
}

// ===============================
// Submit Exam
// ===============================
function submitExam() {
    // Stop timer
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    
    // Calculate score
    let score = 0;
    examQuestions.forEach((q, i) => {
        if (userAnswers[i] === q.answer) score++;
    });
    
    const total = examQuestions.length;
    const percentage = Math.round((score / total) * 100);
    
    // Determine performance message
    let performanceText = '';
    let performanceIcon = '';
    
    if (percentage >= 90) {
        performanceText = "Excellent!";
        performanceIcon = '🏆';
    } else if (percentage >= 80) {
        performanceText = "Very Good!";
        performanceIcon = '⭐';
    } else if (percentage >= 70) {
        performanceText = "Good Job!";
        performanceIcon = '👍';
    } else if (percentage >= 60) {
        performanceText = "Fair";
        performanceIcon = '📚';
    } else if (percentage >= 50) {
        performanceText = "Keep Practicing!";
        performanceIcon = '💪';
    } else {
        performanceText = "Need More Study";
        performanceIcon = '📖';
    }
    
    const scoreDisplay = document.getElementById("scoreText");
    if (scoreDisplay) {
        scoreDisplay.innerHTML = `
            <div style="font-size: 24px; margin-bottom: 10px;">
                ${performanceIcon} <strong>${performanceText}</strong>
            </div>
            <div style="font-size: 48px; font-weight: 700; margin: 15px 0; color: #ffd700;">
                ${score} / ${total}
            </div>
            <div style="font-size: 20px; margin-bottom: 10px;">
                Score: ${percentage}%
            </div>
            <div style="font-size: 14px; opacity: 0.9;">
                ${getPerformanceMessage(percentage)}
            </div>
        `;
    }
    
    showPage("result");
}

function getPerformanceMessage(percentage) {
    if (percentage >= 90) return "You've mastered the material! Ready for the exam!";
    if (percentage >= 80) return "Strong performance! Review a few topics to perfect your score.";
    if (percentage >= 70) return "Good foundation! Focus on your weak areas to improve.";
    if (percentage >= 60) return "Fair understanding. More practice will help you improve.";
    if (percentage >= 50) return "You're making progress. Keep studying and try again!";
    return "Don't give up! Review the material and try again.";
}

// ===============================
// Review
// ===============================
function loadReview() {
    const container = document.getElementById("reviewContainer");
    if (!container) return;
    
    container.innerHTML = "";
    
    examQuestions.forEach((q, i) => {
        const user = userAnswers[i];
        const correct = q.answer;
        const isCorrect = user === correct;
        
        const div = document.createElement("div");
        div.className = "question-card";
        
        const statusIcon = isCorrect ? 
            '<i class="fas fa-check-circle" style="color: #22c55e;"></i>' : 
            '<i class="fas fa-times-circle" style="color: #f5576c;"></i>';
        
        const userAnswerText = user !== undefined ? q.options[user] : "Not answered";
        const correctAnswerText = q.options[correct];
        
        // Course tag
        const courseTag = q.course ? 
            `<small><i class="fas fa-tag"></i> ${q.course}</small>` : '';
        
        div.innerHTML = `
            <p>
                ${statusIcon}
                <span style="margin-left: 8px;">${i + 1}. ${q.question}</span>
            </p>
            ${courseTag}
            <p>
                <strong>Your answer:</strong> 
                <span class="${isCorrect ? 'correct' : 'wrong'}">${userAnswerText}</span>
            </p>
            <p>
                <strong style="color: #22c55e;">✓ Correct answer:</strong> 
                <span class="correct">${correctAnswerText}</span>
            </p>
            <i>
                <strong>📚 Explanation:</strong> ${q.explanation}
            </i>
        `;
        
        container.appendChild(div);
    });
}

// ===============================
// Keyboard Navigation
// ===============================
document.addEventListener('keydown', function(e) {
    // Only handle if exam page is active
    if (!document.getElementById('exam').classList.contains('active')) return;
    
    switch(e.key) {
        case 'ArrowLeft':
            // Previous question
            if (!document.getElementById('prevBtn').disabled) {
                prevQuestion();
                e.preventDefault();
            }
            break;
        case 'ArrowRight':
            // Next question
            if (!document.getElementById('nextBtn').disabled) {
                nextQuestion();
                e.preventDefault();
            }
            break;
        case '1':
        case '2':
        case '3':
        case '4':
            // Number keys for options (1-4)
            const optionIndex = parseInt(e.key) - 1;
            const radio = document.getElementById(`opt-${optionIndex}`);
            if (radio) {
                radio.checked = true;
                userAnswers[currentQuestion] = optionIndex;
                // Trigger change event
                const event = new Event('change', { bubbles: true });
                radio.dispatchEvent(event);
                e.preventDefault();
            }
            break;
    }
});

// Debug function to check course names
window.debugCourses = function() {
    console.log("=== DEBUG COURSES ===");
    console.log("allQuestions length:", allQuestions.length);
    
    const courses = new Set();
    allQuestions.forEach(q => {
        if (q.course) courses.add(q.course);
    });
    
    console.log("Unique courses found:", Array.from(courses));
    console.log("====================");
};

// Log initialization
console.log("🚀 Script.js loaded successfully");
console.log("ℹ️ Type 'debugCourses()' in console to check course names");