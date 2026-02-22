// ===============================
// 2017 JUNE EXIT EXAM QUESTIONS
// Verified and corrected for accuracy
// ===============================

window.exitExam2017June = [
    {
        id: 1,
        question: "Which one of the following is an essential management subsystem of an OS?",
        options: [
            "A. Compiler",
            "B. Database manager",
            "C. Interpreter",
            "D. Device manager"
        ],
        answer: 3, // D
        explanation: "An Operating System (OS) relies on core management subsystems to handle hardware and software resources. The Device Manager (I/O Manager) is essential as it manages all input/output devices, while compilers, interpreters, and database managers are application-level software that run on top of the OS.",
        course: "Operating System",
        year: 2017,
        month: "June"
    },
    {
        id: 2,
        question: "Which one of the following is true?",
        options: [
            "A. Natural languages are better recognized by FA than CFG.",
            "B. FA have infinite amount of memory.",
            "C. Finite State Automata are formalized.",
            "D. Non-regular language can be recognized by any FA."
        ],
        answer: 2, // C
        explanation: "Finite State Automata (FA) are formalized mathematical models defined by a 5-tuple (states, alphabet, transition function, start state, accept states). Natural languages require more powerful grammars (Context-Free), FA have finite memory, and non-regular languages cannot be recognized by FA.",
        course: "Automata Theory",
        year: 2017,
        month: "June"
    },
    {
        id: 3,
        question: "Which one of the following indicates threat of computer security caused by viruses, Trojan horses, and denial of services?",
        options: [
            "A. Hardware",
            "B. Software",
            "C. Physical",
            "D. Human"
        ],
        answer: 1, // B
        explanation: "Viruses and Trojan horses are malicious software (malware), and Denial of Service (DoS) attacks are executed through software tools. These are classified as software threats, as opposed to hardware failures, physical theft, or human error.",
        course: "Computer Security",
        year: 2017,
        month: "June"
    },
    {
        id: 4,
        question: "A Finite Automaton is formally defined as:",
        options: [
            "A. 4-tuple",
            "B. 7-tuple",
            "C. 6-tuple",
            "D. 5-tuple"
        ],
        answer: 3, // D
        explanation: "A Finite Automaton (both DFA and NFA) is formally defined as a 5-tuple: (Q, Σ, δ, q0, F) where Q is a finite set of states, Σ is the input alphabet, δ is the transition function, q0 is the start state, and F is the set of accept states.",
        course: "Automata Theory",
        year: 2017,
        month: "June"
    },
    {
        id: 5,
        question: "Which one of the following is used for structuring the content of webpages?",
        options: [
            "A. Hypertext Markup Language",
            "B. Cascading Style Sheets",
            "C. Visual .NET Bean",
            "D. JavaScript"
        ],
        answer: 0, // A
        explanation: "HTML (Hypertext Markup Language) provides the structure and content of webpages by defining elements like headings, paragraphs, lists, and links. CSS handles styling and presentation, while JavaScript adds interactivity.",
        course: "Web Programming",
        year: 2017,
        month: "June"
    },
    {
        id: 6,
        question: "Which one of the following is the function of scanner generator in compiler construction?",
        options: [
            "A. Take a collection of rules that define the translation of the intermediate code to target code.",
            "B. Produce a parser if given a context",
            "C. Execute code optimization",
            "D. Lexical analyzer if given a regular expression"
        ],
        answer: 3, // D
        explanation: "A scanner generator (like Lex or Flex) takes a set of regular expressions as input and automatically generates a lexical analyzer (scanner) that tokenizes source code. It automates the creation of the first phase of a compiler.",
        course: "Compiler Design",
        year: 2017,
        month: "June"
    },
    {
        id: 7,
        question: "Which one of the following describes a way of exchanging information via some forms of transmission media?",
        options: [
            "A. Transmission",
            "B. Communication",
            "C. Transmission Medium",
            "D. Data Communication"
        ],
        answer: 3, // D
        explanation: "Data Communication specifically refers to the exchange of data between two devices via some form of transmission medium (cables, wireless, etc.). It encompasses both the transmission process and the protocols governing the exchange.",
        course: "Data Communication & Networking",
        year: 2017,
        month: "June"
    },
    {
        id: 8,
        question: "Which strategy does the Greedy method employ to find an optimal solution?",
        options: [
            "A. Making locally optimal choices at each step.",
            "B. Breaking down the problem into smaller sub-problems.",
            "C. Solving sub-problems only once and storing the results.",
            "D. Exploring all possible solutions."
        ],
        answer: 0, // A
        explanation: "Greedy algorithms work by making the best possible choice at each step (locally optimal) with the hope that these choices will lead to a globally optimal solution. Option B describes divide-and-conquer, C describes dynamic programming, and D describes brute force.",
        course: "Design & Analysis of Algorithms",
        year: 2017,
        month: "June"
    },
    {
        id: 9,
        question: "Which one of the following condition describes a transaction failure of a database?",
        options: [
            "A. Failure because of incorrect input, deadlock, incorrect synchronization",
            "B. Failure because of addressing error, application error",
            "C. Failure because of operating system or fault, RAM failure, etc.",
            "D. Failure because of disk head crash, power disruption"
        ],
        answer: 0, // A
        explanation: "Transaction failures occur when a specific transaction cannot complete due to logical errors (incorrect input, data not found) or system errors (deadlock, incorrect synchronization). Options C and D describe system crashes or media failures, which are different types of failures.",
        course: "Database Systems",
        year: 2017,
        month: "June"
    },
    {
        id: 10,
        question: "An AI Agent that works by evaluating several goals or paths of a problem in order to take actions that solve the problem optimally.",
        options: [
            "A. Utility based agent",
            "B. Learning agent",
            "C. Model based agent",
            "D. Goal based agent"
        ],
        answer: 0, // A
        explanation: "A Utility-based agent evaluates different states using a utility function to determine the most desirable outcome, allowing it to make optimal decisions. Goal-based agents simply distinguish between goal and non-goal states without measuring desirability.",
        course: "Artificial Intelligence",
        year: 2017,
        month: "June"
    },
    {
        id: 11,
        question: "Which one of the following program handles the data processing, business logic and server communication?",
        options: [
            "A. JavaScript program",
            "B. Client-side program",
            "C. Front-end development",
            "D. Server-side program"
        ],
        answer: 3, // D
        explanation: "Server-side programs (back-end) handle data processing, business logic, database interactions, and server communication. Client-side programs (front-end) handle user interface and user interactions in the browser.",
        course: "Web Programming",
        year: 2017,
        month: "June"
    }
];

console.log(`✅ Loaded ${window.exitExam2017June.length} questions from June 2017 Exit Exam`);