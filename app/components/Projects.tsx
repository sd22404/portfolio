import SectionHeading from './ui/SectionHeading';
import Section from './ui/Section';
import Card from './ui/Card';
import Tag from './ui/Tag';
import Link from './ui/Link';
import Text from './ui/Text';
import Subtitle from './ui/Subtitle';
import TagContainer from './ui/TagContainer';

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading number="03">Featured Projects</SectionHeading>
      <div className="grid md:grid-cols-2 gap-6">
        <Card variant="project">
          <Subtitle variant="large" className="mb-2">Shifting Sands</Subtitle>
          <Text variant="muted" className="mb-4">
            Mixed media computer game in Unity.
          </Text>
          <TagContainer className="mb-4">
            <Tag variant="highlight">C#</Tag>
            <Tag variant="highlight">Unity</Tag>
            <Tag variant="highlight">OpenCV</Tag>
            <Tag variant="highlight">Azure Kinect SDK</Tag>
          </TagContainer>
          <Link href="#" variant="project">View project →</Link>
        </Card>

        <Card variant="project">
          <Subtitle variant="large" className="mb-2">C++ Rasteriser & Ray-tracer</Subtitle>
          <Text variant="muted" className="mb-4">
            Interactive C++ software rasteriser and ray-tracer from scratch.
          </Text>
          <TagContainer className="mb-4">
            <Tag variant="highlight">C++</Tag>
            <Tag variant="highlight">SDL2</Tag>
            <Tag variant="highlight">OpenMP</Tag>
          </TagContainer>
          <Link href="#" variant="project">View project →</Link>
        </Card>

        <Card variant="project">
          <Subtitle variant="large" className="mb-2">Livestock Management App</Subtitle>
          <Text variant="muted" className="mb-4">
            Livestock management web app for a local city farm.
          </Text>
          <TagContainer className="mb-4">
            <Tag variant="highlight">React</Tag>
            <Tag variant="highlight">TypeScript</Tag>
            <Tag variant="highlight">Spring Boot</Tag>
            <Tag variant="highlight">MongoDB</Tag>
          </TagContainer>
          <Link href="#" variant="project">View project →</Link>
        </Card>

        <Card variant="project">
          <Subtitle variant="large" className="mb-2">Distributed Game of Life</Subtitle>
          <Text variant="muted" className="mb-4">
            A distributed implementation of Conway's Game of Life to AWS workers.
          </Text>
          <TagContainer className="mb-4">
            <Tag variant="highlight">Go</Tag>
            <Tag variant="highlight">AWS</Tag>
          </TagContainer>
          <Link href="#" variant="project">View project →</Link>
        </Card>
      </div>
    </Section>
  );
}
