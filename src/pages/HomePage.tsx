import React from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Experience } from '../components/sections/Experience';
import { EnterpriseNetworkSection } from '../components/sections/EnterpriseNetworkSection';
import { Skills } from '../components/sections/Skills';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ResearchSection } from '../components/sections/ResearchSection';
import { EducationSection } from '../components/sections/EducationSection';
import { CertificationsSection } from '../components/sections/CertificationsSection';
import { ResumeSection } from '../components/sections/ResumeSection';
import { BlogSection } from '../components/sections/BlogSection';
import { ContactSection } from '../components/sections/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-4">
      <Hero />
      <About />
      <Experience />
      <EnterpriseNetworkSection />
      <Skills />
      <ProjectsSection />
      <ResearchSection />
      <EducationSection />
      <CertificationsSection />
      <ResumeSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
};
