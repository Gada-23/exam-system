// ===============================
// FOCUS AREA: COMPILER DESIGN - CHAPTER 5
// Intermediate Code Generation
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaCompilerChapter5 = {
    title: "Chapter 5: Intermediate Code Generation",
    
    // Blueprint alignment: 1 question (Apply)
    blueprint: {
        totalQuestions: 1,
        cognitiveLevels: {
            apply: 1
        },
        topics: [
            "Intermediate representations",
            "Three-address code",
            "Syntax-directed translation for intermediate code",
            "Type checking in code generation"
        ]
    },

    learningObjectives: [
        "Understand the purpose of intermediate code generation",
        "Differentiate between various intermediate representations",
        "Generate three-address code for language constructs",
        "Apply syntax-directed translation to produce intermediate code",
        "Understand the role of type information in code generation"
    ],

    sections: [
        {
            title: "5.1 Introduction to Intermediate Code",
            content: `
                <h4>What is Intermediate Code?</h4>
                <p>Intermediate code is a machine-independent representation of the source program that lies between the high-level source and the target machine code. It is generated after semantic analysis and before code optimization and code generation.</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">Source → Front End → Intermediate Code → Back End → Target Code</p>
                </div>
                
                <h4>Why Intermediate Code?</h4>
                <ul>
                    <li><strong>Retargeting:</strong> A single front end can be used for multiple target machines by having different back ends</li>
                    <li><strong>Optimization:</strong> Machine-independent optimizations can be performed on the intermediate code</li>
                    <li><strong>Simplicity:</strong> Intermediate code is simpler than source but more abstract than machine code</li>
                    <li><strong>Modularity:</strong> Separates front end (language-dependent) from back end (machine-dependent)</li>
                </ul>
                
                <h4>Properties of Good Intermediate Code</h4>
                <ul>
                    <li><strong>Easy to produce:</strong> Should be straightforward to generate from the source</li>
                    <li><strong>Easy to translate:</strong> Should be easy to convert to target machine code</li>
                    <li><strong>Machine independent:</strong> Should not depend on specific machine features</li>
                    <li><strong>Compact:</strong> Should represent programs efficiently</li>
                </ul>
                
                <h4>Types of Intermediate Representations</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Representation</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Abstract Syntax Tree (AST)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Tree representation of source structure</td>
                        <td style="padding:8px; border:1px solid #ddd;">Used in semantic analysis</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Three-Address Code (TAC)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Linear representation with at most three operands</td>
                        <td style="padding:8px; border:1px solid #ddd;">t1 = a + b</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Static Single Assignment (SSA)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Each variable assigned exactly once</td>
                        <td style="padding:8px; border:1px solid #ddd;">Used for optimization</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Bytecode</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Stack-oriented code for virtual machines</td>
                        <td style="padding:8px; border:1px solid #ddd;">Java bytecode, .NET IL</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Intermediate code is machine-independent",
                "Enables retargeting and optimization",
                "Generated after semantic analysis",
                "Common forms: AST, TAC, SSA, bytecode"
            ]
        },

        {
            title: "5.2 Three-Address Code",
            content: `
                <h4>What is Three-Address Code?</h4>
                <p>Three-address code (TAC) is a linear intermediate representation where each instruction has at most three operands. The name comes from the typical form: <code>x = y op z</code> (two source operands, one destination).</p>
                
                <h4>Types of Three-Address Instructions</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Instruction Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Form</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Assignment</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">x = y op z</td>
                        <td style="padding:8px; border:1px solid #ddd;">t1 = a + b</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Copy</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">x = y</td>
                        <td style="padding:8px; border:1px solid #ddd;">a = b</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Unary</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">x = op y</td>
                        <td style="padding:8px; border:1px solid #ddd;">t1 = -t2</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Indexed assignment</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">x[y] = z  or  x = y[z]</td>
                        <td style="padding:8px; border:1px solid #ddd;">a[i] = t1</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Address and pointer</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">x = &y, x = *y, *x = y</td>
                        <td style="padding:8px; border:1px solid #ddd;">p = &a, x = *p</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Conditional jump</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">if x relop y goto L</td>
                        <td style="padding:8px; border:1px solid #ddd;">if a < b goto L1</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Unconditional jump</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">goto L</td>
                        <td style="padding:8px; border:1px solid #ddd;">goto L2</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Procedure calls</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">param x, call p, return y</td>
                        <td style="padding:8px; border:1px solid #ddd;">param a, call f</td>
                    </tr>
                </table>
                
                <h4>Three-Address Code Example</h4>
                <p><strong>Source code:</strong> <code>a = b * -c + d</code></p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
t1 = -c
t2 = b * t1
t3 = t2 + d
a = t3
                </pre>
                
                <h4>Representing Three-Address Code</h4>
                <p>Three-address code can be implemented in several ways:</p>
                
                <ul>
                    <li><strong>Quadruples:</strong> (op, arg1, arg2, result) - four fields</li>
                    <li><strong>Triples:</strong> (op, arg1, arg2) - results are positions</li>
                    <li><strong>Indirect triples:</strong> Pointers to triples</li>
                </ul>
                
                <h4>Quadruples Representation</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">#</th>
                        <th style="padding:10px; border:1px solid #ddd;">op</th>
                        <th style="padding:10px; border:1px solid #ddd;">arg1</th>
                        <th style="padding:10px; border:1px solid #ddd;">arg2</th>
                        <th style="padding:10px; border:1px solid #ddd;">result</th>
                    </tr>
                    <tr><td>0</td><td>uminus</td><td>c</td><td>-</td><td>t1</td></tr>
                    <tr><td>1</td><td>*</td><td>b</td><td>t1</td><td>t2</td></tr>
                    <tr><td>2</td><td>+</td><td>t2</td><td>d</td><td>t3</td></tr>
                    <tr><td>3</td><td>=</td><td>t3</td><td>-</td><td>a</td></tr>
                </table>
                
                <h4>Triples Representation</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">#</th>
                        <th style="padding:10px; border:1px solid #ddd;">op</th>
                        <th style="padding:10px; border:1px solid #ddd;">arg1</th>
                        <th style="padding:10px; border:1px solid #ddd;">arg2</th>
                    </tr>
                    <tr><td>0</td><td>uminus</td><td>c</td><td>-</td></tr>
                    <tr><td>1</td><td>*</td><td>b</td><td>(0)</td></tr>
                    <tr><td>2</td><td>+</td><td>(1)</td><td>d</td></tr>
                    <tr><td>3</td><td>=</td><td>a</td><td>(2)</td></tr>
                </table>
                
                <p>In triples, results are implicit (the position of the triple itself). Arguments can refer to other triples by their position.</p>
            `,
            keyPoints: [
                "Three-address code has at most 3 operands per instruction",
                "Common forms: assignment, copy, unary, indexed, jumps, calls",
                "Quadruples: (op, arg1, arg2, result)",
                "Triples: (op, arg1, arg2) with implicit results",
                "Indirect triples: pointers to triples"
            ]
        },

        {
            title: "5.3 Syntax-Directed Translation for TAC",
            content: `
                <h4>Generating Three-Address Code</h4>
                <p>Three-address code is typically generated using syntax-directed translation. Semantic actions attached to grammar rules produce TAC instructions.</p>
                
                <h4>SDT for Expressions</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
E → E₁ + T    { E.place = newtemp();
                emit(E.place, '=', E₁.place, '+', T.place); }
E → E₁ - T    { E.place = newtemp();
                emit(E.place, '=', E₁.place, '-', T.place); }
E → T         { E.place = T.place; }

T → T₁ * F    { T.place = newtemp();
                emit(T.place, '=', T₁.place, '*', F.place); }
T → T₁ / F    { T.place = newtemp();
                emit(T.place, '=', T₁.place, '/', F.place); }
T → F         { T.place = F.place; }

F → ( E )     { F.place = E.place; }
F → id        { F.place = id.name; }
F → num       { F.place = num.val; }
                </pre>
                
                <h4>SDT for Assignment Statements</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
S → id = E    { emit(id.place, '=', E.place); }
                </pre>
                
                <h4>SDT for Control Flow (if-then-else)</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
S → if E then S₁ else S₂
    { E.true = newlabel();
      E.false = newlabel();
      S.next = newlabel();
      
      emit('if', E.place, 'goto', E.true);
      emit('goto', E.false);
      
      emitlabel(E.true);
      generate code for S₁ with S₁.next = S.next
      
      emit('goto', S.next);
      emitlabel(E.false);
      
      generate code for S₂ with S₂.next = S.next
      
      emitlabel(S.next);
    }
                </pre>
                
                <h4>SDT for While Loops</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
S → while E do S₁
    { S.begin = newlabel();
      S.after = newlabel();
      
      emitlabel(S.begin);
      emit('if', E.place, 'goto', S₁.start);
      emit('goto', S.after);
      
      generate code for S₁
      
      emit('goto', S.begin);
      emitlabel(S.after);
    }
                </pre>
                
                <h4>Example: Generating TAC for a = b + c * d</h4>
                <p><strong>Parse tree and actions:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
        =
      /   \\
     a     +
          / \\
         b   *
            / \\
           c   d
                </pre>
                
                <p><strong>Generated TAC:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
t1 = c * d
t2 = b + t1
a = t2
                </pre>
            `,
            keyPoints: [
                "TAC generated by SDT with semantic actions",
                "newtemp() creates temporary variables",
                "emit() outputs TAC instructions",
                "newlabel() creates labels for jumps",
                "Control flow requires careful label management"
            ]
        },

        {
            title: "5.4 Translation of Expressions",
            content: `
                <h4>Handling Different Expression Types</h4>
                
                <h4>Arithmetic Expressions</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
E → E₁ + E₂    { E.place = newtemp();
                emit(E.place, '=', E₁.place, '+', E₂.place); }
                </pre>
                
                <h4>Relational Expressions</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
E → E₁ < E₂    { E.place = newtemp();
                emit('if', E₁.place, '<', E₂.place, 'goto', L1);
                emit(E.place, '=', '0');
                emit('goto', L2);
                emitlabel(L1);
                emit(E.place, '=', '1');
                emitlabel(L2); }
                </pre>
                
                <h4>Boolean Expressions</h4>
                <p>Boolean expressions can be translated using either:</p>
                <ul>
                    <li><strong>Numerical representation:</strong> 0 for false, 1 for true</li>
                    <li><strong>Control-flow representation:</strong> Using jumps based on boolean values</li>
                </ul>
                
                <h4>Example: Translating a > b AND c < d</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
// Numerical approach
t1 = a > b      // t1 is 0 or 1
t2 = c < d      // t2 is 0 or 1
t3 = t1 AND t2  // logical AND

// Control-flow approach
    if a > b goto L1
    t3 = 0
    goto L2
L1: if c < d goto L3
    t3 = 0
    goto L2
L3: t3 = 1
L2:
                </pre>
                
                <h4>Short-Circuit Evaluation</h4>
                <p>Many languages use short-circuit evaluation for boolean operators (&& and ||). This can be implemented with jumps:</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
// For E1 && E2
    if E1 == 0 goto L_false
    if E2 == 0 goto L_false
    result = 1
    goto L_end
L_false: result = 0
L_end:
                </pre>
            `,
            keyPoints: [
                "Arithmetic expressions produce value temporaries",
                "Relational expressions can use jumps or produce 0/1",
                "Boolean expressions can be numerical or control-flow",
                "Short-circuit evaluation uses conditional jumps"
            ]
        },

        {
            title: "5.5 Translation of Statements",
            content: `
                <h4>Translation of Assignment Statements</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
S → id = E    { emit(id.place, '=', E.place); }
                </pre>
                
                <h4>Translation of If-Statements</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
S → if E then S₁
    { E.true = newlabel();
      E.false = S.next;  // next instruction after S
      emit('if', E.place, 'goto', E.true);
      emit('goto', E.false);
      emitlabel(E.true);
      generate code for S₁
    }

S → if E then S₁ else S₂
    { E.true = newlabel();
      E.false = newlabel();
      S.next = newlabel();
      
      emit('if', E.place, 'goto', E.true);
      emit('goto', E.false);
      
      emitlabel(E.true);
      generate code for S₁ with S₁.next = S.next
      
      emit('goto', S.next);
      emitlabel(E.false);
      
      generate code for S₂ with S₂.next = S.next
      
      emitlabel(S.next);
    }
                </pre>
                
                <h4>Translation of While Loops</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
S → while E do S₁
    { S.begin = newlabel();
      S.after = newlabel();
      
      emitlabel(S.begin);
      emit('if', E.place, 'goto', S₁.start);
      emit('goto', S.after);
      
      generate code for S₁ with S₁.next = S.begin
      
      emit('goto', S.begin);
      emitlabel(S.after);
    }
                </pre>
                
                <h4>Translation of For Loops</h4>
                <p>A for loop can be translated as:</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
for (init; test; increment) body

// becomes:

init
L1: if not test goto L2
    body
    increment
    goto L1
L2:
                </pre>
                
                <h4>Translation of Break and Continue</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
break;   →   goto after_loop
continue →   goto loop_begin
                </pre>
            `,
            keyPoints: [
                "Assignments: emit store instruction",
                "If-then-else: uses true/false labels",
                "While loops: label at beginning, conditional jump",
                "For loops: translate to while equivalent",
                "Break/continue: jumps to appropriate labels"
            ]
        },

        {
            title: "5.6 Translation of Arrays",
            content: `
                <h4>Array References</h4>
                <p>Arrays require computing element addresses. For a 1D array, the address of A[i] is:</p>
                <p><code>base + (i - low) * size</code></p>
                
                <h4>Translation of Array Assignment</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
S → id[E₁] = E₂
    { t1 = newtemp();
      emit(t1, '=', id.base, '+', E₁.place, '*', id.size);
      emit('*' t1, '=', E₂.place); }  // store
                </pre>
                
                <h4>Translation of Array Reference</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
E → id[E₁]
    { t1 = newtemp();
      emit(t1, '=', id.base, '+', E₁.place, '*', id.size);
      E.place = newtemp();
      emit(E.place, '=', '*' t1); }  // load
                </pre>
                
                <h4>Multidimensional Arrays</h4>
                <p>For a 2D array stored in row-major order, address of A[i][j] is:</p>
                <p><code>base + ((i - low1) * n2 + (j - low2)) * size</code></p>
                <p>where n2 is the size of the second dimension.</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
// For A[i][j]
t1 = (i - low1) * n2
t2 = t1 + (j - low2)
t3 = t2 * size
address = base + t3
                </pre>
            `,
            keyPoints: [
                "Array address = base + (index - low) × element_size",
                "Need to compute offset for each dimension",
                "Row-major: rightmost index varies fastest",
                "Array references generate load instructions",
                "Array assignments generate store instructions"
            ]
        },

        {
            title: "5.7 Translation of Function Calls",
            content: `
                <h4>Function Call Translation</h4>
                <p>Function calls require several steps:</p>
                <ol>
                    <li>Evaluate arguments</li>
                    <li>Push arguments (or place in registers)</li>
                    <li>Call the function</li>
                    <li>Collect return value</li>
                </ol>
                
                <h4>SDT for Function Calls</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
E → id ( ArgList )
    { for each arg in ArgList:
        emit('param', arg.place);
      E.place = newtemp();
      emit(E.place, '=', 'call', id.name); }
                </pre>
                
                <h4>Translation of Function Definitions</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
F → type id ( Params ) Block
    { emitlabel(id.name);
      generate prologue (save registers, allocate stack frame)
      generate code for Block
      generate epilogue (restore registers, return) }
                </pre>
                
                <h4>Return Statement</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
S → return E
    { emit('return', E.place); }
                </pre>
                
                <h4>Example: Function Call Translation</h4>
                <p><strong>Source:</strong> <code>x = sum(a, b, c)</code></p>
                
                <p><strong>Generated TAC:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
param a
param b
param c
t1 = call sum
x = t1
                </pre>
            `,
            keyPoints: [
                "Function calls use 'param' and 'call' instructions",
                "Arguments evaluated before call",
                "Return value stored in temporary",
                "Function definition includes prologue and epilogue"
            ]
        }
    ],

    summary: `
        <h3>Chapter 5 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Intermediate code:</strong> Machine-independent representation between source and target</li>
            <li><strong>Three-address code (TAC):</strong> Instructions with at most three operands</li>
            <li><strong>Quadruples:</strong> (op, arg1, arg2, result) representation</li>
            <li><strong>Triples:</strong> (op, arg1, arg2) with implicit results</li>
            <li><strong>SDT for TAC:</strong> newtemp(), emit(), newlabel() functions</li>
            <li><strong>Expressions:</strong> Generate temporary variables for subexpressions</li>
            <li><strong>Statements:</strong> Use labels for control flow (if, while)</li>
            <li><strong>Arrays:</strong> Compute addresses using base + offset × size</li>
            <li><strong>Function calls:</strong> param and call instructions</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What is three-address code? Give an example of converting an expression to TAC.",
            answer: "Three-address code is an intermediate representation with at most three operands per instruction. Example: a = b + c * d becomes t1 = c * d; t2 = b + t1; a = t2."
        },
        {
            question: "What is the difference between quadruples and triples?",
            answer: "Quadruples have an explicit result field (op, arg1, arg2, result). Triples have implicit results (the position of the triple itself) and use (op, arg1, arg2) format."
        },
        {
            question: "Generate three-address code for the while loop: while (a < b) a = a + 1;",
            answer: "L1: if a < b goto L2; goto L3; L2: a = a + 1; goto L1; L3:"
        },
        {
            question: "How do you translate array reference A[i] to three-address code?",
            answer: "t1 = i * 4 (if int size 4); t2 = A + t1; result = *t2"
        },
        {
            question: "Generate TAC for the function call result = calculate(x, y);",
            answer: "param x; param y; t1 = call calculate; result = t1"
        }
    ],

    quickTips: [
        "newtemp() creates new temporary variables (t1, t2, etc.)",
        "newlabel() creates labels for jumps (L1, L2, etc.)",
        "emit() outputs a TAC instruction",
        "Quadruples have explicit result, triples have implicit result",
        "Control flow needs labels for targets",
        "Array address = base + offset × size"
    ],

    commonMistakes: [
        "❌ Forgetting to create temporaries for intermediate results",
        "❌ Not handling operator precedence correctly in TAC",
        "❌ Using wrong jump targets in control flow",
        "❌ Confusing quadruples and triples representation",
        "❌ Forgetting to multiply index by element size for arrays"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 5:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>1 question</strong> at the <strong>Apply</strong> level.</p>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>Generating three-address code:</strong> Convert expressions and statements to TAC</li>
            <li><strong>Quadruples and triples:</strong> Represent TAC in different forms</li>
            <li><strong>Control flow:</strong> Generate TAC for if-then-else and while loops</li>
            <li><strong>Array translation:</strong> Compute addresses and generate load/store</li>
        </ol>
        
        <h4>What "Apply" Means:</h4>
        <p>You need to be able to generate three-address code for given source code constructs, and represent it in different forms (quadruples, triples).</p>
        
        <h4>Practice Apply Questions:</h4>
        <ul>
            <li>Generate three-address code for the expression: x = a * b + c / d - e</li>
            <li>Convert the following to quadruples and triples: t1 = a + b; t2 = t1 * c; d = t2</li>
            <li>Generate TAC for an if-then-else statement.</li>
            <li>Show the TAC for array assignment: A[i] = B[j] + 10</li>
        </ul>
    `
};