import React, { useState } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { ProjectCard } from '../project/ProjectCard';
import { projectsData } from '../../data/projects';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Network Engineering', 'Full Stack', 'Capstone Project', 'AI / Research'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Featured Engineering Work"
          title="Full-Stack & Network Projects"
          subtitle="Real-world organizational software, capstone engineering projects, and research frameworks."
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
