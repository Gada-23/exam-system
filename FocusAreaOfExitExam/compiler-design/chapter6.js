// ===============================
// FOCUS AREA: COMPILER DESIGN - CHAPTER 6
// Code Optimization
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaCompilerChapter6 = {
    title: "Chapter 6: Code Optimization",
    
    // Blueprint alignment: 1 question (Analyze)
    blueprint: {
        totalQuestions: 1,
        cognitiveLevels: {
            analyze: 1
        },
        topics: [
            "Optimization techniques",
            "Machine-independent optimizations",
            "Machine-dependent optimizations",
            "Code optimization on intermediate code",
            "Basic blocks and flow graphs"
        ]
    },

    learningObjectives: [
        "Understand the purpose and goals of code optimization",
        "Differentiate between machine-independent and machine-dependent optimizations",
        "Apply optimization techniques to intermediate code",
        "Analyze basic blocks and flow graphs",
        "Identify opportunities for various optimizations"
    ],

    sections: [
        {
            title: "6.1 Introduction to Code Optimization",
            content: `
                <h4>What is Code Optimization?</h4>
                <p>Code optimization is the phase of a compiler that improves the intermediate code to make it faster, smaller, or more efficient without changing the program's meaning. It can be performed on intermediate code or target code.</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">IR → [OPTIMIZER] → Optimized IR</p>
                </div>
                
                <h4>Goals of Optimization</h4>
                <ul>
                    <li><strong>Speed:</strong> Reduce execution time</li>
                    <li><strong>Space:</strong> Reduce code size</li>
                    <li><strong>Power:</strong> Reduce energy consumption</li>
                    <li><strong>Memory:</strong> Reduce memory usage</li>
                </ul>
                
                <h4>Where Can Optimization Be Done?</h4>
                <ul>
                    <li><strong>On intermediate code:</strong> Machine-independent optimizations</li>
                    <li><strong>On target code:</strong> Machine-dependent optimizations</li>
                </ul>
                
                <div class="key-points-box" style="background:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🔑 Important:</strong> Code optimization can be done on the <strong>intermediate code</strong>, not just before or after code generation.</p>
                </div>
                
                <h4>Optimization Criteria</h4>
                <ul>
                    <li><strong>Correctness:</strong> Must preserve program semantics</li>
                    <li><strong>Effectiveness:</strong> Must actually improve the code</li>
                    <li><strong>Efficiency:</strong> Optimization itself shouldn't be too slow</li>
                    <li><strong>Predictability:</strong> Programmer should be able to understand performance</li>
                </ul>
                
                <h4>Classification of Optimizations</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Classification</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Examples</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Machine-independent</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Apply to intermediate code</td>
                        <td style="padding:8px; border:1px solid #ddd;">Constant folding, dead code elimination</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Machine-dependent</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Target-specific</td>
                        <td style="padding:8px; border:1px solid #ddd;">Register allocation, instruction selection</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Local</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Within a basic block</td>
                        <td style="padding:8px; border:1px solid #ddd;">Local common subexpression elimination</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Global</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Across basic blocks</td>
                        <td style="padding:8px; border:1px solid #ddd;">Global common subexpression elimination</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Optimization improves code without changing meaning",
                "Can be machine-independent (IR) or machine-dependent (target)",
                "Local = within basic block, Global = across blocks",
                "Must preserve correctness",
                "Can be done on intermediate code"
            ]
        },

        {
            title: "6.2 Basic Blocks and Flow Graphs",
            content: `
                <h4>What is a Basic Block?</h4>
                <p>A basic block is a sequence of consecutive instructions with a single entry point (the first instruction) and a single exit point (the last instruction). Control enters at the beginning and leaves at the end without branching except possibly at the end.</p>
                
                <h4>Properties of Basic Blocks</h4>
                <ul>
                    <li>Single entry point (first instruction)</li>
                    <li>Single exit point (last instruction)</li>
                    <li>No jumps into the middle of the block</li>
                    <li>No jumps out except at the end</li>
                </ul>
                
                <h4>Constructing Basic Blocks</h4>
                <p>To construct basic blocks from three-address code:</p>
                <ol>
                    <li>Identify the first instruction (leader) of each block:
                        <ul>
                            <li>The first instruction of the program is a leader</li>
                            <li>Any instruction that is the target of a jump is a leader</li>
                            <li>Any instruction immediately following a jump is a leader</li>
                        </ul>
                    </li>
                    <li>A basic block consists of all instructions from a leader to just before the next leader</li>
                </ol>
                
                <h4>Example: Finding Basic Blocks</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
(1)  i = 1
(2)  t1 = i * 4
(3)  t2 = A + t1
(4)  t3 = *t2
(5)  if t3 < 10 goto (8)
(6)  t4 = t3 * 2
(7)  *t2 = t4
(8)  i = i + 1
(9)  if i <= n goto (2)
                </pre>
                
                <p><strong>Leaders:</strong> (1) first instruction, (2) target of jump from (9), (5) instruction after jump? Actually (8) is target of jump from (5), (6) after jump from (5)</p>
                
                <p><strong>Basic blocks:</strong></p>
                <ul>
                    <li>Block 1: (1)</li>
                    <li>Block 2: (2)(3)(4)(5)</li>
                    <li>Block 3: (6)(7)</li>
                    <li>Block 4: (8)(9)</li>
                </ul>
                
                <h4>Flow Graphs</h4>
                <p>A flow graph is a directed graph where:</p>
                <ul>
                    <li><strong>Nodes:</strong> Basic blocks</li>
                    <li><strong>Edges:</strong> Control flow between blocks</li>
                </ul>
                
                <p>An edge from block B₁ to block B₂ exists if control can pass from the last instruction of B₁ to the first instruction of B₂ (through jumps or fall-through).</p>
                
                <h4>Example Flow Graph</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
    [Block 1]
        |
        v
    [Block 2] ←┐
        |      │
        v      │
    [Block 3]  │
        |      │
        v      │
    [Block 4] ─┘
                </pre>
                
                <h4>Uses of Flow Graphs</h4>
                <ul>
                    <li>Global optimization</li>
                    <li>Data flow analysis</li>
                    <li>Loop detection</li>
                    <li>Dead code elimination</li>
                </ul>
            `,
            keyPoints: [
                "Basic block = single entry, single exit instruction sequence",
                "Leaders: first instruction, jump targets, instructions after jumps",
                "Flow graph = nodes (basic blocks) + edges (control flow)",
                "Used for global optimization and analysis"
            ]
        },

        {
            title: "6.3 Machine-Independent Optimizations",
            content: `
                <h4>Local Optimizations (Within Basic Blocks)</h4>
                
                <h4>1. Constant Folding</h4>
                <p>Evaluating constant expressions at compile time.</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Before:  a = 2 * 3 * b
After:   a = 6 * b
                </pre>
                
                <h4>2. Constant Propagation</h4>
                <p>Replacing variables with their constant values.</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Before:  a = 5
         b = a + 3
After:   a = 5
         b = 5 + 3  → then constant folding to b = 8
                </pre>
                
                <h4>3. Copy Propagation</h4>
                <p>Replacing variables with their direct copies.</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Before:  x = y
         z = x + 2
After:   x = y
         z = y + 2
                </pre>
                
                <h4>4. Common Subexpression Elimination (CSE)</h4>
                <p>Reusing the result of a previously computed expression.</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Before:  t1 = a + b
         t2 = c * d
         t3 = a + b   // same as t1
         t4 = t3 * c
After:   t1 = a + b
         t2 = c * d
         t4 = t1 * c  // reuse t1
                </pre>
                
                <h4>5. Dead Code Elimination</h4>
                <p>Removing code that never affects the program's output.</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Before:  x = 5
         y = x + 2
         z = y * 3
         a = b + c    // z never used after this
After:   a = b + c    // first three statements removed
                </pre>
                
                <h4>Global Optimizations (Across Basic Blocks)</h4>
                
                <h4>6. Global Common Subexpression Elimination</h4>
                <p>Eliminating common subexpressions across basic blocks.</p>
                
                <h4>7. Loop Optimizations</h4>
                
                <h4>a. Loop Invariant Code Motion</h4>
                <p>Moving computations that don't change inside the loop to outside.</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Before:  while (i < n) {
            x = y * z    // y and z don't change in loop
            a[i] = x
            i = i + 1
         }
After:   x = y * z      // moved outside
         while (i < n) {
            a[i] = x
            i = i + 1
         }
                </pre>
                
                <h4>b. Induction Variable Elimination</h4>
                <p>Replacing induction variables with simpler expressions.</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Before:  for (i = 0; i < n; i++) {
            j = 4 * i
            A[j] = 0
         }
After:   for (j = 0; j < 4*n; j += 4) {
            A[j] = 0
         }
                </pre>
                
                <h4>c. Strength Reduction</h4>
                <p>Replacing expensive operations with cheaper ones.</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Before:  y = x * 2
After:   y = x + x
// or even better: y = x << 1 (if shift is cheaper)
                </pre>
                
                <h4>d. Loop Unrolling</h4>
                <p>Replicating loop body to reduce loop overhead.</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Before:  for (i = 0; i < 4; i++)
            A[i] = 0
            
After:   A[0] = 0
         A[1] = 0
         A[2] = 0
         A[3] = 0
                </pre>
                
                <h4>8. Function Inlining</h4>
                <p>Replacing function calls with the function body.</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Before:  int square(int x) { return x * x; }
         y = square(z);
         
After:   y = z * z;
                </pre>
            `,
            keyPoints: [
                "Constant folding: compute constants at compile time",
                "Constant propagation: use constant values directly",
                "Copy propagation: replace with original variable",
                "CSE: avoid recomputing same expression",
                "Dead code: remove unused code",
                "Loop invariant code motion: move out of loops",
                "Induction variable elimination: simplify loop variables",
                "Strength reduction: use cheaper operations",
                "Loop unrolling: reduce loop overhead"
            ]
        },

        {
            title: "6.4 Machine-Dependent Optimizations",
            content: `
                <h4>Target-Specific Optimizations</h4>
                
                <h4>1. Register Allocation</h4>
                <p>Assigning variables to registers efficiently. Registers are much faster than memory, so good register allocation is crucial.</p>
                
                <ul>
                    <li><strong>Graph coloring:</strong> Common approach for register allocation</li>
                    <li><strong>Spilling:</strong> Moving values to memory when registers are insufficient</li>
                </ul>
                
                <h4>2. Instruction Selection</h4>
                <p>Choosing the best machine instructions for each operation.</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
// Instead of:
LOAD R1, x
LOAD R2, y
ADD R3, R1, R2
STORE z, R3

// Maybe use: ADD z, x, y (if machine supports memory operands)
                </pre>
                
                <h4>3. Instruction Scheduling</h4>
                <p>Reordering instructions to avoid pipeline stalls and improve performance.</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
// Poor schedule (stalls after load):
LOAD R1, a
ADD R2, R1, b   // stall waiting for R1
LOAD R3, c
ADD R4, R3, d

// Better schedule:
LOAD R1, a
LOAD R3, c
ADD R2, R1, b
ADD R4, R3, d
                </pre>
                
                <h4>4. Peephole Optimization</h4>
                <p>Examining a small window (peephole) of instructions and replacing them with better sequences.</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
// Redundant loads
LOAD R1, a
LOAD R1, a   // redundant, remove

// Jumps to jumps
JUMP L1
...
L1: JUMP L2  // change to JUMP L2

// Algebraic identities
ADD R1, R1, #0 → (remove)
MUL R1, R1, #1 → (remove)
                </pre>
                
                <h4>5. Pipeline Scheduling</h4>
                <p>Arranging instructions to maximize pipeline utilization.</p>
            `,
            keyPoints: [
                "Register allocation: assign variables to registers",
                "Instruction selection: choose best machine instructions",
                "Instruction scheduling: avoid pipeline stalls",
                "Peephole optimization: local pattern replacement",
                "Machine-dependent = target-specific"
            ]
        },

        {
            title: "6.5 Data Flow Analysis",
            content: `
                <h4>What is Data Flow Analysis?</h4>
                <p>Data flow analysis is a technique for gathering information about how data flows through a program. It is essential for many global optimizations.</p>
                
                <h4>Types of Data Flow Analysis</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Analysis</th>
                        <th style="padding:10px; border:1px solid #ddd;">Direction</th>
                        <th style="padding:10px; border:1px solid #ddd;">Purpose</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Reaching Definitions</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Forward</td>
                        <td style="padding:8px; border:1px solid #ddd;">Which definitions reach a point</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Live Variables</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Backward</td>
                        <td style="padding:8px; border:1px solid #ddd;">Variables that will be used later</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Available Expressions</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Forward</td>
                        <td style="padding:8px; border:1px solid #ddd;">Expressions already computed</td>
                    </tr>
                </table>
                
                <h4>Reaching Definitions</h4>
                <p>A definition d reaches a point p if there is a path from d to p such that the variable defined at d is not redefined on that path.</p>
                
                <p><strong>Used for:</strong> Constant propagation, dead code elimination</p>
                
                <h4>Live Variables</h4>
                <p>A variable x is live at point p if its value will be used along some path starting at p.</p>
                
                <p><strong>Used for:</strong> Register allocation (dead variables don't need registers)</p>
                
                <h4>Available Expressions</h4>
                <p>An expression x op y is available at point p if it has been computed earlier and its value hasn't changed.</p>
                
                <p><strong>Used for:</strong> Common subexpression elimination</p>
                
                <h4>Data Flow Equations</h4>
                
                <p><strong>Reaching Definitions:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
IN[B] = ∪ (OUT[P] for all predecessors P of B)
OUT[B] = GEN[B] ∪ (IN[B] - KILL[B])
                </pre>
                
                <p><strong>Live Variables:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
OUT[B] = ∪ (IN[S] for all successors S of B)
IN[B] = USE[B] ∪ (OUT[B] - DEF[B])
                </pre>
                
                <p><strong>Available Expressions:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
IN[B] = ∩ (OUT[P] for all predecessors P of B)
OUT[B] = GEN[B] ∪ (IN[B] - KILL[B])
                </pre>
            `,
            keyPoints: [
                "Data flow analysis gathers information about variable usage",
                "Reaching definitions: forward analysis",
                "Live variables: backward analysis",
                "Available expressions: forward analysis",
                "Used for many global optimizations"
            ]
        },

        {
            title: "6.6 Loop Optimizations",
            content: `
                <h4>Why Focus on Loops?</h4>
                <p>Loops are where programs spend most of their execution time, so optimizing loops can have significant impact.</p>
                
                <h4>Loop Detection</h4>
                <p>Loops can be detected in the flow graph. A loop must have:</p>
                <ul>
                    <li>A header node that dominates all nodes in the loop</li>
                    <li>At least one way to iterate (back edge)</li>
                </ul>
                
                <h4>Loop Invariant Code Motion (LICM)</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Before:
for (i = 0; i < n; i++) {
    x = a * b;      // a and b don't change
    c[i] = x + i;
}

After:
x = a * b;
for (i = 0; i < n; i++) {
    c[i] = x + i;
}
                </pre>
                
                <h4>Induction Variable Elimination</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Before:
for (i = 0; i < n; i++) {
    j = 4 * i;
    A[j] = i;
}

After:
for (j = 0; j < 4*n; j += 4) {
    A[j] = j / 4;   // or use separate counter
}
                </pre>
                
                <h4>Strength Reduction in Loops</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Before:
for (i = 0; i < n; i++) {
    k = i * 4;
    A[k] = 0;
}

After:
k = 0;
for (i = 0; i < n; i++) {
    A[k] = 0;
    k = k + 4;
}
                </pre>
                
                <h4>Loop Unrolling</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Before:
for (i = 0; i < 4; i++)
    A[i] = 0;

After:
A[0] = 0;
A[1] = 0;
A[2] = 0;
A[3] = 0;
                </pre>
                
                <h4>Loop Fusion (Jamming)</h4>
                <p>Combining two loops with the same bounds into one.</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Before:
for (i = 0; i < n; i++)
    A[i] = 0;
for (i = 0; i < n; i++)
    B[i] = 0;

After:
for (i = 0; i < n; i++) {
    A[i] = 0;
    B[i] = 0;
}
                </pre>
                
                <h4>Loop Fission (Distribution)</h4>
                <p>Splitting a loop into multiple loops (for better cache behavior).</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Before:
for (i = 0; i < n; i++) {
    A[i] = f(i);
    B[i] = g(i);
}

After:
for (i = 0; i < n; i++)
    A[i] = f(i);
for (i = 0; i < n; i++)
    B[i] = g(i);
                </pre>
            `,
            keyPoints: [
                "Loops are critical for optimization (most execution time)",
                "Loop invariant code motion: move constant computations out",
                "Induction variable elimination: simplify loop variables",
                "Strength reduction: replace expensive ops with cheaper ones",
                "Loop unrolling: reduce loop overhead",
                "Loop fusion: combine loops for better locality",
                "Loop fission: split loops for better cache usage"
            ]
        },

        {
            title: "6.7 Analyzing Optimization Opportunities",
            content: `
                <h4>Blueprint Focus: Analyze</h4>
                <p>This section focuses on analyzing code to identify optimization opportunities and evaluate the effectiveness of optimizations.</p>
                
                <h4>Analyzing Basic Blocks</h4>
                <p>When analyzing a basic block, look for:</p>
                <ul>
                    <li>Common subexpressions that can be eliminated</li>
                    <li>Constant expressions that can be folded</li>
                    <li>Dead code (assignments to unused variables)</li>
                    <li>Copy propagation opportunities</li>
                </ul>
                
                <h4>Example Analysis</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
t1 = a + b
t2 = t1 * c
t3 = a + b      // common subexpression with t1
t4 = t2 * t3
x = t4
y = x + 2       // x used, y not used after this
z = y * 3       // z never used (dead code)
                </pre>
                
                <p><strong>Analysis:</strong></p>
                <ul>
                    <li>t3 = a + b is a common subexpression with t1 → can reuse t1</li>
                    <li>y is computed but never used after line 6? Actually y used in line 7 for z, but z is dead</li>
                    <li>z is dead code (never used) → can eliminate z and y if y only used for z</li>
                </ul>
                
                <p><strong>Optimized:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
t1 = a + b
t2 = t1 * c
t4 = t2 * t1
x = t4
// y and z eliminated
                </pre>
                
                <h4>Analyzing Loops</h4>
                <p>When analyzing loops, look for:</p>
                <ul>
                    <li>Loop invariant computations</li>
                    <li>Induction variables</li>
                    <li>Opportunities for strength reduction</li>
                    <li>Potential for loop unrolling or fusion</li>
                </ul>
                
                <h4>Example Loop Analysis</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
for (i = 0; i < n; i++) {
    t1 = 4 * i
    t2 = x * y      // x and y don't change in loop
    A[t1] = t2
}
                </pre>
                
                <p><strong>Analysis:</strong></p>
                <ul>
                    <li>t2 = x * y is loop invariant → can move outside loop</li>
                    <li>t1 = 4 * i is induction variable computation → can strength reduce</li>
                </ul>
                
                <p><strong>Optimized:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
t2 = x * y
t1 = 0
for (i = 0; i < n; i++) {
    A[t1] = t2
    t1 = t1 + 4
}
                </pre>
            `,
            keyPoints: [
                "Analyze basic blocks for CSE, constant folding, dead code",
                "Analyze loops for invariants and induction variables",
                "Identify opportunities for strength reduction",
                "Evaluate which optimizations will be most effective",
                "Consider both local and global context"
            ]
        }
    ],

    summary: `
        <h3>Chapter 6 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Optimization:</strong> Improves code without changing meaning</li>
            <li><strong>Basic blocks:</strong> Single entry, single exit instruction sequences</li>
            <li><strong>Flow graphs:</strong> Nodes = basic blocks, Edges = control flow</li>
            <li><strong>Local optimizations:</strong> Within basic blocks (CSE, constant folding, dead code elimination)</li>
            <li><strong>Global optimizations:</strong> Across blocks (loop optimizations, global CSE)</li>
            <li><strong>Loop optimizations:</strong> Invariant code motion, induction variable elimination, strength reduction, unrolling</li>
            <li><strong>Machine-dependent:</strong> Register allocation, instruction selection, peephole</li>
            <li><strong>Data flow analysis:</strong> Reaching definitions, live variables, available expressions</li>
            <li><strong>Code optimization can be done on intermediate code</strong></li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What is a basic block and how do you construct basic blocks from three-address code?",
            answer: "A basic block is a sequence of instructions with single entry and single exit. Leaders are first instruction, jump targets, and instructions after jumps. A basic block consists of all instructions from a leader to just before the next leader."
        },
        {
            question: "Explain constant folding and constant propagation with examples.",
            answer: "Constant folding evaluates constants at compile time: a = 2 * 3 → a = 6. Constant propagation replaces variables with constants: a = 5; b = a + 3 → b = 5 + 3 → b = 8."
        },
        {
            question: "What is common subexpression elimination? Give an example.",
            answer: "CSE reuses previously computed expressions. Example: t1 = a + b; t3 = a + b becomes t1 = a + b; t3 = t1 (reuse)."
        },
        {
            question: "Explain loop invariant code motion with an example.",
            answer: "Loop invariant code motion moves computations that don't change inside the loop to outside. Example: x = y * z inside loop where y,z don't change → move before loop."
        },
        {
            question: "What is strength reduction? Give an example in a loop.",
            answer: "Strength reduction replaces expensive operations with cheaper ones. Example: i*4 in a loop can be replaced by adding 4 each iteration: k = 0; loop { use k; k += 4; }"
        }
    ],

    quickTips: [
        "Basic block = single entry, single exit",
        "Constant folding: compute now, not at runtime",
        "Copy propagation: x = y; z = x → z = y",
        "CSE: don't recompute the same thing",
        "Dead code: remove unused assignments",
        "Loop invariants: move out of loops",
        "Strength reduction: multiply → add",
        "Optimization can be done on intermediate code"
    ],

    commonMistakes: [
        "❌ Changing program semantics (must preserve meaning)",
        "❌ Not considering data dependencies when reordering",
        "❌ Optimizing code that doesn't need optimization",
        "❌ Focusing only on local optimizations, ignoring global",
        "❌ Not analyzing loops properly (most execution time)"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 6:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>1 question</strong> at the <strong>Analyze</strong> level.</p>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>Basic blocks and flow graphs:</strong> Identify basic blocks, construct flow graphs</li>
            <li><strong>Optimization opportunities:</strong> Analyze code to find CSE, dead code, loop invariants</li>
            <li><strong>Optimization techniques:</strong> Apply and evaluate different optimizations</li>
            <li><strong>Effectiveness analysis:</strong> Determine which optimizations are beneficial</li>
        </ol>
        
        <h4>What "Analyze" Means:</h4>
        <p>You need to be able to examine code, identify optimization opportunities, apply appropriate optimizations, and evaluate their effectiveness.</p>
        
        <h4>Practice Analysis Questions:</h4>
        <ul>
            <li>Given a basic block, identify common subexpressions and dead code.</li>
            <li>Analyze a loop to find invariant computations and induction variables.</li>
            <li>Determine which optimizations would be most effective for a given code segment.</li>
            <li>Compare different optimization approaches for a specific scenario.</li>
        </ul>
    `
};