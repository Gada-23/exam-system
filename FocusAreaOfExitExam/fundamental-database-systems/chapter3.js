// ===============================
// FOCUS AREA: FUNDAMENTAL DATABASE SYSTEMS - CHAPTER 3
// Database System Design
// Based on Ministry of Education Blueprint (2 Questions: Evaluate)
// File Path: FocusAreaOfExitExam/fundamental-database-systems/chapter3.js
// ===============================

window.focusAreaFundamentalDBChapter3 = {
    title: "Chapter 3: Database System Design",
    
    description: "Evaluating and designing complete database systems for real-world scenarios, considering trade-offs, performance, and best practices.",
    
    blueprint: {
        totalQuestions: 2,
        cognitiveLevels: {
            evaluate: 2
        },
        topics: [
            "Complete database design methodology",
            "Design evaluation and trade-offs",
            "Performance optimization decisions",
            "Scalability considerations",
            "Security and access control design",
            "Design documentation and justification"
        ]
    },

    learningObjectives: [
        "Evaluate database design alternatives based on requirements",
        "Design complete database systems for complex scenarios",
        "Justify design decisions with trade-off analysis",
        "Assess the impact of design choices on performance and maintainability",
        "Critique existing designs and propose improvements",
        "Make informed decisions about normalization, indexing, and constraints"
    ],

    sections: [
        {
            title: "3.1 Database Design Methodology (Evaluate Level)",
            content: `
                <h4>Systematic Database Design Process</h4>
                
                <div style="text-align:center; margin:20px 0;">
                    <pre style="background:#f4f4f4; padding:10px; display:inline-block;">
    Requirements Analysis
            ↓
    Conceptual Design (ER Model)
            ↓
    Logical Design (Relational Schema)
            ↓
    Physical Design (Indexes, Storage)
            ↓
    Implementation & Testing
                    </pre>
                </div>
                
                <h4>Phase 1: Requirements Analysis</h4>
                <ul>
                    <li>Interview users and stakeholders</li>
                    <li>Identify data requirements and business rules</li>
                    <li>Determine transaction and query patterns</li>
                    <li>Document functional and non-functional requirements</li>
                </ul>
                
                <h4>Phase 2: Conceptual Design</h4>
                <ul>
                    <li>Create ER diagram identifying entities, attributes, relationships</li>
                    <li>Define constraints (cardinality, participation)</li>
                    <li>Identify weak entities and hierarchies</li>
                    <li>Validate with users</li>
                </ul>
                
                <h4>Phase 3: Logical Design</h4>
                <ul>
                    <li>Map ER to relational schema</li>
                    <li>Apply normalization (up to BCNF/3NF)</li>
                    <li>Define integrity constraints (PK, FK, CHECK, UNIQUE)</li>
                    <li>Create views for different user perspectives</li>
                </ul>
                
                <h4>Phase 4: Physical Design</h4>
                <ul>
                    <li>Choose storage structures</li>
                    <li>Design indexes for query performance</li>
                    <li>Partition tables if needed</li>
                    <li>Plan for security and access control</li>
                    <li>Consider denormalization for performance</li>
                </ul>
                
                <div class="key-points-box">
                    <p><strong>🔑 Key Point:</strong> Database design is iterative. You may need to revisit earlier phases as you discover new requirements or constraints.</p>
                </div>
                
                <h4>Evaluation Criteria for Database Designs</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Criteria</th>
                        <th style="padding:10px; border:1px solid #ddd;">Questions to Ask</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Correctness</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Does it represent all required data? Are relationships correct?</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Completeness</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Are all requirements satisfied? Any missing attributes?</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Integrity</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Are appropriate constraints defined? Can bad data be entered?</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Performance</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Will common queries run efficiently? Are indexes appropriate?</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Scalability</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Will design handle growth in data and users?</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Maintainability</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Is the design easy to modify and understand?</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Security</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Is sensitive data protected? Are access controls appropriate?</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Design phases: Requirements → Conceptual → Logical → Physical",
                "Each phase produces specific artifacts",
                "Design is iterative, not linear",
                "Evaluate designs on correctness, completeness, integrity, performance, scalability"
            ]
        },

        {
            title: "3.2 Evaluating Design Alternatives (Evaluate Level)",
            content: `
                <h4>Blueprint Focus: Evaluate - Comparing Design Choices</h4>
                
                <p>At the Evaluate level, you need to compare different design alternatives, weigh trade-offs, and make reasoned judgments about which design is best for a given scenario.</p>
                
                <h4>Case Study 1: Hospital Patient Records System</h4>
                
                <p><strong>Requirements:</strong></p>
                <ul>
                    <li>Track patients, doctors, appointments, medical records</li>
                    <li>Patients have historical medical records</li>
                    <li>Doctors have specializations</li>
                    <li>Appointments can be scheduled and cancelled</li>
                    <li>Medical records are confidential and audited</li>
                </ul>
                
                <h5>Design Alternative A (Fully Normalized)</h5>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
Patient(<u>PatientID</u>, Name, DOB, Phone, Address)
Doctor(<u>DoctorID</u>, Name, Specialization, Phone)
Appointment(<u>AppointmentID</u>, <u>PatientID</u>, <u>DoctorID</u>, DateTime, Status)
MedicalRecord(<u>RecordID</u>, <u>PatientID</u>, <u>DoctorID</u>, Date, Diagnosis, Treatment, Notes)
Prescription(<u>PrescriptionID</u>, <u>RecordID</u>, Medication, Dosage, Instructions)
AuditLog(<u>LogID</u>, <u>UserID</u>, <u>RecordID</u>, Action, Timestamp)
                </pre>
                
                <h5>Design Alternative B (Denormalized for Performance)</h5>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
Patient(<u>PatientID</u>, Name, DOB, Phone, Address)
Doctor(<u>DoctorID</u>, Name, Specialization, Phone)
Appointment(<u>AppointmentID</u>, PatientName, DoctorName, DateTime, Status)
MedicalRecord(<u>RecordID</u>, PatientName, DoctorName, Date, Diagnosis, Treatment, Notes, AuditInfo)
                </pre>
                
                <h4>Evaluation of Alternatives</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Criteria</th>
                        <th style="padding:10px; border:1px solid #ddd;">Alternative A (Normalized)</th>
                        <th style="padding:10px; border:1px solid #ddd;">Alternative B (Denormalized)</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Data Integrity</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Excellent - constraints enforce relationships</td>
                        <td style="padding:8px; border:1px solid #ddd;">❌ Poor - patient/doctor names can become inconsistent</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Query Performance</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">⚠️ Requires joins, but indexes can help</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Fast - all data in one table</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Storage Efficiency</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Minimal redundancy</td>
                        <td style="padding:8px; border:1px solid #ddd;">❌ High redundancy (names repeated)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Maintainability</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Easy to update (one place)</td>
                        <td style="padding:8px; border:1px solid #ddd;">❌ Hard - must update multiple places</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Audit Capability</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Separate audit table</td>
                        <td style="padding:8px; border:1px solid #ddd;">⚠️ Limited - audit info embedded</td>
                    </tr>
                </table>
                
                <p><strong>Evaluation Conclusion:</strong> Alternative A is superior for a hospital system where data integrity and audit capabilities are critical. Performance concerns can be addressed with proper indexing.</p>
                
                <h4>Case Study 2: Social Media Analytics Platform</h4>
                
                <p><strong>Requirements:</strong></p>
                <ul>
                    <li>Track user posts, likes, shares, comments</li>
                    <li>Generate real-time analytics (trending posts, user engagement)</li>
                    <li>Handle millions of events per day</li>
                    <li>Historical data for trend analysis</li>
                </ul>
                
                <h5>Design Alternative A (Traditional RDBMS)</h5>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
Post(<u>PostID</u>, UserID, Content, Timestamp)
Like(<u>UserID</u>, <u>PostID</u>, Timestamp)
Share(<u>UserID</u>, <u>PostID</u>, Timestamp)
Comment(<u>CommentID</u>, <u>UserID</u>, <u>PostID</u>, Content, Timestamp)
                </pre>
                
                <h5>Design Alternative B (Aggregated + Time-series)</h5>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
Post(<u>PostID</u>, UserID, Content, Timestamp, LikeCount, ShareCount, CommentCount)
Event(<u>EventID</u>, EventType, UserID, PostID, Timestamp)  -- raw events for audit
HourlyStats(<u>Date</u>, <u>Hour</u>, TotalPosts, TotalLikes, TotalShares, TopPostID)
                </pre>
                
                <h4>Evaluation of Alternatives</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Criteria</th>
                        <th style="padding:10px; border:1px solid #ddd;">Alternative A (RDBMS)</th>
                        <th style="padding:10px; border:1px solid #ddd;">Alternative B (Aggregated)</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Write Performance</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">⚠️ Many small inserts</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Fewer writes (aggregated counts)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Read Performance (analytics)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">❌ Slow - must aggregate millions of rows</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Fast - pre-aggregated</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Granularity</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Individual events available</td>
                        <td style="padding:8px; border:1px solid #ddd;">⚠️ Events still stored but separate</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Storage</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">❌ Large (every event stored)</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Smaller (aggregates + sampled events)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Complexity</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Simple design</td>
                        <td style="padding:8px; border:1px solid #ddd;">⚠️ More complex (aggregation logic)</td>
                    </tr>
                </table>
                
                <p><strong>Evaluation Conclusion:</strong> Alternative B is better for analytics at scale. Use Alternative A for the detailed event store (for audit), and Alternative B for the analytics layer. This hybrid approach gives both detailed history and fast queries.</p>
            `,
            keyPoints: [
                "Evaluate designs against multiple criteria (integrity, performance, scalability)",
                "Consider the specific requirements of the application",
                "Hybrid designs often work best (normalized for OLTP, denormalized for analytics)",
                "Trade-offs are inevitable - choose based on priorities",
                "Document the reasoning behind design decisions"
            ]
        },

        {
            title: "3.3 Performance Optimization Decisions (Evaluate Level)",
            content: `
                <h4>Performance Evaluation Framework</h4>
                
                <p>When evaluating performance, consider:</p>
                <ul>
                    <li><strong>Query patterns:</strong> Which queries are most frequent? Most critical?</li>
                    <li><strong>Data volume:</strong> Current and projected growth</li>
                    <li><strong>Transaction rates:</strong> Reads vs writes ratio</li>
                    <li><strong>Response time requirements:</strong> Real-time vs batch</li>
                </ul>
                
                <h4>Indexing Decisions</h4>
                
                <h5>When to Create Indexes</h5>
                <ul>
                    <li>Columns used in WHERE clauses frequently</li>
                    <li>Columns used in JOIN conditions</li>
                    <li>Columns used in ORDER BY or GROUP BY</li>
                    <li>Foreign key columns</li>
                </ul>
                
                <h5>When NOT to Create Indexes</h5>
                <ul>
                    <li>Small tables (full scan is faster)</li>
                    <li>Columns with few distinct values (low cardinality)</li>
                    <li>Columns updated frequently (index maintenance cost)</li>
                    <li>Tables with high write volume (indexes slow writes)</li>
                </ul>
                
                <h5>Index Type Evaluation</h5>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Index Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Best For</th>
                        <th style="padding:10px; border:1px solid #ddd;">Trade-offs</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>B-Tree (default)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Equality and range queries</td>
                        <td style="padding:8px; border:1px solid #ddd;">Good all-around, works for most cases</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Hash</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Equality queries only</td>
                        <td style="padding:8px; border:1px solid #ddd;">Very fast for exact matches, no range support</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Bitmap</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Low cardinality columns, data warehouses</td>
                        <td style="padding:8px; border:1px solid #ddd;">Efficient for complex combinations, poor for updates</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Covering</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Frequent queries with specific columns</td>
                        <td style="padding:8px; border:1px solid #ddd;">Includes all needed columns, avoids table access</td>
                    </tr>
                </table>
                
                <h4>Denormalization Decisions</h4>
                
                <p><strong>When to consider denormalization:</strong></p>
                <ul>
                    <li>Read-heavy workloads with complex joins</li>
                    <li>Reporting and analytics queries</li>
                    <li>Real-time dashboards</li>
                    <li>When join performance is unacceptable</li>
                </ul>
                
                <p><strong>Denormalization techniques:</strong></p>
                <ul>
                    <li><strong>Pre-joined tables:</strong> Materialized views</li>
                    <li><strong>Aggregated columns:</strong> Store counts/sums (like order total)</li>
                    <li><strong>Redundant columns:</strong> Store customer name in order table</li>
                    <li><strong>Reporting tables:</strong> Separate tables optimized for reports</li>
                </ul>
                
                <p><strong>Costs of denormalization:</strong></p>
                <ul>
                    <li>Data redundancy → potential inconsistency</li>
                    <li>More complex updates (must update multiple places)</li>
                    <li>Increased storage</li>
                    <li>Harder to maintain</li>
                </ul>
                
                <h4>Partitioning Decisions</h4>
                
                <p><strong>Horizontal Partitioning (Sharding):</strong> Split rows across multiple tables/servers</p>
                <ul>
                    <li><strong>Range partitioning:</strong> By date, ID range (e.g., orders by year)</li>
                    <li><strong>List partitioning:</strong> By category, region</li>
                    <li><strong>Hash partitioning:</strong> Distribute evenly</li>
                </ul>
                
                <p><strong>Vertical Partitioning:</strong> Split columns across tables</p>
                <ul>
                    <li>Separate frequently accessed columns from rarely used ones</li>
                    <li>Separate large BLOB/text columns</li>
                </ul>
                
                <h4>Case Study: E-commerce Order System Performance Evaluation</h4>
                
                <p><strong>Scenario:</strong> Order system with 10 million orders, growing 1 million per year. Frequent queries:</p>
                <ul>
                    <li>Q1: Find orders for a customer (last 30 days)</li>
                    <li>Q2: Calculate daily sales totals</li>
                    <li>Q3: Find top-selling products this month</li>
                    <li>Q4: Customer order history with details</li>
                </ul>
                
                <p><strong>Evaluate optimization options:</strong></p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Option</th>
                        <th style="padding:10px; border:1px solid #ddd;">Benefits</th>
                        <th style="padding:10px; border:1px solid #ddd;">Costs</th>
                        <th style="padding:10px; border:1px solid #ddd;">Evaluation</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Index on CustomerID + OrderDate</td>
                        <td style="padding:8px; border:1px solid #ddd;">Speeds up Q1, Q4</td>
                        <td style="padding:8px; border:1px solid #ddd;">Slows inserts, storage overhead</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Recommended - critical queries</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Daily sales summary table</td>
                        <td style="padding:8px; border:1px solid #ddd;">Q2 becomes instant</td>
                        <td style="padding:8px; border:1px solid #ddd;">Must maintain summary (trigger/batch)</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Recommended if Q2 is frequent</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Partition by year</td>
                        <td style="padding:8px; border:1px solid #ddd;">Faster queries on recent data, easier archive</td>
                        <td style="padding:8px; border:1px solid #ddd;">Cross-year queries slower</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Good for data lifecycle management</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Denormalize customer name into Order</td>
                        <td style="padding:8px; border:1px solid #ddd;">Faster Q4 (no join)</td>
                        <td style="padding:8px; border:1px solid #ddd;">If customer name changes, must update orders</td>
                        <td style="padding:8px; border:1px solid #ddd;">⚠️ Only if name changes rarely</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Indexes speed reads but slow writes - evaluate based on read/write ratio",
                "Choose index type based on query patterns (B-Tree for ranges, Hash for equality)",
                "Denormalization improves read performance at cost of write complexity",
                "Partitioning helps with large tables and data lifecycle",
                "Evaluate each optimization based on actual requirements and trade-offs"
            ]
        },

        {
            title: "3.4 Scalability and Growth Planning (Evaluate Level)",
            content: `
                <h4>Scalability Dimensions</h4>
                
                <ul>
                    <li><strong>Data volume scalability:</strong> Handle growing data size</li>
                    <li><strong>Transaction scalability:</strong> Handle growing number of concurrent operations</li>
                    <li><strong>User scalability:</strong> Handle growing number of users</li>
                    <li><strong>Geographic scalability:</strong> Handle distributed users</li>
                </ul>
                
                <h4>Scaling Approaches</h4>
                
                <h5>Vertical Scaling (Scale Up)</h5>
                <ul>
                    <li>Add more power to existing server (CPU, RAM, faster storage)</li>
                    <li>Simpler to implement</li>
                    <li>Has hardware limits</li>
                    <li>Single point of failure</li>
                </ul>
                
                <h5>Horizontal Scaling (Scale Out)</h5>
                <ul>
                    <li>Add more servers</li>
                    <li>Virtually unlimited scaling</li>
                    <li>More complex (distribution, consistency)</li>
                    <li>Better fault tolerance</li>
                </ul>
                
                <h4>Database Scaling Techniques</h4>
                
                <h5>1. Replication</h5>
                <ul>
                    <li><strong>Master-Slave:</strong> All writes to master, reads from slaves</li>
                    <li><strong>Master-Master:</strong> Writes to any master (conflict resolution needed)</li>
                    <li>Improves read scalability, provides redundancy</li>
                </ul>
                
                <h5>2. Sharding (Horizontal Partitioning)</h5>
                <ul>
                    <li>Split data across multiple databases based on shard key</li>
                    <li>Each shard is independent</li>
                    <li>Shard key selection is critical for even distribution</li>
                    <li>Cross-shard queries are complex/avoided</li>
                </ul>
                
                <h5>3. Caching</h5>
                <ul>
                    <li>Redis, Memcached for frequently accessed data</li>
                    <li>Reduces database load</li>
                    <li>Cache invalidation is challenging</li>
                </ul>
                
                <h5>4. Read Replicas</h5>
                <ul>
                    <li>Separate databases for read-only queries</li>
                    <li>Asynchronous replication from primary</li>
                    <li>May have replication lag</li>
                </ul>
                
                <h4>Case Study: Social Media Platform Scalability Evaluation</h4>
                
                <p><strong>Scenario:</strong> A social media startup expects to grow from 100,000 to 10 million users in 2 years.</p>
                
                <p><strong>Current design:</strong> Single PostgreSQL database with tables for users, posts, likes, comments.</p>
                
                <h5>Evaluate scaling options:</h5>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Option</th>
                        <th style="padding:10px; border:1px solid #ddd;">Pros</th>
                        <th style="padding:10px; border:1px solid #ddd;">Cons</th>
                        <th style="padding:10px; border:1px solid #ddd;">Evaluation</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Vertical scaling</td>
                        <td style="padding:8px; border:1px solid #ddd;">Simple, no app changes</td>
                        <td style="padding:8px; border:1px solid #ddd;">Hardware limits, expensive, single point</td>
                        <td style="padding:8px; border:1px solid #ddd;">Short-term fix only</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Read replicas</td>
                        <td style="padding:8px; border:1px solid #ddd;">Good for read-heavy workloads</td>
                        <td style="padding:8px; border:1px solid #ddd;">Write bottleneck remains</td>
                        <td style="padding:8px; border:1px solid #ddd;">Helpful but not sufficient alone</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Shard by user ID</td>
                        <td style="padding:8px; border:1px solid #ddd;">Excellent scalability, data isolated</td>
                        <td style="padding:8px; border:1px solid #ddd;">Complex queries across users, resharding hard</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Best long-term solution</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Cache layer (Redis)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Reduces DB load, fast</td>
                        <td style="padding:8px; border:1px solid #ddd;">Cache invalidation, complexity</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Good addition to sharding</td>
                    </tr>
                </table>
                
                <p><strong>Recommended architecture:</strong></p>
                <ol>
                    <li>Shard database by user ID (each user's data in one shard)</li>
                    <li>Read replicas for each shard for read scaling</li>
                    <li>Redis cache for hot data (user sessions, trending posts)</li>
                    <li>Separate analytics database (denormalized) for reporting</li>
                    <li>Plan for 2x shards to accommodate growth</li>
                </ol>
                
                <h4>Evaluating Shard Key Selection</h4>
                
                <p><strong>Candidate shard keys:</strong></p>
                <ul>
                    <li><strong>User ID:</strong> Good distribution, all user data in one shard</li>
                    <li><strong>Geographic region:</strong> Good for locality, but may cause hotspots</li>
                    <li><strong>Hash of User ID:</strong> Even distribution, but harder to query</li>
                    <li><strong>Date:</strong> Good for time-series, but recent data hotspots</li>
                </ul>
                
                <p><strong>Evaluation criteria:</strong></p>
                <ul>
                    <li><strong>Distribution evenness:</strong> Avoid hotspots</li>
                    <li><strong>Query pattern support:</strong> Most queries should stay within one shard</li>
                    <li><strong>Future growth:</strong> Can add shards without massive rebalancing</li>
                    <li><strong>Operational complexity:</strong> How hard to manage?</li>
                </ul>
                
                <p><strong>Conclusion:</strong> For social media, User ID (or hash of User ID) is best because all user-related queries stay in one shard.</p>
            `,
            keyPoints: [
                "Vertical scaling: simpler but limited, Horizontal scaling: complex but unlimited",
                "Replication improves read scalability, sharding improves both read and write",
                "Cache reduces load on database",
                "Shard key selection is critical for even distribution and query efficiency",
                "Plan for future growth from the beginning"
            ]
        },

        {
            title: "3.5 Security and Access Control Design (Evaluate Level)",
            content: `
                <h4>Database Security Dimensions</h4>
                
                <ul>
                    <li><strong>Authentication:</strong> Who can access the database?</li>
                    <li><strong>Authorization:</strong> What can they do?</li>
                    <li><strong>Auditing:</strong> Tracking who did what</li>
                    <li><strong>Encryption:</strong> Data protection at rest and in transit</li>
                    <li><strong>Data masking:</strong> Hiding sensitive data from some users</li>
                </ul>
                
                <h4>Access Control Models</h4>
                
                <h5>1. Discretionary Access Control (DAC)</h5>
                <ul>
                    <li>Owner of object grants permissions</li>
                    <li>SQL GRANT/REVOKE</li>
                    <li>Flexible but can lead to inconsistent policies</li>
                </ul>
                
                <h5>2. Mandatory Access Control (MAC)</h5>
                <ul>
                    <li>System-enforced based on security labels</li>
                    <li>Users have clearance levels, data has classifications</li>
                    <li>Used in military, government</li>
                </ul>
                
                <h5>3. Role-Based Access Control (RBAC)</h5>
                <ul>
                    <li>Permissions assigned to roles, users assigned to roles</li>
                    <li>Most common in enterprise applications</li>
                    <li>Easier to manage than individual permissions</li>
                </ul>
                
                <h4>Implementing RBAC in Database Design</h4>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- Role table
Role(<u>RoleID</u>, RoleName, Description)

-- User table (with role)
User(<u>UserID</u>, Username, <u>RoleID</u>, ...)

-- Permission table
Permission(<u>PermissionID</u>, Resource, Action)  -- e.g., 'Employee', 'VIEW'

-- Role-Permission assignment
RolePermission(<u>RoleID</u>, <u>PermissionID</u>)
                </pre>
                
                <h4>Case Study: Hospital Database Security Evaluation</h4>
                
                <p><strong>Requirements:</strong></p>
                <ul>
                    <li>Doctors can view and update medical records of their patients</li>
                    <li>Nurses can view medical records, add notes, but not modify diagnoses</li>
                    <li>Administrative staff can view patient demographics but NOT medical records</li>
                    <li>Patients can view their own records</li>
                    <li>All access must be audited</li>
                    <li>Compliance with HIPAA/privacy regulations</li>
                </ul>
                
                <h5>Evaluate security design options:</h5>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Option</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Pros</th>
                        <th style="padding:10px; border:1px solid #ddd;">Cons</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Application-level security</td>
                        <td style="padding:8px; border:1px solid #ddd;">App enforces access rules</td>
                        <td style="padding:8px; border:1px solid #ddd;">Flexible, fine-grained</td>
                        <td style="padding:8px; border:1px solid #ddd;">Bypass if direct DB access</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Database views + roles</td>
                        <td style="padding:8px; border:1px solid #ddd;">Create views with security predicates</td>
                        <td style="padding:8px; border:1px solid #ddd;">Enforced by DBMS</td>
                        <td style="padding:8px; border:1px solid #ddd;">Complex to maintain</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Row-level security (RLS)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Policies restrict rows per user</td>
                        <td style="padding:8px; border:1px solid #ddd;">Fine-grained, in DB</td>
                        <td style="padding:8px; border:1px solid #ddd;">DBMS support varies</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Encrypted columns</td>
                        <td style="padding:8px; border:1px solid #ddd;">Sensitive data encrypted</td>
                        <td style="padding:8px; border:1px solid #ddd;">Protects data at rest</td>
                        <td style="padding:8px; border:1px solid #ddd;">Performance overhead</td>
                    </tr>
                </table>
                
                <p><strong>Recommended design:</strong></p>
                <ol>
                    <li>Use RBAC with database roles (Doctor, Nurse, Admin, Patient)</li>
                    <li>Create views for each role with appropriate filtering:
                        <ul>
                            <li>Doctor view: All records of their patients</li>
                            <li>Nurse view: All records (read-only) + notes field (write)</li>
                            <li>Admin view: Demographics only (no medical data)</li>
                            <li>Patient view: Their own records (via parameterized view)</li>
                        </ul>
                    </li>
                    <li>Implement row-level security for doctor-patient relationship</li>
                    <li>Encrypt sensitive columns (SSN, diagnosis details)</li>
                    <li>Audit all access via triggers or application logging</li>
                </ol>
                
                <h4>Evaluating Audit Requirements</h4>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- Audit log table
AuditLog(<u>LogID</u>, UserID, Action, TableName, RecordID, OldValue, NewValue, Timestamp, IPAddress)

-- Trigger example
CREATE TRIGGER audit_medical_record
AFTER UPDATE ON MedicalRecord
FOR EACH ROW
INSERT INTO AuditLog (UserID, Action, TableName, RecordID, OldValue, NewValue, Timestamp)
VALUES (CURRENT_USER, 'UPDATE', 'MedicalRecord', NEW.RecordID, OLD.Diagnosis, NEW.Diagnosis, NOW());
                </pre>
                
                <p><strong>Evaluation considerations:</strong></p>
                <ul>
                    <li>Triggers ensure auditing even if application bypasses</li>
                    <li>Performance impact on writes</li>
                    <li>Storage growth for audit data (plan archiving)</li>
                    <li>What to audit? (ALL access or just modifications?)</li>
                </ul>
            `,
            keyPoints: [
                "Security layers: Authentication, Authorization, Auditing, Encryption",
                "RBAC is most practical for enterprise applications",
                "Views and row-level security provide fine-grained access control",
                "Encryption protects sensitive data at rest",
                "Audit trails are essential for compliance and forensics",
                "Balance security with performance and usability"
            ]
        },

        {
            title: "3.6 Complete Design Evaluation: University System",
            content: `
                <h4>Final Project: University Management System</h4>
                
                <h4>Requirements Document</h4>
                
                <p><strong>Functional Requirements:</strong></p>
                <ul>
                    <li>Manage students, faculty, courses, departments</li>
                    <li>Student registration and grade recording</li>
                    <li>Course scheduling and classroom assignment</li>
                    <li>Tuition and fee management</li>
                    <li>Transcript generation</li>
                    <li>Faculty course assignments</li>
                    <li>Department budget tracking</li>
                </ul>
                
                <p><strong>Non-functional Requirements:</strong></p>
                <ul>
                    <li>Support 30,000 students, 2,000 faculty</li>
                    <li>Peak registration period: 5,000 concurrent users</li>
                    <li>Response time < 2 seconds for most queries</li>
                    <li>99.9% uptime during registration</li>
                    <li>Data retention: 10 years</li>
                    <li>FERPA compliance (student privacy)</li>
                </ul>
                
                <h4>Proposed Design A (Normalized)</h4>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- Core tables
Department(<u>DeptID</u>, Name, Budget, ChairID)
Faculty(<u>FacultyID</u>, Name, Rank, <u>DeptID</u>, HireDate, Salary)
Student(<u>StudentID</u>, Name, DOB, <u>DeptID</u>, EnrollmentDate, Status)
Course(<u>CourseID</u>, Title, Credits, <u>DeptID</u>, Description)
Classroom(<u>RoomID</u>, Building, RoomNumber, Capacity)

-- Scheduling
CourseOffering(<u>OfferingID</u>, <u>CourseID</u>, Semester, Year, <u>FacultyID</u>, <u>RoomID</u>, Days, Time, MaxEnrollment)
Enrollment(<u>StudentID</u>, <u>OfferingID</u>, Grade, EnrollmentDate)
Waitlist(<u>StudentID</u>, <u>OfferingID</u>, Position, DateAdded)

-- Financial
Tuition(<u>StudentID</u>, Semester, Year, AmountDue, AmountPaid, PaymentDate, Status)
Budget(<u>DeptID</u>, FiscalYear, Allocated, Spent)
                </pre>
                
                <h4>Proposed Design B (Performance Optimized)</h4>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- Same core tables plus:
-- Denormalized transcript table (pre-joined)
Transcript(<u>StudentID</u>, StudentName, <u>CourseID</u>, CourseTitle, Semester, Year, Grade, Credits, GPA)

-- Student summary table
StudentSummary(<u>StudentID</u>, TotalCredits, GPA, AcademicStanding)

-- Registration cache for peak periods
RegistrationCache(<u>StudentID</u>, <u>OfferingID</u>, Status, Timestamp)

-- Partition Enrollment by year for performance
Enrollment_2024, Enrollment_2023, etc. (partitioned by Semester/Year)
                </pre>
                
                <h4>Evaluation of Designs</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Criteria</th>
                        <th style="padding:10px; border:1px solid #ddd;">Design A (Normalized)</th>
                        <th style="padding:10px; border:1px solid #ddd;">Design B (Optimized)</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Data Integrity</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Excellent - constraints ensure consistency</td>
                        <td style="padding:8px; border:1px solid #ddd;">⚠️ Redundancy risks inconsistency</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Registration Performance</td>
                        <td style="padding:8px; border:1px solid #ddd;">⚠️ Multiple inserts/updates per registration</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Fast with cache, async updates</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Transcript Generation</td>
                        <td style="padding:8px; border:1px solid #ddd;">⚠️ Complex joins across years</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Fast from denormalized table</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Maintainability</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Simple, clear structure</td>
                        <td style="padding:8px; border:1px solid #ddd;">⚠️ Complex (must maintain denormalized data)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Scalability</td>
                        <td style="padding:8px; border:1px solid #ddd;">⚠️ May struggle with 10 years of data</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Partitioning helps manage growth</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Security</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Can implement row-level security</td>
                        <td style="padding:8px; border:1px solid #ddd;">⚠️ Denormalized tables may expose more data</td>
                    </tr>
                </table>
                
                <h4>Final Recommendation: Hybrid Design</h4>
                
                <ol>
                    <li><strong>Core normalized tables</strong> (Design A) for transactional integrity</li>
                    <li><strong>Materialized views</strong> for transcripts and summaries, refreshed periodically</li>
                    <li><strong>Partition Enrollment table</strong> by academic year for performance</li>
                    <li><strong>Redis cache</strong> for registration hotspots during peak periods</li>
                    <li><strong>Read replicas</strong> for reporting queries</li>
                    <li><strong>Row-level security</strong> to enforce FERPA (students see only their records)</li>
                </ol>
                
                <p><strong>Justification:</strong> This hybrid approach gives the best of both worlds: transactional integrity with normalized tables, and query performance with carefully managed denormalization and caching. It meets all functional requirements while satisfying performance, scalability, and security needs.</p>
                
                <h4>Evaluation Rubric for Database Designs</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Criteria</th>
                        <th style="padding:10px; border:1px solid #ddd;">Excellent (5)</th>
                        <th style="padding:10px; border:1px solid #ddd;">Good (3-4)</th>
                        <th style="padding:10px; border:1px solid #ddd;">Poor (0-2)</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Requirements Coverage</td>
                        <td style="padding:8px; border:1px solid #ddd;">All requirements addressed</td>
                        <td style="padding:8px; border:1px solid #ddd;">Most requirements covered</td>
                        <td style="padding:8px; border:1px solid #ddd;">Missing key requirements</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Normalization</td>
                        <td style="padding:8px; border:1px solid #ddd;">Appropriate level (3NF/BCNF) with justified denormalization</td>
                        <td style="padding:8px; border:1px solid #ddd;">Mostly normalized, some minor redundancy</td>
                        <td style="padding:8px; border:1px solid #ddd;">Serious redundancy or anomalies</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Integrity</td>
                        <td style="padding:8px; border:1px solid #ddd;">All necessary constraints defined</td>
                        <td style="padding:8px; border:1px solid #ddd;">Most constraints present</td>
                        <td style="padding:8px; border:1px solid #ddd;">Missing critical constraints</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Performance</td>
                        <td style="padding:8px; border:1px solid #ddd;">Indexes, partitioning, caching planned</td>
                        <td style="padding:8px; border:1px solid #ddd;">Some performance considerations</td>
                        <td style="padding:8px; border:1px solid #ddd;">No performance planning</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Scalability</td>
                        <td style="padding:8px; border:1px solid #ddd;">Clear growth path, sharding/replication planned</td>
                        <td style="padding:8px; border:1px solid #ddd;">Some scalability considerations</td>
                        <td style="padding:8px; border:1px solid #ddd;">No scalability plan</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Security</td>
                        <td style="padding:8px; border:1px solid #ddd;">Authentication, authorization, auditing, encryption</td>
                        <td style="padding:8px; border:1px solid #ddd;">Basic security considered</td>
                        <td style="padding:8px; border:1px solid #ddd;">No security considerations</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Evaluate designs against both functional and non-functional requirements",
                "Hybrid designs often best (normalized core + denormalized for queries)",
                "Consider the full lifecycle: development, maintenance, growth",
                "Document trade-offs and justify decisions",
                "Use evaluation rubric to objectively compare alternatives"
            ]
        }
    ],

    summary: `
        <h3>Chapter 3 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Design Methodology:</strong> Requirements → Conceptual → Logical → Physical</li>
            <li><strong>Evaluation Criteria:</strong> Correctness, completeness, integrity, performance, scalability, security</li>
            <li><strong>Performance Optimization:</strong> Indexes (B-Tree, Hash, Bitmap), denormalization, partitioning</li>
            <li><strong>Scalability:</strong> Vertical (scale up) vs Horizontal (scale out), sharding, replication, caching</li>
            <li><strong>Security:</strong> RBAC, views, row-level security, encryption, auditing</li>
            <li><strong>Hybrid Designs:</strong> Normalized core + denormalized views + caching often optimal</li>
            <li><strong>Evaluation:</strong> Compare alternatives systematically, document trade-offs and justifications</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "Compare and contrast vertical and horizontal scaling for databases. When would you choose each?",
            answer: "Vertical scaling adds power to existing server (simpler, limited). Horizontal scaling adds more servers (complex, unlimited). Choose vertical for predictable growth and simpler apps; choose horizontal for massive scale and high availability requirements."
        },
        {
            question: "You're designing a database for an e-commerce site with 1 million products and 10 million orders per year. What performance optimizations would you consider?",
            answer: "Indexes on frequently queried columns (ProductID, CustomerID, OrderDate), partition Orders by date, consider denormalizing customer name into Orders for faster history queries, use Redis cache for product catalog, read replicas for reporting queries."
        },
        {
            question: "Evaluate these two design choices for a hospital system: Option A - Fully normalized with separate audit table. Option B - Denormalized with embedded audit info. Which is better and why?",
            answer: "Option A is better for healthcare where data integrity and audit compliance are critical. The separate audit table ensures complete tracking, and constraints maintain referential integrity. Performance concerns can be addressed with proper indexing."
        },
        {
            question: "What factors should you consider when choosing a shard key for a multi-tenant SaaS application?",
            answer: "Even distribution of data across shards, query patterns (most queries should stay within one shard), ability to add shards later, impact on joins and aggregations. Tenant ID is often a good choice for multi-tenant apps."
        },
        {
            question: "Design a security model for a university database where students can view their grades, faculty can enter grades, and administrators can run reports. Include authentication, authorization, and auditing.",
            answer: "RBAC with roles: Student, Faculty, Admin. Views for each role (StudentView with their grades only, FacultyView for their courses). Row-level security on grade entry. Triggers to audit all grade changes. Encrypt sensitive data (SSN). Application-level authentication with strong passwords."
        }
    ],

    quickTips: [
        "Design is iterative - revisit earlier phases",
        "Evaluate trade-offs: integrity vs performance",
        "Index wisely - too many hurts writes",
        "Plan for growth from day one",
        "Security by design, not as an afterthought",
        "Document all design decisions",
        "Hybrid designs often win"
    ],

    commonMistakes: [
        "❌ Ignoring non-functional requirements",
        "❌ Over-normalizing without considering query patterns",
        "❌ Underestimating data growth",
        "❌ No security planning until the end",
        "❌ Not documenting design trade-offs",
        "❌ Choosing shard key poorly",
        "❌ Forgetting about data archiving"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 3:</h3>
        <p>This chapter has <strong>2 questions</strong> at the <strong>Evaluate</strong> level.</p>
        
        <h4>What "Evaluate" Means:</h4>
        <p>You need to make judgments about database designs, compare alternatives, justify choices, and recommend improvements based on criteria.</p>
        
        <h4>Expected Question Types:</h4>
        <ol>
            <li><strong>Design Evaluation:</strong> Given a database design and requirements, evaluate its strengths and weaknesses, and suggest improvements.</li>
            <li><strong>Alternative Comparison:</strong> Compare two or more design options, analyze trade-offs, and recommend the best choice with justification.</li>
            <li><strong>Complete Design Task:</strong> Design a database for a given scenario, explaining and justifying your decisions.</li>
        </ol>
        
        <h4>Evaluation Criteria to Apply:</h4>
        <ul>
            <li><strong>Correctness:</strong> Does it represent all required data and relationships?</li>
            <li><strong>Integrity:</strong> Are constraints properly defined?</li>
            <li><strong>Performance:</strong> Will common queries be efficient?</li>
            <li><strong>Scalability:</strong> Can it handle growth?</li>
            <li><strong>Maintainability:</strong> Is it easy to modify?</li>
            <li><strong>Security:</strong> Is sensitive data protected?</li>
        </ul>
        
        <h4>Sample Evaluate Question:</h4>
        <div style="background:#f8f9fa; padding:20px; border-radius:10px; margin:20px 0;">
            <p><strong>Question:</strong> A startup is designing a database for their social media platform. They expect 1 million users in the first year, growing to 50 million in 5 years. Their current design uses a single PostgreSQL database with tables for Users, Posts, Likes, and Comments. Evaluate this design and recommend a scalable architecture.</p>
            
            <p><strong>Evaluation:</strong></p>
            <ul>
                <li><strong>Current design issues:</strong> Single database will become a bottleneck for writes and reads as data grows. Likes and comments tables will become huge, making queries slow.</li>
                <li><strong>Recommendations:</strong> Shard by User ID to distribute data, use read replicas for read scaling, implement Redis cache for hot data (trending posts), partition Posts by date, use separate analytics database for reporting.</li>
                <li><strong>Justification:</strong> Sharding allows horizontal scaling as users grow. Caching reduces database load. Partitioning keeps recent data fast. This architecture can scale to 50 million users while maintaining performance.</li>
            </ul>
        </div>
    `
};