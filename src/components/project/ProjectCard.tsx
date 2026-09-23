import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Layers, Network, Brain, Terminal } from 'lucide-react';
import type { ProjectItem } from '../../types';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { GithubIcon } from '../ui/SocialIcons';

export const ProjectCard: React.FC<{ project: ProjectItem }> = ({ project }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full Stack':
        return <Layers className="w-3.5 h-3.5" />;
      case 'Network Engineering':
        return <Network className="w-3.5 h-3.5" />;
      case 'AI / Research':
        return <Brain className="w-3.5 h-3.5" />;
      default:
        return <Terminal className="w-3.5 h-3.5" />;
    }
  };

  return (
    <Card className="flex flex-col h-full overflow-hidden group border-slate-200 dark:border-slate-800">
      {/* Project Thumbnail Graphic */}
      <div className="relative h-48 w-full bg-slate-900 overflow-hidden flex items-center justify-center p-6">
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30" />

        {/* Dynamic Graphic Placeholder per Category */}
        <div className="relative z-10 flex flex-col items-center text-center space-y-2">
          <div className="p-3 rounded-2xl bg-brand-500/10 text-brand-400 border border-brand-500/20 group-hover:scale-110 transition-transform duration-300">
            {getCategoryIcon(project.category)}
          </div>
          <span className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-widest">
            {project.type}
          </span>
          <h4 className="text-sm font-bold text-white max-w-xs line-clamp-1">
            {project.title}
          </h4>
        </div>

        {/* Category Badge Overlay */}
        <div className="absolute top-3 left-3 z-20">
          <Badge variant="accent" icon={getCategoryIcon(project.category)}>
            {project.category}
          </Badge>
        </div>

        {/* Status Badge Overlay */}
        <div className="absolute top-3 right-3 z-20">
          <Badge
            variant={project.status === 'Completed' ? 'success' : 'brand'}
          >
            {project.status}
          </Badge>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs font-mono text-brand-600 dark:text-brand-400 mt-1 mb-3">
          {project.subtitle}
        </p>

        <p className="text-sm text-slate-800 dark:text-slate-200 line-clamp-3 mb-4 flex-1 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                title="View GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            ) : (
              <button
                disabled
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/50 text-slate-400 dark:text-slate-600 cursor-not-allowed"
                title="GitHub Repository Coming Soon"
              >
                <GithubIcon className="w-4 h-4 opacity-50" />
              </button>
            )}

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                title="View Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <button
                disabled
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/50 text-slate-400 dark:text-slate-600 cursor-not-allowed"
                title="Live Demo Coming Soon"
              >
                <ExternalLink className="w-4 h-4 opacity-50" />
              </button>
            )}
          </div>

          <Link to={`/projects/${project.slug}`}>
            <Button size="sm" variant="primary" icon={<ArrowRight className="w-3.5 h-3.5" />} iconPosition="right">
              Details
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};
