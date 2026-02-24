// ===============================
// FOCUS AREA: OPERATING SYSTEM - CHAPTER 5
// File Systems and Mass Storage
// Based on Ministry of Education Blueprint
// ===============================

window.focusAreaOSChapter5 = {
    title: "Chapter 5: File Systems and Mass Storage",
    
    // Blueprint alignment: 1 question (Understand)
    blueprint: {
        totalQuestions: 1,
        cognitiveLevels: {
            understand: 1
        },
        topics: [
            "File system concepts",
            "File allocation methods",
            "Directory structures",
            "Disk scheduling",
            "Mass storage management"
        ]
    },

    learningObjectives: [
        "Understand file system concepts and structures",
        "Explain different file allocation methods",
        "Describe directory structures",
        "Understand disk scheduling algorithms",
        "Explain mass storage management techniques"
    ],

    sections: [
        {
            title: "5.1 File System Concepts",
            content: `
                <h4>What is a File?</h4>
                <p>A file is a named collection of related information stored on secondary storage. It is the smallest unit of logical storage that users can manipulate.</p>
                
                <h4>File Attributes</h4>
                <ul>
                    <li><strong>Name:</strong> Symbolic file name (human-readable)</li>
                    <li><strong>Identifier:</strong> Unique tag (number) within file system</li>
                    <li><strong>Type:</strong> Information about the file type</li>
                    <li><strong>Location:</strong> Pointer to file location on disk</li>
                    <li><strong>Size:</strong> Current file size</li>
                    <li><strong>Protection:</strong> Access control information</li>
                    <li><strong>Time, date, user identification:</strong> Creation, last modification, last access</li>
                </ul>
                
                <h4>File Operations</h4>
                <ul>
                    <li><strong>Create:</strong> Allocate space, create directory entry</li>
                    <li><strong>Open:</strong> Prepare file for access</li>
                    <li><strong>Read:</strong> Read data from file</li>
                    <li><strong>Write:</strong> Write data to file</li>
                    <li><strong>Seek:</strong> Reposition file pointer</li>
                    <li><strong>Delete:</strong> Remove file, free space</li>
                    <li><strong>Close:</strong> Finish access, flush buffers</li>
                </ul>
                
                <h4>File Structure</h4>
                <ul>
                    <li><strong>Byte sequence:</strong> Unstructured sequence of bytes (Unix)</li>
                    <li><strong>Record sequence:</strong> Collection of fixed/variable-length records</li>
                    <li><strong>Tree structure:</strong> Tree of records (hierarchical)</li>
                </ul>
                
                <h4>A Unix utility which used for checking and repairing file system inconsistencies.</h4>
                <p><strong>fsck</strong> (file system check) is the Unix utility for checking and repairing file system inconsistencies.</p>
            `,
            keyPoints: [
                "File = named collection of related information",
                "File attributes: name, identifier, type, location, size, protection, timestamps",
                "File operations: create, open, read, write, seek, delete, close",
                "fsck = Unix file system check utility"
            ]
        },

        {
            title: "5.2 Directory Structures",
            content: `
                <h4>What is a Directory?</h4>
                <p>A directory is a container for files and other directories. It provides a way to organize files in a hierarchical structure.</p>
                
                <h4>Directory Operations</h4>
                <ul>
                    <li><strong>Search:</strong> Find a file in the directory</li>
                    <li><strong>Create file:</strong> Add a new file to directory</li>
                    <li><strong>Delete file:</strong> Remove a file from directory</li>
                    <li><strong>List directory:</strong> List files in directory</li>
                    <li><strong>Rename file:</strong> Change file name</li>
                    <li><strong>Traverse:</strong> Navigate through directory tree</li>
                </ul>
                
                <h4>Directory Structures</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Structure</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Advantages</th>
                        <th style="padding:10px; border:1px solid #ddd;">Disadvantages</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Single-Level</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">All files in one directory</td>
                        <td style="padding:8px; border:1px solid #ddd;">Simple</td>
                        <td style="padding:8px; border:1px solid #ddd;">Name collisions, no organization</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Two-Level</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Separate directory per user</td>
                        <td style="padding:8px; border:1px solid #ddd;">No name collisions between users</td>
                        <td style="padding:8px; border:1px solid #ddd;">Users can't share/subdivide</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Tree-Structured</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Hierarchical directories</td>
                        <td style="padding:8px; border:1px solid #ddd;">Natural organization, powerful</td>
                        <td style="padding:8px; border:1px solid #ddd;">Path names can be long</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Acyclic Graph</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Tree with shared subdirectories</td>
                        <td style="padding:8px; border:1px solid #ddd;">Allows sharing</td>
                        <td style="padding:8px; border:1px solid #ddd;">Complex deletion, garbage collection</td>
                    </tr>
                </table>
                
                <h4>Path Names</h4>
                <ul>
                    <li><strong>Absolute path:</strong> Path from root directory (e.g., /home/user/file.txt)</li>
                    <li><strong>Relative path:</strong> Path from current working directory (e.g., ../file.txt)</li>
                </ul>
            `,
            keyPoints: [
                "Directory organizes files hierarchically",
                "Directory structures: single-level, two-level, tree, acyclic graph",
                "Absolute path = from root, relative path = from current",
                "Tree-structured is most common (Unix, Windows)"
            ]
        },

        {
            title: "5.3 File Allocation Methods",
            content: `
                <h4>How are files stored on disk?</h4>
                <p>The operating system must decide how to allocate disk space to files. Three main methods are used:</p>
                
                <h4>1. Contiguous Allocation</h4>
                <p>Each file occupies a set of contiguous blocks on disk.</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Aspect</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Advantages</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Simple, fast sequential/random access</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Disadvantages</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">External fragmentation, need to know file size in advance</td>
                    </tr>
                </table>
                
                <h4>2. Linked Allocation</h4>
                <p>Each file is a linked list of disk blocks. Each block contains a pointer to the next block.</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Aspect</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Advantages</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">No external fragmentation, can grow dynamically</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Disadvantages</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Slow random access (must follow links), space for pointers</td>
                    </tr>
                </table>
                
                <h4>3. Indexed Allocation</h4>
                <p>Each file has an index block containing pointers to all its data blocks.</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Aspect</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Advantages</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Fast random access, no external fragmentation</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Disadvantages</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Index block overhead, may need multiple index levels for large files</td>
                    </tr>
                </table>
                
                <h4>Comparison</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Feature</th>
                        <th style="padding:10px; border:1px solid #ddd;">Contiguous</th>
                        <th style="padding:10px; border:1px solid #ddd;">Linked</th>
                        <th style="padding:10px; border:1px solid #ddd;">Indexed</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">External fragmentation</td>
                        <td style="padding:8px; border:1px solid #ddd;">Yes</td>
                        <td style="padding:8px; border:1px solid #ddd;">No</td>
                        <td style="padding:8px; border:1px solid #ddd;">No</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Sequential access</td>
                        <td style="padding:8px; border:1px solid #ddd;">Fast</td>
                        <td style="padding:8px; border:1px solid #ddd;">Medium</td>
                        <td style="padding:8px; border:1px solid #ddd;">Fast</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Random access</td>
                        <td style="padding:8px; border:1px solid #ddd;">Fast</td>
                        <td style="padding:8px; border:1px solid #ddd;">Slow</td>
                        <td style="padding:8px; border:1px solid #ddd;">Fast</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Dynamic growth</td>
                        <td style="padding:8px; border:1px solid #ddd;">Hard</td>
                        <td style="padding:8px; border:1px solid #ddd;">Easy</td>
                        <td style="padding:8px; border:1px solid #ddd;">Medium</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Contiguous: fast access but fragmentation",
                "Linked: no fragmentation but slow random access",
                "Indexed: fast random access, overhead for index block",
                "Choice depends on access patterns"
            ]
        },

        {
            title: "5.4 Free Space Management",
            content: `
                <h4>Managing Free Disk Space</h4>
                <p>The operating system must keep track of free blocks on disk to allocate new files or extend existing ones.</p>
                
                <h4>Free Space Management Techniques</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Technique</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Advantages</th>
                        <th style="padding:10px; border:1px solid #ddd;">Disadvantages</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Bit Vector</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Each block represented by a bit (1=free, 0=allocated)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Simple, efficient to find free blocks</td>
                        <td style="padding:8px; border:1px solid #ddd;">Requires whole bitmap in memory for large disks</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Linked List</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Free blocks linked together</td>
                        <td style="padding:8px; border:1px solid #ddd;">Little memory overhead</td>
                        <td style="padding:8px; border:1px solid #ddd;">Not efficient for finding contiguous space</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Grouping</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">First free block contains addresses of many others</td>
                        <td style="padding:8px; border:1px solid #ddd;">Efficient, used in Unix</td>
                        <td style="padding:8px; border:1px solid #ddd;">More complex</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Counting</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Keep address of first free block and count of contiguous blocks</td>
                        <td style="padding:8px; border:1px solid #ddd;">Efficient for contiguous allocation</td>
                        <td style="padding:8px; border:1px solid #ddd;">More complex</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "Free space management tracks available disk blocks",
                "Bit vector: simple but memory intensive",
                "Linked list: low overhead but slow",
                "Grouping: efficient, used in Unix",
                "Counting: good for contiguous allocation"
            ]
        },

        {
            title: "5.5 Disk Scheduling",
            content: `
                <h4>Why Disk Scheduling?</h4>
                <p>Disk scheduling algorithms are used to optimize the order of I/O requests to minimize seek time (time to move the disk arm to the desired track).</p>
                
                <h4>Disk Scheduling Algorithms</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Algorithm</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Advantages</th>
                        <th style="padding:10px; border:1px solid #ddd;">Disadvantages</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>FCFS (First-Come, First-Served)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Serve requests in order of arrival</td>
                        <td style="padding:8px; border:1px solid #ddd;">Simple, fair</td>
                        <td style="padding:8px; border:1px solid #ddd;">Can cause long seek times</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>SSTF (Shortest Seek Time First)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Serve request with shortest seek from current position</td>
                        <td style="padding:8px; border:1px solid #ddd;">Better performance than FCFS</td>
                        <td style="padding:8px; border:1px solid #ddd;">May cause starvation</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>SCAN (Elevator Algorithm)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Arm moves in one direction, serving requests, then reverses</td>
                        <td style="padding:8px; border:1px solid #ddd;">No starvation, good throughput</td>
                        <td style="padding:8px; border:1px solid #ddd;">Requests at ends may wait longer</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>C-SCAN (Circular SCAN)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">SCAN but when reaching end, arm jumps to beginning without serving</td>
                        <td style="padding:8px; border:1px solid #ddd;">More uniform wait time</td>
                        <td style="padding:8px; border:1px solid #ddd;">Extra seek to beginning</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>LOOK</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">SCAN but only goes as far as last request</td>
                        <td style="padding:8px; border:1px solid #ddd;">Better than SCAN</td>
                        <td style="padding:8px; border:1px solid #ddd;">Slightly more complex</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>C-LOOK</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">C-SCAN with LOOK optimization</td>
                        <td style="padding:8px; border:1px solid #ddd;">Best performance</td>
                        <td style="padding:8px; border:1px solid #ddd;">Most complex</td>
                    </tr>
                </table>
                
                <h4>Example</h4>
                <p>Requests: 98, 183, 37, 122, 14, 124, 65, 67 starting from track 53</p>
                
                <p><strong>FCFS:</strong> 53 → 98 → 183 → 37 → 122 → 14 → 124 → 65 → 67 (total seek = 640)</p>
                <p><strong>SSTF:</strong> 53 → 65 → 67 → 37 → 14 → 98 → 122 → 124 → 183 (total seek = 236)</p>
                <p><strong>SCAN:</strong> 53 → 37 → 14 → 0 → 65 → 67 → 98 → 122 → 124 → 183 (total seek = 208)</p>
                <p><strong>C-SCAN:</strong> 53 → 65 → 67 → 98 → 122 → 124 → 183 → 199 → 0 → 14 → 37 (total seek = 382)</p>
                <p><strong>LOOK:</strong> 53 → 65 → 67 → 98 → 122 → 124 → 183 → 37 → 14 (total seek = 322)</p>
                <p><strong>C-LOOK:</strong> 53 → 65 → 67 → 98 → 122 → 124 → 183 → 14 → 37 (total seek = 299)</p>
            `,
            keyPoints: [
                "Disk scheduling minimizes seek time",
                "FCFS: simple but inefficient",
                "SSTF: good but may starve",
                "SCAN/C-SCAN: no starvation",
                "LOOK/C-LOOK: optimized versions"
            ]
        },

        {
            title: "5.6 Disk Management",
            content: `
                <h4>Disk Formatting</h4>
                <p>Before a disk can be used, it must be formatted.</p>
                
                <h4>Low-Level Formatting (Physical Formatting)</h4>
                <ul>
                    <li>Divides disk into sectors that the disk controller can read and write</li>
                    <li>Each sector has header, data area, and trailer (ECC)</li>
                    <li>Usually done at factory</li>
                </ul>
                
                <h4>Partitioning</h4>
                <ul>
                    <li>Divides disk into one or more logical partitions</li>
                    <li>Each partition treated as separate disk</li>
                    <li>Master Boot Record (MBR) or GPT stores partition table</li>
                </ul>
                
                <h4>Logical Formatting (Making a File System)</h4>
                <ul>
                    <li>Creates file system data structures (superblock, inodes, free space list)</li>
                    <li>Initializes root directory</li>
                    <li>Makes the partition ready for file storage</li>
                </ul>
                
                <h4>Boot Block</h4>
                <ul>
                    <li>Small program that loads operating system</li>
                    <li>Stored in first sector of bootable disk</li>
                    <li>MBR contains boot code and partition table</li>
                </ul>
                
                <h4>Bad Block Management</h4>
                <ul>
                    <li>Sectors can become damaged (bad blocks)</li>
                    <li>Controller maintains list of bad blocks</li>
                    <li>Sector sparing: replace bad block with spare</li>
                    <li>Sector slipping: shift blocks to avoid bad sector</li>
                </ul>
            `,
            keyPoints: [
                "Low-level formatting: sector structure",
                "Partitioning: divide disk into logical units",
                "Logical formatting: create file system",
                "Boot block: loads OS",
                "Bad block management: handle damaged sectors"
            ]
        },

        {
            title: "5.7 File System Implementation",
            content: `
                <h4>File System Layers</h4>
                
                <div style="background-color:#e8f0f5; padding:20px; border-radius:8px; margin:20px 0;">
                    <p style="font-size:18px; font-weight:bold; color:#2772a0; text-align:center;">FILE SYSTEM LAYERS</p>
                    <pre style="text-align:center;">
Application Programs
        ↓
Logical File System
        ↓
File-Organization Module
        ↓
Basic File System
        ↓
I/O Control
        ↓
Device Drivers
                    </pre>
                </div>
                
                <h4>Unix File System (UFS)</h4>
                <p>Unix file system uses inodes to store file metadata (except name). Directory entries map file names to inodes.</p>
                
                <ul>
                    <li><strong>Superblock:</strong> Contains file system information (size, free blocks, free inodes)</li>
                    <li><strong>Inode:</strong> Contains file metadata (owner, permissions, timestamps, pointers to data blocks)</li>
                    <li><strong>Data blocks:</strong> Store actual file data</li>
                    <li><strong>Directory:</strong> Contains list of (file name, inode number) pairs</li>
                </ul>
                
                <h4>Virtual File System (VFS)</h4>
                <p>VFS provides an object-oriented interface for file systems, allowing multiple different file system types to coexist.</p>
                
                <h4>File System Mounting</h4>
                <p>Before a file system can be used, it must be mounted to a mount point (directory) in the existing file system tree.</p>
            `,
            keyPoints: [
                "File system has multiple layers",
                "Unix uses inodes for metadata",
                "Superblock contains file system info",
                "VFS supports multiple file system types",
                "Mounting attaches file system to directory tree"
            ]
        },

        {
            title: "5.8 Mass Storage Structure",
            content: `
                <h4>Hard Disk Drives (HDD)</h4>
                <ul>
                    <li><strong>Platters:</strong> Circular disks coated with magnetic material</li>
                    <li><strong>Spindle:</strong> Rotates the platters (5400-15000 RPM)</li>
                    <li><strong>Read/write head:</strong> Reads and writes data</li>
                    <li><strong>Actuator arm:</strong> Moves heads across platters</li>
                    <li><strong>Cylinder:</strong> Set of tracks at same position across platters</li>
                    <li><strong>Track:</strong> Concentric ring on a platter</li>
                    <li><strong>Sector:</strong> Smallest unit of transfer (typically 512 bytes or 4KB)</li>
                </ul>
                
                <h4>Solid State Drives (SSD)</h4>
                <ul>
                    <li>Use flash memory, no moving parts</li>
                    <li>Faster than HDDs</li>
                    <li>Limited number of write cycles</li>
                    <li>Need wear leveling</li>
                </ul>
                
                <h4>RAID (Redundant Array of Independent Disks)</h4>
                <p>RAID uses multiple disks to improve performance and/or reliability.</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">RAID Level</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>RAID 0</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Striping, improved performance, no redundancy</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>RAID 1</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Mirroring, redundancy, twice the writes</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>RAID 5</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Striping with parity, good performance and redundancy</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>RAID 10</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Mirrored stripes (RAID 1+0), best performance and redundancy</td>
                    </tr>
                </table>
            `,
            keyPoints: [
                "HDD: mechanical, moving parts, sectors, tracks, cylinders",
                "SSD: flash memory, faster, limited writes",
                "RAID combines disks for performance/reliability",
                "RAID 0: striping (performance)",
                "RAID 1: mirroring (redundancy)",
                "RAID 5: striping with parity",
                "RAID 10: mirrored stripes (best)"
            ]
        }
    ],

    summary: `
        <h3>Chapter 5 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>File:</strong> Named collection of related information</li>
            <li><strong>Directory:</strong> Organizes files hierarchically (tree structure common)</li>
            <li><strong>Allocation methods:</strong> Contiguous (fast), Linked (no fragmentation), Indexed (fast random access)</li>
            <li><strong>Free space:</strong> Bit vector, linked list, grouping, counting</li>
            <li><strong>Disk scheduling:</strong> FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK</li>
            <li><strong>fsck:</strong> Unix utility for checking and repairing file system inconsistencies</li>
            <li><strong>Inodes:</strong> Store file metadata in Unix</li>
            <li><strong>RAID:</strong> Multiple disks for performance/reliability</li>
        </ul>
    `,

    reviewQuestions: [
        {
            question: "What are the three main file allocation methods? Compare them.",
            answer: "Contiguous (fast access but fragmentation), Linked (no fragmentation but slow random access), Indexed (fast random access but index overhead)."
        },
        {
            question: "What is the purpose of disk scheduling?",
            answer: "To optimize the order of I/O requests to minimize seek time and improve performance."
        },
        {
            question: "What is fsck and what is it used for?",
            answer: "fsck (file system check) is a Unix utility for checking and repairing file system inconsistencies."
        },
        {
            question: "Compare SCAN and C-SCAN disk scheduling algorithms.",
            answer: "SCAN moves back and forth across disk serving requests. C-SCAN moves in one direction only, then jumps back, providing more uniform wait times."
        },
        {
            question: "What is an inode in Unix file systems?",
            answer: "An inode is a data structure that stores metadata about a file (except its name)."
        },
        {
            question: "What are the different RAID levels?",
            answer: "RAID 0 (striping), RAID 1 (mirroring), RAID 5 (striping with parity), RAID 10 (mirrored stripes)."
        }
    ],

    quickTips: [
        "Contiguous = fast but fragments",
        "Linked = no fragmentation but slow random access",
        "Indexed = good random access, overhead",
        "SCAN = elevator algorithm",
        "C-SCAN = more uniform wait times",
        "fsck = file system check (Unix)",
        "Inode stores file metadata (not name)"
    ],

    commonMistakes: [
        "❌ Thinking contiguous allocation has no fragmentation - it has external fragmentation",
        "❌ Confusing SCAN and C-SCAN - C-SCAN moves only one direction",
        "❌ Forgetting that fsck is for checking file systems",
        "❌ Believing inodes store file names - directories map names to inodes",
        "❌ Mixing up RAID levels"
    ],

    examPreparation: `
        <h3>Blueprint Alignment for Chapter 5:</h3>
        <p>According to the Ministry of Education blueprint, this chapter will have <strong>1 question</strong> at the <strong>Understand</strong> level.</p>
        
        <h4>Focus on These Topics:</h4>
        <ol>
            <li><strong>File allocation methods:</strong> Contiguous, linked, indexed</li>
            <li><strong>Disk scheduling:</strong> FCFS, SSTF, SCAN, C-SCAN</li>
            <li><strong>fsck:</strong> Unix file system check utility</li>
            <li><strong>File system structures:</strong> Directories, inodes</li>
        </ol>
        
        <h4>What "Understand" Means:</h4>
        <p>You need to be able to explain file system concepts, allocation methods, and disk scheduling algorithms.</p>
        
        <h4>Practice Questions:</h4>
        <ul>
            <li>Explain the three file allocation methods and their trade-offs.</li>
            <li>How does SCAN disk scheduling work? Compare with C-SCAN.</li>
            <li>What is fsck and why is it important?</li>
            <li>Describe how Unix file systems use inodes.</li>
        </ul>
    `
};