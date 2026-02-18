// ===============================
// Computer Programming - Chapter 5.6
// Pointer and String
// ===============================

window.currentSubsectionData = {
    title: "5.6 Pointer and String",
    content: `
        <h2>5.6 Pointer and String</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand C-style strings as character arrays</li>
                <li>Learn how pointers are used to manipulate strings</li>
                <li>Master string traversal using pointers</li>
                <li>Implement common string functions using pointers</li>
                <li>Understand string literals and pointer to strings</li>
                <li>Learn about arrays of strings using pointers</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1: C-STYLE STRINGS ==================== -->
        <h3>5.6.1 C-Style Strings</h3>
        
        <p>In C++, a <strong>C-style string</strong> is an array of characters terminated by a null character (<code>'\\0'</code>). The null terminator marks the end of the string.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> A C-style string is a character array that ends with a null character ('\\0') to indicate the string's end.</p>
        </div>
        
        <h4>String Representation:</h4>
        
        <pre>
char str1[] = "Hello";  // Array of 6 characters: H e l l o \\0

Memory layout:
Index:   0    1    2    3    4    5
Value:   'H'  'e'  'l'  'l'  'o'  '\\0'
Address: 0x100 0x101 0x102 0x103 0x104 0x105</pre>
        
        <h4>Different Ways to Declare Strings:</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Method 1: As character array with initialization
    char str1[] = "Hello";
    
    // Method 2: As character array with explicit size
    char str2[20] = "Hello";
    
    // Method 3: As pointer to string literal
    const char *str3 = "Hello";
    
    // Method 4: Character by character
    char str4[] = {'H', 'e', 'l', 'l', 'o', '\\0'};
    
    cout << "str1: " << str1 << endl;
    cout << "str2: " << str2 << endl;
    cout << "str3: " << str3 << endl;
    cout << "str4: " << str4 << endl;
    
    return 0;
}</pre>
        
        <div class="warning-box" style="background: #ffe8e8; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #f5576c;">
            <p><strong>⚠️ Important:</strong> Always ensure there's enough space for the null terminator! <code>char str[5] = "Hello";</code> would cause a buffer overflow because "Hello" needs 6 characters (5 letters + null).</p>
        </div>

        <!-- ==================== SECTION 2: STRINGS AS POINTERS ==================== -->
        <h3>5.6.2 Strings as Pointers</h3>
        
        <p>A string name (like <code>str1</code>) is a pointer to the first character. This means we can use pointer arithmetic to work with strings.</p>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    char greeting[] = "Hello";
    
    // String name acts as pointer
    cout << "greeting: " << greeting << endl;        // Prints "Hello"
    cout << "*greeting: " << *greeting << endl;      // Prints 'H'
    cout << "greeting[0]: " << greeting[0] << endl;  // Prints 'H'
    
    // Pointer arithmetic
    cout << "*(greeting + 1): " << *(greeting + 1) << endl;  // 'e'
    cout << "*(greeting + 4): " << *(greeting + 4) << endl;  // 'o'
    
    // Walking through string with pointer
    char *ptr = greeting;
    while (*ptr != '\\0') {
        cout << *ptr << " ";
        ptr++;
    }
    cout << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 3: STRING LENGTH WITH POINTERS ==================== -->
        <h3>5.6.3 Finding String Length Using Pointers</h3>
        
        <p>One of the most common string operations is finding its length. Let's implement our own <code>strlen</code> function using pointers.</p>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Custom strlen using pointer arithmetic
int stringLength(const char *str) {
    const char *start = str;
    
    // Move pointer until we hit null terminator
    while (*str != '\\0') {
        str++;
    }
    
    // Return number of characters
    return str - start;
}

// Alternative implementation
int stringLength2(const char *str) {
    int length = 0;
    while (*str++) {  // While not null, move pointer
        length++;
    }
    return length;
}

int main() {
    const char *text = "Hello, World!";
    
    cout << "String: \"" << text << "\"" << endl;
    cout << "Length: " << stringLength(text) << endl;
    cout << "Length (method 2): " << stringLength2(text) << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 4: STRING COPY WITH POINTERS ==================== -->
        <h3>5.6.4 Copying Strings Using Pointers</h3>
        
        <p>Implementing our own <code>strcpy</code> function demonstrates pointer manipulation.</p>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Custom strcpy using pointers
void stringCopy(char *dest, const char *src) {
    while (*src != '\\0') {
        *dest = *src;
        dest++;
        src++;
    }
    *dest = '\\0';  // Add null terminator
}

// More concise version
void stringCopy2(char *dest, const char *src) {
    while (*dest++ = *src++);  // Copy until null terminator
    // When *src is '\\0', it's assigned and then loop ends
}

int main() {
    char source[] = "Hello, World!";
    char destination[50];  // Make sure it's large enough
    
    stringCopy(destination, source);
    cout << "Source: " << source << endl;
    cout << "Destination: " << destination << endl;
    
    char dest2[50];
    stringCopy2(dest2, source);
    cout << "Destination2: " << dest2 << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 5: STRING COMPARISON WITH POINTERS ==================== -->
        <h3>5.6.5 Comparing Strings Using Pointers</h3>
        
        <p>String comparison (<code>strcmp</code>) compares character by character.</p>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Custom strcmp using pointers
// Returns 0 if equal, negative if str1 < str2, positive if str1 > str2
int stringCompare(const char *str1, const char *str2) {
    while (*str1 && *str2 && *str1 == *str2) {
        str1++;
        str2++;
    }
    
    return *str1 - *str2;
}

int main() {
    const char *s1 = "Hello";
    const char *s2 = "Hello";
    const char *s3 = "World";
    const char *s4 = "Help";
    
    cout << "Comparing \"" << s1 << "\" and \"" << s2 << "\": " 
         << stringCompare(s1, s2) << endl;  // 0 (equal)
    
    cout << "Comparing \"" << s1 << "\" and \"" << s3 << "\": " 
         << stringCompare(s1, s3) << endl;  // Negative (H < W)
    
    cout << "Comparing \"" << s1 << "\" and \"" << s4 << "\": " 
         << stringCompare(s1, s4) << endl;  // 'o' - 'p' = negative
    
    return 0;
}</pre>

        <!-- ==================== SECTION 6: STRING CONCATENATION WITH POINTERS ==================== -->
        <h3>5.6.6 String Concatenation Using Pointers</h3>
        
        <p>Concatenation (<code>strcat</code>) appends one string to another.</p>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Custom strcat using pointers
void stringConcatenate(char *dest, const char *src) {
    // Move dest to the end
    while (*dest) {
        dest++;
    }
    
    // Copy src to the end
    while (*src) {
        *dest = *src;
        dest++;
        src++;
    }
    *dest = '\\0';  // Add null terminator
}

int main() {
    char buffer[100] = "Hello";
    const char *append = " World!";
    
    cout << "Before: " << buffer << endl;
    
    stringConcatenate(buffer, append);
    
    cout << "After: " << buffer << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 7: STRING REVERSE WITH POINTERS ==================== -->
        <h3>5.6.7 Reversing a String Using Pointers</h3>
        
        <p>Reversing a string is a classic problem that demonstrates pointer manipulation.</p>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

void reverseString(char *str) {
    // Find the end of the string
    char *end = str;
    while (*end) {
        end++;
    }
    end--;  // Move back from null terminator
    
    // Swap characters from both ends
    while (str < end) {
        // Swap characters
        char temp = *str;
        *str = *end;
        *end = temp;
        
        // Move pointers
        str++;
        end--;
    }
}

int main() {
    char text[] = "Hello, World!";
    
    cout << "Original: " << text << endl;
    
    reverseString(text);
    
    cout << "Reversed: " << text << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 8: STRING TO UPPER/LOWER CASE ==================== -->
        <h3>5.6.8 Converting String Case Using Pointers</h3>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;cctype&gt;
using namespace std;

void toUpperCase(char *str) {
    while (*str) {
        *str = toupper(*str);
        str++;
    }
}

void toLowerCase(char *str) {
    while (*str) {
        *str = tolower(*str);
        str++;
    }
}

int main() {
    char text[] = "Hello, World!";
    
    cout << "Original: " << text << endl;
    
    toUpperCase(text);
    cout << "Uppercase: " << text << endl;
    
    toLowerCase(text);
    cout << "Lowercase: " << text << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 9: ARRAYS OF STRINGS ==================== -->
        <h3>5.6.9 Arrays of Strings Using Pointers</h3>
        
        <p>We can create arrays of strings using either 2D character arrays or arrays of pointers.</p>
        
        <h4>Method 1: 2D Character Array</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // 2D array: 5 strings, each up to 19 chars + null
    char names[5][20] = {
        "Alice",
        "Bob",
        "Charlie",
        "David",
        "Eve"
    };
    
    cout << "Names (2D array):" << endl;
    for (int i = 0; i < 5; i++) {
        cout << names[i] << endl;
    }
    
    // Access through pointer
    char (*ptr)[20] = names;  // Pointer to array of 20 chars
    cout << "\\nFirst name via pointer: " << *ptr << endl;
    
    return 0;
}</pre>
        
        <h4>Method 2: Array of Pointers</h4>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Array of pointers to string literals
    const char *names[] = {
        "Alice",
        "Bob",
        "Charlie",
        "David",
        "Eve"
    };
    
    int count = sizeof(names) / sizeof(names[0]);
    
    cout << "Names (array of pointers):" << endl;
    for (int i = 0; i < count; i++) {
        cout << names[i] << endl;
    }
    
    // Pointer to pointer
    const char **ptr = names;
    cout << "\\nFirst name via pointer: " << *ptr << endl;
    ptr++;
    cout << "Second name via pointer: " << *ptr << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 10: COMMON STRING FUNCTIONS WITH POINTERS ==================== -->
        <h3>5.6.10 Common String Functions Using Pointers</h3>
        
        <pre>
#include &lt;iostream&gt;
using namespace std;

// Find first occurrence of character
char* findChar(const char *str, char ch) {
    while (*str) {
        if (*str == ch) {
            return const_cast<char*>(str);  // Return pointer to found char
        }
        str++;
    }
    return nullptr;  // Not found
}

// Count occurrences of character
int countChar(const char *str, char ch) {
    int count = 0;
    while (*str) {
        if (*str == ch) {
            count++;
        }
        str++;
    }
    return count;
}

// Check if string starts with prefix
bool startsWith(const char *str, const char *prefix) {
    while (*prefix) {
        if (*str != *prefix) {
            return false;
        }
        str++;
        prefix++;
    }
    return true;
}

// Extract substring
void substring(const char *str, int start, int length, char *result) {
    str += start;  // Move to start position
    
    for (int i = 0; i < length && *str; i++) {
        *result = *str;
        result++;
        str++;
    }
    *result = '\\0';  // Null terminate
}

int main() {
    const char *text = "Hello, World! Welcome to C++";
    
    // Find character
    char *pos = findChar(text, 'W');
    if (pos) {
        cout << "Found 'W' at position: " << pos - text << endl;
        cout << "Rest of string: " << pos << endl;
    }
    
    // Count occurrences
    cout << "\\nNumber of 'o's: " << countChar(text, 'o') << endl;
    cout << "Number of 'l's: " << countChar(text, 'l') << endl;
    
    // Check prefix
    cout << "\\nStarts with \"Hello\": " << (startsWith(text, "Hello") ? "Yes" : "No") << endl;
    cout << "Starts with \"Hi\": " << (startsWith(text, "Hi") ? "Yes" : "No") << endl;
    
    // Extract substring
    char sub[50];
    substring(text, 7, 5, sub);
    cout << "\\nSubstring (7,5): \"" << sub << "\"" << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 11: POINTERS AND STD::STRING ==================== -->
        <h3>5.6.11 Pointers and std::string</h3>
        
        <p>Modern C++ uses <code>std::string</code>, but you can still get pointers to the underlying character data.</p>
        
        <pre>
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

int main() {
    string str = "Hello, World!";
    
    // Get pointer to underlying C-string
    const char *cstr = str.c_str();
    cout << "C-string: " << cstr << endl;
    
    // Get pointer to character data (not necessarily null-terminated)
    const char *data = str.data();
    cout << "Data: ";
    for (size_t i = 0; i < str.length(); i++) {
        cout << data[i];
    }
    cout << endl;
    
    // Modify string through pointer? (DANGEROUS - avoid!)
    // char *modifiable = &str[0];
    // modifiable[0] = 'J';  // This works but can be dangerous
    
    return 0;
}</pre>

        <!-- ==================== SECTION 12: COMPLETE EXAMPLE - STRING UTILITY LIBRARY ==================== -->
        <h3>5.6.12 Complete Example: String Utility Library</h3>
        
        <pre>
// ============================================
// Program: String Utility Library
// Author: CS Student
// Description: Complete string manipulation using pointers
// ============================================

#include &lt;iostream&gt;
#include &lt;iomanip&gt;
using namespace std;

class StringUtils {
public:
    // String length
    static int length(const char *str) {
        const char *start = str;
        while (*str) str++;
        return str - start;
    }
    
    // String copy
    static void copy(char *dest, const char *src) {
        while (*dest++ = *src++);
    }
    
    // String concatenate
    static void concat(char *dest, const char *src) {
        while (*dest) dest++;
        while (*dest++ = *src++);
    }
    
    // String compare
    static int compare(const char *s1, const char *s2) {
        while (*s1 && *s2 && *s1 == *s2) {
            s1++;
            s2++;
        }
        return *s1 - *s2;
    }
    
    // Find first occurrence
    static const char* findChar(const char *str, char ch) {
        while (*str) {
            if (*str == ch) return str;
            str++;
        }
        return nullptr;
    }
    
    // Find last occurrence
    static const char* findLastChar(const char *str, char ch) {
        const char *last = nullptr;
        while (*str) {
            if (*str == ch) last = str;
            str++;
        }
        return last;
    }
    
    // Count occurrences
    static int countChar(const char *str, char ch) {
        int count = 0;
        while (*str) {
            if (*str == ch) count++;
            str++;
        }
        return count;
    }
    
    // Reverse string
    static void reverse(char *str) {
        char *end = str;
        while (*end) end++;
        end--;
        
        while (str < end) {
            char temp = *str;
            *str = *end;
            *end = temp;
            str++;
            end--;
        }
    }
    
    // Convert to uppercase
    static void toUpper(char *str) {
        while (*str) {
            if (*str >= 'a' && *str <= 'z')
                *str = *str - 'a' + 'A';
            str++;
        }
    }
    
    // Convert to lowercase
    static void toLower(char *str) {
        while (*str) {
            if (*str >= 'A' && *str <= 'Z')
                *str = *str - 'A' + 'a';
            str++;
        }
    }
    
    // Check if palindrome
    static bool isPalindrome(const char *str) {
        const char *end = str;
        while (*end) end++;
        end--;
        
        while (str < end) {
            if (*str != *end) return false;
            str++;
            end--;
        }
        return true;
    }
    
    // Extract word (simple version)
    static void extractWord(const char *str, int wordNum, char *result) {
        int currentWord = 1;
        
        // Skip leading spaces
        while (*str == ' ') str++;
        
        while (*str) {
            // If we found our word
            if (currentWord == wordNum) {
                while (*str && *str != ' ') {
                    *result++ = *str++;
                }
                *result = '\\0';
                return;
            }
            
            // Skip current word
            while (*str && *str != ' ') str++;
            // Skip spaces
            while (*str == ' ') str++;
            currentWord++;
        }
        
        result[0] = '\\0';  // Word not found
    }
};

int main() {
    cout << "===== STRING UTILITY LIBRARY =====" << endl;
    
    // Test string operations
    char str1[100] = "Hello";
    const char *str2 = "World";
    const char *str3 = "racecar";
    const char *str4 = "Hello, how are you today?";
    
    cout << "\\n--- Basic Operations ---" << endl;
    cout << "str1: " << str1 << " (length: " << StringUtils::length(str1) << ")" << endl;
    cout << "str2: " << str2 << " (length: " << StringUtils::length(str2) << ")" << endl;
    
    char buffer[100];
    StringUtils::copy(buffer, str1);
    cout << "Copied buffer: " << buffer << endl;
    
    StringUtils::concat(buffer, " ");
    StringUtils::concat(buffer, str2);
    cout << "Concatenated: " << buffer << endl;
    
    cout << "\\n--- Comparison ---" << endl;
    cout << "Compare \"Hello\" and \"Hello\": " << StringUtils::compare("Hello", "Hello") << endl;
    cout << "Compare \"Hello\" and \"World\": " << StringUtils::compare("Hello", "World") << endl;
    
    cout << "\\n--- Character Search ---" << endl;
    const char *found = StringUtils::findChar(str4, 'w');
    if (found) {
        cout << "Found 'w' at position: " << found - str4 << endl;
    }
    
    cout << "Number of 'o's: " << StringUtils::countChar(str4, 'o') << endl;
    
    cout << "\\n--- String Modification ---" << endl;
    char mod[100];
    StringUtils::copy(mod, "Hello, World!");
    cout << "Original: " << mod << endl;
    
    StringUtils::reverse(mod);
    cout << "Reversed: " << mod << endl;
    
    StringUtils::toUpper(mod);
    cout << "Uppercase: " << mod << endl;
    
    StringUtils::toLower(mod);
    cout << "Lowercase: " << mod << endl;
    
    cout << "\\n--- Palindrome Check ---" << endl;
    cout << "Is \"racecar\" palindrome? " 
         << (StringUtils::isPalindrome("racecar") ? "Yes" : "No") << endl;
    cout << "Is \"hello\" palindrome? " 
         << (StringUtils::isPalindrome("hello") ? "Yes" : "No") << endl;
    
    cout << "\\n--- Word Extraction ---" << endl;
    char word[50];
    StringUtils::extractWord(str4, 3, word);
    cout << "3rd word in \"" << str4 << "\" is: \"" << word << "\"" << endl;
    
    return 0;
}</pre>

        <!-- ==================== SECTION 13: SUMMARY ==================== -->
        <h3>5.6.13 Chapter Summary</h3>
        
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Key Points to Remember</h4>
            <ul>
                <li><strong>C-style strings</strong> are character arrays terminated by null ('\\0')</li>
                <li>String name acts as a <strong>pointer to first character</strong></li>
                <li>Always ensure enough space for the null terminator</li>
                <li><strong>Pointer arithmetic</strong> is ideal for string manipulation</li>
                <li>Common string operations can be implemented with pointers:
                    <ul>
                        <li><code>strlen</code> - find length by counting until null</li>
                        <li><code>strcpy</code> - copy until null</li>
                        <li><code>strcmp</code> - compare character by character</li>
                        <li><code>strcat</code> - find end then copy</li>
                    </ul>
                </li>
                <li><strong>Arrays of strings</strong> can be 2D arrays or arrays of pointers</li>
                <li><strong>String literals</strong> are constant and should be pointed to with <code>const char*</code></li>
                <li>Modern C++ prefers <code>std::string</code> but understanding C-strings is essential</li>
                <li>Always check for null terminator to avoid buffer overflows</li>
                <li>Pointers provide efficient, low-level string manipulation</li>
            </ul>
        </div>

        <!-- ==================== SECTION 14: EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Exercises</h4>
            
            <p><strong>Exercise 1:</strong> Write a function that counts the number of vowels in a string using pointers.</p>
            
            <p><strong>Exercise 2:</strong> Create a function that removes all spaces from a string using pointers.</p>
            
            <p><strong>Exercise 3:</strong> Implement a function that checks if one string is a substring of another using pointers.</p>
            
            <p><strong>Exercise 4:</strong> Write a function that replaces all occurrences of a character with another character in a string.</p>
            
            <p><strong>Exercise 5:</strong> Create a function that returns a pointer to the first occurrence of any character from a set in a string.</p>
            
            <p><strong>Exercise 6:</strong> Implement a function that splits a string into words and stores them in an array of strings.</p>
            
            <p><strong>Exercise 7:</strong> Write a function that capitalizes the first letter of each word in a string.</p>
            
            <p><strong>Exercise 8:</strong> Create a function that sorts an array of strings alphabetically using pointers.</p>
            
            <p><strong>Exercise 9:</strong> Implement a function that finds the longest word in a string and returns a pointer to it.</p>
            
            <p><strong>Exercise 10:</strong> Write a program that demonstrates the difference between modifying a string literal (which should not be done) and modifying a character array.</p>
        </div>

        <!-- ==================== SECTION 15: KEY TERMS ==================== -->
        <h3>5.6.14 Key Terms to Remember</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">C-string</strong>
                <p style="font-size: 12px;">Null-terminated character array</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Null Terminator</strong>
                <p style="font-size: 12px;">'\\0' marking string end</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">String Literal</strong>
                <p style="font-size: 12px;">Constant string in quotes</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">Buffer Overflow</strong>
                <p style="font-size: 12px;">Writing beyond array bounds</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">strlen</strong>
                <p style="font-size: 12px;">String length function</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">strcpy</strong>
                <p style="font-size: 12px;">String copy function</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">strcmp</strong>
                <p style="font-size: 12px;">String compare function</p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <strong style="color: #667eea;">strcat</strong>
                <p style="font-size: 12px;">String concatenation</p>
            </div>
        </div>
        
        <!-- ==================== END OF CHAPTER 5 ==================== -->
        <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 30px; border-radius: 15px; margin: 40px 0; text-align: center; color: white;">
            <h3 style="margin: 0 0 15px 0;">📚 End of Chapter 5</h3>
            <p style="font-size: 18px; margin: 0 0 20px 0;">You have completed Chapter 5: Arrays, Pointers & Strings!</p>
            <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">5.1 One-dimensional Array ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">5.2 Multi-dimensional Array ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">5.3 Address and Pointer ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">5.4 Pointer and Array ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">5.5 Pointer and Function ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">5.6 Pointer and String ✓</span>
            </div>
            <p style="margin-top: 30px;">Ready for Chapter 6: Object-Oriented Programming!</p>
        </div>
    `,
    navigation: {
        next: null,
        prev: "ch5-5",
        nextTitle: null,
        prevTitle: "5.5 Pointer and Function"
    }
};