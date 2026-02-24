// ===============================
// FOCUS AREA: COMPUTER SECURITY - CHAPTER 2
// Program Security and Common Vulnerabilities
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaComputerSecurityChapter2 = {
    title: "Chapter 2: Program Security and Common Vulnerabilities",
    
    // Blueprint alignment: 2 questions (Understand, Apply)
    blueprint: {
        totalQuestions: 2,
        cognitiveLevels: {
            understand: 1,
            apply: 1
        },
        topics: [
            "Program security issues",
            "Common vulnerabilities in computer programs",
            "Malware (viruses, worms, Trojan horses)",
            "Buffer overflows",
            "Input validation vulnerabilities"
        ]
    },

    learningObjectives: [
        "Understand issues related to program security",
        "Identify common vulnerabilities in computer programs",
        "Explain different types of malware and their characteristics",
        "Understand how buffer overflows work and how to prevent them",
        "Apply secure coding practices to prevent vulnerabilities",
        "Analyze program vulnerabilities and their potential impacts"
    ],

    sections: [
        {
            title: "2.1 Introduction to Program Security",
            content: `
                <h4>What is Program Security?</h4>
                <p>Program security refers to the measures taken to ensure that software programs operate as intended without being vulnerable to attacks or causing harm to the system. It involves writing code that is secure by design and free from vulnerabilities that could be exploited.</p>
                
                <h4>Why Program Security Matters:</h4>
                <ul>
                    <li><strong>Most attacks target software:</strong> Over 90% of security incidents exploit software vulnerabilities</li>
                    <li><strong>Software is everywhere:</strong> From phones to medical devices, software controls critical systems</li>
                    <li><strong>Cost of fixing bugs:</strong> Fixing security bugs after deployment is 100x more expensive than during development</li>
                    <li><strong>Data breaches:</strong> Vulnerable programs lead to data theft</li>
                </ul>
                
                <h4>Common Sources of Program Vulnerabilities:</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Source</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Design Flaws</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Problems in the program's architecture</td>
                        <td style="padding:8px; border:1px solid #ddd;">Poor authentication design</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Implementation Bugs</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Errors in coding</td>
                        <td style="padding:8px; border:1px solid #ddd;">Buffer overflow, SQL injection</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Configuration Errors</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Improper setup</td>
                        <td style="padding:8px; border:1px solid #ddd;">Default passwords left unchanged</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Program security ensures software works as intended without vulnerabilities",
                "Most attacks target software vulnerabilities",
                "Fixing bugs early is much cheaper than after deployment",
                "Vulnerabilities come from design flaws, implementation bugs, and configuration errors"
            ]
        },

        {
            title: "2.2 Malware: Malicious Software",
            content: `
                <h4>What is Malware?</h4>
                <p>Malware (malicious software) is any program designed to cause damage, disrupt operations, or gain unauthorized access to computer systems.</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">TYPES OF MALWARE</p>
                </div>
                
                <h4>2.2.1 Viruses</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;" colspan="2">Viruses</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Definition</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Malicious code that attaches itself to legitimate programs and replicates when the program runs</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>How it works</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Attaches to host program, executes when host runs, spreads to other programs</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Need host?</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Yes - requires a host program to attach to</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Replicates?</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Yes - makes copies of itself</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Example</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">File infector virus, boot sector virus, macro virus</td>
                    </tr>
                </table>
                
                <h4>2.2.2 Worms</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;" colspan="2">Worms</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Definition</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Self-replicating malware that spreads independently without needing a host program</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>How it works</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Exploits network vulnerabilities to copy itself to other computers automatically</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Need host?</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">No - spreads independently through networks</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Replicates?</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Yes - very quickly across networks</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Example</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Morris worm, Blaster worm, Conficker</td>
                    </tr>
                </table>
                
                <h4>2.2.3 Trojan Horses</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;" colspan="2">Trojan Horses</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Definition</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Malicious program disguised as legitimate software</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>How it works</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Tricks users into running it by appearing useful or interesting</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Need host?</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">No - but needs user to execute it</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Replicates?</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">No - does not self-replicate</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Example</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Fake antivirus, game cheats with malware, keyloggers</td>
                    </tr>
                </table>
                
                <h4>2.2.4 Other Types of Malware</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Ransomware</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Encrypts files and demands payment for decryption</td>
                        <td style="padding:8px; border:1px solid #ddd;">WannaCry, Locky</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Spyware</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Secretly monitors user activity and collects information</td>
                        <td style="padding:8px; border:1px solid #ddd;">Keyloggers, tracking cookies</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Adware</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Displays unwanted advertisements</td>
                        <td style="padding:8px; border:1px solid #ddd;">Pop-up ads, browser hijackers</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Rootkits</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Hides malware from detection tools</td>
                        <td style="padding:8px; border:1px solid #ddd;">Kernel rootkits, bootkits</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Logic Bomb</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Malicious code triggered by specific condition</td>
                        <td style="padding:8px; border:1px solid #ddd;">Employee sets bomb to trigger if fired</td>
                    </tr>
                </table>
                
                <h4>Comparison Table: Virus vs Worm vs Trojan</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Feature</th>
                        <th style="padding:10px; border:1px solid #ddd;">Virus</th>
                        <th style="padding:10px; border:1px solid #ddd;">Worm</th>
                        <th style="padding:10px; border:1px solid #ddd;">Trojan</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Needs host program</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Yes</td>
                        <td style="padding:8px; border:1px solid #ddd;">❌ No</td>
                        <td style="padding:8px; border:1px solid #ddd;">❌ No</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Self-replicates</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Yes</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Yes</td>
                        <td style="padding:8px; border:1px solid #ddd;">❌ No</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Spreads via network</td>
                        <td style="padding:8px; border:1px solid #ddd;">Sometimes</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Yes</td>
                        <td style="padding:8px; border:1px solid #ddd;">❌ No</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Needs user action</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Yes (run host)</td>
                        <td style="padding:8px; border:1px solid #ddd;">❌ No</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Yes (execute)</td>
                    </tr>
                </table>
                
                <div class="key-points-box" style="background:#f8f9fa; padding:20px; border-radius:8px;">
                    <h5><i class="fas fa-exclamation-triangle" style="color:#2772a0;"></i> Important Distinction:</h5>
                    <p><strong>Virus:</strong> Needs host, replicates<br>
                    <strong>Worm:</strong> No host, replicates, spreads via network<br>
                    <strong>Trojan:</strong> Disguised as legitimate, does not replicate</p>
                </div>
            `,
            keyPoints: [
                "Malware = malicious software designed to cause harm",
                "Virus: attaches to host program, replicates when host runs",
                "Worm: self-replicates without host, spreads via networks",
                "Trojan: disguised as legitimate software, does not self-replicate",
                "Ransomware encrypts files for ransom",
                "Spyware monitors user activity",
                "Logic bomb triggers under specific conditions"
            ]
        },

        {
            title: "2.3 Buffer Overflow Vulnerabilities",
            content: `
                <h4>What is a Buffer Overflow?</h4>
                <p>A buffer overflow occurs when a program writes more data to a buffer (temporary storage area) than it can hold. The excess data overflows into adjacent memory, potentially corrupting or overwriting valid data.</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">BUFFER OVERFLOW EXPLAINED</p>
                    <p>Imagine a bucket that can hold 10 liters of water. If you try to pour 15 liters into it, the extra 5 liters spill out and make a mess. In computers, that "mess" can overwrite important data or code.</p>
                </div>
                
                <h4>How Buffer Overflow Works:</h4>
                <ol>
                    <li>Program allocates a buffer of fixed size (e.g., 100 bytes)</li>
                    <li>Program receives input without checking its length</li>
                    <li>User provides input larger than buffer size (e.g., 200 bytes)</li>
                    <li>Extra data overwrites adjacent memory (return address, variables, etc.)</li>
                    <li>Attacker can craft input to execute malicious code</li>
                </ol>
                
                <h4>Visual Representation:</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Normal Memory Layout:
[BUFFER (100 bytes)] [RETURN ADDRESS] [OTHER DATA]

During Overflow:
[BUFFER (100 bytes)] [MALICIOUS CODE] [OVERWRITTEN]
                      ^ Extra data overwrites here
                </pre>
                
                <h4>Code Example (C Language):</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
VULNERABLE CODE:
void vulnerable() {
    char buffer[100];
    gets(buffer);  // No bounds checking!
}

SAFE CODE:
void safe() {
    char buffer[100];
    fgets(buffer, sizeof(buffer), stdin);  // Limits input size
}
                </pre>
                
                <h4>Consequences of Buffer Overflow:</h4>
                <ul>
                    <li><strong>Program crash:</strong> Most common result</li>
                    <li><strong>Arbitrary code execution:</strong> Attacker runs malicious code</li>
                    <li><strong>Privilege escalation:</strong> Gaining higher access rights</li>
                    <li><strong>System compromise:</strong> Complete takeover of system</li>
                </ul>
                
                <h4>Famous Buffer Overflow Attacks:</h4>
                <ul>
                    <li><strong>Morris Worm (1988):</strong> Used buffer overflow to spread</li>
                    <li><strong>Code Red (2001):</strong> Exploited IIS server vulnerability</li>
                    <li><strong>SQL Slammer (2003):</strong> Fast-spreading worm using buffer overflow</li>
                </ul>
                
                <h4>Prevention Techniques:</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Technique</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Bounds Checking</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Always check input length before copying</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Safe Functions</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Use strncpy() instead of strcpy(), fgets() instead of gets()</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Stack Canaries</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Place special values to detect overflow</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>ASLR</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Randomize memory addresses to make exploitation harder</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>NX Bit</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Mark memory as non-executable</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Modern Languages</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Use languages with automatic bounds checking (Java, Python, C#)</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Buffer overflow: writing more data than buffer can hold",
                "Extra data overwrites adjacent memory",
                "Can cause program crash or arbitrary code execution",
                "Caused by missing bounds checking",
                "Prevention: bounds checking, safe functions, stack canaries, ASLR",
                "Modern languages prevent buffer overflows automatically"
            ]
        },

        {
            title: "2.4 Input Validation Vulnerabilities",
            content: `
                <h4>What is Input Validation?</h4>
                <p>Input validation is the process of ensuring that user-supplied data meets the expected format, type, length, and range before being processed by the application.</p>
                
                <h4>Why Input Validation Matters:</h4>
                <p>Without proper input validation, attackers can send malicious data that tricks the application into doing things it shouldn't.</p>
                
                <h4>2.4.1 SQL Injection</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;" colspan="2">SQL Injection</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Definition</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Inserting malicious SQL code into user input to manipulate database queries</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Target</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Databases, web applications</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Impact</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Data theft, data modification, authentication bypass</td>
                    </tr>
                </table>
                
                <h4>SQL Injection Example:</h4>
                <p><strong>Vulnerable Code:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
$user = $_POST['username'];
$pass = $_POST['password'];
$query = "SELECT * FROM users WHERE username = '$user' AND password = '$pass'";
                </pre>
                
                <p><strong>Normal Input:</strong> username = "john", password = "secret123"</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
SELECT * FROM users WHERE username = 'john' AND password = 'secret123'
                </pre>
                
                <p><strong>Malicious Input:</strong> username = "admin' --"</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
SELECT * FROM users WHERE username = 'admin' --' AND password = 'anything'
                </pre>
                <p>The -- comments out the rest of the query, allowing login without password!</p>
                
                <h4>SQL Injection Prevention:</h4>
                <ul>
                    <li><strong>Parameterized queries (Prepared statements):</strong> Separate SQL from data</li>
                    <li><strong>Input validation:</strong> Allow only expected characters</li>
                    <li><strong>Escaping:</strong> Escape special characters</li>
                    <li><strong>Least privilege:</strong> Database accounts with minimal permissions</li>
                </ul>
                
                <h4>2.4.2 Cross-Site Scripting (XSS)</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;" colspan="2">Cross-Site Scripting (XSS)</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Definition</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Injecting malicious scripts into web pages viewed by other users</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Target</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Web applications, users' browsers</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Impact</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Session hijacking, defacement, phishing</td>
                    </tr>
                </table>
                
                <h4>XSS Example:</h4>
                <p><strong>Vulnerable Code:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
echo "Welcome, " . $_GET['name'] . "!";
                </pre>
                
                <p><strong>Normal URL:</strong> example.com?name=John</p>
                <p>Output: "Welcome, John!"</p>
                
                <p><strong>Malicious URL:</strong> example.com?name=&lt;script&gt;alert('hacked')&lt;/script&gt;</p>
                <p>Output: "Welcome, &lt;script&gt;alert('hacked')&lt;/script&gt;!" - script executes in browser!</p>
                
                <h4>Types of XSS:</h4>
                <ul>
                    <li><strong>Reflected XSS:</strong> Script comes from current request (like example above)</li>
                    <li><strong>Stored XSS:</strong> Script stored on server (e.g., in comments, posts)</li>
                    <li><strong>DOM-based XSS:</strong> Vulnerability in client-side JavaScript</li>
                </ul>
                
                <h4>XSS Prevention:</h4>
                <ul>
                    <li><strong>Input validation:</strong> Validate all user input</li>
                    <li><strong>Output encoding:</strong> Encode special characters (e.g., &lt; becomes &amp;lt;)</li>
                    <li><strong>Content Security Policy (CSP):</strong> Restrict which scripts can run</li>
                    <li><strong>HTTP-only cookies:</strong> Prevent JavaScript access to cookies</li>
                </ul>
                
                <h4>2.4.3 Command Injection</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;" colspan="2">Command Injection</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Definition</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Executing arbitrary system commands through vulnerable application</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Target</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Applications that call system commands</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Impact</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Complete system compromise</td>
                    </tr>
                </table>
                
                <h4>Command Injection Example:</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
$ip = $_GET['ip'];
system("ping " . $ip);
                </pre>
                
                <p><strong>Normal:</strong> ?ip=8.8.8.8 → runs "ping 8.8.8.8"</p>
                <p><strong>Malicious:</strong> ?ip=8.8.8.8; cat /etc/passwd → runs "ping 8.8.8.8; cat /etc/passwd"</p>
                
                <h4>Command Injection Prevention:</h4>
                <ul>
                    <li>Avoid system calls when possible</li>
                    <li>Use APIs instead of shell commands</li>
                    <li>Validate input strictly (allow only expected characters)</li>
                    <li>Escape shell arguments</li>
                </ul>
            `,
            keyPoints: [
                "Input validation ensures user data meets expected format",
                "SQL injection: malicious SQL in input to manipulate databases",
                "XSS: malicious scripts injected into web pages",
                "Command injection: arbitrary system commands executed",
                "Prevention: validate input, use parameterized queries, encode output",
                "Never trust user input!"
            ]
        },

        {
            title: "2.5 Other Common Program Vulnerabilities",
            content: `
                <h4>2.5.1 Race Conditions</h4>
                <p>A race condition occurs when multiple processes access shared resources concurrently, and the outcome depends on the timing or sequence of execution.</p>
                
                <p><strong>Example - Time of Check to Time of Use (TOCTOU):</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
if (access("file", W_OK) == 0) {  // Check: can we write?
    // ... time gap ...
    open("file", O_WRONLY);       // Use: open for writing
}
                </pre>
                <p>Attacker could change the file between check and use (e.g., replace with symlink).</p>
                
                <h4>2.5.2 Integer Overflows</h4>
                <p>When an arithmetic operation attempts to create a numeric value that exceeds the maximum value the variable type can hold.</p>
                
                <p><strong>Example:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
unsigned char max = 255;
max = max + 1;  // Wraps around to 0!
                </pre>
                
                <h4>2.5.3 Format String Vulnerabilities</h4>
                <p>Occurs when user input is passed directly to printf-style functions without proper format specifiers.</p>
                
                <p><strong>Vulnerable:</strong> <code>printf(user_input);</code></p>
                <p><strong>Safe:</strong> <code>printf("%s", user_input);</code></p>
                
                <h4>2.5.4 Hard-coded Credentials</h4>
                <p>Storing passwords, API keys, or other secrets directly in source code.</p>
                
                <p><strong>Problem:</strong> Anyone with access to code can find them.</p>
                
                <h4>2.5.5 Insecure Deserialization</h4>
                <p>When untrusted data is used to reconstruct objects, leading to remote code execution.</p>
                
                <h4>Summary Table: Common Vulnerabilities</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Vulnerability</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Prevention</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Buffer Overflow</td>
                        <td style="padding:8px; border:1px solid #ddd;">Writing beyond buffer bounds</td>
                        <td style="padding:8px; border:1px solid #ddd;">Bounds checking, safe functions</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">SQL Injection</td>
                        <td style="padding:8px; border:1px solid #ddd;">Malicious SQL in input</td>
                        <td style="padding:8px; border:1px solid #ddd;">Parameterized queries</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">XSS</td>
                        <td style="padding:8px; border:1px solid #ddd;">Malicious scripts in web pages</td>
                        <td style="padding:8px; border:1px solid #ddd;">Output encoding, CSP</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Command Injection</td>
                        <td style="padding:8px; border:1px solid #ddd;">Arbitrary system commands</td>
                        <td style="padding:8px; border:1px solid #ddd;">Avoid system calls, validate input</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Race Condition</td>
                        <td style="padding:8px; border:1px solid #ddd;">Concurrent access issues</td>
                        <td style="padding:8px; border:1px solid #ddd;">Synchronization, locking</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Race conditions occur with concurrent access to shared resources",
                "Integer overflows wrap around numeric limits",
                "Format string vulnerabilities expose memory",
                "Never hard-code credentials in source code",
                "Insecure deserialization can lead to remote code execution"
            ]
        },

        {
            title: "2.6 Secure Coding Practices",
            content: `
                <h4>Principles of Secure Coding</h4>
                
                <h4>2.6.1 Input Validation</h4>
                <ul>
                    <li><strong>Whitelist vs Blacklist:</strong> Prefer whitelist (allow known good) over blacklist (block known bad)</li>
                    <li><strong>Validate:</strong> Type, length, format, range</li>
                    <li><strong>Canonicalize:</strong> Convert input to standard form before validation</li>
                </ul>
                
                <h4>2.6.2 Output Encoding</h4>
                <ul>
                    <li>Encode output for the appropriate context (HTML, SQL, shell)</li>
                    <li>Use context-aware escaping functions</li>
                </ul>
                
                <h4>2.6.3 Principle of Least Privilege</h4>
                <ul>
                    <li>Programs should run with minimum necessary privileges</li>
                    <li>Drop privileges when not needed</li>
                </ul>
                
                <h4>2.6.4 Defense in Depth</h4>
                <ul>
                    <li>Multiple layers of security controls</li>
                    <li>If one layer fails, others still protect</li>
                </ul>
                
                <h4>2.6.5 Fail Securely</h4>
                <ul>
                    <li>When errors occur, default to secure state</li>
                    <li>Don't give attackers useful error information</li>
                </ul>
                
                <h4>2.6.6 Keep It Simple</h4>
                <ul>
                    <li>Complex code is harder to secure</li>
                    <li>Simple designs are easier to audit and verify</li>
                </ul>
                
                <h4>2.6.7 Security by Design</h4>
                <ul>
                    <li>Consider security from the beginning, not as an afterthought</li>
                    <li>Threat modeling during design phase</li>
                </ul>
                
                <h4>Secure Development Lifecycle (SDL)</h4>
                <ol>
                    <li><strong>Training:</strong> Train developers in secure coding</li>
                    <li><strong>Requirements:</strong> Define security requirements</li>
                    <li><strong>Design:</strong> Threat modeling, design review</li>
                    <li><strong>Implementation:</strong> Use secure coding standards, tools</li>
                    <li><strong>Verification:</strong> Testing, code review, scanning</li>
                    <li><strong>Release:</strong> Final security review</li>
                    <li><strong>Response:</strong> Incident response plan</li>
                </ol>
            `,
            keyPoints: [
                "Validate all input (whitelist preferred)",
                "Encode all output appropriately",
                "Principle of least privilege",
                "Defense in depth: multiple security layers",
                "Fail securely: default to secure state",
                "Security by design, not afterthought",
                "Follow Secure Development Lifecycle (SDL)"
            ]
        }
    ],

    summary: `
        <h3>Chapter 2 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Malware types:</strong> Virus (needs host, replicates), Worm (self-replicates, network), Trojan (disguised, no replication)</li>
            <li><strong>Buffer overflow:</strong> Writing beyond buffer bounds → code execution, prevention: bounds checking, safe functions</li>
            <li><strong>SQL injection:</strong> Malicious SQL in input → data theft, prevention: parameterized queries</li>
            <li><strong>XSS:</strong> Malicious scripts in web pages → session hijacking, prevention: output encoding</li>
            <li><strong>Command injection:</strong> Arbitrary system commands → system compromise, prevention: avoid system calls</li>
            <li><strong>Secure coding principles:</strong> Input validation, output encoding, least privilege, defense in depth</li>
            <li><strong>Never trust user input!</strong> This is the golden rule</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "Compare and contrast viruses, worms, and Trojan horses.",
            answer: "Viruses need host programs and replicate; worms self-replicate without hosts and spread via networks; Trojans are disguised as legitimate software but do not replicate."
        },
        {
            question: "Explain how a buffer overflow attack works and how to prevent it.",
            answer: "A buffer overflow occurs when more data is written to a buffer than it can hold, overwriting adjacent memory. Attackers can inject malicious code. Prevention: bounds checking, using safe functions (fgets instead of gets), stack canaries, ASLR."
        },
        {
            question: "What is SQL injection? Provide an example and explain prevention methods.",
            answer: "SQL injection inserts malicious SQL code into user input to manipulate database queries. Example: 'admin' --' bypasses password check. Prevention: parameterized queries, input validation, escaping."
        },
        {
            question: "Describe Cross-Site Scripting (XSS) and its types.",
            answer: "XSS injects malicious scripts into web pages. Types: Reflected (comes from request), Stored (stored on server), DOM-based (client-side). Prevention: output encoding, CSP, input validation."
        },
        {
            question: "What is the principle of least privilege and why is it important?",
            answer: "The principle of least privilege means programs should run with minimum necessary privileges. This limits damage if compromised."
        },
        {
            question: "List five secure coding practices.",
            answer: "Input validation, output encoding, least privilege, defense in depth, fail securely, security by design."
        }
    ],

    quickTips: [
        "Virus = needs host, Worm = self-spreading, Trojan = disguise",
        "Buffer overflow = write beyond buffer → bad things",
        "SQL injection = ' OR '1'='1' -- classic attack",
        "XSS = <script>alert('XSS')</script>",
        "Never trust user input!",
        "Validate input, encode output"
    ],

    commonMistakes: [
        "❌ Thinking viruses and worms are the same - worms don't need hosts",
        "❌ Using unsafe functions like gets(), strcpy() in C",
        "❌ Believing client-side validation is enough - always validate on server",
        "❌ Storing passwords in code",
        "❌ Not encoding output - leads to XSS",
        "❌ Concatenating strings for SQL queries - leads to SQL injection"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 2:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>2 questions</strong> distributed as:</p>
        <ul>
            <li><strong>1 Understand question:</strong> Understanding program security issues and vulnerabilities</li>
            <li><strong>1 Apply question:</strong> Applying knowledge to identify and prevent vulnerabilities</li>
        </ul>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>Malware:</strong> Virus, worm, Trojan - differences and examples</li>
            <li><strong>Buffer overflow:</strong> How it works, consequences, prevention</li>
            <li><strong>Input validation vulnerabilities:</strong> SQL injection, XSS, command injection</li>
            <li><strong>Secure coding practices:</strong> How to prevent vulnerabilities</li>
        </ol>
        
        <h4>What "Apply" Means:</h4>
        <p>You need to be able to identify vulnerabilities in code examples and apply prevention techniques.</p>
        
        <h4>Practice Apply Questions:</h4>
        <ul>
            <li>Given a code snippet, identify potential vulnerabilities.</li>
            <li>How would you fix a buffer overflow in C?</li>
            <li>What's wrong with this SQL query: "SELECT * FROM users WHERE user = '$user'"</li>
            <li>How would you prevent XSS in a web application?</li>
        </ul>
    `
};