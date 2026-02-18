// ===============================
// Data Communication and Computer Networks - Chapter 2.2
// Client-Server Model
// ===============================

window.currentSubsectionData = {
    title: "2.2 Client-Server Model",
    content: `
        <h2>2.2 Client-Server Model</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand the Client-Server model and its components</li>
                <li>Learn about server types and their functions</li>
                <li>Explore client types and how they interact with servers</li>
                <li>Understand request-response messaging pattern</li>
                <li>Learn about scalability and load balancing in client-server systems</li>
                <li>Compare thick clients vs thin clients</li>
            </ul>
        </div>

        <!-- ==================== SECTION 2.2.1: INTRODUCTION TO CLIENT-SERVER MODEL ==================== -->
        <h3>2.2.1 Introduction to Client-Server Model</h3>
        
        <p>The <strong>Client-Server model</strong> is a distributed application structure that partitions tasks or workloads between providers of a resource or service (servers) and requesters of services (clients).</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> In the client-server model, clients send requests to servers, which process the requests and return responses. Servers are typically always-on, while clients initiate communication as needed.</p>
        </div>
        
        <h4>Basic Architecture:</h4>
        
        <pre>
                    ┌─────────────────────────────────────┐
                    │              Network                │
                    └─────────────────────────────────────┘
                              ▲              ▲
                              │              │
            ┌─────────────────┴──┐       ┌───┴─────────────────┐
            │     Client 1       │       │      Client 2       │
            │ (Requests Service) │       │ (Requests Service)  │
            └────────────────────┘       └────────────────────┘
                              ▲              ▲
                              │              │
                              └──────┬───────┘
                                     │
                          ┌──────────┴──────────┐
                          │       Server         │
                          │  (Provides Service)  │
                          └──────────────────────┘</pre>

        <!-- ==================== SECTION 2.2.2: COMPONENTS OF CLIENT-SERVER MODEL ==================== -->
        <h3>2.2.2 Components of Client-Server Model</h3>
        
        <h4>1. Server</h4>
        <p>A server is a computer or program that provides services or resources to clients. Key characteristics:</p>
        
        <ul>
            <li><strong>Always-on:</strong> Runs continuously, waiting for client requests</li>
            <li><strong>Fixed address:</strong> Usually has a static IP address so clients can find it</li>
            <li><strong>Powerful hardware:</strong> Often has more processing power, memory, and storage</li>
            <li><strong>Specialized software:</strong> Runs server software designed for specific services</li>
            <li><strong>Multiple clients:</strong> Can handle many client connections simultaneously</li>
        </ul>
        
        <h5>Types of Servers:</h5>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Server Type</th>
                <th style="padding: 10px;">Function</th>
                <th style="padding: 10px;">Examples</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Web Server</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Hosts websites and serves web pages</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Apache, Nginx, IIS</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>File Server</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Stores and manages files for clients</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Windows File Server, NFS, Samba</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Database Server</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Manages databases and processes queries</td>
                <td style="padding: 10px; border: 1px solid #ddd;">MySQL, PostgreSQL, Oracle</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Mail Server</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Handles email sending, receiving, storage</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Sendmail, Exchange, Postfix</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>DNS Server</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Resolves domain names to IP addresses</td>
                <td style="padding: 10px; border: 1px solid #ddd;">BIND, Microsoft DNS</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Print Server</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Manages printers and print jobs</td>
                <td style="padding: 10px; border: 1px solid #ddd;">CUPS, Windows Print Server</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Application Server</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Hosts business logic and applications</td>
                <td style="padding: 10px; border: 1px solid #ddd;">WebLogic, WebSphere, JBoss</td>
            </tr>
        </table>
        
        <h4>2. Client</h4>
        <p>A client is a computer or program that requests services from a server. Key characteristics:</p>
        
        <ul>
            <li><strong>Initiates communication:</strong> Clients start the conversation with servers</li>
            <li><strong>May have dynamic IP:</strong> Often gets temporary IP address from DHCP</li>
            <li><strong>User interface:</strong> Usually provides interface for user interaction</li>
            <li><strong>Intermittent connection:</strong> May connect only when needed</li>
            <li><strong>Varying capabilities:</strong> From powerful workstations to mobile devices</li>
        </ul>
        
        <h5>Types of Clients:</h5>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Client Type</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Examples</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Thick Client (Fat Client)</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Performs significant processing locally</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Desktop applications, games</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Thin Client</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Minimal local processing, relies on server</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Web browsers, terminal services</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Mobile Client</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Runs on smartphones/tablets, may work offline</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Mobile apps, messaging apps</td>
            </tr>
        </table>

        <!-- ==================== SECTION 2.2.3: REQUEST-RESPONSE MESSAGING ==================== -->
        <h3>2.2.3 Request-Response Messaging</h3>
        
        <p>The client-server model typically uses a <strong>request-response</strong> messaging pattern.</p>
        
        <h4>Message Flow:</h4>
        
        <pre>
        Client                              Server
          │                                    │
          │───1. Request (Service Request)────▶│
          │                                    │
          │                                    ├── Process
          │                                    │   Request
          │                                    │
          │◀──2. Response (Service Result)─────│
          │                                    │
          │   (Communication complete)         │</pre>
        
        <h4>Request Message Components:</h4>
        
        <ul>
            <li><strong>Method/Operation:</strong> What the client wants to do (GET, POST, PUT, DELETE)</li>
            <li><strong>Resource/URL:</strong> What resource the client wants to access</li>
            <li><strong>Headers:</strong> Additional information (content type, authentication, etc.)</li>
            <li><strong>Body:</strong> Data sent with the request (optional)</li>
        </ul>
        
        <h4>Response Message Components:</h4>
        
        <ul>
            <li><strong>Status Code:</strong> Indicates success/failure (200 OK, 404 Not Found, etc.)</li>
            <li><strong>Headers:</strong> Information about the response (content type, length, etc.)</li>
            <li><strong>Body:</strong> Data returned by the server (optional)</li>
        </ul>
        
        <h4>Example: HTTP Request-Response</h4>
        
        <pre>
        HTTP Request:
        GET /index.html HTTP/1.1
        Host: www.example.com
        User-Agent: Mozilla/5.0
        Accept: text/html
        
        HTTP Response:
        HTTP/1.1 200 OK
        Content-Type: text/html
        Content-Length: 1234
        
        &lt;html&gt;
        &lt;body&gt;
        &lt;h1&gt;Hello World!&lt;/h1&gt;
        &lt;/body&gt;
        &lt;/html&gt;</pre>

        <!-- ==================== SECTION 2.2.4: SERVER ARCHITECTURES ==================== -->
        <h3>2.2.4 Server Architectures</h3>
        
        <h4>1. Single-Threaded Server</h4>
        <p>Processes one request at a time. Simple but inefficient for multiple clients.</p>
        
        <pre>
        while (true) {
            request = accept_connection();
            process_request(request);
            send_response();
        }</pre>
        
        <h4>2. Multi-Threaded Server</h4>
        <p>Creates a new thread for each client connection. Can handle multiple clients simultaneously.</p>
        
        <pre>
        while (true) {
            request = accept_connection();
            create_thread(process_request, request);
        }</pre>
        
        <h4>3. Event-Driven Server</h4>
        <p>Uses event loops and asynchronous I/O to handle many connections with few threads.</p>
        
        <pre>
        event_loop() {
            while (true) {
                events = wait_for_events();
                for (event in events) {
                    process_event(event);
                }
            }
        }</pre>
        
        <h4>4. Server Farm / Cluster</h4>
        <p>Multiple servers working together to handle high load, with load balancer distributing requests.</p>
        
        <pre>
                    ┌─────────────┐
                    │    Load     │
                    │  Balancer   │
                    └──────┬──────┘
                           │
            ┌──────────────┼──────────────┐
            ↓              ↓              ↓
        ┌───────┐     ┌───────┐     ┌───────┐
        │Server1│     │Server2│     │Server3│
        └───────┘     └───────┘     └───────┘</pre>

        <!-- ==================== SECTION 2.2.5: SCALABILITY IN CLIENT-SERVER SYSTEMS ==================== -->
        <h3>2.2.5 Scalability in Client-Server Systems</h3>
        
        <p>Scalability is the ability of a system to handle growing amounts of work by adding resources.</p>
        
        <h4>Vertical Scaling (Scale Up)</h4>
        <p>Adding more power to an existing server (CPU, RAM, disk).</p>
        
        <ul>
            <li><strong>Pros:</strong> Simple, no architecture changes</li>
            <li><strong>Cons:</strong> Physical limits, expensive, single point of failure</li>
        </ul>
        
        <h4>Horizontal Scaling (Scale Out)</h4>
        <p>Adding more servers to distribute the load.</p>
        
        <ul>
            <li><strong>Pros:</strong> Virtually unlimited scaling, cost-effective, fault-tolerant</li>
            <li><strong>Cons:</strong> Complex, requires load balancing, data consistency challenges</li>
        </ul>
        
        <h4>Load Balancing Strategies:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Strategy</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Pros/Cons</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Round Robin</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Requests distributed sequentially to servers</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Simple but doesn't account for server load</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Least Connections</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Sends request to server with fewest active connections</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Better for varying request times</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>IP Hash</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Client IP determines which server handles request</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Ensures same client always goes to same server</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Weighted Distribution</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Servers with more capacity get more requests</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Optimizes resource utilization</td>
            </tr>
        </table>

        <!-- ==================== SECTION 2.2.6: THICK CLIENTS VS THIN CLIENTS ==================== -->
        <h3>2.2.6 Thick Clients vs Thin Clients</h3>
        
        <h4>Thick Client (Fat Client)</h4>
        <p>A thick client performs most of the processing locally, with the server primarily providing data storage.</p>
        
        <h5>Characteristics:</h5>
        <ul>
            <li>Runs application logic locally</li>
            <li>Requires installation on client machine</li>
            <li>Can work offline (to some extent)</li>
            <li>Uses server primarily for data storage</li>
            <li>More responsive user interface</li>
        </ul>
        
        <h5>Advantages:</h5>
        <ul>
            <li>Better performance (local processing)</li>
            <li>Can work without network connection</li>
            <li>Reduced server load</li>
            <li>Richer user interface possible</li>
        </ul>
        
        <h5>Disadvantages:</h5>
        <ul>
            <li>Difficult to update (each client needs update)</li>
            <li>Platform-dependent (Windows, Mac, etc.)</li>
            <li>Higher client hardware requirements</li>
            <li>More complex deployment</li>
        </ul>
        
        <h5>Examples:</h5>
        <ul>
            <li>Desktop applications (Photoshop, Microsoft Office)</li>
            <li>Computer games</li>
            <li>Installed software with local processing</li>
        </ul>
        
        <h4>Thin Client</h4>
        <p>A thin client performs minimal processing locally, with most work done on the server.</p>
        
        <h5>Characteristics:</h5>
        <ul>
            <li>Minimal local processing</li>
            <li>Relies on server for application logic</li>
            <li>No installation needed (browser-based)</li>
            <li>Requires constant network connection</li>
            <li>Simple, consistent interface</li>
        </ul>
        
        <h5>Advantages:</h5>
        <ul>
            <li>Easy to update (server-side only)</li>
            <li>Platform-independent (browser-based)</li>
            <li>Lower client hardware requirements</li>
            <li>Centralized management</li>
            <li>Easier to secure (data on server)</li>
        </ul>
        
        <h5>Disadvantages:</h5>
        <ul>
            <li>Requires constant network connection</li>
            <li>Server can become bottleneck</li>
            <li>Higher server costs</li>
            <li>May have UI limitations</li>
            <li>Network latency affects performance</li>
        </ul>
        
        <h5>Examples:</h5>
        <ul>
            <li>Web applications (Gmail, Google Docs)</li>
            <li>Terminal services (Citrix, RDP)</li>
            <li>Cloud-based applications</li>
        </ul>
        
        <h4>Comparison Table:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Aspect</th>
                <th style="padding: 10px;">Thick Client</th>
                <th style="padding: 10px;">Thin Client</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Processing Location</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Client-side</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Server-side</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Network Dependency</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Low (can work offline)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">High (always connected)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Hardware Requirements</td>
                <td style="padding: 10px; border: 1px solid #ddd;">High</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Low</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Deployment</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Complex (per client)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Simple (central)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Updates</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Difficult (each client)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Easy (server only)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Security</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Data on client</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Data on server</td>
            </tr>
        </table>

        <!-- ==================== SECTION 2.2.7: TWO-TIER AND THREE-TIER ARCHITECTURES ==================== -->
        <h3>2.2.7 Two-Tier and Three-Tier Architectures</h3>
        
        <h4>Two-Tier Architecture</h4>
        <p>Direct client-server communication. Client handles presentation, server handles data.</p>
        
        <pre>
        ┌─────────┐          ┌─────────┐
        │ Client  │◀────────▶│ Server  │
        │ (UI)    │          │ (Data)  │
        └─────────┘          └─────────┘</pre>
        
        <ul>
            <li><strong>Pros:</strong> Simple, fast for small applications</li>
            <li><strong>Cons:</strong> Scalability issues, business logic mixed with UI or data</li>
            <li><strong>Examples:</strong> File sharing, early database applications</li>
        </ul>
        
        <h4>Three-Tier Architecture</h4>
        <p>Separates presentation, application logic, and data into three layers.</p>
        
        <pre>
        ┌─────────┐     ┌─────────┐     ┌─────────┐
        │Presentation│     │Application│     │   Data   │
        │   Layer    │◀───▶│   Layer   │◀───▶│  Layer   │
        │  (Client)  │     │ (Server)  │     │ (Database)│
        └─────────┘     └─────────┘     └─────────┘</pre>
        
        <h5>Layers:</h5>
        <ol>
            <li><strong>Presentation Layer:</strong> User interface, client-side logic</li>
            <li><strong>Application Layer:</strong> Business logic, processes requests</li>
            <li><strong>Data Layer:</strong> Database, data storage and retrieval</li>
        </ol>
        
        <ul>
            <li><strong>Pros:</strong> Scalable, maintainable, reusable components</li>
            <li><strong>Cons:</strong> More complex, more network traffic</li>
            <li><strong>Examples:</strong> Web applications, enterprise systems</li>
        </ul>

        <!-- ==================== SECTION 2.2.8: ADVANTAGES AND DISADVANTAGES OF CLIENT-SERVER MODEL ==================== -->
        <h3>2.2.8 Advantages and Disadvantages of Client-Server Model</h3>
        
        <h4>Advantages:</h4>
        <ul>
            <li><strong>Centralized management:</strong> Resources and security controlled from servers</li>
            <li><strong>Scalability:</strong> Can add more servers or upgrade existing ones</li>
            <li><strong>Security:</strong> Centralized authentication and access control</li>
            <li><strong>Data integrity:</strong> Data stored centrally, easier to maintain consistency</li>
            <li><strong>Backup and recovery:</strong> Centralized backup of server data</li>
            <li><strong>Resource sharing:</strong> Multiple clients can share server resources</li>
            <li><strong>Maintainability:</strong> Updates applied on server, immediately available to all clients</li>
        </ul>
        
        <h4>Disadvantages:</h4>
        <ul>
            <li><strong>Single point of failure:</strong> Server failure affects all clients</li>
            <li><strong>Cost:</strong> Server hardware and software can be expensive</li>
            <li><strong>Network congestion:</strong> All traffic goes through server(s)</li>
            <li><strong>Scalability limitations:</strong> Server can become bottleneck</li>
            <li><strong>Requires professional administration:</strong> Skilled IT staff needed</li>
            <li><strong>Vendor lock-in:</strong> May depend on specific server technologies</li>
        </ul>

        <!-- ==================== SECTION 2.2.9: REAL-WORLD APPLICATIONS ==================== -->
        <h3>2.2.9 Real-World Applications of Client-Server Model</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Application</th>
                <th style="padding: 10px;">Client</th>
                <th style="padding: 10px;">Server</th>
                <th style="padding: 10px;">Protocol</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Web Browsing</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Browser (Chrome, Firefox)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Web Server (Apache, Nginx)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">HTTP/HTTPS</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Email</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Email Client (Outlook, Gmail)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Mail Server (Exchange, Sendmail)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">SMTP, POP3, IMAP</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">File Transfer</td>
                <td style="padding: 10px; border: 1px solid #ddd;">FTP Client (FileZilla)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">FTP Server</td>
                <td style="padding: 10px; border: 1px solid #ddd;">FTP/SFTP</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Database</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Application/DB Client</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Database Server (MySQL, Oracle)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">SQL, TDS</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">DNS</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Resolver (in OS)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">DNS Server</td>
                <td style="padding: 10px; border: 1px solid #ddd;">DNS</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Remote Access</td>
                <td style="padding: 10px; border: 1px solid #ddd;">SSH Client (PuTTY)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">SSH Server (OpenSSH)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">SSH</td>
            </tr>
        </table>

        <!-- ==================== SECTION SUMMARY ==================== -->
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Section 2.2 Summary</h4>
            <ul>
                <li>The <strong>Client-Server model</strong> divides work between service providers (servers) and requesters (clients)</li>
                <li><strong>Servers</strong> are always-on, have fixed addresses, and provide specialized services</li>
                <li><strong>Clients</strong> initiate communication and may have varying capabilities (thick vs thin)</li>
                <li>Communication follows <strong>request-response pattern</strong> with specific message formats</li>
                <li><strong>Scalability</strong> can be vertical (scale up) or horizontal (scale out) with load balancers</li>
                <li><strong>Thick clients</strong> do local processing; <strong>thin clients</strong> rely on servers</li>
                <li><strong>Two-tier</strong> and <strong>three-tier</strong> architectures provide different levels of separation</li>
                <li>The model offers centralized management but has single point of failure concerns</li>
                <li>Most network applications (web, email, file transfer) use client-server model</li>
            </ul>
        </div>

        <!-- ==================== SECTION EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Questions</h4>
            
            <ol>
                <li>Explain the basic components of the client-server model.</li>
                <li>List five different types of servers and their functions.</li>
                <li>Compare and contrast thick clients and thin clients.</li>
                <li>What is the request-response pattern and what are its components?</li>
                <li>Explain the difference between vertical and horizontal scaling.</li>
                <li>Describe four load balancing strategies.</li>
                <li>What are the advantages and disadvantages of the client-server model?</li>
                <li>Explain the difference between two-tier and three-tier architectures.</li>
                <li>Give five real-world examples of client-server applications.</li>
                <li>How does a server handle multiple client connections simultaneously?</li>
            </ol>
        </div>

        <!-- ==================== PREVIEW OF NEXT SECTION ==================== -->
        <div style="background: linear-gradient(135deg, #667eea20, #764ba220); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">📖 Next: 2.3 Application Protocols</h4>
            <p>In the next section, we'll explore common application layer protocols in detail, including HTTP, FTP, SMTP, and DNS.</p>
        </div>
    `,
    navigation: {
        next: "ch2-3",
        prev: "ch2-1",
        nextTitle: "2.3 Application Protocols",
        prevTitle: "2.1 Application Layer Introduction"
    }
};