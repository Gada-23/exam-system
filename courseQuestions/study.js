// ===============================
// STUDY MATERIALS
// ===============================

// Course data with icons and descriptions
const courseData = [
    {
        id: 'computer-programming',
        name: 'Computer Programming',
        icon: 'fa-code',
        description: 'Learn programming fundamentals, paradigms, and problem-solving techniques.',
        chapters: 8
    },
    {
        id: 'database-systems',
        name: 'Database Systems',
        icon: 'fa-database',
        description: 'Master database design, SQL, normalization, and transaction management.',
        chapters: 10
    },
    {
        id: 'object-oriented-programming',
        name: 'Object Oriented Programming',
        icon: 'fa-cubes',
        description: 'Understand classes, objects, inheritance, polymorphism, and encapsulation.',
        chapters: 7
    },
    {
        id: 'computer-organization-architecture',
        name: 'Computer Organization & Architecture',
        icon: 'fa-microchip',
        description: 'Explore CPU design, memory hierarchy, I/O systems, and pipelining.',
        chapters: 9
    },
    {
        id: 'data-communication-networking',
        name: 'Data Communication & Networking',
        icon: 'fa-network-wired',
        description: 'Study OSI model, TCP/IP, protocols, routing, and network security.',
        chapters: 8
    },
    {
        id: 'data-structures-algorithms',
        name: 'Data Structures & Algorithms',
        icon: 'fa-sitemap',
        description: 'Learn arrays, linked lists, trees, graphs, and algorithm analysis.',
        chapters: 10
    },
    {
        id: 'web-programming',
        name: 'Web Programming',
        icon: 'fa-globe',
        description: 'Master HTML, CSS, JavaScript, and modern web development frameworks.',
        chapters: 8
    },
    {
        id: 'operating-system',
        name: 'Operating System',
        icon: 'fa-windows',
        description: 'Understand process management, memory management, file systems, and scheduling.',
        chapters: 9
    },
    {
        id: 'software-engineering',
        name: 'Software Engineering',
        icon: 'fa-cog',
        description: 'Learn SDLC, agile methodologies, testing, and software design patterns.',
        chapters: 8
    },
    {
        id: 'design-analysis-algorithms',
        name: 'Design & Analysis of Algorithms',
        icon: 'fa-chart-line',
        description: 'Study algorithm design techniques, complexity analysis, and optimization.',
        chapters: 7
    },
    {
        id: 'artificial-intelligence',
        name: 'Artificial Intelligence',
        icon: 'fa-robot',
        description: 'Explore machine learning, neural networks, expert systems, and NLP.',
        chapters: 8
    },
    {
        id: 'computer-security',
        name: 'Computer Security',
        icon: 'fa-shield-alt',
        description: 'Learn cryptography, network security, authentication, and security protocols.',
        chapters: 7
    },
    {
        id: 'network-system-administration',
        name: 'Network & System Administration',
        icon: 'fa-server',
        description: 'Master system configuration, network management, and troubleshooting.',
        chapters: 6
    },
    {
        id: 'automata-complexity-theory',
        name: 'Automata & Complexity Theory',
        icon: 'fa-infinity',
        description: 'Study formal languages, automata, Turing machines, and computational complexity.',
        chapters: 7
    },
    {
        id: 'compiler-design',
        name: 'Compiler Design',
        icon: 'fa-file-code',
        description: 'Understand lexical analysis, parsing, semantic analysis, and code generation.',
        chapters: 7
    }
];

// Study modules will be loaded from individual files
window.studyModules = {};

