import React from 'react';
import Card from '../ui/Card';
import Subtitle from '../ui/Subtitle';
import TagContainer from '../ui/TagContainer';
import Tag from '../ui/Tag';
import Link from '../ui/Link';
import Text from '../ui/Text';
import Image from 'next/image';
import { Github, ExternalLink, ChevronsRight } from '../ui/Icons';

export type MediaItem = {
    type: 'image' | 'video' | 'preview';
    src: string;
    full?: string;
    alt?: string;
}

export type Project = {
    slug: string;
    ticker?: string;
    title: string;
    description: string;
    content?: string[];
    media?: MediaItem[];
    coverImage?: string;
    source?: string;
    demo?: string;
    tags?: string[];
};

export default function ProjectCard(project: Project) {
    return (
        <Card variant="raised">
            <div className="flex flex-col h-full space-y-4">
                <div className="flex gap-1 items-center">
                    <Text variant="ornament-alt"><ChevronsRight size={24} /></Text>
                    <Subtitle variant="large">{project.title}</Subtitle>
                </div>

                <Text variant="body">
                    {project.description.slice(0, 200)}{project.description.length > 200 ? '...' : ''}
                </Text>

                <div className="mt-auto space-y-4">
                    {project.coverImage &&
                        <Link href={`/projects/${project.slug}`} variant="text" className="block" aria-label={`View project`}>
                            <div className="group/img rounded-md overflow-hidden relative w-full h-[clamp(10rem,30vh,18rem)] transition-all duration-300">
                                <Image
                                    src={`/portfolio/projects/${project.slug}/${project.coverImage}`}
                                    alt={`${project.title} Cover Image`}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover/img:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                            </div>
                        </Link>
                    }

                    {project.tags?.length &&
                        <TagContainer>
                            {project.tags?.map((tag) => (
                                <Tag key={tag} variant="highlight">{tag}</Tag>
                            ))}
                        </TagContainer>
                    }

                    <div className="flex pt-2">
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
                        <Link href={`/projects/${project.slug}`} variant="underline" className="ml-auto inline-flex items-center gap-1 group/link">
                            <span className='inline-flex'><Text variant='ornament'>[</Text>More Details<Text variant='ornament'>]</Text></span>
                            <Text variant="ornament" className="transition-transform duration-200 group-hover/link:translate-x-1">→</Text>
                        </Link>
                    </div>
                </div>
            </div>
        </Card>
    );
}