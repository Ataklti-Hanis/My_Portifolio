import { Brain, Activity, Clock } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { researchData } from '../../data/research';

export const ResearchSection: React.FC = () => {
  return (
    <section id="research" className="py-20 bg-slate-100/50 dark:bg-tech-cardDark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Academic & AI Research"
          title="Multimodal AI Abnormality Detection in Poultry"
          subtitle="A research-oriented framework utilizing sensor fusion for early abnormality detection in laying hens."
        />

        {/* Research Overview Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <div className="lg:col-span-8 space-y-6">
            <Card className="p-8 border-slate-200 dark:border-slate-800 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {researchData.title}
                  </h3>
                  <p className="text-xs font-mono text-brand-600 dark:text-brand-400 mt-1">
                    {researchData.subtitle}
                  </p>
                </div>
                <Badge variant="brand" icon={<Brain className="w-3.5 h-3.5" />}>
                  {researchData.statusText}
                </Badge>
              </div>

              {/* Problem & Objective */}
              <div className="space-y-4">
                <h4 className="text-sm font-mono uppercase font-bold text-slate-400">
                  Research Problem & Objective
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>Problem:</strong> {researchData.problemStatement}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>Objective:</strong> {researchData.objective}
                </p>
              </div>

              {/* Abstract */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong className="block font-mono mb-1 text-brand-600 dark:text-brand-400">Abstract Summary:</strong>
                {researchData.abstract}
              </div>

              {/* Multimodal Sensors Breakdown */}
              <div>
                <h4 className="text-sm font-mono uppercase font-bold text-slate-400 mb-3">
                  Multimodal Sensor Architecture
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {researchData.multimodalSensors.map((sensor, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200">
                      <Activity className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{sensor}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Research Details & Status Flow */}
          <div className="lg:col-span-4 space-y-6">
            {/* Status Timeline */}
            <Card className="p-6 border-slate-200 dark:border-slate-800 space-y-4">
              <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-500" /> Research Roadmap
              </h4>

              <div className="space-y-3">
                {researchData.statusFlow.map((step) => (
                  <div key={step.step} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                      <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-[10px] font-mono flex items-center justify-center">
                        {step.step}
                      </span>
                      <span>{step.name}</span>
                    </div>

                    {step.status === 'completed' && (
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        Completed
                      </span>
                    )}
                    {step.status === 'in-progress' && (
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                        In Progress
                      </span>
                    )}
                    {step.status === 'planned' && (
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-500">
                        Planned
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Research Area Tags */}
            <Card className="p-6 border-slate-200 dark:border-slate-800 space-y-3">
              <h4 className="text-xs font-mono uppercase font-bold text-slate-400">
                Research Categories
              </h4>
              <div className="flex flex-wrap gap-2">
                {researchData.tags.map((tag) => (
                  <Badge key={tag} variant="brand">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
