// ===============================
// Computer Programming - Chapter 7.1
// File and File Management
// ===============================

window.currentSubsectionData = {
    title: "7.1 File and File Management",
    content: `
        <h2>7.1 File and File Management</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand what files are and why file management is important</li>
                <li>Learn about file streams in C++ (ifstream, ofstream, fstream)</li>
                <li>Master opening and closing files</li>
                <li>Learn to read from and write to text files</li>
                <li>Understand file modes and error handling</li>
                <li>Learn about binary file operations</li>
                <li>Master file positioning (seekg, seekp, tellg, tellp)</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: INTRODUCTION TO FILES ==================== -->
        <h3>7.1.1 What is a File?</h3>
        
        <p>A <strong>file</strong> is a collection of data stored on a secondary storage device (like hard disk, SSD, USB drive) that can be accessed and manipulated by programs. Files provide <strong>persistent storage</strong> - data remains even after the program ends.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> A file is a named collection of related data that is stored on permanent storage media and can be accessed by programs.</p>
        </div>
        
        <h4>Why Do We Need Files?</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Without Files</th>
                <th style="padding: 10px;">With Files</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <ul>
                        <li>Data lost when program ends</li>
                        <li>Must re-enter data each time</li>
                        <li>Can't share data between programs</li>
                        <li>Limited to console input/output</li>
                        <li>No way to store large amounts</li>
                    </ul>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <ul>
                        <li>Data persists between program runs</li>
                        <li>Data loaded from files automatically</li>
                        <li>Files can be shared between programs</li>
                        <li>Can process large datasets</li>
                        <li>Data can be backed up and archived</li>
                    </ul>
                </td>
            </tr>
        </table>
        
        <h4>Analogy: Filing Cabinet</h4>
        <p>Think of file management like a filing cabinet:</p>
        <ul>
            <li>The <strong>filing cabinet</strong> is your storage device (hard drive)</li>
            <li>Each <strong>folder</strong> is a directory</li>
            <li>Each <strong>document</strong> is a file</li>
            <li><strong>Opening a drawer</strong> is like opening a file</li>
            <li><strong>Reading a document</strong> is reading from a file</li>
            <li><strong>Writing notes</strong> is writing to a file</li>
            <li><strong>Closing the drawer</strong> is closing the file</li>
        </ul>

        <!-- ==================== SECTION 2: FILE STREAMS IN C++ ==================== -->
        <h3>7.1.2 File Streams in C++</h3>
        
        <p>C++ provides three main classes for file operations, all defined in the <code><fstream></code> header:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Class</th>
                <th style="padding: 10px;">Purpose</th>
                <th style="padding: 10px;">Header</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>ifstream</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Input file stream (reading from files)</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code><fstream></code></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>ofstream</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Output file stream (writing to files)</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code><fstream></code></td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>fstream</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">File stream (both reading and writing)</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><code><fstream></code></td>
            </tr>
        </table>
        
        <h4>Basic File Operations Lifecycle:</h4>
        
        <pre>
1. Include necessary header: #include <fstream>
2. Create a file stream object (ifstream, ofstream, or fstream)
3. Open the file (connect the stream to a file)
4. Check if file opened successfully
5. Read from or write to the file
6. Close the file when done</pre>

        <!-- ==================== SECTION 3: OPENING AND CLOSING FILES ==================== -->
        <h3>7.1.3 Opening and Closing Files</h3>
        
        <h4>Opening Files:</h4>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;fstream&gt;
#include &lt;string&gt;
using namespace std;

int main() {
    // Method 1: Open using constructor
    ofstream outFile("output.txt");      // Open for writing
    ifstream inFile("input.txt");        // Open for reading
    fstream ioFile("data.txt", ios::in | ios::out);  // Open for both
    
    // Method 2: Open using open() member function
    ofstream anotherFile;
    anotherFile.open("results.txt");
    
    // Method 3: Open with specific modes
    ofstream appendFile("log.txt", ios::app);  // Append mode
    
    // Always check if file opened successfully
    if (!outFile) {
        cerr << "Error opening file!" << endl;
        return 1;
    }
    
    // ... file operations ...
    
    // Close files when done
    outFile.close();
    inFile.close();
    ioFile.close();
    anotherFile.close();
    appendFile.close();
    
    return 0;
}</pre>
        
        <h4>File Opening Modes:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Mode</th>
                <th style="padding: 10px;">Description</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>ios::in</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Open for reading</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>ios::out</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Open for writing (creates new file or truncates existing)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>ios::app</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Append to end of file (all writes go to end)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>ios::ate</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Open and seek to end (but you can write anywhere)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><code>ios::trunc</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Truncate file to zero length if it exists</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><code>ios::binary</code></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Open in binary mode (instead of text mode)</td>
            </tr>
        </table>

        <!-- ==================== SECTION 4: WRITING TO FILES ==================== -->
        <h3>7.1.4 Writing to Files</h3>
        
        <p>You can write to files using the insertion operator (<code><<</code>) just like with <code>cout</code>.</p>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;fstream&gt;
#include &lt;iomanip&gt;
using namespace std;

int main() {
    // Create and open file for writing
    ofstream outFile("students.txt");
    
    if (!outFile) {
        cerr << "Error creating file!" << endl;
        return 1;
    }
    
    // Write data to file
    outFile << "=== Student Records ===" << endl;
    outFile << "Name: Alice" << endl;
    outFile << "ID: 1001" << endl;
    outFile << "GPA: 3.8" << endl;
    outFile << endl;
    
    outFile << "Name: Bob" << endl;
    outFile << "ID: 1002" << endl;
    outFile << "GPA: 3.2" << endl;
    outFile << endl;
    
    // Write using formatting
    double prices[] = {12.99, 24.50, 7.25, 19.99};
    int quantities[] = {5, 3, 10, 2};
    
    ofstream invoice("invoice.txt");
    invoice << fixed << setprecision(2);
    invoice << "=== INVOICE ===" << endl;
    invoice << setw(10) << "Item" << setw(10) << "Price" 
            << setw(10) << "Qty" << setw(10) << "Total" << endl;
    
    double grandTotal = 0;
    for (int i = 0; i < 4; i++) {
        double total = prices[i] * quantities[i];
        invoice << setw(10) << i+1 << setw(10) << prices[i] 
                << setw(10) << quantities[i] << setw(10) << total << endl;
        grandTotal += total;
    }
    invoice << "Grand Total: $" << grandTotal << endl;
    
    // Append to existing file
    ofstream logFile("log.txt", ios::app);
    logFile << "Program started at " << __TIME__ << endl;
    
    cout << "Data written to files successfully!" << endl;
    
    // Close files
    outFile.close();
    invoice.close();
    logFile.close();
    
    return 0;
}</pre>

        <!-- ==================== SECTION 5: READING FROM FILES ==================== -->
        <h3>7.1.5 Reading from Files</h3>
        
        <p>Reading from files uses the extraction operator (<code>>></code>) similar to <code>cin</code>.</p>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;fstream&gt;
#include &lt;string&gt;
using namespace std;

int main() {
    // Open file for reading
    ifstream inFile("students.txt");
    
    if (!inFile) {
        cerr << "Error opening file!" << endl;
        return 1;
    }
    
    // Method 1: Reading word by word
    string word;
    cout << "Reading word by word:" << endl;
    while (inFile >> word) {
        cout << word << " ";
    }
    cout << endl;
    
    // Reset file position to beginning
    inFile.clear();   // Clear EOF flag
    inFile.seekg(0);  // Go to beginning
    
    // Method 2: Reading line by line
    string line;
    cout << "\\nReading line by line:" << endl;
    while (getline(inFile, line)) {
        cout << line << endl;
    }
    
    inFile.close();
    
    // Reading structured data
    ifstream dataFile("data.txt");
    if (!dataFile) {
        cerr << "Error opening data file!" << endl;
        return 1;
    }
    
    int id;
    string name;
    double score;
    
    cout << "\\nReading structured data:" << endl;
    while (dataFile >> id >> name >> score) {
        cout << "ID: " << id << ", Name: " << name 
             << ", Score: " << score << endl;
    }
    
    dataFile.close();
    
    return 0;
}</pre>

        <!-- ==================== SECTION 6: CHECKING FILE STATUS ==================== -->
        <h3>7.1.6 Checking File Status</h3>
        
        <p>C++ provides several member functions to check the state of a file stream.</p>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;fstream&gt;
using namespace std;

int main() {
    ifstream file("example.txt");
    
    // Check if file opened successfully
    if (!file) {
        cerr << "Failed to open file!" << endl;
        return 1;
    }
    
    // File state flags
    cout << "File state after opening:" << endl;
    cout << "good(): " << file.good() << endl;   // True if no errors
    cout << "eof(): " << file.eof() << endl;     // True if end of file reached
    cout << "fail(): " << file.fail() << endl;    // True if operation failed
    cout << "bad(): " << file.bad() << endl;      // True if fatal error
    
    // Read some data
    int value;
    file >> value;
    
    // Check after reading
    cout << "\\nAfter reading:" << endl;
    cout << "good(): " << file.good() << endl;
    cout << "fail(): " << file.fail() << endl;
    
    // Attempt to read past EOF
    while (file >> value) {
        // Reading...
    }
    
    cout << "\\nAfter reaching EOF:" << endl;
    cout << "eof(): " << file.eof() << endl;
    cout << "fail(): " << file.fail() << endl;  // True because read failed
    
    // Clear error flags
    file.clear();
    cout << "\\nAfter clear():" << endl;
    cout << "fail(): " << file.fail() << endl;
    
    file.close();
    
    return 0;
}</pre>

        <!-- ==================== SECTION 7: FILE POSITIONING ==================== -->
        <h3>7.1.7 File Positioning</h3>
        
        <p>You can move to different positions in a file using seek functions.</p>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;fstream&gt;
#include &lt;string&gt;
using namespace std;

int main() {
    fstream file("data.txt", ios::in | ios::out | ios::trunc);
    
    if (!file) {
        cerr << "Error opening file!" << endl;
        return 1;
    }
    
    // Write some data
    file << "Line 1: Hello" << endl;
    file << "Line 2: World" << endl;
    file << "Line 3: C++ File I/O" << endl;
    
    // Get current position
    streampos pos = file.tellp();
    cout << "Current write position: " << pos << endl;
    
    // Move read position to beginning
    file.seekg(0, ios::beg);
    
    // Read and display first line
    string line;
    getline(file, line);
    cout << "First line: " << line << endl;
    
    // Move to position 10 from beginning
    file.seekg(10, ios::beg);
    getline(file, line);
    cout << "From position 10: " << line << endl;
    
    // Move 5 characters forward from current position
    file.seekg(5, ios::cur);
    getline(file, line);
    cout << "After moving 5: " << line << endl;
    
    // Move to 10 characters from end
    file.seekg(-10, ios::end);
    getline(file, line);
    cout << "Last 10 chars: " << line << endl;
    
    // Demonstrate seekp for writing
    file.seekp(0, ios::beg);
    file << "Modified: ";
    
    file.close();
    
    return 0;
}</pre>

        <!-- ==================== SECTION 8: BINARY FILE OPERATIONS ==================== -->
        <h3>7.1.8 Binary File Operations</h3>
        
        <p>Binary files store data in the same format as memory, making them more efficient for structured data.</p>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;fstream&gt;
#include &lt;string&gt;
using namespace std;

struct Student {
    char name[50];
    int id;
    double gpa;
    int age;
};

int main() {
    // Writing binary data
    ofstream outFile("students.dat", ios::binary);
    
    if (!outFile) {
        cerr << "Error creating binary file!" << endl;
        return 1;
    }
    
    // Create some students
    Student students[3] = {
        {"Alice", 1001, 3.8, 20},
        {"Bob", 1002, 3.2, 21},
        {"Charlie", 1003, 3.5, 19}
    };
    
    // Write array to file
    outFile.write(reinterpret_cast<char*>(students), sizeof(students));
    outFile.close();
    
    // Reading binary data
    ifstream inFile("students.dat", ios::binary);
    
    if (!inFile) {
        cerr << "Error opening binary file!" << endl;
        return 1;
    }
    
    Student readStudents[3];
    
    // Read from file
    inFile.read(reinterpret_cast<char*>(readStudents), sizeof(readStudents));
    
    // Display read data
    cout << "=== Students Read from Binary File ===" << endl;
    for (int i = 0; i < 3; i++) {
        cout << "Name: " << readStudents[i].name << ", ID: " << readStudents[i].id
             << ", GPA: " << readStudents[i].gpa << ", Age: " << readStudents[i].age << endl;
    }
    
    inFile.close();
    
    // Writing single structure
    ofstream singleFile("single.dat", ios::binary);
    Student s = {"David", 1004, 3.9, 22};
    singleFile.write(reinterpret_cast<char*>(&s), sizeof(Student));
    singleFile.close();
    
    // Reading single structure
    ifstream readSingle("single.dat", ios::binary);
    Student s2;
    readSingle.read(reinterpret_cast<char*>(&s2), sizeof(Student));
    cout << "\\nSingle student: " << s2.name << " (ID: " << s2.id << ")" << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 9: ERROR HANDLING ==================== -->
        <h3>7.1.9 Error Handling in File Operations</h3>
        
        <p>Proper error handling is crucial when working with files.</p>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;fstream&gt;
#include &lt;string&gt;
using namespace std;

bool safeFileOperation() {
    string filename;
    cout << "Enter filename: ";
    getline(cin, filename);
    
    // Try to open file
    ifstream file(filename);
    
    if (!file) {
        cerr << "Error: Could not open file '" << filename << "'" << endl;
        cerr << "Possible reasons:" << endl;
        cerr << "  - File does not exist" << endl;
        cerr << "  - Insufficient permissions" << endl;
        cerr << "  - Path is incorrect" << endl;
        return false;
    }
    
    // Check if file is empty
    file.seekg(0, ios::end);
    if (file.tellg() == 0) {
        cerr << "Warning: File is empty!" << endl;
    }
    file.seekg(0, ios::beg);
    
    // Read and process file
    string line;
    int lineCount = 0;
    
    try {
        while (getline(file, line)) {
            lineCount++;
            // Process line...
        }
        
        if (file.bad()) {
            cerr << "Fatal error occurred while reading!" << endl;
            return false;
        }
        
        cout << "Successfully read " << lineCount << " lines." << endl;
        
    } catch (const exception &e) {
        cerr << "Exception caught: " << e.what() << endl;
        return false;
    }
    
    file.close();
    return true;
}

int main() {
    cout << "=== Safe File Operation Demo ===" << endl;
    
    if (safeFileOperation()) {
        cout << "File operation completed successfully." << endl;
    } else {
        cout << "File operation failed." << endl;
    }
    
    return 0;
}</pre>

        <!-- ==================== SECTION 10: COMPLETE EXAMPLE - STUDENT DATABASE WITH FILES ==================== -->
        <h3>7.1.10 Complete Example: Student Database with File Storage</h3>
        
        <pre>
// ============================================
// Program: Student Database with File Storage
// Author: CS Student
// Description: Complete file management example
// ============================================

#include &lt;iostream&gt;
#include &lt;fstream&gt;
#include &lt;string&gt;
#include &lt;iomanip&gt;
#include &lt;vector&gt;
using namespace std;

const int MAX_NAME = 50;

struct Student {
    char name[MAX_NAME];
    int id;
    double gpa;
    int age;
};

class StudentDatabase {
private:
    string filename;
    vector<Student> students;
    
public:
    StudentDatabase(string fname) : filename(fname) {
        loadFromFile();
    }
    
    void loadFromFile() {
        students.clear();
        ifstream file(filename, ios::binary);
        
        if (!file) {
            cout << "No existing database found. Starting fresh." << endl;
            return;
        }
        
        Student s;
        while (file.read(reinterpret_cast<char*>(&s), sizeof(Student))) {
            students.push_back(s);
        }
        
        file.close();
        cout << "Loaded " << students.size() << " students from database." << endl;
    }
    
    void saveToFile() {
        ofstream file(filename, ios::binary | ios::trunc);
        
        if (!file) {
            cerr << "Error saving to file!" << endl;
            return;
        }
        
        for (const Student &s : students) {
            file.write(reinterpret_cast<const char*>(&s), sizeof(Student));
        }
        
        file.close();
        cout << "Saved " << students.size() << " students to database." << endl;
    }
    
    void addStudent() {
        Student s;
        
        cout << "Enter name: ";
        cin.ignore();
        cin.getline(s.name, MAX_NAME);
        
        cout << "Enter ID: ";
        cin >> s.id;
        
        // Check for duplicate ID
        for (const Student &existing : students) {
            if (existing.id == s.id) {
                cout << "Error: ID already exists!" << endl;
                return;
            }
        }
        
        cout << "Enter GPA: ";
        cin >> s.gpa;
        
        cout << "Enter age: ";
        cin >> s.age;
        
        students.push_back(s);
        saveToFile();
        cout << "Student added successfully!" << endl;
    }
    
    void displayAll() {
        if (students.empty()) {
            cout << "No students in database." << endl;
            return;
        }
        
        cout << "\\n=== STUDENT LIST ===" << endl;
        cout << setw(5) << "ID" << setw(20) << "Name" 
             << setw(8) << "GPA" << setw(6) << "Age" << endl;
        cout << string(50, '-') << endl;
        
        for (const Student &s : students) {
            cout << setw(5) << s.id 
                 << setw(20) << s.name 
                 << setw(8) << fixed << setprecision(2) << s.gpa
                 << setw(6) << s.age << endl;
        }
    }
    
    void searchStudent() {
        int id;
        cout << "Enter student ID to search: ";
        cin >> id;
        
        for (const Student &s : students) {
            if (s.id == id) {
                cout << "\\nStudent found:" << endl;
                cout << "Name: " << s.name << endl;
                cout << "ID: " << s.id << endl;
                cout << "GPA: " << s.gpa << endl;
                cout << "Age: " << s.age << endl;
                return;
            }
        }
        
        cout << "Student not found." << endl;
    }
    
    void deleteStudent() {
        int id;
        cout << "Enter student ID to delete: ";
        cin >> id;
        
        for (auto it = students.begin(); it != students.end(); ++it) {
            if (it->id == id) {
                students.erase(it);
                saveToFile();
                cout << "Student deleted successfully." << endl;
                return;
            }
        }
        
        cout << "Student not found." << endl;
    }
    
    void updateStudent() {
        int id;
        cout << "Enter student ID to update: ";
        cin >> id;
        
        for (Student &s : students) {
            if (s.id == id) {
                cout << "Current information:" << endl;
                cout << "Name: " << s.name << endl;
                cout << "GPA: " << s.gpa << endl;
                cout << "Age: " << s.age << endl;
                
                cout << "\\nEnter new GPA: ";
                cin >> s.gpa;
                
                cout << "Enter new age: ";
                cin >> s.age;
                
                saveToFile();
                cout << "Student updated successfully." << endl;
                return;
            }
        }
        
        cout << "Student not found." << endl;
    }
    
    void exportToText() {
        string textFile = filename + ".txt";
        ofstream out(textFile);
        
        if (!out) {
            cerr << "Error creating text file!" << endl;
            return;
        }
        
        out << "=== STUDENT DATABASE EXPORT ===" << endl;
        out << "Total students: " << students.size() << endl;
        out << endl;
        
        out << left << setw(5) << "ID" << setw(20) << "Name" 
            << setw(8) << "GPA" << setw(6) << "Age" << endl;
        out << string(50, '-') << endl;
        
        for (const Student &s : students) {
            out << left << setw(5) << s.id 
                << setw(20) << s.name 
                << fixed << setprecision(2) << setw(8) << s.gpa
                << setw(6) << s.age << endl;
        }
        
        out.close();
        cout << "Database exported to " << textFile << endl;
    }
    
    void generateReport() {
        if (students.empty()) {
            cout << "No data to generate report." << endl;
            return;
        }
        
        double sumGPA = 0;
        int minAge = students[0].age;
        int maxAge = students[0].age;
        
        for (const Student &s : students) {
            sumGPA += s.gpa;
            if (s.age < minAge) minAge = s.age;
            if (s.age > maxAge) maxAge = s.age;
        }
        
        double avgGPA = sumGPA / students.size();
        
        cout << "\\n=== DATABASE REPORT ===" << endl;
        cout << "Total students: " << students.size() << endl;
        cout << "Average GPA: " << fixed << setprecision(2) << avgGPA << endl;
        cout << "Age range: " << minAge << " - " << maxAge << endl;
        
        // Count by GPA ranges
        int honors = 0, good = 0, average = 0, poor = 0;
        for (const Student &s : students) {
            if (s.gpa >= 3.5) honors++;
            else if (s.gpa >= 3.0) good++;
            else if (s.gpa >= 2.0) average++;
            else poor++;
        }
        
        cout << "\\nGPA Distribution:" << endl;
        cout << "Honors (>=3.5): " << honors << endl;
        cout << "Good (3.0-3.49): " << good << endl;
        cout << "Average (2.0-2.99): " << average << endl;
        cout << "Poor (<2.0): " << poor << endl;
    }
};

int main() {
    StudentDatabase db("students.dat");
    int choice;
    
    do {
        cout << "\\n===== STUDENT DATABASE SYSTEM =====" << endl;
        cout << "1. Add Student" << endl;
        cout << "2. Display All Students" << endl;
        cout << "3. Search Student" << endl;
        cout << "4. Delete Student" << endl;
        cout << "5. Update Student" << endl;
        cout << "6. Export to Text File" << endl;
        cout << "7. Generate Report" << endl;
        cout << "8. Exit" << endl;
        cout << "Choice: ";
        cin >> choice;
        
        switch (choice) {
            case 1: db.addStudent(); break;
            case 2: db.displayAll(); break;
            case 3: db.searchStudent(); break;
            case 4: db.deleteStudent(); break;
            case 5: db.updateStudent(); break;
            case 6: db.exportToText(); break;
            case 7: db.generateReport(); break;
            case 8: cout << "Goodbye!" << endl; break;
            default: cout << "Invalid choice!" << endl;
        }
        
    } while (choice != 8);
    
    return 0;
}</pre>

        <!-- ==================== SECTION 11: SUMMARY ==================== -->
        <h3>7.1.11 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li><strong>Files</strong> provide persistent storage between program runs</li>
                <li>Use <code>#include <fstream></code> for file operations</li>
                <li>Three main classes: <code>ifstream</code> (read), <code>ofstream</code> (write), <code>fstream</code> (both)</li>
                <li>Always check if file opened successfully with <code>if (!file)</code></li>
                <li>Close files with <code>.close()</code> when done</li>
                <li><strong>File modes:</strong> <code>ios::in</code>, <code>ios::out</code>, <code>ios::app</code>, <code>ios::binary</code>, etc.</li>
                <li>Write with <code><<</code> (text) or <code>.write()</code> (binary)</li>
                <li>Read with <code>>></code> (text) or <code>.read()</code> (binary)</li>
                <li>Use <code>getline(file, line)</code> to read entire lines</li>
                <li>Check file state with <code>.good()</code>, <code>.eof()</code>, <code>.fail()</code>, <code>.bad()</code></li>
                <li>File positioning: <code>seekg()</code>/<code>seekp()</code> and <code>tellg()</code>/<code>tellp()</code></li>
                <li>Binary files are efficient for structured data</li>
                <li>Always handle errors appropriately</li>
            </ul>
        </div>

        <!-- ==================== SECTION 12: EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Write a program that creates a file and writes the numbers 1 to 100, one per line.</p>
            
            <p><strong>Exercise 2:</strong> Create a program that reads a text file and counts the number of lines, words, and characters.</p>
            
            <p><strong>Exercise 3:</strong> Write a program that copies one file to another (file copy utility).</p>
            
            <p><strong>Exercise 4:</strong> Create a simple diary program that appends user input to a file with date and time stamps.</p>
            
            <p><strong>Exercise 5:</strong> Write a program that stores a list of tasks (to-do list) in a file and allows adding, viewing, and completing tasks.</p>
            
            <p><strong>Exercise 6:</strong> Create a program that reads a CSV file containing student data (name, id, grades) and calculates averages.</p>
            
            <p><strong>Exercise 7:</strong> Write a program that encrypts a file by adding 1 to each byte (simple Caesar cipher) and decrypts it.</p>
            
            <p><strong>Exercise 8:</strong> Create a program that searches for a specific word in a text file and displays the lines where it appears.</p>
            
            <p><strong>Exercise 9:</strong> Write a program that merges two files alternately (line from file1, line from file2, etc.) into a new file.</p>
            
            <p><strong>Exercise 10:</strong> Enhance the student database example to include sorting by different fields and searching by name pattern.</p>
        </div>

        <!-- ==================== SECTION 13: KEY TERMS ==================== -->
        <h3>7.1.12 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">File Stream</strong>
                <p style="font-size: 12px;">Connection to a file</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">ifstream</strong>
                <p style="font-size: 12px;">Input file stream</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">ofstream</strong>
                <p style="font-size: 12px;">Output file stream</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">fstream</strong>
                <p style="font-size: 12px;">File stream for both I/O</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">EOF</strong>
                <p style="font-size: 12px;">End of File marker</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Binary Mode</strong>
                <p style="font-size: 12px;">Raw data storage</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Text Mode</strong>
                <p style="font-size: 12px;">Human-readable storage</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">File Pointer</strong>
                <p style="font-size: 12px;">Current position in file</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Seek</strong>
                <p style="font-size: 12px;">Move file pointer</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Flush</strong>
                <p style="font-size: 12px;">Write buffer to disk</p>
            </div>
        </div>
        
        <!-- ==================== END OF CHAPTER 7 ==================== -->
        <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 30px; border-radius: 15px; margin: 40px 0; text-align: center; color: white;">
            <h3 style="margin: 0 0 15px 0;">📚 End of Chapter 7</h3>
            <p style="font-size: 18px; margin: 0 0 20px 0;">You have completed Chapter 7: File and File Management!</p>
            <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">7.1 File and File Management ✓</span>
            </div>
            <p style="margin-top: 30px;">You have completed all chapters!</p>
        </div>
    `,
    navigation: {
        next: null,
        prev: null,
        nextTitle: null,
        prevTitle: null
    }
};