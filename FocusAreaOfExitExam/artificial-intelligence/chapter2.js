// ===============================
// FOCUS AREA: ARTIFICIAL INTELLIGENCE - CHAPTER 2
// Problem Solving and Search Techniques
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaAIChapter2 = {
    title: "Chapter 2: Problem Solving and Search Techniques",
    
    // Blueprint alignment: 2 questions (Understand, Apply, Analyze)
    blueprint: {
        totalQuestions: 2,
        cognitiveLevels: {
            understand: 1,
            apply: 0.5,    // Part of a question
            analyze: 0.5    // Part of a question
        },
        topics: [
            "Understanding heuristics in search problems and games",
            "Applying search techniques to solve problems",
            "Analyzing strengths and weaknesses of search techniques"
        ]
    },

    learningObjectives: [
        "Understand problem solving as a search process",
        "Differentiate between uninformed and informed search strategies",
        "Apply heuristic functions to guide search",
        "Analyze the strengths and weaknesses of different search algorithms",
        "Understand how game playing uses adversarial search",
        "Evaluate the applicability of search techniques to different problems"
    ],

    sections: [
        {
            title: "2.1 Problem Solving as Search",
            content: `
                <h4>What is Problem Solving in AI?</h4>
                <p>In AI, problem solving is viewed as a <strong>search process</strong> through a space of possible states to find a path from an initial state to a goal state.</p>
                
                <h4>Key Components of Problem Formulation:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Component</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example (8-Puzzle)</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Initial State</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Starting point of the problem</td>
                        <td style="padding:8px; border:1px solid #ddd;">Tiles in random arrangement</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Actions/Successor Function</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Possible moves from a state</td>
                        <td style="padding:8px; border:1px solid #ddd;">Move blank up, down, left, right</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Goal Test</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Determines if a state is a goal</td>
                        <td style="padding:8px; border:1px solid #ddd;">Tiles in order 1-8</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Path Cost</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Cost of reaching a state</td>
                        <td style="padding:8px; border:1px solid #ddd;">Each move costs 1</td>
                    </tr>
                </table>
                
                <h4>State Space Representation:</h4>
                <p>A <strong>state space</strong> is a graph where:</p>
                <ul>
                    <li><strong>Nodes:</strong> States of the problem</li>
                    <li><strong>Edges:</strong> Actions that move between states</li>
                    <li><strong>Path:</strong> Sequence of actions from initial to goal</li>
                </ul>
                
                <h4>Example Problems in AI:</h4>
                <ul>
                    <li><strong>8-puzzle:</strong> Slide tiles to achieve order</li>
                    <li><strong>Route finding:</strong> Find path from city A to city B</li>
                    <li><strong>Missionaries and cannibals:</strong> Transport across river</li>
                    <li><strong>Tower of Hanoi:</strong> Move disks between pegs</li>
                    <li><strong>Water jug problem:</strong> Measure exact amounts</li>
                </ul>
                
                <h4>Evaluating Search Strategies:</h4>
                <p>Four criteria to evaluate any search algorithm:</p>
                <ul>
                    <li><strong>Completeness:</strong> Does it always find a solution if one exists?</li>
                    <li><strong>Optimality:</strong> Does it find the best solution (lowest cost)?</li>
                    <li><strong>Time Complexity:</strong> How long does it take? (measured in nodes)</li>
                    <li><strong>Space Complexity:</strong> How much memory does it need?</li>
                </ul>
            `,
            keyPoints: [
                "Problem solving = searching through state space",
                "Four components: initial state, actions, goal test, path cost",
                "State space is a graph of nodes (states) and edges (actions)",
                "Search algorithms evaluated by completeness, optimality, time, space"
            ]
        },

        {
            title: "2.2 Uninformed (Blind) Search Strategies",
            content: `
                <h4>What is Uninformed Search?</h4>
                <p>Uninformed search (also called blind search) has no additional information about states beyond the problem definition. It doesn't know if one state is closer to the goal than another.</p>
                
                <h4>2.2.1 Breadth-First Search (BFS)</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;" colspan="2">Breadth-First Search (BFS)</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Strategy</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Expand the shallowest node first</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Implementation</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Queue (FIFO - First In First Out)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Completeness</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Yes (if branching factor finite)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Optimality</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Yes (if cost = 1 per step)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Time Complexity</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">O(b^d) where b = branching factor, d = depth</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Space Complexity</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">O(b^d) - keeps all nodes in memory</td>
                    </tr>
                </table>
                
                <p><strong>How BFS Works:</strong> Imagine exploring all rooms on the first floor of a building before going to the second floor. BFS explores all nodes at depth d before any node at depth d+1.</p>
                
                <p><strong>Advantages:</strong> Guarantees shortest path in terms of steps, complete.</p>
                <p><strong>Disadvantages:</strong> Memory intensive - for depth 10 with branching factor 10, it stores billions of nodes!</p>
                
                <h4>2.2.2 Depth-First Search (DFS)</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;" colspan="2">Depth-First Search (DFS)</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Strategy</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Expand the deepest node first</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Implementation</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Stack (LIFO - Last In First Out)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Completeness</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">No (fails in infinite spaces or with loops)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Optimality</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">No (may find longer path first)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Time Complexity</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">O(b^m) where m = maximum depth</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Space Complexity</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">O(bm) - only stores current path</td>
                    </tr>
                </table>
                
                <p><strong>How DFS Works:</strong> Like exploring a maze by always turning right until you hit a dead end, then backtracking. DFS goes deep quickly along one path before trying alternatives.</p>
                
                <p><strong>Advantages:</strong> Very memory efficient - only needs to store current path.</p>
                <p><strong>Disadvantages:</strong> Not complete (can get stuck in infinite loops), not optimal.</p>
                
                <h4>2.2.3 Depth-Limited Search (DLS)</h4>
                <p>DFS with a predetermined depth limit L. Solves the infinite path problem but may miss solutions beyond the limit.</p>
                
                <h4>2.2.4 Iterative Deepening DFS (IDDFS)</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;" colspan="2">Iterative Deepening DFS (IDDFS)</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Strategy</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Repeated DLS with increasing limits (0,1,2,3,...)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Completeness</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Yes</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Optimality</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Yes (if cost = 1 per step)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Time Complexity</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">O(b^d)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Space Complexity</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">O(bd) - linear space</td>
                    </tr>
                </table>
                
                <p><strong>How IDDFS Works:</strong> First do DFS to depth 0, then depth 1, then depth 2, etc. It combines the completeness of BFS with the memory efficiency of DFS.</p>
                
                <p><strong>Advantages:</strong> Complete, optimal, memory efficient. Best uninformed search for large spaces.</p>
                
                <h4>2.2.5 Uniform-Cost Search</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;" colspan="2">Uniform-Cost Search</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Strategy</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Expand the node with lowest path cost</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Implementation</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Priority queue ordered by g(n)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Completeness</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Yes</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Optimality</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Yes</td>
                    </tr>
                </table>
                
                <p><strong>Note:</strong> Uniform-cost search is a generalization of BFS for varying step costs. BFS works when all steps cost the same.</p>
            `,
            keyPoints: [
                "Uninformed search has no additional knowledge about goal",
                "BFS uses queue, is complete and optimal, but memory intensive",
                "DFS uses stack, is memory efficient but incomplete and not optimal",
                "IDDFS combines BFS completeness with DFS memory efficiency",
                "Uniform-cost search handles varying step costs",
                "BFS optimal only when all step costs are equal"
            ]
        },

        {
            title: "2.3 Informed (Heuristic) Search",
            content: `
                <h4>What is Informed Search?</h4>
                <p>Informed search uses domain-specific knowledge (called <strong>heuristics</strong>) to guide the search toward the goal more efficiently.</p>
                
                <h4>2.3.1 Heuristic Functions</h4>
                
                <p>A <strong>heuristic function</strong> h(n) estimates the cost from node n to the goal.</p>
                
                <p><strong>Analogy:</strong> When driving to an unfamiliar city, you might head toward the mountains because you know the city is near them. That's a heuristic!</p>
                
                <h4>Properties of Good Heuristics:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Property</th>
                        <th style="padding:10px; border:1px solid #ddd;">Definition</th>
                        <th style="padding:10px; border:1px solid #ddd;">Importance</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Admissible</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Never overestimates true cost (h(n) ≤ h*(n))</td>
                        <td style="padding:8px; border:1px solid #ddd;">Needed for optimality in A*</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Consistent (Monotonic)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">h(n) ≤ c(n,a,n') + h(n')</td>
                        <td style="padding:8px; border:1px solid #ddd;">Ensures efficiency in graph search</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Informed</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">More accurate estimates</td>
                        <td style="padding:8px; border:1px solid #ddd;">Faster search</td>
                    </tr>
                </table>
                
                <h4>Example Heuristics for 8-Puzzle:</h4>
                
                <ul>
                    <li><strong>h1 = Number of misplaced tiles:</strong> Count tiles not in goal position. Simple but less informed.</li>
                    <li><strong>h2 = Manhattan distance:</strong> Sum of distances each tile needs to move (ignoring obstacles). More informed than h1.</li>
                </ul>
                
                <p><strong>Which is better?</strong> h2 dominates h1 (h2 ≥ h1) and is more informed, leading to faster search.</p>
                
                <h4>2.3.2 Greedy Best-First Search</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;" colspan="2">Greedy Best-First Search</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Strategy</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Expand node with lowest heuristic h(n)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Implementation</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Priority queue ordered by h(n)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Completeness</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">No (can get stuck in loops)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Optimality</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">No</td>
                    </tr>
                </table>
                
                <p><strong>How Greedy Works:</strong> Always move toward what looks closest to the goal, like always turning toward the mountains. It may take a suboptimal path if there's a shorter route that initially goes away from the goal.</p>
                
                <p><strong>Analogy:</strong> If you're in a maze and can see the goal, you might run straight toward it, only to find a wall in the way!</p>
                
                <h4>2.3.3 A* Search (Most Important!)</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;" colspan="2">A* Search</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Evaluation Function</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">f(n) = g(n) + h(n)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>g(n)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Actual cost from start to node n</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>h(n)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Heuristic estimate from n to goal</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Strategy</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Expand node with lowest f(n)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Completeness</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Yes (if branching factor finite)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Optimality</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Yes (if heuristic is admissible)</td>
                    </tr>
                </table>
                
                <p><strong>Understanding A*:</strong> A* combines the actual cost so far (g) with an estimate of remaining cost (h). It's like saying: "I've come this far, and I estimate I have this far to go."</p>
                
                <p><strong>Why A* is Optimal:</strong> When h is admissible (never overestimates), A* is guaranteed to find the optimal solution. It explores nodes in order of increasing f value.</p>
                
                <p><strong>Analogy:</strong> Planning a road trip: g(n) is distance already driven, h(n) is estimated remaining distance. A* chooses the route that minimizes total estimated travel time.</p>
                
                <h4>Comparison of Search Strategies:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Algorithm</th>
                        <th style="padding:10px; border:1px solid #ddd;">Complete?</th>
                        <th style="padding:10px; border:1px solid #ddd;">Optimal?</th>
                        <th style="padding:10px; border:1px solid #ddd;">Time</th>
                        <th style="padding:10px; border:1px solid #ddd;">Space</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">BFS</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ (uniform cost)</td>
                        <td style="padding:8px; border:1px solid #ddd;">O(b^d)</td>
                        <td style="padding:8px; border:1px solid #ddd;">O(b^d)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">DFS</td>
                        <td style="padding:8px; border:1px solid #ddd;">❌</td>
                        <td style="padding:8px; border:1px solid #ddd;">❌</td>
                        <td style="padding:8px; border:1px solid #ddd;">O(b^m)</td>
                        <td style="padding:8px; border:1px solid #ddd;">O(bm)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">IDDFS</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ (uniform cost)</td>
                        <td style="padding:8px; border:1px solid #ddd;">O(b^d)</td>
                        <td style="padding:8px; border:1px solid #ddd;">O(bd)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Greedy</td>
                        <td style="padding:8px; border:1px solid #ddd;">❌</td>
                        <td style="padding:8px; border:1px solid #ddd;">❌</td>
                        <td style="padding:8px; border:1px solid #ddd;">O(b^m)</td>
                        <td style="padding:8px; border:1px solid #ddd;">O(b^m)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">A*</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ (if h admissible)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Exponential</td>
                        <td style="padding:8px; border:1px solid #ddd;">Exponential</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Heuristics estimate distance to goal",
                "Admissible heuristic never overestimates (needed for A* optimality)",
                "Greedy search uses only h(n) - fast but not optimal",
                "A* uses f(n) = g(n) + h(n) - balances cost so far with estimated remaining",
                "A* is optimal with admissible heuristic",
                "More informed heuristic = faster search"
            ]
        },

        {
            title: "2.4 Local Search Algorithms",
            content: `
                <h4>What is Local Search?</h4>
                <p>Local search operates on complete states, not paths. It doesn't care about the path to the goal, only about finding the best state.</p>
                
                <h4>2.4.1 Hill Climbing (Greedy Local Search)</h4>
                
                <p><strong>Strategy:</strong></p>
                <ol>
                    <li>Start with a random state</li>
                    <li>Move to a neighbor with higher value (like climbing a hill)</li>
                    <li>Stop when no neighbor is better</li>
                </ol>
                
                <p><strong>Analogy:</strong> Imagine you're lost in the fog on a mountainside and want to reach the peak. You can only feel the slope around your feet. You always step uphill. You'll reach a peak, but maybe not the highest one!</p>
                
                <h4>Problems with Hill Climbing:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Problem</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Visualization</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Local Maxima</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Gets stuck at a peak that isn't the highest</td>
                        <td style="padding:8px; border:1px of a small hill, not the mountain peak</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Ridges</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Slow progress because moves in only one direction don't improve</td>
                        <td style="padding:8px; border:1px like walking along a narrow ridge</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Plateaus</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Flat area where no move improves</td>
                        <td style="padding:8px; border:1px like a flat meadow</td>
                    </tr>
                </table>
                
                <h4>Variants of Hill Climbing:</h4>
                <ul>
                    <li><strong>Simple hill climbing:</strong> Take the first better neighbor</li>
                    <li><strong>Steepest ascent:</strong> Try all neighbors, take the best</li>
                    <li><strong>Stochastic hill climbing:</strong> Choose randomly among better neighbors</li>
                    <li><strong>Random-restart hill climbing:</strong> Try many times from random starts</li>
                </ul>
                
                <h4>2.4.2 Simulated Annealing</h4>
                
                <p><strong>Strategy:</strong> Sometimes accept worse moves with decreasing probability to escape local maxima.</p>
                
                <p><strong>Analogy:</strong> Like cooling metal slowly to find a low-energy state. Initially, atoms move freely (high temperature), but as cooling progresses, they settle into optimal positions.</p>
                
                <p><strong>Temperature decreases over time:</strong> Early on, accept many bad moves (explore), later accept only good moves (exploit).</p>
                
                <h4>2.4.3 Genetic Algorithms</h4>
                
                <p><strong>Strategy:</strong> Mimic natural evolution:</p>
                <ol>
                    <li>Create a population of random states</li>
                    <li>Evaluate fitness of each state</li>
                    <li>Select the fittest to reproduce</li>
                    <li>Apply crossover (combine parts) and mutation (random changes)</li>
                    <li>Repeat for generations</li>
                </ol>
                
                <p><strong>Analogy:</strong> Like breeding dogs for specific traits - keep the best, combine them, add random variation, and repeat.</p>
            `,
            keyPoints: [
                "Local search works on complete states, not paths",
                "Hill climbing always moves uphill - fast but gets stuck in local maxima",
                "Local maxima, ridges, and plateaus are problems for hill climbing",
                "Simulated annealing accepts worse moves occasionally to escape local maxima",
                "Genetic algorithms use selection, crossover, and mutation",
                "Random restarts help find better solutions"
            ]
        },

        {
            title: "2.5 Game Playing and Adversarial Search",
            content: `
                <h4>What is Adversarial Search?</h4>
                <p>Adversarial search is used for games where an opponent tries to beat you. The search must consider the opponent's moves.</p>
                
                <h4>Game Characteristics:</h4>
                <ul>
                    <li><strong>Deterministic:</strong> No randomness</li>
                    <li><strong>Turn-based:</strong> Players alternate</li>
                    <li><strong>Perfect information:</strong> All players see everything</li>
                    <li><strong>Zero-sum:</strong> One player's win is the other's loss</li>
                </ul>
                
                <h4>2.5.1 Minimax Algorithm</h4>
                
                <p><strong>Purpose:</strong> Find the optimal move in two-player zero-sum games.</p>
                
                <p><strong>Key Idea:</strong></p>
                <ul>
                    <li><strong>MAX player:</strong> Tries to maximize score (wants to win)</li>
                    <li><strong>MIN player:</strong> Tries to minimize score (wants MAX to lose)</li>
                </ul>
                
                <h4>How Minimax Works:</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
function MINIMAX(state, player) returns value
    if TERMINAL(state) return UTILITY(state, player)
    
    if player == MAX
        value = -∞
        for each move in SUCCESSORS(state)
            value = max(value, MINIMAX(move, MIN))
    else // MIN player
        value = +∞
        for each move in SUCCESSORS(state)
            value = min(value, MINIMAX(move, MAX))
    return value
                </pre>
                
                <p><strong>Analogy:</strong> In chess, you think: "If I move here, my opponent might move there, then I could move here..." Minimax explores all these possibilities.</p>
                
                <h4>Properties of Minimax:</h4>
                <ul>
                    <li><strong>Complete:</strong> Yes for finite games</li>
                    <li><strong>Optimal:</strong> Yes against optimal opponent</li>
                    <li><strong>Time complexity:</strong> O(b^m) where b = branching factor, m = maximum depth</li>
                    <li><strong>Space complexity:</strong> O(bm)</li>
                </ul>
                
                <h4>2.5.2 Alpha-Beta Pruning</h4>
                
                <p><strong>Purpose:</strong> Optimize Minimax by pruning (cutting off) branches that cannot affect the final decision.</p>
                
                <p><strong>Key Insight:</strong> If you find a move that's good enough, you don't need to explore worse alternatives.</p>
                
                <h4>How Alpha-Beta Works:</h4>
                <ul>
                    <li><strong>α (alpha):</strong> Best value found so far for MAX (lower bound)</li>
                    <li><strong>β (beta):</strong> Best value found so far for MIN (upper bound)</li>
                    <li>If α ≥ β, prune remaining branches</li>
                </ul>
                
                <p><strong>Analogy:</strong> When shopping, if you find a shirt for $20 and another store across town might have it for $19, you might not bother checking if the bus fare is $5. The potential savings don't outweigh the cost.</p>
                
                <h4>Properties of Alpha-Beta:</h4>
                <ul>
                    <li>Same result as Minimax (optimal play unchanged)</li>
                    <li>Best case time complexity: O(b^(m/2)) - can double search depth!</li>
                    <li>Effectiveness depends on move ordering</li>
                </ul>
                
                <h4>Comparison:</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Algorithm</th>
                        <th style="padding:10px; border:1px solid #ddd;">Nodes Explored</th>
                        <th style="padding:10px; border:1px solid #ddd;">Depth Achievable</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Minimax</td>
                        <td style="padding:8px; border:1px solid #ddd;">b^m</td>
                        <td style="padding:8px; border:1px solid #ddd;">Limited</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Alpha-Beta (best)</td>
                        <td style="padding:8px; border:1px solid #ddd;">b^(m/2)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Double depth</td>
                    </tr>
                </table>
                
                <h4>Use of Heuristics in Game Trees:</h4>
                <p>In complex games like chess, we can't search to the end. Instead, we use a <strong>heuristic evaluation function</strong> to estimate the value of non-terminal states.</p>
                <p>This is where heuristics help make decisions in game trees!</p>
            `,
            keyPoints: [
                "Minimax finds optimal moves in adversarial games",
                "MAX maximizes, MIN minimizes",
                "Alpha-beta pruning cuts branches without affecting result",
                "Alpha-beta can double searchable depth",
                "Heuristics are used when full search is impossible",
                "Game trees use adversarial search techniques"
            ]
        },

        {
            title: "2.6 Constraint Satisfaction Problems (CSP)",
            content: `
                <h4>What is a CSP?</h4>
                <p>Constraint Satisfaction Problems have variables with domains and constraints that must be satisfied.</p>
                
                <h4>Components:</h4>
                <ul>
                    <li><strong>Variables:</strong> {X₁, X₂, ..., Xₙ}</li>
                    <li><strong>Domains:</strong> {D₁, D₂, ..., Dₙ} (possible values)</li>
                    <li><strong>Constraints:</strong> Relations between variables</li>
                </ul>
                
                <h4>Example: Map Coloring</h4>
                <ul>
                    <li><strong>Variables:</strong> Regions on a map</li>
                    <li><strong>Domain:</strong> {Red, Green, Blue}</li>
                    <li><strong>Constraint:</strong> Adjacent regions different colors</li>
                </ul>
                
                <h4>CSP Algorithms:</h4>
                <ul>
                    <li><strong>Backtracking search:</strong> Depth-first with constraint checking</li>
                    <li><strong>Forward checking:</strong> After assignment, prune neighbors</li>
                    <li><strong>Constraint propagation:</strong> AC-3 algorithm</li>
                </ul>
            `,
            keyPoints: [
                "CSPs have variables, domains, and constraints",
                "Map coloring is a classic CSP example",
                "Backtracking is the basic CSP algorithm",
                "Forward checking improves efficiency"
            ]
        },

        {
            title: "2.7 Analyzing Search Techniques (Blueprint Focus)",
            content: `
                <h4>Blueprint Focus: Understand, Apply, Analyze</h4>
                <p>According to the blueprint, you need to:</p>
                <ul>
                    <li><strong>Understand</strong> the use of heuristics in search problems and games</li>
                    <li><strong>Apply</strong> search techniques to solve problems</li>
                    <li><strong>Analyze</strong> strengths and weaknesses of search techniques</li>
                </ul>
                
                <h4>Understanding Heuristics in Search:</h4>
                <p>Heuristics are problem-specific knowledge that guide search toward the goal. They are used in:</p>
                <ul>
                    <li><strong>Informed search (A*):</strong> h(n) estimates remaining cost</li>
                    <li><strong>Game playing:</strong> Evaluation functions estimate board value</li>
                    <li><strong>Local search:</strong> Objective functions guide hill climbing</li>
                </ul>
                
                <h4>Applying Search Techniques:</h4>
                <p>Different problems need different search techniques:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Problem Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Best Technique</th>
                        <th style="padding:10px; border:1px solid #ddd;">Why</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Shortest path (uniform cost)</td>
                        <td style="padding:8px; border:1px solid #ddd;">BFS or A*</td>
                        <td style="padding:8px; border:1px solid #ddd;">Need optimal solution</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Large state space, memory limited</td>
                        <td style="padding:8px; border:1px solid #ddd;">IDDFS</td>
                        <td style="padding:8px; border:1px solid #ddd;">Memory efficient, complete</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Optimization problems</td>
                        <td style="padding:8px; border:1px solid #ddd;">Hill climbing, genetic</td>
                        <td style="padding:8px; border:1px solid #ddd;">Don't need path, just best state</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Two-player games</td>
                        <td style="padding:8px; border:1px solid #ddd;">Minimax with alpha-beta</td>
                        <td style="padding:8px; border:1px solid #ddd;">Need to consider opponent</td>
                    </tr>
                </table>
                
                <h4>Analyzing Strengths and Weaknesses:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Technique</th>
                        <th style="padding:10px; border:1px solid #ddd;">Strengths</th>
                        <th style="padding:10px; border:1px solid #ddd;">Weaknesses</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>BFS</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Complete, optimal for uniform cost</td>
                        <td style="padding:8px; border:1px solid #ddd;">Exponential memory</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>DFS</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Memory efficient</td>
                        <td style="padding:8px; border:1px solid #ddd;">Not complete, not optimal</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>IDDFS</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Complete, optimal, memory efficient</td>
                        <td style="padding:8px; border:1px solid #ddd;">Repeats work</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Greedy</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Fast, uses heuristics</td>
                        <td style="padding:8px; border:1px solid #ddd;">Not optimal, can get stuck</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>A*</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Optimal with admissible heuristic</td>
                        <td style="padding:8px; border:1px solid #ddd;">Memory intensive</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Hill climbing</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Simple, memory efficient</td>
                        <td style="padding:8px; border:1px solid #ddd;">Local maxima</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Minimax</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Optimal for games</td>
                        <td style="padding:8px; border:1px solid #ddd;">Exponential time</td>
                    </tr>
                </table>
                
                <h4>Key Insight for Exam:</h4>
                <p>The <strong>Greedy method</strong> employs the strategy of <strong>making locally optimal choices at each step</strong> in the hope of finding a global optimum. This is how greedy search, hill climbing, and many heuristic algorithms work.</p>
                
                <p>Heuristic search algorithms (like A*) are used in <strong>game trees to make decisions</strong> about win/lose outcomes by evaluating game states.</p>
            `,
            keyPoints: [
                "Choose search technique based on problem requirements",
                "Greedy methods make locally optimal choices at each step",
                "Heuristic search is used in game trees for decision making",
                "A* optimal with admissible heuristic, but memory intensive",
                "IDDFS best uninformed search for large spaces",
                "Hill climbing good for optimization, but watch for local maxima"
            ]
        }
    ],

    summary: `
        <h3>Chapter 2 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Uninformed search:</strong> BFS (queue, complete, optimal, memory heavy), DFS (stack, incomplete, memory light), IDDFS (best of both)</li>
            <li><strong>Informed search:</strong> Uses heuristics h(n) to guide search</li>
            <li><strong>Greedy search:</strong> Uses only h(n) - fast but not optimal</li>
            <li><strong>A* search:</strong> f(n) = g(n) + h(n) - optimal if h is admissible</li>
            <li><strong>Local search:</strong> Hill climbing - simple but gets stuck in local maxima</li>
            <li><strong>Game playing:</strong> Minimax with alpha-beta pruning</li>
            <li><strong>Heuristics help in:</strong> Search problems and game trees</li>
            <li><strong>Greedy method:</strong> Makes locally optimal choices at each step</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "Compare BFS and DFS in terms of completeness, optimality, and memory usage.",
            answer: "BFS: complete, optimal for uniform cost, O(b^d) memory. DFS: not complete, not optimal, O(bm) memory. BFS uses queue, DFS uses stack."
        },
        {
            question: "What is a heuristic function? Define admissible heuristic.",
            answer: "A heuristic h(n) estimates cost from node n to goal. Admissible means h(n) never overestimates true cost (h(n) ≤ h*(n))."
        },
        {
            question: "Explain how A* search works and why it is optimal.",
            answer: "A* uses f(n) = g(n) + h(n). g(n) is actual cost from start, h(n) is heuristic. It expands lowest f first. Optimal when h is admissible because it never overlooks better paths."
        },
        {
            question: "What strategy does the Greedy method employ to find an optimal solution?",
            answer: "The Greedy method makes locally optimal choices at each step in the hope of finding a global optimum."
        },
        {
            question: "Explain the Minimax algorithm and how alpha-beta pruning improves it.",
            answer: "Minimax finds optimal moves in two-player games by exploring all possibilities. Alpha-beta pruning cuts branches that cannot affect the outcome, using α (best for MAX) and β (best for MIN)."
        },
        {
            question: "What are the main problems with hill climbing? How can they be addressed?",
            answer: "Problems: local maxima, ridges, plateaus. Solutions: random restarts, simulated annealing, stochastic hill climbing."
        },
        {
            question: "When would you use IDDFS instead of BFS?",
            answer: "IDDFS is preferred when memory is limited but you need completeness and optimality. It has O(bd) memory vs BFS's O(b^d)."
        }
    ],

    quickTips: [
        "BFS uses Queue, DFS uses Stack - remember this!",
        "A* is optimal ONLY with admissible heuristic",
        "IDDFS = BFS completeness + DFS memory",
        "Local maxima are the main enemy of hill climbing",
        "Alpha-beta pruning doesn't change the result, just speeds up",
        "Greedy = local optimal choices",
        "Heuristics = problem-specific knowledge"
    ],

    commonMistakes: [
        "❌ Thinking BFS is always optimal - only for uniform step costs",
        "❌ Using inadmissible heuristic in A* - loses optimality guarantee",
        "❌ Confusing greedy search with A* - greedy uses only h(n), A* uses g(n)+h(n)",
        "❌ Believing DFS is complete - it can get stuck in infinite paths",
        "❌ Thinking alpha-beta changes the result - it only prunes branches",
        "❌ Assuming hill climbing always finds global optimum - gets stuck in local maxima"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 2:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>2 questions</strong> distributed as:</p>
        <ul>
            <li><strong>1 Understand question:</strong> Understanding heuristics in search and games</li>
            <li><strong>1 Apply/Analyze question:</strong> Applying search techniques and analyzing their strengths/weaknesses</li>
        </ul>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>Understanding heuristics:</strong> What they are, how they work, admissible property</li>
            <li><strong>Greedy method:</strong> Makes locally optimal choices at each step</li>
            <li><strong>Search algorithms:</strong> BFS, DFS, IDDFS, A*, Hill climbing</li>
            <li><strong>Game playing:</strong> Minimax, alpha-beta pruning</li>
            <li><strong>Strengths and weaknesses:</strong> Compare algorithms (see comparison table)</li>
        </ol>
        
        <h4>Practice Scenarios:</h4>
        <ul>
            <li>Given a problem, which search algorithm would you choose and why?</li>
            <li>Compare two algorithms for a specific scenario</li>
            <li>Explain how heuristics improve search</li>
            <li>Trace A* on a simple graph with given heuristics</li>
        </ul>
        
        <h4>Key Definition to Remember:</h4>
        <p><strong>Greedy method:</strong> An algorithmic strategy that makes the locally optimal choice at each stage with the hope of finding a global optimum.</p>
    `
};