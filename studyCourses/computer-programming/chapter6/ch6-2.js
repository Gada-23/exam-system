// ===============================
// Computer Programming - Chapter 6.2
// Defining a Structure Variable
// ===============================

window.currentSubsectionData = {
    title: "6.2 Defining a Structure Variable",
    content: `
        <h2>6.2 Defining a Structure Variable</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Learn how to create variables of structure types</li>
                <li>Understand different ways to declare structure variables</li>
                <li>Master structure initialization techniques</li>
                <li>Learn about aggregate initialization</li>
                <li>Understand default member initialization (C++11)</li>
                <li>Learn to create arrays of structures</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: DECLARING STRUCTURE VARIABLES ==================== -->
        <h3>6.2.1 Declaring Structure Variables</h3>
        
        <p>Once you've defined a structure, you can create variables of that type. This is when memory is actually allocated.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Syntax:</strong> <code>StructureName variableName;</code></p>
        </div>
        
        <h4>Basic Variable Declaration:</h4>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

// First define the structure
struct Student {
    string name;
    int id;
    double gpa;
    int age;
};

int main() {
    // Declare structure variables
    Student student1;      // One student
    Student student2;      // Another student
    Student student3;      // Yet another student
    
    cout << "Three Student variables created." << endl;
    cout << "Size of each Student: " << sizeof(Student) << " bytes" << endl;
    cout << "Total memory allocated: " << sizeof(student1) * 3 << " bytes" << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 2: MULTIPLE VARIABLES DECLARATION ==================== -->
        <h3>6.2.2 Declaring Multiple Variables</h3>
        
        <p>You can declare multiple structure variables in several ways:</p>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

struct Point {
    int x;
    int y;
};

int main() {
    // Method 1: Separate declarations
    Point p1;
    Point p2;
    Point p3;
    
    // Method 2: Comma-separated list
    Point p4, p5, p6;
    
    // Method 3: Combined with initialization
    Point p7 = {10, 20}, p8 = {30, 40}, p9;
    
    cout << "Variables declared using different methods:" << endl;
    cout << "p1, p2, p3: separate declarations" << endl;
    cout << "p4, p5, p6: comma-separated" << endl;
    cout << "p7, p8, p9: mixed with initialization" << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 3: DECLARING VARIABLES AT DEFINITION TIME ==================== -->
        <h3>6.2.3 Declaring Variables at Structure Definition Time</h3>
        
        <p>You can declare variables immediately after defining the structure:</p>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

// Define structure and declare variables together
struct Employee {
    string name;
    int id;
    double salary;
} emp1, emp2, emp3;  // Variables declared here

// You can also declare and initialize
struct Rectangle {
    double length;
    double width;
} rect1 = {10.5, 5.2}, rect2 = {8.0, 6.0};

// Tagged structure (name + variables)
struct Department {
    string deptName;
    int employeeCount;
    double budget;
} dept1, dept2;  // Variables

// You can also have unnamed structures (no tag)
struct {
    string title;
    string artist;
    int year;
} song1, song2;  // Only variables, no type name to use later

int main() {
    // Assign values to the pre-declared variables
    emp1.name = "Alice";
    emp1.id = 1001;
    emp1.salary = 50000;
    
    emp2.name = "Bob";
    emp2.id = 1002;
    emp2.salary = 55000;
    
    cout << "Employee 1: " << emp1.name << ", ID: " << emp1.id << endl;
    cout << "Employee 2: " << emp2.name << ", ID: " << emp2.id << endl;
    
    cout << "\\nRectangle 1: " << rect1.length << " × " << rect1.width << endl;
    cout << "Rectangle 2: " << rect2.length << " × " << rect2.width << endl;
    
    // Using unnamed structure
    song1.title = "Bohemian Rhapsody";
    song1.artist = "Queen";
    song1.year = 1975;
    
    cout << "\\nSong: " << song1.title << " by " << song1.artist << endl;
    
    return 0;
}</pre>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Note:</strong> Unnamed structures (no tag) are useful when you only need a few variables and won't need to create more of that type later. However, they're less reusable.</p>
        </div>

        <!-- ==================== SECTION 4: AGGREGATE INITIALIZATION ==================== -->
        <h3>6.2.4 Aggregate Initialization</h3>
        
        <p>Structures can be initialized using curly braces <code>{}</code> in the order of member declaration.</p>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

struct Student {
    string name;
    int id;
    double gpa;
    int age;
};

struct Point {
    int x;
    int y;
    int z;  // 3D point
};

struct Book {
    string title;
    string author;
    int year;
    double price;
};

int main() {
    // Aggregate initialization - values in member order
    Student s1 = {"Alice", 1001, 3.8, 20};
    Student s2 = {"Bob", 1002, 3.2, 21};
    
    // Point initialization
    Point p1 = {10, 20, 30};           // All values provided
    Point p2 = {5, 15};                 // z gets 0 (default initialization)
    Point p3 = {};                       // All members zero-initialized
    
    // Book initialization
    Book b1 = {"1984", "George Orwell", 1949, 12.99};
    Book b2 = {"The Hobbit", "J.R.R. Tolkien"};  // year and price default to 0
    
    cout << "=== Students ===" << endl;
    cout << s1.name << ": ID=" << s1.id << ", GPA=" << s1.gpa << ", Age=" << s1.age << endl;
    cout << s2.name << ": ID=" << s2.id << ", GPA=" << s2.gpa << ", Age=" << s2.age << endl;
    
    cout << "\\n=== Points ===" << endl;
    cout << "p1: (" << p1.x << ", " << p1.y << ", " << p1.z << ")" << endl;
    cout << "p2: (" << p2.x << ", " << p2.y << ", " << p2.z << ")" << endl;
    cout << "p3: (" << p3.x << ", " << p3.y << ", " << p3.z << ")" << endl;
    
    cout << "\\n=== Books ===" << endl;
    cout << b1.title << " by " << b1.author << " (" << b1.year << ") $" << b1.price << endl;
    cout << b2.title << " by " << b2.author << " (" << b2.year << ") $" << b2.price << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 5: DESIGNATED INITIALIZERS (C++20) ==================== -->
        <h3>6.2.5 Designated Initializers (C++20)</h3>
        
        <p>C++20 introduced designated initializers, allowing you to initialize specific members by name.</p>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

struct Employee {
    string name;
    int id;
    double salary;
    string department;
    bool isManager;
};

int main() {
    // Designated initializers (C++20)
    Employee e1 = {
        .name = "Alice",
        .id = 1001,
        .salary = 60000,
        .department = "Engineering",
        .isManager = true
    };
    
    // Can initialize only some members
    Employee e2 = {
        .name = "Bob",
        .id = 1002,
        .department = "Sales"
        // salary and isManager default to 0 and false
    };
    
    // Order doesn't matter with designated initializers
    Employee e3 = {
        .isManager = false,
        .name = "Charlie",
        .id = 1003,
        .salary = 55000
        // department default empty
    };
    
    cout << "=== Employees ===" << endl;
    cout << e1.name << " (ID:" << e1.id << ") - $" << e1.salary 
         << ", " << e1.department << ", Manager: " << e1.isManager << endl;
         
    cout << e2.name << " (ID:" << e2.id << ") - $" << e2.salary 
         << ", " << e2.department << ", Manager: " << e2.isManager << endl;
         
    cout << e3.name << " (ID:" << e3.id << ") - $" << e3.salary 
         << ", " << e3.department << ", Manager: " << e3.isManager << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 6: DEFAULT MEMBER INITIALIZATION (C++11) ==================== -->
        <h3>6.2.6 Default Member Initialization (C++11)</h3>
        
        <p>Since C++11, you can provide default values for structure members right in the definition.</p>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

struct Student {
    string name = "Unknown";  // Default value
    int id = 0;               // Default value
    double gpa = 0.0;         // Default value
    int age = 18;             // Default value
};

struct Account {
    string accountNumber = "00000000";
    double balance = 0.0;
    double interestRate = 0.01;  // 1% default
    bool isActive = true;
};

int main() {
    // Use default values
    Student s1;  // All default values
    Student s2 = {"Alice", 1001};  // Override some, others default
    
    Account a1;  // All defaults
    Account a2 = {"12345678", 1000.0};  // Override some
    
    cout << "=== Students ===" << endl;
    cout << "s1: " << s1.name << ", ID:" << s1.id 
         << ", GPA:" << s1.gpa << ", Age:" << s1.age << endl;
    cout << "s2: " << s2.name << ", ID:" << s2.id 
         << ", GPA:" << s2.gpa << ", Age:" << s2.age << endl;
    
    cout << "\\n=== Accounts ===" << endl;
    cout << "a1: " << a1.accountNumber << ", Balance:$" << a1.balance
         << ", Rate:" << a1.interestRate << ", Active:" << a1.isActive << endl;
    cout << "a2: " << a2.accountNumber << ", Balance:$" << a2.balance
         << ", Rate:" << a2.interestRate << ", Active:" << a2.isActive << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 7: ARRAYS OF STRUCTURES ==================== -->
        <h3>6.2.7 Arrays of Structures</h3>
        
        <p>You can create arrays of structures to store multiple records of the same type.</p>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;iomanip&gt;
using namespace std;

struct Student {
    string name;
    int id;
    double gpa;
};

int main() {
    // Array of structures
    Student students[3];  // Array of 3 Student structures
    
    // Initialize array elements
    students[0] = {"Alice", 1001, 3.8};
    students[1] = {"Bob", 1002, 3.2};
    students[2] = {"Charlie", 1003, 3.5};
    
    // Initialize at declaration
    Student moreStudents[2] = {
        {"David", 1004, 3.9},
        {"Eve", 1005, 3.7}
    };
    
    // Partial initialization
    Student classRoster[5] = {
        {"Frank", 1006, 3.4},
        {"Grace", 1007, 3.6}
        // Rest will be default-initialized (empty strings, zeros)
    };
    
    cout << "=== Student Array ===" << endl;
    for (int i = 0; i < 3; i++) {
        cout << students[i].name << "\t(ID: " << students[i].id 
             << ")\tGPA: " << fixed << setprecision(2) << students[i].gpa << endl;
    }
    
    cout << "\\n=== More Students ===" << endl;
    for (int i = 0; i < 2; i++) {
        cout << moreStudents[i].name << "\t(ID: " << moreStudents[i].id 
             << ")\tGPA: " << moreStudents[i].gpa << endl;
    }
    
    // 2D array of structures
    struct Point {
        int x;
        int y;
    };
    
    Point grid[3][4] = {
        {{0,0}, {1,0}, {2,0}, {3,0}},
        {{0,1}, {1,1}, {2,1}, {3,1}},
        {{0,2}, {1,2}, {2,2}, {3,2}}
    };
    
    cout << "\\n=== 2D Grid of Points ===" << endl;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 4; j++) {
            cout << "(" << grid[i][j].x << "," << grid[i][j].y << ") ";
        }
        cout << endl;
    }
    
    return 0;
}</pre>

        <!-- ==================== SECTION 8: POINTERS TO STRUCTURES ==================== -->
        <h3>6.2.8 Pointers to Structures</h3>
        
        <p>You can create pointers to structures and use them with the arrow operator (->).</p>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

struct Student {
    string name;
    int id;
    double gpa;
};

int main() {
    Student s1 = {"Alice", 1001, 3.8};
    
    // Pointer to structure
    Student *ptr = &s1;
    
    // Access members through pointer (using arrow operator)
    cout << "Through pointer (-> operator):" << endl;
    cout << "Name: " << ptr->name << endl;
    cout << "ID: " << ptr->id << endl;
    cout << "GPA: " << ptr->gpa << endl;
    
    // Also valid but less common: dereference then dot
    cout << "\\nThrough dereference (* then .):" << endl;
    cout << "Name: " << (*ptr).name << endl;
    
    // Dynamic allocation of structure
    Student *dynamicStudent = new Student;
    dynamicStudent->name = "Bob";
    dynamicStudent->id = 1002;
    dynamicStudent->gpa = 3.2;
    
    cout << "\\nDynamically allocated student:" << endl;
    cout << dynamicStudent->name << ", ID: " << dynamicStudent->id 
         << ", GPA: " << dynamicStudent->gpa << endl;
    
    delete dynamicStudent;  // Free memory
    
    // Array of structure pointers
    Student *students[3];
    students[0] = new Student{"Charlie", 1003, 3.5};
    students[1] = new Student{"David", 1004, 3.7};
    students[2] = new Student{"Eve", 1005, 3.9};
    
    cout << "\\nArray of structure pointers:" << endl;
    for (int i = 0; i < 3; i++) {
        cout << students[i]->name << " (ID:" << students[i]->id 
             << ", GPA:" << students[i]->gpa << ")" << endl;
        delete students[i];
    }
    
    return 0;
}</pre>

        <!-- ==================== SECTION 9: STRUCTURE VARIABLES AS FUNCTION PARAMETERS ==================== -->
        <h3>6.2.9 Structure Variables as Function Parameters</h3>
        
        <p>Structures can be passed to functions by value or by pointer/reference.</p>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

struct Rectangle {
    double length;
    double width;
};

struct Student {
    string name;
    int id;
    double gpa;
};

// Pass by value (makes a copy)
double calculateArea(Rectangle r) {
    return r.length * r.width;
}

// Pass by pointer
void updateGPA(Student *s, double newGPA) {
    if (newGPA >= 0.0 && newGPA <= 4.0) {
        s->gpa = newGPA;
    }
}

// Pass by reference (C++ style)
void promoteStudent(Student &s) {
    s.gpa = min(4.0, s.gpa + 0.5);
}

// Return structure
Rectangle createRectangle(double l, double w) {
    Rectangle r;
    r.length = l;
    r.width = w;
    return r;
}

// Return pointer to structure
Student* findBestStudent(Student students[], int size) {
    if (size == 0) return nullptr;
    
    Student *best = &students[0];
    for (int i = 1; i < size; i++) {
        if (students[i].gpa > best->gpa) {
            best = &students[i];
        }
    }
    return best;
}

int main() {
    // Test Rectangle functions
    Rectangle rect = {10.5, 5.2};
    cout << "Rectangle area: " << calculateArea(rect) << endl;
    
    Rectangle newRect = createRectangle(8.0, 6.0);
    cout << "New rectangle: " << newRect.length << " × " << newRect.width << endl;
    
    // Test Student functions
    Student alice = {"Alice", 1001, 3.5};
    cout << "\\nAlice's GPA: " << alice.gpa << endl;
    
    updateGPA(&alice, 3.8);
    cout << "After update: " << alice.gpa << endl;
    
    promoteStudent(alice);
    cout << "After promotion: " << alice.gpa << endl;
    
    // Array of students
    Student students[] = {
        {"Bob", 1002, 3.2},
        {"Charlie", 1003, 3.9},
        {"David", 1004, 3.7}
    };
    
    Student *best = findBestStudent(students, 3);
    if (best) {
        cout << "\\nBest student: " << best->name << " (GPA: " << best->gpa << ")" << endl;
    }
    
    return 0;
}</pre>

        <!-- ==================== SECTION 10: CONST STRUCTURE VARIABLES ==================== -->
        <h3>6.2.10 const Structure Variables</h3>
        
        <p>You can make structure variables constant, preventing modification.</p>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

struct Point {
    int x;
    int y;
};

struct Configuration {
    string serverName;
    int port;
    int timeoutSeconds;
    bool enableLogging;
};

int main() {
    // Constant structure variable
    const Point origin = {0, 0};
    // origin.x = 5;  // ERROR! Can't modify const
    
    const Configuration config = {
        "localhost",
        8080,
        30,
        true
    };
    
    cout << "Server: " << config.serverName << ":" << config.port << endl;
    cout << "Timeout: " << config.timeoutSeconds << " seconds" << endl;
    cout << "Logging: " << (config.enableLogging ? "Enabled" : "Disabled") << endl;
    
    // config.port = 9090;  // ERROR! Can't modify const
    
    // Const with pointers
    const Point *ptr = &origin;  // Pointer to const Point
    // ptr->x = 10;  // ERROR! Can't modify through pointer
    
    Point p = {1, 2};
    Point * const constPtr = &p;  // Const pointer to Point
    constPtr->x = 10;  // OK - can modify point
    // constPtr = &origin;  // ERROR! Can't change pointer itself
    
    return 0;
}</pre>

        <!-- ==================== SECTION 11: COMPLETE EXAMPLE - STUDENT DATABASE ==================== -->
        <h3>6.2.11 Complete Example: Student Database System</h3>
        
        <pre>
// ============================================
// Program: Student Database System
// Author: CS Student
// Description: Demonstrates structure variables
// ============================================

#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;iomanip&gt;
using namespace std;

const int MAX_STUDENTS = 100;

struct Student {
    string name;
    int id;
    double gpa;
    int age;
    char grade;  // Calculated from GPA
};

// Function prototypes
void addStudent(Student students[], int &count);
void displayStudent(const Student &s);
void displayAllStudents(const Student students[], int count);
Student* findStudentById(Student students[], int count, int id);
void calculateGrade(Student &s);
double calculateAverageGPA(const Student students[], int count);
void sortStudentsByGPA(Student students[], int count);

int main() {
    Student students[MAX_STUDENTS];
    int studentCount = 0;
    int choice;
    
    do {
        cout << "\\n===== STUDENT DATABASE SYSTEM =====" << endl;
        cout << "1. Add Student" << endl;
        cout << "2. Display All Students" << endl;
        cout << "3. Search Student by ID" << endl;
        cout << "4. Show Statistics" << endl;
        cout << "5. Sort by GPA" << endl;
        cout << "6. Exit" << endl;
        cout << "Choice: ";
        cin >> choice;
        
        switch (choice) {
            case 1:
                if (studentCount < MAX_STUDENTS) {
                    addStudent(students, studentCount);
                } else {
                    cout << "Database full!" << endl;
                }
                break;
                
            case 2:
                if (studentCount > 0) {
                    displayAllStudents(students, studentCount);
                } else {
                    cout << "No students in database." << endl;
                }
                break;
                
            case 3: {
                int searchId;
                cout << "Enter student ID: ";
                cin >> searchId;
                Student *found = findStudentById(students, studentCount, searchId);
                if (found) {
                    cout << "\\nStudent Found:" << endl;
                    displayStudent(*found);
                } else {
                    cout << "Student not found." << endl;
                }
                break;
            }
            
            case 4:
                if (studentCount > 0) {
                    double avgGPA = calculateAverageGPA(students, studentCount);
                    cout << "\\n=== Statistics ===" << endl;
                    cout << "Total students: " << studentCount << endl;
                    cout << "Average GPA: " << fixed << setprecision(2) << avgGPA << endl;
                    
                    // Find highest GPA
                    double highest = students[0].gpa;
                    string topStudent = students[0].name;
                    for (int i = 1; i < studentCount; i++) {
                        if (students[i].gpa > highest) {
                            highest = students[i].gpa;
                            topStudent = students[i].name;
                        }
                    }
                    cout << "Highest GPA: " << highest << " (" << topStudent << ")" << endl;
                } else {
                    cout << "No students to analyze." << endl;
                }
                break;
                
            case 5:
                if (studentCount > 0) {
                    sortStudentsByGPA(students, studentCount);
                    cout << "Students sorted by GPA." << endl;
                } else {
                    cout << "No students to sort." << endl;
                }
                break;
        }
        
    } while (choice != 6);
    
    return 0;
}

void addStudent(Student students[], int &count) {
    Student &s = students[count];  // Reference to new student
    
    cout << "Enter student name: ";
    cin.ignore();
    getline(cin, s.name);
    
    cout << "Enter student ID: ";
    cin >> s.id;
    
    // Check for duplicate ID
    for (int i = 0; i < count; i++) {
        if (students[i].id == s.id) {
            cout << "Error: ID already exists!" << endl;
            return;
        }
    }
    
    cout << "Enter GPA (0.0-4.0): ";
    cin >> s.gpa;
    while (s.gpa < 0.0 || s.gpa > 4.0) {
        cout << "Invalid GPA. Enter 0.0-4.0: ";
        cin >> s.gpa;
    }
    
    cout << "Enter age: ";
    cin >> s.age;
    
    calculateGrade(s);
    count++;
    cout << "Student added successfully!" << endl;
}

void calculateGrade(Student &s) {
    if (s.gpa >= 3.7) s.grade = 'A';
    else if (s.gpa >= 3.0) s.grade = 'B';
    else if (s.gpa >= 2.0) s.grade = 'C';
    else if (s.gpa >= 1.0) s.grade = 'D';
    else s.grade = 'F';
}

void displayStudent(const Student &s) {
    cout << "Name: " << s.name << endl;
    cout << "ID: " << s.id << endl;
    cout << "GPA: " << fixed << setprecision(2) << s.gpa << endl;
    cout << "Age: " << s.age << endl;
    cout << "Grade: " << s.grade << endl;
    cout << "------------------------" << endl;
}

void displayAllStudents(const Student students[], int count) {
    cout << "\\n=== ALL STUDENTS ===" << endl;
    cout << setw(5) << "ID" << setw(15) << "Name" << setw(8) << "GPA" 
         << setw(6) << "Age" << setw(8) << "Grade" << endl;
    cout << "----------------------------------------" << endl;
    
    for (int i = 0; i < count; i++) {
        cout << setw(5) << students[i].id 
             << setw(15) << students[i].name 
             << setw(8) << fixed << setprecision(2) << students[i].gpa
             << setw(6) << students[i].age
             << setw(8) << students[i].grade << endl;
    }
}

Student* findStudentById(Student students[], int count, int id) {
    for (int i = 0; i < count; i++) {
        if (students[i].id == id) {
            return &students[i];
        }
    }
    return nullptr;
}

double calculateAverageGPA(const Student students[], int count) {
    if (count == 0) return 0.0;
    
    double sum = 0.0;
    for (int i = 0; i < count; i++) {
        sum += students[i].gpa;
    }
    return sum / count;
}

void sortStudentsByGPA(Student students[], int count) {
    for (int i = 0; i < count - 1; i++) {
        for (int j = 0; j < count - i - 1; j++) {
            if (students[j].gpa < students[j+1].gpa) {
                // Swap structures
                Student temp = students[j];
                students[j] = students[j+1];
                students[j+1] = temp;
            }
        }
    }
}</pre>

        <!-- ==================== SECTION 12: SUMMARY ==================== -->
        <h3>6.2.12 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li>Declare structure variables: <code>StructName varName;</code></li>
                <li>Variables can be declared at definition time: <code>struct Name { } var1, var2;</code></li>
                <li><strong>Aggregate initialization:</strong> <code>Student s = {"Alice", 1001, 3.8, 20};</code></li>
                <li><strong>Designated initializers (C++20):</strong> <code>Student s = {.name="Alice", .id=1001};</code></li>
                <li><strong>Default member initialization (C++11):</strong> Provide defaults in structure definition</li>
                <li>Create <strong>arrays of structures</strong> for multiple records</li>
                <li>Use <strong>pointers to structures</strong> with arrow operator <code>-></code></li>
                <li>Pass structures to functions by value, pointer, or reference</li>
                <li>Use <code>const</code> for read-only structure variables</li>
                <li>Structures can be returned from functions</li>
                <li>Memory is allocated when variables are declared, not when structure is defined</li>
            </ul>
        </div>

        <!-- ==================== SECTION 13: EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Define a structure <code>Point</code> with x and y coordinates. Create and initialize three points using different initialization methods.</p>
            
            <p><strong>Exercise 2:</strong> Create a structure <code>Time</code> with hours, minutes, seconds. Write a function that adds two Time objects and returns the result.</p>
            
            <p><strong>Exercise 3:</strong> Define a structure <code>Rectangle</code> with length and width. Create an array of 5 rectangles and find the one with the largest area.</p>
            
            <p><strong>Exercise 4:</strong> Create a structure <code>Employee</code> with name, id, salary. Write functions to give a raise (by percentage) and display employee info.</p>
            
            <p><strong>Exercise 5:</strong> Define a structure <code>Book</code> with title, author, year, price. Create an array of books and sort them by year using pointer operations.</p>
            
            <p><strong>Exercise 6:</strong> Create a structure <code>Student</code> with name, id, marks[5] (array of 5 subjects). Write a function to calculate average marks and assign grade.</p>
            
            <p><strong>Exercise 7:</strong> Define a structure <code>Date</code> with day, month, year. Write a function that returns the difference in days between two dates.</p>
            
            <p><strong>Exercise 8:</strong> Create a structure <code>Inventory</code> with item name, quantity, price. Write functions to add stock, sell items, and display low stock items.</p>
            
            <p><strong>Exercise 9:</strong> Define a structure <code>Fraction</code> with numerator and denominator. Write functions to add, subtract, multiply, and divide fractions.</p>
            
            <p><strong>Exercise 10:</strong> Create a simple phonebook using array of structures. Each entry should have name, phone number, and email. Implement add, search, and display functions.</p>
        </div>

        <!-- ==================== SECTION 14: KEY TERMS ==================== -->
        <h3>6.2.13 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Structure Variable</strong>
                <p style="font-size: 12px;">Instance of a structure</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Aggregate Initialization</strong>
                <p style="font-size: 12px;">Initialize with {} in order</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Designated Initializer</strong>
                <p style="font-size: 12px;">Initialize by member name</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Default Initialization</strong>
                <p style="font-size: 12px;">Members get default values</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Arrow Operator</strong>
                <p style="font-size: 12px;">-> for pointer access</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Dot Operator</strong>
                <p style="font-size: 12px;">. for direct access</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Array of Structures</strong>
                <p style="font-size: 12px;">Multiple structure instances</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Structure Pointer</strong>
                <p style="font-size: 12px;">Pointer to structure variable</p>
            </div>
        </div>
        
        <!-- ==================== PREVIEW OF NEXT SECTION ==================== -->
        <div style="background: linear-gradient(135deg, #667eea20, #764ba220); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">📖 Next: 6.3 Accessing Structure Variable</h4>
            <p>In the next section, we'll learn how to access and manipulate structure members.</p>
        </div>
    `,
    navigation: {
        next: "ch6-3",
        prev: "ch6-1",
        nextTitle: "6.3 Accessing Structure Variable",
        prevTitle: "6.1 Specifying Simple Structure"
    }
};