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

// Cache for loaded subsections
const subsectionCache = {};

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
const backToCourses = document.getElementById('backToCourses');
const readingProgress = document.getElementById('readingProgress');
const tocButton = document.getElementById('tocButton');
const tocPanel = document.getElementById('tocPanel');
const tocList = document.getElementById('tocList');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    if (!courseId) {
        showError('No course specified');
        return;
    }
    
    // Set course title
    courseTitleEl.textContent = courseNames[courseId] || courseId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    // Update back link to preserve course context
    if (backToCourses) {
        backToCourses.href = `../study.html?course=${courseId}`;
    }
    
    // Setup TOC button
    setupTOC();
    
    // Discover available chapters
    discoverChapters();
    
    // Setup reading progress tracking
    setupReadingProgress();
});

// Setup reading progress
function setupReadingProgress() {
    window.addEventListener('scroll', function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (readingProgress) {
            readingProgress.style.width = scrolled + '%';
        }
    });
}

// Setup Table of Contents
function setupTOC() {
    if (tocButton) {
        tocButton.addEventListener('click', function() {
            tocPanel.classList.toggle('active');
        });
    }
    
    // Close TOC when clicking outside
    document.addEventListener('click', function(e) {
        if (tocButton && tocPanel) {
            if (!tocButton.contains(e.target) && !tocPanel.contains(e.target)) {
                tocPanel.classList.remove('active');
            }
        }
    });
}

// Update TOC with section headings
function updateTOC() {
    if (!tocList) return;
    
    const headings = document.querySelectorAll('.chapter-content h2, .chapter-content h3');
    tocList.innerHTML = '';
    
    headings.forEach((heading, index) => {
        const li = document.createElement('li');
        li.textContent = heading.textContent;
        li.style.marginLeft = heading.tagName === 'H3' ? '20px' : '0';
        li.style.fontWeight = heading.tagName === 'H2' ? '600' : '400';
        
        li.addEventListener('click', function() {
            heading.scrollIntoView({ behavior: 'smooth' });
            tocPanel.classList.remove('active');
        });
        
        tocList.appendChild(li);
    });
}

// Show loading state
function showLoading(message = 'Loading...') {
    viewerContent.innerHTML = `
        <div class="loading-container">
            <i class="fas fa-circle-notch fa-spin"></i>
            <h3>${message}</h3>
            <p style="color: #999; margin-top: 10px;">Please wait while we prepare your content...</p>
        </div>
    `;
}

// Show error message
function showError(message, details = '') {
    viewerContent.innerHTML = `
        <div class="error-container">
            <i class="fas fa-exclamation-triangle"></i>
            <h3>Error</h3>
            <p>${message}</p>
            ${details ? `<div class="error-details">${details}</div>` : ''}
            <a href="../study.html" class="back-link">
                <i class="fas fa-arrow-left"></i> Back to Courses
            </a>
        </div>
    `;
}

