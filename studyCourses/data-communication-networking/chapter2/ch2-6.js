// ===============================
// Data Communication and Computer Networks - Chapter 2.6
// Presentation Layer
// ===============================

window.currentSubsectionData = {
    title: "2.6 Presentation Layer",
    content: `
        <h2>2.6 Presentation Layer</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand the role and functions of the Presentation Layer in OSI model</li>
                <li>Learn about data translation and formatting</li>
                <li>Explore encryption and decryption mechanisms</li>
                <li>Understand data compression techniques</li>
                <li>Learn about common presentation protocols and standards</li>
                <li>Understand the relationship between Presentation Layer and other layers</li>
            </ul>
        </div>

        <!-- ==================== SECTION 2.6.1: INTRODUCTION TO PRESENTATION LAYER ==================== -->
        <h3>2.6.1 Introduction to Presentation Layer</h3>
        
        <p>The <strong>Presentation Layer</strong> is Layer 6 of the OSI model. It is responsible for translating data between the application layer and the network format. It ensures that information sent from the application layer of one system can be read by the application layer of another system.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> The Presentation Layer acts as a translator, converting data between the format required by the application and the format required for network transmission. It handles data representation, encryption, and compression.</p>
        </div>
        
        <h4>Position in OSI Model:</h4>
        
        <pre>
        ┌─────────────────────────────────────┐
        │       7. Application Layer          │
        ├─────────────────────────────────────┤
        │    👉 6. PRESENTATION LAYER  👈     │
        ├─────────────────────────────────────┤
        │       5. Session Layer              │
        ├─────────────────────────────────────┤
        │       4. Transport Layer            │
        ├─────────────────────────────────────┤
        │       3. Network Layer              │
        ├─────────────────────────────────────┤
        │       2. Data Link Layer            │
        ├─────────────────────────────────────┤
        │       1. Physical Layer             │
        └─────────────────────────────────────┘</pre>

        <!-- ==================== SECTION 2.6.2: FUNCTIONS OF PRESENTATION LAYER ==================== -->
        <h3>2.6.2 Functions of Presentation Layer</h3>
        
        <p>The Presentation Layer performs three primary functions:</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 30px 0;">
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px;">
                <i class="fas fa-exchange-alt" style="font-size: 40px; color: #667eea; margin-bottom: 10px;"></i>
                <h4 style="margin: 10px 0;">Translation</h4>
                <p>Converts data between different formats (ASCII, EBCDIC, Unicode, etc.) and handles byte ordering (big-endian/little-endian).</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px;">
                <i class="fas fa-lock" style="font-size: 40px; color: #764ba2; margin-bottom: 10px;"></i>
                <h4 style="margin: 10px 0;">Encryption/Decryption</h4>
                <p>Provides data security by encrypting data before transmission and decrypting upon receipt.</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px;">
                <i class="fas fa-compress" style="font-size: 40px; color: #f093fb; margin-bottom: 10px;"></i>
                <h4 style="margin: 10px 0;">Compression</h4>
                <p>Reduces the amount of data to be transmitted, improving network efficiency.</p>
            </div>
        </div>
        
        <h4>Detailed Functions:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Function</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Data Formatting</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Converts data into a common format</td>
                <td style="padding: 10px; border: 1px solid #ddd;">ASCII to EBCDIC conversion</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Data Structure</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Defines how data structures are represented</td>
                <td style="padding: 10px; border: 1px solid #ddd;">XML, JSON, ASN.1</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Data Negotiation</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Agrees on transfer syntax between systems</td>
                <td style="padding: 10px; border: 1px solid #ddd;">SSL/TLS cipher suite negotiation</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Byte Ordering</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Handles endianness differences</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Network byte order (big-endian)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Character Encoding</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Manages character set conversions</td>
                <td style="padding: 10px; border: 1px solid #ddd;">UTF-8, UTF-16, ASCII</td>
            </tr>
        </table>

        <!-- ==================== SECTION 2.6.3: DATA TRANSLATION AND FORMATTING ==================== -->
        <h3>2.6.3 Data Translation and Formatting</h3>
        
        <h4>Character Encoding Systems:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Encoding</th>
                <th style="padding: 10px;">Bits</th>
                <th style="padding: 10px;">Characters</th>
                <th style="padding: 10px;">Usage</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>ASCII</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">7</td>
                <td style="padding: 10px; border: 1px solid #ddd;">128</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Basic English, control characters</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Extended ASCII</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">8</td>
                <td style="padding: 10px; border: 1px solid #ddd;">256</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Western European languages</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>EBCDIC</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">8</td>
                <td style="padding: 10px; border: 1px solid #ddd;">256</td>
                <td style="padding: 10px; border: 1px solid #ddd;">IBM mainframes</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Unicode</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">16/32</td>
                <td style="padding: 10px; border: 1px solid #ddd;">1M+</td>
                <td style="padding: 10px; border: 1px solid #ddd;">All world languages</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>UTF-8</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">8-32</td>
                <td style="padding: 10px; border: 1px solid #ddd;">1M+</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Web, email, modern systems</td>
            </tr>
        </table>
        
        <h4>Byte Ordering (Endianness):</h4>
        
        <p>Different systems store multibyte data differently:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Type</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Example (0x12345678)</th>
                <th style="padding: 10px;">Systems</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Big-Endian</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Most significant byte first</td>
                <td style="padding: 10px; border: 1px solid #ddd;">12 34 56 78</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Network byte order, PowerPC, SPARC</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Little-Endian</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Least significant byte first</td>
                <td style="padding: 10px; border: 1px solid #ddd;">78 56 34 12</td>
                <td style="padding: 10px; border: 1px solid #ddd;">x86, x64 processors</td>
            </tr>
        </table>
        
        <p>The Presentation Layer handles endianness conversion when communicating between different systems. Network protocols typically use big-endian (network byte order).</p>
        
        <h4>Data Structure Representation:</h4>
        
        <ul>
            <li><strong>ASN.1 (Abstract Syntax Notation One):</strong> Formal language for describing data structures</li>
            <li><strong>BER (Basic Encoding Rules):</strong> Encoding rules for ASN.1</li>
            <li><strong>XML (eXtensible Markup Language):</strong> Human-readable markup language</li>
            <li><strong>JSON (JavaScript Object Notation):</strong> Lightweight data interchange format</li>
            <li><strong>Protocol Buffers:</strong> Google's efficient serialization format</li>
        </ul>

        <!-- ==================== SECTION 2.6.4: ENCRYPTION AND DECRYPTION ==================== -->
        <h3>2.6.4 Encryption and Decryption</h3>
        
        <p>The Presentation Layer provides security through encryption, ensuring that data cannot be read by unauthorized parties.</p>
        
        <h4>Types of Encryption:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Type</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Characteristics</th>
                <th style="padding: 10px;">Examples</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Symmetric Encryption</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Same key for encryption and decryption</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Fast, but key distribution challenge</td>
                <td style="padding: 10px; border: 1px solid #ddd;">AES, DES, 3DES, Blowfish</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Asymmetric Encryption</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Different keys for encryption and decryption</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Slower, but solves key distribution</td>
                <td style="padding: 10px; border: 1px solid #ddd;">RSA, ECC, Diffie-Hellman</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Hash Functions</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">One-way encryption, cannot decrypt</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Fixed-length output, used for integrity</td>
                <td style="padding: 10px; border: 1px solid #ddd;">SHA-256, MD5 (insecure), SHA-3</td>
            </tr>
        </table>
        
        <h4>Encryption Process:</h4>
        
        <pre>
        Sender                                      Receiver
          │                                           │
          │  Plaintext                                │
          │     ↓                                     │
          │  Encryption Algorithm                     │
          │     ↓                                     │
          │  Encryption Key                           │
          │     ↓                                     │
          │  Ciphertext ────────────▶                 │
          │                      Ciphertext           │
          │                                           │
          │                                           │
          │                                           │  Ciphertext
          │                                              ↓
          │                                      Decryption Key
          │                                              ↓
          │                                      Decryption Algorithm
          │                                              ↓
          │                                           Plaintext</pre>
        
        <h4>SSL/TLS Handshake:</h4>
        
        <pre>
        Client                                      Server
          │                                           │
          │───1. ClientHello (supported ciphers) ───▶│
          │                                           │
          │◀──2. ServerHello (chosen cipher) ─────────│
          │      Server Certificate                    │
          │                                           │
          │───3. ClientKeyExchange ──────────────────▶│
          │      (encrypted with server's public key)  │
          │                                           │
          │───4. ChangeCipherSpec ───────────────────▶│
          │      Finished                              │
          │                                           │
          │◀──5. ChangeCipherSpec ────────────────────│
          │      Finished                              │
          │                                           │
          │   (Encrypted communication established)    │
          │◀─────────────────────────────────────────▶│</pre>

        <!-- ==================== SECTION 2.6.5: DATA COMPRESSION ==================== -->
        <h3>2.6.5 Data Compression</h3>
        
        <p>Compression reduces the size of data for transmission, saving bandwidth and improving transfer speed.</p>
        
        <h4>Types of Compression:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Type</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Characteristics</th>
                <th style="padding: 10px;">Examples</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Lossless Compression</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">No data loss, original can be perfectly reconstructed</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Used for text, executables, data files</td>
                <td style="padding: 10px; border: 1px solid #ddd;">ZIP, GZIP, PNG, Run-length encoding</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Lossy Compression</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Some data discarded, higher compression ratio</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Used for images, audio, video where perfect reconstruction not needed</td>
                <td style="padding: 10px; border: 1px solid #ddd;">JPEG, MP3, MPEG, H.264</td>
            </tr>
        </table>
        
        <h4>Compression Algorithms:</h4>
        
        <h5>Lossless Algorithms:</h5>
        <ul>
            <li><strong>Run-Length Encoding (RLE):</strong> Replaces repeated characters with count (e.g., AAAABBB → 4A3B)</li>
            <li><strong>Huffman Coding:</strong> Variable-length codes based on frequency</li>
            <li><strong>LZW (Lempel-Ziv-Welch):</strong> Builds dictionary of repeated patterns</li>
            <li><strong>DEFLATE:</strong> Combines LZ77 and Huffman coding (used in ZIP, gzip)</li>
        </ul>
        
        <h5>Lossy Algorithms:</h5>
        <ul>
            <li><strong>JPEG:</strong> Discards high-frequency information in images</li>
            <li><strong>MP3:</strong> Removes sounds outside human hearing range</li>
            <li><strong>MPEG:</strong> Compresses video by storing only changes between frames</li>
        </ul>
        
        <h4>Compression Ratio Example:</h4>
        
        <pre>
        Original text: "The quick brown fox jumps over the lazy dog"
        (43 characters, 344 bytes in UTF-8)
        
        Compressed (gzip): 180 bytes (48% reduction)
        Compressed (bzip2): 160 bytes (53% reduction)
        
        Image: 1920x1080 photo
        Uncompressed (BMP): ~6 MB
        JPEG (90% quality): ~500 KB (92% reduction)
        JPEG (70% quality): ~150 KB (97.5% reduction)</pre>

        <!-- ==================== SECTION 2.6.6: PRESENTATION LAYER PROTOCOLS ==================== -->
        <h3>2.6.6 Presentation Layer Protocols</h3>
        
        <p>Several protocols operate at or provide presentation layer services:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Protocol</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Application</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>SSL/TLS</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Secure Sockets Layer / Transport Layer Security</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Encryption for web, email, VPN</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>MIME</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Multipurpose Internet Mail Extensions</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Email attachments, content types</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>XDR</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">External Data Representation</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Sun RPC, NFS</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>ASN.1</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Abstract Syntax Notation One</td>
                <td style="padding: 10px; border: 1px solid #ddd;">SNMP, LDAP, X.509 certificates</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>JPEG</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Joint Photographic Experts Group</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Image compression standard</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>MPEG</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Moving Picture Experts Group</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Video compression standard</td>
            </tr>
        </table>
        
        <h4>Detailed Look at Key Protocols:</h4>
        
        <h5>1. SSL/TLS</h5>
        <p>Provides encryption and authentication for network communications:</p>
        <ul>
            <li><strong>Record Protocol:</strong> Fragments, compresses, and encrypts data</li>
            <li><strong>Handshake Protocol:</strong> Negotiates cipher suites and keys</li>
            <li><strong>Change Cipher Spec Protocol:</strong> Signals encryption changes</li>
            <li><strong>Alert Protocol:</strong> Error and warning messages</li>
        </ul>
        
        <h5>2. MIME</h5>
        <p>Extends email to support non-text attachments and character sets:</p>
        <ul>
            <li><strong>Content-Type:</strong> Indicates media type (text/html, image/jpeg)</li>
            <li><strong>Content-Transfer-Encoding:</strong> How data is encoded (base64, quoted-printable)</li>
            <li><strong>Multipart messages:</strong> Multiple parts in single message</li>
        </ul>
        
        <h5>3. XDR</h5>
        <p>Standard for data representation across different systems:</p>
        <ul>
            <li>Defines common data types and their wire formats</li>
            <li>Handles byte ordering and alignment</li>
            <li>Used in NFS and RPC protocols</li>
        </ul>

        <!-- ==================== SECTION 2.6.7: PRESENTATION LAYER IN TCP/IP ==================== -->
        <h3>2.6.7 Presentation Layer in TCP/IP</h3>
        
        <p>In the TCP/IP model, there is no distinct Presentation Layer. Presentation functions are typically handled by:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Function</th>
                <th style="padding: 10px;">Where Handled</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Data Translation</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Application Layer protocols</td>
                <td style="padding: 10px; border: 1px solid #ddd;">HTTP Content-Type header</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Encryption</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Application Layer (SSL/TLS)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">HTTPS, SMTPS, FTPS</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Compression</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Application Layer</td>
                <td style="padding: 10px; border: 1px solid #ddd;">HTTP compression (gzip, deflate)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Character Encoding</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Application Layer</td>
                <td style="padding: 10px; border: 1px solid #ddd;">HTML charset declaration</td>
            </tr>
        </table>
        
        <h4>HTTP Content Negotiation:</h4>
        
        <pre>
        Client Request:
        GET /image.jpg HTTP/1.1
        Accept: image/webp, image/jpeg, image/png
        
        Server Response:
        HTTP/1.1 200 OK
        Content-Type: image/webp
        Content-Encoding: gzip
        (compressed WebP image data)</pre>

        <!-- ==================== SECTION 2.6.8: DATA FORMATS AND STANDARDS ==================== -->
        <h3>2.6.8 Data Formats and Standards</h3>
        
        <h4>Text Formats:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Format</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Use Case</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>XML</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">eXtensible Markup Language</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Configuration, web services (SOAP)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>JSON</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">JavaScript Object Notation</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Web APIs, configuration</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>YAML</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">YAML Ain't Markup Language</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Configuration files</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>HTML</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">HyperText Markup Language</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Web pages</td>
            </tr>
        </table>
        
        <h4>Image Formats:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Format</th>
                <th style="padding: 10px;">Compression</th>
                <th style="padding: 10px;">Characteristics</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>JPEG</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Lossy</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Photographs, small file size</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>PNG</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Lossless</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Graphics, transparency</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>GIF</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Lossless</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Animations, limited colors (256)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>WebP</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Both</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Modern web, better compression</td>
            </tr>
        </table>
        
        <h4>Audio/Video Formats:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Format</th>
                <th style="padding: 10px;">Type</th>
                <th style="padding: 10px;">Use Case</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>MP3</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Audio</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Music, podcasts</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>AAC</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Audio</td>
                <td style="padding: 10px; border: 1px solid #ddd;">iTunes, YouTube</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>H.264</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Video</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Blu-ray, streaming</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>VP9</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Video</td>
                <td style="padding: 10px; border: 1px solid #ddd;">YouTube, WebM</td>
            </tr>
        </table>

        <!-- ==================== SECTION 2.6.9: PRESENTATION LAYER SERVICES ==================== -->
        <h3>2.6.9 Presentation Layer Services</h3>
        
        <h4>Service Primitives:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Primitive</th>
                <th style="padding: 10px;">Description</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>P-CONNECT</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Establish presentation connection</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>P-RELEASE</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Orderly release</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>P-U-ABORT</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">User-initiated abort</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>P-P-ABORT</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Provider-initiated abort</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>P-DATA</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Normal data transfer</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>P-EXPEDITED-DATA</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Priority data transfer</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>P-CAPABILITY-DATA</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Exchange capability information</td>
            </tr>
        </table>
        
        <h4>Context Management:</h4>
        
        <p>The Presentation Layer maintains context information including:</p>
        <ul>
            <li>Abstract syntax (data structure definition)</li>
            <li>Transfer syntax (encoding rules)</li>
            <li>Presentation context identifier</li>
            <li>QoS parameters</li>
        </ul>

        <!-- ==================== SECTION 2.6.10: PRESENTATION LAYER IN PRACTICE ==================== -->
        <h3>2.6.10 Presentation Layer in Practice</h3>
        
        <h4>Real-World Examples:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Application</th>
                <th style="padding: 10px;">Presentation Functions</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Web Browsing</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">HTML rendering, character encoding, HTTPS encryption, gzip compression</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Email</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">MIME types, base64 encoding, attachment handling</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>File Transfer</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">ASCII/binary mode selection, compression, encryption</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Database Access</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Data type conversion, character set translation</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Video Streaming</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Video codecs (H.264, VP9), adaptive bitrate, DRM encryption</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Network Management</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">SNMP uses ASN.1/BER for data representation</td>
            </tr>
        </table>
        
        <h4>Common Presentation Layer Issues:</h4>
        
        <ul>
            <li><strong>Character encoding mismatches:</strong> Mojibake (garbled text)</li>
            <li><strong>Endianness problems:</strong> Incorrect interpretation of binary data</li>
            <li><strong>Compression incompatibility:</strong> Client and server don't support same algorithms</li>
            <li><strong>Encryption version mismatch:</strong> SSL/TLS version negotiation failure</li>
            <li><strong>Codec support:</strong> Video/audio format not supported by client</li>
        </ul>
        
        <h4>Debugging Presentation Layer:</h4>
        
        <ul>
            <li>Check HTTP Content-Type and Content-Encoding headers</li>
            <li>Verify character set declarations (meta tags, HTTP headers)</li>
            <li>Test with different file formats</li>
            <li>Monitor SSL/TLS handshake for cipher suite negotiation</li>
            <li>Use network analysis tools to inspect raw data</li>
        </ul>

        <!-- ==================== SECTION SUMMARY ==================== -->
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Section 2.6 Summary</h4>
            <ul>
                <li>The <strong>Presentation Layer</strong> (Layer 6) handles data translation, encryption, and compression</li>
                <li><strong>Translation</strong> converts between different character encodings (ASCII, Unicode) and handles byte ordering (endianness)</li>
                <li><strong>Encryption</strong> provides confidentiality through symmetric (AES) and asymmetric (RSA) algorithms</li>
                <li><strong>Compression</strong> reduces data size using lossless (ZIP, PNG) and lossy (JPEG, MP3) methods</li>
                <li>Key protocols: SSL/TLS (encryption), MIME (email formats), XDR (data representation), ASN.1 (abstract syntax)</li>
                <li>Common data formats: XML, JSON (structured data); JPEG, PNG (images); MP3, H.264 (audio/video)</li>
                <li>In TCP/IP, presentation functions are handled by application layer protocols</li>
                <li>The layer ensures interoperability between different systems by providing common data formats</li>
                <li>Presentation layer issues often appear as garbled text, unreadable files, or failed secure connections</li>
            </ul>
        </div>

        <!-- ==================== SECTION EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Questions</h4>
            
            <ol>
                <li>What are the three primary functions of the Presentation Layer?</li>
                <li>Explain the difference between big-endian and little-endian byte ordering.</li>
                <li>Compare symmetric and asymmetric encryption. Give examples of each.</li>
                <li>What is the difference between lossless and lossy compression? Give examples of each.</li>
                <li>Explain the role of SSL/TLS in the Presentation Layer.</li>
                <li>What is MIME and why is it important for email?</li>
                <li>Describe the ASN.1/BER encoding system and its applications.</li>
                <li>How are presentation functions handled in the TCP/IP model?</li>
                <li>List five common data formats and their characteristics.</li>
                <li>What problems can occur when Presentation Layer functions fail?</li>
            </ol>
        </div>

        <!-- ==================== END OF CHAPTER 2 ==================== -->
        <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 30px; border-radius: 15px; margin: 40px 0; text-align: center; color: white;">
            <h3 style="margin: 0 0 15px 0;">📚 End of Chapter 2</h3>
            <p style="font-size: 18px; margin: 0 0 20px 0;">You have completed Chapter 2: Application, Session and Presentation Layers!</p>
            <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">2.1 Application Layer ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">2.2 Client-Server Model ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">2.3 Application Protocols ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">2.4 Network Services ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">2.5 Session Layer ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">2.6 Presentation Layer ✓</span>
            </div>
            <p style="margin-top: 30px;">Ready for Chapter 3: Transport Layer!</p>
        </div>
    `,
    navigation: {
        next: null,
        prev: "ch2-5",
        nextTitle: null,
        prevTitle: "2.5 Session Layer"
    }
};