import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'highlight' | 'raised' | 'glow' ;
  className?: string;
  interactive?: boolean;
}

export default function Card({
  children,
  variant = 'default',
  className = '',
  interactive = true
}: CardProps) {
  const base = `group rounded-md border p-6 transition duration-300`;
  const background = `bg-gradient-to-br from-accent/10 to-accent-secondary/10`;
  const borders = `border-border hover:border-accent/40`;
  const shadow = `shadow-md`;

  const variantClasses: Record<NonNullable<CardProps['variant']>, string> = {
    default: `${base} ${borders} ${background} ${shadow} ${
      interactive ? 'hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/10' : ''
    }`,

    highlight: `${base} border-accent/40 hover:border-accent/80 bg-gradient-to-r from-accent/40 to-accent-secondary/40 ${shadow} ${
      interactive ? 'hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/15' : ''
    }`,

    raised: `${base} ${borders} ${background} ${shadow} ${
      interactive ? 'hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/15' : ''
    }`,

    glow: `${base} ${borders} ${background} ${shadow} ${
      interactive ? 'hover:bg-gradient-to-br hover:from-accent/30 hover:to-accent-secondary/30 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(137,180,250,0.25)]' : ''
    }`,
  };

  return (
    <div className={`${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}