// Discover available chapters
function discoverChapters() {
    showLoading('Scanning for available chapters...');
    
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
            
            // Update URL with correct chapter/subsection
            updateURL();
            
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
        const url = `../studyCourses/${courseId}/chapter${chapterNum}/ch${chapterNum}-1.js?t=${Date.now()}`;
        script.src = url;
        
        script.onload = function() {
            // Clean up
            document.head.removeChild(script);
            // Also clean up any global data
            if (window.currentSubsectionData) {
                delete window.currentSubsectionData;
            }
            resolve({ number: chapterNum, exists: true });
        };
        
        script.onerror = function() {
            document.head.removeChild(script);
            resolve({ number: chapterNum, exists: false });
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
            const url = `../studyCourses/${courseId}/chapter${chapterNum}/ch${chapterNum}-${i}.js?t=${Date.now()}`;
            script.src = url;
            
            script.onload = function() {
                subsections.push(i);
                checkedCount++;
                document.head.removeChild(script);
                
                // Clean up global data
                if (window.currentSubsectionData) {
                    delete window.currentSubsectionData;
                }
                
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
    chapterSelector.disabled = false;
    
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
        if (!isNaN(newChapter) && newChapter !== currentChapter) {
            currentChapter = newChapter;
            currentSubsection = 1; // Reset to first subsection
            updateURL();
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
    
    // Remove old listener and add new one
    subsectionSelector.removeEventListener('change', subsectionChangeHandler);
    subsectionSelector.addEventListener('change', subsectionChangeHandler);
}

function subsectionChangeHandler(e) {
    const newSubsection = parseInt(e.target.value);
    if (!isNaN(newSubsection) && newSubsection !== currentSubsection) {
        currentSubsection = newSubsection;
        updateURL();
        loadSubsection(currentChapter, currentSubsection);
    }
}

// Update URL without reloading
function updateURL() {
    const url = new URL(window.location);
    url.searchParams.set('chapter', currentChapter);
    url.searchParams.set('subsection', currentSubsection);
    window.history.replaceState({}, '', url);
}

// Load a specific subsection
function loadSubsection(chapter, subsection) {
    // Check cache first
    const cacheKey = `${courseId}-${chapter}-${subsection}`;
    if (subsectionCache[cacheKey]) {
        displayContent(subsectionCache[cacheKey]);
        return;
    }
    
    // Show loading
    showLoading(`Loading section ${chapter}.${subsection}...`);
    
    // Update selectors
    if (chapterSelector) chapterSelector.value = chapter;
    updateSubsectionSelector();
    
    // Load the subsection file
    const script = document.createElement('script');
    const url = `../studyCourses/${courseId}/chapter${chapter}/ch${chapter}-${subsection}.js?t=${Date.now()}`;
    script.src = url;
    
    script.onload = function() {
        if (window.currentSubsectionData) {
            // Cache the data
            subsectionCache[cacheKey] = window.currentSubsectionData;
            displayContent(window.currentSubsectionData);
            
            // Clean up
            delete window.currentSubsectionData;
        } else {
            // If no data, check if it's a valid subsection but empty
            if (chapterSubsections[currentChapter] && 
                chapterSubsections[currentChapter].includes(subsection)) {
                // Valid but empty - show placeholder
                const emptyData = {
                    title: `Section ${chapter}.${subsection}`,
                    content: `<p>This section is under construction.</p>`
                };
                subsectionCache[cacheKey] = emptyData;
                displayContent(emptyData);
            } else {
                showError('Invalid content format', 
                    'The subsection file loaded but contained no data.');
            }
        }
        document.head.removeChild(script);
    };
    
    script.onerror = function() {
        document.head.removeChild(script);
        
        // Check if this subsection was supposed to exist
        if (chapterSubsections[currentChapter] && 
            chapterSubsections[currentChapter].includes(subsection)) {
            // It should exist but failed to load
            showError(`Failed to load section ${chapter}.${subsection}`,
                `File not found: chapter${chapter}/ch${chapter}-${subsection}.js`);
        } else {
            // It doesn't exist - try to find first available subsection
            const subsections = chapterSubsections[currentChapter] || [];
            if (subsections.length > 0) {
                currentSubsection = subsections[0];
                updateURL();
                loadSubsection(currentChapter, currentSubsection);
            } else {
                showError('No content available', 
                    'This chapter has no subsections.');
            }
        }
    };
    
    document.head.appendChild(script);
}

// Display content
function displayContent(data) {
    // Update subsection title
    subsectionTitle.textContent = data.title || `Section ${currentChapter}.${currentSubsection}`;
    
    // Update content
    viewerContent.innerHTML = `
        <div class="content-container">
            <div class="chapter-content">
                ${data.content || '<p>No content available</p>'}
            </div>
        </div>
    `;
    
    // Update navigation buttons
    updateNavigationButtons();
    
    // Update TOC
    updateTOC();
    
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
            updateURL();
            loadSubsection(currentChapter, currentSubsection);
        };
    } else {
        prevBtn.disabled = true;
    }
    
    // Next button
    if (currentIndex < subsections.length - 1) {
        nextBtn.disabled = false;
        nextBtn.onclick = () => {
            currentSubsection = subsections[currentIndex + 1];
            updateURL();
            loadSubsection(currentChapter, currentSubsection);
        };
    } else {
        nextBtn.disabled = true;
    }
}

// Show no content message
function showNoContent() {
    viewerContent.innerHTML = `
        <div class="loading-container">
            <i class="fas fa-book-open" style="color: #2772a0;"></i>
            <h3>No Study Materials Available</h3>
            <p>No chapters found for this course yet.</p>
            <p style="font-size: 14px; color: #999; margin-top: 15px;">
                Study materials are being prepared. Please check back soon!
            </p>
            <a href="../study.html" class="back-link" style="margin-top: 30px;">
                <i class="fas fa-arrow-left"></i> Back to Courses
            </a>
        </div>
    `;
    
    // Disable controls
    chapterSelector.disabled = true;
    subsectionSelector.disabled = true;
    prevBtn.disabled = true;
    nextBtn.disabled = true;
}

// Handle browser back/forward navigation
window.addEventListener('popstate', function() {
    const params = new URLSearchParams(window.location.search);
    const newChapter = params.get('chapter') ? parseInt(params.get('chapter')) : currentChapter;
    const newSubsection = params.get('subsection') ? parseInt(params.get('subsection')) : currentSubsection;
    
    if (newChapter !== currentChapter || newSubsection !== currentSubsection) {
        currentChapter = newChapter;
        currentSubsection = newSubsection;
        
        if (chapterSelector) chapterSelector.value = currentChapter;
        updateSubsectionSelector();
        loadSubsection(currentChapter, currentSubsection);
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // Only handle if no input is focused
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
        return;
    }
    
    if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
        prevBtn.click();
        e.preventDefault();
    } else if (e.key === 'ArrowRight' && !nextBtn.disabled) {
        nextBtn.click();
        e.preventDefault();
    }
});

// Log successful initialization
console.log(`Study viewer initialized for course: ${courseId}`);