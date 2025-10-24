import Text from './ui/Text';
import TerminalBlock from './ui/TerminalBlock';

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background-lighter/50 backdrop-blur-sm py-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <TerminalBlock variant="prompt">echo $COPYRIGHT</TerminalBlock>
            <TerminalBlock variant="output">
              Built with Next.js & Tailwind CSS | © 2025 Finn Cooper
            </TerminalBlock>
          </div>
          
          <Text variant="highlight" className="ml-auto">
            &lt;/portfolio&gt;
          </Text>
        </div>
      </div>
    </footer>
  );
}
