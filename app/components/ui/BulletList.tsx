import { ReactNode } from 'react';
import Text from './Text';

interface BulletListProps {
  items: string[] | ReactNode[];
  className?: string;
}

export default function BulletList({ items, className = '' }: BulletListProps) {
  return (
  <ul className={`space-y-1 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex gap-2">
          <Text variant="ornament-alt">&gt;</Text>
          <Text variant="small">{item}</Text>
        </li>
      ))}
    </ul>
  );
}
