// ===============================
// Computer Programming - Chapter 5.5
// Pointer and Function
// ===============================

window.currentSubsectionData = {
    title: "5.5 Pointer and Function",
    content: `
        <h2>5.5 Pointer and Function</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand how to pass pointers to functions</li>
                <li>Learn to return pointers from functions</li>
                <li>Master pointer parameters for modifying variables</li>
                <li>Understand function pointers and their uses</li>
                <li>Learn about arrays of function pointers</li>
                <li>Understand passing functions as arguments</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: PASSING POINTERS TO FUNCTIONS ==================== -->
        <h3>5.5.1 Passing Pointers to Functions</h3>
        
        <p>When you pass a pointer to a function, the function can access and modify the original variable. This is another way to achieve pass-by-reference semantics (similar to references but using explicit pointers).</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Key Concept:</strong> Passing a pointer gives the function the address of a variable, allowing it to modify the original through dereferencing.</p>
        </div>
        
        <h4>Example: Modifying Variable Through Pointer Parameter</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Function that modifies a variable through pointer
void increment(int *ptr) {
    (*ptr)++;  // Increment the value at the address
    cout << "Inside function, value now: " << *ptr << endl;
}

int main() {
    int num = 10;
    
    cout << "Before function call: " << num << endl;
    
    increment(&num);  // Pass address of num
    
    cout << "After function call: " << num << endl;
    
    return 0;
}</pre>
        
        <p><strong>Output:</strong></p>
        <pre>
Before function call: 10
Inside function, value now: 11
After function call: 11</pre>
        
        <h4>Visual Representation:</h4>
        
        <pre>
Before call:
main's num = 10 at address 0x1000

Call increment(&num):
                ┌─────────────────┐
                │ increment(int *ptr) │
                │ ptr = 0x1000    │
                └─────────────────┘
                        │
                        ↓
                *ptr = 10 at address 0x1000
                (*ptr)++ changes value at 0x1000 to 11

After call:
main's num = 11 (changed!)</pre>

        <!-- ==================== SECTION 2: SWAP FUNCTION WITH POINTERS ==================== -->
        <h3>5.5.2 Swap Function Using Pointers</h3>
        
        <p>The classic example of using pointers is the swap function, which exchanges the values of two variables.</p>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Swap using pointers
void swap(int *a, int *b) {
    int temp = *a;  // Save value at address a
    *a = *b;        // Put value from b into a
    *b = temp;      // Put saved value into b
    
    cout << "Inside swap: a = " << *a << ", b = " << *b << endl;
}

int main() {
    int x = 5, y = 10;
    
    cout << "Before swap: x = " << x << ", y = " << y << endl;
    
    swap(&x, &y);  // Pass addresses
    
    cout << "After swap: x = " << x << ", y = " << y << endl;
    
    return 0;
}</pre>
        
        <p><strong>Output:</strong></p>
        <pre>
Before swap: x = 5, y = 10
Inside swap: a = 10, b = 5
After swap: x = 10, y = 5</pre>

        <!-- ==================== SECTION 3: POINTER PARAMETERS VS REFERENCE PARAMETERS ==================== -->
        <h3>5.5.3 Pointer Parameters vs Reference Parameters</h3>
        
        <p>C++ provides two ways to achieve pass-by-reference semantics: pointers and references. Here's how they compare:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Aspect</th>
                <th style="padding: 10px;">Pointers</th>
                <th style="padding: 10px;">References</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Syntax</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>void func(int *p)</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>void func(int &r)</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Calling</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>func(&x);</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>func(x);</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Access inside</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>*p</code> to access value</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>r</code> directly</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Can be null?</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Yes (check before use)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">No (must refer to valid object)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Can be reassigned?</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Yes (can point to different variables)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">No (bound at initialization)</td>
            </tr>
        </table>
        
        <h4>Comparison Example:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Using pointer
void setToZeroPtr(int *p) {
    if (p != nullptr) {  // Must check for null
        *p = 0;
    }
}

// Using reference
void setToZeroRef(int &r) {
    r = 0;  // No null check needed, safer
}

int main() {
    int x = 10, y = 20;
    
    setToZeroPtr(&x);   // Need address-of operator
    setToZeroRef(y);    // Just pass variable
    
    cout << "x = " << x << ", y = " << y << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 4: RETURNING POINTERS FROM FUNCTIONS ==================== -->
        <h3>5.5.4 Returning Pointers from Functions</h3>
        
        <p>Functions can return pointers, allowing them to return addresses of variables. However, you must be extremely careful not to return pointers to local variables.</p>
        
        <div class="warning-box" style="background: #ffe8e8; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #f5576c;">
            <p><strong>⚠️ CRITICAL:</strong> Never return a pointer to a local variable! Local variables are destroyed when the function ends, leaving a dangling pointer.</p>
        </div>
        
        <h4>Example 1: DANGEROUS - Returning Pointer to Local</h4>
        
        <pre>
int* badFunction() {
    int local = 42;
    return &local;  // DANGER! local will be destroyed
}  // local is destroyed here, pointer is now invalid

int main() {
    int *p = badFunction();
    cout << *p;  // UNDEFINED BEHAVIOR - may crash or print garbage
}</pre>
        
        <h4>Example 2: Safe - Returning Pointer to Static</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int* getStaticValue() {
    static int value = 42;  // Static - exists for program lifetime
    return &value;
}

int main() {
    int *p = getStaticValue();
    cout << "Value: " << *p << endl;  // Safe
    
    *p = 100;  // Can modify static variable
    cout << "New value: " << *p << endl;
    
    return 0;
}</pre>
        
        <h4>Example 3: Safe - Returning Pointer to Dynamic Memory</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int* createArray(int size) {
    int *arr = new int[size];  // Allocate on heap
    for (int i = 0; i < size; i++) {
        arr[i] = i * 10;
    }
    return arr;  // Safe - heap memory persists
}

int main() {
    int *numbers = createArray(5);
    
    for (int i = 0; i < 5; i++) {
        cout << numbers[i] << " ";
    }
    cout << endl;
    
    delete[] numbers;  // Must free when done!
    
    return 0;
}</pre>
        
        <h4>Example 4: Safe - Returning Pointer to Passed Array</h4>
        
        <pre>
int* findMax(int *arr, int size) {
    if (size == 0) return nullptr;
    
    int *maxPtr = arr;  // Point to first element
    for (int i = 1; i < size; i++) {
        if (arr[i] > *maxPtr) {
            maxPtr = &arr[i];  // Point to larger element
        }
    }
    return maxPtr;  // Safe - points to element in passed array
}

int main() {
    int numbers[] = {45, 23, 78, 12, 56};
    int size = 5;
    
    int *maxPtr = findMax(numbers, size);
    
    if (maxPtr != nullptr) {
        cout << "Maximum value: " << *maxPtr << endl;
        cout << "At address: " << maxPtr << endl;
    }
    
    return 0;
}</pre>

        <!-- ==================== SECTION 5: FUNCTION POINTERS ==================== -->
        <h3>5.5.5 Function Pointers</h3>
        
        <p>Just as variables have addresses, functions also have addresses. A <strong>function pointer</strong> stores the address of a function, allowing you to call functions indirectly.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Syntax:</strong> <code>return_type (*pointer_name)(parameter_types);</code></p>
        </div>
        
        <h4>Example 1: Basic Function Pointer</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int add(int a, int b) {
    return a + b;
}

int subtract(int a, int b) {
    return a - b;
}

int multiply(int a, int b) {
    return a * b;
}

int main() {
    // Declare a function pointer
    int (*operation)(int, int);
    
    // Point to add function
    operation = add;
    cout << "add(5, 3) = " << operation(5, 3) << endl;
    
    // Point to subtract function
    operation = subtract;
    cout << "subtract(5, 3) = " << operation(5, 3) << endl;
    
    // Point to multiply function
    operation = multiply;
    cout << "multiply(5, 3) = " << operation(5, 3) << endl;
    
    return 0;
}</pre>
        
        <h4>Example 2: Calling Function Through Pointer</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

void greet() {
    cout << "Hello, World!" << endl;
}

int main() {
    // Declare pointer to function with no parameters returning void
    void (*funcPtr)() = greet;
    
    // Two ways to call through pointer
    funcPtr();    // Direct call
    (*funcPtr)(); // Explicit dereference call
    
    return 0;
}</pre>

        <!-- ==================== SECTION 6: PASSING FUNCTION POINTERS AS ARGUMENTS ==================== -->
        <h3>5.5.6 Passing Function Pointers as Arguments</h3>
        
        <p>Function pointers are powerful because they allow you to pass functions as arguments to other functions (callbacks).</p>
        
        <h4>Example: Generic Array Processor</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Various operations we might want to perform on array elements
int square(int x) { return x * x; }
int cube(int x) { return x * x * x; }
int doubleIt(int x) { return x * 2; }
int half(int x) { return x / 2; }
bool isEven(int x) { return x % 2 == 0; }

// Function that applies an operation to each element
void processArray(int *arr, int size, int (*operation)(int)) {
    for (int i = 0; i < size; i++) {
        arr[i] = operation(arr[i]);
    }
}

// Function that filters array based on condition
int* filterArray(int *arr, int size, bool (*condition)(int), int &newSize) {
    int *result = new int[size];  // Allocate maximum possible
    newSize = 0;
    
    for (int i = 0; i < size; i++) {
        if (condition(arr[i])) {
            result[newSize++] = arr[i];
        }
    }
    
    return result;
}

int main() {
    int numbers[] = {1, 2, 3, 4, 5};
    int size = 5;
    
    cout << "Original: ";
    for (int i = 0; i < size; i++) cout << numbers[i] << " ";
    cout << endl;
    
    // Square all elements
    processArray(numbers, size, square);
    cout << "After square: ";
    for (int i = 0; i < size; i++) cout << numbers[i] << " ";
    cout << endl;
    
    // Double all elements
    processArray(numbers, size, doubleIt);
    cout << "After double: ";
    for (int i = 0; i < size; i++) cout << numbers[i] << " ";
    cout << endl;
    
    // Filter even numbers
    int newSize;
    int *evens = filterArray(numbers, size, isEven, newSize);
    cout << "Even numbers: ";
    for (int i = 0; i < newSize; i++) cout << evens[i] << " ";
    cout << endl;
    
    delete[] evens;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 7: ARRAYS OF FUNCTION POINTERS ==================== -->
        <h3>5.5.7 Arrays of Function Pointers</h3>
        
        <p>You can create arrays of function pointers, which is useful for implementing jump tables or menus.</p>
        
        <h4>Example: Calculator Using Function Pointer Array</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Arithmetic functions
int add(int a, int b) { return a + b; }
int subtract(int a, int b) { return a - b; }
int multiply(int a, int b) { return a * b; }
int divide(int a, int b) { 
    if (b == 0) {
        cout << "Division by zero!" << endl;
        return 0;
    }
    return a / b; 
}

int main() {
    // Array of function pointers
    int (*operations[])(int, int) = {add, subtract, multiply, divide};
    
    // Corresponding menu options
    const char *names[] = {"Add", "Subtract", "Multiply", "Divide"};
    
    int choice;
    int x, y;
    
    do {
        cout << "\\n===== CALCULATOR =====" << endl;
        for (int i = 0; i < 4; i++) {
            cout << i + 1 << ". " << names[i] << endl;
        }
        cout << "5. Exit" << endl;
        cout << "Choice: ";
        cin >> choice;
        
        if (choice >= 1 && choice <= 4) {
            cout << "Enter two numbers: ";
            cin >> x >> y;
            
            // Call the appropriate function using pointer
            int result = operations[choice - 1](x, y);
            cout << "Result: " << result << endl;
        }
        
    } while (choice != 5);
    
    return 0;
}</pre>

        <!-- ==================== SECTION 8: FUNCTION POINTERS WITH DIFFERENT SIGNATURES ==================== -->
        <h3>5.5.8 Function Pointers with Different Signatures</h3>
        
        <p>Function pointers must match the exact signature (return type and parameter types) of the functions they point to.</p>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Different function signatures
int intFunc(int a, int b) { return a + b; }
double doubleFunc(double a, double b) { return a + b; }
void voidFunc() { cout << "Void function called" << endl; }

int main() {
    // Correct pointer types
    int (*intPtr)(int, int) = intFunc;
    double (*doublePtr)(double, double) = doubleFunc;
    void (*voidPtr)() = voidFunc;
    
    cout << "intFunc: " << intPtr(5, 3) << endl;
    cout << "doubleFunc: " << doublePtr(3.14, 2.86) << endl;
    voidPtr();
    
    // Cannot assign incompatible function pointers
    // intPtr = doubleFunc;  // ERROR! Type mismatch
    
    return 0;
}</pre>

        <!-- ==================== SECTION 9: USING TYPEDEF WITH FUNCTION POINTERS ==================== -->
        <h3>5.5.9 Using typedef with Function Pointers</h3>
        
        <p>The syntax for function pointers can be messy. <code>typedef</code> can make them much cleaner.</p>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Define a type for function pointer
typedef int (*MathOperation)(int, int);

// Alternative using (easier to read)
using MathOp = int (*)(int, int);  // C++11 style

int add(int a, int b) { return a + b; }
int subtract(int a, int b) { return a - b; }
int multiply(int a, int b) { return a * b; }

void process(MathOperation op, int a, int b) {
    cout << "Result: " << op(a, b) << endl;
}

int main() {
    MathOperation op1 = add;
    MathOp op2 = subtract;
    auto op3 = multiply;  // C++11 auto works too
    
    cout << "Using typedef: " << op1(10, 5) << endl;
    cout << "Using using: " << op2(10, 5) << endl;
    cout << "Using auto: " << op3(10, 5) << endl;
    
    cout << "\\nPassing function pointer:" << endl;
    process(add, 20, 10);
    process(subtract, 20, 10);
    process(multiply, 20, 10);
    
    return 0;
}</pre>

        <!-- ==================== SECTION 10: COMPLETE EXAMPLE - MENU SYSTEM WITH FUNCTION POINTERS ==================== -->
        <h3>5.5.10 Complete Example: Advanced Menu System</h3>
        
        <pre>
// ============================================
// Program: Advanced Menu System
// Author: CS Student
// Description: Demonstrates function pointers in a menu system
// ============================================

#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;vector&gt;
#include &lt;iomanip&gt;
using namespace std;

// Forward declarations
void addNumbers();
void subtractNumbers();
void multiplyNumbers();
void divideNumbers();
void showHistory();
void clearHistory();
void exitProgram();

// Function pointer type
typedef void (*MenuFunction)();

// Menu item structure
struct MenuItem {
    string description;
    MenuFunction function;
};

// Global history
vector<string> history;

// Menu functions
void addNumbers() {
    double a, b;
    cout << "Enter two numbers: ";
    cin >> a >> b;
    double result = a + b;
    cout << "Result: " << a << " + " << b << " = " << result << endl;
    
    // Add to history
    history.push_back(to_string(a) + " + " + to_string(b) + " = " + to_string(result));
}

void subtractNumbers() {
    double a, b;
    cout << "Enter two numbers: ";
    cin >> a >> b;
    double result = a - b;
    cout << "Result: " << a << " - " << b << " = " << result << endl;
    history.push_back(to_string(a) + " - " + to_string(b) + " = " + to_string(result));
}

void multiplyNumbers() {
    double a, b;
    cout << "Enter two numbers: ";
    cin >> a >> b;
    double result = a * b;
    cout << "Result: " << a << " * " << b << " = " << result << endl;
    history.push_back(to_string(a) + " * " + to_string(b) + " = " + to_string(result));
}

void divideNumbers() {
    double a, b;
    cout << "Enter two numbers: ";
    cin >> a >> b;
    if (b == 0) {
        cout << "Error: Division by zero!" << endl;
        return;
    }
    double result = a / b;
    cout << "Result: " << a << " / " << b << " = " << result << endl;
    history.push_back(to_string(a) + " / " + to_string(b) + " = " + to_string(result));
}

void showHistory() {
    if (history.empty()) {
        cout << "No calculations yet." << endl;
        return;
    }
    
    cout << "\\n=== CALCULATION HISTORY ===" << endl;
    for (size_t i = 0; i < history.size(); i++) {
        cout << setw(3) << i + 1 << ". " << history[i] << endl;
    }
}

void clearHistory() {
    history.clear();
    cout << "History cleared." << endl;
}

void exitProgram() {
    cout << "Goodbye!" << endl;
}

// Function that executes menu
void runMenu(MenuItem items[], int count) {
    int choice;
    
    do {
        cout << "\\n===== MAIN MENU =====" << endl;
        for (int i = 0; i < count; i++) {
            cout << i + 1 << ". " << items[i].description << endl;
        }
        cout << "Choice: ";
        cin >> choice;
        
        if (choice >= 1 && choice <= count) {
            items[choice - 1].function();  // Call function through pointer
            
            if (choice == count) break;  // Exit option
        } else {
            cout << "Invalid choice!" << endl;
        }
        
    } while (true);
}

int main() {
    // Create menu items
    MenuItem menu[] = {
        {"Add Numbers", addNumbers},
        {"Subtract Numbers", subtractNumbers},
        {"Multiply Numbers", multiplyNumbers},
        {"Divide Numbers", divideNumbers},
        {"Show History", showHistory},
        {"Clear History", clearHistory},
        {"Exit", exitProgram}
    };
    
    int itemCount = sizeof(menu) / sizeof(menu[0]);
    
    cout << "===== ADVANCED CALCULATOR =====" << endl;
    runMenu(menu, itemCount);
    
    return 0;
}</pre>

        <!-- ==================== SECTION 11: SUMMARY ==================== -->
        <h3>5.5.11 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li><strong>Pointer parameters</strong> allow functions to modify original variables</li>
                <li>Always check for null pointers before dereferencing</li>
                <li><strong>Never return pointers to local variables</strong> - they become dangling</li>
                <li>Safe returns: static variables, heap memory, or passed-in pointers</li>
                <li><strong>Function pointers</strong> store addresses of functions</li>
                <li>Syntax: <code>return_type (*ptr_name)(param_types)</code></li>
                <li>Function pointers enable <strong>callbacks</strong> and <strong>runtime polymorphism</strong></li>
                <li><strong>Arrays of function pointers</strong> create jump tables for menus</li>
                <li>Use <code>typedef</code> or <code>using</code> to simplify function pointer syntax</li>
                <li>Function pointers must match the exact signature</li>
                <li>Pointers to functions are powerful for creating flexible, extensible code</li>
            </ul>
        </div>

        <!-- ==================== SECTION 12: EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Write a function that takes a pointer to an integer and sets it to zero. Test it with different variables.</p>
            
            <p><strong>Exercise 2:</strong> Create a function that finds both the minimum and maximum in an array using pointer parameters to return both values.</p>
            
            <p><strong>Exercise 3:</strong> Write a program that demonstrates the difference between passing by pointer and passing by reference.</p>
            
            <p><strong>Exercise 4:</strong> Create a function that returns a pointer to the largest element in an array. Test with different arrays.</p>
            
            <p><strong>Exercise 5:</strong> Implement a sorting function that takes a comparison function as a parameter (function pointer) to determine sort order.</p>
            
            <p><strong>Exercise 6:</strong> Create an array of function pointers for mathematical operations (sin, cos, tan, log). Let the user choose which to apply.</p>
            
            <p><strong>Exercise 7:</strong> Write a program that uses function pointers to implement a simple state machine.</p>
            
            <p><strong>Exercise 8:</strong> Create a callback system where an "event handler" function can be registered and called when an event occurs.</p>
            
            <p><strong>Exercise 9:</strong> Write a program that demonstrates the danger of returning a pointer to a local variable. Show what happens.</p>
            
            <p><strong>Exercise 10:</strong> Implement a flexible sorting system that can sort arrays of different types (int, double, string) using function pointers for comparison.</p>
        </div>

        <!-- ==================== SECTION 13: KEY TERMS ==================== -->
        <h3>5.5.12 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Pointer Parameter</strong>
                <p style="font-size: 12px;">Function receiving address</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Dangling Pointer</strong>
                <p style="font-size: 12px;">Points to destroyed data</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Function Pointer</strong>
                <p style="font-size: 12px;">Pointer to function code</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Callback</strong>
                <p style="font-size: 12px;">Function called via pointer</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Jump Table</strong>
                <p style="font-size: 12px;">Array of function pointers</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Signature</strong>
                <p style="font-size: 12px;">Function's parameter and return types</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Indirection</strong>
                <p style="font-size: 12px;">Access through pointer</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Polymorphism</strong>
                <p style="font-size: 12px;">Different behaviors through same interface</p>
            </div>
        </div>
        
        <!-- ==================== PREVIEW OF NEXT SECTION ==================== -->
        <div style="background: linear-gradient(135deg, #667eea20, #764ba220); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">📖 Next: 5.6 Pointer and String</h4>
            <p>In the next section, we'll explore how pointers work with C-style strings and string manipulation.</p>
        </div>
    `,
    navigation: {
        next: "ch5-6",
        prev: "ch5-4",
        nextTitle: "5.6 Pointer and String",
        prevTitle: "5.4 Pointer and Array"
    }
};