"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

// Declare the skills
const skill = [
  {
    name: "React",
    icon: <FaReact className="text-blue-500 text-5xl md:text-6xl" />
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss  className="text-[#61DAFB] text-5xl md:text-6xl"/>,
    color: "bg-gray-200 text-[#38bdf8]",
  },
  { name: "Next.js", icon: <SiNextdotjs className="text-black text-5xl md:text-6xl"/>, color: "bg-white text-black" },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-5xl md:text-6xl" />,
    color: "bg-gray-50 text-[#3178C6]",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-5xl md:text-6xl text-yellow-400"/>,
    color: "bg-black text-[#F0DB4F]",
  },
  { name: "HTML5", icon: <FaHtml5 className="text-[#E34C26] text-5xl md:text-6xl" />, color: "bg-gray-300 text-[#E34C26]" },
  { name: "CSS3", icon: <FaCss3Alt className="text-5xl md:text-6xl text-blue-800" />, color: "bg-gray-100 text-[#264DE4]" },
];

function Skill() {
  return (
    <div className="container mx-auto">
      <div className="max-[90%] mt-40 min-h-screen">
        <div className="flex justify-center">
          <h1
            className=" font-extrabold text-5xl text-gray-700 border-l-6 border-b-2 mb-6"
            id="skill"
          >
            Skills
          </h1>
        </div>
        {/* map skills into card */}
        <div className="grid grid-cols-3 gap-6 h-5">
          {skill.map((skill) => (
            <Card
              key={skill.name}
              className="w-1/2 h-48 flex-col  items-center justify-center shadow-md shadow-blue-950"
            >
              <CardContent className="flex flex-col items-center gap-3">
                {skill.icon}
                <CardTitle className="text-lg font-semibold">
                  {skill.name}
                </CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
