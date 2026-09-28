"use client";

import { motion } from "framer-motion";

export function Experience() {
  const experiences = [
    {
      id: "1",
      position: "Senior Full-Stack Developer",
      company: "SaaS Corp",
      period: "2022 - 2024",
      location: "Remote",
      points: [
        "Led a team of 4 developers building a SaaS platform used by 5k+ businesses",
        "Architected the application using Next.js App Router and TypeScript",
        "Implemented Stripe integration and subscription management",
        "Improved page load performance by 60% through optimization",
      ],
    },
    {
      id: "2",
      position: "Full-Stack Developer",
      company: "Scaleup Labs",
      period: "2020 - 2022",
      location: "New York, NY",
      points: [
        "Built micro-frontend architecture for enterprise client",
        "Developed RESTful APIs with Node.js and Express",
        "Reduced build times by 50% using Turbopack",
        "Migrated from JavaScript to TypeScript across codebase",
      ],
    },
    {
      id: "3",
      position: "Frontend Developer",
      company: "Digital Agency",
      period: "2018 - 2020",
      location: "Boston, MA",
      points: [
        "Built responsive websites and web applications for clients",
        "Created design systems and component libraries",
        "Collaborated with UX designers on pixel-perfect implementations",
        "Provided technical guidance on browser compatibility",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            Experience
          </motion.h2>
          <motion.p
            className="text-[var(--muted)] text-lg leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 0.8, delay: 0.1 }}
          >
            Professional experience across various roles and organizations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group rounded-lg border border-[var(--deep)] bg-[var(--px)] p-6 md:p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-2">
                  <span
                    className="w-2 h-2 rounded-full bg-[var(--primary)] flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-[var(--muted)]">{exp.period}</span>
                </div>
                <h4 className="font-medium text-lg">{exp.position}</h4>
                <p className="text-[var(--muted)]">{exp.company}</p>
                <p className="text-[var(--muted)]">{exp.location}</p>
                <ul className="list-disc list-inside text-[var(--muted)] space-y-2">
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}