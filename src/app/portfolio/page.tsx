"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "VitagearX – Biomedical Equipment Store",
    description:
      "A full-stack e-commerce platform built with ASP.NET Core, PostgreSQL, and Next.js. Deployed securely on AWS using Docker and Kubernetes.",
    tech: ["ASP.NET Core", "Next.js", "PostgreSQL", "AWS", "Docker"],
    link: "https://vitagearx.com",
    image: "/images/vitagearx.png",
  },
  {
    title: "Real-time Chat App",
    description:
      "A WebSocket-powered chat app with JWT authentication and Express backend for real-time communication.",
    tech: ["React", "Express.js", "WebSocket", "JWT"],
    link: "https://github.com/r0Shdi",
    image: "/images/chatapp.png",
  },
  {
    title: "Blood Vessel Detection (ESP32-CAM + YOLOv8)",
    description:
      "An AI-based biomedical image processing system integrating ESP32-CAM, YOLOv8, and Flask for medical analysis.",
    tech: ["Python", "Flask", "YOLOv8", "ESP32-CAM"],
    link: "https://github.com/r0Shdi",
    image: "/images/yolov8.png",
  },
];

export default function PortfolioPage() {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold mb-8 text-accent text-center">
        Portfolio
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="bg-card dark:bg-card-dark rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            whileHover={{ y: -5 }}
          >
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold text-foreground mb-2">
                {project.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-accent/10 text-accent text-xs font-medium px-2 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href={project.link}
                target="_blank"
                className="text-accent font-medium hover:underline text-sm"
              >
                View Project →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
