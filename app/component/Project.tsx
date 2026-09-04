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
          <h1 className="font-extrabold text-5xl text-gray-700 border-l-6 dark:border-blue-500 border-b-2 border-gray-900 px-3 dark:text-blue-500">
            Project
          </h1>
        </div>

        <div className="flex flex-col gap-8 md:gap-10 mt-10 text-gray-900 dark:text-white">
          {/* Card 1 */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 py-6 px-6 md:px-10 shadow-sm shadow-gray-400 rounded-lg">
            <div className="w-full lg:max-w-xs xl:max-w-sm flex justify-center">
              <Link href={"https://vendora-cart.vercel.app/"}>
                <Image
                  src="/images/project3.png"
                  alt="Vendora Cart Project screenshot"
                  width={1000}
                  height={200}
                  className="w-full h-auto max-h-48 object-cover rounded-md"
                />{" "}
              </Link>
            </div>
            <p className="text-base md:text-[17px] text-center lg:text-left flex-1">
              Cart is a collaborative Next.js and Tailwind e-commerce platform. Managed seamlessly using Git and GitHub.
              <span className="font-bold"><br/> My Role: Frontend Developer </span>
             <br/>Built core shopping features:dynamic cart with quantity controls(increase/decrease and item removal), checkout flow and About page. 
            </p>

            <div className="flex flex-col items-center lg:items-start text-center  lg:text-left sm:text-nowrap">
              <p className="font-bold text-xl md:text-2xl text-gray-700 dark:text-white">
                Tech Stack
              </p>
              <span className="text-sm md:text-md uppercase tracking-wider text-gray-600 dark:text-white">
                Nextjs | Tailwindcss
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 py-6 px-6 md:px-10 shadow-sm shadow-gray-400 rounded-lg">
            <div className="w-full lg:max-w-xs xl:max-w-sm flex justify-center">
              <Link href={"https://variety-shophub.netlify.app/"}>
                <Image
                  src="/images/project5.png"
                  alt="ShopHub Project screenshot"
                  width={1000}
                  height={200}
                  className="w-full h-auto max-h-48 object-cover rounded-md"
                />{" "}
              </Link>
            </div>
            <p className="text-base md:text-[17px] text-center lg:text-left flex-1">
              ShopHub is a collaborative e-commerce application built with Next.js and Tailwindcss.
               <span className="font-bold"><br/> My Role: Frontend Developer </span>
              <br/> Built the landing page and fetched product data from a dummy JSON API to display product and develop the cart interface.
            </p>

            <div className="flex flex-col items-center lg:items-start text-center dark:text-white lg:text-left sm:text-nowrap">
              <p className="font-bold text-xl md:text-2xl text-gray-700 dark:text-white">
                Tech Stack
              </p>
              <span className="text-sm md:text-md uppercase tracking-wider text-gray-600 dark:text-white">
                Nextjs | Tailwindcss
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 py-6 px-6 md:px-10 shadow-sm shadow-gray-400 rounded-lg">
            <div className="w-full lg:max-w-xs xl:max-w-sm flex justify-center">
              <Link href={"https://alpha-spark-chi.vercel.app/index.html"}>
                <Image
                  src="/images/project4.png"
                  alt="Groco Wear project screenshot"
                  width={1000}
                  height={200}
                  className="w-full h-auto max-h-48 object-cover rounded-md"
                />{" "}
              </Link>
            </div>
            <p className="text-base md:text-[17px] text-center lg:text-left flex-1">
              Groco Wear is a responsive e-commerce user interface developed as
              part of a group project. Git and GitHub were used for version
              control and team collaboration throughout the project.
              <span className="font-bold"><br/> My Role: Frontend Developer </span>
              <br/>- Designed the e-commerce interface using HTML5
            </p>

            <div className="flex flex-col items-center lg:items-start text-center lg:text-left sm:text-nowrap">
              <p className="font-bold text-xl md:text-2xl text-gray-700 dark:text-white">
                Tech Stack
              </p>
              <span className="text-sm md:text-md uppercase tracking-wider text-gray-600 dark:text-white">
                HTML | CSS | JAVASCRIPT
              </span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 py-6 px-6 md:px-10 shadow-sm shadow-gray-400 rounded-lg">
            <div className="w-full lg:max-w-xs xl:max-w-sm flex justify-center">
              <Link href={"https://bookmark-two-wheat.vercel.app/"}>
                {" "}
                <Image
                  src="/images/project1.png"
                  alt="Bookmark project screenshot"
                  width={1000}
                  height={200}
                  className="w-full h-auto max-h-48 object-cover rounded-md"
                />
              </Link>
            </div>
            <p className="text-base md:text-[17px] text-center lg:text-left flex-1">
              A clean, responsive browser utility interface built to streamline
              web bookmarking.
            </p>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left sm:text-nowrap">
              <p className="font-bold text-xl md:text-2xl text-gray-700 dark:text-white">
                Tech Stack
              </p>
              <span className="text-sm md:text-md uppercase tracking-wider text-gray-600 dark:text-white">
                Nextjs | Tailwindcss
              </span>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 py-6 px-6 md:px-10 shadow-sm shadow-gray-400 rounded-lg">
            <div className="w-full lg:max-w-xs xl:max-w-sm flex justify-center">
              <Link href={"https://social-link-profile-elizabeth.vercel.app/"}>
                <Image
                  src="/images/project2.png"
                  alt="Social Link Profile screenshot"
                  width={1000}
                  height={200}
                  className="w-full h-auto max-h-48 object-cover rounded-md"
                />
              </Link>
            </div>
            <p className="text-base md:text-[17px] text-center lg:text-left flex-1">
              Responsive user interface focusing on clean, cross-device
              component development.
            </p>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left sm:text-nowrap">
              <p className="font-bold text-xl md:text-2xl text-gray-700 dark:text-white">
                Tech Stack
              </p>
              <span className="text-sm md:text-md uppercase tracking-wider text-gray-600 dark:text-white">
                React.js | Tailwindcss
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
