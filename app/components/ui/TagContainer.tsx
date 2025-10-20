import { ReactNode } from 'react';

interface TagContainerProps {
  children: ReactNode;
  className?: string;
}

export default function TagContainer({ children, className = '' }: TagContainerProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {children}
    </div>
  );
}
