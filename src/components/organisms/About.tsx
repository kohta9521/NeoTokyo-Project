import React from "react";

// next
import Image from "next/image";

// components

const About = () => {
  return (
    <div className="relative w-auto h-screen bg-black">
      <Image
        className="w-screen h-screen"
        src="/images/hero-bg.webp"
        width={2000}
        height={2000}
        alt="hero-image"
      />
      <div id="about" className="absolute top-32 l-64">
        {/* titleBox */}
        <div className="mt-32 ml-32">
          <p className="text-sm font-semibold text-[var(--pink)]">
            NEW TOKYOとは？
          </p>
          <h1 className="text-7xl font-semibold">About</h1>{" "}
        </div>
      </div>
    </div>
  );
};

export default About;
