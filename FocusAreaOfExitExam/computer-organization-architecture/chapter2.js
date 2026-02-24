// ===============================
// FOCUS AREA: COMPUTER ORGANIZATION AND ARCHITECTURE - CHAPTER 2
// Basic Operations of CPU
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaCOAChapter2 = {
    title: "Chapter 2: Basic Operations of CPU",
    
    // Blueprint alignment: 1 question (Analyze)
    blueprint: {
        totalQuestions: 1,
        cognitiveLevels: {
            analyze: 1
        },
        topics: [
            "CPU structure and components",
            "Instruction cycle",
            "Register organization",
            "Instruction execution",
            "Control unit operations"
        ]
    },

    learningObjectives: [
        "Understand the internal structure of the CPU",
        "Analyze the instruction cycle and its phases",
        "Identify different types of registers and their functions",
        "Explain how instructions are executed",
        "Understand the role of the control unit in CPU operations"
    ],

    sections: [
        {
            title: "2.1 CPU Structure and Components",
            content: `
                <h4>What is the CPU?</h4>
                <p>The Central Processing Unit (CPU) is the "brain" of the computer. It executes instructions, performs calculations, and controls data flow between other components.</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">CPU INTERNAL STRUCTURE</p>
                    <pre style="text-align:center;">
┌─────────────────────────────────────┐
│              CPU                      │
│  ┌───────────────────────────────┐   │
│  │         Control Unit           │   │
│  │  ┌─────┐ ┌─────┐ ┌─────┐     │   │
│  │  │ PC  │ │ IR  │ │ MAR │     │   │
│  │  └─────┘ └─────┘ └─────┘     │   │
│  └───────────────────────────────┘   │
│  ┌───────────────────────────────┐   │
│  │            ALU                 │   │
│  │  ┌─────┐ ┌─────┐ ┌─────┐     │   │
│  │  │ ACC │ │ MQ  │ │...  │     │   │
│  │  └─────┘ └─────┘ └─────┘     │   │
│  └───────────────────────────────┘   │
│  ┌───────────────────────────────┐   │
│  │      General Purpose           │   │
│  │         Registers              │   │
│  │        (R0, R1, ...)          │   │
│  └───────────────────────────────┘   │
└─────────────────────────────────────┘
                    </pre>
                </div>
                
                <h4>Main Components of CPU</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Component</th>
                        <th style="padding:10px; border:1px solid #ddd;">Function</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Arithmetic Logic Unit (ALU)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Performs arithmetic operations (+, -, ×, ÷) and logical operations (AND, OR, NOT, comparisons)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Control Unit (CU)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Directs all operations, generates control signals, manages instruction execution</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Registers</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Fast temporary storage locations inside the CPU</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Internal Buses</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Connect CPU components for data transfer</td>
                    </tr>
                </table>
                
                <h4>CPU Operations</h4>
                <p>The CPU performs four basic operations:</p>
                <ol>
                    <li><strong>Fetch:</strong> Get instruction from memory</li>
                    <li><strong>Decode:</strong> Interpret the instruction</li>
                    <li><strong>Execute:</strong> Perform the operation</li>
                    <li><strong>Writeback:</strong> Store the result</li>
                </ol>
                
                <p><strong>An operation performed on the contents of a register is known as a micro-operation.</strong> These are the fundamental operations that the CPU performs, such as transferring data between registers, performing ALU operations, or updating the program counter.</p>
                
                <div class="key-points-box" style="background:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🔑 Important:</strong> An operation performed on the contents of a register is known as a <strong>micro-operation</strong>.</p>
                </div>
            `,
            keyPoints: [
                "CPU components: ALU, Control Unit, Registers, Internal Buses",
                "Four basic operations: Fetch, Decode, Execute, Writeback",
                "Micro-operation = operation on register contents",
                "CPU executes instructions sequentially"
            ]
        },

        {
            title: "2.2 Register Organization",
            content: `
                <h4>What are Registers?</h4>
                <p>Registers are small, high-speed storage locations within the CPU. They are used to hold data temporarily during instruction execution. Register access is much faster than memory access (typically 1 cycle vs 10-100 cycles).</p>
                
                <h4>Types of Registers</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Register Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Symbol</th>
                        <th style="padding:10px; border:1px solid #ddd;">Function</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Program Counter</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">PC</td>
                        <td style="padding:8px; border:1px solid #ddd;">Holds address of next instruction to be executed</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Instruction Register</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">IR</td>
                        <td style="padding:8px; border:1px solid #ddd;">Holds the current instruction being executed</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Memory Address Register</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">MAR</td>
                        <td style="padding:8px; border:1px solid #ddd;">Holds address of memory location to access</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Memory Data Register</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">MDR</td>
                        <td style="padding:8px; border:1px solid #ddd;">Holds data to be written to or read from memory</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Accumulator</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">ACC</td>
                        <td style="padding:8px; border:1px solid #ddd;">Stores results of ALU operations (in some architectures)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>General Purpose Registers</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">R0, R1, ...</td>
                        <td style="padding:8px; border:1px solid #ddd;">Hold data and addresses for various purposes</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Status Register / Flags</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">PSW</td>
                        <td style="padding:8px; border:1px solid #ddd;">Holds condition flags (zero, carry, overflow, sign)</td>
                    </tr>
                </table>
                
                <h4>Register Transfer Operations</h4>
                <p>Data movement between registers is described using Register Transfer Language (RTL). Common operations:</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
PC → MAR          ; Copy PC contents to MAR
MDR → IR          ; Copy MDR contents to IR
R1 + R2 → R3      ; Add R1 and R2, store result in R3
PC ← PC + 1       ; Increment PC by 1
                </pre>
                
                <h4>Example: Instruction Fetch Sequence</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
1. MAR ← PC               ; Send PC address to MAR
2. Read memory            ; Request memory read
3. MDR ← Memory[MAR]      ; Load instruction into MDR
4. IR ← MDR               ; Transfer instruction to IR
5. PC ← PC + 1            ; Increment PC for next instruction
                </pre>
                
                <h4>The fetched instruction is stored in the CPU register known as the Instruction Register (IR).</h4>
            `,
            keyPoints: [
                "Registers are fast storage inside CPU",
                "PC: address of next instruction",
                "IR: current instruction being executed",
                "MAR: memory address for access",
                "MDR: data for memory read/write",
                "ACC: accumulator for ALU results",
                "Flags: status information (zero, carry, etc.)",
                "Fetched instruction stored in IR"
            ]
        },

        {
            title: "2.3 Instruction Cycle (Fetch-Execute Cycle)",
            content: `
                <h4>The Instruction Cycle</h4>
                <p>The instruction cycle is the sequence of steps the CPU performs to execute a single instruction. It consists of multiple phases, each composed of micro-operations.</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">INSTRUCTION CYCLE</p>
                    <pre style="text-align:center;">
┌─────────┐
│  Start  │
└────┬────┘
     ↓
┌─────────────┐
│ Fetch Phase │
└────┬────────┘
     ↓
┌─────────────┐
│ Decode Phase│
└────┬────────┘
     ↓
┌─────────────┐
│Execute Phase│
└────┬────────┘
     ↓
┌─────────────┐
│Store/Write  │
│   Back      │
└────┬────────┘
     ↓
┌─────────────┐
│ Check for   │
│ Interrupts  │
└────┬────────┘
     ↓
     └───→ Repeat
                    </pre>
                </div>
                
                <h4>Phase 1: Fetch Phase</h4>
                <p>The CPU fetches the instruction from memory:</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
1. MAR ← PC               ; Address of next instruction
2. Read memory            ; Request memory read
3. MDR ← Memory[MAR]      ; Get instruction
4. IR ← MDR               ; Store instruction in IR
5. PC ← PC + 1            ; Point to next instruction
                </pre>
                
                <p><strong>The correct sequence of micro-operations for the fetch phase:</strong> PC → MAR, Read; MDR → IR, PC ← PC + 1</p>
                
                <h4>Phase 2: Decode Phase</h4>
                <p>The control unit interprets the instruction in IR:</p>
                <ul>
                    <li>Determines operation to perform (add, load, branch, etc.)</li>
                    <li>Identifies operands (registers, memory addresses, immediate values)</li>
                    <li>Sets up control signals for execution phase</li>
                </ul>
                
                <h4>Phase 3: Execute Phase</h4>
                <p>The CPU performs the operation. Examples:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Instruction Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Execute Phase Micro-operations</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">ADD R1, R2</td>
                        <td style="padding:8px; border:1px solid #ddd;">R1 ← R1 + R2 (ALU operation)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">LOAD R1, addr</td>
                        <td style="padding:8px; border:1px solid #ddd;">MAR ← addr; Read; MDR ← Memory; R1 ← MDR</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">STORE R1, addr</td>
                        <td style="padding:8px; border:1px solid #ddd;">MAR ← addr; MDR ← R1; Write</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">JUMP addr</td>
                        <td style="padding:8px; border:1px solid #ddd;">PC ← addr</td>
                    </tr>
                </table>
                
                <h4>Phase 4: Write-Back Phase</h4>
                <p>Results are stored back to registers or memory:</p>
                <ul>
                    <li>ALU result stored in destination register</li>
                    <li>Memory write operations complete</li>
                    <li>Status flags updated (zero, carry, overflow)</li>
                </ul>
                
                <h4>Phase 5: Interrupt Check</h4>
                <p>After each instruction, the CPU checks for interrupts from I/O devices. If an interrupt is pending, the CPU saves its state and jumps to interrupt handler.</p>
                
                <h4>Complete Instruction Cycle Example</h4>
                <p><strong>Instruction:</strong> ADD R1, R2 (add contents of R2 to R1)</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Fetch:
    MAR ← PC
    Read memory
    MDR ← Memory[MAR]
    IR ← MDR
    PC ← PC + 1

Decode:
    Control unit decodes IR = ADD operation
    Identifies R1 and R2 as operands

Execute:
    ALU performs R1 + R2
    Result placed in temporary register

Write-back:
    R1 ← result
    Update status flags (zero, carry, etc.)
                </pre>
            `,
            keyPoints: [
                "Instruction cycle = Fetch, Decode, Execute, Write-back, Interrupt check",
                "Fetch: PC → MAR, Read, MDR → IR, PC ← PC + 1",
                "Decode: interpret instruction",
                "Execute: perform operation",
                "Write-back: store results",
                "The fetched instruction is stored in IR"
            ]
        },

        {
            title: "2.4 Instruction Formats and Types",
            content: `
                <h4>What is an Instruction?</h4>
                <p>An instruction is a command that tells the CPU what operation to perform. It consists of an opcode (operation code) and possibly operands (data or addresses).</p>
                
                <h4>Instruction Format</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
┌─────────────┬─────────────┬─────────────┐
│   Opcode    │  Operand 1  │  Operand 2  │
└─────────────┴─────────────┴─────────────┘
                </pre>
                
                <ul>
                    <li><strong>Opcode:</strong> Specifies the operation (ADD, SUB, LOAD, etc.)</li>
                    <li><strong>Operands:</strong> Specify data or addresses (registers, memory locations, immediate values)</li>
                </ul>
                
                <h4>Types of Instructions</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Instruction Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Data Transfer</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Move data between registers, memory, and I/O</td>
                        <td style="padding:8px; border:1px solid #ddd;">LOAD, STORE, MOVE</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Arithmetic</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Perform arithmetic calculations</td>
                        <td style="padding:8px; border:1px solid #ddd;">ADD, SUB, MUL, DIV</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Logical</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Perform bitwise operations</td>
                        <td style="padding:8px; border:1px solid #ddd;">AND, OR, NOT, XOR</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Control Transfer</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Change program flow</td>
                        <td style="padding:8px; border:1px solid #ddd;">JUMP, BRANCH, CALL, RETURN</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Input/Output</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Communicate with I/O devices</td>
                        <td style="padding:8px; border:1px solid #ddd;">IN, OUT</td>
                    </tr>
                </table>
                
                <h4>In an arithmetic instruction like ADD R1, R2, R3:</h4>
                <ul>
                    <li><strong>Operation:</strong> R1 ← R2 + R3</li>
                    <li><strong>Performed by:</strong> ALU using R2 and R3 as inputs and storing result in R1</li>
                </ul>
                
                <h4>Addressing Modes</h4>
                <p>Addressing modes specify how operands are accessed:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Mode</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Immediate</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Operand is in the instruction</td>
                        <td style="padding:8px; border:1px solid #ddd;">ADD R1, #5</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Register</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Operand is in a register</td>
                        <td style="padding:8px; border:1px solid #ddd;">ADD R1, R2</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Direct</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Address is in the instruction</td>
                        <td style="padding:8px; border:1px solid #ddd;">LOAD R1, 1000</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Indirect</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Address is in a register</td>
                        <td style="padding:8px; border:1px solid #ddd;">LOAD R1, (R2)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Indexed</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Address = base + index</td>
                        <td style="padding:8px; border:1px solid #ddd;">LOAD R1, 100(R2)</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Instruction = Opcode + Operands",
                "Data transfer: LOAD, STORE",
                "Arithmetic: ADD, SUB, MUL, DIV",
                "Logical: AND, OR, NOT, XOR",
                "Control transfer: JUMP, BRANCH, CALL",
                "ADD R1, R2, R3 means R1 ← R2 + R3 performed by ALU",
                "Addressing modes specify how to find operands"
            ]
        },

        {
            title: "2.5 Control Unit Operations",
            content: `
                <h4>Role of Control Unit</h4>
                <p>The control unit directs all operations within the CPU. It generates timing and control signals that coordinate the activities of other components.</p>
                
                <h4>Functions of Control Unit</h4>
                <ul>
                    <li><strong>Instruction sequencing:</strong> Determines order of instruction execution</li>
                    <li><strong>Instruction interpretation:</strong> Decodes instructions</li>
                    <li><strong>Control signal generation:</strong> Produces signals to activate appropriate hardware</li>
                    <li><strong>Timing control:</strong> Coordinates operations with clock cycles</li>
                </ul>
                
                <h4>Types of Control Units</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Characteristics</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Hardwired Control</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Control logic built with combinational circuits (gates, flip-flops)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Fast, expensive, difficult to modify, used in RISC processors</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Microprogrammed Control</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Control signals generated by executing microinstructions stored in control memory</td>
                        <td style="padding:8px; border:1px solid #ddd;">Flexible, easier to modify, slower, used in CISC processors</td>
                    </tr>
                </table>
                
                <h4>Hardwired Control Unit</h4>
                <ul>
                    <li>Ucsom logic circuits (AND, OR, NOT gates)</li>
                    <li>Control signals generated directly from instruction opcode</li>
                    <li>Very fast (no memory access for control signals)</li>
                    <li>Difficult to modify (requires hardware changes)</li>
                    <li>Common in RISC architectures</li>
                </ul>
                
                <h4>Microprogrammed Control Unit</h4>
                <ul>
                    <li>Control signals stored as microinstructions in control memory (ROM or PLA)</li>
                    <li>Each machine instruction triggers a sequence of microinstructions</li>
                    <li>Slower (requires memory access for control signals)</li>
                    <li>Easy to modify (just change microprogram)</li>
                    <li>Common in CISC architectures</li>
                </ul>
                
                <h4>Control Unit Operation Example</h4>
                <p>For an ADD instruction, the control unit generates these signals:</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
1. Enable PC output to MAR
2. Assert memory read signal
3. Enable memory output to MDR
4. Enable MDR output to IR
5. Increment PC
6. Decode IR
7. Enable register file outputs for R1 and R2 to ALU
8. Set ALU to ADD mode
9. Enable ALU output to register file for R1
10. Update status flags
                </pre>
                
                <h4>Micro-operations and Control Signals</h4>
                <p>Each micro-operation requires specific control signals. For example, the micro-operation <code>MAR ← PC</code> requires:</p>
                <ul>
                    <li>Control signal to enable PC output onto bus</li>
                    <li>Control signal to latch data into MAR</li>
                </ul>
            `,
            keyPoints: [
                "Control unit generates timing and control signals",
                "Hardwired: fast, fixed, RISC",
                "Microprogrammed: flexible, slower, CISC",
                "Each micro-operation requires specific control signals",
                "Control unit decodes instructions and sequences operations"
            ]
        },

        {
            title: "2.6 Analyzing CPU Operations",
            content: `
                <h4>Blueprint Focus: Analyze CPU Operations</h4>
                <p>This section focuses on analyzing how the CPU executes instructions, including tracing execution, identifying bottlenecks, and understanding performance implications.</p>
                
                <h4>Analyzing Instruction Execution</h4>
                <p>To analyze CPU operations, we need to:</p>
                <ol>
                    <li>Identify instruction format and addressing modes</li>
                    <li>Trace micro-operations in each phase</li>
                    <li>Determine register and memory accesses</li>
                    <li>Calculate execution time</li>
                </ol>
                
                <h4>Example Analysis: LOAD Instruction</h4>
                <p><strong>Instruction:</strong> LOAD R1, 1000 (load value from memory address 1000 into R1)</p>
                
                <p><strong>Fetch Phase:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
1. MAR ← PC           ; Get instruction address
2. Read memory        ; Read instruction
3. MDR ← Memory[MAR]  ; Get instruction
4. IR ← MDR           ; Store in IR
5. PC ← PC + 1        ; Update PC
                </pre>
                
                <p><strong>Decode Phase:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
6. Decode IR = LOAD instruction
7. Extract address 1000 from instruction
                </pre>
                
                <p><strong>Execute Phase:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
8. MAR ← 1000         ; Address to read from
9. Read memory        ; Read data
10. MDR ← Memory[1000]; Get data
11. R1 ← MDR          ; Store data in R1
                </pre>
                
                <p><strong>Total cycles:</strong> 11 micro-operations (depends on clock cycles per micro-op)</p>
                
                <h4>Analyzing Performance Factors</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Factor</th>
                        <th style="padding:10px; border:1px solid #ddd;">Impact on Execution</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Instruction complexity</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Complex instructions take more micro-operations (more time)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Addressing mode</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Indirect addressing requires extra memory access (slower)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Memory access</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Memory is slower than registers (cache helps)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Pipeline stalls</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Data dependencies cause pipeline bubbles</td>
                    </tr>
                </table>
                
                <h4>Analyzing a Simple Program</h4>
                <p><strong>Program:</strong> A = B + C (assuming addresses 1000: A, 1004: B, 1008: C)</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
LOAD R1, 1004      ; Load B into R1
LOAD R2, 1008      ; Load C into R2
ADD R1, R1, R2     ; R1 = B + C
STORE R1, 1000     ; Store result in A
                </pre>
                
                <p><strong>Analysis:</strong></p>
                <ul>
                    <li>4 instructions × fetch/decode/execute phases</li>
                    <li>Each LOAD: 1 memory access for instruction, 1 memory access for data (2 memory accesses)</li>
                    <li>ADD: 1 memory access for instruction, no data memory access</li>
                    <li>STORE: 1 memory access for instruction, 1 memory access for data</li>
                    <li>Total memory accesses: 4 (instructions) + 3 (data) = 7 memory accesses</li>
                    <li>Total execution time depends on memory speed and CPU clock</li>
                </ul>
            `,
            keyPoints: [
                "Analyzing CPU operations requires tracing micro-operations",
                "Each instruction goes through fetch, decode, execute phases",
                "Complex instructions take more time",
                "Memory access is slower than register access",
                "Addressing modes affect execution time"
            ]
        }
    ],

    summary: `
        <h3>Chapter 2 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>CPU Components:</strong> ALU, Control Unit, Registers, Internal Buses</li>
            <li><strong>Micro-operation:</strong> Operation performed on register contents</li>
            <li><strong>Key Registers:</strong> PC (program counter), IR (instruction register), MAR, MDR, ACC, Flags</li>
            <li><strong>Fetched instruction stored in:</strong> IR (Instruction Register)</li>
            <li><strong>Fetch phase sequence:</strong> PC → MAR, Read; MDR → IR, PC ← PC + 1</li>
            <li><strong>Instruction cycle:</strong> Fetch, Decode, Execute, Write-back, Interrupt check</li>
            <li><strong>Instruction types:</strong> Data transfer, Arithmetic, Logical, Control transfer, I/O</li>
            <li><strong>ADD R1, R2, R3:</strong> R1 ← R2 + R3 performed by ALU</li>
            <li><strong>Control unit types:</strong> Hardwired (fast, RISC) and Microprogrammed (flexible, CISC)</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What is a micro-operation? Give an example.",
            answer: "A micro-operation is an operation performed on the contents of a register. Example: PC → MAR (copy PC to MAR)."
        },
        {
            question: "List five important CPU registers and their functions.",
            answer: "PC (next instruction address), IR (current instruction), MAR (memory address), MDR (memory data), ACC (ALU results)."
        },
        {
            question: "What is the correct sequence of micro-operations for the fetch phase?",
            answer: "PC → MAR, Read; MDR → IR, PC ← PC + 1"
        },
        {
            question: "Where is the fetched instruction stored in the CPU?",
            answer: "The fetched instruction is stored in the Instruction Register (IR)."
        },
        {
            question: "In an arithmetic instruction like ADD R1, R2, R3, what registers and operations are involved?",
            answer: "R1 ← R2 + R3 is performed by the ALU using R2 and R3 as inputs and storing the result in R1."
        },
        {
            question: "Compare hardwired and microprogrammed control units.",
            answer: "Hardwired: fast, expensive, difficult to modify, used in RISC. Microprogrammed: flexible, easier to modify, slower, used in CISC."
        }
    ],

    quickTips: [
        "Micro-operation = operation on register contents",
        "Fetched instruction goes to IR",
        "Fetch sequence: MAR ← PC, Read, MDR ← Memory, IR ← MDR, PC ← PC + 1",
        "ADD R1, R2, R3 means R1 = R2 + R3 (ALU operation)",
        "Hardwired = fast, Microprogrammed = flexible",
        "PC always points to next instruction"
    ],

    commonMistakes: [
        "❌ Confusing MAR and MDR - MAR holds address, MDR holds data",
        "❌ Thinking PC holds current instruction - it holds NEXT instruction address",
        "❌ Forgetting that micro-operations are the building blocks of instruction execution",
        "❌ Mixing up hardwired and microprogrammed control",
        "❌ Not understanding that fetched instruction goes to IR"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 2:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>1 question</strong> at the <strong>Analyze</strong> level.</p>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>CPU operations:</strong> Micro-operations, register transfers</li>
            <li><strong>Instruction cycle:</strong> Fetch, decode, execute phases</li>
            <li><strong>Register functions:</strong> PC, IR, MAR, MDR, ACC</li>
            <li><strong>Control unit:</strong> Hardwired vs microprogrammed</li>
        </ol>
        
        <h4>What "Analyze" Means:</h4>
        <p>You need to be able to trace instruction execution, analyze micro-operation sequences, and understand how different instructions are processed.</p>
        
        <h4>Practice Analysis Questions:</h4>
        <ul>
            <li>Trace the execution of a LOAD instruction showing all micro-operations.</li>
            <li>Analyze the fetch phase and explain each micro-operation.</li>
            <li>Compare the execution of RISC and CISC instructions in terms of micro-operations.</li>
            <li>Explain how the control unit generates signals for different instructions.</li>
        </ul>
    `
};