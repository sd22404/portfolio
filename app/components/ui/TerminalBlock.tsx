import { ReactNode } from 'react';
import { ChevronRight } from './Icons';

interface TerminalBlockProps {
  children: ReactNode;
  variant?: 'prompt' | 'output' | 'code';
  className?: string;
  showCursor?: boolean;
}

export default function TerminalBlock({ 
  children, 
  variant = 'prompt', 
  className = '',
  showCursor = false 
}: TerminalBlockProps) {
  const variantClasses = {
    prompt: 'font-jetbrains-mono text-accent-tertiary',
    output: 'font-jetbrains-mono text-foreground-darker',
    code: 'code-block'
  };

  const prefix = {
    prompt: <span className="select-none">$ </span>,
    output: (
      <span className="text-muted select-none inline-flex w-[2ch] align-middle">
        <ChevronRight />
      </span>
    ),
    code: null
  };

  return (
    <div className={`${variantClasses[variant]} ${variant !== 'code' ? 'hang-prompt' : ''} ${className}`}>
      {prefix[variant]}
      <span className={showCursor ? 'cursor-blink' : ''}>{children}</span>
    </div>
  );
}
