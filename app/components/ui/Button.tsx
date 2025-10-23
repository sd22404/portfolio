import { ReactNode } from 'react';

interface ButtonProps {
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  className?: string;
}

export default function Button({ href, target, rel, onClick, variant = 'primary', children, className = '' }: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded font-mono text-sm font-semibold transition-all";
  
  const variantClasses = {
    primary: "drop-shadow-lg text-background bg-gradient-to-r from-accent to-accent-secondary hover:drop-shadow-accent/50",
    secondary: "drop-shadow-lg border border-border hover:border-accent hover:text-accent transition-colors"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
