// ===============================
// FOCUS AREA: DATA COMMUNICATION AND COMPUTER NETWORKING - CHAPTER 2
// Protocols and Networking Components
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaNetworkingChapter2 = {
    title: "Chapter 2: Protocols and Networking Components",
    
    // Blueprint alignment: 1 question (Understand)
    blueprint: {
        totalQuestions: 1,
        cognitiveLevels: {
            understand: 1
        },
        topics: [
            "Protocols and their functions",
            "Networking components and devices",
            "Protocol suites and standards"
        ]
    },

    learningObjectives: [
        "Understand the role and functions of protocols in networking",
        "Explain the operation of various networking components",
        "Identify different protocol suites and their purposes",
        "Understand how protocols enable communication between devices"
    ],

    sections: [
        {
            title: "2.1 Introduction to Protocols",
            content: `
                <h4>What are Protocols?</h4>
                <p>A protocol is a set of rules that govern data communication. It defines what, how, and when communication occurs between devices. Protocols are essential because they ensure that different devices can understand each other.</p>
                
                <p><strong>Analogy:</strong> Think of protocols like the rules of a game. Without rules, players wouldn't know how to play. Similarly, without protocols, devices wouldn't know how to communicate.</p>
                
                <h4>Key Elements of a Protocol</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Element</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Syntax</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Structure or format of the data</td>
                        <td style="padding:8px; border:1px solid #ddd;">First 8 bits are sender address, next 8 bits are receiver address</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Semantics</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Meaning of each section of bits</td>
                        <td style="padding:8px; border:1px solid #ddd;">A certain pattern means this is an acknowledgment</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Timing</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">When data should be sent and how fast</td>
                        <td style="padding:8px; border:1px solid #ddd;">Sender must wait for acknowledgment before sending more</td>
                    </tr>
                </table>
                
                <h4>Protocol Functions</h4>
                <ul>
                    <li><strong>Encapsulation:</strong> Adding control information to data (headers, trailers)</li>
                    <li><strong>Segmentation and Reassembly:</strong> Breaking data into smaller pieces and putting them back together</li>
                    <li><strong>Connection Control:</strong> Establishing and terminating connections</li>
                    <li><strong>Flow Control:</strong> Managing data transmission speed to prevent overwhelming the receiver</li>
                    <li><strong>Error Control:</strong> Detecting and correcting transmission errors</li>
                    <li><strong>Addressing:</strong> Identifying sender and receiver</li>
                    <li><strong>Multiplexing:</strong> Combining multiple signals into one</li>
                </ul>
            `,
            keyPoints: [
                "Protocols are rules for communication",
                "Three elements: Syntax (format), Semantics (meaning), Timing (when)",
                "Protocols handle encapsulation, segmentation, flow control, error control",
                "Without protocols, devices cannot understand each other"
            ]
        },

        {
            title: "2.2 Protocol Suites",
            content: `
                <h4>What is a Protocol Suite?</h4>
                <p>A protocol suite (or protocol stack) is a collection of related protocols that work together to provide comprehensive network communication. Different protocols handle different aspects of communication at various levels.</p>
                
                <h4>2.2.1 TCP/IP Protocol Suite</h4>
                <p>The TCP/IP suite is the most widely used protocol suite today. It powers the Internet.</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Layer</th>
                        <th style="padding:10px; border:1px solid #ddd;">Protocols</th>
                        <th style="padding:10px; border:1px solid #ddd;">Function</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Application Layer</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">HTTP, FTP, SMTP, DNS, DHCP</td>
                        <td style="padding:8px; border:1px solid #ddd;">User applications, data formatting</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Transport Layer</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">TCP, UDP</td>
                        <td style="padding:8px; border:1px solid #ddd;">End-to-end communication, reliability</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Internet Layer</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">IP, ICMP, ARP</td>
                        <td style="padding:8px; border:1px solid #ddd;">Logical addressing, routing</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Network Access Layer</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Ethernet, Wi-Fi, PPP</td>
                        <td style="padding:8px; border:1px solid #ddd;">Physical transmission, hardware addressing</td>
                    </tr>
                </table>
                
                <h4>2.2.2 OSI Protocol Suite</h4>
                <p>The OSI (Open Systems Interconnection) suite was developed by ISO as a standard, but it's primarily used as a teaching model rather than implemented practically.</p>
                
                <h4>2.2.3 Other Protocol Suites</h4>
                <ul>
                    <li><strong>IPX/SPX:</strong> Used in older Novell NetWare networks</li>
                    <li><strong>AppleTalk:</strong> Used in older Apple networks</li>
                    <li><strong>NetBEUI:</strong> Used in small Windows networks (no routing)</li>
                </ul>
                
                <p><strong>Note:</strong> TCP/IP has become the dominant protocol suite, replacing most others.</p>
            `,
            keyPoints: [
                "Protocol suite = collection of related protocols",
                "TCP/IP is the Internet protocol suite (4 layers)",
                "Application layer: HTTP, FTP, SMTP",
                "Transport layer: TCP (reliable), UDP (fast)",
                "Internet layer: IP (addressing, routing)",
                "Network Access layer: Ethernet, Wi-Fi"
            ]
        },

        {
            title: "2.3 Networking Components - In Depth",
            content: `
                <h4>Detailed Look at Network Devices</h4>
                
                <h4>2.3.1 Network Interface Card (NIC)</h4>
                <ul>
                    <li><strong>Function:</strong> Provides physical connection to the network</li>
                    <li><strong>Characteristics:</strong> Each NIC has a unique MAC address (48-bit) burned into its hardware</li>
                    <li><strong>MAC Address Format:</strong> 6 pairs of hexadecimal digits (e.g., 00:1A:2B:3C:4D:5E)</li>
                    <li><strong>Types:</strong> Ethernet NIC, Wi-Fi NIC, Fiber NIC</li>
                </ul>
                
                <h4>2.3.2 Repeater</h4>
                <ul>
                    <li><strong>Function:</strong> Regenerates signals to extend network distance</li>
                    <li><strong>OSI Layer:</strong> Physical (Layer 1)</li>
                    <li><strong>Operation:</strong> Receives weak signal, cleans it, and retransmits at original strength</li>
                    <li><strong>Limitation:</strong> Cannot filter data, just repeats everything</li>
                </ul>
                
                <h4>2.3.3 Hub</h4>
                <ul>
                    <li><strong>Function:</strong> Connects multiple devices in a star topology</li>
                    <li><strong>OSI Layer:</strong> Physical (Layer 1)</li>
                    <li><strong>Operation:</strong> When a signal comes in one port, it's broadcast to ALL other ports</li>
                    <li><strong>Problems:</strong> Collisions, security issues, wasted bandwidth</li>
                    <li><strong>Types:</strong> Active hub (amplifies), Passive hub (just connection), Intelligent hub (management features)</li>
                </ul>
                
                <h4>2.3.4 Bridge</h4>
                <ul>
                    <li><strong>Function:</strong> Connects two network segments and filters traffic</li>
                    <li><strong>OSI Layer:</strong> Data Link (Layer 2)</li>
                    <li><strong>Operation:</strong> Learns MAC addresses on each side and only forwards necessary traffic</li>
                    <li><strong>Benefit:</strong> Reduces collisions by dividing network into collision domains</li>
                </ul>
                
                <h4>2.3.5 Switch</h4>
                <ul>
                    <li><strong>Function:</strong> Connects multiple devices, sends data only to destination</li>
                    <li><strong>OSI Layer:</strong> Data Link (Layer 2) - some switches also do Layer 3</li>
                    <li><strong>Operation:</strong> Maintains MAC address table (CAM table) to know which device is on which port</li>
                    <li><strong>Advantages over Hub:</strong> 
                        <ul>
                            <li>No collisions - each port is its own collision domain</li>
                            <li>Better security - data only goes to intended recipient</li>
                            <li>More efficient - full bandwidth to each port</li>
                        </ul>
                    </li>
                    <li><strong>Types:</strong> Unmanaged switch (plug and play), Managed switch (configurable)</li>
                </ul>
                
                <h4>2.3.6 Router</h4>
                <ul>
                    <li><strong>Function:</strong> Connects different networks together</li>
                    <li><strong>OSI Layer:</strong> Network (Layer 3)</li>
                    <li><strong>Operation:</strong> Uses IP addresses to determine where to send packets, maintains routing tables</li>
                    <li><strong>Key Features:</strong>
                        <ul>
                            <li>Connects LAN to WAN (like your home router to the Internet)</li>
                            <li>Provides NAT (Network Address Translation)</li>
                            <li>Can provide DHCP services</li>
                            <li>Firewall capabilities</li>
                        </ul>
                    </li>
                </ul>
                
                <h4>2.3.7 Gateway</h4>
                <ul>
                    <li><strong>Function:</strong> Connects networks using different protocols</li>
                    <li><strong>OSI Layer:</strong> All layers (especially Application Layer)</li>
                    <li><strong>Operation:</strong> Translates between completely different network architectures</li>
                    <li><strong>Example:</strong> Email gateway translating between different email systems</li>
                </ul>
                
                <h4>2.3.8 Modem</h4>
                <ul>
                    <li><strong>Function:</strong> Modulates and demodulates signals for transmission</li>
                    <li><strong>OSI Layer:</strong> Physical (Layer 1)</li>
                    <li><strong>Operation:</strong> Converts digital data to analog for transmission, and back to digital</li>
                    <li><strong>Types:</strong> DSL modem, Cable modem, Fiber modem</li>
                </ul>
                
                <h4>2.3.9 Access Point</h4>
                <ul>
                    <li><strong>Function:</strong> Allows wireless devices to connect to wired network</li>
                    <li><strong>OSI Layer:</strong> Data Link (Layer 2)</li>
                    <li><strong>Operation:</strong> Acts as bridge between wired and wireless networks</li>
                    <li><strong>Standards:</strong> IEEE 802.11 (Wi-Fi)</li>
                </ul>
                
                <h4>Comparison Table: Network Devices</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Device</th>
                        <th style="padding:10px; border:1px solid #ddd;">OSI Layer</th>
                        <th style="padding:10px; border:1px solid #ddd;">Function</th>
                        <th style="padding:10px; border:1px solid #ddd;">Intelligence</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Repeater</td>
                        <td style="padding:8px; border:1px solid #ddd;">Layer 1</td>
                        <td style="padding:8px; border:1px solid #ddd;">Signal amplification</td>
                        <td style="padding:8px; border:1px solid #ddd;">Very Low</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Hub</td>
                        <td style="padding:8px; border:1px solid #ddd;">Layer 1</td>
                        <td style="padding:8px; border:1px solid #ddd;">Connect multiple devices</td>
                        <td style="padding:8px; border:1px solid #ddd;">Very Low</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Bridge</td>
                        <td style="padding:8px; border:1px solid #ddd;">Layer 2</td>
                        <td style="padding:8px; border:1px solid #ddd;">Filter traffic between segments</td>
                        <td style="padding:8px; border:1px solid #ddd;">Medium</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Switch</td>
                        <td style="padding:8px; border:1px solid #ddd;">Layer 2</td>
                        <td style="padding:8px; border:1px solid #ddd;">Connect devices, filter traffic</td>
                        <td style="padding:8px; border:1px solid #ddd;">High</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Router</td>
                        <td style="padding:8px; border:1px solid #ddd;">Layer 3</td>
                        <td style="padding:8px; border:1px solid #ddd;">Connect different networks</td>
                        <td style="padding:8px; border:1px solid #ddd;">Very High</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "NIC: has unique MAC address",
                "Hub: Layer 1, broadcasts to all ports (dumb)",
                "Switch: Layer 2, sends only to destination (smart)",
                "Router: Layer 3, connects different networks",
                "Gateway: connects networks with different protocols",
                "Access Point: connects wireless to wired network"
            ]
        },

        {
            title: "2.4 Common Protocols and Their Functions",
            content: `
                <h4>Important Protocols You Should Know</h4>
                
                <h4>2.4.1 Application Layer Protocols</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Protocol</th>
                        <th style="padding:10px; border:1px solid #ddd;">Full Name</th>
                        <th style="padding:10px; border:1px solid #ddd;">Function</th>
                        <th style="padding:10px; border:1px solid #ddd;">Port</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>HTTP</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Hypertext Transfer Protocol</td>
                        <td style="padding:8px; border:1px solid #ddd;">Web browsing</td>
                        <td style="padding:8px; border:1px solid #ddd;">80</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>HTTPS</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">HTTP Secure</td>
                        <td style="padding:8px; border:1px solid #ddd;">Secure web browsing</td>
                        <td style="padding:8px; border:1px solid #ddd;">443</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>FTP</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">File Transfer Protocol</td>
                        <td style="padding:8px; border:1px solid #ddd;">File transfer</td>
                        <td style="padding:8px; border:1px solid #ddd;">20,21</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>SMTP</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Simple Mail Transfer Protocol</td>
                        <td style="padding:8px; border:1px solid #ddd;">Sending email</td>
                        <td style="padding:8px; border:1px solid #ddd;">25</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>POP3</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Post Office Protocol v3</td>
                        <td style="padding:8px; border:1px solid #ddd;">Receiving email</td>
                        <td style="padding:8px; border:1px solid #ddd;">110</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>IMAP</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Internet Message Access Protocol</td>
                        <td style="padding:8px; border:1px solid #ddd;">Email access (keeps on server)</td>
                        <td style="padding:8px; border:1px solid #ddd;">143</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>DNS</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Domain Name System</td>
                        <td style="padding:8px; border:1px solid #ddd;">Domain name to IP resolution</td>
                        <td style="padding:8px; border:1px solid #ddd;">53</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>DHCP</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Dynamic Host Configuration Protocol</td>
                        <td style="padding:8px; border:1px solid #ddd;">Automatic IP assignment</td>
                        <td style="padding:8px; border:1px solid #ddd;">67,68</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>SNMP</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Simple Network Management Protocol</td>
                        <td style="padding:8px; border:1px solid #ddd;">Network management</td>
                        <td style="padding:8px; border:1px solid #ddd;">161,162</td>
                    </tr>
                </table>
                
                <h4>2.4.2 Transport Layer Protocols</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Protocol</th>
                        <th style="padding:10px; border:1px solid #ddd;">Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Characteristics</th>
                        <th style="padding:10px; border:1px solid #ddd;">Use Cases</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>TCP</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Connection-oriented</td>
                        <td style="padding:8px; border:1px solid #ddd;">
                            ✓ Reliable (acknowledgments)<br>
                            ✓ Flow control<br>
                            ✓ Error checking<br>
                            ✓ Ordered delivery<br>
                            ✗ Slower, more overhead
                        </td>
                        <td style="padding:8px; border:1px solid #ddd;">Web (HTTP), Email (SMTP), FTP</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>UDP</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Connectionless</td>
                        <td style="padding:8px; border:1px solid #ddd;">
                            ✗ Unreliable (no ACK)<br>
                            ✗ No flow control<br>
                            ✓ Faster, less overhead<br>
                            ✓ Good for real-time
                        </td>
                        <td style="padding:8px; border:1px solid #ddd;">DNS, VoIP, Streaming, DHCP</td>
                    </tr>
                </table>
                
                <h4>2.4.3 Internet Layer Protocols</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Protocol</th>
                        <th style="padding:10px; border:1px solid #ddd;">Function</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>IP (Internet Protocol)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Logical addressing, packet forwarding</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>ICMP (Internet Control Message Protocol)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Error reporting, diagnostics (ping uses ICMP)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>ARP (Address Resolution Protocol)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Resolves IP addresses to MAC addresses</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>RARP (Reverse ARP)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Resolves MAC addresses to IP addresses</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "TCP: reliable, connection-oriented, slower",
                "UDP: unreliable, connectionless, faster",
                "HTTP/HTTPS: web browsing",
                "FTP: file transfer",
                "SMTP: sending email",
                "POP3/IMAP: receiving email",
                "DNS: domain name to IP",
                "DHCP: automatic IP assignment"
            ]
        },

        {
            title: "2.5 Protocol Operation - How Protocols Work",
            content: `
                <h4>Understanding Protocol Mechanisms</h4>
                
                <h4>2.5.1 Encapsulation</h4>
                <p>Encapsulation is the process of adding control information as data passes down the protocol stack. Each layer adds its own header (and sometimes trailer) to the data.</p>
                
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Application Layer: [Data]
Transport Layer: [TCP Header | Data]
Internet Layer: [IP Header | TCP Header | Data]
Network Access: [Ethernet Header | IP Header | TCP Header | Data | Ethernet Trailer]
                </pre>
                
                <h4>2.5.2 Multiplexing and Demultiplexing</h4>
                <ul>
                    <li><strong>Multiplexing:</strong> Combining multiple data streams into one signal at the sender</li>
                    <li><strong>Demultiplexing:</strong> Separating combined streams back into original at the receiver</li>
                    <li><strong>Example:</strong> Your computer can browse web, check email, and download file simultaneously - all using different port numbers</li>
                </ul>
                
                <h4>2.5.3 Flow Control</h4>
                <p>Flow control prevents the sender from overwhelming the receiver with too much data too fast.</p>
                <ul>
                    <li><strong>TCP uses:</strong> Sliding window protocol</li>
                    <li><strong>Receiver advertises:</strong> Window size (how much data it can accept)</li>
                    <li><strong>Sender adjusts:</strong> Transmission rate based on window size</li>
                </ul>
                
                <h4>2.5.4 Error Control</h4>
                <p>Error control detects and corrects transmission errors.</p>
                <ul>
                    <li><strong>Error Detection:</strong> Checksums, CRC (Cyclic Redundancy Check)</li>
                    <li><strong>Error Correction:</strong> Retransmission (ARQ - Automatic Repeat Request), Forward Error Correction</li>
                </ul>
                
                <h4>2.5.5 Connection Establishment - Three-Way Handshake</h4>
                <p>TCP uses a three-way handshake to establish a connection:</p>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Client ── SYN ──────────────────► Server
Client ◄── SYN-ACK ─────────────── Server
Client ── ACK ──────────────────► Server
Connection Established!
                </pre>
                <ol>
                    <li><strong>SYN:</strong> Client sends SYN (synchronize) to server</li>
                    <li><strong>SYN-ACK:</strong> Server acknowledges and sends its own SYN</li>
                    <li><strong>ACK:</strong> Client acknowledges server's SYN</li>
                </ol>
            `,
            keyPoints: [
                "Encapsulation: adding headers at each layer",
                "Multiplexing: multiple data streams over one connection",
                "Flow control: prevents overwhelming receiver",
                "Error control: detects/corrects errors",
                "TCP 3-way handshake: SYN, SYN-ACK, ACK"
            ]
        },

        {
            title: "2.6 Protocol Standards and Organizations",
            content: `
                <h4>Who Creates Protocols?</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Organization</th>
                        <th style="padding:10px; border:1px solid #ddd;">Full Name</th>
                        <th style="padding:10px; border:1px solid #ddd;">Key Contributions</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>ISO</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">International Organization for Standardization</td>
                        <td style="padding:8px; border:1px solid #ddd;">OSI Reference Model, many protocol standards</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>IEEE</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Institute of Electrical and Electronics Engineers</td>
                        <td style="padding:8px; border:1px solid #ddd;">Ethernet (802.3), Wi-Fi (802.11), Bluetooth (802.15)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>IETF</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Internet Engineering Task Force</td>
                        <td style="padding:8px; border:1px solid #ddd;">TCP/IP protocols, HTTP, FTP, SMTP (publishes RFCs)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>ITU-T</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">International Telecommunication Union</td>
                        <td style="padding:8px; border:1px solid #ddd;">Telecommunication standards, V series, X series</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>W3C</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">World Wide Web Consortium</td>
                        <td style="padding:8px; border:1px solid #ddd;">Web standards (HTML, CSS, XML)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>ANSI</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">American National Standards Institute</td>
                        <td style="padding:8px; border:1px solid #ddd;">US standards, often adopts ISO/IEEE standards</td>
                    </tr>
                </table>
                
                <h4>RFCs (Request for Comments)</h4>
                <p>RFCs are documents published by the IETF that define Internet protocols, procedures, and concepts. They are the official specifications for TCP/IP protocols.</p>
                <ul>
                    <li><strong>RFC 791:</strong> Internet Protocol (IP)</li>
                    <li><strong>RFC 793:</strong> Transmission Control Protocol (TCP)</li>
                    <li><strong>RFC 768:</strong> User Datagram Protocol (UDP)</li>
                    <li><strong>RFC 2616:</strong> HTTP/1.1</li>
                </ul>
            `,
            keyPoints: [
                "ISO: OSI model",
                "IEEE: Ethernet, Wi-Fi standards",
                "IETF: Internet protocols (RFCs)",
                "ITU-T: Telecommunication standards",
                "W3C: Web standards",
                "RFCs are official Internet protocol specifications"
            ]
        }
    ],

    summary: `
        <h3>Chapter 2 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Protocols:</strong> Rules for communication with syntax, semantics, and timing</li>
            <li><strong>Protocol Suite:</strong> TCP/IP (4 layers) is the Internet standard</li>
            <li><strong>Network Devices:</strong> NIC (MAC address), Hub (Layer 1, broadcasts), Switch (Layer 2, intelligent), Router (Layer 3, connects networks)</li>
            <li><strong>TCP vs UDP:</strong> TCP is reliable but slower; UDP is fast but unreliable</li>
            <li><strong>Common Protocols:</strong> HTTP (web), FTP (file), SMTP (email), DNS (name resolution), DHCP (IP assignment)</li>
            <li><strong>Protocol Operation:</strong> Encapsulation, multiplexing, flow control, error control</li>
            <li><strong>TCP 3-Way Handshake:</strong> SYN, SYN-ACK, ACK</li>
            <li><strong>Standards Organizations:</strong> ISO, IEEE, IETF, ITU-T, W3C</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What are the three elements of a protocol? Explain each.",
            answer: "Syntax (format of data), Semantics (meaning of bits), Timing (when data is sent)."
        },
        {
            question: "Compare and contrast TCP and UDP.",
            answer: "TCP is connection-oriented, reliable, ordered, but slower. UDP is connectionless, unreliable, faster, good for real-time applications."
        },
        {
            question: "Explain the function of a switch and how it differs from a hub.",
            answer: "Switch sends data only to destination device using MAC address table (intelligent). Hub broadcasts to all ports (dumb), causing collisions and wasting bandwidth."
        },
        {
            question: "Describe the TCP three-way handshake.",
            answer: "Client sends SYN, server responds with SYN-ACK, client sends ACK. Connection is established."
        },
        {
            question: "What is the purpose of DNS and DHCP?",
            answer: "DNS converts domain names to IP addresses. DHCP automatically assigns IP addresses to devices."
        },
        {
            question: "Name three standards organizations and their contributions.",
            answer: "IEEE (Ethernet, Wi-Fi), IETF (TCP/IP protocols), ISO (OSI model)."
        }
    ],

    quickTips: [
        "TCP = reliable (like registered mail), UDP = fast (like regular mail)",
        "Switch is smarter than Hub",
        "Router connects different networks",
        "Remember common ports: HTTP=80, HTTPS=443, DNS=53, DHCP=67/68",
        "Three-way handshake: SYN, SYN-ACK, ACK",
        "MAC address is 48-bit, usually in hex"
    ],

    commonMistakes: [
        "❌ Confusing TCP and UDP - TCP is reliable, UDP is fast",
        "❌ Thinking hubs and switches are the same - switches are intelligent",
        "❌ Forgetting that routers work at Layer 3 (IP addresses)",
        "❌ Mixing up DNS and DHCP - DNS resolves names, DHCP assigns IPs",
        "❌ Believing all protocols are at the same layer - they're organized in layers"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 2:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>1 question</strong> at the <strong>Understand</strong> level.</p>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>Protocols:</strong> Elements and functions</li>
            <li><strong>Networking components:</strong> Devices and their roles</li>
            <li><strong>Protocol suites:</strong> TCP/IP layers and common protocols</li>
            <li><strong>TCP vs UDP:</strong> Differences and use cases</li>
            <li><strong>Standards organizations:</strong> Who defines protocols</li>
        </ol>
        
        <h4>What "Understand" Means:</h4>
        <p>You need to be able to explain how protocols work, describe device functions, and differentiate between protocol types.</p>
        
        <h4>Practice Questions:</h4>
        <ul>
            <li>Explain the difference between a switch and a router.</li>
            <li>Describe the TCP/IP protocol suite layers.</li>
            <li>When would you use UDP instead of TCP?</li>
            <li>What is the role of ICMP in networking?</li>
        </ul>
    `
};