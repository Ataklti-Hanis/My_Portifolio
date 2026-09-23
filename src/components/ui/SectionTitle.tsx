import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className
}) => {
  const alignments = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={twMerge(clsx('flex flex-col max-w-3xl mb-12', alignments[align], className))}>
      {badge && (
        <span className="inline-flex items-center px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-brand-600 uppercase rounded-full bg-brand-500/10 dark:bg-brand-400/10 dark:text-brand-400 border border-brand-500/20">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
