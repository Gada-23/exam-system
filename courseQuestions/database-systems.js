// ===============================
// DATABASE SYSTEMS
// ===============================
window.databaseSystemsQuestions = [
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
    }
];