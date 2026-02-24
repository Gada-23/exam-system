// ===============================
// FOCUS AREA OF EXIT EXAM - LOADER
// Dynamically loads all course focus area files
// ===============================

// Initialize global objects
window.focusArea = window.focusArea || {};
window.loadedChapters = window.loadedChapters || [];

console.log("📚 Loader.js started - Loading focus areas...");

// Function to load scripts
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src + '?t=' + Date.now(); // Cache busting
        script.onload = () => {
            console.log(`✅ Loaded: ${src}`);
            resolve(true);
        };
        script.onerror = (e) => {
            console.warn(`⚠️ Failed to load: ${src} - File may not exist yet`);
            reject(false);
        };
        document.head.appendChild(script);
    });
}

// Course configuration - defines all courses and their chapters
const COURSE_CONFIG = {
    artificialIntelligence: {
        key: 'artificialIntelligence',
        folder: 'artificial-intelligence',
        title: 'Artificial Intelligence',
        icon: 'fa-robot',
        description: 'Complete focus notes for AI exit exam preparation covering intelligent agents, search algorithms, knowledge representation, and machine learning.',
        totalQuestions: 6,
        chapterPrefix: 'focusAreaAIChapter',
        maxChapters: 10
    },
    computerSecurity: {
        key: 'computerSecurity',
        folder: 'computer-security',
        title: 'Computer Security',
        icon: 'fa-shield-alt',
        description: 'Comprehensive security focus notes covering cryptography, network security, access control, and security policies.',
        totalQuestions: 6,
        chapterPrefix: 'focusAreaComputerSecurityChapter',
        maxChapters: 10
    },
    operatingSystem: {
        key: 'operatingSystem',
        folder: 'operating-system',
        title: 'Operating System',
        icon: 'fa-windows',
        description: 'Complete OS focus notes covering process management, memory management, file systems, and scheduling algorithms.',
        totalQuestions: 6,
        chapterPrefix: 'focusAreaOSChapter',
        maxChapters: 10
    },
    dataCommunicationNetworking: {
        key: 'dataCommunicationNetworking',
        folder: 'data-communication-networking',
        title: 'Data Communication & Networking',
        icon: 'fa-network-wired',
        description: 'Networking focus notes covering OSI model, TCP/IP, protocols, routing, and network security.',
        totalQuestions: 6,
        chapterPrefix: 'focusAreaNetworkingChapter',
        maxChapters: 10
    },
    compilerDesign: {
        key: 'compilerDesign',
        folder: 'compiler-design',
        title: 'Compiler Design',
        icon: 'fa-file-code',
        description: 'Compiler focus notes covering lexical analysis, parsing, semantic analysis, and code generation.',
        totalQuestions: 6,
        chapterPrefix: 'focusAreaCompilerChapter',
        maxChapters: 10
    },
    automataComplexityTheory: {
        key: 'automataComplexityTheory',
        folder: 'automata-complexity-theory',
        title: 'Automata & Complexity Theory',
        icon: 'fa-infinity',
        description: 'Theory focus notes covering finite automata, regular languages, context-free grammars, and Turing machines.',
        totalQuestions: 6,
        chapterPrefix: 'focusAreaAutomataChapter',
        maxChapters: 10
    },
    computerOrganizationArchitecture: {
        key: 'computerOrganizationArchitecture',
        folder: 'computer-organization-architecture',
        title: 'Computer Organization & Architecture',
        icon: 'fa-microchip',
        description: 'Computer architecture focus notes covering CPU design, memory hierarchy, pipelining, and I/O systems.',
        totalQuestions: 6,
        chapterPrefix: 'focusAreaCOAChapter',
        maxChapters: 10
    },
    networkSystemAdministration: {
        key: 'networkSystemAdministration',
        folder: 'network-system-administration',
        title: 'Network & System Administration',
        icon: 'fa-server',
        description: 'System administration focus notes covering user management, network services, security policies, and scripting.',
        totalQuestions: 6,
        chapterPrefix: 'focusAreaNetworkAdminChapter',
        maxChapters: 10
    },
    fundamentalDatabaseSystems: {
        key: 'fundamentalDatabaseSystems',
        folder: 'fundamental-database-systems',
        title: 'Fundamental Database Systems',
        icon: 'fa-database',
        description: 'Core database concepts including design principles, normalization, ER modeling, and real-world database applications.',
        totalQuestions: 6,
        chapterPrefix: 'focusAreaFundamentalDBChapter',
        maxChapters: 10
    },
    advancedDatabaseSystems: {
        key: 'advancedDatabaseSystems',
        folder: 'advanced-database-systems',
        title: 'Advanced Database Systems',
        icon: 'fa-project-diagram',
        description: 'Advanced database topics including object-oriented databases, recovery methods, distributed databases, and query optimization.',
        totalQuestions: 6,
        chapterPrefix: 'focusAreaAdvancedDBChapter',
        maxChapters: 10
    },
    databaseSystems: {
        key: 'databaseSystems',
        folder: 'database-systems',
        title: 'Database Systems',
        icon: 'fa-database',
        description: 'Database focus notes covering SQL, normalization, transactions, and database design.',
        totalQuestions: 6,
        chapterPrefix: 'focusAreaDBChapter',
        maxChapters: 10
    },
    dataStructuresAlgorithms: {
        key: 'dataStructuresAlgorithms',
        folder: 'data-structures-algorithms',
        title: 'Data Structures & Algorithms',
        icon: 'fa-sitemap',
        description: 'Data structures focus notes covering arrays, linked lists, trees, graphs, and algorithm analysis.',
        totalQuestions: 6,
        chapterPrefix: 'focusAreaDSAChapter',
        maxChapters: 10
    },
    softwareEngineering: {
        key: 'softwareEngineering',
        folder: 'software-engineering',
        title: 'Software Engineering',
        icon: 'fa-cog',
        description: 'Software engineering focus notes covering SDLC, agile methodologies, testing, and design patterns.',
        totalQuestions: 6,
        chapterPrefix: 'focusAreaSEChapter',
        maxChapters: 10
    },
    webProgramming: {
        key: 'webProgramming',
        folder: 'web-programming',
        title: 'Web Programming',
        icon: 'fa-globe',
        description: 'Web development focus notes covering HTML, CSS, JavaScript, and modern frameworks.',
        totalQuestions: 6,
        chapterPrefix: 'focusAreaWebChapter',
        maxChapters: 10
    },
    designAnalysisAlgorithms: {
        key: 'designAnalysisAlgorithms',
        folder: 'design-analysis-algorithms',
        title: 'Design & Analysis of Algorithms',
        icon: 'fa-chart-line',
        description: 'Algorithm design focus notes covering divide and conquer, dynamic programming, greedy algorithms, and complexity.',
        totalQuestions: 6,
        chapterPrefix: 'focusAreaAlgoChapter',
        maxChapters: 10
    }
};

