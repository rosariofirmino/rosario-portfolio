"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = links.map((l) => l.hash.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection("#" + sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="z-[999] relative">
      <motion.div
        className={`fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none backdrop-blur-2xl
          sm:top-5 sm:h-[3rem] sm:rounded-full transition-all duration-500
          ${scrolled ? "border border-[var(--border)] sm:w-[36rem]" : "border border-transparent sm:w-[36rem]"}`}
        style={{
          background: scrolled
            ? "var(--surface-elevated)"
            : "transparent",
        }}
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      />

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.35rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.8rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-0.5">
          {links.map((link, i) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: i * 0.05,
                duration: 0.6,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              <Link
                className={`relative flex w-full items-center justify-center px-3 py-3 transition-colors duration-500 ${
                  activeSection === link.hash
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-tertiary)] hover:text-[var(--text-primary)]"
                }`}
                href={link.hash}
              >
                {link.name}
                {activeSection === link.hash && (
                  <motion.span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--accent)]"
                    layoutId="nav-dot"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
