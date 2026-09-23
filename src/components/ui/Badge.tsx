import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'brand' | 'accent' | 'neutral' | 'outline' | 'success' | 'warning';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'brand',
  size = 'sm',
  className,
  icon
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full transition-colors';
  
  const variants = {
    brand: 'bg-brand-500/10 text-brand-600 dark:bg-brand-400/10 dark:text-brand-400 border border-brand-500/20',
    accent: 'bg-cyan-500/10 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300 border border-cyan-500/20',
    neutral: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700',
    outline: 'bg-transparent text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-700',
    success: 'bg-emerald-500/10 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-400 border border-emerald-500/20',
    warning: 'bg-amber-500/10 text-amber-700 dark:bg-amber-400/10 dark:text-amber-400 border border-amber-500/20',
  };

  const sizes = {
    sm: 'text-xs px-2.5 py-0.5 gap-1',
    md: 'text-sm px-3 py-1 gap-1.5',
  };

  return (
    <span className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}>
      {icon && <span className="inline-block">{icon}</span>}
      {children}
    </span>
  );
};
