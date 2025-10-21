import { ReactNode } from 'react';

interface SectionHeadingProps {
  number: string;
  children: ReactNode;
  className?: string;
}

export default function SectionHeading({ number, children, className = '' }: SectionHeadingProps) {
  return (
    <h3 className={`text-3xl font-bold font-mono mb-8 flex items-center gap-3 ${className}`}>
    {/* <span className="text-[var(--color-accent-secondary)]">{number}.</span> {children} */}
    <span className="text-foreground">{children}</span>
    </h3>
  );
}
