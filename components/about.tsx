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
          My name is Rosario Firmino Palazzolo and I love to code, among other things. Since I was in elementary school, I remember spending hours in front of my mother&apos;s work computer utilizing Scratch to create small games and animations. When I finally got my own computer in middle school, my first Google search was &quot;how to code?&quot;. Looking back, the 4 hour long Ruby on Rails tutorials I watched on Youtube may have been too advanced for my middle school self, but they lit a fire under me, and evoked my passion for Software engineering. 
          </p>
        </motion.section>
      );
    }

