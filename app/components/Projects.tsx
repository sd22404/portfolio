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
          <Subtitle variant="large" className="mb-2">Distributed Task Scheduler</Subtitle>
          <Text variant="muted" className="mb-4">
            High-performance task scheduling system with real-time monitoring and auto-scaling capabilities.
          </Text>
          <TagContainer className="mb-4">
            <Tag variant="highlight">Go</Tag>
            <Tag variant="highlight">Redis</Tag>
            <Tag variant="highlight">Docker</Tag>
            <Tag variant="highlight">Kubernetes</Tag>
          </TagContainer>
          <Link href="#" variant="project">View project →</Link>
        </Card>

        <Card variant="project">
          <Subtitle variant="large" className="mb-2">AI Code Review Assistant</Subtitle>
          <Text variant="muted" className="mb-4">
            ML-powered tool that analyzes pull requests and provides intelligent code suggestions.
          </Text>
          <TagContainer className="mb-4">
            <Tag variant="highlight">Python</Tag>
            <Tag variant="highlight">TensorFlow</Tag>
            <Tag variant="highlight">FastAPI</Tag>
            <Tag variant="highlight">PostgreSQL</Tag>
          </TagContainer>
          <Link href="#" variant="project">View project →</Link>
        </Card>

        <Card variant="project">
          <Subtitle variant="large" className="mb-2">Real-time Collaboration Platform</Subtitle>
          <Text variant="muted" className="mb-4">
            WebSocket-based collaborative editing platform with conflict resolution and presence awareness.
          </Text>
          <TagContainer className="mb-4">
            <Tag variant="highlight">TypeScript</Tag>
            <Tag variant="highlight">React</Tag>
            <Tag variant="highlight">WebSockets</Tag>
            <Tag variant="highlight">MongoDB</Tag>
          </TagContainer>
          <Link href="#" variant="project">View project →</Link>
        </Card>

        <Card variant="project">
          <Subtitle variant="large" className="mb-2">Cloud Infrastructure Monitor</Subtitle>
          <Text variant="muted" className="mb-4">
            Comprehensive monitoring solution for multi-cloud environments with predictive analytics.
          </Text>
          <TagContainer className="mb-4">
            <Tag variant="highlight">Rust</Tag>
            <Tag variant="highlight">Prometheus</Tag>
            <Tag variant="highlight">Grafana</Tag>
            <Tag variant="highlight">AWS</Tag>
          </TagContainer>
          <Link href="#" variant="project">View project →</Link>
        </Card>
      </div>
    </Section>
  );
}
