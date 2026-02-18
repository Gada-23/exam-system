// ===============================
// Computer Programming - Chapter 3.1
// If...else Statement
// ===============================

window.currentSubsectionData = {
    title: "3.1 If...else Statement",
    content: `
        <h2>3.1 If...else Statement</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand the need for decision-making in programs</li>
                <li>Learn the syntax and flow of if statement</li>
                <li>Learn the syntax and flow of if...else statement</li>
                <li>Understand nested if statements</li>
                <li>Master the use of relational and logical operators in conditions</li>
                <li>Learn common patterns and best practices</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: INTRODUCTION TO DECISION MAKING ==================== -->
        <h3>3.1.1 Introduction to Decision Making</h3>
        
        <p>In programming, we often need to make decisions based on certain conditions. For example:</p>
        <ul>
            <li>If a student scores above 60, they pass; otherwise, they fail</li>
            <li>If a number is positive, do one thing; if negative, do another</li>
            <li>If a user is logged in, show dashboard; otherwise, show login page</li>
        </ul>
        
        <p><strong>Control statements</strong> allow us to control the flow of program execution based on conditions. The <strong>if...else</strong> statement is the most fundamental decision-making statement in C++.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> An if...else statement allows a program to execute different code based on whether a condition is true or false.</p>
        </div>
        
        <h4>Real-World Analogy:</h4>
        <p>Think of an if...else statement like a fork in the road:</p>
        <ul>
            <li><strong>Condition:</strong> Is it raining?</li>
            <li><strong>If true:</strong> Take an umbrella</li>
            <li><strong>If false:</strong> Don't take an umbrella</li>
        </ul>

        <!-- ==================== SECTION 2: SIMPLE IF STATEMENT ==================== -->
        <h3>3.1.2 Simple if Statement</h3>
        
        <p>The simplest form of decision making is the <strong>if statement</strong>. It executes a block of code only if a condition is true.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Syntax:</strong></p>
            <pre>
if (condition) {
    // code to execute if condition is true
}</pre>
        </div>
        
        <h4>Flowchart of if Statement:</h4>
        <pre>
        ┌─────────────┐
        │    Start    │
        └──────┬──────┘
               ↓
           ⬦─────────⬦
          ║ Condition ║
          ║   true?   ║
          ║           ║
          ║    Yes    ║ No
          ║           ║
          ║    ↓      ║
          ║ [ Code ]  ║
          ║    ↓      ║
          ╚═══════════╝
               ↓
        ┌─────────────┐
        │     End     │
        └─────────────┘</pre>
        
        <h4>Example 1: Checking if a number is positive</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int number;
    
    cout << "Enter a number: ";
    cin >> number;
    
    if (number > 0) {
        cout << "The number is positive." << endl;
    }
    
    cout << "This line always executes." << endl;
    
    return 0;
}</pre>
        
        <p><strong>Sample Run 1 (number = 5):</strong></p>
        <pre>
Enter a number: 5
The number is positive.
This line always executes.</pre>
        
        <p><strong>Sample Run 2 (number = -3):</strong></p>
        <pre>
Enter a number: -3
This line always executes.</pre>
        
        <h4>Example 2: Multiple statements in if block</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int age;
    
    cout << "Enter your age: ";
    cin >> age;
    
    if (age >= 18) {
        cout << "You are an adult." << endl;
        cout << "You can vote." << endl;
        cout << "You can drive." << endl;
    }
    
    cout << "Thank you for using the program." << endl;
    
    return 0;
}</pre>
        
        <div class="warning-box" style="background: #ffe8e8; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #f5576c;">
            <p><strong>⚠️ Important:</strong> If you don't use curly braces <code>{ }</code>, only the first statement after if is considered part of the if block. This is a common source of bugs!</p>
            <pre>
// Without braces - only first statement is conditional
if (age >= 18)
    cout << "Adult";     // This is conditional
    cout << "Can vote";  // This ALWAYS executes! (BUG)

// With braces - both statements are conditional
if (age >= 18) {
    cout << "Adult";
    cout << "Can vote";
}</pre>
        </div>

        <!-- ==================== SECTION 3: IF...ELSE STATEMENT ==================== -->
        <h3>3.1.3 if...else Statement</h3>
        
        <p>The <strong>if...else</strong> statement executes one block of code if the condition is true, and another block if the condition is false.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Syntax:</strong></p>
            <pre>
if (condition) {
    // code to execute if condition is true
} else {
    // code to execute if condition is false
}</pre>
        </div>
        
        <h4>Flowchart of if...else Statement:</h4>
        <pre>
        ┌─────────────┐
        │    Start    │
        └──────┬──────┘
               ↓
           ⬦─────────⬦
          ║ Condition ║
          ║   true?   ║
          ║           ║
          ║    Yes    ║ No
          ║           ║
          ║    ↓      ║    ↓
          ║ [ if     ]║ [ else   ]
          ║  block    ║  block
          ║    ↓      ║    ↓
          ╚═══════════╝    │
               └─────┬─────┘
                     ↓
              ┌─────────────┐
              │     End     │
              └─────────────┘</pre>
        
        <h4>Example 1: Even or Odd</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int number;
    
    cout << "Enter a number: ";
    cin >> number;
    
    if (number % 2 == 0) {
        cout << number << " is even." << endl;
    } else {
        cout << number << " is odd." << endl;
    }
    
    return 0;
}</pre>
        
        <p><strong>Sample Run 1 (even):</strong></p>
        <pre>
Enter a number: 8
8 is even.</pre>
        
        <p><strong>Sample Run 2 (odd):</strong></p>
        <pre>
Enter a number: 7
7 is odd.</pre>
        
        <h4>Example 2: Pass/Fail Check</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    double score;
    const double PASSING_SCORE = 60.0;
    
    cout << "Enter your exam score: ";
    cin >> score;
    
    if (score >= PASSING_SCORE) {
        cout << "Congratulations! You passed." << endl;
        cout << "Your grade: " << score << endl;
    } else {
        cout << "Sorry, you failed." << endl;
        cout << "Your score: " << score << endl;
        cout << "You need " << (PASSING_SCORE - score) 
             << " more points to pass." << endl;
    }
    
    return 0;
}</pre>
        
        <h4>Example 3: Positive, Negative, or Zero</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int number;
    
    cout << "Enter a number: ";
    cin >> number;
    
    if (number > 0) {
        cout << number << " is positive." << endl;
    } else {
        if (number < 0) {
            cout << number << " is negative." << endl;
        } else {
            cout << "The number is zero." << endl;
        }
    }
    
    return 0;
}</pre>
        
        <p>Note: This is a <strong>nested if</strong> example. We'll cover this more in the next section.</p>

        <!-- ==================== SECTION 4: CONDITIONAL EXPRESSIONS ==================== -->
        <h3>3.1.4 Conditional Expressions</h3>
        
        <p>The condition in an if statement can be any expression that evaluates to true or false. This includes:</p>
        
        <h4>1. Relational Expressions</h4>
        <pre>
if (x > y)      // greater than
if (x >= y)     // greater than or equal
if (x < y)      // less than
if (x <= y)     // less than or equal
if (x == y)     // equal to
if (x != y)     // not equal to</pre>
        
        <h4>2. Logical Expressions (using &&, ||, !)</h4>
        <pre>
if (x > 0 && x < 100)        // AND: both conditions must be true
if (x < 0 || x > 100)        // OR: at least one condition must be true
if (!isFinished)              // NOT: reverses the condition</pre>
        
        <h4>3. Boolean Variables</h4>
        <pre>
bool isValid = true;
if (isValid)        // same as if (isValid == true)
if (!isValid)       // same as if (isValid == false)</pre>
        
        <h4>4. Non-Boolean Expressions (converted to bool)</h4>
        <pre>
int count = 5;
if (count)          // true if count != 0
if (count == 0)     // same as if (!count)

double value = 3.14;
if (value)          // true if value != 0.0</pre>
        
        <h4>Complete Example with Different Conditions:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int age = 25;
    double income = 45000;
    bool hasID = true;
    
    // Multiple conditions
    if (age >= 18 && age <= 65 && hasID) {
        cout << "You can vote." << endl;
    }
    
    // Complex condition
    if (income > 50000 || (age < 30 && income > 30000)) {
        cout << "You qualify for the loan." << endl;
    }
    
    // Using boolean directly
    if (hasID) {
        cout << "ID is present." << endl;
    }
    
    return 0;
}</pre>

        <!-- ==================== SECTION 5: COMMON IF...ELSE PATTERNS ==================== -->
        <h3>3.1.5 Common if...else Patterns</h3>
        
        <h4>Pattern 1: Validation Check</h4>
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int age;
    
    cout << "Enter age: ";
    cin >> age;
    
    // Input validation
    if (age < 0 || age > 150) {
        cout << "Invalid age!" << endl;
        return 1;  // Exit with error
    }
    
    // Process valid input
    cout << "Valid age: " << age << endl;
    
    return 0;
}</pre>
        
        <h4>Pattern 2: Guard Clause (early return)</h4>
        <pre>
void processOrder(int quantity, double price) {
    // Guard clause - check for invalid conditions first
    if (quantity <= 0) {
        cout << "Invalid quantity!" << endl;
        return;  // Exit function early
    }
    
    if (price <= 0) {
        cout << "Invalid price!" << endl;
        return;  // Exit function early
    }
    
    // Main processing - only reached if all checks pass
    double total = quantity * price;
    cout << "Total: $" << total << endl;
}</pre>
        
        <h4>Pattern 3: Flag Variable</h4>
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int number;
    bool isPrime = true;  // Flag variable
    
    cout << "Enter a number: ";
    cin >> number;
    
    if (number <= 1) {
        isPrime = false;
    } else {
        for (int i = 2; i <= number / 2; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    
    if (isPrime) {
        cout << number << " is prime." << endl;
    } else {
        cout << number << " is not prime." << endl;
    }
    
    return 0;
}</pre>

        <!-- ==================== SECTION 6: NESTED IF STATEMENTS ==================== -->
        <h3>3.1.6 Nested if Statements</h3>
        
        <p>You can place an if statement inside another if statement. This is called <strong>nesting</strong>.</p>
        
        <h4>Example 1: Nested if for multiple conditions</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int score;
    
    cout << "Enter your score (0-100): ";
    cin >> score;
    
    if (score >= 0 && score <= 100) {
        // Valid score - now determine grade
        if (score >= 90) {
            cout << "Grade: A" << endl;
        } else if (score >= 80) {
            cout << "Grade: B" << endl;
        } else if (score >= 70) {
            cout << "Grade: C" << endl;
        } else if (score >= 60) {
            cout << "Grade: D" << endl;
        } else {
            cout << "Grade: F" << endl;
        }
    } else {
        cout << "Invalid score!" << endl;
    }
    
    return 0;
}</pre>
        
        <h4>Example 2: Complex nested if (loan approval)</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    double income;
    int creditScore;
    int employmentYears;
    
    cout << "Enter annual income: $";
    cin >> income;
    cout << "Enter credit score: ";
    cin >> creditScore;
    cout << "Enter years employed: ";
    cin >> employmentYears;
    
    if (income >= 30000) {
        // Income requirement met
        if (creditScore >= 700) {
            // Good credit
            if (employmentYears >= 2) {
                // All conditions met
                cout << "Loan approved!" << endl;
            } else {
                cout << "Need at least 2 years employment." << endl;
            }
        } else if (creditScore >= 600) {
            // Fair credit - need higher income
            if (income >= 50000 && employmentYears >= 3) {
                cout << "Loan approved with conditions." << endl;
            } else {
                cout << "Need higher income or better credit." << endl;
            }
        } else {
            cout << "Credit score too low." << endl;
        }
    } else {
        cout << "Income too low for loan." << endl;
    }
    
    return 0;
}</pre>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Best Practice:</strong> Deeply nested if statements can be hard to read. Consider using logical operators to combine conditions or refactoring into separate functions.</p>
            <pre>
// Instead of deep nesting:
if (condition1) {
    if (condition2) {
        if (condition3) {
            // do something
        }
    }
}

// Consider:
if (condition1 && condition2 && condition3) {
    // do something
}</pre>
        </div>

        <!-- ==================== SECTION 7: TERNARY OPERATOR ==================== -->
        <h3>3.1.7 Ternary Operator (Conditional Operator)</h3>
        
        <p>The <strong>ternary operator</strong> (?:) is a shorthand way to write simple if...else statements. It's called "ternary" because it takes three operands.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Syntax:</strong> <code>condition ? expression1 : expression2;</code></p>
            <p>If condition is true, expression1 is evaluated; otherwise, expression2 is evaluated.</p>
        </div>
        
        <h4>Example 1: Simple ternary</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int x = 10, y = 20;
    
    // Traditional if...else
    int max;
    if (x > y) {
        max = x;
    } else {
        max = y;
    }
    
    // Same thing with ternary operator
    int max2 = (x > y) ? x : y;
    
    cout << "Max (if-else): " << max << endl;
    cout << "Max (ternary): " << max2 << endl;
    
    // Using ternary in output
    cout << "The larger number is: " << ((x > y) ? x : y) << endl;
    
    // Ternary with strings
    string result = (x > y) ? "x is greater" : "y is greater";
    cout << result << endl;
    
    return 0;
}</pre>
        
        <h4>Example 2: Multiple ternaries (use with caution)</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int score = 85;
    
    // Nested ternary - gets hard to read
    char grade = (score >= 90) ? 'A' :
                 (score >= 80) ? 'B' :
                 (score >= 70) ? 'C' :
                 (score >= 60) ? 'D' : 'F';
    
    cout << "Score: " << score << ", Grade: " << grade << endl;
    
    // This is more readable as if-else-if chain
    return 0;
}</pre>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Best Practice:</strong> Use ternary operator for simple, single-line conditions. For complex conditions, use regular if...else for better readability.</p>
        </div>

        <!-- ==================== SECTION 8: COMMON MISTAKES ==================== -->
        <h3>3.1.8 Common Mistakes with if...else</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Mistake</th>
                <th style="padding: 10px;">Wrong Code</th>
                <th style="padding: 10px;">Correct Code</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Using = instead of ==</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>if (x = 5)</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>if (x == 5)</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Missing braces</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>if (x > 0)<br>    cout << "Pos";<br>    cout << "itive";</code>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>if (x > 0) {<br>    cout << "Pos";<br>    cout << "itive";<br>}</code>
                </td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Semicolon after if</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>if (x > 5);<br>{ cout << "x > 5"; }</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>if (x > 5) { cout << "x > 5"; }</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Using assignment in condition</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>if (x = y)</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>if (x == y)</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Else without if</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>cout << "Hi";<br>else cout << "Bye";</code>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">Every else must follow an if</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Dangling else</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>if (x > 0)<br>    if (x > 10)<br>        cout << ">10";<br>else cout << "<=0";</code>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">Use braces to clarify which if the else belongs to</td>
            </tr>
        </table>

        <!-- ==================== SECTION 9: COMPLETE EXAMPLE PROGRAM ==================== -->
        <h3>3.1.9 Complete Example: Simple Menu System</h3>
        
        <pre>
// ============================================
// Program: Simple Menu System
// Author: CS Student
// Description: Demonstrates if...else statements
// ============================================

#include &lt;iostream&gt;
using namespace std;

int main() {
    int choice;
    double num1, num2, result;
    
    cout << "===== SIMPLE CALCULATOR =====" << endl;
    cout << "1. Add" << endl;
    cout << "2. Subtract" << endl;
    cout << "3. Multiply" << endl;
    cout << "4. Divide" << endl;
    cout << "5. Exit" << endl;
    cout << "==============================" << endl;
    cout << "Enter your choice (1-5): ";
    cin >> choice;
    
    if (choice >= 1 && choice <= 4) {
        // Get numbers for calculation
        cout << "Enter first number: ";
        cin >> num1;
        cout << "Enter second number: ";
        cin >> num2;
    }
    
    // Process choice using if...else
    if (choice == 1) {
        result = num1 + num2;
        cout << "Result: " << num1 << " + " << num2 << " = " << result << endl;
    } 
    else if (choice == 2) {
        result = num1 - num2;
        cout << "Result: " << num1 << " - " << num2 << " = " << result << endl;
    }
    else if (choice == 3) {
        result = num1 * num2;
        cout << "Result: " << num1 << " × " << num2 << " = " << result << endl;
    }
    else if (choice == 4) {
        if (num2 != 0) {
            result = num1 / num2;
            cout << "Result: " << num1 << " ÷ " << num2 << " = " << result << endl;
        } else {
            cout << "Error: Division by zero is not allowed!" << endl;
        }
    }
    else if (choice == 5) {
        cout << "Thank you for using the calculator. Goodbye!" << endl;
    }
    else {
        cout << "Invalid choice. Please run the program again." << endl;
    }
    
    return 0;
}</pre>

        <!-- ==================== SECTION 10: SUMMARY ==================== -->
        <h3>3.1.10 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li><strong>if statement</strong> executes code only when a condition is true</li>
                <li><strong>if...else statement</strong> executes one block when true, another when false</li>
                <li>Always use <strong>curly braces { }</strong> even for single statements (prevents bugs)</li>
                <li>Conditions can be relational expressions, logical expressions, or boolean variables</li>
                <li><strong>Nested if</strong> statements place ifs inside other ifs</li>
                <li><strong>Ternary operator (?:)</strong> provides shorthand for simple if...else</li>
                <li>Common mistakes: using = instead of ==, missing braces, semicolon after if</li>
                <li>Use <strong>input validation</strong> to check user input before processing</li>
                <li><strong>Guard clauses</strong> (early returns) can simplify complex conditions</li>
                <li>Keep conditions simple and readable - use parentheses when needed</li>
            </ul>
        </div>

        <!-- ==================== SECTION 11: EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Write a program that asks for a number and determines if it's positive, negative, or zero.</p>
            
            <p><strong>Exercise 2:</strong> Create a program that asks for a student's score and determines if they passed (score >= 60). Add validation to ensure score is between 0 and 100.</p>
            
            <p><strong>Exercise 3:</strong> Write a program that asks for three numbers and finds the largest using nested if statements.</p>
            
            <p><strong>Exercise 4:</strong> Convert this if...else to use the ternary operator:</p>
            <pre>
int a = 10, b = 20;
int max;
if (a > b) {
    max = a;
} else {
    max = b;
}</pre>
            
            <p><strong>Exercise 5:</strong> Fix the bugs in this code:</p>
            <pre>
int x = 10;
if (x = 5)
    cout << "x is 5";
else;
    cout << "x is not 5";</pre>
            
            <p><strong>Exercise 6:</strong> Write a program that asks for a year and determines if it's a leap year. (Leap year rules: divisible by 4, but not by 100 unless also divisible by 400)</p>
            
            <p><strong>Exercise 7:</strong> Create a simple login system that asks for username and password. Use if...else to check if they match predefined values.</p>
            
            <p><strong>Exercise 8:</strong> Write a program that asks for a character and determines if it's a vowel, consonant, digit, or special character.</p>
            
            <p><strong>Exercise 9:</strong> Implement a rock-paper-scissors game where the user plays against the computer. Use if...else to determine the winner.</p>
            
            <p><strong>Exercise 10:</strong> Write a program that calculates the cost of a movie ticket based on age:</p>
            <ul>
                <li>Under 5: Free</li>
                <li>5-12: $5</li>
                <li>13-59: $10</li>
                <li>60 and above: $7</li>
            </ul>
        </div>

        <!-- ==================== SECTION 12: KEY TERMS ==================== -->
        <h3>3.1.11 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Control Flow</strong>
                <p style="font-size: 12px;">Order of execution</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Condition</strong>
                <p style="font-size: 12px;">Boolean expression</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">if</strong>
                <p style="font-size: 12px;">Conditional execution</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">else</strong>
                <p style="font-size: 12px;">Alternative execution</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Nested if</strong>
                <p style="font-size: 12px;">if inside if</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Ternary</strong>
                <p style="font-size: 12px;">?: operator</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Block</strong>
                <p style="font-size: 12px;">{ } group of statements</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Validation</strong>
                <p style="font-size: 12px;">Checking input correctness</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Guard Clause</strong>
                <p style="font-size: 12px;">Early return on invalid condition</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Branching</strong>
                <p style="font-size: 12px;">Taking different paths</p>
            </div>
        </div>
        
        <!-- ==================== PREVIEW OF NEXT SECTION ==================== -->
        <div style="background: linear-gradient(135deg, #667eea20, #764ba220); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">📖 Next: 3.2 If...else if...else Statement</h4>
            <p>In the next section, we'll learn how to handle multiple conditions with if...else if...else statements.</p>
        </div>
    `,
    navigation: {
        next: "ch3-2",
        prev: null,
        nextTitle: "3.2 If...else if...else Statement",
        prevTitle: null
    }
};