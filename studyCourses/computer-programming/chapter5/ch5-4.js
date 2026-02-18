// ===============================
// Computer Programming - Chapter 5.4
// Pointer and Array
// ===============================

window.currentSubsectionData = {
    title: "5.4 Pointer and Array",
    content: `
        <h2>5.4 Pointer and Array</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand the relationship between arrays and pointers</li>
                <li>Learn that array names are constant pointers</li>
                <li>Master array traversal using pointers</li>
                <li>Understand pointer arithmetic with arrays</li>
                <li>Learn to pass arrays to functions using pointers</li>
                <li>Work with pointers to array elements</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: ARRAY NAME AS POINTER ==================== -->
        <h3>5.4.1 Array Name as Pointer</h3>
        
        <p>In C++, the name of an array acts like a constant pointer to the first element of the array. This is a fundamental relationship between arrays and pointers.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Key Concept:</strong> The array name <code>arr</code> is equivalent to <code>&arr[0]</code> - it points to the first element.</p>
        </div>
        
        <h4>Basic Example:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int numbers[5] = {10, 20, 30, 40, 50};
    
    cout << "Array name (numbers): " << numbers << endl;
    cout << "Address of first element (&numbers[0]): " << &numbers[0] << endl;
    cout << "Value at numbers[0]: " << numbers[0] << endl;
    cout << "Value at *numbers: " << *numbers << endl;
    
    return 0;
}</pre>
        
        <p><strong>Output:</strong></p>
        <pre>
Array name (numbers): 0x7ffd5a8e4a3c
Address of first element (&numbers[0]): 0x7ffd5a8e4a3c
Value at numbers[0]: 10
Value at *numbers: 10</pre>
        
        <p>Notice that <code>numbers</code> and <code>&numbers[0]</code> give the same address, and <code>*numbers</code> gives the first element.</p>
        
        <h4>Visual Representation:</h4>
        
        <pre>
int numbers[5] = {10, 20, 30, 40, 50};

Memory:
Address: 0x1000  0x1004  0x1008  0x100C  0x1010
Content: [10]    [20]    [30]    [40]    [50]
         ↑
      numbers
      (points to 0x1000)

*numbers = 10 (value at address 0x1000)</pre>

        <!-- ==================== SECTION 2: ACCESSING ARRAY ELEMENTS WITH POINTERS ==================== -->
        <h3>5.4.2 Accessing Array Elements with Pointers</h3>
        
        <p>Since the array name is a pointer, we can use pointer arithmetic to access array elements.</p>
        
        <h4>Example: Pointer Arithmetic with Arrays</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int numbers[5] = {10, 20, 30, 40, 50};
    
    cout << "Accessing elements using array indexing:" << endl;
    for (int i = 0; i < 5; i++) {
        cout << "numbers[" << i << "] = " << numbers[i] << endl;
    }
    
    cout << "\\nAccessing elements using pointer arithmetic:" << endl;
    for (int i = 0; i < 5; i++) {
        cout << "*(numbers + " << i << ") = " << *(numbers + i) << endl;
    }
    
    cout << "\\nPointer arithmetic demonstration:" << endl;
    int *ptr = numbers;  // ptr points to first element
    
    cout << "*ptr = " << *ptr << endl;
    ptr++;  // Move to next element
    cout << "*(ptr + 0) = " << *ptr << endl;
    cout << "*(ptr + 1) = " << *(ptr + 1) << endl;  // Access next element without moving ptr
    
    return 0;
}</pre>
        
        <p><strong>Output:</strong></p>
        <pre>
Accessing elements using array indexing:
numbers[0] = 10
numbers[1] = 20
numbers[2] = 30
numbers[3] = 40
numbers[4] = 50

Accessing elements using pointer arithmetic:
*(numbers + 0) = 10
*(numbers + 1) = 20
*(numbers + 2) = 30
*(numbers + 3) = 40
*(numbers + 4) = 50

Pointer arithmetic demonstration:
*ptr = 10
*(ptr + 0) = 20
*(ptr + 1) = 30</pre>
        
        <h4>Equivalence:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Array Notation</th>
                <th style="padding: 10px;">Pointer Notation</th>
                <th style="padding: 10px;">Description</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>arr[0]</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>*arr</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">First element</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>arr[1]</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>*(arr + 1)</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Second element</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>arr[i]</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>*(arr + i)</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">i-th element</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>&arr[i]</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>arr + i</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Address of i-th element</td>
            </tr>
        </table>

        <!-- ==================== SECTION 3: ARRAY NAME AS CONSTANT POINTER ==================== -->
        <h3>5.4.3 Array Name as Constant Pointer</h3>
        
        <p>The array name is a <strong>constant pointer</strong> - you cannot change where it points.</p>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int numbers[5] = {10, 20, 30, 40, 50};
    int moreNumbers[5] = {100, 200, 300, 400, 500};
    
    // numbers is a constant pointer
    cout << "numbers points to: " << numbers << endl;
    // numbers = moreNumbers;  // ERROR! Cannot change array name
    
    // But you can use a pointer variable to move through the array
    int *ptr = numbers;  // ptr can be changed
    cout << "ptr initially points to: " << *ptr << endl;
    
    ptr++;  // OK - ptr is a variable
    cout << "ptr now points to: " << *ptr << endl;
    
    ptr = moreNumbers;  // OK - ptr can point to different array
    cout << "ptr now points to: " << *ptr << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 4: TRAVERSING ARRAYS WITH POINTERS ==================== -->
        <h3>5.4.4 Traversing Arrays with Pointers</h3>
        
        <p>Pointers provide an efficient way to traverse arrays, especially when you need to process elements sequentially.</p>
        
        <h4>Example 1: Printing Array with Pointer</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int numbers[5] = {10, 20, 30, 40, 50};
    
    // Method 1: Using pointer arithmetic without moving pointer
    cout << "Method 1: ";
    for (int i = 0; i < 5; i++) {
        cout << *(numbers + i) << " ";
    }
    cout << endl;
    
    // Method 2: Moving pointer through array
    cout << "Method 2: ";
    int *ptr = numbers;
    for (int i = 0; i < 5; i++) {
        cout << *ptr << " ";
        ptr++;  // Move to next element
    }
    cout << endl;
    
    // Method 3: Using pointer comparison
    cout << "Method 3: ";
    int *start = numbers;
    int *end = numbers + 5;  // Pointer to one past the last element
    
    while (start < end) {
        cout << *start << " ";
        start++;
    }
    cout << endl;
    
    return 0;
}</pre>
        
        <h4>Example 2: Sum of Array Using Pointers</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int sumArray(int *arr, int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += *(arr + i);  // or sum += arr[i];
    }
    return sum;
}

int sumArrayPtr(int *start, int *end) {
    int sum = 0;
    while (start < end) {
        sum += *start;
        start++;
    }
    return sum;
}

int main() {
    int numbers[5] = {10, 20, 30, 40, 50};
    
    cout << "Sum using index: " << sumArray(numbers, 5) << endl;
    cout << "Sum using pointer range: " << sumArrayPtr(numbers, numbers + 5) << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 5: POINTERS AND ARRAY PARAMETERS ==================== -->
        <h3>5.4.5 Pointers and Array Parameters</h3>
        
        <p>When you pass an array to a function, what's actually passed is a pointer. This is why array parameters can be declared as pointers.</p>
        
        <h4>Equivalent Function Declarations:</h4>
        
        <pre>
// These three declarations are equivalent:
void processArray(int arr[], int size);
void processArray(int arr[10], int size);  // size is ignored
void processArray(int *arr, int size);     // pointer version</pre>
        
        <h4>Example: Array Parameter as Pointer</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Using array notation
void printArray1(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
}

// Using pointer notation
void printArray2(int *arr, int size) {
    for (int i = 0; i < size; i++) {
        cout << *(arr + i) << " ";
    }
}

// Using pointer that moves
void printArray3(int *start, int *end) {
    while (start < end) {
        cout << *start << " ";
        start++;
    }
}

int main() {
    int numbers[5] = {10, 20, 30, 40, 50};
    
    cout << "printArray1: ";
    printArray1(numbers, 5);
    cout << endl;
    
    cout << "printArray2: ";
    printArray2(numbers, 5);
    cout << endl;
    
    cout << "printArray3: ";
    printArray3(numbers, numbers + 5);
    cout << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 6: MODIFYING ARRAYS THROUGH POINTERS ==================== -->
        <h3>5.4.6 Modifying Arrays Through Pointers</h3>
        
        <p>Since pointers give direct access to memory, you can modify array elements through pointers.</p>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

void doubleElements(int *arr, int size) {
    for (int i = 0; i < size; i++) {
        *(arr + i) *= 2;  // Double each element
    }
}

void squareElements(int *start, int *end) {
    while (start < end) {
        *start = (*start) * (*start);  // Square the value
        start++;
    }
}

int main() {
    int numbers[5] = {1, 2, 3, 4, 5};
    
    cout << "Original: ";
    for (int i = 0; i < 5; i++) cout << numbers[i] << " ";
    cout << endl;
    
    doubleElements(numbers, 5);
    cout << "After doubling: ";
    for (int i = 0; i < 5; i++) cout << numbers[i] << " ";
    cout << endl;
    
    squareElements(numbers, numbers + 5);
    cout << "After squaring: ";
    for (int i = 0; i < 5; i++) cout << numbers[i] << " ";
    cout << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 7: POINTER TO ARRAY VS ARRAY OF POINTERS ==================== -->
        <h3>5.4.7 Pointer to Array vs Array of Pointers</h3>
        
        <p>It's important to distinguish between a pointer to an array and an array of pointers.</p>
        
        <h4>Array of Pointers:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int a = 10, b = 20, c = 30;
    
    // Array of pointers - each element is a pointer
    int *arrPtr[3];  // Array of 3 integer pointers
    
    arrPtr[0] = &a;
    arrPtr[1] = &b;
    arrPtr[2] = &c;
    
    cout << "Array of pointers:" << endl;
    for (int i = 0; i < 3; i++) {
        cout << "arrPtr[" << i << "] points to: " << *arrPtr[i] << endl;
    }
    
    return 0;
}</pre>
        
        <h4>Pointer to Array:</h4>
        
        <pre>
int main() {
    int numbers[5] = {10, 20, 30, 40, 50};
    
    // Pointer to an array of 5 integers
    int (*ptrToArray)[5] = &numbers;
    
    cout << "Pointer to array:" << endl;
    for (int i = 0; i < 5; i++) {
        cout << "(*ptrToArray)[" << i << "] = " << (*ptrToArray)[i] << endl;
    }
    
    return 0;
}</pre>
        
        <h4>Visual Difference:</h4>
        
        <pre>
Array of pointers:            Pointer to array:
int *arrPtr[3];               int (*ptrToArray)[5];

Memory:                       Memory:
┌─────┐                       ┌─────────────────────┐
│ &a   │──→ a=10               │     entire array    │
├─────┤                       │  [10][20][30][40][50]│
│ &b   │──→ b=20               └─────────────────────┘
├─────┤                              ↑
│ &c   │──→ c=30                     ptrToArray
└─────┘</pre>

        <!-- ==================== SECTION 8: 2D ARRAYS AND POINTERS ==================== -->
        <h3>5.4.8 2D Arrays and Pointers</h3>
        
        <p>Multi-dimensional arrays have a more complex relationship with pointers.</p>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int matrix[3][4] = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12}
    };
    
    cout << "matrix: " << matrix << endl;           // Address of first row
    cout << "matrix[0]: " << matrix[0] << endl;     // Same as matrix
    cout << "&matrix[0][0]: " << &matrix[0][0] << endl; // Same
    
    cout << "\\nAccessing 2D array elements:" << endl;
    cout << "matrix[0][0] = " << matrix[0][0] << endl;
    cout << "*(matrix[0] + 0) = " << *(matrix[0] + 0) << endl;
    cout << "*(*(matrix + 0) + 0) = " << *(*(matrix + 0) + 0) << endl;
    
    cout << "\\nRow pointers:" << endl;
    cout << "matrix[1] = " << matrix[1] << endl;    // Points to second row
    cout << "matrix[1][2] = " << matrix[1][2] << endl;
    cout << "*(matrix[1] + 2) = " << *(matrix[1] + 2) << endl;
    
    // Traversing 2D array with pointers
    cout << "\\nAll elements using pointers:" << endl;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 4; j++) {
            cout << *(*(matrix + i) + j) << " ";
        }
        cout << endl;
    }
    
    return 0;
}</pre>
        
        <p>The expression <code>*(*(matrix + i) + j)</code> works because:</p>
        <ul>
            <li><code>matrix + i</code> - pointer to row i</li>
            <li><code>*(matrix + i)</code> - pointer to first element of row i (same as matrix[i])</li>
            <li><code>*(matrix + i) + j</code> - pointer to element at column j of row i</li>
            <li><code>*(*(matrix + i) + j)</code> - value at row i, column j</li>
        </ul>

        <!-- ==================== SECTION 9: COMMON PITFALLS ==================== -->
        <h3>5.4.9 Common Pitfalls with Pointers and Arrays</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Pitfall</th>
                <th style="padding: 10px;">Wrong Code</th>
                <th style="padding: 10px;">Correct Code</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Forgetting array name is constant</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>int arr[5]; arr = newArr;</code>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>int *ptr = arr; ptr = newArr;</code>
                </td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Going out of bounds</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>int arr[5];<br>int *p = arr + 10;</code>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>int *end = arr + 5;</code>
                </td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Confusing pointer arithmetic with integer arithmetic</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>int *p = arr; p = p + 2;</code> // Moves by 2 * sizeof(int)
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>int *p = arr; p = p + 2;</code> // This is correct, just understand it moves by 8 bytes
                </td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Dereferencing without bounds check</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>cout << *(arr + i);</code> // i might be invalid
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <code>if (i >= 0 && i < size) cout << *(arr + i);</code>
                </td>
            </tr>
        </table>

        <!-- ==================== SECTION 10: COMPLETE EXAMPLE - ARRAY PROCESSING WITH POINTERS ==================== -->
        <h3>5.4.10 Complete Example: Array Processing Library</h3>
        
        <pre>
// ============================================
// Program: Array Processing with Pointers
// Author: CS Student
// Description: Demonstrates array processing using pointers
// ============================================

#include &lt;iostream&gt;
#include &lt;iomanip&gt;
using namespace std;

// Function prototypes - all use pointer notation
void inputArray(int *arr, int size);
void printArray(const int *arr, int size);
int sumArray(const int *arr, int size);
double averageArray(const int *arr, int size);
int findMax(const int *arr, int size);
int findMin(const int *arr, int size);
void reverseArray(int *arr, int size);
void sortArray(int *arr, int size);
bool searchArray(const int *arr, int size, int target);
void copyArray(const int *src, int *dest, int size);
void rotateArray(int *arr, int size, int positions);

int main() {
    const int SIZE = 10;
    int numbers[SIZE];
    int copied[SIZE];
    
    cout << "===== ARRAY PROCESSING WITH POINTERS =====" << endl;
    
    // Input array
    cout << "Enter " << SIZE << " integers:" << endl;
    inputArray(numbers, SIZE);
    
    // Display array
    cout << "\\nArray: ";
    printArray(numbers, SIZE);
    
    // Statistics
    cout << "\\n=== STATISTICS ===" << endl;
    cout << "Sum: " << sumArray(numbers, SIZE) << endl;
    cout << "Average: " << fixed << setprecision(2) 
         << averageArray(numbers, SIZE) << endl;
    cout << "Maximum: " << findMax(numbers, SIZE) << endl;
    cout << "Minimum: " << findMin(numbers, SIZE) << endl;
    
    // Search
    int target;
    cout << "\\nEnter number to search: ";
    cin >> target;
    
    if (searchArray(numbers, SIZE, target)) {
        cout << target << " found in array." << endl;
    } else {
        cout << target << " not found in array." << endl;
    }
    
    // Reverse
    cout << "\\nReversed array: ";
    reverseArray(numbers, SIZE);
    printArray(numbers, SIZE);
    
    // Reverse back to original
    reverseArray(numbers, SIZE);
    
    // Sort
    cout << "\\nSorted array: ";
    sortArray(numbers, SIZE);
    printArray(numbers, SIZE);
    
    // Copy
    copyArray(numbers, copied, SIZE);
    cout << "\\nCopied array: ";
    printArray(copied, SIZE);
    
    // Rotate
    int positions;
    cout << "\\nEnter positions to rotate right: ";
    cin >> positions;
    rotateArray(numbers, SIZE, positions);
    cout << "Array after rotation: ";
    printArray(numbers, SIZE);
    
    return 0;
}

void inputArray(int *arr, int size) {
    for (int i = 0; i < size; i++) {
        cout << "Enter element " << i << ": ";
        cin >> *(arr + i);  // Pointer notation
    }
}

void printArray(const int *arr, int size) {
    const int *ptr = arr;
    const int *end = arr + size;
    
    while (ptr < end) {
        cout << *ptr << " ";
        ptr++;
    }
    cout << endl;
}

int sumArray(const int *arr, int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += *(arr + i);
    }
    return sum;
}

double averageArray(const int *arr, int size) {
    if (size == 0) return 0;
    return static_cast<double>(sumArray(arr, size)) / size;
}

int findMax(const int *arr, int size) {
    if (size == 0) return 0;
    
    int max = *arr;  // First element
    const int *ptr = arr + 1;
    const int *end = arr + size;
    
    while (ptr < end) {
        if (*ptr > max) {
            max = *ptr;
        }
        ptr++;
    }
    return max;
}

int findMin(const int *arr, int size) {
    if (size == 0) return 0;
    
    int min = *arr;
    const int *ptr = arr + 1;
    const int *end = arr + size;
    
    while (ptr < end) {
        if (*ptr < min) {
            min = *ptr;
        }
        ptr++;
    }
    return min;
}

void reverseArray(int *arr, int size) {
    int *start = arr;
    int *end = arr + size - 1;  // Last element
    
    while (start < end) {
        // Swap using pointers
        int temp = *start;
        *start = *end;
        *end = temp;
        
        start++;
        end--;
    }
}

void sortArray(int *arr, int size) {
    for (int i = 0; i < size - 1; i++) {
        for (int j = 0; j < size - i - 1; j++) {
            if (*(arr + j) > *(arr + j + 1)) {
                int temp = *(arr + j);
                *(arr + j) = *(arr + j + 1);
                *(arr + j + 1) = temp;
            }
        }
    }
}

bool searchArray(const int *arr, int size, int target) {
    for (int i = 0; i < size; i++) {
        if (*(arr + i) == target) {
            return true;
        }
    }
    return false;
}

void copyArray(const int *src, int *dest, int size) {
    for (int i = 0; i < size; i++) {
        *(dest + i) = *(src + i);
    }
}

void rotateArray(int *arr, int size, int positions) {
    positions = positions % size;  // Handle positions > size
    if (positions == 0) return;
    
    // Create temporary array to store rotated elements
    int temp[size];
    
    // Copy last 'positions' elements to beginning of temp
    for (int i = 0; i < positions; i++) {
        temp[i] = *(arr + size - positions + i);
    }
    
    // Copy first 'size-positions' elements to rest of temp
    for (int i = 0; i < size - positions; i++) {
        temp[positions + i] = *(arr + i);
    }
    
    // Copy back to original array
    for (int i = 0; i < size; i++) {
        *(arr + i) = temp[i];
    }
}</pre>

        <!-- ==================== SECTION 11: SUMMARY ==================== -->
        <h3>5.4.11 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li><strong>Array name is a constant pointer</strong> to the first element</li>
                <li><code>arr[i]</code> is equivalent to <code>*(arr + i)</code></li>
                <li><code>&arr[i]</code> is equivalent to <code>arr + i</code></li>
                <li><strong>Pointer arithmetic</strong> moves by the size of the pointed-to type</li>
                <li>You can traverse arrays by incrementing a pointer</li>
                <li>Array parameters in functions are actually pointers</li>
                <li><strong>Array of pointers</strong> vs <strong>pointer to array</strong> are different concepts</li>
                <li>2D arrays require double dereferencing: <code>*(*(matrix + i) + j)</code></li>
                <li>Always ensure pointers are within array bounds</li>
                <li>Pointer-based array processing is often more efficient than index-based</li>
            </ul>
        </div>

        <!-- ==================== SECTION 12: EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Write a function that prints an array in reverse order using pointers.</p>
            
            <p><strong>Exercise 2:</strong> Create a function that finds the second largest element in an array using pointer arithmetic.</p>
            
            <p><strong>Exercise 3:</strong> Write a program that copies one array to another using pointers (without using array indexing).</p>
            
            <p><strong>Exercise 4:</strong> Implement a function that merges two sorted arrays into a third sorted array using pointers.</p>
            
            <p><strong>Exercise 5:</strong> Write a function that removes duplicates from a sorted array using pointers and returns the new size.</p>
            
            <p><strong>Exercise 6:</strong> Create a function that returns the number of elements in an array that are greater than a given value. Use pointers.</p>
            
            <p><strong>Exercise 7:</strong> Write a program that finds all pairs in an array that sum to a given target. Use pointers to traverse.</p>
            
            <p><strong>Exercise 8:</strong> Implement a function that rotates an array left by k positions using pointer arithmetic.</p>
            
            <p><strong>Exercise 9:</strong> Write a function that checks if an array is a palindrome using pointers.</p>
            
            <p><strong>Exercise 10:</strong> Create a 2D array and write functions to print it in row-major and column-major order using pointer notation.</p>
        </div>

        <!-- ==================== SECTION 13: KEY TERMS ==================== -->
        <h3>5.4.12 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Array-Pointer Duality</strong>
                <p style="font-size: 12px;">Arrays and pointers relationship</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Pointer Arithmetic</strong>
                <p style="font-size: 12px;">Moving pointers through memory</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Decay</strong>
                <p style="font-size: 12px;">Array to pointer conversion</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Offset</strong>
                <p style="font-size: 12px;">Distance from base pointer</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Row Pointer</strong>
                <p style="font-size: 12px;">Pointer to array row</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Element Pointer</strong>
                <p style="font-size: 12px;">Pointer to array element</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Boundary</strong>
                <p style="font-size: 12px;">Valid range of pointers</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Traversal</strong>
                <p style="font-size: 12px;">Moving through array</p>
            </div>
        </div>
        
        <!-- ==================== PREVIEW OF NEXT SECTION ==================== -->
        <div style="background: linear-gradient(135deg, #667eea20, #764ba220); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">📖 Next: 5.5 Pointer and Function</h4>
            <p>In the next section, we'll learn how pointers interact with functions, including pointer parameters and function pointers.</p>
        </div>
    `,
    navigation: {
        next: "ch5-5",
        prev: "ch5-3",
        nextTitle: "5.5 Pointer and Function",
        prevTitle: "5.3 Address and Pointer"
    }
};