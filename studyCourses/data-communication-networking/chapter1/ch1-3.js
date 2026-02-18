// ===============================
// Data Communication and Computer Networks - Chapter 1.3
// Transmission Media
// ===============================

window.currentSubsectionData = {
    title: "1.3 Transmission Media",
    content: `
        <h2>1.3 Transmission Media</h2>
        
        <div class="objective-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">🎯 Learning Objectives</h4>
            <ul style="margin: 0;">
                <li>Understand what transmission media are and their classification</li>
                <li>Learn about guided media: twisted pair, coaxial cable, and fiber optics</li>
                <li>Explore unguided media: wireless communication technologies</li>
                <li>Compare different transmission media based on characteristics</li>
                <li>Understand applications of each transmission medium</li>
            </ul>
        </div>

        <!-- ==================== SECTION 1.3.1: GUIDED MEDIA ==================== -->
        <h3>1.3.1 Guided Media</h3>
        
        <p><strong>Guided media</strong> (also called wired media) provide a physical path or conduit for signal transmission. The signal is contained within the physical medium.</p>
        
        <h4>1.3.1.1 Twisted Pair Cable</h4>
        
        <p>Twisted pair cable consists of two insulated copper wires twisted together to reduce electromagnetic interference. It is the most common type of transmission medium.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Construction:</strong> Two insulated copper wires twisted together in a helix pattern. Multiple pairs are bundled together in a protective jacket.</p>
        </div>
        
        <h5>Types of Twisted Pair:</h5>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Type</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Speed</th>
                <th style="padding: 10px;">Application</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>UTP (Unshielded Twisted Pair)</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">No additional shielding, relies on twisting for noise reduction</td>
                <td style="padding: 10px; border: 1px solid #ddd;">10 Mbps - 10 Gbps</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Ethernet networks, telephone lines</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>STP (Shielded Twisted Pair)</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Has metallic shielding around pairs for better noise protection</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Same as UTP but better noise immunity</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Industrial environments, high-interference areas</td>
            </tr>
        </table>
        
        <h5>UTP Categories:</h5>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Category</th>
                <th style="padding: 10px;">Max Speed</th>
                <th style="padding: 10px;">Frequency</th>
                <th style="padding: 10px;">Common Use</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Cat 5</td>
                <td style="padding: 10px; border: 1px solid #ddd;">100 Mbps</td>
                <td style="padding: 10px; border: 1px solid #ddd;">100 MHz</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Fast Ethernet (obsolete)</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Cat 5e</td>
                <td style="padding: 10px; border: 1px solid #ddd;">1 Gbps</td>
                <td style="padding: 10px; border: 1px solid #ddd;">100 MHz</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Gigabit Ethernet, home networks</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Cat 6</td>
                <td style="padding: 10px; border: 1px solid #ddd;">10 Gbps (55m)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">250 MHz</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Business networks, data centers</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Cat 6a</td>
                <td style="padding: 10px; border: 1px solid #ddd;">10 Gbps (100m)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">500 MHz</td>
                <td style="padding: 10px; border: 1px solid #ddd;">High-performance networks</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Cat 7</td>
                <td style="padding: 10px; border: 1px solid #ddd;">10 Gbps</td>
                <td style="padding: 10px; border: 1px solid #ddd;">600 MHz</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Data centers, shielded</td>
            </tr>
        </table>
        
        <h5>Advantages of Twisted Pair:</h5>
        <ul>
            <li>Low cost and widely available</li>
            <li>Easy to install and terminate</li>
            <li>Flexible and lightweight</li>
            <li>Supports various network speeds</li>
        </ul>
        
        <h5>Disadvantages:</h5>
        <ul>
            <li>Limited distance (max 100 meters for high speeds)</li>
            <li>Susceptible to electromagnetic interference</li>
            <li>Lower security (can be tapped)</li>
            <li>Limited bandwidth compared to fiber</li>
        </ul>
        
        <h4>1.3.1.2 Coaxial Cable</h4>
        
        <p>Coaxial cable consists of a central copper conductor, insulating layer, metallic shield, and outer jacket. It provides better shielding and higher bandwidth than twisted pair.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Construction:</strong> Center conductor → dielectric insulator → metallic shield → outer jacket. The shield reduces interference and prevents signal leakage.</p>
        </div>
        
        <h5>Types of Coaxial Cable:</h5>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Type</th>
                <th style="padding: 10px;">Impedance</th>
                <th style="padding: 10px;">Application</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>RG-58</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">50 Ω</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Thin Ethernet (10Base2), radio communications</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>RG-8</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">50 Ω</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Thick Ethernet (10Base5)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>RG-59</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">75 Ω</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Cable TV, CCTV</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>RG-6</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">75 Ω</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Satellite TV, broadband internet</td>
            </tr>
        </table>
        
        <h5>Advantages of Coaxial Cable:</h5>
        <ul>
            <li>Better shielding than twisted pair</li>
            <li>Higher bandwidth (up to several GHz)</li>
            <li>Longer distance capability (500m+)</li>
            <li>Lower error rates</li>
        </ul>
        
        <h5>Disadvantages:</h5>
        <ul>
            <li>Thicker and less flexible</li>
            <li>More expensive than twisted pair</li>
            <li>Harder to install and terminate</li>
            <li>Single cable fault can affect multiple devices (in bus topology)</li>
        </ul>
        
        <h4>1.3.1.3 Fiber Optics / Optical Fiber Cable</h4>
        
        <p>Fiber optic cable uses light pulses to transmit data through thin glass or plastic fibers. It offers the highest bandwidth and longest distances of any guided medium.</p>
        
        <div class="highlight-box" style="background: #e8ebff; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p><strong>📌 Construction:</strong> Core (glass/plastic) → cladding (reflects light) → buffer coating → strengthening fibers → outer jacket.</p>
        </div>
        
        <h5>Types of Fiber Optic Cable:</h5>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Type</th>
                <th style="padding: 10px;">Description</th>
                <th style="padding: 10px;">Distance</th>
                <th style="padding: 10px;">Application</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Single-mode Fiber (SMF)</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Narrow core (8-10 μm), single light path, laser source</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Up to 100+ km</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Long-haul telecom, undersea cables</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Multi-mode Fiber (MMF)</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">Wider core (50-62.5 μm), multiple light paths, LED source</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Up to 2 km</td>
                <td style="padding: 10px; border: 1px solid #ddd;">LAN backbones, data centers</td>
            </tr>
        </table>
        
        <h5>Advantages of Fiber Optics:</h5>
        <ul>
            <li><strong>Extremely high bandwidth:</strong> Terabits per second</li>
            <li><strong>Long distances:</strong> Can go 100+ km without regeneration</li>
            <li><strong>Immunity to EMI:</strong> Not affected by electromagnetic interference</li>
            <li><strong>Security:</strong> Very difficult to tap (no signal radiation)</li>
            <li><strong>Lightweight:</strong> Much lighter than copper cables</li>
            <li><strong>No corrosion:</strong> Glass doesn't corrode</li>
        </ul>
        
        <h5>Disadvantages:</h5>
        <ul>
            <li>High cost of cables and equipment</li>
            <li>Difficult to install and splice</li>
            <li>Fragile (needs careful handling)</li>
            <li>Requires specialized skills and tools</li>
            <li>Power needed for repeaters/amplifiers</li>
        </ul>
        
        <h4>Comparison of Guided Media:</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Parameter</th>
                <th style="padding: 10px;">Twisted Pair</th>
                <th style="padding: 10px;">Coaxial</th>
                <th style="padding: 10px;">Fiber Optic</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Bandwidth</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Low to Medium</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Medium</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Very High</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Distance</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Short (100m)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Medium (500m)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Very Long (100+ km)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">EMI Immunity</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Low</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Medium</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Excellent</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Cost</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Low</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Medium</td>
                <td style="padding: 10px; border: 1px solid #ddd;">High</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Installation</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Easy</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Moderate</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Difficult</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Security</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Low</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Medium</td>
                <td style="padding: 10px; border: 1px solid #ddd;">High</td>
            </tr>
        </table>

        <!-- ==================== SECTION 1.3.2: UNGUIDED MEDIA ==================== -->
        <h3>1.3.2 Unguided Media</h3>
        
        <p><strong>Unguided media</strong> (wireless communication) transmit electromagnetic waves without a physical conductor. Signals are broadcast through air, vacuum, or water.</p>
        
        <h4>1.3.2.1 Wireless LAN</h4>
        
        <p>Wireless LAN (WLAN) enables devices to connect to a local network without cables, typically using Wi-Fi technology.</p>
        
        <h5>IEEE 802.11 Standards (Wi-Fi):</h5>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Standard</th>
                <th style="padding: 10px;">Frequency</th>
                <th style="padding: 10px;">Max Speed</th>
                <th style="padding: 10px;">Range</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">802.11a</td>
                <td style="padding: 10px; border: 1px solid #ddd;">5 GHz</td>
                <td style="padding: 10px; border: 1px solid #ddd;">54 Mbps</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Medium</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">802.11b</td>
                <td style="padding: 10px; border: 1px solid #ddd;">2.4 GHz</td>
                <td style="padding: 10px; border: 1px solid #ddd;">11 Mbps</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Good</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">802.11g</td>
                <td style="padding: 10px; border: 1px solid #ddd;">2.4 GHz</td>
                <td style="padding: 10px; border: 1px solid #ddd;">54 Mbps</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Good</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">802.11n</td>
                <td style="padding: 10px; border: 1px solid #ddd;">2.4/5 GHz</td>
                <td style="padding: 10px; border: 1px solid #ddd;">600 Mbps</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Good</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">802.11ac</td>
                <td style="padding: 10px; border: 1px solid #ddd;">5 GHz</td>
                <td style="padding: 10px; border: 1px solid #ddd;">1.3+ Gbps</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Medium</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">802.11ax (Wi-Fi 6)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">2.4/5/6 GHz</td>
                <td style="padding: 10px; border: 1px solid #ddd;">9.6 Gbps</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Good</td>
            </tr>
        </table>
        
        <h4>1.3.2.2 Radio Communication</h4>
        
        <p>Radio waves are used for long-distance communication, broadcasting, and mobile communications.</p>
        
        <h5>Frequency Bands:</h5>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Band</th>
                <th style="padding: 10px;">Frequency</th>
                <th style="padding: 10px;">Propagation</th>
                <th style="padding: 10px;">Applications</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">VLF (Very Low Frequency)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">3-30 kHz</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Ground wave</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Navigation, time signals</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">LF (Low Frequency)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">30-300 kHz</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Ground wave</td>
                <td style="padding: 10px; border: 1px solid #ddd;">AM broadcasting</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">MF (Medium Frequency)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">300 kHz - 3 MHz</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Ground/Sky wave</td>
                <td style="padding: 10px; border: 1px solid #ddd;">AM radio</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">HF (High Frequency)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">3-30 MHz</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Sky wave</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Shortwave radio</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">VHF (Very High Frequency)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">30-300 MHz</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Line of sight</td>
                <td style="padding: 10px; border: 1px solid #ddd;">FM radio, TV</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">UHF (Ultra High Frequency)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">300 MHz - 3 GHz</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Line of sight</td>
                <td style="padding: 10px; border: 1px solid #ddd;">TV, cellular, Wi-Fi</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">SHF (Super High Frequency)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">3-30 GHz</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Line of sight</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Satellite, radar</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">EHF (Extremely High Freq)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">30-300 GHz</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Line of sight</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Experimental, 5G</td>
            </tr>
        </table>
        
        <h4>1.3.2.3 Microwave Communication</h4>
        
        <p>Microwaves are high-frequency radio waves (1-300 GHz) used for point-to-point communication.</p>
        
        <h5>Characteristics:</h5>
        <ul>
            <li><strong>Line-of-sight transmission:</strong> Requires unobstructed path between antennas</li>
            <li><strong>High bandwidth:</strong> Can carry large amounts of data</li>
            <li><strong>Long distance:</strong> Can span 20-30 miles between towers</li>
            <li><strong>Susceptible to weather:</strong> Rain fade can affect signal</li>
        </ul>
        
        <h5>Applications:</h5>
        <ul>
            <li>Long-distance telephone communication</li>
            <li>Television broadcasting</li>
            <li>Satellite communication</li>
            <li>Wireless backhaul for cellular networks</li>
        </ul>
        
        <h4>1.3.2.4 Infrared Communication</h4>
        
        <p>Infrared waves (300 GHz - 400 THz) are used for short-range communication.</p>
        
        <h5>Characteristics:</h5>
        <ul>
            <li><strong>Short range:</strong> Typically few meters</li>
            <li><strong>Line of sight required:</strong> Cannot penetrate walls</li>
            <li><strong>No interference:</strong> Doesn't interfere with radio frequencies</li>
            <li><strong>Low data rate:</strong> Usually up to 4 Mbps</li>
        </ul>
        
        <h5>Applications:</h5>
        <ul>
            <li>Remote controls (TV, AC, etc.)</li>
            <li>Short-range data transfer (old IrDA)</li>
            <li>Wireless mice and keyboards</li>
            <li>Night vision devices</li>
        </ul>
        
        <h4>1.3.2.5 Wi-Fi</h4>
        
        <p>Wi-Fi (Wireless Fidelity) is a family of wireless networking technologies based on IEEE 802.11 standards.</p>
        
        <h5>Wi-Fi Generations:</h5>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Generation</th>
                <th style="padding: 10px;">Standard</th>
                <th style="padding: 10px;">Frequency</th>
                <th style="padding: 10px;">Max Speed</th>
                <th style="padding: 10px;">Year</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Wi-Fi 1</td>
                <td style="padding: 10px; border: 1px solid #ddd;">802.11b</td>
                <td style="padding: 10px; border: 1px solid #ddd;">2.4 GHz</td>
                <td style="padding: 10px; border: 1px solid #ddd;">11 Mbps</td>
                <td style="padding: 10px; border: 1px solid #ddd;">1999</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Wi-Fi 2</td>
                <td style="padding: 10px; border: 1px solid #ddd;">802.11a</td>
                <td style="padding: 10px; border: 1px solid #ddd;">5 GHz</td>
                <td style="padding: 10px; border: 1px solid #ddd;">54 Mbps</td>
                <td style="padding: 10px; border: 1px solid #ddd;">1999</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Wi-Fi 3</td>
                <td style="padding: 10px; border: 1px solid #ddd;">802.11g</td>
                <td style="padding: 10px; border: 1px solid #ddd;">2.4 GHz</td>
                <td style="padding: 10px; border: 1px solid #ddd;">54 Mbps</td>
                <td style="padding: 10px; border: 1px solid #ddd;">2003</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Wi-Fi 4</td>
                <td style="padding: 10px; border: 1px solid #ddd;">802.11n</td>
                <td style="padding: 10px; border: 1px solid #ddd;">2.4/5 GHz</td>
                <td style="padding: 10px; border: 1px solid #ddd;">600 Mbps</td>
                <td style="padding: 10px; border: 1px solid #ddd;">2009</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Wi-Fi 5</td>
                <td style="padding: 10px; border: 1px solid #ddd;">802.11ac</td>
                <td style="padding: 10px; border: 1px solid #ddd;">5 GHz</td>
                <td style="padding: 10px; border: 1px solid #ddd;">3.5 Gbps</td>
                <td style="padding: 10px; border: 1px solid #ddd;">2014</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Wi-Fi 6</td>
                <td style="padding: 10px; border: 1px solid #ddd;">802.11ax</td>
                <td style="padding: 10px; border: 1px solid #ddd;">2.4/5/6 GHz</td>
                <td style="padding: 10px; border: 1px solid #ddd;">9.6 Gbps</td>
                <td style="padding: 10px; border: 1px solid #ddd;">2019</td>
            </tr>
        </table>
        
        <h4>1.3.2.6 Bluetooth Technology</h4>
        
        <p>Bluetooth is a short-range wireless technology for connecting devices over short distances (typically up to 10 meters).</p>
        
        <h5>Bluetooth Versions:</h5>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Version</th>
                <th style="padding: 10px;">Speed</th>
                <th style="padding: 10px;">Range</th>
                <th style="padding: 10px;">Features</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Bluetooth 2.0 + EDR</td>
                <td style="padding: 10px; border: 1px solid #ddd;">2.1 Mbps</td>
                <td style="padding: 10px; border: 1px solid #ddd;">10-30 m</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Enhanced Data Rate</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Bluetooth 3.0 + HS</td>
                <td style="padding: 10px; border: 1px solid #ddd;">24 Mbps</td>
                <td style="padding: 10px; border: 1px solid #ddd;">10-30 m</td>
                <td style="padding: 10px; border: 1px solid #ddd;">High Speed (uses Wi-Fi)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Bluetooth 4.0 LE</td>
                <td style="padding: 10px; border: 1px solid #ddd;">1 Mbps</td>
                <td style="padding: 10px; border: 1px solid #ddd;">50-100 m</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Low Energy, IoT</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Bluetooth 5.0</td>
                <td style="padding: 10px; border: 1px solid #ddd;">2 Mbps</td>
                <td style="padding: 10px; border: 1px solid #ddd;">100-200 m</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Improved speed and range</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Bluetooth 5.2</td>
                <td style="padding: 10px; border: 1px solid #ddd;">2 Mbps</td>
                <td style="padding: 10px; border: 1px solid #ddd;">200+ m</td>
                <td style="padding: 10px; border: 1px solid #ddd;">LE Audio, better efficiency</td>
            </tr>
        </table>
        
        <h5>Bluetooth Classes:</h5>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Class</th>
                <th style="padding: 10px;">Max Power</th>
                <th style="padding: 10px;">Range</th>
                <th style="padding: 10px;">Common Use</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Class 1</td>
                <td style="padding: 10px; border: 1px solid #ddd;">100 mW</td>
                <td style="padding: 10px; border: 1px solid #ddd;">100 m</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Industrial, long-range</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Class 2</td>
                <td style="padding: 10px; border: 1px solid #ddd;">2.5 mW</td>
                <td style="padding: 10px; border: 1px solid #ddd;">10 m</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Most common (phones, headphones)</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Class 3</td>
                <td style="padding: 10px; border: 1px solid #ddd;">1 mW</td>
                <td style="padding: 10px; border: 1px solid #ddd;">1 m</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Very short range</td>
            </tr>
        </table>
        
        <h4>1.3.2.7 Satellite Communication</h4>
        
        <p>Satellites act as relay stations in space, enabling communication over very long distances.</p>
        
        <h5>Satellite Orbits:</h5>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Orbit Type</th>
                <th style="padding: 10px;">Altitude</th>
                <th style="padding: 10px;">Characteristics</th>
                <th style="padding: 10px;">Applications</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>LEO (Low Earth Orbit)</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">500-1500 km</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Low latency, multiple satellites needed for coverage</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Starlink, Iridium, Earth observation</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>MEO (Medium Earth Orbit)</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">5000-12000 km</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Medium latency</td>
                <td style="padding: 10px; border: 1px solid #ddd;">GPS, navigation satellites</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>GEO (Geostationary)</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">35,786 km</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Fixed position above equator, high latency (250ms)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">TV broadcast, weather satellites</td>
            </tr>
        </table>
        
        <h5>Advantages of Satellite Communication:</h5>
        <ul>
            <li>Very wide coverage area</li>
            <li>Can reach remote locations</li>
            <li>Broadcast capability (one-to-many)</li>
            <li>Unaffected by terrestrial infrastructure</li>
        </ul>
        
        <h5>Disadvantages:</h5>
        <ul>
            <li>High latency (especially GEO)</li>
            <li>Expensive to launch and maintain</li>
            <li>Susceptible to space weather</li>
            <li>Limited bandwidth</li>
            <li>Signal attenuation (rain fade)</li>
        </ul>

        <!-- ==================== SECTION 1.3.3: COMPARISON OF TRANSMISSION MEDIA ==================== -->
        <h3>1.3.3 Comparison of Transmission Media</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #667eea; color: white;">
                <th style="padding: 10px;">Medium</th>
                <th style="padding: 10px;">Bandwidth</th>
                <th style="padding: 10px;">Distance</th>
                <th style="padding: 10px;">Cost</th>
                <th style="padding: 10px;">Installation</th>
                <th style="padding: 10px;">Security</th>
                <th style="padding: 10px;">Mobility</th>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Twisted Pair</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Medium</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Short</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Low</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Easy</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Low</td>
                <td style="padding: 10px; border: 1px solid #ddd;">No</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Coaxial</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Medium-High</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Medium</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Medium</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Medium</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Medium</td>
                <td style="padding: 10px; border: 1px solid #ddd;">No</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Fiber Optic</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Very High</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Very Long</td>
                <td style="padding: 10px; border: 1px solid #ddd;">High</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Difficult</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Very High</td>
                <td style="padding: 10px; border: 1px solid #ddd;">No</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Wireless (Wi-Fi)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Medium-High</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Short-Medium</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Medium</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Easy</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Low-Medium</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Yes</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd;">Bluetooth</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Low-Medium</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Very Short</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Low</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Very Easy</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Medium</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Yes</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Satellite</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Medium</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Global</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Very High</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Complex</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Medium</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Yes</td>
            </tr>
        </table>

        <!-- ==================== SECTION SUMMARY ==================== -->
        <div class="summary-box" style="background: #f0f2f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📌 Chapter 1 Summary</h4>
            <ul>
                <li><strong>Guided media</strong> provide a physical path: twisted pair, coaxial, fiber optic</li>
                <li><strong>Twisted pair</strong> is common, cheap, but limited in distance and bandwidth</li>
                <li><strong>Coaxial cable</strong> offers better shielding and bandwidth than twisted pair</li>
                <li><strong>Fiber optic</strong> provides highest bandwidth, longest distance, best security</li>
                <li><strong>Unguided media</strong> transmit through air: radio, microwave, infrared, satellite</li>
                <li><strong>Wi-Fi (802.11)</strong> enables wireless LAN connectivity</li>
                <li><strong>Bluetooth</strong> is for short-range device connections</li>
                <li><strong>Satellite communication</strong> provides global coverage with higher latency</li>
                <li>Choice of medium depends on bandwidth needs, distance, cost, and mobility requirements</li>
            </ul>
        </div>

        <!-- ==================== CHAPTER EXERCISES ==================== -->
        <div class="exercise-box" style="background: #e8ebff; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📝 Chapter 1 Practice Questions</h4>
            
            <ol>
                <li>Compare UTP, STP, and fiber optic cable in terms of cost, bandwidth, and security.</li>
                <li>Explain the differences between single-mode and multi-mode fiber optics.</li>
                <li>List the categories of UTP cable and their maximum speeds.</li>
                <li>What are the advantages and disadvantages of wireless communication?</li>
                <li>Compare the different Wi-Fi standards (802.11a/b/g/n/ac/ax).</li>
                <li>Explain Bluetooth classes and their applications.</li>
                <li>Describe the three main satellite orbits and their characteristics.</li>
                <li>What factors should be considered when choosing a transmission medium for a network?</li>
                <li>Explain why fiber optic is preferred for long-distance, high-bandwidth applications.</li>
                <li>Compare the frequency bands used in radio communication and their typical applications.</li>
            </ol>
        </div>

        <!-- ==================== END OF CHAPTER 1 ==================== -->
        <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 30px; border-radius: 15px; margin: 40px 0; text-align: center; color: white;">
            <h3 style="margin: 0 0 15px 0;">📚 End of Chapter 1</h3>
            <p style="font-size: 18px; margin: 0 0 20px 0;">You have completed Chapter 1: Data Communication and Computer Networking Basics!</p>
            <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">1.1 Data Communication ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">1.2 Computer Network ✓</span>
                <span style="background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 30px;">1.3 Transmission Media ✓</span>
            </div>
            <p style="margin-top: 30px;">Ready for Chapter 2: Network Models!</p>
        </div>
    `,
    navigation: {
        next: null,
        prev: "ch1-2",
        nextTitle: null,
        prevTitle: "1.2 Computer Network"
    }
};