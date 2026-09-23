import type { Profile } from '../types';

export const profileData: Profile = {
  name: "Ataklti Hanis",
  title: "ICT Network Engineer & Full-Stack Developer",
  subTitle: "Enterprise Network Infrastructure | eLTE Wireless Communications | Full-Stack Web Development",
  location: "Ethiopia",
  bio: "I am a Computer Science graduate and ICT Network Engineer with professional experience in mission-critical eLTE wireless communications, enterprise network infrastructure, system administration, and full-stack web development. My engineering experience encompasses the Addis Ababa Police Commission eLTE mission-critical wireless project, nationwide SchoolNet & Higher Education cloud network infrastructure, Huawei networking technologies, Linux administration, and VMware virtualization.",
  supportingText: "Computer Science graduate with professional experience in mission-critical eLTE wireless network deployment, enterprise cloud infrastructure, system administration, and full-stack web development. Interested in software engineering, cloud computing, cybersecurity, wireless networks, and scalable systems.",
  metrics: [
    { label: "Schools Connected", value: "300+", description: "Nationwide SchoolNet Cloud Infrastructure" },
    { label: "Public Universities", value: "10", description: "Higher Education Network Infrastructure" },
    { label: "eLTE Wireless", value: "Police eLTE", description: "Mission-Critical Communications Project" },
    { label: "Degree", value: "B.Sc. CS", description: "Mekelle University (240 ECTS, EQF Level 6)" },
    { label: "Full-Stack Web", value: "React & NestJS", description: "Production-ready Web Applications" }
  ],
  interests: [
    "Software Engineering",
    "eLTE Wireless Networks",
    "Cloud Computing",
    "Cybersecurity",
    "Computer Networks",
    "Distributed Systems",
    "Web Application Development"
  ],
  socialLinks: {
    github: "https://github.com/Ataklti-Hanis",
    linkedin: "https://linkedin.com/in/ataklti-hanis-a85163347",
    email: "mailto:contact@atakltihanis.com", // updateable
    portfolio: "https://portifolio-rho-livid.vercel.app",
    whatsapp: "" // optional configuration placeholder
  },
  ctas: {
    primary: { text: "View My Projects", link: "#projects" },
    secondary: { text: "Download CV", link: "#resume" },
    contact: { text: "Contact Me", link: "#contact" }
  }
};
