// ===============================
// FOCUS AREA: OPERATING SYSTEM - CHAPTER 3
// Deadlocks
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaOSChapter3 = {
    title: "Chapter 3: Deadlocks",
    
    // Blueprint alignment: 1 question (Analyze)
    blueprint: {
        totalQuestions: 1,
        cognitiveLevels: {
            analyze: 1
        },
        topics: [
            "Deadlock conditions",
            "Deadlock prevention",
            "Deadlock avoidance",
            "Deadlock detection",
            "Deadlock recovery"
        ]
    },

    learningObjectives: [
        "Understand the concept of deadlock in operating systems",
        "Explain the four necessary conditions for deadlock",
        "Analyze different strategies for handling deadlocks",
        "Compare deadlock prevention, avoidance, detection, and recovery",
        "Apply deadlock avoidance algorithms like Banker's Algorithm"
    ],

    sections: [
        {
            title: "3.1 Introduction to Deadlocks",
            content: `
                <h4>What is a Deadlock?</h4>
                <p>A deadlock is a situation in which two or more competing processes are waiting for each other to release resources, and none can proceed. Each process holds a resource that the other needs, creating a circular waiting condition.</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">DEADLOCK ILLUSTRATION</p>
                    <pre style="text-align:center;">
    Process A                    Process B
    holds R1                     holds R2
    needs R2                     needs R1
         ↓                          ↓
    waiting for R2               waiting for R1
         ↓                          ↓
    └─────────── CIRCULAR WAIT ──────────┘
                    </pre>
                </div>
                
                <h4>Real-World Analogy</h4>
                <p>Two cars meet at a four-way intersection. Each wants to go straight, but both are waiting for the other to move first. Neither can proceed - deadlock!</p>
                
                <h4>In the context of concurrency control, what is a deadlock?</h4>
                <p><strong>A situation where two or more transactions are waiting for each other to release locks.</strong></p>
                
                <div class="key-points-box" style="background:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🔑 Important:</strong> A deadlock occurs when a set of processes are blocked because each process is holding a resource and waiting for another resource held by another process in the set.</p>
                </div>
            `,
            keyPoints: [
                "Deadlock = processes waiting for each other indefinitely",
                "No process can proceed",
                "Common in systems with exclusive locks",
                "Example: two processes each holding one resource and needing the other"
            ]
        },

        {
            title: "3.2 Necessary Conditions for Deadlock",
            content: `
                <h4>The Four Necessary Conditions</h4>
                <p>For a deadlock to occur, all four of these conditions must hold simultaneously:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Condition</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Analogy</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>1. Mutual Exclusion</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">At least one resource must be held in a non-sharable mode (only one process can use the resource at a time)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Only one car can occupy the intersection at a time</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>2. Hold and Wait</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">A process must be holding at least one resource and waiting for additional resources that are held by other processes</td>
                        <td style="padding:8px; border:1px solid #ddd;">Car occupies its lane while waiting for intersection to clear</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>3. No Preemption</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Resources cannot be preempted; they can only be released voluntarily by the process holding them</td>
                        <td style="padding:8px; border:1px solid #ddd;">Cars cannot be moved out of the way</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>4. Circular Wait</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">A set of waiting processes must exist such that each process is waiting for a resource held by another process in the set</td>
                        <td style="padding:8px; border:1px solid #ddd;">Each car waits for the other to move</td>
                    </tr>
                </table>
                
                <div class="key-points-box" style="background:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🔑 Important:</strong> All four conditions must be present for a deadlock to occur. If any one condition is absent, deadlock cannot happen.</p>
                </div>
                
                <h4>Which condition in a resource allocation system refers to a situation where a set of processes are waiting for resources held by each other, forming a circular chain?</h4>
                <p><strong>Circular Wait</strong> is the condition where each process is waiting for a resource held by another, forming a cycle.</p>
                
                <h4>Which of the following is not a problem caused by concurrency of processes?</h4>
                <p>All of these are problems: Race condition, Starvation, Deadlock. <strong>Mutual exclusion</strong> is actually a solution to race conditions, not a problem.</p>
                
                <h4>One deadlock prevention method attacks which condition?</h4>
                <p>The statement: "if a process must wait for a needed resource, it drops all of its previously held resources and tries to acquire all resources gain" attacks the <strong>Hold and Wait</strong> condition.</p>
            `,
            keyPoints: [
                "Four conditions: Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait",
                "All four must hold for deadlock",
                "Circular wait = processes waiting in a cycle",
                "Hold and wait = holding resources while waiting for more"
            ]
        },

        {
            title: "3.3 Deadlock Prevention",
            content: `
                <h4>Preventing Deadlocks</h4>
                <p>Deadlock prevention ensures that at least one of the four necessary conditions cannot hold. This guarantees that deadlocks will never occur.</p>
                
                <h4>Prevention Strategies</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Condition</th>
                        <th style="padding:10px; border:1px solid #ddd;">Prevention Approach</th>
                        <th style="padding:10px; border:1px solid #ddd;">Disadvantages</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Mutual Exclusion</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Use sharable resources instead of exclusive (not always possible)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Some resources are inherently non-sharable (printers)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Hold and Wait</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Require process to request all resources before execution, or release all before requesting new ones</td>
                        <td style="padding:8px; border:1px solid #ddd;">Low resource utilization, potential starvation</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>No Preemption</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">If a process holding resources requests another that is unavailable, it must release all held resources</td>
                        <td style="padding:8px; border:1px solid #ddd;">Overhead, possible repeated requests</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Circular Wait</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Impose a total ordering of resource types, require processes to request resources in increasing order</td>
                        <td style="padding:8px; border:1px solid #ddd;">May be difficult to define ordering</td>
                    </tr>
                </table>
                
                <h4>One deadlock prevention method says, "if a process must wait for a needed resource, it drops all of its previously held resources and tries to acquire all resources gain."</h4>
                <p>This attacks the <strong>Hold and Wait</strong> condition by ensuring processes don't hold resources while waiting.</p>
                
                <h4>Deadlocks can be provably avoided by defining a global resource acquisition order.</h4>
                <p>This attacks the <strong>Circular Wait</strong> condition by ensuring that if all processes request resources in the same order, circular wait cannot occur.</p>
            `,
            keyPoints: [
                "Prevention = eliminate one of the four conditions",
                "Attacking Hold and Wait: request all resources at once",
                "Attacking Circular Wait: ordered resource acquisition",
                "Attacking No Preemption: preempt resources",
                "Attacking Mutual Exclusion: use sharable resources when possible"
            ]
        },

        {
            title: "3.4 Deadlock Avoidance",
            content: `
                <h4>Deadlock Avoidance</h4>
                <p>Deadlock avoidance requires that the operating system knows in advance the maximum resources each process will need. It uses this information to decide whether granting a request will lead to a safe state.</p>
                
                <h4>Safe State</h4>
                <p>A state is safe if there exists a sequence of process executions that allows all processes to complete without deadlock. If no such sequence exists, the state is unsafe.</p>
                
                <h4>Banker's Algorithm</h4>
                <p>The Banker's Algorithm is a well-known deadlock avoidance algorithm. It is named because the algorithm could be used in a banking system to ensure that loans are allocated only if they can be repaid.</p>
                
                <h4>Data Structures for Banker's Algorithm</h4>
                <ul>
                    <li><strong>Available:</strong> Vector of available resources</li>
                    <li><strong>Max:</strong> Matrix of maximum resource needs per process</li>
                    <li><strong>Allocation:</strong> Matrix of currently allocated resources</li>
                    <li><strong>Need:</strong> Matrix of remaining resource needs (Need = Max - Allocation)</li>
                </ul>
                
                <h4>Safety Algorithm</h4>
                <p>To check if a state is safe:</p>
                <ol>
                    <li>Create Work and Finish vectors. Work = Available, Finish[i] = false for all i</li>
                    <li>Find an i such that Finish[i] = false and Need[i] ≤ Work</li>
                    <li>If found, Work = Work + Allocation[i], Finish[i] = true, go to step 2</li>
                    <li>If all Finish[i] = true, state is safe; otherwise, unsafe</li>
                </ol>
                
                <h4>Resource-Request Algorithm</h4>
                <p>When a process requests resources:</p>
                <ol>
                    <li>If Request ≤ Need, proceed; else error</li>
                    <li>If Request ≤ Available, proceed; else process must wait</li>
                    <li>Pretend to allocate: Available -= Request, Allocation += Request, Need -= Request</li>
                    <li>Run safety algorithm; if safe, allocation is made; if unsafe, process waits and resources are restored</li>
                </ol>
                
                <h4>Example</h4>
                <p>Consider a system with 5 processes P0-P4 and 3 resource types A (10 instances), B (5), C (7). At time T0:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;"></th>
                        <th style="padding:10px; border:1px solid #ddd;" colspan="3">Allocation</th>
                        <th style="padding:10px; border:1px solid #ddd;" colspan="3">Max</th>
                        <th style="padding:10px; border:1px solid #ddd;" colspan="3">Available</th>
                    </tr>
                    <tr style="background-color:#2772a0; color:white;">
                        <td style="padding:8px; border:1px solid #ddd;"></td>
                        <td style="padding:8px; border:1px solid #ddd;">A</td><td>B</td><td>C</td>
                        <td>A</td><td>B</td><td>C</td>
                        <td>A</td><td>B</td><td>C</td>
                    </tr>
                    <tr><td>P0</td><td>0</td><td>1</td><td>0</td><td>7</td><td>5</td><td>3</td><td colspan="3" rowspan="5">3 3 2</td></tr>
                    <tr><td>P1</td><td>2</td><td>0</td><td>0</td><td>3</td><td>2</td><td>2</td></tr>
                    <tr><td>P2</td><td>3</td><td>0</td><td>2</td><td>9</td><td>0</td><td>2</td></tr>
                    <tr><td>P3</td><td>2</td><td>1</td><td>1</td><td>2</td><td>2</td><td>2</td></tr>
                    <tr><td>P4</td><td>0</td><td>0</td><td>2</td><td>4</td><td>3</td><td>3</td></tr>
                </table>
                
                <p>The Need matrix = Max - Allocation:</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
P0: 7 4 3
P1: 1 2 2
P2: 6 0 0
P3: 0 1 1
P4: 4 3 1
                </pre>
                
                <p>Is the system in a safe state? Yes. Safe sequence: P1, P3, P4, P0, P2</p>
            `,
            keyPoints: [
                "Avoidance requires advance knowledge of maximum needs",
                "Banker's Algorithm is the classic avoidance algorithm",
                "Safe state = there exists a sequence where all processes can complete",
                "Unsafe state may lead to deadlock (but not necessarily)",
                "Banker's Algorithm ensures system never enters unsafe state"
            ]
        },

        {
            title: "3.5 Deadlock Detection",
            content: `
                <h4>Deadlock Detection</h4>
                <p>If a system does not employ prevention or avoidance, deadlocks may occur. Detection algorithms check if the system has entered a deadlocked state.</p>
                
                <h4>Detection Algorithm</h4>
                <p>Similar to the safety algorithm but with a different interpretation. It checks if there is a cycle in the resource allocation graph.</p>
                
                <h4>Single Instance of Each Resource Type</h4>
                <p>If each resource type has a single instance, we can use a wait-for graph. A cycle in the wait-for graph indicates deadlock.</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">WAIT-FOR GRAPH</p>
                    <pre style="text-align:center;">
    P1 → P2
    ↑    ↓
    └──── P3
                    </pre>
                </div>
                
                <h4>Multiple Instances of Resource Types</h4>
                <p>For multiple instances, we use an algorithm similar to Banker's Algorithm but looking for processes that cannot complete.</p>
                
                <h4>Detection Algorithm Steps</h4>
                <ol>
                    <li>Initialize Work = Available, Finish[i] = false for all i</li>
                    <li>Find i such that Finish[i] = false and Request[i] ≤ Work</li>
                    <li>If found, Work = Work + Allocation[i], Finish[i] = true, go to step 2</li>
                    <li>If any Finish[i] = false, process i is deadlocked</li>
                </ol>
                
                <h4>Detection Algorithm Example</h4>
                <p>Consider a system with 5 processes P0-P4 and 3 resource types A (7 instances), B (2), C (6). At time T0:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;"></th>
                        <th style="padding:10px; border:1px solid #ddd;" colspan="3">Allocation</th>
                        <th style="padding:10px; border:1px solid #ddd;" colspan="3">Request</th>
                        <th style="padding:10px; border:1px solid #ddd;" colspan="3">Available</th>
                    </tr>
                    <tr><td></td><td>A</td><td>B</td><td>C</td><td>A</td><td>B</td><td>C</td><td>A</td><td>B</td><td>C</td></tr>
                    <tr><td>P0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td rowspan="5">0 0 0</td></tr>
                    <tr><td>P1</td><td>2</td><td>0</td><td>0</td><td>2</td><td>0</td><td>2</td></tr>
                    <tr><td>P2</td><td>3</td><td>0</td><td>3</td><td>0</td><td>0</td><td>0</td></tr>
                    <tr><td>P3</td><td>2</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td></tr>
                    <tr><td>P4</td><td>0</td><td>0</td><td>2</td><td>0</td><td>0</td><td>2</td></tr>
                </table>
                
                <p>We find that P0, P2, P3 can finish, but P1 and P4 cannot → deadlock!</p>
            `,
            keyPoints: [
                "Detection finds existing deadlocks",
                "Wait-for graph for single-instance resources",
                "Cycle indicates deadlock",
                "Detection algorithm similar to safety algorithm",
                "Detection should be done periodically"
            ]
        },

        {
            title: "3.6 Deadlock Recovery",
            content: `
                <h4>Recovering from Deadlock</h4>
                <p>Once a deadlock is detected, the system must recover. Two main approaches:</p>
                
                <h4>1. Process Termination</h4>
                <ul>
                    <li><strong>Abort all deadlocked processes:</strong> Drastic but simple</li>
                    <li><strong>Abort one process at a time:</strong> Less drastic, but more overhead</li>
                </ul>
                
                <p><strong>Which one is used to abort all deadlocked processes, or abort one process at a time until the deadlocked cycle disappears?</strong> This is called <strong>Process Termination</strong>.</p>
                
                <h4>Factors for choosing which process to abort:</h4>
                <ul>
                    <li>Priority of the process</li>
                    <li>How long the process has run</li>
                    <li>Resources the process holds</li>
                    <li>Resources needed to complete</li>
                    <li>Whether process is interactive or batch</li>
                </ul>
                
                <h4>2. Resource Preemption</h4>
                <ul>
                    <li>Take resources from some processes and give to others</li>
                    <li><strong>Select victim:</strong> Choose process to preempt resources from</li>
                    <li><strong>Rollback:</strong> Roll back victim process to a safe state</li>
                    <li><strong>Starvation:</strong> Ensure same process is not always chosen as victim</li>
                </ul>
                
                <h4>Which of the following methods can be used to recover deadlock?</h4>
                <ul>
                    <li><strong>Kill the process:</strong> Yes (process termination)</li>
                    <li><strong>Rollback:</strong> Yes (resource preemption with rollback)</li>
                    <li><strong>Non-preempt the resource:</strong> No (that's a condition, not recovery)</li>
                    <li><strong>Lock the process:</strong> No</li>
                </ul>
                
                <h4>One deadlock prevention method says, "if a process must wait for a needed resource, it drops all of its previously held resources and tries to acquire all resources gain."</h4>
                <p>This attacks the <strong>Hold and Wait</strong> condition. It is a prevention method, not recovery.</p>
            `,
            keyPoints: [
                "Recovery options: terminate processes or preempt resources",
                "Process termination: abort all or one at a time",
                "Resource preemption: take resources, rollback victim",
                "Need to avoid starvation in victim selection"
            ]
        },

        {
            title: "3.7 The Ostrich Algorithm",
            content: `
                <h4>What is the Ostrich Algorithm?</h4>
                <p>The Ostrich Algorithm is an approach to deadlock handling where the system simply ignores the problem, assuming that deadlocks occur so rarely that the cost of handling them is not worth the effort.</p>
                
                <p><strong>Analogy:</strong> Ostriches are said to bury their heads in the sand when danger approaches, pretending the problem doesn't exist.</p>
                
                <h4>Which operating system accepts ostrich algorithm for deadlock detection techniques?</h4>
                <p>Some operating systems, particularly earlier versions of <strong>UNIX</strong> and <strong>DOS</strong>, used the ostrich algorithm for certain types of deadlocks, assuming they were rare enough to ignore.</p>
                
                <h4>When is the Ostrich Algorithm appropriate?</h4>
                <ul>
                    <li>Deadlocks are very rare</li>
                    <li>Cost of prevention/detection is high</li>
                    <li>System can tolerate occasional deadlocks (restart)</li>
                    <li>End-user systems where rebooting is acceptable</li>
                </ul>
                
                <h4>Trade-offs</h4>
                <ul>
                    <li><strong>Pros:</strong> Simple, no overhead</li>
                    <li><strong>Cons:</strong> System may hang occasionally, requiring manual intervention</li>
                </ul>
            `,
            keyPoints: [
                "Ostrich algorithm = ignore deadlocks",
                "Used when deadlocks are rare or cost of handling is high",
                "UNIX and DOS have used this approach",
                "Not suitable for critical systems"
            ]
        },

        {
            title: "3.8 Analyzing Deadlock Scenarios",
            content: `
                <h4>Blueprint Focus: Analyze Deadlock Conditions and Solutions</h4>
                
                <h4>Analysis Questions to Consider</h4>
                
                <p><strong>1. Which condition is necessary for deadlock?</strong></p>
                <p>All four conditions (Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait) are necessary. If any one is missing, deadlock cannot occur.</p>
                
                <p><strong>2. What is the difference between deadlock prevention and avoidance?</strong></p>
                <ul>
                    <li><strong>Prevention:</strong> Ensures that at least one of the four conditions never holds. Works by design.</li>
                    <li><strong>Avoidance:</strong> Requires advance knowledge of resource needs and ensures system never enters an unsafe state. Uses Banker's Algorithm.</li>
                </ul>
                
                <p><strong>3. Can a program in a safe state eventually deadlock?</strong></p>
                <p><strong>No.</strong> By definition, a safe state has a sequence where all processes can complete. An unsafe state may or may not lead to deadlock, but a safe state cannot deadlock.</p>
                
                <p><strong>4. Which of the following is not true about deadlocks?</strong></p>
                <ul>
                    <li>Deadlocks can be provably avoided by defining a global resource acquisition order. ✓ (True - attacks circular wait)</li>
                    <li>Deadlocks can ONLY occur if there is a circular wait for resources. ✗ (False - all four conditions needed)</li>
                    <li>Strict priority schedulers use priority donation to prevent deadlocks. ✓ (True - priority donation can help)</li>
                    <li>A program in a safe state can eventually deadlock. ✗ (False - safe state guarantees deadlock-free)</li>
                </ul>
                
                <h4>Example Analysis: Dining Philosophers Problem</h4>
                <p>The Dining Philosophers problem is a classic synchronization problem that can lead to deadlock. Five philosophers sit at a round table with one chopstick between each. To eat, a philosopher needs two chopsticks. If all philosophers pick up their left chopstick simultaneously, deadlock occurs.</p>
                
                <p><strong>Conditions present:</strong></p>
                <ul>
                    <li>Mutual Exclusion: Chopsticks are non-sharable</li>
                    <li>Hold and Wait: Philosophers hold one chopstick while waiting for another</li>
                    <li>No Preemption: Cannot take chopstick from another philosopher</li>
                    <li>Circular Wait: Each philosopher waits for neighbor's chopstick</li>
                </ul>
                
                <p><strong>Solutions:</strong></p>
                <ul>
                    <li>Prevention: Limit number of philosophers eating (attacks hold and wait)</li>
                    <li>Prevention: Use ordered acquisition (attacks circular wait)</li>
                    <li>Avoidance: Use Banker's Algorithm if maximum needs known</li>
                </ul>
            `,
            keyPoints: [
                "All four conditions must hold for deadlock",
                "Prevention eliminates a condition, avoidance avoids unsafe states",
                "Safe state cannot deadlock",
                "Deadlock requires circular wait, but circular wait alone is insufficient",
                "Ostrich algorithm ignores deadlocks"
            ]
        }
    ],

    summary: `
        <h3>Chapter 3 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Deadlock:</strong> Set of processes waiting indefinitely for resources held by each other</li>
            <li><strong>Four Necessary Conditions:</strong> Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait</li>
            <li><strong>Prevention:</strong> Eliminate one of the four conditions (e.g., ordered resources attacks circular wait)</li>
            <li><strong>Avoidance:</strong> Banker's Algorithm - ensures system stays in safe states</li>
            <li><strong>Detection:</strong> Check for cycles in wait-for graph; periodic detection</li>
            <li><strong>Recovery:</strong> Process termination or resource preemption</li>
            <li><strong>Ostrich Algorithm:</strong> Ignore deadlocks (used in UNIX, DOS)</li>
            <li><strong>Safe state:</strong> Exists a sequence where all processes can complete</li>
            <li><strong>Circular wait</strong> is the condition where processes wait in a cycle</li>
            <li><strong>Hold and wait</strong> is attacked by requiring processes to request all resources at once</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What are the four necessary conditions for deadlock?",
            answer: "Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait."
        },
        {
            question: "Which condition refers to a circular chain of waiting processes?",
            answer: "Circular Wait."
        },
        {
            question: "What is the difference between deadlock prevention and avoidance?",
            answer: "Prevention ensures at least one condition never holds. Avoidance uses advance knowledge to stay in safe states."
        },
        {
            question: "What is the Banker's Algorithm used for?",
            answer: "Deadlock avoidance - it ensures the system never enters an unsafe state."
        },
        {
            question: "What is the Ostrich Algorithm?",
            answer: "Ignoring deadlocks, assuming they are rare enough that handling cost isn't worth it. Used in UNIX and DOS."
        },
        {
            question: "Can a program in a safe state eventually deadlock?",
            answer: "No. A safe state guarantees there exists a sequence where all processes can complete."
        }
    ],

    quickTips: [
        "Four conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait",
        "Prevention = remove one condition",
        "Avoidance = Banker's Algorithm",
        "Detection = find cycles",
        "Recovery = terminate or preempt",
        "Ostrich = ignore (UNIX/DOS)"
    ],

    commonMistakes: [
        "❌ Thinking circular wait alone causes deadlock - all four conditions needed",
        "❌ Confusing prevention and avoidance",
        "❌ Believing safe state can lead to deadlock - it cannot",
        "❌ Forgetting that Banker's Algorithm requires advance knowledge",
        "❌ Thinking the Ostrich Algorithm is a solution - it's ignoring the problem"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 3:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>1 question</strong> at the <strong>Analyze</strong> level.</p>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>Deadlock conditions:</strong> The four necessary conditions</li>
            <li><strong>Deadlock prevention:</strong> How to attack each condition</li>
            <li><strong>Deadlock avoidance:</strong> Banker's Algorithm, safe states</li>
            <li><strong>Analysis:</strong> Determine if a state is safe, identify conditions present</li>
        </ol>
        
        <h4>What "Analyze" Means:</h4>
        <p>You need to be able to identify deadlock conditions in scenarios, analyze whether a state is safe, and determine appropriate handling strategies.</p>
        
        <h4>Practice Analysis Questions:</h4>
        <ul>
            <li>Given a resource allocation state, determine if it's deadlocked.</li>
            <li>Apply Banker's Algorithm to determine if a request can be granted.</li>
            <li>Identify which deadlock conditions are present in a scenario.</li>
            <li>Compare prevention, avoidance, detection, and recovery approaches.</li>
        </ul>
    `
};