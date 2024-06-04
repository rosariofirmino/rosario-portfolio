"use client";

import { useRef } from "react";
import { readingsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ReadingProps = (typeof readingsData)[number];

export default function Reading({
  title,
  author,
  imageUrl,
  href,
}: ReadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 flex flex-col items-center last:mb-0"
    >
      <section className="max-w-xs text-center">
        <a href={href} target="_blank">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="inline-block"
          >
            <Image
              src={imageUrl}
              alt="Project"
              height={200}
              className="max-w-full rounded-md"
            />
          </motion.div>
        </a>
        <div className="mt-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-600">{author}</p>
        </div>
      </section>
    </motion.div>
  );
}