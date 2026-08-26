import React from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

function Nav() {
  return (
    
    <div className="sticky top-0">
      <div className="max-w-[50%] mx-auto">
        <div className="flex justify-between mt-10 border border-black text-black rounded-full py-2">
          <Image
            src="/images/lizy.png"
            alt="image"
            width={50}
            height={50}
            className="rounded-full w-8"
          />

              {/*link wrapper  */}
          <div className="flex items-center justify-between gap-8 ">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <Link href="#about" className="hover:text-white">
              About
            </Link>
            <a href="#project" className="hover:text-white">
              Project
            </a>
          </div>
          
          <div className="flex gap-2">
          <button className="bg-black text-white hover:text-amber-700 rounded-full px-8 py-1">
              Contact
            </button>
            <ThemeToggle />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Nav;
