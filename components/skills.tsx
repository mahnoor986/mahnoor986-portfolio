"use client";

import { motion } from "framer-motion";

export function Skills() {
  const technologies = [
    { name: "React", category: "Frontend", level: 90 },
    { name: "TypeScript", category: "Frontend", level: 95 },
    { name: "Next.js", category: "Framework", level: 92 },
    { name: "Node.js", category: "Backend", level: 75 },
    { name: "Tailwind CSS", category: "Styling", level: 85 },
    { name: "Python", category: "Backend", level: 65 },
    { name: "Docker", category: "DevOps", level: 70 },
    { name: "Git", category: "Tools", level: 90 },
  ];

  return (
    <section id="skills" className="py-24 sm:py-32 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            className="text-[var(--muted)] text-lg leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 0.8, delay: 0.1 }}
          >
            Technologies I work with and expertize in.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group rounded-lg border border-[var(--deep)] p-6 bg-[var(--px)] hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-medium">{tech.name}</span>
                <span
                  className="text-sm text-[var(--muted)]"
                  aria-label={`${tech.name} proficiency level`}
                >
                  {tech.level}%
                </span>
              </div>
              <div className="h-2 rounded-full bg-[var(--deep)] overflow-hidden">
                <div
                  className="h-full bg-[var(--primary)] rounded-full transition-all duration-700"
                  style={{ width: `${tech.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}