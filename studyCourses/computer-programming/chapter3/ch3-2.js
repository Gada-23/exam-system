// ===============================
// Computer Programming - Chapter 3.2
// If...else if...else Statement
// ===============================

window.currentSubsectionData = {
    title: "3.2 If...else if...else Statement",
    content: `
        <h2>3.2 If...else if...else Statement</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand when to use if...else if...else statements</li>
                <li>Learn the syntax and flow of multi-way decision making</li>
                <li>Compare if...else if...else with nested if statements</li>
                <li>Master common patterns for grading and categorization</li>
                <li>Learn best practices for ordering conditions</li>
                <li>Understand the importance of the final else clause</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: INTRODUCTION TO MULTI-WAY DECISIONS ==================== -->
        <h3>3.2.1 Introduction to Multi-Way Decisions</h3>
        
        <p>In real-world programming, we often need to make decisions with more than two possibilities. For example:</p>
        <ul>
            <li>Assigning letter grades (A, B, C, D, F) based on numeric scores</li>
            <li>Categorizing age groups (Child, Teen, Adult, Senior)</li>
            <li>Determining price tiers based on quantity purchased</li>
            <li>Processing different menu options in a program</li>
        </ul>
        
        <p>While we could use nested if statements for multiple conditions, this quickly becomes messy and hard to read. The <strong>if...else if...else</strong> statement provides a cleaner way to handle multiple conditions.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> An if...else if...else statement allows a program to choose between multiple blocks of code based on several conditions, evaluated in order.</p>
        </div>

        <!-- ==================== SECTION 2: SYNTAX AND FLOW ==================== -->
        <h3>3.2.2 Syntax and Flow of if...else if...else</h3>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Syntax:</strong></p>
            <pre>
if (condition1) {
    // code executes if condition1 is true
}
else if (condition2) {
    // code executes if condition1 is false and condition2 is true
}
else if (condition3) {
    // code executes if condition1 and condition2 are false and condition3 is true
}
...
else {
    // code executes if all above conditions are false
}</pre>
        </div>
        
        <h4>Flowchart of if...else if...else Statement:</h4>
        <pre>
        ┌─────────────┐
        │    Start    │
        └──────┬──────┘
               ↓
           ⬦─────────⬦
          ║ Condition1║
          ║   true?   ║
          ║           ║
          ║    Yes    ║ No
          ║           ║
          ║    ↓      ║    ↓
          ║ [ Block1 ]║⬦─────────⬦
          ║    ↓      ║║ Condition2║
          ╚═══════════╝║   true?   ║
               │       ║           ║
               │       ║    Yes    ║ No
               │       ║           ║
               │       ║    ↓      ║    ↓
               │       ║ [ Block2 ]║⬦─────────⬦
               │       ║    ↓      ║║ Condition3║
               │       ╚═══════════╝║   true?   ║
               │            │       ║           ║
               │            │       ║    Yes    ║ No
               │            │       ║           ║
               │            │       ║    ↓      ║    ↓
               │            │       ║ [ Block3 ]║ [ else    ]
               │            │       ║    ↓      ║   block
               │            │       ╚═══════════║    ↓
               │            │            │       ╚═══════════╗
               └────────────┴────────────┴──────────────┬───┘
                                                         ↓
                                                  ┌─────────────┐
                                                  │     End     │
                                                  └─────────────┘</pre>
        
        <h4>Important Rules:</h4>
        <ul>
            <li>Conditions are evaluated from top to bottom</li>
            <li>Once a condition is found to be true, its block executes and the rest are skipped</li>
            <li>The final <strong>else</strong> is optional but recommended for handling unexpected cases</li>
            <li>Only one block (at most) will execute</li>
        </ul>

        <!-- ==================== SECTION 3: BASIC EXAMPLES ==================== -->
        <h3>3.2.3 Basic Examples</h3>
        
        <h4>Example 1: Number Category</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int number;
    
    cout << "Enter a number: ";
    cin >> number;
    
    if (number > 0) {
        cout << number << " is positive." << endl;
    }
    else if (number < 0) {
        cout << number << " is negative." << endl;
    }
    else {
        cout << "The number is zero." << endl;
    }
    
    return 0;
}</pre>
        
        <p><strong>Sample Runs:</strong></p>
        <pre>
Enter a number: 5
5 is positive.

Enter a number: -3
-3 is negative.

Enter a number: 0
The number is zero.</pre>
        
        <h4>Example 2: Simple Grade Calculator</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int score;
    
    cout << "Enter your score (0-100): ";
    cin >> score;
    
    if (score >= 90) {
        cout << "Grade: A" << endl;
    }
    else if (score >= 80) {
        cout << "Grade: B" << endl;
    }
    else if (score >= 70) {
        cout << "Grade: C" << endl;
    }
    else if (score >= 60) {
        cout << "Grade: D" << endl;
    }
    else {
        cout << "Grade: F" << endl;
    }
    
    return 0;
}</pre>
        
        <p><strong>Sample Runs:</strong></p>
        <pre>
Enter your score (0-100): 85
Grade: B

Enter your score (0-100): 72
Grade: C

Enter your score (0-100): 45
Grade: F</pre>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Note:</strong> In the grade example, note the order of conditions. If we wrote <code>if (score >= 60)</code> first, all scores >=60 would get 'D'! The order matters.</p>
        </div>

        <!-- ==================== SECTION 4: IMPORTANCE OF CONDITION ORDER ==================== -->
        <h3>3.2.4 The Importance of Condition Order</h3>
        
        <p>The order of conditions in an if...else if chain is <strong>critical</strong>. Once a condition is true, the rest are skipped.</p>
        
        <h4>Example: Wrong Order</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int score = 95;
    
    // WRONG ORDER - this will not work correctly
    if (score >= 60) {
        cout << "Grade: D" << endl;  // This executes first!
    }
    else if (score >= 70) {
        cout << "Grade: C" << endl;  // Never reached
    }
    else if (score >= 80) {
        cout << "Grade: B" << endl;  // Never reached
    }
    else if (score >= 90) {
        cout << "Grade: A" << endl;  // Never reached
    }
    else {
        cout << "Grade: F" << endl;
    }
    
    return 0;
}</pre>
        
        <p>Output: <code>Grade: D</code> (even though score is 95!)</p>
        
        <h4>Example: Correct Order</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int score = 95;
    
    // CORRECT ORDER - most specific conditions first
    if (score >= 90) {
        cout << "Grade: A" << endl;  // This executes first
    }
    else if (score >= 80) {
        cout << "Grade: B" << endl;
    }
    else if (score >= 70) {
        cout << "Grade: C" << endl;
    }
    else if (score >= 60) {
        cout << "Grade: D" << endl;
    }
    else {
        cout << "Grade: F" << endl;
    }
    
    return 0;
}</pre>
        
        <p>Output: <code>Grade: A</code> (correct!)</p>
        
        <h4>General Rule:</h4>
        <p><strong>Place the most specific or restrictive conditions first, and more general conditions later.</strong></p>

        <!-- ==================== SECTION 5: MULTIPLE CONDITIONS PER BRANCH ==================== -->
        <h3>3.2.5 Multiple Conditions per Branch</h3>
        
        <p>You can use logical operators (&&, ||) to create complex conditions in each branch.</p>
        
        <h4>Example: Age Group Categorization</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int age;
    
    cout << "Enter your age: ";
    cin >> age;
    
    if (age < 0 || age > 150) {
        cout << "Invalid age!" << endl;
    }
    else if (age >= 0 && age <= 2) {
        cout << "Infant" << endl;
    }
    else if (age >= 3 && age <= 12) {
        cout << "Child" << endl;
    }
    else if (age >= 13 && age <= 19) {
        cout << "Teenager" << endl;
    }
    else if (age >= 20 && age <= 64) {
        cout << "Adult" << endl;
    }
    else {
        cout << "Senior" << endl;
    }
    
    return 0;
}</pre>
        
        <h4>Example: Tax Bracket Calculator</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    double income;
    double tax = 0;
    
    cout << "Enter your annual income: $";
    cin >> income;
    
    if (income <= 0) {
        cout << "No income - no tax." << endl;
        return 0;
    }
    else if (income > 0 && income <= 10000) {
        tax = income * 0.05;  // 5% tax
        cout << "Tax bracket: 5%" << endl;
    }
    else if (income > 10000 && income <= 50000) {
        tax = 10000 * 0.05 + (income - 10000) * 0.10;  // 5% on first 10k, 10% on rest
        cout << "Tax bracket: 10%" << endl;
    }
    else if (income > 50000 && income <= 100000) {
        tax = 10000 * 0.05 + 40000 * 0.10 + (income - 50000) * 0.15;
        cout << "Tax bracket: 15%" << endl;
    }
    else {
        tax = 10000 * 0.05 + 40000 * 0.10 + 50000 * 0.15 + (income - 100000) * 0.20;
        cout << "Tax bracket: 20%" << endl;
    }
    
    cout << "Tax owed: $" << tax << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 6: IF...ELSE IF VS NESTED IF ==================== -->
        <h3>3.2.6 if...else if vs Nested if</h3>
        
        <p>Both nested if and if...else if can be used for multiple conditions. Here's a comparison:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Aspect</th>
                <th style="padding: 10px;">Nested if</th>
                <th style="padding: 10px;">if...else if</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Readability</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Can get messy with deep nesting</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Cleaner, linear structure</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">When to use</td>
                <td style="padding: 10px; border: 1px solid #ddd;">When conditions are hierarchical</td>
                <td style="padding: 10px; border: 1px solid #ddd;">When conditions are mutually exclusive</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Example</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Check validity first, then grade</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Grade ranges (90+, 80+, etc.)</td>
            </tr>
        </table>
        
        <h4>Example: Same Logic - Two Approaches</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int score;
    cout << "Enter score: ";
    cin >> score;
    
    cout << "\\n--- Using nested if ---" << endl;
    if (score >= 0 && score <= 100) {
        if (score >= 90) {
            cout << "Grade: A" << endl;
        } else {
            if (score >= 80) {
                cout << "Grade: B" << endl;
            } else {
                if (score >= 70) {
                    cout << "Grade: C" << endl;
                } else {
                    if (score >= 60) {
                        cout << "Grade: D" << endl;
                    } else {
                        cout << "Grade: F" << endl;
                    }
                }
            }
        }
    } else {
        cout << "Invalid score" << endl;
    }
    
    cout << "\\n--- Using if...else if ---" << endl;
    if (score < 0 || score > 100) {
        cout << "Invalid score" << endl;
    }
    else if (score >= 90) {
        cout << "Grade: A" << endl;
    }
    else if (score >= 80) {
        cout << "Grade: B" << endl;
    }
    else if (score >= 70) {
        cout << "Grade: C" << endl;
    }
    else if (score >= 60) {
        cout << "Grade: D" << endl;
    }
    else {
        cout << "Grade: F" << endl;
    }
    
    return 0;
}</pre>
        
        <p>The if...else if version is clearly more readable!</p>

        <!-- ==================== SECTION 7: COMMON PATTERNS ==================== -->
        <h3>3.2.7 Common Patterns with if...else if</h3>
        
        <h4>Pattern 1: Range Checking</h4>
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    double temperature;
    
    cout << "Enter temperature in Celsius: ";
    cin >> temperature;
    
    if (temperature <= -10) {
        cout << "Very cold" << endl;
    }
    else if (temperature <= 0) {
        cout << "Cold" << endl;
    }
    else if (temperature <= 15) {
        cout << "Cool" << endl;
    }
    else if (temperature <= 25) {
        cout << "Warm" << endl;
    }
    else if (temperature <= 35) {
        cout << "Hot" << endl;
    }
    else {
        cout << "Very hot" << endl;
    }
    
    return 0;
}</pre>
        
        <h4>Pattern 2: Menu Processing</h4>
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int choice;
    
    cout << "Main Menu:" << endl;
    cout << "1. Start Game" << endl;
    cout << "2. Load Game" << endl;
    cout << "3. Settings" << endl;
    cout << "4. High Scores" << endl;
    cout << "5. Exit" << endl;
    cout << "Enter choice: ";
    cin >> choice;
    
    if (choice == 1) {
        cout << "Starting new game..." << endl;
        // Code to start game
    }
    else if (choice == 2) {
        cout << "Loading saved game..." << endl;
        // Code to load game
    }
    else if (choice == 3) {
        cout << "Opening settings..." << endl;
        // Code to show settings
    }
    else if (choice == 4) {
        cout << "Displaying high scores..." << endl;
        // Code to show high scores
    }
    else if (choice == 5) {
        cout << "Goodbye!" << endl;
    }
    else {
        cout << "Invalid choice!" << endl;
    }
    
    return 0;
}</pre>
        
        <h4>Pattern 3: Character Classification</h4>
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    char ch;
    
    cout << "Enter a character: ";
    cin >> ch;
    
    if (ch >= 'A' && ch <= 'Z') {
        cout << ch << " is an uppercase letter." << endl;
    }
    else if (ch >= 'a' && ch <= 'z') {
        cout << ch << " is a lowercase letter." << endl;
    }
    else if (ch >= '0' && ch <= '9') {
        cout << ch << " is a digit." << endl;
    }
    else if (ch == ' ' || ch == '\\t' || ch == '\\n') {
        cout << ch << " is whitespace." << endl;
    }
    else {
        cout << ch << " is a special character." << endl;
    }
    
    return 0;
}</pre>

        <!-- ==================== SECTION 8: THE FINAL ELSE CLAUSE ==================== -->
        <h3>3.2.8 The Importance of the Final else Clause</h3>
        
        <p>The final <strong>else</strong> clause is optional but highly recommended. It acts as a "catch-all" for unexpected cases.</p>
        
        <h4>Without else (dangerous):</h4>
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int month;
    
    cout << "Enter month number (1-12): ";
    cin >> month;
    
    if (month == 1) cout << "January" << endl;
    else if (month == 2) cout << "February" << endl;
    else if (month == 3) cout << "March" << endl;
    // ... and so on up to December
    // What if user enters 13? Nothing happens! No feedback.
    
    return 0;
}</pre>
        
        <h4>With else (safe):</h4>
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int month;
    
    cout << "Enter month number (1-12): ";
    cin >> month;
    
    if (month == 1) {
        cout << "January" << endl;
    }
    else if (month == 2) {
        cout << "February" << endl;
    }
    else if (month == 3) {
        cout << "March" << endl;
    }
    // ... and so on
    else if (month == 12) {
        cout << "December" << endl;
    }
    else {
        cout << "Invalid month number!" << endl;
    }
    
    return 0;
}</pre>

        <!-- ==================== SECTION 9: COMPLETE EXAMPLE - ADVANCED GRADE CALCULATOR ==================== -->
        <h3>3.2.9 Complete Example: Advanced Grade Calculator with +/-</h3>
        
        <pre>
// ============================================
// Program: Advanced Grade Calculator
// Author: CS Student
// Description: Calculates letter grade with +/-
// ============================================

#include &lt;iostream&gt;
using namespace std;

int main() {
    double score;
    char plusMinus = ' ';
    
    cout << "===== ADVANCED GRADE CALCULATOR =====" << endl;
    cout << "Enter your score (0-100): ";
    cin >> score;
    
    // Input validation
    if (score < 0 || score > 100) {
        cout << "Error: Score must be between 0 and 100." << endl;
        return 1;
    }
    
    // Determine letter grade
    char grade;
    if (score >= 90) {
        grade = 'A';
        // Determine + or - for A grades
        int lastDigit = static_cast<int>(score) % 10;
        if (score >= 97) {
            plusMinus = '+';
        }
        else if (score <= 92) {
            plusMinus = '-';
        }
    }
    else if (score >= 80) {
        grade = 'B';
        int lastDigit = static_cast<int>(score) % 10;
        if (lastDigit >= 7 || score >= 87.5) {
            plusMinus = '+';
        }
        else if (lastDigit <= 2 || score < 82.5) {
            plusMinus = '-';
        }
    }
    else if (score >= 70) {
        grade = 'C';
        int lastDigit = static_cast<int>(score) % 10;
        if (lastDigit >= 7 || score >= 77.5) {
            plusMinus = '+';
        }
        else if (lastDigit <= 2 || score < 72.5) {
            plusMinus = '-';
        }
    }
    else if (score >= 60) {
        grade = 'D';
        int lastDigit = static_cast<int>(score) % 10;
        if (lastDigit >= 7 || score >= 67.5) {
            plusMinus = '+';
        }
        else if (lastDigit <= 2 || score < 62.5) {
            plusMinus = '-';
        }
    }
    else {
        grade = 'F';
        // F has no + or -
    }
    
    // Display result
    cout << "\\n================================" << endl;
    cout << "Score: " << score << endl;
    cout << "Grade: " << grade;
    if (grade != 'F' && plusMinus != ' ') {
        cout << plusMinus;
    }
    cout << endl;
    
    // Additional feedback
    if (grade == 'A') {
        cout << "Excellent work!" << endl;
    }
    else if (grade == 'B') {
        cout << "Good job!" << endl;
    }
    else if (grade == 'C') {
        cout << "Satisfactory." << endl;
    }
    else if (grade == 'D') {
        cout << "Need improvement." << endl;
    }
    else {
        cout << "Please study more and try again." << endl;
    }
    cout << "================================" << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 10: COMMON MISTAKES ==================== -->
        <h3>3.2.10 Common Mistakes with if...else if</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Mistake</th>
                <th style="padding: 10px;">Wrong Code</th>
                <th style="padding: 10px;">Correct Code</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Wrong condition order</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>if (x >= 60) // D<br>else if (x >= 70) // C</code>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>if (x >= 90) // A<br>else if (x >= 80) // B</code>
                </td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Overlapping conditions</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>if (x > 0) { ... }<br>else if (x > 10) { ... }</code>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>if (x > 10) { ... }<br>else if (x > 0) { ... }</code>
                </td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Missing else for validation</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>if (x >= 0) { // process }</code>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>if (x >= 0) { // process }<br>else { // error }</code>
                </td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Using else if when if is enough</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>if (x == 1) {...}<br>else if (x == 2) {...}</code>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    This is actually correct for mutually exclusive cases
                </td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Forgetting that conditions are checked in order</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>if (x > 0) // positive<br>else if (x > 5) // >5 - never reached</code>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>if (x > 5) // >5 first<br>else if (x > 0) // then positive</code>
                </td>
            </tr>
        </table>

        <!-- ==================== SECTION 11: SUMMARY ==================== -->
        <h3>3.2.11 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li><strong>if...else if...else</strong> is used for multi-way decisions</li>
                <li>Conditions are evaluated <strong>in order from top to bottom</strong></li>
                <li>Only <strong>one block</strong> (the first true condition) executes</li>
                <li><strong>Order matters</strong> - put most specific conditions first</li>
                <li>The final <strong>else</strong> clause is optional but recommended for error handling</li>
                <li>Use <strong>logical operators</strong> (&&, ||) for complex conditions in each branch</li>
                <li>if...else if is <strong>more readable</strong> than deeply nested if statements</li>
                <li>Always consider <strong>edge cases</strong> and invalid input</li>
                <li>Use <strong>input validation</strong> as the first condition when appropriate</li>
                <li>Remember that <strong>overlapping conditions</strong> can cause logic errors</li>
            </ul>
        </div>

        <!-- ==================== SECTION 12: EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Write a program that asks for a number and classifies it as:</p>
            <ul>
                <li>"Very low" if less than 0</li>
                <li>"Low" if 0-50</li>
                <li>"Medium" if 51-100</li>
                <li>"High" if 101-500</li>
                <li>"Very high" if greater than 500</li>
            </ul>
            
            <p><strong>Exercise 2:</strong> Create a BMI calculator that categorizes:</p>
            <ul>
                <li>Underweight: BMI < 18.5</li>
                <li>Normal: 18.5 - 24.9</li>
                <li>Overweight: 25 - 29.9</li>
                <li>Obese: BMI >= 30</li>
            </ul>
            <p>Formula: BMI = weight(kg) / (height(m)²)</p>
            
            <p><strong>Exercise 3:</strong> Write a program that asks for a month number (1-12) and displays:</p>
            <ul>
                <li>The month name</li>
                <li>How many days in that month</li>
                <li>Which season it belongs to</li>
            </ul>
            <p>Use if...else if for all three pieces of information.</p>
            
            <p><strong>Exercise 4:</strong> Create a simple calculator that performs +, -, *, / based on user input. Use if...else if to handle the operator choice.</p>
            
            <p><strong>Exercise 5:</strong> Fix this code. What's wrong with the order?</p>
            <pre>
int number = 25;
if (number > 10) {
    cout << "Greater than 10";
}
else if (number > 20) {
    cout << "Greater than 20";  // This never executes!
}</pre>
            
            <p><strong>Exercise 6:</strong> Write a program that asks for a character and determines if it's:</p>
            <ul>
                <li>A vowel (a, e, i, o, u - both cases)</li>
                <li>A consonant</li>
                <li>A digit</li>
                <li>A special character</li>
            </ul>
            
            <p><strong>Exercise 7:</strong> Create a ticket pricing system:</p>
            <ul>
                <li>Children (0-12): $5</li>
                <li>Students (13-22 with valid ID): $8</li>
                <li>Adults (23-64): $12</li>
                <li>Seniors (65+): $7</li>
                <li>Military: $6 (any age)</li>
            </ul>
            <p>Ask for age and whether they have student ID or military ID. Use if...else if to determine price.</p>
            
            <p><strong>Exercise 8:</strong> Write a program that converts numerical grades (0-100) to letter grades with +/- as shown in the advanced example. Test with various scores.</p>
            
            <p><strong>Exercise 9:</strong> Create a simple ATM simulation:</p>
            <ul>
                <li>Check balance</li>
                <li>Deposit money</li>
                <li>Withdraw money (check sufficient balance)</li>
                <li>Exit</li>
            </ul>
            <p>Use if...else if for the menu options.</p>
            
            <p><strong>Exercise 10:</strong> Write a program that asks for three numbers and determines if they form a valid triangle (sum of any two sides > third side). If valid, also determine if it's:</p>
            <ul>
                <li>Equilateral (all sides equal)</li>
                <li>Isosceles (two sides equal)</li>
                <li>Scalene (no sides equal)</li>
            </ul>
        </div>

        <!-- ==================== SECTION 13: KEY TERMS ==================== -->
        <h3>3.2.12 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Multi-way Decision</strong>
                <p style="font-size: 12px;">Choosing among multiple paths</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">else if</strong>
                <p style="font-size: 12px;">Additional conditions</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Catch-all</strong>
                <p style="font-size: 12px;">Final else for unmatched cases</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Range Checking</strong>
                <p style="font-size: 12px;">Testing if value is in interval</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Mutually Exclusive</strong>
                <p style="font-size: 12px;">Only one condition can be true</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Order Dependency</strong>
                <p style="font-size: 12px;">Sequence of conditions matters</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Input Validation</strong>
                <p style="font-size: 12px;">Checking input correctness first</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Categorization</strong>
                <p style="font-size: 12px;">Grouping into categories</p>
            </div>
        </div>
        
        <!-- ==================== PREVIEW OF NEXT SECTION ==================== -->
        <div style="background: linear-gradient(135deg, #667eea20, #764ba220); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">📖 Next: 3.3 Switch Statement</h4>
            <p>In the next section, we'll learn about the switch statement - another way to handle multiple conditions, especially for discrete values.</p>
        </div>
    `,
    navigation: {
        next: "ch3-3",
        prev: "ch3-1",
        nextTitle: "3.3 Switch Statement",
        prevTitle: "3.1 If...else Statement"
    }
};