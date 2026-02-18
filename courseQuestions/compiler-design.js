// ===============================
// COMPILER DESIGN
// ===============================
window.compilerDesignQuestions = [
    {
        "question": "Which phase of the compiler is responsible for recognizing tokens and building a symbol table?",
        "options": [
            "Lexical Analysis",
            "Syntax Analysis",
            "Semantic Analysis",
            "Code Generation"
        ],
        "answer": 0,
        "explanation": "Lexical Analysis is the phase of the compiler that scans the input source code, recognizes tokens (lexical units), and builds a symbol table.",
        "course": "Compiler Design"
    },
    {
        "question": "What is the primary output of the lexical analysis phase?",
        "options": [
            "Abstract Syntax Tree (AST)",
            "Symbol Table",
            "Intermediate Code",
            "Assembly Code"
        ],
        "answer": 1,
        "explanation": "The primary output of the lexical analysis phase is the symbol table, which contains information about the identifiers, constants, and other symbols encountered in the source code.",
        "course": "Compiler Design"
    },
    {
        "question": "Which phase of the compiler is responsible for checking the correctness of the program's structure?",
        "options": [
            "Lexical Analysis",
            "Syntax Analysis",
            "Semantic Analysis",
            "Code Generation"
        ],
        "answer": 1,
        "explanation": "Syntax Analysis (also known as Parsing) is the phase of the compiler that checks the syntax of the source code based on the grammar rules of the programming language.",
        "course": "Compiler Design"
    },
    {
        "question": "Which component of the compiler generates an Abstract Syntax Tree (AST)?",
        "options": [
            "Lexical Analyzer",
            "Parser",
            "Semantic Analyzer",
            "Code Generator"
        ],
        "answer": 1,
        "explanation": "The Parser component of the compiler is responsible for generating an Abstract Syntax Tree (AST) by analyzing the syntactic structure of the program.",
        "course": "Compiler Design"
    },
    {
        "question": "What does the semantic analysis phase of the compiler focus on?",
        "options": [
            "Identifying syntax errors",
            "Analyzing the meaning of program statements",
            "Generating intermediate code",
            "Translating source code to machine code"
        ],
        "answer": 1,
        "explanation": "The semantic analysis phase of the compiler focuses on analyzing the meaning and semantics of program statements, such as type checking, scope resolution, and semantic correctness.",
        "course": "Compiler Design"
    },
    {
        "question": "Which phase of the compiler performs type checking and enforces semantic rules?",
        "options": [
            "Lexical Analysis",
            "Syntax Analysis",
            "Semantic Analysis",
            "Code Generation"
        ],
        "answer": 2,
        "explanation": "The semantic analysis phase of the compiler performs type checking, enforces semantic rules, and ensures the correctness of the program's semantics.",
        "course": "Compiler Design"
    },
    {
        "question": "Which phase of the compiler translates the intermediate representation into the target machine code?",
        "options": [
            "Lexical Analysis",
            "Syntax Analysis",
            "Semantic Analysis",
            "Code Generation"
        ],
        "answer": 3,
        "explanation": "The code generation phase of the compiler translates the intermediate representation (such as an AST or intermediate code) into the target machine code or executable form.",
        "course": "Compiler Design"
    },
    {
        "question": "What is the primary goal of the code optimization phase in compiler design?",
        "options": [
            "To reduce the size of the source code",
            "To eliminate syntax errors",
            "To improve the performance of the generated code",
            "To generate human-readable code"
        ],
        "answer": 2,
        "explanation": "The primary goal of the code optimization phase in compiler design is to improve the performance of the generated code by applying various optimization techniques.",
        "course": "Compiler Design"
    },
    {
        "question": "Which technique is used to handle the ambiguity in the context-free grammar?",
        "options": [
            "Parsing",
            "Lexical analysis",
            "Semantic analysis",
            "Leftmost derivation"
        ],
        "answer": 0,
        "explanation": "Parsing is the technique used to handle the ambiguity in the context-free grammar by selecting the correct parse tree or derivation for a given input.",
        "course": "Compiler Design"
    },
    {
        "question": "What is the purpose of semantic rules in a programming language?",
        "options": [
            "To define the syntax of the language",
            "To specify the order of execution of statements",
            "To enforce the correct use of language constructs",
            "To optimize the generated code"
        ],
        "answer": 2,
        "explanation": "Semantic rules in a programming language define the constraints and rules for the correct use of language constructs and ensure the semantic correctness of the program.",
        "course": "Compiler Design"
    },
    {
        "question": "Which of the following is responsible for recognizing keywords and identifiers in a programming language?",
        "options": [
            "Lexical Analyzer",
            "Parser",
            "Semantic Analyzer",
            "Code Generator"
        ],
        "answer": 0,
        "explanation": "The lexical analyzer is responsible for recognizing keywords and identifiers by scanning the input source code and generating tokens.",
        "course": "Compiler Design"
    },
    {
        "question": "What is the primary output of the lexical analysis phase?",
        "options": [
            "Abstract Syntax Tree (AST)",
            "Symbol Table",
            "Intermediate Code",
            "Assembly Code"
        ],
        "answer": 1,
        "explanation": "The primary output of the lexical analysis phase is the symbol table, which stores information about identifiers, constants, and other symbols encountered in the source code.",
        "course": "Compiler Design"
    },
    {
        "question": "Which phase of the compiler is responsible for checking the syntax of the program?",
        "options": [
            "Lexical Analysis",
            "Syntax Analysis",
            "Semantic Analysis",
            "Code Generation"
        ],
        "answer": 1,
        "explanation": "The syntax analysis phase, also known as parsing, checks whether the program adheres to the grammar rules of the programming language.",
        "course": "Compiler Design"
    },
    {
        "question": "Which component of the compiler constructs an Abstract Syntax Tree (AST)?",
        "options": [
            "Lexical Analyzer",
            "Parser",
            "Semantic Analyzer",
            "Code Generator"
        ],
        "answer": 1,
        "explanation": "The parser component of the compiler constructs an Abstract Syntax Tree (AST) by analyzing the syntactic structure of the program.",
        "course": "Compiler Design"
    },
    {
        "question": "What is the main goal of the semantic analysis phase in compiler design?",
        "options": [
            "To check the syntax of the program",
            "To generate intermediate code",
            "To perform type checking and enforce semantic rules",
            "To translate the source code to machine code"
        ],
        "answer": 2,
        "explanation": "The semantic analysis phase checks the program for semantic correctness, including type checking, scope resolution, and enforcing semantic rules.",
        "course": "Compiler Design"
    },
    {
        "question": "Which phase of the compiler translates the intermediate representation into the target machine code?",
        "options": [
            "Lexical Analysis",
            "Syntax Analysis",
            "Semantic Analysis",
            "Code Generation"
        ],
        "answer": 3,
        "explanation": "The code generation phase translates the intermediate representation (such as an AST or intermediate code) into the target machine code or executable form.",
        "course": "Compiler Design"
    },
    {
        "question": "What is the purpose of an Abstract Syntax Tree (AST)?",
        "options": [
            "To store the program's symbol table",
            "To generate assembly code",
            "To visualize the program's control flow",
            "To represent the hierarchical structure of the program"
        ],
        "answer": 3,
        "explanation": "An Abstract Syntax Tree (AST) represents the hierarchical structure of the program, capturing the relationships between different language constructs.",
        "course": "Compiler Design"
    },
    {
        "question": "What does the symbol table in a compiler store?",
        "options": [
            "Intermediate code",
            "Machine code",
            "Source code",
            "Information about identifiers and their attributes"
        ],
        "answer": 3,
        "explanation": "The symbol table in a compiler stores information about identifiers, such as their names, data types, scope, and other attributes.",
        "course": "Compiler Design"
    },
    {
        "question": "Which phase of the compiler performs type checking?",
        "options": [
            "Lexical Analysis",
            "Syntax Analysis",
            "Semantic Analysis",
            "Code Generation"
        ],
        "answer": 2,
        "explanation": "The semantic analysis phase of the compiler performs type checking to ensure that the program's operations are valid with respect to data types.",
        "course": "Compiler Design"
    },
    {
        "question": "What is the purpose of intermediate code in compiler design?",
        "options": [
            "To optimize the program's execution",
            "To generate assembly code",
            "To represent the program's semantics in a platform-independent form",
            "To visualize the program's control flow"
        ],
        "answer": 2,
        "explanation": "Intermediate code is an intermediate representation of the program's semantics that is platform-independent, allowing for further optimization and translation to the target machine code.",
        "course": "Compiler Design"
    },
    {
        "question": "Which of the following is used to generate a lexical analyzer for a programming language?",
        "options": [
            "Finite Automaton",
            "Context-Free Grammar",
            "Pushdown Automaton",
            "Turing Machine"
        ],
        "answer": 0,
        "explanation": "A finite automaton is commonly used to generate a lexical analyzer (also known as a lexer) for a programming language. It recognizes and tokenizes the input source code based on a set of regular expressions.",
        "course": "Compiler Design"
    },
    {
        "question": "What is the purpose of a lexical analyzer in a compiler?",
        "options": [
            "To check the syntax of the program",
            "To generate intermediate code",
            "To perform type checking",
            "To recognize and tokenize the input source code"
        ],
        "answer": 3,
        "explanation": "The lexical analyzer is responsible for recognizing and tokenizing the input source code based on the lexical rules of the programming language. It generates tokens that are further used in the syntax analysis phase.",
        "course": "Compiler Design"
    },
    {
        "question": "Which of the following is used to specify the lexical structure of a programming language?",
        "options": [
            "Regular Expressions",
            "Context-Free Grammars",
            "Backus-Naur Form (BNF)",
            "Abstract Syntax Trees (AST)"
        ],
        "answer": 0,
        "explanation": "Regular expressions are commonly used to specify the lexical structure of a programming language. They define patterns that match and recognize different tokens in the input source code.",
        "course": "Compiler Design"
    },
    {
        "question": "Which technique is used to handle nested parentheses in syntax analysis?",
        "options": [
            "LL Parsing",
            "LR Parsing",
            "Recursive Descent Parsing",
            "Operator Precedence Parsing"
        ],
        "answer": 1,
        "explanation": "LR parsing, specifically LR(1) or LR(0), is commonly used to handle nested parentheses and other complex grammatical structures in syntax analysis. It can handle left-recursive and right-recursive grammar rules efficiently.",
        "course": "Compiler Design"
    },
    {
        "question": "Which parsing technique builds the parse tree from the bottom-up?",
        "options": [
            "LL Parsing",
            "LR Parsing",
            "Recursive Descent Parsing",
            "Top-Down Parsing"
        ],
        "answer": 1,
        "explanation": "LR parsing builds the parse tree from the bottom-up by applying reduction rules to the input tokens. It starts from the leaves and moves towards the root of the parse tree.",
        "course": "Compiler Design"
    },
    {
        "question": "Which technique is used to resolve shift-reduce conflicts in parsing?",
        "options": [
            "Precedence Parsing",
            "Operator Precedence Parsing",
            "LR Parsing",
            "LL Parsing"
        ],
        "answer": 0,
        "explanation": "Precedence parsing is used to resolve shift-reduce conflicts in parsing, especially in operator-precedence parsing. It uses the precedence and associativity of operators to determine the correct action during parsing.",
        "course": "Compiler Design"
    },
    {
        "question": "Which parsing technique uses a parsing table to determine the next action?",
        "options": [
            "LL Parsing",
            "LR Parsing",
            "Recursive Descent Parsing",
            "Top-Down Parsing"
        ],
        "answer": 1,
        "explanation": "LR parsing uses a parsing table, often constructed using LR(1) or LR(0) items, to determine the next action (shift or reduce) based on the current state and input token.",
        "course": "Compiler Design"
    },
    {
        "question": "Which parsing technique is more suitable for handling left-recursive grammar rules?",
        "options": [
            "LL Parsing",
            "LR Parsing",
            "Recursive Descent Parsing",
            "Top-Down Parsing"
        ],
        "answer": 0,
        "explanation": "LL parsing, or left-to-right, leftmost derivation parsing, is more suitable for handling left-recursive grammar rules. It uses a top-down approach and can handle left-factored grammars efficiently.",
        "course": "Compiler Design"
    },
    {
        "question": "Which of the following is not a top-down parsing algorithm?",
        "options": [
            "Recursive Descent Parsing",
            "LL Parsing",
            "Predictive Parsing",
            "LR Parsing"
        ],
        "answer": 3,
        "explanation": "LR parsing is a bottom-up parsing technique, whereas the rest of the options (a, b, and c) are top-down parsing algorithms.",
        "course": "Compiler Design"
    },
    {
        "question": "Which parsing technique is more suitable for handling ambiguous grammars?",
        "options": [
            "LL Parsing",
            "LR Parsing",
            "Recursive Descent Parsing",
            "Top-Down Parsing"
        ],
        "answer": 1,
        "explanation": "LR parsing is more suitable for handling ambiguous grammars as it can backtrack and explore multiple paths during parsing, allowing it to resolve ambiguities effectively.",
        "course": "Compiler Design"
    },
    {
        "question": "What is the main goal of a compiler?",
        "options": [
            "Execution of programs",
            "Translation of programs",
            "Optimization of programs",
            "Debugging of programs"
        ],
        "answer": 1,
        "explanation": "The main goal of a compiler is to translate the source code of a programming language into an equivalent target code (e.g., machine code) that can be executed by a computer.",
        "course": "Compiler Design"
    },
    {
        "question": "Which phase of the compiler analyzes the source code to identify the basic syntactic structures?",
        "options": [
            "Lexical Analysis",
            "Syntax Analysis",
            "Semantic Analysis",
            "Code Generation"
        ],
        "answer": 1,
        "explanation": "The syntax analysis phase, also known as parsing, analyzes the source code to identify the basic syntactic structures and check if they conform to the grammar of the programming language.",
        "course": "Compiler Design"
    },
    {
        "question": "Which phase of the compiler assigns meaning to the syntactic structures and performs type checking?",
        "options": [
            "Lexical Analysis",
            "Syntax Analysis",
            "Semantic Analysis",
            "Code Generation"
        ],
        "answer": 2,
        "explanation": "The semantic analysis phase assigns meaning to the syntactic structures identified during syntax analysis and performs tasks such as type checking, symbol table construction, and intermediate code generation.",
        "course": "Compiler Design"
    },
    {
        "question": "Which of the following represents the correct order of compiler phases?",
        "options": [
            "Code Generation, Semantic Analysis, Lexical Analysis, Syntax Analysis",
            "Lexical Analysis, Syntax Analysis, Semantic Analysis, Code Generation",
            "Syntax Analysis, Lexical Analysis, Semantic Analysis, Code Generation",
            "Semantic Analysis, Syntax Analysis, Lexical Analysis, Code Generation"
        ],
        "answer": 1,
        "explanation": "The correct order of compiler phases is Lexical Analysis, Syntax Analysis, Semantic Analysis, and Code Generation. The phases are performed sequentially.",
        "course": "Compiler Design"
    },
    {
        "question": "Which data structure is commonly used in symbol tables during the compilation process?",
        "options": [
            "Stack",
            "Queue",
            "Hash Table",
            "Linked List"
        ],
        "answer": 2,
        "explanation": "Hash tables are commonly used data structures in symbol tables during the compilation process. They provide efficient lookup and retrieval of symbols based on their names.",
        "course": "Compiler Design"
    },
    {
        "question": "Which phase of the compiler performs optimization techniques to improve the efficiency of the generated code?",
        "options": [
            "Lexical Analysis",
            "Syntax Analysis",
            "Semantic Analysis",
            "Code Optimization"
        ],
        "answer": 3,
        "explanation": "The code optimization phase applies various techniques to improve the efficiency of the generated code, such as eliminating redundant instructions, loop optimizations, and register allocation.",
        "course": "Compiler Design"
    },
    {
        "question": "Which of the following is not a typical optimization performed by a compiler?",
        "options": [
            "Constant Folding",
            "Loop Unrolling",
            "Dead Code Elimination",
            "Syntax Analysis"
        ],
        "answer": 3,
        "explanation": "Syntax analysis is not an optimization technique performed by a compiler. It is a phase of the compiler that focuses on analyzing the syntax of the source code.",
        "course": "Compiler Design"
    },
    {
        "question": "Which phase of the compiler generates the target code?",
        "options": [
            "Lexical Analysis",
            "Syntax Analysis",
            "Semantic Analysis",
            "Code Generation"
        ],
        "answer": 3,
        "explanation": "The code generation phase generates the target code, which can be machine code, intermediate code, or another representation suitable for execution on the target platform.",
        "course": "Compiler Design"
    },
    {
        "question": "Which of the following is an advantage of using an intermediate representation during the compilation process?",
        "options": [
            "Faster compilation speed",
            "Improved error detection",
            "Portability across different platforms",
            "Reduced memory usage"
        ],
        "answer": 2,
        "explanation": "Using an intermediate representation during the compilation process provides portability across different platforms, as the same intermediate code can be further processed or translated into the target code for various platforms.",
        "course": "Compiler Design"
    },
    {
        "question": "Which phase of the compiler is responsible for error handling and reporting?",
        "options": [
            "Lexical Analysis",
            "Syntax Analysis",
            "Semantic Analysis",
            "Error Handling"
        ],
        "answer": 1,
        "explanation": "The syntax analysis phase is responsible for error handling and reporting. It detects syntax errors in the source code and generates appropriate error messages to assist the programmer in identifying and fixing the issues.",
        "course": "Compiler Design"
    },
    {
        "question": "Which of the following is true about syntax-directed translation?",
        "options": [
            "It only involves the lexical analysis phase.",
            "It involves the generation of intermediate code from the parse tree.",
            "It is concerned with the optimization of the generated code.",
            "It is performed during the code generation phase."
        ],
        "answer": 1,
        "explanation": "Syntax-directed translation involves associating actions with the grammar productions to generate intermediate code or perform other tasks during the parsing process.",
        "course": "Compiler Design"
    },
    {
        "question": "What is the purpose of semantic rules in syntax-directed translation?",
        "options": [
            "To define the syntactic structure of the language.",
            "To assign types to the variables used in the program.",
            "To perform optimization techniques on the intermediate code.",
            "To define the order of evaluation of expressions."
        ],
        "answer": 1,
        "explanation": "Semantic rules in syntax-directed translation are used to assign types to variables, perform type checking, and enforce type compatibility rules in the programming language.",
        "course": "Compiler Design"
    }
];