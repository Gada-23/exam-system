// ===============================
// Computer Programming - Chapter 2.5
// Data Types
// ===============================

window.currentSubsectionData = {
    title: "2.5 Data Types",
    content: `
        <h2>2.5 Data Types in C++</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand what data types are and why they are important</li>
                <li>Learn all fundamental data types in C++</li>
                <li>Understand the size and range of each data type</li>
                <li>Learn about type modifiers (short, long, signed, unsigned)</li>
                <li>Understand type conversion and type casting</li>
                <li>Learn best practices for choosing appropriate data types</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: INTRODUCTION TO DATA TYPES ==================== -->
        <h3>2.5.1 What are Data Types?</h3>
        
        <p>A <strong>data type</strong> defines the type of data that a variable can store. It tells the compiler:</p>
        <ul>
            <li>How much memory to allocate for the variable</li>
            <li>What kind of values can be stored</li>
            <li>What operations can be performed on the data</li>
        </ul>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Analogy:</strong> Think of data types like different types of containers in a kitchen. You use different containers for different purposes:</p>
            <ul>
                <li>A <strong>cup</strong> for liquids (like float/double)</li>
                <li>An <strong>egg carton</strong> for whole numbers (like int)</li>
                <li>A <strong>label</strong> for text (like string)</li>
                <li>A <strong>light switch</strong> for on/off (like bool)</li>
            </ul>
        </div>
        
        <h4>Why Data Types Matter:</h4>
        <ul>
            <li><strong>Memory Efficiency:</strong> Different types use different amounts of memory</li>
            <li><strong>Type Safety:</strong> Prevents meaningless operations (like multiplying a string)</li>
            <li><strong>Performance:</strong> Proper types lead to faster code</li>
            <li><strong>Clarity:</strong> Makes code more readable and self-documenting</li>
        </ul>

        <!-- ==================== SECTION 2: FUNDAMENTAL DATA TYPES ==================== -->
        <h3>2.5.2 Fundamental Data Types</h3>
        
        <p>C++ provides several built-in data types. Here are the most commonly used ones:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Data Type</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Size (typical)</th>
                <th style="padding: 10px;">Range</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>int</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Integer (whole numbers)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">4 bytes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">-2,147,483,648 to 2,147,483,647</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int age = 25;</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>short</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Short integer</td>
                <td style="padding: 10px; border: 1px solid #ddd;">2 bytes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">-32,768 to 32,767</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>short count = 100;</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>long</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Long integer</td>
                <td style="padding: 10px; border: 1px solid #ddd;">8 bytes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">-9 quintillion to 9 quintillion</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>long population = 7800000000;</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>float</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Floating-point (single precision)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">4 bytes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">~7 decimal digits precision</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>float price = 19.99f;</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>double</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Floating-point (double precision)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">8 bytes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">~15 decimal digits precision</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>double pi = 3.1415926535;</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>char</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Character</td>
                <td style="padding: 10px; border: 1px solid #ddd;">1 byte</td>
                <td style="padding: 10px; border: 1px solid #ddd;">-128 to 127 or 0 to 255</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>char grade = 'A';</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>bool</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Boolean (true/false)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">1 byte</td>
                <td style="padding: 10px; border: 1px solid #ddd;">true or false</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>bool isPassed = true;</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>void</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">No type (used for functions)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">0 bytes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">N/A</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>void printMessage();</code></td>
            </tr>
        </table>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Note:</strong> The actual size of data types can vary depending on the compiler and system architecture. The sizes shown are typical for modern systems.</p>
        </div>

        <!-- ==================== SECTION 3: INTEGER TYPES IN DETAIL ==================== -->
        <h3>2.5.3 Integer Types</h3>
        
        <p>Integer types store whole numbers (no decimal part). C++ provides several integer types with different sizes and ranges.</p>
        
        <h4>Integer Type Modifiers:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Modifier</th>
                <th style="padding: 10px;">Meaning</th>
                <th style="padding: 10px;">Effect</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>short</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Short integer</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Reduces size (typically 2 bytes)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>long</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Long integer</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Increases size (typically 4-8 bytes)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>long long</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Very long integer</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Even larger (typically 8 bytes)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>unsigned</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Unsigned (no negative)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Range shifts to non-negative only</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>signed</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Signed (can be negative)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Default for integers</td>
            </tr>
        </table>
        
        <h4>All Integer Type Combinations:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Type</th>
                <th style="padding: 10px;">Size (typical)</th>
                <th style="padding: 10px;">Range</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>short int</code> or <code>short</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">2 bytes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">-32,768 to 32,767</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>short s = 1000;</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>unsigned short int</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">2 bytes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">0 to 65,535</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>unsigned short us = 5000;</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">4 bytes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">-2,147,483,648 to 2,147,483,647</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int i = 100000;</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>unsigned int</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">4 bytes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">0 to 4,294,967,295</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>unsigned int ui = 4000000;</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>long int</code> or <code>long</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">8 bytes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>long l = 5000000000;</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>unsigned long int</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">8 bytes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">0 to 18,446,744,073,709,551,615</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>unsigned long ul = 10000000000;</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>long long int</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">8 bytes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">-9 quintillion to 9 quintillion</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>long long ll = 1234567890123;</code></td>
            </tr>
        </table>
        
        <h4>Demonstrating Integer Types:</h4>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;climits&gt;  // For integer limits
using namespace std;

int main() {
    cout << "===== Integer Type Sizes and Ranges =====" << endl;
    
    cout << "int size: " << sizeof(int) << " bytes" << endl;
    cout << "int range: " << INT_MIN << " to " << INT_MAX << endl;
    
    cout << "\\nshort int size: " << sizeof(short) << " bytes" << endl;
    cout << "short range: " << SHRT_MIN << " to " << SHRT_MAX << endl;
    
    cout << "\\nlong int size: " << sizeof(long) << " bytes" << endl;
    cout << "long range: " << LONG_MIN << " to " << LONG_MAX << endl;
    
    cout << "\\nunsigned int size: " << sizeof(unsigned int) << " bytes" << endl;
    cout << "unsigned int range: 0 to " << UINT_MAX << endl;
    
    // Demonstrating overflow
    int maxInt = INT_MAX;
    cout << "\\nMaximum int: " << maxInt << endl;
    cout << "maxInt + 1 = " << maxInt + 1 << " (overflow!)" << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 4: FLOATING-POINT TYPES ==================== -->
        <h3>2.5.4 Floating-Point Types</h3>
        
        <p>Floating-point types store numbers with decimal points. They are used for scientific calculations, measurements, and any situation requiring fractional values.</p>
        
        <h4>Floating-Point Types in C++:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Type</th>
                <th style="padding: 10px;">Size</th>
                <th style="padding: 10px;">Precision</th>
                <th style="padding: 10px;">Range (approx)</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>float</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">4 bytes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">~7 decimal digits</td>
                <td style="padding: 10px; border: 1px solid #ddd;">±1.5e-45 to ±3.4e38</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>float f = 3.14f;</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>double</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">8 bytes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">~15 decimal digits</td>
                <td style="padding: 10px; border: 1px solid #ddd;">±5.0e-324 to ±1.7e308</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>double d = 3.1415926535;</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>long double</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">10/12/16 bytes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">~18-33 decimal digits</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Even larger range</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>long double ld = 3.141592653589793L;</code></td>
            </tr>
        </table>
        
        <h4>Precision Demonstration:</h4>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;iomanip&gt;
using namespace std;

int main() {
    float f = 1.0 / 3.0;
    double d = 1.0 / 3.0;
    long double ld = 1.0L / 3.0L;
    
    cout << setprecision(20);
    
    cout << "float: " << f << endl;
    cout << "double: " << d << endl;
    cout << "long double: " << (double)ld << endl;
    
    // Demonstrating precision limits
    float f2 = 123456.789f;
    double d2 = 123456.789;
    
    cout << "\\nfloat large number: " << f2 << endl;
    cout << "double large number: " << d2 << endl;
    
    return 0;
}</pre>
        
        <h4>Scientific Notation:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Scientific notation
    double avogadro = 6.022e23;     // 6.022 × 10²³
    double electronMass = 9.11e-31;  // 9.11 × 10⁻³¹
    
    cout << "Avogadro's number: " << avogadro << endl;
    cout << "Electron mass: " << electronMass << endl;
    
    // Default output may use scientific notation for large/small numbers
    cout << "Default: " << avogadro << endl;
    
    // Force fixed notation
    cout << fixed;
    cout << "Fixed: " << avogadro << endl;
    
    return 0;
}</pre>
        
        <div class="warning-box" style="background: #ffe8e8; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #f5576c;">
            <p><strong>⚠️ Floating-Point Precision Warning:</strong> Floating-point numbers are approximations. Never compare floating-point numbers directly for equality!</p>
            <pre>
// Wrong way:
if (x == 0.1) { ... }  // May not work!

// Right way:
if (abs(x - 0.1) < 0.000001) { ... }  // Check within tolerance</pre>
        </div>

        <!-- ==================== SECTION 5: CHARACTER TYPES ==================== -->
        <h3>2.5.5 Character Types</h3>
        
        <p>Character types store single characters. In C++, characters are stored as integer values (ASCII codes).</p>
        
        <h4>Character Types:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Type</th>
                <th style="padding: 10px;">Size</th>
                <th style="padding: 10px;">Range</th>
                <th style="padding: 10px;">Purpose</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>char</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">1 byte</td>
                <td style="padding: 10px; border: 1px solid #ddd;">-128 to 127 or 0 to 255</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Basic ASCII characters</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>signed char</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">1 byte</td>
                <td style="padding: 10px; border: 1px solid #ddd;">-128 to 127</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Signed character (rarely used)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>unsigned char</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">1 byte</td>
                <td style="padding: 10px; border: 1px solid #ddd;">0 to 255</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Extended ASCII, byte data</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>wchar_t</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">2-4 bytes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Wide characters</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Unicode characters</td>
            </tr>
        </table>
        
        <h4>Working with Characters:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    char grade = 'A';
    char digit = '5';
    char symbol = '$';
    
    cout << "Grade: " << grade << endl;
    cout << "Digit: " << digit << endl;
    cout << "Symbol: " << symbol << endl;
    
    // Characters are stored as integers
    cout << "ASCII value of 'A': " << (int)grade << endl;
    cout << "ASCII value of '5': " << (int)digit << endl;
    
    // Character arithmetic
    char nextGrade = grade + 1;
    cout << "Next grade: " << nextGrade << endl;
    
    // Converting digit character to number
    int num = digit - '0';
    cout << "Digit as number: " << num << endl;
    
    // Checking character properties
    if (isdigit(digit)) {
        cout << digit << " is a digit" << endl;
    }
    
    if (isalpha(grade)) {
        cout << grade << " is a letter" << endl;
    }
    
    return 0;
}</pre>
        
        <h4>ASCII Table (Partial):</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">ASCII Value</th>
                <th style="padding: 10px;">Character</th>
                <th style="padding: 10px;">ASCII Value</th>
                <th style="padding: 10px;">Character</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">48</td>
                <td style="padding: 10px; border: 1px solid #ddd;">'0'</td>
                <td style="padding: 10px; border: 1px solid #ddd;">65</td>
                <td style="padding: 10px; border: 1px solid #ddd;">'A'</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">49</td>
                <td style="padding: 10px; border: 1px solid #ddd;">'1'</td>
                <td style="padding: 10px; border: 1px solid #ddd;">66</td>
                <td style="padding: 10px; border: 1px solid #ddd;">'B'</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">50</td>
                <td style="padding: 10px; border: 1px solid #ddd;">'2'</td>
                <td style="padding: 10px; border: 1px solid #ddd;">90</td>
                <td style="padding: 10px; border: 1px solid #ddd;">'Z'</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">57</td>
                <td style="padding: 10px; border: 1px solid #ddd;">'9'</td>
                <td style="padding: 10px; border: 1px solid #ddd;">97</td>
                <td style="padding: 10px; border: 1px solid #ddd;">'a'</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">32</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Space</td>
                <td style="padding: 10px; border: 1px solid #ddd;">122</td>
                <td style="padding: 10px; border: 1px solid #ddd;">'z'</td>
            </tr>
        </table>

        <!-- ==================== SECTION 6: BOOLEAN TYPE ==================== -->
        <h3>2.5.6 Boolean Type</h3>
        
        <p>The <code>bool</code> type stores logical values: <code>true</code> or <code>false</code>.</p>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    bool isRaining = true;
    bool isWeekend = false;
    
    cout << "Is it raining? " << isRaining << endl;  // Prints 1
    cout << "Is it weekend? " << isWeekend << endl;  // Prints 0
    
    // Using boolalpha to print true/false instead of 1/0
    cout << boolalpha;
    cout << "Is it raining? " << isRaining << endl;  // Prints true
    cout << "Is it weekend? " << isWeekend << endl;  // Prints false
    
    // Boolean expressions
    int age = 20;
    bool canVote = (age >= 18);
    cout << "Can vote: " << canVote << endl;
    
    // Boolean in conditions
    if (isRaining) {
        cout << "Take an umbrella!" << endl;
    }
    
    // Boolean conversion
    int x = 10;
    bool b1 = x;        // true (non-zero converts to true)
    bool b2 = 0;        // false
    bool b3 = -5;       // true (any non-zero is true)
    
    cout << "b1: " << b1 << ", b2: " << b2 << ", b3: " << b3 << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 7: STRING TYPE ==================== -->
        <h3>2.5.7 String Type</h3>
        
        <p>The <code>string</code> type (from the C++ standard library) stores sequences of characters.</p>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

int main() {
    // Declaring strings
    string name = "John Doe";
    string empty;           // Empty string
    string greeting("Hello");
    
    cout << "Name: " << name << endl;
    cout << "Greeting: " << greeting << endl;
    
    // String operations
    string firstName = "John";
    string lastName = "Smith";
    
    // Concatenation
    string fullName = firstName + " " + lastName;
    cout << "Full name: " << fullName << endl;
    
    // String length
    cout << "Name length: " << name.length() << endl;
    
    // Accessing characters
    cout << "First character: " << name[0] << endl;
    cout << "Last character: " << name[name.length()-1] << endl;
    
    // Modifying strings
    name[0] = 'M';
    cout << "Modified name: " << name << endl;
    
    // String comparison
    string str1 = "apple";
    string str2 = "banana";
    
    if (str1 < str2) {
        cout << str1 << " comes before " << str2 << endl;
    }
    
    // String input with spaces
    string fullAddress;
    cout << "Enter your full address: ";
    getline(cin, fullAddress);
    cout << "Address: " << fullAddress << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 8: TYPE CONVERSION ==================== -->
        <h3>2.5.8 Type Conversion</h3>
        
        <p>Type conversion (also called type casting) is converting a value from one data type to another.</p>
        
        <h4>1. Implicit Type Conversion (Automatic):</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // int to double
    int i = 5;
    double d = i;  // Implicit conversion: 5.0
    
    // char to int
    char c = 'A';
    int ascii = c;  // Implicit conversion: 65
    
    // bool to int
    bool b = true;
    int bi = b;     // Implicit conversion: 1
    
    // int to bool
    int x = 10;
    bool bx = x;    // Implicit conversion: true
    
    cout << "d = " << d << endl;
    cout << "ASCII of 'A': " << ascii << endl;
    cout << "bi = " << bi << endl;
    cout << "bx = " << bx << endl;
    
    // Promotion hierarchy: bool → char → int → long → float → double
    double result = 5 + 3.14;  // 5 (int) promoted to double → 8.14
    
    return 0;
}</pre>
        
        <h4>2. Explicit Type Conversion (Casting):</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // C-style cast
    double pi = 3.14159;
    int intPi = (int)pi;  // 3 (truncates decimal)
    
    // C++ static_cast
    int a = 10, b = 3;
    double quotient = static_cast&lt;double&gt;(a) / b;  // 3.33333
    
    cout << "intPi = " << intPi << endl;
    cout << "quotient = " << quotient << endl;
    
    // Common casting scenarios
    // 1. Convert char to int (get ASCII value)
    char ch = 'Z';
    cout << "ASCII of Z: " << static_cast&lt;int&gt;(ch) << endl;
    
    // 2. Convert int to char
    int code = 65;
    cout << "Character for 65: " << static_cast&lt;char&gt;(code) << endl;
    
    // 3. Truncate decimal
    double x = 7.8;
    int y = static_cast&lt;int&gt;(x);  // 7
    
    // 4. Prevent integer division
    int num1 = 5, num2 = 2;
    double result1 = num1 / num2;                    // 2 (integer division)
    double result2 = static_cast&lt;double&gt;(num1) / num2; // 2.5
    
    cout << "Without cast: " << result1 << endl;
    cout << "With cast: " << result2 << endl;
    
    return 0;
}</pre>
        
        <h4>Common Type Conversion Scenarios:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Conversion</th>
                <th style="padding: 10px;">Result</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">float → int</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Truncates decimal part</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int(3.14) = 3</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">int → float</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Adds .0</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>float(5) = 5.0</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">char → int</td>
                <td style="padding: 10px; border: 1px solid #ddd;">ASCII value</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int('A') = 65</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">int → char</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Character with that ASCII code</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>char(65) = 'A'</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">string → int</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Use stoi() function</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>stoi("123") = 123</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">int → string</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Use to_string() function</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>to_string(123) = "123"</code></td>
            </tr>
        </table>

        <!-- ==================== SECTION 9: CHOOSING THE RIGHT DATA TYPE ==================== -->
        <h3>2.5.9 Choosing the Right Data Type</h3>
        
        <p>Selecting the appropriate data type is important for memory efficiency and program correctness.</p>
        
        <h4>Guidelines for Choosing Data Types:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">If you need...</th>
                <th style="padding: 10px;">Use...</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Whole numbers between -2B and 2B</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Age, count, index</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Small whole numbers (-32K to 32K)</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>short</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Month (1-12), day (1-31)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Very large whole numbers</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>long</code> or <code>long long</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Population, file size</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Non-negative numbers only</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>unsigned</code> versions</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Array indices, sizes</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Decimal numbers (general)</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>double</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Price, average, measurement</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Decimal numbers (memory critical)</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>float</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Graphics, games (many numbers)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Single character</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>char</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Grade, yes/no response</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">True/false values</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>bool</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Flag, status, condition</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Text/string data</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>string</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Name, address, message</td>
            </tr>
        </table>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Best Practice:</strong> When in doubt, use <code>int</code> for whole numbers and <code>double</code> for decimal numbers. They are the most commonly used and provide good performance and range.</p>
        </div>

        <!-- ==================== SECTION 10: SIZE OF OPERATOR ==================== -->
        <h3>2.5.10 sizeof Operator</h3>
        
        <p>The <code>sizeof</code> operator returns the size of a data type or variable in bytes.</p>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    cout << "===== Data Type Sizes (in bytes) =====" << endl;
    
    cout << "char: " << sizeof(char) << endl;
    cout << "short: " << sizeof(short) << endl;
    cout << "int: " << sizeof(int) << endl;
    cout << "long: " << sizeof(long) << endl;
    cout << "long long: " << sizeof(long long) << endl;
    
    cout << "float: " << sizeof(float) << endl;
    cout << "double: " << sizeof(double) << endl;
    cout << "long double: " << sizeof(long double) << endl;
    
    cout << "bool: " << sizeof(bool) << endl;
    
    // sizeof on variables
    int x;
    double y;
    cout << "\\nsizeof x (int): " << sizeof x << endl;
    cout << "sizeof y (double): " << sizeof y << endl;
    
    // sizeof on arrays
    int arr[10];
    cout << "sizeof arr[10]: " << sizeof arr << endl;
    cout << "Number of elements: " << sizeof arr / sizeof arr[0] << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 11: SUMMARY ==================== -->
        <h3>2.5.11 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li><strong>Data types</strong> define what kind of data a variable can store</li>
                <li><strong>Integer types:</strong> short, int, long, long long (with signed/unsigned versions)</li>
                <li><strong>Floating-point types:</strong> float (7 digits), double (15 digits), long double (more)</li>
                <li><strong>Character type:</strong> char stores single characters (1 byte, ASCII values)</li>
                <li><strong>Boolean type:</strong> bool stores true/false values</li>
                <li><strong>String type:</strong> string stores sequences of characters (requires &lt;string&gt;)</li>
                <li><strong>Type modifiers:</strong> short, long, signed, unsigned modify integer types</li>
                <li><strong>Implicit conversion:</strong> Automatic conversion (e.g., int to double)</li>
                <li><strong>Explicit conversion:</strong> Use static_cast for deliberate type changes</li>
                <li><strong>sizeof operator:</strong> Returns size of type or variable in bytes</li>
                <li><strong>Choose appropriate types:</strong> Use int/double by default, smaller types when memory matters</li>
                <li><strong>Never compare floating-point numbers directly</strong> - use tolerance</li>
            </ul>
        </div>

        <!-- ==================== SECTION 12: EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Write a program that declares variables of each fundamental type and displays their values and sizes.</p>
            
            <p><strong>Exercise 2:</strong> What is the output of this code?</p>
            <pre>
int a = 5, b = 2;
double result1 = a / b;
double result2 = static_cast<double>(a) / b;
cout << result1 << " " << result2 << endl;</pre>
            
            <p><strong>Exercise 3:</strong> Write a program that asks for a character and displays its ASCII value.</p>
            
            <p><strong>Exercise 4:</strong> Create a program that demonstrates integer overflow. Show what happens when you add 1 to the maximum int value.</p>
            
            <p><strong>Exercise 5:</strong> Write a program that converts Celsius to Fahrenheit. Use appropriate data types. Formula: F = C × 9/5 + 32</p>
            
            <p><strong>Exercise 6:</strong> Which data type would you use for each of the following? Explain why.</p>
            <ul>
                <li>Age of a person</li>
                <li>Price of an item</li>
                <li>Population of a country</li>
                <li>Letter grade (A, B, C, etc.)</li>
                <li>Whether a student passed</li>
                <li>Student's full name</li>
                <li>Number of students in a class</li>
            </ul>
            
            <p><strong>Exercise 7:</strong> Write a program that demonstrates the difference between float and double precision. Use a number like 1.0/3.0 and display with high precision.</p>
            
            <p><strong>Exercise 8:</strong> Create a program that asks for a number and determines if it's within the range of an int. Hint: compare with INT_MAX and INT_MIN.</p>
            
            <p><strong>Exercise 9:</strong> Write a program that converts a string to a number and vice versa. Use stoi() and to_string().</p>
            
            <p><strong>Exercise 10:</strong> What's wrong with this code? Fix it.</p>
            <pre>
float a = 0.1;
float b = 0.2;
if (a + b == 0.3) {
    cout << "Equal" << endl;
} else {
    cout << "Not equal" << endl;
}</pre>
        </div>

        <!-- ==================== SECTION 13: KEY TERMS ==================== -->
        <h3>2.5.12 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Data Type</strong>
                <p style="font-size: 12px;">Category of data</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">int</strong>
                <p style="font-size: 12px;">Integer numbers</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">float/double</strong>
                <p style="font-size: 12px;">Decimal numbers</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">char</strong>
                <p style="font-size: 12px;">Single character</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">bool</strong>
                <p style="font-size: 12px;">True/false value</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">string</strong>
                <p style="font-size: 12px;">Text data</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">unsigned</strong>
                <p style="font-size: 12px;">Non-negative only</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">sizeof</strong>
                <p style="font-size: 12px;">Returns size in bytes</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Type Casting</strong>
                <p style="font-size: 12px;">Converting between types</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Overflow</strong>
                <p style="font-size: 12px;">Value exceeds range</p>
            </div>
        </div>
        
        <!-- ==================== PREVIEW OF NEXT SECTION ==================== -->
        <div style="background: linear-gradient(135deg, #667eea20, #764ba220); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">📖 Next: 2.6 Variables</h4>
            <p>In the next section, we'll learn all about variables - how to declare, initialize, and use them.</p>
        </div>
    `,
    navigation: {
        next: "ch2-6",
        prev: "ch2-4",
        nextTitle: "2.6 Variables",
        prevTitle: "2.4 Keywords, Identifiers, Inputs, Outputs, Comments"
    }
};