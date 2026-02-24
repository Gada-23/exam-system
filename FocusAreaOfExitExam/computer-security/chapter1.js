// ===============================
// FOCUS AREA: COMPUTER SECURITY - CHAPTER 1
// Introduction to Computer Security
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaComputerSecurityChapter1 = {
    title: "Chapter 1: Introduction to Computer Security",
    
    // Blueprint alignment: 1 question (Understand)
    blueprint: {
        totalQuestions: 1,
        cognitiveLevels: {
            understand: 1
        },
        topics: [
            "Basic concepts in computer security",
            "CIA Triad (Confidentiality, Integrity, Availability)",
            "Security threats and vulnerabilities",
            "Security mechanisms and controls"
        ]
    },

    learningObjectives: [
        "Understand the fundamental concepts of computer security",
        "Explain the CIA Triad and its importance",
        "Identify different types of security threats and attacks",
        "Understand security mechanisms and controls",
        "Differentiate between vulnerabilities, threats, and attacks"
    ],

    sections: [
        {
            title: "1.1 What is Computer Security?",
            content: `
                <h4>Definition of Computer Security</h4>
                <p>Computer security, also known as cybersecurity or IT security, is the protection of computer systems and networks from information disclosure, theft, or damage to their hardware, software, or electronic data, as well as from disruption or misdirection of the services they provide.</p>
                
                <p><strong>Simple Definition:</strong> Computer security is about keeping your computer, data, and network safe from bad guys who want to steal, damage, or misuse them.</p>
                
                <h4>Why is Computer Security Important?</h4>
                <ul>
                    <li><strong>Personal Privacy:</strong> Protect your personal information (photos, messages, bank details)</li>
                    <li><strong>Financial Protection:</strong> Prevent theft of money and financial data</li>
                    <li><strong>National Security:</strong> Protect critical infrastructure (power grids, military systems)</li>
                    <li><strong>Business Continuity:</strong> Keep businesses running without disruption</li>
                    <li><strong>Legal Compliance:</strong> Meet legal requirements for data protection</li>
                </ul>
                
                <h4>Key Objectives of Computer Security:</h4>
                <p>The main goal of computer security is to protect information and system resources from unauthorized access, use, disclosure, disruption, modification, or destruction.</p>
            `,
            keyPoints: [
                "Computer security protects systems, networks, and data from harm",
                "It covers hardware, software, and electronic data",
                "Important for personal privacy, financial protection, and national security",
                "Goal: prevent unauthorized access, use, disclosure, disruption, modification, or destruction"
            ]
        },

        {
            title: "1.2 The CIA Triad - Foundation of Computer Security",
            content: `
                <h4>What is the CIA Triad?</h4>
                <p>The CIA Triad is the core model that guides information security policies. It consists of three main principles:</p>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">CIA TRIAD</p>
                    <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:15px; margin-top:15px;">
                        <div style="text-align:center; padding:10px;">
                            <i class="fas fa-lock" style="font-size:32px; color:#2772a0;"></i>
                            <p style="font-weight:bold; margin:5px 0;">Confidentiality</p>
                        </div>
                        <div style="text-align:center; padding:10px;">
                            <i class="fas fa-check-circle" style="font-size:32px; color:#2772a0;"></i>
                            <p style="font-weight:bold; margin:5px 0;">Integrity</p>
                        </div>
                        <div style="text-align:center; padding:10px;">
                            <i class="fas fa-clock" style="font-size:32px; color:#2772a0;"></i>
                            <p style="font-weight:bold; margin:5px 0;">Availability</p>
                        </div>
                    </div>
                </div>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Principle</th>
                        <th style="padding:10px; border:1px solid #ddd;">Definition</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                        <th style="padding:10px; border:1px solid #ddd;">If Violated</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Confidentiality</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Only authorized people can access information</td>
                        <td style="padding:8px; border:1px solid #ddd;">Your bank account details should only be visible to you and bank staff</td>
                        <td style="padding:8px; border:1px solid #ddd;">Hacker steals your password and views your private emails</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Integrity</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Information is accurate and hasn't been tampered with</td>
                        <td style="padding:8px; border:1px solid #ddd;">Your bank balance should show the correct amount</td>
                        <td style="padding:8px; border:1px solid #ddd;">Attacker changes your grade from B to A in school records</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Availability</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Information and systems are accessible when needed</td>
                        <td style="padding:8px; border:1px solid #ddd;">You can access your email whenever you want</td>
                        <td style="padding:8px; border:1px solid #ddd;">Website crashes during online shopping (DDoS attack)</td>
                    </tr>
                </table>
                
                <h4>Real-World Examples of CIA Violations:</h4>
                <ul>
                    <li><strong>Confidentiality breach:</strong> Facebook data leak affecting millions of users</li>
                    <li><strong>Integrity breach:</strong> Someone modifying Wikipedia articles with false information</li>
                    <li><strong>Availability breach:</strong> Netflix going down during peak hours</li>
                </ul>
            `,
            keyPoints: [
                "CIA Triad = Confidentiality, Integrity, Availability - the core of computer security",
                "Confidentiality: keeping secrets secret (privacy)",
                "Integrity: keeping data accurate and unmodified (trust)",
                "Availability: keeping systems accessible when needed (reliability)",
                "All three must be balanced for good security"
            ]
        },

        {
            title: "1.3 Basic Security Concepts: Vulnerabilities, Threats, and Attacks",
            content: `
                <h4>Understanding Key Terminology</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Term</th>
                        <th style="padding:10px; border:1px solid #ddd;">Definition</th>
                        <th style="padding:10px; border:1px solid #ddd;">Analogy</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Vulnerability</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">A weakness in the system that could be exploited</td>
                        <td style="padding:8px; border:1px solid #ddd;">A unlocked door in your house</td>
                        <td style="padding:8px; border:1px solid #ddd;">Unpatched software bug, weak password</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Threat</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Potential danger that could exploit a vulnerability</td>
                        <td style="padding:8px; border:1px solid #ddd;">A thief walking in your neighborhood</td>
                        <td style="padding:8px; border:1px solid #ddd;">Hacker, malware, natural disaster</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Attack</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Actual exploitation of a vulnerability</td>
                        <td style="padding:8px; border:1px solid #ddd;">Thief actually entering through the unlocked door</td>
                        <td style="padding:8px; border:1px solid #ddd;">Password cracking, virus infection, DoS attack</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Risk</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Likelihood of a threat exploiting a vulnerability</td>
                        <td style="padding:8px; border:1px solid #ddd;">How likely is a thief to try your door?</td>
                        <td style="padding:8px; border:1px solid #ddd;">Probability of being hacked</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Countermeasure</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Action taken to reduce risk</td>
                        <td style="padding:8px; border:1px solid #ddd;">Locking the door, installing an alarm</td>
                        <td style="padding:8px; border:1px solid #ddd;">Firewall, antivirus, encryption</td>
                    </tr>
                </table>
                
                <h4>The Relationship:</h4>
                <p style="text-align:center; font-size:18px; margin:20px 0;">
                    <strong>VULNERABILITY + THREAT = RISK → ATTACK (if exploited)</strong>
                </p>
                
                <div class="key-points-box" style="background:#f8f9fa; padding:20px; border-radius:8px;">
                    <h5><i class="fas fa-exclamation-triangle" style="color:#2772a0;"></i> Important Definition for Exam:</h5>
                    <p><strong>Vulnerability</strong> is a flaw in the system's design that may be exploited by attackers.</p>
                </div>
                
                <h4>Example Scenario:</h4>
                <ul>
                    <li><strong>Vulnerability:</strong> Your computer has outdated software with a known security hole</li>
                    <li><strong>Threat:</strong> Hackers are actively looking for computers with this vulnerability</li>
                    <li><strong>Risk:</strong> High chance you'll get hacked because the vulnerability is well-known</li>
                    <li><strong>Attack:</strong> A hacker uses an automated tool to break into your computer</li>
                    <li><strong>Countermeasure:</strong> Update your software to patch the vulnerability</li>
                </ul>
            `,
            keyPoints: [
                "Vulnerability = weakness in the system",
                "Threat = potential danger that could exploit weakness",
                "Attack = actual exploitation of vulnerability",
                "Risk = likelihood of attack happening",
                "Countermeasure = protection against attacks",
                "VULNERABILITY IS A FLAW THAT CAN BE EXPLOITED - remember this definition!"
            ]
        },

        {
            title: "1.4 Types of Security Threats",
            content: `
                <h4>Classification of Security Threats</h4>
                
                <h4>1.4.1 By Origin:</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Examples</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Natural Threats</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Caused by natural disasters</td>
                        <td style="padding:8px; border:1px solid #ddd;">Fire, flood, earthquake, lightning</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Human Threats</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Caused by people (intentional or accidental)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Hackers, employees, terrorists</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Technical Threats</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Caused by hardware/software failures</td>
                        <td style="padding:8px; border:1px solid #ddd;">Hardware crash, software bug, power outage</td>
                    </tr>
                </table>
                
                <h4>1.4.2 By Intent:</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Examples</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Intentional Threats</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Deliberate attacks</td>
                        <td style="padding:8px; border:1px solid #ddd;">Hacking, malware, DoS attacks</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Unintentional Threats</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Accidental damage</td>
                        <td style="padding:8px; border:1px solid #ddd;">Employee accidentally deletes files</td>
                    </tr>
                </table>
                
                <h4>1.4.3 Common Types of Attacks:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Attack Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">CIA Affected</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Malware</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Malicious software (viruses, worms, trojans)</td>
                        <td style="padding:8px; border:1px solid #ddd;">All three</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Phishing</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Trick users into revealing sensitive info</td>
                        <td style="padding:8px; border:1px solid #ddd;">Confidentiality</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Denial of Service (DoS)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Overwhelm system to make it unavailable</td>
                        <td style="padding:8px; border:1px solid #ddd;">Availability</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Man-in-the-Middle</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Intercept communication between two parties</td>
                        <td style="padding:8px; border:1px solid #ddd;">Confidentiality, Integrity</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>SQL Injection</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Insert malicious code into database queries</td>
                        <td style="padding:8px; border:1px solid #ddd;">Integrity, Confidentiality</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Threats can be natural, human, or technical in origin",
                "Threats can be intentional (attacks) or unintentional (accidents)",
                "Different attacks target different CIA principles",
                "Malware, phishing, DoS, and MitM are common attack types"
            ]
        },

        {
            title: "1.5 Security Mechanisms and Controls",
            content: `
                <h4>What are Security Controls?</h4>
                <p>Security controls are safeguards or countermeasures designed to protect the confidentiality, integrity, and availability of information.</p>
                
                <h4>Classification of Security Controls:</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Category</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Examples</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Physical Controls</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Protect physical assets</td>
                        <td style="padding:8px; border:1px solid #ddd;">Locks, fences, guards, CCTV</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Technical Controls</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Protect using technology</td>
                        <td style="padding:8px; border:1px solid #ddd;">Firewalls, encryption, passwords, antivirus</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Administrative Controls</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Policies and procedures</td>
                        <td style="padding:8px; border:1px solid #ddd;">Security policies, training, background checks</td>
                    </tr>
                </table>
                
                <h4>By Function:</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Purpose</th>
                        <th style="padding:10px; border:1px solid #ddd;">Examples</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Preventive Controls</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Stop attacks before they happen</td>
                        <td style="padding:8px; border:1px solid #ddd;">Firewall, authentication, encryption</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Detective Controls</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Discover attacks in progress</td>
                        <td style="padding:8px; border:1px solid #ddd;">IDS, antivirus, log monitoring</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Corrective Controls</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Fix damage after attack</td>
                        <td style="padding:8px; border:1px solid #ddd;">Backups, patches, incident response</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Deterrent Controls</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Discourage attackers</td>
                        <td style="padding:8px; border:1px solid #ddd;">Warning signs, security cameras</td>
                    </tr>
                </table>
                
                <h4>Common Security Mechanisms:</h4>
                <ul>
                    <li><strong>Authentication:</strong> Verify identity (passwords, biometrics, smart cards)</li>
                    <li><strong>Authorization:</strong> Control access rights (permissions, ACLs)</li>
                    <li><strong>Encryption:</strong> Scramble data so only authorized can read it</li>
                    <li><strong>Auditing:</strong> Record and monitor activities</li>
                    <li><strong>Firewall:</strong> Filter network traffic</li>
                    <li><strong>Intrusion Detection System (IDS):</strong> Detect suspicious activity</li>
                </ul>
            `,
            keyPoints: [
                "Security controls protect CIA triad",
                "Three main categories: Physical, Technical, Administrative",
                "By function: Preventive, Detective, Corrective, Deterrent",
                "Authentication verifies identity, Authorization controls access",
                "Encryption protects confidentiality",
                "Firewalls filter traffic, IDS detect attacks"
            ]
        },

        {
            title: "1.6 Security Goals and Challenges",
            content: `
                <h4>Primary Security Goals:</h4>
                <ol>
                    <li><strong>Prevention:</strong> Stop security breaches from happening</li>
                    <li><strong>Detection:</strong> Quickly identify when breaches occur</li>
                    <li><strong>Recovery:</strong> Restore systems after a breach</li>
                    <li><strong>Response:</strong> Take action against attacks</li>
                </ol>
                
                <h4>Security Challenges:</h4>
                <ul>
                    <li><strong>Constant Evolution:</strong> New threats appear daily</li>
                    <li><strong>Human Factor:</strong> Users are often the weakest link</li>
                    <li><strong>Complexity:</strong> Modern systems are complex and hard to secure</li>
                    <li><strong>Balance:</strong> Security vs. Usability trade-off</li>
                    <li><strong>Cost:</strong> Good security is expensive</li>
                </ul>
                
                <h4>The Security - Usability Trade-off:</h4>
                <p>More security often means less convenience. The goal is to find the right balance.</p>
                <ul>
                    <li><strong>High security, low usability:</strong> 20-character passwords changed every day</li>
                    <li><strong>Low security, high usability:</strong> No password at all</li>
                    <li><strong>Balanced:</strong> Strong password + fingerprint scanner</li>
                </ul>
            `,
            keyPoints: [
                "Security goals: Prevention, Detection, Recovery, Response",
                "Challenges: evolving threats, human factor, complexity, balance, cost",
                "Security vs Usability trade-off - must balance both",
                "No system is 100% secure - we manage risk, not eliminate it"
            ]
        }
    ],

    summary: `
        <h3>Chapter 1 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Computer Security:</strong> Protecting systems and data from unauthorized access, use, disclosure, disruption, modification, or destruction</li>
            <li><strong>CIA Triad:</strong> Confidentiality (secrecy), Integrity (accuracy), Availability (accessibility) - the foundation of security</li>
            <li><strong>Vulnerability:</strong> A flaw in the system's design that may be exploited by attackers</li>
            <li><strong>Threat:</strong> Potential danger that could exploit a vulnerability</li>
            <li><strong>Attack:</strong> Actual exploitation of a vulnerability</li>
            <li><strong>Risk:</strong> Likelihood of a threat exploiting a vulnerability</li>
            <li><strong>Security Controls:</strong> Physical, Technical, Administrative; Preventive, Detective, Corrective, Deterrent</li>
            <li><strong>Common attacks:</strong> Malware, phishing, DoS, Man-in-the-Middle, SQL injection</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What are the three components of the CIA Triad? Explain each.",
            answer: "Confidentiality (keeping secrets secret), Integrity (keeping data accurate), Availability (keeping systems accessible)."
        },
        {
            question: "Define vulnerability in the context of computer security.",
            answer: "A vulnerability is a flaw in the system's design that may be exploited by attackers."
        },
        {
            question: "Differentiate between a threat and an attack.",
            answer: "A threat is a potential danger that could exploit a vulnerability. An attack is the actual exploitation of a vulnerability."
        },
        {
            question: "List three types of security controls and give examples of each.",
            answer: "Physical controls (locks, CCTV), Technical controls (firewalls, encryption), Administrative controls (security policies, training)."
        },
        {
            question: "What is the difference between authentication and authorization?",
            answer: "Authentication verifies who you are (identity). Authorization determines what you can do (permissions)."
        },
        {
            question: "Name three common types of security attacks and which CIA principle they target.",
            answer: "Phishing (Confidentiality), DoS (Availability), Man-in-the-Middle (Confidentiality & Integrity)."
        }
    ],

    quickTips: [
        "CIA = Confidentiality, Integrity, Availability - memorize this!",
        "Vulnerability = weakness (flaw in design)",
        "Threat = potential danger",
        "Attack = actual exploitation",
        "Prevention is better than detection",
        "Balance security with usability"
    ],

    commonMistakes: [
        "❌ Confusing vulnerability with threat - vulnerability is the weakness, threat is what could exploit it",
        "❌ Forgetting that availability is part of CIA - it's not just about keeping secrets!",
        "❌ Thinking authentication and authorization are the same - authentication = who you are, authorization = what you can do",
        "❌ Believing perfect security exists - security is about managing risk, not eliminating it"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 1:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>1 question</strong> at the <strong>Understand</strong> level.</p>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>CIA Triad:</strong> Confidentiality, Integrity, Availability - definitions and examples</li>
            <li><strong>Basic concepts:</strong> Vulnerability, threat, attack, risk, countermeasure</li>
            <li><strong>Definition of vulnerability:</strong> "A flaw in the system's design that may be exploited by attackers"</li>
            <li><strong>Security controls:</strong> Types and examples</li>
        </ol>
        
        <h4>What "Understand" Means:</h4>
        <p>You need to be able to explain concepts in your own words, give examples, and show that you comprehend the material.</p>
        
        <h4>Practice Questions:</h4>
        <ul>
            <li>Explain the CIA Triad and why it's important.</li>
            <li>What is a vulnerability? Give an example.</li>
            <li>Describe the difference between a threat and an attack.</li>
            <li>List three types of security controls and explain their purpose.</li>
        </ul>
    `
};