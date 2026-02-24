// ===============================
// FOCUS AREA: COMPUTER ORGANIZATION AND ARCHITECTURE - CHAPTER 3
// Input/Output Organization and Interfaces
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaCOAChapter3 = {
    title: "Chapter 3: Input/Output Organization and Interfaces",
    
    // Blueprint alignment: 2 questions (Understand, Analyze)
    blueprint: {
        totalQuestions: 2,
        cognitiveLevels: {
            understand: 1,
            analyze: 1
        },
        topics: [
            "I/O device communication methods",
            "Standard I/O interfaces",
            "Programmed I/O",
            "Interrupt-driven I/O",
            "Direct Memory Access (DMA)"
        ]
    },

    learningObjectives: [
        "Understand different ways of communicating with I/O devices",
        "Compare programmed I/O, interrupt-driven I/O, and DMA",
        "Analyze the efficiency of different I/O methods",
        "Identify standard I/O interfaces and their characteristics",
        "Understand the role of I/O controllers and drivers"
    ],

    sections: [
        {
            title: "3.1 Introduction to I/O Organization",
            content: `
                <h4>What is I/O Organization?</h4>
                <p>I/O organization deals with how the computer communicates with input/output devices (keyboard, mouse, disk, printer, etc.). It includes the hardware and software components that manage data transfer between the CPU/memory and peripheral devices.</p>
                
                <h4>Why I/O Organization Matters</h4>
                <ul>
                    <li><strong>Performance:</strong> I/O is often the bottleneck in computer systems</li>
                    <li><strong>Diversity:</strong> Wide variety of devices with different speeds and requirements</li>
                    <li><strong>CPU efficiency:</strong> How to transfer data without wasting CPU time</li>
                    <li><strong>Standardization:</strong> Need common interfaces for device compatibility</li>
                </ul>
                
                <h4>I/O Device Characteristics</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Characteristic</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Examples</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Data rate</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Speed of data transfer</td>
                        <td style="padding:8px; border:1px solid #ddd;">Keyboard: slow (10 B/s), Disk: fast (100 MB/s)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Data unit</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Block or stream of characters</td>
                        <td style="padding:8px; border:1px solid #ddd;">Disk: blocks, Terminal: characters</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Timing</td>
                        <td style="padding:8px; border:1px solid #ddd;">Synchronous or asynchronous</td>
                        <td style="padding:8px; border:1px solid #ddd;">Disk: synchronous, Keyboard: asynchronous</td>
                    </tr>
                </table>
                
                <h4>I/O System Components</h4>
                <ul>
                    <li><strong>I/O Devices:</strong> Peripherals (keyboard, disk, printer)</li>
                    <li><strong>I/O Controllers:</strong> Hardware that interfaces between CPU and devices</li>
                    <li><strong>I/O Buses:</strong> Communication pathways (PCI, USB, SATA)</li>
                    <li><strong>I/O Software:</strong> Drivers, operating system routines</li>
                </ul>
            `,
            keyPoints: [
                "I/O organization manages communication with peripheral devices",
                "Devices vary in speed, data unit, and timing",
                "Components: devices, controllers, buses, software",
                "I/O is often the system bottleneck"
            ]
        },

        {
            title: "3.2 I/O Interface Basics",
            content: `
                <h4>What is an I/O Interface?</h4>
                <p>An I/O interface is a hardware component that connects a peripheral device to the system bus. It handles the differences between the device and the CPU/memory, providing a standardized connection.</p>
                
                <h4>Functions of I/O Interface</h4>
                <ul>
                    <li><strong>Data conversion:</strong> Serial to parallel, analog to digital</li>
                    <li><strong>Speed matching:</strong> Buffering between fast CPU and slow device</li>
                    <li><strong>Control and timing:</strong> Handshaking signals</li>
                    <li><strong>Address decoding:</strong> Recognizing its own address</li>
                    <li><strong>Error detection:</strong> Parity checking, CRC</li>
                </ul>
                
                <h4>I/O Interface Registers</h4>
                <p>An I/O interface typically contains three types of registers accessible by the CPU:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Register Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Function</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Data Register</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Holds data to be transferred between CPU and device</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Status Register</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Indicates device status (ready, busy, error)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Control Register</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Receives commands from CPU to control device</td>
                    </tr>
                </table>
                
                <h4>I/O Addressing Schemes</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Scheme</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Advantages</th>
                        <th style="padding:10px; border:1px solid #ddd;">Disadvantages</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Memory-Mapped I/O</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">I/O devices occupy addresses in the memory address space</td>
                        <td style="padding:8px; border:1px solid #ddd;">Uses same instructions as memory access (LOAD/STORE), simpler</td>
                        <td style="padding:8px; border:1px solid #ddd;">Reduces memory address space, no special I/O instructions</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Port-Mapped I/O</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">I/O devices have separate address space, special I/O instructions (IN, OUT)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Doesn't reduce memory space, special I/O instructions</td>
                        <td style="padding:8px; border:1px solid #ddd;">Requires special instructions, more complex</td>
                    </tr>
                </table>
                
                <div class="key-points-box" style="background:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🔑 Important:</strong> In memory-mapped I/O, I/O devices are accessed using the same instructions as memory access (LOAD/STORE). They share the same address space.</p>
                </div>
            `,
            keyPoints: [
                "I/O interface connects devices to system bus",
                "Interface has data, status, and control registers",
                "Memory-mapped I/O: devices in memory address space, use LOAD/STORE",
                "Port-mapped I/O: separate address space, special I/O instructions",
                "Memory-mapped I/O uses the same address space as regular memory"
            ]
        },

        {
            title: "3.3 Programmed I/O (Polling)",
            content: `
                <h4>What is Programmed I/O?</h4>
                <p>Programmed I/O (also called polling) is the simplest I/O method where the CPU actively checks the status of I/O devices and performs data transfers when devices are ready. The CPU is in charge of all aspects of the transfer.</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">PROGRAMMED I/O FLOW</p>
                    <pre style="text-align:center;">
CPU → Check Status Register
        ↓
Device ready? → NO → Wait/Check again
        ↓ YES
CPU transfers data
        ↓
Continue program
                    </pre>
                </div>
                
                <h4>How Programmed I/O Works</h4>
                <ol>
                    <li>CPU continuously reads the status register of the I/O device</li>
                    <li>If device is ready, CPU performs data transfer (read from or write to data register)</li>
                    <li>If device is not ready, CPU waits (busy-waiting) and checks again</li>
                    <li>After transfer, CPU continues with program</li>
                </ol>
                
                <h4>Example: Reading a Character from Keyboard</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
poll:   LOAD R1, status_addr   ; Check keyboard status
        AND R1, ready_mask      ; Is character ready?
        BEQ poll                ; If not, keep polling
        LOAD R2, data_addr      ; Read character
        ; Process character...
                </pre>
                
                <h4>Advantages of Programmed I/O</h4>
                <ul>
                    <li>Simple to implement</li>
                    <li>No special hardware required</li>
                    <li>Complete CPU control over I/O operations</li>
                </ul>
                
                <h4>Disadvantages of Programmed I/O</h4>
                <ul>
                    <li><strong>CPU time wasted:</strong> CPU spends most time waiting for slow devices</li>
                    <li><strong>No concurrency:</strong> CPU can't do other work while waiting</li>
                    <li><strong>Inefficient for high-speed devices:</strong> CPU can't keep up</li>
                </ul>
                
                <h4>Programmed I/O Wastes CPU Cycles</h4>
                <p>In programmed I/O, the CPU is in a busy-wait loop, constantly checking device status. This is inefficient because the CPU could be doing useful work instead of waiting for slow I/O devices.</p>
                
                <p><strong>Analogy:</strong> Like waiting for a text message by constantly checking your phone every second instead of doing other tasks.</p>
            `,
            keyPoints: [
                "Programmed I/O = CPU polls devices (checks status)",
                "CPU waits in busy-wait loop until device ready",
                "Simple but wastes CPU time",
                "Inefficient for slow devices",
                "CPU cycles wasted in waiting"
            ]
        },

        {
            title: "3.4 Interrupt-Driven I/O",
            content: `
                <h4>What is Interrupt-Driven I/O?</h4>
                <p>Interrupt-driven I/O allows the CPU to do other work while waiting for I/O devices. When a device is ready, it sends an interrupt signal to the CPU. The CPU suspends its current program, services the device, then returns to the original program.</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">INTERRUPT-DRIVEN I/O FLOW</p>
                    <pre style="text-align:center;">
CPU executes program
        ↓
Device sends INTERRUPT when ready
        ↓
CPU saves current state
        ↓
CPU jumps to interrupt handler
        ↓
CPU transfers data
        ↓
CPU restores state and returns
        ↓
Continue program
                    </pre>
                </div>
                
                <h4>How Interrupt-Driven I/O Works</h4>
                <ol>
                    <li>CPU initiates I/O operation and continues with other work</li>
                    <li>Device prepares data and signals interrupt when ready</li>
                    <li>CPU finishes current instruction, saves state (PC, registers)</li>
                    <li>CPU jumps to interrupt handler (interrupt service routine)</li>
                    <li>Handler performs data transfer with device</li>
                    <li>Handler executes return-from-interrupt instruction</li>
                    <li>CPU restores state and resumes original program</li>
                </ol>
                
                <h4>Interrupt Hardware</h4>
                <ul>
                    <li><strong>Interrupt request line:</strong> Signal from device to CPU</li>
                    <li><strong>Interrupt vector:</strong> Address of interrupt handler</li>
                    <li><strong>Interrupt priority:</strong> Determines which interrupt to handle first</li>
                    <li><strong>Interrupt mask:</strong> Allows CPU to disable some interrupts</li>
                </ul>
                
                <h4>Advantages of Interrupt-Driven I/O</h4>
                <ul>
                    <li><strong>Efficient:</strong> CPU can do useful work while waiting for I/O</li>
                    <li><strong>Responsive:</strong> Devices get attention when ready</li>
                    <li><strong>Better CPU utilization:</strong> No busy-waiting</li>
                </ul>
                
                <h4>Disadvantages</h4>
                <ul>
                    <li>More complex hardware and software</li>
                    <li>Overhead of saving/restoring state</li>
                    <li>Potential for interrupt storms</li>
                </ul>
                
                <h4>Comparison with Programmed I/O</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Aspect</th>
                        <th style="padding:10px; border:1px solid #ddd;">Programmed I/O</th>
                        <th style="padding:10px; border:1px solid #ddd;">Interrupt-Driven I/O</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">CPU involvement</td>
                        <td style="padding:8px; border:1px solid #ddd;">Continuous polling</td>
                        <td style="padding:8px; border:1px solid #ddd;">Only when interrupt occurs</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">CPU efficiency</td>
                        <td style="padding:8px; border:1px solid #ddd;">Low (busy-waiting)</td>
                        <td style="padding:8px; border:1px solid #ddd;">High (can do other work)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Hardware complexity</td>
                        <td style="padding:8px; border:1px solid #ddd;">Low</td>
                        <td style="padding:8px; border:1px solid #ddd;">Higher (interrupt controller)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Response time</td>
                        <td style="padding:8px; border:1px solid #ddd;">Deterministic</td>
                        <td style="padding:8px; border:1px solid #ddd;">Variable</td>
                    </tr>
                </table>
                
                <p><strong>Interrupt-driven I/O allows the CPU to perform other tasks until an interrupt occurs.</strong></p>
            `,
            keyPoints: [
                "Interrupt-driven I/O: device signals CPU when ready",
                "CPU can do other work while waiting",
                "More efficient than programmed I/O",
                "Requires interrupt controller hardware",
                "CPU saves state before servicing interrupt"
            ]
        },

        {
            title: "3.5 Direct Memory Access (DMA)",
            content: `
                <h4>What is Direct Memory Access?</h4>
                <p>Direct Memory Access (DMA) is a technique that allows I/O devices to transfer data directly to/from memory without involving the CPU. A special controller (DMA controller) manages the transfer, freeing the CPU for other tasks.</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">DMA OPERATION</p>
                    <pre style="text-align:center;">
CPU initiates DMA transfer
        ↓
DMA controller takes over bus
        ↓
Data transferred directly between
device and memory (CPU free)
        ↓
DMA controller interrupts CPU when done
        ↓
CPU continues
                    </pre>
                </div>
                
                <h4>How DMA Works</h4>
                <ol>
                    <li>CPU sets up DMA controller with:
                        <ul>
                            <li>Source address (I/O device or memory)</li>
                            <li>Destination address (memory or I/O device)</li>
                            <li>Number of bytes to transfer</li>
                            <li>Direction (read or write)</li>
                        </ul>
                    </li>
                    <li>CPU continues with other work</li>
                    <li>DMA controller takes control of bus and transfers data</li>
                    <li>When transfer complete, DMA controller interrupts CPU</li>
                </ol>
                
                <h4>DMA Controller Components</h4>
                <ul>
                    <li><strong>Address register:</strong> Holds memory address for transfer</li>
                    <li><strong>Word count register:</strong> Number of words to transfer</li>
                    <li><strong>Control register:</strong> Transfer direction, mode</li>
                    <li><strong>Status register:</strong> Transfer complete, error flags</li>
                </ul>
                
                <h4>DMA Transfer Modes</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Mode</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Use Case</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Burst mode</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">DMA transfers entire block without releasing bus</td>
                        <td style="padding:8px; border:1px solid #ddd;">High-speed devices, can block CPU</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Cycle stealing</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">DMA transfers one word at a time, giving bus back to CPU between transfers</td>
                        <td style="padding:8px; border:1px solid #ddd;">Slower devices, less CPU impact</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Transparent mode</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">DMA transfers only when CPU not using bus</td>
                        <td style="padding:8px; border:1px solid #ddd;">Minimum CPU interference</td>
                    </tr>
                </table>
                
                <h4>Advantages of DMA</h4>
                <ul>
                    <li><strong>High speed:</strong> Can transfer large blocks quickly</li>
                    <li><strong>CPU free:</strong> CPU can do other work during transfer</li>
                    <li><strong>Efficient:</strong> Ideal for high-speed devices (disks, network)</li>
                </ul>
                
                <h4>Disadvantages</h4>
                <ul>
                    <li>Requires DMA controller hardware</li>
                    <li>Bus contention between CPU and DMA</li>
                    <li>Setup overhead for small transfers</li>
                </ul>
                
                <div class="key-points-box" style="background:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🔑 Important:</strong> DMA <strong>bypasses the CPU</strong> for data transfer, allowing direct communication between I/O devices and memory.</p>
                </div>
                
                <p><strong>DMA minimizes CPU involvement</strong> in I/O operations, making it the most efficient method for bulk data transfer.</p>
            `,
            keyPoints: [
                "DMA transfers data directly between device and memory",
                "DMA controller handles transfer, CPU is free",
                "Three modes: burst, cycle stealing, transparent",
                "DMA bypasses the CPU for certain types of data transfer",
                "Ideal for high-speed devices (disks, network)",
                "DMA minimizes CPU involvement"
            ]
        },

        {
            title: "3.6 Comparison of I/O Methods",
            content: `
                <h4>I/O Methods Comparison</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Aspect</th>
                        <th style="padding:10px; border:1px solid #ddd;">Programmed I/O</th>
                        <th style="padding:10px; border:1px solid #ddd;">Interrupt-Driven I/O</th>
                        <th style="padding:10px; border:1px solid #ddd;">DMA</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>CPU involvement</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Continuous</td>
                        <td style="padding:8px; border:1px solid #ddd;">At start and end</td>
                        <td style="padding:8px; border:1px solid #ddd;">Only at setup and completion</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Data transfer</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Through CPU</td>
                        <td style="padding:8px; border:1px solid #ddd;">Through CPU</td>
                        <td style="padding:8px; border:1px solid #ddd;">Direct memory access</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Hardware complexity</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Low</td>
                        <td style="padding:8px; border:1px solid #ddd;">Medium</td>
                        <td style="padding:8px; border:1px solid #ddd;">High</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>CPU utilization</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Low (busy-waiting)</td>
                        <td style="padding:8px; border:1px solid #ddd;">High</td>
                        <td style="padding:8px; border:1px solid #ddd;">Very high</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Transfer speed</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Low</td>
                        <td style="padding:8px; border:1px solid #ddd;">Medium</td>
                        <td style="padding:8px; border:1px solid #ddd;">High</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Best for</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Simple, slow devices</td>
                        <td style="padding:8px; border:1px solid #ddd;">Medium-speed, unpredictable devices</td>
                        <td style="padding:8px; border:1px solid #ddd;">High-speed block devices</td>
                    </tr>
                </table>
                
                <h4>Choosing an I/O Method</h4>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
Consider:
- Device speed
- Data transfer size (single character vs blocks)
- CPU load
- Hardware cost

Simple rule:
- Slow, simple devices → Programmed I/O
- Medium-speed, unpredictable → Interrupt-driven I/O
- High-speed, block-oriented → DMA
                </pre>
                
                <h4>Summary of CPU Involvement</h4>
                <ul>
                    <li><strong>Programmed I/O:</strong> CPU does everything, wastes cycles waiting</li>
                    <li><strong>Interrupt-driven I/O:</strong> CPU initiates, then continues other work, interrupted when ready</li>
                    <li><strong>DMA:</strong> CPU sets up, DMA controller handles transfer, CPU notified when done</li>
                </ul>
            `,
            keyPoints: [
                "Programmed I/O: CPU polling, simple but inefficient",
                "Interrupt-driven I/O: CPU freed during wait, more efficient",
                "DMA: CPU only sets up, direct memory access, most efficient",
                "Choice depends on device speed and transfer size",
                "DMA best for high-speed block devices"
            ]
        },

        {
            title: "3.7 Standard I/O Interfaces",
            content: `
                <h4>Common I/O Interfaces</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Interface</th>
                        <th style="padding:10px; border:1px solid #ddd;">Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Speed</th>
                        <th style="padding:10px; border:1px solid #ddd;">Common Uses</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>USB</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Serial</td>
                        <td style="padding:8px; border:1px solid #ddd;">USB 2.0: 480 Mbps, USB 3.0: 5 Gbps, USB 3.1: 10 Gbps</td>
                        <td style="padding:8px; border:1px solid #ddd;">Keyboards, mice, storage, printers, cameras</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>SATA</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Serial</td>
                        <td style="padding:8px; border:1px solid #ddd;">SATA 3.0: 6 Gbps</td>
                        <td style="padding:8px; border:1px solid #ddd;">Hard drives, SSDs, optical drives</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>PCI Express</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Serial (multiple lanes)</td>
                        <td style="padding:8px; border:1px solid #ddd;">PCIe 3.0 x16: 16 GB/s</td>
                        <td style="padding:8px; border:1px solid #ddd;">Graphics cards, network cards, SSDs</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>HDMI</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Digital video/audio</td>
                        <td style="padding:8px; border:1px solid #ddd;">Up to 48 Gbps (HDMI 2.1)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Monitors, TVs, projectors</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Ethernet</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Network</td>
                        <td style="padding:8px; border:1px solid #ddd;">10 Mbps to 400 Gbps</td>
                        <td style="padding:8px; border:1px solid #ddd;">Network connectivity</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Thunderbolt</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Combined</td>
                        <td style="padding:8px; border:1px solid #ddd;">40 Gbps</td>
                        <td style="padding:8px; border:1px solid #ddd;">High-speed peripherals, displays</td>
                    </tr>
                </table>
                
                <h4>I/O Controller Types</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Controller</th>
                        <th style="padding:10px; border:1px solid #ddd;">Function</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>USB Controller</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Manages USB devices, hub functionality</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Disk Controller</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Interfaces with storage devices (SATA, NVMe)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Network Interface Card (NIC)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Connects to network, handles packet processing</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Graphics Controller</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Manages display output, 2D/3D acceleration</td>
                    </tr>
                </table>
                
                <h4>Device Drivers</h4>
                <p>Device drivers are software that allow the operating system to communicate with hardware devices. They provide a standardized interface to the hardware and handle device-specific operations.</p>
                
                <p><strong>Functions of device drivers:</strong></p>
                <ul>
                    <li>Initialize devices</li>
                    <li>Manage data transfer</li>
                    <li>Handle interrupts</li>
                    <li>Provide abstract interface to OS</li>
                </ul>
            `,
            keyPoints: [
                "USB: universal serial bus, hot-pluggable",
                "SATA: storage interface for disks/SSDs",
                "PCIe: high-speed internal bus for expansion cards",
                "Ethernet: networking interface",
                "Device drivers provide software interface to hardware"
            ]
        },

        {
            title: "3.8 Analyzing I/O Performance",
            content: `
                <h4>Blueprint Focus: Analyze I/O Methods</h4>
                <p>This section focuses on analyzing the performance and efficiency of different I/O methods for various scenarios.</p>
                
                <h4>Performance Factors</h4>
                <ul>
                    <li><strong>Device speed:</strong> How fast the device can transfer data</li>
                    <li><strong>CPU speed:</strong> How fast CPU can process I/O</li>
                    <li><strong>Transfer size:</strong> Single bytes vs large blocks</li>
                    <li><strong>Interrupt overhead:</strong> Time to save/restore state</li>
                    <li><strong>DMA setup overhead:</strong> Time to program DMA controller</li>
                </ul>
                
                <h4>Analysis Scenario 1: Keyboard Input</h4>
                <p><strong>Device:</strong> Keyboard, very slow (human typing), single character at a time</p>
                
                <p><strong>Programmed I/O:</strong> CPU would spend most time polling, wasting cycles</p>
                <p><strong>Interrupt-driven I/O:</strong> CPU does other work, interrupt per character (low overhead)</p>
                <p><strong>DMA:</strong> Overkill, setup overhead too high for single characters</p>
                
                <p><strong>Best choice:</strong> Interrupt-driven I/O</p>
                
                <h4>Analysis Scenario 2: Hard Disk Transfer</h4>
                <p><strong>Device:</strong> Fast, block-oriented (4KB to 1MB+ blocks)</p>
                
                <p><strong>Programmed I/O:</strong> CPU would be busy entire transfer, can't do other work</p>
                <p><strong>Interrupt-driven I/O:</strong> Still involves CPU copying each word, okay but not optimal</p>
                <p><strong>DMA:</strong> CPU sets up, DMA transfers entire block, CPU free for other work</p>
                
                <p><strong>Best choice:</strong> DMA</p>
                
                <h4>Analysis Scenario 3: Network Interface</h4>
                <p><strong>Device:</strong> High-speed, packet-oriented (variable size)</p>
                
                <p><strong>Modern approach:</strong> DMA with interrupt coalescing</p>
                <ul>
                    <li>DMA transfers packets directly to memory</li>
                    <li>Interrupts generated per group of packets (not per packet)</li>
                    <li>CPU processes packets when needed</li>
                </ul>
                
                <h4>Performance Calculation Example</h4>
                <p><strong>Problem:</strong> Compare CPU time for programmed I/O vs DMA for a 1MB disk transfer.</p>
                
                <p><strong>Assumptions:</strong></p>
                <ul>
                    <li>CPU speed: 3 GHz, 1 cycle per instruction</li>
                    <li>I/O instructions: 10 cycles per byte transferred</li>
                    <li>DMA setup: 1000 cycles</li>
                    <li>Disk speed: 100 MB/s</li>
                </ul>
                
                <p><strong>Programmed I/O:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
CPU time = 1MB × 10 cycles/byte
        = 1,048,576 bytes × 10
        = 10,485,760 cycles
        = 3.5 ms (at 3 GHz)
CPU busy entire transfer
                </pre>
                
                <p><strong>DMA:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
CPU time = DMA setup + interrupt
        = 1000 + 500 (interrupt overhead)
        = 1500 cycles
        = 0.5 μs
CPU free during transfer
                </pre>
                
                <p><strong>Conclusion:</strong> DMA is ~7000x more efficient for large transfers!</p>
            `,
            keyPoints: [
                "Analyze device characteristics to choose I/O method",
                "Slow, character devices: interrupt-driven I/O",
                "Fast, block devices: DMA",
                "DMA setup overhead only for large transfers",
                "DMA bypasses CPU for data transfer"
            ]
        }
    ],

    summary: `
        <h3>Chapter 3 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Programmed I/O (Polling):</strong> CPU checks device status continuously - simple but wastes CPU cycles</li>
            <li><strong>Interrupt-driven I/O:</strong> Device signals CPU when ready - more efficient, CPU can do other work</li>
            <li><strong>Direct Memory Access (DMA):</strong> Dedicated controller transfers data directly between device and memory - CPU only sets up and handles completion</li>
            <li><strong>DMA bypasses the CPU for certain types of data transfer</strong></li>
            <li><strong>Memory-mapped I/O:</strong> Devices in memory address space, accessed with LOAD/STORE</li>
            <li><strong>Port-mapped I/O:</strong> Separate address space, special I/O instructions (IN, OUT)</li>
            <li><strong>Standard interfaces:</strong> USB, SATA, PCIe, Ethernet</li>
            <li><strong>DMA minimizes CPU involvement in I/O operations</strong></li>
            <li>Programmed I/O wastes CPU cycles, interrupt-driven I/O allows CPU to perform other tasks until an interrupt occurs, and DMA minimizes CPU involvement</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What are the three main I/O methods? Briefly describe each.",
            answer: "Programmed I/O (CPU polls devices), Interrupt-driven I/O (device interrupts CPU when ready), DMA (direct memory access by controller)."
        },
        {
            question: "Explain how interrupt-driven I/O works and why it's more efficient than programmed I/O.",
            answer: "CPU initiates I/O and continues other work. Device interrupts when ready. CPU saves state, handles transfer, returns. No busy-waiting."
        },
        {
            question: "What is DMA and when would you use it?",
            answer: "Direct Memory Access uses a controller to transfer data directly between device and memory. Used for high-speed devices like disks."
        },
        {
            question: "Compare memory-mapped I/O and port-mapped I/O.",
            answer: "Memory-mapped: devices in memory space, use LOAD/STORE. Port-mapped: separate address space, special I/O instructions."
        },
        {
            question: "What method bypasses the CPU for certain types of data transfer?",
            answer: "DMA (Direct Memory Access) bypasses the CPU for data transfer."
        },
        {
            question: "Which method is best for a high-speed disk transfer? Why?",
            answer: "DMA is best because it transfers large blocks without CPU involvement, freeing CPU for other work."
        }
    ],

    quickTips: [
        "Programmed I/O = polling (busy-waiting)",
        "Interrupt-driven I/O = device signals CPU",
        "DMA = direct memory access (bypasses CPU)",
        "DMA best for block devices",
        "Interrupt-driven best for character devices",
        "Memory-mapped I/O uses same address space as memory"
    ],

    commonMistakes: [
        "❌ Thinking programmed I/O is efficient - it wastes CPU cycles",
        "❌ Confusing interrupt-driven I/O with DMA - in interrupt-driven, CPU still transfers data",
        "❌ Believing DMA requires CPU for every byte - it only needs setup",
        "❌ Forgetting that memory-mapped I/O reduces memory address space",
        "❌ Not understanding that DMA bypasses CPU"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 3:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>2 questions</strong> distributed as:</p>
        <ul>
            <li><strong>1 Understand question:</strong> Basic I/O concepts, methods, and interfaces</li>
            <li><strong>1 Analyze question:</strong> Analyzing which I/O method is appropriate for different scenarios</li>
        </ul>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>Understand:</strong> Programmed I/O, interrupt-driven I/O, DMA - definitions and operation</li>
            <li><strong>Analyze:</strong> Choose appropriate I/O method based on device characteristics</li>
            <li><strong>DMA:</strong> Know that DMA bypasses CPU and minimizes CPU involvement</li>
            <li><strong>I/O interfaces:</strong> USB, SATA, PCIe, etc.</li>
        </ol>
        
        <h4>Practice Understand Questions:</h4>
        <ul>
            <li>Explain the difference between programmed I/O and interrupt-driven I/O.</li>
            <li>What is DMA and how does it work?</li>
            <li>Describe memory-mapped I/O and port-mapped I/O.</li>
        </ul>
        
        <h4>Practice Analyze Questions:</h4>
        <ul>
            <li>For a keyboard, which I/O method would you choose and why?</li>
            <li>Compare the CPU usage of programmed I/O vs DMA for a large file transfer.</li>
            <li>Analyze why DMA is more efficient for disk transfers but not for keyboard input.</li>
        </ul>
    `
};