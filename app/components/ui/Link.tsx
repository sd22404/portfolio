import { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  variant?: 'text' | 'text-alt' | 'underline';
  className?: string;
}

export default function Link({ href, children, variant = 'text', className = '' }: LinkProps) {
  const variantClasses: Record<'text' | 'text-alt' | 'underline', string> = {
    'text': "hover:text-accent-tertiary transition-colors font-mono text-sm",
    'text-alt': "hover:text-accent-quaterniary transition-colors font-mono text-sm",
    'underline': "font-mono text-sm text-accent-tertiary hover:underline",
  };

  return (
    <a href={href} className={`${variantClasses[variant]} ${className}`}>
      {children}
    </a>
  );
}
