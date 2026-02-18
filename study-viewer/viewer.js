// ===============================
// STUDY VIEWER
// Loads and displays chapter subsections
// ===============================

// Get course, chapter, and subsection from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const courseId = urlParams.get('course');
const initialChapter = urlParams.get('chapter') ? parseInt(urlParams.get('chapter')) : 1;
const initialSubsection = urlParams.get('subsection') ? parseInt(urlParams.get('subsection')) : 1;

// Course display names mapping
const courseNames = {
    'computer-programming': 'Computer Programming',
    'database-systems': 'Database Systems',
    'object-oriented-programming': 'Object Oriented Programming',
    'computer-organization-architecture': 'Computer Organization & Architecture',
    'data-communication-networking': 'Data Communication & Networking',
    'data-structures-algorithms': 'Data Structures & Algorithms',
    'web-programming': 'Web Programming',
    'operating-system': 'Operating System',
    'software-engineering': 'Software Engineering',
    'design-analysis-algorithms': 'Design & Analysis of Algorithms',
    'artificial-intelligence': 'Artificial Intelligence',
    'computer-security': 'Computer Security',
    'network-system-administration': 'Network & System Administration',
    'automata-complexity-theory': 'Automata & Complexity Theory',
    'compiler-design': 'Compiler Design'
};

// Store available chapters and subsections
let availableChapters = [];
let currentChapter = initialChapter;
let currentSubsection = initialSubsection;
let totalChapters = 0;
let chapterSubsections = {};

// DOM elements
const courseTitleEl = document.getElementById('courseTitle');
const chapterSelector = document.getElementById('chapterSelector');
const subsectionSelector = document.getElementById('subsectionSelector');
const subsectionTitle = document.getElementById('subsectionTitle');
const viewerContent = document.getElementById('viewerContent');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentChapterSpan = document.getElementById('currentChapter');
const totalChaptersSpan = document.getElementById('totalChapters');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    if (!courseId) {
        showError('No course specified');
        return;
    }
    
    // Set course title
    courseTitleEl.textContent = courseNames[courseId] || courseId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    // Discover available chapters
    discoverChapters();
});

// Discover available chapters
function discoverChapters() {
    let discoveredChapters = [];
    let checkPromises = [];
    
    // Check for chapters 1-20
    for (let i = 1; i <= 20; i++) {
        checkPromises.push(checkChapterExists(i));
    }
    
    Promise.all(checkPromises).then(results => {
        availableChapters = results.filter(ch => ch.exists).map(ch => ch.number);
        totalChapters = availableChapters.length;
        totalChaptersSpan.textContent = totalChapters;
        
        if (totalChapters === 0) {
            showNoContent();
            return;
        }
        
        // Check subsections for each chapter
        checkAllSubsections().then(() => {
            populateChapterSelector();
            
            // Validate current chapter exists
            if (!availableChapters.includes(currentChapter)) {
                currentChapter = availableChapters[0];
                currentSubsection = 1;
            }
            
            // Load the current subsection
            loadSubsection(currentChapter, currentSubsection);
        });
    });
}

// Check if a chapter exists
function checkChapterExists(chapterNum) {
    return new Promise((resolve) => {
        // Try to load the first subsection of the chapter
        const script = document.createElement('script');
        script.src = `../studyCourses/${courseId}/chapter${chapterNum}/ch${chapterNum}-1.js?t=${Date.now()}`;
        
        script.onload = function() {
            resolve({ number: chapterNum, exists: true });
            document.head.removeChild(script);
        };
        
        script.onerror = function() {
            resolve({ number: chapterNum, exists: false });
            document.head.removeChild(script);
        };
        
        document.head.appendChild(script);
    });
}

// Check subsections for all chapters
function checkAllSubsections() {
    const promises = [];
    
    availableChapters.forEach(chapter => {
        promises.push(checkChapterSubsections(chapter));
    });
    
    return Promise.all(promises);
}

// Check subsections for a specific chapter
function checkChapterSubsections(chapterNum) {
    return new Promise((resolve) => {
        const subsections = [];
        let checkedCount = 0;
        
        // Check for subsections 1-20
        for (let i = 1; i <= 20; i++) {
            const script = document.createElement('script');
            script.src = `../studyCourses/${courseId}/chapter${chapterNum}/ch${chapterNum}-${i}.js?t=${Date.now()}`;
            
            script.onload = function() {
                subsections.push(i);
                checkedCount++;
                document.head.removeChild(script);
                
                if (checkedCount === 20) {
                    chapterSubsections[chapterNum] = subsections.sort((a, b) => a - b);
                    resolve();
                }
            };
            
            script.onerror = function() {
                checkedCount++;
                document.head.removeChild(script);
                
                if (checkedCount === 20) {
                    chapterSubsections[chapterNum] = subsections.sort((a, b) => a - b);
                    resolve();
                }
            };
            
            document.head.appendChild(script);
        }
    });
}

