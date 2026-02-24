// ===============================
// FOCUS AREA: COMPILER DESIGN - CHAPTER 3
// Syntax Analysis (Parsing)
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaCompilerChapter3 = {
    title: "Chapter 3: Syntax Analysis (Parsing)",
    
    // Blueprint alignment: 2 questions (Apply, Analyze)
    blueprint: {
        totalQuestions: 2,
        cognitiveLevels: {
            apply: 1,
            analyze: 1
        },
        topics: [
            "Context-free grammars for syntax analysis",
            "Top-down parsing techniques",
            "Bottom-up parsing techniques",
            "Parser generators (Yacc/Bison)",
            "Error handling in syntax analysis"
        ]
    },

    learningObjectives: [
        "Understand the role of syntax analysis in compilation",
        "Specify language syntax using context-free grammars",
        "Apply top-down parsing techniques (recursive descent, LL)",
        "Apply bottom-up parsing techniques (LR, LALR)",
        "Analyze the strengths and weaknesses of different parsing methods",
        "Understand how parser generators work"
    ],

    sections: [
        {
            title: "3.1 Introduction to Syntax Analysis",
            content: `
                <h4>What is Syntax Analysis?</h4>
                <p>Syntax analysis (or parsing) is the second phase of a compiler. It takes the stream of tokens from the lexical analyzer and checks whether they form a valid sentence according to the grammar of the programming language. The output is typically a parse tree or syntax tree.</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">Tokens → [PARSER] → Parse Tree</p>
                </div>
                
                <h4>Role of the Parser</h4>
                <ul>
                    <li><strong>Syntax checking:</strong> Verify that the token sequence follows the grammar rules</li>
                    <li><strong>Structure building:</strong> Construct a parse tree representing the syntactic structure</li>
                    <li><strong>Error reporting:</strong> Detect and report syntax errors with meaningful messages</li>
                    <li><strong>Error recovery:</strong> Attempt to continue parsing after errors to find more errors</li>
                </ul>
                
                <h4>Context-Free Grammars for Syntax</h4>
                <p>Programming language syntax is specified using context-free grammars (CFGs). A CFG consists of:</p>
                <ul>
                    <li><strong>Terminals:</strong> Basic symbols (tokens from lexical analyzer)</li>
                    <li><strong>Non-terminals:</strong> Syntactic variables that represent sets of strings</li>
                    <li><strong>Productions:</strong> Rules of the form A → α where A is a non-terminal and α is a string of terminals and non-terminals</li>
                    <li><strong>Start symbol:</strong> The top-level non-terminal</li>
                </ul>
                
                <h4>Example Grammar for Arithmetic Expressions</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
E → E + T | E - T | T
T → T * F | T / F | F
F → ( E ) | id | number
                </pre>
                
                <p>This grammar specifies the syntax of arithmetic expressions with operator precedence (* and / have higher precedence than + and -).</p>
                
                <h4>Parse Tree vs Syntax Tree</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Parse Tree</th>
                        <th style="padding:10px; border:1px solid #ddd;">Syntax Tree (Abstract Syntax Tree)</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Contains all syntactic information</td>
                        <td style="padding:8px; border:1px solid #ddd;">Abstracts away unnecessary details</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Each internal node is a non-terminal</td>
                        <td style="padding:8px; border:1px solid #ddd;">Nodes represent operators</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Leaves are terminals (tokens)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Leaves are operands</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Used for syntax analysis</td>
                        <td style="padding:8px; border:1px solid #ddd;">Used for semantic analysis</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Syntax analysis = parsing, second compiler phase",
                "Input: tokens, Output: parse tree",
                "Uses context-free grammars to specify language syntax",
                "Grammar components: terminals, non-terminals, productions, start symbol",
                "Parse tree contains all syntactic details; AST abstracts away details"
            ]
        },

        {
            title: "3.2 Context-Free Grammars for Syntax Analysis",
            content: `
                <h4>Formal Definition of CFG</h4>
                <p>A context-free grammar G is a 4-tuple: G = (V, T, P, S) where:</p>
                <ul>
                    <li><strong>V:</strong> A finite set of non-terminals (variables)</li>
                    <li><strong>T:</strong> A finite set of terminals (tokens)</li>
                    <li><strong>P:</strong> A finite set of productions of the form A → α, where A ∈ V and α ∈ (V ∪ T)*</li>
                    <li><strong>S:</strong> The start symbol (S ∈ V)</li>
                </ul>
                
                <h4>Notation Conventions</h4>
                <ul>
                    <li>Capital letters (A, B, C) represent non-terminals</li>
                    <li>Lowercase letters (a, b, c) represent terminals</li>
                    <li>Greek letters (α, β, γ) represent strings of terminals and non-terminals</li>
                    <li>The start symbol is usually S</li>
                </ul>
                
                <h4>Derivations</h4>
                <p>A derivation is a sequence of replacements using productions, starting from the start symbol and ending with a string of terminals.</p>
                
                <p><strong>Example:</strong> Derivation of "id + id * id" using the expression grammar:</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
E ⇒ E + T
  ⇒ T + T
  ⇒ F + T
  ⇒ id + T
  ⇒ id + T * F
  ⇒ id + F * F
  ⇒ id + id * F
  ⇒ id + id * id
                </pre>
                
                <h4>Leftmost and Rightmost Derivations</h4>
                <ul>
                    <li><strong>Leftmost derivation:</strong> Always replace the leftmost non-terminal first</li>
                    <li><strong>Rightmost derivation:</strong> Always replace the rightmost non-terminal first</li>
                </ul>
                
                <p>For the example above, it was a leftmost derivation.</p>
                
                <h4>Ambiguity</h4>
                <p>A grammar is ambiguous if there exists a string that can be derived in two or more different ways (i.e., has multiple parse trees).</p>
                
                <p><strong>Example of ambiguous grammar:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
E → E + E | E * E | id
                </pre>
                
                <p>The string "id + id * id" has two parse trees: one where + is done first, one where * is done first.</p>
                
                <h4>Removing Ambiguity</h4>
                <p>Ambiguity can often be removed by rewriting the grammar to enforce precedence and associativity:</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
E → E + T | E - T | T
T → T * F | T / F | F
F → ( E ) | id | number
                </pre>
                
                <p>This grammar enforces: * and / have higher precedence than + and -, and all operators are left-associative.</p>
                
                <h4>Left Recursion</h4>
                <p>A grammar is left-recursive if a non-terminal A can derive a string starting with A in one or more steps.</p>
                
                <p><strong>Immediate left recursion:</strong> A → A α | β</p>
                <p>This is a problem for top-down parsers (they can loop infinitely). Left recursion can be eliminated:</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
A → β A'
A' → α A' | ε
                </pre>
                
                <p><strong>Example:</strong> E → E + T | T becomes:</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
E  → T E'
E' → + T E' | ε
                </pre>
                
                <h4>Left Factoring</h4>
                <p>Left factoring is used when two productions for the same non-terminal have a common prefix. This is needed for predictive parsing.</p>
                
                <p><strong>Example:</strong> A → αβ₁ | αβ₂ becomes:</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
A  → α A'
A' → β₁ | β₂
                </pre>
                
                <p><strong>Example:</strong> Statement → if E then S | if E then S else S becomes:</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Statement → if E then S S'
S'       → else S | ε
                </pre>
            `,
            keyPoints: [
                "CFG = (V, T, P, S) for syntax specification",
                "Derivations replace non-terminals using productions",
                "Leftmost vs rightmost derivations",
                "Ambiguity = multiple parse trees for same string",
                "Left recursion causes problems for top-down parsers",
                "Left factoring handles common prefixes"
            ]
        },

        {
            title: "3.3 Top-Down Parsing",
            content: `
                <h4>What is Top-Down Parsing?</h4>
                <p>Top-down parsing builds the parse tree from the root (start symbol) down to the leaves (tokens). It attempts to find a leftmost derivation for the input string.</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">Start Symbol → ... → tokens</p>
                </div>
                
                <h4>Recursive Descent Parsing</h4>
                <p>Recursive descent parsing is a top-down method that uses a set of recursive procedures, one for each non-terminal. It is simple to implement by hand for simple grammars.</p>
                
                <p><strong>Example:</strong> For grammar E → T E', E' → + T E' | ε, T → F T', T' → * F T' | ε, F → id | number</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
void E() {
    T();
    E'();
}

void E'() {
    if (current_token == '+') {
        match('+');
        T();
        E'();
    } // else ε-production, do nothing
}

void T() {
    F();
    T'();
}

void T'() {
    if (current_token == '*') {
        match('*');
        F();
        T'();
    }
}

void F() {
    if (current_token == 'id') match('id');
    else if (current_token == 'number') match('number');
    else error();
}
                </pre>
                
                <h4>Predictive Parsing (LL Parsing)</h4>
                <p>Predictive parsing is a special form of recursive descent where the parser can "predict" which production to use based on the next input token. It uses a parsing table to guide the selection.</p>
                
                <h4>FIRST and FOLLOW Sets</h4>
                <p>These sets are used to construct the predictive parsing table.</p>
                
                <p><strong>FIRST(α):</strong> Set of terminals that begin strings derived from α.</p>
                <ul>
                    <li>If α is a terminal, FIRST(α) = {α}</li>
                    <li>If α is a non-terminal A, FIRST(A) includes FIRST of all productions</li>
                    <li>If A → ε, then ε is in FIRST(A)</li>
                </ul>
                
                <p><strong>FOLLOW(A):</strong> Set of terminals that can appear immediately to the right of A in some sentential form.</p>
                <ul>
                    <li>$ (end of input) is in FOLLOW(S)</li>
                    <li>If A → αBβ, then FIRST(β) - {ε} is in FOLLOW(B)</li>
                    <li>If A → αB or A → αBβ where β ⇒* ε, then FOLLOW(A) is in FOLLOW(B)</li>
                </ul>
                
                <h4>LL(1) Grammars</h4>
                <p>A grammar is LL(1) if it can be parsed with a predictive parser looking at one token ahead. Conditions:</p>
                <ol>
                    <li>No ambiguity</li>
                    <li>No left recursion</li>
                    <li>For each non-terminal A with productions A → α₁ | α₂ | ... | αₙ, the sets FIRST(αᵢ) are pairwise disjoint</li>
                    <li>If ε ∈ FIRST(αᵢ), then FOLLOW(A) must be disjoint from FIRST(αⱼ) for j ≠ i</li>
                </ol>
                
                <h4>LL(1) Parsing Table Construction</h4>
                <p>For each production A → α:</p>
                <ol>
                    <li>For each terminal a in FIRST(α), add A → α to M[A, a]</li>
                    <li>If ε ∈ FIRST(α), then for each terminal b in FOLLOW(A), add A → α to M[A, b]</li>
                </ol>
                
                <h4>LL(1) Parsing Algorithm</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
stack = [S, $]
input = tokens + [$]

while stack not empty:
    let X = top of stack
    let a = current input
    
    if X is a terminal or X == $:
        if X == a:
            pop X
            advance input
        else:
            error()
    else: // X is non-terminal
        if M[X, a] is a production X → Y₁Y₂...Yₖ:
            pop X
            push Yₖ, ..., Y₂, Y₁ (in reverse order)
        else:
            error()
                </pre>
            `,
            keyPoints: [
                "Top-down parsing: start symbol → tokens (leftmost derivation)",
                "Recursive descent: hand-coded procedures for each non-terminal",
                "Predictive parsing (LL): uses parsing table to decide productions",
                "FIRST and FOLLOW sets are used to build LL parsing table",
                "LL(1) grammars can be parsed with one token lookahead",
                "LL(1) requires no left recursion, no ambiguity, disjoint FIRST sets"
            ]
        },

        {
            title: "3.4 Bottom-Up Parsing",
            content: `
                <h4>What is Bottom-Up Parsing?</h4>
                <p>Bottom-up parsing builds the parse tree from the leaves (tokens) up to the root (start symbol). It attempts to find a rightmost derivation in reverse (starting with the input and reducing to the start symbol).</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">tokens → ... → Start Symbol</p>
                </div>
                
                <h4>Shift-Reduce Parsing</h4>
                <p>Bottom-up parsers use two main actions:</p>
                <ul>
                    <li><strong>Shift:</strong> Push the next input token onto the stack</li>
                    <li><strong>Reduce:</strong> Replace a sequence of symbols on top of the stack (the handle) with a non-terminal according to a grammar rule</li>
                </ul>
                
                <div class="key-points-box" style="background:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🔑 Important:</strong> The <strong>shift</strong> action moves terminals from the input buffer to the stack. The <strong>reduce</strong> action replaces a handle with a non-terminal.</p>
                </div>
                
                <h4>Example: Parsing "id + id * id"</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Stack              Input               Action
$                  id + id * id $      shift
$ id               + id * id $         reduce by F → id
$ F                + id * id $         reduce by T → F
$ T                + id * id $         reduce by E → T
$ E                + id * id $         shift
$ E +              id * id $           shift
$ E + id           * id $              reduce by F → id
$ E + F            * id $              reduce by T → F
$ E + T            * id $              shift
$ E + T *          id $                shift
$ E + T * id       $                   reduce by F → id
$ E + T * F        $                   reduce by T → T * F
$ E + T            $                   reduce by E → E + T
$ E                $                   accept
                </pre>
                
                <h4>LR Parsing</h4>
                <p>LR parsers are a class of bottom-up parsers that are very powerful and can handle almost all programming language constructs. LR stands for "Left-to-right scan, Rightmost derivation in reverse."</p>
                
                <h4>Types of LR Parsers</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Parser Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Power</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>SLR (Simple LR)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Uses FOLLOW sets for reduce decisions</td>
                        <td style="padding:8px; border:1px solid #ddd;">Least powerful</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>LR(1) (Canonical LR)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Uses lookahead in each state</td>
                        <td style="padding:8px; border:1px solid #ddd;">Most powerful (but large tables)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>LALR (Look-Ahead LR)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Merges states with same core</td>
                        <td style="padding:8px; border:1px solid #ddd;">Between SLR and LR(1), used by Yacc</td>
                    </tr>
                </table>
                
                <h4>LR Parsing Algorithm</h4>
                <p>LR parsers use two tables:</p>
                <ul>
                    <li><strong>ACTION table:</strong> ACTION[state, terminal] = shift, reduce, accept, or error</li>
                    <li><strong>GOTO table:</strong> GOTO[state, non-terminal] = next state after reduce</li>
                </ul>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
stack = [0]  // initial state
input = tokens + [$]

while true:
    s = top of stack
    a = current input
    if ACTION[s, a] == shift t:
        push t
        advance input
    else if ACTION[s, a] == reduce A → β:
        pop |β| states
        t = top of stack
        push GOTO[t, A]
    else if ACTION[s, a] == accept:
        break (success)
    else:
        error()
                </pre>
                
                <h4>LR Item and LR(0) Items</h4>
                <p>An LR(0) item is a production with a dot (•) indicating how much of the production has been seen. Example: A → • X Y, A → X • Y, A → X Y •</p>
                
                <p>LR parsers are built by constructing sets of LR items (states) and transitions between them.</p>
                
                <h4>Bottom-Up Parsing: Other Names</h4>
                <p>Bottom-up parsing is also called <strong>shift-reduce parsing</strong>.</p>
            `,
            keyPoints: [
                "Bottom-up parsing: tokens → start symbol (reverse rightmost derivation)",
                "Shift: move terminal from input to stack",
                "Reduce: replace handle with non-terminal",
                "LR parsers: SLR, LR(1), LALR (used by Yacc)",
                "ACTION and GOTO tables drive LR parser",
                "LR(1) most powerful, LALR practical compromise"
            ]
        },

        {
            title: "3.5 Parser Generators (Yacc/Bison)",
            content: `
                <h4>What is Yacc?</h4>
                <p>Yacc (Yet Another Compiler-Compiler) is a parser generator that takes a context-free grammar with semantic actions and produces a C program for an LALR parser.</p>
                
                <p><strong>Bison</strong> is the GNU version of Yacc.</p>
                
                <h4>Structure of a Yacc Program</h4>
                <p>A Yacc program has three sections, similar to Lex:</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
%{
/* C declarations - includes, global variables, etc. */
#include <stdio.h>
int yylex();
void yyerror(char *s);
%}

/* Token declarations */
%token ID NUMBER IF ELSE WHILE

%%
/* Grammar rules with semantic actions */
program : statement
        | program statement
        ;

statement : IF '(' expr ')' statement
          | WHILE '(' expr ')' statement
          | expr ';'
          ;

expr : expr '+' term   { $$ = $1 + $3; }
     | expr '-' term   { $$ = $1 - $3; }
     | term            { $$ = $1; }
     ;

term : term '*' factor { $$ = $1 * $3; }
     | term '/' factor { $$ = $1 / $3; }
     | factor          { $$ = $1; }
     ;

factor : ID            { $$ = lookup($1); }
       | NUMBER        { $$ = $1; }
       | '(' expr ')'  { $$ = $2; }
       ;

%%
/* C functions */
int main() {
    return yyparse();
}

void yyerror(char *s) {
    fprintf(stderr, "Error: %s\\n", s);
}
                </pre>
                
                <h4>How Yacc Works</h4>
                <ol>
                    <li>Yacc reads the grammar specification</li>
                    <li>Builds an LALR parsing table from the grammar</li>
                    <li>Generates C code for the parser (yyparse())</li>
                    <li>The parser calls yylex() (usually generated by Lex) to get tokens</li>
                </ol>
                
                <h4>Semantic Actions</h4>
                <p>Each grammar rule can have a semantic action written in C inside { }. The action is executed when the rule is reduced.</p>
                
                <p>Special variables in actions:</p>
                <ul>
                    <li><strong>$$</strong> : Value associated with the left-hand side non-terminal</li>
                    <li><strong>$1, $2, $3</strong> : Values associated with the right-hand side symbols</li>
                </ul>
                
                <h4>Conflict Resolution in Yacc</h4>
                <p>Yacc may encounter shift/reduce or reduce/reduce conflicts. It resolves them with default rules:</p>
                <ul>
                    <li><strong>Shift/reduce conflict:</strong> Prefer shift over reduce (usual for if-else ambiguity)</li>
                    <li><strong>Reduce/reduce conflict:</strong> Choose the earlier rule in the grammar</li>
                </ul>
                
                <p>These can be controlled with precedence and associativity declarations:</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
%left '+' '-'
%left '*' '/'
%right UMINUS
                </pre>
            `,
            keyPoints: [
                "Yacc/Bison: parser generators for LALR parsers",
                "Three sections: declarations, rules, C code",
                "Rules: non-terminal : production { action }",
                "Semantic actions: $$, $1, $2, etc.",
                "Yacc resolves shift/reduce conflicts (prefer shift)",
                "Often used with Lex (lexical analyzer generator)"
            ]
        },

        {
            title: "3.6 Error Handling in Syntax Analysis",
            content: `
                <h4>Types of Syntax Errors</h4>
                <ul>
                    <li><strong>Missing tokens:</strong> e.g., missing semicolon, missing parenthesis</li>
                    <li><strong>Extra tokens:</strong> e.g., extra closing brace</li>
                    <li><strong>Wrong token order:</strong> e.g., "= =" instead of "=="</li>
                    <li><strong>Invalid token sequences:</strong> e.g., "if x then else y"</li>
                </ul>
                
                <h4>Error Recovery Strategies</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Strategy</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Pros/Cons</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Panic mode</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Discard input until a synchronizing token (like ';' or '}') is found</td>
                        <td style="padding:8px; border:1px solid #ddd;">Simple, prevents infinite loops</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Phrase-level recovery</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Perform local correction (insert/delete token)</td>
                        <td td style="padding:8px; border:1px solid #ddd;">Risk of wrong fixes</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Error productions</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Add rules to grammar for common errors</td>
                        <td style="padding:8px; border:1px solid #ddd;">Clutters grammar</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Global correction</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Find minimal changes to correct program</td>
                        <td style="padding:8px; border:1px solid #ddd;">Too expensive</td>
                    </tr>
                </table>
                
                <h4>Panic Mode in Practice</h4>
                <p>When an error is detected, the parser discards tokens until it finds a synchronizing token that clearly ends a statement (like ';' or '}'). Then it resumes parsing.</p>
                
                <p><strong>Synchronizing tokens:</strong> Typically statement terminators (;, }, else, etc.)</p>
                
                <h4>Error Recovery in Yacc</h4>
                <p>Yacc provides a special token <code>error</code> that can be used in grammar rules for error recovery:</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
