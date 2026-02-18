// ===============================
// Computer Programming - Chapter 2.8
// Operators
// ===============================

window.currentSubsectionData = {
    title: "2.8 Operators in C++",
    content: `
        <h2>2.8 Operators in C++</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand what operators are and why they are used</li>
                <li>Learn all types of operators in C++</li>
                <li>Understand assignment and compound assignment operators</li>
                <li>Master arithmetic, relational, and logical operators</li>
                <li>Learn increment/decrement operators and their types</li>
                <li>Understand operator precedence and associativity</li>
            </ul>
        </div>

        <!-- ==================== INTRODUCTION ==================== -->
        <h3>2.8.0 Introduction to Operators</h3>
        
        <p><strong>Operators</strong> are symbols that tell the compiler to perform specific mathematical, relational, or logical operations. They are the building blocks of expressions in C++.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> An operator is a symbol that operates on one or more operands to produce a result.</p>
        </div>
        
        <h4>Basic Terminology:</h4>
        <ul>
            <li><strong>Operator:</strong> The symbol that performs an operation (+, -, *, /, etc.)</li>
            <li><strong>Operand:</strong> The values on which the operator works</li>
            <li><strong>Expression:</strong> A combination of operators and operands that evaluates to a value</li>
        </ul>
        
        <pre>
int result = 5 + 3;
//            ↑   ↑ ↑
//        operand | operand
//              operator</pre>
        
        <h4>Types of Operators in C++:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Category</th>
                <th style="padding: 10px;">Operators</th>
                <th style="padding: 10px;">Purpose</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Assignment</td>
                <td style="padding: 10px; border: 1px solid #ddd;">=</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Assign values to variables</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Compound Assignment</td>
                <td style="padding: 10px; border: 1px solid #ddd;">+=, -=, *=, /=, %=</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Combine arithmetic with assignment</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Arithmetic</td>
                <td style="padding: 10px; border: 1px solid #ddd;">+, -, *, /, %</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Perform mathematical operations</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Relational</td>
                <td style="padding: 10px; border: 1px solid #ddd;">==, !=, <, >, <=, >=</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Compare values</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Increment/Decrement</td>
                <td style="padding: 10px; border: 1px solid #ddd;">++, --</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Add or subtract 1</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Logical</td>
                <td style="padding: 10px; border: 1px solid #ddd;">&&, ||, !</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Boolean logic operations</td>
            </tr>
        </table>

        <!-- ==================== SECTION 1: ASSIGNMENT OPERATORS ==================== -->
        <h3>2.8.1 Assignment Operators</h3>
        
        <p>The <strong>assignment operator</strong> (=) is used to assign a value to a variable.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Syntax:</strong> <code>variable = expression;</code></p>
        </div>
        
        <h4>Basic Assignment:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Simple assignment
    int x = 10;           // Assign 10 to x
    double y = 3.14;      // Assign 3.14 to y
    char grade = 'A';     // Assign 'A' to grade
    bool flag = true;     // Assign true to flag
    
    cout << "x = " << x << endl;
    cout << "y = " << y << endl;
    cout << "grade = " << grade << endl;
    cout << "flag = " << flag << endl;
    
    // Assignment after declaration
    int z;
    z = 25;               // Assign 25 to z
    
    // Assigning from expressions
    int a = 5;
    int b = 10;
    int c = a + b;        // c gets 15
    
    cout << "c = " << c << endl;
    
    return 0;
}</pre>
        
        <h4>Chained Assignment:</h4>
        
        <pre>
int a, b, c;
a = b = c = 10;  // All three variables become 10
// This works because assignment associates right-to-left
// First: c = 10
// Then:  b = c (b becomes 10)
// Then:  a = b (a becomes 10)

cout << "a = " << a << ", b = " << b << ", c = " << c << endl;</pre>
        
        <h4>Assignment with Different Types:</h4>
        
        <pre>
int i;
double d;
char c;

i = 3.14;        // i becomes 3 (truncated, warning may occur)
d = 10;          // d becomes 10.0 (int promoted to double)
c = 65;          // c becomes 'A' (ASCII value 65)

cout << "i = " << i << endl;
cout << "d = " << d << endl;
cout << "c = " << c << endl;</pre>
        
        <div class="warning-box" style="background: #ffe8e8; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #f5576c;">
            <p><strong>⚠️ Important:</strong> Assignment (=) is different from comparison (==). Don't confuse them!</p>
            <pre>
int x = 5;    // Assignment: sets x to 5
if (x == 5)   // Comparison: checks if x equals 5</pre>
        </div>

        <!-- ==================== SECTION 2: COMPOUND ASSIGNMENT OPERATORS ==================== -->
        <h3>2.8.2 Compound Assignment Operators</h3>
        
        <p><strong>Compound assignment operators</strong> combine an arithmetic operation with assignment. They provide a shorthand way to modify a variable.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Operator</th>
                <th style="padding: 10px;">Example</th>
                <th style="padding: 10px;">Equivalent to</th>
                <th style="padding: 10px;">Description</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>+=</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x += 5;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x = x + 5;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Add and assign</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>-=</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x -= 3;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x = x - 3;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Subtract and assign</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>*=</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x *= 2;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x = x * 2;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Multiply and assign</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>/=</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x /= 4;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x = x / 4;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Divide and assign</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>%=</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x %= 3;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x = x % 3;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Modulus and assign</td>
            </tr>
        </table>
        
        <h4>Examples:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int x = 10;
    
    cout << "Initial x = " << x << endl;
    
    x += 5;   // x = x + 5
    cout << "After x += 5: " << x << endl;  // 15
    
    x -= 3;   // x = x - 3
    cout << "After x -= 3: " << x << endl;  // 12
    
    x *= 2;   // x = x * 2
    cout << "After x *= 2: " << x << endl;  // 24
    
    x /= 4;   // x = x / 4
    cout << "After x /= 4: " << x << endl;  // 6
    
    x %= 4;   // x = x % 4
    cout << "After x %= 4: " << x << endl;  // 2
    
    // Works with other types too
    double y = 10.5;
    y += 2.5;     // y = 13.0
    cout << "y after += 2.5: " << y << endl;
    
    string name = "John";
    name += " Doe";   // String concatenation
    cout << "name after +=: " << name << endl;  // "John Doe"
    
    return 0;
}</pre>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Tip:</strong> Compound assignment operators are not just shorthand - they can be more efficient because the variable is evaluated only once.</p>
        </div>

        <!-- ==================== SECTION 3: ARITHMETIC OPERATORS ==================== -->
        <h3>2.8.3 Arithmetic Operators</h3>
        
        <p><strong>Arithmetic operators</strong> perform mathematical operations on numeric values.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Operator</th>
                <th style="padding: 10px;">Meaning</th>
                <th style="padding: 10px;">Example</th>
                <th style="padding: 10px;">Result</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>+</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Addition</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>5 + 3</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>8</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>-</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Subtraction</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>5 - 3</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>2</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>*</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Multiplication</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>5 * 3</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>15</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>/</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Division</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>5 / 3</code> (int)</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>1</code> (truncated)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>/</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Division</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>5.0 / 3.0</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>1.66667</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>%</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Modulus (remainder)</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>5 % 3</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>2</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>+</code> (unary)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Unary plus</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>+5</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>5</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>-</code> (unary)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Unary minus (negation)</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>-5</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>-5</code></td>
            </tr>
        </table>
        
        <h4>Examples:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int a = 15, b = 4;
    
    // Basic arithmetic
    cout << "a + b = " << a + b << endl;  // 19
    cout << "a - b = " << a - b << endl;  // 11
    cout << "a * b = " << a * b << endl;  // 60
    cout << "a / b = " << a / b << endl;  // 3 (integer division)
    cout << "a % b = " << a % b << endl;  // 3 (remainder)
    
    // Integer division vs floating-point division
    int x = 5, y = 2;
    double z1 = x / y;           // 2.0 (integer division first, then conversion)
    double z2 = x / 2.0;         // 2.5 (floating-point division)
    double z3 = static_cast&lt;double&gt;(x) / y;  // 2.5 (explicit conversion)
    
    cout << "z1 = " << z1 << endl;
    cout << "z2 = " << z2 << endl;
    cout << "z3 = " << z3 << endl;
    
    // Unary operators
    int p = 10;
    int q = -p;        // q = -10
    int r = +p;        // r = 10 (rarely used)
    
    cout << "p = " << p << ", q = " << q << ", r = " << r << endl;
    
    // Modulus with negative numbers
    cout << "5 % 3 = " << 5 % 3 << endl;    // 2
    cout << "-5 % 3 = " << -5 % 3 << endl;  // -2
    cout << "5 % -3 = " << 5 % -3 << endl;  // 2
    cout << "-5 % -3 = " << -5 % -3 << endl; // -2
    
    return 0;
}</pre>
        
        <div class="warning-box" style="background: #ffe8e8; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #f5576c;">
            <p><strong>⚠️ Important:</strong> Integer division truncates (cuts off) the decimal part. Always be aware of whether you're doing integer or floating-point division!</p>
        </div>

        <!-- ==================== SECTION 4: RELATIONAL OPERATORS ==================== -->
        <h3>2.8.4 Relational Operators</h3>
        
        <p><strong>Relational operators</strong> compare two values and return a boolean result (true or false).</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Operator</th>
                <th style="padding: 10px;">Meaning</th>
                <th style="padding: 10px;">Example</th>
                <th style="padding: 10px;">Result (if x=5, y=10)</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>==</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Equal to</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x == y</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>false</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>!=</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Not equal to</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x != y</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>true</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code><</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Less than</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x < y</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>true</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>></code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Greater than</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x > y</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>false</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code><=</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Less than or equal to</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x <= y</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>true</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>>=</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Greater than or equal to</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x >= y</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>false</code></td>
            </tr>
        </table>
        
        <h4>Examples:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int a = 10, b = 20;
    
    // Relational comparisons
    cout << boolalpha;  // Print true/false instead of 1/0
    
    cout << "a == b: " << (a == b) << endl;  // false
    cout << "a != b: " << (a != b) << endl;  // true
    cout << "a < b: " << (a < b) << endl;    // true
    cout << "a > b: " << (a > b) << endl;    // false
    cout << "a <= b: " << (a <= b) << endl;  // true
    cout << "a >= b: " << (a >= b) << endl;  // false
    
    // Using in conditions
    if (a < b) {
        cout << "a is less than b" << endl;
    }
    
    // Comparing different types
    int x = 5;
    double y = 5.0;
    cout << "x == y: " << (x == y) << endl;  // true (int promoted to double)
    
    // Comparing characters (compares ASCII values)
    char c1 = 'A', c2 = 'B';
    cout << "'A' < 'B': " << (c1 < c2) << endl;  // true (65 < 66)
    
    return 0;
}</pre>
        
        <div class="warning-box" style="background: #ffe8e8; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #f5576c;">
            <p><strong>⚠️ Important:</strong> Don't confuse assignment (=) with comparison (==). This is a very common bug!</p>
            <pre>
int x = 5;
if (x = 10) { ... }  // WRONG! This assigns 10 to x, always true
if (x == 10) { ... } // RIGHT! This compares x to 10</pre>
        </div>

        <!-- ==================== SECTION 5: INCREMENT AND DECREMENT OPERATORS ==================== -->
        <h3>2.8.5 Increment and Decrement Operators</h3>
        
        <p>The <strong>increment (++)</strong> and <strong>decrement (--)</strong> operators add or subtract 1 from a variable.</p>
        
        <h4>Two Forms:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Operator</th>
                <th style="padding: 10px;">Name</th>
                <th style="padding: 10px;">Example</th>
                <th style="padding: 10px;">Effect</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>++</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Increment</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x++</code> or <code>++x</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Adds 1 to x</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>--</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Decrement</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x--</code> or <code>--x</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Subtracts 1 from x</td>
            </tr>
        </table>
        
        <h4>Basic Examples:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int x = 5;
    
    x++;  // x becomes 6
    cout << "After x++: " << x << endl;
    
    x--;  // x becomes 5
    cout << "After x--: " << x << endl;
    
    ++x;  // x becomes 6
    cout << "After ++x: " << x << endl;
    
    --x;  // x becomes 5
    cout << "After --x: " << x << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 6: INFIX AND POSTFIX TYPES ==================== -->
        <h3>2.8.6 Infix and Postfix Types (Prefix vs Postfix)</h3>
        
        <p>The increment/decrement operators have two forms that behave differently in expressions:</p>
        
        <h4>1. Prefix (++x, --x)</h4>
        <p>The variable is incremented/decremented first, then its new value is used in the expression.</p>
        
        <h4>2. Postfix (x++, x--)</h4>
        <p>The current value of the variable is used in the expression first, then it is incremented/decremented.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Operator</th>
                <th style="padding: 10px;">Example</th>
                <th style="padding: 10px;">Order of Operations</th>
                <th style="padding: 10px;">Result</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>++x</code> (prefix)</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>y = ++x;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">1. Increment x<br>2. Assign to y</td>
                <td style="padding: 10px; border: 1px solid #ddd;">x and y both get new value</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x++</code> (postfix)</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>y = x++;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">1. Assign x to y<br>2. Increment x</td>
                <td style="padding: 10px; border: 1px solid #ddd;">y gets old value, x gets new value</td>
            </tr>
        </table>
        
        <h4>Detailed Examples:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Prefix increment
    int a = 5;
    int b = ++a;  // a is incremented to 6, then b gets 6
    
    cout << "Prefix example:" << endl;
    cout << "a = " << a << ", b = " << b << endl;  // a=6, b=6
    
    // Postfix increment
    int x = 5;
    int y = x++;  // y gets 5, then x is incremented to 6
    
    cout << "\\nPostfix example:" << endl;
    cout << "x = " << x << ", y = " << y << endl;  // x=6, y=5
    
    // More complex examples
    int p = 5;
    int q = 5;
    
    int r = ++p + 2;  // p becomes 6, then 6+2=8 assigned to r
    int s = q++ + 2;  // 5+2=7 assigned to s, then q becomes 6
    
    cout << "\\nComplex expressions:" << endl;
    cout << "p = " << p << ", r = " << r << endl;  // p=6, r=8
    cout << "q = " << q << ", s = " << s << endl;  // q=6, s=7
    
    // Multiple increments in one expression (avoid in real code!)
    int m = 5;
    int n = ++m + m++;  // Very confusing! Avoid this
    
    cout << "\\nAvoid this: m = " << m << ", n = " << n << endl;
    
    // Common use in loops
    cout << "\\nLoop example:" << endl;
    for (int i = 0; i < 5; i++) {  // Postfix is typical in loops
        cout << i << " ";
    }
    cout << endl;
    
    return 0;
}</pre>
        
        <h4>Summary Table:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Expression</th>
                <th style="padding: 10px;">Equivalent to</th>
                <th style="padding: 10px;">Result (starting with x=5)</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>y = ++x;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x = x+1; y = x;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">x=6, y=6</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>y = x++;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>y = x; x = x+1;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">x=6, y=5</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>y = --x;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x = x-1; y = x;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">x=4, y=4</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>y = x--;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>y = x; x = x-1;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">x=4, y=5</td>
            </tr>
        </table>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Best Practice:</strong> Avoid using increment/decrement operators in complex expressions. Use them alone on their own line for clarity.</p>
            <pre>
// Good
x++;
y = x + 5;

// Avoid
y = x++ + 5;</pre>
        </div>

        <!-- ==================== SECTION 7: PRECEDENCE OF OPERATORS ==================== -->
        <h3>2.8.7 Precedence of Operators</h3>
        
        <p><strong>Operator precedence</strong> determines the order in which operators are evaluated in an expression. Operators with higher precedence are evaluated first.</p>
        
        <p><strong>Associativity</strong> determines the order when operators have the same precedence (left-to-right or right-to-left).</p>
        
        <h4>C++ Operator Precedence Table (Highest to Lowest):</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Precedence</th>
                <th style="padding: 10px;">Operators</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Associativity</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">1 (highest)</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>::</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Scope resolution</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Left-to-right</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">2</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>() [] . -></code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Function call, subscript, member access</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Left-to-right</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">3</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>++ -- + - ! ~</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Unary operators (postfix)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Right-to-left</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">4</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>* / %</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Multiplicative</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Left-to-right</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">5</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>+ -</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Additive</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Left-to-right</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">6</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code><< >></code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Shift</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Left-to-right</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">7</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>< <= > >=</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Relational</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Left-to-right</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">8</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>== !=</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Equality</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Left-to-right</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">9</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>&</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Bitwise AND</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Left-to-right</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">10</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>^</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Bitwise XOR</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Left-to-right</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">11</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>|</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Bitwise OR</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Left-to-right</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">12</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>&&</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Logical AND</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Left-to-right</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">13</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>||</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Logical OR</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Left-to-right</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">14</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>?:</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Ternary conditional</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Right-to-left</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">15</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>= += -= *= /= %=</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Assignment</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Right-to-left</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">16 (lowest)</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>,</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Comma</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Left-to-right</td>
            </tr>
        </table>
        
        <h4>Examples Demonstrating Precedence:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Multiplication before addition
    int a = 5 + 3 * 2;      // 5 + (3 * 2) = 5 + 6 = 11
    int b = (5 + 3) * 2;    // (5 + 3) * 2 = 8 * 2 = 16
    
    cout << "5 + 3 * 2 = " << a << endl;
    cout << "(5 + 3) * 2 = " << b << endl;
    
    // Relational before logical
    bool c = 5 > 3 && 2 < 4;  // (5 > 3) && (2 < 4) = true && true = true
    cout << "5 > 3 && 2 < 4 = " << boolalpha << c << endl;
    
    // Arithmetic before relational
    bool d = 5 + 3 > 2 * 3;    // (5 + 3) > (2 * 3) = 8 > 6 = true
    cout << "5 + 3 > 2 * 3 = " << d << endl;
    
    // Complex expression
    int x = 5, y = 10, z = 15;
    int result = x + y * z / 2 - 3;  // x + ((y * z) / 2) - 3
    // Step 1: y * z = 150
    // Step 2: 150 / 2 = 75
    // Step 3: x + 75 = 80
    // Step 4: 80 - 3 = 77
    
    cout << "x + y * z / 2 - 3 = " << result << endl;
    
    // Using parentheses for clarity
    int better = x + ((y * z) / 2) - 3;  // Same result, clearer
    
    // Assignment precedence
    int p, q, r;
    p = q = r = 10;  // Right-to-left: r=10, then q=r, then p=q
    
    cout << "p = " << p << ", q = " << q << ", r = " << r << endl;
    
    return 0;
}</pre>
        
        <h4>Common Precedence Rules to Remember:</h4>
        
        <ul>
            <li><strong>Multiplication/Division</strong> before <strong>Addition/Subtraction</strong></li>
            <li><strong>Arithmetic</strong> before <strong>Relational</strong> before <strong>Logical</strong></li>
            <li><strong>Assignment</strong> has very low precedence</li>
            <li><strong>Parentheses ()</strong> override all precedence rules</li>
        </ul>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Best Practice:</strong> When in doubt, use parentheses to make your intentions clear. Code is read by humans first, compilers second!</p>
            <pre>
// Less clear
if (x + y > z * 2 && flag || mode == 3)

// More clear
if (((x + y) > (z * 2)) && (flag || (mode == 3)))</pre>
        </div>

        <!-- ==================== SECTION 8: COMPLETE OPERATOR EXAMPLE ==================== -->
        <h3>2.8.8 Complete Operator Example Program</h3>
        
        <pre>
// ============================================
// Program: Operator Demonstration
// Author: CS Student
// Description: Demonstrates all operators in C++
// ============================================

#include &lt;iostream&gt;
#include &lt;iomanip&gt;
using namespace std;

int main() {
    cout << "===== OPERATOR DEMONSTRATION =====" << endl;
    
    // Assignment operators
    cout << "\\n--- Assignment Operators ---" << endl;
    int a = 10, b = 20;
    cout << "a = " << a << ", b = " << b << endl;
    
    // Compound assignment
    a += 5;  // a = a + 5
    cout << "a += 5: " << a << endl;
    
    b *= 2;  // b = b * 2
    cout << "b *= 2: " << b << endl;
    
    // Arithmetic operators
    cout << "\\n--- Arithmetic Operators ---" << endl;
    int x = 15, y = 4;
    cout << "x = " << x << ", y = " << y << endl;
    cout << "x + y = " << x + y << endl;
    cout << "x - y = " << x - y << endl;
    cout << "x * y = " << x * y << endl;
    cout << "x / y = " << x / y << " (integer division)" << endl;
    cout << "x % y = " << x % y << " (remainder)" << endl;
    
    // Floating-point division
    double p = 15.0, q = 4.0;
    cout << "p / q = " << p / q << " (float division)" << endl;
    
    // Relational operators
    cout << "\\n--- Relational Operators ---" << endl;
    cout << boolalpha;
    cout << "x < y: " << (x < y) << endl;
    cout << "x > y: " << (x > y) << endl;
    cout << "x == y: " << (x == y) << endl;
    cout << "x != y: " << (x != y) << endl;
    
    // Logical operators
    cout << "\\n--- Logical Operators ---" << endl;
    bool t = true, f = false;
    cout << "true && false: " << (t && f) << endl;
    cout << "true || false: " << (t || f) << endl;
    cout << "!true: " << (!t) << endl;
    
    // Increment/Decrement (prefix vs postfix)
    cout << "\\n--- Increment/Decrement ---" << endl;
    int counter = 5;
    cout << "counter = " << counter << endl;
    cout << "counter++: " << counter++ << " (then becomes " << counter << ")" << endl;
    
    counter = 5;
    cout << "++counter: " << ++counter << " (now " << counter << ")" << endl;
    
    // Operator precedence
    cout << "\\n--- Operator Precedence ---" << endl;
    int result1 = 5 + 3 * 2;
    int result2 = (5 + 3) * 2;
    cout << "5 + 3 * 2 = " << result1 << " (multiplication first)" << endl;
    cout << "(5 + 3) * 2 = " << result2 << " (parentheses override)" << endl;
    
    // Complex expression
    int m = 10, n = 5, o = 2;
    int complex = m + n * o - 3 + m / o;
    // Step 1: n * o = 10
    // Step 2: m / o = 5
    // Step 3: m + 10 = 20
    // Step 4: 20 - 3 = 17
    // Step 5: 17 + 5 = 22
    cout << "m + n * o - 3 + m / o = " << complex << endl;
    
    // Temperature conversion example using operators
    cout << "\\n--- Practical Example: Temperature Conversion ---" << endl;
    double celsius, fahrenheit;
    cout << "Enter temperature in Celsius: ";
    cin >> celsius;
    
    fahrenheit = (celsius * 9.0 / 5.0) + 32.0;
    cout << celsius << "°C = " << fahrenheit << "°F" << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 9: SUMMARY ==================== -->
        <h3>2.8.9 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li><strong>Assignment operator (=)</strong> assigns values to variables</li>
                <li><strong>Compound assignment operators</strong> (+=, -=, *=, /=, %=) combine arithmetic with assignment</li>
                <li><strong>Arithmetic operators</strong> (+, -, *, /, %) perform mathematical operations</li>
                <li><strong>Integer division</strong> truncates the decimal part - be careful!</li>
                <li><strong>Modulus operator (%)</strong> gives the remainder of division</li>
                <li><strong>Relational operators</strong> (==, !=, <, >, <=, >=) compare values and return boolean</li>
                <li><strong>Logical operators</strong> (&&, ||, !) combine boolean expressions</li>
                <li><strong>Increment/decrement operators</strong> (++, --) add or subtract 1</li>
                <li><strong>Prefix (++x)</strong> increments then uses the value</li>
                <li><strong>Postfix (x++)</strong> uses the value then increments</li>
                <li><strong>Operator precedence</strong> determines evaluation order</li>
                <li><strong>Parentheses ()</strong> override precedence rules</li>
                <li>Don't confuse <strong>= (assignment)</strong> with <strong>== (comparison)</strong></li>
                <li>Avoid complex expressions with multiple increments/decrements</li>
                <li>Use parentheses to make your intentions clear</li>
            </ul>
        </div>

        <!-- ==================== SECTION 10: EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Evaluate the following expressions (without running code):</p>
            <pre>
int a = 10, b = 3, c = 5;
a += b * 2;
b = c++ + a;
c = ++b * 2;
// What are a, b, c?</pre>
            
            <p><strong>Exercise 2:</strong> Write a program that converts seconds into hours, minutes, and seconds. Use / and % operators.</p>
            <p>Example: 3665 seconds = 1 hour, 1 minute, 5 seconds</p>
            
            <p><strong>Exercise 3:</strong> What is the output of this code?</p>
            <pre>
int x = 5;
cout << x++ << endl;
cout << ++x << endl;
cout << x-- << endl;
cout << --x << endl;</pre>
            
            <p><strong>Exercise 4:</strong> Write a program that asks for three numbers and determines if they form a valid triangle. (Sum of any two sides must be greater than the third)</p>
            
            <p><strong>Exercise 5:</strong> Fix the precedence issues in this expression to make it evaluate correctly:</p>
            <pre>
int result = 5 + 3 * 2 - 1 / 4 + 6 % 3;
// You want: ((5 + 3) * 2) - (1 / (4 + 6)) % 3</pre>
            
            <p><strong>Exercise 6:</strong> Write a program that demonstrates the difference between prefix and postfix increment in a loop.</p>
            
            <p><strong>Exercise 7:</strong> Create a simple calculator that asks for two numbers and an operator (+, -, *, /, %) and performs the operation.</p>
            
            <p><strong>Exercise 8:</strong> What's wrong with this code? Fix it.</p>
            <pre>
int x = 10;
if (x = 5) {
    cout << "x is 5" << endl;
}</pre>
            
            <p><strong>Exercise 9:</strong> Write a program that determines if a year is a leap year. A year is a leap year if it's divisible by 4, but not by 100, unless it's also divisible by 400.</p>
            <p>Use logical operators (&&, ||, !) to combine conditions.</p>
            
            <p><strong>Exercise 10:</strong> Create a program that demonstrates operator precedence by evaluating the same expression with and without parentheses. Show the steps.</p>
        </div>

        <!-- ==================== SECTION 11: KEY TERMS ==================== -->
        <h3>2.8.10 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Operator</strong>
                <p style="font-size: 12px;">Symbol that performs an operation</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Operand</strong>
                <p style="font-size: 12px;">Value operator works on</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Expression</strong>
                <p style="font-size: 12px;">Combination of operators and operands</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Assignment</strong>
                <p style="font-size: 12px;">= operator</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Arithmetic</strong>
                <p style="font-size: 12px;">+, -, *, /, %</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Relational</strong>
                <p style="font-size: 12px;">==, !=, <, >, <=, >=</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Logical</strong>
                <p style="font-size: 12px;">&&, ||, !</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Increment</strong>
                <p style="font-size: 12px;">++ (add 1)</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Decrement</strong>
                <p style="font-size: 12px;">-- (subtract 1)</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Prefix</strong>
                <p style="font-size: 12px;">++x (increment then use)</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Postfix</strong>
                <p style="font-size: 12px;">x++ (use then increment)</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Precedence</strong>
                <p style="font-size: 12px;">Order of evaluation</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Associativity</strong>
                <p style="font-size: 12px;">Direction of evaluation</p>
            </div>
        </div>
        
        <!-- ==================== END OF CHAPTER 2 ==================== -->
        <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 30px; border-radius: 15px; margin: 40px 0; text-align: center; color: white;">
            <h3 style="margin: 0 0 15px 0;">📚 End of Chapter 2</h3>
            <p style="font-size: 18px; margin: 0 0 20px 0;">You have completed Chapter 2: Basics of Programming!</p>
            <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">2.1 Program Structure ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">2.2 C++ IDE ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">2.3 Sample Program ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">2.4 Keywords, Identifiers ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">2.5 Data Types ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">2.6 Variables ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">2.7 Constants ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">2.8 Operators ✓</span>
            </div>
            <p style="margin-top: 30px;">Ready for Chapter 3: Control Structures!</p>
        </div>
    `,
    navigation: {
        next: null,
        prev: "ch2-7",
        nextTitle: null,
        prevTitle: "2.7 Constants"
    }
};