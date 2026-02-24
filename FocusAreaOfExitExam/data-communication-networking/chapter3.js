// ===============================
// FOCUS AREA: DATA COMMUNICATION AND COMPUTER NETWORKING - CHAPTER 3
// Network Layer and Routing
// Based on Ministry of Education Blueprint
// File Path: FocusAreaOfExitExam/data-communication-networking/chapter3.js
// ===============================

window.focusAreaNetworkingChapter3 = {
    title: "Chapter 3: Network Layer and Routing",
    
    description: "Comprehensive coverage of IP addressing, routing protocols, and network layer concepts.",
    
    blueprint: {
        totalQuestions: 3,
        cognitiveLevels: {
            understand: 1,
            apply: 1,
            analyze: 1
        },
        topics: [
            "IP addressing and subnetting",
            "Routing protocols (RIP, OSPF, BGP)",
            "Network layer protocols (IP, ICMP)",
            "Router configuration and operation"
        ]
    },

    learningObjectives: [
        "Understand IP addressing structure and classes",
        "Explain how routing protocols work and their differences",
        "Apply subnetting concepts to design IP schemes",
        "Analyze routing tables and path selection",
        "Compare distance vector and link state routing protocols"
    ],

    sections: [
        {
            title: "3.1 Network Layer Overview",
            content: `
                <h4>What is the Network Layer?</h4>
                <p>The network layer is responsible for host-to-host communication and routing packets across different networks. It is Layer 3 in the OSI model.</p>
                
                <h4>Key Functions</h4>
                <ul>
                    <li><strong>Logical Addressing:</strong> IP addresses identify devices</li>
                    <li><strong>Routing:</strong> Determining the best path for data</li>
                    <li><strong>Packet Forwarding:</strong> Moving packets from input to output</li>
                    <li><strong>Fragmentation:</strong> Splitting packets for different MTUs</li>
                </ul>
                
                <h4>Key Protocols</h4>
                <ul>
                    <li><strong>IP (Internet Protocol):</strong> Main protocol for addressing and routing</li>
                    <li><strong>ICMP (Internet Control Message Protocol):</strong> Error reporting and diagnostics</li>
                    <li><strong>ARP (Address Resolution Protocol):</strong> Resolves IP to MAC addresses</li>
                    <li><strong>Routing Protocols:</strong> RIP, OSPF, BGP, EIGRP</li>
                </ul>
                
                <div class="key-points-box">
                    <p><strong>🔑 Key Point:</strong> The network layer enables communication between devices on different networks through logical addressing and routing.</p>
                </div>
            `,
            keyPoints: [
                "Network layer = Layer 3 in OSI model",
                "Responsible for logical addressing and routing",
                "Key protocols: IP, ICMP, ARP, routing protocols",
                "Packets are routed based on IP addresses"
            ]
        },

        {
            title: "3.2 IPv4 Addressing Review",
            content: `
                <h4>IPv4 Address Structure</h4>
                <p>32-bit address written in dotted decimal notation (e.g., 192.168.1.1). Divided into network and host portions.</p>
                
                <h4>Address Classes (Review)</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Class</th>
                        <th style="padding:10px; border:1px solid #ddd;">First Octet</th>
                        <th style="padding:10px; border:1px solid #ddd;">Default Mask</th>
                        <th style="padding:10px; border:1px solid #ddd;">Hosts per Network</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">A</td>
                        <td style="padding:8px; border:1px solid #ddd;">1-126</td>
                        <td style="padding:8px; border:1px solid #ddd;">/8 (255.0.0.0)</td>
                        <td style="padding:8px; border:1px solid #ddd;">16,777,214</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">B</td>
                        <td style="padding:8px; border:1px solid #ddd;">128-191</td>
                        <td style="padding:8px; border:1px solid #ddd;">/16 (255.255.0.0)</td>
                        <td style="padding:8px; border:1px solid #ddd;">65,534</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">C</td>
                        <td style="padding:8px; border:1px solid #ddd;">192-223</td>
                        <td style="padding:8px; border:1px solid #ddd;">/24 (255.255.255.0)</td>
                        <td style="padding:8px; border:1px solid #ddd;">254</td>
                    </tr>
                </table>
                
                <h4>Special Addresses</h4>
                <ul>
                    <li><strong>Network Address:</strong> Host bits all 0 (e.g., 192.168.1.0/24)</li>
                    <li><strong>Broadcast Address:</strong> Host bits all 1 (e.g., 192.168.1.255/24)</li>
                    <li><strong>Loopback:</strong> 127.0.0.0/8 (testing local communication)</li>
                    <li><strong>Private Addresses:</strong> 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16</li>
                </ul>
            `,
            keyPoints: [
                "IPv4: 32 bits, dotted decimal",
                "Class A: /8, Class B: /16, Class C: /24",
                "Network address: host bits all 0",
                "Broadcast address: host bits all 1",
                "Private addresses: 10.x.x.x, 172.16-31.x.x, 192.168.x.x"
            ]
        },

        {
            title: "3.3 Subnetting and CIDR",
            content: `
                <h4>What is Subnetting?</h4>
                <p>Dividing a large network into smaller subnetworks for better efficiency, security, and management.</p>
                
                <h4>CIDR Notation</h4>
                <p>Classless Inter-Domain Routing uses /n notation (e.g., /24) instead of classful masks.</p>
                
                <h4>Subnetting Formulas</h4>
                <ul>
                    <li><strong>Number of subnets:</strong> 2^s (where s = borrowed bits)</li>
                    <li><strong>Hosts per subnet:</strong> 2^h - 2 (where h = remaining host bits)</li>
                    <li><strong>Block size:</strong> 256 - subnet mask in interesting octet</li>
                </ul>
                
                <h4>Example: Subnetting 192.168.1.0/24 into 4 subnets</h4>
                <ul>
                    <li>Need 4 subnets → borrow 2 bits (2² = 4)</li>
                    <li>New mask: /26 (255.255.255.192)</li>
                    <li>Block size: 256 - 192 = 64</li>
                    <li>Subnets: 0, 64, 128, 192</li>
                </ul>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Subnet</th>
                        <th style="padding:10px; border:1px solid #ddd;">Network</th>
                        <th style="padding:10px; border:1px solid #ddd;">Host Range</th>
                        <th style="padding:10px; border:1px solid #ddd;">Broadcast</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">1</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.1.0/26</td>
                        <td style="padding:8px; border:1px solid #ddd;">1-62</td>
                        <td style="padding:8px; border:1px solid #ddd;">63</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">2</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.1.64/26</td>
                        <td style="padding:8px; border:1px solid #ddd;">65-126</td>
                        <td style="padding:8px; border:1px solid #ddd;">127</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">3</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.1.128/26</td>
                        <td style="padding:8px; border:1px solid #ddd;">129-190</td>
                        <td style="padding:8px; border:1px solid #ddd;">191</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">4</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.1.192/26</td>
                        <td style="padding:8px; border:1px solid #ddd;">193-254</td>
                        <td style="padding:8px; border:1px solid #ddd;">255</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Subnetting divides networks for efficiency",
                "CIDR uses /n notation",
                "Number of subnets = 2^borrowed bits",
                "Hosts per subnet = 2^host bits - 2",
                "Block size = 256 - subnet mask"
            ]
        },

        {
            title: "3.4 Routing Fundamentals",
            content: `
                <h4>What is Routing?</h4>
                <p>Routing is the process of selecting paths across a network to send data packets from source to destination.</p>
                
                <h4>Routing vs Forwarding</h4>
                <ul>
                    <li><strong>Routing:</strong> Building the map (control plane)</li>
                    <li><strong>Forwarding:</strong> Moving packets using the map (data plane)</li>
                </ul>
                
                <h4>Routing Tables</h4>
                <p>Each router maintains a routing table with entries for destination networks, next hop, and metrics.</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Destination     Gateway         Interface   Metric
192.168.1.0     0.0.0.0         eth0        0
10.0.0.0        192.168.1.1     eth0        1
0.0.0.0/0       192.168.1.254   eth0        10 (default route)
                </pre>
                
                <h4>Types of Routing</h4>
                <ul>
                    <li><strong>Static Routing:</strong> Manually configured by administrator</li>
                    <li><strong>Dynamic Routing:</strong> Automatically updated using routing protocols</li>
                    <li><strong>Default Routing:</strong> Used for unknown destinations (gateway of last resort)</li>
                </ul>
                
                <h4>Routing Metrics</h4>
                <p>Routers use metrics to determine the best path:</p>
                <ul>
                    <li><strong>Hop count:</strong> Number of routers to pass through</li>
                    <li><strong>Bandwidth:</strong> Speed of the link</li>
                    <li><strong>Delay:</strong> Time to reach destination</li>
                    <li><strong>Load:</strong> Current traffic on the link</li>
                    <li><strong>Reliability:</strong> Error rate of the link</li>
                    <li><strong>Cost:</strong> Administrative value</li>
                </ul>
            `,
            keyPoints: [
                "Routing builds the path map",
                "Forwarding moves packets using the map",
                "Routing tables store destination and next hop info",
                "Static = manual, Dynamic = automatic",
                "Metrics determine best path (hop count, bandwidth, delay)"
            ]
        },

        {
            title: "3.5 Dynamic Routing Protocols",
            content: `
                <h4>Categories of Routing Protocols</h4>
                
                <h4>1. Interior Gateway Protocols (IGP)</h4>
                <p>Used within an autonomous system:</p>
                
                <h5>Distance Vector Protocols</h5>
                <ul>
                    <li><strong>RIP (Routing Information Protocol):</strong> Uses hop count (max 15), updates every 30 seconds</li>
                    <li><strong>RIPv2:</strong> Supports VLSM and authentication</li>
                    <li><strong>EIGRP:</strong> Cisco proprietary, hybrid protocol</li>
                </ul>
                
                <h5>Link State Protocols</h5>
                <ul>
                    <li><strong>OSPF (Open Shortest Path First):</strong> Uses Dijkstra algorithm, fast convergence</li>
                    <li><strong>IS-IS:</strong> Similar to OSPF, used in ISP networks</li>
                </ul>
                
                <h4>2. Exterior Gateway Protocols (EGP)</h4>
                <p>Used between autonomous systems:</p>
                <ul>
                    <li><strong>BGP (Border Gateway Protocol):</strong> Path vector protocol, used for internet routing</li>
                </ul>
                
                <h4>Routing Protocol Comparison</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Protocol</th>
                        <th style="padding:10px; border:1px solid #ddd;">Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Algorithm</th>
                        <th style="padding:10px; border:1px solid #ddd;">Metric</th>
                        <th style="padding:10px; border:1px solid #ddd;">Convergence</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">RIP</td>
                        <td style="padding:8px; border:1px solid #ddd;">Distance Vector</td>
                        <td style="padding:8px; border:1px solid #ddd;">Bellman-Ford</td>
                        <td style="padding:8px; border:1px solid #ddd;">Hop count</td>
                        <td style="padding:8px; border:1px solid #ddd;">Slow</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">OSPF</td>
                        <td style="padding:8px; border:1px solid #ddd;">Link State</td>
                        <td style="padding:8px; border:1px solid #ddd;">Dijkstra (SPF)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Cost (bandwidth)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Fast</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">EIGRP</td>
                        <td style="padding:8px; border:1px solid #ddd;">Advanced DV</td>
                        <td style="padding:8px; border:1px solid #ddd;">DUAL</td>
                        <td style="padding:8px; border:1px solid #ddd;">Composite</td>
                        <td style="padding:8px; border:1px solid #ddd;">Very Fast</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">BGP</td>
                        <td style="padding:8px; border:1px solid #ddd;">Path Vector</td>
                        <td style="padding:8px; border:1px solid #ddd;">Custom</td>
                        <td style="padding:8px; border:1px solid #ddd;">Path attributes</td>
                        <td style="padding:8px; border:1px solid #ddd;">Slow</td>
                    </tr>
                </table>
                
                <div class="key-points-box">
                    <p><strong>🔑 Key Point:</strong> Distance vector protocols know the direction and distance, link state protocols know the entire network topology.</p>
                </div>
            `,
            keyPoints: [
                "IGP: Interior (RIP, OSPF, EIGRP)",
                "EGP: Exterior (BGP)",
                "Distance Vector: knows next hop (RIP)",
                "Link State: knows full topology (OSPF)",
                "RIP max hop count = 15",
                "OSPF uses Dijkstra algorithm",
                "BGP used for internet routing"
            ]
        },

        {
            title: "3.6 RIP (Routing Information Protocol)",
            content: `
                <h4>RIP Overview</h4>
                <p>One of the oldest distance vector routing protocols, still used in small networks.</p>
                
                <h4>Key Features</h4>
                <ul>
                    <li><strong>Metric:</strong> Hop count (max 15, 16 = unreachable)</li>
                    <li><strong>Updates:</strong> Broadcast every 30 seconds</li>
                    <li><strong>Hold-down timer:</strong> 180 seconds</li>
                    <li><strong>Split horizon:</strong> Prevents routing loops</li>
                    <li><strong>Route poisoning:</strong> Sets metric to 16 for unreachable routes</li>
                </ul>
                
                <h4>RIP Versions</h4>
                <ul>
                    <li><strong>RIPv1:</strong> Classful, no VLSM support, broadcast updates</li>
                    <li><strong>RIPv2:</strong> Classless, supports VLSM, multicast updates (224.0.0.9)</li>
                </ul>
                
                <h4>RIP Timers</h4>
                <ul>
                    <li><strong>Update timer:</strong> 30 seconds</li>
                    <li><strong>Invalid timer:</strong> 180 seconds (route marked invalid if no update)</li>
                    <li><strong>Hold-down timer:</strong> 180 seconds (ignore better routes)</li>
                    <li><strong>Flush timer:</strong> 240 seconds (remove route)</li>
                </ul>
                
                <h4>RIP Advantages and Disadvantages</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Advantages</th>
                        <th style="padding:10px; border:1px solid #ddd;">Disadvantages</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Simple to configure</td>
                        <td style="padding:8px; border:1px solid #ddd;">Limited to 15 hops</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Widely supported</td>
                        <td style="padding:8px; border:1px solid #ddd;">Slow convergence</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Low overhead</td>
                        <td style="padding:8px; border:1px solid #ddd;">Classful (RIPv1)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Good for small networks</td>
                        <td style="padding:8px; border:1px solid #ddd;">Bandwidth waste (full updates)</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "RIP: Distance vector, hop count metric",
                "Max hops = 15 (16 = unreachable)",
                "Updates every 30 seconds",
                "RIPv2 supports VLSM and CIDR",
                "Slow convergence, simple configuration"
            ]
        },

        {
            title: "3.7 OSPF (Open Shortest Path First)",
            content: `
                <h4>OSPF Overview</h4>
                <p>A link state routing protocol that uses the Dijkstra SPF algorithm to compute the shortest path.</p>
                
                <h4>Key Features</h4>
                <ul>
                    <li><strong>Link State:</strong> Each router knows entire topology</li>
                    <li><strong>Metric:</strong> Cost (usually based on bandwidth)</li>
                    <li><strong>Fast convergence:</strong> Updates sent immediately on change</li>
                    <li><strong>Classless:</strong> Supports VLSM and CIDR</li>
                    <li><strong>Authentication:</strong> Supports MD5 authentication</li>
                    <li><strong>Hierarchical:</strong> Can be divided into areas</li>
                </ul>
                
                <h4>OSPF Terminology</h4>
                <ul>
                    <li><strong>LSA (Link State Advertisement):</strong> Describes router's links</li>
                    <li><strong>LSDB (Link State Database):</strong> Collection of all LSAs</li>
                    <li><strong>SPF Algorithm:</strong> Dijkstra's algorithm to compute shortest path</li>
                    <li><strong>Area:</strong> Group of routers (Area 0 = backbone)</li>
                    <li><strong>DR/BDR:</strong> Designated Router/Backup DR on multi-access networks</li>
                </ul>
                
                <h4>OSPF Areas</h4>
                <ul>
                    <li><strong>Area 0 (Backbone):</strong> All areas must connect to backbone</li>
                    <li><strong>Standard Area:</strong> Normal area connected to backbone</li>
                    <li><strong>Stub Area:</strong> Blocks external LSAs</li>
                    <li><strong>Totally Stubby:</strong> Blocks external and summary LSAs</li>
                    <li><strong>NSSA:</strong> Not-So-Stubby Area</li>
                </ul>
                
                <h4>OSPF Network Types</h4>
                <ul>
                    <li><strong>Broadcast:</strong> Ethernet (elects DR/BDR)</li>
                    <li><strong>Point-to-Point:</strong> Serial links (no DR/BDR)</li>
                    <li><strong>Non-Broadcast:</strong> Frame Relay (neighbor configuration required)</li>
                    <li><strong>Point-to-Multipoint:</strong> Treats as multiple point-to-point links</li>
                </ul>
                
                <h4>OSPF Advantages and Disadvantages</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Advantages</th>
                        <th style="padding:10px; border:1px solid #ddd;">Disadvantages</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Fast convergence</td>
                        <td style="padding:8px; border:1px solid #ddd;">Complex configuration</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Classless (VLSM support)</td>
                        <td style="padding:8px; border:1px solid #ddd;">High memory/CPU usage</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Scalable for large networks</td>
                        <td style="padding:8px; border:1px solid #ddd;">More overhead than RIP</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Supports authentication</td>
                        <td style="padding:8px; border:1px solid #ddd;">Requires careful planning</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "OSPF: Link state, Dijkstra SPF algorithm",
                "Metric = Cost (based on bandwidth)",
                "Fast convergence, supports VLSM",
                "Areas improve scalability (Area 0 backbone)",
                "DR/BDR elected on broadcast networks",
                "More complex but more scalable than RIP"
            ]
        },

        {
            title: "3.8 BGP (Border Gateway Protocol)",
            content: `
                <h4>BGP Overview</h4>
                <p>The protocol that runs the internet - used for routing between autonomous systems (AS).</p>
                
                <h4>Key Concepts</h4>
                <ul>
                    <li><strong>AS (Autonomous System):</strong> Network under single administrative control</li>
                    <li><strong>ASN (AS Number):</strong> Unique identifier (16-bit or 32-bit)</li>
                    <li><strong>eBGP:</strong> External BGP between different ASes</li>
                    <li><strong>iBGP:</strong> Internal BGP within the same AS</li>
                </ul>
                
                <h4>BGP Attributes</h4>
                <p>BGP uses path attributes to make routing decisions:</p>
                <ul>
                    <li><strong>AS_PATH:</strong> List of ASes the route has passed through</li>
                    <li><strong>NEXT_HOP:</strong> IP address of next hop router</li>
                    <li><strong>LOCAL_PREF:</strong> Preference within AS (higher = better)</li>
                    <li><strong>MED (Multi-Exit Discriminator):</strong> Suggestion to external AS</li>
                    <li><strong>Weight:</strong> Cisco proprietary, local to router</li>
                </ul>
                
                <h4>BGP Path Selection</h4>
                <p>BGP chooses the best path in this order:</p>
                <ol>
                    <li>Highest Weight (Cisco)</li>
                    <li>Highest LOCAL_PREF</li>
                    <li>Prefer locally originated routes</li>
                    <li>Shortest AS_PATH</li>
                    <li>Lowest ORIGIN type</li>
                    <li>Lowest MED</li>
                    <li>eBGP over iBGP</li>
                    <li>Lowest IGP metric to NEXT_HOP</li>
                    <li>Lowest router ID</li>
                </ol>
                
                <h4>BGP vs OSPF</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Feature</th>
                        <th style="padding:10px; border:1px solid #ddd;">BGP</th>
                        <th style="padding:10px; border:1px solid #ddd;">OSPF</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Type</td>
                        <td style="padding:8px; border:1px solid #ddd;">Path Vector</td>
                        <td style="padding:8px; border:1px solid #ddd;">Link State</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Scope</td>
                        <td style="padding:8px; border:1px solid #ddd;">Inter-AS (internet)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Intra-AS (enterprise)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Metric</td>
                        <td style="padding:8px; border:1px solid #ddd;">Path attributes</td>
                        <td style="padding:8px; border:1px solid #ddd;">Cost (bandwidth)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Convergence</td>
                        <td style="padding:8px; border:1px solid #ddd;">Slow</td>
                        <td style="padding:8px; border:1px solid #ddd;">Fast</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "BGP: Path vector, internet routing protocol",
                "eBGP = between ASes, iBGP = within AS",
                "Uses path attributes for decision making",
                "AS_PATH length is key metric",
                "BGP is policy-based, not just shortest path"
            ]
        },

        {
            title: "3.9 ICMP and Network Diagnostics",
            content: `
                <h4>ICMP (Internet Control Message Protocol)</h4>
                <p>Used for error reporting and network diagnostics.</p>
                
                <h4>Common ICMP Message Types</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Code</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Use</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">0</td>
                        <td style="padding:8px; border:1px solid #ddd;">0</td>
                        <td style="padding:8px; border:1px solid #ddd;">Echo Reply</td>
                        <td style="padding:8px; border:1px solid #ddd;">ping response</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">3</td>
                        <td style="padding:8px; border:1px solid #ddd;">0-15</td>
                        <td style="padding:8px; border:1px solid #ddd;">Destination Unreachable</td>
                        <td style="padding:8px; border:1px solid #ddd;">Error reporting</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">8</td>
                        <td style="padding:8px; border:1px solid #ddd;">0</td>
                        <td style="padding:8px; border:1px solid #ddd;">Echo Request</td>
                        <td style="padding:8px; border:1px solid #ddd;">ping</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">11</td>
                        <td style="padding:8px; border:1px solid #ddd;">0</td>
                        <td style="padding:8px; border:1px solid #ddd;">Time Exceeded</td>
                        <td style="padding:8px; border:1px solid #ddd;">traceroute, TTL expired</td>
                    </tr>
                </table>
                
                <h4>Network Diagnostic Tools</h4>
                
                <h5>ping</h5>
                <p>Tests basic connectivity using ICMP Echo Request/Reply.</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
ping 8.8.8.8
Reply from 8.8.8.8: bytes=32 time=15ms TTL=117
                </pre>
                
                <h5>traceroute / tracert</h5>
                <p>Shows the path packets take to destination using ICMP Time Exceeded messages.</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
tracert google.com
1   1 ms   192.168.1.1
2  15 ms   10.0.0.1
3  25 ms   203.0.113.1
                </pre>
                
                <h5>pathping (Windows)</h5>
                <p>Combines ping and traceroute with packet loss statistics.</p>
                
                <h5>Other Tools</h5>
                <ul>
                    <li><strong>arp:</strong> View ARP cache</li>
                    <li><strong>netstat:</strong> View network connections and routing table</li>
                    <li><strong>nslookup / dig:</strong> DNS queries</li>
                    <li><strong>telnet:</strong> Test port connectivity</li>
                </ul>
            `,
            keyPoints: [
                "ICMP: Error reporting and diagnostics",
                "ping uses Echo Request (8) and Echo Reply (0)",
                "traceroute uses Time Exceeded (11)",
                "Destination Unreachable (3) reports routing failures",
                "TTL expired generates Time Exceeded message"
            ]
        },

        {
            title: "3.10 ARP (Address Resolution Protocol)",
            content: `
                <h4>What is ARP?</h4>
                <p>Address Resolution Protocol maps IP addresses to MAC addresses on a local network.</p>
                
                <h4>How ARP Works</h4>
                <ol>
                    <li>Device needs to send packet to another device on same network</li>
                    <li>Checks ARP cache for IP-MAC mapping</li>
                    <li>If not found, broadcasts ARP request: "Who has IP 192.168.1.5?"</li>
                    <li>Target device responds with ARP reply containing its MAC address</li>
                    <li>Sender stores mapping in ARP cache for future use</li>
                </ol>
                
                <h4>ARP Packet Format</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Field</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Hardware Type</td>
                        <td style="padding:8px; border:1px solid #ddd;">1 for Ethernet</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Protocol Type</td>
                        <td style="padding:8px; border:1px solid #ddd;">0x0800 for IPv4</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Operation</td>
                        <td style="padding:8px; border:1px solid #ddd;">1 = Request, 2 = Reply</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Sender MAC</td>
                        <td style="padding:8px; border:1px solid #ddd;">MAC address of sender</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Sender IP</td>
                        <td style="padding:8px; border:1px solid #ddd;">IP address of sender</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Target MAC</td>
                        <td style="padding:8px; border:1px solid #ddd;">MAC address of target (0 in request)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Target IP</td>
                        <td style="padding:8px; border:1px solid #ddd;">IP address of target</td>
                    </tr>
                </table>
                
                <h4>ARP Commands</h4>
                <ul>
                    <li><strong>arp -a:</strong> Display ARP cache (Windows)</li>
                    <li><strong>arp -d:</strong> Clear ARP cache</li>
                    <li><strong>arp -s:</strong> Add static ARP entry</li>
                </ul>
                
                <h4>ARP Security Issues</h4>
                <ul>
                    <li><strong>ARP Spoofing/Poisoning:</strong> Attacker sends fake ARP replies</li>
                    <li><strong>Man-in-the-Middle:</strong> Attacker intercepts traffic by poisoning ARP caches</li>
                    <li><strong>Solution:</strong> Dynamic ARP Inspection (DAI), static ARP entries</li>
                </ul>
                
                <h4>Gratuitous ARP</h4>
                <p>ARP reply sent without request, used for:</p>
                <ul>
                    <li>IP address conflict detection</li>
                    <li>Updating other devices' ARP caches when MAC changes</li>
                    <li>VRRP/HSRP failover notifications</li>
                </ul>
            `,
            keyPoints: [
                "ARP maps IP → MAC addresses",
                "ARP Request = broadcast, ARP Reply = unicast",
                "ARP cache stores mappings temporarily",
                "ARP spoofing is a security vulnerability",
                "Gratuitous ARP announces MAC changes"
            ]
        }
    ],

    summary: `
        <h3>Chapter 3 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Network Layer:</strong> Layer 3, handles logical addressing and routing</li>
            <li><strong>IPv4:</strong> 32-bit addresses, classes A, B, C, private ranges</li>
            <li><strong>Subnetting:</strong> Divide networks using borrowed bits, hosts = 2^h-2</li>
            <li><strong>Routing:</strong> Static (manual) vs Dynamic (automatic)</li>
            <li><strong>RIP:</strong> Distance vector, hop count (max 15), slow convergence</li>
            <li><strong>OSPF:</strong> Link state, Dijkstra algorithm, fast convergence, areas</li>
            <li><strong>BGP:</strong> Path vector, internet routing, uses AS_PATH</li>
            <li><strong>ICMP:</strong> ping (echo), traceroute (time exceeded)</li>
            <li><strong>ARP:</strong> Resolves IP to MAC addresses</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What is the difference between distance vector and link state routing protocols?",
            answer: "Distance vector protocols (like RIP) know only the direction and distance to networks, sharing their routing table with neighbors. Link state protocols (like OSPF) know the entire network topology and calculate shortest paths using the Dijkstra algorithm."
        },
        {
            question: "What is the maximum hop count in RIP and why?",
            answer: "15 hops. 16 is considered unreachable. This limit prevents routing loops but also limits network size."
        },
        {
            question: "What is an OSPF area and why are they used?",
            answer: "Areas divide OSPF networks to improve scalability, reduce routing updates, and isolate link state changes. Area 0 is the backbone that all other areas must connect to."
        },
        {
            question: "What is the purpose of AS_PATH in BGP?",
            answer: "AS_PATH lists the autonomous systems a route has passed through. It is used to prevent routing loops and as a metric for path selection (shorter paths preferred)."
        },
        {
            question: "How does ARP work and what security risk does it pose?",
            answer: "ARP broadcasts requests for IP-to-MAC mappings. It's vulnerable to ARP spoofing where attackers send fake replies to intercept traffic."
        }
    ],

    quickTips: [
        "RIP = distance vector, 15 hops max",
        "OSPF = link state, Dijkstra algorithm",
        "BGP = path vector, used for internet",
        "ping uses ICMP Echo",
        "traceroute uses ICMP Time Exceeded",
        "ARP maps IP → MAC",
        "Network address = host bits all 0",
        "Broadcast = host bits all 1"
    ],

    commonMistakes: [
        "❌ Confusing distance vector and link state",
        "❌ Thinking RIP supports more than 15 hops",
        "❌ Forgetting that OSPF uses cost, not hop count",
        "❌ Mixing up eBGP and iBGP",
        "❌ Not understanding ARP spoofing risks",
        "❌ Using /31 for point-to-point links (need /30 for 2 usable addresses)"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 3:</h3>
        <p>This chapter covers Network Layer and Routing concepts with questions at Understand, Apply, and Analyze levels.</p>
        
        <h4>Focus Areas:</h4>
        <ul>
            <li><strong>Understand:</strong> IP addressing classes, routing protocol basics, ICMP functions</li>
            <li><strong>Apply:</strong> Subnetting calculations, routing table interpretation</li>
            <li><strong>Analyze:</strong> Compare routing protocols, evaluate path selection, identify ARP issues</li>
        </ul>
    `
};