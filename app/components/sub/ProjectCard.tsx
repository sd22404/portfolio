import React from 'react';
import Card from '../ui/Card';
import Subtitle from '../ui/Subtitle';
import TagContainer from '../ui/TagContainer';
import Tag from '../ui/Tag';
import Link from '../ui/Link';
import Text from '../ui/Text';
import Image from 'next/image';

export type MediaItem = {
    type: 'image' | 'video';
    src: string;
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
    tags?: string[];
};

export default function ProjectCard(project: Project) {
    return (
        <Card variant="raised">
            <div className="space-y-4">
                <div className="flex gap-2 items-center">
                    <Text variant="ornament-alt">&gt;&gt;</Text>
                    <Subtitle variant="large">{project.title}</Subtitle>
                </div>

                <Text variant="muted">
                    {project.description.slice(0, 200)}{project.description.length > 200 ? '...' : ''}
                </Text>

                {project.coverImage &&
                    <div className="group/img mb-4 rounded-md overflow-hidden relative w-full h-[clamp(10rem,30vh,18rem)] transition-all duration-300">
                        <Image
                            src={`/portfolio/projects/${project.slug}/${project.coverImage}`}
                            alt={`${project.title} Cover Image`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                    </div>
                }

                {project.tags?.length &&
                    <TagContainer>
                        {project.tags?.map((tag) => (
                            <Tag key={tag} variant="highlight">{tag}</Tag>
                        ))}
                    </TagContainer>
                }

                <div className="pt-2">
                    <Link href={`/projects/${project.slug}`} variant="underline" className="inline-flex items-center gap-1 group/link">
                        [View project]
                        <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                    </Link>
                </div>
            </div>
        </Card>
    );
}