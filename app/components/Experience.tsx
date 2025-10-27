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
        <Card variant="raised">
          <div className="flex justify-between items-start mb-2">
            <Subtitle>Graduate Teacher Level 1 & 2</Subtitle>
            <Text variant="small">Sep 2025 - Present</Text>
          </div>
          <Text variant="highlight" className="mb-3">University of Bristol</Text>
          <div className='flex mb-2'>
            <Text>
              Supported teaching of lab sessions for the Computer Graphics unit
            </Text>
            <Text variant="ornament-alt" className="select-text">:</Text>
          </div>
          <BulletList items={[
            'Guided other students through both technical and theoretical issues.',
            'Addressed questions about course structure and further study.',
          ]} />
          <div className='mt-4 mb-2 flex'>
            <Text>
              Mentored a team of students on their Software Engineering Project
            </Text>
            <Text variant="ornament-alt" className="select-text">:</Text>
          </div>
          <BulletList items={[
            'Ensured all members were organised and regularly contributing.',
            'Advised them on planning, designing, and building their software.',
            'Gave weekly feedback on their progress and answered any questions.'
          ]} />
        </Card>

        <Card>
          <div className="flex justify-between items-start mb-2">
            <Subtitle>Farm Shop Assistant</Subtitle>
            <Text variant="small">Sep 2020 - May 2022</Text>
          </div>
          <Text variant="highlight" className="mb-3">Rushfields Plant Centre Ltd</Text>
          <div className='flex mb-2'>
            <Text>
              Served customers at a local garden centre’s farm shop
            </Text>
            <Text variant="ornament-alt" className="select-text">:</Text>
          </div>
          <BulletList items={[
            'Managed customer-facing stock, conducted sales on the till.',
            'Greeted / served customers on the cheese, meat and pastry counters.',
          ]} />
        </Card>

        <Card>
          <div className="flex justify-between items-start mb-2">
            <Subtitle>Work Experience Intern</Subtitle>
            <Text variant="small">Jul 2019 - Jul 2019</Text>
          </div>
          <Text variant="highlight" className="mb-3">MakeReal Ltd</Text>
          <div className='flex mb-2'>
            <Text>
              Immersed myself in the workings of a small VR company
            </Text>
            <Text variant="ornament-alt" className="select-text">:</Text>
          </div>
          <BulletList items={[
            'Took part in daily stand-ups, user-tested in-development products.',
            'Created an interactive VR game in Unity with a co-worker.',
          ]} />
        </Card>
      </div>
    </Section>
  );
}
