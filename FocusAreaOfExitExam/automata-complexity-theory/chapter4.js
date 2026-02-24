// ===============================
// FOCUS AREA: AUTOMATA AND COMPLEXITY THEORY - CHAPTER 4
// Turing Machines and Recursively Enumerable Languages
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaAutomataChapter4 = {
    title: "Chapter 4: Turing Machines and Recursively Enumerable Languages",
    
    // Blueprint alignment: 1 question (Understand)
    blueprint: {
        totalQuestions: 1,
        cognitiveLevels: {
            understand: 1
        },
        topics: [
            "Turing Machines (definition and operation)",
            "Recursively Enumerable and Recursive languages",
            "Decidability and undecidability",
            "Church-Turing Thesis",
            "Halting Problem"
        ]
    },

    learningObjectives: [
        "Understand the definition and components of Turing Machines",
        "Explain the difference between Recursive and Recursively Enumerable languages",
        "Understand the Church-Turing Thesis and its implications",
        "Comprehend the concept of decidability and undecidability",
        "Understand the Halting Problem and why it's undecidable"
    ],

    sections: [
        {
            title: "4.1 Introduction to Turing Machines",
            content: `
                <h4>What is a Turing Machine?</h4>
                <p>A Turing Machine (TM) is the most powerful computational model. It consists of an infinite tape, a read/write head, and a finite state control. Turing machines can perform any computation that a real computer can do.</p>
                
                <p><strong>Analogy:</strong> Imagine a person with a pencil and an infinite roll of paper, following a set of rules. They can read what's written, erase it, write new symbols, and move left or right along the paper. This is essentially a Turing machine!</p>
                
                <h4>Why Turing Machines?</h4>
                <ul>
                    <li><strong>Model of general computation:</strong> Can compute anything computable</li>
                    <li><strong>Definition of algorithm:</strong> What can be computed by a Turing machine is considered computable</li>
                    <li><strong>Limits of computation:</strong> Helps understand what problems cannot be solved</li>
                    <li><strong>Foundation of complexity theory:</strong> Basis for defining complexity classes</li>
                </ul>
                
                <h4>Formal Definition of a Turing Machine</h4>
                <p>A Turing Machine is defined as a <strong>7-tuple</strong>: (Q, Σ, Γ, δ, q₀, q_accept, q_reject) where:</p>
                
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
                        <td style="padding:8px; border:1px solid #ddd;">Symbols that can appear in the initial input</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Tape Alphabet</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Γ</td>
                        <td style="padding:8px; border:1px solid #ddd;">Symbols that can be written on tape (Σ ⊂ Γ, includes blank symbol ⊔)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Transition Function</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">δ</td>
                        <td style="padding:8px; border:1px solid #ddd;">δ: Q × Γ → Q × Γ × {L, R}</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Start State</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">q₀</td>
                        <td style="padding:8px; border:1px solid #ddd;">Initial state</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Accept State</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">q_accept</td>
                        <td style="padding:8px; border:1px solid #ddd;">Halting state indicating acceptance</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Reject State</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">q_reject</td>
                        <td style="padding:8px; border:1px solid #ddd;">Halting state indicating rejection</td>
                    </tr>
                </table>
                
                <div class="key-points-box" style="background:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🔑 Important:</strong> A Turing Machine is formally defined as a <strong>7-tuple</strong>. The transition function δ determines the machine's behavior based on current state and tape symbol.</p>
                </div>
                
                <h4>How a Turing Machine Works</h4>
                <ol>
                    <li>The tape is infinite in both directions (or one direction with infinite extension)</li>
                    <li>The tape head reads the current symbol</li>
                    <li>Based on current state and read symbol, the machine:
                        <ul>
                            <li>Writes a new symbol (or same symbol)</li>
                            <li>Moves the head Left or Right</li>
                            <li>Changes to a new state</li>
                        </ul>
                    </li>
                    <li>If machine enters q_accept, input is ACCEPTED</li>
                    <li>If machine enters q_reject, input is REJECTED</li>
                    <li>Machine may run forever (never halt) - then input is NOT accepted</li>
                </ol>
                
                <h4>Example: Turing Machine for {aⁿbⁿ}</h4>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Strategy: Mark matched a's and b's

Q = {q₀, q₁, q₂, q₃, q₄, q_accept, q_reject}
Σ = {a, b}
Γ = {a, b, X, Y, ⊔} (X marks matched a, Y marks matched b)

Transitions (simplified):
1. q₀, a → q₁, X, R     // Mark first a with X
2. q₁, a → q₁, a, R     // Skip to end
3. q₁, b → q₂, Y, L     // Mark b with Y, go left
4. q₂, a → q₂, a, L     // Go left to find X
5. q₂, X → q₀, X, R     // Found marked a, repeat
6. q₀, Y → q₃, Y, R     // No more a's, check remaining
7. q₃, Y → q₃, Y, R     // Skip marked b's
8. q₃, ⊔ → q_accept, ⊔, R  // Blank means all matched
                </pre>
                
                <p>This TM accepts strings like aabb, aaabbb, etc., and rejects others.</p>
            `,
            keyPoints: [
                "Turing Machine = 7-tuple (Q, Σ, Γ, δ, q₀, q_accept, q_reject)",
                "Has infinite tape, read/write head",
                "δ: Q × Γ → Q × Γ × {L, R}",
                "Can compute anything computable",
                "Most powerful automaton model",
                "Accepts recursively enumerable languages"
            ]
        },

        {
            title: "4.2 Turing Machine Variants",
            content: `
                <h4>Variants of Turing Machines</h4>
                <p>Several variations of Turing machines exist, but they are all equivalent in power (they compute the same class of languages).</p>
                
                <h4>1. Multi-tape Turing Machines</h4>
                <ul>
                    <li>Have multiple tapes with independent read/write heads</li>
                    <li>Can read from and write to multiple tapes simultaneously</li>
                    <li>Easier to program but not more powerful than single-tape TMs</li>
                    <li>Any multi-tape TM can be simulated by a single-tape TM</li>
                </ul>
                
                <h4>2. Nondeterministic Turing Machines</h4>
                <ul>
                    <li>Can have multiple possible transitions from a configuration</li>
                    <li>Accepts if ANY path leads to accept state</li>
                    <li>Nondeterminism does NOT add power for Turing machines</li>
                    <li>Any NTM can be simulated by a deterministic TM (exponential slowdown)</li>
                </ul>
                
                <h4>3. Turing Machines with Two-Way Infinite Tape</h4>
                <ul>
                    <li>Tape infinite in both directions (our definition already uses this)</li>
                    <li>Equivalent to one-way infinite tape with different encoding</li>
                </ul>
                
                <h4>4. Multi-dimensional Turing Machines</h4>
                <ul>
                    <li>Tape is 2D or 3D grid</li>
                    <li>Still equivalent to standard Turing machines</li>
                </ul>
                
                <h4>5. Random Access Turing Machines</h4>
                <ul>
                    <li>Can access memory by address (like real computers)</li>
                    <li>Still equivalent to standard TMs (polynomial time relationship)</li>
                </ul>
                
                <div class="key-points-box" style="background:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🔑 Important:</strong> All these variants are <strong>equivalent in power</strong>. They all recognize exactly the class of recursively enumerable languages.</p>
                </div>
                
                <h4>Why Variants Matter</h4>
                <ul>
                    <li>Different variants make programming easier</li>
                    <li>Used in proofs and constructions</li>
                    <li>Show robustness of the Turing machine model</li>
                </ul>
            `,
            keyPoints: [
                "Multi-tape TMs are equivalent to single-tape TMs",
                "Nondeterministic TMs are equivalent to deterministic TMs",
                "All variants have same computational power",
                "Variants make programming/design easier",
                "Robustness of Turing machine model"
            ]
        },

        {
            title: "4.3 Recursively Enumerable and Recursive Languages",
            content: `
                <h4>Recursively Enumerable Languages (RE)</h4>
                <p>A language L is recursively enumerable (RE) if there exists a Turing machine that accepts every string in L and either rejects or loops forever on strings not in L.</p>
                
                <p><strong>Also called:</strong> Turing-recognizable languages</p>
                
                <h4>Recursive Languages (R)</h4>
                <p>A language L is recursive (or decidable) if there exists a Turing machine that accepts every string in L and rejects every string not in L (always halts).</p>
                
                <p><strong>Also called:</strong> Turing-decidable languages</p>
                
                <h4>Comparison: RE vs Recursive</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Property</th>
                        <th style="padding:10px; border:1px solid #ddd;">Recursive (Decidable)</th>
                        <th style="padding:10px; border:1px solid #ddd;">Recursively Enumerable (Recognizable)</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">TM for strings in L</td>
                        <td style="padding:8px; border:1px solid #ddd;">Halts and accepts</td>
                        <td style="padding:8px; border:1px solid #ddd;">Halts and accepts</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">TM for strings not in L</td>
                        <td style="padding:8px; border:1px solid #ddd;">Halts and rejects</td>
                        <td style="padding:8px; border:1px solid #ddd;">May loop forever</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Decision problem</td>
                        <td style="padding:8px; border:1px solid #ddd;">Decidable</td>
                        <td style="padding:8px; border:1px solid #ddd;">Semi-decidable</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Complement</td>
                        <td style="padding:8px; border:1px solid #ddd;">Also recursive</td>
                        <td style="padding:8px; border:1px solid #ddd;">May not be RE</td>
                    </tr>
                </table>
                
                <h4>Relationship: Recursive ⊂ Recursively Enumerable</h4>
                <ul>
                    <li>Every recursive language is recursively enumerable</li>
                    <li>But not every RE language is recursive</li>
                    <li>There exist languages that are RE but not recursive (e.g., Halting Problem language)</li>
                </ul>
                
                <h4>Examples</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Language</th>
                        <th style="padding:10px; border:1px solid #ddd;">Class</th>
                        <th style="padding:10px; border:1px solid #ddd;">Reason</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">{aⁿbⁿ | n ≥ 0}</td>
                        <td style="padding:8px; border:1px solid #ddd;">Recursive</td>
                        <td style="padding:8px; border:1px solid #ddd;">TM can decide (always halts)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">{w w | w ∈ {a,b}*}</td>
                        <td style="padding:8px; border:1px solid #ddd;">Recursive</td>
                        <td style="padding:8px; border:1px solid #ddd;">Decidable</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Halting Problem</td>
                        <td style="padding:8px; border:1px solid #ddd;">RE but not recursive</td>
                        <td style="padding:8px; border:1px solid #ddd;">Can recognize but not decide</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Complement of Halting Problem</td>
                        <td style="padding:8px; border:1px solid #ddd;">Not RE</td>
                        <td style="padding:8px; border:1px solid #ddd;">Not even recognizable</td>
                    </tr>
                </table>
                
                <h4>Closure Properties</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Operation</th>
                        <th style="padding:10px; border:1px solid #ddd;">Recursive</th>
                        <th style="padding:10px; border:1px solid #ddd;">RE</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Union</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Closed</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Closed</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Intersection</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Closed</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Closed</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Complement</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Closed</td>
                        <td style="padding:8px; border:1px solid #ddd;">❌ Not closed</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Recursive (R): TM always halts (decides)",
                "Recursively Enumerable (RE): TM accepts if in L, may loop if not",
                "R ⊂ RE (every recursive is RE, but not vice versa)",
                "Complement of RE language may not be RE",
                "Halting Problem is RE but not recursive"
            ]
        },

        {
            title: "4.4 The Church-Turing Thesis",
            content: `
                <h4>What is the Church-Turing Thesis?</h4>
                <p>The Church-Turing thesis states that any function that can be computed by an algorithm (in the intuitive sense) can be computed by a Turing machine.</p>
                
                <p><strong>Informally:</strong> "Turing machines capture exactly what it means to compute."</p>
                
                <h4>Key Points</h4>
                <ul>
                    <li><strong>It's a thesis, not a theorem:</strong> Cannot be proven mathematically</li>
                    <li><strong>Widely accepted:</strong> No counterexample has been found</li>
                    <li><strong>Equivalence:</strong> All reasonable models of computation are equivalent to Turing machines</li>
                    <li><strong>λ-calculus, partial recursive functions, Post systems</strong> are all equivalent to TMs</li>
                </ul>
                
                <h4>Evidence for the Thesis</h4>
                <ul>
                    <li>All known models of computation (λ-calculus, μ-recursive functions, etc.) are equivalent</li>
                    <li>No one has found a function that is intuitively computable but not Turing-computable</li>
                    <li>Turing machines can simulate any real computer (given unlimited memory)</li>
                </ul>
                
                <h4>Implications</h4>
                <ul>
                    <li>Defines the limits of computation: what cannot be done by a Turing machine cannot be done by any computer</li>
                    <li>Establishes Turing machines as the standard model for studying computability</li>
                    <li>Basis for the P vs NP question and complexity theory</li>
                </ul>
                
                <div class="key-points-box" style="background:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🔑 Important:</strong> The Church-Turing thesis asserts that Turing machines capture the intuitive notion of "computable." It's a thesis, not a provable theorem.</p>
                </div>
            `,
            keyPoints: [
                "Church-Turing thesis: TM = intuitive notion of computation",
                "Not provable, but widely accepted",
                "All reasonable computation models are equivalent",
                "Defines limits of computation",
                "No counterexample found"
            ]
        },

        {
            title: "4.5 Decidability and Undecidability",
            content: `
                <h4>What is Decidability?</h4>
                <p>A problem is decidable if there exists a Turing machine that always halts and correctly answers "yes" or "no" for every input instance.</p>
                
                <p><strong>Also called:</strong> Recursive languages</p>
                
                <h4>Decidable Problems (Examples)</h4>
                <ul>
                    <li><strong>DFA acceptance:</strong> Given a DFA and a string, does the DFA accept?</li>
                    <li><strong>CFG emptiness:</strong> Given a CFG, does it generate any strings?</li>
                    <li><strong>Primality testing:</strong> Is a given number prime?</li>
                    <li><strong>Graph connectivity:</strong> Is a graph connected?</li>
                </ul>
                
                <h4>Undecidable Problems</h4>
                <p>A problem is undecidable if there is no Turing machine that always halts and correctly answers for all inputs.</p>
                
                <h4>Examples of Undecidable Problems</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Problem</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Halting Problem</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Given a program and input, does it halt?</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Post Correspondence Problem</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Matching sequences of tiles</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>CFG Ambiguity</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Is a given CFG ambiguous?</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Hilbert's 10th Problem</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Integer solutions to Diophantine equations</td>
                    </tr>
                </table>
                
                <h4>Properties of Undecidable Problems</h4>
                <ul>
                    <li>They are not recursive languages</li>
                    <li>Some are recursively enumerable (like Halting Problem)</li>
                    <li>Some are not even RE (complement of Halting Problem)</li>
                    <li>Undecidable for Turing machines means undecidable for any computer</li>
                </ul>
            `,
            keyPoints: [
                "Decidable: TM always halts with correct answer",
                "Undecidable: No TM always halts with correct answer",
                "Halting Problem is the classic undecidable problem",
                "Many practical problems are undecidable",
                "Undecidable for TM = undecidable for all computers"
            ]
        },

        {
            title: "4.6 The Halting Problem",
            content: `
                <h4>What is the Halting Problem?</h4>
                <p>The Halting Problem asks: Given a description of a program (or Turing machine) and its input, determine whether the program will eventually halt or run forever.</p>
                
                <p><strong>Formally:</strong> HALT = { ⟨M, w⟩ | M is a Turing machine and M halts on input w }</p>
                
                <h4>Why It's Important</h4>
                <ul>
                    <li>First problem proven undecidable (by Alan Turing, 1936)</li>
                    <li>Shows fundamental limits of computation</li>
                    <li>Many other undecidable problems reduce to Halting Problem</li>
                </ul>
                
                <h4>Proof that Halting Problem is Undecidable</h4>
                
                <p><strong>Proof by contradiction:</strong></p>
                
                <ol>
                    <li>Assume there exists a Turing machine H that decides the Halting Problem:
                        <ul>
                            <li>H(⟨M, w⟩) accepts if M halts on w</li>
                            <li>H(⟨M, w⟩) rejects if M loops on w</li>
                        </ul>
                    </li>
                    <li>Construct a new machine D that uses H as a subroutine:
                        <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
D(⟨M⟩):
    Run H(⟨M, ⟨M⟩⟩)
    if H accepts, then loop forever
    if H rejects, then halt and accept
                        </pre>
                    </li>
                    <li>Now consider D(⟨D⟩):
                        <ul>
                            <li>If D halts on input ⟨D⟩, then H(⟨D, ⟨D⟩⟩) accepts, so D loops forever (contradiction)</li>
                            <li>If D loops on input ⟨D⟩, then H(⟨D, ⟨D⟩⟩) rejects, so D halts (contradiction)</li>
                        </ul>
                    </li>
                    <li>Both cases lead to contradiction, so H cannot exist!</li>
                </ol>
                
                <div class="key-points-box" style="background:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🔑 Important:</strong> The Halting Problem is <strong>undecidable</strong> - there is no algorithm that can determine for all programs whether they halt.</p>
                </div>
                
                <h4>Understanding the Proof</h4>
                <p>The proof uses a clever self-reference (diagonalization) similar to:</p>
                <ul>
                    <li>"This statement is false" (liar paradox)</li>
                    <li>The machine D asks: "Does the Halting Problem say I halt on myself?" and does the opposite</li>
                </ul>
                
                <h4>Implications</h4>
                <ul>
                    <li>We cannot write a program that checks if any program has bugs (infinite loops)</li>
                    <li>Many other problems are undecidable by reduction to Halting Problem</li>
                    <li>Shows that there are limits to what computers can do</li>
                </ul>
                
                <h4>When an input will be accepted by a Turing Machine?</h4>
                <p>An input is accepted by a Turing Machine <strong>if the machine halts in a final (accept) state</strong>. The machine may also reject by halting in a reject state, or loop forever (which means not accepted).</p>
            `,
            keyPoints: [
                "Halting Problem: Will program M halt on input w?",
                "Proved undecidable by Alan Turing",
                "Proof uses diagonalization and self-reference",
                "No algorithm can solve Halting Problem",
                "Many other problems are undecidable by reduction",
                "Input accepted if TM halts in accept state"
            ]
        },

        {
            title: "4.7 Reduction and Undecidability",
            content: `
                <h4>What is Reduction?</h4>
                <p>Reduction is a technique to prove that a problem is undecidable by showing that if it were decidable, then another known undecidable problem (like Halting Problem) would also be decidable.</p>
                
                <p><strong>Analogy:</strong> If solving problem A would allow us to solve problem B, and we know B is impossible, then A must also be impossible.</p>
                
                <h4>Reduction Notation</h4>
                <p>We write A ≤ B to mean "A reduces to B" - if B is decidable, then A is decidable. Conversely, if A is undecidable, then B is undecidable.</p>
                
                <h4>Common Undecidable Problems (Proved by Reduction)</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Problem</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Reduction From</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Halting Problem</td>
                        <td style="padding:8px; border:1px solid #ddd;">Does M halt on w?</td>
                        <td style="padding:8px; border:1px solid #ddd;">(original)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Acceptance Problem</td>
                        <td style="padding:8px; border:1px solid #ddd;">Does M accept w?</td>
                        <td style="padding:8px; border:1px solid #ddd;">Halting Problem</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Empty Language Problem</td>
                        <td style="padding:8px; border:1px solid #ddd;">Does TM accept no strings?</td>
                        <td style="padding:8px; border:1px solid #ddd;">Halting Problem</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Equivalence Problem</td>
                        <td style="padding:8px; border:1px solid #ddd;">Do two TMs accept same language?</td>
                        <td style="padding:8px; border:1px solid #ddd;">Halting Problem</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">CFG Ambiguity</td>
                        <td style="padding:8px; border:1px solid #ddd;">Is a CFG ambiguous?</td>
                        <td style="padding:8px; border:1px solid #ddd;">Post Correspondence</td>
                    </tr>
                </table>
                
                <h4>Example Reduction: Acceptance to Halting</h4>
                <p>To prove Acceptance Problem is undecidable, reduce Halting Problem to it:</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Given ⟨M, w⟩ for Halting Problem, construct M' that:
1. Runs M on w
2. If M halts, M' accepts (regardless of what M did)
3. If M loops, M' loops

Then: M halts on w ⇔ M' accepts w
                </pre>
                
                <p>If Acceptance were decidable, we could decide Halting. Since Halting is undecidable, Acceptance must also be undecidable.</p>
                
                <h4>Properties of Reductions</h4>
                <ul>
                    <li>If A ≤ B and B is decidable, then A is decidable</li>
                    <li>If A ≤ B and A is undecidable, then B is undecidable</li>
                    <li>Reduction must be computable (can be done by TM)</li>
                </ul>
            `,
            keyPoints: [
                "Reduction: Convert problem A to problem B",
                "If B decidable, then A decidable",
                "If A undecidable, then B undecidable",
                "Many problems reduce from Halting Problem",
                "Used to prove undecidability"
            ]
        },

        {
            title: "4.8 Summary of Language Classes",
            content: `
                <h4>The Big Picture</h4>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">LANGUAGE CLASS HIERARCHY</p>
                    <pre style="text-align:center;">
Recursively Enumerable (RE)
    ↑
Recursive (R)
    ↑
Context-Sensitive (CS)
    ↑
Context-Free (CF)
    ↑
Regular (Reg)
                    </pre>
                </div>
                
                <h4>Comparison of Language Classes</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Class</th>
                        <th style="padding:10px; border:1px solid #ddd;">Automaton</th>
                        <th style="padding:10px; border:1px solid #ddd;">Grammar Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Memory</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Regular</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Finite Automata</td>
                        <td style="padding:8px; border:1px solid #ddd;">Type 3</td>
                        <td style="padding:8px; border:1px solid #ddd;">None (finite states)</td>
                        <td style="padding:8px; border:1px solid #ddd;">aⁿ</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Context-Free</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Pushdown Automata</td>
                        <td style="padding:8px; border:1px solid #ddd;">Type 2</td>
                        <td style="padding:8px; border:1px solid #ddd;">Stack</td>
                        <td style="padding:8px; border:1px solid #ddd;">aⁿbⁿ</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Context-Sensitive</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Linear Bounded</td>
                        <td style="padding:8px; border:1px solid #ddd;">Type 1</td>
                        <td style="padding:8px; border:1px solid #ddd;">Linear bounded tape</td>
                        <td style="padding:8px; border:1px solid #ddd;">aⁿbⁿcⁿ</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Recursive</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Turing Machine (halts)</td>
                        <td style="padding:8px; border:1px solid #ddd;">-</td>
                        <td style="padding:8px; border:1px solid #ddd;">Infinite tape</td>
                        <td style="padding:8px; border:1px solid #ddd;">Many problems</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>RE</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Turing Machine</td>
                        <td style="padding:8px; border:1px solid #ddd;">Type 0</td>
                        <td style="padding:8px; border:1px solid #ddd;">Infinite tape</td>
                        <td style="padding:8px; border:1px solid #ddd;">Halting Problem</td>
                    </tr>
                </table>
                
                <h4>Key Relationships</h4>
                <ul>
                    <li><strong>Regular ⊂ Context-Free ⊂ Context-Sensitive ⊂ Recursive ⊂ RE</strong></li>
                    <li>Each level is strictly more powerful than the previous</li>
                    <li>There exist languages in each level not in lower levels</li>
                    <li>Recursive languages are decidable (TM always halts)</li>
                    <li>RE languages are recognizable (TM may loop for non-members)</li>
                </ul>
                
                <h4>Important Facts to Remember</h4>
                <ul>
                    <li>DFA and NFA are equivalent (same power)</li>
                    <li>PDA are more powerful than FA (can recognize aⁿbⁿ)</li>
                    <li>Turing machines are most powerful (can compute anything computable)</li>
                    <li>Halting Problem is undecidable (RE but not recursive)</li>
                    <li>Church-Turing thesis: TM = intuitive notion of computation</li>
                </ul>
            `,
            keyPoints: [
                "Language hierarchy: Regular ⊂ CF ⊂ CS ⊂ Recursive ⊂ RE",
                "Each level has more computational power",
                "Turing machines define the limits of computation",
                "Recursive = decidable, RE = recognizable",
                "Halting Problem is the classic undecidable problem"
            ]
        }
    ],

    summary: `
        <h3>Chapter 4 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Turing Machine:</strong> 7-tuple (Q, Σ, Γ, δ, q₀, q_accept, q_reject) - most powerful automaton</li>
            <li><strong>TM Operation:</strong> Reads symbol, writes new symbol, moves L/R, changes state</li>
            <li><strong>Recursive (R):</strong> TM always halts (decidable languages)</li>
            <li><strong>Recursively Enumerable (RE):</strong> TM accepts if in L, may loop if not (recognizable)</li>
            <li><strong>Church-Turing Thesis:</strong> TM = intuitive notion of computation (thesis, not theorem)</li>
            <li><strong>Decidable:</strong> Problem can be solved by TM that always halts</li>
            <li><strong>Undecidable:</strong> No TM always halts with correct answer</li>
            <li><strong>Halting Problem:</strong> Undecidable (proved by diagonalization)</li>
            <li><strong>Reduction:</strong> Proves undecidability by reducing known undecidable problem</li>
            <li><strong>Input accepted:</strong> If TM halts in accept state</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What are the seven components of a Turing Machine?",
            answer: "Q (states), Σ (input alphabet), Γ (tape alphabet), δ (transition function), q₀ (start state), q_accept (accept state), q_reject (reject state)"
        },
        {
            question: "What is the difference between Recursive and Recursively Enumerable languages?",
            answer: "Recursive languages have a TM that always halts (decides). RE languages have a TM that accepts strings in L but may loop forever on strings not in L."
        },
        {
            question: "Explain the Church-Turing Thesis.",
            answer: "The Church-Turing thesis states that any function that can be computed by an algorithm can be computed by a Turing machine. It's a thesis (not provable) but widely accepted."
        },
        {
            question: "What is the Halting Problem and why is it important?",
            answer: "The Halting Problem asks whether a given program halts on a given input. It was the first problem proven undecidable, showing fundamental limits of computation."
        },
        {
            question: "When is an input accepted by a Turing Machine?",
            answer: "An input is accepted if the Turing machine halts in a final (accept) state."
        },
        {
            question: "What is reduction and how is it used to prove undecidability?",
            answer: "Reduction transforms one problem into another. If problem A reduces to problem B and A is undecidable, then B must also be undecidable."
        }
    ],

    quickTips: [
        "TM = 7-tuple (Q, Σ, Γ, δ, q₀, q_accept, q_reject)",
        "Recursive = always halts, RE = may loop",
        "Halting Problem is undecidable (classic proof)",
        "Church-Turing thesis: TM = computable",
        "Reduction: A ≤ B means if B decidable, A decidable",
        "Input accepted if TM halts in accept state"
    ],

    commonMistakes: [
        "❌ Thinking TM can have only finite tape - it's infinite!",
        "❌ Confusing Recursive and RE - Recursive always halts",
        "❌ Believing Halting Problem is decidable - it's not!",
        "❌ Thinking Church-Turing thesis is a theorem - it's a thesis",
        "❌ Forgetting that TM variants are equivalent in power"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 4:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>1 question</strong> at the <strong>Understand</strong> level.</p>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>Turing Machines:</strong> Definition, components, operation</li>
            <li><strong>Recursive vs RE:</strong> Difference and examples</li>
            <li><strong>Church-Turing Thesis:</strong> Meaning and implications</li>
            <li><strong>Halting Problem:</strong> Statement and undecidability</li>
            <li><strong>Input acceptance:</strong> When TM accepts input</li>
        </ol>
        
        <h4>What "Understand" Means:</h4>
        <p>You need to be able to explain these concepts clearly, understand the implications, and know the key definitions and theorems.</p>
        
        <h4>Practice Questions:</h4>
        <ul>
            <li>Explain the components of a Turing Machine and how it operates.</li>
            <li>What is the difference between Recursive and Recursively Enumerable languages?</li>
            <li>State the Church-Turing Thesis and explain its significance.</li>
            <li>Describe the Halting Problem and why it is undecidable.</li>
            <li>When will an input be accepted by a Turing Machine?</li>
        </ul>
    `
};