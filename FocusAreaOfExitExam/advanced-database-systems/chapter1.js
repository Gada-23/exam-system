// ===============================
// FOCUS AREA: ADVANCED DATABASE SYSTEMS - CHAPTER 1
// Object-Oriented Model Concepts
// Based on Ministry of Education Blueprint (1 Question: Understand)
// File Path: FocusAreaOfExitExam/advanced-database-systems/chapter1.js
// ===============================

window.focusAreaAdvancedDBChapter1 = {
    title: "Chapter 1: Object-Oriented Database Concepts",
    
    description: "Understanding object-oriented data model, OODBMS features, comparison with relational databases, and object-relational mapping.",
    
    blueprint: {
        totalQuestions: 1,
        cognitiveLevels: {
            understand: 1
        },
        topics: [
            "Object-oriented data model concepts",
            "Objects, classes, inheritance, polymorphism",
            "OODBMS features and architecture",
            "Comparison with relational databases",
            "Object-relational mapping (ORM)",
            "Persistence and object identity"
        ]
    },

    learningObjectives: [
        "Understand the fundamental concepts of object-oriented data model",
        "Explain objects, classes, inheritance, and polymorphism in database context",
        "Describe OODBMS features and architecture",
        "Compare OODBMS with RDBMS",
        "Understand object-relational mapping concepts",
        "Explain object identity and persistence"
    ],

    sections: [
        {
            title: "1.1 Introduction to Object-Oriented Databases",
            content: `
                <h4>What is an Object-Oriented Database?</h4>
                <p>An object-oriented database (OODB) is a database system that represents information in the form of objects, integrating database capabilities with object-oriented programming language features.</p>
                
                <div class="key-points-box">
                    <p><strong>🔑 Key Point:</strong> OODB stores data as objects, just like in object-oriented programming (OOP), with attributes and methods.</p>
                </div>
                
                <h4>Why Object-Oriented Databases?</h4>
                <ul>
                    <li><strong>Complex data types:</strong> Handle multimedia, CAD/CAM, GIS data naturally</li>
                    <li><strong>Direct mapping:</strong> Objects in code map directly to database objects</li>
                    <li><strong>Inheritance:</strong> Model real-world hierarchies naturally</li>
                    <li><strong>Methods:</strong> Store behavior with data</li>
                </ul>
                
                <h4>Object-Oriented vs Relational Databases</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Aspect</th>
                        <th style="padding:10px; border:1px solid #ddd;">Relational (RDBMS)</th>
                        <th style="padding:10px; border:1px solid #ddd;">Object-Oriented (OODBMS)</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Data Unit</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Tables (rows and columns)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Objects</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Relationships</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Foreign keys, join tables</td>
                        <td style="padding:8px; border:1px solid #ddd;">Object references (pointers)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Inheritance</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Not directly supported</td>
                        <td style="padding:8px; border:1px solid #ddd;">Native support (class hierarchies)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Behavior</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Stored procedures (separate)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Methods (with data)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Query Language</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">SQL (standard)</td>
                        <td style="padding:8px; border:1px solid #ddd;">OQL (Object Query Language)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Best For</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Business applications, transactions</td>
                        <td style="padding:8px; border:1px solid #ddd;">Complex data, CAD/CAM, multimedia</td>
                    </tr>
                </table>
                
                <h4>Object-Oriented Database Manifesto</h4>
                <p>The OODB Manifesto (1989) defined mandatory features:</p>
                <ul>
                    <li><strong>Complex objects:</strong> Support for nested objects</li>
                    <li><strong>Object identity:</strong> Unique OID independent of state</li>
                    <li><strong>Encapsulation:</strong> Methods and data together</li>
                    <li><strong>Types/Classes:</strong> Support for type hierarchies</li>
                    <li><strong>Inheritance:</strong> Subclassing and overriding</li>
                    <li><strong>Polymorphism:</strong> Same operation, different implementations</li>
                    <li><strong>Extensibility:</strong> User-defined types</li>
                    <li><strong>Computational completeness:</strong> Any computable function</li>
                    <li><strong>Persistence:</strong> Objects survive program execution</li>
                    <li><strong>Concurrency control:</strong> Multi-user access</li>
                    <li><strong>Recovery:</strong> Crash recovery</li>
                    <li><strong>Ad-hoc queries:</strong> Query language support</li>
                </ul>
            `,
            keyPoints: [
                "OODB stores data as objects with attributes and methods",
                "Native support for inheritance, polymorphism, encapsulation",
                "Object identity independent of attribute values",
                "Better for complex data types than RDBMS",
                "OODB Manifesto defines mandatory features"
            ]
        },

        {
            title: "1.2 Object-Oriented Data Model Concepts",
            content: `
                <h4>Core OO Concepts Applied to Databases</h4>
                
                <h5>1. Objects</h5>
                <p>An object is a real-world entity with:</p>
                <ul>
                    <li><strong>State (Attributes):</strong> Properties that describe the object</li>
                    <li><strong>Behavior (Methods):</strong> Operations that can be performed on the object</li>
                    <li><strong>Identity (OID):</strong> Unique identifier that never changes</li>
                </ul>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
Object: Student #1001
Attributes: name="Alice", major="CS", gpa=3.8
Methods: register(), dropCourse(), calculateGPA()
OID: 0x7F3A2B1C (unique system-generated)
                </pre>
                
                <h5>2. Classes</h5>
                <p>A class is a template/blueprint for objects. All objects of a class have the same attributes and methods.</p>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
Class: Student
Attributes: name, major, gpa, enrolledCourses[]
Methods: register(course), drop(course), calculateGPA()
                </pre>
                
                <h5>3. Object Identity (OID)</h5>
                <p>Every object has a unique, system-generated identifier that:</p>
                <ul>
                    <li>Is immutable (never changes)</li>
                    <li>Is independent of attribute values</li>
                    <li>Persists even if object changes</li>
                    <li>Can be used to reference the object</li>
                </ul>
                
                <div class="key-points-box">
                    <p><strong>🔑 Important:</strong> OID is different from primary key. Primary key is based on attribute values and can change. OID is system-assigned and never changes.</p>
                </div>
                
                <h5>4. Encapsulation</h5>
                <p>Data and methods are bundled together. Internal implementation is hidden; only public interface is accessible.</p>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
// External view - only public methods
student.calculateGPA();  // OK
student.gpa = 4.0;       // Not allowed (private attribute)
                </pre>
                
                <h5>5. Inheritance</h5>
                <p>A class (subclass) can inherit attributes and methods from another class (superclass).</p>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
Class: Person
Attributes: name, address, phone

Class: Student inherits Person
Additional attributes: major, gpa
Additional methods: register()

Class: Faculty inherits Person
Additional attributes: rank, salary, dept
Additional methods: teach()
                </pre>
                
                <h5>6. Polymorphism</h5>
                <p>The same operation can behave differently for different classes.</p>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
Method: displayInfo()
- For Student: shows name, major, gpa
- For Faculty: shows name, rank, department
- For Course: shows title, credits, instructor
                </pre>
                
                <h5>7. Complex Objects</h5>
                <p>Objects can contain other objects (nesting).</p>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
Class: Course
Attributes: title, credits, instructor (Faculty object), students[] (array of Student objects)
                </pre>
            `,
            keyPoints: [
                "Object = state (attributes) + behavior (methods) + identity (OID)",
                "Class = template for creating objects",
                "OID is immutable and independent of attribute values",
                "Encapsulation hides internal details",
                "Inheritance enables code reuse and hierarchy",
                "Polymorphism: same interface, different implementations"
            ]
        },

        {
            title: "1.3 OODBMS Architecture",
            content: `
                <h4>OODBMS Architecture Layers</h4>
                
                <div style="text-align:center; margin:20px 0;">
                    <pre style="background:#f4f4f4; padding:10px; display:inline-block;">
    Application Layer (OO Programs)
              ↓
    Object Manager (Object <-> Storage)
              ↓
    Object Store (Persistent Storage)
              ↓
    File System / Disk
                    </pre>
                </div>
                
                <h4>Key Components</h4>
                
                <h5>1. Object Manager</h5>
                <ul>
                    <li>Maps objects between memory and storage</li>
                    <li>Manages object identity and references</li>
                    <li>Handles object caching and buffer management</li>
                    <li>Implements object locking for concurrency</li>
                </ul>
                
                <h5>2. Object Store</h5>
                <ul>
                    <li>Physical storage of objects</li>
                    <li>Manages clusters and segments</li>
                    <li>Handles object placement for performance</li>
                    <li>Manages indexes for fast access</li>
                </ul>
                
                <h5>3. Query Processor</h5>
                <ul>
                    <li>Parses and optimizes OQL queries</li>
                    <li>Uses path expressions for navigation</li>
                    <li>Supports method invocation in queries</li>
                </ul>
                
                <h5>4. Transaction Manager</h5>
                <ul>
                    <li>ACID properties for object transactions</li>
                    <li>Object-level locking</li>
                    <li>Commit and rollback</li>
                </ul>
                
                <h4>Object Storage Models</h4>
                
                <h5>Single-Level Store</h5>
                <ul>
                    <li>Objects in memory are identical to objects on disk</li>
                    <li>No mapping between memory and disk formats</li>
                    <li>Objects are "swapped" like virtual memory</li>
                </ul>
                
                <h5>Two-Level Store</h5>
                <ul>
                    <li>Different formats for memory and disk</li>
                    <li>Object manager converts between formats</li>
                    <li>More flexible but slower</li>
                </ul>
                
                <h4>Object Clustering</h4>
                <p>Related objects are stored together on disk for performance:</p>
                <ul>
                    <li>Cluster by class (all Student objects together)</li>
                    <li>Cluster by relationship (a Student and their enrolled Courses)</li>
                    <li>Cluster by access pattern (frequently accessed objects together)</li>
                </ul>
                
                <h4>OODBMS vs ORDBMS</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Feature</th>
                        <th style="padding:10px; border:1px solid #ddd;">OODBMS</th>
                        <th style="padding:10px; border:1px solid #ddd;">ORDBMS (Object-Relational)</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Base Model</td>
                        <td style="padding:8px; border:1px solid #ddd;">Pure object-oriented</td>
                        <td style="padding:8px; border:1px solid #ddd;">Relational + OO extensions</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Query Language</td>
                        <td style="padding:8px; border:1px solid #ddd;">OQL (Object Query Language)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Extended SQL (SQL:1999, SQL:2003)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Data Types</td>
                        <td style="padding:8px; border:1px solid #ddd;">User-defined classes</td>
                        <td style="padding:8px; border:1px solid #ddd;">User-defined types (UDT)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Examples</td>
                        <td style="padding:8px; border:1px solid #ddd;">ObjectStore, Versant, GemStone</td>
                        <td style="padding:8px; border:1px solid #ddd;">PostgreSQL, Oracle (with OO features)</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "OODBMS layers: Application → Object Manager → Object Store → Disk",
                "Object Manager maps between memory and storage",
                "Clustering groups related objects for performance",
                "OODBMS = pure object-oriented, ORDBMS = relational + OO extensions"
            ]
        },

        {
            title: "1.4 Object Query Language (OQL)",
            content: `
                <h4>What is OQL?</h4>
                <p>Object Query Language is a query language for OODBMS, similar to SQL but designed for objects. It is part of the ODMG (Object Data Management Group) standard.</p>
                
                <h4>Key Features of OQL</h4>
                <ul>
                    <li>Uses path expressions to navigate object relationships</li>
                    <li>Can invoke methods in queries</li>
                    <li>Returns collections (set, bag, list) or single objects</li>
                    <li>Integrates with host programming language</li>
                </ul>
                
                <h4>OQL Syntax Examples</h4>
                
                <h5>Basic Queries</h5>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- Select all students
SELECT s
FROM Students s

-- Select with condition
SELECT s
FROM Students s
WHERE s.gpa > 3.5

-- Select specific attributes
SELECT s.name, s.major
FROM Students s
WHERE s.dept.name = 'Computer Science'
                </pre>
                
                <h5>Path Expressions</h5>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- Navigate relationships using dot notation
SELECT s.name, s.advisor.name, s.advisor.office
FROM Students s
WHERE s.advisor.dept.name = 'CS'

-- This traverses: Student → Advisor → Department
                </pre>
                
                <h5>Method Invocation in Queries</h5>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- Call methods in queries
SELECT s
FROM Students s
WHERE s.calculateGPA() > 3.5

-- Methods can return values used in conditions
                </pre>
                
                <h5>Collection Operators</h5>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- EXISTS operator
SELECT d
FROM Departments d
WHERE EXISTS (SELECT c FROM d.courses c WHERE c.credits > 3)

-- COUNT, SUM, AVG aggregates
SELECT s.name, COUNT(s.enrolledCourses)
FROM Students s
GROUP BY s
                </pre>
                
                <h5>OQL vs SQL Comparison</h5>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Feature</th>
                        <th style="padding:10px; border:1px solid #ddd;">SQL</th>
                        <th style="padding:10px; border:1px solid #ddd;">OQL</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Data Access</td>
                        <td style="padding:8px; border:1px solid #ddd;">Tables and joins</td>
                        <td style="padding:8px; border:1px solid #ddd;">Objects and path expressions</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Relationships</td>
                        <td style="padding:8px; border:1px solid #ddd;">Foreign key joins</td>
                        <td style="padding:8px; border:1px solid #ddd;">Dot notation (object references)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Methods</td>
                        <td style="padding:8px; border:1px solid #ddd;">Not directly callable</td>
                        <td style="padding:8px; border:1px solid #ddd;">Can invoke methods</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Result</td>
                        <td style="padding:8px; border:1px solid #ddd;">Result set (rows)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Collection of objects</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "OQL is query language for OODBMS, part of ODMG standard",
                "Path expressions navigate object relationships (dot notation)",
                "Methods can be called directly in queries",
                "Returns collections of objects, not just rows",
                "Similar to SQL but designed for object model"
            ]
        },

        {
            title: "1.5 Object-Relational Mapping (ORM)",
            content: `
                <h4>What is ORM?</h4>
                <p>Object-Relational Mapping is a technique that maps object-oriented programming language objects to relational database tables. It bridges the "impedance mismatch" between OOP and RDBMS.</p>
                
                <div class="key-points-box">
                    <p><strong>🔑 Impedance Mismatch:</strong> The fundamental differences between OOP (objects, inheritance, references) and RDBMS (tables, rows, foreign keys).</p>
                </div>
                
                <h4>Common ORM Frameworks</h4>
                <ul>
                    <li><strong>Java:</strong> Hibernate, JPA, EclipseLink</li>
                    <li><strong>Python:</strong> SQLAlchemy, Django ORM</li>
                    <li><strong>.NET:</strong> Entity Framework, NHibernate</li>
                    <li><strong>PHP:</strong> Doctrine, Eloquent (Laravel)</li>
                    <li><strong>JavaScript:</strong> Sequelize, TypeORM</li>
                </ul>
                
                <h4>ORM Mapping Concepts</h4>
                
                <h5>1. Class to Table Mapping</h5>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
// Java Class
public class Student {
    private int id;
    private String name;
    private String major;
    private double gpa;
}

-- Database Table
CREATE TABLE student (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    major VARCHAR(50),
    gpa DECIMAL(3,2)
);
                </pre>
                
                <h5>2. Object Relationships to Foreign Keys</h5>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
// Java Class with relationship
public class Student {
    private int id;
    private String name;
    private Department dept;  // Object reference
}

-- Database with foreign key
CREATE TABLE student (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES department(id)
);
                </pre>
                
                <h5>3. Inheritance Mapping Strategies</h5>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Strategy</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Pros/Cons</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Single Table</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">One table for whole hierarchy</td>
                        <td style="padding:8px; border:1px solid #ddd;">Fast, but many NULLs</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Class Table</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">One table per class</td>
                        <td style="padding:8px; border:1px solid #ddd;">Normalized, but many joins</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Concrete Table</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">One table per concrete class</td>
                        <td style="padding:8px; border:1px solid #ddd;">No joins, but duplicate columns</td>
                    </tr>
                </table>
                
                <h5>4. Collection Mapping</h5>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
// Java collection
public class Student {
    private List<Course> courses;  // One-to-many
    private Set<String> phoneNumbers;  // Multi-valued
}

-- Database needs separate tables
CREATE TABLE student_course (
    student_id INT,
    course_id INT,
    PRIMARY KEY (student_id, course_id)
);

CREATE TABLE student_phone (
    student_id INT,
    phone_number VARCHAR(15),
    PRIMARY KEY (student_id, phone_number)
);
                </pre>
                
                <h4>ORM Advantages and Disadvantages</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Advantages</th>
                        <th style="padding:10px; border:1px solid #ddd;">Disadvantages</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Productivity - less SQL code</td>
                        <td style="padding:8px; border:1px solid #ddd;">Performance overhead</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Database independence</td>
                        <td style="padding:8px; border:1px solid #ddd;">Complex queries harder</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Object-oriented paradigm</td>
                        <td style="padding:8px; border:1px solid #ddd;">Learning curve</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Automatic schema generation</td>
                        <td style="padding:8px; border:1px solid #ddd;">Less control over SQL</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Caching and lazy loading</td>
                        <td style="padding:8px; border:1px solid #ddd;">N+1 query problem</td>
                    </tr>
                </table>
                
                <h4>N+1 Query Problem</h4>
                <p>A common performance issue in ORM:</p>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
// This executes 1 query for departments + N queries for faculty
for (Department dept : departmentList) {
    System.out.println(dept.getFaculty().size());  // Each access triggers query
}

// Solution: Use JOIN FETCH or eager loading
SELECT d FROM Department d JOIN FETCH d.faculty
                </pre>
            `,
            keyPoints: [
                "ORM bridges impedance mismatch between OOP and RDBMS",
                "Maps classes to tables, objects to rows, attributes to columns",
                "Three inheritance mapping strategies: single table, class table, concrete table",
                "Collections map to separate tables",
                "ORM improves productivity but has performance considerations"
            ]
        },

        {
            title: "1.6 Object Database Standards: ODMG",
            content: `
                <h4>ODMG (Object Data Management Group)</h4>
                <p>A consortium that developed standards for object database systems to ensure portability and interoperability.</p>
                
                <h4>ODMG 3.0 Standard Components</h4>
                
                <h5>1. Object Model</h5>
                <ul>
                    <li>Defines core concepts: objects, literals, types, inheritance</li>
                    <li>Supports atomic and collection types (set, bag, list, array, dictionary)</li>
                    <li>Defines relationships (1:1, 1:N, M:N)</li>
                </ul>
                
                <h5>2. Object Definition Language (ODL)</h5>
                <p>Language for defining object schemas, similar to DDL in SQL.</p>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
class Student {
    attribute string name;
    attribute string major;
    attribute float gpa;
    relationship Department dept 
        inverse Department::students;
    void register(in Course c);
};

class Department {
    attribute string name;
    attribute string office;
    relationship set<Student> students 
        inverse Student::dept;
};
                </pre>
                
                <h5>3. Object Query Language (OQL)</h5>
                <p>Query language for objects (covered in section 1.4).</p>
                
                <h5>4. Language Bindings</h5>
                <p>How ODL and OQL map to programming languages (C++, Java, Smalltalk).</p>
                
                <h4>ODMG Object Model Features</h4>
                
                <h5>Object Types</h5>
                <ul>
                    <li><strong>Atomic objects:</strong> Basic types (integer, string, float)</li>
                    <li><strong>Structured objects:</strong> Date, time, interval</li>
                    <li><strong>Collection objects:</strong> Set, bag, list, array, dictionary</li>
                </ul>
                
                <h5>Relationships</h5>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
// One-to-many relationship with inverse
class Department {
    relationship set<Student> students 
        inverse Student::dept;
};

// Many-to-many
class Student {
    relationship set<Course> courses 
        inverse Course::students;
};
class Course {
    relationship set<Student> students 
        inverse Student::courses;
};
                </pre>
                
                <h5>Extents</h5>
                <p>An extent is the set of all objects of a particular class, similar to a table in relational databases.</p>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
extent of Student  // All Student objects
                </pre>
                
                <h5>Keys</h5>
                <p>Unique identifiers for objects, similar to primary keys.</p>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
class Student 
    (key studentID) {
    attribute string studentID;
    attribute string name;
};
                </pre>
            `,
            keyPoints: [
                "ODMG standard ensures OODBMS interoperability",
                "Components: Object Model, ODL, OQL, Language Bindings",
                "ODL defines object schemas (similar to SQL DDL)",
                "Relationships have explicit inverses for consistency",
                "Extent = all objects of a class",
                "Keys provide uniqueness constraints"
            ]
        }
    ],

    summary: `
        <h3>Chapter 1 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>OODBMS:</strong> Stores data as objects with attributes, methods, and identity</li>
            <li><strong>Object-Oriented Concepts:</strong> Objects, classes, inheritance, polymorphism, encapsulation</li>
            <li><strong>Object Identity (OID):</strong> Unique, immutable identifier independent of attribute values</li>
            <li><strong>OODBMS vs RDBMS:</strong> OODB better for complex data, RDBMS better for business transactions</li>
            <li><strong>OQL:</strong> Object Query Language with path expressions and method calls</li>
            <li><strong>ORM:</strong> Maps objects to relational tables, bridges impedance mismatch</li>
            <li><strong>ODMG Standard:</strong> Object Model, ODL, OQL for interoperability</li>
            <li><strong>Inheritance Mapping:</strong> Single table, class table, concrete table strategies</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What is the difference between object identity (OID) and a primary key in relational databases?",
            answer: "OID is system-generated, immutable, and independent of attribute values. Primary key is based on attribute values and can change if attributes change. OID is like a memory address, while primary key is like a social security number."
        },
        {
            question: "Explain the concept of impedance mismatch between OOP and RDBMS.",
            answer: "Impedance mismatch refers to fundamental differences: OOP uses objects with inheritance and references, while RDBMS uses tables with rows and foreign keys. ORM bridges this gap by mapping objects to tables."
        },
        {
            question: "What are the three inheritance mapping strategies in ORM? Compare them.",
            answer: "Single table: one table for hierarchy (fast but NULLs). Class table: one per class (normalized but joins). Concrete table: one per concrete class (no joins but duplicate columns)."
        },
        {
            question: "What is OQL and how does it differ from SQL?",
            answer: "OQL is Object Query Language for OODBMS. It uses path expressions (dot notation) instead of joins, can call methods in queries, and returns collections of objects rather than rows."
        },
        {
            question: "Describe the main components of the ODMG standard.",
            answer: "Object Model (core concepts), ODL (Object Definition Language for schemas), OQL (query language), and Language Bindings (mapping to programming languages)."
        }
    ],

    quickTips: [
        "OODB = objects with attributes + methods + OID",
        "OID never changes, unlike primary key",
        "Inheritance: is-a relationship",
        "ORM maps objects ↔ tables",
        "N+1 problem: fetch related data efficiently",
        "ODMG standard = ODL + OQL + bindings"
    ],

    commonMistakes: [
        "❌ Confusing OID with primary key",
        "❌ Thinking inheritance is supported in RDBMS",
        "❌ Ignoring N+1 query problem in ORM",
        "❌ Overusing ORM for complex queries",
        "❌ Not understanding path expressions in OQL"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 1:</h3>
        <p>This chapter has <strong>1 question</strong> at the <strong>Understand</strong> level.</p>
        
        <h4>Focus Areas:</h4>
        <ul>
            <li>Object-oriented data model concepts (objects, classes, inheritance, polymorphism)</li>
            <li>Object identity and its significance</li>
            <li>Comparison between OODBMS and RDBMS</li>
            <li>ORM concepts and purpose</li>
            <li>Basic understanding of OQL and ODMG standard</li>
        </ul>
        
        <h4>Sample Understand Question:</h4>
        <p>"Explain the key concepts of object-oriented databases and how they differ from relational databases. Include object identity, inheritance, and encapsulation in your answer."</p>
    `
};