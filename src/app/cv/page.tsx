"use client";

import { motion } from "framer-motion";
import { Mail, Github, Phone } from "lucide-react";
import Link from "next/link";

export default function CVPage() {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 sm:px-6 py-10 transition-colors duration-300 
                 text-gray-900 dark:text-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-indigo-700 dark:text-emerald-400">
          Roshdi Farag
        </h1>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
          Full-Stack Developer | IT Engineer
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-3 sm:gap-6 mt-4 text-sm text-gray-600 dark:text-gray-400">
          <a
            href="tel:01021087649"
            className="flex items-center gap-2 hover:text-indigo-700 dark:hover:text-emerald-400 transition-colors"
          >
            <Phone size={16} /> 0102108 7649
          </a>
          <a
            href="mailto:roshdifarag01@gmail.com"
            className="flex items-center gap-2 hover:text-indigo-700 dark:hover:text-emerald-400 transition-colors"
          >
            <Mail size={16} /> roshdifarag01@gmail.com
          </a>
          <Link
            href="https://github.com/r0Shdi"
            target="_blank"
            className="flex items-center gap-2 hover:text-indigo-700 dark:hover:text-emerald-400 transition-colors"
          >
            <Github size={16} /> GitHub
          </Link>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-10">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 text-indigo-700 dark:text-emerald-400">
          Professional Summary
        </h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300 text-sm sm:text-base">
          Full-stack developer with expertise in Linux, C#, ASP.NET Core,
          TypeScript, React/Next.js, and PostgreSQL. Skilled in building scalable,
          secure, and high-performance web applications. Experienced in cloud
          deployment (AWS EC2, RDS, S3, VPC, Docker, Kubernetes) and authentication
          with JWT and OAuth. Passionate about clean architecture and delivering
          user-focused solutions.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-10">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 text-indigo-700 dark:text-emerald-400">
          Technical Skills
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-800 dark:text-gray-200 text-sm sm:text-base">
          <li>Programming Languages: C#, TypeScript, Python</li>
          <li>Backend Frameworks: ASP.NET Core, Express.js</li>
          <li>Frontend: React.js, Next.js (SSR/CSR), React Query, Axios</li>
          <li>Databases: PostgreSQL, MongoDB</li>
          <li>ORM: Entity Framework Core</li>
          <li>Authentication: JWT, Passport.js (OAuth, Local)</li>
          <li>Cloud: AWS (EC2, RDS, S3, VPC, EKS), Cloudflare</li>
          <li>Containerization: Docker, Kubernetes (AWS EKS)</li>
          <li>Operating Systems: Linux (Amazon Linux, Ubuntu)</li>
          <li>Networking: Security Groups, ACLs, Route Tables</li>
          <li>Scripting: Bash Shell</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="mb-10">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 text-indigo-700 dark:text-emerald-400">
          Projects
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-gray-100">
              VitagearX – Biomedical Equipment Store
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm sm:text-base space-y-1">
              <li>
                Full-stack e-commerce platform for biomedical equipment:
                <Link
                  href="https://vitagearx.com"
                  target="_blank"
                  className="text-indigo-700 dark:text-emerald-400 hover:underline ml-1"
                >
                  vitagearx.com
                </Link>
              </li>
              <li>Backend: ASP.NET Core + PostgreSQL (AWS RDS), role-based auth (JWT)</li>
              <li>Frontend: React.js, Next.js (SSR/CSR), React Query, Axios</li>
              <li>Deployment: AWS EC2 + Nginx + Certbot (SSL Reverse Proxy)</li>
              <li>Additional systems with TypeScript, Express.js, Drizzle ORM</li>
              <li>Deployed via Docker and AWS EKS</li>
              <li>Integrated OAuth and Local auth (Passport.js)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-gray-100">
              Real-time Chat App with WebSockets
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              Full-duplex real-time communication app using WebSockets and secure
              authentication.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-gray-100">
              Blood Vessels Detection with ESP32-CAM & YOLOv8
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              Machine vision system integrating ESP32-CAM, YOLOv8, and Flask for
              biomedical analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="mb-10">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 text-indigo-700 dark:text-emerald-400">
          Languages
        </h2>
        <ul className="text-gray-700 dark:text-gray-300 text-sm sm:text-base space-y-1">
          <li>English — Professional Proficiency</li>
          <li>Arabic — Native</li>
          <li>German — A1 Beginner</li>
        </ul>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-lg sm:text-xl font-semibold mb-3 text-indigo-700 dark:text-emerald-400">
          Education
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
          <strong className="text-gray-900 dark:text-gray-100">
            Biomedical Engineering
          </strong>
          , MU, Egypt (Oct 2020 - Jan 2025)
        </p>
      </section>
    </motion.div>
  );
}
