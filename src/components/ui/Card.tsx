import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glowEffect?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  hoverEffect = true,
  glowEffect = false,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          'rounded-xl border transition-all duration-300',
          'bg-white border-slate-200 text-slate-900 shadow-sm',
          'dark:bg-tech-cardDark dark:border-tech-borderDark dark:text-slate-100',
          hoverEffect && 'hover:shadow-lg hover:border-brand-500/40 dark:hover:border-brand-500/40 hover:-translate-y-1',
          glowEffect && 'dark:shadow-[0_0_20px_rgba(56,189,248,0.1)]',
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};
