import type { BlogPost } from '../types';

export const blogCategories = [
  "All",
  "Networking",
  "Software Development",
  "Cloud Computing",
  "Cybersecurity",
  "Linux",
  "System Administration",
  "Career & Learning"
];

export const blogPostsData: BlogPost[] = [
  {
    id: "huawei-s5720-vlan-segmentation",
    slug: "huawei-s5720-vlan-segmentation",
    title: "Configuring VLAN Segmentation & VLANIF Routing on Huawei S5720 Switches",
    excerpt: "A practical guide to implementing Layer 2 isolation, inter-VLAN routing with VLANIF interfaces, and VTY security policies in campus networks.",
    content: `
Enterprise campus networks require strict isolation between student traffic, administrative operations, and core server subnets.

### 1. VLAN Creation & Port Assignment
On Huawei VRP (Versatile Routing Platform), VLAN configuration begins by declaring VLAN IDs and binding physical ports to specific access or trunk modes.

\`\`\`sys
<Huawei> system-view
[Huawei] vlan batch 10 20 30
[Huawei] interface GigabitEthernet 0/0/1
[Huawei-GigabitEthernet0/0/1] port link-type access
[Huawei-GigabitEthernet0/0/1] port default vlan 10
\`\`\`

### 2. Inter-VLAN Routing with VLANIF
To enable controlled routing between VLAN 10 and VLAN 20, VLANIF virtual interfaces act as default gateways.

\`\`\`sys
[Huawei] interface Vlanif10
[Huawei-Vlanif10] ip address 192.168.10.1 255.255.255.0
[Huawei] interface Vlanif20
[Huawei-Vlanif20] ip address 192.168.20.1 255.255.255.0
\`\`\`

### 3. Securing VTY Access
Restricting remote administration to authorized SSH management subnets prevents unauthorized terminal access.
    `,
    category: "Networking",
    date: "2026-03-15",
    readTime: "5 min read",
    author: "Ataklti Hanis",
    tags: ["Huawei VRP", "Switching", "VLAN", "Networking"],
    isPublished: true
  },
  {
    id: "building-scalable-nestjs-typeorm",
    slug: "building-scalable-nestjs-typeorm",
    title: "Structuring Modular NestJS Backends with TypeORM & PostgreSQL",
    excerpt: "Best practices for enterprise NestJS architecture, controller dependency injection, entity migrations, and JWT bearer security.",
    content: `
NestJS provides an out-of-the-box application architecture that enables developers and teams to create highly testable, scalable, loosely coupled, and easily maintainable applications.

### 1. Domain-Driven Module Division
Organize NestJS applications into cohesive modules:
- \`AuthModule\` handling JWT token signing and passport strategies.
- \`UsersModule\` managing identity profiles and role decorators.
- \`PaymentsModule\` managing transaction ledgers.

### 2. Entity Relations with TypeORM
Defining robust relational models in PostgreSQL ensures data consistency and schema integrity across complex organizational workflows.
    `,
    category: "Software Development",
    date: "2026-02-28",
    readTime: "7 min read",
    author: "Ataklti Hanis",
    tags: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM"],
    isPublished: true
  },
  {
    id: "multimodal-sensor-fusion-agriculture",
    slug: "multimodal-sensor-fusion-agriculture",
    title: "Multimodal Sensor Fusion for Early Anomaly Detection in Livestock",
    excerpt: "Exploring how audio spectrograms, thermal vision vectors, and environmental telemetry combine for non-invasive poultry health monitoring.",
    content: `
Early abnormality detection in intensive livestock farming is critical for biosecurity and animal welfare.

By combining heterogeneous data sources—acoustic audio streams, thermal vision matrix readings, and gas concentration telemetry—machine learning systems achieve significantly higher diagnostic precision than single-sensor baselines.
    `,
    category: "Cloud Computing",
    date: "2026-01-10",
    readTime: "6 min read",
    author: "Ataklti Hanis",
    tags: ["AI", "Sensor Fusion", "IoT", "Python"],
    isPublished: true
  }
];
