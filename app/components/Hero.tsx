import Button from './ui/Button';
import Section from './ui/Section';

export default function Hero() {
  return (
    <Section className="py-20 md:py-32">
      <div className="space-y-6">
        <div className="font-mono text-cyan-400 text-sm">$ whoami</div>
        <h2 className="text-5xl md:text-7xl font-bold font-mono">
          Software<br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Engineer
          </span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl font-mono">
          Versatile developer crafting elegant solutions across the full stack.
          Passionate about clean code, scalable architecture, and innovative problem-solving.
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
