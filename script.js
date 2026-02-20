// ===============================
// Variables
// ===============================
let examQuestions = [];
let userAnswers = {};
let currentQuestion = 0;
let currentExamMode = 'random'; // 'random', 'course', or 'previous-exam'
let selectedCourse = null;
let selectedPreviousExam = null; // For previous exam selection
let selectedQuantity = 20; // Default quantity
let answerFeedback = {}; // Store feedback for each question (correct/incorrect)

let timeLeft = 60 * 60 * 2; // 2 hours in seconds (7200 seconds)
let timerInterval;

// Available quantity options
const quantityOptions = [10, 20, 30, 40, 50];

// Available courses (will be populated from course question files only)
let availableCourses = [];

// Previous exams data - with 2016 and 2017
const previousExams = [
    {
        year: 2016,
        name: '2016 Exit Exam',
        questionCount: 100,
        color: '#2772a0',
        icon: 'fa-calendar-alt'
    },
    {
        year: 2017,
        name: '2017 Exit Exam',
        questionCount: 100,
        color: '#1a5a80',
        icon: 'fa-calendar-alt'
    }
    // Add more years as they become available
    // { year: 2018, name: '2018 Exit Exam', questionCount: 100, color: '#0f4a60', icon: 'fa-calendar-alt' },
];

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
                <i class="fas fa-circle-notch fa-spin" style="font-size: 30px; color: #2772a0;"></i>
                <p style="margin-top: 10px;">Loading questions...</p>
            </div>
        `;
    }
}

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
}

function initializeApp() {
    // Check if allQuestions exists
    if (typeof window.allQuestions === 'undefined' || window.allQuestions.length === 0) {
        console.error("allQuestions is not defined or empty! Check questions.js file.");
        showError("Error loading questions. Please refresh the page.");
        return;
    }
    
    console.log(`✅ Loaded ${window.allQuestions.length} questions successfully`);
    
    // DEBUG: Show all unique course names from questions
    const uniqueCourses = new Set();
    window.allQuestions.forEach(q => {
        if (q.course) uniqueCourses.add(q.course);
    });
    console.log("🔍 EXACT course names found in questions:", [...uniqueCourses].sort());
    
    // Extract unique courses from course question files only
    extractCoursesFromCourseFiles();
    
    // Populate course grid
    populateCourseGrid();
    
    // Setup previous exam cards
    setupPreviousExams();
    
    // Update home stats
    updateHomeStats();
    
    // Setup quantity options
    setupQuantityOptions();
    
    // Add event listeners
    setupEventListeners();
    
    // Update total questions count in modal
    updateTotalQuestionsCount();
}

// ===============================
// Extract unique courses from course question files only
// ===============================
function extractCoursesFromCourseFiles() {
    const courses = new Set();
    
    // Add courses from each course-specific array with EXACT names matching your question files
    if (window.computerProgrammingQuestions && window.computerProgrammingQuestions.length > 0) {
        // Get the actual course name from the first question
        const actualName = window.computerProgrammingQuestions[0]?.course;
        if (actualName) {
            courses.add(actualName);
            console.log(`📘 Computer Programming actual name: "${actualName}"`);
        } else {
            courses.add('Computer Programming');
        }
    }
    if (window.databaseSystemsQuestions && window.databaseSystemsQuestions.length > 0) {
        const actualName = window.databaseSystemsQuestions[0]?.course;
        if (actualName) {
            courses.add(actualName);
            console.log(`📘 Database Systems actual name: "${actualName}"`);
        } else {
            courses.add('Database Systems');
        }
    }
    if (window.oopQuestions && window.oopQuestions.length > 0) {
        const actualName = window.oopQuestions[0]?.course;
        if (actualName) {
            courses.add(actualName);
            console.log(`📘 Object Oriented Programming actual name: "${actualName}"`);
        } else {
            courses.add('Object Oriented Programming');
        }
    }
    if (window.computerOrganizationQuestions && window.computerOrganizationQuestions.length > 0) {
        const actualName = window.computerOrganizationQuestions[0]?.course;
        if (actualName) {
            courses.add(actualName);
            console.log(`📘 Computer Organization actual name: "${actualName}"`);
        } else {
            courses.add('Computer Organization & Architecture');
        }
    }
    if (window.networkingQuestions && window.networkingQuestions.length > 0) {
        const actualName = window.networkingQuestions[0]?.course;
        if (actualName) {
            courses.add(actualName);
            console.log(`📘 Data Communication & Networking actual name: "${actualName}"`);
        } else {
            courses.add('Data Communication & Networking');
        }
    }
    if (window.dataStructuresQuestions && window.dataStructuresQuestions.length > 0) {
        const actualName = window.dataStructuresQuestions[0]?.course;
        if (actualName) {
            courses.add(actualName);
            console.log(`📘 Data Structures & Algorithms actual name: "${actualName}"`);
        } else {
            courses.add('Data Structures & Algorithms');
        }
    }
    if (window.webProgrammingQuestions && window.webProgrammingQuestions.length > 0) {
        const actualName = window.webProgrammingQuestions[0]?.course;
        if (actualName) {
            courses.add(actualName);
            console.log(`📘 Web Programming actual name: "${actualName}"`);
        } else {
            courses.add('Web Programming');
        }
    }
    if (window.operatingSystemQuestions && window.operatingSystemQuestions.length > 0) {
        const actualName = window.operatingSystemQuestions[0]?.course;
        if (actualName) {
            courses.add(actualName);
            console.log(`📘 Operating System actual name: "${actualName}"`);
        } else {
            courses.add('Operating System');
        }
    }
    if (window.softwareEngineeringQuestions && window.softwareEngineeringQuestions.length > 0) {
        const actualName = window.softwareEngineeringQuestions[0]?.course;
        if (actualName) {
            courses.add(actualName);
            console.log(`📘 Software Engineering actual name: "${actualName}"`);
        } else {
            courses.add('Software Engineering');
        }
    }
    if (window.algorithmQuestions && window.algorithmQuestions.length > 0) {
        const actualName = window.algorithmQuestions[0]?.course;
        if (actualName) {
            courses.add(actualName);
            console.log(`📘 Design & Analysis of Algorithms actual name: "${actualName}"`);
        } else {
            courses.add('Design & Analysis of Algorithms');
        }
    }
    if (window.aiQuestions && window.aiQuestions.length > 0) {
        const actualName = window.aiQuestions[0]?.course;
        if (actualName) {
            courses.add(actualName);
            console.log(`📘 Artificial Intelligence actual name: "${actualName}"`);
        } else {
            courses.add('Artificial Intelligence');
        }
    }
    if (window.computerSecurityQuestions && window.computerSecurityQuestions.length > 0) {
        const actualName = window.computerSecurityQuestions[0]?.course;
        if (actualName) {
            courses.add(actualName);
            console.log(`📘 Computer Security actual name: "${actualName}"`);
        } else {
            courses.add('Computer Security');
        }
    }
    if (window.networkAdminQuestions && window.networkAdminQuestions.length > 0) {
        const actualName = window.networkAdminQuestions[0]?.course;
        if (actualName) {
            courses.add(actualName);
            console.log(`📘 Network & System Administration actual name: "${actualName}"`);
        } else {
            courses.add('Network and System Administration');
        }
    }
    if (window.automataQuestions && window.automataQuestions.length > 0) {
        const actualName = window.automataQuestions[0]?.course;
        if (actualName) {
            courses.add(actualName);
            console.log(`📘 Automata & Complexity Theory actual name: "${actualName}"`);
        } else {
            courses.add('Automata & Complexity Theory');
        }
    }
    if (window.compilerDesignQuestions && window.compilerDesignQuestions.length > 0) {
        const actualName = window.compilerDesignQuestions[0]?.course;
        if (actualName) {
            courses.add(actualName);
            console.log(`📘 Compiler Design actual name: "${actualName}"`);
        } else {
            courses.add('Compiler Design');
        }
    }
    
    availableCourses = Array.from(courses).sort();
    console.log("📚 Available courses (after mapping):", availableCourses);
}

// ===============================
// Setup Previous Exams - with 2016 and 2017
// ===============================
function setupPreviousExams() {
    const exam2016Card = document.getElementById('exam2016Card');
    const exam2017Card = document.getElementById('exam2017Card');
    
    if (exam2016Card) {
        exam2016Card.addEventListener('click', function() {
            selectPreviousExam(this, 2016);
        });
    }
    
    if (exam2017Card) {
        exam2017Card.addEventListener('click', function() {
            selectPreviousExam(this, 2017);
        });
    }
    
    // Add more exam cards as they become available
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
                <p>No courses found. Please check the questions file.</p>
            </div>
        `;
        return;
    }
    
    courseGrid.innerHTML = '';
    
    availableCourses.forEach(course => {
        // Count questions for this course from all questions
        const count = window.allQuestions.filter(q => q.course === course).length;
        
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
    
    const totalQuestions = window.allQuestions.length;
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
        totalQuestionsSpan.textContent = `${window.allQuestions.length} Total Questions`;
    }
}

