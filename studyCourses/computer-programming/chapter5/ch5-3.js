// ===============================
// Computer Programming - Chapter 5.3
// Address and Pointer
// ===============================

window.currentSubsectionData = {
    title: "5.3 Address and Pointer",
    content: `
        <h2>5.3 Address and Pointer</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand what memory addresses are</li>
                <li>Learn what pointers are and why they are powerful</li>
                <li>Master pointer declaration and initialization</li>
                <li>Understand the address-of operator (&) and dereference operator (*)</li>
                <li>Learn about null pointers and pointer safety</li>
                <li>Understand pointer arithmetic</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: INTRODUCTION TO MEMORY ADDRESSES ==================== -->
        <h3>5.3.1 What is a Memory Address?</h3>
        
        <p>Every variable in your program is stored somewhere in your computer's memory. Each memory location has a unique <strong>address</strong> that identifies where the variable is located. Think of memory like a huge apartment building, where each apartment has a unique number (address).</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> A memory address is a unique identifier for a specific location in computer memory where data is stored.</p>
        </div>
        
        <h4>Analogy: Street Addresses</h4>
        <ul>
            <li>Your house has a <strong>street address</strong> that tells people where you live</li>
            <li>Variables have <strong>memory addresses</strong> that tell the computer where the data is stored</li>
            <li>Just as you can give someone your address so they can visit you, you can store an address in a pointer to access that variable</li>
        </ul>
        
        <h4>The Address-of Operator (&)</h4>
        
        <p>The <strong>address-of operator (&)</strong> gives you the memory address of a variable.</p>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int age = 25;
    double price = 19.99;
    char grade = 'A';
    
    cout << "Value of age: " << age << endl;
    cout << "Address of age: " << &age << endl;  // Prints memory address
    
    cout << "\\nValue of price: " << price << endl;
    cout << "Address of price: " << &price << endl;
    
    cout << "\\nValue of grade: " << grade << endl;
    cout << "Address of grade: " << (void*)&grade << endl;  // Special handling for char
    
    return 0;
}</pre>
        
        <p><strong>Sample Output:</strong></p>
        <pre>
Value of age: 25
Address of age: 0x7ffd5a8e4a3c

Value of price: 19.99
Address of price: 0x7ffd5a8e4a40

Value of grade: A
Address of grade: 0x7ffd5a8e4a3b</pre>
        
        <p>Note: Addresses will look different on your computer. They are shown in <strong>hexadecimal</strong> (base-16) format.</p>

        <!-- ==================== SECTION 2: WHAT IS A POINTER? ==================== -->
        <h3>5.3.2 What is a Pointer?</h3>
        
        <p>A <strong>pointer</strong> is a variable that stores a memory address. Instead of storing a value like an integer or double, a pointer stores the location where another variable is stored.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> A pointer is a variable that holds the memory address of another variable.</p>
        </div>
        
        <h4>Analogy: A Business Card</h4>
        <p>Think of a pointer like a business card:</p>
        <ul>
            <li>The <strong>business card</strong> itself is the pointer variable</li>
            <li>The <strong>address on the card</strong> is the address stored in the pointer</li>
            <li>The <strong>business location</strong> is the actual variable being pointed to</li>
            <li>You can give someone the business card, and they can find the business</li>
        </ul>
        
        <h4>Visual Representation:</h4>
        
        <pre>
        Variable:            Pointer:
        ┌─────────┐          ┌─────────┐
        │ value:  │          │ points │
        │   25    │          │   to    │
        └────┬────┘          └────┬────┘
             │                    │
             └────────────────────┘
        Address: 0x1000      Address: 0x2000
        (stores value 25)    (stores address 0x1000)</pre>

        <!-- ==================== SECTION 3: DECLARING POINTERS ==================== -->
        <h3>5.3.3 Declaring Pointers</h3>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Syntax:</strong> <code>data_type *pointer_name;</code></p>
        </div>
        
        <p>The asterisk (*) indicates that the variable is a pointer to a specific data type.</p>
        
        <h4>Examples:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Declaring pointers to different types
    int *ptrInt;        // Pointer to an integer
    double *ptrDouble;  // Pointer to a double
    char *ptrChar;      // Pointer to a character
    bool *ptrBool;      // Pointer to a boolean
    
    // Multiple pointers in one line
    int *p1, *p2, *p3;  // All three are pointers
    
    // Common mistake - only p1 is a pointer!
    int* p4, p5;        // p4 is pointer, p5 is regular int!
    
    cout << "Pointers declared but not initialized" << endl;
    cout << "They contain garbage addresses!" << endl;
    
    return 0;
}</pre>
        
        <div class="warning-box" style="background: #ffe8e8; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #f5576c;">
            <p><strong>⚠️ Important:</strong> Declaring a pointer does not create the variable it points to! Uninitialized pointers contain random addresses and using them is dangerous.</p>
        </div>

        <!-- ==================== SECTION 4: INITIALIZING POINTERS ==================== -->
        <h3>5.3.4 Initializing Pointers</h3>
        
        <p>Pointers are initialized with the address of a variable using the address-of operator (&).</p>
        
        <h4>Example 1: Basic Pointer Initialization</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int number = 42;
    int *ptr = &number;  // ptr now holds the address of number
    
    cout << "Value of number: " << number << endl;
    cout << "Address of number: " << &number << endl;
    cout << "Value stored in ptr: " << ptr << endl;
    cout << "Address of ptr itself: " << &ptr << endl;
    
    return 0;
}</pre>
        
        <h4>Example 2: Multiple Pointers to Same Variable</h4>
        
        <pre>
int value = 100;
int *p1 = &value;
int *p2 = &value;  // Both point to the same variable

cout << "p1: " << p1 << ", p2: " << p2 << endl;  // Same address</pre>
        
        <h4>Example 3: Pointer Initialization with Different Types</h4>
        
        <pre>
int i = 10;
double d = 3.14;
char c = 'Z';

int *iPtr = &i;      // OK - int pointer to int
double *dPtr = &d;   // OK - double pointer to double
// int *wrongPtr = &d;  // ERROR! Cannot mix types</pre>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Note:</strong> Pointers must point to variables of the same type. An int* cannot point to a double.</p>
        </div>

        <!-- ==================== SECTION 5: DEREFERENCING POINTERS ==================== -->
        <h3>5.3.5 Dereferencing Pointers</h3>
        
        <p><strong>Dereferencing</strong> a pointer means accessing the value stored at the address the pointer holds. The dereference operator (*) is used.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Syntax:</strong> <code>*pointer_name</code> gives the value at the pointed-to address.</p>
        </div>
        
        <h4>Example: Dereferencing</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int number = 42;
    int *ptr = &number;
    
    cout << "Value of number: " << number << endl;
    cout << "Address stored in ptr: " << ptr << endl;
    cout << "Value at that address (*ptr): " << *ptr << endl;
    
    // Changing value through pointer
    *ptr = 100;  // This changes number!
    
    cout << "\\nAfter *ptr = 100:" << endl;
    cout << "Value of number: " << number << endl;
    cout << "Value at *ptr: " << *ptr << endl;
    
    return 0;
}</pre>
        
        <p><strong>Output:</strong></p>
        <pre>
Value of number: 42
Address stored in ptr: 0x7ffd5a8e4a3c
Value at that address (*ptr): 42

After *ptr = 100:
Value of number: 100
Value at *ptr: 100</pre>
        
        <h4>Visual Representation of Dereferencing:</h4>
        
        <pre>
int number = 42;
int *ptr = &number;

Memory:
Address: 0x1000              Address: 0x2000
┌─────────┐                  ┌─────────┐
│ number  │                  │   ptr   │
│   42    │                  │  0x1000 │
└─────────┘                  └─────────┘

*ptr = 100;  // Go to address 0x1000 and set value to 100

After:
Address: 0x1000              Address: 0x2000
┌─────────┐                  ┌─────────┐
│ number  │                  │   ptr   │
│   100   │                  │  0x1000 │
└─────────┘                  └─────────┘</pre>

        <!-- ==================== SECTION 6: NULL POINTERS ==================== -->
        <h3>5.3.6 Null Pointers</h3>
        
        <p>A <strong>null pointer</strong> is a pointer that doesn't point to any valid memory location. It's a safe way to indicate that the pointer isn't currently pointing to anything.</p>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int *ptr1 = nullptr;    // Modern C++ (C++11)
    int *ptr2 = NULL;       // Old C-style
    int *ptr3 = 0;          // Also valid
    
    if (ptr1 == nullptr) {
        cout << "ptr1 is null, not pointing anywhere" << endl;
    }
    
    // DANGER! Never dereference a null pointer!
    // cout << *ptr1;  // This would crash!
    
    return 0;
}</pre>
        
        <div class="warning-box" style="background: #ffe8e8; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #f5576c;">
            <p><strong>⚠️ Critical:</strong> Always check if a pointer is null before dereferencing it. Dereferencing a null pointer causes your program to crash.</p>
            <pre>
if (ptr != nullptr) {
    cout << *ptr;  // Safe
} else {
    cout << "Pointer is null";
}</pre>
        </div>

        <!-- ==================== SECTION 7: POINTERS TO DIFFERENT TYPES ==================== -->
        <h3>5.3.7 Pointers to Different Data Types</h3>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int i = 42;
    double d = 3.14159;
    char c = 'X';
    bool b = true;
    
    int *iPtr = &i;
    double *dPtr = &d;
    char *cPtr = &c;
    bool *bPtr = &b;
    
    cout << "int value: " << i << ", via pointer: " << *iPtr << endl;
    cout << "double value: " << d << ", via pointer: " << *dPtr << endl;
    cout << "char value: " << c << ", via pointer: " << *cPtr << endl;
    cout << "bool value: " << b << ", via pointer: " << *bPtr << endl;
    
    // Modifying through pointers
    *iPtr = 100;
    *dPtr = 2.71828;
    *cPtr = 'Y';
    *bPtr = false;
    
    cout << "\\nAfter modification:" << endl;
    cout << "i: " << i << ", d: " << d << ", c: " << c << ", b: " << b << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 8: POINTER ARITHMETIC ==================== -->
        <h3>5.3.8 Pointer Arithmetic</h3>
        
        <p>Pointers support arithmetic operations like increment (++), decrement (--), addition, and subtraction. When you add 1 to a pointer, it moves to the next memory location for that type.</p>
        
        <h4>Example: Pointer Increment</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int numbers[] = {10, 20, 30, 40, 50};
    int *ptr = numbers;  // Points to first element
    
    cout << "Pointer points to: " << *ptr << endl;
    
    ptr++;  // Move to next integer (4 bytes forward)
    cout << "After ptr++, points to: " << *ptr << endl;
    
    ptr += 2;  // Move forward 2 integers (8 bytes)
    cout << "After ptr += 2, points to: " << *ptr << endl;
    
    ptr--;  // Move back one integer
    cout << "After ptr--, points to: " << *ptr << endl;
    
    // Pointer difference
    int *start = numbers;
    int *end = &numbers[4];
    cout << "Number of elements between: " << end - start << endl;
    
    return 0;
}</pre>
        
        <h4>Important: Pointer Arithmetic Depends on Type</h4>
        
        <pre>
int *iPtr;
double *dPtr;

// iPtr++ advances by sizeof(int) bytes (usually 4)
// dPtr++ advances by sizeof(double) bytes (usually 8)

cout << "Size of int: " << sizeof(int) << " bytes" << endl;
cout << "Size of double: " << sizeof(double) << " bytes" << endl;
// Increment moves by these amounts</pre>
        
        <h4>Visualizing Pointer Arithmetic:</h4>
        
        <pre>
int arr[5] = {10, 20, 30, 40, 50};
int *p = arr;  // points to arr[0]

Memory layout (assuming int is 4 bytes):
Address: 0x1000  0x1004  0x1008  0x100C  0x1010
Content: [10]    [20]    [30]    [40]    [50]
         ↑
         p (0x1000)

p++:
        0x1000  0x1004  0x1008  0x100C  0x1010
        [10]    [20]    [30]    [40]    [50]
                 ↑
                 p (0x1004)

p += 2:
        0x1000  0x1004  0x1008  0x100C  0x1010
        [10]    [20]    [30]    [40]    [50]
                         ↑
                         p (0x1008)</pre>

        <!-- ==================== SECTION 9: COMMON POINTER MISTAKES ==================== -->
        <h3>5.3.9 Common Pointer Mistakes</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Mistake</th>
                <th style="padding: 10px;">Wrong Code</th>
                <th style="padding: 10px;">Correct Code</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Uninitialized pointer</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int *ptr; *ptr = 10;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int x; int *ptr = &x; *ptr = 10;</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Dereferencing null pointer</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int *p = nullptr; cout << *p;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>if (p) cout << *p;</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Confusing & and *</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int x; int *p = *x;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int x; int *p = &x;</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Type mismatch</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>double d; int *p = &d;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>double d; double *p = &d;</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Forgetting to dereference</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int x=5; int *p=&x; cout << p;</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>cout << *p;</code></td>
            </tr>
        </table>

        <!-- ==================== SECTION 10: POINTERS AND CONST ==================== -->
        <h3>5.3.10 Pointers and const</h3>
        
        <p>const can be used with pointers in several ways:</p>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int value = 10;
    int another = 20;
    
    // 1. Pointer to constant data (data cannot be changed)
    const int *ptr1 = &value;
    // *ptr1 = 15;  // ERROR! Can't change data
    ptr1 = &another;  // OK - can point somewhere else
    
    // 2. Constant pointer (pointer cannot change)
    int * const ptr2 = &value;
    *ptr2 = 15;  // OK - can change data
    // ptr2 = &another;  // ERROR! Can't change pointer
    
    // 3. Constant pointer to constant data
    const int * const ptr3 = &value;
    // *ptr3 = 15;  // ERROR! Can't change data
    // ptr3 = &another;  // ERROR! Can't change pointer
    
    return 0;
}</pre>
        
        <h4>Summary of const with Pointers:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Declaration</th>
                <th style="padding: 10px;">Can change pointer?</th>
                <th style="padding: 10px;">Can change data?</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>const int *p</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Yes</td>
                <td style="padding: 10px; border: 1px solid #ddd;">No</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int * const p</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">No</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Yes</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>const int * const p</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">No</td>
                <td style="padding: 10px; border: 1px solid #ddd;">No</td>
            </tr>
        </table>

        <!-- ==================== SECTION 11: COMPLETE EXAMPLE ==================== -->
        <h3>5.3.11 Complete Example: Pointer Demonstration</h3>
        
        <pre>
// ============================================
// Program: Pointer Demonstration
// Author: CS Student
// Description: Comprehensive pointer examples
// ============================================

#include &lt;iostream&gt;
using namespace std;

int main() {
    cout << "===== POINTER DEMONSTRATION =====" << endl;
    
    // Basic pointer concepts
    int number = 42;
    int *ptr = &number;
    
    cout << "\\n--- Basic Pointer Concepts ---" << endl;
    cout << "Value of number: " << number << endl;
    cout << "Address of number: " << &number << endl;
    cout << "Value stored in ptr: " << ptr << endl;
    cout << "Value pointed to by ptr: " << *ptr << endl;
    
    // Modifying through pointer
    *ptr = 100;
    cout << "\\nAfter *ptr = 100:" << endl;
    cout << "number is now: " << number << endl;
    
    // Multiple pointers
    int *ptr2 = &number;
    int *ptr3 = ptr;  // Copy pointer
    
    cout << "\\n--- Multiple Pointers ---" << endl;
    cout << "ptr: " << ptr << ", *ptr: " << *ptr << endl;
    cout << "ptr2: " << ptr2 << ", *ptr2: " << *ptr2 << endl;
    cout << "ptr3: " << ptr3 << ", *ptr3: " << *ptr3 << endl;
    
    // Pointers to different types
    double pi = 3.14159;
    char letter = 'Z';
    bool flag = true;
    
    double *dPtr = &pi;
    char *cPtr = &letter;
    bool *bPtr = &flag;
    
    cout << "\\n--- Different Types ---" << endl;
    cout << "double: " << *dPtr << endl;
    cout << "char: " << *cPtr << endl;
    cout << "bool: " << *bPtr << endl;
    
    // Null pointers
    int *nullPtr = nullptr;
    cout << "\\n--- Null Pointers ---" << endl;
    cout << "nullPtr value: " << nullPtr << endl;
    
    if (nullPtr == nullptr) {
        cout << "nullPtr is null (safe)" << endl;
    }
    
    // Pointer arithmetic
    int numbers[] = {10, 20, 30, 40, 50};
    int *arrPtr = numbers;
    
    cout << "\\n--- Pointer Arithmetic ---" << endl;
    cout << "Array elements: ";
    for (int i = 0; i < 5; i++) {
        cout << *(arrPtr + i) << " ";
    }
    cout << endl;
    
    // Walking through array with pointer
    cout << "Walking through array: ";
    int *walk = numbers;
    for (int i = 0; i < 5; i++) {
        cout << *walk << " ";
        walk++;
    }
    cout << endl;
    
    // Pointer differences
    int *first = numbers;
    int *last = &numbers[4];
    cout << "Distance between first and last: " << last - first << " elements" << endl;
    
    // Size of pointers (all pointers are same size)
    cout << "\\n--- Pointer Sizes ---" << endl;
    cout << "Size of int*: " << sizeof(int*) << " bytes" << endl;
    cout << "Size of double*: " << sizeof(double*) << " bytes" << endl;
    cout << "Size of char*: " << sizeof(char*) << " bytes" << endl;
    
    // const with pointers
    int x = 10, y = 20;
    
    cout << "\\n--- const Pointers ---" << endl;
    
    // Pointer to const data
    const int *p1 = &x;
    cout << "p1 points to " << *p1;
    p1 = &y;  // OK
    cout << ", now points to " << *p1 << endl;
    
    // Const pointer
    int * const p2 = &x;
    *p2 = 30;  // OK
    cout << "p2 fixed at address " << p2 << ", value = " << *p2 << endl;
    
    // Const pointer to const data
    const int * const p3 = &x;
    cout << "p3 is completely const, value = " << *p3 << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 12: SUMMARY ==================== -->
        <h3>5.3.12 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li><strong>Memory address</strong> - unique identifier for a memory location</li>
                <li><strong>Address-of operator (&)</strong> - gets the address of a variable</li>
                <li><strong>Pointer</strong> - a variable that stores a memory address</li>
                <li>Declaration: <code>int *ptr;</code></li>
                <li>Initialization: <code>int *ptr = &variable;</code></li>
                <li><strong>Dereference operator (*)</strong> - accesses the value at the pointed-to address</li>
                <li><strong>Null pointers</strong> (<code>nullptr</code>) indicate the pointer isn't pointing to anything</li>
                <li>Always check for null before dereferencing</li>
                <li><strong>Pointer arithmetic</strong> - adding to a pointer moves by the size of the pointed-to type</li>
                <li>Pointers must point to the same type they're declared to point to</li>
                <li><strong>const</strong> can be applied to pointers in three different ways</li>
                <li>Pointers are powerful but dangerous - use them carefully!</li>
            </ul>
        </div>

        <!-- ==================== SECTION 13: EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Write a program that declares an integer variable and a pointer to it. Print the variable's value, its address, and the pointer's value and dereferenced value.</p>
            
            <p><strong>Exercise 2:</strong> Create a program that swaps two integers using pointers (not references).</p>
            
            <p><strong>Exercise 3:</strong> Write a function that takes a pointer to an integer and doubles its value.</p>
            
            <p><strong>Exercise 4:</strong> Create an array of 5 integers. Use pointer arithmetic to print all elements without using array indexing.</p>
            
            <p><strong>Exercise 5:</strong> Write a program that demonstrates the difference between <code>const int *</code>, <code>int * const</code>, and <code>const int * const</code>.</p>
            
            <p><strong>Exercise 6:</strong> Create a function that returns the largest element in an array using pointer parameters (not array parameters).</p>
            
            <p><strong>Exercise 7:</strong> Write a program that finds the length of a C-style string using pointer arithmetic (without using strlen).</p>
            
            <p><strong>Exercise 8:</strong> Create a program that copies one array to another using pointers (not array indexing).</p>
            
            <p><strong>Exercise 9:</strong> Write a function that reverses an array using pointers.</p>
            
            <p><strong>Exercise 10:</strong> What's wrong with this code? Fix it.</p>
            <pre>
int x = 10;
int *p;
*p = x;
cout << *p << endl;</pre>
        </div>

        <!-- ==================== SECTION 14: KEY TERMS ==================== -->
        <h3>5.3.13 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Address</strong>
                <p style="font-size: 12px;">Memory location identifier</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Pointer</strong>
                <p style="font-size: 12px;">Variable storing an address</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Address-of (&)</strong>
                <p style="font-size: 12px;">Gets variable's address</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Dereference (*)</strong>
                <p style="font-size: 12px;">Access value at address</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Null Pointer</strong>
                <p style="font-size: 12px;">Pointer pointing to nothing</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Pointer Arithmetic</strong>
                <p style="font-size: 12px;">Adding/subtracting on pointers</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Dangling Pointer</strong>
                <p style="font-size: 12px;">Pointer to freed memory</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Hex</strong>
                <p style="font-size: 12px;">Addresses shown in hex</p>
            </div>
        </div>
        
        <!-- ==================== PREVIEW OF NEXT SECTION ==================== -->
        <div style="background: linear-gradient(135deg, #667eea20, #764ba220); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">📖 Next: 5.4 Pointer and Array</h4>
            <p>In the next section, we'll explore the intimate relationship between pointers and arrays.</p>
        </div>
    `,
    navigation: {
        next: "ch5-4",
        prev: "ch5-2",
        nextTitle: "5.4 Pointer and Array",
        prevTitle: "5.2 Multi-dimensional Array"
    }
};