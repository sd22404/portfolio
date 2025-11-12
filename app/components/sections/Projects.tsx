import SectionHeading from '../ui/SectionHeading';
import Section from '../ui/Section';
import ProjectCard from '../elements/ProjectCard';
import { projects } from '../../data/projects';

export default function Projects({bg}: {bg?: string}) {
  return (
    <Section id="projects" bgClass={bg}>
      <SectionHeading number="03">Featured Projects</SectionHeading>
      <div className="grid lg:grid-cols-2 3xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </Section>
  );
}
