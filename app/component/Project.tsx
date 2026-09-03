import React from "react";
import Image from "next/image";
import Link from "next/link";

function Project() {
  return (
    <div id="project">
    
    {/* Changed max-w-[80%] to max-w-6xl with fluid mobile padding to prevent squishing */}
      <div className="max-w-6xl mx-auto mt-15 md:mt-40">
        <div className="flex justify-center">
          {/* Made the header text size dynamic for mobile screens */}
          <h1 className="font-extrabold text-5xl text-gray-700 border-l-6 border-b-2 border-gray-900 px-3">
            Project
          </h1>
        </div>

        <div className="flex flex-col gap-8 md:gap-10 mt-10 text-gray-900">
          {/* Card 1 */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 py-6 px-6 md:px-10 shadow-sm shadow-gray-400 rounded-lg">
            <div className="w-full lg:max-w-xs xl:max-w-sm flex justify-center">
              <Image
                src="/images/project1.png"
                alt="Bookmark project screenshot"
                width={1000}
                height={200}
                className="w-full h-auto max-h-48 object-cover rounded-md"
              />
            </div>
            <p className="text-base md:text-[19px] text-center lg:text-left flex-1">
              Bookmark is a clean and simple interface to organize your
              favourite websites.
            </p>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left sm:text-nowrap">
              <p className="font-bold text-xl md:text-2xl text-gray-700">
                Tech Stack
              </p>
              <span className="text-sm md:text-md uppercase tracking-wider text-gray-600">
                Nextjs | Tailwindcss
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 py-6 px-6 md:px-10 shadow-sm shadow-gray-400 rounded-lg">
            <div className="w-full lg:max-w-xs xl:max-w-sm flex justify-center">
              <Image
                src="/images/project2.png"
                alt="Social Link Profile screenshot"
                width={1000}
                height={200}
                className="w-full h-auto max-h-48 object-cover rounded-md"
              />
            </div>
            <p className="text-base md:text-[19px] text-center lg:text-left flex-1">
              Social Link Profile is my post-class assessment project as an
              aspiring developer.
            </p>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left sm:text-nowrap">
              <p className="font-bold text-xl md:text-2xl text-gray-700">
                Tech Stack
              </p>
              <span className="text-sm md:text-md uppercase tracking-wider text-gray-600">
                React.js | Tailwindcss
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 py-6 px-6 md:px-10 shadow-sm shadow-gray-400 rounded-lg">
            <div className="w-full lg:max-w-xs xl:max-w-sm flex justify-center">
             <Link href={'https://alpha-spark-chi.vercel.app/index.html'}>   
             <Image
                src="/images/project4.png"
                alt="Groco Wear project screenshot"
                width={1000}
                height={200}
                className="w-full h-auto max-h-48 object-cover rounded-md"
              /> </Link>
            </div>
            <p className="text-base md:text-[19px] text-center lg:text-left flex-1">
              Groco Wear is an e-commerce platform. A group project design using
              github to collaborate.
            </p>

             <div className="flex flex-col items-center lg:items-start text-center lg:text-left sm:text-nowrap">
              <p className="font-bold text-xl md:text-2xl text-gray-700">
                Tech Stack
              </p>
              <span className="text-sm md:text-md uppercase tracking-wider text-gray-600">
                HTML | CSS | JAVASCRIPT
              </span>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gray-300 mt-16 md:mt-20"></div>
      </div>
    </div>
  );
}

export default Project;
