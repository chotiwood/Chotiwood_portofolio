'use client';

interface TechStackProps {
  technologies: string[];
}

export function TechStack({ technologies }: TechStackProps) {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold text-center">Tech Stack</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {technologies.map((tech, index) => (
          <div
            key={tech}
            className="p-4 rounded-lg border-2 border-gray-200 dark:border-gray-800 text-center
              hover:border-black dark:hover:border-white transition-all duration-300
              animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}
