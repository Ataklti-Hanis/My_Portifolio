import React, { useEffect } from 'react';
import { X, CheckCircle2, ShieldAlert, Cpu, Layers, Radio, Lock, Image as ImageIcon, Wrench, Target, UserCheck, AlertTriangle } from 'lucide-react';
import type { ProjectItem } from '../../types';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const ds = project.detailedSections;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
      {/* Overlay Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4 sticky top-0 z-20 backdrop-blur-md">
          <div className="space-y-2 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="brand" className="text-xs">
                {project.type}
              </Badge>
              {project.isConfidential && (
                <Badge variant="neutral" className="bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 text-xs flex items-center gap-1">
                  <Lock className="w-3 h-3" /> Confidential Infrastructure
                </Badge>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm font-mono text-brand-600 dark:text-brand-400">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white bg-slate-200/50 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {ds ? (
            <div className="space-y-8">
              {/* 1. Project Overview */}
              <div className="space-y-3">
                <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-slate-400 dark:text-slate-400 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-brand-500" /> 1. Project Overview
                </h3>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                  {ds.overview}
                </p>
              </div>

              {/* 2. Project Objective */}
              <div className="space-y-3">
                <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-slate-400 dark:text-slate-400 flex items-center gap-2">
                  <Target className="w-4 h-4 text-emerald-500" /> 2. Project Objective
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                  {ds.objective}
                </p>
              </div>

              {/* 3. My Role */}
              <div className="space-y-3">
                <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-slate-400 dark:text-slate-400 flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-indigo-500" /> 3. My Role
                </h3>
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-mono text-sm font-semibold border border-indigo-500/20">
                  <span>{ds.role}</span>
                </div>
              </div>

              {/* 4. Responsibilities */}
              <div className="space-y-3">
                <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-slate-400 dark:text-slate-400 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-brand-500" /> 4. Responsibilities
                </h3>
                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {ds.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 5. Technical Areas */}
              <div className="space-y-3">
                <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-slate-400 dark:text-slate-400 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-500" /> 5. Technical Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {ds.technicalAreas.map((area, i) => (
                    <span key={i} className="text-xs font-mono px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 font-medium">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* 6. Challenges */}
              <div className="space-y-3">
                <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-slate-400 dark:text-slate-400 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500" /> 6. Challenges
                </h3>
                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2">
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {ds.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold shrink-0">•</span>
                        <span className={challenge.includes('Additional technical details') ? 'font-semibold text-amber-600 dark:text-amber-400 font-mono text-xs' : ''}>
                          {challenge}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 7. Contribution */}
              <div className="space-y-3">
                <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-slate-400 dark:text-slate-400 flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-emerald-500" /> 7. Contribution
                </h3>
                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {ds.contribution.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 8. Technologies */}
              <div className="space-y-3">
                <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-slate-400 dark:text-slate-400 flex items-center gap-2">
                  <Radio className="w-4 h-4 text-brand-500" /> 8. Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {ds.technologies.map((tech) => (
                    <span key={tech} className="text-xs font-mono px-3 py-1.5 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 font-bold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 9. Project Images / Diagrams */}
              <div className="space-y-3">
                <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-slate-400 dark:text-slate-400 flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-indigo-500" /> 9. Project Images / Diagrams
                </h3>
                
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/20 text-brand-400 border border-brand-500/30 flex items-center justify-center mx-auto">
                    <Radio className="w-6 h-6 animate-pulse" />
                  </div>
                  
                  <h4 className="text-sm font-mono font-bold text-slate-200">
                    Mission-Critical Wireless Communications Topology Graphic
                  </h4>
                  
                  <p className="text-xs font-mono text-amber-400 font-semibold bg-amber-500/10 border border-amber-500/20 py-2 px-4 rounded-lg inline-block">
                    Additional technical details to be added.
                  </p>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-center gap-2 text-[11px] text-slate-400 font-mono">
                    <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>
                      Confidential security metadata, IP topology, and restricted Addis Ababa Police Commission configurations are strictly protected.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Fallback for general projects */
            <div className="space-y-6">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.fullDescription}
              </p>
              {project.features && (
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Key Features</h4>
                  <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
                    {project.features.map((f, i) => (
                      <li key={i}>• {f}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
          <span className="text-xs font-mono text-slate-500">
            Press ESC or click backdrop to close
          </span>
          <Button variant="outline" size="sm" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};
