import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ExternalLink, Heart } from 'lucide-react';
import { profileData } from '../../data/profile';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white font-mono font-bold text-xl shadow-lg shadow-brand-500/20">
                AH
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white tracking-tight">
                  {profileData.name}
                </h3>
                <p className="text-xs text-brand-400 font-mono">
                  {profileData.title}
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Computer Science graduate specializing in enterprise network infrastructure, system administration, and modern full-stack web application development.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-800 hover:bg-brand-600 text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-800 hover:bg-brand-600 text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.socialLinks.email}
                className="p-2.5 rounded-lg bg-slate-800 hover:bg-brand-600 text-slate-300 hover:text-white transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={profileData.socialLinks.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-800 hover:bg-brand-600 text-slate-300 hover:text-white transition-colors"
                aria-label="Existing Portfolio"
                title="Current Vercel Portfolio"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/about" className="hover:text-brand-400 transition-colors">About Profile</Link></li>
              <li><Link to="/experience" className="hover:text-brand-400 transition-colors">Experience Timeline</Link></li>
              <li><Link to="/network" className="hover:text-brand-400 transition-colors">Network Infrastructure</Link></li>
              <li><Link to="/projects" className="hover:text-brand-400 transition-colors">Featured Projects</Link></li>
              <li><Link to="/research" className="hover:text-brand-400 transition-colors">Poultry AI Research</Link></li>
            </ul>
          </div>

          {/* Col 3: Knowledge & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Connect & Learn
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/education" className="hover:text-brand-400 transition-colors">Education (Mekelle Univ.)</Link></li>
              <li><Link to="/certifications" className="hover:text-brand-400 transition-colors">Certifications</Link></li>
              <li><Link to="/resume" className="hover:text-brand-400 transition-colors">Download Resume</Link></li>
              <li><Link to="/blog" className="hover:text-brand-400 transition-colors">Technical Blog</Link></li>
              <li><Link to="/contact" className="hover:text-brand-400 transition-colors">Get In Touch</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Ataklti Hanis. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built with React + TypeScript</span>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <span className="flex items-center gap-1 text-slate-400">
              Designed with precision <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
