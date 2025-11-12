import SectionHeading from '../ui/SectionHeading';
import Section from '../ui/Section';
import Award from '../sub/Award';
import { Gamepad, User, Award as AwardIcon, Star, Medal, Bookmark } from '../ui/Icons';

export default function Awards({bg}: {bg?: string}) {
    return (
        <Section id="awards" bgClass={bg}>
            <SectionHeading number="05">Awards & Recognition</SectionHeading>
            <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-6">
                <Award name="Best Game Runner Up" description="CSS GameJam 2023" icon={<Gamepad size={36} />} />
                <Award name="People's Choice" description="CSS GameJam 2024" icon={<User size={36} />} />
                <Award name="Duke of Edinburgh Silver" description="Gold in Progress" icon={<AwardIcon size={36} />} />
                <Award name="Karate 2nd Kyu" description="Brown Belt" icon={<Medal size={36} />} />
                <Award name="Highest Group Mark" description="Shifting Sands" icon={<Star size={36} />} />
                <Award name="Joint Highest Mark" description="GoLang Game of Life" icon={<Bookmark size={36} />} />
            </div>
        </Section>
    );
}
