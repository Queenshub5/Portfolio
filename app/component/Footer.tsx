import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className="container mx-auto px-4">
      
      <div className="bg-gray-300 w-full py-6 px-6 rounded-lg">
        {/* Mobile: Stacked column | Desktop: Horizontal row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 text-center">
          {/* Logo container to keep it centered on mobile */}
          <div className="flex justify-center">
            <Image
              src="/images/lizy.png"
              alt="image"
              width={50}
              height={50}
              className="rounded-full w-8 h-8 object-cover"
            />
          </div>

          {/* Stacked on mobile, row on desktop */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center text-sm md:text-base font-medium">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link
              href="#about"
              className="hover:text-blue-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="#skill"
              className="hover:text-blue-400 transition-colors"
            >
              Skills
            </Link>

            <Link
              href="#project"
              className="hover:text-blue-400 transition-colors"
            >
              Project
            </Link>
          </div>

          <Link
            href="#contact"
            className="bg-black text-white hover:text-blue-400 rounded-full px-4 md:px-6 py-2 md:py-3 text-sm md:text-base transition-colors"
          >
            Contact
          </Link>
        </div>

        <p className="flex text-center justify-center">   
          &copy; Copyright 2026 Osho Elizabeth Kemi. All right reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
