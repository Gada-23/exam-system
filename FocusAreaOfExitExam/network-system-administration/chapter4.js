// ===============================
// FOCUS AREA: NETWORK AND SYSTEM ADMINISTRATION - CHAPTER 4
// Scripting for System Administration
// Based on Ministry of Education Blueprint (1 Question: Evaluate)
// File Path: FocusAreaOfExitExam/network-system-administration/chapter4.js
// ===============================

window.focusAreaNetworkAdminChapter4 = {
    title: "Chapter 4: Scripting for System Administration",
    
    // Blueprint alignment: 1 question (Evaluate)
    blueprint: {
        totalQuestions: 1,
        cognitiveLevels: {
            evaluate: 1
        },
        topics: [
            "Shell scripting fundamentals",
            "Automation of administrative tasks",
            "Scripting for user management",
            "Scripting for backup and monitoring",
            "Task scheduling (cron, Task Scheduler)",
            "Script evaluation and optimization"
        ]
    },

    learningObjectives: [
        "Evaluate different scripting approaches for system administration tasks",
        "Design scripts to automate common administrative functions",
        "Analyze existing scripts for efficiency and security issues",
        "Assess the appropriateness of scripting solutions for given scenarios",
        "Compare scripting languages for different administration contexts",
        "Evaluate the effectiveness of automated vs manual administration"
    ],

    sections: [
        {
            title: "4.1 Introduction to Scripting for Administration",
            content: `
                <h4>Why Scripting for System Administration?</h4>
                <p>Scripting allows system administrators to automate repetitive tasks, ensure consistency, reduce human error, and manage systems at scale.</p>
                
                <div class="key-points-box">
                    <p><strong>🔑 Key Principle:</strong> Automation of repetitive tasks is a key principle of system administration to improve efficiency, reduce human error, and ensure consistency.</p>
                </div>
                
                <h4>Benefits of Scripting</h4>
                <ul>
                    <li><strong>Efficiency:</strong> Tasks that take hours manually can run in seconds</li>
                    <li><strong>Consistency:</strong> Same process every time, no human variation</li>
                    <li><strong>Accuracy:</strong> Eliminates typos and manual errors</li>
                    <li><strong>Scalability:</strong> Easily handle growing number of systems</li>
                    <li><strong>Documentation:</strong> Script itself documents the process</li>
                </ul>
                
                <h4>Shell (Command Interpreter)</h4>
                <p>The primary function of a shell in UNIX/Linux is <strong>interpreting and executing user commands</strong>.</p>
                
                <div class="key-points-box">
                    <p><strong>🔑 Important:</strong> The shell's primary function is to interpret and execute commands, whether entered interactively or from a script file.</p>
                </div>
            `,
            keyPoints: [
                "Scripting automates repetitive tasks",
                "Benefits: Efficiency, Consistency, Accuracy, Scalability, Documentation",
                "Shell interprets and executes commands"
            ]
        },

        {
            title: "4.2 Scripting Languages Comparison",
            content: `
                <h4>Common Scripting Languages for System Administration</h4>
                
                <table>
                    <tr>
                        <th>Language</th>
                        <th>Platform</th>
                        <th>Best For</th>
                    </tr>
                    <tr>
                        <td><strong>Bash/Shell</strong></td>
                        <td>Linux/Unix</td>
                        <td>File operations, process management, command execution</td>
                    </tr>
                    <tr>
                        <td><strong>PowerShell</strong></td>
                        <td>Windows</td>
                        <td>System administration, Active Directory, Exchange</td>
                    </tr>
                    <tr>
                        <td><strong>Python</strong></td>
                        <td>Cross-platform</td>
                        <td>Complex automation, API integration, data processing</td>
                    </tr>
                </table>
                
                <h4>Script Components</h4>
                <ul>
                    <li><strong>Shebang line:</strong> #!/bin/bash (specifies interpreter)</li>
                    <li><strong>Comments:</strong> # for documentation</li>
                    <li><strong>Variables:</strong> Store data (name="value")</li>
                    <li><strong>Conditionals:</strong> if/then/else for decision making</li>
                    <li><strong>Loops:</strong> for, while for repetition</li>
                    <li><strong>Error handling:</strong> Check exit codes, trap errors</li>
                </ul>
            `,
            keyPoints: [
                "Bash: Linux file operations, simple automation",
                "PowerShell: Windows administration, Active Directory",
                "Python: Cross-platform, complex automation, API integration",
                "Script components: shebang, variables, conditionals, loops"
            ]
        },

        {
            title: "4.3 User Management Scripts",
            content: `
                <h4>Automating User Management</h4>
                <p>User management is one of the most common tasks for system administrators. Scripting can dramatically simplify creating, modifying, and deleting user accounts in bulk.</p>
                
                <h4>Common User Management Tasks to Automate</h4>
                <ul>
                    <li>Bulk user creation from CSV file</li>
                    <li>Password resets for multiple users</li>
                    <li>Adding users to groups</li>
                    <li>Disabling inactive accounts</li>
                    <li>Home directory setup and permissions</li>
                </ul>
                
                <h4>Best Practices for User Management Scripts</h4>
                <ul>
                    <li>Always check if user exists before creating</li>
                    <li>Include error handling and logging</li>
                    <li>Exclude system accounts (UID < 1000)</li>
                    <li>Add confirmation prompts for destructive actions</li>
                    <li>Include dry-run option for testing</li>
                </ul>
            `,
            keyPoints: [
                "User management scripts automate creation, password reset, group membership",
                "Always include error handling and logging",
                "Check for existing users before creating",
                "Exclude system accounts (UID < 1000)",
                "Add confirmation prompts and dry-run options"
            ]
        },

        {
            title: "4.4 Backup and Monitoring Scripts",
            content: `
                <h4>Automating Backups</h4>
                <p>Backup scripts ensure data is regularly and consistently backed up without manual intervention.</p>
                
                <h4>Backup Script Considerations</h4>
                <ul>
                    <li><strong>What to back up:</strong> Critical files, databases, configurations</li>
                    <li><strong>Where to back up:</strong> Local, network, cloud storage</li>
                    <li><strong>Backup type:</strong> Full, incremental, differential</li>
                    <li><strong>Retention policy:</strong> How long to keep backups</li>
                    <li><strong>Verification:</strong> Confirm backups are usable</li>
                    <li><strong>Notification:</strong> Alert on success/failure</li>
                </ul>
                
                <h4>Task Scheduling</h4>
                <ul>
                    <li><strong>cron (Linux):</strong> minute hour day month weekday command</li>
                    <li><strong>Task Scheduler (Windows):</strong> GUI and command-line tool</li>
                    <li><strong>systemd timers:</strong> Modern Linux alternative</li>
                </ul>
                
                <div class="key-points-box">
                    <p><strong>🔑 Cron format:</strong> <code>0 2 * * * /script.sh</code> runs daily at 2 AM</p>
                </div>
            `,
            keyPoints: [
                "Backup scripts need: date-stamped files, error checking, verification",
                "Include retention policy to prevent disk overflow",
                "Always verify backups can be restored",
                "Use cron (Linux) or Task Scheduler (Windows) for automation",
                "Alert on failures, not just successes"
            ]
        },

        {
            title: "4.5 Script Evaluation Criteria",
            content: `
                <h4>Evaluating Script Quality</h4>
                
                <table>
                    <tr>
                        <th>Criteria</th>
                        <th>What to Look For</th>
                    </tr>
                    <tr>
                        <td><strong>Error Handling</strong></td>
                        <td>Checks for failures, graceful exit, exit codes</td>
                    </tr>
                    <tr>
                        <td><strong>Logging</strong></td>
                        <td>Records actions with timestamps, results</td>
                    </tr>
                    <tr>
                        <td><strong>Input Validation</strong></td>
                        <td>Validates user input before using</td>
                    </tr>
                    <tr>
                        <td><strong>Idempotency</strong></td>
                        <td>Safe to run multiple times (checks if action already done)</td>
                    </tr>
                    <tr>
                        <td><strong>Security</strong></td>
                        <td>No hardcoded passwords, least privilege, secure temp files</td>
                    </tr>
                    <tr>
                        <td><strong>Documentation</strong></td>
                        <td>Clear comments, usage help, configuration separated</td>
                    </tr>
                </table>
                
                <div class="warning-box">
                    <p><strong>⚠️ Common Mistake:</strong> Hardcoding passwords in scripts is a major security risk.</p>
                </div>
                
                <h4>Script Evaluation Checklist</h4>
                <ul>
                    <li>☐ Does it handle errors gracefully?</li>
                    <li>☐ Does it check prerequisites before running?</li>
                    <li>☐ Is it idempotent (safe to run multiple times)?</li>
                    <li>☐ Are there hardcoded credentials?</li>
                    <li>☐ Does it validate all input?</li>
                    <li>☐ Does it run with least privilege?</li>
                    <li>☐ Does it log adequately?</li>
                    <li>☐ Does it notify on failures?</li>
                </ul>
            `,
            keyPoints: [
                "Evaluate: Error handling, logging, input validation, idempotency, security",
                "Never hardcode passwords",
                "Scripts should be idempotent (safe to run multiple times)",
                "Check prerequisites before running",
                "Use least privilege principle"
            ]
        }
    ],

    summary: `
        <h3>Chapter 4 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Why Scripting:</strong> Automates repetitive tasks, ensures consistency, reduces errors, scales to many systems</li>
            <li><strong>Common Languages:</strong> Bash (Linux), PowerShell (Windows), Python (cross-platform)</li>
            <li><strong>Script Components:</strong> Shebang, variables, conditionals, loops, error handling</li>
            <li><strong>User Management:</strong> Automate creation, password reset, group membership with error checking</li>
            <li><strong>Backup Scripts:</strong> Include date stamps, verification, retention policy, notifications</li>
            <li><strong>Scheduling:</strong> cron (Linux), Task Scheduler (Windows)</li>
            <li><strong>Evaluation Criteria:</strong> Error handling, logging, idempotency, security, documentation</li>
            <li><strong>Never hardcode passwords</strong> in scripts</li>
        </ul>
    `,

    keyPoints: [
        "Scripting automates repetitive tasks and ensures consistency",
        "Bash (Linux), PowerShell (Windows), Python (cross-platform) are main languages",
        "Always include error handling, logging, and input validation",
        "Never hardcode passwords in scripts",
        "Make scripts idempotent - safe to run multiple times",
        "Use cron (Linux) or Task Scheduler (Windows) for automation",
        "Test backups by restoring, not just creating"
    ],

    reviewQuestions: [
        {
            question: "What are the benefits of scripting for system administration?",
            answer: "Efficiency (faster task completion), Consistency (same process every time), Accuracy (reduces human error), Scalability (works for many systems), and Documentation (script itself documents the process)."
        },
        {
            question: "What is the primary function of a shell in UNIX/Linux?",
            answer: "The primary function of a shell is interpreting and executing user commands, whether entered interactively or from a script file."
        },
        {
            question: "What should be included in a good backup script?",
            answer: "Date-stamped backup files, error checking, verification (checksums), retention policy (cleanup old backups), logging with timestamps, and notifications on success/failure."
        },
        {
            question: "Why should you never hardcode passwords in scripts?",
            answer: "Hardcoded passwords are a security risk because anyone who can read the script gains access to the password. Use environment variables, secure vaults, or interactive prompts instead."
        },
        {
            question: "What does idempotent mean in scripting?",
            answer: "An idempotent script produces the same result whether run once or multiple times. It checks if an action is already done before attempting it, preventing duplicate changes or errors."
        }
    ],

    quickTips: [
        "Automation = key principle",
        "Shell interprets commands",
        "Bash: Linux, PowerShell: Windows, Python: cross-platform",
        "Always check exit codes ($?)",
        "Log everything with timestamps",
        "Never hardcode passwords",
        "Make scripts idempotent",
        "Include dry-run option for testing",
        "Test backups by restoring",
        "Cron format: minute hour day month weekday"
    ],

    commonMistakes: [
        "❌ No error checking in scripts",
        "❌ Hardcoding passwords or credentials",
        "❌ Not validating user input",
        "❌ Overwriting previous backups (no versioning)",
        "❌ No logging - can't tell if script ran",
        "❌ Using root when not needed",
        "❌ Not checking if required tools exist",
        "❌ Scripts that aren't idempotent"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 4:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>1 question</strong> at the <strong>Evaluate</strong> level.</p>
        
        <h4>What "Evaluate" Means:</h4>
        <p>You need to make judgments based on criteria, defend opinions, and assess the value or effectiveness of different approaches.</p>
        
        <h4>Expected Question Types:</h4>
        <ol>
            <li><strong>Script Evaluation:</strong> Given a script, evaluate its quality, identify issues, and suggest improvements.</li>
            <li><strong>Tool Selection:</strong> Given a task and environment, evaluate which scripting approach would be most appropriate.</li>
        </ol>
        
        <h4>Evaluation Criteria to Apply:</h4>
        <ul>
            <li><strong>Effectiveness:</strong> Does it solve the problem correctly?</li>
            <li><strong>Reliability:</strong> Does it handle errors? Is it idempotent?</li>
            <li><strong>Security:</strong> Are there vulnerabilities? Credentials exposed?</li>
            <li><strong>Maintainability:</strong> Is it well-documented? Easy to modify?</li>
        </ul>
        
        <h4>Sample Evaluate Question:</h4>
        <div style="background:#f8f9fa; padding:15px; border-radius:8px;">
            <p><strong>Question:</strong> A junior administrator wrote this backup script. Evaluate it and suggest improvements.</p>
            <pre>
#!/bin/bash
tar -czf /backup/home.tar.gz /home
echo "Backup done" > /backup/log.txt
            </pre>
            <p><strong>Issues:</strong> No error checking, overwrites previous backup, no verification, minimal logging, no retention policy</p>
            <p><strong>Improvements:</strong> Add date stamp, check exit codes, create checksum, implement log rotation, add notifications</p>
        </div>
    `
};