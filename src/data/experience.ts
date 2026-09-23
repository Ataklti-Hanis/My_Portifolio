import type { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: "china-iconic-tech",
    role: "ICT Network Engineer",
    company: "China Iconic Technology",
    period: "2024 – Present",
    location: "Ethiopia",
    isCurrent: true,
    type: "engineering",
    summary: "Engineered and deployed nationwide SchoolNet and Higher Education cloud network infrastructure across 300 primary/secondary schools and 10 public universities.",
    responsibilities: [
      "Engineered and deployed nationwide SchoolNet and Higher Education cloud network infrastructure across 300 primary/secondary schools and 10 public universities.",
      "Worked with Huawei CloudCampus solutions.",
      "Configured Huawei S5720 core and access switches.",
      "Configured VLAN segmentation.",
      "Configured routing.",
      "Worked with VLANIF interfaces.",
      "ARP troubleshooting.",
      "VTY access controls.",
      "Linux environments.",
      "VMware virtual environments.",
      "Enterprise network troubleshooting.",
      "Infrastructure support and maintenance."
    ],
    technologies: [
      "Huawei VRP",
      "Huawei S5720",
      "CloudCampus",
      "VLAN",
      "Routing",
      "ARP",
      "VTY",
      "Linux",
      "VMware"
    ],
    stats: [
      { label: "Schools Deployed", value: "300+" },
      { label: "Public Universities", value: "10" }
    ],
    projectCard: {
      id: "addis-ababa-police-elte",
      slug: "addis-ababa-police-elte",
      title: "Addis Ababa Police Commission",
      subtitle: "eLTE Mission-Critical Communications Project",
      projectType: "Mission-Critical Wireless Communications Infrastructure",
      description: "Contributed to the network deployment and CLI configuration for the Addis Ababa Police Commission eLTE mission-critical wireless communications project, supporting data transmission and secure network performance.",
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
      tagsLine: "Network Deployment • CLI • Infrastructure"
    }
  },
  {
    id: "ethiopian-statistical-service",
    role: "Field Supervisor",
    company: "Ethiopian Statistical Service",
    period: "2023 – 2024",
    location: "Ethiopia",
    isCurrent: false,
    type: "supervision",
    summary: "Supervised field operations, enumerators, and digital survey submissions for large-scale demographic data collection.",
    responsibilities: [
      "Supervised data collection and field operations across designated regional sites.",
      "Managed field enumeration teams, establishing daily targets and performance monitoring.",
      "Supported technical operations during data gathering, resolving hardware and software collection device issues.",
      "Reviewed and validated digital survey submissions for accuracy, completeness, and statistical consistency.",
      "Ensured rigorous data quality control standards throughout the survey lifecycle.",
      "Coordinated logistics, hardware distribution, and multi-stakeholder communication."
    ],
    technologies: [
      "Digital Survey Tools",
      "Data Quality Validation",
      "Field Operations",
      "Team Leadership",
      "Logistics Management"
    ]
  }
];
