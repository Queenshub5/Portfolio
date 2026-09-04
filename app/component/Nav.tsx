"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
// import { useApp } from "@/app/context/Themetoggle";
// import { LuMoon, LuSun } from "react-icons/lu";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  // const { theme, toggleTheme } = useApp();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Helper component to avoid repeating links in desktop and mobile menus
  // const NavLinks = () => (
    <>
      {/* <Link
        href="/"
        className="hover:text-blue-400 py-2 md:py-0"
        onClick={() => setIsOpen(false)}
      >
        Home
      </Link>
      <Link
        href="#about"
        className="hover:text-blue-400 py-2 md:py-0"
        onClick={() => setIsOpen(false)}
      >
        About
      </Link>
      <Link
        href="#skill"
        className="hover:text-blue-400 py-2 md:py-0"
        onClick={() => setIsOpen(false)}
      >
        Skills
      </Link>
      <Link
        href="#project"
        className="hover:text-blue-400 py-2 md:py-0"
        onClick={() => setIsOpen(false)}
      >
        Project
      </Link> */}
    </>
  // );

  return (
    <div className="w-full sticky top-5 md:top-15 z-50 px-4">
      {/* Dynamic width: wide on mobile, controlled max-width on large screens */}
      <div className="max-w-[95%] md:max-w-[80%] lg:max-w-[60%] xl:max-w-[50%] mx-auto">
        <div className="relative flex justify-between items-center mt-5 md:mt-10 shadow-sm shadow-black rounded-full md:rounded-full py-3 px-4 md:px-6 bg-[#d1cccc42] backdrop-blur-2xl">
          {/* Logo / Image */}
          <div className="flex items-center">
            <Image
              src="/images/lizy.png"
              alt="image"
              width={50}
              height={50}
              className="rounded-full w-8 h-8 object-cover"
            />
          </div>

          {/* Desktop Link Wrapper (Hidden on Mobile) */}
          <div className="hidden md:flex items-center justify-between gap-6 lg:gap-8">
             <Link
        href="/"
        className="hover:text-blue-400 py-2 md:py-0"
        onClick={() => setIsOpen(false)}
      >
        Home
      </Link>
      <Link
        href="#about"
        className="hover:text-blue-400 py-2 md:py-0"
        onClick={() => setIsOpen(false)}
      >
        About
      </Link>
      <Link
        href="#skill"
        className="hover:text-blue-400 py-2 md:py-0"
        onClick={() => setIsOpen(false)}
      >
        Skills
      </Link>
      <Link
        href="#project"
        className="hover:text-blue-400 py-2 md:py-0"
        onClick={() => setIsOpen(false)}
      >
        Project
      </Link>
            {/* <NavLinks /> */}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Contact Button (Hidden or shrunken text on tiny screens if necessary) */}
            <Link
              href="#contact"
              className="bg-black text-white hover:text-blue-400 rounded-full px-4 md:px-6 py-2 md:py-3 text-sm md:text-base transition-colors"
            >
              Contact
            </Link>

            <ThemeToggle/>

            {/* <button
              onClick={toggleTheme}
              className={`dark:bg-[#0D1B2A] bg-[#25a6eb52] text-[#2563EB] shadow-sm shadow-[#2563EB] dark:shadow-[#25a6eb52] p-2 items-center justify-center rounded-full`}
            >
              {theme === "light" ? (
                <LuMoon className="h-6 w-6" />
              ) : (
                <LuSun className="h-6 w-6" />
              )}
            </button> */}

            {/* Mobile Hamburger Button (Hidden on Desktop) */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-black focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  // "X" Close Icon
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  // Menu Hamburger Icon
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Dropdown Menu Drawer */}
          {isOpen && (
            <div className="absolute top-[calc(100%+10px)] left-0 right-0 md:hidden flex flex-col items-center bg-[#d1ccccfb] backdrop-blur-3xl border border-black rounded-2xl py-4 shadow-xl z-50">
               <Link
        href="/"
        className="hover:text-blue-400 py-2 md:py-0"
        onClick={() => setIsOpen(false)}
      >
        Home
      </Link>
      <Link
        href="#about"
        className="hover:text-blue-400 py-2 md:py-0"
        onClick={() => setIsOpen(false)}
      >
        About
      </Link>
      <Link
        href="#skill"
        className="hover:text-blue-400 py-2 md:py-0"
        onClick={() => setIsOpen(false)}
      >
        Skills
      </Link>
      <Link
        href="#project"
        className="hover:text-blue-400 py-2 md:py-0"
        onClick={() => setIsOpen(false)}
      >
        Project
      </Link>
              {/* <NavLinks /> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
