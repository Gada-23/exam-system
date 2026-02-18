// ===============================
// Computer Programming - Chapter 1.2
// Problem Solving Techniques
// ===============================

window.currentSubsectionData = {
    title: "1.2 Problem Solving Techniques",
    content: `
        <h2>1.2 Problem Solving Techniques (2 hours)</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand what problem solving means in programming</li>
                <li>Learn the problem-solving cycle and its steps</li>
                <li>Understand different problem-solving approaches</li>
                <li>Learn about the three main tools for planning solutions</li>
                <li>Prepare for detailed study of flowchart, pseudocode, and algorithms</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: WHAT IS PROBLEM SOLVING? ==================== -->
        <h3>1.2.1 What is Problem Solving in Programming?</h3>
        
        <p><strong>Problem solving</strong> in programming is the process of identifying a problem, analyzing it, finding a solution, and then implementing that solution using a computer program. It is the most important skill for any programmer.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> Problem solving = The ability to transform a problem description into a working computer program.</p>
        </div>
        
        <h4>Why is Problem Solving Important?</h4>
        <ul>
            <li><strong>Core of Programming:</strong> Programming is essentially problem solving with code</li>
            <li><strong>Transferable Skill:</strong> Problem-solving skills apply to all areas of life</li>
            <li><strong>Efficiency:</strong> Good problem solving leads to efficient, elegant solutions</li>
            <li><strong>Debugging:</strong> Helps identify and fix errors in code</li>
            <li><strong>Innovation:</strong> Enables creating new solutions to new problems</li>
        </ul>
        
        <h4>Real-World Analogy:</h4>
        <p>Think of problem solving like planning a trip:</p>
        <ul>
            <li><strong>Problem:</strong> Need to travel from City A to City B</li>
            <li><strong>Analysis:</strong> Consider distance, budget, time, transportation options</li>
            <li><strong>Solution:</strong> Choose the best route and method of travel</li>
            <li><strong>Implementation:</strong> Actually take the trip</li>
            <li><strong>Evaluation:</strong> Did you arrive on time? Was it within budget?</li>
        </ul>

        <!-- ==================== SECTION 2: THE PROBLEM-SOLVING CYCLE ==================== -->
        <h3>1.2.2 The Problem-Solving Cycle</h3>
        
        <p>The problem-solving cycle is a systematic approach to solving problems. It consists of five main steps:</p>
        
        <div style="text-align: center; margin: 40px 0;">
            <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
                <div style="background: #667eea; color: white; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 24px;">1</div>
                <div style="background: #764ba2; color: white; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 24px;">2</div>
                <div style="background: #f093fb; color: white; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 24px;">3</div>
                <div style="background: #f5576c; color: white; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 24px;">4</div>
                <div style="background: #4facfe; color: white; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 24px;">5</div>
            </div>
            <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; margin-top: 10px;">
                <span style="width: 60px; text-align: center; font-weight: bold;">Understand</span>
                <span style="width: 60px; text-align: center; font-weight: bold;">Analyze</span>
                <span style="width: 60px; text-align: center; font-weight: bold;">Design</span>
                <span style="width: 60px; text-align: center; font-weight: bold;">Implement</span>
                <span style="width: 60px; text-align: center; font-weight: bold;">Evaluate</span>
            </div>
        </div>
        
        <h4>Step 1: Understand the Problem</h4>
        <p>Before you can solve a problem, you must understand it completely. Ask yourself:</p>
        <ul>
            <li><strong>What is the problem asking?</strong> Read it multiple times</li>
            <li><strong>What are the inputs?</strong> What data do you have?</li>
            <li><strong>What are the outputs?</strong> What should the solution produce?</li>
            <li><strong>What are the constraints?</strong> Any limitations or requirements?</li>
            <li><strong>What are the edge cases?</strong> Special situations to handle?</li>
        </ul>
        
        <div class="example-box" style="background: #f0f2f5; padding: 15px; border-radius: 10px; margin: 15px 0;">
            <p><strong>Example Problem:</strong> "Calculate the average of three test scores"</p>
            <ul>
                <li><strong>Inputs:</strong> Three numbers (test scores)</li>
                <li><strong>Output:</strong> One number (the average)</li>
                <li><strong>Constraints:</strong> Scores are between 0 and 100</li>
                <li><strong>Edge cases:</strong> What if scores are decimals? What if all scores are zero?</li>
            </ul>
        </div>
        
        <h4>Step 2: Analyze the Problem</h4>
        <p>Break down the problem into smaller, manageable parts:</p>
        <ul>
            <li>Identify the key components of the problem</li>
            <li>Determine relationships between components</li>
            <li>Identify any patterns or known solutions</li>
            <li>Consider different approaches to solve it</li>
        </ul>
        
        <h4>Step 3: Design the Solution</h4>
        <p>Create a plan for solving the problem. This is where you use:</p>
        <ul>
            <li><strong>Flowcharts:</strong> Visual representation of the solution</li>
            <li><strong>Pseudocode:</strong> Informal language describing steps</li>
            <li><strong>Algorithms:</strong> Step-by-step procedures</li>
        </ul>
        <p>We will study these three tools in detail in the following sections (1.2.1, 1.2.2, 1.2.3).</p>
        
        <h4>Step 4: Implement the Solution</h4>
        <p>Write the actual code in a programming language (C++ in our case):</p>
        <ul>
            <li>Translate your design into actual code</li>
            <li>Follow the syntax rules of the language</li>
            <li>Add comments to explain your code</li>
            <li>Test as you go</li>
        </ul>
        
        <h4>Step 5: Evaluate the Solution</h4>
        <p>Test and verify that your solution works correctly:</p>
        <ul>
            <li><strong>Test with normal inputs:</strong> Typical cases</li>
            <li><strong>Test with boundary inputs:</strong> Edge cases</li>
            <li><strong>Test with invalid inputs:</strong> Error handling</li>
            <li><strong>Check for efficiency:</strong> Can it be faster or use less memory?</li>
            <li><strong>Get feedback:</strong> Does it meet the requirements?</li>
        </ul>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Important:</strong> Most beginners want to start coding immediately (Step 4). But experienced programmers spend most of their time on Steps 1-3. Good planning saves hours of debugging later!</p>
        </div>

        <!-- ==================== SECTION 3: PROBLEM-SOLVING APPROACHES ==================== -->
        <h3>1.2.3 Problem-Solving Approaches</h3>
        
        <h4>1. Divide and Conquer</h4>
        <p>Break a complex problem into smaller, manageable sub-problems. Solve each sub-problem independently, then combine the solutions.</p>
        
        <div class="example-box" style="background: #f0f2f5; padding: 15px; border-radius: 10px; margin: 15px 0;">
            <p><strong>Example:</strong> Sorting 1000 numbers</p>
            <ul>
                <li>Divide: Split into two groups of 500 numbers</li>
                <li>Conquer: Sort each group separately</li>
                <li>Combine: Merge the two sorted groups</li>
            </ul>
        </div>
        
        <h4>2. Top-Down Approach</h4>
        <p>Start with the big picture (main problem) and gradually break it down into smaller, more detailed parts. Also called <strong>stepwise refinement</strong>.</p>
        
        <div class="example-box" style="background: #f0f2f5; padding: 15px; border-radius: 10px; margin: 15px 0;">
            <p><strong>Example:</strong> Calculate student grades</p>
            <ol>
                <li>Main: Calculate grades for all students</li>
                <li>Break down: For each student:
                    <ol style="list-style-type: lower-alpha;">
                        <li>Get student scores</li>
                        <li>Calculate average</li>
                        <li>Assign letter grade</li>
                        <li>Display result</li>
                    </ol>
                </li>
                <li>Further refine: Calculate average = sum of scores / number of scores</li>
            </ol>
        </div>
        
        <h4>3. Bottom-Up Approach</h4>
        <p>Start with small details and build up to the complete solution. First solve smaller sub-problems, then combine them to solve larger problems.</p>
        
        <div class="example-box" style="background: #f0f2f5; padding: 15px; border-radius: 10px; margin: 15px 0;">
            <p><strong>Example:</strong> Building a calculator application</p>
            <ol>
                <li>First create functions for basic operations: add(), subtract(), multiply(), divide()</li>
                <li>Then create a function to get user input</li>
                <li>Then create a function to display results</li>
                <li>Finally combine all to create the complete calculator</li>
            </ol>
        </div>
        
        <h4>4. Trial and Error</h4>
        <p>Try different solutions until you find one that works. Useful for small problems or when you're learning.</p>
        
        <div class="warning-box" style="background: #ffe8e8; padding: 15px; border-radius: 10px; margin: 15px 0; border-left: 5px solid #f5576c;">
            <p><strong>⚠️ Caution:</strong> Trial and error is not efficient for complex problems. Always plan first!</p>
        </div>
        
        <h4>5. Working Backwards</h4>
        <p>Start from the desired output and work backwards to determine what inputs and steps are needed.</p>
        
        <div class="example-box" style="background: #f0f2f5; padding: 15px; border-radius: 10px; margin: 15px 0;">
            <p><strong>Example:</strong> Find two numbers that multiply to 24 and add to 10</p>
            <ul>
                <li>Start from result: numbers multiply to 24</li>
                <li>Possible pairs: (1,24), (2,12), (3,8), (4,6)</li>
                <li>Check which pair adds to 10: (4,6) works</li>
            </ul>
        </div>
        
        <h4>6. Pattern Recognition</h4>
        <p>Identify patterns in the problem that match known solutions. This is why experienced programmers solve problems faster - they've seen similar patterns before.</p>
        
        <div class="example-box" style="background: #f0f2f5; padding: 15px; border-radius: 10px; margin: 15px 0;">
            <p><strong>Example:</strong> Calculating 1 + 2 + 3 + ... + n</p>
            <p>Pattern recognition: This is an arithmetic series. Instead of looping n times, use formula: n(n+1)/2</p>
        </div>

        <!-- ==================== SECTION 4: PROBLEM-SOLVING TOOLS ==================== -->
        <h3>1.2.4 Problem-Solving Tools</h3>
        
        <p>Before writing actual code, programmers use three main tools to plan their solutions:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Tool</th>
                <th style="padding: 10px;">What it is</th>
                <th style="padding: 10px;">When to Use</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Flowchart</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Visual representation using symbols</td>
                <td style="padding: 10px; border: 1px solid #ddd;">When you need to see the flow visually</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Decision trees, process flows</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Pseudocode</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Informal language describing steps</td>
                <td style="padding: 10px; border: 1px solid #ddd;">When you want to focus on logic, not syntax</td>
                <td style="padding: 10px; border: 1px solid #ddd;">IF score >= 60 THEN print "Pass"</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Algorithm</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Step-by-step procedure</td>
                <td style="padding: 10px; border: 1px solid #ddd;">When you need precise, sequential steps</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Step 1: Start, Step 2: Input numbers...</td>
            </tr>
        </table>
        
        <h4>Comparison of Tools:</h4>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Aspect</th>
                <th style="padding: 10px;">Flowchart</th>
                <th style="padding: 10px;">Pseudocode</th>
                <th style="padding: 10px;">Algorithm</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Representation</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Graphical</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Textual</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Textual/Structured</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Ease of Understanding</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Very easy (visual)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Easy (natural language)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Requires some practice</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Detail Level</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">High-level flow</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Medium detail</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Very detailed</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Best For</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Showing program flow</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Planning logic</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Precise implementation</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Complexity</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Messy for large programs</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Handles complexity well</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Handles complexity well</td>
            </tr>
        </table>

        <!-- ==================== SECTION 5: EXAMPLE PROBLEM ==================== -->
        <h3>1.2.5 Example Problem: Calculate Sum of Two Numbers</h3>
        
        <p>Let's see how we would approach this problem using the problem-solving cycle:</p>
        
        <h4>Problem: "Write a program to calculate the sum of two numbers entered by the user"</h4>
        
        <h4>Step 1: Understand the Problem</h4>
        <ul>
            <li><strong>Input:</strong> Two numbers (could be integers or decimals)</li>
            <li><strong>Output:</strong> One number (their sum)</li>
            <li><strong>Process:</strong> Add the two numbers</li>
            <li><strong>Constraints:</strong> None specified</li>
        </ul>
        
        <h4>Step 2: Analyze the Problem</h4>
        <ul>
            <li>We need to get input from user</li>
            <li>We need to store the two numbers in variables</li>
            <li>We need to perform addition</li>
            <li>We need to display the result</li>
        </ul>
        
        <h4>Step 3: Design the Solution</h4>
        
        <p><strong>Using an Algorithm:</strong></p>
        <pre>
Step 1: Start
Step 2: Read first number as num1
Step 3: Read second number as num2
Step 4: Calculate sum = num1 + num2
Step 5: Display sum
Step 6: Stop</pre>
        
        <p><strong>Using Pseudocode:</strong></p>
        <pre>
BEGIN
    INPUT num1
    INPUT num2
    SET sum = num1 + num2
    OUTPUT sum
END</pre>
        
        <p><strong>Using a Flowchart (text representation):</strong></p>
        <pre>
    [START]
       ↓
    [Input num1]
       ↓
    [Input num2]
       ↓
    [sum = num1 + num2]
       ↓
    [Display sum]
       ↓
     [END]</pre>
        
        <h4>Step 4: Implement in C++</h4>
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    double num1, num2, sum;
    
    cout &lt;&lt; "Enter first number: ";
    cin >> num1;
    
    cout &lt;&lt; "Enter second number: ";
    cin >> num2;
    
    sum = num1 + num2;
    
    cout &lt;&lt; "Sum = " &lt;&lt; sum &lt;&lt; endl;
    
    return 0;
}</pre>
        
        <h4>Step 5: Evaluate</h4>
        <ul>
            <li><strong>Test with normal input:</strong> 5 and 3 → Output: 8 ✓</li>
            <li><strong>Test with decimals:</strong> 3.5 and 2.7 → Output: 6.2 ✓</li>
            <li><strong>Test with negative numbers:</strong> -5 and 3 → Output: -2 ✓</li>
            <li><strong>Test with zeros:</strong> 0 and 0 → Output: 0 ✓</li>
            <li><strong>Check efficiency:</strong> Simple addition, very efficient ✓</li>
        </ul>

        <!-- ==================== SECTION 6: COMMON MISTAKES IN PROBLEM SOLVING ==================== -->
        <h3>1.2.6 Common Mistakes in Problem Solving</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Mistake</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">How to Avoid</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Rushing to Code</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Starting to write code before understanding the problem</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Spend time on analysis and design first</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Missing Edge Cases</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Only testing with normal inputs</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Always consider boundary conditions and special cases</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Overcomplicating</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Creating complex solutions for simple problems</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Look for the simplest solution first (KISS principle)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Not Testing Enough</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Testing only one or two cases</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Create a comprehensive test plan with multiple inputs</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Ignoring Constraints</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Not considering limitations (time, memory, etc.)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Always note constraints during the understanding phase</td>
            </tr>
        </table>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 KISS Principle:</strong> "Keep It Simple, Stupid" - The simplest solution is often the best solution.</p>
        </div>

        <!-- ==================== SECTION 7: PROBLEM-SOLVING STRATEGIES ==================== -->
        <h3>1.2.7 Problem-Solving Strategies</h3>
        
        <h4>Strategy 1: Ask Questions</h4>
        <p>Before solving, ask yourself:</p>
        <ul>
            <li>What exactly is the problem?</li>
            <li>What information do I have?</li>
            <li>What information do I need?</li>
            <li>What are the constraints?</li>
            <li>What similar problems have I solved before?</li>
        </ul>
        
        <h4>Strategy 2: Draw Diagrams</h4>
        <p>Visualizing the problem often reveals solutions. Use:</p>
        <ul>
            <li>Flowcharts for process flow</li>
            <li>Diagrams for data structures</li>
            <li>Mind maps for brainstorming</li>
        </ul>
        
        <h4>Strategy 3: Solve a Simpler Version</h4>
        <p>If the problem is too complex, solve a simpler version first, then add complexity.</p>
        
        <div class="example-box" style="background: #f0f2f5; padding: 15px; border-radius: 10px; margin: 15px 0;">
            <p><strong>Example:</strong> Instead of sorting 1000 numbers, first learn to sort 3 numbers, then 10, then 100.</p>
        </div>
        
        <h4>Strategy 4: Look for Patterns</h4>
        <p>Many problems follow common patterns. Recognizing these patterns helps you apply known solutions.</p>
        
        <h4>Strategy 5: Work with Examples</h4>
        <p>Work through concrete examples with actual numbers. This helps verify your understanding.</p>
        
        <h4>Strategy 6: Divide into Subproblems</h4>
        <p>Break the problem into smaller, independent subproblems. Solve each separately.</p>

        <!-- ==================== SECTION 8: SUMMARY ==================== -->
        <h3>1.2.8 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li><strong>Problem solving</strong> is the most important skill in programming</li>
                <li>The <strong>problem-solving cycle</strong> has 5 steps: Understand, Analyze, Design, Implement, Evaluate</li>
                <li><strong>Don't rush to code</strong> - spend time on understanding and design</li>
                <li>Different <strong>approaches</strong> include: Divide and Conquer, Top-Down, Bottom-Up, Working Backwards, Pattern Recognition</li>
                <li>Three main <strong>design tools</strong>: Flowcharts, Pseudocode, Algorithms</li>
                <li><strong>Flowcharts</strong> are visual, good for showing program flow</li>
                <li><strong>Pseudocode</strong> is informal, good for planning logic</li>
                <li><strong>Algorithms</strong> are step-by-step, good for precise implementation</li>
                <li>Always <strong>test thoroughly</strong> with normal, boundary, and invalid inputs</li>
                <li>Follow the <strong>KISS principle</strong> - Keep It Simple, Stupid</li>
            </ul>
        </div>
        
        <!-- ==================== SECTION 9: EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Exercises</h4>
            
            <p><strong>Exercise 1:</strong> List the five steps of the problem-solving cycle and explain what happens in each step.</p>
            
            <p><strong>Exercise 2:</strong> For the problem "Find the largest of three numbers", go through all five steps of the problem-solving cycle. Write down your analysis and design.</p>
            
            <p><strong>Exercise 3:</strong> Explain the difference between Top-Down and Bottom-Up approaches. Give an example of when you would use each.</p>
            
            <p><strong>Exercise 4:</strong> For the problem "Calculate the area of a circle given its radius", create:</p>
            <ul>
                <li>An algorithm (step-by-step)</li>
                <li>Pseudocode</li>
                <li>A flowchart (text representation is fine)</li>
            </ul>
            
            <p><strong>Exercise 5:</strong> Identify the problem-solving approach used in each scenario:</p>
            <ul>
                <li>a) Solving a complex math problem by first solving simpler versions</li>
                <li>b) Recognizing that a problem is similar to one you've solved before</li>
                <li>c) Starting from the desired output and determining what inputs are needed</li>
                <li>d) Breaking a large program into smaller functions</li>
            </ul>
            
            <p><strong>Exercise 6:</strong> List five common mistakes in problem solving and explain how to avoid each one.</p>
            
            <p><strong>Exercise 7:</strong> For the problem "Convert temperature from Celsius to Fahrenheit", write:</p>
            <ul>
                <li>The algorithm</li>
                <li>The pseudocode</li>
                <li>The actual C++ code (use the formula: F = C × 9/5 + 32)</li>
            </ul>
            
            <p><strong>Exercise 8:</strong> Think of a real-world problem (not programming related) and apply the problem-solving cycle to it. Document each step.</p>
        </div>
        
        <!-- ==================== SECTION 10: KEY TERMS ==================== -->
        <h3>1.2.9 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Problem Solving</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Finding solutions to problems</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Algorithm</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Step-by-step procedure</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Flowchart</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Visual program representation</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Pseudocode</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Informal code-like description</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Divide and Conquer</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Break problem into smaller parts</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Top-Down</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Start big, go to details</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Bottom-Up</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Start details, build up</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Edge Cases</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Special input conditions</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">KISS</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Keep It Simple, Stupid</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Stepwise Refinement</strong>
                <p style="font-size: 12px; margin: 5px 0 0;">Gradually add details</p>
            </div>
        </div>
        
        <!-- ==================== PREVIEW OF NEXT SECTIONS ==================== -->
        <div style="background: linear-gradient(135deg, #667eea20, #764ba220); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">📖 Coming Up Next</h4>
            <p>In the following sections, we will study each problem-solving tool in detail:</p>
            <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-top: 15px;">
                <span style="background: #667eea; color: white; padding: 8px 20px; border-radius: 30px;">1.2.1 Flowchart</span>
                <span style="background: #764ba2; color: white; padding: 8px 20px; border-radius: 30px;">1.2.2 Pseudocode</span>
                <span style="background: #f093fb; color: white; padding: 8px 20px; border-radius: 30px;">1.2.3 Algorithms</span>
            </div>
        </div>
    `,
    navigation: {
        next: "ch1-3",
        prev: "ch1-1",
        nextTitle: "1.2.1 Flowchart",
        prevTitle: "1.1 Introduction to Programming"
    }
};