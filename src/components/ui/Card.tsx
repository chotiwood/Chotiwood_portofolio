'use client';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function Card({ 
  children, 
  className = '', 
  hover = true,
  onMouseEnter,
  onMouseLeave
}: CardProps) {
  const baseStyles = 'rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6';
  const hoverStyles = hover ? 'hover:border-black dark:hover:border-white transition-all duration-300' : '';

  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}
