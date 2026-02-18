// ===============================
// Computer Programming - Chapter 1.4
// Pseudocode
// ===============================

window.currentSubsectionData = {
    title: "1.2.2 Pseudocode",
    content: `
        <h2>1.2.2 Pseudocode</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand what pseudocode is and why it is used</li>
                <li>Learn the conventions and rules for writing pseudocode</li>
                <li>Study common pseudocode keywords and structures</li>
                <li>Learn how to write pseudocode for various programming constructs</li>
                <li>Study multiple examples of pseudocode for common problems</li>
                <li>Learn how to convert pseudocode to C++ code</li>
                <li>Understand the advantages of pseudocode over flowcharts</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: INTRODUCTION TO PSEUDOCODE ==================== -->
        <h3>1.2.2.1 What is Pseudocode?</h3>
        
        <p><strong>Pseudocode</strong> is an informal, human-readable way of describing an algorithm. It uses plain language mixed with programming concepts, without worrying about the strict syntax rules of a specific programming language.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> Pseudocode = "Fake" code that bridges the gap between human thinking and actual programming language syntax.</p>
        </div>
        
        <h4>The Word "Pseudocode":</h4>
        <ul>
            <li><strong>Pseudo</strong> = fake, imaginary, or simulated</li>
            <li><strong>Code</strong> = programming instructions</li>
            <li>So pseudocode literally means "fake code" - it looks like code but isn't actual code</li>
        </ul>
        
        <h4>Why Use Pseudocode?</h4>
        <ul>
            <li><strong>Language Independent:</strong> Can be implemented in any programming language</li>
            <li><strong>No Syntax Rules:</strong> Focus on logic, not semicolons or brackets</li>
            <li><strong>Quick to Write:</strong> Faster than flowcharts</li>
            <li><strong>Easy to Modify:</strong> Just edit text</li>
            <li><strong>Good Documentation:</strong> Serves as program documentation</li>
            <li><strong>Communication:</strong> Easy to share with other programmers</li>
            <li><strong>Planning:</strong> Perfect for designing algorithms before coding</li>
        </ul>
        
        <h4>Real-World Analogy:</h4>
        <p>Pseudocode is like a recipe written in your own words. Before a chef writes a formal recipe with exact measurements and techniques, they might jot down the steps in plain English. That's exactly what pseudocode does for programmers.</p>

        <!-- ==================== SECTION 2: PSEUDOCODE CONVENTIONS ==================== -->
        <h3>1.2.2.2 Pseudocode Conventions</h3>
        
        <p>While there's no strict standard for pseudocode, most programmers follow these conventions:</p>
        
        <h4>General Guidelines:</h4>
        <ul>
            <li><strong>Use Plain English:</strong> Write in simple, clear language</li>
            <li><strong>Be Precise:</strong> Each step should be unambiguous</li>
            <li><strong>Show Logic Flow:</strong> Clearly show the sequence of operations</li>
            <li><strong>Use Standard Structures:</strong> Use common programming constructs</li>
            <li><strong>Indent for Clarity:</strong> Show hierarchy with indentation</li>
            <li><strong>Begin with START, End with END:</strong> Mark the beginning and end</li>
            <li><strong>Use Descriptive Names:</strong> Variable names should be meaningful</li>
        </ul>
        
        <h4>Common Pseudocode Keywords:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Category</th>
                <th style="padding: 10px;">Keywords</th>
                <th style="padding: 10px;">Purpose</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Start/End</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">BEGIN, END, START, STOP</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Mark program boundaries</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Input/Output</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">INPUT, READ, GET, OUTPUT, PRINT, DISPLAY</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Get data from user / Show results</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Assignment</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">SET, LET, =, ←</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Assign values to variables</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Decision</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">IF, THEN, ELSE, END IF</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Conditional execution</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Loops</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">WHILE, FOR, REPEAT, DO, END WHILE, END FOR</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Repetition/iteration</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Functions</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">FUNCTION, PROCEDURE, CALL, RETURN</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Modular programming</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Comments</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">//, #, /* */</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Add explanations</td>
            </tr>
        </table>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Important:</strong> The goal of pseudocode is communication, not standardization. Use whatever style is clearest for your audience. The most important thing is that it's easy to understand!</p>
        </div>

        <!-- ==================== SECTION 3: BASIC PSEUDOCODE STRUCTURES ==================== -->
        <h3>1.2.2.3 Basic Pseudocode Structures</h3>
        
        <h4>1. Sequence</h4>
        <p>Steps are executed one after another:</p>
        <pre>
BEGIN
    INPUT num1
    INPUT num2
    SET sum = num1 + num2
    OUTPUT sum
END</pre>
        
        <h4>2. If-Then (Single Decision)</h4>
        <pre>
BEGIN
    INPUT num
    IF num > 0 THEN
        OUTPUT "Positive"
    END IF
END</pre>
        
        <h4>3. If-Then-Else (Two-Way Decision)</h4>
        <pre>
BEGIN
    INPUT num
    IF num % 2 == 0 THEN
        OUTPUT "Even"
    ELSE
        OUTPUT "Odd"
    END IF
END</pre>
        
        <h4>4. Multiple Decisions (If-Else If)</h4>
        <pre>
BEGIN
    INPUT score
    
    IF score >= 90 THEN
        grade = "A"
    ELSE IF score >= 80 THEN
        grade = "B"
    ELSE IF score >= 70 THEN
        grade = "C"
    ELSE IF score >= 60 THEN
        grade = "D"
    ELSE
        grade = "F"
    END IF
    
    OUTPUT grade
END</pre>
        
        <h4>5. While Loop (Condition-Controlled)</h4>
        <pre>
BEGIN
    SET counter = 1
    SET sum = 0
    
    WHILE counter <= 10 DO
        sum = sum + counter
        counter = counter + 1
    END WHILE
    
    OUTPUT sum
END</pre>
        
        <h4>6. For Loop (Count-Controlled)</h4>
        <pre>
BEGIN
    SET sum = 0
    
    FOR i = 1 TO 10 DO
        sum = sum + i
    END FOR
    
    OUTPUT sum
END</pre>
        
        <h4>7. Repeat-Until Loop</h4>
        <pre>
BEGIN
    SET counter = 1
    
    REPEAT
        OUTPUT counter
        counter = counter + 1
    UNTIL counter > 5
END</pre>
        
        <h4>8. Functions/Procedures</h4>
        <pre>
FUNCTION calculate_sum(a, b)
    SET result = a + b
    RETURN result
END FUNCTION

BEGIN
    INPUT x, y
    SET total = calculate_sum(x, y)
    OUTPUT total
END</pre>

        <!-- ==================== SECTION 4: EXAMPLE PSEUDOCODE PROGRAMS ==================== -->
        <h3>1.2.2.4 Example Pseudocode Programs</h3>
        
        <h4>Example 1: Find Largest of Three Numbers</h4>
        <pre>
BEGIN
    INPUT a, b, c
    
    SET max = a
    
    IF b > max THEN
        max = b
    END IF
    
    IF c > max THEN
        max = c
    END IF
    
    OUTPUT "Largest number is: ", max
END</pre>
        
        <h4>Example 2: Calculate Factorial</h4>
        <pre>
BEGIN
    INPUT n
    
    IF n < 0 THEN
        OUTPUT "Factorial not defined for negative numbers"
    ELSE
        SET factorial = 1
        SET i = 1
        
        WHILE i <= n DO
            factorial = factorial * i
            i = i + 1
        END WHILE
        
        OUTPUT "Factorial of ", n, " is ", factorial
    END IF
END</pre>
        
        <h4>Example 3: Check if Number is Prime</h4>
        <pre>
BEGIN
    INPUT n
    
    IF n <= 1 THEN
        OUTPUT n, " is not prime"
    ELSE
        SET isPrime = true
        SET i = 2
        
        WHILE i <= n/2 AND isPrime DO
            IF n % i == 0 THEN
                isPrime = false
            END IF
            i = i + 1
        END WHILE
        
        IF isPrime THEN
            OUTPUT n, " is prime"
        ELSE
            OUTPUT n, " is not prime"
        END IF
    END IF
END</pre>
        
        <h4>Example 4: Calculate Average of N Numbers</h4>
        <pre>
BEGIN
    INPUT n
    
    SET sum = 0
    SET count = 1
    
    WHILE count <= n DO
        INPUT number
        sum = sum + number
        count = count + 1
    END WHILE
    
    SET average = sum / n
    OUTPUT "Average = ", average
END</pre>
        
        <h4>Example 5: Menu-Driven Calculator</h4>
        <pre>
BEGIN
    DO
        OUTPUT "1. Add"
        OUTPUT "2. Subtract"
        OUTPUT "3. Multiply"
        OUTPUT "4. Divide"
        OUTPUT "5. Exit"
        INPUT choice
        
        IF choice >= 1 AND choice <= 4 THEN
            INPUT a, b
        END IF
        
        IF choice == 1 THEN
            result = a + b
            OUTPUT "Result: ", result
        ELSE IF choice == 2 THEN
            result = a - b
            OUTPUT "Result: ", result
        ELSE IF choice == 3 THEN
            result = a * b
            OUTPUT "Result: ", result
        ELSE IF choice == 4 THEN
            IF b != 0 THEN
                result = a / b
                OUTPUT "Result: ", result
            ELSE
                OUTPUT "Error: Division by zero"
            END IF
        ELSE IF choice == 5 THEN
            OUTPUT "Goodbye!"
        ELSE
            OUTPUT "Invalid choice"
        END IF
        
    UNTIL choice == 5
END</pre>
        
        <h4>Example 6: Fibonacci Series</h4>
        <pre>
BEGIN
    INPUT n
    
    SET first = 0
    SET second = 1
    
    OUTPUT first, second
    
    FOR i = 3 TO n DO
        SET next = first + second
        OUTPUT next
        SET first = second
        SET second = next
    END FOR
END</pre>
        
        <h4>Example 7: Binary Search (Advanced)</h4>
        <pre>
BEGIN
    // Assume array is sorted
    INPUT array[], n, target
    
    SET left = 0
    SET right = n - 1
    SET found = false
    
    WHILE left <= right AND NOT found DO
        SET mid = (left + right) / 2
        
        IF array[mid] == target THEN
            found = true
            position = mid
        ELSE IF array[mid] < target THEN
            left = mid + 1
        ELSE
            right = mid - 1
        END IF
    END WHILE
    
    IF found THEN
        OUTPUT "Found at position: ", position
    ELSE
        OUTPUT "Not found"
    END IF
END</pre>

        <!-- ==================== SECTION 5: CONVERTING PSEUDOCODE TO C++ ==================== -->
        <h3>1.2.2.5 Converting Pseudocode to C++ Code</h3>
        
        <p>Converting pseudocode to actual C++ code is straightforward. Here's a mapping of pseudocode constructs to C++:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Pseudocode</th>
                <th style="padding: 10px;">C++ Code</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>INPUT x</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>cin >> x;</code></td>
            </tr>
            <tr>
        <td style="padding: 10px; border: 1px solid #ddd;"><code>OUTPUT x</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>cout << x;</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>SET x = 5</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int x = 5;</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>IF condition THEN</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>if (condition) {</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>ELSE</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>} else {</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>END IF</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>}</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>WHILE condition DO</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>while (condition) {</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>END WHILE</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>}</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>FOR i = 1 TO 10 DO</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>for (int i = 1; i <= 10; i++) {</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>END FOR</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>}</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>FUNCTION name(params)</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>returnType name(params) {</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>RETURN value</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>return value;</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>END FUNCTION</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>}</code></td>
            </tr>
        </table>
        
        <h4>Example: Converting Factorial Pseudocode to C++</h4>
        
        <p><strong>Pseudocode:</strong></p>
        <pre>
BEGIN
    INPUT n
    
    IF n < 0 THEN
        OUTPUT "Factorial not defined"
    ELSE
        SET factorial = 1
        SET i = 1
        
        WHILE i <= n DO
            factorial = factorial * i
            i = i + 1
        END WHILE
        
        OUTPUT "Factorial = ", factorial
    END IF
END</pre>
        
        <p><strong>C++ Code:</strong></p>
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int n;
    
    cout &lt;&lt; "Enter a number: ";
    cin >> n;
    
    if (n < 0) {
        cout &lt;&lt; "Factorial not defined for negative numbers" &lt;&lt; endl;
    } else {
        int factorial = 1;
        int i = 1;
        
        while (i <= n) {
            factorial = factorial * i;
            i = i + 1;
        }
        
        cout &lt;&lt; "Factorial = " &lt;&lt; factorial &lt;&lt; endl;
    }
    
    return 0;
}</pre>

        <!-- ==================== SECTION 6: PSEUDOCODE VS FLOWCHART ==================== -->
        <h3>1.2.2.6 Pseudocode vs Flowchart</h3>
        
        <p>Both pseudocode and flowcharts are used for algorithm design, but they have different strengths:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Aspect</th>
                <th style="padding: 10px;">Pseudocode</th>
                <th style="padding: 10px;">Flowchart</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Format</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Text-based</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Graphical/Visual</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Ease of Creation</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Quick and easy</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Time-consuming</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Ease of Modification</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Very easy (edit text)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Difficult (redraw)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Visual Appeal</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Plain text</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Visual and engaging</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Detail Level</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Can show detailed steps</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Better for high-level flow</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Learning Curve</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Very low</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Need to learn symbols</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Language Independence</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Excellent</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Excellent</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Complex Logic</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Handles complexity well</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Can become messy</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Best Used For</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Detailed algorithm design</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Overview and presentations</td>
            </tr>
        </table>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Best Practice:</strong> Many programmers use a combination: draw a high-level flowchart first to visualize the overall flow, then write detailed pseudocode for each part before coding.</p>
        </div>

        <!-- ==================== SECTION 7: ADVANTAGES AND DISADVANTAGES ==================== -->
        <h3>1.2.2.7 Advantages and Disadvantages of Pseudocode</h3>
        
        <h4>Advantages:</h4>
        <ul>
            <li><strong>Language Independent:</strong> Can be implemented in any programming language</li>
            <li><strong>No Syntax Rules:</strong> Focus on logic, not syntax errors</li>
            <li><strong>Quick to Write:</strong> Much faster than flowcharts or actual code</li>
            <li><strong>Easy to Modify:</strong> Simple text editing</li>
            <li><strong>Good Documentation:</strong> Serves as program documentation</li>
            <li><strong>Easy to Read:</strong> Uses natural language</li>
            <li><strong>Handles Complexity:</strong> Can describe complex algorithms clearly</li>
            <li><strong>Transition to Code:</strong> Easy to convert to actual code</li>
            <li><strong>Collaboration:</strong> Easy to share with team members</li>
        </ul>
        
        <h4>Disadvantages:</h4>
        <ul>
            <li><strong>No Standardization:</strong> Different people use different styles</li>
            <li><strong>Not Visual:</strong> Lacks the visual appeal of flowcharts</li>
            <li><strong>Can Be Ambiguous:</strong> Without standards, meaning can be unclear</li>
            <li><strong>Too Flexible:</strong> Can be written at different levels of detail</li>
            <li><strong>No Execution:</strong> Can't be tested or executed</li>
            <li><strong>May Miss Details:</strong> Easy to overlook implementation details</li>
        </ul>

        <!-- ==================== SECTION 8: COMMON PSEUDOCODE MISTAKES ==================== -->
        <h3>1.2.2.8 Common Pseudocode Mistakes to Avoid</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Mistake</th>
                <th style="padding: 10px;">Example</th>
                <th style="padding: 10px;">Correct Approach</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Too Much Detail</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Writing actual C++ syntax</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Keep it at algorithm level</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Too Little Detail</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">"Process the data"</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Be specific about steps</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>No Structure</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">No indentation, no END markers</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Use proper indentation and structure</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Ambiguous Conditions</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">"IF number is big"</td>
                <td style="padding: 10px; border: 1px solid #ddd;">"IF number > 100"</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Missing Initialization</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Using variables without SET</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Always initialize variables</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Inconsistent Keywords</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Mixing different styles</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Be consistent throughout</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>No Comments</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Complex logic with no explanation</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Add comments for clarity</td>
            </tr>
        </table>
        
        <div class="warning-box" style="background: #ffe8e8; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #f5576c;">
            <p><strong>⚠️ Common Beginner Mistake:</strong> Writing pseudocode that is actually a specific programming language (like writing C++ code and calling it pseudocode). Remember: pseudocode should be language-independent!</p>
        </div>

        <!-- ==================== SECTION 9: PSEUDOCODE EXERCISES ==================== -->
        <h3>1.2.2.9 Practice Exercises</h3>
        
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Pseudocode Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Write pseudocode to find the largest of three numbers (try a different approach than the example).</p>
            
            <p><strong>Exercise 2:</strong> Create pseudocode for a program that determines whether a year is a leap year.</p>
            <p><em>Hint: A year is a leap year if it is divisible by 4, but not by 100, unless it is also divisible by 400.</em></p>
            
            <p><strong>Exercise 3:</strong> Write pseudocode to calculate the sum of all even numbers from 1 to N.</p>
            
            <p><strong>Exercise 4:</strong> Create pseudocode for a program that asks the user for 10 numbers and displays the largest and smallest.</p>
            
            <p><strong>Exercise 5:</strong> Write pseudocode for a simple guessing game where the computer picks a random number between 1 and 100, and the user tries to guess it. Give hints like "Too high" or "Too low".</p>
            
            <p><strong>Exercise 6:</strong> Create pseudocode to calculate the nth Fibonacci number.</p>
            
            <p><strong>Exercise 7:</strong> Write pseudocode for a program that converts a decimal number to binary.</p>
            
            <p><strong>Exercise 8:</strong> Create pseudocode for a program that checks if a string is a palindrome (reads the same forwards and backwards).</p>
            
            <p><strong>Exercise 9:</strong> Write pseudocode for a simple ATM machine that allows users to check balance, deposit money, and withdraw money (with sufficient balance check).</p>
            
            <p><strong>Exercise 10:</strong> Convert this flowchart (from the previous section) into pseudocode:</p>
            <pre>
        [START]
           ↓
    [Input a,b,c]
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
                [Display max]
                       ↓
                     [END]</pre>
        </div>

        <!-- ==================== SECTION 10: PSEUDOCODE TO CODE CONVERSION EXERCISES ==================== -->
        <h3>1.2.2.10 Pseudocode to Code Conversion</h3>
        
        <p>For each pseudocode you wrote in the exercises above, convert it to C++ code. Here are some examples to help you:</p>
        
        <h4>Example: Converting Exercise 1 to C++</h4>
        <p><strong>Pseudocode (alternative approach):</strong></p>
        <pre>
BEGIN
    INPUT a, b, c
    
    IF a > b AND a > c THEN
        max = a
    ELSE IF b > a AND b > c THEN
        max = b
    ELSE
        max = c
    END IF
    
    OUTPUT max
END</pre>
        
        <p><strong>C++ Code:</strong></p>
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int a, b, c, max;
    
    cout &lt;&lt; "Enter three numbers: ";
    cin >> a >> b >> c;
    
    if (a > b && a > c) {
        max = a;
    } else if (b > a && b > c) {
        max = b;
    } else {
        max = c;
    }
    
    cout &lt;&lt; "Largest number is: " &lt;&lt; max &lt;&lt; endl;
    
    return 0;
}</pre>
        
        <h4>Example: Converting Exercise 2 (Leap Year) to C++</h4>
        <p><strong>Pseudocode:</strong></p>
        <pre>
BEGIN
    INPUT year
    
    IF (year % 400 == 0) THEN
        isLeap = true
    ELSE IF (year % 100 == 0) THEN
        isLeap = false
    ELSE IF (year % 4 == 0) THEN
        isLeap = true
    ELSE
        isLeap = false
    END IF
    
    IF isLeap THEN
        OUTPUT year, " is a leap year"
    ELSE
        OUTPUT year, " is not a leap year"
    END IF
END</pre>
        
        <p><strong>C++ Code:</strong></p>
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int year;
    bool isLeap;
    
    cout &lt;&lt; "Enter a year: ";
    cin >> year;
    
    if (year % 400 == 0) {
        isLeap = true;
    } else if (year % 100 == 0) {
        isLeap = false;
    } else if (year % 4 == 0) {
        isLeap = true;
    } else {
        isLeap = false;
    }
    
    if (isLeap) {
        cout &lt;&lt; year &lt;&lt; " is a leap year" &lt;&lt; endl;
    } else {
        cout &lt;&lt; year &lt;&lt; " is not a leap year" &lt;&lt; endl;
    }
    
    return 0;
}</pre>

        <!-- ==================== SECTION 11: REAL-WORLD PSEUDOCODE EXAMPLES ==================== -->
        <h3>1.2.2.11 Real-World Pseudocode Examples</h3>
        
        <h4>Example 1: Making Coffee</h4>
        <pre>
BEGIN make_coffee
    INPUT coffee_type, sugar_amount, milk_amount
    
    // Check if we have ingredients
    IF no_coffee_beans THEN
        OUTPUT "Error: No coffee beans"
        RETURN
    END IF
    
    // Grind beans
    grind_beans(coffee_type)
    
    // Brew coffee
    brew()
    
    // Add ingredients
    IF sugar_amount > 0 THEN
        add_sugar(sugar_amount)
    END IF
    
    IF milk_amount > 0 THEN
        add_milk(milk_amount)
    END IF
    
    OUTPUT "Coffee is ready!"
END</pre>
        
        <h4>Example 2: Online Shopping Checkout</h4>
        <pre>
BEGIN checkout
    INPUT cart_items, user_info
    
    // Calculate total
    SET total = 0
    FOR EACH item IN cart_items DO
        total = total + item.price * item.quantity
    END FOR
    
    // Apply discounts
    IF user_info.member AND total > 100 THEN
        discount = total * 0.1
        total = total - discount
        OUTPUT "Member discount applied: $", discount
    END IF
    
    // Calculate tax
    tax = total * tax_rate
    total = total + tax
    
    // Process payment
    REPEAT
        OUTPUT "Select payment method: 1.Credit 2.Debit 3.PayPal"
        INPUT payment_method
        
        IF payment_method valid THEN
            process_payment(total, payment_method)
            payment_success = true
        ELSE
            OUTPUT "Invalid payment method"
        END IF
    UNTIL payment_success OR user_cancels
    
    IF payment_success THEN
        OUTPUT "Order confirmed! Total: $", total
        send_confirmation_email(user_info.email, cart_items)
    ELSE
        OUTPUT "Order cancelled"
    END IF
END</pre>

        <!-- ==================== SECTION 12: SUMMARY ==================== -->
        <h3>1.2.2.12 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li><strong>Pseudocode</strong> is an informal, language-independent way to describe algorithms</li>
                <li><strong>Purpose:</strong> Focus on logic, not syntax - plan before coding</li>
                <li><strong>Keywords:</strong> Use standard terms like INPUT, OUTPUT, IF, ELSE, WHILE, FOR</li>
                <li><strong>Structures:</strong> Sequence, decision (if-then-else), loops (while, for), functions</li>
                <li><strong>Indentation:</strong> Use indentation to show structure and hierarchy</li>
                <li><strong>Clarity:</strong> Be specific and unambiguous in your descriptions</li>
                <li><strong>No Standard:</strong> There's no single "correct" way - consistency is key</li>
                <li><strong>Advantages:</strong> Fast, easy, language-independent, good documentation</li>
                <li><strong>vs Flowchart:</strong> Pseudocode is text-based, faster to write/modify; flowcharts are visual</li>
                <li><strong>Best Practice:</strong> Use pseudocode for detailed algorithm design before coding</li>
            </ul>
        </div>

        <!-- ==================== SECTION 13: KEY TERMS ==================== -->
        <h3>1.2.2.13 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Pseudocode</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Informal algorithm description</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Algorithm</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Step-by-step procedure</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Sequence</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Steps in order</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Selection</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Decision making (if-else)</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Iteration</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Repetition (loops)</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Indentation</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Shows code structure</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Keyword</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Reserved words in pseudocode</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Variable</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Named storage location</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Assignment</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Giving value to variable</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Condition</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Boolean expression</p>
            </div>
        </div>
        
        <!-- ==================== PREVIEW OF NEXT SECTIONS ==================== -->
        <div style="background: linear-gradient(135deg, #667eea20, #764ba220); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">📖 Coming Up Next</h4>
            <p>In the next section, we will study the third problem-solving tool:</p>
            <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-top: 15px;">
                <span style="background: #f093fb; color: white; padding: 8px 20px; border-radius: 30px;">1.2.3 Algorithms</span>
            </div>
            <p style="margin-top: 15px;">Algorithms are the foundation of computer science - step-by-step procedures for solving problems.</p>
        </div>
    `,
    navigation: {
        next: "ch1-5",
        prev: "ch1-3",
        nextTitle: "1.2.3 Algorithms",
        prevTitle: "1.2.1 Flowchart"
    }
};