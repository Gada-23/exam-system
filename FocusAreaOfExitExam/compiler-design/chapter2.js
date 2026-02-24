// ===============================
// FOCUS AREA: COMPILER DESIGN - CHAPTER 2
// Lexical Analysis
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaCompilerChapter2 = {
    title: "Chapter 2: Lexical Analysis",
    
    // Blueprint alignment: 1 question (Understand)
    blueprint: {
        totalQuestions: 1,
        cognitiveLevels: {
            understand: 1
        },
        topics: [
            "Techniques for lexical analysis",
            "Tokens, lexemes, and patterns",
            "Regular expressions for token specification",
            "Finite automata in lexical analysis"
        ]
    },

    learningObjectives: [
        "Understand the role and function of lexical analysis",
        "Differentiate between tokens, lexemes, and patterns",
        "Specify tokens using regular expressions",
        "Understand how finite automata are used in lexical analysis",
        "Describe the techniques for building lexical analyzers"
    ],

    sections: [
        {
            title: "2.1 Introduction to Lexical Analysis",
            content: `
                <h4>What is Lexical Analysis?</h4>
                <p>Lexical analysis (also called scanning) is the first phase of a compiler. It reads the source program as a stream of characters and groups them into meaningful sequences called lexemes, producing tokens as output.</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">Source Characters → [LEXICAL ANALYZER] → Tokens</p>
                </div>
                
                <h4>Role of Lexical Analyzer</h4>
                <ul>
                    <li><strong>Primary task:</strong> Read input characters and produce tokens</li>
                    <li><strong>Secondary tasks:</strong> 
                        <ul>
                            <li>Remove comments and whitespace</li>
                            <li>Track line numbers for error reporting</li>
                            <li>Handle preprocessor directives (in some languages)</li>
                            <li>Expand macros (if applicable)</li>
                        </ul>
                    </li>
                </ul>
                
                <h4>Interaction with Parser</h4>
                <p>The lexical analyzer and parser work in a producer-consumer relationship:</p>
                <ul>
                    <li>Parser calls the lexical analyzer when it needs the next token</li>
                    <li>Lexical analyzer reads characters until it forms a complete token</li>
                    <li>Returns the token to the parser</li>
                </ul>
                
                <h4>Why Separate Lexical and Syntax Analysis?</h4>
                <ul>
                    <li><strong>Simplicity:</strong> Simplifies the design of both phases</li>
                    <li><strong>Efficiency:</strong> Specialized techniques for token recognition are faster</li>
                    <li><strong>Portability:</strong> Lexical analyzer can handle platform-specific issues</li>
                    <li><strong>Modularity:</strong> Clean separation of concerns</li>
                </ul>
            `,
            keyPoints: [
                "Lexical analysis = first compiler phase",
                "Input: character stream, Output: token stream",
                "Removes comments and whitespace",
                "Works closely with parser (producer-consumer)",
                "Separation simplifies compiler design"
            ]
        },

        {
            title: "2.2 Tokens, Lexemes, and Patterns",
            content: `
                <h4>Key Terminology</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Term</th>
                        <th style="padding:10px; border:1px solid #ddd;">Definition</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Token</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">A pair consisting of a token name and an optional attribute value</td>
                        <td style="padding:8px; border:1px solid #ddd;"><id, "position">, <number, 42></td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Lexeme</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">A sequence of characters that matches a pattern and forms a token</td>
                        <td style="padding:8px; border:1px solid #ddd;">"position", "42", "while"</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Pattern</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">A rule that describes the form of lexemes for a token</td>
                        <td style="padding:8px; border:1px solid #ddd;">letter (letter|digit)* for identifiers</td>
                    </tr>
                </table>
                
                <h4>Common Token Types</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Token Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example Lexemes</th>
                        <th style="padding:10px; border:1px solid #ddd;">Pattern</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>IDENTIFIER</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Variable/function names</td>
                        <td style="padding:8px; border:1px solid #ddd;">x, count, total, _temp</td>
                        <td style="padding:8px; border:1px solid #ddd;">letter (letter|digit)*</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>NUMBER</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Integer constants</td>
                        <td style="padding:8px; border:1px solid #ddd;">0, 42, 1000</td>
                        <td style="padding:8px; border:1px solid #ddd;">digit digit*</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>REAL</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Floating point constants</td>
                        <td style="padding:8px; border:1px solid #ddd;">3.14, 0.5, 2.0</td>
                        <td style="padding:8px; border:1px solid #ddd;">digit*.digit+</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>KEYWORD</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Reserved words</td>
                        <td style="padding:8px; border:1px solid #ddd;">if, else, while, return</td>
                        <td style="padding:8px; border:1px solid #ddd;">Exact string match</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>OPERATOR</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Arithmetic/relational ops</td>
                        <td style="padding:8px; border:1px solid #ddd;">+, -, *, /, <, >, =</td>
                        <td style="padding:8px; border:1px solid #ddd;">Exact character(s)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>PUNCTUATION</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Separators, delimiters</td>
                        <td style="padding:8px; border:1px solid #ddd;">; , ( ) { } [ ]</td>
                        <td style="padding:8px; border:1px solid #ddd;">Exact character</td>
                    </tr>
                </table>
                
                <h4>Example: Tokenization</h4>
                <p><strong>Source code:</strong> <code>position = initial + rate * 60</code></p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Lexeme</th>
                        <th style="padding:10px; border:1px solid #ddd;">Token</th>
                        <th style="padding:10px; border:1px solid #ddd;">Attribute Value</th>
                    </tr>
                    <tr><td>position</td><td>IDENTIFIER</td><td>"position"</td></tr>
                    <tr><td>=</td><td>ASSIGN</td><td>-</td></tr>
                    <tr><td>initial</td><td>IDENTIFIER</td><td>"initial"</td></tr>
                    <tr><td>+</td><td>PLUS</td><td>-</td></tr>
                    <tr><td>rate</td><td>IDENTIFIER</td><td>"rate"</td></tr>
                    <tr><td>*</td><td>MULT</td><td>-</td></tr>
                    <tr><td>60</td><td>NUMBER</td><td>60</td></tr>
                    <tr><td>;</td><td>SEMICOLON</td><td>-</td></tr>
                </table>
                
                <div class="key-points-box" style="background:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🔑 Important:</strong> A token is a <strong>pair</strong> (token name, attribute). The lexeme is the actual string of characters that forms the token.</p>
                </div>
            `,
            keyPoints: [
                "Token = (token name, attribute value)",
                "Lexeme = actual character sequence",
                "Pattern = rule describing lexeme form",
                "Common tokens: IDENTIFIER, NUMBER, KEYWORD, OPERATOR",
                "Attribute values store additional info (e.g., identifier name)"
            ]
        },

        {
            title: "2.3 Specifying Tokens with Regular Expressions",
            content: `
                <h4>Why Regular Expressions?</h4>
                <p>Regular expressions provide a concise and formal way to specify the patterns for tokens. They are used as input to scanner generators like Lex.</p>
                
                <h4>Regular Expression Operations</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Operation</th>
                        <th style="padding:10px; border:1px solid #ddd;">Notation</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Union</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">R1 | R2 or R1 + R2</td>
                        <td style="padding:8px; border:1px solid #ddd;">Strings in R1 or R2</td>
                        <td style="padding:8px; border:1px solid #ddd;">a|b matches 'a' or 'b'</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Concatenation</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">R1 R2</td>
                        <td style="padding:8px; border:1px solid #ddd;">String from R1 followed by string from R2</td>
                        <td style="padding:8px; border:1px solid #ddd;">ab matches 'ab'</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Kleene Star</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">R*</td>
                        <td style="padding:8px; border:1px solid #ddd;">Zero or more concatenations of R</td>
                        <td style="padding:8px; border:1px solid #ddd;">a* matches ε, a, aa, aaa...</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>One or more</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">R+</td>
                        <td style="padding:8px; border:1px solid #ddd;">One or more repetitions (RR*)</td>
                        <td style="padding:8px; border:1px solid #ddd;">a+ matches a, aa, aaa...</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Zero or one</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">R?</td>
                        <td style="padding:8px; border:1px solid #ddd;">Optional (ε | R)</td>
                        <td style="padding:8px; border:1px solid #ddd;">a? matches ε or a</td>
                    </tr>
                </table>
                
                <h4>Regular Definitions</h4>
                <p>Regular definitions give names to regular expressions for readability and reuse.</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
letter = [a-zA-Z]
digit = [0-9]
identifier = letter (letter | digit)*
number = digit+
real = digit* "." digit+
                </pre>
                
                <h4>Regular Expressions for Common Tokens</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Token</th>
                        <th style="padding:10px; border:1px solid #ddd;">Regular Expression</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Identifier</td>
                        <td style="padding:8px; border:1px solid #ddd;">[a-zA-Z][a-zA-Z0-9]*</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Number (integer)</td>
                        <td style="padding:8px; border:1px solid #ddd;">[0-9]+</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Real number</td>
                        <td style="padding:8px; border:1px solid #ddd;">[0-9]*"."[0-9]+</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Whitespace</td>
                        <td style="padding:8px; border:1px solid #ddd;">(' ' | '\\t' | '\\n')+</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Comment (// style)</td>
                        <td style="padding:8px; border:1px solid #ddd;">"//" [^\\n]*</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Relational operators</td>
                        <td style="padding:8px; border:1px solid #ddd;">"<" | ">" | "<=" | ">=" | "==" | "!="</td>
                    </tr>
                </table>
                
                <h4>Handling Keywords</h4>
                <p>Keywords are reserved words that look like identifiers but have special meaning. They are typically handled by:</p>
                <ol>
                    <li>Including them in the identifier pattern initially</li>
                    <li>After recognizing an identifier, checking if it matches a keyword in a lookup table</li>
                    <li>If it matches a keyword, return the keyword token instead of IDENTIFIER</li>
                </ol>
                
                <p><strong>Example:</strong> "if" matches identifier pattern, but after checking the keyword table, we return token IF instead of IDENTIFIER.</p>
            `,
            keyPoints: [
                "Regular expressions specify token patterns",
                "Operations: Union (|), Concatenation, Kleene Star (*), +, ?",
                "Regular definitions name patterns for reuse",
                "Keywords are identifiers that are reserved words",
                "Keywords are handled by checking a lookup table"
            ]
        },

        {
            title: "2.4 Finite Automata in Lexical Analysis",
            content: `
                <h4>From Regular Expressions to Automata</h4>
                <p>Regular expressions are converted to finite automata for efficient token recognition. This conversion is done automatically by scanner generators like Lex.</p>
                
                <h4>Two Types of Finite Automata</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Use in Lexical Analysis</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>NFA (Nondeterministic FA)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Can have multiple transitions for same input, ε-transitions</td>
                        <td style="padding:8px; border:1px solid #ddd;">Easier to construct from regular expressions</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>DFA (Deterministic FA)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Exactly one transition per input symbol</td>
                        <td style="padding:8px; border:1px solid #ddd;">Efficient for implementation (fast recognition)</td>
                    </tr>
                </table>
                
                <h4>Conversion Process</h4>
                <ol>
                    <li><strong>Regular Expression → NFA:</strong> Using Thompson's construction</li>
                    <li><strong>NFA → DFA:</strong> Using subset construction algorithm</li>
                    <li><strong>DFA Minimization:</strong> Reduce number of states for efficiency</li>
                </ol>
                
                <h4>Thompson's Construction</h4>
                <p>Basic rules for converting regex to NFA:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Regex</th>
                        <th style="padding:10px; border:1px solid #ddd;">NFA Construction</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">ε (empty)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Start → Accept (ε transition)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">a (single symbol)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Start --a--> Accept</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">R1 | R2 (union)</td>
                        <td style="padding:8px; border:1px solid #ddd;">New start with ε to R1 and R2 starts, ε from their accepts to new accept</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">R1 R2 (concat)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Accept of R1 connected by ε to start of R2</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">R* (Kleene star)</td>
                        <td style="padding:8px; border:1px solid #ddd;">ε from start to accept, ε from accept back to start, ε from start to R's start, ε from R's accept to start</td>
                    </tr>
                </table>
                
                <h4>Example: NFA for a|b</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
        ε
    → q₀ ---→ q₁ --a--> q₂ --ε→ q₅ (accept)
      |                             ↑
      ε                             | ε
      ↓                             |
      q₃ --b--> q₄ --ε---------------
                </pre>
                
                <h4>Subset Construction (NFA → DFA)</h4>
                <ol>
                    <li>Start state of DFA = ε-closure of NFA start state</li>
                    <li>For each DFA state and each input symbol, compute next state as ε-closure of all NFA states reachable</li>
                    <li>Repeat until no new states are added</li>
                    <li>DFA accept states are those containing any NFA accept state</li>
                </ol>
                
                <h4>DFA Minimization</h4>
                <p>Minimizes the number of states in a DFA by merging equivalent states. The algorithm:</p>
                <ol>
                    <li>Partition states into accept and non-accept groups</li>
                    <li>Repeatedly refine partitions based on transitions</li>
                    <li>Merge states in same final partition</li>
                </ol>
            `,
            keyPoints: [
                "Regular expressions → NFA → DFA → minimized DFA",
                "NFA easier to construct, DFA faster to execute",
                "Thompson's construction: regex → NFA",
                "Subset construction: NFA → DFA",
                "Scanner generators automate this conversion"
            ]
        },

        {
            title: "2.5 Lexical Analyzer Implementation",
            content: `
                <h4>Approaches to Building a Lexical Analyzer</h4>
                
                <h4>1. Hand-coded Lexical Analyzer</h4>
                <ul>
                    <li>Write the analyzer manually using conditional statements</li>
                    <li>Simple for small languages</li>
                    <li>More control, but error-prone and time-consuming</li>
                </ul>
                
                <h4>2. Table-Driven Lexical Analyzer</h4>
                <ul>
                    <li>Use a transition table generated from regular expressions</li>
                    <li>Driver program simulates DFA using the table</li>
                    <li>More flexible, easier to modify</li>
                </ul>
                
                <h4>3. Using Scanner Generators (Lex/Flex)</h4>
                <ul>
                    <li>Most common approach</li>
                    <li>Provide regular expressions for tokens</li>
                    <li>Generator produces complete lexical analyzer in C/C++</li>
                </ul>
                
                <h4>Structure of a Lex/Flex Program</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
%{
/* C declarations - includes, global variables */
%}

/* Regular definitions */
letter [a-zA-Z]
digit [0-9]

%%
/* Rules: pattern { action } */
{letter}({letter}|{digit})*  { return IDENTIFIER; }
{digit}+                     { return NUMBER; }
[ \t\n]+                     { /* ignore whitespace */ }
"if"                         { return IF; }
"else"                       { return ELSE; }
"while"                      { return WHILE; }
"+"                          { return PLUS; }
"-"                          { return MINUS; }
"*"                          { return MULT; }
"/"                          { return DIV; }
"("                          { return LPAREN; }
")"                          { return RPAREN; }
"{"                          { return LBRACE; }
"}"                          { return RBRACE; }
";"                          { return SEMICOLON; }
"="                          { return ASSIGN; }
"=="                         { return EQ; }
"!="                         { return NE; }
"<"                          { return LT; }
"<="                         { return LE; }
">"                          { return GT; }
">="                         { return GE; }
.                            { /* error */ }

%%
/* C functions (main, etc.) */
                </pre>
                
                <h4>How Lex Works</h4>
                <ol>
                    <li>Lex reads the specification file (.l)</li>
                    <li>Converts regular expressions to NFAs, then to DFA</li>
                    <li>Generates C code for the lexical analyzer (yylex())</li>
                    <li>The generated DFA efficiently recognizes tokens</li>
                </ol>
                
                <h4>Lex Ambiguity Resolution</h4>
                <p>When multiple patterns match the same input, Lex uses these rules:</p>
                <ul>
                    <li><strong>Longest match:</strong> Choose the pattern that matches the longest lexeme</li>
                    <li><strong>Rule priority:</strong> If multiple patterns match the same length, choose the first one in the Lex file</li>
                </ul>
                
                <p><strong>Example:</strong> For input "ifx", pattern for keyword "if" matches 2 chars, pattern for identifier matches 3 chars. Longest match rule chooses identifier.</p>
            `,
            keyPoints: [
                "Three implementation approaches: hand-coded, table-driven, generator",
                "Lex/Flex are scanner generators",
                "Lex program has three sections: declarations, rules, C code",
                "Rules: pattern { action }",
                "Ambiguity resolved by longest match, then rule priority"
            ]
        },

        {
            title: "2.6 Error Handling in Lexical Analysis",
            content: `
                <h4>Lexical Errors</h4>
                <p>Lexical errors occur when the input contains characters that cannot form any valid token. Examples:</p>
                <ul>
                    <li>Invalid characters (e.g., @ in C program)</li>
                    <li>Unterminated strings or comments</li>
                    <li>Malformed numbers (e.g., 12.34.56)</li>
                </ul>
                
                <h4>Error Recovery Strategies</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Strategy</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Panic mode</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Delete characters until a valid token is found</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Insert a character</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Try inserting a missing character</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Delete a character</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Try deleting an extra character</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Replace a character</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Try replacing with a valid character</td>
                    </tr>
                </table>
                
                <h4>In Lex/Flex</h4>
                <p>The default rule <code>.</code> matches any character not matched by other rules and can be used to report errors:</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
.    { fprintf(stderr, "Illegal character: %s\\n", yytext); }
                </pre>
                
                <p>Good error reporting should include line number and character position.</p>
            `,
            keyPoints: [
                "Lexical errors: invalid characters, unterminated strings",
                "Error recovery: panic mode, insertion, deletion, replacement",
                "Lex's default rule (.) catches unmatched characters",
                "Report errors with line numbers"
            ]
        }
    ],

    summary: `
        <h3>Chapter 2 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Lexical Analysis:</strong> First compiler phase, converts character stream to token stream</li>
            <li><strong>Token:</strong> (token name, attribute value) - e.g., <id, "x"></li>
            <li><strong>Lexeme:</strong> Actual character sequence forming a token</li>
            <li><strong>Pattern:</strong> Rule describing lexeme form (regular expressions)</li>
            <li><strong>Regular expressions:</strong> Used to specify tokens with operations: |, concatenation, *, +, ?</li>
            <li><strong>Finite Automata:</strong> NFA (easy to construct), DFA (efficient to execute)</li>
            <li><strong>Conversion:</strong> Regex → NFA (Thompson) → DFA (subset construction) → minimized DFA</li>
            <li><strong>Lex/Flex:</strong> Scanner generators - produce lexical analyzer from regular expressions</li>
            <li><strong>Ambiguity resolution:</strong> Longest match, then rule priority</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What are tokens, lexemes, and patterns? Give an example.",
            answer: "Token = (token name, attribute) e.g., <id, 'x'>. Lexeme = character sequence e.g., 'x'. Pattern = rule e.g., letter(letter|digit)*"
        },
        {
            question: "Write a regular expression for identifiers in most programming languages.",
            answer: "[a-zA-Z][a-zA-Z0-9]* (letter followed by zero or more letters/digits)"
        },
        {
            question: "How does Lex resolve ambiguity when multiple patterns match?",
            answer: "Lex uses longest match rule, then if same length, chooses the first rule in the file."
        },
        {
            question: "What is Thompson's construction used for?",
            answer: "Thompson's construction converts regular expressions to equivalent NFAs."
        },
        {
            question: "What is subset construction used for?",
            answer: "Subset construction converts an NFA to an equivalent DFA."
        },
        {
            question: "What are the three sections of a Lex/Flex program?",
            answer: "Declarations section (definitions), Rules section (patterns and actions), C code section (user functions)."
        }
    ],

    quickTips: [
        "Token = (name, attribute), Lexeme = actual string",
        "Regular expression operations: | (union), concatenation, * (Kleene star)",
        "Lex uses longest match rule",
        "Regex → NFA → DFA → minimized DFA",
        "Scanner generator produces lexical analyzer from regex"
    ],

    commonMistakes: [
        "❌ Confusing tokens and lexemes - token includes name and attribute, lexeme is just the string",
        "❌ Forgetting that keywords are just identifiers that are reserved",
        "❌ Thinking NFA and DFA have different power - they're equivalent",
        "❌ Not understanding longest match rule in Lex",
        "❌ Mixing up the order of conversion (regex → NFA → DFA)"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 2:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>1 question</strong> at the <strong>Understand</strong> level.</p>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>Tokens, lexemes, patterns:</strong> Definitions and examples</li>
            <li><strong>Regular expressions:</strong> Writing patterns for tokens</li>
            <li><strong>Finite automata:</strong> Role in lexical analysis, NFA vs DFA</li>
            <li><strong>Lexical analyzer implementation:</strong> Scanner generators (Lex/Flex)</li>
        </ol>
        
        <h4>What "Understand" Means:</h4>
        <p>You need to be able to explain these concepts, write regular expressions for common tokens, and understand how lexical analyzers work.</p>
        
        <h4>Practice Questions:</h4>
        <ul>
            <li>Explain the difference between tokens, lexemes, and patterns.</li>
            <li>Write a regular expression for identifiers, numbers, and comments.</li>
            <li>Describe how Lex/Flex generates a lexical analyzer from regular expressions.</li>
            <li>How does a lexical analyzer handle keywords differently from identifiers?</li>
        </ul>
    `
};