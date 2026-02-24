// ===============================
// FOCUS AREA: ARTIFICIAL INTELLIGENCE - CHAPTER 3
// Knowledge Representation and Reasoning
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaAIChapter3 = {
    title: "Chapter 3: Knowledge Representation and Reasoning",
    
    // Blueprint alignment: 1 question (Analyze)
    blueprint: {
        totalQuestions: 1,
        cognitiveLevels: {
            analyze: 1
        },
        topics: [
            "Knowledge representation techniques",
            "Procedural vs declarative knowledge",
            "Reasoning methods",
            "AI's role in understanding intelligence and perception"
        ]
    },

    learningObjectives: [
        "Understand the importance of knowledge representation in AI",
        "Differentiate between declarative and procedural knowledge",
        "Explain various knowledge representation techniques",
        "Analyze reasoning methods used in AI systems",
        "Understand how AI contributes to understanding intelligence and perception"
    ],

    sections: [
        {
            title: "3.1 Introduction to Knowledge Representation",
            content: `
                <h4>What is Knowledge Representation?</h4>
                <p>Knowledge Representation (KR) is the field of AI concerned with how to represent information about the world in a form that a computer system can use to solve complex tasks.</p>
                
                <p><strong>Simple Definition:</strong> KR is about finding ways to store knowledge so that AI programs can use it to reason and make decisions.</p>
                
                <h4>Why is Knowledge Representation Important?</h4>
                <ul>
                    <li><strong>Problem Solving:</strong> AI needs knowledge to solve problems</li>
                    <li><strong>Reasoning:</strong> AI must draw conclusions from what it knows</li>
                    <li><strong>Communication:</strong> AI needs to share knowledge with humans and other systems</li>
                    <li><strong>Learning:</strong> New knowledge must be integrated with existing knowledge</li>
                </ul>
                
                <h4>Key Questions in Knowledge Representation:</h4>
                <ol>
                    <li><strong>What knowledge needs to be represented?</strong> (Facts, concepts, relationships, procedures)</li>
                    <li><strong>How to represent it formally?</strong> (Logic, rules, networks, frames)</li>
                    <li><strong>How to reason with it?</strong> (Inference, deduction, induction)</li>
                </ol>
                
                <h4>Properties of a Good Knowledge Representation System:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Property</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Representational Adequacy</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Can represent all needed types of knowledge</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Inferential Adequacy</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Can manipulate knowledge to derive new knowledge</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Inferential Efficiency</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Can do so efficiently (not too slow)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Acquisitional Efficiency</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Can acquire new knowledge easily</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Knowledge Representation is about storing information for AI to use",
                "Four key properties: representational adequacy, inferential adequacy, inferential efficiency, acquisitional efficiency",
                "KR enables problem solving, reasoning, and learning"
            ]
        },

        {
            title: "3.2 Types of Knowledge",
            content: `
                <h4>Different Kinds of Knowledge in AI</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Knowledge Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Declarative Knowledge</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Knowledge about facts and things</td>
                        <td style="padding:8px; border:1px solid #ddd;">"Cats are mammals"<br>"Paris is the capital of France"</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Procedural Knowledge</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Knowledge about how to do things</td>
                        <td style="padding:8px; border:1px solid #ddd;">"How to drive a car"<br>"How to bake a cake"</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Heuristic Knowledge</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Rules of thumb, experience-based knowledge</td>
                        <td style="padding:8px; border:1px solid #ddd;">"If it's raining, take an umbrella"<br>"If the engine smokes, check the oil"</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Structural Knowledge</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Knowledge about relationships and structures</td>
                        <td style="padding:8px; border:1px solid #ddd;">"A car has wheels, an engine, and seats"<br>"A tree has roots, trunk, and branches"</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Meta-knowledge</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Knowledge about knowledge</td>
                        <td style="padding:8px; border:1px solid #ddd;">"I know that I know C++"<br>"I'm not sure about this answer"</td>
                    </tr>
                </table>
                
                <h4>Deep Dive: Declarative vs Procedural Knowledge</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Aspect</th>
                        <th style="padding:10px; border:1px solid #ddd;">Declarative Knowledge</th>
                        <th style="padding:10px; border:1px solid #ddd;">Procedural Knowledge</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Definition</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Knowledge THAT something is true</td>
                        <td style="padding:8px; border:1px solid #ddd;">Knowledge HOW to do something</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Example</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">"A car has four wheels"</td>
                        <td style="padding:8px; border:1px solid #ddd;">Steps to start a car: insert key, turn ignition, press gas</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Representation</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Facts, statements, propositions</td>
                        <td style="padding:8px; border:1px solid #ddd;">Rules, procedures, steps</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Ease of modification</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Easy to add/remove facts</td>
                        <td style="padding:8px; border:1px solid #ddd;">Harder to modify procedures</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Explanation ability</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Easy to explain ("because it's a fact")</td>
                        <td style="padding:8px; border:1px solid #ddd;">Harder to explain ("that's just how it's done")</td>
                    </tr>
                </table>
                
                <h4>Blueprint Focus: Representing "How to Drive a Car"</h4>
                
                <p><strong>Question:</strong> In Knowledge Representation, how do we represent "how to drive a car"?</p>
                
                <p><strong>Answer:</strong> <span style="color:#2772a0; font-weight:bold;">Procedural Knowledge</span></p>
                
                <p><strong>Explanation:</strong> "How to drive a car" involves a series of steps and skills:</p>
                <ol>
                    <li>Adjust seat and mirrors</li>
                    <li>Insert key and start engine</li>
                    <li>Press clutch and select gear</li>
                    <li>Release clutch while pressing gas</li>
                    <li>Steer and navigate traffic</li>
                    <li>Brake when needed</li>
                    <li>Park and turn off engine</li>
                </ol>
                
                <p>This is <strong>procedural knowledge</strong> because it's about the process, not just facts. Declarative knowledge would tell you facts about cars (like "cars have engines"), but not how to actually drive.</p>
                
                <div style="background-color:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🔑 Key Insight for Exam:</strong> Procedural knowledge represents "how-to" tasks involving steps and skills. Declarative knowledge represents facts and information.</p>
                </div>
            `,
            keyPoints: [
                "Five types of knowledge: declarative, procedural, heuristic, structural, meta-knowledge",
                "Declarative = knowledge THAT (facts)",
                "Procedural = knowledge HOW (skills, steps)",
                "Driving a car is procedural knowledge",
                "Heuristic knowledge = rules of thumb"
            ]
        },

        {
            title: "3.3 Logic-Based Representations",
            content: `
                <h4>Using Logic to Represent Knowledge</h4>
                
                <h4>3.3.1 Propositional Logic</h4>
                
                <p><strong>Components:</strong></p>
                <ul>
                    <li><strong>Propositions:</strong> Statements that are either true or false (P, Q, R)</li>
                    <li><strong>Connectives:</strong> AND (∧), OR (∨), NOT (¬), IMPLIES (→), EQUIVALENT (↔)</li>
                    <li><strong>Truth tables:</strong> Define meaning of connectives</li>
                </ul>
                
                <p><strong>Example:</strong></p>
                <ul>
                    <li>P = "It is raining"</li>
                    <li>Q = "The ground is wet"</li>
                    <li>P → Q means "If it is raining, then the ground is wet"</li>
                </ul>
                
                <p><strong>Limitations of Propositional Logic:</strong></p>
                <ul>
                    <li>Cannot represent objects or relationships</li>
                    <li>Cannot express generalizations (like "all students")</li>
                    <li>Becomes unwieldy for complex knowledge</li>
                </ul>
                
                <h4>3.3.2 First-Order Logic (FOL) - More Powerful!</h4>
                
                <p><strong>Components of FOL:</strong></p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Component</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Constants</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Specific objects</td>
                        <td style="padding:8px; border:1px solid #ddd;">John, Car, Paris</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Variables</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Placeholders for objects</td>
                        <td style="padding:8px; border:1px solid #ddd;">x, y, z</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Predicates</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Relations or properties</td>
                        <td style="padding:8px; border:1px solid #ddd;">Human(x), Loves(John, Mary)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Functions</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Map objects to objects</td>
                        <td style="padding:8px; border:1px solid #ddd;">MotherOf(John)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Quantifiers</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Universal (∀), Existential (∃)</td>
                        <td style="padding:8px; border:1px solid #ddd;">∀x, ∃y</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Connectives</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Same as propositional logic</td>
                        <td style="padding:8px; border:1px solid #ddd;">∧, ∨, ¬, →, ↔</td>
                    </tr>
                </table>
                
                <h4>Examples in First-Order Logic:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">English Sentence</th>
                        <th style="padding:10px; border:1px solid #ddd;">FOL Representation</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">"All humans are mortal"</td>
                        <td style="padding:8px; border:1px solid #ddd;">∀x (Human(x) → Mortal(x))</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">"Someone likes ice cream"</td>
                        <td style="padding:8px; border:1px solid #ddd;">∃x Likes(x, IceCream)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">"Every student has a teacher"</td>
                        <td style="padding:8px; border:1px solid #ddd;">∀x (Student(x) → ∃y (Teacher(y) ∧ Teaches(y,x)))</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">"No one is taller than themselves"</td>
                        <td style="padding:8px; border:1px solid #ddd;">∀x ¬Taller(x,x)</td>
                    </tr>
                </table>
                
                <h4>Advantages of First-Order Logic:</h4>
                <ul>
                    <li>Very expressive - can represent complex knowledge</li>
                    <li>Well-defined semantics - meaning is clear</li>
                    <li>Formal reasoning possible - can prove things</li>
                </ul>
                
                <h4>Disadvantages:</h4>
                <ul>
                    <li>Computationally expensive - reasoning can be slow</li>
                    <li>Can't handle uncertainty well</li>
                    <li>Requires expertise to use properly</li>
                </ul>
            `,
            keyPoints: [
                "Propositional logic uses simple true/false statements with connectives",
                "First-order logic adds objects, relations, and quantifiers",
                "∀ means 'for all' (universal quantifier)",
                "∃ means 'there exists' (existential quantifier)",
                "FOL is more expressive than propositional logic"
            ]
        },

        {
            title: "3.4 Rule-Based Systems",
            content: `
                <h4>Representing Knowledge as Rules</h4>
                
                <h4>3.4.1 Production Rules</h4>
                
                <p><strong>Format:</strong> <code>IF condition THEN action/conclusion</code></p>
                
                <p><strong>Examples:</strong></p>
                <ul>
                    <li><code>IF animal has hair THEN animal is mammal</code></li>
                    <li><code>IF animal gives milk THEN animal is mammal</code></li>
                    <li><code>IF animal is mammal and eats meat THEN animal is carnivore</code></li>
                    <li><code>IF temperature > 100 THEN patient has fever</code></li>
                </ul>
                
                <h4>Components of a Rule-Based System:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Component</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Working Memory</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Contains current facts known about the problem</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Rule Base</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Set of IF-THEN rules representing knowledge</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Inference Engine</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Applies rules to facts to derive new facts</td>
                    </tr>
                </table>
                
                <h4>3.4.2 Forward Chaining (Data-Driven)</h4>
                
                <p><strong>Process:</strong></p>
                <ol>
                    <li>Start with known facts in working memory</li>
                    <li>Find all rules whose conditions match current facts</li>
                    <li>Apply one rule, adding its conclusion to working memory</li>
                    <li>Repeat until goal is reached or no more rules apply</li>
                </ol>
                
                <p><strong>Analogy:</strong> Like starting with ingredients and following recipes to make a dish. You keep cooking until you get the final meal.</p>
                
                <p><strong>Use case:</strong> Planning, monitoring, configuration</p>
                
                <p><strong>Example:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Facts: has hair, has tawny color, eats meat

Rule 1: IF has hair THEN mammal → Add: mammal
Rule 2: IF mammal AND eats meat THEN carnivore → Add: carnivore
Rule 3: IF carnivore AND has tawny color THEN lion → Add: lion

Conclusion: It is a lion
                </pre>
                
                <h4>3.4.3 Backward Chaining (Goal-Driven)</h4>
                
                <p><strong>Process:</strong></p>
                <ol>
                    <li>Start with goal (what you want to prove)</li>
                    <li>Find rules that conclude this goal</li>
                    <li>Try to prove the conditions of those rules</li>
                    <li>Repeat recursively until facts are known</li>
                </ol>
                
                <p><strong>Analogy:</strong> Like planning a meal backward from the desired dish. "I want lasagna. What do I need? Pasta, sauce, cheese. Do I have them?"</p>
                
                <p><strong>Use case:</strong> Diagnosis, question answering, debugging</p>
                
                <p><strong>Example:</strong></p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Goal: Is it a lion?

Rule 3 says: IF carnivore AND has tawny color THEN lion
Need to prove: carnivore AND has tawny color

Rule 2 says: IF mammal AND eats meat THEN carnivore
Need to prove: mammal AND eats meat

Rule 1 says: IF has hair THEN mammal
Fact: has hair ✓
Fact: eats meat ✓

All conditions satisfied → It is a lion ✓
                </pre>
                
                <h4>Comparison: Forward vs Backward Chaining</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Aspect</th>
                        <th style="padding:10px; border:1px solid #ddd;">Forward Chaining</th>
                        <th style="padding:10px; border:1px solid #ddd;">Backward Chaining</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Direction</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Data → Goal</td>
                        <td style="padding:8px; border:1px solid #ddd;">Goal → Data</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Start with</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Known facts</td>
                        <td style="padding:8px; border:1px solid #ddd;">Goal to prove</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Best for</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Planning, monitoring</td>
                        <td style="padding:8px; border:1px solid #ddd;">Diagnosis, debugging</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Reasoning</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Bottom-up</td>
                        <td style="padding:8px; border:1px solid #ddd;">Top-down</td>
                    </tr>
                </table>
                
                <h4>3.4.4 Expert Systems</h4>
                
                <p><strong>Definition:</strong> An expert system is a computer system that emulates the decision-making ability of a human expert in a specific domain.</p>
                
                <p><strong>Components of an Expert System:</strong></p>
                <ul>
                    <li><strong>Knowledge Base:</strong> Contains domain knowledge (rules + facts)</li>
                    <li><strong>Inference Engine:</strong> Applies rules to facts (forward/backward chaining)</li>
                    <li><strong>User Interface:</strong> Allows users to interact with the system</li>
                    <li><strong>Explanation Facility:</strong> Explains how conclusions were reached</li>
                    <li><strong>Knowledge Acquisition Facility:</strong> Helps add new knowledge</li>
                </ul>
                
                <h4>Famous Expert Systems:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">System</th>
                        <th style="padding:10px; border:1px solid #ddd;">Domain</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>MYCIN</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Medical diagnosis</td>
                        <td style="padding:8px; border:1px solid #ddd;">Diagnosed bacterial infections, prescribed antibiotics</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>DENDRAL</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Chemistry</td>
                        <td style="padding:8px; border:1px solid #ddd;">Identified molecular structure from mass spectrometry</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>XCON (R1)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Computer configuration</td>
                        <td style="padding:8px; border:1px solid #ddd;">Configured VAX computer systems for DEC</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>PROSPECTOR</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Geology</td>
                        <td style="padding:8px; border:1px solid #ddd;">Helped discover mineral deposits</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Rule-based systems use IF-THEN rules to represent knowledge",
                "Forward chaining: data-driven, starts from facts",
                "Backward chaining: goal-driven, starts from hypothesis",
                "Expert systems emulate human expert decision-making",
                "MYCIN, DENDRAL, XCON are famous expert systems"
            ]
        },

        {
            title: "3.5 Semantic Networks and Frames",
            content: `
                <h4>3.5.1 Semantic Networks</h4>
                
                <p><strong>Definition:</strong> A semantic network is a graphical representation of knowledge where nodes represent concepts and edges represent relationships between them.</p>
                
                <p><strong>Structure:</strong></p>
                <ul>
                    <li><strong>Nodes:</strong> Objects, concepts, or events</li>
                    <li><strong>Edges:</strong> Relationships between nodes</li>
                    <li><strong>Labels:</strong> Describe the type of relationship</li>
                </ul>
                
                <h4>Common Relationships in Semantic Networks:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Relationship</th>
                        <th style="padding:10px; border:1px solid #ddd;">Meaning</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>IS-A</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Subclass relationship</td>
                        <td style="padding:8px; border:1px solid #ddd;">Dog IS-A Mammal</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>HAS / HAS-PART</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Part-whole relationship</td>
                        <td style="padding:8px; border:1px solid #ddd;">Car HAS Engine</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>INSTANCE-OF</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Individual belongs to class</td>
                        <td style="padding:8px; border:1px solid #ddd;">Fido INSTANCE-OF Dog</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>PROPERTY</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Attribute of concept</td>
                        <td style="padding:8px; border:1px solid #ddd;">Elephant HAS-PROPERTY Large</td>
                    </tr>
                </table>
                
                <h4>Example Semantic Network:</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
                    Animal
                      |
                    IS-A
                      |
                   Mammal
                  /      \
               IS-A      IS-A
                /          \
              Dog          Cat
               |            |
             HAS           HAS
               |            |
             Tail        Whiskers
               |
          INSTANCE-OF
               |
             Fido
                </pre>
                
                <p><strong>What this represents:</strong></p>
                <ul>
                    <li>Mammal IS-A Animal</li>
                    <li>Dog IS-A Mammal</li>
                    <li>Cat IS-A Mammal</li>
                    <li>Dog HAS Tail</li>
                    <li>Cat HAS Whiskers</li>
                    <li>Fido INSTANCE-OF Dog</li>
                </ul>
                
                <p><strong>Inheritance:</strong> Because Fido is a Dog, and Dog IS-A Mammal, and Mammal IS-A Animal, Fido inherits properties from all these classes.</p>
                
                <h4>Advantages of Semantic Networks:</h4>
                <ul>
                    <li>Intuitive and visual</li>
                    <li>Supports inheritance (like object-oriented programming)</li>
                    <li>Easy to understand for humans</li>
                    <li>Good for representing taxonomies</li>
                </ul>
                
                <h4>Disadvantages:</h4>
                <ul>
                    <li>No formal semantics (meaning can be ambiguous)</li>
                    <li>Can't represent all types of knowledge</li>
                    <li>Reasoning can be inefficient for large networks</li>
                </ul>
                
                <h4>3.5.2 Frames</h4>
                
                <p><strong>Definition:</strong> A frame is a data structure for representing stereotyped situations or objects. It's like a record with slots that can hold values.</p>
                
                <p><strong>Structure of a Frame:</strong></p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Frame: DOG
  IS-A: Mammal
  HAS: Tail
  SOUND: Bark
  LEGS: 4
  EATS: Meat
  COLOR: (default: Brown)
                </pre>
                
                <p><strong>Components of a Frame:</strong></p>
                <ul>
                    <li><strong>Frame name:</strong> Identifies the concept (DOG)</li>
                    <li><strong>Slots:</strong> Attributes of the concept (HAS, SOUND, LEGS)</li>
                    <li><strong>Facets:</strong> Additional information about slots:
                        <ul>
                            <li><strong>Value:</strong> Specific value</li>
                            <li><strong>Default:</strong> Default value if not specified</li>
                            <li><strong>Range:</strong> Allowed values</li>
                            <li><strong>If-needed:</strong> Procedure to compute value</li>
                        </ul>
                    </li>
                </ul>
                
                <h4>Frame Example with Facets:</h4>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Frame: EMPLOYEE
  Name: 
    Value: (string)
    Required: yes
    
  Age:
    Value: (integer)
    Range: 18-65
    Default: 18
    
  Salary:
    Value: (number)
    If-needed: Calculate from position and experience
    
  Department:
    Value: (string)
    Default: "General"
    
  Manager:
    Value: (EMPLOYEE)
    If-needed: Find department manager
                </pre>
                
                <h4>Advantages of Frames:</h4>
                <ul>
                    <li>Organized, structured knowledge</li>
                    <li>Supports inheritance (frames inherit from parent frames)</li>
                    <li>Can include default values</li>
                    <li>Can attach procedures (if-needed, if-added)</li>
                </ul>
                
                <h4>Inheritance in Frames:</h4>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Frame: ANIMAL
  EATS: Food
  MOVES: Yes

Frame: MAMMAL
  IS-A: ANIMAL
  HAS-FUR: Yes
  GIVES-MILK: Yes

Frame: DOG
  IS-A: MAMMAL
  SOUND: Bark
  LEGS: 4
                </pre>
                
                <p>DOG inherits EATS from ANIMAL and HAS-FUR from MAMMAL, plus has its own slots SOUND and LEGS.</p>
                
                <h4>Comparison: Semantic Networks vs Frames</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Aspect</th>
                        <th style="padding:10px; border:1px solid #ddd;">Semantic Networks</th>
                        <th style="padding:10px; border:1px solid #ddd;">Frames</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Representation</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Graph (nodes + edges)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Structured records (slots + values)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Visual</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Very visual, easy to draw</td>
                        <td style="padding:8px; border:1px solid #ddd;">Less visual, more textual</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Inheritance</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Yes (through IS-A links)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Yes (through IS-A slots)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Default values</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Not typically supported</td>
                        <td style="padding:8px; border:1px solid #ddd;">Yes (default facets)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Procedures</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Not typically supported</td>
                        <td style="padding:8px; border:1px solid #ddd;">Yes (if-needed, if-added)</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Semantic networks use nodes (concepts) and edges (relationships)",
                "IS-A relationships enable inheritance",
                "Frames organize knowledge in slots with values and facets",
                "Frames can have default values and attached procedures",
                "Both support inheritance from parent to child"
            ]
        },

        {
            title: "3.6 Reasoning with Knowledge",
            content: `
                <h4>What is Reasoning?</h4>
                <p>Reasoning is the process of drawing conclusions from existing knowledge. AI systems use various reasoning methods to solve problems and make decisions.</p>
                
                <h4>Types of Reasoning:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Reasoning Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Deductive Reasoning</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">General → Specific. If premises are true, conclusion must be true.</td>
                        <td style="padding:8px; border:1px solid #ddd;">All men are mortal. Socrates is a man. Therefore, Socrates is mortal.</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Inductive Reasoning</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Specific → General. Conclusion is probable, not certain.</td>
                        <td style="padding:8px; border:1px solid #ddd;">I saw 100 white swans. Therefore, all swans are white. (Could be wrong!)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Abductive Reasoning</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Inference to best explanation. From effect, infer cause.</td>
                        <td style="padding:8px; border:1px solid #ddd;">Grass is wet. It could be rain or sprinklers. Rain is the best explanation.</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Analogical Reasoning</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Compare similar situations to draw conclusions.</td>
                        <td style="padding:8px; border:1px solid #ddd;">This car is like my previous car, so it will handle similarly.</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Non-monotonic Reasoning</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Conclusions may change with new information.</td>
                        <td style="padding:8px; border:1px solid #ddd;">Birds fly (usually). Tweety is a bird → Tweety flies. But Tweety is a penguin → Tweety doesn't fly.</td>
                    </tr>
                </table>
                
                <h4>Blueprint Focus: Deductive Reasoning Example</h4>
                
                <div style="background-color:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>Example of Deductive Reasoning:</strong></p>
                    <p><strong>Premise 1:</strong> When it rains, the grass gets wet.</p>
                    <p><strong>Premise 2:</strong> It rains.</p>
                    <p><strong>Conclusion:</strong> Therefore, the grass is wet.</p>
                    
                    <p style="margin-top:10px;"><strong>Why this is deductive:</strong> It applies a general rule (when it rains, grass gets wet) to a specific case (it is raining) to reach a conclusion. If the premises are true, the conclusion must be true.</p>
                </div>
                
                <h4>Common Reasoning Fallacies to Avoid:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Fallacy</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                        <th style="padding:10px; border:1px solid #ddd;">Why It's Wrong</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Affirming the consequent</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">If it rains, grass wet. Grass is wet → it rained.</td>
                        <td style="padding:8px; border:1px solid #ddd;">Could be sprinklers, dew, etc.</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Denying the antecedent</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">If it rains, grass wet. It didn't rain → grass not wet.</td>
                        <td style="padding:8px; border:1px solid #ddd;">Could still be wet from sprinklers.</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Deductive reasoning: general rule → specific case (certain)",
                "Inductive reasoning: specific cases → general rule (probable)",
                "Abductive reasoning: effect → best explanation",
                "Analogical reasoning: compare similar situations",
                "Non-monotonic reasoning: conclusions can change with new info"
            ]
        },

        {
            title: "3.7 AI's Contribution to Understanding Intelligence and Perception",
            content: `
                <h4>Blueprint Focus: How AI Helps Understand Intelligence</h4>
                
                <p><strong>This section addresses the blueprint requirement about AI's role in gaining insight into intelligence and perception.</strong></p>
                
                <h4>How AI Contributes to Understanding Human Intelligence:</h4>
                
                <ol>
                    <li><strong>Analyzing Large Datasets:</strong> AI processes vast amounts of behavioral data to identify patterns in how humans think, learn, and make decisions.</li>
                    
                    <li><strong>Modeling Cognitive Processes:</strong> AI creates computational models that simulate human thinking, helping test theories about how the mind works.</li>
                    
                    <li><strong>Testing Theories of Intelligence:</strong> By implementing theories as computer programs, we can see if they actually produce intelligent behavior.</li>
                    
                    <li><strong>Revealing Underlying Patterns:</strong> Machine learning algorithms can find patterns in human behavior that humans might not notice themselves.</li>
                    
                    <li><strong>Understanding Perception:</strong> Computer vision and speech recognition models help us understand how humans see and hear.</li>
                </ol>
                
                <h4>AI and Perception:</h4>
                
                <p><strong>Perception</strong> is the process of acquiring, interpreting, and organizing sensory information. AI contributes to understanding perception through:</p>
                
                <ul>
                    <li><strong>Computer Vision:</strong> Models of visual processing help understand how humans recognize objects, faces, and scenes.</li>
                    <li><strong>Speech Recognition:</strong> Helps understand how humans process and interpret sound.</li>
                    <li><strong>Natural Language Processing:</strong> Reveals how humans understand and generate language.</li>
                </ul>
                
                <h4>Important Distinction:</h4>
                
                <p><strong>What AI Does NOT Do:</strong></p>
                <ul>
                    <li>❌ Replicate human cognitive processes exactly</li>
                    <li>❌ Rely solely on predetermined rules and algorithms</li>
                    <li>❌ Disregard the complexities of human cognition</li>
                </ul>
                
                <p><strong>What AI DOES Do:</strong></p>
                <ul>
                    <li>✅ Analyze large datasets to uncover patterns and correlations</li>
                    <li>✅ Provide computational models that simulate aspects of intelligence</li>
                    <li>✅ Generate insights about human cognition through experiments</li>
                    <li>✅ Test hypotheses about how the mind works</li>
                </ul>
                
                <h4>Key Takeaway for Exam:</h4>
                
                <div style="background-color:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>AI contributes to gaining insight into human intelligence by analyzing large datasets to uncover patterns and correlations in human behavior, perception, and cognition.</strong></p>
                </div>
                
                <p>This is different from simply replicating human thought or using predetermined rules. AI uses data to discover patterns that help researchers understand how intelligence works.</p>
            `,
            keyPoints: [
                "AI analyzes large datasets to find patterns in human behavior",
                "AI models help test theories of intelligence",
                "Computer vision and speech recognition help understand perception",
                "AI does NOT replicate human cognition exactly",
                "AI provides insights through data analysis and modeling"
            ]
        }
    ],

    summary: `
        <h3>Chapter 3 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Knowledge types:</strong> Declarative (facts), Procedural (how-to), Heuristic (rules of thumb), Structural (relationships), Meta-knowledge (knowledge about knowledge)</li>
            <li><strong>Procedural knowledge</strong> represents "how to drive a car" - steps and skills</li>
            <li><strong>First-order logic</strong> uses predicates, quantifiers (∀, ∃), and connectives for formal representation</li>
            <li><strong>Rule-based systems</strong> use IF-THEN rules with forward chaining (data→goal) or backward chaining (goal→data)</li>
            <li><strong>Semantic networks</strong> use nodes (concepts) and edges (relationships) with IS-A inheritance</li>
            <li><strong>Frames</strong> organize knowledge in slots with default values and attached procedures</li>
            <li><strong>Deductive reasoning:</strong> general rule → specific case (certain)</li>
            <li><strong>AI contributes</strong> to understanding intelligence by analyzing large datasets to uncover patterns</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "In Knowledge Representation, how do we represent 'how to drive a car'? Why?",
            answer: "Procedural knowledge, because it involves steps and skills (how-to), not just facts (declarative)."
        },
        {
            question: "Differentiate between declarative and procedural knowledge with examples.",
            answer: "Declarative: facts (Paris is capital of France). Procedural: how-to (steps to bake a cake)."
        },
        {
            question: "What is first-order logic? Explain its components.",
            answer: "FOL is a formal representation with constants, variables, predicates, functions, quantifiers (∀, ∃), and connectives. Example: ∀x (Human(x) → Mortal(x))."
        },
        {
            question: "Compare forward chaining and backward chaining in rule-based systems.",
            answer: "Forward chaining: data-driven, starts from facts to reach goal. Backward chaining: goal-driven, starts from hypothesis to find supporting facts."
        },
        {
            question: "What is a semantic network? How does inheritance work in it?",
            answer: "A semantic network is a graph with nodes (concepts) and edges (relationships). Inheritance works through IS-A links - subclasses inherit properties from superclasses."
        },
        {
            question: "What is a frame? What are its components?",
            answer: "A frame is a structured record with slots (attributes) and facets (value, default, range, if-needed). Example: DOG frame with slots HAS, SOUND, LEGS."
        },
        {
            question: "Give an example of deductive reasoning.",
            answer: "When it rains, the grass gets wet. It rains. Therefore, the grass is wet. (General rule applied to specific case.)"
        },
        {
            question: "How does AI contribute to understanding human intelligence?",
            answer: "AI analyzes large datasets to uncover patterns and correlations in human behavior, providing insights into cognition and perception."
        }
    ],

    quickTips: [
        "Procedural = HOW, Declarative = THAT",
        "Driving a car is procedural knowledge - remember this!",
        "∀ means 'for all', ∃ means 'there exists'",
        "Forward chaining: facts → goal (bottom-up)",
        "Backward chaining: goal → facts (top-down)",
        "Semantic networks and frames both support IS-A inheritance",
        "Deductive reasoning example: rain → wet grass"
    ],

    commonMistakes: [
        "❌ Confusing procedural and declarative knowledge - remember procedural is HOW (driving), declarative is THAT (facts)",
        "❌ Thinking propositional logic is as expressive as FOL - FOL is more powerful with quantifiers",
        "❌ Mixing up forward and backward chaining - forward starts from data, backward from goal",
        "❌ Forgetting that frames can have default values and procedures",
        "❌ Believing AI replicates human cognition exactly - it analyzes patterns, doesn't copy",
        "❌ Confusing deduction (certain) with induction (probable)"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 3:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>1 question</strong> at the <strong>Analyze</strong> level.</p>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>Knowledge types:</strong> Especially procedural vs declarative (how to drive a car)</li>
            <li><strong>Reasoning methods:</strong> Deductive reasoning example (rain → wet grass)</li>
            <li><strong>AI's role in understanding intelligence:</strong> Analyzing datasets, not replicating cognition</li>
            <li><strong>Knowledge representation techniques:</strong> Rules, semantic networks, frames</li>
        </ol>
        
        <h4>What "Analyze" Means:</h4>
        <p>You need to be able to:</p>
        <ul>
            <li>Compare different representation techniques</li>
            <li>Explain why certain knowledge is represented in particular ways</li>
            <li>Analyze how AI helps understand human intelligence</li>
            <li>Distinguish between reasoning types</li>
        </ul>
        
        <h4>Practice Analysis Questions:</h4>
        <ul>
            <li>Why is driving a car represented as procedural rather than declarative knowledge?</li>
            <li>Compare semantic networks and frames - which is better for representing default values?</li>
            <li>How does analyzing large datasets help AI understand human perception?</li>
            <li>Analyze the difference between deductive and inductive reasoning in AI applications.</li>
        </ul>
        
        <h4>Key Definition to Remember:</h4>
        <p><strong>Procedural knowledge:</strong> Knowledge about how to perform tasks and actions, involving steps and skills (e.g., driving a car).</p>
    `
};