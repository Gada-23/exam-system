// ===============================
// MAIN QUESTIONS FILE
// Imports all course question files from the courseQuestions folder
// and previous exam files from the previous-exam folder
// ===============================

// Global array for all questions
window.allQuestions = [];

// Track loading status
window.questionsLoaded = false;
window.questionsLoadCallbacks = [];

// Function to call when questions are loaded
function onQuestionsLoaded(callback) {
    if (window.questionsLoaded) {
        callback(window.allQuestions);
    } else {
        window.questionsLoadCallbacks.push(callback);
    }
}

// Function to load scripts sequentially
function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src + '?t=' + Date.now(); // Cache busting
    script.onload = function() {
        console.log(`✅ Successfully loaded: ${src}`);
        callback();
    };
    script.onerror = function() {
        console.warn(`❌ Failed to load: ${src} - Check if file exists at this path`);
        callback(); // Continue even if one fails
    };
    document.head.appendChild(script);
}

// Load all course files
console.log('Loading course files...');

// List of all course files
const courseFiles = [
    'courseQuestions/computer-programming.js',
    'courseQuestions/database-systems.js',
    'courseQuestions/object-oriented-programming.js',
    'courseQuestions/computer-organization-architecture.js',
    'courseQuestions/data-communication-networking.js',
    'courseQuestions/data-structures-algorithms.js',
    'courseQuestions/web-programming.js',
    'courseQuestions/operating-system.js',
    'courseQuestions/software-engineering.js',
    'courseQuestions/design-analysis-algorithms.js',
    'courseQuestions/artificial-intelligence.js',
    'courseQuestions/computer-security.js',
    'courseQuestions/network-system-administration.js',
    'courseQuestions/automata-complexity-theory.js',
    'courseQuestions/compiler-design.js'
];

// List of previous exam files - UPDATED with 2017
const previousExamFiles = [
    'previous-exam/2016/exit-exam-2016.js',
    'previous-exam/2017/exit-exam-2017.js'
    // Add more years here as they become available:
    // 'previous-exam/2018/exit-exam-2018.js',
    // etc.
];

let loadedCount = 0;
const totalFiles = courseFiles.length + previousExamFiles.length;

console.log(`📊 Total files to load: ${totalFiles}`);

// Load all course files
courseFiles.forEach(file => {
    loadScript(file, function() {
        loadedCount++;
        console.log(`📈 Progress: ${loadedCount}/${totalFiles} - ${file}`);
        
        // After all files are loaded, combine questions
        if (loadedCount === totalFiles) {
            console.log('🎯 All files loaded, combining questions...');
            combineAllQuestions();
        }
    });
});

// Load all previous exam files
previousExamFiles.forEach(file => {
    loadScript(file, function() {
        loadedCount++;
        console.log(`📈 Progress: ${loadedCount}/${totalFiles} - ${file}`);
        
        // After all files are loaded, combine questions
        if (loadedCount === totalFiles) {
            console.log('🎯 All files loaded, combining questions...');
            combineAllQuestions();
        }
    });
});

