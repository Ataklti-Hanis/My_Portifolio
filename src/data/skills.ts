import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: "networking",
    category: "Networking & Cloud Infrastructure",
    iconName: "Network",
    skills: [
      { name: "Huawei VRP", level: "Enterprise", tag: "Core" },
      { name: "Huawei S5720", level: "Enterprise", tag: "Hardware" },
      { name: "CloudCampus", level: "Enterprise", tag: "Management" },
      { name: "VLAN & VLANIF", level: "Advanced", tag: "L2/L3" },
      { name: "Routing & Switching", level: "Advanced", tag: "Protocol" },
      { name: "ARP & VTY Security", level: "Advanced", tag: "Troubleshooting" },
      { name: "TCP/IP Suite", level: "Core", tag: "Foundation" },
      { name: "Network Troubleshooting", level: "Expert", tag: "Ops" }
    ]
  },
  {
    id: "infrastructure",
    category: "Infrastructure & Systems",
    iconName: "Server",
    skills: [
      { name: "Linux Administration", level: "Advanced", tag: "OS" },
      { name: "VMware Virtualization", level: "Enterprise", tag: "Hypervisor" },
      { name: "Virtualization Architecture", level: "Advanced", tag: "Infrastructure" },
      { name: "System Administration", level: "Advanced", tag: "Ops" }
    ]
  },
  {
    id: "programming",
    category: "Programming Languages",
    iconName: "Code2",
    skills: [
      { name: "JavaScript (ES6+)", level: "Proficient", tag: "Web" },
      { name: "TypeScript", level: "Proficient", tag: "Web/Backend" },
      { name: "Python", level: "Proficient", tag: "Scripting/AI" },
      { name: "SQL", level: "Proficient", tag: "Database" },
      { name: "HTML5", level: "Core", tag: "Frontend" },
      { name: "CSS3", level: "Core", tag: "Frontend" }
    ]
  },
  {
    id: "frontend",
    category: "Frontend Engineering",
    iconName: "Layout",
    skills: [
      { name: "React.js", level: "Proficient", tag: "Framework" },
      { name: "Vite", level: "Proficient", tag: "Build Tool" },
      { name: "Material UI", level: "Proficient", tag: "UI Library" },
      { name: "Tailwind CSS", level: "Proficient", tag: "Styling" },
      { name: "Responsive Design", level: "Core", tag: "UI/UX" }
    ]
  },
  {
    id: "backend",
    category: "Backend Development",
    iconName: "Database",
    skills: [
      { name: "Node.js", level: "Proficient", tag: "Runtime" },
      { name: "NestJS", level: "Proficient", tag: "Framework" },
      { name: "REST APIs", level: "Advanced", tag: "Architecture" },
      { name: "TypeORM", level: "Proficient", tag: "ORM" },
      { name: "JWT Authentication", level: "Core", tag: "Security" }
    ]
  },
  {
    id: "database",
    category: "Database & Storage",
    iconName: "HardDrive",
    skills: [
      { name: "PostgreSQL", level: "Proficient", tag: "RDBMS" },
      { name: "SQL Querying", level: "Proficient", tag: "Data" },
      { name: "Database Design", level: "Advanced", tag: "Schema" },
      { name: "Schema Normalization", level: "Advanced", tag: "Architecture" },
      { name: "Migrations", level: "Proficient", tag: "DevOps" }
    ]
  }
];
