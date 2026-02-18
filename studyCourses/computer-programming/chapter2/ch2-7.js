// ===============================
// Computer Programming - Chapter 2.7
// Constants
// ===============================

window.currentSubsectionData = {
    title: "2.7 Constants",
    content: `
        <h2>2.7 Constants in C++</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand what constants are and why they are used</li>
                <li>Learn different ways to define constants in C++</li>
                <li>Understand the difference between constants and variables</li>
                <li>Learn about const keyword and constexpr</li>
                <li>Understand symbolic constants and #define</li>
                <li>Learn best practices for using constants</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: WHAT ARE CONSTANTS? ==================== -->
        <h3>2.7.1 What are Constants?</h3>
        
        <p>A <strong>constant</strong> is a value that cannot be changed during program execution. Unlike variables, once a constant is defined, its value remains fixed throughout the program.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> A constant is an identifier whose value cannot be modified after its definition.</p>
        </div>
        
        <h4>Analogy: Constants vs Variables</h4>
        
        <div style="display: flex; justify-content: space-around; margin: 30px 0; flex-wrap: wrap;">
            <div style="text-align: center; padding: 20px; background: #f8f9fa; border-radius: 10px; width: 200px; margin: 10px;">
                <div style="font-size: 40px; color: #667eea; margin-bottom: 10px;">📦</div>
                <h4 style="margin: 10px 0;">Variable</h4>
                <p style="font-size: 14px;">Like a whiteboard - you can erase and write new values</p>
                <code style="background: #e8ebff; padding: 5px; border-radius: 5px;">int age = 20; age = 21;</code>
            </div>
            
            <div style="text-align: center; padding: 20px; background: #f8f9fa; border-radius: 10px; width: 200px; margin: 10px;">
                <div style="font-size: 40px; color: #f5576c; margin-bottom: 10px;">🔒</div>
                <h4 style="margin: 10px 0;">Constant</h4>
                <p style="font-size: 14px;">Like a carved stone - value is fixed forever</p>
                <code style="background: #e8ebff; padding: 5px; border-radius: 5px;">const int DAYS = 7; // Can't change</code>
            </div>
        </div>
        
        <h4>Why Use Constants?</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Benefit</th>
                <th style="padding: 10px;">Explanation</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Readability</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Gives meaningful names to values</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>const double PI = 3.14159;</code> is clearer than <code>3.14159</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Maintainability</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Change in one place affects everywhere</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Change <code>TAX_RATE</code> once, not in 100 places</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Error Prevention</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Prevents accidental modification</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Compiler error if you try to change a constant</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Self-Documenting</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Code explains itself</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>MAX_STUDENTS</code> is self-explanatory</td>
            </tr>
        </table>

        <!-- ==================== SECTION 2: CONST KEYWORD ==================== -->
        <h3>2.7.2 The const Keyword</h3>
        
        <p>The <code>const</code> keyword is the most common way to create constants in C++.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Syntax:</strong> <code>const data_type CONSTANT_NAME = value;</code></p>
        </div>
        
        <h4>Declaring const Constants:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Basic const declarations
    const int DAYS_IN_WEEK = 7;
    const double PI = 3.14159;
    const char GRADE_A = 'A';
    const string COURSE_NAME = "Computer Programming";
    
    // Using constants
    cout << "Days in week: " << DAYS_IN_WEEK << endl;
    cout << "PI: " << PI << endl;
    cout << "Grade: " << GRADE_A << endl;
    cout << "Course: " << COURSE_NAME << endl;
    
    // DAYS_IN_WEEK = 8;  // ERROR! Cannot modify a const
    
    return 0;
}</pre>
        
        <h4>const with Different Data Types:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Integer constants
    const int MAX_SCORE = 100;
    const int MIN_SCORE = 0;
    
    // Floating-point constants
    const float TAX_RATE = 0.08f;
    const double INTEREST_RATE = 0.0525;
    
    // Character constants
    const char NEWLINE = '\\n';
    const char TAB = '\\t';
    
    // Boolean constants
    const bool DEBUG_MODE = true;
    
    // String constants
    const string APP_NAME = "Student Management System";
    
    // Using constants in expressions
    int score = 85;
    if (score >= MIN_SCORE && score <= MAX_SCORE) {
        cout << "Valid score" << endl;
    }
    
    return 0;
}</pre>
        
        <h4>const Must Be Initialized:</h4>
        
        <pre>
const int X;      // ERROR! const must be initialized
const int Y = 10; // OK - initialized

// const can be initialized at runtime
int userInput;
cin >> userInput;
const int USER_VALUE = userInput;  // OK - initialized at runtime
// USER_VALUE = 20;  // ERROR! Still can't change later</pre>
        
        <div class="warning-box" style="background: #ffe8e8; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #f5576c;">
            <p><strong>⚠️ Important:</strong> const variables must be initialized when declared. You cannot declare a const without giving it a value, and you cannot change it later.</p>
        </div>

        <!-- ==================== SECTION 3: CONSTEXPR (C++11) ==================== -->
        <h3>2.7.3 constexpr (Compile-time Constants)</h3>
        
        <p><code>constexpr</code> (constant expression) is a C++11 feature that creates constants that are evaluated at compile time.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Difference:</strong> <code>const</code> can be evaluated at runtime; <code>constexpr</code> is always evaluated at compile time.</p>
        </div>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // constexpr - compile-time constant
    constexpr int HOURS_PER_DAY = 24;
    constexpr int MINUTES_PER_HOUR = 60;
    constexpr int MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
    
    cout << "Minutes per day: " << MINUTES_PER_DAY << endl;
    
    // constexpr with functions
    constexpr int square(int x) { return x * x; }
    constexpr int result = square(5);  // Computed at compile time
    
    cout << "Square of 5: " << result << endl;
    
    // Runtime value (can't use constexpr)
    int userInput;
    cin >> userInput;
    // constexpr int bad = userInput;  // ERROR! Not compile-time constant
    const int ok = userInput;          // OK - runtime constant
    
    return 0;
}</pre>
        
        <h4>const vs constexpr:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Feature</th>
                <th style="padding: 10px;">const</th>
                <th style="padding: 10px;">constexpr</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Evaluation time</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Can be runtime or compile-time</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Always compile-time</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Can use runtime values?</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Yes (e.g., user input)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">No (must be compile-time constant)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">With functions</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Regular functions</td>
                <td style="padding: 10px; border: 1px solid #ddd;">constexpr functions</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Use for</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Most constants</td>
                <td style="padding: 10px; border: 1px solid #ddd;">When compile-time evaluation is needed</td>
            </tr>
        </table>

        <!-- ==================== SECTION 4: #define PREPROCESSOR MACROS ==================== -->
        <h3>2.7.4 #define Preprocessor Macros</h3>
        
        <p>The <code>#define</code> directive creates symbolic constants. Unlike const, these are handled by the preprocessor, not the compiler.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Syntax:</strong> <code>#define CONSTANT_NAME value</code></p>
        </div>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

#define PI 3.14159
#define MAX_STUDENTS 100
#define COURSE_NAME "Computer Programming"
#define NEWLINE '\\n'

int main() {
    // Using #define constants
    double radius = 5.0;
    double area = PI * radius * radius;
    
    cout << "Area: " << area << NEWLINE;
    cout << "Max students: " << MAX_STUDENTS << NEWLINE;
    cout << "Course: " << COURSE_NAME << NEWLINE;
    
    // PI = 3.14;  // ERROR? Actually, this will cause compilation error
    
    return 0;
}</pre>
        
        <h4>How #define Works:</h4>
        <p>The preprocessor simply replaces the constant name with its value before compilation:</p>
        
        <pre>
// Your code:
#define MAX 100
int arr[MAX];

// After preprocessing:
int arr[100];</pre>
        
        <h4>Problems with #define:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Issue</th>
                <th style="padding: 10px;">Example</th>
                <th style="padding: 10px;">Why It's Bad</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">No type safety</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>#define PI 3.14</code> (is it float or double?)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">No type checking</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">No scoping</td>
                <td style="padding: 10px; border: 1px solid #ddd;">#define affects entire file</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Can't have local constants</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Debugging issues</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Debugger sees the value, not the name</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Harder to debug</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">No semicolon needed</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Easy to forget it's not C++ code</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Confusing for beginners</td>
            </tr>
        </table>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Best Practice:</strong> In modern C++, prefer <code>const</code> or <code>constexpr</code> over <code>#define</code> for constants. Use <code>#define</code> only for include guards and simple macros.</p>
        </div>

        <!-- ==================== SECTION 5: ENUMERATION CONSTANTS ==================== -->
        <h3>2.7.5 Enumeration Constants (enum)</h3>
        
        <p><code>enum</code> is used to define a set of named integer constants.</p>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Define an enumeration
enum Weekday { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY };

// Enum with specified values
enum Status { SUCCESS = 0, ERROR_FILE = 1, ERROR_MEMORY = 2, ERROR_UNKNOWN = 99 };

// enum class (C++11) - strongly typed
enum class Color { RED, GREEN, BLUE };
enum class TrafficLight { RED, YELLOW, GREEN };

int main() {
    // Using enum
    Weekday today = WEDNESDAY;
    
    if (today == WEDNESDAY) {
        cout << "It's Wednesday!" << endl;
    }
    
    // Enum values are integers
    cout << "MONDAY = " << MONDAY << endl;      // 0
    cout << "TUESDAY = " << TUESDAY << endl;    // 1
    cout << "FRIDAY = " << FRIDAY << endl;       // 4
    
    // Enum with specified values
    Status result = SUCCESS;
    cout << "SUCCESS = " << SUCCESS << endl;     // 0
    cout << "ERROR_UNKNOWN = " << ERROR_UNKNOWN << endl; // 99
    
    // enum class (strongly typed)
    Color c = Color::GREEN;
    // Color c2 = GREEN;  // ERROR! Need scope
    
    TrafficLight light = TrafficLight::RED;
    // if (c == light)  // ERROR! Different types, can't compare
    
    // Must use scope with enum class
    if (c == Color::GREEN) {
        cout << "Color is green" << endl;
    }
    
    return 0;
}</pre>
        
        <h4>enum vs enum class:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Feature</th>
                <th style="padding: 10px;">enum</th>
                <th style="padding: 10px;">enum class (C++11)</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Scope</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Unscoped (pollutes surrounding namespace)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Scoped (must use EnumName::)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Type safety</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Weak (implicitly converts to int)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Strong (no implicit conversion)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Underlying type</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Implementation-defined (usually int)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Can specify (e.g., enum class Color : char)</td>
            </tr>
        </table>

        <!-- ==================== SECTION 6: LITERAL CONSTANTS ==================== -->
        <h3>2.7.6 Literal Constants</h3>
        
        <p><strong>Literals</strong> are constant values written directly in the code.</p>
        
        <h4>Types of Literals:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Type</th>
                <th style="padding: 10px;">Examples</th>
                <th style="padding: 10px;">Description</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Integer literals</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>42</code>, <code>0</code>, <code>-17</code>, <code>1000000</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Whole numbers</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Floating-point literals</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>3.14</code>, <code>0.5</code>, <code>1e-5</code>, <code>2.5f</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Decimal numbers</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Character literals</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>'A'</code>, <code>'5'</code>, <code>'\\n'</code>, <code>'\\t'</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Single characters</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">String literals</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>"Hello"</code>, <code>"C++"</code>, <code>"Line 1\\nLine 2"</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Sequence of characters</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Boolean literals</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>true</code>, <code>false</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Boolean values</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Pointer literals</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>nullptr</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Null pointer</td>
            </tr>
        </table>
        
        <h4>Integer Literal Suffixes:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Integer literal suffixes
    auto a = 42;        // int
    auto b = 42u;       // unsigned int
    auto c = 42l;       // long
    auto d = 42ul;      // unsigned long
    auto e = 42ll;      // long long
    auto f = 42ull;     // unsigned long long
    
    // Hexadecimal, octal, binary
    auto hex = 0xFF;     // hexadecimal (255)
    auto oct = 077;      // octal (63)
    auto bin = 0b1010;   // binary (10) C++14
    
    cout << "hex 0xFF = " << hex << endl;
    cout << "oct 077 = " << oct << endl;
    cout << "bin 0b1010 = " << bin << endl;
    
    return 0;
}</pre>
        
        <h4>Floating-point Literal Suffixes:</h4>
        
        <pre>
double d = 3.14;    // double (default)
float f = 3.14f;    // float
long double ld = 3.14L;  // long double</pre>

        <!-- ==================== SECTION 7: SYMBOLIC CONSTANTS ==================== -->
        <h3>2.7.7 Symbolic Constants</h3>
        
        <p>Symbolic constants give meaningful names to constant values, making code more readable and maintainable.</p>
        
        <h4>Example Without Symbolic Constants:</h4>
        
        <pre>
// Hard to understand - what are these numbers?
double area = 3.14159 * 5 * 5;
double circumference = 2 * 3.14159 * 5;
double tax = price * 0.08;
if (score >= 60) { ... }</pre>
        
        <h4>With Symbolic Constants:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Symbolic constants
const double PI = 3.14159;
const double TAX_RATE = 0.08;
const int PASSING_SCORE = 60;
const int MAX_STUDENTS = 30;

int main() {
    double radius = 5.0;
    double price = 100.0;
    int score = 75;
    
    // Now the code is self-documenting
    double area = PI * radius * radius;
    double circumference = 2 * PI * radius;
    double tax = price * TAX_RATE;
    
    if (score >= PASSING_SCORE) {
        cout << "Passed!" << endl;
    }
    
    cout << "Area: " << area << endl;
    cout << "Circumference: " << circumference << endl;
    cout << "Tax: $" << tax << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 8: COMPARING CONSTANT TYPES ==================== -->
        <h3>2.7.8 Comparing Different Types of Constants</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Feature</th>
                <th style="padding: 10px;">#define</th>
                <th style="padding: 10px;">const</th>
                <th style="padding: 10px;">constexpr</th>
                <th style="padding: 10px;">enum</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Type safety</td>
                <td style="padding: 10px; border: 1px solid #ddd;">❌ No</td>
                <td style="padding: 10px; border: 1px solid #ddd;">✅ Yes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">✅ Yes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">⚠️ Weak (enum) / ✅ Strong (enum class)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Scope</td>
                <td style="padding: 10px; border: 1px solid #ddd;">❌ Global</td>
                <td style="padding: 10px; border: 1px solid #ddd;">✅ Block/namespace</td>
                <td style="padding: 10px; border: 1px solid #ddd;">✅ Block/namespace</td>
                <td style="padding: 10px; border: 1px solid #ddd;">✅ Block/namespace</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Memory used</td>
                <td style="padding: 10px; border: 1px solid #ddd;">❌ No (text replacement)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">✅ Yes (variable)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">⚠️ Maybe (compile-time)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">✅ Yes (enumerators)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Can have address?</td>
                <td style="padding: 10px; border: 1px solid #ddd;">❌ No</td>
                <td style="padding: 10px; border: 1px solid #ddd;">✅ Yes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">✅ Yes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">❌ No</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Debugger visibility</td>
                <td style="padding: 10px; border: 1px solid #ddd;">❌ No (replaced)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">✅ Yes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">✅ Yes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">✅ Yes</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">When to use</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Include guards, simple macros</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Most constants</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Compile-time constants</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Related named constants</td>
            </tr>
        </table>

        <!-- ==================== SECTION 9: COMPLETE CONSTANT EXAMPLE ==================== -->
        <h3>2.7.9 Complete Constants Example Program</h3>
        
        <pre>
// ============================================
// Program: Constants Demonstration
// Author: CS Student
// Description: Demonstrates all types of constants
// ============================================

#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;iomanip&gt;
using namespace std;

// #define constants (traditional)
#define PI 3.14159
#define MAX_ATTEMPTS 3

// Global const constants
const double TAX_RATE = 0.08;
const string SCHOOL_NAME = "University of Technology";
const int DAYS_IN_WEEK = 7;

// constexpr constants (compile-time)
constexpr int HOURS_PER_DAY = 24;
constexpr int MINUTES_PER_HOUR = 60;
constexpr int MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// enum for status codes
enum class StatusCode { SUCCESS = 0, WARNING = 1, ERROR = 2, FATAL = 3 };

// enum for days (unscoped, traditional)
enum Day { MON, TUE, WED, THU, FRI, SAT, SUN };

int main() {
    cout << "===== CONSTANTS DEMONSTRATION =====" << endl;
    
    // Local const constants
    const int STUDENT_ID = 12345;
    const string STUDENT_NAME = "John Doe";
    
    // Using #define constants
    double radius = 5.0;
    double area = PI * radius * radius;
    
    cout << "PI (from #define): " << PI << endl;
    cout << "Area of circle: " << area << endl;
    cout << "Max attempts: " << MAX_ATTEMPTS << endl;
    
    // Using global const
    cout << "\\nSchool: " << SCHOOL_NAME << endl;
    cout << "Tax rate: " << TAX_RATE * 100 << "%" << endl;
    cout << "Days in week: " << DAYS_IN_WEEK << endl;
    
    // Using constexpr
    cout << "\\nMinutes per day: " << MINUTES_PER_DAY << endl;
    
    // Using local const
    cout << "\\nStudent ID: " << STUDENT_ID << endl;
    cout << "Student name: " << STUDENT_NAME << endl;
    
    // Using enum class
    StatusCode code = StatusCode::SUCCESS;
    cout << "\\nStatus code: " << static_cast&lt;int&gt;(code) << endl;
    
    // Using traditional enum
    Day today = WED;
    cout << "Today is day number: " << today << endl;
    
    // Constants in calculations
    double price = 99.99;
    int quantity = 2;
    double subtotal = price * quantity;
    double tax = subtotal * TAX_RATE;
    double total = subtotal + tax;
    
    cout << fixed << setprecision(2);
    cout << "\\n===== SHOPPING CART =====" << endl;
    cout << "Price: $" << price << endl;
    cout << "Quantity: " << quantity << endl;
    cout << "Subtotal: $" << subtotal << endl;
    cout << "Tax (" << TAX_RATE * 100 << "%): $" << tax << endl;
    cout << "Total: $" << total << endl;
    
    // Constants in loops
    cout << "\\nDays of week: ";
    for (int i = MON; i <= SUN; i++) {
        cout << i << " ";
    }
    cout << endl;
    
    // const with runtime value
    int userValue;
    cout << "\\nEnter a number: ";
    cin >> userValue;
    const int RUNTIME_CONST = userValue;  // OK - initialized at runtime
    cout << "Runtime constant: " << RUNTIME_CONST << endl;
    // RUNTIME_CONST = 10;  // ERROR! Can't change const
    
    return 0;
}</pre>

        <!-- ==================== SECTION 10: BEST PRACTICES ==================== -->
        <h3>2.7.10 Best Practices for Using Constants</h3>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <ol style="list-style-type: decimal; padding-left: 20px;">
                <li><strong>Prefer const over #define</strong> for constants in modern C++</li>
                <li><strong>Use UPPER_CASE naming</strong> for constants (convention)</li>
                <li><strong>Use constexpr for compile-time constants</strong> when possible</li>
                <li><strong>Use enum class</strong> for strongly typed enumerations</li>
                <li><strong>Group related constants</strong> in namespaces or enums</li>
                <li><strong>Never use magic numbers</strong> - always name your constants</li>
                <li><strong>Make constants const</strong> to prevent accidental modification</li>
                <li><strong>Place constants at appropriate scope</strong> (local vs global)</li>
                <li><strong>Use const for function parameters</strong> that shouldn't be modified</li>
                <li><strong>Document the meaning</strong> of constants with comments</li>
            </ol>
        </div>
        
        <h4>Magic Numbers - What NOT to Do:</h4>
        
        <pre>
// BAD - magic numbers everywhere
double area = 3.14159 * 5 * 5;  // What's 3.14159? What's 5?
if (x > 60) { ... }  // What's 60?
double tax = price * 0.08;  // What's 0.08?</pre>
        
        <h4>Good Code with Constants:</h4>
        
        <pre>
// GOOD - self-documenting
const double PI = 3.14159;
const double RADIUS = 5.0;
const int PASSING_SCORE = 60;
const double TAX_RATE = 0.08;

double area = PI * RADIUS * RADIUS;
if (score > PASSING_SCORE) { ... }
double tax = price * TAX_RATE;</pre>

        <!-- ==================== SECTION 11: SUMMARY ==================== -->
        <h3>2.7.11 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li><strong>Constants</strong> are values that cannot be changed after initialization</li>
                <li><strong>const keyword</strong>: <code>const type NAME = value;</code> - most common way</li>
                <li><strong>constexpr</strong>: Compile-time constants (C++11) - evaluated at compile time</li>
                <li><strong>#define</strong>: Preprocessor macros - simple text replacement (avoid for constants)</li>
                <li><strong>enum</strong>: Set of named integer constants - good for related values</li>
                <li><strong>enum class</strong>: Strongly typed enumerations (C++11) - preferred over enum</li>
                <li><strong>Literal constants</strong>: Values written directly in code (42, 3.14, 'A', "Hello")</li>
                <li><strong>Symbolic constants</strong> make code self-documenting and maintainable</li>
                <li><strong>Never use magic numbers</strong> - always name your constants</li>
                <li>Use <strong>UPPER_CASE naming convention</strong> for constants</li>
                <li>Constants can be <strong>local, global, or namespace-scoped</strong></li>
                <li>Constants improve <strong>readability, maintainability, and safety</strong></li>
            </ul>
        </div>

        <!-- ==================== SECTION 12: EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Identify the magic numbers in this code and replace them with named constants:</p>
            <pre>
double area = 3.14159 * 4.5 * 4.5;
double circumference = 2 * 3.14159 * 4.5;
double tax = 150.0 * 0.08;
if (score >= 75) {
    cout << "Good job!" << endl;
}</pre>
            
            <p><strong>Exercise 2:</strong> Write a program that uses const constants for:</p>
            <ul>
                <li>PI (3.14159)</li>
                <li>GRAVITY (9.8)</li>
                <li>SPEED_OF_LIGHT (299792458)</li>
                <li>ABSOLUTE_ZERO (-273.15)</li>
            </ul>
            <p>Use each constant in a simple calculation.</p>
            
            <p><strong>Exercise 3:</strong> Create an enum class for the months of the year. Write a program that asks for a month number (1-12) and displays the month name using a switch statement.</p>
            
            <p><strong>Exercise 4:</strong> What's the difference between these two? Explain with examples.</p>
            <pre>
const int MAX = 100;
#define MAX 100</pre>
            
            <p><strong>Exercise 5:</strong> Write a program that demonstrates the difference between const and constexpr. Create one constant that can be computed at compile time and one that requires runtime input.</p>
            
            <p><strong>Exercise 6:</strong> Create an enum class for days of the week. Write a function that takes a Day parameter and returns whether it's a weekday or weekend.</p>
            
            <p><strong>Exercise 7:</strong> Fix this code:</p>
            <pre>
#define PI = 3.14159
const int MAX = 100
constexpr DAYS = 7

int main() {
    PI = 3.14;  // Trying to change PI
    cout << MAX << endl;
    cout << DAYS << endl;
}</pre>
            
            <p><strong>Exercise 8:</strong> Write a program that calculates the cost of a phone bill. Use constants for:</p>
            <ul>
                <li>Monthly base rate: $29.99</li>
                <li>Per minute rate: $0.10</li>
                <li>Tax rate: 8%</li>
                <li>Discount for seniors: 15% (if age >= 65)</li>
            </ul>
            
            <p><strong>Exercise 9:</strong> Create a program that uses constexpr to compute the factorial of a number at compile time. Compare with runtime factorial.</p>
            
            <p><strong>Exercise 10:</strong> Write a program that demonstrates all types of constants covered in this chapter. Include comments explaining each type.</p>
        </div>

        <!-- ==================== SECTION 13: KEY TERMS ==================== -->
        <h3>2.7.12 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Constant</strong>
                <p style="font-size: 12px;">Unchangeable value</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">const</strong>
                <p style="font-size: 12px;">Type-safe constant</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">constexpr</strong>
                <p style="font-size: 12px;">Compile-time constant</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">#define</strong>
                <p style="font-size: 12px;">Preprocessor macro</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">enum</strong>
                <p style="font-size: 12px;">Named integer constants</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">enum class</strong>
                <p style="font-size: 12px;">Strongly typed enum</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Literal</strong>
                <p style="font-size: 12px;">Value written in code</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Magic Number</strong>
                <p style="font-size: 12px;">Unexplained literal value</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Symbolic Constant</strong>
                <p style="font-size: 12px;">Named constant</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Compile-time</strong>
                <p style="font-size: 12px;">Evaluated during compilation</p>
            </div>
        </div>
        
        <!-- ==================== PREVIEW OF NEXT SECTION ==================== -->
        <div style="background: linear-gradient(135deg, #667eea20, #764ba220); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">📖 Next: 2.8 Operators</h4>
            <p>In the next section, we'll explore all the operators in C++ and how to use them.</p>
        </div>
    `,
    navigation: {
        next: "ch2-8",
        prev: "ch2-6",
        nextTitle: "2.8 Operators",
        prevTitle: "2.6 Variables"
    }
};