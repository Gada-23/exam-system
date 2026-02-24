// ===============================
// FOCUS AREA: NETWORK AND SYSTEM ADMINISTRATION - CHAPTER 2
// Providing Network Services to Users
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaNetworkAdminChapter2 = {
    title: "Chapter 2: Providing Network Services to Users",
    
    // Blueprint alignment: 2 questions (Apply, Analyze)
    blueprint: {
        totalQuestions: 2,
        cognitiveLevels: {
            apply: 1,
            analyze: 1
        },
        topics: [
            "Network services (DNS, DHCP, VPN, etc.)",
            "Server configuration and management",
            "Network resource sharing",
            "User access management",
            "Performance monitoring and optimization"
        ]
    },

    learningObjectives: [
        "Understand common network services and their functions",
        "Apply configuration of network services like DNS, DHCP, and VPN",
        "Analyze network performance and user access patterns",
        "Implement network resource sharing strategies",
        "Troubleshoot common network service issues"
    ],

    sections: [
        {
            title: "2.1 Introduction to Network Services",
            content: `
                <h4>What are Network Services?</h4>
                <p>Network services are applications or functions provided by servers on a network that enable users to access resources, communicate, and perform tasks. These services are essential for modern network operations.</p>
                
                <h4>Common Network Services</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Service</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Protocol/Port</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>DNS (Domain Name System)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Translates domain names to IP addresses</td>
                        <td style="padding:8px; border:1px solid #ddd;">UDP/TCP 53</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>DHCP (Dynamic Host Configuration Protocol)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Automatically assigns IP addresses to devices</td>
                        <td style="padding:8px; border:1px solid #ddd;">UDP 67/68</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>HTTP/HTTPS</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Web services</td>
                        <td style="padding:8px; border:1px solid #ddd;">TCP 80/443</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>FTP</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">File transfer</td>
                        <td style="padding:8px; border:1px solid #ddd;">TCP 20/21</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>SMTP</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Email sending</td>
                        <td style="padding:8px; border:1px solid #ddd;">TCP 25</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>VPN (Virtual Private Network)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Secure remote access</td>
                        <td style="padding:8px; border:1px solid #ddd;">Various</td>
                    </tr>
                </table>
                
                <h4>Which service translates domain names into IP addresses?</h4>
                <p><strong>DNS (Domain Name System)</strong> is responsible for translating domain names into IP addresses.</p>
                
                <h4>Which service is responsible for assigning IP addresses to devices on a network?</h4>
                <p><strong>DHCP (Dynamic Host Configuration Protocol)</strong> automatically assigns IP addresses to devices.</p>
                
                <h4>Which service provides remote access to a network from a different location?</h4>
                <p><strong>VPN (Virtual Private Network)</strong> provides secure remote access to a private network.</p>
            `,
            keyPoints: [
                "DNS: translates domain names to IP addresses",
                "DHCP: automatically assigns IP addresses",
                "VPN: provides secure remote access",
                "Each service uses specific ports",
                "Network services enable user access to resources"
            ]
        },

        {
            title: "2.2 DNS Configuration and Management",
            content: `
                <h4>Understanding DNS</h4>
                <p>The Domain Name System (DNS) is like the phonebook of the internet. It translates human-readable domain names (like google.com) into machine-readable IP addresses (like 172.217.10.46).</p>
                
                <h4>DNS Hierarchy</h4>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">DNS HIERARCHY</p>
                    <pre style="text-align:center;">
                    Root (.)
                       |
           ┌──────────┼──────────┐
           com      org        net
           |          |          |
        example    wikipedia   ...
           |
        www.example.com
                    </pre>
                </div>
                
                <h4>DNS Record Types</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Record Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>A</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Maps hostname to IPv4 address</td>
                        <td style="padding:8px; border:1px solid #ddd;">www.example.com → 192.168.1.10</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>AAAA</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Maps hostname to IPv6 address</td>
                        <td style="padding:8px; border:1px solid #ddd;">www.example.com → 2001:db8::1</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>CNAME</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Alias of one name to another</td>
                        <td style="padding:8px; border:1px solid #ddd;">ftp.example.com → www.example.com</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>MX</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Mail exchange server</td>
                        <td style="padding:8px; border:1px solid #ddd;">mail.example.com priority 10</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>PTR</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Reverse lookup (IP to hostname)</td>
                        <td style="padding:8px; border:1px solid #ddd;">192.168.1.10 → www.example.com</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>NS</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Name server for domain</td>
                        <td style="padding:8px; border:1px solid #ddd;">ns1.example.com</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>TXT</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Text information (SPF, verification)</td>
                        <td style="padding:8px; border:1px solid #ddd;">v=spf1 include:example.com</td>
                    </tr>
                </table>
                
                <h4>DNS Configuration Example (BIND)</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
\$ORIGIN example.com.
\$TTL 86400

@   IN  SOA ns1.example.com. admin.example.com. (
            2025022401  ; Serial
            3600        ; Refresh
            1800        ; Retry
            604800      ; Expire
            86400       ; Minimum TTL
        )

    IN  NS  ns1.example.com.
    IN  NS  ns2.example.com.
    IN  MX  10 mail.example.com.

ns1 IN  A   192.168.1.2
ns2 IN  A   192.168.1.3
www IN  A   192.168.1.10
mail IN A   192.168.1.20
ftp  IN  CNAME www
                </pre>
                
                <h4>DNS Troubleshooting Commands</h4>
                <ul>
                    <li><strong>nslookup:</strong> Query DNS for information</li>
                    <li><strong>dig:</strong> Detailed DNS query tool</li>
                    <li><strong>host:</strong> Simple DNS lookup</li>
                </ul>
                
                <p><strong>Example:</strong> <code>nslookup www.google.com</code></p>
            `,
            keyPoints: [
                "DNS translates domain names to IP addresses",
                "Record types: A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail), PTR (reverse), NS (name server), TXT (text)",
                "DNS hierarchy: root → TLD → domain → subdomain",
                "Troubleshooting tools: nslookup, dig, host"
            ]
        },

        {
            title: "2.3 DHCP Configuration and Management",
            content: `
                <h4>Understanding DHCP</h4>
                <p>Dynamic Host Configuration Protocol (DHCP) automatically assigns IP addresses and other network configuration parameters to devices on a network, eliminating the need for manual configuration.</p>
                
                <h4>DHCP Process (DORA)</h4>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">DHCP DORA PROCESS</p>
                    <pre style="text-align:center;">
Client              DHCP Server
  |                      |
  |---- DISCOVER ------->|
  |                      |
  |<---- OFFER ----------|
  |                      |
  |---- REQUEST -------->|
  |                      |
  |<---- ACK ------------|
  |                      |
                    </pre>
                </div>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Step</th>
                        <th style="padding:10px; border:1px solid #ddd;">Message</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">1</td>
                        <td style="padding:8px; border:1px solid #ddd;">DHCPDISCOVER</td>
                        <td style="padding:8px; border:1px solid #ddd;">Client broadcasts to find DHCP servers</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">2</td>
                        <td style="padding:8px; border:1px solid #ddd;">DHCPOFFER</td>
                        <td style="padding:8px; border:1px solid #ddd;">Server offers an IP address</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">3</td>
                        <td style="padding:8px; border:1px solid #ddd;">DHCPREQUEST</td>
                        <td style="padding:8px; border:1px solid #ddd;">Client requests the offered IP</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">4</td>
                        <td style="padding:8px; border:1px solid #ddd;">DHCPACK</td>
                        <td style="padding:8px; border:1px solid #ddd;">Server acknowledges and assigns IP</td>
                    </tr>
                </table>
                
                <h4>DHCP Configuration Options</h4>
                <ul>
                    <li><strong>IP address range:</strong> Pool of addresses to assign</li>
                    <li><strong>Subnet mask:</strong> Network mask for clients</li>
                    <li><strong>Default gateway:</strong> Router for external networks</li>
                    <li><strong>DNS servers:</strong> Name servers for clients</li>
                    <li><strong>Lease time:</strong> How long IP address is valid</li>
                </ul>
                
                <h4>DHCP Configuration Example (ISC DHCP)</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
subnet 192.168.1.0 netmask 255.255.255.0 {
    range 192.168.1.100 192.168.1.200;
    option routers 192.168.1.1;
    option domain-name-servers 8.8.8.8, 8.8.4.4;
    option domain-name "example.com";
    default-lease-time 86400;
    max-lease-time 172800;
}

host printer {
    hardware ethernet 00:11:22:33:44:55;
    fixed-address 192.168.1.50;
}
                </pre>
                
                <h4>DHCP Lease Renewal</h4>
                <ul>
                    <li>At 50% of lease time, client attempts to renew</li>
                    <li>At 87.5%, client broadcasts to any DHCP server</li>
                    <li>If lease expires, client must release IP and restart DORA</li>
                </ul>
                
                <h4>What happens to IP address when PC is taken off network for repair?</h4>
                <p><strong>The address is returned to the pool for reuse when the lease expires.</strong></p>
                
                <h4>Command to verify IP configuration in Windows</h4>
                <p><strong>ipconfig /all</strong> displays IP address, subnet mask, default gateway, and MAC address.</p>
            `,
            keyPoints: [
                "DHCP automatically assigns IP addresses",
                "DORA process: Discover, Offer, Request, Ack",
                "DHCP options: IP range, subnet mask, gateway, DNS, lease time",
                "Expired leases return IP to pool",
                "ipconfig /all shows detailed IP configuration"
            ]
        },

        {
            title: "2.4 VPN Configuration and Management",
            content: `
                <h4>Understanding VPN</h4>
                <p>A Virtual Private Network (VPN) extends a private network across a public network, enabling users to send and receive data as if their devices were directly connected to the private network. VPNs provide security through encryption and authentication.</p>
                
                <h4>VPN Types</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">VPN Type</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Use Case</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Remote Access VPN</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Individual users connect to corporate network</td>
                        <td style="padding:8px; border:1px solid #ddd;">Remote employees</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Site-to-Site VPN</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Connects entire networks</td>
                        <td style="padding:8px; border:1px solid #ddd;">Branch offices</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>SSL/TLS VPN</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Uses web browser for access</td>
                        <td style="padding:8px; border:1px solid #ddd;">Clientless remote access</td>
                    </tr>
                </table>
                
                <h4>VPN Protocols</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Protocol</th>
                        <th style="padding:10px; border:1px solid #ddd;">Security</th>
                        <th style="padding:10px; border:1px solid #ddd;">Port</th>
                        <th style="padding:10px; border:1px solid #ddd;">Notes</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>PPTP</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Weak</td>
                        <td style="padding:8px; border:1px solid #ddd;">TCP 1723</td>
                        <td style="padding:8px; border:1px solid #ddd;">Outdated, insecure</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>L2TP/IPsec</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Strong</td>
                        <td style="padding:8px; border:1px solid #ddd;">UDP 500, 4500</td>
                        <td style="padding:8px; border:1px solid #ddd;">Common, good security</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>OpenVPN</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Very Strong</td>
                        <td style="padding:8px; border:1px solid #ddd;">UDP 1194</td>
                        <td style="padding:8px; border:1px solid #ddd;">Open source, flexible</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>WireGuard</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Very Strong</td>
                        <td style="padding:8px; border:1px solid #ddd;">UDP 51820</td>
                        <td style="padding:8px; border:1px solid #ddd;">Modern, fast</td>
                    </tr>
                </table>
                
                <h4>VPN Configuration Example (OpenVPN Server)</h4>
                <pre style="background:#f4f4f4; padding:10px; border-radius:5px;">
port 1194
proto udp
dev tun
ca ca.crt
cert server.crt
key server.key
dh dh.pem
server 10.8.0.0 255.255.255.0
push "route 192.168.1.0 255.255.255.0"
push "dhcp-option DNS 8.8.8.8"
client-to-client
keepalive 10 120
cipher AES-256-CBC
user nobody
group nogroup
persist-key
persist-tun
status openvpn-status.log
verb 3
                </pre>
                
                <h4>VPN Client Configuration</h4>
                <p>Clients need:</p>
                <ul>
                    <li>VPN server address</li>
                    <li>Authentication credentials (certificates or username/password)</li>
                    <li>Appropriate protocol settings</li>
                </ul>
            `,
            keyPoints: [
                "VPN provides secure remote access to private network",
                "Types: Remote Access, Site-to-Site, SSL VPN",
                "Protocols: PPTP (weak), L2TP/IPsec, OpenVPN, WireGuard",
                "VPN encrypts traffic for security",
                "Common uses: remote work, secure browsing"
            ]
        },

        {
            title: "2.5 Network Resource Sharing",
            content: `
                <h4>File Sharing Services</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Protocol/Service</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Platform</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>SMB/CIFS</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Server Message Block - file and printer sharing</td>
                        <td style="padding:8px; border:1px solid #ddd;">Windows, Linux (Samba)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>NFS</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Network File System</td>
                        <td style="padding:8px; border:1px solid #ddd;">Unix/Linux</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>AFP</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Apple Filing Protocol</td>
                        <td style="padding:8px; border:1px solid #ddd;">macOS</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>FTP/SFTP</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">File Transfer Protocol</td>
                        <td style="padding:8px; border:1px solid #ddd;">Cross-platform</td>
                    </tr>
                </table>
                
                <h4>Printer Sharing</h4>
                <ul>
                    <li>Network printers with built-in network interfaces</li>
                    <li>Print servers that share locally attached printers</li>
                    <li>Protocols: LPD/LPR, IPP (Internet Printing Protocol)</li>
                </ul>
                
                <h4>Client-Server vs Peer-to-Peer Networks</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Aspect</th>
                        <th style="padding:10px; border:1px solid #ddd;">Client-Server</th>
                        <th style="padding:10px; border:1px solid #ddd;">Peer-to-Peer</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Resource management</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Centralized on servers</td>
                        <td style="padding:8px; border:1px solid #ddd;">Distributed among peers</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Security</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Centralized control</td>
                        <td style="padding:8px; border:1px solid #ddd;">Per-device management</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Scalability</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">High (add more servers)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Limited</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Examples</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Windows Domain, NFS</td>
                        <td style="padding:8px; border:1px solid #ddd;">Workgroup, BitTorrent</td>
                    </tr>
                </table>
                
                <p><strong>In a client-server network, resources are centralized and managed by a server, while in a peer-to-peer network, resources are shared among all connected devices.</strong></p>
                
                <h4>Domain Controller in Windows Network</h4>
                <p>A key function of a domain controller is to <strong>manage user accounts and authentication</strong>.</p>
                
                <h4>Active Directory Sites and Services</h4>
                <p>This feature <strong>enables replication of directory data across multiple sites</strong>.</p>
            `,
            keyPoints: [
                "File sharing: SMB (Windows), NFS (Unix/Linux), AFP (macOS), FTP",
                "Client-server: centralized resources, managed by servers",
                "Peer-to-peer: distributed resources, shared among all",
                "Domain controller: manages user accounts and authentication",
                "Active Directory Sites and Services: replicates data across sites"
            ]
        },

        {
            title: "2.6 User Access Management",
            content: `
                <h4>User Account Management</h4>
                <p>System administrators must manage user accounts, including creation, modification, and deletion.</p>
                
                <h4>Common User Management Tasks</h4>
                <ul>
                    <li>Creating new user accounts</li>
                    <li>Modifying existing user accounts</li>
                    <li>Deleting user accounts</li>
                    <li>Resetting passwords</li>
                    <li>Managing group memberships</li>
                    <li>Setting access permissions</li>
                </ul>
                
                <h4>Which of the following is not a common user management task?</h4>
                <p><strong>Installing software for users</strong> is not specifically a user management task (it's software management).</p>
                
                <h4>Authentication Factors</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Factor</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Examples</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Something you know</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Knowledge-based</td>
                        <td style="padding:8px; border:1px solid #ddd;">Password, PIN, security questions</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Something you have</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Possession-based</td>
                        <td style="padding:8px; border:1px solid #ddd;">Smart card, token, phone</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Something you are</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Biometric</td>
                        <td style="padding:8px; border:1px solid #ddd;">Fingerprint, retina, voice</td>
                    </tr>
                </table>
                
                <h4>Which authentication procedure is bounded to user's body?</h4>
                <p><strong>Biometric authentication</strong> (fingerprint, retina scan) is bounded to the user's body.</p>
                
                <h4>Multi-Factor Authentication</h4>
                <p>Using two or more different factors increases security. Example: <strong>Password and fingerprint</strong> combines something you know with something you are.</p>
                
                <h4>Rule in Access Control</h4>
                <p><strong>Grant the least access job requirements allow</strong> (principle of least privilege).</p>
            `,
            keyPoints: [
                "User management: create, modify, delete accounts",
                "Installing software is NOT a user management task",
                "Authentication factors: knowledge, possession, inherence (biometric)",
                "Biometric = bound to user's body",
                "Multi-factor = combine different factors",
                "Least privilege: grant minimum necessary access"
            ]
        },

        {
            title: "2.7 Performance Monitoring and Optimization",
            content: `
                <h4>Why Monitor Performance?</h4>
                <ul>
                    <li>Detect bottlenecks before they affect users</li>
                    <li>Plan for capacity upgrades</li>
                    <li>Verify service level agreements (SLAs)</li>
                    <li>Troubleshoot issues</li>
                </ul>
                
                <h4>Key Performance Metrics</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Metric</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Tools</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>CPU utilization</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Percentage of CPU time busy</td>
                        <td style="padding:8px; border:1px solid #ddd;">top, perfmon</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Memory usage</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">RAM used vs available</td>
                        <td style="padding:8px; border:1px solid #ddd;">free, task manager</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Disk I/O</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Read/write operations</td>
                        <td style="padding:8px; border:1px solid #ddd;">iostat, perfmon</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Network throughput</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Data transfer rate</td>
                        <td style="padding:8px; border:1px solid #ddd;">iftop, nload</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Response time</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Time to respond to requests</td>
                        <td style="padding:8px; border:1px solid #ddd;">ping, custom monitoring</td>
                    </tr>
                </table>
                
                <h4>Performance Optimization Techniques</h4>
                <ul>
                    <li><strong>Load balancing:</strong> Distribute traffic across multiple servers</li>
                    <li><strong>Caching:</strong> Store frequently accessed data</li>
                    <li><strong>Resource scaling:</strong> Add more CPU, memory, or storage</li>
                    <li><strong>Code optimization:</strong> Improve application efficiency</li>
                    <li><strong>Database tuning:</strong> Optimize queries and indexes</li>
                </ul>
                
                <h4>Biggest Security Challenges</h4>
                <p>System administration faces several security challenges:</p>
                <ul>
                    <li><strong>Keeping up with constantly evolving threats</strong> - the biggest challenge</li>
                    <li>Ensuring all employees follow security protocols</li>
                    <li>Implementing complex security measures</li>
                    <li>Balancing security with accessibility</li>
                </ul>
            `,
            keyPoints: [
                "Performance monitoring detects bottlenecks",
                "Key metrics: CPU, memory, disk I/O, network, response time",
                "Optimization: load balancing, caching, scaling, tuning",
                "Biggest security challenge: keeping up with evolving threats"
            ]
        }
    ],

    summary: `
        <h3>Chapter 2 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>DNS:</strong> Translates domain names to IP addresses; record types: A, AAAA, CNAME, MX, PTR, NS, TXT</li>
            <li><strong>DHCP:</strong> Automatically assigns IP addresses using DORA process; ipconfig /all shows configuration</li>
            <li><strong>VPN:</strong> Provides secure remote access; types: Remote Access, Site-to-Site, SSL VPN</li>
            <li><strong>Network resource sharing:</strong> SMB (Windows), NFS (Unix), client-server vs peer-to-peer</li>
            <li><strong>User management:</strong> Creating, modifying, deleting accounts; installing software is NOT user management</li>
            <li><strong>Authentication factors:</strong> Knowledge, possession, inherence (biometric bound to body)</li>
            <li><strong>Performance monitoring:</strong> CPU, memory, disk I/O, network, response time</li>
            <li><strong>Biggest security challenge:</strong> Keeping up with evolving threats</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What is the DORA process in DHCP?",
            answer: "Discover (client finds server), Offer (server offers IP), Request (client requests IP), Ack (server acknowledges)."
        },
        {
            question: "What command in Windows shows IP configuration, subnet mask, gateway, and MAC address?",
            answer: "ipconfig /all"
        },
        {
            question: "What are the three authentication factors? Give examples.",
            answer: "Something you know (password), something you have (smart card), something you are (fingerprint)."
        },
        {
            question: "Which authentication factor is bounded to user's body?",
            answer: "Biometric authentication (fingerprint, retina scan)."
        },
        {
            question: "What is the main difference between client-server and peer-to-peer networks?",
            answer: "Client-server: resources centralized and managed by servers. Peer-to-peer: resources shared among all connected devices."
        },
        {
            question: "What is the biggest security challenge faced by system administrators?",
            answer: "Keeping up with constantly evolving threats."
        }
    ],

    quickTips: [
        "DNS = domain name to IP",
        "DHCP = automatic IP assignment (DORA)",
        "ipconfig /all shows detailed IP info",
        "VPN = secure remote access",
        "Authentication factors: know, have, are",
        "Biometric = bound to body",
        "Client-server = centralized, P2P = distributed",
        "Biggest security challenge = evolving threats"
    ],

    commonMistakes: [
        "❌ Thinking installing software is a user management task - it's software management",
        "❌ Confusing DNS record types (A vs CNAME vs MX)",
        "❌ Forgetting that ipconfig /all shows MAC address",
        "❌ Not knowing that biometrics are bound to the body",
        "❌ Mixing up client-server and peer-to-peer architectures"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 2:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>2 questions</strong> distributed as:</p>
        <ul>
            <li><strong>1 Apply question:</strong> Configuring network services (DNS, DHCP, VPN)</li>
            <li><strong>1 Analyze question:</strong> Analyzing network performance and user access</li>
        </ul>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>DNS configuration:</strong> Record types, zone files</li>
            <li><strong>DHCP configuration:</strong> DORA process, options, ipconfig /all</li>
            <li><strong>VPN:</strong> Types, protocols, configuration</li>
            <li><strong>Authentication:</strong> Factors, biometrics (bound to body)</li>
            <li><strong>Performance monitoring:</strong> Metrics, challenges</li>
        </ol>
        
        <h4>Practice Apply Questions:</h4>
        <ul>
            <li>Configure a DHCP scope for a subnet with specific options.</li>
            <li>Set up DNS records for a new domain.</li>
            <li>Configure a VPN for remote users.</li>
        </ul>
        
        <h4>Practice Analyze Questions:</h4>
        <ul>
            <li>Analyze DHCP lease behavior when a PC is removed from network.</li>
            <li>Evaluate authentication methods for a given security requirement.</li>
            <li>Compare client-server and peer-to-peer network architectures.</li>
        </ul>
    `
};