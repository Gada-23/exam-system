// ===============================
// DATABASE SYSTEMS
// ===============================
window.databaseSystemsQuestions = [

    // ORIGINAL QUESTIONS (Preserved exactly as they were)
    {
        "question": "What is the purpose of normalization in database design?",
        "options": [
            "To increase data redundancy",
            "To decrease data integrity",
            "To eliminate data duplication",
            "To simplify data retrieval"
        ],
        "answer": 2,
        "explanation": "The purpose of normalization in database design is to eliminate data duplication and reduce redundancy. It helps ensure data consistency, minimize storage space, and simplify data maintenance.",
        "course": "Database Systems"
    },
    {
        "question": "Which of the following is a primary key in a relational database?",
        "options": [
            "A unique identifier for a row in a table",
            "A foreign key from another table",
            "A non-unique attribute in a table",
            "A combination of attributes in a table"
        ],
        "answer": 0,
        "explanation": "A primary key is a unique identifier for a row in a table. It uniquely identifies each record and ensures its uniqueness and integrity within the table.",
        "course": "Database Systems"
    },
    {
        "question": "What is the purpose of foreign keys in a relational database?",
        "options": [
            "To establish relationships between tables",
            "To store encrypted data",
            "To enforce data types in columns",
            "To improve query performance"
        ],
        "answer": 0,
        "explanation": "Foreign keys are used to establish relationships between tables in a relational database. They define a link between the primary key of one table and a corresponding column in another table.",
        "course": "Database Systems"
    },
    {
        "question": "Which normal form ensures that all dependencies on the primary key are fully functional dependencies?",
        "options": [
            "First normal form (1NF)",
            "Second normal form (2NF)",
            "Third normal form (3NF)",
            "Boyce-Codd normal form (BCNF)"
        ],
        "answer": 2,
        "explanation": "Third normal form (3NF) ensures that all dependencies on the primary key are fully functional dependencies. It eliminates transitive dependencies and helps reduce data redundancy.",
        "course": "Database Systems"
    },
    {
        "question": "What is a composite key in database design?",
        "options": [
            "A primary key made up of multiple attributes",
            "A foreign key that references multiple tables",
            "A unique identifier for a column in a table",
            "A key used for data encryption"
        ],
        "answer": 0,
        "explanation": "A composite key is a primary key made up of multiple attributes in a table. It is used when a single attribute cannot uniquely identify a record, but a combination of attributes can.",
        "course": "Database Systems"
    },
    {
        "question": "What is the purpose of an index in a database?",
        "options": [
            "To store large binary objects",
            "To enforce referential integrity",
            "To improve data retrieval performance",
            "To encrypt sensitive data"
        ],
        "answer": 2,
        "explanation": "An index in a database is used to improve data retrieval performance. It allows for faster searching and sorting of data by creating a separate data structure that contains the indexed values and their corresponding pointers to the actual data.",
        "course": "Database Systems"
    },
    {
        "question": "What is a data dictionary in database design?",
        "options": [
            "A database table that stores user information",
            "A collection of tables in a database",
            "A file system used to store database files",
            "A repository of metadata about the database structure"
        ],
        "answer": 3,
        "explanation": "A data dictionary in database design is a repository of metadata that describes the structure, definitions, and relationships of the database. It contains information about tables, columns, data types, constraints, and more.",
        "course": "Database Systems"
    },
    {
        "question": "Which of the following is an example of a database constraint?",
        "options": [
            "UNIQUE",
            "SELECT",
            "INSERT",
            "DELETE"
        ],
        "answer": 0,
        "explanation": "The UNIQUE constraint in a database ensures that the values in a column or a combination of columns are unique, i.e., no duplicate values are allowed.",
        "course": "Database Systems"
    },
    {
        "question": "What is the purpose of referential integrity in a database?",
        "options": [
            "To prevent unauthorized access to data",
            "To ensure data consistency and integrity across related tables",
            "To improve query performance",
            "To encrypt sensitive data"
        ],
        "answer": 1,
        "explanation": "Referential integrity in a database ensures that relationships between tables are maintained, and data consistency and integrity are preserved. It enforces rules such as preventing the deletion of a record referenced by another record.",
        "course": "Database Systems"
    },
    {
        "question": "What is denormalization in database design?",
        "options": [
            "The process of breaking down a complex table into smaller tables",
            "The process of adding redundancy to improve data retrieval performance",
            "The process of eliminating duplicate values from a table",
            "The process of converting data into a different format for storage"
        ],
        "answer": 1,
        "explanation": "Denormalization in database design involves adding redundancy to improve data retrieval performance. It can involve duplicating data or combining multiple tables into a single table for faster query execution.",
        "course": "Database Systems"
    },
    {
        "question": "What is the purpose of a view in a database?",
        "options": [
            "To define the structure of a table",
            "To store complex queries for reuse",
            "To encrypt sensitive data",
            "To enforce data types in columns"
        ],
        "answer": 1,
        "explanation": "A view in a database is a virtual table that is based on the result of a query. It allows you to store complex queries and reuse them as if they were regular tables.",
        "course": "Database Systems"
    },
    {
        "question": "Which database model represents data as a collection of objects?",
        "options": [
            "Hierarchical model",
            "Relational model",
            "Object-oriented model",
            "Network model"
        ],
        "answer": 2,
        "explanation": "The object-oriented model represents data as a collection of objects that have attributes and behaviors. It allows for the modeling of real-world entities and supports inheritance and encapsulation.",
        "course": "Database Systems"
    },
    {
        "question": "What is the purpose of data normalization in database design?",
        "options": [
            "To improve data storage efficiency",
            "To simplify the database structure",
            "To eliminate data redundancy",
            "To optimize query performance"
        ],
        "answer": 2,
        "explanation": "The purpose of data normalization in database design is to eliminate data redundancy and ensure data consistency. It helps minimize storage space, simplify data maintenance, and reduce the likelihood of data anomalies.",
        "course": "Database Systems"
    },
    {
        "question": "Which normal form is achieved when all non-key attributes are dependent on the primary key, the whole primary key, and nothing but the primary key?",
        "options": [
            "First normal form (1NF)",
            "Second normal form (2NF)",
            "Third normal form (3NF)",
            "Boyce-Codd normal form (BCNF)"
        ],
        "answer": 3,
        "explanation": "Boyce-Codd normal form (BCNF) is achieved when all non-key attributes are dependent on the primary key, the whole primary key, and nothing but the primary key. It is a stricter form of normalization than the third normal form (3NF).",
        "course": "Database Systems"
    },
    {
        "question": "Which database model represents data as a collection of records linked through pointers?",
        "options": [
            "Hierarchical model",
            "Relational model",
            "Object-oriented model",
            "Network model"
        ],
        "answer": 3,
        "explanation": "The network model represents data as a collection of records linked through pointers. It allows for complex relationships and supports many-to-many relationships between records.",
        "course": "Database Systems"
    },
    {
        "question": "What is the purpose of database indexing?",
        "options": [
            "To encrypt sensitive data",
            "To enforce data integrity constraints",
            "To improve data retrieval performance",
            "To ensure data consistency"
        ],
        "answer": 2,
        "explanation": "Database indexing is used to improve data retrieval performance by creating a separate data structure that allows for faster searching and sorting of data.",
        "course": "Database Systems"
    },
    {
        "question": "Which database model represents data as a collection of tables with rows and columns?",
        "options": [
            "Hierarchical model",
            "Relational model",
            "Object-oriented model",
            "Network model"
        ],
        "answer": 1,
        "explanation": "The relational model represents data as a collection of tables with rows and columns. It organizes data into relations (tables) and establishes relationships between them using keys.",
        "course": "Database Systems"
    },
    {
        "question": "What is the purpose of a database schema?",
        "options": [
            "To enforce data types in columns",
            "To store database files",
            "To define the structure and organization of a database",
            "To ensure data integrity"
        ],
        "answer": 2,
        "explanation": "A database schema defines the structure and organization of a database. It includes definitions of tables, columns, data types, constraints, relationships, and more.",
        "course": "Database Systems"
    },
    {
        "question": "What is the role of a database administrator (DBA) in database management?",
        "options": [
            "To design and implement the database schema",
            "To write complex SQL queries",
            "To manage and maintain the database system",
            "To develop database applications"
        ],
        "answer": 2,
        "explanation": "The role of a database administrator (DBA) is to manage and maintain the database system. This includes tasks such as data backup and recovery, performance tuning, security management, and ensuring data integrity.",
        "course": "Database Systems"
    },
    {
        "question": "Which database model represents data as a hierarchical structure with parent-child relationships?",
        "options": [
            "Hierarchical model",
            "Relational model",
            "Object-oriented model",
            "Network model"
        ],
        "answer": 0,
        "explanation": "The hierarchical model represents data as a hierarchical structure with parent-child relationships. It organizes data in a tree-like structure, where each record has a single parent and one or more children.",
        "course": "Database Systems"
    },
    {
        "question": "What is the first step in the database design process?",
        "options": [
            "Defining relationships between tables",
            "Determining the database schema",
            "Analyzing the information requirements",
            "Creating database queries"
        ],
        "answer": 2,
        "explanation": "The first step in the database design process is to analyze the information requirements of the system. This involves understanding the data that needs to be stored, the relationships between different data entities, and the functionalities the database should support.",
        "course": "Database Systems"
    },
    {
        "question": "Which of the following is an example of a one-to-many relationship in database design?",
        "options": [
            "Student and Course",
            "Employee and Department",
            "Customer and Order",
            "Product and Supplier"
        ],
        "answer": 2,
        "explanation": "A one-to-many relationship occurs when one entity instance is associated with multiple instances of another entity. In this case, a customer can have multiple orders, but an order can only belong to one customer.",
        "course": "Database Systems"
    },
    {
        "question": "Which of the following is a benefit of using database indexes?",
        "options": [
            "Increased data redundancy",
            "Decreased data integrity",
            "Improved data retrieval performance",
            "Simplified data modeling"
        ],
        "answer": 2,
        "explanation": "Database indexes improve data retrieval performance by creating a separate data structure that allows for faster searching and sorting of data. They help optimize query execution and reduce the need for full table scans.",
        "course": "Database Systems"
    },
    {
        "question": "Which of the following is an example of a candidate key in database design?",
        "options": [
            "Social Security Number (SSN)",
            "Employee Name",
            "Employee ID",
            "Employee Salary"
        ],
        "answer": 0,
        "explanation": "A candidate key is a set of attributes that can uniquely identify a record in a table. In this case, the Social Security Number (SSN) can uniquely identify an employee and is a candidate key.",
        "course": "Database Systems"
    },
    {
        "question": "Which type of database relationship is represented by a join table?",
        "options": [
            "One-to-one relationship",
            "One-to-many relationship",
            "Many-to-many relationship",
            "Hierarchical relationship"
        ],
        "answer": 2,
        "explanation": "A join table, also known as an associative table or bridge table, is used to represent a many-to-many relationship between two entities. It contains the primary keys of both entities and serves as a connector between them.",
        "course": "Database Systems"
    },
    {
        "question": "Which of the following is an example of a functional dependency in database design?",
        "options": [
            "Employee ID → Employee Name",
            "Employee Name → Employee ID",
            "Employee Salary → Employee Department",
            "Employee Department → Employee Salary"
        ],
        "answer": 0,
        "explanation": "Functional dependency defines the relationship between attributes in a database. In this case, the Employee ID uniquely determines the Employee Name, indicating a functional dependency.",
        "course": "Database Systems"
    },
    {
        "question": "Which of the following is an advantage of using a relational database management system (RDBMS)?",
        "options": [
            "Easy integration with external systems",
            "Lower storage requirements",
            "No need for data normalization",
            "Faster data retrieval"
        ],
        "answer": 0,
        "explanation": "One of the advantages of using an RDBMS is its ability to easily integrate with external systems. RDBMSs provide standard interfaces and support for SQL, making it simpler to interact with other applications and databases.",
        "course": "Database Systems"
    },
    {
        "question": "What is the purpose of a transaction in database management?",
        "options": [
            "To secure the database from unauthorized access",
            "To optimize query performance",
            "To manage concurrent access to data",
            "To define the structure and organization of a database"
        ],
        "answer": 2,
        "explanation": "A transaction in database management is a sequence of database operations that must be executed as a single unit. It ensures data integrity by managing concurrent access to data and providing mechanisms for atomicity, consistency, isolation, and durability (ACID).",
        "course": "Database Systems"
    },
    {
        "question": "Which of the following is an example of a composite key in database design?",
        "options": [
            "Employee ID",
            "Product SKU",
            "Customer Name",
            "Order Date"
        ],
        "answer": 1,
        "explanation": "A composite key is a key that consists of multiple attributes. In this case, the Product SKU, which is composed of several attributes, can uniquely identify a product.",
        "course": "Database Systems"
    },
    {
        "question": "What is the purpose of data validation in database design?",
        "options": [
            "To enforce referential integrity constraints",
            "To improve query performance",
            "To eliminate data redundancy",
            "To ensure data integrity and quality"
        ],
        "answer": 3,
        "explanation": "Data validation in database design involves applying rules and checks to ensure the integrity and quality of the data. It verifies that data meets predefined criteria, such as data type constraints, range limits, and consistency requirements.",
        "course": "Database Systems"
    },
    {
        "question": "Which of the following normalization forms is based on the concept of functional dependency?",
        "options": [
            "First Normal Form (1NF)",
            "Second Normal Form (2NF)",
            "Third Normal Form (3NF)",
            "Boyce-Codd Normal Form (BCNF)"
        ],
        "answer": 2,
        "explanation": "The Third Normal Form (3NF) is based on the concept of functional dependency. It eliminates transitive dependencies and ensures that non-key attributes depend only on the primary key.",
        "course": "Database Systems"
    },
    {
        "question": "What is the purpose of data modeling in database design?",
        "options": [
            "To enforce data constraints",
            "To optimize query performance",
            "To define the structure and organization of a database",
            "To represent real-world entities and their relationships"
        ],
        "answer": 3,
        "explanation": "Data modeling in database design is the process of representing real-world entities, their attributes, and their relationships in a structured manner. It helps visualize and understand the data requirements of an application.",
        "course": "Database Systems"
    },
    {
        "question": "Which of the following is an example of a non-functional requirement in database design?",
        "options": [
            "Data encryption",
            "User authentication",
            "Entity-Relationship (ER) diagram",
            "Data normalization"
        ],
        "answer": 0,
        "explanation": "Non-functional requirements in database design are related to system characteristics, such as security, performance, scalability, and availability. Data encryption is an example of a non-functional requirement that ensures data confidentiality and protection.",
        "course": "Database Systems"
    },
    {
        "question": "What is the purpose of data manipulation in database management?",
        "options": [
            "To define the database schema",
            "To create database backups",
            "To insert, update, and delete data",
            "To manage concurrent access to data"
        ],
        "answer": 2,
        "explanation": "Data manipulation in database management involves performing operations to insert, update, and delete data in the database. It allows for data modification and maintenance.",
        "course": "Database Systems"
    },
    {
        "question": "What is a distributed database system?",
        "options": [
            "A database system that is spread across multiple locations",
            "A database system that uses multiple database management systems",
            "A database system that supports multiple database schemas",
            "A database system that is used for storing distributed data"
        ],
        "answer": 0,
        "explanation": "A distributed database system is a database system that is spread across multiple locations or sites. It allows data to be stored and accessed from different locations in a transparent manner.",
        "course": "Database Systems"
    },
    {
        "question": "What is the key advantage of a distributed database system?",
        "options": [
            "Improved data security",
            "Reduced data redundancy",
            "Enhanced data availability",
            "Simplified data querying"
        ],
        "answer": 2,
        "explanation": "One of the key advantages of a distributed database system is enhanced data availability. Data can be replicated across different sites, allowing users to access the data even if one site is unavailable.",
        "course": "Database Systems"
    },
    {
        "question": "What is a homogenous distributed database system?",
        "options": [
            "A system that uses the same database management system across all sites",
            "A system that stores the same type of data across all sites",
            "A system that uses a single database schema across all sites",
            "A system that shares the same network infrastructure across all sites"
        ],
        "answer": 0,
        "explanation": "In a homogenous distributed database system, the same database management system is used across all sites. It ensures consistency in terms of database management software.",
        "course": "Database Systems"
    },
    {
        "question": "What is a heterogeneous distributed database system?",
        "options": [
            "A system that uses different database management systems across all sites",
            "A system that stores different types of data across all sites",
            "A system that uses different database schemas across all sites",
            "A system that uses different network infrastructures across all sites"
        ],
        "answer": 0,
        "explanation": "In a heterogeneous distributed database system, different database management systems may be used across different sites. It allows for flexibility in choosing the appropriate database management system for each site.",
        "course": "Database Systems"
    },
    {
        "question": "What is data fragmentation in a distributed database system?",
        "options": [
            "Dividing data into smaller subsets and storing them at different sites",
            "Replicating data across all sites for fault tolerance",
            "Merging data from different sites into a single database",
            "Encrypting data for secure transmission between sites"
        ],
        "answer": 0,
        "explanation": "Data fragmentation involves dividing data into smaller subsets and storing them at different sites in a distributed database system. This allows for efficient data distribution and retrieval.",
        "course": "Database Systems"
    },
    {
        "question": "What is data replication in a distributed database system?",
        "options": [
            "Storing multiple copies of data at different sites",
            "Dividing data into smaller subsets for efficient storage",
            "Merging data from different sites into a single database",
            "Encrypting data to ensure security during transmission"
        ],
        "answer": 0,
        "explanation": "Data replication involves storing multiple copies of data at different sites in a distributed database system. It improves data availability and fault tolerance.",
        "course": "Database Systems"
    },

    // NEW VERIFIED QUESTIONS FROM EXAMS
    {
        "question": "Which of the following statement best describe relational data model?",
        "options": [
            "A. It is a database model that allows multiple records to be linked to the same owner file.",
            "B. It structures data in a tree like structure using parent to child relationship.",
            "C. It is a database model to manage data as tuples grouped into relations",
            "D. It is a model that use concepts such as entities, attributes, and relationships",
            "E. Describe how data is stored in the computer, representing information such as record structures, record ordering, and access paths."
        ],
        "answer": 2,
        "explanation": "The relational data model manages data as tuples (rows) grouped into relations (tables). Option A describes network model, B describes hierarchical model, D describes entity-relationship model, E describes physical storage.",
        "course": "Database Systems"
    },
    {
        "question": "Which of the following constraint will violate when a data base administrator try to execute the following SQL statement?\n\nINSERT INTO Department (Dept_Name, Manager) VALUES (null, 107);",
        "options": [
            "A. Domain constraint",
            "B. Key constraint",
            "C. Entity Integrity constraint",
            "D. Referential Integrity constraint"
        ],
        "answer": 2,
        "explanation": "Entity Integrity constraint requires that the primary key cannot be null. Since Dept_Name is likely the primary key, inserting null violates entity integrity.",
        "course": "Database Systems"
    },
    {
        "question": "Consider a relation R (A,B,C,D) with set of functional dependencies F={C->D, C->B, B->C}. Which of the following statement is true about R?",
        "options": [
            "A. The relation R is in second normal form",
            "B. The relation R is in third normal form",
            "C. The candidate key for R is BC",
            "D. The relation R is in second normal form",
            "E. None"
        ],
        "answer": 4,
        "explanation": "From FDs, candidate keys are A and combinations with A. Since A is not on right side of any FD, A must be part of any candidate key. The relation is at least in 1NF, but without knowing FDs involving A, we cannot determine higher normal forms.",
        "course": "Database Systems"
    },
    {
        "question": "Which schema of the three-schema Architecture describe the structure of the whole database?",
        "options": [
            "A. Internal schema",
            "B. Conceptual schema",
            "C. External schema",
            "D. schema"
        ],
        "answer": 1,
        "explanation": "The conceptual schema describes the structure of the whole database for a community of users. Internal schema describes physical storage, external schemas describe user views.",
        "course": "Database Systems"
    },
    {
        "question": "Which of the following is the disadvantage of a database approach?",
        "options": [
            "A. Data consistency",
            "B. Sharing of data",
            "C. Improved data integrity",
            "D. Increased concurrency",
            "E. Enforcement of standards",
            "F. Complexity"
        ],
        "answer": 5,
        "explanation": "Complexity is a disadvantage of database approach. The other options (consistency, sharing, integrity, concurrency, standards) are all advantages.",
        "course": "Database Systems"
    },
    {
        "question": "Which of the following is a correct statement about relation? (Choose all that applies)",
        "options": [
            "A. Values of each columns is a repeating group/array",
            "B. Values in a column can be from different domain",
            "C. A relation is in the 1NF",
            "D. Two rows in a relational table can be identical",
            "E. The sequence of columns and rows is insignificant",
            "F. None"
        ],
        "answer": 4,
        "explanation": "In a relation, the sequence of columns and rows is insignificant (unordered). 1NF requires atomic values, so A is false. Columns must have same domain, so B false. Relations in 1NF by definition, but not all relations are necessarily in 1NF, so C is not always true. Two identical rows are not allowed in a relation, so D false.",
        "course": "Database Systems"
    },
    {
        "question": "In which database security measure is aggregate data are accessible to users by hiding details from users?",
        "options": [
            "A. Inference control",
            "B. Access control",
            "C. Integrity control",
            "E. None of the above"
        ],
        "answer": 0,
        "explanation": "Inference control prevents users from deducing sensitive information from aggregate queries by hiding detailed data while providing statistical summaries.",
        "course": "Database Systems"
    },
    {
        "question": "Which of the following query optimization technique used to modify the internal representation of query?",
        "options": [
            "A. Systematically estimation",
            "B. Semantic query optimization",
            "C. Cost Estimation",
            "D. Heuristic rules",
            "E. A and C"
        ],
        "answer": 3,
        "explanation": "Heuristic rules are used to transform the query into a more efficient internal representation by applying transformation rules.",
        "course": "Database Systems"
    },
    {
        "question": "Which of the following is not true about locks?",
        "options": [
            "A. Locks with large granularity are easier for the DBMS to administer.",
            "B. Locks with small granularity cause more conflicts.",
            "C. Locks with large granularity produce fewer details for the DBMS to track.",
            "D. Locks may have a table-level granularity.",
            "E. Locks may have a database-level granularity"
        ],
        "answer": 1,
        "explanation": "Locks with small granularity (like row-level) cause fewer conflicts, not more. Small granularity allows more concurrency and reduces conflicts.",
        "course": "Database Systems"
    },
    {
        "question": "For every transaction T participating in the schedule, if all the operations of T are executed consecutively in the schedule. The schedule is",
        "options": [
            "A. Cascaded schedule",
            "B. Serial schedule",
            "C. Cascadeless schedule",
            "D. Recoverable schedule",
            "E. None"
        ],
        "answer": 1,
        "explanation": "A serial schedule executes transactions one after another without interleaving operations from different transactions.",
        "course": "Database Systems"
    },
    {
        "question": "A transaction property state about changes applied to the database by a committed transaction must persist in the database?",
        "options": [
            "A. Isolation",
            "B. Durability or permanency",
            "C. Atomicity",
            "D. Consistency preservation",
            "E. None"
        ],
        "answer": 1,
        "explanation": "Durability guarantees that once a transaction commits, its changes persist even in case of system failure.",
        "course": "Database Systems"
    },
    {
        "question": "If a transaction does not modify the database until it has committed, it is said to use the ______ technique.",
        "options": [
            "A. Undo",
            "B. Late-modification",
            "C. Immediate-modification",
            "D. Deferred-modification"
        ],
        "answer": 3,
        "explanation": "Deferred-modification (or deferred update) technique only writes to the database after the transaction commits.",
        "course": "Database Systems"
    },
    {
        "question": "Which one of the following is false?",
        "options": [
            "A. In object-oriented database, data are stored as collections of rows and tables",
            "B. In relational database, data are perceived by users as tables",
            "C. Object oriented database allows object identification and communication",
            "D. Object oriented database allows reusability of objects",
            "E. None of the above"
        ],
        "answer": 0,
        "explanation": "Option A is false because object-oriented databases store data as objects, not as rows and tables. Rows and tables are characteristic of relational databases.",
        "course": "Database Systems"
    },
    {
        "question": "What is the primary purpose of concurrency control protocols?",
        "options": [
            "A. To increase transaction speed",
            "B. To guarantee serializability",
            "C. To reduce data redundancy",
            "D. To enhance data security"
        ],
        "answer": 1,
        "explanation": "Concurrency control protocols ensure serializability of concurrent transactions, maintaining database consistency.",
        "course": "Database Systems"
    },
    {
        "question": "In the context of concurrency control, what is a deadlock?",
        "options": [
            "A. A situation where two or more transactions are waiting for each other to release locks",
            "B. A situation where a transaction is unable to acquire a lock because of it is busy nature",
            "C. A situation where a transaction is rolled back due to a conflict executions occurred",
            "D. A situation where a transaction is committed successfully but rolled back"
        ],
        "answer": 0,
        "explanation": "Deadlock occurs when two or more transactions are each waiting for locks held by the others, creating a circular wait condition.",
        "course": "Database Systems"
    },
    {
        "question": "If A1 wants to grant A2 the privilege to insert and delete rows in the EMPLOYEE and DEPARTMENT relations without allowing A2 to propagate these privileges, what command should A1 issue?",
        "options": [
            "A. GRANT INSERT, DELETE ON EMPLOYEE, DEPARTMENT TO A2 WITH GRANT OPTION.",
            "B. GRANT INSERT, DELETE ON EMPLOYEE, DEPARTMENT TO A2;",
            "C. GRANT SELECT ON EMPLOYEE, DEPARTMENT TO A2 WITH REVOKE OPTION;",
            "D. GRANT UPDATE ON EMPLOYEE, DEPARTMENT TO A2 WITH ALLOW OPTION;"
        ],
        "answer": 1,
        "explanation": "Without the WITH GRANT OPTION clause, the granted privileges cannot be propagated to other users.",
        "course": "Database Systems"
    },
    {
        "question": "Which of the following statements about database recovery strategies is correct?",
        "options": [
            "A. The 'Force' strategy simplifies recovery by ensuring that all cache updates are immediately flushed to disk when a transaction commits.",
            "B. The 'No-Steal' strategy allows cache to be flushed before transaction commits, reducing memory needs but leading to complex recovery.",
            "C. The 'Steal' strategy maintains data integrity by ensuring that cache cannot be flushed before transaction commit.",
            "D. The 'No-Force' strategy reduces I/O cost by allowing updated pages of a committed transaction to remain in the buffer when another transaction needs to update them."
        ],
        "answer": 0,
        "explanation": "Force strategy writes all updates to disk at commit time, simplifying recovery because committed transactions are already on disk.",
        "course": "Database Systems"
    },
    {
        "question": "What is the impact of larger data item size (coarse granularity) on concurrency?",
        "options": [
            "A. It increases the degree of concurrency permitted",
            "B. It eliminates the need for locks",
            "C. It reduces the degree of concurrency permitted",
            "D. It has no impact on concurrency"
        ],
        "answer": 2,
        "explanation": "Coarse granularity (like table-level locks) reduces concurrency because more data is locked, causing more transactions to wait.",
        "course": "Database Systems"
    },
    {
        "question": "What must be obtained before performing a deletion operation on an existing data item?",
        "options": [
            "A. Shared lock",
            "B. Intention lock",
            "C. Write lock",
            "D. Read lock"
        ],
        "answer": 2,
        "explanation": "A write (exclusive) lock must be obtained before deleting a data item to prevent other transactions from accessing it during the deletion.",
        "course": "Database Systems"
    },
    {
        "question": "Which type of backup copies only the data that has changed since the last backup?",
        "options": [
            "A. Full Backup",
            "B. Incremental Backup",
            "C. Differential Backup",
            "D. Snapshot Backup"
        ],
        "answer": 1,
        "explanation": "Incremental backup copies only data changed since the last backup (whether full or incremental).",
        "course": "Database Systems"
    },
    {
        "question": "What is the primary purpose of database recovery?",
        "options": [
            "A. To increase transaction speed and performance",
            "B. To reduce data redundancy and save storage",
            "C. To enhance data security and prevent failure",
            "D. To bring the database into the last consistent state"
        ],
        "answer": 3,
        "explanation": "Database recovery restores the database to the most recent consistent state after a failure.",
        "course": "Database Systems"
    },
    {
        "question": "What is the primary notion of Role-Based Access Control (RBAC)?",
        "options": [
            "A. Permissions are associated with individual users, and roles created per user",
            "B. Permissions are associated with roles, and users are assigned to appropriate roles.",
            "C. Permissions are granted based on user requests and administrative approvals",
            "D. Permissions are automatically assigned by the system for each user"
        ],
        "answer": 1,
        "explanation": "In RBAC, permissions are associated with roles, and users are assigned to roles based on their responsibilities.",
        "course": "Database Systems"
    },
    {
        "question": "Which principle of data integrity states that all data must be recorded at the time an action is performed, not retroactively?",
        "options": [
            "A. Contemporaneous",
            "B. Attributable",
            "C. Legible",
            "D. Original"
        ],
        "answer": 0,
        "explanation": "Contemporaneous principle requires data to be recorded at the time of the action, not later.",
        "course": "Database Systems"
    },
    {
        "question": "If the owner account A revokes the privilege granted to B, what happens to the privileges that B propagated based on that privilege?",
        "options": [
            "A. They remain active.",
            "B. They are automatically revoked by the system.",
            "C. They are transferred to another account.",
            "D. They are converted to read-only privileges."
        ],
        "answer": 1,
        "explanation": "When a privilege is revoked, any privileges that were granted based on that privilege are also automatically revoked (cascading revoke).",
        "course": "Database Systems"
    },
    {
        "question": "In nested transactions, what is the purpose of using savepoints?",
        "options": [
            "A. To encrypt data during transmission",
            "B. To create roll back points in case of error",
            "C. To compress data to save storage space",
            "D. To duplicate data for backup purposes"
        ],
        "answer": 1,
        "explanation": "Savepoints allow partial rollback within a transaction, creating points to which you can roll back without aborting the entire transaction.",
        "course": "Database Systems"
    },
    {
        "question": "Which feature is unique to object-oriented databases compared to relational databases?",
        "options": [
            "A. Use SQL for data querying.",
            "B. Ability to handle large amounts of data.",
            "C. Storing data in objects and classes.",
            "D. Organizing data into rows and columns."
        ],
        "answer": 2,
        "explanation": "Object-oriented databases store data as objects and classes, while relational databases use rows and columns.",
        "course": "Database Systems"
    },
    {
        "question": "What is a key advantage of relational databases over object-oriented databases?",
        "options": [
            "A. Simple and widespread SQL use.",
            "B. Compatibility with NoSQL.",
            "C. Supports complex data types.",
            "D. Handles hierarchical data."
        ],
        "answer": 0,
        "explanation": "Relational databases have the advantage of using SQL, which is simple, standardized, and widely adopted.",
        "course": "Database Systems"
    },
    {
        "question": "What is information about data called?",
        "options": [
            "A. Hyper data",
            "B. Tera data",
            "C. Meta data",
            "D. Relations"
        ],
        "answer": 2,
        "explanation": "Metadata is data about data, describing the structure, constraints, and other properties of the data.",
        "course": "Database Systems"
    },
    {
        "question": "What does an RDBMS consist of?",
        "options": [
            "A. Collection of Records",
            "B. Collection of Keys",
            "C. Collection of Tables",
            "D. Collection of Fields"
        ],
        "answer": 2,
        "explanation": "A Relational Database Management System (RDBMS) consists of a collection of tables (relations) that store data.",
        "course": "Database Systems"
    },
    {
        "question": "The ability to query data, as well as insert, delete, and alter tuples, is offered by",
        "options": [
            "A. TCL (Transaction Control Language)",
            "B. DCL (Data Control Language)",
            "C. DDL (Data Definition Language)",
            "D. DML (Data Manipulation Language)"
        ],
        "answer": 3,
        "explanation": "Data Manipulation Language (DML) provides operations to query, insert, delete, and modify data.",
        "course": "Database Systems"
    },
    {
        "question": "What happens if a piece of data is stored in two places in the database?",
        "options": [
            "A. Storage space is wasted & changing the data in one spot will cause data inconsistency"
        ],
        "answer": 0,
        "explanation": "Data redundancy wastes storage space and can lead to inconsistency if updates are not applied to all copies.",
        "course": "Database Systems"
    },
    {
        "question": "In E-R diagram derived attribute are represented by",
        "options": [
            "A. Ellipse",
            "B. Dashed ellipse",
            "C. Rectangle",
            "D. Triangle"
        ],
        "answer": 1,
        "explanation": "Derived attributes in E-R diagrams are represented by dashed ellipses.",
        "course": "Database Systems"
    },
    {
        "question": "Various concurrency-control schemes are used to ensure",
        "options": [
            "A. Serializability",
            "B. Deadlock prevention",
            "C. Timeouts",
            "D. Locking states"
        ],
        "answer": 0,
        "explanation": "Concurrency control schemes primarily ensure serializability of concurrent transactions.",
        "course": "Database Systems"
    },
    {
        "question": "The most common concurrency-control schemes include locking protocols and",
        "options": [
            "A. Timestamp-ordering schemes",
            "B. Validation techniques",
            "C. Multiversion schemes",
            "D. All of the Above"
        ],
        "answer": 3,
        "explanation": "Common concurrency control schemes include locking, timestamp ordering, validation, and multiversion techniques.",
        "course": "Database Systems"
    },
    {
        "question": "An integral part of database that can restore the database to the consistent state of before failure is called",
        "options": [
            "A. Recovery Manager"
        ],
        "answer": 0,
        "explanation": "The recovery manager is responsible for restoring the database to a consistent state after a failure.",
        "course": "Database Systems"
    },
    {
        "question": "Which of the following is a basic form of grant statement?",
        "options": [
            "A. GRANT 'privilege list' ON 'relation name or view name' TO 'user/role list';",
            "B. GRANT 'privilege list' ON 'user/role list' TO 'relation name or view name';",
            "C. GRANT 'privilege list' TO 'user/role list';",
            "D. GRANT 'privilege list' ON 'relation name or view name' ON 'user/role list';"
        ],
        "answer": 0,
        "explanation": "The basic GRANT syntax is: GRANT privileges ON object TO users/roles.",
        "course": "Database Systems"
    },
    {
        "question": "An autonomous homogenous environment is which of the following?",
        "options": [
            "A. The same DBMS is at each node and each DBMS works independently.",
            "B. The same DBMS is at each node and a central DBMS coordinates database access.",
            "C. A different DBMS is at each node and each DBMS works independently.",
            "D. A different DBMS is at each node and a central DBMS coordinates database access."
        ],
        "answer": 0,
        "explanation": "Autonomous homogenous: same DBMS at each node with independent control.",
        "course": "Database Systems"
    },
    {
        "question": "A heterogeneous distributed database is which of the following?",
        "options": [
            "A. The same DBMS is used at each location and data are not distributed across all nodes.",
            "B. The same DBMS is used at each location and data are distributed across all nodes.",
            "C. A different DBMS is used at each location and data are not distributed across all nodes.",
            "D. A different DBMS is used at each location and data are distributed across all nodes."
        ],
        "answer": 3,
        "explanation": "Heterogeneous distributed databases use different DBMS at different locations with data distributed across nodes.",
        "course": "Database Systems"
    }
];

console.log(`✅ Loaded ${window.databaseSystemsQuestions.length} Database Systems questions`);