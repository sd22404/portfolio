import { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  variant?: 'body' | 'small' | 'mono' | 'muted' | 'highlight' | 'medium';
  className?: string;
}

export default function Text({ children, variant = 'body', className = '' }: TextProps) {
  const variantClasses = {
    body: "text-slate-300 font-mono text-sm",
    small: "font-mono text-sm text-slate-400",
    mono: "font-mono",
    muted: "text-slate-400 font-mono text-sm",
    highlight: "font-mono text-cyan-400",
    medium: "font-mono text-slate-300"
  };

  return (
    <p className={`${variantClasses[variant]} ${className}`}>
      {children}
    </p>
  );
}
