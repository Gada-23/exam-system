// ===============================
// Computer Programming - Chapter 1.5
// Algorithms
// ===============================

window.currentSubsectionData = {
    title: "1.2.3 Algorithms",
    content: `
        <h2>1.2.3 Algorithms</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand what an algorithm is and why it is fundamental to computer science</li>
                <li>Learn the characteristics of a good algorithm</li>
                <li>Understand different ways to represent algorithms</li>
                <li>Study algorithm efficiency and complexity</li>
                <li>Learn about common algorithm categories</li>
                <li>Study multiple algorithm examples with increasing complexity</li>
                <li>Understand the relationship between algorithms, pseudocode, flowcharts, and code</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: WHAT IS AN ALGORITHM? ==================== -->
        <h3>1.2.3.1 What is an Algorithm?</h3>
        
        <p>An <strong>algorithm</strong> is a step-by-step procedure for solving a problem or accomplishing a task. It is a finite set of well-defined instructions that, when followed, will produce the desired output.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> An algorithm is a sequence of unambiguous instructions for solving a problem, which must terminate after a finite number of steps.</p>
        </div>
        
        <h4>Etymology:</h4>
        <p>The word <strong>"algorithm"</strong> comes from the name of the Persian mathematician <strong>Muhammad ibn Musa al-Khwarizmi</strong>, who lived around 780-850 CE. His work on algebra and arithmetic introduced systematic procedures for mathematical calculations to the Western world.</p>
        
        <h4>Real-World Examples of Algorithms:</h4>
        <ul>
            <li><strong>Recipe:</strong> Step-by-step instructions to cook a dish</li>
            <li><strong>Directions:</strong> Step-by-step instructions to reach a destination</li>
            <li><strong>Assembly Instructions:</strong> How to build furniture</li>
            <li><strong>Laundry Instructions:</strong> Sort clothes, set temperature, add detergent, start machine</li>
            <li><strong>Emergency Procedures:</strong> What to do in case of fire</li>
        </ul>
        
        <h4>Everyday Algorithm Example: Making Tea</h4>
        <pre>
Algorithm: Make a cup of tea

Step 1: Boil water in a kettle
Step 2: Place a tea bag in a cup
Step 3: Pour boiling water into the cup
Step 4: Let it steep for 3-5 minutes
Step 5: Remove the tea bag
Step 6: Add sugar or milk if desired
Step 7: Stir and enjoy</pre>

        <!-- ==================== SECTION 2: CHARACTERISTICS OF A GOOD ALGORITHM ==================== -->
        <h3>1.2.3.2 Characteristics of a Good Algorithm</h3>
        
        <p>A good algorithm must have the following characteristics:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Characteristic</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>1. Finiteness</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Algorithm must terminate after a finite number of steps</td>
                <td style="padding: 10px; border: 1px solid #ddd;">A loop that never ends is not a valid algorithm</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>2. Definiteness</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Each step must be clear and unambiguous</td>
                <td style="padding: 10px; border: 1px solid #ddd;">"Add a pinch of salt" is ambiguous - how much is a pinch?</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>3. Input</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Zero or more inputs should be specified</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Algorithm to add two numbers needs two inputs</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>4. Output</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">At least one output should be produced</td>
                <td style="padding: 10px; border: 1px solid #ddd;">The result of the calculation</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>5. Effectiveness</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Each step must be basic enough to be done exactly</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Steps should be feasible with available resources</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>6. Generality</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Algorithm should work for all valid inputs</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Sorting algorithm should sort any list, not just specific one</td>
            </tr>
        </table>
        
        <div class="warning-box" style="background: #ffe8e8; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #f5576c;">
            <p><strong>⚠️ Important:</strong> An algorithm that never terminates (infinite loop) is not a valid algorithm. Every algorithm must guarantee termination for all valid inputs.</p>
        </div>

        <!-- ==================== SECTION 3: WAYS TO REPRESENT ALGORITHMS ==================== -->
        <h3>1.2.3.3 Ways to Represent Algorithms</h3>
        
        <p>Algorithms can be represented in several ways:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Representation</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Advantages</th>
                <th style="padding: 10px;">Disadvantages</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Natural Language</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Written in plain English (or other language)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Easy to understand, no special knowledge needed</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Can be verbose, ambiguous, not structured</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Flowchart</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Graphical representation using symbols</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Visual, shows flow clearly</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Time-consuming, messy for large algorithms</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Pseudocode</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Informal code-like description</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Structured, easy to convert to code</td>
                <td style="padding: 10px; border: 1px solid #ddd;">No standard, may need explanation</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Programming Language</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Actual code in a specific language</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Executable, precise</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Language-specific, syntax details obscure logic</td>
            </tr>
        </table>
        
        <h4>Example: Find Maximum of Three Numbers (All Representations)</h4>
        
        <p><strong>Natural Language:</strong></p>
        <pre>
1. Start the program
2. Get three numbers from the user, call them a, b, and c
3. Assume a is the largest and store it in a variable called max
4. Compare b with max: if b is greater than max, then set max to b
5. Compare c with max: if c is greater than max, then set max to c
6. Display the value of max as the largest number
7. Stop</pre>
        
        <p><strong>Flowchart (text representation):</strong></p>
        <pre>
    [START]
       ↓
    [Input a,b,c]
       ↓
    [max = a]
       ↓
       ⬦─────────⬦
      ║  b > max? ║
      ║           ║
      ║   Yes     ║ No
      ║           ║
      ║    ↓      ║
      ║ max = b   ║
      ║    ↓      ║
      ╚═══════════╝
           ↓
       ⬦─────────⬦
      ║  c > max? ║
      ║           ║
      ║   Yes     ║ No
      ║           ║
      ║    ↓      ║
      ║ max = c   ║
      ║    ↓      ║
      ╚═══════════╝
           ↓
    [Display max]
           ↓
         [END]</pre>
        
        <p><strong>Pseudocode:</strong></p>
        <pre>
BEGIN
    INPUT a, b, c
    SET max = a
    IF b > max THEN
        max = b
    END IF
    IF c > max THEN
        max = c
    END IF
    OUTPUT max
END</pre>
        
        <p><strong>C++ Code:</strong></p>
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int a, b, c, max;
    
    cout &lt;&lt; "Enter three numbers: ";
    cin >> a >> b >> c;
    
    max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    
    cout &lt;&lt; "Largest number is: " &lt;&lt; max &lt;&lt; endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 4: ALGORITHM EFFICIENCY AND COMPLEXITY ==================== -->
        <h3>1.2.3.4 Algorithm Efficiency and Complexity</h3>
        
        <p>When solving a problem, there may be multiple algorithms. We need to choose the most efficient one. Algorithm efficiency is measured in terms of:</p>
        
        <h4>1. Time Complexity</h4>
        <p>How much time the algorithm takes to run as the input size grows.</p>
        
        <h4>2. Space Complexity</h4>
        <p>How much memory the algorithm uses as the input size grows.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Big O Notation:</strong> A mathematical notation that describes the limiting behavior of a function. It is used to classify algorithms by how they respond to changes in input size.</p>
        </div>
        
        <h4>Common Time Complexities:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Notation</th>
                <th style="padding: 10px;">Name</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>O(1)</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Constant Time</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Algorithm takes the same time regardless of input size</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Accessing array element by index</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>O(log n)</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Logarithmic Time</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Time grows slowly as input increases</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Binary search</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>O(n)</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Linear Time</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Time grows proportionally to input size</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Linear search, finding maximum</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>O(n log n)</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Linearithmic Time</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Time grows faster than linear but slower than quadratic</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Merge sort, quicksort (average)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>O(n²)</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Quadratic Time</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Time grows with the square of input size</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Bubble sort, nested loops</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>O(2ⁿ)</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Exponential Time</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Time doubles with each addition to input</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Recursive Fibonacci (naive)</td>
            </tr>
        </table>
        
        <h4>Visualizing Complexity Growth:</h4>
        <pre>
Time
 ↑
 │                                    O(2ⁿ)
 │                                 /
 │                            O(n²)
 │                          /
 │                    O(n log n)
 │                  /
 │             O(n)
 │           /
 │      O(log n)
 │     /
 │ O(1)
 └──────────────────────────→ Input Size (n)</pre>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Important:</strong> For large inputs, algorithm choice matters enormously. An O(n²) algorithm on 1 million items takes about 1 trillion operations, while an O(n log n) algorithm takes only about 20 million operations!</p>
        </div>

        <!-- ==================== SECTION 5: CATEGORIES OF ALGORITHMS ==================== -->
        <h3>1.2.3.5 Categories of Algorithms</h3>
        
        <p>Algorithms can be categorized by their approach or the type of problem they solve:</p>
        
        <h4>1. Sorting Algorithms</h4>
        <p>Arrange data in a specific order (ascending, descending).</p>
        <ul>
            <li>Bubble Sort</li>
            <li>Selection Sort</li>
            <li>Insertion Sort</li>
            <li>Merge Sort</li>
            <li>Quick Sort</li>
            <li>Heap Sort</li>
        </ul>
        
        <h4>2. Searching Algorithms</h4>
        <p>Find a specific element in a data structure.</p>
        <ul>
            <li>Linear Search</li>
            <li>Binary Search</li>
            <li>Depth-First Search (DFS)</li>
            <li>Breadth-First Search (BFS)</li>
        </ul>
        
        <h4>3. Graph Algorithms</h4>
        <p>Work on graph data structures.</p>
        <ul>
            <li>Dijkstra's Algorithm (shortest path)</li>
            <li>Prim's Algorithm (minimum spanning tree)</li>
            <li>Kruskal's Algorithm</li>
            <li>Topological Sort</li>
        </ul>
        
        <h4>4. Dynamic Programming</h4>
        <p>Solve problems by breaking them into overlapping subproblems.</p>
        <ul>
            <li>Fibonacci Sequence</li>
            <li>Knapsack Problem</li>
            <li>Longest Common Subsequence</li>
        </ul>
        
        <h4>5. Divide and Conquer</h4>
        <p>Break problem into smaller subproblems, solve them, combine results.</p>
        <ul>
            <li>Merge Sort</li>
            <li>Quick Sort</li>
            <li>Binary Search</li>
        </ul>
        
        <h4>6. Greedy Algorithms</h4>
        <p>Make locally optimal choices at each step.</p>
        <ul>
            <li>Huffman Coding</li>
            <li>Dijkstra's Algorithm</li>
            <li>Fractional Knapsack</li>
        </ul>
        
        <h4>7. Backtracking</h4>
        <p>Try all possibilities and backtrack when a dead end is reached.</p>
        <ul>
            <li>N-Queens Problem</li>
            <li>Sudoku Solver</li>
            <li>Maze Solving</li>
        </ul>

        <!-- ==================== SECTION 6: EXAMPLE ALGORITHMS ==================== -->
        <h3>1.2.3.6 Example Algorithms</h3>
        
        <h4>Example 1: Linear Search</h4>
        <p>Find an element in an array by checking each element sequentially.</p>
        
        <p><strong>Algorithm:</strong></p>
        <pre>
Algorithm: Linear Search
Input: An array A of n elements and a target value T
Output: The index of T in A, or -1 if not found

Step 1: Start
Step 2: Set i = 0
Step 3: If i >= n, go to Step 8 (element not found)
Step 4: If A[i] == T, go to Step 7 (element found)
Step 5: i = i + 1
Step 6: Go to Step 3
Step 7: Return i (element found at index i)
Step 8: Return -1 (element not found)
Step 9: Stop</pre>
        
        <p><strong>Time Complexity:</strong> O(n) - in worst case, we check all n elements</p>
        <p><strong>Space Complexity:</strong> O(1) - uses constant extra space</p>
        
        <p><strong>C++ Implementation:</strong></p>
        <pre>
int linearSearch(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            return i;  // Found at index i
        }
    }
    return -1;  // Not found
}</pre>
        
        <h4>Example 2: Binary Search</h4>
        <p>Find an element in a sorted array by repeatedly dividing the search interval in half.</p>
        
        <p><strong>Algorithm:</strong></p>
        <pre>
Algorithm: Binary Search
Input: A sorted array A of n elements and a target value T
Output: The index of T in A, or -1 if not found

Step 1: Start
Step 2: Set left = 0, right = n-1
Step 3: If left > right, go to Step 9 (element not found)
Step 4: Set mid = (left + right) / 2
Step 5: If A[mid] == T, go to Step 8 (element found)
Step 6: If A[mid] < T, set left = mid + 1, go to Step 3
Step 7: If A[mid] > T, set right = mid - 1, go to Step 3
Step 8: Return mid (element found at index mid)
Step 9: Return -1 (element not found)
Step 10: Stop</pre>
        
        <p><strong>Time Complexity:</strong> O(log n) - divides the search space in half each time</p>
        <p><strong>Space Complexity:</strong> O(1) - uses constant extra space</p>
        
        <p><strong>C++ Implementation:</strong></p>
        <pre>
int binarySearch(int arr[], int n, int target) {
    int left = 0;
    int right = n - 1;
    
    while (left <= right) {
        int mid = (left + right) / 2;
        
        if (arr[mid] == target) {
            return mid;  // Found at index mid
        }
        else if (arr[mid] < target) {
            left = mid + 1;  // Search in right half
        }
        else {
            right = mid - 1;  // Search in left half
        }
    }
    
    return -1;  // Not found
}</pre>
        
        <h4>Example 3: Bubble Sort</h4>
        <p>Repeatedly swap adjacent elements if they are in wrong order.</p>
        
        <p><strong>Algorithm:</strong></p>
        <pre>
Algorithm: Bubble Sort
Input: An array A of n elements
Output: Array A sorted in ascending order

Step 1: Start
Step 2: Set i = 0
Step 3: If i >= n-1, go to Step 11 (sorting complete)
Step 4: Set j = 0
Step 5: If j >= n-i-1, go to Step 9
Step 6: If A[j] > A[j+1], swap A[j] and A[j+1]
Step 7: j = j + 1
Step 8: Go to Step 5
Step 9: i = i + 1
Step 10: Go to Step 3
Step 11: Stop</pre>
        
        <p><strong>Time Complexity:</strong> O(n²) - nested loops</p>
        <p><strong>Space Complexity:</strong> O(1) - sorts in place</p>
        
        <p><strong>C++ Implementation:</strong></p>
        <pre>
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                // Swap arr[j] and arr[j+1]
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}</pre>
        
        <h4>Example 4: Factorial (Recursive)</h4>
        <p>Calculate n! = n × (n-1) × (n-2) × ... × 1</p>
        
        <p><strong>Algorithm:</strong></p>
        <pre>
Algorithm: Factorial (Recursive)
Input: A non-negative integer n
Output: n! (factorial of n)

Step 1: Start
Step 2: If n == 0, return 1 (base case)
Step 3: Return n × factorial(n-1) (recursive case)
Step 4: Stop</pre>
        
        <p><strong>Time Complexity:</strong> O(n) - makes n recursive calls</p>
        <p><strong>Space Complexity:</strong> O(n) - uses stack space for recursive calls</p>
        
        <p><strong>C++ Implementation:</strong></p>
        <pre>
int factorial(int n) {
    if (n == 0) {
        return 1;  // Base case: 0! = 1
    }
    return n * factorial(n - 1);  // Recursive case
}</pre>
        
        <h4>Example 5: Fibonacci Sequence</h4>
        <p>Calculate the nth Fibonacci number: F(n) = F(n-1) + F(n-2), with F(0)=0, F(1)=1</p>
        
        <p><strong>Algorithm (Recursive - inefficient):</strong></p>
        <pre>
Algorithm: Fibonacci (Recursive)
Input: A non-negative integer n
Output: The nth Fibonacci number

Step 1: Start
Step 2: If n == 0, return 0 (base case)
Step 3: If n == 1, return 1 (base case)
Step 4: Return fibonacci(n-1) + fibonacci(n-2) (recursive case)
Step 5: Stop</pre>
        
        <p><strong>Time Complexity:</strong> O(2ⁿ) - exponential! Very inefficient</p>
        
        <p><strong>Algorithm (Iterative - efficient):</strong></p>
        <pre>
Algorithm: Fibonacci (Iterative)
Input: A non-negative integer n
Output: The nth Fibonacci number

Step 1: Start
Step 2: If n == 0, return 0
Step 3: If n == 1, return 1
Step 4: Set a = 0, b = 1
Step 5: For i = 2 to n:
Step 6:     Set c = a + b
Step 7:     Set a = b
Step 8:     Set b = c
Step 9: End For
Step 10: Return b
Step 11: Stop</pre>
        
        <p><strong>Time Complexity:</strong> O(n) - linear time</p>
        
        <p><strong>C++ Implementation:</strong></p>
        <pre>
int fibonacci(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    
    int a = 0, b = 1, c;
    for (int i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}</pre>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Key Insight:</strong> The same problem can often be solved by multiple algorithms with vastly different efficiencies. Always consider algorithm efficiency when choosing how to implement a solution!</p>
        </div>

        <!-- ==================== SECTION 7: ALGORITHM DESIGN TECHNIQUES ==================== -->
        <h3>1.2.3.7 Algorithm Design Techniques</h3>
        
        <h4>1. Brute Force</h4>
        <p>Try all possible solutions until you find the correct one.</p>
        <ul>
            <li><strong>Pros:</strong> Simple, always works</li>
            <li><strong>Cons:</strong> Often very inefficient</li>
            <li><strong>Example:</strong> Linear search, checking all permutations</li>
        </ul>
        
        <h4>2. Divide and Conquer</h4>
        <p>Divide problem into smaller subproblems, solve them recursively, combine results.</p>
        <ul>
            <li><strong>Pros:</strong> Can be very efficient</li>
            <li><strong>Cons:</strong> Recursive implementation can be complex</li>
            <li><strong>Example:</strong> Merge sort, quick sort, binary search</li>
        </ul>
        
        <h4>3. Dynamic Programming</h4>
        <p>Solve problems by breaking them into overlapping subproblems and storing results.</p>
        <ul>
            <li><strong>Pros:</strong> Very efficient for problems with overlapping subproblems</li>
            <li><strong>Cons:</strong> Can be difficult to design</li>
            <li><strong>Example:</strong> Fibonacci (with memoization), knapsack problem</li>
        </ul>
        
        <h4>4. Greedy Algorithms</h4>
        <p>Make locally optimal choices at each step, hoping for global optimum.</p>
        <ul>
            <li><strong>Pros:</strong> Simple, often efficient</li>
            <li><strong>Cons:</strong> Doesn't always find optimal solution</li>
            <li><strong>Example:</strong> Dijkstra's algorithm, coin change (with certain denominations)</li>
        </ul>
        
        <h4>5. Backtracking</h4>
        <p>Build solution incrementally and backtrack when a dead end is reached.</p>
        <ul>
            <li><strong>Pros:</strong> Can solve complex constraint satisfaction problems</li>
            <li><strong>Cons:</strong> Can be slow for large problems</li>
            <li><strong>Example:</strong> N-Queens, Sudoku, maze solving</li>
        </ul>

        <!-- ==================== SECTION 8: ALGORITHM VS PROGRAM ==================== -->
        <h3>1.2.3.8 Algorithm vs Program</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Aspect</th>
                <th style="padding: 10px;">Algorithm</th>
                <th style="padding: 10px;">Program</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Definition</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Step-by-step procedure for solving a problem</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Implementation of an algorithm in a programming language</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Language</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Language-independent</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Written in a specific programming language</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Phase</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Design phase</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Implementation phase</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Execution</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Cannot be executed directly</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Can be executed by computer</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Syntax</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">No strict syntax rules</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Must follow strict syntax rules</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Example</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Binary search algorithm</td>
                <td style="padding: 10px; border: 1px solid #ddd;">C++ function implementing binary search</td>
            </tr>
        </table>

        <!-- ==================== SECTION 9: ALGORITHM ANALYSIS EXERCISES ==================== -->
        <h3>1.2.3.9 Algorithm Analysis Exercises</h3>
        
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Algorithm Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Write an algorithm to find the smallest number in an array of n numbers.</p>
            
            <p><strong>Exercise 2:</strong> Create an algorithm to count the number of even numbers in an array.</p>
            
            <p><strong>Exercise 3:</strong> Design an algorithm to reverse an array.</p>
            
            <p><strong>Exercise 4:</strong> Write an algorithm to check if a string is a palindrome (reads the same forwards and backwards).</p>
            
            <p><strong>Exercise 5:</strong> Create an algorithm to find the second largest number in an array.</p>
            
            <p><strong>Exercise 6:</strong> Design an algorithm to compute the sum of digits of a number (e.g., 123 → 1+2+3 = 6).</p>
            
            <p><strong>Exercise 7:</strong> Write an algorithm to generate the first n prime numbers.</p>
            
            <p><strong>Exercise 8:</strong> Analyze the time complexity of each algorithm you wrote.</p>
            
            <p><strong>Exercise 9:</strong> Compare these two algorithms for finding the maximum number:</p>
            <pre>
Algorithm A:
max = arr[0]
for i = 1 to n-1
    if arr[i] > max
        max = arr[i]

Algorithm B:
sort the array in descending order
max = arr[0]</pre>
            <p>Which is more efficient? Why?</p>
            
            <p><strong>Exercise 10:</strong> What is the time complexity of this algorithm?</p>
            <pre>
for i = 1 to n
    for j = 1 to i
        print i, j</pre>
        </div>

        <!-- ==================== SECTION 10: SUMMARY ==================== -->
        <h3>1.2.3.10 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li>An <strong>algorithm</strong> is a step-by-step procedure for solving a problem</li>
                <li><strong>Characteristics</strong> of good algorithms: finiteness, definiteness, input, output, effectiveness, generality</li>
                <li>Algorithms can be represented as <strong>natural language, flowcharts, pseudocode, or code</strong></li>
                <li><strong>Time complexity</strong> measures how execution time grows with input size</li>
                <li><strong>Space complexity</strong> measures how memory usage grows with input size</li>
                <li><strong>Big O notation</strong> classifies algorithms by their growth rate: O(1), O(log n), O(n), O(n log n), O(n²), O(2ⁿ)</li>
                <li>The same problem can be solved by multiple algorithms with different efficiencies</li>
                <li>Common algorithm categories: sorting, searching, graph, dynamic programming, etc.</li>
                <li><strong>Algorithm design techniques</strong>: brute force, divide and conquer, dynamic programming, greedy, backtracking</li>
                <li>An <strong>algorithm</strong> is the design; a <strong>program</strong> is the implementation</li>
            </ul>
        </div>

        <!-- ==================== SECTION 11: KEY TERMS ==================== -->
        <h3>1.2.3.11 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Algorithm</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Step-by-step procedure</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Time Complexity</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">How time grows with input</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Space Complexity</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">How memory grows with input</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Big O Notation</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Describes algorithm efficiency</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Searching</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Finding an element</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Sorting</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Arranging in order</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Recursion</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Function calling itself</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Iteration</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Repetition using loops</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Divide and Conquer</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Break into subproblems</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Brute Force</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Try all possibilities</p>
            </div>
        </div>
        
        <!-- ==================== CHAPTER SUMMARY ==================== -->
        <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 30px; border-radius: 15px; margin: 40px 0; text-align: center; color: white;">
            <h3 style="margin: 0 0 15px 0;">📚 End of Chapter 1</h3>
            <p style="font-size: 18px; margin: 0 0 20px 0;">You have completed the introduction to programming!</p>
            <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
                <span style="background: rgba(255,255,255,0.2); padding: 10px 20px; border-radius: 30px;">1.1 Introduction to Programming ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 10px 20px; border-radius: 30px;">1.2 Problem Solving Techniques ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 10px 20px; border-radius: 30px;">1.2.1 Flowchart ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 10px 20px; border-radius: 30px;">1.2.2 Pseudocode ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 10px 20px; border-radius: 30px;">1.2.3 Algorithms ✓</span>
            </div>
            <p style="margin-top: 30px;">Ready for Chapter 2: Variables and Data Types!</p>
        </div>
    `,
    navigation: {
        next: null,
        prev: "ch1-4",
        nextTitle: null,
        prevTitle: "1.2.2 Pseudocode"
    }
};