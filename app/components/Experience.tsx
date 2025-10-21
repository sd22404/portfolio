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
            <Subtitle>Graduate Teacher Level 1 & 2</Subtitle>
            <Text variant="small">Sep 2025 - Present</Text>
          </div>
          <Text variant="highlight" className="mb-3">University of Bristol</Text>
          <BulletList items={[
            'details of role responsibilities and achievements',
            'details of role responsibilities and achievements',
            'details of role responsibilities and achievements'
          ]} />
        </Card>

        <Card>
          <div className="flex justify-between items-start mb-2">
            <Subtitle>Farm Shop Assistant</Subtitle>
            <Text variant="small">Sep 2020 - May 2022</Text>
          </div>
          <Text variant="highlight" className="mb-3">Rushfields Plant Centre Ltd</Text>
          <BulletList items={[
            'details of role responsibilities and achievements',
            'details of role responsibilities and achievements',
            'details of role responsibilities and achievements'
          ]} />
        </Card>

        <Card>
          <div className="flex justify-between items-start mb-2">
            <Subtitle>Work Experience Intern</Subtitle>
            <Text variant="small">Jul 2019 - Jul 2019</Text>
          </div>
          <Text variant="highlight" className="mb-3">MakeReal Ltd</Text>
          <BulletList items={[
            'details of role responsibilities and achievements',
            'details of role responsibilities and achievements',
            'details of role responsibilities and achievements'
          ]} />
        </Card>
      </div>
    </Section>
  );
}
