// ===============================
// FOCUS AREA: AUTOMATA AND COMPLEXITY THEORY - CHAPTER 2
// Finite Automata and Regular Languages
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaAutomataChapter2 = {
    title: "Chapter 2: Finite Automata and Regular Languages",
    
    // Blueprint alignment: 1 question (Understand)
    blueprint: {
        totalQuestions: 1,
        cognitiveLevels: {
            understand: 1
        },
        topics: [
            "Finite Automata (DFA and NFA)",
            "Regular expressions",
            "Regular languages and their properties",
            "Closure properties of regular languages",
            "Pumping lemma for regular languages"
        ]
    },

    learningObjectives: [
        "Understand the definition and components of Finite Automata",
        "Differentiate between Deterministic (DFA) and Nondeterministic (NFA) Finite Automata",
        "Understand regular expressions and their relationship to finite automata",
        "Identify regular languages and their closure properties",
        "Apply the pumping lemma to prove languages are not regular"
    ],

    sections: [
        {
            title: "2.1 Introduction to Finite Automata",
            content: `
                <h4>What is a Finite Automaton?</h4>
                <p>A Finite Automaton (FA) is the simplest model of computation. It has a finite number of states and no additional memory (no stack, no tape). It reads input symbols one at a time and changes state based on transitions.</p>
                
                <p><strong>Analogy:</strong> A Finite Automaton is like a very simple vending machine that only remembers which state it's in - it cannot remember how many coins you've inserted, only its current condition.</p>
                
                <h4>Formal Definition of a Finite Automaton</h4>
                <p>A Finite Automaton is defined as a <strong>5-tuple</strong>: (Q, Σ, δ, q₀, F) where:</p>
                
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
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Alphabet</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Σ</td>
                        <td style="padding:8px; border:1px solid #ddd;">A finite set of input symbols</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Transition Function</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">δ</td>
                        <td style="padding:8px; border:1px solid #ddd;">Maps (state, input) to next state(s)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Start State</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">q₀</td>
                        <td style="padding:8px; border:1px solid #ddd;">The state where processing begins (q₀ ∈ Q)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Accept States</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">F</td>
                        <td style="padding:8px; border:1px solid #ddd;">Set of final/accepting states (F ⊆ Q)</td>
                    </tr>
                </table>
                
                <div class="key-points-box" style="background:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🔑 Important:</strong> A Finite Automaton is formally defined as a <strong>5-tuple</strong>. Remember this for exams!</p>
                </div>
                
                <h4>How a Finite Automaton Works</h4>
                <ol>
                    <li>Start in the start state (q₀)</li>
                    <li>Read the first input symbol</li>
                    <li>Follow the transition function δ(current state, symbol) to a new state</li>
                    <li>Repeat for each input symbol</li>
                    <li>After reading all symbols, if the current state is in F (accept states), the input is ACCEPTED; otherwise, REJECTED</li>
                </ol>
                
                <h4>Example: Simple Finite Automaton</h4>
                <p>Consider an automaton that accepts strings ending with "00" over Σ = {0,1}:</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
States: Q = {q₀, q₁, q₂}
Alphabet: Σ = {0,1}
Start: q₀
Accept: F = {q₂}

Transitions:
δ(q₀, 0) = q₁    δ(q₀, 1) = q₀
δ(q₁, 0) = q₂    δ(q₁, 1) = q₀
δ(q₂, 0) = q₂    δ(q₂, 1) = q₀

Accepts: 00, 100, 1100, 0100, etc.
Rejects: 0, 1, 01, 10, 101
                </pre>
            `,
            keyPoints: [
                "Finite Automaton = 5-tuple (Q, Σ, δ, q₀, F)",
                "Has finite number of states, no additional memory",
                "Reads input one symbol at a time",
                "Accepts if ends in accept state, rejects otherwise",
                "Used to recognize regular languages"
            ]
        },

        {
            title: "2.2 Deterministic Finite Automata (DFA)",
            content: `
                <h4>What is a DFA?</h4>
                <p>A Deterministic Finite Automaton (DFA) is a type of finite automaton where for each state and input symbol, there is exactly one next state. The behavior is completely determined (deterministic).</p>
                
                <h4>Properties of DFA</h4>
                <ul>
                    <li><strong>Deterministic:</strong> From every state, for each input symbol, there is exactly ONE transition</li>
                    <li><strong>Complete:</strong> Every state has a transition for every symbol in the alphabet</li>
                    <li><strong>Single path:</strong> For any input string, there is exactly one path through the automaton</li>
                </ul>
                
                <h4>Formal Definition of DFA</h4>
                <p>A DFA is a 5-tuple (Q, Σ, δ, q₀, F) where δ: Q × Σ → Q (maps to exactly one state)</p>
                
                <h4>Example DFA: Accepts strings starting with 'a'</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Q = {q₀, q₁, q₂}
Σ = {a, b}
q₀ = q₀
F = {q₁}

δ:
δ(q₀, a) = q₁  (start of string 'a' goes to accept)
δ(q₀, b) = q₂  (start of string 'b' goes to reject)
δ(q₁, a) = q₁  (stay in accept)
δ(q₁, b) = q₁  (stay in accept)
δ(q₂, a) = q₂  (stay in reject)
δ(q₂, b) = q₂  (stay in reject)

Accepts: a, aa, ab, aaa, aab, aba, abb, etc.
Rejects: b, ba, bb, baa, etc.
                </pre>
                
                <h4>Transition Table Representation</h4>
                <p>DFAs are often represented using transition tables:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">State</th>
                        <th style="padding:10px; border:1px solid #ddd;">Input a</th>
                        <th style="padding:10px; border:1px solid #ddd;">Input b</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">→q₀</td>
                        <td style="padding:8px; border:1px solid #ddd;">q₁</td>
                        <td style="padding:8px; border:1px solid #ddd;">q₂</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">*q₁</td>
                        <td style="padding:8px; border:1px solid #ddd;">q₁</td>
                        <td style="padding:8px; border:1px solid #ddd;">q₁</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">q₂</td>
                        <td style="padding:8px; border:1px solid #ddd;">q₂</td>
                        <td style="padding:8px; border:1px solid #ddd;">q₂</td>
                    </tr>
                </table>
                
                <p>→ indicates start state, * indicates accept state(s)</p>
                
                <h4>Advantages of DFA</h4>
                <ul>
                    <li>Easy to implement in hardware/software</li>
                    <li>Fast execution (O(n) time where n is input length)</li>
                    <li>Predictable behavior</li>
                </ul>
                
                <h4>Disadvantages</h4>
                <ul>
                    <li>Can have many states (state explosion)</li>
                    <li>Sometimes harder to design than NFA</li>
                </ul>
            `,
            keyPoints: [
                "DFA: exactly one transition per state-symbol pair",
                "Deterministic = predictable, single path",
                "Transition function: δ: Q × Σ → Q",
                "Represented by transition tables or diagrams",
                "Every DFA is a finite automaton, but not vice versa"
            ]
        },

        {
            title: "2.3 Nondeterministic Finite Automata (NFA)",
            content: `
                <h4>What is an NFA?</h4>
                <p>A Nondeterministic Finite Automaton (NFA) allows multiple possible transitions for the same state and input symbol. It can also have ε-transitions (transitions without consuming input).</p>
                
                <p><strong>Analogy:</strong> An NFA is like a choose-your-own-adventure book - at each step, you might have multiple choices, and if ANY path leads to a happy ending (accept state), the story is good!</p>
                
                <h4>Properties of NFA</h4>
                <ul>
                    <li><strong>Nondeterministic:</strong> From a state, for an input symbol, there can be 0, 1, or multiple transitions</li>
                    <li><strong>ε-transitions:</strong> Can move between states without reading input</li>
                    <li><strong>Multiple paths:</strong> For a given input string, there may be many possible paths</li>
                    <li><strong>Acceptance:</strong> A string is accepted if ANY path leads to an accept state</li>
                </ul>
                
                <h4>Formal Definition of NFA</h4>
                <p>An NFA is a 5-tuple (Q, Σ, δ, q₀, F) where δ: Q × (Σ ∪ {ε}) → P(Q) (maps to a SET of states, i.e., power set of Q)</p>
                
                <p><strong>Note:</strong> The key difference is that δ returns a SET of states, not a single state.</p>
                
                <h4>Example NFA: Accepts strings ending with "00"</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Q = {q₀, q₁, q₂}
Σ = {0,1}
q₀ = q₀
F = {q₂}

δ:
δ(q₀, 0) = {q₀, q₁}  (can stay or move to q₁)
δ(q₀, 1) = {q₀}      (stay)
δ(q₁, 0) = {q₂}      (move to accept)
δ(q₁, 1) = {}        (dead)
δ(q₂, 0) = {q₂}      (stay in accept)
δ(q₂, 1) = {}        (dead)

Accepts: 00, 100, 1100, etc. (any string ending with 00)
                </pre>
                
                <h4>ε-transitions Example</h4>
                <p>An NFA can have transitions on ε (empty string), allowing state changes without consuming input:</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
δ(q₀, ε) = {q₁}  // Can move to q₁ without reading input
                </pre>
                
                <h4>How NFA Processes Input</h4>
                <p>An NFA explores ALL possible paths simultaneously. If ANY path reaches an accept state after consuming all input, the string is accepted.</p>
                
                <h4>Equivalence of DFA and NFA</h4>
                <p><strong>Key Theorem:</strong> For every NFA, there exists an equivalent DFA that recognizes the same language. They have the same expressive power.</p>
                
                <ul>
                    <li>DFA and NFA are equivalent in terms of the languages they can recognize</li>
                    <li>Both recognize exactly the regular languages</li>
                    <li>NFA are often easier to design, but DFA are easier to implement</li>
                    <li>Any NFA can be converted to a DFA using the subset construction algorithm</li>
                </ul>
                
                <div class="key-points-box" style="background:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🔑 Important:</strong> Deterministic FSA and Nondeterministic FSA are equivalent. Both recognize the same class of languages (regular languages).</p>
                </div>
                
                <h4>Comparison: DFA vs NFA</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Feature</th>
                        <th style="padding:10px; border:1px solid #ddd;">DFA</th>
                        <th style="padding:10px; border:1px solid #ddd;">NFA</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Transitions</td>
                        <td style="padding:8px; border:1px solid #ddd;">Exactly one per symbol</td>
                        <td style="padding:8px; border:1px solid #ddd;">Zero, one, or multiple</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">ε-transitions</td>
                        <td style="padding:8px; border:1px solid #ddd;">No</td>
                        <td style="padding:8px; border:1px solid #ddd;">Yes</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Number of paths</td>
                        <td style="padding:8px; border:1px solid #ddd;">Exactly one</td>
                        <td style="padding:8px; border:1px solid #ddd;">Multiple possible</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Ease of design</td>
                        <td style="padding:8px; border:1px solid #ddd;">Sometimes harder</td>
                        <td style="padding:8px; border:1px solid #ddd;">Often easier</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Implementation</td>
                        <td style="padding:8px; border:1px solid #ddd;">Simple</td>
                        <td style="padding:8px; border:1px solid #ddd;">More complex</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "NFA: can have multiple transitions per symbol",
                "Can have ε-transitions (move without input)",
                "Accepts if ANY path reaches accept state",
                "DFA and NFA are equivalent (same expressive power)",
                "DFA and NFA both recognize regular languages",
                "NFA can be converted to DFA (subset construction)"
            ]
        },

        {
            title: "2.4 Regular Expressions",
            content: `
                <h4>What are Regular Expressions?</h4>
                <p>Regular expressions (regex) are algebraic notations for describing patterns in strings. They provide a concise way to define regular languages.</p>
                
                <p><strong>Analogy:</strong> Regular expressions are like a pattern language - they tell you what strings "look like" (e.g., "starts with a, followed by any number of b's, ends with c").</p>
                
                <h4>Regular Expression Operations</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Operation</th>
                        <th style="padding:10px; border:1px solid #ddd;">Notation</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Union</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">R1 | R2 or R1 + R2</td>
                        <td style="padding:8px; border:1px solid #ddd;">Strings in R1 or R2</td>
                        <td style="padding:8px; border:1px solid #ddd;">a|b matches 'a' or 'b'</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Concatenation</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">R1 R2</td>
                        <td style="padding:8px; border:1px solid #ddd;">String from R1 followed by string from R2</td>
                        <td style="padding:8px; border:1px solid #ddd;">ab matches 'ab'</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Kleene Star</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">R*</td>
                        <td style="padding:8px; border:1px solid #ddd;">Zero or more concatenations of R</td>
                        <td style="padding:8px; border:1px solid #ddd;">a* matches ε, a, aa, aaa, ...</td>
                    </tr>
                </table>
                
                <h4>Regular Expression Examples</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Regular Expression</th>
                        <th style="padding:10px; border:1px solid #ddd;">Language Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example Strings</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">0*</td>
                        <td style="padding:8px; border:1px solid #ddd;">Any number of 0's (including empty)</td>
                        <td style="padding:8px; border:1px solid #ddd;">ε, 0, 00, 000</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">0*1*</td>
                        <td style="padding:8px; border:1px solid #ddd;">Any number of 0's followed by any number of 1's</td>
                        <td style="padding:8px; border:1px solid #ddd;">ε, 0, 1, 001, 0111</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">(0|1)*</td>
                        <td style="padding:8px; border:1px solid #ddd;">Any string of 0's and 1's</td>
                        <td style="padding:8px; border:1px solid #ddd;">ε, 0, 1, 01, 1010</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">(a|b)c</td>
                        <td style="padding:8px; border:1px solid #ddd;">'a' or 'b' followed by 'c'</td>
                        <td style="padding:8px; border:1px solid #ddd;">ac, bc</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">0(0|1)*0</td>
                        <td style="padding:8px; border:1px solid #ddd;">Strings starting and ending with 0</td>
                        <td style="padding:8px; border:1px solid #ddd;">00, 010, 0110</td>
                    </tr>
                </table>
                
                <h4>Kleene Star Examples</h4>
                <ul>
                    <li><strong>a*:</strong> {ε, a, aa, aaa, aaaa, ...}</li>
                    <li><strong>(ab)*:</strong> {ε, ab, abab, ababab, ...}</li>
                    <li><strong>(a|b)*:</strong> All strings over {a,b}</li>
                </ul>
                
                <h4>Regular Expression for Specific Languages</h4>
                
                <p><strong>Example 1:</strong> Strings that start with 'ab' and end with 'bba' over {a,b}</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
ab(a+b)*bba
                </pre>
                <p>This matches: abbba, ababba, abaabba, etc.</p>
                
                <p><strong>Example 2:</strong> Strings with at least two 0's over {0,1}</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
(0+1)*0(0+1)*0(0+1)*
                </pre>
                <p>This matches: 00, 010, 100, 0010, etc.</p>
                
                <div class="key-points-box" style="background:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🔑 Important:</strong> Regular expressions describe exactly the same languages as finite automata (regular languages). They are equivalent in expressive power.</p>
                </div>
                
                <h4>Equivalence of Regular Expressions and Finite Automata</h4>
                <ul>
                    <li>Every regular expression can be converted to an equivalent NFA</li>
                    <li>Every NFA can be converted to an equivalent regular expression</li>
                    <li>Thus, regular expressions and finite automata define the same class of languages: the regular languages</li>
                </ul>
            `,
            keyPoints: [
                "Regular expressions = algebraic notation for patterns",
                "Three basic operations: Union (|), Concatenation, Kleene Star (*)",
                "Kleene star = zero or more repetitions",
                "Regular expressions define regular languages",
                "Equivalent to finite automata (can be converted)",
                "Used in text processing, search, validation"
            ]
        },

        {
            title: "2.5 Regular Languages and Their Properties",
            content: `
                <h4>What are Regular Languages?</h4>
                <p>A regular language is a formal language that can be recognized by a finite automaton (DFA or NFA) or described by a regular expression.</p>
                
                <h4>Examples of Regular Languages</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Language</th>
                        <th style="padding:10px; border:1px solid #ddd;">Regular Expression</th>
                        <th style="padding:10px; border:1px solid #ddd;">Regular?</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">All strings over {a,b}</td>
                        <td style="padding:8px; border:1px solid #ddd;">(a|b)*</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Yes</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Strings ending with '00'</td>
                        <td style="padding:8px; border:1px solid #ddd;">(0|1)*00</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Yes</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Strings with even number of 0's</td>
                        <td style="padding:8px; border:1px solid #ddd;">(1*01*01*)*</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Yes</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">{aⁿbⁿ | n ≥ 0}</td>
                        <td style="padding:8px; border:1px solid #ddd;">Cannot be expressed</td>
                        <td style="padding:8px; border:1px solid #ddd;">❌ No (context-free)</td>
                    </tr>
                </table>
                
                <h4>Closure Properties of Regular Languages</h4>
                <p>Regular languages are closed under various operations, meaning applying these operations to regular languages produces another regular language.</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Operation</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Closed?</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Union</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">L₁ ∪ L₂</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Yes</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Intersection</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">L₁ ∩ L₂</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Yes</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Complement</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Σ* - L</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Yes</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Concatenation</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">L₁·L₂</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Yes</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Kleene Star</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">L*</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Yes</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Reversal</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Lᴿ</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Yes</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Difference</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">L₁ - L₂</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Yes</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Homomorphism</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">h(L)</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Yes</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Inverse Homomorphism</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">h⁻¹(L)</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Yes</td>
                    </tr>
                </table>
                
                <p><strong>Note:</strong> Regular languages are closed under almost all common operations!</p>
                
                <h4>Example: Union of Regular Languages</h4>
                <p>If L₁ = {strings ending with '00'} and L₂ = {strings starting with '1'}, then L₁ ∪ L₂ is also regular.</p>
                
                <h4>Example: Intersection of Regular Languages</h4>
                <p>If L₁ = {strings with even number of 0's} and L₂ = {strings of length ≤ 5}, then L₁ ∩ L₂ is regular.</p>
            `,
            keyPoints: [
                "Regular languages = languages recognized by finite automata",
                "Closed under: union, intersection, complement, concatenation, Kleene star, reversal, etc.",
                "Closure properties help prove languages are regular",
                "Regular languages are a small but important class",
                "Not all languages are regular (e.g., {aⁿbⁿ})"
            ]
        },

        {
            title: "2.6 Pumping Lemma for Regular Languages",
            content: `
                <h4>What is the Pumping Lemma?</h4>
                <p>The pumping lemma is a tool used to prove that certain languages are NOT regular. It states that for any regular language, there is a property that all sufficiently long strings in the language must satisfy.</p>
                
                <div class="key-points-box" style="background:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🔑 Pumping Lemma Statement:</strong></p>
                    <p>If L is a regular language, then there exists an integer p ≥ 1 (called the pumping length) such that every string w ∈ L with |w| ≥ p can be written as w = xyz, satisfying:</p>
                    <ol>
                        <li>|xy| ≤ p</li>
                        <li>|y| ≥ 1 (y is not empty)</li>
                        <li>xyⁱz ∈ L for all i ≥ 0</li>
                    </ol>
                    <p>In other words, the substring y can be "pumped" (repeated any number of times) and the resulting string will still be in L.</p>
                </div>
                
                <h4>Understanding the Pumping Lemma</h4>
                <ul>
                    <li><strong>p:</strong> Pumping length (depends on the language)</li>
                    <li><strong>w = xyz:</strong> Any long string can be split into three parts</li>
                    <li><strong>|xy| ≤ p:</strong> The first two parts are within the first p characters</li>
                    <li><strong>|y| ≥ 1:</strong> The middle part is not empty</li>
                    <li><strong>xyⁱz ∈ L:</strong> Repeating y any number of times (including 0) keeps string in L</li>
                </ul>
                
                <h4>Using the Pumping Lemma to Prove Non-Regularity</h4>
                <p>To prove a language L is NOT regular using the pumping lemma, we use proof by contradiction:</p>
                <ol>
                    <li>Assume L is regular</li>
                    <li>Then the pumping lemma applies, so there exists a pumping length p</li>
                    <li>Choose a string w ∈ L with |w| ≥ p that will lead to a contradiction</li>
                    <li>Show that no matter how w is split into xyz (satisfying conditions 1 and 2), condition 3 fails</li>
                    <li>Therefore, our assumption is false, and L is NOT regular</li>
                </ol>
                
                <h4>Example 1: Prove {aⁿbⁿ | n ≥ 0} is not regular</h4>
                
                <p><strong>Step 1:</strong> Assume L = {aⁿbⁿ | n ≥ 0} is regular.</p>
                <p><strong>Step 2:</strong> Let p be the pumping length.</p>
                <p><strong>Step 3:</strong> Choose w = aᵖbᵖ (length 2p ≥ p).</p>
                <p><strong>Step 4:</strong> Consider any split w = xyz with |xy| ≤ p and |y| ≥ 1.</p>
                <p>Since |xy| ≤ p, xy consists only of a's. So y = aᵏ for some k ≥ 1.</p>
                <p><strong>Step 5:</strong> Pump y: xy²z = aᵖ⁺ᵏbᵖ. This has more a's than b's, so it's NOT in L.</p>
                <p><strong>Conclusion:</strong> Contradiction! Therefore, L is NOT regular.</p>
                
                <h4>Example 2: Prove {wwᴿ | w ∈ {a,b}*} is not regular</h4>
                <p>(wwᴿ means w followed by reverse of w, e.g., abba, aabbaa)</p>
                
                <p><strong>Step 1:</strong> Assume L is regular with pumping length p.</p>
                <p><strong>Step 2:</strong> Choose w = aᵖbb aᵖ (this is in L).</p>
                <p><strong>Step 3:</strong> Any split xyz with |xy| ≤ p means xy is in the first group of a's. So y = aᵏ.</p>
                <p><strong>Step 4:</strong> Pumping to xy²z gives aᵖ⁺ᵏbb aᵖ, which is NOT a palindrome (not in L).</p>
                <p><strong>Conclusion:</strong> L is not regular.</p>
                
                <h4>Example 3: Prove {0ᵐ1ⁿ | m ≤ n} is not regular</h4>
                
                <p><strong>Step 1:</strong> Assume regular with pumping length p.</p>
                <p><strong>Step 2:</strong> Choose w = 0ᵖ1ᵖ (satisfies m ≤ n).</p>
                <p><strong>Step 3:</strong> Split xyz with |xy| ≤ p means y is in the 0's.</p>
                <p><strong>Step 4:</strong> Pump down (i=0): xy⁰z has fewer 0's, so m < n still holds? Wait, this might still be in L. Need careful choice.</p>
                <p>Better choice: w = 0ᵖ1ᵖ⁺¹. Then pumping up increases 0's, making m > n, which fails.</p>
                
                <h4>Common Mistakes in Pumping Lemma Proofs</h4>
                <ul>
                    <li>Choosing the wrong string w (must be in L and long enough)</li>
                    <li>Not considering all possible splits (the proof must work for ALL splits)</li>
                    <li>Pumping the wrong part (y must be within first p characters)</li>
                    <li>Using pumping lemma to prove a language IS regular (it can only prove non-regularity)</li>
                </ul>
            `,
            keyPoints: [
                "Pumping lemma proves languages are NOT regular",
                "Uses proof by contradiction",
                "For any regular language, long strings can be pumped",
                "Choose w carefully to create contradiction",
                "Must work for ALL possible splits xyz",
                "Cannot prove a language IS regular (only not regular)"
            ]
        },

        {
            title: "2.7 Applications and Examples",
            content: `
                <h4>Common Regular Languages</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Language Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Regular Expression</th>
                        <th style="padding:10px; border:1px solid #ddd;">DFA States</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">All strings over {0,1}</td>
                        <td style="padding:8px; border:1px solid #ddd;">(0|1)*</td>
                        <td style="padding:8px; border:1px solid #ddd;">1</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Strings ending with 00</td>
                        <td style="padding:8px; border:1px solid #ddd;">(0|1)*00</td>
                        <td style="padding:8px; border:1px solid #ddd;">3</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Strings with even number of 0's</td>
                        <td style="padding:8px; border:1px solid #ddd;">(1*01*01*)*</td>
                        <td style="padding:8px; border:1px solid #ddd;">2</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Strings with at least two 0's</td>
                        <td style="padding:8px; border:1px solid #ddd;">(0|1)*0(0|1)*0(0|1)*</td>
                        <td style="padding:8px; border:1px solid #ddd;">3</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Strings with exactly two 0's</td>
                        <td style="padding:8px; border:1px solid #ddd;">1*01*01*</td>
                        <td style="padding:8px; border:1px solid #ddd;">4</td>
                    </tr>
                </table>
                
                <h4>Converting Regular Expression to NFA</h4>
                <p>There is a systematic method (Thompson's construction) to convert any regular expression to an equivalent NFA:</p>
                
                <ul>
                    <li><strong>For a single symbol 'a':</strong> Create start state → on 'a' → accept state</li>
                    <li><strong>For union R1|R2:</strong> Create new start with ε-transitions to R1 and R2's starts</li>
                    <li><strong>For concatenation R1R2:</strong> Connect accept states of R1 to start of R2 via ε</li>
                    <li><strong>For Kleene star R*:</strong> Add ε-loops back to start</li>
                </ul>
                
                <h4>Converting NFA to DFA (Subset Construction)</h4>
                <ol>
                    <li>Start state of DFA = ε-closure of NFA start state</li>
                    <li>For each DFA state and each input symbol, compute next state as ε-closure of all NFA states reachable</li>
                    <li>Repeat until no new states are added</li>
                    <li>DFA accept states are those containing any NFA accept state</li>
                </ol>
                
                <h4>Practical Applications</h4>
                <ul>
                    <li><strong>Lexical analysis in compilers:</strong> Token recognition using DFA</li>
                    <li><strong>Text search:</strong> grep, sed, awk use regular expressions</li>
                    <li><strong>Input validation:</strong> Email, phone number validation</li>
                    <li><strong>Network protocols:</strong> Pattern matching in packet inspection</li>
                    <li><strong>Digital circuits:</strong> Finite state machines for controllers</li>
                </ul>
            `,
            keyPoints: [
                "Regular languages have many practical applications",
                "Regular expressions → NFA → DFA conversion is systematic",
                "DFA are used in compilers for lexical analysis",
                "Regular expressions are used in text processing tools",
                "Understanding finite automata helps build real systems"
            ]
        }
    ],

    summary: `
        <h3>Chapter 2 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Finite Automata:</strong> 5-tuple (Q, Σ, δ, q₀, F) - simplest computation model</li>
            <li><strong>DFA:</strong> Deterministic - exactly one transition per symbol - δ: Q × Σ → Q</li>
            <li><strong>NFA:</strong> Nondeterministic - can have multiple transitions, ε-transitions - δ: Q × (Σ ∪ {ε}) → P(Q)</li>
            <li><strong>DFA and NFA are equivalent:</strong> Both recognize exactly the regular languages</li>
            <li><strong>Regular Expressions:</strong> Algebraic notation for patterns - use union, concatenation, Kleene star (*)</li>
            <li><strong>Regular Languages:</strong> Closed under union, intersection, complement, concatenation, star, reversal</li>
            <li><strong>Pumping Lemma:</strong> Used to prove languages are NOT regular</li>
            <li><strong>Applications:</strong> Compilers, text processing, validation, digital circuits</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What are the five components of a finite automaton?",
            answer: "Q (states), Σ (alphabet), δ (transition function), q₀ (start state), F (accept states) - a 5-tuple."
        },
        {
            question: "What is the difference between DFA and NFA?",
            answer: "DFA has exactly one transition per state-symbol pair; NFA can have 0, 1, or multiple, and can have ε-transitions. They are equivalent in power."
        },
        {
            question: "Write a regular expression for strings over {0,1} that start and end with 0.",
            answer: "0(0|1)*0"
        },
        {
            question: "Prove that {aⁿbⁿ | n ≥ 0} is not regular using the pumping lemma.",
            answer: "Assume regular with pumping length p. Choose w = aᵖbᵖ. Any split with |xy| ≤ p puts y in a's. Pumping to xy²z gives aᵖ⁺ᵏbᵖ ∉ L. Contradiction."
        },
        {
            question: "List three closure properties of regular languages.",
            answer: "Union, intersection, complement, concatenation, Kleene star, reversal (any three)."
        },
        {
            question: "What is the Kleene star of a language L?",
            answer: "L* = {ε} ∪ L ∪ LL ∪ LLL ∪ ... (zero or more concatenations of strings from L)"
        }
    ],

    quickTips: [
        "Remember: FA = 5-tuple (Q, Σ, δ, q₀, F)",
        "DFA: δ returns ONE state, NFA: δ returns SET of states",
        "DFA and NFA are EQUIVALENT (same power)",
        "Regular expressions: * = zero or more, + = one or more, ? = zero or one",
        "Pumping lemma only proves languages are NOT regular",
        "Choose w carefully for pumping lemma proofs"
    ],

    commonMistakes: [
        "❌ Thinking NFA is more powerful than DFA - they are equivalent!",
        "❌ Forgetting that ε is the empty string, not a symbol",
        "❌ Using pumping lemma to prove a language IS regular - it can't",
        "❌ Not considering all possible splits in pumping lemma proofs",
        "❌ Confusing Kleene star (*) with concatenation"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 2:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>1 question</strong> at the <strong>Understand</strong> level.</p>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>DFA and NFA:</strong> Definitions, differences, and equivalence</li>
            <li><strong>Regular expressions:</strong> Writing and interpreting them</li>
            <li><strong>Regular languages:</strong> Properties and examples</li>
            <li><strong>Pumping lemma:</strong> Understanding how it works</li>
        </ol>
        
        <h4>What "Understand" Means:</h4>
        <p>You need to be able to explain the concepts, write regular expressions, and understand the relationship between DFAs, NFAs, and regular expressions.</p>
        
        <h4>Practice Questions:</h4>
        <ul>
            <li>Explain the difference between DFA and NFA. Why are they considered equivalent?</li>
            <li>Write a regular expression for the language of all strings over {0,1} with an even number of 0's.</li>
            <li>What does it mean for regular languages to be closed under union? Give an example.</li>
            <li>Describe the pumping lemma and what it is used for.</li>
        </ul>
    `
};