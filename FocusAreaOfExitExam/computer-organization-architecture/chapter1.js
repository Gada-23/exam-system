// ===============================
// FOCUS AREA: COMPUTER ORGANIZATION AND ARCHITECTURE - CHAPTER 1
// Basic Structure of Computer Hardware and Software
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaCOAChapter1 = {
    title: "Chapter 1: Basic Structure of Computer Hardware and Software",
    
    // Blueprint alignment: 1 question (Understand)
    blueprint: {
        totalQuestions: 1,
        cognitiveLevels: {
            understand: 1
        },
        topics: [
            "Basic structure of computer hardware",
            "Computer software layers",
            "Functional units of a computer",
            "Von Neumann architecture"
        ]
    },

    learningObjectives: [
        "Understand the basic structure and organization of a computer system",
        "Identify the functional units of a computer",
        "Explain the Von Neumann architecture and its components",
        "Describe the interaction between hardware and software",
        "Differentiate between computer organization and architecture"
    ],

    sections: [
        {
            title: "1.1 Introduction to Computer Organization and Architecture",
            content: `
                <h4>What is Computer Organization and Architecture?</h4>
                <p>Computer organization and architecture is the study of the internal working, structuring, and implementation of a computer system. It focuses on how the various components of a computer are interconnected and how they interact to execute programs.</p>
                
                <h4>Computer Architecture vs Computer Organization</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Aspect</th>
                        <th style="padding:10px; border:1px solid #ddd;">Computer Architecture</th>
                        <th style="padding:10px; border:1px solid #ddd;">Computer Organization</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Definition</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">The attributes visible to the programmer (instruction set, data representation, addressing modes)</td>
                        <td style="padding:8px; border:1px solid #ddd;">The operational units and their interconnections that realize the architectural specifications</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Focus</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">What the computer does</td>
                        <td style="padding:8px; border:1px solid #ddd;">How the computer does it</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Example</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Does the computer have multiply instruction?</td>
                        <td style="padding:8px; border:1px solid #ddd;">Is the multiply implemented by hardware or software?</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Change over time</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Architecture remains compatible across generations</td>
                        <td style="padding:8px; border:1px solid #ddd;">Organization changes with technology</td>
                    </tr>
                </table>
                
                <p><strong>Analogy:</strong> Architecture is like the blueprint of a house (what rooms, how many), while organization is like the construction details (wiring, plumbing, materials).</p>
                
                <h4>Why Study Computer Organization?</h4>
                <ul>
                    <li><strong>Performance understanding:</strong> Know why programs run fast or slow</li>
                    <li><strong>System design:</strong> Design efficient computer systems</li>
                    <li><strong>Programming optimization:</strong> Write code that leverages hardware features</li>
                    <li><strong>Career foundation:</strong> Essential for hardware design, embedded systems, and system programming</li>
                </ul>
            `,
            keyPoints: [
                "Architecture = what the computer does (instruction set, visible to programmer)",
                "Organization = how it's implemented (hardware details)",
                "Architecture remains compatible, organization changes with technology",
                "Both are essential for understanding computer systems"
            ]
        },

        {
            title: "1.2 Functional Units of a Computer",
            content: `
                <h4>The Five Classic Functional Units</h4>
                <p>A computer system consists of five main functional units that work together to process data and execute programs.</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">COMPUTER FUNCTIONAL UNITS</p>
                    <pre style="text-align:center;">
┌─────────────────────────────────────┐
│              Input Unit             │
└───────────────┬─────────────────────┘
                ↓
┌─────────────────────────────────────┐
│          Memory Unit                 │
│  ┌───────────┐  ┌───────────┐      │
│  │    CPU    │  │   I/O     │      │
│  │ ALU ── CU│  │ Processor │      │
│  └───────────┘  └───────────┘      │
└───────────────┬─────────────────────┘
                ↓
┌─────────────────────────────────────┐
│             Output Unit              │
└─────────────────────────────────────┘
                    </pre>
                </div>
                
                <h4>1. Input Unit</h4>
                <ul>
                    <li><strong>Function:</strong> Accepts data and instructions from the outside world</li>
                    <li><strong>Examples:</strong> Keyboard, mouse, scanner, microphone, camera</li>
                    <li><strong>Operation:</strong> Converts external data into binary form that the computer can understand</li>
                </ul>
                
                <h4>2. Output Unit</h4>
                <ul>
                    <li><strong>Function:</strong> Sends results from the computer to the outside world</li>
                    <li><strong>Examples:</strong> Monitor, printer, speakers, headphones</li>
                    <li><strong>Operation:</strong> Converts binary data from the computer into human-readable form</li>
                </ul>
                
                <h4>3. Memory Unit (Storage)</h4>
                <ul>
                    <li><strong>Function:</strong> Stores data and instructions</li>
                    <li><strong>Two types:</strong>
                        <ul>
                            <li><strong>Primary Memory (Main Memory):</strong> RAM, fast, volatile, directly accessible by CPU</li>
                            <li><strong>Secondary Memory:</strong> Hard disk, SSD, slower, non-volatile, long-term storage</li>
                        </ul>
                    </li>
                    <li><strong>Memory is organized as</strong> a sequence of locations, each with a unique address</li>
                </ul>
                
                <h4>4. Arithmetic and Logic Unit (ALU)</h4>
                <ul>
                    <li><strong>Function:</strong> Performs arithmetic operations (+, -, ×, ÷) and logical operations (AND, OR, NOT, comparison)</li>
                    <li><strong>Part of:</strong> Central Processing Unit (CPU)</li>
                    <li><strong>Data flow:</strong> Takes data from registers, performs operations, stores results back in registers</li>
                </ul>
                
                <h4>5. Control Unit (CU)</h4>
                <ul>
                    <li><strong>Function:</strong> Directs and coordinates all other units</li>
                    <li><strong>Tasks:</strong>
                        <ul>
                            <li>Fetches instructions from memory</li>
                            <li>Decodes instructions</li>
                            <li>Generates control signals to execute instructions</li>
                            <li>Manages data flow between units</li>
                        </ul>
                    </li>
                    <li><strong>Part of:</strong> Central Processing Unit (CPU)</li>
                </ul>
                
                <h4>Central Processing Unit (CPU)</h4>
                <p>The CPU is the "brain" of the computer and consists of:</p>
                <ul>
                    <li><strong>ALU:</strong> Performs calculations</li>
                    <li><strong>Control Unit:</strong> Directs operations</li>
                    <li><strong>Registers:</strong> Fast temporary storage inside CPU</li>
                </ul>
            `,
            keyPoints: [
                "Five functional units: Input, Output, Memory, ALU, Control Unit",
                "CPU = ALU + Control Unit + Registers",
                "Memory: Primary (RAM, fast, volatile) and Secondary (storage, slow, non-volatile)",
                "ALU handles arithmetic and logic",
                "Control Unit coordinates everything"
            ]
        },

        {
            title: "1.3 Von Neumann Architecture",
            content: `
                <h4>The Von Neumann Model</h4>
                <p>The Von Neumann architecture, proposed by John Von Neumann in 1945, is the fundamental design concept for most computers today. It features a single shared memory for both instructions and data.</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">VON NEUMANN ARCHITECTURE</p>
                    <pre style="text-align:center;">
┌─────────────────────────────────────┐
│              CPU                     │
│  ┌───────────┐  ┌───────────┐      │
│  │    ALU    │  │ Control   │      │
│  │           │  │  Unit     │      │
│  └───────────┘  └───────────┘      │
│       │               │             │
│  ┌───────────┐  ┌───────────┐      │
│  │ Registers │  │   PC, IR  │      │
│  └───────────┘  └───────────┘      │
└───────────────┬─────────────────────┘
                │
                ↓
┌─────────────────────────────────────┐
│           Memory Unit                │
│  (Instructions and Data)            │
└─────────────────────────────────────┘
                │
                ↓
┌─────────────────────────────────────┐
│         Input/Output Units           │
└─────────────────────────────────────┘
                    </pre>
                </div>
                
                <h4>Key Characteristics</h4>
                <ul>
                    <li><strong>Stored Program Concept:</strong> Instructions are stored in memory just like data</li>
                    <li><strong>Single Memory Space:</strong> Both instructions and data share the same memory</li>
                    <li><strong>Sequential Execution:</strong> Instructions are fetched and executed one after another</li>
                    <li><strong>Binary Representation:</strong> All information (instructions and data) is represented in binary</li>
                </ul>
                
                <h4>Components of Von Neumann Architecture</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Component</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Memory</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Stores both instructions and data; addressed by location</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Processing Unit (ALU)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Performs arithmetic and logical operations</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Control Unit</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Fetches, decodes, and executes instructions</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Input/Output</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Communicates with external devices</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Program Counter (PC)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Register that holds address of next instruction</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Instruction Register (IR)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Register that holds current instruction being executed</td>
                    </tr>
                </table>
                
                <h4>Instruction Cycle (Fetch-Execute Cycle)</h4>
                <ol>
                    <li><strong>Fetch:</strong> Control unit fetches instruction from memory at address in PC</li>
                    <li><strong>Increment PC:</strong> PC is incremented to point to next instruction</li>
                    <li><strong>Decode:</strong> Control unit decodes the instruction</li>
                    <li><strong>Execute:</strong> Control unit executes the instruction using ALU if needed</li>
                    <li><strong>Store:</strong> Results are stored back to memory or registers</li>
                    <li><strong>Repeat:</strong> Cycle continues</li>
                </ol>
                
                <h4>Von Neumann Bottleneck</h4>
                <p>The Von Neumann bottleneck is a limitation caused by the single shared bus between CPU and memory. Since instructions and data share the same bus, they cannot be accessed simultaneously, limiting performance.</p>
                
                <p><strong>Implication:</strong> CPU is often idle waiting for data from memory (memory wall).</p>
            `,
            keyPoints: [
                "Von Neumann = stored program concept, instructions and data in same memory",
                "Components: CPU (ALU + CU), Memory, I/O, PC, IR",
                "Fetch-Execute cycle: fetch, decode, execute, store",
                "Von Neumann bottleneck: single bus limits performance",
                "Most computers today are based on Von Neumann architecture"
            ]
        },

        {
            title: "1.4 Computer Software Hierarchy",
            content: `
                <h4>Software Layers</h4>
                <p>Computer software is organized in layers, with each layer providing services to the layer above and hiding implementation details from it.</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">SOFTWARE HIERARCHY</p>
                    <pre style="text-align:center;">
┌─────────────────────────────────────┐
│         Application Software         │
│   (Word processors, games, browsers) │
├─────────────────────────────────────┤
│         System Software              │
│   (Operating systems, compilers)     │
├─────────────────────────────────────┤
│         Machine Language              │
│   (Binary instructions)              │
├─────────────────────────────────────┤
│         Microprogramming / Firmware   │
│   (Hardware-level instructions)      │
├─────────────────────────────────────┤
│         Hardware                     │
│   (CPU, memory, I/O devices)         │
└─────────────────────────────────────┘
                    </pre>
                </div>
                
                <h4>1. Hardware</h4>
                <ul>
                    <li>The physical components of the computer</li>
                    <li>CPU, memory, I/O devices, buses</li>
                    <li>Executes machine instructions</li>
                </ul>
                
                <h4>2. Microprogramming / Firmware</h4>
                <ul>
                    <li>Low-level instructions that control the hardware directly</li>
                    <li>Stored in ROM (Read-Only Memory)</li>
                    <li>Implements the machine instruction set</li>
                </ul>
                
                <h4>3. Machine Language</h4>
                <ul>
                    <li>Binary instructions that the CPU can execute directly</li>
                    <li>Each CPU family has its own instruction set</li>
                    <li>Example: 10110000 01100001 (move value 97 into register)</li>
                </ul>
                
                <h4>4. System Software</h4>
                <ul>
                    <li><strong>Operating System:</strong> Manages hardware resources, provides services to applications</li>
                    <li><strong>Compilers:</strong> Translate high-level language to machine language</li>
                    <li><strong>Assemblers:</strong> Translate assembly language to machine language</li>
                    <li><strong>Device drivers:</strong> Interface between OS and hardware devices</li>
                </ul>
                
                <h4>5. Application Software</h4>
                <ul>
                    <li>Programs that users interact with directly</li>
                    <li>Word processors, spreadsheets, games, web browsers</li>
                    <li>Runs on top of system software</li>
                </ul>
                
                <h4>Levels of Programming Languages</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Level</th>
                        <th style="padding:10px; border:1px solid #ddd;">Examples</th>
                        <th style="padding:10px; border:1px solid #ddd;">Abstraction</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>High-Level</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">C, Java, Python</td>
                        <td style="padding:8px; border:1px solid #ddd;">Close to human language, machine independent</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Assembly</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">x86 assembly, ARM assembly</td>
                        <td style="padding:8px; border:1px solid #ddd;">Mnemonics for machine instructions</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Machine</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Binary code</td>
                        <td style="padding:8px; border:1px solid #ddd;">Directly executed by CPU</td>
                    </tr>
                </table>
                
                <h4>Lowest Level in Computer Architecture</h4>
                <p><strong>Hardware</strong> is the lowest level in computer architecture. It includes the physical electronic components that actually perform the computation.</p>
            `,
            keyPoints: [
                "Software hierarchy: Hardware → Firmware → Machine Language → System Software → Applications",
                "Operating System manages hardware and provides services",
                "Compilers translate high-level to machine language",
                "Hardware is the lowest level in computer architecture",
                "Each level provides abstraction for the level above"
            ]
        },

        {
            title: "1.5 Computer Buses and Interconnection",
            content: `
                <h4>What is a Bus?</h4>
                <p>A bus is a communication pathway that connects two or more devices. It is a shared transmission medium used to transfer data, addresses, and control signals between components.</p>
                
                <h4>Types of Buses</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Bus Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Function</th>
                        <th style="padding:10px; border:1px solid #ddd;">Direction</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Data Bus</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Carries actual data between components</td>
                        <td style="padding:8px; border:1px solid #ddd;">Bidirectional</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Address Bus</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Carries memory addresses from CPU to memory/I/O</td>
                        <td style="padding:8px; border:1px solid #ddd;">Unidirectional (CPU → others)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Control Bus</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Carries control signals (read/write, interrupt, clock)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Bidirectional (some signals each way)</td>
                    </tr>
                </table>
                
                <div class="key-points-box" style="background:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🔑 Important:</strong> The <strong>data bus is bidirectional</strong> (data can flow both ways). The address bus is unidirectional (address flows only from CPU).</p>
                </div>
                
                <h4>Bus Characteristics</h4>
                <ul>
                    <li><strong>Width:</strong> Number of parallel lines (e.g., 32-bit data bus transfers 32 bits at once)</li>
                    <li><strong>Speed:</strong> Frequency at which data is transferred</li>
                    <li><strong>Bandwidth:</strong> Width × Speed (data transfer rate)</li>
                </ul>
                
                <h4>System Bus Architecture</h4>
                <p>In a typical system, a single system bus connects:</p>
                <ul>
                    <li>CPU</li>
                    <li>Memory (RAM)</li>
                    <li>I/O devices (via controllers)</li>
                </ul>
                
                <h4>Bus Arbitration</h4>
                <p>Since multiple devices may want to use the bus at the same time, bus arbitration determines which device gets control. Common methods:</p>
                <ul>
                    <li><strong>Daisy chaining:</strong> Priority based on physical position</li>
                    <li><strong>Centralized arbitration:</strong> Dedicated arbiter decides</li>
                    <li><strong>Distributed arbitration:</strong> Devices negotiate</li>
                </ul>
            `,
            keyPoints: [
                "Bus = communication pathway between components",
                "Data bus: carries data (bidirectional)",
                "Address bus: carries addresses (unidirectional)",
                "Control bus: carries control signals",
                "Bus width affects performance",
                "Arbitration resolves conflicts when multiple devices want the bus"
            ]
        },

        {
            title: "1.6 Performance Metrics",
            content: `
                <h4>How is Computer Performance Measured?</h4>
                
                <h4>Clock Speed</h4>
                <ul>
                    <li>Measured in Hertz (Hz) - cycles per second</li>
                    <li>Modern CPUs: GHz (gigahertz) = billions of cycles per second</li>
                    <li>Higher clock speed generally means faster execution</li>
                    <li>But not the only factor (pipelining, cache, architecture matter)</li>
                </ul>
                
                <h4>Instructions Per Second</h4>
                <ul>
                    <li><strong>MIPS:</strong> Million Instructions Per Second</li>
                    <li>Simple measure, but misleading because different instructions do different amounts of work</li>
                </ul>
                
                <h4>Throughput</h4>
                <ul>
                    <li>Amount of work completed per unit time</li>
                    <li>Example: transactions per second</li>
                </ul>
                
                <h4>Response Time (Latency)</h4>
                <ul>
                    <li>Time between start and completion of a task</li>
                    <li>What users perceive as "speed"</li>
                </ul>
                
                <h4>CPU Performance Equation</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
CPU Time = Instruction Count × Cycles per Instruction × Clock Cycle Time
         = Instruction Count × CPI × Clock Cycle Time
                </pre>
                
                <p>Where:</p>
                <ul>
                    <li><strong>Instruction Count:</strong> Number of instructions executed</li>
                    <li><strong>CPI:</strong> Average cycles per instruction</li>
                    <li><strong>Clock Cycle Time:</strong> Time per clock cycle (1/clock speed)</li>
                </ul>
                
                <h4>Factors Affecting Performance</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Factor</th>
                        <th style="padding:10px; border:1px solid #ddd;">Effect</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Clock speed</td>
                        <td style="padding:8px; border:1px solid #ddd;">Higher speed = faster execution</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Cache size</td>
                        <td style="padding:8px; border:1px solid #ddd;">More cache reduces memory access time</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Pipeline depth</td>
                        <td style="padding:8px; border:1px solid #ddd;">Deeper pipeline can increase throughput</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Instruction set</td>
                        <td style="padding:8px; border:1px solid #ddd;">RISC vs CISC affects CPI and instruction count</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Performance metrics: clock speed, MIPS, throughput, latency",
                "CPU Time = Instruction Count × CPI × Clock Cycle Time",
                "Higher clock speed doesn't always mean better performance (architecture matters)",
                "Cache, pipelining, and instruction set all affect performance"
            ]
        }
    ],

    summary: `
        <h3>Chapter 1 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Architecture vs Organization:</strong> Architecture = what (visible to programmer), Organization = how (implementation)</li>
            <li><strong>Five Functional Units:</strong> Input, Output, Memory, ALU, Control Unit</li>
            <li><strong>CPU = ALU + Control Unit + Registers</strong></li>
            <li><strong>Von Neumann Architecture:</strong> Stored program concept, instructions and data in same memory, sequential execution</li>
            <li><strong>Fetch-Execute Cycle:</strong> Fetch, Decode, Execute, Store</li>
            <li><strong>Software Hierarchy:</strong> Hardware → Firmware → Machine Language → System Software → Applications</li>
            <li><strong>Three Buses:</strong> Data (bidirectional), Address (unidirectional), Control</li>
            <li><strong>Hardware</strong> is the lowest level in computer architecture</li>
            <li><strong>Performance Equation:</strong> CPU Time = Instruction Count × CPI × Clock Cycle Time</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What is the difference between computer architecture and computer organization?",
            answer: "Architecture refers to attributes visible to the programmer (instruction set, addressing modes). Organization refers to how those attributes are implemented in hardware."
        },
        {
            question: "List the five functional units of a computer and briefly describe each.",
            answer: "Input Unit (accepts data), Output Unit (presents results), Memory Unit (stores data/instructions), ALU (performs arithmetic/logic), Control Unit (coordinates operations)."
        },
        {
            question: "Explain the Von Neumann architecture and its key characteristics.",
            answer: "Von Neumann architecture features stored program concept (instructions in memory), single memory space for both instructions and data, sequential execution, and binary representation."
        },
        {
            question: "What is the Von Neumann bottleneck?",
            answer: "The limitation caused by the single shared bus between CPU and memory, where instructions and data cannot be accessed simultaneously, causing CPU idle time."
        },
        {
            question: "Name the three types of buses and their directions.",
            answer: "Data bus (bidirectional), Address bus (unidirectional from CPU), Control bus (bidirectional for control signals)."
        },
        {
            question: "What is the lowest level in computer architecture?",
            answer: "Hardware is the lowest level in computer architecture."
        }
    ],

    quickTips: [
        "Architecture = what, Organization = how",
        "CPU = ALU + CU + Registers",
        "Data bus is bidirectional, address bus is unidirectional",
        "Von Neumann = instructions and data in same memory",
        "Hardware is the lowest level",
        "Performance equation: Time = Instructions × CPI × Cycle Time"
    ],

    commonMistakes: [
        "❌ Confusing architecture and organization - remember architecture is what the programmer sees",
        "❌ Thinking address bus is bidirectional - it's only from CPU to memory/I/O",
        "❌ Forgetting that CPU includes registers, not just ALU and CU",
        "❌ Believing higher clock speed always means faster - architecture matters too",
        "❌ Mixing up primary and secondary memory (RAM vs storage)"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 1:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>1 question</strong> at the <strong>Understand</strong> level.</p>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>Basic structure:</strong> Functional units, CPU components</li>
            <li><strong>Von Neumann architecture:</strong> Stored program concept, fetch-execute cycle</li>
            <li><strong>Hardware vs software:</strong> Software hierarchy, lowest level (hardware)</li>
            <li><strong>Buses:</strong> Types and directions</li>
        </ol>
        
        <h4>What "Understand" Means:</h4>
        <p>You need to be able to explain the basic structure of computer hardware and software, describe the functional units, and understand the Von Neumann model.</p>
        
        <h4>Practice Questions:</h4>
        <ul>
            <li>Explain the basic structure of a computer system with its functional units.</li>
            <li>Describe the Von Neumann architecture and its fetch-execute cycle.</li>
            <li>What are the different types of buses and their functions?</li>
            <li>What is the lowest level in computer architecture and why?</li>
        </ul>
    `
};