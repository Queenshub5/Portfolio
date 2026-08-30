"use client";
import React from "react";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Aboutme() {
  const techStack = [
    { name: "React", icon: <FaReact />, color: "bg-gray-50 text-[#61DAFB]" },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss />,
      color: "bg-gray-200 text-[#38bdf8]",
    },
    { name: "Next.js", icon: <SiNextdotjs />, color: "bg-white text-black" },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "bg-gray-50 text-[#3178C6]",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      color: "bg-black text-[#F0DB4F]",
    },
    { name: "HTML5", icon: <FaHtml5 />, color: "bg-gray-300 text-[#E34C26]" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "bg-gray-100 text-[#264DE4]" },
  ];
  return (
    <div id="about">
      <div className="max-w-[90%] mx-auto mt-40 min-h-screen">
        <div className="flex flex-col justify-center items-center  mt-6 ">
          <h1 className="font-extrabold text-5xl text-gray-700 border-l-6 border-b-2 border-gray-900">
            Meet Me
          </h1>
          <h2 className="font-extrabold mt-6  tracking-wide text-3xl font-serif">
            Hello I&apos;m Osho Elizabeth
          </h2>
          <div className="flex items-start gap-40 mt-10">
            <p className="text-[20px] mt-2 text-black">
              I&apos;m a Frontend Developer passionate about building clean,
              responsive and user-friendly web applications. <br />
              I work
              primarily with JavaScript, TypeScript, React, Next.js and Tailwind
              CSS, turning designs and ideas into functional digital
              experiences. <br/> I value team work, open to learning and clear
              comunication to deliver quality results.
            </p>

            <p className="text-[20px]">
              I enjoy solving frontend problems, creating reusable components
              and paying attention to details such as responsiveness,
              accessibility, performance and user experience. 
              {/* I build responsive
              and scalable interface using modern web technologies to create
              digital interactive experience that are beautiful and easy to use. */}
             
            </p>
          </div>
        </div>

        <h2 className="flex justify-center font-extrabold font-sans uppercase text-2xl mt-10">
          Tech Stack
        </h2>

        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="">
            {" "}
            {techStack.map((tech, index) => (
              <CarouselItem key={index} className="pl-6 basis-1/3">
                <div className="p-1">
                  <div
                    className={`flex flex-col items-center justify-center rounded-2xl p-6 shadow-md ${tech.color} h-32`}
                  >
                    <div className="text-4xl mb-2">{tech.icon}</div>
                    <span className="font-semibold"> {tech.name}</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default Aboutme;
