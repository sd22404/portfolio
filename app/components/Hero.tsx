import Button from './ui/Button';
import Section from './ui/Section';
import TerminalBlock from './ui/TerminalBlock';
import Text from './ui/Text';

export default function Hero() {
  return (
    <Section id="hero" className="py-20 md:py-32">
      <div className="space-y-12">
        <div className="space-y-2">
          <TerminalBlock variant="prompt">whoami</TerminalBlock>
          <TerminalBlock variant="output">
            <span className='text-muted font-jetbrains-mono'>Finn Cooper</span>
          </TerminalBlock>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold font-mono drop-shadow-xl">
          <span className="text-foreground">Software</span><br />
          <span className="bg-gradient-to-r from-blue via-purple to-orange bg-clip-text text-transparent text-glow">
            Developer
          </span>
        </h1>
        <Text variant="mono" className="text-lg max-w-2xl">
          About me...
        </Text>

        <div className="flex flex-wrap gap-4 pt-4">
          <Button href="/portfolio/CV.pdf" variant="glow" target="_blank" rel="noopener noreferrer">
            Download CV
          </Button>
          <Button href="#projects" variant="secondary">
            View work
          </Button>
          <Button href="#contact" variant="ghost">
            Get in touch
          </Button>
        </div>
      </div>
    </Section>
  );
}
