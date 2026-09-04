import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-[90%]">
        {/* Changed flex to flex-col on mobile and flex-row on desktop. Adjusted margins and alignment. */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-10 md:mt-20 gap-10 md:gap-6">
          {/* Left hero section (Image container) */}
          {/* Changed w-1/2 to w-full on mobile, reverting to w-1/2 on desktop */}
          <div className="flex flex-col w-full md:w-1/2 items-center justify-center">
            {/* Removed non-standard Tailwind classes w-85/h-90; used a responsive size wrapper instead */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 relative">
              <Image
                src="/images/lizy.png"
                alt="image"
                fill
                sizes="(max-w-768px) 256px, 384px"
                className="bg-[#d1cccc] object-cover rounded-full"
                priority
              />
            </div>
          </div>

          {/* Right hero section (Text container) */}
          {/* Swapped text alignments to center on mobile, left-aligned on desktop */}
          <div className="flex flex-col items-center md:items-start justify-start w-full md:w-1/2 gap-6 md:gap-9 text-center md:text-left">
            <h3 className="sm:text-2xl md:text-3xl font-extrabold  tracking-tight">
              Osho Elizabeth Kemi | Frontend Software Developer
            </h3>

            {/* Scaled down text size slightly for small mobile viewports so it doesn't overwhelm */}
            <p className="text-gray-500 dark:text-white text-lg sm:text-xl md:text-2xl leading-relaxed">
              I build scalable, responsive and production-ready applications
              using Next.js, TypeScript, React, and TailwindCss.
              <span className="block mt-4">
                Let&apos;s build your next project to life.
              </span>
            </p>

            {/* Centered button layout on mobile screens */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 w-full sm:w-auto">
              <Link
                href="#project"
                className="bg-black text-white hover:text-blue-400 rounded-full px-4 md:px-6 py-2 md:py-3 text-sm md:text-base transition-colors"
              >
                View Project
              </Link>

              <Link
                href="#contact"
                className="bg-black text-white hover:text-blue-400 rounded-full px-4 md:px-6 py-2 md:py-3 text-sm md:text-base transition-colors"
              >
                Contact Me
              </Link>

              <a
                href="https://github.com/Queenshub5"
                 target="_blank"
                 rel="noopener noreferrer"
                className="bg-black text-white hover:text-blue-400 rounded-full px-4 md:px-6 py-2 md:py-3 text-sm md:text-base transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
