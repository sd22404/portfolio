import Link from './ui/Link';

export type LinkItem = {
    href: string;
    label: string;
    variant?: 'text' | 'text-alt' | 'underline';
}

export default function Header({ links = [] as LinkItem[] }) {
  return (
    <header className="border-b border-border/50 bg-background-lighter/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link variant="text-alt" href="/#" className="font-mono text-xl font-bold bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent text-nowrap">
            &lt;portfolio /&gt;
          </Link>
          <div className="flex gap-6">
            {links.map(link =>
              <Link key={link.href} href={link.href} variant={link.variant}>
                {link.label}
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
