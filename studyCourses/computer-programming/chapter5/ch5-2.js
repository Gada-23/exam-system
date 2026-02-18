// ===============================
// Computer Programming - Chapter 5.2
// Multi-dimensional Array
// ===============================

window.currentSubsectionData = {
    title: "5.2 Multi-dimensional Array",
    content: `
        <h2>5.2 Multi-dimensional Array</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand what multi-dimensional arrays are</li>
                <li>Learn how to declare and initialize 2D arrays</li>
                <li>Master accessing elements using row and column indices</li>
                <li>Understand memory layout of multi-dimensional arrays</li>
                <li>Learn common operations on 2D arrays</li>
                <li>Work with 3D and higher-dimensional arrays</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: INTRODUCTION TO MULTI-DIMENSIONAL ARRAYS ==================== -->
        <h3>5.2.1 What are Multi-dimensional Arrays?</h3>
        
        <p>A <strong>multi-dimensional array</strong> is an array of arrays. The most common is the two-dimensional (2D) array, which can be thought of as a table or matrix with rows and columns.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> A multi-dimensional array is an array where each element is itself an array. A 2D array is an array of 1D arrays, a 3D array is an array of 2D arrays, and so on.</p>
        </div>
        
        <h4>Analogy: Spreadsheet</h4>
        <p>Think of a 2D array like a spreadsheet:</p>
        <ul>
            <li><strong>Rows</strong> - horizontal lines of data</li>
            <li><strong>Columns</strong> - vertical lines of data</li>
            <li><strong>Cell</strong> - intersection of a row and column</li>
            <li>Each cell can hold one value</li>
        </ul>
        
        <h4>Visual Representation of a 2D Array:</h4>
        
        <pre>
        Column 0  Column 1  Column 2  Column 3
        ┌────────┬────────┬────────┬────────┐
Row 0   │  [0][0] │ [0][1]  │ [0][2]  │ [0][3]  │
        ├────────┼────────┼────────┼────────┤
Row 1   │  [1][0] │ [1][1]  │ [1][2]  │ [1][3]  │
        ├────────┼────────┼────────┼────────┤
Row 2   │  [2][0] │ [2][1]  │ [2][2]  │ [2][3]  │
        └────────┴────────┴────────┴────────┘</pre>

        <!-- ==================== SECTION 2: DECLARING 2D ARRAYS ==================== -->
        <h3>5.2.2 Declaring 2D Arrays</h3>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Syntax:</strong> <code>data_type array_name[rows][columns];</code></p>
        </div>
        
        <h4>Examples:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Declaring 2D arrays
    int matrix[3][4];           // 3 rows, 4 columns (12 elements total)
    double grades[5][3];        // 5 students, 3 exams each
    char ticTacToe[3][3];       // 3x3 tic-tac-toe board
    
    // Constants can be used for dimensions
    const int ROWS = 10;
    const int COLS = 8;
    int grid[ROWS][COLS];
    
    return 0;
}</pre>
        
        <h4>Memory Layout:</h4>
        
        <pre>
A 2D array is stored in row-major order (row by row):

int arr[3][4] (uninitialized):

Row 0: [ ? ][ ? ][ ? ][ ? ]
Row 1: [ ? ][ ? ][ ? ][ ? ]
Row 2: [ ? ][ ? ][ ? ][ ? ]

In memory (contiguous):
[0][0] [0][1] [0][2] [0][3] [1][0] [1][1] [1][2] [1][3] [2][0] [2][1] [2][2] [2][3]</pre>

        <!-- ==================== SECTION 3: INITIALIZING 2D ARRAYS ==================== -->
        <h3>5.2.3 Initializing 2D Arrays</h3>
        
        <h4>Method 1: Nested Braces</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Initialize all elements
    int matrix[3][4] = {
        {1, 2, 3, 4},      // Row 0
        {5, 6, 7, 8},      // Row 1
        {9, 10, 11, 12}    // Row 2
    };
    
    // Partial initialization - missing elements set to 0
    int partial[3][4] = {
        {1, 2},            // Row 0: 1,2,0,0
        {3, 4, 5},         // Row 1: 3,4,5,0
        {6}                 // Row 2: 6,0,0,0
    };
    
    // Initialize all to 0
    int zeros[3][4] = {0};  // All elements 0
    
    return 0;
}</pre>
        
        <h4>Method 2: Flat Initialization</h4>
        
        <pre>
int matrix[3][4] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12};
// Elements fill row by row:
// Row 0: 1,2,3,4
// Row 1: 5,6,7,8
// Row 2: 9,10,11,12</pre>
        
        <h4>Method 3: Initialize After Declaration</h4>
        
        <pre>
int scores[3][3];
scores[0][0] = 85;  // Row 0, Col 0
scores[0][1] = 92;  // Row 0, Col 1
scores[0][2] = 78;  // Row 0, Col 2
// ... and so on</pre>
        
        <h4>Method 4: Using Loops</h4>
        
        <pre>
int identity[4][4];
for (int i = 0; i < 4; i++) {
    for (int j = 0; j < 4; j++) {
        if (i == j) {
            identity[i][j] = 1;   // Diagonal elements
        } else {
            identity[i][j] = 0;   // Off-diagonal elements
        }
    }
}</pre>

        <!-- ==================== SECTION 4: ACCESSING 2D ARRAY ELEMENTS ==================== -->
        <h3>5.2.4 Accessing 2D Array Elements</h3>
        
        <p>Use two indices: <code>array[row][column]</code></p>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int matrix[3][4] = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12}
    };
    
    // Access individual elements
    cout << "Element at [0][0]: " << matrix[0][0] << endl;  // 1
    cout << "Element at [1][2]: " << matrix[1][2] << endl;  // 7
    cout << "Element at [2][3]: " << matrix[2][3] << endl;  // 12
    
    // Modify an element
    matrix[1][1] = 99;
    cout << "After modification: " << matrix[1][1] << endl;  // 99
    
    // Access using variables
    int row = 2, col = 0;
    cout << "Element at [" << row << "][" << col << "]: " 
         << matrix[row][col] << endl;  // 9
    
    return 0;
}</pre>

        <!-- ==================== SECTION 5: TRAVERSING 2D ARRAYS ==================== -->
        <h3>5.2.5 Traversing 2D Arrays</h3>
        
        <p>Use nested loops to process all elements.</p>
        
        <h4>Example 1: Printing a 2D Array</h4>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;iomanip&gt;
using namespace std;

int main() {
    int matrix[3][4] = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12}
    };
    
    cout << "Matrix:" << endl;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 4; j++) {
            cout << setw(4) << matrix[i][j];
        }
        cout << endl;  // New line after each row
    }
    
    return 0;
}</pre>
        
        <p><strong>Output:</strong></p>
        <pre>
Matrix:
   1   2   3   4
   5   6   7   8
   9  10  11  12</pre>
        
        <h4>Example 2: Sum of All Elements</h4>
        
        <pre>
int sum = 0;
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 4; j++) {
        sum += matrix[i][j];
    }
}
cout << "Sum of all elements: " << sum << endl;</pre>
        
        <h4>Example 3: Row-wise vs Column-wise Processing</h4>
        
        <pre>
// Row-wise sum
for (int i = 0; i < 3; i++) {
    int rowSum = 0;
    for (int j = 0; j < 4; j++) {
        rowSum += matrix[i][j];
    }
    cout << "Sum of row " << i << ": " << rowSum << endl;
}

// Column-wise sum
for (int j = 0; j < 4; j++) {
    int colSum = 0;
    for (int i = 0; i < 3; i++) {
        colSum += matrix[i][j];
    }
    cout << "Sum of column " << j << ": " << colSum << endl;
}</pre>

        <!-- ==================== SECTION 6: COMMON 2D ARRAY OPERATIONS ==================== -->
        <h3>5.2.6 Common 2D Array Operations</h3>
        
        <h4>Example 1: Matrix Addition</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int A[2][3] = {{1, 2, 3}, {4, 5, 6}};
    int B[2][3] = {{7, 8, 9}, {10, 11, 12}};
    int C[2][3];
    
    // Add matrices
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            C[i][j] = A[i][j] + B[i][j];
        }
    }
    
    // Display result
    cout << "A + B = " << endl;
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            cout << C[i][j] << " ";
        }
        cout << endl;
    }
    
    return 0;
}</pre>
        
        <h4>Example 2: Matrix Multiplication</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int A[2][3] = {{1, 2, 3}, {4, 5, 6}};
    int B[3][2] = {{7, 8}, {9, 10}, {11, 12}};
    int C[2][2] = {{0, 0}, {0, 0}};
    
    // Multiply matrices (2x3 * 3x2 = 2x2)
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            for (int k = 0; k < 3; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    
    // Display result
    cout << "A * B = " << endl;
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            cout << C[i][j] << " ";
        }
        cout << endl;
    }
    
    return 0;
}</pre>
        
        <h4>Example 3: Transpose of a Matrix</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    int matrix[3][4] = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12}
    };
    int transpose[4][3];
    
    // Compute transpose (swap rows and columns)
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 4; j++) {
            transpose[j][i] = matrix[i][j];
        }
    }
    
    // Display transpose
    cout << "Transpose:" << endl;
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 3; j++) {
            cout << transpose[i][j] << " ";
        }
        cout << endl;
    }
    
    return 0;
}</pre>

        <!-- ==================== SECTION 7: PASSING 2D ARRAYS TO FUNCTIONS ==================== -->
        <h3>5.2.7 Passing 2D Arrays to Functions</h3>
        
        <p>When passing a 2D array to a function, you must specify the number of columns (the second dimension).</p>
        
        <h4>Example 1: Function with Fixed Column Size</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

const int COLS = 4;

// Must specify column size
void printMatrix(int matrix[][COLS], int rows) {
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < COLS; j++) {
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }
}

void doubleMatrix(int matrix[][COLS], int rows) {
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < COLS; j++) {
            matrix[i][j] *= 2;
        }
    }
}

int main() {
    int mat[3][4] = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12}
    };
    
    cout << "Original:" << endl;
    printMatrix(mat, 3);
    
    doubleMatrix(mat, 3);
    
    cout << "\\nAfter doubling:" << endl;
    printMatrix(mat, 3);
    
    return 0;
}</pre>
        
        <h4>Example 2: Generic Function with Template (Advanced)</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

template&lt;size_t rows, size_t cols&gt;
void printArray(int (&array)[rows][cols]) {
    for (size_t i = 0; i < rows; i++) {
        for (size_t j = 0; j < cols; j++) {
            cout << array[i][j] << " ";
        }
        cout << endl;
    }
}

int main() {
    int mat1[2][3] = {{1,2,3}, {4,5,6}};
    int mat2[3][4] = {{1,2,3,4}, {5,6,7,8}, {9,10,11,12}};
    
    cout << "Matrix 1 (2x3):" << endl;
    printArray(mat1);
    
    cout << "\\nMatrix 2 (3x4):" << endl;
    printArray(mat2);
    
    return 0;
}</pre>

        <!-- ==================== SECTION 8: 3D AND HIGHER DIMENSIONS ==================== -->
        <h3>5.2.8 3D and Higher Dimensional Arrays</h3>
        
        <p>You can have arrays with more than two dimensions. A 3D array can be thought of as an array of 2D arrays.</p>
        
        <h4>Declaring 3D Arrays:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // 3D array: 2 layers, each 3 rows, 4 columns
    int cube[2][3][4];
    
    // Initialize a 3D array
    int tensor[2][2][3] = {
        {                   // Layer 0
            {1, 2, 3},      // Row 0
            {4, 5, 6}       // Row 1
        },
        {                   // Layer 1
            {7, 8, 9},      // Row 0
            {10, 11, 12}    // Row 1
        }
    };
    
    // Accessing elements
    cout << "Element at [1][0][2]: " << tensor[1][0][2] << endl;  // 9
    
    // Traversing a 3D array
    for (int i = 0; i < 2; i++) {
        cout << "Layer " << i << ":" << endl;
        for (int j = 0; j < 2; j++) {
            for (int k = 0; k < 3; k++) {
                cout << tensor[i][j][k] << " ";
            }
            cout << endl;
        }
        cout << endl;
    }
    
    return 0;
}</pre>
        
        <h4>Practical Uses of Multi-dimensional Arrays:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Dimensions</th>
                <th style="padding: 10px;">Example Use</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">2D</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Spreadsheets, game boards, images (grayscale)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">3D</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Color images (RGB), 3D games, volumetric data</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">4D</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Video frames (time + 3D space), scientific simulations</td>
            </tr>
        </table>

        <!-- ==================== SECTION 9: COMMON PITFALLS ==================== -->
        <h3>5.2.9 Common Pitfalls with Multi-dimensional Arrays</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Pitfall</th>
                <th style="padding: 10px;">Example</th>
                <th style="padding: 10px;">Solution</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Row/Column confusion</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>arr[col][row]</code> instead of <code>arr[row][col]</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Always think "row first, then column"</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Forgetting column size in function parameter</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>void func(int arr[][])</code> - ERROR!</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Specify column size: <code>void func(int arr[][COLS])</code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Index out of bounds</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Accessing <code>arr[rows][cols]</code> (last valid index is rows-1, cols-1)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Always check loop boundaries: <code>i < rows</code>, <code>j < cols</code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Memory consumption</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>int big[1000][1000]</code> uses 4MB!</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Be aware of size, use dynamically allocated arrays for large data</td>
            </tr>
        </table>

        <!-- ==================== SECTION 10: COMPLETE EXAMPLE - GAME OF LIFE ==================== -->
        <h3>5.2.10 Complete Example: Game of Life Simulator</h3>
        
        <pre>
// ============================================
// Program: Game of Life Simulator
// Author: CS Student
// Description: Conway's Game of Life using 2D arrays
// ============================================

#include &lt;iostream&gt;
#include &lt;iomanip&gt;
#include &lt;unistd.h&gt;  // for usleep() on Unix systems
using namespace std;

const int ROWS = 20;
const int COLS = 40;

// Function prototypes
void initializeGrid(int grid[ROWS][COLS], int pattern);
void printGrid(const int grid[ROWS][COLS]);
int countNeighbors(const int grid[ROWS][COLS], int row, int col);
void updateGrid(int current[ROWS][COLS], int next[ROWS][COLS]);
void clearScreen();

int main() {
    int current[ROWS][COLS] = {0};
    int next[ROWS][COLS] = {0};
    int choice;
    int generations;
    
    cout << "===== CONWAY'S GAME OF LIFE =====" << endl;
    cout << "1. Glider Pattern" << endl;
    cout << "2. Blinker Pattern" << endl;
    cout << "3. Random Pattern" << endl;
    cout << "Choose pattern: ";
    cin >> choice;
    
    initializeGrid(current, choice);
    
    cout << "Enter number of generations to simulate: ";
    cin >> generations;
    
    for (int gen = 0; gen < generations; gen++) {
        clearScreen();
        cout << "Generation " << gen + 1 << " of " << generations << endl;
        printGrid(current);
        
        updateGrid(current, next);
        
        // Swap grids
        for (int i = 0; i < ROWS; i++) {
            for (int j = 0; j < COLS; j++) {
                current[i][j] = next[i][j];
            }
        }
        
        usleep(200000);  // Wait 0.2 seconds
    }
    
    return 0;
}

void initializeGrid(int grid[ROWS][COLS], int pattern) {
    // Clear grid
    for (int i = 0; i < ROWS; i++) {
        for (int j = 0; j < COLS; j++) {
            grid[i][j] = 0;
        }
    }
    
    if (pattern == 1) {  // Glider
        grid[5][5] = 1;
        grid[6][6] = 1;
        grid[7][5] = 1;
        grid[7][6] = 1;
        grid[7][7] = 1;
    }
    else if (pattern == 2) {  // Blinker (oscillator)
        grid[10][20] = 1;
        grid[10][21] = 1;
        grid[10][22] = 1;
    }
    else if (pattern == 3) {  // Random
        for (int i = 0; i < ROWS; i++) {
            for (int j = 0; j < COLS; j++) {
                grid[i][j] = rand() % 2;  // Random 0 or 1
            }
        }
    }
}

void printGrid(const int grid[ROWS][COLS]) {
    cout << "+";
    for (int j = 0; j < COLS; j++) {
        cout << "-";
    }
    cout << "+" << endl;
    
    for (int i = 0; i < ROWS; i++) {
        cout << "|";
        for (int j = 0; j < COLS; j++) {
            if (grid[i][j] == 1) {
                cout << "█";  // Live cell
            } else {
                cout << " ";   // Dead cell
            }
        }
        cout << "|" << endl;
    }
    
    cout << "+";
    for (int j = 0; j < COLS; j++) {
        cout << "-";
    }
    cout << "+" << endl;
}

int countNeighbors(const int grid[ROWS][COLS], int row, int col) {
    int count = 0;
    
    // Check all 8 surrounding cells
    for (int i = -1; i <= 1; i++) {
        for (int j = -1; j <= 1; j++) {
            if (i == 0 && j == 0) continue;  // Skip the cell itself
            
            int r = row + i;
            int c = col + j;
            
            // Check boundaries
            if (r >= 0 && r < ROWS && c >= 0 && c < COLS) {
                count += grid[r][c];
            }
        }
    }
    
    return count;
}

void updateGrid(int current[ROWS][COLS], int next[ROWS][COLS]) {
    for (int i = 0; i < ROWS; i++) {
        for (int j = 0; j < COLS; j++) {
            int neighbors = countNeighbors(current, i, j);
            
            // Apply Game of Life rules
            if (current[i][j] == 1) {  // Live cell
                if (neighbors < 2 || neighbors > 3) {
                    next[i][j] = 0;  // Dies
                } else {
                    next[i][j] = 1;  // Lives
                }
            } else {  // Dead cell
                if (neighbors == 3) {
                    next[i][j] = 1;  // Becomes alive
                } else {
                    next[i][j] = 0;  // Stays dead
                }
            }
        }
    }
}

void clearScreen() {
    // Simple way to clear screen
    for (int i = 0; i < 50; i++) {
        cout << endl;
    }
}</pre>

        <!-- ==================== SECTION 11: SUMMARY ==================== -->
        <h3>5.2.11 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li><strong>2D arrays</strong> are arrays of arrays, organized in rows and columns</li>
                <li>Declaration: <code>type name[rows][cols];</code></li>
                <li>Access elements: <code>array[row][col]</code> (row first, then column)</li>
                <li>Initialization: nested braces <code>{{...}, {...}}</code></li>
                <li>Memory layout: <strong>row-major order</strong> (row by row)</li>
                <li>Use nested loops to traverse 2D arrays</li>
                <li>Common operations: addition, multiplication, transpose</li>
                <li>When passing to functions, must specify <strong>column size</strong></li>
                <li>3D arrays add another dimension: <code>[layer][row][col]</code></li>
                <li>Higher dimensions possible but memory usage grows exponentially</li>
                <li>Always check array bounds to avoid bugs</li>
                <li>Multi-dimensional arrays are essential for matrix operations, games, and simulations</li>
            </ul>
        </div>

        <!-- ==================== SECTION 12: EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Write a program that creates a 5x5 identity matrix (1s on diagonal, 0s elsewhere).</p>
            
            <p><strong>Exercise 2:</strong> Create a function that adds two 3x3 matrices and returns the result.</p>
            
            <p><strong>Exercise 3:</strong> Write a program that finds the largest element in each row of a 2D array.</p>
            
            <p><strong>Exercise 4:</strong> Create a function that checks if a matrix is symmetric (equal to its transpose).</p>
            
            <p><strong>Exercise 5:</strong> Implement a simple tic-tac-toe game using a 3x3 array. Allow two players to take turns.</p>
            
            <p><strong>Exercise 6:</strong> Write a program that multiplies two matrices of compatible dimensions.</p>
            
            <p><strong>Exercise 7:</strong> Create a function that rotates a 2D array 90 degrees clockwise.</p>
            
            <p><strong>Exercise 8:</strong> Write a program that fills a 2D array with numbers in a spiral pattern.</p>
            
            <p><strong>Exercise 9:</strong> Implement a simple image blur filter using a 3x3 kernel on a 2D array.</p>
            
            <p><strong>Exercise 10:</strong> Create a 3D array representing a 3x3x3 Rubik's cube. Write functions to rotate faces.</p>
        </div>

        <!-- ==================== SECTION 13: KEY TERMS ==================== -->
        <h3>5.2.12 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">2D Array</strong>
                <p style="font-size: 12px;">Array of arrays (rows & columns)</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Row</strong>
                <p style="font-size: 12px;">Horizontal dimension</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Column</strong>
                <p style="font-size: 12px;">Vertical dimension</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Matrix</strong>
                <p style="font-size: 12px;">Mathematical 2D array</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Transpose</strong>
                <p style="font-size: 12px;">Swap rows and columns</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Row-Major</strong>
                <p style="font-size: 12px;">Row-by-row memory layout</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">3D Array</strong>
                <p style="font-size: 12px;">Array of 2D arrays (layers)</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Nested Loops</strong>
                <p style="font-size: 12px;">Loops inside loops for traversal</p>
            </div>
        </div>
        
        <!-- ==================== PREVIEW OF NEXT SECTION ==================== -->
        <div style="background: linear-gradient(135deg, #667eea20, #764ba220); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">📖 Next: 5.3 Address and Pointer</h4>
            <p>In the next section, we'll learn about memory addresses and pointers - one of the most powerful features of C++!</p>
        </div>
    `,
    navigation: {
        next: "ch5-3",
        prev: "ch5-1",
        nextTitle: "5.3 Address and Pointer",
        prevTitle: "5.1 One-dimensional Array"
    }
};