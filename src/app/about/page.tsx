"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen max-w-screen-md mx-auto p-8 pt-[120px] pb-20 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold gradient-text">About Me</h1>
          <Link
            href="/"
            className="px-6 py-3 rounded-full border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
          >
            ← Back Home
          </Link>
        </div>

        <div className="space-y-12">
          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Hello! 👋</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a Frontend Engineer with 2+ years of experience. Having
              knowledge of Vue.js, React.js, Tailwind.css, Bootstrap and
              proficiency with HTML, CSS, Javascript and Typescript. I have the
              desire and curiosity to learn new things, and I'm able to
              collaborate in a team.
            </p>
            <div className="mt-4 text-gray-600 dark:text-gray-300">
              <p>📍 Tangerang, Banten</p>
              <p>📧 chotiwut11@gmail.com</p>
              <p>📱 081314196970</p>
            </div>
          </section>

          {/* Experience */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Work Experience</h2>
            <div className="space-y-8">
              {/* PT Bukit Makmur Mandiri Utama */}
              <div className="p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300">
                <h3 className="text-xl font-semibold">
                  Front End Developer & UI Engineer
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  PT Bukit Makmur Mandiri Utama • January 2024 - Present
                </p>
                <ul className="space-y-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>
                    Developed Probation Report System: Created a system to
                    generate and manage probation reports, including report
                    layout design and API integration for real-time data
                    tracking.
                  </li>
                  <li>
                    Enhanced the Employee Probation Module: Designed and
                    implemented intuitive layouts with seamless API integration
                    to streamline probation tracking and evaluation processes.
                  </li>
                  <li>
                    Developed HR Management Modules: Built user and role
                    management interfaces with robust API integration, ensuring
                    secure and scalable access control across the HR system.
                  </li>
                  <li>
                    Created BumaUI – a Reusable Component Library: Developed
                    over 40 reusable UI components using Vue 3, TypeScript, and
                    SCSS, documented with Storybook to standardize design and
                    accelerate development across projects.
                  </li>
                  <li>
                    Built Integrated Cross-Platform Documentation: Established a
                    unified documentation system using React.js, bridging
                    design, mobile, and web teams to ensure consistent
                    implementation and collaboration.
                  </li>
                  <li>
                    Designed and implemented a widget visibility tracking system
                    detection and PostHog integration to accurately capture user
                    engagement by dynamically starting and stopping sessions.
                  </li>
                </ul>
              </div>

              {/* PT Kompas Media Nusantara */}
              <div className="p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300">
                <h3 className="text-xl font-semibold">Front End Developer</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  PT Kompas Media Nusantara • September 2022 - December 2023
                </p>
                <ul className="space-y-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>
                    Collaborated cross-functionally with developers, product
                    managers, UI/UX designers, and QA engineers to ensure smooth
                    and aligned product development.
                  </li>
                  <li>
                    Developed Tutur Visual Premium using Vue 2 and Sass,
                    focusing on building dynamic and responsive user interfaces.
                  </li>
                  <li>
                    Built reusable components and a custom content management
                    system for Tutur Visual Regular, enabling efficient content
                    updates and consistent UI patterns using Nuxt.
                  </li>
                </ul>
              </div>

              {/* PT. Hashmicro Solusi Indonesia */}
              <div className="p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300">
                <h3 className="text-xl font-semibold">Front End Developer</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  PT. Hashmicro Solusi Indonesia • February - June 2022
                </p>
                <ul className="space-y-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>
                    Collaborated closely with UI/UX designers to translate
                    design concepts into engaging user interfaces.
                  </li>
                  <li>
                    Implemented interactive website animations using the GSAP
                    (GreenSock Animation Platform) library to enhance user
                    experience and visual appeal.
                  </li>
                  <li>
                    Developed landing pages designed to effectively communicate
                    key information and guide users toward relevant actions.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Skills & Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "HTML",
                "CSS",
                "Javascript",
                "Typescript",
                "Vue",
                "React.Js",
                "Next.Js",
                "Nuxt.js",
                "Scss / Sass",
                "Tailwind",
                "Bootstrap",
                "Laravel",
                "Figma",
                "VuePress",
              ].map((skill) => (
                <div
                  key={skill}
                  className="p-4 rounded-lg border-2 border-gray-200 dark:border-gray-800 text-center
                    hover:border-black dark:hover:border-white transition-all duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Education</h2>
            <div className="p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300">
              <h3 className="text-xl font-semibold">
                Bachelor of Computer Science
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Universitas Multimedia Nusantara • 2019 - 2023
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">GPA: 3.52</p>
            </div>
          </section>

          {/* Organizational Experience */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">
              Organizational Experience
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300">
                <h3 className="text-xl font-semibold">
                  Coordinator of Website division
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  OMB UMN • 2022
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  OMB UMN is an activity held by Multimedia Nusantara University
                  to introduce the lecture environment to new students.
                </p>
                <ul className="space-y-2 list-disc list-inside text-gray-600 dark:text-gray-300 text-sm">
                  <li>
                    Developed a website providing information about OMB UMN
                    2022.
                  </li>
                  <li>
                    Created a website to showcase documentation and media from
                    OMB UMN 2022 activities.
                  </li>
                  <li>
                    Built an online registration platform for OMB UMN 2022
                    participants.
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300">
                <h3 className="text-xl font-semibold">
                  Member of Website division
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  UMN ECO • 2022
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  UMN ECO is an organization under the auspices of Multimedia
                  Nusantara University which works to protect the environment.
                </p>
                <ul className="space-y-2 list-disc list-inside text-gray-600 dark:text-gray-300 text-sm">
                  <li>Collaborated with UI/UX designer</li>
                  <li>
                    Created landing page to publish the information needed by
                    users using Laravel
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300">
                <h3 className="text-xl font-semibold">Member</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Rencang • 2019 - 2021
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Rencang is a social organization that stands under the
                  auspices of Multimedia Nusantara University (UMN).
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
