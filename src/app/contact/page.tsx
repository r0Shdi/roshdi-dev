"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      setError("Please fill both fields before sending 😅");
      return;
    }
    setError("");

    const whatsappNumber = "201021087649";
    const text = `👋 Hello, I'm ${name}\n\n${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      className="
        max-w-2xl mx-auto px-6 py-12
        text-[var(--foreground)]
        transition-colors duration-300
      "
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl md:text-4xl font-bold mb-4 text-[var(--accent)]"
      >
        Contact Me 💬
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-base md:text-lg mb-10 text-[var(--foreground)]/80"
      >
        Feel free to reach out for collaborations or just to say hi 👨‍💻
      </motion.p>

      {/* 🌐 Contact Links */}

<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  className="flex flex-wrap justify-center gap-6 mb-10"
>
  {[
    {
      href: "https://github.com/r0Shdi",
      icon: FaGithub,
      label: "GitHub",
    },
    {
      href: "mailto:roshdyhamdy06@gmail.com",
      icon: FaEnvelope,
      label: "Email",
    },
    {
      href: "https://linkedin.com/in/roshdyfarag",
      icon: FaLinkedin,
      label: "LinkedIn",
    },
    {
      href: "https://wa.me/201021087649",
      icon: FaWhatsapp,
      label: "WhatsApp",
    },
  ].map(({ href, icon: Icon, label }) => (
    <motion.a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center group"
      title={label}
    >
      <Icon
        className="text-3xl md:text-4xl text-gray-700 dark:text-gray-300 group-hover:text-[var(--accent)] transition-colors"
      />
      <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">
        {label}
      </span>
    </motion.a>
  ))}
</motion.div>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        onSubmit={handleSubmit}
        className="grid gap-5"
      >
        <div>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="
              w-full p-3 rounded-xl border border-[var(--border)]
              bg-[var(--background)] text-[var(--foreground)]
              placeholder:text-gray-500 dark:placeholder:text-gray-400
              focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent
              outline-none transition-all duration-200
            "
          />
        </div>

        <div>
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="
              w-full p-3 rounded-xl border border-[var(--border)]
              bg-[var(--background)] text-[var(--foreground)]
              placeholder:text-gray-500 dark:placeholder:text-gray-400
              focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent
              outline-none h-36 resize-none transition-all duration-200
            "
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm font-medium -mt-2">{error}</p>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="
            w-full py-3 px-6 rounded-xl font-semibold
            bg-gradient-to-r from-indigo-600 to-violet-500
            dark:from-emerald-500 dark:to-cyan-500
            text-white shadow-md hover:shadow-lg
            transition-all duration-300 ease-out
          "
        >
          Send Message via WhatsApp
        </motion.button>
      </motion.form>
    </section>
  );
}
