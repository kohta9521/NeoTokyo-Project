import React from "react";

// next
import Image from "next/image";
import Link from "next/link";

// icons
import { IoArrowForwardCircleSharp } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="relative w-screen sm:w-[96vw] h-screen bg-black">
      <Image
        className="w-screen h-screen sm:w-screen sm:h-screen"
        src="/images/hero-bg.webp"
        width={2000}
        height={2000}
        // objectFit="fit"
        alt="hero-image"
      />
      <div className="absolute top-1/4 sm:top-[33%]">
        <p className="font-semibold text-base sm:text-2xl mb-1 sm:mb-3 ml-6 sm:ml-[75px] text-[var(--pink)]">
          あらゆる人のニューノーマルを創る
        </p>
        <h1 className="text-6xl sm:text-9xl font-semibold mb-5 sm:mb-10 ml-6 sm:ml-[70px] text-gray-100">
          Redefining perspectives and creating new values to shape the future.
        </h1>
        <p className="text-sm sm:text-xl ml-6 sm:ml-[80px] mb-12 text-gray-400">
          Bringing the finite land and the diverse values it generates into an
          entirely new field, realizing its potential, and spreading it across
          the world.
        </p>
        <Link
          href="/#about"
          className="inline-flex ml-6 sm:ml-[80px] items-center justify-center w-56 h-12 border border-[var(--pink)] rounded-full text-[var(--pink)] font-medium text-lg transition-all duration-300 hover:bg-[var(--pink)] hover:text-white group"
        >
          <span className="mr-3 transition-transform duration-300 group-hover:translate-x-1">
            View More !
          </span>
          <IoArrowForwardCircleSharp
            size={24}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
