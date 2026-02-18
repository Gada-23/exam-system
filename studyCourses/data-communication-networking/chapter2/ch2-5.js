// ===============================
// Data Communication and Computer Networks - Chapter 2.5
// Session Layer
// ===============================

window.currentSubsectionData = {
    title: "2.5 Session Layer",
    content: `
        <h2>2.5 Session Layer</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand the role and functions of the Session Layer in OSI model</li>
                <li>Learn about session establishment, maintenance, and termination</li>
                <li>Explore dialog control mechanisms (simplex, half-duplex, full-duplex)</li>
                <li>Understand synchronization and checkpointing</li>
                <li>Learn about session protocols and their applications</li>
                <li>Understand the relationship between Session Layer and other layers</li>
            </ul>
        </div>

        <!-- ==================== SECTION 2.5.1: INTRODUCTION TO SESSION LAYER ==================== -->
        <h3>2.5.1 Introduction to Session Layer</h3>
        
        <p>The <strong>Session Layer</strong> is Layer 5 of the OSI model. It establishes, manages, and terminates connections (sessions) between presentation entities. It provides services such as dialog control, synchronization, and session management.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> The Session Layer provides the mechanism for managing the dialogue between end-user application processes. It controls the establishment and termination of logical connections between applications.</p>
        </div>
        
        <h4>Position in OSI Model:</h4>
        
        <pre>
        ┌─────────────────────────────────────┐
        │       7. Application Layer          │
        ├─────────────────────────────────────┤
        │       6. Presentation Layer         │
        ├─────────────────────────────────────┤
        │    👉 5. SESSION LAYER  👈          │
        ├─────────────────────────────────────┤
        │       4. Transport Layer            │
        ├─────────────────────────────────────┤
        │       3. Network Layer              │
        ├─────────────────────────────────────┤
        │       2. Data Link Layer            │
        ├─────────────────────────────────────┤
        │       1. Physical Layer             │
        └─────────────────────────────────────┘</pre>

        <!-- ==================== SECTION 2.5.2: FUNCTIONS OF SESSION LAYER ==================== -->
        <h3>2.5.2 Functions of Session Layer</h3>
        
        <p>The Session Layer performs several critical functions:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Function</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Session Establishment</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Creates a logical connection between applications</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Login to remote server</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Session Maintenance</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Keeps session alive during communication</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Keep-alive messages</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Session Termination</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Gracefully ends the session</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Logout process</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Dialog Control</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Manages whose turn it is to transmit</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Token management</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Synchronization</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Insert checkpoints to allow recovery</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Large file transfer</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Activity Management</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Groups related operations into activities</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Database transaction</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Exception Handling</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Manages errors and recovery</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Session resumption after failure</td>
            </tr>
        </table>

        <!-- ==================== SECTION 2.5.3: SESSION ESTABLISHMENT AND TERMINATION ==================== -->
        <h3>2.5.3 Session Establishment and Termination</h3>
        
        <h4>Session Establishment Process:</h4>
        
        <p>Session establishment involves three phases:</p>
        
        <pre>
        Client                                    Server
          │                                         │
          │───1. Session Request (SYN) ───────────▶│
          │                                         │
          │◀──2. Session Accept (SYN-ACK) ─────────│
          │                                         │
          │───3. Session Confirmation (ACK) ──────▶│
          │                                         │
          │   (Session Established)                  │
          │                                         │
          │◀──────────────── Data Exchange ────────▶│
          │                                         │
          │───4. Session Termination Request ─────▶│
          │   (FIN)                                 │
          │                                         │
          │◀──5. Session Termination Accept ────────│
          │   (FIN-ACK)                             │
          │                                         │</pre>
        
        <h4>Session States:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">State</th>
                <th style="padding: 10px;">Description</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Closed</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">No session exists</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Listen</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Waiting for connection request</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Syn-Sent</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Connection request sent</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Syn-Received</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Connection request received</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Established</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Session is active</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Fin-Wait</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Waiting for termination</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Closed</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Session terminated</td>
            </tr>
        </table>

        <!-- ==================== SECTION 2.5.4: DIALOG CONTROL ==================== -->
        <h3>2.5.4 Dialog Control</h3>
        
        <p>The Session Layer manages the dialog between applications, determining whose turn it is to transmit.</p>
        
        <h4>Dialog Modes:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Mode</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Example</th>
                <th style="padding: 10px;">Diagram</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Simplex</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">One-way communication only</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Broadcast, sensors</td>
                <td style="padding: 10px; border: 1px solid #ddd;">A ───▶ B</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Half-Duplex</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Two-way, but one at a time</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Walkie-talkie</td>
                <td style="padding: 10px; border: 1px solid #ddd;">A ◀───▶ B (one at a time)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Full-Duplex</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Two-way simultaneously</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Telephone</td>
                <td style="padding: 10px; border: 1px solid #ddd;">A ◀───▶ B (both ways)</td>
            </tr>
        </table>
        
        <h4>Token Management:</h4>
        
        <p>In half-duplex communication, the Session Layer uses tokens to control who can transmit.</p>
        
        <pre>
        ┌─────────────────────────────────────────┐
        │           Token Passing                  │
        ├─────────────────────────────────────────┤
        │                                          │
        │  ┌─────┐          ┌─────┐               │
        │  │  A  │◀───Token─▶│  B  │               │
        │  └─────┘          └─────┘               │
        │                                          │
        │  1. A has token: A transmits             │
        │  2. A passes token to B                   │
        │  3. B has token: B transmits             │
        │  4. B passes token back to A             │
        │                                          │
        └─────────────────────────────────────────┘</pre>
        
        <ul>
            <li><strong>Data Token:</strong> Controls who can send data</li>
            <li><strong>Release Token:</strong> Controls who can release the session</li>
            <li><strong>Sync Token:</strong> Controls synchronization points</li>
        </ul>

        <!-- ==================== SECTION 2.5.5: SYNCHRONIZATION AND CHECKPOINTING ==================== -->
        <h3>2.5.5 Synchronization and Checkpointing</h3>
        
        <p>The Session Layer provides mechanisms to insert synchronization points in data streams, allowing recovery in case of failures.</p>
        
        <h4>Types of Synchronization Points:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Type</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Usage</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Major Synchronization Point</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Separates units of work, both sides must acknowledge</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Database transactions</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Minor Synchronization Point</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Checkpoint that can be rolled back to</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Large file transfer</td>
            </tr>
        </table>
        
        <h4>Checkpointing Example:</h4>
        
        <pre>
        Transferring a large file with checkpoints:
        
        ┌─────────────────────────────────────────┐
        │  File Transfer with Checkpoints         │
        ├─────────────────────────────────────────┤
        │                                          │
        │  Start ───┬───┬───┬───┬───┬───┬───┬───▶ │
        │           │   │   │   │   │   │   │     │
        │           ▼   ▼   ▼   ▼   ▼   ▼   ▼     │
        │         [1] [2] [3] [4] [5] [6] [7]     │
        │         ↑   ↑   ↑   ↑   ↑   ↑   ↑       │
        │      Checkpoint 1 2 3 4 5 6 7            │
        │                                          │
        │  If failure at point 5, restart from     │
        │  checkpoint 4, not beginning.            │
        └─────────────────────────────────────────┘</pre>
        
        <h4>Activity Management:</h4>
        
        <p>Activities group related operations that should be treated as a unit.</p>
        
        <pre>
        ┌─────────────────────────────────────────┐
        │         Activity Structure              │
        ├─────────────────────────────────────────┤
        │                                          │
        │  Activity Start                          │
        │    ├── Operation 1                       │
        │    ├── Operation 2                       │
        │    ├── Minor Sync Point                  │
        │    ├── Operation 3                       │
        │    ├── Operation 4                       │
        │    ├── Major Sync Point                  │
        │    ├── Operation 5                       │
        │  Activity End                            │
        │                                          │
        └─────────────────────────────────────────┘</pre>

        <!-- ==================== SECTION 2.5.6: SESSION LAYER PROTOCOLS ==================== -->
        <h3>2.5.6 Session Layer Protocols</h3>
        
        <p>Several protocols operate at or provide session layer services:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Protocol</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Application</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>NetBIOS</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Network Basic Input/Output System</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Legacy Windows networking</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>RPC</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Remote Procedure Call</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Distributed applications</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>SSL/TLS</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Secure Sockets Layer / Transport Layer Security</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Session management for HTTPS</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>SIP</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Session Initiation Protocol</td>
                <td style="padding: 10px; border: 1px solid #ddd;">VoIP, multimedia sessions</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>ASP</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">AppleTalk Session Protocol</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Legacy Apple networking</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>SOCKS</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Socket Secure</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Proxy sessions</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>ISO-SP</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">OSI Session Protocol</td>
                <td style="padding: 10px; border: 1px solid #ddd;">OSI protocol suite</td>
            </tr>
        </table>
        
        <h4>Detailed Look at Key Protocols:</h4>
        
        <h5>1. NetBIOS</h5>
        <p>NetBIOS provides session layer services for legacy Windows networks:</p>
        <ul>
            <li><strong>Name Service:</strong> NetBIOS name registration and resolution</li>
            <li><strong>Session Service:</strong> Connection-oriented communication</li>
            <li><strong>Datagram Service:</strong> Connectionless communication</li>
        </ul>
        
        <h5>2. RPC (Remote Procedure Call)</h5>
        <p>RPC allows programs to call procedures on remote systems:</p>
        <ul>
            <li><strong>Client stub:</strong> Makes local call appear remote</li>
            <li><strong>Server stub:</strong> Receives call and executes procedure</li>
            <li><strong>Binding:</strong> Locates and connects to remote service</li>
        </ul>
        
        <pre>
        RPC Call Flow:
        
        Client                  Server
          │                       │
          │───Call procedure─────▶│
          │  (with parameters)     │
          │                       │── Execute
          │                       │   procedure
          │                       │
          │◀──Return results──────│
          │  (with output)         │</pre>
        
        <h5>3. SIP (Session Initiation Protocol)</h5>
        <p>SIP is used for establishing, modifying, and terminating multimedia sessions:</p>
        <ul>
            <li><strong>User location:</strong> Finding end points</li>
            <li><strong>User availability:</strong> Determining willingness to communicate</li>
            <li><strong>User capabilities:</strong> Negotiating media parameters</li>
            <li><strong>Session setup:</strong> Establishing session parameters</li>
            <li><strong>Session management:</strong> Modifying and terminating sessions</li>
        </ul>

        <!-- ==================== SECTION 2.5.7: SESSION LAYER IN TCP/IP ==================== -->
        <h3>2.5.7 Session Layer in TCP/IP</h3>
        
        <p>In the TCP/IP model, there is no distinct Session Layer. Session management functions are typically handled by:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Function</th>
                <th style="padding: 10px;">Where Handled</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Connection Management</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Transport Layer (TCP)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">TCP 3-way handshake</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Dialog Control</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Application Layer protocols</td>
                <td style="padding: 10px; border: 1px solid #ddd;">HTTP request/response</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Synchronization</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Application Layer</td>
                <td style="padding: 10px; border: 1px solid #ddd;">FTP checkpoint restart</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Session Management</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Application-specific</td>
                <td style="padding: 10px; border: 1px solid #ddd;">HTTP cookies, session IDs</td>
            </tr>
        </table>
        
        <h4>Session Management in Modern Applications:</h4>
        
        <h5>HTTP Sessions:</h5>
        <ul>
            <li><strong>Cookies:</strong> Store session identifiers on client</li>
            <li><strong>Session IDs:</strong> Unique identifiers for each user session</li>
            <li><strong>Token-based:</strong> JWT tokens for stateless sessions</li>
        </ul>
        
        <h5>Database Sessions:</h5>
        <ul>
            <li><strong>Transactions:</strong> ACID properties ensure data integrity</li>
            <li><strong>Connection pooling:</strong> Reuse database connections</li>
        </ul>

        <!-- ==================== SECTION 2.5.8: SYNCHRONIZATION POINTS AND DIALOG UNITS ==================== -->
        <h3>2.5.8 Synchronization Points and Dialog Units</h3>
        
        <p>The Session Layer organizes communication into dialog units separated by synchronization points.</p>
        
        <h4>Dialog Unit Structure:</h4>
        
        <pre>
        ┌─────────────────────────────────────────┐
        │         Dialog Unit Structure           │
        ├─────────────────────────────────────────┤
        │                                          │
        │  ┌─────────────────────────────────────┐│
        │  │         Dialog Unit 1                ││
        │  │  ┌─────┐    ┌─────┐    ┌─────┐     ││
        │  │  │Data │    │Data │    │Data │     ││
        │  │  └─────┘    └─────┘    └─────┘     ││
        │  │     │          │          │         ││
        │  │     ▼          ▼          ▼         ││
        │  │  [Minor]     [Minor]    [Major]     ││
        │  └─────────────────────────────────────┘│
        │                                          │
        │  ┌─────────────────────────────────────┐│
        │  │         Dialog Unit 2                ││
        │  │  ┌─────┐    ┌─────┐                 ││
        │  │  │Data │    │Data │                 ││
        │  │  └─────┘    └─────┘                 ││
        │  │     │          │                     ││
        │  │     ▼          ▼                     ││
        │  │  [Minor]     [Major]                 ││
        │  └─────────────────────────────────────┘│
        │                                          │
        └─────────────────────────────────────────┘</pre>
        
        <h4>Synchronization Point Services:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Service</th>
                <th style="padding: 10px;">Description</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>S-TOKEN-MAJOR-ACK</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Acknowledge major synchronization point</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>S-TOKEN-MINOR-ACK</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Acknowledge minor synchronization point</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>S-RESYNCHRONIZE</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Restart at specified synchronization point</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>S-ACTIVITY-START</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Begin new activity</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>S-ACTIVITY-END</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">End current activity</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>S-ACTIVITY-INTERRUPT</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Interrupt activity (may resume)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>S-ACTIVITY-DISCARD</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Discard activity (cannot resume)</td>
            </tr>
        </table>

        <!-- ==================== SECTION 2.5.9: SESSION LAYER SERVICES AND PRIMITIVES ==================== -->
        <h3>2.5.9 Session Layer Services and Primitives</h3>
        
        <p>The Session Layer provides services through service primitives:</p>
        
        <h4>Service Primitive Types:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Primitive</th>
                <th style="padding: 10px;">Description</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Request</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">User requests a service</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Indication</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Service provider indicates action</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Response</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">User responds to indication</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Confirm</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Service provider confirms completion</td>
            </tr>
        </table>
        
        <h4>Session Layer Services:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Service</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Primitives</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>S-CONNECT</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Establish session</td>
                <td style="padding: 10px; border: 1px solid #ddd;">req, ind, rsp, cnf</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>S-RELEASE</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Orderly release</td>
                <td style="padding: 10px; border: 1px solid #ddd;">req, ind, rsp, cnf</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>S-U-ABORT</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">User-initiated abort</td>
                <td style="padding: 10px; border: 1px solid #ddd;">req, ind</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>S-P-ABORT</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Provider-initiated abort</td>
                <td style="padding: 10px; border: 1px solid #ddd;">ind</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>S-DATA</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Normal data transfer</td>
                <td style="padding: 10px; border: 1px solid #ddd;">req, ind</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>S-EXPEDITED-DATA</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Priority data</td>
                <td style="padding: 10px; border: 1px solid #ddd;">req, ind</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>S-TOKEN-GIVE</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Give token to peer</td>
                <td style="padding: 10px; border: 1px solid #ddd;">req, ind</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>S-TOKEN-PLEASE</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Request token from peer</td>
                <td style="padding: 10px; border: 1px solid #ddd;">req, ind</td>
            </tr>
        </table>

        <!-- ==================== SECTION 2.5.10: SESSION LAYER IN PRACTICE ==================== -->
        <h3>2.5.10 Session Layer in Practice</h3>
        
        <h4>Real-World Examples:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Application</th>
                <th style="padding: 10px;">Session Management</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Web Browsing</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">HTTP cookies maintain session state</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Online Banking</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Session timeouts, reauthentication</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Video Conferencing</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">SIP for session setup, RTP for media</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Database Access</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Connection pooling, transactions</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Remote Desktop</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Session persistence, reconnection</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>FTP Transfer</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Control session, data sessions</td>
            </tr>
        </table>
        
        <h4>Session Layer Challenges:</h4>
        
        <ul>
            <li><strong>Session Hijacking:</strong> Attacker takes over valid session</li>
            <li><strong>Session Fixation:</strong> Attacker sets known session ID</li>
            <li><strong>Session Timeouts:</strong> Balancing security and usability</li>
            <li><strong>State Management:</strong> Handling sessions across multiple servers</li>
            <li><strong>Failover:</strong> Session recovery after server failure</li>
        </ul>
        
        <h4>Session Layer Security:</h4>
        
        <ul>
            <li><strong>Session encryption:</strong> SSL/TLS encrypts session data</li>
            <li><strong>Session authentication:</strong> Verify session participants</li>
            <li><strong>Session integrity:</strong> Detect session tampering</li>
            <li><strong>Session timeouts:</strong> Automatic logout after inactivity</li>
        </ul>

        <!-- ==================== SECTION SUMMARY ==================== -->
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Section 2.5 Summary</h4>
            <ul>
                <li>The <strong>Session Layer</strong> (Layer 5) manages dialogues between applications</li>
                <li>Key functions: session establishment, maintenance, termination, dialog control, synchronization</li>
                <li><strong>Dialog control</strong> manages who transmits using simplex, half-duplex, or full-duplex modes</li>
                <li><strong>Tokens</strong> control who can transmit, release, or synchronize</li>
                <li><strong>Synchronization points</strong> (major/minor) enable recovery from failures</li>
                <li><strong>Activities</strong> group related operations into logical units</li>
                <li>Session protocols include NetBIOS, RPC, SIP, and SSL/TLS</li>
                <li>In TCP/IP, session functions are distributed between Transport and Application layers</li>
                <li>Modern applications use cookies, tokens, and database transactions for session management</li>
                <li>Session security is critical to prevent hijacking and fixation attacks</li>
            </ul>
        </div>

        <!-- ==================== SECTION EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Questions</h4>
            
            <ol>
                <li>What are the primary functions of the Session Layer?</li>
                <li>Explain the three phases of session establishment and termination.</li>
                <li>Compare simplex, half-duplex, and full-duplex communication modes.</li>
                <li>What is the purpose of tokens in session management?</li>
                <li>Explain the difference between major and minor synchronization points.</li>
                <li>How does checkpointing help in large file transfers?</li>
                <li>Describe three protocols that operate at the Session Layer.</li>
                <li>How is session management handled in the TCP/IP model?</li>
                <li>What security concerns exist at the Session Layer?</li>
                <li>Give real-world examples of session management in different applications.</li>
            </ol>
        </div>

        <!-- ==================== PREVIEW OF NEXT SECTION ==================== -->
        <div style="background: linear-gradient(135deg, #667eea20, #764ba220); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">📖 Next: 2.6 Presentation Layer</h4>
            <p>In the next section, we'll explore the Presentation Layer, which handles data translation, encryption, and compression.</p>
        </div>
    `,
    navigation: {
        next: "ch2-6",
        prev: "ch2-4",
        nextTitle: "2.6 Presentation Layer",
        prevTitle: "2.4 Network Services"
    }
};