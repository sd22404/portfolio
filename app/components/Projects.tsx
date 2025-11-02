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
        { type: 'video', src: "/portfolio/projects/shifting-sands/trailer.mp4", alt: "Trailer" },
        { type: 'video', src: "/portfolio/projects/shifting-sands/gameplay.mp4", alt: "Gameplay" },
        { type: 'video', src: "/portfolio/projects/shifting-sands/technical.mp4", alt: "Technical Video" },
        { type: 'pdf', src: "/portfolio/projects/shifting-sands/report.pdf", alt: "Report" }
    ],
    source: "https://github.com/lm22433/2024-SealTeam7",
    coverImage: "hero-background.png",
    tags: ["C#", "Unity", "OpenCV", "Azure Kinect SDK"],
  },
  {
    slug: "rasteriser-raytracer",
    ticker: "RAY",
    title: "Interactive Ray-tracer",
    description: "Interactive C++ software rasteriser and ray-tracer from scratch.",
    content: [
      `Wrote an .obj and .mtl parser to load custom scenes and assets.`,
      `Implemented rasterisation of triangle-based models in an SDL2 window with keyboard input to move camera.`,
      `Implemented ray-traced flat, Gouraud and Phong shading models, shadows, area lights, normal maps, and mirrors.`,
      `Made use of the OpenMP library to quickly parallelise ray-trace functions and speed up rendering.`,
    ],
    media: [
      { type: 'image', src: "/portfolio/projects/rasteriser-raytracer/raytraced-scene-skybox.png", alt: "Ray-traced Scene" }
    ],
    coverImage: "raytraced-scene-skybox.png",
    source: "https://github.com/sd22404/COMS30020",
    tags: ["C++", "SDL2", "OpenMP"],
  },
  {
    slug: "livestock-management",
    ticker: "LMA",
    title: "Livestock Management App",
    description: "A comprehensive livestock management web app made using React and Spring Boot for a local city farm.",
    content: [
      `Collaborated on a GitHub repository; made use of branches, created and reviewed PRs.`,
      `Consulted regularly with the client to receive feedback and drive the project towards their requirements.`,
      `Employed Spring Boot to quickly get a Java backend with MongoDB up and running.`,
      `Leveraged React (TypeScript) with Google’s Material Design components for a professional-looking frontend.`
    ],
    media: [
      { type: 'image', src: "/portfolio/projects/livestock-management/calendar.png", alt: "Calendar View" }
    ],
    coverImage: "calendar.png",
    demo: "https://cityfarm.murraygrov.es",
    tags: ["React", "TypeScript", "Spring Boot", "Java", "MongoDB", "Docker"],
  },
  {
    slug: "game-of-life",
    ticker: "GOL",
    title: "GoLang Game of Life",
    description: "A simulation of Conway’s Game of Life written in Go and distributed among AWS workers.",
    content: [
      `Parallelised a serial implementation of GoL using Go channels, synchronising the threads at each turn cycle.`,
      `Distributed the single-threaded system to four AWS workers, with a single broker node for task management.`,
      `Introduced a halo-exchange technique via RPCs to optimise Game of Life world division among workers.`,
    ],
    media: [
      { type: 'pdf', src: "/portfolio/projects/game-of-life/report.pdf", alt: "Report" }
    ],
    coverImage: "report-cover.png",
    tags: ["Go", "SDL2", "AWS"],
  },
  {
    slug: "portfolio-website",
    ticker: "WEB",
    title: "Portfolio Website",
    description: "This very website, built with Next.js! Showcases my other projects and experience.",
    media: [
      { type: 'image', src: "/portfolio/projects/portfolio-website/homepage.png", alt: "Homepage Screenshot" }
    ],
    coverImage: "homepage.png",
    source: "https://github.com/sd22404/portfolio",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "CI/CD"],
  },
  {
    slug: "valorant-tracker",
    ticker: "VAL",
    title: "Valorant Tracker",
    description: "A WIP desktop app to provide easy access to in-game information like current store, current match, and match history.",
    media: [
      { type: 'image', src: "/portfolio/projects/valorant-tracker/homepage.png", alt: "Homepage Screenshot" }
    ],
    coverImage: "homepage.png",
    source: "https://github.com/lm22433/valorant-store-tracker",
    tags: ["Tauri", "Rust", "React", "TypeScript", "External API"],
  }
];

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
