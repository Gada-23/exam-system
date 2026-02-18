// ===============================
// Computer Programming - Chapter 3.4
// For Loop Statement
// ===============================

window.currentSubsectionData = {
    title: "3.4 For Loop Statement",
    content: `
        <h2>3.4 For Loop Statement</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand the concept of loops and iteration</li>
                <li>Learn the syntax and flow of for loop</li>
                <li>Master the three parts of for loop: initialization, condition, update</li>
                <li>Learn common for loop patterns</li>
                <li>Understand nested for loops</li>
                <li>Learn loop control with break and continue</li>
                <li>Avoid common for loop mistakes</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: INTRODUCTION TO LOOPS ==================== -->
        <h3>3.4.1 Introduction to Loops</h3>
        
        <p><strong>Loops</strong> are used to execute a block of code repeatedly. They are essential when you need to perform the same task multiple times, such as:</p>
        <ul>
            <li>Processing all elements of an array</li>
            <li>Calculating the sum of numbers from 1 to 100</li>
            <li>Displaying a menu until the user chooses to exit</li>
            <li>Validating user input until it's correct</li>
        </ul>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> A loop is a control structure that repeats a block of code as long as a specified condition is true.</p>
        </div>
        
        <h4>Why Use Loops?</h4>
        <p>Without loops, you'd have to write repetitive code:</p>
        
        <pre>
// Without loop - terrible!
cout << "1" << endl;
cout << "2" << endl;
cout << "3" << endl;
// ... imagine writing 100 lines!</pre>
        
        <p>With a loop:</p>
        <pre>
for (int i = 1; i <= 100; i++) {
    cout << i << endl;
}</pre>
        
        <p>The <strong>for loop</strong> is ideal when you know in advance how many times you want to repeat.</p>

        <!-- ==================== SECTION 2: FOR LOOP SYNTAX AND FLOW ==================== -->
        <h3>3.4.2 For Loop Syntax and Flow</h3>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Syntax:</strong></p>
            <pre>
for (initialization; condition; update) {
    // loop body - code to repeat
}</pre>
        </div>
        
        <h4>The Three Parts of For Loop:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Part</th>
                <th style="padding: 10px;">Purpose</th>
                <th style="padding: 10px;">Example</th>
                <th style="padding: 10px;">When Executed</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Initialization</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Sets up loop counter/variable</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int i = 0</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Once, before loop starts</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Condition</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Determines if loop should continue</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>i < 10</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Before each iteration</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Update</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Changes loop variable</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>i++</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">After each iteration</td>
            </tr>
        </table>
        
        <h4>Flowchart of For Loop:</h4>
        <pre>
        ┌─────────────┐
        │    Start    │
        └──────┬──────┘
               ↓
        ┌─────────────┐
        │ Initialization│
        │   i = 0      │
        └──────┬──────┘
               ↓
              ⬦←─────────┐
             ║ Condition ║ │
            ║  i < 10?   ║ │
            ║            ║ │
            ║    Yes     ║ │ No
            ║            ║ │
            ║    ↓       ║ │
            ║ [ Loop    ]║ │
            ║   body     ║ │
            ║    ↓       ║ │
            ║ [ Update  ]║ │
            ║   i++      ║ │
            ║    ↓       ║ │
            ╚════════════╝ │
                 └─────────┘
                    ↓
              ┌─────────────┐
              │     End     │
              └─────────────┘</pre>
        
        <h4>Simple For Loop Example:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Print numbers 1 to 5
    for (int i = 1; i <= 5; i++) {
        cout << i << " ";
    }
    cout << endl;
    
    // Print numbers in reverse
    for (int i = 5; i >= 1; i--) {
        cout << i << " ";
    }
    cout << endl;
    
    // Print even numbers
    for (int i = 2; i <= 10; i += 2) {
        cout << i << " ";
    }
    cout << endl;
    
    return 0;
}</pre>
        
        <p><strong>Output:</strong></p>
        <pre>
1 2 3 4 5 
5 4 3 2 1 
2 4 6 8 10</pre>

        <!-- ==================== SECTION 3: FOR LOOP VARIATIONS ==================== -->
        <h3>3.4.3 For Loop Variations</h3>
        
        <h4>1. Multiple Initializations and Updates</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Multiple variables in for loop
    for (int i = 0, j = 10; i < j; i++, j--) {
        cout << "i = " << i << ", j = " << j << endl;
    }
    
    return 0;
}</pre>
        
        <p><strong>Output:</strong></p>
        <pre>
i = 0, j = 10
i = 1, j = 9
i = 2, j = 8
i = 3, j = 7
i = 4, j = 6</pre>
        
        <h4>2. Empty Parts (Infinite Loop with Exit Condition)</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int i = 0;
    
    // All parts optional, but semicolons required
    for (; ;) {
        if (i >= 5) break;
        cout << i << " ";
        i++;
    }
    cout << endl;
    
    return 0;
}</pre>
        
        <h4>3. Variables Declared Outside</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int i;  // declared outside
    
    for (i = 0; i < 5; i++) {
        cout << i << " ";
    }
    cout << "\\ni after loop: " << i << endl;  // i = 5
    
    return 0;
}</pre>
        
        <h4>4. Using Different Update Operations</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Multiplication
    for (int i = 1; i <= 100; i *= 2) {
        cout << i << " ";
    }
    cout << endl;  // 1 2 4 8 16 32 64
    
    // Division
    for (int i = 100; i >= 1; i /= 2) {
        cout << i << " ";
    }
    cout << endl;  // 100 50 25 12 6 3 1
    
    return 0;
}</pre>

        <!-- ==================== SECTION 4: COMMON FOR LOOP PATTERNS ==================== -->
        <h3>3.4.4 Common For Loop Patterns</h3>
        
        <h4>Pattern 1: Summing Numbers</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int sum = 0;
    
    for (int i = 1; i <= 100; i++) {
        sum += i;  // sum = sum + i
    }
    
    cout << "Sum of 1 to 100 = " << sum << endl;
    
    return 0;
}</pre>
        
        <h4>Pattern 2: Factorial Calculation</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int n;
    long long factorial = 1;
    
    cout << "Enter a number: ";
    cin >> n;
    
    for (int i = 1; i <= n; i++) {
        factorial *= i;
    }
    
    cout << n << "! = " << factorial << endl;
    
    return 0;
}</pre>
        
        <h4>Pattern 3: Counting Occurrences</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int countEven = 0, countOdd = 0;
    
    for (int i = 1; i <= 20; i++) {
        if (i % 2 == 0) {
            countEven++;
        } else {
            countOdd++;
        }
    }
    
    cout << "Even numbers: " << countEven << endl;
    cout << "Odd numbers: " << countOdd << endl;
    
    return 0;
}</pre>
        
        <h4>Pattern 4: Finding Maximum/Minimum</h4>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;climits&gt;
using namespace std;

int main() {
    int numbers[] = {45, 23, 78, 12, 56, 89, 34};
    int size = 7;
    
    int maxNum = INT_MIN;
    int minNum = INT_MAX;
    
    for (int i = 0; i < size; i++) {
        if (numbers[i] > maxNum) {
            maxNum = numbers[i];
        }
        if (numbers[i] < minNum) {
            minNum = numbers[i];
        }
    }
    
    cout << "Maximum: " << maxNum << endl;
    cout << "Minimum: " << minNum << endl;
    
    return 0;
}</pre>
        
        <h4>Pattern 5: Generating Multiplication Table</h4>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;iomanip&gt;
using namespace std;

int main() {
    int n;
    
    cout << "Enter a number: ";
    cin >> n;
    
    cout << "Multiplication Table for " << n << ":" << endl;
    for (int i = 1; i <= 10; i++) {
        cout << setw(2) << i << " × " << setw(2) << n 
             << " = " << setw(3) << i * n << endl;
    }
    
    return 0;
}</pre>

        <!-- ==================== SECTION 5: NESTED FOR LOOPS ==================== -->
        <h3>3.4.5 Nested For Loops</h3>
        
        <p>A <strong>nested loop</strong> is a loop inside another loop. The inner loop completes all its iterations for each iteration of the outer loop.</p>
        
        <h4>Example 1: Clock Simulation</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Simulate a digital clock (hours:minutes:seconds)
    for (int hour = 0; hour < 24; hour++) {
        for (int minute = 0; minute < 60; minute++) {
            for (int second = 0; second < 60; second++) {
                cout << hour << ":" << minute << ":" << second << endl;
                // In reality, you'd add a delay here
            }
        }
    }
    
    return 0;
}</pre>
        
        <h4>Example 2: Multiplication Table Grid</h4>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;iomanip&gt;
using namespace std;

int main() {
    cout << "     Multiplication Table (1-10)" << endl;
    cout << "    1   2   3   4   5   6   7   8   9  10" << endl;
    cout << "   -----------------------------------------" << endl;
    
    for (int i = 1; i <= 10; i++) {
        cout << setw(2) << i << " |";
        for (int j = 1; j <= 10; j++) {
            cout << setw(4) << i * j;
        }
        cout << endl;
    }
    
    return 0;
}</pre>
        
        <h4>Example 3: Printing Patterns</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int rows = 5;
    
    // Pattern 1: Right triangle
    cout << "Pattern 1:" << endl;
    for (int i = 1; i <= rows; i++) {
        for (int j = 1; j <= i; j++) {
            cout << "* ";
        }
        cout << endl;
    }
    
    cout << "\\nPattern 2:" << endl;
    // Pattern 2: Pyramid
    for (int i = 1; i <= rows; i++) {
        // Print spaces
        for (int j = 1; j <= rows - i; j++) {
            cout << "  ";
        }
        // Print stars
        for (int j = 1; j <= 2 * i - 1; j++) {
            cout << "* ";
        }
        cout << endl;
    }
    
    cout << "\\nPattern 3:" << endl;
    // Pattern 3: Diamond
    // Upper half
    for (int i = 1; i <= rows; i++) {
        for (int j = 1; j <= rows - i; j++) cout << " ";
        for (int j = 1; j <= 2 * i - 1; j++) cout << "*";
        cout << endl;
    }
    // Lower half
    for (int i = rows - 1; i >= 1; i--) {
        for (int j = 1; j <= rows - i; j++) cout << " ";
        for (int j = 1; j <= 2 * i - 1; j++) cout << "*";
        cout << endl;
    }
    
    return 0;
}</pre>

        <!-- ==================== SECTION 6: LOOP CONTROL: BREAK AND CONTINUE ==================== -->
        <h3>3.4.6 Loop Control: break and continue</h3>
        
        <p>Sometimes you need more control over loop execution:</p>
        <ul>
            <li><strong>break</strong> - immediately exits the loop</li>
            <li><strong>continue</strong> - skips the rest of current iteration and moves to next</li>
        </ul>
        
        <h4>Example 1: Using break</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Find first number divisible by 7
    for (int i = 1; i <= 100; i++) {
        if (i % 7 == 0) {
            cout << "First number divisible by 7: " << i << endl;
            break;  // Exit loop immediately
        }
    }
    
    // break in nested loops
    for (int i = 1; i <= 5; i++) {
        for (int j = 1; j <= 5; j++) {
            if (i * j > 15) {
                cout << "Product " << i << "*" << j << " exceeds 15" << endl;
                break;  // Only breaks inner loop
            }
        }
    }
    
    return 0;
}</pre>
        
        <h4>Example 2: Using continue</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Print numbers 1-10, skipping multiples of 3
    for (int i = 1; i <= 10; i++) {
        if (i % 3 == 0) {
            continue;  // Skip rest of iteration
        }
        cout << i << " ";
    }
    cout << endl;  // Output: 1 2 4 5 7 8 10
    
    // Sum only even numbers
    int sum = 0;
    for (int i = 1; i <= 20; i++) {
        if (i % 2 != 0) {
            continue;  // Skip odd numbers
        }
        sum += i;
    }
    cout << "Sum of evens 1-20: " << sum << endl;
    
    return 0;
}</pre>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Note:</strong> In nested loops, break only exits the innermost loop where it's placed. To break out of multiple levels, you need additional logic or a flag variable.</p>
        </div>

        <!-- ==================== SECTION 7: COMMON FOR LOOP MISTAKES ==================== -->
        <h3>3.4.7 Common For Loop Mistakes</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Mistake</th>
                <th style="padding: 10px;">Wrong Code</th>
                <th style="padding: 10px;">Correct Code</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Using = instead of == in condition</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>for (int i=0; i=5; i++)</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>for (int i=0; i<5; i++)</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Semicolon after for</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>for (int i=0; i<5; i++);<br>{ cout << i; }</code>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>for (int i=0; i<5; i++) { cout << i; }</code>
                </td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Off-by-one errors</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>for (int i=1; i<5; i++) // runs 4 times</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>for (int i=1; i<=5; i++) // runs 5 times</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Infinite loop</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>for (int i=0; i<10; ) // no update</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>for (int i=0; i<10; i++)</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Modifying loop variable inside body</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>for (int i=0; i<10; i++)<br>    i += 2; // confusing</code>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">Avoid or use while loop instead</td>
            </tr>
        </table>

        <!-- ==================== SECTION 8: PRACTICAL FOR LOOP EXAMPLES ==================== -->
        <h3>3.4.8 Practical For Loop Examples</h3>
        
        <h4>Example 1: Prime Number Checker</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int num;
    bool isPrime = true;
    
    cout << "Enter a positive integer: ";
    cin >> num;
    
    if (num <= 1) {
        isPrime = false;
    } else {
        for (int i = 2; i <= num / 2; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    
    if (isPrime) {
        cout << num << " is prime." << endl;
    } else {
        cout << num << " is not prime." << endl;
    }
    
    return 0;
}</pre>
        
        <h4>Example 2: Fibonacci Series</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int n, first = 0, second = 1, next;
    
    cout << "Enter number of terms: ";
    cin >> n;
    
    cout << "Fibonacci Series: ";
    
    for (int i = 1; i <= n; i++) {
        if (i == 1) {
            cout << first << " ";
            continue;
        }
        if (i == 2) {
            cout << second << " ";
            continue;
        }
        next = first + second;
        first = second;
        second = next;
        cout << next << " ";
    }
    cout << endl;
    
    return 0;
}</pre>
        
        <h4>Example 3: Finding Factors</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int num;
    
    cout << "Enter a number: ";
    cin >> num;
    
    cout << "Factors of " << num << ": ";
    for (int i = 1; i <= num; i++) {
        if (num % i == 0) {
            cout << i << " ";
        }
    }
    cout << endl;
    
    return 0;
}</pre>
        
        <h4>Example 4: Power Calculation (without pow())</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int base, exponent;
    long long result = 1;
    
    cout << "Enter base: ";
    cin >> base;
    cout << "Enter exponent: ";
    cin >> exponent;
    
    for (int i = 1; i <= exponent; i++) {
        result *= base;
    }
    
    cout << base << "^" << exponent << " = " << result << endl;
    
    return 0;
}</pre>
        
        <h4>Example 5: Number Guessing Game</h4>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;cstdlib&gt;
#include &lt;ctime&gt;
using namespace std;

int main() {
    srand(time(0));
    int secret = rand() % 100 + 1;  // 1-100
    int guess;
    int attempts = 0;
    const int MAX_ATTEMPTS = 7;
    
    cout << "I'm thinking of a number between 1 and 100." << endl;
    cout << "You have " << MAX_ATTEMPTS << " attempts." << endl;
    
    for (attempts = 1; attempts <= MAX_ATTEMPTS; attempts++) {
        cout << "Attempt " << attempts << ": Enter your guess: ";
        cin >> guess;
        
        if (guess == secret) {
            cout << "Congratulations! You guessed it in " 
                 << attempts << " attempts!" << endl;
            break;
        } else if (guess < secret) {
            cout << "Too low!" << endl;
        } else {
            cout << "Too high!" << endl;
        }
    }
    
    if (attempts > MAX_ATTEMPTS) {
        cout << "Sorry, you ran out of attempts. The number was " 
             << secret << endl;
    }
    
    return 0;
}</pre>

        <!-- ==================== SECTION 9: COMPLETE EXAMPLE ==================== -->
        <h3>3.4.9 Complete Example: Student Grade Analyzer</h3>
        
        <pre>
// ============================================
// Program: Student Grade Analyzer
// Author: CS Student
// Description: Demonstrates various for loop applications
// ============================================

#include &lt;iostream&gt;
#include &lt;iomanip&gt;
using namespace std;

int main() {
    const int NUM_STUDENTS = 5;
    string names[NUM_STUDENTS];
    int scores[NUM_STUDENTS];
    int sum = 0;
    int highest = 0;
    int lowest = 100;
    string highestName, lowestName;
    
    cout << "===== STUDENT GRADE ANALYZER =====" << endl;
    
    // Input loop
    for (int i = 0; i < NUM_STUDENTS; i++) {
        cout << "\\nEnter student " << i + 1 << " name: ";
        cin >> names[i];
        cout << "Enter score for " << names[i] << ": ";
        cin >> scores[i];
        
        // Validate input
        while (scores[i] < 0 || scores[i] > 100) {
            cout << "Invalid score! Enter 0-100: ";
            cin >> scores[i];
        }
        
        sum += scores[i];
        
        // Find highest
        if (scores[i] > highest) {
            highest = scores[i];
            highestName = names[i];
        }
        
        // Find lowest
        if (scores[i] < lowest) {
            lowest = scores[i];
            lowestName = names[i];
        }
    }
    
    // Calculate average
    double average = static_cast<double>(sum) / NUM_STUDENTS;
    
    // Display results
    cout << "\\n===== RESULTS =====" << endl;
    cout << fixed << setprecision(2);
    
    // Display all students
    cout << "\\nAll Students:" << endl;
    cout << setw(15) << "Name" << setw(10) << "Score" << setw(10) << "Grade" << endl;
    cout << "--------------------------------" << endl;
    
    for (int i = 0; i < NUM_STUDENTS; i++) {
        char grade;
        if (scores[i] >= 90) grade = 'A';
        else if (scores[i] >= 80) grade = 'B';
        else if (scores[i] >= 70) grade = 'C';
        else if (scores[i] >= 60) grade = 'D';
        else grade = 'F';
        
        cout << setw(15) << names[i] << setw(10) << scores[i] 
             << setw(10) << grade << endl;
    }
    
    cout << "\\nClass Statistics:" << endl;
    cout << "Average Score: " << average << endl;
    cout << "Highest Score: " << highest << " (" << highestName << ")" << endl;
    cout << "Lowest Score: " << lowest << " (" << lowestName << ")" << endl;
    
    // Display scores above average
    cout << "\\nStudents above average:" << endl;
    int aboveCount = 0;
    for (int i = 0; i < NUM_STUDENTS; i++) {
        if (scores[i] > average) {
            cout << "  - " << names[i] << " (" << scores[i] << ")" << endl;
            aboveCount++;
        }
    }
    cout << "Total: " << aboveCount << " student(s)" << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 10: SUMMARY ==================== -->
        <h3>3.4.10 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li><strong>For loop</strong> is used for counted repetition (when you know how many times)</li>
                <li>Syntax: <code>for (initialization; condition; update) { body }</code></li>
                <li><strong>Initialization</strong> - runs once at the beginning</li>
                <li><strong>Condition</strong> - checked before each iteration</li>
                <li><strong>Update</strong> - runs after each iteration</li>
                <li><strong>Nested loops</strong> - loops inside loops (inner completes all iterations for each outer)</li>
                <li><strong>break</strong> - exits the loop immediately</li>
                <li><strong>continue</strong> - skips to next iteration</li>
                <li>Common patterns: summing, counting, finding max/min, generating tables</li>
                <li>Avoid off-by-one errors - check your loop boundaries carefully</li>
                <li>Be careful with semicolons after for - they create empty loops!</li>
            </ul>
        </div>

        <!-- ==================== SECTION 11: EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Write a program that prints all numbers from 1 to 50 that are divisible by 3.</p>
            
            <p><strong>Exercise 2:</strong> Calculate the sum of all even numbers between 1 and 100 using a for loop.</p>
            
            <p><strong>Exercise 3:</strong> Print the following pattern using nested loops:</p>
            <pre>
*
* *
* * *
* * * *
* * * * *</pre>
            
            <p><strong>Exercise 4:</strong> Write a program that asks for a number and prints its multiplication table (1-10).</p>
            
            <p><strong>Exercise 5:</strong> Find and print all prime numbers between 1 and 100.</p>
            
            <p><strong>Exercise 6:</strong> Write a program that calculates the factorial of a number. Use a for loop.</p>
            
            <p><strong>Exercise 7:</strong> Create a program that asks for 10 numbers and finds the average, maximum, and minimum.</p>
            
            <p><strong>Exercise 8:</strong> Print a diamond pattern of stars:</p>
            <pre>
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *</pre>
            
            <p><strong>Exercise 9:</strong> Write a program that generates the Fibonacci series up to n terms.</p>
            
            <p><strong>Exercise 10:</strong> Create a simple guessing game where the computer picks a random number (1-100) and the user has 7 attempts to guess it. Use a for loop for the attempts and provide hints (too high/too low).</p>
        </div>

        <!-- ==================== SECTION 12: KEY TERMS ==================== -->
        <h3>3.4.11 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Iteration</strong>
                <p style="font-size: 12px;">One execution of loop body</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Loop Counter</strong>
                <p style="font-size: 12px;">Variable controlling iterations</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Initialization</strong>
                <p style="font-size: 12px;">Sets starting value</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Condition</strong>
                <p style="font-size: 12px;">Determines if loop continues</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Update</strong>
                <p style="font-size: 12px;">Changes loop counter</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Nested Loop</strong>
                <p style="font-size: 12px;">Loop inside another loop</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Infinite Loop</strong>
                <p style="font-size: 12px;">Loop that never ends</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Off-by-one</strong>
                <p style="font-size: 12px;">Common loop boundary error</p>
            </div>
        </div>
        
        <!-- ==================== PREVIEW OF NEXT SECTION ==================== -->
        <div style="background: linear-gradient(135deg, #667eea20, #764ba220); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">📖 Next: 3.5 While Loop Statement</h4>
            <p>In the next section, we'll learn about while loops - ideal for when you don't know the number of iterations in advance.</p>
        </div>
    `,
    navigation: {
        next: "ch3-5",
        prev: "ch3-3",
        nextTitle: "3.5 While Loop Statement",
        prevTitle: "3.3 Switch Statement"
    }
};