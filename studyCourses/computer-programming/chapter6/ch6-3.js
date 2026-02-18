// ===============================
// Computer Programming - Chapter 6.3
// Accessing Structure Variable
// ===============================

window.currentSubsectionData = {
    title: "6.3 Accessing Structure Variable",
    content: `
        <h2>6.3 Accessing Structure Variable</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Learn how to access structure members using dot operator</li>
                <li>Understand member access with pointers using arrow operator</li>
                <li>Learn to modify structure members</li>
                <li>Master nested structure member access</li>
                <li>Understand structure assignment and copying</li>
                <li>Learn about member-wise operations</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: DOT OPERATOR (.) ==================== -->
        <h3>6.3.1 Dot Operator (.) - Direct Member Access</h3>
        
        <p>The <strong>dot operator (.)</strong> is used to access members of a structure variable directly. It's the most common way to work with structures.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Syntax:</strong> <code>structureVariable.memberName</code></p>
        </div>
        
        <h4>Basic Member Access:</h4>
        
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

int main() {
    // Create a structure variable
    Student student1;
    
    // Access and assign values using dot operator
    student1.name = "Alice";
    student1.id = 1001;
    student1.gpa = 3.8;
    student1.age = 20;
    
    // Access and display values
    cout << "=== Student Information ===" << endl;
    cout << "Name: " << student1.name << endl;    // Read name
    cout << "ID: " << student1.id << endl;        // Read ID
    cout << "GPA: " << student1.gpa << endl;      // Read GPA
    cout << "Age: " << student1.age << endl;      // Read age
    
    // Modify a member
    student1.gpa = 3.9;  // Update GPA
    cout << "\\nUpdated GPA: " << student1.gpa << endl;
    
    // Use members in expressions
    int nextYear = student1.age + 1;
    cout << "Next year, " << student1.name << " will be " << nextYear << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 2: ARROW OPERATOR (->) ==================== -->
        <h3>6.3.2 Arrow Operator (->) - Pointer Member Access</h3>
        
        <p>When you have a <strong>pointer to a structure</strong>, you use the arrow operator (->) to access its members.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Syntax:</strong> <code>structurePointer->memberName</code></p>
        </div>
        
        <h4>Basic Pointer Access:</h4>
        
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
    Student student1 = {"Alice", 1001, 3.8};
    
    // Pointer to structure
    Student *ptr = &student1;
    
    // Access using arrow operator
    cout << "=== Access Through Pointer ===" << endl;
    cout << "Name: " << ptr->name << endl;      // Arrow operator
    cout << "ID: " << ptr->id << endl;
    cout << "GPA: " << ptr->gpa << endl;
    
    // Modify through pointer
    ptr->gpa = 4.0;  // Update via pointer
    cout << "Updated GPA: " << ptr->gpa << endl;
    cout << "Original student GPA: " << student1.gpa << endl;
    
    // Alternative: dereference then dot
    cout << "\\nUsing dereference: " << (*ptr).name << endl;
    
    // Dynamic allocation
    Student *dynamicStudent = new Student{"Bob", 1002, 3.5};
    cout << "\\nDynamic student: " << dynamicStudent->name << endl;
    delete dynamicStudent;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 3: DOT VS ARROW OPERATOR ==================== -->
        <h3>6.3.3 Dot vs Arrow Operator</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Aspect</th>
                <th style="padding: 10px;">Dot Operator (.)</th>
                <th style="padding: 10px;">Arrow Operator (->)</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Used with</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Structure variable (not pointer)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Pointer to structure</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Syntax</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>student.name</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>ptr->name</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Alternative</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Only way to access directly</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>(*ptr).name</code> (more verbose)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Null safety</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Always safe (variable exists)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Must check for null first</td>
            </tr>
        </table>
        
        <h4>Comparison Example:</h4>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

struct Point {
    int x;
    int y;
};

int main() {
    Point p = {10, 20};
    Point *ptr = &p;
    
    // Dot operator (direct access)
    cout << "Direct access - p.x: " << p.x << endl;
    cout << "Direct access - p.y: " << p.y << endl;
    
    // Arrow operator (pointer access)
    cout << "Pointer access - ptr->x: " << ptr->x << endl;
    cout << "Pointer access - ptr->y: " << ptr->y << endl;
    
    // Dereference then dot (equivalent to arrow)
    cout << "Dereference - (*ptr).x: " << (*ptr).x << endl;
    
    // All three are equivalent:
    p.x = 30;
    ptr->x = 40;
    (*ptr).x = 50;
    
    cout << "\\nFinal value: " << p.x << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 4: ACCESSING NESTED STRUCTURES ==================== -->
        <h3>6.3.4 Accessing Nested Structures</h3>
        
        <p>When structures contain other structures, you use multiple dot operators.</p>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

struct Address {
    string street;
    string city;
    string state;
    int zipCode;
};

struct Person {
    string name;
    int age;
    Address homeAddress;    // Nested structure
    Address workAddress;    // Another nested structure
};

int main() {
    Person person;
    
    // Accessing nested structure members
    person.name = "John Doe";
    person.age = 30;
    
    // Access home address
    person.homeAddress.street = "123 Main St";
    person.homeAddress.city = "Anytown";
    person.homeAddress.state = "CA";
    person.homeAddress.zipCode = 12345;
    
    // Access work address
    person.workAddress.street = "456 Business Ave";
    person.workAddress.city = "Anytown";
    person.workAddress.state = "CA";
    person.workAddress.zipCode = 12346;
    
    // Display all information
    cout << "=== Person Information ===" << endl;
    cout << "Name: " << person.name << endl;
    cout << "Age: " << person.age << endl;
    
    cout << "\\nHome Address:" << endl;
    cout << "  " << person.homeAddress.street << endl;
    cout << "  " << person.homeAddress.city << ", " 
         << person.homeAddress.state << " " << person.homeAddress.zipCode << endl;
    
    cout << "\\nWork Address:" << endl;
    cout << "  " << person.workAddress.street << endl;
    cout << "  " << person.workAddress.city << ", " 
         << person.workAddress.state << " " << person.workAddress.zipCode << endl;
    
    // Access through pointer
    Person *ptr = &person;
    cout << "\\nThrough pointer - City: " << ptr->homeAddress.city << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 5: ACCESSING ARRAYS WITHIN STRUCTURES ==================== -->
        <h3>6.3.5 Accessing Arrays Within Structures</h3>
        
        <p>Structures can contain arrays, which are accessed using both dot operator and array indexing.</p>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

struct Student {
    string name;
    int id;
    double scores[5];  // Array of 5 test scores
    char grades[5];    // Corresponding letter grades
};

struct Classroom {
    string className;
    Student students[30];  // Array of students
    int studentCount;
};

int main() {
    Student student;
    
    // Initialize
    student.name = "Alice";
    student.id = 1001;
    
    // Access array members
    student.scores[0] = 85.5;
    student.scores[1] = 92.0;
    student.scores[2] = 78.5;
    student.scores[3] = 88.0;
    student.scores[4] = 95.5;
    
    // Calculate grades based on scores
    for (int i = 0; i < 5; i++) {
        if (student.scores[i] >= 90) student.grades[i] = 'A';
        else if (student.scores[i] >= 80) student.grades[i] = 'B';
        else if (student.scores[i] >= 70) student.grades[i] = 'C';
        else if (student.scores[i] >= 60) student.grades[i] = 'D';
        else student.grades[i] = 'F';
    }
    
    // Display all scores and grades
    cout << "=== Student: " << student.name << " (ID: " << student.id << ") ===" << endl;
    for (int i = 0; i < 5; i++) {
        cout << "Test " << i+1 << ": " << student.scores[i] 
             << " -> Grade: " << student.grades[i] << endl;
    }
    
    // Calculate average
    double sum = 0;
    for (int i = 0; i < 5; i++) {
        sum += student.scores[i];
    }
    double average = sum / 5;
    cout << "\\nAverage: " << average << endl;
    
    // Classroom example
    Classroom cs101;
    cs101.className = "Computer Science 101";
    cs101.studentCount = 0;
    
    // Add a student to classroom
    cs101.students[cs101.studentCount++] = student;
    
    // Access array of structures
    cout << "\\n=== Classroom: " << cs101.className << " ===" << endl;
    for (int i = 0; i < cs101.studentCount; i++) {
        cout << cs101.students[i].name << " - ID: " << cs101.students[i].id << endl;
    }
    
    return 0;
}</pre>

        <!-- ==================== SECTION 6: MODIFYING STRUCTURE MEMBERS ==================== -->
        <h3>6.3.6 Modifying Structure Members</h3>
        
        <p>Structure members can be modified directly or through pointers.</p>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

struct BankAccount {
    string accountNumber;
    string accountHolder;
    double balance;
    double interestRate;
};

void deposit(BankAccount &acc, double amount) {
    if (amount > 0) {
        acc.balance += amount;
        cout << "Deposited $" << amount << ". New balance: $" << acc.balance << endl;
    }
}

void withdraw(BankAccount &acc, double amount) {
    if (amount > 0 && amount <= acc.balance) {
        acc.balance -= amount;
        cout << "Withdrew $" << amount << ". New balance: $" << acc.balance << endl;
    } else {
        cout << "Insufficient funds!" << endl;
    }
}

void applyInterest(BankAccount *acc) {
    double interest = acc->balance * acc->interestRate;
    acc->balance += interest;
    cout << "Applied interest: $" << interest << endl;
}

int main() {
    BankAccount account = {"12345678", "Alice", 1000.0, 0.05};
    
    cout << "Initial balance: $" << account.balance << endl;
    
    // Direct modification
    account.balance += 500;
    cout << "After direct addition: $" << account.balance << endl;
    
    // Modification through function (by reference)
    deposit(account, 200);
    
    // Modification through function (by pointer)
    withdraw(&account, 300);
    
    // Apply interest through pointer
    applyInterest(&account);
    
    cout << "\\nFinal account status:" << endl;
    cout << "Holder: " << account.accountHolder << endl;
    cout << "Account: " << account.accountNumber << endl;
    cout << "Balance: $" << account.balance << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 7: STRUCTURE ASSIGNMENT ==================== -->
        <h3>6.3.7 Structure Assignment</h3>
        
        <p>Structures can be assigned to each other. This performs a <strong>member-wise copy</strong>.</p>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

struct Point {
    int x;
    int y;
};

struct Rectangle {
    Point topLeft;
    Point bottomRight;
    string color;
};

int main() {
    // Original structure
    Point p1 = {10, 20};
    
    // Assignment - copies all members
    Point p2 = p1;  // p2 now has x=10, y=20
    
    cout << "p1: (" << p1.x << ", " << p1.y << ")" << endl;
    cout << "p2: (" << p2.x << ", " << p2.y << ")" << endl;
    
    // Modify p2 - p1 remains unchanged
    p2.x = 30;
    cout << "\\nAfter modifying p2:" << endl;
    cout << "p1: (" << p1.x << ", " << p1.y << ")" << endl;
    cout << "p2: (" << p2.x << ", " << p2.y << ")" << endl;
    
    // Assignment with nested structures
    Rectangle rect1 = {{0, 0}, {100, 100}, "red"};
    Rectangle rect2 = rect1;  // Copies entire structure including nested points
    
    cout << "\\nRectangle 1: " << rect1.color << " from (" 
         << rect1.topLeft.x << "," << rect1.topLeft.y << ") to (" 
         << rect1.bottomRight.x << "," << rect1.bottomRight.y << ")" << endl;
    
    cout << "Rectangle 2: " << rect2.color << " from (" 
         << rect2.topLeft.x << "," << rect2.topLeft.y << ") to (" 
         << rect2.bottomRight.x << "," << rect2.bottomRight.y << ")" << endl;
    
    // Modify rect2
    rect2.color = "blue";
    rect2.topLeft.x = 50;
    
    cout << "\\nAfter modifying rect2:" << endl;
    cout << "Rect1 color: " << rect1.color << endl;
    cout << "Rect2 color: " << rect2.color << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 8: COMPARING STRUCTURES ==================== -->
        <h3>6.3.8 Comparing Structures</h3>
        
        <p>You cannot compare structures directly with == or !=. You must compare member by member.</p>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

struct Point {
    int x;
    int y;
};

struct Student {
    string name;
    int id;
    double gpa;
};

// Function to compare two points
bool arePointsEqual(Point p1, Point p2) {
    return (p1.x == p2.x && p1.y == p2.y);
}

// Function to compare two students
bool areStudentsEqual(Student s1, Student s2) {
    return (s1.id == s2.id);  // Usually compare by ID
}

int main() {
    Point a = {10, 20};
    Point b = {10, 20};
    Point c = {15, 25};
    
    // Cannot do: if (a == b) - ERROR!
    
    if (arePointsEqual(a, b)) {
        cout << "Points a and b are equal" << endl;
    } else {
        cout << "Points a and b are different" << endl;
    }
    
    if (arePointsEqual(a, c)) {
        cout << "Points a and c are equal" << endl;
    } else {
        cout << "Points a and c are different" << endl;
    }
    
    // Students example
    Student s1 = {"Alice", 1001, 3.8};
    Student s2 = {"Alice", 1001, 3.9};  // Same ID, different GPA
    Student s3 = {"Bob", 1002, 3.5};
    
    if (areStudentsEqual(s1, s2)) {
        cout << "s1 and s2 are the same student (same ID)" << endl;
    }
    
    if (!areStudentsEqual(s1, s3)) {
        cout << "s1 and s3 are different students" << endl;
    }
    
    return 0;
}</pre>

        <!-- ==================== SECTION 9: INPUT/OUTPUT WITH STRUCTURES ==================== -->
        <h3>6.3.9 Input/Output with Structures</h3>
        
        <p>You can read structure members from user input and write them to output.</p>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;iomanip&gt;
using namespace std;

struct Product {
    string name;
    double price;
    int quantity;
    string category;
};

void inputProduct(Product &p) {
    cout << "Enter product name: ";
    getline(cin, p.name);
    
    cout << "Enter price: $";
    cin >> p.price;
    
    cout << "Enter quantity: ";
    cin >> p.quantity;
    
    cout << "Enter category: ";
    cin.ignore();  // Clear newline
    getline(cin, p.category);
}

void displayProduct(const Product &p) {
    cout << fixed << setprecision(2);
    cout << "\\n=== Product Information ===" << endl;
    cout << "Name: " << p.name << endl;
    cout << "Price: $" << p.price << endl;
    cout << "Quantity: " << p.quantity << endl;
    cout << "Category: " << p.category << endl;
    cout << "Total value: $" << p.price * p.quantity << endl;
}

int main() {
    Product product;
    
    cout << "=== Product Input ===" << endl;
    inputProduct(product);
    
    displayProduct(product);
    
    // Array of products
    const int SIZE = 3;
    Product inventory[SIZE];
    
    cout << "\\n=== Inventory Input ===" << endl;
    for (int i = 0; i < SIZE; i++) {
        cout << "\\nProduct " << i+1 << ":" << endl;
        cin.ignore();  // Clear buffer
        inputProduct(inventory[i]);
    }
    
    cout << "\\n=== Inventory Summary ===" << endl;
    double totalValue = 0;
    for (int i = 0; i < SIZE; i++) {
        displayProduct(inventory[i]);
        totalValue += inventory[i].price * inventory[i].quantity;
    }
    
    cout << "\\nTotal inventory value: $" << fixed << setprecision(2) << totalValue << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 10: STRUCTURE POINTERS AND DYNAMIC MEMORY ==================== -->
        <h3>6.3.10 Structure Pointers and Dynamic Memory</h3>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

struct Node {
    int data;
    Node *next;  // Pointer to next node (self-referential)
};

struct Student {
    string name;
    int id;
    double *scores;  // Dynamic array of scores
    int numScores;
};

int main() {
    // Self-referential structure (linked list node)
    Node *head = new Node;
    head->data = 10;
    head->next = nullptr;
    
    Node *second = new Node;
    second->data = 20;
    second->next = nullptr;
    head->next = second;
    
    Node *third = new Node;
    third->data = 30;
    third->next = nullptr;
    second->next = third;
    
    // Traverse the linked list
    cout << "Linked list: ";
    Node *current = head;
    while (current != nullptr) {
        cout << current->data << " ";
        current = current->next;
    }
    cout << endl;
    
    // Clean up linked list
    current = head;
    while (current != nullptr) {
        Node *temp = current;
        current = current->next;
        delete temp;
    }
    
    // Structure with dynamic array
    Student *s = new Student;
    s->name = "Alice";
    s->id = 1001;
    s->numScores = 5;
    s->scores = new double[s->numScores];
    
    // Initialize scores
    for (int i = 0; i < s->numScores; i++) {
        s->scores[i] = 70 + i * 5;
    }
    
    // Display student with scores
    cout << "\\nStudent: " << s->name << " (ID: " << s->id << ")" << endl;
    cout << "Scores: ";
    for (int i = 0; i < s->numScores; i++) {
        cout << s->scores[i] << " ";
    }
    cout << endl;
    
    // Calculate average
    double sum = 0;
    for (int i = 0; i < s->numScores; i++) {
        sum += s->scores[i];
    }
    cout << "Average: " << sum / s->numScores << endl;
    
    // Clean up dynamic memory
    delete[] s->scores;
    delete s;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 11: COMPLETE EXAMPLE - BANKING SYSTEM ==================== -->
        <h3>6.3.11 Complete Example: Banking System</h3>
        
        <pre>
// ============================================
// Program: Banking System
// Author: CS Student
// Description: Demonstrates structure member access
// ============================================

#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;iomanip&gt;
#include &lt;vector&gt;
using namespace std;

struct Date {
    int day;
    int month;
    int year;
    
    void display() {
        cout << setw(2) << setfill('0') << day << "/"
             << setw(2) << setfill('0') << month << "/"
             << year;
    }
};

struct Transaction {
    string type;        // "Deposit", "Withdrawal", "Transfer"
    double amount;
    Date date;
    string description;
    
    void display() {
        cout << date.day << "/" << date.month << "/" << date.year << " - "
             << setw(10) << type << ": $" << fixed << setprecision(2) << amount
             << " (" << description << ")";
    }
};

struct Account {
    string accountNumber;
    string accountHolder;
    double balance;
    double interestRate;
    vector<Transaction> transactions;  // History of transactions
    
    void deposit(double amount, string desc = "Deposit") {
        if (amount > 0) {
            balance += amount;
            
            Transaction t;
            t.type = "Deposit";
            t.amount = amount;
            t.date = {28, 2, 2024};  // Current date (simplified)
            t.description = desc;
            transactions.push_back(t);
            
            cout << "Deposited $" << amount << ". New balance: $" << balance << endl;
        }
    }
    
    bool withdraw(double amount, string desc = "Withdrawal") {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            
            Transaction t;
            t.type = "Withdrawal";
            t.amount = amount;
            t.date = {28, 2, 2024};
            t.description = desc;
            transactions.push_back(t);
            
            cout << "Withdrew $" << amount << ". New balance: $" << balance << endl;
            return true;
        }
        cout << "Insufficient funds!" << endl;
        return false;
    }
    
    void applyInterest() {
        double interest = balance * interestRate;
        deposit(interest, "Interest earned");
        cout << "Interest applied: $" << interest << endl;
    }
    
    void display() {
        cout << "\\n=== Account Information ===" << endl;
        cout << "Account Number: " << accountNumber << endl;
        cout << "Account Holder: " << accountHolder << endl;
        cout << "Balance: $" << fixed << setprecision(2) << balance << endl;
        cout << "Interest Rate: " << interestRate * 100 << "%" << endl;
    }
    
    void displayTransactions() {
        cout << "\\n=== Transaction History ===" << endl;
        if (transactions.empty()) {
            cout << "No transactions yet." << endl;
            return;
        }
        
        for (size_t i = 0; i < transactions.size(); i++) {
            cout << i+1 << ". ";
            transactions[i].display();
            cout << endl;
        }
    }
    
    bool transferTo(Account &other, double amount) {
        if (withdraw(amount, "Transfer to " + other.accountNumber)) {
            other.deposit(amount, "Transfer from " + accountNumber);
            return true;
        }
        return false;
    }
};

int main() {
    cout << "===== BANKING SYSTEM =====" << endl;
    
    // Create accounts
    Account acc1;
    acc1.accountNumber = "1001-1234";
    acc1.accountHolder = "Alice Smith";
    acc1.balance = 1000.0;
    acc1.interestRate = 0.03;  // 3%
    
    Account acc2;
    acc2.accountNumber = "1002-5678";
    acc2.accountHolder = "Bob Johnson";
    acc2.balance = 500.0;
    acc2.interestRate = 0.02;  // 2%
    
    // Access and modify acc1
    cout << "\\n--- Initial Accounts ---" << endl;
    acc1.display();
    acc2.display();
    
    // Perform transactions using member access
    cout << "\\n--- Transactions ---" << endl;
    acc1.deposit(500, "Salary deposit");
    acc1.withdraw(200, "ATM withdrawal");
    acc2.deposit(100, "Gift from grandma");
    
    // Transfer between accounts
    cout << "\\n--- Transfer ---" << endl;
    acc1.transferTo(acc2, 300);
    
    // Apply interest
    cout << "\\n--- Applying Interest ---" << endl;
    acc1.applyInterest();
    acc2.applyInterest();
    
    // Display final status
    cout << "\\n--- Final Account Status ---" << endl;
    acc1.display();
    acc2.display();
    
    // Show transaction history
    acc1.displayTransactions();
    acc2.displayTransactions();
    
    // Access through pointers
    cout << "\\n--- Access Through Pointers ---" << endl;
    Account *ptr = &acc1;
    cout << "Using pointer: " << ptr->accountHolder 
         << " has $" << ptr->balance << endl;
    
    // Modify through pointer
    ptr->balance += 100;
    cout << "After pointer modification: $" << acc1.balance << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 12: SUMMARY ==================== -->
        <h3>6.3.12 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li><strong>Dot operator (.)</strong> - access members directly: <code>student.name</code></li>
                <li><strong>Arrow operator (->)</strong> - access members through pointers: <code>ptr->name</code></li>
                <li><strong>Nested structures</strong> - use multiple dots: <code>person.address.city</code></li>
                <li><strong>Arrays in structures</strong> - combine dot with array indexing: <code>student.scores[i]</code></li>
                <li>Structure members can be read, modified, and used in expressions like any variable</li>
                <li><strong>Structure assignment</strong> performs member-wise copy</li>
                <li>Structures cannot be compared directly; compare member by member</li>
                <li>Structures can contain pointers, including self-referential pointers</li>
                <li>Dynamic memory can be managed within structures (remember to clean up!)</li>
                <li>Structures can have member functions (as shown in the banking example)</li>
                <li>Access through pointers is efficient and allows dynamic allocation</li>
            </ul>
        </div>

        <!-- ==================== SECTION 13: EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Create a structure <code>Time</code> with hours, minutes, seconds. Write functions to add two times, display time, and compare times.</p>
            
            <p><strong>Exercise 2:</strong> Define a structure <code>Complex</code> for complex numbers (real and imaginary parts). Write functions to add, subtract, multiply, and display complex numbers.</p>
            
            <p><strong>Exercise 3:</strong> Create a structure <code>Employee</code> with name, id, salary, and a nested <code>Date</code> structure for hire date. Write a function that gives a raise based on years of service.</p>
            
            <p><strong>Exercise 4:</strong> Implement a simple phonebook using array of structures. Each entry has name, phone, email. Implement search by name and display all entries.</p>
            
            <p><strong>Exercise 5:</strong> Create a structure <code>Matrix</code> that contains a 2D array and dimensions. Write functions to add, multiply, and display matrices.</p>
            
            <p><strong>Exercise 6:</strong> Define a structure <code>Student</code> with name, id, and an array of 5 grades. Write functions to calculate average, assign letter grade, and display student info.</p>
            
            <p><strong>Exercise 7:</strong> Create a simple linked list using a self-referential structure. Write functions to insert, delete, and display all nodes.</p>
            
            <p><strong>Exercise 8:</strong> Define a structure <code>Rectangle</code> with two <code>Point</code> structures (top-left, bottom-right). Write functions to calculate area, perimeter, and check if a point is inside.</p>
            
            <p><strong>Exercise 9:</strong> Create a structure <code>Inventory</code> with item name, quantity, price, and a pointer to the next item (linked list). Implement add, remove, and display functions.</p>
            
            <p><strong>Exercise 10:</strong> Enhance the banking system example with additional features: search account by number, calculate total deposits/withdrawals, and generate monthly statement.</p>
        </div>

        <!-- ==================== SECTION 14: KEY TERMS ==================== -->
        <h3>6.3.13 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Dot Operator</strong>
                <p style="font-size: 12px;">Direct member access (.)</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Arrow Operator</strong>
                <p style="font-size: 12px;">Pointer member access (->)</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Member Access</strong>
                <p style="font-size: 12px;">Reading/writing structure members</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Nested Access</strong>
                <p style="font-size: 12px;">Accessing inner structures</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Member-wise Copy</strong>
                <p style="font-size: 12px;">Structure assignment</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Self-referential</strong>
                <p style="font-size: 12px;">Structure pointing to itself</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Member Function</strong>
                <p style="font-size: 12px;">Function inside structure</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Dereference</strong>
                <p style="font-size: 12px;">Getting value from pointer</p>
            </div>
        </div>
        
        <!-- ==================== END OF CHAPTER 6 ==================== -->
        <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 30px; border-radius: 15px; margin: 40px 0; text-align: center; color: white;">
            <h3 style="margin: 0 0 15px 0;">📚 End of Chapter 6</h3>
            <p style="font-size: 18px; margin: 0 0 20px 0;">You have completed Chapter 6: Structure!</p>
            <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">6.1 Specifying Simple Structure ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">6.2 Defining Structure Variable ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">6.3 Accessing Structure Variable ✓</span>
            </div>
            <p style="margin-top: 30px;">Ready for Chapter 7: Object-Oriented Programming!</p>
        </div>
    `,
    navigation: {
        next: null,
        prev: "ch6-2",
        nextTitle: null,
        prevTitle: "6.2 Defining a Structure Variable"
    }
};