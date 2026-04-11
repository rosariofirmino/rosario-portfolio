"use client";

import Image from "next/image";
import React, { useEffect, useRef, useCallback } from "react";
import rosarioHeadshot from "@/public/rosario.jpeg";
import { motion } from "framer-motion";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { HiOutlineEnvelope } from "react-icons/hi2";

const roles = [
  "Senior Software Engineer",
  "Full-Stack Developer",
  "AI Tooling Enthusiast",
  "Product Builder",
];

// Smooth spring-based animation config
const smooth = {
  type: "spring" as const,
  stiffness: 80,
  damping: 20,
  mass: 0.8,
};

export default function Intro() {
  const textRef = useRef<HTMLSpanElement>(null);
  const stateRef = useRef({ roleIndex: 0, charIndex: 0, isDeleting: false });
  const rafRef = useRef<ReturnType<typeof setTimeout>>();

  const tick = useCallback(() => {
    const { roleIndex, charIndex, isDeleting } = stateRef.current;
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      const next = charIndex + 1;
      if (textRef.current) textRef.current.textContent = currentRole.slice(0, next);
      stateRef.current.charIndex = next;

      if (next === currentRole.length) {
        rafRef.current = setTimeout(() => {
          stateRef.current.isDeleting = true;
          tick();
        }, 2200);
        return;
      }
      rafRef.current = setTimeout(tick, 70 + Math.random() * 40);
    } else {
      const next = charIndex - 1;
      if (textRef.current) textRef.current.textContent = currentRole.slice(0, next);
      stateRef.current.charIndex = next;

      if (next === 0) {
        stateRef.current.isDeleting = false;
        stateRef.current.roleIndex = (roleIndex + 1) % roles.length;
        rafRef.current = setTimeout(tick, 400);
        return;
      }
      rafRef.current = setTimeout(tick, 30);
    }
  }, []);

  useEffect(() => {
    rafRef.current = setTimeout(tick, 800);
    return () => {
      if (rafRef.current) clearTimeout(rafRef.current);
    };
  }, [tick]);

  return (
    <section
      className="mb-28 max-w-[54rem] text-center sm:mb-0 scroll-mt-[100rem] relative"
      id="home"
    >
      {/* Decorative corner accents */}
      <div className="absolute -top-10 -left-10 w-32 h-32 border-l-2 border-t-2 border-[var(--accent)]/10 rounded-tl-3xl pointer-events-none hidden sm:block" />
      <div className="absolute -top-10 -right-10 w-32 h-32 border-r-2 border-t-2 border-[var(--accent-2)]/10 rounded-tr-3xl pointer-events-none hidden sm:block" />

      {/* Headshot with spinning gradient border */}
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...smooth, delay: 0.1 }}
      >
        <div className="anim-border rounded-full">
          <Image
            src={rosarioHeadshot}
            alt="Rosario Firmino Palazzolo"
            width={120}
            height={120}
            priority
            className="h-[120px] w-[120px] rounded-full object-cover border-[3px] border-[var(--bg-base)]"
          />
        </div>
      </motion.div>

      {/* Name + typing role */}
      <motion.div
        className="mt-10 mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...smooth, delay: 0.2 }}
      >
        <p className="text-[0.7rem] font-mono tracking-[0.25em] uppercase mb-4"
           style={{ color: "var(--text-tertiary)" }}>
          Tampa, FL
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter leading-[0.95]">
          <span className="grad-text">Rosario</span>
          <br />
          <span style={{ color: "var(--text-primary)" }}>Palazzolo</span>
        </h1>

        {/* Typing animation */}
        <div className="h-10 flex items-center justify-center mt-5">
          <span className="font-mono text-lg sm:text-xl" style={{ color: "var(--text-secondary)" }}>
            <span ref={textRef} />
            <span className="cursor-blink" />
          </span>
        </div>
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="mt-2 mb-10 max-w-lg mx-auto leading-relaxed text-base"
        style={{ color: "var(--text-secondary)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...smooth, delay: 0.35 }}
      >
        Senior Software Engineer at{" "}
        <span className="font-semibold" style={{ color: "var(--accent)" }}>
          HubSpot
        </span>
        . Crafting scalable products with React, TypeScript, and AI-augmented workflows.
      </motion.p>

      {/* CTAs */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...smooth, delay: 0.5 }}
      >
        <a
          href="/RosarioResume.docx"
          download
          className="group glass flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-medium"
        >
          Resume
          <HiDownload className="group-hover:translate-y-0.5 transition-transform duration-500" />
        </a>
        <a
          href="mailto:rosariofirmino42@gmail.com"
          className="group glass flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-medium"
        >
          Say Hello
          <HiOutlineEnvelope className="group-hover:rotate-12 transition-transform duration-500" />
        </a>
        <div className="flex gap-2">
          <a
            href="https://www.linkedin.com/in/rosariofp/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-3.5 rounded-full text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300"
          >
            <BsLinkedin size={17} />
          </a>
          <a
            href="https://github.com/rosariofirmino"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-3.5 rounded-full text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300"
          >
            <BsGithub size={17} />
          </a>
        </div>
      </motion.div>

    </section>
  );
}
