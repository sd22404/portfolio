import { ReactNode } from 'react';
import { default as NextLink } from 'next/link';

interface LinkProps {
  href: string;
  external?: boolean;
  children: ReactNode;
  variant?: 'text' | 'text-alt' | 'underline' | 'button';
  className?: string;
}

export default function Link({ href, external, children, variant = 'text', className = '' }: LinkProps) {
  const variantClasses: Record<'text' | 'text-alt' | 'underline' | 'button', string> = {
    'text': "hover:text-accent-tertiary transition-all font-mono text-sm",
    'text-alt': "hover:text-accent-quaternary transition-all font-mono text-sm",
    'button': "",
    'underline': "font-mono text-sm text-accent-tertiary hover:underline",
  };

  return (
    external ? (
    <a href={href} className={`${variantClasses[variant]} ${className}`} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
    ) : (
    <NextLink href={href} className={`${variantClasses[variant]} ${className}`}>
      {children}
    </NextLink>
  ));
}
