import { ReactNode } from 'react';

interface ButtonProps {
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'glow';
  children: ReactNode;
  className?: string;
}

export default function Button({ 
  href, 
  target, 
  rel, 
  onClick, 
  variant = 'primary', 
  children, 
  className = '' 
}: ButtonProps) {
  const baseClasses = `px-6 py-3 rounded font-mono text-sm font-semibold transition-all duration-300 
    active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background`;
  
  const variantClasses = {
    primary: `shadow-md text-background bg-gradient-to-r from-accent to-accent-secondary 
      hover:shadow-lg hover:shadow-accent/30 hover:scale-105 hover:brightness-110 
      active:shadow-md active:brightness-100`,
    secondary: `shadow-md border border-border bg-background-lighter/50
      hover:border-accent hover:text-accent hover:bg-background-lighter hover:shadow-md hover:shadow-accent/20 hover:-translate-y-0.5
      active:translate-y-0`,
    ghost: `border border-transparent hover:border-border/50 hover:bg-background-lighter/80
      hover:shadow-sm transition-all`,
    glow: `relative drop-shadow-lg text-background bg-gradient-to-r from-accent to-accent-secondary overflow-hidden
      hover:shadow-[0_0_20px_rgba(137,180,250,0.4)] hover:scale-105 
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-500
      hover:before:translate-x-[100%]`
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      (href ? (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
      </a>
      ) : (
      <button className={classes} onClick={onClick}>
        {children}
      </button>)
    ));
  }
}
