import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  bgClass?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, bgClass = 'bg-background', className = '' }: SectionProps) {
  return (
    <div className={`w-screen ${bgClass}`}>
      <section id={id} className={`max-w-5xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 scroll-mt-20 ${className}`}>
        {children}
      </section>
    </div>
  );
}
