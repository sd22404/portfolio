import Section from "@/app/components/ui/Section";
import SectionHeading from "@/app/components/ui/SectionHeading";
import Text from "@/app/components/ui/Text";
import Tag from "@/app/components/ui/Tag";
import TagContainer from "@/app/components/ui/TagContainer";
import Link from "@/app/components/ui/Link";
import { notFound } from "next/navigation";
import Background from "@/app/components/GoLBackground";
import { projects } from "@/app/components/Projects";
import Header from "@/app/components/Header";
import MediaCarousel from "@/app/components/sub/MediaCarousel";
import Footer from "@/app/components/Footer";
import BulletList from "@/app/components/ui/BulletList";

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

    const hasMedia = Array.isArray(project.media) && project.media.length > 0;

    return (
        <div className="relative min-h-screen flex flex-col">
            <Header />
            <Background />
            <div className={`flex-1 grid grid-cols-1 ${hasMedia ? 'xl:grid-cols-2 xl:max-h-screen' : ''} gap-8 px-4`}>
                <Section id="text">
                    <SectionHeading number={project.ticker || project.title.slice(0, 3).toUpperCase()}>{project.title}</SectionHeading>

                    <Text variant="muted" className="mb-6">{project.description}</Text>
                    <BulletList items={project.content || []} className="mb-6" />

                    {project.tags?.length &&
                        <TagContainer className="mb-8">
                            {project.tags.map((t: string) => (
                                <Tag key={t} variant="highlight">{t}</Tag>
                            ))}
                        </TagContainer>
                    }
                    <Link href="/#projects" variant="underline" className="mt-8">← Back to home</Link>
                </Section>
                {hasMedia ? (
                    <Section id="media" className="xl:max-h-[calc(100vh-(61px+121px))]">
                            <MediaCarousel items={project.media} className="w-full h-full" />
                    </Section>
                ) : null}
            </div>
            <Footer />
        </div>
    );
}
