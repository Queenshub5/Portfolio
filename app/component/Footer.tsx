import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className="container mx-auto px-4">
      {/* Changed h-15 to py-6 so the background dynamically scales with the content height */}
      <div className="bg-gray-400 w-full py-6 px-6 rounded-lg">
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

          {/* Navigation Links: Stacked on mobile, row on desktop */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center text-sm md:text-base font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link
              href="/project"
              className="hover:text-white transition-colors"
            >
              Project
            </Link>
          </div>

          {/* Action Button */}
          <button className="bg-black text-white hover:text-gray-200 rounded-full px-8 py-2 text-sm transition-colors w-full sm:w-auto">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
