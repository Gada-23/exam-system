// ===============================
// FOCUS AREA: ARTIFICIAL INTELLIGENCE - CHAPTER 4
// Machine Learning
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaAIChapter4 = {
    title: "Chapter 4: Machine Learning",
    
    // Blueprint alignment: 1 question (Evaluate)
    blueprint: {
        totalQuestions: 1,
        cognitiveLevels: {
            evaluate: 1
        },
        topics: [
            "Machine learning techniques and approaches",
            "Reinforcement learning and its objectives",
            "Evaluation of learning techniques",
            "Applicability to different tasks"
        ]
    },

    learningObjectives: [
        "Understand the fundamental concepts of machine learning",
        "Differentiate between supervised, unsupervised, and reinforcement learning",
        "Explain the primary objective of reinforcement learning",
        "Evaluate the strengths and weaknesses of different learning techniques",
        "Determine the applicability of learning methods to various tasks"
    ],

    sections: [
        {
            title: "4.1 Introduction to Machine Learning",
            content: `
                <h4>What is Machine Learning?</h4>
                <p>Machine Learning (ML) is a subset of artificial intelligence that gives computers the ability to learn without being explicitly programmed. It focuses on developing algorithms that can learn from and make predictions or decisions based on data.</p>
                
                <p><strong>Simple Definition:</strong> Machine learning is the process of teaching computers to learn from experience, just like humans do!</p>
                
                <h4>Why Machine Learning?</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Reason</th>
                        <th style="padding:10px; border:1px solid #ddd;">Explanation</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Complex tasks</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Some tasks are too complex to program manually (like recognizing faces)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Adaptation</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Systems can adapt to new data and changing environments</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Insights</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Discover patterns and relationships humans might miss</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Scale</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Handle and process massive amounts of data efficiently</td>
                    </tr>
                </table>
                
                <h4>The Learning Process:</h4>
                <ol>
                    <li><strong>Data Collection:</strong> Gather relevant data for the task</li>
                    <li><strong>Data Preparation:</strong> Clean and format the data</li>
                    <li><strong>Model Selection:</strong> Choose appropriate algorithm</li>
                    <li><strong>Training:</strong> Feed data to the model to learn patterns</li>
                    <li><strong>Evaluation:</strong> Test how well the model performs</li>
                    <li><strong>Prediction/Decision:</strong> Use the trained model on new data</li>
                </ol>
                
                <h4>Types of Machine Learning:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Supervised Learning</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Learn from labeled data (input-output pairs)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Spam detection, house price prediction</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Unsupervised Learning</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Find patterns in unlabeled data</td>
                        <td style="padding:8px; border:1px solid #ddd;">Customer segmentation, clustering</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Reinforcement Learning</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Learn from rewards and punishments through interaction</td>
                        <td style="padding:8px; border:1px solid #ddd;">Game playing, robotics</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Semi-supervised Learning</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Mix of labeled and unlabeled data</td>
                        <td style="padding:8px; border:1px solid #ddd;">Web page classification</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Machine learning enables computers to learn from data without explicit programming",
                "ML is used for complex tasks, adaptation, discovering insights, and handling large data",
                "Three main types: supervised, unsupervised, and reinforcement learning",
                "Learning process involves data collection, training, evaluation, and prediction"
            ]
        },

        {
            title: "4.2 Supervised Learning",
            content: `
                <h4>What is Supervised Learning?</h4>
                <p>Supervised learning is like learning with a teacher. The algorithm learns from labeled training data, where each example has an input and a known output. The goal is to learn a function that maps inputs to outputs correctly.</p>
                
                <p><strong>Analogy:</strong> Like a student learning with an answer key. You practice with problems that have solutions, and you learn to solve new problems correctly.</p>
                
                <h4>Components of Supervised Learning:</h4>
                <ul>
                    <li><strong>Features (X):</strong> Input attributes (e.g., house size, number of bedrooms)</li>
                    <li><strong>Labels (y):</strong> Output values (e.g., house price)</li>
                    <li><strong>Training data:</strong> Pairs (X, y) used for learning</li>
                    <li><strong>Model:</strong> The learned function f(X) ≈ y</li>
                </ul>
                
                <h4>Two Main Types of Supervised Learning:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Output</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                        <th style="padding:10px; border:1px solid #ddd;">Algorithms</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Classification</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Discrete categories</td>
                        <td style="padding:8px; border:1px solid #ddd;">Spam detection (spam/not spam)<br>Image recognition (cat/dog)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Decision Trees, SVM, Naive Bayes, Neural Networks</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Regression</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Continuous value</td>
                        <td style="padding:8px; border:1px solid #ddd;">House price prediction<br>Temperature forecasting</td>
                        <td style="padding:8px; border:1px solid #ddd;">Linear Regression, Neural Networks, Random Forest</td>
                    </tr>
                </table>
                
                <h4>Common Supervised Learning Algorithms:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Algorithm</th>
                        <th style="padding:10px; border:1px solid #ddd;">How It Works</th>
                        <th style="padding:10px; border:1px solid #ddd;">Best For</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Decision Trees</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Tree-like model of decisions; internal nodes test features, leaves give predictions</td>
                        <td style="padding:8px; border:1px solid #ddd;">Interpretable problems, categorical data</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Support Vector Machines (SVM)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Find hyperplane that best separates classes with maximum margin</td>
                        <td style="padding:8px; border:1px solid #ddd;">High-dimensional data, clear margin problems</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Neural Networks</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Layers of interconnected neurons that learn complex patterns</td>
                        <td style="padding:8px; border:1px solid #ddd;">Complex patterns, large datasets, image/speech</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>k-Nearest Neighbors (k-NN)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Classify based on majority vote of k nearest training examples</td>
                        <td style="padding:8px; border:1px solid #ddd;">Simple problems, small datasets</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Naive Bayes</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Based on Bayes' theorem with assumption of feature independence</td>
                        <td style="padding:8px; border:1px solid #ddd;">Text classification, spam filtering</td>
                    </tr>
                </table>
                
                <h4>Supervised Learning Example:</h4>
                <p><strong>Problem:</strong> Predict whether an email is spam or not.</p>
                <ul>
                    <li><strong>Features:</strong> Words in email, sender, subject, etc.</li>
                    <li><strong>Labels:</strong> "spam" or "not spam"</li>
                    <li><strong>Training:</strong> Feed thousands of labeled emails to algorithm</li>
                    <li><strong>Result:</strong> Model learns to classify new emails</li>
                </ul>
            `,
            keyPoints: [
                "Supervised learning uses labeled data (input-output pairs)",
                "Classification predicts categories (discrete outputs)",
                "Regression predicts continuous values",
                "Common algorithms: Decision Trees, SVM, Neural Networks, k-NN, Naive Bayes",
                "Requires labeled training data, which can be expensive to create"
            ]
        },

        {
            title: "4.3 Unsupervised Learning",
            content: `
                <h4>What is Unsupervised Learning?</h4>
                <p>Unsupervised learning finds hidden patterns or structures in unlabeled data. There are no correct answers provided; the algorithm must discover interesting patterns on its own.</p>
                
                <p><strong>Analogy:</strong> Like giving a child a pile of different objects and letting them group similar ones together without being told what the groups should be.</p>
                
                <h4>Two Main Types of Unsupervised Learning:</h4>
                
                <h4>4.3.1 Clustering</h4>
                
                <p><strong>Goal:</strong> Group similar items together into clusters.</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Algorithm</th>
                        <th style="padding:10px; border:1px solid #ddd;">How It Works</th>
                        <th style="padding:10px; border:1px solid #ddd;">Applications</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>k-Means</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Partition data into k clusters based on centroids; iteratively assign points to nearest centroid and update centroids</td>
                        <td style="padding:8px; border:1px solid #ddd;">Customer segmentation, image compression, document clustering</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Hierarchical Clustering</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Build tree of clusters (dendrogram) by repeatedly merging or splitting</td>
                        <td style="padding:8px; border:1px solid #ddd;">Biology (taxonomy), social network analysis</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>DBSCAN</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Density-based clustering; finds core samples and expands clusters from them</td>
                        <td style="padding:8px; border:1px solid #ddd;">Geospatial data, anomaly detection</td>
                    </tr>
                </table>
                
                <h4>4.3.2 Association Rule Learning</h4>
                
                <p><strong>Goal:</strong> Find relationships between variables in large datasets.</p>
                
                <p><strong>Example - Market Basket Analysis:</strong></p>
                <ul>
                    <li><strong>Rule:</strong> {bread, milk} → {eggs}</li>
                    <li><strong>Meaning:</strong> Customers who buy bread and milk are likely to also buy eggs</li>
                    <li><strong>Support:</strong> How frequently the items appear together</li>
                    <li><strong>Confidence:</strong> How reliable the rule is</li>
                </ul>
                
                <p><strong>Apriori Algorithm:</strong> The classic algorithm for finding frequent itemsets and association rules.</p>
                
                <h4>Applications of Unsupervised Learning:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Application</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Customer Segmentation</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Group customers by purchasing behavior for targeted marketing</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Image Compression</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Reduce colors in an image by clustering similar colors</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Anomaly Detection</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Find unusual patterns (fraud detection, network intrusions)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Document Clustering</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Group similar news articles or research papers</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Recommendation Systems</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Find patterns in user behavior to suggest products</td>
                    </tr>
                </table>
                
                <h4>Unsupervised Learning Example:</h4>
                <p><strong>Problem:</strong> Segment customers for a retail store.</p>
                <ul>
                    <li><strong>Data:</strong> Customer purchase history, age, location, etc. (no labels)</li>
                    <li><strong>Algorithm:</strong> k-Means clustering</li>
                    <li><strong>Result:</strong> Groups like "budget shoppers," "luxury buyers," "frequent buyers"</li>
                    <li><strong>Use:</strong> Target marketing campaigns to each group</li>
                </ul>
            `,
            keyPoints: [
                "Unsupervised learning finds patterns in unlabeled data",
                "Clustering groups similar items together (k-Means, hierarchical)",
                "Association learning finds relationships between items (market basket analysis)",
                "No labeled data required, but results can be hard to validate",
                "Applications: customer segmentation, anomaly detection, recommendation systems"
            ]
        },

        {
            title: "4.4 Reinforcement Learning",
            content: `
                <h4>What is Reinforcement Learning?</h4>
                <p>Reinforcement Learning (RL) is a type of machine learning where an agent learns to make decisions by interacting with an environment. The agent receives rewards or penalties for its actions and learns to maximize cumulative reward over time.</p>
                
                <p><strong>Analogy:</strong> Like training a dog. When the dog does something good, you give it a treat (positive reward). When it does something bad, you say "no" (negative reward). The dog learns to perform actions that get treats.</p>
                
                <div style="background-color:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🎯 PRIMARY OBJECTIVE OF REINFORCEMENT LEARNING:</strong></p>
                    <p style="font-size:18px; font-weight:bold; color:#2772a0;">To maximize cumulative reward through sequential decision-making</p>
                </div>
                
                <h4>Components of Reinforcement Learning:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Component</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Analogy</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Agent</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">The learner/decision maker</td>
                        <td style="padding:8px; border:1px solid #ddd;">The dog</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Environment</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">The world the agent interacts with</td>
                        <td style="padding:8px; border:1px solid #ddd;">The house where the dog lives</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>State</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Current situation of the agent</td>
                        <td style="padding:8px; border:1px solid #ddd;">Dog's location, what it sees</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Action</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">What the agent can do</td>
                        <td style="padding:8px; border:1px solid #ddd;">Sit, stay, fetch, bark</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Reward</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Feedback from environment (positive/negative)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Treat for good behavior, "no" for bad</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Policy</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Strategy for choosing actions</td>
                        <td style="padding:8px; border:1px solid #ddd;">Dog's understanding of what to do</td>
                    </tr>
                </table>
                
                <h4>The Reinforcement Learning Loop:</h4>
                <ol>
                    <li>Agent observes current state of environment</li>
                    <li>Agent takes an action based on its policy</li>
                    <li>Environment transitions to a new state</li>
                    <li>Agent receives a reward (positive or negative)</li>
                    <li>Agent updates its policy based on the reward</li>
                    <li>Repeat!</li>
                </ol>
                
                <h4>Exploration vs. Exploitation - The Key Challenge</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Strategy</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Analogy</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Exploitation</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Use known good actions to get rewards</td>
                        <td style="padding:8px; border:1px solid #ddd;">Going to your favorite restaurant</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Exploration</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Try new actions to discover better rewards</td>
                        <td style="padding:8px; border:1px solid #ddd;">Trying a new restaurant you've never been to</td>
                    </tr>
                </table>
                
                <p><strong>The Challenge:</strong> If you only exploit, you might miss better options. If you only explore, you never use what you've learned. The agent must balance both!</p>
                
                <h4>Reinforcement Learning is also called...</h4>
                
                <div style="background-color:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🔍 EXPLORATORY LEARNING:</strong></p>
                    <p>Reinforcement learning is also called <strong>exploratory learning</strong> because the agent must explore its environment, try different actions, and discover the consequences of those actions through trial and error.</p>
                </div>
                
                <h4>Key RL Algorithms:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Algorithm</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Q-Learning</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Model-free algorithm that learns action values (Q-values) for each state-action pair</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Policy Gradient</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Directly optimize the policy (strategy) without using value functions</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Deep Q-Network (DQN)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Combines Q-learning with deep neural networks (used in AlphaGo)</td>
                    </tr>
                </table>
                
                <h4>Real-World Applications of Reinforcement Learning:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Application</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Game Playing</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">AlphaGo, AlphaZero, OpenAI Five (Dota 2)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Robotics</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Robot learning to walk, grasp objects, navigate</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Autonomous Vehicles</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Self-driving cars learning to navigate traffic</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Resource Management</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Data center cooling optimization, traffic light control</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Finance</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Algorithmic trading, portfolio management</td>
                    </tr>
                </table>
                
                <h4>Reinforcement Learning Example:</h4>
                <p><strong>Problem:</strong> Teach a computer to play chess.</p>
                <ul>
                    <li><strong>Agent:</strong> The chess-playing program</li>
                    <li><strong>Environment:</strong> The chess board and rules</li>
                    <li><strong>State:</strong> Current positions of all pieces</li>
                    <li><strong>Actions:</strong> Possible moves</li>
                    <li><strong>Reward:</strong> +1 for winning, -1 for losing, 0 for other moves</li>
                    <li><strong>Learning:</strong> Program plays millions of games, learning which moves lead to wins</li>
                </ul>
            `,
            keyPoints: [
                "Reinforcement learning: agent learns from rewards/punishments through interaction",
                "PRIMARY OBJECTIVE: Maximize cumulative reward through sequential decision-making",
                "Components: agent, environment, state, action, reward, policy",
                "Exploration vs exploitation trade-off: try new actions vs use known good ones",
                "RL is also called exploratory learning because agent must explore to learn",
                "Applications: game playing, robotics, autonomous vehicles"
            ]
        },

        {
            title: "4.5 Evaluation of Learning Techniques (Blueprint Focus)",
            content: `
                <h4>Blueprint Focus: Evaluate Learning Techniques</h4>
                <p>According to the blueprint, you need to <strong>evaluate</strong> the strengths and weaknesses of learning techniques and their applicability to different tasks.</p>
                
                <h4>4.5.1 Strengths and Weaknesses Comparison</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Technique</th>
                        <th style="padding:10px; border:1px solid #ddd;">Strengths</th>
                        <th style="padding:10px; border:1px solid #ddd;">Weaknesses</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Supervised Learning</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">
                            ✓ High accuracy with good labeled data<br>
                            ✓ Clear evaluation metrics<br>
                            ✓ Interpretable models (decision trees)<br>
                            ✓ Well-understood algorithms
                        </td>
                        <td style="padding:8px; border:1px solid #ddd;">
                            ✗ Requires large amounts of labeled data<br>
                            ✗ Labeling data is expensive and time-consuming<br>
                            ✗ May overfit (memorize instead of learn)<br>
                            ✗ Poor performance on unseen data types
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Unsupervised Learning</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">
                            ✓ No labels needed (cheaper)<br>
                            ✓ Discovers hidden patterns<br>
                            ✓ Can work with any data<br>
                            ✓ Good for exploration
                        </td>
                        <td style="padding:8px; border:1px solid #ddd;">
                            ✗ Results hard to validate<br>
                            ✗ No clear evaluation metrics<br>
                            ✗ May find patterns that aren't meaningful<br>
                            ✗ Number of clusters often subjective
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Reinforcement Learning</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">
                            ✓ Learns from interaction<br>
                            ✓ Handles sequential decisions<br>
                            ✓ Can discover novel strategies<br>
                            ✓ Works in dynamic environments
                        </td>
                        <td style="padding:8px; border:1px solid #ddd;">
                            ✗ Needs many trials (slow)<br>
                            ✗ Reward design is difficult<br>
                            ✗ Exploration/exploitation trade-off hard<br>
                            ✗ Can be unstable during training
                        </td>
                    </tr>
                </table>
                
                <h4>4.5.2 Applicability to Different Tasks</h4>
                
                <p>Different tasks require different learning approaches. Here's how to choose:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Task Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Best Technique</th>
                        <th style="padding:10px; border:1px solid #ddd;">Why</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Spam Detection</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Supervised (Classification)</td>
                        <td style="padding:8px; border:1px solid #ddd;">We have labeled examples of spam/not spam emails</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>House Price Prediction</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Supervised (Regression)</td>
                        <td style="padding:8px; border:1px solid #ddd;">We have historical data with prices</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Customer Segmentation</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Unsupervised (Clustering)</td>
                        <td style="padding:8px; border:1px solid #ddd;">We don't know the groups in advance; want to discover them</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Market Basket Analysis</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Unsupervised (Association)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Find relationships between products without pre-labeled categories</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Game Playing (Chess, Go)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Reinforcement Learning</td>
                        <td style="padding:8px; border:1px solid #ddd;">Sequential decisions, delayed rewards, need to explore strategies</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Robot Navigation</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Reinforcement Learning</td>
                        <td style="padding:8px; border:1px solid #ddd;">Agent interacts with environment, learns from consequences</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Image Recognition</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Supervised (Deep Learning)</td>
                        <td style="padding:8px; border:1px solid #ddd;">We have labeled images (cat/dog/car)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Anomaly Detection</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Unsupervised or Semi-supervised</td>
                        <td style="padding:8px; border:1px solid #ddd;">Fraudulent patterns are unknown; find what doesn't fit normal</td>
                    </tr>
                </table>
                
                <h4>4.5.3 Evaluation Criteria for Learning Techniques</h4>
                
                <p>When evaluating which technique to use, consider:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Criteria</th>
                        <th style="padding:10px; border:1px solid #ddd;">Questions to Ask</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Data Availability</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Do we have labeled data? How much? Is it expensive to label?</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Problem Type</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Is it classification, regression, clustering, or sequential decision-making?</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Interpretability</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Do we need to understand why decisions are made?</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Accuracy Requirements</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">How accurate does the model need to be?</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Training Time</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">How long can we wait for training?</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Deployment Environment</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Will the model need to adapt to changing conditions?</td>
                    </tr>
                </table>
                
                <h4>4.5.4 Decision Framework</h4>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
START
  |
  v
Do you have labeled data?
  |
  +-- YES → Is it categorical or continuous?
  |         |
  |         +-- Categorical → Supervised (Classification)
  |         |
  |         +-- Continuous → Supervised (Regression)
  |
  +-- NO → Do you want to find groups or relationships?
            |
            +-- Find groups → Unsupervised (Clustering)
            |
            +-- Find relationships → Unsupervised (Association)
            |
            +-- Agent interacting with environment → Reinforcement Learning
                </pre>
            `,
            keyPoints: [
                "Supervised learning: best when labeled data is available",
                "Unsupervised learning: best for discovering patterns without labels",
                "Reinforcement learning: best for sequential decisions with delayed rewards",
                "Choice depends on data availability, problem type, and requirements",
                "Evaluate based on accuracy, interpretability, training time, and adaptability"
            ]
        },

        {
            title: "4.6 Deep Dive: Reinforcement Learning Objective",
            content: `
                <h4>Blueprint Focus: Primary Objective of Reinforcement Learning</h4>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:15px 0; border-left:5px solid #2772a0;">
                    <p style="font-size:20px; font-weight:bold; margin-bottom:10px;">📌 PRIMARY OBJECTIVE:</p>
                    <p style="font-size:18px;">"To maximize cumulative reward through sequential decision-making"</p>
                </div>
                
                <h4>Understanding Each Part:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Component</th>
                        <th style="padding:10px; border:1px solid #ddd;">Meaning</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example (Chess)</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Maximize</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Make as large as possible</td>
                        <td style="padding:8px; border:1px solid #ddd;">Win as many games as possible</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Cumulative Reward</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Sum of all rewards over time, not just immediate reward</td>
                        <td style="padding:8px; border:1px solid #ddd;">Short-term loss might lead to long-term win</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Sequential Decision-Making</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Each decision affects future options and rewards</td>
                        <td style="padding:8px; border:1px solid #ddd;">Each chess move affects future possible moves</td>
                    </tr>
                </table>
                
                <h4>Why "Cumulative" Matters:</h4>
                <p>In reinforcement learning, the agent doesn't just care about immediate reward. It considers the total reward over the entire sequence of actions. Sometimes you take a short-term loss for a long-term gain!</p>
                
                <p><strong>Example:</strong> In chess, you might sacrifice a queen (negative immediate reward) to set up a checkmate (big positive reward later).</p>
                
                <h4>Why "Sequential" Matters:</h4>
                <p>Decisions are not independent. Each action changes the state and affects future possibilities. This is what makes RL different from other types of learning.</p>
                
                <h4>Comparison with Other Learning Types:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Aspect</th>
                        <th style="padding:10px; border:1px solid #ddd;">Supervised</th>
                        <th style="padding:10px; border:1px solid #ddd;">Unsupervised</th>
                        <th style="padding:10px; border:1px solid #ddd;">Reinforcement</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Feedback</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Immediate (correct answer)</td>
                        <td style="padding:8px; border:1px solid #ddd;">No feedback</td>
                        <td style="padding:8px; border:1px solid #ddd;">Delayed reward</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Decision Type</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Single prediction</td>
                        <td style="padding:8px; border:1px solid #ddd;">Pattern discovery</td>
                        <td style="padding:8px; border:1px solid #ddd;">Sequential decisions</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Goal</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Minimize error</td>
                        <td style="padding:8px; border:1px solid #ddd;">Find structure</td>
                        <td style="padding:8px; border:1px solid #ddd;">Maximize cumulative reward</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "RL objective: maximize cumulative reward through sequential decisions",
                "Cumulative means total over time, not just immediate",
                "Sequential means each decision affects future possibilities",
                "RL considers long-term consequences, not short-term gains"
            ]
        }
    ],

    summary: `
        <h3>Chapter 4 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Machine Learning:</strong> Computers learn from data without explicit programming</li>
            <li><strong>Supervised Learning:</strong> Uses labeled data - Classification (categories) and Regression (values)</li>
            <li><strong>Unsupervised Learning:</strong> Finds patterns in unlabeled data - Clustering and Association</li>
            <li><strong>Reinforcement Learning:</strong> Agent learns from rewards/punishments through interaction</li>
            <li><strong>PRIMARY OBJECTIVE OF RL:</strong> To maximize cumulative reward through sequential decision-making</li>
            <li><strong>Exploration vs Exploitation:</strong> Trade-off between trying new actions and using known good ones</li>
            <li><strong>RL is also called Exploratory Learning</strong> because agent must explore to learn</li>
            <li><strong>Evaluation:</strong> Choose technique based on data availability, problem type, and requirements</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What are the three main types of machine learning?",
            answer: "Supervised learning (labeled data), Unsupervised learning (unlabeled data), and Reinforcement learning (rewards/punishments)."
        },
        {
            question: "What is the primary objective of reinforcement learning?",
            answer: "To maximize cumulative reward through sequential decision-making."
        },
        {
            question: "Why is reinforcement learning also called exploratory learning?",
            answer: "Because the agent must explore its environment, try different actions, and discover consequences through trial and error."
        },
        {
            question: "Differentiate between supervised and unsupervised learning with examples.",
            answer: "Supervised uses labeled data (spam detection with labeled emails). Unsupervised finds patterns in unlabeled data (customer segmentation without pre-defined groups)."
        },
        {
            question: "What is the exploration vs exploitation trade-off in reinforcement learning?",
            answer: "Exploitation uses known good actions for reward. Exploration tries new actions to discover better rewards. Both are necessary for optimal learning."
        },
        {
            question: "Which machine learning technique would you use for teaching a robot to walk and why?",
            answer: "Reinforcement learning, because it involves sequential decisions, interaction with environment, and rewards for successful steps."
        },
        {
            question: "Compare the strengths and weaknesses of supervised and unsupervised learning.",
            answer: "Supervised: accurate with good data but needs labels. Unsupervised: no labels needed but results hard to validate."
        },
        {
            question: "What does 'cumulative reward' mean in reinforcement learning?",
            answer: "The total sum of rewards over time, not just immediate reward. The agent considers long-term consequences."
        }
    ],

    quickTips: [
        "RL objective = maximize cumulative reward through sequential decisions",
        "Supervised = labeled data (teacher)",
        "Unsupervised = unlabeled data (discovery)",
        "Reinforcement = rewards/punishments (trial and error)",
        "Exploration = trying new things",
        "Exploitation = using what works",
        "RL is also called exploratory learning",
        "Classification = categories, Regression = values"
    ],

    commonMistakes: [
        "❌ Thinking supervised and unsupervised are the same - supervised needs labels, unsupervised doesn't",
        "❌ Confusing RL's objective - it's cumulative reward, not immediate reward",
        "❌ Forgetting that RL involves sequential decisions - not one-time predictions",
        "❌ Believing exploration is always bad - it's necessary for learning",
        "❌ Using supervised learning when no labels exist - use unsupervised instead",
        "❌ Thinking all problems need the same ML approach - choose based on task"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 4:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>1 question</strong> at the <strong>Evaluate</strong> level.</p>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>Reinforcement Learning Objective:</strong> "Maximize cumulative reward through sequential decision-making" - MEMORIZE THIS!</li>
            <li><strong>Evaluation of techniques:</strong> Compare strengths/weaknesses of supervised, unsupervised, and reinforcement learning</li>
            <li><strong>Applicability:</strong> Which technique for which task? (See applicability table)</li>
            <li><strong>Exploration vs Exploitation:</strong> Understand the trade-off</li>
        </ol>
        
        <h4>What "Evaluate" Means:</h4>
        <p>You need to be able to:</p>
        <ul>
            <li>Judge the appropriateness of different techniques for different tasks</li>
            <li>Compare and contrast learning methods</li>
            <li>Assess strengths and weaknesses</li>
            <li>Make recommendations based on problem requirements</li>
        </ul>
        
        <h4>Practice Evaluation Questions:</h4>
        <ul>
            <li>Evaluate which machine learning technique is most appropriate for a self-driving car and why.</li>
            <li>Compare supervised and unsupervised learning - when would you choose each?</li>
            <li>Assess the strengths and weaknesses of reinforcement learning for game playing.</li>
            <li>Why is cumulative reward important in reinforcement learning? Evaluate its significance.</li>
        </ul>
        
        <h4>Key Definition to Remember:</h4>
        <p><strong>Reinforcement Learning:</strong> A type of machine learning where an agent learns to make decisions by interacting with an environment, receiving rewards or penalties, with the objective of maximizing cumulative reward through sequential decision-making.</p>
    `
};