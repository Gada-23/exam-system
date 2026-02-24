// ===============================
// FOCUS AREA: DATA COMMUNICATION AND COMPUTER NETWORKING - CHAPTER 1
// Introduction to Data Communications and Computer Networks
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaNetworkingChapter1 = {
    title: "Chapter 1: Introduction to Data Communications and Computer Networks",
    
    // Blueprint alignment: 1 question (Understand)
    blueprint: {
        totalQuestions: 1,
        cognitiveLevels: {
            understand: 1
        },
        topics: [
            "Concepts and principles of data communications",
            "Computer networks fundamentals",
            "Network components and devices",
            "Network types and topologies"
        ]
    },

    learningObjectives: [
        "Understand the fundamental concepts of data communications",
        "Explain the components of data communication systems",
        "Describe different types of computer networks",
        "Identify various network topologies and their characteristics",
        "Understand the role of protocols in data communication"
    ],

    sections: [
        {
            title: "1.1 What is Data Communication?",
            content: `
                <h4>Definition of Data Communication</h4>
                <p>Data communication is the exchange of data between two devices via some form of transmission medium. It involves the transfer of digital or analog information from one point to another.</p>
                
                <p><strong>Simple Definition:</strong> Data communication is how computers and devices talk to each other to share information.</p>
                
                <h4>Components of a Data Communication System</h4>
                <p>A data communication system has five essential components:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Component</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Message</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">The information to be communicated</td>
                        <td style="padding:8px; border:1px solid #ddd;">Text, numbers, pictures, audio, video</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Sender</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">The device that sends the message</td>
                        <td style="padding:8px; border:1px solid #ddd;">Computer, smartphone, server</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Receiver</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">The device that receives the message</td>
                        <td style="padding:8px; border:1px solid #ddd;">Computer, smartphone, printer</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Transmission Medium</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">The physical path between sender and receiver</td>
                        <td style="padding:8px; border:1px solid #ddd;">Twisted pair cable, fiber optic, wireless</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Protocol</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Set of rules governing communication</td>
                        <td style="padding:8px; border:1px solid #ddd;">TCP/IP, Ethernet, HTTP</td>
                    </tr>
                </table>
                
                <h4>Data Communication Flow</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
Sender → [Protocol] → Transmission Medium → [Protocol] → Receiver
                </pre>
                
                <p>The sender and receiver must agree on the protocol, just like two people must speak the same language to communicate.</p>
            `,
            keyPoints: [
                "Data communication = exchange of data between devices",
                "Five components: message, sender, receiver, transmission medium, protocol",
                "Protocols are rules that govern communication",
                "Without protocols, devices cannot understand each other"
            ]
        },

        {
            title: "1.2 Fundamental Characteristics of Data Communication",
            content: `
                <h4>Key Characteristics</h4>
                <p>For data communication to be effective, it must have four fundamental characteristics:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Characteristic</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Importance</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Delivery</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Data must be delivered to the correct destination</td>
                        <td style="padding:8px; border:1px solid #ddd;">Wrong destination means failed communication</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Accuracy</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Data must be delivered accurately without corruption</td>
                        <td style="padding:8px; border:1px solid #ddd;">Corrupted data is useless or harmful</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Timeliness</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Data must be delivered in a timely manner</td>
                        <td style="padding:8px; border:1px solid #ddd;">Late data (especially video/audio) is useless</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Jitter</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Variation in packet arrival time must be minimal</td>
                        <td style="padding:8px; border:1px solid #ddd;">Important for real-time applications like VoIP</td>
                    </tr>
                </table>
                
                <h4>Real-World Examples:</h4>
                <ul>
                    <li><strong>Delivery:</strong> Sending an email to the right person</li>
                    <li><strong>Accuracy:</strong> Downloading a file without errors</li>
                    <li><strong>Timeliness:</strong> Watching a YouTube video without buffering</li>
                    <li><strong>Jitter:</strong> Voice calls without gaps or strange sounds</li>
                </ul>
            `,
            keyPoints: [
                "Four characteristics: Delivery, Accuracy, Timeliness, Jitter",
                "Delivery = reaches correct destination",
                "Accuracy = no data corruption",
                "Timeliness = arrives when needed",
                "Jitter = consistent arrival timing"
            ]
        },

        {
            title: "1.3 Data Flow Modes",
            content: `
                <h4>How Data Flows Between Devices</h4>
                <p>Data can flow between devices in three different modes:</p>
                
                <h4>1.3.1 Simplex Mode</h4>
                <ul>
                    <li><strong>Direction:</strong> One-way only</li>
                    <li><strong>Communication:</strong> Only one device can transmit, the other can only receive</li>
                    <li><strong>Analogy:</strong> Television broadcast - TV station transmits, you only receive</li>
                    <li><strong>Example:</strong> Keyboard to computer, radio broadcast</li>
                </ul>
                
                <h4>1.3.2 Half-Duplex Mode</h4>
                <ul>
                    <li><strong>Direction:</strong> Both directions, but only one at a time</li>
                    <li><strong>Communication:</strong> Devices take turns transmitting</li>
                    <li><strong>Analogy:</strong> Walkie-talkie - "Over" to indicate you're done</li>
                    <li><strong>Example:</strong> Two-way radios, CB radios</li>
                </ul>
                
                <h4>1.3.3 Full-Duplex Mode</h4>
                <ul>
                    <li><strong>Direction:</strong> Both directions simultaneously</li>
                    <li><strong>Communication:</strong> Both devices can transmit and receive at the same time</li>
                    <li><strong>Analogy:</strong> Telephone conversation - both people can talk at once</li>
                    <li><strong>Example:</strong> Telephone network, Ethernet (with switching)</li>
                </ul>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Mode</th>
                        <th style="padding:10px; border:1px solid #ddd;">Direction</th>
                        <th style="padding:10px; border:1px solid #ddd;">Simultaneous?</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Simplex</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">One-way</td>
                        <td style="padding:8px; border:1px solid #ddd;">No (only one direction exists)</td>
                        <td style="padding:8px; border:1px solid #ddd;">TV broadcast</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Half-Duplex</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Both ways, one at a time</td>
                        <td style="padding:8px; border:1px solid #ddd;">No</td>
                        <td style="padding:8px; border:1px solid #ddd;">Walkie-talkie</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Full-Duplex</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Both ways simultaneously</td>
                        <td style="padding:8px; border:1px solid #ddd;">Yes</td>
                        <td style="padding:8px; border:1px solid #ddd;">Telephone</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Simplex: one-way only (TV broadcast)",
                "Half-duplex: both ways, but one at a time (walkie-talkie)",
                "Full-duplex: both ways simultaneously (telephone)",
                "Full-duplex is most efficient but more complex"
            ]
        },

        {
            title: "1.4 Types of Computer Networks",
            content: `
                <h4>Networks Classified by Size and Scope</h4>
                
                <h4>1.4.1 Personal Area Network (PAN)</h4>
                <ul>
                    <li><strong>Range:</strong> Within a person's reach (few meters)</li>
                    <li><strong>Purpose:</strong> Connect personal devices</li>
                    <li><strong>Examples:</strong> Bluetooth connecting phone to headset, USB connection</li>
                </ul>
                
                <h4>1.4.2 Local Area Network (LAN)</h4>
                <ul>
                    <li><strong>Range:</strong> Single building or office (up to 1 km)</li>
                    <li><strong>Purpose:</strong> Connect computers in a limited area</li>
                    <li><strong>Speed:</strong> High speed (100 Mbps to 10 Gbps)</li>
                    <li><strong>Examples:</strong> Office network, home Wi-Fi, school computer lab</li>
                    <li><strong>Technology:</strong> Ethernet, Wi-Fi</li>
                </ul>
                
                <h4>1.4.3 Metropolitan Area Network (MAN)</h4>
                <ul>
                    <li><strong>Range:</strong> City or metropolitan area (up to 50 km)</li>
                    <li><strong>Purpose:</strong> Connect multiple LANs across a city</li>
                    <li><strong>Examples:</strong> Cable TV network, city-wide Wi-Fi</li>
                </ul>
                
                <h4>1.4.4 Wide Area Network (WAN)</h4>
                <ul>
                    <li><strong>Range:</strong> Country or continent (unlimited)</li>
                    <li><strong>Purpose:</strong> Connect networks across large geographical distances</li>
                    <li><strong>Speed:</strong> Lower than LAN (due to distance)</li>
                    <li><strong>Examples:</strong> Internet, bank network connecting branches nationwide</li>
                </ul>
                
                <h4>Comparison Table</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Network Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Range</th>
                        <th style="padding:10px; border:1px solid #ddd;">Owner</th>
                        <th style="padding:10px; border:1px solid #ddd;">Speed</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">PAN</td>
                        <td style="padding:8px; border:1px solid #ddd;">Few meters</td>
                        <td style="padding:8px; border:1px solid #ddd;">Individual</td>
                        <td style="padding:8px; border:1px solid #ddd;">Low to Medium</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">LAN</td>
                        <td style="padding:8px; border:1px solid #ddd;">Room/Building</td>
                        <td style="padding:8px; border:1px solid #ddd;">Organization</td>
                        <td style="padding:8px; border:1px solid #ddd;">High</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">MAN</td>
                        <td style="padding:8px; border:1px solid #ddd;">City</td>
                        <td style="padding:8px; border:1px solid #ddd;">Service Provider</td>
                        <td style="padding:8px; border:1px solid #ddd;">Medium</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">WAN</td>
                        <td style="padding:8px; border:1px solid #ddd;">Country/World</td>
                        <td style="padding:8px; border:1px solid #ddd;">Multiple providers</td>
                        <td style="padding:8px; border:1px solid #ddd;">Low to Medium</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "PAN: personal devices (Bluetooth)",
                "LAN: local area (office, home)",
                "MAN: metropolitan area (city)",
                "WAN: wide area (Internet)",
                "LAN is fastest, WAN covers largest area"
            ]
        },

        {
            title: "1.5 Network Topologies",
            content: `
                <h4>How Devices are Connected</h4>
                <p>Network topology refers to the physical or logical arrangement of devices in a network.</p>
                
                <h4>1.5.1 Bus Topology</h4>
                <ul>
                    <li><strong>Structure:</strong> All devices connected to a single cable (backbone)</li>
                    <li><strong>Advantages:</strong> Easy to install, cheap, less cable</li>
                    <li><strong>Disadvantages:</strong> If backbone fails, whole network fails; limited cable length; difficult troubleshooting</li>
                </ul>
                
                <h4>1.5.2 Star Topology</h4>
                <ul>
                    <li><strong>Structure:</strong> All devices connected to a central hub or switch</li>
                    <li><strong>Advantages:</strong> Easy to install and manage, one cable failure doesn't affect others, easy troubleshooting</li>
                    <li><strong>Disadvantages:</strong> If central hub fails, whole network fails; more cable required</li>
                    <li><strong>Most common:</strong> Used in most office/home networks</li>
                </ul>
                
                <h4>1.5.3 Ring Topology</h4>
                <ul>
                    <li><strong>Structure:</strong> Each device connected to two neighbors, forming a ring</li>
                    <li><strong>Advantages:</strong> Equal access, no central hub needed, handles high traffic well</li>
                    <li><strong>Disadvantages:</strong> One break can bring down whole network, difficult to reconfigure</li>
                </ul>
                
                <h4>1.5.4 Mesh Topology</h4>
                <ul>
                    <li><strong>Structure:</strong> Every device connected to every other device</li>
                    <li><strong>Advantages:</strong> Very reliable, multiple paths, no single point of failure</li>
                    <li><strong>Disadvantages:</strong> Very expensive, complex installation, many cables</li>
                    <li><strong>Use:</strong> Internet backbone, critical networks</li>
                </ul>
                
                <h4>1.5.5 Tree Topology</h4>
                <ul>
                    <li><strong>Structure:</strong> Combination of star and bus - groups of star networks connected to a bus backbone</li>
                    <li><strong>Advantages:</strong> Scalable, easy to add new groups</li>
                    <li><strong>Disadvantages:</strong> If backbone fails, large sections fail</li>
                </ul>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Topology</th>
                        <th style="padding:10px; border:1px solid #ddd;">Cost</th>
                        <th style="padding:10px; border:1px solid #ddd;">Reliability</th>
                        <th style="padding:10px; border:1px solid #ddd;">Common Use</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Bus</td>
                        <td style="padding:8px; border:1px solid #ddd;">Low</td>
                        <td style="padding:8px; border:1px solid #ddd;">Low</td>
                        <td style="padding:8px; border:1px solid #ddd;">Legacy networks</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Star</td>
                        <td style="padding:8px; border:1px solid #ddd;">Medium</td>
                        <td style="padding:8px; border:1px solid #ddd;">Medium</td>
                        <td style="padding:8px; border:1px solid #ddd;">Office/Home networks</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Ring</td>
                        <td style="padding:8px; border:1px solid #ddd;">Medium</td>
                        <td style="padding:8px; border:1px solid #ddd;">Medium</td>
                        <td style="padding:8px; border:1px solid #ddd;">FDDI, SONET</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Mesh</td>
                        <td style="padding:8px; border:1px solid #ddd;">High</td>
                        <td style="padding:8px; border:1px solid #ddd;">Very High</td>
                        <td style="padding:8px; border:1px solid #ddd;">Internet backbone</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Bus: single cable, cheap but unreliable",
                "Star: central hub, most common",
                "Ring: devices in a circle",
                "Mesh: all connected, very reliable, expensive",
                "Star is most popular for LANs"
            ]
        },

        {
            title: "1.6 Network Components and Devices",
            content: `
                <h4>Basic Networking Hardware</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Device</th>
                        <th style="padding:10px; border:1px solid #ddd;">Function</th>
                        <th style="padding:10px; border:1px solid #ddd;">OSI Layer</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>NIC (Network Interface Card)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Connects device to network, has unique MAC address</td>
                        <td style="padding:8px; border:1px solid #ddd;">Layer 2 (Data Link)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Hub</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Connects multiple devices, broadcasts to all ports (dumb)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Layer 1 (Physical)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Switch</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Connects devices, sends data only to destination (intelligent)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Layer 2 (Data Link)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Router</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Connects different networks, routes packets based on IP</td>
                        <td style="padding:8px; border:1px solid #ddd;">Layer 3 (Network)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Modem</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Modulates/demodulates signals for transmission</td>
                        <td style="padding:8px; border:1px solid #ddd;">Layer 1 (Physical)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Access Point</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Allows wireless devices to connect to wired network</td>
                        <td style="padding:8px; border:1px solid #ddd;">Layer 2 (Data Link)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Gateway</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Connects networks using different protocols</td>
                        <td style="padding:8px; border:1px solid #ddd;">All layers</td>
                    </tr>
                </table>
                
                <h4>Hub vs Switch - Important Difference</h4>
                <ul>
                    <li><strong>Hub:</strong> Sends data to ALL connected devices (wastes bandwidth, less secure)</li>
                    <li><strong>Switch:</strong> Sends data ONLY to the intended device (efficient, more secure)</li>
                </ul>
                
                <h4>Network Software Components</h4>
                <ul>
                    <li><strong>Protocols:</strong> Rules for communication (TCP/IP, HTTP, FTP)</li>
                    <li><strong>Clients and Servers:</strong> Clients request services, servers provide them</li>
                    <li><strong>Network Operating System:</strong> Manages network resources (Windows Server, Linux)</li>
                </ul>
            `,
            keyPoints: [
                "NIC: connects device to network, has MAC address",
                "Hub: broadcasts to all (dumb)",
                "Switch: sends to specific device (smart)",
                "Router: connects different networks",
                "Gateway: connects different protocol networks",
                "Switches are better than hubs"
            ]
        },

        {
            title: "1.7 Protocols and Standards",
            content: `
                <h4>What are Protocols?</h4>
                <p>Protocols are sets of rules that govern how devices communicate on a network. They define format, timing, sequencing, and error control.</p>
                
                <h4>Key Protocol Functions:</h4>
                <ul>
                    <li><strong>Encapsulation:</strong> Adding control information to data</li>
                    <li><strong>Segmentation:</strong> Breaking data into smaller pieces</li>
                    <li><strong>Flow Control:</strong> Managing data transmission speed</li>
                    <li><strong>Error Control:</strong> Detecting and correcting errors</li>
                    <li><strong>Addressing:</strong> Identifying sender and receiver</li>
                </ul>
                
                <h4>Protocol Standards Organizations</h4>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Organization</th>
                        <th style="padding:10px; border:1px solid #ddd;">Full Name</th>
                        <th style="padding:10px; border:1px solid #ddd;">Famous Standards</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>ISO</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">International Organization for Standardization</td>
                        <td style="padding:8px; border:1px solid #ddd;">OSI Model (ISO 7498)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>IEEE</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Institute of Electrical and Electronics Engineers</td>
                        <td style="padding:8px; border:1px solid #ddd;">Ethernet (802.3), Wi-Fi (802.11)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>IETF</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Internet Engineering Task Force</td>
                        <td style="padding:8px; border:1px solid #ddd;">TCP/IP, HTTP, FTP (RFCs)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>ITU-T</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">International Telecommunication Union</td>
                        <td style="padding:8px; border:1px solid #ddd;">V series (modems), X series</td>
                    </tr>
                </table>
                
                <h4>Protocol Suites</h4>
                <p>A protocol suite is a collection of related protocols that work together.</p>
                <ul>
                    <li><strong>TCP/IP Suite:</strong> The Internet protocol suite (TCP, IP, HTTP, FTP, etc.)</li>
                    <li><strong>OSI Protocols:</strong> Less common today, but conceptual model is important</li>
                </ul>
            `,
            keyPoints: [
                "Protocols = rules for communication",
                "Functions: encapsulation, segmentation, flow control, error control",
                "ISO created OSI model",
                "IEEE defines Ethernet and Wi-Fi standards",
                "IETF defines Internet protocols (TCP/IP)"
            ]
        }
    ],

    summary: `
        <h3>Chapter 1 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Data Communication:</strong> Exchange of data between devices via transmission medium</li>
            <li><strong>5 Components:</strong> Message, Sender, Receiver, Transmission Medium, Protocol</li>
            <li><strong>4 Characteristics:</strong> Delivery, Accuracy, Timeliness, Jitter</li>
            <li><strong>Data Flow:</strong> Simplex (one-way), Half-Duplex (both ways one at a time), Full-Duplex (both ways simultaneously)</li>
            <li><strong>Network Types:</strong> PAN, LAN, MAN, WAN (increasing size)</li>
            <li><strong>Topologies:</strong> Bus, Star, Ring, Mesh, Tree (Star is most common)</li>
            <li><strong>Devices:</strong> NIC, Hub (dumb), Switch (smart), Router, Gateway</li>
            <li><strong>Protocols:</strong> Rules for communication; defined by ISO, IEEE, IETF</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What are the five components of a data communication system?",
            answer: "Message, Sender, Receiver, Transmission Medium, and Protocol."
        },
        {
            question: "Explain the three data flow modes with examples.",
            answer: "Simplex (one-way, TV broadcast), Half-Duplex (both ways one at a time, walkie-talkie), Full-Duplex (both ways simultaneously, telephone)."
        },
        {
            question: "Differentiate between LAN, MAN, and WAN.",
            answer: "LAN covers a building (high speed), MAN covers a city (medium speed), WAN covers countries/continents (lower speed)."
        },
        {
            question: "Compare bus, star, and mesh topologies.",
            answer: "Bus: single cable, cheap but unreliable. Star: central hub, reliable, common. Mesh: all connected, very reliable, expensive."
        },
        {
            question: "What is the difference between a hub and a switch?",
            answer: "Hub broadcasts to all ports (dumb), switch sends only to destination (intelligent, efficient)."
        },
        {
            question: "Name three standards organizations and their contributions.",
            answer: "ISO (OSI model), IEEE (Ethernet, Wi-Fi), IETF (TCP/IP protocols)."
        }
    ],

    quickTips: [
        "Remember the 5 components: Message, Sender, Receiver, Medium, Protocol",
        "Simplex = one-way (like a one-way street)",
        "Half-duplex = two-way but one at a time (like a single-lane bridge)",
        "Full-duplex = two-way simultaneous (like a two-lane highway)",
        "LAN is fastest, WAN covers most area",
        "Star topology is most common in offices",
        "Switch is smarter than Hub"
    ],

    commonMistakes: [
        "❌ Confusing half-duplex and full-duplex - remember walkie-talkie vs telephone",
        "❌ Thinking hubs are as good as switches - switches are more efficient",
        "❌ Mixing up LAN and WAN - LAN is local, WAN is wide",
        "❌ Forgetting that protocols are RULES, not physical things",
        "❌ Believing all networks use the same topology - different needs, different topologies"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 1:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>1 question</strong> at the <strong>Understand</strong> level.</p>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>Concepts and principles:</strong> Data communication components, characteristics, flow modes</li>
            <li><strong>Network fundamentals:</strong> Types of networks (PAN, LAN, MAN, WAN)</li>
            <li><strong>Network topologies:</strong> Bus, Star, Ring, Mesh - advantages/disadvantages</li>
            <li><strong>Network components:</strong> Devices and their functions</li>
            <li><strong>Protocols:</strong> Basic understanding and standards organizations</li>
        </ol>
        
        <h4>What "Understand" Means:</h4>
        <p>You need to be able to explain concepts in your own words, give examples, and show comprehension of the material.</p>
        
        <h4>Practice Questions:</h4>
        <ul>
            <li>Explain the five components of data communication.</li>
            <li>Describe the differences between LAN, MAN, and WAN.</li>
            <li>Compare and contrast star and mesh topologies.</li>
            <li>What is the role of protocols in networking?</li>
        </ul>
    `
};