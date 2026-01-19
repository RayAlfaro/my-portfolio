import React, { useState, useEffect } from "react";
import {
  FaAngular,
  FaBootstrap,
  FaCss3Alt,
  FaFacebook,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { BsTwitter, BsWhatsapp } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { ImInstagram } from "react-icons/im";
import { MdEmail, MdOutlineSettingsApplications } from "react-icons/md";
import { PiPhone } from "react-icons/pi";
import { CiLocationArrow1 } from "react-icons/ci";
import {
  SiC,
  SiCplusplus,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiRedux,
  SiSpring,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  GiMaterialsScience,
  GiNorthStarShuriken,
  GiSandsOfTime,
} from "react-icons/gi";
import { DiJava, DiPython, DiVisualstudio } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { IoIosStarOutline } from "react-icons/io";


export const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React JS", icon: <FaReact className="text-cyan-400" /> },
      {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill className="text-teal-400" />,
      },

      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "Express JS", icon: <SiExpress className="text-gray-300" /> },
      { name: "Node JS", icon: <FaNodeJs className="text-green-400" /> },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", icon: <SiC className="text-blue-400" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
      { name: "Java", icon: <DiJava className="text-red-600" /> },
       {name: "Visual Basic", icon: <MdOutlineSettingsApplications className="text-purple-500" />},
      { name:"Php", icon: <SiPhp className="text-purple-400" />},
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "VS Code", icon: <DiVisualstudio className="text-blue-500" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
      { name: "Canva", icon: <GiMaterialsScience className="text-yellow-400" /> },
    ],
  },
];

// Navigation data
export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "project", label: "Project" },
  { id: "reflection", label: "Reflection" },
];


// Project data
export const portfolioItems = [
  {
    title: "OJTracker",
    category: "Integrative Programming And Technologies 1 Project",
    image: "/src/assets/OJTracker.jpeg",
  },
  {
    title: "Trove",
    category: "System Integrated Programming Project",
    image: "/src/assets/Trove.jpeg",
  },
  {
    title: "Omeco Billing System",
    category: "Object-Oriented Programming Project",
    image: "./src/assets/OMECO.png",
  },
];

