import { ReactNode } from 'react';
import Text from './Text';
import Underline from './Underline';

interface SectionHeadingProps {
  number?: string;
  children: ReactNode;
  className?: string;
}

export default function SectionHeading({ number, children, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <div className="flex items-center gap-3 mb-2">
        {number && <Text variant="ornament">
          [{number}]
        </Text>}
        <h3 className="text-3xl font-bold font-mono text-foreground">
          {children}
        </h3>
      </div>
      <Underline />
    </div>
  );
}
