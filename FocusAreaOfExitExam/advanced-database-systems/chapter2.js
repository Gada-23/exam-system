// ===============================
// FOCUS AREA: ADVANCED DATABASE SYSTEMS - CHAPTER 2
// Database Recovery Methods
// Based on Ministry of Education Blueprint (1 Apply, 1 Analyze)
// File Path: FocusAreaOfExitExam/advanced-database-systems/chapter2.js
// ===============================

window.focusAreaAdvancedDBChapter2 = {
    title: "Chapter 2: Database Recovery Methods",
    
    description: "Comprehensive coverage of transaction management, failure types, recovery techniques, logging, and recovery algorithms.",
    
    blueprint: {
        totalQuestions: 2,
        cognitiveLevels: {
            apply: 1,
            analyze: 1
        },
        topics: [
            "Transaction concepts and ACID properties",
            "Types of failures (transaction, system, media)",
            "Log-based recovery (UNDO, REDO)",
            "Checkpointing techniques",
            "Recovery algorithms (ARIES, shadow paging)",
            "Recovery in different DBMS architectures"
        ]
    },

    learningObjectives: [
        "Apply appropriate recovery methods for different failure scenarios",
        "Analyze transaction logs to determine recovery actions",
        "Compare different recovery techniques and their trade-offs",
        "Implement recovery strategies using logging and checkpoints",
        "Evaluate the effectiveness of recovery algorithms",
        "Design recovery procedures for different failure types"
    ],

    sections: [
        {
            title: "2.1 Transaction Concepts and ACID Properties (Understand)",
            content: `
                <h4>What is a Transaction?</h4>
                <p>A transaction is a logical unit of work that accesses and possibly modifies the database. It consists of a sequence of operations (reads and writes) that must be executed as a single, indivisible unit.</p>
                
                <p><strong>Example:</strong> Transfer of money from account A to account B</p>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
BEGIN TRANSACTION;
    READ balance from A;
    IF balance >= amount THEN
        WRITE A = A - amount;
        WRITE B = B + amount;
    END IF;
COMMIT;
                </pre>
                
                <h4>ACID Properties</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Property</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Atomicity</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Transaction executes completely or not at all (all or nothing)</td>
                        <td style="padding:8px; border:1px solid #ddd;">If system crashes after debiting A but before crediting B, money is lost. Atomicity prevents this.</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Consistency</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Transaction brings database from one valid state to another</td>
                        <td style="padding:8px; border:1px solid #ddd;">Sum of A+B must remain constant after transfer</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Isolation</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Concurrent transactions don't interfere with each other</td>
                        <td style="padding:8px; border:1px solid #ddd;">Two transfers from same account appear to execute sequentially</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Durability</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Once committed, changes persist even after failures</td>
                        <td style="padding:8px; border:1px solid #ddd;">After COMMIT, money transfer survives power outage</td>
                    </tr>
                </table>
                
                <div class="key-points-box">
                    <p><strong>🔑 Key Point:</strong> ACID properties ensure database reliability and correctness even in presence of failures and concurrent access.</p>
                </div>
                
                <h4>Transaction States</h4>
                
                <div style="text-align:center; margin:20px 0;">
                    <pre style="background:#f4f4f4; padding:10px; display:inline-block;">
    Active → Partially Committed → Committed
      ↓              ↓
    Failed  →  Aborted
                    </pre>
                </div>
                
                <ul>
                    <li><strong>Active:</strong> Initial state, transaction executing</li>
                    <li><strong>Partially Committed:</strong> After final statement, before commit</li>
                    <li><strong>Committed:</strong> Successfully completed</li>
                    <li><strong>Failed:</strong> Cannot proceed due to error</li>
                    <li><strong>Aborted:</strong> Rolled back to previous state</li>
                </ul>
            `,
            keyPoints: [
                "Transaction = logical unit of work",
                "Atomicity: all or nothing",
                "Consistency: valid state to valid state",
                "Isolation: concurrent transactions don't interfere",
                "Durability: committed changes persist"
            ]
        },

        {
            title: "2.2 Types of Failures (Apply Level)",
            content: `
                <h4>Blueprint Focus: Apply - Identifying and Responding to Failures</h4>
                
                <h4>Three Categories of Failures</h4>
                
                <h5>1. Transaction Failures</h5>
                <ul>
                    <li><strong>Logical errors:</strong> Transaction cannot complete due to internal condition (e.g., division by zero, constraint violation)</li>
                    <li><strong>System errors:</strong> Deadlock, resource unavailability</li>
                </ul>
                
                <h5>2. System Crashes</h5>
                <ul>
                    <li><strong>Power failure:</strong> Loss of volatile memory</li>
                    <li><strong>OS crash:</strong> Database software stops</li>
                    <li><strong>Hardware failure:</strong> CPU, memory issues</li>
                </ul>
                
                <h5>3. Disk Failures (Media Failures)</h5>
                <ul>
                    <li><strong>Head crash:</strong> Physical damage to disk</li>
                    <li><strong>Data corruption:</strong> Bad sectors</li>
                    <li><strong>Controller failure:</strong> Cannot access disk</li>
                </ul>
                
                <h4>Apply Exercise: Failure Classification</h4>
                
                <p>For each scenario, identify the failure type and appropriate recovery approach:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Scenario</th>
                        <th style="padding:10px; border:1px solid #ddd;">Failure Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Recovery Approach</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Transaction tries to insert duplicate primary key</td>
                        <td style="padding:8px; border:1px solid #ddd;">Transaction failure (logical)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Rollback transaction, notify application</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Power outage while transactions are active</td>
                        <td style="padding:8px; border:1px solid #ddd;">System crash</td>
                        <td style="padding:8px; border:1px solid #ddd;">Automatic recovery on restart (UNDO uncommitted, REDO committed)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Disk head crash destroys database files</td>
                        <td style="padding:8px; border:1px solid #ddd;">Media failure</td>
                        <td style="padding:8px; border:1px solid #ddd;">Restore from backup, apply transaction log</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Two transactions deadlock</td>
                        <td style="padding:8px; border:1px solid #ddd;">Transaction failure (system error)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Choose victim, rollback and restart</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Transaction failures: logical errors, deadlocks",
                "System crashes: power, OS, hardware",
                "Media failures: disk damage, corruption",
                "Recovery approach depends on failure type",
                "Transaction failures → rollback",
                "System crashes → automatic recovery on restart",
                "Media failures → backup + log replay"
            ]
        },

        {
            title: "2.3 Log-Based Recovery (Apply Level)",
            content: `
                <h4>Write-Ahead Logging (WAL) Principle</h4>
                <p>The fundamental rule of log-based recovery: <strong>Log records must be written to stable storage before the corresponding data is written to disk.</strong></p>
                
                <div class="key-points-box">
                    <p><strong>🔑 WAL Protocol:</strong> Before modifying the database, ensure the log record is safely stored. This enables recovery using UNDO and REDO.</p>
                </div>
                
                <h4>Log Record Structure</h4>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
&lt;TxnID, Operation, Object, OldValue, NewValue&gt;

Examples:
&lt;T1, START&gt;
&lt;T1, UPDATE, A, 100, 90&gt;    -- T1 changed A from 100 to 90
&lt;T1, UPDATE, B, 200, 210&gt;   -- T1 changed B from 200 to 210
&lt;T1, COMMIT&gt;
&lt;T2, START&gt;
&lt;T2, UPDATE, C, 50, 40&gt;
&lt;T2, ABORT&gt;
                </pre>
                
                <h4>UNDO and REDO Operations</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Operation</th>
                        <th style="padding:10px; border:1px solid #ddd;">When Used</th>
                        <th style="padding:10px; border:1px solid #ddd;">Action</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>UNDO</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Transaction aborts or system crash recovery</td>
                        <td style="padding:8px; border:1px solid #ddd;">Restore old values (remove uncommitted changes)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>REDO</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">System crash recovery, media recovery</td>
                        <td style="padding:8px; border:1px solid #ddd;">Apply new values (ensure committed changes persist)</td>
                    </tr>
                </table>
                
                <h4>Log-Based Recovery Algorithms</h4>
                
                <h5>1. Deferred Updates (No-UNDO/REDO)</h5>
                <ul>
                    <li>Updates only written to log during transaction, not to database</li>
                    <li>At COMMIT, all updates applied to database</li>
                    <li>No UNDO needed (uncommitted changes never in database)</li>
                    <li>REDO may be needed if system crashes before updates applied</li>
                </ul>
                
                <h5>2. Immediate Updates (UNDO/REDO)</h5>
                <ul>
                    <li>Updates applied immediately to database (but with WAL)</li>
                    <li>Need UNDO for aborted transactions</li>
                    <li>Need REDO for committed transactions after crash</li>
                </ul>
                
                <h4>Apply Exercise: Log Analysis</h4>
                
                <p><strong>Scenario:</strong> Given the following log, determine recovery actions after system crash:</p>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
1. &lt;T1, START&gt;
2. &lt;T1, UPDATE, A, 100, 90&gt;
3. &lt;T1, UPDATE, B, 200, 210&gt;
4. &lt;T2, START&gt;
5. &lt;T2, UPDATE, C, 50, 40&gt;
6. &lt;T1, COMMIT&gt;
7. &lt;T2, UPDATE, D, 300, 310&gt;
   [SYSTEM CRASH]
                </pre>
                
                <p><strong>Apply recovery:</strong></p>
                <ul>
                    <li><strong>T1:</strong> COMMIT record found → REDO all T1 updates (A=90, B=210)</li>
                    <li><strong>T2:</strong> No COMMIT or ABORT → UNDO all T2 updates (C back to 50, D back to 300)</li>
                </ul>
                
                <h4>Apply Exercise: Transaction Abort</h4>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
&lt;T3, START&gt;
&lt;T3, UPDATE, X, 10, 20&gt;
&lt;T3, UPDATE, Y, 30, 40&gt;
&lt;T3, ABORT&gt;
                </pre>
                
                <p><strong>Apply:</strong> UNDO both updates: X=10, Y=30</p>
            `,
            keyPoints: [
                "WAL: Log before data (essential for recovery)",
                "Log records contain before and after images",
                "UNDO removes uncommitted changes",
                "REDO reapplies committed changes",
                "Deferred updates: no UNDO needed",
                "Immediate updates: need both UNDO and REDO"
            ]
        },

        {
            title: "2.4 Checkpointing Techniques (Apply Level)",
            content: `
                <h4>What is a Checkpoint?</h4>
                <p>A checkpoint is a point in time when the database ensures that all modified data has been written to disk. It reduces recovery time by limiting how far back the log must be scanned.</p>
                
                <div class="key-points-box">
                    <p><strong>🔑 Purpose:</strong> Without checkpoints, recovery would need to process the entire log since the beginning of time. Checkpoints create recovery boundaries.</p>
                </div>
                
                <h4>Types of Checkpoints</h4>
                
                <h5>1. Consistent Checkpoint</h5>
                <ul>
                    <li>All transactions are suspended</li>
                    <li>All buffers are flushed to disk</li>
                    <li>Simple but stops database operations</li>
                </ul>
                
                <h5>2. Fuzzy Checkpoint</h5>
                <ul>
                    <li>Transactions continue running</li>
                    <li>Dirty buffers written incrementally</li>
                    <li>More complex but no downtime</li>
                </ul>
                
                <h5>3. Incremental Checkpoint</h5>
                <ul>
                    <li>Only dirty buffers from last checkpoint are written</li>
                    <li>Spreads I/O over time</li>
                </ul>
                
                <h4>Checkpoint Process</h4>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- At checkpoint time:
1. Write <CHECKPOINT> log record
2. Write all dirty buffers to disk
3. Store list of active transactions
4. Flush log to stable storage
                </pre>
                
                <h4>Recovery with Checkpoints</h4>
                
                <p><strong>Recovery procedure:</strong></p>
                <ol>
                    <li>Find last checkpoint in log</li>
                    <li>Start scanning from checkpoint</li>
                    <li>REDO all committed transactions after checkpoint</li>
                    <li>UNDO all uncommitted transactions (including those active at checkpoint)</li>
                </ol>
                
                <h4>Apply Exercise: Recovery with Checkpoint</h4>
                
                <p><strong>Scenario:</strong> Log with checkpoint:</p>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
1. &lt;T1, START&gt;
2. &lt;T1, UPDATE, A, 10, 20&gt;
3. &lt;T2, START&gt;
4. &lt;T2, UPDATE, B, 50, 40&gt;
5. &lt;CHECKPOINT, {T1,T2}&gt;   -- Both transactions active
6. &lt;T1, UPDATE, C, 100, 90&gt;
7. &lt;T1, COMMIT&gt;
8. &lt;T2, UPDATE, D, 200, 210&gt;
9. &lt;T3, START&gt;
10. &lt;T3, UPDATE, E, 300, 310&gt;
    [SYSTEM CRASH]
                </pre>
                
                <p><strong>Apply recovery with checkpoint:</strong></p>
                <ul>
                    <li>Start scanning from checkpoint (record #5)</li>
                    <li><strong>REDO:</strong> T1 (committed after checkpoint) → C=90, T3 (committed? no COMMIT, so no REDO)</li>
                    <li><strong>UNDO:</strong> T2 (uncommitted, active at checkpoint) → B=50, D=200; T3 (uncommitted) → E=300</li>
                </ul>
                
                <h4>Apply Exercise: Choosing Checkpoint Frequency</h4>
                
                <p><strong>Scenario:</strong> Database with 1000 transactions per minute. Log size 1MB per minute. Recovery must be under 5 minutes.</p>
                
                <p><strong>Apply:</strong> Calculate maximum log to scan in 5 minutes = 5MB. With 1MB/min, need checkpoint every 5 minutes to ensure recovery scans at most 5MB.</p>
            `,
            keyPoints: [
                "Checkpoints reduce recovery time",
                "Store active transaction list at checkpoint",
                "Recovery starts from last checkpoint",
                "Fuzzy checkpoints allow concurrent transactions",
                "Checkpoint frequency balances recovery time vs overhead"
            ]
        },

        {
            title: "2.5 Recovery Algorithms (Analyze Level)",
            content: `
                <h4>Blueprint Focus: Analyze - Comparing Recovery Algorithms</h4>
                
                <h4>1. ARIES (Algorithms for Recovery and Isolation Exploiting Semantics)</h4>
                <p>Industry-standard recovery algorithm used by IBM DB2, Microsoft SQL Server, and others.</p>
                
                <h5>ARIES Principles:</h5>
                <ul>
                    <li><strong>WAL (Write-Ahead Logging):</strong> Log before data</li>
                    <li><strong>Repeating history during REDO:</strong> Redo all operations from checkpoint, even those that might have been undone later</li>
                    <li><strong>Logging changes during UNDO:</strong> Log UNDO operations to ensure idempotence</li>
                </ul>
                
                <h5>ARIES Data Structures:</h5>
                <ul>
                    <li><strong>Log Sequence Number (LSN):</strong> Unique identifier for each log record</li>
                    <li><strong>Page LSN:</strong> LSN of last update to a page</li>
                    <li><strong>Dirty Page Table:</strong> Pages modified but not yet written to disk</li>
                    <li><strong>Transaction Table:</strong> Active transactions and their last LSN</li>
                </ul>
                
                <h5>ARIES Recovery Phases:</h5>
                <ol>
                    <li><strong>Analysis Phase:</strong> Scan log forward from last checkpoint to determine dirty pages and active transactions</li>
                    <li><strong>REDO Phase:</strong> Reapply all updates from appropriate point to reconstruct state at crash</li>
                    <li><strong>UNDO Phase:</strong> Roll back all uncommitted transactions using log</li>
                </ol>
                
                <h4>2. Shadow Paging</h4>
                <ul>
                    <li>Maintain two page tables: current and shadow</li>
                    <li>Updates write to new pages, current page table modified</li>
                    <li>At commit, shadow page table becomes current</li>
                    <li>No UNDO needed (abort just discards new pages)</li>
                    <li>No REDO needed (committed changes already on disk)</li>
                    <li>Disadvantages: data fragmentation, garbage collection</li>
                </ul>
                
                <h4>3. Deferred vs Immediate Updates Comparison</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Aspect</th>
                        <th style="padding:10px; border:1px solid #ddd;">Deferred Updates</th>
                        <th style="padding:10px; border:1px solid #ddd;">Immediate Updates</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">When data written</td>
                        <td style="padding:8px; border:1px solid #ddd;">At commit time</td>
                        <td style="padding:8px; border:1px solid #ddd;">During transaction (with WAL)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">UNDO needed?</td>
                        <td style="padding:8px; border:1px solid #ddd;">No (data not written until commit)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Yes (for aborts)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">REDO needed?</td>
                        <td style="padding:8px; border:1px solid #ddd;">Yes (if crash before commit write)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Yes (for committed transactions)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Log space</td>
                        <td style="padding:8px; border:1px solid #ddd;">Less (only after-images)</td>
                        <td style="padding:8px; border:1px solid #ddd;">More (before and after images)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Concurrency</td>
                        <td style="padding:8px; border:1px solid #ddd;">Limited (dirty reads possible)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Better (with locking)</td>
                    </tr>
                </table>
                
                <h4>Analyze Exercise: Comparing Recovery Algorithms</h4>
                
                <p><strong>Scenario:</strong> Compare ARIES and Shadow Paging for a banking system with high transaction volume and strict durability requirements.</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Criteria</th>
                        <th style="padding:10px; border:1px solid #ddd;">ARIES</th>
                        <th style="padding:10px; border:1px solid #ddd;">Shadow Paging</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Recovery Speed</td>
                        <td style="padding:8px; border:1px solid #ddd;">Fast with checkpoints</td>
                        <td style="padding:8px; border:1px solid #ddd;">Instant (no recovery needed)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Transaction Throughput</td>
                        <td style="padding:8px; border:1px solid #ddd;">High (in-place updates)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Lower (page copying overhead)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Storage Efficiency</td>
                        <td style="padding:8px; border:1px solid #ddd;">Good</td>
                        <td style="padding:8px; border:1px solid #ddd;">Poor (fragmentation)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Concurrency</td>
                        <td style="padding:8px; border:1px solid #ddd;">Excellent with locking</td>
                        <td style="padding:8px; border:1px solid #ddd;">Limited</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Complexity</td>
                        <td style="padding:8px; border:1px solid #ddd;">Complex but proven</td>
                        <td style="padding:8px; border:1px solid #ddd;">Simpler concept</td>
                    </tr>
                </table>
                
                <p><strong>Analysis Conclusion:</strong> ARIES is better for banking systems due to higher throughput, better concurrency, and proven reliability despite more complex recovery. Shadow paging might be suitable for simpler systems with lower update rates.</p>
            `,
            keyPoints: [
                "ARIES: industry standard, uses WAL, LSNs, three-phase recovery",
                "Shadow Paging: no UNDO/REDO needed, but fragmentation issues",
                "ARIES phases: Analysis, REDO, UNDO",
                "LSNs link log records to pages",
                "Dirty Page Table tracks modified pages not on disk"
            ]
        },

        {
            title: "2.6 Analyzing Recovery Scenarios (Analyze Level)",
            content: `
                <h4>Blueprint Focus: Analyze - Complex Recovery Scenarios</h4>
                
                <h4>Analyze Exercise 1: Log Analysis with Multiple Transactions</h4>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
LSN 1: &lt;T1, START&gt;
LSN 2: &lt;T1, UPDATE, X, 10, 20&gt;
LSN 3: &lt;T2, START&gt;
LSN 4: &lt;T2, UPDATE, Y, 30, 25&gt;
LSN 5: &lt;CHECKPOINT, {T1,T2}&gt;
LSN 6: &lt;T1, UPDATE, Z, 40, 35&gt;
LSN 7: &lt;T1, COMMIT&gt;
LSN 8: &lt;T2, UPDATE, W, 50, 45&gt;
LSN 9: &lt;T3, START&gt;
LSN 10: &lt;T3, UPDATE, X, 20, 15&gt;
LSN 11: &lt;T2, ABORT&gt;
LSN 12: &lt;T3, UPDATE, Y, 25, 20&gt;
[SYSTEM CRASH]
                </pre>
                
                <p><strong>Analyze:</strong> Determine recovery actions using ARIES approach.</p>
                
                <p><strong>Analysis Phase:</strong></p>
                <ul>
                    <li>Scan from checkpoint (LSN 5)</li>
                    <li><strong>Active at checkpoint:</strong> T1, T2</li>
                    <li><strong>Transactions after checkpoint:</strong> T3 started at LSN 9</li>
                    <li><strong>Dirty pages:</strong> X (LSN 2,10), Y (LSN 4,12), Z (LSN 6), W (LSN 8)</li>
                </ul>
                
                <p><strong>REDO Phase:</strong> Redo all updates from LSN 5 to end:</p>
                <ul>
                    <li>LSN 6: T1 updates Z to 35 (committed)</li>
                    <li>LSN 8: T2 updates W to 45 (but T2 aborted later)</li>
                    <li>LSN 10: T3 updates X to 15</li>
                    <li>LSN 12: T3 updates Y to 20</li>
                </ul>
                
                <p><strong>UNDO Phase:</strong> Undo uncommitted transactions (T2, T3):</p>
                <ul>
                    <li>T2 (aborted): Undo W back to 50</li>
                    <li>T3 (no COMMIT): Undo X back to 20, Y back to 25</li>
                </ul>
                
                <h4>Analyze Exercise 2: Media Failure Recovery</h4>
                
                <p><strong>Scenario:</strong> Database disk crashes at 2:00 PM. Last full backup from 12:00 AM. Transaction logs available for entire day.</p>
                
                <p><strong>Analyze recovery strategy:</strong></p>
                <ol>
                    <li>Restore database from last full backup (12:00 AM state)</li>
                    <li>Apply all transaction logs from 12:00 AM to 2:00 PM (REDO committed transactions)</li>
                    <li>Transactions in progress at 2:00 PM need special handling:
                        <ul>
                            <li>If logs show COMMIT after 2:00 PM but before crash, include in REDO</li>
                            <li>If no COMMIT, these transactions must be restarted by applications</li>
                        </ul>
                    </li>
                </ol>
                
                <h4>Analyze Exercise 3: Checkpoint Optimization</h4>
                
                <p><strong>Scenario:</strong> Database with 10,000 transactions/hour. Log growth 100MB/hour. Recovery time objective (RTO) is 10 minutes. Log replay rate is 50MB/minute.</p>
                
                <p><strong>Analyze required checkpoint frequency:</strong></p>
                <ul>
                    <li>Max log to scan in 10 minutes = 10 min × 50MB/min = 500MB</li>
                    <li>Log grows at 100MB/hour = 1.67MB/minute</li>
                    <li>Time to generate 500MB = 500MB ÷ 1.67MB/min ≈ 300 minutes = 5 hours</li>
                    <li>Therefore, checkpoint every 5 hours meets RTO</li>
                </ul>
                
                <h4>Analyze Exercise 4: Comparing Recovery Techniques</h4>
                
                <p><strong>Scenario:</strong> Compare three recovery approaches for an e-commerce site:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Technique</th>
                        <th style="padding:10px; border:1px solid #ddd;">Recovery Time</th>
                        <th style="padding:10px; border:1px solid #ddd;">Data Loss Risk</th>
                        <th style="padding:10px; border:1px solid #ddd;">Complexity</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">No logging, periodic backups</td>
                        <td style="padding:8px; border:1px solid #ddd;">Hours</td>
                        <td style="padding:8px; border:1px solid #ddd;">High (lose since last backup)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Low</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Full logging + checkpoints</td>
                        <td style="padding:8px; border:1px solid #ddd;">Minutes</td>
                        <td style="padding:8px; border:1px solid #ddd;">Very low (committed txns safe)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Medium</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Synchronous replication</td>
                        <td style="padding:8px; border:1px solid #ddd;">Seconds (failover)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Zero (if replica synchronized)</td>
                        <td style="padding:8px; border:1px solid #ddd;">High</td>
                    </tr>
                </table>
                
                <p><strong>Analysis:</strong> For e-commerce, full logging with checkpoints provides good balance of recovery speed and data safety. Add synchronous replication for zero data loss if budget allows.</p>
            `,
            keyPoints: [
                "Analyze logs to determine active/committed transactions",
                "Media recovery = backup + log replay",
                "Checkpoint frequency determines max recovery time",
                "Balance RTO, data loss risk, and complexity",
                "Synchronous replication eliminates data loss"
            ]
        },

        {
            title: "2.7 ARIES Detailed Analysis (Analyze Level)",
            content: `
                <h4>ARIES in Depth</h4>
                
                <h5>ARIES Data Structures</h5>
                
                <p><strong>Log Sequence Number (LSN):</strong> Monotonically increasing identifier for each log record. Stored in:</p>
                <ul>
                    <li>Log records themselves</li>
                    <li>Page header (pageLSN - LSN of last update to page)</li>
                    <li>Transaction table (lastLSN - last log record of transaction)</li>
                </ul>
                
                <p><strong>Dirty Page Table (DPT):</strong> Contains:</p>
                <ul>
                    <li>Page ID</li>
                    <li>recLSN (first LSN that dirtied the page)</li>
                </ul>
                
                <p><strong>Transaction Table:</strong> Contains:</p>
                <ul>
                    <li>Transaction ID</li>
                    <li>State (active, prepared, committed, aborted)</li>
                    <li>lastLSN</li>
                    <li>undoNextLSN (for rolling back)</li>
                </ul>
                
                <h5>ARIES Recovery Phases in Detail</h5>
                
                <h6>Phase 1: Analysis</h6>
                <ol>
                    <li>Start from last checkpoint</li>
                    <li>Initialize transaction table and dirty page table from checkpoint</li>
                    <li>Scan log forward:
                        <ul>
                            <li>For START record: add transaction to transaction table</li>
                            <li>For COMMIT/ABORT: update transaction state</li>
                            <li>For UPDATE: if page not in DPT, add with recLSN = current LSN</li>
                        </ul>
                    </li>
                </ol>
                
                <h6>Phase 2: REDO</h6>
                <ol>
                    <li>Start from smallest recLSN in DPT</li>
                    <li>For each log record:
                        <ul>
                            <li>If page not in DPT, skip (was flushed to disk)</li>
                            <li>If pageLSN in database >= LSN, skip (already updated)</li>
                            <li>Otherwise, redo the update</li>
                        </ul>
                    </li>
                </ol>
                
                <h6>Phase 3: UNDO</h6>
                <ol>
                    <li>Process transactions in transaction table that are active or aborted</li>
                    <li>Scan log backward from end, undoing updates</li>
                    <li>Write compensation log records (CLR) for each undo</li>
                    <li>CLRs allow restartable undo (if crash during undo)</li>
                </ol>
                
                <h4>Analyze Exercise: ARIES Recovery Walkthrough</h4>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
LSN 10: &lt;T1, START&gt;
LSN 20: &lt;T1, UPDATE, P1, 100, 200&gt;   (dirtied P1)
LSN 30: &lt;T2, START&gt;
LSN 40: &lt;T2, UPDATE, P2, 300, 250&gt;   (dirtied P2)
LSN 45: &lt;CHECKPOINT, {T1,T2}, DPT: {P1@20, P2@40}&gt;
LSN 50: &lt;T1, UPDATE, P3, 400, 350&gt;   (dirtied P3)
LSN 60: &lt;T1, COMMIT&gt;
LSN 70: &lt;T2, UPDATE, P1, 200, 150&gt;   (dirtied P1)
[SYSTEM CRASH]
                </pre>
                
                <p><strong>Analysis Phase:</strong></p>
                <ul>
                    <li>Start from checkpoint (LSN 45)</li>
                    <li>Transaction table from checkpoint: T1(active), T2(active)</li>
                    <li>DPT from checkpoint: P1@20, P2@40</li>
                    <li>Scan forward LSN 50-70:
                        <ul>
                            <li>LSN 50: T1 updates P3 → add P3 to DPT@50</li>
                            <li>LSN 60: T1 commits → mark T1 committed</li>
                            <li>LSN 70: T2 updates P1 → update P1 recLSN remains 20</li>
                        </ul>
                    </li>
                    <li>Final: T1(committed), T2(active), DPT: P1@20, P2@40, P3@50</li>
                </ul>
                
                <p><strong>REDO Phase:</strong> Start from smallest recLSN = 20</p>
                <ul>
                    <li>REDO all updates from LSN 20 to 70</li>
                    <li>Skip pages already flushed (check pageLSN)</li>
                </ul>
                
                <p><strong>UNDO Phase:</strong> Undo T2 (active)</p>
                <ul>
                    <li>Undo LSN 70: P1 back to 200, write CLR</li>
                    <li>Undo LSN 40: P2 back to 300, write CLR</li>
                </ul>
                
                <h4>ARIES Advantages</h4>
                <ul>
                    <li><strong>Supports partial rollbacks:</strong> Savepoints, nested transactions</li>
                    <li><strong>Recovery independent of buffer manager:</strong> Can use any page replacement</li>
                    <li><strong>Efficient REDO:</strong> Only redo necessary operations</li>
                    <li><strong>Restartable UNDO:</strong> CLRs make undo idempotent</li>
                </ul>
            `,
            keyPoints: [
                "ARIES uses LSNs to link log and data pages",
                "Dirty Page Table tracks first LSN that dirtied each page",
                "Analysis phase reconstructs state at crash",
                "REDO phase reapplies updates from smallest recLSN",
                "UNDO phase rolls back active transactions with CLRs",
                "Compensation Log Records (CLR) make undo restartable"
            ]
        }
    ],

    summary: `
        <h3>Chapter 2 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>ACID Properties:</strong> Atomicity, Consistency, Isolation, Durability - foundation of reliable transactions</li>
            <li><strong>Failure Types:</strong> Transaction (logical errors, deadlock), System (crash, power), Media (disk failure)</li>
            <li><strong>Write-Ahead Logging (WAL):</strong> Log before data - fundamental recovery principle</li>
            <li><strong>UNDO:</strong> Remove uncommitted changes (aborts, recovery)</li>
            <li><strong>REDO:</strong> Reapply committed changes (crash recovery)</li>
            <li><strong>Checkpoints:</strong> Reduce recovery time by establishing recovery boundaries</li>
            <li><strong>ARIES:</strong> Industry standard recovery - Analysis, REDO, UNDO phases with LSNs</li>
            <li><strong>Shadow Paging:</strong> Alternative without UNDO/REDO, but fragmentation issues</li>
            <li><strong>Media Recovery:</strong> Backup + log replay</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "Explain the ACID properties and why each is important for database recovery.",
            answer: "Atomicity ensures transactions are all-or-nothing. Consistency maintains database rules. Isolation prevents interference between concurrent transactions. Durability guarantees committed changes persist after failures. Together they ensure reliable recovery."
        },
        {
            question: "What is the Write-Ahead Logging protocol and why is it essential?",
            answer: "WAL requires that log records be written to stable storage before the corresponding data pages are written to disk. This ensures that if a crash occurs, the log contains enough information for recovery (UNDO for uncommitted, REDO for committed)."
        },
        {
            question: "Compare and contrast ARIES and Shadow Paging recovery algorithms.",
            answer: "ARIES uses WAL with three-phase recovery (Analysis, REDO, UNDO) and supports high concurrency. Shadow Paging maintains two page tables and avoids UNDO/REDO but suffers from fragmentation and poor update performance. ARIES is better for high-transaction systems."
        },
        {
            question: "Given a transaction log with checkpoint, how do you determine which transactions need REDO and which need UNDO after a crash?",
            answer: "From the checkpoint, note active transactions. Scan forward: committed transactions after checkpoint need REDO, transactions without COMMIT need UNDO. Transactions that started and committed after checkpoint need REDO."
        },
        {
            question: "What is a Compensation Log Record (CLR) in ARIES and why is it needed?",
            answer: "A CLR records an UNDO operation. It allows recovery to be restartable - if system crashes during UNDO, the CLRs show what has already been undone, preventing double-undo. CLRs never need to be undone."
        }
    ],

    quickTips: [
        "WAL: Log before data (always!)",
        "Checkpoints limit log scan during recovery",
        "UNDO uncommitted, REDO committed",
        "ARIES: Analysis, REDO, UNDO",
        "LSNs link log records to pages",
        "CLRs make UNDO restartable",
        "Media recovery = backup + logs"
    ],

    commonMistakes: [
        "❌ Violating WAL order (data before log)",
        "❌ Forgetting to UNDO aborted transactions",
        "❌ REDOing uncommitted transactions",
        "❌ Not using checkpoints (long recovery)",
        "❌ Confusing REDO and UNDO directions",
        "❌ Ignoring CLRs in restartable recovery"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 2:</h3>
        <p>This chapter has <strong>2 questions</strong> distributed as:</p>
        <ul>
            <li><strong>1 Apply question:</strong> Use log records to determine recovery actions, apply appropriate recovery methods for failure scenarios</li>
            <li><strong>1 Analyze question:</strong> Compare recovery algorithms, analyze complex log scenarios, evaluate checkpoint strategies</li>
        </ul>
        
        <h4>Apply Level Focus:</h4>
        <ul>
            <li>Given a transaction log, determine UNDO/REDO actions after crash</li>
            <li>Classify failure types and select appropriate recovery method</li>
            <li>Calculate checkpoint frequency based on recovery time objectives</li>
            <li>Implement recovery for transaction aborts</li>
        </ul>
        
        <h4>Analyze Level Focus:</h4>
        <ul>
            <li>Compare ARIES vs Shadow Paging for given workload</li>
            <li>Analyze complex log with multiple transactions and checkpoints</li>
            <li>Evaluate trade-offs in checkpoint frequency</li>
            <li>Design recovery strategy considering RTO and data loss tolerance</li>
        </ul>
        
        <h4>Sample Apply Question:</h4>
        <div style="background:#f8f9fa; padding:20px; border-radius:10px; margin:20px 0;">
            <p><strong>Question:</strong> Given the following log and a system crash after LSN 9, determine the recovery actions needed:</p>
            <pre>
LSN 1: &lt;T1, START&gt;
LSN 2: &lt;T1, UPDATE, X, 50, 40&gt;
LSN 3: &lt;T2, START&gt;
LSN 4: &lt;CHECKPOINT, {T1,T2}&gt;
LSN 5: &lt;T1, UPDATE, Y, 30, 35&gt;
LSN 6: &lt;T1, COMMIT&gt;
LSN 7: &lt;T2, UPDATE, Z, 20, 15&gt;
LSN 8: &lt;T3, START&gt;
LSN 9: &lt;T3, UPDATE, X, 40, 45&gt;
[CRASH]
            </pre>
            <p><strong>Answer:</strong> REDO T1 (committed after checkpoint) → Y=35. UNDO T2 (uncommitted) → Z=20. UNDO T3 (uncommitted) → X=40.</p>
        </div>
        
        <h4>Sample Analyze Question:</h4>
        <div style="background:#f8f9fa; padding:20px; border-radius:10px; margin:20px 0;">
            <p><strong>Question:</strong> A database system uses ARIES recovery. After a crash, the Analysis phase determines the dirty page table contains P1@100, P2@150, P3@200. The smallest recLSN is 100. During REDO, what determines whether a page needs to be redone? Explain the trade-offs in this approach.</p>
            <p><strong>Answer:</strong> REDO applies if pageLSN in database is less than the LSN of the log record. This ensures only necessary updates are redone. Trade-off: checking pageLSN requires reading pages, but saves unnecessary I/O. It's generally better than always redoing because many pages may have been flushed to disk already.</p>
        </div>
    `
};