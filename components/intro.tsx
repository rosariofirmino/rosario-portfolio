"use client";

import Image from 'next/image'
import React from 'react'
import rosarioHeadshot from '@/public/rosario.jpeg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {BsArrowRight, BsLinkedin} from 'react-icons/bs'
import {HiDownload} from 'react-icons/hi'


export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]" id="home">
        <div className='flex items-center justify-center'>
            <div className="relative">
                <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{type: "tween", duration: .2}}>
                    <Image src={rosarioHeadshot} alt='headshot' width="192" height="192" priority={true} className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"/>
                </motion.div>
                <motion.span initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{type: "spring", delay: .1,stiffness:125, duration: 0.7}} className="absolute -bottom-2 right-0 text-4xl">💻</motion.span>
            </div>
        </div>
        <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Rosario.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> based out of Orlando, Florida focused on{" "}
        <span className="italic underline">product growth.</span> 
      </motion.h1>

      <motion.div className = "flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium" initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{delay:0.1}}>
        <a href="mailto:rosariofirmino42@gmail.com" className="bg-gray-900 text-white px-7 py-3 group flex items-center gap-2 rounded-full outline-none  hover:scale-110 hover:bg-gray-950 active:scale-105 transition">Get in touch <BsArrowRight className="group-hover:translate-x-1 transition"/></a>
        <a href="/RosarioResume.pdf" download className="bg-white px-7 py-3 flex items-center gap-2 rounded-full hover:scale-110 active:scale-105 transition cursor-pointer">Resume <HiDownload/></a>
        <a href="https://www.linkedin.com/in/rosariofp/" target="_blank" className="bg-white p-4 flex items-center text-gray-700 gap-2 rounded-full hover:scale-110 active:scale-105 transition"> <BsLinkedin/> </a>
      </motion.div>
    </section>
  )
}
