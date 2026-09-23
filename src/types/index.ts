export type ThemeMode = 'dark' | 'light';

export interface Profile {
  name: string;
  title: string;
  subTitle: string;
  location: string;
  bio: string;
  supportingText: string;
  metrics: {
    label: string;
    value: string;
    description?: string;
  }[];
  interests: string[];
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
    portfolio: string;
    whatsapp?: string;
  };
  ctas: {
    primary: { text: string; link: string };
    secondary: { text: string; link: string };
    contact: { text: string; link: string };
  };
}

export interface ExperienceProjectCardData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  projectType: string;
  description: string;
  contribution: string[];
  technologies: string[];
  tagsLine: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  type: 'engineering' | 'supervision' | 'development';
  summary: string;
  responsibilities: string[];
  technologies: string[];
  stats?: { label: string; value: string }[];
  projectCard?: ExperienceProjectCardData;
}

export interface SkillCategory {
  id: string;
  category: string;
  iconName: string;
  skills: {
    name: string;
    level?: string; // Descriptive indicator, e.g. "Advanced", "Proficient", "Core"
    tag?: string;
  }[];
}

export interface DetailedProjectSections {
  overview: string;
  objective: string;
  role: string;
  responsibilities: string[];
  technicalAreas: string[];
  challenges: string[];
  contribution: string[];
  technologies: string[];
  imagesOrDiagramsNote?: string;
  hasDiagramPlaceholder?: boolean;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  type: string;
  category: 'Full Stack' | 'Capstone Project' | 'AI / Research' | 'Network Engineering';
  technologies: string[];
  shortDescription: string;
  fullDescription: string;
  features?: string[];
  technicalConcepts?: string[];
  architectureOverview?: string;
  githubUrl?: string; // empty string if coming soon
  liveUrl?: string;   // empty string if coming soon
  image: string;
  status: 'Completed' | 'In Progress' | 'Research';
  highlights?: string[];
  isConfidential?: boolean;
  detailedSections?: DetailedProjectSections;
}

export interface ResearchTopic {
  id: string;
  title: string;
  subtitle: string;
  statusText: string; // e.g., "Research details will be published."
  abstract: string;
  problemStatement: string;
  objective: string;
  multimodalSensors: string[];
  aiApproach: string;
  systemArchitectureDescription: string;
  expectedOutcome: string;
  futureWork: string;
  statusFlow: { step: number; name: string; status: 'completed' | 'in-progress' | 'planned' }[];
  tags: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  ects: string;
  eqfLevel: string;
  period?: string;
  details: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  provider: string;
  issueDate?: string;
  credentialId?: string;
  verificationUrl?: string;
  status: string; // e.g., "Certification details to be added."
  isPlaceholder: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  isPublished: boolean;
}

export interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}
