"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  url?: string;
  repoUrl?: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      id: "1",
      title: "Next.js SaaS Platform",
      description: "A full-featured SaaS application with Stripe integration, role-based access, and real-time collaboration features.",
      image: "/next.svg",
      tags: ["Next.js", "React", "Stripe", "TypeScript", "Tailwind"],
      url: "https://example.com",
      repoUrl: "https://github.com",
    },
    {
      id: "2",
      title: "React Admin Dashboard",
      description: "Dashboard with real-time analytics, chart visualizations, and customizable widgets built with React and Vite.",
      image: "/next.svg",
      tags: ["React", "Vite", "D3.js", "TypeScript"],
      repoUrl: "https://github.com",
    },
    {
      id: "3",
      title: "TypeScript Utility Library",
      description: "A collection of typed utility functions for React applications, focused on developer experience and type safety.",
      image: "/next.svg",
      tags: ["TypeScript", "Utility Functions", "React"],
      repoUrl: "https://github.com",
    },
  ];

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-[var(--muted)] text-lg leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 0.8, delay: 0.1 }}
          >
            A curated selection of work I am proud of.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-lg border border-[var(--deep)] bg-[var(--px)] backdrop-filter backdrop-blur-sm overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={280}
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold leading-tight tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-[var(--muted)] text-sm line-height-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-[var(--deep)]/20 px-2.5 py-0.5 text-xs font-medium text-[var(--primary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded bg-[var(--primary)] text-white px-4 py-2 text-sm font-medium transition-colors hover:bg-[var(--deep)]"
                    >
                      View Demo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded border border-[var(--primary)] text-[var(--primary)] px-4 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-[var(--fg)]"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}