// Load all study module files
function loadStudyModules() {
    console.log('Loading study modules...');
    
    const moduleFiles = [
        'studyCourses/computer-programming.js',
        'studyCourses/database-systems.js',
        'studyCourses/object-oriented-programming.js',
        'studyCourses/computer-organization-architecture.js',
        'studyCourses/data-communication-networking.js',
        'studyCourses/data-structures-algorithms.js',
        'studyCourses/web-programming.js',
        'studyCourses/operating-system.js',
        'studyCourses/software-engineering.js',
        'studyCourses/design-analysis-algorithms.js',
        'studyCourses/artificial-intelligence.js',
        'studyCourses/computer-security.js',
        'studyCourses/network-system-administration.js',
        'studyCourses/automata-complexity-theory.js',
        'studyCourses/compiler-design.js'
    ];
    
    let loadedCount = 0;
    
    moduleFiles.forEach(file => {
        const script = document.createElement('script');
        script.src = file;
        script.onload = function() {
            loadedCount++;
            console.log(`Loaded ${file} (${loadedCount}/${moduleFiles.length})`);
            
            if (loadedCount === moduleFiles.length) {
                displayCourses();
            }
        };
        script.onerror = function() {
            console.error(`Failed to load ${file}`);
            loadedCount++;
            if (loadedCount === moduleFiles.length) {
                displayCourses();
            }
        };
        document.head.appendChild(script);
    });
}

// Display courses in grid
function displayCourses() {
    const grid = document.getElementById('courseGridStudy');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    courseData.forEach(course => {
        const moduleData = window.studyModules[course.id] || { chapters: [] };
        const chapterCount = moduleData.chapters?.length || course.chapters;
        
        const card = document.createElement('div');
        card.className = 'course-card-study';
        card.onclick = () => showCourseChapters(course.id);
        
        card.innerHTML = `
            <div class="course-icon-study">
                <i class="fas ${course.icon}"></i>
            </div>
            <h3>${course.name}</h3>
            <p>${course.description}</p>
            <div class="course-meta-study">
                <span><i class="far fa-file-alt"></i> ${chapterCount} Chapters</span>
                <span class="chapter-count"><i class="far fa-clock"></i> Study</span>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Show chapters for selected course
function showCourseChapters(courseId) {
    const course = courseData.find(c => c.id === courseId);
    const moduleData = window.studyModules[courseId] || { chapters: [] };
    
    // Hide grid, show chapter view
    document.getElementById('courseGridStudy').style.display = 'none';
    document.getElementById('chapterView').style.display = 'block';
    
    // Update header
    document.getElementById('courseTitle').innerHTML = 
        `${course.name} <small>${moduleData.chapters?.length || course.chapters} Chapters</small>`;
    
    // Build chapter list
    const chapterList = document.getElementById('chapterList');
    chapterList.innerHTML = '';
    
    if (moduleData.chapters && moduleData.chapters.length > 0) {
        moduleData.chapters.forEach((chapter, index) => {
            const chapterItem = document.createElement('div');
            chapterItem.className = 'chapter-item';
            chapterItem.onclick = () => loadChapter(courseId, index);
            
            chapterItem.innerHTML = `
                <div class="chapter-number">Chapter ${index + 1}</div>
                <div class="chapter-title">${chapter.title}</div>
                <div class="chapter-description">${chapter.description || 'Click to read this chapter'}</div>
            `;
            
            chapterList.appendChild(chapterItem);
        });
    } else {
        chapterList.innerHTML = '<p class="no-courses">No chapters available yet. Study materials coming soon!</p>';
    }
    
    // Hide content initially
    document.getElementById('chapterContent').style.display = 'none';
}

// Load specific chapter content
function loadChapter(courseId, chapterIndex) {
    const moduleData = window.studyModules[courseId];
    if (!moduleData || !moduleData.chapters || !moduleData.chapters[chapterIndex]) return;
    
    const chapter = moduleData.chapters[chapterIndex];
    
    // Update active state in chapter list
    document.querySelectorAll('.chapter-item').forEach((item, index) => {
        if (index === chapterIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Show content and update navigation
    document.getElementById('chapterContent').style.display = 'block';
    document.getElementById('contentBody').innerHTML = chapter.content;
    
    // Update navigation buttons
    const prevBtn = document.querySelector('.nav-btn.prev');
    const nextBtn = document.querySelector('.nav-btn.next');
    
    if (prevBtn) {
        prevBtn.disabled = chapterIndex === 0;
    }
    if (nextBtn) {
        nextBtn.disabled = chapterIndex === moduleData.chapters.length - 1;
    }
    
    // Store current position for navigation
    window.currentCourse = courseId;
    window.currentChapter = chapterIndex;
    
    // Scroll to content
    document.getElementById('chapterContent').scrollIntoView({ behavior: 'smooth' });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    loadStudyModules();
});