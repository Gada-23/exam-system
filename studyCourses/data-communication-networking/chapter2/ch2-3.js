// ===============================
// Data Communication and Computer Networks - Chapter 2.3
// Application Protocols
// ===============================

window.currentSubsectionData = {
    title: "2.3 Application Protocols",
    content: `
        <h2>2.3 Application Protocols</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand common application layer protocols and their purposes</li>
                <li>Learn about HTTP/HTTPS and web communication</li>
                <li>Explore email protocols: SMTP, POP3, and IMAP</li>
                <li>Understand FTP for file transfer</li>
                <li>Learn about DNS for name resolution</li>
                <li>Explore other important protocols like DHCP, SSH, and Telnet</li>
            </ul>
        </div>

        <!-- ==================== SECTION 2.3.1: INTRODUCTION TO APPLICATION PROTOCOLS ==================== -->
        <h3>2.3.1 Introduction to Application Protocols</h3>
        
        <p>Application protocols define the rules and conventions for communication between applications running on different devices. They specify message formats, exchange sequences, and actions to be taken.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> Application protocols are sets of rules that enable applications to communicate and exchange data over a network.</p>
        </div>
        
        <h4>Common Application Protocols Overview:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Protocol</th>
                <th style="padding: 10px;">Port</th>
                <th style="padding: 10px;">Transport</th>
                <th style="padding: 10px;">Description</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>HTTP</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">80</td>
                <td style="padding: 10px; border: 1px solid #ddd;">TCP</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Web page transfer</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>HTTPS</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">443</td>
                <td style="padding: 10px; border: 1px solid #ddd;">TCP</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Secure web transfer</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>FTP</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">20/21</td>
                <td style="padding: 10px; border: 1px solid #ddd;">TCP</td>
                <td style="padding: 10px; border: 1px solid #ddd;">File transfer</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>SMTP</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">25</td>
                <td style="padding: 10px; border: 1px solid #ddd;">TCP</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Email sending</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>POP3</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">110</td>
                <td style="padding: 10px; border: 1px solid #ddd;">TCP</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Email retrieval</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>IMAP</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">143</td>
                <td style="padding: 10px; border: 1px solid #ddd;">TCP</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Email access</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>DNS</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">53</td>
                <td style="padding: 10px; border: 1px solid #ddd;">UDP/TCP</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Domain name resolution</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>DHCP</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">67/68</td>
                <td style="padding: 10px; border: 1px solid #ddd;">UDP</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Dynamic IP assignment</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>SSH</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">22</td>
                <td style="padding: 10px; border: 1px solid #ddd;">TCP</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Secure remote access</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Telnet</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">23</td>
                <td style="padding: 10px; border: 1px solid #ddd;">TCP</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Remote terminal (insecure)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>SNMP</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">161/162</td>
                <td style="padding: 10px; border: 1px solid #ddd;">UDP</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Network management</td>
            </tr>
        </table>

        <!-- ==================== SECTION 2.3.2: HTTP AND HTTPS ==================== -->
        <h3>2.3.2 HTTP and HTTPS</h3>
        
        <h4>HTTP (Hypertext Transfer Protocol)</h4>
        
        <p>HTTP is the foundation of data communication for the World Wide Web. It defines how messages are formatted and transmitted, and how web servers and browsers should respond to commands.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 HTTP Characteristics:</strong> Stateless, text-based, client-server protocol using TCP port 80.</p>
        </div>
        
        <h5>HTTP Request Methods:</h5>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Method</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>GET</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Retrieve a resource (most common)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">GET /index.html HTTP/1.1</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>POST</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Submit data to be processed</td>
                <td style="padding: 10px; border: 1px solid #ddd;">POST /login.php HTTP/1.1</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>PUT</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Upload a resource</td>
                <td style="padding: 10px; border: 1px solid #ddd;">PUT /file.txt HTTP/1.1</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>DELETE</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Remove a resource</td>
                <td style="padding: 10px; border: 1px solid #ddd;">DELETE /file.txt HTTP/1.1</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>HEAD</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Same as GET but without response body</td>
                <td style="padding: 10px; border: 1px solid #ddd;">HEAD /index.html HTTP/1.1</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>OPTIONS</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Request allowed communication options</td>
                <td style="padding: 10px; border: 1px solid #ddd;">OPTIONS * HTTP/1.1</td>
            </tr>
        </table>
        
        <h5>HTTP Status Codes:</h5>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Code Range</th>
                <th style="padding: 10px;">Category</th>
                <th style="padding: 10px;">Examples</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">1xx</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Informational</td>
                <td style="padding: 10px; border: 1px solid #ddd;">100 Continue, 101 Switching Protocols</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">2xx</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Success</td>
                <td style="padding: 10px; border: 1px solid #ddd;">200 OK, 201 Created, 204 No Content</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">3xx</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Redirection</td>
                <td style="padding: 10px; border: 1px solid #ddd;">301 Moved Permanently, 302 Found, 304 Not Modified</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">4xx</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Client Error</td>
                <td style="padding: 10px; border: 1px solid #ddd;">400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">5xx</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Server Error</td>
                <td style="padding: 10px; border: 1px solid #ddd;">500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable</td>
            </tr>
        </table>
        
        <h5>HTTP Message Example:</h5>
        
        <pre>
        HTTP Request:
        GET /index.html HTTP/1.1
        Host: www.example.com
        User-Agent: Mozilla/5.0
        Accept: text/html,application/xhtml+xml
        Accept-Language: en-US,en;q=0.5
        Connection: keep-alive
        
        HTTP Response:
        HTTP/1.1 200 OK
        Date: Mon, 23 May 2024 12:28:53 GMT
        Server: Apache/2.4.1
        Content-Type: text/html
        Content-Length: 1234
        
        &lt;html&gt;
        &lt;head&gt;&lt;title&gt;Example&lt;/title&gt;&lt;/head&gt;
        &lt;body&gt;
        &lt;h1&gt;Hello World!&lt;/h1&gt;
        &lt;/body&gt;
        &lt;/html&gt;</pre>
        
        <h4>HTTPS (HTTP Secure)</h4>
        
        <p>HTTPS is HTTP over SSL/TLS, providing encrypted communication and secure identification of web servers.</p>
        
        <h5>Features:</h5>
        <ul>
            <li><strong>Encryption:</strong> Data is encrypted, preventing eavesdropping</li>
            <li><strong>Data integrity:</strong> Detects any modification of data</li>
            <li><strong>Authentication:</strong> Verifies the identity of the server</li>
            <li><strong>Port:</strong> Uses TCP port 443</li>
        </ul>
        
        <h5>How HTTPS Works:</h5>
        
        <pre>
        Client                          Server
          │                                │
          │───1. ClientHello (supported)──▶│
          │                                │
          │◀──2. ServerHello (chosen)──────│
          │      Certificate                │
          │                                │
          │───3. ClientKeyExchange────────▶│
          │      (encrypted with server key)│
          │                                │
          │───4. ChangeCipherSpec─────────▶│
          │      Finished                   │
          │                                │
          │◀──5. ChangeCipherSpec──────────│
          │      Finished                   │
          │                                │
          │   (Encrypted communication)     │
          │◀───────────────────────────────▶│</pre>

        <!-- ==================== SECTION 2.3.3: FTP (FILE TRANSFER PROTOCOL) ==================== -->
        <h3>2.3.3 FTP (File Transfer Protocol)</h3>
        
        <p>FTP is a standard network protocol used for transferring files between a client and server on a computer network.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 FTP Characteristics:</strong> Uses two connections: control connection (port 21) and data connection (port 20). Supports authentication and different transfer modes.</p>
        </div>
        
        <h4>FTP Connections:</h4>
        
        <ul>
            <li><strong>Control Connection:</strong> Used for sending commands and receiving responses (port 21)</li>
            <li><strong>Data Connection:</strong> Used for actual file transfer (port 20)</li>
        </ul>
        
        <h4>FTP Transfer Modes:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Mode</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Use Case</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Active Mode</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Server initiates data connection to client</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Older method, can have firewall issues</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Passive Mode</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Client initiates data connection to server</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Works better through firewalls</td>
            </tr>
        </table>
        
        <h4>Common FTP Commands:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Command</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>USER</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Send username</td>
                <td style="padding: 10px; border: 1px solid #ddd;">USER john</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>PASS</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Send password</td>
                <td style="padding: 10px; border: 1px solid #ddd;">PASS secret123</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>LIST</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">List files in directory</td>
                <td style="padding: 10px; border: 1px solid #ddd;">LIST</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>RETR</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Retrieve (download) file</td>
                <td style="padding: 10px; border: 1px solid #ddd;">RETR file.txt</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>STOR</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Store (upload) file</td>
                <td style="padding: 10px; border: 1px solid #ddd;">STOR file.txt</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>DELE</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Delete file</td>
                <td style="padding: 10px; border: 1px solid #ddd;">DELE file.txt</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>CWD</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Change working directory</td>
                <td style="padding: 10px; border: 1px solid #ddd;">CWD /docs</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>PWD</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Print working directory</td>
                <td style="padding: 10px; border: 1px solid #ddd;">PWD</td>
            </tr>
        </table>
        
        <h4>FTP Session Example:</h4>
        
        <pre>
        Client: USER john
        Server: 331 Password required for john
        Client: PASS secret123
        Server: 230 User john logged in
        Client: LIST
        Server: 150 Opening data connection
        Server: (sends directory listing)
        Server: 226 Transfer complete
        Client: RETR file.txt
        Server: 150 Opening data connection
        Server: (sends file content)
        Server: 226 Transfer complete
        Client: QUIT
        Server: 221 Goodbye</pre>

        <!-- ==================== SECTION 2.3.4: EMAIL PROTOCOLS (SMTP, POP3, IMAP) ==================== -->
        <h3>2.3.4 Email Protocols</h3>
        
        <h4>SMTP (Simple Mail Transfer Protocol)</h4>
        
        <p>SMTP is used for sending email messages between servers and from clients to servers.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 SMTP Characteristics:</strong> Uses TCP port 25 (or 587 for submission). Push protocol - pushes email to server.</p>
        </div>
        
        <h5>SMTP Commands:</h5>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Command</th>
                <th style="padding: 10px;">Description</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>HELO/EHLO</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Identify client to server</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>MAIL FROM</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Specify sender</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>RCPT TO</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Specify recipient</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>DATA</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Start message content</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>QUIT</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">End session</td>
            </tr>
        </table>
        
        <h5>SMTP Session Example:</h5>
        
        <pre>
        Client: HELO client.example.com
        Server: 250 Hello client.example.com
        Client: MAIL FROM: <alice@example.com>
        Server: 250 OK
        Client: RCPT TO: <bob@example.com>
        Server: 250 OK
        Client: DATA
        Server: 354 End data with <CRLF>.<CRLF>
        Client: Subject: Hello
        Client: 
        Client: Hi Bob, how are you?
        Client: .
        Server: 250 Message accepted
        Client: QUIT
        Server: 221 Bye</pre>
        
        <h4>POP3 (Post Office Protocol version 3)</h4>
        
        <p>POP3 is used for retrieving email from a mail server. It typically downloads messages and deletes them from the server.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 POP3 Characteristics:</strong> Uses TCP port 110. Simple protocol that downloads messages for local storage.</p>
        </div>
        
        <h5>POP3 Commands:</h5>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Command</th>
                <th style="padding: 10px;">Description</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>USER</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Send username</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>PASS</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Send password</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>STAT</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Get number of messages and total size</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>LIST</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">List message sizes</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>RETR</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Retrieve message</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>DELE</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Delete message</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>QUIT</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">End session (apply changes)</td>
            </tr>
        </table>
        
        <h4>IMAP (Internet Message Access Protocol)</h4>
        
        <p>IMAP is more advanced than POP3, allowing clients to manage messages on the server without downloading them.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 IMAP Characteristics:</strong> Uses TCP port 143. Messages remain on server, can be organized into folders, supports partial fetch.</p>
        </div>
        
        <h5>IMAP Features:</h5>
        <ul>
            <li>Messages stored on server</li>
            <li>Multiple folders/labels</li>
            <li>Partial message retrieval (download only headers first)</li>
            <li>Message state tracking (read, replied, forwarded)</li>
            <li>Multiple clients can access same mailbox</li>
            <li>Server-side searching</li>
        </ul>
        
        <h4>Comparison: POP3 vs IMAP</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Feature</th>
                <th style="padding: 10px;">POP3</th>
                <th style="padding: 10px;">IMAP</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Message storage</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Downloaded to client</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Remains on server</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Multiple clients</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Messages downloaded, not shared</td>
                <td style="padding: 10px; border: 1px solid #ddd;">All clients see same messages</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Folders</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Local only</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Server-side folders</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Offline access</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Yes (messages downloaded)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Requires caching</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Server storage</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Minimal (messages deleted)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Can be large</td>
            </tr>
        </table>

        <!-- ==================== SECTION 2.3.5: DNS (DOMAIN NAME SYSTEM) ==================== -->
        <h3>2.3.5 DNS (Domain Name System)</h3>
        
        <p>DNS translates human-readable domain names (like www.example.com) into IP addresses that computers use to identify each other on the network.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 DNS Characteristics:</strong> Distributed database, hierarchical namespace, uses UDP port 53 primarily (TCP for zone transfers).</p>
        </div>
        
        <h4>DNS Hierarchy:</h4>
        
        <pre>
                    ┌─────────────────────┐
                    │    Root Servers     │
                    │        (.)          │
                    └──────────┬──────────┘
                               │
                    ┌──────────┴──────────┐
                    │   Top-Level Domain   │
                    │   (.com, .org, .edu) │
                    └──────────┬──────────┘
                               │
                    ┌──────────┴──────────┐
                    │  Second-Level Domain │
                    │    (example.com)     │
                    └──────────┬──────────┘
                               │
                    ┌──────────┴──────────┐
                    │   Subdomain          │
                    │   (www.example.com)  │
                    └──────────────────────┘</pre>
        
        <h4>DNS Record Types:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Record Type</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>A</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">IPv4 address record</td>
                <td style="padding: 10px; border: 1px solid #ddd;">example.com A 93.184.216.34</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>AAAA</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">IPv6 address record</td>
                <td style="padding: 10px; border: 1px solid #ddd;">example.com AAAA 2606:2800:220:1:248:1893:25c8:1946</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>CNAME</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Canonical name (alias)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">www.example.com CNAME example.com</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>MX</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Mail exchange record</td>
                <td style="padding: 10px; border: 1px solid #ddd;">example.com MX 10 mail.example.com</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>NS</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Name server record</td>
                <td style="padding: 10px; border: 1px solid #ddd;">example.com NS ns1.example.com</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>PTR</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Pointer record (reverse lookup)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">34.216.184.93.in-addr.arpa PTR example.com</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>TXT</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Text record (for verification, SPF, etc.)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">example.com TXT "v=spf1 include:_spf.example.com"</td>
            </tr>
        </table>
        
        <h4>DNS Resolution Process:</h4>
        
        <pre>
        Client (browser) wants to access www.example.com
        
        1. Client checks local cache
        2. If not found, queries local DNS resolver
        3. Resolver queries root servers
        4. Root directs to .com TLD servers
        5. TLD server directs to example.com authoritative servers
        6. Authoritative server returns IP address
        7. Resolver returns IP to client
        8. Client connects to IP address</pre>
        
        <h4>DNS Query Types:</h4>
        
        <ul>
            <li><strong>Recursive query:</strong> DNS server must respond with answer or error</li>
            <li><strong>Iterative query:</strong> DNS server returns best answer it can (may refer to another server)</li>
        </ul>

        <!-- ==================== SECTION 2.3.6: DHCP (DYNAMIC HOST CONFIGURATION PROTOCOL) ==================== -->
        <h3>2.3.6 DHCP (Dynamic Host Configuration Protocol)</h3>
        
        <p>DHCP automatically assigns IP addresses and other network configuration parameters to devices on a network.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 DHCP Characteristics:</strong> Uses UDP ports 67 (server) and 68 (client). Provides IP address, subnet mask, default gateway, DNS servers.</p>
        </div>
        
        <h4>DHCP Process (DORA):</h4>
        
        <pre>
        Client                    DHCP Server
          │                             │
          │───1. DHCPDISCOVER (broadcast)─▶
          │                             │
          │◀──2. DHCPOFFER───────────────│
          │    (IP address offered)       │
          │                             │
          │───3. DHCPREQUEST (broadcast)─▶
          │    (accepts offer)            │
          │                             │
          │◀──4. DHCPACK──────────────────│
          │    (confirmation)             │
          │                             │</pre>
        
        <h4>DHCP Message Types:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Message</th>
                <th style="padding: 10px;">Description</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>DHCPDISCOVER</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Client broadcasts to find DHCP servers</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>DHCPOFFER</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Server offers an IP address</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>DHCPREQUEST</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Client requests offered address</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>DHCPACK</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Server acknowledges and confirms</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>DHCPNAK</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Server rejects request</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>DHCPRELEASE</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Client releases IP address</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>DHCPINFORM</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Client requests local configuration parameters</td>
            </tr>
        </table>
        
        <h4>DHCP Lease Process:</h4>
        
        <ul>
            <li><strong>Lease assignment:</strong> Client gets IP for specific time period</li>
            <li><strong>Renewal (T1 - 50%):</strong> Client tries to renew lease with original server</li>
            <li><strong>Rebinding (T2 - 87.5%):</strong> If no response, client broadcasts to any server</li>
            <li><strong>Expiration:</strong> If no renewal, IP becomes available</li>
        </ul>

        <!-- ==================== SECTION 2.3.7: SSH AND TELNET ==================== -->
        <h3>2.3.7 SSH and Telnet</h3>
        
        <h4>Telnet</h4>
        
        <p>Telnet provides bidirectional interactive text communication using a virtual terminal connection.</p>
        
        <div class="warning-box" style="background: #ffe8e8; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #f5576c;">
            <p><strong>⚠️ Security Warning:</strong> Telnet sends all data (including passwords) in plain text, making it highly insecure. It has been largely replaced by SSH.</p>
        </div>
        
        <h5>Characteristics:</h5>
        <ul>
            <li>TCP port 23</li>
            <li>No encryption</li>
            <li>Simple, lightweight</li>
            <li>Still used for legacy systems, network devices (locally)</li>
        </ul>
        
        <h4>SSH (Secure Shell)</h4>
        
        <p>SSH provides secure remote login and other secure network services over an insecure network.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 SSH Characteristics:</strong> TCP port 22. Provides encryption, authentication, and integrity protection.</p>
        </div>
        
        <h5>SSH Features:</h5>
        <ul>
            <li><strong>Secure remote access:</strong> Encrypted terminal sessions</li>
            <li><strong>File transfer:</strong> SFTP, SCP for secure file transfer</li>
            <li><strong>Port forwarding:</strong> Tunnel other protocols through SSH</li>
            <li><strong>X11 forwarding:</strong> Run graphical applications remotely</li>
            <li><strong>Key-based authentication:</strong> More secure than passwords</li>
        </ul>
        
        <h5>SSH Authentication Methods:</h5>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Method</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Security</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Password</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Traditional username/password</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Moderate (vulnerable to brute force)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Public Key</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Uses cryptographic key pair</td>
                <td style="padding: 10px; border: 1px solid #ddd;">High (recommended)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Keyboard-interactive</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Server sends challenges</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Varies (used for multi-factor)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Host-based</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Trusts host, not user</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Low (rarely used)</td>
            </tr>
        </table>

        <!-- ==================== SECTION 2.3.8: OTHER APPLICATION PROTOCOLS ==================== -->
        <h3>2.3.8 Other Important Application Protocols</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Protocol</th>
                <th style="padding: 10px;">Port</th>
                <th style="padding: 10px;">Description</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>SNMP</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">161/162</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Simple Network Management Protocol - monitors network devices</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>NTP</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">123</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Network Time Protocol - synchronizes clocks</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>LDAP</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">389</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Lightweight Directory Access Protocol - directory services</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>RDP</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">3389</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Remote Desktop Protocol - Windows remote desktop</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>SIP</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">5060/5061</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Session Initiation Protocol - VoIP signaling</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>XMPP</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">5222</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Extensible Messaging and Presence Protocol - instant messaging</td>
            </tr>
        </table>

        <!-- ==================== SECTION SUMMARY ==================== -->
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Section 2.3 Summary</h4>
            <ul>
                <li><strong>HTTP/HTTPS:</strong> Web protocols with request methods (GET, POST) and status codes</li>
                <li><strong>FTP:</strong> File transfer with separate control and data connections</li>
                <li><strong>SMTP:</strong> Email sending protocol</li>
                <li><strong>POP3/IMAP:</strong> Email retrieval protocols - POP3 downloads, IMAP synchronizes</li>
                <li><strong>DNS:</strong> Domain name resolution with hierarchical structure</li>
                <li><strong>DHCP:</strong> Automatic IP address assignment using DORA process</li>
                <li><strong>SSH:</strong> Secure remote access with encryption</li>
                <li><strong>Telnet:</strong> Insecure remote access (avoid)</li>
                <li>Each protocol uses specific port numbers and transport protocols (TCP/UDP)</li>
            </ul>
        </div>

        <!-- ==================== SECTION EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Questions</h4>
            
            <ol>
                <li>List the HTTP request methods and their purposes.</li>
                <li>Explain the meaning of HTTP status codes 200, 404, and 500.</li>
                <li>How does HTTPS differ from HTTP? What problem does it solve?</li>
                <li>Describe the difference between active and passive FTP modes.</li>
                <li>Compare POP3 and IMAP. When would you use each?</li>
                <li>Explain the DNS resolution process from entering a URL to getting an IP address.</li>
                <li>What are the four steps of DHCP (DORA) and what happens in each?</li>
                <li>Why is SSH preferred over Telnet?</li>
                <li>List five DNS record types and their purposes.</li>
                <li>What port numbers are used by common application protocols (HTTP, HTTPS, FTP, SMTP, DNS)?</li>
            </ol>
        </div>

        <!-- ==================== PREVIEW OF NEXT SECTION ==================== -->
        <div style="background: linear-gradient(135deg, #667eea20, #764ba220); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">📖 Next: 2.4 Network Services</h4>
            <p>In the next section, we'll explore various network services including web services, email services, file services, and directory services.</p>
        </div>
    `,
    navigation: {
        next: "ch2-4",
        prev: "ch2-2",
        nextTitle: "2.4 Network Services",
        prevTitle: "2.2 Client-Server Model"
    }
};