// ===============================
// Update Home Stats
// ===============================
function updateHomeStats() {
    const statsDiv = document.getElementById('homeStats');
    if (!statsDiv) return;
    
    const totalQuestions = window.allQuestions.length;
    const totalCourses = availableCourses.length;
    
    // Count unique years from previousExams array
    const examYears = previousExams.length;
    
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
                <i class="fas fa-history"></i>
                <span>${examYears} Previous Exams</span>
            </div>
            <div class="stat-item">
                <i class="fas fa-clock"></i>
                <span>2 Hours</span>
            </div>
        </div>
    `;
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
    
    // Deselect previous exams if selected
    document.querySelectorAll('.exam-card').forEach(c => {
        c.classList.remove('selected');
    });
    
    // Select this course
    element.classList.add('selected');
    const icon = element.querySelector('.course-check i');
    if (icon) icon.className = 'fas fa-check-circle';
    
    // Update selected course and clear previous exam
    selectedCourse = course;
    selectedPreviousExam = null;
    
    // Show selected course info
    showSelectedCourseInfo(course);
    
    // Show quantity section
    document.getElementById('quantitySection').style.display = 'block';
    
    // Enable start button
    document.getElementById('startSelectedBtn').disabled = false;
    
    console.log("✅ Selected course:", course);
}

// ===============================
// Select Previous Exam
// ===============================
function selectPreviousExam(element, year) {
    // Deselect all previous exams
    document.querySelectorAll('.exam-card').forEach(c => {
        c.classList.remove('selected');
    });
    
    // Deselect all courses
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
    
    // Select this exam
    element.classList.add('selected');
    
    // Hide selected course info
    const selectedCourseInfo = document.getElementById('selectedCourseInfo');
    if (selectedCourseInfo) {
        selectedCourseInfo.style.display = 'none';
    }
    
    // Hide quantity section (previous exams have fixed number of questions)
    const quantitySection = document.getElementById('quantitySection');
    if (quantitySection) {
        quantitySection.style.display = 'none';
    }
    
    // Update selected previous exam and clear course
    selectedPreviousExam = year;
    selectedCourse = null;
    
    // Enable start button
    document.getElementById('startSelectedBtn').disabled = false;
    
    console.log("✅ Selected previous exam:", year);
}

// ===============================
// Show Selected Course Info
// ===============================
function showSelectedCourseInfo(course) {
    const infoDiv = document.getElementById('selectedCourseInfo');
    const nameSpan = document.getElementById('selectedCourseName');
    const totalSpan = document.getElementById('selectedCourseTotal');
    
    if (!infoDiv || !nameSpan || !totalSpan) return;
    
    const totalQuestions = window.allQuestions.filter(q => q.course === course).length;
    
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
    // Reset courses
    document.querySelectorAll('.course-card').forEach(c => {
        c.classList.remove('selected');
        const icon = c.querySelector('.course-check i');
        if (icon) icon.className = 'far fa-circle';
    });
    
    // Reset previous exams
    document.querySelectorAll('.exam-card').forEach(c => {
        c.classList.remove('selected');
    });
    
    // Reset random mode
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
    selectedPreviousExam = null;
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
    
    const checkAnswerBtn = document.getElementById('checkAnswerBtn');
    if (checkAnswerBtn) {
        checkAnswerBtn.addEventListener('click', checkAnswer);
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
    
    // Deselect all previous exams
    document.querySelectorAll('.exam-card').forEach(c => {
        c.classList.remove('selected');
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
    
    // Clear selected course and previous exam
    selectedCourse = null;
    selectedPreviousExam = null;
    
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
        const courseQuestions = window.allQuestions.filter(q => q.course === selectedCourse);
        
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
    } 
    else if (selectedPreviousExam) {
        // Previous exam mode
        currentExamMode = 'previous-exam';
        
        // Get questions for the selected year
        let yearQuestions = [];
        
        if (selectedPreviousExam === 2016 && window.exitExam2016) {
            yearQuestions = window.exitExam2016;
        } 
        else if (selectedPreviousExam === 2017 && window.exitExam2017) {
            yearQuestions = window.exitExam2017;
        }
        else {
            // Fallback: filter all questions by year if they have a year property
            yearQuestions = window.allQuestions.filter(q => q.year === selectedPreviousExam);
        }
        
        if (yearQuestions.length === 0) {
            alert(`No questions found for the ${selectedPreviousExam} Exit Exam.`);
            return;
        }
        
        // Shuffle but keep all questions
        examQuestions = shuffleArray(yearQuestions);
        
        // Update exam title
        const examTitle = document.getElementById('examModeTitle');
        if (examTitle) {
            examTitle.innerHTML = `${selectedPreviousExam} Exit Exam <span>${examQuestions.length} Questions</span>`;
        }
        
        console.log(`📝 Starting ${selectedPreviousExam} Exit Exam with ${examQuestions.length} questions`);
    } 
    else {
        // Random mode - 100 questions from all courses
        currentExamMode = 'random';
        
        // Shuffle all questions and take 100
        examQuestions = shuffleArray([...window.allQuestions]).slice(0, 100);
        
        // Update exam title
        const examTitle = document.getElementById('examModeTitle');
        if (examTitle) {
            examTitle.innerHTML = `Comprehensive Exam <span>100 Questions</span>`;
        }
        
        console.log(`📝 Starting comprehensive exam with ${examQuestions.length} questions`);
    }
    
    // Reset user answers and current question
    userAnswers = {};
    answerFeedback = {};
    currentQuestion = 0;
    
    // Reset timer to 2 hours
    timeLeft = 60 * 60 * 2;
    
    hideCourseModal();
    showPage('exam');
    
    // Update total question count display
    document.getElementById('totalQCount').textContent = examQuestions.length;
    
    loadQuestion();
    buildQuestionNavigator();
    startTimer();
}

// ===============================
// Build Question Navigator
// ===============================
function buildQuestionNavigator() {
    const navigator = document.getElementById('questionNavigator');
    if (!navigator) return;
    
    navigator.innerHTML = '';
    
    for (let i = 0; i < examQuestions.length; i++) {
        const questionNum = i + 1;
        const navItem = document.createElement('div');
        navItem.className = 'nav-question';
        
        // Set appropriate class based on status
        if (i === currentQuestion) {
            navItem.classList.add('current');
        }
        
        if (userAnswers[i] !== undefined) {
            navItem.classList.add('answered');
        }
        
        navItem.textContent = questionNum;
        navItem.dataset.index = i;
        
        navItem.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            if (!isNaN(index) && index !== currentQuestion) {
                currentQuestion = index;
                loadQuestion();
                updateNavigatorHighlight();
            }
        });
        
        navigator.appendChild(navItem);
    }
}

// ===============================
// Update Navigator Highlight
// ===============================
function updateNavigatorHighlight() {
    const navItems = document.querySelectorAll('.nav-question');
    
    navItems.forEach((item, index) => {
        item.classList.remove('current');
        
        if (index === currentQuestion) {
            item.classList.add('current');
        }
        
        if (userAnswers[index] !== undefined) {
            item.classList.add('answered');
        } else {
            item.classList.remove('answered');
        }
    });
}

// ===============================
// Check Answer
// ===============================
function checkAnswer() {
    const selectedAnswer = userAnswers[currentQuestion];
    
    if (selectedAnswer === undefined) {
        alert('Please select an answer first!');
        return;
    }
    
    const question = examQuestions[currentQuestion];
    const isCorrect = (selectedAnswer === question.answer);
    
    // Store feedback
    answerFeedback[currentQuestion] = isCorrect;
    
    // Show feedback
    showAnswerFeedback(isCorrect, question);
    
    // Update navigator
    updateNavigatorHighlight();
}

// ===============================
// Show Answer Feedback
// ===============================
function showAnswerFeedback(isCorrect, question) {
    // Remove any existing feedback
    const existingFeedback = document.querySelector('.answer-feedback');
    if (existingFeedback) {
        existingFeedback.remove();
    }
    
    const questionBox = document.getElementById('questionBox');
    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = `answer-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    
    if (isCorrect) {
        feedbackDiv.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <div>
                <strong>Correct!</strong> Well done!
            </div>
        `;
    } else {
        feedbackDiv.innerHTML = `
            <i class="fas fa-times-circle"></i>
            <div>
                <strong>Incorrect.</strong> The correct answer is: ${question.options[question.answer]}
            </div>
        `;
    }
    
    questionBox.appendChild(feedbackDiv);
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
    
    // Update question number
    document.getElementById('currentQNum').textContent = currentQuestion + 1;
    
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
    
    // Show course tag if in random mode or previous exam mode
    let courseTag = '';
    if (currentExamMode === 'random' && q.course) {
        courseTag = `<small><i class="fas fa-tag"></i> ${q.course}</small>`;
    } else if (currentExamMode === 'previous-exam') {
        // For previous exams, show a special badge
        courseTag = `<small><i class="fas fa-history"></i> ${selectedPreviousExam} Exit Exam</small>`;
    }
    
    box.innerHTML = `
        <p><b>${currentQuestion + 1}. ${q.question}</b></p>
        ${courseTag}
        ${optionsHtml}
    `;
    
    // Remove any existing feedback
    const existingFeedback = document.querySelector('.answer-feedback');
    if (existingFeedback) {
        existingFeedback.remove();
    }
    
    // Save answer when clicked
    document.querySelectorAll('input[name="answer"]').forEach(radio => {
        radio.addEventListener("change", (e) => {
            userAnswers[currentQuestion] = Number(e.target.value);
            console.log(`✅ Answer saved for Q${currentQuestion + 1}: Option ${Number(e.target.value) + 1}`);
            
            // Enable check answer button
            document.getElementById('checkAnswerBtn').disabled = false;
            
            // Update navigator
            updateNavigatorHighlight();
        });
    });
    
    // Enable/disable check answer button based on whether answer exists
    document.getElementById('checkAnswerBtn').disabled = (userAnswers[currentQuestion] === undefined);
    
    updateNavButtons();
    updateNavigatorHighlight();
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
        
        // Course tag or previous exam tag
        let courseTag = '';
        if (q.course) {
            courseTag = `<small><i class="fas fa-tag"></i> ${q.course}</small>`;
        } else if (selectedPreviousExam) {
            courseTag = `<small><i class="fas fa-history"></i> ${selectedPreviousExam} Exit Exam</small>`;
        }
        
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
        case 'Enter':
            // Check answer
            if (!document.getElementById('checkAnswerBtn').disabled) {
                checkAnswer();
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

// Log initialization
console.log("🚀 Script.js loaded successfully");