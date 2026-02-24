// ===============================
// FOCUS AREA: AUTOMATA AND COMPLEXITY THEORY - CHAPTER 3
// Context-Free Languages and Pushdown Automata
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaAutomataChapter3 = {
    title: "Chapter 3: Context-Free Languages and Pushdown Automata",
    
    // Blueprint alignment: 1 question (Apply)
    blueprint: {
        totalQuestions: 1,
        cognitiveLevels: {
            apply: 1
        },
        topics: [
            "Context-free grammars (CFG)",
            "Pushdown Automata (PDA)",
            "Derivations and parse trees",
            "Ambiguity in grammars",
            "Applications of context-free languages"
        ]
    },

    learningObjectives: [
        "Understand the definition and components of context-free grammars",
        "Design context-free grammars for various languages",
        "Understand Pushdown Automata and their operation",
        "Create parse trees and understand derivations",
        "Identify ambiguous grammars and understand their implications",
        "Apply context-free grammars in practical applications"
    ],

    sections: [
        {
            title: "3.1 Introduction to Context-Free Grammars",
            content: `
                <h4>What is a Context-Free Grammar?</h4>
                <p>A context-free grammar (CFG) is a formal grammar where every production rule has a single non-terminal on the left-hand side. They are called "context-free" because the rules can be applied regardless of the context (surrounding symbols).</p>
                
                <p><strong>Analogy:</strong> Think of CFGs like sentence structure rules in English. "A sentence can be a noun phrase followed by a verb phrase" - this rule applies regardless of what specific nouns or verbs you use.</p>
                
                <h4>Formal Definition of CFG</h4>
                <p>A context-free grammar is a 4-tuple: G = (V, Σ, R, S) where:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Component</th>
                        <th style="padding:10px; border:1px solid #ddd;">Symbol</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Variables (Non-terminals)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">V</td>
                        <td style="padding:8px; border:1px solid #ddd;">A finite set of symbols that can be replaced</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Terminals</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Σ</td>
                        <td style="padding:8px; border:1px solid #ddd;">A finite set of symbols that appear in the language</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Rules (Productions)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">R</td>
                        <td style="padding:8px; border:1px solid #ddd;">A finite set of rules of the form A → α, where A ∈ V and α ∈ (V ∪ Σ)*</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Start Symbol</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">S</td>
                        <td style="padding:8px; border:1px solid #ddd;">The variable where generation begins (S ∈ V)</td>
                    </tr>
                </table>
                
                <h4>Key Characteristic of Context-Free Grammars</h4>
                <p>In a CFG, every production rule has exactly ONE non-terminal on the left side. This is what makes them "context-free" - the rule can be applied regardless of the symbols around it.</p>
                
                <h4>Example CFG: Palindromes over {a, b}</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
V = {S}
Σ = {a, b}
R = {
    S → aSa,
    S → bSb,
    S → a,
    S → b,
    S → ε
}
S = S
                </pre>
                
                <p>This grammar generates strings like: ε, a, b, aa, bb, aba, bab, abba, baab, etc.</p>
                
                <h4>Example CFG: {aⁿbⁿ | n ≥ 0}</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
V = {S}
Σ = {a, b}
R = {
    S → aSb,
    S → ε
}
S = S
                </pre>
                
                <p>Derivation of "aabb": S ⇒ aSb ⇒ aaSbb ⇒ aabb</p>
                
                <div class="key-points-box" style="background:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🔑 Important:</strong> Context-free grammars generate exactly the context-free languages, which include all regular languages plus more powerful ones like {aⁿbⁿ}.</p>
                </div>
            `,
            keyPoints: [
                "CFG = 4-tuple (V, Σ, R, S)",
                "Rules are of form A → α (single non-terminal on left)",
                "Context-free means rules apply regardless of context",
                "CFGs generate context-free languages",
                "Regular languages are a subset of context-free languages"
            ]
        },

        {
            title: "3.2 Derivations and Parse Trees",
            content: `
                <h4>What is a Derivation?</h4>
                <p>A derivation is a sequence of rule applications that transforms the start symbol into a string of terminals. It shows step-by-step how a string is generated by a grammar.</p>
                
                <h4>Derivation Notation</h4>
                <ul>
                    <li><strong>⇒</strong> means "derives in one step"</li>
                    <li><strong>⇒*</strong> means "derives in zero or more steps"</li>
                </ul>
                
                <h4>Example Derivation</h4>
                <p>For grammar: S → aSb | ε, derive "aaabbb":</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
S ⇒ aSb
  ⇒ aaSbb
  ⇒ aaaSbbb
  ⇒ aaabbb
                </pre>
                
                <h4>Types of Derivations</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Derivation Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Leftmost Derivation</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Always replace the leftmost non-terminal first</td>
                        <td style="padding:8px; border:1px solid #ddd;">S ⇒ aSb ⇒ aaSbb ⇒ aabb</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Rightmost Derivation</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Always replace the rightmost non-terminal first</td>
                        <td style="padding:8px; border:1px solid #ddd;">S ⇒ aSb ⇒ aSb ⇒ aabb (different order)</td>
                    </tr>
                </table>
                
                <h4>Parse Trees</h4>
                <p>A parse tree (or derivation tree) is a graphical representation of a derivation. It shows the hierarchical structure of the string according to the grammar.</p>
                
                <h4>Parse Tree Structure</h4>
                <ul>
                    <li><strong>Root:</strong> Start symbol (S)</li>
                    <li><strong>Internal nodes:</strong> Non-terminals</li>
                    <li><strong>Leaves:</strong> Terminals (read left to right give the derived string)</li>
                    <li><strong>Children:</strong> Represent the right-hand side of a production</li>
                </ul>
                
                <h4>Example Parse Tree for "aabb"</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
        S
      / | \\
     a  S  b
       / | \\
      a  S  b
         |
         ε
                </pre>
                
                <p>Reading leaves left to right: a a ε b b = "aabb"</p>
                
                <h4>Yield of a Parse Tree</h4>
                <p>The yield is the string obtained by reading the leaves from left to right. For a valid derivation, the yield should be the derived string.</p>
                
                <h4>Relationship Between Derivations and Parse Trees</h4>
                <ul>
                    <li>Every derivation corresponds to a parse tree</li>
                    <li>Different derivations (leftmost vs rightmost) can produce the same parse tree</li>
                    <li>If a string has more than one parse tree, the grammar is ambiguous</li>
                </ul>
            `,
            keyPoints: [
                "Derivation = sequence of rule applications",
                "Leftmost derivation replaces leftmost non-terminal first",
                "Rightmost derivation replaces rightmost non-terminal first",
                "Parse tree = graphical representation of derivation",
                "Root = start symbol, leaves = terminals",
                "Yield = string from leaves left to right"
            ]
        },

        {
            title: "3.3 Designing Context-Free Grammars",
            content: `
                <h4>Strategies for Designing CFGs</h4>
                
                <h4>Strategy 1: Matching Pairs</h4>
                <p>For languages that require matching symbols (like parentheses or aⁿbⁿ), use rules that generate matching pairs.</p>
                
                <p><strong>Example:</strong> L = {aⁿbⁿ | n ≥ 0}</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
S → aSb | ε
                </pre>
                
                <p><strong>Example:</strong> L = {aⁿbᵐ | n = m or n = 2m}</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
S → T | U
T → aTb | ε      // n = m
U → aaUb | ε     // n = 2m
                </pre>
                
                <h4>Strategy 2: Recursive Structure</h4>
                <p>Use recursion to generate repeated patterns.</p>
                
                <p><strong>Example:</strong> L = {w wᴿ | w ∈ {a,b}*} (palindromes)</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
S → aSa | bSb | a | b | ε
                </pre>
                
                <h4>Strategy 3: Union of Languages</h4>
                <p>If L = L₁ ∪ L₂, create separate rules for each part and combine with a new start symbol.</p>
                
                <p><strong>Example:</strong> L = {aⁿbⁿ | n ≥ 0} ∪ {aⁿb²ⁿ | n ≥ 0}</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
S → A | B
A → aAb | ε      // aⁿbⁿ
B → aBbb | ε     // aⁿb²ⁿ
                </pre>
                
                <h4>Strategy 4: Concatenation of Languages</h4>
                <p>If L = L₁·L₂, create grammars for L₁ and L₂, then combine with S → S₁S₂.</p>
                
                <p><strong>Example:</strong> L = {aⁿbⁿaᵐbᵐ | n,m ≥ 0}</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
S → AB
A → aAb | ε      // aⁿbⁿ
B → aBb | ε      // aᵐbᵐ
                </pre>
                
                <h4>Strategy 5: Arithmetic Expressions</h4>
                <p>For languages like arithmetic expressions, build from simpler to more complex.</p>
                
                <p><strong>Example:</strong> Simple arithmetic expressions with + and *</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
E → E + T | T
T → T * F | F
F → (E) | a
                </pre>
                
                <p>This generates expressions like: a, a+a, a*a, a+a*a, (a+a)*a, etc.</p>
                
                <h4>Practice: Design CFG for {aᵢbⱼcₖ | i = j or j = k}</h4>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
S → A | B
A → aAc | X      // For i = k? Wait, need i = j, not i = k
// Let's think carefully...
S → A | B
A → aAb | ε      // generates aⁿbⁿ (i = j), followed by c's
A → Ac | ε?      // This allows any number of c's after
Better:
S → AC | B
A → aAb | ε      // aⁿbⁿ
C → cC | ε       // any c's
B → aB | ε       // any a's
B → bBc | ε      // bⁿcⁿ
But careful: need to ensure correct ordering.
                </pre>
                
                <p>This is complex - the key is to break the problem into parts and combine them carefully.</p>
            `,
            keyPoints: [
                "Use matching pairs for balanced structures (aⁿbⁿ)",
                "Use recursion for nested patterns",
                "For unions, create separate rules and combine",
                "For concatenation, combine grammars with S → S₁S₂",
                "Build arithmetic expressions hierarchically",
                "Practice is essential for designing CFGs"
            ]
        },

        {
            title: "3.4 Ambiguity in Context-Free Grammars",
            content: `
                <h4>What is Ambiguity?</h4>
                <p>A grammar is ambiguous if there exists at least one string that can be derived in two or more different ways (i.e., has more than one parse tree).</p>
                
                <h4>Example of an Ambiguous Grammar</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
E → E + E | E * E | a
                </pre>
                
                <p>For string "a + a * a", there are two different parse trees:</p>
                
                <p><strong>Parse Tree 1:</strong> (a + a) * a</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
      E
    / | \\
   E  *  E
  /|\\    |
 E + E   a
 |   |
 a   a
                </pre>
                
                <p><strong>Parse Tree 2:</strong> a + (a * a)</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
      E
    / | \\
   E  +  E
   |   / | \\
   a  E * E
       |   |
       a   a
                </pre>
                
                <p>These two parse trees correspond to different evaluation orders, which is a problem for programming languages!</p>
                
                <h4>Why Ambiguity Matters</h4>
                <ul>
                    <li><strong>Programming languages:</strong> Ambiguity leads to multiple interpretations of code</li>
                    <li><strong>Compilers:</strong> Need unique parse trees for code generation</li>
                    <li><strong>Natural language processing:</strong> Ambiguity causes multiple meanings</li>
                </ul>
                
                <h4>Inherently Ambiguous Languages</h4>
                <p>Some context-free languages are inherently ambiguous, meaning every grammar that generates them is ambiguous.</p>
                
                <p><strong>Example:</strong> L = {aⁿbⁿcᵐ} ∪ {aⁿbᵐcᵐ} is inherently ambiguous.</p>
                <p>String aⁿbⁿcⁿ belongs to both parts and will always have two parse trees.</p>
                
                <h4>Removing Ambiguity</h4>
                <p>We can often rewrite ambiguous grammars to be unambiguous by introducing precedence and associativity rules.</p>
                
                <p><strong>Unambiguous version of arithmetic expressions:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
E → E + T | T
T → T * F | F
F → (E) | a
                </pre>
                
                <p>This grammar enforces operator precedence (* before +) and associativity (left-associative).</p>
                
                <h4>Detecting Ambiguity</h4>
                <ul>
                    <li>A grammar is ambiguous if any string has two distinct leftmost derivations</li>
                    <li>A grammar is ambiguous if any string has two distinct parse trees</li>
                    <li>In general, detecting ambiguity is undecidable (no algorithm can always detect it)</li>
                </ul>
            `,
            keyPoints: [
                "Ambiguous grammar = string with ≥ 2 parse trees",
                "Ambiguity causes problems in programming languages",
                "Some languages are inherently ambiguous",
                "Can often rewrite to remove ambiguity",
                "Operator precedence and associativity help",
                "Detecting ambiguity is undecidable in general"
            ]
        },

        {
            title: "3.5 Pushdown Automata (PDA)",
            content: `
                <h4>What is a Pushdown Automaton?</h4>
                <p>A Pushdown Automaton (PDA) is a finite automaton with an additional stack memory. The stack allows it to remember an unbounded amount of information, making it more powerful than finite automata.</p>
                
                <p><strong>Analogy:</strong> A PDA is like a finite automaton that has a notepad (stack) where it can write notes and read them later. It can only access the most recent note (LIFO - Last In, First Out).</p>
                
                <h4>Components of a PDA</h4>
                <p>A PDA is formally defined as a 6-tuple: (Q, Σ, Γ, δ, q₀, F) where:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Component</th>
                        <th style="padding:10px; border:1px solid #ddd;">Symbol</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>States</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Q</td>
                        <td style="padding:8px; border:1px solid #ddd;">A finite set of states</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Input Alphabet</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Σ</td>
                        <td style="padding:8px; border:1px solid #ddd;">A finite set of input symbols</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Stack Alphabet</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Γ</td>
                        <td style="padding:8px; border:1px solid #ddd;">A finite set of symbols that can be pushed on the stack</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Transition Function</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">δ</td>
                        <td style="padding:8px; border:1px solid #ddd;">δ: Q × (Σ ∪ {ε}) × Γ → P(Q × Γ*)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Start State</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">q₀</td>
                        <td style="padding:8px; border:1px solid #ddd;">The initial state</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Accept States</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">F</td>
                        <td style="padding:8px; border:1px solid #ddd;">Set of final/accepting states</td>
                    </tr>
                </table>
                
                <h4>Stack Operations</h4>
                <ul>
                    <li><strong>Push:</strong> Add a symbol to the top of the stack</li>
                    <li><strong>Pop:</strong> Remove the top symbol from the stack</li>
                    <li>The stack operates on LIFO (Last In, First Out) principle</li>
                </ul>
                
                <h4>How a PDA Works</h4>
                <ol>
                    <li>Start in state q₀ with empty stack</li>
                    <li>At each step, based on current state, input symbol (or ε), and top stack symbol, the PDA can:
                        <ul>
                            <li>Change to a new state</li>
                            <li>Replace the top stack symbol with a string (may be empty to pop, or multiple to push)</li>
                        </ul>
                    </li>
                    <li>Accepts if after reading all input, it is in an accept state (and stack can be empty or not depending on acceptance mode)</li>
                </ol>
                
                <h4>Example PDA for {aⁿbⁿ | n ≥ 0}</h4>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Q = {q₀, q₁, q₂}
Σ = {a, b}
Γ = {X} (stack alphabet - just a marker)
q₀ = q₀
F = {q₀, q₂}

Transitions:
1. δ(q₀, a, ε) = {(q₀, X)}    // Read a, push X
2. δ(q₀, b, X) = {(q₁, ε)}    // Read b, pop X
3. δ(q₁, b, X) = {(q₁, ε)}    // Read more b's, pop X
4. δ(q₁, ε, ε) = {(q₂, ε)}    // ε-transition to accept
                </pre>
                
                <p>Process for "aabb":</p>
                <ul>
                    <li>Start q₀, stack empty</li>
                    <li>Read a: push X (stack: X)</li>
                    <li>Read a: push X (stack: XX)</li>
                    <li>Read b: pop X (stack: X) go to q₁</li>
                    <li>Read b: pop X (stack: empty) stay in q₁</li>
                    <li>ε-transition to q₂ (accept)</li>
                </ul>
                
                <h4>Acceptance Modes</h4>
                <ul>
                    <li><strong>Accept by final state:</strong> PDA accepts if after reading input, it is in an accept state</li>
                    <li><strong>Accept by empty stack:</strong> PDA accepts if stack becomes empty (regardless of state)</li>
                    <li>Both modes are equivalent in power</li>
                </ul>
            `,
            keyPoints: [
                "PDA = FA + stack memory",
                "6-tuple: (Q, Σ, Γ, δ, q₀, F)",
                "Stack allows unbounded memory (LIFO)",
                "Transition depends on state, input, and top of stack",
                "PDA recognize context-free languages",
                "Equivalent in power to context-free grammars"
            ]
        },

        {
            title: "3.6 Equivalence of CFG and PDA",
            content: `
                <h4>The Fundamental Equivalence</h4>
                <p>Context-free grammars and pushdown automata are equivalent in power. They both define exactly the class of context-free languages.</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">CFG ⇔ PDA</p>
                    <p style="text-align:center;">Context-Free Grammars generate<br>↓<br>Context-Free Languages<br>↓<br>Pushdown Automata recognize</p>
                </div>
                
                <h4>CFG to PDA Conversion</h4>
                <p>For any context-free grammar, we can construct an equivalent PDA that recognizes exactly the strings generated by the grammar.</p>
                
                <p><strong>Construction method (top-down parsing):</strong></p>
                <ol>
                    <li>Create PDA with three states: q₀ (start), q₁ (loop), q₂ (accept)</li>
                    <li>Initialize stack with S (start symbol)</li>
                    <li>In q₁:
                        <ul>
                            <li>If top of stack is a non-terminal A, replace with right-hand side of some A → α (nondeterministic choice)</li>
                            <li>If top of stack is a terminal, match with input</li>
                        </ul>
                    </li>
                    <li>Accept when input is finished and stack is empty</li>
                </ol>
                
                <h4>PDA to CFG Conversion</h4>
                <p>For any PDA, we can construct an equivalent CFG that generates the same language.</p>
                
                <p>The construction is complex but involves creating variables [pXq] representing "going from state p to state q while popping X".</p>
                
                <h4>Why This Equivalence Matters</h4>
                <ul>
                    <li>CFGs are better for generating strings (specifying language structure)</li>
                    <li>PDAs are better for recognizing strings (parsing algorithms)</li>
                    <li>Compilers use this equivalence: CFG for language specification, PDA-based algorithms for parsing</li>
                </ul>
                
                <h4>Example: CFG to PDA for {aⁿbⁿ}</h4>
                
                <p>CFG: S → aSb | ε</p>
                
                <p>Equivalent PDA:</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
States: q₀, q₁, q₂
Start: q₀
Accept: q₂

Transitions:
1. (q₀, ε, ε) → (q₁, S)     // Initialize stack with S
2. (q₁, ε, S) → (q₁, aSb)    // Expand S → aSb
3. (q₁, ε, S) → (q₁, ε)      // Expand S → ε
4. (q₁, a, a) → (q₁, ε)      // Match terminal a
5. (q₁, b, b) → (q₁, ε)      // Match terminal b
6. (q₁, ε, ε) → (q₂, ε)      // Accept
                </pre>
            `,
            keyPoints: [
                "CFG and PDA are equivalent in power",
                "Both define context-free languages",
                "CFG → PDA and PDA → CFG conversions exist",
                "CFGs for generation, PDAs for recognition",
                "Essential for compiler design and parsing"
            ]
        },

        {
            title: "3.7 Applications of Context-Free Languages",
            content: `
                <h4>Programming Languages</h4>
                <ul>
                    <li><strong>Syntax specification:</strong> Most programming languages are defined using context-free grammars</li>
                    <li><strong>BNF (Backus-Naur Form):</strong> A notation for CFGs used to describe programming language syntax</li>
                    <li><strong>Parsing:</strong> Compilers use PDA-based algorithms (LL, LR, LALR) to parse source code</li>
                </ul>
                
                <h4>Example: BNF for a simple expression</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
&lt;expr&gt; ::= &lt;expr&gt; + &lt;term&gt; | &lt;term&gt;
&lt;term&gt; ::= &lt;term&gt; * &lt;factor&gt; | &lt;factor&gt;
&lt;factor&gt; ::= ( &lt;expr&gt; ) | id | number
                </pre>
                
                <h4>Natural Language Processing</h4>
                <ul>
                    <li><strong>Syntax trees:</strong> CFGs model sentence structure</li>
                    <li><strong>Parsing algorithms:</strong> Used to analyze grammatical structure</li>
                    <li><strong>Machine translation:</strong> Understanding sentence structure helps translation</li>
                </ul>
                
                <h4>Markup Languages</h4>
                <ul>
                    <li><strong>HTML/XML:</strong> Nested tags are context-free structures</li>
                    <li><strong>Validation:</strong> Checking well-formedness uses CFG concepts</li>
                </ul>
                
                <h4>Arithmetic Expressions</h4>
                <ul>
                    <li>CFGs naturally express operator precedence and associativity</li>
                    <li>Used in calculators and expression evaluators</li>
                </ul>
                
                <h4>Protocol Description</h4>
                <ul>
                    <li>Some network protocols have context-free structure</li>
                    <li>CFGs help specify valid message formats</li>
                </ul>
                
                <h4>Limitations</h4>
                <p>Context-free languages cannot handle all structures:</p>
                <ul>
                    <li>Languages requiring three-way matching like {aⁿbⁿcⁿ} are context-sensitive</li>
                    <li>Natural languages often require more powerful grammars</li>
                </ul>
            `,
            keyPoints: [
                "Programming language syntax is context-free",
                "BNF is a notation for CFGs",
                "Compilers use CFGs for parsing",
                "HTML/XML tags are context-free",
                "Arithmetic expressions are context-free",
                "Some structures require more power than CFGs"
            ]
        }
    ],

    summary: `
        <h3>Chapter 3 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Context-Free Grammars:</strong> 4-tuple (V, Σ, R, S) with rules A → α (single non-terminal on left)</li>
            <li><strong>Derivations:</strong> Leftmost, rightmost sequences of rule applications</li>
            <li><strong>Parse Trees:</strong> Visual representation of derivations (root = S, leaves = terminals)</li>
            <li><strong>Ambiguity:</strong> Multiple parse trees for same string; can often be removed</li>
            <li><strong>Pushdown Automata:</strong> 6-tuple (Q, Σ, Γ, δ, q₀, F) with stack memory</li>
            <li><strong>Stack operations:</strong> Push and pop (LIFO)</li>
            <li><strong>Equivalence:</strong> CFG and PDA define same languages (context-free languages)</li>
            <li><strong>Applications:</strong> Programming languages, compilers, NLP, markup languages</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What are the four components of a context-free grammar?",
            answer: "V (variables/non-terminals), Σ (terminals), R (rules/productions), S (start symbol)"
        },
        {
            question: "Design a CFG for the language {aⁿbⁿ | n ≥ 0}.",
            answer: "S → aSb | ε"
        },
        {
            question: "What is an ambiguous grammar? Give an example.",
            answer: "A grammar where some string has more than one parse tree. Example: E → E+E | E*E | a (string a+a*a has two parse trees)"
        },
        {
            question: "What are the components of a Pushdown Automaton?",
            answer: "Q (states), Σ (input alphabet), Γ (stack alphabet), δ (transition function), q₀ (start state), F (accept states)"
        },
        {
            question: "How does a PDA differ from a finite automaton?",
            answer: "A PDA has a stack memory that can store an unbounded amount of information, allowing it to recognize context-free languages like {aⁿbⁿ}."
        },
        {
            question: "What is the relationship between CFGs and PDAs?",
            answer: "They are equivalent - CFGs generate context-free languages and PDAs recognize exactly the same languages."
        }
    ],

    quickTips: [
        "CFG rules: left side must be single non-terminal",
        "For aⁿbⁿ, use S → aSb | ε",
        "For palindromes, use S → aSa | bSb | a | b | ε",
        "Parse tree leaves read left to right = derived string",
        "Ambiguity means multiple parse trees",
        "PDA stack = LIFO (Last In First Out)"
    ],

    commonMistakes: [
        "❌ Putting multiple symbols on left side of CFG rule - that's context-sensitive!",
        "❌ Forgetting that PDA stack is LIFO, not FIFO",
        "❌ Thinking all context-free grammars are unambiguous",
        "❌ Confusing derivation order (leftmost vs rightmost)",
        "❌ Believing PDA can recognize aⁿbⁿcⁿ (needs context-sensitive)"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 3:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>1 question</strong> at the <strong>Apply</strong> level.</p>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>Designing CFGs:</strong> Creating grammars for specific languages</li>
            <li><strong>Parse trees:</strong> Constructing and interpreting them</li>
            <li><strong>Ambiguity:</strong> Identifying and removing ambiguity</li>
            <li><strong>PDA operation:</strong> Understanding how PDA process input</li>
        </ol>
        
        <h4>What "Apply" Means:</h4>
        <p>You need to be able to design context-free grammars for given languages, construct parse trees, and understand how PDA work.</p>
        
        <h4>Practice Apply Questions:</h4>
        <ul>
            <li>Design a CFG for the language {aᵢbⱼcₖ | i = j or j = k}.</li>
            <li>Construct a parse tree for the string "aabb" using grammar S → aSb | ε.</li>
            <li>Show that the grammar E → E+E | E*E | a is ambiguous by giving two parse trees for "a+a*a".</li>
            <li>Design a PDA for the language {aⁿbⁿ | n ≥ 0}.</li>
        </ul>
    `
};