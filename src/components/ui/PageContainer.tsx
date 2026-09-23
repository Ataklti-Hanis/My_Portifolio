import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'normal' | 'wide' | 'narrow';
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className = '',
  size = 'normal'
}) => {
  const maxWidths = {
    narrow: 'max-w-4xl',
    normal: 'max-w-7xl',
    wide: 'max-w-8xl',
  };

  return (
    <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${maxWidths[size]} ${className}`}>
      {children}
    </div>
  );
};
