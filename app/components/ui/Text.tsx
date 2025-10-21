import { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  variant?: 'body' | 'small' | 'mono' | 'muted' | 'highlight' | 'medium';
  className?: string;
}

export default function Text({ children, variant = 'body', className = '' }: TextProps) {
  const variantClasses = {
    body: "text-foreground font-mono text-sm",
    small: "font-mono text-sm text-foreground-lighter",
    mono: "font-mono",
    muted: "text-muted font-mono text-sm",
    highlight: "font-mono text-accent",
    medium: "font-mono text-foreground"
  };

  return (
    <p className={`${variantClasses[variant]} ${className}`}>
      {children}
    </p>
  );
}
