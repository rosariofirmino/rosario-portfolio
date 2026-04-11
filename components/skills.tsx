"use client";

import React from "react";
import { skillCategories } from "@/lib/data";
import { motion } from "framer-motion";
import {
  LuBrainCircuit,
  LuCode2,
  LuLayers,
  LuCloud,
  LuCheckCircle2,
} from "react-icons/lu";

const iconMap: Record<string, React.ReactNode> = {
  brain: <LuBrainCircuit size={18} />,
  code: <LuCode2 size={18} />,
  layers: <LuLayers size={18} />,
  cloud: <LuCloud size={18} />,
  check: <LuCheckCircle2 size={18} />,
};

const ease = [0.23, 1, 0.32, 1] as const;

// Build a flat list for the marquee
const allSkills = skillCategories.flatMap((c) => [...c.skills]);

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 w-full">
      <div className="max-w-[54rem] mx-auto px-4">
        <p className="heading">Toolkit</p>
        <h2 className="heading-main">Skills &amp; technologies.</h2>
      </div>

      {/* ── Infinite marquee ── */}
      <div className="relative mb-14 overflow-hidden py-4">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, var(--bg-base), transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(270deg, var(--bg-base), transparent)" }}
        />

        <div className="marquee-track">
          {[...allSkills, ...allSkills].map((skill, i) => (
            <span key={i} className="pill mx-2 shrink-0">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* ── Categorized grid ── */}
      <div className="max-w-[54rem] mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            className="glass-static p-5 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: catIndex * 0.07, ease }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <span style={{ color: "var(--accent)" }}>
                {iconMap[category.icon]}
              </span>
              <h3
                className="text-[0.7rem] font-semibold uppercase tracking-widest"
                style={{ color: "var(--text-secondary)" }}
              >
                {category.name}
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill, si) => (
                <motion.span
                  key={si}
                  className="pill text-[0.7rem]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: catIndex * 0.04 + si * 0.025,
                    ease,
                  }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
