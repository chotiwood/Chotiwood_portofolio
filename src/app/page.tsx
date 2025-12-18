"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";

const filteredProjects = projects.slice(0, 3);

console.log(filteredProjects);

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen-md mx-auto px-4 pt-[120px] pb-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        {/* Available Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex mb-6"
        >
          <span className="content-center text-sm tracking-wide text-muted uppercase font-bold">
            Frontend & UI Engineer
          </span>
          <span className="flex ml-3 text-[#123524] text-sm tracking-wide uppercase glass-card p-2 content-center">
            Available for Work{" "}
            <div className="ml-1 w-1.5 h-1.5 bg-[#5CB338] rounded-full"></div>
          </span>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            I&apos;m Chotiwut
          </h1>
          <p className="text-xl text-muted">
            Frontend Engineer with 2+ years experience. Having knowledge of
            Vue.js, React.js, Tailwind.css, Bootstrap and proficiency with HTML,
            CSS, Javascript and Typescript. Have the desire and curiosity to
            learn new things, and be able to collaborate in a team.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 space-x-4"
        >
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
          >
            Hire Me
          </Link>
          <button
            onClick={() =>
              navigator.clipboard.writeText("chotiwut11@gmail.com")
            }
            className="inline-block px-8 py-3 border border-current rounded-full hover:opacity-70 transition-opacity"
          >
            Copy Email
          </button>
        </motion.div>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 pt-16 border-t border-gray-200"
        >
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <Link href="/projects" className="hover-link text-muted">
              View All
            </Link>
          </div>

          <div className="grid gap-8">
            {filteredProjects.map((project, index) => (
              <Link
                key={index}
                href={project.link}
                target="_blank"
                className="group w-100 border-2 border-gray-200 dark:border-gray-800 block p-6 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-medium group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-muted">→</span>
                </div>
                <p className="mt-1 text-muted">{project.tags.join(", ")}</p>
              </Link>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
