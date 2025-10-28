import Text from './ui/Text';
import TerminalBlock from './ui/TerminalBlock';
import Links from './sub/Links';

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background-lighter/50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <TerminalBlock variant="prompt">echo $COPYRIGHT</TerminalBlock>
            <TerminalBlock variant="output" showCursor>
              Built with Next.js & Tailwind CSS | © 2025 Finn Cooper
            </TerminalBlock>
          </div>

          <Links className="flex gap-1 flex-col justify-center items-end" />
          
          {/* <Text variant="highlight" className="ml-auto">
            &lt;/portfolio&gt;
          </Text> */}
        </div>
      </div>
    </footer>
  );
}
