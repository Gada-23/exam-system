// ===============================
// Data Communication and Computer Networks - Chapter 1.1
// Data Communication
// ===============================

window.currentSubsectionData = {
    title: "1.1 Data Communication",
    content: `
        <h2>1.1 Data Communication</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand the definition and fundamentals of data communication</li>
                <li>Learn about communication basics and data representation techniques</li>
                <li>Explore digital data transmission formats and impairments</li>
                <li>Understand different modes of data transmission</li>
                <li>Learn about protocols, standards, and switching techniques</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1.1.1: DEFINITION OF DATA COMMUNICATION ==================== -->
        <h3>1.1.1 Definition of Data Communication</h3>
        
        <p><strong>Data communication</strong> is the exchange of data between two devices via some form of transmission medium such as wire cable, fiber optics, or wireless media. It is a subset of telecommunications that focuses on the digital transmission of data.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Definition:</strong> Data communication is the process of transferring digital information from one point to another accurately, efficiently, and reliably.</p>
        </div>
        
        <h4>Characteristics of Effective Data Communication:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Characteristic</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Importance</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Delivery</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Data must be delivered to the correct destination</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Wrong delivery makes communication useless</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Accuracy</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Data must be delivered accurately without corruption</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Errors can lead to misinterpretation</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Timeliness</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Data must be delivered in a timely manner</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Late data is often useless (e.g., real-time video)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Jitter</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Variation in packet arrival time must be minimal</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Critical for multimedia applications</td>
            </tr>
        </table>

        <!-- ==================== SECTION 1.1.2: COMMUNICATION BASICS ==================== -->
        <h3>1.1.2 Communication Basics</h3>
        
        <p>Communication involves the transfer of information from a sender to a receiver. In data communication, this process follows a fundamental model.</p>
        
        <h4>Basic Communication Model:</h4>
        
        <pre>
        ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
        │ Source  │───▶│Transmit-│───▶│Transmis-│───▶│Receiver │
        │ Device  │    │ ter     │    │ sion    │    │ Device  │
        └─────────┘    └─────────┘    │ Medium  │    └─────────┘
                                      └─────────┘</pre>
        
        <h4>Components of Communication:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Component</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Message</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">The information to be communicated</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Text, numbers, images, audio, video</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Sender</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Device that sends the message</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Computer, phone, camera, sensor</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Receiver</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Device that receives the message</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Computer, phone, printer, server</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Transmission Medium</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Physical path for data transmission</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Twisted pair cable, fiber optic, air (wireless)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Protocol</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Set of rules governing communication</td>
                <td style="padding: 10px; border: 1px solid #ddd;">TCP/IP, HTTP, FTP, SMTP</td>
            </tr>
        </table>

        <!-- ==================== SECTION 1.1.3: DATA REPRESENTATION TECHNIQUES ==================== -->
        <h3>1.1.3 Data Representation Techniques</h3>
        
        <p>Data must be represented in a format suitable for transmission. Different types of data require different representation techniques.</p>
        
        <h4>Types of Data:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Data Type</th>
                <th style="padding: 10px;">Representation</th>
                <th style="padding: 10px;">Example</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Text</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Represented by character codes (ASCII, Unicode)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">ASCII: A=65, B=66, etc.</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Numbers</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Binary representation (integers, floating-point)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">42 = 101010 in binary</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Images</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Raster (pixels) or Vector (mathematical formulas)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">JPEG, PNG, GIF, BMP formats</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Audio</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Sampling and quantization of sound waves</td>
                <td style="padding: 10px; border: 1px solid #ddd;">MP3, WAV, AAC formats</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Video</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Sequence of frames with compression</td>
                <td style="padding: 10px; border: 1px solid #ddd;">MP4, AVI, MOV formats</td>
            </tr>
        </table>
        
        <h4>Character Encoding Systems:</h4>
        
        <ul>
            <li><strong>ASCII (American Standard Code for Information Interchange):</strong> 7-bit encoding, represents 128 characters</li>
            <li><strong>Extended ASCII:</strong> 8-bit encoding, represents 256 characters</li>
            <li><strong>Unicode:</strong> 16-bit or 32-bit encoding, supports over 1 million characters, includes all world languages</li>
            <li><strong>UTF-8:</strong> Variable-length encoding (1-4 bytes), backward compatible with ASCII</li>
        </ul>

        <!-- ==================== SECTION 1.1.4: DIGITAL DATA TRANSMISSION FORMATS ==================== -->
        <h3>1.1.4 Digital Data Transmission Formats</h3>
        
        <p>Data can be transmitted in either digital or analog form. Digital transmission uses discrete signals, while analog uses continuous signals.</p>
        
        <h4>Digital-to-Digital Encoding:</h4>
        
        <p>Converting digital data into digital signals for transmission.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Encoding Scheme</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Characteristics</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>NRZ (Non-Return to Zero)</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Positive voltage for 1, negative for 0</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Simple but may have synchronization issues</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Manchester Encoding</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Transition in middle of bit period: low-to-high for 0, high-to-low for 1</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Self-clocking, used in Ethernet</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Differential Manchester</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Transition at beginning for 0, no transition for 1; always transition in middle</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Better noise immunity</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>MLT-3</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Three voltage levels: +V, 0, -V, cycles through states</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Used in Fast Ethernet (100BASE-TX)</td>
            </tr>
        </table>
        
        <h4>Analog-to-Digital Conversion:</h4>
        
        <p>Converting analog signals (like voice) into digital form for transmission.</p>
        
        <ul>
            <li><strong>Pulse Code Modulation (PCM):</strong> Samples analog signal at regular intervals and quantizes the amplitude</li>
            <li><strong>Sampling Rate:</strong> Must be at least twice the highest frequency (Nyquist theorem)</li>
            <li><strong>Quantization:</strong> Assigning discrete values to samples</li>
            <li><strong>Encoding:</strong> Representing quantized values in binary</li>
        </ul>

        <!-- ==================== SECTION 1.1.5: TRANSMISSION IMPAIRMENTS ==================== -->
        <h3>1.1.5 Transmission Impairments</h3>
        
        <p>Signals traveling through transmission media can be degraded by various impairments, affecting communication quality.</p>
        
        <h4>Types of Transmission Impairments:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Impairment</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Impact</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Attenuation</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Loss of signal strength over distance</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Signal becomes too weak to detect</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Distortion</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Change in signal shape due to different frequency components traveling at different speeds</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Signal components arrive at different times</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Noise</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Unwanted signals that interfere with the original signal</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Can corrupt data, cause errors</td>
            </tr>
        </table>
        
        <h4>Types of Noise:</h4>
        
        <ul>
            <li><strong>Thermal Noise:</strong> Random motion of electrons in conductors, always present</li>
            <li><strong>Intermodulation Noise:</strong> Caused by non-linearities in the system, creates sum/difference frequencies</li>
            <li><strong>Crosstalk:</strong> Signal from one wire couples into adjacent wires (like hearing another conversation)</li>
            <li><strong>Impulse Noise:</strong> Sudden spikes (from lightning, power surges), can corrupt multiple bits</li>
        </ul>

        <!-- ==================== SECTION 1.1.6: MODES OF DATA TRANSMISSION ==================== -->
        <h3>1.1.6 Modes of Data Transmission</h3>
        
        <p>Data can flow between devices in different ways depending on the direction of communication.</p>
        
        <h4>Transmission Modes:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Mode</th>
                <th style="padding: 10px;">Direction</th>
                <th style="padding: 10px;">Example</th>
                <th style="padding: 10px;">Diagram</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Simplex</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">One-way only</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Keyboard to computer, TV broadcast</td>
                <td style="padding: 10px; border: 1px solid #ddd;">───▶</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Half-Duplex</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Both directions, but only one at a time</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Walkie-talkie, CB radio</td>
                <td style="padding: 10px; border: 1px solid #ddd;">◀───▶ (one at a time)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Full-Duplex</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Both directions simultaneously</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Telephone, Ethernet (with switching)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">◀───▶ (simultaneous)</td>
            </tr>
        </table>

        <!-- ==================== SECTION 1.1.7: ELEMENTS OF DATA COMMUNICATION ==================== -->
        <h3>1.1.7 Elements of Data Communication</h3>
        
        <p>A complete data communication system consists of five essential elements working together.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 30px 0;">
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; text-align: center;">
                <i class="fas fa-comment" style="font-size: 40px; color: #667eea; margin-bottom: 10px;"></i>
                <h4 style="margin: 10px 0;">Message</h4>
                <p style="font-size: 14px;">The information to be communicated</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; text-align: center;">
                <i class="fas fa-user" style="font-size: 40px; color: #764ba2; margin-bottom: 10px;"></i>
                <h4 style="margin: 10px 0;">Sender</h4>
                <p style="font-size: 14px;">Device that sends the message</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; text-align: center;">
                <i class="fas fa-user-friends" style="font-size: 40px; color: #f093fb; margin-bottom: 10px;"></i>
                <h4 style="margin: 10px 0;">Receiver</h4>
                <p style="font-size: 14px;">Device that receives the message</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; text-align: center;">
                <i class="fas fa-road" style="font-size: 40px; color: #f5576c; margin-bottom: 10px;"></i>
                <h4 style="margin: 10px 0;">Medium</h4>
                <p style="font-size: 14px;">Physical path for transmission</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; text-align: center;">
                <i class="fas fa-code" style="font-size: 40px; color: #4facfe; margin-bottom: 10px;"></i>
                <h4 style="margin: 10px 0;">Protocol</h4>
                <p style="font-size: 14px;">Set of rules governing communication</p>
            </div>
        </div>

        <!-- ==================== SECTION 1.1.8: PROTOCOLS AND STANDARDS ==================== -->
        <h3>1.1.8 Protocols and Standards</h3>
        
        <p><strong>Protocols</strong> are sets of rules that govern data communication, defining how devices communicate. <strong>Standards</strong> are agreed-upon specifications that ensure compatibility.</p>
        
        <h4>Key Elements of a Protocol:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Element</th>
                <th style="padding: 10px;">Description</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Syntax</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Structure or format of the data (e.g., header, data, trailer)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Semantics</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Meaning of each section of bits, interpretation of data</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Timing</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">When data should be sent and how fast (synchronization)</td>
            </tr>
        </table>
        
        <h4>Standard Organizations:</h4>
        
        <ul>
            <li><strong>ISO (International Organization for Standardization):</strong> Develops international standards</li>
            <li><strong>ITU-T (International Telecommunication Union):</strong> Telecommunications standards</li>
            <li><strong>IEEE (Institute of Electrical and Electronics Engineers):</strong> Networking standards (802.3 Ethernet, 802.11 WiFi)</li>
            <li><strong>IETF (Internet Engineering Task Force):</strong> Internet protocols (TCP/IP, HTTP)</li>
            <li><strong>ANSI (American National Standards Institute):</strong> US standards organization</li>
        </ul>

        <!-- ==================== SECTION 1.1.9: CIRCUIT SWITCHING AND PACKET SWITCHING ==================== -->
        <h3>1.1.9 Circuit Switching and Packet Switching</h3>
        
        <p>Two fundamental approaches to switching data in networks: circuit switching and packet switching.</p>
        
        <h4>Circuit Switching:</h4>
        
        <p>Creates a dedicated physical path between sender and receiver for the duration of the communication.</p>
        
        <div class="example-box" style="background: #f0f2f5; padding: 15px; border-radius: 10px; margin: 15px 0;">
            <strong>Example:</strong> Traditional telephone network
        </div>
        
        <h5>Advantages:</h5>
        <ul>
            <li>Guaranteed bandwidth</li>
            <li>Constant delay (no jitter)</li>
            <li>Simple switching (once path is established)</li>
        </ul>
        
        <h5>Disadvantages:</h5>
        <ul>
            <li>Inefficient use of bandwidth (idle during silence)</li>
            <li>Setup time required before communication</li>
            <li>Can't support multiple devices on same line</li>
        </ul>
        
        <h4>Packet Switching:</h4>
        
        <p>Data is divided into packets, each transmitted independently through the network.</p>
        
        <div class="example-box" style="background: #f0f2f5; padding: 15px; border-radius: 10px; margin: 15px 0;">
            <strong>Example:</strong> Internet, Ethernet networks
        </div>
        
        <h5>Advantages:</h5>
        <ul>
            <li>Efficient bandwidth utilization (multiple users share)</li>
            <li>No setup time required</li>
            <li>Can handle variable bit rate traffic</li>
            <li>More robust (packets can take different routes)</li>
        </ul>
        
        <h5>Disadvantages:</h5>
        <ul>
            <li>Variable delay (jitter) due to queuing</li>
            <li>Packet overhead (headers, trailers)</li>
            <li>Potential for packet loss</li>
            <li>More complex switching equipment</li>
        </ul>
        
        <h4>Comparison Table:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Feature</th>
                <th style="padding: 10px;">Circuit Switching</th>
                <th style="padding: 10px;">Packet Switching</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Path setup</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Required</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Not required</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Bandwidth</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Fixed, dedicated</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Shared, on-demand</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Delay</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Constant</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Variable</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Overhead</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Low</td>
                <td style="padding: 10px; border: 1px solid #ddd;">High (packet headers)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Best for</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Real-time voice, constant bit rate</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Data, bursty traffic</td>
            </tr>
        </table>

        <!-- ==================== SECTION SUMMARY ==================== -->
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Section 1.1 Summary</h4>
            <ul>
                <li><strong>Data communication</strong> is the exchange of data between devices via transmission media</li>
                <li>Key characteristics: delivery, accuracy, timeliness, jitter</li>
                <li>Communication requires message, sender, receiver, medium, and protocol</li>
                <li>Data can be text, numbers, images, audio, or video, each with specific representation</li>
                <li>Transmission impairments include attenuation, distortion, and noise</li>
                <li>Three transmission modes: simplex, half-duplex, full-duplex</li>
                <li><strong>Protocols</strong> define syntax, semantics, and timing of communication</li>
                <li><strong>Circuit switching</strong> creates dedicated paths; <strong>packet switching</strong> shares resources</li>
            </ul>
        </div>

        <!-- ==================== SECTION EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Practice Questions</h4>
            
            <ol>
                <li>Define data communication and list its five essential components.</li>
                <li>Explain the four fundamental characteristics of effective data communication.</li>
                <li>Compare and contrast ASCII and Unicode encoding systems.</li>
                <li>What are the three main types of transmission impairments? Give examples.</li>
                <li>Explain the difference between half-duplex and full-duplex transmission with examples.</li>
                <li>What are the key elements of a protocol?</li>
                <li>Compare circuit switching and packet switching in terms of bandwidth utilization and delay.</li>
                <li>List five major standards organizations and their roles.</li>
                <li>Explain Manchester encoding and its advantages.</li>
                <li>What is the Nyquist theorem and why is it important?</li>
            </ol>
        </div>
    `,
    navigation: {
        next: "ch1-2",
        prev: null,
        nextTitle: "1.2 Computer Network",
        prevTitle: null
    }
};