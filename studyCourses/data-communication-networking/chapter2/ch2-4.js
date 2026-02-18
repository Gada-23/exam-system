// ===============================
// Data Communication and Computer Networks - Chapter 2.4
// Network Services
// ===============================

window.currentSubsectionData = {
    title: "2.4 Network Services",
    content: `
        <h2>2.4 Network Services</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand what network services are and their importance</li>
                <li>Explore web services and their architectures</li>
                <li>Learn about email services and components</li>
                <li>Understand file services and storage solutions</li>
                <li>Explore directory services and authentication</li>
                <li>Learn about print services and database services</li>
            </ul>
        </div>

        <!-- ==================== SECTION 2.4.1: INTRODUCTION TO NETWORK SERVICES ==================== -->
        <h3>2.4.1 Introduction to Network Services</h3>
        
        <p><strong>Network services</strong> are applications running at the application layer that provide functionality to users and other programs across a network. They form the foundation of modern networked computing.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> Network services are software applications that provide specific functionality to clients over a network, enabling resource sharing, communication, and centralized management.</p>
        </div>
        
        <h4>Categories of Network Services:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Service Category</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Examples</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Communication Services</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Enable user communication and messaging</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Email, instant messaging, VoIP</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>File Services</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Provide file storage, sharing, and transfer</td>
                <td style="padding: 10px; border: 1px solid #ddd;">File servers, FTP, cloud storage</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Print Services</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Manage shared printing resources</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Print servers, network printers</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Directory Services</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Store and organize network resource information</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Active Directory, LDAP</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Authentication Services</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Verify user identities and control access</td>
                <td style="padding: 10px; border: 1px solid #ddd;">RADIUS, Kerberos, OAuth</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Web Services</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Host and deliver web content and applications</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Web servers, application servers</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Database Services</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Provide managed data storage and retrieval</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Database servers, data warehouses</td>
            </tr>
        </table>

        <!-- ==================== SECTION 2.4.2: WEB SERVICES ==================== -->
        <h3>2.4.2 Web Services</h3>
        
        <p><strong>Web services</strong> are standardized ways of integrating web-based applications using XML, SOAP, WSDL, and UDDI open standards over an Internet protocol backbone.</p>
        
        <h4>Web Service Components:</h4>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 30px 0;">
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px;">
                <i class="fas fa-server" style="font-size: 30px; color: #667eea; margin-bottom: 10px;"></i>
                <h4 style="margin: 10px 0;">Web Server</h4>
                <p>Hosts websites and serves web pages to clients. Examples: Apache, Nginx, IIS, Tomcat.</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px;">
                <i class="fas fa-cogs" style="font-size: 30px; color: #764ba2; margin-bottom: 10px;"></i>
                <h4 style="margin: 10px 0;">Application Server</h4>
                <p>Hosts business logic and application code. Examples: WebLogic, WebSphere, JBoss.</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px;">
                <i class="fas fa-cloud" style="font-size: 30px; color: #f093fb; margin-bottom: 10px;"></i>
                <h4 style="margin: 10px 0;">Load Balancer</h4>
                <p>Distributes traffic across multiple servers. Examples: HAProxy, F5, AWS ELB.</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px;">
                <i class="fas fa-database" style="font-size: 30px; color: #f5576c; margin-bottom: 10px;"></i>
                <h4 style="margin: 10px 0;">Database Server</h4>
                <p>Stores and retrieves data for web applications. Examples: MySQL, PostgreSQL, MongoDB.</p>
            </div>
        </div>
        
        <h4>Web Service Architectures:</h4>
        
        <h5>1. REST (Representational State Transfer)</h5>
        <p>REST is an architectural style that uses HTTP methods (GET, POST, PUT, DELETE) and stateless operations.</p>
        
        <ul>
            <li><strong>Resources:</strong> Identified by URLs</li>
            <li><strong>HTTP Methods:</strong> Map to CRUD operations</li>
            <li><strong>Stateless:</strong> Each request contains all information needed</li>
            <li><strong>Representations:</strong> JSON or XML formats</li>
        </ul>
        
        <pre>
        REST API Example:
        
        GET    /api/users        → List all users
        GET    /api/users/123    → Get user 123
        POST   /api/users        → Create new user
        PUT    /api/users/123    → Update user 123
        DELETE /api/users/123    → Delete user 123</pre>
        
        <h5>2. SOAP (Simple Object Access Protocol)</h5>
        <p>SOAP is a protocol for exchanging structured information using XML.</p>
        
        <ul>
            <li><strong>XML-based:</strong> Messages formatted in XML</li>
            <li><strong>WSDL:</strong> Web Services Description Language defines interface</li>
            <li><strong>UDDI:</strong> Universal Description, Discovery, and Integration for service discovery</li>
            <li><strong>WS-* standards:</strong> Security, transactions, reliability</li>
        </ul>
        
        <h5>3. GraphQL</h5>
        <p>GraphQL is a query language that allows clients to request exactly the data they need.</p>
        
        <ul>
            <li><strong>Single endpoint:</strong> All requests go to one endpoint</li>
            <li><strong>Client-specified queries:</strong> Client determines what data to return</li>
            <li><strong>Strong typing:</strong> Schema defines available data</li>
            <li><strong>Efficient:</strong> Reduces over-fetching and under-fetching</li>
        </ul>

        <!-- ==================== SECTION 2.4.3: EMAIL SERVICES ==================== -->
        <h3>2.4.3 Email Services</h3>
        
        <p>Email services enable the sending, receiving, and storage of electronic messages across networks.</p>
        
        <h4>Email System Components:</h4>
        
        <pre>
                    ┌─────────────────────────────────────┐
                    │         Email Architecture          │
                    ├─────────────────────────────────────┤
                    │                                     │
        ┌───────┐   │  ┌─────────┐    ┌─────────┐        │
        │ User  │───┼─▶│ MUA     │───▶│ MTA     │        │
        │       │   │  │(Client) │    │(Server) │        │
        └───────┘   │  └─────────┘    └────┬────┘        │
                    │                       │              │
                    │  ┌─────────┐    ┌─────┴─────┐       │
                    │  │ User    │◀───│ MDA/MRA   │       │
                    │  │ Client  │    │(Delivery) │       │
                    │  └─────────┘    └───────────┘       │
                    │                                     │
                    └─────────────────────────────────────┘</pre>
        
        <h5>Email Components:</h5>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Component</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Examples</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>MUA (Mail User Agent)</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Email client used by end users</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Outlook, Thunderbird, Gmail web</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>MTA (Mail Transfer Agent)</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Transfers email between servers</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Sendmail, Postfix, Exchange</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>MDA (Mail Delivery Agent)</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Delivers email to local mailbox</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Procmail, Dovecot LDA</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Mail Store</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Storage for email messages</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Maildir, mbox, Exchange Store</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Access Server</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Provides access to stored mail</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Dovecot, Exchange, Cyrus</td>
            </tr>
        </table>
        
        <h4>Email Flow Process:</h4>
        
        <ol>
            <li><strong>Composition:</strong> User composes message in MUA</li>
            <li><strong>Submission:</strong> MUA sends to MTA using SMTP</li>
            <li><strong>Routing:</strong> MTA looks up recipient's MX record via DNS</li>
            <li><strong>Transfer:</strong> MTA transfers to recipient's MTA using SMTP</li>
            <li><strong>Delivery:</strong> Recipient's MTA delivers to MDA for storage</li>
            <li><strong>Access:</strong> Recipient's MUA retrieves using POP3/IMAP</li>
        </ol>

        <!-- ==================== SECTION 2.4.4: FILE SERVICES ==================== -->
        <h3>2.4.4 File Services</h3>
        
        <p>File services provide centralized storage and sharing of files across networks.</p>
        
        <h4>File Sharing Protocols:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Protocol</th>
                <th style="padding: 10px;">Platform</th>
                <th style="padding: 10px;">Description</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>SMB/CIFS</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Windows</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Server Message Block - Windows file sharing</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>NFS</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Unix/Linux</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Network File System - Unix sharing</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>AFP</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Mac</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Apple Filing Protocol - Mac sharing</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>FTP/SFTP</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Cross-platform</td>
                <td style="padding: 10px; border: 1px solid #ddd;">File transfer across any platform</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>WebDAV</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Cross-platform</td>
                <td style="padding: 10px; border: 1px solid #ddd;">HTTP-based file management</td>
            </tr>
        </table>
        
        <h4>Network Attached Storage (NAS):</h4>
        
        <p>NAS is a dedicated file storage device that provides file-level data access to clients.</p>
        
        <ul>
            <li><strong>Purpose-built:</strong> Optimized for file serving</li>
            <li><strong>Easy to deploy:</strong> Plug-and-play appliance</li>
            <li><strong>Protocol support:</strong> Usually supports SMB, NFS, AFP</li>
            <li><strong>RAID support:</strong> Data redundancy options</li>
            <li><strong>Examples:</strong> Synology, QNAP, NetApp</li>
        </ul>
        
        <h4>Storage Area Network (SAN):</h4>
        
        <p>SAN provides block-level data storage, appearing to servers as locally attached disks.</p>
        
        <ul>
            <li><strong>High performance:</strong> Fast data access</li>
            <li><strong>Block-level:</strong> Presents as raw disk blocks</li>
            <li><strong>Protocols:</strong> Fibre Channel, iSCSI, FCoE</li>
            <li><strong>Use cases:</strong> Databases, virtualization, high-performance computing</li>
        </ul>
        
        <h4>Cloud Storage Services:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Service</th>
                <th style="padding: 10px;">Provider</th>
                <th style="padding: 10px;">Features</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Dropbox</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Dropbox Inc.</td>
                <td style="padding: 10px; border: 1px solid #ddd;">File sync, sharing, versioning</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Google Drive</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Google</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Integration with Google Workspace</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>OneDrive</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Microsoft</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Integration with Office 365</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>S3</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">AWS</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Object storage for developers</td>
            </tr>
        </table>

        <!-- ==================== SECTION 2.4.5: DIRECTORY SERVICES ==================== -->
        <h3>2.4.5 Directory Services</h3>
        
        <p>Directory services provide a centralized repository for storing and managing information about network resources, users, and devices.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> A directory service is a shared information infrastructure for locating, managing, and organizing network resources and identities.</p>
        </div>
        
        <h4>LDAP (Lightweight Directory Access Protocol):</h4>
        
        <p>LDAP is the standard protocol for accessing and maintaining directory services.</p>
        
        <h5>LDAP Directory Structure:</h5>
        
        <pre>
                    ┌─────────────────────┐
                    │    Root DSE         │
                    │  (Directory Root)   │
                    └──────────┬──────────┘
                               │
                    ┌──────────┴──────────┐
                    │    dc=example,dc=com │
                    │     (Domain)         │
                    └──────────┬──────────┘
                               │
            ┌──────────────────┼──────────────────┐
            ↓                  ↓                  ↓
        ┌─────────┐      ┌─────────┐      ┌─────────┐
        │ou=Users │      │ou=Groups│      │ou=Computers
        └────┬────┘      └────┬────┘      └────┬────┘
             │                │                 │
        ┌────┴────┐      ┌────┴────┐      ┌────┴────┐
        │uid=jdoe │      │cn=admins│      │cn=pc-101 │
        └─────────┘      └─────────┘      └─────────┘</pre>
        
        <h5>LDAP Operations:</h5>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Operation</th>
                <th style="padding: 10px;">Description</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>bind</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Authenticate to directory</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>search</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Search for entries</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>compare</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Compare attribute values</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>add</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Add new entry</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>delete</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Delete entry</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>modify</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Modify entry attributes</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>modifyDN</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Move/rename entry</td>
            </tr>
        </table>
        
        <h4>Microsoft Active Directory:</h4>
        
        <p>Active Directory is Microsoft's directory service for Windows domain networks.</p>
        
        <h5>AD Components:</h5>
        
        <ul>
            <li><strong>Domain:</strong> Administrative boundary and security context</li>
            <li><strong>Forest:</strong> Collection of domains sharing schema and configuration</li>
            <li><strong>Organizational Unit (OU):</strong> Container for organizing objects</li>
            <li><strong>Global Catalog:</strong> Index of all objects in forest</li>
            <li><strong>Domain Controller:</strong> Server running AD services</li>
        </ul>
        
        <h5>AD Services:</h5>
        
        <ul>
            <li><strong>Authentication:</strong> Kerberos, NTLM authentication</li>
            <li><strong>Authorization:</strong> Access control to resources</li>
            <li><strong>Group Policy:</strong> Centralized management of users/computers</li>
            <li><strong>DNS integration:</strong> Dynamic DNS updates</li>
            <li><strong>Certificate Services:</strong> PKI integration</li>
        </ul>

        <!-- ==================== SECTION 2.4.6: AUTHENTICATION SERVICES ==================== -->
        <h3>2.4.6 Authentication Services</h3>
        
        <p>Authentication services verify the identity of users and devices attempting to access network resources.</p>
        
        <h4>Authentication Protocols:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Protocol</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Use Case</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Kerberos</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Ticket-based authentication</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Windows AD, Unix</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>RADIUS</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">AAA protocol for network access</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Wi-Fi, VPN, dial-up</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>TACACS+</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Cisco's AAA protocol</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Network device administration</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>LDAP</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Directory-based authentication</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Enterprise applications</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>OAuth 2.0</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Authorization framework</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Web APIs, social login</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>SAML</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Single sign-on protocol</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Enterprise SSO, cloud apps</td>
            </tr>
        </table>
        
        <h4>Multi-Factor Authentication (MFA):</h4>
        
        <p>MFA requires two or more verification factors:</p>
        
        <ul>
            <li><strong>Something you know:</strong> Password, PIN</li>
            <li><strong>Something you have:</strong> Phone, token, smart card</li>
            <li><strong>Something you are:</strong> Fingerprint, facial recognition</li>
        </ul>
        
        <h4>Single Sign-On (SSO):</h4>
        
        <p>SSO allows users to authenticate once and access multiple applications without re-entering credentials.</p>
        
        <ul>
            <li><strong>Benefits:</strong> Improved user experience, reduced password fatigue</li>
            <li><strong>Implementation:</strong> SAML, OAuth, Kerberos</li>
            <li><strong>Examples:</strong> Google SSO, Microsoft Azure AD, Okta</li>
        </ul>

        <!-- ==================== SECTION 2.4.7: PRINT SERVICES ==================== -->
        <h3>2.4.7 Print Services</h3>
        
        <p>Print services enable multiple users to share printers over a network.</p>
        
        <h4>Print Service Components:</h4>
        
        <ul>
            <li><strong>Print Server:</strong> Manages print queues and printer access</li>
            <li><strong>Print Queue:</strong> Holds print jobs waiting for printer</li>
            <li><strong>Printer Driver:</strong> Converts data to printer format</li>
            <li><strong>Network Printer:</strong> Printer with built-in network interface</li>
        </ul>
        
        <h4>Print Protocols:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Protocol</th>
                <th style="padding: 10px;">Description</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>LPD/LPR</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Line Printer Daemon/Protocol - Unix printing</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>IPP</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Internet Printing Protocol - HTTP-based</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>SMB</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Windows printer sharing</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>AirPrint</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Apple's wireless printing</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Google Cloud Print</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Cloud-based printing (discontinued)</td>
            </tr>
        </table>

        <!-- ==================== SECTION 2.4.8: DATABASE SERVICES ==================== -->
        <h3>2.4.8 Database Services</h3>
        
        <p>Database services provide managed data storage, retrieval, and management capabilities to applications over a network.</p>
        
        <h4>Types of Database Services:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Type</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Examples</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Relational DBMS</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Tables with relationships, SQL queries</td>
                <td style="padding: 10px; border: 1px solid #ddd;">MySQL, PostgreSQL, Oracle, SQL Server</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>NoSQL Databases</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Non-relational, flexible schemas</td>
                <td style="padding: 10px; border: 1px solid #ddd;">MongoDB, Cassandra, Redis, CouchDB</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>In-Memory Databases</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Data stored in RAM for speed</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Redis, Memcached</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Time-Series Databases</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Optimized for timestamped data</td>
                <td style="padding: 10px; border: 1px solid #ddd;">InfluxDB, Prometheus</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Graph Databases</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Data as nodes and edges</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Neo4j, Amazon Neptune</td>
            </tr>
        </table>
        
        <h4>Database Service Components:</h4>
        
        <ul>
            <li><strong>Database Server:</strong> Hosts and manages databases</li>
            <li><strong>Database Instance:</strong> Running database process</li>
            <li><strong>Query Processor:</strong> Parses and executes queries</li>
            <li><strong>Storage Engine:</strong> Manages data storage</li>
            <li><strong>Connection Manager:</strong> Handles client connections</li>
        </ul>

        <!-- ==================== SECTION 2.4.9: CLOUD SERVICES ==================== -->
        <h3>2.4.9 Cloud Services</h3>
        
        <p>Cloud services deliver computing resources over the internet on a pay-as-you-go basis.</p>
        
        <h4>Cloud Service Models:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Model</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Examples</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>IaaS (Infrastructure as a Service)</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Virtualized computing resources</td>
                <td style="padding: 10px; border: 1px solid #ddd;">AWS EC2, Azure VMs, Google Compute</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>PaaS (Platform as a Service)</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Platform for application development</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Heroku, Google App Engine, Azure App Services</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>SaaS (Software as a Service)</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Ready-to-use software applications</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Office 365, Salesforce, Google Workspace</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>FaaS (Function as a Service)</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Serverless functions</td>
                <td style="padding: 10px; border: 1px solid #ddd;">AWS Lambda, Azure Functions</td>
            </tr>
        </table>
        
        <h4>Cloud Deployment Models:</h4>
        
        <ul>
            <li><strong>Public Cloud:</strong> Services provided over public internet (AWS, Azure, GCP)</li>
            <li><strong>Private Cloud:</strong> Dedicated infrastructure for single organization</li>
            <li><strong>Hybrid Cloud:</strong> Combination of public and private clouds</li>
            <li><strong>Multi-Cloud:</strong> Using multiple cloud providers</li>
        </ul>

        <!-- ==================== SECTION SUMMARY ==================== -->
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Section 2.4 Summary</h4>
            <ul>
                <li><strong>Network services</strong> provide essential functionality to users and applications across networks</li>
                <li><strong>Web services</strong> include REST, SOAP, and GraphQL architectures with web, application, and database servers</li>
                <li><strong>Email services</strong> involve MUA, MTA, MDA, and mail stores using SMTP, POP3, IMAP</li>
                <li><strong>File services</strong> use protocols like SMB, NFS, FTP with NAS and SAN storage solutions</li>
                <li><strong>Directory services</strong> like LDAP and Active Directory organize network resources and identities</li>
                <li><strong>Authentication services</strong> use Kerberos, RADIUS, OAuth with MFA and SSO capabilities</li>
                <li><strong>Print services</strong> enable shared printing via LPD, IPP, SMB protocols</li>
                <li><strong>Database services</strong> provide managed data storage (relational, NoSQL, in-memory)</li>
                <li><strong>Cloud services</strong> offer IaaS, PaaS, SaaS models with various deployment options</li>
            </ul>
        </div>

        <!-- ==================== SECTION EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Questions</h4>
            
            <ol>
                <li>What are the main categories of network services?</li>
                <li>Compare REST, SOAP, and GraphQL web service architectures.</li>
                <li>Explain the role of each email component: MUA, MTA, MDA, and mail store.</li>
                <li>Describe the differences between NAS and SAN storage solutions.</li>
                <li>What is LDAP and how is it used in directory services?</li>
                <li>List five authentication protocols and their use cases.</li>
                <li>What are the benefits of multi-factor authentication?</li>
                <li>Explain the three cloud service models (IaaS, PaaS, SaaS).</li>
                <li>Compare relational and NoSQL database services.</li>
                <li>How does Single Sign-On (SSO) improve user experience?</li>
            </ol>
        </div>

        <!-- ==================== PREVIEW OF NEXT SECTION ==================== -->
        <div style="background: linear-gradient(135deg, #667eea20, #764ba220); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">📖 Next: 2.5 Session Layer</h4>
            <p>In the next section, we'll explore the Session Layer, its functions, protocols, and how it manages sessions between applications.</p>
        </div>
    `,
    navigation: {
        next: "ch2-5",
        prev: "ch2-3",
        nextTitle: "2.5 Session Layer",
        prevTitle: "2.3 Application Protocols"
    }
};