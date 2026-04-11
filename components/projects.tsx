"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { motion } from "framer-motion";

const ease = [0.23, 1, 0.32, 1] as const;

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 mb-28 max-w-[54rem] mx-auto px-4 w-full">
      <p className="heading">Work</p>
      <h2 className="heading-main">Things I&apos;ve built.</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Project {...project} index={index} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
