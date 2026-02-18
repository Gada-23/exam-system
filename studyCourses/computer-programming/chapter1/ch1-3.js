// ===============================
// Computer Programming - Chapter 1.3
// Flowchart
// ===============================

window.currentSubsectionData = {
    title: "1.2.1 Flowchart",
    content: `
        <h2>1.2.1 Flowchart</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand what a flowchart is and why it is used</li>
                <li>Learn all standard flowchart symbols and their meanings</li>
                <li>Learn the rules for creating proper flowcharts</li>
                <li>Study multiple examples of flowcharts for common problems</li>
                <li>Learn how to convert a flowchart to C++ code</li>
                <li>Understand the advantages and disadvantages of flowcharts</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: INTRODUCTION TO FLOWCHARTS ==================== -->
        <h3>1.2.1.1 What is a Flowchart?</h3>
        
        <p>A <strong>flowchart</strong> is a graphical representation of an algorithm or process. It uses different symbols to represent different types of actions or steps, connected by arrows to show the flow of control.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> A flowchart is a diagram that represents a process, showing the steps as boxes of various kinds, and their order by connecting them with arrows.</p>
        </div>
        
        <h4>Why Use Flowcharts?</h4>
        <ul>
            <li><strong>Visual Communication:</strong> Easier to understand than text</li>
            <li><strong>Logic Clarification:</strong> Shows the flow of control clearly</li>
            <li><strong>Error Detection:</strong> Helps identify logical errors before coding</li>
            <li><strong>Documentation:</strong> Serves as program documentation</li>
            <li><strong>Communication:</strong> Helps explain algorithms to non-programmers</li>
            <li><strong>Planning:</strong> Essential for complex programs</li>
        </ul>
        
        <h4>Real-World Analogy:</h4>
        <p>A flowchart is like a roadmap for your program. Just as a roadmap shows you the roads, intersections, and destinations, a flowchart shows you the path your program takes through different operations and decisions.</p>

        <!-- ==================== SECTION 2: FLOWCHART SYMBOLS ==================== -->
        <h3>1.2.1.2 Standard Flowchart Symbols</h3>
        
        <p>The American National Standards Institute (ANSI) has established standard symbols for flowcharts. Here are the most important ones:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Symbol</th>
                <th style="padding: 10px;">Name</th>
                <th style="padding: 10px;">Purpose</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd; text-align: center; font-size: 24px;">⬤</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Terminal</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Indicates start or end of program</td>
                <td style="padding: 10px; border: 1px solid #ddd;">START, END</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd; text-align: center; font-size: 24px;">▭</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Process</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Represents calculations or operations</td>
                <td style="padding: 10px; border: 1px solid #ddd;">sum = a + b, counter = counter + 1</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd; text-align: center; font-size: 24px;">⬦</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Decision</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Represents a yes/no or true/false question</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Is x > y? , Is student passed?</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd; text-align: center; font-size: 24px;">▱</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Input/Output</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Represents input or output operations</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Read number, Print result</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd; text-align: center; font-size: 24px;">→</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Flow Line</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Shows the direction of flow</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Connects symbols</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd; text-align: center; font-size: 24px;">○</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Connector</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Connects different parts of flowchart</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Used when flowchart spans multiple pages</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd; text-align: center; font-size: 24px;">▭</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Predefined Process</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Represents a subroutine or function</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Call calculate_average()</td>
            </tr>
        </table>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Memory Aid:</strong> Remember the symbols by their shapes:</p>
            <ul>
                <li><strong>Oval</strong> = Terminal (like an egg - start/end of life)</li>
                <li><strong>Rectangle</strong> = Process (like a box - contains work)</li>
                <li><strong>Diamond</strong> = Decision (like a fork in the road)</li>
                <li><strong>Parallelogram</strong> = Input/Output (like a sheet of paper)</li>
            </ul>
        </div>

        <!-- ==================== SECTION 3: FLOWCHART RULES ==================== -->
        <h3>1.2.1.3 Rules for Creating Flowcharts</h3>
        
        <ol>
            <li><strong>Top to Bottom, Left to Right:</strong> Flowcharts should generally flow from top to bottom or left to right</li>
            <li><strong>Consistent Symbols:</strong> Use the same symbols throughout</li>
            <li><strong>Avoid Crossing Lines:</strong> Try to avoid flow lines crossing each other</li>
            <li><strong>Clear Labels:</strong> Every symbol should have a clear, descriptive label</li>
            <li><strong>One Entry, One Exit:</strong> Each symbol should have one entry and one exit point (except Decision which has two exits)</li>
            <li><strong>Keep it Simple:</strong> Don't try to put too much detail in one flowchart</li>
            <li><strong>Use Connectors:</strong> When a flowchart is too large, use connectors</li>
            <li><strong>Start and End:</strong> Every flowchart must have a Start and End symbol</li>
        </ol>

        <!-- ==================== SECTION 4: BASIC FLOWCHART PATTERNS ==================== -->
        <h3>1.2.1.4 Basic Flowchart Patterns</h3>
        
        <h4>Pattern 1: Sequence</h4>
        <p>Steps are executed one after another in order:</p>
        <pre>
    [START]
       ↓
    [Step 1]
       ↓
    [Step 2]
       ↓
    [Step 3]
       ↓
     [END]</pre>
        
        <h4>Pattern 2: If-Then (Single Decision)</h4>
        <pre>
    [START]
       ↓
    [Step 1]
       ↓
      ⬦─────────⬦
     ╱ Condition  ╲
    ╱    is true?   ╲
    ╲              ╱
     ╲            ╱
      ⬦───Yes───⬦
           ↓
       [Step 2]
           ↓
         [END]</pre>
        
        <h4>Pattern 3: If-Then-Else (Two-Way Decision)</h4>
        <pre>
    [START]
       ↓
    [Step 1]
       ↓
      ⬦─────────⬦
     ╱ Condition  ╲
    ╱    is true?   ╲
    ╲              ╱
     ╲            ╱
      ⬦───Yes───⬦   No
           ↓         ↓
       [Step 2]   [Step 3]
           ↓         ↓
           └────┬────┘
                ↓
              [END]</pre>
        
        <h4>Pattern 4: Loop (Repetition)</h4>
        <pre>
    [START]
       ↓
    [Initialize]
       ↓
      ⬦─────────⬦
     ║ Condition  ║
     ║    true?   ║
     ║            ║
     ║            ║
     ║    Yes     ║ No
     ║            ║
     ║            ║
     ║    ↓       ║
     ║ [Process]  ║
     ║    ↓       ║
     ║ [Update]   ║
     ║    ↓       ║
     ╚════════════╝
                ↓
              [END]</pre>

        <!-- ==================== SECTION 5: EXAMPLE FLOWCHARTS ==================== -->
        <h3>1.2.1.5 Example Flowcharts</h3>
        
        <h4>Example 1: Sum of Two Numbers</h4>
        <pre>
        ┌─────────────┐
        │    START    │
        └──────┬──────┘
               ↓
        ┌─────────────┐
        │ Input num1, │
        │   num2      │
        └──────┬──────┘
               ↓
        ┌─────────────┐
        │ sum = num1  │
        │    + num2   │
        └──────┬──────┘
               ↓
        ┌─────────────┐
        │ Display sum │
        └──────┬──────┘
               ↓
        ┌─────────────┐
        │     END     │
        └─────────────┘</pre>
        
        <h4>Example 2: Check if Number is Even or Odd</h4>
        <pre>
        ┌─────────────┐
        │    START    │
        └──────┬──────┘
               ↓
        ┌─────────────┐
        │  Input num  │
        └──────┬──────┘
               ↓
        ┌─────────────┐
        │  remainder  │
        │ = num % 2   │
        └──────┬──────┘
               ↓
           ⬦─────────⬦
          ╱  remainder ╲
         ╱    = 0?      ╲
        ╲              ╱
         ╲            ╱
          ⬦───Yes───⬦
               ↓
        ┌─────────────┐      ┌─────────────┐
        │ Display     │      │ Display     │
        │ "Even"      │      │ "Odd"       │
        └──────┬──────┘      └──────┬──────┘
               └──────────┬──────────┘
                         ↓
                  ┌─────────────┐
                  │     END     │
                  └─────────────┘</pre>
        
        <h4>Example 3: Find Largest of Three Numbers</h4>
        <pre>
        ┌─────────────┐
        │    START    │
        └──────┬──────┘
               ↓
        ┌─────────────┐
        │ Input a,b,c │
        └──────┬──────┘
               ↓
           ⬦─────────⬦
          ║  a > b?   ║
          ║           ║
          ║   Yes     ║ No
          ║           ║
          ║    ↓      ║    ↓
          ║ max = a   ║ max = b
          ║    ↓      ║    ↓
          ╚═══════════╝    │
               └─────┬─────┘
                     ↓
                 ⬦─────────⬦
                ║  max > c? ║
                ║           ║
                ║   Yes     ║ No
                ║           ║
                ║    ↓      ║    ↓
                ║ (no change)║ max = c
                ║    ↓      ║    ↓
                ╚═══════════╝    │
                     └─────┬─────┘
                           ↓
                    ┌─────────────┐
                    │ Display max │
                    └──────┬──────┘
                           ↓
                    ┌─────────────┐
                    │     END     │
                    └─────────────┘</pre>
        
        <h4>Example 4: Calculate Sum of First N Numbers (1 to N)</h4>
        <pre>
        ┌─────────────┐
        │    START    │
        └──────┬──────┘
               ↓
        ┌─────────────┐
        │   Input N   │
        └──────┬──────┘
               ↓
        ┌─────────────┐
        │  sum = 0    │
        │  i = 1      │
        └──────┬──────┘
               ↓
              ⬦←─────────⬦
             ║  i <= N?   ║
            ║             ║
            ║    Yes      ║ No
            ║             ║
            ║    ↓        ║
            ║ sum=sum+i   ║
            ║    ↓        ║
            ║  i = i+1    ║
            ║    ↓        ║
            ╚═════════════╝
                   ↓
            ┌─────────────┐
            │ Display sum │
            └──────┬──────┘
                   ↓
            ┌─────────────┐
            │     END     │
            └─────────────┘</pre>
        
        <h4>Example 5: Simple Calculator (Menu-Driven)</h4>
        <pre>
        ┌─────────────┐
        │    START    │
        └──────┬──────┘
               ↓
        ┌─────────────┐
        │ Display Menu│
        │ 1. Add      │
        │ 2. Subtract │
        │ 3. Multiply │
        │ 4. Divide   │
        │ 5. Exit     │
        └──────┬──────┘
               ↓
        ┌─────────────┐
        │ Input choice│
        └──────┬──────┘
               ↓
              ⬦─────────⬦
             ║  choice   ║
            ║    = 5?     ║
            ║             ║
            ║    Yes      ║ No
            ║             ║
            ║    ↓        ║    ↓
            ║   [END]     ║ Input a,b
            ╚═════════════╝    ↓
                   ┌───────────┴───────────┐
                   ↓                       ↓
              ⬦───choice───⬦          ⬦───choice───⬦
             ║      = 1?     ║        ║      = 2?     ║
             ║               ║        ║               ║
             ║    Yes        ║ No     ║    Yes        ║ No
             ║               ║        ║               ║
             ║    ↓          ║ ↓      ║    ↓          ║ ↓
             ║ result=a+b    ║ ...    ║ result=a-b    ║ ...
             ║    ↓          ║        ║    ↓          ║
             ╚═══════════════╝        ╚═══════════════╝
                   ↓                       ↓
                   └───────────┬───────────┘
                               ↓
                        ┌─────────────┐
                        │ Display     │
                        │ result      │
                        └──────┬──────┘
                               ↓
                               └─────────┐
                                         ↓
                                    (back to menu)</pre>

        <!-- ==================== SECTION 6: CONVERTING FLOWCHART TO C++ CODE ==================== -->
        <h3>1.2.1.6 Converting Flowchart to C++ Code</h3>
        
        <p>Once you have a flowchart, converting it to code is straightforward. Each symbol translates to specific C++ constructs:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Flowchart Symbol</th>
                <th style="padding: 10px;">C++ Code Equivalent</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Terminal (Start/End)</td>
                        <td style="padding: 10px; border: 1px solid #ddd;"><code>int main() { ... return 0; }</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Input/Output (Parallelogram)</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>cin >></code> for input, <code>cout <<</code> for output</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Process (Rectangle)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Assignment statements: <code>sum = a + b;</code>, <code>count++;</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Decision (Diamond)</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>if</code>, <code>if-else</code>, <code>switch</code> statements</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Loop (backward flow)</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>for</code>, <code>while</code>, <code>do-while</code> loops</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Predefined Process</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Function calls: <code>functionName();</code></td>
            </tr>
        </table>
        
        <h4>Example: Converting Even/Odd Flowchart to Code</h4>
        
        <p><strong>Flowchart (from earlier example):</strong></p>
        <pre>
        [START]
           ↓
    [Input number]
           ↓
    [remainder = num % 2]
           ↓
       ⬦─────────⬦
      ╱ remainder ╲
     ╱    = 0?     ╲
    ╲              ╱
     ╲            ╱
      ⬦───Yes───⬦
           ↓
    [Display "Even"] [Display "Odd"]
           ↓              ↓
           └──────┬───────┘
                  ↓
                [END]</pre>
        
        <p><strong>C++ Code:</strong></p>
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int num, remainder;
    
    // Input
    cout &lt;&lt; "Enter a number: ";
    cin >> num;
    
    // Process
    remainder = num % 2;
    
    // Decision
    if (remainder == 0) {
        cout &lt;&lt; "Even" &lt;&lt; endl;
    } else {
        cout &lt;&lt; "Odd" &lt;&lt; endl;
    }
    
    return 0;
}</pre>

        <!-- ==================== SECTION 7: ADVANTAGES AND DISADVANTAGES ==================== -->
        <h3>1.2.1.7 Advantages and Disadvantages of Flowcharts</h3>
        
        <h4>Advantages:</h4>
        <ul>
            <li><strong>Visual Communication:</strong> Easy to understand and explain to others</li>
            <li><strong>Logic Clarity:</strong> Shows the flow of control clearly</li>
            <li><strong>Error Detection:</strong> Helps identify logical errors before coding</li>
            <li><strong>Documentation:</strong> Serves as program documentation</li>
            <li><strong>Communication:</strong> Helps communicate with non-programmers</li>
            <li><strong>Planning:</strong> Essential for complex programs</li>
            <li><strong>Debugging:</strong> Helps trace problems in logic</li>
            <li><strong>Standardization:</strong> Universal symbols are recognized worldwide</li>
        </ul>
        
        <h4>Disadvantages:</h4>
        <ul>
            <li><strong>Complexity:</strong> Large programs become messy and hard to follow</li>
            <li><strong>Time-Consuming:</strong> Drawing takes time, especially for complex logic</li>
            <li><strong>Modification:</strong> Hard to modify once drawn</li>
            <li><strong>No Standardization:</strong> Different organizations may use different symbols</li>
            <li><strong>Not Suitable for Detailed Logic:</strong> Can't show every minute detail</li>
            <li><strong>Space-Consuming:</strong> Large flowcharts take up a lot of space</li>
            <li><strong>Version Control:</strong> Hard to track changes</li>
        </ul>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Best Practice:</strong> Use flowcharts for planning the overall logic of your program, but don't try to flowchart every single line of code. Use them at the beginning of the design phase, then switch to pseudocode or actual code.</p>
        </div>

        <!-- ==================== SECTION 8: COMMON FLOWCHART MISTAKES ==================== -->
        <h3>1.2.1.8 Common Flowchart Mistakes to Avoid</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Mistake</th>
                <th style="padding: 10px;">Example</th>
                <th style="padding: 10px;">Correct Approach</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Missing Start/End</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Flowchart without START or END</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Always include both START and END symbols</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Inconsistent Symbols</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Using rectangles for decisions</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Use diamonds for decisions, rectangles for processes</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Missing Labels</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Decision diamond without condition</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Always label all symbols clearly</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Missing Decision Branches</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Diamond with only one exit arrow</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Always show both Yes and No paths</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Crossing Flow Lines</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Lines crossing each other</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Reorganize to avoid crossing, use connectors</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Too Much Detail</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Flowcharting every line of code</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Keep it at the algorithm level, not code level</td>
            </tr>
        </table>

        <!-- ==================== SECTION 9: FLOWCHART EXERCISES ==================== -->
        <h3>1.2.1.9 Practice Exercises</h3>
        
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Flowchart Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Draw a flowchart to find the largest of three numbers (different from the example).</p>
            
            <p><strong>Exercise 2:</strong> Create a flowchart for a program that determines whether a number is positive, negative, or zero.</p>
            
            <p><strong>Exercise 3:</strong> Design a flowchart to calculate the factorial of a number N (factorial = 1 × 2 × 3 × ... × N).</p>
            
            <p><strong>Exercise 4:</strong> Create a flowchart for a simple calculator that performs addition, subtraction, multiplication, and division based on user choice.</p>
            
            <p><strong>Exercise 5:</strong> Draw a flowchart to print all even numbers from 1 to 100.</p>
            
            <p><strong>Exercise 6:</strong> Design a flowchart to check if a number is prime or not.</p>
            
            <p><strong>Exercise 7:</strong> Create a flowchart for a program that asks the user for 5 numbers and displays their average.</p>
            
            <p><strong>Exercise 8:</strong> Convert this algorithm into a flowchart:</p>
            <pre>
Step 1: Start
Step 2: Input price and quantity
Step 3: total = price × quantity
Step 4: If total > 100 then
Step 5:     discount = total × 0.1
Step 6:     total = total - discount
Step 7: End if
Step 8: Display total
Step 9: Stop</pre>
            
            <p><strong>Exercise 9:</strong> Identify and fix the errors in this flowchart (text representation):</p>
            <pre>
        [START]
           ↓
    [Input a, b]
           ↓
    [c = a + b]
           ↓
       ⬦─────────⬦
      ╱  c > 10   ╲
     ╱             ╲
    ╲              ╱
     ╲            ╱
      ⬦───Yes───⬦
           ↓
    [Display "Large"]</pre>
            <p>(Hint: What's missing? Where's the END? What about when c ≤ 10?)</p>
            
            <p><strong>Exercise 10:</strong> Create a flowchart for a program that asks the user for their age and displays:</p>
            <ul>
                <li>"Child" if age < 13</li>
                <li>"Teen" if age between 13 and 19</li>
                <li>"Adult" if age between 20 and 64</li>
                <li>"Senior" if age ≥ 65</li>
            </ul>
        </div>

        <!-- ==================== SECTION 10: FLOWCHART TO CODE CONVERSION EXERCISES ==================== -->
        <h3>1.2.1.10 Flowchart to Code Conversion</h3>
        
        <p>For each flowchart you created in the exercises above, write the corresponding C++ code. Here's a template to help you:</p>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Declare variables
    
    // Input (parallelogram in flowchart)
    
    // Process (rectangle in flowchart)
    
    // Decisions (diamonds in flowchart) - use if/else
    
    // Loops (backward arrows in flowchart) - use for/while
    
    // Output (parallelogram in flowchart)
    
    return 0;
}</pre>
        
        <h4>Example: Converting Exercise 8 to Code</h4>
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    double price, quantity, total, discount;
    
    // Input
    cout &lt;&lt; "Enter price: ";
    cin >> price;
    cout &lt;&lt; "Enter quantity: ";
    cin >> quantity;
    
    // Process
    total = price * quantity;
    
    // Decision
    if (total > 100) {
        discount = total * 0.1;
        total = total - discount;
        cout &lt;&lt; "Discount applied: $" &lt;&lt; discount &lt;&lt; endl;
    }
    
    // Output
    cout &lt;&lt; "Total: $" &lt;&lt; total &lt;&lt; endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 11: ADVANCED FLOWCHART CONCEPTS ==================== -->
        <h3>1.2.1.11 Advanced Flowchart Concepts</h3>
        
        <h4>Multiple Decision Points</h4>
        <p>Sometimes you need to make multiple decisions. Here's a flowchart for a grade calculator:</p>
        <pre>
        [START]
           ↓
    [Input score]
           ↓
       ⬦─────────⬦
      ║ score >= 90║
      ║            ║
      ║    Yes     ║ No
      ║            ║
      ║    ↓       ║    ↓
      ║ grade='A'  ║⬦─────────⬦
      ║    ↓       ║║ score >= 80║
      ╚════════════╝║            ║
           │        ║    Yes     ║ No
           │        ║            ║
           │        ║    ↓       ║    ↓
           │        ║ grade='B'  ║⬦─────────⬦
           │        ║    ↓       ║║ score >= 70║
           │        ╚════════════╝║            ║
           │             │        ║    Yes     ║ No
           │             │        ║            ║
           │             │        ║    ↓       ║    ↓
           │             │        ║ grade='C'  ║ grade='F'
           │             │        ║    ↓       ║    ↓
           │             │        ╚════════════╝    │
           │             │              │           │
           └───────┬─────┴──────┬───────┴─────┬─────┘
                   ↓             ↓             ↓
              [Display grade]    │             │
                   └─────────────┴─────────────┘
                                     ↓
                                   [END]</pre>
        
        <h4>Using Connectors</h4>
        <p>For complex flowcharts that span multiple pages, use connectors:</p>
        <pre>
    [START]
       ↓
    [Process A]
       ↓
       ○ A
       (go to next page)

    (from previous page)
       ○ A
       ↓
    [Process B]
       ↓
     [END]</pre>

        <!-- ==================== SECTION 12: FLOWCHART SOFTWARE ==================== -->
        <h3>1.2.1.12 Flowchart Software Tools</h3>
        
        <p>While you can draw flowcharts on paper, there are many software tools that make it easier:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Tool</th>
                <th style="padding: 10px;">Platform</th>
                <th style="padding: 10px;">Features</th>
                <th style="padding: 10px;">Cost</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>draw.io</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Web-based</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Free, integrates with Google Drive</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Free</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>LucidChart</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Web-based</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Professional, collaborative</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Free tier available</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Microsoft Visio</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Windows</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Industry standard, many templates</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Paid</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Creately</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Web-based</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Easy to use, templates</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Free tier available</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>yEd Graph Editor</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Desktop</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Free, powerful</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Free</td>
            </tr>
        </table>

        <!-- ==================== SECTION 13: SUMMARY ==================== -->
        <h3>1.2.1.13 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li><strong>Flowchart</strong> is a visual representation of an algorithm using standard symbols</li>
                <li><strong>Main symbols:</strong> Oval (start/end), Rectangle (process), Diamond (decision), Parallelogram (input/output)</li>
                <li><strong>Rules:</strong> Flow top to bottom, use consistent symbols, label everything clearly</li>
                <li><strong>Patterns:</strong> Sequence, if-then, if-then-else, loops</li>
                <li><strong>Advantages:</strong> Visual, easy to understand, good for communication</li>
                <li><strong>Disadvantages:</strong> Time-consuming, messy for large programs, hard to modify</li>
                <li><strong>Conversion to code:</strong> Each symbol maps to specific C++ constructs</li>
                <li><strong>Best used for:</strong> Planning overall logic, not every line of code</li>
                <li><strong>Tools:</strong> draw.io, LucidChart, Visio can help create professional flowcharts</li>
            </ul>
        </div>

        <!-- ==================== SECTION 14: KEY TERMS ==================== -->
        <h3>1.2.1.14 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Flowchart</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Visual algorithm representation</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Terminal</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Start/End symbol (oval)</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Process</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Operation symbol (rectangle)</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Decision</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Choice symbol (diamond)</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">I/O</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Input/Output (parallelogram)</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Flow Line</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Arrow showing direction</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Connector</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Links flowchart parts</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Sequence</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Steps in order</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Branching</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Decision paths</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Looping</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Repetition in flowchart</p>
            </div>
        </div>
        
        <!-- ==================== PREVIEW OF NEXT SECTIONS ==================== -->
        <div style="background: linear-gradient(135deg, #667eea20, #764ba220); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">📖 Coming Up Next</h4>
            <p>In the next section, we will study another problem-solving tool:</p>
            <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-top: 15px;">
                <span style="background: #764ba2; color: white; padding: 8px 20px; border-radius: 30px;">1.2.2 Pseudocode</span>
            </div>
            <p style="margin-top: 15px;">Pseudocode is an informal way to describe algorithms using plain language mixed with programming concepts.</p>
        </div>
    `,
    navigation: {
        next: "ch1-4",
        prev: "ch1-2",
        nextTitle: "1.2.2 Pseudocode",
        prevTitle: "1.2 Problem Solving Techniques"
    }
};