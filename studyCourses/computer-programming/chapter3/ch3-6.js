// ===============================
// Computer Programming - Chapter 3.6
// Do...while Statement
// ===============================

window.currentSubsectionData = {
    title: "3.6 Do...while Statement",
    content: `
        <h2>3.6 Do...while Statement</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand the difference between while and do-while loops</li>
                <li>Learn the syntax and flow of do-while loop</li>
                <li>Master when to use do-while vs while</li>
                <li>Learn common do-while patterns</li>
                <li>Understand menu-driven programs with do-while</li>
                <li>Compare all three loop types: for, while, do-while</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: INTRODUCTION TO DO-WHILE ==================== -->
        <h3>3.6.1 Introduction to Do-While Loop</h3>
        
        <p>The <strong>do-while loop</strong> is similar to the while loop, but with one crucial difference: it <strong>always executes at least once</strong>. The condition is checked at the end of each iteration instead of at the beginning.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> A do-while loop executes a block of code once, then repeats as long as a specified condition is true. The condition is checked after each iteration.</p>
        </div>
        
        <h4>Real-World Analogy:</h4>
        <p>Think of a do-while loop like a restaurant:</p>
        <ul>
            <li>You always get one chance to order (first execution)</li>
            <li>Then the waiter asks: "Would you like to order more?" (condition check)</li>
            <li>If yes, you order again; if no, you're done</li>
        </ul>
        
        <p>This is different from a while loop, which is like checking before entering a store: "Is the store open?" If not, you never go in.</p>

        <!-- ==================== SECTION 2: DO-WHILE SYNTAX AND FLOW ==================== -->
        <h3>3.6.2 Do-While Syntax and Flow</h3>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Syntax:</strong></p>
            <pre>
do {
    // loop body - code to repeat
} while (condition);  // Note the semicolon!</pre>
        </div>
        
        <h4>Flowchart of Do-While Loop:</h4>
        <pre>
        ┌─────────────┐
        │    Start    │
        └──────┬──────┘
               ↓
        ┌─────────────┐
        │ [ Loop    ] │
        │   body      │
        └──────┬──────┘
               ↓
              ⬦─────────⬦
             ║ Condition ║
            ║   true?    ║
            ║            ║
            ║    Yes     ║ No
            ║            ║
            ║    ↓       ║
            ╚════════════╝ │
                 └─────────┘
                    ↓
              ┌─────────────┐
              │     End     │
              └─────────────┘</pre>
        
        <h4>Important Characteristics:</h4>
        <ul>
            <li>The loop body executes <strong>at least once</strong> regardless of the condition</li>
            <li>The condition is evaluated <strong>after</strong> each iteration</li>
            <li>A semicolon <strong>;</strong> is required after the while condition</li>
            <li>Use when you need to guarantee at least one execution</li>
        </ul>
        
        <h4>Simple Do-While Examples:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Example 1: Count from 1 to 5
    int i = 1;
    do {
        cout << i << " ";
        i++;
    } while (i <= 5);
    cout << endl;  // Output: 1 2 3 4 5
    
    // Example 2: Count down from 5 to 1
    int j = 5;
    do {
        cout << j << " ";
        j--;
    } while (j >= 1);
    cout << endl;  // Output: 5 4 3 2 1
    
    // Example 3: Even when condition is false, executes once
    int k = 10;
    do {
        cout << "This prints once, even though k=10 > 5" << endl;
        k++;
    } while (k <= 5);
    
    return 0;
}</pre>

        <!-- ==================== SECTION 3: WHILE VS DO-WHILE ==================== -->
        <h3>3.6.3 While vs Do-While</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Aspect</th>
                <th style="padding: 10px;">While Loop</th>
                <th style="padding: 10px;">Do-While Loop</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Condition check</td>
                <td style="padding: 10px; border: 1px solid #ddd;">At the beginning</td>
                <td style="padding: 10px; border: 1px solid #ddd;">At the end</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Minimum executions</td>
                <td style="padding: 10px; border: 1px solid #ddd;">0 (may never execute)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">1 (always executes at least once)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Syntax</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>while (cond) { }</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>do { } while (cond);</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Typical use</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Input validation, file reading</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Menus, repeated actions at least once</td>
            </tr>
        </table>
        
        <h4>Demonstrating the Difference:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int x = 10;
    
    cout << "While loop with false condition:" << endl;
    while (x < 5) {
        cout << "This will NOT print" << endl;
        x++;
    }
    
    cout << "\\nDo-while loop with false condition:" << endl;
    do {
        cout << "This WILL print once" << endl;
        x++;
    } while (x < 5);
    
    return 0;
}</pre>
        
        <p><strong>Output:</strong></p>
        <pre>
While loop with false condition:

Do-while loop with false condition:
This WILL print once</pre>

        <!-- ==================== SECTION 4: MENU-DRIVEN PROGRAMS WITH DO-WHILE ==================== -->
        <h3>3.6.4 Menu-Driven Programs with Do-While</h3>
        
        <p>The do-while loop is perfect for menu-driven programs because you always want to display the menu at least once.</p>
        
        <h4>Example 1: Simple Calculator Menu</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int choice;
    double num1, num2, result;
    
    do {
        // Display menu
        cout << "\\n===== CALCULATOR MENU =====" << endl;
        cout << "1. Add" << endl;
        cout << "2. Subtract" << endl;
        cout << "3. Multiply" << endl;
        cout << "4. Divide" << endl;
        cout << "5. Exit" << endl;
        cout << "===========================" << endl;
        cout << "Enter your choice: ";
        cin >> choice;
        
        if (choice >= 1 && choice <= 4) {
            cout << "Enter two numbers: ";
            cin >> num1 >> num2;
        }
        
        switch (choice) {
            case 1:
                result = num1 + num2;
                cout << num1 << " + " << num2 << " = " << result << endl;
                break;
            case 2:
                result = num1 - num2;
                cout << num1 << " - " << num2 << " = " << result << endl;
                break;
            case 3:
                result = num1 * num2;
                cout << num1 << " × " << num2 << " = " << result << endl;
                break;
            case 4:
                if (num2 != 0) {
                    result = num1 / num2;
                    cout << num1 << " ÷ " << num2 << " = " << result << endl;
                } else {
                    cout << "Error: Division by zero!" << endl;
                }
                break;
            case 5:
                cout << "Goodbye!" << endl;
                break;
            default:
                cout << "Invalid choice! Try again." << endl;
        }
        
    } while (choice != 5);
    
    return 0;
}</pre>
        
        <h4>Example 2: Student Grade System</h4>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;iomanip&gt;
using namespace std;

int main() {
    string name;
    double score;
    char another;
    double sum = 0;
    int count = 0;
    
    cout << "===== STUDENT GRADE SYSTEM =====" << endl;
    
    do {
        cout << "\\nEnter student name: ";
        cin >> name;
        
        cout << "Enter score for " << name << ": ";
        cin >> score;
        
        // Validate score
        while (score < 0 || score > 100) {
            cout << "Invalid score! Enter 0-100: ";
            cin >> score;
        }
        
        sum += score;
        count++;
        
        // Determine grade
        char grade;
        if (score >= 90) grade = 'A';
        else if (score >= 80) grade = 'B';
        else if (score >= 70) grade = 'C';
        else if (score >= 60) grade = 'D';
        else grade = 'F';
        
        cout << name << " scored " << score << " -> Grade: " << grade << endl;
        
        cout << "\\nEnter another student? (y/n): ";
        cin >> another;
        
    } while (another == 'y' || another == 'Y');
    
    if (count > 0) {
        cout << fixed << setprecision(2);
        cout << "\\n===== CLASS SUMMARY =====" << endl;
        cout << "Total students: " << count << endl;
        cout << "Class average: " << sum / count << endl;
    }
    
    return 0;
}</pre>

        <!-- ==================== SECTION 5: INPUT VALIDATION WITH DO-WHILE ==================== -->
        <h3>3.6.5 Input Validation with Do-While</h3>
        
        <p>Do-while is excellent for input validation because you always want to ask at least once.</p>
        
        <h4>Example 1: Validating Age</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int age;
    
    do {
        cout << "Enter your age (1-120): ";
        cin >> age;
        
        if (age < 1 || age > 120) {
            cout << "Invalid age! Please try again." << endl;
        }
    } while (age < 1 || age > 120);
    
    cout << "Valid age entered: " << age << endl;
    
    return 0;
}</pre>
        
        <h4>Example 2: Menu Choice Validation</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int choice;
    
    do {
        cout << "\\n1. Start Game" << endl;
        cout << "2. Load Game" << endl;
        cout << "3. Settings" << endl;
        cout << "4. Exit" << endl;
        cout << "Enter choice (1-4): ";
        cin >> choice;
        
        if (choice < 1 || choice > 4) {
            cout << "Invalid choice! Please enter 1-4." << endl;
        }
    } while (choice < 1 || choice > 4);
    
    cout << "You selected option " << choice << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 6: COMMON DO-WHILE PATTERNS ==================== -->
        <h3>3.6.6 Common Do-While Patterns</h3>
        
        <h4>Pattern 1: Game Loop</h4>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;cstdlib&gt;
#include &lt;ctime&gt;
using namespace std;

int main() {
    srand(time(0));
    char playAgain;
    int totalScore = 0;
    int gamesPlayed = 0;
    
    do {
        // Game setup
        int secret = rand() % 10 + 1;
        int guess;
        int attempts = 0;
        
        cout << "\\n=== NEW ROUND ===" << endl;
        cout << "Guess the number (1-10): ";
        
        do {
            cin >> guess;
            attempts++;
            
            if (guess < secret) {
                cout << "Too low! Guess again: ";
            } else if (guess > secret) {
                cout << "Too high! Guess again: ";
            }
        } while (guess != secret);
        
        cout << "Correct! You got it in " << attempts << " attempts." << endl;
        
        // Score calculation
        int score = 10 - attempts + 1;
        if (score < 0) score = 0;
        totalScore += score;
        gamesPlayed++;
        
        cout << "Round score: " << score << endl;
        cout << "Total score: " << totalScore << endl;
        
        cout << "\\nPlay again? (y/n): ";
        cin >> playAgain;
        
    } while (playAgain == 'y' || playAgain == 'Y');
    
    cout << "\\n=== GAME OVER ===" << endl;
    cout << "Games played: " << gamesPlayed << endl;
    cout << "Final score: " << totalScore << endl;
    
    return 0;
}</pre>
        
        <h4>Pattern 2: ATM Transaction Loop</h4>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;iomanip&gt;
using namespace std;

int main() {
    double balance = 1000.00;
    int choice;
    double amount;
    char another;
    
    cout << "===== ATM SIMULATOR =====" << endl;
    
    do {
        cout << "\\nCurrent Balance: $" << fixed << setprecision(2) << balance << endl;
        cout << "\\n1. Deposit" << endl;
        cout << "2. Withdraw" << endl;
        cout << "3. Check Balance" << endl;
        cout << "4. Exit" << endl;
        cout << "Choice: ";
        cin >> choice;
        
        switch (choice) {
            case 1:
                cout << "Enter amount to deposit: $";
                cin >> amount;
                if (amount > 0) {
                    balance += amount;
                    cout << "Deposit successful!" << endl;
                } else {
                    cout << "Invalid amount!" << endl;
                }
                break;
                
            case 2:
                cout << "Enter amount to withdraw: $";
                cin >> amount;
                if (amount > 0 && amount <= balance) {
                    balance -= amount;
                    cout << "Withdrawal successful!" << endl;
                } else if (amount > balance) {
                    cout << "Insufficient funds!" << endl;
                } else {
                    cout << "Invalid amount!" << endl;
                }
                break;
                
            case 3:
                cout << "Your balance: $" << balance << endl;
                break;
                
            case 4:
                cout << "Thank you for using ATM!" << endl;
                break;
                
            default:
                cout << "Invalid choice!" << endl;
        }
        
        if (choice != 4) {
            cout << "\\nPerform another transaction? (y/n): ";
            cin >> another;
        }
        
    } while (choice != 4 && (another == 'y' || another == 'Y'));
    
    return 0;
}</pre>

        <!-- ==================== SECTION 7: COMPARING ALL THREE LOOPS ==================== -->
        <h3>3.6.7 Comparing For, While, and Do-While</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Feature</th>
                <th style="padding: 10px;">For</th>
                <th style="padding: 10px;">While</th>
                <th style="padding: 10px;">Do-While</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">When condition checked</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Beginning</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Beginning</td>
                <td style="padding: 10px; border: 1px solid #ddd;">End</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Minimum executions</td>
                <td style="padding: 10px; border: 1px solid #ddd;">0</td>
                <td style="padding: 10px; border: 1px solid #ddd;">0</td>
                <td style="padding: 10px; border: 1px solid #ddd;">1</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Best for</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Counting, arrays</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Unknown iterations, validation</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Menus, at-least-once tasks</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Loop variable scope</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Often inside loop</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Outside loop</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Outside loop</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Syntax complexity</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Compact</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Simple</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Simple with semicolon</td>
            </tr>
        </table>
        
        <h4>Same Task - All Three Loops:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Task: Ask for a positive number (keep asking until valid)
    
    int num;
    
    // Using for loop (less natural)
    cout << "Using for loop:" << endl;
    for (cout << "Enter positive number: ", cin >> num; 
         num <= 0; 
         cout << "Invalid! Enter positive: ", cin >> num) {
        // Empty body
    }
    
    // Using while loop
    cout << "\\nUsing while loop:" << endl;
    cout << "Enter positive number: ";
    cin >> num;
    while (num <= 0) {
        cout << "Invalid! Enter positive: ";
        cin >> num;
    }
    
    // Using do-while loop (most natural)
    cout << "\\nUsing do-while loop:" << endl;
    do {
        cout << "Enter positive number: ";
        cin >> num;
    } while (num <= 0);
    
    cout << "Valid number: " << num << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 8: COMMON DO-WHILE MISTAKES ==================== -->
        <h3>3.6.8 Common Do-While Mistakes</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Mistake</th>
                <th style="padding: 10px;">Wrong Code</th>
                <th style="padding: 10px;">Correct Code</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Missing semicolon</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>do { ... } while (cond)</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>do { ... } while (cond);</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Using while instead of do-while</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>while (cond) { ... }</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>do { ... } while (cond);</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Forgetting braces for multiple statements</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>do<br>    cout << "Hi";<br>    x++;<br>while (x<5);</code>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>do {<br>    cout << "Hi";<br>    x++;<br>} while (x<5);</code>
                </td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Infinite loop (no update)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>int x=1;<br>do {<br>    cout << x;<br>} while (x<5);</code>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>int x=1;<br>do {<br>    cout << x;<br>    x++;<br>} while (x<5);</code>
                </td>
            </tr>
        </table>

        <!-- ==================== SECTION 9: COMPLETE EXAMPLE - QUIZ GAME ==================== -->
        <h3>3.6.9 Complete Example: Quiz Game</h3>
        
        <pre>
// ============================================
// Program: Quiz Game
// Author: CS Student
// Description: Demonstrates do-while in a quiz game
// ============================================

#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;iomanip&gt;
using namespace std;

int main() {
    string playerName;
    int score = 0;
    int totalQuestions = 0;
    char playAgain;
    int correctAnswers = 0;
    
    cout << "===== WELCOME TO THE QUIZ GAME =====" << endl;
    cout << "Enter your name: ";
    getline(cin, playerName);
    
    do {
        cout << "\\n=== QUIZ ROUND " << totalQuestions + 1 << " ===" << endl;
        
        // Question 1
        cout << "\\n1. What is the capital of France?" << endl;
        cout << "   a) London" << endl;
        cout << "   b) Paris" << endl;
        cout << "   c) Berlin" << endl;
        cout << "   d) Madrid" << endl;
        cout << "Your answer (a/b/c/d): ";
        
        char answer;
        cin >> answer;
        totalQuestions++;
        
        if (answer == 'b' || answer == 'B') {
            cout << "✓ Correct!" << endl;
            score += 10;
            correctAnswers++;
        } else {
            cout << "✗ Incorrect. The correct answer is b) Paris" << endl;
        }
        
        // Question 2
        cout << "\\n2. Which of these is NOT a programming language?" << endl;
        cout << "   a) Python" << endl;
        cout << "   b) Java" << endl;
        cout << "   c) Mercury" << endl;
        cout << "   d) C++" << endl;
        cout << "Your answer (a/b/c/d): ";
        
        cin >> answer;
        totalQuestions++;
        
        if (answer == 'c' || answer == 'C') {
            cout << "✓ Correct!" << endl;
            score += 10;
            correctAnswers++;
        } else {
            cout << "✗ Incorrect. Mercury is a planet, not a language!" << endl;
        }
        
        // Question 3
        cout << "\\n3. What does CPU stand for?" << endl;
        cout << "   a) Central Processing Unit" << endl;
        cout << "   b) Computer Personal Unit" << endl;
        cout << "   c) Central Program Utility" << endl;
        cout << "   d) Core Processing Unit" << endl;
        cout << "Your answer (a/b/c/d): ";
        
        cin >> answer;
        totalQuestions++;
        
        if (answer == 'a' || answer == 'A') {
            cout << "✓ Correct!" << endl;
            score += 10;
            correctAnswers++;
        } else {
            cout << "✗ Incorrect. CPU = Central Processing Unit" << endl;
        }
        
        // Show round summary
        cout << "\\n=== ROUND SUMMARY ===" << endl;
        cout << "Score this round: " << (correctAnswers * 10) << endl;
        cout << "Correct answers: " << correctAnswers << "/3" << endl;
        
        cout << "\\nPlay another round? (y/n): ";
        cin >> playAgain;
        
    } while (playAgain == 'y' || playAgain == 'Y');
    
    // Final results
    double percentage = (static_cast<double>(score) / (totalQuestions * 10)) * 100;
    
    cout << "\\n=================================" << endl;
    cout << "         FINAL RESULTS" << endl;
    cout << "=================================" << endl;
    cout << "Player: " << playerName << endl;
    cout << "Total questions: " << totalQuestions << endl;
    cout << "Final score: " << score << endl;
    cout << fixed << setprecision(1);
    cout << "Percentage: " << percentage << "%" << endl;
    
    if (percentage >= 90) {
        cout << "Rating: Excellent!" << endl;
    } else if (percentage >= 70) {
        cout << "Rating: Good job!" << endl;
    } else if (percentage >= 50) {
        cout << "Rating: Keep practicing!" << endl;
    } else {
        cout << "Rating: Need more study" << endl;
    }
    
    cout << "=================================" << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 10: SUMMARY ==================== -->
        <h3>3.6.10 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li><strong>Do-while loop</strong> executes at least once before checking condition</li>
                <li>Syntax: <code>do { body } while (condition);</code> - note the semicolon!</li>
                <li>Condition is checked <strong>after</strong> each iteration</li>
                <li>Use do-while when you need <strong>at least one execution</strong></li>
                <li><strong>Menu-driven programs</strong> are perfect for do-while</li>
                <li><strong>Input validation</strong> can use either while or do-while</li>
                <li>Do-while is less common than for/while, but essential for certain cases</li>
                <li>Compare all three loops to choose the right one:
                    <ul>
                        <li><strong>For</strong> - counted repetition</li>
                        <li><strong>While</strong> - condition at start</li>
                        <li><strong>Do-while</strong> - condition at end</li>
                    </ul>
                </li>
                <li>Common mistakes: missing semicolon, forgetting braces, no update</li>
            </ul>
        </div>

        <!-- ==================== SECTION 11: EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Write a program that displays a menu and uses do-while to keep showing it until the user chooses to exit. Menu options:</p>
            <pre>
1. Say Hello
2. Say Goodbye
3. Exit</pre>
            
            <p><strong>Exercise 2:</strong> Create a number guessing game using do-while. The computer picks a random number (1-20) and the user guesses until correct. Count attempts.</p>
            
            <p><strong>Exercise 3:</strong> Write a program that asks for a password using do-while. Keep asking until the correct password "cpp123" is entered.</p>
            
            <p><strong>Exercise 4:</strong> Implement a simple ATM simulation using do-while. Include options for check balance, deposit, withdraw, and exit. Use do-while for the main menu loop.</p>
            
            <p><strong>Exercise 5:</strong> Write a program that calculates the sum and average of numbers entered by the user. Use do-while to keep accepting numbers until the user enters 0.</p>
            
            <p><strong>Exercise 6:</strong> Create a multiplication table generator using do-while. Ask for a number, display its table (1-10), then ask if user wants another table.</p>
            
            <p><strong>Exercise 7:</strong> Write a program that validates user age using do-while. Age must be between 0 and 150. Keep asking until valid.</p>
            
            <p><strong>Exercise 8:</strong> Implement a simple calculator using do-while that keeps running until user chooses to exit.</p>
            
            <p><strong>Exercise 9:</strong> Write a program that asks for student grades and calculates average. Use do-while to enter multiple students, and another do-while to validate each grade (0-100).</p>
            
            <p><strong>Exercise 10:</strong> Create a rock-paper-scissors game using do-while. The computer randomly chooses, user picks, determine winner, and ask if user wants to play again.</p>
        </div>

        <!-- ==================== SECTION 12: KEY TERMS ==================== -->
        <h3>3.6.11 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Do-While</strong>
                <p style="font-size: 12px;">Post-test loop</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Post-test</strong>
                <p style="font-size: 12px;">Condition after execution</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Menu-driven</strong>
                <p style="font-size: 12px;">Program controlled by menus</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Iteration</strong>
                <p style="font-size: 12px;">One loop execution</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Guaranteed Execution</strong>
                <p style="font-size: 12px;">At least one iteration</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Loop Control</strong>
                <p style="font-size: 12px;">Managing loop execution</p>
            </div>
        </div>
        
        <!-- ==================== END OF CHAPTER 3 ==================== -->
        <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 30px; border-radius: 15px; margin: 40px 0; text-align: center; color: white;">
            <h3 style="margin: 0 0 15px 0;">📚 End of Chapter 3</h3>
            <p style="font-size: 18px; margin: 0 0 20px 0;">You have completed Chapter 3: Control Statements!</p>
            <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">3.1 If...else ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">3.2 If...else if...else ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">3.3 Switch ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">3.4 For Loop ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">3.5 While Loop ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">3.6 Do...while ✓</span>
            </div>
            <p style="margin-top: 30px;">Ready for Chapter 4: Functions!</p>
        </div>
    `,
    navigation: {
        next: null,
        prev: "ch3-5",
        nextTitle: null,
        prevTitle: "3.5 While Loop Statement"
    }
};