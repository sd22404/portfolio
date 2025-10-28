import SectionHeading from './ui/SectionHeading';
import Section from './ui/Section';
import Card from './ui/Card';
import Text from './ui/Text';
import Tag from './ui/Tag';
import Subtitle from './ui/Subtitle';
import TagContainer from './ui/TagContainer';

export default function Skills({bg}: {bg?: string}) {
  return (
    <Section id="skills" bgClass={bg}>
      <SectionHeading number="04">Skills & Technologies</SectionHeading>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card variant="glow">
          <div className="flex items-center gap-2 mb-4">
            <Text variant="ornament-alt">$</Text>
            <Subtitle variant="medium">Languages</Subtitle>
          </div>
          <TagContainer>
            <Tag>TypeScript</Tag>
            <Tag>Python</Tag>
            <Tag>Go</Tag>
            <Tag>Rust</Tag>
            <Tag>Java</Tag>
            <Tag>C++</Tag>
            <Tag>C#</Tag>
          </TagContainer>
        </Card>

        <Card variant="glow">
          <div className="flex items-center gap-2 mb-4">
            <Text variant="ornament-alt">⚡</Text>
            <Subtitle variant="medium">Frameworks & Libs</Subtitle>
          </div>
          <TagContainer>
            <Tag>Unity</Tag>
            <Tag>PyTorch</Tag>
            <Tag>OpenCV</Tag>
            <Tag>SDL</Tag>
            <Tag>Spring Boot</Tag>
            <Tag>MongoDB</Tag>
            <Tag>React</Tag>
          </TagContainer>
        </Card>

        <Card variant="glow">
          <div className="flex items-center gap-2 mb-4">
            <Text variant="ornament-alt">⚙</Text>
            <Subtitle variant="medium">Tools & Cloud</Subtitle>
          </div>
          <TagContainer>
            <Tag>Docker</Tag>
            <Tag>AWS</Tag>
            <Tag>Git</Tag>
            <Tag>CI/CD</Tag>
          </TagContainer>
        </Card>
      </div>
    </Section>
  );
}
