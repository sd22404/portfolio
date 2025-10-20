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
            <Tag>JavaScript/TypeScript</Tag>
            <Tag>Python</Tag>
            <Tag>Go</Tag>
            <Tag>Rust</Tag>
            <Tag>Java</Tag>
            <Tag>C++</Tag>
            <Tag>SQL</Tag>
          </TagContainer>
        </Card>

        <Card>
          <Subtitle variant="medium" className="mb-4">Frameworks</Subtitle>
          <TagContainer>
            <Tag>React/Next.js</Tag>
            <Tag>Node.js</Tag>
            <Tag>FastAPI</Tag>
            <Tag>Django</Tag>
            <Tag>Spring Boot</Tag>
            <Tag>Express</Tag>
          </TagContainer>
        </Card>

        <Card>
          <Subtitle variant="medium" className="mb-4">Tools & Cloud</Subtitle>
          <TagContainer>
            <Tag>Docker</Tag>
            <Tag>Kubernetes</Tag>
            <Tag>AWS</Tag>
            <Tag>GCP</Tag>
            <Tag>Git</Tag>
            <Tag>CI/CD</Tag>
            <Tag>PostgreSQL</Tag>
          </TagContainer>
        </Card>
      </div>
    </Section>
  );
}
