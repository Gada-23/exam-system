// ===============================
// Computer Programming - Chapter 3.3
// Switch Statement
// ===============================

window.currentSubsectionData = {
    title: "3.3 Switch Statement",
    content: `
        <h2>3.3 Switch Statement</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand when to use switch vs if...else if</li>
                <li>Learn the syntax and flow of switch statement</li>
                <li>Understand the role of break statements</li>
                <li>Learn about fall-through behavior</li>
                <li>Master the default case</li>
                <li>Understand switch limitations and best practices</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: INTRODUCTION TO SWITCH ==================== -->
        <h3>3.3.1 Introduction to Switch Statement</h3>
        
        <p>The <strong>switch</strong> statement is a multi-way decision-making statement that allows a program to select one of many code blocks based on the value of an expression. It's often a cleaner alternative to long if...else if chains when comparing a single variable against multiple discrete values.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> A switch statement evaluates an expression and executes the code block corresponding to the matching case label.</p>
        </div>
        
        <h4>When to Use Switch:</h4>
        <ul>
            <li>Comparing a single variable against multiple constant values</li>
            <li>Menu-driven programs with numbered options</li>
            <li>Processing enumerated types</li>
            <li>When you have many discrete cases (e.g., months, days, commands)</li>
        </ul>
        
        <h4>When NOT to Use Switch:</h4>
        <ul>
            <li>Complex conditions involving ranges (use if...else if instead)</li>
            <li>Conditions with logical operators (&&, ||)</li>
            <li>Comparing floating-point numbers</li>
            <li>When you need to test different variables</li>
        </ul>

        <!-- ==================== SECTION 2: SWITCH SYNTAX AND FLOW ==================== -->
        <h3>3.3.2 Switch Syntax and Flow</h3>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Syntax:</strong></p>
            <pre>
switch (expression) {
    case constant1:
        // code to execute if expression == constant1
        break;
    case constant2:
        // code to execute if expression == constant2
        break;
    case constant3:
        // code to execute if expression == constant3
        break;
    // more cases...
    default:
        // code to execute if no case matches
}</pre>
        </div>
        
        <h4>Flowchart of Switch Statement:</h4>
        <pre>
        ┌─────────────┐
        │    Start    │
        └──────┬──────┘
               ↓
        ┌─────────────┐
        │ Evaluate    │
        │ expression  │
        └──────┬──────┘
               ↓
        ╔══════╧══════╗
        ║    value    ║
        ╚══════╤══════╝
               ↓
     ┌─────────┴─────────┐
     ↓         ↓         ↓
┌─────────┐┌─────────┐┌─────────┐
│ case 1  ││ case 2  ││ case 3  │
│ match?  ││ match?  ││ match?  │
└────┬────┘└────┬────┘└────┬────┘
     ↓          ↓          ↓
┌─────────┐┌─────────┐┌─────────┐
│ Execute ││ Execute ││ Execute │
│ block 1 ││ block 2 ││ block 3 │
└────┬────┘└────┬────┘└────┬────┘
     ↓          ↓          ↓
┌─────────┐┌─────────┐┌─────────┐
│  break  ││  break  ││  break  │
└────┬────┘└────┬────┘└────┬────┘
     └──────────┴──────────┘
               ↓
        ┌─────────────┐
        │     End     │
        └─────────────┘</pre>
        
        <h4>Important Rules:</h4>
        <ul>
            <li>The expression must be of integer type (int, char, enum) or a type that converts to integer</li>
            <li>Case labels must be constant expressions (cannot be variables)</li>
            <li>No two case labels can have the same value</li>
            <li>The default case is optional but recommended</li>
            <li>break statement exits the switch; without it, execution "falls through"</li>
        </ul>

        <!-- ==================== SECTION 3: BASIC SWITCH EXAMPLES ==================== -->
        <h3>3.3.3 Basic Switch Examples</h3>
        
        <h4>Example 1: Day of Week</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int day;
    
    cout << "Enter day number (1-7): ";
    cin >> day;
    
    switch (day) {
        case 1:
            cout << "Monday" << endl;
            break;
        case 2:
            cout << "Tuesday" << endl;
            break;
        case 3:
            cout << "Wednesday" << endl;
            break;
        case 4:
            cout << "Thursday" << endl;
            break;
        case 5:
            cout << "Friday" << endl;
            break;
        case 6:
            cout << "Saturday" << endl;
            break;
        case 7:
            cout << "Sunday" << endl;
            break;
        default:
            cout << "Invalid day number!" << endl;
    }
    
    return 0;
}</pre>
        
        <h4>Example 2: Simple Calculator with Switch</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    char operation;
    double num1, num2, result;
    
    cout << "Enter an operator (+, -, *, /): ";
    cin >> operation;
    
    cout << "Enter two numbers: ";
    cin >> num1 >> num2;
    
    switch (operation) {
        case '+':
            result = num1 + num2;
            cout << num1 << " + " << num2 << " = " << result << endl;
            break;
        case '-':
            result = num1 - num2;
            cout << num1 << " - " << num2 << " = " << result << endl;
            break;
        case '*':
            result = num1 * num2;
            cout << num1 << " * " << num2 << " = " << result << endl;
            break;
        case '/':
            if (num2 != 0) {
                result = num1 / num2;
                cout << num1 << " / " << num2 << " = " << result << endl;
            } else {
                cout << "Error: Division by zero!" << endl;
            }
            break;
        default:
            cout << "Invalid operator!" << endl;
    }
    
    return 0;
}</pre>
        
        <h4>Example 3: Switch with Characters</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    char grade;
    
    cout << "Enter your grade (A, B, C, D, F): ";
    cin >> grade;
    
    switch (grade) {
        case 'A':
        case 'a':
            cout << "Excellent!" << endl;
            break;
        case 'B':
        case 'b':
            cout << "Good job!" << endl;
            break;
        case 'C':
        case 'c':
            cout << "Satisfactory" << endl;
            break;
        case 'D':
        case 'd':
            cout << "Needs improvement" << endl;
            break;
        case 'F':
        case 'f':
            cout << "Failed - please retake" << endl;
            break;
        default:
            cout << "Invalid grade" << endl;
    }
    
    return 0;
}</pre>
        
        <p>Note how multiple case labels can execute the same code - this is useful for handling both uppercase and lowercase input.</p>

        <!-- ==================== SECTION 4: THE BREAK STATEMENT ==================== -->
        <h3>3.3.4 The break Statement</h3>
        
        <p>The <strong>break</strong> statement is crucial in switch. It causes the program to exit the switch block. Without break, execution "falls through" to the next case.</p>
        
        <h4>Without break (Fall-through):</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int number = 2;
    
    cout << "Without break:" << endl;
    switch (number) {
        case 1:
            cout << "Case 1" << endl;
        case 2:
            cout << "Case 2" << endl;  // This executes
        case 3:
            cout << "Case 3" << endl;  // This also executes!
        case 4:
            cout << "Case 4" << endl;  // This also executes!
        default:
            cout << "Default" << endl;  // This also executes!
    }
    
    return 0;
}</pre>
        
        <p><strong>Output:</strong></p>
        <pre>
Case 2
Case 3
Case 4
Default</pre>
        
        <h4>With break (Correct behavior):</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int number = 2;
    
    cout << "With break:" << endl;
    switch (number) {
        case 1:
            cout << "Case 1" << endl;
            break;
        case 2:
            cout << "Case 2" << endl;
            break;  // Exits switch here
        case 3:
            cout << "Case 3" << endl;
            break;
        case 4:
            cout << "Case 4" << endl;
            break;
        default:
            cout << "Default" << endl;
    }
    
    return 0;
}</pre>
        
        <p><strong>Output:</strong></p>
        <pre>
Case 2</pre>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Intentional Fall-through:</strong> Sometimes fall-through is useful, like handling multiple cases that should execute the same code:</p>
            <pre>
switch (grade) {
    case 'A':
    case 'B':
    case 'C':
        cout << "Passing grade" << endl;
        break;
    case 'D':
    case 'F':
        cout << "Failing grade" << endl;
        break;
}</pre>
        </div>

        <!-- ==================== SECTION 5: THE DEFAULT CASE ==================== -->
        <h3>3.3.5 The default Case</h3>
        
        <p>The <strong>default</strong> case executes when no other case matches. It's like the final else in an if...else if chain.</p>
        
        <h4>Example with default:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int month;
    
    cout << "Enter month number (1-12): ";
    cin >> month;
    
    switch (month) {
        case 1:
            cout << "January - 31 days" << endl;
            break;
        case 2:
            cout << "February - 28 or 29 days" << endl;
            break;
        case 3:
            cout << "March - 31 days" << endl;
            break;
        case 4:
            cout << "April - 30 days" << endl;
            break;
        case 5:
            cout << "May - 31 days" << endl;
            break;
        case 6:
            cout << "June - 30 days" << endl;
            break;
        case 7:
            cout << "July - 31 days" << endl;
            break;
        case 8:
            cout << "August - 31 days" << endl;
            break;
        case 9:
            cout << "September - 30 days" << endl;
            break;
        case 10:
            cout << "October - 31 days" << endl;
            break;
        case 11:
            cout << "November - 30 days" << endl;
            break;
        case 12:
            cout << "December - 31 days" << endl;
            break;
        default:
            cout << "Invalid month number!" << endl;
    }
    
    return 0;
}</pre>
        
        <div class="warning-box" style="background: #ffe8e8; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #f5576c;">
            <p><strong>⚠️ Important:</strong> The default case can appear anywhere in the switch, but it's conventional to put it last. Even if placed elsewhere, it still only executes when no other case matches.</p>
        </div>

        <!-- ==================== SECTION 6: SWITCH WITH ENUMERATIONS ==================== -->
        <h3>3.3.6 Switch with Enumerations</h3>
        
        <p>Switch works beautifully with enum types, making code very readable.</p>
        
        <h4>Example: Traffic Light System</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

enum TrafficLight { RED, YELLOW, GREEN };

int main() {
    TrafficLight light = YELLOW;
    
    switch (light) {
        case RED:
            cout << "STOP" << endl;
            break;
        case YELLOW:
            cout << "CAUTION" << endl;
            break;
        case GREEN:
            cout << "GO" << endl;
            break;
        default:
            cout << "Invalid light" << endl;
    }
    
    return 0;
}</pre>
        
        <h4>Example: Menu System with Enum</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

enum MenuOption { PLAY = 1, LOAD, SETTINGS, HIGH_SCORES, EXIT };

int main() {
    int choice;
    
    cout << "=== GAME MENU ===" << endl;
    cout << PLAY << ". Play Game" << endl;
    cout << LOAD << ". Load Game" << endl;
    cout << SETTINGS << ". Settings" << endl;
    cout << HIGH_SCORES << ". High Scores" << endl;
    cout << EXIT << ". Exit" << endl;
    cout << "Enter choice: ";
    cin >> choice;
    
    switch (choice) {
        case PLAY:
            cout << "Starting new game..." << endl;
            break;
        case LOAD:
            cout << "Loading saved game..." << endl;
            break;
        case SETTINGS:
            cout << "Opening settings..." << endl;
            break;
        case HIGH_SCORES:
            cout << "Displaying high scores..." << endl;
            break;
        case EXIT:
            cout << "Goodbye!" << endl;
            break;
        default:
            cout << "Invalid choice!" << endl;
    }
    
    return 0;
}</pre>

        <!-- ==================== SECTION 7: SWITCH VS IF...ELSE IF ==================== -->
        <h3>3.3.7 Switch vs if...else if</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Feature</th>
                <th style="padding: 10px;">Switch</th>
                <th style="padding: 10px;">if...else if</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Expression type</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Integer, char, enum (integral types)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Any boolean expression</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Ranges</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Cannot handle ranges directly</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Excellent for ranges (x > 10 && x < 20)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Multiple conditions</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Single variable comparison</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Can combine multiple variables with &&, ||</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Readability</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Very clean for many discrete values</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Better for complex conditions</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Performance</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Can be optimized with jump table</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Sequential comparison</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Fall-through</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Possible (with or without break)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">No fall-through concept</td>
            </tr>
        </table>
        
        <h4>Example: Same Logic - Both Approaches</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int choice = 3;
    
    cout << "=== USING IF...ELSE IF ===" << endl;
    if (choice == 1) {
        cout << "Option 1 selected" << endl;
    }
    else if (choice == 2) {
        cout << "Option 2 selected" << endl;
    }
    else if (choice == 3) {
        cout << "Option 3 selected" << endl;
    }
    else if (choice == 4) {
        cout << "Option 4 selected" << endl;
    }
    else {
        cout << "Invalid option" << endl;
    }
    
    cout << "\\n=== USING SWITCH ===" << endl;
    switch (choice) {
        case 1:
            cout << "Option 1 selected" << endl;
            break;
        case 2:
            cout << "Option 2 selected" << endl;
            break;
        case 3:
            cout << "Option 3 selected" << endl;
            break;
        case 4:
            cout << "Option 4 selected" << endl;
            break;
        default:
            cout << "Invalid option" << endl;
    }
    
    return 0;
}</pre>

        <!-- ==================== SECTION 8: COMMON SWITCH MISTAKES ==================== -->
        <h3>3.3.8 Common Switch Mistakes</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Mistake</th>
                <th style="padding: 10px;">Wrong Code</th>
                <th style="padding: 10px;">Correct Code</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Forgetting break</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>case 1: cout << "One";<br>case 2: cout << "Two";</code>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>case 1: cout << "One"; break;<br>case 2: cout << "Two"; break;</code>
                </td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Using variable in case</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>int x = 5;<br>case x: // ERROR!</code>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>const int X = 5;<br>case X: // OK</code>
                </td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Duplicate case values</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>case 1: ...<br>case 1: ... // ERROR</code>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    Use different values or combine with fall-through
                </td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Using floating-point</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>switch (3.14) // ERROR</code>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    Switch only works with integral types
                </td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Missing default</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>switch(x) { case 1: ... }</code>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    Always include default for safety
                </td>
            </tr>
        </table>

        <!-- ==================== SECTION 9: ADVANCED SWITCH EXAMPLES ==================== -->
        <h3>3.3.9 Advanced Switch Examples</h3>
        
        <h4>Example 1: Nested Switch</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int category, item;
    
    cout << "Select category (1-Food, 2-Clothing, 3-Electronics): ";
    cin >> category;
    
    switch (category) {
        case 1: // Food
            cout << "Select item:\\n1-Bread\\n2-Milk\\n3-Eggs\\n";
            cin >> item;
            switch (item) {
                case 1:
                    cout << "Bread - $2.99" << endl;
                    break;
                case 2:
                    cout << "Milk - $3.49" << endl;
                    break;
                case 3:
                    cout << "Eggs - $4.99" << endl;
                    break;
                default:
                    cout << "Invalid food item" << endl;
            }
            break;
            
        case 2: // Clothing
            cout << "Select item:\\n1-Shirt\\n2-Pants\\n3-Shoes\\n";
            cin >> item;
            switch (item) {
                case 1:
                    cout << "Shirt - $19.99" << endl;
                    break;
                case 2:
                    cout << "Pants - $29.99" << endl;
                    break;
                case 3:
                    cout << "Shoes - $49.99" << endl;
                    break;
                default:
                    cout << "Invalid clothing item" << endl;
            }
            break;
            
        case 3: // Electronics
            cout << "Select item:\\n1-Phone\\n2-Laptop\\n3-Tablet\\n";
            cin >> item;
            switch (item) {
                case 1:
                    cout << "Phone - $599.99" << endl;
                    break;
                case 2:
                    cout << "Laptop - $999.99" << endl;
                    break;
                case 3:
                    cout << "Tablet - $399.99" << endl;
                    break;
                default:
                    cout << "Invalid electronics item" << endl;
            }
            break;
            
        default:
            cout << "Invalid category" << endl;
    }
    
    return 0;
}</pre>
        
        <h4>Example 2: Switch with Ranges (using fall-through)</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int score;
    
    cout << "Enter your score (0-100): ";
    cin >> score;
    
    // Convert score to grade category
    int category = score / 10;
    
    switch (category) {
        case 10:
        case 9:
            cout << "Grade: A" << endl;
            break;
        case 8:
            cout << "Grade: B" << endl;
            break;
        case 7:
            cout << "Grade: C" << endl;
            break;
        case 6:
            cout << "Grade: D" << endl;
            break;
        case 5:
        case 4:
        case 3:
        case 2:
        case 1:
        case 0:
            cout << "Grade: F" << endl;
            break;
        default:
            cout << "Invalid score" << endl;
    }
    
    return 0;
}</pre>
        
        <h4>Example 3: Complete Menu System</h4>
        
        <pre>
// ============================================
// Program: Bank ATM Simulation
// Author: CS Student
// Description: Demonstrates switch for menu
// ============================================

#include &lt;iostream&gt;
#include &lt;iomanip&gt;
using namespace std;

int main() {
    int choice;
    double balance = 1000.00;
    double amount;
    
    do {
        cout << "\\n===== ATM MENU =====" << endl;
        cout << "1. Check Balance" << endl;
        cout << "2. Deposit Money" << endl;
        cout << "3. Withdraw Money" << endl;
        cout << "4. Exit" << endl;
        cout << "====================" << endl;
        cout << "Enter your choice: ";
        cin >> choice;
        
        switch (choice) {
            case 1:
                cout << fixed << setprecision(2);
                cout << "Current balance: $" << balance << endl;
                break;
                
            case 2:
                cout << "Enter amount to deposit: $";
                cin >> amount;
                if (amount > 0) {
                    balance += amount;
                    cout << "Deposit successful!" << endl;
                    cout << "New balance: $" << balance << endl;
                } else {
                    cout << "Invalid amount!" << endl;
                }
                break;
                
            case 3:
                cout << "Enter amount to withdraw: $";
                cin >> amount;
                if (amount > 0 && amount <= balance) {
                    balance -= amount;
                    cout << "Withdrawal successful!" << endl;
                    cout << "New balance: $" << balance << endl;
                } else if (amount > balance) {
                    cout << "Insufficient funds!" << endl;
                } else {
                    cout << "Invalid amount!" << endl;
                }
                break;
                
            case 4:
                cout << "Thank you for using our ATM. Goodbye!" << endl;
                break;
                
            default:
                cout << "Invalid choice. Please try again." << endl;
        }
    } while (choice != 4);
    
    return 0;
}</pre>

        <!-- ==================== SECTION 10: SUMMARY ==================== -->
        <h3>3.3.10 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li><strong>Switch</strong> is used for multi-way decisions based on a single integral value</li>
                <li>Case labels must be <strong>constants</strong> (literals or const variables)</li>
                <li>Each case should typically end with a <strong>break</strong> to prevent fall-through</li>
                <li><strong>Fall-through</strong> can be used intentionally for multiple cases sharing code</li>
                <li>Always include a <strong>default</strong> case to handle unexpected values</li>
                <li>Switch works with <strong>int, char, enum</strong> and other integral types</li>
                <li>Switch is <strong>more readable</strong> than long if...else if chains for discrete values</li>
                <li>Switch cannot handle <strong>ranges</strong> or complex conditions directly</li>
                <li>Switch with <strong>enum</strong> creates very clean, maintainable code</li>
                <li>Remember that <strong>break</strong> exits the entire switch, not just the case</li>
            </ul>
        </div>

        <!-- ==================== SECTION 11: EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Write a program that uses switch to display the number of days in a month. Ask for month number (1-12) and display the number of days.</p>
            
            <p><strong>Exercise 2:</strong> Create a vowel/consonant checker using switch. Ask for a letter and determine if it's a vowel (a, e, i, o, u - both cases) or consonant.</p>
            
            <p><strong>Exercise 3:</strong> Write a simple calculator using switch that performs +, -, *, /, % based on operator input. Include error handling for division by zero.</p>
            
            <p><strong>Exercise 4:</strong> Create a program that converts numerical grades (0-100) to letter grades using switch with ranges (hint: divide score by 10).</p>
            
            <p><strong>Exercise 5:</strong> Implement a traffic light simulation. Ask for a color (R, Y, G) and display the appropriate action. Use switch with char.</p>
            
            <p><strong>Exercise 6:</strong> Write a program that asks for a number (1-5) and displays it in words (One, Two, etc.). Use switch. Add a default case for invalid input.</p>
            
            <p><strong>Exercise 7:</strong> Create a simple food ordering system:</p>
            <ul>
                <li>Display a menu with 5 items and prices</li>
                <li>Let user select an item (1-5)</li>
                <li>Ask for quantity</li>
                <li>Calculate and display total</li>
            </ul>
            <p>Use switch for item selection.</p>
            
            <p><strong>Exercise 8:</strong> Fix this code (what's wrong?):</p>
            <pre>
int x = 5;
switch (x) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        cout << "Between 1 and 5";
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        cout << "Between 6 and 10";
}</pre>
            
            <p><strong>Exercise 9:</strong> Create an enum called Season (SPRING, SUMMER, FALL, WINTER). Write a program that asks for a month number and uses switch to determine and display the season.</p>
            
            <p><strong>Exercise 10:</strong> Write a program that simulates a vending machine:</p>
            <ul>
                <li>Display 5 products with codes (A1, A2, B1, B2, C1)</li>
                <li>Let user enter a code</li>
                <li>Use switch to process the code (hint: you'll need to handle two characters)</li>
                <li>Display product name and price</li>
            </ul>
        </div>

        <!-- ==================== SECTION 12: KEY TERMS ==================== -->
        <h3>3.3.11 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Switch</strong>
                <p style="font-size: 12px;">Multi-way selection statement</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Case</strong>
                <p style="font-size: 12px;">Label for a specific value</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Break</strong>
                <p style="font-size: 12px;">Exits switch statement</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Default</strong>
                <p style="font-size: 12px;">Catches all unmatched cases</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Fall-through</strong>
                <p style="font-size: 12px;">Execution continues to next case</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Case Label</strong>
                <p style="font-size: 12px;">Constant value after 'case'</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Integral Type</strong>
                <p style="font-size: 12px;">int, char, enum, etc.</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Jump Table</strong>
                <p style="font-size: 12px;">Optimization for switch</p>
            </div>
        </div>
        
        <!-- ==================== PREVIEW OF NEXT SECTION ==================== -->
        <div style="background: linear-gradient(135deg, #667eea20, #764ba220); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">📖 Next: 3.4 For Loop Statement</h4>
            <p>In the next section, we'll learn about loops - starting with the for loop for counted repetition.</p>
        </div>
    `,
    navigation: {
        next: "ch3-4",
        prev: "ch3-2",
        nextTitle: "3.4 For Loop Statement",
        prevTitle: "3.2 If...else if...else Statement"
    }
};