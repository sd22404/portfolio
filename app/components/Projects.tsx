import SectionHeading from './ui/SectionHeading';
import Section from './ui/Section';
import ProjectCard, { Project } from './sub/ProjectCard';

export const projects: Project[] = [
  {
    slug: "shifting-sands",
    ticker: "SS",
    title: "Shifting Sands",
    description: "A mixed-media computer game using an Azure Kinect and lots of sand, made with Unity.",
    content: [
      `Followed agile development processes, with sprints to produce frequent demos, and weekly team retrospectives.`,
      `Used the Kinect SDK to poll the height of a physical sandpit and reconstruct it as a Unity mesh in real time.`,
      `Developed enemies that path-find across the generated terrain using slope angle, avoiding steep gradients.`,
      `Came up with IPC solutions to send images to a Python server to process hand landmarks with Google’s MediaPipe.`
    ],
    media: [
        { type: 'image', src: "/portfolio/projects/shifting-sands/hero-background.png", alt: "Leaderboard Background" },
        { type: 'image', src: "/portfolio/projects/shifting-sands/concept-art.png", alt: "Concept Art" },
        { type: 'video', src: "/portfolio/projects/shifting-sands/trailer.mp4" }
    ],
    coverImage: "hero-background.png",
    tags: ["C#", "Unity", "OpenCV", "Azure Kinect SDK"],
  },
  {
    slug: "cpp-rasteriser-raytracer",
    ticker: "RAY",
    title: "Interactive Ray-tracer",
    description: "Interactive C++ software rasteriser and ray-tracer from scratch.",
    content: [
      `Wrote an .obj and .mtl parser to load custom scenes and assets.`,
      `Implemented rasterisation of triangle-based models in an SDL2 window with keyboard input to move camera.`,
      `Implemented ray-traced flat, Gouraud and Phong shading models, shadows, area lights, normal maps, and mirrors.`,
      `Made use of the OpenMP library to quickly parallelise ray-trace functions and speed up rendering.`,
    ],
    tags: ["C++", "SDL2", "OpenMP"],
  },
  {
    slug: "livestock-management-app",
    ticker: "LMA",
    title: "Livestock Management App",
    description: "A comprehensive livestock management web app made using React and Spring Boot for a local city farm.",
    content: [
      `Collaborated on a GitHub repository; made use of branches, created and reviewed PRs.`,
      `Consulted regularly with the client to receive feedback and drive the project towards their requirements.`,
      `Employed Spring Boot to quickly get a Java backend with MongoDB up and running.`,
      `Leveraged React (TypeScript) with Google’s Material Design components for a professional-looking frontend.`
    ],
    tags: ["React", "TypeScript", "Spring Boot", "MongoDB", "Docker"],
  },
  {
    slug: "distributed-game-of-life",
    ticker: "GOL",
    title: "Distributed Game of Life",
    description: "A simulation of Conway’s Game of Life written in Go and distributed among AWS workers.",
    content: [
      `Parallelised a serial implementation of GoL using Go channels, synchronising the threads at each turn cycle.`,
      `Distributed the single-threaded system to four AWS workers, with a single broker node for task management.`,
      `Introduced a halo-exchange technique via RPCs to optimise Game of Life world division among workers.`,
    ],
    tags: ["Go", "SDL2", "AWS"],
  },
];

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading number="03">Featured Projects</SectionHeading>
      <div className="grid lg:grid-cols-2 3xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </Section>
  );
}
