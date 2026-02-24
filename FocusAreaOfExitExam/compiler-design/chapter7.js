// ===============================
// FOCUS AREA: COMPILER DESIGN - CHAPTER 7
// Code Generation
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaCompilerChapter7 = {
    title: "Chapter 7: Code Generation",
    
    // Blueprint alignment: 1 question (Apply)
    blueprint: {
        totalQuestions: 1,
        cognitiveLevels: {
            apply: 1
        },
        topics: [
            "Target code generation",
            "Register allocation",
            "Instruction selection",
            "Basic blocks and traces"
        ]
    },

    learningObjectives: [
        "Understand the process of target code generation",
        "Apply register allocation techniques",
        "Select appropriate machine instructions",
        "Generate code from intermediate representation",
        "Handle different addressing modes"
    ],

    sections: [
        {
            title: "7.1 Introduction to Code Generation",
            content: `
                <h4>What is Code Generation?</h4>
                <p>Code generation is the final phase of a compiler. It takes the optimized intermediate representation (IR) and produces target machine code (assembly or relocatable machine code).</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">Optimized IR → [CODE GENERATOR] → Target Code</p>
                </div>
                
                <h4>Tasks of Code Generator</h4>
                <ul>
                    <li><strong>Instruction selection:</strong> Choosing appropriate machine instructions</li>
                    <li><strong>Register allocation:</strong> Assigning variables to registers</li>
                    <li><strong>Instruction ordering:</strong> Scheduling instructions for efficiency</li>
                    <li><strong>Memory management:</strong> Handling stack frames and addressing</li>
                </ul>
                
                <h4>Challenges in Code Generation</h4>
                <ul>
                    <li><strong>Target machine complexity:</strong> Different instructions, addressing modes</li>
                    <li><strong>Register scarcity:</strong> Limited registers available</li>
                    <li><strong>Memory hierarchy:</strong> Registers vs cache vs main memory</li>
                    <li><strong>Instruction set:</strong> RISC vs CISC architectures</li>
                </ul>
                
                <h4>Input to Code Generator</h4>
                <ul>
                    <li>Intermediate representation (three-address code, quadruples, etc.)</li>
                    <li>Symbol table information (types, locations)</li>
                    <li>Target machine description</li>
                </ul>
                
                <h4>Output from Code Generator</h4>
                <ul>
                    <li>Assembly code</li>
                    <li>Relocatable machine code</li>
                    <li>Absolute machine code</li>
                </ul>
            `,
            keyPoints: [
                "Code generation = final compiler phase",
                "Input: optimized IR, Output: target code",
                "Tasks: instruction selection, register allocation, scheduling",
                "Must handle target machine complexity",
                "Register scarcity is a key challenge"
            ]
        },

        {
            title: "7.2 Issues in Code Generation",
            content: `
                <h4>Key Issues to Consider</h4>
                
                <h4>1. Input to Code Generator</h4>
                <p>The code generator must handle various forms of intermediate code (three-address code, quadruples, triples, etc.) and symbol table information.</p>
                
                <h4>2. Target Program</h4>
                <p>The output can be:</p>
                <ul>
                    <li><strong>Absolute machine code:</strong> Can be executed immediately (compilers for embedded systems)</li>
                    <li><strong>Relocatable machine code:</strong> Needs linking (most compilers)</li>
                    <li><strong>Assembly code:</strong> Requires assembler (common for portability)</li>
                </ul>
                
                <h4>3. Memory Management</h4>
                <p>The code generator must map variable names to memory addresses, considering:</p>
                <ul>
                    <li>Static vs stack vs heap allocation</li>
                    <li>Activation records (stack frames)</li>
                    <li>Alignment requirements</li>
                </ul>
                
                <h4>4. Instruction Selection</h4>
                <p>Choosing the best machine instructions for each IR operation. Considerations:</p>
                <ul>
                    <li>Completeness: can we implement all IR operations?</li>
                    <li>Efficiency: choose fastest/smallest instructions</li>
                    <li>Uniformity: consistent mapping</li>
                </ul>
                
                <h4>5. Register Allocation</h4>
                <p>Registers are faster than memory, but limited. The code generator must:</p>
                <ul>
                    <li>Decide which values to keep in registers</li>
                    <li>Handle register spilling when insufficient registers</li>
                    <li>Manage register usage across basic blocks</li>
                </ul>
                
                <h4>6. Evaluation Order</h4>
                <p>The order in which instructions are executed affects register usage and temporary storage.</p>
                
                <h4>7. Addressing Modes</h4>
                <p>Different addressing modes affect how operands are accessed:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Addressing Mode</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                        <th style="padding:10px; border:1px solid #ddd;">Use</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Absolute</td>
                        <td style="padding:8px; border:1px solid #ddd;">LOAD R1, 1000</td>
                        <td style="padding:8px; border:1px solid #ddd;">Global variables</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Register</td>
                        <td style="padding:8px; border:1px solid #ddd;">ADD R1, R2</td>
                        <td style="padding:8px; border:1px solid #ddd;">Register operands</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Indirect</td>
                        <td style="padding:8px; border:1px solid #ddd;">LOAD R1, (R2)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Pointers</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Indexed</td>
                        <td style="padding:8px; border:1px solid #ddd;">LOAD R1, 100(R2)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Array access</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Target program can be absolute, relocatable, or assembly",
                "Memory management: static, stack, heap",
                "Instruction selection must be complete and efficient",
                "Register allocation: limited registers require spilling",
                "Addressing modes affect how operands are accessed"
            ]
        },

        {
            title: "7.3 Target Language",
            content: `
                <h4>Types of Target Code</h4>
                
                <h4>1. Absolute Machine Code</h4>
                <ul>
                    <li>Can be placed in fixed memory locations and executed immediately</li>
                    <li>Used in embedded systems, ROM-based systems</li>
                    <li>No linking or relocation needed</li>
                </ul>
                
                <h4>2. Relocatable Machine Code</h4>
                <ul>
                    <li>Can be loaded anywhere in memory</li>
                    <li>Requires relocation information for linker</li>
                    <li>Most common output format (object files)</li>
                </ul>
                
                <h4>3. Assembly Code</h4>
                <ul>
                    <li>Human-readable symbolic code</li>
                    <li>Requires assembler to convert to machine code</li>
                    <li>Easier to debug, more portable across machines</li>
                </ul>
                
                <h4>Example: Three-Address Code to Assembly</h4>
                
                <p><strong>Three-address code:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
t1 = a + b
t2 = t1 * c
d = t2
                </pre>
                
                <p><strong>Assembly (simplified):</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
LOAD R1, a
LOAD R2, b
ADD R3, R1, R2    ; t1 = a + b
LOAD R4, c
MUL R5, R3, R4    ; t2 = t1 * c
STORE d, R5
                </pre>
                
                <h4>Stack-Based vs Register-Based Machines</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Aspect</th>
                        <th style="padding:10px; border:1px solid #ddd;">Stack Machine</th>
                        <th style="padding:10px; border:1px solid #ddd;">Register Machine</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Operands</td>
                        <td style="padding:8px; border:1px solid #ddd;">Implicit (stack top)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Explicit registers</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Instructions</td>
                        <td style="padding:8px; border:1px solid #ddd;">Short (no operand fields)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Longer (register fields)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Code size</td>
                        <td style="padding:8px; border:1px solid #ddd;">Smaller</td>
                        <td style="padding:8px; border:1px solid #ddd;">Larger</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Register allocation</td>
                        <td style="padding:8px; border:1px solid #ddd;">Not needed</td>
                        <td style="padding:8px; border:1px solid #ddd;">Critical</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Examples</td>
                        <td style="padding:8px; border:1px solid #ddd;">Java Virtual Machine</td>
                        <td style="padding:8px; border:1px solid #ddd;">x86, ARM, MIPS</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Target code can be absolute, relocatable, or assembly",
                "Assembly code is human-readable and portable",
                "Stack machines: implicit operands, smaller code",
                "Register machines: explicit operands, need register allocation"
            ]
        },

        {
            title: "7.4 Register Allocation",
            content: `
                <h4>Why Register Allocation Matters</h4>
                <p>Registers are the fastest memory in the computer hierarchy. Accessing a register is typically 10-100 times faster than accessing main memory. Good register allocation is crucial for performance.</p>
                
                <h4>Register Allocation vs Register Assignment</h4>
                <ul>
                    <li><strong>Register allocation:</strong> Deciding which variables should reside in registers</li>
                    <li><strong>Register assignment:</strong> Assigning specific registers to variables</li>
                </ul>
                
                <h4>Challenges</h4>
                <ul>
                    <li>Limited number of registers (typically 8-32 general-purpose registers)</li>
                    <li>Variables may interfere (cannot be in same register at same time)</li>
                    <li>Function calls save/restore registers</li>
                </ul>
                
                <h4>Graph Coloring Approach</h4>
                <p>The most common approach to register allocation uses graph coloring:</p>
                <ol>
                    <li>Build an interference graph: nodes = variables, edges = variables live at same time</li>
                    <li>Color the graph with K colors (K = number of registers)</li>
                    <li>Adjacent nodes must have different colors</li>
                    <li>If graph is not colorable with K colors, spill some variables to memory</li>
                </ol>
                
                <h4>Example Interference Graph</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Variables: a, b, c, d
Interferences:
- a interferes with b and c
- b interferes with a and d
- c interferes with a
- d interferes with b

Graph:
    a --- b
    |     |
    c     d

With 2 registers (colors), we can color:
a = R1, c = R1 (no interference)
b = R2, d = R2 (no interference)
                </pre>
                
                <h4>Simple Register Allocation Algorithm</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
For each basic block:
    Maintain a list of available registers
    For each instruction:
        For each operand:
            if operand not in register:
                load into available register
        For result:
            allocate register for result
        Update register usage (kill registers when values no longer needed)
                </pre>
                
                <h4>Register Spilling</h4>
                <p>When there aren't enough registers, some variables must be stored in memory. This is called spilling. Spilled variables need to be loaded when used and stored when modified.</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
// Without spilling (not enough registers)
t1 = a + b
t2 = t1 * c
t3 = t2 + d
e = t3

// With spilling (only 2 registers)
LOAD R1, a
LOAD R2, b
ADD R1, R2        // R1 = a+b, store t1 to memory
STORE t1, R1

LOAD R1, t1       // reload t1
LOAD R2, c
MUL R1, R2        // R1 = t1*c, store t2
STORE t2, R1

LOAD R1, t2       // reload t2
LOAD R2, d
ADD R1, R2        // R1 = t2+d
STORE e, R1
                </pre>
            `,
            keyPoints: [
                "Registers are faster than memory",
                "Graph coloring is common approach",
                "Interference graph shows which variables can't share registers",
                "Spilling: store variables to memory when registers insufficient",
                "Register allocation critical for performance"
            ]
        },

        {
            title: "7.5 Instruction Selection",
            content: `
                <h4>What is Instruction Selection?</h4>
                <p>Instruction selection is the process of mapping IR operations to target machine instructions. Different machines have different instruction sets, so the same IR may be implemented differently.</p>
                
                <h4>Tree-Based Instruction Selection</h4>
                <p>IR can be represented as trees. Instruction selection becomes tree pattern matching.</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Expression: a + b * c

Tree:
    +
   / \\
  a   *
     / \\
    b   c

Instructions (for RISC):
LOAD R1, b
LOAD R2, c
MUL R3, R1, R2
LOAD R4, a
ADD R5, R4, R3

Instructions (for CISC with memory operands):
LOAD R1, b
MUL R1, c   // b * c directly into R1
ADD R1, a   // add a to result
                </pre>
                
                <h4>Instruction Selection Using Tiling</h4>
                <p>Cover the IR tree with tiles that represent machine instructions. Goal: find minimum cost tiling.</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Patterns (tiles):
1. ADD Ri, Rj, Rk               cost 1
2. MUL Ri, Rj, Rk               cost 1
3. LOAD Ri, mem                  cost 2
4. ADD Ri, Rj, mem               cost 2
5. MUL Ri, Rj, mem               cost 2
6. ADD Ri, Rj, (MUL Rk, mem)    cost 3

The best tiling minimizes total cost.
                </pre>
                
                <h4>Example: Different Instruction Sets</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">IR Operation</th>
                        <th style="padding:10px; border:1px solid #ddd;">RISC</th>
                        <th style="padding:10px; border:1px solid #ddd;">CISC</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">a = b + c</td>
                        <td style="padding:8px; border:1px solid #ddd;">LOAD R1, b<br>LOAD R2, c<br>ADD R3, R1, R2<br>STORE a, R3</td>
                        <td style="padding:8px; border:1px solid #ddd;">ADD a, b, c (memory to memory)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">a = b * 5</td>
                        <td style="padding:8px; border:1px solid #ddd;">LOAD R1, b<br>MUL R2, R1, #5<br>STORE a, R2</td>
                        <td style="padding:8px; border:1px solid #ddd;">MUL a, b, #5</td>
                    </tr>
                </table>
                
                <h4>Instruction Selection for Different Architectures</h4>
                <ul>
                    <li><strong>RISC (Reduced Instruction Set Computer):</strong> Simple instructions, one operation per instruction, load-store architecture</li>
                    <li><strong>CISC (Complex Instruction Set Computer):</strong> Complex instructions, memory operands allowed, variable instruction length</li>
                </ul>
            `,
            keyPoints: [
                "Instruction selection maps IR to machine instructions",
                "Tree-based selection uses pattern matching",
                "Tiling covers IR tree with instruction patterns",
                "Goal: find minimum cost tiling",
                "RISC vs CISC affect instruction selection"
            ]
        },

        {
            title: "7.6 Basic Blocks and Traces",
            content: `
                <h4>Basic Blocks in Code Generation</h4>
                <p>Code generation is often performed on basic blocks. Within a basic block, we can do local optimization and register allocation.</p>
                
                <h4>Traces</h4>
                <p>A trace is a sequence of basic blocks that are likely to execute in order. Traces are used for global instruction scheduling.</p>
                
                <h4>Constructing Traces</h4>
                <ol>
                    <li>Start with a basic block (usually entry block)</li>
                    <li>Follow the most likely branch (from profiling)</li>
                    <li>Continue until no more blocks can be added</li>
                </ol>
                
                <h4>Example Flow Graph with Trace</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
        [B1]
        /  \\
     90%   10%
      /      \\
    [B2]    [B4]
     |        |
    [B3]    [B5]
      \\      /
       \\    /
        [B6]

Trace (likely path): B1 → B2 → B3 → B6
                </pre>
                
                <h4>Benefits of Traces</h4>
                <ul>
                    <li>Better instruction scheduling across blocks</li>
                    <li>Improved register allocation (variables live across trace)</li>
                    <li>Better branch prediction</li>
                </ul>
                
                <h4>Code Generation for Basic Blocks</h4>
                <p>For a basic block, we can use simple algorithms like:</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Algorithm: generate_code(block)
    for each instruction in block:
        generate code for instruction
        update register usage
        if no more uses of a register value, free it
                </pre>
            `,
            keyPoints: [
                "Basic blocks are units for code generation",
                "Traces are sequences of frequently executed blocks",
                "Traces enable global optimization",
                "Code generation within blocks can be simple",
                "Register usage tracked across instructions"
            ]
        },

        {
            title: "7.7 Code Generation Examples",
            content: `
                <h4>Example 1: Simple Expression</h4>
                <p><strong>Three-address code:</strong> <code>d = a + b * c</code></p>
                
                <p><strong>Step 1: Break into TAC</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
t1 = b * c
t2 = a + t1
d = t2
                </pre>
                
                <p><strong>Step 2: Register allocation (assuming 3 registers)</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
LOAD R1, b
LOAD R2, c
MUL R1, R2        // R1 = b*c
LOAD R2, a
ADD R2, R1        // R2 = a + t1
STORE d, R2
                </pre>
                
                <h4>Example 2: If-Then-Else</h4>
                <p><strong>Three-address code:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
    if a < b goto L1
    t1 = c + d
    x = t1
    goto L2
L1: t2 = c - d
    x = t2
L2:
                </pre>
                
                <p><strong>Assembly code:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
    LOAD R1, a
    LOAD R2, b
    CMP R1, R2
    BLT L1          // branch if less than
    LOAD R1, c
    LOAD R2, d
    ADD R3, R1, R2
    STORE x, R3
    JUMP L2
L1: LOAD R1, c
    LOAD R2, d
    SUB R3, R1, R2
    STORE x, R3
L2:
                </pre>
                
                <h4>Example 3: While Loop</h4>
                <p><strong>Three-address code:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
L1: if i >= n goto L2
    A[i] = 0
    i = i + 1
    goto L1
L2:
                </pre>
                
                <p><strong>Assembly code (with addressing modes):</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
    LOAD R1, i
    LOAD R2, n
L1: CMP R1, R2
    BGE L2          // if i >= n, exit
    MUL R3, R1, #4  // compute offset (4 bytes per int)
    LOAD R4, #0
    STORE A(R3), R4 // store 0 at A[i]
    ADD R1, R1, #1  // i = i + 1
    JUMP L1
L2: STORE i, R1
                </pre>
                
                <h4>Example 4: Function Call</h4>
                <p><strong>Three-address code:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
param x
param y
t1 = call sum
result = t1
                </pre>
                
                <p><strong>Assembly (typical calling convention):</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
    // Push arguments
    LOAD R1, x
    PUSH R1
    LOAD R2, y
    PUSH R2
    
    // Call function
    CALL sum
    
    // Result in R0 (typical)
    STORE result, R0
    
    // Clean up stack
    ADD SP, SP, #8  // assuming 4 bytes per argument
                </pre>
            `,
            keyPoints: [
                "Break complex expressions into simple TAC",
                "Allocate registers for temporaries",
                "Use labels for control flow",
                "Handle addressing modes for arrays",
                "Follow calling conventions for functions"
            ]
        }
    ],

    summary: `
        <h3>Chapter 7 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Code generation:</strong> Final phase, produces target code from IR</li>
            <li><strong>Target code types:</strong> Absolute, relocatable, assembly</li>
            <li><strong>Register allocation:</strong> Graph coloring, interference graphs, spilling</li>
            <li><strong>Instruction selection:</strong> Mapping IR to machine instructions, tiling</li>
            <li><strong>Addressing modes:</strong> Absolute, register, indirect, indexed</li>
            <li><strong>Basic blocks and traces:</strong> Units for code generation and optimization</li>
            <li><strong>RISC vs CISC:</strong> Different instruction selection strategies</li>
            <li><strong>Stack vs register machines:</strong> Different code generation approaches</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What are the main tasks of a code generator?",
            answer: "Instruction selection, register allocation, instruction ordering, memory management."
        },
        {
            question: "Explain the graph coloring approach to register allocation.",
            answer: "Build interference graph (nodes = variables, edges = variables live simultaneously). Color graph with K colors (K registers). Adjacent nodes must have different colors. If not colorable, spill variables."
        },
        {
            question: "What is register spilling and when is it needed?",
            answer: "Spilling stores variables to memory when there aren't enough registers. Variables are loaded when used and stored when modified."
        },
        {
            question: "Compare RISC and CISC instruction selection.",
            answer: "RISC: simple instructions, load-store architecture, more instructions per operation. CISC: complex instructions, memory operands allowed, fewer instructions."
        },
        {
            question: "Generate code for the expression: x = (a + b) * c",
            answer: "LOAD R1, a; LOAD R2, b; ADD R3, R1, R2; LOAD R4, c; MUL R5, R3, R4; STORE x, R5"
        }
    ],

    quickTips: [
        "Registers are faster than memory - use them wisely",
        "Graph coloring is key for register allocation",
        "Spill to memory when registers run out",
        "RISC = more instructions, CISC = fewer instructions",
        "Basic blocks are the unit of code generation",
        "Traces help with global optimization"
    ],

    commonMistakes: [
        "❌ Not freeing registers when values are no longer needed",
        "❌ Spilling too aggressively (slows down code)",
        "❌ Ignoring addressing modes (could make code inefficient)",
        "❌ Not following calling conventions for function calls",
        "❌ Generating incorrect code for control flow"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 7:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>1 question</strong> at the <strong>Apply</strong> level.</p>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>Generating target code:</strong> Convert three-address code to assembly</li>
            <li><strong>Register allocation:</strong> Allocate registers for basic blocks</li>
            <li><strong>Instruction selection:</strong> Choose appropriate instructions</li>
            <li><strong>Addressing modes:</strong> Use correct modes for operands</li>
        </ol>
        
        <h4>What "Apply" Means:</h4>
        <p>You need to be able to generate assembly or machine code from three-address code, allocate registers, and select appropriate instructions.</p>
        
        <h4>Practice Apply Questions:</h4>
        <ul>
            <li>Generate assembly code for the given three-address code sequence.</li>
            <li>Allocate registers for a basic block using graph coloring.</li>
            <li>Convert an expression to efficient target code considering addressing modes.</li>
            <li>Generate code for control flow statements (if-then-else, while loops).</li>
        </ul>
    `
};