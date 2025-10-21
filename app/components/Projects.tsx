import SectionHeading from './ui/SectionHeading';
import Section from './ui/Section';
import ProjectCard, { Project } from './ProjectCard';

// Minimal in-file data; consider moving to a data module later
export const projects: Project[] = [
  {
    slug: "shifting-sands",
    title: "Shifting Sands",
    description: "Mixed media computer game in Unity.",
    media: [
        { type: 'image', src: "/projects/shifting-sands/hero-background.png", alt: "Leaderboard Background" },
        { type: 'image', src: "/projects/shifting-sands/concept-art.png", alt: "Concept Art" },
        { type: 'video', src: "/projects/shifting-sands/trailer.mp4" }
    ],
    coverImage: "hero-background.png",
    tags: ["C#", "Unity", "OpenCV", "Azure Kinect SDK"],
  },
  {
    slug: "cpp-rasteriser-raytracer",
    title: "C++ Rasteriser & Ray-tracer",
    description: "Interactive C++ software rasteriser and ray-tracer from scratch.",
    tags: ["C++", "SDL2", "OpenMP"],
  },
  {
    slug: "livestock-management-app",
    title: "Livestock Management App",
    description: "Livestock management web app for a local city farm.",
    tags: ["React", "TypeScript", "Spring Boot", "MongoDB"],
  },
  {
    slug: "distributed-game-of-life",
    title: "Distributed Game of Life",
    description: "A distributed implementation of Conway's Game of Life to AWS workers.",
    tags: ["Go", "AWS"],
  },
];

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading number="03">Featured Projects</SectionHeading>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </Section>
  );
}
