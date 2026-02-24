// ===============================
// FOCUS AREA: COMPUTER SECURITY - CHAPTER 3
// Trusted Operating Systems and Security Evaluation
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaComputerSecurityChapter3 = {
    title: "Chapter 3: Trusted Operating Systems and Security Evaluation",
    
    // Blueprint alignment: 1 question (Analyze)
    blueprint: {
        totalQuestions: 1,
        cognitiveLevels: {
            analyze: 1
        },
        topics: [
            "Basic requirements for trusted operating systems",
            "Independent security evaluation",
            "Evaluation criteria and standards",
            "Evaluation process"
        ]
    },

    learningObjectives: [
        "Understand the basic requirements for trusted operating systems",
        "Explain the concept of security evaluation and its importance",
        "Describe different security evaluation criteria",
        "Analyze the evaluation process for trusted systems",
        "Compare different evaluation standards"
    ],

    sections: [
        {
            title: "3.1 Introduction to Trusted Operating Systems",
            content: `
                <h4>What is a Trusted Operating System?</h4>
                <p>A trusted operating system is an OS that has been evaluated and certified to meet specific security requirements. It provides a secure computing environment by enforcing security policies and protecting against various threats.</p>
                
                <p><strong>Simple Definition:</strong> A trusted OS is like a bank vault for your computer - it's designed, built, and tested to keep things secure.</p>
                
                <h4>Why Do We Need Trusted Operating Systems?</h4>
                <ul>
                    <li><strong>Critical systems:</strong> Military, government, banking, healthcare need high security</li>
                    <li><strong>Data protection:</strong> Sensitive information must be protected</li>
                    <li><strong>Compliance:</strong> Legal and regulatory requirements</li>
                    <li><strong>Trust:</strong> Users need confidence that the system works as claimed</li>
                </ul>
                
                <h4>Trust vs. Security:</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Concept</th>
                        <th style="padding:10px; border:1px solid #ddd;">Meaning</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Security</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Features and mechanisms in place</td>
                        <td style="padding:8px; border:1px solid #ddd;">Firewall, encryption, access control</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Trust</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Confidence that security works as intended</td>
                        <td style="padding:8px; border:1px solid #ddd;">Independent evaluation certification</td>
                    </tr>
                </table>
                
                <p>A system can have security features but not be trusted until it's been evaluated and verified.</p>
            `,
            keyPoints: [
                "Trusted OS has been evaluated and certified for security",
                "Critical for military, government, banking systems",
                "Security = features, Trust = verified confidence",
                "Evaluation provides assurance that security works"
            ]
        },

        {
            title: "3.2 Basic Requirements for Trusted Operating Systems",
            content: `
                <h4>What Makes an OS Trusted?</h4>
                <p>A trusted operating system must meet several fundamental requirements:</p>
                
                <h4>3.2.1 Security Policy</h4>
                <p>The OS must have a clearly defined and documented security policy that specifies:</p>
                <ul>
                    <li>What is being protected (objects)</li>
                    <li>Who can access what (subjects and permissions)</li>
                    <li>Under what conditions access is allowed</li>
                </ul>
                
                <h4>3.2.2 Identification and Authentication</h4>
                <ul>
                    <li>Each user must be uniquely identified</li>
                    <li>Authentication must verify claimed identity</li>
                    <li>Authentication data must be protected</li>
                </ul>
                
                <h4>3.2.3 Discretionary Access Control (DAC)</h4>
                <ul>
                    <li>Owners control access to their resources</li>
                    <li>Based on user identity and permissions</li>
                    <li>Example: Unix file permissions (rwx)</li>
                </ul>
                
                <h4>3.2.4 Mandatory Access Control (MAC)</h4>
                <ul>
                    <li>System-enforced access control based on security labels</li>
                    <li>Users cannot override these controls</li>
                    <li>Example: Military classification (Top Secret, Secret, Confidential)</li>
                </ul>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Aspect</th>
                        <th style="padding:10px; border:1px solid #ddd;">DAC (Discretionary)</th>
                        <th style="padding:10px; border:1px solid #ddd;">MAC (Mandatory)</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Who controls?</td>
                        <td style="padding:8px; border:1px solid #ddd;">Resource owner</td>
                        <td style="padding:8px; border:1px solid #ddd;">System/Policy</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Override by user?</td>
                        <td style="padding:8px; border:1px solid #ddd;">Yes (owner decides)</td>
                        <td style="padding:8px; border:1px solid #ddd;">No (system enforced)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Based on</td>
                        <td style="padding:8px; border:1px solid #ddd;">User identity</td>
                        <td style="padding:8px; border:1px solid #ddd;">Security labels</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Example</td>
                        <td style="padding:8px; border:1px solid #ddd;">Unix permissions</td>
                        <td style="padding:8px; border:1px solid #ddd;">SELinux, military classification</td>
                    </tr>
                </table>
                
                <h4>3.2.5 Object Reuse Protection</h4>
                <ul>
                    <li>When storage is reassigned, no data remnants remain</li>
                    <li>Memory, disk sectors must be cleared before reuse</li>
                    <li>Prevents data leakage between users</li>
                </ul>
                
                <h4>3.2.6 Audit Capability</h4>
                <ul>
                    <li>System must record security-relevant events</li>
                    <li>Logs must be protected from modification</li>
                    <li>Enable detection of security violations</li>
                </ul>
                
                <h4>3.2.7 Accountability</h4>
                <ul>
                    <li>Actions can be traced back to individuals</li>
                    <li>Non-repudiation - users cannot deny their actions</li>
                </ul>
                
                <h4>3.2.8 Continuous Protection</h4>
                <ul>
                    <li>Security mechanisms must always be active</li>
                    <li>Cannot be bypassed or tampered with</li>
                    <li>Protection throughout system lifetime</li>
                </ul>
                
                <div class="key-points-box" style="background:#e8f0f5; padding:20px; border-radius:8px;">
                    <h5><i class="fas fa-check-circle" style="color:#2772a0;"></i> Core Requirements Summary:</h5>
                    <ul>
                        <li><strong>Policy:</strong> Clear security rules</li>
                        <li><strong>Authentication:</strong> Verify identity</li>
                        <li><strong>Access Control:</strong> DAC and/or MAC</li>
                        <li><strong>Object Reuse:</strong> No data leakage</li>
                        <li><strong>Audit:</strong> Record events</li>
                        <li><strong>Accountability:</strong> Trace actions</li>
                        <li><strong>Continuous Protection:</strong> Always on</li>
                    </ul>
                </div>
            `,
            keyPoints: [
                "Trusted OS must have clear security policy",
                "DAC: owner controls access (Unix permissions)",
                "MAC: system enforces access (security labels)",
                "Object reuse protection prevents data leakage",
                "Audit logs record security events",
                "Continuous protection ensures security always active"
            ]
        },

        {
            title: "3.3 Security Evaluation: Why It Matters",
            content: `
                <h4>What is Security Evaluation?</h4>
                <p>Security evaluation is the process of assessing a system's security features, mechanisms, and implementations against established criteria to determine if it meets specified security requirements.</p>
                
                <h4>Why Evaluate Systems?</h4>
                <ul>
                    <li><strong>Verification:</strong> Confirm security claims are true</li>
                    <li><strong>Trust:</strong> Build confidence in the system</li>
                    <li><strong>Compliance:</strong> Meet regulatory requirements</li>
                    <li><strong>Risk Management:</strong> Understand residual risks</li>
                    <li><strong>Procurement:</strong> Make informed purchasing decisions</li>
                </ul>
                
                <h4>Who Performs Evaluations?</h4>
                <ul>
                    <li><strong>Independent evaluators:</strong> Third-party organizations</li>
                    <li><strong>Government agencies:</strong> National security authorities</li>
                    <li><strong>Accredited laboratories:</strong> Certified testing facilities</li>
                    <li><strong>Self-evaluation:</strong> Vendor claims (less trusted)</li>
                </ul>
                
                <h4>Independent Evaluation vs. Self-Assessment:</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Aspect</th>
                        <th style="padding:10px; border:1px solid #ddd;">Independent Evaluation</th>
                        <th style="padding:10px; border:1px solid #ddd;">Self-Assessment</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Objectivity</td>
                        <td style="padding:8px; border:1px solid #ddd;">High (third party)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Low (vendor bias)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Cost</td>
                        <td style="padding:8px; border:1px solid #ddd;">High</td>
                        <td style="padding:8px; border:1px solid #ddd;">Low</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Trust level</td>
                        <td style="padding:8px; border:1px solid #ddd;">High</td>
                        <td style="padding:8px; border:1px solid #ddd;">Low</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Time</td>
                        <td style="padding:8px; border:1px solid #ddd;">Long</td>
                        <td style="padding:8px; border:1px solid #ddd;">Short</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Security evaluation verifies security claims",
                "Independent evaluation provides highest trust",
                "Evaluations help with compliance and risk management",
                "Third-party evaluators are most objective",
                "Self-assessment is faster but less trusted"
            ]
        },

        {
            title: "3.4 Evaluation Criteria and Standards",
            content: `
                <h4>Major Security Evaluation Standards</h4>
                
                <h4>3.4.1 TCSEC (Trusted Computer System Evaluation Criteria) - Orange Book</h4>
                <p>Developed by the U.S. Department of Defense (1985). It was the first major evaluation standard.</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Division</th>
                        <th style="padding:10px; border:1px solid #ddd;">Name</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>D</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Minimal Protection</td>
                        <td style="padding:8px; border:1px solid #ddd;">Failed evaluation or not evaluated</td>
                        <td style="padding:8px; border:1px solid #ddd;">Many legacy systems</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>C1</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Discretionary Protection</td>
                        <td style="padding:8px; border:1px solid #ddd;">Basic DAC, user authentication</td>
                        <td style="padding:8px; border:1px solid #ddd;">Early Unix systems</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>C2</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Controlled Access Protection</td>
                        <td style="padding:8px; border:1px solid #ddd;">More detailed DAC, audit, object reuse</td>
                        <td style="padding:8px; border:1px solid #ddd;">Windows NT, some Unix</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>B1</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Labeled Security Protection</td>
                        <td style="padding:8px; border:1px solid #ddd;">MAC with security labels</td>
                        <td style="padding:8px; border:1px solid #ddd;">Trusted Xenix</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>B2</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Structured Protection</td>
                        <td style="padding:8px; border:1px solid #ddd;">Formal security model, covert channel analysis</td>
                        <td style="padding:8px; border:1px solid #ddd;">Multics</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>B3</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Security Domains</td>
                        <td style="padding:8px; border:1px solid #ddd;">Reference monitor, tamperproof</td>
                        <td style="padding:8px; border:1px solid #ddd;">Trusted systems</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>A1</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Verified Protection</td>
                        <td style="padding:8px; border:1px solid #ddd;">Formal verification, highest level</td>
                        <td style="padding:8px; border:1px solid #ddd;">Very few systems</td>
                    </tr>
                </table>
                
                <p><strong>Order:</strong> D < C1 < C2 < B1 < B2 < B3 < A1 (increasing security)</p>
                
                <h4>3.4.2 ITSEC (Information Technology Security Evaluation Criteria)</h4>
                <p>European standard developed in the 1990s. Used functional (F) and assurance (E) levels.</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Assurance Level</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>E0</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Inadequate assurance</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>E1</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Tested</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>E2</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Configuration control and tested</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>E3</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Detailed design and testing</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>E4</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Formal design and testing</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>E5</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Formal verification</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>E6</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Formal verification of entire system</td>
                    </tr>
                </table>
                
                <h4>3.4.3 Common Criteria (ISO 15408)</h4>
                <p>The current international standard (1999-present). Combines TCSEC and ITSEC approaches.</p>
                
                <h4>Common Criteria Structure:</h4>
                <ul>
                    <li><strong>Protection Profile (PP):</strong> User requirements for a specific type of product</li>
                    <li><strong>Security Target (ST):</strong> Vendor's security claims for their product</li>
                    <li><strong>Target of Evaluation (TOE):</strong> The product being evaluated</li>
                    <li><strong>Evaluation Assurance Level (EAL):</strong> Level of assurance (1-7)</li>
                </ul>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">EAL Level</th>
                        <th style="padding:10px; border:1px solid #ddd;">Name</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>EAL1</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Functionally Tested</td>
                        <td style="padding:8px; border:1px solid #ddd;">Basic testing</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>EAL2</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Structurally Tested</td>
                        <td style="padding:8px; border:1px solid #ddd;">Design information and testing</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>EAL3</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Methodically Tested and Checked</td>
                        <td style="padding:8px; border:1px solid #ddd;">Development environment controls</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>EAL4</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Methodically Designed, Tested, and Reviewed</td>
                        <td style="padding:8px; border:1px solid #ddd;">Commercial products (Windows, Linux)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>EAL5</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Semi-formally Designed and Tested</td>
                        <td style="padding:8px; border:1px solid #ddd;">Specialized high-security</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>EAL6</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Semi-formally Verified Design and Tested</td>
                        <td style="padding:8px; border:1px solid #ddd;">Military systems</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>EAL7</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Formally Verified Design and Tested</td>
                        <td style="padding:8px; border:1px solid #ddd;">Highest assurance</td>
                    </tr>
                </table>
                
                <h4>Comparison of Standards:</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">TCSEC</th>
                        <th style="padding:10px; border:1px solid #ddd;">ITSEC</th>
                        <th style="padding:10px; border:1px solid #ddd;">Common Criteria</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">C1</td>
                        <td style="padding:8px; border:1px solid #ddd;">E1</td>
                        <td style="padding:8px; border:1px solid #ddd;">EAL2</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">C2</td>
                        <td style="padding:8px; border:1px solid #ddd;">E2</td>
                        <td style="padding:8px; border:1px solid #ddd;">EAL3</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">B1</td>
                        <td style="padding:8px; border:1px solid #ddd;">E3</td>
                        <td style="padding:8px; border:1px solid #ddd;">EAL4</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">B2</td>
                        <td style="padding:8px; border:1px solid #ddd;">E4</td>
                        <td style="padding:8px; border:1px solid #ddd;">EAL5</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">B3</td>
                        <td style="padding:8px; border:1px solid #ddd;">E5</td>
                        <td style="padding:8px; border:1px solid #ddd;">EAL6</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">A1</td>
                        <td style="padding:8px; border:1px solid #ddd;">E6</td>
                        <td style="padding:8px; border:1px solid #ddd;">EAL7</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "TCSEC (Orange Book): D to A1 levels, developed by US DoD",
                "ITSEC: European standard with E0 to E6 levels",
                "Common Criteria: International standard (ISO 15408)",
                "Common Criteria uses EAL1 to EAL7 assurance levels",
                "EAL4 is typical for commercial products",
                "Higher levels require more rigorous evaluation"
            ]
        },

        {
            title: "3.5 The Evaluation Process",
            content: `
                <h4>How Security Evaluation Works</h4>
                
                <h4>3.5.1 Preparation Phase</h4>
                <ol>
                    <li><strong>Define scope:</strong> What system/components will be evaluated</li>
                    <li><strong>Select criteria:</strong> Choose appropriate evaluation standard</li>
                    <li><strong>Create Security Target (ST):</strong> Document security claims</li>
                    <li><strong>Select evaluation lab:</strong> Accredited testing facility</li>
                </ol>
                
                <h4>3.5.2 Evaluation Phase</h4>
                <ol>
                    <li><strong>Document review:</strong> Examine design documents, specifications</li>
                    <li><strong>Development review:</strong> Check development processes</li>
                    <li><strong>Testing:</strong> Functional and penetration testing</li>
                    <li><strong>Vulnerability analysis:</strong> Search for weaknesses</li>
                    <li><strong>Configuration management review:</strong> Ensure integrity</li>
                </ol>
                
                <h4>3.5.3 Reporting Phase</h4>
                <ol>
                    <li><strong>Evaluation Technical Report (ETR):</strong> Detailed findings</li>
                    <li><strong>Certificate:</strong> Issued if requirements met</li>
                    <li><strong>Certification Report:</strong> Public summary</li>
                </ol>
                
                <h4>3.5.4 Post-Evaluation</h4>
                <ol>
                    <li><strong>Maintenance:</strong> Changes may require re-evaluation</li>
                    <li><strong>Assurance continuity:</strong> Periodic reviews</li>
                </ol>
                
                <h4>Evaluation Roles:</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Role</th>
                        <th style="padding:10px; border:1px solid #ddd;">Responsibility</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Sponsor</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Pays for evaluation (vendor or customer)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Developer</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Creates the product and provides documentation</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Evaluator</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Independent lab performing the evaluation</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Certification Body</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Issues the certificate</td>
                    </tr>
                </table>
                
                <h4>Evaluation Timeline:</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Preparation (1-3 months) → Evaluation (6-18 months) → Certification (1-2 months)
                </pre>
                
                <p><strong>Note:</strong> Evaluation can take 1-2 years for complex systems!</p>
            `,
            keyPoints: [
                "Evaluation has preparation, evaluation, reporting, and post-evaluation phases",
                "Multiple roles: sponsor, developer, evaluator, certification body",
                "Process includes document review, testing, vulnerability analysis",
                "Evaluation can take 1-2 years for complex systems",
                "Certificate issued if requirements are met"
            ]
        },

        {
            title: "3.6 Trusted Operating System Examples",
            content: `
                <h4>Examples of Trusted Operating Systems</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">OS</th>
                        <th style="padding:10px; border:1px solid #ddd;">Evaluation Level</th>
                        <th style="padding:10px; border:1px solid #ddd;">Features</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Trusted Solaris</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Common Criteria EAL4+</td>
                        <td style="padding:8px; border:1px solid #ddd;">MAC, roles, trusted networking</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Red Hat Enterprise Linux</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Common Criteria EAL4+</td>
                        <td style="padding:8px; border:1px solid #ddd;">SELinux, auditing, crypto</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Windows 10/11</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Common Criteria EAL4+</td>
                        <td style="padding:8px; border:1px solid #ddd;">BitLocker, Secure Boot, Defender</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>AIX</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Common Criteria EAL4+</td>
                        <td style="padding:8px; border:1px solid #ddd;">IBM's trusted Unix</td>
                    </tr>
                </table>
                
                <h4>SELinux (Security-Enhanced Linux)</h4>
                <ul>
                    <li>Implements MAC in Linux kernel</li>
                    <li>Developed by NSA</li>
                    <li>Uses security contexts for all objects</li>
                    <li>Policies define allowed interactions</li>
                </ul>
                
                <h4>Trusted Computing Base (TCB)</h4>
                <p>The TCB is the set of hardware, firmware, and software components that are critical to system security. A vulnerability in TCB compromises the entire system.</p>
                
                <p><strong>TCB includes:</strong></p>
                <ul>
                    <li>Hardware (CPU, memory management)</li>
                    <li>Kernel and core OS services</li>
                    <li>Security mechanisms (access control, authentication)</li>
                    <li>Privileged processes</li>
                </ul>
                
                <h4>Reference Monitor Concept</h4>
                <p>A reference monitor is a security component that mediates all access attempts. It has three properties:</p>
                <ul>
                    <li><strong>Tamperproof:</strong> Cannot be modified</li>
                    <li><strong>Always invoked:</strong> All access checks go through it</li>
                    <li><strong>Verifiable:</strong> Small enough to analyze completely</li>
                </ul>
            `,
            keyPoints: [
                "Commercial OS like Windows, Linux achieve EAL4+",
                "SELinux provides MAC for Linux",
                "TCB (Trusted Computing Base) is critical for security",
                "Reference monitor mediates all access attempts",
                "Reference monitor must be tamperproof, always invoked, verifiable"
            ]
        },

        {
            title: "3.7 Analyzing Trusted Systems (Blueprint Focus)",
            content: `
                <h4>Blueprint Focus: Analyze Evaluation Criteria and Processes</h4>
                
                <p>According to the blueprint, you need to <strong>analyze</strong> the requirements for trusted operating systems and the evaluation process.</p>
                
                <h4>What "Analyze" Means for This Topic:</h4>
                <ul>
                    <li>Compare different evaluation criteria (TCSEC, ITSEC, Common Criteria)</li>
                    <li>Explain why certain requirements are necessary</li>
                    <li>Analyze the strengths and weaknesses of evaluation approaches</li>
                    <li>Interpret evaluation levels and what they mean</li>
                </ul>
                
                <h4>Analysis Questions to Consider:</h4>
                
                <p><strong>1. Why are independent evaluations more trusted than self-assessments?</strong></p>
                <p>Independent evaluators have no bias or conflict of interest. They follow standardized processes and are accountable to certification bodies. This provides objective verification of security claims.</p>
                
                <p><strong>2. Why is MAC considered stronger than DAC for high-security systems?</strong></p>
                <p>MAC is system-enforced and cannot be overridden by users, even resource owners. This prevents accidental or intentional disclosure of sensitive information. Users might give away permissions in DAC, but MAC prevents this.</p>
                
                <p><strong>3. What is the significance of EAL levels?</strong></p>
                <p>Higher EAL levels require more rigorous design, documentation, and testing. EAL4 is considered "commercial grade" while EAL5+ is for high-security applications. The level indicates confidence, not just functionality.</p>
                
                <p><strong>4. Compare TCSEC, ITSEC, and Common Criteria.</strong></p>
                <p>TCSEC (Orange Book) was US-centric and focused on confidentiality. ITSEC separated functionality from assurance and was more flexible. Common Criteria combines both approaches and is internationally recognized, allowing protection profiles for different domains.</p>
                
                <h4>Evaluation Level Analysis Table:</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Level</th>
                        <th style="padding:10px; border:1px solid #ddd;">What's Required</th>
                        <th style="padding:10px; border:1px solid #ddd;">When Used</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">EAL1-2</td>
                        <td style="padding:8px; border:1px solid #ddd;">Basic testing</td>
                        <td style="padding:8px; border:1px solid #ddd;">Low-risk applications</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">EAL3-4</td>
                        <td style="padding:8px; border:1px solid #ddd;">Design docs, configuration control</td>
                        <td style="padding:8px; border:1px solid #ddd;">Commercial products</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">EAL5-6</td>
                        <td style="padding:8px; border:1px solid #ddd;">Formal models, covert channel analysis</td>
                        <td style="padding:8px; border:1px solid #ddd;">Military/government</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">EAL7</td>
                        <td style="padding:8px; border:1px solid #ddd;">Formal verification</td>
                        <td style="padding:8px; border:1px solid #ddd;">Extremely high security</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Independent evaluation provides objective verification",
                "MAC is stronger than DAC for high security",
                "EAL levels indicate confidence, not just features",
                "Common Criteria is the current international standard",
                "Higher EAL requires more rigorous processes",
                "Analysis requires comparing and interpreting criteria"
            ]
        }
    ],

    summary: `
        <h3>Chapter 3 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Trusted OS:</strong> Evaluated and certified to meet security requirements</li>
            <li><strong>Requirements:</strong> Security policy, authentication, access control (DAC/MAC), object reuse, audit, accountability, continuous protection</li>
            <li><strong>DAC:</strong> Owner controls access (Unix permissions)</li>
            <li><strong>MAC:</strong> System enforces access based on labels (SELinux, military classification)</li>
            <li><strong>Evaluation standards:</strong> TCSEC (Orange Book), ITSEC, Common Criteria (ISO 15408)</li>
            <li><strong>Common Criteria levels:</strong> EAL1 to EAL7 (increasing assurance)</li>
            <li><strong>EAL4:</strong> Typical for commercial products</li>
            <li><strong>TCB:</strong> Trusted Computing Base - critical security components</li>
            <li><strong>Reference monitor:</strong> Mediates all access - tamperproof, always invoked, verifiable</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What are the basic requirements for a trusted operating system?",
            answer: "Security policy, identification/authentication, access control (DAC/MAC), object reuse protection, audit capability, accountability, continuous protection."
        },
        {
            question: "Differentiate between Discretionary Access Control (DAC) and Mandatory Access Control (MAC).",
            answer: "DAC: owners control access, can override (Unix permissions). MAC: system enforces based on labels, cannot override (SELinux, military classification)."
        },
        {
            question: "What is the Common Criteria? Explain its EAL levels.",
            answer: "Common Criteria (ISO 15408) is the international security evaluation standard. EAL1-7 provide increasing assurance: EAL4 for commercial products, EAL7 for highest security."
        },
        {
            question: "Describe the security evaluation process.",
            answer: "Preparation (scope, criteria), Evaluation (document review, testing, vulnerability analysis), Reporting (ETR, certificate), Post-evaluation (maintenance)."
        },
        {
            question: "What is the Trusted Computing Base (TCB)?",
            answer: "TCB is the set of hardware, firmware, and software critical to security. If TCB is compromised, entire system security fails."
        },
        {
            question: "Explain the reference monitor concept and its three properties.",
            answer: "Reference monitor mediates all access attempts. Properties: tamperproof (can't modify), always invoked (all checks go through it), verifiable (small enough to analyze)."
        }
    ],

    quickTips: [
        "DAC = owner controls, MAC = system controls",
        "TCSEC: D (low) to A1 (high)",
        "Common Criteria: EAL1 (low) to EAL7 (high)",
        "EAL4 is typical for commercial OS",
        "TCB = most critical security components",
        "Reference monitor = security gatekeeper"
    ],

    commonMistakes: [
        "❌ Confusing DAC and MAC - remember: DAC = owner decides, MAC = system decides",
        "❌ Thinking higher EAL means more features - it means more assurance, not more features",
        "❌ Believing all OS need highest EAL - appropriate level depends on risk",
        "❌ Forgetting object reuse protection - data can leak if not cleared",
        "❌ Assuming self-assessment is as trusted as independent evaluation"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 3:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>1 question</strong> at the <strong>Analyze</strong> level.</p>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>Trusted OS requirements:</strong> What makes an OS trusted?</li>
            <li><strong>DAC vs MAC:</strong> Compare and contrast</li>
            <li><strong>Evaluation criteria:</strong> TCSEC, ITSEC, Common Criteria</li>
            <li><strong>EAL levels:</strong> What they mean and when they're used</li>
            <li><strong>Evaluation process:</strong> How systems are evaluated</li>
        </ol>
        
        <h4>What "Analyze" Means:</h4>
        <p>You need to be able to compare, contrast, and interpret evaluation criteria, requirements, and processes. Not just list facts, but explain why things are the way they are.</p>
        
        <h4>Practice Analysis Questions:</h4>
        <ul>
            <li>Compare TCSEC, ITSEC, and Common Criteria. What are the strengths and weaknesses of each?</li>
            <li>Why is MAC considered more secure than DAC for high-security environments? Analyze the reasons.</li>
            <li>A system claims to be "trusted." What questions would you ask to verify this claim?</li>
            <li>Analyze why EAL4 is sufficient for commercial products but EAL7 might be needed for military systems.</li>
        </ul>
    `
};