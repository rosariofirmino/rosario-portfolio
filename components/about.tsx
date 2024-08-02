"use client";

import React from "react";
import { motion } from "framer-motion";


export default function About() {
    return (
        <motion.section
          className="max-w-[45rem] text-center leading-8 scroll-mt-28"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.175 }}
          id="about"
        >
          <h2 className="text-3xl font-medium capitalize mb-8">About me</h2>
          <p>
          I am a passionate and dedicated software engineer with a strong background in full-stack development. With a B.S. in Computer Science and a Minor in Mathematics from the University of Florida, I have improved upon my technical skills and gained practical experience through internships, personal projects, research, and full-time work.
          
          I pride myself on always taking initiative, being detail-oriented, and developing with the end user in mind. I love to learn, ask questions, and explore new ideas. 
          </p>
        </motion.section>
      );
    }

