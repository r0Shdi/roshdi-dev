"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Detect system preference or saved preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Theme toggle
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/cv", label: "CV" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className="
        sticky top-0 z-50 
        backdrop-blur-md 
        border-b border-[var(--border)]
        bg-[var(--background)]/70
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-5 py-4 md:px-8">
        {/* ---------- Logo ---------- */}
        <Link
          href="/"
          className="
            text-2xl font-bold tracking-tight
            text-[var(--accent)]
            hover:opacity-90 transition-opacity
          "
        >
          RoshdiFarag
        </Link>

        {/* ---------- Desktop Links ---------- */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative transition-colors duration-200
                  ${isActive
                    ? "text-[var(--accent)] font-semibold"
                    : "text-[var(--foreground)] hover:text-[var(--accent)]"
                  }
                `}
              >
                {link.label}
                {isActive && (
                  <span
                    className="
                      absolute left-0 -bottom-1 w-full h-[2px]
                      bg-[var(--accent)] rounded-full
                    "
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* ---------- Actions (Theme + Menu) ---------- */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="
              p-2 rounded-full
              bg-[var(--muted)]
              hover:scale-105
              transition-transform duration-200
            "
          >
            {theme === "light" ? (
              <Moon size={18} className="text-[var(--foreground)]" />
            ) : (
              <Sun size={18} className="text-yellow-400" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              md:hidden p-2 rounded-lg
              border border-[var(--border)]
              text-[var(--foreground)]
              hover:bg-[var(--muted)]
              transition-colors
            "
          >
            ☰
          </button>
        </div>
      </div>

      {/* ---------- Mobile Menu ---------- */}
      {menuOpen && (
        <div
          className="
            md:hidden flex flex-col gap-3 px-5 pb-4
            bg-[var(--background)]/95
            border-t border-[var(--border)]
            transition-all duration-300
          "
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`
                  transition-colors duration-200
                  ${isActive
                    ? "text-[var(--accent)] font-semibold"
                    : "text-[var(--foreground)] hover:text-[var(--accent)]"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
