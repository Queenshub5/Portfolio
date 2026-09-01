"use client";
import React from "react";


function Aboutme() {
  
  return (
    <div id="about">
      <div className="max-w-[90%] mx-auto mt-40">
        <div className="flex flex-col justify-center items-center  mt-6 ">
          <h1 className="font-extrabold text-5xl text-gray-700 border-l-6 border-b-2 border-gray-900">
            Meet Me
          </h1>
          <h2 className="font-extrabold mt-6  tracking-wide text-3xl font-serif">
            Hello I&apos;m Osho Elizabeth Kemi
          </h2>
          <div className="flex items-start gap-40 mt-10">
            <p className="text-[20px] mt-2 text-black">
              I&apos;m a Frontend Developer passionate about building clean,
              responsive and user-friendly web applications. <br />
              I work
              primarily with JavaScript, TypeScript, React, Next.js and Tailwind
              CSS, turning designs and ideas into functional digital
              experiences. 
            </p>

            <p className="text-[20px]">
              I enjoy solving frontend problems, creating reusable components
              and paying attention to details such as responsiveness,
              accessibility, performance and user experience. 
              <br/> I value team work, open to learning and clear
              comunication to deliver quality results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
