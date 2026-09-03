"use client";
import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

const skill = [
  {
    name: "Next.js",
    icon: (
      <SiNextdotjs className="text-black dark:text-white text-5xl md:text-6xl" />
    ),
  },
 
  {
    name: "React",
    icon: <FaReact className="text-blue-500 text-5xl md:text-6xl" />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-[#38bdf8] text-5xl md:text-6xl" />,
  },
 
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-[#3178C6] text-5xl md:text-6xl" />,
  },
  {
    name: "JavaScript",
    icon: (
      <SiJavascript className="text-[#F0DB4F] text-5xl md:text-6xl bg-black rounded-sm" />
    ),
  },
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-[#E34C26] text-5xl md:text-6xl" />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-[#264DE4] text-5xl md:text-6xl" />,
  },
];

function Skill() {
  return (
    <div id="skill" className="container mx-auto px-4">
      {/* Changed max-[90%] to a semantic max-width container and adjusted spacing for mobile */}
      <div className="max-w-5xl mx-auto mt-15 md:mt-40">
        <div className="flex justify-center">
          {/* Made the header text size scale down on smaller mobile viewports */}
          <h1 className="font-extrabold text-5xl text-gray-700 border-l-6 border-b-2 border-gray-900 px-3 mb-10">
            Skills
          </h1>
        </div>

        {/* Responsive grid: 2 columns on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skill.map((item) => (
            <Card
              key={item.name}
              className="w-full py-8 flex flex-col items-center justify-center shadow-md shadow-slate-200 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="flex flex-col items-center gap-3 p-0">
                {item.icon}
                <CardTitle className="text-base md:text-lg font-semibold text-gray-800">
                  {item.name}
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
