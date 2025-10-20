import SectionHeading from './ui/SectionHeading';
import Section from './ui/Section';
import Card from './ui/Card';
import Text from './ui/Text';
import Subtitle from './ui/Subtitle';

export default function Awards() {
  return (
    <Section id="awards">
      <SectionHeading number="05">Awards & Recognition</SectionHeading>
      <div className="space-y-4">
        <Card variant="highlight" className="flex justify-between items-center">
          <div>
            <Subtitle variant="small">Best Innovation Award</Subtitle>
            <Text variant="small">Tech Hackathon 2024</Text>
          </div>
          <span className="text-3xl">🏆</span>
        </Card>
        <Card variant="highlight" className="flex justify-between items-center">
          <div>
            <Subtitle variant="small">AWS Certified Solutions Architect</Subtitle>
            <Text variant="small">Professional Level</Text>
          </div>
          <span className="text-3xl">📜</span>
        </Card>
        <Card variant="highlight" className="flex justify-between items-center">
          <div>
            <Subtitle variant="small">Open Source Contributor</Subtitle>
            <Text variant="small">500+ contributions across major projects</Text>
          </div>
          <span className="text-3xl">⭐</span>
        </Card>
        <Card variant="highlight" className="flex justify-between items-center">
          <div>
            <Subtitle variant="small">Dean's List</Subtitle>
            <Text variant="small">Academic Excellence 2023-2024</Text>
          </div>
          <span className="text-3xl">🎓</span>
        </Card>
      </div>
    </Section>
  );
}
