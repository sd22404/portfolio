import SectionHeading from '../ui/SectionHeading';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Text from '../ui/Text';
import BulletList from '../ui/BulletList';
import Subtitle from '../ui/Subtitle';

export default function Experience({bg}: {bg?: string}) {
  return (
    <Section id="experience" bgClass={bg}>
      <SectionHeading number="02">Work Experience</SectionHeading>
      <div className="grid lg:grid-cols-2 gap-6">
        <Card variant="raised" className="lg:col-span-2">
          <div className="flex justify-between items-start mb-2">
            <Subtitle>Graduate Teacher Level 1 & 2</Subtitle>
            <Text variant="date">Sep 2025 - Present</Text>
          </div>
          <Text variant="highlight" className="mb-3">University of Bristol</Text>
          <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4">
            <div>
              <Text variant='body' className="mb-2">
                Supported teaching of lab sessions for the Computer Graphics unit
                <span className="text-accent-quaternary select-text">:</span>
              </Text>
              <BulletList items={[
                'Guided other students through both technical and theoretical issues.',
                'Addressed questions about course structure and further study.',
              ]} />
            </div>
            <div>
              <Text variant='body' className="mb-2">
                Mentored a team of students on their Software Engineering Project
                <span className="text-accent-quaternary select-text">:</span>
              </Text>
              <BulletList items={[
                'Ensured all members were organised and regularly contributing.',
                'Advised them on planning, designing, and building their software.',
                'Gave weekly feedback on their progress and answered any questions.'
              ]} />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex justify-between items-start mb-2">
            <Subtitle>Farm Shop Assistant</Subtitle>
            <Text variant="date">Sep 2020 - May 2022</Text>
          </div>
          <Text variant="highlight" className="mb-3">Rushfields Plant Centre Ltd</Text>
          <Text variant="body" className="mb-2">
            Served customers at a local garden centre’s farm shop
            <span className="text-accent-quaternary select-text">:</span>
          </Text>
          <BulletList items={[
            'Managed customer-facing stock, conducted sales on the till.',
            'Greeted / served customers on the cheese, meat and pastry counters.',
          ]} />
        </Card>

        <Card>
          <div className="flex justify-between items-start mb-2">
            <Subtitle>Work Experience Intern</Subtitle>
            <Text variant="date">Jul 2019</Text>
          </div>
          <Text variant="highlight" className="mb-3">MakeReal Ltd</Text>
          <Text variant="body" className="mb-2">
            Immersed myself in the workings of a small VR company
            <span className="text-accent-quaternary select-text">:</span>
          </Text>
          <BulletList items={[
            'Took part in daily stand-ups, user-tested in-development products.',
            'Created an interactive VR game in Unity with a co-worker.',
          ]} />
        </Card>
      </div>
    </Section>
  );
}
