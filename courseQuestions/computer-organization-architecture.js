// ===============================
// COMPUTER ORGANIZATION AND ARCHITECTURE
// ===============================
window.computerOrganizationQuestions = [
    {
        "question": "Which of the following is a common way of communicating with I/O devices?",
        "options": [
            "Memory-mapped I/O",
            "Direct memory access (DMA)",
            "Interrupt-driven I/O",
            "All of the above"
        ],
        "answer": 3,
        "explanation": "Memory-mapped I/O, DMA, and interrupt-driven I/O are all common ways of communicating with I/O devices.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "In memory-mapped I/O, I/O devices are mapped into the:",
        "options": [
            "Main memory address space",
            "Cache memory address space",
            "Virtual memory address space",
            "Secondary memory address space"
        ],
        "answer": 0,
        "explanation": "In memory-mapped I/O, I/O devices are assigned addresses in the main memory address space.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which technique allows data to be transferred between an I/O device and memory without involving the CPU?",
        "options": [
            "Memory-mapped I/O",
            "Direct memory access (DMA)",
            "Interrupt-driven I/O",
            "I/O polling"
        ],
        "answer": 1,
        "explanation": "DMA allows the I/O device to transfer data directly to/from memory without CPU intervention, improving efficiency.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which method is used to handle I/O operations that require immediate attention from the CPU?",
        "options": [
            "Memory-mapped I/O",
            "Direct memory access (DMA)",
            "Interrupt-driven I/O",
            "I/O polling"
        ],
        "answer": 2,
        "explanation": "Interrupt-driven I/O uses interrupts to signal the CPU that an I/O operation requires immediate attention.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which I/O technique involves the CPU continuously checking the status of an I/O device for data transfer completion?",
        "options": [
            "Memory-mapped I/O",
            "Direct memory access (DMA)",
            "Interrupt-driven I/O",
            "I/O polling"
        ],
        "answer": 3,
        "explanation": "I/O polling involves the CPU repeatedly checking the status of an I/O device until data transfer is complete.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which standard I/O interface is commonly used in UNIX-like operating systems?",
        "options": [
            "ASCII",
            "USB",
            "RS-232",
            "POSIX"
        ],
        "answer": 3,
        "explanation": "POSIX (Portable Operating System Interface) is a standard I/O interface commonly used in UNIX-like operating systems.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which standard I/O interface allows the connection of peripheral devices using a serial communication protocol?",
        "options": [
            "USB",
            "Ethernet",
            "RS-232",
            "HDMI"
        ],
        "answer": 2,
        "explanation": "RS-232 is a standard interface for serial communication and is commonly used for connecting peripheral devices.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which standard I/O interface is widely used for connecting external storage devices, such as hard drives and flash drives?",
        "options": [
            "SATA",
            "USB",
            "Ethernet",
            "HDMI"
        ],
        "answer": 1,
        "explanation": "USB (Universal Serial Bus) is a standard interface widely used for connecting external storage devices and other peripherals.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which standard I/O interface is commonly used for high-speed communication between computer components?",
        "options": [
            "SATA",
            "USB",
            "Ethernet",
            "HDMI"
        ],
        "answer": 0,
        "explanation": "SATA (Serial ATA) is a standard interface commonly used for high-speed communication between storage devices and the motherboard.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which standard I/O interface is primarily used for audio and video transmission between devices?",
        "options": [
            "SATA",
            "USB",
            "Ethernet",
            "HDMI"
        ],
        "answer": 3,
        "explanation": "HDMI (High-Definition Multimedia Interface) is a standard interface primarily used for audio and video transmission between devices.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which of the following techniques improves the performance of a processor by overlapping the execution of multiple instructions?",
        "options": [
            "Pipelining",
            "Caching",
            "Superscalar architecture",
            "Branch prediction"
        ],
        "answer": 0,
        "explanation": "Pipelining allows the processor to execute multiple instructions simultaneously by dividing the instruction execution process into stages.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which technique improves the performance of a processor by storing frequently accessed data closer to the processor?",
        "options": [
            "Pipelining",
            "Caching",
            "Superscalar architecture",
            "Branch prediction"
        ],
        "answer": 1,
        "explanation": "Caching reduces memory access time by storing frequently accessed data in a cache memory closer to the processor.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which architecture allows multiple instructions to be executed in parallel by having multiple execution units?",
        "options": [
            "Pipelining",
            "Caching",
            "Superscalar architecture",
            "Branch prediction"
        ],
        "answer": 2,
        "explanation": "Superscalar architecture enables the execution of multiple instructions simultaneously by having multiple execution units.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which technique predicts the outcome of conditional branches to improve instruction execution in a processor?",
        "options": [
            "Pipelining",
            "Caching",
            "Superscalar architecture",
            "Branch prediction"
        ],
        "answer": 3,
        "explanation": "Branch prediction predicts whether a conditional branch will be taken or not, allowing the processor to fetch and execute instructions in advance.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which technique improves memory access performance by organizing memory into hierarchical levels?",
        "options": [
            "Pipelining",
            "Caching",
            "Superscalar architecture",
            "Virtual memory"
        ],
        "answer": 1,
        "explanation": "Caching improves memory access performance by utilizing a hierarchy of cache memories that store frequently accessed data.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which technique reduces memory access latency by allowing the processor to fetch multiple instructions in a single cycle?",
        "options": [
            "Pipelining",
            "Caching",
            "Superscalar architecture",
            "Instruction-level parallelism"
        ],
        "answer": 3,
        "explanation": "Instruction-level parallelism allows the processor to fetch and execute multiple instructions in parallel to reduce memory access latency.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which technique improves performance by translating high-level language instructions into a more efficient form before execution?",
        "options": [
            "Pipelining",
            "Caching",
            "Superscalar architecture",
            "Just-in-time (JIT) compilation"
        ],
        "answer": 3,
        "explanation": "JIT compilation translates high-level language instructions into machine code at runtime, improving execution efficiency.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which technique improves performance by predicting the next set of instructions to be executed based on past execution patterns?",
        "options": [
            "Pipelining",
            "Caching",
            "Superscalar architecture",
            "Branch prediction"
        ],
        "answer": 3,
        "explanation": "Branch prediction predicts the next set of instructions to be executed, improving performance by reducing pipeline stalls.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which technique improves performance by dynamically reordering instructions to maximize instruction-level parallelism?",
        "options": [
            "Pipelining",
            "Caching",
            "Superscalar architecture",
            "Out-of-order execution"
        ],
        "answer": 3,
        "explanation": "Out-of-order execution allows instructions to be executed in an order that maximizes parallelism, improving performance.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which technique improves performance by dynamically allocating processor resources based on program behavior?",
        "options": [
            "Pipelining",
            "Caching",
            "Superscalar architecture",
            "Dynamic resource allocation"
        ],
        "answer": 3,
        "explanation": "Dynamic resource allocation adjusts the allocation of processor resources based on the behavior and needs of the running program.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "The basic building block of computer hardware is:",
        "options": [
            "CPU",
            "Memory",
            "Hard disk",
            "Motherboard"
        ],
        "answer": 1,
        "explanation": "Memory is the fundamental building block of computer hardware, where data and instructions are stored for processing.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which component is responsible for executing instructions and performing calculations in a computer?",
        "options": [
            "CPU",
            "Memory",
            "Hard disk",
            "Motherboard"
        ],
        "answer": 0,
        "explanation": "The Central Processing Unit (CPU) is responsible for executing instructions and performing calculations in a computer.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which component stores data and instructions even when the computer is turned off?",
        "options": [
            "CPU",
            "Memory",
            "Hard disk",
            "Motherboard"
        ],
        "answer": 2,
        "explanation": "The hard disk is a non-volatile storage device that stores data and instructions even when the computer is turned off.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "The motherboard of a computer is responsible for:",
        "options": [
            "Executing instructions",
            "Storing data",
            "Connecting different components",
            "Performing calculations"
        ],
        "answer": 2,
        "explanation": "The motherboard acts as a central hub that connects various hardware components, including the CPU, memory, storage devices, and peripherals.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which component is responsible for storing data and instructions temporarily during program execution?",
        "options": [
            "CPU",
            "Memory",
            "Hard disk",
            "Motherboard"
        ],
        "answer": 1,
        "explanation": "Memory is used to store data and instructions temporarily while a program is being executed by the CPU.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which type of software controls and manages the hardware resources of a computer?",
        "options": [
            "Operating system",
            "Application software",
            "Programming language",
            "Compiler"
        ],
        "answer": 0,
        "explanation": "The operating system is responsible for managing and controlling the hardware resources of a computer, such as memory, CPU, and peripherals.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which software allows users to perform specific tasks or functions on a computer?",
        "options": [
            "Operating system",
            "Application software",
            "Programming language",
            "Compiler"
        ],
        "answer": 1,
        "explanation": "Application software refers to programs or software applications that are designed to perform specific tasks or functions, such as word processing, spreadsheet calculations, or graphic design.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which component of the computer system holds the instructions and data that are currently being processed?",
        "options": [
            "CPU",
            "Memory",
            "Hard disk",
            "Motherboard"
        ],
        "answer": 1,
        "explanation": "Memory holds the instructions and data that are currently being processed by the CPU.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which type of software translates high-level programming languages into machine code?",
        "options": [
            "Operating system",
            "Application software",
            "Programming language",
            "Compiler"
        ],
        "answer": 3,
        "explanation": "A compiler is a software program that translates high-level programming languages, such as C or Java, into machine code that can be understood by the computer's hardware.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "The system clock in a computer is responsible for:",
        "options": [
            "Controlling the execution speed of instructions",
            "Storing data and instructions",
            "Managing the input/output devices",
            "Connecting different hardware components"
        ],
        "answer": 0,
        "explanation": "The system clock generates timing signals that control the execution speed of instructions and synchronize the operations of different components in a computer.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which process is responsible for fetching instructions from memory?",
        "options": [
            "Decoding",
            "Execution",
            "Fetching",
            "Storing"
        ],
        "answer": 2,
        "explanation": "The process of fetching involves retrieving instructions from memory to be executed by the CPU.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which process decodes the fetched instruction and determines the necessary actions?",
        "options": [
            "Decoding",
            "Execution",
            "Fetching",
            "Storing"
        ],
        "answer": 0,
        "explanation": "The decoding process interprets the fetched instruction and determines the necessary actions to be taken by the CPU.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which process carries out the actual operations or calculations specified by the instruction?",
        "options": [
            "Decoding",
            "Execution",
            "Fetching",
            "Storing"
        ],
        "answer": 1,
        "explanation": "The execution process performs the actual operations or calculations specified by the decoded instruction.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which process is responsible for storing the results of the executed instruction?",
        "options": [
            "Decoding",
            "Execution",
            "Fetching",
            "Storing"
        ],
        "answer": 3,
        "explanation": "The storing process saves the results of the executed instruction back to memory or registers for future use.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which unit of the CPU is responsible for fetching instructions and data from memory?",
        "options": [
            "Arithmetic Logic Unit (ALU)",
            "Control Unit (CU)",
            "Cache Unit",
            "Register Unit"
        ],
        "answer": 1,
        "explanation": "The Control Unit is responsible for fetching instructions and data from memory and coordinating the operations of other CPU components.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which unit of the CPU performs arithmetic and logical operations?",
        "options": [
            "Arithmetic Logic Unit (ALU)",
            "Control Unit (CU)",
            "Cache Unit",
            "Register Unit"
        ],
        "answer": 0,
        "explanation": "The Arithmetic Logic Unit (ALU) performs arithmetic operations (such as addition and subtraction) and logical operations (such as AND and OR) as directed by the instructions.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which component of the CPU temporarily stores data and instructions during processing?",
        "options": [
            "Arithmetic Logic Unit (ALU)",
            "Control Unit (CU)",
            "Cache Unit",
            "Register Unit"
        ],
        "answer": 3,
        "explanation": "The Register Unit consists of various registers that temporarily store data and instructions during processing.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which component of the CPU controls the flow of data and instructions within the CPU?",
        "options": [
            "Arithmetic Logic Unit (ALU)",
            "Control Unit (CU)",
            "Cache Unit",
            "Register Unit"
        ],
        "answer": 1,
        "explanation": "The Control Unit controls the flow of data and instructions within the CPU and coordinates the operations of other units.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which component of the CPU stores frequently accessed data for faster access?",
        "options": [
            "Arithmetic Logic Unit (ALU)",
            "Control Unit (CU)",
            "Cache Unit",
            "Register Unit"
        ],
        "answer": 2,
        "explanation": "The Cache Unit stores frequently accessed data closer to the CPU, providing faster access compared to main memory.",
        "course": "Computer Organization and Architecture"
    },
    {
        "question": "Which process is responsible for determining the next instruction to be fetched and executed?",
        "options": [
            "Decoding",
            "Execution",
            "Fetching",
            "Storing"
        ],
        "answer": 2,
        "explanation": "The fetching process determines the next instruction to be fetched and executed based on the program counter and the current instruction being processed.",
        "course": "Computer Organization and Architecture"
    }
];