import { ReactNode } from 'react';

interface SubtitleProps {
  children: ReactNode;
  variant?: 'large' | 'medium' | 'small';
  className?: string;
}

export default function Subtitle({ children, variant = 'large', className = '' }: SubtitleProps) {
  const variantClasses = {
    large: "font-mono font-bold text-xl",
    medium: "font-mono font-bold text-lg text-cyan-400",
    small: "font-mono font-bold"
  };

  return (
    <h4 className={`${variantClasses[variant]} ${className}`}>
      {children}
    </h4>
  );
}
