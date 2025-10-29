import TerminalBlock from './ui/TerminalBlock';
import Links from './sub/Links';

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background-lighter/50 py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between gap-6">
          <div className="space-y-2">
            <TerminalBlock variant="prompt">echo $COPYRIGHT</TerminalBlock>
            <TerminalBlock variant="output" showCursor>
              Built with Next.js & <span className="whitespace-nowrap">Tailwind CSS</span> | <span className="whitespace-nowrap">© 2025</span> <span className="whitespace-nowrap">Finn Cooper</span>
            </TerminalBlock>
          </div>

          <Links className="flex gap-1 flex-col justify-center items-end" />
        </div>
      </div>
    </footer>
  );
}
