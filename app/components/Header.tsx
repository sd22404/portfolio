import Link from './ui/Link';

export type LinkItem = {
    href: string;
    label: string;
    variant?: 'nav' | 'project';
}

export default function Header({ links }: { links: LinkItem[] }) {
  return (
    <header className="border-b border-border/50 bg-background-lighter/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <h1 className="font-mono text-xl font-bold bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
            &lt;portfolio /&gt;
          </h1>
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
