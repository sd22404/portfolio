export default function Underline({ className = '' }: {className?: string}) {
  return (
    <div className={`h-1 bg-foreground w-25 ml-15 ${className}`} />
  );
}
