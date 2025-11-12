import { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  variant: 'body' | 'small' | 'date' | 'mono' | 'muted' | 'highlight' | 'medium' | 'ornament' | 'ornament-alt';
  className?: string;
}

export default function Text({ children, variant = 'body', className = '' }: TextProps) {
  const variantClasses = {
    body: "text-foreground font-mono text-sm",
    small: "font-mono text-sm text-foreground-darker",
    date: "ml-6 font-mono text-sm text-muted whitespace-nowrap",
    mono: "font-mono",
    muted: "text-muted font-mono text-sm",
    highlight: "font-mono text-accent",
    medium: "font-mono text-foreground",
    ornament: "text-accent-tertiary font-mono text-sm select-none",
    'ornament-alt': "text-accent-quaternary font-mono text-sm select-none",
  };

  const isDecorative = variant === 'ornament' || variant === 'ornament-alt';

  return (
    <p className={`${variantClasses[variant]} ${className}`} aria-hidden={isDecorative || undefined}>
      {children}
    </p>
  );
}
