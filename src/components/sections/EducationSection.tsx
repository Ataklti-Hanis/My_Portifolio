import { GraduationCap, CheckCircle2 } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { educationData } from '../../data/education';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Academic Background"
          title="Higher Education"
          subtitle="Rigorous academic training in computer science, application development, software engineering, and network architectures."
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu) => (
            <Card key={edu.id} className="p-8 border-slate-200 dark:border-slate-800 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                      {edu.institution}
                    </h3>
                    <h4 className="text-base font-semibold text-brand-600 dark:text-brand-400 mt-0.5">
                      {edu.degree}
                    </h4>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="brand" className="font-mono">
                    {edu.ects}
                  </Badge>
                  <Badge variant="accent" className="font-mono">
                    {edu.eqfLevel}
                  </Badge>
                </div>
              </div>

              {/* Field of Study */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <span className="text-xs font-mono uppercase font-bold text-slate-400 block mb-1">
                  Field of Qualification:
                </span>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {edu.field}
                </p>
              </div>

              {/* Course & Capstone Highlights */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase font-bold text-slate-400 block">
                  Academic Milestones & Specializations:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {edu.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
