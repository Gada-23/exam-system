// ===============================
// Computer Programming - Chapter 2.2
// C++ IDE (Integrated Development Environment)
// ===============================

window.currentSubsectionData = {
    title: "2.2 C++ IDE (Integrated Development Environment)",
    content: `
        <h2>2.2 C++ Integrated Development Environment (IDE)</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand what an IDE is and why programmers use it</li>
                <li>Learn about popular C++ IDEs and their features</li>
                <li>Set up a C++ IDE on your computer</li>
                <li>Create, compile, and run your first C++ program in an IDE</li>
                <li>Understand the basic features of an IDE: editor, compiler, debugger</li>
                <li>Learn how to use the debugger to find errors</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: WHAT IS AN IDE? ==================== -->
        <h3>2.2.1 What is an IDE?</h3>
        
        <p>An <strong>IDE (Integrated Development Environment)</strong> is a software application that provides everything a programmer needs to write, compile, test, and debug code - all in one place.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> An IDE combines a text editor, compiler, debugger, and other tools into a single program, making programming faster and easier.</p>
        </div>
        
        <h4>Why Use an IDE?</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Without IDE</th>
                <th style="padding: 10px;">With IDE</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Write code in Notepad</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Write code with syntax highlighting and auto-completion</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Open command prompt to compile</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Click a "Build" or "Run" button</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Read compiler error messages in terminal</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Errors highlighted directly in the code</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Add print statements to debug</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Use built-in debugger to step through code</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Manually organize project files</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Project manager keeps files organized</td>
            </tr>
        </table>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Tip:</strong> For beginners, using an IDE removes the frustration of dealing with command-line tools and lets you focus on learning to code.</p>
        </div>

        <!-- ==================== SECTION 2: MAIN COMPONENTS OF AN IDE ==================== -->
        <h3>2.2.2 Main Components of an IDE</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 30px 0;">
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; text-align: center;">
                <i class="fas fa-pencil-alt" style="font-size: 40px; color: #667eea; margin-bottom: 10px;"></i>
                <h4 style="margin: 10px 0;">Code Editor</h4>
                <p style="font-size: 14px;">Where you write your code. Features include syntax highlighting, line numbers, auto-completion, and code folding.</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; text-align: center;">
                <i class="fas fa-cog" style="font-size: 40px; color: #764ba2; margin-bottom: 10px;"></i>
                <h4 style="margin: 10px 0;">Compiler</h4>
                <p style="font-size: 14px;">Translates your C++ code into machine code that the computer can execute. The IDE runs it with one click.</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; text-align: center;">
                <i class="fas fa-bug" style="font-size: 40px; color: #f093fb; margin-bottom: 10px;"></i>
                <h4 style="margin: 10px 0;">Debugger</h4>
                <p style="font-size: 14px;">Helps you find and fix errors by letting you pause execution, inspect variables, and step through code line by line.</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; text-align: center;">
                <i class="fas fa-folder-open" style="font-size: 40px; color: #f5576c; margin-bottom: 10px;"></i>
                <h4 style="margin: 10px 0;">Project Manager</h4>
                <p style="font-size: 14px;">Organizes all files related to your project in one place, making it easy to navigate and manage.</p>
            </div>
        </div>

        <!-- ==================== SECTION 3: POPULAR C++ IDEs ==================== -->
        <h3>2.2.3 Popular C++ IDEs</h3>
        
        <p>Here are the most commonly used IDEs for C++ programming:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">IDE</th>
                <th style="padding: 10px;">Platform</th>
                <th style="padding: 10px;">Best For</th>
                <th style="padding: 10px;">Cost</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Code::Blocks</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Windows, Mac, Linux</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Beginners - simple, lightweight, comes with compiler</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Free</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Visual Studio Code</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Windows, Mac, Linux</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Everyone - lightweight, extensible, modern</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Free</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Visual Studio</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Windows</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Professional Windows development</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Free Community edition</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Dev-C++</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Windows</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Absolute beginners - very simple</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Free</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>CLion</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Windows, Mac, Linux</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Professional developers</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Paid (free trial)</td>
            </tr>
        </table>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Recommendation for this course:</strong> We recommend using <strong>Code::Blocks</strong> or <strong>Visual Studio Code</strong>. Both are free and work well for beginners.</p>
        </div>

        <!-- ==================== SECTION 4: SETTING UP CODE::BLOCKS ==================== -->
        <h3>2.2.4 Setting Up Code::Blocks</h3>
        
        <p>Code::Blocks is an excellent choice for beginners because it includes everything you need in one package.</p>
        
        <h4>Step-by-Step Installation:</h4>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h5 style="color: #667eea;">Step 1: Download</h5>
            <p>Go to <code>www.codeblocks.org/downloads</code></p>
            <p>Look for: <strong>"codeblocks-20.03mingw-setup.exe"</strong> (or similar version)</p>
            <p class="warning-box" style="background: #ffe8e8; padding: 10px; border-radius: 5px;">⚠️ Make sure you download the version with <strong>mingw</strong> in the name - it includes the compiler!</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h5 style="color: #667eea;">Step 2: Install</h5>
            <ol>
                <li>Run the downloaded installer</li>
                <li>Click "Next" through the default options</li>
                <li>Make sure "MinGW Compiler Suite" is checked</li>
                <li>Complete the installation</li>
            </ol>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h5 style="color: #667eea;">Step 3: First Launch</h5>
            <ol>
                <li>Open Code::Blocks</li>
                <li>It will automatically detect the compiler</li>
                <li>Go to Settings → Compiler → Global compiler settings</li>
                <li>Ensure "GNU GCC Compiler" is selected</li>
            </ol>
        </div>

        <!-- ==================== SECTION 5: SETTING UP VISUAL STUDIO CODE ==================== -->
        <h3>2.2.5 Setting Up Visual Studio Code</h3>
        
        <p>VS Code is a modern, lightweight editor that becomes a powerful IDE with extensions.</p>
        
        <h4>Step-by-Step Installation:</h4>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h5 style="color: #667eea;">Step 1: Download VS Code</h5>
            <p>Go to <code>code.visualstudio.com</code></p>
            <p>Download the version for your operating system and install it.</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h5 style="color: #667eea;">Step 2: Install a C++ Compiler</h5>
            <p>VS Code doesn't include a compiler. You need to install one separately:</p>
            
            <p><strong>Windows:</strong> Install MinGW-w64</p>
            <ul>
                <li>Download from: <code>sourceforge.net/projects/mingw-w64</code></li>
                <li>Run the installer</li>
                <li>Add the <code>bin</code> folder to your PATH environment variable</li>
            </ul>
            
            <p><strong>Mac:</strong> Install Xcode command line tools</p>
            <ul>
                <li>Open Terminal</li>
                <li>Type: <code>xcode-select --install</code></li>
                <li>Follow the prompts</li>
            </ul>
            
            <p><strong>Linux:</strong> Install g++</p>
            <ul>
                <li>Open Terminal</li>
                <li>Type: <code>sudo apt-get install g++</code> (Ubuntu/Debian)</li>
                <li>Or: <code>sudo dnf install gcc-c++</code> (Fedora)</li>
            </ul>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h5 style="color: #667eea;">Step 3: Install C++ Extensions</h5>
            <ol>
                <li>Open VS Code</li>
                <li>Click the Extensions icon (or press Ctrl+Shift+X)</li>
                <li>Search for and install:</li>
                <ul>
                    <li><strong>"C/C++"</strong> by Microsoft</li>
                    <li><strong>"Code Runner"</strong> by Jun Han</li>
                </ul>
            </ol>
        </div>

        <!-- ==================== SECTION 6: YOUR FIRST PROGRAM IN AN IDE ==================== -->
        <h3>2.2.6 Your First Program in an IDE</h3>
        
        <p>Let's create and run your first C++ program using your chosen IDE.</p>
        
        <h4>In Code::Blocks:</h4>
        <pre>
1. File → New → Project
2. Select "Console Application" → Go
3. Choose "C++" → Next
4. Enter project title (e.g., "FirstProgram")
5. Choose a folder to save → Next → Finish
6. In the Projects tab, open main.cpp
7. You'll see a ready-made program
8. Press F9 or click the "Build and Run" icon (gear with play button)
9. The program will compile and run in a console window</pre>
        
        <h4>In VS Code:</h4>
        <pre>
1. Create a new folder for your projects
2. File → Open Folder → select that folder
3. File → New File (Ctrl+N)
4. Save as "hello.cpp" (Ctrl+S)
5. Type your C++ code
6. To run with Code Runner:
   - Click the play button (top right)
   - Or press Ctrl+Alt+N
7. Output will appear in the terminal panel</pre>
        
        <h4>Sample Program to Test:</h4>
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    cout << "Welcome to C++ Programming!" << endl;
    return 0;
}</pre>

        <!-- ==================== SECTION 7: UNDERSTANDING THE IDE INTERFACE ==================== -->
        <h3>2.2.7 Understanding the IDE Interface</h3>
        
        <p>Let's explore the main parts of an IDE (using Code::Blocks as example):</p>
        
        <div style="background: #2d2d2d; color: #f8f8f2; padding: 20px; border-radius: 10px; font-family: monospace; margin: 20px 0;">
            <p>┌─────────────────────────────────────────────────────┐</p>
            <p>│  Menu Bar: File, Edit, View, Project, Build, Debug  │</p>
            <p>├─────────────────────────────────────────────────────┤</p>
            <p>│  Toolbar: Save, Build, Run, Debug buttons          │</p>
            <p>├─────────────────────────────────────────────────────┤</p>
            <p>│  Projects Tab  │  Editor Area                      │</p>
            <p>│  (file list)   │  (where you write code)           │</p>
            <p>│               │                                    │</p>
            <p>│               │  #include &lt;iostream&gt;               │</p>
            <p>│               │  using namespace std;              │</p>
            <p>│               │                                     │</p>
            <p>│               │  int main() {                       │</p>
            <p>│               │      cout << "Hi";                  │</p>
            <p>│               │      return 0;                      │</p>
            <p>│               │  }                                  │</p>
            <p>├─────────────────────────────────────────────────────┤</p>
            <p>│  Logs & Other: Build messages, Search results       │</p>
            <p>└─────────────────────────────────────────────────────┘</p>
        </div>
        
        <h4>Key Areas:</h4>
        <ul>
            <li><strong>Menu Bar:</strong> Access all features (File, Edit, Build, etc.)</li>
            <li><strong>Toolbar:</strong> Quick access buttons for common tasks</li>
            <li><strong>Projects Tab:</strong> Shows all files in your project</li>
            <li><strong>Editor Area:</strong> Where you write and edit code</li>
            <li><strong>Logs Panel:</strong> Shows compiler messages, errors, output</li>
        </ul>

        <!-- ==================== SECTION 8: COMPILING AND RUNNING ==================== -->
        <h3>2.2.8 Compiling and Running Programs</h3>
        
        <p>Understanding what happens when you click the "Run" button:</p>
        
        <div style="display: flex; justify-content: space-around; align-items: center; margin: 30px 0; flex-wrap: wrap;">
            <div style="text-align: center; padding: 15px;">
                <div style="background: #667eea; color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px; font-weight: bold;">1</div>
                <p>Write Code<br><small>(.cpp file)</small></p>
            </div>
            <div style="font-size: 30px; color: #667eea;">→</div>
            <div style="text-align: center; padding: 15px;">
                <div style="background: #764ba2; color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px; font-weight: bold;">2</div>
                <p>Compile<br><small>(check for errors)</small></p>
            </div>
            <div style="font-size: 30px; color: #667eea;">→</div>
            <div style="text-align: center; padding: 15px;">
                <div style="background: #f093fb; color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px; font-weight: bold;">3</div>
                <p>Link<br><small>(create executable)</small></p>
            </div>
            <div style="font-size: 30px; color: #667eea;">→</div>
            <div style="text-align: center; padding: 15px;">
                <div style="background: #f5576c; color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px; font-weight: bold;">4</div>
                <p>Run<br><small>(execute program)</small></p>
            </div>
        </div>
        
        <h4>Common Build Options:</h4>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Button/Action</th>
                <th style="padding: 10px;">What it does</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Build</strong> (or Compile)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Compiles only files that have changed</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Build and Run</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Compiles and then runs the program</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Rebuild</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Compiles all files from scratch</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Run</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Runs the last successfully compiled program</td>
            </tr>
        </table>

        <!-- ==================== SECTION 9: UNDERSTANDING COMPILER ERRORS ==================== -->
        <h3>2.2.9 Understanding Compiler Errors</h3>
        
        <p>When you compile, you might see errors. Don't panic - they help you fix problems!</p>
        
        <h4>Common Errors and What They Mean:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Error Message</th>
                <th style="padding: 10px;">Meaning</th>
                <th style="padding: 10px;">Example Code with Error</th>
                <th style="padding: 10px;">Fix</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>'cout' was not declared</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Missing iostream or namespace</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>cout << "Hi";</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Add <code>#include &lt;iostream&gt;</code> and <code>using namespace std;</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>expected ';' before '}'</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Missing semicolon</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>cout << "Hi"</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Add <code>;</code> at end: <code>cout << "Hi";</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>'x' was not declared</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Using variable without declaring it</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>cout << x;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Declare first: <code>int x = 5;</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>redefinition of 'main'</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Multiple main functions</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Two <code>int main()</code> in same file</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Keep only one main function</td>
            </tr>
        </table>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Tip:</strong> In most IDEs, you can double-click an error message and it will take you to the line with the error!</p>
        </div>

        <!-- ==================== SECTION 10: INTRODUCTION TO DEBUGGING ==================== -->
        <h3>2.2.10 Introduction to Debugging</h3>
        
        <p>The debugger is one of the most powerful features of an IDE. It lets you see what's happening inside your program while it runs.</p>
        
        <h4>Basic Debugging Concepts:</h4>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 30px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                <strong style="color: #667eea;">Breakpoint</strong>
                <p style="font-size: 13px; margin: 5px 0 0;">A marker that tells the debugger to pause execution at a specific line.</p>
                <p style="font-size: 12px; color: #999;">Click in the margin next to a line number</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                <strong style="color: #667eea;">Step Over (F10)</strong>
                <p style="font-size: 13px; margin: 5px 0 0;">Execute the current line and move to the next line.</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                <strong style="color: #667eea;">Step Into (F11)</strong>
                <p style="font-size: 13px; margin: 5px 0 0;">If the line calls a function, go into that function.</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                <strong style="color: #667eea;">Watch</strong>
                <p style="font-size: 13px; margin: 5px 0 0;">See the current value of variables.</p>
            </div>
        </div>
        
        <h4>Debugging Example:</h4>
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int x = 5;
    int y = 0;
    int z = x / y;  // Set breakpoint here
    cout << z;
    return 0;
}</pre>
        
        <p>Steps to debug:</p>
        <ol>
            <li>Set a breakpoint by clicking in the margin next to <code>int z = x / y;</code></li>
            <li>Start debugging (usually F5 or a bug icon)</li>
            <li>Program will pause at the breakpoint</li>
            <li>Hover over variables to see their values - notice y is 0!</li>
            <li>This explains why the program crashes - division by zero</li>
            <li>Fix the code by checking if y is zero before dividing</li>
        </ol>

        <!-- ==================== SECTION 11: COMMON IDE SHORTCUTS ==================== -->
        <h3>2.2.11 Common IDE Shortcuts</h3>
        
        <p>Learning keyboard shortcuts will make you much faster:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Action</th>
                <th style="padding: 10px;">Windows/Linux</th>
                <th style="padding: 10px;">Mac</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Save file</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>Ctrl+S</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>Cmd+S</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Build/Run</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>F9</code> (Code::Blocks) or <code>Ctrl+Alt+N</code> (VS Code)</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>Cmd+Alt+N</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Start Debug</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>F8</code> or <code>F5</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>F5</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Step Over</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>F10</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>F10</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Step Into</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>F11</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>F11</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Toggle Breakpoint</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>F5</code> (Code::Blocks) or click margin</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Click margin</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Find/Replace</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>Ctrl+F</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>Cmd+F</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Undo</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>Ctrl+Z</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>Cmd+Z</code></td>
            </tr>
        </table>

        <!-- ==================== SECTION 12: SUMMARY ==================== -->
        <h3>2.2.12 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li>An <strong>IDE</strong> combines an editor, compiler, and debugger in one application</li>
                <li>Popular C++ IDEs: Code::Blocks (beginner-friendly), VS Code (modern/extensible), Visual Studio (professional)</li>
                <li><strong>Code::Blocks</strong> comes with a compiler - easiest to start with</li>
                <li><strong>VS Code</strong> needs separate compiler installation but is very powerful</li>
                <li>The <strong>Build</strong> button compiles your code; <strong>Run</strong> executes it</li>
                <li><strong>Compiler errors</strong> help you fix syntax problems - double-click them to jump to the error</li>
                <li>The <strong>debugger</strong> helps find logical errors by letting you pause and inspect variables</li>
                <li><strong>Breakpoints</strong> pause execution at specific lines</li>
                <li><strong>Step Over/Into</strong> lets you execute code line by line</li>
                <li>Learn <strong>keyboard shortcuts</strong> to work more efficiently</li>
            </ul>
        </div>

        <!-- ==================== SECTION 13: EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Install Code::Blocks or VS Code on your computer following the steps above.</p>
            
            <p><strong>Exercise 2:</strong> Create a new project and write a program that prints:</p>
            <pre>
My First Program
----------------
Welcome to C++!</pre>
            
            <p><strong>Exercise 3:</strong> Write a program with the following errors and observe the error messages:</p>
            <ul>
                <li>Missing semicolon</li>
                <li>Missing #include</li>
                <li>Using a variable without declaring it</li>
            </ul>
            <p>Fix each error and recompile.</p>
            
            <p><strong>Exercise 4:</strong> Write a program that asks for two numbers and prints their sum. Use the debugger to:</p>
            <ol>
                <li>Set a breakpoint after getting input</li>
                <li>Run the debugger</li>
                <li>Check the values of the variables</li>
                <li>Step through the calculation</li>
            </ol>
            
            <p><strong>Exercise 5:</strong> Write a program with a division by zero error. Use the debugger to find which variable is causing the problem.</p>
            
            <p><strong>Exercise 6:</strong> Practice using keyboard shortcuts. Try to write a small program using only shortcuts (no mouse).</p>
        </div>

        <!-- ==================== SECTION 14: KEY TERMS ==================== -->
        <h3>2.2.13 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">IDE</strong>
                <p style="font-size: 12px;">Integrated Development Environment</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Compiler</strong>
                <p style="font-size: 12px;">Translates code to machine language</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Debugger</strong>
                <p style="font-size: 12px;">Finds and fixes logical errors</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Breakpoint</strong>
                <p style="font-size: 12px;">Pauses program at specific line</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Build</strong>
                <p style="font-size: 12px;">Compile the program</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Run</strong>
                <p style="font-size: 12px;">Execute the program</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Syntax Error</strong>
                <p style="font-size: 12px;">Violation of language rules</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Logic Error</strong>
                <p style="font-size: 12px;">Program runs but gives wrong output</p>
            </div>
        </div>
        
        <!-- ==================== PREVIEW OF NEXT SECTION ==================== -->
        <div style="background: linear-gradient(135deg, #667eea20, #764ba220); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">📖 Next: 2.3 Sample Program</h4>
            <p>Now that you have your IDE set up, let's write and analyze complete C++ programs to see how all the pieces work together.</p>
        </div>
    `,
    navigation: {
        next: "ch2-3",
        prev: "ch2-1",
        nextTitle: "2.3 Sample Program",
        prevTitle: "2.1 Structure of a Program"
    }
};