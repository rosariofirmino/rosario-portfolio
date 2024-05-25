"use client";

import React from 'react'
import {motion} from "framer-motion"

export default function Divider() {
  return (
    <motion.div className="bg-gray-300 my-24 h-1 w-16 rounded-full hidden sm:block" initial={{ opacity: 0, y: 100}} animate={{ opacity: 1, y: 0}} transition={{delay: .2}}></motion.div>
  )
}
