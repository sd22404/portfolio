import SectionHeading from './ui/SectionHeading';
import Section from './ui/Section';
import Card from './ui/Card';
import Button from './ui/Button';
import Link from './ui/Link';
import Text from './ui/Text';

export default function Contact() {
  return (
    <Section id="contact" className="mb-20">
      <SectionHeading number="06">Get In Touch</SectionHeading>
      <Card className="text-center max-w-2xl mx-auto">
        <Text variant="medium" className="mb-6">
          I'm always open to discussing new opportunities, interesting projects, or potential collaborations.
          Feel free to reach out!
        </Text>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="mailto:hello@example.com" variant="primary">
            Send Email
          </Button>
          <div className="flex gap-4">
            <Link href="https://github.com" variant="text">GitHub</Link>
            <Link href="https://linkedin.com" variant="text">LinkedIn</Link>
            <Link href="https://twitter.com" variant="text">Twitter</Link>
          </div>
        </div>
      </Card>
    </Section>
  );
}
