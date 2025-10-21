import Link from './ui/Link';

export default function Header() {
  return (
  <header className="border-b border-border/50 bg-background-lighter/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <h1 className="font-mono text-xl font-bold bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
            &lt;portfolio /&gt;
          </h1>
          <div className="flex gap-6">
            <Link href="#about" variant="nav">about</Link>
            <Link href="#experience" variant="nav">experience</Link>
            <Link href="#projects" variant="nav">projects</Link>
            <Link href="#contact" variant="nav">contact</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
