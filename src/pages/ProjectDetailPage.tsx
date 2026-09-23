import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, CheckCircle2, Layers, Cpu } from 'lucide-react';
import { projectsData } from '../data/projects';
import { PageContainer } from '../components/ui/PageContainer';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { GithubIcon } from '../components/ui/SocialIcons';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <PageContainer size="normal">
        <Link to="/projects" className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-brand-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to All Projects
        </Link>

        <div className="space-y-10">
          {/* Header Card */}
          <Card className="p-8 sm:p-10 border-slate-200 dark:border-slate-800 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Badge variant="brand" className="text-xs">
                {project.type}
              </Badge>
              <Badge variant={project.status === 'Completed' ? 'success' : 'brand'}>
                Status: {project.status}
              </Badge>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
                {project.title}
              </h1>
              <p className="text-sm font-mono text-brand-600 dark:text-brand-400 mt-2">
                {project.subtitle}
              </p>
            </div>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
              {project.fullDescription}
            </p>

            {/* Tech stack */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="accent" className="font-mono text-xs">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-4 pt-2">
              {project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" icon={<GithubIcon className="w-4 h-4" />}>
                    GitHub Repository
                  </Button>
                </a>
              ) : (
                <Button variant="outline" disabled icon={<GithubIcon className="w-4 h-4 opacity-50" />}>
                  GitHub Repository (Coming Soon)
                </Button>
              )}

              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" icon={<ExternalLink className="w-4 h-4" />}>
                    Live Demo
                  </Button>
                </a>
              ) : (
                <Button variant="secondary" disabled icon={<ExternalLink className="w-4 h-4 opacity-50" />}>
                  Live Demo (Coming Soon)
                </Button>
              )}
            </div>
          </Card>

          {/* Detailed Sections if available */}
          {project.detailedSections ? (
            <div className="space-y-8">
              {/* 1. Project Overview & 2. Project Objective */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-6 border-slate-200 dark:border-slate-800 space-y-3">
                  <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-slate-400 dark:text-slate-400 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-brand-500" /> 1. Project Overview
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {project.detailedSections.overview}
                  </p>
                </Card>

                <Card className="p-6 border-slate-200 dark:border-slate-800 space-y-3">
                  <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-slate-400 dark:text-slate-400 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-emerald-500" /> 2. Project Objective
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {project.detailedSections.objective}
                  </p>
                </Card>
              </div>

              {/* 3. My Role */}
              <Card className="p-6 border-slate-200 dark:border-slate-800 space-y-3">
                <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-slate-400 dark:text-slate-400 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-indigo-500" /> 3. My Role
                </h3>
                <div className="inline-block px-4 py-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-mono text-sm font-bold border border-indigo-500/20">
                  {project.detailedSections.role}
                </div>
              </Card>

              {/* 4. Responsibilities & 7. Contribution */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="p-6 border-slate-200 dark:border-slate-800 space-y-4">
                  <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-slate-400 dark:text-slate-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-500" /> 4. Responsibilities
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {project.detailedSections.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="p-6 border-slate-200 dark:border-slate-800 space-y-4">
                  <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-slate-400 dark:text-slate-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 7. Contribution
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {project.detailedSections.contribution.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              {/* 5. Technical Areas & 8. Technologies */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-6 border-slate-200 dark:border-slate-800 space-y-4">
                  <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-slate-400 dark:text-slate-400">
                    5. Technical Areas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.detailedSections.technicalAreas.map((area, i) => (
                      <Badge key={i} variant="accent" className="font-mono text-xs">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 border-slate-200 dark:border-slate-800 space-y-4">
                  <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-slate-400 dark:text-slate-400">
                    8. Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.detailedSections.technologies.map((tech, i) => (
                      <Badge key={i} variant="brand" className="font-mono text-xs font-bold">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>

              {/* 6. Challenges */}
              <Card className="p-6 border-slate-200 dark:border-slate-800 space-y-4">
                <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-slate-400 dark:text-slate-400">
                  6. Challenges
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {project.detailedSections.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span className={challenge.includes('Additional technical details') ? 'font-semibold text-amber-600 dark:text-amber-400 font-mono text-xs' : ''}>
                        {challenge}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* 9. Project Images / Diagrams */}
              <Card className="p-8 border-slate-200 dark:border-slate-800 space-y-4 text-center">
                <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-slate-400 dark:text-slate-400">
                  9. Project Images / Diagrams
                </h3>
                <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="text-xs font-mono text-amber-400 font-semibold bg-amber-500/10 border border-amber-500/20 py-2 px-4 rounded-lg inline-block">
                    Additional technical details to be added.
                  </div>
                  <p className="text-xs text-slate-400 font-mono">
                    Notice: Sensitive security information, confidential network configurations, IP addresses, credentials, topology details, or restricted information belonging to the Addis Ababa Police Commission are strictly protected and omitted.
                  </p>
                </div>
              </Card>
            </div>
          ) : (
            /* Standard Grid for other projects */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left: Features & Technical Concepts */}
              <div className="lg:col-span-8 space-y-8">
                {project.features && (
                  <Card className="p-8 border-slate-200 dark:border-slate-800 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-brand-500" /> Implemented System Features
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}

                {project.technicalConcepts && (
                  <Card className="p-8 border-slate-200 dark:border-slate-800 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-indigo-500" /> Software Architecture & Engineering Concepts
                    </h3>
                    <div className="grid grid-cols-1 gap-2.5">
                      {project.technicalConcepts.map((concept, i) => (
                        <div key={i} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300">
                          ⚙️ {concept}
                        </div>
                      ))}
                    </div>
                  </Card>
                )}
              </div>

              {/* Right: Architecture & Highlights */}
              <div className="lg:col-span-4 space-y-8">
                {project.architectureOverview && (
                  <Card className="p-6 border-slate-200 dark:border-slate-800 space-y-4">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <Layers className="w-4 h-4 text-brand-500" /> System Architecture Overview
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-mono bg-slate-50 dark:bg-slate-900/60 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                      {project.architectureOverview}
                    </p>
                  </Card>
                )}

                {project.highlights && (
                  <Card className="p-6 border-slate-200 dark:border-slate-800 space-y-3">
                    <h3 className="text-xs font-mono uppercase font-bold text-slate-400">
                      Key Highlights
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((h, i) => (
                        <Badge key={i} variant="brand">
                          {h}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                )}
              </div>
            </div>
          )}
        </div>
      </PageContainer>
    </div>
  );
};
