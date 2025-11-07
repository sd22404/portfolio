import { ReactNode } from 'react';
import Link from './Link';

interface ButtonProps {
  href?: string;
  external?: boolean;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'glow';
  children: ReactNode;
  className?: string;
}

export default function Button({ 
  href, 
  external,
  onClick, 
  variant = 'primary', 
  children, 
  className = '' 
}: ButtonProps) {
  const baseClasses = `px-6 py-3 font-semibold`;
  
  const variantClasses = {
    primary: `shadow-md text-background bg-gradient-to-r from-accent to-accent-secondary 
      hover:shadow-lg hover:shadow-accent/30 hover:scale-105 hover:brightness-110 
      active:shadow-md active:brightness-100
      focus-visible:text-background`,
    secondary: `shadow-md border border-border bg-background-lighter/50
      hover:border-accent hover:text-accent hover:bg-background-lighter hover:shadow-md hover:shadow-accent/20 hover:-translate-y-0.5
      active:translate-y-0`,
    ghost: `border border-transparent hover:border-border/50 hover:bg-background-lighter/80 hover:text-accent-quaternary
      hover:shadow-sm transition-all`,
    glow: `relative drop-shadow-lg text-background bg-gradient-to-r from-accent to-accent-secondary overflow-hidden
      hover:shadow-[0_0_20px_rgba(137,180,250,0.4)] hover:scale-105 
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-500
      hover:before:translate-x-[100%]
      focus-visible:text-background`
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      (href ? (
      <Link href={href} variant='button' className={classes} external={external}>
        {children}
      </Link>
      ) : (
      <button className={classes} onClick={onClick}>
        {children}
      </button>)
    ));
  }
}
