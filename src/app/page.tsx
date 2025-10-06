"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  SiSharp,
  SiDotnet,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiDocker,
  SiAmazon,
  SiKubernetes,
  SiLinux,
} from "react-icons/si";

export default function HomePage() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center min-h-[70vh] px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-accent">
        Hi, I'm Roshdi Farag 👋
      </h1>

      {/* Intro text */}
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mb-6 leading-relaxed">
        A passionate <span className="text-accent font-medium">Full-Stack Developer</span> 
        specialized in building scalable and secure web applications using 
        <strong> C#</strong>, <strong>.NET</strong>, <strong>React</strong>, 
        and <strong>Next.js</strong>. I focus on crafting elegant solutions 
        that combine performance, clean architecture, and user-centered design.
      </p>


      

      {/* Tech stack icons */}
      <div className="flex flex-wrap justify-center gap-5 mb-8">
        {[
          { Icon: SiSharp, label: "C#" },
          { Icon: SiDotnet, label: ".NET" },
          { Icon: SiReact, label: "React" },
          { Icon: SiNextdotjs, label: "Next.js" },
          { Icon: SiTypescript, label: "TypeScript" },
          { Icon: SiPostgresql, label: "PostgreSQL" },
          { Icon: SiDocker, label: "Docker" },
          { Icon: SiAmazon, label: "AWS" },
          { Icon: SiKubernetes, label: "Kubernetes" },
          { Icon: SiLinux, label: "Linux" },
        ].map(({ Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center group"
          >
            <Icon
              className="text-3xl md:text-4xl text-gray-700 dark:text-gray-300 group-hover:text-accent transition-colors"
              title={label}
            />
            <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
      <Link
  href="/projects"
  aria-label="View Projects"
  className="
    group relative inline-flex items-center gap-2
    px-4 sm:px-6 py-2.5
    text-sm sm:text-base font-semibold rounded-xl
    bg-gradient-to-r from-indigo-600 to-violet-500
    dark:from-emerald-500 dark:to-cyan-500
    shadow-md hover:shadow-lg transform hover:scale-[1.03]
    transition-all duration-300 ease-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    focus-visible:ring-indigo-400 dark:focus-visible:ring-emerald-300
  "
>
  {/* explicit inline-block + important to prevent unexpected overrides */}
  <span className="inline-block !text-white">View Projects</span>

  <ArrowRight
    size={18}
    className="ml-1 !text-white transition-transform duration-200 group-hover:translate-x-1"
  />
</Link>

        <Link
          href="/cv"
          className="border border-accent text-accent px-5 py-2 rounded-xl font-medium hover:bg-accent hover:text-white transition"
        >
          View CV
        </Link>
      </div>
    </motion.div>
  );
}
