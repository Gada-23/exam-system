// ===============================
// FOCUS AREA: DATA COMMUNICATION AND COMPUTER NETWORKING - CHAPTER 4
// IP Addressing and Subnetting
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaNetworkingChapter4 = {
    title: "Chapter 4: IP Addressing and Subnetting",
    
    // Blueprint alignment: 3 questions (Apply, Analyze, Evaluate)
    blueprint: {
        totalQuestions: 3,
        cognitiveLevels: {
            apply: 1,
            analyze: 1,
            evaluate: 1
        },
        topics: [
            "IP addressing concepts",
            "Subnetting and subnet masks",
            "Designing IP addressing schemes",
            "Implementing subnets"
        ]
    },

    learningObjectives: [
        "Understand IPv4 addressing structure and classes",
        "Calculate subnet masks and network addresses",
        "Design IP addressing schemes for given requirements",
        "Analyze subnetting scenarios and determine appropriate configurations",
        "Evaluate different subnetting approaches and their trade-offs"
    ],

    sections: [
        {
            title: "4.1 Introduction to IP Addressing",
            content: `
                <h4>What is an IP Address?</h4>
                <p>An IP (Internet Protocol) address is a unique numerical identifier assigned to each device connected to a network. It serves two main functions: host identification and location addressing.</p>
                
                <p><strong>Analogy:</strong> An IP address is like your home address. It tells the postal service where to deliver mail. Similarly, IP addresses tell routers where to deliver data packets.</p>
                
                <h4>IPv4 Address Structure</h4>
                <ul>
                    <li>32-bit address (4 bytes)</li>
                    <li>Written in dotted-decimal notation: four numbers separated by dots (e.g., 192.168.1.1)</li>
                    <li>Each decimal number ranges from 0 to 255 (8 bits)</li>
                </ul>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Example: 192.168.10.5
Binary: 11000000.10101000.00001010.00000101
                </pre>
                
                <h4>Two Parts of an IP Address</h4>
                <p>An IP address consists of two parts:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Part</th>
                        <th style="padding:10px; border:1px solid #ddd;">Function</th>
                        <th style="padding:10px; border:1px solid #ddd;">Analogy</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Network Portion</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Identifies the network</td>
                        <td style="padding:8px; border:1px solid #ddd;">Your city and street name</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Host Portion</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Identifies the specific device</td>
                        <td style="padding:8px; border:1px solid #ddd;">Your house number</td>
                    </tr>
                </table>
                
                <p>The subnet mask determines where the split between network and host portions occurs.</p>
            `,
            keyPoints: [
                "IPv4 addresses are 32-bit numbers in dotted-decimal format",
                "Each octet ranges from 0-255",
                "IP address = Network portion + Host portion",
                "Subnet mask defines the boundary between network and host"
            ]
        },

        {
            title: "4.2 IP Address Classes",
            content: `
                <h4>Traditional Classful Addressing</h4>
                <p>Originally, IP addresses were divided into classes (Class A, B, C, D, E). While classful addressing is largely obsolete (replaced by CIDR), understanding it helps grasp subnetting concepts.</p>
                
                <h4>IP Address Classes</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Class</th>
                        <th style="padding:10px; border:1px solid #ddd;">First Octet Range</th>
                        <th style="padding:10px; border:1px solid #ddd;">Default Mask</th>
                        <th style="padding:10px; border:1px solid #ddd;">Network/Host</th>
                        <th style="padding:10px; border:1px solid #ddd;">Number of Networks</th>
                        <th style="padding:10px; border:1px solid #ddd;">Hosts per Network</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>A</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">1-126</td>
                        <td style="padding:8px; border:1px solid #ddd;">255.0.0.0 (/8)</td>
                        <td style="padding:8px; border:1px solid #ddd;">N.H.H.H</td>
                        <td style="padding:8px; border:1px solid #ddd;">126</td>
                        <td style="padding:8px; border:1px solid #ddd;">16,777,214</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>B</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">128-191</td>
                        <td style="padding:8px; border:1px solid #ddd;">255.255.0.0 (/16)</td>
                        <td style="padding:8px; border:1px solid #ddd;">N.N.H.H</td>
                        <td style="padding:8px; border:1px solid #ddd;">16,384</td>
                        <td style="padding:8px; border:1px solid #ddd;">65,534</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>C</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">192-223</td>
                        <td style="padding:8px; border:1px solid #ddd;">255.255.255.0 (/24)</td>
                        <td style="padding:8px; border:1px solid #ddd;">N.N.N.H</td>
                        <td style="padding:8px; border:1px solid #ddd;">2,097,152</td>
                        <td style="padding:8px; border:1px solid #ddd;">254</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>D</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">224-239</td>
                        <td style="padding:8px; border:1px solid #ddd;">Multicast</td>
                        <td style="padding:8px; border:1px solid #ddd;">-</td>
                        <td style="padding:8px; border:1px solid #ddd;">-</td>
                        <td style="padding:8px; border:1px solid #ddd;">-</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>E</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">240-255</td>
                        <td style="padding:8px; border:1px solid #ddd;">Reserved</td>
                        <td style="padding:8px; border:1px solid #ddd;">-</td>
                        <td style="padding:8px; border:1px solid #ddd;">-</td>
                        <td style="padding:8px; border:1px solid #ddd;">-</td>
                    </tr>
                </table>
                
                <h4>Identifying Address Class</h4>
                <p>Look at the first octet:</p>
                <ul>
                    <li><strong>Class A:</strong> 1-126 (0 is reserved, 127 is loopback)</li>
                    <li><strong>Class B:</strong> 128-191</li>
                    <li><strong>Class C:</strong> 192-223</li>
                </ul>
                
                <h4>Special Addresses</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Address Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Range/Value</th>
                        <th style="padding:10px; border:1px solid #ddd;">Purpose</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Network Address</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Host portion all 0s</td>
                        <td style="padding:8px; border:1px solid #ddd;">Identifies the network itself</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Broadcast Address</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Host portion all 1s</td>
                        <td style="padding:8px; border:1px solid #ddd;">Send to all hosts on network</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Loopback</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">127.0.0.0/8</td>
                        <td style="padding:8px; border:1px solid #ddd;">Testing, local communication</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Private Addresses</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16</td>
                        <td style="padding:8px; border:1px solid #ddd;">Internal networks (not routable on Internet)</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Class A: 1-126, /8, 16M hosts",
                "Class B: 128-191, /16, 65K hosts",
                "Class C: 192-223, /24, 254 hosts",
                "Network address: all 0s in host portion",
                "Broadcast address: all 1s in host portion",
                "Private addresses: 10.x.x.x, 172.16-31.x.x, 192.168.x.x"
            ]
        },

        {
            title: "4.3 Subnet Masks and CIDR Notation",
            content: `
                <h4>What is a Subnet Mask?</h4>
                <p>A subnet mask is a 32-bit number that divides an IP address into network and host portions. It tells devices which part of the IP address identifies the network and which part identifies the host.</p>
                
                <h4>How Subnet Masks Work</h4>
                <p>The subnet mask has 1s in the network portion and 0s in the host portion. When you perform a logical AND between an IP address and its subnet mask, you get the network address.</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
IP Address:     192.168.1.10    = 11000000.10101000.00000001.00001010
Subnet Mask:    255.255.255.0   = 11111111.11111111.11111111.00000000
AND Operation   ------------------------------------------------
Network Address:192.168.1.0     = 11000000.10101000.00000001.00000000
                </pre>
                
                <h4>CIDR Notation</h4>
                <p>CIDR (Classless Inter-Domain Routing) notation specifies the subnet mask by the number of leading 1 bits. For example, /24 means 24 bits of network (255.255.255.0).</p>
                
                <h4>Common Subnet Masks</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">CIDR</th>
                        <th style="padding:10px; border:1px solid #ddd;">Subnet Mask</th>
                        <th style="padding:10px; border:1px solid #ddd;">Binary Mask</th>
                        <th style="padding:10px; border:1px solid #ddd;"># of Hosts</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">/8</td>
                        <td style="padding:8px; border:1px solid #ddd;">255.0.0.0</td>
                        <td style="padding:8px; border:1px solid #ddd;">11111111.00000000.00000000.00000000</td>
                        <td style="padding:8px; border:1px solid #ddd;">16,777,214</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">/16</td>
                        <td style="padding:8px; border:1px solid #ddd;">255.255.0.0</td>
                        <td style="padding:8px; border:1px solid #ddd;">11111111.11111111.00000000.00000000</td>
                        <td style="padding:8px; border:1px solid #ddd;">65,534</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">/24</td>
                        <td style="padding:8px; border:1px solid #ddd;">255.255.255.0</td>
                        <td style="padding:8px; border:1px solid #ddd;">11111111.11111111.11111111.00000000</td>
                        <td style="padding:8px; border:1px solid #ddd;">254</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">/25</td>
                        <td style="padding:8px; border:1px solid #ddd;">255.255.255.128</td>
                        <td style="padding:8px; border:1px solid #ddd;">11111111.11111111.11111111.10000000</td>
                        <td style="padding:8px; border:1px solid #ddd;">126</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">/26</td>
                        <td style="padding:8px; border:1px solid #ddd;">255.255.255.192</td>
                        <td style="padding:8px; border:1px solid #ddd;">11111111.11111111.11111111.11000000</td>
                        <td style="padding:8px; border:1px solid #ddd;">62</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">/27</td>
                        <td style="padding:8px; border:1px solid #ddd;">255.255.255.224</td>
                        <td style="padding:8px; border:1px solid #ddd;">11111111.11111111.11111111.11100000</td>
                        <td style="padding:8px; border:1px solid #ddd;">30</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">/28</td>
                        <td style="padding:8px; border:1px solid #ddd;">255.255.255.240</td>
                        <td style="padding:8px; border:1px solid #ddd;">11111111.11111111.11111111.11110000</td>
                        <td style="padding:8px; border:1px solid #ddd;">14</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">/29</td>
                        <td style="padding:8px; border:1px solid #ddd;">255.255.255.248</td>
                        <td style="padding:8px; border:1px solid #ddd;">11111111.11111111.11111111.11111000</td>
                        <td style="padding:8px; border:1px solid #ddd;">6</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">/30</td>
                        <td style="padding:8px; border:1px solid #ddd;">255.255.255.252</td>
                        <td style="padding:8px; border:1px solid #ddd;">11111111.11111111.11111111.11111100</td>
                        <td style="padding:8px; border:1px solid #ddd;">2</td>
                    </tr>
                </table>
                
                <h4>Calculating Number of Hosts</h4>
                <p>Formula: <strong>2^n - 2</strong> where n = number of host bits</p>
                <p>Subtract 2 for network address and broadcast address.</p>
                
                <p><strong>Example:</strong> /27 has 5 host bits (32-27=5) → 2⁵ - 2 = 32 - 2 = 30 hosts</p>
            `,
            keyPoints: [
                "Subnet mask separates network and host portions",
                "AND operation with mask gives network address",
                "CIDR notation: /n where n is number of network bits",
                "Number of hosts = 2^(32-n) - 2",
                "Common masks: /24 (255.255.255.0), /16 (255.255.0.0), /8 (255.0.0.0)"
            ]
        },

        {
            title: "4.4 Subnetting Fundamentals",
            content: `
                <h4>What is Subnetting?</h4>
                <p>Subnetting is the process of dividing a large network into smaller, more manageable subnetworks (subnets). It improves network efficiency, security, and reduces congestion.</p>
                
                <p><strong>Analogy:</strong> Think of a large company with one mailroom. If all mail goes to one room, it's chaotic. Subnetting is like having mailrooms for each department - more efficient!</p>
                
                <h4>Why Subnet?</h4>
                <ul>
                    <li><strong>Efficient IP use:</strong> Don't waste IP addresses</li>
                    <li><strong>Reduced network traffic:</strong> Broadcasts stay within subnet</li>
                    <li><strong>Improved security:</strong> Can isolate sensitive departments</li>
                    <li><strong>Easier management:</strong> Smaller networks are easier to manage</li>
                </ul>
                
                <h4>Subnetting Process</h4>
                <ol>
                    <li>Determine number of subnets needed</li>
                    <li>Determine number of hosts per subnet needed</li>
                    <li>Calculate required subnet bits</li>
                    <li>Calculate new subnet mask</li>
                    <li>Calculate subnet addresses</li>
                </ol>
                
                <h4>Subnetting Formulas</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">What to Find</th>
                        <th style="padding:10px; border:1px solid #ddd;">Formula</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Number of subnets</td>
                        <td style="padding:8px; border:1px solid #ddd;">2^s where s = number of borrowed bits</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Number of hosts per subnet</td>
                        <td style="padding:8px; border:1px solid #ddd;">2^h - 2 where h = number of host bits remaining</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Subnet size (block size)</td>
                        <td style="padding:8px; border:1px solid #ddd;">256 - (last non-zero octet of subnet mask)</td>
                    </tr>
                </table>
                
                <h4>Subnetting Steps - Detailed Example</h4>
                <p><strong>Example:</strong> Network 192.168.1.0/24 needs 4 subnets</p>
                
                <ol>
                    <li><strong>Need 4 subnets:</strong> 2² = 4, so borrow 2 bits</li>
                    <li><strong>New mask:</strong> Original /24 + 2 bits = /26 (255.255.255.192)</li>
                    <li><strong>Block size:</strong> 256 - 192 = 64</li>
                    <li><strong>Subnet addresses:</strong> 0, 64, 128, 192</li>
                    <li><strong>Host ranges:</strong> 
                        <ul>
                            <li>Subnet 0: 192.168.1.1 - 192.168.1.62 (broadcast 192.168.1.63)</li>
                            <li>Subnet 64: 192.168.1.65 - 192.168.1.126 (broadcast 192.168.1.127)</li>
                            <li>Subnet 128: 192.168.1.129 - 192.168.1.190 (broadcast 192.168.1.191)</li>
                            <li>Subnet 192: 192.168.1.193 - 192.168.1.254 (broadcast 192.168.1.255)</li>
                        </ul>
                    </li>
                </ol>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <h4>Quick Subnetting Method</h4>
                    <p><strong>Step 1:</strong> Find the subnet mask in the interesting octet</p>
                    <p><strong>Step 2:</strong> Calculate block size = 256 - subnet mask value</p>
                    <p><strong>Step 3:</strong> Subnets start at 0 and increment by block size</p>
                    <p><strong>Step 4:</strong> First host = subnet + 1, last host = next subnet - 2</p>
                    <p><strong>Step 5:</strong> Broadcast = next subnet - 1</p>
                </div>
            `,
            keyPoints: [
                "Subnetting divides large networks into smaller ones",
                "Number of subnets = 2^(borrowed bits)",
                "Hosts per subnet = 2^(remaining host bits) - 2",
                "Block size = 256 - subnet mask in interesting octet",
                "Subnet addresses increment by block size"
            ]
        },

        {
            title: "4.5 Subnetting Practice Scenarios",
            content: `
                <h4>Scenario 1: Class C Subnetting</h4>
                <p><strong>Problem:</strong> You have network 192.168.10.0/24. You need 6 subnets with at least 25 hosts each.</p>
                
                <p><strong>Step 1:</strong> Need 6 subnets → borrow 3 bits (2³ = 8 subnets)</p>
                <p><strong>Step 2:</strong> New mask: /24 + 3 = /27 (255.255.255.224)</p>
                <p><strong>Step 3:</strong> Block size = 256 - 224 = 32</p>
                <p><strong>Step 4:</strong> Hosts per subnet = 2⁵ - 2 = 32 - 2 = 30 ✓ meets requirement</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Subnet</th>
                        <th style="padding:10px; border:1px solid #ddd;">Network Address</th>
                        <th style="padding:10px; border:1px solid #ddd;">First Host</th>
                        <th style="padding:10px; border:1px solid #ddd;">Last Host</th>
                        <th style="padding:10px; border:1px solid #ddd;">Broadcast</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">1</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.10.0</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.10.1</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.10.30</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.10.31</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">2</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.10.32</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.10.33</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.10.62</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.10.63</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">3</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.10.64</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.10.65</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.10.94</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.10.95</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">4</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.10.96</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.10.97</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.10.126</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.10.127</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">5</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.10.128</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.10.129</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.10.158</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.10.159</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">6</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.10.160</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.10.161</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.10.190</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.10.191</td>
                    </tr>
                </table>
                
                <h4>Scenario 2: Class B Subnetting</h4>
                <p><strong>Problem:</strong> Network 172.16.0.0/16 needs 50 subnets with at least 500 hosts each.</p>
                
                <p><strong>Step 1:</strong> Need 50 subnets → borrow 6 bits (2⁶ = 64 subnets)</p>
                <p><strong>Step 2:</strong> New mask: /16 + 6 = /22 (255.255.252.0)</p>
                <p><strong>Step 3:</strong> Block size in 3rd octet = 256 - 252 = 4</p>
                <p><strong>Step 4:</strong> Hosts per subnet = 2¹⁰ - 2 = 1024 - 2 = 1022 ✓ meets requirement</p>
                
                <h4>Scenario 3: VLSM (Variable Length Subnet Mask)</h4>
                <p><strong>Problem:</strong> You have 192.168.1.0/24 and need:</p>
                <ul>
                    <li>Subnet A: 50 hosts</li>
                    <li>Subnet B: 25 hosts</li>
                    <li>Subnet C: 10 hosts</li>
                </ul>
                
                <p><strong>Solution (largest to smallest):</strong></p>
                <ol>
                    <li><strong>Subnet A (50 hosts):</strong> Need 6 host bits (2⁶-2=62) → /26, block 64
                        <br>Network: 192.168.1.0/26 (range: 1-62, broadcast 63)</li>
                    <li><strong>Subnet B (25 hosts):</strong> Need 5 host bits (2⁵-2=30) → /27, block 32
                        <br>Network: 192.168.1.64/27 (range: 65-94, broadcast 95)</li>
                    <li><strong>Subnet C (10 hosts):</strong> Need 4 host bits (2⁴-2=14) → /28, block 16
                        <br>Network: 192.168.1.96/28 (range: 97-110, broadcast 111)</li>
                </ol>
            `,
            keyPoints: [
                "Always meet the largest host requirement first",
                "Block size = 256 - subnet mask in interesting octet",
                "Subnets must not overlap",
                "VLSM allows different subnet sizes",
                "Plan from largest to smallest subnet"
            ]
        },

        {
            title: "4.6 Designing IP Addressing Schemes (Apply)",
            content: `
                <h4>Blueprint Focus: Apply - Designing IP Schemes</h4>
                
                <h4>Design Process</h4>
                <ol>
                    <li><strong>Gather requirements:</strong> Number of subnets, hosts per subnet, future growth</li>
                    <li><strong>Choose appropriate private address space:</strong> Class A (10.0.0.0/8), Class B (172.16.0.0/12), Class C (192.168.0.0/16)</li>
                    <li><strong>Calculate subnet mask:</strong> Based on largest subnet requirement</li>
                    <li><strong>Document addressing scheme:</strong> Create a table of subnets, ranges, and purposes</li>
                </ol>
                
                <h4>Design Example 1: Small Office Network</h4>
                <p><strong>Requirements:</strong> 4 departments (Admin, Sales, IT, Guest) with up to 20 devices each</p>
                
                <p><strong>Solution using 192.168.1.0/24:</strong></p>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Department</th>
                        <th style="padding:10px; border:1px solid #ddd;">Subnet</th>
                        <th style="padding:10px; border:1px solid #ddd;">Mask</th>
                        <th style="padding:10px; border:1px solid #ddd;">Host Range</th>
                        <th style="padding:10px; border:1px solid #ddd;">Broadcast</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Admin</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.1.0/27</td>
                        <td style="padding:8px; border:1px solid #ddd;">255.255.255.224</td>
                        <td style="padding:8px; border:1px solid #ddd;">1-30</td>
                        <td style="padding:8px; border:1px solid #ddd;">31</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Sales</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.1.32/27</td>
                        <td style="padding:8px; border:1px solid #ddd;">255.255.255.224</td>
                        <td style="padding:8px; border:1px solid #ddd;">33-62</td>
                        <td style="padding:8px; border:1px solid #ddd;">63</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">IT</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.1.64/27</td>
                        <td style="padding:8px; border:1px solid #ddd;">255.255.255.224</td>
                        <td style="padding:8px; border:1px solid #ddd;">65-94</td>
                        <td style="padding:8px; border:1px solid #ddd;">95</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Guest</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.1.96/27</td>
                        <td style="padding:8px; border:1px solid #ddd;">255.255.255.224</td>
                        <td style="padding:8px; border:1px solid #ddd;">97-126</td>
                        <td style="padding:8px; border:1px solid #ddd;">127</td>
                    </tr>
                </table>
                
                <h4>Design Example 2: University Department Network</h4>
                <p><strong>Requirements:</strong> 10 departments, each with up to 100 devices</p>
                
                <p><strong>Solution using 172.16.0.0/16:</strong></p>
                <ul>
                    <li>Need 10 subnets → borrow 4 bits (2⁴=16 subnets)</li>
                    <li>New mask: /16 + 4 = /20 (255.255.240.0)</li>
                    <li>Block size in 3rd octet: 16</li>
                    <li>Hosts per subnet: 2¹²-2 = 4094 (more than enough)</li>
                </ul>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Dept</th>
                        <th style="padding:10px; border:1px solid #ddd;">Network</th>
                        <th style="padding:10px; border:1px solid #ddd;">Host Range</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">CS</td>
                        <td style="padding:8px; border:1px solid #ddd;">172.16.0.0/20</td>
                        <td style="padding:8px; border:1px solid #ddd;">172.16.0.1 - 172.16.15.254</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Engineering</td>
                        <td style="padding:8px; border:1px solid #ddd;">172.16.16.0/20</td>
                        <td style="padding:8px; border:1px solid #ddd;">172.16.16.1 - 172.16.31.254</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Business</td>
                        <td style="padding:8px; border:1px solid #ddd;">172.16.32.0/20</td>
                        <td style="padding:8px; border:1px solid #ddd;">172.16.32.1 - 172.16.47.254</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Choose private address space based on size",
                "Always plan for future growth (leave spare subnets)",
                "Document your scheme clearly",
                "Use VLSM when subnets have different size requirements",
                "Start with largest subnet requirement"
            ]
        },

        {
            title: "4.7 Analyzing Subnetting Scenarios (Analyze)",
            content: `
                <h4>Blueprint Focus: Analyze - Evaluating Subnetting Scenarios</h4>
                
                <h4>Scenario 1: Is This Subnet Valid?</h4>
                <p><strong>Problem:</strong> Is 192.168.5.130/27 a valid host address? What network does it belong to?</p>
                
                <p><strong>Analysis:</strong></p>
                <ul>
                    <li>/27 means mask 255.255.255.224, block size 32</li>
                    <li>Subnets: 0, 32, 64, 96, 128, 160, 192, 224</li>
                    <li>130 falls in subnet 128 (128-159)</li>
                    <li>Network address: 192.168.5.128</li>
                    <li>Valid host range: 129-158</li>
                    <li>130 is within range ✓ VALID</li>
                </ul>
                
                <h4>Scenario 2: Analyzing Addressing Scheme</h4>
                <p><strong>Problem:</strong> A network administrator assigned 192.168.2.64/28 to a department. Is this correct?</p>
                
                <p><strong>Analysis:</strong></p>
                <ul>
                    <li>/28 means mask 255.255.255.240, block size 16</li>
                    <li>Subnets should be multiples of 16: 0,16,32,48,64,80,96...</li>
                    <li>64 is a valid subnet address ✓</li>
                    <li>Network address is correct</li>
                    <li>Valid host range: 65-78</li>
                    <li>Broadcast: 79</li>
                </ul>
                
                <h4>Scenario 3: Analyzing Subnet Mask Choice</h4>
                <p><strong>Problem:</strong> A company uses 255.255.255.240 (/28) for all subnets. Their largest department needs 20 hosts. Is this appropriate?</p>
                
                <p><strong>Analysis:</strong></p>
                <ul>
                    <li>/28 provides 2⁴-2 = 14 hosts</li>
                    <li>14 < 20, so NOT enough for the large department</li>
                    <li>They need at least /27 (30 hosts) for that department</li>
                    <li>Recommendation: Use VLSM - /27 for large dept, /28 for smaller ones</li>
                </ul>
                
                <h4>Scenario 4: Analyzing Overlapping Subnets</h4>
                <p><strong>Problem:</strong> Two subnets are configured: 192.168.1.64/26 and 192.168.1.128/27. Do they overlap?</p>
                
                <p><strong>Analysis:</strong></p>
                <ul>
                    <li>/26 block size 64, covers 64-127</li>
                    <li>/27 block size 32, covers 128-159</li>
                    <li>No overlap (first ends at 127, second starts at 128) ✓</li>
                </ul>
                
                <h4>Scenario 5: Analyzing Growth Capacity</h4>
                <p><strong>Problem:</strong> A subnet 10.1.1.0/24 currently has 50 hosts. Can it grow to 200 hosts?</p>
                
                <p><strong>Analysis:</strong></p>
                <ul>
                    <li>/24 provides 254 hosts</li>
                    <li>Currently using 50, room for 204 more</li>
                    <li>200 additional would total 250 hosts</li>
                    <li>250 ≤ 254, so YES it can grow to 200 hosts</li>
                </ul>
                
                <h4>Scenario 6: Analyzing Router Interface Addressing</h4>
                <p><strong>Problem:</strong> A router interface is configured with IP 172.20.15.254/22. What's wrong?</p>
                
                <p><strong>Analysis:</strong></p>
                <ul>
                    <li>/22 mask 255.255.252.0, block size 4 in 3rd octet</li>
                    <li>Subnets: 172.20.0.0, 172.20.4.0, 172.20.8.0, 172.20.12.0, 172.20.16.0...</li>
                    <li>15 is not a multiple of 4, so this is not a valid network address</li>
                    <li>The address should be a host address, but the configuration might be wrong</li>
                    <li>Correct network should be 172.20.12.0/22</li>
                </ul>
            `,
            keyPoints: [
                "Check if address is in valid host range",
                "Verify subnet addresses are multiples of block size",
                "Ensure host count meets requirements",
                "Check for overlapping subnets",
                "Plan for future growth"
            ]
        },

        {
            title: "4.8 Evaluating Subnetting Strategies (Evaluate)",
            content: `
                <h4>Blueprint Focus: Evaluate - Comparing Subnetting Approaches</h4>
                
                <h4>Evaluation Factors</h4>
                <ul>
                    <li><strong>IP utilization efficiency:</strong> How many addresses are wasted?</li>
                    <li><strong>Scalability:</strong> Can the scheme grow?</li>
                    <li><strong>Manageability:</strong> How easy is it to administer?</li>
                    <li><strong>Performance:</strong> Impact on network traffic</li>
                    <li><strong>Security:</strong> Isolation between subnets</li>
                </ul>
                
                <h4>Comparison: Fixed-Length vs Variable-Length Subnet Masks</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Aspect</th>
                        <th style="padding:10px; border:1px solid #ddd;">Fixed-Length (FLSM)</th>
                        <th style="padding:10px; border:1px solid #ddd;">Variable-Length (VLSM)</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Description</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">All subnets same size</td>
                        <td style="padding:8px; border:1px solid #ddd;">Subnets can be different sizes</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>IP Efficiency</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Low - wastes addresses</td>
                        <td style="padding:8px; border:1px solid #ddd;">High - matches actual needs</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Complexity</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Simple</td>
                        <td style="padding:8px; border:1px solid #ddd;">More complex</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>When to use</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">All subnets similar size</td>
                        <td style="padding:8px; border:1px solid #ddd;">Subnets have different requirements</td>
                    </tr>
                </table>
                
                <h4>Case Study 1: Small Business Network</h4>
                <p><strong>Requirements:</strong> 4 departments: Admin (5 hosts), Sales (15 hosts), IT (8 hosts), Guest (25 hosts). Network: 192.168.1.0/24</p>
                
                <p><strong>Option A: FLSM with /27</strong></p>
                <ul>
                    <li>Each subnet: 30 hosts (overkill for small departments)</li>
                    <li>Wasted addresses: Admin (25 wasted), Sales (15 wasted), IT (22 wasted), Guest (5 wasted)</li>
                    <li>Total waste: 67 addresses out of 120 used = 56% waste</li>
                </ul>
                
                <p><strong>Option B: VLSM</strong></p>
                <ul>
                    <li>Guest (25 hosts): /27 (30 hosts) - 192.168.1.0/27</li>
                    <li>Sales (15 hosts): /28 (14 hosts) - 192.168.1.32/28</li>
                    <li>IT (8 hosts): /28 (14 hosts) - 192.168.1.48/28</li>
                    <li>Admin (5 hosts): /29 (6 hosts) - 192.168.1.64/29</li>
                </ul>
                
                <p><strong>Evaluation:</strong> VLSM is clearly better here - much less waste (only 10 addresses wasted vs 67), and leaves room for growth.</p>
                
                <h4>Case Study 2: Large Enterprise</h4>
                <p><strong>Requirements:</strong> 50 subnets, each needs about 200 hosts. Network: 172.16.0.0/16</p>
                
                <p><strong>Option A: /24 subnets</strong></p>
                <ul>
                    <li>/24 provides 254 hosts per subnet</li>
                    <li>Can create 256 subnets (more than enough)</li>
                    <li>Waste per subnet: 54 addresses (21% waste)</li>
                </ul>
                
                <p><strong>Option B: /23 subnets</strong></p>
                <ul>
                    <li>/23 provides 510 hosts per subnet</li>
                    <li>Can create 128 subnets</li>
                    <li>Waste per subnet: 310 addresses (61% waste)</li>
                </ul>
                
                <p><strong>Evaluation:</strong> /24 is better here - less waste while still meeting requirements. /23 wastes too many addresses.</p>
                
                <h4>Case Study 3: Future Growth Planning</h4>
                <p><strong>Scenario:</strong> A company expects to double in size in 2 years. Current network uses 192.168.0.0/22 (1022 hosts). Should they plan for expansion?</p>
                
                <p><strong>Evaluation:</strong></p>
                <ul>
                    <li>Current usage: 400 hosts</li>
                    <li>Expected in 2 years: 800 hosts</li>
                    <li>/22 provides 1022 hosts - enough for expected growth</li>
                    <li>However, if growth exceeds expectations, they'll need to renumber</li>
                    <li>Recommendation: Use /21 (2046 hosts) to provide more room for unexpected growth</li>
                </ul>
                
                <h4>Decision Framework</h4>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
When choosing subnetting strategy, consider:

1. Current requirements
2. Future growth projections (2-5 years)
3. Administrative overhead
4. IP address conservation needs
5. Network segmentation requirements

For small networks with varying sizes → VLSM
For large networks with uniform sizes → FLSM
For critical future growth → Leave spare capacity
                </pre>
            `,
            keyPoints: [
                "FLSM: simpler but wastes addresses",
                "VLSM: efficient but more complex",
                "Evaluate based on waste %, growth needs, manageability",
                "Always consider future growth",
                "Balance efficiency against simplicity"
            ]
        }
    ],

    summary: `
        <h3>Chapter 4 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>IP Address:</strong> 32-bit number in dotted-decimal, network + host portions</li>
            <li><strong>Address Classes:</strong> A (1-126, /8), B (128-191, /16), C (192-223, /24)</li>
            <li><strong>Special Addresses:</strong> Network (host all 0s), Broadcast (host all 1s), Private (10.x, 172.16-31.x, 192.168.x)</li>
            <li><strong>Subnet Mask:</strong> Separates network and host, CIDR notation /n</li>
            <li><strong>Subnetting Formulas:</strong> Subnets = 2^s, Hosts = 2^h - 2, Block size = 256 - mask</li>
            <li><strong>Design (Apply):</strong> Plan addressing schemes based on requirements</li>
            <li><strong>Analysis (Analyze):</strong> Verify subnet validity, check for overlaps, ensure host counts</li>
            <li><strong>Evaluation (Evaluate):</strong> Compare FLSM vs VLSM, assess efficiency, plan for growth</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What is the network address and broadcast address for host 192.168.5.35/27?",
            answer: "/27 mask 255.255.255.224, block 32. Subnet 32 (32-63). Network: 192.168.5.32, Broadcast: 192.168.5.63"
        },
        {
            question: "You need 6 subnets from 172.16.0.0/16 with at least 1000 hosts each. What mask should you use?",
            answer: "Need 6 subnets → borrow 3 bits (8 subnets). Mask /19 (255.255.224.0). Hosts = 2^13-2 = 8190 ✓"
        },
        {
            question: "Are 192.168.1.128/26 and 192.168.1.160/28 overlapping?",
            answer: "/26 covers 128-191, /28 covers 160-175. Yes, they overlap (160-175 in both)."
        },
        {
            question: "Design a subnet scheme for 192.168.10.0/24 with departments: Sales (50 hosts), HR (20 hosts), IT (10 hosts), Guest (5 hosts).",
            answer: "Sales: /26 (64), HR: /27 (32), IT: /28 (16), Guest: /29 (8). Addresses: 0/26, 64/27, 96/28, 112/29"
        },
        {
            question: "Compare FLSM and VLSM for a network with varying department sizes.",
            answer: "VLSM is better - matches actual needs, wastes fewer addresses. FLSM simpler but inefficient."
        }
    ],

    quickTips: [
        "Network address: host bits all 0",
        "Broadcast address: host bits all 1",
        "Hosts per subnet = 2^h - 2",
        "Block size = 256 - subnet mask",
        "Subnets start at 0, increment by block size",
        "When in doubt, convert to binary!",
        "VLSM: allocate largest subnets first"
    ],

    commonMistakes: [
        "❌ Forgetting to subtract 2 for network and broadcast",
        "❌ Using invalid subnet addresses (not multiples of block size)",
        "❌ Overlapping subnets",
        "❌ Not planning for future growth",
        "❌ Using /31 for point-to-point links (forgetting you need 2 usable addresses)",
        "❌ Confusing /24, /16, /8 host counts"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 4:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>3 questions</strong> distributed as:</p>
        <ul>
            <li><strong>1 Apply question:</strong> Designing IP addressing schemes</li>
            <li><strong>1 Analyze question:</strong> Analyzing subnetting scenarios</li>
            <li><strong>1 Evaluate question:</strong> Evaluating subnetting strategies</li>
        </ul>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>Apply:</strong> Create subnetting tables, assign addresses to departments, choose appropriate masks</li>
            <li><strong>Analyze:</strong> Determine if addresses are valid, check for overlaps, verify host counts</li>
            <li><strong>Evaluate:</strong> Compare FLSM vs VLSM, assess efficiency, make recommendations for growth</li>
        </ol>
        
        <h4>Practice Apply Questions:</h4>
        <ul>
            <li>Design a subnet scheme for a company with given department sizes</li>
            <li>Calculate subnet mask for given subnet and host requirements</li>
            <li>Create addressing table with network addresses, ranges, and broadcast</li>
        </ul>
        
        <h4>Practice Analyze Questions:</h4>
        <ul>
            <li>Is 10.5.4.130/25 a valid host? What network does it belong to?</li>
            <li>Do these two subnets overlap? 172.20.15.0/24 and 172.20.16.0/23</li>
            <li>Can a /28 support 15 hosts? Why or why not?</li>
        </ul>
        
        <h4>Practice Evaluate Questions:</h4>
        <ul>
            <li>Compare using /24 vs /23 for 50 subnets with 200 hosts each</li>
            <li>Evaluate VLSM vs FLSM for a network with varying requirements</li>
            <li>Assess a proposed addressing scheme and recommend improvements</li>
        </ul>
    `
};