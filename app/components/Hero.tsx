import Links from './sub/Links';
import Button from './ui/Button';
import Section from './ui/Section';
import TerminalBlock from './ui/TerminalBlock';

export default function Hero({bg}: {bg?: string}) {
  return (
    <Section id="hero" bgClass={bg} className="py-20 md:py-32">
      <div className="space-y-12">
        <div>
          <TerminalBlock variant="prompt">whoami</TerminalBlock>
          <h1 className="my-4 text-5xl md:text-7xl font-bold font-mono drop-shadow-xl">
            <span className="text-foreground">Finn</span><br />
            <span className="bg-gradient-to-r from-blue via-purple to-orange bg-clip-text text-transparent">
              Cooper
            </span>
          </h1>
          <TerminalBlock variant="output">
            Full-Stack Developer & Software Engineer.
          </TerminalBlock>
          <TerminalBlock variant="output" showCursor>
            Creating impactful software solutions.
          </TerminalBlock>
        </div>

        <div>
          <Links variant='button' className="py-4 flex gap-2" />
          <div className="flex flex-wrap gap-4">
            <Button href="/portfolio/CV.pdf" variant="glow" external>
              Download CV
            </Button>
            <Button href="#projects" variant="secondary">
              View work
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
