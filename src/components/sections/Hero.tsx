import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ExternalLink, ArrowRight, Download, Send, Network } from 'lucide-react';
import { profileData } from '../../data/profile';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { NetworkArchitectureCanvas } from '../visual/NetworkArchitectureCanvas';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 dark:bg-brand-500/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2">
              <Badge variant="brand" icon={<Network className="w-3.5 h-3.5" />}>
                ICT Network Engineer & Full-Stack Developer
              </Badge>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                📍 {profileData.location}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-cyan-500">{profileData.name}</span>
            </h1>

            <h2 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 font-mono">
              {profileData.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed max-w-2xl font-normal">
              {profileData.supportingText}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link to="/projects">
                <Button variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                  View My Projects
                </Button>
              </Link>
              <Link to="/resume">
                <Button variant="secondary" size="lg" icon={<Download className="w-4 h-4" />}>
                  Download CV
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" icon={<Send className="w-4 h-4" />}>
                  Contact Me
                </Button>
              </Link>
            </div>

            {/* Social / External Links */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400">Profiles:</span>
              <div className="flex items-center gap-3">
                <a
                  href={profileData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors"
                >
                  <GithubIcon className="w-4 h-4" /> GitHub
                </a>
                <a
                  href={profileData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" /> LinkedIn
                </a>
                <a
                  href={profileData.socialLinks.email}
                  className="flex items-center gap-1.5 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors"
                >
                  <Mail className="w-4 h-4" /> Email
                </a>
                <a
                  href={profileData.socialLinks.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors"
                  title="Live Vercel Portfolio"
                >
                  <ExternalLink className="w-4 h-4" /> Live Portfolio
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Canvas */}
          <div className="lg:col-span-5 w-full">
            <NetworkArchitectureCanvas />
          </div>
        </div>
      </div>
    </section>
  );
};
