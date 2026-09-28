"use client";

export function Footer() {
  return (
    <footer className="py-12 bg-[var(--deep)] text-[var(--fg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <svg
              className="w-6 h-6 text-[var(--primary)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path d="M12 6v6l4 2" />
              <path d="M18 6l-4 2" />
              <path d="M6 6l4 2" />
            </svg>
            <span className="text-sm font-medium">Portfolio</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#projects"
              className="text-sm hover:text-[var(--primary)] transition-colors"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-sm hover:text-[var(--primary)] transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm hover:text-[var(--primary)] transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Jordan Mitchell. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}