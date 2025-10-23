import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'highlight' | 'raised';
  outerClassName?: string;
  innerClassName?: string;
}

export default function Card({ children, variant = 'default', outerClassName = '', innerClassName = '' }: CardProps) {
  const wrapperClasses = {
    default: "group rounded-[8px] p-[1px] transition-all bg-border/50 hover:bg-gradient-to-r hover:from-accent hover:to-accent-secondary",
    highlight: "group rounded-[8px] p-[1px] bg-accent/30 hover:bg-gradient-to-r hover:from-accent hover:to-accent-secondary",
    raised: "group rounded-[8px] p-[1px] transition-all bg-border/50 hover:bg-gradient-to-r hover:from-accent hover:to-accent-secondary hover:scale-105"
  };

  const innerClasses = {
    default: "drop-shadow-xl bg-gradient-to-br from-background to-background-lighter rounded-[7px] p-6 transition-colors h-full",
    highlight: "relative drop-shadow-xl bg-background rounded-[7px] p-5 h-full before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-r before:from-accent/20 before:to-accent-secondary/20 before:pointer-events-none",
    raised: "drop-shadow-2xl bg-gradient-to-br from-background to-background-lighter rounded-[7px] p-6 h-full"
  };

  return (
    <div className={`${wrapperClasses[variant]} ${outerClassName}`}>
      <div className={`${innerClasses[variant]} ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
}