// Course-specific expected chapter counts
const EXPECTED_CHAPTER_COUNTS = {
    'artificialIntelligence': 4,
    'computerSecurity': 4,
    'operatingSystem': 5,
    'dataCommunicationNetworking': 4,
    'compilerDesign': 7,
    'automataComplexityTheory': 5,
    'computerOrganizationArchitecture': 4,
    'networkSystemAdministration': 4,
    'fundamentalDatabaseSystems': 3,
    'advancedDatabaseSystems': 4,
    'databaseSystems': 4,
    'dataStructuresAlgorithms': 4,
    'softwareEngineering': 4,
    'webProgramming': 4,
    'designAnalysisAlgorithms': 4
};

// Chapter icon mapping based on chapter number
function getChapterIcon(chapterNum) {
    const icons = [
        'fa-info-circle',     // Chapter 1
        'fa-cogs',            // Chapter 2
        'fa-shield-alt',       // Chapter 3
        'fa-code',            // Chapter 4
        'fa-database',        // Chapter 5
        'fa-project-diagram', // Chapter 6
        'fa-cog',             // Chapter 7
        'fa-globe',           // Chapter 8
        'fa-brain',           // Chapter 9
        'fa-microchip'        // Chapter 10
    ];
    return icons[(chapterNum - 1) % icons.length];
}

