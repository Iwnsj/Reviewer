// ============================================
//  COMPUTER NETWORKS QUIZ — 50 QUESTIONS DATA
// ============================================

const QUESTIONS = [
    {
        category: 'Fundamentals',
        type: 'concept',
        difficulty: 'easy',
        question: 'What is the minimum number of computers required to form a network?',
        options: ['1', '2', '3', '5'],
        answer: 1,
        explanation: 'At least two computers are needed to connect and form a network. If there are not at least two computers, there is no need for a network.'
    },
    {
        category: 'Fundamentals',
        type: 'concept',
        difficulty: 'easy',
        question: 'Which of the following is NOT a benefit of computer networking?',
        options: ['Resource Sharing', 'Improved Security', 'Centralized Administration', 'Increased Hardware Cost'],
        answer: 3,
        explanation: 'Networking reduces hardware costs by allowing shared peripherals. Benefits include resource sharing, improved security, centralized administration, and reduced cost.'
    },
    {
        category: 'Fundamentals',
        type: 'concept',
        difficulty: 'medium',
        question: 'In networking, what does the term "proprietary" refer to?',
        options: ['An agreed-upon industry standard', 'A process that works only on a single vendor\'s equipment', 'An open-source networking protocol', 'A government-regulated specification'],
        answer: 1,
        explanation: 'Proprietary refers to any process or way of doing something that works only on a single vendor\'s equipment. The opposite of this is a standard.'
    },
    {
        category: 'Fundamentals',
        type: 'concept',
        difficulty: 'medium',
        question: 'What is the difference between an "official standard" and a "de facto standard"?',
        options: ['Official standards are newer than de facto standards', 'A de facto standard is adopted formally by ISO, while an official standard is not', 'An official standard is adopted by a standards body; a de facto standard becomes standard through widespread use over time', 'There is no difference'],
        answer: 2,
        explanation: 'An official standard is adopted by a body like ISO, while a de facto standard becomes the standard simply by being the method that all parties gradually choose to use over time.'
    },
    {
        category: 'Fundamentals',
        type: 'concept',
        difficulty: 'easy',
        question: 'What are the four basic requirements for a computer network?',
        options: ['Two computers, a router, cables, and software', 'A server, client, switch, and firewall', 'Two computers, a shared resource, transmission medium, and protocol', 'A modem, ISP, browser, and IP address'],
        answer: 2,
        explanation: 'A network requires at least two computers, a resource that can be shared, a transmission medium (bounded or boundless), and a protocol (agreed communication language).'
    },
    {
        category: 'Network Types',
        type: 'concept',
        difficulty: 'easy',
        question: 'Which type of network covers a small geographical area such as a single building or part of a building?',
        options: ['WAN', 'MAN', 'LAN', 'SAN'],
        answer: 2,
        explanation: 'A LAN (Local Area Network) is a high-speed data network covering a small geographical area — a single physical location such as a building or complex of buildings.'
    },
    {
        category: 'Network Types',
        type: 'concept',
        difficulty: 'easy',
        question: 'A WAN is best described as:',
        options: ['A single building network', 'A collection of LANs connected together, allowing them to function as one large network', 'A wireless network within one room', 'A personal area network'],
        answer: 1,
        explanation: 'A WAN (Wide Area Network) is a collection of LANs connected to one another with a WAN technology or with the Internet, allowing it to function as one large network.'
    },
    {
        category: 'Network Types',
        type: 'concept',
        difficulty: 'medium',
        question: 'In a peer-to-peer network, which of the following is TRUE?',
        options: ['A centralized server controls all security', 'Each computer is in charge of its own security', 'It requires expensive server hardware', 'It is highly scalable'],
        answer: 1,
        explanation: 'In a peer-to-peer network (workgroup), each computer is in charge of its own security, and the computers have no centralized security relationship with one another.'
    },
    {
        category: 'Network Types',
        type: 'concept',
        difficulty: 'medium',
        question: 'Which is NOT an advantage of a peer-to-peer network?',
        options: ['Low cost', 'Easy to set up', 'No server required', 'Centralized control of security'],
        answer: 3,
        explanation: 'Peer-to-peer advantages include low cost, easy setup, and no server required. However, they lack centralized control of security — that is a disadvantage.'
    },
    {
        category: 'Network Types',
        type: 'concept',
        difficulty: 'medium',
        question: 'In a client-server network, what is the special server that handles centralized authentication called?',
        options: ['File server', 'Web server', 'Domain controller', 'Proxy server'],
        answer: 2,
        explanation: 'In a client-server (domain-based) network, a special type of server called a directory server or domain controller handles centralized authentication and single sign-on.'
    },
    {
        category: 'OSI Model',
        type: 'concept',
        difficulty: 'easy',
        question: 'Which international organization created the OSI reference model?',
        options: ['IEEE', 'IETF', 'ISO', 'W3C'],
        answer: 2,
        explanation: 'The International Organization for Standardization (ISO) created the Open Systems Interconnection (OSI) model to act as a common blueprint for all vendors.'
    },
    {
        category: 'OSI Model',
        type: 'concept',
        difficulty: 'medium',
        question: 'At which OSI layer can encryption be performed to encrypt only the data (not the entire package)?',
        options: ['Physical layer', 'Data Link layer', 'Network layer', 'Presentation layer'],
        answer: 3,
        explanation: 'Encryption at the Presentation layer encrypts only the data. If done at the Data Link layer, the entire package is encrypted.'
    },
    {
        category: 'OSI Model',
        type: 'concept',
        difficulty: 'easy',
        question: 'Which OSI layer manages the session between the application on the source and destination computers?',
        options: ['Application layer', 'Session layer', 'Transport layer', 'Network layer'],
        answer: 1,
        explanation: 'The Session layer manages the session between the application on the source computer and the application on the destination computer.'
    },
    {
        category: 'OSI Model',
        type: 'concept',
        difficulty: 'medium',
        question: 'The Transport layer identifies applications using what mechanism?',
        options: ['MAC addresses', 'IP addresses', 'Port numbers', 'Domain names'],
        answer: 2,
        explanation: 'The Transport layer is responsible for identifying the application to the destination computer using port numbers.'
    },
    {
        category: 'OSI Model',
        type: 'concept',
        difficulty: 'medium',
        question: 'Which Transport layer protocol is used for unicast (one-to-one) transmissions?',
        options: ['UDP', 'TCP', 'ICMP', 'ARP'],
        answer: 1,
        explanation: 'When the transmission is unicast (one-to-one), TCP is used. When the transmission is broadcast or multicast, UDP is used.'
    },
    {
        category: 'OSI Model',
        type: 'concept',
        difficulty: 'medium',
        question: 'Which protocol is used for broadcast and multicast transmissions?',
        options: ['TCP', 'UDP', 'HTTP', 'FTP'],
        answer: 1,
        explanation: 'When a transmission is either broadcast or multicast (multiple destination hosts), the protocol used is UDP (User Datagram Protocol).'
    },
    {
        category: 'OSI Model',
        type: 'concept',
        difficulty: 'easy',
        question: 'Which OSI layer is responsible for identifying the destination device by its logical (IP) address?',
        options: ['Data Link layer', 'Network layer', 'Transport layer', 'Session layer'],
        answer: 1,
        explanation: 'The Network layer is responsible for identifying the destination device by its logical identification — the IP address.'
    },
    {
        category: 'OSI Model',
        type: 'concept',
        difficulty: 'medium',
        question: 'What protocol is used to convert a logical IP address to a physical MAC address?',
        options: ['DNS', 'DHCP', 'ARP', 'ICMP'],
        answer: 2,
        explanation: 'Address Resolution Protocol (ARP) is used when the IP address is known but the MAC address is not. ARP learns the MAC address.'
    },
    {
        category: 'OSI Model',
        type: 'concept',
        difficulty: 'hard',
        question: 'What is added to the end of a Data Link layer package to verify data integrity?',
        options: ['Header', 'IP address', 'Trailer with CRC (Cyclic Redundancy Check)', 'Port number'],
        answer: 2,
        explanation: 'The Data Link layer adds a trailer containing information for a CRC (Cyclic Redundancy Check) to verify data was not corrupted or altered during transmission.'
    },
    {
        category: 'OSI Model',
        type: 'concept',
        difficulty: 'medium',
        question: 'The Data Link layer is responsible for converting IP addresses to what type of identifier for Ethernet networks?',
        options: ['Domain name', 'Port number', 'MAC address', 'Subnet mask'],
        answer: 2,
        explanation: 'The Data Link layer converts the logical identifier (IP address) to a physical identifier. For Ethernet, this identifier is called a Media Access Control (MAC) address.'
    },
    {
        category: 'Transmission Media',
        type: 'concept',
        difficulty: 'easy',
        question: 'Which of the following is NOT a main characteristic to consider when choosing a network media type?',
        options: ['Bandwidth', 'Security', 'Color', 'Cost'],
        answer: 2,
        explanation: 'The main characteristics to consider when choosing media are: Bandwidth, Security, Convenience, and Cost.'
    },
    {
        category: 'Transmission Media',
        type: 'concept',
        difficulty: 'easy',
        question: 'What type of connector is most commonly used with UTP (Unshielded Twisted Pair) cable?',
        options: ['BNC', 'RJ-11', 'RJ-45', 'SC'],
        answer: 2,
        explanation: 'EIA/TIA specifies an RJ-45 connector for UTP cable. The RJ-45 transparent end connector shows eight colored wires.'
    },
    {
        category: 'Transmission Media',
        type: 'concept',
        difficulty: 'medium',
        question: 'In Ethernet standards, a NIC transmits signals on which pins of an RJ-45 connector?',
        options: ['Pins 3 & 6', 'Pins 1 & 2', 'Pins 4 & 5', 'Pins 7 & 8'],
        answer: 1,
        explanation: 'The Ethernet standard specifies that a NIC transmits signals on pins 1 & 2, and receives signals on pins 3 & 6.'
    },
    {
        category: 'Transmission Media',
        type: 'concept',
        difficulty: 'medium',
        question: 'A straight-through cable has which wiring standard on both ends?',
        options: ['T568A on both ends', 'T568B on both ends', 'T568A on one end and T568B on the other', 'No specific standard'],
        answer: 1,
        explanation: 'A straight-through cable has T568B on both ends. A crossover cable has T568B on one end and T568A on the other.'
    },
    {
        category: 'Transmission Media',
        type: 'concept',
        difficulty: 'medium',
        question: 'When would you use a crossover cable?',
        options: ['Computer to switch', 'Computer to hub', 'Computer to computer', 'Switch to router'],
        answer: 2,
        explanation: 'Crossover cables are used for same-type device connections: computer to computer, hub to hub, switch to switch, or router to router.'
    },
    {
        category: 'Transmission Media',
        type: 'concept',
        difficulty: 'easy',
        question: 'When would you use a straight-through cable?',
        options: ['Computer to computer', 'Switch to switch', 'Hub to hub', 'Computer to switch'],
        answer: 3,
        explanation: 'Straight-through cables are used for different-type device connections: computer to hub, computer to switch, or switch to router.'
    },
    {
        category: 'Transmission Media',
        type: 'concept',
        difficulty: 'hard',
        question: 'What is the primary purpose of twisting wire pairs in UTP cable?',
        options: ['To increase cable length', 'To reduce noise and crosstalk', 'To increase signal speed', 'To make the cable more flexible'],
        answer: 1,
        explanation: 'Twisted-pair cable is designed to take advantage of the effects of crosstalk to minimize noise. Twisting allows noise to appear identically on both wires so it can be easily detected and filtered.'
    },
    {
        category: 'Transmission Media',
        type: 'concept',
        difficulty: 'medium',
        question: 'What type of connector is most commonly used with multimode fiber optic cable?',
        options: ['RJ-45', 'ST connector', 'SC connector', 'BNC'],
        answer: 2,
        explanation: 'The Subscriber Connector (SC) is most commonly used with multimode fiber. The Straight Tip (ST) connector is frequently used with single-mode fiber.'
    },
    {
        category: 'Transmission Media',
        type: 'concept',
        difficulty: 'medium',
        question: 'A console cable (rollover cable) has what wiring configuration?',
        options: ['T568B on both ends', 'T568A on both ends', 'T568B on one end and reverse T568B on the other', 'T568A on one end and T568B on the other'],
        answer: 2,
        explanation: 'A console cable has T568B on one end and reverse T568B on the other, which is why it is also called a rollover cable.'
    },
    {
        category: 'Network Topology',
        type: 'concept',
        difficulty: 'easy',
        question: 'Which type of network topology has a dedicated connection from every node to every other node?',
        options: ['Bus', 'Star', 'Ring', 'Mesh'],
        answer: 3,
        explanation: 'Mesh topology is highly fault tolerant because there is a dedicated connection from one node to another, though it is expensive to implement.'
    },
    {
        category: 'Network Topology',
        type: 'concept',
        difficulty: 'easy',
        question: 'Which topology has the disadvantage that if the central cable fails, the entire network goes down?',
        options: ['Star', 'Bus', 'Ring', 'Mesh'],
        answer: 1,
        explanation: 'In a bus topology, if there is a problem with the cable or in one node, the entire network goes down. It also has limited cable length and low security.'
    },
    {
        category: 'Network Topology',
        type: 'concept',
        difficulty: 'medium',
        question: 'Which topology prevents network collisions and transfers data quickly without a bottleneck?',
        options: ['Bus', 'Star', 'Ring', 'Mesh'],
        answer: 2,
        explanation: 'Ring topology transfers data quickly without a bottleneck and prevents network collisions. However, if a node fails, data cannot be transmitted successfully.'
    },
    {
        category: 'Network Topology',
        type: 'concept',
        difficulty: 'easy',
        question: 'Which access method involves computers contending for use of the transmission medium?',
        options: ['Token Passing', 'Polling', 'Contention-based', 'CSMA/CD'],
        answer: 2,
        explanation: 'In contention-based access, computers are contending (competing) for use of the transmission medium.'
    },
    {
        category: 'Network Topology',
        type: 'concept',
        difficulty: 'medium',
        question: 'In the token passing access method, how do computers share the transmission medium?',
        options: ['They compete for access randomly', 'A central device polls each computer', 'They take turns using a token', 'They broadcast simultaneously'],
        answer: 2,
        explanation: 'In token passing, the computers take turns in using the transmission medium. A token circulates and only the computer holding the token can transmit.'
    },
    {
        category: 'LAN Devices',
        type: 'concept',
        difficulty: 'easy',
        question: 'What unique address does a NIC (Network Interface Card) assign to a computer?',
        options: ['IP address', 'MAC address', 'DNS name', 'Port number'],
        answer: 1,
        explanation: 'The NIC assigns a unique address called a MAC (Media Access Control) address to the machine.'
    },
    {
        category: 'LAN Devices',
        type: 'concept',
        difficulty: 'medium',
        question: 'A MAC address is composed of how many bits in total?',
        options: ['32 bits', '48 bits', '64 bits', '128 bits'],
        answer: 1,
        explanation: 'A MAC address is made up of 48 bits: a 24-bit OUI (Organizationally Unique Identifier) assigned by IEEE, and a 24-bit vendor-assigned portion.'
    },
    {
        category: 'LAN Devices',
        type: 'concept',
        difficulty: 'easy',
        question: 'What is the primary function of a network repeater?',
        options: ['Filter traffic based on MAC addresses', 'Route packets between networks', 'Amplify/boost a degraded signal', 'Assign IP addresses'],
        answer: 2,
        explanation: 'A repeater simply takes the original signal and amplifies or boosts it. It can connect two cable lengths that together would exceed the maximum cable length.'
    },
    {
        category: 'LAN Devices',
        type: 'concept',
        difficulty: 'easy',
        question: 'A network hub is essentially a:',
        options: ['Multiport router', 'Multiport switch', 'Multiport repeater', 'Multiport bridge'],
        answer: 2,
        explanation: 'A network hub is essentially a multiport repeater. It broadcasts incoming signals to all ports without any filtering.'
    },
    {
        category: 'LAN Devices',
        type: 'concept',
        difficulty: 'medium',
        question: 'At which OSI layer does a network bridge operate?',
        options: ['Layer 1 (Physical)', 'Layer 2 (Data Link)', 'Layer 3 (Network)', 'Layer 4 (Transport)'],
        answer: 1,
        explanation: 'A bridge operates at Layer 2 (Data Link) of the OSI Model. It connects and passes frames between two network segments using the same communication protocol.'
    },
    {
        category: 'LAN Devices',
        type: 'concept',
        difficulty: 'medium',
        question: 'What is the main advantage of a switch over a bridge?',
        options: ['Switches use software for forwarding', 'Switches have fewer ports', 'Switches use ASIC hardware chips for faster forwarding', 'Switches only operate at Layer 1'],
        answer: 2,
        explanation: 'Switches use ASIC (Application-Specific Integrated Circuit) chips for hardware-based forwarding, making them much faster than software-based bridges.'
    },
    {
        category: 'LAN Devices',
        type: 'concept',
        difficulty: 'medium',
        question: 'What type of address does a network switch use to forward frames?',
        options: ['IP address', 'MAC address', 'Port number', 'DNS name'],
        answer: 1,
        explanation: 'A switch is a network device that filters, forwards, and floods frames based on the destination MAC address of each frame. It is essentially a multiport bridge.'
    },
    {
        category: 'LAN Devices',
        type: 'concept',
        difficulty: 'hard',
        question: 'What is a collision domain?',
        options: ['A set of devices that share the same IP subnet', 'A set of devices whose packets could potentially collide with one another', 'A group of routers connected together', 'A VLAN segment'],
        answer: 1,
        explanation: 'A collision domain is a set of devices whose packets could potentially collide with one another. A switch places each device in its own collision domain to reduce collisions.'
    },
    {
        category: 'LAN Devices',
        type: 'concept',
        difficulty: 'medium',
        question: 'All devices connected to a hub are in:',
        options: ['Separate collision domains', 'The same collision domain', 'Different broadcast domains', 'Separate VLANs'],
        answer: 1,
        explanation: 'Because a hub cannot separate collision domains, all devices connected to a hub are in the same collision domain.'
    },
    {
        category: 'IP Addressing',
        type: 'concept',
        difficulty: 'easy',
        question: 'What are the two main functions of IP addressing?',
        options: ['Routing and switching', 'Identification and segmentation', 'Encryption and compression', 'Authentication and authorization'],
        answer: 1,
        explanation: 'The two main functions of IP addressing are identification (uniquely identifying devices) and segmentation (subnetting the network for security/performance).'
    },
    {
        category: 'IP Addressing',
        type: 'concept',
        difficulty: 'medium',
        question: 'What format is an IPv4 address expressed in?',
        options: ['Hexadecimal notation', 'Binary notation only', 'Dotted decimal notation', 'Octal notation'],
        answer: 2,
        explanation: 'IPv4 addresses use dotted decimal format (e.g., 192.168.5.3) where each of the four fields (octets) represents 8 bits expressed in decimal.'
    },
    {
        category: 'IP Addressing',
        type: 'concept',
        difficulty: 'medium',
        question: 'Which IP address class has a first octet range of 192 to 223?',
        options: ['Class A', 'Class B', 'Class C', 'Class D'],
        answer: 2,
        explanation: 'Class C addresses have a first octet range of 192 to 223. Class A is 1-126, Class B is 128-191, Class D is 224-239, and Class E is 240-255.'
    },
    {
        category: 'IP Addressing',
        type: 'concept',
        difficulty: 'medium',
        question: 'Why is the entire 127.0.0.0/8 network range reserved?',
        options: ['For private IP addressing', 'For multicast communication', 'For diagnostic/loopback purposes', 'For DNS servers'],
        answer: 2,
        explanation: 'The 127.0.0.0/8 range is reserved for diagnostics and loopback testing. The most commonly used address is 127.0.0.1.'
    },
    {
        category: 'IP Addressing',
        type: 'concept',
        difficulty: 'easy',
        question: 'What determines which portion of an IP address is the network part and which is the host part?',
        options: ['The default gateway', 'The subnet mask', 'The DNS server', 'The MAC address'],
        answer: 1,
        explanation: 'The subnet mask determines which portion of the IP address is the network part and which is the host part. A computer cannot have an IP address without a subnet mask.'
    },
    {
        category: 'IP Addressing',
        type: 'concept',
        difficulty: 'medium',
        question: 'What is the default subnet mask for a Class B IP address?',
        options: ['255.0.0.0', '255.255.0.0', '255.255.255.0', '255.255.255.255'],
        answer: 1,
        explanation: 'Default subnet masks: Class A = 255.0.0.0, Class B = 255.255.0.0, Class C = 255.255.255.0.'
    },
    {
        category: 'IP Addressing',
        type: 'concept',
        difficulty: 'hard',
        question: 'What service automates the process of assigning IP addresses, subnet masks, and default gateways to computers?',
        options: ['DNS', 'NAT', 'DHCP', 'ARP'],
        answer: 2,
        explanation: 'DHCP (Dynamic Host Configuration Protocol) is a service that runs on either a router or server. Its function is to automate the process of assigning IP addresses, subnet masks, default gateways, and other settings.'
    }
];
