// ===============================
// FOCUS AREA: OPERATING SYSTEM - CHAPTER 1
// Introduction to Operating Systems
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaOSChapter1 = {
    title: "Chapter 1: Introduction to Operating Systems",
    
    // Blueprint alignment: 1 question (Understand)
    blueprint: {
        totalQuestions: 1,
        cognitiveLevels: {
            understand: 1
        },
        topics: [
            "Objectives of modern operating systems",
            "Functions of operating systems",
            "Operating system services",
            "Evolution of operating systems"
        ]
    },

    learningObjectives: [
        "Understand the objectives and functions of modern operating systems",
        "Explain the role of OS as resource manager",
        "Describe the evolution of operating systems",
        "Identify different types of operating systems"
    ],

    sections: [
        {
            title: "1.1 What is an Operating System?",
            content: `
                <h4>Definition of Operating System</h4>
                <p>An operating system (OS) is a system software that acts as an intermediary between the user and computer hardware. It manages computer hardware resources and provides services for computer programs.</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">OPERATING SYSTEM VIEWS</p>
                    <pre style="text-align:center;">
┌─────────────────────────────────────┐
│           Users / Applications       │
├─────────────────────────────────────┤
│        OPERATING SYSTEM              │
├─────────────────────────────────────┤
│         Computer Hardware            │
│    (CPU, Memory, I/O Devices)        │
└─────────────────────────────────────┘
                    </pre>
                </div>
                
                <h4>Two Main Views of Operating System</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">View</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Resource Manager</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">OS manages hardware resources (CPU, memory, I/O devices) efficiently and fairly among competing processes</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Extended Machine</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">OS provides abstraction (virtual machine) that hides hardware complexity from users/programmers</td>
                    </tr>
                </table>
                
                <h4>Why Operating Systems are Essential</h4>
                <ul>
                    <li><strong>Convenience:</strong> Makes computer easier to use</li>
                    <li><strong>Efficiency:</strong> Manages resources optimally</li>
                    <li><strong>Ability to evolve:</strong> Allows system to be enhanced without affecting users</li>
                    <li><strong>Multitasking:</strong> Enables multiple programs to run simultaneously</li>
                    <li><strong>Protection:</strong> Isolates and protects processes from each other</li>
                </ul>
            `,
            keyPoints: [
                "OS is intermediary between user and hardware",
                "Two views: resource manager and extended machine",
                "OS provides convenience, efficiency, and ability to evolve",
                "Manages CPU, memory, I/O devices"
            ]
        },

        {
            title: "1.2 Objectives of Modern Operating Systems",
            content: `
                <h4>Primary Objectives</h4>
                <p>The main objectives of modern operating systems are:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Objective</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Convenience</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Make computer easier to use</td>
                        <td style="padding:8px; border:1px solid #ddd;">GUI, file management, command interpreter</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Efficiency</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Use resources optimally</td>
                        <td style="padding:8px; border:1px solid #ddd;">CPU scheduling, memory management, I/O handling</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Ability to Evolve</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Allow system enhancement without disrupting users</td>
                        <td style="padding:8px; border:1px solid #ddd;">Modular design, device drivers, updates</td>
                    </tr>
                </table>
                
                <h4>1. Convenience</h4>
                <ul>
                    <li>Provides user interface (CLI or GUI)</li>
                    <li>Abstracts hardware complexity</li>
                    <li>Manages files and directories</li>
                    <li>Handles program execution</li>
                </ul>
                
                <h4>2. Efficiency</h4>
                <ul>
                    <li>CPU scheduling to maximize utilization</li>
                    <li>Memory management to optimize usage</li>
                    <li>I/O management to reduce waiting time</li>
                    <li>Resource allocation among competing processes</li>
                </ul>
                
                <h4>3. Ability to Evolve</h4>
                <ul>
                    <li>Modular kernel design</li>
                    <li>Device driver framework for new hardware</li>
                    <li>System updates without reboot</li>
                    <li>Backward compatibility</li>
                </ul>
                
                <div class="key-points-box" style="background:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🔑 Important:</strong> The three main objectives of operating systems are <strong>convenience, efficiency, and ability to evolve</strong>.</p>
                </div>
            `,
            keyPoints: [
                "Three main objectives: convenience, efficiency, ability to evolve",
                "Convenience: easier to use computer",
                "Efficiency: optimal resource utilization",
                "Evolution: adapt to new hardware/requirements"
            ]
        },

        {
            title: "1.3 Functions of Operating Systems",
            content: `
                <h4>Key Functions of OS</h4>
                <p>Operating systems perform several essential functions to manage computer resources and provide services to users and applications.</p>
                
                <h4>1. Process Management</h4>
                <ul>
                    <li>Creating and terminating processes</li>
                    <li>Scheduling processes on CPU</li>
                    <li>Synchronization and communication between processes</li>
                    <li>Handling deadlocks</li>
                </ul>
                
                <h4>2. Memory Management</h4>
                <ul>
                    <li>Allocating memory to processes</li>
                    <li>Tracking memory usage</li>
                    <li>Implementing virtual memory</li>
                    <li>Protection and sharing of memory</li>
                </ul>
                
                <h4>3. File System Management</h4>
                <ul>
                    <li>Creating and deleting files/directories</li>
                    <li>Organizing files into directories</li>
                    <li>File access permissions</li>
                    <li>Disk space management</li>
                </ul>
                
                <h4>4. I/O Device Management</h4>
                <ul>
                    <li>Device drivers for hardware communication</li>
                    <li>Buffering and caching</li>
                    <li>Spooling for devices like printers</li>
                    <li>Interrupt handling</li>
                </ul>
                
                <h4>5. Security and Protection</h4>
                <ul>
                    <li>User authentication</li>
                    <li>Access control to resources</li>
                    <li>Protection from unauthorized access</li>
                    <li>Ensuring security and protection of resources</li>
                </ul>
                
                <div class="key-points-box" style="background:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🔑 Important:</strong> One objective of modern operating systems involves <strong>ensuring security and protection</strong> of the system and its resources from unauthorized access and malicious attacks.</p>
                </div>
                
                <h4>6. User Interface</h4>
                <ul>
                    <li>Command-Line Interface (CLI)</li>
                    <li>Graphical User Interface (GUI)</li>
                    <li>Batch interface</li>
                </ul>
                
                <h4>7. System Performance</h4>
                <ul>
                    <li>Monitoring system performance</li>
                    <li>Optimizing resource utilization</li>
                    <li>Load balancing</li>
                </ul>
                
                <h4>Which function focuses on providing users with easy access to applications and resources?</h4>
                <p><strong>User interface management</strong> focuses on providing users with easy access to applications and resources.</p>
            `,
            keyPoints: [
                "Key functions: Process, Memory, File, I/O, Security, UI, Performance",
                "Security objective: ensuring security and protection",
                "User interface management provides easy access to applications",
                "OS protects system from unauthorized access"
            ]
        },

        {
            title: "1.4 Evolution of Operating Systems",
            content: `
                <h4>Historical Evolution</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Generation</th>
                        <th style="padding:10px; border:1px solid #ddd;">Characteristics</th>
                        <th style="padding:10px; border:1px solid #ddd;">Examples</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>0th (1940s)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">No OS, manual operation, plugboards</td>
                        <td style="padding:8px; border:1px solid #ddd;">ENIAC</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>1st (1950s)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Batch processing, monitors, one job at a time</td>
                        <td style="padding:8px; border:1px solid #ddd;">IBM 701</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>2nd (1960s)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Multiprogramming, spooling</td>
                        <td style="padding:8px; border:1px solid #ddd;">IBM OS/360</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>3rd (1970s)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Time-sharing, interactive systems</td>
                        <td style="padding:8px; border:1px solid #ddd;">UNIX, MULTICS</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>4th (1980s)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Personal computers, GUIs, networking</td>
                        <td style="padding:8px; border:1px solid #ddd;">MS-DOS, Mac OS, Windows</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>5th (1990s-2000s)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Distributed systems, mobile OS, virtualization</td>
                        <td style="padding:8px; border:1px solid #ddd;">Linux, Windows NT, Android, iOS</td>
                    </tr>
                </table>
                
                <h4>Types of Operating Systems</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Examples</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Batch OS</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Jobs grouped together, no interaction</td>
                        <td style="padding:8px; border:1px solid #ddd;">Early IBM systems</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Time-sharing OS</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Multiple users share CPU, interactive</td>
                        <td style="padding:8px; border:1px solid #ddd;">UNIX, Linux</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Real-time OS</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Guaranteed response time</td>
                        <td style="padding:8px; border:1px solid #ddd;">VxWorks, QNX</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Distributed OS</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Multiple computers appear as one</td>
                        <td style="padding:8px; border:1px solid #ddd;">Amoeba, Plan 9</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Network OS</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Provides network services</td>
                        <td style="padding:8px; border:1px solid #ddd;">Windows Server, Novell</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Mobile OS</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">For smartphones and tablets</td>
                        <td style="padding:8px; border:1px solid #ddd;">Android, iOS</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Evolution: No OS → Batch → Multiprogramming → Time-sharing → PC → Distributed/Mobile",
                "Different OS types for different needs",
                "Modern OS supports multitasking, networking, GUI"
            ]
        },

        {
            title: "1.5 Operating System Structures",
            content: `
                <h4>OS Design Approaches</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Structure</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Advantages</th>
                        <th style="padding:10px; border:1px solid #ddd;">Disadvantages</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Monolithic</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Single large program with all OS functions</td>
                        <td style="padding:8px; border:1px solid #ddd;">Fast, efficient</td>
                        <td style="padding:8px; border:1px solid #ddd;">Complex, hard to maintain</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Layered</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">OS divided into layers, each using services of lower layer</td>
                        <td style="padding:8px; border:1px solid #ddd;">Modular, easier debugging</td>
                        <td style="padding:8px; border:1px solid #ddd;">Less efficient (layer overhead)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Microkernel</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Minimal kernel, most services run as user processes</td>
                        <td style="padding:8px; border:1px solid #ddd;">Flexible, reliable, easier to extend</td>
                        <td style="padding:8px; border:1px solid #ddd;">Performance overhead</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Modular</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Loadable kernel modules</td>
                        <td style="padding:8px; border:1px solid #ddd;">Flexible, efficient</td>
                        <td style="padding:8px; border:1px solid #ddd;">Module dependencies</td>
                    </tr>
                </table>
                
                <h4>Kernel Types</h4>
                <ul>
                    <li><strong>Monolithic Kernel:</strong> All OS services in kernel space (Linux, Unix)</li>
                    <li><strong>Microkernel:</strong> Minimal kernel, services in user space (Mach, QNX)</li>
                    <li><strong>Hybrid Kernel:</strong> Combination of both (Windows NT, macOS)</li>
                </ul>
            `,
            keyPoints: [
                "Monolithic: all in kernel, fast but complex",
                "Microkernel: minimal kernel, services as user processes",
                "Layered: hierarchical structure",
                "Modular: loadable modules for flexibility"
            ]
        },

        {
            title: "1.6 System Calls and Operating System Services",
            content: `
                <h4>What are System Calls?</h4>
                <p>System calls are programming interfaces that allow user programs to request services from the operating system kernel.</p>
                
                <h4>Types of System Calls</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Category</th>
                        <th style="padding:10px; border:1px solid #ddd;">Examples</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Process Control</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">fork(), exec(), exit(), wait()</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>File Management</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">open(), read(), write(), close(), lseek()</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Device Management</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">ioctl(), read(), write()</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Information Maintenance</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">getpid(), alarm(), sleep()</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Communication</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">pipe(), shmget(), mmap(), socket()</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Protection</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">chmod(), chown(), umask()</td>
                    </tr>
                </table>
                
                <h4>Operating System Services</h4>
                <ul>
                    <li><strong>Program execution:</strong> Load and run programs</li>
                    <li><strong>I/O operations:</strong> Handle input/output</li>
                    <li><strong>File system manipulation:</strong> Read/write files</li>
                    <li><strong>Communication:</strong> Inter-process communication</li>
                    <li><strong>Error detection:</strong> Detect and handle errors</li>
                    <li><strong>Resource allocation:</strong> Allocate resources to processes</li>
                    <li><strong>Accounting:</strong> Track resource usage</li>
                    <li><strong>Protection:</strong> Ensure security</li>
                </ul>
            `,
            keyPoints: [
                "System calls = interface between programs and OS",
                "Categories: process, file, device, info, communication, protection",
                "OS services: program execution, I/O, file system, communication, error detection, resource allocation"
            ]
        }
    ],

    summary: `
        <h3>Chapter 1 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Operating System:</strong> Intermediary between user and hardware, manages resources, provides services</li>
            <li><strong>Two views:</strong> Resource manager (efficient allocation) and Extended machine (abstraction)</li>
            <li><strong>Three objectives:</strong> Convenience, Efficiency, Ability to evolve</li>
            <li><strong>Key functions:</strong> Process management, Memory management, File management, I/O management, Security, UI</li>
            <li><strong>Security objective:</strong> Ensuring security and protection of system and resources</li>
            <li><strong>User interface management:</strong> Provides users with easy access to applications and resources</li>
            <li><strong>Evolution:</strong> No OS → Batch → Multiprogramming → Time-sharing → PC → Distributed/Mobile</li>
            <li><strong>OS structures:</strong> Monolithic, Layered, Microkernel, Modular</li>
            <li><strong>System calls:</strong> Interface for programs to request OS services</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What are the three main objectives of modern operating systems?",
            answer: "Convenience (ease of use), Efficiency (optimal resource utilization), and Ability to evolve (adapt to new requirements)."
        },
        {
            question: "List the key functions of an operating system.",
            answer: "Process management, Memory management, File system management, I/O management, Security and protection, User interface, System performance."
        },
        {
            question: "Which objective of modern operating systems involves protecting the system and its resources from unauthorized access?",
            answer: "Ensuring security and protection."
        },
        {
            question: "Which function of a contemporary operating system focuses on providing users with easy access to applications and resources?",
            answer: "User interface management."
        },
        {
            question: "What are the two main views of an operating system?",
            answer: "Resource manager (efficient allocation) and Extended machine (abstraction for users)."
        },
        {
            question: "What is a system call and what are its categories?",
            answer: "System calls are programming interfaces for programs to request OS services. Categories: Process control, File management, Device management, Information maintenance, Communication, Protection."
        }
    ],

    quickTips: [
        "OS = resource manager + extended machine",
        "Three objectives: Convenience, Efficiency, Evolution",
        "Security objective: protecting system from unauthorized access",
        "User interface management = easy access to applications",
        "System calls = programs talk to OS"
    ],

    commonMistakes: [
        "❌ Thinking OS is just the kernel - OS includes kernel + system programs",
        "❌ Confusing objectives - remember convenience, efficiency, evolution",
        "❌ Not knowing which function handles user access - user interface management",
        "❌ Forgetting that security is a key objective"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 1:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>1 question</strong> at the <strong>Understand</strong> level.</p>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>Objectives of OS:</strong> Convenience, efficiency, ability to evolve</li>
            <li><strong>Security objective:</strong> Protecting system from unauthorized access</li>
            <li><strong>User interface management:</strong> Providing easy access to applications</li>
            <li><strong>Functions of OS:</strong> Process, memory, file, I/O, security, UI</li>
        </ol>
        
        <h4>What "Understand" Means:</h4>
        <p>You need to be able to explain the objectives and functions of modern operating systems.</p>
        
        <h4>Practice Questions:</h4>
        <ul>
            <li>Explain the objectives and functions of modern operating systems.</li>
            <li>What are the three main objectives of an OS? Describe each.</li>
            <li>Which function provides users with easy access to applications?</li>
            <li>What does "ensuring security and protection" mean in OS context?</li>
        </ul>
    `
};