// ===============================
// Computer Programming - Chapter 2.4
// Keywords, Identifiers, Inputs, Outputs, Comments, Parts of a Program
// ===============================

window.currentSubsectionData = {
    title: "2.4 Keywords, Identifiers, Inputs, Outputs, Comments, Parts of a Program",
    content: `
        <h2>2.4 Keywords, Identifiers, Inputs, Outputs, Comments, Parts of a Program</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand what keywords are and learn the C++ keyword list</li>
                <li>Learn the rules for creating valid identifiers</li>
                <li>Master input operations using cin</li>
                <li>Master output operations using cout</li>
                <li>Learn how to write effective comments</li>
                <li>Review and understand all parts of a C++ program</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: KEYWORDS ==================== -->
        <h3>2.4.1 Keywords in C++</h3>
        
        <p><strong>Keywords</strong> (also called reserved words) are words that have special meaning in C++. They cannot be used as variable names, function names, or any other identifiers in your program.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> Keywords are predefined, reserved words in C++ that have special meanings and cannot be used for any other purpose.</p>
        </div>
        
        <h4>Complete List of C++ Keywords:</h4>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 10px; background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <code>alignas</code>
            <code>alignof</code>
            <code>and</code>
            <code>and_eq</code>
            <code>asm</code>
            <code>auto</code>
            <code>bitand</code>
            <code>bitor</code>
            <code>bool</code>
            <code>break</code>
            <code>case</code>
            <code>catch</code>
            <code>char</code>
            <code>char8_t</code>
            <code>char16_t</code>
            <code>char32_t</code>
            <code>class</code>
            <code>compl</code>
            <code>const</code>
            <code>consteval</code>
            <code>constexpr</code>
            <code>const_cast</code>
            <code>continue</code>
            <code>decltype</code>
            <code>default</code>
            <code>delete</code>
            <code>do</code>
            <code>double</code>
            <code>dynamic_cast</code>
            <code>else</code>
            <code>enum</code>
            <code>explicit</code>
            <code>export</code>
            <code>extern</code>
            <code>false</code>
            <code>float</code>
            <code>for</code>
            <code>friend</code>
            <code>goto</code>
            <code>if</code>
            <code>inline</code>
            <code>int</code>
            <code>long</code>
            <code>mutable</code>
            <code>namespace</code>
            <code>new</code>
            <code>noexcept</code>
            <code>not</code>
            <code>not_eq</code>
            <code>nullptr</code>
            <code>operator</code>
            <code>or</code>
            <code>or_eq</code>
            <code>private</code>
            <code>protected</code>
            <code>public</code>
            <code>register</code>
            <code>reinterpret_cast</code>
            <code>requires</code>
            <code>return</code>
            <code>short</code>
            <code>signed</code>
            <code>sizeof</code>
            <code>static</code>
            <code>static_assert</code>
            <code>static_cast</code>
            <code>struct</code>
            <code>switch</code>
            <code>template</code>
            <code>this</code>
            <code>thread_local</code>
            <code>throw</code>
            <code>true</code>
            <code>try</code>
            <code>typedef</code>
            <code>typeid</code>
            <code>typename</code>
            <code>union</code>
            <code>unsigned</code>
            <code>using</code>
            <code>virtual</code>
            <code>void</code>
            <code>volatile</code>
            <code>wchar_t</code>
            <code>while</code>
            <code>xor</code>
            <code>xor_eq</code>
        </div>
        
        <h4>Common Keywords You'll Use Frequently:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Keyword</th>
                <th style="padding: 10px;">Purpose</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Integer data type</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int age = 20;</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>float</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Floating-point data type</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>float price = 19.99;</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>double</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Double-precision floating-point</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>double pi = 3.14159;</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>char</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Character data type</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>char grade = 'A';</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>bool</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Boolean data type (true/false)</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>bool isPassed = true;</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>if</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Conditional statement</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>if (x > 0) { ... }</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>else</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Alternative in conditional</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>else { ... }</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>for</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">For loop</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>for (int i=0; i<10; i++)</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>while</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">While loop</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>while (x > 0) { ... }</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>return</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Return from function</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>return 0;</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>void</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">No return type / no parameters</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>void printMessage()</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>const</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Constant value</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>const int MAX = 100;</code></td>
            </tr>
        </table>
        
        <div class="warning-box" style="background: #ffe8e8; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #f5576c;">
            <p><strong>⚠️ Important:</strong> You cannot use keywords as variable names! For example, you cannot name a variable <code>int</code>, <code>return</code>, or <code>if</code>.</p>
        </div>

        <!-- ==================== SECTION 2: IDENTIFIERS ==================== -->
        <h3>2.4.2 Identifiers</h3>
        
        <p><strong>Identifiers</strong> are names given to program elements such as variables, functions, arrays, classes, etc.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> Identifiers are the names you create for variables, functions, classes, and other user-defined program elements.</p>
        </div>
        
        <h4>Rules for Naming Identifiers:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Rule</th>
                <th style="padding: 10px;">Valid Examples</th>
                <th style="padding: 10px;">Invalid Examples</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Can contain letters (a-z, A-Z), digits (0-9), and underscore (_)</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>myVar, score1, _temp</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>my-var</code> (hyphen not allowed)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Must begin with a letter or underscore</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>age, _count, studentName</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>2ndPlace</code> (starts with digit)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Case-sensitive</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>age, Age, AGE</code> (all different)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">N/A</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Cannot be a keyword</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>myInt, returnValue</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int, return, if</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Cannot contain spaces</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>studentName, total_marks</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>student name</code> (space not allowed)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Cannot contain special characters</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>price, quantity</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>price$, quantity#</code></td>
            </tr>
        </table>
        
        <h4>Identifier Naming Conventions (Best Practices):</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Convention</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Examples</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>camelCase</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">First word lowercase, subsequent words capitalized</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>studentName, totalMarks, calculateAverage</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>PascalCase</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Every word starts with capital letter</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>StudentRecord, BankAccount, CircleArea</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>snake_case</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Words separated by underscores</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>student_name, total_marks, calculate_average</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>UPPER_CASE</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">All uppercase, words separated by underscores - used for constants</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>MAX_SIZE, PI, DEFAULT_VALUE</code></td>
            </tr>
        </table>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Best Practice:</strong> Use meaningful names that describe the purpose of the variable. <code>studentAge</code> is better than <code>sa</code> or <code>x</code>.</p>
        </div>
        
        <h4>Examples of Good and Bad Identifiers:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Good Identifiers</th>
                <th style="padding: 10px;">Bad Identifiers</th>
                <th style="padding: 10px;">Why It's Bad</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>studentAge</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>a</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Too vague, doesn't indicate purpose</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>totalMarks</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>tm</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Abbreviation not clear</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>calculateAverage</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>calcAvg</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Unclear abbreviation</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>isStudent</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>flag1</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Doesn't indicate what flag means</td>
            </tr>
        </table>

        <!-- ==================== SECTION 3: INPUT OPERATIONS (cin) ==================== -->
        <h3>2.4.3 Input Operations using cin</h3>
        
        <p><strong>cin</strong> (pronounced "see-in") is the standard input stream in C++. It is used to read input from the keyboard.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Syntax:</strong> <code>cin >> variable;</code></p>
        </div>
        
        <h4>Basic Input Examples:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int age;
    double height;
    char grade;
    string name;
    
    // Reading different data types
    cout << "Enter your age: ";
    cin >> age;
    
    cout << "Enter your height: ";
    cin >> height;
    
    cout << "Enter your grade: ";
    cin >> grade;
    
    cout << "Enter your name: ";
    cin >> name;  // Note: reads only one word
    
    cout << "\nYou entered:" << endl;
    cout << "Age: " << age << endl;
    cout << "Height: " << height << endl;
    cout << "Grade: " << grade << endl;
    cout << "Name: " << name << endl;
    
    return 0;
}</pre>
        
        <h4>Reading Multiple Values:</h4>
        
        <pre>
int a, b, c;
cout << "Enter three numbers: ";
cin >> a >> b >> c;  // Reads three values separated by spaces
cout << "Sum: " << a + b + c << endl;</pre>
        
        <h4>Reading Strings with Spaces:</h4>
        
        <p>The regular <code>cin >></code> stops at whitespace. To read a whole line including spaces, use <code>getline()</code>:</p>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

int main() {
    string fullName;
    
    cout << "Enter your full name: ";
    getline(cin, fullName);  // Reads entire line including spaces
    
    cout << "Hello, " << fullName << "!" << endl;
    
    return 0;
}</pre>
        
        <h4>cin and Data Types:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Data Type</th>
                <th style="padding: 10px;">Input Example</th>
                <th style="padding: 10px;">What Happens</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>cin >> x;</code> with input "42"</td>
                <td style="padding: 10px; border: 1px solid #ddd;">x becomes 42</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>double</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>cin >> x;</code> with input "3.14"</td>
                <td style="padding: 10px; border: 1px solid #ddd;">x becomes 3.14</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>char</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>cin >> ch;</code> with input "A"</td>
                <td style="padding: 10px; border: 1px solid #ddd;">ch becomes 'A'</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>string</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>cin >> s;</code> with input "Hello"</td>
                <td style="padding: 10px; border: 1px solid #ddd;">s becomes "Hello"</td>
            </tr>
        </table>
        
        <h4>Common cin Issues:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Issue</th>
                <th style="padding: 10px;">Example</th>
                <th style="padding: 10px;">Solution</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">String stops at space</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Input "John Doe" stores only "John"</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Use <code>getline(cin, name)</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Input mismatch</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Entering letters when expecting numbers</td>
                <td style="padding: 10px; border: 1px solid #ddd;">cin enters fail state - needs clearing</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Leftover newline</td>
                <td style="padding: 10px; border: 1px solid #ddd;">cin >> leaves \\n, affects next getline</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Use cin.ignore() after numeric input</td>
            </tr>
        </table>

        <!-- ==================== SECTION 4: OUTPUT OPERATIONS (cout) ==================== -->
        <h3>2.4.4 Output Operations using cout</h3>
        
        <p><strong>cout</strong> (pronounced "see-out") is the standard output stream in C++. It is used to display output on the screen.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Syntax:</strong> <code>cout << data << data << ...;</code></p>
        </div>
        
        <h4>Basic Output Examples:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Printing simple text
    cout << "Hello, World!" << endl;
    
    // Printing variables
    int age = 20;
    cout << "Age: " << age << endl;
    
    // Printing multiple items
    int x = 5, y = 10;
    cout << "x = " << x << ", y = " << y << endl;
    
    // Printing expressions
    cout << "Sum = " << x + y << endl;
    
    // Printing without newline
    cout << "This ";
    cout << "is ";
    cout << "all ";
    cout << "on ";
    cout << "one ";
    cout << "line";
    
    return 0;
}</pre>
        
        <h4>Output Formatting:</h4>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;iomanip&gt;  // For formatting
using namespace std;

int main() {
    double pi = 3.1415926535;
    
    // Default output
    cout << "Default: " << pi << endl;
    
    // Fixed notation with precision
    cout << fixed;
    cout << setprecision(2) << "2 decimals: " << pi << endl;
    cout << setprecision(4) << "4 decimals: " << pi << endl;
    
    // Width specification
    cout << setw(10) << "Name" << setw(10) << "Age" << endl;
    cout << setw(10) << "John" << setw(10) << 20 << endl;
    cout << setw(10) << "Mary" << setw(10) << 22 << endl;
    
    // Left and right alignment
    cout << left << setw(10) << "Left" << right << setw(10) << "Right" << endl;
    
    return 0;
}</pre>
        
        <h4>Special Characters in Output:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Escape Sequence</th>
                <th style="padding: 10px;">Meaning</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>\\n</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Newline</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>cout << "Line1\\nLine2";</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>\\t</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Tab</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>cout << "Col1\\tCol2";</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>\\\\</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Backslash</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>cout << "C:\\\\Programs";</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>\\"</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Double quote</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>cout << "She said \\"Hello\\"";</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>\\'</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Single quote</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>cout << "It\\'s mine";</code></td>
            </tr>
        </table>
        
        <h4>endl vs \\n:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Feature</th>
                <th style="padding: 10px;"><code>endl</code></th>
                <th style="padding: 10px;"><code>\\n</code></th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Action</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Inserts newline AND flushes output buffer</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Only inserts newline</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Performance</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Slower (due to buffer flush)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Faster</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">When to use</td>
                <td style="padding: 10px; border: 1px solid #ddd;">When you need immediate output</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Most of the time</td>
            </tr>
        </table>

        <!-- ==================== SECTION 5: COMMENTS ==================== -->
        <h3>2.4.5 Comments in C++</h3>
        
        <p><strong>Comments</strong> are notes in the code that are ignored by the compiler. They help humans understand the code.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Purpose:</strong> Comments document your code, explain complex logic, and make code more maintainable.</p>
        </div>
        
        <h4>Types of Comments:</h4>
        
        <h5>1. Single-Line Comments:</h5>
        <pre>
// This is a single-line comment
int age = 20;  // This comment explains the variable

// This entire line is a comment
// You can have multiple single-line comments</pre>
        
        <h5>2. Multi-Line Comments:</h5>
        <pre>
/* This is a multi-line comment
   It can span multiple lines
   and is useful for longer explanations */

/*
    This whole block is commented out
    cout << "This won't run" << endl;
    cout << "Neither will this" << endl;
*/</pre>
        
        <h4>Comment Usage Examples:</h4>
        
        <pre>
// ============================================
// Program: Student Grade Calculator
// Author: John Doe
// Date: January 15, 2024
// Description: Calculates final grade based on
//              assignments, midterm, and final
// ============================================

#include &lt;iostream&gt;
using namespace std;

int main() {
    // Constants - values that don't change
    const double ASSIGNMENT_WEIGHT = 0.3;   // 30% of grade
    const double MIDTERM_WEIGHT = 0.3;      // 30% of grade
    const double FINAL_WEIGHT = 0.4;        // 40% of grade
    
    double assignment, midterm, final, finalGrade;
    
    // Get input from user
    cout << "Enter assignment score: ";
    cin >> assignment;
    
    cout << "Enter midterm score: ";
    cin >> midterm;
    
    cout << "Enter final exam score: ";
    cin >> final;
    
    /* Calculate final grade using weighted average
       Formula: (assignment * weight) + (midterm * weight) + (final * weight)
    */
    finalGrade = (assignment * ASSIGNMENT_WEIGHT) +
                 (midterm * MIDTERM_WEIGHT) +
                 (final * FINAL_WEIGHT);
    
    // Display result
    cout << "Final Grade: " << finalGrade << endl;
    
    return 0;  // Program ended successfully
}</pre>
        
        <h4>When to Use Comments:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Situation</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">File/Program header</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Program name, author, date, purpose</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Complex logic</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Explain complicated algorithms</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Function purpose</td>
                <td style="padding: 10px; border: 1px solid #ddd;">What the function does, parameters, return value</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Important notes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Warnings, assumptions, limitations</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">TODOs</td>
                <td style="padding: 10px; border: 1px solid #ddd;">// TODO: Add error handling</td>
            </tr>
        </table>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Best Practices for Comments:</strong></p>
            <ul>
                <li>Comment WHY, not WHAT (the code shows what)</li>
                <li>Keep comments up to date with code changes</li>
                <li>Use clear and concise language</li>
                <li>Don't over-comment obvious code</li>
                <li>Use comments to explain complex logic</li>
            </ul>
        </div>

        <!-- ==================== SECTION 6: COMPLETE PROGRAM WITH ALL PARTS ==================== -->
        <h3>2.4.6 Complete Program Showing All Parts</h3>
        
        <pre>
// ============================================
// Program: Student Information System
// Author: CS Student
// Date: 2024
// Description: Demonstrates keywords, identifiers,
//              input, output, and comments
// ============================================

#include &lt;iostream&gt;      // Preprocessor directive - includes iostream
#include &lt;iomanip&gt;       // For formatted output
#include &lt;string&gt;        // For string type
using namespace std;     // Using directive

// Constants (identifiers in UPPER_CASE)
const int MAX_STUDENTS = 100;
const double PASSING_GRADE = 60.0;

int main() {  // Main function - program starts here
    // Variable declarations (identifiers in camelCase)
    string studentName;
    int studentId;
    double testScore;
    char grade;
    bool isPassing;
    
    // Input section
    cout << "=================================" << endl;
    cout << "   STUDENT INFORMATION SYSTEM" << endl;
    cout << "=================================" << endl;
    
    cout << "Enter student name: ";
    getline(cin, studentName);  // Read string with spaces
    
    cout << "Enter student ID: ";
    cin >> studentId;
    
    cout << "Enter test score (0-100): ";
    cin >> testScore;
    
    // Processing section - determine grade
    if (testScore >= 90) {
        grade = 'A';
    } else if (testScore >= 80) {
        grade = 'B';
    } else if (testScore >= 70) {
        grade = 'C';
    } else if (testScore >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    
    // Determine if passing
    isPassing = (testScore >= PASSING_GRADE);
    
    // Output section - display results
    cout << "\n=================================" << endl;
    cout << "          STUDENT REPORT" << endl;
    cout << "=================================" << endl;
    
    cout << left << setw(15) << "Name:" << studentName << endl;
    cout << setw(15) << "Student ID:" << studentId << endl;
    cout << setw(15) << "Test Score:" << fixed << setprecision(1) << testScore << endl;
    cout << setw(15) << "Grade:" << grade << endl;
    cout << setw(15) << "Status:" << (isPassing ? "PASSING" : "FAILING") << endl;
    cout << "=================================" << endl;
    
    return 0;  // Return statement
}</pre>

        <!-- ==================== SECTION 7: REVIEW OF PROGRAM PARTS ==================== -->
        <h3>2.4.7 Review: Parts of a C++ Program</h3>
        
        <p>Let's review all the parts that make up a C++ program:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Part</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Comments</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Human-readable notes ignored by compiler</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>// This is a comment</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Preprocessor Directives</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Instructions to preprocessor (start with #)</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>#include &lt;iostream&gt;</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Using Directives</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Specify which namespaces to use</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>using namespace std;</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Global Declarations</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Variables/functions accessible everywhere</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>const int MAX = 100;</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>main() Function</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Program entry point (required)</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int main() { ... }</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Variable Declarations</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Creating named storage locations</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int age;</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Statements</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Instructions that perform actions</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>cout << "Hello";</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Return Statement</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Returns value from function</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>return 0;</code></td>
            </tr>
        </table>

        <!-- ==================== SECTION 8: SUMMARY ==================== -->
        <h3>2.4.8 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li><strong>Keywords</strong> are reserved words with special meaning (cannot be used as identifiers)</li>
                <li><strong>Identifiers</strong> are names you create - must follow naming rules</li>
                <li>Identifiers can contain letters, digits, underscore; must start with letter or underscore</li>
                <li>Use meaningful names that describe the purpose (e.g., <code>studentAge</code> not <code>sa</code>)</li>
                <li><strong>cin</strong> is used for input: <code>cin >> variable;</code></li>
                <li><strong>cout</strong> is used for output: <code>cout << data;</code></li>
                <li>Use <code>getline(cin, string)</code> to read strings with spaces</li>
                <li><strong>Comments</strong> document code: <code>//</code> for single line, <code>/* */</code> for multiple lines</li>
                <li>Comments should explain WHY, not WHAT</li>
                <li>A complete C++ program includes: comments, preprocessor directives, main function, statements</li>
                <li>Use <code>endl</code> or <code>\\n</code> for new lines</li>
                <li>Format output with <code>setw()</code>, <code>setprecision()</code>, and <code>fixed</code></li>
            </ul>
        </div>

        <!-- ==================== SECTION 9: EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Which of the following are valid identifiers? Fix the invalid ones:</p>
            <pre>
1. 2ndPlace
2. student_name
3. int
4. _count
5. total-marks
6. floatValue
7. class
8. myVar1
9. first Name
10. MAX_SIZE</pre>
            
            <p><strong>Exercise 2:</strong> Write a program that asks for the user's first name, last name, age, and height. Display all information in a formatted table.</p>
            
            <p><strong>Exercise 3:</strong> Identify the keywords in this code snippet:</p>
            <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    const int MAX = 10;
    int count = 0;
    while (count < MAX) {
        if (count % 2 == 0) {
            cout << count << " is even" << endl;
        }
        count++;
    }
    return 0;
}</pre>
            
            <p><strong>Exercise 4:</strong> Write a program that demonstrates the difference between <code>cin >></code> and <code>getline()</code> when reading strings.</p>
            
            <p><strong>Exercise 5:</strong> Add appropriate comments to this program explaining what each part does:</p>
            <pre>
#include &lt;iostream&gt;
#include &lt;iomanip&gt;
using namespace std;

int main() {
    double radius, area;
    const double PI = 3.14159;
    
    cout << "Enter radius: ";
    cin >> radius;
    
    area = PI * radius * radius;
    
    cout << fixed << setprecision(2);
    cout << "Area = " << area << endl;
    
    return 0;
}</pre>
            
            <p><strong>Exercise 6:</strong> Write a program that asks for three test scores, calculates the average, and displays it with exactly 2 decimal places.</p>
            
            <p><strong>Exercise 7:</strong> Create a program that demonstrates the use of escape sequences - print a table with tabs and newlines.</p>
            
            <p><strong>Exercise 8:</strong> Write a program that asks for a number and determines if it's positive, negative, or zero. Use meaningful variable names and add comments.</p>
            
            <p><strong>Exercise 9:</strong> List all the parts of a C++ program and briefly explain each one.</p>
            
            <p><strong>Exercise 10:</strong> Write a complete program that includes all parts: comments, preprocessor directives, using directive, main function, variable declarations, input, processing, output, and return statement.</p>
        </div>

        <!-- ==================== SECTION 10: KEY TERMS ==================== -->
        <h3>2.4.9 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Keyword</strong>
                <p style="font-size: 12px;">Reserved word with special meaning</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Identifier</strong>
                <p style="font-size: 12px;">Name given to program elements</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">cin</strong>
                <p style="font-size: 12px;">Standard input stream</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">cout</strong>
                <p style="font-size: 12px;">Standard output stream</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Comment</strong>
                <p style="font-size: 12px;">Human-readable notes in code</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">getline()</strong>
                <p style="font-size: 12px;">Reads entire line including spaces</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">setw()</strong>
                <p style="font-size: 12px;">Sets field width for output</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">setprecision()</strong>
                <p style="font-size: 12px;">Sets decimal precision</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">endl</strong>
                <p style="font-size: 12px;">End line and flush buffer</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Escape Sequence</strong>
                <p style="font-size: 12px;">Special characters like \\n, \\t</p>
            </div>
        </div>
        
        <!-- ==================== PREVIEW OF NEXT SECTION ==================== -->
        <div style="background: linear-gradient(135deg, #667eea20, #764ba220); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">📖 Next: 2.5 Data Types</h4>
            <p>In the next section, we'll explore all the different data types in C++ in detail.</p>
        </div>
    `,
    navigation: {
        next: "ch2-5",
        prev: "ch2-3",
        nextTitle: "2.5 Data Types",
        prevTitle: "2.3 Sample Program"
    }
};