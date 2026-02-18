// ===============================
// DESIGN AND ANALYSIS OF ALGORITHMS
// ===============================
window.algorithmQuestions = [
    {
        "question": "Which of the following is NOT a technique used for algorithm analysis?",
        "options": [
            "Asymptotic analysis",
            "Experimental analysis",
            "Dynamic analysis",
            "Graph analysis"
        ],
        "answer": 2,
        "explanation": "Dynamic analysis is not a specific technique used for algorithm analysis. Instead, it refers to the process of analyzing algorithms during runtime.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "What is the purpose of asymptotic analysis in algorithm analysis?",
        "options": [
            "To measure the actual running time of an algorithm",
            "To determine the best-case scenario for an algorithm",
            "To analyze the behavior of an algorithm as the input size increases",
            "To evaluate the correctness of an algorithm"
        ],
        "answer": 2,
        "explanation": "Asymptotic analysis is used to analyze the behavior of an algorithm as the input size approaches infinity. It focuses on understanding how the algorithm's performance scales with larger inputs.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which notation is commonly used to represent the worst-case time complexity of an algorithm?",
        "options": [
            "Big O notation (O)",
            "Theta notation (Θ)",
            "Omega notation (Ω)",
            "Small o notation (o)"
        ],
        "answer": 0,
        "explanation": "Big O notation is commonly used to represent the worst-case time complexity of an algorithm. It provides an upper bound on the running time of the algorithm.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which of the following time complexities represents the best-case scenario for an algorithm?",
        "options": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n^2)"
        ],
        "answer": 0,
        "explanation": "O(1) represents constant time complexity, which indicates that the algorithm's running time remains constant regardless of the input size. It represents the best-case scenario.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which of the following time complexities represents the worst-case scenario for an algorithm?",
        "options": [
            "O(log n)",
            "O(n)",
            "O(n log n)",
            "O(n^2)"
        ],
        "answer": 3,
        "explanation": "O(n^2) represents quadratic time complexity, where the running time of the algorithm grows quadratically with the input size. It represents the worst-case scenario.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which of the following time complexities represents an algorithm with logarithmic growth?",
        "options": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n^2)"
        ],
        "answer": 1,
        "explanation": "O(log n) represents logarithmic time complexity, where the running time of the algorithm grows logarithmically with the input size. It indicates efficient algorithms that divide the input space in half at each step.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which of the following time complexities represents an algorithm with linear growth?",
        "options": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n^2)"
        ],
        "answer": 2,
        "explanation": "O(n) represents linear time complexity, where the running time of the algorithm grows linearly with the input size. It indicates algorithms that iterate through the input once.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which of the following time complexities represents an algorithm with superlinear growth?",
        "options": [
            "O(log n)",
            "O(n)",
            "O(n log n)",
            "O(n^2)"
        ],
        "answer": 2,
        "explanation": "O(n log n) represents superlinear time complexity, where the running time of the algorithm grows faster than linear but slower than quadratic. It is commonly seen in efficient sorting algorithms like Merge Sort and Quick Sort.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "What is the purpose of experimental analysis in algorithm analysis?",
        "options": [
            "To measure the actual running time of an algorithm",
            "To determine the best-case scenario for an algorithm",
            "To analyze the behavior of an algorithm as the input size increases",
            "To evaluate the correctness of an algorithm"
        ],
        "answer": 0,
        "explanation": "Experimental analysis involves running an algorithm on various inputs and measuring the actual running time. It provides empirical data to compare and validate the theoretical analysis.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which of the following is NOT a consideration in algorithm analysis?",
        "options": [
            "Space complexity",
            "Auxiliary space",
            "Input-output complexity",
            "Data type complexity"
        ],
        "answer": 3,
        "explanation": "Data type complexity is not a consideration in algorithm analysis. The key considerations include time complexity, space complexity, and input-output complexity.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "What is the purpose of algorithm analysis in computer science?",
        "options": [
            "To design algorithms for specific problems",
            "To implement algorithms using programming languages",
            "To analyze the efficiency and performance of algorithms",
            "To test algorithms for correctness"
        ],
        "answer": 2,
        "explanation": "Algorithm analysis involves evaluating the efficiency and performance characteristics of algorithms, such as their time complexity and space complexity.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which of the following is NOT a commonly used technique for algorithm analysis?",
        "options": [
            "Asymptotic analysis",
            "Empirical analysis",
            "Dynamic analysis",
            "Probabilistic analysis"
        ],
        "answer": 2,
        "explanation": "Dynamic analysis typically refers to analyzing the behavior of programs during runtime and is not specifically used for algorithm analysis.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "What is the purpose of asymptotic analysis in algorithm analysis?",
        "options": [
            "To determine the actual running time of an algorithm",
            "To compare the performance of different algorithms",
            "To evaluate the correctness of an algorithm",
            "To analyze the behavior of an algorithm as the input size increases"
        ],
        "answer": 3,
        "explanation": "Asymptotic analysis focuses on understanding how the performance of an algorithm scales with larger input sizes and provides insights into its efficiency.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which notation is commonly used to express the worst-case time complexity of an algorithm?",
        "options": [
            "Big O notation (O)",
            "Theta notation (Θ)",
            "Omega notation (Ω)",
            "Small o notation (o)"
        ],
        "answer": 0,
        "explanation": "Big O notation is commonly used to represent the upper bound of an algorithm's time complexity, specifically the worst-case scenario.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "What does a time complexity of O(1) indicate?",
        "options": [
            "The algorithm runs in constant time.",
            "The algorithm runs in logarithmic time.",
            "The algorithm runs in linear time.",
            "The algorithm runs in quadratic time."
        ],
        "answer": 0,
        "explanation": "O(1) represents constant time complexity, indicating that the running time of the algorithm remains constant regardless of the input size.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which of the following time complexities indicates the most efficient algorithm?",
        "options": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n^2)"
        ],
        "answer": 0,
        "explanation": "O(1) represents constant time complexity, which indicates that the algorithm's running time remains constant regardless of the input size. It is the most efficient time complexity.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "What does a time complexity of O(n^2) signify?",
        "options": [
            "The algorithm runs in linear time.",
            "The algorithm runs in logarithmic time.",
            "The algorithm runs in quadratic time.",
            "The algorithm runs in exponential time."
        ],
        "answer": 2,
        "explanation": "O(n^2) represents quadratic time complexity, indicating that the running time of the algorithm grows quadratically with the input size.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which of the following time complexities indicates an algorithm with logarithmic growth?",
        "options": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n^2)"
        ],
        "answer": 1,
        "explanation": "O(log n) represents logarithmic time complexity, indicating that the running time of the algorithm grows logarithmically with the input size.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "What is the purpose of empirical analysis in algorithm analysis?",
        "options": [
            "To determine the best-case time complexity of an algorithm.",
            "To compare algorithms based on their theoretical analysis.",
            "To evaluate the correctness of an algorithm.",
            "To measure the actual performance of an algorithm on real data."
        ],
        "answer": 3,
        "explanation": "Empirical analysis involves running an algorithm on real data sets and measuring its actual performance, providing practical insights into its efficiency.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which of the following is NOT a factor considered in algorithm analysis?",
        "options": [
            "Time complexity",
            "Space complexity",
            "Input size",
            "Hardware configuration"
        ],
        "answer": 3,
        "explanation": "Hardware configuration is not typically considered in algorithm analysis. The key factors include time complexity, space complexity, and input size.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which of the following algorithm design techniques is used to break a problem into smaller subproblems?",
        "options": [
            "Divide and conquer",
            "Greedy algorithm",
            "Dynamic programming",
            "Backtracking"
        ],
        "answer": 0,
        "explanation": "The divide and conquer technique involves breaking a problem into smaller subproblems, solving them independently, and combining their solutions to solve the original problem.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which algorithm design technique guarantees finding the optimal solution at each step but may not lead to the overall optimal solution?",
        "options": [
            "Greedy algorithm",
            "Divide and conquer",
            "Dynamic programming",
            "Backtracking"
        ],
        "answer": 0,
        "explanation": "Greedy algorithms make locally optimal choices at each step without considering the overall solution. While they may not guarantee the globally optimal solution, they are often efficient and provide good approximations.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which algorithm design technique is used to solve problems by exploring all possible solutions?",
        "options": [
            "Divide and conquer",
            "Greedy algorithm",
            "Dynamic programming",
            "Backtracking"
        ],
        "answer": 3,
        "explanation": "Backtracking involves exploring all possible solutions by incrementally building a solution and backtracking when a dead end is reached, allowing for exhaustive search.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which algorithm design technique is suitable for problems with overlapping subproblems and optimal substructure?",
        "options": [
            "Divide and conquer",
            "Greedy algorithm",
            "Dynamic programming",
            "Backtracking"
        ],
        "answer": 2,
        "explanation": "Dynamic programming is used when a problem can be broken down into overlapping subproblems that can be solved independently, and the optimal solution can be constructed from the solutions to these subproblems.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which algorithm design technique is based on making a sequence of choices that result in an optimal solution?",
        "options": [
            "Divide and conquer",
            "Greedy algorithm",
            "Dynamic programming",
            "Backtracking"
        ],
        "answer": 1,
        "explanation": "Greedy algorithms make locally optimal choices at each step, aiming to find an overall optimal solution by selecting the best choice at each stage.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which algorithm design technique is suitable for solving problems with optimal substructure but does not involve overlapping subproblems?",
        "options": [
            "Divide and conquer",
            "Greedy algorithm",
            "Dynamic programming",
            "Backtracking"
        ],
        "answer": 0,
        "explanation": "Divide and conquer is used when a problem can be divided into smaller subproblems, but these subproblems do not overlap or share computations.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which algorithm design technique is useful for solving problems that can be represented as a series of choices?",
        "options": [
            "Divide and conquer",
            "Greedy algorithm",
            "Dynamic programming",
            "Backtracking"
        ],
        "answer": 3,
        "explanation": "Backtracking is particularly useful for problems where a series of choices need to be made, exploring each possible choice and undoing it if it leads to a dead end.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which algorithm design technique is commonly used for solving optimization problems?",
        "options": [
            "Divide and conquer",
            "Greedy algorithm",
            "Dynamic programming",
            "Backtracking"
        ],
        "answer": 2,
        "explanation": "Dynamic programming is often used for solving optimization problems, where the goal is to find the best solution among a set of possible solutions.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which algorithm design technique is most suitable for solving problems with exponential time complexity?",
        "options": [
            "Divide and conquer",
            "Greedy algorithm",
            "Dynamic programming",
            "Backtracking"
        ],
        "answer": 3,
        "explanation": "Backtracking allows for exhaustive search and is often used when solving problems with exponential time complexity, where trying every possible solution is necessary.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which algorithm design technique can be used to solve problems by combining solutions to subproblems?",
        "options": [
            "Divide and conquer",
            "Greedy algorithm",
            "Dynamic programming",
            "Backtracking"
        ],
        "answer": 0,
        "explanation": "Divide and conquer involves solving subproblems independently and then combining their solutions to solve the original problem.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which algorithm design technique is used to find the shortest path in a graph?",
        "options": [
            "Divide and conquer",
            "Greedy algorithm",
            "Dynamic programming",
            "Backtracking"
        ],
        "answer": 1,
        "explanation": "The greedy algorithm, such as Dijkstra's algorithm, is commonly used to find the shortest path in a graph by making locally optimal choices at each step.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which algorithm design technique is commonly used for sorting algorithms?",
        "options": [
            "Divide and conquer",
            "Greedy algorithm",
            "Dynamic programming",
            "Backtracking"
        ],
        "answer": 0,
        "explanation": "Many sorting algorithms, such as merge sort and quicksort, use the divide and conquer technique to recursively divide the problem into smaller subproblems and combine their solutions.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which algorithm design technique is suitable for problems that can be solved by a sequence of decisions?",
        "options": [
            "Divide and conquer",
            "Greedy algorithm",
            "Dynamic programming",
            "Backtracking"
        ],
        "answer": 3,
        "explanation": "Backtracking is often used for problems that require a sequence of decisions to be made, exploring each possible choice and undoing decisions if they lead to dead ends.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which algorithm design technique is used for solving problems where the solution can be built incrementally?",
        "options": [
            "Divide and conquer",
            "Greedy algorithm",
            "Dynamic programming",
            "Backtracking"
        ],
        "answer": 3,
        "explanation": "Backtracking allows for incrementally building a solution by exploring different choices and backtracking when a dead end is reached.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which algorithm design technique is suitable for problems that exhibit overlapping subproblems and optimal substructure?",
        "options": [
            "Divide and conquer",
            "Greedy algorithm",
            "Dynamic programming",
            "Backtracking"
        ],
        "answer": 2,
        "explanation": "Dynamic programming is used when a problem can be broken down into overlapping subproblems that can be solved independently, and the optimal solution can be constructed from the solutions to these subproblems.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which algorithm design technique is used for finding the maximum subarray sum in an array?",
        "options": [
            "Divide and conquer",
            "Greedy algorithm",
            "Dynamic programming",
            "Backtracking"
        ],
        "answer": 1,
        "explanation": "The Kadane's algorithm, which uses a greedy approach, is commonly used to find the maximum subarray sum in an array.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which algorithm design technique is used for solving the traveling salesman problem?",
        "options": [
            "Divide and conquer",
            "Greedy algorithm",
            "Dynamic programming",
            "Backtracking"
        ],
        "answer": 3,
        "explanation": "The traveling salesman problem is often solved using the backtracking technique, exploring all possible permutations of the cities and selecting the optimal route.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which algorithm design technique is used for solving problems that can be solved by making the best local choice at each step?",
        "options": [
            "Divide and conquer",
            "Greedy algorithm",
            "Dynamic programming",
            "Backtracking"
        ],
        "answer": 1,
        "explanation": "Greedy algorithms make locally optimal choices at each step, aiming to find an overall optimal solution.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which algorithm design technique is used for finding the longest common subsequence between two sequences?",
        "options": [
            "Divide and conquer",
            "Greedy algorithm",
            "Dynamic programming",
            "Backtracking"
        ],
        "answer": 2,
        "explanation": "Dynamic programming is commonly used to find the longest common subsequence between two sequences by solving the problem recursively and memoizing the results.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which algorithm design technique is used for solving problems that can be divided into smaller independent subproblems?",
        "options": [
            "Divide and conquer",
            "Greedy algorithm",
            "Dynamic programming",
            "Backtracking"
        ],
        "answer": 0,
        "explanation": "Divide and conquer is used when a problem can be divided into smaller subproblems that can be solved independently, and their solutions can be combined to solve the original problem.",
        "course": "Design and Analysis of Algorithms"
    },
    {
        "question": "Which term refers to the amount of resources, such as time and memory, required by an algorithm to solve a problem?",
        "options": [
            "Efficiency",
            "Complexity",
            "Optimality",
            "Completeness"
        ],
        "answer": 1,
        "explanation": "Complexity refers to the measure of resources required by an algorithm, typically expressed in terms of time and space complexity.",
        "course": "Design and Analysis of Algorithms"
    }
];