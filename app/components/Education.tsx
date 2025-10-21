import SectionHeading from './ui/SectionHeading';
import Section from './ui/Section';
import Card from './ui/Card';
import Tag from './ui/Tag';
import Text from './ui/Text';
import Subtitle from './ui/Subtitle';
import TagContainer from './ui/TagContainer';

export default function Education() {
  return (
    <Section id="education">
      <SectionHeading number="01">Education</SectionHeading>
      <div className="space-y-6">
        <Card>
          <div className="flex justify-between items-start mb-2">
            <Subtitle>University of Bristol</Subtitle>
            <Text variant="small">2022 - 2026</Text>
          </div>
          <Text variant="highlight" className="mb-2">Computer Science (MEng)</Text>
          <Text variant="muted">First Class Honours (Expected)</Text>
          <TagContainer className="mt-4">
            <Tag className="text-xs">Deep Learning</Tag>
            <Tag className="text-xs">Computer Vision</Tag>
            <Tag className="text-xs">Computer Architecture</Tag>
            <Tag className="text-xs">Cognitive AI</Tag>
          </TagContainer>
        </Card>
        <Card>
          <div className="flex justify-between items-start mb-2">
            <Subtitle>Brighton, Hove & Sussex Sixth-Form College</Subtitle>
            <Text variant="small">2020 - 2022</Text>
          </div>
          <Text variant="highlight" className="mb-2">Mathematics (A*) - Further Maths (A*) - Computer Science (A*) - Physics (A)</Text>
          <Text variant="muted">A-Levels</Text>
        </Card>
        <Card>
          <div className="flex justify-between items-start mb-2">
            <Subtitle>Downlands Community School</Subtitle>
            <Text variant="small">2015 - 2020</Text>
          </div>
          <Text variant="highlight" className="mb-2">Including Maths, Further Maths, Computer Science</Text>
          <Text variant="muted">GCSEs</Text>
        </Card>
      </div>
    </Section>
  );
}
