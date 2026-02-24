// ===============================
// FOCUS AREA: ADVANCED DATABASE SYSTEMS - CHAPTER 4
// Query Processing Strategies
// Based on Ministry of Education Blueprint (1 Question: Evaluate)
// File Path: FocusAreaOfExitExam/advanced-database-systems/chapter4.js
// ===============================

window.focusAreaAdvancedDBChapter4 = {
    title: "Chapter 4: Query Processing Strategies",
    
    description: "Comprehensive coverage of query processing, optimization techniques, cost estimation, and evaluation of query strategies in centralized and distributed databases.",
    
    blueprint: {
        totalQuestions: 1,
        cognitiveLevels: {
            evaluate: 1
        },
        topics: [
            "Query processing steps (parsing, optimization, execution)",
            "Query optimization techniques",
            "Cost-based vs rule-based optimization",
            "Join strategies (nested loop, sort-merge, hash join)",
            "Index selection and evaluation",
            "Distributed query processing",
            "Query execution plans",
            "Performance evaluation of query strategies"
        ]
    },

    learningObjectives: [
        "Evaluate different query processing strategies based on cost models",
        "Compare join algorithms and select optimal strategy for given scenarios",
        "Assess the impact of indexes on query performance",
        "Analyze distributed query execution plans",
        "Critique query optimization decisions",
        "Design efficient query strategies for complex queries"
    ],

    sections: [
        {
            title: "4.1 Query Processing Overview (Understand)",
            content: `
                <h4>What is Query Processing?</h4>
                <p>Query processing is the series of steps a DBMS takes to execute a query and return results. It transforms a high-level query (like SQL) into an efficient execution plan.</p>
                
                <h4>Query Processing Steps</h4>
                
                <div style="text-align:center; margin:20px 0;">
                    <pre style="background:#f4f4f4; padding:10px; display:inline-block;">
    SQL Query
        ↓
    Parsing & Translation
        ↓
    Query Optimization
        ↓
    Execution Plan
        ↓
    Query Execution
        ↓
    Results
                    </pre>
                </div>
                
                <h5>1. Parsing and Translation</h5>
                <ul>
                    <li>Check syntax and semantics</li>
                    <li>Verify relations and attributes exist</li>
                    <li>Convert SQL to internal representation (parse tree)</li>
                </ul>
                
                <h5>2. Query Optimization</h5>
                <ul>
                    <li>Generate multiple execution plans</li>
                    <li>Estimate cost of each plan</li>
                    <li>Choose lowest-cost plan</li>
                </ul>
                
                <h5>3. Query Execution</h5>
                <ul>
                    <li>Execute the chosen plan</li>
                    <li>Use database engine to access data</li>
                    <li>Return results to user</li>
                </ul>
                
                <h4>Query Optimization Goals</h4>
                <ul>
                    <li><strong>Minimize response time:</strong> Time to get first result</li>
                    <li><strong>Minimize total time:</strong> Time to complete entire query</li>
                    <li><strong>Minimize resource usage:</strong> CPU, I/O, memory, network</li>
                </ul>
                
                <h4>Types of Optimization</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Rule-based (Heuristic)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Apply transformation rules regardless of data size</td>
                        <td style="padding:8px; border:1px solid #ddd;">Push selections down, perform selections before joins</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Cost-based</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Estimate cost using statistics and choose cheapest</td>
                        <td style="padding:8px; border:1px solid #ddd;">Compare join algorithms based on table sizes</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Query processing steps: Parse → Optimize → Execute",
                "Optimization goal: minimize response time, total time, resources",
                "Rule-based: apply fixed heuristics",
                "Cost-based: estimate and compare costs"
            ]
        },

        {
            title: "4.2 Query Cost Estimation (Apply Level)",
            content: `
                <h4>Cost Components</h4>
                
                <ul>
                    <li><strong>I/O cost:</strong> Disk accesses (dominant factor in traditional DBMS)</li>
                    <li><strong>CPU cost:</strong> Processing time</li>
                    <li><strong>Memory cost:</strong> Buffer usage</li>
                    <li><strong>Network cost:</strong> Data transfer (critical in distributed DB)</li>
                </ul>
                
                <p>In cost estimation, we often focus on I/O cost because it's the bottleneck.</p>
                
                <h4>Statistics Used in Cost Estimation</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Statistic</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>nRows</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Number of tuples in relation</td>
                        <td style="padding:8px; border:1px solid #ddd;">Employee has 10,000 rows</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>bFactor</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Blocking factor (tuples per block)</td>
                        <td style="padding:8px; border:1px solid #ddd;">50 tuples per block</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>nBlocks</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Number of blocks for relation</td>
                        <td style="padding:8px; border:1px solid #ddd;">nRows / bFactor = 200 blocks</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>nDistinct(A)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Number of distinct values in attribute A</td>
                        <td style="padding:8px; border:1px solid #ddd;">Department has 10 distinct values</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>min(A), max(A)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Minimum and maximum values</td>
                        <td style="padding:8px; border:1px solid #ddd;">Salary from 30,000 to 200,000</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Indexes</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Type and height of indexes</td>
                        <td style="padding:8px; border:1px solid #ddd;">B+ tree with height 3</td>
                    </tr>
                </table>
                
                <h4>Selectivity Estimation</h4>
                <p>Selectivity = fraction of rows that satisfy a condition.</p>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- Equality condition (A = value)
selectivity = 1 / nDistinct(A)

-- Range condition (A > value)
selectivity = (max(A) - value) / (max(A) - min(A))

-- AND condition (cond1 AND cond2)
selectivity = selectivity(cond1) × selectivity(cond2)

-- OR condition (cond1 OR cond2)
selectivity = selectivity(cond1) + selectivity(cond2) - (sel1 × sel2)
                </pre>
                
                <h4>Apply Exercise: Cost Estimation</h4>
                
                <p><strong>Scenario:</strong> Employee table with 10,000 rows, blocking factor 50 (200 blocks). Index on DeptID with 10 distinct values. Query: SELECT * FROM Employee WHERE DeptID = 5;</p>
                
                <p><strong>Estimate I/O cost:</strong></p>
                <ul>
                    <li>Selectivity = 1/10 = 0.1</li>
                    <li>Expected rows = 10,000 × 0.1 = 1,000 rows</li>
                    <li>Blocks to read = 1,000 / 50 = 20 blocks</li>
                    <li><strong>Cost without index:</strong> 200 blocks (full table scan)</li>
                    <li><strong>Cost with index:</strong> Index height (3) + 20 blocks = 23 I/Os</li>
                    <li><strong>Conclusion:</strong> Index is better (23 vs 200)</li>
                </ul>
            `,
            keyPoints: [
                "Cost estimation uses table statistics",
                "Selectivity estimates fraction of rows selected",
                "I/O cost is primary metric in traditional DBMS",
                "Index can dramatically reduce cost for selective queries",
                "Full table scan better for low selectivity"
            ]
        },

        {
            title: "4.3 Join Strategies (Analyze Level)",
            content: `
                <h4>Blueprint Focus: Analyze - Comparing Join Algorithms</h4>
                
                <h4>Three Main Join Algorithms</h4>
                
                <h5>1. Nested Loop Join</h5>
                <p>For each tuple in outer relation, scan inner relation for matches.</p>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
for each tuple t1 in outer relation:
    for each tuple t2 in inner relation:
        if t1.joinAttr == t2.joinAttr:
            add to result
                </pre>
                
                <p><strong>Cost:</strong> nBlocks(outer) + (nRows(outer) × nBlocks(inner))</p>
                <p><strong>Example:</strong> R (100 blocks, 5000 rows) join S (200 blocks, 10000 rows)</p>
                <ul>
                    <li>If R is outer: 100 + (5000 × 200) = 100 + 1,000,000 = 1,000,100 I/Os</li>
                    <li>If S is outer: 200 + (10000 × 100) = 200 + 1,000,000 = 1,000,200 I/Os</li>
                </ul>
                <p><strong>Best for:</strong> Small outer relation, inner relation indexed</p>
                
                <h5>2. Sort-Merge Join</h5>
                <p>Sort both relations on join attribute, then merge.</p>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
Sort R on joinAttr
Sort S on joinAttr
i = 0, j = 0
while i < nRows(R) and j < nRows(S):
    if R[i].joinAttr == S[j].joinAttr:
        output matching tuples
        advance pointers appropriately
    else if R[i].joinAttr < S[j].joinAttr:
        i++
    else:
        j++
                </pre>
                
                <p><strong>Cost:</strong> Sort(R) + Sort(S) + Merge</p>
                <p>Sort cost ≈ 2 × nBlocks × (1 + log(nBlocks))</p>
                <p><strong>Example:</strong> Same R (100 blocks), S (200 blocks)</p>
                <ul>
                    <li>Sort R: 2 × 100 × (1 + log 100) ≈ 200 × (1 + 7) = 1,600 I/Os</li>
                    <li>Sort S: 2 × 200 × (1 + log 200) ≈ 400 × (1 + 8) = 3,600 I/Os</li>
                    <li>Merge: nBlocks(R) + nBlocks(S) = 300 I/Os</li>
                    <li>Total ≈ 1,600 + 3,600 + 300 = 5,500 I/Os</li>
                </ul>
                <p><strong>Best for:</strong> Large relations, both already sorted, equality joins</p>
                
                <h5>3. Hash Join</h5>
                <p>Hash smaller relation into buckets, then probe with larger relation.</p>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- Build phase: hash smaller relation into memory buckets
for each tuple in smaller relation:
    hash on joinAttr, place in bucket

-- Probe phase: scan larger relation
for each tuple in larger relation:
    hash on joinAttr, probe matching bucket
    compare for matches
                </pre>
                
                <p><strong>Cost:</strong> 3 × (nBlocks(smaller) + nBlocks(larger)) if hash table fits in memory</p>
                <p><strong>Example:</strong> Same R (100 blocks), S (200 blocks)</p>
                <ul>
                    <li>Cost ≈ 3 × (100 + 200) = 900 I/Os</li>
                </ul>
                <p><strong>Best for:</strong> Equality joins, one relation significantly smaller</p>
                
                <h4>Analyze Exercise: Join Algorithm Selection</h4>
                
                <p><strong>Scenario:</strong> Choose best join algorithm for each case:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Case</th>
                        <th style="padding:10px; border:1px solid #ddd;">Characteristics</th>
                        <th style="padding:10px; border:1px solid #ddd;">Best Algorithm</th>
                        <th style="padding:10px; border:1px solid #ddd;">Why</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">1</td>
                        <td style="padding:8px; border:1px solid #ddd;">Small table (100 rows) join large table (1M rows), index on large</td>
                        <td style="padding:8px; border:1px solid #ddd;">Indexed Nested Loop</td>
                        <td style="padding:8px; border:1px solid #ddd;">Small outer, indexed inner minimizes I/O</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">2</td>
                        <td style="padding:8px; border:1px solid #ddd;">Two large tables (1M rows each), no indexes, need equality join</td>
                        <td style="padding:8px; border:1px solid #ddd;">Hash Join</td>
                        <td style="padding:8px; border:1px solid #ddd;">Best for large equality joins, O(n) complexity</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">3</td>
                        <td style="padding:8px; border:1px solid #ddd;">Two large tables, both already sorted on join column</td>
                        <td style="padding:8px; border:1px solid #ddd;">Sort-Merge Join</td>
                        <td style="padding:8px; border:1px solid #ddd;">No sorting needed, merge is efficient</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">4</td>
                        <td style="padding:8px; border:1px solid #ddd;">Small table (100 rows) join small table (200 rows)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Nested Loop</td>
                        <td style="padding:8px; border:1px solid #ddd;">Simple, overhead of other algorithms not worth it</td>
                    </tr>
                </table>
                
                <h4>Analyze Exercise: Cost Comparison</h4>
                
                <p><strong>Scenario:</strong> R (10,000 rows, 200 blocks), S (100,000 rows, 2,000 blocks). Compute join costs:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Algorithm</th>
                        <th style="padding:10px; border:1px solid #ddd;">Cost Formula</th>
                        <th style="padding:10px; border:1px solid #ddd;">Estimated I/O</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Nested Loop (R outer)</td>
                        <td style="padding:8px; border:1px solid #ddd;">200 + (10,000 × 2,000)</td>
                        <td style="padding:8px; border:1px solid #ddd;">20,000,200 (terrible)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Nested Loop with index on S</td>
                        <td style="padding:8px; border:1px solid #ddd;">200 + (10,000 × 3) assuming index height 3</td>
                        <td style="padding:8px; border:1px solid #ddd;">30,200 (good)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Sort-Merge</td>
                        <td style="padding:8px; border:1px solid #ddd;">2×200×log200 + 2×2000×log2000 + 2200</td>
                        <td style="padding:8px; border:1px solid #ddd;">≈ 2×200×8 + 2×2000×11 + 2200 = 3,200 + 44,000 + 2,200 = 49,400</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Hash Join</td>
                        <td style="padding:8px; border:1px solid #ddd;">3 × (200 + 2,000)</td>
                        <td style="padding:8px; border:1px solid #ddd;">6,600 (best)</td>
                    </tr>
                </table>
                
                <p><strong>Conclusion:</strong> Hash join is best for this scenario unless one relation has index, then indexed nested loop may compete.</p>
            `,
            keyPoints: [
                "Nested Loop: good for small outer + indexed inner",
                "Sort-Merge: good for already sorted data or range joins",
                "Hash Join: best for large equality joins",
                "Cost varies dramatically based on algorithm choice",
                "Indexes can transform nested loop from worst to best"
            ]
        },

        {
            title: "4.4 Query Optimization Techniques (Analyze Level)",
            content: `
                <h4>Heuristic Optimization Rules</h4>
                
                <ol>
                    <li><strong>Perform selections early</strong> - reduces size of intermediate results</li>
                    <li><strong>Perform projections early</strong> - reduces number of columns</li>
                    <li><strong>Combine cross product with subsequent selections into joins</strong></li>
                    <li><strong>Reorder joins to reduce intermediate sizes</strong></li>
                </ol>
                
                <h4>Example: Query Optimization</h4>
                
                <p><strong>Original query:</strong> Find employees in CS department who work on project 'X'</p>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
SELECT E.Name
FROM Employee E, WorksOn W, Project P
WHERE E.EmpID = W.EmpID 
  AND W.ProjID = P.ProjID
  AND E.Dept = 'CS'
  AND P.Name = 'X';
                </pre>
                
                <h5>Step 1: Initial relational algebra tree</h5>
                <pre>
                    Project(Name)
                         |
                      Join (E.EmpID=W.EmpID)
                       /                    \
                    Join (W.ProjID=P.ProjID)  Employee
                   /            \
              WorksOn          Project
                </pre>
                
                <h5>Step 2: Push selections down</h5>
                <pre>
                    Project(Name)
                         |
                      Join (E.EmpID=W.EmpID)
                       /                    \
              Select(Dept='CS')          Join (W.ProjID=P.ProjID)
                   /                     /            \
              Employee              WorksOn      Select(Name='X')
                                                      /
                                                  Project
                </pre>
                
                <h5>Step 3: Estimate sizes</h5>
                <ul>
                    <li>Employee: 10,000 rows, CS department 10% → 1,000 rows</li>
                    <li>Project: 500 projects, Name='X' is 1 → 1 row</li>
                    <li>WorksOn: 50,000 rows, but joins with filtered tables will be much smaller</li>
                </ul>
                
                <h4>Join Ordering</h4>
                
                <p><strong>Principle:</strong> Perform joins that reduce result size earliest.</p>
                
                <p>Compare join orders:</p>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- Order 1: (Employee ⋈ WorksOn) ⋈ Project
Employee (10,000) ⋈ WorksOn (50,000) → intermediate ~50,000
then join with Project (500) → final result

-- Order 2: (Project ⋈ WorksOn) ⋈ Employee
Project (500) ⋈ WorksOn (50,000) → intermediate ~50,000
then join with Employee (10,000) → final result

-- Order 3: Select first then join
σ(Employee) (1,000) ⋈ WorksOn → intermediate ~5,000
σ(Project) (1) ⋈ WorksOn → intermediate ~50
then join the intermediates? Actually better:
(σ(Employee) ⋈ WorksOn) ⋈ σ(Project) or vice versa
                </pre>
                
                <p><strong>Best:</strong> Apply selections first, then join smallest relations early.</p>
                
                <h4>Analyze Exercise: Query Plan Evaluation</h4>
                
                <p><strong>Scenario:</strong> Three relations: R(10,000), S(5,000), T(100). Query: R ⋈ S ⋈ T</p>
                
                <p><strong>Evaluate three join orders:</strong></p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Order</th>
                        <th style="padding:10px; border:1px solid #ddd;">Intermediate Size</th>
                        <th style="padding:10px; border:1px solid #ddd;">Total Cost (approx)</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">(R ⋈ S) ⋈ T</td>
                        <td style="padding:8px; border:1px solid #ddd;">R⋈S ≈ 5,000 (assume)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Cost(R⋈S) + Cost(5,000 ⋈ 100)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">(R ⋈ T) ⋈ S</td>
                        <td style="padding:8px; border:1px solid #ddd;">R⋈T ≈ 100 (if T is small)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Cost(R⋈T) + Cost(100 ⋈ 5,000) - better</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">(S ⋈ T) ⋈ R</td>
                        <td style="padding:8px; border:1px solid #ddd;">S⋈T ≈ 100</td>
                        <td style="padding:8px; border:1px solid #ddd;">Cost(S⋈T) + Cost(100 ⋈ 10,000) - also good</td>
                    </tr>
                </table>
                
                <p><strong>Conclusion:</strong> Join smallest tables first to minimize intermediate sizes.</p>
            `,
            keyPoints: [
                "Push selections and projections down (do them early)",
                "Join smallest relations first",
                "Estimate intermediate result sizes",
                "Heuristic rules generally good, but cost-based better",
                "Join order dramatically affects performance"
            ]
        },

        {
            title: "4.5 Index Selection and Evaluation (Evaluate Level)",
            content: `
                <h4>Blueprint Focus: Evaluate - Index Strategy Evaluation</h4>
                
                <h4>Index Types Review</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Index Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Best For</th>
                        <th style="padding:10px; border:1px solid #ddd;">Lookup Cost</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">B+ Tree</td>
                        <td style="padding:8px; border:1px solid #ddd;">Equality and range queries</td>
                        <td style="padding:8px; border:1px solid #ddd;">O(log n)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Hash</td>
                        <td style="padding:8px; border:1px solid #ddd;">Equality queries only</td>
                        <td style="padding:8px; border:1px solid #ddd;">O(1)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Bitmap</td>
                        <td style="padding:8px; border:1px solid #ddd;">Low cardinality columns</td>
                        <td style="padding:8px; border:1px solid #ddd;">Fast for AND/OR operations</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Covering</td>
                        <td style="padding:8px; border:1px solid #ddd;">Queries that need only indexed columns</td>
                        <td style="padding:8px; border:1px solid #ddd;">No table access needed</td>
                    </tr>
                </table>
                
                <h4>Index Selection Problem</h4>
                <p>Given a workload of queries and updates, choose indexes to minimize total cost subject to storage constraints.</p>
                
                <h4>Evaluate Exercise 1: Index Benefit Analysis</h4>
                
                <p><strong>Scenario:</strong> Table Employee (10,000 rows, 200 blocks). Workload:</p>
                <ul>
                    <li>Q1: SELECT * FROM Employee WHERE DeptID = 5 (frequency 100/hour, selectivity 10%)</li>
                    <li>Q2: SELECT * FROM Employee WHERE Salary BETWEEN 50000 AND 60000 (frequency 50/hour, selectivity 20%)</li>
                    <li>Q3: UPDATE Employee SET Salary = Salary * 1.1 WHERE DeptID = 5 (frequency 10/hour)</li>
                </ul>
                
                <p><strong>Evaluate index on DeptID:</strong></p>
                <ul>
                    <li><strong>Q1 benefit:</strong> Without index: 200 I/Os, With index: 3 (index) + 20 (data) = 23 I/Os</li>
                    <li><strong>Q3 impact:</strong> Updates need to maintain index (extra I/O per update)</li>
                    <li><strong>Q2 unaffected:</strong> Salary query still needs full scan (or separate index)</li>
                </ul>
                
                <p><strong>Cost-benefit calculation:</strong></p>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
Without index:
Q1 cost/hour = 100 × 200 = 20,000 I/Os
Q3 cost/hour = 10 × 200 (full scan for update? Actually update with condition) = 2,000 I/Os
Total = 22,000 I/Os/hour

With index on DeptID:
Q1 cost/hour = 100 × 23 = 2,300 I/Os
Q3 cost/hour = 10 × (23 + maintenance) ≈ 10 × 30 = 300 I/Os
Q2 cost/hour = 50 × 200 = 10,000 I/Os (unchanged)
Total = 12,600 I/Os/hour

Savings = 22,000 - 12,600 = 9,400 I/Os/hour
                </pre>
                
                <p><strong>Evaluate Exercise 2: Multiple Indexes</strong></p>
                
                <p>Consider adding index on Salary as well:</p>
                <ul>
                    <li>Q2 benefit: 200 I/Os → 23 I/Os</li>
                    <li>Additional update cost for maintaining two indexes</li>
                </ul>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
With both indexes:
Q1 cost = 2,300
Q2 cost = 50 × 23 = 1,150
Q3 cost = 10 × (23+23) = 460
Total = 3,910 I/Os/hour

Savings vs no index = 22,000 - 3,910 = 18,090 I/Os/hour
Savings vs single index = 12,600 - 3,910 = 8,690 I/Os/hour
                </pre>
                
                <p><strong>Evaluate Exercise 3: Composite Index</strong></p>
                
                <p>Consider composite index (DeptID, Salary):</p>
                <ul>
                    <li>Can answer Q1 efficiently (DeptID part)</li>
                    <li>Can answer Q2? Only if DeptID also specified</li>
                    <li>Not helpful for Salary-only queries</li>
                    <li>May be larger and more expensive to maintain</li>
                </ul>
                
                <p><strong>Evaluation Conclusion:</strong> For this workload, both single-column indexes are best. Composite index would not help Q2.</p>
                
                <h4>Evaluate Exercise 4: Index Selection Trade-offs</h4>
                
                <p><strong>Scenario:</strong> Table with 1M rows, 100MB. Read-heavy workload (95% reads, 5% writes). Storage limit 120MB for indexes.</p>
                
                <p><strong>Index options:</strong></p>
                <ul>
                    <li>Option A: Three single-column B+ trees (30MB each) = 90MB</li>
                    <li>Option B: Two composite indexes (40MB each) = 80MB</li>
                    <li>Option C: One covering index (50MB) for most frequent query</li>
                </ul>
                
                <p><strong>Evaluation criteria:</strong></p>
                <ol>
                    <li><strong>Query coverage:</strong> Which indexes cover the most important queries?</li>
                    <li><strong>Storage cost:</strong> All options fit within 120MB</li>
                    <li><strong>Update overhead:</strong> More indexes = slower writes</li>
                    <li><strong>Maintenance complexity:</strong> Simpler is better</li>
                </ol>
                
                <p><strong>Recommendation:</strong> Choose indexes that cover the top 3-5 most frequent queries. Don't index columns rarely used in queries. Consider covering index for absolute hottest query.</p>
            `,
            keyPoints: [
                "Index selection balances query benefit vs update cost",
                "Calculate cost savings using query frequency and selectivity",
                "Multiple indexes help different queries but increase update cost",
                "Composite indexes help queries with multiple conditions",
                "Storage constraints may limit number of indexes",
                "Evaluate based on workload, not theoretical optimal"
            ]
        },

        {
            title: "4.6 Distributed Query Processing (Evaluate Level)",
            content: `
                <h4>Distributed Query Processing Challenges</h4>
                
                <ul>
                    <li><strong>Data fragmentation:</strong> Data may be spread across sites</li>
                    <li><strong>Network cost:</strong> Data transfer dominates cost</li>
                    <li><strong>Different local capabilities:</strong> Heterogeneous systems</li>
                    <li><strong>Replication:</strong> Multiple copies to choose from</li>
                </ul>
                
                <h4>Distributed Query Processing Steps</h4>
                
                <ol>
                    <li><strong>Query decomposition:</strong> Break into subqueries for each site</li>
                    <li><strong>Data localization:</strong> Determine which fragments needed</li>
                    <li><strong>Global optimization:</strong> Choose best sites and join order</li>
                    <li><strong>Local optimization:</strong> Optimize at each site</li>
                </ol>
                
                <h4>Join Strategies in Distributed Databases</h4>
                
                <h5>1. Ship-Whole</h5>
                <p>Transfer entire tables to one site, then join locally.</p>
                <p><strong>Cost:</strong> size(R) + size(S) + local join cost</p>
                <p><strong>Best when:</strong> Both tables small, or network fast</p>
                
                <h5>2. Fetch-as-Needed</h5>
                <p>Ship one table, then fetch matching tuples from other.</p>
                <p><strong>Cost:</strong> size(outer) + (nRows(outer) × tuple size(inner))</p>
                <p><strong>Best when:</strong> One table small, other large with index</p>
                
                <h5>3. Semijoin</h5>
                <p>Project join columns from one table, ship to other site, get matching tuples, then ship full data.</p>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
-- Step 1: At site A, project join columns
π_joinCols(R) → temp (size small)

-- Step 2: Ship temp to site B
-- Step 3: At site B, find matching tuples in S
σ_joinCols IN temp(S) → matches

-- Step 4: Ship matches back to site A
-- Step 5: Join at site A
                </pre>
                
                <p><strong>Cost:</strong> size(π_joinCols(R)) + size(matches) + local processing</p>
                <p><strong>Best when:</strong> Joining large tables, join columns small, few matches</p>
                
                <h4>Evaluate Exercise 1: Distributed Join Strategies</h4>
                
                <p><strong>Scenario:</strong> R at site A (10,000 rows, 200 blocks, row size 100 bytes, join column 10 bytes). S at site B (100,000 rows, 2,000 blocks, row size 200 bytes). Join selectivity = 10% (10,000 matches). Network cost = 1 per byte.</p>
                
                <p><strong>Evaluate strategies:</strong></p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Strategy</th>
                        <th style="padding:10px; border:1px solid #ddd;">Data Transferred</th>
                        <th style="padding:10px; border:1px solid #ddd;">Network Cost</th>
                        <th style="padding:10px; border:1px solid #ddd;">Evaluation</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Ship R to B</td>
                        <td style="padding:8px; border:1px solid #ddd;">10,000 × 100 = 1MB</td>
                        <td style="padding:8px; border:1px solid #ddd;">1,000,000</td>
                        <td style="padding:8px; border:1px solid #ddd;">Good if R small</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Ship S to A</td>
                        <td style="padding:8px; border:1px solid #ddd;">100,000 × 200 = 20MB</td>
                        <td style="padding:8px; border:1px solid #ddd;">20,000,000</td>
                        <td style="padding:8px; border:1px solid #ddd;">Too expensive</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Semijoin from A to B</td>
                        <td style="padding:8px; border:1px solid #ddd;">π_cols(R) = 10,000 × 10 = 100KB + matches (10,000 × 200 = 2MB)</td>
                        <td style="padding:8px; border:1px solid #ddd;">100,000 + 2,000,000 = 2.1MB</td>
                        <td style="padding:8px; border:1px solid #ddd;">Best if matches moderate</td>
                    </tr>
                </table>
                
                <p><strong>Conclusion:</strong> Semijoin best if matches not too large. Ship R to B also good if R very small.</p>
                
                <h4>Evaluate Exercise 2: Site Selection</h4>
                
                <p><strong>Scenario:</strong> Three sites with replicated data. Query needs to join R and S, both fully replicated. Choose execution site to minimize total cost.</p>
                
                <p><strong>Factors:</strong></p>
                <ul>
                    <li>Processing power at each site (CPU speed)</li>
                    <li>Current load</li>
                    <li>Network distance to users</li>
                    <li>Local availability of other needed data</li>
                </ul>
                
                <p><strong>Evaluation:</strong> Choose site with best combination of factors. Often choose site where result is needed (e.g., user location).</p>
                
                <h4>Evaluate Exercise 3: Parallel Query Processing</h4>
                
                <p><strong>Scenario:</strong> Partitioned data across 10 nodes. Query: SELECT AVG(salary) FROM Employee GROUP BY DeptID</p>
                
                <p><strong>Parallel execution plan:</strong></p>
                <ol>
                    <li>Each node computes local SUM(salary) and COUNT(*) per DeptID</li>
                    <li>Ship local aggregates to coordinator</li>
                    <li>Coordinator combines: total SUM / total COUNT per DeptID</li>
                </ol>
                
                <p><strong>Evaluation:</strong> Much faster than centralizing all data. Network cost minimal (only aggregates). Scales linearly with nodes.</p>
            `,
            keyPoints: [
                "Network cost dominates distributed query processing",
                "Semijoin reduces data transfer by sending only join columns first",
                "Choose execution site based on data location and user needs",
                "Replication provides choice of which copy to access",
                "Parallel processing scales queries across nodes",
                "Aggregates can be computed in parallel then combined"
            ]
        },

        {
            title: "4.7 Comprehensive Query Strategy Evaluation (Evaluate Level)",
            content: `
                <h4>Blueprint Focus: Evaluate - Complete Query Strategy Analysis</h4>
                
                <h4>Case Study: E-commerce Dashboard Query</h4>
                
                <p><strong>Query:</strong> "Show top 10 customers by total purchase amount in last 30 days, including customer name, email, and total spent"</p>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
SELECT C.CustomerID, C.Name, C.Email, SUM(O.TotalAmount) as TotalSpent
FROM Customer C
JOIN Orders O ON C.CustomerID = O.CustomerID
WHERE O.OrderDate >= CURRENT_DATE - 30
GROUP BY C.CustomerID, C.Name, C.Email
ORDER BY TotalSpent DESC
LIMIT 10;
                </pre>
                
                <p><strong>Database statistics:</strong></p>
                <ul>
                    <li>Customer: 100,000 rows (10,000 blocks)</li>
                    <li>Orders: 1,000,000 rows (100,000 blocks)</li>
                    <li>Orders in last 30 days: 100,000 rows (10% of orders)</li>
                    <li>Average customer has 10 orders (in total)</li>
                    <li>Average customer has 1 order in last 30 days</li>
                </ul>
                
                <h4>Step 1: Evaluate Index Options</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Index</th>
                        <th style="padding:10px; border:1px solid #ddd;">Benefit</th>
                        <th style="padding:10px; border:1px solid #ddd;">Cost</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Orders(OrderDate)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Fast access to last 30 days orders (10,000 blocks → 100 blocks)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Update overhead</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Orders(CustomerID)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Fast join with Customer</td>
                        <td style="padding:8px; border:1px solid #ddd;">Update overhead</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Composite (OrderDate, CustomerID)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Best for this query (both conditions)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Larger, more maintenance</td>
                    </tr>
                </table>
                
                <h4>Step 2: Evaluate Join Strategies</h4>
                
                <p><strong>Option A: Nested Loop (Customer outer, Orders inner)</strong></p>
                <ul>
                    <li>Customer scan: 10,000 blocks</li>
                    <li>For each customer, need orders in last 30 days</li>
                    <li>With index on Orders(CustomerID, OrderDate): 3-4 I/Os per customer</li>
                    <li>Total ≈ 10,000 + (100,000 × 4) = 410,000 I/Os</li>
                </ul>
                
                <p><strong>Option B: Nested Loop (Orders outer, Customer inner)</strong></p>
                <ul>
                    <li>Orders in last 30 days: 100,000 rows, 100 blocks (if indexed)</li>
                    <li>For each order, lookup customer (index on CustomerID)</li>
                    <li>Total ≈ 100 + (100,000 × 2) = 200,100 I/Os</li>
                </ul>
                
                <p><strong>Option C: Sort-Merge Join</strong></p>
                <ul>
                    <li>Sort filtered Orders (100,000 rows) on CustomerID</li>
                    <li>Sort Customer (100,000 rows) on CustomerID</li>
                    <li>Merge</li>
                    <li>Total ≈ 2×sort cost + merge cost ≈ 50,000 I/Os</li>
                </ul>
                
                <p><strong>Option D: Hash Join</strong></p>
                <ul>
                    <li>Build hash on Customer (100,000 rows)</li>
                    <li>Probe with filtered Orders (100,000 rows)</li>
                    <li>Total ≈ 3 × (blocks(Customer) + blocks(filtered Orders)) ≈ 3 × (10,000 + 100) = 30,300 I/Os</li>
                </ul>
                
                <h4>Step 3: Evaluate Aggregation and Sorting</h4>
                
                <p>After join, need to group by CustomerID and sum amounts, then sort top 10.</p>
                <ul>
                    <li>Result size before grouping: 100,000 rows (each order contributes)</li>
                    <li>After grouping: 100,000 rows (actually less, maybe 80,000 customers)</li>
                    <li>Sorting 80,000 rows to get top 10: can use heap with 10 items (no full sort needed)</li>
                </ul>
                
                <h4>Step 4: Complete Strategy Evaluation</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Strategy</th>
                        <th style="padding:10px; border:1px solid #ddd;">Estimated I/O</th>
                        <th style="padding:10px; border:1px solid #ddd;">Pros/Cons</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">A: Nested Loop (C→O)</td>
                        <td style="padding:8px; border:1px solid #ddd;">410,000</td>
                        <td style="padding:8px; border:1px solid #ddd;">Simple but scans all customers</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">B: Nested Loop (O→C)</td>
                        <td style="padding:8px; border:1px solid #ddd;">200,100</td>
                        <td style="padding:8px; border:1px solid #ddd;">Better, uses filtered orders</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">C: Sort-Merge</td>
                        <td style="padding:8px; border:1px solid #ddd;">50,000</td>
                        <td style="padding:8px; border:1px solid #ddd;">Good, but sorting overhead</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">D: Hash Join</td>
                        <td style="padding:8px; border:1px solid #ddd;">30,300</td>
                        <td style="padding:8px; border:1px solid #ddd;">Best for this equality join</td>
                    </tr>
                </table>
                
                <h4>Step 5: Recommended Strategy</h4>
                
                <ol>
                    <li>Use index on Orders(OrderDate) to quickly identify last 30 days orders</li>
                    <li>Use hash join: build hash table on Customer (smaller), probe with filtered Orders</li>
                    <li>During probe, accumulate SUM per CustomerID in hash table</li>
                    <li>After probe, scan hash table to find top 10 (using heap)</li>
                    <li>Return results</li>
                </ol>
                
                <p><strong>Total I/O ≈ 30,300 + 100 (index) = 30,400 I/Os</strong></p>
                
                <h4>Evaluation Rubric for Query Strategies</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Criteria</th>
                        <th style="padding:10px; border:1px solid #ddd;">Excellent</th>
                        <th style="padding:10px; border:1px solid #ddd;">Good</th>
                        <th style="padding:10px; border:1px solid #ddd;">Poor</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Index Usage</td>
                        <td style="padding:8px; border:1px solid #ddd;">Optimal indexes used for selectivity</td>
                        <td style="padding:8px; border:1px solid #ddd;">Some indexes used</td>
                        <td style="padding:8px; border:1px solid #ddd;">No indexes or wrong indexes</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Join Order</td>
                        <td style="padding:8px; border:1px solid #ddd;">Smallest intermediate results</td>
                        <td style="padding:8px; border:1px solid #ddd;">Reasonable order</td>
                        <td style="padding:8px; border:1px solid #ddd;">Large intermediate results</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Join Algorithm</td>
                        <td style="padding:8px; border:1px solid #ddd;">Best algorithm for data sizes</td>
                        <td style="padding:8px; border:1px solid #ddd;">Acceptable algorithm</td>
                        <td style="padding:8px; border:1px solid #ddd;">Worst algorithm chosen</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Data Reduction</td>
                        <td style="padding:8px; border:1px solid #ddd;">Selections and projections early</td>
                        <td style="padding:8px; border:1px solid #ddd;">Some reduction</td>
                        <td style="padding:8px; border:1px solid #ddd;">No early reduction</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Evaluate complete strategies, not just individual operations",
                "Consider index usage, join order, join algorithm together",
                "Filter early (selections) to reduce intermediate sizes",
                "Choose join algorithm based on data characteristics",
                "Hash join often best for large equality joins",
                "Use heaps for top-K instead of full sort"
            ]
        }
    ],

    summary: `
        <h3>Chapter 4 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Query Processing:</strong> Parse → Optimize → Execute</li>
            <li><strong>Optimization Types:</strong> Rule-based (heuristics) vs Cost-based (statistics)</li>
            <li><strong>Cost Estimation:</strong> Uses table statistics (row count, block count, distinct values) to estimate selectivity and I/O</li>
            <li><strong>Join Algorithms:</strong> Nested Loop (small outer + index), Sort-Merge (sorted data), Hash Join (large equality joins)</li>
            <li><strong>Heuristic Rules:</strong> Push selections/projections down, join smallest first</li>
            <li><strong>Index Selection:</strong> Balance query benefit vs update cost, consider workload frequency</li>
            <li><strong>Distributed Queries:</strong> Network cost dominates, semijoin reduces transfer, choose execution site wisely</li>
            <li><strong>Evaluation:</strong> Consider all aspects together - indexes, join order, join algorithm, data reduction</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "Compare nested loop, sort-merge, and hash join algorithms. For each, give a scenario where it is the best choice.",
            answer: "Nested loop: best when one table small and other indexed (e.g., 100-row table joining 1M-row table with index). Sort-merge: best when both tables already sorted on join column, or for range joins. Hash join: best for large equality joins where one table fits in memory (e.g., two 1M-row tables)."
        },
        {
            question: "How do you estimate the cost of a query? What statistics are needed?",
            answer: "Cost estimation uses table statistics: number of rows, blocks, distinct values, min/max, index info. Selectivity estimates fraction of rows meeting conditions. I/O cost = blocks read. For joins, add costs of accessing inner table based on algorithm."
        },
        {
            question: "What is the difference between rule-based and cost-based optimization? Give examples of each.",
            answer: "Rule-based applies fixed heuristics regardless of data size (e.g., always perform selections before joins). Cost-based uses statistics to estimate and compare plan costs (e.g., choose hash join over nested loop based on table sizes). Modern DBMS use cost-based with some heuristics."
        },
        {
            question: "How does distributed query processing differ from centralized? What additional considerations are needed?",
            answer: "Network cost dominates, so minimizing data transfer is critical. Strategies like semijoin reduce transfer. Data fragmentation and replication affect where to execute. Parallel execution can improve performance. Site selection considers network distance and local resources."
        },
        {
            question: "You have a table with 10 million rows and a workload of 10 query types. How do you decide which indexes to create?",
            answer: "Analyze workload frequency and importance. For each query, calculate benefit of candidate indexes (cost without index - cost with index) × frequency. Sum benefits across queries. Consider update cost (slower writes) and storage limits. Choose indexes with highest net benefit. May need to compromise if many query types."
        }
    ],

    quickTips: [
        "Parse → Optimize → Execute",
        "Selectivity = fraction of rows",
        "I/O cost dominates in traditional DBMS",
        "Hash join best for large equality joins",
        "Push selections down (do them early)",
        "Join smallest tables first",
        "Indexes speed reads, slow writes",
        "Semijoin reduces network transfer",
        "Top-K queries don't need full sort"
    ],

    commonMistakes: [
        "❌ Assuming nested loop always bad (it's good with index)",
        "❌ Forgetting to push selections down",
        "❌ Ignoring join order impact",
        "❌ Creating too many indexes (hurts writes)",
        "❌ Not considering network cost in distributed queries",
        "❌ Using full sort for top-K queries",
        "❌ Not updating statistics for cost-based optimization"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 4:</h3>
        <p>This chapter has <strong>1 question</strong> at the <strong>Evaluate</strong> level.</p>
        
        <h4>What "Evaluate" Means:</h4>
        <p>You need to assess query processing strategies, compare alternatives, and make recommendations based on cost-benefit analysis. Questions will present scenarios requiring you to:</p>
        <ul>
            <li>Compare join algorithms and select optimal strategy</li>
            <li>Evaluate index selection decisions</li>
            <li>Analyze distributed query execution plans</li>
            <li>Critique optimization choices</li>
            <li>Design efficient query strategies for complex queries</li>
        </ul>
        
        <h4>Expected Question Types:</h4>
        <ol>
            <li><strong>Join Strategy Evaluation:</strong> Given table statistics, compare nested loop, sort-merge, and hash join costs, and recommend the best with justification.</li>
            <li><strong>Index Selection Problem:</strong> Given workload of queries and updates, evaluate index options and recommend optimal set considering performance and storage.</li>
            <li><strong>Distributed Query Analysis:</strong> Given data distribution and network costs, evaluate different execution strategies (ship-whole, semijoin, etc.) and recommend best.</li>
            <li><strong>Complete Query Optimization:</strong> Given a complex query and database statistics, design and justify a complete execution strategy including indexes, join order, and algorithms.</li>
        </ol>
        
        <h4>Evaluation Criteria to Apply:</h4>
        <ul>
            <li><strong>Cost:</strong> I/O, CPU, network (distributed)</li>
            <li><strong>Data characteristics:</strong> Sizes, selectivity, distributions</li>
            <li><strong>Workload:</strong> Query frequencies, update patterns</li>
            <li><strong>Resources:</strong> Storage limits, memory, network bandwidth</li>
            <li><strong>Trade-offs:</strong> Read vs write performance, simplicity vs optimality</li>
        </ul>
        
        <h4>Sample Evaluate Question:</h4>
        <div style="background:#f8f9fa; padding:20px; border-radius:10px; margin:20px 0;">
            <p><strong>Question:</strong> A database has two tables: Orders (10 million rows, 500,000 blocks) and Customers (1 million rows, 50,000 blocks). A frequent query joins these on CustomerID and filters orders from last month (500,000 rows, 25,000 blocks). Compare three join strategies and recommend the best:</p>
            <ol>
                <li>Nested loop with Customers as outer, index on Orders.CustomerID</li>
                <li>Hash join after filtering Orders</li>
                <li>Sort-merge join after filtering both tables</li>
            </ol>
            
            <p><strong>Evaluation Answer:</strong></p>
            <ul>
                <li><strong>Strategy 1 (Nested Loop):</strong> Scan Customers (50,000 blocks) + for each customer (1M), probe Orders index (3-4 I/Os) ≈ 50,000 + 4,000,000 = 4,050,000 I/Os. Too high.</li>
                <li><strong>Strategy 2 (Hash Join):</strong> Build hash on filtered Orders (25,000 blocks) + probe Customers (50,000 blocks) = 3 × (25,000 + 50,000) = 225,000 I/Os.</li>
                <li><strong>Strategy 3 (Sort-Merge):</strong> Sort filtered Orders (25,000 × log) + sort Customers (50,000 × log) + merge ≈ 2×25,000×15 + 2×50,000×16 + 75,000 = 750,000 + 1,600,000 + 75,000 = 2,425,000 I/Os.</li>
            </ul>
            <p><strong>Recommendation:</strong> Hash join is clearly best (225,000 I/Os). Add index on Orders.OrderDate to efficiently identify last month's orders.</p>
        </div>
    `
};