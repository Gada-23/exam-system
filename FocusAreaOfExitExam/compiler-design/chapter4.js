// ===============================
// FOCUS AREA: COMPILER DESIGN - CHAPTER 4
// Syntax-Directed Translation and Type Checking
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaCompilerChapter4 = {
    title: "Chapter 4: Syntax-Directed Translation and Type Checking",
    
    // Blueprint alignment: 1 question (Understand)
    blueprint: {
        totalQuestions: 1,
        cognitiveLevels: {
            understand: 1
        },
        topics: [
            "Syntax-directed definitions (SDD)",
            "Syntax-directed translation (SDT)",
            "Synthesized and inherited attributes",
            "Type checking techniques",
            "Type expressions and type systems"
        ]
    },

    learningObjectives: [
        "Understand syntax-directed definitions and their role in compilation",
        "Differentiate between synthesized and inherited attributes",
        "Explain syntax-directed translation schemes",
        "Describe type checking techniques in compilers",
        "Understand type expressions and type systems"
    ],

    sections: [
        {
            title: "4.1 Introduction to Syntax-Directed Translation",
            content: `
                <h4>What is Syntax-Directed Translation?</h4>
                <p>Syntax-directed translation is a method of translating source code by associating actions (semantic rules) with the productions of a context-free grammar. As the parser recognizes a syntactic structure, it executes the associated actions to produce intermediate code, update symbol tables, or perform type checking.</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">Grammar Productions + Semantic Actions → Translation</p>
                </div>
                
                <h4>Why Syntax-Directed Translation?</h4>
                <ul>
                    <li><strong>Integration:</strong> Combines parsing with translation in a natural way</li>
                    <li><strong>Modularity:</strong> Each grammar rule has its own translation rules</li>
                    <li><strong>Practical:</strong> Used in parser generators like Yacc/Bison</li>
                    <li><strong>Clarity:</strong> Makes the relationship between syntax and semantics explicit</li>
                </ul>
                
                <h4>Syntax-Directed Definition (SDD)</h4>
                <p>A syntax-directed definition is a context-free grammar with attributes and semantic rules associated with each production. Attributes are values (like types, values, locations) associated with grammar symbols.</p>
                
                <p><strong>Components of an SDD:</strong></p>
                <ul>
                    <li>A context-free grammar</li>
                    <li>For each grammar symbol, a set of attributes</li>
                    <li>For each production, a set of semantic rules that compute attribute values</li>
                </ul>
                
                <h4>Syntax-Directed Translation Scheme (SDT)</h4>
                <p>An SDT is an SDD where the semantic actions are embedded within the right side of a production. SDTs are used for implementing translations in parser generators.</p>
                
                <p><strong>Example SDT for simple arithmetic:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
E → E + T    { E.val = E₁.val + T.val }
E → T        { E.val = T.val }
T → T * F    { T.val = T₁.val * F.val }
T → F        { T.val = F.val }
F → ( E )    { F.val = E.val }
F → digit    { F.val = digit.lexval }
                </pre>
            `,
            keyPoints: [
                "Syntax-directed translation associates actions with grammar productions",
                "SDD = grammar + attributes + semantic rules",
                "SDT = SDD with actions embedded in productions",
                "Used for generating intermediate code, type checking",
                "Implemented in Yacc/Bison with { actions }"
            ]
        },

        {
            title: "4.2 Synthesized and Inherited Attributes",
            content: `
                <h4>Two Types of Attributes</h4>
                <p>Attributes are classified into two categories based on how they are computed: synthesized and inherited.</p>
                
                <h4>Synthesized Attributes</h4>
                <ul>
                    <li><strong>Definition:</strong> An attribute is synthesized if its value depends only on the attributes of the children of the node in the parse tree.</li>
                    <li><strong>Computation:</strong> Computed from the values of attributes at the children of that node.</li>
                    <li><strong>Direction:</strong> Information flows upward (bottom-up) in the parse tree.</li>
                    <li><strong>Example:</strong> The value of an arithmetic expression (val) is synthesized from its subexpressions.</li>
                </ul>
                
                <div class="key-points-box" style="background:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🔑 Important:</strong> A <strong>synthesized attribute</strong> is computed from the values of attributes at the <strong>children</strong> of that node.</p>
                </div>
                
                <h4>Inherited Attributes</h4>
                <ul>
                    <li><strong>Definition:</strong> An attribute is inherited if its value depends on the attributes of the parent or siblings of the node.</li>
                    <li><strong>Computation:</strong> Passed down from parent to children or between siblings.</li>
                    <li><strong>Direction:</strong> Information flows downward (top-down) or sideways in the parse tree.</li>
                    <li><strong>Example:</strong> The type of an identifier in a declaration might be inherited from the declaration context.</li>
                </ul>
                
                <h4>Comparison</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Aspect</th>
                        <th style="padding:10px; border:1px solid #ddd;">Synthesized</th>
                        <th style="padding:10px; border:1px solid #ddd;">Inherited</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Computed from</td>
                        <td style="padding:8px; border:1px solid #ddd;">Children's attributes</td>
                        <td style="padding:8px; border:1px solid #ddd;">Parent/siblings' attributes</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Flow direction</td>
                        <td style="padding:8px; border:1px solid #ddd;">Bottom-up</td>
                        <td style="padding:8px; border:1px solid #ddd;">Top-down or sideways</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Parse tree traversal</td>
                        <td style="padding:8px; border:1px solid #ddd;">Post-order</td>
                        <td style="padding:8px; border:1px solid #ddd;">Pre-order or in-order</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Example</td>
                        <td style="padding:8px; border:1px solid #ddd;">Expression value</td>
                        <td style="padding:8px; border:1px solid #ddd;">Type information in declarations</td>
                    </tr>
                </table>
                
                <h4>Example: Both Types of Attributes</h4>
                <p>Consider a grammar for variable declarations:</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
D → T L
T → int | float
L → L , id | id
                </pre>
                
                <p><strong>Synthesized:</strong> T.type is synthesized from int or float</p>
                <p><strong>Inherited:</strong> L.inh (the type) is inherited from T.type and passed down the list</p>
                
                <h4>L-Attributed Grammars</h4>
                <p>An L-attributed grammar is one where all attributes are synthesized attributes, and it allows for some inherited attributes as well, but with restrictions on evaluation order.</p>
                
                <p><strong>Characteristics:</strong></p>
                <ul>
                    <li>Suitable for top-down parsing (LL)</li>
                    <li>Inherited attributes can only depend on attributes of parents or left siblings</li>
                    <li>Can be evaluated in a single left-to-right traversal</li>
                </ul>
                
                <h4>S-Attributed Grammars</h4>
                <p>An S-attributed grammar is one where all attributes are synthesized attributes only.</p>
                
                <p><strong>Characteristics:</strong></p>
                <ul>
                    <li>Only synthesized attributes (no inherited attributes)</li>
                    <li>Suitable for bottom-up parsing (LR)</li>
                    <li>Attributes can be evaluated during a bottom-up parse</li>
                </ul>
                
                <div class="key-points-box" style="background:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🔑 Important:</strong> In an <strong>S-attributed grammar</strong>, all attributes are synthesized. In an <strong>L-attributed grammar</strong>, attributes can be synthesized or inherited with restrictions.</p>
                </div>
            `,
            keyPoints: [
                "Synthesized: computed from children (bottom-up)",
                "Inherited: passed from parent/siblings (top-down/sideways)",
                "S-attributed grammars: only synthesized attributes",
                "L-attributed grammars: synthesized + restricted inherited",
                "Yacc/Bison handle S-attributed grammars well"
            ]
        },

        {
            title: "4.3 Syntax-Directed Translation Schemes (SDT)",
            content: `
                <h4>What is an SDT?</h4>
                <p>A syntax-directed translation scheme is an SDD with actions embedded within the right side of productions. Actions are typically written in curly braces and are executed when the parser reaches that point.</p>
                
                <h4>Placement of Actions</h4>
                <p>Actions can be placed at various positions within a production:</p>
                
                <ul>
                    <li><strong>At the end:</strong> Most common, used for synthesized attributes</li>
                    <li><strong>In the middle:</strong> Used for inherited attributes or for actions that need to happen before some symbols are parsed</li>
                </ul>
                
                <h4>Example: Infix to Postfix Translation</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
E → E + T    { print('+'); }
E → T
T → T * F    { print('*'); }
T → F
F → ( E )
F → digit    { print(digit.lexval); }
                </pre>
                
                <p>For input "9 + 5 * 2", this SDT would output "9 5 2 * +".</p>
                
                <h4>SDT for Simple Calculator</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
E → E + T    { E.val = E₁.val + T.val; }
E → E - T    { E.val = E₁.val - T.val; }
E → T        { E.val = T.val; }
T → T * F    { T.val = T₁.val * F.val; }
T → T / F    { T.val = T₁.val / F.val; }
T → F        { T.val = F.val; }
F → ( E )    { F.val = E.val; }
F → number   { F.val = number.lexval; }
                </pre>
                
                <h4>Implementing SDTs in Yacc</h4>
                <p>In Yacc/Bison, semantic actions are written in C code inside curly braces:</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
%union {
    int ival;
    float fval;
}

%token <ival> NUMBER
%type <ival> expr term factor

%%
expr    : expr '+' term   { $$ = $1 + $3; }
        | expr '-' term   { $$ = $1 - $3; }
        | term            { $$ = $1; }
        ;

term    : term '*' factor { $$ = $1 * $3; }
        | term '/' factor { $$ = $1 / $3; }
        | factor          { $$ = $1; }
        ;

factor  : '(' expr ')'    { $$ = $2; }
        | NUMBER          { $$ = $1; }
        ;
%%
                </pre>
                
                <h4>Evaluation Order</h4>
                <p>The order of evaluation depends on the parsing method:</p>
                <ul>
                    <li><strong>Bottom-up parsing:</strong> Actions are executed when a reduction occurs</li>
                    <li><strong>Top-down parsing:</strong> Actions can be executed at any point in the production</li>
                </ul>
            `,
            keyPoints: [
                "SDT = SDD with actions embedded in productions",
                "Actions in { } are executed during parsing",
                "Yacc/Bison use SDTs for translation",
                "$$ represents the left-hand side value",
                "$1, $2, etc. represent right-hand side values"
            ]
        },

        {
            title: "4.4 Type Checking",
            content: `
                <h4>What is Type Checking?</h4>
                <p>Type checking is the process of verifying that the operations in a program are type-consistent - that is, operators are applied to operands of the appropriate types. It is a major part of semantic analysis.</p>
                
                <h4>Why Type Checking?</h4>
                <ul>
                    <li><strong>Error detection:</strong> Catches type mismatches early</li>
                    <li><strong>Safety:</strong> Prevents meaningless or dangerous operations</li>
                    <li><strong>Optimization:</strong> Type information helps generate better code</li>
                    <li><strong>Documentation:</strong> Types serve as implicit documentation</li>
                </ul>
                
                <h4>Static vs Dynamic Type Checking</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Aspect</th>
                        <th style="padding:10px; border:1px solid #ddd;">Static Type Checking</th>
                        <th style="padding:10px; border:1px solid #ddd;">Dynamic Type Checking</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">When</td>
                        <td style="padding:8px; border:1px solid #ddd;">Compile time</td>
                        <td style="padding:8px; border:1px solid #ddd;">Run time</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Languages</td>
                        <td style="padding:8px; border:1px solid #ddd;">C, Java, C++</td>
                        <td style="padding:8px; border:1px solid #ddd;">Python, JavaScript, Ruby</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Advantages</td>
                        <td style="padding:8px; border:1px solid #ddd;">Early error detection, efficiency</td>
                        <td style="padding:8px; border:1px solid #ddd;">Flexibility, rapid prototyping</td>
                    </tr>
                </table>
                
                <h4>Type Expressions</h4>
                <p>Type expressions denote the type of a language construct. They are built from basic types and type constructors.</p>
                
                <p><strong>Basic types:</strong> integer, real, char, boolean, void</p>
                <p><strong>Type constructors:</strong></p>
                <ul>
                    <li><strong>Array:</strong> array(I, T) - array of type T with index set I</li>
                    <li><strong>Pointer:</strong> pointer(T) - pointer to type T</li>
                    <li><strong>Function:</strong> T₁ × T₂ × ... → Tᵣ - function from argument types to return type</li>
                    <li><strong>Record/Structure:</strong> record( (name₁ × T₁) × (name₂ × T₂) × ... )</li>
                </ul>
                
                <h4>Type System</h4>
                <p>A type system is a set of rules for assigning type expressions to different parts of a program. It includes:</p>
                <ul>
                    <li>Rules for basic types (e.g., literals)</li>
                    <li>Rules for operators (e.g., + requires numeric operands)</li>
                    <li>Rules for control structures (e.g., if requires boolean condition)</li>
                    <li>Rules for functions (argument types must match parameters)</li>
                </ul>
            `,
            keyPoints: [
                "Type checking verifies type consistency",
                "Static: compile-time, Dynamic: run-time",
                "Type expressions describe types (int, float, array, pointer)",
                "Type system = rules for assigning types",
                "Essential for semantic analysis"
            ]
        },

        {
            title: "4.5 Type Checking Techniques",
            content: `
                <h4>Synthesis vs Inference</h4>
                
                <h4>Type Synthesis</h4>
                <p>Type synthesis computes the type of an expression from the types of its subexpressions. It works bottom-up, using the types of operands to determine the type of the result.</p>
                
                <p><strong>Example:</strong> If E₁ has type int and E₂ has type int, then E₁ + E₂ has type int.</p>
                
                <h4>Type Inference</h4>
                <p>Type inference deduces the types of expressions based on their usage, without explicit type declarations. It's common in functional languages like ML and Haskell.</p>
                
                <p><strong>Example:</strong> In ML, the function <code>fn x => x + 1</code> is inferred to have type int → int.</p>
                
                <h4>Type Checking Rules</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Construct</th>
                        <th style="padding:10px; border:1px solid #ddd;">Type Rule</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Integer literal</td>
                        <td style="padding:8px; border:1px solid #ddd;">int</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Arithmetic op (+, -, *, /)</td>
                        <td style="padding:8px; border:1px solid #ddd;">If both operands are int → int<br>If both are float → float<br>Otherwise error</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Relational op (<, >, ==)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Result is boolean</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">if (E) S₁ else S₂</td>
                        <td style="padding:8px; border:1px solid #ddd;">E must be boolean</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Function call f(a₁, a₂, ...)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Types of aᵢ must match f's parameter types</td>
                    </tr>
                </table>
                
                <h4>Type Checking in SDTs</h4>
                <p>Type checking is often implemented using syntax-directed translation:</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
E → E₁ + E₂    { if (E₁.type == int && E₂.type == int) 
                    E.type = int;
                  else if (E₁.type == float && E₂.type == float)
                    E.type = float;
                  else
                    error("Type mismatch");
                }

E → id         { E.type = lookup(id.lexeme); }
                </pre>
                
                <h4>Type Coercion</h4>
                <p>Some languages allow implicit type conversions (coercion). For example, in C, int can be promoted to float in mixed expressions.</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
E → E₁ + E₂    { if (E₁.type == int && E₂.type == int)
                    E.type = int;
                  else if (E₁.type == float && E₂.type == int)
                    E.type = float;  // coerce int to float
                  else if (E₁.type == int && E₂.type == float)
                    E.type = float;  // coerce int to float
                  else if (E₁.type == float && E₂.type == float)
                    E.type = float;
                  else
                    error();
                }
                </pre>
                
                <h4>Type Equivalence</h4>
                <p>Two approaches to determining if types are equivalent:</p>
                <ul>
                    <li><strong>Structural equivalence:</strong> Types are equivalent if they have the same structure (same type constructors in the same order)</li>
                    <li><strong>Name equivalence:</strong> Types are equivalent only if they have the same name (used in Ada, Java)</li>
                </ul>
            `,
            keyPoints: [
                "Type synthesis: compute type from subexpressions (bottom-up)",
                "Type inference: deduce types from usage (no declarations)",
                "Type rules specify valid type combinations",
                "Coercion: implicit type conversion",
                "Structural vs name equivalence"
            ]
        },

        {
            title: "4.6 Symbol Tables and Type Information",
            content: `
                <h4>Role of Symbol Table</h4>
                <p>The symbol table stores information about identifiers, including their types, scope, and memory locations. It is used throughout compilation, especially during semantic analysis and type checking.</p>
                
                <h4>Information Stored in Symbol Table</h4>
                <ul>
                    <li><strong>Name:</strong> The identifier's lexeme</li>
                    <li><strong>Type:</strong> Type expression (int, float, array, etc.)</li>
                    <li><strong>Scope:</strong> Where the identifier is visible</li>
                    <li><strong>Memory location:</strong> Offset or address</li>
                    <li><strong>Line number:</strong> For error reporting</li>
                    <li><strong>Other attributes:</strong> const, static, etc.</li>
                </ul>
                
                <h4>Symbol Table Operations</h4>
                <ul>
                    <li><strong>insert(name, info):</strong> Add a new entry</li>
                    <li><strong>lookup(name):</strong> Find an entry</li>
                    <li><strong>enter_scope():</strong> Begin a new nested scope</li>
                    <li><strong>exit_scope():</strong> End current scope</li>
                </ul>
                
                <h4>Type Checking Using Symbol Table</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
E → id         { E.type = lookup(id.lexeme).type; }

D → T id ';'   { insert(id.lexeme, T.type); }

T → int        { T.type = int; }
T → float      { T.type = float; }
                </pre>
                
                <h4>Handling Scopes</h4>
                <p>Nested scopes require careful symbol table management. Common approach: use a stack of symbol tables.</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Block → '{'     { enter_scope(); }
        Declarations
        Statements
        '}'      { exit_scope(); }
                </pre>
            `,
            keyPoints: [
                "Symbol table stores identifier information",
                "Used for type checking and code generation",
                "Operations: insert, lookup, enter_scope, exit_scope",
                "Type information stored with each identifier",
                "Scopes managed with stack of tables"
            ]
        }
    ],

    summary: `
        <h3>Chapter 4 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Syntax-directed translation:</strong> Associating actions with grammar productions</li>
            <li><strong>SDD:</strong> Grammar + attributes + semantic rules</li>
            <li><strong>SDT:</strong> SDD with actions embedded in productions</li>
            <li><strong>Synthesized attributes:</strong> Computed from children (bottom-up)</li>
            <li><strong>Inherited attributes:</strong> Passed from parent/siblings (top-down)</li>
            <li><strong>S-attributed grammar:</strong> Only synthesized attributes</li>
            <li><strong>L-attributed grammar:</strong> Synthesized + restricted inherited</li>
            <li><strong>Type checking:</strong> Verifying type consistency</li>
            <li><strong>Static vs dynamic:</strong> Compile-time vs run-time checking</li>
            <li><strong>Type expressions:</strong> array, pointer, function, record</li>
            <li><strong>Symbol table:</strong> Stores type information for identifiers</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What is the difference between synthesized and inherited attributes?",
            answer: "Synthesized attributes are computed from children's attributes (bottom-up). Inherited attributes are passed from parent or siblings (top-down/sideways)."
        },
        {
            question: "What is an S-attributed grammar?",
            answer: "An S-attributed grammar is one where all attributes are synthesized attributes only."
        },
        {
            question: "What is an L-attributed grammar?",
            answer: "An L-attributed grammar allows both synthesized and inherited attributes, but with restrictions: inherited attributes can only depend on attributes of parents or left siblings."
        },
        {
            question: "What is type checking and why is it important?",
            answer: "Type checking verifies that operations are applied to operands of appropriate types. It catches errors early, ensures safety, and enables optimizations."
        },
        {
            question: "Differentiate between static and dynamic type checking.",
            answer: "Static type checking occurs at compile time (C, Java). Dynamic type checking occurs at run time (Python, JavaScript)."
        },
        {
            question: "What is the role of a symbol table in type checking?",
            answer: "The symbol table stores type information for identifiers, which is looked up during type checking to verify correct usage."
        }
    ],

    quickTips: [
        "Synthesized = bottom-up, Inherited = top-down",
        "S-attributed = only synthesized (good for LR parsers)",
        "L-attributed = synthesized + inherited (good for LL parsers)",
        "Yacc/Bison handle S-attributed grammars naturally",
        "Type synthesis: compute from subexpressions",
        "Type inference: deduce from usage"
    ],

    commonMistakes: [
        "❌ Confusing synthesized and inherited - remember: synthesized from children, inherited from parent",
        "❌ Thinking S-attributed and L-attributed are the same - S has no inherited attributes",
        "❌ Forgetting that type checking happens in semantic analysis, not parsing",
        "❌ Mixing up static and dynamic typing",
        "❌ Not understanding that symbol table is used throughout compilation"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 4:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>1 question</strong> at the <strong>Understand</strong> level.</p>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>Syntax-directed definitions:</strong> SDD and SDT concepts</li>
            <li><strong>Attribute types:</strong> Synthesized vs inherited</li>
            <li><strong>Grammar classifications:</strong> S-attributed and L-attributed</li>
            <li><strong>Type checking techniques:</strong> How type checking works</li>
        </ol>
        
        <h4>What "Understand" Means:</h4>
        <p>You need to be able to explain these concepts clearly, differentiate between attribute types, and understand how type checking integrates with syntax-directed translation.</p>
        
        <h4>Practice Questions:</h4>
        <ul>
            <li>Explain the difference between synthesized and inherited attributes with examples.</li>
            <li>What is the difference between S-attributed and L-attributed grammars?</li>
            <li>Describe how type checking is performed using syntax-directed translation.</li>
            <li>How is the symbol table used during type checking?</li>
        </ul>
    `
};