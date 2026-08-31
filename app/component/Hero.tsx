import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="">
      <div className="mx-auto max-w-[90%]">
        <div className=" flex items-center justify-between mt-20">
          {/* left hero section */}
          <div className=" flex flex-col w-1/2 items-center text-center">
            <Image
              src="/images/lizy.png"
              alt="image"
              width={100}
              height={100}
              className="w-85 h-90  bg-[#d1cccc] object-cover rounded-full "
            />
            {/* <h2 className="font-extrabold text-center text-3xl uppercase">
              Osho Elizabeth <br />
              {/* Kemi */}
            {/* </h2> */} 
          </div>

          {/* Right hero section */}
          <div className="flex flex-col items-start justify-start w-1/2 gap-9">
            <h3 className="text-3xl font-extrabold text-black">Osho Elizabeth Kemi</h3>
            <p className="text-gray-500 text-2xl">
              <br />I build scalable, responsive and production-ready
              applications using React, Next.js, TypeScript, and TailwindCss. <br />
              Let&apos;s build your next project to life.
            </p>

            <div className="flex gap-6">
            <button className="bg-gray-900 text-white px-5 py-2 rounded-full">
              View Project
            </button>
            <button className="bg-gray-900 text-white px-5 py-2 rounded-full">
              Contact Me
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
