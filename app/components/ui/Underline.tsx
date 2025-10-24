export default function Underline({ className = '' }: {className?: string}) {
  return (
    <div className={`h-px bg-accent/60 w-1/3 ml-10 ${className}`} />
  );
}
