import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Network, Code, FileText, User, Briefcase, Award, GraduationCap, Mail, BookOpen, Layers } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/', icon: <User className="w-4 h-4" /> },
    { name: 'About', path: '/about', icon: <User className="w-4 h-4" /> },
    { name: 'Experience', path: '/experience', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Skills', path: '/skills', icon: <Code className="w-4 h-4" /> },
    { name: 'Network Eng.', path: '/network', icon: <Network className="w-4 h-4" /> },
    { name: 'Projects', path: '/projects', icon: <Layers className="w-4 h-4" /> },
    { name: 'Research', path: '/research', icon: <BookOpen className="w-4 h-4" /> },
    { name: 'Education', path: '/education', icon: <GraduationCap className="w-4 h-4" /> },
    { name: 'Certifications', path: '/certifications', icon: <Award className="w-4 h-4" /> },
    { name: 'Resume', path: '/resume', icon: <FileText className="w-4 h-4" /> },
    { name: 'Blog', path: '/blog', icon: <BookOpen className="w-4 h-4" /> },
    { name: 'Contact', path: '/contact', icon: <Mail className="w-4 h-4" /> },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-tech-bgDark/90 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80 dark:border-slate-800/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Name */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center text-white font-mono font-bold text-lg shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
            AH
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-slate-900 dark:text-white tracking-tight text-base sm:text-lg group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
              ATAKLTI HANIS
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400">
              Network Engineer • Full-Stack
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  active
                    ? 'bg-brand-500/10 text-brand-600 dark:bg-brand-400/10 dark:text-brand-400 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Section: Theme Toggle & Mobile Menu Trigger */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white/95 dark:bg-tech-cardDark/95 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-1 shadow-2xl">
          <div className="grid grid-cols-2 gap-1.5 pt-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                    active
                      ? 'bg-brand-600 text-white font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
