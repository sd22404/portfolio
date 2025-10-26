export default function Underline({ className = '' }: {className?: string}) {
  return (
    <div className={`h-1 bg-foreground w-20 ml-30 ${className}`} />
  );
}
