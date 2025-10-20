import { ReactNode } from 'react';

interface ButtonProps {
  href?: string;
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  className?: string;
}

export default function Button({ href, variant = 'primary', children, className = '' }: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded font-mono text-sm font-semibold transition-all";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/50",
    secondary: "border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes}>
      {children}
    </button>
  );
}
