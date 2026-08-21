import React from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <div className="bg-black">
      <div className="w-[50%] mx-auto  py-10">
        <div className="flex items-center justify-between text-white">
          <Image
            src="/images/lizy.png"
            alt="image"
            width={50}
            height={50}
            className="rounded-full w-6"
          />

          <div className="flex items-center gap-10">
            <Link href="/" className="hover:text-black">
              Home
            </Link>
            <Link href="/about" className="hover:text-black">
              About
            </Link>
            <Link href="/project" className="hover:text-black">
              Project
            </Link>
          </div>

          <div className="flex items-center gap-10">
            <button className="bg-red-500 text-white hover:text-gray-500 rounded-full">
              Contact
            </button>

            <button className="bg-black text-white hover:text-gray-500 rounded-full">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
