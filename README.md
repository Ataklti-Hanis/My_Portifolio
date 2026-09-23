# Ataklti Hanis — Personal Technology Portfolio

> **ICT Network Engineer & Full-Stack Software Developer**  
> *Ethiopia* • [GitHub Profile](https://github.com/Ataklti-Hanis) • [LinkedIn Profile](https://linkedin.com/in/ataklti-hanis-a85163347) • [Live Portfolio](https://portifolio-rho-livid.vercel.app)

---

## 🌟 Overview

A production-grade, highly responsive, performance-optimized personal technology portfolio built for **Ataklti Hanis**. This application showcases dual professional expertise in:

1. **Enterprise Network Infrastructure**: Designing, deploying, and maintaining nationwide SchoolNet & Higher Education cloud networks across **300+ primary/secondary schools** and **10 public universities** using Huawei S5720 switches, CloudCampus management, VLANIF routing, and Linux/VMware virtualization.
2. **Full-Stack Software Engineering**: Building responsive full-stack applications with React, TypeScript, NestJS, PostgreSQL, TypeORM, and Material UI / Tailwind CSS.
3. **Academic & AI Research**: Multimodal AI abnormality detection framework in poultry using acoustic, thermal vision, and environmental sensor fusion.

---

## 🛠️ Technology Stack

- **Core & Runtime**: React 18, TypeScript, Vite
- **Styling & UI**: Tailwind CSS v3, Custom Design System tokens, Glassmorphism, CSS Grid circuit overlays
- **Icons & Visuals**: Lucide React Icons, HTML5 Canvas Network Node Topology visualizer, SVG diagrams
- **Routing**: React Router DOM v6
- **Animations**: Framer Motion & CSS Keyframe micro-animations
- **Data Architecture**: Structured TS datasets in `src/data/` (`profile.ts`, `experience.ts`, `skills.ts`, `projects.ts`, `research.ts`, `education.ts`, `certifications.ts`, `blog.ts`)

---

## 📁 Project Structure

```
ataklti-hanis-portfolio/
├── public/
│   ├── documents/
│   │   └── resume.pdf            # Professional Resume PDF asset
│   ├── favicon.svg               # SVG Favicon branding
│   ├── robots.txt                # Search engine crawler directives
│   └── sitemap.xml               # XML Sitemap for SEO indexing
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Sticky responsive header with dark/light mode toggle
│   │   │   └── Footer.tsx        # Site footer with branding & social links
│   │   ├── project/
│   │   │   ├── ProjectCard.tsx   # Modular project showcase card
│   │   │   └── ProjectDetails.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx          # Dynamic hero section with network visual canvas
│   │   │   ├── About.tsx         # Detailed bio & 5 metric counter cards
│   │   │   ├── Experience.tsx    # Vertical timeline (China Iconic Tech & ESS)
│   │   │   ├── EnterpriseNetworkSection.tsx # Dedicated topology & switch breakdown
│   │   │   ├── Skills.tsx        # Categorized skills dashboard (No fake percentages)
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── ResearchSection.tsx # Multimodal AI Poultry Abnormality proposal
│   │   │   ├── EducationSection.tsx # Mekelle University B.Sc. CS (240 ECTS)
│   │   │   ├── CertificationsSection.tsx # Data-driven certification cards
│   │   │   ├── ResumeSection.tsx # CV Download & inline viewer
│   │   │   ├── BlogSection.tsx   # Engineering blog architecture
│   │   │   └── ContactSection.tsx# Direct contact form with validation
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── SectionTitle.tsx
│   │   │   └── ThemeToggle.tsx
│   │   └── visual/
│   │       ├── NetworkArchitectureCanvas.tsx # Animated canvas hero visual
│   │       └── EnterpriseTopologyDiagram.tsx # Interactive schoolnet topology
│   ├── context/
│   │   └── ThemeContext.tsx      # Dark/Light theme state with localStorage persistence
│   ├── data/                     # Modular content data sources
│   ├── pages/                    # Individual page view components
│   ├── services/
│   │   └── contactService.ts     # Abstraction layer for contact transmission
│   ├── types/                    # Strict TypeScript interfaces
│   ├── App.tsx                   # Master App entry with routes & theme provider
│   ├── main.tsx
│   └── index.css                 # Tailwind directives & global typography
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🚀 Quick Start & Local Development

### 1. Prerequisites
Ensure Node.js (v18+) and npm are installed.

### 2. Installation
```bash
# Clone the repository (or navigate to directory)
cd C:\Users\T5\.gemini\antigravity\scratch\ataklti-hanis-portfolio

# Install dependencies
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploying to Vercel

1. Push your repository to GitHub (`https://github.com/Ataklti-Hanis/ataklti-hanis-portfolio`).
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Vite**.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Click **Deploy**. Vercel will build and assign your production domain.

---

## 🔧 Future Backend Integration (NestJS + PostgreSQL)

Version 1 is constructed as a high-performance frontend application with clean service abstractions (`src/services/contactService.ts`). 

To connect a NestJS backend:
1. Create a NestJS microservice in `/backend` using `@nestjs/cli`.
2. Configure PostgreSQL database connection with TypeORM entities.
3. Update `src/services/contactService.ts` to call your NestJS POST `/api/v1/contact` endpoint.
4. Store API base URL in `.env` (`VITE_API_BASE_URL`).

---

## 📝 Updating Personal Information

All portfolio data is centralized in `src/data/`:
- **`profile.ts`**: Bio, location, social links, stats
- **`experience.ts`**: Career timeline, duties, tech tags
- **`projects.ts`**: Software & network project details
- **`certifications.ts`**: Update credential IDs and verification URLs
- **`resume.pdf`**: Replace `/public/documents/resume.pdf` with your updated CV PDF file.

---

## 👤 Author

**Ataklti Hanis**  
*ICT Network Engineer & Full-Stack Developer*  
- GitHub: [@Ataklti-Hanis](https://github.com/Ataklti-Hanis)  
- LinkedIn: [in/ataklti-hanis-a85163347](https://linkedin.com/in/ataklti-hanis-a85163347)
