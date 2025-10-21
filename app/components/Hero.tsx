import Button from './ui/Button';
import Section from './ui/Section';

export default function Hero() {
  return (
    <Section className="py-20 md:py-32">
      <div className="space-y-6">
        <div className="font-mono text-accent text-sm">$ whoami</div>
        <h2 className="text-5xl md:text-7xl font-bold font-mono drop-shadow-xl">
          Finn<br />
          <span className="bg-gradient-to-r from-blue via-purple to-orange bg-clip-text text-transparent">
            Cooper
          </span>
        </h2>
        <p className="text-foreground-lighter text-lg max-w-2xl font-mono">
          About me...
        </p>
        <div className="flex gap-4 pt-4">
          <Button href="#contact" variant="primary">
            Get in touch
          </Button>
          <Button href="#projects" variant="secondary">
            View work
          </Button>
        </div>
      </div>
    </Section>
  );
}
