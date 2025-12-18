"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects, getAllTags } from "@/data/projects";

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const tags = getAllTags();
  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects;

  return (
    <main className="min-h-screen max-w-screen-md mx-auto p-8 pt-[120px] pb-20 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold gradient-text">Projects</h1>
          <Link
            href="/"
            className="px-6 py-3 rounded-full border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
          >
            ← Back Home
          </Link>
        </div>

        {/* Tags Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 rounded-full transition-colors
              ${
                !selectedTag
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full transition-colors
                ${
                  selectedTag === tag
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl overflow-hidden border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-medium group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-muted">
                    {project.completionDate}
                  </span>
                </div>

                <p className="text-muted">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.testimonial && (
                  <blockquote className="border-l-2 border-accent pl-4 mt-4 italic text-muted">
                    "{project.testimonial.text}"
                    <footer className="mt-2 text-sm">
                      <strong>{project.testimonial.author}</strong>
                      <span className="text-muted">
                        {" "}
                        • {project.testimonial.position}
                      </span>
                    </footer>
                  </blockquote>
                )}

                <div className="flex justify-between items-center mt-6">
                  <span className="text-sm text-muted">
                    Role: {project.role}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black hover:scale-105 transition-transform duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
