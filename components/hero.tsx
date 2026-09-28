"use client";

import { motion } from "framer-motion";
import { Mail, Github, LinkedIn, Twitter } from "lucide-react";

export function Hero() {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    setShowTitle(true);
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen relative bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              className="text-5xl sm:text-6xl font-bold leading-tight tracking-tital mb-4"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Jordan Mitchell
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-[var(--muted)] leading-relaxed mb-6"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            >
              Senior Full-Stack Developer building elegant, performant web applications.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href="#projects"
                className="rounded bg-[var(--primary)] text-white px-6 py-3 text-sm font-medium transition-colors hover:bg-[var(--deep)]"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="mailto:jordan@example.com"
                className="rounded border border-[var(--primary)] text-[var(--primary)] px-6 py-3 text-sm font-medium transition-colors hover:bg-white hover:text-[var(--fg)]"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
              >
                Say Hello
              </motion.a>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/next.svg"
              alt="Next.js logo"
              width={400}
              height={300}
              className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-2xl"
              priority
            />
            <motion.div
              className="absolute -bottom-4 -right-4 rounded-full bg-[var(--deep)] border border-[var(--primary)] w-16 h-16"
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ type: "spring", delay: 0.3 }}
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex items-center justify-center">
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{
              opacity: [0, 1, 0],
              transition: {
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1,
              },
            }}
          >
            <span className="text-[var(--muted)] text-sm">Scroll</span>
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}