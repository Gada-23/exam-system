// ===============================
// Computer Programming - Chapter 4.2
// Declaration of Function
// ===============================

window.currentSubsectionData = {
    title: "4.2 Declaration of Function",
    content: `
        <h2>4.2 Declaration of Function</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand what function declarations (prototypes) are</li>
                <li>Learn the difference between declaration and definition</li>
                <li>Understand why function declarations are needed</li>
                <li>Learn the syntax of function prototypes</li>
                <li>Master organizing functions in programs</li>
                <li>Understand header files and multiple source files</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: INTRODUCTION TO FUNCTION DECLARATIONS ==================== -->
        <h3>4.2.1 What is a Function Declaration?</h3>
        
        <p>A <strong>function declaration</strong> (also called a <strong>function prototype</strong>) tells the compiler about a function's name, return type, and parameters, but not how it works. It's like a promise to the compiler that the function will be defined later.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> A function declaration introduces the function to the compiler, specifying its interface (name, return type, parameters) without providing the implementation.</p>
        </div>
        
        <h4>Analogy: Restaurant Menu</h4>
        <p>Think of a function declaration like a restaurant menu:</p>
        <ul>
            <li>The <strong>menu</strong> tells you what dishes are available (function name and what it needs)</li>
            <li>You don't need to know how the kitchen prepares the dish (the implementation)</li>
            <li>The kitchen (function definition) can be anywhere, but you know what to order</li>
        </ul>
        
        <h4>Why Do We Need Function Declarations?</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Reason</th>
                <th style="padding: 10px;">Explanation</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Compiler Knowledge</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Compiler needs to know function signatures before they are used</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Type Checking</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Ensures function calls match the function's expected parameters</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Organization</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Allows functions to be defined in any order</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Multiple Files</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Enables functions to be declared in header files and defined elsewhere</td>
            </tr>
        </table>

        <!-- ==================== SECTION 2: DECLARATION VS DEFINITION ==================== -->
        <h3>4.2.2 Declaration vs Definition</h3>
        
        <p>It's crucial to understand the difference between declaring and defining a function:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Aspect</th>
                <th style="padding: 10px;">Function Declaration</th>
                <th style="padding: 10px;">Function Definition</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>What it does</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Tells compiler about function existence</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Provides the actual code</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Memory</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">No memory allocated</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Memory allocated for code</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Syntax</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Ends with semicolon</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Has function body with { }</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Can be called?</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Yes, if defined later</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Yes, immediately</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Multiple occurrences</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Can have multiple declarations</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Only one definition allowed</td>
            </tr>
        </table>
        
        <h4>Example: Declaration vs Definition</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Function DECLARATION (prototype)
int add(int a, int b);          // Ends with semicolon
double calculateAverage(int x, int y, int z);  // Another declaration

int main() {
    // Even though add is defined after main, we can use it
    // because we declared it above
    int result = add(5, 3);
    cout << "Result: " << result << endl;
    
    double avg = calculateAverage(10, 20, 30);
    cout << "Average: " << avg << endl;
    
    return 0;
}

// Function DEFINITION (implementation)
int add(int a, int b) {          // Has body with { }
    return a + b;
}

// Another function definition
double calculateAverage(int x, int y, int z) {
    return (x + y + z) / 3.0;
}</pre>

        <!-- ==================== SECTION 3: FUNCTION PROTOTYPE SYNTAX ==================== -->
        <h3>4.2.3 Function Prototype Syntax</h3>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Syntax:</strong></p>
            <pre>
return_type function_name(parameter_type1, parameter_type2, ...);
// or with parameter names (optional but recommended)
return_type function_name(parameter_type1 param1, parameter_type2 param2, ...);</pre>
        </div>
        
        <h4>Examples of Function Prototypes:</h4>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

// Basic prototypes
int max(int a, int b);                 // Two integers
double area(double radius);             // Single double
char getGrade(int score);               // Returns char
bool isValid(string input);             // Returns bool
void printHeader();                      // No parameters, no return

// Prototypes with multiple parameters
double power(double base, int exponent);
string combine(string first, string last, char separator);
int sumArray(int arr[], int size);      // Array parameter

// Prototypes with default arguments (only in declaration)
int multiply(int a, int b = 10);        // b has default value 10

int main() {
    // All these functions are declared above
    // but will be defined later
    cout << max(10, 20) << endl;
    cout << area(5.0) << endl;
    printHeader();
    
    return 0;
}

// Definitions go here (usually after main or in separate file)
int max(int a, int b) {
    return (a > b) ? a : b;
}

double area(double radius) {
    return 3.14159 * radius * radius;
}

void printHeader() {
    cout << "========== Program ==========" << endl;
}</pre>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Best Practice:</strong> Include parameter names in prototypes for documentation, even though they're optional. This makes the prototype self-documenting.</p>
            <pre>
// Good - clear what parameters mean
double calculateInterest(double principal, double rate, int years);

// Less clear - need to guess
double calculateInterest(double, double, int);</pre>
        </div>

        <!-- ==================== SECTION 4: WHY ORDER MATTERS ==================== -->
        <h3>4.2.4 Why Function Order Matters</h3>
        
        <p>Without declarations, the order of function definitions matters. The compiler must know about a function before it's called.</p>
        
        <h4>Example 1: This Works (definition before use)</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Function defined before main - no declaration needed
int square(int x) {
    return x * x;
}

int main() {
    cout << square(5) << endl;  // Works fine
    return 0;
}</pre>
        
        <h4>Example 2: This FAILS (definition after use)</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    cout << square(5) << endl;  // ERROR! square not declared yet
    return 0;
}

int square(int x) {              // Defined too late
    return x * x;
}</pre>
        
        <h4>Example 3: This Works (declaration before use)</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int square(int x);  // Declaration - tells compiler square exists

int main() {
    cout << square(5) << endl;  // Works! Compiler knows about square
    return 0;
}

int square(int x) {              // Definition can be anywhere now
    return x * x;
}</pre>

        <!-- ==================== SECTION 5: MULTIPLE FUNCTIONS AND ORDER ==================== -->
        <h3>4.2.5 Multiple Functions and Order</h3>
        
        <p>When functions call each other, declarations become essential.</p>
        
        <h4>Example: Functions Calling Each Other</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Declarations first
bool isEven(int num);
bool isOdd(int num);

int main() {
    cout << "5 is odd: " << isOdd(5) << endl;
    cout << "6 is even: " << isEven(6) << endl;
    return 0;
}

// Definitions
bool isEven(int num) {
    return num % 2 == 0;
}

bool isOdd(int num) {
    return !isEven(num);  // Calls isEven - needs declaration
}</pre>
        
        <h4>Example: Recursive Functions (functions calling themselves)</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Declaration needed for recursive functions
int factorial(int n);
int fibonacci(int n);

int main() {
    cout << "Factorial of 5: " << factorial(5) << endl;
    cout << "Fibonacci of 6: " << fibonacci(6) << endl;
    return 0;
}

// Recursive definition
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);  // Recursive call
}

int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);  // Recursive calls
}</pre>

        <!-- ==================== SECTION 6: HEADER FILES ==================== -->
        <h3>4.2.6 Header Files and Multiple Source Files</h3>
        
        <p>In larger programs, function declarations are typically placed in <strong>header files (.h)</strong>, while definitions go in <strong>source files (.cpp)</strong>.</p>
        
        <h4>Example: math_utils.h (Header File)</h4>
        
        <pre>
// math_utils.h
#ifndef MATH_UTILS_H
#define MATH_UTILS_H

// Function declarations
int add(int a, int b);
int subtract(int a, int b);
int multiply(int a, int b);
double divide(int a, int b);
int factorial(int n);
bool isPrime(int n);

#endif</pre>
        
        <h4>Example: math_utils.cpp (Implementation File)</h4>
        
        <pre>
// math_utils.cpp
#include "math_utils.h"
#include &lt;iostream&gt;
using namespace std;

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

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

bool isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i <= n / 2; i++) {
        if (n % i == 0) return false;
    }
    return true;
}</pre>
        
        <h4>Example: main.cpp (Using the Header)</h4>
        
        <pre>
// main.cpp
#include &lt;iostream&gt;
#include "math_utils.h"  // Include function declarations
using namespace std;

int main() {
    cout << "Add: " << add(10, 5) << endl;
    cout << "Subtract: " << subtract(10, 5) << endl;
    cout << "Multiply: " << multiply(10, 5) << endl;
    cout << "Divide: " << divide(10, 5) << endl;
    cout << "Factorial of 5: " << factorial(5) << endl;
    cout << "Is 17 prime? " << (isPrime(17) ? "Yes" : "No") << endl;
    
    return 0;
}</pre>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Note:</strong> The <code>#ifndef/#define/#endif</code> pattern is called "include guards" - it prevents the header from being included multiple times in the same file.</p>
        </div>

        <!-- ==================== SECTION 7: COMMON MISTAKES ==================== -->
        <h3>4.2.7 Common Mistakes with Function Declarations</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Mistake</th>
                <th style="padding: 10px;">Wrong Code</th>
                <th style="padding: 10px;">Correct Code</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Missing semicolon</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int add(int a, int b)</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int add(int a, int b);</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Wrong parameter types in call</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>double divide(int a, int b);<br>divide(10, 3.14); // Error</code>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>divide(10, 3); // int, int</code>
                </td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Declaration without definition</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>int max(int a, int b);<br>// Never defined</code>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    Provide definition or remove declaration
                </td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Multiple definitions</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>int square(int x) { ... }<br>int square(int x) { ... }</code>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    Only one definition allowed
                </td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Mismatched return types</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>double getValue();<br>int getValue() { return 5; } // Mismatch</code>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    Declaration and definition must match exactly
                </td>
            </tr>
        </table>

        <!-- ==================== SECTION 8: COMPLETE EXAMPLE ==================== -->
        <h3>4.2.8 Complete Example: Student Grade Management System</h3>
        
        <pre>
// ============================================
// Program: Student Grade Management System
// Author: CS Student
// Description: Demonstrates function declarations
// ============================================

#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;iomanip&gt;
using namespace std;

// ===== FUNCTION DECLARATIONS =====

// Input functions
void displayMenu();
int getValidChoice(int min, int max);
double getValidScore();
string getStudentName();

// Calculation functions
double calculateAverage(double scores[], int count);
char determineGrade(double score);
double calculateClassAverage(double scores[], int count);
int countPassing(double scores[], int count);
int countFailing(double scores[], int count);
double findHighest(double scores[], int count);
double findLowest(double scores[], int count);

// Output functions
void printStudentReport(string names[], double scores[], char grades[], int count);
void printClassStatistics(double scores[], int count);
void printSeparator();
void printHeader(string title);

// ===== MAIN PROGRAM =====

int main() {
    const int MAX_STUDENTS = 50;
    string names[MAX_STUDENTS];
    double scores[MAX_STUDENTS];
    char grades[MAX_STUDENTS];
    int studentCount = 0;
    int choice;
    
    do {
        displayMenu();
        choice = getValidChoice(1, 5);
        
        switch (choice) {
            case 1:  // Add a student
                if (studentCount < MAX_STUDENTS) {
                    names[studentCount] = getStudentName();
                    scores[studentCount] = getValidScore();
                    grades[studentCount] = determineGrade(scores[studentCount]);
                    studentCount++;
                    cout << "Student added successfully!" << endl;
                } else {
                    cout << "Maximum students reached!" << endl;
                }
                break;
                
            case 2:  // Display all students
                if (studentCount > 0) {
                    printStudentReport(names, scores, grades, studentCount);
                } else {
                    cout << "No students in the system." << endl;
                }
                break;
                
            case 3:  // Show statistics
                if (studentCount > 0) {
                    printClassStatistics(scores, studentCount);
                } else {
                    cout << "No students to analyze." << endl;
                }
                break;
                
            case 4:  // Find highest/lowest
                if (studentCount > 0) {
                    double highest = findHighest(scores, studentCount);
                    double lowest = findLowest(scores, studentCount);
                    cout << "Highest score: " << highest << endl;
                    cout << "Lowest score: " << lowest << endl;
                } else {
                    cout << "No students to analyze." << endl;
                }
                break;
                
            case 5:  // Exit
                cout << "Goodbye!" << endl;
                break;
        }
        
    } while (choice != 5);
    
    return 0;
}

// ===== FUNCTION DEFINITIONS =====

void displayMenu() {
    printSeparator();
    cout << "STUDENT GRADE MANAGEMENT SYSTEM" << endl;
    printSeparator();
    cout << "1. Add Student" << endl;
    cout << "2. Display All Students" << endl;
    cout << "3. Show Class Statistics" << endl;
    cout << "4. Find Highest/Lowest Scores" << endl;
    cout << "5. Exit" << endl;
    printSeparator();
    cout << "Choice: ";
}

int getValidChoice(int min, int max) {
    int choice;
    cin >> choice;
    
    while (choice < min || choice > max) {
        cout << "Invalid choice. Enter " << min << "-" << max << ": ";
        cin >> choice;
    }
    
    return choice;
}

double getValidScore() {
    double score;
    cout << "Enter score (0-100): ";
    cin >> score;
    
    while (score < 0 || score > 100) {
        cout << "Invalid score! Enter 0-100: ";
        cin >> score;
    }
    
    return score;
}

string getStudentName() {
    string name;
    cout << "Enter student name: ";
    cin.ignore();  // Clear newline from previous input
    getline(cin, name);
    return name;
}

double calculateAverage(double scores[], int count) {
    if (count == 0) return 0;
    
    double sum = 0;
    for (int i = 0; i < count; i++) {
        sum += scores[i];
    }
    return sum / count;
}

char determineGrade(double score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}

double calculateClassAverage(double scores[], int count) {
    return calculateAverage(scores, count);  // Reuse existing function
}

int countPassing(double scores[], int count) {
    int passing = 0;
    for (int i = 0; i < count; i++) {
        if (scores[i] >= 60) passing++;
    }
    return passing;
}

int countFailing(double scores[], int count) {
    return count - countPassing(scores, count);  // Reuse existing function
}

double findHighest(double scores[], int count) {
    if (count == 0) return 0;
    
    double highest = scores[0];
    for (int i = 1; i < count; i++) {
        if (scores[i] > highest) {
            highest = scores[i];
        }
    }
    return highest;
}

double findLowest(double scores[], int count) {
    if (count == 0) return 0;
    
    double lowest = scores[0];
    for (int i = 1; i < count; i++) {
        if (scores[i] < lowest) {
            lowest = scores[i];
        }
    }
    return lowest;
}

void printStudentReport(string names[], double scores[], char grades[], int count) {
    printHeader("STUDENT REPORT");
    cout << setw(20) << left << "Name" 
         << setw(10) << "Score" 
         << setw(10) << "Grade" << endl;
    printSeparator();
    
    for (int i = 0; i < count; i++) {
        cout << setw(20) << left << names[i]
             << setw(10) << fixed << setprecision(1) << scores[i]
             << setw(10) << grades[i] << endl;
    }
    printSeparator();
}

void printClassStatistics(double scores[], int count) {
    printHeader("CLASS STATISTICS");
    cout << "Total Students: " << count << endl;
    cout << "Class Average: " << fixed << setprecision(2) 
         << calculateClassAverage(scores, count) << endl;
    cout << "Passing: " << countPassing(scores, count) << endl;
    cout << "Failing: " << countFailing(scores, count) << endl;
    cout << "Pass Rate: " << fixed << setprecision(1)
         << (countPassing(scores, count) * 100.0 / count) << "%" << endl;
    printSeparator();
}

void printSeparator() {
    cout << "================================" << endl;
}

void printHeader(string title) {
    printSeparator();
    cout << title << endl;
    printSeparator();
}</pre>

        <!-- ==================== SECTION 9: SUMMARY ==================== -->
        <h3>4.2.9 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li><strong>Function declaration</strong> (prototype) tells compiler about function's interface</li>
                <li>Syntax: <code>return_type function_name(parameter_types);</code></li>
                <li><strong>Declaration</strong> ends with semicolon; <strong>definition</strong> has body with { }</li>
                <li>Declarations allow functions to be used before they're defined</li>
                <li>Without declarations, functions must be defined before first use</li>
                <li>Include <strong>parameter names</strong> in declarations for documentation</li>
                <li>In larger programs, put declarations in <strong>header files (.h)</strong></li>
                <li>Use <strong>include guards</strong> to prevent multiple inclusions</li>
                <li>Multiple declarations are allowed; only one definition</li>
                <li>Declaration and definition must match exactly</li>
            </ul>
        </div>

        <!-- ==================== SECTION 10: EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Write function declarations for:</p>
            <ul>
                <li>A function that takes two doubles and returns their product</li>
                <li>A function that takes a string and returns its length</li>
                <li>A function that takes an integer and returns true if it's positive</li>
                <li>A void function that prints a welcome message</li>
            </ul>
            
            <p><strong>Exercise 2:</strong> Create a program with function declarations at the top, main() in the middle, and definitions at the bottom. Include at least 3 functions.</p>
            
            <p><strong>Exercise 3:</strong> What's wrong with this code? Fix it.</p>
            <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    cout << multiply(5, 3) << endl;
    return 0;
}

int multiply(int a, int b) {
    return a * b;
}</pre>
            
            <p><strong>Exercise 4:</strong> Create a header file called "geometry.h" with declarations for functions that calculate:</p>
            <ul>
                <li>Area of a circle (πr²)</li>
                <li>Area of a rectangle (length × width)</li>
                <li>Area of a triangle (½ × base × height)</li>
                <li>Volume of a sphere (⁴⁄₃πr³)</li>
            </ul>
            
            <p><strong>Exercise 5:</strong> Write a program with two functions that call each other: <code>isEven</code> and <code>isOdd</code>. Put declarations first, then main, then definitions.</p>
            
            <p><strong>Exercise 6:</strong> Create a program with a recursive function to calculate Fibonacci numbers. Include a declaration before main.</p>
            
            <p><strong>Exercise 7:</strong> Fix this code (multiple errors):</p>
            <pre>
int calculate(int x, int y)
double calculate(int x, int y) {
    return x * y;
}

int main() {
    cout << calculate(5, 3.2) << endl;
}</pre>
            
            <p><strong>Exercise 8:</strong> Create a simple calculator program with functions for each operation. Put all function declarations at the top, then main, then definitions. Include at least add, subtract, multiply, divide.</p>
            
            <p><strong>Exercise 9:</strong> Write a program that demonstrates that you can have multiple declarations but only one definition. What error do you get if you have two definitions?</p>
            
            <p><strong>Exercise 10:</strong> Create a temperature conversion program with functions for C→F and F→C. Put declarations in a header file "temperature.h" and definitions in "temperature.cpp". Create a main.cpp that uses them.</p>
        </div>

        <!-- ==================== SECTION 11: KEY TERMS ==================== -->
        <h3>4.2.10 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Declaration</strong>
                <p style="font-size: 12px;">Tells compiler function exists</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Definition</strong>
                <p style="font-size: 12px;">Provides function implementation</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Prototype</strong>
                <p style="font-size: 12px;">Another name for declaration</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Header File</strong>
                <p style="font-size: 12px;">.h file with declarations</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Include Guard</strong>
                <p style="font-size: 12px;">Prevents multiple includes</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Signature</strong>
                <p style="font-size: 12px;">Function's name and parameters</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Interface</strong>
                <p style="font-size: 12px;">How to use the function</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Implementation</strong>
                <p style="font-size: 12px;">How the function works</p>
            </div>
        </div>
        
        <!-- ==================== PREVIEW OF NEXT SECTION ==================== -->
        <div style="background: linear-gradient(135deg, #667eea20, #764ba220); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">📖 Next: 4.3 Passing Value by Value</h4>
            <p>In the next section, we'll learn how to pass arguments to functions by value.</p>
        </div>
    `,
    navigation: {
        next: "ch4-3",
        prev: "ch4-1",
        nextTitle: "4.3 Passing Value by Value",
        prevTitle: "4.1 Definition of Function"
    }
};