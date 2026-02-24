// ===============================
// FOCUS AREA: ADVANCED DATABASE SYSTEMS - CHAPTER 3
// Distributed Database Design
// Based on Ministry of Education Blueprint (1 Apply, 1 Create)
// File Path: FocusAreaOfExitExam/advanced-database-systems/chapter3.js
// ===============================

window.focusAreaAdvancedDBChapter3 = {
    title: "Chapter 3: Distributed Database Design",
    
    description: "Comprehensive coverage of distributed database concepts, fragmentation, replication, allocation, and design of homogeneous and heterogeneous distributed systems.",
    
    blueprint: {
        totalQuestions: 2,
        cognitiveLevels: {
            apply: 1,
            create: 1
        },
        topics: [
            "Distributed database concepts and architecture",
            "Data fragmentation (horizontal, vertical, hybrid)",
            "Data replication strategies",
            "Data allocation and distribution",
            "Homogeneous vs heterogeneous distributed databases",
            "Distributed query processing",
            "Distributed transaction management",
            "CAP theorem and consistency models"
        ]
    },

    learningObjectives: [
        "Apply fragmentation and replication techniques to distribute data",
        "Design distributed database schemas for homogeneous and heterogeneous environments",
        "Create allocation strategies based on access patterns",
        "Evaluate trade-offs in distributed database design",
        "Analyze consistency requirements and choose appropriate models",
        "Design distributed query processing strategies"
    ],

    sections: [
        {
            title: "3.1 Distributed Database Concepts (Understand)",
            content: `
                <h4>What is a Distributed Database?</h4>
                <p>A distributed database is a collection of multiple, logically interrelated databases distributed across a computer network. A distributed database management system (DDBMS) manages the distributed database and makes the distribution transparent to users.</p>
                
                <div class="key-points-box">
                    <p><strong>🔑 Key Point:</strong> In a distributed database, data is stored across multiple physical locations but appears as a single logical database to users.</p>
                </div>
                
                <h4>Distributed Database Architecture</h4>
                
                <div style="text-align:center; margin:20px 0;">
                    <pre style="background:#f4f4f4; padding:10px; display:inline-block;">
        Global Schema (Conceptual)
                 ↓
    Fragmentation & Allocation
                 ↓
    Site 1      Site 2      Site 3
    Local DB    Local DB    Local DB
                    </pre>
                </div>
                
                <h4>Advantages of Distributed Databases</h4>
                <ul>
                    <li><strong>Reliability and availability:</strong> Failure of one site doesn't stop entire system</li>
                    <li><strong>Faster response:</strong> Data closer to users reduces network delay</li>
                    <li><strong>Modular growth:</strong> Add new sites as needed</li>
                    <li><strong>Local autonomy:</strong> Each site can manage its own data</li>
                    <li><strong>Scalability:</strong> Easier to scale out than scale up</li>
                </ul>
                
                <h4>Disadvantages and Challenges</h4>
                <ul>
                    <li><strong>Complexity:</strong> Design, implementation, management more complex</li>
                    <li><strong>Cost:</strong> Network infrastructure, multiple systems</li>
                    <li><strong>Security:</strong> More points of vulnerability</li>
                    <li><strong>Integrity:</strong> Maintaining consistency across sites is hard</li>
                    <li><strong>Concurrency control:</strong> Distributed transactions are complex</li>
                </ul>
                
                <h4>Types of Distributed Databases</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Homogeneous</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">All sites use same DBMS software</td>
                        <td style="padding:8px; border:1px solid #ddd;">Oracle at all sites</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Heterogeneous</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Different DBMS at different sites</td>
                        <td style="padding:8px; border:1px solid #ddd;">Oracle at HQ, MySQL at branches</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Federated</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Autonomous databases with partial integration</td>
                        <td style="padding:8px; border:1px solid #ddd;">Legacy systems integrated via middleware</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Distributed database = multiple databases across network appearing as one",
                "Advantages: reliability, speed, scalability, local autonomy",
                "Challenges: complexity, cost, consistency, security",
                "Homogeneous: same DBMS everywhere",
                "Heterogeneous: different DBMS types"
            ]
        },

        {
            title: "3.2 Data Fragmentation (Apply Level)",
            content: `
                <h4>Blueprint Focus: Apply - Fragmenting Relations</h4>
                
                <h4>What is Fragmentation?</h4>
                <p>Fragmentation is the process of dividing a relation (table) into smaller pieces called fragments. Each fragment is stored at one or more sites based on access patterns.</p>
                
                <h4>Why Fragment?</h4>
                <ul>
                    <li><strong>Locality of reference:</strong> Store data close to where it's used most</li>
                    <li><strong>Parallelism:</strong> Multiple fragments can be accessed in parallel</li>
                    <li><strong>Security:</strong> Sensitive data can be stored separately</li>
                    <li><strong>Efficiency:</strong> Only relevant data transferred for queries</li>
                </ul>
                
                <h4>Types of Fragmentation</h4>
                
                <h5>1. Horizontal Fragmentation</h5>
                <p>Split relation into subsets of rows (tuples). Each fragment contains a subset of rows based on a condition.</p>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
Employee(<u>EmpID</u>, Name, Dept, Salary, Location)

Horizontal fragments:
F1: SELECT * FROM Employee WHERE Dept = 'CS'     (CS department employees)
F2: SELECT * FROM Employee WHERE Dept = 'Math'   (Math department employees)
F3: SELECT * FROM Employee WHERE Dept = 'Physics' (Physics department employees)
                </pre>
                
                <p><strong>Apply Rule:</strong> Horizontal fragmentation condition should be based on predicate that matches access patterns.</p>
                
                <h5>2. Vertical Fragmentation</h5>
                <p>Split relation into subsets of columns (attributes). Each fragment contains a subset of attributes, plus the primary key.</p>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
Employee(<u>EmpID</u>, Name, Dept, Salary, SSN, Address, Phone)

Vertical fragments:
F1: EmpID, Name, Dept                 (basic info)
F2: EmpID, Salary, SSN                 (payroll info)
F3: EmpID, Address, Phone              (contact info)
                </pre>
                
                <div class="key-points-box">
                    <p><strong>🔑 Important:</strong> Primary key must be included in every vertical fragment to allow reconstruction.</p>
                </div>
                
                <h5>3. Mixed (Hybrid) Fragmentation</h5>
                <p>Combine horizontal and vertical fragmentation.</p>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- First vertical: separate sensitive data
-- Then horizontal: by department
F1_V1: EmpID, Name, Dept (CS employees)
F1_V2: EmpID, Name, Dept (Math employees)
F2_V1: EmpID, Salary, SSN (CS employees)
F2_V2: EmpID, Salary, SSN (Math employees)
                </pre>
                
                <h4>Fragmentation Correctness Rules</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Rule</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Check</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Completeness</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">All data from original relation must appear in fragments</td>
                        <td style="padding:8px; border:1px solid #ddd;">Union of fragments = original</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Reconstruction</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Original relation can be reconstructed from fragments</td>
                        <td style="padding:8px; border:1px solid #ddd;">JOIN or UNION reconstructs</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Disjointness</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Fragments should not overlap unnecessarily</td>
                        <td style="padding:8px; border:1px solid #ddd;">Horizontal: rows disjoint, Vertical: attributes disjoint (except PK)</td>
                    </tr>
                </table>
                
                <h4>Apply Exercise: Fragmentation Design</h4>
                
                <p><strong>Scenario:</strong> Bank database with table Account:</p>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
Account(<u>AccountNo</u>, BranchCode, CustomerName, Balance, InterestRate, CustomerAddress, CustomerPhone)
                </pre>
                
                <p><strong>Access patterns:</strong></p>
                <ul>
                    <li>Branch staff frequently query accounts at their own branch</li>
                    <li>Central office needs all account data for reporting</li>
                    <li>Customer service needs customer contact info</li>
                    <li>Interest rate changes affect all accounts</li>
                </ul>
                
                <p><strong>Apply fragmentation:</strong></p>
                
                <h5>Step 1: Horizontal fragmentation by branch</h5>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
F_H1: SELECT * FROM Account WHERE BranchCode = 'B001'
F_H2: SELECT * FROM Account WHERE BranchCode = 'B002'
F_H3: SELECT * FROM Account WHERE BranchCode = 'B003'
                </pre>
                
                <h5>Step 2: Vertical fragmentation for sensitive/contact data</h5>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- Financial data (branch staff need this)
F_V_Finance: AccountNo, BranchCode, CustomerName, Balance, InterestRate

-- Contact data (customer service need this)
F_V_Contact: AccountNo, CustomerAddress, CustomerPhone
                </pre>
                
                <h5>Step 3: Combine (hybrid fragments)</h5>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- For Branch B001 financial data
F_B001_Finance: SELECT AccountNo, BranchCode, CustomerName, Balance, InterestRate 
                FROM Account WHERE BranchCode = 'B001'

-- For Branch B001 contact data
F_B001_Contact: SELECT AccountNo, CustomerAddress, CustomerPhone 
                FROM Account WHERE BranchCode = 'B001'
                </pre>
                
                <p><strong>Check correctness:</strong></p>
                <ul>
                    <li><strong>Completeness:</strong> All data from Account appears in some fragment</li>
                    <li><strong>Reconstruction:</strong> JOIN on AccountNo reconstructs full rows, UNION across branches reconstructs full table</li>
                    <li><strong>Disjointness:</strong> No row appears in multiple horizontal fragments, attributes are separated cleanly</li>
                </ul>
            `,
            keyPoints: [
                "Horizontal fragmentation: split rows (tuples) by condition",
                "Vertical fragmentation: split columns (attributes) with PK in each",
                "Mixed fragmentation: combine both approaches",
                "Completeness: all data in fragments",
                "Reconstruction: can rebuild original",
                "Disjointness: avoid unnecessary overlap"
            ]
        },

        {
            title: "3.3 Data Replication (Apply Level)",
            content: `
                <h4>What is Replication?</h4>
                <p>Replication is the process of storing copies of data fragments at multiple sites. It improves availability, performance, and reliability.</p>
                
                <h4>Replication Strategies</h4>
                
                <h5>1. Full Replication</h5>
                <p>Complete copy of database at every site.</p>
                <ul>
                    <li><strong>Advantages:</strong> Highest availability, fastest reads (local)</li>
                    <li><strong>Disadvantages:</strong> Expensive storage, complex updates</li>
                    <li><strong>Best for:</strong> Small databases, read-heavy workloads</li>
                </ul>
                
                <h5>2. Partial Replication</h5>
                <p>Some fragments replicated, others not. Most common approach.</p>
                <ul>
                    <li><strong>Advantages:</strong> Balance of cost and performance</li>
                    <li><strong>Disadvantages:</strong> Complex to decide what to replicate</li>
                    <li><strong>Best for:</strong> Most real-world distributed systems</li>
                </ul>
                
                <h5>3. No Replication</h5>
                <p>Each fragment stored exactly once.</p>
                <ul>
                    <li><strong>Advantages:</strong> Minimal storage, simple updates</li>
                    <li><strong>Disadvantages:</strong> Single point of failure for each fragment</li>
                    <li><strong>Best for:</strong> Write-heavy workloads, limited storage</li>
                </ul>
                
                <h4>Replication Timing</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Consistency</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Synchronous</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Updates applied to all replicas before commit</td>
                        <td style="padding:8px; border:1px solid #ddd;">Strong consistency (all copies identical)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Asynchronous</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Updates propagated after commit</td>
                        <td style="padding:8px; border:1px solid #ddd;">Eventual consistency (temporary differences)</td>
                    </tr>
                </table>
                
                <h4>Apply Exercise: Replication Strategy</h4>
                
                <p><strong>Scenario:</strong> Global e-commerce company with sites in US, Europe, Asia. Database includes:</p>
                <ul>
                    <li><strong>Products:</strong> 1M items, frequently read, occasionally updated</li>
                    <li><strong>Inventory:</strong> Real-time stock levels, frequently updated</li>
                    <li><strong>Orders:</strong> Customer orders, created in region, rarely accessed elsewhere</li>
                    <li><strong>Customer profiles:</strong> Used globally for recommendations</li>
                </ul>
                
                <p><strong>Apply replication strategy:</strong></p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Data</th>
                        <th style="padding:10px; border:1px solid #ddd;">Replication Strategy</th>
                        <th style="padding:10px; border:1px solid #ddd;">Justification</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Products</td>
                        <td style="padding:8px; border:1px solid #ddd;">Full replication, asynchronous</td>
                        <td style="padding:8px; border:1px solid #ddd;">Read-heavy, small updates, eventual consistency acceptable</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Inventory</td>
                        <td style="padding:8px; border:1px solid #ddd;">No replication (partition by region)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Frequent writes, need strong consistency for stock accuracy</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Orders</td>
                        <td style="padding:8px; border:1px solid #ddd;">No replication (stored locally)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Only accessed in region of origin</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Customer profiles</td>
                        <td style="padding:8px; border:1px solid #ddd;">Full replication, synchronous</td>
                        <td style="padding:8px; border:1px solid #ddd;">Need consistent view for recommendations</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Full replication: copy everywhere (high availability, expensive)",
                "Partial replication: selective copies (balance cost/performance)",
                "No replication: single copy (simple updates, risk)",
                "Synchronous: strong consistency, slower writes",
                "Asynchronous: eventual consistency, faster writes",
                "Replication decisions based on read/write ratio and consistency needs"
            ]
        },

        {
            title: "3.4 Data Allocation (Apply Level)",
            content: `
                <h4>What is Data Allocation?</h4>
                <p>Data allocation determines where to place fragments and replicas across network sites. It's the "where" part of distributed database design.</p>
                
                <h4>Allocation Strategies</h4>
                
                <h5>1. Centralized</h5>
                <p>All data at single site. Not distributed but included for completeness.</p>
                
                <h5>2. Partitioned (No Replication)</h5>
                <p>Each fragment at exactly one site.</p>
                <ul>
                    <li>Example: Customer data stored at regional headquarters</li>
                </ul>
                
                <h5>3. Replicated with Full Replication</h5>
                <p>All fragments at all sites.</p>
                
                <h5>4. Replicated with Partial Replication</h5>
                <p>Some fragments at some sites based on access patterns.</p>
                
                <h4>Factors Influencing Allocation</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Factor</th>
                        <th style="padding:10px; border:1px solid #ddd;">Consideration</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Access frequency</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Store data close to where it's accessed most</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Update frequency</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Frequent updates discourage replication</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Storage cost</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Limited storage at some sites</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Network bandwidth</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Slow links discourage remote access</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Reliability requirements</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Critical data needs replication</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Query patterns</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Join patterns influence co-location decisions</td>
                    </tr>
                </table>
                
                <h4>Apply Exercise: Allocation Design</h4>
                
                <p><strong>Scenario:</strong> Bank with headquarters in New York, regional offices in London, Tokyo, Sydney. Data includes:</p>
                <ul>
                    <li><strong>Customer accounts:</strong> Accessed mostly at local branch</li>
                    <li><strong>Global customer list:</strong> Used by all branches for verification</li>
                    <li><strong>Transaction logs:</strong> Used for auditing at headquarters</li>
                    <li><strong>Interest rates:</strong> Set by headquarters, read by all branches</li>
                </ul>
                
                <p><strong>Apply allocation decisions:</strong></p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Data</th>
                        <th style="padding:10px; border:1px solid #ddd;">Allocation Strategy</th>
                        <th style="padding:10px; border:1px solid #ddd;">Rationale</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Customer accounts</td>
                        <td style="padding:8px; border:1px solid #ddd;">Partitioned by region (London accounts in London DB)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Local access only, reduces network traffic</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Global customer list</td>
                        <td style="padding:8px; border:1px solid #ddd;">Fully replicated to all sites, asynchronous</td>
                        <td style="padding:8px; border:1px solid #ddd;">Read by all, updates rare</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Transaction logs</td>
                        <td style="padding:8px; border:1px solid #ddd;">Centralized at HQ only</td>
                        <td style="padding:8px; border:1px solid #ddd;">Only HQ needs them, saves storage</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Interest rates</td>
                        <td style="padding:8px; border:1px solid #ddd;">Fully replicated, synchronous</td>
                        <td style="padding:8px; border:1px solid #ddd;">Must be consistent everywhere</td>
                    </tr>
                </table>
                
                <h4>Allocation Algorithms</h4>
                <p>Formal methods for optimal allocation:</p>
                <ul>
                    <li><strong>Benefit-based:</strong> Minimize cost = Σ (read cost + write cost + storage cost)</li>
                    <li><strong>Allocation = min(C)</strong> where C considers network distances and access patterns</li>
                    <li><strong>Often NP-complete:</strong> Use heuristics for real systems</li>
                </ul>
            `,
            keyPoints: [
                "Allocation determines where fragments are stored",
                "Partitioned: each fragment once",
                "Replicated: copies at multiple sites",
                "Factors: access frequency, updates, storage, bandwidth",
                "Match allocation to access patterns",
                "Co-locate data that's frequently joined"
            ]
        },

        {
            title: "3.5 Designing Homogeneous Distributed Databases (Create Level)",
            content: `
                <h4>Blueprint Focus: Create - Designing Distributed Database Systems</h4>
                
                <h4>Design Process for Homogeneous Distributed Database</h4>
                
                <ol>
                    <li><strong>Requirements analysis:</strong> Understand data, access patterns, consistency needs</li>
                    <li><strong>Global schema design:</strong> Create conceptual schema as if centralized</li>
                    <li><strong>Fragmentation design:</strong> Decide how to split data (horizontal, vertical, mixed)</li>
                    <li><strong>Allocation design:</strong> Decide where to place fragments</li>
                    <li><strong>Replication design:</strong> Decide which fragments to replicate</li>
                    <li><strong>Local schema design:</strong> Implement at each site</li>
                </ol>
                
                <h4>Create Exercise 1: University Distributed Database</h4>
                
                <p><strong>Requirements:</strong> A university with 5 campuses across a country wants a distributed database with same DBMS at all campuses.</p>
                
                <p><strong>Data:</strong></p>
                <ul>
                    <li><strong>Students:</strong> 50,000 total, enrolled at specific campus</li>
                    <li><strong>Courses:</strong> 2,000 courses, some offered at multiple campuses</li>
                    <li><strong>Faculty:</strong> 3,000 faculty, based at one campus</li>
                    <li><strong>Enrollments:</strong> Students taking courses (mostly at their campus)</li>
                    <li><strong>Research publications:</strong> By faculty, accessed globally</li>
                    <li><strong>Library catalog:</strong> Shared across all campuses</li>
                </ul>
                
                <p><strong>Access patterns:</strong></p>
                <ul>
                    <li>90% of queries about students, faculty, enrollments are local to campus</li>
                    <li>Research publications accessed from any campus</li>
                    <li>Library catalog accessed from any campus</li>
                    <li>Course catalog viewed globally</li>
                </ul>
                
                <p><strong>Create a distributed database design:</strong></p>
                
                <h5>Step 1: Global Schema</h5>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
Student(<u>StudentID</u>, Name, Address, Major, Campus)
Faculty(<u>FacultyID</u>, Name, Dept, Campus)
Course(<u>CourseID</u>, Title, Credits, Dept)
Offering(<u>OfferingID</u>, CourseID, Semester, Year, FacultyID, Campus)
Enrollment(<u>StudentID</u>, <u>OfferingID</u>, Grade)
Publication(<u>PubID</u>, Title, FacultyID, Journal, Year)
Library(<u>BookID</u>, Title, Author, ISBN, Campus)
                </pre>
                
                <h5>Step 2: Fragmentation Design</h5>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- Horizontal fragmentation by Campus
Student_H1: SELECT * FROM Student WHERE Campus = 'Main'
Student_H2: SELECT * FROM Student WHERE Campus = 'East'
Student_H3: SELECT * FROM Student WHERE Campus = 'West'
Student_H4: SELECT * FROM Student WHERE Campus = 'North'
Student_H5: SELECT * FROM Student WHERE Campus = 'South'

Faculty_H: Similar horizontal by Campus
Offering_H: Horizontal by Campus

-- No fragmentation (global tables)
Course (full at all campuses - replicated)
Publication (full at all campuses - replicated)

-- Vertical fragmentation of Library?
-- Option: Keep Library at each campus (local books) + Central catalog
Library_Local: Books at each campus (Campus attribute)
Library_Central: All books (replicated)
                </pre>
                
                <h5>Step 3: Allocation and Replication</h5>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Fragment</th>
                        <th style="padding:10px; border:1px solid #ddd;">Allocation</th>
                        <th style="padding:10px; border:1px solid #ddd;">Replication</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Student_H1 (Main)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Main campus only</td>
                        <td style="padding:8px; border:1px solid #ddd;">None</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Student_H2 (East)</td>
                        <td style="padding:8px; border:1px solid #ddd;">East campus only</td>
                        <td style="padding:8px; border:1px solid #ddd;">None</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Course</td>
                        <td style="padding:8px; border:1px solid #ddd;">All campuses</td>
                        <td style="padding:8px; border:1px solid #ddd;">Full replication</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Publication</td>
                        <td style="padding:8px; border:1px solid #ddd;">All campuses</td>
                        <td style="padding:8px; border:1px solid #ddd;">Full replication</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Offering_H (per campus)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Respective campus</td>
                        <td style="padding:8px; border:1px solid #ddd;">None</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Enrollment</td>
                        <td style="padding:8px; border:1px solid #ddd;">Campus of Offering</td>
                        <td style="padding:8px; border:1px solid #ddd;">None</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Library_Local</td>
                        <td style="padding:8px; border:1px solid #ddd;">Each campus</td>
                        <td style="padding:8px; border:1px solid #ddd;">None</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Library_Central</td>
                        <td style="padding:8px; border:1px solid #ddd;">All campuses</td>
                        <td style="padding:8px; border:1px solid #ddd;">Full replication</td>
                    </tr>
                </table>
                
                <h5>Step 4: Query Examples</h5>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- Local query: find students at this campus (runs locally)
SELECT * FROM Student_H1 WHERE Major = 'CS';

-- Global query: find all publications by a faculty (replicated data)
SELECT * FROM Publication WHERE FacultyID = 'F123';

-- Distributed query: find students and their courses (needs data from multiple campuses)
-- Requires distributed join
SELECT s.Name, c.Title
FROM Student s, Enrollment e, Offering o, Course c
WHERE s.StudentID = e.StudentID 
  AND e.OfferingID = o.OfferingID
  AND o.CourseID = c.CourseID
  AND s.Campus = 'Main' AND o.Campus = 'East';
-- This query needs data from Main and East campuses
                </pre>
            `,
            keyPoints: [
                "Systematic design: requirements → global schema → fragmentation → allocation → replication",
                "Local data: partition by location (horizontal fragmentation)",
                "Global data: replicate fully",
                "Balance local autonomy with global access needs",
                "Consider query patterns in design"
            ]
        },

        {
            title: "3.6 Designing Heterogeneous Distributed Databases (Create Level)",
            content: `
                <h4>Blueprint Focus: Create - Heterogeneous Distributed Databases</h4>
                
                <h4>What Makes Heterogeneous Different?</h4>
                <ul>
                    <li>Different DBMS products at different sites (Oracle, MySQL, PostgreSQL, etc.)</li>
                    <li>Different data models (relational, document, key-value)</li>
                    <li>Different schemas and naming conventions</li>
                    <li>Different query languages and capabilities</li>
                    <li>Need for middleware/federation layer</li>
                </ul>
                
                <h4>Heterogeneous Distributed Database Architecture</h4>
                
                <div style="text-align:center; margin:20px 0;">
                    <pre style="background:#f4f4f4; padding:10px; display:inline-block;">
        Global Applications
                ↓
    Middleware/Federation Layer
        ↓       ↓       ↓
    Oracle   MySQL   PostgreSQL
    Site 1   Site 2   Site 3
                    </pre>
                </div>
                
                <h4>Create Exercise 2: Company Merger Integration</h4>
                
                <p><strong>Scenario:</strong> Company A (uses Oracle) acquires Company B (uses MySQL) and Company C (uses PostgreSQL). Need to create integrated distributed database while preserving existing systems.</p>
                
                <p><strong>Existing databases:</strong></p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Company</th>
                        <th style="padding:10px; border:1px solid #ddd;">DBMS</th>
                        <th style="padding:10px; border:1px solid #ddd;">Data</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">A</td>
                        <td style="padding:8px; border:1px solid #ddd;">Oracle</td>
                        <td style="padding:8px; border:1px solid #ddd;">Customers, Orders, Products (US market)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">B</td>
                        <td style="padding:8px; border:1px solid #ddd;">MySQL</td>
                        <td style="padding:8px; border:1px solid #ddd;">Customers, Orders (European market)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">C</td>
                        <td style="padding:8px; border:1px solid #ddd;">PostgreSQL</td>
                        <td style="padding:8px; border:1px solid #ddd;">Products, Inventory (Asian market)</td>
                    </tr>
                </table>
                
                <p><strong>Requirements:</strong></p>
                <ul>
                    <li>Global view of all customers across all companies</li>
                    <li>Global product catalog with inventory from all regions</li>
                    <li>Ability to query orders across all regions</li>
                    <li>Preserve local autonomy (each company continues using their DBMS)</li>
                    <li>Minimize changes to existing applications</li>
                </ul>
                
                <p><strong>Create a heterogeneous distributed database design:</strong></p>
                
                <h5>Step 1: Schema Integration (Resolve Conflicts)</h5>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Conflict Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                        <th style="padding:10px; border:1px solid #ddd;">Resolution</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Naming conflict</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">A uses "CustID", B uses "Customer_ID"</td>
                        <td style="padding:8px; border:1px solid #ddd;">Create global alias "CustomerID"</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Type conflict</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">A uses NUMBER(10), B uses VARCHAR(10) for IDs</td>
                        <td style="padding:8px; border:1px solid #ddd;">Convert to common type in middleware</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Semantic conflict</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Different definitions of "Active Customer"</td>
                        <td style="padding:8px; border:1px solid #ddd;">Define global view with clear semantics</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Missing data</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">B doesn't track customer credit limit</td>
                        <td style="padding:8px; border:1px solid #ddd;">Use NULL in global view</td>
                    </tr>
                </table>
                
                <h5>Step 2: Design Global Schema</h5>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- Global Customer view
CREATE VIEW Global_Customer AS
SELECT CustID AS CustomerID, Name, Address, 'USA' AS Region, CreditLimit
FROM A.Customer
UNION ALL
SELECT Customer_ID AS CustomerID, CustName AS Name, Address, 'EU' AS Region, NULL AS CreditLimit
FROM B.Customer
UNION ALL
-- C may not have customer data
SELECT CustID, Name, Address, 'Asia' AS Region, CreditLimit
FROM C.Customer;

-- Global Product view
CREATE VIEW Global_Product AS
SELECT ProdID AS ProductID, Description, Price, 'USA' AS Region, Stock
FROM A.Product
UNION ALL
SELECT ProductID, Description, Price, 'Asia' AS Region, Quantity AS Stock
FROM C.Product;
                </pre>
                
                <h5>Step 3: Middleware/Federation Layer Design</h5>
                
                <p>Choose architecture:</p>
                <ul>
                    <li><strong>Option 1: Federated database</strong> - Use tools like Oracle Gateway, MySQL Federated</li>
                    <li><strong>Option 2: Middleware</strong> - Custom application layer that queries each DB and combines results</li>
                    <li><strong>Option 3: Data warehouse</strong> - Periodically extract, transform, load (ETL) to central warehouse</li>
                </ul>
                
                <p><strong>Recommended:</strong> Hybrid approach - middleware for real-time queries, data warehouse for analytics.</p>
                
                <h5>Step 4: Query Processing Design</h5>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- Global query: find total orders by region
-- Middleware must:
-- 1. Decompose query to each site
-- 2. Convert to local SQL dialects
-- 3. Combine results

For Oracle site: SELECT COUNT(*) FROM A.Orders WHERE ...
For MySQL site: SELECT COUNT(*) FROM B.Orders WHERE ...
For PostgreSQL site: SELECT COUNT(*) FROM C.Orders WHERE ...

-- Then middleware sums the results
                </pre>
                
                <h5>Step 5: Transaction Management Design</h5>
                
                <p>Distributed transactions across heterogeneous systems are complex. Options:</p>
                <ul>
                    <li><strong>Two-phase commit (2PC):</strong> If all DBMS support XA transactions</li>
                    <li><strong>Compensating transactions:</strong> For eventual consistency</li>
                    <li><strong>Avoid distributed transactions:</strong> Design to keep related data in same system</li>
                </ul>
                
                <p><strong>Recommendation:</strong> Avoid distributed transactions across companies. Use asynchronous updates with reconciliation.</p>
                
                <h5>Step 6: Complete Design Summary</h5>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Component</th>
                        <th style="padding:10px; border:1px solid #ddd;">Design Decision</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Architecture</td>
                        <td style="padding:8px; border:1px solid #ddd;">Federated with middleware layer</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Global Schema</td>
                        <td style="padding:8px; border:1px solid #ddd;">Views integrating all sources with region identifier</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Query Processing</td>
                        <td style="padding:8px; border:1px solid #ddd;">Middleware decomposes and combines</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Transactions</td>
                        <td style="padding:8px; border:1px solid #ddd;">Local transactions only, eventual consistency across regions</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Replication</td>
                        <td style="padding:8px; border:1px solid #ddd;">None - keep data at source</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Heterogeneous = different DBMS, different schemas",
                "Schema integration resolves naming, type, semantic conflicts",
                "Middleware layer translates and combines queries",
                "Global views provide unified access",
                "Distributed transactions very difficult - avoid if possible",
                "Preserve local autonomy while enabling global queries"
            ]
        },

        {
            title: "3.7 CAP Theorem and Consistency Models (Analyze/Create)",
            content: `
                <h4>CAP Theorem</h4>
                <p>In a distributed system, you can only have two of three properties:</p>
                
                <div style="text-align:center; margin:20px 0;">
                    <pre style="background:#f4f4f4; padding:10px; display:inline-block;">
        Consistency (C)
              /\\
             /  \\
            /    \\
           /      \\
Availability (A)  Partition Tolerance (P)
                    </pre>
                </div>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Property</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Consistency (C)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">All nodes see the same data at the same time</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Availability (A)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Every request receives a response (success/failure)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Partition Tolerance (P)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">System continues operating despite network failures</td>
                    </tr>
                </table>
                
                <p><strong>Key insight:</strong> In distributed systems, network partitions will happen. So you must choose between CP (consistency + partition tolerance) or AP (availability + partition tolerance).</p>
                
                <h4>Consistency Models</h4>
                
                <h5>Strong Consistency</h5>
                <ul>
                    <li>All reads see the most recent write</li>
                    <li>Like single-node database behavior</li>
                    <li>Requires synchronous replication</li>
                    <li>Higher latency, lower availability</li>
                </ul>
                
                <h5>Eventual Consistency</h5>
                <ul>
                    <li>If no new updates, all replicas will eventually converge</li>
                    <li>Temporary inconsistencies allowed</li>
                    <li>Used by DNS, Amazon Dynamo, Cassandra</li>
                    <li>Higher availability, lower latency</li>
                </ul>
                
                <h5>Other Consistency Models</h5>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Model</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Causal</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Causally related operations seen in order</td>
                        <td style="padding:8px; border:1px solid #ddd;">Comment after post</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Read-your-writes</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">User sees their own updates immediately</td>
                        <td style="padding:8px; border:1px solid #ddd;">Profile updates</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Monotonic reads</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Reads don't go back in time</td>
                        <td style="padding:8px; border:1px solid #ddd;">Session consistency</td>
                    </tr>
                </table>
                
                <h4>Create Exercise: CAP-Based Design</h4>
                
                <p><strong>Scenario:</strong> Design three different distributed databases for different applications:</p>
                
                <h5>Application 1: Banking System</h5>
                <p><strong>Requirements:</strong> Account balances must be accurate, no lost transactions</p>
                <p><strong>CAP choice:</strong> CP (Consistency + Partition Tolerance)</p>
                <p><strong>Design:</strong></p>
                <ul>
                    <li>Synchronous replication between primary and backup</li>
                    <li>If partition occurs, either block writes or use quorum</li>
                    <li>Sacrifice availability for consistency (system may become unavailable during partition)</li>
                    <li>Two-phase commit for distributed transactions</li>
                </ul>
                
                <h5>Application 2: Social Media Posts</h5>
                <p><strong>Requirements:</strong> Posts should be visible quickly, temporary inconsistency acceptable</p>
                <p><strong>CAP choice:</strong> AP (Availability + Partition Tolerance)</p>
                <p><strong>Design:</strong></p>
                <ul>
                    <li>Asynchronous replication across regions</li>
                    <li>Read from any replica, may see stale data</li>
                    <li>Conflict resolution (last write wins)</li>
                    <li>High availability even during partitions</li>
                </ul>
                
                <h5>Application 3: Shopping Cart</h5>
                <p><strong>Requirements:</strong> User must see their cart items, but occasional conflicts acceptable</p>
                <p><strong>CAP choice:</strong> AP with read-your-writes consistency</p>
                <p><strong>Design:</strong></p>
                <ul>
                    <li>Session consistency - user always sees their own updates</li>
                    <li>Vector clocks for conflict detection</li>
                    <li>Merge conflicts (e.g., union of items)</li>
                </ul>
                
                <h4>Create Exercise: Consistency Model Selection</h4>
                
                <p><strong>Scenario:</strong> For each use case, choose appropriate consistency model:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Use Case</th>
                        <th style="padding:10px; border:1px solid #ddd;">Consistency Model</th>
                        <th style="padding:10px; border:1px solid #ddd;">Justification</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Stock trading system</td>
                        <td style="padding:8px; border:1px solid #ddd;">Strong consistency</td>
                        <td style="padding:8px; border:1px solid #ddd;">Financial accuracy critical</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">User session data</td>
                        <td style="padding:8px; border:1px solid #ddd;">Read-your-writes</td>
                        <td style="padding:8px; border:1px solid #ddd;">Users expect to see their actions</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Product catalog</td>
                        <td style="padding:8px; border:1px solid #ddd;">Eventual consistency</td>
                        <td style="padding:8px; border:1px solid #ddd;">Stale data acceptable, high availability needed</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Comment system</td>
                        <td style="padding:8px; border:1px solid #ddd;">Causal consistency</td>
                        <td style="padding:8px; border:1px solid #ddd;">Replies should appear after parent comment</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "CAP theorem: choose 2 of 3 (C, A, P)",
                "Network partitions are inevitable → choose CP or AP",
                "CP: strong consistency, may sacrifice availability",
                "AP: high availability, eventual consistency",
                "Consistency models: strong, eventual, causal, read-your-writes",
                "Choose based on application requirements"
            ]
        }
    ],

    summary: `
        <h3>Chapter 3 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Distributed Database:</strong> Multiple databases across network appearing as one logical database</li>
            <li><strong>Fragmentation:</strong> Horizontal (rows), Vertical (columns), Mixed - with completeness, reconstruction, disjointness rules</li>
            <li><strong>Replication:</strong> Full (copy everywhere), Partial (selective), None - with synchronous or asynchronous timing</li>
            <li><strong>Allocation:</strong> Where to place fragments - based on access patterns, updates, storage, bandwidth</li>
            <li><strong>Homogeneous Design:</strong> Same DBMS everywhere - systematic process from requirements to local schemas</li>
            <li><strong>Heterogeneous Design:</strong> Different DBMS - requires schema integration and middleware</li>
            <li><strong>CAP Theorem:</strong> Consistency, Availability, Partition Tolerance - choose two, partitions force CP or AP choice</li>
            <li><strong>Consistency Models:</strong> Strong, Eventual, Causal, Read-your-writes - choose based on application needs</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "Explain the three types of fragmentation with examples. What rules ensure fragmentation correctness?",
            answer: "Horizontal: split rows by condition (e.g., by department). Vertical: split columns with PK in each (e.g., employee basic info vs payroll). Mixed: combine both. Correctness rules: completeness (all data in fragments), reconstruction (can rebuild original), disjointness (no unnecessary overlap)."
        },
        {
            question: "Compare full replication, partial replication, and no replication. When would you choose each?",
            answer: "Full: all data at all sites - for small, read-heavy databases. Partial: selective copies - for most real systems balancing cost and performance. No replication: single copy - for write-heavy data or limited storage."
        },
        {
            question: "Design a distributed database for a global bank with branches in 10 countries. Consider fragmentation, replication, and allocation.",
            answer: "Horizontal fragmentation by country for customer accounts (local data). Full replication of interest rates and exchange rates (global data). Partial replication of customer master data (for cross-border verification). Allocation: local data at respective branches, global data at all sites. Synchronous replication for rates, asynchronous for customer master."
        },
        {
            question: "What is the CAP theorem and how does it impact distributed database design?",
            answer: "CAP says you can only have two of Consistency, Availability, Partition Tolerance. Since partitions are inevitable, you choose CP (consistency) or AP (availability). Banking systems choose CP, social media chooses AP. Design must align with this choice."
        },
        {
            question: "Describe the challenges in heterogeneous distributed databases and how to address them.",
            answer: "Challenges: different DBMS, schemas, data types, query languages. Solutions: middleware/federation layer, schema integration (resolve naming/type/semantic conflicts), global views, query decomposition and translation, avoid distributed transactions."
        }
    ],

    quickTips: [
        "Horizontal: rows by condition",
        "Vertical: columns with PK",
        "Completeness + Reconstruction + Disjointness",
        "Full replication = high availability, expensive",
        "Partial replication = balance",
        "CAP: choose CP (consistency) or AP (availability)",
        "Heterogeneous needs middleware"
    ],

    commonMistakes: [
        "❌ Forgetting PK in vertical fragments",
        "❌ Overlapping horizontal fragments",
        "❌ Replicating write-heavy data",
        "❌ Ignoring CAP theorem in design",
        "❌ Assuming strong consistency in AP systems",
        "❌ Not resolving schema conflicts in heterogeneous systems"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 3:</h3>
        <p>This chapter has <strong>2 questions</strong> distributed as:</p>
        <ul>
            <li><strong>1 Apply question:</strong> Apply fragmentation, replication, and allocation techniques to given scenarios</li>
            <li><strong>1 Create question:</strong> Design complete distributed database solutions for complex requirements</li>
        </ul>
        
        <h4>Apply Level Focus:</h4>
        <ul>
            <li>Given a relation and access patterns, design appropriate fragmentation</li>
            <li>Choose replication strategies based on read/write ratios</li>
            <li>Allocate fragments to sites considering network and access patterns</li>
            <li>Apply CAP theorem to choose consistency models</li>
        </ul>
        
        <h4>Create Level Focus:</h4>
        <ul>
            <li>Design homogeneous distributed database from requirements (like university example)</li>
            <li>Design heterogeneous integration for merged companies</li>
            <li>Create complete allocation and replication plan with justification</li>
            <li>Design query processing and transaction strategies</li>
        </ul>
        
        <h4>Sample Apply Question:</h4>
        <div style="background:#f8f9fa; padding:20px; border-radius:10px; margin:20px 0;">
            <p><strong>Question:</strong> A multinational corporation has Employee(EMPID, Name, Department, Salary, Country, Project) table. 80% of queries access employees in the same country, 20% are global reports. Propose a fragmentation and replication strategy.</p>
            <p><strong>Answer:</strong> Horizontal fragmentation by Country (local queries). Replicate the Employee table fully but with only necessary attributes for global reports (or maintain a separate global summary table). Allocate each country's fragment to local servers. Use asynchronous replication for global data.</p>
        </div>
        
        <h4>Sample Create Question:</h4>
        <div style="background:#f8f9fa; padding:20px; border-radius:10px; margin:20px 0;">
            <p><strong>Question:</strong> Design a homogeneous distributed database for a ride-sharing company operating in 50 cities across 10 countries. Include driver, rider, trip, and payment data. Specify fragmentation, replication, allocation, and consistency requirements.</p>
            <p><strong>Answer:</strong> [Students would provide complete design with justification]</p>
        </div>
    `
};