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
import MediaCarousel from "@/app/components/MediaCarousel";

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
            <Header links={[{ href: "/", label: "home", variant: "nav" }]} />
            <Background />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-16 sm:py-24">
                <Section id="text">
                    <SectionHeading number="P">{project.title}</SectionHeading>

                    <Text variant="muted" className="mb-6">{project.description}</Text>

                    {project.tags?.length &&
                        <TagContainer className="mb-8">
                            {project.tags.map((t: string) => (
                                <Tag key={t} variant="highlight">{t}</Tag>
                            ))}
                        </TagContainer>
                    }
                    <Link href="/" variant="project" className="mt-8">← Back to home</Link>
                </Section>
                <Section id="media">
                    {project.media?.length ? (
                        <div className="mb-8">
                            <MediaCarousel items={project.media as any} />
                        </div>
                    ) : null}
                </Section>
            </div>
        </div>
    );
}