// Function to combine all questions
function combineAllQuestions() {
    console.log('🔍 Checking available question arrays:');
    console.log(`   computerProgrammingQuestions: ${window.computerProgrammingQuestions ? window.computerProgrammingQuestions.length : 'undefined'}`);
    console.log(`   databaseSystemsQuestions: ${window.databaseSystemsQuestions ? window.databaseSystemsQuestions.length : 'undefined'}`);
    console.log(`   oopQuestions: ${window.oopQuestions ? window.oopQuestions.length : 'undefined'}`);
    console.log(`   computerOrganizationQuestions: ${window.computerOrganizationQuestions ? window.computerOrganizationQuestions.length : 'undefined'}`);
    console.log(`   networkingQuestions: ${window.networkingQuestions ? window.networkingQuestions.length : 'undefined'}`);
    console.log(`   dataStructuresQuestions: ${window.dataStructuresQuestions ? window.dataStructuresQuestions.length : 'undefined'}`);
    console.log(`   webProgrammingQuestions: ${window.webProgrammingQuestions ? window.webProgrammingQuestions.length : 'undefined'}`);
    console.log(`   operatingSystemQuestions: ${window.operatingSystemQuestions ? window.operatingSystemQuestions.length : 'undefined'}`);
    console.log(`   softwareEngineeringQuestions: ${window.softwareEngineeringQuestions ? window.softwareEngineeringQuestions.length : 'undefined'}`);
    console.log(`   algorithmQuestions: ${window.algorithmQuestions ? window.algorithmQuestions.length : 'undefined'}`);
    console.log(`   aiQuestions: ${window.aiQuestions ? window.aiQuestions.length : 'undefined'}`);
    console.log(`   computerSecurityQuestions: ${window.computerSecurityQuestions ? window.computerSecurityQuestions.length : 'undefined'}`);
    console.log(`   networkAdminQuestions: ${window.networkAdminQuestions ? window.networkAdminQuestions.length : 'undefined'}`);
    console.log(`   automataQuestions: ${window.automataQuestions ? window.automataQuestions.length : 'undefined'}`);
    console.log(`   compilerDesignQuestions: ${window.compilerDesignQuestions ? window.compilerDesignQuestions.length : 'undefined'}`);
    
    // Start with course questions
    const allQuestions = [
        ...(window.computerProgrammingQuestions || []),
        ...(window.databaseSystemsQuestions || []),
        ...(window.oopQuestions || []),
        ...(window.computerOrganizationQuestions || []),
        ...(window.networkingQuestions || []),
        ...(window.dataStructuresQuestions || []),
        ...(window.webProgrammingQuestions || []),
        ...(window.operatingSystemQuestions || []),
        ...(window.softwareEngineeringQuestions || []),
        ...(window.algorithmQuestions || []),
        ...(window.aiQuestions || []),
        ...(window.computerSecurityQuestions || []),
        ...(window.networkAdminQuestions || []),
        ...(window.automataQuestions || []),
        ...(window.compilerDesignQuestions || [])
    ];
    
    console.log(`📦 After combining course questions: ${allQuestions.length} questions`);
    
    // Add previous exam questions
    if (window.exitExam2016 && window.exitExam2016.length > 0) {
        allQuestions.push(...window.exitExam2016);
        console.log(`✅ Added ${window.exitExam2016.length} questions from 2016 Exit Exam`);
    }
    
    // ADDED 2017 EXAM QUESTIONS
    if (window.exitExam2017 && window.exitExam2017.length > 0) {
        allQuestions.push(...window.exitExam2017);
        console.log(`✅ Added ${window.exitExam2017.length} questions from 2017 Exit Exam`);
    }
    
    // Add more years as they become available
    // if (window.exitExam2018 && window.exitExam2018.length > 0) {
    //     allQuestions.push(...window.exitExam2018);
    //     console.log(`✅ Added ${window.exitExam2018.length} questions from 2018 Exit Exam`);
    // }
    
    window.allQuestions = allQuestions;
    window.questionsLoaded = true;
    
    console.log(`✅ TOTAL questions loaded: ${allQuestions.length}`);
    
    // Log questions per course
    console.log("📚 Questions per course:");
    console.log(`   Computer Programming: ${window.computerProgrammingQuestions?.length || 0}`);
    console.log(`   Database Systems: ${window.databaseSystemsQuestions?.length || 0}`);
    console.log(`   Object Oriented Programming: ${window.oopQuestions?.length || 0}`);
    console.log(`   Computer Organization: ${window.computerOrganizationQuestions?.length || 0}`);
    console.log(`   Data Communication & Networking: ${window.networkingQuestions?.length || 0}`);
    console.log(`   Data Structures & Algorithms: ${window.dataStructuresQuestions?.length || 0}`);
    console.log(`   Web Programming: ${window.webProgrammingQuestions?.length || 0}`);
    console.log(`   Operating System: ${window.operatingSystemQuestions?.length || 0}`);
    console.log(`   Software Engineering: ${window.softwareEngineeringQuestions?.length || 0}`);
    console.log(`   Design & Analysis of Algorithms: ${window.algorithmQuestions?.length || 0}`);
    console.log(`   Artificial Intelligence: ${window.aiQuestions?.length || 0}`);
    console.log(`   Computer Security: ${window.computerSecurityQuestions?.length || 0}`);
    console.log(`   Network & System Administration: ${window.networkAdminQuestions?.length || 0}`);
    console.log(`   Automata & Complexity Theory: ${window.automataQuestions?.length || 0}`);
    console.log(`   Compiler Design: ${window.compilerDesignQuestions?.length || 0}`);
    console.log(`   2016 Exit Exam: ${window.exitExam2016?.length || 0}`);
    console.log(`   2017 Exit Exam: ${window.exitExam2017?.length || 0}`);
    
    // Notify all waiting callbacks
    window.questionsLoadCallbacks.forEach(callback => callback(window.allQuestions));
    window.questionsLoadCallbacks = [];
    
    // Dispatch event that questions are ready
    window.dispatchEvent(new Event('questionsLoaded'));
}

// Make allQuestions available globally with a getter that waits for loading
Object.defineProperty(window, 'allQuestions', {
    get: function() { 
        return window._allQuestions || []; 
    },
    set: function(value) { 
        window._allQuestions = value; 
    }
});

// Store the original array internally
window._allQuestions = [];