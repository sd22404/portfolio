import { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  variant?: 'nav' | 'text' | 'project';
  className?: string;
}

export default function Link({ href, children, variant = 'text', className = '' }: LinkProps) {
  const variantClasses = {
    nav: "hover:text-cyan-400 transition-colors font-mono text-sm",
    text: "hover:text-cyan-400 transition-colors font-mono text-sm",
    project: "font-mono text-sm text-cyan-400 hover:underline"
  };

  return (
    <a href={href} className={`${variantClasses[variant]} ${className}`}>
      {children}
    </a>
  );
}
