// ===============================
// FOCUS AREA: NETWORK AND SYSTEM ADMINISTRATION - CHAPTER 3
// Security Policies and Troubleshooting
// Based on Ministry of Education Blueprint (2 Questions: Analyze)
// File Path: FocusAreaOfExitExam/network-system-administration/chapter3.js
// ===============================

window.focusAreaNetworkAdminChapter3 = {
    title: "Chapter 3: Security Policies and Troubleshooting",
    
    description: "Comprehensive coverage of security policies, threats, firewalls, troubleshooting methodology, incident response, and security auditing.",
    
    blueprint: {
        totalQuestions: 2,
        cognitiveLevels: {
            analyze: 2
        },
        topics: [
            "Security policies and their implementation",
            "Common security threats and vulnerabilities",
            "Troubleshooting methodology",
            "Network troubleshooting tools and techniques",
            "Incident response procedures",
            "Security auditing and monitoring"
        ]
    },

    learningObjectives: [
        "Analyze security policy requirements for different organizational contexts",
        "Evaluate security threats and recommend appropriate countermeasures",
        "Apply systematic troubleshooting methodology to resolve network issues",
        "Analyze incident response scenarios and determine appropriate actions",
        "Interpret security logs and monitoring data to identify anomalies",
        "Evaluate network configurations to identify security weaknesses"
    ],

    sections: [
        {
            title: "3.1 Security Policies",
            content: `
                <h4>What are Security Policies?</h4>
                <p>Security policies are formal, documented rules that govern how an organization manages and protects its information assets. They define acceptable use, access controls, and responses to security incidents.</p>
                
                <div class="key-points-box">
                    <p><strong>🔑 Important:</strong> Security policies are formal documents that define rules for protecting information assets. They are NOT optional guidelines but mandatory requirements.</p>
                </div>
                
                <h4>Types of Security Policies</h4>
                <ul>
                    <li><strong>Acceptable Use Policy (AUP):</strong> Defines proper use of company resources</li>
                    <li><strong>Password Policy:</strong> Requirements for password creation and management</li>
                    <li><strong>Access Control Policy:</strong> Who can access what resources</li>
                    <li><strong>Data Classification Policy:</strong> How data should be categorized (Public, Internal, Confidential, Restricted)</li>
                    <li><strong>Incident Response Policy:</strong> Procedures for handling security incidents</li>
                    <li><strong>Backup Policy:</strong> How often backups occur and retention periods</li>
                    <li><strong>Remote Access Policy:</strong> Rules for connecting from outside the network</li>
                </ul>
                
                <div class="warning-box">
                    <p><strong>⚠️ NOT a Security Policy:</strong> Open wireless network access is NOT a common security policy. It's a security vulnerability.</p>
                </div>
                
                <h4>Policy Development Process</h4>
                <ol>
                    <li><strong>Assessment:</strong> Identify risks and requirements</li>
                    <li><strong>Drafting:</strong> Write clear, enforceable policies</li>
                    <li><strong>Review:</strong> Legal and management approval</li>
                    <li><strong>Approval:</strong> Formal sign-off by leadership</li>
                    <li><strong>Communication:</strong> Train users on new policies</li>
                    <li><strong>Enforcement:</strong> Implement technical controls</li>
                    <li><strong>Review:</strong> Regular updates and revisions</li>
                </ol>
            `,
            keyPoints: [
                "Security policies are formal, documented rules",
                "Types: AUP, Password, Access Control, Data Classification, Incident Response, Backup, Remote Access",
                "Open wireless access is NOT a common security policy",
                "Policies must be enforceable and regularly reviewed",
                "Role-Based Access Control (RBAC) implements access policies",
                "Least privilege is a key principle in access policies"
            ]
        },

        {
            title: "3.2 Security Threats and Vulnerabilities",
            content: `
                <h4>Types of Security Threats</h4>
                <ul>
                    <li><strong>Malware:</strong> Viruses, worms, trojans, ransomware</li>
                    <li><strong>Phishing:</strong> Fraudulent emails pretending to be legitimate</li>
                    <li><strong>DoS/DDoS:</strong> Overwhelming systems to make them unavailable</li>
                    <li><strong>Man-in-the-Middle:</strong> Intercepting communication between parties</li>
                    <li><strong>Social Engineering:</strong> Manipulating people to reveal information</li>
                    <li><strong>Insider Threats:</strong> Attacks from within the organization</li>
                </ul>
                
                <h4>Common Network Vulnerabilities</h4>
                <ul>
                    <li><strong>Weak password policies</strong> - Easy to guess or crack passwords</li>
                    <li><strong>Unpatched software</strong> - Known vulnerabilities not fixed</li>
                    <li><strong>Open ports</strong> - Unnecessary services exposing attack surface</li>
                    <li><strong>Misconfigured firewalls</strong> - Rules that are too permissive</li>
                    <li><strong>Default credentials</strong> - Not changing default usernames/passwords</li>
                    <li><strong>Unencrypted data</strong> - Sensitive data transmitted in plain text</li>
                </ul>
                
                <div class="key-points-box">
                    <p><strong>🔑 Most Common:</strong> Weak password policies are consistently one of the most common network security vulnerabilities.</p>
                </div>
                
                <h4>Security Controls</h4>
                <ul>
                    <li><strong>Preventive:</strong> Firewalls, encryption, authentication - stop attacks before they happen</li>
                    <li><strong>Detective:</strong> IDS, log monitoring, security audits - identify ongoing attacks</li>
                    <li><strong>Corrective:</strong> Backup restoration, patching, incident response - recover from attacks</li>
                    <li><strong>Deterrent:</strong> Warning banners, security cameras - discourage attackers</li>
                    <li><strong>Physical:</strong> Locks, biometric access, security guards - protect physical assets</li>
                </ul>
            `,
            keyPoints: [
                "Common threats: Malware, Phishing, DoS, Man-in-the-Middle, Social Engineering, Insider Threats",
                "Common vulnerabilities: Weak passwords, unpatched software, open ports, misconfigured firewalls",
                "Security controls: Preventive, Detective, Corrective, Deterrent, Physical",
                "Weak password policies are the most common vulnerability",
                "Defense in depth: multiple layers of security controls"
            ]
        },

        {
            title: "3.3 Firewalls and Network Security",
            content: `
                <h4>Firewall Purpose</h4>
                <p>A firewall acts as a barrier between a trusted internal network and untrusted external networks, preventing unauthorized access and protecting against network threats.</p>
                
                <div class="key-points-box">
                    <p><strong>🔑 Primary Purpose:</strong> Prevent unauthorized access by controlling incoming and outgoing network traffic based on security rules.</p>
                </div>
                
                <h4>Types of Firewalls</h4>
                <ul>
                    <li><strong>Packet Filtering:</strong> Inspects packets based on IP, port, protocol - fast, simple</li>
                    <li><strong>Stateful Inspection:</strong> Tracks state of active connections - more secure</li>
                    <li><strong>Application Layer (Proxy):</strong> Inspects application data - deep inspection</li>
                    <li><strong>Next-Generation (NGFW):</strong> Combines firewall with IDS/IPS - comprehensive protection</li>
                </ul>
                
                <h4>Firewall Rules</h4>
                <p>Rules include: Action (Allow/Deny), Source, Destination, Protocol, Port, Direction</p>
                
                <h4>Default Policies</h4>
                <ul>
                    <li><strong>Default Deny:</strong> Everything blocked unless explicitly allowed (most secure)</li>
                    <li><strong>Default Allow:</strong> Everything allowed unless explicitly blocked (less secure)</li>
                </ul>
                
                <h4>IDS vs IPS</h4>
                <ul>
                    <li><strong>IDS (Intrusion Detection System):</strong> Monitors and alerts on suspicious activity</li>
                    <li><strong>IPS (Intrusion Prevention System):</strong> Monitors and blocks suspicious activity in real-time</li>
                </ul>
            `,
            keyPoints: [
                "Firewall purpose: prevent unauthorized access",
                "Firewall types: Packet Filtering, Stateful, Application Layer, NGFW",
                "Default deny is more secure than default allow",
                "IDS monitors and alerts, IPS monitors and blocks",
                "Firewall rules should follow least privilege principle"
            ]
        },

        {
            title: "3.4 Troubleshooting Methodology",
            content: `
                <h4>The 7-Step Troubleshooting Process</h4>
                <ol>
                    <li><strong>Identify the problem:</strong> Gather information, define symptoms</li>
                    <li><strong>Establish a theory:</strong> Question the obvious</li>
                    <li><strong>Test the theory:</strong> Determine cause through testing</li>
                    <li><strong>Establish a plan:</strong> Plan solution and identify effects</li>
                    <li><strong>Implement the solution:</strong> Or escalate as needed</li>
                    <li><strong>Verify functionality:</strong> Confirm problem resolved</li>
                    <li><strong>Document findings:</strong> Record actions and outcomes</li>
                </ol>
                
                <div class="key-points-box">
                    <p><strong>🔑 First Step:</strong> Always identify the problem by gathering information about symptoms.</p>
                </div>
                
                <h4>Troubleshooting Approaches</h4>
                <ul>
                    <li><strong>Top-Down:</strong> Start from application layer, work down - for app-specific issues</li>
                    <li><strong>Bottom-Up:</strong> Start from physical layer, work up - for complete outages</li>
                    <li><strong>Divide and Conquer:</strong> Start at middle layer, narrow down - most situations</li>
                </ul>
                
                <h4>Network Troubleshooting Tools</h4>
                <table>
                    <tr><th>Tool</th><th>Purpose</th><th>Example</th></tr>
                    <tr><td><strong>ping</strong></td><td>Tests basic connectivity</td><td>ping 8.8.8.8</td></tr>
                    <tr><td><strong>traceroute</strong></td><td>Shows path packets take</td><td>tracert google.com</td></tr>
                    <tr><td><strong>ipconfig/ifconfig</strong></td><td>Shows IP configuration</td><td>ipconfig /all</td></tr>
                    <tr><td><strong>nslookup</strong></td><td>DNS troubleshooting</td><td>nslookup google.com</td></tr>
                    <tr><td><strong>netstat</strong></td><td>Shows network connections</td><td>netstat -an</td></tr>
                </table>
                
                <div class="key-points-box">
                    <p><strong>🔑 ping:</strong> Tests network connectivity. If ping works, basic IP connectivity exists.</p>
                </div>
            `,
            keyPoints: [
                "7-step troubleshooting: Identify, Theory, Test, Plan, Implement, Verify, Document",
                "First step: Identify the problem",
                "Troubleshooting approaches: Top-Down, Bottom-Up, Divide and Conquer",
                "Ping tests basic connectivity",
                "Traceroute shows network path",
                "Always verify solution and document"
            ]
        },

        {
            title: "3.5 Incident Response",
            content: `
                <h4>Incident Response Phases (NIST Framework)</h4>
                <ol>
                    <li><strong>Preparation:</strong> Planning, training, tools</li>
                    <li><strong>Detection & Analysis:</strong> Identifying and analyzing incidents</li>
                    <li><strong>Containment, Eradication & Recovery:</strong> Stopping the incident and restoring systems</li>
                    <li><strong>Post-Incident Activity:</strong> Lessons learned, reporting</li>
                </ol>
                
                <div class="key-points-box">
                    <p><strong>🔑 First Priority:</strong> Containment - stop the incident from spreading.</p>
                </div>
                
                <h4>Types of Security Incidents</h4>
                <ul>
                    <li>Malware infection</li>
                    <li>Unauthorized access</li>
                    <li>Data breach</li>
                    <li>Denial of service</li>
                    <li>Insider threat</li>
                    <li>Ransomware attack</li>
                </ul>
                
                <h4>Incident Response Best Practices</h4>
                <ul>
                    <li>Have an incident response plan before incidents occur</li>
                    <li>Document everything during response</li>
                    <li>Preserve evidence for forensics</li>
                    <li>Communicate appropriately (don't cause panic)</li>
                    <li>Learn from every incident</li>
                    <li><strong>Never pay ransomware demands</strong></li>
                </ul>
            `,
            keyPoints: [
                "Incident response phases: Preparation, Detection, Containment/Eradication/Recovery, Post-Incident",
                "First priority in active incident: Containment",
                "Never pay ransomware demands",
                "Document everything during response",
                "Preserve evidence for forensics",
                "Learn from every incident"
            ]
        },

        {
            title: "3.6 Security Auditing and Monitoring",
            content: `
                <h4>Security Auditing</h4>
                <p>Systematic evaluation of an organization's security policies, procedures, and controls.</p>
                
                <h4>Types of Security Audits</h4>
                <ul>
                    <li><strong>Internal audits:</strong> Conducted by internal team</li>
                    <li><strong>External audits:</strong> Conducted by third-party</li>
                    <li><strong>Compliance audits:</strong> Verify compliance with regulations</li>
                    <li><strong>Vulnerability assessments:</strong> Identify vulnerabilities</li>
                    <li><strong>Penetration testing:</strong> Simulate attacks</li>
                </ul>
                
                <h4>Log Monitoring</h4>
                <p>Collecting, analyzing, and reviewing logs from various systems to detect security incidents.</p>
                
                <h4>Types of Logs to Monitor</h4>
                <ul>
                    <li><strong>Security logs:</strong> Failed logins, admin activity</li>
                    <li><strong>System logs:</strong> Service crashes, unexpected reboots</li>
                    <li><strong>Application logs:</strong> Errors, suspicious transactions</li>
                    <li><strong>Firewall logs:</strong> Repeated blocked attempts</li>
                    <li><strong>DNS logs:</strong> Queries to malicious domains</li>
                </ul>
                
                <h4>Log Rotation</h4>
                <p>The primary purpose of log rotation is to prevent storage overflow and keep records organized.</p>
                
                <div class="key-points-box">
                    <p><strong>🔑 Log Rotation:</strong> Prevents logs from consuming all disk space and makes log management easier.</p>
                </div>
                
                <h4>SIEM (Security Information and Event Management)</h4>
                <p>Collects, aggregates, and analyzes log data from multiple sources for real-time security monitoring.</p>
            `,
            keyPoints: [
                "Security auditing evaluates policies, procedures, and controls",
                "Log monitoring detects security incidents",
                "Log rotation prevents storage overflow",
                "SIEM aggregates and analyzes logs",
                "Monitor for failed logins, unusual locations, privilege changes",
                "Regular log review is essential"
            ]
        }
    ],

    keyPoints: [
        "Security policies are formal, documented rules",
        "Common threats: Malware, Phishing, DoS, MITM, Social Engineering, Insider Threats",
        "Firewall purpose: prevent unauthorized access",
        "7-step troubleshooting: Identify, Theory, Test, Plan, Implement, Verify, Document",
        "Incident response phases: Preparation, Detection, Containment, Recovery, Post-Incident",
        "Log rotation prevents storage overflow",
        "Never pay ransomware demands"
    ],

    summary: `
        <h3>Chapter 3 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Security Policies:</strong> Formal, documented rules (AUP, Password, Access Control, etc.)</li>
            <li><strong>Threats:</strong> Malware, Phishing, DoS, MITM, Social Engineering, Insider Threats</li>
            <li><strong>Vulnerabilities:</strong> Weak passwords, unpatched software, open ports, misconfigured firewalls</li>
            <li><strong>Firewalls:</strong> Prevent unauthorized access; types: Packet Filtering, Stateful, Application, NGFW</li>
            <li><strong>IDS vs IPS:</strong> IDS alerts, IPS blocks</li>
            <li><strong>Troubleshooting:</strong> 7-step process, first step = identify problem</li>
            <li><strong>Tools:</strong> ping (connectivity), traceroute (path), nslookup (DNS)</li>
            <li><strong>Incident Response:</strong> Preparation, Detection, Containment, Recovery, Post-Incident</li>
            <li><strong>Never pay ransomware</strong></li>
            <li><strong>Log rotation:</strong> Prevents storage overflow</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What are security policies and why are they important?",
            answer: "Security policies are formal, documented rules that govern how an organization manages and protects its information assets."
        },
        {
            question: "What is NOT considered a common security policy?",
            answer: "Open wireless network access is NOT a common security policy."
        },
        {
            question: "What is the purpose of a firewall?",
            answer: "A firewall prevents unauthorized access by controlling incoming and outgoing network traffic."
        },
        {
            question: "What is the first step in systematic troubleshooting?",
            answer: "Identify the problem by gathering information about symptoms."
        },
        {
            question: "What command tests basic network connectivity?",
            answer: "ping tests basic network connectivity between devices."
        },
        {
            question: "What are the four phases of incident response?",
            answer: "Preparation, Detection & Analysis, Containment/Eradication/Recovery, and Post-Incident Activity."
        },
        {
            question: "What is the purpose of log rotation?",
            answer: "Log rotation prevents storage overflow and keeps records organized."
        },
        {
            question: "What is the difference between IDS and IPS?",
            answer: "IDS monitors and alerts, IPS monitors and blocks suspicious activity."
        },
        {
            question: "What should you NEVER do in a ransomware incident?",
            answer: "Never pay the ransom. Restore from backups instead."
        }
    ],

    quickTips: [
        "Security policies = formal, documented rules",
        "Open wireless = NOT a policy",
        "Firewall purpose = prevent unauthorized access",
        "First troubleshooting step = identify problem",
        "Ping tests connectivity",
        "IDS alerts, IPS blocks",
        "Never pay ransomware",
        "Log rotation prevents overflow",
        "Weak passwords = #1 vulnerability"
    ],

    commonMistakes: [
        "❌ Thinking open wireless is an acceptable security policy",
        "❌ Confusing IDS (alerts) with IPS (blocks)",
        "❌ Skipping the 'identify problem' step in troubleshooting",
        "❌ Forgetting to verify solution after implementing fix",
        "❌ Not documenting troubleshooting steps",
        "❌ Paying ransomware demands",
        "❌ Not isolating infected systems immediately",
        "❌ Ignoring log rotation until disks fill up"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 3:</h3>
        <p>This chapter has <strong>2 questions</strong> at the <strong>Analyze</strong> level.</p>
        
        <h4>What "Analyze" Means:</h4>
        <p>Examine information, identify patterns, break down scenarios, and determine relationships.</p>
        
        <h4>Expected Question Types:</h4>
        <ol>
            <li><strong>Policy Analysis:</strong> Given an organization's needs, recommend appropriate security policies</li>
            <li><strong>Troubleshooting Scenario:</strong> Given symptoms, analyze cause and determine resolution</li>
            <li><strong>Incident Response:</strong> Given security alerts/logs, determine appropriate actions</li>
        </ol>
        
        <h4>Sample Analyze Question:</h4>
        <div style="background:#f8f9fa; padding:15px; border-radius:8px;">
            <p><strong>Question:</strong> A company's security team notices these log entries. Analyze the situation:</p>
            <pre>
09:15:22 - Failed login for user 'admin' from 10.0.0.50 (x50 attempts)
09:16:01 - Successful login for user 'admin' from 10.0.0.50
09:16:30 - User 'admin' added to 'Domain Admins' group
09:17:15 - Large data transfer (1.5GB) to 203.0.113.99
            </pre>
            <p><strong>Analysis:</strong> Brute force attack succeeded, privilege escalation, data exfiltration. Critical incident.</p>
            <p><strong>Actions:</strong> Disable admin account, block IPs, isolate systems, begin incident response.</p>
        </div>
    `
};