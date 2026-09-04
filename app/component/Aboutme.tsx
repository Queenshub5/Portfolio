"use client";
import React from "react";

function Aboutme() {
  return (
    <div id="about">
      {/* Reduced mt-40 to mt-20 on mobile, shifts back to mt-40 on desktop */}
      <div className="max-w-[90%] md:max-w-[80%] mx-auto mt-20 md:mt-40">
        <div className="flex flex-col justify-center items-center mt-6">
          {/* Main Title - Scaled text sizes for mobile */}
          <h1 className="font-extrabold text-4xl md:text-5xl text-gray-700 dark:text-blue-500 dark:border-blue-500 border-l-4 md:border-l-6 border-b-2 border-gray-900 px-3">
            Meet Me
          </h1>

          <h2 className="font-extrabold mt-6 tracking-wide text-2xl md:text-3xl font-serif text-center">
            Hi, I&apos;m Osho ELizabeth Kemi
          </h2>

          {/* Paragraph Wrapper - Vertical on mobile (flex-col), horizontal on desktop (md:flex-row) */}
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-20 lg:gap-40 mt-10">
            <p className="text-base md:text-lg lg:text-[20px] leading-relaxed w-full">
              I&apos;m a Frontend Developer passionate about building clean,
              responsive and user-friendly web applications.{" "}
              <br className="hidden md:inline" />I work primarily with Next.js,
              TypeScript, JavaScript, React, and Tailwind CSS, turning designs
              and ideas into functional digital experiences.
            </p>

            <p className="text-base md:text-lg lg:text-[20px] leading-relaxed w-full">
              I enjoy solving frontend problems, creating reusable components
              and paying attention to details such as responsiveness,
              accessibility, performance and user experience.
              <br className="hidden md:inline" />I value teamwork, am open to
              learning, and prioritize clear communication to deliver quality
              results.
            </p>
          </div>
        </div>
        
        <div>
          {/* Main Section Header */}
          <div className="flex justify-center pt-10 md:pt-16 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#252B46] mb-8 md:mb-12">
            <h1 className="dark:text-white">
              My <span className="text-gray-700 dark:text-white">Experience</span>
            </h1>
          </div>

          {/* Experience Grid/Flex Container */}
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-12 max-w-4xl mx-auto px-4">
            
            <div className="w-full md:w-1/2 bg-gray-50 p-6 rounded-xl border border-gray-100 dark:bg-black shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <h2 className="font-bold text-lg md:text-[20px] text-[#252B46] dark:text-blue-400">
                  Trainee & Peer Mentor at Softzenith (Ascend Bootcamp)
                </h2>
              </div>
              <p className="text-gray-500 text-sm md:text-[16px] font-medium dark:text-white">
                Feb, 2026 - Present
              </p>
              <p className="mt-4">Built responsive web applications using HTML, CSS, and JavaScript. <br/> Selected as peer mentor to guide new trainees. <br/>Responsible for code review. </p>
            </div>

            <div className="w-full md:w-1/2 bg-gray-50 p-6 rounded-xl border border-gray-100 dark:bg-black  shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <h2 className="font-bold text-lg md:text-[20px] text-[#252B46] mb-0 dark:text-blue-400">
                  Trainee at SBTS Groups (ICBM Programme)
                </h2>
              </div>
              <p className="text-gray-500 text-sm md:text-[16px] mt-0 font-medium dark:text-white">
                June, 2026 - Present
              </p>
              <p>Built interactive user interface and integrated APIs to fetch and display data.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
