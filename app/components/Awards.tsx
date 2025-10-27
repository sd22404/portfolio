import SectionHeading from './ui/SectionHeading';
import Section from './ui/Section';
import Award from './sub/Award';

export default function Awards() {
    return (
        <Section id="awards">
            <SectionHeading number="05">Awards & Recognition</SectionHeading>
            <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-6">
                {/** Star icon */}
                <Award name="Best Game Runner Up" description="CSS GameJam 2023" svg="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />

                {/** Heart icon */}
                <Award name="People's Choice" description="CSS GameJam 2024" svg="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1.01 4.22 2.44C11.09 5.01 12.76 4 14.5 4 17 4 19 6 19 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />

                {/** Medal (simple circle) */}
                <Award name="Duke of Edinburgh Silver" description="Gold in Progress" svg="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z" />

                {/** Shield icon */}
                <Award name="Karate 2nd Kyu" description="Brown Belt" svg="M12 2l8 4v6c0 5-3.58 9.36-8 10-4.42-.64-8-5-8-10V6l8-4z" />

                {/** Bookmark (academic/mark) */}
                <Award name="Highest Group Mark" description="Year 3 Games Project" svg="M6 2h12a2 2 0 0 1 2 2v18l-8-4-8 4V4a2 2 0 0 1 2-2z" />
            </div>
        </Section>
    );
}
