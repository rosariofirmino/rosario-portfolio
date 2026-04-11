"use client";

import React from "react";
import { readingsData } from "@/lib/data";
import Reading from "./reading";

export default function RecommendedReadings() {
  return (
    <section id="readings" className="scroll-mt-28 mb-28 max-w-[54rem] mx-auto px-4 w-full">
      <p className="heading">Learning</p>
      <h2 className="heading-main">Books I recommend.</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {readingsData.map((reading, index) => (
          <Reading key={index} {...reading} index={index} />
        ))}
      </div>
    </section>
  );
}
