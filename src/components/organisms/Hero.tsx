"use client";
import React, { useState } from "react";

// next
import Image from "next/image";

// data
import { heroImageData } from "@/data/heroImageData";

// components
import HeroImageCard from "../molecules/HeroImageCard";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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
      <div className="absolute top-44 h-auto">
        <p className="font-semibold text-base sm:text-2xl mb-1 sm:mb-3 ml-6 sm:ml-[75px] text-[var(--pink)]">
          あらゆる人のニューノーマルを創る
        </p>
        <h1 className="text-6xl sm:text-8xl font-semibold mb-5 sm:mb-10 ml-6 sm:ml-[70px] text-gray-100">
          Redefining perspectives and creating new values to shape the future.
        </h1>
        <p className="text-sm sm:text-xl ml-6 sm:ml-[80px] mb-12 text-gray-400">
          Bringing the finite land and the diverse values it generates into an
          entirely new field, realizing its potential, and spreading it across
          the world.
        </p>
      </div>
      <div className="absolute left-6 bottom-20 w-[90%] h-[550px] border border-white flex gap-4 px-8">
        {heroImageData.map((data, index) => (
          <HeroImageCard
            key={data.id}
            image={data.image}
            title={data.title}
            description={data.description}
            link={data.link}
            isActive={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
