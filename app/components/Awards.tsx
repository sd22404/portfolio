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
        <Card variant="highlight" className="flex justify-between items-center w-full">
          <div>
            <Subtitle variant="small">Best Game Runner Up</Subtitle>
            <Text variant="small">CSS GameJam 2023</Text>
          </div>
          <span className="text-3xl z-10">🏆</span>
        </Card>
        <Card variant="highlight" className="flex justify-between items-center w-full">
          <div>
            <Subtitle variant="small">People's Choice</Subtitle>
            <Text variant="small">CSS GameJam 2024</Text>
          </div>
          <span className="text-3xl z-10">📜</span>
        </Card>
        <Card variant="highlight" className="flex justify-between items-center w-full">
          <div>
            <Subtitle variant="small">Duke of Edinburgh's Silver Award</Subtitle>
            <Text variant="small">Gold in Progress</Text>
          </div>
          <span className="text-3xl z-10">⭐</span>
        </Card>
        <Card variant="highlight" className="flex justify-between items-center w-full">
          <div>
            <Subtitle variant="small">Karate 2nd Kyu</Subtitle>
            <Text variant="small">Brown Belt</Text>
          </div>
          <span className="text-3xl z-10">🎓</span>
        </Card>
      </div>
    </Section>
  );
}
