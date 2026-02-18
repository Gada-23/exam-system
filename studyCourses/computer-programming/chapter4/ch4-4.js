// ===============================
// Computer Programming - Chapter 4.4
// Passing Value by Reference
// ===============================

window.currentSubsectionData = {
    title: "4.4 Passing Value by Reference",
    content: `
        <h2>4.4 Passing Value by Reference</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand what pass-by-reference means</li>
                <li>Learn the syntax for reference parameters</li>
                <li>Understand how functions can modify original variables</li>
                <li>Learn when to use pass-by-reference vs pass-by-value</li>
                <li>Understand references as aliases</li>
                <li>Learn about const references for read-only access</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: INTRODUCTION TO PASS-BY-REFERENCE ==================== -->
        <h3>4.4.1 What is Pass-by-Reference?</h3>
        
        <p><strong>Pass-by-reference</strong> allows a function to access and modify the original variable directly, rather than working with a copy. The function receives a <strong>reference</strong> (an alias) to the original variable.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> Pass-by-reference means the function receives a reference to the original argument. The function works directly with the original variable, not a copy.</p>
        </div>
        
        <h4>Analogy: Giving Someone Your House Keys</h4>
        <p>Think of pass-by-reference like giving someone your house keys:</p>
        <ul>
            <li><strong>Pass-by-value:</strong> You give them a photograph of your house. They can look at it, draw on it, but can't change your actual house.</li>
            <li><strong>Pass-by-reference:</strong> You give them your keys. They can go in, rearrange furniture, paint walls - your actual house changes!</li>
        </ul>
        
        <h4>Syntax for Pass-by-Reference:</h4>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Syntax:</strong> Add <code>&</code> after the parameter type</p>
            <pre>
return_type function_name(data_type &parameter_name) {
    // function body
}</pre>
        </div>

        <!-- ==================== SECTION 2: BASIC PASS-BY-REFERENCE EXAMPLE ==================== -->
        <h3>4.4.2 Basic Pass-by-Reference Example</h3>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Pass by reference - note the & symbol
void increment(int &x) {
    x++;  // This modifies the original variable!
    cout << "Inside function, x = " << x << endl;
}

int main() {
    int num = 5;
    
    cout << "Before function call: num = " << num << endl;
    
    increment(num);  // Pass by reference
    
    cout << "After function call: num = " << num << endl;
    
    return 0;
}</pre>
        
        <p><strong>Output:</strong></p>
        <pre>
Before function call: num = 5
Inside function, x = 6
After function call: num = 6</pre>
        
        <p>Notice that <code>num</code> in main has been changed by the function. The function worked directly with the original variable.</p>
        
        <h4>Visual Representation:</h4>
        
        <pre>
        BEFORE CALL:                DURING CALL:                 AFTER CALL:
        
        main's num = 5              main's num = 5               main's num = 6
                                    ↓
                                    x is a REFERENCE to num
                                    x++ modifies num directly</pre>

        <!-- ==================== SECTION 3: PASS-BY-VALUE VS PASS-BY-REFERENCE ==================== -->
        <h3>4.4.3 Pass-by-Value vs Pass-by-Reference</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Aspect</th>
                <th style="padding: 10px;">Pass-by-Value</th>
                <th style="padding: 10px;">Pass-by-Reference</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Syntax</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>void func(int x)</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>void func(int &x)</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">What's passed</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Copy of the value</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Reference to original</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Can modify original?</td>
                <td style="padding: 10px; border: 1px solid #ddd;">❌ No</td>
                <td style="padding: 10px; border: 1px solid #ddd;">✅ Yes</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Memory usage</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Creates copy (extra memory)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">No copy (memory efficient)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Speed</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Slower for large objects</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Faster (no copying)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Safety</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Safer (can't modify original)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Risk of accidental modification</td>
            </tr>
        </table>
        
        <h4>Direct Comparison:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Pass by value
void byValue(int x) {
    x = 100;
    cout << "Inside byValue: x = " << x << endl;
}

// Pass by reference
void byReference(int &x) {
    x = 100;
    cout << "Inside byReference: x = " << x << endl;
}

int main() {
    int a = 10, b = 10;
    
    cout << "Before: a = " << a << ", b = " << b << endl;
    
    byValue(a);        // Pass by value
    byReference(b);    // Pass by reference
    
    cout << "After: a = " << a << ", b = " << b << endl;
    
    return 0;
}</pre>
        
        <p><strong>Output:</strong></p>
        <pre>
Before: a = 10, b = 10
Inside byValue: x = 100
Inside byReference: x = 100
After: a = 10, b = 100</pre>

        <!-- ==================== SECTION 4: SWAP FUNCTION - CLASSIC EXAMPLE ==================== -->
        <h3>4.4.4 The Swap Function - Classic Example</h3>
        
        <p>Swapping two values is impossible with pass-by-value, but easy with pass-by-reference.</p>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// This WON'T work - pass by value
void swapByValue(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
    cout << "Inside swapByValue: a = " << a << ", b = " << b << endl;
}

// This WILL work - pass by reference
void swapByReference(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
    cout << "Inside swapByReference: a = " << a << ", b = " << b << endl;
}

int main() {
    int x = 5, y = 10;
    
    cout << "Original: x = " << x << ", y = " << y << endl;
    
    swapByValue(x, y);
    cout << "After swapByValue: x = " << x << ", y = " << y << endl;
    
    swapByReference(x, y);
    cout << "After swapByReference: x = " << x << ", y = " << y << endl;
    
    return 0;
}</pre>
        
        <p><strong>Output:</strong></p>
        <pre>
Original: x = 5, y = 10
Inside swapByValue: a = 10, b = 5
After swapByValue: x = 5, y = 10
Inside swapByReference: a = 10, b = 5
After swapByReference: x = 10, y = 5</pre>

        <!-- ==================== SECTION 5: MULTIPLE RETURN VALUES USING REFERENCES ==================== -->
        <h3>4.4.5 Multiple Return Values Using References</h3>
        
        <p>Functions can only return one value directly. But with pass-by-reference, we can effectively return multiple values by modifying reference parameters.</p>
        
        <h4>Example: Calculating Statistics</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Function that "returns" multiple values via references
void calculateStats(int a, int b, int c, 
                    int &sum, int &product, double &average, int &largest) {
    sum = a + b + c;
    product = a * b * c;
    average = (a + b + c) / 3.0;
    
    // Find largest
    largest = a;
    if (b > largest) largest = b;
    if (c > largest) largest = c;
}

int main() {
    int x = 5, y = 8, z = 3;
    int total, product;
    double avg;
    int max;
    
    calculateStats(x, y, z, total, product, avg, max);
    
    cout << "Numbers: " << x << ", " << y << ", " << z << endl;
    cout << "Sum: " << total << endl;
    cout << "Product: " << product << endl;
    cout << "Average: " << avg << endl;
    cout << "Largest: " << max << endl;
    
    return 0;
}</pre>
        
        <h4>Example: Splitting a Number into Digits</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Function that returns multiple values
void splitNumber(int num, int &thousands, int &hundreds, int &tens, int &ones) {
    thousands = num / 1000;
    num %= 1000;
    hundreds = num / 100;
    num %= 100;
    tens = num / 10;
    ones = num % 10;
}

int main() {
    int number = 3852;
    int th, h, t, o;
    
    splitNumber(number, th, h, t, o);
    
    cout << number << " = " << th << " thousands, " 
         << h << " hundreds, " << t << " tens, " << o << " ones" << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 6: CONST REFERENCES ==================== -->
        <h3>4.4.6 Const References</h3>
        
        <p>Sometimes you want the efficiency of pass-by-reference (no copying) but the safety of pass-by-value (no modification). <strong>Const references</strong> provide both.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Syntax:</strong> <code>return_type function_name(const data_type &parameter_name)</code></p>
        </div>
        
        <h4>Example: Const Reference</h4>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

// Const reference - efficient AND safe
void printInfo(const string &name, const int &age, const double &gpa) {
    // name = "New Name";  // ERROR! Can't modify const reference
    // age = 30;           // ERROR!
    
    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    cout << "GPA: " << gpa << endl;
}

int main() {
    string studentName = "Alice";
    int studentAge = 20;
    double studentGPA = 3.8;
    
    // No copies are made - efficient
    printInfo(studentName, studentAge, studentGPA);
    
    // Original values unchanged
    cout << "\\nOriginal values unchanged:" << endl;
    cout << studentName << ", " << studentAge << ", " << studentGPA << endl;
    
    return 0;
}</pre>
        
        <h4>Why Use Const References?</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Method</th>
                <th style="padding: 10px;">Copying</th>
                <th style="padding: 10px;">Can Modify?</th>
                <th style="padding: 10px;">Best For</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Pass-by-value</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Yes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">No</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Small types, when you need a copy</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Pass-by-reference</td>
                <td style="padding: 10px; border: 1px solid #ddd;">No</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Yes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">When you need to modify</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Const reference</td>
                <td style="padding: 10px; border: 1px solid #ddd;">No</td>
                <td style="padding: 10px; border: 1px solid #ddd;">No</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Large objects, read-only access</td>
            </tr>
        </table>

        <!-- ==================== SECTION 7: WHEN TO USE EACH METHOD ==================== -->
        <h3>4.4.7 When to Use Pass-by-Value vs Pass-by-Reference</h3>
        
        <h4>Use Pass-by-Value When:</h4>
        <ul>
            <li>You need a copy to work with</li>
            <li>The type is small (int, char, bool, etc.)</li>
            <li>You don't want to modify the original</li>
            <li>The function is mathematical (like square root)</li>
        </ul>
        
        <h4>Use Pass-by-Reference When:</h4>
        <ul>
            <li>You need to modify the original variable</li>
            <li>You want to return multiple values</li>
            <li>The type is large (arrays, strings, objects)</li>
            <li>You want to avoid expensive copying</li>
        </ul>
        
        <h4>Use Const Reference When:</h4>
        <ul>
            <li>You have large objects and don't need to modify them</li>
            <li>You want the efficiency of reference with the safety of value</li>
            <li>The function just needs to read/observe the data</li>
        </ul>
        
        <h4>Decision Tree:</h4>
        
        <pre>
                    ┌─────────────────┐
                    │ Need to pass    │
                    │ data to function│
                    └────────┬────────┘
                             ↓
            ┌────────────────────────────────┐
            │ Is the data type small?         │
            │ (int, char, bool, etc.)         │
            └────────┬───────────────┬────────┘
                     ↓                ↓
                    Yes               No
                     ↓                 ↓
            ┌───────────────┐   ┌──────────────────┐
            │ Need to modify│   │ Need to modify   │
            │ the original? │   │ the original?    │
            └───────┬───────┘   └─────────┬────────┘
                    ↓                      ↓
            ┌───────┴───────┐      ┌───────┴───────┐
            ↓               ↓      ↓               ↓
           Yes              No     Yes              No
            ↓               ↓      ↓                ↓
    ┌───────────────┐ ┌───────────────┐ ┌───────────────┐ ┌─────────────────┐
    │ Pass by       │ │ Pass by       │ │ Pass by       │ │ Pass by const   │
    │ Reference     │ │ Value         │ │ Reference     │ │ Reference       │
    └───────────────┘ └───────────────┘ └───────────────┘ └─────────────────┘</pre>

        <!-- ==================== SECTION 8: COMMON MISTAKES ==================== -->
        <h3>4.4.8 Common Mistakes with References</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Mistake</th>
                <th style="padding: 10px;">Wrong Code</th>
                <th style="padding: 10px;">Correct Code</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Passing literal to reference</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <pre>void func(int &x) {}
func(5);  // ERROR!</pre>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    Use const reference: <code>void func(const int &x)</code>
                </td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Forgetting & in parameter</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <pre>void swap(int a, int b) {
    // won't work!
}</pre>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <pre>void swap(int &a, int &b) {
    // works!
}</pre>
                </td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Confusing & in declaration vs use</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <pre>int &x = y;  // reference
int *p = &y;  // address-of</pre>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    Remember: & in declaration = reference<br>
                    & in expression = address-of
                </td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Returning reference to local</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <pre>int &bad() {
    int x = 5;
    return x;  // DANGER!
}</pre>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    Never return reference to local variable!
                </td>
            </tr>
        </table>

        <!-- ==================== SECTION 9: COMPLETE EXAMPLE - STUDENT MANAGEMENT ==================== -->
        <h3>4.4.9 Complete Example: Student Management System</h3>
        
        <pre>
// ============================================
// Program: Student Management System
// Author: CS Student
// Description: Demonstrates pass-by-reference
// ============================================

#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;iomanip&gt;
using namespace std;

const int MAX_NAME = 50;
const int MAX_STUDENTS = 100;

struct Student {
    string name;
    int id;
    double gpa;
    int age;
};

// Function prototypes - note the references

// Input functions
void getStudentInfo(string &name, int &id, double &gpa, int &age);
void getValidScore(double &score, const string &prompt);

// Processing functions (modify data)
void updateGPA(Student &s, double newGPA);
void incrementAge(Student &s);
void applyCurve(Student &s, double percentage);

// Analysis functions (read-only - use const reference)
void displayStudent(const Student &s);
double calculateAverageGPA(const Student students[], int count);
void findTopStudent(const Student students[], int count, Student &topStudent);

// Utility functions
void swapStudents(Student &a, Student &b);
void sortByGPA(Student students[], int count);
void printHeader();

int main() {
    Student students[MAX_STUDENTS];
    int studentCount = 0;
    int choice;
    
    do {
        cout << "\\n===== STUDENT MANAGEMENT SYSTEM =====" << endl;
        cout << "1. Add Student" << endl;
        cout << "2. Display All Students" << endl;
        cout << "3. Update Student GPA" << endl;
        cout << "4. Apply Grade Curve" << endl;
        cout << "5. Show Statistics" << endl;
        cout << "6. Sort by GPA" << endl;
        cout << "7. Exit" << endl;
        cout << "Choice: ";
        cin >> choice;
        
        switch (choice) {
            case 1: {
                if (studentCount < MAX_STUDENTS) {
                    Student &newStudent = students[studentCount];
                    getStudentInfo(newStudent.name, newStudent.id, 
                                  newStudent.gpa, newStudent.age);
                    studentCount++;
                    cout << "Student added successfully!" << endl;
                } else {
                    cout << "Maximum students reached!" << endl;
                }
                break;
            }
            
            case 2: {
                if (studentCount > 0) {
                    printHeader();
                    for (int i = 0; i < studentCount; i++) {
                        cout << setw(3) << i+1 << ". ";
                        displayStudent(students[i]);
                    }
                } else {
                    cout << "No students in the system." << endl;
                }
                break;
            }
            
            case 3: {
                if (studentCount > 0) {
                    int index;
                    cout << "Enter student number (1-" << studentCount << "): ";
                    cin >> index;
                    if (index >= 1 && index <= studentCount) {
                        double newGPA;
                        cout << "Enter new GPA: ";
                        cin >> newGPA;
                        updateGPA(students[index-1], newGPA);
                        cout << "GPA updated!" << endl;
                    }
                }
                break;
            }
            
            case 4: {
                if (studentCount > 0) {
                    double percentage;
                    cout << "Enter curve percentage (e.g., 10 for +10%): ";
                    cin >> percentage;
                    for (int i = 0; i < studentCount; i++) {
                        applyCurve(students[i], percentage);
                    }
                    cout << "Curve applied to all students!" << endl;
                }
                break;
            }
            
            case 5: {
                if (studentCount > 0) {
                    double avg = calculateAverageGPA(students, studentCount);
                    Student topStudent;
                    findTopStudent(students, studentCount, topStudent);
                    
                    cout << fixed << setprecision(2);
                    cout << "\\n===== STATISTICS =====" << endl;
                    cout << "Total students: " << studentCount << endl;
                    cout << "Average GPA: " << avg << endl;
                    cout << "Top Student: " << topStudent.name 
                         << " (GPA: " << topStudent.gpa << ")" << endl;
                }
                break;
            }
            
            case 6: {
                if (studentCount > 0) {
                    sortByGPA(students, studentCount);
                    cout << "Students sorted by GPA!" << endl;
                }
                break;
            }
        }
        
    } while (choice != 7);
    
    return 0;
}

// Function definitions

void getStudentInfo(string &name, int &id, double &gpa, int &age) {
    cout << "Enter student name: ";
    cin.ignore();
    getline(cin, name);
    
    cout << "Enter student ID: ";
    cin >> id;
    
    getValidScore(gpa, "Enter GPA (0.0-4.0): ");
    while (gpa < 0.0 || gpa > 4.0) {
        cout << "GPA must be between 0.0 and 4.0." << endl;
        getValidScore(gpa, "Enter GPA (0.0-4.0): ");
    }
    
    cout << "Enter student age: ";
    cin >> age;
}

void getValidScore(double &score, const string &prompt) {
    cout << prompt;
    cin >> score;
}

void updateGPA(Student &s, double newGPA) {
    if (newGPA >= 0.0 && newGPA <= 4.0) {
        s.gpa = newGPA;
    } else {
        cout << "Invalid GPA!" << endl;
    }
}

void incrementAge(Student &s) {
    s.age++;
}

void applyCurve(Student &s, double percentage) {
    s.gpa = s.gpa * (1.0 + percentage / 100.0);
    if (s.gpa > 4.0) s.gpa = 4.0;
}

void displayStudent(const Student &s) {
    cout << fixed << setprecision(2);
    cout << "Name: " << setw(15) << left << s.name
         << " ID: " << setw(6) << s.id
         << " GPA: " << setw(5) << s.gpa
         << " Age: " << s.age << endl;
}

double calculateAverageGPA(const Student students[], int count) {
    if (count == 0) return 0.0;
    double sum = 0.0;
    for (int i = 0; i < count; i++) {
        sum += students[i].gpa;
    }
    return sum / count;
}

void findTopStudent(const Student students[], int count, Student &topStudent) {
    if (count == 0) return;
    topStudent = students[0];
    for (int i = 1; i < count; i++) {
        if (students[i].gpa > topStudent.gpa) {
            topStudent = students[i];
        }
    }
}

void swapStudents(Student &a, Student &b) {
    Student temp = a;
    a = b;
    b = temp;
}

void sortByGPA(Student students[], int count) {
    for (int i = 0; i < count - 1; i++) {
        for (int j = 0; j < count - i - 1; j++) {
            if (students[j].gpa < students[j+1].gpa) {
                swapStudents(students[j], students[j+1]);
            }
        }
    }
}

void printHeader() {
    cout << "\\n===== STUDENT LIST =====" << endl;
}</pre>

        <!-- ==================== SECTION 10: SUMMARY ==================== -->
        <h3>4.4.10 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li><strong>Pass-by-reference</strong> allows functions to modify original variables</li>
                <li>Syntax: <code>void func(int &param)</code> - note the <code>&</code></li>
                <li>References are <strong>aliases</strong> - they refer to the original variable</li>
                <li>No copy is made - efficient for large objects</li>
                <li><strong>Swap function</strong> is the classic example requiring references</li>
                <li>References enable <strong>multiple return values</strong> from functions</li>
                <li><strong>Const references</strong> (<code>const int &x</code>) provide efficiency without modification</li>
                <li>Use references when you need to modify, for large objects, or for multiple returns</li>
                <li>Use values for small types when you don't need modification</li>
                <li>Use const references for large read-only objects</li>
                <li>Never return references to local variables!</li>
            </ul>
        </div>

        <!-- ==================== SECTION 11: EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Write a function <code>incrementAll</code> that takes three integers by reference and increments each by 1.</p>
            
            <p><strong>Exercise 2:</strong> Create a proper swap function that works with doubles.</p>
            
            <p><strong>Exercise 3:</strong> Write a function <code>getMinMax</code> that takes an array of integers and returns (via reference parameters) the minimum and maximum values.</p>
            
            <p><strong>Exercise 4:</strong> Create a function <code>circleProperties</code> that takes radius and returns (via references) the area and circumference.</p>
            
            <p><strong>Exercise 5:</strong> Write a program that demonstrates the difference between pass-by-value and pass-by-reference. Include functions that try to modify their parameters and show the results.</p>
            
            <p><strong>Exercise 6:</strong> Create a function <code>normalize</code> that takes a double by reference and ensures it's between 0 and 1 (if >1, set to 1; if <0, set to 0).</p>
            
            <p><strong>Exercise 7:</strong> Write a function <code>splitTime</code> that takes total seconds and returns (by reference) hours, minutes, and seconds.</p>
            
            <p><strong>Exercise 8:</strong> Create a simple banking system with functions that modify account balances using references.</p>
            
            <p><strong>Exercise 9:</strong> Demonstrate const references by writing a function that prints a large string without copying it.</p>
            
            <p><strong>Exercise 10:</strong> Write a sorting function that sorts an array of integers using pass-by-reference (you'll need to swap elements).</p>
        </div>

        <!-- ==================== SECTION 12: KEY TERMS ==================== -->
        <h3>4.4.11 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Reference</strong>
                <p style="font-size: 12px;">Alias to another variable</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Pass-by-Reference</strong>
                <p style="font-size: 12px;">Function receives reference</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Const Reference</strong>
                <p style="font-size: 12px;">Read-only reference</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Alias</strong>
                <p style="font-size: 12px;">Another name for same memory</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Side Effect</strong>
                <p style="font-size: 12px;">Modifying original variable</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Multiple Returns</strong>
                <p style="font-size: 12px;">Returning several values via references</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Efficiency</strong>
                <p style="font-size: 12px;">No copying with references</p>
            </div>
        </div>
        
        <!-- ==================== END OF CHAPTER 4 ==================== -->
        <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 30px; border-radius: 15px; margin: 40px 0; text-align: center; color: white;">
            <h3 style="margin: 0 0 15px 0;">📚 End of Chapter 4</h3>
            <p style="font-size: 18px; margin: 0 0 20px 0;">You have completed Chapter 4: Functions and Passing Arguments!</p>
            <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">4.1 Function Definition ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">4.2 Function Declaration ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">4.3 Pass by Value ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">4.4 Pass by Reference ✓</span>
            </div>
            <p style="margin-top: 30px;">Ready for Chapter 5: Arrays and Strings!</p>
        </div>
    `,
    navigation: {
        next: null,
        prev: "ch4-3",
        nextTitle: null,
        prevTitle: "4.3 Passing Value by Value"
    }
};