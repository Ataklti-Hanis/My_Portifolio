import type { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: "addis-ababa-police-elte",
    slug: "addis-ababa-police-elte",
    title: "Addis Ababa Police Commission eLTE Project",
    subtitle: "eLTE Mission-Critical Communications",
    type: "Mission-Critical Wireless Communications Infrastructure",
    category: "Network Engineering",
    technologies: [
      "eLTE",
      "Network Deployment",
      "CLI Configuration",
      "Network Infrastructure",
      "Data Transmission",
      "Network Performance",
      "Secure Communications",
      "Troubleshooting"
    ],
    shortDescription: "Contributed to the network deployment and CLI configuration for the Addis Ababa Police Commission eLTE mission-critical wireless communications project, supporting data transmission and secure network performance.",
    fullDescription: "Contributed to the network deployment and CLI configuration for the Addis Ababa Police Commission eLTE mission-critical wireless communications project, supporting data transmission and secure network performance.",
    status: "Completed",
    isConfidential: true,
    highlights: [
      "eLTE Mission-Critical Communications",
      "CLI Configuration & Deployment",
      "Data Transmission Optimization"
    ],
    image: "/images/projects/elte-police.png",
    githubUrl: "",
    liveUrl: "",
    detailedSections: {
      overview: "Contributed to the network deployment and CLI configuration for the Addis Ababa Police Commission eLTE mission-critical wireless communications project, supporting data transmission and secure network performance.",
      objective: "Support the successful deployment and CLI configuration of mission-critical wireless communications infrastructure for public safety operations, optimizing data transmission, network connectivity, and secure system performance.",
      role: "ICT Network Engineer",
      responsibilities: [
        "Contributed to network deployment activities.",
        "Performed CLI configuration as part of the network implementation.",
        "Supported network infrastructure configuration and troubleshooting.",
        "Worked on optimizing data transmission and network performance.",
        "Supported the implementation of secure mission-critical communications infrastructure."
      ],
      technicalAreas: [
        "eLTE Wireless Networks",
        "Network Deployment Operations",
        "CLI Configuration",
        "Network Infrastructure Management",
        "Data Transmission",
        "Network Performance Optimization",
        "Secure Communications Infrastructure",
        "Troubleshooting"
      ],
      challenges: [
        "Ensuring mission-critical network uptime and high availability for public safety services.",
        "Executing precise Command Line Interface (CLI) parameters under strict operational schedules.",
        "Maintaining strict data privacy and security controls for sensitive communications infrastructure.",
        "Additional technical details to be added."
      ],
      contribution: [
        "Contributed to network deployment activities.",
        "Performed CLI configuration as part of the network implementation.",
        "Supported network infrastructure configuration and troubleshooting.",
        "Worked on optimizing data transmission and network performance.",
        "Supported the implementation of secure mission-critical communications infrastructure."
      ],
      technologies: [
        "eLTE",
        "Network Deployment",
        "CLI Configuration",
        "Network Infrastructure",
        "Data Transmission",
        "Network Performance",
        "Secure Communications",
        "Troubleshooting"
      ],
      imagesOrDiagramsNote: "Additional technical details to be added. Note: Sensitive security information, confidential network configurations, IP addresses, credentials, topology details, or restricted information belonging to the Addis Ababa Police Commission are strictly protected and omitted.",
      hasDiagramPlaceholder: true
    }
  },
  {
    id: "enterprise-schoolnet",
    slug: "enterprise-schoolnet",
    title: "Nationwide SchoolNet & Higher Education Infrastructure",
    subtitle: "Enterprise Huawei Network Engineering & CloudCampus Deployment",
    type: "Enterprise Infrastructure",
    category: "Network Engineering",
    technologies: ["Huawei CloudCampus", "Huawei S5720", "VLAN / VLANIF", "Routing Protocols", "Linux", "VMware"],
    shortDescription: "Nationwide enterprise network engineering spanning 300 primary/secondary schools and 10 public universities with Huawei hardware and cloud campus management.",
    fullDescription: "Engineered and deployed nationwide SchoolNet and Higher Education cloud network infrastructure across Ethiopia, connecting over 300 primary and secondary educational institutions alongside 10 major public universities. The project incorporated Huawei core/access switches, structured VLAN segmentation, inter-VLAN routing, and VMware virtualized management consoles.",
    features: [
      "300+ Primary & Secondary School Campus Connectivity",
      "10 Public Universities Core Infrastructure Deployment",
      "Huawei S5720 Core & Access Switch Configuration",
      "Huawei CloudCampus Cloud Network Management",
      "VLAN Segmentation & VLANIF Interface Layering",
      "ARP Conflict Troubleshooting & VTY Security Rules"
    ],
    technicalConcepts: [
      "Enterprise Switching & Routing Architecture",
      "Inter-VLAN Routing (VLANIF)",
      "Layer 2 & Layer 3 Security Policies",
      "Virtualized Appliance Host Management (VMware)",
      "High Availability & Disaster Resilience"
    ],
    architectureOverview: "Tiered hierarchical campus topology: Central Education Cloud Data Center connected via WAN to Core Campus Switches in 10 Universities and Access Distribution Nodes in 300+ Schools.",
    githubUrl: "",
    liveUrl: "",
    image: "/images/projects/network-infrastructure.png",
    status: "Completed",
    highlights: [
      "300+ Schools & 10 Public Universities",
      "Huawei S5720 & CloudCampus",
      "Enterprise L2/L3 Routing & VLANs"
    ]
  },
  {
    id: "casdaa",
    slug: "casdaa",
    title: "CASDAA Web Application",
    subtitle: "Central Amhara Sayint Development and Aid Association",
    type: "Full-Stack Web Application",
    category: "Full Stack",
    technologies: ["React", "NestJS", "PostgreSQL", "TypeORM", "Material UI", "JWT"],
    shortDescription: "A comprehensive full-stack organizational management web application designed to digitize operations, member registries, automated payments, donations, and secure administrative workflows.",
    fullDescription: "CASDAA (Central Amhara Sayint Development and Aid Association) is a robust full-stack administrative platform built to streamline community organization processes. It replaces traditional manual tracking with a centralized, secure web-based ecosystem that handles member registration, role-based security, document repositories, and real-time financial tracking.",
    features: [
      "User Authentication & JWT Security",
      "Role-Based Access Control (RBAC) for Admins & Members",
      "Member Registration & Profile Management",
      "Payment Gateway Integration & Ledger Tracking",
      "Donation Campaign & Disbursement Tracking",
      "Document Repository & File Upload System",
      "Comprehensive Admin Control Panel & Reports",
      "Database Schema Design with TypeORM & PostgreSQL",
      "Fully Responsive UI with Material UI Components"
    ],
    technicalConcepts: [
      "Modular NestJS Backend Architecture",
      "Relational Entity Modeling with TypeORM",
      "Secure JWT Bearer Token Middleware",
      "Stateful React UI with Context & Custom Hooks",
      "RESTful API Endpoint Layering"
    ],
    architectureOverview: "Built with a client-server architecture. The frontend is powered by React with Material UI, communicating over REST APIs with a NestJS backend connected to a PostgreSQL relational database managed by TypeORM.",
    githubUrl: "", // Available upon request / Coming Soon
    liveUrl: "",   // Coming Soon
    image: "/images/projects/casdaa.png",
    status: "Completed",
    highlights: [
      "Role-Based Access Control",
      "Member & Payment Ledger",
      "PostgreSQL + TypeORM Backend"
    ]
  },
  {
    id: "online-electronics-broker",
    slug: "online-electronics-broker",
    title: "Online Broker System for Electronic Devices",
    subtitle: "B.Sc. Graduation Capstone Project — Mekelle University",
    type: "B.Sc. Capstone Project",
    category: "Capstone Project",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "UML Modeling"],
    shortDescription: "An end-to-end full-stack digital marketplace and brokerage platform designed to facilitate buyer-seller interactions, device verification, structured inventory metadata, and secure transaction workflows.",
    fullDescription: "Developed as the B.Sc. graduation capstone project at Mekelle University, this system bridges local electronics buyers and sellers through a trust-verified digital brokerage platform. It applies rigorous software engineering methodologies—from initial requirements elicitation and UML architectural design to normalized database modeling and role-based interface deployment.",
    features: [
      "Structured Electronics Item Cataloging & Specifications",
      "Buyer-Seller Brokerage & Communication Portal",
      "Role-Based Access Control (Buyers, Sellers, Verified Brokers, Admins)",
      "Listing Verification & Fraud Prevention Workflows",
      "Normalized PostgreSQL Relational Database",
      "Full Lifecycle Software Engineering Documentation"
    ],
    technicalConcepts: [
      "Software Requirements Specification (SRS)",
      "UML Class, Sequence & Use Case Diagrams",
      "3rd Normal Form (3NF) Database Normalization",
      "Role-Based Security & Permissions Mapping",
      "End-to-End SDLC Lifecycle Execution"
    ],
    architectureOverview: "Designed following traditional 3-tier architecture with normalized relational database models, backend API controllers, and responsive web frontend interfaces.",
    githubUrl: "", 
    liveUrl: "",
    image: "/images/projects/electronics-broker.png",
    status: "Completed",
    highlights: [
      "B.Sc. Graduation Capstone Project",
      "UML Architectural Modeling",
      "3NF Database Normalization"
    ]
  },
  {
    id: "poultry-ai-research",
    slug: "poultry-ai-research",
    title: "Multimodal AI Abnormality Detection in Poultry",
    subtitle: "Applied AI / Sensor Fusion Research Framework",
    type: "Research Framework",
    category: "AI / Research",
    technologies: ["Python", "Computer Vision", "Multimodal Sensors", "Machine Learning", "Anomaly Detection"],
    shortDescription: "A research-oriented framework utilizing multimodal sensor fusion (acoustic, visual, environmental) for early abnormality detection in laying hens.",
    fullDescription: "This research project investigates early anomaly detection systems for precision livestock farming. By fusing audio signals, computer vision feed, and environmental sensor metrics, the framework aims to identify early signs of health abnormalities in poultry flocks before visual symptoms become widespread.",
    features: [
      "Multimodal Sensor Data Ingestion Pipeline",
      "Acoustic Pattern Analysis for Vocal Stress Detection",
      "Computer Vision Feed for Behavior & Movement Tracking",
      "Environmental Telemetry (Temperature, Humidity, Ammonia)",
      "Early Warning Anomaly Detection Engine"
    ],
    technicalConcepts: [
      "Multimodal Sensor Fusion",
      "Feature Extraction from Audio & Video Streams",
      "Unsupervised & Supervised Anomaly Classification",
      "Precision Agriculture IoT Architecture"
    ],
    architectureOverview: "IoT Edge sensor nodes stream acoustic and environmental data alongside video cameras to a central AI processing pipeline for real-time anomaly classification.",
    githubUrl: "",
    liveUrl: "",
    image: "/images/projects/poultry-ai.png",
    status: "Research",
    highlights: [
      "Multimodal Sensor Fusion",
      "Computer Vision & Audio ML",
      "Research Details Will Be Published"
    ]
  }
];
