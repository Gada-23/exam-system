// ===============================
// FOCUS AREA: FUNDAMENTAL DATABASE SYSTEMS - CHAPTER 2
// Real-world Database Application
// Based on Ministry of Education Blueprint (1 Apply, 1 Analyze)
// File Path: FocusAreaOfExitExam/fundamental-database-systems/chapter2.js
// ===============================

window.focusAreaFundamentalDBChapter2 = {
    title: "Chapter 2: Real-world Database Application",
    
    description: "Applying database concepts to real-world scenarios including ER-to-Relational mapping, SQL implementation, and analyzing database designs.",
    
    blueprint: {
        totalQuestions: 2,
        cognitiveLevels: {
            apply: 1,
            analyze: 1
        },
        topics: [
            "ER-to-Relational mapping",
            "SQL implementation",
            "Database application development",
            "Analyzing real-world database designs",
            "Identifying design flaws and improvements"
        ]
    },

    learningObjectives: [
        "Apply ER modeling concepts to real-world scenarios",
        "Implement database designs using SQL",
        "Analyze existing database designs for issues",
        "Evaluate design choices and recommend improvements",
        "Translate business requirements into database structures"
    ],

    sections: [
        {
            title: "2.1 ER-to-Relational Mapping (Apply Level)",
            content: `
                <h4>Mapping ER Model to Relational Schema</h4>
                <p>The process of converting an Entity-Relationship diagram into tables (relations) for implementation in a relational database.</p>
                
                <h4>Step-by-Step Mapping Rules</h4>
                
                <h5>Step 1: Map Regular Entity Types</h5>
                <ul>
                    <li>Create a table for each regular entity type</li>
                    <li>Include all simple attributes as columns</li>
                    <li>Choose one candidate key as primary key</li>
                </ul>
                
                <p><strong>Example:</strong> Entity Student with attributes StudentID, Name, Major</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Student(<u>StudentID</u>, Name, Major)
                </pre>
                
                <h5>Step 2: Map Weak Entity Types</h5>
                <ul>
                    <li>Create a table for the weak entity</li>
                    <li>Include foreign key to owner entity's primary key</li>
                    <li>Primary key = foreign key + partial key</li>
                </ul>
                
                <p><strong>Example:</strong> Dependent (weak entity of Employee)</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Dependent(<u>EmployeeID</u>, <u>DependentName</u>, Relationship, Age)
                </pre>
                
                <h5>Step 3: Map 1:1 Relationships</h5>
                <ul>
                    <li>Choose one of the participating tables</li>
                    <li>Add foreign key referencing the other table's primary key</li>
                    <li>Include relationship attributes if any</li>
                    <li>Prefer total participation side for foreign key placement</li>
                </ul>
                
                <p><strong>Example:</strong> Employee manages Department (1:1)</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Employee(<u>EmpID</u>, Name, DeptID)  
Department(<u>DeptID</u>, Name, ManagerID)  ← Choose one
                </pre>
                
                <h5>Step 4: Map 1:N Relationships</h5>
                <ul>
                    <li>Add foreign key in the table on the N-side (many side)</li>
                    <li>Foreign key references the primary key on the 1-side</li>
                    <li>Include relationship attributes in the N-side table</li>
                </ul>
                
                <p><strong>Example:</strong> Department has Employees (1:N)</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Department(<u>DeptID</u>, Name)
Employee(<u>EmpID</u>, Name, <u>DeptID</u>)  ← Foreign key in many-side
                </pre>
                
                <div class="key-points-box">
                    <p><strong>🔑 Key Point:</strong> For 1:N relationships, always put the foreign key in the table on the N-side (many-side).</p>
                </div>
                
                <h5>Step 5: Map M:N Relationships</h5>
                <ul>
                    <li>Create a new relationship table</li>
                    <li>Include foreign keys referencing both participating tables</li>
                    <li>Primary key = combination of both foreign keys (composite key)</li>
                    <li>Include any relationship attributes in this new table</li>
                </ul>
                
                <p><strong>Example:</strong> Student enrolls in Course (M:N)</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Student(<u>StudentID</u>, Name)
Course(<u>CourseID</u>, Title)
Enrolls(<u>StudentID</u>, <u>CourseID</u>, Grade, Semester)
                </pre>
                
                <h5>Step 6: Map Multi-valued Attributes</h5>
                <ul>
                    <li>Create a new table for the multi-valued attribute</li>
                    <li>Include foreign key to the original entity's primary key</li>
                    <li>Primary key = foreign key + attribute value</li>
                </ul>
                
                <p><strong>Example:</strong> Employee has multiple phone numbers</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Employee(<u>EmpID</u>, Name)
Employee_Phone(<u>EmpID</u>, <u>PhoneNumber</u>)
                </pre>
                
                <h5>Step 7: Map N-ary Relationships</h5>
                <ul>
                    <li>Create a new table</li>
                    <li>Include foreign keys to all participating entities</li>
                    <li>Primary key = combination of all foreign keys (or subset that uniquely identifies)</li>
                </ul>
                
                <h4>Mapping Summary Table</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">ER Construct</th>
                        <th style="padding:10px; border:1px solid #ddd;">Mapping Method</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Regular Entity</td>
                        <td style="padding:8px; border:1px solid #ddd;">Create table with entity attributes</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Weak Entity</td>
                        <td style="padding:8px; border:1px solid #ddd;">Create table with FK to owner + partial key</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">1:1 Relationship</td>
                        <td style="padding:8px; border:1px solid #ddd;">Add FK in one table (choose side)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">1:N Relationship</td>
                        <td style="padding:8px; border:1px solid #ddd;">Add FK in N-side table</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">M:N Relationship</td>
                        <td style="padding:8px; border:1px solid #ddd;">Create new relationship table</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Multi-valued Attribute</td>
                        <td style="padding:8px; border:1px solid #ddd;">Create new table with FK</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Regular entity → table with primary key",
                "Weak entity → table with FK to owner + partial key",
                "1:1 → FK in either table",
                "1:N → FK in N-side table",
                "M:N → new table with composite PK",
                "Multi-valued → new table"
            ]
        },

        {
            title: "2.2 SQL Implementation (Apply Level)",
            content: `
                <h4>SQL Data Definition Language (DDL)</h4>
                <p>Creating database structures from our mapped schema.</p>
                
                <h4>CREATE TABLE Examples</h4>
                
                <h5>Creating Regular Entity Tables</h5>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
CREATE TABLE Student (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Major VARCHAR(50),
    GPA DECIMAL(3,2) CHECK (GPA >= 0 AND GPA <= 4.0)
);

CREATE TABLE Course (
    CourseID VARCHAR(10) PRIMARY KEY,
    Title VARCHAR(200) NOT NULL,
    Credits INT CHECK (Credits > 0)
);
                </pre>
                
                <h5>Creating 1:N Relationship (Foreign Key in Many-side)</h5>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
CREATE TABLE Employee (
    EmpID INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    DeptID INT,
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);
                </pre>
                
                <h5>Creating M:N Relationship (Junction Table)</h5>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
CREATE TABLE Enrolls (
    StudentID INT,
    CourseID VARCHAR(10),
    Grade CHAR(2),
    Semester VARCHAR(20),
    PRIMARY KEY (StudentID, CourseID),
    FOREIGN KEY (StudentID) REFERENCES Student(StudentID),
    FOREIGN KEY (CourseID) REFERENCES Course(CourseID)
);
                </pre>
                
                <h5>Creating Multi-valued Attribute Table</h5>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
CREATE TABLE Employee_Phone (
    EmpID INT,
    PhoneNumber VARCHAR(15),
    PhoneType VARCHAR(10),
    PRIMARY KEY (EmpID, PhoneNumber),
    FOREIGN KEY (EmpID) REFERENCES Employee(EmpID)
);
                </pre>
                
                <h4>SQL Data Manipulation Language (DML)</h4>
                
                <h5>INSERT Examples</h5>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- Insert single row
INSERT INTO Student (StudentID, Name, Major, GPA)
VALUES (1001, 'Alice Johnson', 'Computer Science', 3.8);

-- Insert multiple rows
INSERT INTO Course (CourseID, Title, Credits) VALUES
('CS101', 'Introduction to Programming', 3),
('CS201', 'Data Structures', 4),
('MATH202', 'Calculus II', 3);
                </pre>
                
                <h5>UPDATE Examples</h5>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- Update single row
UPDATE Student
SET GPA = 3.9
WHERE StudentID = 1001;

-- Update multiple rows
UPDATE Course
SET Credits = 4
WHERE Title LIKE '%Advanced%';
                </pre>
                
                <h5>DELETE Examples</h5>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- Delete specific row
DELETE FROM Student
WHERE StudentID = 1002;

-- Delete based on condition
DELETE FROM Enrolls
WHERE Semester = 'Fall 2023' AND Grade IS NULL;
                </pre>
                
                <h4>SQL Query Examples</h4>
                
                <h5>Basic SELECT</h5>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- All students
SELECT * FROM Student;

-- Specific columns with condition
SELECT Name, Major FROM Student
WHERE GPA > 3.5;
                </pre>
                
                <h5>JOIN Queries</h5>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- Students and their courses (INNER JOIN)
SELECT s.Name, c.Title, e.Grade
FROM Student s
JOIN Enrolls e ON s.StudentID = e.StudentID
JOIN Course c ON e.CourseID = c.CourseID;

-- Students with their departments (LEFT JOIN)
SELECT s.Name, d.DeptName
FROM Student s
LEFT JOIN Department d ON s.DeptID = d.DeptID;
                </pre>
                
                <h5>Aggregate Queries</h5>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- Average GPA by major
SELECT Major, AVG(GPA) as AvgGPA, COUNT(*) as StudentCount
FROM Student
GROUP BY Major
HAVING AVG(GPA) > 3.0;
                </pre>
            `,
            keyPoints: [
                "DDL: CREATE, ALTER, DROP tables",
                "DML: INSERT, UPDATE, DELETE data",
                "Primary key = unique identifier, NOT NULL",
                "Foreign key = references PK of another table",
                "Junction tables handle M:N relationships",
                "JOINs combine data from multiple tables"
            ]
        },

        {
            title: "2.3 Real-world Case Study: University Database (Apply Level)",
            content: `
                <h4>Case Study: University Registration System</h4>
                
                <h4>Requirements Analysis</h4>
                <ul>
                    <li>The university has multiple departments</li>
                    <li>Each department offers courses</li>
                    <li>Students enroll in courses each semester</li>
                    <li>Instructors teach courses</li>
                    <li>Students receive grades for enrolled courses</li>
                </ul>
                
                <h4>ER Diagram Design</h4>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
Entities:
- Department (DeptID, Name, Office)
- Student (StudentID, Name, DOB, Address)
- Instructor (InstructorID, Name, Office, DeptID)
- Course (CourseID, Title, Credits, DeptID)
- Section (SectionID, CourseID, Semester, Year, InstructorID)
- Enrollment (StudentID, SectionID, Grade)

Relationships:
- Department offers Course (1:N)
- Department employs Instructor (1:N)
- Student enrolls in Section (M:N) → Enrollment table
- Instructor teaches Section (1:N)
- Course has Section (1:N)
                </pre>
                
                <h4>Mapping to Relational Schema</h4>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- Department table
Department(<u>DeptID</u>, Name, Office)

-- Student table
Student(<u>StudentID</u>, Name, DOB, Address, Major)

-- Instructor table
Instructor(<u>InstructorID</u>, Name, Office, <u>DeptID</u>)

-- Course table
Course(<u>CourseID</u>, Title, Credits, <u>DeptID</u>)

-- Section table
Section(<u>SectionID</u>, <u>CourseID</u>, Semester, Year, <u>InstructorID</u>)

-- Enrollment table (M:N relationship)
Enrollment(<u>StudentID</u>, <u>SectionID</u>, Grade)
                </pre>
                
                <h4>SQL Implementation</h4>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- Create Department table
CREATE TABLE Department (
    DeptID INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL UNIQUE,
    Office VARCHAR(50)
);

-- Create Student table
CREATE TABLE Student (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    DOB DATE,
    Address VARCHAR(200),
    Major VARCHAR(50)
);

-- Create Instructor table
CREATE TABLE Instructor (
    InstructorID INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Office VARCHAR(50),
    DeptID INT,
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);

-- Create Course table
CREATE TABLE Course (
    CourseID VARCHAR(10) PRIMARY KEY,
    Title VARCHAR(200) NOT NULL,
    Credits INT CHECK (Credits BETWEEN 1 AND 6),
    DeptID INT,
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);

-- Create Section table
CREATE TABLE Section (
    SectionID INT PRIMARY KEY,
    CourseID VARCHAR(10) NOT NULL,
    Semester VARCHAR(10) CHECK (Semester IN ('Fall', 'Spring', 'Summer')),
    Year INT,
    InstructorID INT,
    FOREIGN KEY (CourseID) REFERENCES Course(CourseID),
    FOREIGN KEY (InstructorID) REFERENCES Instructor(InstructorID),
    UNIQUE (CourseID, Semester, Year, InstructorID)
);

-- Create Enrollment table (M:N relationship)
CREATE TABLE Enrollment (
    StudentID INT,
    SectionID INT,
    Grade CHAR(2),
    PRIMARY KEY (StudentID, SectionID),
    FOREIGN KEY (StudentID) REFERENCES Student(StudentID),
    FOREIGN KEY (SectionID) REFERENCES Section(SectionID)
);
                </pre>
                
                <h4>Sample Queries for the University Database</h4>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- 1. Find all students in 'Computer Science' major
SELECT Name, StudentID
FROM Student
WHERE Major = 'Computer Science';

-- 2. List all courses offered by 'CS' department
SELECT c.CourseID, c.Title
FROM Course c
JOIN Department d ON c.DeptID = d.DeptID
WHERE d.Name = 'Computer Science';

-- 3. Find students enrolled in 'CS101' for Fall 2024
SELECT s.Name, s.StudentID
FROM Student s
JOIN Enrollment e ON s.StudentID = e.StudentID
JOIN Section sec ON e.SectionID = sec.SectionID
JOIN Course c ON sec.CourseID = c.CourseID
WHERE c.CourseID = 'CS101' 
  AND sec.Semester = 'Fall' 
  AND sec.Year = 2024;

-- 4. Calculate GPA for student with ID 1001
SELECT AVG(CASE 
    WHEN Grade = 'A' THEN 4.0
    WHEN Grade = 'A-' THEN 3.7
    WHEN Grade = 'B+' THEN 3.3
    WHEN Grade = 'B' THEN 3.0
    -- ... other grades
    ELSE 0 END) as GPA
FROM Enrollment
WHERE StudentID = 1001 AND Grade IS NOT NULL;

-- 5. Find instructors teaching more than 2 sections
SELECT i.Name, COUNT(*) as SectionCount
FROM Instructor i
JOIN Section s ON i.InstructorID = s.InstructorID
WHERE s.Year = 2024
GROUP BY i.InstructorID, i.Name
HAVING COUNT(*) > 2;
                </pre>
            `,
            keyPoints: [
                "Real-world design requires understanding business requirements",
                "ER diagrams capture entities, attributes, and relationships",
                "Mapping rules convert ER to relational schema",
                "SQL implements the design with tables and constraints",
                "Queries retrieve meaningful information from the database"
            ]
        },

        {
            title: "2.4 Analyzing Database Designs (Analyze Level)",
            content: `
                <h4>Blueprint Focus: Analyze - Evaluating Database Designs</h4>
                
                <p>At the Analyze level, you need to examine database designs, identify issues, and understand the implications of design choices.</p>
                
                <h4>Common Design Issues to Analyze</h4>
                
                <h5>1. Redundancy and Anomalies</h5>
                <p><strong>Scenario:</strong> A table stores employee information and department information together.</p>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
Employee(<u>EmpID</u>, EmpName, DeptID, DeptName, DeptLocation)
                </pre>
                
                <p><strong>Analysis:</strong></p>
                <ul>
                    <li><strong>Redundancy:</strong> DeptName and DeptLocation repeat for every employee in the same department</li>
                    <li><strong>Update Anomaly:</strong> Changing DeptName requires updating multiple rows</li>
                    <li><strong>Insertion Anomaly:</strong> Can't add a new department without employees</li>
                    <li><strong>Deletion Anomaly:</strong> Deleting last employee removes department information</li>
                </ul>
                
                <p><strong>Solution:</strong> Normalize into two tables</p>
                
                <h5>2. Poor Choice of Primary Key</h5>
                <p><strong>Scenario:</strong> Using Name as primary key for Student table</p>
                
                <p><strong>Analysis:</strong></p>
                <ul>
                    <li>Names may not be unique (two students named "John Smith")</li>
                    <li>Names can change (marriage, legal name change)</li>
                    <li>Violates primary key requirements (must be unique, stable)</li>
                </ul>
                
                <p><strong>Solution:</strong> Use surrogate key (StudentID) or natural key that's truly unique (SSN, but privacy concerns)</p>
                
                <h5>3. Missing Foreign Key Constraints</h5>
                <p><strong>Scenario:</strong> Course table has DeptID but no foreign key constraint</p>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
Course(<u>CourseID</u>, Title, DeptID)
                </pre>
                
                <p><strong>Analysis:</strong></p>
                <ul>
                    <li>Can insert DeptID that doesn't exist in Department table</li>
                    <li>Can delete Department that still has courses (orphaned records)</li>
                    <li>Referential integrity is not maintained</li>
                </ul>
                
                <p><strong>Solution:</strong> Add foreign key constraint with appropriate actions (CASCADE, SET NULL, RESTRICT)</p>
                
                <h5>4. Incorrect Relationship Mapping</h5>
                <p><strong>Scenario:</strong> Mapping M:N relationship by adding multiple foreign key columns</p>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
Student(<u>StudentID</u>, Name, Course1, Course2, Course3, Grade1, Grade2, Grade3)
                </pre>
                
                <p><strong>Analysis:</strong></p>
                <ul>
                    <li>Fixed number of courses (can't handle variable enrollment)</li>
                    <li>Wasted space when students take fewer courses</li>
                    <li>Difficult to query (which column to search?)</li>
                    <li>Violates 1NF (repeating groups)</li>
                </ul>
                
                <p><strong>Solution:</strong> Create junction table Enrollment(StudentID, CourseID, Grade)</p>
                
                <h4>Analyzing Design Alternatives</h4>
                
                <h5>Scenario: Storing Order Data</h5>
                <p><strong>Option A:</strong> Denormalized - all order details in one table</p>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
Order(<u>OrderID</u>, CustomerName, CustomerAddress, Product1, Qty1, Price1, Product2, Qty2, Price2)
                </pre>
                
                <p><strong>Option B:</strong> Normalized - separate Customer, Order, OrderItem tables</p>
                
                <p><strong>Analysis:</strong></p>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Aspect</th>
                        <th style="padding:10px; border:1px solid #ddd;">Option A (Denormalized)</th>
                        <th style="padding:10px; border:1px solid #ddd;">Option B (Normalized)</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Query Performance</td>
                        <td style="padding:8px; border:1px solid #ddd;">Faster for simple queries (no joins)</td>
                        <td style="padding:8px; border:1px solid #ddd;">May require joins, but can be optimized</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Storage</td>
                        <td style="padding:8px; border:1px solid #ddd;">More (redundant customer data)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Less (no redundancy)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Data Integrity</td>
                        <td style="padding:8px; border:1px solid #ddd;">Difficult (customer address in many places)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Easy (customer data in one place)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Flexibility</td>
                        <td style="padding:8px; border:1px solid #ddd;">Limited (fixed number of items)</td>
                        <td style="padding:8px; border:1px solid #ddd;">High (any number of items)</td>
                    </tr>
                </table>
                
                <p><strong>Conclusion:</strong> Option B is better for most applications unless performance is critical and queries are simple.</p>
                
                <h4>Analyzing Indexing Choices</h4>
                <p><strong>Scenario:</strong> Table with 1 million employee records, frequent queries by LastName and by Salary range</p>
                
                <p><strong>Analysis:</strong></p>
                <ul>
                    <li><strong>Index on LastName:</strong> Good for exact match and prefix searches (WHERE LastName = 'Smith')</li>
                    <li><strong>Index on Salary:</strong> Good for range queries (WHERE Salary BETWEEN 50000 AND 70000)</li>
                    <li><strong>Composite index (LastName, FirstName):</strong> Good for searches by full name</li>
                </ul>
                
                <p><strong>Trade-offs:</strong> Indexes speed up reads but slow down writes (INSERT, UPDATE, DELETE) and use storage.</p>
            `,
            keyPoints: [
                "Analyze designs for redundancy, anomalies, and integrity issues",
                "Poor PK choices: non-unique, changeable values",
                "Missing FK constraints lead to orphan records",
                "M:N relationships need junction tables",
                "Denormalization improves read performance at cost of write performance and integrity"
            ]
        },

        {
            title: "2.5 Case Study Analysis: E-Commerce Database (Analyze Level)",
            content: `
                <h4>Case Study: E-Commerce Platform Database</h4>
                
                <h4>Given Design</h4>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
CREATE TABLE Customer (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100),
    Phone VARCHAR(15),
    Address TEXT
);

CREATE TABLE Product (
    ProductID INT PRIMARY KEY,
    Name VARCHAR(200),
    Price DECIMAL(10,2),
    Category VARCHAR(50),
    Stock INT
);

CREATE TABLE Order (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,
    TotalAmount DECIMAL(10,2),
    Status VARCHAR(20),
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID)
);

CREATE TABLE OrderItem (
    OrderID INT,
    ProductID INT,
    Quantity INT,
    Price DECIMAL(10,2),  -- Price at time of order
    PRIMARY KEY (OrderID, ProductID),
    FOREIGN KEY (OrderID) REFERENCES Order(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Product(ProductID)
);

CREATE TABLE Review (
    ReviewID INT PRIMARY KEY,
    CustomerID INT,
    ProductID INT,
    Rating INT CHECK (Rating BETWEEN 1 AND 5),
    Comment TEXT,
    ReviewDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID),
    FOREIGN KEY (ProductID) REFERENCES Product(ProductID)
);
                </pre>
                
                <h4>Analysis Task 1: Identify Potential Issues</h4>
                
                <p><strong>Issue 1: Customer Address Changes</strong></p>
                <ul>
                    <li>If customer moves, we lose historical shipping information</li>
                    <li>Orders should store shipping address at time of order</li>
                    <li><strong>Recommendation:</strong> Add ShippingAddress to Order table</li>
                </ul>
                
                <p><strong>Issue 2: Product Price Changes</strong></p>
                <ul>
                    <li>OrderItem stores price at time of order (good!)</li>
                    <li>But what about historical orders when products are discontinued?</li>
                    <li><strong>Analysis:</strong> This design handles it well - price is preserved</li>
                </ul>
                
                <p><strong>Issue 3: Review Table</strong></p>
                <ul>
                    <li>No constraint preventing multiple reviews by same customer for same product</li>
                    <li>Could lead to spam or manipulation</li>
                    <li><strong>Recommendation:</strong> Add UNIQUE(CustomerID, ProductID) constraint</li>
                </ul>
                
                <p><strong>Issue 4: Order TotalAmount</strong></p>
                <ul>
                    <li>Stored redundantly (can be calculated from OrderItems)</li>
                    <li>Risk of inconsistency if OrderItems change</li>
                    <li><strong>Analysis:</strong> This is denormalization for performance. Must ensure updates are synchronized.</li>
                </ul>
                
                <h4>Analysis Task 2: Query Analysis</h4>
                
                <p><strong>Query 1: Find top 5 customers by total spending</strong></p>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
SELECT c.CustomerID, c.Name, SUM(o.TotalAmount) as TotalSpent
FROM Customer c
JOIN Order o ON c.CustomerID = o.CustomerID
WHERE o.Status = 'Completed'
GROUP BY c.CustomerID, c.Name
ORDER BY TotalSpent DESC
LIMIT 5;
                </pre>
                
                <p><strong>Analysis:</strong> This query will perform a full table scan. Consider index on Order.Status and composite index on (CustomerID, Status).</p>
                
                <p><strong>Query 2: Find products frequently bought together</strong></p>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
SELECT oi1.ProductID as Product1, oi2.ProductID as Product2, COUNT(*) as TimesBoughtTogether
FROM OrderItem oi1
JOIN OrderItem oi2 ON oi1.OrderID = oi2.OrderID AND oi1.ProductID < oi2.ProductID
GROUP BY oi1.ProductID, oi2.ProductID
ORDER BY TimesBoughtTogether DESC;
                </pre>
                
                <p><strong>Analysis:</strong> This is a complex query that could be expensive on large datasets. Consider materialized views or periodic batch processing.</p>
                
                <h4>Analysis Task 3: Design Improvement Recommendations</h4>
                
                <ol>
                    <li><strong>Add indexes:</strong> Order(CustomerID), Order(Status), Product(Category), Review(ProductID)</li>
                    <li><strong>Add constraints:</strong> UNIQUE(CustomerID, ProductID) on Review</li>
                    <li><strong>Add ShippingAddress to Order</strong> for historical accuracy</li>
                    <li><strong>Consider partitioning Order table</strong> by date for better performance</li>
                    <li><strong>Add trigger</strong> to maintain TotalAmount consistency</li>
                    <li><strong>Add customer login history table</strong> for security analysis</li>
                </ol>
            `,
            keyPoints: [
                "Analyze designs for missing attributes (like shipping address)",
                "Check for missing constraints (unique, check)",
                "Evaluate query performance and suggest indexes",
                "Identify denormalization and ensure consistency",
                "Recommend improvements based on analysis"
            ]
        },

        {
            title: "2.6 Applying Design Patterns (Apply & Analyze)",
            content: `
                <h4>Common Database Design Patterns</h4>
                
                <h5>1. Entity-Attribute-Value (EAV) Pattern</h5>
                <p><strong>Use when:</strong> Entities have variable attributes</p>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- Traditional design (fixed attributes)
Product(<u>ProductID</u>, Name, Price, Weight, Color, Size, Material)

-- EAV pattern (flexible attributes)
Product(<u>ProductID</u>, Name)
ProductAttribute(<u>ProductID</u>, <u>AttributeName</u>, AttributeValue)
                </pre>
                
                <p><strong>Apply:</strong> Use for products with different attribute sets (clothing has size/color, electronics have wattage)</p>
                <p><strong>Analyze:</strong> EAV is flexible but queries become complex and performance suffers. Only use when truly needed.</p>
                
                <h5>2. Hierarchical Data Patterns</h5>
                
                <p><strong>Adjacency List:</strong> Store parent ID</p>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
Category(<u>CategoryID</u>, Name, ParentCategoryID)
                </pre>
                
                <p><strong>Nested Set:</strong> Store left/right values</p>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
Category(<u>CategoryID</u>, Name, Lft, Rgt)
                </pre>
                
                <p><strong>Apply:</strong> Use Adjacency List for simple hierarchies, Nested Set for frequent subtree queries</p>
                <p><strong>Analyze:</strong> Adjacency List easy to maintain but recursive queries needed. Nested Set complex to maintain but fast queries.</p>
                
                <h5>3. Polymorphic Associations</h5>
                <p>When a table needs to reference multiple other tables</p>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- Bad design
Comment(<u>CommentID</u>, Text, ProductID, PostID, UserID)  -- many NULLs

-- Better design
Comment(<u>CommentID</u>, Text, ParentType, ParentID)
-- ParentType = 'Product', 'Post', 'User'
                </pre>
                
                <p><strong>Analyze:</strong> Can't enforce referential integrity with ParentID (since it references different tables). Consider separate tables or using database features like PostgreSQL's inheritance.</p>
                
                <h5>4. Slow Changing Dimensions (SCD)</h5>
                <p>Handling changes over time</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">SCD Type 0</td>
                        <td style="padding:8px; border:1px solid #ddd;">No changes</td>
                        <td style="padding:8px; border:1px solid #ddd;">Date of birth</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">SCD Type 1</td>
                        <td style="padding:8px; border:1px solid #ddd;">Overwrite</td>
                        <td style="padding:8px; border:1px solid #ddd;">Customer email (lose history)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">SCD Type 2</td>
                        <td style="padding:8px; border:1px solid #ddd;">Add new row with version/date</td>
                        <td style="padding:8px; border:1px solid #ddd;">Customer address (keep history)</td>
                    </tr>
                </table>
                
                <h4>Apply Exercise: Design a Product Review System</h4>
                
                <p><strong>Requirements:</strong></p>
                <ul>
                    <li>Users can review products</li>
                    <li>Reviews have rating (1-5) and text</li>
                    <li>Users can comment on reviews</li>
                    <li>Reviews can have images</li>
                    <li>Track helpful votes on reviews</li>
                </ul>
                
                <p><strong>Your Design (Apply):</strong></p>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- User table
User(<u>UserID</u>, Username, Email)

-- Product table
Product(<u>ProductID</u>, Name)

-- Review table
Review(<u>ReviewID</u>, <u>UserID</u>, <u>ProductID</u>, Rating, Text, Date)
-- Note: Consider UNIQUE(UserID, ProductID) to prevent multiple reviews

-- Comment table (self-referential for threaded comments)
Comment(<u>CommentID</u>, <u>ReviewID</u>, <u>UserID</u>, Text, Date, ParentCommentID)

-- ReviewImage table (multi-valued attribute)
ReviewImage(<u>ReviewID</u>, <u>ImageURL</u>, Caption)

-- HelpfulVote table (M:N between User and Review)
HelpfulVote(<u>UserID</u>, <u>ReviewID</u>, VoteDate)
                </pre>
                
                <p><strong>Analyze:</strong> Consider performance with millions of helpful votes. Maybe denormalize helpful count into Review table.</p>
            `,
            keyPoints: [
                "EAV pattern: flexible but complex queries",
                "Hierarchical patterns: Adjacency List (simple) vs Nested Set (fast queries)",
                "Polymorphic associations: flexible but lose referential integrity",
                "SCD patterns: Type 1 (overwrite), Type 2 (keep history)",
                "Apply patterns based on requirements, analyze trade-offs"
            ]
        }
    ],

    summary: `
        <h3>Chapter 2 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>ER-to-Relational Mapping:</strong> Regular entities → tables, Weak entities → table with FK, 1:1 → FK in either, 1:N → FK in N-side, M:N → junction table</li>
            <li><strong>SQL Implementation:</strong> DDL for structure, DML for data, constraints for integrity</li>
            <li><strong>Real-world Case Study:</strong> University database demonstrates full design process</li>
            <li><strong>Analyze Designs:</strong> Look for redundancy, anomalies, poor key choices, missing constraints</li>
            <li><strong>E-Commerce Analysis:</strong> Consider historical data (shipping addresses, prices), prevent duplicate reviews</li>
            <li><strong>Design Patterns:</strong> EAV for flexibility, Adjacency List for hierarchies, SCD for historical tracking</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "How do you map a 1:N relationship to relational tables?",
            "answer": "Place the foreign key in the table on the N-side (many side). For example, in a Department-Employee relationship, add DeptID as foreign key in the Employee table."
        },
        {
            question: "What is the correct way to map an M:N relationship?",
            "answer": "Create a new junction table with composite primary key consisting of foreign keys to both participating tables. Include any relationship attributes in this table."
        },
        {
            question: "Analyze this design: Student(StudentID, Name, Course1, Course2, Course3). What are the issues?",
            "answer": "Issues: Fixed number of courses (can't handle variable enrollment), repeating groups (violates 1NF), wasted space, difficult to query. Solution: Create Enrollment junction table."
        },
        {
            question: "In an e-commerce database, why should shipping address be stored in the Order table rather than just in Customer table?",
            "answer": "Customers may change addresses. Storing shipping address in Order preserves historical information about where orders were actually shipped, which is important for records and returns."
        },
        {
            question: "Compare Adjacency List and Nested Set patterns for hierarchical data.",
            "answer": "Adjacency List (store parent ID) is easy to maintain but requires recursive queries. Nested Set (store left/right values) enables fast subtree queries but is complex to maintain. Choose based on query patterns."
        }
    ],

    quickTips: [
        "1:N → FK in N-side table",
        "M:N → junction table with composite PK",
        "Weak entity → FK to owner + partial key",
        "Multi-valued → new table",
        "Always add foreign key constraints",
        "Analyze for redundancy and anomalies",
        "Consider historical data needs (SCD)"
    ],

    commonMistakes: [
        "❌ Placing FK on wrong side in 1:N relationships",
        "❌ Forgetting to create junction table for M:N",
        "❌ Not adding UNIQUE constraints when needed",
        "❌ Ignoring historical data requirements",
        "❌ Over-normalizing when performance matters",
        "❌ Under-normalizing causing anomalies"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 2:</h3>
        <p>This chapter has <strong>2 questions</strong> distributed as:</p>
        <ul>
            <li><strong>1 Apply question:</strong> Map ER diagrams to relational schema, write SQL, implement database designs</li>
            <li><strong>1 Analyze question:</strong> Evaluate existing designs, identify issues, recommend improvements</li>
        </ul>
        
        <h4>Apply Level Focus:</h4>
        <ul>
            <li>Given an ER diagram, produce the relational schema</li>
            <li>Write CREATE TABLE statements with constraints</li>
            <li>Implement a database for a given scenario</li>
            <li>Write SQL queries to retrieve information</li>
        </ul>
        
        <h4>Analyze Level Focus:</h4>
        <ul>
            <li>Identify design flaws (redundancy, anomalies)</li>
            <li>Evaluate design alternatives and trade-offs</li>
            <li>Analyze query performance and suggest indexes</li>
            <li>Recommend improvements to existing designs</li>
        </ul>
        
        <h4>Sample Apply Question:</h4>
        <p>Map the following ER diagram to relational schema: A library has Books (ISBN, Title, Year) and Authors (AuthorID, Name). A book can have multiple authors, and an author can write multiple books. Include publication year for each author-book relationship.</p>
        
        <h4>Sample Analyze Question:</h4>
        <p>A student database uses this table: Student(StudentID, Name, Major, AdvisorName, AdvisorOffice). Identify the issues and propose a normalized design.</p>
    `
};