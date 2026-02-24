// ===============================
// FOCUS AREA: COMPUTER ORGANIZATION AND ARCHITECTURE - CHAPTER 4
// Performance Enhancement Techniques
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaCOAChapter4 = {
    title: "Chapter 4: Performance Enhancement Techniques",
    
    // Blueprint alignment: 2 questions (Understand, Analyze)
    blueprint: {
        totalQuestions: 2,
        cognitiveLevels: {
            understand: 1,
            analyze: 1
        },
        topics: [
            "Pipelining",
            "Cache memory",
            "RISC vs CISC architectures",
            "Superscalar processing",
            "Parallel processing"
        ]
    },

    learningObjectives: [
        "Understand pipelining and how it improves performance",
        "Explain cache memory organization and operation",
        "Compare RISC and CISC architectures",
        "Analyze performance trade-offs in different architectures",
        "Understand superscalar and parallel processing concepts"
    ],

    sections: [
        {
            title: "4.1 Introduction to Performance Enhancement",
            content: `
                <h4>Why Performance Enhancement?</h4>
                <p>Computer architects use various techniques to improve the speed and efficiency of processors. These techniques aim to increase throughput, reduce latency, and make better use of hardware resources.</p>
                
                <h4>Key Performance Metrics</h4>
                <ul>
                    <li><strong>Throughput:</strong> Number of instructions completed per unit time</li>
                    <li><strong>Latency:</strong> Time to complete a single task</li>
                    <li><strong>CPI (Cycles Per Instruction):</strong> Average cycles to execute an instruction</li>
                    <li><strong>Clock speed:</strong> Frequency of the processor</li>
                </ul>
                
                <h4>Performance Equation Revisited</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
CPU Time = Instruction Count × CPI × Clock Cycle Time
                </pre>
                
                <p>Performance enhancement techniques target each of these factors:</p>
                <ul>
                    <li><strong>Reduce Instruction Count:</strong> Better compilers, complex instructions (CISC)</li>
                    <li><strong>Reduce CPI:</strong> Pipelining, superscalar execution</li>
                    <li><strong>Reduce Clock Cycle Time:</strong> Faster circuits, deeper pipelines</li>
                </ul>
                
                <h4>Classification of Enhancement Techniques</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Technique</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Target</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Pipelining</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Overlap instruction execution</td>
                        <td style="padding:8px; border:1px solid #ddd;">Reduce CPI, increase throughput</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Cache Memory</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Fast memory close to CPU</td>
                        <td style="padding:8px; border:1px solid #ddd;">Reduce memory access time</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Superscalar</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Multiple instructions per cycle</td>
                        <td style="padding:8px; border:1px solid #ddd;">Reduce CPI below 1</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Parallel Processing</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Multiple processors working together</td>
                        <td style="padding:8px; border:1px solid #ddd;">Increase throughput</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Performance metrics: throughput, latency, CPI, clock speed",
                "CPU Time = Instruction Count × CPI × Clock Cycle Time",
                "Enhancement techniques target different factors",
                "Pipelining, cache, superscalar, parallel processing are key techniques"
            ]
        },

        {
            title: "4.2 Pipelining",
            content: `
                <h4>What is Pipelining?</h4>
                <p>Pipelining is a technique where multiple instructions are overlapped in execution. While one instruction is being executed, the next instruction is being decoded, and the one after that is being fetched. This is like an assembly line in a factory.</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">PIPELINE STAGES</p>
                    <pre style="text-align:center;">
Instruction 1:  F1  D1  E1  W1
Instruction 2:      F2  D2  E2  W2
Instruction 3:          F3  D3  E3  W3
Instruction 4:              F4  D4  E4  W4

F = Fetch, D = Decode, E = Execute, W = Write-back
                    </pre>
                </div>
                
                <h4>Typical Pipeline Stages</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Stage</th>
                        <th style="padding:10px; border:1px solid #ddd;">Name</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">IF</td>
                        <td style="padding:8px; border:1px solid #ddd;">Instruction Fetch</td>
                        <td style="padding:8px; border:1px solid #ddd;">Fetch instruction from memory</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">ID</td>
                        <td style="padding:8px; border:1px solid #ddd;">Instruction Decode</td>
                        <td style="padding:8px; border:1px solid #ddd;">Decode instruction, read registers</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">EX</td>
                        <td style="padding:8px; border:1px solid #ddd;">Execute</td>
                        <td style="padding:8px; border:1px solid #ddd;">Perform ALU operation</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">MEM</td>
                        <td style="padding:8px; border:1px solid #ddd;">Memory Access</td>
                        <td style="padding:8px; border:1px solid #ddd;">Access data memory (if needed)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">WB</td>
                        <td style="padding:8px; border:1px solid #ddd;">Write Back</td>
                        <td style="padding:8px; border:1px solid #ddd;">Write result to register</td>
                    </tr>
                </table>
                
                <h4>Pipeline Performance</h4>
                <p>In a non-pipelined processor, each instruction takes N cycles (where N is the number of stages). In a pipelined processor, after the pipeline is full, one instruction completes every cycle.</p>
                
                <p><strong>Speedup from pipelining:</strong> Ideally, speedup = number of stages</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
For K instructions in an N-stage pipeline:
Non-pipelined time = K × N cycles
Pipelined time = N + (K - 1) cycles
Speedup = (K × N) / (N + K - 1) → approaches N as K grows
                </pre>
                
                <h4>Pipeline Hazards</h4>
                <p>Hazards are situations that prevent the next instruction from executing in the next clock cycle.</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Hazard Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                        <th style="padding:10px; border:1px solid #ddd;">Solution</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Structural</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Hardware resource conflict</td>
                        <td style="padding:8px; border:1px solid #ddd;">Two instructions need same ALU</td>
                        <td style="padding:8px; border:1px solid #ddd;">Add more hardware</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Data</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Instruction depends on previous result</td>
                        <td style="padding:8px; border:1px solid #ddd;">ADD R1, R2; SUB R3, R1</td>
                        <td style="padding:8px; border:1px solid #ddd;">Forwarding, stalling</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Control</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Branch instructions</td>
                        <td style="padding:8px; border:1px solid #ddd;">BEQZ R1, target</td>
                        <td style="padding:8px; border:1px solid #ddd;">Branch prediction</td>
                    </tr>
                </table>
                
                <h4>Data Forwarding (Bypassing)</h4>
                <p>Data forwarding passes the result directly from EX stage to the next instruction's EX stage, avoiding a stall.</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Without forwarding:
ADD R1, R2, R3  ; IF ID EX WB
SUB R4, R1, R5  ;    IF ID stall EX ...
                 ; (stall waiting for R1)

With forwarding:
ADD R1, R2, R3  ; IF ID EX WB
SUB R4, R1, R5  ;    IF ID EX WB (result forwarded directly)
                </pre>
            `,
            keyPoints: [
                "Pipelining overlaps instruction execution",
                "Ideal speedup = number of pipeline stages",
                "Hazards: structural, data, control",
                "Data forwarding reduces stalls",
                "Branch prediction handles control hazards",
                "Pipelining increases throughput, not individual instruction latency"
            ]
        },

        {
            title: "4.3 Cache Memory",
            content: `
                <h4>What is Cache Memory?</h4>
                <p>Cache memory is a small, fast memory located close to the CPU. It stores frequently used data and instructions to reduce the average time to access memory. The principle of locality (temporal and spatial) makes caches effective.</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">MEMORY HIERARCHY</p>
                    <pre style="text-align:center;">
Registers (fastest, smallest, most expensive)
    ↑
L1 Cache ( ~1 ns)
    ↑
L2 Cache ( ~4 ns)
    ↑
L3 Cache ( ~10 ns)
    ↑
Main Memory (RAM) ( ~100 ns)
    ↑
SSD ( ~100,000 ns)
    ↑
Hard Disk ( ~10,000,000 ns) (slowest, largest, cheapest)
                    </pre>
                </div>
                
                <h4>Cache Operation</h4>
                <ol>
                    <li>CPU requests data from memory address</li>
                    <li>Cache checks if data is present (cache hit)</li>
                    <li>If hit, data returned quickly (few cycles)</li>
                    <li>If miss, data fetched from main memory (many cycles), and stored in cache for future use</li>
                </ol>
                
                <h4>Cache Performance Metrics</h4>
                <ul>
                    <li><strong>Hit rate:</strong> Percentage of accesses found in cache</li>
                    <li><strong>Miss rate:</strong> 1 - hit rate</li>
                    <li><strong>Hit time:</strong> Time to access cache (fast)</li>
                    <li><strong>Miss penalty:</strong> Time to fetch from lower level (slow)</li>
                </ul>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Average Access Time = Hit time + Miss rate × Miss penalty
                </pre>
                
                <h4>Cache Organization</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Organization</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Pros/Cons</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Direct Mapped</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Each memory block maps to exactly one cache location</td>
                        <td style="padding:8px; border:1px solid #ddd;">Simple, fast, but conflicts possible</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Fully Associative</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Any block can go anywhere</td>
                        <td style="padding:8px; border:1px solid #ddd;">Flexible, but complex hardware</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Set Associative</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Cache divided into sets, each block maps to a set</td>
                        <td style="padding:8px; border:1px solid #ddd;">Good compromise (n-way set associative)</td>
                    </tr>
                </table>
                
                <h4>Cache Replacement Policies</h4>
                <p>When cache is full and a new block must be loaded, which block is replaced?</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Policy</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>LRU (Least Recently Used)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Replace block unused for longest time</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>FIFO (First In First Out)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Replace oldest block</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Random</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Randomly choose block</td>
                    </tr>
                </table>
                
                <h4>Write Policies</h4>
                <ul>
                    <li><strong>Write-through:</strong> Write to cache and memory simultaneously</li>
                    <li><strong>Write-back:</strong> Write only to cache, memory updated when block evicted (needs dirty bit)</li>
                </ul>
                
                <h4>Main Purpose of Cache Memory</h4>
                <p>The main purpose of cache memory is <strong>to provide faster access to frequently used data between CPU and main memory</strong>. It bridges the speed gap between fast CPU and slower main memory.</p>
            `,
            keyPoints: [
                "Cache is fast memory close to CPU",
                "Exploits locality (temporal and spatial)",
                "Hit rate, miss rate, hit time, miss penalty",
                "Organizations: direct mapped, fully associative, set associative",
                "Replacement policies: LRU, FIFO, Random",
                "Write policies: write-through, write-back",
                "Cache provides faster access to frequently used data"
            ]
        },

        {
            title: "4.4 RISC vs CISC Architectures",
            content: `
                <h4>Two Major Design Philosophies</h4>
                <p>Processor architectures follow two main design approaches: RISC (Reduced Instruction Set Computer) and CISC (Complex Instruction Set Computer).</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">RISC vs CISC</p>
                    <pre style="text-align:center;">
RISC: Simple instructions, fast hardware, compiler does the work
CISC: Complex instructions, microcode, hardware does the work
                    </pre>
                </div>
                
                <h4>RISC Characteristics</h4>
                <ul>
                    <li><strong>Simple, fixed-length instructions</strong> (typically 32 bits)</li>
                    <li><strong>Load-store architecture:</strong> Only LOAD and STORE access memory</li>
                    <li><strong>Large number of registers</strong> (typically 32 or more)</li>
                    <li><strong>Hardwired control unit</strong> (fast, no microcode)</li>
                    <li><strong>Pipelining is easy</strong> due to regular instruction format</li>
                    <li><strong>One instruction per cycle</strong> (in ideal conditions)</li>
                    <li><strong>Compiler does more work</strong> to optimize instruction usage</li>
                    <li><strong>Examples:</strong> ARM, MIPS, RISC-V, PowerPC</li>
                </ul>
                
                <h4>CISC Characteristics</h4>
                <ul>
                    <li><strong>Complex, variable-length instructions</strong> (1 to 15 bytes on x86)</li>
                    <li><strong>Memory operands allowed</strong> in arithmetic instructions</li>
                    <li><strong>Fewer registers</strong> (typically 8-16 general purpose)</li>
                    <li><strong>Microprogrammed control unit</strong> (flexible, slower)</li>
                    <li><strong>Complex instructions</strong> perform multiple operations</li>
                    <li><strong>Variable cycles per instruction</strong> (some take many cycles)</li>
                    <li><strong>Hardware does more work</strong> per instruction</li>
                    <li><strong>Examples:</strong> x86 (Intel, AMD), 68000, VAX</li>
                </ul>
                
                <h4>Comparison Table</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Feature</th>
                        <th style="padding:10px; border:1px solid #ddd;">RISC</th>
                        <th style="padding:10px; border:1px solid #ddd;">CISC</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Instruction format</td>
                        <td style="padding:8px; border:1px solid #ddd;">Fixed-length</td>
                        <td style="padding:8px; border:1px solid #ddd;">Variable-length</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Instructions</td>
                        <td style="padding:8px; border:1px solid #ddd;">Simple, few</td>
                        <td style="padding:8px; border:1px solid #ddd;">Complex, many</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Addressing modes</td>
                        <td style="padding:8px; border:1px solid #ddd;">Few</td>
                        <td style="padding:8px; border:1px solid #ddd;">Many</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Registers</td>
                        <td style="padding:8px; border:1px solid #ddd;">Many (32+)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Few (8-16)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Memory access</td>
                        <td style="padding:8px; border:1px solid #ddd;">Load/store only</td>
                        <td style="padding:8px; border:1px solid #ddd;">Any instruction</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Control unit</td>
                        <td style="padding:8px; border:1px solid #ddd;">Hardwired (fast)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Microprogrammed (flexible)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Pipelining</td>
                        <td style="padding:8px; border:1px solid #ddd;">Easy</td>
                        <td style="padding:8px; border:1px solid #ddd;">Harder</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Compiler complexity</td>
                        <td style="padding:8px; border:1px solid #ddd;">More complex</td>
                        <td style="padding:8px; border:1px solid #ddd;">Simpler</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Code density</td>
                        <td style="padding:8px; border:1px solid #ddd;">Lower</td>
                        <td style="padding:8px; border:1px solid #ddd;">Higher</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Power efficiency</td>
                        <td style="padding:8px; border:1px solid #ddd;">Higher</td>
                        <td style="padding:8px; border:1px solid #ddd;">Lower</td>
                    </tr>
                </table>
                
                <div class="key-points-box" style="background:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🔑 Important:</strong> RISC is <strong>with hardwired control unit with pipelining processing</strong>. CISC uses microprogrammed control.</p>
                </div>
                
                <h4>Which is better?</h4>
                <p>Modern processors blur the line: x86 (CISC) internally decode instructions into RISC-like micro-ops. Both approaches have converged, with modern CPUs using best of both worlds.</p>
                
                <ul>
                    <li><strong>RISC advantages:</strong> Simpler design, easier to pipeline, power efficient, ideal for mobile devices</li>
                    <li><strong>CISC advantages:</strong> Better code density, backward compatibility, fewer instructions for complex tasks</li>
                </ul>
            `,
            keyPoints: [
                "RISC: simple instructions, load-store, hardwired control, many registers, easy pipelining",
                "CISC: complex instructions, memory operands, microprogrammed control, fewer registers",
                "RISC is with hardwired control unit with pipelining processing",
                "RISC executes one instruction per cycle (in ideal conditions)",
                "RISC has fixed instruction length, CISC variable length",
                "Modern processors combine both approaches"
            ]
        },

        {
            title: "4.5 Superscalar Processing",
            content: `
                <h4>What is Superscalar Processing?</h4>
                <p>Superscalar processors can issue and execute multiple instructions per clock cycle. They have multiple execution units (ALUs, FPUs, load/store units) that can operate in parallel.</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">SUPERSCALAR EXECUTION</p>
                    <pre style="text-align:center;">
Cycle 1:  Inst1  Inst2  Inst3
          (ALU0) (ALU1) (Load)
Cycle 2:  Inst4  Inst5  Inst6
          (ALU0) (FPU)  (Store)
                    </pre>
                </div>
                
                <h4>Superscalar vs Scalar</h4>
                <ul>
                    <li><strong>Scalar:</strong> One instruction per cycle (CPI ≥ 1)</li>
                    <li><strong>Superscalar:</strong> Multiple instructions per cycle (CPI < 1)</li>
                </ul>
                
                <h4>Key Components</h4>
                <ul>
                    <li><strong>Multiple execution units:</strong> Several ALUs, FPUs, load/store units</li>
                    <li><strong>Instruction fetch/decode:</strong> Fetch and decode multiple instructions per cycle</li>
                    <li><strong>Register renaming:</strong> Eliminate false dependencies</li>
                    <li><strong>Out-of-order execution:</strong> Execute instructions as soon as operands ready</li>
                    <li><strong>Reservation stations:</strong> Hold instructions waiting for operands</li>
                    <li><strong>Reorder buffer:</strong> Commit results in program order</li>
                </ul>
                
                <h4>Limitations</h4>
                <ul>
                    <li><strong>Instruction-level parallelism (ILP):</strong> Limited by program dependencies</li>
                    <li><strong>Resource conflicts:</strong> Not enough functional units</li>
                    <li><strong>Control dependencies:</strong> Branches limit parallel execution</li>
                    <li><strong>Diminishing returns:</strong> Wider issue gets harder</li>
                </ul>
                
                <h4>Superscalar Pipeline</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Traditional 5-stage pipeline (scalar):
IF ID EX MEM WB

Superscalar (2-way):
IF1 IF2 ID1 ID2 EX1 EX2 MEM1 MEM2 WB1 WB2
                </pre>
                
                <h4>Dynamic Scheduling</h4>
                <p>Superscalar processors use dynamic scheduling to find independent instructions:</p>
                <ol>
                    <li>Decode instructions and check dependencies</li>
                    <li>Issue independent instructions to execution units</li>
                    <li>Execute out-of-order when operands ready</li>
                    <li>Commit results in-order to maintain precise exceptions</li>
                </ol>
            `,
            keyPoints: [
                "Superscalar: multiple instructions per cycle (CPI < 1)",
                "Requires multiple execution units",
                "Uses dynamic scheduling, out-of-order execution",
                "Register renaming eliminates false dependencies",
                "Limited by instruction-level parallelism (ILP)"
            ]
        },

        {
            title: "4.6 Parallel Processing",
            content: `
                <h4>What is Parallel Processing?</h4>
                <p>Parallel processing uses multiple processors or cores to execute multiple tasks or threads simultaneously, increasing throughput.</p>
                
                <h4>Flynn's Taxonomy</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Category</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>SISD</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Single Instruction, Single Data</td>
                        <td style="padding:8px; border:1px solid #ddd;">Traditional single-core CPU</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>SIMD</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Single Instruction, Multiple Data</td>
                        <td style="padding:8px; border:1px solid #ddd;">Vector processors, GPU, MMX/SSE</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>MISD</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Multiple Instruction, Single Data</td>
                        <td style="padding:8px; border:1px solid #ddd;">Rare, fault-tolerant systems</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>MIMD</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Multiple Instruction, Multiple Data</td>
                        <td style="padding:8px; border:1px solid #ddd;">Multi-core processors, clusters</td>
                    </tr>
                </table>
                
                <h4>Multicore Processors</h4>
                <p>Multiple processor cores on a single chip. Each core can execute threads independently.</p>
                <ul>
                    <li><strong>Shared memory:</strong> All cores share main memory</li>
                    <li><strong>Cache coherence:</strong> Keeping caches consistent</li>
                    <li><strong>Thread-level parallelism (TLP):</strong> Execute multiple threads</li>
                </ul>
                
                <h4>SIMD Processing</h4>
                <p>Single instruction operates on multiple data elements simultaneously. Used for multimedia, scientific computing.</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Scalar add:
ADD R1, R2, R3   ; R1 = R2 + R3

SIMD add (4 elements):
ADD V1, V2, V3   ; V1[0] = V2[0] + V3[0]
                 ; V1[1] = V2[1] + V3[1]
                 ; V1[2] = V2[2] + V3[2]
                 ; V1[3] = V2[3] + V3[3]
                </pre>
                
                <h4>Parallel Processing Challenges</h4>
                <ul>
                    <li><strong>Amdahl's Law:</strong> Speedup limited by sequential portion</li>
                    <li><strong>Communication overhead:</strong> Data sharing between processors</li>
                    <li><strong>Synchronization:</strong> Locks, barriers</li>
                    <li><strong>Load balancing:</strong> Distributing work evenly</li>
                </ul>
                
                <h4>Amdahl's Law</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Speedup = 1 / ((1 - P) + P/N)

Where:
P = parallel portion
N = number of processors
                </pre>
                
                <p>Even with infinite processors, speedup limited by sequential portion.</p>
            `,
            keyPoints: [
                "Flynn's taxonomy: SISD, SIMD, MISD, MIMD",
                "Multicore: multiple cores on one chip",
                "SIMD: same operation on multiple data",
                "MIMD: multiple instructions, multiple data (most common)",
                "Amdahl's Law limits parallel speedup"
            ]
        },

        {
            title: "4.7 Analyzing Performance Trade-offs",
            content: `
                <h4>Blueprint Focus: Analyze Performance Enhancements</h4>
                <p>This section focuses on analyzing the trade-offs between different performance enhancement techniques.</p>
                
                <h4>Pipelining Analysis</h4>
                <p><strong>Pros:</strong> Increases throughput, better CPU utilization</p>
                <p><strong>Cons:</strong> Hazards require complex handling, branch penalties</p>
                <p><strong>Trade-off:</strong> Deeper pipeline = higher clock speed but more penalty from hazards</p>
                
                <h4>Cache Analysis</h4>
                <p><strong>Pros:</strong> Dramatically reduces average memory access time</p>
                <p><strong>Cons:</strong> Area/power cost, complexity, cache misses still costly</p>
                <p><strong>Trade-off:</strong> Larger cache = higher hit rate but slower access, more power</p>
                
                <h4>RISC vs CISC Analysis</h4>
                <p><strong>RISC advantages:</strong> Simpler hardware, easier pipelining, lower power, faster clock</p>
                <p><strong>CISC advantages:</strong> Better code density, fewer instructions for complex tasks, backward compatibility</p>
                <p><strong>Modern approach:</strong> CISC front-end with RISC-like internal execution (micro-ops)</p>
                
                <h4>Superscalar Analysis</h4>
                <p><strong>Pros:</strong> CPI < 1, better ILP exploitation</p>
                <p><strong>Cons:</strong> Complex hardware, power hungry, diminishing returns</p>
                <p><strong>Trade-off:</strong> Wider issue = more complexity, limited by program ILP</p>
                
                <h4>Example Analysis: Which architecture is power efficient?</h4>
                <p><strong>RISC is more power efficient</strong> than CISC because:</p>
                <ul>
                    <li>Simpler instructions require less decoding</li>
                    <li>Hardwired control uses less power than microcode ROM</li>
                    <li>Fixed instruction length simplifies fetch logic</li>
                    <li>Load-store architecture reduces complexity</li>
                </ul>
                <p>This is why ARM (RISC) dominates mobile devices.</p>
                
                <h4>Choosing the Right Technique</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Goal</th>
                        <th style="padding:10px; border:1px solid #ddd;">Technique</th>
                        <th style="padding:10px; border:1px solid #ddd;">Trade-off</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Higher throughput</td>
                        <td style="padding:8px; border:1px solid #ddd;">Pipelining, superscalar</td>
                        <td style="padding:8px; border:1px solid #ddd;">More hardware complexity</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Lower memory latency</td>
                        <td style="padding:8px; border:1px solid #ddd;">Larger caches</td>
                        <td style="padding:8px; border:1px solid #ddd;">Area, power, potentially slower hit time</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Better code density</td>
                        <td style="padding:8px; border:1px solid #ddd;">CISC</td>
                        <td style="padding:8px; border:1px solid #ddd;">Complex decode, harder pipelining</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Power efficiency</td>
                        <td style="padding:8px; border:1px solid #ddd;">RISC</td>
                        <td style="padding:8px; border:1px solid #ddd;">Lower code density</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "RISC is more power efficient",
                "Deeper pipelines = higher clock but more hazard penalties",
                "Larger caches = better hit rate but slower hit time",
                "Superscalar = higher throughput but limited by ILP",
                "Choose technique based on goals (performance, power, cost)"
            ]
        }
    ],

    summary: `
        <h3>Chapter 4 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Pipelining:</strong> Overlaps instruction execution, ideal speedup = number of stages, hazards reduce efficiency</li>
            <li><strong>Cache memory:</strong> Fast memory close to CPU, exploits locality, reduces average access time</li>
            <li><strong>RISC:</strong> Simple instructions, load-store, hardwired control, many registers, easy pipelining, power efficient</li>
            <li><strong>CISC:</strong> Complex instructions, memory operands, microprogrammed control, better code density</li>
            <li><strong>RISC is with hardwired control unit with pipelining processing</strong></li>
            <li><strong>Superscalar:</strong> Multiple instructions per cycle, CPI < 1, uses dynamic scheduling</li>
            <li><strong>Flynn's taxonomy:</strong> SISD, SIMD, MISD, MIMD</li>
            <li><strong>Amdahl's Law:</strong> Speedup limited by sequential portion</li>
            <li><strong>RISC is power efficient</strong> (used in mobile devices)</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What is pipelining and how does it improve performance?",
            answer: "Pipelining overlaps instruction execution stages. It increases throughput by starting a new instruction each cycle, achieving ideal speedup of N times (N stages)."
        },
        {
            question: "What are the three types of pipeline hazards?",
            answer: "Structural (resource conflict), Data (data dependency), Control (branches)."
        },
        {
            question: "What is the main purpose of cache memory?",
            answer: "The main purpose of cache memory is to provide faster access to frequently used data between CPU and main memory, reducing average memory access time."
        },
        {
            question: "Compare RISC and CISC architectures.",
            answer: "RISC: simple instructions, load-store, hardwired control, many registers, easy pipelining, power efficient. CISC: complex instructions, memory operands, microprogrammed control, better code density."
        },
        {
            question: "Which architecture is more power efficient? Why?",
            answer: "RISC is more power efficient due to simpler instructions, hardwired control, fixed instruction length, and simpler decode logic."
        },
        {
            question: "What is the correct statement about RISC computers?",
            answer: "RISC is with hardwired control unit with pipelining processing."
        }
    ],

    quickTips: [
        "Pipelining increases throughput, not individual instruction speed",
        "Cache exploits locality (temporal and spatial)",
        "RISC = Reduced Instruction Set Computer",
        "CISC = Complex Instruction Set Computer",
        "RISC has hardwired control, CISC has microprogrammed",
        "RISC is more power efficient",
        "Superscalar = CPI < 1"
    ],

    commonMistakes: [
        "❌ Thinking pipelining speeds up individual instructions - it increases throughput",
        "❌ Confusing RISC and CISC - RISC has fewer, simpler instructions",
        "❌ Believing CISC is always more powerful - RISC can achieve higher clock speeds",
        "❌ Forgetting that cache exploits locality",
        "❌ Not understanding that RISC has hardwired control with pipelining"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 4:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>2 questions</strong> distributed as:</p>
        <ul>
            <li><strong>1 Understand question:</strong> Basic concepts of pipelining, cache, RISC/CISC</li>
            <li><strong>1 Analyze question:</strong> Analyzing performance trade-offs and choosing appropriate techniques</li>
        </ul>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>Understand:</strong> Pipelining stages, cache operation, RISC vs CISC characteristics</li>
            <li><strong>Analyze:</strong> Performance trade-offs, power efficiency, choosing architectures</li>
            <li><strong>Key fact:</strong> RISC is with hardwired control unit with pipelining processing</li>
            <li><strong>Key fact:</strong> RISC is more power efficient</li>
        </ol>
        
        <h4>Practice Understand Questions:</h4>
        <ul>
            <li>Explain how pipelining works and its benefits.</li>
            <li>What is cache memory and why is it important?</li>
            <li>Compare RISC and CISC architectures.</li>
        </ul>
        
        <h4>Practice Analyze Questions:</h4>
        <ul>
            <li>Why is RISC more suitable for mobile devices than CISC?</li>
            <li>Analyze the trade-offs between deeper pipelines and hazard penalties.</li>
            <li>Compare superscalar and multicore approaches to parallelism.</li>
        </ul>
    `
};