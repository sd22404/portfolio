import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  bgColour?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, bgColour = 'background', className = '' }: SectionProps) {
  return (
    <div className={`w-screen bg-${bgColour}`}>
      <section id={id} className={`max-w-5xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-20 sm:pb-24 scroll-mt-20 ${className}`}>
        {children}
      </section>
    </div>
  );
}
