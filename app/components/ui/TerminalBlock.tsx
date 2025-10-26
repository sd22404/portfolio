import { ReactNode } from 'react';

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
    output: 'font-jetbrains-mono text-foreground-lighter',
    code: 'code-block'
  };

  const prefix = {
    prompt: <span className="select-none">$ </span>,
    output: <span className="text-muted select-none">› </span>,
    code: null
  };

  return (
    <div className={`${variantClasses[variant]} ${className}`}>
      {prefix[variant]}
      <span className={showCursor ? 'cursor-blink' : ''}>{children}</span>
    </div>
  );
}