function getChapterShortTitle(chapterNum, customTitle) {
    // If the chapter has its own title, use it to generate short title
    if (customTitle) {
        // Try to extract a short version (e.g., "Chapter 1: Introduction" -> "Ch1: Intro")
        const match = customTitle.match(/Chapter\s+(\d+)[:\s]*(.+)/i);
        if (match) {
            const num = match[1];
            const fullTitle = match[2];
            // Take first 2-3 words for short title
            const words = fullTitle.split(' ');
            let short = words.slice(0, 2).join(' ');
            if (words.length > 2) short += '...';
            return `Ch${num}: ${short}`;
        }
    }
    return `Chapter ${chapterNum}`;
}

// Load all chapter files dynamically - Now checks ALL possible chapters
async function loadAllChapters() {
    console.log("📚 Starting to load all focus area chapters...");
    
    const loadResults = [];
    
    // Loop through all courses in config
    for (const [courseKey, course] of Object.entries(COURSE_CONFIG)) {
        console.log(`📖 Loading ${course.title} chapters...`);
        
        // Check ALL possible chapters up to maxChapters
        for (let chapterNum = 1; chapterNum <= course.maxChapters; chapterNum++) {
            const chapterFile = `chapter${chapterNum}.js`;
            const chapterPath = `FocusAreaOfExitExam/${course.folder}/${chapterFile}`;
            const varName = `${course.chapterPrefix}${chapterNum}`;
            
            try {
                await loadScript(chapterPath);
                loadResults.push({ 
                    course: course.title,
                    chapter: chapterNum,
                    varName: varName,
                    loaded: true 
                });
                console.log(`   ✅ Found: ${course.title} - Chapter ${chapterNum}`);
            } catch (e) {
                // Don't stop on failure - continue checking next chapters
                loadResults.push({ 
                    course: course.title,
                    chapter: chapterNum,
                    varName: varName,
                    loaded: false 
                });
                console.log(`   ⚠️ Missing: ${course.title} - Chapter ${chapterNum}`);
            }
        }
    }
    
    // Report loading results
    console.log("📊 Detailed Loading Results:");
    const loadedCount = loadResults.filter(r => r.loaded).length;
    const totalCount = loadResults.length;
    console.log(`   Total: ${loadedCount}/${totalCount} chapters loaded successfully`);
    
    // Group by course
    const courseStats = {};
    loadResults.forEach(result => {
        if (!courseStats[result.course]) {
            courseStats[result.course] = { loaded: [], total: 0 };
        }
        courseStats[result.course].total++;
        if (result.loaded) {
            courseStats[result.course].loaded.push(result.chapter);
        }
    });
    
    console.log("📊 Chapters per course:");
    Object.entries(courseStats).forEach(([course, stats]) => {
        console.log(`   ${course}: ${stats.loaded.length}/${stats.total} chapters - Chapters: ${stats.loaded.join(', ')}`);
    });
    
    // Check which chapter variables are set
    console.log("🔍 Checking global variables:");
    loadResults.forEach(result => {
        if (result.loaded) {
            if (window[result.varName]) {
                console.log(`   ✅ ${result.varName} is set correctly`);
            } else {
                console.log(`   ❌ ${result.varName} was loaded but variable not set! Check file content`);
            }
        }
    });
    
    // Build course structure
    buildCourseStructure(courseStats);
}

