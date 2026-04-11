"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "3+", label: "Years Exp." },
  { value: "Sr. SWE", label: "At HubSpot" },
  { value: "UF", label: "CS + Math" },
];

const ease = [0.23, 1, 0.32, 1] as const;

export default function About() {
  return (
    <motion.section
      className="max-w-[54rem] scroll-mt-28 px-4 w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      id="about"
    >
      <p className="heading">Who I Am</p>
      <h2 className="heading-main">
        Engineer with a product mindset.
      </h2>

      <div className="grid sm:grid-cols-5 gap-6 items-start">
        {/* Text — takes 3 cols */}
        <motion.div
          className="sm:col-span-3 glass-static p-8 sm:p-10"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease }}
          viewport={{ once: true }}
        >
          <p className="leading-relaxed mb-5 text-[1.05rem]" style={{ color: "var(--text-secondary)" }}>
            I build at the intersection of{" "}
            <span className="font-semibold" style={{ color: "var(--accent)" }}>frontend craft</span> and{" "}
            <span className="font-semibold" style={{ color: "var(--accent-2)" }}>product thinking</span>.
            At HubSpot, I lead large-scale frontend migrations across 5+ repos, architect
            performance-critical features, and leverage AI tooling daily to accelerate delivery
            across massive codebases.
          </p>
          <p className="leading-relaxed text-sm" style={{ color: "var(--text-tertiary)" }}>
            B.S. Computer Science &amp; Mathematics from the University of Florida, graduated
            Cum Laude. I take initiative, obsess over details, and always develop with the
            end user in mind.
          </p>
        </motion.div>

        {/* Stats — takes 2 cols */}
        <div className="sm:col-span-2 grid grid-cols-1 gap-3">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="glass-static text-center p-5 rounded-2xl"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease }}
              viewport={{ once: true }}
            >
              <div className="text-2xl font-bold grad-text mb-1">{s.value}</div>
              <div className="text-[0.65rem] uppercase tracking-widest" style={{ color: "var(--text-tertiary)" }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
