// ===============================
// FOCUS AREA: WEB PROGRAMMING - CHAPTER 1
// Introduction to Web Programming
// Based on Ministry of Education Blueprint (2 Questions: Understand)
// File Path: FocusAreaOfExitExam/web-programming/chapter1.js
// ===============================

window.focusAreaWebChapter1 = {
    title: "Chapter 1: Introduction to Web Programming",
    
    description: "Fundamental concepts of web programming including web architecture, HTTP protocol, client-server model, and web development principles.",
    
    // Blueprint alignment: 2 questions (Understand)
    blueprint: {
        totalQuestions: 2,
        cognitiveLevels: {
            understand: 2
        },
        topics: [
            "Web architecture and components",
            "Client-server model",
            "HTTP protocol fundamentals",
            "URL structure and web addresses",
            "Web servers and browsers",
            "Static vs dynamic web pages",
            "Web development principles and methods"
        ]
    },

    learningObjectives: [
        "Understand the basic architecture of the World Wide Web",
        "Explain the client-server model and its application in web programming",
        "Describe the HTTP protocol and its request-response cycle",
        "Identify the components of URLs and web addresses",
        "Differentiate between static and dynamic web pages",
        "Understand web development principles and best practices"
    ],

    sections: [
        {
            title: "1.1 Web Architecture Overview",
            content: `
                <h4>What is the World Wide Web?</h4>
                <p>The World Wide Web (WWW) is an information system where documents and other web resources are identified by URLs, interlinked by hypertext links, and can be accessed via the Internet.</p>
                
                <div class="key-points-box">
                    <p><strong>🔑 Important:</strong> The Web is not the same as the Internet. The Internet is the physical network infrastructure, while the Web is an information system that runs on top of the Internet.</p>
                </div>
                
                <h4>Web Architecture Components</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Component</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Examples</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Web Clients (Browsers)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Software that requests and displays web resources</td>
                        <td style="padding:8px; border:1px solid #ddd;">Chrome, Firefox, Safari, Edge</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Web Servers</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Computers that store web resources and respond to client requests</td>
                        <td style="padding:8px; border:1px solid #ddd;">Apache, Nginx, IIS, Tomcat</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Network Infrastructure</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Physical and logical connections enabling communication</td>
                        <td style="padding:8px; border:1px solid #ddd;">Internet, routers, switches, DNS</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Protocols</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Rules governing communication between components</td>
                        <td style="padding:8px; border:1px solid #ddd;">HTTP, HTTPS, TCP/IP, FTP</td>
                    </tr>
                </table>
                
                <h4>How the Web Works</h4>
                <ol>
                    <li><strong>URL Entry:</strong> User enters a URL in the browser or clicks a link</li>
                    <li><strong>DNS Resolution:</strong> Browser resolves the domain name to an IP address</li>
                    <li><strong>HTTP Request:</strong> Browser sends an HTTP request to the web server</li>
                    <li><strong>Server Processing:</strong> Server processes the request and generates a response</li>
                    <li><strong>HTTP Response:</strong> Server sends back the requested resource (HTML, images, etc.)</li>
                    <li><strong>Rendering:</strong> Browser renders the content for the user</li>
                </ol>
                
                <div class="example-box" style="background:#d4edda; padding:15px; border-radius:8px; margin:15px 0;">
                    <h4><i class="fas fa-lightbulb"></i> Example:</h4>
                    <p>When you type "https://www.example.com" in your browser:</p>
                    <ul>
                        <li>Browser asks DNS: "What is the IP address of www.example.com?"</li>
                        <li>DNS responds with IP address (e.g., 93.184.216.34)</li>
                        <li>Browser connects to that IP on port 443 (HTTPS)</li>
                        <li>Browser sends: "GET / HTTP/1.1 Host: www.example.com"</li>
                        <li>Server responds with HTML content</li>
                        <li>Browser renders the webpage</li>
                    </ul>
                </div>
            `,
            keyPoints: [
                "Web is an information system on the Internet infrastructure",
                "Key components: clients (browsers), servers, network, protocols",
                "DNS resolves domain names to IP addresses",
                "Web communication follows request-response cycle"
            ]
        },

        {
            title: "1.2 Client-Server Model",
            content: `
                <h4>What is the Client-Server Model?</h4>
                <p>The client-server model is a distributed application structure that partitions tasks between providers of a resource or service (servers) and requesters of the service (clients).</p>
                
                <div style="text-align:center; margin:20px 0;">
                    <pre style="background:#f4f4f4; padding:10px; display:inline-block;">
    Client (Browser)               Server
         |                           |
         | ---- Request -----------> |
         |                           |
         | <--- Response ----------  |
         |                           |
                    </pre>
                </div>
                
                <h4>Characteristics of Client-Server Model</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Characteristic</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Asymmetry</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Clients initiate requests; servers respond</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Transparency</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Location of servers is hidden from clients</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Scalability</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Servers can be upgraded or multiplied independently</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Centralization</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Resources and data are centralized on servers</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Thin vs Thick Clients</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Clients can do minimal (thin) or substantial (thick) processing</td>
                    </tr>
                </table>
                
                <h4>Client-Side vs Server-Side</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Aspect</th>
                        <th style="padding:10px; border:1px solid #ddd;">Client-Side</th>
                        <th style="padding:10px; border:1px solid #ddd;">Server-Side</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Where code runs</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">In the user's browser</td>
                        <td style="padding:8px; border:1px solid #ddd;">On the web server</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Languages</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">HTML, CSS, JavaScript</td>
                        <td style="padding:8px; border:1px solid #ddd;">PHP, Python, Java, C#, Ruby, Node.js</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Advantages</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Fast UI updates, reduced server load</td>
                        <td<td style="padding:8px; border:1px solid #ddd;">Security, database access, consistent logic</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Disadvantages</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Less secure, browser-dependent</td>
                        <td style="padding:8px; border:1px solid #ddd;">Slower response, more server resources</td>
                    </tr>
                </table>
                
                <div class="key-points-box">
                    <p><strong>🔑 Key Point:</strong> In web development, the client is typically a web browser that renders HTML, executes JavaScript, and applies CSS styling. The server hosts the application logic, stores data, and generates dynamic content.</p>
                </div>
            `,
            keyPoints: [
                "Client initiates requests, server responds",
                "Client-side: browser-based (HTML, CSS, JavaScript)",
                "Server-side: runs on web server (PHP, Python, Java, etc.)",
                "Model provides scalability and centralization",
                "Thin clients do minimal processing, thick clients do more"
            ]
        },

        {
            title: "1.3 HTTP Protocol Fundamentals",
            content: `
                <h4>What is HTTP?</h4>
                <p>HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the World Wide Web. It is an application layer protocol that defines how messages are formatted and transmitted, and how web servers and browsers should respond to various commands.</p>
                
                <h4>HTTP Characteristics</h4>
                <ul>
                    <li><strong>Stateless:</strong> Each request is independent; server doesn't retain information between requests</li>
                    <li><strong>Text-based:</strong> Messages are human-readable</li>
                    <li><strong>Request-Response:</strong> Client sends request, server sends response</li>
                    <li><strong>TCP-based:</strong> Typically runs over TCP port 80 (HTTP) or 443 (HTTPS)</li>
                </ul>
                
                <h4>HTTP Request Structure</h4>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: text/html
Accept-Language: en-US
Connection: keep-alive
                </pre>
                
                <p>An HTTP request consists of:</p>
                <ul>
                    <li><strong>Request Line:</strong> Method, URI, HTTP version</li>
                    <li><strong>Headers:</strong> Key-value pairs providing additional information</li>
                    <li><strong>Body:</strong> Optional data (for POST, PUT requests)</li>
                </ul>
                
                <h4>HTTP Methods (Verbs)</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Method</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Idempotent?</th>
                        <th style="padding:10px; border:1px solid #ddd;">Safe?</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>GET</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Retrieve a resource</td>
                        <td style="padding:8px; border:1px solid #ddd;">✓</td>
                        <td style="padding:8px; border:1px solid #ddd;">✓</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>POST</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Submit data to server</td>
                        <td style="padding:8px; border:1px solid #ddd;">✗</td>
                        <td style="padding:8px; border:1px solid #ddd;">✗</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>PUT</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Update/replace a resource</td>
                        <td style="padding:8px; border:1px solid #ddd;">✓</td>
                        <td style="padding:8px; border:1px solid #ddd;">✗</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>DELETE</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Remove a resource</td>
                        <td style="padding:8px; border:1px solid #ddd;">✓</td>
                        <td style="padding:8px; border:1px solid #ddd;">✗</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>HEAD</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">GET without response body</td>
                        <td style="padding:8px; border:1px solid #ddd;">✓</td>
                        <td style="padding:8px; border:1px solid #ddd;">✓</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>PATCH</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Partial update</td>
                        <td style="padding:8px; border:1px solid #ddd;">✗</td>
                        <td style="padding:8px; border:1px solid #ddd;">✗</td>
                    </tr>
                </table>
                
                <p><strong>Idempotent:</strong> Multiple identical requests have the same effect as a single request</p>
                <p><strong>Safe:</strong> Method doesn't modify the resource</p>
                
                <h4>HTTP Response Structure</h4>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
HTTP/1.1 200 OK
Date: Mon, 23 May 2025 22:38:34 GMT
Server: Apache/2.4.41
Content-Type: text/html
Content-Length: 138

&lt;html&gt;
&lt;head&gt;&lt;title&gt;Example&lt;/title&gt;&lt;/head&gt;
&lt;body&gt;&lt;h1&gt;Hello World&lt;/h1&gt;&lt;/body&gt;
&lt;/html&gt;
                </pre>
                
                <p>An HTTP response consists of:</p>
                <ul>
                    <li><strong>Status Line:</strong> HTTP version, status code, reason phrase</li>
                    <li><strong>Headers:</strong> Key-value pairs with metadata</li>
                    <li><strong>Body:</strong> The requested resource content</li>
                </ul>
                
                <h4>HTTP Status Codes</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Code Range</th>
                        <th style="padding:10px; border:1px solid #ddd;">Category</th>
                        <th style="padding:10px; border:1px solid #ddd;">Examples</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>1xx</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Informational</td>
                        <td style="padding:8px; border:1px solid #ddd;">100 Continue, 101 Switching Protocols</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>2xx</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Success</td>
                        <td style="padding:8px; border:1px solid #ddd;">200 OK, 201 Created, 204 No Content</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>3xx</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Redirection</td>
                        <td style="padding:8px; border:1px solid #ddd;">301 Moved Permanently, 302 Found, 304 Not Modified</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>4xx</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Client Error</td>
                        <td style="padding:8px; border:1px solid #ddd;">400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>5xx</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Server Error</td>
                        <td style="padding:8px; border:1px solid #ddd;">500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable</td>
                    </tr>
                </table>
                
                <div class="key-points-box">
                    <p><strong>🔑 Important Status Codes:</strong></p>
                    <ul>
                        <li><strong>200 OK:</strong> Request succeeded</li>
                        <li><strong>301 Moved Permanently:</strong> Resource has new permanent URL</li>
                        <li><strong>400 Bad Request:</strong> Server couldn't understand request</li>
                        <li><strong>401 Unauthorized:</strong> Authentication required</li>
                        <li><strong>403 Forbidden:</strong> Server refuses to respond</li>
                        <li><strong>404 Not Found:</strong> Resource doesn't exist</li>
                        <li><strong>500 Internal Server Error:</strong> Server encountered an error</li>
                    </ul>
                </div>
                
                <h4>HTTPS (HTTP Secure)</h4>
                <p>HTTPS encrypts HTTP communication using TLS/SSL, providing:</p>
                <ul>
                    <li><strong>Confidentiality:</strong> Data is encrypted</li>
                    <li><strong>Integrity:</strong> Data cannot be modified undetected</li>
                    <li><strong>Authentication:</strong> Server identity is verified via certificates</li>
                </ul>
            `,
            keyPoints: [
                "HTTP is stateless, text-based, request-response protocol",
                "Main methods: GET (retrieve), POST (submit), PUT (update), DELETE (remove)",
                "Status codes: 2xx (success), 3xx (redirect), 4xx (client error), 5xx (server error)",
                "HTTPS adds encryption (TLS/SSL) for security",
                "Headers provide metadata about request/response"
            ]
        },

        {
            title: "1.4 URLs and Web Addressing",
            content: `
                <h4>What is a URL?</h4>
                <p>URL (Uniform Resource Locator) is a reference to a web resource that specifies its location on a computer network and a mechanism for retrieving it.</p>
                
                <h4>URL Structure</h4>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
https://www.example.com:443/path/to/page?name=value#section
\___/  \______________/ \__/\________________/\_________/\______/
  |           |           |        |              |         |
Scheme      Domain       Port     Path          Query    Fragment
                </pre>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Component</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Scheme</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Protocol to use</td>
                        <td style="padding:8px; border:1px solid #ddd;">http, https, ftp, file</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Domain/Host</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Server name or IP address</td>
                        <td style="padding:8px; border:1px solid #ddd;">www.example.com</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Port</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Server port (optional)</td>
                        <td style="padding:8px; border:1px solid #ddd;">80 (HTTP), 443 (HTTPS)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Path</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Resource location on server</td>
                        <td style="padding:8px; border:1px solid #ddd;">/path/to/page</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Query</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Additional parameters</td>
                        <td style="padding:8px; border:1px solid #ddd;">?name=value&id=123</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Fragment</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Section within resource</td>
                        <td style="padding:8px; border:1px solid #ddd;">#section</td>
                    </tr>
                </table>
                
                <h4>URL Encoding</h4>
                <p>Special characters in URLs must be encoded:</p>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Character</th>
                        <th style="padding:10px; border:1px solid #ddd;">Encoded</th>
                    </tr>
                    <tr><td>space</td><td>%20</td></tr>
                    <tr><td>!</td><td>%21</td></tr>
                    <tr><td>#</td><td>%23</td></tr>
                    <tr><td>$</td><td>%24</td></tr>
                    <tr><td>%</td><td>%25</td></tr>
                    <tr><td>&</td><td>%26</td></tr>
                    <tr><td>+</td><td>%2B</td></tr>
                    <tr><td>,</td><td>%2C</td></tr>
                    <tr><td>/</td><td>%2F</td></tr>
                    <tr><td>:</td><td>%3A</td></tr>
                    <tr><td>;</td><td>%3B</td></tr>
                    <tr><td>=</td><td>%3D</td></tr>
                    <tr><td>?</td><td>%3F</td></tr>
                    <tr><td>@</td><td>%40</td></tr>
                </table>
                
                <div class="example-box">
                    <h4><i class="fas fa-lightbulb"></i> URL Example:</h4>
                    <p><strong>URL:</strong> https://www.google.com/search?q=web+programming#results</p>
                    <ul>
                        <li><strong>Scheme:</strong> https</li>
                        <li><strong>Domain:</strong> www.google.com</li>
                        <li><strong>Path:</strong> /search</li>
                        <li><strong>Query:</strong> q=web+programming</li>
                        <li><strong>Fragment:</strong> results</li>
                    </ul>
                </div>
            `,
            keyPoints: [
                "URL = Scheme + Domain + Port + Path + Query + Fragment",
                "Default ports: 80 (HTTP), 443 (HTTPS)",
                "Query parameters start with ? and are separated by &",
                "Fragment (#) points to a section within the page",
                "Special characters must be URL-encoded"
            ]
        },

        {
            title: "1.5 Static vs Dynamic Web Pages",
            content: `
                <h4>Static Web Pages</h4>
                <p>Static web pages are pre-built files that are delivered to the browser exactly as stored on the server. They contain fixed content that doesn't change unless manually updated.</p>
                
                <h5>Characteristics:</h5>
                <ul>
                    <li>Same content for all users</li>
                    <li>Delivered as-is from server</li>
                    <li>Typically written in HTML, CSS, and client-side JavaScript</li>
                    <li>No server-side processing required</li>
                    <li>Fast to serve (can be cached)</li>
                    <li>Easy to host (any web server)</li>
                </ul>
                
                <h5>Example:</h5>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;About Us&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;About Our Company&lt;/h1&gt;
    &lt;p&gt;We are a software company founded in 2010...&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
                </pre>
                
                <h4>Dynamic Web Pages</h4>
                <p>Dynamic web pages are generated in real-time by the server, often based on user input, database content, or other dynamic factors.</p>
                
                <h5>Characteristics:</h5>
                <ul>
                    <li>Content can change based on user, time, or data</li>
                    <li>Generated by server-side scripts</li>
                    <li>Often interact with databases</li>
                    <li>Personalized user experiences</li>
                    <li>More complex to develop and host</li>
                </ul>
                
                <h5>Example (PHP):</h5>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;User Profile&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Welcome, &lt;?php echo $username; ?&gt;!&lt;/h1&gt;
    &lt;p&gt;Your last login was: &lt;?php echo $lastLogin; ?&gt;&lt;/p&gt;
    &lt;?php
    // Fetch user's orders from database
    $orders = getOrders($userId);
    foreach($orders as $order) {
        echo "&lt;p&gt;Order #$order[id]: $$order[total]&lt;/p&gt;";
    }
    ?&gt;
&lt;/body&gt;
&lt;/html&gt;
                </pre>
                
                <h4>Comparison</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Aspect</th>
                        <th style="padding:10px; border:1px solid #ddd;">Static Pages</th>
                        <th style="padding:10px; border:1px solid #ddd;">Dynamic Pages</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Content</td>
                        <td style="padding:8px; border:1px solid #ddd;">Fixed, same for all</td>
                        <td style="padding:8px; border:1px solid #ddd;">Variable, personalized</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Generation</td>
                        <td style="padding:8px; border:1px solid #ddd;">Pre-built</td>
                        <td style="padding:8px; border:1px solid #ddd;">Real-time on request</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Database</td>
                        <td style="padding:8px; border:1px solid #ddd;">Not required</td>
                        <td style="padding:8px; border:1px solid #ddd;">Often required</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Performance</td>
                        <td style="padding:8px; border:1px solid #ddd;">Faster (cached)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Slower (processing)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Maintenance</td>
                        <td style="padding:8px; border:1px solid #ddd;">Update each file</td>
                        <td style="padding:8px; border:1px solid #ddd;">Update templates/DB</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Technologies</td>
                        <td style="padding:8px; border:1px solid #ddd;">HTML, CSS, JS</td>
                        <td style="padding:8px; border:1px solid #ddd;">PHP, Python, Java, Node.js, Databases</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Examples</td>
                        <td style="padding:8px; border:1px solid #ddd;">Documentation sites, portfolios</td>
                        <td style="padding:8px; border:1px solid #ddd;">Social media, e-commerce, banking</td>
                    </tr>
                </table>
                
                <div class="key-points-box">
                    <p><strong>🔑 Key Point:</strong> Modern websites often combine both approaches - static content for performance and dynamic content for personalization and interactivity.</p>
                </div>
            `,
            keyPoints: [
                "Static pages: fixed content, pre-built, fast",
                "Dynamic pages: generated on request, personalized, database-driven",
                "Static uses HTML/CSS/JS only",
                "Dynamic uses server-side languages and databases",
                "Hybrid approaches combine both for optimal performance"
            ]
        },

        {
            title: "1.6 Web Development Principles and Methods",
            content: `
                <h4>Core Web Development Principles</h4>
                
                <h5>1. Separation of Concerns</h5>
                <p>Separate content (HTML), presentation (CSS), and behavior (JavaScript).</p>
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
&lt;!-- HTML: Structure --&gt;
&lt;div class="card"&gt;
    &lt;h2&gt;Title&lt;/h2&gt;
    &lt;p&gt;Content&lt;/p&gt;
&lt;/div&gt;

/* CSS: Presentation */
.card {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
}

// JavaScript: Behavior
document.querySelector('.card').addEventListener('click', function() {
    this.classList.toggle('expanded');
});
                </pre>
                
                <h5>2. Responsive Design</h5>
                <p>Websites should work on all devices (desktop, tablet, mobile).</p>
                <ul>
                    <li>Fluid grids (relative units like %, em, rem)</li>
                    <li>Flexible images (max-width: 100%)</li>
                    <li>Media queries for different screen sizes</li>
                </ul>
                
                <pre style="background:#f4f4f4; padding:15px; border-radius:5px;">
/* Mobile-first approach */
.container {
    width: 100%;
    padding: 10px;
}

@media (min-width: 768px) {
    .container {
        width: 750px;
        margin: 0 auto;
    }
}

@media (min-width: 1024px) {
    .container {
        width: 1000px;
    }
}
                </pre>
                
                <h5>3. Progressive Enhancement</h5>
                <p>Start with a basic functional experience, then add advanced features for browsers that support them.</p>
                
                <h5>4. Accessibility (a11y)</h5>
                <p>Make websites usable by people with disabilities:</p>
                <ul>
                    <li>Semantic HTML (header, nav, main, footer)</li>
                    <li>Alt text for images</li>
                    <li>Proper heading hierarchy</li>
                    <li>Keyboard navigation</li>
                    <li>Sufficient color contrast</li>
                </ul>
                
                <h5>5. Performance Optimization</h5>
                <ul>
                    <li>Minify CSS, JavaScript, HTML</li>
                    <li>Optimize images (compression, correct formats)</li>
                    <li>Lazy loading for images and content</li>
                    <li>Caching strategies</li>
                    <li>Reduce HTTP requests</li>
                </ul>
                
                <h4>Web Development Methods</h4>
                
                <h5>1. Frontend Development</h5>
                <ul>
                    <li><strong>HTML:</strong> Structure and content</li>
                    <li><strong>CSS:</strong> Styling and layout</li>
                    <li><strong>JavaScript:</strong> Interactivity and dynamic behavior</li>
                    <li><strong>Frameworks/Libraries:</strong> React, Vue, Angular, Svelte</li>
                </ul>
                
                <h5>2. Backend Development</h5>
                <ul>
                    <li><strong>Server-side languages:</strong> PHP, Python, Java, Ruby, C#, Node.js</li>
                    <li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB, Firebase</li>
                    <li><strong>APIs:</strong> REST, GraphQL</li>
                    <li><strong>Authentication:</strong> Sessions, JWT, OAuth</li>
                </ul>
                
                <h5>3. Full-Stack Development</h5>
                <p>Combining both frontend and backend skills to build complete web applications.</p>
                
                <h4>Web Development Lifecycle</h4>
                <ol>
                    <li><strong>Planning:</strong> Requirements, wireframes, user stories</li>
                    <li><strong>Design:</strong> UI/UX design, prototypes</li>
                    <li><strong>Development:</strong> Coding frontend and backend</li>
                    <li><strong>Testing:</strong> Unit tests, integration tests, user acceptance</li>
                    <li><strong>Deployment:</strong> Publishing to production server</li>
                    <li><strong>Maintenance:</strong> Updates, bug fixes, new features</li>
                </ol>
                
                <div class="key-points-box">
                    <p><strong>🔑 Key Principles:</strong> Separation of concerns, responsive design, accessibility, performance optimization, and progressive enhancement are fundamental to modern web development.</p>
                </div>
            `,
            keyPoints: [
                "Separation of concerns: HTML (structure), CSS (presentation), JS (behavior)",
                "Responsive design ensures usability across all devices",
                "Accessibility makes websites usable for everyone",
                "Performance optimization improves user experience and SEO",
                "Web development lifecycle: Plan → Design → Develop → Test → Deploy → Maintain"
            ]
        }
    ],

    keyPoints: [
        "Web runs on client-server model with HTTP protocol",
        "HTTP methods: GET, POST, PUT, DELETE (each with specific purposes)",
        "Status codes indicate success (2xx), redirection (3xx), client errors (4xx), server errors (5xx)",
        "URLs have structure: scheme://domain/path?query#fragment",
        "Static pages are pre-built; dynamic pages are generated on request",
        "Key principles: separation of concerns, responsive design, accessibility, performance"
    ],

    summary: `
        <h3>Chapter 1 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Web Architecture:</strong> Clients (browsers) request resources from servers using HTTP protocol</li>
            <li><strong>Client-Server Model:</strong> Asymmetric relationship where clients initiate requests and servers respond</li>
            <li><strong>HTTP Protocol:</strong> Stateless, text-based protocol with methods (GET, POST, PUT, DELETE) and status codes</li>
            <li><strong>URL Structure:</strong> Scheme + Domain + Port + Path + Query + Fragment uniquely identifies resources</li>
            <li><strong>Static vs Dynamic:</strong> Static pages are fixed files; dynamic pages are generated in real-time</li>
            <li><strong>Web Development Principles:</strong> Separation of concerns, responsive design, accessibility, performance optimization</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "Explain the difference between the Internet and the World Wide Web.",
            answer: "The Internet is the physical network infrastructure that connects computers globally. The World Wide Web is an information system that runs on top of the Internet, using HTTP to transfer documents and other resources."
        },
        {
            question: "What is the client-server model and how does it apply to web programming?",
            answer: "In the client-server model, clients (web browsers) request resources, and servers respond. This model is fundamental to web programming where browsers send HTTP requests to web servers, which process the requests and return HTTP responses with the requested resources."
        },
        {
            question: "List and describe five common HTTP status codes.",
            "answer": "200 OK (request succeeded), 301 Moved Permanently (resource has new URL), 400 Bad Request (server couldn't understand request), 404 Not Found (resource doesn't exist), 500 Internal Server Error (server encountered an error)."
        },
        {
            question: "What are the main components of a URL? Provide an example.",
            "answer": "Scheme (https), Domain (www.example.com), Port (443), Path (/products), Query (?id=123&category=books), Fragment (#reviews). Example: https://www.example.com:443/products?id=123#reviews"
        },
        {
            question: "Compare static and dynamic web pages. What are the advantages of each?",
            "answer": "Static pages: faster, simpler to host, good for unchanging content. Dynamic pages: personalized, interactive, database-driven, good for applications. Modern sites often use both approaches."
        }
    ],

    quickTips: [
        "Remember: Internet = infrastructure, Web = service",
        "HTTP is stateless - each request is independent",
        "GET requests should never change server state",
        "404 means resource not found - common client error",
        "URL encoding replaces special characters with % codes",
        "Separate HTML, CSS, and JavaScript for maintainability",
        "Design mobile-first for better responsive results"
    ],

    commonMistakes: [
        "❌ Confusing the Internet with the World Wide Web",
        "❌ Using GET requests for operations that modify data",
        "❌ Not understanding the difference between 401 (Unauthorized) and 403 (Forbidden)",
        "❌ Forgetting to URL-encode special characters in query parameters",
        "❌ Mixing presentation, structure, and behavior in web pages",
        "❌ Ignoring mobile users when designing websites"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 1:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>2 questions</strong> at the <strong>Understand</strong> level.</p>
        
        <h4>What "Understand" Means:</h4>
        <p>You need to explain fundamental concepts, principles, and methods in web programming. Questions will test your ability to:</p>
        <ul>
            <li>Describe web architecture and components</li>
            <li>Explain the client-server model</li>
            <li>Understand HTTP protocol fundamentals</li>
            <li>Identify URL components and their purposes</li>
            <li>Differentiate between static and dynamic web pages</li>
            <li>Recognize web development principles and best practices</li>
        </ul>
        
        <h4>Expected Question Types:</h4>
        <ol>
            <li><strong>Conceptual Questions:</strong> Explain web architecture, client-server model, HTTP protocol</li>
            <li><strong>Identification Questions:</strong> Identify URL components, HTTP methods, status code meanings</li>
            <li><strong>Comparison Questions:</strong> Compare static vs dynamic pages, client-side vs server-side</li>
        </ol>
        
        <h4>Sample Understand Questions:</h4>
        <ul>
            <li>"Explain the role of HTTP in web communication and describe its main characteristics."</li>
            <li>"What are the differences between client-side and server-side programming? Give examples of each."</li>
            <li>"Describe the components of a URL and explain the purpose of each component."</li>
            <li>"Compare static and dynamic web pages, including their advantages and disadvantages."</li>
        </ul>
    `
};