// Build course structure from loaded chapters
function buildCourseStructure(courseStats) {
    console.log("🔨 Building course structure...");
    
    // Reset focusArea
    window.focusArea = {};
    
    // Build each course dynamically
    for (const [courseKey, course] of Object.entries(COURSE_CONFIG)) {
        const chapters = [];
        const loadedChapters = [];
        let maxChapterFound = 0;
        
        // Check ALL possible chapters up to maxChapters
        // Don't stop at first gap - keep checking all
        for (let chapterNum = 1; chapterNum <= course.maxChapters; chapterNum++) {
            const varName = `${course.chapterPrefix}${chapterNum}`;
            const chapterData = window[varName];
            
            if (chapterData) {
                chapters.push({
                    id: chapterNum - 1,
                    number: chapterNum,
                    title: chapterData.title || `Chapter ${chapterNum}`,
                    shortTitle: getChapterShortTitle(chapterNum, chapterData.title),
                    icon: getChapterIcon(chapterNum),
                    description: chapterData.description || `Chapter ${chapterNum} content`,
                    data: chapterData
                });
                loadedChapters.push(chapterNum);
                maxChapterFound = Math.max(maxChapterFound, chapterNum);
            }
        }
        
        // Only add course if it has at least one chapter
        if (chapters.length > 0) {
            // Get expected chapter count from lookup table or use max found
            let expectedChapters = EXPECTED_CHAPTER_COUNTS[courseKey] || chapters.length;
            
            // If we found chapters beyond expected, update expected
            if (maxChapterFound > expectedChapters) {
                expectedChapters = maxChapterFound;
            }
            
            window.focusArea[courseKey] = {
                title: course.title,
                icon: course.icon,
                description: course.description,
                totalChapters: chapters.length,
                availableChapters: loadedChapters,
                expectedChapters: expectedChapters,
                totalQuestions: course.totalQuestions,
                chapters: chapters.sort((a, b) => a.number - b.number)
            };
            
            console.log(`✅ Added ${course.title} with ${chapters.length}/${expectedChapters} chapters: ${loadedChapters.join(', ')}`);
        }
    }
    
    console.log("✅ Course structure built successfully!");
    console.log("📚 Available courses:", Object.keys(window.focusArea));
    
    // Log final chapter counts
    Object.entries(window.focusArea).forEach(([key, course]) => {
        console.log(`   ${course.title}: ${course.chapters.length}/${course.expectedChapters} chapters`);
        course.chapters.forEach(ch => {
            console.log(`      - Chapter ${ch.number}: ${ch.title}`);
        });
    });
    
    // Dispatch event that focus areas are loaded
    window.dispatchEvent(new Event('focusAreasLoaded'));
}

// Debug function to check specific courses
function debugChapterLoading() {
    console.log("🔍 DEBUG: Checking specific courses:");
    
    // Check Fundamental Database Systems
    console.log("\n📊 Fundamental Database Systems:");
    for (let i = 1; i <= 10; i++) {
        const varName = `focusAreaFundamentalDBChapter${i}`;
        if (window[varName]) {
            console.log(`   ✅ Chapter ${i}: LOADED - ${window[varName].title}`);
        } else {
            console.log(`   ❌ Chapter ${i}: NOT LOADED`);
        }
    }
    
    // Check Advanced Database Systems
    console.log("\n📊 Advanced Database Systems:");
    for (let i = 1; i <= 10; i++) {
        const varName = `focusAreaAdvancedDBChapter${i}`;
        if (window[varName]) {
            console.log(`   ✅ Chapter ${i}: LOADED - ${window[varName].title}`);
        } else {
            console.log(`   ❌ Chapter ${i}: NOT LOADED`);
        }
    }
    
    // Check all courses in focusArea
    console.log("\n📊 All Courses in focusArea:");
    if (window.focusArea) {
        Object.keys(window.focusArea).forEach(key => {
            const course = window.focusArea[key];
            console.log(`   ${course.title}: ${course.chapters.length}/${course.expectedChapters} chapters`);
        });
    }
}

// Start loading when the script runs
loadAllChapters().catch(error => {
    console.error("❌ Error in loadAllChapters:", error);
});

// Run debug after loading completes
setTimeout(debugChapterLoading, 2000);