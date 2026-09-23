import React, { useState } from 'react';
import { MapPin, CheckCircle2, Radio, ExternalLink, Shield } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { experienceData } from '../../data/experience';
import { projectsData } from '../../data/projects';
import { ProjectDetailModal } from '../project/ProjectDetailModal';
import type { ProjectItem } from '../../types';

export const Experience: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenProject = (slug: string) => {
    const proj = projectsData.find((p) => p.slug === slug);
    if (proj) {
      setSelectedProject(proj);
      setIsModalOpen(true);
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Career Timeline"
          title="Professional Experience"
          subtitle="Hands-on engineering in enterprise cloud networks and technical field operations management."
        />

        {/* Side-by-Side 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {experienceData.map((exp) => (
            <div key={exp.id} className="flex flex-col h-full">
              <Card className="p-6 sm:p-8 space-y-5 border-slate-200 dark:border-slate-800 hover:border-brand-500/40 flex flex-col justify-between h-full relative overflow-hidden group">
                {/* Header Badge & Title */}
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Badge variant={exp.isCurrent ? 'brand' : 'neutral'}>
                        {exp.period}
                      </Badge>
                      {exp.isCurrent && (
                        <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-brand-500" /> {exp.location}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-sm font-bold text-brand-600 dark:text-brand-400 mt-1">
                      {exp.company}
                    </h4>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800">
                    {exp.summary}
                  </p>
                </div>

                {/* Responsibilities List */}
                <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800 flex-1">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 block">
                    General Responsibilities:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Tags */}
                <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 block">
                    Technologies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:bg-brand-400/10 dark:text-brand-400 border border-brand-500/20 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Dedicated Project Card inside Experience 1 */}
                {exp.projectCard && (
                  <div className="mt-6 pt-6 border-t-2 border-dashed border-slate-200 dark:border-slate-800 text-left">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-3 flex items-center gap-1.5">
                      <Radio className="w-3.5 h-3.5 text-brand-500 animate-pulse" /> Featured Project Card
                    </div>

                    <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 text-white border border-brand-500/40 shadow-xl relative overflow-hidden group hover:border-brand-500 transition-all">
                      <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-500/20 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-500/30 transition-all" />

                      <div className="flex flex-col space-y-3 relative z-10">
                        <div>
                          <div className="text-base sm:text-lg font-extrabold text-white tracking-tight leading-snug">
                            {exp.projectCard.title}
                          </div>
                          <div className="text-xs font-bold text-brand-400 font-mono mt-1">
                            {exp.projectCard.subtitle}
                          </div>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed">
                          {exp.projectCard.description}
                        </p>

                        <div className="text-[11px] font-mono font-medium text-slate-300 bg-slate-800/90 px-3 py-1.5 rounded-lg border border-slate-700/80 inline-block w-fit">
                          {exp.projectCard.tagsLine}
                        </div>

                        <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                          <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                            <Shield className="w-3 h-3 text-amber-400 shrink-0" /> Mission-Critical Infrastructure
                          </span>
                          <button
                            onClick={() => handleOpenProject(exp.projectCard!.slug)}
                            className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-mono text-xs font-bold transition-all shadow-md hover:shadow-brand-500/25 flex items-center gap-1.5 cursor-pointer shrink-0"
                          >
                            <span>View Project</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
