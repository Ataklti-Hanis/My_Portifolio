import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  className,
  asLink = false,
  href,
  target,
  rel,
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

  const variants = {
    primary: 'bg-brand-600 hover:bg-brand-500 text-white shadow-md shadow-brand-500/20 active:scale-[0.98]',
    secondary: 'bg-slate-200 hover:bg-slate-300 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-100 active:scale-[0.98]',
    outline: 'border border-slate-300 dark:border-slate-700 hover:border-brand-500 text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 bg-transparent',
    ghost: 'hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white',
    danger: 'bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-500/20',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5',
  };

  const classes = twMerge(clsx(baseStyles, variants[variant], sizes[size], className));

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-block">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-block">{icon}</span>}
    </>
  );

  if (asLink && href) {
    if (href.startsWith('#')) {
      return (
        <a href={href} className={classes} target={target} rel={rel}>
          {content}
        </a>
      );
    }
    return (
      <a href={href} className={classes} target={target || '_blank'} rel={rel || 'noopener noreferrer'}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {content}
    </button>
  );
};
