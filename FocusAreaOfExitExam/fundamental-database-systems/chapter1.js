// ===============================
// FOCUS AREA: FUNDAMENTAL DATABASE SYSTEMS - CHAPTER 1
// Database Design Principles
// Based on Ministry of Education Blueprint (2 Questions: Understand)
// File Path: FocusAreaOfExitExam/fundamental-database-systems/chapter1.js
// ===============================

window.focusAreaFundamentalDBChapter1 = {
    title: "Chapter 1: Database Design Principles",
    
    description: "Core concepts of database design including data models, schemas, normalization, and entity-relationship modeling.",
    
    blueprint: {
        totalQuestions: 2,
        cognitiveLevels: {
            understand: 2
        },
        topics: [
            "Database concepts and architecture",
            "Data models (relational, hierarchical, network)",
            "Schema design and instances",
            "Entity-Relationship (ER) modeling",
            "Normalization (1NF, 2NF, 3NF, BCNF)",
            "Integrity constraints"
        ]
    },

    learningObjectives: [
        "Understand the fundamental concepts of database management systems",
        "Explain different data models and their characteristics",
        "Describe the process of database design and normalization",
        "Identify integrity constraints and their importance",
        "Understand the role of keys in relational databases"
    ],

    sections: [
        {
            title: "1.1 Introduction to Database Systems",
            content: `
                <h4>What is a Database?</h4>
                <p>A database is an organized collection of structured data, typically stored electronically in a computer system. A database is usually controlled by a Database Management System (DBMS).</p>
                
                <div class="key-points-box">
                    <p><strong>🔑 Key Point:</strong> A database is a collection of related data that represents some aspect of the real world.</p>
                </div>
                
                <h4>Database vs File System</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Aspect</th>
                        <th style="padding:10px; border:1px solid #ddd;">File System</th>
                        <th style="padding:10px; border:1px solid #ddd;">Database System</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Data Redundancy</td>
                        <td style="padding:8px; border:1px solid #ddd;">High (duplicate data)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Low (controlled)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Data Integrity</td>
                        <td style="padding:8px; border:1px solid #ddd;">Difficult to maintain</td>
                        <td style="padding:8px; border:1px solid #ddd;">Enforced through constraints</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Data Independence</td>
                        <td style="padding:8px; border:1px solid #ddd;">None</td>
                        <td style="padding:8px; border:1px solid #ddd;">Program-data independence</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Concurrent Access</td>
                        <td style="padding:8px; border:1px solid #ddd;">Limited/Problems</td>
                        <td style="padding:8px; border:1px solid #ddd;">Handled by DBMS</td>
                    </tr>
                </table>
                
                <h4>Database Characteristics</h4>
                <ul>
                    <li><strong>Self-describing:</strong> Contains metadata about itself</li>
                    <li><strong>Program-data independence:</strong> Data separated from applications</li>
                    <li><strong>Multiple views:</strong> Different users see different data</li>
                    <li><strong>Data sharing:</strong> Multiple users can access concurrently</li>
                    <li><strong>Transaction processing:</strong> ACID properties maintained</li>
                </ul>
                
                <h4>Database Users</h4>
                <ul>
                    <li><strong>Database Administrators (DBA):</strong> Manage the database</li>
                    <li><strong>Database Designers:</strong> Design database structure</li>
                    <li><strong>End Users:</strong> Use the database (naive, sophisticated)</li>
                    <li><strong>Application Programmers:</strong> Write programs that access data</li>
                </ul>
            `,
            keyPoints: [
                "Database = organized collection of structured data",
                "DBMS manages database and provides data independence",
                "Database vs File System: less redundancy, better integrity",
                "ACID properties ensure reliable transactions"
            ]
        },

        {
            title: "1.2 Three-Level Architecture",
            content: `
                <h4>ANSI-SPARC Architecture</h4>
                <p>The three-level architecture provides data independence:</p>
                
                <div style="text-align:center; margin:20px 0;">
                    <pre style="background:#f4f4f4; padding:10px; display:inline-block;">
    External Level (View Level)
             ↑↓
    Conceptual Level (Logical Level)
             ↑↓
    Internal Level (Physical Level)
                    </pre>
                </div>
                
                <h4>Levels of Abstraction</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Level</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Who Uses</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>External Level</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">User's view of the database. Different users have different views.</td>
                        <td style="padding:8px; border:1px solid #ddd;">End Users</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Conceptual Level</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Logical structure of the entire database. What data is stored.</td>
                        <td style="padding:8px; border:1px solid #ddd;">Database Designers, DBAs</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Internal Level</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Physical storage details. How data is stored.</td>
                        <td style="padding:8px; border:1px solid #ddd;">System Programmers, DBAs</td>
                    </tr>
                </table>
                
                <h4>Data Independence</h4>
                <p><strong>Logical Data Independence:</strong> Ability to change conceptual schema without changing external views.</p>
                <p><strong>Physical Data Independence:</strong> Ability to change internal schema without changing conceptual schema.</p>
                
                <div class="key-points-box">
                    <p><strong>🔑 Important:</strong> Physical data independence is easier to achieve than logical data independence.</p>
                </div>
                
                <h4>Database Schema vs Instance</h4>
                <ul>
                    <li><strong>Schema:</strong> The database structure (like variable declarations in programming) - relatively stable</li>
                    <li><strong>Instance:</strong> The actual data at a particular moment (like variable values) - changes frequently</li>
                </ul>
                <p>Analogy: Schema is like a class definition, instance is like objects created from that class.</p>
            `,
            keyPoints: [
                "Three levels: External (views), Conceptual (logical), Internal (physical)",
                "Logical independence: change conceptual without affecting external",
                "Physical independence: change internal without affecting conceptual",
                "Schema = structure, Instance = actual data"
            ]
        },

        {
            title: "1.3 Data Models",
            content: `
                <h4>What is a Data Model?</h4>
                <p>A data model is a collection of concepts for describing data, relationships, semantics, and constraints.</p>
                
                <h4>Categories of Data Models</h4>
                
                <h5>1. High-level (Conceptual) Data Models</h5>
                <p>Close to how users perceive data. Example: Entity-Relationship (ER) model.</p>
                
                <h5>2. Representational (Implementation) Data Models</h5>
                <p>Used by DBMS implementation. Examples:</p>
                <ul>
                    <li><strong>Relational Model:</strong> Data in tables (rows and columns)</li>
                    <li><strong>Network Model:</strong> Records linked together</li>
                    <li><strong>Hierarchical Model:</strong> Tree-like structure</li>
                </ul>
                
                <h5>3. Low-level (Physical) Data Models</h5>
                <p>Describe how data is stored. Example: Record formats, ordering, access paths.</p>
                
                <h4>Relational Model</h4>
                <p>The most widely used model. Key concepts:</p>
                <ul>
                    <li><strong>Relation (Table):</strong> Collection of rows</li>
                    <li><strong>Tuple (Row/Record):</strong> Single entry</li>
                    <li><strong>Attribute (Column):</strong> Property of an entity</li>
                    <li><strong>Domain:</strong> Set of allowable values for an attribute</li>
                    <li><strong>Degree:</strong> Number of attributes</li>
                    <li><strong>Cardinality:</strong> Number of tuples</li>
                </ul>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">StudentID (PK)</th>
                        <th style="padding:10px; border:1px solid #ddd;">Name</th>
                        <th style="padding:10px; border:1px solid #ddd;">Major</th>
                        <th style="padding:10px; border:1px solid #ddd;">GPA</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">1001</td>
                        <td style="padding:8px; border:1px solid #ddd;">Alice</td>
                        <td style="padding:8px; border:1px solid #ddd;">CS</td>
                        <td style="padding:8px; border:1px solid #ddd;">3.8</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">1002</td>
                        <td style="padding:8px; border:1px solid #ddd;">Bob</td>
                        <td style="padding:8px; border:1px solid #ddd;">Math</td>
                        <td style="padding:8px; border:1px solid #ddd;">3.5</td>
                    </tr>
                </table>
                <p><em>Degree = 4, Cardinality = 2</em></p>
                
                <h4>Keys in Relational Model</h4>
                <ul>
                    <li><strong>Superkey:</strong> Set of attributes that uniquely identifies a tuple</li>
                    <li><strong>Candidate Key:</strong> Minimal superkey (no subset is a superkey)</li>
                    <li><strong>Primary Key (PK):</strong> Chosen candidate key to identify tuples</li>
                    <li><strong>Foreign Key (FK):</strong> Attribute referencing primary key of another table</li>
                    <li><strong>Alternate Key:</strong> Candidate keys not chosen as primary key</li>
                </ul>
            `,
            keyPoints: [
                "Data models: Conceptual (ER), Representational (Relational), Physical",
                "Relational model: tables, rows, columns",
                "Degree = number of columns, Cardinality = number of rows",
                "Keys: Primary (unique identifier), Foreign (references other table)"
            ]
        },

        {
            title: "1.4 Entity-Relationship (ER) Modeling",
            content: `
                <h4>ER Model Components</h4>
                
                <h5>Entities and Entity Sets</h5>
                <ul>
                    <li><strong>Entity:</strong> A real-world object (e.g., a specific student)</li>
                    <li><strong>Entity Set:</strong> Collection of similar entities (e.g., all students)</li>
                    <li><strong>Entity Type:</strong> Defines structure (e.g., Student with ID, Name, Major)</li>
                </ul>
                
                <h5>Attributes</h5>
                <ul>
                    <li><strong>Simple vs Composite:</strong> Simple (single value) vs Composite (e.g., Address split into Street, City, Zip)</li>
                    <li><strong>Single-valued vs Multi-valued:</strong> One value (Age) vs Multiple values (Phone numbers)</li>
                    <li><strong>Stored vs Derived:</strong> Stored (Date of Birth) vs Derived (Age from DOB)</li>
                    <li><strong>NULL:</strong> Unknown or not applicable value</li>
                </ul>
                
                <h5>Relationships</h5>
                <ul>
                    <li><strong>Relationship:</strong> Association between entities (e.g., Student takes Course)</li>
                    <li><strong>Relationship Set:</strong> Collection of similar relationships</li>
                    <li><strong>Degree of Relationship:</strong> Number of participating entity types</li>
                    <li><strong>Recursive Relationship:</strong> Entity relates to itself (e.g., Employee manages Employee)</li>
                </ul>
                
                <h4>Relationship Constraints</h4>
                
                <h5>Cardinality Ratios</h5>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>1:1 (One-to-One)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Each entity in A relates to exactly one in B</td>
                        <td style="padding:8px; border:1px solid #ddd;">Employee → Office (each employee has one office)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>1:N (One-to-Many)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Each entity in A relates to many in B</td>
                        <td style="padding:8px; border:1px solid #ddd;">Department → Employees</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>M:N (Many-to-Many)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Entities in A relate to many in B and vice versa</td>
                        <td style="padding:8px; border:1px solid #ddd;">Student → Courses</td>
                    </tr>
                </table>
                
                <h5>Participation Constraints</h5>
                <ul>
                    <li><strong>Total Participation:</strong> Every entity in the set participates (double line in ER diagram)</li>
                    <li><strong>Partial Participation:</strong> Some entities may not participate (single line)</li>
                </ul>
                
                <h4>Weak Entity Types</h4>
                <p>An entity that cannot be uniquely identified by its own attributes alone. It depends on another (owner) entity.</p>
                <ul>
                    <li><strong>Has a discriminator (partial key)</strong> - unique within owner entities</li>
                    <li><strong>Has total participation in identifying relationship</strong></li>
                    <li>Example: Dependent (of Employee) - identified by name and Employee ID</li>
                </ul>
                
                <h4>ER Diagram Notations</h4>
                <ul>
                    <li><strong>Rectangle:</strong> Entity set</li>
                    <li><strong>Diamond:</strong> Relationship set</li>
                    <li><strong>Ellipse:</strong> Attribute</li>
                    <li><strong>Double Ellipse:</strong> Multi-valued attribute</li>
                    <li><strong>Dashed Ellipse:</strong> Derived attribute</li>
                    <li><strong>Underline:</strong> Primary key attribute</li>
                    <li><strong>Double Rectangle:</strong> Weak entity set</li>
                    <li><strong>Double Diamond:</strong> Identifying relationship</li>
                </ul>
            `,
            keyPoints: [
                "Entity = object, Attribute = property, Relationship = association",
                "Cardinality: 1:1, 1:N, M:N",
                "Total participation = all entities participate",
                "Weak entity depends on owner entity for identification"
            ]
        },

        {
            title: "1.5 Normalization",
            content: `
                <h4>What is Normalization?</h4>
                <p>Normalization is the process of organizing data to reduce redundancy and improve data integrity. It involves decomposing tables into smaller, well-structured tables.</p>
                
                <div class="key-points-box">
                    <p><strong>🔑 Purpose:</strong> Eliminate redundant data, avoid anomalies (insertion, update, deletion), and ensure data dependencies make sense.</p>
                </div>
                
                <h4>Types of Anomalies</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Anomaly</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Insertion</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Cannot insert data without additional information</td>
                        <td style="padding:8px; border:1px solid #ddd;">Can't add a course without a student</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Update</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Must update same data in multiple places</td>
                        <td style="padding:8px; border:1px solid #ddd;">Changing department name requires updating all rows</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Deletion</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Deleting data removes unintended information</td>
                        <td style="padding:8px; border:1px solid #ddd;">Deleting last student removes course information</td>
                    </tr>
                </table>
                
                <h4>Functional Dependencies (FD)</h4>
                <p>A functional dependency X → Y means that if two tuples have the same X value, they must have the same Y value.</p>
                <ul>
                    <li><strong>X determines Y</strong> (Y is functionally dependent on X)</li>
                    <li>Example: StudentID → Name (StudentID determines Name)</li>
                </ul>
                
                <h4>Normal Forms</h4>
                
                <h5>1NF (First Normal Form)</h5>
                <ul>
                    <li>Each column must be atomic (no multi-valued attributes)</li>
                    <li>Each row must be unique</li>
                    <li>No repeating groups</li>
                </ul>
                
                <p><strong>Before 1NF (NOT allowed):</strong></p>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr><td>Student</td><td>Courses</td></tr>
                    <tr><td>Alice</td><td>CS101, MATH202</td></tr>
                </table>
                
                <p><strong>After 1NF:</strong></p>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr><td>Student</td><td>Course</td></tr>
                    <tr><td>Alice</td><td>CS101</td></tr>
                    <tr><td>Alice</td><td>MATH202</td></tr>
                </table>
                
                <h5>2NF (Second Normal Form)</h5>
                <ul>
                    <li>Must be in 1NF</li>
                    <li>No partial dependencies (non-key attribute depends on part of a composite key)</li>
                </ul>
                
                <p><strong>Example of violation:</strong> Table (StudentID, CourseID, StudentName, Grade). StudentName depends only on StudentID (part of key), not whole key.</p>
                
                <h5>3NF (Third Normal Form)</h5>
                <ul>
                    <li>Must be in 2NF</li>
                    <li>No transitive dependencies (non-key attribute depends on another non-key attribute)</li>
                </ul>
                
                <p><strong>Example of violation:</strong> Table (StudentID, DepartmentID, DepartmentName). DepartmentName depends on DepartmentID, not directly on StudentID.</p>
                
                <h5>BCNF (Boyce-Codd Normal Form)</h5>
                <ul>
                    <li>Every determinant (left side of FD) must be a candidate key</li>
                    <li>Stricter version of 3NF</li>
                </ul>
                
                <h5>Higher Normal Forms</h5>
                <ul>
                    <li><strong>4NF:</strong> No multi-valued dependencies</li>
                    <li><strong>5NF:</strong> No join dependencies</li>
                </ul>
                
                <h4>Denormalization</h4>
                <p>Intentionally introducing redundancy to improve query performance (trade storage and integrity for speed).</p>
            `,
            keyPoints: [
                "Normalization reduces redundancy and prevents anomalies",
                "1NF: Atomic values, no repeating groups",
                "2NF: No partial dependencies",
                "3NF: No transitive dependencies",
                "BCNF: Every determinant is a candidate key",
                "Denormalization = intentional redundancy for performance"
            ]
        },

        {
            title: "1.6 Integrity Constraints",
            content: `
                <h4>What are Integrity Constraints?</h4>
                <p>Rules that ensure the accuracy and consistency of data in the database.</p>
                
                <h4>Types of Integrity Constraints</h4>
                
                <h5>1. Domain Constraints</h5>
                <p>Specify allowable values for an attribute (data type, range, format).</p>
                <ul>
                    <li>Example: Age must be between 0 and 150</li>
                    <li>Example: Gender must be 'M', 'F', or 'Other'</li>
                </ul>
                
                <h5>2. Key Constraints</h5>
                <p>Ensure that each row is uniquely identified.</p>
                <ul>
                    <li>Primary key must be unique and not NULL</li>
                    <li>Candidate keys must be unique</li>
                </ul>
                
                <h5>3. Entity Integrity Constraint</h5>
                <p>No part of a primary key can be NULL.</p>
                <div class="key-points-box">
                    <p><strong>🔑 Important:</strong> Primary key attributes cannot have NULL values.</p>
                </div>
                
                <h5>4. Referential Integrity Constraint</h5>
                <p>Foreign key must either match a primary key value in the referenced table or be NULL.</p>
                <ul>
                    <li>Ensures relationships between tables remain consistent</li>
                    <li>Prevents orphan records</li>
                </ul>
                
                <h5>5. Semantic Integrity Constraints</h5>
                <p>Business rules that cannot be expressed through other constraints.</p>
                <ul>
                    <li>Example: An employee's salary cannot exceed their manager's salary</li>
                    <li>Implemented through triggers or application code</li>
                </ul>
                
                <h4>Enforcing Constraints</h4>
                <ul>
                    <li><strong>DDL (Data Definition Language):</strong> Define constraints when creating tables</li>
                    <li><strong>Triggers:</strong> Automatically enforce complex rules</li>
                    <li><strong>Assertions:</strong> Conditions that must always hold (supported in some DBMS)</li>
                </ul>
                
                <h4>SQL Constraint Examples</h4>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
CREATE TABLE Student (
    StudentID INT PRIMARY KEY,                    -- Key constraint
    Name VARCHAR(50) NOT NULL,                     -- Domain constraint
    Age INT CHECK (Age >= 0 AND Age <= 150),       -- Domain constraint
    DeptID INT,
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)  -- Referential integrity
);
                </pre>
            `,
            keyPoints: [
                "Domain constraints: attribute value ranges",
                "Key constraints: uniqueness of rows",
                "Entity integrity: no NULL in primary key",
                "Referential integrity: foreign key matches primary key or NULL",
                "Semantic integrity: business rules"
            ]
        }
    ],

    summary: `
        <h3>Chapter 1 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Database:</strong> Organized collection of data with DBMS providing management</li>
            <li><strong>Three-level architecture:</strong> External (views), Conceptual (logical), Internal (physical)</li>
            <li><strong>Data independence:</strong> Physical (easier) and Logical (harder)</li>
            <li><strong>Relational model:</strong> Tables with rows and columns, keys (PK, FK)</li>
            <li><strong>ER Model:</strong> Entities, Attributes, Relationships (1:1, 1:N, M:N)</li>
            <li><strong>Normalization:</strong> 1NF (atomic), 2NF (no partial), 3NF (no transitive)</li>
            <li><strong>Integrity constraints:</strong> Domain, Key, Entity, Referential</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What is the difference between logical and physical data independence?",
            answer: "Logical independence means changing the conceptual schema without affecting external views. Physical independence means changing the internal schema without affecting the conceptual schema. Physical independence is easier to achieve."
        },
        {
            question: "Explain the difference between primary key and foreign key.",
            answer: "Primary key uniquely identifies each row in a table and cannot be NULL. Foreign key references the primary key of another table and can be NULL. Foreign keys maintain referential integrity."
        },
        {
            question: "What are the three types of anomalies that normalization prevents?",
            answer: "Insertion anomaly (can't insert without extra data), Update anomaly (must update multiple places), Deletion anomaly (deleting removes unintended information)."
        },
        {
            question: "What is the difference between 2NF and 3NF?",
            answer: "2NF eliminates partial dependencies (non-key attribute depending on part of composite key). 3NF eliminates transitive dependencies (non-key attribute depending on another non-key attribute)."
        },
        {
            question: "What are the four main integrity constraints?",
            answer: "Domain constraints (attribute values), Key constraints (uniqueness), Entity integrity (no NULL in PK), Referential integrity (FK matches PK or NULL)."
        }
    ],

    quickTips: [
        "Database = organized data + DBMS",
        "Schema = structure, Instance = data",
        "3-level architecture = external, conceptual, internal",
        "Keys: PK (unique), FK (reference)",
        "Normalization: 1NF, 2NF, 3NF, BCNF",
        "Anomalies: insertion, update, deletion",
        "Integrity: domain, key, entity, referential"
    ],

    commonMistakes: [
        "❌ Confusing schema and instance",
        "❌ Thinking primary key can be NULL",
        "❌ Forgetting foreign keys can be NULL",
        "❌ Mixing up 2NF and 3NF conditions",
        "❌ Not understanding partial vs transitive dependencies",
        "❌ Ignoring referential integrity"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 1:</h3>
        <p>This chapter covers fundamental database concepts with <strong>2 questions</strong> at the <strong>Understand</strong> level.</p>
        
        <h4>Focus Areas:</h4>
        <ul>
            <li>Database concepts and architecture</li>
            <li>Data models (especially relational)</li>
            <li>ER modeling components and relationships</li>
            <li>Normalization forms and their purposes</li>
            <li>Integrity constraints and their importance</li>
        </ul>
        
        <h4>Sample Understand Questions:</h4>
        <ol>
            <li>"Explain the three-level ANSI-SPARC architecture and its purpose."</li>
            <li>"What is normalization and why is it important in database design?"</li>
            <li>"Describe the difference between primary key and foreign key with examples."</li>
        </ol>
    `
};