"use client";

import { motion } from "framer-motion";

export function Journey() {
  const milestones = [
    {
      year: "2018",
      title: "Junior Developer",
      subtitle: "Digital Agency",
      description: "Started my journey building responsive WordPress sites and static HTML pages.",
    },
    {
      year: "2019",
      title: "Frontend Specialist",
      subtitle: "Tech Startup",
      description: "Focused on React interstate and modern CSS architecture for early-stage products.",
    },
    {
      year: "2020",
      title: "Full-Stack Developer",
      subtitle: "Scaleup",
      description: "Transitioned to Node.js, built APIs and scaled applications for 10k+ users.",
    },
    {
      year: "2021",
      title: "Senior Developer",
      subtitle: "SaaS Company",
      description: "Led team of 3, architected multi-tenant SaaS platform with Stripe integration.",
    },
    {
      year: "2022",
      title: "Lead Engineer",
      subtitle: "Enterprise",
      description: "Directed frontend strategy for 50+ person engineering org.",
    },
    {
      year: "2023",
      title: "Principal Engineer",
      subtitle: "AI Startup",
      description: "Evaluated AI-assisted development workflows and RAG systems.",
    },
    {
      year: "2024",
      title: "Independent Developer",
      subtitle: "Portfolio Career",
      description: "Freelance and consulting, focusing on elegant, performant web apps.",
    },
  ];

  return (
    <section id="journey" className="py-24 sm:py-32 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            My Journey
          </motion.h2>
          <motion.p
            className="text-[var(--muted)] text-lg leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 0.8, delay: 0.1 }}
          >
            A chronological look at my path as a developer.
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 h-full w-0.5 bg-[var(--deep)]" />

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              const sideClass = isEven ? "col-span-1" : "col-span-2";
              const dotClass = isEven
                ? "rotate-6"
                : "rotate-12";

              return (
                <div
                  key={milestone.year}
                  className={cn(
                    "group relative pt-8",
                    sideClass,
                    "flex items-start gap-4"
                  )}
                >
                  {/* Timeline dot */}
                  <div
                    className={cn(
                      "absolute left-1/2 -translate-x-1/2 top-0 w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center",
                      `text-[var(--bg)] font-bold text-sm ${dotClass}`
                    )}
                  >
                    {milestone.year}
                  </div>

                  {/* Content */}
                  <div>
                    <h4 className="font-medium mb-1">{milestone.title}</h4>
                    <p className="text-sm text-[var(--muted)]">{milestone.subtitle}</p>
                    <p className="text-[var(--muted)] text-sm">{milestone.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}