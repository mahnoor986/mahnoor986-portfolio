"use client";

import { motion } from "framer-motion";

export function ContactCTA() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[var(--deep)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            Let us Build Something Together
          </motion.h2>
          <motion.p
            className="text-[var(--muted)] text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.8, delay: 0.1 }}
          >
            Have a project in mind or want to chat about frontend architecture? I would love
            to hear what you are working on and explore how we can create something
            elegant together.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3">
          <div className="group rounded-lg border border-[var(--primary)]/20 p-6 sm:p-8 text-left">
            <h4 className="font-medium mb-3">Email</h4>
            <a
              href="mailto:jordan@example.com"
              className="text-[var(--primary)] hover:text-[var(--deep)] transition-colors"
            >
              jordan@example.com
            </a>
          </div>
          <div className="group rounded-lg border border-[var(--primary)]/20 p-6 sm:p-8 text-left">
            <h4 className="font-medium mb-3">GitHub</h4>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary)] hover:text-[var(--deep)] transition-colors"
            >
              @jordanmitchell
            </a>
          </div>
          <div className="group rounded-lg border border-[var(--primary)]/20 p-6 sm:p-8 text-left">
            <h4 className="font-medium mb-3">Twitter</h4>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary)] hover:text-[var(--deep)] transition-colors"
            >
              @jordan_tweets
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}