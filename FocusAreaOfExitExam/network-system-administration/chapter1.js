// ===============================
// FOCUS AREA: NETWORK AND SYSTEM ADMINISTRATION - CHAPTER 1
// Introduction to Network and System Administration
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaNetworkAdminChapter1 = {
    title: "Chapter 1: Introduction to Network and System Administration",
    
    // Blueprint alignment: 1 question (Understand)
    blueprint: {
        totalQuestions: 1,
        cognitiveLevels: {
            understand: 1
        },
        topics: [
            "Concepts and principles of system and network administration",
            "Roles and responsibilities of administrators",
            "System administration tasks",
            "Network administration fundamentals"
        ]
    },

    learningObjectives: [
        "Understand the concepts and principles of system and network administration",
        "Identify the roles and responsibilities of system and network administrators",
        "Describe common system administration tasks",
        "Understand the importance of network services and management"
    ],

    sections: [
        {
            title: "1.1 What is System Administration?",
            content: `
                <h4>Definition of System Administration</h4>
                <p>System administration is the field of IT that focuses on the configuration, maintenance, and reliable operation of computer systems and networks. System administrators ensure that systems run efficiently, securely, and are available to users.</p>
                
                <p><strong>Simple Definition:</strong> System administration is about keeping computers and networks running smoothly for users.</p>
                
                <h4>Primary Role of a System Administrator</h4>
                <p>The primary role of a system administrator is to <strong>manage and maintain computer systems</strong>, including hardware, software, network infrastructure, and user accounts.</p>
                
                <div class="key-points-box" style="background:#e8f0f5; padding:15px; border-radius:8px; margin:15px 0;">
                    <p><strong>🔑 Important:</strong> The primary role of a system administrator is to <strong>manage and maintain computer systems</strong>.</p>
                </div>
                
                <h4>Key Principles of System Administration</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Principle</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Automation</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Automating repetitive tasks to improve efficiency, reduce human error, and ensure consistency</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Communication</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Clear communication with users, management, and team members</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Simplicity</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Keeping systems as simple as possible to reduce complexity and errors</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Least Privilege</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Granting users only the minimum level of access required to perform their tasks</td>
                    </tr>
                </table>
                
                <h4>Which of the following is NOT a principle of system administration?</h4>
                <ul>
                    <li><strong>Request-based</strong> is NOT typically considered a core principle of system administration.</li>
                    <li>Communication, automation, and simplicity ARE key principles.</li>
                </ul>
                
                <p><strong>Automation of repetitive tasks is a key principle of system administration</strong> to improve efficiency, reduce human error, and ensure consistency.</p>
            `,
            keyPoints: [
                "System administration manages and maintains computer systems",
                "Primary role: manage and maintain computer systems",
                "Key principles: Automation, Communication, Simplicity, Least Privilege",
                "Request-based is NOT a principle of system administration",
                "Automation improves efficiency and reduces errors"
            ]
        },

        {
            title: "1.2 Roles and Responsibilities",
            content: `
                <h4>System Administrator Responsibilities</h4>
                <ul>
                    <li><strong>User management:</strong> Creating and managing user accounts, setting permissions</li>
                    <li><strong>Software installation and updates:</strong> Installing, configuring, and updating software</li>
                    <li><strong>System monitoring:</strong> Monitoring system performance and resource usage</li>
                    <li><strong>Backup and recovery:</strong> Implementing backup strategies and recovering data when needed</li>
                    <li><strong>Security management:</strong> Implementing security policies, managing firewalls, and monitoring for threats</li>
                    <li><strong>Troubleshooting:</strong> Diagnosing and resolving system issues</li>
                </ul>
                
                <h4>Network Administrator Responsibilities</h4>
                <ul>
                    <li><strong>Network infrastructure:</strong> Managing routers, switches, firewalls, and other networking equipment</li>
                    <li><strong>Network monitoring:</strong> Monitoring network performance and security</li>
                    <li><strong>IP address management:</strong> Allocating and managing IP addresses</li>
                    <li><strong>Network services:</strong> Configuring DHCP, DNS, VPN, and other network services</li>
                    <li><strong>Connectivity troubleshooting:</strong> Resolving network connectivity issues</li>
                </ul>
                
                <p><strong>Network administrators are responsible for monitoring network performance, ensuring network security, and managing network resources.</strong></p>
                
                <h4>Security Administrator Responsibilities</h4>
                <ul>
                    <li>Enforcing security policies and procedures</li>
                    <li>Implementing security controls</li>
                    <li>Addressing security threats and vulnerabilities</li>
                    <li>Conducting security audits</li>
                </ul>
                
                <h4>Common User Management Tasks</h4>
                <ul>
                    <li>Creating new user accounts</li>
                    <li>Modifying existing user accounts</li>
                    <li>Deleting user accounts</li>
                    <li>Resetting passwords</li>
                    <li>Managing group memberships</li>
                </ul>
                
                <p><strong>Which of the following is not a common user management task in an operating system?</strong> Installing software for users is not specifically a user management task (it's software management).</p>
                
                <h4>Purpose of Creating Groups</h4>
                <p><strong>Groups allow administrators to organize users with similar permissions or roles</strong>, simplifying access control and permission management.</p>
            `,
            keyPoints: [
                "System admin: user management, software updates, monitoring, backup, security, troubleshooting",
                "Network admin: network infrastructure, monitoring, IP management, network services",
                "Security admin: enforce policies, implement controls, address threats",
                "User management: create, modify, delete accounts",
                "Groups organize users with similar permissions"
            ]
        },

        {
            title: "1.3 System Administration Tasks",
            content: `
                <h4>Daily System Administration Tasks</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Task Category</th>
                        <th style="padding:10px; border:1px solid #ddd;">Examples</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>User Management</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Creating accounts, resetting passwords, managing permissions</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>System Monitoring</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Checking logs, monitoring resource usage, performance tuning</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Backup and Recovery</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Scheduling backups, verifying backups, restoring data</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Software Management</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Installing updates, patching vulnerabilities, managing licenses</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Security</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Reviewing security logs, updating firewall rules, scanning for vulnerabilities</td>
                    </tr>
                </table>
                
                <h4>System Administrator Skills</h4>
                <ul>
                    <li><strong>Technical skills:</strong> Operating systems, networking, scripting, security</li>
                    <li><strong>Problem-solving:</strong> Troubleshooting and problem-solving skills are essential</li>
                    <li><strong>Communication:</strong> Ability to communicate with users and management</li>
                    <li><strong>Documentation:</strong> Creating and maintaining system documentation</li>
                </ul>
                
                <h4>System Administrator in Software Updates</h4>
                <p><strong>System administrators are responsible for installing and deploying software updates and patches</strong> to keep computer systems up to date and secure.</p>
                
                <h4>Disaster Recovery</h4>
                <p>Disaster recovery focuses on planning and implementing measures to recover systems and data after a catastrophic event. Regular data backups are a critical part of the disaster recovery process.</p>
            `,
            keyPoints: [
                "Daily tasks: user management, monitoring, backup, software updates, security",
                "Essential skill: troubleshooting and problem-solving",
                "System admins deploy software updates and patches",
                "Disaster recovery: planning for system recovery after catastrophic events"
            ]
        },

        {
            title: "1.4 Network Administration Fundamentals",
            content: `
                <h4>What is Network Administration?</h4>
                <p>Network administration focuses on managing and maintaining network infrastructure, including routers, switches, firewalls, and other networking components.</p>
                
                <h4>Key Network Services</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Service</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>DNS (Domain Name System)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Translates domain names to IP addresses</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>DHCP (Dynamic Host Configuration Protocol)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Automatically assigns IP addresses to devices</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>VPN (Virtual Private Network)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Provides secure remote access to network</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Firewall</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Controls incoming and outgoing network traffic</td>
                    </tr>
                </table>
                
                <h4>Network Monitoring</h4>
                <p>Network administrators monitor network performance, track bandwidth usage, detect anomalies, and ensure network availability.</p>
                
                <h4>Troubleshooting Network Connectivity</h4>
                <p>Common troubleshooting steps include:</p>
                <ul>
                    <li>Using ping to test reachability</li>
                    <li>Using traceroute to identify routing issues</li>
                    <li>Checking IP configuration (ipconfig/ifconfig)</li>
                    <li>Verifying DNS resolution (nslookup)</li>
                </ul>
                
                <p><strong>Ping testing network connectivity</strong> is a common troubleshooting step used to verify network connectivity between devices.</p>
                
                <h4>Which cable type is best for data transmission?</h4>
                <p><strong>Fiber Optic</strong> cables are the best for data transmission as they offer higher bandwidth, faster speeds, and greater distance capabilities compared to other cable types.</p>
            `,
            keyPoints: [
                "Network administration manages infrastructure (routers, switches, firewalls)",
                "Key services: DNS, DHCP, VPN, Firewall",
                "Ping tests network connectivity",
                "Fiber optic is best for data transmission"
            ]
        },

        {
            title: "1.5 Data Center Management",
            content: `
                <h4>What is Data Center Management?</h4>
                <p>Data center management involves overseeing the physical and logical infrastructure of a data center, including servers, storage, networking, power, cooling, and security.</p>
                
                <h4>Primary Concerns in Data Center Management</h4>
                <ul>
                    <li><strong>Power management:</strong> Ensuring reliable power supply, UPS systems, backup generators</li>
                    <li><strong>Cooling:</strong> Maintaining appropriate temperature and humidity</li>
                    <li><strong>Fire safety:</strong> Fire detection and suppression systems</li>
                    <li><strong>Physical security:</strong> Access control, surveillance</li>
                </ul>
                
                <p><strong>The primary concern in data center management is managing power, cooling, and fire safety.</strong></p>
                
                <h4>Bootstrapping Process</h4>
                <p>The first step in the bootstrapping process of an OS is <strong>loading the OS kernel into memory</strong>.</p>
                
                <h4>Shell in UNIX/Linux</h4>
                <p>The primary function of a shell in UNIX/Linux is <strong>interpreting and executing user commands</strong>.</p>
                
                <h4>Log Rotation</h4>
                <p>The primary purpose of log rotation is to <strong>prevent storage overflow and keep records organized</strong>.</p>
            `,
            keyPoints: [
                "Data center management: power, cooling, fire safety, physical security",
                "Bootstrapping: first step loads OS kernel",
                "Shell interprets user commands",
                "Log rotation prevents storage overflow"
            ]
        },

        {
            title: "1.6 Security Policies and Troubleshooting",
            content: `
                <h4>Security Policies</h4>
                <p>Security policies are formal rules that users must follow to access and use system resources. They help protect the confidentiality, integrity, and availability of data.</p>
                
                <h4>Common Security Policies</h4>
                <ul>
                    <li><strong>Password policy:</strong> Requirements for password complexity, length, expiration</li>
                    <li><strong>Access control policy:</strong> Who can access what resources</li>
                    <li><strong>Acceptable use policy:</strong> How systems can be used</li>
                    <li><strong>Backup policy:</strong> How often backups are performed and retained</li>
                    <li><strong>Incident response policy:</strong> How to respond to security incidents</li>
                </ul>
                
                <p><strong>Which of the following is NOT a common security policy?</strong> Open wireless network access is NOT a recommended security policy.</p>
                
                <h4>Firewall Purpose</h4>
                <p>A firewall acts as a barrier between a trusted internal network and untrusted external networks, <strong>preventing unauthorized access</strong> and protecting against network threats.</p>
                
                <h4>Intrusion Detection Systems (IDS)</h4>
                <p>IDS monitor network traffic for signs of unauthorized access or suspicious activities and generate alerts or take action accordingly.</p>
                
                <h4>Common Network Vulnerabilities</h4>
                <ul>
                    <li>Weak password policies</li>
                    <li>Unpatched software</li>
                    <li>Open ports</li>
                    <li>Misconfigured firewalls</li>
                </ul>
                
                <p><strong>Weak password policies</strong> are a common network security vulnerability.</p>
                
                <h4>Security Incident Response</h4>
                <p>Incident investigation and analysis involve identifying and assessing security incidents, determining the cause, and taking appropriate action to mitigate the impact and prevent future incidents.</p>
            `,
            keyPoints: [
                "Security policies: password, access control, acceptable use, backup, incident response",
                "Open wireless access is NOT a common security policy",
                "Firewall prevents unauthorized access",
                "IDS monitors for suspicious activity",
                "Weak passwords are a common vulnerability"
            ]
        }
    ],

    summary: `
        <h3>Chapter 1 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>System administration:</strong> Managing and maintaining computer systems, networks, and user accounts</li>
            <li><strong>Primary role:</strong> Manage and maintain computer systems</li>
            <li><strong>Key principles:</strong> Automation, Communication, Simplicity, Least Privilege (NOT request-based)</li>
            <li><strong>User management:</strong> Creating, modifying, deleting accounts; groups organize users with similar permissions</li>
            <li><strong>Network administration:</strong> Managing infrastructure, monitoring performance, providing network services</li>
            <li><strong>Data center management:</strong> Power, cooling, fire safety, physical security</li>
            <li><strong>Security policies:</strong> Protect resources; open wireless access is NOT a common security policy</li>
            <li><strong>Ping:</strong> Tests network connectivity</li>
            <li><strong>Fiber optic:</strong> Best cable for data transmission</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What is the primary role of a system administrator?",
            answer: "The primary role is to manage and maintain computer systems, including hardware, software, network infrastructure, and user accounts."
        },
        {
            question: "What are the key principles of system administration?",
            answer: "Automation, Communication, Simplicity, and Least Privilege. Request-based is NOT a principle."
        },
        {
            question: "What is the purpose of creating groups in an operating system?",
            answer: "Groups organize users with similar permissions or roles, simplifying access control and permission management."
        },
        {
            question: "Which cable type is best for data transmission?",
            answer: "Fiber Optic cables are best due to higher bandwidth, faster speeds, and greater distance capabilities."
        },
        {
            question: "What is the primary concern in data center management?",
            answer: "Managing power, cooling, and fire safety."
        },
        {
            question: "What is NOT a common security policy?",
            answer: "Open wireless network access is NOT a recommended security policy."
        }
    ],

    quickTips: [
        "Primary role = manage and maintain systems",
        "Key principles: Automation, Communication, Simplicity, Least Privilege",
        "Request-based is NOT a principle",
        "Groups organize users with similar permissions",
        "Fiber optic is best cable",
        "Ping tests connectivity",
        "Open wireless access is NOT a security policy"
    ],

    commonMistakes: [
        "❌ Thinking request-based is a principle of system administration - it's not",
        "❌ Confusing system admin and network admin roles",
        "❌ Believing open wireless is acceptable security policy",
        "❌ Forgetting that fiber optic is the best cable",
        "❌ Not knowing that groups simplify permission management"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 1:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>1 question</strong> at the <strong>Understand</strong> level.</p>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>Concepts and principles:</strong> Automation, Communication, Simplicity, Least Privilege</li>
            <li><strong>Roles:</strong> Primary role of system administrator</li>
            <li><strong>NOT a principle:</strong> Request-based is NOT a principle</li>
            <li><strong>Basic concepts:</strong> Groups, cable types, data center management</li>
        </ol>
        
        <h4>What "Understand" Means:</h4>
        <p>You need to be able to explain the fundamental concepts, principles, and roles of system and network administration.</p>
        
        <h4>Practice Questions:</h4>
        <ul>
            <li>What is the primary role of a system administrator?</li>
            <li>What are the key principles of system administration?</li>
            <li>Which of the following is NOT a principle of system administration?</li>
            <li>What is the purpose of creating groups in an operating system?</li>
        </ul>
    `
};