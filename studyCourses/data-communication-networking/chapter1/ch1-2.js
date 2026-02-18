// ===============================
// Data Communication and Computer Networks - Chapter 1.2
// Computer Network
// ===============================

window.currentSubsectionData = {
    title: "1.2 Computer Network",
    content: `
        <h2>1.2 Computer Network</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand what a computer network is and its benefits</li>
                <li>Learn about various network applications and their importance</li>
                <li>Explore different types of networks based on geographical area</li>
                <li>Understand network architectures: Peer-to-Peer and Client/Server</li>
                <li>Identify network hardware and software components</li>
                <li>Learn about physical and logical network topologies</li>
                <li>Understand the OSI Reference Model and TCP/IP Protocol Suite</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1.2.1: NETWORK DEFINITION ==================== -->
        <h3>1.2.1 Network Definition</h3>
        
        <p>A <strong>computer network</strong> is a collection of interconnected autonomous computers and devices that can communicate with each other and share resources.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> A computer network is a system that connects two or more computing devices together to share information, resources, and services.</p>
        </div>
        
        <h4>Key Characteristics:</h4>
        <ul>
            <li><strong>Interconnection:</strong> Devices are physically or wirelessly connected</li>
            <li><strong>Autonomy:</strong> Each device can function independently</li>
            <li><strong>Communication:</strong> Devices can exchange data</li>
            <li><strong>Resource Sharing:</strong> Sharing of hardware, software, and data</li>
        </ul>

        <!-- ==================== SECTION 1.2.2: NETWORK APPLICATIONS ==================== -->
        <h3>1.2.2 Network Applications</h3>
        
        <p>Computer networks enable numerous applications that have transformed how we work, communicate, and entertain ourselves.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Application Category</th>
                <th style="padding: 10px;">Examples</th>
                <th style="padding: 10px;">Description</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Communication</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Email, instant messaging, VoIP, video conferencing</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Real-time and asynchronous communication between users</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Resource Sharing</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">File sharing, printer sharing, storage sharing</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Multiple users accessing shared hardware/software resources</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Web Services</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">World Wide Web, e-commerce, online banking</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Access to information and services via web browsers</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Entertainment</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Streaming media, online gaming, social media</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Digital entertainment delivered over networks</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Cloud Computing</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">SaaS, PaaS, IaaS, cloud storage</td>
                <td style="padding: 10px; border: 1px solid #ddd;">On-demand access to computing resources over the internet</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>IoT (Internet of Things)</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Smart homes, wearables, industrial sensors</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Networked physical devices with embedded sensors</td>
            </tr>
        </table>

        <!-- ==================== SECTION 1.2.3: NETWORK TYPES ==================== -->
        <h3>1.2.3 Network Types</h3>
        
        <h4>1.2.3.1 Based on Geographical Area</h4>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 30px 0;">
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px;">
                <h5 style="color: #667eea; margin-top: 0;">1.2.3.1.1 PAN (Personal Area Network)</h5>
                <p><strong>Range:</strong> Within a person's reach (few meters)</p>
                <p><strong>Example:</strong> Bluetooth connecting phone to earbuds, laptop to mouse</p>
                <p><strong>Characteristics:</strong> Very short range, personal use, typically wireless</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px;">
                <h5 style="color: #667eea; margin-top: 0;">1.2.3.1.2 LAN (Local Area Network)</h5>
                <p><strong>Range:</strong> Single building or campus (up to few km)</p>
                <p><strong>Example:</strong> Office network, home network, school computer lab</p>
                <p><strong>Characteristics:</strong> High speed, privately owned, low error rate</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px;">
                <h5 style="color: #667eea; margin-top: 0;">1.2.3.1.3 MAN (Metropolitan Area Network)</h5>
                <p><strong>Range:</strong> City-wide (tens of km)</p>
                <p><strong>Example:</strong> Cable TV network, city-wide Wi-Fi, municipal networks</p>
                <p><strong>Characteristics:</strong> Connects multiple LANs in a city, usually owned by service provider</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px;">
                <h5 style="color: #667eea; margin-top: 0;">1.2.3.1.4 WAN (Wide Area Network)</h5>
                <p><strong>Range:</strong> Country or worldwide (hundreds to thousands of km)</p>
                <p><strong>Example:</strong> Internet, bank networks, corporate networks connecting global offices</p>
                <p><strong>Characteristics:</strong> Slowest speed, high cost, uses public carriers</p>
            </div>
        </div>
        
        <h4>Comparison of Network Types:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Network Type</th>
                <th style="padding: 10px;">Range</th>
                <th style="padding: 10px;">Speed</th>
                <th style="padding: 10px;">Ownership</th>
                <th style="padding: 10px;">Error Rate</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">PAN</td>
                <td style="padding: 10px; border: 1px solid #ddd;">1-10 meters</td>
                <td style="padding: 10px; border: 1px solid #ddd;">High (short distance)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Private</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Very low</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">LAN</td>
                <td style="padding: 10px; border: 1px solid #ddd;">10 meters - 1 km</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Very high (10 Mbps - 10 Gbps)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Private</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Low</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">MAN</td>
                <td style="padding: 10px; border: 1px solid #ddd;">1-50 km</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Moderate</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Private/Public</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Moderate</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">WAN</td>
                <td style="padding: 10px; border: 1px solid #ddd;">100+ km</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Low to moderate</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Public</td>
                <td style="padding: 10px; border: 1px solid #ddd;">High</td>
            </tr>
        </table>
        
        <h4>1.2.3.2 Based on Architecture</h4>
        
        <h5>1.2.3.2.1 Peer-to-Peer (P2P) Network</h5>
        <p>In a peer-to-peer network, all computers have equal status and can act as both clients and servers. Each computer can share its resources and access resources from others.</p>
        
        <div class="example-box" style="background: #f0f2f5; padding: 15px; border-radius: 10px; margin: 15px 0;">
            <strong>Example:</strong> Small home networks, file sharing applications (BitTorrent), blockchain networks
        </div>
        
        <h6>Advantages:</h6>
        <ul>
            <li>Easy to set up and configure</li>
            <li>No central server required (lower cost)</li>
            <li>No single point of failure</li>
            <li>Scalable (adding new peers is easy)</li>
        </ul>
        
        <h6>Disadvantages:</h6>
        <ul>
            <li>Difficult to manage centrally</li>
            <li>Security is harder to enforce</li>
            <li>Performance can degrade with many users</li>
            <li>Data backup is decentralized</li>
        </ul>
        
        <h5>1.2.3.2.2 Client/Server Network</h5>
        <p>In a client/server network, there are dedicated servers that provide services, and clients that request and use those services.</p>
        
        <div class="example-box" style="background: #f0f2f5; padding: 15px; border-radius: 10px; margin: 15px 0;">
            <strong>Example:</strong> Web browsing (web server and browser client), email (mail server and email client), database applications
        </div>
        
        <h6>Advantages:</h6>
        <ul>
            <li>Centralized management and control</li>
            <li>Better security (can control access centrally)</li>
            <li>Easier backup and data recovery</li>
            <li>Scalable (can upgrade server as needed)</li>
        </ul>
        
        <h6>Disadvantages:</h6>
        <ul>
            <li>Higher cost (dedicated server hardware/software)</li>
            <li>Single point of failure (if server goes down, services stop)</li>
            <li>Requires specialized administration</li>
            <li>Network congestion near server</li>
        </ul>
        
        <h4>Comparison of Network Architectures:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Feature</th>
                <th style="padding: 10px;">Peer-to-Peer</th>
                <th style="padding: 10px;">Client/Server</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Cost</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Low</td>
                <td style="padding: 10px; border: 1px solid #ddd;">High (server required)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Management</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Decentralized, difficult</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Centralized, easy</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Security</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Difficult to enforce</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Centralized control</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Scalability</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Limited</td>
                <td style="padding: 10px; border: 1px solid #ddd;">High (upgrade server)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Fault tolerance</td>
                <td style="padding: 10px; border: 1px solid #ddd;">High (no single point)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Low (server failure)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Best for</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Small networks (&lt;10 computers)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Large networks, enterprise</td>
            </tr>
        </table>

        <!-- ==================== SECTION 1.2.4: NETWORK COMPONENTS ==================== -->
        <h3>1.2.4 Network Components</h3>
        
        <h4>1.2.4.1 Hardware Components</h4>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 20px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 10px;">
                <i class="fas fa-desktop" style="color: #667eea; font-size: 24px; margin-right: 10px;"></i>
                <strong>End Devices:</strong> Computers, servers, printers, smartphones, tablets, IoT devices
            </div>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 10px;">
                <i class="fas fa-wifi" style="color: #764ba2; font-size: 24px; margin-right: 10px;"></i>
                <strong>Network Interface Card (NIC):</strong> Hardware that connects a device to the network (Ethernet card, Wi-Fi adapter)
            </div>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 10px;">
                <i class="fas fa-random" style="color: #f093fb; font-size: 24px; margin-right: 10px;"></i>
                <strong>Hub:</strong> Basic device that connects multiple devices in a network; broadcasts data to all ports
            </div>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 10px;">
                <i class="fas fa-code-branch" style="color: #f5576c; font-size: 24px; margin-right: 10px;"></i>
                <strong>Switch:</strong> Intelligent device that forwards data only to the intended recipient based on MAC addresses
            </div>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 10px;">
                <i class="fas fa-route" style="color: #4facfe; font-size: 24px; margin-right: 10px;"></i>
                <strong>Router:</strong> Connects different networks together and routes data based on IP addresses
            </div>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 10px;">
                <i class="fas fa-bridge" style="color: #43e97b; font-size: 24px; margin-right: 10px;"></i>
                <strong>Bridge:</strong> Connects two LAN segments and filters traffic based on MAC addresses
            </div>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 10px;">
                <i class="fas fa-tower-broadcast" style="color: #fa709a; font-size: 24px; margin-right: 10px;"></i>
                <strong>Access Point (AP):</strong> Allows wireless devices to connect to a wired network
            </div>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 10px;">
                <i class="fas fa-shield-halved" style="color: #30cfd0; font-size: 24px; margin-right: 10px;"></i>
                <strong>Firewall:</strong> Security device that monitors and controls network traffic
            </div>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 10px;">
                <i class="fas fa-cable-car" style="color: #a18cd1; font-size: 24px; margin-right: 10px;"></i>
                <strong>Cables and Connectors:</strong> Twisted pair, coaxial, fiber optic cables
            </div>
        </div>
        
        <h4>1.2.4.2 Software Components</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Software Component</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Examples</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Network Operating System</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">OS with built-in networking capabilities</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Windows Server, Linux, macOS Server</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Protocol Stack</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Implementation of networking protocols</td>
                <td style="padding: 10px; border: 1px solid #ddd;">TCP/IP stack in OS</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Network Services</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Software providing specific network functions</td>
                <td style="padding: 10px; border: 1px solid #ddd;">DNS, DHCP, Web server, Email server</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Network Management Software</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Tools to monitor and manage networks</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Wireshark, Nagios, SolarWinds</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Client Applications</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Software that uses network services</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Web browsers, email clients, FTP clients</td>
            </tr>
        </table>

        <!-- ==================== SECTION 1.2.5: NETWORK TOPOLOGY ==================== -->
        <h3>1.2.5 Network Topology</h3>
        
        <h4>1.2.5.1 Physical Topology</h4>
        <p>Physical topology refers to the physical layout of devices, cables, and connections in a network.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 30px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 10px;">
                <h5 style="color: #667eea;">Bus Topology</h5>
                <p>All devices connected to a single central cable (bus).</p>
                <p><strong>Advantages:</strong> Easy to install, less cable required</p>
                <p><strong>Disadvantages:</strong> Cable failure affects whole network, difficult to troubleshoot</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 10px;">
                <h5 style="color: #667eea;">Star Topology</h5>
                <p>All devices connected to a central hub or switch.</p>
                <p><strong>Advantages:</strong> Easy to install and manage, failure of one cable doesn't affect others</p>
                <p><strong>Disadvantages:</strong> Central device failure brings down network, more cable required</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 10px;">
                <h5 style="color: #667eea;">Ring Topology</h5>
                <p>Each device connected to two neighbors, forming a ring.</p>
                <p><strong>Advantages:</strong> Equal access, predictable performance</p>
                <p><strong>Disadvantages:</strong> Failure of one device can affect whole network, difficult to reconfigure</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 10px;">
                <h5 style="color: #667eea;">Mesh Topology</h5>
                <p>Each device connected to many others (partial or full mesh).</p>
                <p><strong>Advantages:</strong> Highly redundant, fault-tolerant</p>
                <p><strong>Disadvantages:</strong> Expensive, complex installation, many cables</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 10px;">
                <h5 style="color: #667eea;">Tree Topology</h5>
                <p>Hierarchical combination of star and bus topologies.</p>
                <p><strong>Advantages:</strong> Scalable, easy to manage groups</p>
                <p><strong>Disadvantages:</strong> Root device failure affects all, complex configuration</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 10px;">
                <h5 style="color: #667eea;">Hybrid Topology</h5>
                <p>Combination of two or more different topologies.</p>
                <p><strong>Advantages:</strong> Flexible, can be optimized for specific needs</p>
                <p><strong>Disadvantages:</strong> Complex design and management</p>
            </div>
        </div>
        
        <h4>1.2.5.2 Logical Topology</h4>
        <p>Logical topology refers to how data actually flows through the network, regardless of physical connections.</p>
        
        <ul>
            <li><strong>Broadcast:</strong> Data sent to all devices (e.g., Ethernet with hubs)</li>
            <li><strong>Token Passing:</strong> Devices take turns sending data (e.g., Token Ring)</li>
            <li><strong>Switched:</strong> Data sent directly between devices (e.g., switched Ethernet)</li>
        </ul>

        <!-- ==================== SECTION 1.2.6: NETWORK MODELS ==================== -->
        <h3>1.2.6 Network Models</h3>
        
        <h4>1.2.6.1 OSI Reference Model</h4>
        
        <p>The <strong>Open Systems Interconnection (OSI) model</strong> is a conceptual framework that standardizes the functions of a communication system into seven distinct layers.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Layer</th>
                <th style="padding: 10px;">Name</th>
                <th style="padding: 10px;">Function</th>
                <th style="padding: 10px;">Data Unit</th>
                <th style="padding: 10px;">Protocols/Devices</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">7</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Application</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Network services to applications</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Data</td>
                <td style="padding: 10px; border: 1px solid #ddd;">HTTP, FTP, SMTP, DNS</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">6</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Presentation</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Data formatting, encryption, compression</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Data</td>
                <td style="padding: 10px; border: 1px solid #ddd;">SSL/TLS, JPEG, ASCII</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">5</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Session</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Manages sessions between applications</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Data</td>
                <td style="padding: 10px; border: 1px solid #ddd;">NetBIOS, RPC</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">4</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Transport</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">End-to-end delivery, error recovery</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Segment</td>
                <td style="padding: 10px; border: 1px solid #ddd;">TCP, UDP</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">3</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Network</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Routing, logical addressing</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Packet</td>
                <td style="padding: 10px; border: 1px solid #ddd;">IP, ICMP, Routers</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">2</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Data Link</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Node-to-node delivery, MAC addressing</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Frame</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Ethernet, PPP, Switches</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">1</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Physical</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Raw bit transmission over physical medium</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Bits</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Cables, Hubs, Repeaters</td>
            </tr>
        </table>
        
        <h5>Mnemonic to Remember OSI Layers:</h5>
        <p><strong>A</strong>ll <strong>P</strong>eople <strong>S</strong>eem <strong>T</strong>o <strong>N</strong>eed <strong>D</strong>ata <strong>P</strong>rocessing</p>
        
        <h4>1.2.6.2 TCP/IP Protocol Suite</h4>
        
        <p>The <strong>TCP/IP model</strong> is the practical model used on the internet, consisting of four layers.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Layer</th>
                <th style="padding: 10px;">Name</th>
                <th style="padding: 10px;">Function</th>
                <th style="padding: 10px;">Equivalent OSI Layers</th>
                <th style="padding: 10px;">Protocols</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">4</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Application</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Provides network services to applications</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Application, Presentation, Session</td>
                <td style="padding: 10px; border: 1px solid #ddd;">HTTP, FTP, SMTP, DNS, SSH</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">3</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Transport</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">End-to-end communication, reliability</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Transport</td>
                <td style="padding: 10px; border: 1px solid #ddd;">TCP, UDP</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">2</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Internet</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Logical addressing, routing</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Network</td>
                <td style="padding: 10px; border: 1px solid #ddd;">IP, ICMP, ARP</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">1</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Network Access</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Physical transmission and data framing</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Data Link, Physical</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Ethernet, Wi-Fi, PPP</td>
            </tr>
        </table>
        
        <h4>Comparison: OSI vs TCP/IP</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Feature</th>
                <th style="padding: 10px;">OSI Model</th>
                <th style="padding: 10px;">TCP/IP Model</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Number of layers</td>
                <td style="padding: 10px; border: 1px solid #ddd;">7</td>
                <td style="padding: 10px; border: 1px solid #ddd;">4</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Development</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Conceptual model</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Practical implementation</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Protocols</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Protocols at each layer defined later</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Protocols developed with model</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Use</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Teaching, theoretical reference</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Actual internet communication</td>
            </tr>
        </table>

        <!-- ==================== SECTION SUMMARY ==================== -->
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Section 1.2 Summary</h4>
            <ul>
                <li>A <strong>computer network</strong> connects autonomous devices for communication and resource sharing</li>
                <li>Networks enable diverse applications: communication, resource sharing, web services, entertainment, cloud computing, IoT</li>
                <li>Networks classified by geographical area: <strong>PAN, LAN, MAN, WAN</strong></li>
                <li>Network architectures: <strong>Peer-to-Peer</strong> (decentralized) and <strong>Client/Server</strong> (centralized)</li>
                <li>Hardware components: NICs, hubs, switches, routers, access points, cables</li>
                <li>Software components: Network OS, protocol stacks, network services, management tools</li>
                <li>Physical topologies: bus, star, ring, mesh, tree, hybrid; logical topology defines data flow</li>
                <li><strong>OSI model</strong> has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application</li>
                <li><strong>TCP/IP model</strong> has 4 layers: Network Access, Internet, Transport, Application</li>
                <li>Both models help understand and design network communication</li>
            </ul>
        </div>

        <!-- ==================== SECTION EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Questions</h4>
            
            <ol>
                <li>Define a computer network and list its key characteristics.</li>
                <li>Explain five major applications of computer networks.</li>
                <li>Compare and contrast PAN, LAN, MAN, and WAN in terms of range, speed, and ownership.</li>
                <li>Differentiate between Peer-to-Peer and Client/Server architectures with advantages and disadvantages.</li>
                <li>List five network hardware components and explain their functions.</li>
                <li>What is the difference between physical and logical topology?</li>
                <li>Explain five common physical topologies with their advantages and disadvantages.</li>
                <li>Describe the seven layers of the OSI model and their functions.</li>
                <li>Explain the four layers of the TCP/IP model and their corresponding OSI layers.</li>
                <li>Compare the OSI and TCP/IP models.</li>
            </ol>
        </div>
    `,
    navigation: {
        next: "ch1-3",
        prev: "ch1-1",
        nextTitle: "1.3 Transmission Media",
        prevTitle: "1.1 Data Communication"
    }
};