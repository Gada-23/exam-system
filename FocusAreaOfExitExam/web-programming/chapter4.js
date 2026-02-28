// ===============================
// FOCUS AREA: WEB PROGRAMMING - CHAPTER 4
// Client-Server Systems and Concurrency
// Based on Ministry of Education Blueprint (1 Analyze, 2 Evaluate)
// File Path: FocusAreaOfExitExam/web-programming/chapter4.js
// ===============================

window.focusAreaWebChapter4 = {
  title: "Chapter 4: Client-Server Systems and Concurrency",

  description:
    "Advanced concepts in designing, implementing, and evaluating client-server systems following specific protocol specifications, with emphasis on concurrency issues and solutions.",

  // Blueprint alignment: 3 questions (1 Analyze, 2 Evaluate)
  blueprint: {
    totalQuestions: 3,
    cognitiveLevels: {
      analyze: 1,
      evaluate: 2,
    },
    topics: [
      "Client-server architecture patterns",
      "Protocol design and specifications",
      "Concurrency models (threads, processes, async)",
      "Race conditions and deadlocks",
      "Synchronization mechanisms",
      "Load balancing and scalability",
      "State management in distributed systems",
      "WebSocket and real-time communication",
      "Microservices architecture",
    ],
  },

  learningObjectives: [
    "Analyze client-server architectures for different application requirements",
    "Design protocols following specific specifications",
    "Evaluate concurrency models and their trade-offs",
    "Identify and resolve race conditions and deadlocks",
    "Implement synchronization mechanisms for shared resources",
    "Design load balancing strategies for scalable systems",
    "Evaluate real-time communication protocols",
    "Compare monolithic and microservices architectures",
  ],

  sections: [
    {
      title: "4.1 Client-Server Architecture Patterns (Analyze Level)",
      content: `
                <h4>Evolution of Client-Server Architectures</h4>
                <p>Client-server architecture has evolved from simple two-tier models to complex distributed systems. Understanding these patterns is essential for designing scalable applications.</p>
                
                <h4>Architecture Patterns</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Pattern</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Pros</th>
                        <th style="padding:10px; border:1px solid #ddd;">Cons</th>
                        <th style="padding:10px; border:1px solid #ddd;">Use Case</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Two-Tier</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Client directly communicates with database</td>
                        <td style="padding:8px; border:1px solid #ddd;">Simple, fast for small apps</td>
                        <td style="padding:8px; border:1px solid #ddd;">Security risks, poor scalability</td>
                        <td style="padding:8px; border:1px solid #ddd;">Desktop apps, small intranet</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Three-Tier</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Presentation, application, database layers</td>
                        <td style="padding:8px; border:1px solid #ddd;">Scalable, maintainable, secure</td>
                        <td style="padding:8px; border:1px solid #ddd;">More complex, latency</td>
                        <td style="padding:8px; border:1px solid #ddd;">Most web applications</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>N-Tier</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Multiple specialized layers</td>
                        <td style="padding:8px; border:1px solid #ddd;">Highly scalable, flexible</td>
                        <td style="padding:8px; border:1px solid #ddd;">Complex, harder to manage</td>
                        <td style="padding:8px; border:1px solid #ddd;">Enterprise applications</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Microservices</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Independent services communicating via API</td>
                        <td style="padding:8px; border:1px solid #ddd;">Independent scaling, technology diversity</td>
                        <td style="padding:8px; border:1px solid #ddd;">Distributed system complexity</td>
                        <td style="padding:8px; border:1px solid #ddd;">Large, complex applications</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Peer-to-Peer</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">No central server, peers act as clients and servers</td>
                        <td style="padding:8px; border:1px solid #ddd;">Highly scalable, no single point of failure</td>
                        <td style="padding:8px; border:1px solid #ddd;">Security, consistency challenges</td>
                        <td style="padding:8px; border:1px solid #ddd;">File sharing, blockchain</td>
                    </tr>
                </table>
                
                <h4>Three-Tier Architecture in Detail</h4>
                
                <div style="text-align:center; margin:20px 0;">
                    <pre style="background:#f4f4f4; padding:10px; display:inline-block;">
    [Client Browser]
          ↓ (HTTP/HTTPS)
    [Web Server / CDN]
          ↓
    [Application Server]
          ↓
    [Database Server]
                    </pre>
                </div>
                
                <ul>
                    <li><strong>Presentation Tier:</strong> HTML, CSS, JavaScript (runs in browser)</li>
                    <li><strong>Application Tier:</strong> Server-side code (PHP, Node.js, Python, Java)</li>
                    <li><strong>Data Tier:</strong> Database (MySQL, PostgreSQL, MongoDB)</li>
                </ul>
                
                <h4>Analyze Exercise: Architecture Selection</h4>
                
                <p><strong>Scenario 1: E-commerce Startup</strong></p>
                <ul>
                    <li><strong>Requirements:</strong> Launch quickly, handle 10,000 products, 100 concurrent users initially, need to scale to 10,000 users in 2 years</li>
                    <li><strong>Analysis:</strong> Three-tier architecture is ideal - separates concerns, allows scaling each tier independently. Start with monolith for speed, plan to split into services as needed.</li>
                </ul>
                
                <p><strong>Scenario 2: Banking System</strong></p>
                <ul>
                    <li><strong>Requirements:</strong> High security, transactional integrity, audit logging, moderate scale (500 concurrent users)</li>
                    <li><strong>Analysis:</strong> Three-tier with strict separation and security layers. Application tier handles business logic, data tier ensures ACID compliance. Microservices would add unnecessary complexity.</li>
                </ul>
                
                <p><strong>Scenario 3: Social Media Platform</strong></p>
                <ul>
                    <li><strong>Requirements:</strong> Millions of users, real-time updates, different features (posts, messaging, notifications)</li>
                    <li><strong>Analysis:</strong> Microservices architecture - different services for user profiles, posts, messaging, notifications. Each can scale independently based on load. Use API gateway for unified access.</li>
                </ul>
                
                <p><strong>Scenario 4: Real-Time Chat Application</strong></p>
                <ul>
                    <li><strong>Requirements:</strong> Low latency, persistent connections, message delivery guarantees</li>
                    <li><strong>Analysis:</strong> Hybrid approach - WebSocket servers for real-time communication, REST APIs for authentication and history. May need separate message queue service for reliable delivery.</li>
                </ul>
            `,
      keyPoints: [
        "Two-tier: simple but limited scalability and security",
        "Three-tier: standard web architecture with separation of concerns",
        "N-tier: multiple specialized layers for complex applications",
        "Microservices: independent services, independent scaling",
        "Choose architecture based on scale, complexity, and team expertise",
      ],
    },

    {
      title: "4.2 Protocol Design and Specifications (Evaluate Level)",
      content: `
                <h4>What is a Protocol?</h4>
                <p>A protocol is a set of rules governing communication between systems. It defines message formats, sequencing, error handling, and state management.</p>
                
                <h4>Protocol Design Principles</h4>
                <ul>
                    <li><strong>Simplicity:</strong> Easy to implement and debug</li>
                    <li><strong>Extensibility:</strong> Can add features without breaking existing clients</li>
                    <li><strong>Efficiency:</strong> Minimal overhead (bandwidth, processing)</li>
                    <li><strong>Security:</strong> Authentication, encryption, integrity checks</li>
                    <li><strong>Error Handling:</strong> Clear error codes and recovery mechanisms</li>
                    <li><strong>Stateless vs Stateful:</strong> Trade-offs between simplicity and functionality</li>
                </ul>
                
                <h4>REST API Design (Representational State Transfer)</h4>
                
                <h5>REST Principles</h5>
                <ul>
                    <li><strong>Resources:</strong> Everything is a resource (URI)</li>
                    <li><strong>HTTP Methods:</strong> GET (read), POST (create), PUT (update), DELETE (remove)</li>
                    <li><strong>Stateless:</strong> Each request contains all information needed</li>
                    <li><strong>Cacheable:</strong> Responses define cacheability</li>
                    <li><strong>Uniform Interface:</strong> Consistent resource identification</li>
                </ul>
                
                <h5>REST API Design Best Practices</h5>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
// Resource naming (nouns, not verbs)
✅ GET /api/users
✅ GET /api/users/123
✅ POST /api/users
✅ PUT /api/users/123
✅ DELETE /api/users/123

❌ GET /api/getUsers
❌ POST /api/createUser
❌ GET /api/deleteUser?id=123

// Collections and sub-resources
GET /api/users/123/orders
GET /api/users/123/orders/456

// Filtering, sorting, pagination
GET /api/users?role=admin&status=active
GET /api/users?sort=name&order=asc
GET /api/users?page=2&limit=50

// Versioning
/api/v1/users
/api/v2/users
Accept: application/vnd.myapp.v1+json
                </pre>
                
                <h5>HTTP Status Codes in REST</h5>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Code</th>
                        <th style="padding:10px; border:1px solid #ddd;">Meaning</th>
                        <th style="padding:10px; border:1px solid #ddd;">Use Case</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">200 OK</td>
                        <td style="padding:8px; border:1px solid #ddd;">Success</td>
                        <td style="padding:8px; border:1px solid #ddd;">GET, PUT successful</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">201 Created</td>
                        <td style="padding:8px; border:1px solid #ddd;">Resource created</td>
                        <td style="padding:8px; border:1px solid #ddd;">POST successful</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">204 No Content</td>
                        <td style="padding:8px; border:1px solid #ddd;">Success, no response body</td>
                        <td style="padding:8px; border:1px solid #ddd;">DELETE successful</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">400 Bad Request</td>
                        <td style="padding:8px; border:1px solid #ddd;">Client error</td>
                        <td style="padding:8px; border:1px solid #ddd;">Invalid input</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">401 Unauthorized</td>
                        <td style="padding:8px; border:1px solid #ddd;">Authentication required</td>
                        <td style="padding:8px; border:1px solid #ddd;">Missing/invalid token</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">403 Forbidden</td>
                        <td style="padding:8px; border:1px solid #ddd;">Authenticated but not authorized</td>
                        <td style="padding:8px; border:1px solid #ddd;">Insufficient permissions</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">404 Not Found</td>
                        <td style="padding:8px; border:1px solid #ddd;">Resource doesn't exist</td>
                        <td style="padding:8px; border:1px solid #ddd;">Invalid URI</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">409 Conflict</td>
                        <td style="padding:8px; border:1px solid #ddd;">Conflict with current state</td>
                        <td style="padding:8px; border:1px solid #ddd;">Duplicate entry, version mismatch</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">429 Too Many Requests</td>
                        <td style="padding:8px; border:1px solid #ddd;">Rate limited</td>
                        <td style="padding:8px; border:1px solid #ddd;">Exceeded API limits</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">500 Internal Server Error</td>
                        <td style="padding:8px; border:1px solid #ddd;">Server error</td>
                        <td style="padding:8px; border:1px solid #ddd;">Unexpected condition</td>
                    </tr>
                </table>
                
                <h4>WebSocket Protocol</h4>
                <p>WebSocket provides full-duplex communication over a single TCP connection, enabling real-time data transfer.</p>
                
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
// WebSocket handshake (HTTP upgrade)
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13

// Server response
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=

// Client-side JavaScript
const socket = new WebSocket('ws://example.com/chat');

socket.onopen = function(event) {
    socket.send('Hello Server!');
};

socket.onmessage = function(event) {
    console.log('Message from server:', event.data);
};

socket.onclose = function(event) {
    console.log('Connection closed');
};

// Server-side (Node.js with ws library)
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        
        // Broadcast to all clients
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});
                </pre>
                
                <h4>Protocol Comparison</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Protocol</th>
                        <th style="padding:10px; border:1px solid #ddd;">Communication Pattern</th>
                        <th style="padding:10px; border:1px solid #ddd;">Best For</th>
                        <th style="padding:10px; border:1px solid #ddd;">Overhead</th>
                        <th style="padding:10px; border:1px solid #ddd;">State</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">HTTP/1.1</td>
                        <td style="padding:8px; border:1px solid #ddd;">Request-Response</td>
                        <td style="padding:8px; border:1px solid #ddd;">Traditional web, REST APIs</td>
                        <td style="padding:8px; border:1px solid #ddd;">High (headers per request)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Stateless</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">HTTP/2</td>
                        <td style="padding:8px; border:1px solid #ddd;">Multiplexed streams</td>
                        <td style="padding:8px; border:1px solid #ddd;">Modern web apps</td>
                        <td style="padding:8px; border:1px solid #ddd;">Lower (header compression)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Stateless</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">WebSocket</td>
                        <td style="padding:8px; border:1px solid #ddd;">Bidirectional</td>
                        <td style="padding:8px; border:1px solid #ddd;">Real-time apps, games, chat</td>
                        <td style="padding:8px; border:1px solid #ddd;">Low after handshake</td>
                        <td style="padding:8px; border:1px solid #ddd;">Stateful connection</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Server-Sent Events (SSE)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Server to client only</td>
                        <td style="padding:8px; border:1px solid #ddd;">Live feeds, notifications</td>
                        <td style="padding:8px; border:1px solid #ddd;">Low</td>
                        <td style="padding:8px; border:1px solid #ddd;">Server-maintained connection</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">gRPC</td>
                        <td style="padding:8px; border:1px solid #ddd;">RPC over HTTP/2</td>
                        <td style="padding:8px; border:1px solid #ddd;">Microservices communication</td>
                        <td style="padding:8px; border:1px solid #ddd;">Low (Protocol Buffers)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Supports streaming</td>
                    </tr>
                </table>
                
                <div class="key-points-box">
                    <p><strong>🔑 Key Point:</strong> Choose protocols based on requirements: REST for standard APIs, WebSocket for real-time bidirectional communication, SSE for server push, gRPC for high-performance microservices.</p>
                </div>
            `,
      keyPoints: [
        "REST: resources as nouns, HTTP methods as verbs, stateless",
        "Use proper HTTP status codes for clear API responses",
        "WebSocket enables full-duplex real-time communication",
        "HTTP/2 improves performance with multiplexing",
        "gRPC uses Protocol Buffers for efficient service communication",
        "Protocol choice impacts performance, complexity, and scalability",
      ],
    },

    {
      title: "4.3 Concurrency Models (Analyze Level)",
      content: `
                <h4>What is Concurrency?</h4>
                <p>Concurrency is the ability to handle multiple tasks simultaneously. In web servers, concurrency allows handling multiple client requests at the same time.</p>
                
                <h4>Concurrency Models</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Model</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Pros</th>
                        <th style="padding:10px; border:1px solid #ddd;">Cons</th>
                        <th style="padding:10px; border:1px solid #ddd;">Examples</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Multi-Process</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Each request handled by separate process</td>
                        <td style="padding:8px; border:1px solid #ddd;">Isolation, stability (crash doesn't affect others)</td>
                        <td style="padding:8px; border:1px solid #ddd;">High memory usage, slow context switching</td>
                        <td style="padding:8px; border:1px solid #ddd;">Apache (prefork), CGI</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Multi-Threaded</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Each request handled by separate thread</td>
                        <td style="padding:8px; border:1px solid #ddd;">Lower memory than processes, shared memory</td>
                        <td style="padding:8px; border:1px solid #ddd;">Race conditions, deadlocks, thread safety</td>
                        <td style="padding:8px; border:1px solid #ddd;">Java servlets, Apache (worker)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Event-Driven (Async)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Single thread with event loop</td>
                        <td style="padding:8px; border:1px solid #ddd;">Very high concurrency, low overhead</td>
                        <td style="padding:8px; border:1px solid #ddd;">Complex programming model, CPU-bound tasks block</td>
                        <td style="padding:8px; border:1px solid #ddd;">Node.js, Nginx, EventMachine</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Hybrid</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Multiple event loops or process pools</td>
                        <td style="padding:8px; border:1px solid #ddd;">Scales across CPU cores</td>
                        <td style="padding:8px; border:1px solid #ddd;">More complex to manage</td>
                        <td style="padding:8px; border:1px solid #ddd;">Node.js cluster, Nginx worker processes</td>
                    </tr>
                </table>
                
                <h4>Multi-Threading Example (Java)</h4>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
public class ThreadedServer {
    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(8080);
        
        while (true) {
            Socket clientSocket = serverSocket.accept();
            
            // Create new thread for each client
            Thread thread = new Thread(new ClientHandler(clientSocket));
            thread.start();
        }
    }
}

class ClientHandler implements Runnable {
    private Socket clientSocket;
    
    public ClientHandler(Socket socket) {
        this.clientSocket = socket;
    }
    
    public void run() {
        try {
            BufferedReader in = new BufferedReader(
                new InputStreamReader(clientSocket.getInputStream()));
            PrintWriter out = new PrintWriter(
                clientSocket.getOutputStream(), true);
            
            String inputLine;
            while ((inputLine = in.readLine()) != null) {
                out.println("Echo: " + inputLine);
            }
            
            clientSocket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
                </pre>
                
                <h4>Event-Driven Model (Node.js)</h4>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
const http = require('http');

const server = http.createServer((req, res) => {
    // Single thread handles all requests via event loop
    if (req.url === '/api/data') {
        // Simulate I/O operation (non-blocking)
        setTimeout(() => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ data: 'Hello World' }));
        }, 100);
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});

// Event loop diagram
while (true) {
    // 1. Process timers (setTimeout, setInterval)
    // 2. Process pending callbacks
    // 3. Wait for I/O events
    // 4. Run any pending setImmediate
    // 5. Handle close events
}
                </pre>
                
                <h4>Thread Pool Pattern</h4>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
// Java thread pool example
ExecutorService threadPool = Executors.newFixedThreadPool(10);

while (true) {
    Socket clientSocket = serverSocket.accept();
    threadPool.execute(new ClientHandler(clientSocket));
}

// Python with concurrent.futures
from concurrent.futures import ThreadPoolExecutor
import http.server

def handle_request(client_connection):
    # Process request
    pass

with ThreadPoolExecutor(max_workers=10) as executor:
    while True:
        client_connection = server_socket.accept()
        executor.submit(handle_request, client_connection)
                </pre>
                
                <h4>Analyze Exercise: Concurrency Model Selection</h4>
                
                <p><strong>Scenario 1: CPU-Intensive Image Processing Server</strong></p>
                <ul>
                    <li><strong>Requirements:</strong> Process uploaded images (resize, filter), each request takes 0.5-2 seconds CPU time</li>
                    <li><strong>Analysis:</strong> Event-driven (Node.js) would block the event loop during CPU operations, causing poor concurrency. Multi-threaded or multi-process model better to utilize multiple CPU cores.</li>
                    <li><strong>Recommendation:</strong> Thread pool with worker threads, or use Node.js worker threads for CPU tasks</li>
                </ul>
                
                <p><strong>Scenario 2: High-Concurrency API with I/O Operations</strong></p>
                <ul>
                    <li><strong>Requirements:</strong> 10,000+ concurrent connections, mostly database queries and external API calls</li>
                    <li><strong>Analysis:</strong> I/O-bound workload perfect for event-driven model. Node.js or Nginx can handle 10k+ connections efficiently.</li>
                    <li><strong>Recommendation:</strong> Node.js with async I/O, or Nginx as reverse proxy with event-driven backend</li>
                </ul>
                
                <p><strong>Scenario 3: Legacy Enterprise Application</strong></p>
                <ul>
                    <li><strong>Requirements:</strong> Complex business logic, shared state, existing codebase in Java</li>
                    <li><strong>Analysis:</strong> Thread-based model familiar to Java developers, careful synchronization needed for shared state</li>
                    <li><strong>Recommendation:</strong> Java with thread pool, proper synchronization, consider connection pooling</li>
                </ul>
            `,
      keyPoints: [
        "Multi-process: isolated but memory-heavy",
        "Multi-threaded: efficient but requires synchronization",
        "Event-driven: high concurrency for I/O, but CPU tasks block",
        "Thread pools limit resource usage while providing concurrency",
        "Choose model based on workload (CPU vs I/O bound)",
        "Modern approaches combine models (worker threads + event loop)",
      ],
    },

    {
      title: "4.4 Race Conditions and Deadlocks (Analyze Level)",
      content: `
                <h4>Race Conditions</h4>
                <p>A race condition occurs when multiple threads or processes access shared resources concurrently, and the outcome depends on the timing or interleaving of operations.</p>
                
                <div class="key-points-box">
                    <p><strong>🔑 Key Point:</strong> Race conditions lead to unpredictable behavior, data corruption, and hard-to-reproduce bugs.</p>
                </div>
                
                <h5>Example: Bank Account Withdrawal</h5>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
// Shared account object
class BankAccount {
    private int balance = 100;
    
    public void withdraw(int amount) {
        if (balance >= amount) {           // Thread 1 checks (balance=100)
            // Context switch here!
            balance -= amount;              // Thread 1 subtracts
        }
    }
}

// Two threads executing simultaneously
// Thread 1: withdraw(80)
// Thread 2: withdraw(80)

// Possible execution:
// Thread 1: checks balance (100 >= 80) - true
// [Context switch to Thread 2]
// Thread 2: checks balance (100 >= 80) - true
// Thread 2: balance = 100 - 80 = 20
// [Context switch back to Thread 1]
// Thread 1: balance = 100 - 80 = 20 (but should be 20, not negative!)

// Result: balance = 20 (should be 20) but both withdrawals succeeded!
// Account allowed 160 withdrawal with only 100 balance.
                </pre>
                
                <h5>Race Condition Prevention</h5>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
// Java synchronized method
public synchronized void withdraw(int amount) {
    if (balance >= amount) {
        balance -= amount;
    }
}

// Java with Lock
import java.util.concurrent.locks.ReentrantLock;

Lock lock = new ReentrantLock();

public void withdraw(int amount) {
    lock.lock();
    try {
        if (balance >= amount) {
            balance -= amount;
        }
    } finally {
        lock.unlock();
    }
}

// Node.js with atomic operations (single-threaded, no race on variables)
// But database operations still need transactions

// Database transaction (SQL)
BEGIN TRANSACTION;
SELECT balance FROM accounts WHERE id = 123 FOR UPDATE;
UPDATE accounts SET balance = balance - 80 WHERE id = 123 AND balance >= 80;
COMMIT;

// Optimistic locking
UPDATE accounts 
SET balance = balance - 80, version = version + 1 
WHERE id = 123 AND version = 5 AND balance >= 80;
                </pre>
                
                <h4>Deadlocks</h4>
                <p>A deadlock occurs when two or more threads are blocked forever, each waiting for resources held by the other.</p>
                
                <h5>Deadlock Example</h5>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
// Two resources: Account A and Account B
// Thread 1 transfers from A to B
// Thread 2 transfers from B to A

// Thread 1:
synchronized(accountA) {
    // Context switch to Thread 2 here
    synchronized(accountB) {
        // transfer
    }
}

// Thread 2:
synchronized(accountB) {
    synchronized(accountA) {
        // transfer
    }
}

// Deadlock! Thread 1 holds A waiting for B
// Thread 2 holds B waiting for A
                </pre>
                
                <h5>Deadlock Prevention Strategies</h5>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Strategy</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Lock Ordering</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Always acquire locks in the same order</td>
                        <td style="padding:8px; border:1px solid #ddd;">Always lock account with smaller ID first</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Lock Timeout</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Fail if lock not acquired within time</td>
                        <td style="padding:8px; border:1px solid #ddd;">tryLock() with timeout</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Deadlock Detection</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Detect and break deadlocks</td>
                        <td style="padding:8px; border:1px solid #ddd;">Database deadlock detection, kill one transaction</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Avoid Nested Locks</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Minimize locking multiple resources</td>
                        <td style="padding:8px; border:1px solid #ddd;">Use single lock or lock-free algorithms</td>
                    </tr>
                </table>
                
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
// Lock ordering solution
public void transfer(Account from, Account to, int amount) {
    // Always lock accounts in consistent order (by ID)
    Account first = from.id < to.id ? from : to;
    Account second = from.id < to.id ? to : from;
    
    synchronized(first) {
        synchronized(second) {
            if (from.balance >= amount) {
                from.balance -= amount;
                to.balance += amount;
            }
        }
    }
}

// Lock timeout solution
Lock lock1 = new ReentrantLock();
Lock lock2 = new ReentrantLock();

if (lock1.tryLock(1, TimeUnit.SECONDS)) {
    try {
        if (lock2.tryLock(1, TimeUnit.SECONDS)) {
            try {
                // critical section
            } finally {
                lock2.unlock();
            }
        }
    } finally {
        lock1.unlock();
    }
}
                </pre>
                
                <h4>Database Transaction Isolation Levels</h4>
                <p>Isolation levels control how transactions interact, preventing various concurrency issues:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Isolation Level</th>
                        <th style="padding:10px; border:1px solid #ddd;">Dirty Read</th>
                        <th style="padding:10px; border:1px solid #ddd;">Non-Repeatable Read</th>
                        <th style="padding:10px; border:1px solid #ddd;">Phantom Read</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Read Uncommitted</td>
                        <td style="padding:8px; border:1px solid #ddd;">❌ Possible</td>
                        <td style="padding:8px; border:1px solid #ddd;">❌ Possible</td>
                        <td style="padding:8px; border:1px solid #ddd;">❌ Possible</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Read Committed</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Prevented</td>
                        <td style="padding:8px; border:1px solid #ddd;">❌ Possible</td>
                        <td style="padding:8px; border:1px solid #ddd;">❌ Possible</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Repeatable Read</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Prevented</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Prevented</td>
                        <td style="padding:8px; border:1px solid #ddd;">❌ Possible</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Serializable</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Prevented</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Prevented</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Prevented</td>
                    </tr>
                </table>
                
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
-- Set isolation level
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
BEGIN TRANSACTION;
-- critical operations
COMMIT;

-- PostgreSQL
BEGIN;
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
-- operations
COMMIT;

-- MySQL
SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;
                </pre>
            `,
      keyPoints: [
        "Race conditions: multiple threads access shared data without synchronization",
        "Use locks, synchronized methods, or atomic operations to prevent races",
        "Deadlocks occur when circular waiting for resources",
        "Prevent deadlocks with lock ordering, timeouts, or detection",
        "Database isolation levels control concurrency effects",
        "Higher isolation levels reduce concurrency but increase consistency",
      ],
    },

    {
      title: "4.5 Synchronization Mechanisms (Apply Level)",
      content: `
                <h4>Overview of Synchronization</h4>
                <p>Synchronization mechanisms coordinate access to shared resources, preventing race conditions and ensuring data consistency.</p>
                
                <h4>Synchronization Primitives</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Primitive</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Use Case</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Mutex (Lock)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Mutual exclusion - only one thread can hold lock</td>
                        <td style="padding:8px; border:1px solid #ddd;">Protecting critical sections</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Semaphore</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Counter controlling access to multiple resources</td>
                        <td style="padding:8px; border:1px solid #ddd;">Limiting concurrent connections</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Read/Write Lock</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Multiple readers OR single writer</td>
                        <td style="padding:8px; border:1px solid #ddd;">Read-heavy shared data</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Condition Variable</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Threads wait for condition to become true</td>
                        <td style="padding:8px; border:1px solid #ddd;">Producer-consumer patterns</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Atomic Operations</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Hardware-level atomic instructions</td>
                        <td style="padding:8px; border:1px solid #ddd;">Counters, flags</td>
                    </tr>
                </table>
                
                <h4>Java Synchronization Examples</h4>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
// Synchronized method
public class Counter {
    private int count = 0;
    
    public synchronized void increment() {
        count++;
    }
    
    public synchronized int getCount() {
        return count;
    }
}

// ReentrantLock
import java.util.concurrent.locks.ReentrantLock;

public class Counter {
    private int count = 0;
    private final ReentrantLock lock = new ReentrantLock();
    
    public void increment() {
        lock.lock();
        try {
            count++;
        } finally {
            lock.unlock();
        }
    }
}

// ReadWriteLock
import java.util.concurrent.locks.ReentrantReadWriteLock;

public class DataStore {
    private Map<String, String> data = new HashMap<>();
    private final ReentrantReadWriteLock rwLock = new ReentrantReadWriteLock();
    
    public String read(String key) {
        rwLock.readLock().lock();
        try {
            return data.get(key);
        } finally {
            rwLock.readLock().unlock();
        }
    }
    
    public void write(String key, String value) {
        rwLock.writeLock().lock();
        try {
            data.put(key, value);
        } finally {
            rwLock.writeLock().unlock();
        }
    }
}

// Semaphore - limit connections
Semaphore semaphore = new Semaphore(10); // max 10 connections

public void handleRequest() {
    try {
        semaphore.acquire();
        // process request
    } finally {
        semaphore.release();
    }
}
                </pre>
                
                <h4>Python Synchronization</h4>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
import threading

# Lock
counter_lock = threading.Lock()
counter = 0

def increment():
    global counter
    with counter_lock:
        counter += 1

# RLock (reentrant lock)
rlock = threading.RLock()

# Semaphore
semaphore = threading.Semaphore(10)

# Event (condition variable)
event = threading.Event()

# Producer-consumer with Condition
import threading
import time

class Queue:
    def __init__(self, maxsize):
        self.items = []
        self.maxsize = maxsize
        self.condition = threading.Condition()
    
    def put(self, item):
        with self.condition:
            while len(self.items) >= self.maxsize:
                self.condition.wait()
            self.items.append(item)
            self.condition.notify()
    
    def get(self):
        with self.condition:
            while not self.items:
                self.condition.wait()
            item = self.items.pop(0)
            self.condition.notify()
            return item
                </pre>
                
                <h4>Node.js Async Patterns</h4>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
// Node.js is single-threaded, but has async patterns
// Use async/await for sequential operations
async function processData() {
    const data1 = await fetchData1();
    const data2 = await fetchData2(data1);
    return data2;
}

// Promise.all for concurrent independent operations
const [users, posts] = await Promise.all([
    fetchUsers(),
    fetchPosts()
]);

// Queue for limiting concurrency
class Queue {
    constructor(concurrency) {
        this.concurrency = concurrency;
        this.running = 0;
        this.queue = [];
    }
    
    async add(task) {
        if (this.running >= this.concurrency) {
            await new Promise(resolve => this.queue.push(resolve));
        }
        
        this.running++;
        try {
            return await task();
        } finally {
            this.running--;
            if (this.queue.length) {
                this.queue.shift()();
            }
        }
    }
}

// Usage
const queue = new Queue(5);
for (let i = 0; i < 100; i++) {
    queue.add(() => fetch('https://api.example.com/data/' + i));
}
                </pre>
                
                <h4>Database-Level Locking</h4>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
-- Pessimistic locking (SELECT FOR UPDATE)
BEGIN;
SELECT * FROM products WHERE id = 123 FOR UPDATE;
-- update product
UPDATE products SET stock = stock - 1 WHERE id = 123;
COMMIT;

-- Optimistic locking (version column)
UPDATE products 
SET stock = stock - 1, version = version + 1 
WHERE id = 123 AND version = 5 AND stock > 0;

-- Advisory locks (PostgreSQL)
SELECT pg_advisory_lock(123);
-- critical section
SELECT pg_advisory_unlock(123);

-- Redis distributed locks
const redis = require('redis');
const client = redis.createClient();

async function acquireLock(key, ttl) {
    const result = await client.setnx(key, 'locked');
    if (result === 1) {
        await client.expire(key, ttl);
        return true;
    }
    return false;
}

async function releaseLock(key) {
    await client.del(key);
}
                </pre>
            `,
      keyPoints: [
        "Mutex: exclusive access to resource",
        "Semaphore: control access to multiple resources",
        "ReadWriteLock: multiple readers, single writer",
        "Condition variables: coordinate thread execution",
        "Atomic operations: lock-free synchronization",
        "Choose synchronization based on concurrency requirements",
        "Database locks ensure consistency across transactions",
      ],
    },

    {
      title: "4.6 Load Balancing and Scalability (Evaluate Level)",
      content: `
                <h4>What is Load Balancing?</h4>
                <p>Load balancing distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed, improving responsiveness and availability.</p>
                
                <div style="text-align:center; margin:20px 0;">
                    <pre style="background:#f4f4f4; padding:10px; display:inline-block;">
        [Clients]
            ↓
    [Load Balancer]
        ↓    ↓    ↓
    [Server1][Server2][Server3]
        ↓    ↓    ↓
    [Database Cluster]
                    </pre>
                </div>
                
                <h4>Load Balancing Algorithms</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Algorithm</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Pros</th>
                        <th style="padding:10px; border:1px solid #ddd;">Cons</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Round Robin</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Requests distributed sequentially</td>
                        <td style="padding:8px; border:1px solid #ddd;">Simple, works well for identical servers</td>
                        <td style="padding:8px; border:1px solid #ddd;">Doesn't account for server load</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Least Connections</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Send to server with fewest active connections</td>
                        <td style="padding:8px; border:1px solid #ddd;">Accounts for varying request processing time</td>
                        <td style="padding:8px; border:1px solid #ddd;">Requires tracking connections</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>IP Hash</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Client IP determines server</td>
                        <td style="padding:8px; border:1px solid #ddd;">Session persistence (sticky sessions)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Uneven distribution possible</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Weighted Round Robin</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Servers with higher capacity get more requests</td>
                        <td style="padding:8px; border:1px solid #ddd;">Handles heterogeneous servers</td>
                        <td style="padding:8px; border:1px solid #ddd;">Requires manual weight configuration</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Random</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Random server selection</td>
                        <td style="padding:8px; border:1px solid #ddd;">Simple, good distribution with many requests</td>
                        <td style="padding:8px; border:1px solid #ddd;">Can overload slower servers</td>
                    </tr>
                </table>
                
                <h4>Load Balancer Types</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Examples</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Hardware</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Physical appliances</td>
                        <td style="padding:8px; border:1px solid #ddd;">F5 BIG-IP, Citrix ADC</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Software</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Runs on standard servers</td>
                        <td style="padding:8px; border:1px solid #ddd;">Nginx, HAProxy, Apache</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Cloud</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Managed services</td>
                        <td style="padding:8px; border:1px solid #ddd;">AWS ELB, Google Cloud Load Balancing</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>DNS</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Multiple A records, client chooses</td>
                        <td style="padding:8px; border:1px solid #ddd;">Round-robin DNS</td>
                    </tr>
                </table>
                
                <h4>Nginx Load Balancing Configuration</h4>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
http {
    upstream backend {
        # Round robin (default)
        server backend1.example.com weight=3;
        server backend2.example.com;
        server backend3.example.com backup;
        
        # Least connections
        least_conn;
        
        # IP hash for session persistence
        ip_hash;
        
        # Keepalive connections
        keepalive 32;
    }
    
    server {
        listen 80;
        server_name example.com;
        
        location / {
            proxy_pass http://backend;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            
            # Health checks
            health_check interval=5s fails=3 passes=2;
        }
    }
}
                </pre>
                
                <h4>HAProxy Configuration</h4>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
global
    log /dev/log local0
    maxconn 4096
    user haproxy
    group haproxy

defaults
    log global
    mode http
    option httplog
    option dontlognull
    retries 3
    timeout connect 5000
    timeout client 50000
    timeout server 50000

frontend http-in
    bind *:80
    default_backend servers

backend servers
    balance roundrobin
    # balance leastconn
    # balance source  # for IP hash
    
    option httpchk GET /health
    server server1 10.0.0.1:80 check inter 3000
    server server2 10.0.0.2:80 check inter 3000
    server server3 10.0.0.3:80 check inter 3000 backup
                </pre>
                
                <h4>Session Persistence (Sticky Sessions)</h4>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
// Nginx sticky sessions
upstream backend {
    sticky cookie srv_id expires=1h;
    server backend1.example.com;
    server backend2.example.com;
}

// Application-level session store (Redis)
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

app.use(session({
    store: new RedisStore({ client: redisClient }),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
                </pre>
                
                <h4>Scalability Strategies</h4>
                
                <h5>Vertical Scaling (Scale Up)</h5>
                <ul>
                    <li>Add more resources to existing server (CPU, RAM, disk)</li>
                    <li>Simpler, no architecture changes</li>
                    <li>Has hardware limits, expensive at high end</li>
                </ul>
                
                <h5>Horizontal Scaling (Scale Out)</h5>
                <ul>
                    <li>Add more servers to the pool</li>
                    <li>Virtually unlimited scaling</li>
                    <li>Requires load balancing and distributed architecture</li>
                    <li>More complex but cost-effective</li>
                </ul>
                
                <h5>Database Scaling</h5>
                <ul>
                    <li><strong>Read Replicas:</strong> Distribute read queries</li>
                    <li><strong>Sharding:</strong> Split data across databases</li>
                    <li><strong>Partitioning:</strong> Split tables within database</li>
                    <li><strong>Caching:</strong> Redis, Memcached for hot data</li>
                </ul>
                
                <h4>Evaluate Exercise: Load Balancing Strategy</h4>
                
                <p><strong>Scenario 1: E-commerce site with user sessions</strong></p>
                <ul>
                    <li><strong>Requirements:</strong> 100,000 concurrent users, each with shopping cart stored in session</li>
                    <li><strong>Options:</strong> 
                        <ul>
                            <li>Sticky sessions with least connections</li>
                            <li>Centralized session store (Redis) with round robin</li>
                        </ul>
                    </li>
                    <li><strong>Evaluation:</strong> Centralized session store is more resilient - any server can handle any request. If a server fails, sessions aren't lost. Redis provides fast access. Use round robin or least connections with session store.</li>
                </ul>
                
                <p><strong>Scenario 2: Video streaming service</strong></p>
                <ul>
                    <li><strong>Requirements:</strong> Large files, long-lived connections, different bitrates</li>
                    <li><strong>Options:</strong> 
                        <ul>
                            <li>Least connections (since connections vary in duration)</li>
                            <li>Weighted based on server capacity</li>
                        </ul>
                    </li>
                    <li><strong>Evaluation:</strong> Least connections best accounts for varying connection durations. Use weighted if servers have different capacities. Consider CDN for static video files.</li>
                </ul>
            `,
      keyPoints: [
        "Load balancing distributes traffic across servers",
        "Algorithms: round robin, least connections, IP hash, weighted",
        "Software load balancers: Nginx, HAProxy",
        "Cloud load balancers: AWS ELB, Google Cloud LB",
        "Sticky sessions tie clients to specific servers",
        "Horizontal scaling adds servers, vertical scaling adds power",
        "Database scaling: read replicas, sharding, caching",
      ],
    },

    {
      title: "4.7 Real-Time Communication and WebSockets (Evaluate Level)",
      content: `
                <h4>Real-Time Web Applications</h4>
                <p>Real-time web applications require instant communication between clients and servers, enabling features like chat, notifications, live updates, and collaborative editing.</p>
                
                <h4>WebSocket Architecture</h4>
                
                <div style="text-align:center; margin:20px 0;">
                    <pre style="background:#f4f4f4; padding:10px; display:inline-block;">
    [Client]                 [Server]
        |                        |
        | ---- HTTP Upgrade ----> |
        | <--- Switching Protocols |
        |                        |
        | === WebSocket Connection == |
        | <------ message ------- |
        | ------- message ------> |
        | <------ message ------- |
        |                        |
        | ---- Close -----------> |
                    </pre>
                </div>
                
                <h4>WebSocket Implementation (Node.js)</h4>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
// Server with ws library
const WebSocket = require('ws');
const http = require('http');
const server = http.createServer();
const wss = new WebSocket.Server({ server });

// Store connected clients
const clients = new Map();

wss.on('connection', (ws, req) => {
    const clientId = generateId();
    clients.set(clientId, ws);
    
    console.log(\`Client \${clientId} connected\`);
    
    // Send welcome message
    ws.send(JSON.stringify({
        type: 'welcome',
        clientId: clientId,
        message: 'Welcome to the server!'
    }));
    
    // Handle messages
    ws.on('message', (data) => {
        try {
            const message = JSON.parse(data);
            console.log('Received:', message);
            
            // Handle different message types
            switch(message.type) {
                case 'chat':
                    broadcast(message, clientId);
                    break;
                case 'private':
                    sendPrivate(message);
                    break;
                case 'typing':
                    notifyTyping(message, clientId);
                    break;
                case 'ping':
                    ws.send(JSON.stringify({ type: 'pong', timestamp: Date.now() }));
                    break;
            }
        } catch (error) {
            console.error('Invalid message:', error);
        }
    });
    
    // Handle disconnection
    ws.on('close', () => {
        clients.delete(clientId);
        broadcast({
            type: 'userLeft',
            clientId: clientId,
            message: 'User disconnected'
        });
    });
    
    // Handle errors
    ws.on('error', (error) => {
        console.error(\`Client \${clientId} error:\`, error);
    });
});

// Broadcast to all clients except sender
function broadcast(message, senderId = null) {
    const data = JSON.stringify(message);
    clients.forEach((client, id) => {
        if (id !== senderId && client.readyState === WebSocket.OPEN) {
            client.send(data);
        }
    });
}

// Send private message
function sendPrivate(message) {
    const targetClient = clients.get(message.targetId);
    if (targetClient && targetClient.readyState === WebSocket.OPEN) {
        targetClient.send(JSON.stringify(message));
    }
}

// Heartbeat to keep connections alive
setInterval(() => {
    clients.forEach((client, id) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ type: 'ping' }));
        } else {
            clients.delete(id);
        }
    });
}, 30000);

server.listen(8080, () => {
    console.log('WebSocket server running on port 8080');
});
                </pre>
                
                <h4>Client-Side WebSocket</h4>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
class ChatClient {
    constructor(url) {
        this.url = url;
        this.ws = null;
        this.reconnectAttempts = 0;
        this.maxReconnect = 5;
        this.messageHandlers = new Map();
    }
    
    connect() {
        this.ws = new WebSocket(this.url);
        
        this.ws.onopen = () => {
            console.log('Connected to server');
            this.reconnectAttempts = 0;
            this.trigger('connected');
        };
        
        this.ws.onmessage = (event) => {
            try {
                const message = JSON.parse(event.data);
                this.trigger(message.type, message);
            } catch (error) {
                console.error('Failed to parse message:', error);
            }
        };
        
        this.ws.onclose = () => {
            console.log('Disconnected from server');
            this.trigger('disconnected');
            this.reconnect();
        };
        
        this.ws.onerror = (error) => {
            console.error('WebSocket error:', error);
            this.trigger('error', error);
        };
    }
    
    reconnect() {
        if (this.reconnectAttempts < this.maxReconnect) {
            this.reconnectAttempts++;
            const delay = Math.pow(2, this.reconnectAttempts) * 1000;
            console.log(\`Reconnecting in \${delay/1000}s...\`);
            
            setTimeout(() => {
                this.connect();
            }, delay);
        }
    }
    
    send(type, data = {}) {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify({
                type,
                ...data,
                timestamp: Date.now()
            }));
        } else {
            console.error('WebSocket not connected');
        }
    }
    
    on(event, handler) {
        this.messageHandlers.set(event, handler);
    }
    
    trigger(event, data) {
        const handler = this.messageHandlers.get(event);
        if (handler) {
            handler(data);
        }
    }
}

// Usage
const client = new ChatClient('ws://localhost:8080');

client.on('connected', () => {
    console.log('Ready to chat!');
    client.send('chat', { message: 'Hello everyone!' });
});

client.on('chat', (data) => {
    displayMessage(data.clientId, data.message);
});

client.on('typing', (data) => {
    showTypingIndicator(data.clientId);
});

client.connect();
                </pre>
                
                <h4>Alternatives to WebSockets</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Technology</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Pros</th>
                        <th style="padding:10px; border:1px solid #ddd;">Cons</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Long Polling</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Client requests, server holds until data available</td>
                        <td style="padding:8px; border:1px solid #ddd;">Works with all browsers</td>
                        <td style="padding:8px; border:1px solid #ddd;">High latency, server overhead</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Server-Sent Events (SSE)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Server pushes to client over HTTP</td>
                        <td style="padding:8px; border:1px solid #ddd;">Simple, automatic reconnection</td>
                        <td style="padding:8px; border:1px solid #ddd;">One-way only (server to client)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>WebRTC</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Peer-to-peer real-time communication</td>
                        <td style="padding:8px; border:1px solid #ddd;">Ultra-low latency, peer-to-peer</td>
                        <td style="padding:8px; border:1px solid #ddd;">Complex setup, signaling server needed</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>MQTT</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Lightweight publish-subscribe protocol</td>
                        <td style="padding:8px; border:1px solid #ddd;">Efficient for IoT, low bandwidth</td>
                        <td style="padding:8px; border:1px solid #ddd;">Requires broker, less common in web</td>
                    </tr>
                </table>
                
                <h4>Server-Sent Events (SSE) Example</h4>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
// Server-side (Node.js)
app.get('/events', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });
    
    // Send initial data
    res.write('data: Connected\\n\\n');
    
    // Send updates every 5 seconds
    const interval = setInterval(() => {
        const data = {
            time: new Date().toISOString(),
            users: getOnlineUsers(),
            messages: getRecentMessages()
        };
        res.write(\`data: \${JSON.stringify(data)}\\n\\n\`);
    }, 5000);
    
    // Handle client disconnect
    req.on('close', () => {
        clearInterval(interval);
    });
});

// Client-side
const eventSource = new EventSource('/events');

eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);
    updateUI(data);
};

eventSource.onerror = (error) => {
    console.error('SSE error:', error);
};
                </pre>
                
                <h4>Evaluate Exercise: Real-Time Protocol Selection</h4>
                
                <p><strong>Scenario 1: Live Sports Score Updates</strong></p>
                <ul>
                    <li><strong>Requirements:</strong> Thousands of concurrent users, updates every few seconds, one-way (server to client)</li>
                    <li><strong>Options:</strong> WebSocket, SSE, Long Polling</li>
                    <li><strong>Evaluation:</strong> SSE is perfect - one-way communication, automatic reconnection, simpler than WebSocket. Works for server-to-client push with reasonable latency.</li>
                </ul>
                
                <p><strong>Scenario 2: Multiplayer Game</strong></p>
                <ul>
                    <li><strong>Requirements:</strong> Ultra-low latency (<50ms), bidirectional communication, high frequency updates</li>
                    <li><strong>Options:</strong> WebSocket, WebRTC</li>
                    <li><strong>Evaluation:</strong> WebSocket provides low latency bidirectional communication. For peer-to-peer games, WebRTC might be better to reduce server load. For client-server games, WebSocket is simpler.</li>
                </ul>
                
                <p><strong>Scenario 3: Chat Application with 1M Users</strong></p>
                <ul>
                    <li><strong>Requirements:</strong> Scalable, reliable message delivery, typing indicators, read receipts</li>
                    <li><strong>Options:</strong> WebSocket with message queue, MQTT</li>
                    <li><strong>Evaluation:</strong> WebSocket with Redis pub/sub for horizontal scaling. Use message queues for reliable delivery. Consider MQTT if many mobile/IoT clients.</li>
                </ul>
            `,
      keyPoints: [
        "WebSocket provides full-duplex real-time communication",
        "SSE is simpler for server-to-client push",
        "Long polling works everywhere but inefficient",
        "WebRTC enables peer-to-peer real-time communication",
        "Consider reconnection strategies and heartbeats",
        "Scale WebSocket with Redis pub/sub or message queues",
        "Choose protocol based on directionality, latency, and scale",
      ],
    },

    {
      title: "4.8 Microservices Architecture (Evaluate Level)",
      content: `
                <h4>What are Microservices?</h4>
                <p>Microservices architecture structures an application as a collection of small, independent services, each running in its own process and communicating via lightweight mechanisms (usually HTTP APIs or message queues).</p>
                
                <div style="text-align:center; margin:20px 0;">
                    <pre style="background:#f4f4f4; padding:10px; display:inline-block;">
    [API Gateway]
         ↓
    ┌─────────────┬─────────────┬─────────────┐
    ↓             ↓             ↓             ↓
[User Service] [Order Service][Product Svc][Payment Svc]
    ↓             ↓             ↓             ↓
[User DB]     [Order DB]    [Product DB]  [Payment DB]
                    </pre>
                </div>
                
                <h4>Microservices vs Monolith</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Aspect</th>
                        <th style="padding:10px; border:1px solid #ddd;">Monolith</th>
                        <th style="padding:10px; border:1px solid #ddd;">Microservices</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Deployment</td>
                        <td style="padding:8px; border:1px solid #ddd;">Single unit</td>
                        <td style="padding:8px; border:1px solid #ddd;">Independent services</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Scaling</td>
                        <td style="padding:8px; border:1px solid #ddd;">Scale entire application</td>
                        <td style="padding:8px; border:1px solid #ddd;">Scale individual services</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Technology</td>
                        <td style="padding:8px; border:1px solid #ddd;">Single stack</td>
                        <td style="padding:8px; border:1px solid #ddd;">Polyglot (different languages)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Development</td>
                        <td style="padding:8px; border:1px solid #ddd;">Simple initially</td>
                        <td style="padding:8px; border:1px solid #ddd;">Complex (distributed systems)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Data</td>
                        <td style="padding:8px; border:1px solid #ddd;">Single database</td>
                        <td style="padding:8px; border:1px solid #ddd;">Database per service</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Team Organization</td>
                        <td style="padding:8px; border:1px solid #ddd;">Feature teams</td>
                        <td style="padding:8px; border:1px solid #ddd;">Service ownership teams</td>
                    </tr>
                </table>
                
                <h4>Microservice Communication Patterns</h4>
                
                <h5>1. Synchronous (HTTP/REST)</h5>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
// Order service calls user service
const user = await fetch('http://user-service/users/123');
const order = await createOrder(user, products);
                </pre>
                
                <h5>2. Asynchronous (Message Queue)</h5>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
// Order service publishes event
await rabbit.publish('order.created', {
    orderId: 123,
    userId: 456,
    total: 99.99
});

// Email service listens
rabbit.consume('order.created', async (msg) => {
    await sendOrderConfirmation(msg.userId, msg.orderId);
});

// Inventory service also listens
rabbit.consume('order.created', async (msg) => {
    await updateInventory(msg.orderId);
});
                </pre>
                
                <h5>3. gRPC (High-performance RPC)</h5>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
// Protocol Buffer definition
service UserService {
    rpc GetUser (UserRequest) returns (User) {}
}

message UserRequest {
    string user_id = 1;
}

message User {
    string id = 1;
    string name = 2;
    string email = 3;
}

// Client call
const user = await client.GetUser({ userId: '123' });
                </pre>
                
                <h4>API Gateway Pattern</h4>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
// Nginx as API Gateway
server {
    listen 80;
    server_name api.example.com;
    
    location /api/users {
        proxy_pass http://user-service;
    }
    
    location /api/orders {
        proxy_pass http://order-service;
    }
    
    location /api/products {
        proxy_pass http://product-service;
    }
}

// Express Gateway (Node.js)
const gateway = require('express-gateway');

gateway()
    .load(path.join(__dirname, 'config'))
    .run();
                </pre>
                
                <h4>Service Discovery</h4>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
// Consul service registration
{
    "service": {
        "name": "user-service",
        "port": 3001,
        "check": {
            "http": "http://localhost:3001/health",
            "interval": "10s"
        }
    }
}

// Client-side discovery
const consul = require('consul')();

async function getUser(userId) {
    const services = await consul.catalog.service.nodes('user-service');
    const service = services[Math.floor(Math.random() * services.length)];
    const url = \`http://\${service.Address}:\${service.ServicePort}/users/\${userId}\`;
    return fetch(url);
}

// Kubernetes built-in DNS
// user-service.default.svc.cluster.local resolves to service IP
                </pre>
                
                <h4>Distributed Transactions</h4>
                
                <h5>Saga Pattern</h5>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
// Order saga using choreography
async function createOrder(userId, productId) {
    // Step 1: Create order (pending)
    const order = await orderService.createPending(userId, productId);
    
    // Step 2: Reserve inventory (if fails, cancel order)
    try {
        await inventoryService.reserve(productId, order.id);
    } catch (error) {
        await orderService.cancel(order.id);
        throw error;
    }
    
    // Step 3: Process payment (if fails, release inventory + cancel)
    try {
        await paymentService.charge(userId, order.total);
    } catch (error) {
        await inventoryService.release(productId, order.id);
        await orderService.cancel(order.id);
        throw error;
    }
    
    // Step 4: Confirm order
    await orderService.confirm(order.id);
}

// Orchestrated saga
class OrderSaga {
    async execute(orderData) {
        try {
            const order = await this.createOrder(orderData);
            await this.reserveInventory(order);
            await this.processPayment(order);
            await this.confirmOrder(order);
        } catch (error) {
            await this.compensate(orderData);
        }
    }
    
    async compensate(orderData) {
        await this.cancelOrder(orderData);
        await this.releaseInventory(orderData);
        await this.refundPayment(orderData);
    }
}
                </pre>
                
                <h4>Evaluate Exercise: Microservices vs Monolith</h4>
                
                <p><strong>Scenario 1: Startup Building MVP</strong></p>
                <ul>
                    <li><strong>Requirements:</strong> Launch in 3 months, small team, uncertain features, need to validate market</li>
                    <li><strong>Evaluation:</strong> Start with monolith. Faster development, simpler deployment, easier to change. Can split into microservices later when needed.</li>
                </ul>
                
                <p><strong>Scenario 2: Large E-commerce Platform</strong></p>
                <ul>
                    <li><strong>Requirements:</strong> 50+ developers, multiple teams, different release cycles for different features, need to scale independently</li>
                    <li><strong>Evaluation:</strong> Microservices ideal. Teams can own services, deploy independently, scale based on demand (checkout needs more scaling than reviews).</li>
                </ul>
                
                <p><strong>Scenario 3: Real-time Analytics Platform</strong></p>
                <ul>
                    <li><strong>Requirements:</strong> Process millions of events per second, different processing pipelines</li>
                    <li><strong>Evaluation:</strong> Microservices with event-driven architecture. Different services for ingestion, processing, storage, querying. Use Kafka for reliable event streaming.</li>
                </ul>
            `,
      keyPoints: [
        "Microservices: independent services, each with own database",
        "Communication: HTTP/REST, message queues, gRPC",
        "API Gateway provides unified entry point",
        "Service discovery handles dynamic service locations",
        "Saga pattern manages distributed transactions",
        "Choose microservices for large teams and independent scaling",
        "Start with monolith for MVPs, split when needed",
      ],
    },
  ],

  keyPoints: [
    "Client-server architectures: two-tier, three-tier, n-tier, microservices",
    "Protocol design: REST (resources), WebSocket (real-time), gRPC (high-performance)",
    "Concurrency models: multi-process, multi-threaded, event-driven",
    "Race conditions require synchronization (locks, atomic ops, transactions)",
    "Deadlocks prevented by lock ordering, timeouts, detection",
    "Load balancing distributes traffic (round robin, least connections, IP hash)",
    "Real-time communication: WebSocket (bidirectional), SSE (server push)",
    "Microservices enable independent scaling but add complexity",
  ],

  summary: `
        <h3>Chapter 4 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Architecture Patterns:</strong> Two-tier (simple), Three-tier (standard), Microservices (scalable), choose based on scale and complexity</li>
            <li><strong>Protocol Design:</strong> REST for APIs (resources, HTTP methods), WebSocket for real-time, gRPC for high-performance microservices</li>
            <li><strong>Concurrency Models:</strong> Multi-process (isolated), Multi-threaded (efficient but need synchronization), Event-driven (high I/O concurrency)</li>
            <li><strong>Race Conditions:</strong> Prevent with locks, atomic operations, database transactions with appropriate isolation levels</li>
            <li><strong>Deadlocks:</strong> Prevent with consistent lock ordering, timeouts, or detection/retry</li>
            <li><strong>Load Balancing:</strong> Distribute traffic, algorithms (round robin, least connections), session persistence strategies</li>
            <li><strong>Real-Time Communication:</strong> WebSocket for bidirectional, SSE for server push, choose based on directionality and latency needs</li>
            <li><strong>Microservices:</strong> Independent services, database per service, communicate via APIs/messages, manage distributed transactions with Saga pattern</li>
        </ul>
    `,

  reviewQuestions: [
    {
      question:
        "Compare and contrast three-tier architecture with microservices architecture. When would you choose each?",
      answer:
        "Three-tier: single application with presentation, business, data layers - simpler, good for moderate scale. Microservices: independent services with own databases - better for large teams, independent scaling, technology diversity. Choose three-tier for startups and moderate scale, microservices for large enterprise applications with multiple teams.",
    },
    {
      question:
        "Explain the difference between WebSocket and Server-Sent Events (SSE). When would you use each?",
      answer:
        "WebSocket provides full-duplex bidirectional communication, suitable for chat, games, collaborative editing. SSE provides one-way server-to-client communication, simpler for live feeds, notifications, stock tickers. Use WebSocket when client needs to send data to server frequently, SSE when only server pushes updates.",
    },
    {
      question:
        "What is a race condition? Give an example and explain how to prevent it.",
      answer:
        "A race condition occurs when multiple threads access shared data concurrently and outcome depends on timing. Example: bank withdrawal where two threads check balance simultaneously. Prevent with locks, synchronized methods, atomic operations, or database transactions with appropriate isolation levels.",
    },
    {
      question: "Describe four load balancing algorithms and their use cases.",
      answer:
        "1. Round Robin: simple, equal distribution for identical servers. 2. Least Connections: send to server with fewest active connections, good for varying request times. 3. IP Hash: client IP determines server, provides session persistence. 4. Weighted Round Robin: servers with higher capacity get more requests, good for heterogeneous servers.",
    },
    {
      question:
        "What is the Saga pattern and why is it needed in microservices?",
      answer:
        "Saga pattern manages distributed transactions across microservices by breaking into local transactions with compensating actions. Needed because traditional ACID transactions don't work across services. Each step has compensating transaction to undo if later steps fail. Implemented via choreography (events) or orchestration (central coordinator).",
    },
  ],

  quickTips: [
    "Start with monolith, split to microservices when needed",
    "REST: use nouns for resources, HTTP methods for actions",
    "For high I/O concurrency, use event-driven model (Node.js)",
    "Always synchronize access to shared data",
    "Use consistent lock ordering to prevent deadlocks",
    "Least connections works well for most load balancing",
    "WebSocket for bidirectional, SSE for server push",
    "Each microservice should have its own database",
  ],

  commonMistakes: [
    "❌ Premature microservices (over-engineering)",
    "❌ Ignoring race conditions in shared data",
    "❌ Creating deadlocks with inconsistent lock ordering",
    "❌ Using sticky sessions without fallback",
    "❌ Not handling WebSocket reconnection",
    "❌ Distributed transactions without compensation",
    "❌ Sharing database between microservices",
    "❌ Not monitoring service health",
  ],

  examPreparation: `
        <h3>Blueprint Alignment for Chapter 4:</h3>
        <p>This chapter has <strong>3 questions</strong> distributed as:</p>
        <ul>
            <li><strong>1 Analyze question:</strong> Analyze architecture requirements, concurrency models, protocol design</li>
            <li><strong>2 Evaluate questions:</strong> Evaluate architecture choices, load balancing strategies, real-time communication protocols, microservices design</li>
        </ul>
        
        <h4>Analyze Level Focus:</h4>
        <ul>
            <li>Analyze requirements to choose appropriate architecture</li>
            <li>Identify race conditions and deadlock scenarios</li>
            <li>Analyze protocol design for specific requirements</li>
            <li>Determine appropriate concurrency model for workload</li>
        </ul>
        
        <h4>Evaluate Level Focus:</h4>
        <ul>
            <li>Compare microservices vs monolith for given scenario</li>
            <li>Evaluate load balancing strategies and recommend best fit</li>
            <li>Assess real-time communication protocols and trade-offs</li>
            <li>Judge synchronization mechanisms for concurrent access</li>
            <li>Evaluate distributed transaction strategies</li>
        </ul>
        
        <h4>Sample Analyze Question:</h4>
        <div style="background:#f8f9fa; padding:20px; border-radius:10px; margin:20px 0;">
            <p><strong>Question:</strong> A financial trading platform requires ultra-low latency, high throughput, and must handle 100,000 concurrent connections. Analyze the architecture requirements and recommend appropriate concurrency model and communication protocol.</p>
            
            <p><strong>Analysis Answer:</strong></p>
            <ul>
                <li><strong>Concurrency Model:</strong> Event-driven (Node.js/Netty) for high I/O concurrency, or thread pool with careful optimization. Event-driven better for I/O-bound with many connections.</li>
                <li><strong>Communication Protocol:</strong> WebSocket for bidirectional real-time updates with low overhead after handshake. Consider custom binary protocol over WebSocket for even lower latency.</li>
                <li><strong>Architecture:</strong> Microservices with dedicated services for market data, order execution, user accounts. Use in-memory data grids for low-latency access.</li>
                <li><strong>Synchronization:</strong> Lock-free data structures, atomic operations, careful design to avoid contention.</li>
            </ul>
        </div>
        
        <h4>Sample Evaluate Question:</h4>
        <div style="background:#f8f9fa; padding:20px; border-radius:10px; margin:20px 0;">
            <p><strong>Question:</strong> A company is migrating their e-commerce platform from monolith to microservices. Evaluate the following service boundaries: User Service (profiles, authentication), Order Service (orders, cart), Product Service (catalog, inventory), Payment Service. Identify potential issues and recommend improvements.</p>
            
            <p><strong>Evaluation Answer:</strong></p>
            <ul>
                <li><strong>Issues:</strong> 
                    <ul>
                        <li>Cart might belong better in Order Service or separate? Consider cart as separate if high churn.</li>
                        <li>Inventory tightly coupled with Product - could be separate if different scaling needs.</li>
                        <li>Authentication in User Service - security concerns, consider separate Auth Service.</li>
                    </ul>
                </li>
                <li><strong>Recommendations:</strong>
                    <ul>
                        <li>Separate Authentication Service for security and single responsibility.</li>
                        <li>Consider separating Inventory if it has different scaling patterns (frequent updates).</li>
                        <li>Use API Gateway for unified entry point, authentication, rate limiting.</li>
                        <li>Implement Saga pattern for order processing across services.</li>
                        <li>Use event-driven communication for order status updates.</li>
                    </ul>
                </li>
            </ul>
        </div>
    `,
};
