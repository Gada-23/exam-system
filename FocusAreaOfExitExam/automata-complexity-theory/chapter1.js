// ===============================
// FOCUS AREA: AUTOMATA AND COMPLEXITY THEORY - CHAPTER 1
// Introduction to Automata Theory and Formal Languages
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaAutomataChapter1 = {
    title: "Chapter 1: Introduction to Automata Theory and Formal Languages",
    
    // Blueprint alignment: 1 question (Understand)
    blueprint: {
        totalQuestions: 1,
        cognitiveLevels: {
            understand: 1
        },
        topics: [
            "Basic concepts of automata theory",
            "Formal languages and grammars",
            "Relationship between languages, grammars, and automata",
            "Chomsky hierarchy"
        ]
    },

    learningObjectives: [
        "Understand the fundamental concepts of automata theory",
        "Explain the relationship between formal languages, grammars, and automata",
        "Identify different types of automata and their capabilities",
        "Understand the Chomsky hierarchy and its classifications",
        "Recognize the connections between language classes and automata types"
    ],

    sections: [
        {
            title: "1.1 What is Automata Theory?",
            content: `
                <h4>Definition of Automata Theory</h4>
                <p>Automata theory is the study of abstract computing devices or "machines" that process inputs and produce outputs. It deals with the mathematical models of computation and helps us understand what computers can and cannot do.</p>
                
                <p><strong>Simple Definition:</strong> Automata theory is like studying different types of "thinking machines" - from simple ones that can only remember one thing, to powerful ones that can solve complex problems.</p>
                
                <h4>Why Study Automata Theory?</h4>
                <ul>
                    <li><strong>Foundation of Computer Science:</strong> It provides the theoretical foundation for all computation</li>
                    <li><strong>Compiler Design:</strong> Automata are used to build compilers that translate programming languages</li>
                    <li><strong>Artificial Intelligence:</strong> Helps understand intelligent behavior and problem-solving</li>
                    <li><strong>Complexity Analysis:</strong> Helps classify problems as easy or hard</li>
                    <li><strong>Language Recognition:</strong> Determines what patterns computers can recognize</li>
                </ul>
                
                <h4>Key Questions in Automata Theory</h4>
                <ul>
                    <li>What can a computer compute?</li>
                    <li>What are the limits of computation?</li>
                    <li>How much memory and time does a computation need?</li>
                    <li>How do we describe patterns and languages mathematically?</li>
                </ul>
                
                <p><strong>Analogy:</strong> Think of automata like different types of vending machines. Some vending machines are simple (press button, get snack). Others are complex (accept different payments, remember inventory, give change). Automata theory studies these different "machine capabilities" mathematically.</p>
            `,
            keyPoints: [
                "Automata theory studies abstract computing machines",
                "It's the foundation for understanding computation",
                "Helps determine what computers can and cannot do",
                "Used in compiler design, AI, and complexity analysis",
                "Different automata have different capabilities (memory, processing)"
            ]
        },

        {
            title: "1.2 What are Formal Languages?",
            content: `
                <h4>Definition of Formal Language</h4>
                <p>A formal language is a set of strings (sequences of symbols) formed according to specific rules. Unlike natural languages (English, Amharic), formal languages have precise mathematical definitions.</p>
                
                <h4>Basic Components</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Component</th>
                        <th style="padding:10px; border:1px solid #ddd;">Definition</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Alphabet (Σ)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">A finite set of symbols</td>
                        <td style="padding:8px; border:1px solid #ddd;">Σ = {0, 1} or Σ = {a, b, c}</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>String</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">A finite sequence of symbols from the alphabet</td>
                        <td style="padding:8px; border:1px solid #ddd;">"0101", "abac", "111"</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Language (L)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">A set of strings over an alphabet</td>
                        <td style="padding:8px; border:1px solid #ddd;">L = {0, 00, 000, ...} (all strings of 0's)</td>
                    </tr>
                </table>
                
                <h4>Basic Terminology</h4>
                <ul>
                    <li><strong>ε (epsilon):</strong> The empty string (string with no symbols)</li>
                    <li><strong>|w|:</strong> Length of string w (e.g., |"hello"| = 5)</li>
                    <li><strong>Σ*:</strong> Set of all strings over alphabet Σ (including empty string)</li>
                    <li><strong>Σ⁺:</strong> Set of all non-empty strings over Σ</li>
                </ul>
                
                <h4>Examples of Formal Languages</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Language Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example Strings</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">All strings of 0's and 1's that start with 0</td>
                        <td style="padding:8px; border:1px solid #ddd;">0, 01, 00, 011, 001</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">All strings with equal number of a's and b's</td>
                        <td style="padding:8px; border:1px solid #ddd;">ab, ba, aabb, abab, bbaa</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">All palindromes over {a,b}</td>
                        <td style="padding:8px; border:1px solid #ddd;">a, b, aa, bb, aba, bab, abba</td>
                    </tr>
                </table>
                
                <p><strong>Note:</strong> Formal languages are the "output" of grammars and the "input" to automata.</p>
            `,
            keyPoints: [
                "Formal language = set of strings over an alphabet",
                "Alphabet (Σ): finite set of symbols",
                "String: sequence of symbols",
                "ε: empty string",
                "Languages can be finite or infinite sets of strings"
            ]
        },

        {
            title: "1.3 What are Grammars?",
            content: `
                <h4>Definition of Grammar</h4>
                <p>A grammar is a set of rules for generating strings in a language. It provides a formal way to describe how valid strings are formed.</p>
                
                <p><strong>Analogy:</strong> Just as English grammar tells us that "The cat sat" is correct but "Cat the sat" is wrong, formal grammars define what strings belong to a language.</p>
                
                <h4>Components of a Grammar (G = {N, T, P, S})</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Component</th>
                        <th style="padding:10px; border:1px solid #ddd;">Symbol</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Non-terminals</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">N</td>
                        <td style="padding:8px; border:1px solid #ddd;">Variables that can be replaced</td>
                        <td style="padding:8px; border:1px solid #ddd;">{S, A, B}</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Terminals</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">T</td>
                        <td style="padding:8px; border:1px solid #ddd;">Actual symbols in the language</td>
                        <td style="padding:8px; border:1px solid #ddd;">{a, b, 0, 1}</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Productions/Rules</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">P</td>
                        <td style="padding:8px; border:1px solid #ddd;">Rules for replacing non-terminals</td>
                        <td style="padding:8px; border:1px solid #ddd;">S → aS | b</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Start Symbol</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">S</td>
                        <td style="padding:8px; border:1px solid #ddd;">The initial non-terminal</td>
                        <td style="padding:8px; border:1px solid #ddd;">S ∈ N</td>
                    </tr>
                </table>
                
                <h4>Example Grammar</h4>
                <p>Consider a grammar that generates strings of the form "aⁿbⁿ" (equal number of a's followed by b's):</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
N = {S}
T = {a, b}
P = {
    S → aSb,
    S → ε
}
S = S
                </pre>
                
                <p><strong>Derivation of "aabb":</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
S ⇒ aSb (using S → aSb)
  ⇒ aaSbb (using S → aSb)
  ⇒ aabb (using S → ε)
                </pre>
                
                <p>The symbol ⇒ means "derives in one step". The language generated is {ε, ab, aabb, aaabbb, ...}</p>
                
                <h4>Types of Grammars</h4>
                <p>Grammars are classified by the form of their production rules. This leads to the Chomsky hierarchy.</p>
            `,
            keyPoints: [
                "Grammar = set of rules for generating strings",
                "Components: Non-terminals (N), Terminals (T), Productions (P), Start symbol (S)",
                "Non-terminals are replaced, terminals appear in final strings",
                "Derivation: process of applying rules to generate a string",
                "Different grammar types generate different language classes"
            ]
        },

        {
            title: "1.4 What are Automata?",
            content: `
                <h4>Definition of Automaton</h4>
                <p>An automaton (plural: automata) is an abstract machine that processes input strings and determines whether they belong to a language. Automata are recognizers - they accept or reject input strings.</p>
                
                <p><strong>Analogy:</strong> An automaton is like a gatekeeper at a club. It checks each person (input string) and decides whether to let them in (accept) or not (reject) based on a set of rules.</p>
                
                <h4>Basic Components of an Automaton</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Component</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>States</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">The different conditions the machine can be in</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Start State</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">The state where processing begins</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Accept States</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">States that indicate acceptance of input</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Transitions</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Rules for moving between states based on input</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Input Alphabet</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">The set of symbols the automaton can read</td>
                    </tr>
                </table>
                
                <h4>Types of Automata</h4>
                <p>Different automata have different memory capabilities:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Automaton Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Memory</th>
                        <th style="padding:10px; border:1px solid #ddd;">Languages Recognized</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Finite Automata (FA)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">No memory (only states)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Regular Languages</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Pushdown Automata (PDA)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Stack memory</td>
                        <td style="padding:8px; border:1px solid #ddd;">Context-Free Languages</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Turing Machines (TM)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Infinite tape memory</td>
                        <td style="padding:8px; border:1px solid #ddd;">Recursively Enumerable Languages</td>
                    </tr>
                </table>
                
                <h4>How Automata Process Input</h4>
                <ol>
                    <li>Start in the start state</li>
                    <li>Read the first input symbol</li>
                    <li>Follow a transition to a new state based on that symbol</li>
                    <li>Continue reading symbols one by one</li>
                    <li>After reading all symbols, check if current state is an accept state</li>
                </ol>
                
                <p>If the automaton ends in an accept state, the string is accepted (belongs to the language). Otherwise, it is rejected.</p>
            `,
            keyPoints: [
                "Automata are abstract machines that recognize languages",
                "Components: states, start state, accept states, transitions, alphabet",
                "Finite Automata: finite memory (states only)",
                "Pushdown Automata: stack memory",
                "Turing Machines: infinite tape memory",
                "Automata accept strings that belong to a language"
            ]
        },

        {
            title: "1.5 Relationship Between Languages, Grammars, and Automata",
            content: `
                <h4>The Fundamental Connection</h4>
                <p>There is a beautiful and deep relationship between formal languages, grammars, and automata. This relationship is one of the most important concepts in computer science.</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">GRAMMARS generate LANGUAGES<br>↓<br>AUTOMATA recognize LANGUAGES</p>
                </div>
                
                <h4>The Triangle of Computation</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Grammar Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Generates</th>
                        <th style="padding:10px; border:1px solid #ddd;">Recognized by</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Regular Grammar (Type 3)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Regular Languages</td>
                        <td style="padding:8px; border:1px solid #ddd;">Finite Automata (FA)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Context-Free Grammar (Type 2)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Context-Free Languages</td>
                        <td style="padding:8px; border:1px solid #ddd;">Pushdown Automata (PDA)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Context-Sensitive Grammar (Type 1)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Context-Sensitive Languages</td>
                        <td style="padding:8px; border:1px solid #ddd;">Linear Bounded Automata (LBA)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Unrestricted Grammar (Type 0)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Recursively Enumerable Languages</td>
                        <td style="padding:8px; border:1px solid #ddd;">Turing Machines (TM)</td>
                    </tr>
                </table>
                
                <h4>Key Insight</h4>
                <ul>
                    <li><strong>Grammars generate</strong> languages (produce strings)</li>
                    <li><strong>Automata recognize</strong> languages (accept/reject strings)</li>
                    <li>For every grammar type, there is a corresponding automaton that can recognize exactly the languages that grammar can generate</li>
                    <li>This equivalence is fundamental to understanding computation</li>
                </ul>
                
                <h4>Example: Regular Languages</h4>
                <ul>
                    <li>A regular grammar can generate strings like "all strings ending with 00"</li>
                    <li>A finite automaton can be built that accepts exactly those strings</li>
                    <li>The language is the same - just described in two different ways</li>
                </ul>
                
                <p><strong>Important:</strong> This relationship shows that generation and recognition are two sides of the same coin!</p>
            `,
            keyPoints: [
                "Grammars GENERATE languages (production)",
                "Automata RECOGNIZE languages (acceptance)",
                "Each grammar type corresponds to an automaton type",
                "Type-3 (Regular) ↔ Finite Automata",
                "Type-2 (Context-Free) ↔ Pushdown Automata",
                "Type-0 (Unrestricted) ↔ Turing Machines",
                "This is a fundamental concept in automata theory"
            ]
        },

        {
            title: "1.6 The Chomsky Hierarchy",
            content: `
                <h4>What is the Chomsky Hierarchy?</h4>
                <p>The Chomsky hierarchy, introduced by Noam Chomsky in 1956, is a containment hierarchy of classes of formal grammars that generate formal languages. It classifies languages by their generative power and the complexity of automata needed to recognize them.</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">CHOMSKY HIERARCHY</p>
                    <pre style="text-align:center;">
Type 0: Recursively Enumerable (Turing Machines)
    ↑
Type 1: Context-Sensitive (Linear Bounded Automata)
    ↑
Type 2: Context-Free (Pushdown Automata)
    ↑
Type 3: Regular (Finite Automata)
                    </pre>
                </div>
                
                <h4>The Four Levels</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Grammar Name</th>
                        <th style="padding:10px; border:1px solid #ddd;">Language Class</th>
                        <th style="padding:10px; border:1px solid #ddd;">Automaton</th>
                        <th style="padding:10px; border:1px solid #ddd;">Production Rules Form</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Type 3</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Regular Grammar</td>
                        <td style="padding:8px; border:1px solid #ddd;">Regular Languages</td>
                        <td style="padding:8px; border:1px solid #ddd;">Finite Automata (FA)</td>
                        <td style="padding:8px; border:1px solid #ddd;">A → aB or A → a</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Type 2</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Context-Free Grammar</td>
                        <td style="padding:8px; border:1px solid #ddd;">Context-Free Languages</td>
                        <td style="padding:8px; border:1px solid #ddd;">Pushdown Automata (PDA)</td>
                        <td style="padding:8px; border:1px solid #ddd;">A → α (any string)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Type 1</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Context-Sensitive Grammar</td>
                        <td style="padding:8px; border:1px solid #ddd;">Context-Sensitive Languages</td>
                        <td style="padding:8px; border:1px solid #ddd;">Linear Bounded Automata (LBA)</td>
                        <td style="padding:8px; border:1px solid #ddd;">αAβ → αγβ (γ ≠ ε)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Type 0</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Unrestricted Grammar</td>
                        <td style="padding:8px; border:1px solid #ddd;">Recursively Enumerable Languages</td>
                        <td style="padding:8px; border:1px solid #ddd;">Turing Machines (TM)</td>
                        <td style="padding:8px; border:1px solid #ddd;">α → β (any form)</td>
                    </tr>
                </table>
                
                <h4>Relationships in the Hierarchy</h4>
                <ul>
                    <li><strong>Every Regular Language is Context-Free</strong> (Type 3 ⊂ Type 2)</li>
                    <li><strong>Every Context-Free Language is Context-Sensitive</strong> (Type 2 ⊂ Type 1)</li>
                    <li><strong>Every Context-Sensitive Language is Recursively Enumerable</strong> (Type 1 ⊂ Type 0)</li>
                    <li>The hierarchy is proper: there are languages in each level not in lower levels</li>
                </ul>
                
                <h4>Examples of Languages at Each Level</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Level</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example Language</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Type 3 (Regular)</td>
                        <td style="padding:8px; border:1px solid #ddd;">{aⁿ | n ≥ 0}</td>
                        <td style="padding:8px; border:1px solid #ddd;">All strings of a's</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Type 2 (Context-Free)</td>
                        <td style="padding:8px; border:1px solid #ddd;">{aⁿbⁿ | n ≥ 0}</td>
                        <td style="padding:8px; border:1px solid #ddd;">Equal number of a's and b's</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Type 1 (Context-Sensitive)</td>
                        <td style="padding:8px; border:1px solid #ddd;">{aⁿbⁿcⁿ | n ≥ 0}</td>
                        <td style="padding:8px; border:1px solid #ddd;">Equal number of a's, b's, and c's</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Type 0 (Recursively Enumerable)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Halting problem language</td>
                        <td style="padding:8px; border:1px solid #ddd;">Undecidable languages</td>
                    </tr>
                </table>
                
                <h4>Memory and Power</h4>
                <ul>
                    <li><strong>Type 3:</strong> No memory (only finite states) - least powerful</li>
                    <li><strong>Type 2:</strong> Stack memory - can handle nested structures</li>
                    <li><strong>Type 1:</strong> Linear bounded memory - more powerful than stack</li>
                    <li><strong>Type 0:</strong> Infinite memory - most powerful (Turing complete)</li>
                </ul>
            `,
            keyPoints: [
                "Chomsky hierarchy classifies grammars/languages by power",
                "Type 3 (Regular): Finite Automata, least powerful",
                "Type 2 (Context-Free): Pushdown Automata, stack memory",
                "Type 1 (Context-Sensitive): Linear Bounded Automata",
                "Type 0 (Unrestricted): Turing Machines, most powerful",
                "Each level contains all lower levels (proper containment)",
                "Higher levels can recognize more complex patterns"
            ]
        },

        {
            title: "1.7 Applications of Automata Theory",
            content: `
                <h4>Real-World Applications</h4>
                
                <h4>Compiler Design</h4>
                <ul>
                    <li><strong>Lexical Analysis:</strong> Finite automata recognize tokens (keywords, identifiers, numbers)</li>
                    <li><strong>Syntax Analysis:</strong> Pushdown automata (context-free grammars) parse programming language structure</li>
                    <li><strong>Code Generation:</strong> Turing machines model the code generation process</li>
                </ul>
                
                <h4>Text Processing and Pattern Matching</h4>
                <ul>
                    <li><strong>Regular expressions:</strong> Based on finite automata theory</li>
                    <li><strong>Search engines:</strong> Use automata for fast pattern matching</li>
                    <li><strong>Text editors:</strong> Find/replace uses regular expressions</li>
                </ul>
                
                <h4>Natural Language Processing</h4>
                <ul>
                    <li><strong>Part-of-speech tagging:</strong> Finite-state transducers</li>
                    <li><strong>Grammar checking:</strong> Context-free grammars model sentence structure</li>
                    <li><strong>Machine translation:</strong> Uses various automata models</li>
                </ul>
                
                <h4>Hardware Design</h4>
                <ul>
                    <li><strong>Digital circuits:</strong> Finite state machines model sequential circuits</li>
                    <li><strong>Protocol verification:</strong> Automata verify communication protocols</li>
                    <li><strong>Controller design:</strong> Traffic lights, elevators use finite automata</li>
                </ul>
                
                <h4>Artificial Intelligence</h4>
                <ul>
                    <li><strong>Game playing:</strong> State-space search modeled as automata</li>
                    <li><strong>Natural language understanding:</strong> Grammars parse sentences</li>
                    <li><strong>Expert systems:</strong> Rule-based systems relate to grammars</li>
                </ul>
                
                <h4>Complexity Theory</h4>
                <ul>
                    <li><strong>Problem classification:</strong> P, NP, PSPACE classes relate to automata</li>
                    <li><strong>Decidability:</strong> What problems can/cannot be solved by Turing machines</li>
                </ul>
                
                <p><strong>Summary:</strong> Automata theory is not just abstract mathematics - it's the foundation for many practical applications!</p>
            `,
            keyPoints: [
                "Compilers use finite automata (lexical) and pushdown automata (syntax)",
                "Regular expressions are based on finite automata",
                "Natural language processing uses grammars",
                "Hardware controllers are finite state machines",
                "Complexity theory studies what automata can/cannot compute"
            ]
        }
    ],

    summary: `
        <h3>Chapter 1 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Automata Theory:</strong> Study of abstract computing machines and what they can compute</li>
            <li><strong>Formal Language:</strong> Set of strings over an alphabet (Σ, strings, ε, language L)</li>
            <li><strong>Grammar:</strong> Rules for generating languages (N, T, P, S) - G = {N, T, P, S}</li>
            <li><strong>Automaton:</strong> Machine for recognizing languages (states, transitions, accept states)</li>
            <li><strong>Fundamental Relationship:</strong> Grammars GENERATE languages; Automata RECOGNIZE languages</li>
            <li><strong>Chomsky Hierarchy:</strong> Type 3 (Regular) ⊂ Type 2 (CF) ⊂ Type 1 (CS) ⊂ Type 0 (RE)</li>
            <li><strong>Corresponding Automata:</strong> FA (Type 3), PDA (Type 2), LBA (Type 1), TM (Type 0)</li>
            <li><strong>Applications:</strong> Compilers, text processing, NLP, hardware design, AI, complexity theory</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What are the four components of a formal grammar?",
            answer: "N (non-terminals), T (terminals), P (productions/rules), S (start symbol)"
        },
        {
            question: "Explain the relationship between grammars and automata.",
            answer: "Grammars generate languages (produce strings), automata recognize languages (accept/reject strings). For each grammar type, there is a corresponding automaton that recognizes exactly the languages that grammar generates."
        },
        {
            question: "List the four levels of the Chomsky hierarchy from least to most powerful.",
            answer: "Type 3 (Regular), Type 2 (Context-Free), Type 1 (Context-Sensitive), Type 0 (Recursively Enumerable)"
        },
        {
            question: "What automaton corresponds to each level of the Chomsky hierarchy?",
            answer: "Type 3: Finite Automata (FA), Type 2: Pushdown Automata (PDA), Type 1: Linear Bounded Automata (LBA), Type 0: Turing Machines (TM)"
        },
        {
            question: "Give an example language for Type 2 (Context-Free) that is not regular.",
            answer: "{aⁿbⁿ | n ≥ 0} - strings with equal number of a's followed by b's. This requires counting/memory that finite automata don't have."
        },
        {
            question: "What is the empty string and how is it denoted?",
            answer: "The empty string is a string with no symbols, denoted by ε (epsilon)."
        }
    ],

    quickTips: [
        "Remember: Grammars GENERATE, Automata RECOGNIZE",
        "Chomsky hierarchy: Regular ⊂ CF ⊂ CS ⊂ RE",
        "FA: no memory, PDA: stack, TM: infinite tape",
        "Type 3 rules: A → aB or A → a",
        "Type 2 rules: A → α (any string)",
        "The higher the type number, the MORE powerful (0 is most powerful)"
    ],

    commonMistakes: [
        "❌ Thinking higher type number means less powerful - actually Type 0 is most powerful!",
        "❌ Confusing generation (grammars) with recognition (automata)",
        "❌ Forgetting that ε (empty string) is a valid string",
        "❌ Mixing up the automata for each hierarchy level",
        "❌ Believing all languages are regular - many require more powerful automata"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 1:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>1 question</strong> at the <strong>Understand</strong> level.</p>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>Relationship between formal languages, grammars, and automata</strong> - This is the key insight!</li>
            <li><strong>Chomsky hierarchy:</strong> The four levels, their names, and corresponding automata</li>
            <li><strong>Basic definitions:</strong> Alphabet, string, language, grammar components</li>
            <li><strong>Types of automata:</strong> FA, PDA, LBA, TM and their memory capabilities</li>
        </ol>
        
        <h4>What "Understand" Means:</h4>
        <p>You need to be able to explain the relationships between languages, grammars, and automata, and describe the Chomsky hierarchy in your own words with examples.</p>
        
        <h4>Practice Questions:</h4>
        <ul>
            <li>Explain the relationship between formal languages, grammars, and automata.</li>
            <li>Describe the Chomsky hierarchy and give an example language at each level.</li>
            <li>What automaton would you use to recognize regular languages? Context-free languages?</li>
            <li>Why is {aⁿbⁿ | n ≥ 0} not a regular language?</li>
        </ul>
    `
};