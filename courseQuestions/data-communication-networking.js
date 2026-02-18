// ===============================
// DATA COMMUNICATION AND COMPUTER NETWORKING
// ===============================
window.networkingQuestions = [
    {
        "question": "Which of the following is not a primary function of the network layer in the OSI model?",
        "options": [
            "Routing",
            "Addressing",
            "Flow control",
            "Fragmentation"
        ],
        "answer": 2,
        "explanation": "The network layer is responsible for routing packets across different networks and providing addressing and fragmentation services. Flow control is typically handled by the transport layer.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "What is the purpose of a MAC address in computer networking?",
        "options": [
            "To identify a device within a local area network (LAN)",
            "To identify a device within a wide area network (WAN)",
            "To establish a secure connection between two devices",
            "To determine the IP address of a device"
        ],
        "answer": 0,
        "explanation": "A MAC (Media Access Control) address is a unique identifier assigned to a network interface card (NIC) and is used to identify a device within a local network.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which of the following protocols is used for email transmission?",
        "options": [
            "FTP (File Transfer Protocol)",
            "SMTP (Simple Mail Transfer Protocol)",
            "HTTP (Hypertext Transfer Protocol)",
            "DNS (Domain Name System)"
        ],
        "answer": 1,
        "explanation": "SMTP is the standard protocol used for sending and receiving email messages between mail servers.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "What is the purpose of a firewall in computer networks?",
        "options": [
            "To encrypt network traffic for secure communication",
            "To manage network resources and allocate bandwidth",
            "To filter and control network traffic based on predefined rules",
            "To connect two separate networks and enable communication between them"
        ],
        "answer": 2,
        "explanation": "A firewall is a network security device that monitors and filters incoming and outgoing network traffic based on a set of rules to protect the network from unauthorized access and potential threats.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which of the following network topologies provides the highest fault tolerance?",
        "options": [
            "Bus topology",
            "Ring topology",
            "Star topology",
            "Mesh topology"
        ],
        "answer": 3,
        "explanation": "In a mesh topology, each device is connected to every other device, providing multiple redundant paths. This redundancy enhances fault tolerance and ensures high availability in case of link failures.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which network addressing scheme is used in IPv6?",
        "options": [
            "Classful addressing",
            "Classless addressing",
            "Subnetting",
            "CIDR (Classless Inter-Domain Routing)"
        ],
        "answer": 1,
        "explanation": "IPv6 uses classless addressing, where the length of the network prefix is not fixed as in classful addressing. It allows for more efficient allocation of IP addresses and supports hierarchical addressing.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which protocol is responsible for translating domain names into IP addresses?",
        "options": [
            "DHCP (Dynamic Host Configuration Protocol)",
            "DNS (Domain Name System)",
            "ARP (Address Resolution Protocol)",
            "ICMP (Internet Control Message Protocol)"
        ],
        "answer": 1,
        "explanation": "DNS is responsible for translating domain names, such as www.example.com, into corresponding IP addresses.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "What is the purpose of NAT (Network Address Translation) in computer networks?",
        "options": [
            "To secure network communications through encryption",
            "To provide redundancy and fault tolerance",
            "To translate private IP addresses to public IP addresses",
            "To manage network resources and allocate bandwidth"
        ],
        "answer": 2,
        "explanation": "NAT allows multiple devices within a private network to share a single public IP address by translating the private IP addresses to the public IP address when communicating with external networks.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which of the following is an example of a connectionless protocol?",
        "options": [
            "TCP (Transmission Control Protocol)",
            "UDP (User Datagram Protocol)",
            "HTTP (Hypertext Transfer Protocol)",
            "FTP (File Transfer Protocol)"
        ],
        "answer": 1,
        "explanation": "UDP is a connectionless protocol that does not establish a dedicated connection before sending data. It provides fast and lightweight communication but does not guarantee reliable delivery.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which network device operates at the Data Link layer of the OSI model?",
        "options": [
            "Hub",
            "Switch",
            "Router",
            "Bridge"
        ],
        "answer": 1,
        "explanation": "A switch operates at the Data Link layer (Layer 2) of the OSI model and is responsible for forwarding data packets between devices within a local network based on their MAC addresses.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which protocol is used for secure communication over the internet?",
        "options": [
            "HTTP",
            "FTP",
            "HTTPS",
            "SMTP"
        ],
        "answer": 2,
        "explanation": "HTTPS (Hypertext Transfer Protocol Secure) is a protocol that uses encryption to ensure secure communication over the internet. It is commonly used for secure transactions, such as online banking and e-commerce.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "What is the function of a router in a computer network?",
        "options": [
            "To connect multiple networks together",
            "To amplify the strength of network signals",
            "To provide firewall protection",
            "To manage network resources and allocate bandwidth"
        ],
        "answer": 0,
        "explanation": "A router is a networking device that forwards data packets between different networks. It connects multiple networks and determines the best path for data transmission.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which of the following is a network device that operates at the Physical layer of the OSI model?",
        "options": [
            "Switch",
            "Hub",
            "Router",
            "Bridge"
        ],
        "answer": 1,
        "explanation": "A hub is a network device that operates at the Physical layer (Layer 1) of the OSI model. It simply broadcasts incoming data to all connected devices without any intelligence or filtering.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which network component is responsible for converting digital data into analog signals for transmission over telephone lines?",
        "options": [
            "Modem",
            "Router",
            "Switch",
            "Firewall"
        ],
        "answer": 0,
        "explanation": "A modem (Modulator-Demodulator) is used to modulate digital data into analog signals for transmission over analog telephone lines. It also demodulates the analog signals back into digital data at the receiving end.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which protocol is used for sending and receiving email messages?",
        "options": [
            "SMTP",
            "HTTP",
            "FTP",
            "DNS"
        ],
        "answer": 0,
        "explanation": "SMTP (Simple Mail Transfer Protocol) is the standard protocol used for sending and receiving email messages between mail servers.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "What is the purpose of DNS (Domain Name System) in computer networks?",
        "options": [
            "To encrypt network traffic for secure communication",
            "To manage network resources and allocate bandwidth",
            "To convert domain names into IP addresses",
            "To provide firewall protection"
        ],
        "answer": 2,
        "explanation": "DNS is responsible for translating domain names, such as www.example.com, into their corresponding IP addresses. It acts as a directory for mapping human-readable domain names to machine-readable IP addresses.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which of the following is a network protocol used for file transfer between computers?",
        "options": [
            "HTTP",
            "FTP",
            "SMTP",
            "TCP"
        ],
        "answer": 1,
        "explanation": "FTP (File Transfer Protocol) is a network protocol used for transferring files between computers over a network. It provides functionalities for uploading, downloading, and managing files on remote servers.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which network component is responsible for connecting multiple devices within a local area network (LAN)?",
        "options": [
            "Hub",
            "Router",
            "Switch",
            "Modem"
        ],
        "answer": 2,
        "explanation": "A switch is a network component used to connect multiple devices within a local area network (LAN). It forwards data packets to the intended device based on their MAC addresses.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "What is the primary function of a firewall in a computer network?",
        "options": [
            "To manage network resources and allocate bandwidth",
            "To encrypt network traffic for secure communication",
            "To filter and monitor network traffic for security purposes",
            "To convert domain names into IP addresses"
        ],
        "answer": 2,
        "explanation": "A firewall is a security device that monitors and filters network traffic based on predetermined rules. It acts as a barrier between the internal network and external networks, providing protection against unauthorized access and malicious activities.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which protocol is responsible for assigning IP addresses to devices on a network automatically?",
        "options": [
            "HTTP",
            "DNS",
            "DHCP",
            "FTP"
        ],
        "answer": 2,
        "explanation": "DHCP is a network protocol that dynamically assigns IP addresses to devices on a network. It simplifies the process of network configuration by automatically providing IP addresses, subnet masks, and other network parameters to connected devices.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which layer of the OSI reference model is responsible for establishing, managing, and terminating connections between devices?",
        "options": [
            "Physical layer",
            "Data Link layer",
            "Transport layer",
            "Session layer"
        ],
        "answer": 2,
        "explanation": "The transport layer is responsible for establishing, managing, and terminating connections between devices. It ensures reliable data delivery and provides mechanisms for flow control and error recovery.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which protocol is used for reliable data delivery at the transport layer in the TCP/IP protocol suite?",
        "options": [
            "UDP",
            "IP",
            "FTP",
            "TCP"
        ],
        "answer": 3,
        "explanation": "TCP is a reliable transport protocol that ensures the reliable delivery of data between devices in the TCP/IP protocol suite. It provides features such as error detection, flow control, and congestion control.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which layer of the OSI reference model is responsible for addressing and routing data packets across different networks?",
        "options": [
            "Network layer",
            "Data Link layer",
            "Transport layer",
            "Physical layer"
        ],
        "answer": 0,
        "explanation": "The network layer is responsible for addressing and routing data packets across different networks. It determines the optimal path for data transmission and performs logical addressing using IP addresses.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which layer of the OSI reference model is responsible for reliable data delivery within the same network segment?",
        "options": [
            "Network layer",
            "Transport layer",
            "Data Link layer",
            "Application layer"
        ],
        "answer": 2,
        "explanation": "The Data Link layer is responsible for reliable data delivery within the same network segment. It handles the framing of data packets, error detection, and correction at the link level.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which protocol is used for sending and receiving email messages over the internet?",
        "options": [
            "SMTP",
            "FTP",
            "HTTP",
            "DNS"
        ],
        "answer": 0,
        "explanation": "SMTP is the standard protocol used for sending and receiving email messages over the internet. It is responsible for the transfer of email messages between mail servers.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which layer of the OSI reference model is responsible for converting data into a format suitable for transmission over a network?",
        "options": [
            "Presentation layer",
            "Session layer",
            "Physical layer",
            "Application layer"
        ],
        "answer": 0,
        "explanation": "The presentation layer is responsible for converting data into a format suitable for transmission over a network. It handles data compression, encryption, and formatting.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which protocol is used for translating domain names into IP addresses?",
        "options": [
            "DNS",
            "FTP",
            "HTTP",
            "SMTP"
        ],
        "answer": 0,
        "explanation": "DNS is used for translating domain names into their corresponding IP addresses. It acts as a distributed database that maps domain names to IP addresses.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which layer of the OSI reference model is responsible for establishing and terminating sessions between applications?",
        "options": [
            "Presentation layer",
            "Session layer",
            "Transport layer",
            "Application layer"
        ],
        "answer": 1,
        "explanation": "The session layer is responsible for establishing and terminating sessions between applications. It manages the dialogue and coordination between applications and provides synchronization and recovery mechanisms.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which protocol is used for transferring files between computers over a network?",
        "options": [
            "SMTP",
            "HTTP",
            "FTP",
            "TCP"
        ],
        "answer": 2,
        "explanation": "FTP is a protocol used for transferring files between computers over a network. It provides functions for file upload, download, and directory listing.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which layer of the OSI reference model is responsible for providing services directly to the end-user applications?",
        "options": [
            "Presentation layer",
            "Session layer",
            "Transport layer",
            "Application layer"
        ],
        "answer": 3,
        "explanation": "The application layer is the topmost layer of the OSI reference model. It provides services directly to the end-user applications, such as email, web browsing, and file transfer.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which subnet mask represents a Class C network?",
        "options": [
            "255.0.0.0",
            "255.255.0.0",
            "255.255.255.0",
            "255.255.255.255"
        ],
        "answer": 2,
        "explanation": "A Class C network uses a subnet mask of 255.255.255.0. This allows for 254 host addresses in the network.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "What is the maximum number of hosts in a subnet with a subnet mask of 255.255.255.224?",
        "options": [
            "8",
            "16",
            "30",
            "62"
        ],
        "answer": 3,
        "explanation": "With a subnet mask of 255.255.255.224, there are 5 subnet bits and 27 host bits. The formula to calculate the number of hosts is 2^(number of host bits) - 2. Therefore, 2^5 - 2 = 30 hosts.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which IP address belongs to the loopback network?",
        "options": [
            "127.0.0.1",
            "192.168.0.1",
            "10.0.0.1",
            "172.16.0.1"
        ],
        "answer": 0,
        "explanation": "The loopback network is represented by the IP address range 127.0.0.0/8, and the loopback address itself is 127.0.0.1. It is used to test network connectivity on the local machine.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "How many subnets can be created from a Class B network with a subnet mask of 255.255.240.0?",
        "options": [
            "8",
            "16",
            "32",
            "64"
        ],
        "answer": 1,
        "explanation": "With a subnet mask of 255.255.240.0, there are 4 subnet bits. The formula to calculate the number of subnets is 2^(number of subnet bits). Therefore, 2^4 = 16 subnets.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "What is the default subnet mask for a Class A network?",
        "options": [
            "255.0.0.0",
            "255.255.0.0",
            "255.255.255.0",
            "255.255.255.255"
        ],
        "answer": 0,
        "explanation": "A Class A network uses a default subnet mask of 255.0.0.0. This allows for a large number of host addresses.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which subnet mask is used for a point-to-point link?",
        "options": [
            "255.255.255.0",
            "255.255.255.128",
            "255.255.255.192",
            "255.255.255.252"
        ],
        "answer": 3,
        "explanation": "A point-to-point link only requires two IP addresses, one for each end of the link. Therefore, a subnet mask of 255.255.255.252 is used, which allows for 2 host addresses (1 usable).",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "How many bits are in the host portion of an IPv4 address with a subnet mask of 255.255.255.192?",
        "options": [
            "6",
            "8",
            "10",
            "14"
        ],
        "answer": 0,
        "explanation": "With a subnet mask of 255.255.255.192, there are 2 subnet bits and 6 host bits. The host portion represents the unique host addresses within the subnet.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "How many usable host addresses are available in a subnet with a subnet mask of 255.255.255.224?",
        "options": [
            "6",
            "14",
            "30",
            "62"
        ],
        "answer": 2,
        "explanation": "With a subnet mask of 255.255.255.224, there are 5 host bits. The formula to calculate the number of hosts is 2^(number of host bits) - 2. Therefore, 2^5 - 2 = 30 hosts.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which type of IP address is used for communication within a local network?",
        "options": [
            "Public IP address",
            "Private IP address",
            "Reserved IP address",
            "Dynamic IP address"
        ],
        "answer": 1,
        "explanation": "Private IP addresses are used for communication within a local network. They are not routable over the Internet and are reserved for private use.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which of the following is not a valid IP address?",
        "options": [
            "192.168.0.1",
            "10.0.0.256",
            "172.16.0.0",
            "255.255.255.0"
        ],
        "answer": 1,
        "explanation": "The valid range for each octet in an IP address is from 0 to 255. The given IP address, 10.0.0.256, has a value greater than 255 in the last octet, making it an invalid IP address.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "What is the default subnet mask for a Class B IP address?",
        "options": [
            "255.0.0.0",
            "255.255.0.0",
            "255.255.255.0",
            "255.255.255.255"
        ],
        "answer": 1,
        "explanation": "A Class B IP address uses a default subnet mask of 255.255.0.0, allowing for a large number of host addresses within the network.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "How many bits are used for the host portion of an IP address with a subnet mask of 255.255.255.0?",
        "options": [
            "8 bits",
            "16 bits",
            "24 bits",
            "32 bits"
        ],
        "answer": 2,
        "explanation": "The subnet mask 255.255.255.0 uses 24 bits for the network portion and leaves 8 bits for the host portion in an IPv4 address.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "How many subnets can be created from a Class C network with a subnet mask of 255.255.255.192?",
        "options": [
            "2",
            "4",
            "8",
            "16"
        ],
        "answer": 2,
        "explanation": "With a subnet mask of 255.255.255.192, there are 6 subnet bits. The formula to calculate the number of subnets is 2^(number of subnet bits). Therefore, 2^6 = 64 subnets. However, the first subnet (all zeros) and the last subnet (all ones) are reserved, leaving 64 - 2 = 62 usable subnets.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "What is the maximum number of IP addresses that can be assigned to hosts in a subnet with a /27 subnet mask?",
        "options": [
            "14",
            "30",
            "62",
            "126"
        ],
        "answer": 1,
        "explanation": "A /27 subnet mask allows for 27 host bits, which gives a maximum of 2^5 - 2 = 30 usable host addresses.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which IP address range is reserved for Automatic Private IP Addressing (APIPA)?",
        "options": [
            "10.0.0.0 - 10.255.255.255",
            "127.0.0.0 - 127.255.255.255",
            "169.254.0.0 - 169.254.255.255",
            "192.168.0.0 - 192.168.255.255"
        ],
        "answer": 2,
        "explanation": "APIPA is a range of IP addresses reserved for automatic assignment to hosts when a DHCP server is not available. The range is 169.254.0.0 - 169.254.255.255.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "What is the purpose of Network Address Translation (NAT) in computer networking?",
        "options": [
            "To encrypt network traffic for secure communication",
            "To assign unique IP addresses to hosts in a network",
            "To provide a firewall for network security",
            "To translate private IP addresses to public IP addresses"
        ],
        "answer": 3,
        "explanation": "NAT is used to translate private IP addresses used within a local network to a public IP address assigned by the Internet Service Provider (ISP). This allows multiple devices within the private network to share a single public IP address.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which of the following protocols is responsible for assigning IP addresses to hosts dynamically?",
        "options": [
            "DNS",
            "DHCP",
            "HTTP",
            "FTP"
        ],
        "answer": 1,
        "explanation": "DHCP (Dynamic Host Configuration Protocol) is used to dynamically assign IP addresses to hosts on a network. It allows for automatic configuration of IP addresses, subnet masks, gateway addresses, and other network parameters.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "What is a client-server system in web programming?",
        "options": [
            "A system where the client and server are the same machine",
            "A system where the client and server are different machines and communicate over a network",
            "A system where the client and server are different browsers running on the same machine",
            "A system where the client and server are different web pages on the same website"
        ],
        "answer": 1,
        "explanation": "In web programming, a client-server system refers to a setup where the client (usually a web browser) and server (a remote machine) communicate over a network to exchange data and perform operations.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which protocol is commonly used for communication between a web client and server?",
        "options": [
            "HTTP",
            "FTP",
            "TCP/IP",
            "SMTP"
        ],
        "answer": 0,
        "explanation": "HTTP (Hypertext Transfer Protocol) is the standard protocol used for communication between a web client (such as a browser) and server in web programming. It defines how data is formatted and transmitted between the client and server.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which method in HTTP is used to retrieve a resource from a server?",
        "options": [
            "GET",
            "POST",
            "PUT",
            "DELETE"
        ],
        "answer": 0,
        "explanation": "The GET method in HTTP is used to retrieve a resource (such as a web page or file) from a server. The client sends a request to the server, and the server responds with the requested resource.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which method in HTTP is used to send data to a server for processing?",
        "options": [
            "GET",
            "POST",
            "PUT",
            "DELETE"
        ],
        "answer": 1,
        "explanation": "The POST method in HTTP is used to send data to a server for processing. It is commonly used when submitting forms or uploading files to a server.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which HTTP status code indicates a successful request?",
        "options": [
            "200",
            "300",
            "400",
            "500"
        ],
        "answer": 0,
        "explanation": "The HTTP status code 200 indicates a successful request. It means that the server has successfully processed the request and returned the requested resource.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which HTTP status code indicates that the requested resource is not found on the server?",
        "options": [
            "200",
            "300",
            "400",
            "404"
        ],
        "answer": 3,
        "explanation": "The HTTP status code 404 indicates that the requested resource is not found on the server. It is commonly referred to as the 'Not Found' error.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "What is concurrency in the context of client-server systems?",
        "options": [
            "The ability of the server to handle multiple clients simultaneously",
            "The ability of the client to handle multiple servers simultaneously",
            "The ability of the server to handle multiple requests from a single client",
            "The ability of the client to handle multiple requests to a single server"
        ],
        "answer": 0,
        "explanation": "Concurrency in client-server systems refers to the ability of the server to handle multiple clients simultaneously. It involves managing and coordinating multiple client connections and requests efficiently.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "What is a race condition in the context of concurrency?",
        "options": [
            "A condition where two or more clients compete to establish a connection with the server",
            "A condition where two or more servers compete to respond to a client request",
            "A condition where multiple threads or processes access shared resources in an unpredictable manner",
            "A condition where multiple clients send duplicate requests to the server"
        ],
        "answer": 2,
        "explanation": "A race condition occurs when multiple threads or processes access shared resources in an unpredictable manner, leading to unexpected and potentially incorrect results. It can occur in concurrent client-server systems when multiple clients access shared data or resources on the server.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which synchronization technique is commonly used to prevent race conditions in client-server systems?",
        "options": [
            "Mutex locks",
            "Spinlocks",
            "Semaphores",
            "Message queues"
        ],
        "answer": 0,
        "explanation": "Mutex locks are commonly used synchronization techniques to prevent race conditions in client-server systems. They allow mutually exclusive access to shared resources, ensuring that only one thread or process can access the resource at a time.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "What is a callback function in the context of client-server systems?",
        "options": [
            "A function that is called by the server to notify the client about a completed operation",
            "A function that is called by the client to request a specific operation from the server",
            "A function that is called by the server to handle concurrent client requests",
            "A function that is called by the client to synchronize with the server"
        ],
        "answer": 0,
        "explanation": "In client-server systems, a callback function is a function that is called by the server to notify the client about a completed operation or an event. It allows asynchronous communication between the client and server.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which protocol is commonly used for asynchronous communication between a client and server?",
        "options": [
            "HTTP",
            "FTP",
            "TCP/IP",
            "WebSocket"
        ],
        "answer": 3,
        "explanation": "WebSocket is a protocol commonly used for asynchronous communication between a client and server. It enables real-time, full-duplex communication, allowing both the client and server to send messages to each other asynchronously.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "What is long polling in client-server communication?",
        "options": [
            "A technique where the server continuously sends updates to the client",
            "A technique where the client continuously sends requests to the server for updates",
            "A technique where the server holds a request from the client until new data is available",
            "A technique where the client holds a request from the server until new data is available"
        ],
        "answer": 2,
        "explanation": "Long polling is a technique where the server holds a request from the client until new data is available. It allows the server to push updates to the client as soon as they are available, reducing the need for continuous client requests.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "Which protocol is commonly used for secure communication between a client and server?",
        "options": [
            "HTTP",
            "FTP",
            "TCP/IP",
            "HTTPS"
        ],
        "answer": 3,
        "explanation": "HTTPS (Hypertext Transfer Protocol Secure) is a secure version of HTTP that uses encryption to ensure secure communication between a client and server. It is commonly used for sensitive data transfer, such as online transactions.",
        "course": "Data Communication and Computer Networking"
    },
    {
        "question": "What is a load balancer in the context of client-server systems?",
        "options": [
            "A device that balances the load between multiple clients",
            "A device that balances the load between multiple servers",
            "A device that balances the load between the client and server",
            "A device that balances the load between different network protocols"
        ],
        "answer": 1,
        "explanation": "A load balancer is a device or software component that evenly distributes incoming client requests across multiple servers. It helps optimize the performance and scalability of client-server systems.",
        "course": "Data Communication and Computer Networking"
    }
];