// Populate chapter selector dropdown
function populateChapterSelector() {
    chapterSelector.innerHTML = '';
    
    availableChapters.forEach(chapter => {
        const option = document.createElement('option');
        option.value = chapter;
        option.textContent = `Chapter ${chapter}`;
        if (chapter === currentChapter) {
            option.selected = true;
        }
        chapterSelector.appendChild(option);
    });
    
    chapterSelector.addEventListener('change', function(e) {
        const newChapter = parseInt(e.target.value);
        if (!isNaN(newChapter)) {
            currentChapter = newChapter;
            currentSubsection = 1; // Reset to first subsection
            updateSubsectionSelector();
            loadSubsection(currentChapter, currentSubsection);
        }
    });
    
    // Update subsection selector for current chapter
    updateSubsectionSelector();
}

// Update subsection selector based on current chapter
function updateSubsectionSelector() {
    const subsections = chapterSubsections[currentChapter] || [];
    
    subsectionSelector.innerHTML = '';
    subsectionSelector.disabled = subsections.length === 0;
    
    if (subsections.length === 0) {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = 'No subsections available';
        subsectionSelector.appendChild(option);
        return;
    }
    
    subsections.forEach(sub => {
        const option = document.createElement('option');
        option.value = sub;
        option.textContent = `Section ${currentChapter}.${sub}`;
        if (sub === currentSubsection) {
            option.selected = true;
        }
        subsectionSelector.appendChild(option);
    });
    
    subsectionSelector.addEventListener('change', function(e) {
        const newSubsection = parseInt(e.target.value);
        if (!isNaN(newSubsection)) {
            currentSubsection = newSubsection;
            loadSubsection(currentChapter, currentSubsection);
        }
    });
}

// Load a specific subsection
function loadSubsection(chapter, subsection) {
    // Show loading
    viewerContent.innerHTML = `
        <div class="loading-chapter">
            <i class="fas fa-circle-notch fa-spin"></i>
            <p>Loading section ${chapter}.${subsection}...</p>
        </div>
    `;
    
    // Update URL without reloading
    const url = new URL(window.location);
    url.searchParams.set('chapter', chapter);
    url.searchParams.set('subsection', subsection);
    window.history.pushState({}, '', url);
    
    // Load the subsection file
    const script = document.createElement('script');
    script.src = `../studyCourses/${courseId}/chapter${chapter}/ch${chapter}-${subsection}.js?t=${Date.now()}`;
    
    script.onload = function() {
        if (window.currentSubsectionData) {
            displayContent(window.currentSubsectionData);
            window.currentSubsectionData = null; // Clear after use
        } else {
            viewerContent.innerHTML = `
                <div class="loading-chapter">
                    <i class="fas fa-exclamation-triangle" style="color: #f5576c;"></i>
                    <p>Error: Invalid content format</p>
                </div>
            `;
        }
        document.head.removeChild(script);
    };
    
    script.onerror = function() {
        viewerContent.innerHTML = `
            <div class="loading-chapter">
                <i class="fas fa-exclamation-triangle" style="color: #f5576c;"></i>
                <p>Error: Could not load section ${chapter}.${subsection}</p>
                <p style="font-size: 14px; color: #999;">File not found: chapter${chapter}/ch${chapter}-${subsection}.js</p>
            </div>
        `;
        document.head.removeChild(script);
    };
    
    document.head.appendChild(script);
}

// Display content
function displayContent(data) {
    // Update subsection title
    subsectionTitle.textContent = data.title || `Section ${currentChapter}.${currentSubsection}`;
    
    // Update content
    viewerContent.innerHTML = `
        <div class="chapter-content">
            ${data.content || '<p>No content available</p>'}
        </div>
    `;
    
    // Update navigation buttons
    updateNavigationButtons();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Update navigation buttons
function updateNavigationButtons() {
    const subsections = chapterSubsections[currentChapter] || [];
    const currentIndex = subsections.indexOf(currentSubsection);
    
    // Previous button
    if (currentIndex > 0) {
        prevBtn.disabled = false;
        prevBtn.onclick = () => {
            currentSubsection = subsections[currentIndex - 1];
            loadSubsection(currentChapter, currentSubsection);
            updateSubsectionSelector();
        };
    } else {
        prevBtn.disabled = true;
    }
    
    // Next button
    if (currentIndex < subsections.length - 1) {
        nextBtn.disabled = false;
        nextBtn.onclick = () => {
            currentSubsection = subsections[currentIndex + 1];
            loadSubsection(currentChapter, currentSubsection);
            updateSubsectionSelector();
        };
    } else {
        nextBtn.disabled = true;
    }
}

// Show error message
function showError(message) {
    viewerContent.innerHTML = `
        <div class="loading-chapter">
            <i class="fas fa-exclamation-triangle" style="color: #f5576c;"></i>
            <p>Error: ${message}</p>
            <a href="../study.html" class="back-to-courses" style="display: inline-block; margin-top: 20px; color: #667eea; text-decoration: none;">
                <i class="fas fa-arrow-left"></i> Back to Courses
            </a>
        </div>
    `;
}

// Show no content message
function showNoContent() {
    viewerContent.innerHTML = `
        <div class="loading-chapter">
            <i class="fas fa-book-open" style="color: #667eea;"></i>
            <p>No study materials available for this course yet.</p>
            <p style="font-size: 14px; color: #999;">Check back soon for updates!</p>
            <a href="../study.html" class="back-to-courses" style="display: inline-block; margin-top: 20px; color: #667eea; text-decoration: none;">
                <i class="fas fa-arrow-left"></i> Back to Courses
            </a>
        </div>
    `;
}