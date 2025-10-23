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
      <Card outerClassName="text-center max-w-2xl mx-auto">
        <Text variant="medium" className="mb-6">
          Contact me...
        </Text>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="mailto:finlay.j.cooper137@gmail.com" variant="primary">
            Send Email
          </Button>
          <div className="flex gap-4">
            <Link href="https://github.com/sd22404" variant="text">GitHub</Link>
            <Link href="https://linkedin.com/in/finlay-cooper" variant="text">LinkedIn</Link>
          </div>
        </div>
      </Card>
    </Section>
  );
}
