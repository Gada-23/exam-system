// ===============================
// FOCUS AREA: COMPILER DESIGN - CHAPTER 1
// Introduction to Compiler Design
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaCompilerChapter1 = {
    title: "Chapter 1: Introduction to Compiler Design",
    
    // Blueprint alignment: 1 question (Understand)
    blueprint: {
        totalQuestions: 1,
        cognitiveLevels: {
            understand: 1
        },
        topics: [
            "Basic principles of compiler design",
            "Compiler architecture and phases",
            "Analysis vs Synthesis",
            "Compiler construction tools"
        ]
    },

    learningObjectives: [
        "Understand the basic principles of compiler design",
        "Identify the different phases of a compiler",
        "Explain the distinction between analysis and synthesis",
        "Describe the role of compiler construction tools",
        "Understand the overall compilation process"
    ],

    sections: [
        {
            title: "1.1 What is a Compiler?",
            content: `
                <h4>Definition of a Compiler</h4>
                <p>A compiler is a program that translates source code written in a high-level programming language (like C, Java, Python) into equivalent target code (usually machine code or assembly language) that can be executed by a computer.</p>
                
                <p><strong>Simple Definition:</strong> A compiler is like a translator that converts human-readable code into machine-readable instructions.</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">Source Code → [COMPILER] → Target Code</p>
                </div>
                
                <h4>Why Do We Need Compilers?</h4>
                <ul>
                    <li><strong>Human readability:</strong> Humans write in high-level languages, computers understand machine code</li>
                    <li><strong>Portability:</strong> Same source code can be compiled for different machines</li>
                    <li><strong>Error detection:</strong> Compilers catch syntax and semantic errors before execution</li>
                    <li><strong>Optimization:</strong> Compilers can optimize code for better performance</li>
                </ul>
                
                <h4>Compiler vs Interpreter</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Aspect</th>
                        <th style="padding:10px; border:1px solid #ddd;">Compiler</th>
                        <th style="padding:10px; border:1px solid #ddd;">Interpreter</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Translation</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Translates entire program at once</td>
                        <td style="padding:8px; border:1px solid #ddd;">Translates line by line</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Output</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Produces executable file</td>
                        <td style="padding:8px; border:1px solid #ddd;">No separate output, executes directly</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Speed</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Faster execution (already compiled)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Slower execution (translates each time)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Error detection</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Shows all errors after compilation</td>
                        <td style="padding:8px; border:1px solid #ddd;">Stops at first error</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Examples</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">C, C++, Java (compiled), Go</td>
                        <td style="padding:8px; border:1px solid #ddd;">Python, JavaScript, Ruby, PHP</td>
                    </tr>
                </table>
                
                <h4>Compiler vs Assembler</h4>
                <ul>
                    <li><strong>Assembler:</strong> Translates assembly language (low-level) to machine code</li>
                    <li><strong>Compiler:</strong> Translates high-level language to assembly or machine code</li>
                </ul>
            `,
            keyPoints: [
                "Compiler = translator from high-level to machine code",
                "Compilers catch errors and optimize code",
                "Compilers translate entire program at once (vs interpreters line-by-line)",
                "Compiler output is executable; interpreter executes directly",
                "Examples: C, C++, Java use compilers; Python, JS use interpreters"
            ]
        },

        {
            title: "1.2 Phases of a Compiler",
            content: `
                <h4>The Compilation Process</h4>
                <p>A compiler operates in multiple phases, each transforming the source code from one representation to another. The phases are typically grouped into two parts: <strong>Analysis</strong> and <strong>Synthesis</strong>.</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">COMPILER PHASES</p>
                    <pre style="text-align:center;">
Source Code
    ↓
1. Lexical Analysis (Scanner)
    ↓
2. Syntax Analysis (Parser)
    ↓
3. Semantic Analysis
    ↓
4. Intermediate Code Generation
    ↓
5. Code Optimization
    ↓
6. Code Generation
    ↓
Target Code
                    </pre>
                </div>
                
                <h4>Phase 1: Lexical Analysis (Scanning)</h4>
                <ul>
                    <li><strong>Input:</strong> Source code as a stream of characters</li>
                    <li><strong>Output:</strong> Stream of tokens (lexical units)</li>
                    <li><strong>Function:</strong> Reads characters and groups them into meaningful sequences called lexemes, producing tokens</li>
                    <li><strong>Also removes:</strong> Comments, whitespace, newlines</li>
                </ul>
                
                <p><strong>Example:</strong> For code <code>position = initial + rate * 60</code></p>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Lexeme</th>
                        <th style="padding:10px; border:1px solid #ddd;">Token</th>
                    </tr>
                    <tr><td>position</td><td>identifier</td></tr>
                    <tr><td>=</td><td>assignment operator</td></tr>
                    <tr><td>initial</td><td>identifier</td></tr>
                    <tr><td>+</td><td>addition operator</td></tr>
                    <tr><td>rate</td><td>identifier</td></tr>
                    <tr><td>*</td><td>multiplication operator</td></tr>
                    <tr><td>60</td><td>number</td></tr>
                </table>
                
                <h4>Phase 2: Syntax Analysis (Parsing)</h4>
                <ul>
                    <li><strong>Input:</strong> Stream of tokens from lexical analyzer</li>
                    <li><strong>Output:</strong> Parse tree (or syntax tree)</li>
                    <li><strong>Function:</strong> Groups tokens into grammatical phrases based on the language's grammar</li>
                    <li><strong>Checks:</strong> Whether the token sequence follows the syntax rules of the language</li>
                </ul>
                
                <p><strong>Example parse tree for <code>a = b + c</code>:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
        =
      /   \\
     a     +
          / \\
         b   c
                </pre>
                
                <h4>Phase 3: Semantic Analysis</h4>
                <ul>
                    <li><strong>Input:</strong> Parse tree (or syntax tree)</li>
                    <li><strong>Output:</strong> Annotated parse tree (with type information)</li>
                    <li><strong>Function:</strong> Checks for semantic consistency (type checking, variable declaration, etc.)</li>
                    <li><strong>Typical checks:</strong> Type compatibility, array bounds, uninitialized variables</li>
                </ul>
                
                <p><strong>Example:</strong> <code>int x = "hello";</code> would be caught here (type mismatch)</p>
                
                <h4>Phase 4: Intermediate Code Generation</h4>
                <ul>
                    <li><strong>Input:</strong> Annotated parse tree</li>
                    <li><strong>Output:</strong> Intermediate representation (IR) - often three-address code</li>
                    <li><strong>Function:</strong> Translates the source program into an intermediate language that is machine-independent</li>
                </ul>
                
                <p><strong>Three-address code example for <code>a = b + c * d</code>:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
t1 = c * d
t2 = b + t1
a = t2
                </pre>
                
                <h4>Phase 5: Code Optimization</h4>
                <ul>
                    <li><strong>Input:</strong> Intermediate code</li>
                    <li><strong>Output:</strong> Optimized intermediate code</li>
                    <li><strong>Function:</strong> Improves the intermediate code to make it faster, smaller, or more efficient</li>
                    <li><strong>Types:</strong> Local optimization, global optimization, loop optimization</li>
                </ul>
                
                <p><strong>Example:</strong> <code>a = 1 + 2</code> optimized to <code>a = 3</code> (constant folding)</p>
                
                <h4>Phase 6: Code Generation</h4>
                <ul>
                    <li><strong>Input:</strong> Optimized intermediate code</li>
                    <li><strong>Output:</strong> Target machine code (assembly or relocatable machine code)</li>
                    <li><strong>Function:</strong> Maps IR to target instructions, registers, and memory locations</li>
                </ul>
                
                <p><strong>Also includes:</strong> Register allocation, instruction selection, addressing modes</p>
                
                <h4>Symbol Table Management</h4>
                <ul>
                    <li>Data structure used throughout compilation</li>
                    <li>Stores information about identifiers: names, types, scope, memory locations</li>
                    <li>Used by all phases (lexical, syntax, semantic, code generation)</li>
                </ul>
                
                <h4>Error Handling</h4>
                <ul>
                    <li>Each phase can encounter errors</li>
                    <li>Good compilers report errors clearly and continue to find more errors</li>
                    <li>Types: lexical errors (invalid characters), syntax errors (grammar violations), semantic errors (type mismatches)</li>
                </ul>
            `,
            keyPoints: [
                "Compiler has 6 main phases: Lexical, Syntax, Semantic, IR Generation, Optimization, Code Generation",
                "Analysis part = Lexical + Syntax + Semantic",
                "Synthesis part = IR Generation + Optimization + Code Generation",
                "Symbol table stores information about identifiers",
                "Error handling occurs in all phases"
            ]
        },

        {
            title: "1.3 Analysis vs Synthesis",
            content: `
                <h4>The Two Main Parts of a Compiler</h4>
                <p>A compiler is traditionally divided into two main parts: the <strong>analysis</strong> (front end) and the <strong>synthesis</strong> (back end).</p>
                
                <h4>Analysis (Front End)</h4>
                <ul>
                    <li><strong>Phases:</strong> Lexical Analysis, Syntax Analysis, Semantic Analysis</li>
                    <li><strong>Input:</strong> Source code</li>
                    <li><strong>Output:</strong> Intermediate representation (IR) + Symbol table</li>
                    <li><strong>Tasks:</strong> Breaking source into parts, checking syntax, checking semantics, building symbol table</li>
                    <li><strong>Machine independent:</strong> Can be reused for different target machines</li>
                </ul>
                
                <h4>Synthesis (Back End)</h4>
                <ul>
                    <li><strong>Phases:</strong> Intermediate Code Generation, Code Optimization, Code Generation</li>
                    <li><strong>Input:</strong> Intermediate representation (IR) + Symbol table</li>
                    <li><strong>Output:</strong> Target machine code</li>
                    <li><strong>Tasks:</strong> Generating IR, optimizing, generating target code, register allocation</li>
                    <li><strong>Machine dependent:</strong> Depends on target architecture</li>
                </ul>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Aspect</th>
                        <th style="padding:10px; border:1px solid #ddd;">Analysis (Front End)</th>
                        <th style="padding:10px; border:1px solid #ddd;">Synthesis (Back End)</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Phases</td>
                        <td style="padding:8px; border:1px solid #ddd;">Lexical, Syntax, Semantic</td>
                        <td style="padding:8px; border:1px solid #ddd;">IR Gen, Optimization, Code Gen</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Input</td>
                        <td style="padding:8px; border:1px solid #ddd;">Source code</td>
                        <td style="padding:8px; border:1px solid #ddd;">IR + Symbol table</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Output</td>
                        <td style="padding:8px; border:1px solid #ddd;">IR + Symbol table</td>
                        <td style="padding:8px; border:1px solid #ddd;">Target code</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Machine dependency</td>
                        <td style="padding:8px; border:1px solid #ddd;">Machine independent</td>
                        <td style="padding:8px; border:1px solid #ddd;">Machine dependent</td>
                    </tr>
                </table>
                
                <div class="key-points-box" style="background:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🔑 Important:</strong> The separation of analysis and synthesis allows a compiler to be retargeted - the same front end can be combined with different back ends for different machines.</p>
                </div>
            `,
            keyPoints: [
                "Analysis = front end (lexical + syntax + semantic)",
                "Synthesis = back end (IR gen + optimization + code gen)",
                "Analysis is machine independent",
                "Synthesis is machine dependent",
                "Separation enables retargetability"
            ]
        },

        {
            title: "1.4 Compiler Construction Tools",
            content: `
                <h4>Tools for Building Compilers</h4>
                <p>Compiler writers use specialized tools to automate parts of compiler construction, especially for lexical analysis and parsing.</p>
                
                <h4>1. Scanner Generators (Lex/Flex)</h4>
                <ul>
                    <li><strong>Input:</strong> Regular expressions describing tokens</li>
                    <li><strong>Output:</strong> A lexical analyzer (scanner) - a program that recognizes tokens</li>
                    <li><strong>Function:</strong> Produces a lexical analyzer if given a regular expression</li>
                    <li><strong>Example:</strong> Lex (Unix), Flex (GNU version)</li>
                </ul>
                
                <p><strong>How it works:</strong> You provide token patterns using regular expressions, and the tool generates a DFA (Deterministic Finite Automaton) that recognizes those tokens efficiently.</p>
                
                <div class="key-points-box" style="background:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🔑 Important:</strong> A scanner generator produces a <strong>lexical analyzer</strong> if given a <strong>regular expression</strong>.</p>
                </div>
                
                <h4>2. Parser Generators (Yacc/Bison)</h4>
                <ul>
                    <li><strong>Input:</strong> Grammar rules (usually context-free grammar) for the language</li>
                    <li><strong>Output:</strong> A parser (syntax analyzer)</li>
                    <li><strong>Function:</strong> Generates a parser that checks if token sequences follow the grammar</li>
                    <li><strong>Example:</strong> Yacc (Yet Another Compiler-Compiler), Bison (GNU version)</li>
                </ul>
                
                <p><strong>How it works:</strong> You provide grammar rules (like S → A B), and the tool generates a parser (usually LR parser) that builds parse trees.</p>
                
                <h4>3. Other Compiler Tools</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Tool Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Parser Generators</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Generate parsers from grammar specifications</td>
                        <td style="padding:8px; border:1px solid #ddd;">Yacc, Bison, ANTLR</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Scanner Generators</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Generate lexical analyzers from regular expressions</td>
                        <td style="padding:8px; border:1px solid #ddd;">Lex, Flex</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Syntax-Directed Translation Tools</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Generate intermediate code from syntax-directed definitions</td>
                        <td style="padding:8px; border:1px solid #ddd;">Yacc (with actions)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Automatic Code Generators</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Generate target code from intermediate representations</td>
                        <td style="padding:8px; border:1px solid #ddd;">-</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Data-Flow Analysis Engines</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Used in optimization phases</td>
                        <td style="padding:8px; border:1px solid #ddd;">-</td>
                    </tr>
                </table>
                
                <h4>Typical Compiler Construction Workflow</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
1. Write regular expressions for tokens → Use Lex → Get lexical analyzer
2. Write grammar rules (with actions) → Use Yacc → Get parser
3. Combine lexical analyzer and parser → Complete front end
4. Add semantic actions, symbol table, code generation
                </pre>
                
                <h4>Advantages of Using Tools</h4>
                <ul>
                    <li>Faster development time</li>
                    <li>Fewer errors (tools are well-tested)</li>
                    <li>Easier to modify language specifications</li>
                    <li>Focus on language design, not low-level implementation</li>
                </ul>
            `,
            keyPoints: [
                "Lex/Flex: scanner generators (lexical analyzer from regular expressions)",
                "Yacc/Bison: parser generators (parser from grammar)",
                "Tools automate compiler construction",
                "Scanner generator = lexical analyzer if given regular expression",
                "Parser generator = parser if given grammar"
            ]
        },

        {
            title: "1.5 The Compilation Process Overview",
            content: `
                <h4>Putting It All Together</h4>
                <p>A compiler transforms source code through multiple representations until it becomes executable machine code.</p>
                
                <h4>Data Flow Through a Compiler</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Source Code (character stream)
    ↓ [Lexical Analysis]
Token Stream
    ↓ [Syntax Analysis]
Parse Tree / Syntax Tree
    ↓ [Semantic Analysis]
Annotated Parse Tree
    ↓ [Intermediate Code Generation]
Intermediate Code (3-address code, etc.)
    ↓ [Code Optimization]
Optimized Intermediate Code
    ↓ [Code Generation]
Target Machine Code
    ↓ [Optional: Assembly, Linking, Loading]
Executable Code
                </pre>
                
                <h4>Example: Compiling a Simple Expression</h4>
                <p><strong>Source:</strong> <code>total = price + tax * 1.05</code></p>
                
                <p><strong>Step 1: Lexical Analysis</strong> - Produces tokens:</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Identifier(total)
Assignment(=)
Identifier(price)
Operator(+)
Identifier(tax)
Operator(*)
Number(1.05)
                </pre>
                
                <p><strong>Step 2: Syntax Analysis</strong> - Builds parse tree:</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
        =
      /   \\
   total    +
          /   \\
      price    *
             /   \\
           tax   1.05
                </pre>
                
                <p><strong>Step 3: Semantic Analysis</strong> - Checks types (all numeric, OK)</p>
                
                <p><strong>Step 4: Intermediate Code</strong> - Three-address code:</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
t1 = tax * 1.05
t2 = price + t1
total = t2
                </pre>
                
                <p><strong>Step 5: Optimization</strong> - Constant folding (1.05 is constant, but tax is variable, so no change here)</p>
                
                <p><strong>Step 6: Code Generation</strong> - Assembly code (simplified):</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
LOAD  R1, tax
MUL   R1, #1.05
LOAD  R2, price
ADD   R2, R1
STORE total, R2
                </pre>
            `,
            keyPoints: [
                "Compilation transforms source through multiple representations",
                "Each phase produces input for the next phase",
                "Symbol table is used throughout",
                "Final output is executable machine code"
            ]
        }
    ],

    summary: `
        <h3>Chapter 1 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Compiler:</strong> Program that translates high-level language to machine code</li>
            <li><strong>6 Phases:</strong> Lexical, Syntax, Semantic, IR Generation, Optimization, Code Generation</li>
            <li><strong>Analysis (Front End):</strong> Lexical + Syntax + Semantic - machine independent</li>
            <li><strong>Synthesis (Back End):</strong> IR Gen + Optimization + Code Gen - machine dependent</li>
            <li><strong>Symbol Table:</strong> Stores information about identifiers (used by all phases)</li>
            <li><strong>Compiler Tools:</strong> Lex (scanner generator), Yacc (parser generator)</li>
            <li><strong>Scanner Generator:</strong> Produces lexical analyzer from regular expressions</li>
            <li><strong>Parser Generator:</strong> Produces parser from grammar</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What are the six phases of a compiler?",
            answer: "Lexical Analysis, Syntax Analysis, Semantic Analysis, Intermediate Code Generation, Code Optimization, Code Generation"
        },
        {
            question: "What is the difference between analysis and synthesis in a compiler?",
            answer: "Analysis (front end) = lexical + syntax + semantic (machine independent). Synthesis (back end) = IR gen + optimization + code gen (machine dependent)."
        },
        {
            question: "What is the function of a scanner generator?",
            answer: "A scanner generator (like Lex) produces a lexical analyzer if given a set of regular expressions describing tokens."
        },
        {
            question: "Compare compilers and interpreters.",
            answer: "Compilers translate entire program at once, produce executable, faster execution. Interpreters translate line by line, no separate output, slower execution."
        },
        {
            question: "What information is stored in a symbol table?",
            answer: "Symbol table stores information about identifiers: names, types, scope, memory locations, etc."
        },
        {
            question: "What is three-address code? Give an example.",
            answer: "Three-address code is an intermediate representation using at most three operands per instruction. Example: t1 = a + b"
        }
    ],

    quickTips: [
        "Remember the 6 phases in order",
        "Analysis = front end (lexical, syntax, semantic)",
        "Synthesis = back end (IR, optimization, code gen)",
        "Lex generates scanner from regex",
        "Yacc generates parser from grammar",
        "Symbol table is used in ALL phases"
    ],

    commonMistakes: [
        "❌ Confusing compiler and interpreter - compiler produces executable, interpreter executes directly",
        "❌ Forgetting semantic analysis between syntax and IR generation",
        "❌ Thinking optimization is optional - it's a standard phase",
        "❌ Mixing up Lex (scanner) and Yacc (parser)",
        "❌ Believing analysis is machine dependent - it's actually machine independent"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 1:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>1 question</strong> at the <strong>Understand</strong> level.</p>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>Basic principles:</strong> What compilers do, compiler vs interpreter</li>
            <li><strong>Compiler phases:</strong> Names, order, function of each phase</li>
            <li><strong>Analysis vs Synthesis:</strong> Front end vs back end</li>
            <li><strong>Compiler tools:</strong> Lex and Yacc - what they generate</li>
        </ol>
        
        <h4>What "Understand" Means:</h4>
        <p>You need to be able to explain the compilation process, describe each phase, and understand the role of compiler construction tools.</p>
        
        <h4>Practice Questions:</h4>
        <ul>
            <li>Explain the six phases of a compiler and what each phase does.</li>
            <li>What is the difference between the analysis and synthesis parts of a compiler?</li>
            <li>Describe the role of Lex and Yacc in compiler construction.</li>
            <li>How does a compiler differ from an interpreter?</li>
        </ul>
    `
};