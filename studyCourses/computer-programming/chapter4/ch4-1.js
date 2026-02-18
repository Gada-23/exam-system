// ===============================
// Computer Programming - Chapter 4.1
// Definition of Function
// ===============================

window.currentSubsectionData = {
    title: "4.1 Definition of Function",
    content: `
        <h2>4.1 Definition of Function</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand what functions are and why they are used</li>
                <li>Learn the syntax for defining functions</li>
                <li>Understand function components: return type, name, parameters, body</li>
                <li>Learn about void functions (no return value)</li>
                <li>Understand return values and return statement</li>
                <li>Learn best practices for function design</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: INTRODUCTION TO FUNCTIONS ==================== -->
        <h3>4.1.1 What is a Function?</h3>
        
        <p>A <strong>function</strong> is a self-contained block of code that performs a specific task. Functions are the building blocks of modular programming, allowing you to break complex programs into smaller, manageable pieces.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> A function is a reusable block of code that performs a specific task and can be called (executed) from other parts of the program.</p>
        </div>
        
        <h4>Real-World Analogy:</h4>
        <p>Think of functions like kitchen appliances:</p>
        <ul>
            <li>A <strong>toaster</strong> takes bread and returns toast - you don't need to know how it works internally</li>
            <li>A <strong>microwave</strong> takes food and returns heated food - same input/output concept</li>
            <li>Each appliance does one specific task well</li>
            <li>You can use them whenever needed without rebuilding them</li>
        </ul>
        
        <h4>Why Use Functions?</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Benefit</th>
                <th style="padding: 10px;">Explanation</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Code Reuse</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Write once, use many times</td>
                <td style="padding: 10px; border: 1px solid #ddd;">A single calculateArea() function used 100 times</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Modularity</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Break complex problems into smaller parts</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Game has separate functions for input, update, render</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Readability</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Well-named functions document themselves</td>
                <td style="padding: 10px; border: 1px solid #ddd;">calculateAverage() is self-explanatory</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Debugging</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Test functions individually</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Easier to find bugs in small functions</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Maintenance</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Change in one place affects all calls</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Update tax calculation in one function</td>
            </tr>
        </table>

        <!-- ==================== SECTION 2: FUNCTION SYNTAX ==================== -->
        <h3>4.1.2 Function Syntax</h3>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Function Definition Syntax:</strong></p>
            <pre>
return_type function_name(parameter_list) {
    // function body
    // statements
    return value;  // if return_type is not void
}</pre>
        </div>
        
        <h4>Function Components:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Component</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Return Type</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Type of value the function returns</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int</code>, <code>double</code>, <code>void</code>, etc.</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Function Name</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Identifier used to call the function</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>calculateSum</code>, <code>printMessage</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Parameters</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Input values the function receives</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>(int a, int b)</code>, <code>(double x)</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Function Body</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Code that executes when called</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>{ return a + b; }</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Return Statement</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Sends value back to caller</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>return result;</code></td>
            </tr>
        </table>

        <!-- ==================== SECTION 3: SIMPLE FUNCTION EXAMPLES ==================== -->
        <h3>4.1.3 Simple Function Examples</h3>
        
        <h4>Example 1: Function with No Parameters and No Return Value</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Function definition
void printWelcome() {
    cout << "=========================" << endl;
    cout << "   WELCOME TO THE PROGRAM" << endl;
    cout << "=========================" << endl;
}

int main() {
    // Function call
    printWelcome();
    
    cout << "This is the main program." << endl;
    
    // Can call multiple times
    printWelcome();
    
    return 0;
}</pre>
        
        <h4>Example 2: Function with Parameters but No Return Value</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

void printSum(int a, int b) {
    int sum = a + b;
    cout << a << " + " << b << " = " << sum << endl;
}

int main() {
    printSum(5, 3);     // Output: 5 + 3 = 8
    printSum(10, 20);   // Output: 10 + 20 = 30
    
    int x = 7, y = 2;
    printSum(x, y);     // Output: 7 + 2 = 9
    
    return 0;
}</pre>
        
        <h4>Example 3: Function with Parameters and Return Value</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Function that returns the sum of two numbers
int add(int a, int b) {
    int result = a + b;
    return result;
}

int main() {
    int sum1 = add(5, 3);
    cout << "Sum 1 = " << sum1 << endl;
    
    int sum2 = add(10, 20);
    cout << "Sum 2 = " << sum2 << endl;
    
    // Can use directly in expressions
    int total = add(5, 3) + add(10, 20);
    cout << "Total = " << total << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 4: RETURN TYPES ==================== -->
        <h3>4.1.4 Return Types</h3>
        
        <p>The <strong>return type</strong> specifies what kind of value the function sends back to the caller.</p>
        
        <h4>Common Return Types:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Return Type</th>
                <th style="padding: 10px;">Purpose</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Returns integer value</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int getAge() { return 25; }</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>double</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Returns floating-point value</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>double getPI() { return 3.14159; }</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>char</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Returns character</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>char getGrade() { return 'A'; }</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>bool</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Returns true/false</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>bool isEven(int n) { return n % 2 == 0; }</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>string</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Returns string</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>string getName() { return "John"; }</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>void</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Returns nothing</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>void printHello() { cout << "Hello"; }</code></td>
            </tr>
        </table>
        
        <h4>Example: Different Return Types</h4>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

int getInteger() {
    return 42;
}

double getDouble() {
    return 3.14159;
}

char getChar() {
    return 'Z';
}

bool getBoolean() {
    return true;
}

string getString() {
    return "Hello, Functions!";
}

int main() {
    cout << "int: " << getInteger() << endl;
    cout << "double: " << getDouble() << endl;
    cout << "char: " << getChar() << endl;
    cout << "bool: " << getBoolean() << endl;
    cout << "string: " << getString() << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 5: VOID FUNCTIONS ==================== -->
        <h3>4.1.5 Void Functions</h3>
        
        <p>A <strong>void function</strong> performs an action but does not return a value. It can still have parameters and can modify data through parameters (as we'll see later).</p>
        
        <h4>Example 1: Simple Void Functions</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Void function with no parameters
void printHeader() {
    cout << "********************" << endl;
    cout << "*   MY PROGRAM     *" << endl;
    cout << "********************" << endl;
}

// Void function with parameters
void printBoxed(string message) {
    cout << "+";
    for (int i = 0; i < message.length() + 2; i++) {
        cout << "-";
    }
    cout << "+" << endl;
    
    cout << "| " << message << " |" << endl;
    
    cout << "+";
    for (int i = 0; i < message.length() + 2; i++) {
        cout << "-";
    }
    cout << "+" << endl;
}

int main() {
    printHeader();
    
    printBoxed("Hello World");
    printBoxed("C++ Functions");
    printBoxed("Void Functions");
    
    return 0;
}</pre>
        
        <h4>Example 2: Void Functions with Multiple Parameters</h4>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;iomanip&gt;
using namespace std;

void printTableRow(int num1, int num2, int result, char op) {
    cout << setw(5) << num1 
         << setw(3) << op 
         << setw(5) << num2 
         << setw(3) << "=" 
         << setw(6) << result << endl;
}

void printMultiplicationTable(int num) {
    cout << "Multiplication Table for " << num << ":" << endl;
    for (int i = 1; i <= 10; i++) {
        printTableRow(num, i, num * i, '×');
    }
}

int main() {
    printMultiplicationTable(5);
    cout << endl;
    printMultiplicationTable(7);
    
    return 0;
}</pre>

        <!-- ==================== SECTION 6: RETURN STATEMENT ==================== -->
        <h3>4.1.6 The Return Statement</h3>
        
        <p>The <strong>return statement</strong> serves two purposes:</p>
        <ol>
            <li>It immediately exits the function</li>
            <li>It sends a value back to the caller (if function is not void)</li>
        </ol>
        
        <h4>Example 1: Basic Return</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int square(int x) {
    return x * x;  // Returns value and exits
    // Code after return never executes
    cout << "This line never prints!" << endl;
}

int main() {
    cout << "Square of 5 = " << square(5) << endl;
    
    return 0;
}</pre>
        
        <h4>Example 2: Multiple Return Points</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int max(int a, int b) {
    if (a > b) {
        return a;  // Return a and exit
    } else {
        return b;  // Return b and exit
    }
    // Code here would never execute
}

char getGrade(int score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';  // Default case
}

int main() {
    cout << "Max of 5 and 7 = " << max(5, 7) << endl;
    cout << "Grade for 85 = " << getGrade(85) << endl;
    
    return 0;
}</pre>
        
        <h4>Example 3: Early Return (Guard Clauses)</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

double divide(int numerator, int denominator) {
    // Guard clause - check for invalid input first
    if (denominator == 0) {
        cout << "Error: Division by zero!" << endl;
        return 0;  // Early return
    }
    
    // Main logic - only reached if denominator is valid
    return static_cast<double>(numerator) / denominator;
}

void processAge(int age) {
    // Multiple guard clauses
    if (age < 0) {
        cout << "Age cannot be negative!" << endl;
        return;
    }
    
    if (age > 150) {
        cout << "Age exceeds maximum!" << endl;
        return;
    }
    
    // Valid age - proceed with processing
    cout << "Processing age: " << age << endl;
}

int main() {
    cout << "10 / 2 = " << divide(10, 2) << endl;
    cout << "10 / 0 = " << divide(10, 0) << endl;
    
    processAge(25);
    processAge(-5);
    processAge(200);
    
    return 0;
}</pre>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Best Practice:</strong> Use early returns (guard clauses) to handle error conditions at the beginning of functions. This makes the code cleaner and reduces nesting.</p>
        </div>

        <!-- ==================== SECTION 7: FUNCTION NAMING AND DESIGN ==================== -->
        <h3>4.1.7 Function Naming and Design Best Practices</h3>
        
        <h4>Function Naming Conventions:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Good Names</th>
                <th style="padding: 10px;">Bad Names</th>
                <th style="padding: 10px;">Why</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>calculateAverage</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>func1</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Descriptive name tells what it does</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>isValidEmail</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>check</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Boolean functions should start with "is", "has", "can"</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>getUserName</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>doStuff</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Verb-noun combination is clear</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>printReport</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>output</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Specific action, not vague</td>
            </tr>
        </table>
        
        <h4>Function Design Principles:</h4>
        <ol>
            <li><strong>Single Responsibility:</strong> Each function should do ONE thing well</li>
            <li><strong>Keep it Short:</strong> Functions should typically be less than 20-30 lines</li>
            <li><strong>Descriptive Names:</strong> Name should clearly indicate what the function does</li>
            <li><strong>Limit Parameters:</strong> Avoid too many parameters (3-4 is good, more suggests redesign)</li>
            <li><strong>No Side Effects:</strong> Functions should ideally not modify global state</li>
            <li><strong>Consistent Interface:</strong> Similar functions should have similar parameter patterns</li>
        </ol>

        <!-- ==================== SECTION 8: COMPLETE EXAMPLE ==================== -->
        <h3>4.1.8 Complete Example: Math Utilities Library</h3>
        
        <pre>
// ============================================
// Program: Math Utilities Library
// Author: CS Student
// Description: Demonstrates function definitions
// ============================================

#include &lt;iostream&gt;
#include &lt;cmath&gt;
#include &lt;iomanip&gt;
using namespace std;

// ===== Basic Arithmetic Functions =====

int add(int a, int b) {
    return a + b;
}

int subtract(int a, int b) {
    return a - b;
}

int multiply(int a, int b) {
    return a * b;
}

double divide(int a, int b) {
    if (b == 0) {
        cout << "Error: Division by zero!" << endl;
        return 0;
    }
    return static_cast<double>(a) / b;
}

int modulus(int a, int b) {
    if (b == 0) {
        cout << "Error: Modulus by zero!" << endl;
        return 0;
    }
    return a % b;
}

// ===== Advanced Math Functions =====

int factorial(int n) {
    if (n < 0) return 0;  // Factorial not defined for negative numbers
    
    int result = 1;
    for (int i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

int power(int base, int exponent) {
    int result = 1;
    for (int i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

bool isPrime(int n) {
    if (n <= 1) return false;
    
    for (int i = 2; i <= n / 2; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

// ===== Geometry Functions =====

double circleArea(double radius) {
    const double PI = 3.14159;
    return PI * radius * radius;
}

double circleCircumference(double radius) {
    const double PI = 3.14159;
    return 2 * PI * radius;
}

double rectangleArea(double length, double width) {
    return length * width;
}

double rectanglePerimeter(double length, double width) {
    return 2 * (length + width);
}

// ===== Utility Functions =====

void printResult(string operation, double value) {
    cout << left << setw(15) << operation 
         << ": " << fixed << setprecision(2) << value << endl;
}

void printSeparator() {
    cout << "------------------------" << endl;
}

// ===== Main Program =====

int main() {
    cout << "===== MATH UTILITIES LIBRARY =====" << endl;
    cout << "Demonstrating various functions" << endl << endl;
    
    // Test basic arithmetic
    cout << "Basic Arithmetic:" << endl;
    printSeparator();
    printResult("5 + 3", add(5, 3));
    printResult("10 - 4", subtract(10, 4));
    printResult("6 × 7", multiply(6, 7));
    printResult("15 ÷ 4", divide(15, 4));
    printResult("17 % 5", modulus(17, 5));
    
    cout << endl;
    
    // Test advanced math
    cout << "Advanced Math:" << endl;
    printSeparator();
    printResult("Factorial of 5", factorial(5));
    printResult("2^8", power(2, 8));
    
    cout << "Prime check 17: " << (isPrime(17) ? "Yes" : "No") << endl;
    cout << "Prime check 20: " << (isPrime(20) ? "Yes" : "No") << endl;
    
    cout << endl;
    
    // Test geometry
    cout << "Geometry:" << endl;
    printSeparator();
    printResult("Circle area (r=5)", circleArea(5));
    printResult("Circle circum (r=5)", circleCircumference(5));
    printResult("Rectangle area (4×6)", rectangleArea(4, 6));
    printResult("Rectangle perim (4×6)", rectanglePerimeter(4, 6));
    
    // Demonstrate function composition
    cout << endl;
    cout << "Function Composition:" << endl;
    printSeparator();
    int a = 5, b = 3, c = 2;
    int result = add(multiply(a, b), divide(c, 1));
    cout << "5×3 + 2 = " << result << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 9: SUMMARY ==================== -->
        <h3>4.1.9 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li><strong>Functions</strong> are reusable blocks of code that perform specific tasks</li>
                <li>Syntax: <code>return_type function_name(parameters) { body }</code></li>
                <li><strong>Return type</strong> can be any data type (int, double, char, bool, string, void)</li>
                <li><strong>void functions</strong> perform actions but don't return values</li>
                <li>The <strong>return statement</strong> exits the function and optionally returns a value</li>
                <li>Functions promote <strong>code reuse, modularity, and readability</strong></li>
                <li><strong>Early returns</strong> (guard clauses) handle errors cleanly</li>
                <li><strong>Function names</strong> should be descriptive and follow conventions</li>
                <li>Each function should have a <strong>single responsibility</strong></li>
                <li>Functions can call other functions (<strong>composition</strong>)</li>
            </ul>
        </div>

        <!-- ==================== SECTION 10: EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Write a function called <code>greet</code> that takes a name as a parameter and prints a greeting. Test it with different names.</p>
            
            <p><strong>Exercise 2:</strong> Create a function <code>maxOfThree</code> that takes three integers and returns the largest.</p>
            
            <p><strong>Exercise 3:</strong> Write a function <code>isEven</code> that takes an integer and returns true if it's even, false otherwise.</p>
            
            <p><strong>Exercise 4:</strong> Create a function <code>calculateSum</code> that takes an integer n and returns the sum of numbers from 1 to n.</p>
            
            <p><strong>Exercise 5:</strong> Write a void function <code>printStars</code> that takes an integer n and prints n stars on one line.</p>
            
            <p><strong>Exercise 6:</strong> Create a function <code>celsiusToFahrenheit</code> that takes Celsius and returns Fahrenheit. Formula: F = C × 9/5 + 32</p>
            
            <p><strong>Exercise 7:</strong> Write a function <code>isLeapYear</code> that takes a year and returns true if it's a leap year.</p>
            
            <p><strong>Exercise 8:</strong> Create a function <code>countDigits</code> that takes an integer and returns the number of digits.</p>
            
            <p><strong>Exercise 9:</strong> Write a function <code>reverseNumber</code> that takes an integer and returns its reverse (e.g., 1234 → 4321).</p>
            
            <p><strong>Exercise 10:</strong> Create a simple calculator program using functions for each operation (add, subtract, multiply, divide). Use a menu in main() to let the user choose operations.</p>
        </div>

        <!-- ==================== SECTION 11: KEY TERMS ==================== -->
        <h3>4.1.10 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Function</strong>
                <p style="font-size: 12px;">Reusable code block</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Return Type</strong>
                <p style="font-size: 12px;">Type of value returned</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Parameter</strong>
                <p style="font-size: 12px;">Input to function</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Argument</strong>
                <p style="font-size: 12px;">Value passed to parameter</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Function Call</strong>
                <p style="font-size: 12px;">Execute a function</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Return Statement</strong>
                <p style="font-size: 12px;">Exits function, returns value</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Void</strong>
                <p style="font-size: 12px;">No return value</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Guard Clause</strong>
                <p style="font-size: 12px;">Early return for errors</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Modularity</strong>
                <p style="font-size: 12px;">Breaking code into modules</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Composition</strong>
                <p style="font-size: 12px;">Functions calling functions</p>
            </div>
        </div>
        
        <!-- ==================== PREVIEW OF NEXT SECTION ==================== -->
        <div style="background: linear-gradient(135deg, #667eea20, #764ba220); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">📖 Next: 4.2 Declaration of Function</h4>
            <p>In the next section, we'll learn about function declarations (prototypes) and how they differ from definitions.</p>
        </div>
    `,
    navigation: {
        next: "ch4-2",
        prev: null,
        nextTitle: "4.2 Declaration of Function",
        prevTitle: null
    }
};