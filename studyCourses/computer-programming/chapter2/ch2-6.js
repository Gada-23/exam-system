// ===============================
// Computer Programming - Chapter 2.6
// Variables
// ===============================

window.currentSubsectionData = {
    title: "2.6 Variables",
    content: `
        <h2>2.6 Variables in C++</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand what variables are and why they are used</li>
                <li>Learn the rules for declaring variables</li>
                <li>Understand variable initialization and assignment</li>
                <li>Learn about variable scope (local vs global)</li>
                <li>Understand variable lifetime</li>
                <li>Learn best practices for naming and using variables</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: WHAT IS A VARIABLE? ==================== -->
        <h3>2.6.1 What is a Variable?</h3>
        
        <p>A <strong>variable</strong> is a named storage location in memory that holds a value. Think of it as a labeled box where you can store data that can change during program execution.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> A variable is a named memory location that stores a value of a specific data type, and whose value can be changed during program execution.</p>
        </div>
        
        <h4>Analogy: Variable as a Labeled Box</h4>
        
        <div style="display: flex; justify-content: center; margin: 30px 0;">
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; text-align: center; width: 80%;">
                <div style="border: 3px solid #667eea; padding: 20px; border-radius: 10px; background: white;">
                    <div style="background: #667eea; color: white; padding: 10px; margin-top: -35px; margin-bottom: 15px; display: inline-block; border-radius: 5px;">
                        <strong>age</strong> (variable name)
                    </div>
                    <div style="font-size: 48px; color: #667eea; margin: 20px;">
                        25
                    </div>
                    <div style="background: #f0f2f5; padding: 10px; border-radius: 5px;">
                        <code>int</code> (data type) | Memory address: 0x7ffd5a8e
                    </div>
                </div>
                <p style="margin-top: 15px;">A variable named <code>age</code> storing the integer value 25</p>
            </div>
        </div>
        
        <h4>Key Characteristics of Variables:</h4>
        <ul>
            <li><strong>Name:</strong> An identifier that uniquely identifies the variable</li>
            <li><strong>Type:</strong> The kind of data it can hold (int, double, char, etc.)</li>
            <li><strong>Value:</strong> The actual data stored in the variable</li>
            <li><strong>Address:</strong> The memory location where the variable is stored</li>
            <li><strong>Scope:</strong> Where the variable can be accessed</li>
            <li><strong>Lifetime:</strong> How long the variable exists in memory</li>
        </ul>

        <!-- ==================== SECTION 2: DECLARING VARIABLES ==================== -->
        <h3>2.6.2 Declaring Variables</h3>
        
        <p>Before you can use a variable, you must <strong>declare</strong> it. Declaration tells the compiler:</p>
        <ul>
            <li>The name of the variable</li>
            <li>The type of data it will store</li>
            <li>(Optionally) an initial value</li>
        </ul>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Syntax:</strong> <code>data_type variable_name;</code></p>
        </div>
        
        <h4>Basic Variable Declarations:</h4>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

int main() {
    // Declaring variables of different types
    int age;                 // integer variable
    double price;            // double-precision floating point
    float temperature;       // floating point
    char grade;              // character
    bool isStudent;          // boolean
    string name;             // string
    
    // Variables are declared but not yet initialized
    // They contain garbage values (whatever was in memory)
    
    return 0;
}</pre>
        
        <h4>Declaring Multiple Variables of the Same Type:</h4>
        
        <pre>
int a, b, c;                    // Three integer variables
double x, y, z;                  // Three double variables
string firstName, lastName;      // Two string variables

// You can also declare and initialize some
int count, total = 0, sum;       // total initialized to 0, others uninitialized</pre>
        
        <h4>Declaring and Initializing Together:</h4>
        
        <pre>
int age = 25;
double price = 19.99;
char grade = 'A';
bool isStudent = true;
string name = "John Doe";

// C++11 uniform initialization
int count{10};
double pi{3.14159};
char letter{'Z'};</pre>
        
        <div class="warning-box" style="background: #ffe8e8; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #f5576c;">
            <p><strong>⚠️ Important:</strong> Using uninitialized variables leads to undefined behavior! Always initialize variables before using them.</p>
            <pre>
int x;           // BAD: x has garbage value
cout << x;       // UNDEFINED BEHAVIOR - could print anything!

int y = 0;       // GOOD: initialized to 0
cout << y;       // Safe - prints 0</pre>
        </div>

        <!-- ==================== SECTION 3: VARIABLE INITIALIZATION ==================== -->
        <h3>2.6.3 Variable Initialization</h3>
        
        <p><strong>Initialization</strong> is giving a variable its first value. C++ provides several ways to initialize variables:</p>
        
        <h4>1. Copy Initialization (using =)</h4>
        <pre>
int age = 25;
double price = 19.99;
char grade = 'A';</pre>
        
        <h4>2. Direct Initialization (using parentheses)</h4>
        <pre>
int age(25);
double price(19.99);
char grade('A');</pre>
        
        <h4>3. Uniform Initialization (C++11, using braces) - Recommended</h4>
        <pre>
int age{25};           // Preferred - prevents narrowing conversions
double price{19.99};
char grade{'A'};
int zero{};            // Zero-initialization: zero becomes 0</pre>
        
        <h4>4. Default Initialization</h4>
        <pre>
int x;                 // x has indeterminate value (garbage) - DANGEROUS!
static int y;          // y is zero-initialized (for static variables)</pre>
        
        <h4>5. Value Initialization (empty braces)</h4>
        <pre>
int x{};               // x is initialized to 0
double d{};            // d is initialized to 0.0
char c{};              // c is initialized to '\\0' (null character)
bool b{};              // b is initialized to false</pre>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Best Practice:</strong> Use uniform initialization <code>{}</code> whenever possible. It prevents narrowing conversions and makes your intentions clear.</p>
        </div>
        
        <h4>Demonstrating Different Initialization Methods:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Copy initialization
    int a = 5;
    
    // Direct initialization
    int b(10);
    
    // Uniform initialization (C++11)
    int c{15};
    int d{};  // Zero-initialized to 0
    
    // Preventing narrowing conversions
    // int e{3.14};  // ERROR: narrowing conversion from double to int
    
    // This would work but loses data
    int f = 3.14;  // f becomes 3 (warning)
    
    cout << "a = " << a << endl;
    cout << "b = " << b << endl;
    cout << "c = " << c << endl;
    cout << "d = " << d << endl;
    cout << "f = " << f << " (lost decimal part)" << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 4: ASSIGNING VALUES TO VARIABLES ==================== -->
        <h3>2.6.4 Assigning Values to Variables</h3>
        
        <p><strong>Assignment</strong> is giving a new value to an already declared variable. The assignment operator <code>=</code> is used.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Syntax:</strong> <code>variable_name = expression;</code></p>
        </div>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Declaration
    int x;
    double y;
    
    // Assignment
    x = 10;
    y = 3.14159;
    
    cout << "x = " << x << endl;
    cout << "y = " << y << endl;
    
    // Reassignment - changing existing values
    x = 20;   // x was 10, now becomes 20
    y = 2.5;  // y was 3.14159, now becomes 2.5
    
    cout << "After reassignment:" << endl;
    cout << "x = " << x << endl;
    cout << "y = " << y << endl;
    
    // Assignment from expressions
    int sum = 0;
    sum = 5 + 3;           // sum becomes 8
    
    int a = 5, b = 3;
    int result;
    result = a * b + 10;   // result becomes 25
    
    // Assignment using other variables
    int original = 100;
    int copy;
    copy = original;       // copy becomes 100
    
    return 0;
}</pre>
        
        <h4>Chained Assignment:</h4>
        
        <pre>
int a, b, c;
a = b = c = 10;  // All three variables become 10
// This works because assignment associates right-to-left
// c = 10 first, then b = c, then a = b</pre>

        <!-- ==================== SECTION 5: VARIABLE SCOPE ==================== -->
        <h3>2.6.5 Variable Scope</h3>
        
        <p><strong>Scope</strong> refers to the region of the program where a variable can be accessed.</p>
        
        <h4>1. Local Scope (Block Scope)</h4>
        <p>Variables declared inside a block <code>{ }</code> are local to that block. They cannot be accessed outside.</p>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // x is local to main
    int x = 10;
    
    {
        // y is local to this inner block
        int y = 20;
        cout << "Inside block: x = " << x << ", y = " << y << endl;
    }
    
    cout << "Outside block: x = " << x << endl;
    // cout << y;  // ERROR! y is not accessible here
    
    return 0;
}</pre>
        
        <h4>2. Global Scope</h4>
        <p>Variables declared outside any function have global scope and can be accessed anywhere in the program.</p>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Global variable
int globalVar = 100;

void myFunction() {
    cout << "Inside function, globalVar = " << globalVar << endl;
    globalVar = 200;  // Can modify global variable
}

int main() {
    cout << "In main, globalVar = " << globalVar << endl;
    
    int globalVar = 50;  // Local variable with same name - SHADOWING
    
    cout << "Local globalVar = " << globalVar << endl;
    cout << "Access global with ::globalVar = " << ::globalVar << endl;
    
    myFunction();
    cout << "After function, globalVar = " << ::globalVar << endl;
    
    return 0;
}</pre>
        
        <h4>3. Scope Resolution Operator (::)</h4>
        <p>Use <code>::</code> to access global variables when shadowed by local variables.</p>
        
        <h4>4. Function Scope</h4>
        <p>Function parameters have function scope - they can be accessed throughout the function.</p>
        
        <pre>
void myFunction(int param) {  // param has function scope
    int localVar = 10;         // localVar also has function scope
    // Both param and localVar accessible here
}</pre>
        
        <h4>Scope Demonstration:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int global = 1000;  // Global scope

void demonstrateScope() {
    int localToFunction = 50;  // Local to this function
    cout << "In function, global = " << global << endl;
    cout << "In function, localToFunction = " << localToFunction << endl;
    // cout << localToMain;  // ERROR! Can't access main's locals
}

int main() {
    int localToMain = 10;  // Local to main
    cout << "In main, global = " << global << endl;
    cout << "In main, localToMain = " << localToMain << endl;
    
    {
        int localToBlock = 20;  // Local to this block
        cout << "In block, localToBlock = " << localToBlock << endl;
        cout << "In block, can access localToMain = " << localToMain << endl;
    }
    
    // cout << localToBlock;  // ERROR! out of scope
    
    demonstrateScope();
    
    return 0;
}</pre>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Best Practice:</strong> Prefer local variables over global variables. Global variables can make code harder to understand and maintain. Use them only when truly necessary (like constants).</p>
        </div>

        <!-- ==================== SECTION 6: VARIABLE LIFETIME ==================== -->
        <h3>2.6.6 Variable Lifetime</h3>
        
        <p><strong>Lifetime</strong> refers to how long a variable exists in memory.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Storage Class</th>
                <th style="padding: 10px;">Scope</th>
                <th style="padding: 10px;">Lifetime</th>
                <th style="padding: 10px;">Initialization</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>auto</code> (default for locals)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Block</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Until block ends</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Garbage if uninitialized</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>static</code> local</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Block</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Program lifetime</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Zero-initialized once</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Global</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Global</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Program lifetime</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Zero-initialized</td>
            </tr>
        </table>
        
        <h4>Static Local Variables:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

void counter() {
    static int count = 0;  // Initialized only once
    count++;
    cout << "Called " << count << " times" << endl;
}

int main() {
    counter();  // Called 1 times
    counter();  // Called 2 times
    counter();  // Called 3 times
    counter();  // Called 4 times
    
    return 0;
}</pre>

        <!-- ==================== SECTION 7: VARIABLE NAMING CONVENTIONS ==================== -->
        <h3>2.6.7 Variable Naming Conventions</h3>
        
        <p>Good variable names make code self-documenting and easier to understand.</p>
        
        <h4>Best Practices:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Guideline</th>
                <th style="padding: 10px;">Good Examples</th>
                <th style="padding: 10px;">Bad Examples</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Use meaningful, descriptive names</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>studentAge</code>, <code>totalMarks</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>a</code>, <code>b</code>, <code>tmp</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Use camelCase for variables</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>firstName</code>, <code>isStudent</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>first_name</code> (snake_case for different languages)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Use nouns for variables</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>price</code>, <code>count</code>, <code>name</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>doSomething</code>, <code>calculate</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Use boolean names for flags</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>isValid</code>, <code>hasError</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>flag</code>, <code>status</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Use plural for collections</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>students</code>, <code>scores</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>studentList</code>, <code>scoreArray</code></td>
            </tr>
        </table>
        
        <h4>Examples of Good Variable Names:</h4>
        
        <pre>
// Good variable names
int studentAge = 20;
double averageScore = 85.5;
bool isPassed = true;
string firstName = "John";
int numberOfStudents = 30;
double taxRate = 0.15;
bool hasGraduated = false;

// Bad variable names
int a = 20;              // What does 'a' mean?
double x = 85.5;         // What is 'x'?
bool flag = true;        // What does this flag indicate?
string str = "John";     // 'str' is too vague
int num = 30;            // 'num' of what?
double rt = 0.15;        // What is 'rt'?</pre>

        <!-- ==================== SECTION 8: COMMON VARIABLE ERRORS ==================== -->
        <h3>2.6.8 Common Variable Errors</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Error</th>
                <th style="padding: 10px;">Example</th>
                <th style="padding: 10px;">Fix</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Using uninitialized variable</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int x; cout << x;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int x = 0; cout << x;</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Variable not declared</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>cout << age;</code> (age not declared)</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int age = 20; cout << age;</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Type mismatch</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int x = 3.14;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>double x = 3.14;</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Name conflict/shadowing</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Local variable hiding global</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Use different names or :: to access global</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Using keyword as name</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int return = 5;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int returnValue = 5;</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Invalid identifier</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int 2ndPlace = 5;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int secondPlace = 5;</code></td>
            </tr>
        </table>

        <!-- ==================== SECTION 9: COMPLETE VARIABLE EXAMPLE ==================== -->
        <h3>2.6.9 Complete Variable Example Program</h3>
        
        <pre>
// ============================================
// Program: Variable Demonstration
// Author: CS Student
// Description: Demonstrates various variable concepts
// ============================================

#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;iomanip&gt;
using namespace std;

// Global variable (accessible everywhere)
const double TAX_RATE = 0.08;
int globalCounter = 0;

// Function to demonstrate static variable
void itemCounter() {
    static int count = 0;  // Static local variable
    count++;
    cout << "Item " << count << " processed" << endl;
    globalCounter++;
}

int main() {
    cout << "===== VARIABLE DEMONSTRATION =====" << endl;
    
    // Local variables
    string productName;
    double price;
    int quantity;
    double total;
    char hasDiscount;
    bool applyDiscount = false;
    
    // Input
    cout << "Enter product name: ";
    getline(cin, productName);
    
    cout << "Enter price: ";
    cin >> price;
    
    cout << "Enter quantity: ";
    cin >> quantity;
    
    cout << "Has discount? (y/n): ";
    cin >> hasDiscount;
    
    // Processing
    applyDiscount = (hasDiscount == 'y' || hasDiscount == 'Y');
    total = price * quantity;
    
    if (applyDiscount) {
        double discount = total * 0.1;  // 10% discount
        total = total - discount;
    }
    
    // Apply tax (using global TAX_RATE)
    double tax = total * TAX_RATE;
    double finalTotal = total + tax;
    
    // Output
    cout << fixed << setprecision(2);
    cout << "\\n===== RECEIPT =====" << endl;
    cout << "Product: " << productName << endl;
    cout << "Price: $" << price << endl;
    cout << "Quantity: " << quantity << endl;
    cout << "Subtotal: $" << price * quantity << endl;
    
    if (applyDiscount) {
        cout << "Discount: 10%" << endl;
    }
    
    cout << "Tax (8%): $" << tax << endl;
    cout << "TOTAL: $" << finalTotal << endl;
    
    // Demonstrate local scope
    {
        int localVar = 999;
        cout << "\\nInside block, localVar = " << localVar << endl;
        cout << "Can still access productName = " << productName << endl;
    }
    // cout << localVar;  // ERROR! localVar out of scope
    
    // Demonstrate static variables
    cout << "\\n===== STATIC VARIABLE DEMO =====" << endl;
    itemCounter();
    itemCounter();
    itemCounter();
    itemCounter();
    
    cout << "Global counter = " << globalCounter << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 10: SUMMARY ==================== -->
        <h3>2.6.10 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li><strong>Variables</strong> are named memory locations that store values</li>
                <li><strong>Declaration:</strong> <code>type name;</code> or <code>type name = value;</code></li>
                <li><strong>Initialization:</strong> Giving a variable its first value</li>
                <li>Always <strong>initialize variables</strong> before using them to avoid undefined behavior</li>
                <li>Use uniform initialization <code>{}</code> to prevent narrowing conversions</li>
                <li><strong>Assignment:</strong> <code>variable = newValue;</code> changes an existing variable</li>
                <li><strong>Scope:</strong> Where a variable can be accessed (local, global, block)</li>
                <li><strong>Lifetime:</strong> How long a variable exists (auto, static, global)</li>
                <li><strong>Local variables</strong> are created when entering a block and destroyed when exiting</li>
                <li><strong>Global variables</strong> exist for the entire program lifetime</li>
                <li><strong>Static local variables</strong> keep their value between function calls</li>
                <li>Use <strong>meaningful names</strong> that describe the variable's purpose</li>
                <li>Avoid global variables when possible - prefer local variables</li>
                <li>Use <code>::</code> to access global variables when shadowed by locals</li>
            </ul>
        </div>

        <!-- ==================== SECTION 11: EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Write a program that declares and initializes variables of different types (int, double, char, bool, string). Display their values.</p>
            
            <p><strong>Exercise 2:</strong> What is the output of this code? Fix any issues.</p>
            <pre>
int x;
int y = 5;
x = y + 2;
int z = x * 2;
cout << x << " " << y << " " << z << endl;</pre>
            
            <p><strong>Exercise 3:</strong> Write a program that demonstrates variable scope. Create a global variable, a local variable in main, and a local variable in a nested block. Show which variables are accessible where.</p>
            
            <p><strong>Exercise 4:</strong> Create a function that uses a static variable to count how many times it's been called. Call it multiple times and display the count.</p>
            
            <p><strong>Exercise 5:</strong> Fix the errors in this code:</p>
            <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int 1stNumber = 10;
    int second number = 20;
    int sum;
    
    sum = firstNumber + secondNumber;
    
    cout << "Sum = " << sum << endl;
    
    return 0;
}</pre>
            
            <p><strong>Exercise 6:</strong> Write a program that swaps the values of two variables. For example, if a=5 and b=10, after swapping a=10 and b=5.</p>
            
            <p><strong>Exercise 7:</strong> Create a program that asks for a circle's radius, then calculates and displays the diameter, circumference, and area. Use appropriate variable names.</p>
            
            <p><strong>Exercise 8:</strong> Demonstrate the difference between initialization and assignment. Create variables using both methods and explain the difference.</p>
            
            <p><strong>Exercise 9:</strong> Write a program that shows what happens when you use an uninitialized variable (don't actually do this - just explain in comments). Then fix it by properly initializing.</p>
            
            <p><strong>Exercise 10:</strong> Create a simple banking program that uses variables for account balance, deposit amount, and withdrawal amount. Perform some transactions and display the balance after each.</p>
        </div>

        <!-- ==================== SECTION 12: KEY TERMS ==================== -->
        <h3>2.6.11 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Variable</strong>
                <p style="font-size: 12px;">Named memory location</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Declaration</strong>
                <p style="font-size: 12px;">Introduces variable name and type</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Initialization</strong>
                <p style="font-size: 12px;">Giving first value</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Assignment</strong>
                <p style="font-size: 12px;">Changing variable's value</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Scope</strong>
                <p style="font-size: 12px;">Where variable is accessible</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Lifetime</strong>
                <p style="font-size: 12px;">How long variable exists</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Local</strong>
                <p style="font-size: 12px;">Inside a block</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Global</strong>
                <p style="font-size: 12px;">Outside all functions</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Static</strong>
                <p style="font-size: 12px;">Preserves value between calls</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Shadowing</strong>
                <p style="font-size: 12px;">Local hides global with same name</p>
            </div>
        </div>
        
        <!-- ==================== PREVIEW OF NEXT SECTION ==================== -->
        <div style="background: linear-gradient(135deg, #667eea20, #764ba220); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">📖 Next: 2.7 Constants</h4>
            <p>In the next section, we'll learn about constants - variables whose values cannot change.</p>
        </div>
    `,
    navigation: {
        next: "ch2-7",
        prev: "ch2-5",
        nextTitle: "2.7 Constants",
        prevTitle: "2.5 Data Types"
    }
};