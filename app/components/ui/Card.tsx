import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'highlight' | 'raised' | 'glow';
  outerClassName?: string;
  innerClassName?: string;
  interactive?: boolean;
}

export default function Card({ 
  children, 
  variant = 'default', 
  outerClassName = '', 
  innerClassName = '',
  interactive = true 
}: CardProps) {
  const wrapperClasses = {
    default: `group rounded-[8px] p-[1px] transition-all duration-300 bg-border/50 
      ${interactive ? 'hover:bg-gradient-to-r hover:from-accent hover:to-accent-secondary hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/10' : ''}`,
    highlight: `group rounded-[8px] p-[1px] transition-all duration-300 bg-accent/30 
      ${interactive ? 'hover:bg-gradient-to-r hover:from-accent hover:to-accent-secondary hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20' : ''}`,
    raised: `group rounded-[8px] p-[1px] transition-all duration-300 bg-border/50 
      ${interactive ? 'hover:bg-gradient-to-r hover:from-accent hover:to-accent-secondary hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/15' : ''}`,
    glow: `group rounded-[8px] p-[1px] transition-all duration-300 bg-border/50 
      ${interactive ? 'hover:bg-gradient-to-r hover:from-accent hover:to-accent-secondary hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(137,180,250,0.3)]' : ''}`
  };

  const innerClasses = {
    default: `drop-shadow-xl bg-gradient-to-br from-background to-background-lighter rounded-[7px] p-6 transition-all duration-300 h-full
      ${interactive ? 'group-hover:from-background-lighter group-hover:to-background' : ''}`,
    highlight: `relative drop-shadow-xl bg-background rounded-[7px] p-5 h-full transition-all duration-300
      before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-r before:from-accent/20 before:to-accent-secondary/20 before:pointer-events-none before:transition-opacity before:duration-300
      ${interactive ? 'group-hover:before:from-accent/30 group-hover:before:to-accent-secondary/30' : ''}`,
    raised: `drop-shadow-2xl bg-gradient-to-br from-background to-background-lighter rounded-[7px] p-6 h-full transition-all duration-300
      ${interactive ? 'group-hover:drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]' : ''}`,
    glow: `relative drop-shadow-xl bg-gradient-to-br from-background to-background-lighter rounded-[7px] p-6 h-full transition-all duration-300 overflow-hidden
      before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-r before:from-accent/10 before:to-accent-secondary/10 before:opacity-0 before:transition-opacity before:duration-300 before:pointer-events-none
      ${interactive ? 'group-hover:before:opacity-100' : ''}`
  };

  return (
    <div className={`${wrapperClasses[variant]} ${outerClassName}`}>
      <div className={`${innerClasses[variant]} ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
}
