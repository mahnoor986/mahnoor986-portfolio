"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[var(--bg)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose lg:prose-2xl max-w-none mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 0.8 }}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-[var(--muted)] text-lg leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 0.8, delay: 0.1 }}
            >
              I'm a senior full-stack developer with over 6 years of experience building
              scalable web applications and developer tools. I specialize in modern
              JavaScript ecosystems, TypeScript architecture, and crafting pixel-perfect
              user interfaces that balance aesthetics with functionality.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            {/* Skills Bar Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium mb-2">Professional Skills</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium">React & TypeScript</span>
                  <div className="h-2 rounded-full bg-[var(--deep)] overflow-hidden">
                    <div
                      className="h-full bg-[var(--primary)] rounded-full transition-width"
                      style={{ width: "85%" }}
                    />
                  </div>
                </div>
                <div>
                  <span className="font-medium">Next.js & App Router</span>
                  <div className="h-2 rounded-full bg-[var(--deep)] overflow-hidden">
                    <div
                      className="h-full bg-[var(--primary)] rounded-full transition-width"
                      style={{ width: "80%" }}
                    />
                  </div>
                </div>
                <div>
                  <span className="font-medium">Node.js & Express</span>
                  <div className="h-2 rounded-full bg-[var(--deep)] overflow-hidden">
                    <div
                      className="h-full bg-[var(--primary)] rounded-full transition-width"
                      style={{ width: "70%" }}
                    />
                  </div>
                </div>
                <div>
                  <span className="font-medium">CSS & Tailwind</span>
                  <div className="h-2 rounded-full bg-[var(--deep)] overflow-hidden">
                    <div
                      className="h-full bg-[var(--primary)] rounded-full transition-width"
                      style={{ width: "75%" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <h3 className="text-xl font-medium mb-4">Career Timeline</h3>
              <div className="space-y-6 position-relative">
                <div className="pt-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center flex-shrink-0"
                    >
                      <span className="text-sm font-bold text-[var(--bg)]">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Senior Developer</h4>
                      <p className="text-sm text-[var(--muted)]">
                        Led a team of 4 developers building a SaaS platform
                      </p>
                      <p className="text-xs text-[var(--muted)]">
                        2022 - 2024
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-8 h-8 rounded-full bg-[var(--deep)] flex items-center justify-center flex-shrink-0"
                    >
                      <span className="text-sm font-bold text-[var(--bg)]">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Full-Stack Developer</h4>
                      <p className="text-sm text-[var(--muted)]">
                        Built micro-frontend architecture for enterprise client
                      </p>
                      <p className="text-xs text-[var(--muted)]">
                        2020 - 2022
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center flex-shrink-0"
                    >
                      <span className="text-sm font-bold text-[var(--bg)]">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Junior Developer</h4>
                      <p className="text-sm text-[var(--muted)]">
                        Started career at digital agency
                      </p>
                      <p className="text-xs text-[var(--muted)]">
                        2018 - 2020
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}