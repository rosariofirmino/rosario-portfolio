"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import { HiOutlineExternalLink } from "react-icons/hi";

type ProjectProps = (typeof projectsData)[number] & { index: number };

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  href,
  index,
}: ProjectProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group glass overflow-hidden rounded-2xl flex flex-col h-full w-full"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 30%, var(--bg-base) 100%)",
          }}
        />

        {/* External link badge */}
        <div className="absolute top-4 right-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
          <div
            className="backdrop-blur-md p-2 rounded-xl border"
            style={{
              background: "var(--accent-subtle)",
              borderColor: "var(--border-hover)",
            }}
          >
            <HiOutlineExternalLink className="text-[var(--accent)]" size={16} />
          </div>
        </div>

        {/* Project number */}
        <div className="absolute bottom-4 left-5 font-mono text-[0.6rem] tracking-widest uppercase"
          style={{ color: "var(--text-tertiary)" }}>
          0{index + 1}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3
          className="text-xl font-bold mb-2 transition-colors duration-500"
          style={{ color: "var(--text-primary)" }}
        >
          <span className="link-line group-hover:text-[var(--accent)]">{title}</span>
        </h3>
        <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--text-secondary)" }}>
          {description}
        </p>
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <li key={i} className="pill text-[0.65rem]">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
