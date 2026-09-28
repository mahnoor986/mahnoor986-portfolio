"use client";

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)] border-b border-[var(--deep)]/50 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2"
            aria-label="Portfolio homepage"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path d="M12 6v6l4 2" />
              <path d="M18 6l-4 2" />
              <path d="M6 6l4 2" />
            </svg>
            <span className="text-[var(--primary)] font-bold">Portfolio</span>
          </a>

          <button
            aria-controls="menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div
            id="menu"
            className={cn(
              "hidden lg:flex items-center gap-8",
              isMenuOpen && "flex flex-col gap-4 absolute top-16 right-0 w-64 bg-[var(--bg)] border border-[var(--deep)]/50 rounded-lg p-6 shadow-lg"
            )}
          >
            <a
              href="#projects"
              className="text-[var(--fg)] hover:text-[var(--primary)] transition-colors"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-[var(--fg)] hover:text-[var(--primary)] transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-[var(--fg)] hover:text-[var(--primary)] transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-[var(--fg)] hover:text-[var(--primary)] transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-[var(--fg)] hover:text-[var(--primary)] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}