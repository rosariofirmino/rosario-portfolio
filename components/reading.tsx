"use client";

import { readingsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

type ReadingProps = (typeof readingsData)[number] & { index: number };

const ease = [0.23, 1, 0.32, 1] as const;

export default function Reading({
  title,
  author,
  imageUrl,
  href,
  index,
}: ReadingProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group glass overflow-hidden rounded-2xl flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease }}
      viewport={{ once: true }}
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Subtle overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(180deg, transparent 50%, var(--bg-base) 100%)",
          }}
        />
      </div>
      <div className="p-3.5 flex-1 flex flex-col">
        <h3
          className="text-xs font-semibold leading-tight mb-1 line-clamp-2"
          style={{ color: "var(--text-primary)" }}
        >
          {title}
        </h3>
        <p className="text-[0.6rem] mt-auto" style={{ color: "var(--text-tertiary)" }}>
          {author}
        </p>
      </div>
    </motion.a>
  );
}
