import SectionHeading from './ui/SectionHeading';
import Section from './ui/Section';
import Award from './sub/Award';
import { gameControllerIcon, personIcon, rosetteIcon, karateBeltIcon, starIcon } from './ui/Icons';

export default function Awards({bg}: {bg?: string}) {
    return (
        <Section id="awards" bgClass={bg}>
            <SectionHeading number="05">Awards & Recognition</SectionHeading>
            <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-6">
                <Award name="Best Game Runner Up" description="CSS GameJam 2023" icon={gameControllerIcon} />
                <Award name="People's Choice" description="CSS GameJam 2024" icon={personIcon} />
                <Award name="Duke of Edinburgh Silver" description="Gold in Progress" icon={rosetteIcon} />
                <Award name="Karate 2nd Kyu" description="Brown Belt" icon={karateBeltIcon} />
                <Award name="Highest Group Mark" description="Shifting Sands" icon={starIcon} />
                <Award name="Joint Highest Mark" description="GoLang Game of Life" icon={starIcon} />
            </div>
        </Section>
    );
}