statement : IF '(' expr ')' statement
          | WHILE '(' expr ')' statement
          | error ';'  // on error, skip to next semicolon
          ;
                </pre>
                
                <p>When an error occurs, Yacc pops states until it finds a state that has a transition on 'error', then shifts the error token and continues.</p>
            `,
            keyPoints: [
                "Syntax errors: missing tokens, extra tokens, wrong order",
                "Panic mode: discard until synchronizing token",
                "Phrase-level: local corrections",
                "Error productions: grammar rules for common errors",
                "Yacc provides 'error' token for recovery"
            ]
        }
    ],

    summary: `
        <h3>Chapter 3 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Syntax analysis:</strong> Second compiler phase, checks token sequence against grammar</li>
            <li><strong>Context-free grammars:</strong> (V, T, P, S) specify language syntax</li>
            <li><strong>Derivations:</strong> Leftmost and rightmost; parse trees represent structure</li>
            <li><strong>Ambiguity:</strong> Multiple parse trees; can be removed by rewriting grammar</li>
            <li><strong>Left recursion:</strong> A → Aα | β; must be eliminated for top-down parsing</li>
            <li><strong>Top-down parsing:</strong> Recursive descent, LL(1), uses FIRST and FOLLOW</li>
            <li><strong>Bottom-up parsing:</strong> Shift-reduce, LR, uses ACTION and GOTO tables</li>
            <li><strong>Shift action:</strong> Moves terminals from input buffer to stack</li>
            <li><strong>Parser generators:</strong> Yacc/Bison produce LALR parsers from grammars</li>
            <li><strong>Error handling:</strong> Panic mode, error token in Yacc</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What is the difference between top-down and bottom-up parsing?",
            answer: "Top-down starts from start symbol and tries to match input (leftmost derivation). Bottom-up starts from input and reduces to start symbol (reverse rightmost derivation)."
        },
        {
            question: "What is a shift action in bottom-up parsing?",
            answer: "Shift moves the next input terminal from the input buffer onto the stack."
        },
        {
            question: "What is a reduce action in bottom-up parsing?",
            answer: "Reduce replaces a handle (a sequence of symbols matching a production's RHS) on the stack with the corresponding non-terminal."
        },
        {
            question: "Explain the concept of ambiguity in grammars. Give an example.",
            answer: "A grammar is ambiguous if a string has multiple parse trees. Example: E → E+E | E*E | id gives two parse trees for 'id+id*id'."
        },
        {
            question: "What is left recursion and why is it a problem for top-down parsers?",
            answer: "Left recursion: A → Aα. It causes top-down parsers to loop infinitely. It must be eliminated for LL parsing."
        },
        {
            question: "Compare LL(1) and LALR parsing.",
            answer: "LL(1) is top-down, uses one lookahead, simpler but less powerful. LALR is bottom-up, more powerful, used by Yacc."
        }
    ],

    quickTips: [
        "Shift = move terminal to stack",
        "Reduce = replace handle with non-terminal",
        "LL(1) uses FIRST and FOLLOW sets",
        "LR parsers: SLR < LALR < LR(1) in power",
        "Yacc generates LALR parsers",
        "Bottom-up parsing = shift-reduce parsing"
    ],

    commonMistakes: [
        "❌ Confusing shift and reduce - shift moves input, reduce replaces on stack",
        "❌ Thinking left recursion is always bad - only for top-down parsers",
        "❌ Forgetting that LR(1) is most powerful but LALR is more practical",
        "❌ Mixing up LL and LR - LL is top-down, LR is bottom-up",
        "❌ Not understanding that Yacc uses LALR, not full LR(1)"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 3:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>2 questions</strong> distributed as:</p>
        <ul>
            <li><strong>1 Apply question:</strong> Applying parsing techniques to given grammars</li>
            <li><strong>1 Analyze question:</strong> Analyzing grammar properties (ambiguity, left recursion) and parsing behavior</li>
        </ul>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>Apply:</strong> Construct parse trees, compute FIRST/FOLLOW, build LL(1) parsing tables, simulate shift-reduce parsing</li>
            <li><strong>Analyze:</strong> Identify ambiguity, eliminate left recursion, left factor grammars, analyze parser conflicts</li>
        </ol>
        
        <h4>Practice Apply Questions:</h4>
        <ul>
            <li>Build an LL(1) parsing table for a given grammar.</li>
            <li>Show the steps of shift-reduce parsing for a given input string.</li>
            <li>Compute FIRST and FOLLOW sets for a grammar.</li>
        </ul>
        
        <h4>Practice Analyze Questions:</h4>
        <ul>
            <li>Is the given grammar ambiguous? If so, show two parse trees.</li>
            <li>Eliminate left recursion from a grammar.</li>
            <li>Left factor a grammar to make it suitable for LL(1) parsing.</li>
            <li>Analyze a grammar for potential shift/reduce conflicts.</li>
        </ul>
    `
};