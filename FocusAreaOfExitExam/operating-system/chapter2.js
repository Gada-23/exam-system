// ===============================
// FOCUS AREA: OPERATING SYSTEM - CHAPTER 2
// Process Management and CPU Scheduling
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaOSChapter2 = {
    title: "Chapter 2: Process Management and CPU Scheduling",
    
    // Blueprint alignment: 2 questions (Understand, Apply, Analyze)
    blueprint: {
        totalQuestions: 2,
        cognitiveLevels: {
            understand: 0.5,
            apply: 1,
            analyze: 0.5
        },
        topics: [
            "Process concepts and states",
            "Process control block (PCB)",
            "CPU scheduling algorithms",
            "Preemptive vs non-preemptive scheduling",
            "Scheduling criteria",
            "Performance comparison of scheduling algorithms"
        ]
    },

    learningObjectives: [
        "Understand process concepts and process states",
        "Identify the components of a Process Control Block",
        "Compare and contrast preemptive and non-preemptive scheduling",
        "Apply different CPU scheduling algorithms",
        "Analyze performance of scheduling algorithms using various criteria",
        "Evaluate scheduling algorithms for different scenarios"
    ],

    sections: [
        {
            title: "2.1 Process Concepts",
            content: `
                <h4>What is a Process?</h4>
                <p>A process is a program in execution. It is an active entity that includes the program code, current activity, and associated resources (memory, open files, CPU registers, etc.).</p>
                
                <div class="key-points-box" style="background:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🔑 Important:</strong> A process is a program in execution. It's an active entity, while a program is a passive entity stored on disk.</p>
                </div>
                
                <h4>Process vs Program</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Aspect</th>
                        <th style="padding:10px; border:1px solid #ddd;">Process</th>
                        <th style="padding:10px; border:1px solid #ddd;">Program</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Nature</td>
                        <td style="padding:8px; border:1px solid #ddd;">Active entity</td>
                        <td style="padding:8px; border:1px solid #ddd;">Passive entity</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Lifetime</td>
                        <td style="padding:8px; border:1px solid #ddd;">Limited (execution time)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Permanent (exists on disk)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Resources</td>
                        <td style="padding:8px; border:1px solid #ddd;">Uses CPU, memory, I/O</td>
                        <td style="padding:8px; border:1px solid #ddd;">No resource usage</td>
                    </tr>
                </table>
                
                <h4>Process States</h4>
                <p>A process changes state as it executes. The typical process states are:</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">PROCESS STATE DIAGRAM</p>
                    <pre style="text-align:center;">
      ┌─────────┐
      │   New   │
      └────┬────┘
           ↓
    ┌──────────────┐
    │     Ready    │←──────────┐
    └──────┬───────┘           │
           │                   │
           ↓ (scheduler dispatch)
    ┌──────────────┐    I/O   ┌──────────────┐
    │   Running    │───or─────▶│    Waiting   │
    └──────┬───────┘  event    └──────────────┘
           │                         ↑
           │ (exit)                   │
           ↓                          │ (I/O completion)
    ┌──────────────┐                  │
    │  Terminated  │──────────────────┘
    └──────────────┘
                    </pre>
                </div>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">State</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>New</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Process is being created</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Ready</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Process is ready to run, waiting for CPU</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Running</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Instructions are being executed</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Waiting (Blocked)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Process waiting for I/O or event</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Terminated</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Process has finished execution</td>
                    </tr>
                </table>
                
                <h4>Process Control Block (PCB)</h4>
                <p>The PCB is a data structure in the OS kernel that contains all information about a specific process. It is also called a task control block.</p>
                
                <p><strong>Contents of PCB:</strong></p>
                <ul>
                    <li><strong>Process state:</strong> running, ready, waiting, etc.</li>
                    <li><strong>Program counter:</strong> Address of next instruction</li>
                    <li><strong>CPU registers:</strong> All register values</li>
                    <li><strong>CPU scheduling info:</strong> Priority, scheduling queue pointers</li>
                    <li><strong>Memory management info:</strong> Page tables, segment tables</li>
                    <li><strong>Accounting info:</strong> CPU time used, time limits</li>
                    <li><strong>I/O status info:</strong> List of open files, I/O devices allocated</li>
                </ul>
                
                <h4>Context Switch</h4>
                <p>When the CPU switches from one process to another, the system must save the state of the old process and load the saved state for the new process. This is called a context switch.</p>
                
                <p><strong>Context switch overhead:</strong> Time spent switching between processes is pure overhead - no useful work is done during this time.</p>
            `,
            keyPoints: [
                "Process = program in execution",
                "Process states: New, Ready, Running, Waiting, Terminated",
                "PCB stores all process information",
                "Context switch = saving/loading process state",
                "Context switch overhead is non-productive time"
            ]
        },

        {
            title: "2.2 CPU Scheduling Fundamentals",
            content: `
                <h4>What is CPU Scheduling?</h4>
                <p>CPU scheduling is the process of deciding which of the processes in the ready queue will be allocated the CPU for execution. The goal is to make the system efficient, fast, and fair.</p>
                
                <h4>Scheduler Types</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Scheduler</th>
                        <th style="padding:10px; border:1px solid #ddd;">Function</th>
                        <th style="padding:10px; border:1px solid #ddd;">Frequency</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Long-term scheduler</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Selects processes from disk to be loaded into memory</td>
                        <td style="padding:8px; border:1px solid #ddd;">Low (seconds, minutes)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Short-term scheduler</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Selects which ready process gets CPU next</td>
                        <td style="padding:8px; border:1px solid #ddd;">Very high (milliseconds)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Medium-term scheduler</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Swaps processes in/out of memory</td>
                        <td style="padding:8px; border:1px solid #ddd;">Medium</td>
                    </tr>
                </table>
                
                <h4>Preemptive vs Non-Preemptive Scheduling</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Aspect</th>
                        <th style="padding:10px; border:1px solid #ddd;">Non-Preemptive</th>
                        <th style="padding:10px; border:1px solid #ddd;">Preemptive</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Definition</td>
                        <td style="padding:8px; border:1px solid #ddd;">Process keeps CPU until it voluntarily releases it (terminates or waits)</td>
                        <td style="padding:8px; border:1px solid #ddd;">OS can interrupt a running process and give CPU to another</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Control</td>
                        <td style="padding:8px; border:1px solid #ddd;">Process controls CPU duration</td>
                        <td style="padding:8px; border:1px solid #ddd;">OS controls CPU allocation</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Advantages</td>
                        <td style="padding:8px; border:1px solid #ddd;">Simple, low overhead</td>
                        <td style="padding:8px; border:1px solid #ddd;">Better response time, fairer</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Disadvantages</td>
                        <td style="padding:8px; border:1px solid #ddd;">Can lead to poor response time</td>
                        <td style="padding:8px; border:1px solid #ddd;">Higher overhead, synchronization issues</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Examples</td>
                        <td style="padding:8px; border:1px solid #ddd;">FCFS, SJF (non-preemptive)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Round Robin, SRTF, Priority (preemptive)</td>
                    </tr>
                </table>
                
                <h4>Which scheduling algorithm is non-preemptive?</h4>
                <p><strong>FCFS (First-Come, First-Served)</strong> is a non-preemptive scheduling algorithm.</p>
                
                <h4>Dispatching</h4>
                <p>The dispatcher is the module that gives control of the CPU to the process selected by the short-term scheduler. It performs:</p>
                <ul>
                    <li>Switching context</li>
                    <li>Switching to user mode</li>
                    <li>Jumping to the proper location in the user program</li>
                </ul>
                
                <p><strong>Dispatch latency:</strong> Time taken for the dispatcher to stop one process and start another.</p>
            `,
            keyPoints: [
                "CPU scheduling selects next process to run",
                "Non-preemptive: process voluntarily releases CPU",
                "Preemptive: OS can interrupt running process",
                "FCFS is non-preemptive",
                "Dispatcher performs context switch"
            ]
        },

        {
            title: "2.3 Scheduling Criteria",
            content: `
                <h4>Performance Metrics for Scheduling</h4>
                <p>Different scheduling algorithms are evaluated using these criteria:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Criterion</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Goal</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>CPU Utilization</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Percentage of time CPU is busy</td>
                        <td style="padding:8px; border:1px solid #ddd;">Maximize (40-90% typical)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Throughput</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Number of processes completed per time unit</td>
                        <td style="padding:8px; border:1px solid #ddd;">Maximize</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Turnaround Time</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Time from submission to completion</td>
                        <td style="padding:8px; border:1px solid #ddd;">Minimize</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Waiting Time</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Total time spent waiting in ready queue</td>
                        <td style="padding:8px; border:1px solid #ddd;">Minimize</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Response Time</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Time from submission to first response (for interactive systems)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Minimize</td>
                    </tr>
                </table>
                
                <h4>Calculating Waiting Time and Turnaround Time</h4>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Turnaround Time = Completion Time - Arrival Time
Waiting Time = Turnaround Time - Burst Time
Response Time = First Response Time - Arrival Time
                </pre>
                
                <h4>Example Calculation</h4>
                <p>For a process with arrival time 0, burst time 10, completion time 15:</p>
                <ul>
                    <li>Turnaround Time = 15 - 0 = 15</li>
                    <li>Waiting Time = 15 - 10 = 5</li>
                </ul>
            `,
            keyPoints: [
                "CPU Utilization: keep CPU busy",
                "Throughput: processes completed per unit time",
                "Turnaround Time: submission to completion",
                "Waiting Time: time in ready queue",
                "Response Time: time to first response",
                "Goal: maximize utilization/throughput, minimize times"
            ]
        },

        {
            title: "2.4 First-Come, First-Served (FCFS) Scheduling",
            content: `
                <h4>FCFS Algorithm</h4>
                <p>FCFS is the simplest scheduling algorithm. The process that requests the CPU first is allocated the CPU first. It is implemented with a FIFO queue.</p>
                
                <p><strong>Type:</strong> Non-preemptive</p>
                
                <h4>Characteristics</h4>
                <ul>
                    <li>Simple to implement</li>
                    <li>Fair in a "first come, first served" sense</li>
                    <li>Average waiting time can be long</li>
                    <li>Suffers from convoy effect (short processes behind long ones)</li>
                </ul>
                
                <h4>Example</h4>
                <p>Processes: P1 (burst 24), P2 (burst 3), P3 (burst 3) arriving in order P1, P2, P3</p>
                
                <p><strong>Gantt Chart:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
| P1 |    P2   |    P3   |
0    24       27       30
                </pre>
                
                <p><strong>Calculations:</strong></p>
                <ul>
                    <li>P1 waiting time = 0</li>
                    <li>P2 waiting time = 24</li>
                    <li>P3 waiting time = 27</li>
                    <li>Average waiting time = (0 + 24 + 27)/3 = 17</li>
                </ul>
                
                <p><strong>Convoy Effect:</strong> If P1 had arrived later, P2 and P3 would have completed quickly, but because P1 is long and arrived first, all short processes wait.</p>
                
                <p><strong>First come first serve CPU scheduling algorithm never cares about execution time when we design the Gantt chart.</strong> It only cares about arrival order.</p>
            `,
            keyPoints: [
                "FCFS = non-preemptive, FIFO queue",
                "Simple but can have long average waiting time",
                "Convoy effect: short processes wait for long ones",
                "Does not consider burst time, only arrival order"
            ]
        },

        {
            title: "2.5 Shortest-Job-First (SJF) Scheduling",
            content: `
                <h4>SJF Algorithm</h4>
                <p>SJF associates with each process the length of its next CPU burst. When the CPU is available, it is assigned to the process that has the smallest next CPU burst.</p>
                
                <p><strong>Types:</strong> Both preemptive and non-preemptive versions exist</p>
                <ul>
                    <li><strong>Non-preemptive SJF:</strong> Once CPU given to process, it runs to completion</li>
                    <li><strong>Preemptive SJF (Shortest-Remaining-Time-First - SRTF):</strong> If a new process arrives with shorter remaining time than current, it preempts</li>
                </ul>
                
                <h4>Non-Preemptive SJF Example</h4>
                <p>Processes: P1 (arrival 0, burst 7), P2 (arrival 2, burst 4), P3 (arrival 4, burst 1), P4 (arrival 5, burst 4)</p>
                
                <p><strong>Gantt Chart:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
| P1 | P3 | P2 |    P4   |
0    7    8    12       16
                </pre>
                
                <p><strong>Calculations:</strong></p>
                <ul>
                    <li>P1 waiting = 0</li>
                    <li>P3 waiting = 7 - 4 = 3</li>
                    <li>P2 waiting = 8 - 2 = 6</li>
                    <li>P4 waiting = 12 - 5 = 7</li>
                    <li>Average waiting = (0 + 3 + 6 + 7)/4 = 4</li>
                </ul>
                
                <h4>Preemptive SJF (SRTF) Example</h4>
                <p>Same processes: P1(0,7), P2(2,4), P3(4,1), P4(5,4)</p>
                
                <p><strong>Gantt Chart:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
| P1 | P2 | P3 | P2 | P4 | P1 |
0    2    4    5    7    11   16
                </pre>
                
                <p><strong>Explanation:</strong></p>
                <ul>
                    <li>0-2: P1 runs (remaining 5)</li>
                    <li>2: P2 arrives (burst 4) < P1 remaining (5) → P2 preempts</li>
                    <li>2-4: P2 runs (remaining 2)</li>
                    <li>4: P3 arrives (burst 1) < P2 remaining (2) → P3 preempts</li>
                    <li>4-5: P3 runs and completes</li>
                    <li>5: P2 continues (remaining 2) vs P4 (burst 4) → P2 runs</li>
                    <li>5-7: P2 completes</li>
                    <li>7: P4 runs (burst 4) vs P1 remaining (5) → P4 runs</li>
                    <li>7-11: P4 completes</li>
                    <li>11-16: P1 completes</li>
                </ul>
                
                <p><strong>Waiting times:</strong></p>
                <ul>
                    <li>P1: 11 - 7 = 4 (ran at 0-2, 11-16)</li>
                    <li>P2: (4-2) + (7-5) = 2 + 2 = 4</li>
                    <li>P3: 4 - 4 = 0</li>
                    <li>P4: 7 - 5 = 2</li>
                    <li>Average waiting = (4 + 4 + 0 + 2)/4 = 2.5</li>
                </ul>
                
                <h4>Advantages and Disadvantages</h4>
                <ul>
                    <li><strong>Advantage:</strong> Optimal in terms of average waiting time (for given set of processes)</li>
                    <li><strong>Disadvantage:</strong> Difficult to know burst time in advance</li>
                    <li><strong>Disadvantage:</strong> Can cause starvation for long processes</li>
                </ul>
                
                <h4>Preemptive shortest job first CPU algorithm waiting time are smaller than waiting time of first come first serve CPU scheduling.</h4>
            `,
            keyPoints: [
                "SJF = shortest next CPU burst first",
                "Non-preemptive SJF: runs to completion",
                "Preemptive SJF (SRTF): can preempt if shorter process arrives",
                "SJF is optimal for average waiting time",
                "SRTF has even lower average waiting time than non-preemptive SJF",
                "Difficult to implement (need to know burst times)"
            ]
        },

        {
            title: "2.6 Priority Scheduling",
            content: `
                <h4>Priority Scheduling Algorithm</h4>
                <p>Each process is assigned a priority. The CPU is allocated to the process with the highest priority.</p>
                
                <p><strong>Types:</strong> Both preemptive and non-preemptive</p>
                <ul>
                    <li><strong>Non-preemptive:</strong> Once CPU given, process runs until completion</li>
                    <li><strong>Preemptive:</strong> If new higher priority process arrives, it preempts current</li>
                </ul>
                
                <h4>Priority Assignment</h4>
                <ul>
                    <li><strong>Static priority:</strong> Priority assigned at creation, remains fixed</li>
                    <li><strong>Dynamic priority:</strong> Priority can change over time (aging to prevent starvation)</li>
                </ul>
                
                <p><strong>Note:</strong> Lower number can indicate higher priority (Unix, Linux) or lower priority (depends on system). Usually, smaller integer = higher priority.</p>
                
                <h4>Preemptive Priority Example</h4>
                <p>Processes: P1(0,8,2), P2(1,4,1), P3(2,9,3) where (arrival, burst, priority) and smaller number = higher priority</p>
                
                <p><strong>Gantt Chart:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
| P1 | P2 | P1 |    P3   |
0    1    5    9        18
                </pre>
                
                <p><strong>Explanation:</strong></p>
                <ul>
                    <li>0-1: P1 runs (priority 2)</li>
                    <li>1: P2 arrives (priority 1 > P1's 2) → P2 preempts</li>
                    <li>1-5: P2 runs and completes</li>
                    <li>5-9: P1 resumes and completes</li>
                    <li>9-18: P3 runs (only one left)</li>
                </ul>
                
                <h4>Starvation Problem</h4>
                <p><strong>Starvation (Indefinite Blocking):</strong> Low priority processes may never execute if high priority processes keep arriving.</p>
                
                <p><strong>Solution - Aging:</strong> Gradually increase the priority of processes waiting in the system over time.</p>
                
                <h4>Both preemptive and non-preemptive priority CPU scheduling are based on priority value, not burst time.</h4>
            `,
            keyPoints: [
                "Priority scheduling = highest priority gets CPU",
                "Can be preemptive or non-preemptive",
                "Starvation: low priority may never run",
                "Aging prevents starvation by increasing priority over time",
                "Priority based on priority value, not burst time"
            ]
        },

        {
            title: "2.7 Round Robin (RR) Scheduling",
            content: `
                <h4>Round Robin Algorithm</h4>
                <p>Round Robin is designed specifically for time-sharing systems. Each process gets a small unit of CPU time (time quantum), usually 10-100 milliseconds. After this time, the process is preempted and added to the end of the ready queue.</p>
                
                <p><strong>Type:</strong> Preemptive</p>
                
                <h4>Characteristics</h4>
                <ul>
                    <li>Fair allocation of CPU to all processes</li>
                    <li>Good response time (suitable for interactive systems)</li>
                    <li>Performance depends heavily on time quantum size</li>
                </ul>
                
                <h4>Effect of Time Quantum</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Quantum Size</th>
                        <th style="padding:10px; border:1px solid #ddd;">Effect</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Very large</td>
                        <td style="padding:8px; border:1px solid #ddd;">Degrades to FCFS</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Very small</td>
                        <td style="padding:8px; border:1px solid #ddd;">Too many context switches, high overhead</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Typical (10-100ms)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Good balance, context switch overhead about 0.1-1ms</td>
                    </tr>
                </table>
                
                <h4>Example</h4>
                <p>Processes: P1 (burst 24), P2 (burst 3), P3 (burst 3) with time quantum = 4</p>
                
                <p><strong>Gantt Chart:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
| P1 | P2 | P3 | P1 | P1 | P1 | P1 | P1 |
0    4    7    10   14   18   22   26   30
                </pre>
                
                <p><strong>Calculations:</strong></p>
                <ul>
                    <li>P1: runs at 0-4, 10-14, 14-18, 18-22, 22-26, 26-30 → waiting = (10-4) + (14-14?) Wait, let's calculate properly:</li>
                    <li>Completion times: P2=7, P3=10, P1=30</li>
                    <li>Turnaround: P1=30, P2=7, P3=10</li>
                    <li>Waiting: P1=30-24=6, P2=7-3=4, P3=10-3=7</li>
                    <li>Average waiting = (6+4+7)/3 = 5.67</li>
                </ul>
                
                <h4>Advantages of Round Robin</h4>
                <ul>
                    <li><strong>Fair allocation of CPU time to all processes</strong> - this is the main advantage</li>
                    <li>Good for time-sharing systems</li>
                    <li>No starvation</li>
                </ul>
                
                <p><strong>What is the main advantage of using the Round Robin (RR) scheduling algorithm?</strong> It provides fair allocation of CPU time to all processes.</p>
            `,
            keyPoints: [
                "Round Robin = each process gets time quantum",
                "Preemptive, designed for time-sharing",
                "Fair allocation of CPU to all processes",
                "Performance depends on quantum size",
                "Main advantage: fair allocation of CPU time"
            ]
        },

        {
            title: "2.8 Multilevel Queue Scheduling",
            content: `
                <h4>Multilevel Queue Scheduling</h4>
                <p>This algorithm partitions the ready queue into several separate queues. Processes are permanently assigned to one queue based on their type (system processes, interactive, batch, etc.). Each queue has its own scheduling algorithm.</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">MULTILEVEL QUEUE</p>
                    <pre style="text-align:center;">
Highest Priority ┌────────────────────┐
                 │ System Processes   │ (RR)
                 ├────────────────────┤
                 │ Interactive        │ (FCFS)
                 ├────────────────────┤
                 │ Batch              │ (FCFS)
Lowest Priority  └────────────────────┘
                    </pre>
                </div>
                
                <h4>Queue Scheduling</h4>
                <p>There must be scheduling between queues, commonly implemented as:</p>
                <ul>
                    <li><strong>Fixed priority scheduling:</strong> Serve all from highest priority queue first. Can cause starvation.</li>
                    <li><strong>Time slice:</strong> Each queue gets a certain amount of CPU time (e.g., 80% to foreground, 20% to background).</li>
                </ul>
                
                <h4>Multilevel Feedback Queue</h4>
                <p>Similar to multilevel queue, but processes can move between queues. This allows aging and adaptation.</p>
                
                <p><strong>Parameters:</strong></p>
                <ul>
                    <li>Number of queues</li>
                    <li>Scheduling algorithm for each queue</li>
                    <li>Method to upgrade/demote processes</li>
                    <li>Method to determine which queue a process enters initially</li>
                </ul>
                
                <p><strong>Example (3 queues):</strong></p>
                <ul>
                    <li>Q0: RR quantum 8 (highest priority)</li>
                    <li>Q1: RR quantum 16</li>
                    <li>Q2: FCFS (lowest priority)</li>
                </ul>
                <p>New process enters Q0. If it doesn't finish in 8ms, moved to Q1. If still not finished, moved to Q2.</p>
            `,
            keyPoints: [
                "Multiple queues for different process types",
                "Each queue has own scheduling algorithm",
                "Scheduling between queues needed",
                "Multilevel feedback allows process movement",
                "Prevents starvation through aging"
            ]
        },

        {
            title: "2.9 Algorithm Comparison and Analysis",
            content: `
                <h4>Blueprint Focus: Compare and Analyze Scheduling Algorithms</h4>
                
                <h4>Comparison Table</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Algorithm</th>
                        <th style="padding:10px; border:1px solid #ddd;">Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Advantages</th>
                        <th style="padding:10px; border:1px solid #ddd;">Disadvantages</th>
                        <th style="padding:10px; border:1px solid #ddd;">Best for</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>FCFS</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Non-preemptive</td>
                        <td style="padding:8px; border:1px solid #ddd;">Simple, fair in order</td>
                        <td style="padding:8px; border:1px solid #ddd;">Convoy effect, long average wait</td>
                        <td style="padding:8px; border:1px solid #ddd;">Batch systems</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>SJF</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Both</td>
                        <td style="padding:8px; border:1px solid #ddd;">Optimal avg waiting time</td>
                        <td style="padding:8px; border:1px solid #ddd;">Need to know burst times, starvation</td>
                        <td style="padding:8px; border:1px solid #ddd;">Batch systems (if times known)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Priority</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Both</td>
                        <td style="padding:8px; border:1px solid #ddd;">Important processes run first</td>
                        <td style="padding:8px; border:1px solid #ddd;">Starvation of low priority</td>
                        <td style="padding:8px; border:1px solid #ddd;">Real-time systems</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Round Robin</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Preemptive</td>
                        <td style="padding:8px; border:1px solid #ddd;">Fair, good response time</td>
                        <td style="padding:8px; border:1px solid #ddd;">Context switch overhead</td>
                        <td style="padding:8px; border:1px solid #ddd;">Time-sharing systems</td>
                    </tr>
                </table>
                
                <h4>Key Facts to Remember</h4>
                <ul>
                    <li><strong>FCFS is non-preemptive</strong> and never cares about execution time</li>
                    <li><strong>Preemptive SJF (SRTF) waiting times are smaller</strong> than FCFS waiting times</li>
                    <li><strong>Both preemptive and non-preemptive priority scheduling</strong> are based on priority, not burst time</li>
                    <li><strong>Round Robin</strong> provides fair allocation of CPU time to all processes</li>
                </ul>
                
                <h4>Analyzing Scheduling Scenarios</h4>
                <p>When analyzing scheduling algorithms, consider:</p>
                <ol>
                    <li><strong>Process characteristics:</strong> CPU-bound vs I/O-bound, arrival patterns</li>
                    <li><strong>System goals:</strong> Throughput, response time, fairness</li>
                    <li><strong>Algorithm properties:</strong> Preemptive or not, complexity</li>
                </ol>
                
                <h4>Example Analysis</h4>
                <p><strong>Question:</strong> Which algorithm would you choose for an interactive system?</p>
                <p><strong>Answer:</strong> Round Robin, because it provides good response time and fair CPU allocation.</p>
                
                <p><strong>Question:</strong> Which algorithm would you choose for a batch system where job times are known in advance?</p>
                <p><strong>Answer:</strong> SJF, because it minimizes average waiting time.</p>
                
                <h4>Maximum Wait Time Calculation</h4>
                <p>Assuming process execution time is known in advance, for which algorithm(s) can the maximum wait time for a given process be computed at the time the job is submitted?</p>
                <p><strong>Answer:</strong> Only non-preemptive algorithms where execution order is fixed at submission time, such as FCFS. In preemptive algorithms, later arrivals can affect wait times unpredictably.</p>
            `,
            keyPoints: [
                "FCFS: non-preemptive, simple but convoy effect",
                "SJF: optimal avg waiting, needs burst times",
                "Priority: based on priority value, can starve",
                "Round Robin: fair, good for interactive systems",
                "Choose algorithm based on system goals"
            ]
        }
    ],

    summary: `
        <h3>Chapter 2 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Process:</strong> Program in execution with states: New, Ready, Running, Waiting, Terminated</li>
            <li><strong>PCB:</strong> Contains process information (state, PC, registers, scheduling info)</li>
            <li><strong>Preemptive vs Non-preemptive:</strong> Preemptive allows OS to interrupt; non-preemptive waits for process to yield</li>
            <li><strong>Scheduling criteria:</strong> CPU utilization, throughput, turnaround time, waiting time, response time</li>
            <li><strong>FCFS:</strong> Non-preemptive, simple, suffers from convoy effect</li>
            <li><strong>SJF:</strong> Optimal average waiting time, needs burst time knowledge</li>
            <li><strong>Priority:</strong> Based on priority value (not burst time), can cause starvation (solved by aging)</li>
            <li><strong>Round Robin:</strong> Preemptive, time quantum, provides fair allocation of CPU time</li>
            <li><strong>FCFS is non-preemptive</strong> and never cares about execution time</li>
            <li><strong>Preemptive SJF waiting times are smaller</strong> than FCFS waiting times</li>
            <li><strong>Both preemptive and non-preemptive priority scheduling</strong> are based on priority value</li>
            <li><strong>Round Robin</strong> provides fair allocation of CPU time to all processes</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What are the five process states? Describe each.",
            answer: "New (being created), Ready (ready to run), Running (executing), Waiting (waiting for I/O), Terminated (finished)."
        },
        {
            question: "What is the difference between preemptive and non-preemptive scheduling?",
            answer: "Preemptive: OS can interrupt running process. Non-preemptive: process runs until it voluntarily releases CPU."
        },
        {
            question: "Which scheduling algorithm is non-preemptive?",
            answer: "FCFS (First-Come, First-Served) is non-preemptive."
        },
        {
            question: "What is the main advantage of Round Robin scheduling?",
            answer: "It provides fair allocation of CPU time to all processes."
        },
        {
            question: "Compare SJF and FCFS in terms of average waiting time.",
            answer: "SJF has lower average waiting time than FCFS. Preemptive SJF (SRTF) has even lower waiting times."
        },
        {
            question: "What problem can occur in priority scheduling and how is it solved?",
            answer: "Starvation (low priority processes never run). Solved by aging (gradually increasing priority)."
        }
    ],

    quickTips: [
        "FCFS = non-preemptive, order of arrival",
        "SJF = shortest next burst, optimal avg waiting",
        "Priority = based on priority value",
        "Round Robin = fair allocation, time quantum",
        "Preemptive SJF (SRTF) has smallest waiting time",
        "All non-preemptive algorithms have same waiting time? No, FCFS and SJF differ."
    ],

    commonMistakes: [
        "❌ Thinking SJF is always preemptive - it has both versions",
        "❌ Confusing waiting time and turnaround time",
        "❌ Believing priority scheduling is based on burst time - it's based on priority value",
        "❌ Forgetting that FCFS is non-preemptive",
        "❌ Not understanding that Round Robin's main advantage is fairness"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 2:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>2 questions</strong> distributed as:</p>
        <ul>
            <li><strong>Understand:</strong> Process concepts, states, PCB</li>
            <li><strong>Apply:</strong> Calculate waiting times, draw Gantt charts for scheduling algorithms</li>
            <li><strong>Analyze:</strong> Compare algorithms, choose appropriate algorithm for scenarios</li>
        </ul>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>FCFS is non-preemptive</strong> and never cares about execution time</li>
            <li><strong>Preemptive SJF waiting times are smaller</strong> than FCFS waiting times</li>
            <li><strong>Both preemptive and non-preemptive priority scheduling</strong> are based on priority value</li>
            <li><strong>Round Robin</strong> provides fair allocation of CPU time</li>
        </ol>
        
        <h4>Practice Apply Questions:</h4>
        <ul>
            <li>Given processes with arrival and burst times, calculate waiting and turnaround times for FCFS, SJF, and Round Robin.</li>
            <li>Draw Gantt charts for each algorithm.</li>
            <li>Determine which algorithm gives lowest average waiting time.</li>
        </ul>
        
        <h4>Practice Analyze Questions:</h4>
        <ul>
            <li>Compare SJF and FCFS for a mix of long and short processes.</li>
            <li>Why is Round Robin preferred for interactive systems?</li>
            <li>How does aging solve starvation in priority scheduling?</li>
        </ul>
    `
};