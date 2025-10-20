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
          <Text variant="highlight" className="mb-2">BSc Computer Science</Text>
          <Text variant="muted">First Class Honours (Expected)</Text>
          <TagContainer className="mt-4">
            <Tag className="text-xs">Algorithms</Tag>
            <Tag className="text-xs">Machine Learning</Tag>
            <Tag className="text-xs">Software Engineering</Tag>
            <Tag className="text-xs">Databases</Tag>
          </TagContainer>
        </Card>
      </div>
    </Section>
  );
}
