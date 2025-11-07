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
import { ExternalLink, Github } from "@/app/components/ui/Icons";

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
            
            <div className="flex-1 min-h-0 flex flex-col py-12 sm:py-24">
                <Section 
                    id="page" 
                    bgClass="bg-transparent" 
                    className={`h-full min-h-0 ${hasMedia && 'grid grid-cols-1 xl:grid-cols-2 xl:divide-x xl:divide-border xl:items-stretch'}`}
                >
                    <div className={`${hasMedia ? 'xl:pr-12' : ''} space-y-6`}>
                        <SectionHeading number={project.ticker || project.title.slice(0, 3).toUpperCase()}>{project.title}</SectionHeading>

                        <Text variant="body">{project.description}</Text>
                        <BulletList items={project.content || []} />

                        {project.tags?.length &&
                            <TagContainer>
                                {project.tags.map((t: string) => (
                                    <Tag key={t} variant="highlight">{t}</Tag>
                                ))}
                            </TagContainer>
                        }

                        <div className="flex pt-2">
                            <Link href="/#projects" variant="underline" className="mr-auto inline-flex items-center gap-1 group/link">
                                <Text variant="ornament" className="transition-transform duration-200 group-hover/link:-translate-x-1">←</Text>
                                <span className='inline-flex'><Text variant='ornament'>[</Text>Back to home<Text variant='ornament'>]</Text></span>
                            </Link>
                            {project.source &&
                                <Link href={project.source} external variant='underline' className="inline-flex items-center gap-2 group/link">
                                    <span className="text-accent-quaternary"><Github size={20}/></span>
                                    <span className='inline-flex'><Text variant='ornament'>[</Text>View Source<Text variant='ornament'>]</Text></span>
                                </Link>
                            }
                            {project.demo &&
                                <Link href={project.demo} external variant='underline' className="inline-flex items-center gap-2 group/link">
                                    <span className="text-accent-quaternary"><ExternalLink size={20}/></span>
                                    <span className='inline-flex'><Text variant='ornament'>[</Text>View Demo<Text variant='ornament'>]</Text></span>
                                </Link>
                            }
                        </div>
                    </div>
                    
                    {hasMedia && (
                        <div className="min-h-0 flex xl:pl-12 my-20 xl:my-0 xl:h-full">
                            <MediaCarousel items={project.media} className="relative overflow-hidden w-full flex-1 xl:h-full" />
                        </div>
                    )}
                </Section>
            </div>
            
            <Footer />
        </div>
    );
}
