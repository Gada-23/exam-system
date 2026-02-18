// ===============================
// Computer Programming - Chapter 6.1
// Specifying Simple Structure
// ===============================

window.currentSubsectionData = {
    title: "6.1 Specifying Simple Structure",
    content: `
        <h2>6.1 Specifying Simple Structure</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand what structures are and why they are used</li>
                <li>Learn the syntax for defining structures</li>
                <li>Understand structure members and their types</li>
                <li>Learn how to declare structure templates</li>
                <li>Understand the difference between structure definition and variable declaration</li>
                <li>Learn best practices for naming structures</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: INTRODUCTION TO STRUCTURES ==================== -->
        <h3>6.1.1 What is a Structure?</h3>
        
        <p>A <strong>structure</strong> is a user-defined data type that groups together related variables of different data types under a single name. It's a way to create complex data types that represent real-world entities.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> A structure (struct) is a collection of related data items, possibly of different types, grouped together under a single name.</p>
        </div>
        
        <h4>Analogy: Student Record Form</h4>
        <p>Think of a structure like a student registration form:</p>
        <ul>
            <li>The <strong>form itself</strong> is the structure type</li>
            <li>Each <strong>field</strong> on the form (Name, ID, Age, GPA) is a member of the structure</li>
            <li>Each <strong>filled form</strong> is a structure variable</li>
            <li>Different students have different values, but all have the same fields</li>
        </ul>
        
        <h4>Why Use Structures?</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Without Structures</th>
                <th style="padding: 10px;">With Structures</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <pre>
string name1 = "Alice";
int id1 = 12345;
double gpa1 = 3.8;
int age1 = 20;

string name2 = "Bob";
int id2 = 12346;
double gpa2 = 3.2;
int age2 = 21;
// 100 students? 1000 students?</pre>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <pre>
struct Student {
    string name;
    int id;
    double gpa;
    int age;
};

Student s1 = {"Alice", 12345, 3.8, 20};
Student s2 = {"Bob", 12346, 3.2, 21};
// Clean, organized, reusable</pre>
                </td>
            </tr>
        </table>

        <!-- ==================== SECTION 2: STRUCTURE SYNTAX ==================== -->
        <h3>6.1.2 Structure Syntax</h3>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Structure Definition Syntax:</strong></p>
            <pre>
struct StructureName {
    data_type member1;
    data_type member2;
    data_type member3;
    // ... more members
};  // Note the semicolon!</pre>
        </div>
        
        <h4>Simple Structure Examples:</h4>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

// Define a structure for a Student
struct Student {
    string name;
    int id;
    double gpa;
    int age;
};  // Semicolon is required!

// Define a structure for a Point (in 2D space)
struct Point {
    int x;
    int y;
};

// Define a structure for a Rectangle
struct Rectangle {
    double length;
    double width;
};

// Define a structure for a Date
struct Date {
    int day;
    int month;
    int year;
};

int main() {
    cout << "Structures have been defined but no variables created yet." << endl;
    cout << "Structure definitions are just templates." << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 3: STRUCTURE MEMBERS ==================== -->
        <h3>6.1.3 Structure Members</h3>
        
        <p>Structure members can be of any data type, including:</p>
        <ul>
            <li>Basic types (int, double, char, bool, etc.)</li>
            <li>Derived types (arrays, pointers)</li>
            <li>Other structures</li>
            <li>Even the same structure type (self-referential structures)</li>
        </ul>
        
        <h4>Example: Structure with Various Member Types</h4>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

// Structure with various member types
struct Employee {
    // Basic types
    string name;
    int employeeId;
    double salary;
    char department;
    bool isManager;
    
    // Array member
    int skills[5];  // Array of 5 skills
    
    // Pointer member
    string *address;  // Pointer to string
};

// Structure containing another structure
struct Address {
    string street;
    string city;
    string state;
    int zipCode;
};

struct Person {
    string name;
    int age;
    Address homeAddress;  // Nested structure
    Address workAddress;  // Another nested structure
};

int main() {
    cout << "Structure Employee has " << sizeof(Employee) << " bytes" << endl;
    cout << "Structure Person contains nested structures" << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 4: STRUCTURE NAMING CONVENTIONS ==================== -->
        <h3>6.1.4 Structure Naming Conventions</h3>
        
        <p>Following consistent naming conventions makes code more readable:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Convention</th>
                <th style="padding: 10px;">Example</th>
                <th style="padding: 10px;">Description</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">PascalCase (recommended)</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>struct StudentRecord { };</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Each word starts with capital letter</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">camelCase</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>struct studentRecord { };</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">First word lowercase, subsequent capitalized</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">snake_case</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>struct student_record { };</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Words separated by underscores</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">With_t suffix</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>struct student_t { };</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Old C convention, still seen</td>
            </tr>
        </table>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Best Practice:</strong> Use PascalCase for structure names (e.g., <code>Student</code>, <code>EmployeeRecord</code>). This clearly distinguishes them from variables and functions.</p>
        </div>

        <!-- ==================== SECTION 5: STRUCTURE DEFINITION PLACEMENT ==================== -->
        <h3>6.1.5 Where to Define Structures</h3>
        
        <p>Structure definitions can be placed in different locations depending on scope needs:</p>
        
        <h4>1. Global Scope (Before main)</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Global structure - accessible everywhere
struct GlobalStruct {
    int x;
    int y;
};

int main() {
    GlobalStruct g;
    g.x = 10;
    g.y = 20;
    
    return 0;
}</pre>
        
        <h4>2. Local Scope (Inside main or function)</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Local structure - only accessible within main
    struct LocalStruct {
        int a;
        int b;
    };
    
    LocalStruct ls;
    ls.a = 5;
    ls.b = 10;
    
    return 0;
}</pre>
        
        <h4>3. In Header Files (for multiple files)</h4>
        
        <pre>
// student.h header file
#ifndef STUDENT_H
#define STUDENT_H

#include &lt;string&gt;
using namespace std;

struct Student {
    string name;
    int id;
    double gpa;
};

#endif</pre>

        <!-- ==================== SECTION 6: COMPLETE STRUCTURE DEFINITION EXAMPLES ==================== -->
        <h3>6.1.6 Complete Structure Definition Examples</h3>
        
        <h4>Example 1: Book Structure</h4>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

struct Book {
    string title;
    string author;
    string isbn;
    int yearPublished;
    double price;
    int pages;
    bool isAvailable;
};

int main() {
    cout << "Book structure defined with members:" << endl;
    cout << "- title (string)" << endl;
    cout << "- author (string)" << endl;
    cout << "- isbn (string)" << endl;
    cout << "- yearPublished (int)" << endl;
    cout << "- price (double)" << endl;
    cout << "- pages (int)" << endl;
    cout << "- isAvailable (bool)" << endl;
    
    cout << "\\nSize of Book structure: " << sizeof(Book) << " bytes" << endl;
    
    return 0;
}</pre>
        
        <h4>Example 2: Complex Number Structure</h4>
        
        <pre>
struct Complex {
    double real;      // Real part
    double imag;      // Imaginary part
};

// Structure for mathematical vector
struct Vector3D {
    double x;
    double y;
    double z;
};

// Structure for a bank account
struct BankAccount {
    string accountNumber;
    string accountHolder;
    double balance;
    double interestRate;
    int accountType;  // 1 = savings, 2 = checking, 3 = fixed deposit
};</pre>
        
        <h4>Example 3: Self-Referential Structure (Linked List Node)</h4>
        
        <pre>
struct Node {
    int data;           // Data stored in node
    Node *next;         // Pointer to next node (self-referential)
    Node *previous;     // Pointer to previous node (for doubly linked list)
};

// This structure contains pointers to itself
// Used in data structures like linked lists, trees, etc.</pre>

        <!-- ==================== SECTION 7: STRUCTURE VS ARRAY ==================== -->
        <h3>6.1.7 Structure vs Array</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Feature</th>
                <th style="padding: 10px;">Array</th>
                <th style="padding: 10px;">Structure</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Data types</td>
                <td style="padding: 10px; border: 1px solid #ddd;">All elements same type</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Can have different types</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Access</td>
                <td style="padding: 10px; border: 1px solid #ddd;">By index (position)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">By name (member)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Memory layout</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Contiguous, same size elements</td>
                <td style="padding: 10px; border: 1px solid #ddd;">May have padding between members</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Use case</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Collection of similar items</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Record of related but different items</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Example</td>
                <td style="padding: 10px; border: 1px solid #ddd;">int scores[100];</td>
                <td style="padding: 10px; border: 1px solid #ddd;">struct Student { ... };</td>
            </tr>
        </table>

        <!-- ==================== SECTION 8: COMMON MISTAKES ==================== -->
        <h3>6.1.8 Common Mistakes When Specifying Structures</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Mistake</th>
                <th style="padding: 10px;">Wrong Code</th>
                <th style="padding: 10px;">Correct Code</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Missing semicolon</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <pre>struct Point {
    int x;
    int y;
}  // Missing semicolon!</pre>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <pre>struct Point {
    int x;
    int y;
};  // Semicolon required</pre>
                </td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Forgetting struct keyword when using</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <pre>Student s1;  // Error if in C
// In C++ this is actually OK</pre>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    In C++ this is fine; in C you need <code>struct Student s1;</code>
                </td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Defining inside function incorrectly</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    Defining structure inside function is OK, but can't be used outside
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    Define globally if needed in multiple functions
                </td>
            </tr>
        </table>

        <!-- ==================== SECTION 9: COMPLETE EXAMPLE - LIBRARY SYSTEM STRUCTURES ==================== -->
        <h3>6.1.9 Complete Example: Library System Structures</h3>
        
        <pre>
// ============================================
// Program: Library System Structures
// Author: CS Student
// Description: Demonstrates structure definitions
// ============================================

#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

// Basic structures for a library system

// Date structure
struct Date {
    int day;
    int month;
    int year;
};

// Address structure
struct Address {
    string street;
    string city;
    string state;
    string zipCode;
    string country;
};

// Book structure
struct Book {
    string title;
    string author;
    string isbn;
    Date publicationDate;
    double price;
    int totalCopies;
    int availableCopies;
    string category;  // Fiction, Non-fiction, Reference, etc.
};

// Member structure (library patron)
struct Member {
    string name;
    int memberId;
    Address homeAddress;
    string phoneNumber;
    string email;
    Date joinDate;
    Date expiryDate;
    bool isActive;
    int booksBorrowed;  // Current number of books borrowed
};

// Loan record structure
struct Loan {
    int loanId;
    int memberId;
    string isbn;
    Date loanDate;
    Date dueDate;
    Date returnDate;
    bool isReturned;
    double fine;  // Late fee if applicable
};

int main() {
    cout << "===== LIBRARY SYSTEM STRUCTURES =====" << endl;
    cout << "Defined the following structures:" << endl;
    cout << "1. Date" << endl;
    cout << "2. Address" << endl;
    cout << "3. Book" << endl;
    cout << "4. Member" << endl;
    cout << "5. Loan" << endl;
    
    cout << "\\nStructure sizes:" << endl;
    cout << "Date: " << sizeof(Date) << " bytes" << endl;
    cout << "Address: " << sizeof(Address) << " bytes" << endl;
    cout << "Book: " << sizeof(Book) << " bytes" << endl;
    cout << "Member: " << sizeof(Member) << " bytes" << endl;
    cout << "Loan: " << sizeof(Loan) << " bytes" << endl;
    
    cout << "\\nNote: Actual sizes may include padding for alignment." << endl;
    cout << "These are just templates - no variables created yet." << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 10: MEMORY ALIGNMENT AND PADDING ==================== -->
        <h3>6.1.10 Memory Alignment and Padding</h3>
        
        <p>When you define a structure, the compiler may add extra unused bytes between members for alignment. This is called <strong>padding</strong>.</p>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Example showing padding
struct Example1 {
    char c;     // 1 byte
    int i;      // 4 bytes
    char d;     // 1 byte
};  // Might be 12 bytes due to padding!

struct Example2 {
    int i;      // 4 bytes
    char c;     // 1 byte
    char d;     // 1 byte
};  // Might be 8 bytes (more efficient)

int main() {
    cout << "Example1 (char, int, char): " << sizeof(Example1) << " bytes" << endl;
    cout << "Example2 (int, char, char): " << sizeof(Example2) << " bytes" << endl;
    
    cout << "\\nOrganizing members by size can reduce padding!" << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 11: SUMMARY ==================== -->
        <h3>6.1.11 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li><strong>Structure (struct)</strong> groups related variables of different types</li>
                <li>Structure definition syntax: <code>struct Name { members };</code></li>
                <li>Structure definition is a <strong>template</strong> - no memory allocated yet</li>
                <li>Members can be any data type, including other structures</li>
                <li>Always end structure definition with a <strong>semicolon</strong></li>
                <li>Use <strong>PascalCase</strong> for structure names (convention)</li>
                <li>Structures can be defined globally, locally, or in header files</li>
                <li>Unlike arrays, structures can hold different data types</li>
                <li>The compiler may add <strong>padding</strong> between members for alignment</li>
                <li>Organizing members by size can reduce memory usage</li>
                <li>Structures are fundamental to creating complex data types</li>
            </ul>
        </div>

        <!-- ==================== SECTION 12: EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Define a structure called <code>Student</code> with members for name (string), rollNumber (int), marks (double), and grade (char).</p>
            
            <p><strong>Exercise 2:</strong> Create a structure <code>Time</code> that stores hours, minutes, and seconds as integers.</p>
            
            <p><strong>Exercise 3:</strong> Define a structure <code>Rectangle</code> that contains two Point structures (top-left and bottom-right). First define a Point structure with x and y coordinates.</p>
            
            <p><strong>Exercise 4:</strong> Create a structure <code>Employee</code> with members for name, id, salary, department, and a nested structure for address.</p>
            
            <p><strong>Exercise 5:</strong> Define a self-referential structure <code>Node</code> for a linked list with an integer data and a pointer to the next node.</p>
            
            <p><strong>Exercise 6:</strong> What's wrong with this structure definition? Fix it.</p>
            <pre>
struct Product
    string name;
    double price;
    int quantity
</pre>
            
            <p><strong>Exercise 7:</strong> Define a structure <code>Movie</code> with title (string), director (string), year (int), duration (int in minutes), and rating (double).</p>
            
            <p><strong>Exercise 8:</strong> Create a structure <code>University</code> that contains name, location (Address structure), numberOfStudents, and array of departments (strings).</p>
            
            <p><strong>Exercise 9:</strong> Define a structure <code>Fraction</code> with numerator and denominator as integers.</p>
            
            <p><strong>Exercise 10:</strong> Create a structure <code>Inventory</code> that contains an array of 100 Product structures (you need to define Product first).</p>
        </div>

        <!-- ==================== SECTION 13: KEY TERMS ==================== -->
        <h3>6.1.12 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Structure</strong>
                <p style="font-size: 12px;">User-defined data type</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Member</strong>
                <p style="font-size: 12px;">Variable inside structure</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Template</strong>
                <p style="font-size: 12px;">Blueprint for creating variables</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Field</strong>
                <p style="font-size: 12px;">Another name for member</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Record</strong>
                <p style="font-size: 12px;">Collection of related data</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Padding</strong>
                <p style="font-size: 12px;">Extra bytes for alignment</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Nested Structure</strong>
                <p style="font-size: 12px;">Structure inside structure</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Self-referential</strong>
                <p style="font-size: 12px;">Structure containing pointer to itself</p>
            </div>
        </div>
        
        <!-- ==================== PREVIEW OF NEXT SECTION ==================== -->
        <div style="background: linear-gradient(135deg, #667eea20, #764ba220); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">📖 Next: 6.2 Defining a Structure Variable</h4>
            <p>In the next section, we'll learn how to create variables of our structure types.</p>
        </div>
    `,
    navigation: {
        next: "ch6-2",
        prev: null,
        nextTitle: "6.2 Defining a Structure Variable",
        prevTitle: null
    }
};