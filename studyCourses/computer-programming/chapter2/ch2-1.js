// ===============================
// Computer Programming - Chapter 2.1
// Structure of a Program
// ===============================

window.currentSubsectionData = {
    title: "2.1 Structure of a C++ Program",
    content: `
        <h2>2.1 Structure of a C++ Program</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand the basic structure of a C++ program</li>
                <li>Learn about preprocessor directives and header files</li>
                <li>Understand the main() function and its importance</li>
                <li>Learn about namespaces and the using directive</li>
                <li>Understand statements and blocks in C++</li>
                <li>Learn about return statements and program termination</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: OVERVIEW ==================== -->
        <h3>2.1.1 Overview of a C++ Program Structure</h3>
        
        <p>Every C++ program follows a specific structure. Understanding this structure is essential for writing correct and well-organized code.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Basic Structure:</strong> All C++ programs consist of three main parts: preprocessor directives, the main function, and program statements.</p>
        </div>
        
        <h4>The Simplest C++ Program:</h4>
        <pre>
#include &lt;iostream&gt;  // Preprocessor directive
using namespace std;   // Using directive

int main() {           // Main function
    cout &lt;&lt; "Hello, World!";  // Statement
    return 0;                 // Return statement
}                      // Closing brace</pre>
        
        <h4>General Structure:</h4>
        <pre>
// ===========================
// 1. Documentation Section (optional)
// ===========================
// Program Name: 
// Author: 
// Date: 
// Description: 

// ===========================
// 2. Preprocessor Directives
// ===========================
#include &lt;iostream&gt;
#include &lt;string&gt;
// other includes...

// ===========================
// 3. Using Directives
// ===========================
using namespace std;

// ===========================
// 4. Global Declarations (optional)
// ===========================
const double PI = 3.14159;
int globalVariable;

// ===========================
// 5. Function Prototypes (optional)
// ===========================
int add(int a, int b);
void displayMessage();

// ===========================
// 6. Main Function - Program Entry Point
// ===========================
int main() {
    // Variable declarations
    int x, y, result;
    
    // Program statements
    cout &lt;&lt; "Enter two numbers: ";
    cin >> x >> y;
    
    result = add(x, y);
    
    cout &lt;&lt; "Sum = " &lt;&lt; result &lt;&lt; endl;
    
    return 0;  // Indicates successful completion
}

// ===========================
// 7. User-defined Functions
// ===========================
int add(int a, int b) {
    return a + b;
}

void displayMessage() {
    cout &lt;&lt; "Welcome to C++ Programming!" &lt;&lt; endl;
}</pre>

        <!-- ==================== SECTION 2: DOCUMENTATION SECTION ==================== -->
        <h3>2.1.2 Documentation Section</h3>
        
        <p>The documentation section contains comments that describe the program. These are ignored by the compiler but are essential for human readers.</p>
        
        <pre>
// ===========================
// Program: Calculator
// Author: John Doe
// Date: January 15, 2024
// Description: A simple calculator
// that performs basic arithmetic
// ===========================</pre>
        
        <p><strong>Purpose:</strong></p>
        <ul>
            <li>Explains what the program does</li>
            <li>Identifies the author and creation date</li>
            <li>Documents any assumptions or limitations</li>
            <li>Helps with maintenance and updates</li>
        </ul>

        <!-- ==================== SECTION 3: PREPROCESSOR DIRECTIVES ==================== -->
        <h3>2.1.3 Preprocessor Directives</h3>
        
        <p>Preprocessor directives are instructions to the compiler that are processed before the actual compilation begins. They always start with the <code>#</code> symbol.</p>
        
        <h4>Common Preprocessor Directives:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Directive</th>
                <th style="padding: 10px;">Purpose</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>#include</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Includes header files</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>#include &lt;iostream&gt;</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>#define</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Defines macros or constants</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>#define PI 3.14159</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>#ifdef</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Conditional compilation</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>#ifdef DEBUG</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>#pragma</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Compiler-specific instructions</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>#pragma once</code></td>
            </tr>
        </table>
        
        <h4>Common Header Files:</h4>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Header File</th>
                <th style="padding: 10px;">Purpose</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>&lt;iostream&gt;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Input/output operations (cin, cout)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>&lt;string&gt;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">String handling functions</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>&lt;cmath&gt;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Mathematical functions (sqrt, pow, etc.)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>&lt;cstdlib&gt;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Standard library functions</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>&lt;ctime&gt;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Time and date functions</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>&lt;fstream&gt;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">File input/output operations</td>
            </tr>
        </table>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Note:</strong> The <code>#include</code> directive literally copies the contents of the specified file into your program at the point where the directive appears.</p>
        </div>

        <!-- ==================== SECTION 4: USING NAMESPACE ==================== -->
        <h3>2.1.4 Using Namespace</h3>
        
        <p>A <strong>namespace</strong> is a container that holds identifiers (names of functions, classes, variables) to avoid naming conflicts.</p>
        
        <pre>
using namespace std;</pre>
        
        <p>This line tells the compiler to use the <code>std</code> (standard) namespace. Without it, you would need to prefix every standard library item with <code>std::</code>.</p>
        
        <h4>Without using namespace std:</h4>
        <pre>
#include &lt;iostream&gt;

int main() {
    std::cout &lt;&lt; "Hello, World!" &lt;&lt; std::endl;
    std::string name;
    std::cin >> name;
    return 0;
}</pre>
        
        <h4>With using namespace std:</h4>
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

int main() {
    cout &lt;&lt; "Hello, World!" &lt;&lt; endl;
    string name;
    cin >> name;
    return 0;
}</pre>
        
        <h4>Alternative: Using Specific Items</h4>
        <p>Instead of importing the entire namespace, you can import only specific items:</p>
        <pre>
#include &lt;iostream&gt;
using std::cout;
using std::cin;
using std::endl;

int main() {
    cout &lt;&lt; "Hello, World!" &lt;&lt; endl;
    int x;
    cin >> x;
    return 0;
}</pre>
        
        <div class="warning-box" style="background: #ffe8e8; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #f5576c;">
            <p><strong>⚠️ Best Practice:</strong> In large programs, it's better to use specific using declarations or explicitly use <code>std::</code> prefix to avoid potential naming conflicts. For learning and small programs, <code>using namespace std;</code> is acceptable.</p>
        </div>

        <!-- ==================== SECTION 5: THE MAIN FUNCTION ==================== -->
        <h3>2.1.5 The main() Function</h3>
        
        <p>Every C++ program must have a <code>main()</code> function. This is where program execution begins.</p>
        
        <h4>Syntax:</h4>
        <pre>
return_type main() {
    // statements
    return value;
}</pre>
        
        <h4>Valid Forms of main():</h4>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Form</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int main()</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Most common form, returns integer</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int main() { return 0; }</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int main(void)</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Same as above, explicitly no parameters</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int main(void) { return 0; }</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>void main()</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Not standard C++, avoid using</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>void main() { }</code> (not recommended)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int main(int argc, char* argv[])</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">For command-line arguments</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int main(int argc, char* argv[])</code></td>
            </tr>
        </table>
        
        <h4>Return Values:</h4>
        <ul>
            <li><code>return 0;</code> - Indicates successful program execution</li>
            <li><code>return 1;</code> or any non-zero - Indicates an error occurred</li>
        </ul>
        
        <p>The operating system can check this return value to determine if the program ran successfully.</p>

        <!-- ==================== SECTION 6: STATEMENTS AND BLOCKS ==================== -->
        <h3>2.1.6 Statements and Blocks</h3>
        
        <h4>Statements:</h4>
        <p>A <strong>statement</strong> is a complete instruction that tells the computer to perform an action. Every statement in C++ must end with a semicolon (<code>;</code>).</p>
        
        <pre>
int x = 10;           // Declaration statement
x = x + 5;            // Assignment statement
cout << x;            // Output statement
cin >> x;             // Input statement
if (x > 0) { }        // Control statement
return 0;             // Return statement</pre>
        
        <h4>Blocks:</h4>
        <p>A <strong>block</strong> is a group of statements enclosed in curly braces <code>{ }</code>. Blocks can contain zero or more statements.</p>
        
        <pre>
{
    int a = 5;
    int b = 10;
    int c = a + b;
    cout << c;
}</pre>
        
        <p>Blocks are used to group statements together, especially in control structures like if statements and loops.</p>
        
        <pre>
if (x > 0) {
    // This is a block
    cout << "Positive" << endl;
    x = x * 2;
} else {
    // This is another block
    cout << "Non-positive" << endl;
    x = 0;
}</pre>

        <!-- ==================== SECTION 7: COMPLETE PROGRAM EXAMPLE ==================== -->
        <h3>2.1.7 Complete Program Example with All Parts</h3>
        
        <pre>
// ============================================
// Program: Temperature Converter
// Author: CS Student
// Date: 2024
// Description: Converts Fahrenheit to Celsius
// ============================================

// Preprocessor Directives
#include &lt;iostream&gt;
#include &lt;iomanip&gt;  // For formatting output

// Using Directive
using namespace std;

// Global Constant
const double FAHRENHEIT_FREEZING = 32.0;
const double CONVERSION_FACTOR = 5.0 / 9.0;

// Function Prototype
double fahrenheitToCelsius(double fahrenheit);

// Main Function
int main() {
    // Variable declarations
    double fahrenheit, celsius;
    char choice;
    
    // Program title
    cout << "=========================" << endl;
    cout << " TEMPERATURE CONVERTER" << endl;
    cout << "=========================" << endl;
    
    // Input
    cout << "Enter temperature in Fahrenheit: ";
    cin >> fahrenheit;
    
    // Process - call function
    celsius = fahrenheitToCelsius(fahrenheit);
    
    // Output with formatting
    cout << fixed << setprecision(2);
    cout << fahrenheit << "°F = " << celsius << "°C" << endl;
    
    // Ask if user wants to continue
    cout << "\nConvert another? (y/n): ";
    cin >> choice;
    
    if (choice == 'y' || choice == 'Y') {
        main();  // Recursive call - for illustration only
        // Better: use a loop in real programs
    }
    
    cout << "Thank you for using the converter!" << endl;
    
    return 0;  // Successful completion
}

// Function Definition
double fahrenheitToCelsius(double fahrenheit) {
    double celsius = (fahrenheit - FAHRENHEIT_FREEZING) * CONVERSION_FACTOR;
    return celsius;
}</pre>

        <!-- ==================== SECTION 8: COMMON ERRORS ==================== -->
        <h3>2.1.8 Common Errors in Program Structure</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Error</th>
                <th style="padding: 10px;">Example</th>
                <th style="padding: 10px;">Fix</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Missing #include</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Using cout without iostream</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Add <code>#include &lt;iostream&gt;</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Missing semicolon</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>cout << "Hello"</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Add <code>;</code> at end</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Missing namespace</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">cout without std:: or using</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Add <code>using namespace std;</code> or use <code>std::cout</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Missing main()</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Program without main function</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Every program needs a main function</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Wrong main return type</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>void main()</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Use <code>int main()</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Missing return statement</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">int main() with no return</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Add <code>return 0;</code> at the end</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Mismatched braces</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int main() { cout << "Hi"; </code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Add closing brace <code>}</code></td>
            </tr>
        </table>

        <!-- ==================== SECTION 9: SUMMARY ==================== -->
        <h3>2.1.9 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li>A C++ program consists of: documentation, preprocessor directives, using directives, global declarations, main function, and user-defined functions</li>
                <li><strong>Preprocessor directives</strong> (like <code>#include</code>) are processed before compilation and start with <code>#</code></li>
                <li><strong>Header files</strong> (like <code>&lt;iostream&gt;</code>) provide declarations for library functions</li>
                <li>The <strong>main() function</strong> is the entry point of every C++ program</li>
                <li><strong>Namespaces</strong> prevent naming conflicts; <code>using namespace std;</code> imports the standard namespace</li>
                <li>Every statement must end with a <strong>semicolon</strong> <code>;</code></li>
                <li>Groups of statements are enclosed in <strong>blocks</strong> <code>{ }</code></li>
                <li>The <strong>return 0;</strong> statement indicates successful program execution</li>
                <li>Common errors include missing includes, missing semicolons, and mismatched braces</li>
            </ul>
        </div>

        <!-- ==================== SECTION 10: EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Identify each part of this program:</p>
            <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    cout << "Learning C++ is fun!" << endl;
    return 0;
}</pre>
            <p>List: preprocessor directive, using directive, main function, statement, return statement.</p>
            
            <p><strong>Exercise 2:</strong> Write the smallest possible valid C++ program.</p>
            
            <p><strong>Exercise 3:</strong> What is wrong with this program?</p>
            <pre>
#include iostream
using namespace std

int main()
    cout << "Hello" << endl
    return 0
}</pre>
            <p>Fix all the errors.</p>
            
            <p><strong>Exercise 4:</strong> Write a program that includes at least two header files: <code>&lt;iostream&gt;</code> and <code>&lt;cmath&gt;</code>. Use a function from each.</p>
            
            <p><strong>Exercise 5:</strong> Create a program with a global constant, a function prototype, a main function, and a user-defined function. The function should calculate the area of a circle given its radius.</p>
            
            <p><strong>Exercise 6:</strong> What is the difference between <code>#include &lt;iostream&gt;</code> and <code>#include "myheader.h"</code>?</p>
            
            <p><strong>Exercise 7:</strong> Write a program that uses command-line arguments. Display the number of arguments and each argument.</p>
        </div>

        <!-- ==================== SECTION 11: KEY TERMS ==================== -->
        <h3>2.1.11 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Preprocessor Directive</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Instructions beginning with #</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Header File</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">File with declarations</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Namespace</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Container for identifiers</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">main()</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Program entry point</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Statement</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Complete instruction</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Block</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Group of statements { }</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Function</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Reusable code block</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Return Statement</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Returns value from function</p>
            </div>
        </div>
        
        <!-- ==================== PREVIEW OF NEXT SECTION ==================== -->
        <div style="background: linear-gradient(135deg, #667eea20, #764ba220); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">📖 Coming Up Next</h4>
            <p>In the next section, we will learn about:</p>
            <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-top: 15px;">
                <span style="background: #667eea; color: white; padding: 8px 20px; border-radius: 30px;">2.2 C++ IDE</span>
            </div>
            <p style="margin-top: 15px;">Learn about Integrated Development Environments and how to write, compile, and run C++ programs.</p>
        </div>
    `,
    navigation: {
        next: "ch2-2",
        prev: null,
        nextTitle: "2.2 C++ IDE",
        prevTitle: null
    }
};