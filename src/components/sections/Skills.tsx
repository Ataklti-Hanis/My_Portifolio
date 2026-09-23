import React, { useState } from 'react';
import { Code2, Layout, Database, Network, Server, HardDrive, Cpu, CheckCircle2 } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { skillCategories } from '../../data/skills';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Network': return <Network className="w-4 h-4" />;
      case 'Server': return <Server className="w-4 h-4" />;
      case 'Code2': return <Code2 className="w-4 h-4" />;
      case 'Layout': return <Layout className="w-4 h-4" />;
      case 'Database': return <Database className="w-4 h-4" />;
      case 'HardDrive': return <HardDrive className="w-4 h-4" />;
      default: return <Cpu className="w-4 h-4" />;
    }
  };

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(c => c.id === activeTab);

  return (
    <section id="skills" className="py-20 bg-slate-100/60 dark:bg-tech-cardDark/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Technical Competencies"
          title="Skills & Technologies Dashboard"
          subtitle="A comprehensive overview of network engineering, system administration, and full-stack software capabilities."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
            }`}
          >
            All Competencies
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {getCategoryIcon(cat.iconName)}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((cat) => (
            <Card key={cat.id} className="p-6 space-y-5 border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    {cat.category}
                  </h3>
                </div>
                <Badge variant="neutral" size="sm">
                  {cat.skills.length} Skills
                </Badge>
              </div>

              {/* Skills Items Badges Grid */}
              <div className="grid grid-cols-1 gap-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-brand-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-500" />
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </span>
                    </div>
                    {skill.level && (
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-brand-500/10 dark:bg-brand-400/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
