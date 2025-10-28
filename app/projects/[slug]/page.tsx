import Section from "@/app/components/ui/Section";
import SectionHeading from "@/app/components/ui/SectionHeading";
import Text from "@/app/components/ui/Text";
import Tag from "@/app/components/ui/Tag";
import TagContainer from "@/app/components/ui/TagContainer";
import Link from "@/app/components/ui/Link";
import { notFound } from "next/navigation";
import Background from "@/app/components/sub/GoLBackground";
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
            {slug === 'game-of-life' && <Background />}
            
            <div className="flex-1 min-h-0 flex flex-col pt-12 sm:pt-24">
                <Section 
                    id="page" 
                    bgClass="bg-transparent" 
                    className={`h-full min-h-0 ${hasMedia && 'grid grid-cols-1 xl:grid-cols-2 xl:divide-x xl:divide-border xl:items-stretch'}`}
                >
                    <div className={`${hasMedia ? 'xl:pr-12' : ''}`}>
                        <SectionHeading number={project.ticker || project.title.slice(0, 3).toUpperCase()}>{project.title}</SectionHeading>

                        <Text variant="body" className="mb-6">{project.description}</Text>
                        <BulletList items={project.content || []} className="mb-6" />

                        {project.tags?.length &&
                            <TagContainer className="mb-8">
                                {project.tags.map((t: string) => (
                                    <Tag key={t} variant="highlight">{t}</Tag>
                                ))}
                            </TagContainer>
                        }
                        <Link href="/#projects" variant="underline" className="mt-8">← Back to home</Link>
                    </div>
                    
                    {hasMedia && (
                        <div className="min-h-0 flex xl:pl-12 mt-4 xl:mt-0 xl:h-full">
                            <MediaCarousel items={project.media} className="relative overflow-hidden w-full flex-1 xl:h-full" />
                        </div>
                    )}
                </Section>
            </div>
            
            <Footer />
        </div>
    );
}
