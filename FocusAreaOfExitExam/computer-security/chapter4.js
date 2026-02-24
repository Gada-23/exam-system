// ===============================
// FOCUS AREA: COMPUTER SECURITY - CHAPTER 4
// Database Security
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaComputerSecurityChapter4 = {
    title: "Chapter 4: Database Security",
    
    // Blueprint alignment: 2 questions (Apply, Analyze)
    blueprint: {
        totalQuestions: 2,
        cognitiveLevels: {
            apply: 1,
            analyze: 1
        },
        topics: [
            "Security requirements for database security",
            "Database reliability and integrity",
            "Secrecy and confidentiality in databases",
            "Inference control",
            "Multi-level databases"
        ]
    },

    learningObjectives: [
        "Understand security requirements for database systems",
        "Explain techniques for ensuring database reliability and integrity",
        "Describe methods for maintaining database secrecy",
        "Understand inference control and how to prevent inference attacks",
        "Analyze multi-level database security models",
        "Apply database security techniques to real-world scenarios"
    ],

    sections: [
        {
            title: "4.1 Introduction to Database Security",
            content: `
                <h4>What is Database Security?</h4>
                <p>Database security refers to the collective measures used to protect databases from unauthorized access, misuse, theft, or damage. It encompasses confidentiality, integrity, and availability of database information.</p>
                
                <h4>Why Database Security is Critical:</h4>
                <ul>
                    <li><strong>Sensitive data:</strong> Databases store personal, financial, medical, and proprietary information</li>
                    <li><strong>Centralized storage:</strong> Databases concentrate valuable data in one place</li>
                    <li><strong>Regulatory compliance:</strong> Laws require protection of certain data (GDPR, HIPAA, etc.)</li>
                    <li><strong>Business continuity:</strong> Database downtime can halt operations</li>
                    <li><strong>Reputation:</strong> Data breaches damage trust and brand value</li>
                </ul>
                
                <h4>Database Security Requirements:</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Requirement</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Threats</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Secrecy (Confidentiality)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Data should not be disclosed to unauthorized users</td>
                        <td style="padding:8px; border:1px solid #ddd;">SQL injection, unauthorized access, inference</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Integrity</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Data should be accurate and protected from unauthorized modification</td>
                        <td style="padding:8px; border:1px solid #ddd;">Unauthorized updates, corruption, malware</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Availability</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Data should be accessible when needed</td>
                        <td style="padding:8px; border:1px solid #ddd;">DoS attacks, hardware failure, corruption</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Reliability</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">System should function correctly and consistently</td>
                        <td style="padding:8px; border:1px solid #ddd;">Software bugs, transaction errors</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Database security protects confidentiality, integrity, and availability",
                "Databases are high-value targets because they centralize sensitive data",
                "Key requirements: secrecy, integrity, availability, reliability",
                "Threats include SQL injection, unauthorized access, inference, DoS"
            ]
        },

        {
            title: "4.2 Database Reliability and Integrity",
            content: `
                <h4>What is Database Integrity?</h4>
                <p>Database integrity ensures that data is accurate, consistent, and protected from unauthorized or incorrect modification. It maintains the correctness and trustworthiness of data throughout its lifecycle.</p>
                
                <h4>Types of Integrity:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Integrity Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Entity Integrity</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Each row must have a unique identifier (primary key)</td>
                        <td style="padding:8px; border:1px solid #ddd;">No two employees have same ID</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Referential Integrity</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Foreign keys must reference existing rows</td>
                        <td style="padding:8px; border:1px solid #ddd;">Cannot have an order for a non-existent customer</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Domain Integrity</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Data must fall within defined ranges or types</td>
                        <td style="padding:8px; border:1px solid #ddd;">Age must be positive integer</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>User-Defined Integrity</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Business rules specific to application</td>
                        <td style="padding:8px; border:1px solid #ddd;">Salary cannot exceed manager's salary</td>
                    </tr>
                </table>
                
                <h4>Ensuring Database Reliability:</h4>
                
                <h4>4.2.1 Transactions and ACID Properties</h4>
                <p>A transaction is a unit of work that must be executed completely or not at all. ACID properties ensure reliability:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Property</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Atomicity</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Transaction is all-or-nothing; if any part fails, entire transaction rolls back</td>
                        <td style="padding:8px; border:1px solid #ddd;">Money transfer: both debit and credit must succeed together</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Consistency</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Transaction brings database from one valid state to another</td>
                        <td style="padding:8px; border:1px solid #ddd;">All constraints satisfied before and after</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Isolation</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Concurrent transactions don't interfere with each other</td>
                        <td style="padding:8px; border:1px solid #ddd;">Two withdrawals from same account appear sequential</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Durability</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Once committed, changes persist even after system failure</td>
                        <td style="padding:8px; border:1px solid #ddd;">Data survives power outage</td>
                    </tr>
                </table>
                
                <div class="key-points-box" style="background:#e8f0f5; padding:20px; border-radius:8px;">
                    <h5><i class="fas fa-check-circle" style="color:#2772a0;"></i> ACID Mnemonic: ACI-D</h5>
                    <p><strong>A</strong>tomicity - All or nothing<br>
                    <strong>C</strong>onsistency - Valid states only<br>
                    <strong>I</strong>solation - Transactions don't interfere<br>
                    <strong>D</strong>urability - Changes persist</p>
                </div>
                
                <h4>4.2.2 Backup and Recovery</h4>
                <ul>
                    <li><strong>Full backup:</strong> Complete copy of database</li>
                    <li><strong>Incremental backup:</strong> Only data changed since last backup</li>
                    <li><strong>Differential backup:</strong> All changes since last full backup</li>
                    <li><strong>Transaction log:</strong> Records all changes for point-in-time recovery</li>
                </ul>
                
                <h4>4.2.3 Concurrency Control</h4>
                <ul>
                    <li><strong>Locking:</strong> Prevent simultaneous conflicting operations</li>
                    <li><strong>Timestamp ordering:</strong> Ensure transactions execute in chronological order</li>
                    <li><strong>Multiversion concurrency:</strong> Keep multiple versions to avoid locks</li>
                </ul>
                
                <h4>4.2.4 Integrity Constraints</h4>
                <p>Database-enforced rules that maintain data correctness:</p>
                <ul>
                    <li><strong>PRIMARY KEY:</strong> Unique identifier, not null</li>
                    <li><strong>FOREIGN KEY:</strong> References valid row in another table</li>
                    <li><strong>UNIQUE:</strong> No duplicate values</li>
                    <li><strong>NOT NULL:</strong> Column must have value</li>
                    <li><strong>CHECK:</strong> Custom validation rules</li>
                    <li><strong>DEFAULT:</strong> Default value if not specified</li>
                </ul>
                
                <h4>SQL Example of Integrity Constraints:</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
CREATE TABLE employees (
    emp_id INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INTEGER CHECK (age >= 18),
    salary DECIMAL CHECK (salary > 0),
    dept_id INTEGER REFERENCES departments(dept_id)
);
                </pre>
            `,
            keyPoints: [
                "Entity integrity: unique primary keys",
                "Referential integrity: valid foreign keys",
                "Domain integrity: valid data types and ranges",
                "ACID: Atomicity, Consistency, Isolation, Durability",
                "Backups protect against data loss",
                "Integrity constraints enforce data correctness"
            ]
        },

        {
            title: "4.3 Database Secrecy and Access Control",
            content: `
                <h4>What is Database Secrecy?</h4>
                <p>Database secrecy (confidentiality) ensures that only authorized users can access sensitive data. It prevents unauthorized disclosure of information.</p>
                
                <h4>Access Control Mechanisms:</h4>
                
                <h4>4.3.1 Discretionary Access Control (DAC) in Databases</h4>
                <p>Database owners grant and revoke privileges to users. In SQL, this is done with GRANT and REVOKE commands.</p>
                
                <h4>SQL Privileges:</h4>
                <ul>
                    <li><strong>SELECT:</strong> Read data</li>
                    <li><strong>INSERT:</strong> Add new rows</li>
                    <li><strong>UPDATE:</strong> Modify existing data</li>
                    <li><strong>DELETE:</strong> Remove rows</li>
                    <li><strong>REFERENCES:</strong> Create foreign key references</li>
                    <li><strong>ALL PRIVILEGES:</strong> All of the above</li>
                </ul>
                
                <h4>GRANT Statement Syntax:</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
-- Grant specific privileges
GRANT SELECT, INSERT ON employees TO user1;

-- Grant with GRANT OPTION (user can grant to others)
GRANT SELECT ON employees TO user2 WITH GRANT OPTION;

-- Grant to all users
GRANT SELECT ON employees TO PUBLIC;
                </pre>
                
                <h4>REVOKE Statement Syntax:</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
-- Revoke privileges
REVOKE INSERT ON employees FROM user1;

-- Revoke with CASCADE (also revokes privileges granted by this user)
REVOKE SELECT ON employees FROM user2 CASCADE;
                </pre>
                
                <h4>4.3.2 Mandatory Access Control (MAC) in Databases</h4>
                <p>System-enforced access based on security classifications. Each data item (row/column) has a classification label, and each user has a clearance level.</p>
                
                <h4>Security Levels Example:</h4>
                <ul>
                    <li><strong>Top Secret (TS):</strong> Highest classification</li>
                    <li><strong>Secret (S):</strong> Second level</li>
                    <li><strong>Confidential (C):</strong> Third level</li>
                    <li><strong>Unclassified (U):</strong> Lowest level</li>
                </ul>
                
                <p><strong>Rule:</strong> A user can read data only if their clearance = data classification (no read-up). A user can write data only if their clearance = data classification (no write-down).</p>
                
                <h4>4.3.3 Role-Based Access Control (RBAC)</h4>
                <p>Permissions are assigned to roles, and users are assigned to roles. This simplifies management in large organizations.</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
-- Create roles
CREATE ROLE manager;
CREATE ROLE clerk;

-- Grant privileges to roles
GRANT SELECT, INSERT ON orders TO clerk;
GRANT UPDATE, DELETE ON orders TO manager;

-- Assign users to roles
GRANT manager TO user1;
GRANT clerk TO user2, user3;
                </pre>
                
                <h4>Comparison of Access Control Models:</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Model</th>
                        <th style="padding:10px; border:1px solid #ddd;">Based On</th>
                        <th style="padding:10px; border:1px solid #ddd;">Flexibility</th>
                        <th style="padding:10px; border:1px solid #ddd;">Security</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>DAC</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">User identity</td>
                        <td style="padding:8px; border:1px solid #ddd;">High</td>
                        <td style="padding:8px; border:1px solid #ddd;">Low</td>
                        <td style="padding:8px; border:1px solid #ddd;">SQL GRANT</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>MAC</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Security labels</td>
                        <td style="padding:8px; border:1px solid #ddd;">Low</td>
                        <td style="padding:8px; border:1px solid #ddd;">High</td>
                        <td style="padding:8px; border:1px solid #ddd;">Military databases</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>RBAC</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Roles</td>
                        <td style="padding:8px; border:1px solid #ddd;">Medium</td>
                        <td style="padding:8px; border:1px solid #ddd;">Medium</td>
                        <td style="padding:8px; border:1px solid #ddd;">Enterprise databases</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "DAC: GRANT and REVOKE privileges to users",
                "MAC: security labels and clearance levels",
                "RBAC: permissions assigned to roles, users to roles",
                "WITH GRANT OPTION allows users to grant privileges",
                "REVOKE CASCADE removes dependent privileges",
                "MAC prevents read-up and write-down"
            ]
        },

        {
            title: "4.4 Inference Control",
            content: `
                <h4>What is Inference?</h4>
                <p>Inference is the process of deducing sensitive information from non-sensitive or aggregate data. Even if direct access to sensitive data is denied, users might infer it from what they can see.</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">INFERENCE ATTACK EXAMPLE</p>
                    <p>A user cannot see individual salaries but can see average salary by department. If the user knows there's only one person in the accounting department and sees the average, they can infer that person's exact salary!</p>
                </div>
                
                <h4>Why Inference is Dangerous:</h4>
                <ul>
                    <li>Bypasses direct access controls</li>
                    <li>Uses legitimate queries to derive secrets</li>
                    <li>Hard to detect and prevent</li>
                    <li>Particularly problematic in statistical databases</li>
                </ul>
                
                <h4>Types of Inference Attacks:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Attack Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Aggregate inference</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Deriving individual values from statistics</td>
                        <td style="padding:8px; border:1px solid #ddd;">Average + count reveals sum, possibly individual values</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Correlation inference</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Using relationships between data items</td>
                        <td style="padding:8px; border:1px solid #ddd;">Knowing someone's age and zip code might identify them</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Difference inference</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Comparing results of similar queries</td>
                        <td style="padding:8px; border:1px solid #ddd;">Query with condition A vs condition B reveals difference</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Tracker attack</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Using small query sets to deduce individual records</td>
                        <td style="padding:8px; border:1px solid #ddd;">Queries about small subsets can identify individuals</td>
                    </tr>
                </table>
                
                <h4>Inference Control Techniques:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Technique</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Pros/Cons</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Query set size restriction</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Reject queries that return too few rows</td>
                        <td style="padding:8px; border:1px solid #ddd;">Simple but can be bypassed with multiple queries</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Data perturbation</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Add random noise to results</td>
                        <td style="padding:8px; border:1px solid #ddd;">Preserves privacy but reduces accuracy</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Output suppression</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Hide results that might reveal sensitive info</td>
                        <td style="padding:8px; border:1px solid #ddd;">Effective but can be noticeable</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Cell suppression</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Hide specific cells in statistical tables</td>
                        <td style="padding:8px; border:1px solid #ddd;">Common in census data</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Data swapping</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Swap values between records to preserve statistics but hide individuals</td>
                        <td style="padding:8px; border:1px solid #ddd;">Maintains aggregate accuracy</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>k-anonymity</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Each record indistinguishable from at least k-1 others</td>
                        <td style="padding:8px; border:1px solid #ddd;">Strong privacy protection</td>
                    </tr>
                </table>
                
                <h4>Inference Control in Statistical Databases:</h4>
                <p>Statistical databases allow only aggregate queries (SUM, AVG, COUNT) but not individual records. Inference control is critical here.</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
-- Dangerous sequence of queries:
SELECT AVG(salary) FROM employees WHERE dept = 'Accounting';  -- Returns 75000
SELECT COUNT(*) FROM employees WHERE dept = 'Accounting';     -- Returns 1
-- INFERENCE: The one employee earns 75000!
                </pre>
                
                <h4>Prevention:</h4>
                <ul>
                    <li>Require minimum query set size (e.g., no queries on <5 records)</li>
                    <li>Add noise to results</li>
                    <li>Track query patterns to detect inference attempts</li>
                    <li>Suppress results that could reveal individual data</li>
                </ul>
            `,
            keyPoints: [
                "Inference: deducing sensitive info from non-sensitive data",
                "Aggregate inference uses statistics to derive individual values",
                "Tracker attacks use small query sets",
                "Query set size restriction prevents queries on too few rows",
                "Data perturbation adds noise to protect privacy",
                "k-anonymity makes each record indistinguishable from k-1 others"
            ]
        },

        {
            title: "4.5 Multi-Level Databases",
            content: `
                <h4>What are Multi-Level Databases?</h4>
                <p>Multi-level databases store data at different classification levels (e.g., Unclassified, Confidential, Secret, Top Secret) and enforce access based on user clearances. They implement Mandatory Access Control (MAC) at the database level.</p>
                
                <h4>Key Concepts in Multi-Level Databases:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Concept</th>
                        <th style="padding:10px; border:1px solid #ddd;">Definition</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Classification level</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Sensitivity of data (Unclassified < Confidential < Secret < Top Secret)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>User clearance</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Maximum classification a user can access</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Polyinstantiation</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Multiple rows with same key but different classifications</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Cover story</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Lower-classification version of sensitive data</td>
                    </tr>
                </table>
                
                <h4>Multi-Level Security Model:</h4>
                <p>Based on the Bell-LaPadula model, which enforces:</p>
                <ul>
                    <li><strong>No read-up:</strong> User cannot read data at higher classification</li>
                    <li><strong>No write-down:</strong> User cannot write to lower classification (prevents leaking)</li>
                </ul>
                
                <h4>Example of Multi-Level Table:</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">ID</th>
                        <th style="padding:10px; border:1px solid #ddd;">Name</th>
                        <th style="padding:10px; border:1px solid #ddd;">Salary</th>
                        <th style="padding:10px; border:1px solid #ddd;">Classification</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">101</td>
                        <td style="padding:8px; border:1px solid #ddd;">John Smith</td>
                        <td style="padding:8px; border:1px solid #ddd;">75000</td>
                        <td style="padding:8px; border:1px solid #ddd;">Secret</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">101</td>
                        <td style="padding:8px; border:1px solid #ddd;">John Smith</td>
                        <td style="padding:8px; border:1px solid #ddd;">65000</td>
                        <td style="padding:8px; border:1px solid #ddd;">Confidential</td>
                    </tr>
                </table>
                <p><em>Note: Same ID appears twice with different salaries at different classifications (polyinstantiation). Secret-cleared users see 75000, Confidential-cleared users see 65000.</em></p>
                
                <h4>Polyinstantiation:</h4>
                <p>Polyinstantiation allows multiple tuples with the same primary key but different security classifications. This prevents inference by hiding the existence of higher-classification data.</p>
                
                <p><strong>Why polyinstantiation is needed:</strong> If a user with lower clearance tries to insert a record that already exists at higher clearance, simply rejecting the insert would reveal that higher-classification data exists. Polyinstantiation allows both to coexist.</p>
                
                <h4>Challenges in Multi-Level Databases:</h4>
                <ul>
                    <li><strong>Performance overhead:</strong> Checking classifications on every access</li>
                    <li><strong>Storage overhead:</strong> Multiple versions of same data</li>
                    <li><strong>Update complexity:</strong> Maintaining consistency across levels</li>
                    <li><strong>Covert channels:</strong> Hidden ways to leak information</li>
                    <li><strong>Trusted computing base:</strong> Must be very small and verified</li>
                </ul>
                
                <h4>Multi-Level Database Architectures:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Architecture</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Separate databases</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Different databases for different levels</td>
                        <td style="padding:8px; border:1px solid #ddd;">Secret DB, Confidential DB</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Separate tables</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Different tables for different levels</td>
                        <td style="padding:8px; border:1px solid #ddd;">employees_secret, employees_conf</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Labeled rows</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Rows have classification labels</td>
                        <td style="padding:8px; border:1px solid #ddd;">Single table with classification column</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Labeled columns</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Columns have classification labels</td>
                        <td style="padding:8px; border:1px solid #ddd;">Different columns at different levels</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Labeled elements</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Each data element has its own label</td>
                        <td style="padding:8px; border:1px solid #ddd;">Most granular, most complex</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Multi-level databases store data at different classification levels",
                "Bell-LaPadula: no read-up, no write-down",
                "Polyinstantiation: multiple rows with same key but different classifications",
                "Prevents inference by hiding existence of higher-level data",
                "Different architectures: separate DBs, tables, labeled rows/columns/elements",
                "Challenges: performance, storage, updates, covert channels"
            ]
        },

        {
            title: "4.6 Database Security Threats and Countermeasures",
            content: `
                <h4>Common Database Security Threats:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Threat</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Countermeasures</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>SQL Injection</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Malicious SQL inserted into input</td>
                        <td style="padding:8px; border:1px solid #ddd;">Parameterized queries, input validation, least privilege</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Privilege abuse</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Authorized users misusing access</td>
                        <td style="padding:8px; border:1px solid #ddd;">Auditing, separation of duties, least privilege</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Weak authentication</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Easy-to-guess passwords</td>
                        <td style="padding:8px; border:1px solid #ddd;">Strong password policies, MFA</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Backup exposure</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Unprotected backups</td>
                        <td style="padding:8px; border:1px solid #ddd;">Encrypt backups, secure storage</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Inference attacks</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Deducing sensitive data</td>
                        <td style="padding:8px; border:1px solid #ddd;">Query restrictions, perturbation, k-anonymity</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Denial of Service</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Overwhelming database resources</td>
                        <td style="padding:8px; border:1px solid #ddd;">Rate limiting, resource controls, redundancy</td>
                    </tr>
                </table>
                
                <h4>Defense in Depth for Databases:</h4>
                <ol>
                    <li><strong>Network security:</strong> Firewalls, VPNs, network segmentation</li>
                    <li><strong>Host security:</strong> Hardened OS, patching, antivirus</li>
                    <li><strong>Database access control:</strong> Authentication, authorization, encryption</li>
                    <li><strong>Application security:</strong> Secure coding, input validation</li>
                    <li><strong>Data security:</strong> Encryption at rest, encryption in transit</li>
                    <li><strong>Auditing and monitoring:</strong> Log analysis, intrusion detection</li>
                    <li><strong>Backup and recovery:</strong> Regular backups, disaster recovery</li>
                </ol>
                
                <h4>Database Encryption:</h4>
                <ul>
                    <li><strong>Transparent Data Encryption (TDE):</strong> Encrypts entire database files</li>
                    <li><strong>Column-level encryption:</strong> Encrypts specific sensitive columns</li>
                    <li><strong>Application-level encryption:</strong> Data encrypted before sent to database</li>
                </ul>
                
                <h4>Database Auditing:</h4>
                <p>Auditing tracks who did what, when. Important for:</p>
                <ul>
                    <li>Detecting unauthorized access</li>
                    <li>Forensic investigation after breaches</li>
                    <li>Compliance with regulations</li>
                    <li>Accountability</li>
                </ul>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
-- Enable audit logging
AUDIT SELECT, INSERT, UPDATE, DELETE ON employees BY ACCESS;
                </pre>
            `,
            keyPoints: [
                "SQL injection is a top database threat",
                "Defense in depth: multiple security layers",
                "Encryption protects data at rest and in transit",
                "Auditing provides accountability and detection",
                "Backups must be protected",
                "Least privilege limits damage from abuse"
            ]
        },

        {
            title: "4.7 Analyzing Database Security (Blueprint Focus)",
            content: `
                <h4>Blueprint Focus: Apply and Analyze Database Security</h4>
                
                <p>According to the blueprint, you need to:</p>
                <ul>
                    <li><strong>Apply:</strong> Implement database security techniques</li>
                    <li><strong>Analyze:</strong> Evaluate security requirements and solutions</li>
                </ul>
                
                <h4>Apply Questions - What You Might Be Asked:</h4>
                <ul>
                    <li>Given a scenario, write appropriate GRANT statements</li>
                    <li>Identify SQL injection vulnerabilities in code</li>
                    <li>Propose backup and recovery strategies</li>
                    <li>Design access control for a given organization</li>
                </ul>
                
                <h4>Analyze Questions - What You Might Be Asked:</h4>
                <ul>
                    <li>Analyze inference vulnerabilities in a statistical database</li>
                    <li>Compare DAC, MAC, and RBAC for a specific use case</li>
                    <li>Evaluate multi-level database architectures</li>
                    <li>Assess trade-offs in inference control techniques</li>
                </ul>
                
                <h4>Practice Apply Scenarios:</h4>
                
                <p><strong>Scenario 1:</strong> You have a database with tables: employees (emp_id, name, salary, dept_id) and departments (dept_id, dept_name, budget). Write SQL GRANT statements so that:</p>
                <ul>
                    <li>Managers can SELECT and UPDATE all employee data</li>
                    <li>Clerks can SELECT employee names but not salaries</li>
                    <li>HR can INSERT and UPDATE employees but not departments</li>
                </ul>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
-- Create roles
CREATE ROLE manager;
CREATE ROLE clerk;
CREATE ROLE hr;

-- Grant permissions
GRANT SELECT, UPDATE ON employees TO manager;
GRANT SELECT ON departments TO manager;

GRANT SELECT (emp_id, name, dept_id) ON employees TO clerk;

GRANT INSERT, UPDATE ON employees TO hr;
GRANT SELECT ON departments TO hr;
                </pre>
                
                <p><strong>Scenario 2:</strong> Identify SQL injection vulnerabilities in this code:</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
$user = $_POST['username'];
$pass = $_POST['password'];
$query = "SELECT * FROM users WHERE username = '$user' AND password = '$pass'";
                </pre>
                
                <p><strong>Vulnerability:</strong> User input directly concatenated into SQL. Fix using parameterized queries:</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
$stmt = $conn->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
$stmt->bind_param("ss", $user, $pass);
$stmt->execute();
                </pre>
                
                <h4>Practice Analysis Scenarios:</h4>
                
                <p><strong>Scenario 1:</strong> A medical research database allows queries like "SELECT COUNT(*) FROM patients WHERE disease = 'X'". Researchers can also query average age, etc. Analyze the inference risks and propose countermeasures.</p>
                
                <p><strong>Analysis:</strong> If a disease is rare (only 1 patient), COUNT=1 reveals existence. Average age then reveals exact age of that patient. Combined with other attributes, patient could be identified. Countermeasures: require minimum query set size (e.g., >5 patients), add noise to results, suppress results for small sets, use k-anonymity.</p>
                
                <p><strong>Scenario 2:</strong> A company needs to store employee data at multiple classification levels. Some employees work on classified projects, others don't. Analyze the advantages and disadvantages of using polyinstantiation versus separate tables.</p>
                
                <p><strong>Analysis:</strong> Separate tables: simpler to implement, better performance, but may reveal existence of classified data (if a table exists, users know there's classified info). Polyinstantiation: hides existence of classified data, but more complex, requires careful consistency management, more storage. For high security where existence itself is secret, polyinstantiation is better. For moderate security, separate tables may suffice.</p>
            `,
            keyPoints: [
                "Apply: implement security controls (GRANT statements, secure coding)",
                "Analyze: evaluate risks, compare approaches, assess trade-offs",
                "SQL injection prevention: parameterized queries, not string concatenation",
                "Inference analysis: consider what can be deduced from allowed queries",
                "Multi-level database analysis: weigh polyinstantiation vs separate tables"
            ]
        }
    ],

    summary: `
        <h3>Chapter 4 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Database integrity:</strong> Entity, referential, domain integrity; ACID properties (Atomicity, Consistency, Isolation, Durability)</li>
            <li><strong>Access control:</strong> DAC (GRANT/REVOKE), MAC (security labels), RBAC (roles)</li>
            <li><strong>Inference control:</strong> Prevent deduction of sensitive data from aggregates; techniques include query set restriction, data perturbation, k-anonymity</li>
            <li><strong>Multi-level databases:</strong> Store data at different classifications; enforce no read-up, no write-down; use polyinstantiation to hide existence</li>
            <li><strong>Threats:</strong> SQL injection, privilege abuse, inference attacks, backup exposure</li>
            <li><strong>Countermeasures:</strong> Parameterized queries, least privilege, encryption, auditing, defense in depth</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "Explain the ACID properties and why they are important for database reliability.",
            answer: "Atomicity (all-or-nothing), Consistency (valid states), Isolation (no interference), Durability (persist after commit). They ensure transactions are processed reliably."
        },
        {
            question: "What is SQL injection and how can it be prevented?",
            answer: "SQL injection inserts malicious SQL into input. Prevent with parameterized queries, input validation, and least privilege."
        },
        {
            question: "Compare DAC, MAC, and RBAC in databases.",
            answer: "DAC: GRANT/REVOKE based on identity. MAC: security labels, no read-up/write-down. RBAC: permissions to roles, users to roles."
        },
        {
            question: "What is inference control and why is it needed?",
            answer: "Inference control prevents deducing sensitive data from non-sensitive queries. Needed because aggregates can reveal individual values."
        },
        {
            question: "Explain polyinstantiation in multi-level databases.",
            answer: "Multiple rows with same key but different classifications, allowing lower-cleared users to see a different version while hiding existence of higher-level data."
        },
        {
            question: "Write GRANT statements to give SELECT on employees to user1 and UPDATE with grant option to user2.",
            answer: "GRANT SELECT ON employees TO user1; GRANT UPDATE ON employees TO user2 WITH GRANT OPTION;"
        }
    ],

    quickTips: [
        "ACID = Atomicity, Consistency, Isolation, Durability",
        "SQL injection: use parameterized queries, NOT string concatenation",
        "GRANT WITH GRANT OPTION allows privilege propagation",
        "Inference attacks use aggregate data to deduce secrets",
        "Polyinstantiation hides existence of classified data",
        "k-anonymity: each record indistinguishable from k-1 others"
    ],

    commonMistakes: [
        "? Using string concatenation for SQL queries - leads to SQL injection",
        "? Forgetting to revoke privileges WITH GRANT OPTION when removing users",
        "? Thinking aggregate queries are always safe - inference attacks!",
        "? Assuming separate tables for different levels hides classified data - table existence itself reveals information",
        "? Neglecting backup security - backups contain all data"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 4:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>2 questions</strong> distributed as:</p>
        <ul>
            <li><strong>1 Apply question:</strong> Implementing database security (GRANT statements, fixing vulnerabilities, designing access control)</li>
            <li><strong>1 Analyze question:</strong> Evaluating inference risks, comparing multi-level database approaches, assessing security requirements</li>
        </ul>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>Integrity and reliability:</strong> ACID properties, constraints, backups</li>
            <li><strong>Access control:</strong> GRANT/REVOKE syntax, roles, MAC vs DAC vs RBAC</li>
            <li><strong>Inference control:</strong> Attack types, prevention techniques</li>
            <li><strong>Multi-level databases:</strong> Polyinstantiation, Bell-LaPadula, architectures</li>
            <li><strong>SQL injection:</strong> Detection and prevention</li>
        </ol>
        
        <h4>Practice Apply Questions:</h4>
        <ul>
            <li>Write GRANT statements for a given scenario</li>
            <li>Identify and fix SQL injection vulnerabilities</li>
            <li>Design a backup strategy</li>
        </ul>
        
        <h4>Practice Analyze Questions:</h4>
        <ul>
            <li>Analyze inference risks in a statistical database</li>
            <li>Compare polyinstantiation vs separate tables for multi-level security</li>
            <li>Evaluate access control models for different scenarios</li>
        </ul>
    `
};