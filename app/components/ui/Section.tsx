import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`max-w-5xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12 pt-16 sm:pt-20 scroll-mt-20 ${className}`}>
      {children}
    </section>
  );
}
