"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

function Nav() {
  return (
    <div className="container sticky top-15 z-10">
      <div className="max-w-[50%] mx-auto">
        <div className="flex justify-between mt-10 border border-black text-black rounded-full py-2 bg-[#d1cccc42] backdrop-blur-2xl">
          <Image
            src="/images/lizy.png"
            alt="image"
            width={50}
            height={50}
            className="rounded-full w-8"
          />

          {/*link wrapper  */}
          <div className="flex items-center justify-between gap-8 ">
            <Link href="/" className="hover:text-[#61DAFB]">
              Home
            </Link>
            <Link href="#about" className="hover:text-[#61DAFB]">
              About
            </Link>
            <Link href="#skill" className="hover:text-[#61DAFB]">
              Skills
            </Link>
            <Link href="#project" className="hover:text-[#61DAFB]">
              Project
            </Link>
          </div>

          <div className="flex gap-2 mr-6">
            <Link href="#contact" className="bg-black text-white hover:text-blue-400 rounded-full px-6 py-3">
              Contact
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
