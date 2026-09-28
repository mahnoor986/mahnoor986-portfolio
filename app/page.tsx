import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[--bg] text-[--fg] antialiased">

      {/* Hero */}
      <header className="max-w-4xl mx-auto py-24 px-4 sm:py-32">
        <div className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-between gap-6">
          <div className="text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-3">
              Jordan Mitchell
            </h1>
            <p className="text-lg sm:text-xl text-[--muted] max-w-xl sm:max-w-2xl">
              Senior Full-Stack Developer
            </p>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="#projects"
              className="relative inline-flex items-center gap-2 rounded-full border border-[--deep] bg-transparent px-5 py-3 text-sm font-medium transition-colors hover:bg-[--deep] hover:text-[--primary]"
            >
              View Projects
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="mailto:hello@jordanmitchell.dev"
              className="relative inline-flex items-center gap-2 rounded-full border border-[--deep] bg-[--primary] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[--deep] text-[--fg]"
            >
              Hello
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="M9 10v8l4-4h1L9 10z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-3xl mx-auto px-4 pb-24">
        <div className="prose lg:prose-xl max-w-none">
          <h2 className="text-3xl sm:text-4xl font-bold leading-none tracking-tight mb-6">
            About Me
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-8">
            I am a senior full-stack developer building elegant, performant web applications. I craft clean interfaces and maintainable code, with a focus on developer experience and user-centered design.
          </p>
          <div className="space-y-4">
            <p className="text-base sm:text-lg leading-relaxed">
              When I am not writing code, I enjoy open-source contributions, running, and exploring typography. I believe great software starts with great design systems and thoughtful interactions.
            </p>
<p className="text-base sm:text-lg leading-relaxed">
                I am currently available for freelance projects and full-time opportunities. Let us build something great together.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto px-4 pb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-[--muted] max-w-2xl mx-auto">
            A curated selection of work I am proud of.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1 */}
          <article
            className="group rounded-lg border border-[--deep] bg-[--px] backdrop-filter backdrop-blur-sm overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src="/next.svg"
              alt="Next.js SaaS platform"
              width={400}
              height={300}
              className="aspect-w-16 aspect-h-10 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold leading-tight tracking-tight mb-2">Next.js SaaS Platform</h3>
              <p className="text-[--muted] text-sm line-height-relaxed">
                A full-featured SaaS application with Stripe integration, role-based access, and real-time collaboration.
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  className="flex-1 rounded bg-[--primary] text-white px-4 py-2 text-sm font-medium transition-colors hover:bg-[--deep]"
                >
                  View Project
                </a>
                <a
                  href="#"
                  className="rounded border border-[--primary] text-[--primary] px-4 py-2 text-sm font-medium transition-colors hover:bg-white hover-text-[--fg]"
                >
                  Code
                </a>
              </div>
            </div>
          </article>

          {/* Project 2 */}
          <article
            className="group rounded-lg border border-[--deep] bg-[--px] backdrop-filter backdrop-blur-sm overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src="/next.svg"
              alt="React admin dashboard"
              width={400}
              height={300}
              className="aspect-w-16 aspect-h-10 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold leading-tight tracking-tight mb-2">React Admin Dashboard</h3>
              <p className="text-[--muted] text-sm line-height-relaxed">
                Dashboard with real-time analytics, chart visualizations, and customizable widgets built with React and Vite.
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  className="flex-1 rounded bg-[--primary] text-white px-4 py-2 text-sm font-medium transition-colors hover:bg-[--deep]"
                >
                  View Project
                </a>
                <a
                  href="#"
                  className="rounded border border-[--primary] text-[--primary] px-4 py-2 text-sm font-medium transition-colors hover:bg-white hover-text-[--fg]"
                >
                  Code
                </a>
              </div>
            </div>
          </article>

          {/* Project 3 */}
          <article
            className="group rounded-lg border border-[--deep] bg-[--px] backdrop-filter backdrop-blur-sm overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src="/next.svg"
              alt="TypeScript utility library"
              width={400}
              height={300}
              className="aspect-w-16 aspect-h-10 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold leading-tight tracking-tight mb-2">
                TypeScript Utility Library
              </h3>
              <p className="text-[--muted] text-sm line-height-relaxed">
                A collection of typed utility functions for React applications, focused on developer experience and type safety.
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  className="flex-1 rounded bg-[--primary] text-white px-4 py-2 text-sm font-medium transition-colors hover:bg-[--deep]"
                >
                  View Project
                </a>
                <a
                  href="#"
                  className="rounded border border-[--primary] text-[--primary] px-4 py-2 text-sm font-medium transition-colors hover:bg-white hover-text-[--fg]"
                >
                  Code
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 pb-24">
        <div className="bg-[--deep] rounded-lg border border-[--primary]/20 p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-4">
            Let us Build Something Together
          </h2>
          <p className="text-lg sm:text-xl text-[--muted] mb-8 max-w-2xl mx-auto">
            Have a project in mind or want to chat about frontend architecture? I would love to hear what you are working on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@jordanmitchell.dev"
              className="flex-1 rounded bg-[--primary] text-white px-6 py-3 text-sm font-medium transition-colors hover:bg-[--deep]"
            >
              Say Hello
            </a>
            <a
              href="#projects"
              className="flex-1 rounded border border-[--primary] text-[--primary] px-6 py-3 text-sm font-medium transition-colors hover:bg-white hover-text-[--fg]"
            >
              View Work
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}