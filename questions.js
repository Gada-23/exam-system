// ===============================
// MAIN QUESTIONS FILE
// ===============================

// Create a global array for all questions
window.allQuestions = [];

// Function to load scripts sequentially
function loadScript(url, callback) {
    const script = document.createElement('script');
    script.src = url;
    script.onload = callback;
    script.onerror = function() {
        console.error('Failed to load:', url);
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

let loadedCount = 0;

// Load each file
courseFiles.forEach(file => {
    loadScript(file, function() {
        loadedCount++;
        console.log(`Loaded ${file} (${loadedCount}/${courseFiles.length})`);
        
        // After all files are loaded, combine questions
        if (loadedCount === courseFiles.length) {
            combineAllQuestions();
        }
    });
});

// Function to combine all questions
function combineAllQuestions() {
    console.log('Combining all questions...');
    
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
    
    window.allQuestions = allQuestions;
    
    console.log(`✅ Total questions loaded: ${allQuestions.length}`);
    
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
    
    // Dispatch event that questions are ready
    window.dispatchEvent(new Event('questionsLoaded'));
}

// Make allQuestions available globally
Object.defineProperty(window, 'allQuestions', {
    get: function() { return window._allQuestions || []; },
    set: function(value) { window._allQuestions = value; }
});