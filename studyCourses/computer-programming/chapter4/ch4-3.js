// ===============================
// Computer Programming - Chapter 4.3
// Passing Value by Value
// ===============================

window.currentSubsectionData = {
    title: "4.3 Passing Value by Value",
    content: `
        <h2>4.3 Passing Value by Value</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand what pass-by-value means</li>
                <li>Learn how arguments are passed to functions</li>
                <li>Understand that parameters are copies of arguments</li>
                <li>See how changes inside functions don't affect original variables</li>
                <li>Learn when to use pass-by-value</li>
                <li>Understand the performance implications</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: INTRODUCTION TO PASS-BY-VALUE ==================== -->
        <h3>4.3.1 What is Pass-by-Value?</h3>
        
        <p><strong>Pass-by-value</strong> is the default way C++ passes arguments to functions. When you pass an argument by value, the function receives a <strong>copy</strong> of the original value. The function works with this copy, and any changes made to the parameter inside the function do NOT affect the original variable.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> Pass-by-value means the function receives a copy of the argument's value. The function works with the copy, leaving the original unchanged.</p>
        </div>
        
        <h4>Analogy: Photocopy Machine</h4>
        <p>Think of pass-by-value like making a photocopy:</p>
        <ul>
            <li>You have an original document (your variable)</li>
            <li>You make a photocopy (pass by value) and give it to someone</li>
            <li>They can write all over the copy, highlight it, even tear it up</li>
            <li>Your original document remains completely unchanged</li>
        </ul>

        <!-- ==================== SECTION 2: HOW PASS-BY-VALUE WORKS ==================== -->
        <h3>4.3.2 How Pass-by-Value Works</h3>
        
        <h4>Basic Example:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Function that tries to modify its parameter
void tryToModify(int x) {
    cout << "Inside function, before change: x = " << x << endl;
    x = 100;  // Modify the copy
    cout << "Inside function, after change: x = " << x << endl;
}

int main() {
    int num = 10;
    
    cout << "Before function call: num = " << num << endl;
    
    tryToModify(num);  // Pass num by value
    
    cout << "After function call: num = " << num << endl;
    
    return 0;
}</pre>
        
        <p><strong>Output:</strong></p>
        <pre>
Before function call: num = 10
Inside function, before change: x = 10
Inside function, after change: x = 100
After function call: num = 10</pre>
        
        <p>Notice that <code>num</code> in main remains 10 even though the function changed its parameter to 100. The function was working with a copy.</p>
        
        <h4>Visual Representation:</h4>
        
        <pre>
        BEFORE CALL:                DURING CALL:                 AFTER CALL:
        
        main's num = 10             main's num = 10              main's num = 10
                                    (unchanged)
                                    function's x = 10 (copy)     function's x is destroyed
                                    function changes x to 100</pre>

        <!-- ==================== SECTION 3: MULTIPLE PARAMETERS EXAMPLE ==================== -->
        <h3>4.3.3 Multiple Parameters Example</h3>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

void swapValues(int a, int b) {
    cout << "Inside function - before swap: a = " << a << ", b = " << b << endl;
    
    int temp = a;
    a = b;
    b = temp;
    
    cout << "Inside function - after swap: a = " << a << ", b = " << b << endl;
}

int main() {
    int x = 5, y = 10;
    
    cout << "Before function call: x = " << x << ", y = " << y << endl;
    
    swapValues(x, y);  // Pass by value - works on copies
    
    cout << "After function call: x = " << x << ", y = " << y << endl;
    
    return 0;
}</pre>
        
        <p><strong>Output:</strong></p>
        <pre>
Before function call: x = 5, y = 10
Inside function - before swap: a = 5, b = 10
Inside function - after swap: a = 10, b = 5
After function call: x = 5, y = 10</pre>
        
        <p>The swap happened inside the function, but the original variables remain unchanged because they were passed by value.</p>

        <!-- ==================== SECTION 4: PASS-BY-VALUE WITH DIFFERENT DATA TYPES ==================== -->
        <h3>4.3.4 Pass-by-Value with Different Data Types</h3>
        
        <p>Pass-by-value works the same way with all data types - a copy is made.</p>
        
        <h4>Example with double:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

void modifyDouble(double d) {
    cout << "Inside, before: " << d << endl;
    d = d * 2;
    cout << "Inside, after: " << d << endl;
}

int main() {
    double value = 3.14;
    
    cout << "Before: " << value << endl;
    modifyDouble(value);
    cout << "After: " << value << endl;
    
    return 0;
}</pre>
        
        <h4>Example with char:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

void modifyChar(char c) {
    cout << "Inside, before: " << c << endl;
    c = toupper(c);
    cout << "Inside, after: " << c << endl;
}

int main() {
    char letter = 'a';
    
    cout << "Before: " << letter << endl;
    modifyChar(letter);
    cout << "After: " << letter << endl;
    
    return 0;
}</pre>
        
        <h4>Example with bool:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

void modifyBool(bool flag) {
    cout << "Inside, before: " << boolalpha << flag << endl;
    flag = !flag;
    cout << "Inside, after: " << flag << endl;
}

int main() {
    bool isActive = true;
    
    cout << "Before: " << boolalpha << isActive << endl;
    modifyBool(isActive);
    cout << "After: " << isActive << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 5: PASS-BY-VALUE WITH ARRAYS (TRICKY) ==================== -->
        <h3>4.3.5 Pass-by-Value with Arrays - A Special Note</h3>
        
        <p>Arrays behave differently! When you pass an array to a function, it's <strong>not</strong> passed by value. Instead, the array "decays" to a pointer to its first element. This means changes to array elements inside the function <strong>do</strong> affect the original array.</p>
        
        <div class="warning-box" style="background: #ffe8e8; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #f5576c;">
            <p><strong>⚠️ Important:</strong> Arrays are not passed by value in C++! They are passed as pointers, so modifications inside functions affect the original array. We'll cover this in more detail later.</p>
        </div>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// This looks like pass-by-value, but it's actually pass-by-pointer!
void modifyArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        arr[i] = arr[i] * 2;  // This MODIFIES the original array!
    }
}

int main() {
    int numbers[] = {1, 2, 3, 4, 5};
    int size = 5;
    
    cout << "Before: ";
    for (int i = 0; i < size; i++) {
        cout << numbers[i] << " ";
    }
    cout << endl;
    
    modifyArray(numbers, size);
    
    cout << "After: ";
    for (int i = 0; i < size; i++) {
        cout << numbers[i] << " ";
    }
    cout << endl;
    
    return 0;
}</pre>
        
        <p><strong>Output:</strong></p>
        <pre>
Before: 1 2 3 4 5
After: 2 4 6 8 10</pre>

        <!-- ==================== SECTION 6: WHEN TO USE PASS-BY-VALUE ==================== -->
        <h3>4.3.6 When to Use Pass-by-Value</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Use Pass-by-Value When...</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">The function doesn't need to modify the original</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int square(int x) { return x * x; }</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">You're working with small, simple data types</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>bool isEven(int n)</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">You want to protect the original data</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Security, logging, validation functions</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">The function is mathematical/transformative</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>double sqrt(double x)</code></td>
            </tr>
        </table>
        
        <h4>Good Examples of Pass-by-Value:</h4>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;cmath&gt;
using namespace std;

// Mathematical functions - perfect for pass-by-value
double circleArea(double radius) {
    return 3.14159 * radius * radius;
}

int absolute(int x) {
    return (x < 0) ? -x : x;
}

// Predicate functions (return bool) - good for pass-by-value
bool isPositive(int x) {
    return x > 0;
}

bool isLeapYear(int year) {
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
}

// Functions that compute new values
double fahrenheitToCelsius(double f) {
    return (f - 32) * 5.0 / 9.0;
}

int main() {
    cout << "Area of circle r=5: " << circleArea(5) << endl;
    cout << "Absolute of -7: " << absolute(-7) << endl;
    cout << "Is 10 positive? " << isPositive(10) << endl;
    cout << "Is 2024 leap year? " << isLeapYear(2024) << endl;
    cout << "98.6°F in Celsius: " << fahrenheitToCelsius(98.6) << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 7: PERFORMANCE CONSIDERATIONS ==================== -->
        <h3>4.3.7 Performance Considerations</h3>
        
        <p>Pass-by-value creates a copy of the argument. For small types (int, char, bool, etc.), this is very fast. But for large types, copying can be expensive.</p>
        
        <h4>Small Types (Fast to Copy):</h4>
        <ul>
            <li><code>int</code> (4 bytes)</li>
            <li><code>char</code> (1 byte)</li>
            <li><code>bool</code> (1 byte)</li>
            <li><code>float</code> (4 bytes)</li>
            <li><code>double</code> (8 bytes)</li>
            <li>Pointers (4-8 bytes)</li>
        </ul>
        
        <h4>Large Types (Slow to Copy):</h4>
        <ul>
            <li>Large arrays</li>
            <li>Large structures/classes</li>
            <li>Long strings</li>
            <li>Vectors and other containers</li>
        </ul>
        
        <h4>Example Demonstrating Copy Cost:</h4>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;ctime&gt;
using namespace std;

// Pass by value - makes a copy
void processByValue(string s) {
    // Just a simple operation
    cout << "String length: " << s.length() << endl;
}

// Pass by reference (we'll learn this next) - no copy
void processByReference(const string& s) {
    cout << "String length: " << s.length() << endl;
}

int main() {
    string longString(1000000, 'X');  // String with 1 million X's
    
    clock_t start = clock();
    processByValue(longString);        // Makes a copy of 1 million chars!
    clock_t end = clock();
    cout << "Pass by value time: " << (end - start) << " ms" << endl;
    
    start = clock();
    processByReference(longString);    // No copy
    end = clock();
    cout << "Pass by reference time: " << (end - start) << " ms" << endl;
    
    return 0;
}</pre>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Best Practice:</strong> Use pass-by-value for small, simple types. For large objects, use pass-by-reference (covered in next section) or pass-by-const-reference to avoid expensive copies.</p>
        </div>

        <!-- ==================== SECTION 8: PASS-BY-VALUE WITH OBJECTS ==================== -->
        <h3>4.3.8 Pass-by-Value with Objects</h3>
        
        <p>When you pass an object by value, the copy constructor is called to create a copy. This can be expensive.</p>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

class Student {
public:
    string name;
    int id;
    double gpa;
    
    // Constructor
    Student(string n, int i, double g) : name(n), id(i), gpa(g) {
        cout << "Constructor called for " << name << endl;
    }
    
    // Copy constructor
    Student(const Student& other) {
        name = other.name;
        id = other.id;
        gpa = other.gpa;
        cout << "COPY constructor called for " << name << endl;
    }
    
    // Destructor
    ~Student() {
        cout << "Destructor called for " << name << endl;
    }
};

void printStudentByValue(Student s) {  // Copy made here!
    cout << "Student: " << s.name << ", ID: " << s.id 
         << ", GPA: " << s.gpa << endl;
}  // Copy destroyed here

int main() {
    Student alice("Alice", 12345, 3.8);
    
    cout << "\\nCalling printStudentByValue:" << endl;
    printStudentByValue(alice);  // Copy constructor called
    
    cout << "\\nBack in main. Alice still exists: " 
         << alice.name << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 9: COMMON MISTAKES ==================== -->
        <h3>4.3.9 Common Mistakes with Pass-by-Value</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Mistake</th>
                <th style="padding: 10px;">Example</th>
                <th style="padding: 10px;">Explanation</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Expecting changes to affect original</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <pre>void increment(int x) {
    x++;
}
int a = 5;
increment(a);
// a is still 5!</pre>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">Remember: you're modifying a copy</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Passing large objects by value unnecessarily</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <pre>void process(string s) {
    // expensive copy!
}</pre>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">Use const reference for read-only access to large objects</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Confusing arrays with pass-by-value</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <pre>void modifyArray(int arr[]) {
    arr[0] = 100;  // Modifies original!
}</pre>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">Arrays are not passed by value - they decay to pointers</td>
            </tr>
        </table>

        <!-- ==================== SECTION 10: COMPLETE EXAMPLE - MATH LIBRARY ==================== -->
        <h3>4.3.10 Complete Example: Math Library with Pass-by-Value</h3>
        
        <pre>
// ============================================
// Program: Math Library
// Author: CS Student
// Description: Demonstrates pass-by-value throughout
// ============================================

#include &lt;iostream&gt;
#include &lt;cmath&gt;
#include &lt;iomanip&gt;
using namespace std;

// ===== BASIC ARITHMETIC FUNCTIONS =====
// All use pass-by-value - perfect for simple types

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

// ===== ADVANCED MATH FUNCTIONS =====

int factorial(int n) {
    if (n < 0) return 0;
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

// ===== GEOMETRY FUNCTIONS =====

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

double triangleArea(double base, double height) {
    return 0.5 * base * height;
}

// ===== STATISTICS FUNCTIONS =====

double mean(double a, double b, double c) {
    return (a + b + c) / 3.0;
}

double median(double a, double b, double c) {
    // Simple median for three numbers
    if ((a >= b && a <= c) || (a >= c && a <= b)) return a;
    if ((b >= a && b <= c) || (b >= c && b <= a)) return b;
    return c;
}

// ===== UTILITY FUNCTIONS =====

void printResult(string operation, double result) {
    cout << left << setw(20) << operation 
         << ": " << fixed << setprecision(2) << result << endl;
}

void printSeparator() {
    cout << "------------------------------" << endl;
}

// ===== MAIN PROGRAM =====

int main() {
    cout << "===== MATH LIBRARY DEMONSTRATION =====" << endl;
    cout << "All functions use pass-by-value" << endl << endl;
    
    // Test basic arithmetic
    cout << "Basic Arithmetic:" << endl;
    printSeparator();
    printResult("10 + 5", add(10, 5));
    printResult("10 - 5", subtract(10, 5));
    printResult("10 × 5", multiply(10, 5));
    printResult("10 ÷ 5", divide(10, 5));
    printResult("10 % 3", modulus(10, 3));
    
    cout << endl;
    
    // Test advanced math
    cout << "Advanced Math:" << endl;
    printSeparator();
    printResult("5!", factorial(5));
    printResult("2^8", power(2, 8));
    cout << "Is 17 prime? " << (isPrime(17) ? "Yes" : "No") << endl;
    cout << "Is 20 prime? " << (isPrime(20) ? "Yes" : "No") << endl;
    
    cout << endl;
    
    // Test geometry
    cout << "Geometry:" << endl;
    printSeparator();
    printResult("Circle area (r=5)", circleArea(5));
    printResult("Circle circum (r=5)", circleCircumference(5));
    printResult("Rectangle area (4×6)", rectangleArea(4, 6));
    printResult("Rectangle perim (4×6)", rectanglePerimeter(4, 6));
    printResult("Triangle area (base=4, ht=3)", triangleArea(4, 3));
    
    cout << endl;
    
    // Test statistics
    cout << "Statistics:" << endl;
    printSeparator();
    printResult("Mean of 5,7,9", mean(5, 7, 9));
    printResult("Median of 5,9,7", median(5, 9, 7));
    
    // Demonstrate that original values aren't modified
    cout << endl;
    cout << "===== PASS-BY-VALUE DEMONSTRATION =====" << endl;
    
    int x = 10, y = 20;
    cout << "Original: x = " << x << ", y = " << y << endl;
    
    int sum = add(x, y);
    cout << "After add(x, y): x = " << x << ", y = " << y 
         << ", sum = " << sum << endl;
    
    int product = multiply(x, y);
    cout << "After multiply(x, y): x = " << x << ", y = " << y 
         << ", product = " << product << endl;
    
    cout << "\\nOriginal values unchanged - proof of pass-by-value!" << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 11: SUMMARY ==================== -->
        <h3>4.3.11 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li><strong>Pass-by-value</strong> creates a copy of the argument</li>
                <li>The function works with the copy; original remains unchanged</li>
                <li>Changes to parameters inside the function do NOT affect original variables</li>
                <li>Use pass-by-value when you don't need to modify the original</li>
                <li>Pass-by-value is efficient for small types (int, char, bool, etc.)</li>
                <li>For large objects, pass-by-value can be expensive due to copying</li>
                <li><strong>Arrays are NOT passed by value</strong> - they decay to pointers</li>
                <li>Pass-by-value is the default in C++</li>
                <li>Good for mathematical functions, predicates, and read-only operations</li>
                <li>Remember: you're getting a copy, so you can modify it freely inside</li>
            </ul>
        </div>

        <!-- ==================== SECTION 12: EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Write a function that tries to increment a number by 1. Show that the original remains unchanged.</p>
            
            <p><strong>Exercise 2:</strong> Create a function <code>swap</code> that attempts to swap two integers. Show that it doesn't work with pass-by-value and explain why.</p>
            
            <p><strong>Exercise 3:</strong> Write a function <code>calculate</code> that takes three integers (a, b, c) and returns their sum, product, and average (use pass-by-value).</p>
            
            <p><strong>Exercise 4:</strong> Create a program that demonstrates pass-by-value with different data types: int, double, char, bool. Show that modifications inside functions don't affect the originals.</p>
            
            <p><strong>Exercise 5:</strong> Write a function that takes a string by value and converts it to uppercase. Does the original string change? Why or why not?</p>
            
            <p><strong>Exercise 6:</strong> What's the output of this code?</p>
            <pre>
void mystery(int x, int y) {
    x = x + y;
    y = x - y;
    x = x - y;
}

int main() {
    int a = 5, b = 3;
    mystery(a, b);
    cout << a << " " << b << endl;
}</pre>
            
            <p><strong>Exercise 7:</strong> Write a temperature conversion program with functions for C→F, F→C, C→K, etc. All functions should use pass-by-value.</p>
            
            <p><strong>Exercise 8:</strong> Create a simple banking system with functions like <code>calculateInterest</code>, <code>applyTax</code>, etc. Show that the original balance isn't modified by these calculation functions.</p>
            
            <p><strong>Exercise 9:</strong> Demonstrate the array pitfall - write a function that tries to modify an array and show that it actually modifies the original.</p>
            
            <p><strong>Exercise 10:</strong> Write a program with a function that takes a large object (like a big string) by value and measure the time taken. Compare with pass-by-reference (if you know it) or explain why it's slow.</p>
        </div>

        <!-- ==================== SECTION 13: KEY TERMS ==================== -->
        <h3>4.3.12 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Pass-by-Value</strong>
                <p style="font-size: 12px;">Argument copied to function</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Copy</strong>
                <p style="font-size: 12px;">Duplicate of original value</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Parameter</strong>
                <p style="font-size: 12px;">Variable receiving the copy</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Argument</strong>
                <p style="font-size: 12px;">Original value passed</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Side Effect</strong>
                <p style="font-size: 12px;">Modifying original (can't happen with pass-by-value)</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Copy Constructor</strong>
                <p style="font-size: 12px;">Special function that creates copies</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Performance</strong>
                <p style="font-size: 12px;">Speed consideration for copying</p>
            </div>
        </div>
        
        <!-- ==================== PREVIEW OF NEXT SECTION ==================== -->
        <div style="background: linear-gradient(135deg, #667eea20, #764ba220); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">📖 Next: 4.4 Passing Value by Reference</h4>
            <p>In the next section, we'll learn how to pass arguments by reference, allowing functions to modify original variables.</p>
        </div>
    `,
    navigation: {
        next: "ch4-4",
        prev: "ch4-2",
        nextTitle: "4.4 Passing Value by Reference",
        prevTitle: "4.2 Declaration of Function"
    }
};