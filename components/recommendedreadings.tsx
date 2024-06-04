"use client";

import React from "react";
import { readingsData } from "@/lib/data";
import Reading from "./reading";

export default function Projects() {
  return (
    <section id="readings" className="scroll-mt-28 mb-28">
      <h2 className="text-3xl text-center font-medium capitalize mb-8">
        Recommended Readings
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {readingsData.map((reading, index) => (
          <React.Fragment key={index}>
            <Reading {...reading} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}