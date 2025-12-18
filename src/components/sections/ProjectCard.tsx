'use client';

import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  link,
  onMouseEnter,
  onMouseLeave
}: ProjectCardProps) {
  return (
    <Card
      className="group cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="aspect-video relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="primary" className="w-full">
            View Project
          </Button>
        </a>
      </div>
    </Card>
  );
}
