import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap, LuComputer, LuTrendingUp, LuGlobe, LuBrainCircuit, LuRocket } from "react-icons/lu";
import ceoImg from "@/public/ceoinc.png";
import wagwanImg from "@/public/wagwan.png";
import youniversityImg from "@/public/youniversity.png";
import imageGeniusImg from "@/public/imagegenius.png";
import wegojimImg from "@/public/wegojim.png";
import cleanCodeImg from "@/public/readings/cleancode.jpg";
import debuggingImg from "@/public/readings/debugging.jpg";
import posdImg from "@/public/readings/posd.jpeg";
import tractionImg from "@/public/readings/traction.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Readings",
    hash: "#readings",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Software Engineer",
    company: "HubSpot",
    location: "Remote",
    description:
      "Led large-scale frontend migration across 5 repositories, implementing a design token system for 1,000+ components. DRI on the Activity Index Page adopted by 40% of customers in Q1. Architected backend-rendered event templates cutting timeline render time by 35%. Leverage AI tooling daily (Cursor, Claude Code, Conductor) for multi-agent coding workflows.",
    icon: React.createElement(LuRocket),
    date: "Oct 2024 – Present",
  },
  {
    title: "Software Engineer",
    company: "Alteryx",
    location: "Remote",
    description:
      "Built RESTful API endpoints within a microservice architecture for the Alteryx Analytics Cloud. Developed responsive UIs with React and Redux, authored comprehensive test suites (Jest, Mocha, TestCafe). Designed interactive onboarding guides reducing new-user friction and support tickets.",
    icon: React.createElement(LuComputer),
    date: "Jul 2023 – Jun 2024",
  },
  {
    title: "Software Engineering Intern",
    company: "Alteryx",
    location: "Irvine, CA",
    description:
      "Conducted UX experiments to increase user traction and drive product growth on the Growth team.",
    icon: React.createElement(LuTrendingUp),
    date: "May – Aug 2022",
  },
  {
    title: "B.S. Computer Science",
    company: "University of Florida",
    location: "Gainesville, FL",
    description:
      "Graduated Cum Laude with a B.S. in Computer Science and a Minor in Mathematics.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2023",
  },
  {
    title: "Contract Web Developer",
    company: "CEO Inc",
    location: "Boca Raton, FL",
    description:
      "Created and maintained a greenfield SPA for CEO Inc and their sister company Go Healthcare Staffing, shipped via AWS CloudFront and S3.",
    icon: React.createElement(LuGlobe),
    date: "2021",
  },
] as const;

export const projectsData = [
  {
    title: "Image Genius",
    description:
      "Full-stack AI image editing SaaS built with Next.js, TypeScript, Tailwind, MongoDB, Clerk, and Stripe; integrates Cloudinary's AI APIs with a credit-based monetization system.",
    tags: ["Next.js", "TypeScript", "React", "MongoDB", "Tailwind", "Stripe"],
    imageUrl: imageGeniusImg,
    href: "https://imagegeni.us/",
  },
  {
    title: "wegojim",
    description:
      "React application styled with Tailwind that provides a comprehensive workout based on user requirements.",
    tags: ["TypeScript", "React", "Next.js", "Vercel", "Tailwind"],
    imageUrl: wegojimImg,
    href: "https://wegojim.vercel.app/",
  },
  {
    title: "CEO Inc",
    description:
      "Designed, built, and deployed a greenfield SPA using React and Node.js, shipped to production via AWS CloudFront and S3.",
    tags: ["React", "Node.js", "AWS", "CloudFront", "S3"],
    imageUrl: ceoImg,
    href: "https://ceoinc.com",
  },
  {
    title: "YOUniversity",
    description:
      "University data filtering tool built in Python and Streamlit using the USDOE dataset. Won the Domain.com challenge at SwampHacks 2022.",
    tags: ["Python", "Streamlit", "Plotly", "Git"],
    imageUrl: youniversityImg,
    href: "https://rosariofirmino-university-youniversity-4qdcpx.streamlit.app/",
  },
] as const;

export const readingsData = [
  {
    title:
      "Debugging: The 9 Indispensable Rules for Finding Even the Most Elusive Software and Hardware Problems",
    author: "David J. Agans",
    imageUrl: debuggingImg,
    href: "https://www.amazon.com/Debugging-Indispensable-Software-Hardware-Problems-ebook/dp/B00PDDKQV2",
  },
  {
    title: "A Philosophy of Software Design",
    author: "John Ousterhout",
    imageUrl: posdImg,
    href: "https://www.amazon.com/Philosophy-Software-Design-John-Ousterhout/dp/1732102201",
  },
  {
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    imageUrl: cleanCodeImg,
    href: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
  },
  {
    title: "Traction: How Any Startup Can Achieve Explosive Customer Growth",
    author: "Gabriel Weinberg, Justin Mares",
    imageUrl: tractionImg,
    href: "https://www.amazon.com/Traction-Startup-Achieve-Explosive-Customer/dp/1591848369",
  },
] as const;

export const skillCategories = [
  {
    name: "AI Tooling",
    icon: "brain",
    skills: [
      "Cursor",
      "Claude Code",
      "Conductor",
      "Claude API",
      "GitHub Copilot",
      "Prompt Engineering",
      "Multi-Agent Workflows",
    ],
  },
  {
    name: "Languages",
    icon: "code",
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "C/C++",
      "C#",
      "SQL",
      "HTML/CSS",
    ],
  },
  {
    name: "Frameworks & Libraries",
    icon: "layers",
    skills: [
      "React",
      "Redux",
      "Next.js",
      "Node.js",
      "Jinja",
      "Tailwind",
      "Keras",
      "PyTorch",
      "scikit-learn",
    ],
  },
  {
    name: "Infrastructure & Tooling",
    icon: "cloud",
    skills: [
      "AWS (S3, CloudFront)",
      "MongoDB",
      "Git",
      "Jenkins",
      "GitLab CI/CD",
      "Jira",
    ],
  },
  {
    name: "Testing",
    icon: "check",
    skills: ["Jest", "Mocha", "TestCafe", "Unit Testing", "Integration Testing", "E2E Testing"],
  },
] as const;

// Keep flat list for backward compatibility
export const skillsData = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Redux",
  "Tailwind",
  "AWS",
  "MongoDB",
  "Git",
  "Java",
  "C/C++",
  "SQL",
  "Jinja",
  "Jest",
  "Cursor",
  "Claude Code",
  "Framer Motion",
] as const;
