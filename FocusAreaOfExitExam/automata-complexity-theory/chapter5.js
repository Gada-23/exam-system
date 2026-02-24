// ===============================
// FOCUS AREA: AUTOMATA AND COMPLEXITY THEORY - CHAPTER 5
// Complexity Theory: P, NP, and Beyond
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaAutomataChapter5 = {
    title: "Chapter 5: Complexity Theory: P, NP, and Beyond",
    
    // Blueprint alignment: 1 question (Understand)
    blueprint: {
        totalQuestions: 1,
        cognitiveLevels: {
            understand: 1
        },
        topics: [
            "Complexity classes",
            "P, NP, PSPACE",
            "Reductions",
            "Hardness and completeness",
            "Hierarchy relationships"
        ]
    },

    learningObjectives: [
        "Understand the concept of complexity classes",
        "Define and differentiate P, NP, and PSPACE",
        "Explain polynomial-time reductions",
        "Understand NP-hardness and NP-completeness",
        "Describe relationships between complexity classes"
    ],

    sections: [
        {
            title: "5.1 Introduction to Complexity Theory",
            content: `
                <h4>What is Complexity Theory?</h4>
                <p>Complexity theory studies the resources required to solve computational problems, primarily time (number of steps) and space (amount of memory). It classifies problems based on how difficult they are to solve.</p>
                
                <p><strong>Key Questions:</strong></p>
                <ul>
                    <li>How much time does an algorithm need?</li>
                    <li>How much memory does it require?</li>
                    <li>Which problems are "easy" (polynomial time) and which are "hard" (exponential time)?</li>
                    <li>What is the relationship between different complexity classes?</li>
                </ul>
                
                <h4>Why Complexity Theory Matters</h4>
                <ul>
                    <li><strong>Practical algorithm design:</strong> Helps choose efficient algorithms</li>
                    <li><strong>Problem classification:</strong> Identifies inherently hard problems</li>
                    <li><strong>Cryptography:</strong> Relies on existence of hard problems</li>
                    <li><strong>Theoretical foundations:</strong> Understanding limits of computation</li>
                </ul>
                
                <h4>Time vs Space Complexity</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Resource</th>
                        <th style="padding:10px; border:1px solid #ddd;">Measures</th>
                        <th style="padding:10px; border:1px solid #ddd;">Class Examples</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Time Complexity</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Number of steps/operations</td>
                        <td style="padding:8px; border:1px solid #ddd;">P, NP, EXP</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Space Complexity</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Amount of memory used</td>
                        <td style="padding:8px; border:1px solid #ddd;">L, PSPACE, EXPSPACE</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Complexity theory studies time and space requirements",
                "Classifies problems as easy or hard",
                "Important for algorithm design and cryptography",
                "Time complexity: number of steps",
                "Space complexity: amount of memory"
            ]
        },

        {
            title: "5.2 The Class P: Polynomial Time",
            content: `
                <h4>What is Class P?</h4>
                <p>P (Polynomial time) is the class of languages (problems) that can be decided by a deterministic Turing machine in polynomial time. These are considered "efficiently solvable" problems.</p>
                
                <p><strong>Formal definition:</strong> P = ⋃_{k≥0} TIME(nᵏ)</p>
                
                <h4>Characteristics of P</h4>
                <ul>
                    <li><strong>Efficient:</strong> Running time grows as n, n², n³, etc.</li>
                    <li><strong>Tractable:</strong> Problems we can solve for reasonably large inputs</li>
                    <li><strong>Closed under composition:</strong> Combining polynomial-time algorithms stays in P</li>
                </ul>
                
                <h4>Examples of Problems in P</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Problem</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Algorithm</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Sorting</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Arrange list in order</td>
                        <td style="padding:8px; border:1px solid #ddd;">O(n log n)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Shortest Path</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Find shortest route in graph</td>
                        <td style="padding:8px; border:1px solid #ddd;">Dijkstra O(V²)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Minimum Spanning Tree</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Connect all nodes with minimum total weight</td>
                        <td style="padding:8px; border:1px solid #ddd;">Prim/Kruskal O(E log V)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Primality Testing</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Is a number prime?</td>
                        <td style="padding:8px; border:1px solid #ddd;">AKS algorithm (2004)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Context-Free Grammar Parsing</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Does a CFG generate a string?</td>
                        <td style="padding:8px; border:1px solid #ddd;">CYK algorithm O(n³)</td>
                    </tr>
                </table>
                
                <h4>Why Polynomial Time?</h4>
                <p>Polynomial time is considered "efficient" because:</p>
                <ul>
                    <li>Polynomials grow slower than exponentials</li>
                    <li>Polynomials are closed under addition, multiplication, composition</li>
                    <li>Most practical algorithms run in polynomial time</li>
                </ul>
                
                <div class="key-points-box" style="background:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🔑 Important:</strong> P represents problems that can be solved <strong>efficiently</strong> (in polynomial time).</p>
                </div>
            `,
            keyPoints: [
                "P = problems solvable in polynomial time",
                "Considered 'efficiently solvable'",
                "Examples: sorting, shortest path, MST, primality",
                "P = ⋃ TIME(nᵏ)",
                "Closed under composition"
            ]
        },

        {
            title: "5.3 The Class NP: Nondeterministic Polynomial Time",
            content: `
                <h4>What is Class NP?</h4>
                <p>NP (Nondeterministic Polynomial time) is the class of languages that can be verified by a deterministic Turing machine in polynomial time. Alternatively, they can be decided by a nondeterministic Turing machine in polynomial time.</p>
                
                <p><strong>Two equivalent definitions:</strong></p>
                <ul>
                    <li><strong>Verifier definition:</strong> A language L is in NP if there exists a polynomial-time verifier V such that for any string x:
                        <ul>
                            <li>If x ∈ L, there exists a certificate y (|y| polynomial in |x|) with V(x,y) accepts</li>
                            <li>If x ∉ L, for all certificates y, V(x,y) rejects</li>
                        </ul>
                    </li>
                    <li><strong>Nondeterministic definition:</strong> L can be decided by a nondeterministic Turing machine in polynomial time</li>
                </ul>
                
                <h4>Understanding NP: The "Verifier" View</h4>
                <p>Think of NP problems as having solutions that are easy to check, even if they're hard to find.</p>
                
                <p><strong>Analogy:</strong> Solving a Sudoku puzzle might be hard, but if someone gives you a solution, you can verify it quickly. That's NP!</p>
                
                <h4>Examples of Problems in NP</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Problem</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Certificate</th>
                        <th style="padding:10px; border:1px solid #ddd;">Verification</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>SAT (Boolean Satisfiability)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Is there a satisfying assignment for a Boolean formula?</td>
                        <td style="padding:8px; border:1px solid #ddd;">Assignment of variables</td>
                        <td style="padding:8px; border:1px solid #ddd;">Check formula evaluates to true</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Hamiltonian Path</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Does a graph have a path visiting each vertex once?</td>
                        <td style="padding:8px; border:1px solid #ddd;">Sequence of vertices</td>
                        <td style="padding:8px; border:1px solid #ddd;">Check each vertex once, edges exist</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Graph Coloring</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Can graph be colored with k colors such that no adjacent vertices share color?</td>
                        <td style="padding:8px; border:1px solid #ddd;">Assignment of colors</td>
                        <td style="padding:8px; border:1px solid #ddd;">Check adjacent vertices different</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Subset Sum</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Is there a subset of numbers that sums to target?</td>
                        <td style="padding:8px; border:1px solid #ddd;">List of chosen numbers</td>
                        <td style="padding:8px; border:1px solid #ddd;">Sum them, check equals target</td>
                    </tr>
                </table>
                
                <h4>Relationship: P ⊆ NP</h4>
                <ul>
                    <li>Every problem in P is also in NP (if you can solve it, you can verify it)</li>
                    <li>Whether P = NP is the most important open problem in computer science</li>
                    <li>Most researchers believe P ≠ NP</li>
                </ul>
                
                <h4>The P vs NP Question</h4>
                <p><strong>Question:</strong> Is P = NP? That is, can every problem whose solution can be verified quickly also be solved quickly?</p>
                
                <ul>
                    <li>If P = NP: Many hard problems become tractable</li>
                    <li>If P ≠ NP: Some problems are inherently hard</li>
                    <li>One of the Clay Mathematics Institute's Millennium Prize Problems ($1 million prize)</li>
                </ul>
            `,
            keyPoints: [
                "NP = problems with polynomial-time verifiable solutions",
                "Certificate is a proof that can be checked quickly",
                "Examples: SAT, Hamiltonian Path, Graph Coloring",
                "P ⊆ NP (every P problem is in NP)",
                "P vs NP is the major open question"
            ]
        },

        {
            title: "5.4 NP-Hardness and NP-Completeness",
            content: `
                <h4>What is a Reduction?</h4>
                <p>A reduction is a way to transform one problem into another. If problem A reduces to problem B, then a solution to B can be used to solve A.</p>
                
                <p><strong>Polynomial-time reduction (≤ₚ):</strong> A reduces to B in polynomial time if there is a polynomial-time computable function f such that x ∈ A ⇔ f(x) ∈ B.</p>
                
                <h4>NP-Hard Problems</h4>
                <p>A problem H is NP-hard if every problem in NP can be reduced to H in polynomial time.</p>
                
                <p><strong>Meaning:</strong> NP-hard problems are at least as hard as every problem in NP. They may be even harder (not necessarily in NP).</p>
                
                <h4>NP-Complete Problems</h4>
                <p>A problem C is NP-complete if:</p>
                <ol>
                    <li>C is in NP, and</li>
                    <li>C is NP-hard (every problem in NP reduces to C)</li>
                </ol>
                
                <p>NP-complete problems are the "hardest" problems in NP. If any NP-complete problem can be solved in polynomial time, then P = NP.</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">NP-Hard vs NP-Complete</p>
                    <pre style="text-align:center;">
        NP-Hard
        /      \\
NP-Complete    (may not be in NP)
        \\
         NP
                    </pre>
                </div>
                
                <h4>The First NP-Complete Problem: SAT</h4>
                <p>Stephen Cook (1971) and Leonid Levin (1973) independently proved that the Boolean Satisfiability problem (SAT) is NP-complete.</p>
                
                <p><strong>Cook-Levin Theorem:</strong> SAT is NP-complete.</p>
                
                <p>This was the first problem proven NP-complete. Since then, thousands of problems have been shown NP-complete by reduction from SAT.</p>
                
                <h4>Proving a Problem is NP-Complete</h4>
                <p>To prove problem X is NP-complete:</p>
                <ol>
                    <li>Show X is in NP (give a polynomial-time verifier)</li>
                    <li>Show X is NP-hard: reduce a known NP-complete problem (like SAT) to X</li>
                </ol>
                
                <h4>Examples of NP-Complete Problems</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Problem</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>SAT</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Boolean formula satisfiability</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>3-SAT</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">SAT with clauses of exactly 3 literals</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Clique</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Does graph contain a complete subgraph of size k?</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Vertex Cover</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Is there a set of k vertices touching all edges?</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Hamiltonian Path</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Does graph have a path visiting each vertex once?</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Traveling Salesman</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Find shortest tour visiting all cities</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Graph Coloring</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Can graph be colored with k colors?</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Subset Sum</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Is there a subset summing to target?</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Knapsack</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Can we pack items with given weights/values into a knapsack?</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Reduction: transform one problem to another",
                "NP-hard: at least as hard as every problem in NP",
                "NP-complete: NP-hard + in NP",
                "Cook-Levin Theorem: SAT is NP-complete",
                "If any NP-complete problem is in P, then P = NP",
                "Thousands of problems are NP-complete"
            ]
        },

        {
            title: "5.5 The Class PSPACE",
            content: `
                <h4>What is PSPACE?</h4>
                <p>PSPACE is the class of problems that can be solved by a deterministic Turing machine using polynomial space (memory), regardless of time.</p>
                
                <p><strong>Formal definition:</strong> PSPACE = ⋃_{k≥0} SPACE(nᵏ)</p>
                
                <h4>Relationship with P and NP</h4>
                <ul>
                    <li>P ⊆ NP ⊆ PSPACE</li>
                    <li>It is believed that P ⊂ NP ⊂ PSPACE (strict inclusions)</li>
                    <li>Whether NP = PSPACE is another open question</li>
                </ul>
                
                <h4>Examples of PSPACE Problems</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Problem</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Why in PSPACE</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Quantified Boolean Formulas (QBF)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Formula with ∀ and ∃ quantifiers</td>
                        <td style="padding:8px; border:1px solid #ddd;">Can evaluate with polynomial space</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Generalized Geography</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Two-player game on graph</td>
                        <td style="padding:8px; border:1px solid #ddd;">Game tree can be explored in polynomial space</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Regular Expression Equivalence</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Do two regular expressions describe same language?</td>
                        <td style="padding:8px; border:1px solid #ddd;">Convert to automata, compare</td>
                    </tr>
                </table>
                
                <h4>PSPACE-Complete Problems</h4>
                <p>A problem is PSPACE-complete if it is in PSPACE and every problem in PSPACE reduces to it. These are the hardest problems in PSPACE.</p>
                
                <p><strong>Example:</strong> QBF (Quantified Boolean Formulas) is PSPACE-complete.</p>
                
                <h4>Space vs Time</h4>
                <ul>
                    <li>Space can be reused, time cannot</li>
                    <li>Polynomial space is more powerful than polynomial time?</li>
                    <li>We know P ⊆ NP ⊆ PSPACE, but relationships are not fully understood</li>
                </ul>
            `,
            keyPoints: [
                "PSPACE = problems solvable with polynomial space",
                "P ⊆ NP ⊆ PSPACE",
                "QBF is PSPACE-complete",
                "Space can be reused, time cannot",
                "Relationships between classes are open questions"
            ]
        },

        {
            title: "5.6 Relationships Between Complexity Classes",
            content: `
                <h4>The Complexity Class Hierarchy</h4>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">COMPLEXITY CLASS HIERARCHY</p>
                    <pre style="text-align:center;">
        EXPSPACE
           ↑
        EXP
           ↑
        PSPACE
           ↑
        NP
           ↑
         P
           ↑
        L (Log Space)
                    </pre>
                </div>
                
                <h4>Known Relationships</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Relationship</th>
                        <th style="padding:10px; border:1px solid #ddd;">Status</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">P ⊆ NP</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Known (trivial)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">NP ⊆ PSPACE</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Known</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">P = NP?</td>
                        <td style="padding:8px; border:1px solid #ddd;">❌ Open (most believe false)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">NP = PSPACE?</td>
                        <td style="padding:8px; border:1px solid #ddd;">❌ Open (likely false)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">P ⊂ EXP</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Known (time hierarchy theorem)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">PSPACE ⊂ EXPSPACE</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Known (space hierarchy theorem)</td>
                    </tr>
                </table>
                
                <h4>Hierarchy Theorems</h4>
                
                <ul>
                    <li><strong>Time Hierarchy Theorem:</strong> For any time-constructible function f(n) > n, TIME(f(n)) ⊂ TIME(f(n)²). This proves P ⊂ EXP.</li>
                    <li><strong>Space Hierarchy Theorem:</strong> For any space-constructible function f(n) ≥ log n, SPACE(f(n)) ⊂ SPACE(f(n)²). This proves PSPACE ⊂ EXPSPACE.</li>
                </ul>
                
                <h4>Open Questions</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Question</th>
                        <th style="padding:10px; border:1px solid #ddd;">Importance</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">P = NP?</td>
                        <td style="padding:8px; border:1px solid #ddd;">Most famous open problem ($1M prize)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">NP = PSPACE?</td>
                        <td style="padding:8px; border:1px solid #ddd;">Would have major implications</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">P = PSPACE?</td>
                        <td style="padding:8px; border:1px solid #ddd;">Implies P = NP, but likely false</td>
                    </tr>
                </table>
                
                <h4>Practical Implications</h4>
                <ul>
                    <li>If P = NP, many hard problems become solvable efficiently (cryptography would break)</li>
                    <li>Most believe P ≠ NP, so we focus on approximations, heuristics for NP-hard problems</li>
                    <li>PSPACE-complete problems are considered even harder than NP-complete</li>
                </ul>
            `,
            keyPoints: [
                "P ⊆ NP ⊆ PSPACE ⊆ EXP ⊆ EXPSPACE",
                "Time hierarchy: P ⊂ EXP",
                "Space hierarchy: PSPACE ⊂ EXPSPACE",
                "P vs NP is the major open question",
                "NP vs PSPACE is also open",
                "Most believe P ≠ NP and NP ≠ PSPACE"
            ]
        },

        {
            title: "5.7 Summary of Complexity Classes",
            content: `
                <h4>Quick Reference: Complexity Classes</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Class</th>
                        <th style="padding:10px; border:1px solid #ddd;">Full Name</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>P</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Polynomial Time</td>
                        <td style="padding:8px; border:1px solid #ddd;">Solvable in polynomial time</td>
                        <td style="padding:8px; border:1px solid #ddd;">Sorting, shortest path</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>NP</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Nondeterministic Polynomial Time</td>
                        <td style="padding:8px; border:1px solid #ddd;">Verifiable in polynomial time</td>
                        <td style="padding:8px; border:1px solid #ddd;">SAT, Hamiltonian Path</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>NP-hard</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">NP-hard</td>
                        <td style="padding:8px; border:1px solid #ddd;">At least as hard as every NP problem</td>
                        <td style="padding:8px; border:1px solid #ddd;">SAT, TSP (optimization)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>NP-complete</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">NP-complete</td>
                        <td style="padding:8px; border:1px solid #ddd;">NP-hard + in NP</td>
                        <td style="padding:8px; border:1px solid #ddd;">SAT, 3-SAT, Clique</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>PSPACE</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Polynomial Space</td>
                        <td style="padding:8px; border:1px solid #ddd;">Solvable with polynomial memory</td>
                        <td style="padding:8px; border:1px solid #ddd;">QBF, Generalized Geography</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>EXP</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Exponential Time</td>
                        <td style="padding:8px; border:1px solid #ddd;">Solvable in exponential time</td>
                        <td style="padding:8px; border:1px solid #ddd;">Generalized chess</td>
                    </tr>
                </table>
                
                <h4>Key Facts to Remember</h4>
                <ul>
                    <li><strong>P ⊆ NP ⊆ PSPACE ⊆ EXP</strong></li>
                    <li><strong>P ⊂ EXP</strong> (by Time Hierarchy Theorem)</li>
                    <li><strong>PSPACE ⊂ EXPSPACE</strong> (by Space Hierarchy Theorem)</li>
                    <li><strong>P = NP?</strong> is open (most believe false)</li>
                    <li><strong>NP = PSPACE?</strong> is open (likely false)</li>
                    <li><strong>NP-complete</strong> problems are the hardest in NP</li>
                    <li>If any NP-complete problem is in P, then P = NP</li>
                    <li>NP-hard problems may not be in NP</li>
                </ul>
            `,
            keyPoints: [
                "P ⊆ NP ⊆ PSPACE ⊆ EXP",
                "P ⊂ EXP, PSPACE ⊂ EXPSPACE (proven)",
                "P vs NP is major open question",
                "NP-complete = hardest problems in NP",
                "If any NP-complete is in P, then P = NP"
            ]
        }
    ],

    summary: `
        <h3>Chapter 5 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>P:</strong> Problems solvable in polynomial time (efficiently solvable)</li>
            <li><strong>NP:</strong> Problems verifiable in polynomial time (solutions easy to check)</li>
            <li><strong>NP-hard:</strong> At least as hard as every problem in NP</li>
            <li><strong>NP-complete:</strong> NP-hard + in NP (hardest problems in NP)</li>
            <li><strong>PSPACE:</strong> Problems solvable with polynomial space (memory)</li>
            <li><strong>Cook-Levin Theorem:</strong> SAT is NP-complete (first such problem)</li>
            <li><strong>Relationships:</strong> P ⊆ NP ⊆ PSPACE ⊆ EXP</li>
            <li><strong>Open Questions:</strong> P = NP? NP = PSPACE?</li>
            <li><strong>Hierarchy Theorems:</strong> P ⊂ EXP, PSPACE ⊂ EXPSPACE</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What is the difference between P and NP?",
            answer: "P contains problems that can be solved in polynomial time. NP contains problems whose solutions can be verified in polynomial time. Every problem in P is also in NP, but whether P = NP is unknown."
        },
        {
            question: "Define NP-hard and NP-complete.",
            answer: "A problem is NP-hard if every problem in NP reduces to it. A problem is NP-complete if it is NP-hard and also in NP."
        },
        {
            question: "What is the Cook-Levin Theorem?",
            answer: "The Cook-Levin Theorem states that the Boolean Satisfiability problem (SAT) is NP-complete. This was the first problem proven NP-complete."
        },
        {
            question: "What is PSPACE and how does it relate to NP?",
            answer: "PSPACE contains problems solvable with polynomial space (memory). We know NP ⊆ PSPACE, but whether NP = PSPACE is an open question."
        },
        {
            question: "If someone proves P = NP, what would be the implications?",
            answer: "Many hard problems (like factoring, traveling salesman) would become efficiently solvable, breaking most cryptography and revolutionizing computing."
        },
        {
            question: "Name three NP-complete problems.",
            answer: "SAT, 3-SAT, Hamiltonian Path, Clique, Vertex Cover, Graph Coloring, Subset Sum, Knapsack, Traveling Salesman (any three)."
        }
    ],

    quickTips: [
        "P = solvable, NP = verifiable",
        "NP-complete = hardest in NP",
        "If any NP-complete is in P, then P = NP",
        "SAT was first NP-complete problem",
        "P ⊆ NP ⊆ PSPACE ⊆ EXP",
        "P vs NP is million-dollar question"
    ],

    commonMistakes: [
        "❌ Thinking NP means 'non-polynomial' - it's 'nondeterministic polynomial'",
        "❌ Confusing NP-hard with NP-complete (NP-complete must be in NP)",
        "❌ Believing P = NP is proven - it's open!",
        "❌ Thinking all hard problems are NP-complete (some are harder: PSPACE-complete)",
        "❌ Forgetting that reductions must be polynomial-time"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 5:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>1 question</strong> at the <strong>Understand</strong> level.</p>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>Complexity classes:</strong> P, NP, PSPACE definitions</li>
            <li><strong>NP-hardness and NP-completeness:</strong> Understanding the concepts</li>
            <li><strong>Reductions:</strong> How they work</li>
            <li><strong>Relationships:</strong> P ⊆ NP ⊆ PSPACE and open questions</li>
            <li><strong>Examples:</strong> Know examples of problems in each class</li>
        </ol>
        
        <h4>What "Understand" Means:</h4>
        <p>You need to be able to explain these concepts clearly, understand the relationships between classes, and know the significance of open problems.</p>
        
        <h4>Practice Questions:</h4>
        <ul>
            <li>Explain the difference between P and NP. Why is the P vs NP question important?</li>
            <li>What does it mean for a problem to be NP-complete? Give an example.</li>
            <li>Describe the relationship between NP and PSPACE. Is it known whether they are equal?</li>
            <li>What is a polynomial-time reduction and why is it important in complexity theory?</li>
        </ul>
    `
};