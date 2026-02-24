// ===============================
// FOCUS AREA: ARTIFICIAL INTELLIGENCE - CHAPTER 1
// Introduction to Artificial Intelligence
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaAIChapter1 = {
    title: "Chapter 1: Introduction to Artificial Intelligence",
    
    // Blueprint alignment: 2 questions (Remember, Understand)
    blueprint: {
        totalQuestions: 2,
        cognitiveLevels: {
            remember: 1,
            understand: 1
        },
        topics: [
            "Fundamental principles of AI",
            "Role of AI in gaining insight into intelligence",
            "Intelligent agents and their types",
            "Applications of AI"
        ]
    },

    learningObjectives: [
        "Define artificial intelligence and understand its core principles",
        "Explain the history and evolution of AI",
        "Describe the role of AI in understanding human intelligence and perception",
        "Identify different types of intelligent agents",
        "List and explain major applications of AI"
    ],

    sections: [
        {
            title: "1.1 What is Artificial Intelligence?",
            content: `
                <h4>Definition of AI</h4>
                <p>Artificial Intelligence (AI) is the branch of computer science concerned with making computers behave like humans. It is the study of how to make computers do things that people are better at or would consider intelligent.</p>
                
                <h4>Key Definitions from AI Pioneers:</h4>
                <ul>
                    <li><strong>John McCarthy (1956):</strong> "The science and engineering of making intelligent machines" - He coined the term "Artificial Intelligence" at the Dartmouth Conference.</li>
                    <li><strong>Alan Turing (1950):</strong> "Machines that can think and behave like humans" - He proposed the Turing Test to measure machine intelligence.</li>
                    <li><strong>Elaine Rich:</strong> "The study of how to make computers do things at which, at the moment, people are better."</li>
                    <li><strong>Patrick Winston:</strong> "The study of the computations that make it possible to perceive, reason, and act."</li>
                </ul>
                
                <h4>Simple Explanation:</h4>
                <p>Think of AI as giving computers a "brain" so they can:</p>
                <ul>
                    <li><strong>See</strong> (recognize faces, objects)</li>
                    <li><strong>Hear</strong> (understand speech, music)</li>
                    <li><strong>Think</strong> (solve problems, make decisions)</li>
                    <li><strong>Learn</strong> (get better from experience)</li>
                    <li><strong>Act</strong> (move, respond, communicate)</li>
                </ul>
            `,
            keyPoints: [
                "AI is about making machines intelligent",
                "Term coined by John McCarthy in 1956 at Dartmouth Conference",
                "AI aims to create systems that can perceive, reason, learn, and act",
                "Different definitions emphasize different aspects (human-like vs. rational)"
            ]
        },

        {
            title: "1.2 History and Evolution of AI",
            content: `
                <h4>The Journey of AI: From Dream to Reality</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Period</th>
                        <th style="padding:10px; border:1px solid #ddd;">Development</th>
                        <th style="padding:10px; border:1px solid #ddd;">Key People</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>1940s-1950s</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Birth of AI concepts - Turing Test proposed, first neural network model</td>
                        <td style="padding:8px; border:1px solid #ddd;">Alan Turing, McCulloch, Pitts</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>1956</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Dartmouth Conference - AI named as a field</td>
                        <td style="padding:8px; border:1px solid #ddd;">McCarthy, Minsky, Shannon, Newell, Simon</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>1950s-1960s</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Early enthusiasm, problem-solving programs, LISP language</td>
                        <td style="padding:8px; border:1px solid #ddd;">Newell & Simon (Logic Theorist, GPS), McCarthy (LISP)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>1970s-1980s</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Expert systems, knowledge-based systems</td>
                        <td style="padding:8px; border:1px solid #ddd;">Feigenbaum (MYCIN, DENDRAL)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>1980s-1990s</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Neural networks revival, machine learning focus</td>
                        <td style="padding:8px; border:1px solid #ddd;">Rumelhart, Hinton (Backpropagation)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>2000s-present</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Deep learning, big data, AI in everyday applications</td>
                        <td style="padding:8px; border:1px solid #ddd;">Many researchers and companies</td>
                    </tr>
                </table>
                
                <h4>Important Milestones:</h4>
                <ul>
                    <li><strong>1950:</strong> Alan Turing publishes "Computing Machinery and Intelligence" introducing the Turing Test</li>
                    <li><strong>1956:</strong> Dartmouth College summer workshop - birth of AI as a field</li>
                    <li><strong>1966:</strong> ELIZA - first chatbot by Joseph Weizenbaum</li>
                    <li><strong>1979:</strong> Stanford Cart - first autonomous vehicle</li>
                    <li><strong>1997:</strong> Deep Blue beats world chess champion Garry Kasparov</li>
                    <li><strong>2011:</strong> IBM Watson wins Jeopardy!</li>
                    <li><strong>2016:</strong> AlphaGo beats world Go champion Lee Sedol</li>
                </ul>
            `,
            keyPoints: [
                "AI was officially born in 1956 at Dartmouth Conference",
                "Early AI focused on problem-solving and logic",
                "Expert systems brought AI to practical applications in 1970s-80s",
                "Machine learning and neural networks dominate modern AI",
                "Deep learning revolution started around 2010"
            ]
        },

        {
            title: "1.3 Goals and Approaches of AI",
            content: `
                <h4>The Four Main Goals of AI:</h4>
                
                <ol>
                    <li><strong>Human-like Performance:</strong> Make computers think and act like humans</li>
                    <li><strong>Rational Thinking:</strong> Make computers follow logical rules to think correctly</li>
                    <li><strong>Rational Action:</strong> Make computers take the best actions to achieve goals</li>
                    <li><strong>Expert-Level Performance:</strong> Perform specific tasks better than humans</li>
                </ol>
                
                <h4>The Four Approaches to AI:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Approach</th>
                        <th style="padding:10px; border:1px solid #ddd;">Focus</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Acting Humanly</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Behavior indistinguishable from humans</td>
                        <td style="padding:8px; border:1px solid #ddd;">Turing Test, Eliza chatbot</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Thinking Humanly</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Model human cognitive processes</td>
                        <td style="padding:8px; border:1px solid #ddd;">Cognitive science, SOAR architecture</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Thinking Rationally</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Follow laws of logic</td>
                        <td style="padding:8px; border:1px solid #ddd;">Logic-based systems, theorem provers</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Acting Rationally</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Take best actions to achieve goals</td>
                        <td style="padding:8px; border:1px solid #ddd;">Modern AI systems, intelligent agents</td>
                    </tr>
                </table>
                
                <h4>Understanding the Turing Test:</h4>
                <p>The Turing Test, proposed by Alan Turing in 1950, checks if a machine can exhibit intelligent behavior indistinguishable from a human.</p>
                
                <p><strong>How it works:</strong> A human judge communicates with a machine and another human through text. If the judge cannot reliably tell which is the machine, the machine passes the test.</p>
                
                <p><strong>Components needed to pass:</strong></p>
                <ul>
                    <li>Natural Language Processing - to communicate</li>
                    <li>Knowledge Representation - to store information</li>
                    <li>Automated Reasoning - to use stored information</li>
                    <li>Machine Learning - to adapt to new situations</li>
                </ul>
                
                <p><strong>Limitations of Turing Test:</strong></p>
                <ul>
                    <li>Tests imitation, not true intelligence</li>
                    <li>Doesn't measure understanding or consciousness</li>
                    <li>A machine could trick the judge without being truly intelligent</li>
                    <li>Doesn't account for physical interaction with the world</li>
                </ul>
            `,
            keyPoints: [
                "Four goals: human-like, rational thinking, rational action, expert performance",
                "Four approaches: acting humanly, thinking humanly, thinking rationally, acting rationally",
                "Turing Test checks if machine can imitate human behavior",
                "Modern AI favors the rational agent approach",
                "Turing Test has limitations - it tests imitation, not true intelligence"
            ]
        },

        {
            title: "1.4 Foundations of Artificial Intelligence",
            content: `
                <h4>Where Does AI Come From?</h4>
                <p>AI draws knowledge and techniques from many different fields:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Foundation</th>
                        <th style="padding:10px; border:1px solid #ddd;">What It Contributes</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Philosophy</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Logic, reasoning, mind-body problem, what is intelligence?</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Mathematics</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Computation theory, algorithms, probability, statistics</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Psychology</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">How humans think, learn, perceive, and remember</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Computer Science</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Hardware, software, programming languages, algorithms</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Linguistics</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Structure of language, grammar, meaning</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Neuroscience</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">How brain works, neural networks, learning</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Control Theory</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Feedback, homeostasis, autonomous systems</td>
                    </tr>
                </table>
                
                <p><strong>Why Multiple Foundations?</strong> Intelligence is complex. To create intelligent machines, we need to understand:</p>
                <ul>
                    <li>What intelligence is (Philosophy)</li>
                    <li>How to represent and process information (Math, CS)</li>
                    <li>How humans do it (Psychology, Neuroscience)</li>
                    <li>How to communicate (Linguistics)</li>
                    <li>How to interact with the world (Control Theory)</li>
                </ul>
            `,
            keyPoints: [
                "AI is interdisciplinary - it combines many fields",
                "Philosophy gives us questions about intelligence and reasoning",
                "Mathematics provides tools for computation and probability",
                "Psychology and neuroscience show how humans think",
                "Computer Science provides the implementation platform"
            ]
        },

        {
            title: "1.5 Applications of Artificial Intelligence",
            content: `
                <h4>Where Do We Use AI Today?</h4>
                <p>AI is everywhere around us! Here are the major application areas:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Domain</th>
                        <th style="padding:10px; border:1px solid #ddd;">Applications</th>
                        <th style="padding:10px; border:1px solid #ddd;">Examples</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Healthcare</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Diagnosis, drug discovery, medical imaging</td>
                        <td style="padding:8px; border:1px solid #ddd;">AI detects cancer in X-rays, IBM Watson helps doctors</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Finance</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Fraud detection, algorithmic trading, risk assessment</td>
                        <td style="padding:8px; border:1px solid #ddd;">Credit card fraud detection, stock market prediction</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Education</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Intelligent tutoring, personalized learning</td>
                        <td style="padding:8px; border:1px solid #ddd;">AI adapts lessons to student needs, automated grading</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Transportation</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Self-driving cars, traffic prediction</td>
                        <td style="padding:8px; border:1px solid #ddd;">Tesla Autopilot, Google Waymo, traffic flow optimization</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Entertainment</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Games, recommendation systems</td>
                        <td style="padding:8px; border:1px solid #ddd;">Netflix recommendations, YouTube suggestions, AI in video games</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Robotics</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Industrial robots, autonomous vehicles</td>
                        <td style="padding:8px; border:1px solid #ddd;">Factory assembly robots, warehouse automation (Amazon)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Natural Language</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Chatbots, translation, voice assistants</td>
                        <td style="padding:8px; border:1px solid #ddd;">Siri, Google Assistant, ChatGPT, Google Translate</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Computer Vision</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Face recognition, object detection</td>
                        <td style="padding:8px; border:1px solid #ddd;">Facebook face tagging, security cameras, autonomous cars</td>
                    </tr>
                </table>
                
                <h4>Famous AI Systems You Should Know:</h4>
                <ul>
                    <li><strong>Deep Blue (1997):</strong> IBM's chess computer that beat world champion Garry Kasparov</li>
                    <li><strong>Watson (2011):</strong> IBM's AI that won Jeopardy! against human champions</li>
                    <li><strong>AlphaGo (2016):</strong> Google DeepMind's AI that beat world Go champion Lee Sedol</li>
                    <li><strong>ChatGPT (2022):</strong> Conversational AI that can answer questions, write essays, and more</li>
                    <li><strong>MYCIN (1970s):</strong> Early expert system for medical diagnosis</li>
                </ul>
            `,
            keyPoints: [
                "AI is used in almost every industry today",
                "Healthcare, finance, education, and transportation are major application areas",
                "Entertainment uses AI for recommendations and game playing",
                "Natural language processing powers voice assistants and chatbots",
                "Computer vision enables face recognition and autonomous vehicles"
            ]
        },

        {
            title: "1.6 Intelligent Agents",
            content: `
                <h4>What is an Intelligent Agent?</h4>
                <p>An <strong>intelligent agent</strong> is anything that perceives its environment through sensors and acts upon that environment through actuators to achieve goals.</p>
                
                <p><strong>Simple Analogy:</strong> Think of a thermostat:</p>
                <ul>
                    <li><strong>Sensors:</strong> Temperature sensor (perceives room temperature)</li>
                    <li><strong>Actuators:</strong> Heater/AC (acts to change temperature)</li>
                    <li><strong>Goal:</strong> Maintain desired temperature</li>
                </ul>
                
                <h4>Components of an Intelligent Agent:</h4>
                <ul>
                    <li><strong>Sensors:</strong> Input devices (cameras, microphones, keyboards, temperature sensors)</li>
                    <li><strong>Actuators:</strong> Output devices (wheels, arms, speakers, displays)</li>
                    <li><strong>Agent Function:</strong> Maps percept sequence to actions (the "brain")</li>
                    <li><strong>Agent Program:</strong> Implementation of the agent function in code</li>
                </ul>
                
                <h4>PEAS Description - How to Design an Agent:</h4>
                <p>To design any intelligent agent, we must specify the PEAS:</p>
                
                <ul>
                    <li><strong>P</strong>erformance: How do we measure success?</li>
                    <li><strong>E</strong>nvironment: Where does the agent operate?</li>
                    <li><strong>A</strong>ctuators: What can the agent do?</li>
                    <li><strong>S</strong>ensors: What can the agent perceive?</li>
                </ul>
                
                <h4>Examples of PEAS:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Agent</th>
                        <th style="padding:10px; border:1px solid #ddd;">Performance</th>
                        <th style="padding:10px; border:1px solid #ddd;">Environment</th>
                        <th style="padding:10px; border:1px solid #ddd;">Actuators</th>
                        <th style="padding:10px; border:1px solid #ddd;">Sensors</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Self-driving car</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Safety, speed, comfort</td>
                        <td style="padding:8px; border:1px solid #ddd;">Roads, traffic, weather</td>
                        <td style="padding:8px; border:1px solid #ddd;">Steering, brakes, accelerator</td>
                        <td style="padding:8px; border:1px solid #ddd;">Cameras, radar, GPS</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Medical diagnosis</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Accuracy, speed</td>
                        <td style="padding:8px; border:1px solid #ddd;">Patient, hospital</td>
                        <td style="padding:8px; border:1px solid #ddd;">Display, reports</td>
                        <td style="padding:8px; border:1px solid #ddd;">Symptoms, test results</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Chatbot</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Helpfulness, accuracy</td>
                        <td style="padding:8px; border:1px solid #ddd;">Internet, users</td>
                        <td style="padding:8px; border:1px solid #ddd;">Text responses</td>
                        <td style="padding:8px; border:1px solid #ddd;">User input text</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "An intelligent agent perceives and acts to achieve goals",
                "Sensors take input, actuators produce output",
                "PEAS framework helps design agents: Performance, Environment, Actuators, Sensors",
                "Agents can be simple (thermostat) or complex (self-driving car)"
            ]
        },

        {
            title: "1.7 Types of Intelligent Agents",
            content: `
                <h4>Five Types of Intelligent Agents:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Agent Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>1. Simple Reflex Agent</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Acts based ONLY on current percept, ignores history. Uses condition-action rules (if-then).</td>
                        <td style="padding:8px; border:1px solid #ddd;">Thermostat: "If temperature < set point, turn on heater"</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>2. Model-Based Reflex Agent</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Maintains internal state (model) to track parts of the world not visible now. Updates state based on percept history.</td>
                        <td style="padding:8px; border:1px solid #ddd;">Car's cruise control: knows current speed, acceleration, road conditions</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>3. Goal-Based Agent</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Acts to achieve goals. Considers future consequences. More flexible than reflex agents.</td>
                        <td style="padding:8px; border:1px solid #ddd;">GPS navigation: "Find route to destination"</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>4. Utility-Based Agent</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Maximizes happiness/utility. When multiple ways to achieve goal, chooses the best one. Handles trade-offs.</td>
                        <td style="padding:8px; border:1px solid #ddd;">Investment advisor: chooses investments to maximize returns while minimizing risk</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>5. Learning Agent</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Improves performance over time through learning. Has learning element, critic, and performance element.</td>
                        <td style="padding:8px; border:1px solid #ddd;">Recommendation system: learns your preferences over time</td>
                    </tr>
                </table>
                
                <h4>Comparison of Agent Types:</h4>
                <ul>
                    <li><strong>Simple reflex:</strong> Fast but limited - only reacts to current situation</li>
                    <li><strong>Model-based:</strong> Remembers what it can't see - better awareness</li>
                    <li><strong>Goal-based:</strong> Plans for the future - more flexible</li>
                    <li><strong>Utility-based:</strong> Makes optimal choices - handles trade-offs</li>
                    <li><strong>Learning:</strong> Gets better with experience - adapts</li>
                </ul>
                
                <p><strong>Important Note:</strong> More complex agents (goal-based, utility-based) are more intelligent but also harder to design.</p>
            `,
            keyPoints: [
                "Simple reflex agents use condition-action rules",
                "Model-based agents maintain internal state",
                "Goal-based agents plan to achieve goals",
                "Utility-based agents maximize happiness, handle trade-offs",
                "Learning agents improve with experience",
                "More complex agents are more flexible and intelligent"
            ]
        },

        {
            title: "1.8 AI's Role in Understanding Human Intelligence",
            content: `
                <h4>How Does AI Help Us Understand Human Intelligence?</h4>
                
                <p><strong>This is a key topic from the blueprint (1 question on this area).</strong></p>
                
                <h4>AI Contributes to Understanding Human Intelligence By:</h4>
                
                <ol>
                    <li><strong>Analyzing Large Datasets:</strong> AI processes vast amounts of data about human behavior to identify patterns and correlations that reveal how we think, learn, and make decisions.</li>
                    
                    <li><strong>Modeling Cognitive Processes:</strong> AI creates computational models that simulate human thinking, helping us test theories about how the mind works.</li>
                    
                    <li><strong>Testing Theories of Intelligence:</strong> By implementing theories as computer programs, we can see if they actually produce intelligent behavior.</li>
                    
                    <li><strong>Revealing Underlying Patterns:</strong> Machine learning algorithms can find patterns in human behavior that we might not notice ourselves.</li>
                    
                    <li><strong>Understanding Perception:</strong> Computer vision and speech recognition models help us understand how humans see and hear.</li>
                </ol>
                
                <h4>Examples of AI Helping Understand Intelligence:</h4>
                
                <ul>
                    <li><strong>Visual perception:</strong> AI models of the visual cortex help us understand how humans recognize objects</li>
                    <li><strong>Language understanding:</strong> NLP models reveal how humans process and produce language</li>
                    <li><strong>Decision-making:</strong> Reinforcement learning models show how humans learn from rewards and punishments</li>
                    <li><strong>Memory:</strong> Neural network models help explain how humans store and recall information</li>
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
                
                <h4>Key Point for Exam:</h4>
                <p>AI contributes to gaining insight into human intelligence by <strong>analyzing large datasets to uncover patterns and correlations</strong>. This helps researchers understand how humans think, learn, and behave.</p>
            `,
            keyPoints: [
                "AI analyzes large datasets to find patterns in human behavior",
                "Computational models help test theories of intelligence",
                "AI reveals patterns humans might miss",
                "AI does NOT replicate human cognition exactly",
                "AI provides insights through data analysis, not just rules"
            ]
        }
    ],

    summary: `
        <h3>Chapter 1 Summary - Key Takeaways:</h3>
        <ul>
            <li>AI is the science of making intelligent machines, coined by John McCarthy in 1956</li>
            <li>Four goals: human-like performance, rational thinking, rational action, expert performance</li>
            <li>Four approaches: acting humanly, thinking humanly, thinking rationally, acting rationally</li>
            <li>Turing Test checks if machine can imitate human behavior (has limitations)</li>
            <li>AI draws from philosophy, math, psychology, CS, linguistics, neuroscience</li>
            <li>Intelligent agents perceive environment and act to achieve goals (PEAS framework)</li>
            <li>Five agent types: simple reflex, model-based, goal-based, utility-based, learning</li>
            <li>AI contributes to understanding human intelligence by analyzing large datasets</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "Define Artificial Intelligence according to John McCarthy.",
            answer: "The science and engineering of making intelligent machines."
        },
        {
            question: "List the four main goals of AI.",
            answer: "Human-like performance, rational thinking, rational action, and expert-level performance."
        },
        {
            question: "What is the Turing Test and what are its limitations?",
            answer: "The Turing Test checks if a machine can exhibit intelligent behavior indistinguishable from a human. Limitations: tests imitation not true intelligence, doesn't measure understanding, can be tricked."
        },
        {
            question: "How does AI contribute to understanding human intelligence?",
            answer: "AI analyzes large datasets to uncover patterns and correlations in human behavior, providing insights into cognition and perception."
        },
        {
            question: "What is an intelligent agent? Explain with PEAS framework.",
            answer: "An intelligent agent perceives its environment through sensors and acts through actuators. PEAS: Performance measure, Environment, Actuators, Sensors."
        },
        {
            question: "List and explain the five types of intelligent agents.",
            answer: "1. Simple reflex (condition-action rules), 2. Model-based (internal state), 3. Goal-based (achieve goals), 4. Utility-based (maximize happiness), 5. Learning (improve with experience)."
        }
    ],

    quickTips: [
        "Remember John McCarthy coined 'AI' at Dartmouth 1956",
        "Turing Test = imitation, not true intelligence",
        "PEAS helps design any AI agent",
        "More complex agents = more intelligent but harder to design",
        "AI understands humans through DATA ANALYSIS, not replication"
    ],

    commonMistakes: [
        "❌ Thinking AI must exactly replicate human thinking - AI can be rational without being human-like",
        "❌ Confusing AI with machine learning only - ML is a subset of AI",
        "❌ Believing Turing Test measures true intelligence - it measures imitation",
        "❌ Thinking all agents need to learn - simple reflex agents don't learn",
        "❌ Assuming AI disregards human cognition - AI actually helps understand it"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 1:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>2 questions</strong> distributed as:</p>
        <ul>
            <li><strong>1 Remember question:</strong> Basic definitions, history, agent types, PEAS framework</li>
            <li><strong>1 Understand question:</strong> AI's role in understanding intelligence, applications, agent behavior</li>
        </ul>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li>Definition and goals of AI</li>
            <li>Intelligent agents and their types</li>
            <li>How AI helps understand human intelligence</li>
            <li>Applications of AI</li>
            <li>PEAS framework</li>
        </ol>
    `
};