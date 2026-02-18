// ===============================
// Computer Programming - Chapter 2.3
// Sample Program
// ===============================

window.currentSubsectionData = {
    title: "2.3 Sample Program",
    content: `
        <h2>2.3 Sample Program</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Analyze complete C++ programs to understand their structure</li>
                <li>Learn how different parts of a program work together</li>
                <li>Understand input, processing, and output in real programs</li>
                <li>Practice reading and understanding existing code</li>
                <li>Learn to modify sample programs to add new features</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: INTRODUCTION ==================== -->
        <h3>2.3.1 Why Study Sample Programs?</h3>
        
        <p>Studying complete, working programs is one of the best ways to learn programming. By analyzing sample programs, you can see how all the concepts you've learned work together in practice.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Learning by Example:</strong> Just as learning a new language involves reading texts and conversations, learning programming involves reading and understanding existing code.</p>
        </div>
        
        <h4>What to Look for When Studying Sample Programs:</h4>
        <ol>
            <li><strong>Overall structure:</strong> How is the program organized?</li>
            <li><strong>Header files:</strong> What libraries are included and why?</li>
            <li><strong>Variable declarations:</strong> What data is stored and how?</li>
            <li><strong>Input/Output:</strong> How does the program interact with the user?</li>
            <li><strong>Processing logic:</strong> What calculations or operations are performed?</li>
            <li><strong>Control flow:</strong> Are there decisions or loops?</li>
            <li><strong>Functions:</strong> How is the code organized into reusable parts?</li>
            <li><strong>Output formatting:</strong> How is the result presented?</li>
        </ol>

        <!-- ==================== SECTION 2: SAMPLE PROGRAM 1 - HELLO WORLD ==================== -->
        <h3>2.3.2 Sample Program 1: Hello World</h3>
        
        <p>Let's start with the simplest C++ program that actually does something:</p>
        
        <pre>
// ===============================
// Program: Hello World
// Author: CS Student
// Description: Displays a welcome message
// ===============================

#include &lt;iostream&gt;   // For input/output operations
using namespace std;    // Use standard namespace

int main() {
    // Display welcome message
    cout << "Hello, World!" << endl;
    cout << "Welcome to C++ Programming!" << endl;
    
    return 0;  // Indicate successful completion
}</pre>
        
        <h4>Program Analysis:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Line(s)</th>
                <th style="padding: 10px;">Purpose</th>
                <th style="padding: 10px;">Explanation</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">1-5</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Documentation</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Comments that describe the program</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">7</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Preprocessor directive</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Includes iostream for cout</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">8</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Using directive</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Allows using cout instead of std::cout</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">10</td>
                <td style="padding: 10px; border: 1px solid #ddd;">main() function</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Program execution starts here</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">12-13</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Output statements</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Print messages to the console</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">15</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Return statement</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Returns 0 to indicate success</td>
            </tr>
        </table>
        
        <p><strong>Sample Output:</strong></p>
        <pre>
Hello, World!
Welcome to C++ Programming!</pre>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Try It Yourself:</strong> Type this program in your IDE, compile it, and run it. Then try modifying the message to print your own greeting.</p>
        </div>

        <!-- ==================== SECTION 3: SAMPLE PROGRAM 2 - SUM OF TWO NUMBERS ==================== -->
        <h3>2.3.3 Sample Program 2: Sum of Two Numbers</h3>
        
        <p>This program demonstrates input, processing, and output:</p>
        
        <pre>
// ===============================
// Program: Sum Calculator
// Author: CS Student
// Description: Calculates the sum of two numbers
// ===============================

#include &lt;iostream&gt;
using namespace std;

int main() {
    // Variable declarations
    double num1, num2, sum;
    
    // Input
    cout << "Enter first number: ";
    cin >> num1;
    
    cout << "Enter second number: ";
    cin >> num2;
    
    // Processing
    sum = num1 + num2;
    
    // Output
    cout << "\n========== Result ==========" << endl;
    cout << num1 << " + " << num2 << " = " << sum << endl;
    cout << "============================" << endl;
    
    return 0;
}</pre>
        
        <h4>Program Analysis:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Section</th>
                <th style="padding: 10px;">Code</th>
                <th style="padding: 10px;">Explanation</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Variable Declaration</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>double num1, num2, sum;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Declares three variables to store numbers</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Input</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>cin >> num1;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Reads a number from the user</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Processing</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>sum = num1 + num2;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Calculates the sum</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Output</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>cout << num1 << " + " << num2 << " = " << sum;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Displays the calculation with formatting</td>
            </tr>
        </table>
        
        <p><strong>Sample Run:</strong></p>
        <pre>
Enter first number: 15
Enter second number: 25

========== Result ==========
15 + 25 = 40
============================</pre>

        <!-- ==================== SECTION 4: SAMPLE PROGRAM 3 - TEMPERATURE CONVERTER ==================== -->
        <h3>2.3.4 Sample Program 3: Temperature Converter</h3>
        
        <p>This program demonstrates more complex calculations and formatted output:</p>
        
        <pre>
// ===============================
// Program: Temperature Converter
// Author: CS Student
// Description: Converts Fahrenheit to Celsius
// ===============================

#include &lt;iostream&gt;
#include &lt;iomanip&gt;   // For output formatting
using namespace std;

int main() {
    // Constants
    const double FREEZING_POINT_F = 32.0;
    const double CONVERSION_FACTOR = 5.0 / 9.0;
    
    // Variables
    double fahrenheit, celsius;
    
    // Program title
    cout << "=================================" << endl;
    cout << "    TEMPERATURE CONVERTER" << endl;
    cout << "=================================" << endl;
    
    // Input
    cout << "Enter temperature in Fahrenheit: ";
    cin >> fahrenheit;
    
    // Processing - convert to Celsius
    celsius = (fahrenheit - FREEZING_POINT_F) * CONVERSION_FACTOR;
    
    // Output with formatting
    cout << fixed << setprecision(2);  // Show 2 decimal places
    cout << "\n---------------------------------" << endl;
    cout << fahrenheit << "°F = " << celsius << "°C" << endl;
    cout << "---------------------------------" << endl;
    
    return 0;
}</pre>
        
        <h4>New Concepts Demonstrated:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Concept</th>
                <th style="padding: 10px;">Code</th>
                <th style="padding: 10px;">Purpose</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Constants</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>const double FREEZING_POINT_F = 32.0;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Values that don't change</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Additional Header</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>#include &lt;iomanip&gt;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">For formatted output</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Output Formatting</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>fixed << setprecision(2)</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Shows decimal numbers with 2 digits</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Special Characters</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>"°F"</code> and <code>"°C"</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Uses degree symbol in output</td>
            </tr>
        </table>
        
        <p><strong>Sample Run:</strong></p>
        <pre>
=================================
    TEMPERATURE CONVERTER
=================================
Enter temperature in Fahrenheit: 98.6

---------------------------------
98.60°F = 37.00°C
---------------------------------</pre>

        <!-- ==================== SECTION 5: SAMPLE PROGRAM 4 - GRADE CALCULATOR ==================== -->
        <h3>2.3.5 Sample Program 4: Grade Calculator</h3>
        
        <p>This program demonstrates decision-making (if-else statements):</p>
        
        <pre>
// ===============================
// Program: Grade Calculator
// Author: CS Student
// Description: Calculates letter grade from numeric score
// ===============================

#include &lt;iostream&gt;
using namespace std;

int main() {
    // Variables
    double score;
    char grade;
    
    // Program title
    cout << "=========================" << endl;
    cout << "    GRADE CALCULATOR" << endl;
    cout << "=========================" << endl;
    
    // Input
    cout << "Enter your score (0-100): ";
    cin >> score;
    
    // Input validation
    if (score < 0 || score > 100) {
        cout << "Error: Score must be between 0 and 100." << endl;
        return 1;  // Exit with error code
    }
    
    // Determine grade
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    
    // Output
    cout << "\n=========================" << endl;
    cout << "Score: " << score << endl;
    cout << "Grade: " << grade << endl;
    
    // Additional message based on grade
    if (grade == 'A') {
        cout << "Excellent work!" << endl;
    } else if (grade == 'B') {
        cout << "Good job!" << endl;
    } else if (grade == 'C') {
        cout << "Satisfactory." << endl;
    } else if (grade == 'D') {
        cout << "Need improvement." << endl;
    } else {
        cout << "Please study more." << endl;
    }
    cout << "=========================" << endl;
    
    return 0;
}</pre>
        
        <h4>Key Features:</h4>
        <ul>
            <li><strong>Input validation:</strong> Checks if score is within valid range</li>
            <li><strong>Multiple conditions:</strong> Uses if-else if chain for grade determination</li>
            <li><strong>Error handling:</strong> Returns 1 to indicate error for invalid input</li>
            <li><strong>Feedback messages:</strong> Different messages based on grade</li>
        </ul>
        
        <p><strong>Sample Run 1 (Valid Input):</strong></p>
        <pre>
=========================
    GRADE CALCULATOR
=========================
Enter your score (0-100): 85

=========================
Score: 85
Grade: B
Good job!
=========================</pre>
        
        <p><strong>Sample Run 2 (Invalid Input):</strong></p>
        <pre>
=========================
    GRADE CALCULATOR
=========================
Enter your score (0-100): 105
Error: Score must be between 0 and 100.</pre>

        <!-- ==================== SECTION 6: SAMPLE PROGRAM 5 - MULTIPLICATION TABLE ==================== -->
        <h3>2.3.6 Sample Program 5: Multiplication Table</h3>
        
        <p>This program demonstrates loops:</p>
        
        <pre>
// ===============================
// Program: Multiplication Table
// Author: CS Student
// Description: Displays multiplication table
// ===============================

#include &lt;iostream&gt;
#include &lt;iomanip&gt;
using namespace std;

int main() {
    int number;
    
    cout << "=========================" << endl;
    cout << "  MULTIPLICATION TABLE" << endl;
    cout << "=========================" << endl;
    
    // Input
    cout << "Enter a number: ";
    cin >> number;
    
    cout << "\nMultiplication Table for " << number << ":" << endl;
    cout << "=========================" << endl;
    
    // Display table using loop
    for (int i = 1; i <= 10; i++) {
        cout << setw(2) << i << " × " << setw(2) << number 
             << " = " << setw(3) << i * number << endl;
    }
    
    cout << "=========================" << endl;
    
    return 0;
}</pre>
        
        <h4>Program Analysis:</h4>
        
        <ul>
            <li><strong>For loop:</strong> <code>for (int i = 1; i <= 10; i++)</code> runs 10 times</li>
            <li><strong>setw():</strong> Sets width for aligned output (from &lt;iomanip&gt;)</li>
            <li><strong>Loop variable i:</strong> Changes from 1 to 10, controlling the table</li>
        </ul>
        
        <p><strong>Sample Run:</strong></p>
        <pre>
=========================
  MULTIPLICATION TABLE
=========================
Enter a number: 7

Multiplication Table for 7:
=========================
 1 ×  7 =   7
 2 ×  7 =  14
 3 ×  7 =  21
 4 ×  7 =  28
 5 ×  7 =  35
 6 ×  7 =  42
 7 ×  7 =  49
 8 ×  7 =  56
 9 ×  7 =  63
10 ×  7 =  70
=========================</pre>

        <!-- ==================== SECTION 7: SAMPLE PROGRAM 6 - CALCULATOR WITH FUNCTIONS ==================== -->
        <h3>2.3.7 Sample Program 6: Calculator with Functions</h3>
        
        <p>This program demonstrates functions and modular programming:</p>
        
        <pre>
// ===============================
// Program: Advanced Calculator
// Author: CS Student
// Description: Performs basic arithmetic with functions
// ===============================

#include &lt;iostream&gt;
using namespace std;

// Function prototypes
double add(double a, double b);
double subtract(double a, double b);
double multiply(double a, double b);
double divide(double a, double b);
void displayMenu();

int main() {
    double num1, num2, result;
    int choice;
    char continue_calc;
    
    do {
        // Display menu
        displayMenu();
        
        // Get user choice
        cout << "Enter your choice (1-5): ";
        cin >> choice;
        
        if (choice >= 1 && choice <= 4) {
            // Get numbers for calculation
            cout << "Enter first number: ";
            cin >> num1;
            cout << "Enter second number: ";
            cin >> num2;
        }
        
        // Perform calculation based on choice
        switch(choice) {
            case 1:
                result = add(num1, num2);
                cout << "Result: " << num1 << " + " << num2 << " = " << result << endl;
                break;
            case 2:
                result = subtract(num1, num2);
                cout << "Result: " << num1 << " - " << num2 << " = " << result << endl;
                break;
            case 3:
                result = multiply(num1, num2);
                cout << "Result: " << num1 << " × " << num2 << " = " << result << endl;
                break;
            case 4:
                if (num2 != 0) {
                    result = divide(num1, num2);
                    cout << "Result: " << num1 << " ÷ " << num2 << " = " << result << endl;
                } else {
                    cout << "Error: Division by zero is not allowed." << endl;
                }
                break;
            case 5:
                cout << "Thank you for using the calculator. Goodbye!" << endl;
                break;
            default:
                cout << "Invalid choice. Please try again." << endl;
        }
        
        if (choice != 5) {
            cout << "\nDo you want to perform another calculation? (y/n): ";
            cin >> continue_calc;
        }
        
    } while (choice != 5 && (continue_calc == 'y' || continue_calc == 'Y'));
    
    return 0;
}

// Function definitions
void displayMenu() {
    cout << "\n=========================" << endl;
    cout << "     CALCULATOR MENU" << endl;
    cout << "=========================" << endl;
    cout << "1. Add" << endl;
    cout << "2. Subtract" << endl;
    cout << "3. Multiply" << endl;
    cout << "4. Divide" << endl;
    cout << "5. Exit" << endl;
    cout << "=========================" << endl;
}

double add(double a, double b) {
    return a + b;
}

double subtract(double a, double b) {
    return a - b;
}

double multiply(double a, double b) {
    return a * b;
}

double divide(double a, double b) {
    return a / b;
}</pre>
        
        <h4>New Concepts Demonstrated:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Concept</th>
                <th style="padding: 10px;">Code</th>
                <th style="padding: 10px;">Purpose</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Function Prototypes</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>double add(double a, double b);</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Declares functions before main()</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Switch Statement</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>switch(choice)</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Multi-way decision structure</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Do-While Loop</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>do { ... } while(...);</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Runs at least once, repeats based on condition</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Function Definitions</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>double add(...) { return ...; }</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Implements the functions</td>
            </tr>
        </table>

        <!-- ==================== SECTION 8: PROGRAM ANALYSIS TECHNIQUES ==================== -->
        <h3>2.3.8 How to Analyze Any Program</h3>
        
        <p>When you encounter a new program, use this systematic approach to understand it:</p>
        
        <h4>Step-by-Step Analysis Method:</h4>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <ol style="list-style-type: decimal; padding-left: 20px;">
                <li><strong>Read the comments and documentation</strong> - Understand what the program is supposed to do</li>
                <li><strong>Identify header files</strong> - What libraries are used and why?</li>
                <li><strong>Find the main() function</strong> - This is where execution starts</li>
                <li><strong>Trace variable declarations</strong> - What data is stored?</li>
                <li><strong>Follow the input section</strong> - How does the program get data?</li>
                <li><strong>Understand the processing logic</strong> - What calculations or decisions are made?</li>
                <li><strong>Examine the output</strong> - What results are displayed?</li>
                <li><strong>Look for control structures</strong> - Are there loops or decisions?</li>
                <li><strong>Identify functions</strong> - How is the code organized?</li>
                <li><strong>Trace a sample execution</strong> - Walk through with sample input</li>
            </ol>
        </div>
        
        <h4>Example: Analyzing the Grade Calculator</h4>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p>Let's trace through with input score = 85:</p>
            <ol>
                <li>Program starts, displays title</li>
                <li>Prompts for score, user enters 85</li>
                <li>Input validation: 85 is between 0 and 100, so OK</li>
                <li>Decision chain: 85 >= 80 but not >= 90, so grade = 'B'</li>
                <li>Output: displays score 85 and grade B</li>
                <li>Second decision: grade is 'B', so prints "Good job!"</li>
                <li>Program ends with return 0</li>
            </ol>
        </div>

        <!-- ==================== SECTION 9: MODIFYING SAMPLE PROGRAMS ==================== -->
        <h3>2.3.9 Modifying Sample Programs</h3>
        
        <p>A great way to learn is to take a working program and modify it to add new features.</p>
        
        <h4>Exercise 1: Modify the Sum Calculator</h4>
        <p>Add features to the sum calculator:</p>
        <pre>
// Add these features:
// 1. Calculate product as well as sum
// 2. Ask the user which operation they want
// 3. Add input validation (check if numbers are valid)
// 4. Format output in a table</pre>
        
        <h4>Exercise 2: Enhance the Temperature Converter</h4>
        <pre>
// Add these features:
// 1. Convert both ways (F to C and C to F)
// 2. Let the user choose conversion direction
// 3. Add Kelvin conversion as well
// 4. Keep running until user chooses to exit</pre>
        
        <h4>Exercise 3: Improve the Grade Calculator</h4>
        <pre>
// Add these features:
// 1. Calculate GPA from multiple grades
// 2. Add + and - grades (A+, A, A-, etc.)
// 3. Calculate class average if multiple students
// 4. Save grades to a file</pre>

        <!-- ==================== SECTION 10: COMMON PROGRAMMING PATTERNS ==================== -->
        <h3>2.3.10 Common Programming Patterns</h3>
        
        <p>These patterns appear in many programs:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Pattern</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Input-Process-Output</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Get data, process it, show results</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Sum calculator, temperature converter</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Menu-Driven</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Show options, let user choose</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Calculator with functions</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Validation Loop</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Keep asking until valid input</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Grade calculator input validation</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Accumulator Pattern</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Build up a result in a loop</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Sum of numbers, factorial</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Filter Pattern</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Select items based on condition</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Count even numbers</td>
            </tr>
        </table>

        <!-- ==================== SECTION 11: SUMMARY ==================== -->
        <h3>2.3.11 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li>Sample programs demonstrate how concepts work together in real code</li>
                <li>Every program follows a structure: headers, main function, statements</li>
                <li>Programs typically have three main parts: input, processing, output</li>
                <li>Different programs demonstrate different concepts: variables, decisions, loops, functions</li>
                <li><strong>Hello World</strong> shows basic structure and output</li>
                <li><strong>Sum Calculator</strong> shows input, variables, and arithmetic</li>
                <li><strong>Temperature Converter</strong> shows constants and formatted output</li>
                <li><strong>Grade Calculator</strong> shows decision making (if-else)</li>
                <li><strong>Multiplication Table</strong> shows loops (for)</li>
                <li><strong>Calculator with Functions</strong> shows modular programming and switch statements</li>
                <li>Analyze programs systematically to understand them</li>
                <li>Modify working programs to practice and learn new concepts</li>
                <li>Recognize common programming patterns that appear in many programs</li>
            </ul>
        </div>

        <!-- ==================== SECTION 12: EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Type and run all six sample programs in this chapter. Make sure they work correctly.</p>
            
            <p><strong>Exercise 2:</strong> Modify the Sum Calculator to calculate and display the product, difference, and quotient as well.</p>
            
            <p><strong>Exercise 3:</strong> Enhance the Temperature Converter to convert both Fahrenheit to Celsius and Celsius to Fahrenheit. Let the user choose which conversion to perform.</p>
            
            <p><strong>Exercise 4:</strong> Modify the Grade Calculator to include plus/minus grades (A+, A, A-, B+, B, B-, etc.). Use these ranges:
            <br>A+ (97-100), A (93-96), A- (90-92), B+ (87-89), etc.</p>
            
            <p><strong>Exercise 5:</strong> Write a program that asks the user for 5 numbers and displays their average. Use a loop for input.</p>
            
            <p><strong>Exercise 6:</strong> Create a program that displays a countdown from 10 to 1, then prints "Blast off!"</p>
            
            <p><strong>Exercise 7:</strong> Write a program that asks the user for a number and prints whether it's positive, negative, or zero.</p>
            
            <p><strong>Exercise 8:</strong> Create a program that displays a pattern of stars:</p>
            <pre>
*
**
***
****
*****</pre>
            
            <p><strong>Exercise 9:</strong> Combine the calculator and the multiplication table programs. Let the user choose which feature to use.</p>
            
            <p><strong>Exercise 10:</strong> Write a program that asks the user for 10 numbers, stores them in an array, and then displays the largest and smallest numbers.</p>
        </div>

        <!-- ==================== SECTION 13: KEY TERMS ==================== -->
        <h3>2.3.12 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Input</strong>
                <p style="font-size: 12px;">Data entered by user</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Processing</strong>
                <p style="font-size: 12px;">Operations on data</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Output</strong>
                <p style="font-size: 12px;">Results displayed to user</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Validation</strong>
                <p style="font-size: 12px;">Checking input correctness</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Menu-Driven</strong>
                <p style="font-size: 12px;">Program with user choices</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Modular</strong>
                <p style="font-size: 12px;">Organized into functions</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Pattern</strong>
                <p style="font-size: 12px;">Common solution structure</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Trace</strong>
                <p style="font-size: 12px;">Step-by-step execution</p>
            </div>
        </div>
        
        <!-- ==================== PREVIEW OF NEXT SECTION ==================== -->
        <div style="background: linear-gradient(135deg, #667eea20, #764ba220); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">📖 Next: 2.4 Keywords, Identifiers, Inputs, Outputs, Comments, Parts of a Program</h4>
            <p>Now that you've seen complete programs, we'll dive deeper into the building blocks that make them work.</p>
        </div>
    `,
    navigation: {
        next: "ch2-4",
        prev: "ch2-2",
        nextTitle: "2.4 Keywords, Identifiers, Inputs, Outputs, Comments",
        prevTitle: "2.2 C++ IDE"
    }
};