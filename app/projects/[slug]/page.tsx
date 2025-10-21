import Section from "@/app/components/ui/Section";
import SectionHeading from "@/app/components/ui/SectionHeading";
import Subtitle from "@/app/components/ui/Subtitle";
import Text from "@/app/components/ui/Text";
import Tag from "@/app/components/ui/Tag";
import TagContainer from "@/app/components/ui/TagContainer";
import Link from "@/app/components/ui/Link";
import { notFound } from "next/navigation";
import Image from "next/image";
import Background from "@/app/components/Background";
import { projects } from "@/app/components/Projects";
import Header from "@/app/components/Header";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} · Projects`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <div className="relative min-h-screen">
        <Header links={[{href: "/", label: "home", variant: "nav"}]}/>
        <Background />
        <Section>
            <SectionHeading number="P">{project.title}</SectionHeading>

            <Text variant="muted" className="mb-6">{project.description}</Text>
            {project.media?.length && 
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {project.media.map((src: string, index: number) => (
                        <img key={index} src={src} alt={`${project.title} media ${index + 1}`} className="w-full h-auto rounded-md shadow-md" />
                    ))}
                </div>
            }

            {project.tags?.length &&
                <TagContainer className="mb-8">
                {project.tags.map((t: string) => (
                    <Tag key={t} variant="highlight">{t}</Tag>
                ))}
                </TagContainer>
            }
            <Link href="/" variant="project" className="mt-8">← Back to home</Link>
        </Section>
    </div>
  );
}
