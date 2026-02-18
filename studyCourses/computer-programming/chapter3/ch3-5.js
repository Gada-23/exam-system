// ===============================
// Computer Programming - Chapter 3.5
// While Loop Statement
// ===============================

window.currentSubsectionData = {
    title: "3.5 While Loop Statement",
    content: `
        <h2>3.5 While Loop Statement</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand when to use while loops vs for loops</li>
                <li>Learn the syntax and flow of while loop</li>
                <li>Master condition-controlled iteration</li>
                <li>Learn common while loop patterns</li>
                <li>Understand input validation with while loops</li>
                <li>Learn about sentinel-controlled loops</li>
                <li>Understand the differences between while and do-while loops</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: INTRODUCTION TO WHILE LOOPS ==================== -->
        <h3>3.5.1 Introduction to While Loops</h3>
        
        <p>The <strong>while loop</strong> is a fundamental looping structure that repeats a block of code as long as a condition remains true. Unlike the for loop, which is typically used when you know the number of iterations in advance, the while loop is ideal when:</p>
        <ul>
            <li>You don't know how many times the loop will execute</li>
            <li>The loop depends on user input or external conditions</li>
            <li>You need to validate input until it's correct</li>
            <li>You're reading data until a special value (sentinel) is encountered</li>
        </ul>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> A while loop executes a block of code repeatedly as long as a specified condition is true. The condition is checked before each iteration.</p>
        </div>
        
        <h4>Real-World Analogy:</h4>
        <p>Think of a while loop like a vending machine:</p>
        <ul>
            <li>While (money_inserted >= item_price) {
            <li>    dispense_item();</li>
            <li>    money_inserted -= item_price;</li>
            <li>}</li>
        </ul>
        <p>The machine keeps dispensing items as long as there's enough money.</p>

        <!-- ==================== SECTION 2: WHILE LOOP SYNTAX AND FLOW ==================== -->
        <h3>3.5.2 While Loop Syntax and Flow</h3>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Syntax:</strong></p>
            <pre>
while (condition) {
    // loop body - code to repeat
}</pre>
        </div>
        
        <h4>Flowchart of While Loop:</h4>
        <pre>
        ┌─────────────┐
        │    Start    │
        └──────┬──────┘
               ↓
              ⬦←─────────┐
             ║ Condition ║ │
            ║   true?    ║ │
            ║            ║ │
            ║    Yes     ║ │ No
            ║            ║ │
            ║    ↓       ║ │
            ║ [ Loop    ]║ │
            ║   body     ║ │
            ║    ↓       ║ │
            ╚════════════╝ │
                 └─────────┘
                    ↓
              ┌─────────────┐
              │     End     │
              └─────────────┘</pre>
        
        <h4>Important Characteristics:</h4>
        <ul>
            <li>The condition is evaluated <strong>before</strong> each iteration</li>
            <li>If the condition is initially false, the loop body never executes</li>
            <li>The loop must eventually make the condition false, or it will run forever</li>
            <li>You must update variables inside the loop to avoid infinite loops</li>
        </ul>
        
        <h4>Simple While Loop Examples:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Example 1: Count from 1 to 5
    int i = 1;
    while (i <= 5) {
        cout << i << " ";
        i++;
    }
    cout << endl;  // Output: 1 2 3 4 5
    
    // Example 2: Count down from 5 to 1
    int j = 5;
    while (j >= 1) {
        cout << j << " ";
        j--;
    }
    cout << endl;  // Output: 5 4 3 2 1
    
    // Example 3: Sum of numbers 1 to 10
    int k = 1, sum = 0;
    while (k <= 10) {
        sum += k;
        k++;
    }
    cout << "Sum 1-10 = " << sum << endl;  // 55
    
    return 0;
}</pre>

        <!-- ==================== SECTION 3: FOR VS WHILE ==================== -->
        <h3>3.5.3 For Loop vs While Loop</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Aspect</th>
                <th style="padding: 10px;">For Loop</th>
                <th style="padding: 10px;">While Loop</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Best used when</td>
                <td style="padding: 10px; border: 1px solid #ddd;">You know number of iterations</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Number of iterations unknown</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Loop control</td>
                <td style="padding: 10px; border: 1px solid #ddd;">All in one line</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Spread throughout</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Readability for counting</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Excellent</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Good, but more verbose</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Risk of infinite loop</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Lower (all in one place)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Higher (must remember to update)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Typical use</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Processing arrays, counting</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Input validation, file reading</td>
            </tr>
        </table>
        
        <h4>Same Task - Both Loops:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Task: Print numbers 1 to 5
    
    cout << "Using for loop: ";
    for (int i = 1; i <= 5; i++) {
        cout << i << " ";
    }
    cout << endl;
    
    cout << "Using while loop: ";
    int i = 1;
    while (i <= 5) {
        cout << i << " ";
        i++;
    }
    cout << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 4: INPUT VALIDATION WITH WHILE ==================== -->
        <h3>3.5.4 Input Validation with While Loops</h3>
        
        <p>One of the most common uses of while loops is to validate user input - keep asking until the user enters valid data.</p>
        
        <h4>Example 1: Validating Age Input</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int age;
    
    cout << "Enter your age (1-120): ";
    cin >> age;
    
    // Keep asking while input is invalid
    while (age < 1 || age > 120) {
        cout << "Invalid age! Please enter 1-120: ";
        cin >> age;
    }
    
    cout << "Valid age entered: " << age << endl;
    
    return 0;
}</pre>
        
        <h4>Example 2: Menu Choice Validation</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int choice;
    
    cout << "Menu:\\n";
    cout << "1. Start Game\\n";
    cout << "2. Load Game\\n";
    cout << "3. Settings\\n";
    cout << "4. Exit\\n";
    
    cout << "Enter choice (1-4): ";
    cin >> choice;
    
    // Validate choice
    while (choice < 1 || choice > 4) {
        cout << "Invalid choice! Enter 1-4: ";
        cin >> choice;
    }
    
    cout << "You selected option " << choice << endl;
    
    return 0;
}</pre>
        
        <h4>Example 3: Validating Multiple Inputs</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int hours, minutes, seconds;
    
    cout << "Enter time (hours minutes seconds): ";
    cin >> hours >> minutes >> seconds;
    
    // Validate hours
    while (hours < 0 || hours > 23) {
        cout << "Hours must be 0-23. Re-enter hours: ";
        cin >> hours;
    }
    
    // Validate minutes
    while (minutes < 0 || minutes > 59) {
        cout << "Minutes must be 0-59. Re-enter minutes: ";
        cin >> minutes;
    }
    
    // Validate seconds
    while (seconds < 0 || seconds > 59) {
        cout << "Seconds must be 0-59. Re-enter seconds: ";
        cin >> seconds;
    }
    
    cout << "Valid time: " << hours << ":" << minutes << ":" << seconds << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 5: SENTINEL-CONTROLLED LOOPS ==================== -->
        <h3>3.5.5 Sentinel-Controlled Loops</h3>
        
        <p>A <strong>sentinel</strong> is a special value that signals the end of input. This is useful when you don't know how many items the user will enter.</p>
        
        <h4>Example 1: Summing Numbers Until Zero</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int number;
    int sum = 0;
    int count = 0;
    
    cout << "Enter numbers to sum (enter 0 to stop):" << endl;
    
    cout << "Enter number 1: ";
    cin >> number;
    
    while (number != 0) {
        sum += number;
        count++;
        
        cout << "Enter number " << count + 1 << ": ";
        cin >> number;
    }
    
    cout << "\\nSum of " << count << " numbers = " << sum << endl;
    if (count > 0) {
        cout << "Average = " << static_cast<double>(sum) / count << endl;
    }
    
    return 0;
}</pre>
        
        <h4>Example 2: Grade Entry with -1 Sentinel</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    double score;
    double sum = 0;
    int count = 0;
    int passed = 0;
    
    cout << "Enter exam scores (-1 to stop):" << endl;
    
    cout << "Score 1: ";
    cin >> score;
    
    while (score != -1) {
        // Validate score
        while (score < 0 || score > 100) {
            cout << "Invalid! Enter 0-100 or -1 to stop: ";
            cin >> score;
            if (score == -1) break;
        }
        
        if (score == -1) break;
        
        sum += score;
        count++;
        
        if (score >= 60) {
            passed++;
        }
        
        cout << "Score " << count + 1 << ": ";
        cin >> score;
    }
    
    if (count > 0) {
        cout << "\\n=== Results ===" << endl;
        cout << "Total students: " << count << endl;
        cout << "Class average: " << sum / count << endl;
        cout << "Passed: " << passed << " (" 
             << (passed * 100.0 / count) << "%)" << endl;
        cout << "Failed: " << count - passed << endl;
    } else {
        cout << "No scores entered." << endl;
    }
    
    return 0;
}</pre>

        <!-- ==================== SECTION 6: FLAG-CONTROLLED LOOPS ==================== -->
        <h3>3.5.6 Flag-Controlled Loops</h3>
        
        <p>Sometimes you need to continue a loop based on a condition that might change inside the loop. Using a boolean flag makes this clear.</p>
        
        <h4>Example 1: Guessing Game with Flag</h4>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;cstdlib&gt;
#include &lt;ctime&gt;
using namespace std;

int main() {
    srand(time(0));
    int secret = rand() % 100 + 1;
    int guess;
    bool found = false;
    int attempts = 0;
    
    cout << "I'm thinking of a number between 1 and 100." << endl;
    
    while (!found) {
        cout << "Enter your guess: ";
        cin >> guess;
        attempts++;
        
        if (guess == secret) {
            found = true;
            cout << "Correct! You got it in " << attempts << " attempts." << endl;
        } else if (guess < secret) {
            cout << "Too low! Try again." << endl;
        } else {
            cout << "Too high! Try again." << endl;
        }
    }
    
    return 0;
}</pre>
        
        <h4>Example 2: Prime Number Checker with Flag</h4>
        
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
        int i = 2;
        while (i <= num / 2 && isPrime) {
            if (num % i == 0) {
                isPrime = false;
            }
            i++;
        }
    }
    
    if (isPrime) {
        cout << num << " is prime." << endl;
    } else {
        cout << num << " is not prime." << endl;
    }
    
    return 0;
}</pre>

        <!-- ==================== SECTION 7: INFINITE LOOPS AND HOW TO AVOID THEM ==================== -->
        <h3>3.5.7 Infinite Loops and How to Avoid Them</h3>
        
        <p>An <strong>infinite loop</strong> occurs when the condition never becomes false. These can crash your program or make it unresponsive.</p>
        
        <h4>Common Causes of Infinite Loops:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Mistake 1: Forgetting to update loop variable
    int i = 1;
    while (i <= 5) {
        cout << i << " ";
        // i++;  // MISSING! Infinite loop!
    }
    
    // Mistake 2: Using assignment instead of comparison
    int choice = 1;
    while (choice = 1) {  // = not ==
        cout << "Menu option..." << endl;
        // This condition is always true!
    }
    
    // Mistake 3: Wrong condition logic
    int j = 1;
    while (j != 5) {
        cout << j << " ";
        j += 2;  // j becomes 1,3,5,7,... never equals 5
    }
    
    // Mistake 4: Semicolon after while
    int k = 1;
    while (k <= 5); {  // Extra semicolon!
        cout << k << " ";
        k++;
    }
    
    return 0;
}</pre>
        
        <h4>How to Prevent Infinite Loops:</h4>
        <ul>
            <li>Always ensure the loop variable is updated inside the loop</li>
            <li>Double-check your condition logic</li>
            <li>Use a counter as a safety net for complex loops</li>
            <li>Test with boundary conditions</li>
        </ul>
        
        <pre>
// Safety pattern: Add a maximum iteration limit
int count = 0;
int maxIterations = 1000;

while (condition && count < maxIterations) {
    // loop body
    count++;
    
    if (count >= maxIterations) {
        cout << "Warning: Loop exceeded maximum iterations!" << endl;
        break;
    }
}</pre>

        <!-- ==================== SECTION 8: COMMON WHILE LOOP PATTERNS ==================== -->
        <h3>3.5.8 Common While Loop Patterns</h3>
        
        <h4>Pattern 1: Reading Until End of File</h4>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;fstream&gt;
using namespace std;

int main() {
    ifstream file("data.txt");
    int number;
    
    while (file >> number) {
        cout << number << " ";
    }
    
    file.close();
    return 0;
}</pre>
        
        <h4>Pattern 2: Process Until User Wants to Stop</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    char choice = 'y';
    int total = 0;
    
    while (choice == 'y' || choice == 'Y') {
        int num;
        cout << "Enter a number: ";
        cin >> num;
        total += num;
        
        cout << "Add another? (y/n): ";
        cin >> choice;
    }
    
    cout << "Total = " << total << endl;
    
    return 0;
}</pre>
        
        <h4>Pattern 3: Finding Digits of a Number</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int num;
    cout << "Enter a number: ";
    cin >> num;
    
    int temp = num;
    int digitCount = 0;
    int sum = 0;
    
    while (temp > 0) {
        int digit = temp % 10;
        cout << "Digit: " << digit << endl;
        sum += digit;
        digitCount++;
        temp /= 10;
    }
    
    cout << num << " has " << digitCount << " digits" << endl;
    cout << "Sum of digits = " << sum << endl;
    
    return 0;
}</pre>
        
        <h4>Pattern 4: Reversing a Number</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int num;
    cout << "Enter a number: ";
    cin >> num;
    
    int reversed = 0;
    int original = num;
    
    while (num > 0) {
        int digit = num % 10;
        reversed = reversed * 10 + digit;
        num /= 10;
    }
    
    cout << original << " reversed = " << reversed << endl;
    
    return 0;
}</pre>
        
        <h4>Pattern 5: Binary to Decimal Conversion</h4>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;cmath&gt;
using namespace std;

int main() {
    long long binary;
    int decimal = 0;
    int power = 0;
    
    cout << "Enter a binary number: ";
    cin >> binary;
    
    long long temp = binary;
    
    while (temp > 0) {
        int digit = temp % 10;
        if (digit != 0 && digit != 1) {
            cout << "Invalid binary number!" << endl;
            return 1;
        }
        decimal += digit * pow(2, power);
        temp /= 10;
        power++;
    }
    
    cout << binary << " in decimal = " << decimal << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 9: NESTED WHILE LOOPS ==================== -->
        <h3>3.5.9 Nested While Loops</h3>
        
        <p>Just like for loops, while loops can be nested inside each other.</p>
        
        <h4>Example 1: Multiplication Table with While</h4>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;iomanip&gt;
using namespace std;

int main() {
    int i = 1;
    
    cout << "Multiplication Table:" << endl;
    
    while (i <= 10) {
        int j = 1;
        while (j <= 10) {
            cout << setw(4) << i * j;
            j++;
        }
        cout << endl;
        i++;
    }
    
    return 0;
}</pre>
        
        <h4>Example 2: Pattern Printing with While</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int rows = 5;
    int i = 1;
    
    cout << "Right Triangle Pattern:" << endl;
    while (i <= rows) {
        int j = 1;
        while (j <= i) {
            cout << "* ";
            j++;
        }
        cout << endl;
        i++;
    }
    
    cout << "\\nNumber Pattern:" << endl;
    i = 1;
    while (i <= rows) {
        int j = 1;
        while (j <= i) {
            cout << j << " ";
            j++;
        }
        cout << endl;
        i++;
    }
    
    return 0;
}</pre>

        <!-- ==================== SECTION 10: COMPLETE EXAMPLE - BANKING SYSTEM ==================== -->
        <h3>3.5.10 Complete Example: Banking System with While Loops</h3>
        
        <pre>
// ============================================
// Program: Banking System
// Author: CS Student
// Description: Demonstrates while loops in a banking application
// ============================================

#include &lt;iostream&gt;
#include &lt;iomanip&gt;
using namespace std;

int main() {
    double balance = 1000.00;
    int choice;
    double amount;
    char another = 'y';
    
    cout << "===== SIMPLE BANKING SYSTEM =====" << endl;
    
    while (another == 'y' || another == 'Y') {
        // Display menu
        cout << "\\n--- Main Menu ---" << endl;
        cout << "1. Check Balance" << endl;
        cout << "2. Deposit Money" << endl;
        cout << "3. Withdraw Money" << endl;
        cout << "4. Exit" << endl;
        
        // Get and validate choice
        cout << "Enter choice (1-4): ";
        cin >> choice;
        
        while (choice < 1 || choice > 4) {
            cout << "Invalid choice! Enter 1-4: ";
            cin >> choice;
        }
        
        // Process choice
        switch (choice) {
            case 1:
                cout << fixed << setprecision(2);
                cout << "Current Balance: $" << balance << endl;
                break;
                
            case 2:
                cout << "Enter amount to deposit: $";
                cin >> amount;
                
                // Validate deposit amount
                while (amount <= 0) {
                    cout << "Amount must be positive! Enter again: $";
                    cin >> amount;
                }
                
                balance += amount;
                cout << "Deposit successful!" << endl;
                cout << "New Balance: $" << balance << endl;
                break;
                
            case 3:
                cout << "Enter amount to withdraw: $";
                cin >> amount;
                
                // Validate withdrawal amount
                while (amount <= 0 || amount > balance) {
                    if (amount <= 0) {
                        cout << "Amount must be positive! Enter again: $";
                    } else {
                        cout << "Insufficient funds! Max withdrawal: $" 
                             << balance << endl;
                        cout << "Enter amount: $";
                    }
                    cin >> amount;
                }
                
                balance -= amount;
                cout << "Withdrawal successful!" << endl;
                cout << "New Balance: $" << balance << endl;
                break;
                
            case 4:
                cout << "Thank you for banking with us!" << endl;
                another = 'n';
                break;
        }
        
        if (choice != 4) {
            cout << "\\nPerform another transaction? (y/n): ";
            cin >> another;
        }
    }
    
    return 0;
}</pre>

        <!-- ==================== SECTION 11: SUMMARY ==================== -->
        <h3>3.5.11 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li><strong>While loop</strong> repeats as long as condition is true</li>
                <li>Syntax: <code>while (condition) { body }</code></li>
                <li>Condition is checked <strong>before</strong> each iteration</li>
                <li>If condition is initially false, body never executes</li>
                <li>Use while when <strong>number of iterations is unknown</strong></li>
                <li><strong>Input validation</strong> is a common use: keep asking until valid</li>
                <li><strong>Sentinel-controlled loops</strong> use a special value to stop</li>
                <li><strong>Flag-controlled loops</strong> use boolean variables for complex conditions</li>
                <li><strong>Infinite loops</strong> happen when condition never becomes false</li>
                <li>Always ensure loop variables are updated inside the loop</li>
                <li>Nested while loops work like nested for loops</li>
            </ul>
        </div>

        <!-- ==================== SECTION 12: EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Write a program that keeps asking for a password until the user enters the correct one. Use a while loop.</p>
            
            <p><strong>Exercise 2:</strong> Create a program that calculates the sum of numbers entered by the user. Stop when the user enters 0. Display the sum and average.</p>
            
            <p><strong>Exercise 3:</strong> Write a program that asks for a number and counts how many digits it has using a while loop.</p>
            
            <p><strong>Exercise 4:</strong> Implement a simple guessing game where the computer picks a random number (1-100) and the user keeps guessing until correct. Count attempts.</p>
            
            <p><strong>Exercise 5:</strong> Write a program that validates user input for a menu (1-5). Keep asking until valid choice is entered.</p>
            
            <p><strong>Exercise 6:</strong> Create a program that finds and displays all factors of a number using a while loop.</p>
            
            <p><strong>Exercise 7:</strong> Write a program that reverses a number using a while loop (e.g., 1234 becomes 4321).</p>
            
            <p><strong>Exercise 8:</strong> Implement a simple calculator that keeps running until the user chooses to exit. Use a while loop for the main program loop.</p>
            
            <p><strong>Exercise 9:</strong> Write a program that asks for numbers and determines the largest and smallest. Stop when user enters 0.</p>
            
            <p><strong>Exercise 10:</strong> Create a pattern using nested while loops:</p>
            <pre>
1
2 3
4 5 6
7 8 9 10</pre>
        </div>

        <!-- ==================== SECTION 13: KEY TERMS ==================== -->
        <h3>3.5.12 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">While Loop</strong>
                <p style="font-size: 12px;">Condition-controlled loop</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Condition</strong>
                <p style="font-size: 12px;">Boolean expression controlling loop</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Iteration</strong>
                <p style="font-size: 12px;">One execution of loop body</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Sentinel</strong>
                <p style="font-size: 12px;">Special value to end loop</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Flag</strong>
                <p style="font-size: 12px;">Boolean variable controlling loop</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Infinite Loop</strong>
                <p style="font-size: 12px;">Loop that never ends</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Input Validation</strong>
                <p style="font-size: 12px;">Checking input correctness</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Nested Loop</strong>
                <p style="font-size: 12px;">Loop inside another loop</p>
            </div>
        </div>
        
        <!-- ==================== PREVIEW OF NEXT SECTION ==================== -->
        <div style="background: linear-gradient(135deg, #667eea20, #764ba220); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">📖 Next: 3.6 Do...while Statement</h4>
            <p>In the next section, we'll learn about do-while loops - the loop that always executes at least once.</p>
        </div>
    `,
    navigation: {
        next: "ch3-6",
        prev: "ch3-4",
        nextTitle: "3.6 Do...while Statement",
        prevTitle: "3.4 For Loop Statement"
    }
};