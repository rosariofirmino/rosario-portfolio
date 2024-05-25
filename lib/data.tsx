import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap, LuComputer, LuTrendingUp, LuGlobe } from "react-icons/lu";
import ceoImg from "@/public/ceoinc.png";
import wagwanImg from "@/public/wagwan.png";
import youniversityImg from "@/public/youniversity.png";

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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
    {
    title: "Research Assistant @ UF",
    location: " Gainesville, FL",
    description:
        "I worked as a research assistant at UF's Machine Learning and Sensing Lab under Dr. Alina Zare. Focused on using Machine Learning to optimize fertilizer usage to decrease runoff pollution.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
    },
    {
    title: "Software Engineering Intern @ Alteryx",
    location: "Irvine, CA",
    description:
        "Received an internship offer at Alteryx in which I conducted UX experiments to increase user traction and drive product growth.",
    icon: React.createElement(LuTrendingUp),
    date: "2022",
    },
    {
    title: "Graduated @ UF",
    location: "Gainesville, FL",
    description:
      "Graduated University of Florida Cum Laude with a Bachelors of Science in Computer Science with a Minor in Mathematics.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Contract Web Developer @ CEO Inc",
    location: "Boca Raton, FL",
    description:
      "Work asynchrounously as a Contract Web Developer for CEO Inc, where I created and maintain their new SPA along with maintaining their sister company's site Go Healthcare Staffing.",
    icon: React.createElement(LuGlobe),
    date: "2021 - present",
  },
  {
    title: "Software Engineer @ Alteryx",
    location: "Irvine, CA",
    description:
      "Currently work at Alteryx as a Software Engineer on the Growth team. I take on a large breadth of responsibilities from partner connect projects to UX experiments to DAP integration.",
    icon: React.createElement(LuComputer),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CEO Inc",
    description:
      "Responsive and modern SPA created and maintained by me for CEO Inc.",
    tags: ["React", "Javascript", "HTML", "CSS", "AWS"],
    imageUrl: ceoImg,
    href: 'https://ceoinc.com'
  },
  {
    title: "Wagwan",
    description:
      "Local event discovery app featuring user accounts, event posts, and Google Maps/Calendar integration.",
    tags: ["PHP", "MySQL", "Bootstrap", "CSS","Javascript", "jQuery"],
    imageUrl: wagwanImg,
    href: 'https://www.cise.ufl.edu/~dpayne1/wagwan/'
  },
  {
    title: "Youniversity",
    description:
      "University filtering software created with Python and Streamlit for 2022 SwampHacks.",
    tags: ["Python", "Streamlit", "Plotly", "Git"],
    imageUrl: youniversityImg,
    href: 'https://rosariofirmino-university-youniversity-4qdcpx.streamlit.app/'
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "HTML",
  "CSS",
  "AWS",
  "Python",
  "Redux",
  "C++",
  "Java",
  "MySQL",
  "PostgreSQL",
  "Python",
  "Unity",
  "Framer Motion",
] as const;