"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Divider() {
  return (
    <motion.div
      className="my-24 sm:my-32 flex justify-center w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-4">
        <div
          className="h-px w-16"
          style={{
            background: "linear-gradient(90deg, transparent, var(--border-hover))",
          }}
        />
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "var(--accent)", boxShadow: "0 0 10px var(--accent-glow)" }}
        />
        <div
          className="h-px w-16"
          style={{
            background: "linear-gradient(270deg, transparent, var(--border-hover))",
          }}
        />
      </div>
    </motion.div>
  );
}
