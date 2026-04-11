"use client";

import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="py-12 px-4"
      style={{ borderTop: "1px solid var(--border)" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-[54rem] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
          &copy; {new Date().getFullYear()} Rosario Firmino Palazzolo
        </p>

        <div className="flex items-center gap-5">
          <a
            href="mailto:rosariofirmino42@gmail.com"
            className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300"
          >
            <HiOutlineEnvelope size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/rosariofp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300"
          >
            <BsLinkedin size={15} />
          </a>
          <a
            href="https://github.com/rosariofirmino"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300"
          >
            <BsGithub size={15} />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
