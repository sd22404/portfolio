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
      <div className="grid sm:grid-cols-2 2xl:grid-cols-4 gap-6">
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
            <Tag>Rust</Tag>
          </TagContainer>
        </Card>

        <Card variant="glow">
          <div className="flex items-center gap-2 mb-4">
            <Text variant="ornament-alt">🧠</Text>
            <Subtitle variant="medium">Graphics & AI</Subtitle>
          </div>
          <TagContainer>
            <Tag>Unity</Tag>
            <Tag>SDL</Tag>
            <Tag>OpenCV</Tag>
            <Tag>PyTorch</Tag>
            <Tag>TensorFlow</Tag>
          </TagContainer>
        </Card>

        <Card variant="glow">
          <div className="flex items-center gap-2 mb-4">
            <Text variant="ornament-alt">⚡</Text>
            <Subtitle variant="medium">Web & App Frameworks</Subtitle>
          </div>
          <TagContainer>
            <Tag>Spring Boot</Tag>
            <Tag>Tauri</Tag>
            <Tag>React</Tag>
            <Tag>Next.js</Tag>
            <Tag>Tailwind CSS</Tag>
          </TagContainer>
        </Card>

        <Card variant="glow">
          <div className="flex items-center gap-2 mb-4">
            <Text variant="ornament-alt">⚙</Text>
            <Subtitle variant="medium">Tools & Cloud</Subtitle>
          </div>
          <TagContainer>
            <Tag>MongoDB</Tag>
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
