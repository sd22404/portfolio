import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`max-w-5xl mx-auto px-6 pb-12 pt-20 ${className}`}>
      {children}
    </section>
  );
}
