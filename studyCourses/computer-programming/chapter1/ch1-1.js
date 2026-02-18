// ===============================
// Computer Programming - Chapter 1.1
// Introduction to Programming
// ===============================

window.currentSubsectionData = {
    title: "1.1 Introduction to Programming",
    content: `
        <h2>1.1 Introduction to Programming</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand what programming is and why it is important</li>
                <li>Learn about different types of programming languages</li>
                <li>Understand the basic structure of a C++ program</li>
                <li>Learn how to write and run your first C++ program</li>
                <li>Understand basic input and output operations in C++</li>
                <li>Learn about variables, data types, and operators in C++</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: WHAT IS PROGRAMMING ==================== -->
        <h3>1.1.1 What is Programming?</h3>
        
        <p><strong>Programming</strong> is the process of writing instructions that tell a computer what to do. These instructions are called <strong>code</strong>, and they are written in programming languages that both humans and computers can understand.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> Programming = Giving step-by-step instructions to a computer to perform a specific task.</p>
        </div>
        
        <h4>Real-World Analogy:</h4>
        <p>Think of programming like giving a cooking recipe to a chef:</p>
        <ul>
            <li><strong>The recipe</strong> = The program (instructions)</li>
            <li><strong>The chef</strong> = The computer (executes instructions)</li>
            <li><strong>The ingredients</strong> = The data (information to process)</li>
            <li><strong>The final dish</strong> = The output (result)</li>
        </ul>
        
        <h4>Why is Programming Important?</h4>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Reason</th>
                <th style="padding: 10px;">Explanation</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Automation</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Computers can perform repetitive tasks faster than humans</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Processing 10,000 student records in seconds</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Accuracy</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Once programmed correctly, computers make no mistakes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Calculating complex mathematical formulas</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Speed</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Computers process millions of operations per second</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Searching through millions of web pages</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Problem Solving</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Programming teaches logical thinking and analysis</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Breaking complex problems into smaller steps</td>
            </tr>
        </table>

        <!-- ==================== SECTION 2: PROGRAMMING LANGUAGES ==================== -->
        <h3>1.1.2 Programming Languages</h3>
        
        <p>A <strong>programming language</strong> is a formal language with a set of rules (syntax) used to write computer programs.</p>
        
        <h4>Levels of Programming Languages:</h4>
        
        <div style="margin: 25px 0;">
            <div style="background: linear-gradient(90deg, #667eea, #764ba2); height: 30px; width: 100%; border-radius: 15px; position: relative; margin: 20px 0;">
                <div style="position: absolute; left: 5%; top: -25px; background: white; padding: 3px 10px; border-radius: 15px; font-size: 12px; font-weight: bold;">Low-Level</div>
                <div style="position: absolute; right: 5%; top: -25px; background: white; padding: 3px 10px; border-radius: 15px; font-size: 12px; font-weight: bold;">High-Level</div>
                <div style="position: absolute; left: 20%; top: 35px; background: #333; color: white; padding: 3px 10px; border-radius: 15px; font-size: 11px;">Machine Language</div>
                <div style="position: absolute; left: 40%; top: 35px; background: #333; color: white; padding: 3px 10px; border-radius: 15px; font-size: 11px;">Assembly</div>
                <div style="position: absolute; left: 70%; top: 35px; background: #333; color: white; padding: 3px 10px; border-radius: 15px; font-size: 11px;">C++, Java, Python</div>
            </div>
        </div>
        
        <h4>1. Machine Language (1st Generation)</h4>
        <ul>
            <li>The lowest level of programming language</li>
            <li>Written in binary code (0s and 1s)</li>
            <li>Directly executed by the CPU</li>
            <li>Different for each type of processor</li>
        </ul>
        <pre>
; Example: Adding two numbers in machine language (hypothetical)
10110000 01100001    ; Move 97 to register AL
10110010 00000010    ; Move 2 to register DL
00000000 11000010    ; Add DL to AL</pre>
        
        <h4>2. Assembly Language (2nd Generation)</h4>
        <ul>
            <li>Uses mnemonics (short abbreviations) instead of binary</li>
            <li>Requires an assembler to convert to machine code</li>
            <li>Slightly easier than machine language but still complex</li>
            <li>Still processor-specific</li>
        </ul>
        <pre>
; Assembly language example (Intel syntax)
MOV AL, 61h    ; Move hexadecimal value 61 (97 decimal) to AL register
MOV DL, 02h    ; Move 2 to DL register
ADD AL, DL     ; Add DL to AL (result in AL)
INT 21h        ; Call DOS interrupt to display</pre>
        
        <h4>3. High-Level Languages (3rd Generation and above)</h4>
        <ul>
            <li>Closer to human language (English-like)</li>
            <li>Easier to read, write, and maintain</li>
            <li>Portable across different processors</li>
            <li>Requires compiler or interpreter</li>
        </ul>
        
        <p><strong>Examples of High-Level Languages:</strong></p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Language</th>
                <th style="padding: 10px;">Used For</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>C</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Operating systems, embedded systems</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Linux kernel, Windows kernel</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>C++</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Games, high-performance applications</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Adobe Photoshop, game engines</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Java</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Enterprise applications, Android apps</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Android apps, banking systems</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Python</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Data science, web development, AI</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Instagram, YouTube, Netflix</td>
            </tr>
        </table>
        
        <h4>Why We Use C++ in This Course:</h4>
        <ul>
            <li><strong>Performance:</strong> C++ is fast and efficient</li>
            <li><strong>Control:</strong> Gives you low-level access to memory</li>
            <li><strong>Industry Standard:</strong> Widely used in games, operating systems, and embedded systems</li>
            <li><strong>Foundation:</strong> Learning C++ makes learning other languages easier</li>
            <li><strong>Object-Oriented:</strong> Supports modern programming paradigms</li>
        </ul>

        <!-- ==================== SECTION 3: STRUCTURE OF A C++ PROGRAM ==================== -->
        <h3>1.1.3 Structure of a C++ Program</h3>
        
        <p>Every C++ program has a specific structure. Let's look at the simplest C++ program:</p>
        
        <pre>
#include &lt;iostream&gt;  // (1) Preprocessor directive
using namespace std;   // (2) Using namespace

int main() {           // (3) Main function
    cout &lt;&lt; "Hello, World!" &lt;&lt; endl;  // (4) Statement
    return 0;                          // (5) Return statement
}                      // (6) Closing brace</pre>
        
        <h4>Detailed Explanation of Each Part:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Part</th>
                <th style="padding: 10px;">Code</th>
                <th style="padding: 10px;">Explanation</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>1. Preprocessor Directive</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>#include &lt;iostream&gt;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Includes the input/output stream library. This allows us to use cout and cin.</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>2. Namespace</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>using namespace std;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Tells the compiler to use the standard namespace. Without this, we would need to write std::cout instead of cout.</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>3. Main Function</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int main()</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Every C++ program must have a main() function. Program execution starts here. The 'int' means it returns an integer value.</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>4. Statement</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>cout &lt;&lt; "Hello, World!" &lt;&lt; endl;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">This line prints text to the screen. cout is the output stream, &lt;&lt; is the insertion operator, and endl adds a new line.</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>5. Return Statement</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>return 0;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Returns 0 to the operating system, indicating the program executed successfully.</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>6. Braces</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>{ }</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Curly braces enclose the body of the main function. All code inside belongs to main().</td>
            </tr>
        </table>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Important:</strong> Every statement in C++ must end with a semicolon <code>;</code>. Forgetting the semicolon is a common syntax error!</p>
        </div>

        <!-- ==================== SECTION 4: BASIC INPUT/OUTPUT ==================== -->
        <h3>1.1.4 Basic Input and Output in C++</h3>
        
        <h4>Output using cout</h4>
        <p><code>cout</code> (pronounced "see-out") is used to display output to the console.</p>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Printing simple text
    cout &lt;&lt; "Welcome to C++ programming!" &lt;&lt; endl;
    
    // Printing multiple lines
    cout &lt;&lt; "Line 1" &lt;&lt; endl;
    cout &lt;&lt; "Line 2" &lt;&lt; endl;
    
    // Printing numbers
    cout &lt;&lt; "The answer is: " &lt;&lt; 42 &lt;&lt; endl;
    
    // Printing without endl (no new line)
    cout &lt;&lt; "This ";
    cout &lt;&lt; "is ";
    cout &lt;&lt; "all ";
    cout &lt;&lt; "on ";
    cout &lt;&lt; "one ";
    cout &lt;&lt; "line";
    
    return 0;
}</pre>
        
        <p><strong>Output:</strong></p>
        <pre>
Welcome to C++ programming!
Line 1
Line 2
The answer is: 42
This is all on one line</pre>
        
        <h4>Input using cin</h4>
        <p><code>cin</code> (pronounced "see-in") is used to get input from the user.</p>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;   // Needed for string type
using namespace std;

int main() {
    string name;
    int age;
    double height;
    
    // Getting string input
    cout &lt;&lt; "Enter your name: ";
    cin >> name;
    
    // Getting integer input
    cout &lt;&lt; "Enter your age: ";
    cin >> age;
    
    // Getting double input
    cout &lt;&lt; "Enter your height in meters: ";
    cin >> height;
    
    // Displaying the input
    cout &lt;&lt; endl;  // Empty line
    cout &lt;&lt; "Hello, " &lt;&lt; name &lt;&lt; "!" &lt;&lt; endl;
    cout &lt;&lt; "You are " &lt;&lt; age &lt;&lt; " years old." &lt;&lt; endl;
    cout &lt;&lt; "You are " &lt;&lt; height &lt;&lt; " meters tall." &lt;&lt; endl;
    
    return 0;
}</pre>
        
        <p><strong>Sample Run:</strong></p>
        <pre>
Enter your name: John
Enter your age: 20
Enter your height in meters: 1.75

Hello, John!
You are 20 years old.
You are 1.75 meters tall.</pre>
        
        <div class="warning-box" style="background: #ffe8e8; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #f5576c;">
            <p><strong>⚠️ Important:</strong> When using cin, the extraction operator <code>>></code> stops at whitespace. So if you enter "John Doe", only "John" will be stored. To get a whole line, use <code>getline(cin, name);</code> instead.</p>
        </div>

        <!-- ==================== SECTION 5: VARIABLES AND DATA TYPES ==================== -->
        <h3>1.1.5 Variables and Data Types</h3>
        
        <p>A <strong>variable</strong> is a named storage location in memory that holds a value. Think of it as a labeled box where you can store data.</p>
        
        <h4>Variable Declaration Syntax:</h4>
        <pre>data_type variable_name = initial_value;</pre>
        
        <h4>Basic Data Types in C++:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Data Type</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Size</th>
                <th style="padding: 10px;">Range</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Whole numbers</td>
                <td style="padding: 10px; border: 1px solid #ddd;">4 bytes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">-2.1B to 2.1B</td>
                <td style="padding: 10px; border: 1px solid #ddd;">25, -10, 0</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>float</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Decimal numbers (single precision)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">4 bytes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">~7 decimal digits</td>
                <td style="padding: 10px; border: 1px solid #ddd;">3.14f, -0.5f</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>double</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Decimal numbers (double precision)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">8 bytes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">~15 decimal digits</td>
                <td style="padding: 10px; border: 1px solid #ddd;">3.1415926535</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>char</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Single character</td>
                <td style="padding: 10px; border: 1px solid #ddd;">1 byte</td>
                <td style="padding: 10px; border: 1px solid #ddd;">-128 to 127</td>
                <td style="padding: 10px; border: 1px solid #ddd;">'A', '5', '$'</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>bool</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Boolean (true/false)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">1 byte</td>
                <td style="padding: 10px; border: 1px solid #ddd;">true or false</td>
                <td style="padding: 10px; border: 1px solid #ddd;">true, false</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>string</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Sequence of characters</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Varies</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Depends on length</td>
                <td style="padding: 10px; border: 1px solid #ddd;">"Hello, World!"</td>
            </tr>
        </table>
        
        <h4>Variable Declaration Examples:</h4>
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

int main() {
    // Declaring and initializing variables
    int age = 20;                    // Integer
    float price = 99.99f;             // Float (note the 'f' suffix)
    double pi = 3.141592653589793;    // Double
    char grade = 'A';                  // Character (single quotes)
    bool isStudent = true;             // Boolean
    string name = "John Doe";          // String (double quotes)
    
    // Declaring without initializing (then assigning later)
    int quantity;
    quantity = 10;
    
    // Declaring multiple variables of the same type
    int x = 5, y = 10, z = 15;
    
    // Displaying variable values
    cout &lt;&lt; "Name: " &lt;&lt; name &lt;&lt; endl;
    cout &lt;&lt; "Age: " &lt;&lt; age &lt;&lt; endl;
    cout &lt;&lt; "Price: $" &lt;&lt; price &lt;&lt; endl;
    cout &lt;&lt; "Pi: " &lt;&lt; pi &lt;&lt; endl;
    cout &lt;&lt; "Grade: " &lt;&lt; grade &lt;&lt; endl;
    cout &lt;&lt; "Student: " &lt;&lt; isStudent &lt;&lt; endl;  // Prints 1 for true, 0 for false
    cout &lt;&lt; "Quantity: " &lt;&lt; quantity &lt;&lt; endl;
    cout &lt;&lt; "x + y + z = " &lt;&lt; x + y + z &lt;&lt; endl;
    
    return 0;
}</pre>
        
        <h4>Variable Naming Rules:</h4>
        <ul>
            <li>Can contain letters, digits, and underscores (_)</li>
            <li>Must start with a letter or underscore (not a digit)</li>
            <li>Case-sensitive (age, Age, and AGE are different)</li>
            <li>Cannot use C++ keywords (like int, return, if, etc.)</li>
            <li>Should be meaningful and descriptive</li>
        </ul>
        
        <p><strong>Valid variable names:</strong> age, _count, studentName, total_marks, number1</p>
        <p><strong>Invalid variable names:</strong> 2ndPlace (starts with digit), my-name (contains hyphen), int (keyword)</p>

        <!-- ==================== SECTION 6: BASIC OPERATORS ==================== -->
        <h3>1.1.6 Basic Operators in C++</h3>
        
        <h4>Arithmetic Operators:</h4>
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
                <td style="padding: 10px; border: 1px solid #ddd;"><code>5 / 3</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>1</code> (integer division truncates)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>/</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Division (float)</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>5.0 / 3.0</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>1.66667</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>%</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Modulus (remainder)</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>5 % 3</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>2</code></td>
            </tr>
        </table>
        
        <div class="warning-box" style="background: #ffe8e8; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #f5576c;">
            <p><strong>⚠️ Important:</strong> Integer division truncates (cuts off) the decimal part!</p>
            <p><code>int result = 10 / 3;    // result is 3, not 3.333</code></p>
            <p><code>float result = 10.0 / 3.0;  // result is 3.33333</code></p>
        </div>
        
        <h4>Increment and Decrement Operators:</h4>
        <pre>
int x = 5;
x++;  // Post-increment: x becomes 6 (use current value, then increment)
++x;  // Pre-increment: x becomes 7 (increment, then use new value)
x--;  // Post-decrement: x becomes 6
--x;  // Pre-decrement: x becomes 5</pre>
        
        <h4>Compound Assignment Operators:</h4>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Operator</th>
                <th style="padding: 10px;">Example</th>
                <th style="padding: 10px;">Equivalent to</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>+=</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x += 5;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x = x + 5;</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>-=</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x -= 3;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x = x - 3;</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>*=</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x *= 2;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x = x * 2;</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>/=</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x /= 4;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x = x / 4;</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>%=</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x %= 3;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>x = x % 3;</code></td>
            </tr>
        </table>
        
        <h4>Complete Example Using Operators:</h4>
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int a = 10, b = 3;
    
    // Arithmetic operations
    cout &lt;&lt; "a + b = " &lt;&lt; a + b &lt;&lt; endl;
    cout &lt;&lt; "a - b = " &lt;&lt; a - b &lt;&lt; endl;
    cout &lt;&lt; "a * b = " &lt;&lt; a * b &lt;&lt; endl;
    cout &lt;&lt; "a / b = " &lt;&lt; a / b &lt;&lt; " (integer division)" &lt;&lt; endl;
    cout &lt;&lt; "a % b = " &lt;&lt; a % b &lt;&lt; " (remainder)" &lt;&lt; endl;
    
    // Using float for division
    float x = 10.0, y = 3.0;
    cout &lt;&lt; "x / y = " &lt;&lt; x / y &lt;&lt; " (float division)" &lt;&lt; endl;
    
    // Increment and decrement
    int counter = 5;
    cout &lt;&lt; "Original: " &lt;&lt; counter &lt;&lt; endl;
    cout &lt;&lt; "Post-increment: " &lt;&lt; counter++ &lt;&lt; " (then becomes " &lt;&lt; counter &lt;&lt; ")" &lt;&lt; endl;
    cout &lt;&lt; "Pre-increment: " &lt;&lt; ++counter &lt;&lt; endl;
    
    // Compound assignment
    int value = 10;
    value += 5;  // value = value + 5
    cout &lt;&lt; "After += 5: " &lt;&lt; value &lt;&lt; endl;
    value *= 2;  // value = value * 2
    cout &lt;&lt; "After *= 2: " &lt;&lt; value &lt;&lt; endl;
    
    return 0;
}</pre>
        
        <p><strong>Output:</strong></p>
        <pre>
a + b = 13
a - b = 7
a * b = 30
a / b = 3 (integer division)
a % b = 1 (remainder)
x / y = 3.33333 (float division)
Original: 5
Post-increment: 5 (then becomes 6)
Pre-increment: 7
After += 5: 15
After *= 2: 30</pre>

        <!-- ==================== SECTION 7: COMMENTS ==================== -->
        <h3>1.1.7 Comments in C++</h3>
        
        <p>Comments are notes in the code that are ignored by the compiler. They help humans understand the code.</p>
        
        <h4>Single-Line Comments:</h4>
        <pre>
// This is a single-line comment
int age = 20;  // This comment explains the variable</pre>
        
        <h4>Multi-Line Comments:</h4>
        <pre>
/* This is a multi-line comment
   It can span multiple lines
   and is useful for longer explanations */

/*
    This whole block is commented out
    cout &lt;&lt; "This won't run" &lt;&lt; endl;
    cout &lt;&lt; "Neither will this" &lt;&lt; endl;
*/</pre>
        
        <h4>Why Use Comments?</h4>
        <ul>
            <li><strong>Documentation:</strong> Explain what code does</li>
            <li><strong>Clarity:</strong> Make complex code easier to understand</li>
            <li><strong>Debugging:</strong> Temporarily disable code</li>
            <li><strong>Collaboration:</strong> Help other programmers understand your code</li>
        </ul>

        <!-- ==================== SECTION 8: COMMON ERRORS ==================== -->
        <h3>1.1.8 Common Errors and How to Fix Them</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Error Type</th>
                <th style="padding: 10px;">Example</th>
                <th style="padding: 10px;">Error Message</th>
                <th style="padding: 10px;">Fix</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Missing semicolon</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>cout &lt;&lt; "Hello"</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>expected ';' before '}'</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Add <code>;</code> at the end: <code>cout &lt;&lt; "Hello";</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Missing #include</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Using cout without iostream</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>'cout' was not declared</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Add <code>#include &lt;iostream&gt;</code> at the top</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Undeclared variable</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>cout &lt;&lt; x;</code> (x not declared)</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>'x' was not declared</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Declare x first: <code>int x = 5;</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Wrong data type</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int x = 3.14;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Narrowing conversion warning</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Use <code>double x = 3.14;</code> for decimals</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Missing namespace</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Using cout without std::</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>'cout' is not a member of 'std'</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Add <code>using namespace std;</code> or use <code>std::cout</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Missing return</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">No return 0 in main</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Warning about no return statement</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Add <code>return 0;</code> at the end of main</td>
            </tr>
        </table>

        <!-- ==================== SECTION 9: SUMMARY ==================== -->
        <h3>1.1.9 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li><strong>Programming</strong> is giving instructions to a computer to perform tasks</li>
                <li><strong>Programming languages</strong> range from low-level (machine code) to high-level (C++, Java)</li>
                <li><strong>C++</strong> is a high-performance language used for games, operating systems, and applications</li>
                <li>Every C++ program must have a <code>main()</code> function - execution starts here</li>
                <li>Use <code>#include &lt;iostream&gt;</code> for input/output operations</li>
                <li><code>cout</code> is used for output, <code>cin</code> is used for input</li>
                <li><strong>Variables</strong> store data and must be declared with a data type</li>
                <li>Basic data types: <code>int</code>, <code>float</code>, <code>double</code>, <code>char</code>, <code>bool</code>, <code>string</code></li>
                <li><strong>Operators</strong> perform operations: <code>+ - * / %</code></li>
                <li>Integer division truncates decimal parts - be careful!</li>
                <li>Every statement must end with a semicolon <code>;</code></li>
                <li><strong>Comments</strong> (<code>//</code> or <code>/* */</code>) help document your code</li>
            </ul>
        </div>
        
        <!-- ==================== SECTION 10: EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Write a C++ program that prints your name, age, and student ID on separate lines.</p>
            
            <p><strong>Exercise 2:</strong> Write a program that asks the user for two numbers, then displays their sum, difference, product, and quotient.</p>
            
            <p><strong>Exercise 3:</strong> Write a program to calculate the area and perimeter of a rectangle. Ask the user for length and width.</p>
            <p><em>Formulas: Area = length × width, Perimeter = 2 × (length + width)</em></p>
            
            <p><strong>Exercise 4:</strong> Write a program that converts temperature from Celsius to Fahrenheit.</p>
            <p><em>Formula: Fahrenheit = (Celsius × 9/5) + 32</em></p>
            
            <p><strong>Exercise 5:</strong> Write a program that asks for a price and quantity, then calculates the total cost. Apply a 10% discount if the total is over $100.</p>
            
            <p><strong>Exercise 6:</strong> Identify and fix the errors in this code:</p>
            <pre>
#include iostream
using namespace std

int main()
    int age = 20
    cout << "Age is " << age << endl
    return 0
}</pre>
        </div>
        
        <!-- ==================== SECTION 11: KEY TERMS ==================== -->
        <h3>1.1.10 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Programming</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Writing computer instructions</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Compiler</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Translates entire program</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Interpreter</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Translates line by line</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Variable</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Named storage location</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Data Type</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Type of data stored</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Syntax</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Rules of the language</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">cout</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Output to console</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">cin</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Input from user</p>
            </div>
        </div>
    `
};