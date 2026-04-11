"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 w-full">
      <p className="heading">Career</p>
      <h2 className="heading-main">Where I&apos;ve worked.</h2>

      <VerticalTimeline lineColor="var(--accent)">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "1.25rem",
                boxShadow: "var(--card-shadow)",
                padding: "1.5rem 2rem",
                color: "var(--text-primary)",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid var(--border)",
              }}
              date={item.date}
              iconStyle={{
                display: "none",
              }}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-xl mt-0.5" style={{ color: "var(--accent)" }}>
                  {item.icon}
                </span>
                <div>
                  <h3
                    className="font-bold text-lg !mt-0 leading-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm font-medium !mt-0.5"
                    style={{ color: "var(--accent)" }}
                  >
                    {item.company}
                  </p>
                </div>
              </div>
              <p
                className="text-xs font-mono !mt-1"
                style={{ color: "var(--text-tertiary)" }}
              >
                {item.location}
              </p>
              <p
                className="text-sm !mt-3 !font-normal leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>

      <style jsx global>{`
        .vertical-timeline::before {
          background: linear-gradient(
            180deg,
            transparent 0%,
            var(--accent) 10%,
            var(--accent-2) 90%,
            transparent 100%
          ) !important;
          width: 2px !important;
        }
        .vertical-timeline-element-icon {
          display: none !important;
        }
        .vertical-timeline-element-date {
          color: var(--text-tertiary) !important;
          font-size: 0.8rem !important;
          letter-spacing: 0.03em;
        }
        .vertical-timeline-element-content {
          transition: border-color 0.4s ease, box-shadow 0.4s ease !important;
        }
        .vertical-timeline-element-content:hover {
          border-color: var(--border-hover) !important;
          box-shadow: var(--card-hover-shadow) !important;
        }
      `}</style>
    </section>
  );
}
