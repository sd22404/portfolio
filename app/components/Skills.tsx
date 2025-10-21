import SectionHeading from './ui/SectionHeading';
import Section from './ui/Section';
import Card from './ui/Card';
import Tag from './ui/Tag';
import Subtitle from './ui/Subtitle';
import TagContainer from './ui/TagContainer';

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading number="04">Skills & Technologies</SectionHeading>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <Subtitle variant="medium" className="mb-4">Languages</Subtitle>
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

        <Card>
          <Subtitle variant="medium" className="mb-4">Frameworks & Libraries</Subtitle>
          <TagContainer>
            <Tag>Unity</Tag>
            <Tag>PyTorch</Tag>
            <Tag>OpenCV</Tag>
            <Tag>Spring Boot</Tag>
            <Tag>MongoDB</Tag>
            <Tag>React</Tag>
          </TagContainer>
        </Card>

        <Card>
          <Subtitle variant="medium" className="mb-4">Tools & Cloud</Subtitle>
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
