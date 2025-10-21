import { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  variant?: 'nav' | 'text' | 'project';
  className?: string;
}

export default function Link({ href, children, variant = 'text', className = '' }: LinkProps) {
  const variantClasses = {
    nav: "hover:text-accent transition-colors font-mono text-sm",
    text: "hover:text-accent transition-colors font-mono text-sm",
    project: "font-mono text-sm text-accent-tertiary hover:underline"
  };

  return (
    <a href={href} className={`${variantClasses[variant]} ${className}`}>
      {children}
    </a>
  );
}
