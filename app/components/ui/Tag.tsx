import { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
  variant?: 'default' | 'highlight';
  className?: string;
}

export default function Tag({ children, variant = 'default', className = '' }: TagProps) {
  const variantClasses = {
    default: "px-3 py-1 bg-background-lighter rounded font-mono text-sm",
    highlight: "px-2 py-1 bg-accent/20 text-accent rounded text-xs font-mono"
  };

  return (
    <span className={`${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
