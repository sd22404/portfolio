import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'highlight' | 'project';
  className?: string;
}

export default function Card({ children, variant = 'default', className = '' }: CardProps) {
  const variantClasses = {
    default: "bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg p-6 hover:border-cyan-500/50 transition-colors",
    highlight: "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-5",
    project: "bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg p-6 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105"
  };

  return (
    <div className={`${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}
