import React from 'react';
import Card from './ui/Card';
import Subtitle from './ui/Subtitle';
import TagContainer from './ui/TagContainer';
import Tag from './ui/Tag';
import Link from './ui/Link';
import Text from './ui/Text';
import Image from 'next/image';

export type Project = {
    slug: string;
    title: string;
    description: string;
    media?: string[];
    coverImage?: string;
    tags?: string[];
};

export default function ProjectCard(project: Project) {
  return (
    <Card variant="project">
        <Subtitle variant="large" className="mb-2">{project.title}</Subtitle>
        <Text variant="muted" className="mb-4">
            {project.description}
        </Text>
        {project.coverImage &&
            <div className="mb-4 rounded-md shadow-md relative w-full overflow-hidden h-[clamp(10rem,30vh,18rem)]">
                <Image
                    src={`/projects/${project.slug}/${project.coverImage}`}
                    alt={`${project.title} Cover Image`}
                    fill
                    className="object-cover"
                />
            </div>
        }
        {project.tags?.length &&
            <TagContainer className="mb-4">
                {project.tags?.map((tag) => (
                    <Tag key={tag} variant="highlight">{tag}</Tag>
                ))}
            </TagContainer>
        }
        <Link href={`/projects/${project.slug}`} variant="project">View project →</Link>
    </Card>
  );
}