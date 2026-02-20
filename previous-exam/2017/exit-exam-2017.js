// ===============================
// 2017 EXIT EXAM QUESTIONS
// Complete set of 100 questions from the 2017 Computer Science Exit Exam
// ===============================

window.exitExam2017 = [
    {
        id: 1,
        question: "You are the administrator of an active directory domain. A user complains to you that he is unable to change his password. No other users have this issue. What is the most likely cause of the problem?",
        options: [
            "a. Insufficient login credentials",
            "b. He is a member of the Administrators group",
            "c. The property 'User cannot change password' has been enabled when it was created",
            "d. He is not a member of the domain"
        ],
        answer: 2,
        explanation: "The 'User cannot change password' property, when enabled, prevents the user from changing their password. Since no other users have this issue, it's likely a user-specific setting.",
        course: "System Administration",
        year: 2017
    },
    {
        id: 2,
        question: "How does AI contribute to gaining insight into human intelligence?",
        options: [
            "a. By replicating human cognitive processes exactly",
            "b. By relying solely on predetermined rules and algorithms",
            "c. By analyzing large datasets to uncover patterns and correlations",
            "d. By disregarding the complexities of human cognition"
        ],
        answer: 2,
        explanation: "AI processes vast amounts of data, identifying trends and patterns that can inform our understanding of human cognition.",
        course: "Artificial Intelligence",
        year: 2017
    },
    {
        id: 3,
        question: "If a problem can be broken into sub-problems that are reused several times, the problem possesses ______ property.",
        options: [
            "a. Memoization",
            "b. Optimal substructure",
            "c. Greedy",
            "d. Overlapping sub-problems"
        ],
        answer: 3,
        explanation: "Overlapping sub-problems indicates that a problem can be divided into smaller sub-problems that recur multiple times, suitable for dynamic programming.",
        course: "Algorithms",
        year: 2017
    },
    {
        id: 4,
        question: "In knowledge Representation (KR) how we do represent 'how to drive a car'?",
        options: [
            "a. Declarative knowledge",
            "b. Transition knowledge",
            "c. Procedural knowledge",
            "d. Information Knowledge"
        ],
        answer: 2,
        explanation: "Procedural knowledge represents knowing how to perform tasks and actions, involving steps and skills.",
        course: "Artificial Intelligence",
        year: 2017
    },
    {
        id: 5,
        question: "What is the difference between OLTP and OLAP databases?",
        options: [
            "a. OLTP databases store historical data, while OLAP databases store real-time data",
            "b. OLTP databases are optimized for read-heavy workloads, while OLAP databases are optimized for write heavy workloads",
            "c. OLTP databases are used for online transaction processing, while OLAP databases are used for online analytical processing",
            "d. OLTP databases are used for online analytical processing, while OLAP databases are used for online transaction processing"
        ],
        answer: 2,
        explanation: "OLTP systems handle transactional data, while OLAP systems are optimized for complex queries and data analysis.",
        course: "Database Systems",
        year: 2017
    },
    {
        id: 6,
        question: "Which ACID property ensures that a transaction either completes in its entirety or has no effect at all?",
        options: [
            "a. Atomicity",
            "b. Durability",
            "c. Consistency",
            "d. Isolation"
        ],
        answer: 0,
        explanation: "Atomicity ensures transactions are treated as indivisible units - they either complete fully or have no effect.",
        course: "Database Systems",
        year: 2017
    },
    {
        id: 7,
        question: "What is the postfix expression for the given infix (2 + 3) * (4 + 5) notation?",
        options: [
            "a. 2 3 + 4 5 * +",
            "b. 23 + 45 +*",
            "c. 234 * +5+",
            "d. 2+3*4+5"
        ],
        answer: 1,
        explanation: "The correct postfix expression is '23+45+*' following the rules of infix to postfix conversion.",
        course: "Data Structures",
        year: 2017
    },
    {
        id: 8,
        question: "What is the primary objective of reinforcement learning in artificial intelligence?",
        options: [
            "a. To mimic human decision-making processes",
            "b. To categorize data into predefined classes or clusters",
            "c. To identify patterns and correlations in data",
            "d. To maximize cumulative reward through sequential decision-making"
        ],
        answer: 3,
        explanation: "Reinforcement learning focuses on training agents to maximize long-term rewards through interactions with environments.",
        course: "Artificial Intelligence",
        year: 2017
    },
    {
        id: 9,
        question: "If an optimal solution can be created for a problem by constructing optimal solutions for its subproblems, the problem possesses ______ property.",
        options: [
            "a. Greedy",
            "b. Optimal substructure",
            "c. Memoization",
            "d. Overlapping sub-problems"
        ],
        answer: 1,
        explanation: "Optimal substructure means optimal solutions can be formed from optimal solutions of subproblems.",
        course: "Algorithms",
        year: 2017
    },
    {
        id: 10,
        question: "One of the following is not the main advantage of multiprogramming?",
        options: [
            "a. Copying one's programs or data; using system resources (CPU, memory, disk space, peripherals) without proper accounting",
            "b. The CPU switches from program to program, running each for tens or hundreds of milliseconds. This provides economical interactive use of a system",
            "c. Attempts to increase CPU utilization by always having something for the CPU to execute",
            "d. Makes efficient use of the CPU by overlapping the demands for the CPU and its I/O devices from various users"
        ],
        answer: 0,
        explanation: "Option a describes unauthorized resource usage, not an advantage of multiprogramming.",
        course: "Operating Systems",
        year: 2017
    },
    {
        id: 11,
        question: "Which one of the following is not a method of an expression for algorithms?",
        options: [
            "a. Natural language",
            "b. Programming language",
            "c. Pseudo-code",
            "d. Flowchart"
        ],
        answer: 1,
        explanation: "Programming languages implement algorithms but aren't typically considered abstract expression methods.",
        course: "Algorithms",
        year: 2017
    },
    {
        id: 12,
        question: "In a healthcare database system, which concept is crucial for ensuring patient data privacy and security?",
        options: [
            "a. Data Warehousing",
            "b. Data Mining",
            "c. Data Encryption",
            "d. Data Replication"
        ],
        answer: 2,
        explanation: "Data encryption protects sensitive information from unauthorized access and breaches.",
        course: "Database Systems",
        year: 2017
    },
    {
        id: 13,
        question: "What is a foreign key in a relational database?",
        options: [
            "a. A field in one table that refers to the primary key in another table",
            "b. A key used for accessing external data sources",
            "c. A key used for indexing primary keys",
            "d. A key used for encryption purposes"
        ],
        answer: 0,
        explanation: "Foreign keys establish relationships between tables by linking to primary keys in other tables.",
        course: "Database Systems",
        year: 2017
    },
    {
        id: 14,
        question: "Which programming paradigm emphasizes breaking down problems into smaller, reusable components known as functions or procedures?",
        options: [
            "a. Procedural programming",
            "b. Imperative programming",
            "c. Object-oriented programming",
            "d. Functional programming"
        ],
        answer: 0,
        explanation: "Procedural programming focuses on breaking down problems into reusable functions or procedures.",
        course: "Computer Programming",
        year: 2017
    },
    {
        id: 15,
        question: "Which one of the following is a passive attack?",
        options: [
            "a. Masquerade",
            "b. DoS",
            "c. Traffic analysis",
            "d. Reply"
        ],
        answer: 2,
        explanation: "Traffic analysis monitors data traffic without altering communication, making it a passive attack.",
        course: "Computer Security",
        year: 2017
    },
    {
        id: 16,
        question: "Which one of the following is not a step in merge sort algorithm?",
        options: [
            "a. Combine",
            "b. Conquer",
            "c. Divide",
            "d. Analyze"
        ],
        answer: 3,
        explanation: "Merge sort steps are Divide, Conquer, and Combine. 'Analyze' is not part of the algorithm.",
        course: "Algorithms",
        year: 2017
    },
    {
        id: 17,
        question: "What does the term 'algorithm' refer to in the context of computer programming?",
        options: [
            "a. A set of rules or instructions for solving a problem",
            "b. A variable that holds a single piece of data",
            "c. A function that performs a specific task",
            "d. A programming language syntax"
        ],
        answer: 0,
        explanation: "An algorithm is a systematic procedure or set of rules for solving a specific problem.",
        course: "Algorithms",
        year: 2017
    },
    {
        id: 18,
        question: "Which objective of modern operating systems involves protecting the system and its resources from unauthorized access and malicious attacks?",
        options: [
            "a. Enhancing system performance",
            "b. Ensuring security and protection",
            "c. Maximizing hardware utilization",
            "d. Providing a user-friendly interface"
        ],
        answer: 1,
        explanation: "Security and protection involve safeguarding system resources from unauthorized access and attacks.",
        course: "Operating Systems",
        year: 2017
    },
    {
        id: 19,
        question: "Which one is correct about RISC computers?",
        options: [
            "a. RISC are with few numbers of registers when compared to CISC",
            "b. RISC uses extensive addressing capabilities for memory operations",
            "c. RISC use complex and efficient machine instructions when compared to CISC",
            "d. RISC is with hardwired control unit with pipelining processing"
        ],
        answer: 3,
        explanation: "RISC architectures typically use hardwired control units and support pipelining for efficient execution.",
        course: "Computer Organization",
        year: 2017
    },
    {
        id: 20,
        question: "Which of the following is not a characteristic of NoSQL databases?",
        options: [
            "a. Flexibility in data models",
            "b. High availability",
            "c. Scalability",
            "d. Strict schema enforcement"
        ],
        answer: 3,
        explanation: "NoSQL databases are known for flexible schemas, not strict schema enforcement.",
        course: "Database Systems",
        year: 2017
    },
    {
        id: 21,
        question: "What is the name of a grammar in which all attributes of the grammar symbols are synthesized attributes?",
        options: [
            "a. M-attributed grammar",
            "b. L-attributed grammar",
            "c. S-attributed grammar",
            "d. I-attributed grammar"
        ],
        answer: 2,
        explanation: "In S-attributed grammar, all attributes are synthesized, computed from children nodes in the parse tree.",
        course: "Compiler Design",
        year: 2017
    },
    {
        id: 22,
        question: "What is the minimum number of stacks required by a FSA?",
        options: [
            "a. 1",
            "b. 2",
            "c. 3",
            "d. 0"
        ],
        answer: 3,
        explanation: "Finite State Automata operate using finite states without needing stack memory.",
        course: "Automata Theory",
        year: 2017
    },
    {
        id: 23,
        question: "What is the purpose of the switch statement in C++?",
        options: [
            "a. To declare and define functions",
            "b. To select one of many code blocks to be executed",
            "c. To execute a block of code repeatedly",
            "d. To define a loop that repeats until a condition is false"
        ],
        answer: 1,
        explanation: "Switch statement selects one code block among many based on variable value.",
        course: "Computer Programming",
        year: 2017
    },
    {
        id: 24,
        question: "Which of the following is Uninformed (Blind) Search?",
        options: [
            "a. Breadth-first search (BFS)",
            "b. Hill climbing",
            "c. Heuristic Functions",
            "d. Greedy search"
        ],
        answer: 0,
        explanation: "BFS is uninformed as it doesn't use domain-specific knowledge or heuristics to guide search.",
        course: "Artificial Intelligence",
        year: 2017
    },
    {
        id: 25,
        question: "Which among the following measures how strongly the elements within a module are related?",
        options: [
            "a. cohesion",
            "b. aggregation",
            "c. inheritance",
            "d. coupling"
        ],
        answer: 0,
        explanation: "Cohesion measures how closely related elements within a module are functionally.",
        course: "Software Engineering",
        year: 2017
    },
    {
        id: 26,
        question: "What is the term used to describe the collection of information stored in the database at a particular moment?",
        options: [
            "a. foreign key",
            "b. an instance",
            "c. primary key",
            "d. schema"
        ],
        answer: 1,
        explanation: "An instance refers to the database's data collection at a specific moment in time.",
        course: "Database Systems",
        year: 2017
    },
    {
        id: 27,
        question: "Which data structure allows deleting data elements from front and inserting at rear?",
        options: [
            "a. Binary search tree",
            "b. Deques",
            "c. Stacks",
            "d. Queues"
        ],
        answer: 3,
        explanation: "Queues follow FIFO principle: delete from front, insert at rear.",
        course: "Data Structures",
        year: 2017
    },
    {
        id: 28,
        question: "Which one of the following commands is used to test reachability of hosts?",
        options: [
            "a. Netstat",
            "b. Ping",
            "c. Traceroute",
            "d. Tcpdump"
        ],
        answer: 1,
        explanation: "Ping sends ICMP echo requests to test host reachability on networks.",
        course: "Networking",
        year: 2017
    },
    {
        id: 29,
        question: "Which of the following is true statement?",
        options: [
            "a. A module having low cohesion and high coupling is said to be functionally independent of other modules",
            "b. A functionally dependent module has minimal interaction with other modules",
            "c. A module having high cohesion and low coupling is said to be functionally dependent of other modules",
            "d. Cohesion is a measure of functional strength of a module"
        ],
        answer: 3,
        explanation: "Cohesion measures the functional strength and focus of a module's responsibilities.",
        course: "Software Engineering",
        year: 2017
    },
    {
        id: 30,
        question: "Which class of grammar is used for syntax analysis?",
        options: [
            "a. Context free grammars",
            "b. Regular grammars",
            "c. Non-recursive grammars",
            "d. Recursive grammars"
        ],
        answer: 0,
        explanation: "Context-free grammars are primarily used for syntax analysis in programming languages.",
        course: "Compiler Design",
        year: 2017
    },
    {
        id: 31,
        question: "Brute-force attacks are used most often against which types of access control?",
        options: [
            "a. Biometrics and smart cards",
            "b. Passwords and Smart Cards",
            "c. Passwords and Personal Identification Number",
            "d. Biometrics and Passwords"
        ],
        answer: 2,
        explanation: "Brute-force attacks target passwords and PINs by systematically trying combinations.",
        course: "Computer Security",
        year: 2017
    },
    {
        id: 32,
        question: "One of the following describes the static structure of a system?",
        options: [
            "a. Sequence diagram",
            "b. Use case diagram",
            "c. Activity diagram",
            "d. Class diagram"
        ],
        answer: 3,
        explanation: "Class diagrams show static structure: classes, attributes, methods, and relationships.",
        course: "Software Engineering",
        year: 2017
    },
    {
        id: 33,
        question: "Which scheduling algorithm ensures that each process gets an equal share of the CPU time?",
        options: [
            "a. Round Robin (RR)",
            "b. First-Come, First-Served (FCFS)",
            "c. Shortest Job Next (SJN)",
            "d. Priority Scheduling"
        ],
        answer: 0,
        explanation: "Round Robin allocates fixed time slices to each process in cyclic order, ensuring equal CPU share.",
        course: "Operating Systems",
        year: 2017
    },
    {
        id: 34,
        question: "The data structure required for breadth first traversal on a graph is:",
        options: [
            "a. Stack",
            "b. Tree",
            "c. Queue",
            "d. Array"
        ],
        answer: 2,
        explanation: "BFS uses a queue to explore nodes level by level following FIFO principle.",
        course: "Data Structures",
        year: 2017
    },
    {
        id: 35,
        question: "In PHP, which function initiates a session?",
        options: [
            "a. s_start()",
            "b. session_start()",
            "c. start()",
            "d. session_str()"
        ],
        answer: 1,
        explanation: "session_start() is the PHP function used to initiate a session.",
        course: "Web Programming",
        year: 2017
    },
    {
        id: 36,
        question: "Which one of the following places we cannot place our JavaScript code?",
        options: [
            "a. In any tag as an attribute",
            "b. In the <body> tag",
            "c. In external files",
            "d. In the <head> tag"
        ],
        answer: 0,
        explanation: "JavaScript cannot be placed as an attribute in any tag; it goes in <script> tags or external files.",
        course: "Web Programming",
        year: 2017
    },
    {
        id: 37,
        question: "Which one of the following is not a component of the computer system?",
        options: [
            "a. The data unit",
            "b. The input unit",
            "c. The control unit",
            "d. The storage unit"
        ],
        answer: 0,
        explanation: "'Data unit' isn't a standard computer system component like input, control, or storage units.",
        course: "Computer Organization",
        year: 2017
    },
    {
        id: 38,
        question: "In signal communication, the absolute value of the highest intensity of the signal proportional to the energy it carries is referred as",
        options: [
            "a. Period",
            "b. Frequency",
            "c. Attenuation",
            "d. Peak-amplitude"
        ],
        answer: 3,
        explanation: "Peak amplitude is the absolute value of the highest signal intensity, proportional to energy.",
        course: "Networking",
        year: 2017
    },
    {
        id: 39,
        question: "What is encapsulation in OOP?",
        options: [
            "a. Inheritance",
            "b. Composition",
            "c. Data hiding and abstraction",
            "d. Polymorphism"
        ],
        answer: 2,
        explanation: "Encapsulation bundles data and methods while restricting access - data hiding and abstraction.",
        course: "Object Oriented Programming",
        year: 2017
    },
    {
        id: 40,
        question: "Which one of the following is a correct statement?",
        options: [
            "a. Turing machine is the least powerful automata",
            "b. Pushdown automata and FSA have the same power",
            "c. Regular expression is more powerful that FSA",
            "d. Deterministic FSA and Nondeterministic FSA are equivalent"
        ],
        answer: 3,
        explanation: "DFA and NFA are equivalent, recognizing the same regular languages.",
        course: "Automata Theory",
        year: 2017
    },
    {
        id: 41,
        question: "Which one of the following statements is true?",
        options: [
            "a. The transport layer in OSI model is connection oriented and connectionless",
            "b. The transport layer in TCP/IP model is connection oriented only",
            "c. TCP/IP model has seven layers while OSI model has four",
            "d. OSI model provides clear distinction between services, interfaces and protocols while TCP/IP model"
        ],
        answer: 0,
        explanation: "OSI transport layer supports both connection-oriented (TCP) and connectionless (UDP) communication.",
        course: "Networking",
        year: 2017
    },
    {
        id: 42,
        question: "How does AI contribute to the study of human behavior and cognition?",
        options: [
            "a. By disregarding human behavior as irrelevant to AI research",
            "b. By relying solely on philosophical theories of consciousness",
            "c. By providing insights through analyzing vast amounts of behavioral data",
            "d. By limiting its scope to deterministic algorithms"
        ],
        answer: 2,
        explanation: "AI analyzes large datasets to identify patterns and insights about human behavior and cognition.",
        course: "Artificial Intelligence",
        year: 2017
    },
    {
        id: 43,
        question: "Which backup strategy tries to backup only the modified files?",
        options: [
            "a. Full backup",
            "b. Partial backup",
            "c. Full dump",
            "d. Incremental backup"
        ],
        answer: 3,
        explanation: "Incremental backup only backs up files changed since the last backup, saving time and space.",
        course: "System Administration",
        year: 2017
    },
    {
        id: 44,
        question: "Which of the following is not Software Characteristics?",
        options: [
            "a. Maintenance is without spare part",
            "b. software is complex",
            "c. Software is manufactured",
            "d. Software is intangible"
        ],
        answer: 0,
        explanation: "Maintenance without spare parts isn't a software characteristic; software is complex, manufactured, and intangible.",
        course: "Software Engineering",
        year: 2017
    },
    {
        id: 45,
        question: "Which action of the bottom-up parsing moves terminals from input buffer to the stack?",
        options: [
            "a. Accept",
            "b. Shift",
            "c. Augment",
            "d. Reduce"
        ],
        answer: 1,
        explanation: "In bottom-up parsing, 'shift' moves terminals from input buffer onto the stack.",
        course: "Compiler Design",
        year: 2017
    },
    {
        id: 46,
        question: "______ is the process of arranging the elements of a particular data structure in some logical order.",
        options: [
            "a. Insertion",
            "b. Traversing",
            "c. Merging",
            "d. Sorting"
        ],
        answer: 3,
        explanation: "Sorting arranges data structure elements in logical order (ascending/descending).",
        course: "Data Structures",
        year: 2017
    },
    {
        id: 47,
        question: "What would be the output of the following JavaScript code?\n<script type=\"text/javascript\">\nx=4+\"4\";\ndocument.write(x);\n</script>",
        options: [
            "a. 4",
            "b. 8",
            "c. 44",
            "d. The code contains an error"
        ],
        answer: 2,
        explanation: "4 + \"4\" results in string concatenation, outputting '44'.",
        course: "Web Programming",
        year: 2017
    },
    {
        id: 48,
        question: "When an input will be accepted by a Turing Machine?",
        options: [
            "a. If the machine halts in a final state",
            "b. If the machine enters into an infinite loop",
            "c. If it reaches any state and has no possible move for an input symbol",
            "d. If the machine consumes all the input symbols in one of the states"
        ],
        answer: 0,
        explanation: "A Turing Machine accepts input when it halts in a designated final (accepting) state.",
        course: "Automata Theory",
        year: 2017
    },
    {
        id: 49,
        question: "What is the regular expression for the set of strings that start with ab and end with bba over the alphabet set {a, b}?",
        options: [
            "a. ab(ab)*bba",
            "b. aba*b*bba",
            "c. ab(a+b)*bba",
            "d. ab(a+b*)bba"
        ],
        answer: 2,
        explanation: "ab(a+b)*bba matches strings starting with 'ab' and ending with 'bba' with any combination in between.",
        course: "Automata Theory",
        year: 2017
    },
    {
        id: 50,
        question: "Which one of the following is false about HTTP protocol?",
        options: [
            "a. An HTTP message body can be empty",
            "b. It is a protocol used for communication between a web browser and a web server",
            "c. It is a stateless protocol",
            "d. An HTTP message has specified minimum size"
        ],
        answer: 3,
        explanation: "HTTP messages don't have a specified minimum size; they can be empty or very small.",
        course: "Networking",
        year: 2017
    },
    {
        id: 51,
        question: "Which condition in a resource allocation system refers to a situation where a set of processes are waiting for resources held by each other, forming a circular chain?",
        options: [
            "a. Hold and wait",
            "b. No preemption",
            "c. Mutual exclusion",
            "d. Circular wait"
        ],
        answer: 3,
        explanation: "Circular wait occurs when processes wait for resources held by each other in a circular chain.",
        course: "Operating Systems",
        year: 2017
    },
    {
        id: 52,
        question: "What does DOM stand for in HTML?",
        options: [
            "a. Document Oriented Management",
            "b. Document OnLoad Model",
            "c. Document Object Model",
            "d. Document Oriented Model"
        ],
        answer: 2,
        explanation: "DOM stands for Document Object Model, the programming interface for HTML/XML documents.",
        course: "Web Programming",
        year: 2017
    },
    {
        id: 53,
        question: "Select incorrect statement about Database languages?",
        options: [
            "a. Data-manipulation language (DML) Retrieval of information stored in the database",
            "b. Data-definition language (DDL) to specify the database schema",
            "c. Data-definition languages (DDL) specify Modification of information stored in the database",
            "d. Data-manipulation language (DML) is a language that enables users to access or manipulate data as organized by the appropriate data model"
        ],
        answer: 2,
        explanation: "DDL defines schema structure, not for modifying data (that's DML's role).",
        course: "Database Systems",
        year: 2017
    },
    {
        id: 54,
        question: "Everything is a/an ______ in HTML DOM?",
        options: [
            "a. Element",
            "b. Array",
            "c. Node",
            "d. Attribute"
        ],
        answer: 2,
        explanation: "In HTML DOM, everything (elements, attributes, text) is represented as a node.",
        course: "Web Programming",
        year: 2017
    },
    {
        id: 55,
        question: "An operation performed on the contents of a register is known as",
        options: [
            "a. Instruction code",
            "b. Micro-operation",
            "c. Registration",
            "d. Accumulation"
        ],
        answer: 1,
        explanation: "Micro-operations are operations performed on register contents.",
        course: "Computer Organization",
        year: 2017
    },
    {
        id: 56,
        question: "Which one of the following is not unique for every computer in the network?",
        options: [
            "a. MAC address",
            "b. IP-v4 address",
            "c. IP-v6 address",
            "d. Subnet mask"
        ],
        answer: 3,
        explanation: "Subnet mask can be same for multiple devices on same subnet; MAC/IP addresses are unique.",
        course: "Networking",
        year: 2017
    },
    {
        id: 57,
        question: "In PHP, ______ are predefined variables that are accessible throughout your script.",
        options: [
            "a. Predefined variables",
            "b. Reserved variables",
            "c. Superglobals",
            "d. Global variables"
        ],
        answer: 2,
        explanation: "Superglobals are predefined PHP variables accessible throughout the script.",
        course: "Web Programming",
        year: 2017
    },
    {
        id: 58,
        question: "Polynomial addition is implemented using which data structure?",
        options: [
            "a. Stack",
            "b. Linked List",
            "c. Queue",
            "d. Trees"
        ],
        answer: 1,
        explanation: "Linked lists efficiently represent polynomial terms and allow easy manipulation during addition.",
        course: "Data Structures",
        year: 2017
    },
    {
        id: 59,
        question: "Which of the following access control services determines what a subject can do?",
        options: [
            "a. Accountability",
            "b. Audit",
            "c. Authorization",
            "d. Authentication"
        ],
        answer: 2,
        explanation: "Authorization determines what actions a subject is permitted to perform.",
        course: "Computer Security",
        year: 2017
    },
    {
        id: 60,
        question: "Which one of the following is not used to determine the CPU state at the end of the execute cycle?",
        options: [
            "a. The content of certain status conditions",
            "b. The content of all processor registers",
            "c. The content of the data bus",
            "d. The content of the program counter"
        ],
        answer: 2,
        explanation: "Data bus content isn't used to determine CPU state; registers, status conditions, and PC are.",
        course: "Computer Organization",
        year: 2017
    },
    {
        id: 61,
        question: "Which of the following best describes a database?",
        options: [
            "a. A collection of data organized in a specific structure",
            "b. A collection of random data",
            "c. A collection of related files",
            "d. A collection of unrelated files"
        ],
        answer: 0,
        explanation: "A database is organized data in a specific structure, enabling efficient storage and retrieval.",
        course: "Database Systems",
        year: 2017
    },
    {
        id: 62,
        question: "Which one of the following property of a graph represents the number of derivation steps needed to generate a valid string?",
        options: [
            "a. Degree of the vertex",
            "b. Parent vertex",
            "c. Root of the graph",
            "d. Path of a vertex from the root"
        ],
        answer: 3,
        explanation: "Path length from root represents derivation steps needed to generate a string.",
        course: "Automata Theory",
        year: 2017
    },
    {
        id: 63,
        question: "Which function of a contemporary operating system focuses on providing users with easy access to applications and resources?",
        options: [
            "a. Device management",
            "b. File management",
            "c. Process management",
            "d. User interface management"
        ],
        answer: 3,
        explanation: "User interface management provides easy access to applications and resources.",
        course: "Operating Systems",
        year: 2017
    },
    {
        id: 64,
        question: "Which SQL command is used to retrieve data from a database?",
        options: [
            "a. UPDATE",
            "b. INSERT",
            "c. SELECT",
            "d. DELETE"
        ],
        answer: 2,
        explanation: "SELECT command retrieves data from database tables.",
        course: "Database Systems",
        year: 2017
    },
    {
        id: 65,
        question: "Which one of the following is not an attack on passwords?",
        options: [
            "a. Brute-force Attack",
            "b. Trojan Login",
            "c. Logic Bomb",
            "d. Eavesdropping"
        ],
        answer: 2,
        explanation: "Logic bomb is malicious code triggered by conditions, not specifically a password attack.",
        course: "Computer Security",
        year: 2017
    },
    {
        id: 66,
        question: "One of the following is an example of Deduction Reasoning?",
        options: [
            "a. The grass has been wet every time it has rained. Thus, when it rains, the grass gets wet",
            "b. When it rains, the grass gets wet. It rains. Thus the grass is wet",
            "c. When it rains, the grass gets wet. The grass is wet. It rains",
            "d. When it rains, the grass gets wet. The grass is wet, it must have rained"
        ],
        answer: 1,
        explanation: "Deductive reasoning applies general rule to specific case: If it rains, grass gets wet; it rains; therefore grass is wet.",
        course: "Artificial Intelligence",
        year: 2017
    },
    {
        id: 67,
        question: "What is the command used to change permissions of a file for different users?",
        options: [
            "a. Permission",
            "b. Perm",
            "c. Modify",
            "d. Chmod"
        ],
        answer: 3,
        explanation: "chmod command changes file permissions in Unix/Linux systems.",
        course: "System Administration",
        year: 2017
    },
    {
        id: 68,
        question: "One of the following is not Properties of an algorithm?",
        options: [
            "a. Finite",
            "b. Input and Output",
            "c. Correct",
            "d. Ambiguity"
        ],
        answer: 3,
        explanation: "Algorithms must be unambiguous; ambiguity is not a desired property.",
        course: "Algorithms",
        year: 2017
    },
    {
        id: 69,
        question: "What are the factors to be considered when planning a software development effort?",
        options: [
            "a. people, problem, productivity, performance",
            "b. people, problem, product, portability",
            "c. people, problem, product, process",
            "d. performance, problem, product, planning"
        ],
        answer: 2,
        explanation: "Key factors: people, problem, product, and process in software development planning.",
        course: "Software Engineering",
        year: 2017
    },
    {
        id: 70,
        question: "What is the term used to describe a blueprint for creating objects in OOP?",
        options: [
            "a. Method",
            "b. Class",
            "c. Instance",
            "d. Object"
        ],
        answer: 1,
        explanation: "Class is the blueprint that defines structure and behavior for creating objects.",
        course: "Object Oriented Programming",
        year: 2017
    },
    {
        id: 71,
        question: "Which OOP principle emphasizes the separation of concerns by dividing a program into smaller, manageable parts?",
        options: [
            "a. Inheritance",
            "b. Modularity",
            "c. Abstraction",
            "d. Encapsulation"
        ],
        answer: 1,
        explanation: "Modularity divides programs into smaller, manageable, and independent parts.",
        course: "Object Oriented Programming",
        year: 2017
    },
    {
        id: 72,
        question: "Which data structure is used to represent the grammatical structure of the source program constructs?",
        options: [
            "a. Stack",
            "b. Queue",
            "c. Tree",
            "d. 2d-array"
        ],
        answer: 2,
        explanation: "Tree structures represent grammatical structure in compilers and interpreters.",
        course: "Compiler Design",
        year: 2017
    },
    {
        id: 73,
        question: "What is the main advantage of using references (&) in C++ compared to pointers?",
        options: [
            "a. References can be dynamically allocated",
            "b. References are more memory-efficient",
            "c. References cannot be null",
            "d. References can access arbitrary memory locations"
        ],
        answer: 2,
        explanation: "References cannot be null, providing safety over pointers that can point to null.",
        course: "Computer Programming",
        year: 2017
    },
    {
        id: 74,
        question: "Which one of the following class of running time functions is the best?",
        options: [
            "a. Exponential",
            "b. Logarithmic",
            "c. Linear",
            "d. Polynomial"
        ],
        answer: 1,
        explanation: "Logarithmic time complexity grows slowest, making it the most efficient among options.",
        course: "Algorithms",
        year: 2017
    },
    {
        id: 75,
        question: "Which one of the following tags is used to represent paragraphs?",
        options: [
            "a. <p>",
            "b. <ph>",
            "c. <par>",
            "d. <pg>"
        ],
        answer: 0,
        explanation: "<p> tag defines paragraphs in HTML.",
        course: "Web Programming",
        year: 2017
    },
    {
        id: 76,
        question: "Which one of the following is the lowest level in computer architecture?",
        options: [
            "a. Hardware",
            "b. Machine language",
            "c. High-level language",
            "d. Assembly language"
        ],
        answer: 0,
        explanation: "Hardware is the physical, lowest level of computer architecture.",
        course: "Computer Organization",
        year: 2017
    },
    {
        id: 77,
        question: "Which of the following is a correct statement?",
        options: [
            "a. System threat is a state which exposes the system for possible attacks",
            "b. System attack is set of activities that may expose the system for possible dangers",
            "c. Vulnerability is a flaw in the system's design that may be exploited by attackers",
            "d. System protection is a process of disconnecting the system from any communication"
        ],
        answer: 2,
        explanation: "Vulnerability refers to design flaws that can be exploited by attackers.",
        course: "Computer Security",
        year: 2017
    },
    {
        id: 78,
        question: "Which one of the following is not a principle of system administration?",
        options: [
            "a. Request-based",
            "b. Communication",
            "c. Automation",
            "d. Simplicity"
        ],
        answer: 0,
        explanation: "Request-based isn't a core principle; communication, automation, and simplicity are.",
        course: "System Administration",
        year: 2017
    },
    {
        id: 79,
        question: "What is the name given to built-in functions in assembly code?",
        options: [
            "a. Cache",
            "b. Func",
            "c. Mnemonics",
            "d. Register"
        ],
        answer: 2,
        explanation: "Mnemonics are symbolic names for machine instructions in assembly language.",
        course: "Computer Organization",
        year: 2017
    },
    {
        id: 80,
        question: "Which one of the following is a correct statement?",
        options: [
            "a. Code optimization can only be done before the actual code is generated",
            "b. Code optimization can only be done after the actual code is generated",
            "c. Code optimization can be done on the intermediate code",
            "d. Code optimization cannot be done before the actual code is generated"
        ],
        answer: 2,
        explanation: "Code optimization can occur at various stages, including on intermediate representations.",
        course: "Compiler Design",
        year: 2017
    },
    {
        id: 81,
        question: "What is the purpose of a loop in computer programming?",
        options: [
            "a. To declare variables",
            "b. To create user interfaces",
            "c. To define conditional statements",
            "d. To execute a block of code repeatedly"
        ],
        answer: 3,
        explanation: "Loops repeatedly execute code blocks based on specified conditions.",
        course: "Computer Programming",
        year: 2017
    },
    {
        id: 82,
        question: "What is the primary purpose of a variable in computer programming?",
        options: [
            "a. To define functions",
            "b. To store and manipulate data",
            "c. To create graphical user interfaces (GUIs)",
            "d. To execute conditional statements"
        ],
        answer: 1,
        explanation: "Variables store and manipulate data throughout program execution.",
        course: "Computer Programming",
        year: 2017
    },
    {
        id: 83,
        question: "The data structure used in the standard implementation of Depth First Search is",
        options: [
            "a. Stack",
            "b. Linked List",
            "c. Queue",
            "d. Array"
        ],
        answer: 0,
        explanation: "DFS uses stack (explicitly or through recursion) for implementation.",
        course: "Data Structures",
        year: 2017
    },
    {
        id: 84,
        question: "Which cable type is the best for transmission of data?",
        options: [
            "a. Coaxial",
            "b. Fiber Optic",
            "c. RJ-45",
            "d. Twisted pair"
        ],
        answer: 1,
        explanation: "Fiber optic offers highest bandwidth, fastest speeds, and longest transmission distances.",
        course: "Networking",
        year: 2017
    },
    {
        id: 85,
        question: "The set of rules that govern all aspect of data communication between computers on a network are referred as",
        options: [
            "a. Language",
            "b. Syntax",
            "c. Access methods",
            "d. Protocol"
        ],
        answer: 3,
        explanation: "Protocols are rules governing data communication between network computers.",
        course: "Networking",
        year: 2017
    },
    {
        id: 86,
        question: "Which type of database replication offers the highest level of data consistency but may introduce higher latency in distributed systems?",
        options: [
            "a. Multi-master replication",
            "b. Asynchronous replication",
            "c. Synchronous replication",
            "d. Semi-synchronous replication"
        ],
        answer: 2,
        explanation: "Synchronous replication ensures highest consistency but may add latency requiring all replicas to acknowledge writes.",
        course: "Database Systems",
        year: 2017
    },
    {
        id: 87,
        question: "______ is a special-purpose program or command line interpreter that read commands typed by a user and execute programs in response to entered commands.",
        options: [
            "a. Kernel",
            "b. Terminal",
            "c. Process",
            "d. Shell"
        ],
        answer: 3,
        explanation: "Shell is the command-line interpreter that reads and executes user commands.",
        course: "Operating Systems",
        year: 2017
    },
    {
        id: 88,
        question: "Which SQL command is used to delete a table from a database?",
        options: [
            "a. REMOVE TABLE",
            "b. DROP TABLE",
            "c. ERASE TABLE",
            "d. DELETE TABLE"
        ],
        answer: 1,
        explanation: "DROP TABLE permanently removes a table and its structure from database.",
        course: "Database Systems",
        year: 2017
    },
    {
        id: 89,
        question: "Which way to define Scope of Software Project?",
        options: [
            "a. Define Error and Functional dependence of the project",
            "b. Define non-Deliverables and Non Functionality",
            "c. Define Deliverables, Functionality, Data and Technical Structure",
            "d. Complexity and risk of the project"
        ],
        answer: 2,
        explanation: "Project scope defines deliverables, functionality, data, and technical structure.",
        course: "Software Engineering",
        year: 2017
    },
    {
        id: 90,
        question: "______ would be more suitable to store items in a shopping cart to be available when the user revisits the site in a couple of days.",
        options: [
            "a. Cache",
            "b. Cookies",
            "c. Basket",
            "d. Session"
        ],
        answer: 1,
        explanation: "Cookies persist data across sessions, keeping shopping cart items for return visits.",
        course: "Web Programming",
        year: 2017
    },
    {
        id: 91,
        question: "______ is an operation in which each letter of a plaintext changes its position but retains its identity in cryptographic algorithms.",
        options: [
            "a. Transposition",
            "b. Substitution",
            "c. Block cipher",
            "d. Mono-alphabetic"
        ],
        answer: 0,
        explanation: "Transposition rearranges letter positions while preserving their identity.",
        course: "Computer Security",
        year: 2017
    },
    {
        id: 92,
        question: "In asymmetric cryptography, the message is encrypted using",
        options: [
            "a. Sender's public key",
            "b. Receiver's public key",
            "c. Receiver's private key",
            "d. Sender's private key"
        ],
        answer: 1,
        explanation: "Messages are encrypted with receiver's public key, decrypted with their private key.",
        course: "Computer Security",
        year: 2017
    },
    {
        id: 93,
        question: "What does ACID stand for in database transactions?",
        options: [
            "a. Atomicity, Consistency, Integrity, Durability",
            "b. All Columns Indexed and Defined",
            "c. Automated Control of Inconsistent Data",
            "d. Advanced Constraints for Improved Data"
        ],
        answer: 0,
        explanation: "ACID: Atomicity, Consistency, Isolation, Durability - key transaction properties.",
        course: "Database Systems",
        year: 2017
    },
    {
        id: 94,
        question: "One of the following Key ideas wrongly matched in object-oriented?",
        options: [
            "a. Method - an action performed by an object",
            "b. Class - does hold any values of the object's attributes",
            "c. Object - usually a person, place or thing",
            "d. Attribute - description of objects in a class"
        ],
        answer: 1,
        explanation: "Class defines structure but doesn't hold values; objects (instances) hold actual values.",
        course: "Object Oriented Programming",
        year: 2017
    },
    {
        id: 95,
        question: "One of the following describes the static structure of a system?",
        options: [
            "a. Sequence diagram",
            "b. Class diagram",
            "c. Use case diagram",
            "d. Activity diagram"
        ],
        answer: 1,
        explanation: "Class diagrams show static structure: classes, attributes, methods, and relationships.",
        course: "Software Engineering",
        year: 2017
    },
    {
        id: 96,
        question: "______ is the process of arranging the elements of a particular data structure in some logical order?",
        options: [
            "a. Insertion",
            "b. Merging",
            "c. Traversing",
            "d. Sorting"
        ],
        answer: 3,
        explanation: "Sorting arranges data structure elements in logical order (ascending/descending).",
        course: "Data Structures",
        year: 2017
    },
    {
        id: 97,
        question: "Which ACID property ensures that a transaction either completes in its entirety or has no effect at all?",
        options: [
            "a. Durability",
            "b. Consistency",
            "c. Isolation",
            "d. Atomicity"
        ],
        answer: 3,
        explanation: "Atomicity ensures transactions are all-or-nothing operations.",
        course: "Database Systems",
        year: 2017
    },
    {
        id: 98,
        question: "In signal communication, the absolute value of the highest intensity of the signal proportional to the energy it carries is referred as",
        options: [
            "a. Peak-amplitude",
            "b. Period",
            "c. Frequency",
            "d. Attenuation"
        ],
        answer: 0,
        explanation: "Peak amplitude is absolute value of highest signal intensity, proportional to energy.",
        course: "Networking",
        year: 2017
    },
    {
        id: 99,
        question: "Which of the following is a correct statement?",
        options: [
            "a. System protection is a process of disconnecting the system from any communication",
            "b. Vulnerability is a flaw in the system's design that may be exploited by attackers",
            "c. System threat is a state which exposes the system for possible attacks",
            "d. System attack is set of activities that may expose the system for possible dangers"
        ],
        answer: 1,
        explanation: "Vulnerability refers to design flaws that attackers can potentially exploit.",
        course: "Computer Security",
        year: 2017
    },
    {
        id: 100,
        question: "What is the purpose of the switch statement in C++?",
        options: [
            "a. To select one of many code blocks to be executed",
            "b. To declare and define functions",
            "c. To execute a block of code repeatedly",
            "d. To define a loop that repeats until a condition is false"
        ],
        answer: 0,
        explanation: "Switch statement selects one code block among many based on variable value.",
        course: "Computer Programming",
        year: 2017
    }
];

console.log(`✅ Loaded ${window.exitExam2017.length} questions from 2017 Exit Exam`);