import SectionHeading from './ui/SectionHeading';
import Section from './ui/Section';
import Card from './ui/Card';
import Text from './ui/Text';
import BulletList from './ui/BulletList';
import Subtitle from './ui/Subtitle';

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading number="02">Work Experience</SectionHeading>
      <div className="space-y-6">
        <Card>
          <div className="flex justify-between items-start mb-2">
            <Subtitle>Senior Software Engineer</Subtitle>
            <Text variant="small">2024 - Present</Text>
          </div>
          <Text variant="highlight" className="mb-3">Tech Innovations Ltd</Text>
          <BulletList items={[
            'Led development of microservices architecture serving 1M+ users',
            'Reduced API response time by 60% through optimization',
            'Mentored junior developers and conducted code reviews'
          ]} />
        </Card>

        <Card>
          <div className="flex justify-between items-start mb-2">
            <Subtitle>Full Stack Developer</Subtitle>
            <Text variant="small">2023 - 2024</Text>
          </div>
          <Text variant="highlight" className="mb-3">StartUp Ventures</Text>
          <BulletList items={[
            'Built responsive web applications using React and Node.js',
            'Implemented CI/CD pipelines reducing deployment time by 40%',
            'Collaborated with cross-functional teams in Agile environment'
          ]} />
        </Card>

        <Card>
          <div className="flex justify-between items-start mb-2">
            <Subtitle>Software Engineering Intern</Subtitle>
            <Text variant="small">Summer 2023</Text>
          </div>
          <Text variant="highlight" className="mb-3">Global Tech Corp</Text>
          <BulletList items={[
            'Developed internal tools improving team productivity by 25%',
            'Contributed to open-source projects and documentation',
            'Participated in code reviews and sprint planning'
          ]} />
        </Card>
      </div>
    </Section>
  );
}
