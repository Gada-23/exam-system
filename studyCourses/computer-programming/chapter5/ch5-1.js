// ===============================
// Computer Programming - Chapter 5.1
// One-Dimensional Array
// ===============================

window.currentSubsectionData = {
    title: "5.1 One-Dimensional Array",
    content: `
        <h2>5.1 One-Dimensional Array</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand what arrays are and why they are used</li>
                <li>Learn how to declare and initialize one-dimensional arrays</li>
                <li>Master array indexing and accessing elements</li>
                <li>Learn common array operations (traversal, sum, min/max, search)</li>
                <li>Understand array boundaries and common pitfalls</li>
                <li>Learn to pass arrays to functions</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: INTRODUCTION TO ARRAYS ==================== -->
        <h3>5.1.1 What is an Array?</h3>
        
        <p>An <strong>array</strong> is a collection of elements of the same data type, stored in contiguous memory locations. Think of it as a row of numbered boxes, where each box holds one value and has a unique index.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> An array is a fixed-size collection of elements of the same type, stored sequentially in memory, accessible by an index.</p>
        </div>
        
        <h4>Analogy: Apartment Building</h4>
        <p>Think of an array like an apartment building:</p>
        <ul>
            <li>The <strong>building</strong> is the array itself</li>
            <li>Each <strong>apartment</strong> is an element in the array</li>
            <li>The <strong>apartment number</strong> is the index</li>
            <li>All apartments are the same <strong>type</strong> (all 1-bedroom, all 2-bedroom, etc.)</li>
            <li>Apartments are <strong>numbered sequentially</strong> (101, 102, 103...)</li>
        </ul>
        
        <h4>Why Use Arrays?</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Without Arrays</th>
                <th style="padding: 10px;">With Arrays</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <pre>
int score1 = 85;
int score2 = 92;
int score3 = 78;
int score4 = 88;
int score5 = 95;
// 100 students? 1000 students?</pre>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <pre>
int scores[100];  // One array for 100 students
// Access: scores[0], scores[1], ... scores[99]</pre>
                </td>
            </tr>
        </table>

        <!-- ==================== SECTION 2: ARRAY DECLARATION ==================== -->
        <h3>5.1.2 Array Declaration</h3>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Syntax:</strong> <code>data_type array_name[size];</code></p>
        </div>
        
        <h4>Examples:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Declaring arrays
    int numbers[5];           // Array of 5 integers
    double prices[10];        // Array of 10 doubles
    char letters[26];         // Array of 26 characters
    bool flags[20];           // Array of 20 booleans
    
    // Size must be constant
    const int SIZE = 100;
    int scores[SIZE];         // OK - SIZE is constant
    
    // int size;
    // cin >> size;
    // int values[size];      // ERROR! Size must be constant in standard C++
    
    return 0;
}</pre>
        
        <h4>Memory Visualization:</h4>
        
        <pre>
int numbers[5] (uninitialized):
┌──────┬──────┬──────┬──────┬──────┐
│  ?   │  ?   │  ?   │  ?   │  ?   │
└──────┴──────┴──────┴──────┴──────┘
index: 0     1     2     3     4</pre>
        
        <div class="warning-box" style="background: #ffe8e8; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #f5576c;">
            <p><strong>⚠️ Important:</strong> Array indices in C++ start at <strong>0</strong>, not 1! The first element is at index 0, the last at size-1.</p>
        </div>

        <!-- ==================== SECTION 3: ARRAY INITIALIZATION ==================== -->
        <h3>5.1.3 Array Initialization</h3>
        
        <h4>Method 1: Initialization at Declaration</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Initialize all elements
    int numbers[5] = {10, 20, 30, 40, 50};
    // numbers[0]=10, numbers[1]=20, numbers[2]=30, numbers[3]=40, numbers[4]=50
    
    // Partial initialization - remaining elements set to 0
    int values[5] = {1, 2, 3};  // 1,2,3,0,0
    
    // Initialize all to 0
    int zeros[5] = {0};          // All elements 0
    
    // Size inferred from initializer
    int autoSize[] = {1, 2, 3, 4, 5};  // Array of size 5
    
    // Designated initializers (C++11)
    int days[7] = {[0] = 31, [1] = 28, [2] = 31, [3] = 30};  // Specific indices
    
    return 0;
}</pre>
        
        <h4>Method 2: Initialize After Declaration</h4>
        
        <pre>
int scores[5];
scores[0] = 85;
scores[1] = 92;
scores[2] = 78;
scores[3] = 88;
scores[4] = 95;</pre>
        
        <h4>Method 3: Using Loops</h4>
        
        <pre>
int squares[10];
for (int i = 0; i < 10; i++) {
    squares[i] = i * i;  // squares[0]=0, squares[1]=1, squares[2]=4, ...
}</pre>
        
        <h4>Visualization of Initialized Array:</h4>
        
        <pre>
int numbers[5] = {10, 20, 30, 40, 50};

┌──────┬──────┬──────┬──────┬──────┐
│  10  │  20  │  30  │  40  │  50  │
└──────┴──────┴──────┴──────┴──────┘
index: 0     1     2     3     4</pre>

        <!-- ==================== SECTION 4: ACCESSING ARRAY ELEMENTS ==================== -->
        <h3>5.1.4 Accessing Array Elements</h3>
        
        <p>Use the array name and index in square brackets to access elements.</p>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int numbers[5] = {10, 20, 30, 40, 50};
    
    // Access individual elements
    cout << "First element: " << numbers[0] << endl;     // 10
    cout << "Third element: " << numbers[2] << endl;     // 30
    cout << "Last element: " << numbers[4] << endl;      // 50
    
    // Modify an element
    numbers[1] = 25;
    cout << "Modified second element: " << numbers[1] << endl;  // 25
    
    // Access using variables as indices
    int index = 3;
    cout << "Element at index " << index << ": " << numbers[index] << endl;  // 40
    
    // Array elements are just like regular variables
    numbers[0] = numbers[1] + numbers[2];
    cout << "After calculation: " << numbers[0] << endl;  // 25 + 30 = 55
    
    return 0;
}</pre>
        
        <div class="warning-box" style="background: #ffe8e8; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #f5576c;">
            <p><strong>⚠️ Bounds Checking:</strong> C++ does NOT check array bounds! Accessing numbers[5] (out of bounds) will compile but cause undefined behavior.</p>
            <pre>
int arr[5] = {1,2,3,4,5};
arr[5] = 10;   // BUG! Index 5 is out of bounds (valid indices 0-4)
cout << arr[10]; // BUG! May crash or print garbage</pre>
        </div>

        <!-- ==================== SECTION 5: ARRAY TRAVERSAL ==================== -->
        <h3>5.1.5 Array Traversal</h3>
        
        <p>Use loops to process all elements of an array.</p>
        
        <h4>Example 1: Printing Array Elements</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int numbers[5] = {10, 20, 30, 40, 50};
    
    cout << "Array elements: ";
    for (int i = 0; i < 5; i++) {
        cout << numbers[i] << " ";
    }
    cout << endl;
    
    // Print in reverse
    cout << "Reverse order: ";
    for (int i = 4; i >= 0; i--) {
        cout << numbers[i] << " ";
    }
    cout << endl;
    
    return 0;
}</pre>
        
        <h4>Example 2: Sum and Average</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int scores[] = {85, 92, 78, 88, 95};
    int size = 5;
    int sum = 0;
    
    for (int i = 0; i < size; i++) {
        sum += scores[i];
    }
    
    double average = static_cast<double>(sum) / size;
    
    cout << "Sum: " << sum << endl;
    cout << "Average: " << average << endl;
    
    return 0;
}</pre>
        
        <h4>Example 3: Finding Maximum and Minimum</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int numbers[] = {45, 23, 78, 12, 56, 89, 34};
    int size = 7;
    
    int maxNum = numbers[0];
    int minNum = numbers[0];
    
    for (int i = 1; i < size; i++) {
        if (numbers[i] > maxNum) {
            maxNum = numbers[i];
        }
        if (numbers[i] < minNum) {
            minNum = numbers[i];
        }
    }
    
    cout << "Maximum: " << maxNum << endl;
    cout << "Minimum: " << minNum << endl;
    
    return 0;
}</pre>
        
        <h4>Example 4: Counting Specific Elements</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int numbers[] = {45, 23, 78, 45, 56, 45, 34, 45};
    int size = 8;
    int target = 45;
    int count = 0;
    
    for (int i = 0; i < size; i++) {
        if (numbers[i] == target) {
            count++;
        }
    }
    
    cout << target << " appears " << count << " times" << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 6: ARRAY SEARCH ==================== -->
        <h3>5.1.6 Searching in Arrays</h3>
        
        <h4>Linear Search</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int linearSearch(int arr[], int size, int target) {
    for (int i = 0; i < size; i++) {
        if (arr[i] == target) {
            return i;  // Found at index i
        }
    }
    return -1;  // Not found
}

int main() {
    int numbers[] = {45, 23, 78, 12, 56, 89, 34};
    int size = 7;
    int target = 56;
    
    int index = linearSearch(numbers, size, target);
    
    if (index != -1) {
        cout << target << " found at index " << index << endl;
    } else {
        cout << target << " not found" << endl;
    }
    
    // Search for a value not in array
    target = 99;
    index = linearSearch(numbers, size, target);
    
    if (index != -1) {
        cout << target << " found at index " << index << endl;
    } else {
        cout << target << " not found" << endl;
    }
    
    return 0;
}</pre>

        <!-- ==================== SECTION 7: PASSING ARRAYS TO FUNCTIONS ==================== -->
        <h3>5.1.7 Passing Arrays to Functions</h3>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Note:</strong> When you pass an array to a function, you're actually passing a pointer to the first element. The function receives the address, not a copy. This means modifications inside the function affect the original array.</p>
        </div>
        
        <h4>Example 1: Array as Parameter</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Function that modifies the array
void doubleElements(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        arr[i] *= 2;  // Modifies original array!
    }
}

// Function that just reads the array
void printArray(const int arr[], int size) {
    cout << "[ ";
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << "]" << endl;
}

int main() {
    int numbers[] = {1, 2, 3, 4, 5};
    int size = 5;
    
    cout << "Original: ";
    printArray(numbers, size);
    
    doubleElements(numbers, size);
    
    cout << "After doubling: ";
    printArray(numbers, size);
    
    return 0;
}</pre>
        
        <h4>Example 2: Returning Arrays (via parameters)</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Function to fill array with squares
void fillSquares(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        arr[i] = i * i;
    }
}

int main() {
    const int SIZE = 10;
    int squares[SIZE];
    
    fillSquares(squares, SIZE);
    
    cout << "Squares: ";
    for (int i = 0; i < SIZE; i++) {
        cout << squares[i] << " ";
    }
    cout << endl;
    
    return 0;
}</pre>
        
        <div class="tip-box" style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #ffc107;">
            <p><strong>💡 Best Practice:</strong> When a function only needs to read an array, use <code>const</code> to prevent accidental modification: <code>void printArray(const int arr[], int size)</code></p>
        </div>

        <!-- ==================== SECTION 8: COMMON ARRAY OPERATIONS ==================== -->
        <h3>5.1.8 Common Array Operations</h3>
        
        <h4>Example 1: Copying Arrays</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int source[5] = {10, 20, 30, 40, 50};
    int destination[5];
    
    // Copy element by element
    for (int i = 0; i < 5; i++) {
        destination[i] = source[i];
    }
    
    cout << "Source: ";
    for (int i = 0; i < 5; i++) cout << source[i] << " ";
    cout << endl;
    
    cout << "Destination: ";
    for (int i = 0; i < 5; i++) cout << destination[i] << " ";
    cout << endl;
    
    return 0;
}</pre>
        
        <h4>Example 2: Reversing an Array</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

void reverseArray(int arr[], int size) {
    for (int i = 0; i < size / 2; i++) {
        int temp = arr[i];
        arr[i] = arr[size - 1 - i];
        arr[size - 1 - i] = temp;
    }
}

int main() {
    int numbers[] = {1, 2, 3, 4, 5, 6, 7};
    int size = 7;
    
    cout << "Original: ";
    for (int i = 0; i < size; i++) cout << numbers[i] << " ";
    cout << endl;
    
    reverseArray(numbers, size);
    
    cout << "Reversed: ";
    for (int i = 0; i < size; i++) cout << numbers[i] << " ";
    cout << endl;
    
    return 0;
}</pre>
        
        <h4>Example 3: Rotating Array</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Rotate left by one position
void rotateLeft(int arr[], int size) {
    int first = arr[0];
    for (int i = 0; i < size - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[size - 1] = first;
}

int main() {
    int numbers[] = {10, 20, 30, 40, 50};
    int size = 5;
    
    cout << "Original: ";
    for (int i = 0; i < size; i++) cout << numbers[i] << " ";
    cout << endl;
    
    rotateLeft(numbers, size);
    
    cout << "After left rotate: ";
    for (int i = 0; i < size; i++) cout << numbers[i] << " ";
    cout << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 9: ARRAY BOUNDS AND SAFETY ==================== -->
        <h3>5.1.9 Array Bounds and Safety</h3>
        
        <p>One of the most common bugs in C++ is accessing arrays out of bounds.</p>
        
        <h4>Example of Bounds Error:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    
    // This is BAD - accessing beyond array bounds
    for (int i = 0; i <= 5; i++) {  // Should be i < 5
        cout << arr[i] << " ";  // arr[5] is out of bounds!
    }
    cout << endl;
    
    // Even worse - writing out of bounds
    arr[5] = 10;   // BUG! Modifies memory that doesn't belong to array
    arr[-1] = 99;  // BUG! Negative index is always invalid
    
    return 0;
}</pre>
        
        <h4>Safe Array Access Pattern:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    const int SIZE = 5;
    int arr[SIZE] = {1, 2, 3, 4, 5};
    int index;
    
    cout << "Enter index (0-" << SIZE-1 << "): ";
    cin >> index;
    
    // Check bounds before accessing
    if (index >= 0 && index < SIZE) {
        cout << "Value at index " << index << ": " << arr[index] << endl;
    } else {
        cout << "Index out of bounds!" << endl;
    }
    
    return 0;
}</pre>

        <!-- ==================== SECTION 10: COMPLETE EXAMPLE - GRADE ANALYZER ==================== -->
        <h3>5.1.10 Complete Example: Grade Analyzer</h3>
        
        <pre>
// ============================================
// Program: Grade Analyzer
// Author: CS Student
// Description: Demonstrates one-dimensional arrays
// ============================================

#include &lt;iostream&gt;
#include &lt;iomanip&gt;
#include &lt;string&gt;
using namespace std;

const int MAX_STUDENTS = 50;

// Function prototypes
void inputGrades(int grades[], int &count);
void displayGrades(const int grades[], int count);
double calculateAverage(const int grades[], int count);
int findHighest(const int grades[], int count);
int findLowest(const int grades[], int count);
int countPassing(const int grades[], int count);
void printHistogram(const int grades[], int count);
void sortGrades(int grades[], int count);
char getLetterGrade(int score);

int main() {
    int grades[MAX_STUDENTS];
    int studentCount = 0;
    int choice;
    
    do {
        cout << "\\n===== GRADE ANALYZER =====" << endl;
        cout << "1. Input Grades" << endl;
        cout << "2. Display All Grades" << endl;
        cout << "3. Show Statistics" << endl;
        cout << "4. Print Histogram" << endl;
        cout << "5. Sort Grades" << endl;
        cout << "6. Exit" << endl;
        cout << "Choice: ";
        cin >> choice;
        
        switch (choice) {
            case 1:
                inputGrades(grades, studentCount);
                break;
                
            case 2:
                if (studentCount > 0) {
                    displayGrades(grades, studentCount);
                } else {
                    cout << "No grades entered." << endl;
                }
                break;
                
            case 3:
                if (studentCount > 0) {
                    cout << "\\n===== STATISTICS =====" << endl;
                    cout << "Total students: " << studentCount << endl;
                    cout << "Average: " << fixed << setprecision(1) 
                         << calculateAverage(grades, studentCount) << endl;
                    cout << "Highest: " << findHighest(grades, studentCount) << endl;
                    cout << "Lowest: " << findLowest(grades, studentCount) << endl;
                    cout << "Passing (>=60): " << countPassing(grades, studentCount) << endl;
                    cout << "Pass rate: " 
                         << (countPassing(grades, studentCount) * 100.0 / studentCount) 
                         << "%" << endl;
                } else {
                    cout << "No grades entered." << endl;
                }
                break;
                
            case 4:
                if (studentCount > 0) {
                    printHistogram(grades, studentCount);
                } else {
                    cout << "No grades entered." << endl;
                }
                break;
                
            case 5:
                if (studentCount > 0) {
                    sortGrades(grades, studentCount);
                    cout << "Grades sorted!" << endl;
                } else {
                    cout << "No grades entered." << endl;
                }
                break;
        }
        
    } while (choice != 6);
    
    return 0;
}

void inputGrades(int grades[], int &count) {
    cout << "Enter number of students (1-" << MAX_STUDENTS << "): ";
    cin >> count;
    
    if (count > MAX_STUDENTS) {
        cout << "Too many students. Using " << MAX_STUDENTS << "." << endl;
        count = MAX_STUDENTS;
    }
    
    for (int i = 0; i < count; i++) {
        do {
            cout << "Enter grade for student " << i+1 << " (0-100): ";
            cin >> grades[i];
        } while (grades[i] < 0 || grades[i] > 100);
    }
}

void displayGrades(const int grades[], int count) {
    cout << "\\n===== GRADE LIST =====" << endl;
    cout << setw(10) << "Student" << setw(10) << "Score" 
         << setw(10) << "Grade" << endl;
    cout << "------------------------" << endl;
    
    for (int i = 0; i < count; i++) {
        cout << setw(10) << i+1 
             << setw(10) << grades[i]
             << setw(10) << getLetterGrade(grades[i]) << endl;
    }
}

double calculateAverage(const int grades[], int count) {
    if (count == 0) return 0;
    
    int sum = 0;
    for (int i = 0; i < count; i++) {
        sum += grades[i];
    }
    return static_cast<double>(sum) / count;
}

int findHighest(const int grades[], int count) {
    if (count == 0) return 0;
    
    int highest = grades[0];
    for (int i = 1; i < count; i++) {
        if (grades[i] > highest) {
            highest = grades[i];
        }
    }
    return highest;
}

int findLowest(const int grades[], int count) {
    if (count == 0) return 0;
    
    int lowest = grades[0];
    for (int i = 1; i < count; i++) {
        if (grades[i] < lowest) {
            lowest = grades[i];
        }
    }
    return lowest;
}

int countPassing(const int grades[], int count) {
    int passing = 0;
    for (int i = 0; i < count; i++) {
        if (grades[i] >= 60) {
            passing++;
        }
    }
    return passing;
}

void printHistogram(const int grades[], int count) {
    int ranges[10] = {0};  // 0-9, 10-19, ..., 90-99, 100
    
    for (int i = 0; i < count; i++) {
        int range = grades[i] / 10;
        if (range == 10) range = 9;  // 100 goes to last range
        ranges[range]++;
    }
    
    cout << "\\n===== GRADE DISTRIBUTION =====" << endl;
    for (int i = 0; i < 10; i++) {
        cout << setw(3) << i*10 << "-" << setw(3) << i*10+9 << ": ";
        for (int j = 0; j < ranges[i]; j++) {
            cout << "*";
        }
        cout << " (" << ranges[i] << ")" << endl;
    }
    cout << "      100: ";
    for (int j = 0; j < ranges[9]; j++) {
        cout << "*";
    }
    cout << " (" << ranges[9] << ")" << endl;
}

void sortGrades(int grades[], int count) {
    for (int i = 0; i < count - 1; i++) {
        for (int j = 0; j < count - i - 1; j++) {
            if (grades[j] < grades[j+1]) {  // Descending order
                int temp = grades[j];
                grades[j] = grades[j+1];
                grades[j+1] = temp;
            }
        }
    }
}

char getLetterGrade(int score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}</pre>

        <!-- ==================== SECTION 11: SUMMARY ==================== -->
        <h3>5.1.11 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li><strong>Arrays</strong> store multiple elements of the same type in contiguous memory</li>
                <li>Declaration: <code>type name[size];</code></li>
                <li>Indices start at <strong>0</strong> and go to <strong>size-1</strong></li>
                <li>Access elements with <code>array[index]</code></li>
                <li><strong>No bounds checking</strong> - you must ensure indices are valid</li>
                <li>Initialize at declaration: <code>int arr[5] = {1,2,3,4,5};</code></li>
                <li>Use <strong>loops</strong> to traverse and process arrays</li>
                <li>Common operations: sum, average, min/max, search, sort</li>
                <li>Passing arrays to functions: <code>void func(int arr[], int size)</code></li>
                <li>Functions receive <strong>pointer to first element</strong> - modifications affect original</li>
                <li>Use <code>const</code> for read-only array parameters</li>
                <li>Always check array bounds to prevent bugs and security issues</li>
            </ul>
        </div>

        <!-- ==================== SECTION 12: EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Write a program that reads 10 integers into an array and prints them in reverse order.</p>
            
            <p><strong>Exercise 2:</strong> Create a function that finds the second largest element in an array.</p>
            
            <p><strong>Exercise 3:</strong> Write a program that counts how many times each number appears in an array (assuming numbers between 0-100).</p>
            
            <p><strong>Exercise 4:</strong> Implement a function that removes duplicates from an array (returns new size).</p>
            
            <p><strong>Exercise 5:</strong> Write a function that merges two sorted arrays into a third sorted array.</p>
            
            <p><strong>Exercise 6:</strong> Create a program that finds all pairs in an array that sum to a given target.</p>
            
            <p><strong>Exercise 7:</strong> Implement a function that rotates an array by k positions to the right.</p>
            
            <p><strong>Exercise 8:</strong> Write a program that checks if an array is a palindrome (reads same forwards and backwards).</p>
            
            <p><strong>Exercise 9:</strong> Create a function that returns the most frequent element in an array.</p>
            
            <p><strong>Exercise 10:</strong> Write a program that simulates rolling two dice 1000 times and stores the results. Print a histogram of the sums (2-12).</p>
        </div>

        <!-- ==================== SECTION 13: KEY TERMS ==================== -->
        <h3>5.1.12 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Array</strong>
                <p style="font-size: 12px;">Collection of same-type elements</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Index</strong>
                <p style="font-size: 12px;">Position of element (0-based)</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Element</strong>
                <p style="font-size: 12px;">Individual item in array</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Size</strong>
                <p style="font-size: 12px;">Number of elements</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Bounds</strong>
                <p style="font-size: 12px;">Valid index range</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Traversal</strong>
                <p style="font-size: 12px;">Processing each element</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Linear Search</strong>
                <p style="font-size: 12px;">Sequential element search</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Contiguous</strong>
                <p style="font-size: 12px;">Elements stored next to each other</p>
            </div>
        </div>
        
        <!-- ==================== PREVIEW OF NEXT SECTION ==================== -->
        <div style="background: linear-gradient(135deg, #667eea20, #764ba220); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">📖 Next: 5.2 Multi-dimensional Array</h4>
            <p>In the next section, we'll learn about multi-dimensional arrays - arrays of arrays!</p>
        </div>
    `,
    navigation: {
        next: "ch5-2",
        prev: null,
        nextTitle: "5.2 Multi-dimensional Array",
        prevTitle: null
    }
};