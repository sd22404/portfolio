import { ReactNode } from 'react';
import { default as NextLink } from 'next/link';

interface LinkProps {
  href: string;
  external?: boolean;
  children: ReactNode;
  variant?: 'text' | 'underline' | 'button';
  className?: string;
}

export default function Link({ href, external, children, variant = 'text', className = '' }: LinkProps) {
  const base = `font-mono text-sm rounded transition-all duration-300
    active:scale-95 focus-visible:text-accent-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background`;

  const variantClasses: Record<'text' | 'underline' | 'button', string> = {
    'text': "hover:text-accent-tertiary",
    'button': "",
    'underline': "text-accent-tertiary hover:underline",
  };

  return (
    external ? (
    <a href={href} className={`${base} ${variantClasses[variant]} ${className}`} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
    ) : (
    <NextLink href={href} className={`${base} ${variantClasses[variant]} ${className}`}>
      {children}
    </NextLink>
  ));
}
