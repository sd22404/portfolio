import { ReactNode } from 'react';

interface BulletListProps {
  items: string[] | ReactNode[];
  className?: string;
}

export default function BulletList({ items, className = '' }: BulletListProps) {
  return (
  <ul className={`space-y-2 text-foreground-lighter font-mono text-sm ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex gap-2">
          <span className="text-accent-tertiary">▹</span>
          {<span>{item}</span>}
        </li>
      ))}
    </ul>
  );
}
